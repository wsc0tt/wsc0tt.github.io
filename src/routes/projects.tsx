import {FaFolderOpen} from "react-icons/fa6"
import Dropdown from "../components/dropdown"
import {useState} from "react"

const projects: string[] = [
    "Mobile Medical Application",
    "Portfolio Website",
    "OpenGL Mine Sweeper Game",
]

const Projects = () => {

    const [option, setOption] = useState(projects[0])

    return (
        <div className="max-w-screen-lg w-screen px-1">
            <div className="px-2 py-4 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-800">

                <div className="flex items-center space-x-3 justify-center mb-4">
                    <span className="font-serif text-2xl lg:text-3xl text-white">
                        projects
                    </span>
                    <FaFolderOpen className="w-8 h-8 text-spring"/>
                </div>

                <Dropdown
                    options={projects}
                    onSelect={setOption}
                />

            </div>
        </div>
    )

}

export default Projects