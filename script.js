// NÃO MEXA NESTE ARQUIVO SEM AUTORIZAÇÃO

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
function enviarParaWhatsApp(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const comoConheceu = document.getElementById('comoConheceu').value;
    const telefone = document.getElementById('telefone').value;
    const numeroClube = CONFIG.whatsappClube; 
    const mensagem = `Olá, liderança do Jovens do Rei! Meu nome é ${nome}. Meu telefone de contato é ${telefone}. Conheci o clube através de: ${comoConheceu}. Gostaria de mais informações!`;
    const mensagemCodificada = encodeURIComponent(mensagem);
    const url = `https://wa.me/${numeroClube}?text=${mensagemCodificada}`;
    window.open(url, '_blank');
}
function contatoMembro(cargo) {
    event.preventDefault();
    
    const mensagem = `Olá! Gostaria de falar com o(a) ${cargo} do Clube Jovens do Rei.`;
    const mensagemCodificada = encodeURIComponent(mensagem);
    const url = `https://wa.me/${CONFIG.whatsappClube}?text=${mensagemCodificada}`;
    window.open(url, '_blank');
}
function abrirDriveGaleria() {
    const linkDrive = CONFIG.linkDriveGaleria;
    
    if(linkDrive && linkDrive !== "https://drive.google.com/drive/folders/seu-link-aqui") {
        window.open(linkDrive, '_blank');
    } else {
        alert("O link do Drive será adicionado em breve pela liderança!");
    }
}
function abrirInstagram() {
    const linkInsta = CONFIG.linkInstagram;
    
    if(linkInsta && linkInsta !== "https://instagram.com/clubejovensdorei") {
        window.open(linkInsta, '_blank');
    } else {
        alert("O link do Instagram será adicionado em breve!");
    }
}
function copiarPix() {
    const chavePix = CONFIG.chavePix;
    navigator.clipboard.writeText(chavePix).then(() => {
        alert("Chave PIX copiada com sucesso! Que Deus abençoe seu coração.");
    }).catch(err => {
        alert("Erro ao copiar. Por favor, copie a chave manualmente: " + chavePix);
        console.error('Falha ao copiar: ', err);
    });
}