// Filtrar
function filterData(data, filterBy, condition) {
  let arrFilter = [];
  switch (filterBy) {
  case 'Type':
    if (condition === 'all') {
      arrFilter = data;
    } else {
      arrFilter = data.filter(compare => (compare.type[0] === condition || compare.type[1] === condition));
    }
    break;
  case 'Egg':
    if (condition === 'all') {
      arrFilter = data;
    } else {
      arrFilter = data.filter(compare => (compare.egg === condition));
    }
    break;
  default:
  }
  return arrFilter;
}

const numFilter = (data, dataFilter) => {
  let dataCopy = [];
  let arrFilter = [];
  data.forEach((element) => {
    dataCopy.push(Object.assign({}, element));
  });
  arrFilter = data.filter(element => element.num.indexOf(dataFilter) > -1);
  return arrFilter;
}; 

// Buscar
const searchByFilter = (data, dataFilter, condition) => {
  let dataCopy = [];
  let arrFilter = [];
  let saveObject = [];

  data.forEach((element) => {
    dataCopy.push(Object.assign({}, element));
  });

  if (dataFilter.length === 0)
    return data;
  
  switch (condition) {
  case 0:
    arrFilter = data.filter(
      element => element.num.indexOf(dataFilter) > -1);
    break;
  case 1:
    arrFilter = dataCopy.filter(
      element => element.name.toUpperCase().indexOf(dataFilter.toUpperCase()) !== -1);
    break;
  case 2:
    arrFilter = dataCopy.filter(
      element => element.egg.toLowerCase().indexOf(dataFilter.toLowerCase()) !== -1);
    break;
  case 3:
    arrFilter = dataCopy.filter(
      element => element.type.filter(
        ele => ele.toLowerCase().indexOf(dataFilter.toLowerCase()) > -1).length > 0);
    break;
  case 4:
    saveObject = numFilter(dataCopy, dataFilter);
    if (saveObject.length !== 0) {
      arrFilter = Object.keys(saveObject[0]).map(element => { 
        if (element === 'prev_evolution') { 
          return (saveObject[0].prev_evolution.map(element => {
            const newObject = {};
            newObject.name = numFilter(dataCopy, element.num)[0].name;
            newObject.num = numFilter(dataCopy, element.num)[0].num;
            newObject.img = numFilter(dataCopy, element.num)[0].img;
            return newObject;
          }));
        }
      }).filter(element => element);
    }
    break;
  case 5:
    saveObject = numFilter(dataCopy, dataFilter);
    if (saveObject.length !== 0) {
      arrFilter = Object.keys(saveObject[0]).map(element => {
        if (element === 'next_evolution') {
          return (saveObject[0].next_evolution.map(element => {
            const newObject = {};
            newObject.num = numFilter(dataCopy, element.num)[0].num;
            newObject.name = numFilter(dataCopy, element.num)[0].name;
            newObject.img = numFilter(dataCopy, element.num)[0].img; 
            return newObject; 
          })); 
        }
      }).filter(element => element);
    }
    break;
  default: 
  }
  return arrFilter;
};

// Ordenar
const sortData = (data, sortBy, sortOrder) => {
  let arrFilter = [];

  for (let i = 0; i < data.length; i++)
    arrFilter.push(Object.assign({}, data[i]));
  if (sortBy === 0) {
    arrFilter.sort((idA, idB) => {
      if (sortOrder === 0) return idA.id - idB.id;
      else return idB.id - idA.id;
    });
  } else {
    arrFilter.sort((nameA, nameB) => {
      if (sortOrder === 0) {
        if (nameA.name > nameB.name) return 1 ;
        else return -1;
      } else {
        if (nameA.name < nameB.name) return 1 ;
        else return -1;
      }
    });
  }
  return arrFilter ;
};

const stats = (data, condition) => {
  let arrPorcentaje = [];
  for (let i = 0; i < condition.length; i++) { 
    const arrFilterPokemonType = data.filter(compare => (compare.type[0] === condition[i] || compare.type[1] === condition[i]));   console.log(arrFilterPokemonType);
    const cantXType = arrFilterPokemonType.length; 
    const percentage = ((cantXType / 151) * 100);
    
    arrPorcentaje.push(percentage);  
  }
  return arrPorcentaje; 
};

window.data = {
  searchByFilter,
  sortData,
  filterData,
  stats,
  numFilter
};