//OPERACIONES SIMPLES

//FUNCION SUMA
function sumar (x,y){
    let suma= +x + +y;
    return suma;
}

function resultadoSuma(){

    let numero1=document.getElementById("numero1");
    let numero2 =document.getElementById("numero2");
    let resultado =document.getElementById("visorResultado");
    let elementoSuma= sumar(numero1.value , numero2.value);
    resultado.value=elementoSuma;

}

//FUNCION RESTA
function restar (x,y){
    let resta= +x - +y;
    return resta;
}

function resultadoResta(){

    let numero1=document.getElementById("numero1");
    let numero2 =document.getElementById("numero2");
    let resultado =document.getElementById("visorResultado");
    let elementoResta= restar(numero1.value , numero2.value);
    resultado.value=elementoResta;

}

//FUNCION MULTIPLICACION
function multiplicar (x,y){
    let multi= +x * +y;
    return multi;
}

function resultadoMultiplicacion(){

    let numero1=document.getElementById("numero1");
    let numero2 =document.getElementById("numero2");
    let resultado =document.getElementById("visorResultado");
    let elementoMultiplicacion= multiplicar(numero1.value , numero2.value);
    resultado.value=elementoMultiplicacion;

}

//FUNCION DIVISION
function division (x,y){
    let divisor= +x / +y;
    return divisor;
}

function resultadoDivision(){

    let numero1=document.getElementById("numero1");
    let numero2 =document.getElementById("numero2");
    let resultado =document.getElementById("visorResultado");
    let elementoDivision= division(numero1.value , numero2.value);
    resultado.value=elementoDivision;

}

//OPERACIONES COMPLEJAS

//FUNCION POTENCIA
function potencia (x,y){
    let pot= Math.pow(+x,+y)
    return pot;
}

function resultadoPotencia(){

    let numero1=document.getElementById("numero1");
    let numero2 =document.getElementById("numero2");
    let resultado =document.getElementById("visorResultado");
    let elementoPotencia= potencia(numero1.value , numero2.value);
    resultado.value=elementoPotencia;

}

//FUNCION RAIZ CUADRADA
function raiz (x){
    let root = Math.sqrt(+x)
    return root;
}

function resultadoRaiz(){

    let numero1=document.getElementById("numero1");
    let numero2 =document.getElementById("numero2");
    let resultado =document.getElementById("visorResultado");
    let elementoRaiz= raiz(numero1.value , numero2.value);
    resultado.value=elementoRaiz;

}

//FUNCION VALOR ABSOLUTO
function valorAbs (x){
    let abs = Math.abs(+x)
    return abs;
}

function resultadoAbs(){

    let numero1=document.getElementById("numero1");
    let numero2 =document.getElementById("numero2");
    let resultado =document.getElementById("visorResultado");
    let elementoAbs= valorAbs(numero1.value , numero2.value);
    resultado.value=elementoAbs;

}

//FUNCION RANDOM
function getRandom (){
    
    return Math.random();
}

function resultadoRandom(){

    let resultado =document.getElementById("visorResultado");
    let elementoRandom= getRandom();
    resultado.value=elementoRandom;

}

//FUNCION ROUND
function getRound (x){
    
    return Math.round(+x);
}

function resultadoRound(){

    let resultado =document.getElementById("visorResultado");
    let elementoRound= getRound(resultado.value);
    resultado.value=elementoRound;

}

//FUNCION FLOOR
function getFloor (x){
    
    return Math.floor(+x);
}

function resultadoFloor(){

    let resultado =document.getElementById("visorResultado");
    let elementoFloor= getFloor(resultado.value);
    resultado.value=elementoFloor;

}

//FUNCION CEIL
function getCeil (x){
    
    return Math.ceil(+x);
}

function resultadoCeil(){

    let resultado =document.getElementById("visorResultado");
    let elementoCeil= getCeil(resultado.value);
    resultado.value=elementoCeil;

}