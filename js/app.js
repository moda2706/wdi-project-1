$(start);

var holeArray;
// var play;
var score;
var playerScore;
var count;
var timerInterval, holesInterval;
var holes = $('.hole');

// function dick () {

var object = [
  {
    name: 'Trump',
    img: 'http://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/12907283_1534460133516959_1809099959_n.jpg?ig_cache_key=MTIyMzA3OTM3MTExNjk0MDMxMA%3D%3D.2',
    speed: 1500,
    score: 5
  }, {
    name: 'Putin',
    img: 'http://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/10963991_448832521980180_2056659417_n.jpg?ig_cache_key=MTIxMzgwNTMwNDUyMjI0NzUxNQ%3D%3D.2',
    speed: 1000,
    score: 10
  }, {
    name: 'KimJong-un',
    img: 'http://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/13098910_874458652699718_548370333_n.jpg?ig_cache_key=MTIzNTQ0MzQ5MjM0OTA1Mzk5Mw%3D%3D.2',
    speed: 2000,
    score: 5
  }, {
    name: 'Obama',
    img: 'http://scontent.cdninstagram.com/t51.2885-15/e35/1390271_1697286650559505_1043272681_n.jpg?ig_cache_key=MTIwOTQyODk4Mzg3NjcxNzk4Nw%3D%3D.2',
    speed: 750,
    score: 0
  }
];


function start () {
  $('.play').on('click', play); // this is the function when clicked on button play this will start the game
  $('.reset').on('click', reset);
}

function play() {
  $('.play').off();
  holeArray = [];
  score = 0;
  playerScore = 0;
  count = 30;
  // counter = 0;
  $('#timer').html(count);
  timerInterval = setInterval(timer, 1000);
  $('.scoreBoard').empty();
  gameStart();
}

function timer() {
  count -= 1;
  if(count === 0) endGame();
  $('#timer').html(count);
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
  });

  setTimeout(function(){
    // dick();
    $(hole).css('background-image', 'none');
    $(hole).off();
  }, dicktator.speed);

}

function logScore(dicktator, hole) {
  if (dicktator.name === 'Obama') {
    endGame();
  } else {
    score += dicktator.score;
    $('.scoreboard').html(`Score: ${score}`);
  }
  $('.scoreBoard').html(score);
  console.log(score);
  $(hole).css('background-image', 'none');
  $(hole).off();
}

function endGame () {
  $('.scoreBoard').html('game over loser' + 'you hit ' + score + 'dicktators');
  $('#play').html('Play On');
  clearInterval(timerInterval);
  clearInterval(holesInterval);
  // $('#timer').html(30);
  score = 0;
  playerScore = 0;
  count = 0;
}

function reset () {
  score = 0;
  $('.scoreboard').html(`Score: ${score}`);
  $('.play').on();
  $('#timer').html(30);
  // console.log('clicked');
}
