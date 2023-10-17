import { Outlet, useLoaderData } from "react-router-dom"
import Footer from "./components/shared/Footer"
import Header from "./components/shared/Header"
import { createContext } from "react";


export const DataContext=createContext("") 

function App() {
 const coffeeDetail=useLoaderData()
 console.log(coffeeDetail);
  return (
    <DataContext.Provider value={coffeeDetail}>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </DataContext.Provider>
  )
}

export default App
