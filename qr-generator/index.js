let inputText = document.querySelector('input');
let generateButton = document.querySelector('button');
let qrImage = document.querySelector('img');
let imgDiv = document.querySelector('.img-div')

function generateQR(){
            if (inputText.value.length > 0 ){
                qrImage.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + inputText.value;
                imgDiv.style.display = 'block';
            }
            else{
                inputText.classList.add('err');
                setTimeout(() => {
                    inputText.classList.remove('err')
                }, 1000);
            }
}

