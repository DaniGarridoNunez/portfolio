
"use client"

import Image from "next/image";

import { MotionTransition } from "./transition-component";

export function Avatar() {
    return (
        <MotionTransition position="bottom" className="bottom-0 right-10 hidden md:inline-block md:absolute ">
            <Image src="/services-image.png" width="300" height="400"  alt="Particles " />
        </MotionTransition>
    )
}
