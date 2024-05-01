import logo from "../assets/logo.png";
import moment from "moment";
const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img className="my-4" src={logo} alt="" />
      <p className="text-[#706F6F] font-bold text-xl my-2">
        Journalism Without Fear or Favour
      </p>
      <p className="text-black text-xl font-bold my-2 ">
        {moment().format("MMMM Do YYYY, h:mm:ss a")}
      </p>
    </div>
  );
};

export default Header;
