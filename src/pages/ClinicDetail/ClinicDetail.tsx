import UserLayout from "../../components/UserLayout";
import ClinicDetailContent from "./components/ClinicDetailContent";
import ChatPopUp from "../HomePage/components/ChatPopUp/ChatPopUp";

const ClinicDetail = () => {
  return (
    <UserLayout>
      <ClinicDetailContent />
      <ChatPopUp />
    </UserLayout>
  );
};

export default ClinicDetail;
