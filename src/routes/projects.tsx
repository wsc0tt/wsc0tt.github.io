import { FaFolderOpen } from 'react-icons/fa6'
import { useState } from 'react'

const projects: string[] = [
    'Mobile Medical',
    'Portfolio Website',
    'OpenGL Mine Sweeper Game',
]

const Projects = () => {
    const [option, setOption] = useState<string>(projects[0])

    return (
        <div className='max-w-screen-lg w-screen px-2'>
            <div className='px-3 py-4 rounded-t-2xl bg-gradient-to-r from-blue-500 to-blue-800'>
                <div className='flex items-center space-x-3 justify-center mb-4'>
                    <span className='font-serif text-2xl lg:text-3xl text-white'>
                        projects
                    </span>
                    <FaFolderOpen className='w-8 h-8 text-spring' />
                </div>
                <div className='grid grid-cols-4 gap-3 w-full font-sans text-sm'>
                    <button
                        onClick={() => setOption(projects[0])}
                        className='col-span-1 bg-blue-900 hover:bg-blue-800 rounded-lg flex items-center justify-center p-2'
                    >
                        {projects[0]}
                    </button>
                    <button className='col-span-1 bg-blue-900 hover:bg-blue-800 rounded-lg flex items-center justify-center p-2'>
                        Sun Armor Ai
                    </button>
                    <button className='col-span-1 bg-blue-900 hover:bg-blue-800 rounded-lg flex items-center justify-center p-2'>
                        Maritime Assign
                    </button>
                    <button className='col-span-1 bg-blue-900 hover:bg-blue-800 rounded-lg flex items-center justify-center p-2'>
                        project1
                    </button>
                </div>
            </div>
            <div className='bg-blue-700'>{option}</div>
            <div className='rounded-b-2xl bg-gradient-to-r from-blue-500 to-blue-800 h-10'></div>
        </div>
    )
}

export default Projects
