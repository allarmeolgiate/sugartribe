/* =========================================================
   SUGAR TRIBE RADIO
   Palinsesto modificabile dal pannello grafico.
   Le modifiche vengono salvate in localStorage.
   ========================================================= */

const DEFAULT_SCHEDULE = {
  "LUNEDÌ":[
    ["06:00 – 09:00","Good Morning SugarTribe","Marco & Giulia","MUSICA & ENERGIA"],
    ["09:00 – 11:00","The Breakfast Show","Luca B.","HITS & NEWS"],
    ["11:00 – 13:00","Feel Good Vibes","Sara","POP & DANCE"],
    ["13:00 – 15:00","Urban Tribe","Alex","HIP HOP & R&B"],
    ["15:00 – 17:00","Music Evolution","Martina","HOUSE & EDM"],
    ["17:00 – 19:00","Sunset Vibes","Fabio","CHILL & LOUNGE"],
    ["19:00 – 21:00","Rock Tribe","Diego","ROCK CLASSICS"],
    ["21:00 – 23:00","Night Vibes","Claudia","ELECTRONIC"],
    ["23:00 – 01:00","Deep House Journey","Stefano","DEEP HOUSE"],
    ["01:00 – 06:00","Notte SugarTribe","Max","ELECTRONIC & CHILL"]
  ],
  "MARTEDÌ":[
    ["06:00 – 09:00","Good Morning SugarTribe","Marco & Giulia","MUSICA & ENERGIA"],
    ["09:00 – 11:00","The Breakfast Show","Luca B.","HITS & NEWS"],
    ["11:00 – 13:00","Feel Good Vibes","Sara","POP & DANCE"],
    ["13:00 – 15:00","Urban Tribe","Alex","HIP HOP & R&B"],
    ["15:00 – 17:00","Music Evolution","Martina","HOUSE & EDM"],
    ["17:00 – 19:00","Sunset Vibes","Fabio","CHILL & LOUNGE"],
    ["19:00 – 21:00","Rock Tribe","Diego","ROCK CLASSICS"],
    ["21:00 – 23:00","Night Vibes","Claudia","ELECTRONIC"],
    ["23:00 – 01:00","Deep House Journey","Stefano","DEEP HOUSE"],
    ["01:00 – 06:00","Notte SugarTribe","Max","ELECTRONIC & CHILL"]
  ],
  "MERCOLEDÌ":[
    ["06:00 – 09:00","Good Morning SugarTribe","Marco & Giulia","MUSICA & ENERGIA"],
    ["09:00 – 11:00","The Breakfast Show","Luca B.","HITS & NEWS"],
    ["11:00 – 13:00","Feel Good Vibes","Sara","POP & DANCE"],
    ["13:00 – 15:00","Urban Tribe","Alex","HIP HOP & R&B"],
    ["15:00 – 17:00","Music Evolution","Martina","HOUSE & EDM"],
    ["17:00 – 19:00","Sunset Vibes","Fabio","CHILL & LOUNGE"],
    ["19:00 – 21:00","Rock Tribe","Diego","ROCK CLASSICS"],
    ["21:00 – 23:00","Night Vibes","Claudia","ELECTRONIC"],
    ["23:00 – 01:00","Deep House Journey","Stefano","DEEP HOUSE"],
    ["01:00 – 06:00","Notte SugarTribe","Max","ELECTRONIC & CHILL"]
  ],
  "GIOVEDÌ":[
    ["06:00 – 09:00","Good Morning SugarTribe","Marco & Giulia","MUSICA & ENERGIA"],
    ["09:00 – 11:00","The Breakfast Show","Luca B.","HITS & NEWS"],
    ["11:00 – 13:00","Feel Good Vibes","Sara","POP & DANCE"],
    ["13:00 – 15:00","Urban Tribe","Alex","HIP HOP & R&B"],
    ["15:00 – 17:00","Music Evolution","Martina","HOUSE & EDM"],
    ["17:00 – 19:00","Sunset Vibes","Fabio","CHILL & LOUNGE"],
    ["19:00 – 21:00","Rock Tribe","Diego","ROCK CLASSICS"],
    ["21:00 – 23:00","Night Vibes","Claudia","ELECTRONIC"],
    ["23:00 – 01:00","Deep House Journey","Stefano","DEEP HOUSE"],
    ["01:00 – 06:00","Notte SugarTribe","Max","ELECTRONIC & CHILL"]
  ],
  "VENERDÌ":[
    ["06:00 – 09:00","Good Morning SugarTribe","Marco & Giulia","MUSICA & ENERGIA"],
    ["09:00 – 11:00","The Breakfast Show","Luca B.","HITS & NEWS"],
    ["11:00 – 13:00","Feel Good Vibes","Sara","POP & DANCE"],
    ["13:00 – 15:00","Urban Tribe","Alex","HIP HOP & R&B"],
    ["15:00 – 17:00","Music Evolution","Martina","HOUSE & EDM"],
    ["17:00 – 19:00","Sunset Vibes","Fabio","CHILL & LOUNGE"],
    ["19:00 – 21:00","Rock Tribe","Diego","ROCK CLASSICS"],
    ["21:00 – 23:00","Night Vibes","Claudia","ELECTRONIC"],
    ["23:00 – 01:00","Deep House Journey","Stefano","DEEP HOUSE"],
    ["01:00 – 06:00","Notte SugarTribe","Max","ELECTRONIC & CHILL"]
  ],
  "SABATO":[
    ["06:00 – 09:00","Good Morning SugarTribe","Marco & Giulia","MUSICA & ENERGIA"],
    ["09:00 – 11:00","The Breakfast Show","Luca B.","HITS & NEWS"],
    ["11:00 – 13:00","Feel Good Vibes","Sara","POP & DANCE"],
    ["13:00 – 15:00","Urban Tribe","Alex","HIP HOP & R&B"],
    ["15:00 – 17:00","Music Evolution","Martina","HOUSE & EDM"],
    ["17:00 – 19:00","Sunset Vibes","Fabio","CHILL & LOUNGE"],
    ["19:00 – 21:00","Rock Tribe","Diego","ROCK CLASSICS"],
    ["21:00 – 23:00","Night Vibes","Claudia","ELECTRONIC"],
    ["23:00 – 01:00","Deep House Journey","Stefano","DEEP HOUSE"],
    ["01:00 – 06:00","Notte SugarTribe","Max","ELECTRONIC & CHILL"]
  ],
  "DOMENICA":[
    ["06:00 – 09:00","Good Morning SugarTribe","Marco & Giulia","MUSICA & ENERGIA"],
    ["09:00 – 11:00","The Breakfast Show","Luca B.","HITS & NEWS"],
    ["11:00 – 13:00","Feel Good Vibes","Sara","POP & DANCE"],
    ["13:00 – 15:00","Urban Tribe","Alex","HIP HOP & R&B"],
    ["15:00 – 17:00","Music Evolution","Martina","HOUSE & EDM"],
    ["17:00 – 19:00","Sunset Vibes","Fabio","CHILL & LOUNGE"],
    ["19:00 – 21:00","Rock Tribe","Diego","ROCK CLASSICS"],
    ["21:00 – 23:00","Night Vibes","Claudia","ELECTRONIC"],
    ["23:00 – 01:00","Deep House Journey","Stefano","DEEP HOUSE"],
    ["01:00 – 06:00","Notte SugarTribe","Max","ELECTRONIC & CHILL"]
  ]
};

const STORAGE_KEY = "sugarTribeScheduleFinalV3";
const ADMIN_PASSWORD = "SugarTribe2026"; // CAMBIA QUI LA PASSWORD PRIMA DI PUBBLICARE

let schedule = loadSchedule();
let days = Object.keys(schedule);
let selectedDay = getTodayName();

function clone(x){return JSON.parse(JSON.stringify(x))}
function loadSchedule(){
  try{
    const saved=JSON.parse(localStorage.getItem(STORAGE_KEY));
    if(saved && typeof saved==="object" && Object.keys(saved).length) return saved;
  }catch(e){}
  return clone(DEFAULT_SCHEDULE);
}
function saveSchedule(){localStorage.setItem(STORAGE_KEY,JSON.stringify(schedule))}
function getTodayName(){
  return ["DOMENICA","LUNEDÌ","MARTEDÌ","MERCOLEDÌ","GIOVEDÌ","VENERDÌ","SABATO"][new Date().getDay()];
}
function esc(v){
  return String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
}
function attr(v){return esc(v).replace(/`/g,"&#096;")}

/* ---------- OROLOGIO DIGITALE ---------- */
function updateClock(){
  const d=new Date();
  document.getElementById("clock").textContent=d.toLocaleTimeString("it-IT",{hour12:false});
  document.getElementById("date").textContent=d.toLocaleDateString("it-IT",{
    weekday:"long",day:"2-digit",month:"long",year:"numeric"
  }).toUpperCase();
  if(selectedDay===getTodayName()) renderSchedule();
  else document.getElementById("todayName").textContent=getTodayName();
}
updateClock();
setInterval(updateClock,1000);

/* ---------- PALINSESTO: GIORNO E PROGRAMMA REALMENTE IN ONDA ---------- */
function minutes(hm){
  const p=hm.split(":").map(Number);
  return p[0]*60+p[1];
}
function parseRange(text){
  const m=String(text).match(/(\d{1,2}:\d{2}).*?(\d{1,2}:\d{2})/);
  return m ? [minutes(m[1]),minutes(m[2])] : null;
}
function isShowOnAir(show){
  const r=parseRange(show[0]); if(!r) return false;
  const now=new Date(), cur=now.getHours()*60+now.getMinutes();
  let [start,end]=r;
  if(start===end) return true;
  if(end>start) return cur>=start && cur<end;
  return cur>=start || cur<end; // fascia che passa la mezzanotte
}
function currentShowIndex(day){
  const arr=schedule[day]||[];
  const i=arr.findIndex(isShowOnAir);
  return i;
}

const dayBox=document.getElementById("days");
const list=document.getElementById("schedule");

function renderDays(){
  dayBox.innerHTML="";
  days.forEach(day=>{
    const b=document.createElement("button");
    b.className="day"+(day===selectedDay?" active":"");
    b.textContent=day;
    b.onclick=()=>{selectedDay=day;renderDays();renderSchedule()};
    dayBox.appendChild(b);
  });
}
function renderSchedule(){
  const today=getTodayName();
  document.getElementById("todayName").textContent=today;
  list.innerHTML="";
  (schedule[selectedDay]||[]).forEach((show,index)=>{
    const onAir=selectedDay===today && index===currentShowIndex(selectedDay);
    const row=document.createElement("div");
    row.className="row"+(onAir?" live":"");
    row.innerHTML=`
      <div class="time">${esc(show[0])}</div>
      <div class="prog">${esc(show[1])}<small>Con ${esc(show[2])}</small></div>
      <div class="genre">${esc(show[3])}</div>
      ${onAir?'<div class="badge">IN ONDA</div>':''}
    `;
    list.appendChild(row);
  });
}

/* ---------- PLAYER ---------- */
const radio=document.getElementById("radio");
const play=document.getElementById("play");
const pause=document.getElementById("pause");
const reload=document.getElementById("reload");
const status=document.getElementById("status");
const volume=document.getElementById("volume");
const vol=document.getElementById("vol");

radio.src="https://eu8.fastcast4u.com/proxy/gigamarvi?mp=/1";
radio.volume=.75;

function start(){
  radio.play().then(()=>{
    play.textContent="❚❚";
    status.textContent="LIVE";
  }).catch(()=>status.textContent="STREAM ERROR");
}
play.onclick=()=>radio.paused?start():radio.pause();
pause.onclick=()=>radio.pause();
reload.onclick=()=>{radio.load();start()};
radio.onplaying=()=>{status.textContent="LIVE";play.textContent="❚❚"};
radio.onpause=()=>{status.textContent="PAUSED";play.textContent="▶"};
radio.onerror=()=>status.textContent="ERROR";
volume.oninput=()=>{radio.volume=+volume.value;vol.textContent=Math.round(radio.volume*100)+"%"};

/* ---------- VISUALIZER ---------- */
function bars(id,n,max){
  const box=document.getElementById(id);
  for(let i=0;i<n;i++){
    const b=document.createElement("i");
    b.style.height=(4+Math.random()*max)+"px";
    b.style.animationDelay=(-Math.random()*.6)+"s";
    box.appendChild(b);
  }
}
bars("eq",28,28);
bars("wave",62,40);

/* ---------- TRACCIA IN ONDA ----------
   Tenta più endpoint comuni. Se il server non espone metadata/CORS,
   il player continua a funzionare e resta il testo di fallback. */
function setTrack(title){
  const raw=String(title||"").replace(/\s+/g," ").trim();
  if(!raw)return;
  const parts=raw.split(/\s+-\s+/);
  const artist=parts.length>1?parts[0]:"Sugar Tribe Radio";
  const song=parts.length>1?parts.slice(1).join(" - "):raw;
  document.getElementById("circleSong").textContent=song;
  document.getElementById("circleArtist").textContent=artist;
  document.getElementById("song").textContent=song;
  document.getElementById("artist").textContent=artist;
  document.getElementById("sideSong").textContent=song;
  document.getElementById("sideArtist").textContent=artist;
}
async function tryJSON(url){
  const r=await fetch(url,{cache:"no-store"});
  if(!r.ok)throw new Error();
  return await r.json();
}
async function updateNowPlaying(){
  const endpoints=[
    "https://eu8.fastcast4u.com/status-json.xsl",
    "https://eu8.fastcast4u.com/stats?sid=1&json=1"
  ];
  for(const url of endpoints){
    try{
      const data=await tryJSON(url);
      const source=data?.icestats?.source || data?.source;
      const src=Array.isArray(source)?source[0]:source;
      const title=src?.title || src?.songtitle || data?.title || data?.songtitle;
      if(title){setTrack(title);return;}
    }catch(e){}
  }
}
updateNowPlaying();
setInterval(updateNowPlaying,15000);

/* ---------- ADMIN PRIVATO ---------- */
const backdrop=document.getElementById("adminBackdrop");
const loginBox=document.getElementById("loginBox");
const editorBox=document.getElementById("editorBox");
const adminPassword=document.getElementById("adminPassword");
const loginError=document.getElementById("loginError");
const adminDay=document.getElementById("adminDay");
const editorList=document.getElementById("editorList");

document.getElementById("adminTrigger").onclick=()=>{
  backdrop.hidden=false;
  loginBox.hidden=false;
  editorBox.hidden=true;
  adminPassword.value="";
  loginError.textContent="";
};
document.getElementById("closeAdmin").onclick=()=>{backdrop.hidden=true};
backdrop.addEventListener("click",e=>{if(e.target===backdrop)backdrop.hidden=true});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!backdrop.hidden)backdrop.hidden=true});
document.getElementById("loginBtn").onclick=login;
adminPassword.onkeydown=e=>{if(e.key==="Enter")login()};

function login(){
  if(adminPassword.value===ADMIN_PASSWORD){
    loginBox.hidden=true;editorBox.hidden=false;setupAdmin();
  }else loginError.textContent="Password non corretta.";
}
function setupAdmin(){
  adminDay.innerHTML="";
  days.forEach(d=>{
    const o=document.createElement("option");o.value=d;o.textContent=d;adminDay.appendChild(o);
  });
  adminDay.value=selectedDay;renderEditor();
}
adminDay.onchange=renderEditor;

function renderEditor(){
  editorList.innerHTML="";
  (schedule[adminDay.value]||[]).forEach(s=>addEditor(s));
}
function addEditor(s=["06:00 – 08:00","Nuovo programma","","MUSICA"]){
  const row=document.createElement("div");
  row.className="editor-row";
  row.innerHTML=`
    <label>ORARIO<input data-f="0" value="${attr(s[0])}"></label>
    <label>PROGRAMMA<input data-f="1" value="${attr(s[1])}"></label>
    <label>SPEAKER<input data-f="2" value="${attr(s[2])}"></label>
    <label>GENERE<input data-f="3" value="${attr(s[3])}"></label>
    <button class="remove">×</button>`;
  row.querySelector(".remove").onclick=()=>row.remove();
  editorList.appendChild(row);
}
document.getElementById("addShow").onclick=()=>addEditor();

document.getElementById("saveDay").onclick=()=>{
  const day=adminDay.value;
  schedule[day]=[...document.querySelectorAll(".editor-row")].map(r=>[0,1,2,3].map(i=>r.querySelector(`[data-f="${i}"]`).value.trim()));
  saveSchedule();
  selectedDay=day;
  renderDays();renderSchedule();
  alert("Palinsesto salvato.");
};
document.getElementById("resetDay").onclick=()=>{
  const day=adminDay.value;
  if(confirm("Ripristinare questa giornata?")){
    schedule[day]=clone(DEFAULT_SCHEDULE[day]||[]);
    saveSchedule();renderEditor();renderSchedule();
  }
};
document.getElementById("exportData").onclick=()=>{
  const a=document.createElement("a");
  const u=URL.createObjectURL(new Blob([JSON.stringify(schedule,null,2)],{type:"application/json"}));
  a.href=u;a.download="sugar-tribe-palinsesto.json";a.click();URL.revokeObjectURL(u);
};
document.getElementById("importData").onchange=e=>{
  const file=e.target.files[0];if(!file)return;
  const r=new FileReader();
  r.onload=()=>{
    try{
      const imported=JSON.parse(r.result);
      if(!imported||typeof imported!=="object")throw new Error();
      schedule=imported;days=Object.keys(schedule);persistImported();
      setupAdmin();renderDays();renderSchedule();alert("Palinsesto importato.");
    }catch(x){alert("File JSON non valido.")}
  };
  r.readAsText(file);
};
function persistImported(){localStorage.setItem(STORAGE_KEY,JSON.stringify(schedule))}

/* ---------- MENU SMARTPHONE ---------- */
document.getElementById("menuToggle").onclick=()=>document.querySelector(".header").classList.toggle("nav-open");
document.querySelectorAll(".header nav a").forEach(a=>a.onclick=()=>document.querySelector(".header").classList.remove("nav-open"));

renderDays();
renderSchedule();
