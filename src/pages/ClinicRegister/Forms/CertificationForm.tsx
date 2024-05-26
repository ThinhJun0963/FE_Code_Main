import { MdCloudUpload } from "react-icons/md"
import './CertificationForm.css'

const CertificationForm = () => {
    // const [image, setImage] = useState(null);
    // const [fileName, setFileName] = useState("No selected file");

    return (
        <div id="drop-area">
            <label htmlFor="input-file" className="mb-2">Các giấy chứng nhận cần thiết</label>
            <input id="input-file" type="file" accept="*" hidden />
            <div id="img-view">
                <div className="icon-container">
                    <MdCloudUpload size={80} />
                    <p>Drag and drop file here</p>
                </div>
            </div>
        </div>
    )
}

export default CertificationForm