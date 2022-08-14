const divInstall = document.getElementById('installContainer');
const butInstall = document.getElementById('butInstall');

/* Only register a service worker if it's supported */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('https://raw.githubusercontent.com/WaltemarCarneiro/5promovie/main/service-worker.js');
}

if (window.location.protocol === 'http:') {
  const requireHTTPS = document.getElementById('requireHTTPS');
  const link = requireHTTPS.querySelector('a');
  link.href = window.location.href.replace('http://', 'https://');
  requireHTTPS.classList.remove('hidden');
}
