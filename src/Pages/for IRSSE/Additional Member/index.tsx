import { PencilSquareIcon } from "@heroicons/react/24/outline";
import one from "../../../assets/milestone/Aruna Singh.jpg";

const index = () => {
  return (
    <div>
      <div className=" md:p-16 ">
        <div className="px-2 sm:px-0 my-10">
          <h1 className="text-red-20 font-bold text-2xl">
            DG IRISET & ADDITIONAL MEMBER
          </h1>
          <div className="w-[20%] md:w-[8%]  bg-red-20 h-[2px]"></div>
        </div>
        {/**Individual Profile of Mr. Akhil Agarwal */}
        <div className="grid  md:grid-cols-9 gap-5 py-5 ">
          <div className="md:col-span-3  md:w-full   ">
            <div className="w-full flex items-center justify-center bg-gray-300 ">
              <div className="md:w-[250px] md:h-[250px]   ">
                <img
                  className="w-full h-full    object-contain "
                  src={one}
                  alt=""
                />
              </div>
            </div>
            <div className="bg-blue-20 text-gray-200 py-5 -translate-y-7 mx-8">
              <div className="text-sm tracking-wide  mx-3 ">
                <ul className="list-disc space-y-2">
                  <li className="space-x-2 flex items-start ">
                    <PencilSquareIcon className="h-4 w-4 inline " />
                    <div className="inline">Formation of RCIL</div>
                  </li>
                  <li className="space-x-2 flex items-start ">
                    <PencilSquareIcon className="h-4 w-4 inline" />
                    <div className="inline">IR Satellite hub at Delhi</div>
                  </li>
                  <li className="space-x-2 flex items-start ">
                    <PencilSquareIcon className="h-4 w-4 inline" />
                    <div className="inline">TRWS on Delhi-Agra section</div>
                  </li>
                  <li className="space-x-2 flex items-start ">
                    <PencilSquareIcon className="h-4 w-4 inline" />
                    <div className="inline">MTCR on Delhi-Jhansi section</div>
                  </li>
                  <li className="space-x-2 flex items-start ">
                    <PencilSquareIcon className="h-4 w-4 inline" />
                    <div className="inline">
                      IRS type point Machine standartdization
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 space-y-3 px-5">
            <div className="border-b border-blue-20/30 pb-3 font-montserrat">
              <h1 className="text-2xl md:text-4xl font-bold">
                Smt. Aruna Singh <span className="text-base">IRSSE</span>
              </h1>
              <p className="text-sm font-semibold tracking-wider">
                Additional Member (Telecom), Railway Board
              </p>
            </div>
            <div className="border-b border-blue-20/30 pb-3">
              <p className="text-sm font-montserrat">
                Smt Aruna Singh did her Bachelors in Engineering from Delhi
                College of Engineering and Diploma in Public Policy from IIPA,
                New Delhi.
              </p>
            </div>
            <div>
              <p>
                Smt Aruna Singh is an officer of Indian Railway Service of
                Signal Engineers of 1985 batch She did her Bachelors in
                Engineering from Delhi College of Engineering and Diploma in
                Public Policy from IIPA, New Delhi. Madam started her career as
                ASTE, in Delhi Division, Northern Railway and held various
                important posts thereafter like Chief Communication Engineer,
                Chief Signal & Telecom Engineer / Projects, Chief Safety Officer
                and Additional General Manager North Western Railway, and
                Divisional Railway Manager, Hyderabad Division, South Central
                Railway. She has undergone various training programs in India
                and Abroad like Strategic Management at Shanghai & Paris,
                Enterprise Computing at CRIS, Management Strategies at CTARA and
                IT Solutions at CRIS. She led the team of Hyderabad Division in
                winning efficiency shields in several areas of open line working
                during her tenure as DRM.
              </p>
            </div>
            <div>
              <p>
                During his career of more than 37 years in Railways, Shri Akhil
                Agrawal was instrumental in formation of RailTel Corporation of
                India Limited (RCIL) a PSU under Ministry of Railways. Some of
                the other achievements being long pending issue of finalisation
                of executing agency for resignalling on Delhi Kanpur section – a
                prestigious S&T project funded from KfW Bank, Germany;
                conceptualisation and execution of first IR satellite hub at
                Delhi; TPWS on Delhi-Agra section; MTRC on Delhi-Jhansi section;
                & design and standardisation of IRS type point machines
              </p>
            </div>
            <div>
              <p>
                As Additional Member Telecom, Railway Board her important
                contribution is allotment of 5 MHz bandwidth in the 700 MHz band
                responsible for upgradation of Telecom Services in the
                Organisation.
              </p>
            </div>
            <div>
              <p>
                Smt. Aruna Singh worked as Additional General Manager, North
                Western Railway, before taking over charge as Additional Member,
                Telecom Railway Board in March, 2021
              </p>
            </div>
          </div>
        </div>
        {/**Individual Profile */}
      </div>
    </div>
  );
};

export default index;
