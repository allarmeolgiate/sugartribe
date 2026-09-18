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

const STORAGE_KEY = "sugarTribeScheduleV2";
let schedule = loadSchedule();
let selectedDay = Object.keys(schedule)[0];

function clone(obj){ return JSON.parse(JSON.stringify(obj)); }
function loadSchedule(){
  try{
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if(saved && typeof saved === "object") return saved;
  }catch(e){}
  return clone(DEFAULT_SCHEDULE);
}
function saveSchedule(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(schedule));
}

const radio = document.getElementById("radio");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const reload = document.getElementById("reload");
const status = document.getElementById("status");
const volume = document.getElementById("volume");
const vol = document.getElementById("vol");
const STREAM = "https://eu8.fastcast4u.com/proxy/gigamarvi?mp=/1";

radio.src = STREAM;
radio.volume = 0.75;

function start(){
  radio.play().then(()=>{
    play.textContent = "❚❚";
    status.textContent = "LIVE";
  }).catch(()=>status.textContent = "STREAM ERROR");
}
play.onclick = ()=> radio.paused ? start() : radio.pause();
pause.onclick = ()=> radio.pause();
reload.onclick = ()=>{ radio.load(); start(); };
radio.onplaying = ()=>{ status.textContent="LIVE"; play.textContent="❚❚"; };
radio.onpause = ()=>{ status.textContent="PAUSED"; play.textContent="▶"; };
radio.onerror = ()=> status.textContent="ERROR";
volume.oninput = ()=>{ radio.volume=+volume.value; vol.textContent=Math.round(radio.volume*100)+"%"; };

const eq = document.getElementById("eq");
for(let i=0;i<28;i++){
  const b=document.createElement("i");
  b.style.animationDelay=(-Math.random()*.65)+"s";
  eq.appendChild(b);
}
const wave=document.getElementById("wave");
for(let i=0;i<62;i++){
  const b=document.createElement("i");
  b.style.height=(5+Math.random()*40)+"px";
  b.style.animationDelay=(-Math.random()*.6)+"s";
  wave.appendChild(b);
}

const days = Object.keys(schedule);
const dayBox = document.getElementById("days");
const list = document.getElementById("schedule");

days.forEach((day,index)=>{
  const button=document.createElement("button");
  button.className="day";
  button.textContent=day;
  button.onclick=()=>render(index);
  dayBox.appendChild(button);
});

function render(dayIndex){
  const day = days[dayIndex];
  selectedDay = day;
  document.querySelectorAll(".day").forEach((b,i)=>b.classList.toggle("active",i===dayIndex));
  list.innerHTML="";
  (schedule[day]||[]).forEach((show,index)=>{
    const row=document.createElement("div");
    row.className="row"+(index===0 && dayIndex===0?" live":"");
    row.innerHTML=`
      <div class="time">${escapeHtml(show[0])}</div>
      <div class="mic">♩</div>
      <div class="prog">${escapeHtml(show[1])}<span class="host">Con ${escapeHtml(show[2])}</span></div>
      <div class="genre">${escapeHtml(show[3])}</div>
      ${index===0&&dayIndex===0?'<div class="badge">ON AIR</div>':''}
    `;
    list.appendChild(row);
  });
}

function escapeHtml(value){
  return String(value??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]));
}

const backdrop=document.getElementById("adminBackdrop");
const adminDay=document.getElementById("adminDay");
const editorList=document.getElementById("editorList");
const adminMessage=document.getElementById("adminMessage");

days.forEach(day=>{
  const opt=document.createElement("option");
  opt.value=day;opt.textContent=day;adminDay.appendChild(opt);
});
adminDay.value=selectedDay;

document.getElementById("openAdmin").onclick=()=>{
  adminDay.value=selectedDay;
  renderEditor();
  backdrop.hidden=false;
  document.body.style.overflow="hidden";
};
function closeAdmin(){
  backdrop.hidden=true;
  document.body.style.overflow="";
}
document.getElementById("closeAdmin").onclick=closeAdmin;
backdrop.addEventListener("click",e=>{if(e.target===backdrop)closeAdmin()});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!backdrop.hidden)closeAdmin()});
adminDay.onchange=renderEditor;

function renderEditor(){
  const day=adminDay.value;
  editorList.innerHTML="";
  (schedule[day]||[]).forEach((show,index)=>addEditorRow(show,index));
  if(!schedule[day] || schedule[day].length===0){
    editorList.innerHTML='<div class="admin-note">Nessun programma. Premi “AGGIUNGI PROGRAMMA”.</div>';
  }
}

function addEditorRow(show=["06:00 – 08:00","Nuovo programma","","MUSICA"],index=-1){
  const row=document.createElement("div");
  row.className="editor-row";
  row.innerHTML=`
    <label class="field"><span>ORARIO</span><input value="${escapeAttr(show[0])}" data-field="0" placeholder="06:00 – 08:00"></label>
    <label class="field"><span>PROGRAMMA</span><input value="${escapeAttr(show[1])}" data-field="1" placeholder="Nome programma"></label>
    <label class="field"><span>SPEAKER</span><input value="${escapeAttr(show[2])}" data-field="2" placeholder="Speaker"></label>
    <label class="field"><span>GENERE</span><input value="${escapeAttr(show[3])}" data-field="3" placeholder="POP & HITS"></label>
    <button class="remove-row" title="Elimina programma">×</button>
  `;
  row.querySelector(".remove-row").onclick=()=>row.remove();
  editorList.appendChild(row);
}
function escapeAttr(v){return escapeHtml(v).replace(/`/g,"&#096;")}

document.getElementById("addShow").onclick=()=>addEditorRow();

document.getElementById("saveDay").onclick=()=>{
  const rows=[...editorList.querySelectorAll(".editor-row")];
  schedule[adminDay.value]=rows.map(row=>[0,1,2,3].map(i=>row.querySelector(`[data-field="${i}"]`).value.trim()));
  saveSchedule();
  render(days.indexOf(adminDay.value));
  adminMessage.textContent="✓ Giornata salvata";
  setTimeout(()=>adminMessage.textContent="",2200);
};

document.getElementById("resetDay").onclick=()=>{
  const day=adminDay.value;
  if(!confirm(`Ripristinare il palinsesto originale di ${day}?`)) return;
  schedule[day]=clone(DEFAULT_SCHEDULE[day]||[]);
  saveSchedule();
  renderEditor();
  render(days.indexOf(day));
  adminMessage.textContent="↺ Giornata ripristinata";
};

document.getElementById("exportData").onclick=()=>{
  const blob=new Blob([JSON.stringify(schedule,null,2)],{type:"application/json"});
  const url=URL.createObjectURL(blob);
  const a=document.createElement("a");
  a.href=url;a.download="sugar-tribe-palinsesto.json";a.click();
  URL.revokeObjectURL(url);
  adminMessage.textContent="✓ File esportato";
};

document.getElementById("importData").onchange=e=>{
  const file=e.target.files[0];
  if(!file)return;
  const reader=new FileReader();
  reader.onload=()=>{
    try{
      const imported=JSON.parse(reader.result);
      if(!imported || typeof imported!=="object") throw new Error();
      schedule=imported;
      days.splice(0,days.length,...Object.keys(schedule));
      saveSchedule();
      dayBox.innerHTML="";
      adminDay.innerHTML="";
      days.forEach((day,index)=>{
        const b=document.createElement("button");
        b.className="day";b.textContent=day;b.onclick=()=>render(index);dayBox.appendChild(b);
        const o=document.createElement("option");o.value=day;o.textContent=day;adminDay.appendChild(o);
      });
      adminDay.value=days[0];
      renderEditor();render(0);
      adminMessage.textContent="✓ Palinsesto importato";
    }catch(err){
      adminMessage.textContent="File JSON non valido";
    }
    e.target.value="";
  };
  reader.readAsText(file);
};

document.getElementById("menuToggle").onclick=()=>{
  document.querySelector(".header").classList.toggle("nav-open");
};
document.querySelectorAll(".header nav a").forEach(a=>a.onclick=()=>{
  document.querySelector(".header").classList.remove("nav-open");
});

render(0);
