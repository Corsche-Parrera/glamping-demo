/* ================= Данные ================= */

const HOUSES = [
  {
    id: "stars", water: 60, type: "dome", name: "Купол «Созвездие»", tagline: "Кровать под звёздным окном",
    photo: "dome-stars", badge: "Для двоих", base: 2, max: 2, area: 28, beds: "1 кровать", price: 9900,
    about: "Круглое окно в крыше смотрит ровно в зенит. Ложитесь, и вместо потолка над вами Млечный путь: фонарей в радиусе пятнадцати километров нет. Внутри печь, тёплый пол и лён на кровати, снаружи — терраса с двумя шезлонгами над рекой.",
    features: ["Окно в крыше над кроватью", "Дровяная печь и тёплый пол", "Душ и туалет внутри", "Терраса с видом на Ману", "Телескоп по запросу", "Wi-Fi через Starlink"],
  },
  {
    id: "mist", water: 90, type: "dome", name: "Купол «Туман»", tagline: "Ванна у панорамного окна",
    photo: "dome-mist", badge: "Хит", base: 2, max: 3, area: 34, beds: "кровать и диван", price: 11900,
    about: "Самый высокий купол стоит на сваях над склоном. Остекление во всю стену, ванна прямо у окна и долина, которую по утрам заливает туманом. Просыпаешься, а внизу облака.",
    features: ["Ванна у панорамного окна", "Остекление во всю стену", "Терраса на сваях", "Кофемашина и местная обжарка", "Климат-контроль", "Wi-Fi через Starlink"],
  },
  {
    id: "family", water: 120, type: "dome", name: "Купол «Семейный»", tagline: "Два уровня и терраса с гамаком",
    photo: "dome-family", badge: "С детьми", base: 4, max: 5, area: 46, beds: "кровать и антресоль", price: 14900,
    about: "Большой купол с тамбуром и деревянной антресолью, куда дети забираются по лестнице. Внизу диван, круглый стол для настолок и кухня, снаружи — просторная терраса с гамаком среди лиственниц.",
    features: ["Спальная антресоль для детей", "Кухня с посудой и плитой", "Настольные игры и книги", "Терраса с гамаком и мангалом", "Детская кроватка по запросу", "Wi-Fi через Starlink"],
  },
  {
    id: "cedar", water: 150, type: "aframe", name: "A-фрейм «Кедр»", tagline: "Печка, кресло и снег за окном",
    photo: "aframe-cedar", badge: "Самый тихий", base: 2, max: 2, area: 26, beds: "кровать на мансарде", price: 8400,
    about: "Маленький чёрный домик в глубине соснового бора, в двух минутах от реки. Внутри кедр и сосна, чугунная печь, кресло с пледом и спальня под самым коньком. Лучшее место, чтобы переждать метель.",
    features: ["Чугунная печь с окошком", "Спальня на мансарде", "Кедровая отделка", "Душ и туалет внутри", "Кресло у панорамного окна", "Можно с собакой"],
  },
  {
    id: "river", water: 20, type: "aframe", name: "A-фрейм «Плёс»", tagline: "Стеклянный фасад прямо на реку",
    photo: "aframe-river", badge: "У воды", base: 2, max: 4, area: 48, beds: "кровать и диван-кровать", price: 13800,
    about: "Стоит на самом краю берега: от террасы до воды двадцать шагов. Фасад полностью стеклянный, поэтому закат садится прямо в гостиную. Кухонный остров, большой диван и настил, с которого удобно встать на SUP.",
    features: ["Стеклянный фасад на закат", "20 шагов до воды", "Кухонный остров и посуда", "Терраса с уличной мебелью", "Причал для SUP рядом", "Wi-Fi через Starlink"],
  },
  {
    id: "grand", water: 180, type: "aframe", name: "A-фрейм «Таёжный»", tagline: "Дом на компанию со своей сауной",
    photo: "aframe-grand", badge: "Для компании", base: 6, max: 8, area: 82, beds: "2 спальни и гостиная", price: 21900,
    about: "Двухэтажный дом на холме с видом на долину Маны. Двусветная гостиная с камином и столом на восьмерых, две спальни на галерее и своя сауна с отдельным входом. Для дней рождения, семей и старых друзей.",
    features: ["Своя сауна на дровах", "Камин в гостиной", "Две спальни на галерее", "Стол на 8 человек и кухня", "Вид на долину реки", "Можно с собакой"],
  },
];

const EXTRAS = [
  {
    id: "banya", name: "Баня на дровах", short: "Баня", price: 3500, unit: "сеанс 2 часа", mode: "once", ritual: true,
    photo: "service-banya", time: "Круглый год · до 6 гостей",
    text: "Сруб у самой воды: веники из берёзы и пихты, травяной чай, а после парной — в Ману или в прорубь.",
  },
  {
    id: "chan", name: "Сибирский чан", short: "Чан", price: 4500, unit: "сеанс 2 часа", mode: "once", ritual: true,
    photo: "service-chan", time: "Круглый год · до 5 гостей",
    text: "Чугунный котёл на живом огне с облепихой, хвоей и травами. Вид на долину, горячая вода и холодный воздух.",
  },
  {
    id: "sup", name: "SUP-прогулка", short: "SUP", price: 1500, unit: "доска на 2 часа", mode: "once", ritual: true,
    photo: "service-sup", time: "Май — сентябрь", months: [4, 5, 6, 7, 8],
    text: "Прозрачная вода, туман над рекой и тишина. Выдадим доску, жилет и покажем спокойный маршрут вдоль скал.",
  },
  { id: "breakfast", name: "Завтрак корзиной", short: "Завтраки", price: 900, unit: "на гостя в день", mode: "perGuestNight", text: "Сырники, местный творог, мёд, свежий хлеб и кофе — оставим у двери к нужному часу." },
  { id: "transfer", name: "Трансфер из Красноярска", short: "Трансфер", price: 5000, unit: "туда и обратно", mode: "once", text: "Встретим в городе или в аэропорту на внедорожнике, до 4 гостей с багажом." },
  { id: "snowmobile", name: "Снегоход с гидом", short: "Снегоход", price: 7000, unit: "прогулка 1,5 часа", mode: "once", months: [11, 0, 1, 2], text: "По льду Маны и таёжным тропам к замёрзшему водопаду. Тёплые комбинезоны дадим." },
  { id: "fishing", name: "Рыбалка с гидом", short: "Рыбалка", price: 5000, unit: "утро на лодке", mode: "once", months: [4, 5, 6, 7, 8, 9], text: "Хариус и ленок на рассвете. Снасти наши, улов приготовим на гриле." },
];

const SEASONS = {
  summer: { name: "Лето", mult: 1.15, particles: "fireflies" },
  autumn: { name: "Осень", mult: 1, particles: "leaves" },
  winter: { name: "Зима", mult: 1.1, particles: "snow" },
  spring: { name: "Весна", mult: 0.9, particles: "petals" },
};
const SEASON_ORDER = ["summer", "autumn", "winter", "spring"];

const REVIEWS = [
  { name: "Анна и Кирилл", city: "Красноярск", house: "Созвездие", season: "Зима", color: "#a6f2c9", text: "Лежали в кровати и считали падающие звёзды, пока трещала печка. Утром −31, а мы бегом из чана в снег. Ради такого и живём в Сибири." },
  { name: "Марина", city: "Новосибирск", house: "Туман", season: "Осень", color: "#f3cbb8", text: "Проснулась в шесть, а долина вся в тумане, торчат только верхушки лиственниц. Сидела в ванне с кофе и не верила, что это меньше часа от города." },
  { name: "Семья Орловых", city: "Красноярск", house: "Семейный", season: "Лето", color: "#bcd7e6", text: "Дети не вылезали с антресоли, а вечером ловили светлячков у террасы. Нам достались баня у воды и тишина. Уже забронировали август." },
  { name: "Денис", city: "Москва", house: "Плёс", season: "Лето", color: "#e3d4f0", text: "Встал на SUP прямо от террасы в пять утра — вода как стекло, над ней пар. Прилетал по работе и специально остался ещё на два дня." },
  { name: "Ольга", city: "Ачинск", house: "Таёжный", season: "Осень", color: "#f0dca6", text: "Отмечали сорокалетие ввосьмером. Сауна, камин, длинный стол и река в золоте. Ребята из Изгиба привезли торт из города — мы даже не просили." },
  { name: "Игорь", city: "Абакан", house: "Кедр", season: "Весна", color: "#cfe8c9", text: "Приехал один дописывать книгу. Неделя: печка, черёмуха за окном и ледоход на Мане. Написал больше, чем за полгода дома." },
  { name: "Юлия", city: "Красноярск", house: "Туман", season: "Зима", color: "#f6c6cf", text: "Чан с облепихой при минус двадцати пяти — отдельный вид счастья. К нашему приходу всё растопили, халаты тёплые, над водой пар и звёзды." },
];

const FAQ = [
  { q: "Во сколько заезд и выезд?", a: "Заезд с 15:00, выезд до 12:00. Если домик свободен, ранний заезд или поздний выезд — 1 500 ₽ за каждые 3 часа." },
  { q: "Зимой в домиках не холодно?", a: "Купола утеплены в три слоя, в каждом домике тёплый пол, конвекторы и дровяная печь. Даже при −40 внутри держится +23. Дрова приносим к порогу." },
  { q: "Можно приехать с собакой?", a: "Да, в «Кедр» и «Таёжный» — с питомцами до 25 кг, 1 000 ₽ за всё проживание. Лежанку и миски дадим." },
  { q: "Как с едой?", a: "В каждом домике есть кухня или мини-кухня и мангал на террасе. Можно заказать завтрак корзиной к двери или ужин с нашей кухни из местных продуктов. Ближайший магазин в Усть-Мане, в 13 км, но продукты лучше взять из города." },
  { q: "Есть связь и интернет?", a: "Мобильная связь на территории слабая, зато в каждом домике Wi-Fi через Starlink. Хватит на звонок и кино, но советуем попробовать отключиться." },
  { q: "Подходит для отдыха с детьми?", a: "Да. Удобнее всего «Семейный» и «Таёжный». Детям до 5 лет проживание бесплатно, есть кроватки, стульчики и настольные игры. Спуск к воде огорожен." },
  { q: "Как отменить или перенести бронь?", a: "Бесплатно — за 14 дней до заезда, вернём предоплату полностью. Позже — перенесём даты в пределах года без доплаты." },
  { q: "Что взять с собой?", a: "Удобную обувь, тёплые вещи даже летом — вечером у реки прохладно, и купальник для чана. Постель, полотенца, халаты, тапочки и косметика уже в домике." },
];

const ICONS = {
  guests: '<svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 5.2a3 3 0 0 1 0 5.6M21 20c0-2.6-1.6-4.8-4-5.6"/></svg>',
  area: '<svg viewBox="0 0 24 24"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>',
  bed: '<svg viewBox="0 0 24 24"><path d="M3 18V7M3 14h18v4M21 14v-2a3 3 0 0 0-3-3h-7v5"/><circle cx="7" cy="11" r="1.6"/></svg>',
  check: '<svg viewBox="0 0 24 24"><path d="M5 12.5l4.2 4.2L19 7"/></svg>',
  plus: '<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>',
};

/* ================= Утилиты ================= */

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
const rub = (v) => `${Math.round(v).toLocaleString("ru-RU")}\u00a0₽`;
const houseById = (id) => HOUSES.find((h) => h.id === id);
const extraById = (id) => EXTRAS.find((e) => e.id === id);
const img = (name) => `images/${name}.jpg`;

const DAY = 86400000;
const startOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
const addDays = (d, n) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
const keyOf = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const fromKey = (k) => { const [y, m, d] = k.split("-").map(Number); return new Date(y, m - 1, d); };
const nightsBetween = (a, b) => Math.round((startOfDay(b) - startOfDay(a)) / DAY);
const TODAY = startOfDay(new Date());

const plural = (n, one, few, many) => {
  const m10 = n % 10, m100 = n % 100;
  if (m10 === 1 && m100 !== 11) return one;
  if (m10 >= 2 && m10 <= 4 && (m100 < 12 || m100 > 14)) return few;
  return many;
};
const fmtDate = (d, opts = { day: "numeric", month: "short" }) => d.toLocaleDateString("ru-RU", opts).replace(".", "");

const seasonOf = (d) => {
  const m = d.getMonth();
  if (m === 11 || m <= 1) return "winter";
  if (m <= 4) return "spring";
  if (m <= 7) return "summer";
  return "autumn";
};
const isHoliday = (d) => (d.getMonth() === 11 && d.getDate() >= 30) || (d.getMonth() === 0 && d.getDate() <= 8);
const isWeekend = (d) => d.getDay() === 5 || d.getDay() === 6;

function nightPrice(house, d) {
  let p = house.price * SEASONS[seasonOf(d)].mult;
  if (isHoliday(d)) p *= 1.5;
  else if (isWeekend(d)) p *= 1.2;
  return Math.round(p / 100) * 100;
}

function hash(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
  return (h >>> 0) % 1000;
}

function isBusy(house, d) {
  if (d < TODAY) return false;
  const idx = Math.floor(d.getTime() / DAY);
  const shift = hash(house.id) % 3;
  const block = Math.floor((idx + shift) / 3);
  const limit = isHoliday(d) ? 700 : 250;
  return hash(`${house.id}:${block}`) < limit;
}

function rangeFree(house, start, end) {
  for (let d = start; d < end; d = addDays(d, 1)) if (isBusy(house, d)) return false;
  return true;
}

let toastTimer;
function toast(text) {
  const el = $("#toast");
  el.textContent = text;
  el.classList.add("is-shown");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("is-shown"), 2800);
}

/* ================= Загрузка ================= */

function finishLoading() { document.body.classList.add("is-loaded"); }
if (reduceMotion) finishLoading();
else {
  const heroImg = $(".hero__img.is-active");
  const minDelay = new Promise((r) => setTimeout(r, 1300));
  const imgReady = heroImg.complete ? Promise.resolve() : new Promise((r) => { heroImg.onload = r; heroImg.onerror = r; setTimeout(r, 3500); });
  Promise.all([minDelay, imgReady]).then(finishLoading);
}

/* ================= Шапка и меню ================= */

const header = $("#header");
const nav = $("#nav");
const burger = $("#burger");
let lastY = window.scrollY;

function onHeaderScroll() {
  const y = window.scrollY;
  header.classList.toggle("is-scrolled", y > 30);
  const menuOpen = nav.classList.contains("is-open");
  header.classList.toggle("is-hidden", !menuOpen && y > window.innerHeight && y > lastY + 4);
  if (y < lastY - 4) header.classList.remove("is-hidden");
  lastY = y;
}

function setMenu(open) {
  nav.classList.toggle("is-open", open);
  burger.classList.toggle("is-open", open);
  burger.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("no-scroll", open);
  document.body.classList.toggle("menu-open", open);
}
burger.addEventListener("click", () => setMenu(!nav.classList.contains("is-open")));
$$("a", nav).forEach((a) => a.addEventListener("click", () => setMenu(false)));

/* ================= Небо: время суток по секциям ================= */

const skySections = $$("[data-sky]").filter((el) => el !== document.body);
const navLinks = $$("a", nav);
const navObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const id = entry.target.id;
    navLinks.forEach((a) => a.classList.toggle("is-current", a.getAttribute("href") === `#${id}`));
  });
}, { rootMargin: "-50% 0px -50% 0px" });
skySections.forEach((s) => navObserver.observe(s));

// Цвета неба смешиваются по мере прокрутки: у каждой границы секций есть зона перехода высотой больше экрана
const SKY_ORDER = ["night", "dawn", "day", "dusk"];
const SKY_LOOK = {
  night: { stars: 1, a: [64, 140, 160, 0.3], b: [166, 242, 201, 0.1] },
  dawn: { stars: 0, a: [255, 186, 168, 0.5], b: [196, 186, 240, 0.42] },
  day: { stars: 0, a: [255, 255, 255, 0.65], b: [168, 214, 226, 0.4] },
  dusk: { stars: 0.45, a: [233, 138, 104, 0.34], b: [128, 92, 176, 0.34] },
};
const skyEl = $(".sky");
const skyLayers = SKY_ORDER.map((s) => $(`.sky__layer--${s}`));
const skyOrbs = $$(".sky__orb");
let skyBounds = [];
let skySmoothY = window.scrollY;
let skyLastY = -1;
let starsAlpha = 1;

function measureSky() {
  const y = window.scrollY;
  skyBounds = skySections.map((s) => ({ top: s.getBoundingClientRect().top + y, sky: s.dataset.sky }));
  skyLastY = -1;
}

const smoothstep = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };

function updateSky() {
  const target = window.scrollY;
  skySmoothY = reduceMotion ? target : lerp(skySmoothY, target, 0.12);
  if (Math.abs(skySmoothY - target) < 0.3) skySmoothY = target;
  if (skySmoothY === skyLastY || !skyBounds.length) return;
  skyLastY = skySmoothY;

  const vh = window.innerHeight;
  const center = skySmoothY + vh / 2;
  const zone = vh * 1.2;
  const w = { night: 0, dawn: 0, day: 0, dusk: 0 };
  w[skyBounds[0].sky] = 1;
  for (let i = 1; i < skyBounds.length; i++) {
    const t = smoothstep(-zone / 2, zone / 2, center - skyBounds[i].top);
    if (!t) break;
    w[skyBounds[i - 1].sky] -= t;
    w[skyBounds[i].sky] += t;
  }

  let acc = 0;
  SKY_ORDER.forEach((s, i) => {
    const wi = Math.max(0, w[s]);
    acc += wi;
    skyLayers[i].style.opacity = acc > 0 ? (wi / acc).toFixed(4) : "0";
  });

  const mix = (key) => {
    const c = [0, 0, 0, 0];
    SKY_ORDER.forEach((s) => SKY_LOOK[s][key].forEach((v, j) => { c[j] += v * Math.max(0, w[s]); }));
    return `rgba(${c[0] | 0}, ${c[1] | 0}, ${c[2] | 0}, ${c[3].toFixed(3)})`;
  };
  skyEl.style.setProperty("--orb-a", mix("a"));
  skyEl.style.setProperty("--orb-b", mix("b"));
  starsAlpha = SKY_ORDER.reduce((sum, s) => sum + SKY_LOOK[s].stars * Math.max(0, w[s]), 0);
  starsCanvas.style.opacity = starsAlpha.toFixed(3);

  const dominant = SKY_ORDER.reduce((best, s) => (w[s] > w[best] ? s : best), "night");
  if (document.body.dataset.sky !== dominant) document.body.dataset.sky = dominant;

  if (reduceMotion) return;
  const docH = document.documentElement.scrollHeight - vh || 1;
  const p = skySmoothY / docH;
  skyLayers.forEach((l) => { l.style.transform = `translate3d(0, ${(0.5 - p) * 20}vh, 0)`; });
  const k = skySmoothY / vh;
  skyOrbs[0].style.transform = `translate3d(${Math.sin(k * 0.55) * 30}vw, ${Math.cos(k * 0.4) * 32 - 12}vh, 0)`;
  skyOrbs[1].style.transform = `translate3d(${Math.cos(k * 0.45 + 2) * 34}vw, ${Math.sin(k * 0.6 + 1) * 30 + 14}vh, 0)`;
}

new ResizeObserver(measureSky).observe(document.body);
window.addEventListener("load", measureSky);

/* ================= Кнопка «Наверх» ================= */

const toTop = $("#toTop");
const toTopRing = $("#toTopRing");
let toTopRaf = 0;

function updateToTop() {
  const y = window.scrollY, vh = window.innerHeight;
  const max = document.documentElement.scrollHeight - vh || 1;
  toTop.classList.toggle("is-shown", y > vh * 0.9);
  toTopRing.style.strokeDashoffset = String(100 - clamp(y / max, 0, 1) * 100);
}

function stopToTop() { cancelAnimationFrame(toTopRaf); toTopRaf = 0; document.documentElement.style.scrollBehavior = ""; }

toTop.addEventListener("click", () => {
  const from = window.scrollY;
  if (reduceMotion || from < 2) { window.scrollTo(0, 0); return; }
  stopToTop();
  document.documentElement.style.scrollBehavior = "auto";
  const duration = clamp(700 + from / 10, 900, 1800);
  const start = performance.now();
  const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  const step = (now) => {
    const k = Math.min(1, (now - start) / duration);
    window.scrollTo(0, from * (1 - ease(k)));
    if (k < 1) toTopRaf = requestAnimationFrame(step);
    else { stopToTop(); $(".logo").focus({ preventScroll: true }); }
  };
  toTopRaf = requestAnimationFrame(step);
});
["wheel", "touchstart", "keydown"].forEach((ev) => window.addEventListener(ev, () => { if (toTopRaf) stopToTop(); }, { passive: true }));

/* ================= Звёзды ================= */

const starsCanvas = $("#stars");
const sctx = starsCanvas.getContext("2d");
let stars = [];
let shooting = null;
let nextShoot = performance.now() + 4000;
const DPR = Math.min(window.devicePixelRatio || 1, 2);

function sizeStars() {
  const w = window.innerWidth, h = window.innerHeight;
  starsCanvas.width = w * DPR; starsCanvas.height = h * DPR;
  sctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  const count = Math.min(520, Math.round((w * h) / 3200));
  stars = Array.from({ length: count }, () => ({
    x: Math.random() * w, y: Math.random() * h * 1.6,
    r: Math.random() < 0.08 ? 1.1 + Math.random() * 0.7 : 0.3 + Math.random() * 0.8,
    a: 0.35 + Math.random() * 0.6,
    s: 0.4 + Math.random() * 1.8, p: Math.random() * Math.PI * 2,
    depth: 0.02 + Math.random() * 0.05,
  }));
}

function drawStars(t) {
  if (starsAlpha < 0.01) return;
  const w = window.innerWidth, h = window.innerHeight;
  sctx.clearRect(0, 0, w, h);
  const sy = window.scrollY;
  for (const st of stars) {
    const y = ((st.y - sy * st.depth) % (h * 1.6) + h * 1.6) % (h * 1.6);
    if (y > h) continue;
    const tw = reduceMotion ? 1 : 0.55 + 0.45 * Math.sin(t / 1000 * st.s + st.p);
    sctx.globalAlpha = st.a * tw;
    sctx.fillStyle = st.r > 1.1 ? "#dff6ff" : "#ffffff";
    sctx.beginPath(); sctx.arc(st.x, y, st.r, 0, Math.PI * 2); sctx.fill();
  }
  if (!reduceMotion) {
    if (!shooting && t > nextShoot) {
      shooting = { x: w * (0.3 + Math.random() * 0.7), y: h * Math.random() * 0.4, len: 120 + Math.random() * 120, born: t, life: 900 };
    }
    if (shooting) {
      const k = (t - shooting.born) / shooting.life;
      if (k >= 1) { shooting = null; nextShoot = t + 5000 + Math.random() * 9000; }
      else {
        const dx = -Math.cos(0.5) * shooting.len, dy = Math.sin(0.5) * shooting.len;
        const x = shooting.x + dx * k * 2, y = shooting.y + dy * k * 2;
        const g = sctx.createLinearGradient(x, y, x - dx * 0.6, y - dy * 0.6);
        g.addColorStop(0, `rgba(255,255,255,${0.9 * (1 - k)})`);
        g.addColorStop(1, "rgba(255,255,255,0)");
        sctx.globalAlpha = 1; sctx.strokeStyle = g; sctx.lineWidth = 1.4;
        sctx.beginPath(); sctx.moveTo(x, y); sctx.lineTo(x - dx * 0.6, y - dy * 0.6); sctx.stroke();
      }
    }
  }
  sctx.globalAlpha = 1;
}

/* ================= Сезоны и частицы ================= */

const hero = $("#hero");
const particlesCanvas = $("#particles");
const pctx = particlesCanvas.getContext("2d");
let particles = [];
let particleType = "leaves";
let particleFade = 1;
let heroVisible = true;
const pointer = { x: -9999, y: -9999 };

const glowSprite = (() => {
  const c = document.createElement("canvas");
  c.width = c.height = 64;
  const g = c.getContext("2d");
  const grd = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grd.addColorStop(0, "rgba(240,255,190,1)");
  grd.addColorStop(0.18, "rgba(214,255,140,0.85)");
  grd.addColorStop(0.5, "rgba(170,255,120,0.18)");
  grd.addColorStop(1, "rgba(170,255,120,0)");
  g.fillStyle = grd; g.fillRect(0, 0, 64, 64);
  return c;
})();

const LEAF_COLORS = ["#e9a53c", "#d4812a", "#f3c451", "#b85a22", "#e8b95a"];
const PETAL_COLORS = ["#ffffff", "#fbeef2", "#f6dfe7", "#fff7f0"];

function spawn(type, w, h, anywhere) {
  const y = anywhere ? Math.random() * h : -20 - Math.random() * h * 0.5;
  const x = Math.random() * w;
  switch (type) {
    case "fireflies":
      return { x, y: h * (0.35 + Math.random() * 0.6), vx: 0, vy: 0, a: Math.random() * Math.PI * 2, size: 10 + Math.random() * 16, ph: Math.random() * 6.28, sp: 0.6 + Math.random() * 1.4 };
    case "snow": {
      const r = 0.6 + Math.random() * 2.4;
      return { x, y, r, vy: 0.35 + r * 0.45, sway: Math.random() * 6.28, sw: 0.4 + Math.random() * 0.8, o: 0.45 + Math.random() * 0.5 };
    }
    case "petals":
      return { x, y, r: 3 + Math.random() * 3.5, vy: 0.45 + Math.random() * 0.6, sway: Math.random() * 6.28, sw: 0.8 + Math.random() * 1.2, rot: Math.random() * 6.28, vr: (Math.random() - 0.5) * 0.05, flip: Math.random() * 6.28, c: PETAL_COLORS[(Math.random() * PETAL_COLORS.length) | 0] };
    default:
      return { x, y, r: 5 + Math.random() * 6, vy: 0.6 + Math.random() * 0.9, sway: Math.random() * 6.28, sw: 0.8 + Math.random() * 1.4, rot: Math.random() * 6.28, vr: (Math.random() - 0.5) * 0.06, flip: Math.random() * 6.28, c: LEAF_COLORS[(Math.random() * LEAF_COLORS.length) | 0] };
  }
}

function particleCount(type, w) {
  const k = clamp(w / 1440, 0.45, 1.2);
  return Math.round({ fireflies: 70, snow: 190, petals: 55, leaves: 42 }[type] * k);
}

function sizeParticles() {
  const r = hero.getBoundingClientRect();
  particlesCanvas.width = r.width * DPR; particlesCanvas.height = r.height * DPR;
  pctx.setTransform(DPR, 0, 0, DPR, 0, 0);
}

function setParticles(type) {
  particleType = type;
  const w = hero.clientWidth, h = hero.clientHeight;
  particles = Array.from({ length: particleCount(type, w) }, () => spawn(type, w, h, true));
  particleFade = 0;
}

function drawParticles(t) {
  if (!heroVisible || reduceMotion) return;
  const w = hero.clientWidth, h = hero.clientHeight;
  pctx.clearRect(0, 0, w, h);
  particleFade = Math.min(1, particleFade + 0.02);
  const time = t / 1000;

  for (const p of particles) {
    const dx = p.x - pointer.x, dy = p.y - pointer.y;
    const dist2 = dx * dx + dy * dy;
    let push = 0;
    if (dist2 < 16000) push = (1 - dist2 / 16000) * 2.2;
    const inv = push ? 1 / Math.sqrt(dist2 || 1) : 0;

    if (particleType === "fireflies") {
      p.a += (Math.random() - 0.5) * 0.3;
      p.vx = lerp(p.vx, Math.cos(p.a) * 0.45, 0.05) + dx * inv * push;
      p.vy = lerp(p.vy, Math.sin(p.a) * 0.3, 0.05) + dy * inv * push;
      p.x += p.vx; p.y += p.vy;
      if (p.x < -20) p.x = w + 20; if (p.x > w + 20) p.x = -20;
      if (p.y < h * 0.25) p.a = Math.PI / 2; if (p.y > h + 10) p.a = -Math.PI / 2;
      const glow = Math.max(0, Math.sin(time * p.sp + p.ph));
      pctx.globalAlpha = particleFade * (0.15 + glow * 0.85);
      const s = p.size * (0.7 + glow * 0.5);
      pctx.drawImage(glowSprite, p.x - s / 2, p.y - s / 2, s, s);
      continue;
    }

    p.sway += 0.012 * p.sw;
    p.y += p.vy + dy * inv * push;
    p.x += Math.sin(p.sway) * (particleType === "snow" ? 0.35 : 0.9) + 0.15 + dx * inv * push;
    if (p.y > h + 20 || p.x > w + 30 || p.x < -30) Object.assign(p, spawn(particleType, w, h, false));

    if (particleType === "snow") {
      pctx.globalAlpha = particleFade * p.o;
      pctx.fillStyle = "#fff";
      pctx.beginPath(); pctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); pctx.fill();
    } else {
      p.rot += p.vr; p.flip += 0.03;
      pctx.save();
      pctx.translate(p.x, p.y); pctx.rotate(p.rot); pctx.scale(1, Math.abs(Math.cos(p.flip)) * 0.8 + 0.2);
      pctx.globalAlpha = particleFade * (particleType === "petals" ? 0.9 : 0.85);
      pctx.fillStyle = p.c;
      pctx.beginPath();
      if (particleType === "petals") {
        pctx.ellipse(0, 0, p.r, p.r * 0.62, 0, 0, Math.PI * 2);
      } else {
        pctx.moveTo(-p.r, 0);
        pctx.quadraticCurveTo(0, -p.r * 0.7, p.r, 0);
        pctx.quadraticCurveTo(0, p.r * 0.7, -p.r, 0);
      }
      pctx.fill();
      pctx.restore();
    }
  }
  pctx.globalAlpha = 1;
}

hero.addEventListener("pointermove", (e) => {
  const r = hero.getBoundingClientRect();
  pointer.x = e.clientX - r.left; pointer.y = e.clientY - r.top;
  mouse.tx = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.ty = (e.clientY / window.innerHeight) * 2 - 1;
});
hero.addEventListener("pointerleave", () => { pointer.x = pointer.y = -9999; mouse.tx = mouse.ty = 0; });

const heroObserver = new IntersectionObserver(([e]) => { heroVisible = e.isIntersecting; }, { threshold: 0 });
heroObserver.observe(hero);

const seasonBtns = $$(".season");
let currentSeason = seasonOf(TODAY);
let seasonTimer = null;
let userPickedSeason = false;

function setSeason(key, fromUser = false) {
  currentSeason = key;
  document.body.dataset.season = key;
  seasonBtns.forEach((b) => {
    const on = b.dataset.season === key;
    b.classList.toggle("is-active", on);
    b.setAttribute("aria-selected", String(on));
  });
  $$(".hero__img").forEach((im) => {
    const on = im.dataset.season === key;
    if (on) im.loading = "eager";
    im.classList.toggle("is-active", on);
  });
  setParticles(SEASONS[key].particles);
  if (fromUser) {
    userPickedSeason = true;
    clearInterval(seasonTimer);
  }
}

seasonBtns.forEach((b) => b.addEventListener("click", () => setSeason(b.dataset.season, true)));

function startSeasonCycle() {
  if (reduceMotion) return;
  seasonTimer = setInterval(() => {
    if (userPickedSeason || !heroVisible || document.hidden) return;
    const i = SEASON_ORDER.indexOf(currentSeason);
    setSeason(SEASON_ORDER[(i + 1) % SEASON_ORDER.length]);
  }, 9000);
}

/* ================= Параллакс ================= */

const heroMedia = $("#heroMedia");
const heroContent = $("#heroContent");
const mists = $$("[data-parallax]");
const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
const parallaxImgs = [...$$(".ritual__img"), ...$$("[data-parallax-img]")];

function updateParallax() {
  if (reduceMotion) return;
  const y = window.scrollY;
  const vh = window.innerHeight;
  mouse.x = lerp(mouse.x, finePointer ? mouse.tx : 0, 0.06);
  mouse.y = lerp(mouse.y, finePointer ? mouse.ty : 0, 0.06);

  if (y < vh * 1.2) {
    heroMedia.style.transform = `translate3d(${mouse.x * -14}px, ${y * 0.32 + mouse.y * -10}px, 0) scale(${1 + y / vh * 0.08})`;
    heroContent.style.transform = `translate3d(0, ${y * -0.18}px, 0)`;
    heroContent.style.opacity = String(clamp(1 - y / (vh * 0.65), 0, 1));
    mists.forEach((m) => { m.style.translate = `${mouse.x * 30}px ${y * -Number(m.dataset.parallax)}px`; });
  }

  parallaxImgs.forEach((im) => {
    const r = im.parentElement.getBoundingClientRect();
    if (r.bottom < -100 || r.top > vh + 100) return;
    const k = (r.top + r.height / 2 - vh / 2) / vh;
    im.style.transform = `translate3d(0, ${k * -60}px, 0)`;
  });
}

/* ================= Главный цикл ================= */

function loop(t) {
  updateSky();
  updateParallax();
  drawStars(t);
  drawParticles(t);
  requestAnimationFrame(loop);
}

window.addEventListener("scroll", () => {
  onHeaderScroll();
  updateStatement();
  updateRoad();
  updateToTop();
}, { passive: true });

let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => { sizeStars(); sizeParticles(); setParticles(particleType); renderCalendar(); measureSky(); }, 150);
});

/* ================= Солнце над Маной ================= */

function sunTimes(date, lat, lng) {
  const rad = Math.PI / 180, J1970 = 2440588, J2000 = 2451545, e = rad * 23.4397, J0 = 0.0009;
  const toDays = (d) => d.valueOf() / DAY - 0.5 + J1970 - J2000;
  const fromJ = (j) => new Date((j + 0.5 - J1970) * DAY);
  const lw = rad * -lng, phi = rad * lat, d = toDays(date);
  const n = Math.round(d - J0 - lw / (2 * Math.PI));
  const ds = J0 + lw / (2 * Math.PI) + n;
  const M = rad * (357.5291 + 0.98560028 * ds);
  const C = rad * (1.9148 * Math.sin(M) + 0.02 * Math.sin(2 * M) + 0.0003 * Math.sin(3 * M));
  const L = M + C + rad * 102.9372 + Math.PI;
  const dec = Math.asin(Math.sin(e) * Math.sin(L));
  const Jnoon = J2000 + ds + 0.0053 * Math.sin(M) - 0.0069 * Math.sin(2 * L);
  const w = Math.acos((Math.sin(-0.833 * rad) - Math.sin(phi) * Math.sin(dec)) / (Math.cos(phi) * Math.cos(dec)));
  const Jset = J2000 + J0 + (w + lw) / (2 * Math.PI) + n + 0.0053 * Math.sin(M) - 0.0069 * Math.sin(2 * L);
  return { rise: fromJ(Jnoon - (Jset - Jnoon)), set: fromJ(Jset) };
}

function updateNow() {
  const now = new Date();
  const fmt = (d) => d.toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Krasnoyarsk" });
  const { rise, set } = sunTimes(now, 55.84, 92.55);
  $("#nowLine").textContent = `На Мане сейчас ${fmt(now)} · рассвет ${fmt(rise)} · закат ${fmt(set)}`;
}

/* ================= Быстрый поиск ================= */

const quickIn = $("#quickIn");
const quickOut = $("#quickOut");

function initQuick() {
  const friday = addDays(TODAY, ((5 - TODAY.getDay() + 7) % 7) || 7);
  quickIn.min = keyOf(TODAY);
  quickIn.value = keyOf(friday);
  quickOut.min = keyOf(addDays(friday, 1));
  quickOut.value = keyOf(addDays(friday, 2));
  quickIn.addEventListener("change", () => {
    if (!quickIn.value) return;
    const inD = fromKey(quickIn.value);
    quickOut.min = keyOf(addDays(inD, 1));
    if (!quickOut.value || fromKey(quickOut.value) <= inD) quickOut.value = keyOf(addDays(inD, 2));
  });

  $("#quickForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const start = fromKey(quickIn.value);
    const end = fromKey(quickOut.value);
    const guests = Number($("#quickGuests").value);
    if (end <= start) { toast("Дата выезда должна быть позже заезда"); return; }

    const fits = (h) => h.max >= guests && rangeFree(h, start, end);
    const cur = houseById(state.houseId);
    const house = fits(cur) ? cur : HOUSES.filter(fits).sort((a, b) => a.max - b.max || a.price - b.price)[0];

    state.guests = guests;
    state.viewMonth = new Date(start.getFullYear(), start.getMonth(), 1);
    if (house) {
      state.houseId = house.id;
      state.start = start; state.end = end;
      toast(`Свободен ${house.name} — проверьте детали брони`);
    } else {
      state.start = null; state.end = null;
      toast("На эти даты всё занято — выберите другие в календаре");
    }
    state.guests = Math.min(guests, houseById(state.houseId).max);
    renderBooking();
    $("#booking").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
  });
}

/* ================= Интро: слова загораются ================= */

const statement = $("#statement");
let words = [];
function splitStatement() {
  const parts = statement.textContent.trim().split(/ +/);
  statement.innerHTML = parts.map((w) => `<span class="w">${w}</span>`).join(" ");
  words = $$(".w", statement);
}
function updateStatement() {
  if (!words.length) return;
  const r = statement.getBoundingClientRect();
  const vh = window.innerHeight;
  const p = clamp((vh * 0.85 - r.top) / (r.height + vh * 0.3), 0, 1);
  const lit = Math.round(p * words.length);
  words.forEach((w, i) => w.classList.toggle("is-lit", reduceMotion || i < lit));
}

/* ================= Появление и счётчики ================= */

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("is-visible");
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

function observeReveals(root = document) {
  $$(".reveal:not(.is-visible)", root).forEach((el) => revealObserver.observe(el));
}

const countObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = Number(el.dataset.count);
    const suffix = el.dataset.suffix || "";
    countObserver.unobserve(el);
    if (reduceMotion) { el.innerHTML = target + suffix; return; }
    const t0 = performance.now();
    const step = (t) => {
      const k = clamp((t - t0) / 1600, 0, 1);
      const eased = 1 - Math.pow(1 - k, 4);
      el.innerHTML = Math.round(target * eased) + suffix;
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}, { threshold: 0.6 });
$$("[data-count]").forEach((el) => countObserver.observe(el));

/* ================= Домики ================= */

function renderHouses() {
  $("#housesGrid").innerHTML = HOUSES.map((h, i) => `
    <button class="house reveal" style="--d:${(i % 3) * 90}ms" data-id="${h.id}" data-type="${h.type}" aria-label="${h.name}: подробнее">
      <div class="house__media">
        <img class="house__out" src="${img(h.photo)}" alt="${h.name} снаружи" loading="lazy">
        <img class="house__in" src="${img(h.photo + "-in")}" alt="" loading="lazy">
        <span class="house__badge">${h.badge}</span>
        <span class="house__peek">Подробнее ${ICONS.plus.replace("<svg", '<svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"')}</span>
      </div>
      <div class="house__row">
        <h3 class="house__name">${h.name.replace(/^(Купол|A-фрейм) /, "$1&nbsp;")}</h3>
        <span class="house__price">от <b>${rub(Math.min(...Object.values(SEASONS).map((s) => Math.round(h.price * s.mult / 100) * 100)))}</b></span>
      </div>
      <ul class="house__meta">
        <li>${ICONS.guests}до ${h.max} ${plural(h.max, "гостя", "гостей", "гостей")}</li>
        <li>${ICONS.area}${h.area}&nbsp;м²</li>
        <li>${ICONS.bed}${h.beds}</li>
      </ul>
    </button>
  `).join("");

  $$(".house").forEach((card) => card.addEventListener("click", () => openModal(card.dataset.id, card)));
}

$$(".filter").forEach((btn) => btn.addEventListener("click", () => {
  const f = btn.dataset.filter;
  $$(".filter").forEach((b) => { b.classList.toggle("is-active", b === btn); b.setAttribute("aria-selected", String(b === btn)); });
  $$(".house").forEach((card) => {
    const show = f === "all" || card.dataset.type === f;
    card.classList.toggle("is-hidden", !show);
    if (show && !reduceMotion) card.animate([{ opacity: 0, transform: "translateY(20px)" }, { opacity: 1, transform: "none" }], { duration: 600, easing: "cubic-bezier(0.2, 0, 0, 1)" });
  });
}));

/* ================= Окно домика ================= */

const modal = $("#modal");
const modalMedia = $(".modal__media", modal);
let modalHouse = null;
let lastFocus = null;

function openModal(id, trigger) {
  const h = houseById(id);
  modalHouse = h;
  lastFocus = trigger || document.activeElement;
  $("#mPhotoA").src = img(h.photo);
  $("#mPhotoA").alt = `${h.name} снаружи`;
  $("#mPhotoB").src = img(h.photo + "-in");
  $("#mPhotoB").alt = `${h.name} внутри`;
  modalMedia.classList.remove("show-in");
  $$(".modal__views button").forEach((b) => b.classList.toggle("is-active", b.dataset.view === "out"));
  $("#mType").textContent = h.type === "dome" ? "Геокупол" : "A-фрейм";
  $("#mName").textContent = h.name;
  $("#mTagline").textContent = h.tagline;
  $("#mSpecs").innerHTML = `
    <li><b>${h.base === h.max ? h.max : `${h.base}–${h.max}`}</b><span>${plural(h.max, "гость", "гостя", "гостей")}</span></li>
    <li><b>${h.area}&nbsp;м²</b><span>площадь</span></li>
    <li><b>${h.water}&nbsp;м</b><span>до воды</span></li>`;
  $("#mAbout").textContent = h.about;
  $("#mFeatures").innerHTML = h.features.map((f) => `<li>${ICONS.check}<span>${f}</span></li>`).join("");
  const nowSeason = seasonOf(TODAY);
  $("#mPrices").innerHTML = SEASON_ORDER.map((s) => `
    <div class="${s === nowSeason ? "is-now" : ""}"><span>${SEASONS[s].name}${s === nowSeason ? " · сейчас" : ""}</span><b>${rub(Math.round(h.price * SEASONS[s].mult / 100) * 100)}</b></div>`).join("");

  modal.hidden = false;
  document.body.classList.add("no-scroll");
  requestAnimationFrame(() => requestAnimationFrame(() => modal.classList.add("is-open")));
  setTimeout(() => $(".modal__close", modal).focus({ preventScroll: true }), 50);
}

function closeModal() {
  if (modal.hidden) return;
  modal.classList.remove("is-open");
  document.body.classList.remove("no-scroll");
  setTimeout(() => { modal.hidden = true; }, reduceMotion ? 0 : 360);
  if (lastFocus) lastFocus.focus({ preventScroll: true });
}

$$("[data-close]", modal).forEach((el) => el.addEventListener("click", closeModal));
$$(".modal__views button").forEach((b) => b.addEventListener("click", () => {
  modalMedia.classList.toggle("show-in", b.dataset.view === "in");
  $$(".modal__views button").forEach((x) => x.classList.toggle("is-active", x === b));
}));
$("#mBook").addEventListener("click", () => {
  selectHouse(modalHouse.id);
  closeModal();
  setTimeout(() => $("#booking").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" }), 120);
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") { closeModal(); setMenu(false); }
  if (e.key === "Tab" && !modal.hidden) {
    const f = $$("button, a[href], input", modal).filter((el) => el.offsetParent !== null);
    if (!f.length) return;
    if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
    else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
  }
});

/* ================= Услуги ================= */

function extraAvailable(extra) {
  if (!extra.months) return true;
  const probe = [];
  if (state.start && state.end) for (let d = state.start; d < state.end; d = addDays(d, 1)) probe.push(d.getMonth());
  else if (state.start) probe.push(state.start.getMonth());
  else probe.push(TODAY.getMonth());
  return probe.some((m) => extra.months.includes(m));
}

function renderServices() {
  $("#rituals").innerHTML = EXTRAS.filter((e) => e.ritual).map((e, i) => `
    <article class="ritual reveal" style="--d:${i * 110}ms">
      <img class="ritual__img" src="${img(e.photo)}" alt="${e.name}" loading="lazy">
      <span class="ritual__time">${e.time}</span>
      <h3>${e.name}</h3>
      <p>${e.text}</p>
      <div class="ritual__foot">
        <span class="ritual__price"><b>${rub(e.price)}</b> <small>/ ${e.unit}</small></span>
        <button class="add" data-extra="${e.id}">${ICONS.plus}<span>В бронь</span></button>
      </div>
    </article>`).join("");

  $("#extrasList").innerHTML = EXTRAS.filter((e) => !e.ritual).map((e) => `
    <div class="extra-row">
      <h4>${e.name}</h4>
      <p>${e.text}</p>
      <span class="extra-row__price">${rub(e.price)} <small style="font-weight:400;color:var(--fg-3)">/ ${e.unit}</small></span>
      <button class="add" data-extra="${e.id}">${ICONS.plus}<span>В бронь</span></button>
    </div>`).join("");

  $$("[data-extra]").forEach((btn) => btn.addEventListener("click", () => toggleExtra(btn.dataset.extra)));
}

function toggleExtra(id) {
  const extra = extraById(id);
  if (!state.extras.has(id) && !extraAvailable(extra)) {
    toast(`${extra.name} доступна только в сезон: ${seasonLabel(extra)}`);
    return;
  }
  if (state.extras.has(id)) { state.extras.delete(id); toast(`${extra.short} убрали из брони`); }
  else { state.extras.add(id); toast(`${extra.short} добавили к брони`); }
  renderBooking();
}

function seasonLabel(extra) {
  const names = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];
  return `${names[extra.months[0]]} — ${names[extra.months[extra.months.length - 1]]}`;
}

function syncExtraButtons() {
  $$("[data-extra]").forEach((btn) => {
    const id = btn.dataset.extra;
    const on = state.extras.has(id);
    btn.classList.toggle("is-on", on);
    $("span", btn).textContent = on ? "В брони" : "В бронь";
    btn.setAttribute("aria-pressed", String(on));
  });
}

/* ================= Бронирование ================= */

const state = {
  houseId: "mist",
  start: null,
  end: null,
  hover: null,
  guests: 2,
  extras: new Set(),
  viewMonth: new Date(TODAY.getFullYear(), TODAY.getMonth(), 1),
};

const MAX_MONTH = new Date(TODAY.getFullYear(), TODAY.getMonth() + 12, 1);
const monthCount = () => (window.innerWidth <= 760 ? 1 : 2);

function selectHouse(id) {
  state.houseId = id;
  const h = houseById(id);
  if (state.guests > h.max) { state.guests = h.max; toast(`В «${h.name.split("«")[1].replace("»", "")}» помещается до ${h.max} ${plural(h.max, "гостя", "гостей", "гостей")}`); }
  if (state.start && state.end && !rangeFree(h, state.start, state.end)) {
    state.start = null; state.end = null;
    toast("В этом домике выбранные даты заняты — отметьте другие");
  } else if (state.start && !state.end && isBusy(h, state.start)) {
    state.start = null;
  }
  renderBooking();
}

function renderHousePicks() {
  $("#bookHouses").innerHTML = HOUSES.map((h) => `
    <button type="button" class="pick" role="radio" aria-checked="${h.id === state.houseId}" data-id="${h.id}">
      <img src="${img(h.photo)}" alt="" loading="lazy">
      <span><b>${h.name.replace(/^(Купол|A-фрейм) /, "")}</b><small>до ${h.max} · от ${rub(Math.round(h.price * 0.9 / 100) * 100)}</small></span>
    </button>`).join("");
  $$(".pick").forEach((p) => p.addEventListener("click", () => selectHouse(p.dataset.id)));
}

function validCheckout(house, d) {
  return state.start && !state.end && d > state.start && rangeFree(house, state.start, d);
}

function renderCalendar() {
  const house = houseById(state.houseId);
  const count = monthCount();
  const dows = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
  let html = "";
  for (let m = 0; m < 2; m++) {
    const first = new Date(state.viewMonth.getFullYear(), state.viewMonth.getMonth() + m, 1);
    const title = first.toLocaleDateString("ru-RU", { month: "long", year: "numeric" }).replace(" г.", "");
    const offset = (first.getDay() + 6) % 7;
    const days = new Date(first.getFullYear(), first.getMonth() + 1, 0).getDate();
    let cells = dows.map((d) => `<span class="month__dow">${d}</span>`).join("");
    for (let i = 0; i < offset; i++) cells += "<span></span>";
    for (let day = 1; day <= days; day++) {
      const d = new Date(first.getFullYear(), first.getMonth(), day);
      const past = d < TODAY;
      const busy = isBusy(house, d);
      const k = d.getTime();
      const isStart = state.start && k === state.start.getTime();
      const isEnd = state.end && k === state.end.getTime();
      const inRange = state.start && state.end && d > state.start && d < state.end;
      const hoverRange = state.start && !state.end && state.hover && d > state.start && d <= state.hover && validCheckout(house, state.hover);
      const canCheckout = busy && validCheckout(house, d);
      const disabled = past || (busy && !canCheckout);
      const price = nightPrice(house, d);
      const peak = isWeekend(d) || isHoliday(d);
      const cls = ["day",
        past && "is-past", busy && !canCheckout && "is-busy", peak && "is-peak",
        isStart && "is-start", isEnd && "is-end", state.end && "has-end", inRange && "is-range",
        hoverRange && !isStart && "is-hover", k === TODAY.getTime() && "is-today",
      ].filter(Boolean).join(" ");
      const label = `${fmtDate(d, { day: "numeric", month: "long" })}${busy ? ", занято" : `, ${rub(price)} за ночь`}`;
      cells += `<button type="button" class="${cls}" data-key="${keyOf(d)}" ${disabled ? "disabled" : ""} aria-label="${label}">${day}<small>${busy || past ? "&nbsp;" : (price / 1000).toFixed(1).replace(".", ",") + "к"}</small></button>`;
    }
    html += `<div class="month"><h4 class="month__title">${title}</h4><div class="month__grid">${cells}</div></div>`;
  }
  $("#calMonths").innerHTML = html;
  $("#calPrev").disabled = state.viewMonth <= new Date(TODAY.getFullYear(), TODAY.getMonth(), 1);
  $("#calNext").disabled = new Date(state.viewMonth.getFullYear(), state.viewMonth.getMonth() + count, 1) > MAX_MONTH;
}

$("#calMonths").addEventListener("click", (e) => {
  const btn = e.target.closest(".day");
  if (!btn || btn.disabled) return;
  const d = fromKey(btn.dataset.key);
  const house = houseById(state.houseId);

  if (!state.start || state.end || d <= state.start) {
    if (isBusy(house, d)) return;
    state.start = d; state.end = null;
  } else if (rangeFree(house, state.start, d)) {
    state.end = d;
    if (!reduceMotion) btn.animate([{ transform: "scale(0.85)" }, { transform: "scale(1)" }], { duration: 260, easing: "cubic-bezier(0.2,0,0,1)" });
  } else {
    toast("Внутри этих дат есть занятые ночи");
    state.start = d; state.end = null;
  }
  state.hover = null;
  dropUnavailableExtras();
  renderBooking();
});

$("#calMonths").addEventListener("pointerover", (e) => {
  if (!state.start || state.end) return;
  const btn = e.target.closest(".day");
  const d = btn ? fromKey(btn.dataset.key) : null;
  if ((d && state.hover && d.getTime() === state.hover.getTime()) || (!d && !state.hover)) return;
  state.hover = d;
  renderCalendar();
});

$("#calPrev").addEventListener("click", () => { state.viewMonth = new Date(state.viewMonth.getFullYear(), state.viewMonth.getMonth() - 1, 1); renderCalendar(); });
$("#calNext").addEventListener("click", () => { state.viewMonth = new Date(state.viewMonth.getFullYear(), state.viewMonth.getMonth() + 1, 1); renderCalendar(); });

function dropUnavailableExtras() {
  [...state.extras].forEach((id) => {
    const ex = extraById(id);
    if (!extraAvailable(ex)) { state.extras.delete(id); toast(`${ex.short} не проводится в эти даты — убрали из брони`); }
  });
}

function calcBill() {
  const house = houseById(state.houseId);
  const lines = [];
  let total = 0;
  if (!(state.start && state.end)) return { lines, total, nights: 0 };
  const nights = nightsBetween(state.start, state.end);
  const groups = new Map();
  for (let d = state.start; d < state.end; d = addDays(d, 1)) {
    const p = nightPrice(house, d);
    groups.set(p, (groups.get(p) || 0) + 1);
  }
  [...groups.entries()].sort((a, b) => a[0] - b[0]).forEach(([p, n]) => {
    lines.push([`${rub(p)} × ${n} ${plural(n, "ночь", "ночи", "ночей")}`, p * n]);
    total += p * n;
  });
  const extraGuests = Math.max(0, state.guests - house.base);
  if (extraGuests) {
    const sum = extraGuests * 1500 * nights;
    lines.push([`Доп. ${plural(extraGuests, "место", "места", "мест")} × ${extraGuests}`, sum]);
    total += sum;
  }
  state.extras.forEach((id) => {
    const ex = extraById(id);
    const sum = ex.mode === "perGuestNight" ? ex.price * state.guests * nights : ex.price;
    lines.push([ex.mode === "perGuestNight" ? `${ex.name} × ${state.guests * nights}` : ex.name, sum]);
    total += sum;
  });
  return { lines, total, nights };
}

function renderSummary() {
  const house = houseById(state.houseId);
  $("#sumHouse").innerHTML = `<img src="${img(house.photo)}" alt=""><div><b>${house.name}</b><span>${house.type === "dome" ? "Геокупол" : "A-фрейм"} · ${house.area}&nbsp;м² · до ${house.max} ${plural(house.max, "гостя", "гостей", "гостей")}</span></div>`;
  $("#sumIn").textContent = state.start ? fmtDate(state.start, { day: "numeric", month: "short", weekday: "short" }) : "—";
  $("#sumOut").textContent = state.end ? fmtDate(state.end, { day: "numeric", month: "short", weekday: "short" }) : "—";

  $("#guestsOut").textContent = state.guests;
  $("#guestsMinus").disabled = state.guests <= 1;
  $("#guestsPlus").disabled = state.guests >= house.max;
  $("#guestsHint").textContent = house.max > house.base
    ? `Базово ${house.base} ${plural(house.base, "гость", "гостя", "гостей")}, доп. место — 1 500 ₽ за ночь`
    : `Домик рассчитан на ${house.max} ${plural(house.max, "гостя", "гостей", "гостей")}`;

  $("#sumExtras").innerHTML = EXTRAS.map((e) => {
    const avail = extraAvailable(e);
    return `<button type="button" class="chip ${state.extras.has(e.id) ? "is-on" : ""}" data-chip="${e.id}" ${avail ? "" : "disabled"} title="${avail ? `${rub(e.price)} / ${e.unit}` : `Сезон: ${seasonLabel(e)}`}">${e.short}</button>`;
  }).join("");
  $$("[data-chip]").forEach((c) => c.addEventListener("click", () => toggleExtra(c.dataset.chip)));

  const { lines, total, nights } = calcBill();
  $("#bill").innerHTML = lines.length
    ? lines.map(([t, v]) => `<div><dt>${t}</dt><dd>${rub(v)}</dd></div>`).join("")
    : `<div><dt class="bill__empty">${state.start ? "Теперь выберите дату выезда" : "Выберите даты в календаре"}</dt><dd></dd></div>`;

  animateTotal(total);
  $("#sumPrepay").textContent = total ? `${nights} ${plural(nights, "ночь", "ночи", "ночей")} · предоплата 30% — ${rub(total * 0.3)}` : "";

  const submit = $("#bookSubmit");
  submit.disabled = !(state.start && state.end);
  submit.textContent = !state.start ? "Выберите даты" : !state.end ? "Выберите дату выезда" : `Забронировать за ${rub(total)}`;
}

let shownTotal = 0;
let totalRaf;
function animateTotal(target) {
  const el = $("#sumTotal");
  cancelAnimationFrame(totalRaf);
  if (reduceMotion) { shownTotal = target; el.textContent = rub(target); return; }
  const from = shownTotal, t0 = performance.now();
  const step = (t) => {
    const k = clamp((t - t0) / 600, 0, 1);
    shownTotal = from + (target - from) * (1 - Math.pow(1 - k, 3));
    el.textContent = rub(shownTotal);
    if (k < 1) totalRaf = requestAnimationFrame(step);
  };
  totalRaf = requestAnimationFrame(step);
}

function renderBooking() {
  renderHousePicks();
  renderCalendar();
  renderSummary();
  syncExtraButtons();
}

$("#guestsMinus").addEventListener("click", () => { state.guests = Math.max(1, state.guests - 1); renderSummary(); });
$("#guestsPlus").addEventListener("click", () => { state.guests = Math.min(houseById(state.houseId).max, state.guests + 1); renderSummary(); });

const phoneInput = $("#bookForm [name=phone]");
phoneInput.addEventListener("input", () => {
  let digits = phoneInput.value.replace(/\D/g, "");
  if (digits.startsWith("8")) digits = "7" + digits.slice(1);
  if (!digits.startsWith("7")) digits = "7" + digits;
  digits = digits.slice(0, 11);
  const p = digits.slice(1);
  let out = "+7";
  if (p.length) out += ` (${p.slice(0, 3)}`;
  if (p.length >= 3) out += ")";
  if (p.length > 3) out += ` ${p.slice(3, 6)}`;
  if (p.length > 6) out += `-${p.slice(6, 8)}`;
  if (p.length > 8) out += `-${p.slice(8, 10)}`;
  phoneInput.value = out;
});

$("#bookForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.currentTarget;
  const name = form.name.value.trim();
  const phoneOk = form.phone.value.replace(/\D/g, "").length === 11;
  form.name.classList.toggle("is-invalid", !name);
  form.phone.classList.toggle("is-invalid", !phoneOk);
  if (!name || !phoneOk) { toast(!name ? "Как к вам обращаться?" : "Проверьте номер телефона"); return; }

  const house = houseById(state.houseId);
  const { total, nights } = calcBill();
  const code = `ИЗ-${String(state.start.getDate()).padStart(2, "0")}${String(state.start.getMonth() + 1).padStart(2, "0")}-${1000 + (hash(name + form.phone.value) % 9000)}`;
  $("#successText").innerHTML = `${name}, бронь <b>${code}</b> принята.<br>${house.name}, ${fmtDate(state.start, { day: "numeric", month: "long" })} — ${fmtDate(state.end, { day: "numeric", month: "long" })}, ${nights} ${plural(nights, "ночь", "ночи", "ночей")}, ${rub(total)}.<br>Позвоним в течение 15 минут, чтобы подтвердить детали.`;
  $("#summary").hidden = true;
  $("#success").hidden = false;
  form.reset();
});

$("#successReset").addEventListener("click", () => {
  state.start = null; state.end = null; state.extras.clear();
  $("#success").hidden = true;
  $("#summary").hidden = false;
  renderBooking();
});

/* ================= Маршрут ================= */

$$(".way").forEach((w) => w.addEventListener("click", () => {
  $$(".way").forEach((x) => x.classList.toggle("is-active", x === w));
  $$(".way-panel").forEach((p) => p.classList.toggle("is-active", p.dataset.panel === w.dataset.way));
}));

$$(".copy").forEach((b) => b.addEventListener("click", async () => {
  try { await navigator.clipboard.writeText(b.dataset.copy); toast("Координаты скопированы"); }
  catch { toast(b.dataset.copy); }
}));

const road = $("#routeRoad");
const pins = $$(".route__pin");
let roadLen = 0;
function initRoad() {
  roadLen = road.getTotalLength();
  road.style.strokeDasharray = `${roadLen}`;
  road.style.strokeDashoffset = reduceMotion ? "0" : `${roadLen}`;
  updateRoad();
}
function updateRoad() {
  if (!roadLen || reduceMotion) return;
  const r = road.ownerSVGElement.getBoundingClientRect();
  const vh = window.innerHeight;
  const p = clamp((vh * 0.9 - r.top) / (r.height * 0.9), 0, 1);
  road.style.strokeDashoffset = `${roadLen * (1 - p)}`;
  const marks = [0, 0.33, 0.66, 0.97];
  pins.forEach((pin, i) => { pin.style.opacity = p >= marks[i] ? "1" : "0.15"; pin.style.transition = "opacity 400ms"; });
}

/* ================= Отзывы ================= */

function renderReviews() {
  $("#reelTrack").innerHTML = REVIEWS.map((r) => `
    <figure class="quote">
      <span class="quote__season">${r.season} · «${r.house}»</span>
      <blockquote>«${r.text}»</blockquote>
      <footer>
        <span class="quote__avatar" style="background:${r.color}">${r.name.split(" ").map((w) => w[0]).slice(0, 2).join("")}</span>
        <span><b>${r.name}</b><span>${r.city}</span></span>
      </footer>
    </figure>`).join("");
}

const reel = $("#reel");
function updateReelBar() {
  const max = reel.scrollWidth - reel.clientWidth;
  const bar = $("#reelBar");
  const part = reel.clientWidth / reel.scrollWidth;
  bar.style.width = `${part * 100}%`;
  bar.style.transform = `translateX(${max ? (reel.scrollLeft / max) * ((1 - part) / part) * 100 : 0}%)`;
}
reel.addEventListener("scroll", updateReelBar, { passive: true });

let drag = null;
reel.addEventListener("pointerdown", (e) => {
  if (e.pointerType !== "mouse") return;
  drag = { x: e.clientX, left: reel.scrollLeft, moved: false };
});
window.addEventListener("pointermove", (e) => {
  if (!drag) return;
  const dx = e.clientX - drag.x;
  if (Math.abs(dx) > 4) { drag.moved = true; reel.classList.add("is-dragging"); }
  reel.scrollLeft = drag.left - dx;
});
window.addEventListener("pointerup", () => { drag = null; reel.classList.remove("is-dragging"); });

const reelStep = () => ($(".quote", reel)?.offsetWidth || 400) + 40;
$("#reelPrev").addEventListener("click", () => reel.scrollBy({ left: -reelStep(), behavior: "smooth" }));
$("#reelNext").addEventListener("click", () => reel.scrollBy({ left: reelStep(), behavior: "smooth" }));

/* ================= FAQ ================= */

function renderFaq() {
  $("#faqList").innerHTML = FAQ.map((f, i) => `
    <div class="qa reveal" style="--d:${i * 50}ms">
      <button class="qa__q" aria-expanded="false" aria-controls="qa${i}">${f.q}<span class="qa__icon" aria-hidden="true"></span></button>
      <div class="qa__a" id="qa${i}" role="region"><div><p>${f.a}</p></div></div>
    </div>`).join("");
  $$(".qa__q").forEach((q) => q.addEventListener("click", () => {
    const item = q.parentElement;
    const open = !item.classList.contains("is-open");
    item.classList.toggle("is-open", open);
    q.setAttribute("aria-expanded", String(open));
  }));
}

/* ================= Старт ================= */

renderHouses();
renderServices();
renderReviews();
renderFaq();
splitStatement();
initQuick();
renderBooking();
observeReveals();
updateNow();
setInterval(updateNow, 30000);
sizeStars();
sizeParticles();
setSeason(currentSeason);
startSeasonCycle();
initRoad();
updateReelBar();
onHeaderScroll();
updateStatement();
measureSky();
updateToTop();
requestAnimationFrame(loop);
