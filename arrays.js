var arrayNumbers = [12,14,16,18,20]
console.log(arrayNumbers)
//pop: Quitar el ultimo elemento de un array
var ultimoElemento = arrayNumbers.pop()
console.log(` Ultimo elemento eliminado: ${ultimoElemento}`)
console.log(arrayNumbers)

//shift: Quitar el primer elemento de un array
var primerElemetno = arrayNumbers.shift()

console.log(`Primer elemento eliminado: ${primerElemetno}`)
console.log(arrayNumbers)


//push: Agregar un elemento al final del array
arrayNumbers.push(120)
console.log(arrayNumbers)

//unshift: Agregar un elemento al incio del array
arrayNumbers.unshift(46)
console.log(arrayNumbers)


//splice:  Insertar un elemento en una posicion especifica
//primer argunto: la posición que quieres reemplazar
//segundo argumento: numero de elementos a eliminar hacia la derecha, si le pasas 0 no elimina nonguno
//tercer argumento:  el elemnto que quiero reemplazar 

arrayNumbers.splice(2, 0, 300)
console.log(arrayNumbers)


//Contatenar arrays
var arrayNames = ["Fran", "Mauricio", "Jose", "Luis"]

var arrayNamesYNumbers = arrayNames.concat(arrayNumbers)
console.log(arrayNamesYNumbers)

var arrayNamesYNumbers2 = [...arrayNames, ...arrayNumbers]
console.log(arrayNamesYNumbers2)


//Calcular cuantos elementos tiene el array
console.log(`Nmr de elementos de arrayNames: ${arrayNames.length}`)
console.log(`Nmr de elementos de arrayNumbers: ${arrayNumbers.length}`)
console.log(`Nmr de elementos de arrayNamesYNumbers2:  ${arrayNamesYNumbers2.length}`)