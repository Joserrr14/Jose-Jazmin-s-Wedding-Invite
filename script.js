const envelopeSection = document.getElementById("envelopeSection");
const invite = document.getElementById("invite");
const sealButton = document.getElementById("sealButton");
const envelope = document.getElementById("envelope");
const countdown = document.getElementById("countdown");
const rsvpForm = document.getElementById("rsvpForm");
const rsvpMessage = document.getElementById("rsvpMessage");

function showEnvelope() {
  envelopeSection.classList.remove("hidden");
  invite.classList.add("hidden");
  window.scrollTo(0, 0);
}

function showInvite() {
  envelopeSection.classList.add("hidden");
  invite.classList.remove("hidden");
  window.scrollTo(0, 0);
}

sealButton.addEventListener("click", () => {
  envelope.classList.add("open");

  setTimeout(() => {
    showInvite();
    envelope.classList.remove("open");
  }, 1400);
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

showEnvelope();
