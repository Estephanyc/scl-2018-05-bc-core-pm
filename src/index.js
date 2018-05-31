getOffset = () => {
    let offset = parseInt(document.getElementById("offsetInput").value);
    if (offset < 0) { alert("Ingrese un numero positivo"); }
    let sendOffset = window.cipher.createCipherWithOffset(offset);
    return sendOffset;
}
getString = () => {
    let string = document.getElementById("string").value;
    return string;
}
encodeData = () => {
    let offset = getOffset();
    document.getElementById("messageDiv").innerHTML = offset.encode(getString());
}
decodeData = () => {
    let offset = getOffset();
    document.getElementById("messageDiv").innerHTML = offset.decode(getString());
}