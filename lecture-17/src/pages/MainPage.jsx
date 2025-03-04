import styles from '../styles/mainPage.module.css'
import harryImg from '../assets/harry.png'
import { Link } from 'react-router'

const MainPage = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.card}>
                <img src={harryImg} alt="" className={styles.cardImage} />
                <div className={styles.cardContent}>
                    <h2 className={styles.cardName}>Harry Potter</h2>
                    <p className={styles.cardInfo}>Some interesting facts about Harry Potter series.</p>
                    <Link to="/about" className={styles.cardLink}>Know More</Link>
                </div>
            </div>
        </div>
    )
}

export default MainPage