import one from "../../assets/Installation/1.jpg";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import "./index.css";

type Props = {
  id: Number;
  url: string;
  title: string;
  desc: string;
};

const HomePageCarousel = ({ id, url, title, desc }: Props) => {
  return (
    <>
      <div className="relative">
        <div className="w-[100%] h-[80vh] mx-auto  ">
          <img
            className="w-full h-full object-cover px-5 py-8"
            src={url}
            alt=""
          />
          <div className="bg-gradient-to-r from-blue-20/50 to-white/20 absolute w-full h-full top-0  "></div>
        </div>
        {/**Text section */}
        <div
          className="absolute bottom-24 left-24  max-w-[60%] h-[300px] bg-blue-20/70 p-10
            "
        >
          <div className="w-full h-full flex gap-5 flex-col items-start justify-center text-white">
            <h1 className="text-6xl font-[500] font-roboto tracking-wide">
              {title}
            </h1>
            <p className="tracking-wider text-lg">{desc}</p>
            <button className="bg-red-20 px-5 py-3 font-[400] tracking-wider">
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
