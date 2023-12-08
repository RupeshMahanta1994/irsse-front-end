import React from "react";
import "./index.css";
import semaphore from "../../assets/Home Page/about/1.jpg";
import thane from "../../assets/about/od trina.jpg";
import { timeLine } from "../../Shared/AboutPage";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="bg-gray-50">
      <h1>About Page</h1>
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
          <div className="my-auto space-y-5">
            <div className="text-end border-[6px] px-5 py-3 ">
              <h4 className="text-sm font-semibold tracking-widest ">IRSSE</h4>
              <h1 className="capitalize text-4xl italic font-roboto tracking-wide font-bold">
                about us
              </h1>
            </div>
            <div className="space-y-4  lg::w-[80%]">
              <p className="font-[500]">
                Indian Railway Service of Signal Engineers, is an organized
                Group ‘A’ Cadre within the Government of India.
              </p>
              <p>
                The officers in this esteemed service play a pivotal role in the
                Planning, Design, Commissioning, and Maintenance of Signalling
                and Telecommunication Infrastructure. Their responsibilities
                include ensuring the safe, efficient, and punctual operation of
                trains, as well as enhancing the line capacity of the Indian
                Railways system.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto w-full border">
        {/*History section */}
        <div>
          <div className="grid grid-cols-1 space-y-2 md:grid-cols-5 md:gap-10 md:px-10 md:py-8">
            {/*Left div */}
            <div className="col-span-2 px-5 md:px-0 lg:px-5">
              <div className="space-y-14 md:space-y-[4rem]  ">
                <div className="w-full text-left">
                  <h1 className="capitalize md:italic text-4xl lg:text-5xl font-bold md:font-[500] tracking-wide leading-[120%] ">
                    semaphore signalling system
                  </h1>
                </div>
                <div className="w-full h-[400px]  flex items-center justify-end ">
                  <div className="w-[90%] md:w-[100%] lg:w-[80%] h-full border-[7px] border-blue-20/80 rounded-sm">
                    <img
                      className="w-full h-full object-cover -translate-x-5 -translate-y-5 lg:-translate-x-12 lg:-translate-y-12  border-[1.5px] border-blue-20 "
                      src={semaphore}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            {/*rIGHT div */}
            <div className="col-span-3">
              <div className="space-y-7">
                <div className="relative">
                  <img className="blur-[2px]" src={thane} alt="" />
                  <div
                    className="absolute w-full h-full top-0
                  bottom-0 left-0 right-0 bg-blue-20/70 "
                  >
                    <img
                      className="w-full h-full object-contain px-8 md:px-14"
                      src={thane}
                      alt=""
                    />
                  </div>
                </div>
                <div>
                  <p className="font-roboto tracking-wide text-[1.04rem] text-justify leading-[140%] px-5">
                    In the earlier days of Indian Railways, trains operated
                    without any communication system, and safety was solely
                    managed by the Engineering department. Telegraph and
                    telephony gradually came into existence in India as per the
                    requirements of the Railways. The first train service began
                    in 1853 between Wadi Bunder and Thane in Mumbai, though
                    semaphore signals were provided at most stations,
                    interlocking was not introduced on Indian Railways.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Time line section*/}
        <div>
          <div>
            <div>
              <h1>Heading of the Time line</h1>
            </div>
            <div>
              {/*time line div*/}
              <div className="text-justify md:text-start md:mx-16 px-5">
                {/*item in time line */}

                {timeLine.map((item) => (
                  <>
                    <div className="border-l-4 border-blue-20/30 px-5 py-4 relative">
                      <h4 className="uppercase text-xs font-roboto tracking-widest font-medium">
                        {item.date}
                      </h4>
                      <h1 className="text-xl font-bold my-2 capitalize">
                        {item.title}
                      </h1>
                      <p className="font-roboto tracking-wide text-[1.04rem]  leading-[140%] ">
                        {item.desc}
                      </p>
                      <div className="absolute w-2 h-2 rounded-full top-[18px] -left-[6px] bg-blue-20"></div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;