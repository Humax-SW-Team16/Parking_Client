import { IoMdHeart } from "react-icons/io";
const SaveTotal = ({ color, className }) => {
  const iconStyle = {
    color: color, // 여기서 컬러를 props로 받은 값으로 설정
    backgroundColor: "transparent",
  };

  return <IoMdHeart style={iconStyle} className={className} />;
};

export default SaveTotal;
