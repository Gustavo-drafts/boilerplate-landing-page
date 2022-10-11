import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";
import { Title } from "../../components/Main/Title";

export default function Home() {
  return (
    <div className="flex flex-col justify-between">
      <Header />
      <Title />
      <Main />
      <Footer />
    </div>
  )
}