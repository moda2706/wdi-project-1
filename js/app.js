$(start);

var holeArray;
var score;
var playerScore;
var count;
var timerInterval, holesInterval;
var holes = $('.hole');
let board;


var object = [
  {
    name: 'Trump',
    img: 'images/trump.jpg',
    speed: 1500,
    score: 15
  }, {
    name: 'Putin',
    img: 'images/putin.jpg',
    speed: 1250,
    score: 10
  }, {
    name: 'KimJong-un',
    img: 'images/kim.jpg',
    speed: 1000,
    score: 5
  }, {
    name: 'Obama',
    img: 'images/obama.jpg',
    speed: 2000,
    score: 0
  }
];


function start () {
  $('.play').one('click', play); // this is the function when clicked on button play this will start the game
  $('.reset').one('click', reset);
  $('.instructions').on('click', showInstructions);
}

function showInstructions() {
  $('.instructions-body').toggleClass('hidden');
}

function play() {
  $(this).html('Reset');
  $(this).one('click', reset);

  $('.play').css('line-height', '60px');

  holeArray = [];
  score = 0;
  playerScore = 0;
  count = 30;
  $('#timer').html(count);
  timerInterval = setInterval(timer, 1000);
  $('.scoreBoard').empty();
  gameStart();
}

function timer() {
  count -= 1;
  if(count === 0) endGame();
  $('.timer span').html(count);
}

function gameStart() {
  var holes = $('.hole');
  holesInterval = setInterval(function(){
    showHoles(holes);
  }, 1000);

}

function showHoles(array) {
  var hole = array[Math.floor(Math.random() * array.length)];
  var dicktator = object[Math.floor(Math.random() * object.length)];
  // console.log(dicktator.speed);
  $(hole).css('background-image', 'url(' + dicktator.img + ')');
  $(hole).off();
  $(hole).on('click', function(){
    logScore(dicktator, hole);
    const audio = new Audio('./Sounds/slap.wav');
    audio.play();
  });

  setTimeout(function(){
    $(hole).css('background-image', 'none');
    $(hole).off();
  }, dicktator.speed);

}

function logScore(dicktator, hole) {
  if (dicktator.name === 'Obama') {
    const audio1 = new Audio('./Sounds/game_over.wav');
    audio1.play();
    endGame();
  } else {
    score += dicktator.score;
    $('.scoreboard span').html(score);
  }
  $('.scoreBoard span').html(score);
  $(hole).css('background-image', 'none');
  $(hole).off();
}

function endGame() {
  $(`<div class="game-over">Game Over, you scored ${score}</div>`).appendTo('main');
  clearInterval(timerInterval);
  clearInterval(holesInterval);
  score = 0;
  playerScore = 0;
  count = 0;
  $('.timer span').html(30);
  $('.scoreboard span').html(score);
  $('.play').css('line-height', '30px');
  $('.play').html('Play Again');
  $('.play').one('click', play);
}

function reset () {
  $(this).html('Play');
  $('.game-over').remove();
  clearInterval(timerInterval);
  clearInterval(holesInterval);
  score = 0;
  count = 0;
  $('.scoreboard span').html(score);
  $('.timer span').html(30);
  $('.play').one('click', play);
}
