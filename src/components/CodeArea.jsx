import { useState } from 'react'
import '../styles/CodeArea.css'

function CodeArea() {
    const [texto, setTexto] = useState('');
    const textoSalida = "";

    const handleChange = (event) => {
        setTexto(event.target.value);
    };

    const generarNumerosLinea = () => {
        const lineas = texto.split('\n');
        return lineas.map((linea, index) => <span key={index} className='lineNumber'>{index + 1}<br /></span>);
    };

    return (
        <div className='main-code-container'>
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
            <div className='contenedor-salida'>
            <textarea
                    className="salida"
                    value={textoSalida}
                    onChange={handleChange}
                    rows="25"
                    cols="30"
                    readOnly
                    placeholder="Salida compilación."
                />
            </div>
        </div>
    );
}

export default CodeArea
