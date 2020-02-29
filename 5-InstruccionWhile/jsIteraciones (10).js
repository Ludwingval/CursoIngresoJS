function mostrar() {
	var numero
	var seguir
	var sumanegativos = 0
	var sumapositivos = 0
	var cantidadpositivos = 0
	var cantidadnegativos = 0
	var cantidadceros
	var cantidadpares
	var respuesta
	do {
		numero = parseInt(prompt("Ingrese un numero: "))
		while (isNaN(numero)) 
		{
			numero = parseInt(prompt("Eso no es un numero. Intentalo de nuevo"))
		}
		if (numero < 0) 
		{
			cantidadnegativos++;
			sumanegativos = sumanegativos+ numero;
		}
		else
		{
			if (numero>0){
				cantidadpositivos++
				sumapositivos= sumapositivos+ numero;
			} 
			else {
				cantidadceros++
			}
		if( numero % 2 ==  0)
		{
			cantidadpares++
		}

		}
		seguir = prompt("Quiere continuar?:");
	} 
	while (seguir == 's');
	document.write("El promedio de los positivos: " + sumapositivos/cantidadpositivos )
	document.write("<br>Promedio de los negativos: " + sumanegativos/cantidadnegativos)
	document.write("<br> Cantidad de numeros pares: " + )
	


	


}
