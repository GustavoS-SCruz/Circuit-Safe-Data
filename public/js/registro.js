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
	$("#body_container_registro").css("display", "flex");
}

document.addEventListener("DOMContentLoaded", function () {
	(function(){
		const id = obterID();
		if (id) {
			console.log('ID obtido:', id);
			var nome = sessionStorage.NOME_USUARIO.charAt(0).toUpperCase() + sessionStorage.NOME_USUARIO.slice(1).toLowerCase();
		}
		else{
			console.log('ID não obtido');
			window.location.href = `../login_cadastro.html`; 
		}
	})()
	//Recupera as informações salvas no sessionStorage ao realizar login
	// {
	// 	var email = sessionStorage.EMAIL_USUARIO;
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
					window.location.href = `index.html?id="home"`;
				}
				else if (target != "home") {
					window.location.href = `${target}.html?id=${target}`;
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


	(async () => {
		const data = Highcharts.chart("registro-rede", {
			chart: {
				zoomType: "x",
			},
			title: {
				text: "Rede",
				align: "left",
			},
			xAxis: {
				type: "datetime",
			},
			yAxis: {
				title: {
					text: "Desempenho de rede",
				},
			},
			legend: {
				enabled: false,
			},
			plotOptions: {
				area: {
					fillColor: {
						linearGradient: {
							x1: 0,
							y1: 0,
							x2: 0,
							y2: 1,
						},
						stops: [
							[0, Highcharts.getOptions().colors[0]],
							[
								1,
								Highcharts.color(Highcharts.getOptions().colors[0])
									.setOpacity(0)
									.get("rgba"),
							],
						],
					},
					marker: {
						radius: 2,
					},
					lineWidth: 1,
					states: {
						hover: {
							lineWidth: 1,
						},
					},
					threshold: null,
				},
			},

			series: [
				{
					type: "area",
					name: "Mbps",
					data: [
						6, 3, 5, 8, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
						20,
					],
				},
			],
		});
	})();


	(async () => {
		const data = await fetch(
			"https://demo-live-data.highcharts.com/aapl-c.json"
		).then((response) => response.json());

		// Create the chart
		Highcharts.stockChart("registro-bateria", {
			rangeSelector: {
				selected: 0,
			},

			title: {
				text: "Bateria",
				align: "left",
			},

			series: [
				{
					name: "Carga da bateria",
					data: data,
					tooltip: {
						valueDecimals: 2,
					},
				},
			],
		});
	})();


	Highcharts.chart("registro-disco", {
		chart: {
			type: "column",
		},
		title: {
			text: "Disco",
			align: "left",
		},
		xAxis: {
			categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
			crosshair: true,
			accessibility: {
				description: "Countries",
			},
		},
		yAxis: {
			min: 0,
			title: {
				text: "Uso do disco",
			},
		},
		tooltip: {
			valueSuffix: " %",
		},
		plotOptions: {
			column: {
				pointPadding: 0.2,
				borderWidth: 0,
			},
		},
		series: [
			{
				name: "Livre",
				data: [40, 35, 17, 68, 27, 14],
			},
			{
				name: "Usado",
				data: [60, 65, 83, 32, 73, 86],
			},
		],
	});


	Highcharts.chart("registro-cpu", {
		chart: {
			type: "column",
		},
		title: {
			text: "CPU",
			align: "left",
		},
		xAxis: {
			categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
			crosshair: true,
			accessibility: {
				description: "Countries",
			},
		},
		yAxis: {
			min: 0,
			title: {
				text: "Uso da CPU",
			},
		},
		tooltip: {
			valueSuffix: " %",
		},
		plotOptions: {
			column: {
				pointPadding: 0.2,
				borderWidth: 0,
			},
		},
		series: [
			{
				name: "Livre",
				data: [40, 35, 17, 68, 27, 14],
			},
			{
				name: "Usado",
				data: [60, 65, 83, 32, 73, 86],
			},
		],
	});
});


// Create the chart
Highcharts.chart("registro-ram", {
	chart: {
		type: "pie",
	},
	title: {
		text: "RAM",
		align: "left",
	},

	accessibility: {
		announceNewData: {
			enabled: true,
		},
		point: {
			valueSuffix: "%",
		},
	},

	plotOptions: {
		series: {
			borderRadius: 5,
			dataLabels: [
				{
					enabled: true,
					distance: 1,
					format: "{point.name}",
				},
				{
					enabled: true,
					distance: "-30%",
					filter: {
						property: "percentage",
						operator: ">",
						value: 5,
					},
					format: "{point.y:.1f}%",
					style: {
						fontSize: "0.9rem",
						textOutline: "none",
					},
				},
			],
		},
	},

	tooltip: {
		headerFormat: '<span style="font-size:0.7rem">{series.name}</span><br>',
		pointFormat:
			'<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>',
	},

	series: [
		{
			name: "Uso da ram",
			colorByPoint: true,
			data: [
				{
					name: "Usado",
					y: 61.9,
					drilldown: "Usado",
				},
				{
					name: "Livre",
					y: 38.1,
					drilldown: "Livre",
				},
			],
		},
	],
});
function renderIcons() {
	this.series.forEach((series) => {
		if (!series.icon) {
			series.icon = this.renderer
				.text(`<i class="fa fa-${series.options.custom.icon}"></i>`, 0, 0, true)
				.attr({
					zIndex: 10,
				})
				.css({
					color: series.options.custom.iconColor,
					fontSize: "1.5rem",
				})
				.add(this.series[2]);
		}
		series.icon.attr({
			x: this.chartWidth / 2 - 15,
			y:
				this.plotHeight / 2 -
				series.points[0].shapeArgs.innerR -
				(series.points[0].shapeArgs.r - series.points[0].shapeArgs.innerR) / 2 +
				8,
		});
	});
}
