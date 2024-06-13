import React from "react";
import UserLayout from "../../components/UserLayout";
import Header from '../../components/Header/Header.1';
import Footer from "../../components/Footer/Footer";
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
