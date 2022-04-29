function Resultado()  {
    const artista = JSON.parse(this.responseText);

    const img = document.createElement("img");
    img.src = artista.artists[0].strArtistThumb;
    img.style = "width:100%";
    const imagen = document.getElementById("imagen");
    imagen.innerHTML = "";
    imagen.appendChild(img);

    const logo1 = document.createElement("img");
    logo1.src = artista.artists[0].strArtistLogo;    
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
    biografia.innerHTML = artista.artists[0].strBiographyEN;
    const biografia1 = document.getElementById("biografiaBanda");
    biografia1.innerHTML = "";
    biografia1.appendChild(biografia);   
    
}


/*function Discografia() {
    const albumes = JSON.parse(this.responseText);    
    
    const discos = document.createElement("li");
    discos.innerHTML = albumes.album[0].strAlbum;
    const dis = document.getElementById("discografia");
    dis.innerHTML = "";
    dis.appendChild(discos); 

    const anio = document.createElement("label");
    anio.innerHTML = albumes.album[0].intYearReleased;
    const anioDisco = document.getElementById("anio");
    anioDisco.innerHTML = "";
    anioDisco.appendChild(anio); 
    
}*/


function Discografia() {
    const artista = JSON.parse(this.responseText);
    let discos = document.getElementById("discografiaBanda");
    discos.innerHTML = "";
    artista.album.forEach(alb => {
        const fila = document.createElement("div")
        fila.className = "row"
        const colAnio = document.createElement("div")
        colAnio.className = "col-1"
        colAnio.innerHTML = alb.intYearReleased
        const colDisco = document.createElement("div")
        colDisco.className = "col-4"
        colDisco.innerHTML = alb.strAlbum
        fila.appendChild(colAnio)
        fila.appendChild(colDisco)
        discos.appendChild(fila)
    });
}



/*function Discografia()   {
    let discos = document.getElementById("discografia");
    discos.innerHTML = "";
    personas.forEach(pers => {
        const fila = document.createElement("div")
        fila.className = "row"
            const colNombre = document.createElement("div")
            colNombre.className = "col-4"
            colNombre.innerHTML = pers.nombre
            const colApellido = document.createElement("div")
            colApellido.className = "col-4"
            colApellido.innerHTML = pers.apellido
        fila.appendChild(colNombre)
        fila.appendChild(colApellido)
        elementoPersonas.appendChild(fila)
    });
}*/

function buscar()   {
    const condicion = document.getElementById("condicion").value
    const condicion2 = document.getElementById("condicion").value
    const request = new XMLHttpRequest();    
    request.addEventListener('load', Resultado);
    const request2 = new XMLHttpRequest();
    request2.addEventListener('load', Discografia);
    request.open('GET', 'https://www.theaudiodb.com/api/v1/json/2/search.php?s=' + condicion); 
    request.send();      
    request2.open('GET', 'https://theaudiodb.com/api/v1/json/2/discography.php?s=' + condicion2);    
    request2.send();
}
