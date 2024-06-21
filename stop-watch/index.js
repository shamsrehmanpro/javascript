let stop = document.querySelector('.stopbtn');
let play = document.querySelector('.startbtn');
let reset = document.querySelector('.resetbtn');
let hourDigits = document.querySelector('.digit1');
let minuteDigits = document.querySelector('.digit2');
let secondDigits = document.querySelector('.digit3');

let seconds = 0;
let minutes = 0;
let hours = 0;
let counter = 0;

play.addEventListener('click', function(){

    if(play.classList.contains('startbtn')){
    timer = true;
    stopWatch();
    play.src = './images/pause.png';
    play.classList.remove('startbtn');
    
    play.style.borderRadius = '100%';
    
    }
    else{
        timer =  false;
        play.src = './images/start.png';
        play.style.borderRadius = '100%';
        play.classList.add('startbtn');
    }
});
stop.addEventListener('click', function(){
    timer = false;
});
reset.addEventListener('click', function(){
    timer = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    hourDigits.innerHTML = hours;
    minuteDigits.innerHTML = minutes;
    secondDigits.innerHTML = seconds;
});

function stopWatch(){
    if(timer){
        counter++ ;
        if (counter == 100) {
            seconds++;
            counter = 0;
        }
        if (seconds == 60) {
            minutes++;
            seconds = 0;
        }
        if (minutes == 60) {
            hours++ ; 
            minutes = 0 ;
            seconds = 0;
        }
        hourDigits.innerHTML = hours;
        minuteDigits.innerHTML = minutes;
        secondDigits.innerHTML = seconds;
        setTimeout(stopWatch, 2);
    }

}