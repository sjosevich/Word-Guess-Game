//declaring variables and arrays

var musicalGroup = ["AEROSMITH", "QUEEN", "METALICA", "JOURNEY", "GENESIS", "SCORPIONS"];
var randomChoice = Math.floor(Math.random()*6);
var answer = musicalGroup[randomChoice];
console.log(answer);
                         
var myLength = answer.length;
var display = [myLength];
var attemptsLeft = answer.length + 5;
var wins = myLength;
var losses = 0;
var letters = answer.split('');
var output="";
var userOutput="";
var userLetter = [myLength];
var count = 0;
var countWin = 0;

// This function will add or delete underscors depends of the amount of letters of each element of my array
var setup = function(){
    for (var i=0; i<answer.length; i++){
        display[i] = "_ ";
        output = output + display[i];
    }
    document.getElementById("guess").innerHTML = output; // here I'm changing the amount of underscors on my HTML by targeting the guess ID 
    output = "";
}

//Here I'm calling my setup fuction
window.onload = function(){
    setup();
}

// This function will hold the pressed key by the User on userGuess
document.onkeypress = function(event) {
    var userGuess = event.key;
    //console.log(userGuess);
    
    
    
    userLetter[count]= "None";
     
    
    if (userLetter.includes(userGuess)){
        console.log(userLetter.includes(userGuess));
        userLetter[count]= userGuess;
        console.log(userLetter[count]);
        count += 1
        
        
    }else{
        
        userLetter[count]= userGuess;
       // console.log(userLetter[count]);
        userOutput = userOutput + userLetter[count] + ", "; 
        count += 1;
        
    }
    
    
        
   
        
        
    for (var j=0; j< answer.length; j++){
        if (userGuess.toUpperCase() == letters[j]){
            display[j]=userGuess.toUpperCase();
            wins -= 1;
            
        }
        
        output = output + display[j] + " " ;
        
        //console.log("output " + output.length);
        //console.log("display " + display.length);
        
        
    }
    
    
    attemptsLeft--;
    if (wins < 1){  
       countWin += 1;    
       document.getElementById('wins').innerHTML = "Wins: " + countWin;
       document.getElementById('group').innerHTML = "Group Band: " + answer;
        var myImageLowerCase = answer.toLocaleLowerCase();
        console.log(myImageLowerCase)
        var img = $('img');
        img.attr("src", "./assets/images/"+myImageLowerCase+".jpg");
        $("#myImage").html(img)
       count = 0;
       //userOutput = "";
       attemptsLeft="";
    }
    
    document.getElementById('guess').innerHTML = output;
    document.getElementById('user_Output').innerHTML = "Letters already guessed: " + userOutput;
    //document.getElementById('user_Output').innerHTML = "User Output is: " + userOutput;
    
    output = "";
    //userOutput = "";
    
    
    //ocument.getElementById('losses').innerHTML = "Losses: " + losses;
    document.getElementById('guesses').innerHTML = "Number of guesses remaining: " + attemptsLeft;
}