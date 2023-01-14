import About from '../../Sections/About';
import Banner from '../../Sections/Banner';
import Infos from '../../Sections/Infos';
import Navbar from '../../Sections/Navbar';
import Topper from '../../Sections/Topper';
import Services from '../../Sections/Services';
import Team from '../../Sections/Team';
import Brands from '../../Sections/Brands';
import Footer from '../../Sections/Footer';

const Home = () => {
  return (
    <>
      <Topper />
      <Navbar />
      <Banner />
      <Infos />
      <Services />
      <Brands />
      <About />
      <Team />
      <Footer />
    </>
  );
};

export default Home;
