import one from "../../../assets/milestone/Akhilesh.png";
import two from "../../../assets/milestone/kashinath.png";
import three from "../../../assets/milestone/pradeep kumar.png";
import four from "../../../assets/milestone/goel.png";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";

import "./index.css";
import Carousel from "nuka-carousel";

const properties = {
  wrapAround: true,
  slideCount: 3,
  cellSpacing: 15,
  dragging: true,
};

const MilestoneCarousel = () => {
  return (
    <div className="lg:mx-10">
      <Carousel
        {...properties}
        className="w-full  grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 "
      >
        <div className="relative">
          <img className="w-full h-[550px] object-cover " src={one} alt="" />
          <div className="overlay absolute top-0 bottom-0 left-0 right-0 ">
            <div className="w-full h-full flex flex-col items-start justify-between pt-4 px-4 text-white">
              <div>
                <h1 className="text-blue-20 text-lg">01.</h1>
              </div>
              <div className=" mx-auto mb-4">
                <div className="flex gap-2 ">
                  <ShieldCheckIcon className="w-8 h-8 text-red-20 inline" />
                  <h1 className=" text-xl font-semibold tracking-wide">
                    Shri Akhilesh Agarwal
                  </h1>
                </div>
                <div>
                  <ul className="font-[500] tracking-wide list-disc space-y-1 pl-8">
                    <li>Formation of RCIL</li>
                    <li>IR Satellite hub at Delhi</li>
                    <li>TRWS on Delhi-Agra section</li>
                    <li>MTCR on Delhi-Jhansi section</li>
                    <li>IRS type point Machine standartdization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <img className="w-full h-[550px] object-cover " src={two} alt="" />
          <div className="overlay absolute top-0 bottom-0 left-0 right-0 ">
            <div className="w-full h-full flex flex-col items-start justify-between pt-4 px-4 text-white">
              <div>
                <h1 className="text-blue-20 text-lg">02.</h1>
              </div>
              <div className=" mx-auto mb-4">
                <div className="flex gap-2">
                  <ShieldCheckIcon className="w-8 h-8 text-red-20 inline" />
                  <h1 className=" text-xl font-semibold tracking-wide">
                    Shri N. Kashinath
                  </h1>
                </div>
                <div>
                  <ul className="font-[500] tracking-wide list-disc space-y-1 pl-8">
                    <li>Gauge Coversion works on SR</li>
                    <li>Initail OFC works on N. F. Railway</li>
                    <li>SRSF works on N.F.R</li>
                    <li>SRSF works on SR invoving major RRI</li>
                    <li>First TPWS project on IR on SR</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <img className="w-full h-[550px] object-cover " src={three} alt="" />
          <div className="overlay absolute top-0 bottom-0 left-0 right-0 ">
            <div className="w-full h-full flex flex-col items-start justify-between pt-4 px-4 text-white">
              <div>
                <h1 className="text-blue-20 text-lg">03.</h1>
              </div>
              <div className=" mx-auto mb-4">
                <div className="flex gap-2">
                  <ShieldCheckIcon className="w-8 h-8 text-red-20 inline" />
                  <h1 className=" text-xl font-semibold tracking-wide">
                    Shri Pradeep Kumar
                  </h1>
                </div>
                <div>
                  <ul className="font-[500] tracking-wide list-disc space-y-1 pl-8">
                    <li>The first Member (Infrastructure)</li>
                    <li>Director General, NAIR</li>
                    <li>Additiona General Manager, WCR</li>
                    <li>Chief Safety Officer, SER</li>
                    <li>Director/Telecom, Railway Board</li>
                    <li>General Manager, RCIL</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <img className="w-full h-[550px] object-cover " src={four} alt="" />
          <div className="overlay absolute top-0 bottom-0 left-0 right-0 ">
            <div className="w-full h-full flex flex-col items-start justify-between pt-4 px-4 text-white ">
              <div>
                <h1 className="text-blue-20 text-lg">04.</h1>
              </div>
              <div className=" mx-auto mb-4">
                <div className="flex gap-2">
                  <ShieldCheckIcon className="w-8 h-8 text-red-20 inline" />
                  <h1 className=" text-xl font-semibold tracking-wide">
                    Shri S.K. Goel
                  </h1>
                </div>
                <div>
                  <ul className="font-[500] tracking-wide list-disc space-y-1 pl-8">
                    <li>First Director General of IRISET</li>
                    <li>planning and executing major S & T projects</li>
                    <li>Regional Head of RCIL</li>
                    <li>Spearheaded the development of the IRSSE web portal</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default MilestoneCarousel;
