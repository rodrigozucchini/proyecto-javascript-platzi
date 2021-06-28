var suma = 0;
const cafes = []
cafes.push({
    name: "Freddy",
    coffeeMensual: 30,
});
cafes.push({
    name: "Rodrigo",
    coffeeMensual: 50,
});
cafes.push({
    name: "Juan",
    coffeeMensual: 11,
});
cafes.push({
    name: "Angel",
    coffeeMensual: 21,
});
cafes.push({
    name: "Rico",
    coffeeMensual: 9,
});
cafes.push({
    name: "Reddys",
    coffeeMensual: 10,
});
cafes.push({
    name: "Seul",
    coffeeMensual: 13,
});
cafes.push({
    name: "Rocio",
    coffeeMensual: 4,
});
cafes.push({
    name: "Sion",
    coffeeMensual: 2,
});
cafes.push({
    name: "Juana",
    coffeeMensual: 0,
});
cafes.push({
    name: "Vale",
    coffeeMensual: 55,
});
cafes.push({
    name: "Leal",
    coffeeMensual: 33,
});


cafes.forEach(function(elemento, indice){
    suma += elemento["coffeeMensual"];
});
console.log('Total de tazas cafes tomados por los empleados ' + suma);

promedioCafes = Math.floor(suma / 12);
console.log('Promedios de cafes tomados por los empleados ' + promedioCafes + ' tazas');
