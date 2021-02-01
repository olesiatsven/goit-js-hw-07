const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

// const ingrRef = document.querySelector('#ingredients');

//  ingredients.map (item =>(
//     ingrRef.appendChild(document.createElement('li')) 
//     .textContent = item));




// 2.2

const ingrRef = document.querySelector('#ingredients')

function addIngredient (ingredient,item) {
  const ingrItems = ingredient.map(element => {
    const createElement = document.createElement('li')
    createElement.textContent = element 
    return createElement
  })
  item.append(...ingrItems)
}

addIngredient(ingredients,ingrRef);