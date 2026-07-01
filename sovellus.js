
const q = (s)=>document.querySelector(s);
function go(url){ window.location.href=url; }
function saveTrip(){
  const name = q('#tripName')?.value || 'Uusi matka';
  localStorage.setItem('ms_last_trip', name);
  alert('Matka tallennettu luonnokseksi: ' + name);
}
function toggleVisited(el){
  el.classList.toggle('done');
}
