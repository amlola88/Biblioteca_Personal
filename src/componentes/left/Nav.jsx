import Enlaces from "./Enlaces"


const Nav = () => {
    const enlaces = {
        enlace1:"Enlace 1",
        enlace2:"Enlace 2",
        enlace3:"Enlace 3",

    }
  return (
    <nav className="enlaces">
        <Enlaces enlaces={enlaces}/>
    </nav>
  )
}

export default Nav