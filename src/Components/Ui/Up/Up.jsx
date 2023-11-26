import React, { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { Link } from "react-scroll";

const Up = () => {
  const [up, setUp] = useState(false);

  const activeClass = window.addEventListener("scroll", () => {
    if (window.scrollY > 2050) {
      setUp(true);
    } else {
      setUp(false);
    }
  });

  useEffect(() => {
    window.addEventListener("scroll", activeClass);
    return window.removeEventListener("scroll", activeClass);
  }, []);

  return (
    <>
      <div
        className={
          up
            ? "fixed bottom-20 w-full z-50 transition-all duration-500 opacity-100"
            : "transition-all duration-500 opacity-0"
        }
      >
        <div className="container">
          <div className="bg-third-color w-12 h-12 float-right relative cursor-pointer rounded-sm transition-all duration-300 hover:bg-[#8542b6]">
            <Link smooth={true} offset={0} duration={900} to="nav">
              <AiOutlineArrowUp className="text-second-color text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Up;
