function showSection(id) {
  const sections = ["mensagem", "memorias", "futuro"];
  sections.forEach((sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.classList.add("hidden");
    }
  });

  const target = document.getElementById(id);
  if (target) {
    target.classList.remove("hidden");
    window.scrollTo({ top: target.offsetTop, behavior: "smooth" });
  }

  if (id === "inicio") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function startMusic() {
  const overlay = document.getElementById("welcome");
  const audio = document.getElementById("musicPlayer");
  overlay.style.display = "none";
  audio.play();
}

function toggleMusic() {
  const audio = document.getElementById("musicPlayer");
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function atualizarContador() {
  const inicio = new Date("2018-12-05T00:00:00");
  const agora = new Date();
  let diff = agora - inicio;

  const segundosTotais = Math.floor(diff / 1000);

  const anos = Math.floor(segundosTotais / (365.25 * 24 * 60 * 60));
  const meses = Math.floor(
    (segundosTotais % (365.25 * 24 * 60 * 60)) / (30.44 * 24 * 60 * 60)
  );
  const dias = Math.floor(
    (segundosTotais % (30.44 * 24 * 60 * 60)) / (24 * 60 * 60)
  );
  const horas = Math.floor((segundosTotais % (24 * 60 * 60)) / (60 * 60));
  const minutos = Math.floor((segundosTotais % (60 * 60)) / 60);
  const segundos = segundosTotais % 60;

  document.getElementById(
    "contador-tempo"
  ).innerText = `Estamos juntos há ${anos} anos, ${meses} meses, ${dias} dias, ${horas}h ${minutos}m ${segundos}s 💑`;
}

atualizarContador();
setInterval(atualizarContador, 1000);

function criarCoracao() {
  const coracao = document.createElement("div");
  coracao.classList.add("heart");
  coracao.innerText = "💖";

  // Posição aleatória na horizontal
  coracao.style.left = Math.random() * 100 + "vw";

  // Tamanho aleatório
  coracao.style.fontSize = Math.random() * 10 + 15 + "px";

  // Adiciona ao corpo
  document.body.appendChild(coracao);

  // Remove após animação
  setTimeout(() => {
    coracao.remove();
  }, 5000);
}

// Cria corações a cada 300ms
setInterval(criarCoracao, 300);

/* NOVO: controle das setas no slider em leque */
function scrollSlider(direction) {
  const slider = document.getElementById("cardSlider");
  const cardWidth = slider.querySelector(".card-item").offsetWidth;
  const gap = 16; // ou o gap que você usa entre cards no CSS
  const scrollAmount = cardWidth + gap;

  slider.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth",
  });
}

// Scroll horizontal pelo mouse wheel
const slider = document.getElementById("cardSlider");
slider.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  slider.scrollLeft += evt.deltaY;
});
