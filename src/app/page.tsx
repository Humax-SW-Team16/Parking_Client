import Image from 'next/image'
//import Carousel from "@/app/components/Carousel";
export default function Home() {
    return (
        <>
            <div className="snap-y snap-mandatory h-screen w-screen overflow-auto">
                <div className="snap-start bg-amber-200 w-screen h-screen flex items-center justify-center text-5xl">
                    {/*<Carousel/>*/}
                </div>
                <div className="snap-start bg-amber-300 w-screen h-screen flex items-center justify-center text-5xl">2</div>
                <div className="snap-start bg-amber-400 w-screen h-screen flex items-center justify-center text-5xl">1</div>
                <div className="snap-start bg-amber-500 w-screen h-screen flex items-center justify-center text-5xl">1</div>
                <div className="snap-start bg-amber-600 w-screen h-screen flex items-center justify-center text-5xl">1</div>
            </div>
            <div id="default-carousel" className="relative w-full h-screen" data-carousel="slide">
                asdf
            </div>

            <div className="h-80 bg-gray-100 justify-center items-center">
                <div className="flex flex-row h-20 pt-9 items-center">
                    <div className="ml-10"></div>
                    <div className="basis-1/4">
                        <img src="/hiparking.svg" className="h-6"/>
                    </div>
                    <div className="flex flex-row">
                        <div className="mx-4 text-gray-600 text-lg font-medium">회사소개</div>
                        <div className="mx-4 text-gray-600 text-lg font-medium">주차장 운영 현황</div>
                        <div className="mx-4 text-gray-600 text-lg font-medium">개인정보 처리 방침</div>
                    </div>

                </div>
                <div className="flex flex-row h-20 pt-7 items-center">
                    <div className="basis-4/5 text-gray-500">
                        <span className="">(주)하이파킹<span className="mx-1 font-light">|</span></span>
                        <span className="mx-1">대표자<span className="font-light mx-1">박현규</span><span className="mx-1 font-light">|</span></span>
                        <span>주소<span className="mx-1 font-light">서울 서대문구 충정로 60(미근동, KT&G서대문타워) 10층</span></span>
                    </div>
                </div>
                <div className="flex flex-row h-20 pt-7 items-center">
                    <div className="basis-4/5 text-gray-500">
                        <span className="mx-1">사업자번호<span className="font-extralight mx-1">622-87-00330</span><span className="mx-1 font-light">|</span></span>
                        <span>고객센터<span className="mx-1 font-extralight">1688-1054</span></span>
                    </div>
                </div>
            </div>
        </>
    )
}
