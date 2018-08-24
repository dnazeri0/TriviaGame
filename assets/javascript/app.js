// question bank to hold every possible question and their respective answers
var questionBank = [
    new question("Jaeger is most known for getting his ____ removed.",["acog scope", "appendix", "M4 carbine smg", "flashbangs"],0),
    new question("What map was removed from competitive but brought back in Operation Grim Sky?",["Yacht", "Favela", "Chalet"],1),
    new question("Which operator has a gadget that can heal other players with a stim pistol?",[ "Rook", "Doc", "Alibi", "IQ"],1),
    new question("____ is regarded as 'Lord _____.'",["Blitz", "Tachanka", "Mira", "Castle"],1),
    new question("Which operation did Jackal and Mira get introduced?",["Operation Black Ice", "Operation Para Bellum","Operation Chimera","Operation Velvet Shell" ],3),
    new question("The operator that uses a hammer to knock down reinforced surfaces is _____.",["Ash", "Sledge", "Smoke","Blackbeard"],1),
    new question("If a player does not choose an operator in time, they will play as _____.",["Recruit", "Capitao", "Frost","Lesion"],0),
    new question("_____ is a defending operator.",["Kapkan", "Dokkaebi", "Hibana", "Glaz"],0),
    new question("All of these are attacking operators EXCEPT _____.",["Buck", "Thatcher", "Ash", "Pulse"],3),
    new question("This operator has a modified drone that shoots a taser.",["Clash", "Twitch", "Blitz", "Bandit"],1),
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
    $('#question').append($('#form'));
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
