let createButton = document.querySelector('.js-create-button');

let inputBox = document.querySelector('.js-input-box')

let notesHtml = '';

createButton.addEventListener('click' , () =>{

  notesHtml += `
    <div class="input-box js-input-box">
      <p contenteditable="true"></p>
      <img src="images/delete.png" alt="" class="delete-button ">
    </div>
  `
  document.querySelector('.js-notes-input')
  .innerHTML = notesHtml;
});

