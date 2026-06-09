import React, { useEffect, useRef } from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/Lin-icon.png'
import HeaderSocials from './HeaderSocials'
import ReactTypingEffect from 'react-typing-effect'

// ── water ripple simulation constants ──────────────────────────────────────
const SCALE    = 3
const DAMPING  = 0.983
const STRENGTH = 350
const RADIUS   = 4

const Header = () => {
    const headerRef  = useRef(null)
    const canvasRef  = useRef(null)
    const h1Ref      = useRef(null)
    const typingRef  = useRef(null)
    const subtitleRef = useRef(null)

    useEffect(() => {
        const header = headerRef.current
        const canvas = canvasRef.current
        const ctx    = canvas.getContext('2d')

        // ── ripple state ──────────────────────────────────────────────────
        let width, height, buf1, buf2, imageData, animId

        const initRipple = () => {
            const rect = header.getBoundingClientRect()
            width  = Math.floor(rect.width  / SCALE)
            height = Math.floor(rect.height / SCALE)
            canvas.width  = width
            canvas.height = height
            buf1 = new Float32Array(width * height)
            buf2 = new Float32Array(width * height)
            imageData = ctx.createImageData(width, height)
        }

        const disturb = (cx, cy) => {
            const rect = header.getBoundingClientRect()
            const sx = Math.floor((cx - rect.left) / SCALE)
            const sy = Math.floor((cy - rect.top)  / SCALE)
            for (let dy = -RADIUS; dy <= RADIUS; dy++) {
                for (let dx = -RADIUS; dx <= RADIUS; dx++) {
                    if (dx*dx + dy*dy > RADIUS*RADIUS) continue
                    const nx = sx + dx, ny = sy + dy
                    if (nx > 0 && nx < width-1 && ny > 0 && ny < height-1)
                        buf1[ny * width + nx] += STRENGTH
                }
            }
        }

        const updateRipple = () => {
            for (let y = 1; y < height-1; y++) {
                for (let x = 1; x < width-1; x++) {
                    const i = y * width + x
                    buf2[i] = (buf1[i-1] + buf1[i+1] + buf1[i-width] + buf1[i+width]) / 2 - buf2[i]
                    buf2[i] *= DAMPING
                }
            }
            const tmp = buf1; buf1 = buf2; buf2 = tmp
        }

        const renderRipple = () => {
            const data = imageData.data
            for (let y = 1; y < height-1; y++) {
                for (let x = 1; x < width-1; x++) {
                    const i = y * width + x
                    const h = buf1[i]
                    if (Math.abs(h) < 0.8) { data[i*4+3] = 0; continue }
                    const gdx = buf1[i+1] - buf1[i-1]
                    const gdy = buf1[i+width] - buf1[i-width]
                    const shade = gdx * 0.6 + gdy * 0.6
                    // glass: pure white highlight, near-black shadow, both very low alpha
                    if (shade > 0) {
                        data[i*4] = 255; data[i*4+1] = 255; data[i*4+2] = 255
                        data[i*4+3] = Math.min(Math.abs(shade) * 0.8, 70)
                    } else {
                        data[i*4] = 0;   data[i*4+1] = 0;   data[i*4+2] = 0
                        data[i*4+3] = Math.min(Math.abs(shade) * 0.5, 40)
                    }
                }
            }
            ctx.putImageData(imageData, 0, 0)
        }

        const loop = () => {
            updateRipple()
            renderRipple()
            animId = requestAnimationFrame(loop)
        }

        initRipple()
        loop()

        // ── magnetic text state ───────────────────────────────────────────
        // current and target positions for lerp
        const pos = {
            h1:       { tx: 0, ty: 0, cx: 0, cy: 0 },
            typing:   { tx: 0, ty: 0, cx: 0, cy: 0 },
            subtitle: { tx: 0, ty: 0, cx: 0, cy: 0 },
        }
        // velocity for extra craziness
        let prevMX = 0, prevMY = 0
        let velX = 0, velY = 0
        let lerpId

        const lerpLoop = () => {
            const lerp = (a, b, t) => a + (b - a) * t

            pos.h1.cx       = lerp(pos.h1.cx,       pos.h1.tx,       0.08)
            pos.h1.cy       = lerp(pos.h1.cy,       pos.h1.ty,       0.08)
            pos.typing.cx   = lerp(pos.typing.cx,   pos.typing.tx,   0.06)
            pos.typing.cy   = lerp(pos.typing.cy,   pos.typing.ty,   0.06)
            pos.subtitle.cx = lerp(pos.subtitle.cx, pos.subtitle.tx, 0.05)
            pos.subtitle.cy = lerp(pos.subtitle.cy, pos.subtitle.ty, 0.05)

            if (h1Ref.current)
                h1Ref.current.style.transform =
                    `translate(${pos.h1.cx}px, ${pos.h1.cy}px) rotate(${pos.h1.cx * 0.02}deg)`
            if (typingRef.current)
                typingRef.current.style.transform =
                    `translate(${pos.typing.cx}px, ${pos.typing.cy}px)`
            if (subtitleRef.current)
                subtitleRef.current.style.transform =
                    `translate(${pos.subtitle.cx}px, ${pos.subtitle.cy}px) rotate(${pos.subtitle.cx * 0.015}deg)`

            lerpId = requestAnimationFrame(lerpLoop)
        }
        lerpLoop()

        const onMouseMove = (e) => {
            disturb(e.clientX, e.clientY)

            // velocity
            velX = e.clientX - prevMX
            velY = e.clientY - prevMY
            prevMX = e.clientX
            prevMY = e.clientY

            const rect = header.getBoundingClientRect()
            const cx = rect.left + rect.width  / 2
            const cy = rect.top  + rect.height / 2
            // offset from center, amplified by velocity
            const ox = (e.clientX - cx) * 0.03 + velX * 0.4
            const oy = (e.clientY - cy) * 0.03 + velY * 0.4

            // each layer gets a different depth multiplier
            pos.h1.tx       = ox * 1.8
            pos.h1.ty       = oy * 1.8
            pos.typing.tx   = ox * 1.2
            pos.typing.ty   = oy * 1.2
            pos.subtitle.tx = ox * 0.7
            pos.subtitle.ty = oy * 0.7
        }

        const onMouseLeave = () => {
            pos.h1.tx       = 0; pos.h1.ty       = 0
            pos.typing.tx   = 0; pos.typing.ty   = 0
            pos.subtitle.tx = 0; pos.subtitle.ty = 0
        }

        header.addEventListener('mousemove',  onMouseMove)
        header.addEventListener('mouseleave', onMouseLeave)
        window.addEventListener('resize',     initRipple)

        return () => {
            cancelAnimationFrame(animId)
            cancelAnimationFrame(lerpId)
            header.removeEventListener('mousemove',  onMouseMove)
            header.removeEventListener('mouseleave', onMouseLeave)
            window.removeEventListener('resize',     initRipple)
        }
    }, [])

    return (
        <header ref={headerRef} style={{ position: 'relative', overflow: 'hidden' }}>
            {/* ripple canvas — scoped to header only */}
            <canvas
                ref={canvasRef}
                style={{
                    position:       'absolute',
                    inset:          0,
                    width:          '100%',
                    height:         '100%',
                    pointerEvents:  'none',
                    mixBlendMode:   'screen',
                    imageRendering: 'pixelated',
                    zIndex:         1,
                }}
            />

            <div className="container header__container" style={{ position: 'relative', zIndex: 2 }}>
                <h2 ref={h1Ref} style={{ display: 'inline-block', willChange: 'transform' }}>
                    Hello I'm
                </h2>

                <div ref={typingRef} style={{ willChange: 'transform' }}>
                    <ReactTypingEffect text={["Lin"]} style={{ fontSize: 30 }} />
                </div>

                <h5
                    ref={subtitleRef}
                    className="text-ligt"
                    style={{ willChange: 'transform', display: 'inline-block' }}
                >
                    Frontend Developer
                </h5>

                <CTA />
                <HeaderSocials />
                <div className="me">
                    <img src={ME} alt="me" />
                </div>
            </div>
            <div className="header__spacer"></div>
        </header>
    )
}

export default Header
