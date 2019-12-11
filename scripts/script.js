var counter= "75";

var startButton = document.getElementById('start-btn')

var questionContainerEl =document.getElementById('question-container')

var nextButton = document.getElementById('next-btn')

var questionEl= document.getElementById('question')

var answerEl=document.getElementById('answer-buttons')

var shuffledQuestions, currentQuestionIndex



// Create the Timer that will be in the top left
function timer(){
    var element= document.getElementById('timer');
    element.innerHTML=(counter);

    function countDown(){
        counter--;
        element.innerHTML=(counter);
    }
     
    newVar = setInterval(countDown, 1000)
    
    
    if(counter < 0) {
        element.innerHTML=("0");
    }
}
timer()

function startGame(){
    console.log('Started');
    startButton.classList.add("hide");
    shuffledQuestions= questions.sort(() => Math.random()-.5);
    currentQuestionIndex = 0
    questionContainerEl.classList.remove('hide')
    nextQuestion()
}

function nextQuestion(){
    reset()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}
function reset(){
    nextButton.classList.add('hide')
    while (answerEl.firstChild){
        answerEl.removeChild(answerEl.firstChild)
    }
}



function showQuestion(question){
        questionEl.innerText = question.question 
        question.answers.forEach(answer => {
            const button = document.createElement('button')
            button.innerText = answer.text
            button.classList.add('btn')
            if(answer.correct){
                button.dataset.correct = answer.correct
            }
        button.addEventListener('click', selectAnswer)
        answerEl.appendChild(button)
        })

}

function selectAnswer(element){
    var pushedButton = element.target
    var correct = pushedButton.dataset.correct
    console.log(correct)
    if (shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
    } 
    else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}




startButton.addEventListener('click', startGame)

nextButton.addEventListener('click', () =>{
    currentQuestionIndex++
    nextQuestion()
})
