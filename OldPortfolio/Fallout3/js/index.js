function btnNext(x, y) {
  x.style.display = "none";
  y.style.display = "block";
};


var answers = 0;


function selections() {
          var sel = document.getElementsByTagName("input");
        for (var i = 0; i < sel.length; i++) {
          if (sel[i].checked) {
            answers += (sel[i].value * 1);
          }
         };
     };

function checkResults() {
  if (answers <= 15) {
    document.getElementById("result").innerHTML =
    "Bless you vault dweller, for you are a saint!";
    document.getElementById("karma1").style.display = "block";
  } else if (15 < answers && answers <= 21.9) {
    document.getElementById("result").innerHTML =
    "You're not bad, but you're not great either.";
    document.getElementById("karma0").style.display = "block";
  } else if (21.9 < answers && answers <=27.5) {
      document.getElementById("result").innerHTML =
      "The other vault dwellers are beginning to wonder if they can trust you.";
      document.getElementById("karma-1").style.display = "block";
    } else if(answers > 27.5) {
      document.getElementById("result").innerHTML =
      "You are feared by everyone in the vault, but that's okay because they now do whatever you ask them to.";
      document.getElementById("karma-2").style.display = "block";
} else {
  return false
}

      };

function getResults() {
  selections();
  checkResults();
};


/* var rArray = [answers <= 15, 15 < answers && answers <= 21.9, 21.9 < answers && answers <=27.5, answers > 27.5];

var getResults = function() {
switch (rArray) {
case 0:
document.getElementById("result").innerHTML = "Bless you vault dweller, for you are a saint!";
break;
case 1:
document.getElementById("result").innerHTML = "You're not bad, but you're not great either.";
break;
case 2:
document.getElementById("result").innerHTML = "The other vault dwellers are beginning to wonder if they can trust you.";
break;
case 3:
document.getElementById("result").innerHTML = "You are feared by everyone in the vault, but that's okay because they now do whatever you ask them to.";
};
};
*/
