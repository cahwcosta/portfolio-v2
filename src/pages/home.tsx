import Experiencias from "../templates/Home/Experiencias";
import Habilidades from "../templates/Home/Habilidades";
import Header from "../templates/Home/Header";
import Navbar from "../templates/Home/Navbar";

const Home = () => {
  return(
    <>
      <Navbar/>
      <Header/>
      <Habilidades/>
      <Experiencias/>
    </>
  )
}

export default Home;
