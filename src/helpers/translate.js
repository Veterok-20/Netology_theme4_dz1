

export default function translate(value) {    
    let colorHEX = value;
    let colorRGB = "";
    let arrStr = [], arrDec = [];    
    try {
        colorHEX = colorHEX.split('').slice(1, 7).join('');        
        arrStr[0] = colorHEX.split('').splice(0, 2).join('');
        arrStr[1] = colorHEX.split('').splice(2, 2).join('');
        arrStr[2] = colorHEX.split('').splice(4, 2).join('');       
        arrDec = arrStr.map(arr => {
            return parseInt(arr, 16)
        });
        colorRGB = "rgb(" + String(arrDec[0]) + "," + String(arrDec[1]) + "," + String(arrDec[2]) + ")";
        return colorRGB
    } catch (err) { return colorRGB = "Ошибка!" }   
}

