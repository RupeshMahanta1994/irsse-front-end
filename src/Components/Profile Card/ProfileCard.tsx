import { PencilSquareIcon } from "@heroicons/react/24/outline";
interface myprops {
  title?: string;
  Profiles?: any;
}
const index = (props: myprops) => {
  return (
    <div>
      <div className=" md:p-16 ">
        <div className="px-2 sm:px-0 my-10">
          <h1 className="text-red-20 font-bold text-2xl">{props.title}</h1>
          <div className="w-[20%] md:w-[8%]  bg-red-20 h-[2px]"></div>
        </div>
        {props.Profiles?.map((item: any) => (
          <>
            {/**Individual Profile of Mr. Akhil Agarwal */}
            <div className="grid  md:grid-cols-9 gap-5 py-5 ">
              <div className="md:col-span-3  md:w-full   ">
                <div className="w-full flex items-center justify-center bg-gray-300 ">
                  <div className="md:w-[250px] md:h-[250px]   ">
                    <img
                      className="w-full h-full    object-contain "
                      src={item.image}
                      alt=""
                    />
                  </div>
                </div>
                <div className="bg-blue-20 text-gray-200 py-5 -translate-y-7 mx-8">
                  <div className="text-sm tracking-wide  mx-3 ">
                    <ul className="list-disc space-y-2">
                      {item.summary.map((item: any) => (
                        <>
                          <li className="space-x-2 flex items-start ">
                            <PencilSquareIcon className="h-4 w-4 inline" />
                            <div className="inline">{item.bullet}</div>
                          </li>
                        </>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="md:col-span-6 space-y-3 px-5">
                <div className="border-b border-blue-20/30 pb-3 font-montserrat">
                  <h1 className="text-2xl md:text-4xl font-bold">
                    {item.name} <span className="text-base">IRSSE</span>
                  </h1>
                  <p className="text-sm font-semibold tracking-wider">
                    {item.designation}
                  </p>
                </div>
                <div className="border-b border-blue-20/30 pb-3">
                  <p className="text-sm font-montserrat">{item.subheading}</p>
                </div>

                {item.achievements.map((item: any) => (
                  <>
                    {item.bio ? (
                      <>
                        <div>
                          <p>{item.bio}</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <ol className="list-disc px-10">
                          <li>{item?.bullet}</li>
                        </ol>
                      </>
                    )}
                  </>
                ))}
              </div>
            </div>
            {/**Individual Profile */}
          </>
        ))}
      </div>
    </div>
  );
};

export default index;
