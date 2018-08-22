var output = document.getElementById('dest-autocomplete')
var infowindowContent = document.getElementById('infowindow-content')
var desc = document.createElement('li')
var temp = document.createElement('li')
var feel = document.createElement('li')
var wind = document.createElement('li')
var humidity = document.createElement('li')
var resortInfoList = document.getElementById('resort-info')
var lat = 0
var long = 0 
var city = ''
var state = ''
let tempUrl = `https://galvanize-cors.herokuapp.com/http://api.weatherunlocked.com/api/current/${lat},${long}?app_id=f8ced41f&app_key=a44f7c0d615fdbeb291b51adc50dd605`


function initMap() {
    var mapProp = {
        center: new google.maps.LatLng(39.7392, -104.9903),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById('map'), mapProp)
    var autocomplete = new google.maps.places.Autocomplete(output)
    var infoWindow = new google.maps.InfoWindow()
    var marker = new google.maps.Marker({
        map: map,
        anchorPoint: new google.maps.Point(0, -29)
    })
    
    autocomplete.addListener('place_changed', function () {
        infoWindow.close()
        marker.setVisible(false)
        var place = autocomplete.getPlace()
        console.log(place)
        console.log(place.geometry.location.lat())
        console.log(place.geometry.location.lng())
        lat = place.geometry.location.lat().toFixed(3)
        long = place.geometry.location.lng().toFixed(3)
        if (!place.geometry) {
            window.alert('No details available for input: "' + place.name + '"')
        }
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport)
        } else {
            map.setCenter(place.geometry.location)
            map.setZoom(17)
        }
        marker.setPosition(place.geometry.location)
        marker.setVisible(true)
        
        var address = ''
        if (place.address_components) {
            address = [
                (place.address_components[0] && place.address_components[0].short_name || ''),
                (place.address_components[1] && place.address_components[1].short_name || ''),
                (place.address_components[2] && place.address_components[2].short_name || ''),
                (place.address_components[3] && place.address_components[3].short_name || ''),
                (place.address_components[4] && place.address_components[4].short_name || ''),
                (place.address_components[5] && place.address_components[5].short_name || ''),
                (place.address_components[6] && place.address_components[6].short_name || ''),
                (place.address_components[7] && place.address_components[7].short_name || '')
            ].join(' ')
        }
        infowindowContent.children['place-icon'].src = place.icon
        infowindowContent.children['place-address'].textContent = address
        infoWindow.open(map, marker)
        infoWindow.setContent(address)
        // infoWindow.setContent(infowindowContent.textContent + resortInfoList.textContent)
        let tempUrl = `https://galvanize-cors.herokuapp.com/http://api.weatherunlocked.com/api/current/${lat},${long}?app_id=f8ced41f&app_key=a44f7c0d615fdbeb291b51adc50dd605`
        
        
        fetch(tempUrl)
        .then(response => response.json())
        .then(myJSON => {
            console.log(myJSON)
            forecast(myJSON)
        })
    })
}

function forecast(myJSON) {

    desc.textContent = "Current Weather: " + myJSON.wx_desc + " "
    temp.textContent = "Current Temperature: " + myJSON.temp_f + " "
    feel.textContent = "Feels Like: " + myJSON.feelslike_f + " "
    wind.textContent = "Wind Speed: " + myJSON.windspd_mph
    humidity.textContent = "Humidity " + myJSON.humid_pct + "%"
    resortInfoList.appendChild(desc)
    resortInfoList.appendChild(temp)
    resortInfoList.appendChild(feel)
    resortInfoList.appendChild(wind)
    resortInfoList.appendChild(humidity)
}

