"use client"
import {useEffect, useState} from "react";

function CurrentURL() {
    const currentURL = new URL(window.location.href).searchParams.get('code')
    console.log(currentURL)

    const [data, setData] = useState();
    const addr = "/oauth/kakao?code="+currentURL
    useEffect(() => {
        fetch(addr).then((response) => {
            response.json().then((data) => {
                setData(data);
            });
        });
    }, []);
    console.log("############################################")
    console.log(data)
    return (
        <div>
            <p>현재 URL: {currentURL}</p>
        </div>
    )
}

export default CurrentURL