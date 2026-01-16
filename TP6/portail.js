// CONSTANTES SPRITES
const FRAME_WIDTH = 64;
const FRAME_HEIGHT = 64;
const FRAME_COL = 0; // Frame à afficher
const FRAME_ROW = 2;

// SÉLECTION DES ÉLÉMENTS
const form = document.getElementById("connexion-form");
const spriteItems = document.querySelectorAll(".sprite-item");

// CHARGEMENT DES SPRITES SUR LES CANVAS
spriteItems.forEach(item => {
  const charId = item.dataset.char;
  const canvas = item.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  const img = new Image();
  img.src = `assets/${charId}.png`;

  img.onload = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.imageSmoothingEnabled = false;

    ctx.drawImage(
      img,
      FRAME_COL * FRAME_WIDTH,
      FRAME_ROW * FRAME_HEIGHT,
      FRAME_WIDTH,
      FRAME_HEIGHT,
      0,
      0,
      canvas.width,
      canvas.height
    );
  };
});

// GESTION DE LA SÉLECTION DES SPRITES
spriteItems.forEach(sprite => {
  sprite.addEventListener("click", () => {
    // Retirer active de tous
    spriteItems.forEach(s => s.classList.remove("active"));
    // Activer celui cliqué
    sprite.classList.add("active");
  });
});
// GESTION DU SUBMIT DU FORMULAIRE
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Empêche le rechargement de la page

  // Récupérer pseudo et backend
  const pseudo = form.elements["pseudo"].value.trim();
  const backend = form.elements["backend"].value.trim();

  // Récupérer le sprite sélectionné
  const selectedSprite = document.querySelector(".sprite-item.active");
  const skinId = selectedSprite ? selectedSprite.dataset.char : null;

  // Stocker dans localStorage
  localStorage.setItem("pseudo", pseudo);
  localStorage.setItem("backend", backend);
  localStorage.setItem("skinId", `assets/${skinId}.png`);

  // Affichage console (test)
  console.log("Pseudo :", pseudo);
  console.log("Backend :", backend);
  console.log("Skin sélectionné :", `assets/${skinId}.png`);

});