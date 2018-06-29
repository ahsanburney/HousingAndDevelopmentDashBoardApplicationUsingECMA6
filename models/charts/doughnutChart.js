class doughnutChart extends chartSettings{
  constructor() {
    super({
      chartcategory: 'doughnut',
      displayChartFunction: document.getElementById("showdoughnutChart"),
      tags: [],
	  descriptions: [],
	  bgColor: '',
	  options:{
			title: {
				display: true,
				text: 'DOUGHNUTCHART',
				fullWidth: true,
				fontSize: 22,
				fontStyle: 'normal',
				position: 'top'
			}
		}
    });
  }
}

class doughnutChartDecorator extends chartDecorator {
	colorDoughnutCharts(chartSettings){
		let s = chartSettings.bgColor;
		s = chartSettings.chartColors(backgroundColor);
	}
}