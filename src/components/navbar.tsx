import { Link } from 'react-router-dom'
import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import {
    FaFolder,
    FaEnvelope,
    FaUser,
    FaFileLines,
} from 'react-icons/fa6'
import { useLocation } from 'react-router-dom'

const navItems = [
    { path: '/', label: 'projects', Icon: FaFolder },
    { path: '/resume', label: 'resume', Icon: FaFileLines },
    { path: '/about', label: 'about', Icon: FaUser },
    { path: '/contact', label: 'contact', Icon: FaEnvelope },
]

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 450)
    const [activeIndicator, setActiveIndicator] = useState({
        width: 0,
        height: 0,
        left: 0,
        top: 0,
    })
    const location = useLocation()
    const navRef = useRef<HTMLDivElement>(null)
    const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({})

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 450)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useLayoutEffect(() => {
        const updateActiveIndicator = () => {
            const activeItem = itemRefs.current[location.pathname]
            const nav = navRef.current

            if (!activeItem || !nav) {
                return
            }

            const itemRect = activeItem.getBoundingClientRect()
            const navRect = nav.getBoundingClientRect()

            setActiveIndicator({
                width: itemRect.width,
                height: itemRect.height,
                left: itemRect.left - navRect.left,
                top: itemRect.top - navRect.top,
            })
        }

        updateActiveIndicator()
        window.addEventListener('resize', updateActiveIndicator)

        return () => window.removeEventListener('resize', updateActiveIndicator)
    }, [location.pathname, isMobile])

    const setNavItemRef = (path: string) => (element: HTMLAnchorElement | null) => {
        itemRefs.current[path] = element
    }

    const indicatorPadding = isMobile
        ? { x: 6, y: 3 }
        : { x: 10, y: 4 }

    const indicatorStyle = {
        width: activeIndicator.width + indicatorPadding.x * 2,
        height: activeIndicator.height + indicatorPadding.y * 2,
        transform: `translate(${activeIndicator.left - indicatorPadding.x - 1}px, ${
            activeIndicator.top - indicatorPadding.y + 1
        }px)`,
    }

    const getNavItemClass = (path: string) => {
        const baseClass =
            'relative z-10 w-12 h-10 rounded-full flex items-center justify-center transition-colors duration-150'
        return `${baseClass} ${
            location.pathname === path
                ? 'text-spring'
                : 'text-white hover:text-spring'
        }`
    }

    const getDesktopNavItemClass = (path: string) => {
        const baseClass =
            'relative z-10 -translate-y-px rounded-full px-4 py-1 transition-colors duration-150'
        return `${baseClass} ${
            location.pathname === path
                ? 'text-spring'
                : 'text-white hover:text-spring'
        }`
    }

    return (
        <nav className='max-w-screen-lg w-screen px-2 py-2 md:py-4'>
            {isMobile ? (
                <div
                    ref={navRef}
                    className='relative flex items-center justify-between px-10 py-2 bg-gradient-to-r from-blue-700 to-blue-900
               text-white text-2xl rounded-full shadow-xl'
                >
                    <span
                        className='absolute left-0 top-0 rounded-full bg-blue-950/60 transition-all duration-150 ease-out'
                        style={indicatorStyle}
                    />
                    {navItems.map(({ path, Icon }) => (
                        <Link
                            key={path}
                            ref={setNavItemRef(path)}
                            className={getNavItemClass(path)}
                            to={path}
                        >
                            <Icon />
                        </Link>
                    ))}
                </div>
            ) : (
                <div
                    ref={navRef}
                    className='relative flex w-full items-center justify-between
                            rounded-full px-8 py-2 font-sans font-medium text-white
                            text-lg md:text-2xl lg:text-3xl shadow-2xl md:px-16 lg:px-24 bg-gradient-to-r from-blue-700 to-blue-900'
                >
                    <span
                        className='absolute left-0 top-0 rounded-full bg-blue-950/60 transition-all duration-150 ease-out'
                        style={indicatorStyle}
                    />
                    {navItems.map(({ path, label }) => (
                        <Link
                            key={path}
                            ref={setNavItemRef(path)}
                            className={getDesktopNavItemClass(path)}
                            to={path}
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    )
}

export default Navbar
