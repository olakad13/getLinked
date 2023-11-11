import styles from "./Home.module.css"
import Header from "../../components/Header/Header.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import RulesAndGuidelines from "../../components/RulesAndGuidelines/RulesAndGuidelines.jsx";
import Criteria from "../../components/Criteria/Criteria.jsx";
import FAQ from "../../components/FAQ/FAQ.jsx";
import Timeline from "../../components/Timeline/Timeline.jsx";

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <RulesAndGuidelines />
            <Criteria />
            <FAQ />
            <Timeline />
        </>
    )
}

export default Home;