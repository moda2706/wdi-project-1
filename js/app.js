$(start);

var holeArray;
var play;
var score;
var playerScore;
var count;
var timerInterval, holesInterval;
var holes = $('.hole');
var object = [
  {
    name: 'Trump',
    img: 'https://s-media-cache-ak0.pinimg.com/736x/44/91/31/449131cabd0f6c51259cf881355368a1.jpg',
    speed: 3000,
    score: 5
  }, {
    name: 'Putin',
    img: 'https://s-media-cache-ak0.pinimg.com/736x/44/91/31/449131cabd0f6c51259cf881355368a1.jpg',
    speed: 2000,
    score: 10
  }, {
    name: 'Mugabe',
    img: 'https://s-media-cache-ak0.pinimg.com/736x/44/91/31/449131cabd0f6c51259cf881355368a1.jpg',
    speed: 5000,
    score: 15
  },{
    name: 'KimJong-un',
    img: 'https://s-media-cache-ak0.pinimg.com/736x/44/91/31/449131cabd0f6c51259cf881355368a1.jpg',
    speed: 4000,
    score: 5
  }, {
    name: 'Basharal-Assad',
    img: 'https://s-media-cache-ak0.pinimg.com/736x/44/91/31/449131cabd0f6c51259cf881355368a1.jpg',
    speed: 2500,
    score: 20
  }, {
    name: 'Obama',
    img: 'https://s-media-cache-ak0.pinimg.com/736x/44/91/31/449131cabd0f6c51259cf881355368a1.jpg',
    speed: 500,
    score: 0
  }
];

function start () {
  $('#play').on('click', play); // this is the function when clicked on button play this will start the game
}

function go() {
  holeArray = [];
  score = 0;
  playerScore = 0;
  count = 30;
  counter = 0;
  timerInterval = setInterval(timer, 1500);
  $('#timer').html(count);
  $('.score').empty();

  function timer() {
    count -= 1;
    if(count = 0) endGame();
    $('#timer').html(count);
  }
  gameStart();
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

  $(hole).css('background-img', 'url('+dicktator.img+')');
  $(hole).off();
  $(hole).on('click', function(){
    logScore(dicktator);
  });

  setTimeOut(function(){
    $(hole).css('background-img', none);
    $(hole).off();
    counter ++;
  }, 1000);

}

function logScore(dicktator) {
  score += dicktator.score;
  $('.scoreBoard').html(score);
}

function endGame () {
  $('.scoreBoard').html('game over loser' + 'you hit ' + score + 'dicktators');
  $('#play').html('Play On');
  timerInterval = clearInterval(timerInterval);
  holesInterval = clearInterval(holesInterval);

}
