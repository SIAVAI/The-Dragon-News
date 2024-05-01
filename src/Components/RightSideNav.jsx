import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import q1 from "../assets/qZone1.png";
import q2 from "../assets/qZone2.png";
import q3 from "../assets/qZone3.png";
import bg from "../assets/bg1.png";
import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
const RightSideNav = () => {
  const [error, setError] = useState("");
  const { googleLogin, githubLogin } = useContext(AuthContext);
  const handleGoogle = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        setError(error);
      });
  };
  const handleGithub = () => {
    githubLogin()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        setError(error);
      });
  };
  return (
    <div className="mx-auto w-full">
      <div className="border border-red-500 py-6 px-4 flex flex-col justify-center items-center gap-6">
        <h2 className="font-bold text-2xl">Login With</h2>
        <button
          onClick={handleGoogle}
          className="btn bg-white border border-blue-500 text-blue-500"
        >
          <FcGoogle />
          Login With Google
        </button>
        <button
          onClick={handleGithub}
          className="btn bg-white border border-black"
        >
          <FaGithub />
          Login With Github
        </button>
      </div>

      <div className="w-full my-6 flex flex-col justify-center items-center gap-6">
        <h2 className="font-bold text-2xl">Find Us On</h2>
        <div className="w-full flex flex-col justify-center items-center border border-[#313131c5] rounded-lg">
          <button className="btn bg-white border-b-[#313131c5] w-full text-blue-500">
            <FaFacebook />
            Facebook
          </button>
          <button className="btn bg-white border-b-[#313131c5] w-full text-red-500">
            <FaInstagramSquare />
            Instagram
          </button>
          <button className="btn bg-white border-b-[#313131c5] w-full text-black">
            <FaSquareXTwitter />
            Twitter
          </button>
        </div>
      </div>

      <div className="w-full my-6 flex flex-col justify-center items-center gap-6 bg-[#F3F3F3] p-4 rounded-lg">
        <h2 className="font-bold text-2xl">Q-Zone</h2>
        <img src={q1} alt="" />
        <img src={q2} alt="" />
        <img src={q3} alt="" />
      </div>

      <div
        className="hero p-6 rounded-lg"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-bold text-wrap">
              Create an Amazing Newspaper
            </h1>
            <p className="mb-5 text-wrap">
              Discover thousands of options, easy to customize layouts,
              one-click to import demo and much more.
            </p>
            <button className="btn bg-[#D72050] text-white border border-none">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
