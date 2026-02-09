import React, { useState, useEffect }  from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import { data} from './data'

function Greeting(){
    const firstName = 'Ayush';

    return (
        <>
            <Header className="navigation" />
            <h1 className="head">Hello world</h1>
            <h2>Hello</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi eius corporis inventore aliquam exercitationem rerum eum molestias, blanditiis porro numquam quia rem nobis repellat quod facere commodi quaerat? Quae, eos. Deserunt minima minus laboriosam nulla. Eligendi, nemo ipsa. Debitis accusamus iste asperiores, corporis possimus sequi temporibus nemo. Vero, ut quidem.</p>
            <h3>{firstName}</h3>
            <Footer />
        </>
    )
};

function Header() {
    return <header>My website</header>
}

function Footer() {
    return <footer>&copy; 2026 MySite</footer>
}

const books = [
    {   
        id: 1,
        author: "James Clear",
        img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS_fnqMbgu47CvuouQqvMQ0NMJTi3YwkdOHnY-vx9HYAZ0Az5nE_XmpYwyb-OOmjs25WIBIuak8Pd4GOuOSq9dbkonWGSar4Q",
        title: "Atomic Habits" 
    },
    {   
        id: 2,
        author: "Peter Thiel",
        img: "https://m.media-amazon.com/images/I/61PDzIhVLnL._AC_UF1000,1000_QL80_.jpg",
        title: "Zero to One"
    },
    {   
        id: 3,
        author: "Daksh Tyagi",
        img: "https://m.media-amazon.com/images/I/91ylrTgh-QL._AC_UF1000,1000_QL80_.jpg",
        title: "A Nation of Idiots"
    }
];

const BookList = () => {
    return (
        <section className="bookList">
            {books.map((book, index) => {
                const {img, title, author} = book;
                return(
                    <Book /*book = {book}*/{...book} key={book.id}/>
                )
            })}
        </section>
    )
}

const Book = ({author, title, img}) => {

    const showTitle = (title) => {
        console.log('Hello ' + title);
        
    }
    return(
        <article className="book">
            <img src={img} alt="book-img" className="book-img" />
            <h1 onClick={() => showTitle(title)}>{title}</h1>
            <h4>{author}</h4>
        </article>
    )
}

// Hooks - Functions that are already created for us and we have to use them
// useState
const UseStateExample = () => {
    const [people, setPeople] = useState(data)

    const removeItem = (id) => {
        let newPeople = people.filter((person) => person.id !== id)
        setPeople(newPeople)
    }

    return(
        <>
            {people.map((person) => {
                const {id, name} = person;
                return(
                    <div className="item" key={id}>
                        <h4>{name}</h4>
                        <button onClick={() => removeItem(id)}>Remove</button>
                    </div>
                )
            })}
            <button onClick={() => setPeople([])}>Clear Items</button>
        </>
    )
}

// useEffect - Gets called upon every re-render; by default runs after every re-render 
const UseEffectExample = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        console.log('call useEffect');
        document.title = `New Messages (${value})`
    }, [value])

    return(
        <>
            <h1>{value}</h1>
            <button onClick={() => setValue(value + 1)}>Click me</button>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<UseEffectExample />)