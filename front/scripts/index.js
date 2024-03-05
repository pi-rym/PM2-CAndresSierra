tempData.map((item) => {
    const target = document.createElement('div');

    const titulo = document.createElement('a')
    titulo.textContent = item.title;
    titulo.setAttribute('href', '#')

    const img = document.createElement('img')
    img.src = item.poster;

    const año = document.createElement('p')
    año.textContent = item.year;

    const director = document.createElement('p')
    director.textContent = item.director;

    const duracion = document.createElement('p')
    duracion.textContent = item.duration;

    const genero = document.createElement('p')
    genero.textContent = item.genre;

    const calificacion = document.createElement('p')
    calificacion.textContent = item.rate;

    target.classList.add('target');
    titulo.classList.add('titulo');
    img.classList.add('poster');
    año.classList.add('año');
    director.classList.add('director');
    duracion.classList.add('duracion');
    genero.classList.add('genero');
    calificacion.classList.add('calificacion');

    target.appendChild(titulo);
    target.appendChild(img);
    target.appendChild(año);
    target.appendChild(director);
    target.appendChild(duracion);
    target.appendChild(genero);
    target.appendChild(calificacion);
    
    const containerCards = document.getElementById('container-cards')
    containerCards.appendChild(target);
    
})



console.log(tempData);
