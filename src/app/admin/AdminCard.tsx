"use client";
import Image from "next/image";
interface AdminCardProps {
  image: string;
  text: string;
  onClick: () => void;
}
const AdminCard: React.FC<AdminCardProps> = ({ image, text, onClick }) => {
  return (
    <>
      <div className="card bg-base-100 shadow-xl mb-20">
        <figure>
          <Image
            src={image}
            width={500}
            height={500}
            className="h-[32rem]"
            alt="Turu Logo"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{text}</h2>
          <div className="card-actions justify-end">
            <label
              htmlFor="my-drawer-4"
              className="drawer-button btn bg-main-orange text-white"
              onClick={onClick}
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
