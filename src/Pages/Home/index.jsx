import About from '../../Sections/About';
import Banner from '../../Sections/Banner';
import Infos from '../../Sections/Infos';
import Navbar from '../../Sections/Navbar';
import Topper from '../../Sections/Topper';
import Services from '../../Sections/Services';
import Team from '../../Sections/Team';

const Home = () => {
  return (
    <>
      <Topper />
      <Navbar />
      <Banner />
      <Infos />
      <About />
      <Team />
    </>
  );
};

export default Home;
