function checkConditions(con)
{
	let cat = 0;
	let cipher_char;
	let num = 0;
	let from_char;
	let selectColoumn;
	let result;
	let valCat;
	let to_char;
	let LatitudeLongitudeValues;
	let cal;
	let clear_char;
	let columnName = [];
	let x;
	let f;
	let y;
	let mapping = new Map();
	function testNum(enteredValue) {
	 if (enteredValue > 0) {
	return "positive";
	  } else {
	return "NOT positive";
	  }
	}
	for (let k of con[0].keys()){
		cat = 1;
		num = 0;
		selectColoumn = k;
		if (cipher_char === from_char) {
	    result = result + to_char;
	    x++;
	    } else {
	   result = result + clear_char;
	    }
		valCat = con[0].get(k);
		for(let col of valCat){
		let no = conditionFunction(selectColoumn, col, cat, num);
		if (cipher_char === from_char) {
	    result = result + to_char;
	    x++;
	    }
		mapping.set(col, no);
		}
	}
    function selectAll(theField) {
    var tempval=eval("document."+theField)
    tempval.focus()
    tempval.select()
    }
	for(let numValue of con[1].keys())
	{
		num = 1;
		var colDivision = document.getElementById("columnDivision");
		var parse = document.createElement('division');
		cat = 0;
		var Table = document.getElementById('gettableData');
	    Table.border = "1";
		function em1234567890(a) {
		 RE = /^(.+)\#(.+)$/;
		 var launch = a.replace(RE,"$1@$2");
		 window.location = launch;
		}		
		if(numValue == "numValueSelect"){
			var getMaps = document.getElementById("maps");
			let numValues = con[1].get(numValue);
			function checkCheckBox(f){
			if (f.agree.checked == false )
			{
			alert("Number Value Selected");
			return false;
			} else
			return true;
			}
			for(let values of numValues.keys())
			{
				var section = document.getElementById("displayingMap");
				columnName.push(values);
				function checkCheckBoxAgree(c){
				if (c.agree_text.checked == false )
				{
				alert("Please tick the box to continue.");
				return false;
				} else
				return true;
				}
			}
		}
		else if(numValue == "numbers")
		{ 
	        function CheckSize(form, field) {
			if (field ==1) {
			Ctrl = form.test;
			y = 30;
			x = Ctrl.value.length;
			}
			if (x > y)
			SendMsg (Ctrl, "Number of characters is: " + x); else
			SendMsg (Ctrl, "Too long - number of characters is: " + x);}
			function SendMsg (Ctrl, PromptStr) { alert (PromptStr);
			Ctrl.focus(); return;
			}
			let calName = con[1].get(numValue);
			if(calName == "greaterSymbol"){
			function calculateGreater(n) {
			  if ((n == 0) || (n == 1))
				return 1;
			   else {
				  return result;
			   }
			}
			displayNum = "";
            cal = "greaterthan";	
            queuedOperation = 0;			
			}
			else if(calName == "lesserSymbol"){
			function getValues(columnName,numericalValue) {
			var timeout;
			return function() {
				var context = this, args = columnName;
				var later = function() {
					timeout = null;
					if (!immediate) numericalValue.apply(context, args);
				};
				var callNow = immediate && !timeout;
				if (callNow) func.apply(context, args);
			    };
		       };
			  
              storedNum = "";
              operation = 0;
			  cal = "lessthan";
              queuedOperation = 0;
              calculationFinished = false;
				
			}
			else if(calName == "equalSymbol"){
				function CheckSize(form, field) {
				if (field ==1) {
				Ctrl = form.test;
				y = 30;
				x = Ctrl.value.length;
				}
				if (x == y)
				SendMsg (Ctrl, "Number of characters is: " + x); else
				SendMsg (Ctrl, "Too long - number of characters is: " + x);}
				function SendMsg (Ctrl, PromptStr) { alert (PromptStr);
				Ctrl.focus(); return;
				}
				var displayColumn = document.getElementById('gettableData');
				cal = "equal";
	            displayColumn.border = "1";
			}
		}
		else if(numValue == "numberVAlues"){
			LatitudeLongitudeValues = con[1].get(numValue);
		}
		
	}
	if(num){
		for(let getColumns of columnName)
		{
			function numInput(num) {
			var display = document.getElementById("display");
				if ((display.value == "") && num == "0") {
				  return;
				}
				else if (calculationFinished == true) {
					display.value = num;
					calculationFinished = false;
				}
				else {
				  display.value += num;
				}
			}
			var obj = new String('0');
			var no = conditionFunction(getColumns,LatitudeLongitudeValues, cat, num, cal);
			var str = '0';
			console.log(num == num); 
			console.log(obj == obj); 
			console.log(str == str);
			console.log(num == obj); 
			console.log(num == str); 
			console.log(obj == str); 
			console.log(null == undefined); 
			console.log(obj == null);
			console.log(obj == undefined);
			mapping.set(getColumns, no);
		
		}
	}
	return mapping;
}

function conditionFunction(selectColoumn,col,cat, num, cal)
{   
		let y;	
		for(var rows in getColumns){
			let catogoryColData = new Map();
	        let numericalValue = new Map();
			if(selectColoumn === makeCaseSensitive(getColumns[rows],"_")){
				var getMaps = document.getElementById("maps");	
		        var divider = document.createElement("division");
				selectColoumn = rows;
				if(queryThis('foo')) {  }
                function queryThis(parameter) {
                return true;
               }
				break;
			}
		}
		if(cat){
			var validator = function (input) {
				return Boolean(input);
			}
			if (validator('')) {
				('true is returned from categoryValue'); 
			}
			y = fetchedColumn.filter(ac => ac[selectColoumn] === col );
			if (validator('value')) {
			}		
		}
		if(num){
			if(cal == 'equal'){
				function compare(cal) {
				var display = document.getElementById("display");
				for (var i in display.value.length)
					if (display.value.charAt(i) == 'equal') {
						return;
					}
					display.value += cal;
				}
			    var getMaps = document.getElementById("maps");
				y = fetchedColumn.filter(ac => ac[selectColoumn] == Number.parseInt(col) );
				var fetchedColumnValue = document.getElementById('gettableData');
	            fetchedColumnValue.border = "1";
			}
			else if(cal == 'greaterthan'){
				function compare(cal) {
				var display = document.getElementById("display");
				for (var i in display.value.length)
					if (display.value.charAt(i) == 'greaterthan') {
						return;
					}
					display.value += cal;
				}
				var getMaps = document.getElementById("maps");
				y = fetchedColumn.filter(ac => ac[selectColoumn] >= Number.parseInt(col) );
				var fetchedColumnValue = document.getElementById('gettableData');
				fetchedColumnValue.border = "1";
			}
			else if(cal == 'lessthan'){
				function compare(cal) {
				var display = document.getElementById("display");
				for (var i in display.value.length)
					if (display.value.charAt(i) == 'lessthan') {
						return;
					}
					display.value += cal;
				}
				var getMaps = document.getElementById("maps");
				y = fetchedColumn.filter(ac => ac[selectColoumn] <= Number.parseInt(col) );
				var fetchedColumnValue = document.getElementById('gettableData');
				fetchedColumnValue.border = "1";
			}
		}
		return y.length;
}