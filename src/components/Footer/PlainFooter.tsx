import style from './PlainFooter.module.scss'
import facebookSVG from '../../assets/facebook.svg';
import twitterSVG from '../../assets/twitter.svg';
import linkedinSVG from '../../assets/linkedIn.svg';

const NormalFooter = () => {

    return (
        <footer className={style.Footer}>
            <div className={style.MainFooterRow}>

                <div className={style.SocialMedia}>
                    <h2>Kết nối với chúng tôi</h2>
                    <a href="https://www.facebook.com"> <img src={facebookSVG} alt="Facebook"/> </a>
                    <a href="https://www.x.com"> <img src={twitterSVG} alt="Twitter / X"/> </a>
                    <a href="https://www.linkedin.com"> <img src={linkedinSVG} alt="LinkedIn"/> </a>
                </div>

                <div>

                </div>
                <div>
                    <h2>Giới thiệu</h2>
                    <ul>
                        <li><a>Về chúng tôi</a></li>
                        <li><p>Thông tin liên hệ</p></li>
                        <li><p>Nhân sự & tuyển dụng</p></li>
                    </ul>
                </div>
                
                <div>
                    <h2>Dịch vụ</h2>
                    <ul>
                        <li><p>Đặt khám phòng khám</p></li>
                        <li><p>Đặt lịch thường niên</p></li>
                        <li><p>Biểu phí dịch vụ</p></li>
                    </ul>
                </div>

                <div>
                    <h2>Hỗ trợ</h2>
                    <ul>
                        <li><p>Điều khoản sử dụng</p></li>
                        <li><p>Chính sách bảo mật</p></li>
                        <li></li>
                    </ul>
                </div>
            </div>

            <div className={style.MainFooterColoredRow}>
                    <p>© SmileCare 2024 - Nhóm 4 NET1807</p>
                    <p>Email hỗ trợ: swp391.net1803@gmail.com</p>
            </div>

        </footer>
  )
}

export default NormalFooter