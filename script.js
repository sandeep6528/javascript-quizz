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
    answer: 1,
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

}