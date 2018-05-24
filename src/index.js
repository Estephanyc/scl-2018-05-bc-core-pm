//Obtener data y llamar funciones respectivas
encodeGetData = () => {
    let offset = parseInt(document.getElementById("offset").value);
    let string = document.getElementById("string").value;
    cipher.encode(offset, string);
}

decodeGetData = () => {
    let offset = parseInt(document.getElementById("offset").value);
    let string = document.getElementById("string").value;
    cipher.decode(offset, string);
}
