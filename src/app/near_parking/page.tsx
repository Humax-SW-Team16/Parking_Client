import NearParking from "./NearParking";
import KakaoMap from "../components/KakaoMap";
import Link from "next/link";
import SaveTotal from "../save_parking/SaveTotal";
export default function NearParking_Page() {
    return (
        <>
            <div className="drawer drawer-end h-screen w-screen">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="relative">
                    <KakaoMap />
                    <label
                        htmlFor="my-drawer-4"
                        className="drawer-button btn btn-primary w-52 h-12 bg-slate-50 fixed top-20 left-7 z-30 border-stone-200 border-2 drop-shadow-md text-slate-500 hover:bg-main-orange hover:text-white hover:border-inherit text-lg"
                    >
                        주변 주차장 검색하기
                    </label>
                    <Link href="/save_parking">
                        <div className="w-16 h-16 bg-main-orange fixed bottom-7 right-7 z-30 rounded-full ">
                            <SaveTotal color="white" className="w-10 h-10 mt-3 ml-3" />
                        </div>
                    </Link>
                </div>

                <div className="drawer-side z-50">
                    <label
                        htmlFor="my-drawer-4"
                        aria-label="close sidebar"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 w-1/2 min-h-full bg-base-200 text-base-content">
                        <NearParking />
                    </ul>
                </div>
            </div>
        </>
    );
}