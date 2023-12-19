"use client";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
export default function DetailRead() {
  const [parkingData, setParkingData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const auth = Cookies.get("ACCESS_TOKEN");
        const headers: { [key: string]: string } = {
          "Content-Type": "application/json",
        };
        if (auth) {
          headers["Authorization"] = auth;
        }
        const address: string = `http://3.34.236.224:3000/api/v1/parking/read/list`;
        const res = await fetch(address, {
          method: "GET",
          headers: headers,
        });

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        setParkingData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Implement error handling, such as displaying an error message to the user
      }
    };
    fetchData();
  }, []);
  if (!parkingData) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div>세부 정보 읽기</div>
    </>
  );
}
