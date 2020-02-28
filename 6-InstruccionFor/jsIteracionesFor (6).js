function mostrar() {
    var numero
    var contadoresPares = 0
    numero = parseInt(prompt("Ingrese un numero"));
    while (isNaN(numero)) 
    numero = parseInt(prompt("Esto no es un numero"));
  
for ( var i=1; i<= numero; i++){
  if (i%2==0){
      console.log(i)
      contadoresPares++
  }
}

console.log("Cantidad de")
}//FIN DE LA FUNCIÓN