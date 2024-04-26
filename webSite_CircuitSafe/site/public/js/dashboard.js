const bateria = document.getElementById("chart-bateria");
const rede = document.getElementById("chart-rede");
const cpu = document.getElementById("chart-cpu");
const ram = document.getElementById("chart-ram");
const disco = document.getElementById("chart-disco");

function sair() {
  sessionStorage.clear();
  window.location = "../login_cadastro.html";
}
document.addEventListener("DOMContentLoaded", function () {
  let params = new URLSearchParams(window.location.search);
  let username = params.get('username');
  let password = params.get('password');
  console.log(username, password);

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
        } else if (target == "monitoramento") {
          monitoramento = document.querySelector(".monitoramento");
          monitoramento.classList.remove("d-none");
          menu.setAttribute("style", "width: 3.5%;");
          logotype.setAttribute("src", "../assets/imgs/logo.svg");
          spans.forEach((span) => {
            span.classList.add("d-none");
          });
        } else if (target == "registros") {
          registros = document.querySelector(".registros");
          registros.classList.remove("d-none");
        } else if (target == "alertas") {
          alertas = document.querySelector(".alertas");
          alertas.classList.remove("d-none");
        } else {
          console.log("Erro ao tentar trocar de conteúdo!");
        }
        link.classList.add("active");
      }
    });
  });

  (async () => {
    const data = Highcharts.chart(rede, {
      chart: {
        zoomType: "x",
      },
      title: {
        text: "Rede",
        align: "left",
      },
      subtitle: {
        text:
          document.ontouchstart === undefined
            ? "Click and drag in the plot area to zoom in"
            : "Pinch the chart to zoom in",
        align: "left",
      },
      xAxis: {
        type: "datetime",
      },
      yAxis: {
        title: {
          text: "Exchange rate",
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
          name: "USD to EUR",
          data: [
            6, 3, 5, 8, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20,
          ],
        },
      ],
    });
  })();

  (async () => {
    const data = Highcharts.chart('monitoramento-rede', {
      chart: {
        zoomType: "x",
      },
      title: {
        text: "Rede",
        align: "left",
      },
      subtitle: {
        text:
          document.ontouchstart === undefined
            ? "Click and drag in the plot area to zoom in"
            : "Pinch the chart to zoom in",
        align: "left",
      },
      xAxis: {
        type: "datetime",
      },
      yAxis: {
        title: {
          text: "Exchange rate",
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
          name: "USD to EUR",
          data: [
            6, 3, 5, 8, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20,
          ],
        },
      ],
    });
  })();

  Highcharts.chart(cpu, {
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
      max: 200,
      tickPixelInterval: 72,
      tickPosition: "inside",
      tickColor: Highcharts.defaultOptions.chart.backgroundColor || "#FFFFFF",
      tickLength: 20,
      tickWidth: 2,
      minorTickInterval: null,
      labels: {
        distance: 20,
        style: {
          fontSize: "14px",
        },
      },
      lineWidth: 0,
      plotBands: [
        {
          from: 0,
          to: 120,
          color: "#55BF3B", // green
          thickness: 20,
        },
        {
          from: 120,
          to: 160,
          color: "#DDDF0D", // yellow
          thickness: 20,
        },
        {
          from: 160,
          to: 200,
          color: "#DF5353", // red
          thickness: 20,
        },
      ],
    },

    series: [
      {
        name: "Speed",
        data: [80],
        tooltip: {
          valueSuffix: " km/h",
        },
        dataLabels: {
          format: "{y} km/h",
          borderWidth: 0,
          color:
            (Highcharts.defaultOptions.title &&
              Highcharts.defaultOptions.title.style &&
              Highcharts.defaultOptions.title.style.color) ||
            "#333333",
          style: {
            fontSize: "16px",
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

  (async () => {
    const data = await fetch(
      "https://demo-live-data.highcharts.com/aapl-c.json"
    ).then((response) => response.json());

    // Create the chart
    Highcharts.stockChart(bateria, {
      rangeSelector: {
        selected: 1,
      },

      title: {
        text: "Bateria",
        align: "left"
      },

      series: [
        {
          name: "Bateria",
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
    Highcharts.stockChart("monitoramento-bateria", {
      rangeSelector: {
        selected: 1,
      },

      title: {
        text: "Bateria",
        align: "left"
      },

      series: [
        {
          name: "AAPL",
          data: data,
          tooltip: {
            valueDecimals: 2,
          },
        },
      ],
    });
  })();

  Highcharts.chart('monitoramento-disco', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Disco',
        align: 'left'
    },
    xAxis: {
        categories: ['USA', 'China', 'Brazil', 'EU', 'India', 'Russia'],
        crosshair: true,
        accessibility: {
            description: 'Countries'
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: '1000 metric tons (MT)'
        }
    },
    tooltip: {
        valueSuffix: ' (1000 MT)'
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [
        {
            name: 'Corn',
            data: [406292, 260000, 107000, 68300, 27500, 14500]
        },
        {
            name: 'Wheat',
            data: [51086, 136000, 5500, 141000, 107180, 77000]
        }
    ]
});

});

Highcharts.chart(ram, {
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
    max: 200,
    tickPixelInterval: 72,
    tickPosition: "inside",
    tickColor: Highcharts.defaultOptions.chart.backgroundColor || "#FFFFFF",
    tickLength: 20,
    tickWidth: 2,
    minorTickInterval: null,
    labels: {
      distance: 20,
      style: {
        fontSize: "14px",
      },
    },
    lineWidth: 0,
    plotBands: [
      {
        from: 0,
        to: 120,
        color: "#55BF3B", // green
        thickness: 20,
      },
      {
        from: 120,
        to: 160,
        color: "#DDDF0D", // yellow
        thickness: 20,
      },
      {
        from: 160,
        to: 200,
        color: "#DF5353", // red
        thickness: 20,
      },
    ],
  },

  series: [
    {
      name: "Speed",
      data: [80],
      tooltip: {
        valueSuffix: " km/h",
      },
      dataLabels: {
        format: "{y} km/h",
        borderWidth: 0,
        color:
          (Highcharts.defaultOptions.title &&
            Highcharts.defaultOptions.title.style &&
            Highcharts.defaultOptions.title.style.color) ||
          "#333333",
        style: {
          fontSize: "16px",
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
    if (newVal < 0 || newVal > 200) {
      newVal = point.y - inc;
    }

    point.update(newVal);
  }
}, 3000);

// Create the chart
Highcharts.chart('monitoramento-ram', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'RAM',
        align: 'left'
    },

    accessibility: {
        announceNewData: {
            enabled: true
        },
        point: {
            valueSuffix: '%'
        }
    },

    plotOptions: {
        series: {
            borderRadius: 5,
            dataLabels: [{
                enabled: true,
                distance: 1,
                format: '{point.name}'
            }, {
                enabled: true,
                distance: '-30%',
                filter: {
                    property: 'percentage',
                    operator: '>',
                    value: 5
                },
                format: '{point.y:.1f}%',
                style: {
                    fontSize: '0.9em',
                    textOutline: 'none'
                }
            }]
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [
        {
            name: 'Browsers',
            colorByPoint: true,
            data: [
                {
                    name: 'Chrome',
                    y: 61.9,
                    drilldown: 'Chrome'
                },{
                    name: 'Firefox',
                    y: 38.1,
                    drilldown: 'Firefox'
                }
            ]
        }
    ]
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
          fontSize: "1.5em",
        })
        .add(this.series[2].group);
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
Highcharts.chart(disco, {
  chart: {
    type: "solidgauge",
    height: "100%",
    events: {
      render: renderIcons,
    },
  },

  title: {
    text: "Disco",
    align: "left",
  },

  tooltip: {
    borderWidth: 0,
    backgroundColor: "none",
    shadow: false,
    style: {
      fontSize: "14px",
    },
    valueSuffix: "%",
    pointFormat:
      "{series.name}<br>" +
      '<span style="font-size: 2em; color: {point.color}; ' +
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
        outerRadius: "62%",
        innerRadius: "38%",
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
      name: "Feedback",
      data: [
        {
          color: Highcharts.getOptions().colors[2],
          radius: "62%",
          innerRadius: "38%",
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
