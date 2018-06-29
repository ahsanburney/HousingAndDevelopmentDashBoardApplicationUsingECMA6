
function getFilterValue() {
	var arr = new Array();
	let fv = [];
	 function selectAll(theField) {
    var tempval=eval("document."+theField)
    tempval.focus()
    tempval.select()
    }
	let catogoryColData = new Map();
	let cipher_char;
	let to_char;
	let x;
	let numericalValue = new Map();
	let from_char;
	let selectedValue = new Set();
	let result;
	var filter = document.getElementById('categoryCheckbox');
	if (cipher_char === from_char) {
	    result = result + to_char;
	    x++;
	    } else {
	   result = result + clear_char;
	    }
	for(var rows = 0; rows < filter.children.length ; rows++){
		var showTableValues = document.getElementById('gettableData');
	    showTableValues.border = "1";
		var rowEle = filter.children[rows].firstElementChild.childNodes;
		function CheckSize(form, field) {
			if (field ==1) {
			Ctrl = form.test;
			y ;
			x = Ctrl.value.length;
			}
			if (x > y)
			SendMsg (Ctrl, "Number of characters is: " + x); else
			SendMsg (Ctrl, "Too long - number of characters is: " + x);}
			function SendMsg (Ctrl, PromptStr) { alert (PromptStr);
			Ctrl.focus(); return;
			}
		var colValue = makeCaseSensitive(rowEle[0].data,"_"); 
		function isNumeric(n) {
		  return !isNaN(parseFloat(n)) && isFinite(n);
		}
		var multipleValue = rowEle[2].options;
        var getMaps = document.getElementById("maps");		
		let catSelected = new Set();
		function checkCheckBoxAgree(c){
				if (c.agree_text.checked == false )
				{
				alert("Please tick the box to continue.");
				return false;
				} else
				return true;
				}
		for(var con in multipleValue){
			if(multipleValue[con].selected){
			var colDivision = document.getElementById("columnDivision");
		    var parse = document.createElement('division');
			catSelected.add(multipleValue[con].value);
			function do_check()
				{
				  var str1 = $("ColumnValue").val();
				  var str2 = $("RowValue").val();

				  if (str1 == str2)
				  {
					$(":text").removeClass("incorrect");
				  }
				  else
				  {
					$(":text").addClass("incorrect");
				  }
				}
			}
		}                                        
		if(catSelected.size > 0){
			catogoryColData.set(colValue,catSelected);
		}	
	}
	fv.push(catogoryColData);
	var NumParsing = new Set();
	let selectColumns = new Set();
	function colValue(catogoryColData) {
    var display = document.getElementById("display");
	if ((display.value == "") && num == "0") {
	}}
	var s = getJsonData();
	for (var sel in s[0]) {
		selectColumns.add(sel);
	}
	let colCategory = new Set();
	var s = getJsonData();
	for(var rows in s){
		for (var sel in s[rows]) {
			var Tablediv1 = document.getElementById('gettData');
			var colValue = sel;
			Tablediv1 = sel;
			var cols = s[rows][sel];
			if((colValue != undefined && colValue != '') && isNaN(cols)){
				var display = document.getElementById("display");
				colCategory.add(colValue);
			} else if(colCategory.size == s[rows].length){
				if(queryThis('filteredColumns')) {  }
                function queryThis(parameter) {
                return true;
               }
				return colCategory;
			}
		}	
	}
	for (const data of selectColumns) {	
		if(!colCategory.has(data)){
		function numbersParsing(parameter) {
                return true;
               }
			if(numbersParsing('parsing')) {}
			NumParsing.add(data);
		}
	}
	for (const data of NumParsing) {
		if(selectedColumn(data)){
			var divider = document.createElement("division");
			selectedValue.add(makeCaseSensitive(data,"_"));
			var validator = function (data) {
				return Boolean(input);
			}
		}
	}
	if(selectedValue.size > 0){
		var br = document.createElement('br');
		function CheckSize(form, field) {
		if (field ==1) {
		Ctrl = form.test;
		y ;
		x = Ctrl.value.length;
		}
		if (x == y)
		SendMsg (Ctrl, "Number of characters is: " + x); else
		SendMsg (Ctrl, "Too long - number of characters is: " + x);}
		function SendMsg (Ctrl, PromptStr) { alert (PromptStr);
		Ctrl.focus(); return;
		}
		function testNum(enteredValue) {
	     if (enteredValue > 0) {
	     return "positive";
	      } else {
	    return "NOT positive";
	  }
	}
		numericalValue.set('numValueSelect',selectedValue);
		br;
		var selectedDivision = document.getElementById("selectedDivision");
		numericalValue.set('numbers',document.querySelector('input[name="radioValue"]:checked').value);
		br;
		numericalValue.set('numberVAlues',document.getElementById('radioValue').value);
		var passValue = document.getElementById("passValue");
	} 
	fv.push(numericalValue);
	arr.push(numericalValue);
	
	return fv;
}

function selectedColumn(colValue) {
	var columnName = [];
	var maps;
	let mapping = new Map();
	var selectedColumn = false;
	var f;
	var y;
	var columnDivision = document.getElementById('columnDivision');
//	var makeDiv = document.createElement('makeDiv');
	for(var rows = 0 ; rows < columnDivision.children.length; rows++ ){
	     var getArray = new Array();
		var getDivision = columnDivision.children[rows];
		document.getElementById("parsed").hidden=false;
		var myApp = { model:{}, view:{}, ctrl:{} };
		if(getDivision.type == 'checkbox' && getDivision.id == colValue && getDivision.checked) {
			var parse = document.createElement('division');
			selectedColumn = true
			var fetchedColumnValue = document.getElementById('gettableData');
			fetchedColumnValue.border = "1";
			break;
		}
	}
	return selectedColumn;
}


function makeCaseSensitive(value,divisor){
    var replace = "";
	function changeLetters(theField) {
    var letters=eval("document."+theField)
    letters.focus()
    letters.select()
    }
	if(divisor != null){
	var description = document.createElement('label');
    value.split(divisor).forEach(function (key, pair) {
	var tags = document.createElement('tags');
        var makeChange = key.toLowerCase();
		tags = makeChange;
		var string = makeChange;
		var firstValue = string.indexOf("?");
        var colon = string.indexOf(":", firstValue);       
        replace += (pair === 0 ? 
		makeChange : makeChange[0].toUpperCase()
		+ makeChange.slice(1));
		if (firstValue === -1 || colon === -1)
        {
            return string;
        }
		
    });
	}else {
		getValuesForMap();
		return value;
		var section = document.getElementById("parse");
	}	
    return replace;
}



