import Banner from "../../components/Banner/Banner";
import Portfolio from "../../components/PortfolioSection/Portfolio";
import Projects from "../../components/Projects/Projects";
import Sectors from "../../components/Sectors/Sectors";
import About from "../../components/Service/About";



const Home = () => {
    return (
        <div>
          <Banner/>
          <About/>
          <Portfolio/>
          <Sectors/>
          <Projects/>
        </div>
    );
};

export default Home;