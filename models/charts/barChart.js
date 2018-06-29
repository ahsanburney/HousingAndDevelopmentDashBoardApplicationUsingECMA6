class barChart extends chartSettings{
  constructor() {
    super({
      chartcategory: 'bar',
      displayChartFunction: document.getElementById("showBarChart"),
      tags: [],
	  descriptions: [],
	  bgColor: '',
	  options:{
			title: {
				display: true,
				text: 'BARCHART',
				fullWidth: true,
				fontSize: 22,
				fontStyle: 'normal',
				position: 'top'
			},
			scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero: true	                   
	                }
	            }]
        }
		}
    });
  }
}

class barChartDecorator extends chartDecorator {
	colorBarCharts(chartSettings){
		let s = chartSettings.bgColor;
		s = chartSettings.chartColors(backgroundColor);
	}
}

