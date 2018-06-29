class makeMap extends MapFactory{
  display(mylatitude,mylongitude,section,cordinates,mapValues){
    this.maparg2=new google.maps.LatLng(mylatitude,mylongitude);
	this.maparg4=new google.maps.Map(section,this.map4);
    this.map1 = {center:this.maparg2,minZoom:10,zoom:15,mapTypeId : google.maps.MapTypeId.ROADMAP,mapTypeControl: true};
	this.maparg5=new google.maps.Map(section,this.map5);
    this.maparg3 = new google.maps.Map(section,this.map1);
  }
}





