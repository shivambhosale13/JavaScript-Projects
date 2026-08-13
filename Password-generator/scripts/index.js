

document.querySelector('.js-Password-generate-button').addEventListener('click' , () =>{

  let password = generatePassword(10);

  document.querySelector('.js-Password-generate-box')
  .value = password;


})



function copyText() {
  const inputField = document.querySelector('.js-Password-generate-box');

  inputField.select();
  navigator.clipboard.writeText(inputField.value)

}

function generatePassword(length) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  let password = "";
  
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  
  return password;
}



document.querySelector('.js-copy-button').addEventListener('click' , () =>{
  copyText();
  
  const copied = document.querySelector('.js-copied');

  copied.classList.add('copied-show');

  setTimeout(() => {
    copied.classList.remove('copied-show');
  }, 1500);
})