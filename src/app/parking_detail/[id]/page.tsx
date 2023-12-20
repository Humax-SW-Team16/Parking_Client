//2시간에 한번씩 초기화 돼서 주기적으로 갈아줘야 함
import { cookies } from "next/headers";
import addressModify from "@/app/utils/utils";
export default async function Page({ params }: { params: { id: string } }) {
    const address =
        "https://www.turu-parking.com/api/v1/parking/read/detail/" + params.id;
    const cookieStore = cookies()
    const auth = cookieStore.get('ACCESS_TOKEN')
    //console.log(auth?.value)
    const CookieValue = 'Authorization=' + auth?.value +'; Path=/;'

    const res = await fetch(address, {
        method: "GET",
        headers: {
            Cookie:CookieValue,
        },
    });
    const data = await res.json();

    console.log("ID DATA#############################\n",data)
    return (
        <div className="bg-white h-screen">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-stretch gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                    <img
                        src="https://mediahub.seoul.go.kr/uploads/mediahub/2021/08/TmhmOrbRmPhwkuRTpyiMwRaYNEfWniPj.png"
                        alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        src="https://www.paxetv.com/news/photo/202303/171507_146874_5230.jpg"
                        alt="Top down view of walnut card tray with embedded magnets and card groove."
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        src="https://digitalchosun.dizzo.com/site/data/img_dir/2023/03/24/2023032480072_0.jpg"
                        alt="Side of walnut card tray with card groove and recessed card area."
                        className="rounded-lg bg-gray-100"
                    />
                    <img
                        src="https://post-phinf.pstatic.net/MjAxOTA1MTNfMjI0/MDAxNTU3NzE5MDM0NTMz.NFiObIn8Y0sQDwgtUyK8GijOophGn3BTR_VAmhMRpYwg.w2onhJ6-AzoeHCtsXKwXdIKMR4gugDriFeq9xtDTpBAg.JPEG/9911923C5A37AB052B.jpg"
                        alt="Walnut card tray filled with cards and card angled in dedicated groove."
                        className="rounded-lg bg-gray-100"
                    />
                </div>
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {data.name}
                    </h2>
                    <div className="mt-2 text-red-500 flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                        <div className="text-gray-600 ml-2">{data.searchCount}</div>
                    </div>
                    <div className="mt-4 text-gray-500 line-clamp-3">
                        <p className="font-bold text-xl text-black">주소</p>
                        {addressModify(data.address)}
                    </div>

                    <dl className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-1 sm:gap-y-5 lg:gap-x-8">
                        <div className="pt-4 text-xl">
                            <dt className="font-bold text-gray-900">운영시간</dt>
                            <dt className="mt-2 text-sm text-gray-500">
                                {data.operatingTime}
                            </dt>
                        </div>
                        <div className="text-xl">
                            <dt className="font-bold text-gray-900">기본 이용요금</dt>
                            <dt className="text-sm text-gray-500">{data.timeTicket}</dt>
                        </div>
                        <div className="text-xl">
                            <dt className="font-bold text-gray-900">종일권 요금</dt>
                            <dt className="text-sm text-gray-500">
                                {data.dayTicket} 원
                            </dt>
                        </div>
                        <div className="text-xl">
                            <dt className="font-bold text-gray-900">행사기간 종일권 요금</dt>
                            <dt className="text-sm text-gray-500">
                                {data.specialDay} 원
                            </dt>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
}