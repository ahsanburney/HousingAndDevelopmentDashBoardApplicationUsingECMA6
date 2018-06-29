var rowData = [];
var dataRecords;
var arr = new Array();
let fv = [];
var showTableValues = document.getElementById('gettableData');
var showChart = document.getElementById('getChart');

function getJsonData() {
 var data = document.getElementById('gettableData');
 var showTableValues = document.getElementById('gettableData');
 showTableValues.border = "1";
 return JSON.parse(dataObj);

}

function getData(){
	var dataRows = document.getElementById('SelectDataset');
	var dataRecords = dfjs.DataFrame;
    let dataSets = document.getElementById("datasetValues");
	displayDataAsTable(dataSets);
}

function displayDataAsTable(dataSets){
	var dataRecords = dfjs.DataFrame;
	function do_check()
	{
	 var str1 = $("ColumnValue").val();
	 var str2 = $("RowValue").val();
      if (str1 == str2){
		$(":SelectedValues").removeClass("incorrect");}
		else{
	$(":SelectedValues").addClass("incorrect");
	 }
	}
	fetchedData = dataSets.options[dataSets.selectedIndex].value;
	var dataTable = dfjs.DataFrame;
	var selectedColumnValues = dataSets.options[dataSets.selectedIndex].value;
	var convertedData = dataTable;
    dataRecords.fromCSV(fetchedData).then(result => {
        values = result.toJSON('DashBoard.json');
	    var convertedData = dataTable;		
		dataObj = values;
		mapArea();
        getColumns = result.listColumns();
        var arrs = new Array();		
		fetchedColumn = result.toArray();
		var selectedColumnValues = dataSets.options[dataSets.selectedIndex].value;
		var Table = document.getElementById('gettableData');
		Table.border = "1";
        var draw = "<table id='tablePaging' style='overflow: auto; display:block; ' height='600' class='table-hover table-responsive table table-bordered' ><tr>";
	    for (var rows in getColumns) {
	    var TableDraw = document.getElementById('gettableData');
		TableDraw.border = "1";
		draw+= "<th>" +getColumns[rows]+ "</th>";}
		TableDraw+= "<tr>";
	    draw+= "</tr>";
		TableDraw+= "</tr>";
		inColumns = result.listColumns();		
		columnArray = result.toArray();
	    let divtable = document.getElementById("TableId");
	    for (var rows = 1; rows < fetchedColumn.length; rows++) {
	    divtable+= "<th>";
		draw+= "<tr>";
		for(var columns in fetchedColumn[rows]){
		var div = document.createElement("division");
		draw+= "<td>" +fetchedColumn[rows][columns]+" </td>";
		div.style.fontFamily = "italic bold 22px arial,serif";
	    div.style.fontWeight = "bold";
	    div.style.fontSize  = "large";
		div.style.padding  = "10px";
		div.style.border = "1px solid #dddddd";
		div.style.padding  = "10px";
		}
		tableValues = values;
		arrs;
		draw+="</tr>";
	}
	selectedColumnValues =values;
	draw+="</table>";
    Table.innerHTML = draw;
	rowFilter();		
    });
}


function getCharts() {
 var showChart = document.createElement('chart');
 arr = showChart;
 var filteredValues = getFilterValue();
 var fv = [];
 var so = checkConditions(filteredValues);
 var selectedChart = [];
 var NumParsing = new Set();
 let selectColumns = new Set();
 var section = document.getElementById('columnDivision');
 section.style.fontSize  = "large";
 section.style.padding  = "10px";
 section.style.border = "1px solid #dddddd";
 section.style.fontWeight  = "bold";
 var getValues = document.createElement("select");
 var sec = document.getElementById('getSelectedChartId').children[0];
 var getChartType = document.getElementById("chartType");
 for (var rows = 0; rows < sec.children.length; rows++) {
 var s = getJsonData();
 for (var sel in s[0]) {
 selectColumns.add(sel);
}
  var remainingSection = sec.children[rows];
  document.getElementById("parsed").hidden=false;
  if (remainingSection.type == 'checkbox' && remainingSection.checked) {
	 let catogoryColData = new Map();
	 let numericalValue = new Map();
   selectedChart.push(remainingSection.value);
   var backgColors = [];
  }
 }
 EmptyHomePage();
 var tags = [];
 var descriptions = [];
 for (let tag of so.keys()) {
  var s = getJsonData();
  for (var sel in s[0]) {
  NumParsing.add(sel);
  }
  fv.push(tag);
  tags.push(tag);
  descriptions.push(so.get(tag));
 }
 var sChart = document.createElement('selectedChart');
 var selectChart = [];
 for (var rows in selectedChart) {
  document.getElementById('displayChart').style.display = "block";
  var ch = document.createElement("select");
  let chartFactory = new ChartFactory();
  var lst = document.getElementById('chartArea'); 
  if (selectedChart[rows] == "polarAreaChart") {
   let showChart = document.createElement('canvas');
   showChart.id = "showPolarAreaChart";
   document.getElementById('chartArea').appendChild(showChart);
   let pAcDecorator = new polarAreaChartDecorator();
   show = chartFactory.getChart("polarArea");
   function graphClickEvent(event, array){
    if(array[0]){
        foo.polar; 
    }
   }
   show.setValues(tags, descriptions);
   pAcDecorator.colorCharts(show);
  } else if (selectedChart[rows] == "pieChart") {
   let showChart = document.createElement('canvas');
   showChart.id = "showPieChart";
   document.getElementById('chartArea').appendChild(showChart);
   let pcDecorator = new pieChartDecorator();
   show = chartFactory.getChart("pie");
   function graphClickEvent(event, array){
    if(array[0]){
        foo.pie; 
    }
   }
   show.setValues(tags, descriptions);
   pcDecorator.colorCharts(show);
  } else if (selectedChart[rows] == "lineChart") {
   let showChart = document.createElement('canvas');
   showChart.id = "showLineChart";
   document.getElementById('chartArea').appendChild(showChart);
   let lcDecorator = new lineChartDecorator();
   show = chartFactory.getChart("line");
   function graphClickEvent(event, array){
    if(array[0]){
        foo.line; 
    }
   }
   show.setValues(tags, descriptions);
  } else if (selectedChart[rows] == "barChart") {
   let showChart = document.createElement('canvas');
   showChart.id = "showBarChart";
   document.getElementById('chartArea').appendChild(showChart);
   var bcDecorator = new barChartDecorator();
   show = chartFactory.getChart("bar");
   function graphClickEvent(event, array){
    if(array[0]){
        foo.bar; 
    }
   }
   show.setValues(tags, descriptions);
   bcDecorator.colorCharts(show);
  }else if (selectedChart[rows] == "doughnutChart") {
   let showChart = document.createElement('canvas');
   showChart.id = "showdoughnutChart";
   document.getElementById('chartArea').appendChild(showChart);
   let dcDecorator = new doughnutChartDecorator();
   show = chartFactory.getChart("doughnut");
   function graphClickEvent(event, array){
    if(array[0]){
        foo.doughnut; 
    }
   }
   show.setValues(tags, descriptions);
   dcDecorator.colorCharts(show);

  } else if (selectedChart[rows] == "radarChart") {
   let showChart = document.createElement('canvas');
   showChart.id = "showradarChart";
   document.getElementById('chartArea').appendChild(showChart);
   let rcDecorator = new radarChartDecorator();
   show = chartFactory.getChart("radar");
   function graphClickEvent(event, array){
    if(array[0]){
        foo.radar; 
    }
   }
   show.setValues(tags, descriptions);
   rcDecorator.colorCharts(show);
  } 
  show.displayChart();

 }
}

class Filtering {
 constructor() {}
 valuesToFilter(wholeData, LatitudeLongitudeValues) {
 function numInput(cordinates) {
 var mapdisplay = document.getElementById("display");
 if ((mapdisplay.value == "") && cordinates == "0") {
 }
  }
  var values = new Array();
  let latitudnalLongitufnal = [];
  for (var latLong in wholeData) {
	  latitudnalLongitufnal = new Array();
   var getObject = new Object();
   for (var rows in LatitudeLongitudeValues) {
	    function latValues(latitude) {
 var latdisplay = document.getElementById("values");
 if ((latdisplay.value == "") && latdisplay == "0") {
		}}
    var y = wholeData.map(parseVAlues => {
     return parseVAlues[LatitudeLongitudeValues[rows]]
    });
	 function longValues(longitude) {
 var latdisplay = document.getElementById("values");
 if ((latdisplay.value == "") && latdisplay == "0") {
		}}
    getObject[LatitudeLongitudeValues[rows]] = y[latLong];
   }
   latitudnalLongitufnal.push(getObject);
   values.push(getObject);
  }
  return values;
 }
}


function getValuesForMap() {
 var getMaps = document.getElementById("displayingMap");
 var section = document.getElementById("maps");
 var section = document.getElementById("displayingMap");
 getMaps.style.display = "block";
 section.style.display = "block";
 var v = getJsonData();
 let wholeData = getJsonData();
 var validator = function (v) {
	return Boolean(v);
	}
  function latValues(latitude) {
 var latdisplay = document.getElementById("values");
 if ((latdisplay.value == "") && latdisplay == "0") {
		}}
  function longValues(longitude) {
 var latdisplay = document.getElementById("values");
 if ((latdisplay.value == "") && latdisplay == "0") {
		}}		
 var LatitudeLongitudeValues = ["Latitude", "Longitude"];
 var mappingValues = new Map();
 let getLongitudeLatidute = new Filtering();
 mappingValues = getCharts();
 var passMapValues = getLongitudeLatidute.valuesToFilter(wholeData, LatitudeLongitudeValues);
 var mapSettings = new makeMap();
 var valueDributer = new makeMap();
 mapSettings.display(passMapValues[0]["Latitude"], passMapValues[0]["Longitude"], section);
 for (var rows = 0; rows < passMapValues.length; rows++) {
  var colDivision = document.getElementById("columnDivision");
  var passLatitudevalues = passMapValues[rows]['Latitude'];
  colDivision.style.fontSize  = "large";
  colDivision.style.padding  = "10px";
  colDivision.style.border = "1px solid #dddddd";
  colDivision.style.padding  = "10px";
  var passLongitudevalues = passMapValues[rows]['Longitude'];
  mapSettings.getMap(passLatitudevalues, passLongitudevalues);
 }
}





function RemoveMAps() {
 var section = document.getElementById("displayingMap");
  var divider = document.createElement("division");
  divider.style.fontSize  = "large";
  divider.style.padding  = "10px";
  divider.style.border = "1px solid #dddddd";
  divider.style.fontWeight  = "bold";
 section.style.display = "none";
}