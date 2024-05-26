import CardGenerator from "../../../components/Card/CardGenerator";
import SideBar from "../../../components/SideBar/SideBar"
import styles from './AdminClinic.module.css';
import sidebarStyles from './SideBar.module.css';
import { adminClinicData, sidebarData } from "./data";

const AdminClinicPage = () => {
  return (
    <div className={styles.box}>
      <SideBar sidebarData={sidebarData} styles={sidebarStyles} />
      <div className={styles.cardcontainer}>
        {
          adminClinicData.map((item, index) => {
            return (
              <div className={styles.content} >
                <CardGenerator card={item} key={index} styles={styles} />
              </div>
            )
          })
        }
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