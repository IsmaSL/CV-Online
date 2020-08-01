 // Data
 const pg = 70;
 const my = 30;

 //pie
 var ctxP = document.getElementById("pieChart").getContext('2d');
 var myPieChart = new Chart(ctxP, {
     type: 'pie',
     data: {
         labels: ["PostgreSQL", "MySQL"],
         datasets: [{
             data: [pg, my],
             backgroundColor: ["#0277bd", "#ff6d00"],
             hoverBackgroundColor: ["#039be5", "#ff9800"],
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
 document.getElementById("cell-postg").innerHTML = pg;
 document.getElementById("cell-mysql").innerHTML = my;