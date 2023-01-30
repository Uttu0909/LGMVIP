const form = document.querySelector('form');
const input = document.querySelector('#new-todo');
const todoList = document.querySelector('#todo-list');

form.addEventListener('submit', addTodo);

function addTodo(e) {
  e.preventDefault();
  if (!input.value) return;

  const li = document.createElement('li');
  li.innerHTML = input.value;
  
  // Create a remove button
  const removeBtn = document.createElement('button');
  removeBtn.classList.add('remove-btn');
  removeBtn.innerHTML = 'X';
  removeBtn.addEventListener('click', removeTodo);
  
  // Add the remove button to the TODO item
  li.appendChild(removeBtn);
  
  // Add the TODO item to the list
  todoList.appendChild(li);
  
  // Clear the input field
  input.value = '';
}

function removeTodo(e) {
  const li = e.target.parentElement;
  todoList.removeChild(li);
}
