import { useState } from "react"
import { MdCloudUpload, MdDelete } from "react-icons/md"
import { AiFillFileImage } from "react-icons/ai"


const CertificationForm = () => {
    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState("No selected file");

    return (
        <div id="drop-area">
            <label>
                <input id="input-file" type="file" accept="*" hidden />
            </label>
            <div id="img-view">
                <div className="icon-container">
                    <MdCloudUpload size={80}/>
                    <p>Drag and drop file here</p>
                </div>
            </div>
        </div>
    )
}

export default CertificationForm