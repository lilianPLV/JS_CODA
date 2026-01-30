// CONSTANTES SPRITES
const FRAME_WIDTH = 64;
const FRAME_HEIGHT = 64;
const FRAME_COL = 0;
const FRAME_ROW = 2;
const SPRITE_COUNT = 29;

// SÉLECTION DES ÉLÉMENTS
const form = document.getElementById("connexion-form");
const spriteGrid = document.getElementById("sprite-grid");
const spriteItems = [];

// GÉNÉRATION DES SPRITES
for (let i = 1; i <= SPRITE_COUNT; i++) {
  const spriteItem = document.createElement("div");
  spriteItem.classList.add("sprite-item");

  // Premier sprite sélectionné par défaut
  if (i === 1) spriteItem.classList.add("active");

  spriteItem.dataset.char = i;

  const canvas = document.createElement("canvas");
  canvas.width = FRAME_WIDTH;
  canvas.height = FRAME_HEIGHT;

  spriteItem.appendChild(canvas);
  spriteGrid.appendChild(spriteItem);
  spriteItems.push(spriteItem);

  // Chargement de l'image du sprite
  const ctx = canvas.getContext("2d");
  const img = new Image();
  img.src = `assets/${i}.png`;

  img.onload = () => {
    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

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
}

// GESTION DE LA SÉLECTION
spriteItems.forEach(sprite => {
  sprite.addEventListener("click", () => {
    spriteItems.forEach(s => s.classList.remove("active"));
    sprite.classList.add("active");
  });
});

// GESTION DU FORMULAIRE
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const pseudo = form.elements["pseudo"].value.trim();
  const backend = form.elements["backend"].value.trim();

  const selectedSprite = document.querySelector(".sprite-item.active");
  const skinId = selectedSprite ? selectedSprite.dataset.char : null;

  localStorage.setItem("pseudo", pseudo);
  localStorage.setItem("backend", backend);
  localStorage.setItem("skinPath", `assets/${skinId}.png`);

  console.log("Pseudo :", pseudo);
  console.log("Backend :", backend);
  console.log("Skin sélectionné :", `assets/${skinId}.png`);

  window.location.href = "game.html";
});