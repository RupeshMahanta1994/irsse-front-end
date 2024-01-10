import { Pagination } from "../../../../Components";
import {
  Telecom,
  ColumsData,
} from "../../../../Shared/Resouces/Policy Letters/Telecom/Telecom";

const index = () => {
  return (
    <div>
      <Pagination
        data={Telecom}
        columns={ColumsData}
        title="Telecom Policy Letters"
      />
    </div>
  );
};

export default index;
