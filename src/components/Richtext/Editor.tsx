import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./Editor.css"; // Import CSS file for styling

interface EditorProps {
  onChange: (data: string) => void;
  onSend: () => void;
  onClose: () => void;
}

const Editor: React.FC<EditorProps> = ({ onChange, onSend, onClose }) => {
  const [editorData, setEditorData] = useState<string>("");

  useEffect(() => {
    onChange(editorData);
  }, [editorData, onChange]);

  return (
    <div className="editor-container">
      <CKEditor
        editor={ClassicEditor}
        data={editorData}
        onChange={(event, editor) => {
          const data = editor.getData();
          setEditorData(data);
        }}
      />
      <div className="button-container">
        <button className="send-button" onClick={onSend}>
          Send
        </button>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Editor;
