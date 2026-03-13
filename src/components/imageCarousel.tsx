import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'

const ImageCarousel = ({
    images,
    imagesDir,
}: {
    images: string[]
    imagesDir?: string
}) => {
    const [current, setCurrent] = useState(0)

    const prev = () => setCurrent((i) => (i === 0 ? images.length - 1 : i - 1))
    const next = () => setCurrent((i) => (i === images.length - 1 ? 0 : i + 1))

    return (
        <div className='relative w-full rounded-lg overflow-hidden my-2'>
            <img
                src={
                    imagesDir
                        ? `/${imagesDir}/${images[current]}`
                        : images[current]
                }
                className='w-full object-contain rounded-lg max-h-96'
            />
            {images.length > 1 && (
                <>
                    <button
                        onClick={prev}
                        className='absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full'
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        onClick={next}
                        className='absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full'
                    >
                        <FaChevronRight />
                    </button>
                    <div className='absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1'>
                        {images.map((_, i) => (
                            <div
                                key={i}
                                className={`w-2 h-2 rounded-full ${i === current ? 'bg-white' : 'bg-white/40'}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default ImageCarousel
