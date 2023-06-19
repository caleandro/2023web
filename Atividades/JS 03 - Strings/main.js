function processarFrutas(fruta1, fruta2, fruta3, fruta4, fruta5) {
    
    const length1 = fruta1.length;
    const length2 = fruta2.length;
    const length3 = fruta3.length;
    const length4 = fruta4.length;
    const length5 = fruta5.length;
  
    
    const substring1 = fruta1.substring(0, 3);
    const substring2 = fruta2.substring(0, 3);
    const substring3 = fruta3.substring(0, 3);
    const substring4 = fruta4.substring(0, 3);
    const substring5 = fruta5.substring(0, 3);
  
    const trimmedFruta1 = fruta1.trim();
    const trimmedFruta2 = fruta2.trim();
    const trimmedFruta3 = fruta3.trim();
    const trimmedFruta4 = fruta4.trim();
    const trimmedFruta5 = fruta5.trim();
  
    
    const lowerCaseFruta1 = trimmedFruta1.replace(trimmedFruta1, trimmedFruta1.toLowerCase());
    const lowerCaseFruta2 = trimmedFruta2.replace(trimmedFruta2, trimmedFruta2.toLowerCase());
    const lowerCaseFruta3 = trimmedFruta3.replace(trimmedFruta3, trimmedFruta3.toLowerCase());
    const lowerCaseFruta4 = trimmedFruta4.replace(trimmedFruta4, trimmedFruta4.toLowerCase());
    const lowerCaseFruta5 = trimmedFruta5.replace(trimmedFruta5, trimmedFruta5.toLowerCase());
  
    
    const listagemFrutas = `${lowerCaseFruta1}, ${lowerCaseFruta2}, ${lowerCaseFruta3}, ${lowerCaseFruta4}, ${lowerCaseFruta5}`;
  
    return {
      length: [length1, length2, length3, length4, length5],
      substring: [substring1, substring2, substring3, substring4, substring5],
      listagemFrutas: listagemFrutas
    };
  }
  
  
  const frutas = processarFrutas(" Banana", "Abacaxi", "Laranja", "   Maçã", "Pera ");
  console.log(frutas);