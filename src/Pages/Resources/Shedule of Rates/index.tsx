import { Pagination } from "../../../Components";
import { SOR, ColumsData } from "../../../Shared/Resouces/SheduleOfRates";

const index = () => {
  return (
    <div>
      <Pagination data={SOR} columns={ColumsData} title="Shedule of Rates" />
    </div>
  );
};

export default index;
