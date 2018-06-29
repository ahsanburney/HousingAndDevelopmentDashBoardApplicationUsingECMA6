class radarChart extends chartSettings{
  constructor() {
    super({
      chartcategory: 'radar',
      displayChartFunction: document.getElementById("radarchartcanvas"),
      tags: [],
	  descriptions: [],
	  bgColor: '',
	  options:{
			title: {
				display: true,
				text: 'RADARCHART',
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

class radarChartDecorator extends chartDecorator {
	colorRadarCharts(chartSettings){
		let s = chartSettings.bgColor;
		s = chartSettings.chartColors(backgroundColor);
	}
}