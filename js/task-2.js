const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const ingrRef = document.querySelector('#ingredients');

 ingredients.map (item =>(
    ingrRef.appendChild(document.createElement('li')) 
    .textContent = item));


