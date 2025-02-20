import {FaDownload} from 'react-icons/fa6';

const DownloadButton = ({file}: { file: string }) => {
    return (
        <a href={file} download="William_Scott_Resume">
            <button className="w-full px-5 py-2 rounded-b-2xl font-medium flex
                        items-center bg-spring shadow-xl justify-center
                         text-lg md:text-xl font-sans ring-2 ring-blue-700 hover:ring-4
                        transition-all duration-300 text-blue-700 mx-auto">
                download pdf
                <FaDownload className="w-4 h-4 md:w-6 md:h-6 ml-2"/>
            </button>
        </a>
    )
}

export default DownloadButton;