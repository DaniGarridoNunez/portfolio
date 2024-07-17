"use client"

import Image from 'next/image'

const CircleImage = () => {
    return (
        <div className="-bottom-28 -right-28 hidden md:inline-block md:absolute overflow-hidden">
            <Image src="/circle-image.png" width="350" height="350" className="w-full h-full " alt="Particles " />
        </div>

    );
}

export default CircleImage;