import "./index.css";
import { HomePageCarouselData } from "../../Shared/HomePage";
import HomePageCarousel from "../../Components/HomePageCarousel";
import MilestoneCarousel from "../../Components/HomeComponents/Milestone Carousel";
import Carousel from "nuka-carousel";
import { AboutUs } from "../../Shared/HomePage";
import {
  AcademicCapIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";
import semaphore from "../../assets/Home Page/about/1.jpg";
import { NavLink } from "react-router-dom";
import GeneralManager from "../for IRSSE/as GM";

{
  /**type Props = {}; */
}

const HomePage = () => {
  const properties = {
    wrapAround: true,
    swiping: true,
    defaultControlsConfig: {
      containerClassName: "containerClassName",
      pagingDotsClassName: "pagingDotsClassName",
    },
  };
  console.log(HomePageCarouselData);
  return (
    <div>
      <div>
        <Carousel {...properties}>
          {HomePageCarouselData.map((item) => (
            <HomePageCarousel
              id={item.id}
              url={item.url}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </Carousel>
      </div>

      <div>
        <div className="grid grid-cols-1  md:grid-cols-2 gap-5 lg:gap-0 lg:grid-cols-4  pb-10">
          {AboutUs?.map((item) => (
            <div>
              <div className="relative">
                <img
                  className="w-full h-[250px] object-cover"
                  src={item.image}
                  alt=""
                />
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-blue-20/50"></div>
                <div className="absolute w-[19rem] h-[10rem] top-0 bottom-0 left-0 right-0 z-10 m-auto text-white flex flex-col gap-3 items-center justify-center">
                  <AcademicCapIcon className="h-16 w-16 text-red-20" />

                  <h1 className="text-xl font-[500] tracking-wider font-roboto">
                    {item.title}
                  </h1>
                  <p className="tracking-wider">
                    See More{" "}
                    <ArrowLongRightIcon className="h-6 w-6 inline text-white" />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/**Multiple sectins */}
        {/*About me section */}
        <div className="container mx-auto">
          <div className="grid md:gap-10 space-y-5 md:space-y-0 grid-cols-1 lg:grid-cols-2 border px-5 py-5 my-5 md:my-10 md:p-10">
            {/*left side */}
            <div>
              <img
                className="w-full h-full object-contain"
                src={semaphore}
                alt=""
              />
            </div>
            {/**right side */}
            <div className="my-auto space-y-5 relative">
              <div className="text-end border-[6px] border-blue-20/60 px-5 py-3 ">
                <h4 className="text-sm font-semibold tracking-widest text-red-20 ">
                  IRSSE
                </h4>
                <h1 className="capitalize text-4xl italic font-roboto tracking-wide font-bold ">
                  about us
                </h1>
              </div>
              <div className="space-y-4  lg::w-[80%]">
                <p className="font-[500]">
                  Indian Railway Service of Signal Engineers, is an organized
                  Group ‘A’ Cadre within the Government of India.
                </p>
                <p>
                  The officers in this esteemed service play a pivotal role in
                  the Planning, Design, Commissioning, and Maintenance of
                  Signalling and Telecommunication Infrastructure. Their
                  responsibilities include ensuring the safe, efficient, and
                  punctual operation of trains, as well as enhancing the line
                  capacity of the Indian Railways system.
                </p>
                <NavLink to="/about">
                  <ArrowLongRightIcon className=" absolute bottom-1 right-0 h-6 w-6 hover:w-8 text-white  bg-blue-20  " />
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        {/*Historical milestone */}
        <div>
          <div>
            {/*text section*/}
            <div className=" flex flex-col items-center justify-center my-8 space-y-7 text-justify md:text-center">
              <h1 className="text-5xl font-roboto tracking-wider font-bold">
                Milestone
              </h1>
              <p className="w-[90%] md:w-[85%] g:w-[60%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium quisquam consequuntur earum! Id voluptas eos, vel
                corrupti quis, dicta tempore harum eaque cumque, blanditiis
                magni consequuntur deserunt odio soluta enim.
              </p>
            </div>
            {/*Image section*/}
            <div>
              <MilestoneCarousel />
            </div>
          </div>
        </div>
      </div>

      {/**testing */}
      <div>
        <GeneralManager />
      </div>
    </div>
  );
};

export default HomePage;
