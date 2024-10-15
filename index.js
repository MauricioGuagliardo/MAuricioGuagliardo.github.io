// Ao carregar a página, anima o título principal
window.addEventListener('DOMContentLoaded', (event) => {
    const mainTitle = document.querySelector('h1');
    mainTitle.style.opacity = 0;
    setTimeout(() => {
        mainTitle.style.transition = 'opacity 2s ease-in-out';
        mainTitle.style.opacity = 1;
    }, 500);
});

// Validação do formulário ao clicar no botão de envio
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Coleta os valores do formulário
    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const medoOndas = document.querySelector('input[name="medo_ondas"]:checked');
    const desculpa = document.querySelector('#reacao').value;

    // Valida se o nome e o email foram preenchidos
    if (nome === '' || email === '') {
        alert('Por favor, preencha todos os campos obrigatórios!');
        return;
    }

    // Valida se pelo menos uma praia foi escolhida
    if (checkboxes.length === 0) {
        alert('Por favor, selecione ao menos uma praia que deseja visitar.');
        return;
    }

    // Valida se a opção de medo de ondas foi escolhida
    if (!medoOndas) {
        alert('Por favor, escolha se você tem medo de ondas grandes.');
        return;
    }

    // Se todas as validações passarem, exibe uma mensagem de sucesso
    alert('Formulário enviado com sucesso!\nNome: ' + nome + '\nEmail: ' + email + '\nMedo de ondas grandes: ' + medoOndas.value + '\nDesculpa: ' + desculpa);

    // Aqui você pode adicionar o código para enviar o formulário ao servidor
    // this.submit();
});

// Função para adicionar uma animação nas imagens da galeria ao passar o mouse por cima
const imagens = document.querySelectorAll('img');
imagens.forEach(imagem => {
    imagem.addEventListener('mouseover', () => {
        imagem.style.transform = 'scale(1.1)';
        imagem.style.transition = 'transform 0.5s ease';
    });
    imagem.addEventListener('mouseout', () => {
        imagem.style.transform = 'scale(1)';
    });
});

// Função para mudar a cor do cabeçalho ao rolar a página
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('bg-dark');
        header.classList.remove('bg-primary');
    } else {
        header.classList.add('bg-primary');
        header.classList.remove('bg-dark');
    }
});
