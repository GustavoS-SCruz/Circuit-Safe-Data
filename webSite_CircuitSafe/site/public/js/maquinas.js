

function obterID() {
	const urlParams = new URLSearchParams(window.location.search);
	const id = urlParams.get('id');
	return id;
}

window.onload = function() {
	$("#body_loading").css("display", "none");
	$("#body_container_maquinas").css("display", "flex");
}

document.addEventListener("DOMContentLoaded", function () {
	(function(){
		const id = obterID();
		if (id) {
			console.log('ID obtido:', id);
		}
		else{
			console.log('ID não obtido');
			window.location.href = `../login_cadastro.html`; 
		}
	})()
});