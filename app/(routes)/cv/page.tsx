import CircleImage from "@/components/circle-image";
import TransitionPage from "@/components/transition-page";
import DownloadButton from "@/components/download-button";

const ServicesPage = () => {
    return (
        <>

            <TransitionPage />
            {/* <CircleImage /> */}
            <div className="flex flex-col items-center justify-center h-screen max-w-5xl mx-auto">
                <div className="max-w-[450px]">
                    <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">My <span className="font-bold text-secondary"> CV</span></h1>
                    <DownloadButton />
                </div>

                
            </div>
        </>
    );
}

export default ServicesPage;