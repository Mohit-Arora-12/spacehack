var xhttp = new XMLHttpRequest();
var data;
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(xhttp.responseText);
        (document.getElementById('condition')).src = "https:" + ((data["current"])["condition"])["icon"];
        (document.getElementById('condT')).innerHTML = ((data["current"])["condition"])["text"];
        (document.getElementById('temp')).innerHTML = (data["current"])["temp_c"];
        (document.getElementById('humi')).innerHTML = (data["current"])["humidity"];
        (document.getElementById('p1')).innerHTML = "CO<sub>2</sub> -- " + ((data["current"])["air_quality"])["co"];
        (document.getElementById('p2')).innerHTML = "NO<sub>2</sub> -- " + ((data["current"])["air_quality"])["no2"];
        (document.getElementById('p3')).innerHTML = "O<sub>3</sub> -- " + ((data["current"])["air_quality"])["o3"];
        (document.getElementById('p4')).innerHTML = "SO<sub>2</sub> -- " + ((data["current"])["air_quality"])["so2"];

        (document.getElementById('loco')).innerHTML = "Region :- " + ((data["location"])["region"]) + "<br>" + "Country :- " + ((data["location"])["country"]) + "<br>";
    }
};
xhttp.open("GET", "http://api.weatherapi.com/v1/current.json?key=9bcedf8669584244abb190325232508&q=28.54644781561475,77.1947327239178&aqi=yes", true);
xhttp.send();



window.onscroll = function () {
    var globe = document.getElementById('globe');
    globe.style.animation = "hidden 2s linear";
    if (window.scrollY == 0) {
        globe.style.visibility = "visible";
        globe.style.animation = "rotate 60s linear infinite";
        globe.style.height = "auto";
        globe.style.width = "auto";
    }
    else {
        globe.style.visibility = "hidden";
        globe.style.height = "0%";
        globe.style.width = "0%";
    }
    if (window.scrollY >= 10) {
        (document.getElementById('text')).className = "animate__animated animate__fadeIn";
        (document.getElementById('table')).className = "table table-dark table-striped table-hover animate__animated animate__fadeIn";
    }
    if (window.scrollY >= 100) {
        (document.getElementById('thermal')).className = "thermal animate__animated animate__fadeIn";
    }
}