//Obtener data y llamar funciones respectivas
encodeGetData = () => {
    let offset = parseInt(document.getElementById("offset").value);
    let string = document.getElementById("string").value;
    document.getElementById("messageDiv").innerHTML = cipher.encode(string, offset); 

}

decodeGetData = () => {
    let offset = parseInt(document.getElementById("offset").value);
    let string = document.getElementById("string").value;
    document.getElementById("messageDiv").innerHTML = cipher.decode(string, offset); 
}
