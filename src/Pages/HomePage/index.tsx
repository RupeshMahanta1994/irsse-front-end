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
          {AboutUs?.map((item, i) => (
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
    </div>
  );
};

export default HomePage;
