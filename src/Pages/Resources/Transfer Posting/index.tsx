import { Pagination } from "../../../Components";
import { Transfers, ColumsData } from "../../../Shared/Resouces/Transfer";

type Props = {};

const index = (props: Props) => {
  return (
    <div>
      <Pagination data={Transfers} columns={ColumsData} />
    </div>
  );
};

export default index;
