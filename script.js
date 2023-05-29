(function(){
    'use strict';
    
    function f1CheckAnswers(){
        
        var userAnswer1 = document.getElementById("d1Answer").value;
        var userAnswer2 = document.getElementById("d2Answer").value;
        var userAnswer3 = document.getElementById("a1Answer").value;
        const d1Answer = 'a';
        const d2Answer = 'b';
        const a1Answer = 'c';
    
        // const form1 = document.getElementById("f1");
        if (userAnswer1.length == 0 || userAnswer2.length == 0 || userAnswer3==0) {
            alert("You must enter an answer to continue...");
            return false;
            }
        if (userAnswer1 === d1Answer || userAnswer2 === d2Answer || userAnswer3 === a1Answer){
            alert("Correct!");
            console.log('t1');
        }else{
            alert("Try again!");
            console.log("f1");
        }
    }
    
    document.getElementById("s1").addEventListener("click", function(event){
        event.preventDefault()
        f1CheckAnswers();
      });
    
    })();