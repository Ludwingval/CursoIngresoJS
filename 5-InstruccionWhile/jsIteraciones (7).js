function mostrar()
{
var seguir
	var numero
	var promedio
	var acumulador=0
	var contador=0
	 
	do{
		numero= parseInt(prompt("Ingrese un numero"))
	while(isNaN(numero))
	{		numero= parseInt(prompt("Esto no es un numero"))}}
	while(seguir == "s"){

	acumulador = acumulador + numero
	contador++;
	seguir = prompt("Quiere ingresar otro numero?")}
	 
	promedio= acumulador / contador
	
	 

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio

}//FIN DE LA FUNCIÓN