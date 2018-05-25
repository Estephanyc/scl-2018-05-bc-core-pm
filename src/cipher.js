window.cipher = {
  
  encode : (string,offset) =>
   {
    let message = "";
      // ciclo para recorrer todas los caracteres de la frase 
    for (let i = 0; i < string.length; i ++) 
    {      
      // 1.convertir a mayusculas el string
      string = string.toUpperCase();

      // 2.convertir a codigo ASCII el caracter
      const toASCCII = string.charCodeAt(i);  
      
      // 3.Obtener la nueva posición en ASCCII
      let newPosition = ((toASCCII - 65 + offset) % 26 ) + 65;
      
      // 4.No remplazar el caracter de los espacios
      if (toASCCII == 32){ newPosition = 32; }
      
      // 5.convertir de ASCCII a caracter la nueva posición
      const fromASCCII = String.fromCharCode(newPosition);
 
      // 6. agregando los caracteres al mensaje final
      message += fromASCCII; 
    }
  // 7.Retornando el mensaje     
  return message; 
  },

  decode: (string,offset) => 
  {
    let message = "";
    for (let i = 0; i < string.length; i++) 
    {
      // 1.convertir a mayusculas el string
      string = string.toUpperCase();

      // 2.convertir a codigo ASCII el caracter
      const toASCCII = string.charCodeAt(i);

      // 3.Obtener la nueva posición en ASCCII
      let newPosition = ((toASCCII + 65 - offset) % 26) + 65;

      // 4.No remplazar el caracter de los espacios
      if (toASCCII == 32) { newPosition = 32; }

      // 5.convertir de ASCCII a caracter la nueva posición
      const fromASCCII = String.fromCharCode(newPosition);

      // 6. agregando los caracteres a un vector
      message += fromASCCII; 
    }
  // 7.Retornando el mensaje 
  return message;
    
  }
  
}
