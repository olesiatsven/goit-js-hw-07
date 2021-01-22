
const incrementAction = document.querySelector('button[data-action="increment"]');
const decrementAction = document.querySelector('button[data-action="decrement"]');

let counterValue = 0;
incrementAction.addEventListener('click', increment);


decrementAction.addEventListener ('click', decrement);


function  increment () {
    counterValue +=1;
    document.getElementById('value').innerHTML = counterValue;
}

function decrement () {
    counterValue -= 1;
    document.getElementById('value').innerHTML = counterValue;
}