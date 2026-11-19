(function () {
  var WORKS = window.WORKS || [];
  var home = document.getElementById('home');
  var grid = document.getElementById('grid');
  var caseEl = document.getElementById('case');
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.pill'));
  var tab = 'all';

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function img(src, alt, label) {
    return src ? '<img src="' + esc(src) + '" alt="' + esc(alt) + '" loading="lazy">' : '<span class="empty">' + esc(label || '') + '</span>';
  }
  function browser(src, alt, label, style) {
    return '<span class="browser"' + (style ? ' style="' + style + '"' : '') + '>' +
      '<span class="bar" aria-hidden="true"><i></i><i></i><i></i><b></b></span>' + img(src, alt, label) + '</span>';
  }
  function device(src, alt, style) {
    return '<span class="device"' + (style ? ' style="' + style + '"' : '') + '>' + (src ? img(src, alt) : '') + '</span>';
  }

  // Work list. Every card gets the same cover: one framed image in the same spot.
  function renderGrid() {
    var list = WORKS.filter(function (w) { return tab === 'all' || w.platforms.indexOf(tab) !== -1; });
    grid.innerHTML = list.map(function (w, i) {
      return '<button type="button" class="card rise" data-slug="' + esc(w.slug) + '" aria-label="Open ' + esc(w.title) + ' case study" style="animation-delay:' + (i * 90) + 'ms">' +
        '<span class="cover"><span class="frame">' + img(w.cover, w.title + ' cover', '[Cover image]') + '</span></span>' +
        '<span class="meta"><span class="title">' + esc(w.title) + '</span><span class="desc">' + esc(w.desc) + '</span></span>' +
        '</button>';
    }).join('');
  }

  tabs.forEach(function (b) {
    b.addEventListener('click', function () {
      tab = b.getAttribute('data-tab');
      tabs.forEach(function (x) { x.setAttribute('aria-selected', x === b ? 'true' : 'false'); });
      renderGrid();
    });
  });
  grid.addEventListener('click', function (e) {
    var card = e.target.closest('.card');
    if (card) location.hash = card.getAttribute('data-slug');
  });

  // Case study: same structure as the design.
  function renderCase(w) {
    var pl = w.platforms || ['web'];
    var web = pl.indexOf('web') !== -1, mob = pl.indexOf('mobile') !== -1, both = web && mob;
    var idx = WORKS.indexOf(w);
    var next = WORKS[(idx + 1) % WORKS.length];
    var ms = w.mobileScreens || [];
    var shot1 = (w.webScreens && w.webScreens[0]) || '';
    var res = w.results || [{ v: '[Metric]', l: '[What changed]' }, { v: '[Metric]', l: '[What changed]' }, { v: '[Metric]', l: '[What changed]' }];
    var meta = [
      ['Role', w.role || '[Your role]'],
      ['Timeline', w.timeline || '[Year · length]'],
      ['Platform', [web ? 'Web' : null, mob ? 'iOS & Android' : null].filter(Boolean).join(', ')],
      ['Team', w.team || '[Who you worked with]']
    ];
    function text(items) {
      return items.map(function (s) { return '<div><h2>' + esc(s[0]) + '</h2><p>' + esc(s[1]) + '</p></div>'; }).join('');
    }

    var html = '';
    html += '<button type="button" class="cs-back rise" id="back"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 18l-6-6 6-6"></path></svg>All work</button>';
    html += '<header class="cs-head rise" style="animation-delay:60ms"><span class="cs-tag">' + esc(w.tags || [web ? 'Web' : null, mob ? 'Mobile' : null].filter(Boolean).join(' · ')) + '</span><h1>' + esc(w.title) + '</h1><p>' + esc(w.desc) + '</p></header>';
    html += '<div class="cs-hero rise" style="animation-delay:140ms">';
    if (web) html += browser(w.web, w.title + ' website', '[Website hero screenshot]', both ? 'left:6%;top:12%;width:70%' : 'left:9%;top:11%;width:82%');
    if (mob) html += device(w.mobile, w.title + ' mobile app', both ? 'left:71%;top:20%;width:22%' : 'left:39%;top:8%;width:22%');
    html += '</div>';
    html += '<dl class="cs-meta rise" style="animation-delay:220ms">' + meta.map(function (m) { return '<div><dt>' + esc(m[0]) + '</dt><dd>' + esc(m[1]) + '</dd></div>'; }).join('') + '</dl>';
    html += '<section class="cs-text rise" style="animation-delay:300ms">' + text([
      ['Overview', w.overview || '[What the product is, who it is for and what you were asked to do]'],
      ['The problem', w.problem || '[The user and business problem, and why it mattered]']
    ]) + '</section>';
    if (web) html += '<figure class="cs-fig"><div class="panel">' + browser(shot1, w.title + ' key screen', '[Key website screen]') + '</div><figcaption>' + esc(w.webCaption || '[Caption: what this screen shows]') + '</figcaption></figure>';
    html += '<section class="cs-text">' + text([
      ['Process', w.process || '[Research, key decisions, trade-offs and iterations]'],
      ['Solution', w.solution || '[What you designed and how it solves the problem]']
    ]) + '</section>';
    if (mob) html += '<figure class="cs-fig"><div class="panel phones">' + [0, 1, 2].map(function (i) { return device(ms[i], w.title + ' mobile screen ' + (i + 1)); }).join('') + '</div><figcaption>' + esc(w.mobileCaption || '[Caption: the mobile flow shown here]') + '</figcaption></figure>';
    html += '<section class="cs-outcome"><h2>Outcome</h2><p>' + esc(w.outcome || '[What happened after launch: adoption, feedback, what you learned]') + '</p><div class="cs-results">' +
      res.map(function (r) { return '<div><strong>' + esc(r.v) + '</strong><span>' + esc(r.l) + '</span></div>'; }).join('') + '</div></section>';
    html += '<button type="button" class="cs-next" id="next" aria-label="Next project: ' + esc(next.title) + '"><span class="panel"><span class="label"><small>Next project</small><strong>' + esc(next.title) + '</strong></span>' +
      '<svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span></button>';

    caseEl.innerHTML = html;
    document.getElementById('back').addEventListener('click', function () { location.hash = ''; });
    document.getElementById('next').addEventListener('click', function () { location.hash = next.slug; });
  }

  function route() {
    var m = location.hash.match(/^#([\w-]+)$/);
    var w = m && WORKS.filter(function (x) { return x.slug === m[1]; })[0];
    if (w) {
      renderCase(w);
      home.hidden = true;
      caseEl.hidden = false;
      document.title = w.title + ' — Ghassan';
    } else {
      caseEl.hidden = true;
      home.hidden = false;
      document.title = 'Ghassan — Senior Product Designer';
    }
    window.scrollTo(0, 0);
  }

  window.addEventListener('hashchange', route);
  renderGrid();
  route();
})();
