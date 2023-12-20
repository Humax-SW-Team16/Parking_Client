import { useState } from "react";

interface ParkingData {
  parkingId: number;
  name: string;
  address: string;
  operatingTime: string;
  timeTicket: string;
}

const DetailRead: React.FC = () => {
  const [parkingData, setParkingData] = useState<ParkingData[] | null>(null);
  const [parkingId, setParkingId] = useState("");

  const fetchData = async () => {
    try {
      const address: string = `http://3.34.236.224:3000/api/v1/parking/read/detail/${parkingId}`;
      const res = await fetch(address);

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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParkingId(event.target.value);
  };

  const handleClick = () => {
    fetchData();
  };

  return (
    <>
      <div>번호를 입력하세요</div>
      <input
        className="w-20 h-8"
        value={parkingId}
        onChange={handleInputChange}
      />
      <button onClick={handleClick}>불러오기</button>
      <div>
        {parkingData?.map((el) => (
          <div key={el.parkingId}>
            <div>{el.name}</div>
            <div>{el.address}</div>
            <div>{el.operatingTime}</div>
            <div>{el.timeTicket}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DetailRead;
