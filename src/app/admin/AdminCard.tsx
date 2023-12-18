"use client";
import Image from "next/image";
import { useEffect } from "react";
interface AdminCardProps {
  image: string;
  text: string;
}
const AdminCard: React.FC<AdminCardProps> = ({ image, text }) => {
  return (
    <>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <Image
            src={image}
            width={500}
            height={500}
            className="h-[34rem]"
            alt="Turu Logo"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{text}</h2>
          <div className="card-actions justify-end">
            <label
              htmlFor="my-drawer-4"
              className="drawer-button btn bg-main-orange text-white"
            >
              GO
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminCard;
