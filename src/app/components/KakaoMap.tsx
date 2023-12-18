"use client";
import Script from "next/script";
import { Map } from "react-kakao-maps-sdk";
import useGeolocation from "../customhook/useGeoLocation";
import { useLocationContext } from "../context/userLocationContext";
import { useRef, useState, useEffect } from "react";
import { Coordinates, GeolocationData } from "../types";
const KAKAO_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_APP_JS_KEY}&autoload=false`;

const KakaoMap = () => {
  const { lat, lng, setLat, setLng } = useLocationContext();
  const location: GeolocationData = useGeolocation();
  const mapRef = useRef<kakao.maps.Map>(null);
  const [mapType, setMapType] = useState<"roadmap" | "skyview">("roadmap");

  const zoomIn = () => {
    const map = mapRef.current;
    if (!map) return;
    map.setLevel(map.getLevel() - 1);
  };

  const zoomOut = () => {
    const map = mapRef.current;
    if (!map) return;
    map.setLevel(map.getLevel() + 1);
  };

  useEffect(() => {
    const userLatitude = location.coordinates?.lng as number;
    const userLongitude = location.coordinates?.lat as number;
    setLat(userLatitude);
    setLng(userLongitude);
    console.log("업데이트 위도 경도값 카카오맵", userLatitude, userLongitude);

    if (
      !location.loaded ||
      !location.coordinates?.lat ||
      !location.coordinates?.lng
    ) {
      // 위치 정보가 정확하지 않을 때 처리
      console.error("Location data not available or incomplete.");
      return;
    }
  }, [location, setLat, setLng]);
  const centerCoordinates: Coordinates = {
    lat: lng,
    lng: lat,
  };
  console.log(centerCoordinates, "카카오맵에 넣는 위도, 경도 값");
  return (
    <>
      <Script src={KAKAO_SDK_URL} strategy="beforeInteractive" />
      <Map
        id="map"
        center={centerCoordinates}
        style={{ width: "100%", height: "98%" }}
        level={3}
        mapTypeId={mapType === "roadmap" ? "ROADMAP" : "HYBRID"}
        ref={mapRef}
      ></Map>
      <div className="w-36 h-14 bg-slate-50 fixed top-20 right-7 z-30 border-stone-200 border-2 drop-shadow-md rounded-md">
        <div className="custom_typecontrol radius_border flex justify-center items-center">
          <span
            id="btnRoadmap"
            className={
              mapType === "roadmap"
                ? "btn text-lg bg-main-orange text-white"
                : "selected_btn text-lg"
            }
            onClick={() => setMapType("roadmap")}
          >
            지도
          </span>
          <span
            id="btnSkyview"
            className={
              mapType === "skyview"
                ? "btn text-lg bg-main-orange text-white"
                : "selected_btn text-lg"
            }
            onClick={() => {
              setMapType("skyview");
            }}
          >
            스카이뷰
          </span>
        </div>
      </div>
      <div className="custom_zoomcontrol radius_border w-[3.5rem] h-[7rem] rounded-md bg-white flex-col fixed top-80 right-7 z-30 border-stone-200 border-2 drop-shadow-md">
        <div className="h-1/2 flex justify-center items-center border-b-2">
          <span onClick={zoomIn} className="w-5">
            <img
              src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_plus.png"
              alt="확대"
            />
          </span>
        </div>
        <div className="h-1/2 flex justify-center items-center ">
          <span onClick={zoomOut} className="w-5">
            <img
              src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/ico_minus.png"
              alt="축소"
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default KakaoMap;
