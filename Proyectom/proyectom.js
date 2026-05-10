const heartButton = document.getElementById('heartButton');
const messageModal = document.getElementById('messageModal');
const heartsContainer = document.getElementById('heartsContainer');
const cardImage = document.querySelector('.card-image');

cardImage.addEventListener('click', () => {
  const audio = new Audio('audiom/besito.mp3');
  audio.play();
  cardImage.classList.add('jump');
  setTimeout(() => {
    cardImage.classList.remove('jump');
  }, 500);
});

heartButton.addEventListener('click', () => {
  messageModal.classList.remove('hidden');
  createFloatingHearts(40);
  createModalHearts();
});

function createFloatingHearts(amount) {
  const buttonRect = heartButton.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  for (let i = 0; i < amount; i += 1) {
    const heart = document.createElement('span');
    heart.className = 'floating-heart';

    const size = 12 + Math.random() * 42;
    const startX = buttonRect.left + buttonRect.width / 2 + (Math.random() - 0.5) * 260;
    const startY = buttonRect.top + buttonRect.height / 2 + (Math.random() - 0.5) * 90;
    const driftX = (Math.random() - 0.5) * 420;
    const driftY = 180 + Math.random() * 340;
    const duration = 1700 + Math.random() * 2300;
    const delay = Math.random() * 260;

    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    heart.style.left = `${Math.min(Math.max(startX, 0), viewportWidth - size)}px`;
    heart.style.top = `${Math.min(Math.max(startY, 0), viewportHeight - size)}px`;
    heart.style.opacity = `${0.6 + Math.random() * 0.35}`;
    heart.style.transform = `rotate(${Math.random() * 200 - 100}deg)`;

    heartsContainer.appendChild(heart);

    requestAnimationFrame(() => {
      heart.style.transition = `transform ${duration}ms ease-out ${delay}ms, opacity ${duration}ms ease-out ${delay}ms`;
      heart.style.transform = `translate(${driftX}px, -${driftY}px) rotate(${Math.random() * 260 - 130}deg)`;
      heart.style.opacity = '0';
    });

    setTimeout(() => {
      heart.remove();
    }, duration + delay + 260);
  }
}

function createModalHearts() {
  const windowArea = messageModal.querySelector('.window-hearts');
  windowArea.innerHTML = '';

  const heartCount = 16;
  const petalCount = 28;

  for (let i = 0; i < heartCount; i += 1) {
    const heart = document.createElement('span');
    heart.className = 'modal-heart';

    const size = 10 + Math.random() * 18;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    heart.style.left = `${5 + Math.random() * 88}%`;
    heart.style.top = `${10 + Math.random() * 75}%`;
    heart.style.animationDuration = `${2400 + Math.random() * 2200}ms`;
    heart.style.opacity = `${0.65 + Math.random() * 0.25}`;

    windowArea.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 7000 + Math.random() * 1500);
  }

  for (let i = 0; i < petalCount; i += 1) {
    const petal = document.createElement('span');
    petal.className = 'window-petal';

    const size = 6 + Math.random() * 10;
    petal.style.width = `${size}px`;
    petal.style.height = `${size + 4}px`;
    petal.style.left = `${3 + Math.random() * 92}%`;
    petal.style.top = `${6 + Math.random() * 82}%`;
    petal.style.animationDuration = `${2200 + Math.random() * 2400}ms`;
    petal.style.opacity = `${0.55 + Math.random() * 0.35}`;

    windowArea.appendChild(petal);

    setTimeout(() => {
      petal.remove();
    }, 6200 + Math.random() * 1400);
  }
}
