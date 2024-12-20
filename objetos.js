var persona = {
    //* PROPIEDADES QUE TIENEN:
    //* clave : valor
    "name": "Fran Espino",
    "age": 24,
    "profession": "Ing. Informático"
}

//Accediendo al valor de un objeto
console.log(persona.name)

//Modificar el valor de un objeto
persona.age = 25
console.log(persona.age)

//Agregar propiedad con clave height y valor 1.68
persona.height = 1.68
console.log(persona)

//Eliminar una propiedad 
delete persona.height
console.log(persona)

//Comprobar si una propiedad existe
if("name" in persona){
    console.log("si es una propiedad")
}else{
    console.log("no es una propiedad")
}

//Conocer todas las claves de mi objeto
for(let clave in persona){
    console.log(clave )
}


var trabajador = {
    "jobPosition" : "Software Engeenir",
    //Spread operator: permite extraer todas las propiedad de un objeto
    ...persona
}

console.log(trabajador)


//Obtener un array con las claves del objeto
var arrayKeys = Object.keys(trabajador)
console.log(arrayKeys)

var arrayValues = Object.values(trabajador)
console.log(arrayValues)

var propsObj = Object.entries(trabajador)
console.log(propsObj)


//Los arrays son libres
const estudiante1 = {
    nombre: "Paolo David",
    edad: 22,
    cursos: ["Especialización en fronted", "Desarrollo de apps"],
    detalles:{
        escuela: "Idat",
        semanas: 16,
        horario: {
            dia: "11:00 am",
            tarde: "3:00 pm",
            noche: "7.30 pm"
        }
    }
}


const arrayEstudiantes = [
    { ...estudiante1},
    {
        nombre: "Fran Espino ",
        edad: 24,
        cursos: ["Especialización en fronted", "Desarrollo de apps"],
        detalles:{
            escuela: "Idat",
            semanas: 16,
            horario: {
                dia: "11:00 am",
                tarde: "3:00 pm",
                noche: "7.30 pm"
            }
        }
    }
]

console.log(arrayEstudiantes)