import Carousel from "@/app/components/Carousel";
import {cookies} from "next/headers";

export default async function List() {
    const key = "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjIiLCJpYXQiOjE3MDI2MTM2OTcsImV4cCI6MTcwMjYyMDg5N30.4hlyP4S5mJA91flfWvAVI4SPhFDS0Ep_3zDoM3P4xNY"

    const address =
        "https://www.turu-parking.com/api/v1/parking/main"
    const cookieStore = cookies()
    const auth = cookieStore.get('Authorization')
    //console.log(auth?.value)
    // const CookieValue = 'Authorization=' + auth?.value +'; Path=/;'
    const CookieValue = 'Authorization=' + key
    const res = await fetch(address, {
        method: "GET",
        headers: {
            Cookie:CookieValue,
        },
    });
    const data = await res.json();
    console.log(data)
    return (
        <>
            <div className="">
                {typeof(data)}
                {data.body}
            </div>
        </>
    )
}
