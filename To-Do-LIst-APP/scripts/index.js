const addButton = document.querySelector('.js-add-button');

addButton.addEventListener('click', () => {
  const taskInput = document.querySelector('.js-todo-input');
  const task = taskInput.value;

  if (task === '') {
    return;
  }

  const html = `
  <div class="task-container">

    <div class="js-check-button unchecked">
      <img src="images/unchecked.png" class="check-icon">
    </div>

    <div class="task">${task}</div>

    <div class="delete-button js-delete-button">
      &times;
    </div>

  </div>
`;

  document.querySelector('.js-tasks-container')
    .insertAdjacentHTML('beforeend', html);

  taskInput.value = '';
});


document.querySelector('.js-tasks-container')
  .addEventListener('click', (event) => {

    const checkButton = event.target.closest('.js-check-button');

    if (!checkButton) {
      return;
    }

    if (checkButton.classList.contains('unchecked')) {

      checkButton.classList.remove('unchecked');
      checkButton.classList.add('checked');

      checkButton.querySelector('.check-icon').src =
        'images/checked.png';

      checkButton.parentElement
        .querySelector('.task')
        .classList.add('completed');

    } else {

      checkButton.classList.remove('checked');
      checkButton.classList.add('unchecked');

      checkButton.querySelector('.check-icon').src =
        'images/unchecked.png';

      checkButton.parentElement
        .querySelector('.task')
        .classList.remove('completed');
    }
  });

document.querySelector('.js-tasks-container')
  .addEventListener('click', (event) => {

    const deleteButton = event.target.closest('.js-delete-button');

    if (!deleteButton) {
      return;
    }

    deleteButton.parentElement.remove();
  });