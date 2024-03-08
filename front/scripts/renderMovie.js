
function renderMovie(item){

    const target = document.createElement('div');
    target.classList.add('target');
  
  
    target.innerHTML = `
    <img src="${item.poster}" alt="${item.title}">
    <div class="content">  
    <a href="">${item.title}</a>
    <p class="año">${item.year}</p>
    <p class="director">${item.director}</p>
    <p class="genero">${item.genre.join(', ')}</p>
    <h6><span>IMDB</span><i class="bi bi-star-fill"></i>${item.rate}</h6>
    </div>`
    
    const containerCards = document.getElementById('container-cards')
    containerCards.appendChild(target);
} 

module.exports = renderMovie
