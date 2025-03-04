import styles from '../styles/mainPage.module.css'
import gobletImg from '../assets/goblet.png'
import { Link } from 'react-router'

const ErrorPage = () => {
    return (
        <div className={styles.wrapper}>
            <div className={`${styles.card}`}>
                <img src={gobletImg} alt="" className={`${styles.cardImage} ${styles.noactImage}`} />
                <div className={styles.cardContent}>
                    <h4 className={styles.cardFacts}>Evanesco - Page was not found!</h4>
                    <p className={styles.cardInfo}>404</p>
                    <Link to="/" className={styles.cardLink}>Back to Home</Link>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage