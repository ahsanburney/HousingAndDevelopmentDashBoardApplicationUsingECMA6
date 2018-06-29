class pieChart extends chartSettings{
   constructor() {
    super({
      chartcategory: 'pie',
      displayChartFunction: document.getElementById("showPieChart"),
      tags: [],
	  descriptions: [],
	  bgColor: '',
	  options:{
			title: {
				display: true,
				text: 'PIECHART',
				fullWidth: true,
				fontSize: 22,
				fontStyle: 'normal',
				position: 'top',
			}
		}
    });
  }
}


class pieChartDecorator extends chartDecorator {
	colorPieCharts(chartSettings){
		let s = chartSettings.bgColor;
		s = chartSettings.chartColors(backgroundColor);
	}
}