$(document).ready(function() {
    // The map, centered at Curitiba
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: { lat: -25.429, lng: -49.267 },
    });

    addMarker({
        coords: { lat: -25.439, lng: -49.237 },
        title: ' </h1> loja 1 </h1>'

    });

    addMarker({
        coords: { lat: -25.499, lng: -49.227 },
        title: '<h1> Loja 2 </h1>'

    });
    addMarker({
        coords: { lat: -25.459, lng: -49.257 },
        title: '<h1> Loja 3 </h1>'
    });

    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
        });
    }
})