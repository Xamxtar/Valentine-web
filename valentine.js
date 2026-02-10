let userName = "";

const messages = [
  "Are you magnetic? because you always pull me close to you 😌❤️",
  "you are part of the reason my mom told me to always follow my heart 💘",
  "You must be JavaScript, because you make my heart react 💻❤️",
  "i use to think that real love is only seen in movies until i found you 😘🥺",
  "i love youuuuu....😍😍😪",
  "i need you like the moon needs the sun🥰",
  "i want to be the reason you believe in love💞💞"
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
  music.play().catch(e => {
    console.error('Audio play failed:', e);
    alert('Music could not play automatically due to browser policies. Please try clicking the page or check your browser settings for autoplay.');
  });
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