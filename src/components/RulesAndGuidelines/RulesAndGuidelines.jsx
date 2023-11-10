import styles from "./RulesAndGuidelines.module.css"
import sectionImage from "../../assets/girlSitting.svg"

const RulesAndGuidelines = () => {
    return  (
        <section className={styles.RulesAndGuidelines}>
            <img src={sectionImage} alt="" />

            <div className={styles.sectionText}>
                <h3 className={styles.header}>
                    Rules and
                    <span>Guidelines</span>
                </h3>

                <p className={styles.para}>
                    Our tech hackathon is a melting pot of 
                    visionaries, and its purpose is as clear as day:
                    to shape the future. Whether you're a coding
                    genius, a design maverick, or a concept 
                    wizard, you'll have the chance to transform 
                    your ideas into reality. Solving real-world 
                    problems, pushing the boundaries of 
                    technology, and creating solutions that can 
                    change the world, that's what we're all about!
                </p>
            </div>
        </section>
    )
}

export default RulesAndGuidelines;