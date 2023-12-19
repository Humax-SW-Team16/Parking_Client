"use client";
import AdminCard from "./AdminCard";
import { useState, ReactNode } from "react";
import AllRead from "./AllRead";
import Create from "./Create";
import DetailRead from "./DetailRead";
import Update from "./Update";
import Delete from "./Delete";
type ComponentType = ReactNode | null;
export default function Admin(): JSX.Element {
  const [selectedComponent, setSelectedComponent] =
    useState<ComponentType>(null);
  const clickHandler = (btnNum: string): void => {
    switch (btnNum) {
      case "btn1":
        setSelectedComponent(<AllRead />);
        break;
      case "btn2":
        setSelectedComponent(<DetailRead />);
        break;
      case "btn3":
        setSelectedComponent(<Create />);
        break;
      case "btn4":
        setSelectedComponent(<Update />);
        break;
      case "btn5":
        setSelectedComponent(<Delete />);
        break;
      default:
        setSelectedComponent(null);
    }
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
            {selectedComponent}
          </ul>
        </div>
      </div>
    </>
  );
}
