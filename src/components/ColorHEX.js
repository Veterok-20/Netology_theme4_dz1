import React, { useState } from 'react';
import PropTypes from 'prop-types';
import translate from '../helpers/translate';


export default function ColorHEX() {
    const [inputValue, setInputValue] = useState({
        colorHEX: "",
    });
    const [result, setResult] = useState({
        colorRGB: "",
    });

    const style = {
        backgroundColor: result.colorRGB === "Ошибка!" ? "coral" : result.colorRGB,
        // backgroundColor: "coral",
    }

    const handleChange = ({ target }) => {
        const { value } = target;
        setInputValue(PrevInputValue => {
            if (value.length < 7) {
                return ({ ...PrevInputValue, colorHEX: value })
            }
            if (value.length === 7) {
                setResult({ colorRGB: translate(value) })
            };
            return ({ ...PrevInputValue, colorHEX: value })
        });
    }

    return (
        <div className="conteiner" style={style}>
            <input className="inputHex" name="hex" onChange={handleChange} value={inputValue.colorHEX} />
            <div className="resultRgb" name="rgb">{result.colorRGB}</div>
        </div>
    )

}
