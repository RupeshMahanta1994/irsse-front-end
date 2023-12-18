import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import "./index.css";

type Props = {
  id: Number;
  url: string;
  title: string;
  desc: string;
};

const HomePageCarousel = ({ url, title, desc }: Props) => {
  return (
    <>
      <div className="relative">
        <div className="w-[100%] h-[80vh] mx-auto  ">
          <img
            className="w-full h-full object-cover p-3 md:px-5 md:py-8"
            src={url}
            alt=""
          />
          <div className=" absolute w-full h-full top-0  "></div>
        </div>
        {/**Text section */}
        <div
          className="absolute bottom-0 left-0 md:bottom-24 md:left-24 w-full  md:max-w-[50%] h-[250px] md:h-[300px] md:bg-blue-20/30 p-5 md:p-10 rounded-sm bg-gradient-to-r from-blue-20/50 to-white/20
            "
        >
          <div className="w-full h-full flex gap-2 md:gap-5 flex-col items-start justify-center text-white ">
            <h1 className="text-4xl md:text-6xl font-[500] font-roboto tracking-wide">
              {title}
            </h1>
            <p className="tracking-wider text-sm md:text-lg">{desc}</p>
            <button className="bg-red-20 px-3 py-2 md:px-5 md:py-3 font-[400] tracking-wider">
              <span>Learn More </span>
              <ArrowLongRightIcon className="h-6 w-6 text-blue-20 inline" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageCarousel;
