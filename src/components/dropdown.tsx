import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa6'

interface DropdownProps {
    options: string[]
    onSelect: (option: string) => void
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null)
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggleDropdown = () => setIsOpen(!isOpen)

    const handleSelect = (option: string) => {
        setSelectedOption(option)
        onSelect(option)
        setIsOpen(false)
    }

    return (
        <div className='relative flex flex-col rounded-2xl w-[300px] h-fit mx-auto my-2'>
            <button
                className={`py-2 px-4 rounded-2xl font-sans active:bg-blue-800 w-full 
                                flex items-center justify-center space-x-4 text-xl md:text-2xl text-white font-normal
                                bg-blue-800 shadow-2xl`}
                onClick={toggleDropdown}
            >
                {selectedOption || 'select a project'}
                <FaChevronDown
                    className={`w-4 h-4 ml-8 transition-transform duration-200 ${
                        isOpen ? 'transform rotate-180' : ''
                    }`}
                />
            </button>
            {isOpen && (
                <div
                    className='absolute top-12 flex flex-col items-start rounded-2xl p-2 w-full
                                bg-blue-800'
                >
                    {options.map((option, index) => (
                        <div
                            key={index}
                            className='w-full py-2 px-4 text-center hover:bg-blue-800 cursor-pointer rounded-2xl
                                        font-sans text-md md: text-lg font-normal text-white mb-2'
                            onClick={() => handleSelect(option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Dropdown
