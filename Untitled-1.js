function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        jQuery('#geo').html('no es compatible tu navegador');
    }
}

function showPosition(position){
    var latitud = position.coords.latitude;
    var longitud = position.coords.longitude;
    var APIlink = 'http://api.weatherapi.com/v1/current.json?key=6279fd2238c14241a47214137211505&q=';
    var linkF = APIlink + latitud + ',' +longitud;
    jQuery.getJSON(linkF, 
    function (data) {
        jQuery('#geo').html(data.location.name+', '+data.current.temp_c+'°C');
    });
}

jQuery(document).ready(function(){
    getLocation();
});