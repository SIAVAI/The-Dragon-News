import { useEffect, useState } from "react";
import BreakingNews from "./BreakingNews";
import Header from "./Header";
import LeftSideNav from "./LeftSideNav";
import Navbar from "./Navbar";
import RightSideNav from "./RightSideNav";
import NewsCard from "./NewsCard";

const Home = () => {
  const [news, setNews] = useState([]);
  const [visibleNews, setVisibleNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("news.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setNews(data);
        setVisibleNews(data.slice(0, 2));
        setIsLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSeeMore = () => {
    setVisibleNews(news);
    const seeMore = document.getElementById("seeMore");
    seeMore.classList.add("hidden");
  };
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="col-span-2">
          <h2 className="text-4xl font-bold mb-6">Dragon News Home</h2>
          {isLoading && (
            <div id="skeleton" className="flex justify-center items-center">
              <div className="flex flex-col gap-4 w-52">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
              </div>
            </div>
          )}
          {visibleNews.map((each) => (
            <NewsCard key={each._id} card={each}></NewsCard>
          ))}
          <button
            id="seeMore"
            onClick={handleSeeMore}
            className="btn w-full bg-[#D72050] mt-10 text-white text-2xl"
          >
            See More
          </button>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
