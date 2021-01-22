const inputValidRef = document.querySelector('#validation-input');
inputValidRef.addEventListener('change', validationCheck);


function validationCheck (event) {
    // const inputText = event.target.value;
    if(inputValidRef.textContent.length === inputValidRef.dataset.length){
        inputValidRef.classList.add("valid");
        inputValidRef.classList.remove("invalid");
        
    } else {
        inputValidRef.classList.add("invalid");
        inputValidRef.classList.remove("valid");
      
        
    }
