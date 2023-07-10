// Array Unidimensional
var arrayUnidimensional = ["HTML", 1993, "CSS", 1996, "Bootstrap", 2011, "JS", 1995, "React", 2013, "Java", 1995];

console.log("Array Unidimensional:", arrayUnidimensional);
console.log("Tamanho do Array:", arrayUnidimensional.length);
console.log("Informação 'JS':", arrayUnidimensional[6]);

var arrayString = arrayUnidimensional.toString();
console.log("Array convertido para String:", arrayString);
console.log("Tipo da String:", typeof arrayString);

var arrayStringModificado = arrayUnidimensional.join("/");
console.log("Array com separador modificado:", arrayStringModificado);

arrayUnidimensional.unshift("IOS");
console.log("Novo Array com IOS no início:", arrayUnidimensional);
console.log("Quantidade de posições atualizadas:", arrayUnidimensional.length);

// Array Bidimensional
var arrayBidimensional = [
  ["HTML", 1993, "CSS", 1996],
  ["Bootstrap", 2011, "JS", 1995],
  ["React", 2013, "Java", 1995]
];

console.log("Array Bidimensional:", arrayBidimensional);
console.log("Tamanho do Array:", arrayBidimensional.length);
console.log("Ano 2013:", arrayBidimensional[1][1]);

arrayBidimensional[1][2] = "JavaScript";
console.log("Array com 'JS' alterado para 'JavaScript':", arrayBidimensional);

arrayBidimensional[2].splice(2, 2);
console.log("Array sem a informação 'Java':", arrayBidimensional);

arrayBidimensional[2].push("pipoca");
console.log("Array com 'pipoca' inserido:", arrayBidimensional);



