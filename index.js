
window.addEventListener('DOMContentLoaded', (event) => {
    const mainTitle = document.querySelector('h1');
    mainTitle.style.opacity = 0;
    setTimeout(() => {
        mainTitle.style.transition = 'opacity 2s ease-in-out';
        mainTitle.style.opacity = 1;
    }, 500);
});


document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    
    const nome = document.querySelector('#nome').value;
    const email = document.querySelector('#email').value;
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const medoOndas = document.querySelector('input[name="medo_ondas"]:checked');
    const desculpa = document.querySelector('#reacao').value;

 
    if (nome === '' || email === '') {
        alert('Por favor, preencha todos os campos obrigatórios!');
        return;
    }

  
    if (checkboxes.length === 0) {
        alert('Por favor, selecione ao menos uma praia que deseja visitar.');
        return;
    }

   
    if (!medoOndas) {
        alert('Por favor, escolha se você tem medo de ondas grandes.');
        return;
    }

    
    alert('Formulário enviado com sucesso!\nNome: ' + nome + '\nEmail: ' + email + '\nMedo de ondas grandes: ' + medoOndas.value + '\nDesculpa: ' + desculpa);

    
    
});


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
