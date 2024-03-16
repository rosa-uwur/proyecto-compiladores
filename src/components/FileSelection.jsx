import { useState } from 'react'
import '../styles/FileSelection.css'
import { MdCatchingPokemon } from "react-icons/md";


function FileSelection() {

    return (
        <>
            <div className='fileselection-container'>
                <div className='fileselection-inner'>
                    <MdCatchingPokemon />
                    <p id='fileselector-p'>  Elige un archivo de tu computadora!</p>
                    <form action="/upload" method="post" enctype="multipart/form-data">
                        <input type="file" name="archivo" id="archivo" accept=".eve" />
                        <input type="submit" value="Subir Archivo" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default FileSelection
