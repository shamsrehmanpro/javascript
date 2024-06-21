const createNote = document.querySelector('.create');
const whiteText = document.querySelector('.white-text');
let para = document.querySelectorAll('p');

function createNotes(){
    const makeDiv = document.createElement('p');
    makeDiv.classList.add('white-area');
    whiteText.appendChild(makeDiv);
    makeDiv.setAttribute('contenteditable', 'true');
    const deletebtn = document.createElement('img')
    deletebtn.src = './images/delete.png';
    deletebtn.classList.add('delete-img');
    makeDiv.appendChild(deletebtn)

}

createNote.addEventListener('click', function(){
    createNotes();
});

function updateStorage(){
    localStorage.setItem('notes', whiteText.innerHTML)
}

function showNotes(){
    whiteText.innerHTML = localStorage.getItem('notes');
}

showNotes();



whiteText.addEventListener('click', function(e){
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if (e.target.tagName === 'P') {
        para = document.querySelectorAll('p');

        para.forEach(e => {
            e.onkeyup = function(){
                updateStorage();
            }
        })
    }
});

document.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        document.execCommand('insertLineBreak');
        e.preventDefault();
    }
});


