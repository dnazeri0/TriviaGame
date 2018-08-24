// question bank to hold every possible question and their respective answers
var questionBank = [
    new question("Grand Central Terminal, Park Avenue, New York is the world's",["largest railway station", "highest railway station", "longest railway station", "None of the above"],0),
    new question("Entomology is the science that studies",["Behavior of human beings", "Insects", "The origin and history of technical and scientific terms"],1),
    new question("Eritrea, which became the 182nd member of the UN in 1993, is in the continent of",[ "Asia", "Africa", "Europe", "Australia"],1),
    new question(" Garampani sanctuary is located at ",["Junagarh, Gujarat", "Diphu, Assam", "Kohima, Nagaland", "Gangtok, Sikkim"],1),
    new question("For which of the following disciplines is Nobel Prize awarded?",["Physics and Chemistry", "Physiology or Medicine","Literature, Peace and Economics","All of the above" ],3),
    new question("Hitler party which came into power in 1933 is known as",["Labor Party", "Nazi Party", "Ku-Klux-Klan","Democratic Party"],1),
    new question("The headquarter of International Atomic Energy Agency (IAEA) are situated at ",["Vienna", "Rome", "Geneva","Paris"],0),
    new question("Where is the permanent secretariat of the SAARC?",["Kathmandu", "New Delhi", "Islamabad", "Colombo"],0),
    new question("The Olympic Flame symbolises ",["unity among various nations of the world", "speed, perfection and strength", "sports as a means for securing harmony among nations", "continuity between the ancient and modern games"],3),
    new question("The number of already named bones in the human skeleton is",["200", "206", "212", "218"],1),
];

// stores the scores 
var currentquestion = 0;
var correctAnswers = 0;

// function that creates each question, this referring to the 
function question(question, choices, correctAnswer){
    this.question = question;
    this.choices = choices;
    this.correctAnswer = correctAnswer;
}

// sets up each question
function setupQuestion() {
    $('#question').html(parseInt(currentquestion) + 1 + ". " + questionBank[currentquestion].question);
    var options = questionBank[currentquestion].choices;
    var formHtml = '';
    for (var i = 0; i < options.length; i++) {
        formHtml += '<div><input type="radio" name="option" value="' + i + '" class="options"><label for="option' + i + '">' + options[i] + '</label></div><br>';
    }
    $('#form').html(formHtml);
    $(".options:eq(0)").prop('checked', true);
    $('.nextButton').html( $('#form').append('<a href="#" id="next" class="button">Next</a>'));
}
  
// if selected answer is correct, adds 1 to correctAnswers counter
function checkAns() {
    if ($("input[name=option]:checked").val() == questionBank[currentquestion].correctAnswer) {
        correctAnswers++;
    }
}
  
$(document).ready(function(){
    // hides start screen when started
    $("#start").click(function() {
        $("#splash").hide();
        setupQuestion();

    });
    // cycles to next question, keeps track of questions answered
    $("#next").click(function() {
    event.preventDefault();
    checkAns();
    currentquestion++;
        // if not the last, continue as normal
        if(currentquestion<questionBank.length) {
            setupQuestion();
        // if the last, display results
        if(currentquestion==questionBank.length-1) {
            $("#next").text("Submit");
            $("#next").click(function() {
            $("#questionBackgronnd").hide();
            $("#result").html("You correctly answered " + correctAnswers + " out of " + currentquestion + " questions! ");
            });
  
        }
                  
        };
    });	
});
