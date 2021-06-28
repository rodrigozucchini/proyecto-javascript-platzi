//Código del cuadrado
console.group("Cuadrados");

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
}
//console.log("El permimetro del cuadrado es: " + permimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado;
}
//console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();
//Código del triangulo
console.group("Triangulos");

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//const alturaTriangulo = 5.5;

//console.log("Los lados del triángulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
//console.log("El permimetro del triángulo es: " + permimetroTriangulo + "cm");

function areaTriangulo(base,altura){
    return (base*altura) / 2;
}
//console.log("El area del triángulo es: " + areaTriangulo + "cm^2");
console.groupEnd();
//Código del circulo
console.group("Circulos");

function diametroCirculo(radio){
    return radio * 2
}
//console.log("El diametro del círculo es: " + diametroCirculo + "cm");

const PI = Math.PI;
console.log("PI es: " + PI);

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio); 
    return diametro * PI;
};
//console.log("El perimetro del círculo es: " + perimetroCirculo + "cm");

function areaCirculo(radio){
    return (radio * radio) * PI;
};
//console.log("El area del círculo es: " + areaCirculo + "cm^2");

console.groupEnd();

//Aqui interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado")
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}


function calcularPerimetroTriangulo() {
    const lado1 = document.getElementById('lado1');
    const value1 = lado1.value;
  
    const lado2 = document.getElementById('lado2');
    const value2 = lado2.value;
  
    const base = document.getElementById('base');
    const value3 = base.value;
  
    const perimetro = perimetroTriangulo(Number.parseInt(value1), Number.parseInt(value2), Number.parseInt(value3));
    alert(perimetro);
}

function calcularAreaTriangulo() {

    const altura = document.getElementById('altura');
    const value4 = altura.value;
  
    const base = document.getElementById('base');
    const value3 = base.value;
  
    const area = areaTriangulo(Number.parseInt(value3), Number.parseInt(value4));
    alert(area);
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const perimetro = areaCirculo(value);
    alert(perimetro);
}