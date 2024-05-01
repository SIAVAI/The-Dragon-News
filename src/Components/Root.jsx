import { Outlet } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { useEffect, useState } from "react";
const Root = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const darkElement = document.getElementById("dark");
    if (dark) {
      darkElement.classList.add("bg-[#F5F5F5]");
    } else {
      darkElement.classList.remove("bg-[#F5F5F5]");
    }
  }, [dark]);

  return (
    <div id="dark" className="mx-auto font-sedan p-10 min-h-screen">
      <div className="flex justify-end">
        <button onClick={() => setDark(!dark)} className="btn">
          <MdDarkMode />
        </button>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
