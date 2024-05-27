import SideBar from '../../../../../components/SideBar/SideBar';
import styles from './DentistAccount.module.css';
import { sidebarData } from '../../data';
import { dentistAccounts } from './data';

const DentistAccount = () => {
    return (
        <div className={styles.box}>
            <SideBar sidebarData={sidebarData} />
            <div className={styles['main-container']}>
                <h1>Trang quản lí tài khoản nha sĩ</h1>
                <div className={styles['content-container']}>
                    <h2>Danh sách tài khoản</h2>
                    <div className={styles['table-container']}>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope='col'>STT</th>
                                    <th scope='col'>Hình</th>
                                    <th scope='col'>Tên</th>
                                    <th scope='col'>Trạng thái</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dentistAccounts.map((dentistAccount, index) => (
                                    <tr >
                                        <td scope='row'>{index}</td>
                                        <td scope='row'>{dentistAccount.image}</td>
                                        <td scope='row'>{dentistAccount.name}</td>
                                        <td scope='row'>
                                            <button className={`btn ${dentistAccount.status === 'inactive' ? 'btn-danger' : 'btn-success'}`}>
                                                {dentistAccount.status}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DentistAccount