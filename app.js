document.getElementById('add-task-button').addEventListener('click', function () {
    let taskInput = document.getElementById('new-task');
    let taskText = taskInput.value;
  
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }
  
    // Create a new task item
    let newTask = document.createElement('li');
    newTask.innerHTML = `
      ${taskText}
      <button class="delete-btn">Delete</button>
    `;
  
    // Add click event to mark the task as complete
    newTask.addEventListener('click', function () {
      this.classList.toggle('completed');
    });
  
    // Add click event to delete the task
    newTask.querySelector('.delete-btn').addEventListener('click', function (e) {
      e.stopPropagation();
      newTask.remove();
    });
  
    // Add the new task to the list
    document.getElementById('task-list').appendChild(newTask);
  
    // Clear the input field
    taskInput.value = '';
  });
  