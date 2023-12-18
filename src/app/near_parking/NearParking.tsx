"use client";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Parking_Info } from "../types";
import SearchButton from "./SearchButton";
import { StaticMap } from "react-kakao-maps-sdk";
import { useLocationContext } from "../context/userLocationContext";
import SaveButton from "../save_parking/SaveButton";
export default function NearParking(): JSX.Element {
    const { lat, lng, setLat, setLng } = useLocationContext();
    const [state, setState] = useState<boolean>(false);
    const [parkingData, setParkingData] = useState<Parking_Info[]>([]);
    const [selectedDistance, setSelectedDistance] = useState(2000);
    const distanceOptions: string[] = ["2KM", "5KM"];

    const convertDistanceToMeters = (distance: string): number => {
        switch (distance) {
            case "2KM":
                return 2;
            case "5KM":
                return 5;
            default:
                return 2;
        }
    };
    const handleDistanceClick = (distance: string): void => {
        console.log("사용자가 선택한 거리", distance);
        const convertedDistance: number = convertDistanceToMeters(distance);
        setSelectedDistance(convertedDistance);
    };
    const handleClick = async (): Promise<void> => {
        setState(true);

        const requestData = {
            distance: selectedDistance,
            lat: lat,
            lon: lng,
        };
        try {
            const address: string = "http://3.34.236.224:3000/api/v1/user/search";
            const auth = Cookies.get("ACCESS_TOKEN"); // 쿠키 가져오기
            const CookieValue = "Authorization=" + auth + "; Path=/;";
            const res: Response = await fetch(address, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Cookie: CookieValue,
                },
                body: JSON.stringify(requestData),
            });

            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }

            const data: Parking_Info[] = await res.json();
            setParkingData(data);
            console.log(parkingData, "post해서 받아온 값");
        } catch (error) {
            console.error("Error fetching data:", error);
            setParkingData([]);
        }
        console.log(requestData, "body에 넣는 data");
    };
    const handleSaveButtonClick = (parkingId: string) => {
        // if (isSaved) {
        //   console.log("찜 기능 추가 fetch");
        // } else {
        //   console.log("찜 기능 해제 fetch");
        // }
    };
    return (
        <div className="flex flex-col w-full lg:flex-col">
            <div className="">검색설정</div>
            <div className="flex justify-center h-24 bg-base-300 rounded-box ">
                <SearchButton
                    buttonText="거리"
                    options={distanceOptions}
                    onClick={handleDistanceClick}
                />
            </div>
            <div className="divider lg:divider-vertical">
                <button
                    onClick={handleClick}
                    className="hover:bg-main-gray bg-main-orange text-white font-bold py-2 px-4 rounded-full"
                >
                    주변 {selectedDistance.toString().slice(0, 1)}km 내 주차장 찾기
                </button>
            </div>
            <div className="grid flex-grow card bg-base-300 rounded-box place-items-center my-7 ">
                <div className=" grid grid-cols-1 lg:grid-cols-2 gap-9">
                    {state &&
                        parkingData.length >= 1 &&
                        parkingData?.map((el) => (
                            <div
                                key={el.parkingId}
                                className="card w-96 shadow-xl transition ease-in-out delay-150 bg-base-100 hover:-translate-y-1 hover:scale-105 duration-200"
                            >
                                <figure>
                                    <StaticMap
                                        center={{ lat: Number(el.lat), lng: Number(el.lon) }}
                                        style={{
                                            // 지도의 크기
                                            width: "100%",
                                            height: "200px",
                                        }}
                                        level={5}
                                        marker={[]}
                                    />
                                </figure>

                                <div className="card-body relative">
                                    <SaveButton
                                        size="32px"
                                        className="absolute top-2 right-2"
                                        onClick={() => handleSaveButtonClick(el.parkingId)}
                                        parkingId={el.parkingId}
                                    />
                                    <div className="card-title">{el.name}</div>
                                    <div>
                                        <span className="font-semibold">주소: </span>
                                        {el.address}
                                    </div>
                                    <div>
                                        <span className="font-semibold">운영시간: </span>
                                        {el.operatingTime}
                                    </div>
                                    <div>
                                        <span className="font-semibold">시간 당 요금: </span>
                                        {el.timeTicket}원
                                    </div>
                                    <div>
                                        <span className="font-semibold">하루 요금: </span>
                                        {el.dayTicket}원
                                    </div>
                                    <div className="card-actions justify-end">
                                        <Link href={`/parking_detail/${el.parkingId}`}>
                                            <div>상세보기</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}