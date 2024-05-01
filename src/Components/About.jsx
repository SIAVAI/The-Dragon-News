import Header from "./Header";
import Navbar from "./Navbar";

const About = () => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="flex flex-col gap-4 w-60 ">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    </div>
  );
};

export default About;
