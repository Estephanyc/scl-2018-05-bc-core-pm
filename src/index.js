//Obtener data y llamar funciones respectivas
encodeGetData = () => {
    let offset = parseInt(document.getElementById("offsetInput").value);
    if (offset < 0){ alert("Ingrese un numero positivo");}
    let string = document.getElementById("string").value;
    document.getElementById("messageDiv").innerHTML = cipher.encode(string, offset); 

}

decodeGetData = () => {
    let offset = parseInt(document.getElementById("offsetInput").value);
    if (offset < 0) { alert("Ingrese un numero positivo"); }
    let string = document.getElementById("string").value;
    document.getElementById("messageDiv").innerHTML = cipher.decode(string, offset); 
}
