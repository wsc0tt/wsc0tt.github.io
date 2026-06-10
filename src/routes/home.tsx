import { homeContent } from '../content/portfolio'

const Home = () => {
    return (
        <div className='max-w-screen-lg w-screen px-2 pb-2'>
            {homeContent.map((section) => (
                <div
                    key={section.text}
                    className={`text-center px-10 py-5 flex flex-col ${section.wrapperClassName}`}
                >
                    <span className={section.className}>{section.text}</span>
                </div>
            ))}
        </div>
    )
}

export default Home
