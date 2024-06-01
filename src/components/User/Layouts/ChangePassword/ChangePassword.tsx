import React from 'react'
import style from "./ChangePasssword.module.scss";
import SimpleButton from '../../Components/Buttons/SimpleButton';
import { ChangePasswordProperties } from '../../Interfaces/FormProperty';



const ChangePassword: React.FC<ChangePasswordProperties> = ({username, callbacks}: ChangePasswordProperties) => {


  return (
    <div className={style.PasswordForm}>

        <h3 className={style.FormHeader}>Thay đổi mật khẩu</h3>

        <form id='passwordChange' className={style.SimpleForm} method='POST' action='#'>

          <input id='username' type='hidden' name='username' value={username} />

          <label className={`${style.FormRow} ${style.Column}`}>
            Mật khẩu mới
            <input id='newPassword' type='password' name='new_pass' autoComplete='new-password' className={style.InputField}/>
          </label>

          <label className={`${style.FormRow} ${style.Column}`}>               
            Nhập lại khẩu mới
            <input id='newPasswordRetyped' type='password' name='retype' autoComplete='new-password' className={style.InputField}/>
          </label>
          
          <SimpleButton buttonType='submit' form='passwordChange' message="Cập nhật mật khẩu" callback={callbacks}/>
        </form>
    </div>
  )
}

export default ChangePassword;
