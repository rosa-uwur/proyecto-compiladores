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


    const [code, setCode] = useState('');

    const handleChange = (newCode) => {
        setCode(newCode);
    };


    ace.config.set('basePath', '../');


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
            <div className='contenedor-salida'>
                <div className='salida'>
                    <h1>Resultado Compilación:</h1>
                    <hr />
                    <h2>Análisis léxico</h2>
                    <p>aún no hay nada para mostrar...</p>
                    <h2>Análisis Sintáctico</h2>
                    <p>aún no hay nada para mostrar...</p>
                </div>
            </div> */
        </div>
    );

}

export default CodeArea;
