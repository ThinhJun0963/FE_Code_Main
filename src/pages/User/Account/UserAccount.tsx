import React, { Dispatch, SetStateAction, useEffect, useLayoutEffect, useState } from 'react';
import style from './UserAccount.module.scss'
import ImagePlaceholder from '../../../assets/img_placeholder.jpg'
import { default_data, UserInfo } from '../../../components/User/Interfaces/UserDefinition';
import StatusBadge from '../../../components/User/StatusBadge/StatusBadge';
import UserProfileNav from '../../../components/User/Layouts/ProfileNavigation/UserProfileNav';
import SimpleButton from '../../../components/User/Components/Buttons/SimpleButton';
import ChangePassword from '../../../components/User/Layouts/ChangePassword/ChangePassword';
import axios from 'axios';
import { connection_path } from '../../../constants/developments';

// ==================================
//
//     PLAIN TYPESCRIPT IS HARD...
//
// ==================================

//# Default data and functions

const UserAccount: React.FC = () => {
  // Sử dụng useState để lưu thông tin.
  const [userData, setUserData]: [UserInfo, Dispatch<SetStateAction<UserInfo>>] = useState(default_data);

  const [disabled, setDisabled]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(true);

  // # Function declaration.

  // Hàm lấy thông tin
  const fetchUserData = () => {
    try {
      // Let's say ... I do some backend fetching here

      const url = connection_path.base_url + connection_path.user.user;

      axios.get(url, { headers: { Authorization: localStorage.getItem("accessToken") } }).then(response => {
        // And return the fetch result.
        setUserData(response.data);
      });
    }
    catch (e: unknown) {
      if (typeof e === "string") {
        console.log(e.toUpperCase())
      } else if (e instanceof Error) {
        console.log(e.message)
      }
      setUserData(default_data);
    }
  }

  // Config cho nút tài khoản
  //const buttonConfig: ButtonProperty = {href:"/", message: "Đăng xuất", buttonType:"button", };

  // Tạo hàng


  // Hàm cập nhật thông tin
  const updateUserData = (event: React.FormEvent<HTMLInputElement>) => {
    if (event.currentTarget.value in ["--", "", null]) {
      //@ts-expect-error "It's normal in Javascript and it won't be null you dipshit." - Top 10 last sentences.
      event.currentTarget.value = userData[event.currentTarget.name];
    }
    setUserData({ ...userData, [event.currentTarget.name]: event.currentTarget.value })
  };

  // Hàm hiện popup thay đổi ảnh
  const changePicture = () => {
    // [Vẫn đang tìm hiểu] 
  }

  // # Rendering settings
  useLayoutEffect(() => {
    fetchUserData();

  }, [])

  useEffect(() => {
    console.log("I just re-rendered!");
  }, [userData])

  const default_config = {
    links: [
      {
        linkName: "Lịch khám",
        linkValue: "#",
      },
      {
        linkName: "Thanh toán",
        linkValue: "/user/payment",
      },
      {
        linkName: "Hồ sơ",
        linkValue: "/user/profile",
      },
      {
        linkName: "Tài khoản",
        linkValue: "/user/account"
      },
    ],
    active: 4
  }

  if (userData != null) {
    return (
      <>
        <main className={style.FlexContainer}>
          <div className={style.MenuSection}>
            <UserProfileNav {...default_config} />
          </div>

          <div className={style.MainSection}>

            <h2 className={style.MediumHeader}>Tài khoản</h2>

            <div className={style.InfoBoard}>

              <div className={style.ProfileInfo}>

                <div className={style.ProfileImagePlaceholder}>
                  <span className={style.ProfileImage}>
                    <img src={userData.profilePicture ?? ImagePlaceholder} onClick={changePicture} alt="lmao" />
                  </span>
                  <span className={style.ProfileGeneralInfo}>
                    <h2>{userData.username ?? "--"}</h2>
                    <p className={style.PatientCode}>Mã bệnh nhân: {userData.id ?? "--"}</p>
                    <StatusBadge state_number={userData.status?.state_number ?? 0} message={userData.status?.message ?? "Không xác định"} />
                  </span>
                </div>

                <h3 className={style.SectionHeader}>Thông tin chung</h3>
                <table className={style.InformationTable}>
                  <tbody>

                    <tr className={style.TableRow}>
                      <td className={`${style.TableData} ${style.FieldName}`}>Tên đăng nhập</td>
                      <td className={`${style.TableData} ${style.FieldValue}`}>
                        <input type='text' name='username' placeholder='vd: NguyenQuang6202' disabled={disabled} onBlur={updateUserData} defaultValue={userData.username == null ? "--" : userData.username} />
                      </td>
                    </tr>

                    <tr className={style.TableRow}>
                      <td className={`${style.TableData} ${style.FieldName}`}>Số điện thoại</td>
                      <td className={`${style.TableData} ${style.FieldValue}`}>
                        <input type='text' name='phone' placeholder='vd: 090xxxxxxx' disabled={disabled} onBlur={updateUserData} defaultValue={userData.phone == null ? "--" : userData.phone} />
                      </td>
                    </tr>
                    <tr className={style.TableRow}>
                      <td className={`${style.TableData} ${style.FieldName}`}>Email</td>
                      <td className={`${style.TableData} ${style.FieldValue}`}>
                        <input type='text' name="email" placeholder='vd: example@gmail.com' disabled={disabled} onBlur={updateUserData} defaultValue={userData.email == null ? "--" : userData.email} />
                      </td>
                    </tr>


                    <tr className={style.TableRow}>
                      <td className={`${style.TableData} ${style.FieldName}`}>Mã bảo hiểm y tế</td>
                      <td className={`${style.TableData} ${style.FieldValue}`}>
                        <input type='text' name='insurance' placeholder='vd: AN10XXXXXXXX' disabled={disabled} onBlur={updateUserData} defaultValue={userData.insurance == null ? "--" : userData.insurance} />
                      </td>
                    </tr>

                    <tr className={style.TableRow}>
                      <td className={`${style.TableData} ${style.FieldName}`}>Họ và tên</td>
                      <td className={`${style.TableData} ${style.FieldValue}`}>
                        <input type='text' name='name' placeholder='vd: Trần Văn A' disabled={disabled} onBlur={updateUserData} defaultValue={userData.fullname == null ? "--" : userData.fullname} /></td>
                    </tr>

                    <tr className={style.TableRow}>
                      <td className={`${style.TableData} ${style.FieldName}`}>Ngày sinh</td>
                      <td className={`${style.TableData} ${style.FieldValue}`}>
                        <input type='date' name='birthdate' placeholder={Date.now().toString()} disabled={disabled} onBlur={updateUserData} defaultValue={userData.birthdate == null ? "" : userData.birthdate} />
                      </td>
                    </tr>

                    <tr className={style.TableRow}>
                      <td className={`${style.TableData} ${style.FieldName}`}>Giới tính</td>
                      <td className={`${style.TableData} ${style.FieldValue}`}>
                        <fieldset disabled={disabled}>
                          <label><input type="radio" name='gender' placeholder='Nam' value="Nam" onChange={updateUserData} checked={userData.gender === "Nam"} /> Nam</label>
                          <label><input type="radio" name='gender' placeholder='Nam' value="Nữ" onChange={updateUserData} checked={userData.gender === "Nữ"} /> Nữ</label>
                          <label><input type="radio" name='gender' placeholder='Nam' value="" onChange={updateUserData} checked={userData.gender === ""} /> Khác</label>
                        </fieldset>
                      </td>
                    </tr>

                  </tbody>
                </table>
                {!disabled && <SimpleButton buttonType='button' message='Hoàn tất' callback={() => { setDisabled((disabled) => !disabled) }} />}
                {disabled && <SimpleButton buttonType='button' message='Cập nhật thông tin tài khoản' callback={() => { setDisabled(false) }} />}
              </div>

              <hr className={style.Line} />
              <ChangePassword username={userData.username} callbacks={() => { }} />
            </div>
          </div>
        </main>
      </>
    )
  }
  else {
    return null;
  }
}

export default UserAccount
