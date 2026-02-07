let userName = "";

const messages = [
  "Are you WiFi? Because I'm feeling the connection 😌❤️",
  "If loving you was a job, I’d never resign 😂💘",
  "You must be JavaScript, because you make my heart react 💻❤️",
  "I wanted to buy you chocolate, but I realized I’m the real snack 😎🍫",
  "No matter the bug in my life, you’re my permanent fix 💖"
];

let index = 0;

function startValentine() {
  const input = document.getElementById("nameInput").value.trim();
  if (!input) {
    alert("Please enter your name 😊");
    return;
  }
  userName = input;

  document.getElementById("page1").classList.add("hidden");
  document.getElementById("page2").classList.remove("hidden");

  document.getElementById("title").innerText = `Countdown for ${userName} 💘`;

  const music = document.getElementById("bgMusic");
  music.play();
}

function nextMessage() {
  index = (index + 1) % messages.length;
  document.getElementById("msg").innerText = `${userName} ❤️\n${messages[index]}`;
}

const valentinesDate = new Date("February 7, 2026 13:19:00").getTime();

const timer = setInterval(function() {
  const now = new Date().getTime();
  const distance = valentinesDate - now;

  if (distance <= 0) {
    clearInterval(timer);
    document.getElementById("countdown").style.display = "none";
    document.getElementById("valentine").classList.remove("hidden");
    document.getElementById("valTitle").innerText = `Happy Valentine, ${userName} ❤️😂`;
    document.getElementById("msg").innerText = `${userName} ❤️\n${messages[0]}`;
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);

// Floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (3 + Math.random() * 5) + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}
setInterval(createHeart, 300);