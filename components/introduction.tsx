import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image src="/hero-image.png" priority width="600" height="600" alt="Avatar" />
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">I'm Daniel Garrido, <br />
                        <TypeAnimation
                            sequence={[
                                'a Front-End Developer',
                                1000,
                                'a Backend Developer',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </h1>

                    <p className="mx-auto mb-2 text-xl md:text-lg md:mx-0 md:mb-8">
                    As a dedicated web developer specializing in both front-end and back-end development, I create seamless, user-friendly, and efficient web applications. 
                    With expertise in modern frameworks and technologies, I transform innovative ideas into dynamic, responsive websites that offer an exceptional user experience. My skills include crafting intuitive user interfaces, developing robust server-side logic, and ensuring the perfect synergy between the two to deliver high-quality digital solutions.
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <a href="/projects" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Check Projects
                        </a>
                        <a href="/contact"
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary" >
                            Contact me
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;