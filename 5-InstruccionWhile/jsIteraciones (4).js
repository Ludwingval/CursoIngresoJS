function mostrar()
{
var numero
	numero = parseInt(prompt("ingrese un número entre 0 y 10."));
	//while(!(numero <=0 && numero >=9)){numero=prompt("Error, ingrese nuevamente")}
while(!(numero >=0 || numero <10)){numero = parseInt(prompt("Numero invalido. ingrese un número entre 0 y 10."))}

document.getElementById("Numero").value=numero
}//FIN DE LA FUNCIÓN