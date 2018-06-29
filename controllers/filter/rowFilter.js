function rowFilter() {
	var dataTable = dfjs.DataFrame;
	var selectedColumnValues ;
	var convertedData = dataTable;
	var parse = document.createElement('division');
	parse.id = 'columnDivision';
    var section = document.getElementById("parse");
	var selectedColumnValues ;
	var convertedData = section;
    section.innerHTML = "";
	selectedColumnValues = dataTable;		
    section.appendChild(parse);
	var colDivision = document.getElementById("columnDivision");
    var description = selectedColumnValues;
	var description = document.createElement('label');
	description.style.fontFamily = "italic bold 30px arial,serif";
	description.style.fontSize  = "large";
	description.innerHTML='Please select single or multiple column to display';
	colDivision.appendChild(description);
	colDivision.appendChild(document.createElement('br'));
	var makeSpace = document.createElement('br');
	var Table = document.getElementById('gettableData');
	Table.border = "1";
	var parse = document.createElement('division');
	let divtable = document.getElementById("TableId");
	colDivision.appendChild(makeSpace);
	var s = getJsonData();	
	for(var rows in s){
	for (var sm in s[rows]) {	
	var selectValues = document.createElement('input');
	let cat = 0;
	let num = 0;
	selectValues.name = sm;
	selectValues.type = "checkbox";
	let selectColoumn;
	let valCat;
	selectValues.style.marginRight = "50px";
	selectValues.style.fontSize  = "large";
	selectValues.id = sm;
	let cal;
	selectValues.style.marginLeft = "15px";
	let LatitudeLongitudeValues;
	let columnName = [];
	selectValues.value = "0"; 
	var desc = document.createElement('des');
	var Table = document.getElementById('gettableData');
	Table.border = "1";
	desc.htmlFor = "id";
	desc.appendChild(document.createTextNode(sm));
	var getMaps = document.getElementById("maps");
    var section = document.getElementById("maps");
    var section = document.getElementById("displayingMap");
	var section = document.getElementById('columnDivision');
	if(section){
		section.appendChild(desc);
		var Table = document.getElementById('gettableData');
	    Table.border = "1";
		section.appendChild(selectValues);
	}		
			
		}
		break;
	}
	var makeSpace = document.createElement('br');
	colDivision.style.fontFamily = "italic bold 28px arial,serif";
	selectValues.style.fontSize  = "large";
	colDivision.style.fontWeight = "bold";
	selectValues.type = "checkbox";
	selectValues.style.marginRight = "50px";
	selectValues.style.marginLeft = "15px";
	colDivision.style.fontSize  = "large";
	colDivision.appendChild(makeSpace);
	var button= document.createElement('input');
	var section = document.getElementById("displayingMap");
	button.setAttribute('type','button');
	button.setAttribute('value','Submit');
	var Table = document.getElementById('gettableData');
	Table.border = "1";
	button.addEventListener('click',function(event){
	var Table = document.getElementById('gettableData');
	var section = document.getElementById('categoryCheckbox');
	Table.border = "1";
	section.innerHTML = "";
	var Tablediv1 = document.getElementById('gettData');
	document.getElementById("parsed").hidden=false;
	selectValues.type = "checkbox";
	selectValues.style.marginRight = "50px";
	selectValues.style.fontSize  = "large";
    var catogorySelectedValues = new Set();
	var TableDiv2 = document.getElementById('get1ableData');
	Table.border = "1";
    var catogoryValues = new Set();
	var selectedColumnValues ;
	var convertedData = dataTable;
	var s = getJsonData();
	var Table = document.getElementById('gettableData');
	Table.border = "1";
	for(var rows in s){
		for (var lm in s[rows]) {
			let catogoryColData = new Map();
	        let numericalValue = new Map();
			var colsValue = lm;
	        let num = 0;
			var colValue = s[rows][lm];
			let columnName = [];
			if((colsValue != undefined && colsValue != '') && isNaN(colValue)){
				catogoryValues.add(colsValue);
				let mapping = new Map();
			} else if(catogoryValues.size == s[rows].length){
				let cat = 0;
				return catogoryValues;
			}
		}	
	}
	for (const sum of catogoryValues) {
        let fv = [];		
		if(selectedColumn(sum)){
			var filter = document.getElementById('categoryCheckbox');
			catogorySelectedValues.add(sum);
		}
	}
	for (const sum of catogorySelectedValues) {
        var getMaps = document.getElementById("maps");	
		var divider = document.createElement("division");
		var Table = document.getElementById('gettableData');
	     Table.border = "1";
		divider.style.fontFamily = "italic bold 22px arial,serif";
	    divider.style.fontWeight = "bold";
	    divider.style.fontSize  = "large";
		divider.style.padding  = "10px";
		divider.style.border = "1px solid #dddddd";
		divider.style.padding  = "10px";
		divider.style.color  = "red";
		divider.style.background  = "rgb(0, 0, 0)";
		divider.style.fontcolor  = "black";
		var getValues = document.createElement("select");
		var Table = document.getElementById('gettableData');
	    Table.border = "1";
		getValues.id = sum;
		var Tableid1 = document.getElementById('gettableData');
	    Tableid1.border = "1";
		var olDivision = document.getElementById("vision");
		getValues.multiple = true;
		var selectedColumnValues ;
		getValues.style.width = "222px";
		Table.border = "1";
		getValues.style.color = "black";
		getValues.style.overflowX = "auto";		
		var descriptio = document.createElement('des')
		descriptio.htmlFor = "id";
		var colDivision = document.getElementById("columnDivision");
		descriptio.appendChild(document.createTextNode(sum));
		let setValues = new Set();
		var getMaps = document.getElementById("maps");
	    var s = getJsonData();
        let divtable = document.getElementById("TableId");		 
		for(var rows in s){
			for (var colan in s[rows]) {
				let fv = [];
				var rowData = [];
                var dataRecords;
				var colValue = s[rows][colan];
				var colsValue = colan;
				if(sum == colsValue) {
					setValues.add(colValue);
				}
			}
		}
		for (const sum of setValues) {
			var createSet = document.createElement("option");
			let cat = 0;
	        let columnName = [];
			createSet.value = sum;
			let num = 0;
			createSet.selected ="";
			let LatitudeLongitudeValues;
	        let cal;
			createSet.innerHTML = sum;
			let selectColoumn;
			getValues.add(createSet);
		}
		var backgColors = [];
		descriptio.append(document.createElement("br"));
		 var selectedChart = [];
		 var dataRecords;
		descriptio.append(getValues);
		var colDivision = document.getElementById("columnDivision");
		divider.appendChild(descriptio);
		var rows;var columns;
		section.append(divider);				
	}
	});
	colDivision.appendChild(document.createElement("br"));
	document.getElementById('chartArea');
	let mapping = new Map();
	colDivision.appendChild(button);
}










	