import collage from '../assets/collage.jpg'
import ImageWide from "../components/ImageWide.tsx";
import {FaUser} from "react-icons/fa6";

const About = () => {
    return (
        <div className="max-w-screen-lg w-screen px-2">
            <div
                className="flex items-center space-x-3 justify-center rounded-t-2xl
                            bg-gradient-to-r from-blue-500 to-blue-800 py-4">
                    <span className="font-serif text-2xl lg:text-3xl text-white">
                        about me
                    </span>
                <FaUser className="w-8 h-8 text-spring"/>
            </div>
            <ImageWide src={collage} alt="mt. baker"/>
            <div
                className="flex rounded-b-2xl bg-gradient-to-r from-blue-600 to-blue-900 p-6 items-center justify-center">

                <span className="font-sans font-light text-white text-center text-lg">
                    I am seeking for my first
                    significant role as a software engineer for a company working in the tech industry. While I am
                    not particular to any specific role, field, or specialization, I am searching for a role that
                    requires an engineer to write effective, minimalistic, and efficient code that makes a difference.
                    <br></br><br></br>
                    I was born and raised in the pacific northwest, in the shadow of the great cascade mountain range
                    and surrounded by the beautiful waters of the puget sound. My path in life did not immediately lead
                    me to software engineering, but I was exposed early to the idea of building things. I originally
                    thought to pursue a career in general engineering as I was good at math and physics. I soon realized
                    that my heart was not in this dream or spending time going to school for this goal...
                    <br></br><br></br>
                    After working several years as a laborer in the union and eventually as a foreman for a construction
                    crew, it dawned on me that I should pursue something that I love. I decided to try taking a computer
                    science course while working twelve hour days as a construction laborer as hard as that sounds. In
                    this learning experience, I discovered that I could successfully learn, code, and apply knowledge I
                    had already learned up to this point in my life to the software environment. Much of my creativity
                    and expression was going unused in my current position, and I felt that the best thing for my life
                    and career was to pursue this new idea and dream of becoming a software engineer.
                    <br></br><br></br>
                    Currently, I am in my senior year at California State University, Sacramento, and I have enjoyed
                    learning about software and picturing the immense impact and possibilities that can be achieved
                    with this new knowledge and experience. I cannot put into words the excitement and motivation
                    that I have for this new career path, and I hope that by writing this short bio, a dream I have
                    had for years may materialize and become my reality.
                    <br></br><br></br>
                    Thank you for reading my story and I look forward to hearing from you soon,
                    <br></br><br></br>
                    William

                </span>
            </div>
        </div>
    )
}

export default About