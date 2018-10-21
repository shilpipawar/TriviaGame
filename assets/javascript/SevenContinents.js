$(document).ready(function () {
     //Declare array oject for all Question and Ans
    var options = [
        { 
            question: "Highest mountain of world 'Mount Everest' is located in?", 
            choice: ["Asia", "Antarctic", "Australia", "North America"],
            answer: 0
         },
         {
            question: "North America and Caribbean Sea lies to northwest from?", 
            choice: ["Europe", "Asia", "Africa", "South America"],
            answer: 3
         }, 
         {
            question: "North America shares boundary with Pacific Ocean from?", 
            choice: ["East", "West", "North", "South" ],
            answer: 1
        }, 
        {
            question: "World's second largest continent is?", 
            choice: ["Asia", "Africa", "Antarctica", "Australia" ],
            answer: 1
        }, 
        {
            question: "Sea which separates Africa from Asia is?", 
            choice: ["Baltic Sea", "Black Sea","Mediterranean Sea","Red Sea"],
            answer: 3
        }, 
        {
            question: "Continent 'Asia' shares its East border with?", 
            choice: ["Africa","Arctic Ocean","Pacific Ocean", "Ural Mountains" ],
            answer: 3
        }, 
        {
            question: "Longest river in 'Asia' is?", 
            choice: ["Mahaveli of Srilanka","Ganga of India","Yangtze of China","Huang-He of China" ],
            answer: 2
        }, 
        {
            question: "Largest suspension bridge 'Golden Gate Bridge' is located in North America continent at?", 
            choice: ["San Francisco","Panama","Cuba","Venice"],
            answer: 0
        }];
    
        //Declare all global Variable
    var correctAns = 0;
    var incorrectAns = 0;
    var timeoutcount = 0;
    var timer = 25;
    var intervalId;
    var userGuess ="";
    var timeRunning = false;
    var qCount = options.length;
    var pick;
    var index;
    var newArray = [];
    var holder = [];
    
    SevenContinetsStart();

    function SevenContinetsStart()
    {
        CreateQuizPage();
        runTimer();
        for(var i = 0; i < options.length; i++) {
        holder.push(options[i]);
}
    }
    $("#reset").hide();
    //click start button to start quiz
    // $("#start").on("click", function () {
    //         $("#start").hide();
    //         CreateQuizPage();
    //         runTimer();
    //         for(var i = 0; i < options.length; i++) {
    //     holder.push(options[i]);
    // }
    //     })
    //timer function start
    function runTimer(){
        if (!timeRunning) {
        intervalId = setInterval(decrement, 1000); 
        timeRunning = true;
        }
    }
    //timer countdown
    function decrement() {
        $("#timeleft").html("<h3>Time remaining: " + timer + "</h3>");
        timer --;
    
        //stop timer if reach 0
        if (timer === 0) {
            timeoutcount++;
            stop();
            $("#answerblock").html("<p>Time is up! The correct answer is: " + pick.choice[pick.answer]  +"</p>");
            //Put Sad Image
            var sadEmoji = "assets/images/SadEmoji.PNG";
            $("#photoblock").html("<img src ="+sadEmoji + ">");
            hidepicture();
        }	
    }
    
    //timer stop
    function stop() {
        timeRunning = false;
        clearInterval(intervalId);
    }
    //display question and loop though and display possible answers
    function CreateQuizPage() {
        //generate random index in array
        index = Math.floor(Math.random()*options.length);
        pick = options[index];
            $("#questionblock").html("<h2>" + pick.question + "</h2>");
            for(var i = 0; i < pick.choice.length; i++) {
                var userChoice = $("<div>");
                userChoice.addClass("answerchoice");
                userChoice.html(pick.choice[i]);
                //assign array position to it so can check answer
                userChoice.attr("data-guessvalue", i);
                $("#answerblock").append(userChoice);
                $("#photoblock").empty();
    }
    
    //click function to select answer and outcomes
    $(".answerchoice").on("click", function () {
        //grab array position from userGuess
        userGuess = parseInt($(this).attr("data-guessvalue"));
    
        //correct guess or wrong guess outcomes
        if (userGuess === pick.answer) {
            stop();
            correctAns++;
            userGuess="";
            var HappyEmoji = "assets/images/GreatWork.jpg";
            $("#answerblock").html("<p>Correct!</p>");
            $("#photoblock").html("<img src ="+HappyEmoji + ">");
           
            hidepicture();
    
        } else {
            stop();
            incorrectAns++;
            userGuess="";
            var sadEmoji = "assets/images/SadEmoji.PNG";
            $("#answerblock").html("<p>Wrong! The correct answer is: " + pick.choice[pick.answer] + "</p>");
            $("#photoblock").html("<img src ="+sadEmoji + ">");
            hidepicture();
        }
    })
    }
    
    
    function hidepicture () {
        var goodjob = "assets/images/GoodJob.png";
        newArray.push(pick);
        options.splice(index,1);
    
        var hidpic = setTimeout(function() {
            $("#answerblock").empty();
            timer= 20;
    
        //run the score screen if all questions answered
        if ((incorrectAns + correctAns + timeoutcount) === qCount) {
            $("#questionblock").empty();
            
            $("#questionblock").html("<h3>Quiz Over!  Your score : </h3>");
            var totalPoints = parseInt(correctAns) * 10;
            var pointloose = parseInt(incorrectAns) * 10;
            timeoutcount = parseInt(timeoutcount) * 10;
            $("#answerblock").append("<h4> Correct: " + correctAns + "</h4>" );
            $("#answerblock").append("<h4> Incorrect: " + incorrectAns + "</h4>" );
            $("#answerblock").append("<h4> Unanswered: " + timeoutcount + "</h4>" );
            $("#photoblock").html("<img src ="+goodjob + ">");
            $("#reset").show();
            correctAns = 0;
            incorrectAns = 0;
            timeoutcount = 0;
    
        } else {
            runTimer();
            CreateQuizPage();
    
        }
        }, 3000);
    
    
    }
    
    $("#reset").on("click", function() {
        $("#reset").hide();
        $("#answerblock").empty();
        $("#questionblock").empty();
        for(var i = 0; i < holder.length; i++) {
            options.push(holder[i]);
        }
        runTimer();
        CreateQuizPage();
    
    })
    
    })