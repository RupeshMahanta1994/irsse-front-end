import campus from "../../../assets/articles.jpg";
import Button from "../../Button";
import { AccordionPanel } from "../..";

const index = () => {
  return (
    <div>
      <div>
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 px-4 md:px-10 mt-16">
          {/**Image */}
          <div>
            <div className="w-full h-full relative ">
              <img
                className="w-full h-full object-cover rounded-sm"
                src={campus}
                alt=""
              />
              <div className=" absolute w-[20%] h-[20%] -left-1 -bottom-1 sm:-left-3 sm:-bottom-3 bg-red-20 -z-10 "></div>
              <div className=" absolute w-[20%] h-[20%] -right-1 -top-1 sm:-right-3 sm:-top-3 bg-red-20 -z-10 "></div>
            </div>
          </div>
          {/**text */}
          <div className="flex items-center">
            <div className="space-y-3 md:space-y-5">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-wide">
                Campus Information
              </h1>
              <p className="text-left">
                Established in 1957, IRISET in Secunderabad offers specialized
                railway signaling and telecommunication training to Officers &
                Supervisors. Spanning 28.3 hectares, providing recognized
                courses with hands-on experience and modern teaching aids.
              </p>
              <div>
                <AccordionPanel />
              </div>

              {/**Numbers */}
              <div className="grid grid-cols-3">
                <div className="flex items-center justify-center flex-col">
                  <div className="flex items-center">
                    <span className="text-3xl sm:text-5xl tracking-widest font-bold">
                      65<span className="text-red-20 text-5xl">+</span>
                    </span>
                  </div>
                  <div>
                    <p className="text-left">Years of Experience</p>
                  </div>
                </div>

                <div className="flex items-center justify-center flex-col">
                  <div className="flex items-center">
                    <span className="text-3xl sm:text-5xl tracking-wide font-bold">
                      30k<span className="text-red-20 text-5xl">+</span>
                    </span>
                  </div>
                  <div>
                    <p className="text-left">Officers & Supervisors</p>
                  </div>
                </div>
                <div className="flex items-center justify-center flex-col">
                  <div className="flex items-center">
                    <span className="text-3xl sm:text-5xl tracking-widest font-bold">
                      65<span className="text-red-20 text-5xl">+</span>
                    </span>
                  </div>
                  <div>
                    <p className="text-left">Years of Experience</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Explore More" url="#" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
