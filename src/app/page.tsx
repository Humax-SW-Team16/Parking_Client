import Carousel from "@/app/components/Carousel";
import InOut from "@/app/components/InOut";
//import Carousel from "@/app/components/Carousel";
export default function Home() {
    return (
        <>
            <div className="snap-y snap-mandatory h-screen w-screen overflow-auto">
                <div className="snap-start w-screen h-screen flex items-center justify-center text-5xl">
                    <Carousel />
                </div>
                <div className="snap-start bg-white w-screen h-screen">
                    <div className="flex flex-wrap justify-center items-center">
                        <div className="mt-52 w-screen text-3xl bg-slate-400 text-center">근방에 있는 Turu Parking 주차장을 알려드립니다.</div>
                        <button className="bg-amber-500 text-white text-2xl w-1/12 rounded-3xl p-4">찾으러 가기</button>
                    </div>
                </div>
                <div className="snap-start bg-amber-400 w-screen h-screen flex items-center justify-center text-5xl">
                    {/*<InOut/>*/}
                </div>
                <div className="snap-start bg-amber-500 w-screen h-screen flex items-center justify-center text-5xl">4</div>
                <div className="snap-start bg-amber-600 w-screen h-screen flex items-center justify-center text-5xl">5</div>
            </div>
        </>
    )
}
