window.cipher = {
  encode : (offset,string) =>
   {
    
    // ciclo para recorrer todas los caracteres de la frase 
    for (let i = 0; i < string.length; i ++) 
    {
      
      //convertir a mayusculas el string
      string = string.toUpperCase();

      // 1.convertir a codigo ASCII el caracter
      let toASCCII = string.charCodeAt(i);  
      
      // 2.Obtener la nueva posicion en ASCCII
      var newPosition = ((toASCCII - 65 + offset) % 26 ) + 65;
      
      // No remplazar el caracter de los espacios
      if (toASCCII == 32){ newPosition = 32; }
      
      //3.convertir de ASCCII a caracter la nueva posicion
      let fromASCCII = String.fromCharCode(newPosition);

      //mostrando los nuevos caracteres
      document.getElementById("message").innerHTML =
      document.getElementById("message").innerHTML + fromASCCII;
    }
    
  }
  ,
  decode: (offset, string) => 
  {
    
  }
  
}
