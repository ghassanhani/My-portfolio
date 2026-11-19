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
  function trio(w, cls) {
    return w.phones.map(function (src, i) { return device(src, w.title + ' app screen ' + (i + 1), '', cls + ' trio-' + i); }).join('');
  }
  function cover(w) {
    if (w.phones) return '<span class="cover">' + trio(w, 'frame') + '</span>';
    var phone = w.mobile && (!w.web || w.coverFrame === 'phone');
    return '<span class="cover">' + (phone
      ? device(w.mobile, w.title + ' app screen', '', 'frame frame-phone')
      : browser(w.web, w.title + ' website screen', '', '', 'frame frame-web')) + '</span>';
  }
  function byline(w) {
    var parts = [w.client, w.role, w.year].filter(Boolean);
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
    var res = w.results || [];
    var list = function (v) { return Array.isArray(v) ? v.join(', ') : v; };
    var meta = [
      ['Role', w.role],
      ['Year', w.year],
      ['Platform', w.platform || [web ? 'Web' : null, mob ? 'iOS & Android' : null].filter(Boolean).join(', ')],
      ['Tools', list(w.tools)],
      ['Technology', list(w.tech)]
    ].filter(function (m) { return m[1]; });
    function text(items) {
      items = items.filter(function (s) { return s[1]; });
      return items.length ? items.map(function (s) { return '<div><h2>' + esc(s[0]) + '</h2><p>' + esc(s[1]) + '</p></div>'; }).join('') : '';
    }
    // One screen of the walkthrough: the screenshot in its frame, then its title and description.
    // Long pages scroll inside their frame.
    function screen(sc, i) {
      var alt = w.title + ': ' + sc.title;
      var hint = '<span class="scroll-hint" aria-hidden="true">Scroll</span>';
      var frame = sc.phone
        ? '<div class="panel panel-phone"><span class="device scrolls"><span class="view" role="region" tabindex="0" aria-label="' + esc(alt) + ', scrollable">' + img(sc.src, alt) + '</span>' + hint + '</span></div>'
        : '<div class="panel"><span class="browser scrolls">' + BAR + '<span class="view" role="region" tabindex="0" aria-label="' + esc(alt) + ', scrollable">' + img(sc.src, alt) + '</span>' + hint + '</span></div>';
      return '<figure class="cs-screen' + (sc.phone ? ' is-phone' : '') + '">' + frame +
        '<figcaption><span class="cs-num">' + String(i + 1).padStart(2, '0') + '</span><h3>' + esc(sc.title) + '</h3><p>' + esc(sc.desc) + '</p></figcaption></figure>';
    }

    var html = '';
    html += '<header class="cs-head rise" style="animation-delay:60ms"><span class="cs-tag">' + esc(w.tags || [web ? 'Web' : null, mob ? 'Mobile' : null].filter(Boolean).join(' · ')) + '</span><h1>' + esc(w.title) + '</h1><p>' + esc(w.desc) + '</p></header>';
    if (w.phones && !w.web) {
      html += '<div class="cs-hero rise" style="animation-delay:140ms">' + trio(w, '') + '</div>';
    } else if (w.web || w.mobile) {
      var both = w.web && w.mobile;
      html += '<div class="cs-hero rise" style="animation-delay:140ms">';
      if (w.web) html += browser(w.web, w.title + ' website', '', both ? 'left:6%;top:12%;width:70%' : 'left:9%;top:11%;width:82%');
      if (w.mobile) html += device(w.mobile, w.title + ' app', both ? 'left:71%;top:20%;width:22%' : 'left:39%;top:8%;width:22%');
      html += '</div>';
    }
    if (meta.length) html += '<dl class="cs-meta rise" style="animation-delay:220ms">' + meta.map(function (m) { return '<div><dt>' + esc(m[0]) + '</dt><dd>' + esc(m[1]) + '</dd></div>'; }).join('') + '</dl>';
    var intro = text([['Overview', w.overview], ['The problem', w.problem]]);
    if (intro) html += '<section class="cs-text rise" style="animation-delay:300ms">' + intro + '</section>';
    var middle = text([['Process', w.process], ['Solution', w.solution]]);
    if (middle) html += '<section class="cs-text">' + middle + '</section>';
    var screens = w.screens || [];
    if (screens.length) {
      html += '<section class="cs-screens"><h2>' + screens.length + ' screens</h2><div class="cs-screen-list">' + screens.map(screen).join('') + '</div></section>';
    }
    if (w.outcome || res.length) {
      html += '<section class="cs-outcome"><h2>Outcome</h2>' + (w.outcome ? '<p>' + esc(w.outcome) + '</p>' : '') + (res.length ? '<div class="cs-results">' +
        res.map(function (r) { return '<div><strong>' + esc(r.v) + '</strong><span>' + esc(r.l) + '</span></div>'; }).join('') + '</div>' : '') + '</section>';
    }
    html += '<button type="button" class="cs-next" id="next" aria-label="Next project: ' + esc(next.title) + '"><span class="panel"><span class="label"><small>Next project</small><strong>' + esc(next.title) + '</strong></span>' +
      '<svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span></button>';

    caseEl.innerHTML = html;
    // Show the scroll hint only on frames whose screenshot is taller than the frame.
    Array.prototype.forEach.call(caseEl.querySelectorAll('.scrolls'), function (f) {
      var v = f.querySelector('.view'), im = v.querySelector('img');
      function check() { f.classList.toggle('is-long', v.scrollHeight > v.clientHeight + 8); }
      if (im) { im.addEventListener('load', check); if (window.ResizeObserver) new ResizeObserver(check).observe(im); requestAnimationFrame(check); }
      v.addEventListener('scroll', function () { f.classList.toggle('scrolled', v.scrollTop > 8); }, { passive: true });
    });
    document.getElementById('next').addEventListener('click', function () { location.hash = next.slug; });
  }

  // Fixed header: brand on home; back link and the project title (once its heading scrolls away) on a case study.
  var topbar = document.getElementById('topbar');
  var tbBack = document.getElementById('tb-back');
  var tbTitle = document.getElementById('tb-title');
  var brand = topbar.querySelector('.brand');
  tbBack.addEventListener('click', function () { location.hash = ''; });
  function onScroll() {
    topbar.classList.toggle('scrolled', window.scrollY > 4);
    var h = !caseEl.hidden && caseEl.querySelector('.cs-head h1');
    tbTitle.classList.toggle('show', !!h && h.getBoundingClientRect().bottom < 64);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  document.getElementById('tb-work').addEventListener('click', function (e) {
    e.preventDefault();
    if (location.hash) location.hash = '';
    requestAnimationFrame(function () { document.querySelector('.work').scrollIntoView({ behavior: 'smooth' }); });
  });

  function route() {
    var m = location.hash.match(/^#([\w-]+)$/);
    var w = m && WORKS.filter(function (x) { return x.slug === m[1]; })[0];
    if (w) {
      renderCase(w);
      home.hidden = true;
      caseEl.hidden = false;
      document.title = w.title + ' — Ghassan';
      tbTitle.textContent = w.title;
    } else {
      caseEl.hidden = true;
      home.hidden = false;
      document.title = 'Ghassan — Senior Product Designer';
    }
    brand.hidden = !!w; tbBack.hidden = !w;
    window.scrollTo(0, 0);
    onScroll();
  }

  window.addEventListener('hashchange', route);
  renderGrid();
  route();
})();
