import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import {
    FaHouse,
    FaFolder,
    FaEnvelope,
    FaUser,
    FaFileLines,
} from 'react-icons/fa6'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 450)
    const location = useLocation()

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 450)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const getNavItemClass = (path: string) => {
        const baseClass =
            'w-12 h-10 rounded-full flex items-center justify-center'
        return `${baseClass} ${
            location.pathname === path ? 'text-spring' : 'text-white'
        }`
    }

    return (
        <nav className='max-w-screen-lg w-screen px-2 py-2 md:py-4'>
            {isMobile ? (
                <div
                    className='flex items-center justify-between px-10 py-2 bg-gradient-to-r from-blue-700 to-blue-900
               text-white text-2xl rounded-full shadow-xl'
                >
                    <Link className={getNavItemClass('/')} to='/'>
                        <FaHouse />
                    </Link>
                    <Link
                        className={getNavItemClass('/projects')}
                        to='/projects'
                    >
                        <FaFolder />
                    </Link>
                    <Link className={getNavItemClass('/resume')} to='/resume'>
                        <FaFileLines />
                    </Link>
                    <Link className={getNavItemClass('/about')} to='/about'>
                        <FaUser />
                    </Link>
                    <Link className={getNavItemClass('/contact')} to='/contact'>
                        <FaEnvelope />
                    </Link>
                </div>
            ) : (
                <ul
                    className='flex justify-center items-center
                            rounded-full space-x-4 px-4 py-2 font-sans font-medium text-white
                            shadow-2xl md:space-x-10 md:px-14 lg:space-x-10 lg:px-20 bg-gradient-to-r from-blue-700 to-blue-900'
                >
                    <li>
                        <Link to='/'>home</Link>
                    </li>

                    <li>
                        <Link to='/projects'>projects</Link>
                    </li>

                    <li>
                        <Link to='/resume'>resume</Link>
                    </li>

                    <li>
                        <Link to='/about'>about</Link>
                    </li>

                    <li>
                        <Link to='/contact'>contact</Link>
                    </li>
                </ul>
            )}
        </nav>
    )
}

export default Navbar
