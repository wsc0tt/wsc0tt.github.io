const Home = () => {
    return (
        <div className='max-w-screen-lg w-screen px-2 pb-2'>
            <div
                className='rounded-t-2xl text-center px-10 py-5 flex flex-col bg-gradient-to-r
                            from-blue-400 to-blue-600 shadow-2xl'
            >
                <span className='font-serif font-light text-white text-2xl lg:text-4xl'>
                    Hello there 👋
                </span>
            </div>

            <div
                className=' text-center px-10 py-5 flex flex-col bg-gradient-to-r from-blue-500 to-blue-700
                              shadow-2xl'
            >
                <span className='font-sans font-light text-white text-lg lg:text-xl'>
                    My name is William and I'm a Software Engineer specializing
                    in Full-Stack development + AI/ML.
                </span>
            </div>

            <div
                className='text-center px-10 py-5 flex flex-col bg-gradient-to-r from-blue-600 to-blue-800
                            shadow-2xl'
            >
                <span className='font-sans font-light text-white text-lg lg:text-xl'>
                    This portfolio website showcases my projects and technical
                    skills while providing access to my current resume and
                    recent projects.
                </span>
            </div>

            <div
                className=' text-center px-10 py-5 flex flex-col bg-gradient-to-r from-blue-800 to-blue-900
                            shadow-2xl'
            >
                <span className='font-sans font-light text-white text-lg lg:text-xl'>
                    I'm actively seeking software engineer positions for 2026!
                </span>
            </div>

            <div
                className='rounded-b-2xl text-center px-10 py-5 flex flex-col bg-gradient-to-r from-blue-900 to-blue-950
                            shadow-2xl'
            >
                <span className='font-sans font-light text-white text-lg lg:text-xl'>
                    Explore my recent work, and don't hesitate to reach out
                    through the contact page. I look forward to connecting with
                    you!
                </span>
            </div>
        </div>
    )
}

export default Home
