# 🏕️ Clube de Desbravadores Jovens do Rei - Website Oficial

## 📖 Sobre o Projeto
Este é o repositório oficial do website do **Clube de Desbravadores Jovens do Rei**. O objetivo deste site é ser a principal vitrine digital do clube, apresentando nossa história, cronograma de atividades, eventos, e servindo como um canal de comunicação direto com pais, membros e apoiadores.

Para garantir um design profissional, leve e otimizado, a arquitetura do site foi dividida em múltiplas páginas (Multi-page website), evitando a sobrecarga de informações em uma única tela.

---

## 🗺️ Mapa do Site e Estrutura de Páginas

O site está dividido nas seguintes páginas principais:

### 1. 🏠 Início (Home)
Atua como um painel de resumo para visitantes rápidos.
* **O que é o clube:** Visão geral global e regional do Ministério dos Desbravadores.
* **Nossas atividades:** Resumo do cronograma semanal (reuniões regulares).
* **Próximos eventos:** Destaques dos próximos camporis, acampamentos e saídas.

### 2. 👥 Sobre Nós
Apresenta a identidade e o coração do clube.
* **História:** A trajetória do clube Jovens do Rei.
* **Missão e Valores:** Nossos princípios e método de trabalho.
* **Nossa Equipe:** Cards interativos com a hierarquia da diretoria (Diretor, Vices, Secretário). Inclui foto, breve descrição da função e botão de contato via WhatsApp.
* **Objetivos:** Foco no desenvolvimento cívico/cidadão das crianças e metas de infraestrutura (aquisição de materiais, barracas).
* **Parcerias:** Espaço dedicado à campanha do mês e captação de recursos.

### 3. 🧗 Nossas Atividades
Portfólio das ações práticas do clube.
* **Projetos Comunitários:** Ações sociais e voluntariado.
* **Atividades Educativas:** Palestras e intercâmbio com escolas/outros clubes.
* **Atividades Práticas:** Visitas a órgãos públicos/privados e acampamentos.
* **Liderança:** Destaque para as crianças assumindo papéis de liderança (instruções, oratória).

### 4. 📸 Galeria
* **Amostra visual:** Carrossel/Grid com as melhores fotos recentes.
* **Acervo Completo (Otimização):** Link externo redirecionando para nosso Google Drive oficial, garantindo que o site permaneça leve e com carregamento rápido.

### 5. 📅 Eventos
* **Calendário Interativo:** Interface de calendário onde dias com atividades são clicáveis. Mostra o histórico do que já foi feito e a agenda do que está por vir.

### 6. 📞 Contato
* **Formulário Rápido:** Captação de Nome, WhatsApp (DDD + Número) e "Como nos conheceu?". Integrado à API do WhatsApp para envio direto de mensagens para a diretoria.
* **Localização:** Mapa integrado mostrando a sede do clube.
* **Redes Sociais:** Link direto para o Instagram do clube.

### 7. 🤝 Apoio
* **Doações:** Chave PIX do clube e orientações para doação.
* **Depoimentos:** Relatos de padrinhos e apoiadores financeiros sobre o impacto do clube na vida das crianças.

---

## ⚙️ Principais Funcionalidades e Integrações

* **Integração WhatsApp API:** O formulário de contato não usa um backend complexo de e-mail; ele formata a mensagem e redireciona o usuário para o WhatsApp Web/App direto para o número do Diretor/Secretaria.
* **Media Hosting Externo:** O uso do Google Drive para a galeria pesada economiza banda e custos de servidor.
* **Componente de Calendário:** Lógica em JavaScript para renderizar meses, dias e filtrar eventos ativos (passados e futuros).

---

## 🛠️ Tecnologias Utilizadas (Sugestão)
* **Frontend:** HTML5, CSS3, JavaScript (Vanilla ou framework como React/Vue/Astro).
* **Estilização:** Tailwind CSS ou Bootstrap (para responsividade e cards da equipe).
* **Ícones:** FontAwesome / Phosphor Icons.
* **Mapas:** Google Maps Embed API.

---

## 🚀 Como rodar o projeto localmente

1. Clone o repositório:
   ```bash
   git clone [https://github.com/seu-usuario/site-jovens-do-rei.git](https://github.com/seu-usuario/site-jovens-do-rei.git)
