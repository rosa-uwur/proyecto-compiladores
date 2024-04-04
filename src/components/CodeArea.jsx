import React, { useState, useEffect } from 'react';
import '../styles/CodeArea.css'
//import ResaltadoTextarea from "./ResaltadoTextarea.jsx"
import ace from "ace-builds";
import reservedWords from '../assets/ReservedWords/reservedWords.json';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import AceEditor from 'react-ace';
// Importa el lenguaje de programación para en el editor
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import '../assets/ReservedWords/mode-eevee';
//import EeveMode from '../assets/ReservedWords/Eeve';


function CodeArea() {
    // const [texto, setTexto] = useState('s');
    const textoSalida = "";
    // const handleInputChange = (texto) => {
    //     setTexto(texto);
    // };

    // const generarNumerosLinea = () => {
    //     const lineas = texto.split('\n');
    //     return lineas.map((linea, index) => <span key={index} className='lineNumber'>{index + 1}<br /></span>);
    // };

    // const [code, setCode] = useState('');

    // const handleCodeChange = (e) => {
    //     setCode(e.target.value);
    // };

    // const resaltarPalabrasReservadas = (texto) => {
    //     const palabrasReservadasEv = palabrasReservadas.Eevee;
    //     const palabrasReservadasTipos = {
    //         condicionales: { color: 'red', fontWeight: 'bold' },
    //         ciclos: { color: 'blue', fontWeight: 'bold' },
    //     };

    //     let textoResaltado = texto;

    //     Object.keys(palabrasReservadasEv).forEach((tipo) => {
    //         const palabrasTipo = palabrasReservadasEv[tipo];
    //         const estiloTipo = palabrasReservadasTipos[tipo];

    //         if (palabrasTipo && estiloTipo) {
    //             const regex = new RegExp(`\\b(${palabrasTipo.join('|')})\\b`, 'g');
    //             textoResaltado = textoResaltado.replace(
    //                 regex,
    //                 `<span style="color: ${estiloTipo.color}; font-weight: ${estiloTipo.fontWeight};">$1</span>`
    //             );
    //         }
    //     });

    //     return textoResaltado;
    // };


    const [code, setCode] = useState('');

    const handleChange = (newCode) => {
        setCode(newCode);
    };


    ace.config.set('basePath', '../');

    // const highlightedCode = highlightReservedWords(code);
    // AceEditor.edit(element, {
    //     mode: "../assets/ReservedWords/mode-eevee",
    //     selectionStyle: "eevee"
    // })

    return (
        <div className='main-code-container'>
            <div className='contenedor-salida'>
                <AceEditor
                    mode="Eevee" // Lenguaje de programación
                    theme="monokai" // Tema del editor
                    onChange={handleChange} // Función para manejar cambios en el código
                    value={code} // Valor del código en el editor
                    name="code-editor" // Nombre del editor (opcional)
                    editorProps={{ $blockScrolling: true }} // Propiedades del editor
                    style={{ width: '100%', height: '500px' }} // Estilo del editor
                />
            </div>
                /* <div className='contenedor-salida'>
                <textarea
                    className="salida"
                    value={textoSalida}
                    //onChange={handleChange}
                    rows="25"
                    cols="30"
                    readOnly
                    placeholder="Salida compilación."
                />
            </div> */
        </div>
    );

}

export default CodeArea;
