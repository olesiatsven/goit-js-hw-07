const inputValidRef = document.querySelector('#validation-input');
inputValidRef.addEventListener('change', validationCheck);


function validationCheck (event) {
    const inputText = event.target.value;
    if( inputText.length  == inputValidRef.dataset.length){
        
        inputValidRef.classList.add("valid");
        inputValidRef.classList.remove("invalid");
       
       
    } else {
        inputValidRef.classList.remove("valid");
        inputValidRef.classList.add("invalid");
        
        
        
        
    }
};
