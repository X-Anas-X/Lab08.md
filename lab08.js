'use strict';
function createScore(){
    //input

    var mark = prompt("Enter your score");
    console.log('anyhing:' , mark);
    
    var score
    //processing
    if (mark>15 && mark <= 20){
        score='Excellent!';
    
    }
    else if (mark>10 && mark<=15){
        score='Good!';

    }
    else if (mark>0 && mark <= 8){
        score='Fail.';
    }
    //output
    return score;
    
}
createScore();


var showOrder = function(){
//input
var userOrder = prompt("what would you like to order?");
var orderImage;
//processing

if(userOrder === "hotel"){
    var orderImage = '<img src="well-don.png">';

}
else if(userOrder === "house"){
    orderImage = '<img src="angry.png">';

}
return orderImage;

//output
}
showOrder();

document.write('<h3>+score+</h3>');