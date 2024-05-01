/* eslint-disable react/prop-types */
import { FcBookmark } from "react-icons/fc";
import { FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { FaRegStarHalfStroke } from "react-icons/fa6";
const NewsCard = ({ card }) => {
  const { author, title, image_url, details, rating, total_view } = card;
  return (
    <div className="card  bg-base-100 shadow-xl rounded-lg">
      <div className="bg-[#F3F3F3] flex justify-around items-center p-6">
        <div className="flex justify-center items-center ">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src={author.img}
            alt=""
          />
          <div className="">
            <h2>{author.name}</h2>
            <p>{author.published_date}</p>
          </div>
        </div>
        <div className="flex justify-around items-center w-[20%]">
          <Link>
            <FcBookmark />
          </Link>
          <Link>
            <FaShareAlt />
          </Link>
        </div>
      </div>

      <h2 className="font-bold text-xl text-center mt-4">{title}</h2>

      <figure className="px-10 pt-10">
        <img src={image_url} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <p className="text-base">{details}</p>
        <div className="card-actions">
          <button className="btn bg-white border border-none text-[#FF8C47]">
            See More
          </button>
        </div>
      </div>
      <br />
      <hr />
      <br />

      <div className="p-8 flex justify-evenly items-center">
        <div className="flex justify-start items-center text-[#FF8C47] w-[40%]">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStarHalfStroke />
          <p className="ml-4">{rating.number}</p>
        </div>
        <div className="flex justify-end items-center w-[40%]">
          <GrView />
          <p className="ml-4">{total_view}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
