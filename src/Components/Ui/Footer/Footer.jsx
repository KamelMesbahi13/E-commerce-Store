import React from "react";
import "./Footer.css";
import Img from "../../../assets/CreditCard.png";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiFillGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="footerBack pt-16 pb-4 text-second-color">
        <div className="container relative">
          <div className="grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 items-center border-b gap-8">
            <div className="w-full">
              <h1>FashionHub</h1>
              <p className="my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis illum eius, officia ducimus ab repudiandae.
              </p>
              <h6>0540/42/59/69</h6>
            </div>
            <div className="mr-8">
              <div className="flex flex-wrap md:flex-col ml-0 md:ml-24 my-1">
                <a href="#" className="nav-link-sm mr-2">
                  Home
                </a>
                <a href="/services" className="nav-link-sm mr-2">
                  Services
                </a>
                <a href="/men" className="nav-link-sm mr-2">
                  Men
                </a>
                <a href="/women" className="nav-link-sm mr-2">
                  Women
                </a>
                <a href="/about" className="nav-link-sm mr-2">
                  About-Us
                </a>
                <a href="/contactUs" className="nav-link-sm mr-2">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="w-full md:ml-16">
              <h6>Subscribe To News</h6>
              <div>
                <input
                  className="text-main-color focus:outline-none pl-1 py-2"
                  type="email"
                />
                <button>Send</button>
              </div>
              <img className="w-5/12 md:w-6/12 mt-4" src={Img} alt="" />
            </div>
          </div>
          <div className="flex items-center mt-8 justify-center">
            <div>
              <p className="">
                Copyright <span>&#169;</span> All Rights Reserves. This Template
                Made By: Kamel Mesbahi
              </p>
            </div>
            <div className="flex items-center">
              <a href="https://web.facebook.com/kamel.136.km" target="__blanc">
                <AiOutlineFacebook className="text-xl mx-2 duration-200 hover:text-[#3b5998]" />
              </a>
              <a href="https://www.instagram.com/__kml1.3/" target="__blanc">
                <AiOutlineInstagram className="text-xl duration-200 hover:text-[#cd486b]" />
              </a>
              <i className="text-xl mx-2 cursor-pointer duration-200 hover:text-[#000000]">
                <AiFillGithub
                  onClick={() =>
                    (window.location.href = "https://github.com/KamelMesbahi13")
                  }
                />
              </i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
