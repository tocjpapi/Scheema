

const descriptionOptions = document.querySelector(
    '.description-options');

descriptionOptions.addEventListener('click', function(e) {
    const optionYes = document.querySelector('#description-option-yes');
    const optionNo = document.querySelector('#description-option-no');
    optionYes.classList.toggle('active-option');
    optionNo.classList.toggle('active-option');
    e.preventDefault();
    const textAreaContainer = document.querySelector(".text-area-container")
    textAreaContainer.classList.toggle('invisible');
    textAreaContainer.style.height = '0px';
    textAreaContainer.style.marginTop = '0px'
    textAreaContainer.style.marginBottom = '0px'
    if(optionYes.classList.contains('active-option')){
        textAreaContainer.style.height = '300px';
        textAreaContainer.style.marginTop = '20px'
    }
})

const clipRecorderOptions = document.querySelector("#clip-recorder-options");
clipRecorderOptions.addEventListener("click", function(e) {
    e.preventDefault();
    const optionYes = document.querySelector('#clip-recorder-yes');
    const optionNo = document.querySelector('#clip-recorder-no');
    optionYes.classList.toggle('active-option');
    optionNo.classList.toggle('active-option');


    const clipRecorderInput = document.querySelector("#clip-recorder-input");
    clipRecorderInput.style.height = '0px';
    clipRecorderInput.style.marginTop = '0px'
    clipRecorderInput.style.marginBottom = '0px'
    clipRecorderInput.classList.toggle('invisible');
    if(optionNo.classList.contains('active-option')){
        clipRecorderInput.style.height = '120px';
    }
})

const creditOptions = document.querySelector('.credit-options');
creditOptions.addEventListener('click', function(e) {
    e.preventDefault();
    const optionYes = document.querySelector('#optional-credit-yes');
    const optionNo = document.querySelector('#optional-credit-no');
    optionYes.classList.toggle('active-option');
    optionNo.classList.toggle('active-option');

    const optionalCreditInfo = document.querySelector("#optional-credit-content");
    optionalCreditInfo.classList.toggle('invisible');
    optionalCreditInfo.style.height = '0px';

    if(optionYes.classList.contains('active-option')){
        optionalCreditInfo.style.height = '250px'
    }
})
