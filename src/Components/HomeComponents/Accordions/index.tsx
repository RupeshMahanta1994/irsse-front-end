import { accrodionData } from "./content";
import Accordion from "./Accordion";

const index = () => {
  return (
    <div>
      <div>
        {accrodionData.map((item) => (
          <>
            <Accordion title={item.title} content={item.content} />
          </>
        ))}
      </div>
    </div>
  );
};

export default index;
