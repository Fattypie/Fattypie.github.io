import { useEffect, useRef } from 'react'

const SCALE = 3        // run simulation at 1/3 resolution for performance
const DAMPING = 0.985  // how quickly ripples die out (0-1)
const STRENGTH = 400   // disturbance strength on mouse move
const RADIUS = 4       // disturbance radius (in sim pixels)

const WaterRipple = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        let width, height, buf1, buf2, imageData, animId

        const init = () => {
            width  = Math.floor(window.innerWidth  / SCALE)
            height = Math.floor(window.innerHeight / SCALE)
            canvas.width  = width
            canvas.height = height
            buf1 = new Float32Array(width * height)
            buf2 = new Float32Array(width * height)
            imageData = ctx.createImageData(width, height)
            // clear alpha so canvas starts transparent
            imageData.data.fill(0)
        }

        const disturb = (cx, cy) => {
            const sx = Math.floor(cx / SCALE)
            const sy = Math.floor(cy / SCALE)
            for (let dy = -RADIUS; dy <= RADIUS; dy++) {
                for (let dx = -RADIUS; dx <= RADIUS; dx++) {
                    if (dx * dx + dy * dy > RADIUS * RADIUS) continue
                    const nx = sx + dx
                    const ny = sy + dy
                    if (nx > 0 && nx < width - 1 && ny > 0 && ny < height - 1) {
                        buf1[ny * width + nx] += STRENGTH
                    }
                }
            }
        }

        const update = () => {
            for (let y = 1; y < height - 1; y++) {
                for (let x = 1; x < width - 1; x++) {
                    const i = y * width + x
                    buf2[i] = (
                        buf1[i - 1] +
                        buf1[i + 1] +
                        buf1[i - width] +
                        buf1[i + width]
                    ) / 2 - buf2[i]
                    buf2[i] *= DAMPING
                }
            }
            const tmp = buf1; buf1 = buf2; buf2 = tmp
        }

        const render = () => {
            const data = imageData.data
            for (let y = 1; y < height - 1; y++) {
                for (let x = 1; x < width - 1; x++) {
                    const i = y * width + x
                    const h = buf1[i]

                    if (Math.abs(h) < 0.8) {
                        data[i * 4 + 3] = 0
                        continue
                    }

                    // surface gradient → fake refraction lighting
                    const gdx = buf1[i + 1] - buf1[i - 1]
                    const gdy = buf1[i + width] - buf1[i - width]
                    const shade = gdx * 0.6 + gdy * 0.6

                    const alpha = Math.min(Math.abs(h) * 0.35, 160)

                    if (shade > 0) {
                        // crest highlight — warm pink/white
                        data[i * 4]     = 255
                        data[i * 4 + 1] = 200
                        data[i * 4 + 2] = 230
                    } else {
                        // trough shadow — cool purple
                        data[i * 4]     = 80
                        data[i * 4 + 1] = 60
                        data[i * 4 + 2] = 160
                    }
                    data[i * 4 + 3] = Math.min(alpha, Math.abs(shade) * 1.5)
                }
            }
            ctx.putImageData(imageData, 0, 0)
        }

        const loop = () => {
            update()
            render()
            animId = requestAnimationFrame(loop)
        }

        init()
        loop()

        const onMouseMove = (e) => disturb(e.clientX, e.clientY)
        const onResize    = () => init()

        window.addEventListener('mousemove', onMouseMove)
        window.addEventListener('resize',    onResize)

        return () => {
            cancelAnimationFrame(animId)
            window.removeEventListener('mousemove', onMouseMove)
            window.removeEventListener('resize',    onResize)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            style={{
                position:      'fixed',
                top:           0,
                left:          0,
                width:         '100vw',
                height:        '100vh',
                pointerEvents: 'none',
                zIndex:        9997,
                mixBlendMode:  'screen',
                imageRendering: 'pixelated',
            }}
        />
    )
}

export default WaterRipple
