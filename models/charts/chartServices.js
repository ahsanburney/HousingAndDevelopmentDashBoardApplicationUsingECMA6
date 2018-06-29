class chartServices{
	constructor(chartType, chartName,chartcategory, displayChartFunction, tags = [], descriptions = [], bgColor = '', options = {}) {
		if(chartType != null){
		this.chartName = chartType.chartName;
		this.chartcategory = chartType.chartcategory;
		this.displayChartFunction = chartType.displayChartFunction;
		this.tags = chartType.tags;
		this.descriptions = chartType.descriptions;
		this.bgColor = chartType.bgColor;
		this.options = chartType.options;
		}
	}
	
	displayChart(){
		let displayChartFunction = this.displayChartFunction;
		new Chart(displayChartFunction, {
			type: this.chartcategory,
			data: {
				labels: this.tags,
				datasets: [{
					label: this.tags,
					data: this.descriptions,
					backgroundColor: this.bgColor
				}]
			},
			options: this.options
		});
	}
	
	chartColors(columnValue){
		var backColor = colors;
		var backgColors = [];
		for(var rows=0;rows<columnValue;rows++){
			let pickRandomColor = Math.floor((Math.random() * (backColor.length-1)) + 0);
			backgColors.push(backColor[pickRandomColor]);
		}
		return backgColors;
	}
}

let colors = ['#000000',
'#003300',
'#006600',
'#009900',
'#00CC00',
'#00FF00',
'#000033',
'#003333',
'#006633',
'#009933',
'#00CC33',
'#00FF33',
'#000066',
'#003366',
'#006666',
'#009966',
'#00CC66',
'#00FF66',
'#000099',
'#003399',
'#006699',
'#009999',
'#00CC99',
'#00FF99',
'#0000CC',
'#0033CC',
'#0066CC',
'#0099CC',
'#00CCCC',
'#00FFCC',
'#0000FF',
'#0033FF',
'#0066FF',
'#0099FF',
'#00CCFF',
'#00FFFF',
'#330000',
'#333300',
'#336600',
'#339900',
'#33CC00',
'#33FF00',
'#330033',
'#333333',
'#336633',
'#339933',
'#33CC33',
'#33FF33',
'#330066',
'#333366',
'#336666',
'#339966',
'#33CC66',
'#33FF66',
'#330099',
'#333399',
'#336699',
'#339999',
'#33CC99',
'#33FF99',
'#3300CC',
'#3333CC',
'#3366CC',
'#3399CC',
'#33CCCC',
'#33FFCC',
'#3300FF',
'#3333FF',
'#3366FF',
'#3399FF',
'#33CCFF',
'#33FFFF',
'#660000',
'#663300',
'#666600',
'#669900',
'#66CC00',
'#66FF00',
'#660033',
'#663333',
'#666633',
'#669933',
'#66CC33',
'#66FF33',
'#660066',
'#663366',
'#666666',
'#669966',
'#66CC66',
'#66FF66',
'#660099',
'#663399',
'#666699',
'#669999',
'#66CC99',
'#66FF99',
'#6600CC',
'#6633CC',
'#6666CC',
'#6699CC',
'#66CCCC',
'#66FFCC',
'#6600FF',
'#6633FF',
'#6666FF',
'#6699FF',
'#66CCFF',
'#66FFFF',
'#990000',
'#993300',
'#996600',
'#999900',
'#99CC00',
'#99FF00',
'#990033',
'#993333',
'#996633',
'#999933',
'#99CC33',
'#99FF33',
'#990066',
'#993366',
'#996666',
'#999966',
'#99CC66',
'#99FF66',
'#990099',
'#993399',
'#996699',
'#999999',
'#99CC99',
'#99FF99',
'#9900CC',
'#9933CC',
'#9966CC',
'#9999CC',
'#99CCCC',
'#99FFCC',
'#9900FF',
'#9933FF',
'#9966FF',
'#9999FF',
'#99CCFF',
'#99FFFF',
'#CC0000',
'#CC3300',
'#CC6600',
'#CC9900',
'#CCCC00',
'#CCFF00',
'#CC0033',
'#CC3333',
'#CC6633',
'#CC9933',
'#CCCC33',
'#CCFF33',
'#CC0066',
'#CC3366',
'#CC6666',
'#CC9966',
'#CCCC66',
'#CCFF66',
'#CC0099',
'#CC3399',
'#CC6699',
'#CC9999',
'#CCCC99',
'#CCFF99',
'#CC00CC',
'#CC33CC',
'#CC66CC',
'#CC99CC',
'#CCCCCC',
'#CCFFCC',
'#CC00FF',
'#CC33FF',
'#CC66FF',
'#CC99FF',
'#CCCCFF',
'#CCFFFF',
'#FF0000',
'#FF3300',
'#FF6600',
'#FF9900',
'#FFCC00',
'#FFFF00',
'#FF0033',
'#FF3333',
'#FF6633',
'#FF9933',
'#FFCC33',
'#FFFF33',
'#FF0066',
'#FF3366',
'#FF6666',
'#FF9966',
'#FFCC66',
'#FFFF66',
'#FF0099',
'#FF3399',
'#FF6699',
'#FF9999',
'#FFCC99',
'#FFFF99',
'#FF00CC',
'#FF33CC',
'#FF66CC',
'#FF99CC',
'#FFCCCC',
'#FFFFCC',
'#FF00FF',
'#FF33FF',
'#FF66FF',
'#FF99FF',
'#FFCCFF',
'#FFFFFF',
'#110000',
'#220000',
'#330000',
'#440000',
'#550000',
'#660000',
'#770000',
'#990000',
'#AA0000',
'#BB0000',
'#CC0000',
'#DD0000',
'#EE0000',
'#FF0000',
'#001100',
'#002200',
'#003300',
'#004400',
'#005500',
'#006600',
'#007700',
'#008800',
'#009900',
'#00AA00',
'#00BB00',
'#00CC00',
'#00DD00',
'#00EE00',
'#00FF00',
'#000011',
'#000022',
'#000033',
'#000044',
'#000055',
'#000066',
'#000077',
'#000088',
'#000099',
'#0000AA',
'#0000BB',
'#0000CC',
'#0000DD',
'#0000EE',
'#0000FF',
'#001111',
'#002222',
'#003333',
'#004444',
'#005555',
'#006666',
'#007777',
'#008888',
'#009999',
'#00AAAA',
'#00BBBB',
'#00CCCC',
'#00DDDD',
'#00EEEE',
'#110011',
'#220033',
'#330033',
'#440044',
'#550055',
'#660066',
'#770077',
'#880088',
'#990099',
'#AA00AA',
'#BB00BB',
'#CC00CC',
'#DD00DD',
'#EE00EE',
'#FF00FF'		  
];

function EmptyHomePage() {
 var showChart = document.createElement('chart');
 var element = document.getElementById("chart");
 var polarAreaChart = document.getElementById('showPolarAreaChart');
 showChart.id = "showPolarAreaChart";
 var doughbutChart = document.getElementById('showdoughnutChart');
  showChart.id = "showdoughnutChart";
 var barChart = document.getElementById('showBarChart');
  showChart.id = "showBarChart";
 var pieChart = document.getElementById('showPieChart');
 showChart.id = "showPieChart";
 var lineChart = document.getElementById('showLineChart');
 showChart.id = "showLineChart";
 var radarChart = document.getElementById('showradarChart');
  showChart.id = "showradarChart";
 if (polarAreaChart != null) {
 Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
	}
  polarAreaChart.remove();
 }
 if (barChart != null) {
	 Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
	}
  barChart.remove();
 }

 if (doughbutChart != null) {
	 Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
	}
  doughbutChart.remove();
 }
 if (lineChart != null) {
	 Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
	}
  lineChart.remove();
 }

 if (pieChart != null) {
	 Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
	}
  pieChart.remove();
 }
 if (radarChart != null) {
	 Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
	}
  radarChart.remove();
 }
}

