let searchBox = document.querySelector('input');
let searchBtn = document.querySelector('button');
let list = document.querySelector('.list');
let li = document.querySelector('li');


searchBtn.addEventListener('click', function(){
    let li = document.createElement('li');
    li.innerHTML = searchBox.value;
    list.appendChild(li);
    let span = document.createElement('span');
    span.innerHTML = 'X';
    li.appendChild(span);
    saveData();
});

list.addEventListener('click', function(e){
    console.log(e.target);
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    }
    if (e.target.tagName === 'SPAN') {
        
        e.target.parentElement.remove();
        saveData();
    }
});
console.log(list.innerHTML);
function saveData(){
    localStorage.setItem('data', list.innerHTML);
}

function showData(){
    list.innerHTML = localStorage.getItem('data');
}

showData();