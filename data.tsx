import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, MessageSquareMore, Crop, Pencil, Computer, Book, Rocket, Speech, Phone } from "lucide-react";

export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "Me",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Resume",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/cv",
    },
    {
        id: 4,
        title: "Projects",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Ecommerce Developer",
        subtitle: "VASS - Madrid",
        description: "I primarily developed custom modules for Magento using PHP, ensuring robust and scalable solutions for our eCommerce platforms. I occasionally worked with LESS for styling to create visually appealing and responsive designs. Additionally, I integrated and utilized APIs to enhance the functionality and performance of the eCommerce sites. My role involved collaborating with cross-functional teams to deliver high-quality, user-friendly online shopping experiences that drove customer satisfaction and business growth",
        dateStart: "MAR 2024",
        dateEnd: "current",
        icons: "php,docker,less,linux,gitlab,nginx,mysql",
    },
    {
        id: 2,
        title: "Full Stack Developer",
        subtitle: "Arasaka SL",
        description: "I contributed to coding an internal program that significantly helped the company achieve its goals and optimize its functionality. This involved developing both front-end and back-end solutions, ensuring seamless integration and performance, also I provided innovative front-end solutions that enhanced user interaction and experience. Through collaboration with the team, I played a key role in delivering a robust and efficient internal system that improved overall company operations.",
        dateStart: "FEB 2022",
        dateEnd: "MAR 2024",
        icons: "nextjs,react,materialui,ts,tailwind,sass,gulp,mongodb",
    },
    {
        id: 3,
        title: "Computer Technician (temporary replacement)",
        subtitle: "UEM - Madrid",
        description: "I was a  responsible for replacing computers and various hardware components. I provided comprehensive support for client issues, troubleshooting and resolving technical problems efficiently. My role involved diagnosing hardware and software issues, performing system upgrades, and ensuring optimal performance of computer systems. I consistently delivered excellent customer service, maintaining high levels of client satisfaction through prompt and effective technical support",
        dateStart: "Oct 2022",
        dateEnd: "Nov 2022",
        icons: "windows",
    },
    {
        id: 4,
        title: "Web Developer",
        subtitle: "AgenciaCom - Mallorca",
        description: "I developed and maintained websites using PHP and Content Management Systems (CMS). I implemented custom styling and scripts to enhance website functionality and user experience. Migrate code from local environments to production servers. Collaborating with cross-functional teams, I delivered high-quality, scalable web solutions on time and within budget.",
        dateStart: "MAR 2021",
        dateEnd: "JUN 2021",
        icons: "wordpress,css,jquery,html,mysql",
    },
];

export const socials = [
    {
        id: 1,
        logo: <MessageSquareMore size={30} strokeWidth={1} />,
        src: "https://wa.me/34634513582",
    },
    {
        id: 2,
        logo: <Phone size={30} strokeWidth={1} />,
        src: "tel:+34634513582",
    },
    {
        id: 3,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/daniel-garrido-nu%C3%B1ez-87b041223/",
    },
];

export const dataCounter = [
    {
        id: 0,
        endCounter: 2,
        text: "Years Of Experience",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 9,
        text: "Finished Projects",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 2,
        endCounter: 5,
        text: "Certifications Obtained",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 3,
        endCounter: 999,
        text: "Drinked Coffees",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Recipes Web",
        image: "/image-1.jpg",
        urlGithub: "#!",
    },
    {
        id: 2,
        title: "Desarrollo Web Ágil",
        image: "/image-2.jpg",
        urlGithub: "#!",
    },
    {
        id: 3,
        title: "Estrategias Web",
        image: "/image-3.jpg",
        urlGithub: "#!",
    },
    {
        id: 4,
        title: "Ideas Creativas",
        image: "/image-4.jpg",
        urlGithub: "#!",
    },
    {
        id: 5,
        title: "Webs Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
    },
    {
        id: 6,
        title: "Web Dinámica",
        image: "/image-6.jpg",
        urlGithub: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/image-8.jpg",
        urlGithub: "#!",
    }
];