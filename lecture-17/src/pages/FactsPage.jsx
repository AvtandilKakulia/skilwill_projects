import styles from '../styles/mainPage.module.css'
import castleImg from '../assets/castle.png'
import { Link } from 'react-router'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'

const facts = [
    { id: 1, title: "Daniel Radcliffe’s Glasses Were Custom-Made", fact: 'The iconic round glasses worn by Harry Potter were designed specifically for the character and were custom-made for Daniel Radcliffe. They were made to look slightly larger than normal to give Harry a unique, nerdy appearance. Radcliffe even wore prescription lenses under the glasses for some of the films!' },
    { id: 2, title: 'The Hogwarts Express Train Is Real', fact: 'The Hogwarts Express, the magical train that takes students to Hogwarts, is based on a real train: the Flying Scotsman. This steam locomotive, which operates in the UK, was used for scenes involving the train’s journey to Hogwarts. The train tracks you see in the films were filmed in Scotland, making it a truly iconic and historic part of the series!' },
    { id: 3, title: "Alan Rickman Knew Severus Snape's Fate Before Anyone Else", fact: "Alan Rickman, who played Severus Snape, knew about the character's ultimate fate from the very beginning, as J.K. Rowling shared the details with him privately. She told him the truth about Snape’s loyalty and his role in the larger story, and he played the character with that knowledge, which helped make Snape’s character arc so nuanced and believable." }
]

const FactsPage = () => {
    const navigate = useNavigate();
    const param = useParams()
    const fact = facts.find((factObj) => factObj.id == param.factID)
    useEffect(() => {
        if (!fact) {
            navigate('*')
        }
    }, [fact, navigate])

    if (!fact) return null
    return (
        <div className={styles.wrapper}>
            <div className={`${styles.card} ${styles.wide}`}>
                <img src={castleImg} alt="" className={styles.cardImage} />
                <div className={styles.cardContent}>
                    <h4 className={styles.cardFacts}>Fact N{fact.id}: {fact.title}</h4>
                    <p className={styles.cardInfo}>{fact.fact}</p>
                    <Link to="/" className={styles.cardLink}>Back to Home</Link>
                </div>
            </div>
        </div>
    )
}

export default FactsPage