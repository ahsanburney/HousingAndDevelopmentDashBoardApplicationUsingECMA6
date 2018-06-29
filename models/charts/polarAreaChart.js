class polarAreaChart extends chartSettings{	
    constructor() {
    super({
      chartcategory: 'polarArea',
      displayChartFunction: document.getElementById("showPolarAreaChart"),
      tags: [],
	  descriptions: [],
	  bgColor: '',
	  options:{
			title: {
				display: true,
				text: 'PolarAreaChart',
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

class polarAreaChartDecorator extends chartDecorator {
	colorPolarAreaCharts(chartSettings){
		let s = chartSettings.bgColor;
		s = chartSettings.chartColors(backgroundColor);
	}
}