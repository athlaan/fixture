ocultar();

var Grupo = null;
var numeroTabla = 0;

function mostrar_ocultar(boton){
	 numeroTabla = boton.id;
	var tabla = document.getElementById("tabla" + numeroTabla);
	ocultar();
	if (tabla.hidden == true){
		tabla.hidden = false;
		obtenerGrupo(numeroTabla);
	}
	else{
		 tabla.hidden = true;

		}

}
function ocultar(){
	var tabla; //crear variable tabla
	var cantidadTabla = 8; //cantidad de tablas
	for(var i = 1; i <= cantidadTabla; i++){
		tabla = document.getElementById("tabla" + i); //agarrar tabla
		tabla.hidden = true; //oculta tabla seleccionada
	}
	var partidos = document.getElementsByClassName("partidos");
	for (var i = 0; i < partidos.length; i++) {
			partidos[i].hidden = true;
	}
}


function mostrarFecha(boton){
	var fecha = boton.id;

	if (Grupo != null){

	var grupo = document.getElementById(Grupo + fecha);
	if(grupo.hidden == true){
		grupo.hidden = false;

	}else {
		grupo.hidden = true;

	}
 }
}

	function actualizarTabla(form){
		form.preventDefault();
		let local = event.target.children[1].textContent;
  	let visitante = event.target.children[4].textContent;
  	let golesLocal = parseInt(event.target.children[2].value);
  	let golesVisitante = parseInt(event.target.children[3].value);
  	let grupo = event.target.parentElement.parentElement.classList
  	let valor_local = 0;
  	let valor_visitante = 0;
		var tabla = document.getElementById("tabla" + numeroTabla)
		for (var i = 1; i <= 4; i++) {
    if (tabla.rows[i].cells[1].textContent === local) {
      valor_local = i;
    }
  }

  for (var j = 1; j <= 4; j++) {
    if (tabla.rows[j].cells[1].textContent == visitante) {
      valor_visitante = j
    }
  }
}



function obtenerGrupo(numero){

	switch (numero) {
		case '1':
		Grupo = "GrupoA";

			break;
		case '2':
		Grupo = "GrupoB"
		break;
		case '3':
		Grupo = "GrupoC"
		break;
		case '4':
		Grupo = "GrupoD"
		break;
		case '5':
		Grupo = "GrupoE"
		break;
		case '6':
		Grupo = "GrupoF"
		break;
		case '7':
		Grupo = "GrupoG"
		break;
		case '8':
		Grupo = "GrupoH"
		break;
		default:
		console.log("default");
	}
}
