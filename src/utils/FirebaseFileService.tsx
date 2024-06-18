// import React, { ChangeEvent } from 'react'
// import storage, { imageStorage } from '../../firebase'
// import {v4} from 'uuid';
// import { getDownloadURL, listAll, ref, uploadBytes, UploadResult } from 'firebase/storage';

// const FirebaseFileService: React.FC = () => {

//     // Tạo một số biến lưu trữ
//     const [file, setFile] = React.useState(null);

//     const imageLinks: string[] = [];

//     const [images, setImages]: [string[], React.Dispatch<string[]>] = React.useState(imageLinks);

//     // Hàm để có thể upload file lên firebase
//     const uploadImage = () => {
//         if (file == null)  return;

//         const imageRef = ref(storage, `pictures/ ${v4()}`);

//         uploadBytes(imageRef, file).then((result: UploadResult) => {
//             alert(`Đường dẫn tới hình ảnh: ${result.ref.fullPath}`)
//         }).catch( (reason) => {
//             alert(reason);
//         });
//     }


//     //      =========== Hướng dẫn sử dụng trước khi tiếp tục =============
//     //  +   Lưu hình ảnh lên storage bằng cách sử dụng ref (reference) tới nơi cần lưu trữ bằng cách sử dụng storage
//     //
//     //  lấy được từ app (project trên firebase) trong file firebase.ts rồi ném ảnh lên bằng lệnh uploadBytes([địa điểm lưu trữ], [file cần lưu trữ]).
//     //
//     //  +    Thường sẽ tốn từ 1 tới 2 giây trước khi upload thành công nên phải có một callback hook (ví dụ ở đây là alert([Đường dẫn tới hình ảnh]))
//     //
//     //  để có thể xử lí (cập nhật màn hình) khi thành công. Trong trường hợp thất bại cũng cần có một callback hook (ví dụ ở đây là alert([lí do thất bại])).
//     //
//     //  +   Cách để có thể lấy hình ảnh trong firebase chính là lấy tất cả các file trong imageStorage, lặp qua hết và lấy cái mình cần rồi thoát vòng lặp 
//     //
//     //  hoặc đơn giản hơn là lấy đúng đường dẫn tới tập tin hình ảnh ban đầu lúc tải lên firebase.
//     //
//     // +    Khi tải hình ảnh lên Firebase cũng cần nên thông báo vị trí của hình ảnh về phía Backend để lưu thông tin (sau này lấy ảnh đỡ phải dùng vòng lặp).
//     //      ===============================================================

    
//     //! Lưu ý: Giới hạn tối đa 1GB/ngày nên đừng để nó rerender liên tục không là chưa hết ngày đã hết giới hạn. =))
    
//     //# ví dụ về việc load ảnh mỗi lần vào trang.
//     //# Nếu hình ảnh render 2 lần thì là do thằng React ở chế độ StrictMode sẽ render 2 lần khi truy cập.
//     React.useEffect( () => {
//         listAll(imageStorage).then( (response) => {
//             response.items.forEach( (item) => {
//                 console.log(item);
//                 getDownloadURL(item).then( (url: string) => {
//                     setImages( (prev) => [...prev, url]); // Typescript shenanigans.
//                 })
//             });
//         })
//     }, []);

//     return (
//         <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}} className='FirebaseServiceTestWraper'>
//             <label>
//                 File upload: <input accept='.png,.jpg' type='file' onChange={((event: ChangeEvent<HTMLInputElement>) => {setFile(event.target.files[0])})}/> {/* Even more typescript shenanigans. */}
//             </label>
//             <button onClick={uploadImage}>Upload Image</button>
//             {images.map((link: string, id) => {return <img width="20%" key={id} src={link} alt="Image from firebase" /> })}
//         </div>
//     )
// }

// export default FirebaseFileService;
