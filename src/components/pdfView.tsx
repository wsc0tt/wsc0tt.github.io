import resume from '../assets/William_Scott_76.pdf'

const PdfView = () => {
    return (
        <object
            data={resume}
            type='application/pdf'
            className='w-full h-96 md:h-screen shadow-2xl'
        >
            <p>unable to display pdf...</p>
        </object>
    )
}

export default PdfView
