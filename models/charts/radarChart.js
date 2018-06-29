class radarChart extends chartSettings{
   constructor() {
    super({
      chartcategory: 'radar',
      displayChartFunction: document.getElementById("showradarChart"),
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
	colorRadarChart(chartSettings){
		let s = chartSettings.bgColor;
		s = chartSettings.chartColors(backgroundColor);
	}
}