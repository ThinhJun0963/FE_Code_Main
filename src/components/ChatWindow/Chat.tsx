// src/ChatWindow.tsx
import React from "react";
import "./Chat.css";

interface ChatWindowProps {
  onClose: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ onClose }) => {
  return (
    <div className="chat-window">
      <div className="chat-header">
        <span>Chat</span>
        <button className="close-button" onClick={onClose}>
          x
        </button>
      </div>
      <div className="chat-content">
        {/* Nội dung chat sẽ nằm ở đây */}
        <p>Chào! Làm thế nào tôi có thể giúp bạn?</p>
        <p>Chúng tôi sẽ trả lời sau giây lát</p>
      </div>
      <div className="chat-footer">
        <input type="text" placeholder="Nhập tin nhắn..." />
        <button>Gửi</button>
      </div>
    </div>
  );
};

export default ChatWindow;
