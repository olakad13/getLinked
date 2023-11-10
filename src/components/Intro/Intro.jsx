import styles from "./Intro.module.css"
import introImage from "../../assets/the big idea 1.svg"

const Intro = () => {
    return (
        <section className={styles.Intro}>
            <img src={introImage} alt="" />

            <div className={styles.introText}>
                <h3 className={styles.header}>
                    Introduction to getlinked
                    <span>tech Hackathon 1.0</span>
                </h3>

                <p className={styles.para}>
                    Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as 
                    day: to shape the future. Whether you're 
                    a coding genius, a design maverick, or a 
                    concept wizard, you'll have the chance to transform your ideas into reality. Solving 
                    real-world problems, pushing the boundaries
                    of technology, and creating solutions that can change the world, that's what we're all about!
                </p>
            </div>
        </section>
    )
}

export default Intro