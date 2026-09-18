const STREAM_URL='http://eu8.fastcast4u.com:2682/;stream.mp3';
const STREAM_PROXY='https://eu8.fastcast4u.com/stream/gigamarvi/stream.pls';

const DEFAULT={}; const shows=[['06:00 – 09:00','Good Morning SugarTribe','Marco & Giulia','MUSICA & ENERGIA'],['09:00 – 11:00','The Breakfast Show','Luca B.','HITS & NEWS'],['11:00 – 13:00','Feel Good Vibes','Sara','POP & DANCE'],['13:00 – 15:00','Urban Tribe','Alex','HIP HOP & R&B'],['15:00 – 17:00','Music Evolution','Martina','HOUSE & EDM'],['17:00 – 19:00','Sunset Vibes','Fabio','CHILL & LOUNGE'],['19:00 – 21:00','Rock Tribe','Diego','ROCK CLASSICS'],['21:00 – 23:00','Night Vibes','Claudia','ELECTRONIC'],['23:00 – 01:00','Deep House Journey','Stefano','DEEP HOUSE'],['01:00 – 06:00','Notte SugarTribe','Max','ELECTRONIC & CHILL']];['LUNEDÌ','MARTEDÌ','MERCOLEDÌ','GIOVEDÌ','VENERDÌ','SABATO','DOMENICA'].forEach(d=>DEFAULT[d]=shows.map(x=>[...x]));
let schedule=JSON.parse(localStorage.getItem('sugarTribeScheduleV7')||'null')||DEFAULT; let selected=today();
const $=id=>document.getElementById(id); function today(){return ['DOMENICA','LUNEDÌ','MARTEDÌ','MERCOLEDÌ','GIOVEDÌ','VENERDÌ','SABATO'][new Date().getDay()]};
function renderDays(){const box=$('days');box.innerHTML='';Object.keys(schedule).forEach(d=>{let b=document.createElement('button');b.className='day '+(d===selected?'active':'');b.textContent=d;b.onclick=()=>{selected=d;renderDays();renderRows()};box.appendChild(b)})}
function mins(s){let p=s.split(':').map(Number);return p[0]*60+p[1]};function onair(s){let m=s[0].match(/(\d\d?:\d\d).*?(\d\d?:\d\d)/);if(!m)return false;let a=mins(m[1]),b=mins(m[2]),n=new Date(),c=n.getHours()*60+n.getMinutes();return b>a?c>=a&&c<b:c>=a||c<b}
function renderRows(){let box=$('rows');box.innerHTML='';let cur=today(),arr=schedule[selected]||[];arr.forEach((s,i)=>{let live=selected===cur&&onair(s);let r=document.createElement('div');r.className='row'+(live?' live':'');r.innerHTML='<div class="time">'+s[0]+'</div><div class="prog">'+s[1]+'<small>Con '+s[2]+'</small></div><div class="genre">'+s[3]+'</div>'+(live?'<div class="badge">IN ONDA</div>':'');box.appendChild(r)})}
function clock(){let d=new Date();$('clock').textContent=d.toLocaleTimeString('it-IT',{hour12:false});$('date').textContent=d.toLocaleDateString('it-IT',{weekday:'long',day:'2-digit',month:'long',year:'numeric'}).toUpperCase();if(selected!==today()){selected=today();renderDays()}renderRows()}setInterval(clock,1000);clock();
function bars(id,n){const box=$(id);if(!box)return;for(let i=0;i<n;i++){let e=document.createElement('i');e.style.height=(4+Math.random()*30)+'px';e.style.animationDelay=(-Math.random())+'s';box.appendChild(e)}}bars('wave',55);
const radio=$('radio'),status=$('status');
radio.src=STREAM_URL;radio.volume=.75;
async function start(){
  status.textContent='CONNESSIONE...';
  try{
    if(!radio.src) radio.src=STREAM_URL;
    await radio.play();
    status.textContent='LIVE';
  }catch(e){
    status.textContent='ERRORE STREAM — PROVA A RIAPRIRE IL FILE';
    console.error('SUGAR TRIBE STREAM ERROR',e);
  }
}
$('play').onclick=()=>{if(radio.paused) start(); else radio.pause()};
$('pause').onclick=()=>radio.pause();
$('reload').onclick=()=>{radio.pause();radio.src=STREAM_URL+'?nocache='+Date.now();radio.load();start()};
$('volume').oninput=e=>{radio.volume=+e.target.value;$('vol').textContent=Math.round(radio.volume*100)+'%'};
radio.onplaying=()=>status.textContent='LIVE';
radio.onpause=()=>{if(!radio.ended)status.textContent='PAUSA'};
radio.onerror=()=>status.textContent='ERRORE STREAM — IL SERVER NON ACCETTA IL COLLEGAMENTO';
// Metadata opzionale: se il server abilita CORS, aggiorna il titolo; il player non dipende da questa funzione.
async function metadata(){for(const u of ['https://eu8.fastcast4u.com/status-json.xsl','https://eu8.fastcast4u.com/stats?sid=1&json=1'])try{let r=await fetch(u,{cache:'no-store'});if(!r.ok)continue;let d=await r.json();let s=d?.icestats?.source||d?.source;if(Array.isArray(s))s=s[0];let t=s?.title||s?.songtitle||s?.current_song;if(t){let p=t.split(/\s+-\s+/);let a=p.length>1?p[0]:'Sugar Tribe Radio',song=p.length>1?p.slice(1).join(' - '):t;['song','sideSong'].forEach(id=>{if($(id))$(id).textContent=song});['artist','sideArtist'].forEach(id=>{if($(id))$(id).textContent=a});return}}catch(e){}}metadata();setInterval(metadata,15000);
$('toggleSchedule').onclick=()=>{let b=$('scheduleBox'),hide=b.style.display==='none';b.style.display=hide?'block':'none';$('toggleSchedule').textContent=hide?'NASCONDI':'MOSTRA PALINSESTO'};
$('menu').onclick=()=>$('header').classList.toggle('open');document.querySelectorAll('.nav a').forEach(a=>a.onclick=()=>{ $('header').classList.remove('open') });
// Admin locale
const modal=$('modal');$('admin').onclick=()=>modal.hidden=false;$('close').onclick=()=>modal.hidden=true;$('loginBtn').onclick=()=>{if($('pwd').value==='SugarTribe2026'){$('login').hidden=true;$('editor').hidden=false;setupAdmin()}else $('err').textContent='Password non corretta'};function setupAdmin(){let s=$('adminDay');s.innerHTML='';Object.keys(schedule).forEach(d=>{let o=document.createElement('option');o.value=d;o.textContent=d;s.appendChild(o)});s.value=selected;renderEditor()}function renderEditor(){let b=$('editorList');b.innerHTML='';(schedule[$('adminDay').value]||[]).forEach(addEditor)}function addEditor(s=['06:00 – 08:00','Nuovo programma','','MUSICA']){let r=document.createElement('div');r.className='adminrow';['ORARIO','PROGRAMMA','SPEAKER','GENERE'].forEach((l,i)=>{let x=document.createElement('label');x.innerHTML=l+'<input data-i="'+i+'" value="'+String(s[i]||'').replaceAll('"','&quot;')+'">';r.appendChild(x)});let q=document.createElement('button');q.textContent='×';q.onclick=()=>r.remove();r.appendChild(q);$('editorList').appendChild(r)}$('adminDay').onchange=renderEditor;$('add').onclick=()=>addEditor();$('save').onclick=()=>{let d=$('adminDay').value;schedule[d]=[...document.querySelectorAll('.adminrow')].map(r=>[0,1,2,3].map(i=>r.querySelector('[data-i="'+i+'"]').value));localStorage.setItem('sugarTribeScheduleV7',JSON.stringify(schedule));selected=d;renderDays();renderRows();alert('Palinsesto salvato')};renderDays();renderRows();
