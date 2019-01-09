// Filtrar
function filterData(data, filterBy, condition) {
  let arrFilter = [];
  switch (filterBy) {
  case 'Type':
    arrFilter = data.filter(compare => (compare.type[0] === condition || compare.type[1] === condition));
    break;
  case 'Egg':
    arrFilter = data.filter(compare => (compare.egg === condition));
    break;
  default:
  }
  return arrFilter;
}

// Ordenar
const sortData = (data, sortBy, sortOrder) => {
  let newArraySort = [];
  for (let i = 0; i < data.length; i++) {
    newArraySort.push(Object.assign({}, data[i]));	   
  }  

  switch (sortOrder) {
  case 'asc':
    if (sortBy === 'name') {
      newArraySort = newArraySort.sort((elementA, elementB) => (elementA.name > elementB.name ? 1 : -1));
    } else {
      newArraySort = newArraySort.sort((elementA, elementB) => (elementA.id > elementB.id ? 1 : -1));
    }
    break;
  case 'desc':
    if (sortBy === 'name') {
      newArraySort = newArraySort.sort((elementA, elementB) => (elementA.name < elementB.name ? 1 : -1));
    } else {
      newArraySort = newArraySort.sort((elementA, elementB) => (elementA.id < elementB.id ? 1 : -1));
    }
    break;
  }
  return newArraySort;
};

const stats = (data, condition) => {
  let arrPorcentaje = [];
  for (let i = 0; i < condition.length; i++) { 
    const arrFilterPokemonType = data.filter(compare => (compare.type[0] === condition[i] || compare.type[1] === condition[i]));
    const cantXType = arrFilterPokemonType.length; 
    const percentage = ((cantXType / 151) * 100);
    arrPorcentaje.push(percentage);  
  }
  return arrPorcentaje; 
};

window.data = {
  sortData,
  filterData,
  stats,
};