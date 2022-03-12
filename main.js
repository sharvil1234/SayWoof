var img, btn, inp;

img = document.getElementById("img");
btn = document.getElementById("btn");
inp = document.getElementById("inp");

img.hidden = true;

function handleData() {
    var api = `https://dog.ceo/api/breed/${inp.value.toLowerCase()}/images/random`
    fetch(api)
        .then(function (response) {
            return response.json();
        })
        .then(function (obj) {
            console.log(obj.message);
            return obj.message;
        })
        .then(function (url) {
            img.src = url;
            img.hidden = false;
        })
}

btn.addEventListener('click', handleData);