import DownloadButton from '../components/downloadButton.tsx'
import PdfView from '../components/pdfView.tsx'
import resume from '../assets/resume25.pdf'
import { FaFileLines } from 'react-icons/fa6'

const Resume = () => {
    return (
        <div className='w-screen max-w-screen-lg px-1'>
            <div
                className='px-2 py-4 rounded-t-2xl
                            bg-gradient-to-r from-blue-500 to-blue-800'
            >
                <div className='flex items-center space-x-3 justify-center'>
                    <span className='font-serif text-2xl lg:text-3xl text-neutral-50'>
                        resume
                    </span>
                    <FaFileLines className='text-2xl lg:text-4xl text-spring' />
                </div>
            </div>
            <PdfView />
            <DownloadButton file={resume} />
        </div>
    )
}

export default Resume
