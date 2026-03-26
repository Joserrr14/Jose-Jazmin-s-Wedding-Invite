const envelopeSection = document.getElementById("envelopeSection");
const invite = document.getElementById("invite");
const sealButton = document.getElementById("sealButton");
const envelopeFigure = document.getElementById("envelopeFigure");
const petals = document.getElementById("petals");
const countdown = document.getElementById("countdown");
const rsvpForm = document.getElementById("rsvpForm");
const rsvpMessage = document.getElementById("rsvpMessage");

let isOpening = false;

function showInvite() {
  envelopeSection.classList.add("hidden");
  invite.classList.remove("hidden");
  invite.classList.add("fade-in");
  window.scrollTo(0, 0);
}

function createPetal() {
  const petal = document.createElement("span");
  petal.className = "petal";

  const left = Math.random() * 100;
  const duration = 2.6 + Math.random() * 1.6;
  const delay = Math.random() * 0.8;
  const size = 12 + Math.random() * 16;

  petal.style.left = `${left}%`;
  petal.style.width = `${size}px`;
  petal.style.height = `${size * 1.35}px`;
  petal.style.animationDuration = `${duration}s`;
  petal.style.animationDelay = `${delay}s`;

  petals.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, (duration + delay + 0.4) * 1000);
}

function startPetals() {
  for (let i = 0; i < 16; i++) {
    createPetal();
  }
}

sealButton.addEventListener("click", () => {
  if (isOpening) return;
  isOpening = true;

  sealButton.classList.add("melting");

  setTimeout(() => {
    envelopeFigure.classList.add("opening");
  }, 180);

  setTimeout(() => {
    startPetals();
  }, 1200);

  setTimeout(() => {
    showInvite();
  }, 2300);
});

const targetDate = new Date("December 18, 2026 16:00:00").getTime();

function updateCountdown() {
  if (!countdown) return;

  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    countdown.innerHTML = "<p>The big day is here!</p>";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  countdown.innerHTML = `
    <div><strong>${days}</strong><br>Days</div>
    <div><strong>${hours}</strong><br>Hours</div>
    <div><strong>${minutes}</strong><br>Minutes</div>
    <div><strong>${seconds}</strong><br>Seconds</div>
  `;
}

setInterval(updateCountdown, 1000);
updateCountdown();

rsvpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  rsvpMessage.textContent = "Your RSVP was recorded.";
});
