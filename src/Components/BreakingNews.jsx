import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="bg-[#F3F3F3] py-3 px-2 flex justify-center items-center my-8 ">
      <button className="btn bg-[#D72050] text-white font-medium py-4 px-6 ">
        Latest
      </button>
      <Marquee pauseOnHover={true} className="text-xl font-medium">
        Match Highlights: Germany vs Spain — as it happened ! Match Highlights:
        Germany vs Spain as...
      </Marquee>
    </div>
  );
};

export default BreakingNews;
