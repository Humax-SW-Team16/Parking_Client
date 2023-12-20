"use client";
import Cookies from "js-cookie";
import Link from "next/link";
import { StaticMap } from "react-kakao-maps-sdk";
import SaveButton from "../save_parking/SaveButton";
import { useState, useEffect } from "react";
import { Parking_Info } from "../types";
export default function SaveParking() {
  const [saveData, setSaveData] = useState<Parking_Info[]>([]);
  const handleSaveButtonClick = (parkingId: string) => {};
  useEffect(() => {
    const fetchData = async () => {
      const headers: { [key: string]: string } = {
        "Content-Type": "application/json",
      };
      const auth = Cookies.get("ACCESS_TOKEN");
      if (auth) {
        headers["Authorization"] = auth;
      }
      try {
        const address = "https://www.turu-parking.com/api/v1/user/bookmark/list";
        const res = await fetch(address, {
          method: "GET",
          headers: headers,
        });
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        setSaveData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setSaveData([]);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="w-2/3 mt-16">
      <div className="grid flex-grow card bg-base-300 rounded-box place-items-center my-7">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-9 my-7 mx-7">
          {saveData?.map((el) => (
            <div
              key={el.parkingId}
              className="card w-90 shadow-xl transition ease-in-out delay-150 bg-base-100 hover:-translate-y-1 hover:scale-105 duration-200"
            >
              <figure>
                <StaticMap
                  center={{ lat: Number(el.lat), lng: Number(el.lon) }}
                  style={{
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
                  bookStatus={el.bookStatus}
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
