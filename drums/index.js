var buttons = document.querySelectorAll('button');


buttons.forEach(element => {
    element.addEventListener('click', function(key){
        
        let thisKey = this.innerHTML;
        makeSound(thisKey);
        makeAnimation(element);
    });
    
});

document.addEventListener('keydown', function(e){
    makeSound(e.key);
    
    let keys = document.querySelector('.' + e.key);
    console.log(keys);
    makeAnimation(keys);
});

function makeAnimation(key){
    key.classList.add('pressed');
    setTimeout(() => {
        key.classList.remove('pressed');
    }, 200);
}

function makeSound(key){
    switch (key) {
        case 'w':
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            
            break;
            case 'a':
            var kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;   
            case 's':
                var snare = new Audio('./sounds/snare.mp3');
                snare.play();
            break;
            case 'd':
                var tom1 = new Audio('./sounds/tom-1.mp3');
                tom1.play();
            break;
            case 'j':
                var tom2 = new Audio('./sounds/tom-2.mp3');
                tom2.play();
            break;
            case 'k':
                var tom3 = new Audio('./sounds/tom-3.mp3');
                tom3.play();
            break;
            case 'l':
                var tom4 = new Audio('./sounds/tom-4.mp3');
                tom4.play();
            break; 
    
        default: console.log(key);;
    }

}