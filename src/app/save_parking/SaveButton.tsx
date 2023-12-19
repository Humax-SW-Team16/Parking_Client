"use client";
import Cookies from "js-cookie";
import { IoHeartOutline } from "react-icons/io5";
import { GoHeartFill } from "react-icons/go";

interface SaveButtonProps {
  onClick: () => void;
  size: string;
  className?: string;
  parkingId: string;
  bookStatus: string;
}

const SaveButton: React.FC<SaveButtonProps> = ({
  size,
  className,
  onClick,
  parkingId,
  bookStatus,
}) => {
  const fetchData = async () => {
    const requestData = {
      parkingId: parkingId,
    };
    const auth = Cookies.get("ACCESS_TOKEN");
    const headers: { [key: string]: string } = {
      "Content-Type": "application/json",
    };
    if (auth) {
      headers["Authorization"] = auth;
    }
    console.log("bookStatus", bookStatus, "parkingId", parkingId);
    try {
      const address: string = bookStatus
        ? `http://3.34.236.224:3000/api/v1/user/remove`
        : `http://3.34.236.224:3000/api/v1/user/add`;

      const res: Response = await fetch(address, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(requestData),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      onClick();
    } catch (error) {
      console.error("Error fetching data:", error);
      // Implement error handling, such as displaying an error message to the user
    }
  };

  const handleClick = () => {
    fetchData();
  };

  return (
    <>
      {bookStatus ? (
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
