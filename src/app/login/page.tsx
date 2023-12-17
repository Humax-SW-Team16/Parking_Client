import Image from "next/image";


import { cookies } from "next/headers";
import {Cookie} from "next/dist/compiled/@next/font/dist/google";

export default function Login() {

    //const KAKAO_REST_API_KEY = process.env.KAKAO_CLIENT_ID;
    // const KAKAO_REST_API_KEY = '7143269287ea765a59a8b51f8758cf2e';
    const KAKAO_REST_API_KEY = '9f5309f7fc6b371a2a96d9cfdbd304cd';

    //const KAKAO_REDIRECT_URI = "https://www.turu-parking.com/kakao/login";
    const KAKAO_REDIRECT_URI = "http://localhost:3000/oauth/kakao/login";
    //const KAKAO_REDIRECT_URI = "http://localhost:3000/login/kakao";
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <div className="w-[32rem] pb-20 px-10">
                    <div className="my-20 py-24 bg-orange-100 flex justify-center items-center rounded-xl">
                        <Image src="/turu_logo.svg" width={301} height={36} alt="turu logo" />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <input type="email" placeholder="아이디" className="w-full bg-slate-200 p-3 rounded-xl"/>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-2">
                        <input type="password" placeholder="비밀번호" className="w-full bg-slate-200 p-3 rounded-xl"/>
                    </div>

                    <div className="flex flex-col justify-start items-center mt-10">
                        <div className="flex items-center justify-center text-xl w-full bg-amber-500 p-3 rounded-xl text-white">
                            <a href="http://3.34.236.224:3000/kakao/login" className="flex items-center justify-center">
                                <div className="font-semibold">로그인</div>
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-4 text-gray-500">
                        <div className="mx-2">회원가입</div>
                        <div className="mx-2">|</div>
                        <div className="mx-2">아이디/비밀번호 찾기</div>
                        <div className=""></div>
                    </div>
                    <div className="inline-flex items-center justify-center w-full">
                        <hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                        <span className="absolute px-3 text-gray-500 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
                            또는
                        </span>
                    </div>
                    <div className="bg-[#FCDD3F] p-2 rounded-xl mt-2">
                        <a href={KAKAO_AUTH_URL}>
                            <span className="flex items-center">
                                <Image
                                    className="flex grow-0 flex-shrink-0"
                                    src="/kakao.png"
                                    width={40}
                                    height={40}
                                    alt="카카오"
                                />
                                <span className="mx-1 grow text-center font-medium">
                                    카카오 아이디로 로그인 하기
                                </span>
                            </span>
                        </a>
                    </div>
                    <div className="bg-[#07BD33] p-2 rounded-xl mt-2">
                        <a href="http://3.34.236.224:3000/kakao/login" className="">
                            <span className="flex items-center">
                                <Image
                                    className="flex-none flex-shrink-0"
                                    src="/naver.png"
                                    width={40}
                                    height={40}
                                    alt="네이버"
                                />
                                <span className="flex items-center justify-center mx-1 grow text-white font-medium">
                                    네이버 아이디로 로그인 하기
                                </span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
