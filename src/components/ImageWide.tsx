import React from 'react'

interface ImageProps {
    src: string;
    alt: string;
}

const ImageWide: React.FC<ImageProps> = ({src, alt}) => {
    return <img src={src} alt={alt} className=""/>
}

export default ImageWide