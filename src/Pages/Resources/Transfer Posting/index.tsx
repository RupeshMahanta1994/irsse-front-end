import { Pagination } from "../../../Components";
import { Transfers, ColumsData } from "../../../Shared/Resouces/Transfer";

const index = () => {
  return (
    <div>
      <Pagination data={Transfers} columns={ColumsData} />
    </div>
  );
};

export default index;
