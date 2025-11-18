const BTN = document.getElementById('btn');
const OUT = document.getElementById('saida');

// Detecta automaticamente se está local ou em produção
const isLocal = window.location.hostname === 'localhost' || 
                window.location.hostname === '127.0.0.1';

const API_URL = isLocal 
    ? 'http://localhost:5500/' 
    : 'https://projeto-ci-cd-back-oywq.onrender.com/';

BTN.addEventListener('click', async () => {
    OUT.innerText = 'Carregando...';
    
    try {
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error(`Erro ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        OUT.innerText = JSON.stringify(data, null, 2);
        
    } catch (error) {
        OUT.innerText = `Erro: ${error.message}\n\nTentando conectar em: ${API_URL}`;
        console.error('Erro detalhado:', error);
    }
});

// Log para debug
console.log(`🌍 Ambiente: ${isLocal ? 'Local' : 'Produção'}`);
console.log(`🔗 Conectando em: ${API_URL}`);