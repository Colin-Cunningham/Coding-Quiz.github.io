// Create the Timer that will be in the top left

var counter= "75";


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
console.log(timer);
 timer()

 