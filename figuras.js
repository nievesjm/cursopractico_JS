function cuadradoArea() {
    const input=document.getElementById("Inputcuadrado");
    const value=input.value;
    var area=value*value;
    alert (area);
}

function trianguloIsosceles(){
    const input1= document.getElementById("ladoUnoTriangulo");
    const input2= document.getElementById("ladoDosTriangulo");
    var value1=input1.value;
    var value2= input2.value;

    if(value1!=value2){
        value1=value1*value1;
        value2=value2*value2; 
        value2=value2/4;
        var altura= Math.sqrt(value1-value2);
        alert(altura);
    }

    
    

}