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
import '../assets/ReservedWords/mode-gta';
import '../styles/FileSelection.css'
import { MdCatchingPokemon } from "react-icons/md";
import AnalysisButton from './AnalysisButton.jsx'
//import EeveMode from '../assets/ReservedWords/Eeve';


function CodeArea() {


    const [code, setCode] = useState('');

    const [analysisResult, setAnalysisResult] = useState(null);


    const handleChange = (newCode) => {
        setCode(newCode);
    };

    // Función para manejar la respuesta del análisis léxico
    const handleAnalysisResult = (result) => {
        setAnalysisResult(result);
    };

    const handleFileUpload = (event) => {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente
        const file = event.target.archivo.files[0]; // Obtener el archivo del input de tipo file
        const reader = new FileReader();

        reader.onload = (e) => {
            const fileContent = e.target.result;
            setCode(fileContent); // Establecer el contenido del archivo como valor del editor
        };

        reader.readAsText(file); // Leer el archivo como texto
    };



    ace.config.set('basePath', '../');


    const handleLexicalAnalysis = async () => {
        try {
            const response = await axios.post('http://localhost:8080/analisisLexico', { texto: code });
            setLexicalAnalysis(response.data); // Guarda el resultado del análisis léxico en el estado
        } catch (error) {
            console.error('Error al realizar el análisis léxico:', error);
            alert('Ocurrió un error al realizar el análisis léxico');
        }
    };


    return (
        <>
            <div className='fileselection-container'>
                <div className='fileselection-inner'>
                    <MdCatchingPokemon />
                    <p id='fileselector-p'>Elige un archivo de tu computadora!</p>
                    <form method="post" enctype="multipart/form-data" onSubmit={handleFileUpload}>
                        <input type="file" name="archivo" id="archivo" accept=".*" onChange={handleFileUpload} />
                        <input type="submit" value="Subir Archivo" />
                    </form>
                </div>
            </div>

            <AnalysisButton code={code} onAnalysisResult={handleAnalysisResult} /> 

            <div className='main-code-container'>

                <div className='contenedor-salida'>
                    <AceEditor
                        mode="gta" // Lenguaje de programación
                        theme="monokai" // Tema del editor
                        onChange={handleChange} // Función para manejar cambios en el código
                        value={code} // Valor del código en el editor
                        name="code-editor" // Nombre del editor (opcional)
                        editorProps={{ $blockScrolling: true }} // Propiedades del editor
                        style={{ width: '100%', height: '500px' }} // Estilo del editor
                    />
                </div>
                <div className='contenedor-salida'>
                    {/* <div className='salida'>
                        <h1>Resultado Compilación:</h1>
                        <hr />
                        <h2>Análisis léxico</h2>
                        <p>aún no hay nada para mostrar...</p>
                        <h2>Análisis Sintáctico</h2>
                        <p>aún no hay nada para mostrar...</p>
                    </div> */}

                    {/* Aquí puedes mostrar el resultado del análisis */}
            {analysisResult && (
                <div className="analysis-result">
                    <h3>Resultado del análisis léxico:</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Lexema</th>
                                <th>Atributo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {analysisResult.simbolos.cabeza && (
                                <tr>
                                    <td>{analysisResult.simbolos.cabeza.dato.lexema}</td>
                                    <td>{analysisResult.simbolos.cabeza.dato.atributo}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                    <h3>Errores encontrados:</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Mensaje</th>
                                <th>Línea</th>
                                <th>Token</th>
                            </tr>
                        </thead>
                        <tbody>
                            {analysisResult.tablaErrores.map((error, index) => (
                                <tr key={index}>
                                    <td>{error.mensaje}</td>
                                    <td>{error.linea}</td>
                                    <td>{error.token}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Más código si es necesario */}



                </div> */
            </div>
        </>
    );

}

export default CodeArea;
