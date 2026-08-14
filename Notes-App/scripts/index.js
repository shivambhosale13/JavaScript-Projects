let createButton = document.querySelector('.js-create-button');

let notesHtml = localStorage.getItem('notes') || '';

document.querySelector('.js-notes-input').innerHTML = notesHtml;

addDeleteEvents();
addInputEvents();

createButton.addEventListener('click', () => {

  notesHtml += `
    <div class="input-box js-input-box"> 
      <p contenteditable="true"></p> 
      <img src="images/delete.png" alt="" class="delete-button js-delete-button"> 
    </div>
  `;

  document.querySelector('.js-notes-input').innerHTML = notesHtml;

  localStorage.setItem('notes', notesHtml);

  addDeleteEvents();
  addInputEvents()
});


function addDeleteEvents() {

  document.querySelectorAll('.js-delete-button').forEach((deleteButton) => {

    deleteButton.addEventListener('click', () => {

      deleteButton.parentElement.remove();

      notesHtml = document.querySelector('.js-notes-input').innerHTML;

      localStorage.setItem('notes', notesHtml);

    });

  });
}

function addInputEvents() {

  document.querySelectorAll('.js-input-box p').forEach((note) => {

    note.addEventListener('input', () => {
      notesHtml = document.querySelector('.js-notes-input').innerHTML;
      localStorage.setItem('notes', notesHtml);
    });

  });

}