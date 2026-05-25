const d = new Date();
document.getElementById('year').textContent = d.getFullYear();

const apiURL = 'https://cors-anywhere.bringfeel.com.ar/https://api.bringfeel.com.ar/chitopanbot/getStatus?startDate=2024-01-16%2013:01:01&dataPoints=2';
fetch(apiURL, {
  method: 'GET',
  headers: { 'Content-Type': 'application/json', 'Origin': 'https://bringfeel.com.ar/' }
}).then(r => r.json()).then(data => {
  document.getElementById('servers-chitopanbot').textContent = data.charts.serverCount.data[1];
}).catch(() => {
  document.getElementById('servers-chitopanbot').textContent = '???';
});

// Diagram expand modal
const expandBtn = document.getElementById('infra-diagram-expand');
const modal = document.getElementById('infra-modal');
const closeBtns = ['infra-modal-close', 'infra-modal-close-btn'];
if (expandBtn && modal) {
  expandBtn.addEventListener('click', () => modal.classList.add('open'));
  closeBtns.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', () => modal.classList.remove('open'));
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('open')) modal.classList.remove('open');
  });
}

