/* LOT. coffee boutique — site behaviour.
   Plain ES2020, no dependencies. Data lives in data.js. */

(function () {
  'use strict';

  /* ------------------------------------------------------------------ i18n */

  const I18N = {
    en: {
      'skip': 'Skip to content',
      'nav.story': 'The shop', 'nav.menu': 'Menu', 'nav.reviews': 'Reviews',
      'nav.gallery': 'Gallery', 'nav.visit': 'Visit',
      'cta.order': 'Order ahead', 'cta.orderAhead': 'Order ahead', 'cta.seeMenu': 'See the menu',
      'hero.eyebrow': 'Voldersgracht 6 · Delft',
      'hero.title1': 'Small shop,', 'hero.title2': 'serious coffee.',
      'hero.lede': 'A specialty coffee boutique tucked into the old centre of Delft — filter brewed by hand, espresso pulled with care, cinnamon buns while they last, and shelves of beans to take home.',
      'hero.reviews': '361 Google reviews',
      'story.eyebrow': 'The shop',
      'story.title': 'A quiet corner of Delft that happens to be very good at coffee.',
      'story.p1': 'LOT. sits on the Voldersgracht, a short walk from the Markt. Inside it is white and light: plants along the shelves, coffee gear and bags of beans for sale, nerdy coffee magazines left out on the table, and a long bench where people settle in for an hour.',
      'story.p2': 'The bar runs on a rotating single origin for filter and a house blend for espresso. The owner will happily talk you through either — several reviewers say the advice is half the reason they come back. It is a women-owned business, and it is small, so mornings are the calmest time to visit.',
      'menu.eyebrow': 'Menu', 'menu.title': 'What’s on the bar',
      'menu.lede': 'Tap the plus on anything you like — it goes straight into an order you can pick up at the counter.',
      'menu.fineprint': 'Prices are indicative and the line-up changes with the season — the board in the shop is the last word.',
      'reviews.eyebrow': 'Reviews', 'reviews.title': 'What people say on Google',
      'reviews.count': 'from 361 reviews', 'reviews.mentioned': 'Most mentioned',
      'reviews.all': 'Read all 361 reviews on Google',
      'gallery.eyebrow': 'Gallery', 'gallery.title': 'The place, in pictures',
      'gallery.lede': 'Photos from the shop’s Google listing — guests’ and the owner’s.',
      'visit.eyebrow': 'Visit', 'visit.title': 'Voldersgracht 6, Delft',
      'visit.note': 'Two minutes from the Markt, on the little canal behind the Nieuwe Kerk. Come by bike, come on foot.',
      'visit.directions': 'Get directions', 'visit.hoursCaption': 'Opening hours',
      'visit.hoursNote': 'Hours as listed on Google Maps. Holidays and busy weeks can shift things.',
      'footer.note': 'Specialty coffee boutique · Voldersgracht 6, Delft',
      'footer.credit': 'Opening hours, reviews and photos come from the shop’s Google Maps listing.',
      'order.eyebrow': 'Order ahead', 'order.title': 'Your order',
      'order.intro': 'Put your order together here, pick a time, and show the ticket at the counter. Nothing is sent and nothing is charged — payment happens in the shop.',
      'order.empty': 'Your order is empty.', 'order.browse': 'Browse the menu',
      'order.where': 'Where are you drinking it?', 'order.inShop': 'In the shop', 'order.takeaway': 'Takeaway',
      'order.when': 'Pick-up time', 'order.name': 'Name for the cup', 'order.notes': 'Anything else?',
      'order.total': 'Total', 'order.place': 'Create my ticket', 'order.clear': 'Clear order',
      'ticket.label': 'Show this at the counter', 'ticket.copy': 'Copy order as text',
      'ticket.new': 'Start a new order',
      'ticket.fine': 'Pay in the shop. Prices are indicative — the counter is the last word.',
      'status.open': 'Open now · until {close}',
      'status.opensToday': 'Opens today at {open}',
      'status.closed': 'Closed · opens {day} at {open}',
      'status.closedLong': 'Closed for now',
      'pickup.asap': 'As soon as it’s ready (about 10 min)',
      'pickup.hintToday': 'Pick-up today, {open}–{close}.',
      'pickup.hintNext': 'Closed right now — the next pick-up is {day}.',
      'pickup.today': 'today', 'pickup.slot': '{day} at {time}',
      'name.placeholder': 'e.g. Sanne', 'note.placeholder': 'Oat milk, extra hot, one to share…',
      'toast.added': '{item} added', 'toast.copied': 'Order copied to your clipboard',
      'toast.cleared': 'Order cleared', 'toast.name': 'Add a name so we can call your order',
      'ticket.for': 'Name', 'ticket.when': 'Pick-up', 'ticket.where': 'Where', 'ticket.items': 'Items',
      'milk.label': 'Milk',
      'facts': ['Dine-in', 'Takeaway', 'Delivery', 'Women-owned', '€1–10 per person', 'Card & cash'],
      'ticker': ['Specialty coffee', 'Hand-brewed filter', 'Cinnamon buns', 'Beans to take home', 'Oat milk, no charge', 'Coffee magazines on the table', 'Voldersgracht 6, Delft'],
      'days': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      'closedWord': 'Closed',
      'storyCaption': 'Inside: shelves of beans and brewing kit, and a bench that invites you to stay.',
    },
    nl: {
      'skip': 'Naar de inhoud',
      'nav.story': 'De zaak', 'nav.menu': 'Menu', 'nav.reviews': 'Reviews',
      'nav.gallery': 'Foto’s', 'nav.visit': 'Bezoek',
      'cta.order': 'Vooruit bestellen', 'cta.orderAhead': 'Vooruit bestellen', 'cta.seeMenu': 'Bekijk het menu',
      'hero.eyebrow': 'Voldersgracht 6 · Delft',
      'hero.title1': 'Kleine zaak,', 'hero.title2': 'serieuze koffie.',
      'hero.lede': 'Een specialty coffee boutique in de oude binnenstad van Delft — filterkoffie met de hand gezet, espresso met zorg getrokken, kaneelbroodjes zolang ze er zijn, en schappen vol bonen voor thuis.',
      'hero.reviews': '361 Google-reviews',
      'story.eyebrow': 'De zaak',
      'story.title': 'Een stil hoekje van Delft dat toevallig heel goed is in koffie.',
      'story.p1': 'LOT. zit aan de Voldersgracht, op een paar minuten van de Markt. Binnen is het wit en licht: planten op de schappen, koffiespullen en zakken bonen te koop, nerdy koffiemagazines op tafel, en een lange bank waar mensen een uur blijven hangen.',
      'story.p2': 'Achter de bar draait een wisselende single origin voor filter en een huisblend voor espresso. De eigenaresse praat je er graag doorheen — volgens meerdere reviewers is dat advies het halve plezier. Het is een vrouwelijke onderneming, en klein, dus ’s ochtends is het het rustigst.',
      'menu.eyebrow': 'Menu', 'menu.title': 'Wat er op de bar staat',
      'menu.lede': 'Tik op de plus bij wat je lekker lijkt — het komt meteen in een bestelling die je aan de bar ophaalt.',
      'menu.fineprint': 'Prijzen zijn indicatief en het aanbod wisselt met het seizoen — het bord in de zaak heeft het laatste woord.',
      'reviews.eyebrow': 'Reviews', 'reviews.title': 'Wat gasten op Google zeggen',
      'reviews.count': 'uit 361 reviews', 'reviews.mentioned': 'Meest genoemd',
      'reviews.all': 'Lees alle 361 reviews op Google',
      'gallery.eyebrow': 'Foto’s', 'gallery.title': 'De zaak, in beeld',
      'gallery.lede': 'Foto’s van de Google-pagina — van gasten en van de zaak zelf.',
      'visit.eyebrow': 'Bezoek', 'visit.title': 'Voldersgracht 6, Delft',
      'visit.note': 'Twee minuten van de Markt, aan het grachtje achter de Nieuwe Kerk. Kom op de fiets, kom te voet.',
      'visit.directions': 'Route plannen', 'visit.hoursCaption': 'Openingstijden',
      'visit.hoursNote': 'Tijden zoals vermeld op Google Maps. Feestdagen en drukke weken kunnen afwijken.',
      'footer.note': 'Specialty coffee boutique · Voldersgracht 6, Delft',
      'footer.credit': 'Openingstijden, reviews en foto’s komen van de Google Maps-pagina van de zaak.',
      'order.eyebrow': 'Vooruit bestellen', 'order.title': 'Jouw bestelling',
      'order.intro': 'Stel je bestelling samen, kies een tijd en laat het bonnetje aan de bar zien. Er wordt niets verstuurd en niets afgeschreven — betalen doe je in de zaak.',
      'order.empty': 'Je bestelling is nog leeg.', 'order.browse': 'Bekijk het menu',
      'order.where': 'Waar drink je het?', 'order.inShop': 'In de zaak', 'order.takeaway': 'Meenemen',
      'order.when': 'Ophaaltijd', 'order.name': 'Naam op de beker', 'order.notes': 'Nog iets?',
      'order.total': 'Totaal', 'order.place': 'Maak mijn bonnetje', 'order.clear': 'Bestelling wissen',
      'ticket.label': 'Laat dit zien aan de bar', 'ticket.copy': 'Kopieer als tekst',
      'ticket.new': 'Nieuwe bestelling',
      'ticket.fine': 'Betalen in de zaak. Prijzen zijn indicatief — de bar heeft het laatste woord.',
      'status.open': 'Nu open · tot {close}',
      'status.opensToday': 'Vandaag open vanaf {open}',
      'status.closed': 'Gesloten · {day} open vanaf {open}',
      'status.closedLong': 'Nu gesloten',
      'pickup.asap': 'Zodra het klaar is (ongeveer 10 min)',
      'pickup.hintToday': 'Vandaag ophalen, {open}–{close}.',
      'pickup.hintNext': 'Nu gesloten — de eerste ophaalmogelijkheid is {day}.',
      'pickup.today': 'vandaag', 'pickup.slot': '{day} om {time}',
      'name.placeholder': 'bijv. Sanne', 'note.placeholder': 'Havermelk, extra heet, eentje om te delen…',
      'toast.added': '{item} toegevoegd', 'toast.copied': 'Bestelling gekopieerd',
      'toast.cleared': 'Bestelling gewist', 'toast.name': 'Vul een naam in, dan kunnen we je roepen',
      'ticket.for': 'Naam', 'ticket.when': 'Ophalen', 'ticket.where': 'Waar', 'ticket.items': 'Items',
      'milk.label': 'Melk',
      'facts': ['Ter plaatse eten', 'Meenemen', 'Bezorging', 'Vrouwelijke onderneming', '€1–10 p.p.', 'Pin & contant'],
      'ticker': ['Specialty coffee', 'Handgezette filter', 'Kaneelbroodjes', 'Bonen voor thuis', 'Havermelk zonder toeslag', 'Koffiemagazines op tafel', 'Voldersgracht 6, Delft'],
      'days': ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'],
      'closedWord': 'Gesloten',
      'storyCaption': 'Binnen: schappen met bonen en brouwspullen, en een bank waar je blijft plakken.',
    },
  };

  const STORE_KEY = 'lot.state.v1';
  const MILK_SECTIONS = ['espresso', 'filter'];
  const MILK_ITEMS = ['matcha', 'chai', 'hot-choc'];

  const state = {
    lang: 'en',
    theme: null,
    cart: [],
    service: 'in',
    pickup: 'asap',
    name: '',
    note: '',
    lastOrder: null,
  };

  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  function t(key, vars) {
    const dict = I18N[state.lang] || I18N.en;
    let out = dict[key];
    if (out === undefined) out = I18N.en[key];
    if (typeof out === 'string' && vars) {
      out = out.replace(/\{(\w+)\}/g, (m, k) => (vars[k] !== undefined ? vars[k] : m));
    }
    return out;
  }

  const money = (n) =>
    new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(n);

  const hhmm = (mins) =>
    String(Math.floor(mins / 60)).padStart(2, '0') + ':' + String(mins % 60).padStart(2, '0');

  const photoUrl = (photo, w, h) => PHOTO_BASE + photo.id + '=w' + w + '-h' + h + '-k-no';

  /* ------------------------------------------------------- persisted state */

  function load() {
    try {
      const raw = JSON.parse(localStorage.getItem(STORE_KEY) || '{}');
      if (raw.lang && I18N[raw.lang]) state.lang = raw.lang;
      if (raw.theme === 'light' || raw.theme === 'dark') state.theme = raw.theme;
      if (Array.isArray(raw.cart)) state.cart = raw.cart.filter(findItem);
      if (raw.service === 'in' || raw.service === 'takeaway') state.service = raw.service;
      if (typeof raw.name === 'string') state.name = raw.name;
    } catch (err) {
      /* first visit, private window, or cleared storage — defaults are fine */
    }
  }

  function save() {
    try {
      localStorage.setItem(
        STORE_KEY,
        JSON.stringify({
          lang: state.lang, theme: state.theme, cart: state.cart,
          service: state.service, name: state.name,
        })
      );
    } catch (err) { /* storage unavailable — the page still works */ }
  }

  function findItem(line) {
    for (const section of MENU) {
      const hit = section.items.find((i) => i.id === line.itemId);
      if (hit) return { section, item: hit };
    }
    return null;
  }

  /* ------------------------------------------------------------ shop clock */

  function amsNow() {
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/Amsterdam', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false,
    }).formatToParts(new Date());
    const get = (type) => parts.find((p) => p.type === type).value;
    const map = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
    return { day: map[get('weekday')], minutes: (Number(get('hour')) % 24) * 60 + Number(get('minute')) };
  }

  function nextOpenDay(fromDay) {
    for (let step = 1; step <= 7; step += 1) {
      const day = (fromDay + step) % 7;
      if (HOURS[day]) return { day, hours: HOURS[day] };
    }
    return null;
  }

  function shopStatus() {
    const now = amsNow();
    const today = HOURS[now.day];
    if (today && now.minutes >= today.open && now.minutes < today.close) {
      return { open: true, key: 'status.open', vars: { close: hhmm(today.close) } };
    }
    if (today && now.minutes < today.open) {
      return { open: false, soon: true, key: 'status.opensToday', vars: { open: hhmm(today.open) } };
    }
    const next = nextOpenDay(now.day);
    if (!next) return { open: false, key: 'status.closedLong', vars: {} };
    return {
      open: false,
      key: 'status.closed',
      vars: { day: t('days')[next.day], open: hhmm(next.hours.open) },
    };
  }

  /* --------------------------------------------------------------- render */

  function applyStaticStrings() {
    document.documentElement.lang = state.lang;
    $$('[data-i18n]').forEach((el) => {
      const value = t(el.dataset.i18n);
      if (typeof value === 'string') el.textContent = value;
    });
    $('#langLabel').textContent = state.lang === 'en' ? 'NL' : 'EN';
    $('#langBtn').setAttribute('aria-label', state.lang === 'en' ? 'Schakel over naar Nederlands' : 'Switch to English');
    const nameInput = $('#orderName');
    const noteInput = $('#orderNote');
    if (nameInput) nameInput.placeholder = t('name.placeholder');
    if (noteInput) noteInput.placeholder = t('note.placeholder');
  }

  function renderStatus() {
    const status = shopStatus();
    const pill = $('#statusPill');
    pill.dataset.status = status.open ? 'open' : status.soon ? 'soon' : 'closed';
    $('#statusText').textContent = t(status.key, status.vars);
  }

  function renderChrome() {
    $('#heroImg').src = photoUrl(HERO_PHOTO, 1800, 1400);
    $('#heroImg').alt = HERO_PHOTO.alt[state.lang];

    const story = PHOTOS[7];
    $('#storyImg').src = photoUrl(story, 900, 1100);
    $('#storyImg').alt = story.alt[state.lang];
    $('#storyCaption').textContent = t('storyCaption');

    $('#factsList').innerHTML = t('facts').map((f) => '<li>' + f + '</li>').join('');

    const words = t('ticker');
    $('#tickerTrack').innerHTML = words.concat(words).map((w) => '<span>' + w + '</span>').join('');

    $('#allReviewsLink').href = SHOP.reviewsUrl;
    $('#ratingPill').href = '#reviews';
    $('#directionsBtn').href = SHOP.directionsUrl;
    $('#footerMaps').href = SHOP.mapsPlace;
    const frame = $('#mapFrame');
    if (frame.src !== SHOP.mapEmbed) frame.src = SHOP.mapEmbed;
  }

  function renderMenu() {
    const tabs = $('#menuTabs');
    const panels = $('#menuPanels');
    const current = tabs.dataset.active || MENU[0].id;

    tabs.innerHTML = MENU.map((section) => (
      '<button type="button" role="tab" data-section="' + section.id + '" ' +
      'aria-selected="' + (section.id === current) + '">' + section.name[state.lang] + '</button>'
    )).join('');
    tabs.dataset.active = current;

    panels.innerHTML = MENU.map((section) => {
      const note = section.note
        ? '<p class="menu-note">' + section.note[state.lang] + '</p>' : '';
      const items = section.items.map((item) => (
        '<li class="menu-item">' +
          '<div class="mi-body">' +
            '<div class="mi-head">' +
              '<span class="mi-name">' + item.name[state.lang] + '</span>' +
              (item.popular ? '<span class="tag">' + (state.lang === 'nl' ? 'favoriet' : 'popular') + '</span>' : '') +
              '<span class="mi-dots"></span>' +
              '<span class="mi-price">' + money(item.price) + '</span>' +
            '</div>' +
            '<p class="mi-desc">' + item.desc[state.lang] + '</p>' +
          '</div>' +
          '<button class="add-btn" type="button" data-add="' + item.id + '" ' +
          'aria-label="' + (state.lang === 'nl' ? 'Voeg toe: ' : 'Add ') + item.name[state.lang] + '">+</button>' +
        '</li>'
      )).join('');
      return (
        '<div class="menu-panel" role="tabpanel" data-panel="' + section.id + '"' +
        (section.id === current ? '' : ' hidden') + '>' + note +
        '<ul class="menu-list">' + items + '</ul></div>'
      );
    }).join('');
  }

  function renderReviews() {
    $('#reviewTags').innerHTML = REVIEW_TAGS.map((tag) => (
      '<li>' + tag.label[state.lang] + '<b>' + tag.count + '</b></li>'
    )).join('');

    $('#reviewGrid').innerHTML = REVIEWS.map((review) => (
      '<article class="review-card reveal">' +
        '<span class="stars" aria-label="5 / 5">★★★★★</span>' +
        '<p class="review-text">' + review.text + '</p>' +
        '<div class="review-author">' +
          '<span class="avatar" aria-hidden="true">' + review.author.trim().charAt(0).toUpperCase() + '</span>' +
          '<span><span class="review-name">' + review.author + '</span><br>' +
          '<span class="review-meta">' + review.meta + ' · ' + review.when[state.lang] + '</span></span>' +
        '</div>' +
      '</article>'
    )).join('');
  }

  function renderGallery() {
    $('#galleryGrid').innerHTML = PHOTOS.map((photo, index) => {
      const shape = photo.tall ? ' class="tall"' : photo.wide ? ' class="wide"' : '';
      return (
        '<button type="button"' + shape + ' data-photo="' + index + '">' +
          '<img loading="lazy" referrerpolicy="no-referrer" src="' + photoUrl(photo, 800, 800) +
          '" alt="' + photo.alt[state.lang].replace(/"/g, '&quot;') + '">' +
        '</button>'
      );
    }).join('');
  }

  function renderHours() {
    const today = amsNow().day;
    const order = [1, 2, 3, 4, 5, 6, 0];
    $('#hoursTable tbody').innerHTML = order.map((day) => {
      const hours = HOURS[day];
      const cls = [day === today ? 'today' : '', hours ? '' : 'closed'].filter(Boolean).join(' ');
      const value = hours ? hhmm(hours.open) + ' – ' + hhmm(hours.close) : t('closedWord');
      return '<tr' + (cls ? ' class="' + cls + '"' : '') + '><td>' + t('days')[day] + '</td><td>' + value + '</td></tr>';
    }).join('');
  }

  /* ----------------------------------------------------------------- cart */

  function takesMilk(section, item) {
    return MILK_SECTIONS.includes(section.id) || MILK_ITEMS.includes(item.id);
  }

  function cartTotal() {
    return state.cart.reduce((sum, line) => {
      const hit = findItem(line);
      return hit ? sum + hit.item.price * line.qty : sum;
    }, 0);
  }

  function cartCount() {
    return state.cart.reduce((n, line) => n + line.qty, 0);
  }

  function addToCart(itemId) {
    const hit = findItem({ itemId });
    if (!hit) return;
    const milk = takesMilk(hit.section, hit.item) ? 'whole' : null;
    const existing = state.cart.find((line) => line.itemId === itemId && line.milk === milk);
    if (existing) existing.qty += 1;
    else state.cart.push({ itemId: itemId, milk: milk, qty: 1 });
    save();
    hideTicket();
    renderCart();
    toast(t('toast.added', { item: hit.item.name[state.lang] }));
  }

  function renderCart() {
    const list = $('#cartList');
    const count = cartCount();

    $('#cartPip').textContent = count;
    $('#cartPip').hidden = count === 0;
    $('#cartEmpty').hidden = count > 0;
    $('#orderForm').hidden = count === 0;
    $('#drawerFoot').hidden = count === 0 || !$('#ticket').hidden;

    list.innerHTML = state.cart.map((line, index) => {
      const hit = findItem(line);
      if (!hit) return '';
      const milkSelect = line.milk
        ? '<select class="milk-select" data-milk="' + index + '" aria-label="' + t('milk.label') + '">' +
          MILKS.map((m) => '<option value="' + m.id + '"' + (m.id === line.milk ? ' selected' : '') + '>' +
            m.name[state.lang] + '</option>').join('') + '</select>'
        : '';
      return (
        '<li class="cart-row">' +
          '<div class="cart-top">' +
            '<span class="cart-name">' + hit.item.name[state.lang] + '</span>' +
            '<span class="cart-price">' + money(hit.item.price * line.qty) + '</span>' +
          '</div>' +
          '<div class="cart-controls">' +
            '<span class="stepper">' +
              '<button type="button" data-dec="' + index + '" aria-label="−">−</button>' +
              '<span>' + line.qty + '</span>' +
              '<button type="button" data-inc="' + index + '" aria-label="+">+</button>' +
            '</span>' + milkSelect +
          '</div>' +
        '</li>'
      );
    }).join('');

    $('#cartTotal').textContent = money(cartTotal());
    renderPickupOptions();
  }

  /* -------------------------------------------------------- pickup timing */

  function pickupPlan() {
    const now = amsNow();
    const today = HOURS[now.day];
    const slots = [];
    const isOpenToday = today && now.minutes < today.close;

    if (isOpenToday) {
      let start = Math.max(today.open, now.minutes + 12);
      start = Math.ceil(start / 5) * 5;
      for (let time = start; time <= today.close - 10 && slots.length < 40; time += 10) {
        slots.push({ day: now.day, time: time, today: true });
      }
      if (slots.length) return { slots: slots, day: now.day, hours: today, today: true };
    }

    const next = nextOpenDay(now.day);
    if (!next) return { slots: [], day: null, hours: null, today: false };
    for (let time = next.hours.open; time <= next.hours.close - 10 && slots.length < 40; time += 10) {
      slots.push({ day: next.day, time: time, today: false });
    }
    return { slots: slots, day: next.day, hours: next.hours, today: false };
  }

  function renderPickupOptions() {
    const select = $('#pickupTime');
    if (!select) return;
    const plan = pickupPlan();
    const options = [];

    if (plan.today) options.push('<option value="asap">' + t('pickup.asap') + '</option>');
    plan.slots.forEach((slot) => {
      const label = plan.today
        ? hhmm(slot.time)
        : t('pickup.slot', { day: t('days')[slot.day], time: hhmm(slot.time) });
      options.push('<option value="' + slot.day + ':' + slot.time + '">' + label + '</option>');
    });

    select.innerHTML = options.join('');
    if (state.pickup && $$('option', select).some((o) => o.value === state.pickup)) {
      select.value = state.pickup;
    } else {
      state.pickup = select.value;
    }

    $('#pickupHint').textContent = plan.hours
      ? (plan.today
        ? t('pickup.hintToday', { open: hhmm(plan.hours.open), close: hhmm(plan.hours.close) })
        : t('pickup.hintNext', { day: t('days')[plan.day] + ' ' + hhmm(plan.hours.open) }))
      : '';
  }

  function pickupLabel() {
    if (state.pickup === 'asap') return t('pickup.asap');
    const [day, time] = state.pickup.split(':').map(Number);
    const now = amsNow();
    return day === now.day
      ? t('pickup.slot', { day: t('pickup.today'), time: hhmm(time) })
      : t('pickup.slot', { day: t('days')[day], time: hhmm(time) });
  }

  /* --------------------------------------------------------------- ticket */

  function placeOrder() {
    const name = $('#orderName').value.trim();
    if (!name) {
      $('#orderName').focus();
      toast(t('toast.name'));
      return;
    }
    state.name = name;
    state.note = $('#orderNote').value.trim();
    save();

    const order = {
      code: 'LOT-' + String(Math.floor(1000 + Math.random() * 9000)),
      name: name,
      note: state.note,
      service: state.service,
      pickup: pickupLabel(),
      lines: state.cart.map((line) => {
        const hit = findItem(line);
        const milk = line.milk ? MILKS.find((m) => m.id === line.milk) : null;
        return {
          name: hit.item.name[state.lang],
          qty: line.qty,
          price: hit.item.price * line.qty,
          milk: milk ? milk.name[state.lang] : '',
        };
      }),
      total: cartTotal(),
    };
    state.lastOrder = order;
    showTicket(order);
  }

  function showTicket(order) {
    $('#ticketCode').textContent = order.code;
    $('#ticketMeta').innerHTML =
      '<dt>' + t('ticket.for') + '</dt><dd>' + escapeHtml(order.name) + '</dd>' +
      '<dt>' + t('ticket.when') + '</dt><dd>' + order.pickup + '</dd>' +
      '<dt>' + t('ticket.where') + '</dt><dd>' +
        (order.service === 'in' ? t('order.inShop') : t('order.takeaway')) + '</dd>' +
      (order.note ? '<dt>' + t('order.notes') + '</dt><dd>' + escapeHtml(order.note) + '</dd>' : '');
    $('#ticketItems').innerHTML = order.lines.map((line) => (
      '<li><span>' + line.qty + ' × ' + line.name +
      (line.milk ? ' <small>· ' + line.milk + '</small>' : '') + '</span>' +
      '<span>' + money(line.price) + '</span></li>'
    )).join('');
    $('#ticketTotal').textContent = money(order.total);
    $('#drawerBody').hidden = true;
    $('#drawerFoot').hidden = true;
    $('#ticket').hidden = false;
  }

  /* Leave the ticket view and go back to the order itself. */
  function hideTicket() {
    if ($('#ticket').hidden) return;
    $('#ticket').hidden = true;
    $('#drawerBody').hidden = false;
    renderCart();
  }

  function ticketText(order) {
    const lines = order.lines.map((l) => '• ' + l.qty + ' × ' + l.name + (l.milk ? ' (' + l.milk + ')' : ''));
    return [
      SHOP.name + ' — ' + order.code,
      t('ticket.for') + ': ' + order.name,
      t('ticket.when') + ': ' + order.pickup,
      t('ticket.where') + ': ' + (order.service === 'in' ? t('order.inShop') : t('order.takeaway')),
      order.note ? t('order.notes') + ': ' + order.note : '',
      '',
      lines.join('\n'),
      t('order.total') + ': ' + money(order.total),
    ].filter(Boolean).join('\n');
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  }

  /* --------------------------------------------------------------- drawer */

  let lastFocus = null;

  function openDrawer() {
    lastFocus = document.activeElement;
    const drawer = $('#orderDrawer');
    const scrim = $('#drawerScrim');
    drawer.hidden = false;
    scrim.hidden = false;
    drawer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('locked');
    requestAnimationFrame(() => {
      drawer.classList.add('show');
      scrim.classList.add('show');
    });
    renderPickupOptions();
    $('#drawerClose').focus();
  }

  function closeDrawer() {
    const drawer = $('#orderDrawer');
    const scrim = $('#drawerScrim');
    drawer.classList.remove('show');
    scrim.classList.remove('show');
    drawer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('locked');
    setTimeout(() => {
      drawer.hidden = true;
      scrim.hidden = true;
    }, 320);
    if (lastFocus) lastFocus.focus();
  }

  const drawerOpen = () => !$('#orderDrawer').hidden;

  /* ------------------------------------------------------------ lightbox */

  let lbIndex = 0;

  function openLightbox(index) {
    lbIndex = index;
    lastFocus = document.activeElement;
    const box = $('#lightbox');
    box.hidden = false;
    document.body.classList.add('locked');
    paintLightbox();
    $('#lbClose').focus();
  }

  function paintLightbox() {
    const photo = PHOTOS[lbIndex];
    $('#lbImg').src = photoUrl(photo, 1600, 1600);
    $('#lbImg').alt = photo.alt[state.lang];
    $('#lbCaption').textContent = photo.alt[state.lang];
  }

  function moveLightbox(step) {
    lbIndex = (lbIndex + step + PHOTOS.length) % PHOTOS.length;
    paintLightbox();
  }

  function closeLightbox() {
    $('#lightbox').hidden = true;
    if (!drawerOpen()) document.body.classList.remove('locked');
    if (lastFocus) lastFocus.focus();
  }

  /* --------------------------------------------------------------- toast */

  let toastTimer = null;
  function toast(message) {
    const el = $('#toast');
    el.textContent = message;
    el.hidden = false;
    requestAnimationFrame(() => el.classList.add('show'));
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      el.classList.remove('show');
      setTimeout(() => { el.hidden = true; }, 260);
    }, 2200);
  }

  /* ---------------------------------------------------------------- theme */

  function applyTheme() {
    if (state.theme) document.documentElement.setAttribute('data-theme', state.theme);
    else document.documentElement.removeAttribute('data-theme');
  }

  function prefersDark() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  /* --------------------------------------------------------------- reveal */

  let revealObserver = null;
  function observeReveals() {
    if (!('IntersectionObserver' in window)) {
      $$('.reveal').forEach((el) => el.classList.add('in'));
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    }
    $$('.reveal:not(.in)').forEach((el) => revealObserver.observe(el));
  }

  function watchSections() {
    const links = $$('.site-nav a');
    const sections = links
      .map((a) => document.querySelector(a.getAttribute('href')))
      .filter(Boolean);
    if (!('IntersectionObserver' in window) || !sections.length) return;
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id));
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach((section) => spy.observe(section));
  }

  /* ---------------------------------------------------------------- wire */

  function renderAll() {
    applyStaticStrings();
    renderChrome();
    renderStatus();
    renderMenu();
    renderReviews();
    renderGallery();
    renderHours();
    renderCart();
    if (state.lastOrder && !$('#ticket').hidden) showTicket(state.lastOrder);
    observeReveals();
  }

  function init() {
    load();
    if (!state.theme) state.theme = prefersDark() ? 'dark' : 'light';
    applyTheme();
    renderAll();
    watchSections();

    $('#orderName').value = state.name;
    $$('#serviceSeg button').forEach((btn) => {
      btn.setAttribute('aria-checked', String(btn.dataset.service === state.service));
    });

    /* language + theme */
    $('#langBtn').addEventListener('click', () => {
      state.lang = state.lang === 'en' ? 'nl' : 'en';
      save();
      renderAll();
    });
    $('#themeBtn').addEventListener('click', () => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      applyTheme();
      save();
    });

    /* mobile nav */
    const nav = $('#siteNav');
    $('#navToggle').addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      $('#navToggle').setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', (event) => {
      if (event.target.tagName === 'A') {
        nav.classList.remove('open');
        $('#navToggle').setAttribute('aria-expanded', 'false');
      }
    });

    /* header shadow */
    const header = $('#siteHeader');
    const onScroll = () => header.classList.toggle('is-stuck', window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* menu tabs + add buttons */
    $('#menuTabs').addEventListener('click', (event) => {
      const btn = event.target.closest('button[data-section]');
      if (!btn) return;
      const id = btn.dataset.section;
      $('#menuTabs').dataset.active = id;
      $$('#menuTabs button').forEach((b) => b.setAttribute('aria-selected', String(b === btn)));
      $$('.menu-panel').forEach((panel) => { panel.hidden = panel.dataset.panel !== id; });
      observeReveals();
    });

    $('#menuPanels').addEventListener('click', (event) => {
      const btn = event.target.closest('button[data-add]');
      if (!btn) return;
      addToCart(btn.dataset.add);
      btn.classList.add('pop');
      setTimeout(() => btn.classList.remove('pop'), 220);
    });

    /* gallery */
    $('#galleryGrid').addEventListener('click', (event) => {
      const btn = event.target.closest('button[data-photo]');
      if (btn) openLightbox(Number(btn.dataset.photo));
    });
    $('#lbClose').addEventListener('click', closeLightbox);
    $('#lbPrev').addEventListener('click', () => moveLightbox(-1));
    $('#lbNext').addEventListener('click', () => moveLightbox(1));
    $('#lightbox').addEventListener('click', (event) => {
      if (event.target === $('#lightbox') || event.target.classList.contains('lb-figure')) closeLightbox();
    });

    /* drawer open/close */
    $$('[data-open-order]').forEach((btn) => btn.addEventListener('click', openDrawer));
    $('#drawerClose').addEventListener('click', closeDrawer);
    $('#drawerScrim').addEventListener('click', closeDrawer);
    $('#emptyBrowse').addEventListener('click', () => {
      closeDrawer();
      document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
    });

    /* cart interactions */
    $('#cartList').addEventListener('click', (event) => {
      const inc = event.target.closest('[data-inc]');
      const dec = event.target.closest('[data-dec]');
      if (inc) {
        state.cart[Number(inc.dataset.inc)].qty += 1;
      } else if (dec) {
        const index = Number(dec.dataset.dec);
        state.cart[index].qty -= 1;
        if (state.cart[index].qty <= 0) state.cart.splice(index, 1);
      } else {
        return;
      }
      save();
      renderCart();
    });
    $('#cartList').addEventListener('change', (event) => {
      const select = event.target.closest('[data-milk]');
      if (!select) return;
      const index = Number(select.dataset.milk);
      const line = state.cart[index];
      const twin = state.cart.find((l, i) => i !== index && l.itemId === line.itemId && l.milk === select.value);
      if (twin) {
        twin.qty += line.qty;
        state.cart.splice(index, 1);
      } else {
        line.milk = select.value;
      }
      save();
      renderCart();
    });

    /* order form */
    $('#serviceSeg').addEventListener('click', (event) => {
      const btn = event.target.closest('button[data-service]');
      if (!btn) return;
      state.service = btn.dataset.service;
      $$('#serviceSeg button').forEach((b) => b.setAttribute('aria-checked', String(b === btn)));
      save();
    });
    $('#pickupTime').addEventListener('change', (event) => { state.pickup = event.target.value; });
    $('#placeOrder').addEventListener('click', placeOrder);
    $('#clearCart').addEventListener('click', () => {
      state.cart = [];
      save();
      renderCart();
      toast(t('toast.cleared'));
    });
    $('#newOrder').addEventListener('click', () => {
      state.cart = [];
      state.lastOrder = null;
      save();
      hideTicket();
    });
    $('#copyTicket').addEventListener('click', () => {
      if (!state.lastOrder) return;
      const text = ticketText(state.lastOrder);
      const done = () => toast(t('toast.copied'));
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
      } else {
        fallbackCopy(text, done);
      }
    });

    /* keyboard */
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        if (!$('#lightbox').hidden) closeLightbox();
        else if (drawerOpen()) closeDrawer();
      }
      if (!$('#lightbox').hidden) {
        if (event.key === 'ArrowLeft') moveLightbox(-1);
        if (event.key === 'ArrowRight') moveLightbox(1);
      }
    });

    /* the clock keeps moving while the page is open */
    setInterval(() => {
      renderStatus();
      renderHours();
      if (drawerOpen()) renderPickupOptions();
    }, 60000);
  }

  function fallbackCopy(text, done) {
    const area = document.createElement('textarea');
    area.value = text;
    area.setAttribute('readonly', '');
    area.style.position = 'fixed';
    area.style.opacity = '0';
    document.body.appendChild(area);
    area.select();
    try { document.execCommand('copy'); done(); } catch (err) { /* clipboard blocked */ }
    document.body.removeChild(area);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
