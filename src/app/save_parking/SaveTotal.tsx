import { IoMdHeart } from "react-icons/io";
import { SaveTotalProps } from "../types";
const SaveTotal: React.FC<SaveTotalProps> = ({ color, className }) => {
  const iconStyle: React.CSSProperties = {
    color: color,
    backgroundColor: "transparent",
  };

  return <IoMdHeart style={iconStyle} className={className} />;
};

export default SaveTotal;
