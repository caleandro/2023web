// Definindo as frutas
const fruta1 = " Banana";
const fruta2 = "Abacaxi";
const fruta3 = "Laranja";
const fruta4 = "   Maçã";
const fruta5 = "Pera ";

// Utilizando os métodos e exibindo os resultados no console
console.log(`Comprimento (length): ${fruta1.length}, ${fruta2.length}, ${fruta3.length}, ${fruta4.length}, ${fruta5.length}`);
console.log(`Frutas em caixa baixa (toLowerCase): '${fruta1.toLowerCase()}', '${fruta2.toLowerCase()}', '${fruta3.toLowerCase()}', '${fruta4.toLowerCase()}', '${fruta5.toLowerCase()}'`);
console.log(`Frutas sem espaços em branco no início (trim): '${fruta1.trim()}', '${fruta2.trim()}', '${fruta3.trim()}', '${fruta4.trim()}', '${fruta5.trim()}'`);
console.log(`Substring (3 primeiros caracteres): '${fruta1.substring(0, 3)}', '${fruta2.substring(0, 3)}', '${fruta3.substring(0, 3)}', '${fruta4.substring(0, 3)}', '${fruta5.substring(0, 3)}'`);
