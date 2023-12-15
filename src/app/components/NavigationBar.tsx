import Link from "next/link";
//import "../globals.css";
import Image from "next/image";
import { cookies } from "next/headers"
export default function NavigationBar() {
    const cookiesList = cookies()
    const isLogin = cookiesList.has('Authorization')
    console.log("cookiesList",cookiesList)
    console.log("isLogin",isLogin)

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image
                        src="/turu_logo.svg"
                        width={301}
                        height={36}
                        alt="Turu Logo"
                    />
                </a>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a
                                href="/"
                                className="block py-2 px-3 text-white bg-blue-200 rounded md:bg-transparent md:text-orange-500 md:p-0 dark:text-white md:dark:text-blue-500"
                                aria-current="page"
                            >
                                홈
                            </a>
                        </li>
                        <li>
                            <a
                                href="/near_parking"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                주변 주차장 찾기
                            </a>
                        </li>
                        <li>
                            <a
                                href="/parking_detail/1"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                주차장 검색
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                주차장 요금계산
                            </a>
                        </li>
                        <li>
                            <a
                                href="/login"
                                className="block p-2 py-2 px-2 text-orange-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                { isLogin ? <p>로그아웃</p> : <p>로그인</p>}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}