function mostrar()
{

    var numero
    var contadoresDivisores = 0
    numero = parseInt(prompt("Ingrese un numero"));
    while (isNaN(numero)) 
    numero = parseInt(prompt("Esto no es un numero"));
  
for ( var i=1; i<= numero; i++){
  if (numero % i ==0){
      console.log(i)
      contadoresDivisores++
  }
}

console.log("Cantidad de Divisores encontrados"+ contadoresDivisores)


}//FIN DE LA FUNCIÓN