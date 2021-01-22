const inputRef = document.querySelector('#name-input');
const textRef = document.querySelector('#name-output');

inputRef.addEventListener('input', (event) => {
    if (event.target.value !== ""){
        textRef.textContent = event.target.value
    }
    
    else textRef.textContent = "незнакомец"
});

