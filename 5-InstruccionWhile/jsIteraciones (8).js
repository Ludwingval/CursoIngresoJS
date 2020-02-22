function mostrar()
{
var numero
	var flag=0;
	var positivo=0;
	var negativo=1;

	do{
		numero= parseInt(prompt("Ingrese un numero"))
	while(isNaN(numero))
	{		numero= parseInt(prompt("Esto no es un numero"))}
							   
	if (numero >= 0){positivo = positivo + numero} 
	else
	{ negativo = negativo * numero
		flag=1}
	seguir = prompt ("Quiere ingresar otro numero?") 
	
	}
	while (seguir == "s"){
	if(flag==0)
	negativo=0;}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN