import ImgHeader from "./ImgHeader"
import Nav from "./Nav"
import Iconos from "./Iconos"
import "./left.css"


const Header = () => {
  return (
    <section className="header">
        <ImgHeader/>
        <Nav/>
        <Iconos/>
    </section>
  )
}

export default Header