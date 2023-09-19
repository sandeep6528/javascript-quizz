let timer = null;
let seconds = 0;
let currentQuestionIndex = 0;
let score = 0;
let highScores = [];
const timeElement = document.getElementById('time');
const questions = [
{
    question: 'How can you get the type of arguments passed to a function?',
    answer: 0,
    answers: [
        ' using typeof operator',
        ' using getType function ',
        ' Both of the above.',
        'None of the above.'
    ]
},
{
    question: 'Which built-in method removes the last element from an array and returns that element?',
    answer: 1,
    answers: [
        'answer1',
        ' pop()',
        'get()',
        'last()'
    ]
},
{
    question: 'Which of the following function of String object creates an HTML anchor that is used as a hypertext target?',
    answer: 2,
    answers: [
        'answer1',
        ' link()',
        'anchor()',
        ' blink()'
    ]
},
{
    question: 'How can we change the background color of an element?',
    
    answer: 3,
    answers: [
        'margin',
        'color',
        'None Of Above',
        'background-color'
    ]
}
];


function startQuizz(){
 // start timer
 seconds = 60;
 timeElement.innerText = seconds;
timer = setInterval(function(){
    seconds--;
 timeElement.innerText = seconds;

 if(seconds === 0){
    gameOver();
    clearInterval(timer);
 }
}, 1000);


// show game
 const game = document.getElementById('game');
 game.style.display = 'block'; 

  //hide start button
 const start = document.getElementById('start');
 start.style.display = 'none';

  currentQuestionIndex = 0;
  showCurentQuestion();
}

function gameOver(){
    const game = document.getElementById('game');
 game.style.display = 'none'; 
 const saveHighScore = document.getElementById('save-high-score');
 saveHighScore.style.display = 'block';

}

function showCurentQuestion(){
    const currentQuestion = questions[currentQuestionIndex];

    const question = document.getElementById('question');
    question.innerText = currentQuestion.question;

    const answersHtml = currentQuestion.answers.map(function (item, index) {
        return '<button class="answer-button" onclick="answer(' + index + ')">' + item + '</button>';  
      });
      
      const answersElement = document.getElementById('answers');
      answersElement.innerHTML = answersHtml.join('');
}

 function answer(index){
    const currentQuestion = questions[currentQuestionIndex];
    if(currentQuestion.answer === index){
       score++; 
    } 

    if(currentQuestionIndex < questions.length - 1){
        currentQuestionIndex++;
        showCurentQuestion();
       
    } else{
        const game = document.getElementById('game');
 game.style.display = 'none';

 const saveHighScore = document.getElementById('save-high-score');
 saveHighScore.style.display = 'block';

 const scoreElement = document.getElementById('score');
 scoreElement.innerText = score;

 clearInterval(timer);
    }
   
 }

 function submitHighScore(event){
    event.preventDefault();
 highScores.push({
    initials: event.target.initials.value,
    score: score
 });

 event.target.reset();
 showHighScores();

 const saveHighScore = document.getElementById('save-high-score');
 saveHighScore.style.display = 'none';


 const highScoresElement = document.getElementById('high-scores');
 highScoresElement.style.display = 'block';
 }

 function goBack(){
    const start = document.getElementById('start');
    start.style.display = 'block';

    const highScoresElement = document.getElementById('high-scores');
 highScoresElement.style.display = 'none';
 }

 function clearScores(){
 highScores = [];
showHighScores();
 }

 function showHighScores(){
    highScores.sort(function(a, b){return b.score-a.score});

      const highScoresHtml = highScores.map(function (item, index) {
        return '<li class="high-scores-item">' + (index + 1) + '.' + item.initials + '-' + item.score + '</li>';  
      });
      console.log(highScoresHtml)
      const highScoresList = document.getElementById('high-scores-list');
      highScoresList.innerHTML = highScoresHtml.join('');
  
 }

 function viewHighScore(){
    const saveHighScore = document.getElementById('save-high-score');
 saveHighScore.style.display = 'none';

 const game = document.getElementById('game');
 game.style.display = 'none';


 const start = document.getElementById('start');
 start.style.display = 'none';

 const highScoresElement = document.getElementById('high-scores');
 highScoresElement.style.display = 'block';

 }