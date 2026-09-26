/* PuntaBici — idiomas, WhatsApp y menú */
(function () {
  "use strict";

  var PHONES = ["59895542395", "59899007475"];

  var T = {
    es: {
      "title": "PuntaBici | Alquiler de bicicletas a domicilio en Punta del Este",
      "nav.bikes": "Nuestras bicis", "nav.how": "Cómo funciona", "nav.extras": "Extras",
      "nav.zone": "Zona de entrega", "nav.faq": "Preguntas", "nav.contact": "Contacto",
      "cta.book": "Reservar", "cta.wa": "Reservá por WhatsApp", "cta.see": "Ver bicis",
      "cta.avail": "Consultar disponibilidad",
      "hero.eyebrow": "Alquiler de bicis · Punta del Este",
      "hero.title": 'Viví Punta <span class="u-yellow">en bici.</span>',
      "hero.lead": "Te llevamos la bici a tu casa, hotel o apartamento, y pasamos a buscarla cuando terminás. Para toda la familia.",
      "hero.b1": "Entrega a domicilio", "hero.b2": "Casco y candado", "hero.b3": "Bicis para niños",
      "bikes.title": "Nuestras bicis", "bikes.sub": "Tres opciones para recorrer Punta a tu ritmo.",
      "b.paseo.name": "Bicicleta de paseo",
      "b.paseo.desc": "Cómoda y fácil de subir. Ideal para la rambla, la península y las playas, a ritmo tranquilo.",
      "b.paseo.f1": "Cuadro bajo, fácil de subir", "b.paseo.f2": "Asiento ancho y acolchado", "b.paseo.f3": "Cambios y frenos a disco",
      "b.montana.name": "Bicicleta de montaña",
      "b.montana.desc": "Con suspensión y cambios. Para caminos de tierra, los bosques de Punta Ballena o entrenar en vacaciones.",
      "b.montana.f1": "Suspensión delantera", "b.montana.f2": "Cambios para subidas", "b.montana.f3": "Cubiertas de tacos",
      "b.nino.name": "Bicicleta de niño",
      "b.nino.desc": "Livianas y seguras, para que los más chicos también pedaleen.",
      "b.nino.f1": "Suspensión y frenos a disco", "b.nino.f2": "Livianas y fáciles de manejar", "b.nino.f3": "Casco a medida",
      "how.title": "Cómo funciona", "how.sub": "Sin vueltas: en tres pasos estás pedaleando.",
      "how.s1t": "Escribinos", "how.s1": "Por WhatsApp, con las fechas, cuántas bicis y de qué tipo.",
      "how.s2t": "Te la llevamos", "how.s2": "Coordinamos horario y la dejamos lista en tu casa, hotel o apartamento.",
      "how.s3t": "Disfrutá y listo", "how.s3": "Cuando terminás, pasamos a retirarla. Vos no te movés.",
      "ex.title": "Servicios y extras", "ex.sub": "Todo lo que necesitás para salir tranquilo.",
      "ex.e1t": "Entrega y retiro", "ex.e1": "Te la llevamos y la retiramos donde estés.",
      "ex.e2t": "Casco", "ex.e2": "Para adultos y niños, en distintos talles.",
      "ex.e3t": "Candado", "ex.e3": "Para dejar la bici segura en la playa o el centro.",
      "ex.e4t": "Sillita para niño", "ex.e4": "Para llevar a los más chicos en tu bici.",
      "ex.note": "Consultanos por los extras al hacer tu reserva.",
      "zone.title": "Zona de entrega", "zone.sub": "Llevamos y retiramos las bicis en:",
      "zone.note": "¿Estás en otra zona? Escribinos y lo coordinamos.",
      "faq.title": "Preguntas frecuentes",
      "faq.q1": "¿Cómo reservo?", "faq.a1": "Escribinos por WhatsApp con las fechas, la cantidad y el tipo de bicis y la dirección de entrega. Te confirmamos la disponibilidad por ahí mismo.",
      "faq.q2": "¿Por cuánto tiempo puedo alquilar?", "faq.a2": "Por día, por semana o por toda la temporada. Vos elegís.",
      "faq.q3": "¿Cuánto cuesta?", "faq.a3": "Depende de la bici y de los días. Escribinos y te pasamos las tarifas vigentes.",
      "faq.q4": "¿El casco y el candado están incluidos?", "faq.a4": "Consultanos al reservar y te los llevamos junto con la bici.",
      "faq.q5": "¿Qué pasa si se pincha o se rompe?", "faq.a5": "Escribinos y lo resolvemos lo antes posible.",
      "ct.title": "¿Listo para pedalear?", "ct.sub": "Escribinos y reservá tu bici.",
      "ft.tag": "Alquiler de bicicletas a domicilio", "ft.privacy": "Política de privacidad",
      "wa.pick": "¿Con quién querés hablar?",
      "msg.general": "¡Hola PuntaBici! Quiero alquilar bicis.",
      "msg.paseo": "¡Hola PuntaBici! Quiero consultar disponibilidad de una bicicleta de paseo.",
      "msg.montana": "¡Hola PuntaBici! Quiero consultar disponibilidad de una bicicleta de montaña.",
      "msg.nino": "¡Hola PuntaBici! Quiero consultar disponibilidad de una bicicleta de niño."
    },
    en: {
      "title": "PuntaBici | Bike rental delivered to your door in Punta del Este",
      "nav.bikes": "Our bikes", "nav.how": "How it works", "nav.extras": "Extras",
      "nav.zone": "Delivery area", "nav.faq": "FAQ", "nav.contact": "Contact",
      "cta.book": "Book now", "cta.wa": "Book on WhatsApp", "cta.see": "See bikes",
      "cta.avail": "Check availability",
      "hero.eyebrow": "Bike rental · Punta del Este",
      "hero.title": 'Ride Punta <span class="u-yellow">by bike.</span>',
      "hero.lead": "We deliver the bike to your house, hotel or apartment, and pick it up when you're done. For the whole family.",
      "hero.b1": "Home delivery", "hero.b2": "Helmet & lock", "hero.b3": "Kids' bikes",
      "bikes.title": "Our bikes", "bikes.sub": "Three options to explore Punta at your own pace.",
      "b.paseo.name": "City bike",
      "b.paseo.desc": "Comfortable and easy to get on. Perfect for the promenade, the peninsula and the beaches, at an easy pace.",
      "b.paseo.f1": "Low step-through frame", "b.paseo.f2": "Wide padded seat", "b.paseo.f3": "Gears and disc brakes",
      "b.montana.name": "Mountain bike",
      "b.montana.desc": "Suspension and gears. For dirt roads, the Punta Ballena woods, or keeping up your training on holiday.",
      "b.montana.f1": "Front suspension", "b.montana.f2": "Gears for climbs", "b.montana.f3": "Knobby tires",
      "b.nino.name": "Kids' bike",
      "b.nino.desc": "Light and safe, so the little ones can ride too.",
      "b.nino.f1": "Suspension and disc brakes", "b.nino.f2": "Light and easy to handle", "b.nino.f3": "Kid-size helmet",
      "how.title": "How it works", "how.sub": "No hassle: three steps and you're riding.",
      "how.s1t": "Message us", "how.s1": "On WhatsApp, with your dates, how many bikes and which type.",
      "how.s2t": "We deliver", "how.s2": "We agree on a time and leave it ready at your house, hotel or apartment.",
      "how.s3t": "Enjoy", "how.s3": "When you're done, we pick it up. You don't have to go anywhere.",
      "ex.title": "Services & extras", "ex.sub": "Everything you need to ride worry-free.",
      "ex.e1t": "Delivery & pick-up", "ex.e1": "We bring it to you and collect it wherever you are.",
      "ex.e2t": "Helmet", "ex.e2": "For adults and kids, in different sizes.",
      "ex.e3t": "Lock", "ex.e3": "To leave your bike safe at the beach or downtown.",
      "ex.e4t": "Child seat", "ex.e4": "To carry the little ones on your bike.",
      "ex.note": "Ask us about extras when you book.",
      "zone.title": "Delivery area", "zone.sub": "We deliver and pick up bikes in:",
      "zone.note": "Somewhere else? Message us and we'll work it out.",
      "faq.title": "Frequently asked questions",
      "faq.q1": "How do I book?", "faq.a1": "Message us on WhatsApp with your dates, number and type of bikes and delivery address. We'll confirm availability right there.",
      "faq.q2": "How long can I rent for?", "faq.a2": "By the day, by the week or for the whole season. Your choice.",
      "faq.q3": "How much does it cost?", "faq.a3": "It depends on the bike and the number of days. Message us and we'll send you current rates.",
      "faq.q4": "Are helmet and lock included?", "faq.a4": "Just ask when you book and we'll bring them with the bike.",
      "faq.q5": "What if I get a flat or something breaks?", "faq.a5": "Message us and we'll sort it out as soon as possible.",
      "ct.title": "Ready to ride?", "ct.sub": "Message us and book your bike.",
      "ft.tag": "Bike rental delivered to your door", "ft.privacy": "Privacy policy",
      "wa.pick": "Who would you like to talk to?",
      "msg.general": "Hi PuntaBici! I'd like to rent bikes.",
      "msg.paseo": "Hi PuntaBici! I'd like to check availability for a city bike.",
      "msg.montana": "Hi PuntaBici! I'd like to check availability for a mountain bike.",
      "msg.nino": "Hi PuntaBici! I'd like to check availability for a kids' bike."
    },
    pt: {
      "title": "PuntaBici | Aluguel de bicicletas com entrega em Punta del Este",
      "nav.bikes": "Nossas bikes", "nav.how": "Como funciona", "nav.extras": "Extras",
      "nav.zone": "Área de entrega", "nav.faq": "Dúvidas", "nav.contact": "Contato",
      "cta.book": "Reservar", "cta.wa": "Reserve pelo WhatsApp", "cta.see": "Ver bikes",
      "cta.avail": "Consultar disponibilidade",
      "hero.eyebrow": "Aluguel de bikes · Punta del Este",
      "hero.title": 'Viva Punta <span class="u-yellow">de bike.</span>',
      "hero.lead": "Levamos a bike até sua casa, hotel ou apartamento, e buscamos quando você terminar. Para toda a família.",
      "hero.b1": "Entrega em domicílio", "hero.b2": "Capacete e cadeado", "hero.b3": "Bikes infantis",
      "bikes.title": "Nossas bikes", "bikes.sub": "Três opções para conhecer Punta no seu ritmo.",
      "b.paseo.name": "Bicicleta de passeio",
      "b.paseo.desc": "Confortável e fácil de subir. Ideal para a rambla, a península e as praias, com calma.",
      "b.paseo.f1": "Quadro baixo, fácil de subir", "b.paseo.f2": "Banco largo e acolchoado", "b.paseo.f3": "Marchas e freios a disco",
      "b.montana.name": "Mountain bike",
      "b.montana.desc": "Com suspensão e marchas. Para estradas de terra, os bosques de Punta Ballena ou treinar nas férias.",
      "b.montana.f1": "Suspensão dianteira", "b.montana.f2": "Marchas para subidas", "b.montana.f3": "Pneus cravos",
      "b.nino.name": "Bicicleta infantil",
      "b.nino.desc": "Leves e seguras, para os pequenos pedalarem também.",
      "b.nino.f1": "Suspensão e freios a disco", "b.nino.f2": "Leves e fáceis de pilotar", "b.nino.f3": "Capacete infantil",
      "how.title": "Como funciona", "how.sub": "Sem complicação: em três passos você está pedalando.",
      "how.s1t": "Fale com a gente", "how.s1": "Pelo WhatsApp, com as datas, quantas bikes e de que tipo.",
      "how.s2t": "Levamos até você", "how.s2": "Combinamos o horário e deixamos pronta na sua casa, hotel ou apartamento.",
      "how.s3t": "Aproveite", "how.s3": "Quando terminar, buscamos a bike. Você não precisa se deslocar.",
      "ex.title": "Serviços e extras", "ex.sub": "Tudo o que você precisa para pedalar tranquilo.",
      "ex.e1t": "Entrega e retirada", "ex.e1": "Levamos e buscamos onde você estiver.",
      "ex.e2t": "Capacete", "ex.e2": "Para adultos e crianças, em vários tamanhos.",
      "ex.e3t": "Cadeado", "ex.e3": "Para deixar a bike segura na praia ou no centro.",
      "ex.e4t": "Cadeirinha infantil", "ex.e4": "Para levar os pequenos na sua bike.",
      "ex.note": "Pergunte pelos extras ao fazer sua reserva.",
      "zone.title": "Área de entrega", "zone.sub": "Entregamos e buscamos as bikes em:",
      "zone.note": "Está em outra região? Fale com a gente e combinamos.",
      "faq.title": "Perguntas frequentes",
      "faq.q1": "Como faço a reserva?", "faq.a1": "Mande uma mensagem pelo WhatsApp com as datas, a quantidade e o tipo de bikes e o endereço de entrega. Confirmamos a disponibilidade por lá mesmo.",
      "faq.q2": "Por quanto tempo posso alugar?", "faq.a2": "Por dia, por semana ou pela temporada inteira. Você escolhe.",
      "faq.q3": "Quanto custa?", "faq.a3": "Depende da bike e dos dias. Fale com a gente e enviamos os valores atuais.",
      "faq.q4": "O capacete e o cadeado estão incluídos?", "faq.a4": "É só pedir na reserva e levamos junto com a bike.",
      "faq.q5": "E se o pneu furar ou algo quebrar?", "faq.a5": "Fale com a gente e resolvemos o quanto antes.",
      "ct.title": "Pronto para pedalar?", "ct.sub": "Fale com a gente e reserve sua bike.",
      "ft.tag": "Aluguel de bicicletas com entrega", "ft.privacy": "Política de privacidade",
      "wa.pick": "Com quem você quer falar?",
      "msg.general": "Olá PuntaBici! Quero alugar bikes.",
      "msg.paseo": "Olá PuntaBici! Quero consultar a disponibilidade de uma bicicleta de passeio.",
      "msg.montana": "Olá PuntaBici! Quero consultar a disponibilidade de uma mountain bike.",
      "msg.nino": "Olá PuntaBici! Quero consultar a disponibilidade de uma bicicleta infantil."
    }
  };

  var current = "es";

  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }

  function waUrl(phone, key) {
    var msg = (T[current] && T[current]["msg." + key]) || T.es["msg." + key] || T.es["msg.general"];
    return "https://wa.me/" + phone + "?text=" + encodeURIComponent(msg);
  }

  function refreshWaLinks() {
    document.querySelectorAll("[data-wa-link]").forEach(function (a) {
      a.href = waUrl(a.getAttribute("data-wa-link"), a.getAttribute("data-wa-topic") || "general");
    });
  }

  function setLang(lang) {
    if (!T[lang]) lang = "es";
    current = lang;
    var d = T[lang];
    document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;
    document.title = d.title;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n"); if (d[k]) el.textContent = d[k];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-html"); if (d[k]) el.innerHTML = d[k];
    });
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });
    refreshWaLinks();
    store("pb-lang", lang);
  }

  // Idioma inicial: guardado > navegador > español
  var saved = store("pb-lang");
  var nav = (navigator.language || "es").slice(0, 2).toLowerCase();
  setLang(saved || (T[nav] ? nav : "es"));

  document.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
  });

  // Botón flotante de WhatsApp
  var waBtn = document.querySelector(".wa-btn");
  var waPanel = document.getElementById("waPanel");
  function togglePanel(open, topic) {
    var isOpen = open === undefined ? waPanel.hidden : open;
    waPanel.hidden = !isOpen;
    waBtn.setAttribute("aria-expanded", String(isOpen));
    if (isOpen) {
      waPanel.querySelectorAll("[data-wa-link]").forEach(function (a) {
        a.setAttribute("data-wa-topic", topic || "general");
      });
      refreshWaLinks();
    }
  }
  waBtn.addEventListener("click", function (e) { e.stopPropagation(); togglePanel(); });
  document.addEventListener("click", function (e) {
    if (!waPanel.hidden && !waPanel.contains(e.target)) togglePanel(false);
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") togglePanel(false); });

  // Botones "Reservar / Consultar": abren el selector de número con el mensaje de esa bici
  document.querySelectorAll("[data-wa]").forEach(function (b) {
    b.addEventListener("click", function (e) {
      e.stopPropagation();
      togglePanel(true, b.getAttribute("data-wa"));
      waPanel.querySelector("a").focus();
    });
  });

  // Menú mobile
  var toggle = document.querySelector(".menu-toggle");
  var menu = document.getElementById("mainNav");
  toggle.addEventListener("click", function () {
    var open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  menu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { menu.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); });
  });

  // Fotos opcionales: si existe la foto se muestra; si no, queda la ilustración
  document.querySelectorAll("img[data-optional]").forEach(function (img) {
    function ok() { img.parentElement.classList.add("has-photo"); if (img.closest(".hero-art")) img.closest(".hero-art").classList.add("has-photo"); }
    function fail() { img.remove(); }
    if (img.complete) { img.naturalWidth ? ok() : fail(); }
    else { img.addEventListener("load", ok); img.addEventListener("error", fail); }
  });

  var y = document.getElementById("year"); if (y) y.textContent = new Date().getFullYear();
})();
