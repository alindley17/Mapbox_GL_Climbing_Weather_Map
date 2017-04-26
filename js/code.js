document.addEventListener('DOMContentLoaded', function () {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWxpbmRsZXkiLCJhIjoiY2l5Y2JlcmViMDBvczMyc2N1eTA4MDd4MSJ9.t0Z60l8r6_8DNbX7xB1bnA';
    var tileset = 'mapbox.satellite';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/alindley/cj0smo4ll00c62smpbr2dpehd',
        center: [-105.5, 39], // starting position
        zoom: 6 // starting zoom
    });

    map.addControl(new MapboxGeocoder({
        accessToken: 'pk.eyJ1IjoiYWxpbmRsZXkiLCJhIjoiY2l5Y2JlcmViMDBvczMyc2N1eTA4MDd4MSJ9.t0Z60l8r6_8DNbX7xB1bnA'
    }));

    map.on('load', function () {
        map.addSource('aerisweather-radar', {
            "type": 'raster',
            "tiles": [
                'https://maps1.aerisapi.com/CSJEnhBz47Lj5Rnz1qOMJ_syBX7hid79IHKhZszE0qC6rmyNx8YNTSmb9NprmT/radar/{z}/{x}/{y}/current.png',
                'https://maps2.aerisapi.com/CSJEnhBz47Lj5Rnz1qOMJ_syBX7hid79IHKhZszE0qC6rmyNx8YNTSmb9NprmT/radar/{z}/{x}/{y}/current.png',
                'https://maps3.aerisapi.com/CSJEnhBz47Lj5Rnz1qOMJ_syBX7hid79IHKhZszE0qC6rmyNx8YNTSmb9NprmT/radar/{z}/{x}/{y}/current.png',
                'https://maps4.aerisapi.com/CSJEnhBz47Lj5Rnz1qOMJ_syBX7hid79IHKhZszE0qC6rmyNx8YNTSmb9NprmT/radar/{z}/{x}/{y}/current.png'
            ],
            "tileSize": 256,
            "attribution": "<a href='https://www.aerisweather.com/'>AerisWeather</a>"
        });
        map.addLayer({
            "id": "radar-tiles",
            "type": "raster",
            "source": "aerisweather-radar",
            "minzoom": 0,
            "maxzoom": 22
        });
    });
});
