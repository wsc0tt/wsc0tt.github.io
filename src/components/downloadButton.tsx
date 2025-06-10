import { FaDownload } from 'react-icons/fa6'

const DownloadButton = ({ file }: { file: string }) => {
    return (
        <a href={file} download='William_Scott_Resume'>
            <button
                className='w-full py-4 rounded-b-2xl font-medium flex
                        items-center justify-center bg-blue-900 shadow-2xl
                         text-xl lg:text-2xl font-sans text-white hover:bg-blue-700
                        transition-colors ease-in duration-200 mx-auto'
            >
                download pdf
                <FaDownload className='w-4 h-4 md:w-6 md:h-6 ml-2' />
            </button>
        </a>
    )
}

export default DownloadButton
