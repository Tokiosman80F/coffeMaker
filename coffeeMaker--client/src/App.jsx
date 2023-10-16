import { Outlet } from "react-router-dom"
import Header from "./components/shared/Header"
import Footer from "./components/shared/Footer"


function App() {
 

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
