"use client"
import {useEffect, useState} from "react";
import axios from "axios";

function CurrentURL() {
    const currentURL = new URL(window.location.href).searchParams.get('code')
    console.log(currentURL)

    const [data, setData] = useState();
    const addr = "http://3.34.236.224:3000/oauth/kakao/login?code="+currentURL
    console.log(addr)
    useEffect(() => {
        fetch(addr, { method : "GET" }).then((response) => {
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