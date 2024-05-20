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
	$("#body_container_monitoramento").css("display", "flex");
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

    
	(async () => {
		const data = Highcharts.chart("monitoramento-rede", {
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


	Highcharts.chart("monitoramento-cpu", {
		chart: {
			type: "gauge",
			plotBackgroundColor: null,
			plotBackgroundImage: null,
			plotBorderWidth: 0,
			plotShadow: false,
			height: "80%",
		},

		title: {
			text: "CPU",
			align: "left",
		},

		pane: {
			startAngle: -90,
			endAngle: 89.9,
			background: null,
			center: ["50%", "75%"],
			size: "110%",
		},

		// the value axis
		yAxis: {
			min: 0,
			max: 100,
			tickPixelInterval: 72,
			tickPosition: "inside",
			tickColor: Highcharts.defaultOptions.chart.backgroundColor || "#FFFFFF",
			tickLength: 20,
			tickWidth: 2,
			minorTickInterval: null,
			labels: {
				distance: 20,
				style: {
					fontSize: "0.9rem",
				},
			},
			lineWidth: 0,
			plotBands: [
				{
					from: 0,
					to: 80,
					color: "#55BF3B", // green
					thickness: 20,
				},
				{
					from: 80,
					to: 90,
					color: "#DDDF0D", // yellow
					thickness: 20,
				},
				{
					from: 90,
					to: 100,
					color: "#DF5353", // red
					thickness: 20,
				},
			],
		},

		series: [
			{
				name: "Uso da CPU",
				data: [80],
				tooltip: {
					valueSuffix: "%",
				},
				dataLabels: {
					format: "{y} %",
					borderWidth: 0,
					color:
						(Highcharts.defaultOptions.title &&
							Highcharts.defaultOptions.title.style &&
							Highcharts.defaultOptions.title.style.color) ||
						"#333333",
					style: {
						fontSize: "1rem",
					},
				},
				dial: {
					radius: "80%",
					backgroundColor: "gray",
					baseWidth: 12,
					baseLength: "0%",
					rearLength: "0%",
				},
				pivot: {
					backgroundColor: "gray",
					radius: 6,
				},
			},
		],
	});
	// Add some life
	setInterval(() => {
		const chart = Highcharts.charts[4];
		if (chart && !chart.renderer.forExport) {
			const point = chart.series[0].points[0],
				inc = Math.round((Math.random() - 0.5) * 20);
	
			let newVal = point.y + inc;
			if (newVal < 0 || newVal > 100) {
				newVal = point.y - inc;
			}
	
			point.update(newVal);
		}
	}, 3000);


	(async () => {
		const data = await fetch(
			"https://demo-live-data.highcharts.com/aapl-c.json"
		).then((response) => response.json());

		// Create the chart
		Highcharts.stockChart("monitoramento-bateria", {
			rangeSelector: {
				selected: 1,
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
});


Highcharts.chart("monitoramento-ram", {
	chart: {
		type: "gauge",
		plotBackgroundColor: null,
		plotBackgroundImage: null,
		plotBorderWidth: 0,
		plotShadow: false,
		height: "80%",
	},

	title: {
		text: "RAM",
		align: "left",
	},

	pane: {
		startAngle: -90,
		endAngle: 89.9,
		background: null,
		center: ["50%", "75%"],
		size: "110%",
	},

	// the value axis
	yAxis: {
		min: 0,
		max: 100,
		tickPixelInterval: 72,
		tickPosition: "inside",
		tickColor: Highcharts.defaultOptions.chart.backgroundColor || "#FFFFFF",
		tickLength: 20,
		tickWidth: 2,
		minorTickInterval: null,
		labels: {
			distance: 20,
			style: {
				fontSize: "0.9rem",
			},
		},
		lineWidth: 0,
		plotBands: [
			{
				from: 0,
				to: 80,
				color: "#55BF3B", // green
				thickness: 20,
			},
			{
				from: 80,
				to: 90,
				color: "#DDDF0D", // yellow
				thickness: 20,
			},
			{
				from: 90,
				to: 100,
				color: "#DF5353", // red
				thickness: 20,
			},
		],
	},

	series: [
		{
			name: "Uso da ram",
			data: [80],
			tooltip: {
				valueSuffix: " %",
			},
			dataLabels: {
				format: "{y} %",
				borderWidth: 0,
				color:
					(Highcharts.defaultOptions.title &&
						Highcharts.defaultOptions.title.style &&
						Highcharts.defaultOptions.title.style.color) ||
					"#333333",
				style: {
					fontSize: "1rem",
				},
			},
			dial: {
				radius: "80%",
				backgroundColor: "gray",
				baseWidth: 12,
				baseLength: "0%",
				rearLength: "0%",
			},
			pivot: {
				backgroundColor: "gray",
				radius: 6,
			},
		},
	],
});
// Add some life
setInterval(() => {
	const chart = Highcharts.charts[0];
	if (chart && !chart.renderer.forExport) {
		const point = chart.series[0].points[0],
			inc = Math.round((Math.random() - 0.5) * 20);

		let newVal = point.y + inc;
		if (newVal < 0 || newVal > 100) {
			newVal = point.y - inc;
		}

		point.update(newVal);
	}
}, 3000);


const trackColors = Highcharts.getOptions().colors.map((color) =>
	new Highcharts.Color(color).setOpacity(0.3).get()
);
Highcharts.chart("monitoramento-disco", {
	chart: {
		type: "solidgauge",
		height: "80%",
		events: {
            load: function () {
                var series = this.series[0];
                series.chart.tooltip.refresh(series.chart.series[0].points[0]);
                series.chart.tooltip.show();
            },
			render: renderIcons,
		},
	},

	title: {
		text: "Disco",
		align: "left",
	},

	tooltip: {
        shared: true,	
		borderWidth: 0,
		backgroundColor: "none",
		shadow: false,
		style: {
			fontSize: "1.2rem",
		},
		valueSuffix: "%",
		pointFormat:
			"{series.name}<br>" +
			'<span style="font-size: 2rem; color: {point.color}; ' +
			'font-weight: bold">{point.y}</span>',
		positioner: function (labelWidth) {
			return {
				x: (this.chart.chartWidth - labelWidth) / 2,
				y: this.chart.plotHeight / 2 + 15,
			};
		},
	},

	pane: {
		startAngle: 0,
		endAngle: 360,
		background: [
			{
				// Track for Feedback
				outerRadius: "100%",
				innerRadius: "70%",
				backgroundColor: trackColors[2],
				borderWidth: 0,
			},
		],
	},

	yAxis: {
		min: 0,
		max: 100,
		lineWidth: 0,
		tickPositions: [],
	},

	plotOptions: {
		solidgauge: {
			dataLabels: {
				enabled: false,
			},
			linecap: "round",
			stickyTracking: false,
			rounded: true,
		},
	},

	series: [
		{
			name: "Uso de disco",
			data: [
				{
					color: Highcharts.getOptions().colors[2],
					radius: "100%",
					innerRadius: "70%",
					y: 76,
				},
			],
			custom: {
				icon: "commenting-o",
				iconColor: "#303030",
			},
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
