import self from '../assets/self2.jpg'
import { profile } from '../content/portfolio'

const Header = () => {
    return (
        <header className='max-w-screen w-screen flex flex-row items-center justify-center space-x-2 md:space-x-4 px-2'>
            <img
                src={self}
                alt={profile.imageAlt}
                className='rounded-full w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 ring-2 ring-blue-700
                        hover:ring-4 transition-all duration-300 object-cover drop-shadow-lg'
            />
            <div className='flex flex-col items-center'>
                <span className='font-serif text-3xl leading-none md:text-4xl lg:text-6xl text-white'>
                    {profile.name}
                </span>
                <span className='font-sans leading-none font-medium text-2xl md:text-4xl lg:text-5xl text-center text-white'>
                    {profile.title}
                </span>
            </div>
        </header>
    )
}

export default Header
