"use client";
import AdminCard from "./AdminCard";
export default function Admin() {
  const clickHandler = (btnNum) => {
    console.log(btnNum);
  };
  return (
    <>
      <div className="text-5xl px-6 pt-6">Admin Page</div>
      <div className="drawer drawer-end ">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="flex justify-center items-center gap-2 mt-16">
            <AdminCard
              image="/yu.jpeg"
              text="주차장 모든 정보 조회하기"
              onClick={() => clickHandler("btn1")}
            />
            <AdminCard
              image="/ha.jpg"
              text="주차장 세부 정보 조회하기"
              onClick={() => clickHandler("btn2")}
            />
            <AdminCard
              image="/ye.jpeg"
              text="주차장 정보 추가하기"
              onClick={() => clickHandler("btn3")}
            />
            <AdminCard
              image="/ji.JPG"
              text="주차장 정보 수정하기"
              onClick={() => clickHandler("btn4")}
            />
            <AdminCard
              image="/min.jpeg"
              text="주차장 정보 삭제하기"
              onClick={() => clickHandler("btn5")}
            />
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-1/2 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
          </ul>
        </div>
      </div>
    </>
  );
}
