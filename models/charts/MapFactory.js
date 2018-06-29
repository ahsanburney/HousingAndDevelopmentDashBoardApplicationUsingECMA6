class MapFactory{
    constructor(map1,maparg2,maparg3,maparg4,maparg5){
    this.map1 = map1;this.maparg2 = maparg2;this.maparg3 = maparg3;this.maparg4 = maparg4;this.maparg5 = maparg5;}
    getMap(mylatitide,mylongitude){
    var pointer = new google.maps.Marker({position: new google.maps.LatLng(mylatitide,mylongitude),map: this.maparg3});
  }
}




