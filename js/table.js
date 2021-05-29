// Data
const pg = 40;
const nj = 25;
const my = 20;
const ag = 15;

//pie
var ctxP = document.getElementById("pieChart").getContext('2d');
var myPieChart = new Chart(ctxP, {
    type: 'pie',
    data: {
        labels: ["PostgreSQL", "Neo4j", "MySQL", "ArangoDB"],
        datasets: [{
            data: [pg, nj, my, ag],
            backgroundColor: ["#0277bd", "#8F8F8F", "#ff6d00", "#558B2F"],
            hoverBackgroundColor: ["#039be5", "#595D64", "#ff9800", "#33691E"],
            borderWidth: 3
        }]
    },
    options: {
        responsive: true,
        legend: {
            position: 'bottom',
            labels: {
                padding: 20,
                boxWidth: 10
            }
        },
        plugins: {
            datalabels: {
                formatter: (value, ctx) => {
                    let sum = 0;
                    let dataArr = ctx.chart.data.datasets[0].data;
                    dataArr.map(data => {
                        sum += data;
                    });
                    let percentage = (value * 100 / sum).toFixed(2) + "%";
                    return percentage;
                },
                color: 'white',
                labels: {
                    title: {
                        font: {
                            size: '24'
                        }
                    }
                }
            }
        },
        tooltips: {
            callbacks: {
                label: function(tooltipItem, data) {
                    return data.labels[tooltipItem.index] + ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] + '%';
                }
            }
        }
    }
});

// Table
document.getElementById("cell-postg").innerHTML = "70";
document.getElementById("cell-mysql").innerHTML = "50";
document.getElementById("cell-neo4j").innerHTML = "40";
document.getElementById("cell-arang").innerHTML = "30";