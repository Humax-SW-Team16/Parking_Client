// import Link from "next/link";
// import { UserContext } from "../context/LoginContext";
// export default function Login() {
//     const [accessToken, setAccessToken] = useState(null)
//     const [loginType, setLoginType] = useState('')
//   return (
//     <div>
//       <UserContext.Provider>
//         <Link href="/auth/callback/git">깃</Link>
//         <Link href="/auth/callback/google">구글</Link>
//         <Link href="/auth/callback/kakao">카카오</Link>
//       </UserContext.Provider>
//     </div>
//   );
// }
export default function Login() {
    return (
        <>
            <h1>로그인 페이지</h1>
        </>
    );
}