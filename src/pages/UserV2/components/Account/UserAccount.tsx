import styles from './UserAccount.module.css';
import { default_data, UserInfo } from '../../../../utils/interfaces/User/UserDefinition';
import { Dispatch, SetStateAction, useLayoutEffect, useState } from 'react';
import SimpleButton from '../../../../components/User/Components/Buttons/SimpleButton';
import StatusBadge from '../../../../components/User/StatusBadge/StatusBadge';
import ImagePlaceholder from '../../../../assets/img_placeholder.jpg';
import ChangePassword from '../../../../components/User/Layouts/ChangePassword/ChangePassword';
import { getUserData, putUserData } from '../../../../utils/api/UserAccountUtils';


export interface UserInfoToSend {
    id: number;
    username: string;
    passwordHash: string;
    salt: string;
    email: string;
    phone: string;
    fullname: string;
    role: string;
    isActive: boolean;
    isRemoved: boolean;
    joinedDate: string;
    customerId: number;
    birthdate: string;
    sex: string;
    insurance: string;
    dentistId: number;
    clinicId: number;
    isOwner: boolean;
}



const transformUserInfoToSend = (userInfo: UserInfo): UserInfoToSend => {
    return {
        id: Number(userInfo.id),
        username: userInfo.username,
        passwordHash: '',
        salt: '',
        email: userInfo.email || '',
        phone: userInfo.phone || '',
        fullname: userInfo.fullname || '',
        role: 'Customer',
        isActive: true,
        isRemoved: false,
        joinedDate: '',
        customerId: 1,
        birthdate: userInfo.birthdate || '',
        sex: userInfo.sex || '',
        insurance: userInfo.insurance || '',
        dentistId: 0,
        clinicId: 0,
        isOwner: false
    };
};

const transformUserInfoFromSend = (userInfoToSend: UserInfoToSend): UserInfo => {
    return {
        id: userInfoToSend.id.toString(),
        username: userInfoToSend.username,
        fullname: userInfoToSend.fullname || null,
        phone: userInfoToSend.phone || null,
        sex: userInfoToSend.sex || null,
        birthdate: userInfoToSend.birthdate || null,
        email: userInfoToSend.email || null,
        insurance: userInfoToSend.insurance || null,
        profilePicture: null,
        joinedDate: userInfoToSend.joinedDate ? new Date(userInfoToSend.joinedDate) : null,
        status: null
    };
};


const UserAccount = () => {
    const [userData, setUserData]: [UserInfo, Dispatch<SetStateAction<UserInfo>>] = useState(default_data);
    const [disabled, setDisabled]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(true);


    const data: UserInfoToSend = {
        id: 11,
        username: userData.username,
        passwordHash: '',
        salt: '',
        email: userData.email || '',
        phone: userData.phone || '',
        fullname: userData.fullname || '',
        role: "Customer",
        isActive: true,
        isRemoved: false,
        joinedDate: '',
        customerId: 1,
        birthdate: userData.birthdate || '',
        sex: userData.sex || '',
        insurance: userData.insurance || '',
        dentistId: 0,
        clinicId: 0,
        isOwner: false,
    };

    const saveUserData = async () => {
        try {
            const transformedData = transformUserInfoToSend(userData);
            const updatedUser = await putUserData(transformedData);
            const transformedUpdatedUser = transformUserInfoFromSend(updatedUser);
            setUserData(transformedUpdatedUser);
            setDisabled(true);
        } catch (error) {
            console.error('Error updating user data:', error);
        }
    };

    const updateUserData = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.currentTarget;
        setUserData(prevData => ({ ...prevData, [name]: value }));
    };

    const changePicture = () => {
        // [Vẫn đang tìm hiểu] 
    };

    const fetchUserData = async () => {
        try {
            const usersData = await getUserData();
            setUserData(usersData);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    useLayoutEffect(() => {
        fetchUserData();
    }, []);

    return (
        <div className={styles.mainContentRightContainer}>
            <div className={styles.MainSection}>
                <h2 className={styles.MediumHeader}>Tài khoản</h2>
                <div className={styles.InfoBoard}>
                    <div className={styles.ProfileInfo}>
                        <div className={styles.ProfileImagePlaceholder}>
                            <span className={styles.ProfileImage}>
                                <img src={userData.profilePicture ?? ImagePlaceholder} onClick={changePicture} alt="Profile" />
                            </span>
                            <span className={styles.ProfileGeneralInfo}>
                                <h2>{userData.fullname ?? "--"}</h2>
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
                                        <input type='text' name='username' placeholder='vd: NguyenQuang6202' disabled={disabled} onChange={updateUserData} value={userData.username} />
                                    </td>
                                </tr>

                                <tr className={styles.TableRow}>
                                    <td className={`${styles.TableData} ${styles.FieldName}`}>Số điện thoại</td>
                                    <td className={`${styles.TableData} ${styles.FieldValue}`}>
                                        <input type='text' name='phone' placeholder='vd: 090xxxxxxx' disabled={disabled} onChange={updateUserData} value={userData.phone || ''} />
                                    </td>
                                </tr>
                                <tr className={styles.TableRow}>
                                    <td className={`${styles.TableData} ${styles.FieldName}`}>Email</td>
                                    <td className={`${styles.TableData} ${styles.FieldValue}`}>
                                        <input type='text' name="email" placeholder='vd: example@gmail.com' disabled={disabled} onChange={updateUserData} value={userData.email || ''} />
                                    </td>
                                </tr>

                                <tr className={styles.TableRow}>
                                    <td className={`${styles.TableData} ${styles.FieldName}`}>Mã bảo hiểm y tế</td>
                                    <td className={`${styles.TableData} ${styles.FieldValue}`}>
                                        <input type='text' name='insurance' placeholder='vd: AN10XXXXXXXX' disabled={disabled} onChange={updateUserData} value={userData.insurance || ''} />
                                    </td>
                                </tr>

                                <tr className={styles.TableRow}>
                                    <td className={`${styles.TableData} ${styles.FieldName}`}>Họ và tên</td>
                                    <td className={`${styles.TableData} ${styles.FieldValue}`}>
                                        <input type='text' name='fullname' placeholder='vd: Trần Văn A' disabled={disabled} onChange={updateUserData} value={userData.fullname || ''} />
                                    </td>
                                </tr>

                                <tr className={styles.TableRow}>
                                    <td className={`${styles.TableData} ${styles.FieldName}`}>Ngày sinh</td>
                                    <td className={`${styles.TableData} ${styles.FieldValue}`}>
                                        <input type='date' name='birthdate' placeholder={Date.now().toString()} disabled={disabled} onChange={updateUserData} value={userData.birthdate || ''} />
                                    </td>
                                </tr>

                                <tr className={styles.TableRow}>
                                    <td className={`${styles.TableData} ${styles.FieldName}`}>Giới tính</td>
                                    <td className={`${styles.TableData} ${styles.FieldValue}`}>
                                        <fieldset disabled={disabled}>
                                            <label><input type="radio" name='sex' value="Nam" onChange={updateUserData} checked={userData.sex === "Nam"} /> Nam</label>
                                            <label><input type="radio" name='sex' value="Nữ" onChange={updateUserData} checked={userData.sex === "Nữ"} /> Nữ</label>
                                            <label><input type="radio" name='sex' value="" onChange={updateUserData} checked={userData.sex === ""} /> Khác</label>
                                        </fieldset>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        {!disabled && <SimpleButton buttonType='button' message='Hoàn tất' callback={saveUserData} />}
                        {disabled && <SimpleButton buttonType='button' message='Cập nhật thông tin tài khoản' callback={() => { setDisabled(false) }} />}
                    </div>

                    <hr className={styles.Line} />
                    <ChangePassword username={userData.username} callbacks={() => { }} />
                </div>
            </div>
        </div>
    );
};

export default UserAccount;
