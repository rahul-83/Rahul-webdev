
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
