import { useState } from 'react'
import '../styles/AnalysisButton.css'
import axios from 'axios';

function AnalysisButton({ code, onAnalysisResult }) {

    const handleAnalisisLexico = async () => {
        try {

            const response = await axios.post('http://localhost:8080/analisisLexico', { texto: code });
            onAnalysisResult(response.data);
            alert('Análisis léxico completado:\n' + JSON.stringify(response.data));
        } catch (error) {
            console.error('Error al realizar el análisis léxico:', error);
            alert('Ocurrió un error al realizar el análisis léxico');

        }
    };

    // Función para manejar el clic en el botón de análisis sintáctico
    const handleAnalisisSintactico = async () => {
        try {

            const response = await axios.post('http://localhost:8080/analisisSintactico', { texto: code });
            onAnalysisResult(response.data);
            alert('Se envio analisis sintactico')
           // alert('Análisis léxico completado:\n' + JSON.stringify(response.data));
        } catch (error) {
            console.error('Error al realizar el análisis léxico:', error);
            alert('Ocurrió un error al realizar el análisis léxico');

        }
    };

    return (
        <div className="botones-container">
            <button className="btn-analisis-lexico" onClick={handleAnalisisLexico}>
                Análisis léxico
            </button>
            <button className="btn-analisis-sintactico" onClick={handleAnalisisSintactico}>
                Análisis sintáctico
            </button>
        </div>
    );
    
}

export default AnalysisButton
