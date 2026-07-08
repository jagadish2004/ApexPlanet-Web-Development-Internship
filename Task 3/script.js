let images = [
    "https://picsum.photos/500/300?random=1",
    "https://picsum.photos/500/300?random=2",
    "https://picsum.photos/500/300?random=3"
];

let i = 0;

function next() {
    i++;
    if (i == images.length) {
        i = 0;
    }
    document.getElementById("image").src = images[i];
}

function previous() {
    i--;
    if (i < 0) {
        i = images.length - 1;
    }
    document.getElementById("image").src = images[i];
}

function weather() {

    let city = document.getElementById("city").value;

    if(city==""){
        alert("Enter city name");
        return;
    }

    document.getElementById("output").innerHTML =
    "City : " + city + "<br>" +
    "Temperature : 30°C<br>" +
    "Weather : Sunny";
}
