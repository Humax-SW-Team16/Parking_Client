"use client";
import Cookies from "js-cookie";
export default function Test() {
  const clickHandler = async () => {
    const requestData = {
      parkingId: 14,
    };
    const auth = Cookies.get("ACCESS_TOKEN");
    const headers: { [key: string]: string } = {
      "Content-Type": "application/json",
    };
    if (auth) {
      headers["Authorization"] = auth;
    }
    try {
      const address: string = `http://3.34.236.224:3000/api/v1/user/add`;
      const res: Response = await fetch(address, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(requestData),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      // Implement error handling, such as displaying an error message to the user
    }
  };

  return (
    <>
      <button onClick={clickHandler}>클릭</button>
    </>
  );
}
