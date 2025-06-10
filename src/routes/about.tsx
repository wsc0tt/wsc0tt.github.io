import collage from '../assets/collage.jpg'
import ImageWide from '../components/ImageWide.tsx'
import { FaUser } from 'react-icons/fa6'

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
            <ImageWide src={collage} alt='mt. baker' />
            <div className='flex rounded-b-2xl bg-gradient-to-r from-blue-600 to-blue-900 p-6 items-center justify-center'>
                <span className='font-sans font-light text-white text-center text-md lg:text-xl'>
                    I'm seeking my first software engineering role at a tech
                    company. I'm open to various specializations but want to
                    write clean, efficient code that makes an impact.
                    <br></br>
                    <br></br>
                    Growing up in the Pacific Northwest, I initially pursued
                    general engineering but realized it wasn't my passion. After
                    years in construction—working as a laborer and eventually
                    foreman—I discovered my love for software development while
                    taking a computer science course during 12-hour work days.
                    <br></br>
                    <br></br>
                    This transition revealed how much of my creativity was
                    untapped in construction. I found I could successfully
                    learn, code, and apply my existing problem-solving skills to
                    software development.
                    <br></br>
                    <br></br>
                    Now in my senior year at Sacramento State, I'm excited about
                    software's potential for impact and the increasing
                    usefulness of Ai and ready to work on solving real-world
                    problems.
                    <br></br>
                    <br></br>
                    Thank you for reading my story. I look forward to hearing
                    from you.
                    <br></br>
                    <br></br>
                    William
                </span>
            </div>
        </div>
    )
}

export default About
