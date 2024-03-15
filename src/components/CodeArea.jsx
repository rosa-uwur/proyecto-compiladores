import { useState } from 'react'
import '../styles/CodeArea.css'

function CodeArea() {
    const [texto, setTexto] = useState('');

    const handleChange = (event) => {
        setTexto(event.target.value);
    };

    const generarNumerosLinea = () => {
        const lineas = texto.split('\n');
        return lineas.map((linea, index) => <span key={index} className='lineNumber'>{index + 1}<br /></span>);
    };

    return (
        <div>
            <div className="contenedor-textarea">
                <div className="lineas">{generarNumerosLinea()}</div>
                <textarea
                    className="texto"
                    value={texto}
                    onChange={handleChange}
                    rows="25"
                    cols="30"
                    placeholder="Escribe aquí..."
                />
            </div>
        </div>
    );
}

export default CodeArea
