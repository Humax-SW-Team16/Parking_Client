"use client"

import {redirect} from "next/navigation";

export default function LoginProgress() {
    const ACCESS_TOKEN = new URL(window.location.href).searchParams.get('token')
    //console.log(token)
    if (typeof ACCESS_TOKEN === "string") {
        localStorage.setItem("token", ACCESS_TOKEN);
        const cookiename = `ACCESS_TOKEN=${ACCESS_TOKEN}; path=/`
        document.cookie = cookiename;
        document.cookie = "token=1234"
        redirect('/')
    }
    return (
        <>
            <div className="">로그인 중...</div>
        </>
    );
}