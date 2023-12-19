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
    const cookieStore = cookies()
    const auth = cookieStore.get('ACCESS_TOKEN')
    const CookieValue = 'Authorization=' + auth?.value +'; Path=/;'
    const res = await fetch(address, {
        method: "GET",
        headers: {
            Cookie:CookieValue,
        },
    });
    const data = await res.json();
    //console.log(Object.keys(data))
    // console.log(data['0'])
    const arr = Array(data)[0]
    console.log("###################################")
    console.log(arr)
    // const arr = [
    //     {
    //         parkingId: 266,
    //         name: '마포푸르메점',
    //         address: '서울 마포구 월드컵북로 496',
    //         lat: '37.5848643',
    //         lon: '126.8801328',
    //         operatingTime: '자주식: 24시간',
    //         normalSeason: '120000',
    //         tenantSeason: '60000',
    //         timeTicket: '5000',
    //         dayTicket: '25000',
    //         specialDay: '12500',
    //         specialHour: null,
    //         specialNight: null,
    //         specialWeekend: null,
    //         applyDay: null,
    //         applyHour: null,
    //         applyNight: null,
    //         applyWeekend: null,
    //         entryTime: null,
    //         exitTime: null,
    //         status: null,
    //         bookStatus: null
    //     },
    //     {
    //         parkingId: 279,
    //         name: 'DMC역점',
    //         address: '서울 마포구 성암로 지하 184',
    //         lat: '37.5757953',
    //         lon: '126.9004557',
    //         operatingTime: '자주식: 24시간',
    //         normalSeason: '120000',
    //         tenantSeason: '120000',
    //         timeTicket: '3000',
    //         dayTicket: '12000',
    //         specialDay: '9000',
    //         specialHour: '5,000(3h)',
    //         specialNight: null,
    //         specialWeekend: '4000',
    //         applyDay: null,
    //         applyHour: null,
    //         applyNight: null,
    //         applyWeekend: null,
    //         entryTime: null,
    //         exitTime: null,
    //         status: null,
    //         bookStatus: null
    //     },
    //     {
    //         parkingId: 287,
    //         name: '푸르메재단어린이병원점',
    //         address: '서울 마포구 월드컵북로 494',
    //         lat: '37.5846615',
    //         lon: '126.8805625',
    //         operatingTime: '자주식: 24시간',
    //         normalSeason: '120000',
    //         tenantSeason: null,
    //         timeTicket: '5000',
    //         dayTicket: '30000',
    //         specialDay: null,
    //         specialHour: null,
    //         specialNight: null,
    //         specialWeekend: null,
    //         applyDay: null,
    //         applyHour: null,
    //         applyNight: null,
    //         applyWeekend: null,
    //         entryTime: null,
    //         exitTime: null,
    //         status: null,
    //         bookStatus: null
    //     },
    //     {
    //         parkingId: 323,
    //         name: '한샘사옥주차장점',
    //         address: '서울 마포구 성암로 179',
    //         lat: '37.5761232',
    //         lon: '126.8986411',
    //         operatingTime: '자주식: 24시간',
    //         normalSeason: '110000',
    //         tenantSeason: '110000',
    //         timeTicket: '3000',
    //         dayTicket: '20000',
    //         specialDay: null,
    //         specialHour: null,
    //         specialNight: null,
    //         specialWeekend: null,
    //         applyDay: null,
    //         applyHour: null,
    //         applyNight: null,
    //         applyWeekend: null,
    //         entryTime: null,
    //         exitTime: null,
    //         status: null,
    //         bookStatus: null
    //     },
    //     {
    //         parkingId: 545,
    //         name: '향동퍼스트타워점',
    //         address: '경기도 고양시 덕양구 꽃마을로 4',
    //         lat: '37.5990369',
    //         lon: '126.8922661',
    //         operatingTime: '자주식: 24시간',
    //         normalSeason: '150000',
    //         tenantSeason: null,
    //         timeTicket: '3000',
    //         dayTicket: '15000',
    //         specialDay: null,
    //         specialHour: null,
    //         specialNight: null,
    //         specialWeekend: null,
    //         applyDay: null,
    //         applyHour: null,
    //         applyNight: null,
    //         applyWeekend: null,
    //         entryTime: null,
    //         exitTime: null,
    //         status: null,
    //         bookStatus: null
    //     },
    //     {
    //         parkingId: 53,
    //         name: '좋은사람들(주차)',
    //         address: '서울특별시 마포구 양화로 162',
    //         lat: '37.5563994',
    //         lon: '126.9238793',
    //         operatingTime: '07시~23시',
    //         normalSeason: '165000',
    //         tenantSeason: '165000',
    //         timeTicket: '1,500/30분',
    //         dayTicket: '9000',
    //         specialDay: '12000',
    //         specialHour: null,
    //         specialNight: '6000',
    //         specialWeekend: null,
    //         applyDay: '2022.6.13',
    //         applyHour: null,
    //         applyNight: null,
    //         applyWeekend: null,
    //         entryTime: null,
    //         exitTime: null,
    //         status: null,
    //         bookStatus: null
    //     },
    //     {
    //         parkingId: 93,
    //         name: '유림빌딩',
    //         address: '서울특별시 마포구 양화로 164',
    //         lat: '37.5565333',
    //         lon: '126.9240596',
    //         operatingTime: '08시~23시',
    //         normalSeason: '165,000 \n132,000(기계식)',
    //         tenantSeason: '165000',
    //         timeTicket: '1,500/30분',
    //         dayTicket: '10000',
    //         specialDay: '12000',
    //         specialHour: null,
    //         specialNight: '6000',
    //         specialWeekend: '10000',
    //         applyDay: '2022.6.13',
    //         applyHour: null,
    //         applyNight: null,
    //         applyWeekend: null,
    //         entryTime: null,
    //         exitTime: null,
    //         status: null,
    //         bookStatus: null
    //     },
    //     {
    //         parkingId: 129,
    //         name: '어바니엘염창',
    //         address: '서울특별시 양천구 공항대로 630',
    //         lat: '37.5466677',
    //         lon: '126.8748284',
    //         operatingTime: '24시간',
    //         normalSeason: '100000',
    //         tenantSeason: '50000',
    //         timeTicket: '1,500/30분',
    //         dayTicket: '20000',
    //         specialDay: null,
    //         specialHour: null,
    //         specialNight: null,
    //         specialWeekend: '10000',
    //         applyDay: null,
    //         applyHour: null,
    //         applyNight: null,
    //         applyWeekend: null,
    //         entryTime: null,
    //         exitTime: null,
    //         status: null,
    //         bookStatus: null
    //     },
    //     {
    //         parkingId: 145,
    //         name: '머큐어앰버서더홍대호텔',
    //         address: '서울특별시 마포구 양화로 144',
    //         lat: '37.5553209',
    //         lon: '126.922401',
    //         operatingTime: '07시~23시',
    //         normalSeason: null,
    //         tenantSeason: null,
    //         timeTicket: '2,000/30분',
    //         dayTicket: '8000',
    //         specialDay: '13000',
    //         specialHour: null,
    //         specialNight: '7000(월,화,수,목)',
    //         specialWeekend: '13000',
    //         applyDay: null,
    //         applyHour: null,
    //         applyNight: '2022.6.20',
    //         applyWeekend: null,
    //         entryTime: null,
    //         exitTime: null,
    //         status: null,
    //         bookStatus: null
    //     },
    //     {
    //         parkingId: 296,
    //         name: '케이스퀘어 신촌점(테라운드빌딩)',
    //         address: '서울 서대문구 창천동 72-14',
    //         lat: '37.5563174',
    //         lon: '126.934535',
    //         operatingTime: '기계식: 07:00~23:00',
    //         normalSeason: '170000',
    //         tenantSeason: '121000',
    //         timeTicket: '6000',
    //         dayTicket: '30000',
    //         specialDay: '18000',
    //         specialHour: null,
    //         specialNight: '8000',
    //         specialWeekend: '15000',
    //         applyDay: '2022.5.3',
    //         applyHour: null,
    //         applyNight: '2022.7.11',
    //         applyWeekend: null,
    //         entryTime: null,
    //         exitTime: null,
    //         status: null,
    //         bookStatus: null
    //     }
    // ]

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



