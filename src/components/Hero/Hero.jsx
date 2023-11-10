import styles from "./Hero.module.css"
import Blister from "../../assets/blister.svg"
import Chain from "../../assets/chain.svg"
import Intro from "../Intro/Intro"


const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.heroText}>
                <h2 className={styles.header}>Igniting a Revolution in HR Innovation</h2>
                <h3 className={styles.getlinked}>getlinked Tech</h3>
                <h3 className={styles.hackathon}>
                    Hackathon <span>1.0</span>
                    <img src={Chain} alt="" />
                    <img src={Blister} alt="" />
                </h3>
                <p className={styles.para}>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
                <button className={styles.registerBtn}>Register</button>
                <div className={styles.time}>
                    <span className={styles.hour}>
                        00<span>H</span>
                    </span>

                    <span className={styles.minute}>
                        00<span>M</span>
                    </span>

                    <span className={styles.second}>
                        00<span>S</span>
                    </span>
                </div>
            </div>

            <div className={styles.heroImageCon}>

            </div>

            <Intro />
        </section>
    )
}

export default Hero;