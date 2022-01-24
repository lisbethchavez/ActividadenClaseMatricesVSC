//every: verifica que todos los elementos del array cumplan con la misma  condición
//Si todos los elementos cumplen con la condición, se vuelve verdadero si uno de ellos no la cumple 
// se vuelve falso 

const numeros = [10,20,30,40,50,-5];

//Determinar si todos los elementos del array de numeros son positivos 

const soloPositivos = numeros.every(data=>{
    return data>0;
});

const soloPositivos2 = numeros.every(data=>data>0);

console.log(soloPositivos);

//forEach ,every, filter

//Verificar si todos los elementos de una matriz son positivos

const matriz = [[1,2,3],[4,5,6],[7,8,9]];

console.log("Matriz Positiva",positivos);
matriz.forEach(function(data){
    console.log(data.every(data=>data>0))
});