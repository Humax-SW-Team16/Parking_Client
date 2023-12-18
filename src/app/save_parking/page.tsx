import SaveCarousel from "./SaveCarousel";
import SaveParking from "./SaveParking";
import SavePagination from "./SavePagination";
export default function Save_Parking() {
  return (
    <div className="">
      <div className="flex justify-center">
        <SaveCarousel />
      </div>
      <div className="flex justify-center text-3xl mt-20 pb-9">
        Turu Parking SAVE
      </div>
      <div className="flex justify-center">
        <div className="w-2/3 border-b-4 border-orange-400"></div>
      </div>
      <div className="flex justify-center">
        <SaveParking />
      </div>
    </div>
  );
}
