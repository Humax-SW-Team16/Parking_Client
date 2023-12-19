// "use client"
// import Image from "next/image";
// import {cookies} from "next/headers";
// import {useEffect, useState} from "react";
// export default function InOut() {
//     const [data, setData] = useState();
//     const address =
//         "http://3.34.236.224:3000/api/v1/user/read/list";
//     function get_cookie(){
//         if (typeof document !== "undefined") {
//             var value = document.cookie.match('(^|;) ?'+"ACCESS_TOKEN"+'=([^;]*)(;|$)');
//             return value? value[2] : null;
//         }
//     }
//     const auth = get_cookie();
//     const CookieValue = 'Authorization=' + auth+'; Path=/;'
//     useEffect(() => {
//         fetch(address, { method : "GET", headers: { Cookie: CookieValue } }).then((response) => {
//             response.json().then((data) => {
//                 setData(data);
//             });
//         });
//     }, []);
//     console.log(data)
//
//     return (
//         <div className="flex flex-col w-2/3">
//             <div className="flex items-center justify-center text-4xl font-semibold mb-12 text-gray-800">예상 주차요금을 계산해 볼 수 있습니다</div>
//             <div className="flex justify-between bg-white h-28 rounded-full drop-shadow-xl divide-x-2">
//                 <div className="flex flex-col ml-[3.5rem] p-0  w-1/4 ">
//                     <label className="font-bold text-xl mt-6">주차장</label>
//                     <input className="h-8 text-2xl my-0 focus: outline-0" type="text" placeholder="주차장 검색"></input>
//                 </div>
//                 <div className="flex flex-col pl-5  w-1/3">
//                     <label className="font-bold text-xl mt-6">입차시간</label>
//                     <input className="h-8 text-2xl my-0 px-2" type="time" placeholder="주차장 검색"></input>
//                 </div>
//                 <div className="flex flex-col pl-5  w-1/3">
//                     <label className="font-bold text-xl mt-6">출차시간</label>
//                     <input className="h-8 text-2xl my-0 px-2" type="time" placeholder="주차장 검색"></input>
//                 </div>
//                 <button className="flex items-center justify-center bg-orange-400 w-[6rem] rounded-full m-3 ">
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-[3.5rem] w-[3.5rem] text-white">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
//                     </svg>
//                 </button>
//             </div>
//         </div>
//     );
// }
"use client"
interface searchingObj{
    name: string;
    address: string;
}
import {useEffect, useState} from "react";
import type {
    MouseEventHandler,
    ChangeEventHandler,
    FocusEventHandler,
} from "react";

export default function Home() {
    const [data, setData] = useState();
    const address =
        "http://3.34.236.224:3000/api/v1/user/read/list";
    function get_cookie(){
        if (typeof document !== "undefined") {
            var value = document.cookie.match('(^|;) ?'+"ACCESS_TOKEN"+'=([^;]*)(;|$)');
            return value? value[2] : null;
        }
    }
    const auth = get_cookie();
    const CookieValue = 'Authorization=' + auth+'; Path=/;'
    useEffect(() => {
        fetch(address, { method : "GET", headers: { Cookie: CookieValue } }).then((response) => {
            response.json().then((data) => {
                setData(data);
            });
        });
    }, []);
    // console.log(Object.keys(data))
    const arr = data ? Object.values(data) : [];
    console.log(arr)
    const customArray = [];
    // for (const key in arr) {
    //     customArray.push({'name': arr[key].name, })
    // }

    for (const i in arr) {
        const temp = arr[i] as searchingObj;
        customArray.push({ 'name': temp.name, 'address': temp.address })
    }

    const [isHidden, setIsHidden] = useState(true);
    const [liOver, setLiOver] = useState(false);
    const [result, setResult] = useState("");
    const [search, setSearch] = useState("");

    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { value } = e.currentTarget;
        setSearch(value);
    };
    const onFocusIn: FocusEventHandler<HTMLInputElement> = (e) => {
        setIsHidden(false);
    };
    const onFocusOut: FocusEventHandler<HTMLInputElement> = (e) => {
        if (liOver) return;
        setIsHidden(true);
    };

    const onMouseOver: MouseEventHandler<HTMLDivElement> = (e) => {
        setLiOver(true);
        e.currentTarget.style.background = "pink";
    };
    const onMouseLeave: MouseEventHandler<HTMLDivElement> = (e) => {
        setLiOver(false);
        e.currentTarget.style.background = "none";
    };
    const onAddResultClick: MouseEventHandler<HTMLDivElement> = (e) => {
        const { textContent } = e.currentTarget.querySelector('#name') as HTMLDivElement;
        setResult(textContent as string);
        setIsHidden(true);
        setSearch(textContent as string);
    };
    function calcCost(){
        const inTime = document.getElementById('inTime') as HTMLInputElement;
        const outTime = document.getElementById('outTime') as HTMLInputElement;

        const inDate = new Date(inTime.value)
        const outDate = new Date(outTime.value)

        const timeDiff = outDate.getTime() - inDate.getTime()
        const hoursDiff = timeDiff / (1000 * 60 * 60);

        console.log(hoursDiff)
    }
    return (
        <div className="flex flex-col items-center justify-start w-screen h-screen">
            <div className="w-2/3 ml-20 mt-36 text-3xl font-semibold text-slate-800">예상요금을 계산해볼 수 있습니다</div>
            <div aria-disabled={!isHidden} aria-checked={isHidden} className="flex items-center justify-between shadow-xl mt-10 w-2/3 bg-white h-36 divide-x-2 rounded-t-[3rem] aria-checked:rounded-full aria-disabled:border-b-2">
                <div className="flex flex-col bg-white ml-12 w-1/3">
                    <label className="text-xl font-bold py-3">주차장</label>
                    <input
                        placeholder="주차장 이름 혹은 주소"
                        type={"search"}
                        onFocus={onFocusIn}
                        onBlur={onFocusOut}
                        onChange={onChange}
                        value={search}
                        className="outline-0 text-2xl py-2"
                    />
                </div>
                <div className="flex flex-col bg-white m-0 w-1/4 px-5">
                    <label className="text-xl font-bold">입차시간</label>
                    <input id="inTime"
                        type={"datetime-local"}
                        // onFocus={}
                        // onBlur={}
                        // onChange={}
                        // value={}
                        className="text-2xl py-2"
                    />
                </div>
                <div className="flex flex-col bg-white w-1/4 px-5">
                    <label className="text-xl font-bold">출차시간</label>
                    <input id="outTime"
                        type={"datetime-local"}
                        // onFocus={onFocusIn}
                        // onBlur={onFocusOut}
                        // onChange={onChange}
                        // value={search}
                        className="text-2xl py-2"
                    />
                </div>
                <button onClick={calcCost} className="flex items-center justify-center bg-orange-400 w-[6rem] h-[6rem] rounded-full m-6 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-[4rem] w-[4rem] text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </button>
            </div>
            <div aria-checked={!isHidden} className="mt-0 max-h-[28rem] w-2/3 overflow-scroll snap-y rounded-b-[2rem] shadow-xl">
                <div hidden={isHidden} className="bg-white mt-0">
                    {customArray.map((fruit, idx) => (
                        <div
                            key={idx}
                            onMouseOver={onMouseOver}
                            onMouseLeave={onMouseLeave}
                            onClick={onAddResultClick}
                            style={{ cursor: "pointer" }}
                            hidden={(!fruit.name.includes(search)) && (!fruit.address.includes(search))}
                            className="text-lg bg-white pl-8 py-4 snap-start"
                        >
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="w-9 h-9">
                                    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                                </svg>
                                <div className="pl-4">
                                    <div id="name" className="text-lg font-bold">
                                        <span>{fruit.name}</span>
                                    </div>
                                    <div className="text-lg font-medium text-gray-500">{fruit.address}</div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}