import Banner from '../../Components/Banner';
import Infos from '../../Components/Infos';
import Navbar from '../../Components/Navbar';
import Topper from '../../Components/Topper';
import Services from '../../Sections/Services';

const Home = () => {
  return (
    <>
      <Topper />
      <Navbar />
      <Banner />
      <Infos />
      <Services />
    </>
  );
};

export default Home;
