import styles from './UserAccount.module.css'
import { default_data, UserInfo } from '../../../../utils/interfaces/User/UserDefinition';
import { Dispatch, SetStateAction, useLayoutEffect, useState } from 'react';
import SimpleButton from '../../../../components/User/Components/Buttons/SimpleButton';
import StatusBadge from '../../../../components/User/StatusBadge/StatusBadge';
import ImagePlaceholder from '../../../../assets/img_placeholder.jpg'
import { connection_path } from '../../../../constants/developments';
import ChangePassword from '../../../../components/User/Layouts/ChangePassword/ChangePassword';
import axios from 'axios';

const UserAccount = () => {
    const [userData, setUserData]: [UserInfo, Dispatch<SetStateAction<UserInfo>>] = useState(default_data);

    const [disabled, setDisabled]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(true);

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

    const updateUserData = (event: React.FormEvent<HTMLInputElement>) => {
        if (event.currentTarget.value in ["--", "", null]) {
            //@ts-expect-error "It's normal in Javascript and it won't be null you dipshit." - Top 10 last sentences.
            event.currentTarget.value = userData[event.currentTarget.name];
        }
        setUserData({ ...userData, [event.currentTarget.name]: event.currentTarget.value })
    };

    const changePicture = () => {
        // [Vẫn đang tìm hiểu] 
    }


    useLayoutEffect(() => {
        fetchUserData();
    }, [])
    
    return (
        <div className={styles.mainContentRightContainer}>
            <div className={styles.MainSection}>

                <h2 className={styles.MediumHeader}>Tài khoản</h2>

                <div className={styles.InfoBoard}>

                    <div className={styles.ProfileInfo}>

                        <div className={styles.ProfileImagePlaceholder}>
                            <span className={styles.ProfileImage}>
                                <img src={userData.profilePicture ?? ImagePlaceholder} onClick={changePicture} alt="lmao" />
                            </span>
                            <span className={styles.ProfileGeneralInfo}>
                                <h2>{userData.username ?? "--"}</h2>
                                <p className={styles.PatientCode}>Mã bệnh nhân: {userData.id ?? "--"}</p>
                                <StatusBadge state_number={userData.status?.state_number ?? 0} message={userData.status?.message ?? "Không xác định"} />
                            </span>
                        </div>

                        <h3 className={styles.SectionHeader}>Thông tin chung</h3>
                        <table className={styles.InformationTable}>
                            <tbody>
                                <tr className={styles.TableRow}>
                                    <td className={`${styles.TableData} ${styles.FieldName}`}>Tên đăng nhập</td>
                                    <td className={`${styles.TableData} ${styles.FieldValue}`}>
                                        <input type='text' name='username' placeholder='vd: NguyenQuang6202' disabled={disabled} onBlur={updateUserData} defaultValue={userData.username == null ? "--" : userData.username} />
                                    </td>
                                </tr>

                                <tr className={styles.TableRow}>
                                    <td className={`${styles.TableData} ${styles.FieldName}`}>Số điện thoại</td>
                                    <td className={`${styles.TableData} ${styles.FieldValue}`}>
                                        <input type='text' name='phone' placeholder='vd: 090xxxxxxx' disabled={disabled} onBlur={updateUserData} defaultValue={userData.phone == null ? "--" : userData.phone} />
                                    </td>
                                </tr>
                                <tr className={styles.TableRow}>
                                    <td className={`${styles.TableData} ${styles.FieldName}`}>Email</td>
                                    <td className={`${styles.TableData} ${styles.FieldValue}`}>
                                        <input type='text' name="email" placeholder='vd: example@gmail.com' disabled={disabled} onBlur={updateUserData} defaultValue={userData.email == null ? "--" : userData.email} />
                                    </td>
                                </tr>


                                <tr className={styles.TableRow}>
                                    <td className={`${styles.TableData} ${styles.FieldName}`}>Mã bảo hiểm y tế</td>
                                    <td className={`${styles.TableData} ${styles.FieldValue}`}>
                                        <input type='text' name='insurance' placeholder='vd: AN10XXXXXXXX' disabled={disabled} onBlur={updateUserData} defaultValue={userData.insurance == null ? "--" : userData.insurance} />
                                    </td>
                                </tr>

                                <tr className={styles.TableRow}>
                                    <td className={`${styles.TableData} ${styles.FieldName}`}>Họ và tên</td>
                                    <td className={`${styles.TableData} ${styles.FieldValue}`}>
                                        <input type='text' name='name' placeholder='vd: Trần Văn A' disabled={disabled} onBlur={updateUserData} defaultValue={userData.fullname == null ? "--" : userData.fullname} /></td>
                                </tr>

                                <tr className={styles.TableRow}>
                                    <td className={`${styles.TableData} ${styles.FieldName}`}>Ngày sinh</td>
                                    <td className={`${styles.TableData} ${styles.FieldValue}`}>
                                        <input type='date' name='birthdate' placeholder={Date.now().toString()} disabled={disabled} onBlur={updateUserData} defaultValue={userData.birthdate == null ? "" : userData.birthdate} />
                                    </td>
                                </tr>

                                <tr className={styles.TableRow}>
                                    <td className={`${styles.TableData} ${styles.FieldName}`}>Giới tính</td>
                                    <td className={`${styles.TableData} ${styles.FieldValue}`}>
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

                    <hr className={styles.Line} />
                    <ChangePassword username={userData.username} callbacks={() => { }} />
                </div>
            </div>
        </div>
    )
}

export default UserAccount