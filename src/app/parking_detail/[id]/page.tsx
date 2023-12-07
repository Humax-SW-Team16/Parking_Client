//2시간에 한번씩 초기화 돼서 주기적으로 갈아줘야 함
import { cookies } from "next/headers";

export default async function Page({ params }: { params: { id: string } }) {
    const address =
        "http://localhost:8080/api/v1/parking/read/detail/" + params.id;
    const cookieStore = cookies()
    const auth = cookieStore.get('Authorization')
    //console.log(auth?.value)
    const CookieValue = 'Authorization=' + auth?.value +'; Path=/;'
    const res = await fetch(address, {
        method: "GET",
        headers: {
            Cookie:CookieValue,
        },
    });

    const data = await res.json();
    //console.log("ID DATA#############################\n",data)
    return (
        <div className="bg-white">
            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
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
                    <p className="mt-4 text-gray-500 line-clamp-3">{data.operation}</p>

                    <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        {/*{features.map((feature) => (*/}
                        {/*    <div key={feature.name} className="border-t border-gray-200 pt-4">*/}
                        {/*        <dt className="font-medium text-gray-900">{feature.name}</dt>*/}
                        {/*        <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>*/}
                        {/*    </div>*/}
                        {/*))}*/}
                        <div className="border-t border-gray-200 pt-4 text-xl">
                            <dt className="font-bold text-gray-900">운영시간</dt>
                            <dt className="mt-2 text-sm text-gray-500">
                                {data.operatingTime}
                            </dt>
                        </div>
                        <div className="border-t border-gray-200 pt-4 text-xl">
                            <dt className="font-bold text-gray-900">주소</dt>
                            <dt className="mt-2 text-sm text-gray-500">{data.address}</dt>
                        </div>
                        <div className="border-t border-gray-200 pt-4 text-xl">
                            <dt className="font-bold text-gray-900">기본 이용요금</dt>
                            <dt className="mt-2 text-sm text-gray-500">{data.timeTicket}</dt>
                        </div>
                        <div className="border-t border-gray-200 pt-4 text-xl">
                            <dt className="font-bold text-gray-900">종일권 요금</dt>
                            <dt className="mt-2 text-sm text-gray-500">
                                {data.dayTicket} 원
                            </dt>
                        </div>
                        <div className="border-t border-gray-200 pt-4 text-xl">
                            <dt className="font-bold text-gray-900">행사기간 종일권 요금</dt>
                            <dt className="mt-2 text-sm text-gray-500">
                                {data.specialDay} 원
                            </dt>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
}