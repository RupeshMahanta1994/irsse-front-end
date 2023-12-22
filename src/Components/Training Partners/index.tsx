import { TrainingData } from "../../Shared/AboutPage";
const index = () => {
  return (
    <div className="bg-blue-20 py-10 overflow-hidden">
      <h1 className="text-slate-50 tracking-wide text-2xl  font-bold text-center">
        Training Partners
      </h1>
      <div className="flex items-center justify-between  ">
        {TrainingData &&
          TrainingData.map((item) => (
            <div className="mx-5 my-5">
              <div className="w-[250px] h-[250px] space-y-1">
                <img
                  className="w-full h-full object-cover rounded-sm"
                  src={item.url}
                  alt=""
                />
                <p className="text-center text-base font-bold text-red-20 tracking-widest ">
                  {item.acro}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default index;
