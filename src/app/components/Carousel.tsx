import {cookies} from "next/headers";

interface parkingData {
    parkingId: string,
    name: string,
    address: string,
    lat: string,
    lon: string,
    operatingTime: string,
    normalSeason: string,
    tenantSeason: string,
    timeTicket: string,
    dayTicket: string,
    specialDay: string,
    specialHour: string,
    specialNight: string,
    specialWeekend: string,
    applyDay: string,
    applyHour: string,
    applyNight: string,
    applyWeekend: string,
    entryTime: string,
    exitTime: string,
    status: string,
    bookStatus: string
}
const Carousel = async () => {
    const address =
        "http://3.34.236.224:3000/";
    //const cookieStore = cookies()
    // const auth = cookieStore.get('ACCESS_TOKEN')
    // const CookieValue = 'Authorization=' + auth?.value +'; Path=/;'
    const res = await fetch(address, {
        method: "GET",
        headers: {
        },
    });
    const data = await res.json();
    //console.log(Object.keys(data))
    // console.log(data['0'])
    const arr = Array(data)[0]

    return (
        <>
            <div className="">
                <div className="mx-32 font-semibold text-gray-600">오늘의 인기 주차장입니다 🚘</div>
                <div className="grid grid-rows-1 grid-flow-col w-screen overflow-x-scroll snap-x">
                    {arr.map((item: parkingData) => (
                        <a key={item.parkingId} href={"/parking_detail/"+item.parkingId}>
                            <div key={item.parkingId} className="snap-center w-[32rem] h-96 p-10 m-12 bg-slate-100 text-xl rounded-2xl shadow-xl">
                                <div className="flex justify-between items-center font-bold text-3xl">
                                    <div className="">{item.name}</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                    </svg>
                                </div>
                                <div className="flex mt-5 text-gray-700 font-medium items-center text-blue-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                    <div className="mx-1">{item.address}</div>
                                </div>
                                <div className="ml-1 mt-2 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <div className="mx-1.5">{item.operatingTime} </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

        </>
    );
};

export default Carousel;



