import React from "react";
import one from "../../assets/Installation/1.jpg";
import "./index.css";

type Props = {};

const HomePageCarousel = (props: Props) => {
  return (
    <>
      <div className="relative">
        <div className="w-[100%] h-[80vh] mx-auto  ">
          <img className="w-full h-full object-cover" src={one} alt="" />
          <div className="bg-gradient-to-r from-blue-20/30 to-white/20 absolute w-full h-full top-0  "></div>
        </div>
      </div>
    </>
  );
};

export default HomePageCarousel;
