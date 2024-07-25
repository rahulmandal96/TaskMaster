document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
        }
    });

    // Initialize the theme
    body.classList.add('light-mode');

    // Schedule Tracker
    const scheduleForm = document.getElementById('scheduleForm');
    const scheduleInput = document.getElementById('scheduleInput');
    const dateInput = document.getElementById('dateInput');
    const timeInput = document.getElementById('timeInput');
    const scheduleList = document.getElementById('scheduleList');

    scheduleForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = scheduleInput.value.trim();
        const date = dateInput.value;
        const time = timeInput.value;
        if (task && date && time) {
            addTaskToTable(task, date, time);
            scheduleInput.value = '';
            dateInput.value = '';
            timeInput.value = '';
        }
    });

    function addTaskToTable(task, date, time) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${task}</td>
            <td>${date}</td>
            <td>${time}</td>
            <td>
                <button class="editButton">Edit</button>
                <button class="deleteButton">Delete</button>
            </td>
        `;
        row.querySelector('.deleteButton').addEventListener('click', () => {
            row.remove();
        });
        row.querySelector('.editButton').addEventListener('click', () => {
            const newTask = prompt('Edit Task:', task);
            const newDate = prompt('Edit Date:', date);
            const newTime = prompt('Edit Time:', time);
            if (newTask && newDate && newTime) {
                row.children[0].textContent = newTask;
                row.children[1].textContent = newDate;
                row.children[2].textContent = newTime;
            }
        });
        scheduleList.appendChild(row);
    }

    // Assignment Tracker
    const assignmentForm = document.getElementById('assignmentForm');
    const assignmentInput = document.getElementById('assignmentInput');
    const dueDateInput = document.getElementById('dueDateInput');
    const assignmentList = document.getElementById('assignmentList');

    assignmentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const assignment = assignmentInput.value.trim();
        const dueDate = dueDateInput.value;
        if (assignment && dueDate) {
            addAssignmentToList(assignment, dueDate);
            assignmentInput.value = '';
            dueDateInput.value = '';
        }
    });

    function addAssignmentToList(assignment, dueDate) {
        const li = document.createElement('li');
        li.innerHTML = `
            ${assignment} - Due: ${dueDate} <button class="deleteButton">Delete</button>
        `;
        li.querySelector('.deleteButton').addEventListener('click', () => {
            li.remove();
        });
        assignmentList.appendChild(li);
    }

    // Notes Section
    const notesForm = document.getElementById('notesForm');
    const notesInput = document.getElementById('notesInput');
    const notesList = document.getElementById('notesList');

    notesForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const note = notesInput.value.trim();
        if (note) {
            addNoteToList(note);
            notesInput.value = '';
        }
    });

    function addNoteToList(note) {
        const li = document.createElement('li');
        li.innerHTML = `
            ${note} <button class="editButton">Edit</button>
            <button class="deleteButton">Delete</button>
        `;
        li.querySelector('.editButton').addEventListener('click', () => {
            const newNote = prompt('Edit Note:', note);
            if (newNote) {
                li.children[0].textContent = newNote;
            }
        });
        li.querySelector('.deleteButton').addEventListener('click', () => {
            li.remove();
        });
        notesList.appendChild(li);
    }
});
