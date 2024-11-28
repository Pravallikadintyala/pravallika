// To-Do List functionality
function addTodo() {
    const input = document.getElementById('todo-input');
    const todoText = input.value.trim();
    
    if (todoText === '') {
        alert('Please enter a task.');
        return;
    }

    const todoList = document.getElementById('todo');
    
    // Create new list item
    const li = document.createElement('li');
    li.innerHTML = `<input type="checkbox" class="todo-checkbox"> ${todoText}`;
    
    // Append new item to the list
    todoList.appendChild(li);
    
    // Clear the input field
    input.value = '';
}

// Course Filter and Sort functionality
document.getElementById('category').addEventListener('change', filterCourses);
document.getElementById('sort').addEventListener('change', sortCourses);

function filterCourses() {
    const category = document.getElementById('category').value;
    const courseItems = document.querySelectorAll('.course-item');

    courseItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (category === 'all' || itemCategory === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function sortCourses() {
    const sortOrder = document.getElementById('sort').value;
    const courseItems = Array.from(document.querySelectorAll('.course-item'));

    courseItems.sort((a, b) => {
        const difficultyA = parseInt(a.getAttribute('data-difficulty'));
        const difficultyB = parseInt(b.getAttribute('data-difficulty'));

        if (sortOrder === 'high-to-low') {
            return difficultyB - difficultyA;
        } else if (sortOrder === 'low-to-high') {
            return difficultyA - difficultyB;
        } else {
            return 0; // No sorting
        }
    });

    const courseGrid = document.querySelector('.course-grid');
    courseGrid.innerHTML = ''; // Clear the existing list

    // Append sorted items back to the grid
    courseItems.forEach(item => {
        courseGrid.appendChild(item);
    });
}

// Contact Form Submission (Example of alert for form submission)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent actual form submission
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for reaching out, ' + name + '! We will respond shortly.');
        // Optionally, you can clear the form after submission
        this.reset();
    } else {
        alert('Please fill out all fields.');
    }
});
