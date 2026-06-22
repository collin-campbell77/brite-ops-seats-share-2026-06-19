const fs = require('fs');
// Repo-relative: this script lives in <repo>/src and reads/writes alongside the source files.
const dir = __dirname + '/';

const roles = [
  {id:'doo', code:'Dir.<br>Ops', name:'Director of Operations', who:'', desc:'Owns core operations company-wide; the top of the operations org.', file:'profile-doo.html', cls:'lead', tier:'Leadership'},
  {id:'com', code:'Ops<br>Mgr', name:'Operations Manager', who:'', desc:'Works across all Area Managers; owns training, commercial jobs, AZ operations, and mobile AM support — Brite Nites and Brite Labs.', file:'profile-com.html', cls:'lead'},
  {id:'rdc', code:'RDC', name:'Regional Dispatch Coordinator', who:'', desc:'Seasonal remote dispatch + reconciliation hub across a cluster of territories.', file:'rdc-scaffold.html', cls:'rdc', tier:'Coordination &amp; Territory'},
  {id:'am', code:'AM', name:'Area Manager', who:'', desc:'In-field boss; owns the customer account, field crews, and territory result.', file:'profile-am.html', cls:''},
  {id:'st', code:'ST', name:'Senior Tech', who:'', desc:'Crew lead and installer; production pay on the full install + strike cycle.', file:'profile-st.html', cls:'', tier:'Crew'},
  {id:'jt', code:'JT', name:'Junior Tech', who:'', desc:'Installer on a Senior Tech&rsquo;s crew; growth path toward Senior Tech.', file:'profile-jt.html', cls:''},
  {id:'rt', code:'RT', name:'Repair Tech', who:'', desc:'Repairs and services failed displays on a planned route.', file:'profile-rt.html', cls:'', tier:'Specialists &amp; Support'},
  {id:'qp', code:'QP', name:'Quality Pro', who:'', desc:'Inspector role; owns install accuracy and scores crews.', file:'profile-qp.html', cls:''},
  {id:'wa', code:'WA', name:'Warehouse Associate', who:'', desc:'Stages product to the schedule and processes returns during strike.', file:'profile-wa.html', cls:''},
  {id:'lr', code:'LR', name:'Light Roller', who:'', desc:'Seasonal strike support; helps the warehouse crew process returns.', file:'profile-lr.html', cls:''},
];

// global CSS = the most complete profile stylesheet (rdc-scaffold has the superset)
const base = fs.readFileSync(dir + 'rdc-scaffold.html', 'utf8');
const css = base.split('<style>')[1].split('</style>')[0];

const navCss = `
  .view{display:none}
  .view.show{display:block}
  .dir{max-width:680px;margin:0 auto;padding:30px 18px 60px}
  header.hero.center{text-align:center}
  header.hero.center .lede{margin-left:auto;margin-right:auto}
  .ladder{display:flex;flex-direction:column;align-items:stretch}
  .connector{height:22px;width:2px;background:var(--line);margin:0 auto;position:relative}
  .connector:after{content:"";position:absolute;left:50%;bottom:-1px;transform:translate(-50%,0) rotate(45deg);
    width:7px;height:7px;border-right:2px solid var(--line);border-bottom:2px solid var(--line)}
  a.seat{display:flex;align-items:center;gap:16px;text-decoration:none;color:inherit;
    background:var(--card);border:1px solid var(--line);border-radius:14px;padding:15px 18px;
    box-shadow:0 1px 2px rgba(20,32,46,.04);transition:transform .12s ease,box-shadow .12s ease,border-color .12s ease}
  a.seat:hover{transform:translateY(-2px);box-shadow:0 6px 18px rgba(14,116,144,.16);border-color:var(--cool-line)}
  .seat .scode{flex:0 0 auto;width:54px;height:54px;border-radius:12px;display:flex;align-items:center;justify-content:center;
    font-weight:800;font-size:15px;letter-spacing:.02em;background:var(--cool-bg);color:var(--cool);border:1px solid var(--cool-line)}
  .seat.lead .scode{background:#e9f2f6;color:#123a4a;border-color:#c4dbe4;font-size:13px;line-height:1.05;text-align:center;padding:4px}
  .seat.rdc{border-color:var(--cool-line);background:linear-gradient(180deg,#f3fbfd,#fff)}
  .seat.rdc .scode{background:var(--cool);color:#fff;border-color:var(--cool)}
  .seat .sbody{flex:1 1 auto;min-width:0}
  .seat .stitle{font-size:16px;font-weight:700;letter-spacing:-.01em}
  .seat .who{font-weight:500;color:var(--ink-faint);font-size:13px}
  .seat .sdesc{font-size:13.5px;color:var(--ink-soft);margin-top:2px}
  .seat .scta{flex:0 0 auto;font-size:12.5px;font-weight:700;display:flex;align-items:center;gap:5px;color:var(--cool)}
  .tier{font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-faint);font-weight:700;margin:18px 0 10px;padding-left:4px}
  .tier:first-child{margin-top:0}
  .backbar{position:sticky;top:0;z-index:20;background:rgba(10,26,38,.97);backdrop-filter:blur(4px);
    padding:11px 20px;display:flex;align-items:center;gap:10px}
  .backbar a{color:#bfe6ef;text-decoration:none;font-size:13px;font-weight:700;display:inline-flex;align-items:center;gap:6px}
  .backbar a:hover{color:#fff}
  .backbar .bcode{font-size:11px;color:#7f9fb0;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
  @media(max-width:520px){.seat .scode{width:46px;height:46px;font-size:13px} .seat .scta span.lbl{display:none}}
`;

// build directory (home) ladder
let ladder = '';
roles.forEach((r, i) => {
  if (i > 0) ladder += '\n    <div class="connector"></div>\n';
  if (r.tier) ladder += `    <p class="tier">${r.tier}</p>\n`;
  ladder += `    <a class="seat ${r.cls}" href="#view-${r.id}">
      <div class="scode">${r.code}</div>
      <div class="sbody"><div class="stitle">${r.name}${r.who}</div><div class="sdesc">${r.desc}</div></div>
      <div class="scta"><span class="lbl">View</span> →</div>
    </a>\n`;
});

const home = `<div class="view show" id="home">
  <header class="hero center">
    <p class="eyebrow">Operations Org</p>
    <h1>Operations Seats</h1>
    <p class="lede">Every operational seat, top to bottom. Tap a tile to open that role&rsquo;s profile.</p>
  </header>
  <div class="dir"><div class="ladder">
${ladder}  </div></div>
</div>`;

// build profile views from each file's body (everything after </style>)
let views = '';
roles.forEach(r => {
  const raw = fs.readFileSync(dir + r.file, 'utf8');
  const body = raw.split('</style>')[1].trim();
  views += `\n<div class="view" id="view-${r.id}">
  <div class="backbar"><a href="#">&larr; All seats</a><span class="bcode">${r.name}</span></div>
${body}
</div>\n`;
});

const out = `<title>Brite Nites — Operations Seats</title>
<style>${css}${navCss}</style>
${home}
${views}
<script>
  function route(){
    var id = (location.hash || '').slice(1) || 'home';
    var el = document.getElementById(id) || document.getElementById('home');
    var all = document.querySelectorAll('.view');
    for (var i=0;i<all.length;i++) all[i].classList.remove('show');
    el.classList.add('show');
    window.scrollTo(0,0);
  }
  window.addEventListener('hashchange', route);
  route();
</script>`;

fs.writeFileSync(dir + 'ops-directory-single.html', out);
console.log('Wrote ops-directory-single.html — ' + out.length + ' bytes, ' + roles.length + ' profiles embedded.');
