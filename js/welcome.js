window.addEventListener("load", function hora() {
  const relogio = document.getElementById("relogio");
  const img = document.getElementById("turno");
  const msg = document.getElementById("msg");

  const data = new Date();
  const hora = data.getHours();
  const min = data.getMinutes();

  setTimeout("hora()", 5000); //Sem as 'aspas' a função não é chamada.

  if (hora >= 0 && hora < 12) {
    //bom dia
    msg.innerHTML = `Bom dia!`;
    if (min < 10) {
      relogio.innerHTML = `${hora}<span id="dotClock">:</span>0${min}`;
    } else {
      relogio.innerHTML = `${hora}<span id="dotClock">:</span>${min}`;
    }
    img.src = "img/sol.png";
  } else if (hora < 18) {
    //boa tarde
    msg.innerHTML = `Boa tarde!`;
    if (min < 10) {
      relogio.innerHTML = `${hora}<span id="dotClock">:</span>0${min}`;
    } else {
      relogio.innerHTML = `${hora}<span id="dotClock">:</span>${min}`;
    }
    img.src = "img/sol.png";
  } else {
    //boa noite
    msg.innerHTML = `Boa noite!`;
    if (min < 10) {
      relogio.innerHTML = `${hora}<span id="dotClock">:</span>0${min}`;
    } else {
      relogio.innerHTML = `${hora}<span id="dotClock">:</span>${min}`;
    }
    img.src = "img/lua.png";
  }
});


