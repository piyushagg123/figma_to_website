import React, { useEffect } from "react";
import tickIcon from "../assets/tickIcon.svg";
import iIcon from "../assets/iIcon.svg";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import item from "../assets/item.svg";
import starsOne from "../assets/starsOne.svg";
import starsTwo from "../assets/starsTwo.svg";
import starsThree from "../assets/starsThree.svg";
import starsFour from "../assets/starsFour.svg";
import Item from "../components/Item";
import trophy from "../assets/trophy.svg";
import diamond from "../assets/diamond.svg";
import Deals from "../components/Deals";

const Header = () => {
  const openMenu = false;
  useEffect(() => {}, []);
  return (
    //  relative -z-40
    <div className="bg-[#FBFCFD]">
      <div className="w-full lg:w-[1006px] m-auto">
        <br />
        <br />
        <h1 className="font-[Inter] font-normal text-5xl ">
          Best Website builders in the US
        </h1>
        <br />

        <div className="bg-[#E1E4E6] h-[1.33px]"></div>
        <div className="flex p-3 flex-col  lg:justify-between lg:flex-row">
          <div className="flex flex-col lg:flex-row">
            <div className="flex">
              <img src={iIcon} alt="" />
              <p>
                &nbsp;&nbsp;Last Updated - February 22,2020
                {screen.width >= 1024 ? (
                  <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>
                ) : (
                  ""
                )}
              </p>
            </div>
            <div className="flex">
              <img src={tickIcon} alt="" />
              <p>&nbsp;&nbsp;Advertising Disclosure</p>{" "}
              {screen.width >= 1024 ? <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</> : ""}
            </div>
          </div>
          <div className="flex items-center">
            <p>Top Relevant</p>

            <button>
              {openMenu ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </button>
          </div>
        </div>
        <div className="bg-[#E1E4E6] h-[1.33px]"></div>
        <br />
        <div className="flex justify-between text-[#4B5665] text-[10px] lg:text-sm">
          <a href="">Tools</a>
          <a href="">AWS Builder</a>
          <a href="">Start Build</a>
          <a href="">Build Supplies</a>
          <a href="">Tooling</a>
          <a href="">BlueHosting</a>
        </div>
        <br />
        <div className="flex text-[#4B5665] text-[10px] lg:text-sm">
          <a href="">Home </a>&nbsp;&nbsp;&nbsp;
          <p>&gt;</p>&nbsp;&nbsp;&nbsp;
          <a href="">Hosting for all</a>&nbsp;&nbsp;&nbsp;
          <p>&gt;</p>&nbsp;&nbsp;&nbsp;
          <a href="">Hosting</a>&nbsp;&nbsp;&nbsp;
          <p>&gt;</p>&nbsp;&nbsp;&nbsp;
          <a href="">Hosting6</a>&nbsp;&nbsp;&nbsp;
          <p>&gt;</p>&nbsp;&nbsp;&nbsp;
          <a href="">Hosting5</a>
        </div>
        <br />
        <br />
        <br />
        <Item
          imgItem={item}
          boldContent="WixPro 72-Inch Responsive Website Builder-"
          content={
            "Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"
          }
          highlights={
            "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
          }
          review={"Exceptional"}
          reviewRating={"9.8"}
          stars={starsOne}
          tagImg={trophy}
          tagContent={"Best Choice"}
          number={"1"}
        />
        <br />
        <br />
        <Item
          imgItem={item}
          boldContent="SiteCraft 68-Inch Ultimate Web Design Studio-"
          content={
            "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)"
          }
          highlights={
            "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations."
          }
          review={"Excellent"}
          reviewRating={"9.5"}
          stars={starsTwo}
          tagImg={diamond}
          tagContent={"Best Value"}
          number={"2"}
        />
        <br />
        <br />
        <Item
          imgItem={item}
          boldContent="WixPro 72-Inch Responsive Website Builder-"
          content={
            " Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)"
          }
          highlights={
            "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides."
          }
          review={"Exceptional"}
          reviewRating={"9.3"}
          stars={starsThree}
          number={"3"}
        />
        <br />
        <Item
          imgItem={item}
          boldContent="CDK Resposive Builder:"
          content={
            "An extensive library of widgets and apps, and detailed step-by-step guides"
          }
          val={["9.9", "8.9", "8.9"]}
          cont={["Building Responsive", "Cool", "Docs"]}
          review={"Very Good"}
          reviewRating={"9.1"}
          stars={starsFour}
          moreInfo={["Documentation", "Easy Use", "Out Of Box"]}
          number={"4"}
          percentage={"26% Off"}
        />

        <br />
        <br />
        <br />
        <div>
          <p className="text-3xl lg:text-5xl mt-4 mb-4">
            Related deals you might like for
          </p>
          <br />
          <div className="flex justify-between flex-wrap flex-col items-center lg:flex-row">
            <Deals
              imgItem={item}
              discount={"20% Off"}
              offerTime={"Limited Time"}
              heading={"Webbuilder 1"}
              content={"Computer  Modern clasic with wix support"}
              discountPrice={"$39.96"}
              actualPrice={"$49.96"}
            />
            <Deals
              imgItem={item}
              discount={"20% Off"}
              offerTime={"Limited Time"}
              heading={"Webbuilder 1"}
              content={"Computer  Modern clasic with wix support"}
              discountPrice={"$39.96"}
              actualPrice={"$49.96"}
            />
            <Deals
              imgItem={item}
              discount={"20% Off"}
              offerTime={"Limited Time"}
              heading={"Webbuilder 1"}
              content={"Computer  Modern clasic with wix support"}
              discountPrice={"$39.96"}
              actualPrice={"$49.96"}
            />
          </div>
        </div>
        <br />
        <br />
        <br />

        <div className="flex flex-wrap justify-between flex-col items-center md:flex-nowrap md:flex-row lg:flex-row">
          <div className="w-full lg:w-[398px] text-2xl lg:text-4xl text-[#5C6874] mb-4 lg:mb-0">
            Sign up and get exclusive special deals
          </div>
          <div className="bg-[#1B88F4] rounded-r-xl w-[97px] h-[52px] flex justify-center text-[#fff]">
            <button>Sign Up</button>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>

      <div className="flex flex-wrap lg:flex-nowrap w-full bg-[#212731] text-[#D1D6DA] h-[452px] justify-around items-center">
        <div>
          <ul>
            <li className="text-base">CATEGORIES</li>
            <li className="text-sm">Web Builder</li>
            <li className="text-sm">Hosting</li>
            <li className="text-sm">Data Center</li>
            <li className="text-sm">Robotic-Automation</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="text-base">CONTACT</li>
            <li className="text-sm">Contact</li>
            <li className="text-sm">Privacy Policy</li>
            <li className="text-sm">Terms Of Service</li>
            <li className="text-sm">Categories</li>
            <li className="text-sm">About</li>
          </ul>
        </div>
        <div className="flex items-center">
          <p>United States</p>
          <div>
            <MdKeyboardArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
