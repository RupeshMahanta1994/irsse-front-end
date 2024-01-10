import Logo from "../../assets/logo.png";
import { useState } from "react";
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import "./index.css";

const Navbar = () => {
  const [showIRSSE, setShowIRSSE] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const flexBetween = `flex item-center justify-between`;
  return (
    <>
      <nav className="bg-gray-50 ">
        {/* logo and links */}
        <div className={`${flexBetween} container mx-auto py-5`}>
          {/*logo */}
          <div>
            <div className="  flex items-center justify-center gap-3">
              <img className="w-20" src={Logo} alt="" />
              <div>
                <h1 className="uppercase text-[2.6rem] tracking-widest font-roboto font-[700]">
                  irsse
                </h1>
                <h1 className="text-[1rem]">अहर्निशं मार्गं दर्शयामः</h1>
              </div>
            </div>
          </div>
          {/*Links */}
          <div className="flex items-center justify-center">
            <div className={`flex items-center justify-center gap-10`}>
              <div className="hidden lg:flex gap-8 font-[500] capitalize tracking-wide relative">
                <ul className="lg:flex gap-8 tracking-wide mainMenuList">
                  <li>
                    {" "}
                    <NavLink className="text-red-20" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About </NavLink>
                  </li>
                  <li
                    onMouseEnter={() => setShowIRSSE(true)}
                    onMouseLeave={() => setShowIRSSE(false)}
                  >
                    <NavLink to="">
                      for IRSSE
                      {showIRSSE && (
                        <div className="menuItem bg-black">
                          <ul className="absolute z-10  space-y-2 px-4 py-5 rounded-sm bg-slate-50">
                            <li className="relative">
                              <NavLink to="">Profile of IRSSE Officers</NavLink>
                            </li>

                            <li className="ml-8">
                              <NavLink to="/milestone">
                                Our Esteemed Seniors
                              </NavLink>
                            </li>
                            <li className="ml-8">
                              <NavLink to="/additionalMember">
                                DG IRISET & Additional Members
                              </NavLink>
                            </li>
                            <li className="ml-8">
                              <NavLink to="/gm">
                                IRSSE Officers Posted as GM
                              </NavLink>
                            </li>

                            <li>
                              <NavLink to="/national-awardee">
                                Our National Awardees 2022
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="/seniority">
                                Seniority List of IRSSE
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="/transfer">
                                Transfer & Posting
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to="">Deputation & Opportunity</NavLink>
                            </li>
                          </ul>
                        </div>
                      )}
                    </NavLink>
                  </li>

                  <li
                    onMouseEnter={() => setShowResources(true)}
                    onMouseLeave={() => setShowResources(false)}
                  >
                    <NavLink to="">
                      Resourses
                      {showResources && (
                        <div className="menuItem bg-black">
                          <ul className="absolute z-10  space-y-2 px-4 py-5 rounded-sm bg-slate-50">
                            <li className="relative">
                              <NavLink to="/general">General</NavLink>
                            </li>
                            <li>
                              <NavLink to="">Policy Letter</NavLink>
                            </li>

                            <li className="ml-8">
                              <NavLink to="/axlecounter">Signal</NavLink>
                            </li>
                            <li className="ml-8">
                              <NavLink to="/telecom">Telecom</NavLink>
                            </li>

                            <li>
                              <NavLink to="/national-awardee">
                                RDSO Specification
                              </NavLink>
                            </li>
                            <li>
                              <a
                                href="https://indianrailways.gov.in/railwayboard/view_section.jsp?lang=0&id=0,1,304,366,539,2848"
                                target="_blank"
                              >
                                Pink Book 2023-24
                              </a>
                            </li>
                            <li>
                              <NavLink to="/sheduleofrates">
                                Shedule of Rates
                              </NavLink>
                            </li>
                            <li>
                              <NavLink to=""> Camtech Seminars</NavLink>
                            </li>
                          </ul>
                        </div>
                      )}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="">article</NavLink>
                  </li>
                  <li>
                    <NavLink to="">gallery</NavLink>
                  </li>
                </ul>
              </div>

              {/**For Irsse */}

              {/**For Irsse */}
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
