import collage from '../assets/collage.jpg'
import ImageWide from '../components/ImageWide.tsx'
import { aboutContent } from '../content/portfolio'

const About = () => {
    return (
        <div className='max-w-screen-lg w-screen px-2'>
            <ImageWide src={collage} alt={aboutContent.imageAlt} />
            <div className='flex rounded-b-2xl bg-gradient-to-r from-blue-600 to-blue-900 p-6 items-center justify-center'>
                <span className='font-sans font-normal text-white text-center text-base lg:text-lg leading-relaxed'>
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
