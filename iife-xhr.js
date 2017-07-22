function showCarnivores (carnivores) {
  let body = document.getElementById("body");
  body.innerHTML += carnivores.join(" ") + "<br>";
}

function showHerbivores (herbivores) {
  let body = document.getElementById("body");
  body.innerHTML += herbivores.join(" ");
}

Predator.loadCarnivores(showCarnivores);
Herbivores.loadHerbivores(showHerbivores);
