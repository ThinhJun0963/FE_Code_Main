import React, { useState } from "react";
import MyModal from "../../components/ModalPopUp/ModalPopUp.tsx";
import Editor from "../../components/Richtext/Editor.tsx";

const PopUp: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editorContent, setEditorContent] = useState("");

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleEditorChange = (data: string) => {
    setEditorContent(data);
  };

  const handleSend = () => {
    console.log("Content to send:", editorContent);
    // Add your logic to send the content
    // Close the modal after sending
    closeModal();
  };

  return (
    <div>
      <button className="button" onClick={openModal}>
        
      </button>
      <MyModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h2>Nhập thông tin chat ở đây</h2>
        <Editor
          onChange={handleEditorChange}
          onSend={handleSend}
          onClose={closeModal}
        />
      </MyModal>
    </div>
  );
};

export default PopUp;
