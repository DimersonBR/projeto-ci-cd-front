const BTN = document.getElementById('btn');
const OUT = document.getElementById('saida');

// URL do backend no Render:
const API_URL = 'https://projeto-ci-cd-back-oywq.onrender.com/';

BTN.addEventListener('click', async () => {
  OUT.innerText = 'Carregando...';
  try {
    const r = await fetch(API_URL);
    if (!r.ok) throw new Error('Resposta não OK: ' + r.status);
    const json = await r.json();
    OUT.innerText = JSON.stringify(json, null, 2);
  } catch (err) {
    OUT.innerText = 'Erro: ' + err.message;
  }
});
