import Box from "../../../components/Box/Box";
import SideBar from "../../../components/SideBar/SideBar"
import styles from './AdminClinic.module.css';
import { adminClinicData, sidebarData } from "./data";

const AdminClinicPage = () => {
  return (
    <div className={styles.box}>
      <SideBar sidebarData={sidebarData} />
      <div className={styles['content-container']}>
        <h1>Trang chủ</h1>
        <div className={styles['box-container']}>
          {adminClinicData.map((item, index) => {
            return (
              <div>
                <Box title={item.title} content={item.content} />
              </div>
            )
          })}
        </div>
        <div className={styles.chart}></div>
      </div>
    </div>
  )
}

export default AdminClinicPage



{/* <div className={styles['card-container']}> 
{
  adminClinicData.map((item, index) => {
    console.log(index)
    return (
      <div className={styles.content} >
        <CardGenerator card={item} key={index} />
      </div>
    )
  })
}
</div> */}