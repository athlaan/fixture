ocultar();

var Grupo = null;
var numeroTabla = null;

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
	let local = form.target.children[0].textContent;
  	let visitante = form.target.children[3].textContent;
  	let golesLocal = parseInt(event.target.children[1].value);
  	let golesVisitante = parseInt(event.target.children[2].value);
  	//let grupo = event.target.parentElement.parentElement.classList
  	let ganadorlocal = 0;
  	let ganadorvisitante = 0;
  	let empate = 0;
  	if (golesLocal > golesVisitante) {
  		ganadorlocal++;
  	}else if (golesLocal < golesVisitante) {
  		ganadorvisitante++;
  	}else{
  		empate++
  	} 



  	var tabla = document.getElementById("tabla" + numeroTabla); //sacamos la tabla

  	var tbody = tabla.querySelectorAll('td'); //agarramos todo el body de la tabla

  	for(var td of tbody){
  		if(td.textContent.includes(local)){ //buscamos al local
  			//td.parentElement agarramos toda esa fila
  			//td.parentElement.children[posicion] nos posiciona en la columna que deseamos en esa fila
  			// td.parentElement.children[posicion].textContent = valor; // le indicamos que valor queres que tenga en esa posicion
  			td.parentElement.children[2].textContent = parseInt(td.parentElement.children[2].textContent) + (3*ganadorlocal + empate);
  			td.parentElement.children[3].textContent = parseInt(td.parentElement.children[3].textContent) + 1;
  			td.parentElement.children[4].textContent = parseInt(td.parentElement.children[4].textContent) + ganadorlocal;
  			td.parentElement.children[5].textContent = parseInt(td.parentElement.children[5].textContent) + empate;
  			td.parentElement.children[6].textContent = parseInt(td.parentElement.children[6].textContent) + ganadorvisitante;
  			td.parentElement.children[7].textContent = parseInt(td.parentElement.children[7].textContent) + golesLocal;
  			td.parentElement.children[8].textContent = parseInt(td.parentElement.children[8].textContent) + golesVisitante;
  			td.parentElement.children[9].textContent = parseInt(td.parentElement.children[9].textContent) +  Math.abs(golesVisitante - golesLocal);

  		}	
  		if (td.textContent.includes(visitante)) {
  			td.parentElement.children[2].textContent = parseInt(td.parentElement.children[2].textContent) + (3*ganadorvisitante + empate);
  			td.parentElement.children[3].textContent = parseInt(td.parentElement.children[3].textContent) + 1;
  			td.parentElement.children[4].textContent = parseInt(td.parentElement.children[4].textContent) + ganadorvisitante;
  			td.parentElement.children[5].textContent = parseInt(td.parentElement.children[5].textContent) + empate;
  			td.parentElement.children[6].textContent = parseInt(td.parentElement.children[6].textContent) + ganadorlocal;
  			td.parentElement.children[7].textContent = parseInt(td.parentElement.children[7].textContent) + golesVisitante;
  			td.parentElement.children[8].textContent = parseInt(td.parentElement.children[8].textContent) + golesLocal;
  			td.parentElement.children[9].textContent = parseInt(td.parentElement.children[9].textContent) + Math.abs(golesVisitante - golesLocal);

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
