const startDate = new Date("2024-06-17T00:00:00");

const letterText =
  "From the moment you became part of my life, ordinary days started feeling like memories worth keeping. You make love feel patient, funny, brave, and beautifully real.";

const memories = [
  {
    title: "First Meeting/ First Date",
    date: "June 10, 2024",
    description: "Eto yung inaya kita lumabas and we went to Agoo that time. ",
    image: "pics/IMG_0090.jpg"
  },  
  {
    title: "2nd Date",
    date: "June 11, 2024",
    description: "After ng Agoo, sa beach naman and nag inom haha.",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "First Monthsary",
    date: "July 17, 2024",
    description: "One month of choosing each other and realizing how natural love could feel.",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "First Trip Together",
    date: "December 21, 2024",
    description: "A little adventure, many pictures, and a hundred tiny moments I still replay.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "2nd Anniversary",
    date: "June 17, 2026",
    description: "Two years of love, laughter, growth, and promises for everything still ahead.",
    image: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&w=900&q=80"
  }
];

const galleryPhotos = [
  {
    caption: "The smile I never get tired of.",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=80"
  },
  {
    caption: "A day that felt like a movie.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80"
  },
  {
    caption: "My favorite place is beside you.",
    image: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=900&q=80"
  },
  {
    caption: "Little moments, big feelings.",
    image: "https://images.unsplash.com/photo-1529634597503-139d3726fed5?auto=format&fit=crop&w=900&q=80"
  },
  {
    caption: "Every trip is better with you.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"
  },
  {
    caption: "Still choosing you.",
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=900&q=80"
  }
];

const reasons = [
  "Your smile makes hard days softer.",
  "Your kindness shows in the smallest things.",
  "You support me even when I doubt myself.",
  "You make me laugh until everything feels lighter.",
  "You listen with your whole heart.",
  "You make ordinary moments feel special.",
  "You are my peace and my favorite adventure.",
  "You love in a way that feels honest and safe."
];

const music = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");
const typewriter = document.getElementById("typewriter");
const moreLetter = document.getElementById("moreLetter");
const readMoreBtn = document.getElementById("readMoreBtn");
const timelineList = document.getElementById("timelineList");
const galleryGrid = document.getElementById("galleryGrid");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");
const prevPhoto = document.getElementById("prevPhoto");
const nextPhoto = document.getElementById("nextPhoto");
const slideshowBtn = document.getElementById("slideshowBtn");
const envelopeBtn = document.getElementById("envelopeBtn");
const heartLayer = document.getElementById("heartLayer");
const reasonText = document.getElementById("reasonText");
const reasonBtn = document.getElementById("reasonBtn");
const loveCounter = document.getElementById("loveCounter");

let typeIndex = 0;
let currentPhoto = 0;
let slideshowTimer = null;
let reasonIndex = -1;

function typeLetter() {
  if (typeIndex <= letterText.length) {
    typewriter.textContent = letterText.slice(0, typeIndex);
    typeIndex += 1;
    setTimeout(typeLetter, 44);
  }
}

function renderTimeline() {
  timelineList.innerHTML = memories
    .map(
      (memory) => `
        <article class="memory">
          <img src="${memory.image}" alt="${memory.title}" />
          <div>
            <time>${memory.date}</time>
            <h3>${memory.title}</h3>
            <p>${memory.description}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderGallery() {
  galleryGrid.innerHTML = galleryPhotos
    .map(
      (photo, index) => `
        <button class="gallery-item" type="button" data-index="${index}">
          <img src="${photo.image}" alt="${photo.caption}" />
          <span>${photo.caption}</span>
        </button>
      `
    )
    .join("");

  document.querySelectorAll(".gallery-item").forEach((item) => {
    item.addEventListener("click", () => openLightbox(Number(item.dataset.index)));
  });
}

function openLightbox(index) {
  currentPhoto = index;
  const photo = galleryPhotos[currentPhoto];
  lightboxImage.src = photo.image;
  lightboxImage.alt = photo.caption;
  lightboxCaption.textContent = photo.caption;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  stopSlideshow();
}

function showPhoto(direction) {
  currentPhoto = (currentPhoto + direction + galleryPhotos.length) % galleryPhotos.length;
  openLightbox(currentPhoto);
}

function startSlideshow() {
  openLightbox(0);
  slideshowBtn.textContent = "Stop Slideshow";
  slideshowTimer = setInterval(() => showPhoto(1), 2600);
}

function stopSlideshow() {
  clearInterval(slideshowTimer);
  slideshowTimer = null;
  slideshowBtn.textContent = "Start Slideshow";
}

function toggleMusic() {
  if (music.paused) {
    music.play();
    musicToggle.textContent = "Pause Music";
  } else {
    music.pause();
    musicToggle.textContent = "Play Music";
  }
}

function createHearts() {
  for (let i = 0; i < 26; i += 1) {
    const heart = document.createElement("span");
    heart.className = "falling-heart";
    heart.innerHTML = "&hearts;";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${18 + Math.random() * 24}px`;
    heart.style.animationDelay = `${Math.random() * 1.2}s`;
    heartLayer.appendChild(heart);
    setTimeout(() => heart.remove(), 4300);
  }
}

function showNextReason() {
  reasonIndex = (reasonIndex + 1) % reasons.length;
  reasonText.classList.remove("reason-pop");
  void reasonText.offsetWidth;
  reasonText.textContent = reasons[reasonIndex];
  reasonText.classList.add("reason-pop");
}

function updateCounter() {
  const now = new Date();
  let diff = Math.max(0, now - startDate);
  const day = 1000 * 60 * 60 * 24;
  const hour = 1000 * 60 * 60;
  const minute = 1000 * 60;
  const years = Math.floor(diff / (day * 365));
  diff -= years * day * 365;
  const months = Math.floor(diff / (day * 30));
  diff -= months * day * 30;
  const days = Math.floor(diff / day);
  diff -= days * day;
  const hours = Math.floor(diff / hour);
  diff -= hours * hour;
  const minutes = Math.floor(diff / minute);

  loveCounter.innerHTML = [
    ["Years", years],
    ["Months", months],
    ["Days", days],
    ["Hours", hours],
    ["Minutes", minutes]
  ]
    .map(
      ([label, value]) => `
        <div class="counter-card">
          <div><strong>${value}</strong><span>${label}</span></div>
        </div>
      `
    )
    .join("");
}

readMoreBtn.addEventListener("click", () => {
  moreLetter.classList.toggle("open");
  readMoreBtn.textContent = moreLetter.classList.contains("open") ? "Show Less" : "Read More";
});

musicToggle.addEventListener("click", toggleMusic);
lightboxClose.addEventListener("click", closeLightbox);
prevPhoto.addEventListener("click", () => showPhoto(-1));
nextPhoto.addEventListener("click", () => showPhoto(1));

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

slideshowBtn.addEventListener("click", () => {
  if (slideshowTimer) {
    stopSlideshow();
  } else {
    startSlideshow();
  }
});

envelopeBtn.addEventListener("click", () => {
  envelopeBtn.classList.toggle("open");
  envelopeBtn.setAttribute("aria-expanded", envelopeBtn.classList.contains("open"));
  createHearts();
  if (music.paused) toggleMusic();
});

reasonBtn.addEventListener("click", showNextReason);

document.addEventListener("keydown", (event) => {
  if (!lightbox.classList.contains("open")) return;
  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowLeft") showPhoto(-1);
  if (event.key === "ArrowRight") showPhoto(1);
});

typeLetter();
renderTimeline();
renderGallery();
showNextReason();
updateCounter();
setInterval(updateCounter, 60000);
