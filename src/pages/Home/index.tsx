import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { Title } from "../../components/Main/Title";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {    
    AOS.init({
      duration: 2000
    })
  }, [])

  return (
    <div className="flex flex-col justify-between">
      <Header />
      <Title />
      <Main />
      <Footer />
    </div>
  )
}