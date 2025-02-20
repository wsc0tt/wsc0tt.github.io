import React from 'react';

interface SocialButtonProps {
    link: string,
    text: string,
    Icon: React.ElementType;
}

const SocialButton: React.FC<SocialButtonProps> = ({link, Icon, text}) => {
    return (
        <a href={link}>
            <button
                className="flex flex-row items-center bg-blue-800 py-2 px-3 rounded-full shadow-lg font-sans text-lg md:text-xl lg:text-xl">
                <Icon className="icon"/>
                {text}
            </button>
        </a>
    )
}

export default SocialButton;