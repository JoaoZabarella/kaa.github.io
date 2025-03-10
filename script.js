let storedDate = localStorage.getItem('eventDate');
let eventDate;

// Defina a data de início do evento para 6 de junho de 2024 às 14:00
if (storedDate) {
    eventDate = new Date(storedDate);
} else {
    eventDate = new Date("2024-06-06T14:00:00");
    localStorage.setItem('eventDate', eventDate.toString());
}

// Definição da segunda data de evento que estava faltando
let secondEventDate = new Date("2024-06-06T14:00:00"); // Adicionei esta definição que estava faltando

// Função para atualizar a contagem regressiva
const countdown = setInterval(() => {
    const timerElement = document.getElementById("timer");
    if (!timerElement) return; // Verifica se o elemento existe no DOM

    const now = new Date().getTime();
    const distance = now - eventDate.getTime();

    const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365.25));
    const months = Math.floor((distance % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timerElement.innerHTML = `${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}, 1000);

// Função para atualizar a segunda contagem regressiva
const secondCountdown = setInterval(() => {
    const secondTimerElement = document.getElementById("second-timer");
    if (!secondTimerElement) return; // Verifica se o elemento existe no DOM

    const now = new Date().getTime();
    const distance = now - secondEventDate.getTime();

    const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365.25));
    const months = Math.floor((distance % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    secondTimerElement.innerHTML = `${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}, 1000);

// Imagens do casal
const imagensCasal = [
    "imgs/foto1.jpg", "imgs/foto2.jpg", "imgs/foto3.jpg", "imgs/foto5.jpg", "imgs/foto6.jpg", 
    "imgs/foto7.jpg", "imgs/foto8.jpg", "imgs/foto9.jpg", "imgs/foto11.jpg", "imgs/foto22.jpg", 
    "imgs/foto33.jpg", "imgs/foto44.jpg", "imgs/foto55.jpg", "imgs/foto66.jpg", "imgs/foto77.jpg", 
    "imgs/foto88.jpg", "imgs/foto99.jpg", "imgs/foto111.jpg", "imgs/foto222.jpg", "imgs/foto333.jpg", 
    "imgs/foto444.jpg", "imgs/foto555.jpg",
];

let imagemAtual = 0;
const imgElement = document.getElementById("casal-img");

// Função para trocar imagem
function trocarImagem() {
    if (!imgElement) return; // Verifica se o elemento existe

    imgElement.classList.add("fade-out");

    imgElement.addEventListener("transitionend", () => {
        // Muda a imagem após a transição de fade-out
        imagemAtual = (imagemAtual + 1) % imagensCasal.length;
        imgElement.src = imagensCasal[imagemAtual];

        // Remove a classe de fade-out e adiciona fade-in
        imgElement.classList.remove("fade-out");
        imgElement.classList.add("fade-in");

        // Remove a classe de fade-in após 1 segundo para preparar a próxima transição
        setTimeout(() => {
            imgElement.classList.remove("fade-in");
        }, 1000); // Tempo deve ser igual à transição de opacidade
    }, { once: true }); // Adiciona o listener apenas uma vez por chamada
}

// Troca a imagem a cada 5 segundos
setInterval(trocarImagem, 5000);

// Criação de corações
function criarCoracao() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(heart);
    heart.addEventListener("animationend", () => {
        heart.remove();
    });
}

// Exibir corações e a mensagem ao clicar no botão
const showHeartBtn = document.getElementById('show-heart-btn');
const heartMessage = document.getElementById('heart-message');

if (showHeartBtn && heartMessage) {
    showHeartBtn.addEventListener('click', () => {
        // Criar corações em animação
        for (let i = 0; i < 10; i++) {
            criarCoracao();
        }
        
        // Mostrar a mensagem após a animação
        heartMessage.classList.remove('hidden');
        heartMessage.classList.add('appear');
    });
}

// Chama a função criarCoracao a cada 500ms
setInterval(criarCoracao, 500);

// Controle do vídeo
const videoElement = document.getElementById('video');
const playButton = document.getElementById('play-btn');
const pauseButton = document.getElementById('pause-btn');

if (playButton) {
    // Reproduzir o vídeo
    playButton.addEventListener('click', () => {
        if (videoElement) {
            videoElement.play();
        }
    });
}

if (pauseButton) {
    // Pausar o vídeo
    pauseButton.addEventListener('click', () => {
        if (videoElement) {
            videoElement.pause();
        }
    });
}