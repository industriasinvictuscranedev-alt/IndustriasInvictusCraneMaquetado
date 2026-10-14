
const $ = (s, e = document) => e.querySelector(s), $$ = (s, e = document) => [...e.querySelectorAll(s)];
const WA = '520000000000', wa = t => 'https://wa.me/' + WA + '?text=' + encodeURIComponent(t);
const J = (k, d) => JSON.parse(localStorage[k] || d);
function toast(t) { const e = document.createElement('div'); e.className = 'ts'; e.textContent = t; document.body.append(e); setTimeout(() => e.remove(), 2600) }
const PHOTOS = {
    p: 'https://media.cylex-polska.pl/companies/1147/0017/images/POMOC-DROGOWA-WYNAJEM-AUTOLAWETY-WROCLAW_903704_large.jpg',
    r: 'https://www.tympsa.com.mx/wp-content/uploads/2021/10/gruacG1.jpg',
    w: 'https://cdn.dealerspike.com/imglib/v1/800x600/imglib/Assets/Inventory/A2/1A/A21AD3DC-CF6E-4999-9BE3-E45C7FF5EB6D.jpg',
    u: 'https://reedcitytowing.com/img/towing-clare-mi-l.jpg'
};
function truck(t) { return `<img class="photo-asset" src="${PHOTOS[t] || PHOTOS.p}" alt="Fotografía real de grúa" loading="lazy">` }
function acc(i) {
    const photos = [
        'https://cdn.snsimg.carview.co.jp/minkara/note/000/006/074/814/6074814/p4.jpg?ct=84fb7e3ebcf3',
        'https://www.fiault.com/gallery/options/huit-cales-de-blocages-reglables-sur-le-plancher-4-tp-4-vl-large.jpeg',
        'https://img.zips.com/i/public/0007649_in-the-ditch-individual-speed-chock_900.jpeg',
        'https://cdn.fastpixel.io/fp/ret_img%2Bv_9884%2Bw_1182%2Bh_788%2Bq_glossy%2Bto_webp/knobhilltowing.com%2Fwp-content%2Fuploads%2F2025%2F06%2Fimage_4748454fa0be45f593c5a6ce7f908751.jpeg'];
    return `<img class="photo-asset" src="${photos[i % photos.length]}" alt="Fotografía real de equipo de arrastre" loading="lazy">`
}
const T = { p: 'Plataformas', r: 'Rescate', w: 'Wheel Lift', u: 'Underlift' };
const L = { p: ['Capacidad de plataforma', 'Longitud', 'Capacidad de winch'], r: ['Capacidad de pluma', 'Alcance de pluma', 'Capacidad de winch'], w: ['Capacidad wheel lift', 'Peso remolcable', 'Capacidad de winch'], u: ['Capacidad underlift', 'Extensión', 'Capacidad de winch'] };
const G = {
    p: [['IP-22', 'Plataforma de aluminio ligera para auxilio vial urbano.', '5 toneladas', 35, '19 pies', 60, '9,000 lbs', 45], ['IP-30', 'Plataforma reforzada para vehículos utilitarios.', '8 toneladas', 50, '21 pies', 70, '12,000 lbs', 60], ['IP-40', 'Plataforma de acero para carga media.', '12 toneladas', 65, '24 pies', 80, '15,000 lbs', 72], ['IP-55', 'Plataforma pesada con inclinación hidráulica.', '18 toneladas', 85, '26 pies', 90, '20,000 lbs', 90]],
    r: [['IR-25', 'Grúa de rescate compacta para maniobras en espacios reducidos.', '25 toneladas', 40, '5.5 m', 50, '12,000 lbs', 55], ['IR-35', 'Pluma telescópica para rescate carretero.', '35 toneladas', 55, '6.5 m', 65, '16,000 lbs', 70], ['IR-50', 'Rescate pesado con doble winch.', '50 toneladas', 75, '7.5 m', 78, '25,000 lbs', 85], ['IR-75', 'Serie pesada para salvamento extremo.', '75 toneladas', 95, '9 m', 92, '35,000 lbs', 98]],
    w: [['WL-35', 'Wheel lift ligero para autos y SUV.', '3,500 lbs', 40, '2.5 toneladas', 45, '8,000 lbs', 40], ['WL-50', 'Wheel lift de uso comercial.', '5,000 lbs', 60, '4 toneladas', 60, '10,000 lbs', 55], ['WL-70', 'Wheel lift reforzado para camionetas pesadas.', '7,000 lbs', 80, '6 toneladas', 80, '12,000 lbs', 68]],
    u: [['UL-40', 'Underlift para arrastre sin dañar el vehículo.', '4 toneladas', 40, '1.8 m', 45, '10,000 lbs', 50], ['UL-60', 'Underlift para unidades de carga media.', '6 toneladas', 60, '2.2 m', 65, '14,000 lbs', 70], ['UL-85', 'Underlift pesado para autobuses y tractocamiones.', '8.5 toneladas', 85, '2.8 m', 88, '20,000 lbs', 90]]
};
const ACC = [['Cadena grado 80', 'Cadena de amarre de 3/8" para carga pesada.', '$1,850'], ['Gancho de arrastre', 'Gancho forjado con seguro, 10 ton.', '$980'], ['Malacate eléctrico', 'Malacate 12V de 9,000 lbs con control.', '$12,400'], ['Barra de luces LED', 'Barra ámbar de emergencia, 48".', '$3,200'], ['Eslinga de remolque', 'Eslinga de poliéster de 8 m, 5 ton.', '$760'], ['Cuñas de rueda', 'Par de cuñas antideslizantes.', '$540'], ['Cadena de seguridad', 'Juego de 2 cadenas con ganchos.', '$1,450'], ['Kit de señalización', 'Conos, banderas y triángulos.', '$890']];
const cover = (t, s, b) => `<div class="cvr${b ? ' b2' : ''}"><img class="cover-logo" src="logo-invictus.png" alt="Invictus Crane"><h2>${t}</h2><p>${s}</p></div>`;
const item = (k, x) => `<div class="it">${truck(k)}<h3>${x[0]}</h3><small>${T[k]}</small><p>${x[1]}</p><p><b>${L[k][0]}:</b> ${x[2]}</p><a class="btn g" target="_blank" href="${wa('Hola, quiero cotizar la grúa ' + x[0] + ' (' + T[k] + ')')}">Cotizar por WhatsApp</a></div>`;
const pacc = (x, i) => `<div class="it">${acc(i)}<h3>${x[0]}</h3><small>Accesorio</small><p>${x[1]}</p><p class="pr">${x[2]} MXN</p><small style="color:var(--m)">IVA incluido</small><button class="btn g" onclick="buy(${i})">Comprar</button></div>`;
function book(P, el) {
    if (P.length % 2) P.push(''); const n = P.length / 2, suf = el.id.replace(/^bk/, ''); let h = '<div class="in">';
    for (let k = 0; k < n; k++)h += `<div class="lf"><div class="pg">${P[2 * k]}</div><div class="pg b">${P[2 * k + 1]}</div></div>`; el.innerHTML = h + '</div>';
    let i = 0; const lv = $$('.lf', el), inn = $('.in', el);
    const up = () => { lv.forEach((l, k) => { l.classList.toggle('f', k < i); l.style.zIndex = k < i ? k : n - k }); inn.style.transform = i == 0 ? 'none' : i == n ? 'translateX(100%)' : 'translateX(50%)'; $('#ct' + suf).textContent = i == 0 ? 'Portada' : i == n ? 'Contraportada' : 'Páginas ' + (2 * i) + ' y ' + (2 * i + 1) };
    const go = d => { i = Math.max(0, Math.min(n, i + d)); up() };
    $('#pv' + suf).onclick = () => go(-1); $('#nx' + suf).onclick = () => go(1); lv.forEach((l, k) => l.onclick = e => { if (!e.target.closest('a,button')) go(k < i ? -1 : 1) });
    addEventListener('keydown', e => { if (e.key == 'ArrowRight') go(1); if (e.key == 'ArrowLeft') go(-1) }); up()
}
function cartUI() {
    const c = J('inv_c', '[]');
    const badge = $('#cartCount'); if (badge) badge.textContent = c.length;
    const e = $('#cart'); if (!e) return;
    const t = c.reduce((a, i) => a + parseInt(ACC[i][2].replace(/\\D/g, '')), 0);
    e.innerHTML = c.length ? `<div class="drawer-items">${c.map((i,n)=>`<div class="drawer-item"><div><b>${ACC[i][0]}</b><small>${ACC[i][2]} MXN</small></div><button class="drawer-remove" data-remove="${n}" aria-label="Quitar ${ACC[i][0]}">×</button></div>`).join('')}</div><b class="drawer-total">${c.length} artículo(s) · Total $${t.toLocaleString('es-MX')} MXN</b><button class="btn g" id="checkoutCart">Finalizar compra</button><button class="btn" id="clearCart">Vaciar carrito</button>` : '<p class="empty-cart">Tu carrito está vacío.</p>';
    $$('#cart [data-remove]').forEach(b=>b.onclick=()=>{const next=J('inv_c','[]');next.splice(Number(b.dataset.remove),1);localStorage.inv_c=JSON.stringify(next);cartUI()});
    const clear=$('#clearCart'); if(clear) clear.onclick=()=>{localStorage.inv_c='[]';cartUI()};
    const checkout=$('#checkoutCart'); if(checkout) checkout.onclick=()=>toast('El pago con Mercado Pago se conecta con el backend');
}
function setupCartDrawer() {
    if (!$('#cartDrawer')) document.body.insertAdjacentHTML('beforeend', '<div class="drawer-shade" id="cartShade"></div><aside class="cart-drawer" id="cartDrawer" aria-label="Carrito de compras" aria-hidden="true"><div class="drawer-head"><h2>Tu carrito</h2><button id="closeCart" aria-label="Cerrar carrito">×</button></div><div id="cart"></div></aside>');
    const drawer=$('#cartDrawer'), shade=$('#cartShade');
    const close=()=>{drawer.classList.remove('open');shade.classList.remove('open');drawer.setAttribute('aria-hidden','true')};
    const open=()=>{cartUI();drawer.classList.add('open');shade.classList.add('open');drawer.setAttribute('aria-hidden','false')};
    $$('.cart-nav').forEach(a=>{a.href='#cartDrawer';a.onclick=e=>{e.preventDefault();open()}});
    $('#closeCart').onclick=close; shade.onclick=close;
}
function buy(i) {
    if (!J('inv_u', 'null')) { toast('Necesitas una cuenta para comprar. Te llevamos a crearla…'); setTimeout(() => location.href = 'cuenta.html?next=accesorios.html#registro', 1700); return }
    const c = J('inv_c', '[]'); c.push(i); localStorage.inv_c = JSON.stringify(c); toast(ACC[i][0] + ' agregado al carrito'); cartUI()
}
function viewer(k) {
    const it = G[k]; $('main').innerHTML = `<section class="pv"><h1>${T[k]}</h1><div class="stg"><div class="im"></div><div class="card"></div></div></section><div class="th">` + it.map((x, i) => `<button>${truck(k)}${x[0]}</button>`).join('') + '</div>';
    const show = i => {
        const x = it[i]; $('.im').innerHTML = truck(k); $('.card').innerHTML = `<h2>${x[0]}</h2><p>${x[1]}</p>` + [2, 4, 6].map((j, n) => `<div class="sp"><b>${L[k][n]}</b>${x[j]}<div class="bar"><i data-w="${x[j + 1]}"></i></div></div>`).join('') + `<p style="margin-top:24px"><a class="btn g" target="_blank" href="${wa('Hola, quiero cotizar la grúa ' + x[0] + ' (' + T[k] + ')')}">Cotizar por WhatsApp</a></p>`;
        $$('.th button').forEach((b, j) => b.classList.toggle('on', j == i)); setTimeout(() => $$('.bar i').forEach(e => e.style.width = e.dataset.w + '%'), 60); const s = $('.stg'); s.classList.remove('fx'); void s.offsetWidth; s.classList.add('fx')
    };
    $$('.th button').forEach((b, i) => b.onclick = () => show(i)); show(0)
}
function auth() {
    const nx = new URLSearchParams(location.search).get('next') || 'accesorios.html', u = J('inv_u', 'null');
    const tab = t => { $('#reg').hidden = t != 'reg'; $('#log').hidden = t != 'log'; $$('.tb button').forEach(b => b.classList.toggle('on', b.dataset.t == t)) };
    $$('.tb button').forEach(b => b.onclick = () => tab(b.dataset.t)); tab('reg');
    if (u) { $('#out').hidden = true; $('#in').hidden = false; $('#in').innerHTML = `<h3>Hola, ${u.nombre} ${u.apellidos || ''}</h3><p>${u.correo}</p><p><a class="btn g" href="accesorios.html">Ir a accesorios</a> <button class="btn d" id="lo">Cerrar sesión</button></p>`; $('#lo').onclick = () => { localStorage.removeItem('inv_u'); location.reload() } }
    $('#reg').onsubmit = e => {
        e.preventDefault(); const f = Object.fromEntries(new FormData(e.target)), us = J('inv_us', '[]');
        if (us.some(x => x.correo == f.correo)) return toast('Ese correo ya tiene una cuenta'); if (f.password.length < 8) return toast('La contraseña debe tener al menos 8 caracteres');
        delete f.password; us.push(f); localStorage.inv_us = JSON.stringify(us); localStorage.inv_u = JSON.stringify(f); toast('¡Cuenta creada!'); setTimeout(() => location.href = nx, 900)
    };
    $('#log').onsubmit = e => {
        e.preventDefault(); const f = Object.fromEntries(new FormData(e.target)), x = J('inv_us', '[]').find(y => y.correo == f.correo);
        if (!x) return toast('No encontramos esa cuenta. Crea una primero.'); localStorage.inv_u = JSON.stringify(x); toast('Sesión iniciada'); setTimeout(() => location.href = nx, 900)
    }
}
const hd = $('header'); addEventListener('scroll', () => hd.classList.toggle('s', scrollY > 40)); $('#bg').onclick = () => $('nav').classList.toggle('open');
$$('.tr').forEach(e => e.innerHTML = truck(e.dataset.t)); $$('.rd div').forEach(e => e.innerHTML = `<svg class="animated-truck" viewBox="0 0 520 150" role="img" aria-label="Camión de auxilio animado"><ellipse cx="255" cy="127" rx="220" ry="9" fill="#000" opacity=".12"/><g class="truck-body"><path d="M30 43h260v70H30z" fill="#d8a72e"/><path d="M290 64h90l55 40v9H290z" fill="#f0bd3e"/><path d="M320 72h52l35 27h-87z" fill="#d9eff5"/><path d="M45 52h230v9H45z" fill="#fff" opacity=".8"/><path d="M72 20h145v23H72z" fill="#263746"/><text x="144" y="36" font-size="12" text-anchor="middle" fill="white" font-weight="bold">INVICTUS</text><rect x="12" y="103" width="443" height="10" rx="3" fill="#344653"/><g class="truck-wheel wheel-a"><circle cx="105" cy="113" r="22" fill="#202a32"/><circle cx="105" cy="113" r="10" fill="#b9c4c8"/></g><g class="truck-wheel wheel-b"><circle cx="365" cy="113" r="22" fill="#202a32"/><circle cx="365" cy="113" r="10" fill="#b9c4c8"/></g><path d="M172 43l70-22 8 8-60 25" stroke="#344653" stroke-width="9" fill="none" stroke-linecap="round"/><path d="M244 28l31 10-8 7-30-10z" fill="#d8a72e"/></g></svg>`); setupCartDrawer(); cartUI();
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }), { threshold: .15 }); $$('.rv').forEach(e => io.observe(e));
const sl = $$('.sl'); if (sl.length) {
    let c = 0, t; const d = $('.dts'), show = i => { c = (i + sl.length) % sl.length; sl.forEach((s, k) => s.classList.toggle('on', k == c)); $$('button', d).forEach((b, k) => b.classList.toggle('on', k == c)); clearInterval(t); t = setInterval(() => show(c + 1), 6500) };
    sl.forEach((_, i) => { const b = document.createElement('button'); b.onclick = () => show(i); d.append(b) }); $('#a1').onclick = () => show(c - 1); $('#a2').onclick = () => show(c + 1); show(0)
}
const cf = $('#cf'); if (cf) cf.onsubmit = e => { e.preventDefault(); const f = Object.fromEntries(new FormData(cf)); open(wa(`Hola, soy ${f.nombre} (${f.correo}). ${f.mensaje}`), '_blank') };
