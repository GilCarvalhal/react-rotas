import { Link } from 'react-router-dom';

function Sobre() {
    return (
        <div>
            <h1>
                PÁGINA SOBRE A EMPRESA!
            </h1> <br />

            <Link to={'/'}>
                Home
            </Link> <br /> <br />

            <Link to={'/contato'}>
                Contato
            </Link>
        </div>
    )
}

export default Sobre;
