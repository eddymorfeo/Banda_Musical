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

    const nombre1 = document.createElement("h1");
    nombre1.innerHTML = artista.artists[0].strArtist;
    const nombre = document.getElementById("nombreBanda");
    nombre.innerHTML = "";
    nombre.appendChild(nombre1);

    const estilo = document.createElement("h4");
    estilo.innerHTML = artista.artists[0].strStyle;
    const estilo1 = document.getElementById("estiloBanda");
    estilo1.innerHTML = "";
    estilo1.appendChild(estilo);

    const genero = document.createElement("h4");
    genero.innerHTML = artista.artists[0].strGenre;
    const genero1 = document.getElementById("generoBanda");
    genero1.innerHTML = "";
    genero1.appendChild(genero);

    const pagina = document.createElement("a");
    pagina.innerHTML = artista.artists[0].strWebsite;
    const pagina1 = document.getElementById("paginaBanda");
    pagina1.innerHTML = "";
    pagina1.appendChild(pagina);

    const biografia = document.createElement("p");
    biografia.innerHTML = artista.artists[0].strBiographyES;
    const biografia1 = document.getElementById("biografiaBanda");
    biografia1.innerHTML = "";
    biografia1.appendChild(biografia);

}

function buscar()   {
    const condicion = document.getElementById("condicion").value
    const request = new XMLHttpRequest();
    request.addEventListener('load', Resultado);
    request.open('GET', 'https://www.theaudiodb.com/api/v1/json/2/search.php?s=' + condicion);   
    request.send();
}
