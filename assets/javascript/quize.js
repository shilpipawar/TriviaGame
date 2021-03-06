$(document).ready(function () {
    //Declare ojects for all Question and Ans
    ////////Que Object Declaration/////////////////////////////////////////////////
    var Que1 = {
        question: "Highest mountain of world 'Mount Everest' is located in",
        answers: {
            A: "Asia",
            B: "Antarctic",
            C: "Australia",
            D: "North America"
        },
        correctAnswer: "A"
    };

    var Que2 = {
        question: "North America and Caribbean Sea lies to northwest from",
        answers: {
            A: "Europe",
            B: "Asia",
            C: "Africa",
            D: "South America"
        },
        correctAnswer: "D"
    };

    var Que3 = {
        question: "North America shares boundary with Pacific Ocean from",
        answers: {
            A: "East",
            B: "West",
            C: "North",
            D: "South"
        },
        correctAnswer: "B"
    };

    var Que4 = {
        question: "World's second largest continent is",
        answers: {
            A: "Asia",
            B: "Africa",
            C: "Antarctica",
            D: "Australia"
        },
        correctAnswer: "B"
    };

    var Que5 = {
        question: "Sea which separates Africa from Asia is",
        answers: {
            A: "Baltic Sea",
            B: "Black Sea",
            C: "Mediterranean Sea",
            D: "Red Sea"
        },
        correctAnswer: "D"
    };

    var Que6 = {
        question: "Continent 'Asia' shares its East border with",
        answers: {
            A: "Africa",
            B: "Arctic Ocean",
            C: "Pacific Ocean",
            D: "Ural Mountains"
        },
        correctAnswer: "D"
    };

    var Que7 = {
        question: "Longest river in 'Asia' is",
        answers: {
            A: "Mahaveli of Srilanka",
            B: "Ganga of India",
            C: "Yangtze of China",
            D: "Huang-He of China"
        },
        correctAnswer: "C"
    };

    var Que8 = {
        question: "Largest suspension bridge 'Golden Gate Bridge' is located in North America continent at",
        answers: {
            A: "San Francisco",
            B: "Panama",
            C: "Cuba",
            D: "Venice"
        },
        correctAnswer: "A"
    };

    var Que9 = {
        question: "Phenomenon in which glow is observed in sky at night called Aurora Australia is also classified as",
        answers: {
            A: "Western Lights",
            B: "Eastern Lights",
            C: "Southern Lights",
            D: "Northern Lights"
        },
        correctAnswer: "2"
    };

    var Que10 = {
        question: "Continent which has no active volcanic regions is",
        answers: {
            A: "North America",
            B: "Europe",
            C: "Australia",
            D: "Africa"
        },
        correctAnswer: "C"
    };

    //Variable declaration for HTML element ref for showing question, awnser and correct awnser
    var questionArray = [Que1, Que2, Que3, Que4, Que5, Que6, Que7, Que8, Que9, Que10];
    var questionPlaceholder = $('.Question');
    var awnserPlaceHolder = $('.Option1');
    var correctAnswerPlaceHolder = $('.CorrectAnw');


    // ///Function for creating
    function CreateQuizPage(obj) {

        //var outputHTML = [];
        //Que
        var temp = obj.question;
        console.log(temp);
        var output = $('<div class ="title">' + temp + '</div>');
        console.log(obj.answers.A);
        var opt = [obj.answers.A, obj.answers.B, obj.answers.C, obj.answers.D];

        console.log(temp);
        questionPlaceholder.append(output);
        //Ans
        for (i = 0; i < opt.length; i++) {
            // var radioBtn = $('<input type="radio" name="radio-choice-1" class ="radioType">' + opt[i] + '</input>' + '<br>');        
            // radioBtn.appendTo('#target');
           // $('<li><input type="radio" value=' + i + ' name="dynradio" />' + opt[i] + '</li>').appendTo('#target');
           var radioBtn = $('<input type="radio" name="option" value="' + i + '" id="option' + i + '"><label for="option' + i + '">' +
           opt[i]  + '</label></div><br/>');
           $("#option0").prop('checked', true);
           radioBtn.appendTo('#target');
        };

        var value = $("input[type='radio']:checked").val();
        console.log(value);
        if (value == obj.correctAnswer) {
            correctAnswers++;
            console.log(obj.correctAnswer);
            //console.log($("input[name=option]:checked").val());
          };
        //matchAnwser(obj. value);

    }

    ///////////////////////////
    function matchAnwser(obj, value){
        if (value == obj.correctAnswer) {
            correctAnswers++;
            //console.log(obj.correctAnswer);
            //console.log($("input[name=option]:checked").val());
          };
    }
    ///////////////////////////
    function LoadQuizQue(array) {
        console.log("LoadQuizQue Enter:")
        for (var j = 0; j < array.length; j++) {
            console.log(array[j]);
        };
    }

    //Timer
    //Timer//////////////////////////////////
    var tim;       
        var min = '${sessionScope.min}';
        var sec = '${sessionScope.sec}';
        var f = new Date();

        function customSubmit(someValue){  
        	 document.questionForm.minute.value = min;   
        	 document.questionForm.second.value = sec; 
        	 document.questionForm.submit();  
        	 }  

        function examTimer() {
            if (parseInt(sec) >0) {

			    document.getElementById("showTime").innerHTML = "Time Remaining :"+min+" Minutes ," + sec+" Seconds";
                sec = parseInt(sec) - 1;                
                tim = setTimeout("examTimer()", 1000);
            }
            else {

			    if (parseInt(min)==0 && parseInt(sec)==0){
			    	document.getElementById("showTime").innerHTML = "Time Remaining :"+min+" Minutes ," + sec+" Seconds";
				     alert("Time Up");
				     document.questionForm.minute.value=0;
				     document.questionForm.second.value=0;
				     document.questionForm.submit();
			     }

                if (parseInt(sec) == 0) {				
				    document.getElementById("showTime").innerHTML = "Time Remaining :"+min+" Minutes ," + sec+" Seconds";					
                    min = parseInt(min) - 1;
					sec=59;
                    tim = setTimeout("examTimer()", 1000);
                }

            }
        }
   //////////////////////////////////////////

    var id = 0;
    window.setInterval(function () {
        /// call your function here
        ClearALl();
        examTimer();
        //$('.quiz-time-left').innerHTML = 'Time Left: ' + 10 + 'Minutes' + 00 + ' seconds';
        // $('.Timer').append("Timer: " + 45);
        var number = parseInt(id) + 1;
        var txt = "Question " + number;
        $('.Question').append(txt);
        if (id < questionArray.length) {
            CreateQuizPage(questionArray[id]);
            id++;
        } else {
            //Restart the quiz
            var BtnRestart = $('<a class="btn btn-primary btn-lg restartbtn" href="index.html" role="button">Restart</a>');
            BtnRestart.appendTo('.CorrectAnw');
        }

    }, 5000);

    function ClearALl() {
        $('#target').empty();
        $('.title').empty();
        $('.restartbtn').empty();
        $('.Timer').empty();
        $('.Question').empty();
        $('.CorrectAnw').empty();
    }
    //$("input[type='radio']").attr("checked",true).checkboxradio("refresh");
    function QuizTimeOut() {
        alert("Times Up!!!");
    }


    /////////////////////////////////////Call Function on Page Load/////////////////////////////////////////////////////////////////////////////////

    //function starttimer45() inside that call function quizseq 
    //inside quizseq call function CreateQuizPage
    //once user selects option call matchAnwser function
    //if user is correct show msg congratulation
    //if answer wrong show sad smaily with correct ans
    //load new question.
    //CreateQuizPage(Que10);//Test
    //LoadQuizQue(questionArray);




});//document.ready end
