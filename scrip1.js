function ejer1(){
    var respuesta = prompt("¿Eres bellisimo/a?");
    if (respuesta.toLowerCase() === "sí") {
        alert("Ciertamente");
    } else if (respuesta.toLowerCase() === "no") {
        alert("No te creo");
    } else {
        alert("Respuesta no válida. Por favor, responde 'sí' o 'no'.");
    }
}
function ejer2(){
    var a=parseInt( prompt("Ingrese un numero"));
    if(a%2==0){
        alert(a +" número es divisible entre 2");
    }else{
        alert(a +" número no es divisible entre 2");
    }
}
function ejer3(){
    let a=prompt("Ingrese un número ");
    if(a%2==0){
        alert(a +" número es par");
    }else{
        alert(a +" número no es par");
    }
}
function ejer4(){
    let a=prompt("Ingrese un numero ");
    if(a==1000){
        alert("Ganaste un premio ");
    }else{
        alert("Lo sentimos sigue participando");
    }
}
function ejer5(){
    let a=prompt("Ingrese el primer numero ");
    let b=prompt("Ingrese el segundo numero ");
    if(a<b){
        alert(a+ " Es el número menor ");
    }else{
        alert(b+ " Es el numero menor ");
    }
}
function ejer6(){
    let a=prompt("Ingrese el primer numero ");
    let b=prompt("Ingrese el segundo numero ");
    let c=prompt("Ingrese el primer numero ");
    if(a>b){
        if(a>c){
            alert(a+ " es el numero mayor");
        }else if(a==c){
            alert(a+ " es el numero mayor");
        }else{
            if(c>b){
                alert(c+" es el numero mayor");
            }else{
                alert(c+" es el numero mayor");
            }
        }
    }else if(b>c){
            alert(b+" es el numero mayor");

    }else{
        if(a==b){
            if(b>c){
                alert(b+" es el numero mayor")
            }
        }else if(b>a){
            if(b>c){
                alert(b+" es el numero mayor");
            }else{
                alert(c+" es el numero mayor");
            }
        }
    }
}
function ejer7(){
    var a=prompt("Ingrese un dia de la semana ");
    if(a == "Lunes"){
        alert("Hoy es "+a+" feliz comienzo de semana");
    }else if(a == "Sabado"){
        alert("Hoy es "+a+" feliz fin de semana");
    }else if(a == "Domingo"){
        alert("Hoy es "+a+" ve y se feliz ");
    }else{
        alert("Hoy es "+a+" que tengas un buen dia");
    }
}
function ejer8(){
   let a=prompt("Ingrese una calificación entre 1-10 ")
   if(a>=1 && a<=10){
    if(a<6){
        alert("Reprobado");
    }else if(a>=6 && a<=8){
        alert("Regular");
    }else if(a==9){
        alert("Bien");
    }else if(a==10){
        alert("Excelente");
    }
   }else{
    alert("error");
   }
}
function ejer9(){
    var a=prompt("Ingrese el helado que quiere ");
    if(a=="helado de oreo"){
        alert(a+" cuesta 10 MXN");
    }else if (a=="helado de kitkat "){
        alert(a+" cuesta 15 MXN");
    }else if (a=="helado de brownie"){
        alert(a+" cuesta 20 MXN");
    }else{
        alert("No tenemos este topping "+" el helado sin topping  cuesta 50 MXN");
    }
}
function ejer10(){
    alert("Bienvenido escoja una de las opciones ");
    alert(" 1. Course $4999 MXN \n 2. Carrera $3999 MXN \n 3. Master $2999 MXN");
    let a=prompt(" ");
    let b=0;
    let c=0;
    if(a==1){
        b=4999;
    }else if(a==2){
        b=3999;
    }else if(a==3){
        b=2999;
    }
    var res=prompt("¿Cuenta con alguna beca ? s/n");
    if(res=="s"){
        alert("1. Beca Facebook \n 2. Beca Google \n 3. Beca Jesua");
        let gg=prompt(" ");
        if(gg==1){
            c=b*0.20;
        }else if(gg==2){
            c=b*0.15;
        }else if(gg==3){
            c=b*0.5;
        }
    }
    let des=b-c;
    alert("PAGO MENSUAL \n"+"Plan escogido "+b+ "\n"+"Descuento "+c+ "\n"+"total a pagar "+des  );
    if(a==1){
        alert("1. COURSE \n"+"Total a pagar "+des*2);
    }else if(a==2){
        alert("2. CARRERA \n"+"Total a pagar "+des*6);
    }else if(a==3){
        alert("3. MASTER \n"+"Total a pagar "+des*12);
    }
}
function ejer11(){
    let b=prompt(" Ingrese los kilometros recorridos");
    alert("Seleccione su tipo de vehiculo \n 1. coche \n 2. moto \n 3. autobus ");
    let a=prompt(" ");
    let c=0;
    if(a==1){
        c=b*0.20;
    }else if(a==2){
        c=b*0.10;
    }else if(a==3){
        c=b*0.5;
    }
    if(b>=0 && b<=100){
        c=c+5;
    }else if(b>100){
        c=c+10;
    }
    alert("Total a pagar es de "+c);
}