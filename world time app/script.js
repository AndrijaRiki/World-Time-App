let choseBtn = document.querySelector("#chose");
let popup = document.querySelector('#popup');
let closeBtn = popup.querySelector("#close");
let vreme = popup.querySelector('h1');
let url = "http://worldtimeapi.org/api";

choseBtn.addEventListener('click', e => {
    e.preventDefault();
    
    let countrySearched = document.querySelector('#countrySearched').value;
    get(countrySearched);
});

closeBtn.addEventListener('click', () => {
    popup.style.display = "none";
});

async function get(timezone) {
    try {
        let response = await fetch(url + "/timezone/" + timezone);
        let data = await response.json();
        let time = data.datetime.substring(11, 16);
        let img = "";
        let t = parseInt(time.substring(0, 3));

        if(t >= 5 && t < 6)
            img = "url('dawn.jpg')";
        else if(t >= 6 && t < 11)
            img = "url('morning.jpg')";
        else if(t >= 11 && t < 18)
            img = "url('noon.jpg')";
        else if(t >= 18 && t < 20)    
            img = "url('sundown.jpg')";
        else if(t >= 20 && t <= 24)    
            img = "url('night.jpg')";
        else img = "url('night.jpg')"; 

        vreme.innerHTML = `Time in ${timezone} is ${time}.`;
        popup.style.display = "block";
        popup.style.backgroundImage = img;
    }
    catch {
        alert("Greska, proverite da li ste ispravno uneli podatke");
    }
}