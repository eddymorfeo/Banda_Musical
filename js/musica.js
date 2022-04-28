function Resultado()  {
    const artista = JSON.parse(this.responseText);

    const img = document.createElement("img");
    img.src = artista.artists[0].strArtistBanner;
    img.style = "width:100%";
    const imagen = document.getElementById("imagen");
    imagen.innerHTML = "";
    imagen.appendChild(img);

    const logo1 = document.createElement("img");
    logo1.src = artista.artists[0].strArtistLogo;
    logo1.style = "width:50%"
    const logo = document.getElementById("logo");
    logo.innerHTML = "";
    logo.appendChild(logo1);

    const nombre1 = document.getElementById("h2");
    nombre1.textContent = artista.artists[0].strArtist;
    const nombre = document.getElementById("nombreBanda");
    nombre.innerHTML = "";
    nombre.appendChild(nombre1);
}

function buscar()   {
    const condicion = document.getElementById("condicion").value
    const request = new XMLHttpRequest();
    request.addEventListener('load', Resultado);
    request.open('GET', 'https://www.theaudiodb.com/api/v1/json/2/search.php?s=' + condicion);   
    request.send();
}
