import { useState } from 'react'
import '../styles/AnalysisButton.css'

function AnalysisButton() {

    // Función para manejar el clic en el botón de análisis léxico
    const handleAnalisisLexico = async () => {
        // Llamada a la API para análisis léxico
        // try {
        //     const response = await fetch('url_analisis_lexico');
        //     const data = await response.json();
        //     console.log('Resultado del análisis léxico:', data);
        // } catch (error) {
        //     console.error('Error en el análisis léxico:', error);
        // }
        alert("Funcional en fase 1");
    };

    // Función para manejar el clic en el botón de análisis sintáctico
    const handleAnalisisSintactico = async () => {
        // Llamada a la API para análisis sintáctico
        // try {
        //     const response = await fetch('url_analisis_sintactico');
        //     const data = await response.json();
        //     console.log('Resultado del análisis sintáctico:', data);
        // } catch (error) {
        //     console.error('Error en el análisis sintáctico:', error);
        // }
        alert("Funcional en fase 2");
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
