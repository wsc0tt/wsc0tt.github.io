const SocialButton = (props) => {
    return (
        <a href={props.link}>
            <button
                className="flex flex-row items-center bg-blue-800 py-2 px-3 rounded-full shadow-lg font-sans text-lg md:text-xl lg:text-xl">
                <props.icon className="icon"/>
                {props.text}
            </button>
        </a>
    )
}

export default SocialButton;