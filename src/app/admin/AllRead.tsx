import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

interface ParkingData {
  parkingId: number;
  name: string;
  address: string;
  operatingTime: string;
  timeTicket: string;
}

export default function AllRead(): JSX.Element {
  const [parkingData, setParkingData] = useState<ParkingData[] | null>(null);

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
        const data: ParkingData[] = await res.json();
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
      <div>
        {parkingData.map((el) => (
          <div key={el.parkingId}>
            <div>{el.name}</div>
            <div>{el.address}</div>
            <div>{el.operatingTime}</div>
            <div>{el.timeTicket}</div>
            <div>{el.operatingTime}</div>
          </div>
        ))}
      </div>
    </>
  );
}
