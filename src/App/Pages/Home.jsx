import Navbar from "../features/Navbar/Navbar"
import { Outlet } from "react-router-dom"

const Home = () => {
  return (
    <div className="flex flex-col ">
        <div className="navbar-container">
            <Navbar></Navbar>
        </div>
        <div className="page-container">
            <Outlet></Outlet>
        </div>
        <div className="footer-container">

        </div>
    </div>
  )
}

export default Home
