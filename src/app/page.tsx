import Image from 'next/image'
import Footer from "@/app/components/Footer";
//import Carousel from "@/app/components/Carousel";
export default function Home() {
    return (
        <>
            <div className="snap-y snap-mandatory h-screen w-screen overflow-auto">
                <div className="snap-start bg-amber-200 w-screen h-screen flex items-center justify-center text-5xl">
                    {/*<Carousel/>*/}
                    1
                </div>
                <div className="snap-start bg-amber-300 w-screen h-screen flex items-center justify-center text-5xl">2</div>
                <div className="snap-start bg-amber-400 w-screen h-screen flex items-center justify-center text-5xl">3</div>
                <div className="snap-start bg-amber-500 w-screen h-screen flex items-center justify-center text-5xl">4</div>
                <div className="snap-start bg-amber-600 w-screen h-screen flex items-center justify-center text-5xl">5</div>
            </div>
            <div id="default-carousel" className="relative w-full h-screen" data-carousel="slide">
                asdf
            </div>
            <Footer/>
        </>
    )
}
