import Faq from "../../Sheard/FAQ";
import Footer from "../../Sheard/Footer";
import Navbar from "../../Sheard/Navbar";
import Banner from "../../component/Banner/Banner";
import Feature from "../../component/Feature/Feature";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Feature></Feature>
            <Faq></Faq>
            <Footer></Footer>
        </div>
    );
};

export default Home;