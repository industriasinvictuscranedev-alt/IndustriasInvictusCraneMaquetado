
const $=(s,e=document)=>e.querySelector(s),$$=(s,e=document)=>[...e.querySelectorAll(s)];
const WA='520000000000',wa=t=>'https://wa.me/'+WA+'?text='+encodeURIComponent(t);
const J=(k,d)=>JSON.parse(localStorage[k]||d);
function toast(t){const e=document.createElement('div');e.className='ts';e.textContent=t;document.body.append(e);setTimeout(()=>e.remove(),2600)}
function truck(t){const w=x=>`<g class="wh"><circle cx="${x}" cy="150" r="24" fill="#2A2A2A"/><circle cx="${x}" cy="150" r="11" fill="#857F7F"/><path d="M${x} 141v18M${x-9} 150h18" stroke="#EAEAEA" stroke-width="3"/></g>`;
let s='<path d="M18 122V74h58l26 26v22z" fill="#fff"/><path d="M32 82h38l16 18H32z" fill="#857F7F"/><rect x="18" y="122" width="360" height="14" rx="3" fill="#2A2A2A"/>';
if(t=='p')s+='<path class="k" d="M106 112h150l124 22v10H106z"/><path d="M120 122h240" stroke="#EAEAEA" stroke-width="3" stroke-dasharray="14 10"/>';
if(t=='r')s+='<path class="k" d="M106 92h110v30H106z"/><path d="M150 92L300 34" class="ks" stroke-width="9" stroke-linecap="round" style="stroke:#2A2A2A"/><path d="M300 34v62" stroke="#857F7F" stroke-width="3"/><path d="M293 96h14v10a7 7 0 1 1-14 0z" fill="#2A2A2A"/>';
if(t=='w')s+='<path class="k" d="M106 108h100v14H106z"/><path d="M200 114h150" stroke="#2A2A2A" stroke-width="10"/><path class="ks" d="M350 114V88h22" fill="none" stroke-width="8" stroke-linecap="round"/>';
if(t=='u')s+='<path class="k" d="M106 108h100v14H106z"/><path d="M200 126l130 8" stroke="#2A2A2A" stroke-width="10"/><path class="ks" d="M330 134l30-14 12 10" fill="none" stroke-width="8" stroke-linecap="round"/>';
return `<svg viewBox="0 0 400 180">${s}${w(62)}${w(250)}${w(318)}</svg>`}
function acc(i){return '<svg viewBox="0 0 120 80">'+['<g fill="none" stroke-width="7"><rect x="8" y="26" width="36" height="28" rx="14" stroke="#218066"/><rect x="34" y="26" width="36" height="28" rx="14" stroke="#2A2A2A"/><rect x="60" y="26" width="36" height="28" rx="14" stroke="#218066"/></g>','<path d="M60 8v22a22 22 0 1 0 22 22" fill="none" stroke="#2A2A2A" stroke-width="9" stroke-linecap="round"/><circle cx="60" cy="14" r="7" fill="#218066"/>','<rect x="22" y="22" width="76" height="36" rx="6" fill="#2A2A2A"/><circle cx="40" cy="40" r="14" fill="#218066"/><circle cx="40" cy="40" r="5" fill="#EAEAEA"/><path d="M58 40h30" stroke="#857F7F" stroke-width="6"/>','<rect x="10" y="28" width="100" height="22" rx="6" fill="#2A2A2A"/><g fill="#218066"><circle cx="30" cy="39" r="7"/><circle cx="60" cy="39" r="7"/><circle cx="90" cy="39" r="7"/></g>'][i%4]+'</svg>'}
const T={p:'Plataformas',r:'Rescate',w:'Wheel Lift',u:'Underlift'};
const L={p:['Capacidad de plataforma','Longitud','Capacidad de winch'],r:['Capacidad de pluma','Alcance de pluma','Capacidad de winch'],w:['Capacidad wheel lift','Peso remolcable','Capacidad de winch'],u:['Capacidad underlift','Extensión','Capacidad de winch']};
const G={p:[['IP-22','Plataforma de aluminio ligera para auxilio vial urbano.','5 toneladas',35,'19 pies',60,'9,000 lbs',45],['IP-30','Plataforma reforzada para vehículos utilitarios.','8 toneladas',50,'21 pies',70,'12,000 lbs',60],['IP-40','Plataforma de acero para carga media.','12 toneladas',65,'24 pies',80,'15,000 lbs',72],['IP-55','Plataforma pesada con inclinación hidráulica.','18 toneladas',85,'26 pies',90,'20,000 lbs',90]],
r:[['IR-25','Grúa de rescate compacta para maniobras en espacios reducidos.','25 toneladas',40,'5.5 m',50,'12,000 lbs',55],['IR-35','Pluma telescópica para rescate carretero.','35 toneladas',55,'6.5 m',65,'16,000 lbs',70],['IR-50','Rescate pesado con doble winch.','50 toneladas',75,'7.5 m',78,'25,000 lbs',85],['IR-75','Serie pesada para salvamento extremo.','75 toneladas',95,'9 m',92,'35,000 lbs',98]],
w:[['WL-35','Wheel lift ligero para autos y SUV.','3,500 lbs',40,'2.5 toneladas',45,'8,000 lbs',40],['WL-50','Wheel lift de uso comercial.','5,000 lbs',60,'4 toneladas',60,'10,000 lbs',55],['WL-70','Wheel lift reforzado para camionetas pesadas.','7,000 lbs',80,'6 toneladas',80,'12,000 lbs',68]],
u:[['UL-40','Underlift para arrastre sin dañar el vehículo.','4 toneladas',40,'1.8 m',45,'10,000 lbs',50],['UL-60','Underlift para unidades de carga media.','6 toneladas',60,'2.2 m',65,'14,000 lbs',70],['UL-85','Underlift pesado para autobuses y tractocamiones.','8.5 toneladas',85,'2.8 m',88,'20,000 lbs',90]]};
const ACC=[['Cadena grado 80','Cadena de amarre de 3/8" para carga pesada.','$1,850'],['Gancho de arrastre','Gancho forjado con seguro, 10 ton.','$980'],['Malacate eléctrico','Malacate 12V de 9,000 lbs con control.','$12,400'],['Barra de luces LED','Barra ámbar de emergencia, 48".','$3,200'],['Eslinga de remolque','Eslinga de poliéster de 8 m, 5 ton.','$760'],['Cuñas de rueda','Par de cuñas antideslizantes.','$540'],['Cadena de seguridad','Juego de 2 cadenas con ganchos.','$1,450'],['Kit de señalización','Conos, banderas y triángulos.','$890']];
const cover=(t,s,b)=>`<div class="cvr${b?' b2':''}"><div class="logo"><i>I</i>INVICTUS</div><h2>${t}</h2><p>${s}</p></div>`;
const item=(k,x)=>`<div class="it">${truck(k)}<h3>${x[0]}</h3><small>${T[k]}</small><p>${x[1]}</p><p><b>${L[k][0]}:</b> ${x[2]}</p><a class="btn g" target="_blank" href="${wa('Hola, quiero cotizar la grúa '+x[0]+' ('+T[k]+')')}">Cotizar por WhatsApp</a></div>`;
const pacc=(x,i)=>`<div class="it">${acc(i)}<h3>${x[0]}</h3><small>Accesorio</small><p>${x[1]}</p><p class="pr">${x[2]} MXN</p><small style="color:var(--m)">IVA incluido</small><button class="btn g" onclick="buy(${i})">Comprar</button></div>`;
function book(P,el){if(P.length%2)P.push('');const n=P.length/2;let h='<div class="in">';
for(let k=0;k<n;k++)h+=`<div class="lf"><div class="pg">${P[2*k]}</div><div class="pg b">${P[2*k+1]}</div></div>`;el.innerHTML=h+'</div>';
let i=0;const lv=$$('.lf',el),inn=$('.in',el);
const up=()=>{lv.forEach((l,k)=>{l.classList.toggle('f',k<i);l.style.zIndex=k<i?k:n-k});inn.style.transform=i==0?'none':i==n?'translateX(100%)':'translateX(50%)';$('#ct').textContent=i==0?'Portada':i==n?'Contraportada':'Páginas '+(2*i)+' y '+(2*i+1)};
const go=d=>{i=Math.max(0,Math.min(n,i+d));up()};
$('#pv').onclick=()=>go(-1);$('#nx').onclick=()=>go(1);lv.forEach((l,k)=>l.onclick=e=>{if(!e.target.closest('a,button'))go(k<i?-1:1)});
addEventListener('keydown',e=>{if(e.key=='ArrowRight')go(1);if(e.key=='ArrowLeft')go(-1)});up()}
function cartUI(){const c=J('inv_c','[]'),e=$('#cart');if(!e)return;const t=c.reduce((a,i)=>a+parseInt(ACC[i][2].replace(/\D/g,'')),0);
e.innerHTML=c.length?`<b>${c.length} artículo(s) · Total $${t.toLocaleString('es-MX')} MXN (IVA incluido)</b> <button class="btn g" onclick="toast('El pago con Mercado Pago se conecta con el backend')">Finalizar compra</button> <button class="btn" onclick="localStorage.inv_c='[]';cartUI()">Vaciar</button>`:'Tu carrito está vacío.'}
function buy(i){if(!J('inv_u','null')){toast('Necesitas una cuenta para comprar. Te llevamos a crearla…');setTimeout(()=>location.href='cuenta.html?next=accesorios.html#registro',1700);return}
const c=J('inv_c','[]');c.push(i);localStorage.inv_c=JSON.stringify(c);toast(ACC[i][0]+' agregado al carrito');cartUI()}
function viewer(k){const it=G[k];$('main').innerHTML=`<section class="pv"><h1>${T[k]}</h1><div class="stg"><div class="im"></div><div class="card"></div></div></section><div class="th">`+it.map((x,i)=>`<button>${truck(k)}${x[0]}</button>`).join('')+'</div>';
const show=i=>{const x=it[i];$('.im').innerHTML=truck(k);$('.card').innerHTML=`<h2>${x[0]}</h2><p>${x[1]}</p>`+[2,4,6].map((j,n)=>`<div class="sp"><b>${L[k][n]}</b>${x[j]}<div class="bar"><i data-w="${x[j+1]}"></i></div></div>`).join('')+`<p style="margin-top:24px"><a class="btn g" target="_blank" href="${wa('Hola, quiero cotizar la grúa '+x[0]+' ('+T[k]+')')}">Cotizar por WhatsApp</a></p>`;
$$('.th button').forEach((b,j)=>b.classList.toggle('on',j==i));setTimeout(()=>$$('.bar i').forEach(e=>e.style.width=e.dataset.w+'%'),60);const s=$('.stg');s.classList.remove('fx');void s.offsetWidth;s.classList.add('fx')};
$$('.th button').forEach((b,i)=>b.onclick=()=>show(i));show(0)}
function auth(){const nx=new URLSearchParams(location.search).get('next')||'accesorios.html',u=J('inv_u','null');
const tab=t=>{$('#reg').hidden=t!='reg';$('#log').hidden=t!='log';$$('.tb button').forEach(b=>b.classList.toggle('on',b.dataset.t==t))};
$$('.tb button').forEach(b=>b.onclick=()=>tab(b.dataset.t));tab('reg');
if(u){$('#out').hidden=true;$('#in').hidden=false;$('#in').innerHTML=`<h3>Hola, ${u.nombre} ${u.apellidos||''}</h3><p>${u.correo}</p><p><a class="btn g" href="accesorios.html">Ir a accesorios</a> <button class="btn d" id="lo">Cerrar sesión</button></p>`;$('#lo').onclick=()=>{localStorage.removeItem('inv_u');location.reload()}}
$('#reg').onsubmit=e=>{e.preventDefault();const f=Object.fromEntries(new FormData(e.target)),us=J('inv_us','[]');
if(us.some(x=>x.correo==f.correo))return toast('Ese correo ya tiene una cuenta');if(f.password.length<8)return toast('La contraseña debe tener al menos 8 caracteres');
delete f.password;us.push(f);localStorage.inv_us=JSON.stringify(us);localStorage.inv_u=JSON.stringify(f);toast('¡Cuenta creada!');setTimeout(()=>location.href=nx,900)};
$('#log').onsubmit=e=>{e.preventDefault();const f=Object.fromEntries(new FormData(e.target)),x=J('inv_us','[]').find(y=>y.correo==f.correo);
if(!x)return toast('No encontramos esa cuenta. Crea una primero.');localStorage.inv_u=JSON.stringify(x);toast('Sesión iniciada');setTimeout(()=>location.href=nx,900)}}
const hd=$('header');addEventListener('scroll',()=>hd.classList.toggle('s',scrollY>40));$('#bg').onclick=()=>$('nav').classList.toggle('open');
$$('.tr').forEach(e=>e.innerHTML=truck(e.dataset.t));$$('.rd div').forEach(e=>e.innerHTML=truck('p'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});$$('.rv').forEach(e=>io.observe(e));
const sl=$$('.sl');if(sl.length){let c=0,t;const d=$('.dts'),show=i=>{c=(i+sl.length)%sl.length;sl.forEach((s,k)=>s.classList.toggle('on',k==c));$$('button',d).forEach((b,k)=>b.classList.toggle('on',k==c));clearInterval(t);t=setInterval(()=>show(c+1),6500)};
sl.forEach((_,i)=>{const b=document.createElement('button');b.onclick=()=>show(i);d.append(b)});$('#a1').onclick=()=>show(c-1);$('#a2').onclick=()=>show(c+1);show(0)}
const cf=$('#cf');if(cf)cf.onsubmit=e=>{e.preventDefault();const f=Object.fromEntries(new FormData(cf));open(wa(`Hola, soy ${f.nombre} (${f.correo}). ${f.mensaje}`),'_blank')};
