import Faq from "../../Sheard/FAQ";
import Footer from "../../Sheard/Footer";
import Navbar from "../../Sheard/Navbar";
import Banner from "../../component/Banner/Banner";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Faq></Faq>
            <Footer></Footer>
        </div>
    );
};

export default Home;