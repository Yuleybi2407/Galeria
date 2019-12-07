this.logueado = false;

$("#Entrada").click(function(){
	if ($("#Usuario").val() == "yuley" && $("#Contraseña").val() == '123'){
		logueado = true;
		if (logueado == true) {
			window.location = "./pages/Inicio.html"
		}
	}else{
		swal.fire('Error');
	}
});

window.addEventListener('load',function(){
	$('.container').slideToggle(1000);
});

$("#Galeria").click(function(){
	window.location = "./Galeria.html"
})

$("#PDF").click(function(){
	window.location = "./PDF.html"
})

$("#Prueba").click(function(){
	window.location = "./Prueba.html"
})

$("#Salir").click(function(){
	window.location = "../Index.html"
})