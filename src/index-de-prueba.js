//Obtener data y llamar funciones respectivas
encodeGetData = () => {
    let offset = parseInt(document.getElementById("offsetInput").value);
    let string = document.getElementById("string").value;
    document.getElementById("messageDiv").innerHTML = 
    window.cipher.createCipherWithOffset(offset).newObject.encodeMet(string);

}

decodeGetData = () => {
    let offset = parseInt(document.getElementById("offsetInput").value);
    let string = document.getElementById("string").value;
    //document.getElementById("messageDiv").innerHTML = cipher.decode(string, offset);
    document.getElementById("messageDiv").innerHTML = cipher.createCipherWithOffset(offset); 
}
