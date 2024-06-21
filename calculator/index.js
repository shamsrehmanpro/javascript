let button = document.querySelectorAll('p');
let showResult = document.querySelector('input'); 

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function(){
        const thisTag = this.innerHTML;
        makeResult(thisTag);
    });
    
}


function makeResult(key){
    switch (key) {
        case 'AC':
            showResult.value = '';
            break;
        case 'DE':
            showResult.value += 'DE';
            break;
        case '.':
            showResult.value += '.';
            break;    
        case '/':
                showResult.value += '/';
                break;
        case '7':
                showResult.value += '7';
                break;
        case '8':
                showResult.value += '8';
                break;
        case '9':
                    showResult.value += '9';
                    break;
        case '*':
                    showResult.value += '*';
                    break;
        case '4':
                    showResult.value += '4';
                    break;
        case '5':
            showResult.value += '5';
            break;
       case '6':
            showResult.value += '6';
            break;
        case '-':
            showResult.value += '-';
            break;
        case '1':
            showResult.value += '1';
            break;
        case '2':
            showResult.value += '2';
            break;
        case '3':
            showResult.value += '3';
            break;
            break; 
            case '+':
                showResult.value += '+';
                break;
            case '00':
                showResult.value += '00';
                break;
            case '0':
                showResult.value += '0';
                break;
            case '=':
                finalResult(key);
                break;
            
            default: console.log(key); 
    }
}

var resultButton = document.querySelector('.grows');

function finalResult(e){
    console.log(e);
    if(e === '='){
        var x = showResult.value;
        var y = math.evaluate(x);
        showResult.value = y;
    }
}