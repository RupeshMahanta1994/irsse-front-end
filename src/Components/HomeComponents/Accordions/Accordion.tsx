import { useState } from "react";
type Props = {
  title: string;
  content: string;
};
const Accordion = (props: Props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div
        className="accordion-title flex items-center justify-between bg-black/10 my-3 py-2 px-2 text-lg tracking-wider font-medium font-roboto"
        onClick={() => setIsActive(!isActive)}
      >
        <div>{props.title}</div>
        <div className="text-red-20">{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        <div className="">
          <p>{props.content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
