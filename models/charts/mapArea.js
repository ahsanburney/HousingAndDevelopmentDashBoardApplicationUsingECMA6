
function mapArea(){
 var Tablediv1 = document.getElementById('mapArea');
  var section = document.getElementById("mapArea");
  var display = document.getElementById("display");
  section.style.display = "block";
  Tablediv1.style.display = "block";
	var value = "<button id='maps' style = 'background-color: #555555; border: none;color: white;padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px; '  > Display Map </button>";
	var myApp = { model:{}, view:{}, ctrl:{} };
	section.innerHTML = value;
    var getMaps = document.getElementById("maps");
    maps.addEventListener('click',function(){
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
    if(maps.innerText == "Display Map"){
      getValuesForMap();
	  var divider = document.createElement("division");
      maps.innerText = "Remove Map";
	  storedNum = "";
      operation = 0;
	  cal = "lessthan";
	  
	  var selectedDivision = document.getElementById("selectedDivision");
	  maps.style.background = " #A52A2A";
	  let mapping = new Map();
    }
    else if(maps.innerText == "Remove Map"){
      maps.innerText = "Remove Map";
      RemoveMAps();
	  storedNum = "";
      operation = 0;
	  cal = "lessthan";
	  maps.innerText = "Display Map";
	  maps.style.background = " #555555 ";
	  let mapping = new Map();
    }
  });
}



