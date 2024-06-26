// import './UserProfile.scss'
// import { useNavigate } from 'react-router-dom';
// import ImagePlaceholder from '../../../assets/img_placeholder.jpg';
// import { default_data, UserInfo } from '../../../components/User/Interfaces/UserDefinition';
// import SimpleButton from '../../../components/User/Components/Buttons/SimpleButton';
// import { googleLogout } from '@react-oauth/google';
// import { Dispatch, SetStateAction, useEffect, useState } from 'react';
// import axios from 'axios';
// import { connection_path } from '../../../constants/developments';
// import { getDownloadURL, ref } from 'firebase/storage';
// import firebase from 'firebase/app';
// import 'firebase/storage';
// import upload from '../../../utils/UploadFireBase';


// const UserProfile: React.FC = () => {

//   // đăng nhập thành công thì không cần thằng google nữa nên sign out luôn.
//   googleLogout()

//   // Dữ liệu người dùng
//   const [data, setData]: [UserInfo | null, Dispatch<SetStateAction<UserInfo>>] = useState(default_data);

//   type AvatarState = {
//     file: File | null;
//     url: string;
//   };

//   const [avatar, setAvatar] = useState<AvatarState>({
//     file: null,
//     url: ""
//   });

//   const handleAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files.length > 0) {
//       setAvatar({
//         file: e.target.files[0],
//         url: URL.createObjectURL(e.target.files[0])
//       });
//     }
//   };

  
//   const uploadImage = async (file: File | null) => {
//     if (file) {
//       try {
//         await upload(file);
//       } catch (error) {
//         console.error("Failed to upload image:", error);
//       }
//     } else {
//       console.error("No file to upload");
//     }
//   };

//   uploadImage(avatar.file);


//   // TODO: Tạo hàm lấy dữ liệu người dùng từ database.
//   const fetchUserData = () => {


//     const url = connection_path.base_url + connection_path.user.customer + `/${localStorage.getItem('id')}`;

//     axios.get(url, { headers: { Authorization: localStorage.getItem("accessToken") } }).then(response => setData(response.data));

    

//   }

//   useEffect(() => {
//     fetchUserData();
//   }, []);

//   // Navigational
//   const navigator = useNavigate();
//   const doNavigate = (dest: string) => { navigator(dest) }

//   useEffect(() => {

//     fetchUserData();
//   }, [])

//   return (
//     <>
//       <main className='main-content-flex-container'>
//         <div className='main-content-left-container'>
//           <ul>
//             <li className='profile_nav_link'><p className='profile_nav_text' onClick={() => doNavigate('/user/schedule')}>Lịch khám</p></li>
//             <li className='profile_nav_link'><p className='profile_nav_text' onClick={() => doNavigate('/user/payment')}>Thanh toán</p></li>
//             <li className='profile_nav_link active'><p className='profile_nav_text' onClick={() => doNavigate('#')}>Hồ sơ</p></li>
//             <li className='profile_nav_link'><p className='profile_nav_text' onClick={() => doNavigate('/user/account')}>Tài khoản</p></li>
//           </ul>
//         </div>

//         <div className='main-content-right-container'>
//           <h1 className='main-content-middle-title-heading'>Hồ sơ</h1>
//           <div className='main-content-container-box'>

//             <div className='main-content-container-box-row profile-general-align-left'>
             
//                 <label htmlFor="file" className="user-profile-image-placeholder">
//                   <img src={avatar.url || ImagePlaceholder} alt="" /> 
//                   <p> Upload an image</p>
//                 </label>
//                 <input type="file" id="file" style={{ display: "none" }} onChange={handleAvatar} />
             
             
//               <span className='user-profile-general-info'>
//                 <h2>{data.username}</h2>
//                 <p>Mã bệnh nhân: {data.id}</p>
//               </span>
//             </div>

//             <div className='main-content-container-box-row'>
//               <h2>Thông tin cơ bản</h2>
//               <table>
//                 <tbody>
//                   <tr>
//                     <td className='table-field-name'>Họ và tên</td>
//                     <td className="table-field-value">{data.fullname ?? "--"}</td>
//                   </tr>
//                   <tr>
//                     <td className='table-field-name'>Số điện thoại</td>
//                     <td className="table-field-value">{data.phone ?? "--"}</td>
//                   </tr>
//                   <tr>
//                     <td className='table-field-name'>Giới tính</td>
//                     <td className="table-field-value">{data.gender ?? "--"}</td>
//                   </tr>
//                   <tr>
//                     <td className='table-field-name'>Ngày sinh</td>
//                     <td className="table-field-value">{data.birthdate ?? "--"}</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//             <div className='main-content-container-box-row'>
//               <h2>Thông tin bổ sung</h2>
//               <table>
//                 <tbody>
//                   <tr>
//                     <td className='table-field-name'>Mã BHYT</td>
//                     <td className="table-field-value">{data.insurance ?? "--"}</td>
//                   </tr>
//                   <tr>
//                     <td className='table-field-name'>Email</td>
//                     <td className="table-field-value">{data.email ?? "--"}</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//             <div className='main-content-container-box-row'>
//               <SimpleButton buttonType='button' href='/user/account' message='Chỉnh sửa thông tin cá nhân' />
//             </div>
//           </div>
//         </div>
//       </main>
//     </>
//   )
// }

// export default UserProfile
