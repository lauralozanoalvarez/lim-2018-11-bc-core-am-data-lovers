const inputSearchText = document.getElementById('input-search-text');
const btnSearch = document.getElementById('btn-search');
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

const evolutionFilter = (data, arrEvolution) => {
  let stringLabel = [];
  let preEvolution = [];
  let nextEvolution = [];

  preEvolution = window.data.searchByFilter(data, arrEvolution, 4);
  if (preEvolution) {
    preEvolution.map(element => {
      element.map(ele => {
        stringLabel.push(`
        <div class="pokemon-evolution col p-2">
        <img src=${ele.img} alt=${ele.name}/>
        <h6>Pre Evolution</h6>
        <h6>${ele.name}</h6>
        <h6>${ele.num}</h6>
        </div>`);
      });
    });
  }
  nextEvolution = window.data.searchByFilter(data, arrEvolution, 5);
  if (nextEvolution) {
    nextEvolution.map(element => {
      element.map(ele => {
        stringLabel.push(`
        <div class="pokemon-evolution col p-2">
        <img src=${ele.img} alt={name} />
        <h6>Next Evolution</h6>
        <h6>${ele.name}</h6>
        <h6>${ele.num}</h6>
        </div>`);
      });
    });
  }
  return stringLabel.join('');
};

const pokemonTemplateCards = (pokemones) => {
  let data = [];
  let templateCards = [];
  pokemonCardContainer.value = '';
  
  pokemones.forEach((element) => {
    data.push(Object.assign({}, element));
  });

  data.forEach((element, i) => {
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
               <div>${evolutionFilter(window.POKEMON.pokemon, element.num)}
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
      width: 1350,
      colors: ['#4C95F2', '#59E44E', '#C57242', '#29CDD7', '#61B932', 'EE4E92', '9E37AF', 'FF9814', 'CD1BEC', 'F0500A', 'ff8400', '82CAC9', 'CA7D0D', 'f4f425', 'A4A48E' ],
      is3D: true
    };

    const chart = new google.visualization.PieChart(document.getElementById('pokemon-container'));
    document.getElementById('pokemon-container').classList.add('min-heigth-table');
    chart.draw(data, options);
  }
});

let dataFilter = [];
let saveArrObjectFilter = [];

const listenFilter = (dataFilter, listenFilterBy) => {
  return window.data.searchByFilter(pokemonData, dataFilter, listenFilterBy);
};
const listenOrder = (dataOrder) => {
  const listenOrderBy = sortBy.options[sortBy.selectedIndex].value;
  return window.data.sortData(dataOrder, parseInt(listenOrderBy[0]), parseInt(listenOrderBy[1]));
};
const listenFilterOrder = (dataFilter, listenFilterBy) => {
  return listenOrder(listenFilter(dataFilter, listenFilterBy));
};

const detectLetterNum = (stringData) => {
  let num = 0;
  let letter = 0;
  stringData.split('').forEach((element) => {
    if (isNaN(element)) letter = 1;
    else num = 1;
  });

  if (num && letter) return -1;
  else if (num) return 0;
  else return 1;
};

const Main = () => {
  saveArrObjectFilter = listenFilterOrder(dataFilter, 0);
  pokemonTemplateCards(saveArrObjectFilter);
  
  btnSearch.addEventListener('click', () => {
    eggFilter.selectedIndex = 0;
    sortBy.selectedIndex = 0;
    typeFilter.selectedIndex = 0;
    dataFilter = inputSearchText.value;
    saveArrObjectFilter = listenFilterOrder(dataFilter, detectLetterNum(dataFilter));
    pokemonTemplateCards(saveArrObjectFilter);
  });

  sortBy.addEventListener('change', () => {
    eggFilter.selectedIndex = 0;
    pokemonTemplateCards(listenOrder(saveArrObjectFilter));
  });
  
  typeFilter.addEventListener('change', () => {
    sortBy.selectedIndex = 0;
    eggFilter.selectedIndex = 0;
    inputSearchText.value = '';
    dataFilter = typeFilter.options[typeFilter.selectedIndex].value;
    saveArrObjectFilter = listenOrder(listenFilter(dataFilter, 3));
    pokemonTemplateCards(saveArrObjectFilter);
  });

  eggFilter.addEventListener('change', () => {
    const typeofFilter = 'Egg';
    inputSearchText.value = '';
    sortBy.selectedIndex = 0;
    const arrTemp = window.data.filterData(pokemonData, typeofFilter, eggFilter.value);
    pokemonTemplateCards(window.data.filterData(arrTemp, 'Type', typeFilter.value));
  });
};

Main();