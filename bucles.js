//*TODOS LOS ARRAYS EMPIEZAN EN CERO

var arrayNumbers = [12, 14, 16, 18, 20];
var arrayNames = ["Fran", "Mauricio", "Jose", "Luis"];
var arrayConcat = [...arrayNames, ...arrayNumbers];

let i = 0;
while (i < arrayConcat.length) {
  //console.log(arrayConcat[i])
  i++;
}

for (let i = 0; i < arrayConcat.length; i++) {
  //console.log(arrayConcat[i])
}

for (let element of arrayConcat) {
  //  console.log(element)
}

for (let indice in arrayConcat) {
  //   console.log(arrayConcat[indice])
}

arrayConcat.forEach((elemento) => {
  //console.log(elemento)
});

arrayConcat.map((elemento) => console.log(elemento));
