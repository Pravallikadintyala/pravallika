// JavaScript for To-Do List functionality
function addTask() {
    const input = document.getElementById('todo-input');
    const taskText = input.value.trim();
    
    if (taskText !== '') {
        const tasksList = document.getElementById('tasks');

        // Create a new list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a delete button for the task
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            tasksList.removeChild(li);
        };

        li.appendChild(deleteButton);
        tasksList.appendChild(li);

        // Clear the input field after adding the task
        input.value = '';
    } else {
        alert('Please enter a task.');
    }
}

// JavaScript for form submission
document.getElementById('college-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission

    // Display a confirmation message after form submission
    const confirmationMessage = document.getElementById('confirmation-message');
    confirmationMessage.textContent = 'Form submitted successfully!';
    confirmationMessage.style.color = 'green';

    // Optional: Clear the form fields after submission
    this.reset();
});
