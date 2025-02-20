import resume from "../assets/resume25.pdf";

const PdfView = () => {
    return (
        <object
            data={resume}
            type="application/pdf"
            className="w-full h-96 md:h-screen border-2 border-t-0 border-blue-700 shadow-2xl"
        >
            <p>unable to display pdf...</p>
        </object>
    );
}

export default PdfView;