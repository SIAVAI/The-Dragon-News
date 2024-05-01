import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/3.png";
import { SlCalender } from "react-icons/sl";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("categories.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setCategories(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCategories();
  }, []);
  return (
    <div className="mx-auto w-full">
      <h2 className="font-bold text-2xl my-4">All Categories</h2>
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
      {categories.map((each) => (
        <button
          key={each.id}
          className="btn block bg-white mb-2 border border-none"
        >
          <Link className="text-xl font-normal">{each.name}</Link>
        </button>
      ))}

      <div>
        <div className="mb-4">
          <img src={one} alt="" />
          <p className="font-bold text-xl my-2">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </p>
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-xl my-2 w-[30%]">Sports</h2>
            <div className="flex justify-evenly items-center w-[50%]">
              <SlCalender />
              <p>Jan 4, 2022</p>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <img src={two} alt="" />
          <p className="font-bold text-xl my-2">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </p>
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-xl my-2 w-[30%]">Sports</h2>
            <div className="flex justify-evenly items-center w-[50%]">
              <SlCalender />
              <p>Jan 4, 2022</p>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <img src={three} alt="" />
          <p className="font-bold text-xl my-2">
            Bayern Slams Authorities Over Flight Delay to Club World Cup
          </p>
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-xl my-2 w-[30%]">Sports</h2>
            <div className="flex justify-evenly items-center w-[50%]">
              <SlCalender />
              <p>Jan 4, 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
