import './UserProfile.scss'
import { useNavigate } from 'react-router-dom';
import ImagePlaceholder from '../../../assets/img_placeholder.jpg';
import Header from '../../../components/Header/Header';
import { UserInfo } from '../UserDefinition';
import SimpleButton from '../../../components/User/Buttons/SimpleButton';
const UserProfile: React.FC = () => {
  // Dữ liệu người dùng
  const data: UserInfo = {
      user_id: "The Null Pointer Exception",
      username: "Collin Phan",
      name: "Charles Vander Lin",
      phone: "0933015921",
      gender: "Nam",
      birthdate: "30-4-1945",
      ethnic: "Kinh",
      email: "example@gmail.com",
      ssc: "03968230692155",
      insurance: null,
      status: {state_number: 1, message: "Đã xác minh"}, 
    }

  // Navigational
  const navigator = useNavigate();
  const doNavigate = (dest: string) => {navigator(dest)}

  // Intergrated with current navigation bar and footer
  return (
    <>
      <Header />
      <main className='main-content-flex-container'>
        <div className='main-content-left-container'>
          <ul>
            <li className='profile_nav_link'><p className='profile_nav_text' onClick={() => doNavigate('/user/schedule')}>Lịch khám</p></li>
            <li className='profile_nav_link'><p className='profile_nav_text' onClick={() => doNavigate('/user/payment')}>Thanh toán</p></li>
            <li className='profile_nav_link active'><p className='profile_nav_text' onClick={() => doNavigate('#')}>Hồ sơ</p></li>
            <li className='profile_nav_link'><p className='profile_nav_text' onClick={() => doNavigate('/user/account')}>Tài khoản</p></li>
          </ul>
        </div>

        <div className='main-content-right-container'>
            <h1 className='main-content-middle-title-heading'>Hồ sơ</h1>
            <div className='main-content-container-box'>

              <div className='main-content-container-box-row profile-general-align-left'>
                <span className="user-profile-image-placeholder">
                  <img src={data.profile_image ?? ImagePlaceholder} alt="lmao"/>
                </span>
                <span className='user-profile-general-info'>
                  <h2>{data.username}</h2>
                  <p>Mã bệnh nhân: {data.user_id}</p>
                </span>
              </div>

              <div className='main-content-container-box-row'>
                <h2>Thông tin cơ bản</h2>
                <table>
                  <tbody>
                    <tr>
                      <td className='table-field-name'>Họ và tên</td>
                      <td className="table-field-value">{data.name ?? "--"}</td>
                    </tr>
                    <tr>
                      <td className='table-field-name'>Số điện thoại</td>
                      <td className="table-field-value">{data.phone ?? "--"}</td>
                    </tr>
                    <tr>
                      <td className='table-field-name'>Giới tính</td>
                      <td className="table-field-value">{data.gender ?? "--"}</td>
                    </tr>
                    <tr>
                      <td className='table-field-name'>Ngày sinh</td>
                      <td className="table-field-value">{data.birthdate ?? "--"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='main-content-container-box-row'>
                <h2>Thông tin bổ sung</h2>
                <table>
                  <tbody>
                    <tr>
                      <td className='table-field-name'>Mã BHYT</td>
                      <td className="table-field-value">{data.insurance ?? "--"}</td>
                    </tr>
                    <tr>
                      <td className='table-field-name'>Dân tộc</td>
                      <td className="table-field-value">{data.ethnic ?? "--"}</td>
                    </tr>
                    <tr>
                      <td className='table-field-name'>Số CCCD/CMND</td>
                      <td className="table-field-value">{data.ssc ?? "--"}</td>
                    </tr>
                    <tr>
                      <td className='table-field-name'>Email</td>
                      <td className="table-field-value">{data.email ?? "--"}</td>
                    </tr>
                    </tbody>
                </table>
              </div>
              <div className='main-content-container-box-row'>
              <SimpleButton buttonType='button' href='/user/account' message='Chỉnh sửa thông tin cá nhân' />
              </div>
            </div>
        </div>
      </main>
    </>
  )
}

export default UserProfile
