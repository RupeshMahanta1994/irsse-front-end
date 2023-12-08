import Logo from "../../assets/logo.png";
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const flexBetween = `flex item-center justify-between`;
  return (
    <>
      <nav className="bg-gray-50 ">
        {/* logo and links */}
        <div className={`${flexBetween} container mx-auto py-5`}>
          {/*logo */}
          <div>
            <div className="  flex items-center justify-center gap-3">
              <img className="w-16" src={Logo} alt="" />
              <h1 className="uppercase text-3xl tracking-widest font-roboto font-[700]">
                irsse
              </h1>
            </div>
          </div>
          {/*Links */}
          <div className="flex items-center justify-center">
            <div className={`flex items-center justify-center gap-10`}>
              <div className="hidden lg:flex gap-8 font-[500] capitalize tracking-wide">
                <a className="text-red-20" href="">
                  Home
                </a>
                <a href="">about IRSSE</a>
                <a href="">for IRSSE</a>
                <a href="">Resourse</a>
                <a href="">article</a>
                <a href="">gallery</a>
              </div>
              <div>
                <Bars3BottomRightIcon className="h-10 w-10 " />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
