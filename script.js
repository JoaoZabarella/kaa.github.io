let storedDate = localStorage.getItem('eventDate');
let eventDate;

// Obtém a data do evento ou define uma nova
if (storedDate) {
    eventDate = new Date(storedDate);
} else {
    eventDate = new Date();
    eventDate.setDate(eventDate.getDate() - 17);
    eventDate.setHours(eventDate.getHours() - 21);
    eventDate.setMinutes(eventDate.getMinutes() - 37);
    localStorage.setItem('eventDate', eventDate);
}

// Contagem regressiva
const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = now - eventDate.getTime();

    const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365.25));
    const months = Math.floor((distance % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`;
}, 1000);

// Imagens do casal
const imagensCasal = [
    "imgs/foto3.jpg",
    "imgs/foto5.jpg",
    "imgs/foto6.jpg",
    "imgs/foto7.jpg",
    "imgs/foto8.jpg",
    "imgs/foto9.jpg",
    "imgs/foto11.jpg",
    "imgs/foto22.jpg",
    "imgs/foto33.jpg",
    "imgs/foto44.jpg",
    "imgs/foto55.jpg",
    "imgs/foto66.jpg",
    "imgs/foto77.jpg",
    "imgs/foto88.jpg",
    "imgs/foto99.jpg",
    "imgs/foto111.jpg",
    "imgs/foto222.jpg",
    "imgs/foto333.jpg",
    "imgs/foto444.jpg",
    "imgs/foto555.jpg",
];

let imagemAtual = 0;
const imgElement = document.getElementById("casal-img");

// Função para trocar imagem
function trocarImagem() {
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

showHeartBtn.addEventListener('click', () => {
    // Criar corações em animação
    for (let i = 0; i < 10; i++) {
        criarCoracao();
    }
    
    // Mostrar a mensagem após a animação
    heartMessage.classList.remove('hidden');
    heartMessage.classList.add('appear');
});

// Chama a função criarCoracao a cada 500ms
setInterval(criarCoracao, 500);
