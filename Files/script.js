/* ============================
   Navigation + Screen Logic
============================ */

function showScreen(n) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen' + n).classList.add('active');
}

function goToThankYou() {
  // FIXED PATH
  window.location.href = "Files/thankyou.html";
}

/* ============================
   HEARTS FALLING
============================ */

const heartContainer = document.getElementById("heart-container");

if (heartContainer) {
  function createHeart() {
    const heart = document.createElement("span");
    heart.className = "heart";

    const size = 16 + Math.random() * 16;
    heart.style.setProperty("--size", size + "px");

    heart.style.left = Math.random() * 100 + "vw";
    const drift = (Math.random() < 0.5 ? -1 : 1) * (30 + Math.random() * 70);
    heart.style.setProperty("--tx", drift + "px");

    const duration = 6 + Math.random() * 4;
    heart.style.setProperty("--duration", duration + "s");

    heartContainer.appendChild(heart);

    heart.addEventListener("animationend", () => heart.remove());
  }

  setInterval(createHeart, 700);
}

/* ============================
   RUN AWAY BUTTON LOGIC
============================ */

const noBtn = document.getElementById("noBtn");
const noRow = document.getElementById("noRow");

let lastX = 0;
let lastY = 0;

if (noBtn && noRow) {
  function moveNoBtn() {
    const rowRect = noRow.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const maxX = rowRect.width - btnRect.width - 20;
    const maxY = rowRect.height - btnRect.height - 20;

    let newX, newY;

    do {
      const distance = 100 + Math.random() * 120;
      const angle = Math.random() * Math.PI * 2;

      newX = lastX + Math.cos(angle) * distance;
      newY = lastY + Math.sin(angle) * distance;

      newX = Math.min(Math.max(newX, -maxX), 0);
      newY = Math.min(Math.max(newY, -maxY), 0);

    } while (Math.abs(newX - lastX) < 60 && Math.abs(newY - lastY) < 60);

    noBtn.style.transform = `translate(${newX}px, ${newY}px)`;

    lastX = newX;
    lastY = newY;

    noBtn.classList.add("runaway");
    setTimeout(() => noBtn.classList.remove("runaway"), 350);
  }

  noBtn.addEventListener("mouseenter", moveNoBtn);
  noBtn.addEventListener("mouseover", moveNoBtn);
}

/* ============================
   SNOW PARTICLES (ILOVE YOU PAGE)
============================ */

if (document.body.classList.contains("ilove-bg")) {
  function createSnow() {
    const snow = document.createElement("div");
    snow.classList.add("snow");

    snow.style.left = Math.random() * 100 + "vw";
    snow.style.width = snow.style.height = Math.random() * 6 + 3 + "px";
    snow.style.setProperty("--drift", (Math.random() * 40 - 20) + "px");

    snow.style.animationDuration = (6 + Math.random() * 6) + "s";

    document.body.appendChild(snow);

    setTimeout(() => snow.remove(), 9000);
  }

  setInterval(createSnow, 120);
}
