import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { NationalAwardees } from "../../../Shared/NationalAwardees";
import ProfileCard from "../../../Components/Profile Card/ProfileCard";

const index = () => {
  return (
    <>
      <ProfileCard
        title={`Our National Awardees 2022`}
        Profiles={NationalAwardees}
      />
    </>
  );
};

export default index;
