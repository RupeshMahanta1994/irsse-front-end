import one from "../../../assets/milestone/Akhilesh.png";
import two from "../../../assets/milestone/kashinath.png";
import three from "../../../assets/milestone/pradeep kumar.png";
import four from "../../../assets/milestone/goel.png";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import "./index.css";
const index = () => {
  return (
    <div className="md:container md:mx-auto">
      <div className="space-y-5 md:space-y-14">
        <div className="my-10">
          <h1 className="text-red-20 font-bold text-2xl">
            Our Esteemed Seniors
          </h1>
          <div className="w-[20%] md:w-[8%]  bg-red-20 h-[2px]"></div>
        </div>
        {/**Individual Profile of Mr. Akhil Agarwal */}
        <div className="grid  md:grid-cols-9 gap-5">
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
                Shri Akhil Agarwal <span className="text-base">IRSSE</span>
              </h1>
              <p className="text-sm font-semibold tracking-wider">
                The First Director General (S&T), Railway Board
              </p>
            </div>
            <div className="border-b border-blue-20/30 pb-3">
              <p className="text-sm font-montserrat">
                Shri Akhil Agrawal is a graduate of IIT Roorkee (Formerly
                University of Roorkee) and post graduate from IIT Kanpur.
                <br />
                Shri Akhil Agrawal also earned PG Diploma in IPR in Law from
                NLSIU Bangalore and LLB from Delhi University.
              </p>
            </div>
            <div>
              <p>
                Shri Akhil Agrawal is an officer of Indian Railway Service for
                Signal Engineers (IRSSE) 1979 Exam Batch. He superannuated in
                June 2018 as first Director General (S&T) Railway Board
                (Ministry of Railways). During his stint in IR for more than 37
                years, he worked on General Management posts as General
                Manager/Central Railway and Divisional Railway Manager/Bangalore
                and in Department as Additional Member/Signal and Executive
                Director/Tele Railway Board, Chief Signal & Telecommunication
                Engineer of South Eastern & Northern Railways and Chief Project
                Manager/IRPMU. He was also posted in Research Development &
                Standard Organisation (RDSO).
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
                Shri Akhil Agrawal has widely travelled to Europe, USA,
                Australia, Japan and Asian countries.
              </p>
            </div>
          </div>
        </div>
        {/**Individual Profile */}

        {/**Individual Profile of Mr. N. Kashinath */}
        <div className="grid  md:grid-cols-9 gap-5">
          <div className="md:col-span-3  md:w-full   ">
            <div className="w-full flex items-center justify-center bg-gray-300 ">
              <div className="md:w-[250px] md:h-[250px]   ">
                <img
                  className="w-full h-full    object-contain "
                  src={two}
                  alt=""
                />
              </div>
            </div>
            <div className="bg-blue-20 text-gray-200 py-5 -translate-y-7 mx-8">
              <div className="text-sm tracking-wide  mx-3 ">
                <ul className="list-disc space-y-2">
                  <li className="space-x-2 flex items-start ">
                    <PencilSquareIcon className="h-4 w-4 inline" />
                    <div className="inline">Gauge Coversion works on SR</div>
                  </li>
                  <li className="space-x-2 flex items-start ">
                    <PencilSquareIcon className="h-4 w-4 inline" />
                    <div className="inline">
                      Initail OFC works on N. F. Railway
                    </div>
                  </li>
                  <li className="space-x-2 flex items-start ">
                    <PencilSquareIcon className="h-4 w-4 inline" />
                    <div className="inline">
                      SRSF works on SR invoving major RRI
                    </div>
                  </li>
                  <li className="space-x-2 flex items-start ">
                    <PencilSquareIcon className="h-4 w-4 inline" />
                    <div className="inline">SRSF works on N.F.R</div>
                  </li>
                  <li className="space-x-2 flex items-start ">
                    <PencilSquareIcon className="h-4 w-4 inline" />
                    <div className="inline">First TPWS project on IR on SR</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 space-y-3 px-5">
            <div className="border-b border-blue-20/30 pb-3 font-montserrat">
              <h1 className="text-2xl md:text-4xl font-bold">
                Shri N. Kashinath <span className="text-base">IRSSE</span>
              </h1>
              <p className="text-sm font-semibold tracking-wider">
                The First Member (S&T), Railway Board.
              </p>
            </div>
            <div className="border-b border-blue-20/30 pb-3">
              <p className="text-sm font-montserrat">
                Shri Akhil Agrawal is a graduate of IIT Roorkee (Formerly
                University of Roorkee) and post graduate from IIT Kanpur.
                <br />
                Shri Akhil Agrawal also earned PG Diploma in IPR in Law from
                NLSIU Bangalore and LLB from Delhi University.
              </p>
            </div>
            <div>
              <p>
                Shri N. Kashinath, IRSSE is The First Member (S&T), Railway
                Board. He is an IRSSE officer of the 1980 Exam batch. He
                completed his B.E. in Electronics & Telecommunication from
                Government Engineering College, Jabalpur, M.P. He joined the
                service on 11/02/1982. He started his career in railways as
                Assistant Divisional Signal & Telecommunication Engineer in
                Palakkad Division of Southern Railway and worked in various
                railways like Southern Railway, Northern, N.F., East Coast,
                South Eastern and Metro/Kolkata before working in the Railway
                Board as Additional Member (Signal), Director General (S&T) &
                Member (S&T), Railway Board.
              </p>
            </div>
          </div>
        </div>
        {/**Individual Profile */}

        {/**Individual Profile of Mr. Pradeep Kumar*/}
        <div className="grid  md:grid-cols-9 gap-5">
          <div className="md:col-span-3  md:w-full   ">
            <div className="w-full flex items-center justify-center bg-gray-300 ">
              <div className="md:w-[250px] md:h-[250px]   ">
                <img
                  className="w-full h-full    object-contain "
                  src={three}
                  alt=""
                />
              </div>
            </div>
            <div className="bg-blue-20 text-gray-200 py-5 -translate-y-7 mx-8">
              <div className="text-sm tracking-wide  mx-3 ">
                <ul className="list-disc space-y-2">
                  <li className="space-x-2 flex items-start ">
                    <PencilSquareIcon className="h-4 w-4 inline" />
                    <div className="inline">
                      The first Member (Infrastructure)
                    </div>
                  </li>
                  <li className="space-x-2 flex items-start ">
                    <PencilSquareIcon className="h-4 w-4 inline" />
                    <div className="inline">Director General, NAIR</div>
                  </li>
                  <li className="space-x-2 flex items-start ">
                    <PencilSquareIcon className="h-4 w-4 inline" />
                    <div className="inline">Additiona General Manager, WCR</div>
                  </li>
                  <li className="space-x-2 flex items-start ">
                    <PencilSquareIcon className="h-4 w-4 inline" />
                    <div className="inline">Chief Safety Officer, SER</div>
                  </li>
                  <li className="space-x-2 flex items-start ">
                    <PencilSquareIcon className="h-4 w-4 inline" />
                    <div className="inline">
                      Director/Telecom, Railway Board
                    </div>
                  </li>
                  <li className="space-x-2 flex items-start ">
                    <PencilSquareIcon className="h-4 w-4 inline" />
                    <div className="inline">General Manager, RCIL</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 space-y-3 px-5">
            <div className="border-b border-blue-20/30 pb-3 font-montserrat">
              <h1 className="text-2xl md:text-4xl font-bold">
                Shri Pradeep Kumar<span className="text-base">IRSSE</span>
              </h1>
              <p className="text-sm font-semibold tracking-wider">
                The First Director General (S&T), Railway Board
              </p>
            </div>
            <div className="border-b border-blue-20/30 pb-3">
              <p className="text-sm font-montserrat">
                Shri Pradeep Kumar is Bachelor of Engineering (Electronics &
                Communication) and Master of Engineering (Communication Systems)
                (University Gold medalist) from University of Roorkee (now IIT
                Roorkee) & Master of Business Administration (Marketing &
                Finance) from Southern Cross University, New South Wales,
                Australia.
              </p>
            </div>
            <div>
              <p>
                Shri Pradeep Kumar served Indian Railways for 38 years in
                various positions and rose to become first Member Infrastructure
                of the restructured Railway Board. An IRSSE officer of 1981 exam
                batch, Shri Pradeep Kumar joined Indian Railways as a
                probationer on Northern Railway on 14.03.1983 and retired on
                superannuation on 28.02.2021 as Member Railway Board and
                Ex-officio Secretary to Government of India.
              </p>
            </div>
            <div>
              <p>
                During his illustrious career, Shri Pradeep Kumar has held
                several important executive and managerial positions on Indian
                Railways. He has served on Northern Railway (NR), South Eastern
                Railway (SER), South Central Railway (SCR), West Central Railway
                (WCR), Indian Railways Central Organisation for Telecom (IRCOT),
                Central Organisation for Railway Electrification (CORE), RailTel
                Corporation of India Limited (RCIL), National Academy of Indian
                Railways (NAIR) besides Railway Board (Ministry of Railways).
              </p>
            </div>
            <div>
              <p>
                Some of the important assignments during his career include
                Director General/ National Academy of Indian Railways (DG/NAIR),
                Additional General Manager/ West Central Railway (AGM/WCR),
                Chief Safety Officer/South Eastern Railway (CSO/SER), Divisional
                Railway Manager/South Central Railway, Vijayawada (DRM/SCR/BZA),
                Executive Director/Signal Project (ED/SP) &
                Director/Telecom/Railway Board, Deputy Chief Signal & Telecom
                Engineer/Microwave Maintenance/Northern Railway (DyCSTE/MWM/NR),
                New Delhi, General Manager (GM) and Executive Director (ED)
                /RailTel Corporation of India Limited (RCIL), New Delhi besides
                Member (S&T) and Member (Infrastructure), Railway Board.
              </p>
            </div>
            <div>
              <p>
                He has travelled widely over various countries and undergone
                training in High-Speed Rail in Japan and Strategic Management at
                Carnegie Mellon University, Pittsburgh, USA etc.
              </p>
            </div>
            <div>
              <p>
                His areas of expertise include train control and operation
                systems, Telecom network design & planning, Infrastructure
                projects management, Disaster management etc.
              </p>
            </div>
            <div>
              <p>
                As Board Member, Shri Pradeep Kumar handled nearly 5 lakh staff
                and 4000 officers, all fixed assets viz-track, bridges,
                buildings, roads, land & amenities, station redevelopment,
                signalling and telecommunication etc. and implementation of
                infrastructure projects and railway electrification projects
                worth Rs 50,000 crore annually. As Board Member, his major
                thrust has been on modernisation of signalling, mechanisation of
                track maintenance, elimination of LC gates, raising of speed,
                station redevelopment, speeding up of infrastructure projects on
                High Density and Highly Utilised routes, completion of Railway
                Electrification project so as to adhere to the target of 100%
                electrification of BG routes by Dec 2023. One of the major
                contributions has been in getting allotment of 5 MHz spectrum in
                700 MHz band from the Cabinet for IR’s ambitious signalling
                modernisation programme viz deployment of LTE based mobile train
                radio communication and indigenously developed Train Collision
                Avoidance System (TCAS) across 64,000 route km BG network.
              </p>
            </div>
            <div>
              <p>
                As DG/NAIR, Shri Pradeep Kumar implemented an integrated
                training programme for group A probationers of all services
                across all Centralised Training Institutes (CTIs). As
                DRM/Vijayawada, he was responsible for safe operation of 400
                trains per day and about 0.1 million tonne freight loading per
                day with about 18000 strong staff. Systematic business
                development led to about a 50% increase in freight traffic
                during his tenure of 2 year and 8 months as DRM.
              </p>
            </div>
            <div>
              <p>
                Shri Kumar was involved in initial business plan development for
                setting up of RailTel Corporation of India Ltd (RailTel), a CPSU
                of Ministry of Railways and after incorporation of RailTel,
                became its first General Manager on 02.01.2002 and subsequently
                worked as Executive Director. During this period, he was
                responsible for setting up of OFC based STM-16 telecom backbone
                network, STM4/1 Access network and MPLS data network and also
                for business development and marketing of telecom services viz
                leasing of dark fibre, tower infrastructure, co-location
                facility, leasing of bandwidth etc.
              </p>
            </div>
            <div>
              <p>
                Shri Kumar received Hon’ble Minister of Railways’ appreciation
                letter for Introduction of IR’s 1st Video Conferencing facility
                while working as Director/Telecom, Railway Board in the year
                1999. First Video Conferencing of IR was demonstrated on
                1.2.1999 between Railway Board and Mumbai (Western Railway). He
                was awarded with वर्ष 2018 का कमलापति त्रिपाठी राजभाषा स्वर्ण
                पदक एवं प्रशस्ति पत्र while working as DG/NAIR.
              </p>
            </div>
            <div>
              <p>
                Shri Kumar is a Fellow of The Institute of Electronics &
                Telecommunication Engineers (IETE), life Member of The
                Institution of Railway Signal & Telecommunication Engineers
                (IRSTE), Fellow of the Institution of Engineers (India), Life
                Member of The Institute of Rail Transport (India), NCC (Sr
                division Army wing) Certificate B holder.
              </p>
            </div>
            <div>
              <p>He superannuated from Railway Service on 28.02.2021.</p>
            </div>
          </div>
        </div>
        {/**Individual Profile */}

        {/**Individual Profile of Mr. S. K. Goel */}
        <div className="grid  md:grid-cols-9 gap-5">
          <div className="md:col-span-3  md:w-full   ">
            <div className="w-full flex items-center justify-center bg-gray-300 ">
              <div className="md:w-[250px] md:h-[250px]   ">
                <img
                  className="w-full h-full    object-contain "
                  src={four}
                  alt=""
                />
              </div>
            </div>
            <div className="bg-blue-20 text-gray-200 py-5 -translate-y-7 mx-8">
              <div className="text-sm tracking-wide  mx-3 ">
                <ul className="list-disc space-y-2">
                  <li className="space-x-2 flex items-start ">
                    <PencilSquareIcon className="h-4 w-4 inline" />
                    <div className="inline">
                      First Director General of IRISET
                    </div>
                  </li>
                  <li className="space-x-2 flex items-start ">
                    <PencilSquareIcon className="h-4 w-4 inline" />
                    <div className="inline">
                      Planning and executing major S & T projects
                    </div>
                  </li>
                  <li className="space-x-2 flex items-start ">
                    <PencilSquareIcon className="h-4 w-4 inline" />
                    <div className="inline">Regional Head of RCIL</div>
                  </li>
                  <li className="space-x-2 flex items-start ">
                    <PencilSquareIcon className="h-4 w-4 inline" />
                    <div className="inline">
                      Spearheaded the development of the IRSSE web portal
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:col-span-6 space-y-3 px-5">
            <div className="border-b border-blue-20/30 pb-3 font-montserrat">
              <h1 className="text-2xl md:text-4xl font-bold">
                Shri S.K.Goel <span className="text-base">IRSSE</span>
              </h1>
              <p className="text-sm font-semibold tracking-wider">
                The First Director General of Indian Railways Institute of
                Signal Engineering and Telecommunications (IRISET).
              </p>
            </div>
            <div className="border-b border-blue-20/30 pb-3">
              <p className="text-sm font-montserrat">
                Shri S.K.Goel is the First Director General of Indian Railways
                Institute of Signal Engineering and Telecommunications (IRISET)
                which is the Fourth Centralised Training Institute established
                in the year 1957 on Indian Railways for imparting Training in
                Railway Signalling and Telecommunications to Officers and
                Supervisors of S&T Department .
              </p>
            </div>

            <div>
              <p>
                He is an officer of Indian Railway Service of Signal Engineers
                (IRSSE) of 1982 batch. He is a Graduate (BE) from University of
                Roorkee (now as IIT/Roorkee). He started his Career in Indian
                Railways as a Probationary Officer (Assistant Signal &
                Telecommunication Engineer) in the year 1984.
              </p>
            </div>
            <div>
              <p>
                He held various positions on Indian Railways viz. Dy.Chief
                Signal & Telecommunication Engineer/Metro Railway, Kolkata,
                Dy.Chief Signal & Telecommunication Engineer/E.Rly, Chief Signal
                & Telecommunication Engineer/Construction, East Coast Railway;
                Chief Signal & Telecommunication Engineer(Projects)/SCR; Chief
                Signal & Telecommunication Engineer (Planning)/SCR; Chief
                Communication Engineer/SCR & Chief Signal Engineer/SCR.
              </p>
            </div>
            <div>
              <p>
                He worked as Regional Head (Southern Region) in Railtel
                Corporation as Executive Director from 2012 to 2015 and as
                Executive Director (Signal), Railway Board from 2015 to 2018;
              </p>
            </div>
            <div>
              <p>
                He was Principal Chief Signal & Telecom Engineer of Southern
                Railway from 2018 to 2020.
              </p>
            </div>
            <div>
              <p>
                Shri S K Goel in his illustrious career of 36 years in Indian
                Railways has worked in all segments of working of S&T deptt with
                special emphasis on planning and execution of several major
                Signalling and Telecom projects of all complexities on different
                Railway Systems in India and had exposure of handling large S&T
                projects in various roles at different Management levels.
              </p>
            </div>
            <div>
              <p>
                As Director General IRISET, he took the initiative for the
                development of the IRSSE Web Portal which was launched on
                28.12.2021. He superannuated from service as Director General,
                Indian Railways Institute of Signal Engineering &
                Telecommunications (IRISET) on 31/12/2021.
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
