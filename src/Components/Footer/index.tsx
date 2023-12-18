import Logo from "../../assets/logo.png";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const index = () => {
  return (
    <div>
      <div>
        <div className="grid grid-cols-1 gap-10 md:gap-0 md:grid-cols-2 bg-blue-20 text-gray-200 py-5 md:py-10 px-4 mt-5">
          <div>
            {/*logo */}
            <div className="space-y-5">
              <div className="  flex items-center justify-center gap-3">
                <img
                  className="w-28 sm:w-32 bg-white rounded-lg"
                  src={Logo}
                  alt=""
                />
                <div>
                  <h1 className="uppercase text-5xl tracking-widest font-roboto font-[700]">
                    irsse
                  </h1>
                  <h1 className="text-[1.135rem]">अहर्निशं मार्गं दर्शयामः</h1>
                </div>
              </div>
              <div className="sm:px-36 space-y-5">
                <div>
                  <p>
                    Sanu University was established by J.H Merthon in 1810 for
                    the public benefit. Afterwards, it is recognized globally
                  </p>
                </div>
                <div>
                  <EnvelopeIcon className="h-6 w-6 inline mr-2 text-red-20" />
                  <p className="inline"> info@irsse.org</p>
                </div>
                <div>
                  <MapPinIcon className="h-6 w-6 inline-flex mr-2 text-red-20" />
                  <p className="inline">
                    IRSTE, IRISET Chapter, IRISET, Tarnaka Road, Mettuguda,
                    Secunderabad, Telangana, India-500017.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div>
              <div className="flex flex-col sm:items-center md:items-start  gap-5">
                <p className="font-montserrat font-semibold text-xl  underline underline-offset-8">
                  Pages
                </p>
                <NavLink to="/">Home</NavLink>
                <NavLink to={"/about"}>About</NavLink>
                <NavLink to={"#"}>for IRSSE</NavLink>
                <NavLink to={"#"}>Resources</NavLink>
                <NavLink to={"#"}>Article</NavLink>
                <NavLink to={"#"}>Gallery</NavLink>
                <NavLink to={"#"}>Contact Us</NavLink>
              </div>
            </div>
            <div>
              <div className="flex flex-col sm:items-center md:items-start gap-5">
                <p className="font-montserrat font-semibold text-xl  underline underline-offset-8">
                  Links
                </p>
                <NavLink to="#">Member Directory</NavLink>
                <NavLink to={"#"}>Forum</NavLink>
                <NavLink to={"#"}>Pools & Survey</NavLink>
                <NavLink to={"#"}>Links to External Sites</NavLink>
                <NavLink to={"#"}>Events</NavLink>
                <NavLink to={"#"}>Dashboard</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
