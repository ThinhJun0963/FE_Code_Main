import React, { Dispatch, SetStateAction, useState } from 'react'
import styles from './Profile.module.css'
import SimpleButton from '../../../../components/User/Components/Buttons/SimpleButton';
import { default_data, UserInfo } from '../../../../components/User/Interfaces/UserDefinition';


const Profile = () => {

    const [data, setData]: [UserInfo | null, Dispatch<SetStateAction<UserInfo>>] = useState(default_data);

    type AvatarState = {
        file: File | null;
        url: string;
    };
    const [avatar, setAvatar] = useState<AvatarState>({
        file: null,
        url: ""
    });


    const handleAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            });
        }
    };

    return (
        <div className={styles.mainContentRightContainer}>
            <h1 className={styles.mainContentMiddleTitleHeading}>Hồ sơ</h1>
            <div className={styles.mainContentContainerBox}>
                <div className={styles.mainContentContainerBoxRowProfileGeneralAlignLeft}>
                    <label htmlFor="file" className={styles.userProfileImagePlaceholder}>
                        <img src="../../../../public/placeholder.png" alt="" />
                        <p> Upload an image</p>
                    </label>
                    <input type="file" id="file" style={{ display: "none" }} onChange={handleAvatar} />

                    <span className='user-profile-general-info'>
                        <h2>{data.username}</h2>
                        <p>Mã bệnh nhân: {data.id}</p>
                    </span>
                </div>


                <div className={styles.MainContentContainerBoxRow}>
                    <h2>Thông tin cơ bản</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td className={styles.tableFieldName} >Họ và tên</td>
                                <td className={styles.tableFieldValue}>{data.fullname ?? "--"}</td>
                            </tr>
                            <tr>
                                <td className={styles.tableFieldName} >Số điện thoại</td>
                                <td className={styles.tableFieldValue} >{data.phone ?? "--"}</td>
                            </tr>
                            <tr>
                                <td className={styles.tableFieldName} >Giới tính</td>
                                <td className={styles.tableFieldValue} >{data.gender ?? "--"}</td>
                            </tr>
                            <tr>
                                <td className={styles.tableFieldName}>Ngày sinh</td>
                                <td className={styles.tableFieldValue}>{data.birthdate ?? "--"}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.MainContentContainerBoxRow}>
                    <h2>Thông tin bổ sung</h2>
                    <table>
                        <tbody>
                            <tr>
                                <td className={styles.tableFieldName} >Mã BHYT</td>
                                <td className={styles.tableFieldValue} >{data.insurance ?? "--"}</td>
                            </tr>
                            <tr>
                                <td className={styles.tableFieldName} >Email</td>
                                <td className={styles.tableFieldValue}>{data.email ?? "--"}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className={styles.MainContentContainerBoxRow}>
                    <SimpleButton buttonType='button' href='#' message='Chỉnh sửa thông tin cá nhân' />
                </div>
            </div>
        </div>
    )
}

export default Profile