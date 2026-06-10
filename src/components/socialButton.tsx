import React from 'react'

interface SocialButtonProps {
    link: string
    text: string
    Icon: React.ElementType
}

const SocialButton: React.FC<SocialButtonProps> = ({ link, Icon, text }) => {
    const isExternal = /^https?:\/\//.test(link)

    return (
        <a
            href={link}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            className='flex flex-row items-center bg-blue-900 py-2 px-3 rounded-full shadow-lg font-sans text-lg md:text-xl lg:text-xl transition-all duration-300 ease-in-out hover:scale-105 transform-gpu'
        >
            <Icon className='icon' />
            {text}
        </a>
    )
}

export default SocialButton
