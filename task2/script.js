function addTask() {
    const input = document.getElementById('todo-input');
    const taskText = input.value.trim();
    
    if (taskText !== '') {
        const tasksList = document.getElementById('tasks');
        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            tasksList.removeChild(li);
        };

        li.appendChild(deleteButton);
        tasksList.appendChild(li);
        input.value = '';
    } else {
        alert('Please enter a task.');
    }
}

document.getElementById('college-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const confirmationMessage = document.getElementById('confirmation-message');
    confirmationMessage.textContent = 'Form submitted successfully!';
    confirmationMessage.style.color = 'green';
    this.reset();
});
