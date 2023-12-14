import Image from "next/image";

export default function Footer() {
    return (
        <div className="h-[23rem] bg-gray-100">
            <div className="flex flex-row h-20 pt-9 items-center justify-center">
                <div className="basis-1/2">
                    <img src="/hiparking.svg" className="h-6"/>
                </div>
                <div className="flex flex-row basis-1/4">
                    <div className="mx-4 text-gray-600 text-lg font-medium">회사 소개</div>
                    <div className="mx-4 text-gray-600 text-lg font-medium">주차장 운영 현황</div>
                    <div className="mx-4 text-gray-600 text-lg font-medium">개인 정보 처리 방침</div>
                </div>
            </div>
            <div className="flex flex-row h-20 pt-7 items-center justify-center">
                <div className="basis-1/2 text-gray-500">
                    <span className="">(주)하이파킹<span className="mx-1 font-light">|</span></span>
                    <span className="mx-1">대표자<span className="font-light mx-1">박현규</span><span className="mx-1 font-light">|</span></span>
                    <span>주소<span className="mx-1 font-light">서울 서대문구 충정로 60(미근동, KT&G서대문타워) 10층</span></span>
                </div>
                <div className="basis-1/4 bg-blue-400"></div>
            </div>
            <div className="flex flex-row h-20 pt-7 items-center justify-center">
                <div className="basis-1/2 text-gray-500">
                    <span className="mx-1">사업자번호<span className="font-extralight mx-1">622-87-00330</span><span className="mx-1 font-light">|</span></span>
                    <span>고객센터<span className="mx-1 font-extralight">1688-1054</span></span>
                </div>
                <div className="basis-1/4"></div>
            </div>
            <div className="flex flex-row h-20 items-center justify-center">
                <div className="flex flex-row basis-1/2 text-gray-500 space-x-2">
                    <a href="https://www.youtube.com/@turu-official"><img src= "https://turuparking.com/wp-content/uploads/2019/12/youtube.svg"/></a>
                    <a href="https://blog.naver.com/turu-official"><img src= "https://turuparking.com/wp-content/uploads/2019/12/blog.svg"/></a>
                    <a href="https://www.instagram.com/hiparking/"><img src= "https://turuparking.com/wp-content/uploads/2019/12/instagram.svg"/></a>
                    <a href="https://www.facebook.com/hiparking"><img src= "https://turuparking.com/wp-content/uploads/2019/12/facebook.svg"/></a>
                    <a href="http://pf.kakao.com/_xfuuxkC"><img src= "https://turuparking.com/wp-content/uploads/2019/12/katalk.svg"/></a>
                </div>
                <div className="basis-1/4"></div>
            </div>
        </div>
    );
}