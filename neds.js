const menu = document.querySelector('.menu-toggle'); const nav = document.querySelector('nav');
menu?.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', open); });
document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
const target = new Date('2026-10-03T00:00:00+02:00'), ids = ['days','hours','minutes','seconds'];
function timer(){ const distance = target - new Date(), msg = document.querySelector('#countdown-message'); if(distance < 0){ ids.forEach(id => document.querySelector('#'+id).textContent = '—'); if(msg) msg.textContent = 'THANK YOU FOR JOINING US'; return; } const values=[Math.floor(distance/864e5),Math.floor(distance/36e5)%24,Math.floor(distance/6e4)%60,Math.floor(distance/1e3)%60]; values.forEach((value,i)=>document.querySelector('#'+ids[i]).textContent=String(value).padStart(2,'0')); if(msg && distance < 864e5) msg.textContent='SHORTS & SHADES IS HERE!'; } timer(); setInterval(timer,1000);
document.querySelector(`[data-day="${new Date().getDay()}"]`)?.classList.add('today');
