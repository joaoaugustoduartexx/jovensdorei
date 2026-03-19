// 1. MENU RESPONSIVO (MOBILE)
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// 2. FORMULÁRIO DE CONTATO GERAL
function enviarParaWhatsApp(event) {
    event.preventDefault(); // Impede o formulário de recarregar a página

    const nome = document.getElementById('nome').value;
    const comoConheceu = document.getElementById('comoConheceu').value;
    const telefone = document.getElementById('telefone').value;
    
    // Puxa o número lá do seu config.js
    const numeroClube = CONFIG.whatsappClube; 

    const mensagem = `Olá, liderança do Jovens do Rei! Meu nome é ${nome}. Meu telefone de contato é ${telefone}. Conheci o clube através de: ${comoConheceu}. Gostaria de mais informações!`;
    const mensagemCodificada = encodeURIComponent(mensagem);

    const url = `https://wa.me/${numeroClube}?text=${mensagemCodificada}`;
    window.open(url, '_blank');
}

// 3. CONTATO DIRETO COM A EQUIPE
function contatoMembro(cargo) {
    event.preventDefault();
    
    const mensagem = `Olá! Gostaria de falar com o(a) ${cargo} do Clube Jovens do Rei.`;
    const mensagemCodificada = encodeURIComponent(mensagem);
    
    // Puxa o número lá do seu config.js
    const url = `https://wa.me/${CONFIG.whatsappClube}?text=${mensagemCodificada}`;
    window.open(url, '_blank');
}

// 4. ABRIR GALERIA DO GOOGLE DRIVE
function abrirDriveGaleria() {
    // Puxa o link lá do seu config.js
    const linkDrive = CONFIG.linkDriveGaleria;
    
    if(linkDrive && linkDrive !== "https://drive.google.com/drive/folders/seu-link-aqui") {
        window.open(linkDrive, '_blank');
    } else {
        alert("O link do Drive será adicionado em breve pela liderança!");
    }
}

// 5. ABRIR INSTAGRAM
function abrirInstagram() {
    // Puxa o link lá do seu config.js
    const linkInsta = CONFIG.linkInstagram;
    
    if(linkInsta && linkInsta !== "https://instagram.com/clubejovensdorei") {
        window.open(linkInsta, '_blank');
    } else {
        alert("O link do Instagram será adicionado em breve!");
    }
}

// 6. COPIAR CHAVE PIX
function copiarPix() {
    // Puxa a chave lá do seu config.js
    const chavePix = CONFIG.chavePix;
    
    // API moderna para copiar texto para a área de transferência
    navigator.clipboard.writeText(chavePix).then(() => {
        alert("Chave PIX copiada com sucesso! Que Deus abençoe seu coração.");
    }).catch(err => {
        // Caso o navegador bloqueie a cópia
        alert("Erro ao copiar. Por favor, copie a chave manualmente: " + chavePix);
        console.error('Falha ao copiar: ', err);
    });
}