import Card from './Card'
import chamberImg from '../assets/1.jpeg'
import bloodImg from '../assets/2.webp'
import azkabanImg from '../assets/3.jpeg'
import stoneImg from '../assets/4.jpg'

const bookData = [
    { id: 1, name: 'Harry Potter and the Chamber of Secrets', description: "In his second year at Hogwarts, Harry hears a mysterious voice and discovers that the Chamber of Secrets has been opened, unleashing a monster that petrifies students. Harry, Ron, and Hermione investigate and learn that the chamber was opened 50 years ago, leading to the expulsion of Hagrid. Harry confronts Tom Riddle (Voldemort's younger self) and destroys a piece of Voldemort's soul hidden in a diary.", actors: ['Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Rubeus Hagrid'], img: chamberImg },
    { id: 2, name: 'Harry Potter and the Half-Blood Prince', description: "In his sixth year, Harry learns about Voldemort's past through private lessons with Dumbledore, focusing on Horcruxes (objects containing pieces of Voldemort's soul). Meanwhile, Harry discovers an old potions textbook belonging to the 'Half-Blood Prince,' which helps him excel in class. The book takes a dark turn as Draco Malfoy attempts to carry out a mission for Voldemort, and Dumbledore is killed by Severus Snape.", actors: ['Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Rubeus Hagrid'], img: bloodImg },
    { id: 3, name: 'Harry Potter and the Prisoner of Azkaban', description: "Harry learns that Sirius Black, a dangerous prisoner, has escaped from Azkaban and is supposedly after him. As Harry investigates, he discovers the truth about Sirius, his parents betrayal, and the role of Peter Pettigrew. With the help of Hermione's Time-Turner, Harry and his friends save Sirius and uncover secrets about Harry's past.", actors: ['Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Rubeus Hagrid'], img: azkabanImg },
    { id: 4, name: "Harry Potter and the Sorcerer's Stone", description: "Harry Potter, an orphan living with his cruel aunt and uncle, discovers on his 11th birthday that he is a wizard. He is invited to attend Hogwarts School of Witchcraft and Wizardry, where he makes friends (Hermione and Ron) and enemies (Draco Malfoy). Harry learns about his parents legacy and uncovers a plot involving the mysterious Sorcerer's Stone, which grants immortality. He faces the dark wizard Voldemort, who is trying to return to power.Harry Potter, an orphan living with his cruel aunt and uncle, discovers on his 11th birthday that he is a wizard. He is invited to attend Hogwarts School of Witchcraft and Wizardry, where he makes friends (Hermione and Ron) and enemies (Draco Malfoy). Harry learns about his parents legacy and uncovers a plot involving the mysterious Sorcerer's Stone, which grants immortality. He faces the dark wizard Voldemort, who is trying to return to power.", actors: ['Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Rubeus Hagrid'], img: stoneImg }
]

const CardList = () => {
    function clicked(title){
        console.log(`"${title}" was clicked.`);
    }
    
    return (
        <div className='card-list'>
            {bookData.map((book)=> <Card key={book.id} title={book.name} image={book.img} description={book.description} actors={book.actors.map(actor => actor)} action={clicked}/>)}                
        </div>
    )

}

export default CardList