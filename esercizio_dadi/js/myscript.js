var buttonResult = document.getElementById('outcome')


buttonResult.addEventListener("click",
function() {
  var diceHuman = Math.floor(Math.random() * 6) + 1;
  var pHuman = document.getElementById("dadoumano");
  pHuman.innerHTML = diceHuman;

  var diceCpu = Math.floor(Math.random() * 6) + 1;
  var pCpu = document.getElementById("dadocpu");
  pCpu.innerHTML = diceCpu;

  var result = document.getElementById('risultato');


  // CONDIZIONE TIRO DADI
  if (diceHuman < diceCpu) {
    // umano perde contro computer
    result.innerHTML = "umano ha perso";

  } else if (diceCpu < diceHuman) {
    // umano vince contro computer
    result.innerHTML = "CPU ha perso";

  } else {
    result.innerHTML = "parità";

  }
} );
