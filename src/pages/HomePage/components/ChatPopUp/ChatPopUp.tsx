// src/App.tsx
import React, { useState } from "react";
import FloatingButton from "../../../../components/FloatingButton/FloatingButton";
import ChatWindow from "../../../../components/ChatWindow/Chat";

const ChatPopUp: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="ChatPopUp">
      <FloatingButton onClick={toggleChat} />
      {isChatOpen && <ChatWindow onClose={toggleChat} />}
    </div>
  );
};

export default ChatPopUp;
