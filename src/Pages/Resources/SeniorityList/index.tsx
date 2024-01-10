import { Pagination } from "../../../Components";
import {
  SeniorityList,
  ColumsData,
} from "../../../Shared/Resouces/SeniorityList";

const index = () => {
  return (
    <div>
      <Pagination
        data={SeniorityList}
        columns={ColumsData}
        title="Seniority List"
      />
    </div>
  );
};

export default index;
