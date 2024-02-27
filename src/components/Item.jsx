import React from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import itemTick from "../assets/itemTick.svg";

const Item = ({
  imgItem,
  boldContent,
  content,
  reviewRating,
  review,
  stars,
  highlights,
  percentage,
  val,
  cont,
  moreInfo,
  tagImg,
  tagContent,
  number,
}) => {
  return (
    <div className="w-10/12 m-auto lg:w-full">
      {tagContent ? (
        <div className="flex relative right-4 top-4 bg-[#FF7724] w-max h-[34px] items-center text-[#fff] text-sm p-1 rounded-r-lg">
          <img src={tagImg} alt="" />
          <p>{tagContent}</p>
        </div>
      ) : (
        ""
      )}

      <div className="bg-[#fff] ">
        <div>
          <p className="relative right-4 top-11 flex p-3 rounded-full bg-[#fff] w-[44px] justify-center border-2 border-[#000]">
            {number}
          </p>
        </div>
        <div className="flex justify-between flex-wrap flex-col items-center lg:flex-row">
          <img src={imgItem} alt="" />
          <div className="w-[90vw] lg:w-auto">
            <p className="w-11/12 lg:w-[490px] mt-[25px]">
              <span>{boldContent}</span>
              {content}
            </p>
            {percentage ? (
              <p className="text-[#074786] bg-[#F2F4F7] w-max text-sm rounded-md p-1">
                {percentage}
              </p>
            ) : (
              ""
            )}
            <p className="font-bold mt-1 mb-1">Main Highlights</p>
            <p className="w-11/12 lg:w-[483px] ml-[18px]">{highlights}</p>

            {val ? (
              <div className=" lg:w-[483px] ml-[18px] bg-[#FFF4ED] p-2 rounded-xl">
                {val.map((item, index) => {
                  return (
                    <p className="mb-2">
                      <span className="text-[#1B88F4] bg-[#fff] p-1 mr-3">
                        {item}
                      </span>
                      {cont[index]}
                    </p>
                  );
                })}
              </div>
            ) : (
              ""
            )}
            {moreInfo ? (
              <>
                <p className="mt-2 mb-2">Why we love it</p>
                <div className="lg:w-[483px] ml-[18px]">
                  {moreInfo.map((item, index) => {
                    return (
                      <div className="flex">
                        <img src={itemTick} alt="" className="mr-3 mt-1 mb-1" />
                        <p>{item}</p>
                      </div>
                    );
                  })}
                </div>
              </>
            ) : (
              ""
            )}

            <div>
              <br />
              <button>
                <div className="flex items-center text-[#1B88F4]">
                  <div>Show more</div>
                  <div>
                    <MdKeyboardArrowDown />
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center lg:block">
            <div className="mt-14 lg:mt-0">
              <div className="bg-[#F3F9FF] w-[135px] h-[118px] flex flex-col items-center justify-center relative bottom-12">
                <p className="text-4xl">{reviewRating}</p>
                <p className="text-sm">{review}</p>
                <img src={stars} alt="" className="w-16 h-3" />
              </div>
            </div>
            <br />
            <br />
            <button className="bg-[#1B88F4] w-[232px] h-[48px] rounded-xl text-[#fff]">
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
