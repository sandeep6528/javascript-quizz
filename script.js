let timer = null;
let seconds = 0;
let currentQuestionIndex = 0;
let score = 0;
let highScores = [];
const timeElement = document.getElementById('time');
const questions = [
{
    question: 'sampleq1',
    answer: 0,
    answers: [
        'answer1',
        'answer2',
        'answer3',
        'answer4'
    ]
},
{
    question: 'sampleq2',
    answer: 2,
    answers: [
        'answer1',
        'answer2',
        'answer3',
        'answer4'
    ]
},
{
    question: 'sampleq3',
    answer: 2,
    answers: [
        'answer1',
        'answer2',
        'answer3',
        'answer4'
    ]
},
{
    question: 'sampleq4',
    answer: 3,
    answers: [
        'answer1',
        'answer2',
        'answer3',
        'answer4'
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

