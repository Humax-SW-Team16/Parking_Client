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
