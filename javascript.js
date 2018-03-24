var playing = false;
var score;
var action;
var timeRemaining;
var correctAnswer;
var wrongAnswer;
var answers;

//if we click on the start/reset button
document.getElementById("startreset").onclick= function(){
    if (playing == true){ //if we are playing
        location.reload(); //reload page      
    } else{ //if we are not playing

//change playing mode
playing = true;
    
//set score to 0
score = 0;
document.getElementById("scorevalue").innerHTML = score;
        
//show countdown box
show("timeremaining");
        
//change button to reset
document.getElementById("startreset").innerHTML = "Reset Game"
    

//Hide the GameOver dialog box
hide("gameover");
    
//timer function
    timeRemaining = 60;
document.getElementById("timeremainingvalue").innerHTML = timeRemaining;
    
    startCountDown();

//generate new Q&A
    generateQA();
    }
}


//checking correct box is clicked
for(i=1;i<5;i++){
document.getElementById("box" + i).onclick = function(){
    if (playing == true){ //if game is going
        
        if (this.innerHTML == correctAnswer){//correct answer
        
        //increase score
    score++;
    document.getElementById("scorevalue").innerHTML = score;
        
        //show correct box for 1 second
    hide("wrong");
    show("correct");
    setTimeout(function(){
        hide("correct");
    },1000);
            
        //generate new QA
            generateQA();
            
        }else { //wrong answer
            hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");
            },1000);
        }
        
    } 
    
    else {
        
    }
}
}


//functions
function startCountDown(){
action = setInterval(function(){
     timeRemaining -= 1;
   /*reduce the time by 1sec in loop*/ document.getElementById("timeremainingvalue").innerHTML = timeRemaining;
    
    /*Check if timeRemaining is 0 second*/
    if (timeRemaining == 0) {
        stopCountDown();
document.getElementById("startreset").innerHTML = "Start Game"
show("gameover");
document.getElementById("gameover").innerHTML = "<p>game over!</p><p>your score is " + score + "."
hide("timeremaining");

        playing = false; //Changing Play mode
    }
},1000);
}

function stopCountDown(){
    clearInterval(action);
}

function show(Id){
 document.getElementById(Id).style.display = "block"   
}
function hide(Id){
 document.getElementById(Id).style.display = "none" }

function generateQA(){
    var x = 1 + Math.round(Math.random()*24);
    var y = 1 + Math.round(Math.random()*24);
    correctAnswer = x*y;

    //to fill the question
    document.getElementById("question").innerHTML = x + "x" + y;
    
    //to fill the answer in correct option box
    var correctPosition = 1 + Math.round(Math.random()*3);
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer;
    
    answers = [correctAnswer];//storing answers
    for(i=1;i<5;i++){
        if (i != correctPosition){
    //generating wrong answers and checking whether it is already included in our array answers
            do{
            wrongAnswer = (1 + Math.round(Math.random()*24))*(1 + Math.round(Math.random()*24));
            }while(answers.indexOf(wrongAnswer)>-1)
            
    answers.push(wrongAnswer);//add wrong to array
            
    document.getElementById("box" + i).innerHTML = wrongAnswer;    
            }
    }
}
//logic of the maths game
//if we click on the start/reset button
    //if we are playing
        //reload page
    //if we are not playing
        //set score to 0
        //show countdown box
        //reduce time by 1sec in loops
            //timeleft?
                //yes-->continue
                //no -->gameover
        //change button to reset
        //generate new Q&A

//if we click on answer box
    //if we are playing
        //correct?
            //yes
                //increase score
                //show correct box for 1sec
                //generate new Q&A
            //no
                //show try again box for 1sec
    //if we are not playing
        //leave it as it is