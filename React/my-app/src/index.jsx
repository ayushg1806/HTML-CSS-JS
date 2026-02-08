import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'

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
    }
];

const BookList = () => {
    return (
        <section className="bookList">
            {books.map((book, index) => {
                const {img, title, author} = book;
                return(
                    <Book {...book} key={book.id}/>
                )
            })}
        </section>
    )
}

const Book = ({author, title, img}) => {
    return(
        <article className="book">
            <img src={img} alt="book-img" className="book-img" />
            <h1>{title}</h1>
            <h4>{author}</h4>
        </article>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<BookList />)