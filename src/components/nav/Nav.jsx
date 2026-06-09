import React, { useEffect, useState } from 'react'
import './nav.css'
import { AiTwotoneHome }        from 'react-icons/ai'
import { FaUserCircle }         from 'react-icons/fa'
import { FaBookReader }         from 'react-icons/fa'
import { MdPermContactCalendar } from 'react-icons/md'

const links = [
    { id: '#',          icon: <AiTwotoneHome />,          label: 'Home'       },
    { id: '#about',     icon: <FaUserCircle />,           label: 'About'      },
    { id: '#experience',icon: <FaBookReader />,           label: 'Experience' },
    { id: '#contact',   icon: <MdPermContactCalendar />,  label: 'Contact'    },
]

const Nav = () => {
    const [active, setActive] = useState('#')

    useEffect(() => {
        const sections = links
            .filter(l => l.id !== '#')
            .map(l => document.querySelector(l.id))
            .filter(Boolean)

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting)
                        setActive('#' + entry.target.id)
                })
            },
            { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
        )

        sections.forEach(s => observer.observe(s))

        // snap back to home when nothing is intersecting near top
        const onScroll = () => {
            if (window.scrollY < 100) setActive('#')
        }
        window.addEventListener('scroll', onScroll)

        return () => {
            sections.forEach(s => observer.unobserve(s))
            window.removeEventListener('scroll', onScroll)
        }
    }, [])

    return (
        <nav>
            {links.map(({ id, icon, label }) => (
                <a
                    key={id}
                    href={id}
                    className={active === id ? 'active' : ''}
                    onClick={() => setActive(id)}
                    aria-label={label}
                >
                    {icon}
                    <span className="nav__tooltip">{label}</span>
                </a>
            ))}
        </nav>
    )
}

export default Nav
