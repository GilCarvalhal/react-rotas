import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>
                BEM VINDO A PÁGINA HOME!
            </h1> <br />

            <Link to={'/sobre'}>
                Sobre
            </Link> <br /> <br />

            <Link to={'/contato'}>
                Contato
            </Link>
        </div>

    )
}

export default Home;