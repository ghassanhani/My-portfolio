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
  // Browser window chrome, drawn like a desktop browser so screenshots read as real products.
  var BAR = '<span class="bar" aria-hidden="true">' +
    '<span class="lights"><i></i><i></i><i></i></span>' +
    '<svg class="nav" viewBox="0 0 40 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M10 3 5 8l5 5"/><path d="m27 3 5 5-5 5" opacity=".4"/></svg>' +
    '<b class="url"></b>' +
    '<svg class="tools" viewBox="0 0 40 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M8 9V2M5 5l3-3 3 3M4 8v5h8V8"/><path d="M32 3v10M27 8h10"/></svg>' +
    '</span>';
  function browser(src, alt, label, style, cls) {
    return '<span class="browser' + (cls ? ' ' + cls : '') + '"' + (style ? ' style="' + style + '"' : '') + '>' + BAR + img(src, alt, label) + '</span>';
  }
  function device(src, alt, style, cls) {
    return '<span class="device' + (cls ? ' ' + cls : '') + '"' + (style ? ' style="' + style + '"' : '') + '>' + (src ? img(src, alt) : '') + '</span>';
  }

  // Card cover: the web screenshot in a browser window, or the mobile one in a phone frame.
  function cover(w) {
    var phone = w.mobile && (!w.web || w.coverFrame === 'phone');
    return '<span class="cover">' + (phone
      ? device(w.mobile, w.title + ' app screen', '', 'frame frame-phone')
      : browser(w.web, w.title + ' website screen', '', '', 'frame frame-web')) + '</span>';
  }
  function byline(w) {
    var parts = [w.client, w.role, w.timeline].filter(Boolean);
    return parts.length ? parts.join(' · ') : (w.tags || '');
  }

  // Work list. All cards share one cover layout.
  function renderGrid() {
    var list = WORKS.filter(function (w) { return tab === 'all' || w.platforms.indexOf(tab) !== -1; });
    grid.innerHTML = list.map(function (w, i) {
      return '<button type="button" class="card rise" data-slug="' + esc(w.slug) + '" aria-label="Open ' + esc(w.title) + ' case study" style="animation-delay:' + (i * 90) + 'ms">' +
        cover(w) +
        '<span class="meta"><span class="title">' + esc(w.title) + '</span><span class="desc">' + esc(w.desc) + '</span><span class="byline">' + esc(byline(w)) + '</span></span>' +
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

  // Case study: same structure as the design. Sections without real content are left out.
  function renderCase(w) {
    var pl = w.platforms || ['web'];
    var web = pl.indexOf('web') !== -1, mob = pl.indexOf('mobile') !== -1;
    var idx = WORKS.indexOf(w);
    var next = WORKS[(idx + 1) % WORKS.length];
    var ms = w.mobileScreens || [];
    var ws = w.webScreens || [];
    var res = w.results || [];
    var meta = [
      ['Role', w.role],
      ['Timeline', w.timeline],
      ['Platform', [web ? 'Web' : null, mob ? 'iOS & Android' : null].filter(Boolean).join(', ')],
      ['Tools', w.tools],
      ['Team', w.team]
    ].filter(function (m) { return m[1]; });
    function text(items) {
      items = items.filter(function (s) { return s[1]; });
      return items.length ? items.map(function (s) { return '<div><h2>' + esc(s[0]) + '</h2><p>' + esc(s[1]) + '</p></div>'; }).join('') : '';
    }
    function cap(c) { return c ? '<figcaption>' + esc(c) + '</figcaption>' : ''; }

    var html = '';
    html += '<button type="button" class="cs-back rise" id="back"><svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 18l-6-6 6-6"></path></svg>All work</button>';
    html += '<header class="cs-head rise" style="animation-delay:60ms"><span class="cs-tag">' + esc(w.tags || [web ? 'Web' : null, mob ? 'Mobile' : null].filter(Boolean).join(' · ')) + '</span><h1>' + esc(w.title) + '</h1><p>' + esc(w.desc) + '</p></header>';
    if (w.web || w.mobile) {
      var both = w.web && w.mobile;
      html += '<div class="cs-hero rise" style="animation-delay:140ms">';
      if (w.web) html += browser(w.web, w.title + ' website', '', both ? 'left:6%;top:12%;width:70%' : 'left:9%;top:11%;width:82%');
      if (w.mobile) html += device(w.mobile, w.title + ' app', both ? 'left:71%;top:20%;width:22%' : 'left:39%;top:8%;width:22%');
      html += '</div>';
    }
    if (meta.length) html += '<dl class="cs-meta rise" style="animation-delay:220ms">' + meta.map(function (m) { return '<div><dt>' + esc(m[0]) + '</dt><dd>' + esc(m[1]) + '</dd></div>'; }).join('') + '</dl>';
    var intro = text([['Overview', w.overview], ['The problem', w.problem]]);
    if (intro) html += '<section class="cs-text rise" style="animation-delay:300ms">' + intro + '</section>';
    ws.forEach(function (s) {
      html += '<figure class="cs-fig"><div class="panel">' + browser(s.src, w.title + ' screen', '') + '</div>' + cap(s.caption) + '</figure>';
    });
    var middle = text([['Process', w.process], ['Solution', w.solution]]);
    if (middle) html += '<section class="cs-text">' + middle + '</section>';
    if (ms.length) html += '<figure class="cs-fig"><div class="panel phones">' + ms.slice(0, 3).map(function (src, i) { return device(src, w.title + ' screen ' + (i + 1)); }).join('') + '</div>' + cap(w.mobileCaption) + '</figure>';
    if (w.outcome || res.length) {
      html += '<section class="cs-outcome"><h2>Outcome</h2>' + (w.outcome ? '<p>' + esc(w.outcome) + '</p>' : '') + (res.length ? '<div class="cs-results">' +
        res.map(function (r) { return '<div><strong>' + esc(r.v) + '</strong><span>' + esc(r.l) + '</span></div>'; }).join('') + '</div>' : '') + '</section>';
    }
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
