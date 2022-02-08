const hexaValues = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]
let randomColor = () => {
    let Hex = "#";
    for (i=1;i<=6;i++)
    {
        let RandomIndexofhexvalues = Math.floor(hexaValues.length * Math.random());
        let randomValue = hexaValues[RandomIndexofhexvalues];
        Hex = Hex + randomValue;
    
    }
    let y = Hex;
    return Hex;
}
let ColorButton = document.getElementById('Change');
var ColorName = document.getElementById('Colour');
ColorButton.onclick = () => {
    document.body.style.backgroundColor = randomColor();
    ColorName.innerText = randomColor();
}