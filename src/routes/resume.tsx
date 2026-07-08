import DownloadButton from '../components/downloadButton.tsx'
import PdfView from '../components/pdfView.tsx'
import resume from '../assets/William_Scott_76.pdf'

const Resume = () => {
    return (
        <div className='w-screen max-w-screen-lg px-1'>
            <PdfView />
            <DownloadButton file={resume} />
        </div>
    )
}

export default Resume
