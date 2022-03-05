function descuento(){
    const inputPrecio= document.getElementById("inputPrecio");
    const inputDescuento=document.getElementById("inputDescuento");
    const pDescuento= document.getElementById("precioconDescuento");
    var precio=inputPrecio.value;
    var descuento=inputDescuento.value;

    var porcentajeDescuento=100-descuento;
    precio=(precio*porcentajeDescuento)/100;

    pDescuento.innerText="El precio con descuesto es $"+precio;


    
}