"use client";
import { useState } from "react";
import { IoHeartOutline } from "react-icons/io5";
import { GoHeartFill } from "react-icons/go";
interface SaveButtonProps {
  onClick: () => void;
  size: string;
  className?: string;
  parkingId: string;
}
const SaveButton: React.FC<SaveButtonProps> = ({
  size,
  className,
  onClick,
  parkingId,
}) => {
  const [isSaved, setIsSaved] = useState(false);
  const handleClick = () => {
    setIsSaved((prevState) => !prevState);
    onClick(); // 부모 컴포넌트로 전달된 클릭 이벤트 핸들러 호출
    console.log(onClick());
    if (isSaved) {
      console.log("찜 기능 해제 fetch", parkingId);
    } else {
      console.log("찜 기능 추가 fetch", parkingId);
    }
  };

  return (
    <>
      {isSaved ? (
        <GoHeartFill
          onClick={handleClick}
          style={{ fontSize: size, color: "#fc6c00" }}
          className={className}
        />
      ) : (
        <IoHeartOutline
          onClick={handleClick}
          style={{ fontSize: size, color: "#333" }}
          className={className}
        />
      )}
    </>
  );
};

export default SaveButton;
// const handleSaveClick = async (): Promise<void> => {
//   try {
//     const address: string = `https://www.turu-parking.com/api/v1/user/add?parkingId=${parkingId}`;
//     const res: Response = await fetch(address, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Cookie:
//           "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjciLCJpYXQiOjE3MDI1NDEyOTMsImV4cCI6MTcwMjU0ODQ5M30.fBRgc2iNqNoGEgMpXobYEA10PVZzDBL4dwHiL3sKSH4; Path=/;",
//       },
//       body: JSON.stringify(requestData),
//     });

//     if (!res.ok) {
//       throw new Error(`HTTP error! Status: ${res.status}`);
//     }

//     const data: Parking_Info[] = await res.json();
//     setParkingData(data);
//     console.log(parkingData, "post해서 받아온 값");
//   } catch (error) {
//     console.error("Error fetching data:", error);
//     setParkingData([]);
//   }
//   console.log(requestData, "body에 넣는 data");
// };
