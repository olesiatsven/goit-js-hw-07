// const items = [...document.querySelectorAll('li.item')];
// console.log(`В списке ${items.length} категории`);

// items.map(item =>{
//    const title = item.querySelector('h2');
//    const list  = item.querySelectorAll('ul li');
//    return {
//       title: title.textContent,
//       count: list.length
//    }   
// })
// .forEach(item => {
//    console.log('Категория: ', item.title, '\r\n Количество элементов: ',item.count)
// });




// #1.2
const findSelector = document.querySelectorAll('ul#categories > li.item');
console.log(`В списке ${findSelector.length} категории`);
function itemsCount(item) {
item.forEach((element) => console.log('Категория: ' + element.firstElementChild.textContent  + '\nКоличество элементов: ' + element.lastElementChild.children.length));

}
itemsCount(findSelector)


        

