import { Link } from 'react-router-dom'

function Contato() {
    return (
        <div>
            <h1>
                PÁGINA DE CONTATOS!
            </h1> <br />
            <span>Contato da empresa: (dd) xxxx-xxxx</span> <br /> <br />

            <Link to={"/"}>
                Home
            </Link> <br />

            <Link to={'/sobre'}>
                Sobre
            </Link>

        </div>
    )
}

export default Contato;