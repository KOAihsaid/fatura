document.getElementById('add-task').addEventListener('click', function() {
    var newTask = document.getElementById('new-task').value;
    if (newTask) {
        var li = document.createElement('li');
        li.textContent = newTask;
        document.getElementById('tasks').appendChild(li);
        document.getElementById('new-task').value = ''; // Clear the input
    }
});
