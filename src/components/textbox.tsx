const TextBox = ({text}: { text: string }) => {
    return (
        <div className="flex flex-col max-w-screen-lg h-full bg-neutral-200
                        rounded-3xl mx-1 border-blue-700 border-2 py-4 px-6">
            <p className="text-black font-regular md:ml-4">
                {text}
            </p>
        </div>
    )
}

export default TextBox