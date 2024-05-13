function sair() {
	sessionStorage.clear();
	window.location = "../login_cadastro.html";
}

window.addEventListener("beforeunload", function() {
    // Limpa a sessionStorage ao fechar a página
    sessionStorage.clear();
});

document.addEventListener("DOMContentLoaded", function () {
	var email = sessionStorage.EMAIL_USUARIO;
	var nome = sessionStorage.NOME_USUARIO.charAt(0).toUpperCase() + sessionStorage.NOME_USUARIO.slice(1).toLowerCase();
	var id = sessionStorage.ID_USUARIO;
	var empresaId = sessionStorage.ID_EMPRESA;
	var nivel = sessionStorage.NIVEL_USUARIO;
	document.getElementById("nickname").textContent = nome;
	document.getElementById("user-name").textContent = nome;
	document.getElementById("user-mail").textContent = email;	
	console.log(nome, email);

	var navLinks = document.querySelectorAll(".nav-link");

	navLinks.forEach(function (link) {
		link.addEventListener("click", function () {
			target = link.getAttribute("value");
			targetClasses = link.classList;

			console.log("Clique detectado! " + target);
			if (targetClasses.contains("menu-item") == true) {
				menu = document.querySelector(".menu");
				menu.setAttribute("style", "width: 12.5%;");

				menuItems = document.querySelectorAll(".menu-item");
				menuItems.forEach((item) => {
					if (item.classList.contains("active") == true) {
						item.classList.remove("active");
					}
				});

				logotype = document.querySelector(".logotype");
				logotype.setAttribute("src", "../assets/imgs/full-logo.svg");

				spans = document.querySelectorAll(".hidden-text");
				spans.forEach((span) => {
					if (span.classList.contains("d-none") == true) {
						span.classList.remove("d-none");
					}
				});

				contents = document.querySelectorAll(".content");
				contents.forEach((content) => {
					if (content.classList.contains("d-none") == false) {
						content.classList.add("d-none");
					}
				});

				if (target == "home") {
					home = document.querySelector(".home");
					home.classList.remove("d-none");
				} else if (target == "registro") {
					registro = document.querySelector(".registro");
					registro.classList.remove("d-none");
					menu.setAttribute("style", "width: 3.5%;");
					logotype.setAttribute("src", "../assets/imgs/logo.svg");
					spans.forEach((span) => {
						span.classList.add("d-none");
					});
				} else if (target == "monitoramento") {
					monitoramento = document.querySelector(".monitoramento");
					monitoramento.classList.remove("d-none");
					menu.setAttribute("style", "width: 3.5%;");
					logotype.setAttribute("src", "../assets/imgs/logo.svg");
					spans.forEach((span) => {
						span.classList.add("d-none");
					});
				} else if (target == "alertas") {
					alertas = document.querySelector(".alertas");
					alertas.classList.remove("d-none");
					menu.setAttribute("style", "width: 3.5%;");
					logotype.setAttribute("src", "../assets/imgs/logo.svg");
					spans.forEach((span) => {
						span.classList.add("d-none");
					});
				} else {
					console.log("Erro ao tentar trocar de conteúdo!");
				}
				link.classList.add("active");
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
		const chart = Highcharts.charts[5];
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

	(async () => {
		const data = await fetch(
			"https://demo-live-data.highcharts.com/aapl-c.json"
		).then((response) => response.json());

		// Create the chart
		Highcharts.stockChart("registro-bateria", {
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
	Highcharts.chart("home-relacao-chamados", {
		chart: {
			type: "column",
		},
		title: {
			text: "Relação chamados X atendimentos",
			style: {
				fontSize: '0.9rem'
			}
		},
		xAxis: {
			categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
		},
		yAxis: [
			{
				min: 0,
				title: {
					text: "Chamados X Atendimentos",
				},
			},
		],
		legend: {
			shadow: false,
		},
		tooltip: {
			shared: true,
		},
		plotOptions: {
			column: {
				grouping: false,
				shadow: false,
				borderWidth: 0,
			},
		},
		series: [
			{
				name: "Chamados abertos",
				color: "rgba(165,170,217,1)",
				data: [150, 73, 65, 100, 115, 130],
				pointPadding: 0.3,
				pointPlacement: 0,
			},
			{
				name: "Atendimentos realizados",
				color: "rgba(126,86,134,.9)",
				data: [140, 70, 60, 100, 113, 120],
				pointPadding: 0.4,
				pointPlacement: 0,
			},
		],
	});
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

/**
 * In the chart render event, add icons on top of the circular shapes
 */
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
