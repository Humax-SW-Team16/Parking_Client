import { useState } from "react";
import { ChangeEvent } from "react";
const initialData = {
  address: "string",
  applyDay: "string",
  applyHour: "string",
  applyNight: "string",
  applyWeekend: "string",
  codeNumber: "string",
  createdAt: "string",
  dayTicket: "string",
  deleteYn: true,
  deletedAt: "string",
  isActive: 0,
  lat: "string",
  lon: "string",
  name: "string",
  normalSeason: "string",
  operatingTime: "string",
  operation: "string",
  parkingId: 689,
  price: "string",
  searchCount: 0,
  specialDay: "string",
  specialHour: "string",
  specialNight: "string",
  specialWeekend: "string",
  statusBookmark: 0,
  tenantSeason: "string",
  time: "string",
  timeTicket: "string",
  updatedAt: "string",
};
const Create: React.FC = () => {
  const [requestData, setRequestData] = useState(initialData);
  const [result, setResult] = useState("");

  const fetchData = async () => {
    try {
      const address: string = `http://3.34.236.224:3000/api/v1/parking/read/detail`;
      const res = await fetch(address, {
        method: "POST",
        body: JSON.stringify(requestData),
      });
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      setResult(JSON.stringify(data));
    } catch (error) {
      console.error("Error fetching data:", error);
      setResult("Error fetching data");
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRequestData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleClick = () => {
    fetchData();
  };

  return (
    <>
      <div>번호를 입력하세요</div>
      <input
        className="w-96 h-96"
        value={requestData.parkingId}
        onChange={handleInputChange}
      ></input>
      <button onClick={handleClick}>추가하기</button>
      <div>{result}</div>
    </>
  );
};

export default Create;
