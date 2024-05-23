import { Box } from "@chakra-ui/react"
import Header from "../../components/Header/Header"
import SideBar from "../../components/SideBar/SideBar" // Import the SideBar component
import "./AdminPage.css"
import { ReactNode } from "react"

const AdminPage = () => {

    return (
        <div style={{  position: 'relative', height: "100vh" }}>
            <SideBar/>
        </div>
    )
}

export default AdminPage