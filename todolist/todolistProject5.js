document.getElementsByClassName("plus")[0].addEventListener("click", addTask)

document.querySelector('.secondary-container').addEventListener('click', strikeThrough)

document.getElementsByClassName('secondary-container')[0].addEventListener('click', removeTask)

function addTask() {
  taskName = document.getElementsByTagName("input")[0].value;
  if (taskName.length == 0) {
    return;
  }
  var taskDiv = document.createElement('div');
  taskDiv.setAttribute('class', 'task');

  var taskNameDiv = document.createElement('div');
  taskNameDiv.setAttribute('class', 'task-name');
  taskNameDiv.innerText = taskName;

  var taskDoneDiv = document.createElement('div');
  taskDoneDiv.setAttribute('class', 'task-done');
  var iconDone = document.createElement('i');
  iconDone.setAttribute('class', 'fa-solid fa-check');
  taskDoneDiv.appendChild(iconDone);

  var taskRemoveDiv = document.createElement('div');
  taskRemoveDiv.setAttribute('class', 'task-remove');
  var iconRemove = document.createElement('i');
  iconRemove.setAttribute('class', 'fa-solid fa-trash');
  taskRemoveDiv.appendChild(iconRemove);

  taskDiv.appendChild(taskNameDiv);
  taskDiv.appendChild(taskDoneDiv);
  taskDiv.appendChild(taskRemoveDiv);

  document.getElementsByClassName('secondary-container')[0].style.display = 'block';
  document.getElementsByClassName('secondary-container')[0].appendChild(taskDiv);
}

function strikeThrough(e) {
  e.stopPropagation();
  if (e.target.classList.contains('task-done'))
    e.target.previousElementSibling.style["text-decoration"] = 'line-through';
  else if (e.target.classList.contains('fa-check')) {
    e.target.parentElement.previousElementSibling.style["text-decoration"] = 'line-through';
  }
}

function removeTask(e) {
  e.stopPropagation();
  if (e.target.classList.contains('task-remove'))
    e.target.parentElement.remove();
  else if (e.target.classList.contains('fa-trash'))
    e.target.parentElement.parentElement.remove();
  if (document.getElementsByClassName('secondary-container')[0].children.length == 0) {
    document.getElementsByClassName('secondary-container')[0].style['display'] = 'none';
  }
}




