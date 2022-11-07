let latitude=22.7868542,longitude=88.3543296
mapboxgl.accessToken="pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA"

var map=new mapboxgl.Map({
container:"map",
style:"mapbox://styles/mapbox/streets-v11",
center:[longitude,latitude],
zoom:4,
});
map.appControl(
    new mapboxgl.GeolocateControl({
        positionOptions:{
            enableHighAccuracy:true
        },
        trackUserLocation:true
    })
)
map.addControl(
    new MapboxDirections({
        accessToken:mapboxgl.accessToken
    }),
    "top-left"
)
var img1=document.querySelector("#amber")
var marker1=new mapboxgl.marker({
    element:img1
})
.setLngLat([75.85133, 26.98547])
.addTo(map);