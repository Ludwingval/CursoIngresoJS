
function mostrar() {
	var itemTipo;
	var precio;
	var cantidad
	var marca
	var fabricante
	var contadorDeProductos
	var barbijoCaro = 0
	var contadorDeBarbijos = 0
	var itemMasUnidades
	var fabiricanteBarbijoCaro
	var banderaBarbijo=0
	for (contadorDeProductos = 0; contadorDeProductos < 5; contadorDeProductos++) {
		do {
			itemTipo = prompt("Ingrese itemTipo; (barbijo, jabono alcohol)");
		} while (!isNaN(itemTipo) || itemTipo != "barbijo" && itemTipo != "jabon" && itemTipo != "alcohol");

		do {
			precio = prompt("Invalido. Ingrese precio entre 100 y 300");
			precio = parseInt(precio);
		} while (isNaN(precio) || precio < 100 || precio > 300);
		do {
			cantidad = prompt("Ingrese cantidad ")
		} while (!(cantidad > 0 && cantidad < 1000))

		marca = prompt("Ingrese marca")
		fabricante = prompt("Ingrse fabricante")

		if( itemTipo=="barbijo" && banderaBarbijo==0 || precio>banderaBarbijo){
			barbijoCaro = precio
			fabiricanteBarbijoCaro = fabiricante
			contadorDeBarbijos++
	banderaBarbijo++
		}

	}
}
