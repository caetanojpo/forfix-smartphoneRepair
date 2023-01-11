import About from "../../Components/About";
import Banner from "../../Components/Banner";
import Infos from "../../Components/Infos";
import Navbar from "../../Components/Navbar";
import Topper from "../../Components/Topper";

const Home = () => {
    return(
        <>

        <Topper/>
        <Navbar/>
        <Banner/>
        <Infos/>
        <About/>
        </>
    )
}

export default Home;