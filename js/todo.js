var btn = document.querySelector('.todo__button-add');
var input = document.querySelector('.todo__input');
var list = document.querySelector('.todo__list');
var clearBtn = document.querySelector('.todo__button-delete');

btn.addEventListener('click', function () {
    var el = document.createElement('li');
    el.innerText = input.value;
    if (el.innerText != '') {
        list.appendChild(el);
        el.className = 'todo__task';
        var removeBtn = document.createElement('button');
        removeBtn.innerText = 'remove';
        removeBtn.className = 'todo__button-remove';
        el.appendChild(removeBtn);
        removeBtn.addEventListener('click', function (event) {
            event.stopPropagation();
            event.currentTarget.parentNode.remove();
        });
    }
});
clearBtn.addEventListener('click', function () {
    //list.parentNode.removeChild(list);
    var li = document.querySelectorAll('.todo__task');
    for (var i = 0; i < li.length; i++) {
        li[i].parentNode.removeChild(li[i]);
    }
});

list.addEventListener('click', function (event) {
    if (event.target.classList.contains('todo__task-decoration')) {
        event.target.classList.remove('todo__task-decoration');
    } else {
        event.target.classList.add('todo__task-decoration');
    }
});