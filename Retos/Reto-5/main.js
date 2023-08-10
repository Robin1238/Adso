let TurnOff = "Apagado";
// let licuadoraSound = document.getElementById("blender-sound");
// let buttonSound = document.getElementById("button-sound");
let licuadora = document.getElementById("blender");

function controlador() {
  if (TurnOff == "Apagado") {
    TurnOff = "Encendido";
    licuadora.classList.add("active");
    sonidos();
  } else {
    TurnOff = "Apagado";
    licuadora.classList.remove("active");
    sonidos();
  }
}

function sonidos() {
  if (licuadoraSound.paused) {
    buttonSound.play();
    licuadoraSound.play();
  } else {
    buttonSound.play();
    licuadoraSound.pause();
    licuadoraSound.curentTime("0");
  }
}
