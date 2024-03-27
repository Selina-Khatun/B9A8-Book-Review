import Banner from "../../components/Header/Banner";
import useContext from "../../hooks/useContext";
import Cards from "./Cards";

const Home = () => {
    const [data]=useContext();
    // console.log(data);
    return (
        <div>
            <Banner></Banner>
            <Cards></Cards>
        </div>
    );
};

export default Home;