function submitAnswers() {
	var total = 5;
	var score = 0;

	// Get User Input
	var q1 = document.forms["quizForm"]["q1"].value;
	var q2 = document.forms["quizForm"]["q2"].value;
	var q3 = document.forms["quizForm"]["q3"].value;
	var q4 = document.forms["quizForm"]["q4"].value;
	var q5 = document.forms["quizForm"]["q5"].value;

	
	// Validation
	for(i = 1; i <= total;i++){
		if(eval('q' + i) === null || eval('q' + i) === '') {
			alert('You missed a question ' + i);
			return false;
		}

	}

	// Set Correct Answers
	var answers = ["b","a","c","c","a"]

	//Check Answers
	for(i = 1; i <= total;i++){
		if(eval('q' + i) === answers[i - 1]){
			score++;
		}
	}
	
	//Display Results
	var results = document.getElementById('results');
	results.innerHTML = '<h3> You scored <span>'+score+'</span> out of <span>'+total+'</span></h3>';
	alert("You scored " + score + " out of " + total);

	return false;

var hours = parseInt( countDownTime / 3600 ) % 24;
var minutes = parseInt( countDownTime / 60 ) % 60;
var seconds = countDownTime % 60;
var result = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds  < 10 ? "0" + seconds : seconds);




}