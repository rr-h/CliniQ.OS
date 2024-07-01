(function () {
  'use strict';

  var a = window.location;
  var r = window.document;
  var o = r.currentScript;
  var l = o.getAttribute('data-api') || new URL(o.src).origin + '/api/event';

  function s(t, e) {
    if (t) console.warn('Ignoring Event: ' + t);
    if (e && e.callback) e.callback();
  }

  function t(t, e) {
    if (/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(a.hostname) || a.protocol === 'file:') {
      return s('localhost', e);
    }

    if ((window._phantom || window.__nightmare || window.navigator.webdriver || window.Cypress) && !window.__plausible) {
      return s(null, e);
    }

    try {
      if (window.localStorage.plausible_ignore === 'true') {
        return s('localStorage flag', e);
      }
    } catch (error) {
      // handle error
    }

    var i = {
      n: t,
      u: a.href,
      d: o.getAttribute('data-domain'),
      r: r.referrer || null,
      m: e && e.meta ? JSON.stringify(e.meta) : undefined,
      p: e && e.props ? e.props : undefined
    };

    fetch(l, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain'
      },
      body: JSON.stringify(i)
    })
      .then(response => {
        if (e && e.callback) {
          e.callback({ status: response.status });
        }
      })
      .catch(error => {
        console.error('Error sending data', error);
      });
  }

  var e = (window.plausible && window.plausible.q) || [];
  window.plausible = t;
  for (var n = 0; n < e.length; n++) {
    t.apply(this, e[n]);
  }

  function p() {
    if (i !== a.pathname) {
      i = a.pathname;
      t('pageview');
    }
  }

  var i;
  var u = window.history;
  if (u.pushState) {
    var c = u.pushState;
    u.pushState = function () {
      c.apply(this, arguments);
      p();
    };
    window.addEventListener('popstate', p);
  }

  if (r.visibilityState === 'prerender') {
    r.addEventListener('visibilitychange', function () {
      if (!i && r.visibilityState === 'visible') {
        p();
      }
    });
  } else {
    p();
  }
})();
