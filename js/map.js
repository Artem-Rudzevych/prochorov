function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(50.50585, 30.48734),
        zoom: 15
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}