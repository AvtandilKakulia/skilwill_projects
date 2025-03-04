import styles from '../styles/mainPage.module.css'
import castleImg from '../assets/castle.png'
import { Link } from 'react-router'

const AboutPage = () => {
    return (
        <div className={styles.wrapper}>
            <div className={`${styles.card} ${styles.wide}`}>
                <img src={castleImg} alt="" className={styles.cardImage} />
                <div className={styles.cardContent}>
                    <h2 className={styles.cardName}>Overview of the Harry Potter Movie Series</h2>
                    <p className={styles.cardInfo}>The Harry Potter movie franchise is based on the seven books written by J.K. Rowling. The series follows the life of Harry Potter, a young wizard, as he learns about his magical heritage and faces the dark wizard Lord Voldemort, who seeks to conquer the wizarding world. The films were released between 2001 and 2011 and became one of the highest-grossing film franchises in history.</p>
                    <h4 className={styles.cardFacts}>Wanna see some interesting facts?! Go to absolute route "/ facts /" and provide ID.</h4>
                    <Link to="/" className={styles.cardLink}>Back to Home</Link>
                </div>
            </div>
        </div>
    )
}

export default AboutPage