function mostrar() {
  var peso
  var precio
  var ingrediente
  var seguir
  do {
    do {
      itemTipo = prompt("Ingrese itemTipo; (barbijo, jabono alcohol)");
    } while (!isNaN(itemTipo) || itemTipo != "barbijo" && itemTipo != "jabon" && itemTipo != "alcohol");

    do {
      precio = prompt("Invalido. Ingrese precio entre 100 y 300");
      precio = parseInt(precio);
    } while (isNaN(precio) || precio < 100 || precio > 300);
    
    do
    {
    ingrediente = prompt("Ingese ingreditente ('v', 'a' o 'm')(vegetal,animal o mezcla )")
    } while (!(ingrediente == "v" || ingrediente == "a" || ingrediente == "m"))
    
    seguir = prompt("Desea seguir?")
  } while (seguir == "s")
}
