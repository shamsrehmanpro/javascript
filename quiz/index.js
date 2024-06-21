let questions = [
    {
        quesion : 'what is the capital of France ?',
        answers : [
           { text : 'Paris', correct : true},
           { text : 'London', correct : false},
           { text : 'Pakistan', correct : false},
           { text : 'Germany', correct : false}
        ]
    },
    {
        quesion : 'what is the capital of Pakistan ?',
        answers : [
           { text : 'Islamabad', correct : false},
           { text : 'London', correct : false},
           { text : 'Pakistan', correct : true},
           { text : 'Germany', correct : false}
        ]
    },
    {
        quesion : 'what is the capital of England ?',
        answers : [
           { text : 'Paris', correct : false},
           { text : 'London', correct : true},
           { text : 'Pakistan', correct : false},
           { text : 'Germany', correct : false}
        ]
    },
    {
        quesion : 'what is the capital of Russia ?',
        answers : [
           { text : 'Paris', correct : true},
           { text : 'London', correct : false},
           { text : 'Pakistan', correct : false},
           { text : 'Germany', correct : false}
        ]
    }

]

let question = document.querySelector('p');
let answersButton = document.querySelector('.answer');
let nextButton = document.querySelector('.next');



let questionIndex = 0;
let score = 0;

function resetState(){
    nextButton.style.display = 'none';
    while(answersButton.firstChild){
        answersButton.removeChild(answersButton.firstChild);
    }
}

function startQuiz(){
    questionIndex = 0 ;
    score=0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[questionIndex];
    let questionNo = questionIndex + 1;
    question.innerHTML = questionNo + ' . ' + currentQuestion.quesion;

    currentQuestion.answers.forEach(answer=>{
        let button = document.createElement('button');
        button.innerHTML = answer.text;
        answersButton.appendChild(button);

        if(answer.correct){
            console.log(answer);
            button.dataset.correct = answer.correct;
        }

        button.addEventListener('click', selectAnswer);
    })
}

    function selectAnswer(e){
        if(e.target.dataset.correct === 'true'){
            e.target.classList.add('correct');
            score++;
        }
        else{
            e.target.classList.add('incorrect');
        }

        Array.from(answersButton.children).forEach(btn =>{
            if(btn.dataset.correct === 'true'){
                btn.classList.add('correct');
                
            }
            btn.disabled = true;
            nextButton.style.display = 'block';
        })
    }

    function handleNextButton(){
        questionIndex++;
        if (questionIndex < questions.length) {
            showQuestion();
        }
        else{
            showScore();
        }
    }

    nextButton.addEventListener('click', function(){
       
        if(questionIndex < questions.length){
            handleNextButton();
        }
        else{
            startQuiz();
        }
    });
    function showScore(){
        resetState();
        question.innerHTML = 'Your score is ' + score + ' out of ' + questions.length;
        nextButton.innerHTML = 'play Again';
        nextButton.style.display = 'block';
    }




startQuiz();