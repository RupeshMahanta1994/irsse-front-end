import { GM } from "../../../Shared/GeneralManager";

const index = () => {
  return (
    <div>
      <div className="sm:px-20 ">
        <div className="px-2 sm:px-0 my-10">
          <h1 className="text-red-20 font-bold text-2xl">
            IRSSE Officers Posted as GMs
          </h1>
          <div className="w-[20%] md:w-[8%]  bg-red-20 h-[2px]"></div>
        </div>
        {GM &&
          GM.map((item) => (
            <div className=" space-y-5 px-4 py-5 md:px-10 md:py-5">
              <div className="font-montserrat">
                <h1 className="text-3xl font-bold">
                  {item.name}{" "}
                  <span className="text-sm text-red-20  tracking-wider">
                    IRSSE
                  </span>
                </h1>
                <p className="text-sm font-bold tracking-wider">
                  {item.designation}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-6 gap-8">
                <div className="col-span-1">
                  <img src={item.image} alt="" />
                </div>
                <div className="space-y-3 md:col-span-5">
                  {item.achievements.map((item) => (
                    <p>{item.bio}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default index;
