import Button from "../Button";
import "./index.css";

const BannerData = [
  {
    id: 1,
    title: "Our Esteemed Seniors-A few Historical Milestones.",
    description:
      "Distinguished IRSSE Officers, including the inaugural Director General (S&T) and pioneering Member (S&T) of the Railway Board, along with the Member (Infrastructure) and Director General of IRISET, have left an indelible mark as trailblazers in the field. As the first in their respective roles, they have significantly advanced railway expertise and innovation, making noteworthy contributions to the progress of the Indian Railways. These trailblazers have not only made us proud but also played a pivotal role in shaping the trajectory of railway development.",
  },
];

const index = () => {
  return (
    <div>
      <div className="mt-10">
        <div className="flex items-center justify-center h-[50rem] sm:h-[38rem] bg-fixed bg-cover bg-center  bg-blur-md bannerBackground">
          <div className="w-full h-full bg-red-20/20 flex gap-4 items-center  justify-center">
            {BannerData &&
              BannerData.map((item) => (
                <div className="">
                  <div className="w-full sm:w-[70%] lg:w-1/2  mx-auto  space-y-5 bg-slate-50/80 px-8 py-10">
                    <h1 className="text-2xl  text-slate-50 capitalize bg-blue-20 px-2 py-1 rounded-sm">
                      {item.title}
                    </h1>
                    <p className="text-left">{item.description}</p>
                    <div className="text-center">
                      <Button title="Know More" url="/milestone" />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
