function seleccionar(link) {
  let opciones = document.querySelectorAll("#links a");
  opciones[0].className = "";
  opciones[1].className = "";
  opciones[2].className = "";
  opciones[3].className = "";
  opciones[4].className = "";
  link.className = "select";

  let x = document.getElementById("nav");
  x.className = "";
}

function responsiveMenu() {
  let x = document.getElementById("nav");
  if (x.className === "") {
    x.className = "responsive";
  } else {
    x.className = "";
  }
}

window.onscroll = function () {
  efectoskills();
};

function efectoskills() {
  let skills = document.getElementById("skills");
  let distanciaSkills = window.innerHeight - skills.getBoundingClientRect().top;
  if (distanciaSkills >= 300) {
    document.getElementById("html").classList.add("barra-progreso80");
    document.getElementById("js").classList.add("barra-progreso75");
    document.getElementById("db").classList.add("barra-progreso70");
    document.getElementById("cpp").classList.add("barra-progreso90");
    document.getElementById("python").classList.add("barra-progreso75");
    document.getElementById("photoe").classList.add("barra-progreso80");
    document.getElementById("videoe").classList.add("barra-progreso85");
  }
}
