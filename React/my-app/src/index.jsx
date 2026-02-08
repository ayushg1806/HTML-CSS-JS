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

ReactDOM.createRoot(document.getElementById('root')).render(<Greeting />)