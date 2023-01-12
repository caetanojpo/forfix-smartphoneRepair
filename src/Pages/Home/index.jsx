import Banner from '../../Components/Banner';
import Infos from '../../Components/Infos';
import Navbar from '../../Components/Navbar';
import Topper from '../../Components/Topper';
import Services from '../../Components/Services';
import About from '../../Components/About';

const Home = () => {
  return (
    <>
      <Topper />
      <Navbar />
      <Banner />
      <Infos />
      <Services />
      <About />
    </>
  );
};

export default Home;
