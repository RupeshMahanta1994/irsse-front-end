import "./index.css";
import semaphore from "../../assets/Home Page/about/1.jpg";
import thane from "../../assets/about/od trina.jpg";
import { TrainingData, timeLine } from "../../Shared/AboutPage";
import training from "../../assets/dgNair/1.jpg";

const About = () => {
  return (
    <div className="bg-gray-50 py-10">
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
      {/* Recruitments and Training */}
      <div className="p-4 md:px-10">
        {/**Recruitments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 ">
          {/**Image */}
          <div className="grid grid-cols-2 gap-2 md:gap-3">
            <div className="grid place-items-center ">
              <img className="rounded-lg" src={training} alt="" />
            </div>
            <div className="space-y-2 md:space-y-3">
              <img className="rounded-lg" src={training} alt="" />
              <img className="rounded-lg" src={training} alt="" />
            </div>
          </div>
          {/**text */}
          <div className="grid gap-2 md:gap-4 place-content-center">
            <div>
              <h3 className="text-sm font-semibold tracking-widest text-red-20 font-roboto">
                Recruitment to IRSSE Group ‘A’
              </h3>
              <h1 className="font-bold text-xl">
                Recruitment to the Indian Railway Service of Signal Engineers
                (IRSSE) Group ‘A’ cadre is done through two modes:
              </h1>
            </div>
            <div className=" space-y-5">
              <div className="bg-blue-20/10 px-5 py-6">
                <p className="">
                  Direct recruitment by UPSC: 50% of the cadre strength is
                  recruited through direct recruitment conducted by the Union
                  Public Service Commission (UPSC).
                </p>
              </div>
              <div className="bg-blue-20/10 px-5 py-6">
                <p>
                  Promotion from Group B officers of Signal and
                  Telecommunication departments of the Zonal Railways: The
                  remaining 50% of the cadre strength is filled through
                  promotions from eligible Group B officers serving in the
                  Signal and Telecommunication departments of the Zonal
                  Railways.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/**Training */}
        <div>
          <div className="flex flex-col items-center justify-center my-8 space-y-7 text-justify md:text-center">
            <h1 className="text-5xl font-roboto tracking-wider font-bold">
              Training
            </h1>
            <p className="w-[90%] md:w-[85%] g:w-[60%]">
              Upon completing their initial training at the Indian Railways
              Institute of Signal Engineering and Telecommunication (IRISET) in
              Secunderabad, IRSSE probationers embark on a comprehensive 78-week
              training program that includes visits to various academies and
              institutions across the country. These visits are designed to
              provide Officer Trainees with a diverse range of exposure and
              skills that will be invaluable to their careers as railway
              officers. Some of the institutions visited during this period
              include
            </p>
          </div>
          <div>
            <h1>Some of the institutions visited during this period include</h1>
            <div>
              <div className=" space-y-5 px-10">
                {TrainingData.map((item) => (
                  <>
                    <div className="flex  odd:flex-row-reverse">
                      <div className="w-[55%] h-[300px] border-[5px] border-blue-20">
                        <img
                          className="w-full h-full object-cover p-3"
                          src={item.url}
                          alt=""
                        />
                      </div>
                      <div className="w-[45%] flex gap-3 flex-col items-center justify-center px-5 text-center">
                        <p className="text-red-20">{item.title}</p>
                        <h1 className="text-xl font-medium tracking-wide">
                          {item.institute}
                        </h1>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/**Role and Function */}
      <div>
        {/**Function */}
        <div>
          <div className="flex flex-col items-center justify-center my-8 space-y-7 text-justify md:text-center">
            <h1 className="text-5xl font-roboto tracking-wider font-bold">
              Role and Functions
            </h1>
            <p className="w-[90%] md:w-[85%] g:w-[60%]">
              The IRSSE officer in the Signal & Telecommunication Department
              plays a crucial role in planning, designing, commissioning, and
              maintaining the Signalling and Telecommunication Infrastructure of
              Indian Railways. This essential responsibility ensures the safe,
              efficient, and punctual operation of trains while also maximising
              the line capacity. This techno-managerial role requires
              coordination with other departments within the railways to ensure
              seamless functioning. The operation of trains in a safe and
              efficient manner heavily relies on the reliable functioning of the
              signalling and telecommunication equipment, which is installed and
              maintained by the S&T department. These equipment and circuits are
              meticulously designed in a fail-safe manner to ensure smooth
              operations.
            </p>
          </div>
        </div>

        {/**Organisational structure */}
        <div>
          {/**Table */}
          <div className="container mx-auto">
            <table>
              <thead className="font-bold tracking-wider text-center border">
                <tr>
                  <td>Position in the Government of India</td>
                  <td>Division</td>
                  <td>Zone</td>
                  <td>Railway Board</td>
                </tr>
              </thead>
              <tbody className="text-center border">
                <tr>
                  <td>Junior Time Scale</td>
                  <td>
                    Assistant Divisional Signal& Telecommunication
                    Engineer.(ADSTE)
                  </td>
                  <td>
                    Assistant Executive Signal & Telecommunication
                    Engineer.(AXSTE)
                  </td>
                  <td>Assistant Director</td>
                </tr>

                <tr>
                  <td>Senior Time Scale</td>
                  <td>Divisional Signal& Telecommunication Engineer.(DSTE)</td>
                  <td>Executive Signal & Telecommunication Engineer.(XSTE)</td>
                  <td>Deputy Director</td>
                </tr>
                <tr>
                  <td>Junior Administrative Grade/Selection Grade</td>
                  <td>
                    Sr. Divisional Signal& Telecommunication Engineer. (Sr.DSTE)
                  </td>
                  <td>
                    Dy.Chief Signal & Telecommunication Engineer(.Dy.CSTE)
                  </td>
                  <td>Joint Director/Director</td>
                </tr>
                <tr>
                  <td>Senior Administrative Grade</td>
                  <td>Divisional Railway Manager(DRM)</td>
                  <td>Chief Signal & Telecommunication Engineer.(CSTE)</td>
                  <td>Executive Director</td>
                </tr>
                <tr>
                  <td>Higher Administrative Grade</td>
                  <td></td>
                  <td>
                    Principal Chief Signal & Telecommunication Engineer.(PCSTE)
                  </td>
                  <td>Principal Executive Director.</td>
                </tr>
                <tr>
                  <td>Higher Administrative Grade +</td>
                  <td></td>
                  <td>General Manager</td>
                  <td>Additional Member.</td>
                </tr>
                <tr>
                  <td>Apex Scale</td>
                  <td></td>
                  <td></td>
                  <td>Member Infrastructure</td>
                </tr>
                <tr>
                  <td>Apex Scale</td>
                  <td></td>
                  <td></td>
                  <td>Chairman & CEO.</td>
                </tr>
              </tbody>
            </table>
            <div className="my-5">
              <p>
                IRSSE officers, who are directly recruited, are initially
                appointed in the Divisional Office for Operation and
                Maintenance. They may also be posted in the Indian Railways
                Project Organisation or Construction Organisation, where they
                are responsible for Planning, Design, Installation, and
                Commissioning of new Signal & Telecommunication installations.
                In the current scenario, IRSSE officers enjoy favourable
                promotional opportunities compared to other Central Services.
                Additionally, due to the non-functionality of Selection Grade in
                Railways, Railway Officers tend to remain in field-level roles
                for longer durations, which enhances their effectiveness in
                policy-making.
              </p>
            </div>
          </div>
        </div>

        {/*Challenges and oppurtunities */}
        <div className="flex flex-col items-center justify-center my-8 space-y-7 text-justify md:text-center">
          <h1 className="text-5xl font-roboto tracking-wide font-bold">
            Challenges and Opportunities
          </h1>
          <p className="w-[90%] md:w-[85%] g:w-[60%]">
            Indian Railways is currently at a critical juncture, as the
            Government of India is taking numerous steps to enhance safety,
            efficiency, speed, and line capacity in train operations. The Signal
            & Telecommunication department plays a pivotal role in realizing
            these objectives, and without it, achieving these goals would remain
            a distant possibility. In recent years, the Signal &
            Telecommunication department has been at the forefront of adopting
            cutting-edge technologies from around the world, such as TCAS,
            Electronic Interlocking, Digital Axle Counter, Train Protection
            Warning System, Centralised Traffic Control, Train Management
            System, IP-MPLS, Long Term Evolution, among others. The department
            has consistently kept up with the rapid pace of technological
            advancements, ensuring that it remains at the forefront of
            innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
