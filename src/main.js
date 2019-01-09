const pokemonCardContainer = document.getElementById('pokemon-container');
const sortBy = document.getElementById('pokemon-order');
const eggFilter = document.getElementById('egg-filter');
const typeFilter = document.getElementById('type-filter');
const pokemonData = window.POKEMON.pokemon;
const arrkeys = Object.values(window.POKEMON.pokemon);

const filterInArray = (arr) => {
  return arr.map(element => {
    return `<label class="badge-${element}">${element}</label>`;
  }).join(' ');
};

const pokemonTemplateCards = (pokemones) => {
  let templateCards = [];
  pokemonCardContainer.value = '';

  pokemones.forEach((element, i) => {
    templateCards.push(`
    <article class="col-md-3 col-sm-4 col-xs-6">
      <a href="#modal${i}">
        <div class="card-link col-md-12 col-sm-12 col-xs-12">
          <div class="article-details">
            <img class="post-image" src="${element.img}" />
            <h3 class="post-title">${element.name}</h3>
            <p class="post-description">#${element.num} </p>
            <p class="type-labels">${filterInArray(element.type)}</p>
          </div>
        </div>
      </a>
    </article>
    </a>
    <section id="modal${i}" class="modal-window">
      <section class="modal-container">
        <a href="#" class="arrow m-2 ml-md-4 px-2 py-1"><</a> 
        <section class="text-center">
            <h2 class="title-modal text-center mt-2">${element.name}</h2>
            <figure class="mb-2">
              <img src="${element.img}" alt="${element.name}">
            </figure>
            <div class="col-md-12 text-center text-md-center">
              <article class="mb-2">
                <h5> Número en la pokedex: </h5>
                <span class="text-size"> # ${element.num}</span>
              </article>
              <article class="mb-2">
                <h5 class="mb-0">Tipo:</h5>
                <p> ${filterInArray(element.type)}</p>
              </article>
              <article class="mb-2">
                <h5>Nombre de caramelos:</h5>
                <span class="text-size">${element.candy}</span>
              </article>
              <article class="mb-2">
                <h5 class="mb-0">Debilidades:</h5>
                <p> ${filterInArray(element.weaknesses)}</p>
              </article>
          </section>
          <section class="text-center">
             <div class="col p-2">
               <div>
               </div>
             </div>
          </section>
      </section>
    </section>`
    );
  });
  pokemonCardContainer.innerHTML = templateCards.join('');
};
pokemonTemplateCards(arrkeys);

const getOrderValue = () => {
  const sortByValue = sortBy.value;
  const valueSelectOrder = (sortByValue.split('-'));
  const sortDataValue = window.data.sortData(pokemonData, valueSelectOrder[0], valueSelectOrder[1], valueSelectOrder[2], valueSelectOrder[3]);
  pokemonTemplateCards(sortDataValue);
};
sortBy.addEventListener('change', getOrderValue);

document.getElementById('button-percentage').addEventListener('click', () => {
  const arrtypeFilter = ['Agua', 'Bicho', 'Dragon', 'Electrico', 'Fantasma', 'Fuego', 'Hielo', 'Lucha', 'Normal', 'Hierba', 'Psiquico', 'Roca', 'Tierra', 'Veneno', 'Volador'];
  const arrPercentage = window.data.stats(pokemonData, arrtypeFilter);

  google.charts.load('current', {'packages': ['corechart']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    const data = google.visualization.arrayToDataTable([
      ['Tipo de Pokémon', '% del total', {role: 'style'}],
      ['Agua', arrPercentage[0], 'color: #4C95F2'],
      ['Hierba', arrPercentage[1], 'color: #59E44E'],
      ['Tierra', arrPercentage[2], 'color: #C57242'],
      ['Hielo', arrPercentage[3], 'color: #29CDD7'], 
      ['Bicho', arrPercentage[4], 'color: #61B932'],
      ['Psíquico', arrPercentage[5], 'color: #EE4E92'],
      ['Fantasma', arrPercentage[6], 'color: #9E37AF'],
      ['Dragón', arrPercentage[7], 'color: #FF9814'],
      ['Veneno', arrPercentage[8], 'color: #CD1BEC'],
      ['Lucha', arrPercentage[9], 'color: #F0500A'],
      ['Fuego', arrPercentage[10], 'color: #ff8400'],
      ['Volador', arrPercentage[11], 'color: #82CAC9'],
      ['Roca', arrPercentage[12], 'color: #CA7D0D'],
      ['Eléctrico', arrPercentage[13], 'color: #f4f425'],
      ['Normal', arrPercentage[14], 'color: #A4A48E']  
    ]);

    const options = {
      title: 'Porcentaje de Pokemones por Tipo',
      colors: ['#4C95F2', '#59E44E', '#C57242', '#29CDD7', '#61B932', 'EE4E92', '9E37AF', 'FF9814', 'CD1BEC', 'F0500A', 'ff8400', '82CAC9', 'CA7D0D', 'f4f425', 'A4A48E' ],
      is3D: true
    };

    const chart = new google.visualization.PieChart(document.getElementById('pokemon-container'));
    document.getElementById('pokemon-container').classList.add('min-heigth-table');
    chart.draw(data, options);
  }
});

typeFilter.addEventListener('change', () => {
  const typeofFilter = 'Type';
  sortBy.selectedIndex = 0;
  const arrTemp = window.data.filterData(pokemonData, typeofFilter, typeFilter.value);
  pokemonTemplateCards(window.data.filterData(arrTemp, 'Type', typeFilter.value));
});

eggFilter.addEventListener('change', () => {
  const typeofFilter = 'Egg';
  sortBy.selectedIndex = 0;
  const arrTemp = window.data.filterData(pokemonData, typeofFilter, eggFilter.value);
  pokemonTemplateCards(window.data.filterData(arrTemp, 'Type', typeFilter.value));
});


