import ScrollToTop from '../../Router/ScrollToTop';
import Navbar from '../../Sections/Navbar';
import PoliticsText from '../../Sections/PoliticsText';

const Politics = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar burgPath imagePath politicsPath />
      <PoliticsText />
    </>
  );
};

export default Politics;
