import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { MainContent } from "./components/MainContent"

export const App = () =>{
  return (
    <>
      <Header/>
      <MainContent name="MD SALIM ISLAM" job= "MARKETING MENEGER" id= "123654789" phone="01783023657" email= "salimislam0036@gmail.com"/>
      <Footer/>
    </>
  )
}