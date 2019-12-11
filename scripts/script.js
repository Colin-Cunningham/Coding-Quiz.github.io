var counter= "120";

var startButton = document.getElementById('start-btn')

var questionContainerEl =document.getElementById('question-container')

var nextButton = document.getElementById('next-btn')

var questionEl= document.getElementById('question')

var answerEl=document.getElementById('answer-buttons')

var shuffledQuestions, currentQuestionIndex

var highScore= document.getElementById('highscore')



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
        element.innerText=("0");
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

function clearLocalStorage(){
    window.localStorage.clear()
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
        
       
        window.localStorage.setItem('answer', answer.correct)
        })
  
}
function stopTime(counter){


}

function inputForm(){
        var input = document.createElement("textarea")
        input.innerText= window.localStorage.getItem('answer')
            }

console.log(inputForm())
function selectAnswer(element){
    var pushedButton = element.target
    var correct = pushedButton.dataset.correct
    if(correct === 'true') {
        window.localStorage.setItem('+1', correct)
    }else{
        counter= counter - 15
    }
    
    
    if (shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
    } 
    else {
        window.localStorage.setItem('Score', counter)
        highScore.classList.remove('hide')
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')

    }
}




startButton.addEventListener('click', startGame)
highScore.addEventListener('click', inputForm)
startButton.addEventListener('click', clearLocalStorage)
nextButton.addEventListener('click', () =>{
    currentQuestionIndex++
    nextQuestion()
    
})

