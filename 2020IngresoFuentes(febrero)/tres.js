function mostrar()
{
	var nombre
	var edad
	var sexo
	var estadoCivil
	var seguir
	var hombreCasadoJoven=0
	var nombreCasadoJoven
	var cantidadMujeresCV=0
	var SumaMujeres=0
	var promedioMujeres
	var promedioHombres
	var contadorHombressolteros=0
	var sumaHombresSolteros=0
	var sexoMasviejo
	var NombreMasviejo
	var edadMasviejo=0
	do{
					do
				{
					sexo = prompt("Ingrese sexo; (barbijo, jabono alcohol)");
				}while (!(sexo=="f" || sexo=="m"))
					
				do
				{
				edad = prompt("Ingrese edad");
				edad=parseInt(edad);
				}while (edad<18) ;

				do
				{
					estadoCivil = prompt("Ingrese estado civil");
				}while (!(estadoCivil=="casado" || estadoCivil=="viudo" || estadoCivil=="soltero"))
				
				if(edad < hombreCasadoJoven && estadoCivil=="casado" && sexo=="m" )
				{
					hombreCasadoJoven=edad
					nombreCasadoJoven=nombre
				}
				if( edad > edadMasviejo ){
					edadMasviejo=edad
					sexoMasviejo=sexo
					NombreMasviejo=nombre
				}
			if( sexo=="f" && estadoCivil=="casado" || estadoCivil=="viudo")
			{
				cantidadMujeresCV++
			}
			else if (sexo=="f"){
					sumamujeres= sumamujeres+ edad 
			}
			if(sexo=="m" && estadoCivil=="Soltero")
			{
				contadorHombressolteros++
				sumaHombresSolteros= sumaHombresSolteros+edad
			}


				seguir=prompt("Desea ingresas mas datos?")
	}while(seguir=="s")
promedioMujeres= sumamujeres/cantidadMujeresCV
promedioHombres= sumaHombresSolteros/contadorHombressolteros

document.write("El nombre del hombre casado más joven: " + hombreCasadoJoven)
document.write("Sexo hombre mas viejo " + sexoMasviejo + " Nombre: " + NombreMasviejo)
document.write("La cantidad de mujeres que hay casadas o viudas" + cantidadMujeresCV)
document.write("El promedio de edad entre las hombres: " + promedioHombres)
document.write("El promedio de edad entre las mujeres: "  + promedioMujeres)
}
