
<html>
<head>
<title>Click Speed Game in HTML5</title>
<style type="text/css">
  #content {
    width: 200px;
    border: 1px dashed #dc0000;
    font-size: 20px;
    text-align: center;
    margin: 0 auto;
    margin-top: 50px;
    padding: 20px;
    user-select: none;
  }
	
  #clickarea {
width: 500px;
height: 400px;
background: #fff;
margin-left: 150px;
margin-right: 150px;
margin-top: 200px;
margin-bottom: 100px;
display: grid;
grid-template-columns: repeat(5,100px);
grid-template-rows: repeat(4,100px);
  }

.container .box
{
    background: #778899;
    display: grid;
    box-sizing: border-box;
    border: 1px solid red;
}

.container .box button
{
   background-color: red;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
	
  #start {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%,-50%);
    border: 0;
    line-height: 2.5;
    padding: 0 20px;
    font-size: 1rem;
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 1px #000;
    border-radius: 10px;
    background-color: rgba(220, 0, 0, 1);
    background-image: linear-gradient(to top left,
				  rgba(0, 0, 0, .2),
				  rgba(0, 0, 0, .2) 30%,
				  rgba(0, 0, 0, 0));
    box-shadow: inset 2px 2px 3px rgba(255, 255, 255, .6),
                inset -2px -2px 3px rgba(0, 0, 0, .6);
  }
	
  #start:hover {
    background-color: rgba(255, 0, 0, 1);
  }
	
  #start:active {
    box-shadow: inset -2px -2px 3px rgba(255, 255, 255, .6),
                inset 2px 2px 3px rgba(0, 0, 0, .6);
  }

</style>
</head>
<body>
  <div id="content">
    Timer: <span id="timer"></span><br/>
  </div>
  <button id="start">Start</button>
  <div id="clickarea">
    <div class="box"><input onclick="change1()" type="button" value=3 id="myButton1"></div>
      <div class="box"><input onclick="change2()" type="button" value=8 id="myButton2"></div>
      <div class="box"><input onclick="change3()" type="button" value=17 id="myButton3"></div>
      <div class="box"><input onclick="change4()" type="button" value=13 id="myButton4"></div>
      <div class="box"><input onclick="change5()" type="button" value=6 id="myButton5"></div>
      <div class="box"><input onclick="change6()" type="button" value=11 id="myButton6"></div>
      <div class="box"><input onclick="change7()" type="button" value=7 id="myButton7"></div>
      <div class="box"><input onclick="change8()" type="button" value=18 id="myButton8"></div>
      <div class="box"><input onclick="change9()" type="button" value=2 id="myButton9"></div>
      <div class="box"><input onclick="change10()" type="button" value=10 id="myButton10"></div>
      <div class="box"><input onclick="change11()" type="button" value=16 id="myButton11"></div>
      <div class="box"><input onclick="change12()" type="button" value=4 id="myButton12"></div>
      <div class="box"><input onclick="change13()" type="button" value=9 id="myButton13"></div>
      <div class="box"><input onclick="change14()" type="button" value=5 id="myButton14"></div>
      <div class="box"><input onclick="change15()" type="button" value=20 id="myButton15"></div>
      <div class="box"><input onclick="change16()" type="button" value=14 id="myButton16"></div>
      <div class="box"><input onclick="change17()" type="button" value=15 id="myButton17"></div>
      <div class="box"><input onclick="change18()" type="button" value=1 id="myButton18"></div>
      <div class="box"><input onclick="change19()" type="button" value=19 id="myButton19"></div>
      <div class="box"><input onclick="change20()" type="button" value=12 id="myButton20"></div>   
  </div>
  <input onclick="display()" type="button" value="Display Top 5 scores" id="hiscore">
  <script type="text/javascript">
    var score; // to store the current score
    var duration;
    var startTime; // start time
    var ended = true; // boolean indicating if game is ended
    // we get DOM References for some HTML elements
    var timerTxt = document.getElementById("timer");
    var scoreTxt = document.getElementById("score");
    var clicksTxt = document.getElementById("clicks");
    var startBtn = document.getElementById("start");
    var clickArea = document.getElementById("clickarea");

function change1()
{
document.getElementById("myButton1").value=String(Number(document.getElementById("myButton1").value)+20);
document.getElementById("myButton1").style.color=rgb(255, 0, 0);
}
function change2()
{
document.getElementById("myButton2").value=String(Number(document.getElementById("myButton2").value)+20);
}

function change3()
{
document.getElementById("myButton3").value=String(Number(document.getElementById("myButton3").value)+20);
}
function change4()
{
document.getElementById("myButton4").value=String(Number(document.getElementById("myButton4").value)+20);
}
function change5()
{
document.getElementById("myButton5").value=String(Number(document.getElementById("myButton5").value)+20);
}
function change6()
{
document.getElementById("myButton6").value=String(Number(document.getElementById("myButton6").value)+20);
}
function change7()
{
document.getElementById("myButton7").value=String(Number(document.getElementById("myButton7").value)+20);
}
function change8()
{
document.getElementById("myButton8").value=String(Number(document.getElementById("myButton8").value)+20);
}
function change9()
{
document.getElementById("myButton9").value=String(Number(document.getElementById("myButton9").value)+20);
}
function change10()
{
document.getElementById("myButton10").value=String(Number(document.getElementById("myButton10").value)+20);
}
function change11()
{
document.getElementById("myButton11").value=String(Number(document.getElementById("myButton11").value)+20);
}
function change12()
{
document.getElementById("myButton12").value=String(Number(document.getElementById("myButton12").value)+20);
}
function change13()
{
document.getElementById("myButton13").value=String(Number(document.getElementById("myButton13").value)+20);
}
function change14()
{
document.getElementById("myButton14").value=String(Number(document.getElementById("myButton14").value)+20);
}
function change15()
{
document.getElementById("myButton15").value=String(Number(document.getElementById("myButton15").value)+20);
}
function change16()
{
document.getElementById("myButton16").value=String(Number(document.getElementById("myButton16").value)+20);
}
function change17()
{
document.getElementById("myButton17").value=String(Number(document.getElementById("myButton17").value)+20);
}
function change18()
{
document.getElementById("myButton18").value=String(Number(document.getElementById("myButton18").value)+20);
}
function change19()
{
document.getElementById("myButton19").value=String(Number(document.getElementById("myButton19").value)+20);
}
function change20()
{
document.getElementById("myButton20").value=String(Number(document.getElementById("myButton20").value)+20);
}
function display()
{
document.getElementById("hiscore");
const result = {userName: user, score: timeScore}

const savedScores = localStorage.getItem('time') || '[]' // get the score, or the initial value if empty

const highscores = [...JSON.parse(savedScores), result] // add the result
  .sort((a, b) => b.score- a.score) // sort descending
  .slice(0, 5) // take highest 5

localStorage.setItem('time', JSON.stringify(highscores))
  }

    // we define two functions for showing or hiding a HTML element
    var show = function(elem) {
      elem.style.display = 'inline';
    };

    var hide = function(elem) {
      elem.style.display = 'none';
    };

    // Method called when the game starts
    function startGame() {
      hide(startBtn);
      score = -1;
      ended = false;
      // we get start time
      startTime = new Date().getTime();

      // we create a timer with the setInterval method
      var timerId = setInterval(function() {
        var total = (new Date().getTime() - startTime) / 1000;

        // while total lower than duration, we update timer and the clicks by seconds
        if (score<=38) {
          timerTxt.textContent = total.toFixed(3);
          clicksTxt.textContent = (score / total).toFixed(2);
        } else {
          // otherwise, game is ended, we clear interval and we set game as ended
          ended = true;
          clearInterval(timerId);
// Check browser support
if (typeof(Storage) !== "undefined") {
  // Store
  window.localStorage.setItem("time1",timerTxt.textContent);
}
          // we call the end game method
          endGame();
        }
      }, 1);
  }

  // end game method
  function endGame() {
    // we write final stats
    var clicsBySeconds = (score / duration).toFixed(2);
    timerTxt.textContent = duration.toFixed(3);
    clicksTxt.textContent = clicsBySeconds;
    const result = {userName: user, score: timeScore}

const savedScores = localStorage.getItem('highscore') || '[]' // get the score, or the initial value if empty

const highscores = [...JSON.parse(savedScores), result] // add the result
  .sort((a, b) => b.score- a.score) // sort descending
  .slice(0, 5) // take highest 5
localStorage.setItem('highscore', JSON.stringify(highscores)) // store the scores
    // we show start button to play an other game
    show(startBtn);

  }
 
  // we set a click event listener on the start button
  startBtn.addEventListener("click", function(e) {
    startGame();
  });

  // we add a click event listener on the click area div to update the score when the user will click
  clickArea.addEventListener("click", function(e) {
    if (!ended) {
      score++;
      scoreTxt.textContent = score;
    }
  });

for(var i in localStorage.slice(0,5)) {

    console.log(i + ' = ' + localStorage[i]);
}

</script>
</body>
</html>