import React from "react";

interface StatusProps {
  status: string;
}

const Status: React.FC<StatusProps> = ({ status }) => (
  <div className={`status ${status}`}>
    {status === "online" ? "Đang hoạt động" : "Offline"}
  </div>
);

export default Status;
