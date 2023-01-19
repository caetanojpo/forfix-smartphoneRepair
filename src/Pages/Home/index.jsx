import About from '../../Sections/About';
import Banner from '../../Sections/Banner';
import Infos from '../../Sections/Infos';
import Services from '../../Sections/Services';
import Team from '../../Sections/Team';
import Brands from '../../Sections/Brands';
import ExtraServices from '../../Sections/ExtraServices';

const Home = () => {
  return (
    <>
      <Banner />
      <Infos />
      <Services />
      <ExtraServices />
      <About />
      <Brands />
      <Team />
    </>
  );
};

export default Home;
