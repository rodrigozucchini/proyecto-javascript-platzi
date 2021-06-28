//const precioOriginal = 120;
//const descuento = 25;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

const coupons = [
    65101,
    56104,
    56451,
];

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value; 

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value; 

    let descuento;

    switch(couponValue) {
        case "65101":
            descuento = 15;
        break;
        case "56104":
            descuento = 25;
        break;
        case "56451":
            descuento = 45;
        break;
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio final es de: $" + precioConDescuento;
}


//console.log({
//    precioOriginal,
//    descuento,
//   porcentajePrecioConDescuento,
//    precioConDescuento,
//});
