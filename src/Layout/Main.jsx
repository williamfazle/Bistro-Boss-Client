import { Outlet } from "react-router-dom"
import Footer from "../pages/shared/footer/Footer"
import NavBar from "../pages/shared/NavBar/NavBar"

const Main = () => {
  return (
      <div>
          <NavBar></NavBar>
          <Outlet> </Outlet>
          <Footer></Footer>
    </div>
  )
}

export default Main
