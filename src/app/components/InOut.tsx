import Image from "next/image";

export default function InOut() {
    return (
        <div className="flex flex-col w-2/3">
            <div className="flex items-center justify-center text-4xl font-semibold mb-12 text-gray-800">예상 주차요금을 계산해 볼 수 있습니다</div>
            <div className="flex justify-between bg-white h-28 rounded-full drop-shadow-xl divide-x-2">
                <div className="flex flex-col ml-[3.5rem] p-0  w-1/4 ">
                    <label className="font-bold text-xl mt-6">주차장</label>
                    <input className="h-8 text-2xl my-0 focus: outline-0" type="text" placeholder="주차장 검색"></input>
                </div>
                <div className="flex flex-col pl-5  w-1/3">
                    <label className="font-bold text-xl mt-6">입차시간</label>
                    <input className="h-8 text-2xl my-0 px-2" type="time" placeholder="주차장 검색"></input>
                </div>
                <div className="flex flex-col pl-5  w-1/3">
                    <label className="font-bold text-xl mt-6">출차시간</label>
                    <input className="h-8 text-2xl my-0 px-2" type="time" placeholder="주차장 검색"></input>
                </div>
                <button className="flex items-center justify-center bg-orange-400 w-[6rem] rounded-full m-3 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-[3.5rem] w-[3.5rem] text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}