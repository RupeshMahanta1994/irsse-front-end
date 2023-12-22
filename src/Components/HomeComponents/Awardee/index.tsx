import two from "../../../assets/National Awardee/Vishwanath.jpg";
import Button from "../../Button";
const index = () => {
  return (
    <div>
      <div className="">
        <div className="grid gap-5 sm:gap-1 grid-cols-1 sm:grid-cols-2 px-4 sm:px-24">
          {/**Text */}
          <div>
            <div className="w-full h-full flex items-center justify-center">
              <div className="space-y-5">
                <h1 className="text-3xl font-bold tracking-wide ">
                  Our National Awardees 2022
                </h1>
                <p className="text-left">
                  Discover a gallery showcasing IRSSE Officers with National
                  Awards for exceptional work in railway signaling and
                  telecommunication, celebrating their innovation and unwavering
                  dedication. Immerse yourself in their impactful stories,
                  elevating standards of excellence within the IRSSE community.
                </p>
                <Button title="Know More" url="#" />
              </div>
            </div>
          </div>
          {/**Images */}
          <div className="flex items-center justify-center ">
            <div className="w-full h-[70%] py-5 relative">
              <img className="w-full h-full object-contain" src={two} alt="" />
              <div className="w-[50%] h-full bg-blue-20/80 absolute right-0 top-0 bottom-0 my-auto -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
