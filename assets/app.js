// Set Global Variables like score, words, sounds, videos

var points = 0;

var username = "";

var winGif = new Video (src= "https://media.giphy.com/media/bznNJlqAi4pBC/giphy.gif")

var stopwatch = {
  time: 120,
  
  reset: function() {
    stopwatch.time = 120;
    
    //  TODO: Change the "display" div to "00:00."
    $("#timer").html("01:20");
  },
  start: function() {
      //  TODO: Use setInterval to start the count here and set the clock to running.
      if (!clockRunning) { 
        intervalId = setInterval(stopwatch.count, 1000);
        clockRunning = true;
        }
      
  },
  
  
  count: function() {
    //  TODO: increment time by 1, remember we cant use "this" here.
    //  TODO: Get the current time, pass that into the stopwatch.timeConverter function,
    //        and save the result in a variable.
 
   //  TODO: Use the variable you just created to show the converted time in the "display" div.
     stopwatch.time--;
      $("#display").html(stopwatch.time);
    var x = stopwatch.timeConverter(stopwatch.time);
    $("#display").html(x);
    
   
          

    
  },
  //  THIS FUNCTION IS DONE FOR US!
  //  We do not need to touch it.
  timeConverter: function(t) {
    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
  }
};


var question1 {

	clue: "Jerry always found a reason to break up with his girlfriend. Jillian was no different. What problem did Jerry have with her?",

	answer1: "Funny voice",
	answer2: "The way she ate her peas",
	answer3: "She had man-hands",
	answer4: "She was always naked",

	correct: "She had man-hands",


		ask: function () {
			$(".question").html(clue);
			$("#answer1").html(answer1);
			$("#answer2").html(answer2);
			$("#answer3").html(answer3);
			$("#answer4").html(answer4);

			

		}
}

var question2 {

	clue: "Who was the first person to go out of 'The Contest'?",

	answer1: "Kramer",
	answer2: "Jerry",
	answer3: "Elaine",
	answer4: "George",

	correct: "Kramer",


		ask: function () {
			$(".question").html(clue);
			$("#answer1").html(answer1);
			$("#answer2").html(answer2);
			$("#answer3").html(answer3);
			$("#answer4").html(answer4);

			

		}
}

var question3 {

	clue: " What superhero appears in every episode whether mentioned or displayed?",

	answer1: "Spiderman",
	answer2: "Batman",
	answer3: "Iron Man",
	answer4: "Superman",

	correct: "Superman",


		ask: function () {
			$(".question").html(clue);
			$("#answer1").html(answer1);
			$("#answer2").html(answer2);
			$("#answer3").html(answer3);
			$("#answer4").html(answer4);

			

		}
}

var question4 {

	clue: " George walks up to an attractive women at Monks, annouces that his name is George, he's unemployed and he?",

	answer1: "is bald",
	answer2: "is fat",
	answer3: "lives with his parents",
	answer4: "is single",

	correct: "lives with his parents",


		ask: function () {
			$(".question").html(clue);
			$("#answer1").html(answer1);
			$("#answer2").html(answer2);
			$("#answer3").html(answer3);
			$("#answer4").html(answer4);

			

		}
}

var question5 {

	clue: "What does George eat with his index fingers that disgusts Jerry?",

	answer1: "penut butter",
	answer2: "jelly",
	answer3: "mayonaise",
	answer4: "sour cream",

	correct: "penut butter",


		ask: function () {
			$(".question").html(clue);
			$("#answer1").html(answer1);
			$("#answer2").html(answer2);
			$("#answer3").html(answer3);
			$("#answer4").html(answer4);

			

		}
}

var question6 {

	clue: " In one episode, Kramer looks for an alternative to shaving cream. What does he use?",

	answer1: "whiskey",
	answer2: "garlic",
	answer3: "mayonaise",
	answer4: "butter",

	correct: "butter",


		ask: function () {
			$(".question").html(clue);
			$("#answer1").html(answer1);
			$("#answer2").html(answer2);
			$("#answer3").html(answer3);
			$("#answer4").html(answer4);

			

		}
}

var question7 {

	clue: "What company does Steinbrenner trade George to?",

	answer1: "The Mets",
	answer2: "Tyler Chicken",
	answer3: "The Soup Nazi",
	answer4: "NBC",

	correct: "Tyler Chicken",


		ask: function () {
			$(".question").html(clue);
			$("#answer1").html(answer1);
			$("#answer2").html(answer2);
			$("#answer3").html(answer3);
			$("#answer4").html(answer4);

			

		}
}

var question8 {

	clue: "In the 'Yada Yada', who claims to have yada yada'd sex?",

	answer1: "Elaine",
	answer2: "Jerry",
	answer3: "Newman",
	answer4: "Kramer",

	correct: "Elaine",


		ask: function () {
			$(".question").html(clue);
			$("#answer1").html(answer1);
			$("#answer2").html(answer2);
			$("#answer3").html(answer3);
			$("#answer4").html(answer4);

			

		}
}


var question9 {

	clue: "Who said this: You know my friend Bob Sacamano? Well, he called last night about 3 a.m. we got to talking; he sells Russian hats down at Battery Park, forty bucks?",

	answer1: "Elaine",
	answer2: "Jerry",
	answer3: "Newman",
	answer4: "George",

	correct: "Jerry",


		ask: function () {
			$(".question").html(clue);
			$("#answer1").html(answer1);
			$("#answer2").html(answer2);
			$("#answer3").html(answer3);
			$("#answer4").html(answer4);

			

		}
}

var question10 {

	clue: "What is the name of Cosmo Kramer's corporation?",

	answer1: "Delicious by Kramer",
	answer2: "Kramerica Industries",
	answer3: "Bio-Kramer Inc",
	answer4: "Kramer",

	correct: "Kramerica Industries",


		ask: function () {
			$(".question").html(clue);
			$("#answer1").html(answer1);
			$("#answer2").html(answer2);
			$("#answer3").html(answer3);
			$("#answer4").html(answer4);

			

		}
}

// Get username




// Creat Start Button Function 

$(".start").on("click" function () {
	var timer = $("#timer");




})



// If Statements