import {
    FaArrowUpRightFromSquare,
    FaFolderOpen,
    FaGithub,
    FaKey,
} from 'react-icons/fa6'
import SocialButton from '../components/socialButton'
import ImageCarousel from '../components/imageCarousel'
import { projects, type Project } from '../content/portfolio'

const ProjectDetails = ({ project }: { project: Project }) => {
    return (
        <div className='flex flex-col gap-2 px-6 py-4'>
            <span className='text-2xl font-semibold text-white'>
                {project.title}
            </span>

            {project.status && (
                <span className='w-fit rounded-full bg-spring px-3 py-1 text-sm font-semibold text-blue-950'>
                    {project.status}
                </span>
            )}

            <span className='text-blue-100 text-md'>
                {project.description}
            </span>

            {project.logo && (
                <div className='my-2 flex items-center justify-center gap-3'>
                    <img
                        src={project.logo}
                        alt={project.logoAlt ?? `${project.title} logo`}
                        className='h-16 w-16 object-contain'
                    />
                    {project.logoText && (
                        <span className='font-rubik text-3xl font-semibold text-white'>
                            {project.logoText}
                        </span>
                    )}
                </div>
            )}

            {project.stack && (
                <div className='flex flex-wrap gap-2'>
                    {project.stack.map((tech) => (
                        <span
                            key={tech}
                            className='bg-blue-900 text-blue-100 text-sm px-3 py-1 rounded-full'
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            )}

            {project.video ? (
                <div className='aspect-video w-full rounded-lg overflow-hidden my-2'>
                    <iframe
                        src={project.video}
                        className='w-full h-full'
                        allowFullScreen
                    />
                </div>
            ) : project.images?.length ? (
                <ImageCarousel
                    images={project.images}
                    imagesDir={project.imagesDir}
                />
            ) : null}

            <div className='flex flex-wrap gap-3'>
                {project.github && (
                    <SocialButton
                        link={project.github}
                        Icon={FaGithub}
                        text='github'
                    />
                )}
                {project.link && (
                    <SocialButton
                        link={project.link}
                        Icon={FaArrowUpRightFromSquare}
                        text='live site'
                    />
                )}
                {project.cta && (
                    <SocialButton
                        link={project.cta.href}
                        Icon={FaKey}
                        text={project.cta.text}
                    />
                )}
            </div>
        </div>
    )
}

const Projects = () => {
    return (
        <div className='max-w-screen-lg w-screen px-2'>
            <div className='rounded-2xl shadow-lg overflow-auto'>
                <div className='px-3 py-4 bg-gradient-to-r from-blue-500 to-blue-800'>
                    <div className='flex items-center space-x-3 justify-center'>
                        <span className='font-serif text-2xl lg:text-3xl text-white'>
                            projects
                        </span>
                        <FaFolderOpen className='text-2xl lg:text-4xl text-spring' />
                    </div>
                </div>

                <div className='bg-blue-600 font-sans flex flex-col divide-y divide-blue-500'>
                    {projects.map((project) => (
                        <ProjectDetails key={project.id} project={project} />
                    ))}
                </div>

                <div className='bg-gradient-to-r from-blue-500 to-blue-800 h-5'></div>
            </div>
        </div>
    )
}

export default Projects
