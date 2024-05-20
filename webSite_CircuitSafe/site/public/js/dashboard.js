function sair() {
	sessionStorage.clear();
	window.location = "../login_cadastro.html";
}

window.addEventListener("beforeunload", function() {
	//Gera log de logout ai fechar a página
	//código para gerar log de logout

    // Limpa a sessionStorage ao fechar a página
    // sessionStorage.clear();
});

function obterID() {
	const urlParams = new URLSearchParams(window.location.search);
	const id = urlParams.get('id');
	return id;
}

window.onload = function() {
	$("#body_loading").css("display", "none");
	$("#body_container_index").css("display", "flex");
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
	
	//Recupera as informações salvas no sessionStorage ao realizar login
	// {
	// var email = sessionStorage.EMAIL_USUARIO;
	// var nome = sessionStorage.NOME_USUARIO.charAt(0).toUpperCase() + sessionStorage.NOME_USUARIO.slice(1).toLowerCase();
	// var id = sessionStorage.ID_USUARIO;
	// var empresaId = sessionStorage.ID_EMPRESA;
	// var nivel = sessionStorage.NIVEL_USUARIO;
	// }

	//Adiciona as informações do usuário salvas no sessionStorage ao DOM
	// {
	// document.getElementById("nickname").textContent = nome;
	// document.getElementById("user-name").textContent = nome;
	// document.getElementById("user-mail").textContent = email;	
	// console.log(nome, email);
	// }

	//Pega todos os botões nav-link do menu para monitorar o clique neles
	var navLinks = document.querySelectorAll(".nav-link");

	navLinks.forEach(function (link) {
		link.addEventListener("click", function (event) {
			event.preventDefault()

			target = link.getAttribute("value");
			targetClasses = link.classList;

			console.log("Clique detectado! " + target);
			//Verifica se o alvo do clique é um item do menu
			if (targetClasses.contains("menu-item") == true) {
				//reseta os atributos do logo do menu para o padrão
				logotype = document.querySelector(".logotype");
				logotype.setAttribute("src", "../assets/imgs/full-logo.svg");


				if(target == "home") {
					//deixei id para passa id e permissoes do user
					window.location.href = `index.html?id="home"`;
				}
				else if (target != "home") {
					window.location.href = `${target}.html?id=${target}`;
					menu.setAttribute("style", "width: 3.5%;");
					logotype.setAttribute("src", "../assets/imgs/logo.svg");
					spans.forEach((span) => {
						span.classList.add("d-none");
					});
				}
				//trata o clique em um conteúdo do menu que retornar vazio ou null 
				else if (target == "" || target == null) {
					console.log("Erro ao tentar trocar de conteúdo!");
					window.location.href = `index.html?id="home"`;
				}
			}
		});
	});

	Highcharts.chart("home-relacao-maquinas", {
		colors: ["#FFD700", "#C0C0C0", "#CD7F32"],
		chart: {
			type: "column",
			inverted: true,
			polar: true,
		},
		title: {
			text: "Gerenciamento de máquinas",
			align: "left",
			style: {
				fontSize: '0.9rem'
			}
		},
		tooltip: {
			outside: true,
		},
		pane: {
			size: "100%",
			innerSize: "80%",
			endAngle: 300,
		},
		xAxis: {
			tickInterval: 1,
			labels: {
				align: "right",
				useHTML: true,
				allowOverlap: false,
				step: 1,
				y: 3,
				style: {
					fontSize: "0.9rem",
				},
			},
			lineWidth: 0,
			gridLineWidth: 0,
			categories: ["SP"],
		},
		yAxis: {
			lineWidth: 0,
			tickInterval: 25,
			reversedStacks: false,
			endOnTick: true,
			showLastLabel: true,
			gridLineWidth: 0,
		},
		plotOptions: {
			column: {
				stacking: "normal",
				borderWidth: 0,
				pointPadding: 0,
				groupPadding: 0.15,
				borderRadius: "50%",
			},
		},
		series: [
			{
				name: "Maquinas alugadas",
				data: [70],
			},
			{
				name: "Máquinas disponiveis",
				data: [13],
			},
			{
				name: "Em manutenção",
				data: [17],
			},
		],
	});

	// Highcharts.chart("home-relacao-chamados", {
	// 	chart: {
	// 		type: "column",
	// 	},
	// 	title: {
	// 		text: "Relação chamados X atendimentos",
	// 		style: {
	// 			fontSize: '0.9rem'
	// 		}
	// 	},
	// 	xAxis: {
	// 		categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
	// 	},
	// 	yAxis: [
	// 		{
	// 			min: 0,
	// 			title: {
	// 				text: "Chamados X Atendimentos",
	// 			},
	// 		},
	// 	],
	// 	legend: {
	// 		shadow: false,
	// 	},
	// 	tooltip: {
	// 		shared: true,
	// 	},
	// 	plotOptions: {
	// 		column: {
	// 			grouping: false,
	// 			shadow: false,
	// 			borderWidth: 0,
	// 		},
	// 	},
	// 	series: [
	// 		{
	// 			name: "Chamados abertos",
	// 			color: "rgba(165,170,217,1)",
	// 			data: [150, 73, 65, 100, 115, 130],
	// 			pointPadding: 0.3,
	// 			pointPlacement: 0,
	// 		},
	// 		{
	// 			name: "Atendimentos realizados",
	// 			color: "rgba(126,86,134,.9)",
	// 			data: [140, 70, 60, 100, 113, 120],
	// 			pointPadding: 0.4,
	// 			pointPlacement: 0,
	// 		},
	// 	],
	// });

	Highcharts.chart("home-relacao-componentes", {
		chart: {
			zoomType: "xy",
		},
		title: {
			text: "Componentes monitorados X trocados",
			align: "left",
			style: {
				fontSize: '0.9rem'
			}
		},
		xAxis: [
			{
				categories: ["Feb", "Mar", "Apr"],
				crosshair: true,
			},
		],
		yAxis: [
			{
				// Primary yAxis
				labels: {
					format: "{value}",
					style: {
						color: Highcharts.getOptions().colors[1],
					},
				},
				title: {
					text: "Componentes reparados",
					style: {
						color: Highcharts.getOptions().colors[1],
					},
				},
			},
			{
				// Secondary yAxis
				title: {
					text: "Componentes monitorados",
					style: {
						color: Highcharts.getOptions().colors[0],
					},
				},
				labels: {
					format: "{value}",
					style: {
						color: Highcharts.getOptions().colors[0],
					},
				},
				opposite: true,
			},
		],
		tooltip: {
			shared: true,
		},
		legend: {
			align: "left",
			x: 80,
			verticalAlign: "bottom",
			y: 60,
			floating: true,
			backgroundColor:
				Highcharts.defaultOptions.legend.backgroundColor || // theme
				"rgba(255,255,255,0.25)",
		},
		series: [
			{
				name: "Monitorados",
				type: "column",
				data: [0, 210, 0],
			},
			{
				name: "Trocados",
				type: "spline",
				data: [150, 110, 120],
			},
		],
	});

	const chart = Highcharts.chart("home-relacao-maquinas-novas", {
		title: {
			text: "Aquisição de equipamentos/mês",
			align: "left",
			style: {
				fontSize: '0.9rem'
			}
		},
		colors: ["#4caefe", "#3fbdf3", "#35c3e8", "#2bc9dc", "#20cfe1", "#16d4e6"],
		xAxis: {
			categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
		},
		yAxis: [
			{
				min: 0,
				title: {
					text: "Máquinas compradas por mês",
				},
			},
		],
		series: [
			{
				type: "column",
				name: "Novas aquisições",
				borderRadius: 5,
				colorByPoint: true,
				data: [4143, 3947, 4437, 4730, 4977, 5412],
				showInLegend: false,
			},
		],
	});
});

