function mostrar()
{
	var numero
	var flag=0
	var minimo
	var maximo;

	do{
		numero= parseInt(prompt("Ingrese un numero"))
	while(isNaN(numero))
	{		numero= parseInt(prompt("Esto no es un numero"))}

							   
	if(flag==0 || numero > minimo)
	{ minimo = numero}
	if (flag== 0 || numero < maximo)
	{maximo = numero
	flag =1}
	seguir = prompt("Quiere ingresar otro numero?")
	}
	while (seguir == "s"){
		if(flag==0)
		minimo=0;}

document.getElementById('maximo').value=minimo;
document.getElementById('minimo').value=maximo;


}//FIN DE LA FUNCIÓN