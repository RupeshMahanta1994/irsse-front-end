import { Pagination } from "../../../Components";
import { General, ColumsData } from "../../../Shared/Resouces/General";

const index = () => {
  return (
    <div>
      <Pagination data={General} columns={ColumsData} title={"General"} />
    </div>
  );
};

export default index;
