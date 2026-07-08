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
            className='flex flex-row items-center bg-blue-900 py-2 px-3 rounded-full shadow-lg font-sans text-lg md:text-xl lg:text-xl transition-colors duration-150 ease-out hover:bg-blue-800 active:bg-blue-950'
        >
            <Icon className='mr-2 h-3.5 w-3.5 shrink-0 text-neutral-200 md:h-4 md:w-4' />
            {text}
        </a>
    )
}

export default SocialButton
