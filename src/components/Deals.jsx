import React from "react";

const Deals = ({
  imgItem,
  discount,
  offerTime,
  heading,
  content,
  discountPrice,
  actualPrice,
}) => {
  return (
    <div className="flex items-center flex-col mb-9 lg:mb-0">
      <img src={imgItem} alt="" />
      <div className="flex">
        <p className="text-[#074786] bg-[#F2F4F7] w-max text-sm rounded-md p-1 mr-2">
          {discount}
        </p>
        <p className="text-[#074786] bg-[#F2F4F7] w-max text-sm rounded-md p-1">
          {offerTime}
        </p>
      </div>
      <p className="font-bold text-base">{heading}</p>
      <p className="text-base w-[284px]">{content}</p>
      <div>
        <p className="text-xl">{discountPrice}</p>
        <p className="text-sm">{actualPrice}</p>
        <p className="text-sm text-[#EF4C5D]">{discount}</p>
      </div>
      <div className="bg-[#1B88F4] w-[292px] h-[48px] rounded-2xl flex justify-center text-[#fff]">
        <button>View Deal</button>
      </div>
    </div>
  );
};

export default Deals;
