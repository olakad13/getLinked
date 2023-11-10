import styles from "./FAQ.module.css"
import sectionImage from "../../assets/faq.svg"

const FAQ = () => {

    const handleClick = (event) => {
        const button = event.target
        const parentEl = button.parentElement
        const collapseEl = parentEl.getElementsByClassName(styles.accordionCollapse)[0]
        collapseEl.classList.toggle(styles.expand);
    }
    return (
        <section className={styles.faq}>

            <div className={styles.sectionHeader}>
                <div className={styles.header}>
                    Frequently Ask
                    <span>Question</span>
                </div>

                <p>We got answers to the questions that you mightwant to ask about getlinked Hackathon 1.0</p>
            </div>

            <div className={styles.accordion}>
                <div className={styles.accordionItem}>
                    <button onClick={handleClick} className={styles.accordionBtn}>
                        <p>Can I work on a project I started before the hackathon?</p>
                        <span>+</span>
                    </button>
                    <div className={styles.accordionCollapse}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos error accusantium explicabo modi labore aperiam? Nesciunt at sequi excepturi eos?</div>
                </div>

                <div className={styles.accordionItem}>
                    <button onClick={handleClick} className={styles.accordionBtn}>
                        <p>What happens if I need help during the hackathon?</p>
                        <span>+</span>
                    </button>
                    <div className={styles.accordionCollapse}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos error accusantium explicabo modi labore aperiam? Nesciunt at sequi excepturi eos?</div>
                </div>
                <div className={styles.accordionItem}>
                    <button onClick={handleClick} className={styles.accordionBtn}>
                        <p>What happens if I don't have an idea for a project?</p>
                        <span>+</span>
                    </button>
                    <div className={styles.accordionCollapse}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos error accusantium explicabo modi labore aperiam? Nesciunt at sequi excepturi eos?</div>
                </div>

                <div className={styles.accordionItem}>
                    <button onClick={handleClick} className={styles.accordionBtn}>
                        <p>Can I join a team or do I have to come with one?</p>
                        <span>+</span>
                    </button> 
                    <div className={styles.accordionCollapse}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos error accusantium explicabo modi labore aperiam? Nesciunt at sequi excepturi eos?</div>
                </div>

                <div className={styles.accordionItem}>
                    <button onClick={handleClick} className={styles.accordionBtn}>
                        <p>What happens after the hackathon ends</p>
                        <span>+</span>
                    </button>
                    <div className={styles.accordionCollapse}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos error accusantium explicabo modi labore aperiam? Nesciunt at sequi excepturi eos?</div>
                </div>
                <div className={styles.accordionItem}>
                    <button onClick={handleClick} className={styles.accordionBtn}>
                        <p>Can I work on a project I started before the hackathon?</p>
                        <span>+</span>
                    </button>
                    <div className={styles.accordionCollapse}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos error accusantium explicabo modi labore aperiam? Nesciunt at sequi excepturi eos?</div>
                </div>
            </div>

            <img src={sectionImage} alt="" />
        </section>
    )
}

export default FAQ;