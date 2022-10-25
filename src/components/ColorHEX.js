import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

export default function ColorHEX() {
    const [form, setForm] = useState({
        colorHEX: "",
        colorRGB: "",        
    });
    const inputRef=useRef();
    

    // useEffect((form) => {
    //     console.log(form);
    //     document.getElementsByName("rgb").value = form.colorRGB;
    //   }, [form.colorRGB]);

    const Translate = (form) => {
        console.log("formTrans", form);
        let { colorHEX, colorRGB } = form;
       
        let arrStr = [], arrDec = [];
        colorHEX=colorHEX.split('').slice(1,7).join('');
        console.log("colorHEX=", colorHEX);
       
        arrStr[0] = colorHEX.split('').splice(0,2).join('');
        arrStr[1] = colorHEX.split('').splice(2,2).join('');
        arrStr[2] = colorHEX.split('').splice(4,2).join('');
        console.log(arrStr);
        arrDec = arrStr.map(arr => {
            return arr.parceInt(arr, 16)
        });
        colorRGB = "rfg(" + String(arrDec[0]) + "," + String(arrDec[1]) + "," + String(arrDec[2]) + ")";
        return colorRGB
    };

    const handleChange = ({ target }) => {
        const { name, value } = target;
       
        setForm(PrevForm => { 
            // console.log(PrevForm);                         
            // console.log("valuelength=", value.length);
            
            while (value.length <= 7) {
                switch (name) {
                    case "hex":                        
                        return ({ ...PrevForm, colorHEX: value})
                    case "rgb":
                        // return ({ ...PrevForm})
                        break;
                }
            }
            // inputRef.current.value = Translate;
           
            console.log("Translate:", Translate(form));

            return ({...PrevForm, colorHEX: PrevForm.colorHEX, colorRGB: Translate })          
           
        })
    }

    return (
        <div className="conteiner">
            <form>
                <input name="hex" onChange={handleChange} value={form.colorHEX} />
                {/* <input name="rgb" onChange={handleChange} value={form.colorRGB} /> */}
                <input name="rgb"  ref={inputRef} defaultValue={''} />
            </form>
        </div>
    )

}
