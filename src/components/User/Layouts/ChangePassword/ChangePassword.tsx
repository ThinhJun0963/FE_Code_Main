import React from 'react'
import style from "./ChangePasssword.module.scss";
import SimpleButton from '../../Buttons/SimpleButton';

interface FormProperties {
  callbacks: () => void;
}

const ChangePassword: React.FC<FormProperties> = ({callbacks}: FormProperties) => {
  return (
    <div className={style.PasswordForm}>

        <h3 className={style.FormHeader}>Thay đổi mật khẩu</h3>

        <form id='passwordChange' className={style.SimpleForm} method='POST' action='#'>

            <label className={`${style.FormRow} ${style.Column}`}>
              Mật khẩu mới
              <input id='newPassword' type='password' className={style.InputField}/>
            </label>

            <label className={`${style.FormRow} ${style.Column}`}>               
              Nhập lại khẩu mới
              <input id='newPasswordRetyped' type='password' className={style.InputField}/>
            </label>
            
            <SimpleButton buttonType='submit' form='passwordChange' message="Cập nhật mật khẩu" callback={callbacks}/>
        </form>
    </div>
  )
}

export default ChangePassword;
