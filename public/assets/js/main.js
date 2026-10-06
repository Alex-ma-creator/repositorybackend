// ══════════════════════════════════════
// INTRO SPLASH → revela la p\u00e1gina
// ══════════════════════════════════════
window.addEventListener('DOMContentLoaded', () => {

  const intro    = document.getElementById('intro');
  const mainPage = document.getElementById('main-page');

  // ── Animaci\u00f3n letra por letra del t\u00edtulo ──
  // Tomamos el elemento del t\u00edtulo y lo vaciamos
  // luego insertamos cada letra como un <span> individual
  // con un delay escalonado de 0.08s entre cada una
  const introTitle = document.getElementById('intro-title');
  introTitle.innerHTML = '';

  'YURAKUNA'.split('').forEach((letra, i) => {
    const span = document.createElement('span');
    span.textContent = letra;
    span.style.animationDelay = `${0.4 + i * 0.07}s`;
    introTitle.appendChild(span);
  });

  // ── Oculta el intro y revela la p\u00e1gina despu\u00e9s de 4.2s ──
  // 4.2s es suficiente para que todas las animaciones
  // del intro terminen antes de hacer la transici\u00f3n
  setTimeout(() => {
    intro.classList.add('hide');
    mainPage.classList.add('visible');

    // Una vez que termina el fade del intro, lo eliminamos
    // del DOM para que no ocupe memoria ni interfiera
    intro.addEventListener('transitionend', () => {
      intro.remove();
    }, { once: true });

  }, 4200);


  // ══════════════════════════════════════
  // NAV: efecto al hacer scroll
  // ══════════════════════════════════════
  // Agrega la clase 'scrolled' cuando el usuario
  // baja m\u00e1s de 60px — activa el fondo oscuro del nav
  const nav = document.getElementById('top-nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });


  // ══════════════════════════════════════
  // HAMBURGER: men\u00fa mobile
  // ══════════════════════════════════════
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  // Abre y cierra el men\u00fa al tocar el \u00edcono
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });

  // Cierra el men\u00fa autom\u00e1ticamente al tocar cualquier link
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
    });
  });

});

// ══════════════════════════════════════
// IDIOMAS: dropdown desplegable & traducci\u00f3n
// ══════════════════════════════════════
let currentLang = 'ES';

const TRANSLATIONS = {
  ES: {
    nav_about: "Nosotros",
    nav_exp: "Experiencias",
    nav_gallery: "Galer\u00eda",
    nav_location: "Ubicaci\u00f3n",
    nav_booking: "Reservar",
    
    hero_sub: "Sabores que trascienden en el coraz\u00f3n de la Ciudad Blanca.",
    hero_menu_btn: "Ver la carta",
    hero_directions_btn: "C\u00f3mo llegar",
    
    metric_1_unit: "a\u00f1os",
    metric_1_label: "de historia",
    metric_2_label: "Vegano",
    metric_3_label: "valoraci\u00f3n en Google",
    
    about_eyebrow: "Nuestra Historia",
    about_title: "Cocina peruana vegana<br>con alma arequipe\u00f1a",
    about_body_1: "Nacimos en 2018 con una convicci\u00f3n: demostrar que la cocina vegana puede ser tan vibrante, compleja y satisfactoria como cualquier propuesta de alta cocina. Cada plato honra los insumos locales, la t\u00e9cnica y la herencia culinaria del Per\u00fa.",
    about_body_2: "Ubicados en el coraz\u00f3n del Centro Hist\u00f3rico de Arequipa, nuestra mesa es un espacio donde el sabor, el respeto por la tierra y la creatividad se encuentran.",
    about_cta: "Encu\u00e9ntranos",
    
    exp_eyebrow: "Experiencias Culinarias",
    exp_title: "Momentos Singulares",
    exp_subtitle: "Propuestas dise\u00f1adas para sumergirse en los sabores de nuestra cocina y el misticismo de Arequipa.",
    exp_1_eyebrow: "Arequipa en 6 Tiempos",
    exp_1_title: "Men\u00fa de Degustaci\u00f3n",
    exp_1_body: "Un recorrido sensorial por la campi\u00f1a arequipe\u00f1a y sus insumos ancestrales. Seis platos creados por nuestro chef para explorar la riqueza bot\u00e1nica del sur peruano, armonizados con una selecci\u00f3n exclusiva de bebidas org\u00e1nicas.",
    exp_1_cta: "Reservar Experiencia",
    
    exp_2_eyebrow: "Alquimia y Naturaleza",
    exp_2_title: "Maridaje & Cocteler\u00eda Bot\u00e1nica",
    exp_2_body: "Nuestra barra rinde homenaje a las hierbas nativas y destilados locales. Experimente un maridaje exclusivo guiado por nuestro sommelier, disfrutando de c\u00f3cteles de autor, fermentos de la casa y vinos biodin\u00e1micos.",
    exp_2_cta: "Consultar Reserva",
    
    exp_3_eyebrow: "M\u00edstica e Historia",
    exp_3_title: "Cena Privada en B\u00f3veda de Sillar",
    exp_3_body: "Viva una velada \u00edntima bajo las hist\u00f3ricas b\u00f3vedas coloniales de sillar del siglo XVIII. Un espacio de privacidad absoluta con servicio exclusivo de camarero, dise\u00f1o floral a medida y un men\u00fa degustaci\u00f3n personalizado.",
    exp_3_cta: "Solicitar Espacio",
    
    gallery_eyebrow: "Visuales del Alma",
    gallery_title: "Galer\u00eda de Yurakuna",
    gallery_subtitle: "Cada plato es una obra de arte; cada rinc\u00f3n cuenta una historia. Explore nuestra propuesta visual.",
    gallery_filter_all: "Todos",
    gallery_filter_entradas: "Entradas",
    gallery_filter_fondos: "Fondos",
    gallery_filter_postres: "Postres",
    gallery_filter_ambiente: "El Espacio",
    gallery_load_more: "Ver m\u00e1s im\u00e1genes",
    
    location_eyebrow: "Ubicaci\u00f3n y Reservas",
    location_title: "Encu\u00e9ntranos en la Ciudad Blanca",
    location_item_1_title: "Direcci\u00f3n",
    location_item_1_body: "C. Jerusalén 201-D, Arequipa 04002, Perú",
    location_item_2_title: "Reservas y Consultas",
    location_item_3_title: "Horario de Atenci\u00f3n",
    location_item_3_body: "Lunes a S\u00e1bado: 12:00 PM – 10:00 PM<br>Domingos: Cerrado",
    location_cta: "C\u00f3mo Llegar",
    
    footer_tagline: "Cocina peruana vegana con alma arequipe\u00f1a. Sabores que trascienden en el coraz\u00f3n de la Ciudad Blanca.",
    footer_nav_title: "Navegaci\u00f3n",
    footer_hours_highlight: "Se sugiere reserva previa",
    footer_copyright: "&copy; 2026 Yurakuna. Todos los derechos reservados. Cocina Peruana Vegana.",
    footer_credit: "Desarrollado con alma para un templo gastron\u00f3mico.",
    
    reserva_title: "Reservar una Mesa",
    reserva_subtitle: "Complete los detalles para solicitar su experiencia gastron\u00f3mica en Yurakuna.",
    reserva_lbl_name: "Nombre Completo",
    reserva_lbl_email: "Correo Electr\u00f3nico",
    reserva_lbl_phone: "Tel\u00e9fono / WhatsApp",
    reserva_lbl_guests: "N\u00famero de Comensales",
    reserva_lbl_date: "Fecha",
    reserva_lbl_time: "Hora",
    reserva_lbl_exp: "Experiencia Elegida",
    reserva_lbl_notes: "Requerimientos Especiales / Alergias",
    reserva_submit_btn: "Solicitar Reserva",
    
    reserva_opt_guest_1: "1 Persona",
    reserva_opt_guest_2: "2 Personas",
    reserva_opt_guest_3: "3 Personas",
    reserva_opt_guest_4: "4 Personas",
    reserva_opt_guest_5: "5 Personas",
    reserva_opt_guest_6: "6 Personas",
    reserva_opt_guest_7: "7 Personas",
    reserva_opt_guest_8: "8+ Personas (Evento Especial)",
    
    reserva_opt_time_placeholder: "Seleccione un horario",
    reserva_opt_general: "Mesa General (A la Carta)",
    reserva_opt_degustacion: "Men\u00fa de Degustaci\u00f3n (6 Tiempos)",
    reserva_opt_maridaje: "Maridaje & Cocteler\u00eda Bot\u00e1nica",
    reserva_opt_boveda: "Cena Privada en B\u00f3veda de Sillar",
    
    reserva_success_title: "Solicitud Recibida",
    reserva_success_subtitle: "Hemos recibido su solicitud de reserva. Nuestro equipo verificar\u00e1 disponibilidad y se pondr\u00e1 en contacto con usted en breve a trav\u00e9s de correo o WhatsApp.",
    reserva_success_btn: "Entendido"
  },
  EN: {
    nav_about: "About Us",
    nav_exp: "Experiences",
    nav_gallery: "Gallery",
    nav_location: "Location",
    nav_booking: "Book",
    
    hero_sub: "Flavors that transcend in the heart of the White City.",
    hero_menu_btn: "View Menu",
    hero_directions_btn: "Directions",
    
    metric_1_unit: "years",
    metric_1_label: "of history",
    metric_2_label: "Vegan",
    metric_3_label: "Google rating",
    
    about_eyebrow: "Our Story",
    about_title: "Vegan Peruvian cuisine<br>with Arequipa's soul",
    about_body_1: "We were born in 2018 with one conviction: to prove that vegan cuisine can be as vibrant, complex, and satisfying as any fine dining proposal. Each dish honors local ingredients, technique, and Peru's culinary heritage.",
    about_body_2: "Located in the heart of Arequipa's Historical Center, our table is a space where flavor, respect for the land, and creativity meet.",
    about_cta: "Find Us",
    
    exp_eyebrow: "Culinary Experiences",
    exp_title: "Singular Moments",
    exp_subtitle: "Proposals designed to immerse yourself in the flavors of our cuisine and the mysticism of Arequipa.",
    exp_1_eyebrow: "Arequipa in 6 Courses",
    exp_1_title: "Tasting Menu",
    exp_1_body: "A sensory journey through the Arequipa countryside and its ancestral ingredients. Six dishes designed by our chef to explore the botanical richness of southern Peru, paired with an exclusive selection of organic drinks.",
    exp_1_cta: "Book Experience",
    
    exp_2_eyebrow: "Alchemy and Nature",
    exp_2_title: "Pairing & Botanical Cocktails",
    exp_2_body: "Our bar pays tribute to native herbs and local distillates. Experience an exclusive pairing guided by our sommelier, enjoying signature cocktails, house ferments, and biodynamic wines.",
    exp_2_cta: "Inquire Booking",
    
    exp_3_eyebrow: "Mysticism and History",
    exp_3_title: "Private Dinner in Sillar Vault",
    exp_3_body: "Live an intimate evening under the historic 18th-century sillar colonial vaults. An absolute privacy space with exclusive waiter service, custom floral design, and a personalized tasting menu.",
    exp_3_cta: "Request Space",
    
    gallery_eyebrow: "Visuals of the Soul",
    gallery_title: "Yurakuna's Gallery",
    gallery_subtitle: "Each dish is a work of art; each corner tells a story. Explore our visual proposal.",
    gallery_filter_all: "All",
    gallery_filter_entradas: "Starters",
    gallery_filter_fondos: "Mains",
    gallery_filter_postres: "Desserts",
    gallery_filter_ambiente: "The Space",
    gallery_load_more: "Load more images",
    
    location_eyebrow: "Location & Reservations",
    location_title: "Find Us in the White City",
    location_item_1_title: "Address",
    location_item_1_body: "C. Jerusalén 201-D, Arequipa 04002, Peru",
    location_item_2_title: "Reservations & Inquiries",
    location_item_3_title: "Opening Hours",
    location_item_3_body: "Monday to Saturday: 12:00 PM – 10:00 PM<br>Sundays: Closed",
    location_cta: "Directions",
    
    footer_tagline: "Vegan Peruvian cuisine with Arequipa's soul. Flavors that transcend in the heart of the White City.",
    footer_nav_title: "Navigation",
    footer_hours_highlight: "Prior reservation is recommended",
    footer_copyright: "&copy; 2026 Yurakuna. All rights reserved. Vegan Peruvian Cuisine.",
    footer_credit: "Developed with soul for a culinary temple.",
    
    reserva_title: "Book a Table",
    reserva_subtitle: "Complete the details to request your culinary experience at Yurakuna.",
    reserva_lbl_name: "Full Name",
    reserva_lbl_email: "Email Address",
    reserva_lbl_phone: "Phone / WhatsApp",
    reserva_lbl_guests: "Number of Guests",
    reserva_lbl_date: "Date",
    reserva_lbl_time: "Time",
    reserva_lbl_exp: "Selected Experience",
    reserva_lbl_notes: "Special Requests / Allergies",
    reserva_submit_btn: "Request Reservation",
    
    reserva_opt_guest_1: "1 Guest",
    reserva_opt_guest_2: "2 Guests",
    reserva_opt_guest_3: "3 Guests",
    reserva_opt_guest_4: "4 Guests",
    reserva_opt_guest_5: "5 Guests",
    reserva_opt_guest_6: "6 Guests",
    reserva_opt_guest_7: "7 Guests",
    reserva_opt_guest_8: "8+ Guests (Special Event)",
    
    reserva_opt_time_placeholder: "Select a time slot",
    reserva_opt_general: "General Table (A la Carte)",
    reserva_opt_degustacion: "Tasting Menu (6 Courses)",
    reserva_opt_maridaje: "Pairing & Botanical Cocktails",
    reserva_opt_boveda: "Private Dinner in Sillar Vault",
    
    reserva_success_title: "Request Received",
    reserva_success_subtitle: "We have received your reservation request. Our team will verify availability and contact you shortly via email or WhatsApp.",
    reserva_success_btn: "Understood"
  },
  FR: {
    nav_about: "Qui sommes-nous",
    nav_exp: "Exp\u00e9riences",
    nav_gallery: "Galerie",
    nav_location: "Emplacement",
    nav_booking: "R\u00e9server",
    
    hero_sub: "Des saveurs qui transcendent au cœur de la Ville Blanche.",
    hero_menu_btn: "Voir la carte",
    hero_directions_btn: "S'y rendre",
    
    metric_1_unit: "ans",
    metric_1_label: "d'histoire",
    metric_2_label: "V\u00e9g\u00e9talien",
    metric_3_label: "\u00e9valuation sur Google",
    
    about_eyebrow: "Notre Histoire",
    about_title: "Cuisine p\u00e9ruvienne v\u00e9g\u00e9talienne<br>avec l'\u00e2me d'Arequipa",
    about_body_1: "Nous sommes n\u00e9s en 2018 avec une conviction : prouver que la cuisine v\u00e9g\u00e9talienne peut \u00eatre aussi vibrante, complexe et satisfaisante que n'importe quelle proposition de haute cuisine. Chaque plat honore les ingr\u00e9dients locaux, la technique et l'h\u00e9ritage culinaire du P\u00e9rou.",
    about_body_2: "Situ\u00e9 au cœur du centre historique d'Arequipa, notre table est un espace où se rencontrent le go\u00fbt, le respect de la terre et la cr\u00e9ativit\u00e9.",
    about_cta: "Nous Trouver",
    
    exp_eyebrow: "Exp\u00e9riences Culinaires",
    exp_title: "Moments Singuliers",
    exp_subtitle: "Des propositions con\u00e7ues pour vous immerger dans les saveurs de notre cuisine et le mysticisme d'Arequipa.",
    exp_1_eyebrow: "Arequipa en 6 Services",
    exp_1_title: "Menu de D\u00e9gustation",
    exp_1_body: "Un voyage sensoriel \u00e0 travers la campagne d'Arequipa et ses ingr\u00e9dients ancestraux. Six plats cr\u00e9\u00e9s par notre chef pour explorer la richesse botanique du sud du P\u00e9rou, harmonis\u00e9s avec une s\u00e9lection exclusive de boissons biologiques.",
    exp_1_cta: "R\u00e9server l'Exp\u00e9rience",
    
    exp_2_eyebrow: "Alchimie et Nature",
    exp_2_title: "Accord & Cocktails Botaniques",
    exp_2_body: "Notre bar rend hommage aux herbes indig\u00e8nes et aux distillats locaux. D\u00e9couvrez un accord exclusif guid\u00e9 par notre sommelier, en d\u00e9gustant des cocktails signature, des ferments maison et des vins biodinaminques.",
    exp_2_cta: "S'informer sur la R\u00e9servation",
    
    exp_3_eyebrow: "Mysticisme et Histoire",
    exp_3_title: "D\u00eener Priv\u00e9 sous la Vo\u00fbte de Sillar",
    exp_3_body: "Vivez une soir\u00e9e intime sous les vo\u00fbtes coloniales en sillar du XVIIIe si\u00e8cle. Un espace d'intimit\u00e9 absolue avec service de serveur exclusif, design floral sur mesure et menu de d\u00e9gustation personnalis\u00e9.",
    exp_3_cta: "Demander l'Espace",
    
    gallery_eyebrow: "Visuels de l'\u00c2me",
    gallery_title: "Galerie de Yurakuna",
    gallery_subtitle: "Chaque plat \u00e9e une œuvre d'art; chaque coin raconte une histoire. Explorez notre proposition visuelle.",
    gallery_filter_all: "Tout",
    gallery_filter_entradas: "Entr\u00e9es",
    gallery_filter_fondos: "Plats",
    gallery_filter_postres: "Desserts",
    gallery_filter_ambiente: "L'Espace",
    gallery_load_more: "Voir plus d'images",
    
    location_eyebrow: "Emplacement & R\u00e9servations",
    location_title: "Trouvez-nous dans la Ville Blanche",
    location_item_1_title: "Adresse",
    location_item_1_body: "C. Jerusalén 201-D, Arequipa 04002, Pérou",
    location_item_2_title: "R\u00e9servations & Informations",
    location_item_3_title: "Heures d'Ouverture",
    location_item_3_body: "Lundi au Samedi: 12h00 – 22h00<br>Dimanche: Ferm\u00e9",
    location_cta: "S'y Rendre",
    
    footer_tagline: "Cuisine p\u00e9ruvienne v\u00e9g\u00e9talienne avec l'\u00e2me d'Arequipa. Des saveurs qui transcendent au cœur de la Ville Blanche.",
    footer_nav_title: "Navigation",
    footer_hours_highlight: "Une r\u00e9servation pr\u00e9alable est sugg\u00e9r\u00e9e",
    footer_copyright: "&copy; 2026 Yurakuna. Tous droits r\u00e9serv\u00e9s. Cuisine P\u00e9ruvienne V\u00e9g\u00e9talienne.",
    footer_credit: "D\u00e9velopp\u00e9 avec \u00e2me pour un temple culinaire.",
    
    reserva_title: "R\u00e9server une Table",
    reserva_subtitle: "Remplissez les d\u00e9tails pour demander votre exp\u00e9rience culinaire \u00e0 Yurakuna.",
    reserva_lbl_name: "Nom Complet",
    reserva_lbl_email: "Adresse E-mail",
    reserva_lbl_phone: "T\u00e9l\u00e9phone / WhatsApp",
    reserva_lbl_guests: "Nombre de Convives",
    reserva_lbl_date: "Date",
    reserva_lbl_time: "Heure",
    reserva_lbl_exp: "Exp\u00e9rience S\u00e9lectionn\u00e9e",
    reserva_lbl_notes: "Demandes Sp\u00e9ciales / Allergies",
    reserva_submit_btn: "Demander la R\u00e9servation",
    
    reserva_opt_guest_1: "1 Personne",
    reserva_opt_guest_2: "2 Personnes",
    reserva_opt_guest_3: "3 Personnes",
    reserva_opt_guest_4: "4 Personnes",
    reserva_opt_guest_5: "5 Personnes",
    reserva_opt_guest_6: "6 Personnes",
    reserva_opt_guest_7: "7 Personnes",
    reserva_opt_guest_8: "8+ Personnes (\u00c9v\u00e9nement Sp\u00e9cial)",
    
    reserva_opt_time_placeholder: "S\u00e9lectionnez un horaire",
    reserva_opt_general: "Table G\u00e9n\u00e9rale (\u00c0 la Carte)",
    reserva_opt_degustacion: "Menu D\u00e9gustation (6 Services)",
    reserva_opt_maridaje: "Accord & Cocktails Botaniques",
    reserva_opt_boveda: "D\u00eener Priv\u00e9 sous la Vo\u00fbte",
    
    reserva_success_title: "Demande Re\u00e7ue",
    reserva_success_subtitle: "Nous avons re\u00e7u votre demande de r\u00e9servation. Notre \u00e9quipe v\u00e9rifiera la disponibilit\u00e9 et vous contactera sous peu par e-mail ou WhatsApp.",
    reserva_success_btn: "Compris"
  },
  PT: {
    nav_about: "Sobre n\u00f3s",
    nav_exp: "Experi\u00eancias",
    nav_gallery: "Galeria",
    nav_location: "Localiza\u00e7\u00e3o",
    nav_booking: "Reservar",
    
    hero_sub: "Sabores que transcendem no cora\u00e7\u00e3o da Cidade Branca.",
    hero_menu_btn: "Ver o Menu",
    hero_directions_btn: "Como chegar",
    
    metric_1_unit: "anos",
    metric_1_label: "de hist\u00f3ria",
    metric_2_label: "Vegano",
    metric_3_label: "avalia\u00e7\u00e3o no Google",
    
    about_eyebrow: "Nossa Hist\u00f3ria",
    about_title: "Cozinha peruana vegana<br>com alma arequipenha",
    about_body_1: "Nascemos en 2018 com uma convic\u00e7\u00e3o: provar que a cozinha vegana pode ser t\u00e3o vibrante, complexa e satisfat\u00f3ria como qualquer proposta de alta gastronomia. Cada prato honra os ingredientes locais, a t\u00e9cnica e a heran\u00e7a culin\u00e1ria do Peru.",
    about_body_2: "Localizado no cora\u00e7\u00e3o do Centro Hist\u00f3rico de Arequipa, nossa mesa \u00e9 um espa\u00e7o onde o sabor, o respeito pela terra e a criatividade se encontram.",
    about_cta: "Encontre-nos",
    
    exp_eyebrow: "Experi\u00eancias Culin\u00e1rias",
    exp_title: "Momentos Singulares",
    exp_subtitle: "Propostas concebidas para mergulhar nos sabores da nossa cozinha e no misticismo de Arequipa.",
    exp_1_eyebrow: "Arequipa em 6 Tempos",
    exp_1_title: "Menu de Degusta\u00e7\u00e3o",
    exp_1_body: "Uma viagem sensorial pela campanha de Arequipa e seus insumos ancestrais. Seis pratos criados pelo nosso chef para explorar a riqueza bot\u00e2nica do sul do Peru, harmonizados con uma sele\u00e7\u00e3o exclusiva de bebidas org\u00e2nicas.",
    exp_1_cta: "Reservar Experi\u00eancia",
    
    exp_2_eyebrow: "Alquimia e Natureza",
    exp_2_title: "Harmoniza\u00e7\u00e3o & Coquetelaria Bot\u00e2nica",
    exp_2_body: "Nosso bar presta homenagem \u00e0s ervas nativas e destilados locais. Experimente uma harmoniza\u00e7\u00e3o exclusiva guiada pelo nosso sommelier, desfrutando de coquet\u00e9is de autor, fermentados da casa e vinhos biodin\u00e2micos.",
    exp_2_cta: "Consultar Reserva",
    
    exp_3_eyebrow: "M\u00edstica e Hist\u00f3ria",
    exp_3_title: "Jantar Privado em B\u00f3veda de Sillar",
    exp_3_body: "Viva uma noite \u00edntima sob as hist\u00f3ricas ab\u00f3badas coloniais de sillar do s\u00e9culo XVIII. Um espa\u00e7o de privacidade absoluta com servi\u00e7o de gar\u00e7om exclusivo, design floral personalizado e um menu de degusta\u00e7\u00e3o feito sob medida.",
    exp_3_cta: "Solicitar Espa\u00e7o",
    
    gallery_eyebrow: "Visuais da Alma",
    gallery_title: "Galeria de Yurakuna",
    gallery_subtitle: "Cada prato \u00e9 uma obra de arte; cada detalhe conta uma hist\u00f3ria. Explore nossa proposta visual.",
    gallery_filter_all: "Todos",
    gallery_filter_entradas: "Entradas",
    gallery_filter_fondos: "Pratos",
    gallery_filter_postres: "Sobremesas",
    gallery_filter_ambiente: "O Espa\u00e7o",
    gallery_load_more: "Ver mais imagens",
    
    location_eyebrow: "Localiza\u00e7\u00e3o & Reservas",
    location_title: "Encontre-nos na Cidade Branca",
    location_item_1_title: "Endere\u00e7o",
    location_item_1_body: "C. Jerusalén 201-D, Arequipa 04002, Peru",
    location_item_2_title: "Reservas & Consultas",
    location_item_3_title: "Hor\u00e1rio de Funcionamento",
    location_item_3_body: "Segunda a S\u00e1bado: 12h00 – 22h00<br>Domingos: Fechado",
    location_cta: "Como Chegar",
    
    footer_tagline: "Cozinha peruana vegana com alma arequipenha. Sabores que transcendem no cora\u00e7\u00e3o da Cidade Branca.",
    footer_nav_title: "Navega\u00e7\u00e3o",
    footer_hours_highlight: "Recomenda-se reserva pr\u00e9via",
    footer_copyright: "&copy; 2026 Yurakuna. Todos os direitos reservados. Cozinha Peruana Vegana.",
    footer_credit: "Desenvolvido com alma para um templo gastron\u00f4mico.",
    
    reserva_title: "Reservar uma Mesa",
    reserva_subtitle: "Preencha os detalhes para solicitar sua experi\u00eancia gastronomica em Yurakuna.",
    reserva_lbl_name: "Nome Completo",
    reserva_lbl_email: "E-mail",
    reserva_lbl_phone: "Telefone / WhatsApp",
    reserva_lbl_guests: "N\u00famero de Clientes",
    reserva_lbl_date: "Data",
    reserva_lbl_time: "Hora",
    reserva_lbl_exp: "Experi\u00eancia Escolhida",
    reserva_lbl_notes: "Requisitos Especiais / Alergias",
    reserva_submit_btn: "Solicitar Reserva",
    
    reserva_opt_guest_1: "1 Cliente",
    reserva_opt_guest_2: "2 Clientes",
    reserva_opt_guest_3: "3 Clientes",
    reserva_opt_guest_4: "4 Clientes",
    reserva_opt_guest_5: "5 Clientes",
    reserva_opt_guest_6: "6 Clientes",
    reserva_opt_guest_7: "7 Clientes",
    reserva_opt_guest_8: "8+ Clientes (Evento Especial)",
    
    reserva_opt_time_placeholder: "Selecione um hor\u00e1rio",
    reserva_opt_general: "Mesa Geral (\u00c0 la Carta)",
    reserva_opt_degustacion: "Menu de Degusta\u00e7\u00e3o (6 Tempos)",
    reserva_opt_maridaje: "Harmoniza\u00e7\u00e3o & Coquetelaria Bot\u00e2nica",
    reserva_opt_boveda: "Jantar Privado em B\u00f3veda",
    
    reserva_success_title: "Solicita\u00e7\u00e3o Recebida",
    reserva_success_subtitle: "Recebemos sua solicita\u00e7\u00e3o de reserva. Nossa equipe verificar\u00e1 a disponibilidade e entrar\u00e1 em contato em breve por e-mail ou WhatsApp.",
    reserva_success_btn: "Entendido"
  }
};

function initLanguageSelector() {
  const langDropdown = document.getElementById('lang-dropdown');
  const langTrigger  = document.getElementById('lang-trigger');

  if (!langDropdown || !langTrigger) return;

  langTrigger.addEventListener('click', (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle('open');
  });

  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.dataset.lang;
      changeLanguage(selectedLang);
      langDropdown.classList.remove('open');
    });
  });

  document.addEventListener('click', () => {
    langDropdown.classList.remove('open');
  });
}

function changeLanguage(lang) {
  currentLang = lang;
  
  // Actualizar indicador superior
  const langCurrent = document.getElementById('lang-current');
  if (langCurrent) {
    langCurrent.textContent = lang;
  }
  
  // Actualizar clase activa en dropdown
  document.querySelectorAll('.lang-option').forEach(btn => {
    if (btn.dataset.lang === lang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Traducir todos los elementos con data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      el.innerHTML = TRANSLATIONS[lang][key];
    }
  });

  // Re-renderizar galer\u00eda con textos en el nuevo idioma
  if (typeof filterAndRenderGallery === 'function') {
    filterAndRenderGallery(false);
  }
  
  // Actualizar paginador de la carta si est\u00e1 visible
  if (typeof updateBookUI === 'function' && pdfDoc) {
    updateBookUI();
  }
}

// ══════════════════════════════════════
// SCROLL REVEAL
// ══════════════════════════════════════
function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up');
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(el => revealObs.observe(el));
}

// ══════════════════════════════════════
// M\u00d3DULO DE LA GALER\u00cdA PROFESIONAL
// ══════════════════════════════════════
const GALLERY_IMAGES = [
  {
    url: 'galeria/WhatsApp Image 2026-06-27 at 3.25.17 PM.jpeg',
    category: 'entradas',
    title: { ES: 'Ceviche Yurakuna', EN: 'Yurakuna Ceviche', FR: 'Ceviche Yurakuna', PT: 'Ceviche Yurakuna' },
    desc: {
      ES: 'L\u00e1minas de champi\u00f1ones y mango en leche de tigre de rocoto.',
      EN: 'Sliced mushrooms and mango in rocoto tiger\'s milk.',
      FR: 'Lamelles de champignons et mangue dans un lait de tigre au rocoto.',
      PT: 'L\u00e2minas de cogumelos e manga em leite de tigre de rocoto.'
    }
  },
  {
    url: 'galeria/WhatsApp Image 2026-06-27 at 3.25.17 PM (1).jpeg',
    category: 'postres',
    title: { ES: 'Pasi\u00f3n de Chocolate', EN: 'Chocolate Passion', FR: 'Passion de Chocolat', PT: 'Paix\u00e3o de Chocolate' },
    desc: {
      ES: 'Cacao org\u00e1nico con texturas de frutos rojos y menta.',
      EN: 'Organic cocoa with red fruit textures and mint.',
      FR: 'Cacao biologique avec textures de fruits rouges et menthe.',
      PT: 'Cacau org\u00e2nico com texturas de frutas vermelhas e hortel\u00e3.'
    }
  },
  {
    url: 'galeria/WhatsApp Image 2026-06-27 at 3.25.17 PM (2).jpeg',
    category: 'fondos',
    title: { ES: 'Risotto de Setas', EN: 'Mushroom Risotto', FR: 'Risotto aux Champignons', PT: 'Risoto de Cogumelos' },
    desc: {
      ES: 'Arroz arborio cremoso con hongos silvestres de la regi\u00f3n.',
      EN: 'Creamy arborio rice with regional wild mushrooms.',
      FR: 'Riz arborio cr\u00e9meux aux champignons sauvages de la r\u00e9gion.',
      PT: 'Arroz arb\u00f3reo cremoso com cogumelos silvestres da regi\u00e3o.'
    }
  },
  {
    url: 'galeria/WhatsApp Image 2026-06-27 at 3.25.18 PM.jpeg',
    category: 'ambiente',
    title: { ES: 'Sal\u00f3n Principal', EN: 'Main Dining Room', FR: 'Salle Principale', PT: 'Sal\u00e3o Principal' },
    desc: {
      ES: 'Elegancia colonial esculpida en sillar arequipe\u00f1o.',
      EN: 'Colonial elegance carved in Arequipa\'s sillar stone.',
      FR: '\u00c9l\u00e9gance coloniale sculpt\u00e9e dans la pierre de sillar d\'Arequipa.',
      PT: 'Eleg\u00e2ncia colonial esculpida em sillar arequipenho.'
    }
  },
  {
    url: 'galeria/WhatsApp Image 2026-06-27 at 3.25.20 PM.jpeg',
    category: 'entradas',
    title: { ES: 'Causa Andina', EN: 'Andean Causa', FR: 'Causa Andine', PT: 'Causa Andina' },
    desc: {
      ES: 'Papa amarilla con palta, pur\u00e9 de arvejas y alioli de ajo asado.',
      EN: 'Yellow potato with avocado, pea puree, and roasted garlic aioli.',
      FR: 'Pomme de terre jaune \u00e0 l\'avocat, pur\u00e9e de petits pois et aïoli d\'ail r\u00f4ti.',
      PT: 'Batata amarela com abacate, pur\u00ea de ervilhas e maionese de alho assado.'
    }
  },
  {
    url: 'galeria/WhatsApp Image 2026-06-27 at 3.25.20 PM (1).jpeg',
    category: 'postres',
    title: { ES: 'Mousse de L\u00facuma', EN: 'Lucuma Mousse', FR: 'Mousse de Lucuma', PT: 'Mousse de L\u00facuma' },
    desc: {
      ES: 'Crema sedosa con crujiente de quinua pop y chocolate.',
      EN: 'Silky cream with crunchy popped quinoa and chocolate.',
      FR: 'Cr\u00e8me soyeuse au quinoa souffl\u00e9 croustillant et chocolat.',
      PT: 'Creme sedoso com crocante de pipoca de quinua e chocolate.'
    }
  },
  {
    url: 'galeria/WhatsApp Image 2026-06-27 at 3.25.20 PM (2).jpeg',
    category: 'fondos',
    title: { ES: 'Tac Tac Arom\u00e1tico', EN: 'Aromatic Tacu Tacu', FR: 'Tacu Tacu Aromatique', PT: 'Tacu Tacu Arom\u00e1tico' },
    desc: {
      ES: 'Frijol y arroz dorado con salsa de mariscos vegana y salsa criolla.',
      EN: 'Pan-seared rice and beans with vegan seafood sauce and salsa criolla.',
      FR: 'Riz et haricots po\u00eal\u00e9s avec sauce aux fruits de mer v\u00e9g\u00e9talienne et salsa criolla.',
      PT: 'Feij\u00e3o e arroz dourado com molho de frutos do mar vegano e salsa criolla.'
    }
  },
  {
    url: 'galeria/WhatsApp Image 2026-06-27 at 3.25.21 PM.jpeg',
    category: 'entradas',
    title: { ES: 'Tiradito Ancestral', EN: 'Ancestral Tiradito', FR: 'Tiradito Ancestral', PT: 'Tiradito Ancestral' },
    desc: {
      ES: 'Cortes finos de camote y l\u00e1minas marinas con aj\u00ed amarillo.',
      EN: 'Fine slices of sweet potato and marine layers with yellow chili.',
      FR: 'Fines tranches de patate douce et couches marines au piment jaune.',
      PT: 'Cortes finos de batata-doce e l\u00e2minas marinhas com pimenta amarela.'
    }
  },
  {
    url: 'galeria/WhatsApp Image 2026-06-27 at 3.25.21 PM (1).jpeg',
    category: 'ambiente',
    title: { ES: 'Detalles Singulares', EN: 'Singular Details', FR: 'D\u00e9tails Singuliers', PT: 'Detalhes Singulares' },
    desc: {
      ES: 'Rincones llenos de m\u00edstica e iluminaci\u00f3n c\u00e1lida.',
      EN: 'Corners full of mysticism and warm lighting.',
      FR: 'Coins pleins de mysticisme et d\'\u00e9clairage chaleureux.',
      PT: 'Cantos cheios de m\u00edstica e ilumina\u00e7\u00e3o aconchegante.'
    }
  },
  {
    url: 'galeria/WhatsApp Image 2026-06-27 at 3.25.21 PM (2).jpeg',
    category: 'fondos',
    title: { ES: 'Seco Yurakuna', EN: 'Yurakuna Seco', FR: 'Seco Yurakuna', PT: 'Seco Yurakuna' },
    desc: {
      ES: 'Guiso de seit\u00e1n al cilantro con frijoles y arroz jazm\u00edn.',
      EN: 'Seitan stew with cilantro sauce, served with beans and jasmine rice.',
      FR: 'Rago\u00fbt de seitan \u00e0 la coriandre, servi avec haricots et riz jasmin.',
      PT: 'Guisado de seitan ao coentro com feij\u00e3o e arroz jasmim.'
    }
  },
  {
    url: 'galeria/WhatsApp Image 2026-06-27 at 3.25.21 PM (3).jpeg',
    category: 'entradas',
    title: { ES: 'Rocoto Relleno Vegano', EN: 'Vegan Rocoto Relleno', FR: 'Rocoto Relleno V\u00e9g\u00e9talien', PT: 'Rocoto Recheado Vegano' },
    desc: {
      ES: 'Cl\u00e1sico arequipe\u00f1o relleno de picadillo de hongos y queso vegano.',
      EN: 'Arequipa classic stuffed with minced mushrooms and vegan cheese.',
      FR: 'Classique d\'Arequipa farci de hachis de champignons et fromage v\u00e9g\u00e9talien.',
      PT: 'Cl\u00e1ssico arequipenho recheado com picadinho de cogumelos e queijo vegano.'
    }
  },
  {
    url: 'galeria/WhatsApp Image 2026-06-27 at 3.25.21 PM (4).jpeg',
    category: 'postres',
    title: { ES: 'Tartaleta de Higo', EN: 'Fig Tartlet', FR: 'Tartelette aux Figues', PT: 'Tartaleta de Figo' },
    desc: {
      ES: 'Base crocante con crema pastelera de almendras e higos frescos.',
      EN: 'Crispy base with almond pastry cream and fresh figs.',
      FR: 'P\u00e2te croustillante avec cr\u00e8me p\u00e2tissi\u00e8re aux amandes et figues fra\u00eeches.',
      PT: 'Base crocante com creme de confeiteiro de am\u00eandoas e figos frescos.'
    }
  },
  {
    url: 'galeria/WhatsApp Image 2026-06-27 at 3.25.21 PM (5).jpeg',
    category: 'fondos',
    title: { ES: 'Lomo Saltado de Setas', EN: 'Mushroom Lomo Saltado', FR: 'Lomo Saltado aux Champignons', PT: 'Lomo Saltado de Cogumelos' },
    desc: {
      ES: 'Salteado al wok con cebolla, tomate, papas nativas y arroz.',
      EN: 'Wok-saut\u00e9ed mushrooms with onion, tomato, native potatoes, and rice.',
      FR: 'Champignons saut\u00e9s au wok avec oignon, tomate, pommes de terre locales et riz.',
      PT: 'Salteado no wok com cebola, tomate, batatas nativas e arroz.'
    }
  },
  {
    url: 'galeria/WhatsApp Image 2026-06-27 at 3.25.22 PM.jpeg',
    category: 'postres',
    title: { ES: 'Sorbete Artesanal', EN: 'Artisanal Sorbet', FR: 'Sorbet Artisanal', PT: 'Sorvete Artesanal' },
    desc: {
      ES: 'Sabores estacionales de frutos locales y menta fresca.',
      EN: 'Seasonal flavors made with local fruits and fresh mint.',
      FR: 'Saveurs de saison faites de fruits locaux et menthe fra\u00eeche.',
      PT: 'Sabores sazonais de frutas locais e hortel\u00e3 fresca.'
    }
  },
  {
    url: 'galeria/WhatsApp Image 2026-06-27 at 3.25.22 PM (1).jpeg',
    category: 'ambiente',
    title: { ES: 'La C\u00fapula', EN: 'The Dome Vault', FR: 'La Coupole', PT: 'A C\u00fapula' },
    desc: {
      ES: 'Un espacio \u00edntimo bajo sillar para veladas memorables.',
      EN: 'An intimate space under sillar vaults for memorable evenings.',
      FR: 'Un espace intime sous les vo\u00fbtes de sillar pour des soir\u00e9es m\u00e9morables.',
      PT: 'Um espa\u00e7o \u00edntimo sob sillar para noites memor\u00e1veis.'
    }
  },
  {
    url: 'galeria/WhatsApp Image 2026-06-27 at 3.25.22 PM (2).jpeg',
    category: 'postres',
    title: { ES: 'Cheesecake de Ar\u00e1ndanos', EN: 'Blueberry Cheesecake', FR: 'Cheesecake aux Myrtilles', PT: 'Cheesecake de Mirtilo' },
    desc: {
      ES: 'Base de nueces con crema de cashews y coulis org\u00e1nico.',
      EN: 'Nut-based crust with cashew cream and organic blueberry coulis.',
      FR: 'Base de noix avec cr\u00e8me de cajou et coulis de myrtilles bio.',
      PT: 'Base de nozes com creme de castanhas de caju e coulis org\u00e2nico.'
    }
  },
  {
    url: 'galeria/WhatsApp Image 2026-06-27 at 3.25.22 PM (3).jpeg',
    category: 'fondos',
    title: { ES: 'Pastel de Papa Yurakuna', EN: 'Yurakuna Potato Cake', FR: 'Pastel de Papa Yurakuna', PT: 'Pastel de Papa Yurakuna' },
    desc: {
      ES: 'Laminado fino con queso fundido vegetal y especias.',
      EN: 'Thinly sliced potatoes layered with melted vegetable cheese and spices.',
      FR: 'Tranches fines de pommes de terre avec fromage v\u00e9g\u00e9tal fondu et \u00e9pices.',
      PT: 'Fatiado fino de batatas com queijo vegetal derretido e especiarias.'
    }
  },
  {
    url: 'galeria/WhatsApp Image 2026-06-27 at 3.25.22 PM (4).jpeg',
    category: 'entradas',
    title: { ES: 'Brochetas de Anticucho', EN: 'Anticucho Skewers', FR: 'Brochettes d\'Anticucho', PT: 'Espetinhos de Anticucho' },
    desc: {
      ES: 'Champi\u00f1ones par\u00eds macerados en aj\u00ed panca y especias andinas.',
      EN: 'Paris mushrooms marinated in aj\u00ed panca and Andean spices.',
      FR: 'Champignons de Paris marin\u00e9s au piment panca et \u00e9pices andines.',
      PT: 'Cogumelos par\u00eds marinados em pimenta panca e especiarias andinas.'
    }
  },
  {
    url: 'galeria/WhatsApp Image 2026-06-27 at 3.25.22 PM (5).jpeg',
    category: 'ambiente',
    title: { ES: 'Mesa Reservada', EN: 'Reserved Table', FR: 'Table Reserv\u00e9e', PT: 'Mesa Reservada' },
    desc: {
      ES: 'Detalles preparados para recibir a nuestros comensales.',
      EN: 'Thoughtful details prepared to welcome our guests.',
      FR: 'D\u00e9tails soign\u00e9s pr\u00e9par\u00e9s pour accueillir nos convives.',
      PT: 'Detalhes preparados para receber nossos clientes.'
    }
  },
  {
    url: 'galeria/WhatsApp Image 2026-06-27 at 3.25.23 PM.jpeg',
    category: 'ambiente',
    title: { ES: 'Terraza y Luz', EN: 'Terrace & Light', FR: 'Terrasse & Lumi\u00e8re', PT: 'Terra\u00e7o e Luz' },
    desc: {
      ES: 'Vista del atardecer arequipe\u00f1o en un ambiente acogedor.',
      EN: 'View of the Arequipa sunset in a cozy atmosphere.',
      FR: 'Vue sur le coucher de soleil d\'Arequipa dans une ambiance chaleureuse.',
      PT: 'Vista do p\u00f4r do sol arequipenho em um ambiente aconchegante.'
    }
  },
  {
    url: 'galeria/WhatsApp Image 2026-06-27 at 3.25.23 PM (1).jpeg',
    category: 'fondos',
    title: { ES: 'Solterito Arequipe\u00f1o Veg', EN: 'Veg Arequipa Solterito', FR: 'Solterito d\'Arequipa V\u00e9g\u00e9', PT: 'Solterito Arequipenho Veg' },
    desc: {
      ES: 'Ensalada fresca de habas, choclo, queso vegano y aceitunas.',
      EN: 'Fresh salad with broad beans, corn, vegan cheese, and olives.',
      FR: 'Salade fra\u00eeche de f\u00e8ves, maïs, fromage v\u00e9g\u00e9talien et olives.',
      PT: 'Salada fresca de favas, milho, queijo vegano e azeitonas.'
    }
  },
  {
    url: 'galeria/WhatsApp Image 2026-06-27 at 3.25.23 PM (2).jpeg',
    category: 'entradas',
    title: { ES: 'Empanadas de Viento', EN: 'Empanadas de Viento', FR: 'Empanadas de Viento', PT: 'Empanadas de Viento' },
    desc: {
      ES: 'Rellenas de guiso de champi\u00f1ones y hortalizas.',
      EN: 'Stuffed with mushroom and vegetable stew.',
      FR: 'Farcies de rago\u00fbt de champignons et l\u00e9gumes.',
      PT: 'Recheadas com guisado de cogumelos e hortali\u00e7as.'
    }
  }
];

let activeCategory = 'all';
let displayedCount = 12;
let filteredImages = [];

function initGallery() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const loadMoreBtn = document.getElementById('gallery-load-more');

  if (!loadMoreBtn) return;

  // Hacer disponible globalmente el refresco de renderizado
  window.filterAndRenderGallery = function(resetCount = true) {
    const gridContainer = document.getElementById('gallery-grid');
    if (!gridContainer) return;

    if (resetCount) {
      displayedCount = 12;
    }

    filteredImages = GALLERY_IMAGES.filter(img => {
      return activeCategory === 'all' || img.category === activeCategory;
    });

    gridContainer.innerHTML = '';
    const toRender = filteredImages.slice(0, displayedCount);

    toRender.forEach((imgData, index) => {
      const item = document.createElement('div');
      item.className = 'gallery-item';
      
      // Asignar clase de bento grid basada en el \u00edndice visible
      const layoutIndex = index % 9;
      if (layoutIndex === 0) {
        item.classList.add('g-featured-large');
      } else if (layoutIndex === 3) {
        item.classList.add('g-featured-tall');
      } else if (layoutIndex === 6) {
        item.classList.add('g-featured-wide');
      }

      const imgTitle = imgData.title[currentLang] || imgData.title['ES'];
      const imgCategoryText = TRANSLATIONS[currentLang][`gallery_filter_${imgData.category}`] || imgData.category;

      item.innerHTML = `
        <img src="${imgData.url}" alt="${imgTitle}" loading="lazy" />
        <div class="gallery-item-overlay">
          <div class="gallery-item-info">
            <h4>${imgTitle}</h4>
            <p>${imgCategoryText}</p>
          </div>
        </div>
      `;

      item.addEventListener('click', () => {
        openLightbox(index);
      });

      gridContainer.appendChild(item);
      
      // Peque\u00f1a animaci\u00f3n de entrada escalonada
      setTimeout(() => {
        item.classList.add('show');
      }, 50 + (index % 12) * 50);
    });

    // Controlar visibilidad del bot\u00f3n "Ver m\u00e1s"
    if (filteredImages.length > displayedCount) {
      loadMoreBtn.style.display = 'inline-block';
    } else {
      loadMoreBtn.style.display = 'none';
    }
  };

  // Eventos de filtros
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.dataset.filter;
      window.filterAndRenderGallery(true);
    });
  });

  // Evento Cargar M\u00e1s
  loadMoreBtn.addEventListener('click', () => {
    displayedCount += 8;
    window.filterAndRenderGallery(false);
  });

  // Render inicial
  window.filterAndRenderGallery(true);
}

// ══════════════════════════════════════
// LIGHTBOX M\u00d3DULO
// ══════════════════════════════════════
let currentLightboxIndex = 0;

function initLightbox() {
  const lightbox = document.getElementById('lightbox-overlay');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn  = document.getElementById('lightbox-prev');
  const nextBtn  = document.getElementById('lightbox-next');
  
  if (!lightbox) return;

  closeBtn.addEventListener('click', closeLightbox);
  prevBtn.addEventListener('click', showPrevLightbox);
  nextBtn.addEventListener('click', showNextLightbox);

  // Cerrar al hacer clic en el fondo oscuro
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Teclado
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('visible')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNextLightbox();
    if (e.key === 'ArrowLeft') showPrevLightbox();
  });
}

function openLightbox(index) {
  currentLightboxIndex = index;
  updateLightboxContent();
  
  const lightbox = document.getElementById('lightbox-overlay');
  lightbox.classList.add('visible');
  document.body.classList.add('menu-open');
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox-overlay');
  lightbox.classList.remove('visible');
  const carta = document.getElementById('carta-overlay');
  const modal = document.getElementById('reserva-modal');
  if (!carta.classList.contains('visible') && (!modal || !modal.classList.contains('visible'))) {
    document.body.classList.remove('menu-open');
  }
}

function showNextLightbox() {
  if (filteredImages.length === 0) return;
  currentLightboxIndex = (currentLightboxIndex + 1) % filteredImages.length;
  updateLightboxContent();
}

function showPrevLightbox() {
  if (filteredImages.length === 0) return;
  currentLightboxIndex = (currentLightboxIndex - 1 + filteredImages.length) % filteredImages.length;
  updateLightboxContent();
}

function updateLightboxContent() {
  const img = document.getElementById('lightbox-img');
  const title = document.getElementById('lightbox-title');
  const desc = document.getElementById('lightbox-desc');
  
  const data = filteredImages[currentLightboxIndex];
  if (!data) return;

  img.style.opacity = '0.3';
  img.style.transform = 'scale(0.98)';
  
  setTimeout(() => {
    const imgTitle = data.title[currentLang] || data.title['ES'];
    const imgDesc = data.desc[currentLang] || data.desc['ES'];

    img.src = data.url;
    img.alt = imgTitle;
    title.textContent = imgTitle;
    desc.textContent = imgDesc;
    
    img.onload = () => {
      img.style.opacity = '1';
      img.style.transform = 'scale(1)';
    };
  }, 150);
}

// ══════════════════════════════════════
// CARTA INTERACTIVA PDF (CORS-Free desde Base64)
// ══════════════════════════════════════
let pdfDoc = null;
let currentSpreadIndex = 0; // Para desktop (doble p\u00e1gina)
let currentMobilePage = 1;  // Para mobile (single p\u00e1gina)
let totalLeaves = 0;
let totalPages = 0;
let isMobileView = false;
let isPdfLoading = false;

function initCartaMenu() {
  const openButtons = document.querySelectorAll('.btn-open-menu');
  const closeBtn = document.getElementById('close-carta-btn');
  const overlay = document.getElementById('carta-overlay');
  
  const prevBtn = document.getElementById('book-prev-btn');
  const nextBtn = document.getElementById('book-next-btn');

  if (!overlay) return;

  isMobileView = window.innerWidth <= 768;

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openCartaMenu();
    });
  });

  closeBtn.addEventListener('click', closeCartaMenu);
  prevBtn.addEventListener('click', turnPagePrev);
  nextBtn.addEventListener('click', turnPageNext);

  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      const nowMobile = window.innerWidth <= 768;
      if (nowMobile !== isMobileView) {
        isMobileView = nowMobile;
        if (overlay.classList.contains('visible') && pdfDoc) {
          buildBookDOM();
        }
      }
    }, 250);
  });
}

function openCartaMenu() {
  const overlay = document.getElementById('carta-overlay');
  document.body.classList.add('menu-open');
  overlay.classList.add('visible');

  setTimeout(() => {
    overlay.classList.add('revealed');
  }, 600);

  if (!pdfDoc && !isPdfLoading) {
    loadCartaPDF();
  }
}

function closeCartaMenu() {
  const overlay = document.getElementById('carta-overlay');
  overlay.classList.remove('revealed');
  overlay.classList.remove('visible');
  const modal = document.getElementById('reserva-modal');
  if (!modal || !modal.classList.contains('visible')) {
    document.body.classList.remove('menu-open');
  }
}


async function loadCartaPDF() {
  isPdfLoading = true;
  const loader = document.getElementById('carta-loader');
  loader.classList.remove('hide');

  try {
    const loadingTask = pdfjsLib.getDocument('LA CARTA DE YURAKUNA.pdf');
    pdfDoc = await loadingTask.promise;
    totalPages = pdfDoc.numPages;
    totalLeaves = Math.ceil((totalPages + 1) / 2);

    buildBookDOM();
    loader.classList.add('hide');
  } catch (error) {
    console.error("Error cargando el PDF de la carta: ", error);
    const errorMsg = currentLang === 'EN' ? "Could not load the menu. Please try again." :
                     currentLang === 'FR' ? "Impossible de charger la carte. Veuillez réessayer." :
                     currentLang === 'PT' ? "Não foi possível carregar o menu. Por favor, tente novamente." :
                     "No se pudo cargar la carta. Por favor intente de nuevo.";
    loader.innerHTML = `<p style="color:red; text-align:center; padding: 20px;">${errorMsg}</p>`;
  } finally {
    isPdfLoading = false;
  }
}

function buildBookDOM() {
  const bookElement = document.getElementById('menu-book');
  bookElement.innerHTML = '';
  
  if (isMobileView) {
    // VISTA M\u00d3VIL: Single Page Slider
    for (let p = 1; p <= totalPages; p++) {
      const slide = document.createElement('div');
      slide.className = `leaf mobile-slide page-${p}`;
      if (p === currentMobilePage) {
        slide.classList.add('active-mobile');
      }

      slide.innerHTML = `
        <div class="page-face page-front">
          <canvas id="canvas-mobile-${p}"></canvas>
        </div>
      `;
      bookElement.appendChild(slide);
    }
  } else {
    // VISTA DESKTOP: Skeumorfismo 3D
    for (let l = 0; l < totalLeaves; l++) {
      const leaf = document.createElement('div');
      leaf.className = `leaf leaf-${l}`;
      
      const leftPageNum = l * 2;
      const rightPageNum = l * 2 + 1;

      leaf.innerHTML = `
        <div class="page-face page-back">
          ${leftPageNum > 0 ? `<canvas id="canvas-page-${leftPageNum}"></canvas>` : ''}
        </div>
        <div class="page-face page-front">
          ${rightPageNum <= totalPages ? `<canvas id="canvas-page-${rightPageNum}"></canvas>` : ''}
        </div>
      `;
      bookElement.appendChild(leaf);
    }
  }

  updateBookUI();
}

function updateBookUI() {
  const indicator = document.getElementById('book-page-indicator');
  
  if (isMobileView) {
    const pageWord = currentLang === 'EN' ? "Page" : currentLang === 'FR' ? "Page" : currentLang === 'PT' ? "P\u00e1g." : "P\u00e1g.";
    const ofWord = currentLang === 'EN' ? "of" : currentLang === 'FR' ? "sur" : currentLang === 'PT' ? "de" : "de";
    
    indicator.textContent = `${pageWord} ${currentMobilePage} ${ofWord} ${totalPages}`;
    
    const slides = document.querySelectorAll('.mobile-slide');
    slides.forEach((slide, idx) => {
      if (idx + 1 === currentMobilePage) {
        slide.classList.add('active-mobile');
      } else {
        slide.classList.remove('active-mobile');
      }
    });

    renderMobilePage(currentMobilePage);
    if (currentMobilePage > 1) renderMobilePage(currentMobilePage - 1);
    if (currentMobilePage < totalPages) renderMobilePage(currentMobilePage + 1);

  } else {
    const leaves = document.querySelectorAll('.menu-book .leaf');
    
    leaves.forEach((leaf, idx) => {
      if (idx < currentSpreadIndex) {
        leaf.style.transform = 'rotateY(-180deg)';
      } else {
        leaf.style.transform = 'rotateY(0deg)';
      }

      if (idx < currentSpreadIndex) {
        leaf.style.zIndex = idx;
      } else {
        leaf.style.zIndex = totalLeaves - idx;
      }
    });

    const coverWord = currentLang === 'EN' ? "Cover" : currentLang === 'FR' ? "Couverture" : currentLang === 'PT' ? "Capa" : "Portada";
    const backCoverWord = currentLang === 'EN' ? "Back Cover" : currentLang === 'FR' ? "Quatri\u00e8me de couverture" : currentLang === 'PT' ? "Contra-capa" : "Contraportada";
    const pagesWord = currentLang === 'EN' ? "Pages" : currentLang === 'FR' ? "Pages" : currentLang === 'PT' ? "P\u00e1gs." : "P\u00e1gs.";
    const singlePageWord = currentLang === 'EN' ? "Page" : currentLang === 'FR' ? "Page" : currentLang === 'PT' ? "P\u00e1g." : "P\u00e1g.";
    const ofWord = currentLang === 'EN' ? "of" : currentLang === 'FR' ? "sur" : currentLang === 'PT' ? "de" : "de";

    if (currentSpreadIndex === 0) {
      indicator.textContent = coverWord;
    } else if (currentSpreadIndex === totalLeaves - 1) {
      indicator.textContent = backCoverWord;
    } else {
      const leftPage = currentSpreadIndex * 2;
      const rightPage = currentSpreadIndex * 2 + 1;
      if (rightPage > totalPages) {
        indicator.textContent = `${singlePageWord} ${leftPage} ${ofWord} ${totalPages}`;
      } else {
        indicator.textContent = `${pagesWord} ${leftPage} - ${rightPage} ${ofWord} ${totalPages}`;
      }
    }

    renderDesktopSpread(currentSpreadIndex);
    if (currentSpreadIndex > 0) renderDesktopSpread(currentSpreadIndex - 1);
    if (currentSpreadIndex < totalLeaves - 1) renderDesktopSpread(currentSpreadIndex + 1);
  }
}

function renderMobilePage(pageNum) {
  const canvas = document.getElementById(`canvas-mobile-${pageNum}`);
  if (canvas) {
    triggerPageRender(pageNum, canvas);
  }
}

function renderDesktopSpread(spreadIdx) {
  const leftPageNum = spreadIdx * 2;
  const rightPageNum = spreadIdx * 2 + 1;

  if (leftPageNum > 0) {
    const leftCanvas = document.getElementById(`canvas-page-${leftPageNum}`);
    if (leftCanvas) triggerPageRender(leftPageNum, leftCanvas);
  }
  if (rightPageNum <= totalPages) {
    const rightCanvas = document.getElementById(`canvas-page-${rightPageNum}`);
    if (rightCanvas) triggerPageRender(rightPageNum, rightCanvas);
  }
}

async function triggerPageRender(pageNum, canvas) {
  if (!pdfDoc || canvas.dataset.rendered === 'true' || canvas.dataset.rendering === 'true') return;
  
  canvas.dataset.rendering = 'true';
  try {
    const page = await pdfDoc.getPage(pageNum);
    const context = canvas.getContext('2d');
    const viewport = page.getViewport({ scale: 1.5 });
    
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    
    const renderContext = {
      canvasContext: context,
      viewport: viewport
    };
    
    await page.render(renderContext).promise;
    canvas.dataset.rendered = 'true';
  } catch (err) {
    console.error(`Error rendering page ${pageNum}: `, err);
  } finally {
    canvas.dataset.rendering = 'false';
  }
}

function turnPageNext() {
  if (isMobileView) {
    if (currentMobilePage < totalPages) {
      currentMobilePage++;
      updateBookUI();
    }
  } else {
    if (currentSpreadIndex < totalLeaves - 1) {
      currentSpreadIndex++;
      updateBookUI();
    }
  }
}

function turnPagePrev() {
  if (isMobileView) {
    if (currentMobilePage > 1) {
      currentMobilePage--;
      updateBookUI();
    }
  } else {
    if (currentSpreadIndex > 0) {
      currentSpreadIndex--;
      updateBookUI();
    }
  }
}

// ══════════════════════════════════════
// MODAL DE RESERVAS LOGIC
// ══════════════════════════════════════
function initReservationModal() {
  const modal = document.getElementById('reserva-modal');
  const closeBtn = document.getElementById('close-reserva-btn');
  const successCloseBtn = document.getElementById('success-close-btn');
  const bookingForm = document.getElementById('booking-form');
  const formStep = document.getElementById('reserva-form-step');
  const successStep = document.getElementById('reserva-success-step');
  
  if (!modal) return;

  // Abrir modal
  document.querySelectorAll('.btn-reservar').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Si el bot\u00f3n tiene una experiencia predefinida
      const selectedExp = btn.dataset.exp;
      if (selectedExp) {
        const selectElement = document.getElementById('reserva-experiencia');
        if (selectElement) {
          selectElement.value = selectedExp;
        }
      }
      
      modal.classList.add('visible');
      document.body.classList.add('menu-open');
      
      // Restablecer
      formStep.style.display = 'block';
      successStep.style.display = 'none';
      bookingForm.reset();
      
      // Configurar fecha m\u00ednima
      const dateInput = document.getElementById('reserva-fecha');
      if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
      }
    });
  });

  const closeModal = () => {
    modal.classList.remove('visible');
    const carta = document.getElementById('carta-overlay');
    if (!carta.classList.contains('visible')) {
      document.body.classList.remove('menu-open');
    }
  };

  closeBtn.addEventListener('click', closeModal);
  successCloseBtn.addEventListener('click', closeModal);
  modal.querySelector('.reserva-backdrop').addEventListener('click', closeModal);

  // Formulario de confirmaci\u00f3n simulado
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const invitadosVal = document.getElementById('reserva-invitados').value;
    const invitadosText = document.querySelector(`#reserva-invitados option[value="${invitadosVal}"]`).textContent;
    const fecha = document.getElementById('reserva-fecha').value;
    const hora = document.getElementById('reserva-hora').value;
    const expVal = document.getElementById('reserva-experiencia').value;
    const expText = document.querySelector(`#reserva-experiencia option[value="${expVal}"]`).textContent;
    
    document.getElementById('summary-invitados').textContent = invitadosText;
    document.getElementById('summary-fecha-hora').textContent = `${fecha} a las ${hora}`;
    document.getElementById('summary-experiencia').textContent = expText;
    
    formStep.style.display = 'none';
    successStep.style.display = 'block';
  });
}

// ══════════════════════════════════════
// INICIALIZACI\u00d3N GLOBAL
// ══════════════════════════════════════
window.addEventListener('DOMContentLoaded', () => {
  initLanguageSelector();
  initScrollReveal();
  initGallery();
  initLightbox();
  initCartaMenu();
  initReservationModal();
  
  // Establecer idioma por defecto ES
  changeLanguage('ES');
});