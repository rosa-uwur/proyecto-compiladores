import React, { useRef } from 'react';

const ResaltadoTextarea = ({ handleChange, obtenerTexto }) => {
    const divRef = useRef(null);

    return (
        <div
            ref={divRef}
            contentEditable
            className="resaltado-textarea"
            onInput={() => handleChange(obtenerTexto())}
        />
    );
};

export default ResaltadoTextarea;
