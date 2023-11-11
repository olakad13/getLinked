import styles from "./Timeline.module.css"

const Timeline = () => {
    return (
        <section className={styles.timeline}>
            <h2 className={styles.heading}>Timeline</h2>
            <p className={styles.headingPara}>Here is the breakdown of the time we anticipate using for the upcoming event.</p>

            <div className={styles.outerContainer}>
                <div className={styles.grid}>
                    <div className={styles.line}></div>
                    <div className={styles.number}>1</div>

                    <div className={styles.gridText}>
                        <h3>Hackathon Announcement</h3>
                        <p>The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register</p>
                    </div>
                    <h4 className={styles.date}>November 18, 2023</h4>
                </div>


                <div className={styles.grid}>
                    <div className={styles.line}></div>
                    <div className={styles.number}>2</div>

                    <div className={styles.gridText}>
                        <h3>Teams Registration begins</h3>
                        <p>Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register</p>
                    </div>
                    <h4 className={styles.date}>November 18, 2023</h4>
                </div>


                <div className={styles.grid}>
                    <div className={styles.line}></div>
                    <div className={styles.number}>3</div>

                    <div className={styles.gridText}>
                        <h3>Teams Registration ends</h3>
                        <p>Interested Participants are no longer Allowedto register</p>
                    </div>
                    <h4 className={styles.date}>November 18, 2023</h4>
                </div>



                <div className={styles.grid}>
                    <div className={styles.line}></div>
                    <div className={styles.number}>4</div>

                    <div className={styles.gridText}>
                        <h3>Announcement of the accepted teams and ideas</h3>
                        <p>All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced</p>
                    </div>
                    <h4 className={styles.date}>November 18, 2023</h4>
                </div>
                <div className={styles.grid}>
                    <div className={styles.line}></div>
                    <div className={styles.number}>5</div>

                    <div className={styles.gridText}>
                        <h3>Getlinked Hackathon 1.0 Offically Begins</h3>
                        <p>Accepted teams can now proceed to build their ground breaking skill driven solutions</p>
                    </div>
                    <h4 className={styles.date}>November 18, 2023</h4>
                </div>
                <div className={styles.grid}>

                    <div className={styles.line}></div>
                    <div className={styles.number}>6</div>

                    <div className={styles.gridText}>
                        <h3>Demo Day</h3>
                        <p>Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day</p>
                    </div>
                    <h4 className={styles.date}>November 18, 2023</h4>
                </div>
            </div>
        </section>
    )
}

export default Timeline;