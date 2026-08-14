let createButton = document.querySelector('.js-create-button');

let inputBox = document.querySelector('.js-input-box')


createButton.addEventListener('click' , () =>{
  inputBox.classList.add('input-box-visible')
})