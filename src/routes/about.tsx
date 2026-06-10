import collage from '../assets/collage.jpg'
import ImageWide from '../components/ImageWide.tsx'
import { FaUser } from 'react-icons/fa6'
import { aboutContent } from '../content/portfolio'

const About = () => {
    return (
        <div className='max-w-screen-lg w-screen px-2'>
            <div
                className='flex items-center space-x-3 justify-center rounded-t-2xl
                            bg-gradient-to-r from-blue-500 to-blue-800 py-4'
            >
                <span className='font-serif text-2xl lg:text-3xl text-white'>
                    about me
                </span>
                <FaUser className='text-2xl lg:text-4xl text-spring' />
            </div>
            <ImageWide src={collage} alt={aboutContent.imageAlt} />
            <div className='flex rounded-b-2xl bg-gradient-to-r from-blue-600 to-blue-900 p-6 items-center justify-center'>
                <span className='font-sans font-light text-white text-center text-md lg:text-xl'>
                    {aboutContent.paragraphs.map((paragraph, index) => (
                        <span key={paragraph}>
                            {paragraph}
                            {index < aboutContent.paragraphs.length - 1 && (
                                <>
                                    <br />
                                    <br />
                                </>
                            )}
                        </span>
                    ))}
                </span>
            </div>
        </div>
    )
}

export default About
