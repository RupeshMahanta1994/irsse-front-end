import { Pagination } from "../../../../Components";
import {
  AxleCounter,
  ColumsData,
} from "../../../../Shared/Resouces/Policy Letters/Signal/AxleCounter";

const index = () => {
  return (
    <div>
      <Pagination
        data={AxleCounter}
        columns={ColumsData}
        title="Axle Counter"
      />
    </div>
  );
};

export default index;
