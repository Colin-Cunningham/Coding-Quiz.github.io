var counter = 120;

var startButton = document.getElementById('start-btn')

var questionContainerEl = document.getElementById('question-container')

var nextButton = document.getElementById('next-btn')

var questionEl= document.getElementById('question')

var answerEl=document.getElementById('answer-buttons')

var shuffledQuestions, currentQuestionIndex

var highScore = document.getElementById('highscore')

var element= document.getElementById('timer')

var namePlace=document.getElementById('name')

var landingPage= document.getElementById('landing-page')


function countDown(){
    if (counter <= 0) {
        clearInterval(newVar)
    } else{
    counter--;
    element.innerHTML=(counter);
   }
}
// Create the Timer that will be in the top left
function timer(){
    
    element.innerHTML=(counter);
    newVar = setInterval(countDown, 1000)
    console.log(newVar)
    console.log(counter)
    
}


    
function startGame(){
    console.log('Started');
    startButton.classList.add("hide");
    shuffledQuestions= questions.sort(() => Math.random()-.5);
    currentQuestionIndex = 0
    questionContainerEl.classList.remove('hide')
    landingPage.classList.add('hide')
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


function playAudio(){
    var audio = document.getElementById('audio');
        audio.play();
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
        playAudio()
    }
    
    
    if (shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
    } 
    else {
        window.localStorage.setItem('Score', counter)
        namePlace.classList.remove('hide')
    }
}




startButton.addEventListener('click', startGame)
startButton.addEventListener('click', timer)
startButton.addEventListener('click', clearLocalStorage)

nextButton.addEventListener('click', () =>{
    currentQuestionIndex++
    nextQuestion()
    
})

