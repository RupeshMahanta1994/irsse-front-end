import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const ArticleData = [
  {
    title: "Articles",
    description:
      "“Stay on Track with Cutting-Edge Rail Signalling & Telecom             Know-how!",
    bulletinTitle:
      "Welcome to a knowledge hub where the forefront of railway technology meets insightful perspectives from seasoned professionals.",
    bullet: [
      {
        points:
          "Discover the cutting-edge advancements in railway signalling and telecommunication.",
      },
      {
        points:
          "Discover insightful content on Kavach, LTE, CBTC, Electronic Interlocking, Predictive Maintenance, and High-Speed Rail Technology.",
      },
      {
        points:
          "Delve into Indian Railways' innovations with IRSSE officers, gaining insights into the complex web of deployed technologies in the railway domain. ",
      },
    ],
  },
];

const index = () => {
  const navigate = useNavigate();
  const HandleClick = () => navigate("/about");
  return (
    <div>
      <div>
        <div className="h-[32rem] bg-parallax2 bg-bottom bg-cover flex items-center justify-center">
          <div className="h-full bg-red-20/20 bg-blur-sm flex items-center justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 px-2 sm:px-10">
              <div className="bg-gray-50/80 sm:col-span-2 px-10 py-8">
                {ArticleData &&
                  ArticleData.map((item) => (
                    <div className="space-y-4">
                      <h1 className="font-bold text-3xl tracking-wider">
                        {item.title}
                      </h1>
                      <p className="text-red-20">{item.description}</p>
                      <div className="space-y-2">
                        <h3 className="text-sm  font-roboto tracking-wider">
                          {item.bulletinTitle}
                        </h3>
                        <ul className="space-y-2 ">
                          {item.bullet.map((item) => (
                            <>
                              <li>
                                <ArrowLongRightIcon className="h-6 w-6 text-red-20 inline mr-3" />
                                <p className="inline">{item.points}</p>
                              </li>
                            </>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
              </div>
              <div
                onClick={HandleClick}
                className="col-span-1 flex items-end justify-center"
              >
                <ClipboardDocumentIcon className="h-32 w-32 text-slate-50 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
