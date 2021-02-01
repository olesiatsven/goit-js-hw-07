// const inputRef = document.querySelector('#name-input');
// const textRef = document.querySelector('#name-output');

// inputRef.addEventListener('input', (event) => {
//     if (event.target.value !== ""){
//         textRef.textContent = event.target.value
//     }
    
//     else textRef.textContent = "незнакомец"
// });

// 5.2

const inputRef = document.querySelector('#name-input');
const textRef = document.querySelector('#name-output');

const emptyInputText = textRef.textContent;
const showInputText =  (event) => {
    return event.target.value ? textRef.textContent = event.target.value : textRef.textContent = emptyInputText;
}

inputRef.addEventListener('input',showInputText );

