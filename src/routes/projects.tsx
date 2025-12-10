import { FaFolderOpen } from 'react-icons/fa6'
import { useState } from 'react'
import projectList from '../components/projectList'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import SocialButton from '../components/socialButton'
import { FaGithub } from 'react-icons/fa6'

interface Project {
    id: number
    title: string
    description?: string
    imagesDir?: string
    images?: string[]
    stack?: string[]
    link?: string
    files?: string
    summary?: string
}

// ProjectDetails component for cleaner separation
const ProjectDetails = ({ project }: { project: Project }) => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        cssEase: 'linear',
    }

    return (
        <>
            {/* Changed bg color to solid blue instead of gradient to avoid overlay effect */}
            <div className='text-center text-xl font-medium bg-blue-800 py-4'>
                {project.title}
            </div>

            <div className='w-full px-10 pb-6 pt-4'>
                {project.images &&
                    project.images.length > 0 &&
                    project.imagesDir && (
                        <Slider {...settings}>
                            {project.images.map((image, index) => (
                                <div key={index}>
                                    <div className='flex justify-center'>
                                        <div className='max-h-[500px] max-w-[500px] items-center justify-center'>
                                            <img
                                                src={`${project.imagesDir}/${image}`}
                                                alt={`${project.title} - ${
                                                    index + 1
                                                }`}
                                                className='w-full max-h-[500px] rounded-lg shadow-lg object-contain'
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    )}
            </div>

            <div className='text-center text-md pt-2 text-white'>
                <span className='text-lg'>
                    Technologies: {project.stack && project.stack.join(', ')}
                </span>
                <br />
                <div className='bg-blue-800 p-2 my-2 mx-2 rounded-lg'>
                    {project.summary}
                </div>
            </div>
            <div className='flex flex-row items-center justify-center space-x-4'>
                {project.files && (
                    <SocialButton
                        link={project.files}
                        Icon={FaGithub}
                        text='github'
                    />
                )}
            </div>
        </>
    )
}

// Placeholder component when no project is selected
const ProjectPlaceholder = () => {
    return (
        <div className='text-center text-xl font-medium bg-blue-800 py-4 w-full'>
            Select a project
        </div>
    )
}

const Projects = () => {
    const [selectedProj, setSelectedProj] = useState<Project | null>(null)

    return (
        <div className='max-w-screen-lg w-screen px-2'>
            {/* Container for the entire component with no background */}
            <div className='rounded-2xl overflow-hidden shadow-lg'>
                {' '}
                {/* Wrapper with rounded corners */}
                {/* Header section - keep gradient here */}
                <div className='px-3 py-4 bg-gradient-to-r from-blue-500 to-blue-800'>
                    <div className='flex items-center space-x-3 justify-center mb-4'>
                        <span className='font-serif text-2xl lg:text-3xl text-white'>
                            projects
                        </span>
                        <FaFolderOpen className='text-2xl lg:text-4xl text-spring' />
                    </div>
                    <div className='grid grid-cols-3 gap-3 w-full font-sans text-md'>
                        {projectList.map((project) => (
                            <button
                                key={project.id}
                                onClick={() => setSelectedProj(project)}
                                className={`col-span-1 ${
                                    selectedProj?.id === project.id
                                        ? 'bg-blue-700'
                                        : 'bg-blue-900 hover:bg-blue-800'
                                } rounded-lg flex items-center justify-center p-2`}
                            >
                                {project.title}
                            </button>
                        ))}
                    </div>
                </div>
                {/* Content section with solid background to prevent gradient overlay */}
                <div className='bg-blue-600 font-sans flex flex-col py-4'>
                    {selectedProj ? (
                        <ProjectDetails project={selectedProj} />
                    ) : (
                        <ProjectPlaceholder />
                    )}
                </div>
                {/* Custom footer gradient - separate from content section */}
                <div className='bg-gradient-to-r from-blue-500 to-blue-800 h-5'></div>
            </div>
        </div>
    )
}

export default Projects
