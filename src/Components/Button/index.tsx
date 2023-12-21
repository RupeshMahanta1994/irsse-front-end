import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

type Props = {
  title: string;
  url: string;
};

const index = (props: Props) => {
  return (
    <>
      <button className="bg-red-20 px-3 py-2 rounded-sm text-slate-50">
        <NavLink to={props.url}>
          {props.title}
          <ArrowLongRightIcon className="h-6 w-6 text-blue-20 inline ml-2" />
        </NavLink>
      </button>
    </>
  );
};

export default index;
