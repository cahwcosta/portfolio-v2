import ResponsiveElement from "../../../components/ResponsiveElement";
import ExperienciasDesktop from './desktop'
import ExperienciasMobile from './mobile'

const Navbar = () => {
  return (
    <ResponsiveElement content={<ExperienciasDesktop/>} mobile={<ExperienciasMobile/>}/>
  )
}

export default Navbar;