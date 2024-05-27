import React, { Dispatch, SetStateAction, useEffect, useLayoutEffect, useState } from 'react';
import style from './UserAccount.module.scss'
import ImagePlaceholder from '../../../assets/img_placeholder.jpg'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'
import { default_data, Payment, UserInfo } from '../UserDefinition';
import StatusBadge from '../../../components/User/StatusBadge/StatusBadge';
import UserProfileNav from '../../../components/User/Layouts/UserProfileNav';
import SimpleButton from '../../../components/User/Buttons/SimpleButton';
import ChangePassword from '../../../components/User/Layouts/ChangePassword/ChangePassword';

// ==================================
//
//     PLAIN TYPESCRIPT IS HARD...
//
// ==================================

//# Default data and functions

// Mocking data
const template_data: UserInfo = 
{
    "user_id": "The Null Pointer Exception",
    "username": "Collin Phan",
    "name": "Charles Vander Lin",
    "phone": "0933015921",
    "gender": "Nam",
    "birthdate": "1945-04-30",
    "ethnic": "Kinh",
    "email": "example@gmail.com",
    "ssc": "03968230692155",
    "insurance": null,
    "profile_image": null,
    "status": {state_number: 4, message:"Đã xác minh"},
    "payment_info": [
      {creditInfo: "Momo", creditValue: "90341-*****-*****", creditValid: {state_number: 2, message: "Chưa xác minh"}}, 
      {creditInfo: "VNPay", creditValue: "903-***-***", creditValid: {state_number: 3, message: "Đang xử lí"}},  
      {creditInfo: "Paypal", creditValue: "*****-*****-*****", creditValid: {state_number: 4, message: "Đã xác minh"}}, ],
}

const UserAccount: React.FC = () => {
  // Sử dụng useState để lưu thông tin.
  const [userData, setUserData]: [UserInfo, Dispatch<SetStateAction<UserInfo>>] = useState(default_data);

  const [disabled, setDisabled]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(true);

  // # Function declaration.

  // Hàm lấy thông tin
  const fetchUserData = () => {
    try {
      // Let's say ... I do some backend fetching here
      // axios.get(`http://localhost:7163/api/EndPoint`)

      // And return the fetch result.
      setUserData(template_data);
    }
    catch(e: unknown){
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

  //TODO: Tạo NavBar sau khi đăng nhập.

  // Tạo hàng
  const payment_method= (userData.payment_info != null) ? userData.payment_info.map((v: Payment, i: number) => {
    return (
      <tr key={i.toString()} className={style.TableRow}>
        <td key={`row_${i}_label`} className={`${style.TableData} ${style.FieldName}`}>{v.creditValue}</td>
        <td key={`row_${i}_value`} className={`${style.TableData} ${style.FieldName}`}>{v.creditInfo ?? "--"}</td>
        <td key={`row_${i}_status`} className={`${style.TableData} ${style.FieldName}`}>{<StatusBadge  state_number={v.creditValid?.state_number ?? 0} message={v.creditValid?.message ?? "Không xác định"} /> ?? "--"}</td>
      </tr>
  )}) : null;

  // Hàm cập nhật thông tin
  const updateUserData = (event: React.FormEvent<HTMLInputElement>) => {
    if (event.currentTarget.value in ["--", "", null]) {
      //@ts-expect-error "It's normal in Javascript and it won't be null you dipshit." - Top 10 last sentences.
      event.currentTarget.value = userData[event.currentTarget.name];
    }
      setUserData({... userData, [event.currentTarget.name] :event.currentTarget.value})
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

  if (userData.status) {
  return (
    <>
      <Header />
      <main className={style.FlexContainer}>
        <div className={style.MenuSection}>
            <UserProfileNav {... default_config}/>
        </div>

        <div className={style.MainSection}>

          <h2 className={style.MediumHeader}>Tài khoản</h2>

          <div className={style.InfoBoard}>

              <div className={style.ProfileInfo}>

                <div className={style.ProfileImagePlaceholder}>
                  <span className={style.ProfileImage}>
                    <img src={userData.profile_image ?? ImagePlaceholder} onClick={changePicture} alt="lmao"/>
                  </span>
                  <span className={style.ProfileGeneralInfo}>
                    <h2>{userData.username ?? "--"}</h2>
                    <p className={style.PatientCode}>Mã bệnh nhân: {userData.user_id ?? "--"}</p>
                    <StatusBadge state_number={userData.status?.state_number ?? 0} message={userData.status?.message ?? "Không xác định"}/>
                  </span>
                </div>

                <h3 className={style.SectionHeader}>Thông tin chung</h3>  
                <table className={style.InformationTable}>
                  <tbody>

                    <tr className={style.TableRow}>
                      <td className={`${style.TableData} ${style.FieldName}`}>Tên đăng nhập</td>
                      <td className={`${style.TableData} ${style.FieldValue}`}>
                        <input type='text' name='username' placeholder='vd: NguyenQuang6202' disabled={disabled} onBlur={updateUserData} defaultValue={userData.username == null ? "--" : userData.username}/>
                      </td>
                    </tr>

                    <tr className={style.TableRow}>
                      <td className={`${style.TableData} ${style.FieldName}`}>Số điện thoại</td>
                      <td className={`${style.TableData} ${style.FieldValue}`}>
                        <input  type='text' name='phone' placeholder='vd: 090xxxxxxx' disabled={disabled} onBlur={updateUserData} defaultValue={userData.phone == null ? "--" : userData.phone}/>
                      </td>
                    </tr>
                    <tr className={style.TableRow}>
                      <td className={`${style.TableData} ${style.FieldName}`}>Email</td>
                      <td className={`${style.TableData} ${style.FieldValue}`}>
                        <input type='text' name="email" placeholder='vd: example@gmail.com' disabled={disabled} onBlur={updateUserData} defaultValue={userData.email == null ? "--" : userData.email}/>
                      </td>
                    </tr>

                    <tr className={style.TableRow}>
                      <td className={`${style.TableData} ${style.FieldName}`}>Căn cước công dân</td>
                      <td className={`${style.TableData} ${style.FieldValue}`}>
                        <input type='text' name="ssc" placeholder='vd: 1043XXXXXXXX' disabled={disabled} onBlur={updateUserData} defaultValue={userData.ssc == null ? "--" : userData.ssc}/>
                      </td>
                    </tr>

                    <tr className={style.TableRow}>
                      <td className={`${style.TableData} ${style.FieldName}`}>Mã bảo hiểm y tế</td>
                      <td className={`${style.TableData} ${style.FieldValue}`}>
                        <input type='text' name='insurance' placeholder='vd: AN10XXXXXXXX' disabled={disabled} onBlur={updateUserData} defaultValue={userData.insurance == null ? "--" : userData.insurance}/>
                      </td>
                    </tr>

                    <tr className={style.TableRow}>
                      <td className={`${style.TableData} ${style.FieldName}`}>Họ và tên</td>
                      <td className={`${style.TableData} ${style.FieldValue}`}>
                        <input  type='text' name='name' placeholder='vd: Trần Văn A' disabled={disabled} onBlur={updateUserData} defaultValue={userData.name == null ? "--" : userData.name}/></td>
                    </tr>

                    <tr className={style.TableRow}>
                      <td className={`${style.TableData} ${style.FieldName}`}>Ngày sinh</td>
                      <td className={`${style.TableData} ${style.FieldValue}`}>
                        <input type='date' name='birthdate' placeholder={Date.now().toString()} disabled={disabled} onBlur={updateUserData} defaultValue={userData.birthdate == null ? "": userData.birthdate }/>
                      </td>
                    </tr>

                    <tr className={style.TableRow}>
                      <td className={`${style.TableData} ${style.FieldName}`}>Giới tính</td>
                      <td className={`${style.TableData} ${style.FieldValue}`}>
                        <fieldset disabled={disabled}>
                          <label><input type="radio" name='gender' placeholder='Nam' value="Nam" onChange={updateUserData} checked={userData.gender === "Nam"} /> Nam</label>
                          <label><input type="radio" name='gender' placeholder='Nam' value="Nữ" onChange={updateUserData} checked={userData.gender === "Nữ"}/> Nữ</label>
                          <label><input type="radio" name='gender' placeholder='Nam' value="" onChange={updateUserData} checked={userData.gender === ""}/> Khác</label>
                        </fieldset>
                      </td>
                    </tr>

                    <tr className={style.TableRow}>
                      <td className={`${style.TableData} ${style.FieldName}`}>Dân tộc</td>
                      <td className={`${style.TableData} ${style.FieldValue}`}>
                        <input type='text' name='ethnic' placeholder='Dân tộc' disabled={disabled} onBlur={updateUserData} defaultValue={userData.ethnic == null ? "--" : userData.ethnic} />
                      </td>
                    </tr>

                  </tbody>
                </table>
                {!disabled && <SimpleButton buttonType='button' message='Hủy cập nhật' callback={() => {setDisabled((disabled) => ! disabled)}} />}
                {disabled && <SimpleButton buttonType='button' message='Cập nhật thông tin tài khoản' callback={() => {setDisabled(false)}} />}
              </div>
              <hr className={style.Line} />
              <div className={style.PaymentInfo}>
                <table>
                  <thead>
                    <tr>
                        <td>Số tài khoản</td>
                        <td>Nhà cung cấp</td>
                        <td>Tình trạng</td>
                    </tr>
                  </thead>
                  <tbody>
                    {payment_method}
                  </tbody>
                </table>
                <SimpleButton buttonType='button' message='Cập nhật thông tin thanh toán' />
              </div>
              <hr className={style.Line} />
              <ChangePassword callbacks={() => {}} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )}
  else {
    return null;
  }
}

export default UserAccount
