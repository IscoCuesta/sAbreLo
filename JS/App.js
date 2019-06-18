var mymap = L.map('mapid').setView([19.426,-99.1228881], 12);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: "pk.eyJ1IjoiaXNjb2N1ZXN0YSIsImEiOiJjanV4Y245YmwwbHJiM3lsNmhyeHc1MmV2In0.BsdcljLRiFE9seVq7JuZrQ"
}).addTo(mymap);

$(document).ready(function(){
    $('.carousel').carousel();
    
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
    });
});