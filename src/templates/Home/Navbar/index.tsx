import ResponsiveElement from "../../../components/ResponsiveElement";
import NavbarDesktop from './desktop'
import NavbarMobile from './mobile'

const Navbar = () => {
  return (
    <ResponsiveElement content={<NavbarDesktop/>} mobile={<NavbarMobile/>}/>
  )
}

export default Navbar;