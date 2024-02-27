import React, { useState } from "react";
import searchIcon from "../assets/searchIcon.svg";
import { FiAlignRight } from "react-icons/fi";
import { RxCrossCircled } from "react-icons/rx";
import Header from "../pages/Header";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const nav_links = "font-[Inter] font-normal text-sm";
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <div className="">
        <div className="w-screen h-16 bg-[#212731] color">
          <div className="w-screen m-auto flex text-[#fff] items-center h-full justify-evenly lg:w-[1024px]">
            <div className="flex bg-[#fff] w-[258px] h-[37px] rounded-lg">
              <img src={searchIcon} className="w-6" />
              <input type="text" className="w-[225px]" />
            </div>
            <div>
              <a href="" className={` ${nav_links} hidden  md:hidden lg:block`}>
                Categories
              </a>
            </div>
            <div>
              <a href="" className={` ${nav_links} hidden  md:hidden lg:block`}>
                Website Builders
              </a>
            </div>
            <div>
              <a href="" className={` ${nav_links} hidden  md:hidden lg:block`}>
                Today's deals
              </a>
            </div>
            <div className={`${nav_links} md:block lg:hidden text-xl`}>
              <button onClick={toggleMenu}>
                {openMenu ? (
                  <RxCrossCircled className="text-[#fff]" />
                ) : (
                  <FiAlignRight className="text-[#fff]" />
                )}
              </button>
            </div>
          </div>
          <div className="flex justify-end">
            <div
              className={
                openMenu
                  ? "block w-max bg-[#212731] text-[#fff] mr-3 lg:hidden"
                  : "hidden"
              }
            >
              <div>
                <a href="">Categories</a>
              </div>
              <div>
                <a href="">Website Builders</a>
              </div>
              <div>
                <a href="">Today's Deals</a>
              </div>
            </div>
          </div>
        </div>
        {/* <Header /> */}
      </div>
    </>
  );
};

export default Navbar;
