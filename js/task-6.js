const inputValidRef = document.querySelector('#validation-input');
inputValidRef.addEventListener('change', validationCheck);

function validationCheck (event) {
    const inputText = event.target.value;
    if( inputText.length  == inputValidRef.dataset.length){
        addValid ()
        
    } else {
        removeValid()
        
    }
};

// винесла в окрему функцію
const addValid = () => {
    inputValidRef.classList.add("valid");
    inputValidRef.classList.remove("invalid");
};
const removeValid = () => {
    inputValidRef.classList.add("invalid");
    inputValidRef.classList.remove("valid");
};



