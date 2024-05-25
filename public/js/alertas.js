
function obterID() {
	const urlParams = new URLSearchParams(window.location.search);
	const id = urlParams.get('id');
	return id;
}

window.onload = function() {
	$("#body_loading").css("display", "none");
	$("#body_container_alertas").css("display", "flex");
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
	})();

	Highcharts.chart("relacao-alertas", {
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
				name: "Alertas",
				color: "rgba(248, 161, 63, 1)",
				data: [150, 73, 65, 100, 115, 130],
				pointPadding: 0.3,
				pointPlacement: 0.2,
			},
			{
				name: "Alertas críticos",
				color: "rgba(186, 60, 61, 0.9)",
				data: [140, 70, 60, 100, 113, 120],
				pointPadding: 0.4,
				pointPlacement: 0.2,
			},
		],
	});


	(async () => {
		const data = await fetch(
			"https://demo-live-data.highcharts.com/aapl-c.json"
		).then((response) => response.json());

		// Create the chart
		Highcharts.stockChart("total-alertas", {
			rangeSelector: {
				selected: 0,
			},

			title: {
				text: "Total de alertas por dia",
				align: "left",
			},

			series: [
				{
					name: "Alertas",
					data: data,
					tooltip: {
						valueDecimals: 2,
					},
				},
			],
		});
	})();
});