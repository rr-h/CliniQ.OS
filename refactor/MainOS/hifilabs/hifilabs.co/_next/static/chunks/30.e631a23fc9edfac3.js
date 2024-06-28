'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [30],
  {
    12242: function(n, e, r) {
      var i = r(26042),
        t = r(69396),
        o = r(99534),
        a = r(85893),
        c = r(41664),
        s = r.n(c),
        d = r(5017),
        l = r(14141),
        h = r(57247),
        u = l.ZP.button.withConfig({ componentId: 'sc-e4deb317-0' })(
          {
            display: 'flex',
            flex: 'none',
            flexGrow: 0,
            order: 1,
            gap: '8px',
            padding: '8px',
            border: '1px solid #000000',
            borderRadius: '12px',
            textDecoration: 'none',
            fontFamily: "'pixChicago', sans-serif",
            fontSize: '13px',
            lineHeight: '24px',
            '&:hover': { cursor: 'pointer' },
            '&:disabled': { background: '#E2E2E2', cursor: 'not-allowed' }
          },
          (0, h.bU)({ variants: { light: { background: '#fff', color: '#000' }, dark: { background: '#000', color: '#fff' } } })
        );
      e.Z = function(n) {
        var e = n.href,
          r = n.externalHref,
          c = n.variant,
          l = n.style,
          h = void 0 === l ? {} : l,
          v = n.onClick,
          f = void 0 === v ? function() {} : v,
          p = (0, o.Z)(n, ['href', 'externalHref', 'variant', 'style', 'onClick']),
          x = (0, d.wW)();
        return e
          ? (0, a.jsx)(s(), {
              href: e,
              children: (0, a.jsx)(u, {
                variant: c,
                onClick: function() {
                  x('click-link', { props: { url: e } }), f();
                },
                children: p.children
              })
            })
          : r
          ? (0, a.jsx)('a', {
              href: r,
              target: '_blank',
              rel: 'noreferrer',
              style: (0, t.Z)((0, i.Z)({}, h), { textDecoration: 'none' }),
              onClick: function() {
                x('click-button-external-link', { props: { url: r } });
              },
              children: (0, a.jsx)(u, { variant: c, onClick: f, children: p.children })
            })
          : e
          ? void 0
          : (0, a.jsx)(u, {
              variant: c,
              onClick: function() {
                x('click-link', { props: { url: e } }), f();
              },
              children: p.children
            });
      };
    },
    83670: function(n, e, r) {
      var i = r(85893);
      e.Z = function(n) {
        var e = n.width,
          r = void 0 === e ? 110 : e,
          t = n.height,
          o = void 0 === t ? 24 : t;
        return (0, i.jsx)('svg', {
          viewBox: '0 0 110 24',
          width: r,
          height: o,
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: (0, i.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d:
              'M10.6 0h1v9h9v1h-1v1h-1v2h-1v1h-1v2h-1v2h-1v1h-1v2h-1v1h-1v1h-1v1h-1v-9h-9v-1h1v-1h1v-2h1v-1h1V8h1V6h1V5h1V3h1V2h1V1h1V0Zm20.8 4.8h-4.8v14.4h4.8v-4.8h4.8v4.8H41V4.8h-4.8v4.8h-4.8V4.8Zm21.6 6h4.8v3.6H53v4.8h-4.8V4.8h12v4.8H53v1.2Zm-6-6h-4.8v14.4H47V4.8Zm14.4 0h4.8v14.4h-4.8V4.8Zm10.8 0H71v14.4h8.4V18h-7.2V4.8Zm8.4 6h1.2V9.6H83V8.4h4.8v1.2H89V18h1.2v1.2h-2.4V18h-1.2v1.2h-4.8V18h-1.2V14.4h1.2v-1.2H85.4V12h2.4v-1.2h-1.2V9.6h-2.4v1.2H83V12h-2.4v-1.2Zm6 2.4v1.2H83v1.2h-1.2v1.2H83V18h2.4v-1.2h2.4V13.2h-1.2ZM95 18h2.4v-1.2h1.2v-1.2h1.2V12h-1.2v-1.2h-1.2V9.6H95v1.2h-2.4v6H95V18Zm-2.4 0v1.2h-1.2V4.8h1.2v4.8h1.2V8.4h4.8v1.2h1.2v1.2h1.2v6h-1.2V18h-1.2v1.2h-4.8V18h-1.2Zm9.6-2.4h1.2v1.2h1.2V18h2.4v-1.2h1.2v-1.2H107v-1.2H103.4v-1.2h-1.2V9.6h1.2V8.4h4.8v1.2h1.2V12h-1.2v-1.2H107V9.6h-2.4v1.2h-1.2V12h1.2v1.2H108.2v1.2h1.2V18h-1.2v1.2h-4.8V18h-1.2v-2.4Z',
            fill: '#000'
          })
        });
      };
    },
    21322: function(n, e, r) {
      r.d(e, {
        v: function() {
          return l;
        }
      });
      var i = r(7297),
        t = r(85893),
        o = r(67294),
        a = r(14141);
      function c() {
        var n = (0, i.Z)([
          '\n  z-index: 10;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  width: 100%;\n  height: ',
          'px;\n  border-top: 1px solid #000;\n  background: #fff;\n  overflow: hidden;\n'
        ]);
        return (
          (c = function() {
            return n;
          }),
          n
        );
      }
      function s() {
        var n = (0, i.Z)([
          '\n  display: flex;\n  background: #fff;\n  animation: scroll 30s linear infinite;\n\n  @keyframes scroll {\n    0% {\n      transform: translateX(0);\n    }\n\n    100% {\n      transform: translateX(-100%);\n    }\n  }\n'
        ]);
        return (
          (s = function() {
            return n;
          }),
          n
        );
      }
      function d() {
        var n = (0, i.Z)([
          '\n  --margin: 12px;\n  display: flex;\n  align-items: center;\n  margin: 5px var(--margin) 5px 0;\n  white-space: nowrap;\n  font-family: var(--font-title);\n  font-size: 13px;\n\n  img {\n    width: 16px;\n    margin-right: var(--margin);\n  }\n'
        ]);
        return (
          (d = function() {
            return n;
          }),
          n
        );
      }
      var l = 40,
        h = a.ZP.div.withConfig({ componentId: 'sc-6c3c94a3-0' })(c(), l),
        u = a.ZP.div.withConfig({ componentId: 'sc-6c3c94a3-1' })(s()),
        v = a.ZP.div.withConfig({ componentId: 'sc-6c3c94a3-2' })(d());
      e.Z = function(n) {
        var e = n.children;
        return (0, t.jsx)(h, {
          'aria-hidden': 'true',
          children: [0, 1].map(function(n, r) {
            return (0, t.jsx)(
              u,
              {
                children: o.Children.map(e, function(n) {
                  return (0, t.jsxs)(v, { children: [(0, t.jsx)('img', { src: '/images/HIFILABS/icons/hifibolt.svg', alt: 'bolt' }), n] }, r);
                })
              },
              r
            );
          })
        });
      };
    },
    76222: function(n, e, r) {
      r.d(e, {
        Ie: function() {
          return u;
        },
        WQ: function() {
          return h;
        },
        aV: function() {
          return v;
        },
        im: function() {
          return l;
        }
      });
      var i = r(7297),
        t = r(14141),
        o = r(21322);
      function a() {
        var n = (0, i.Z)([
          '\n  display: flex;\n  flex-direction: column;\n\n  @media only screen and (min-width: 600px) {\n    flex-direction: row;\n  }\n'
        ]);
        return (
          (a = function() {
            return n;
          }),
          n
        );
      }
      function c() {
        var n = (0, i.Z)([
          '\n  z-index: 9;\n  background: #fff;\n  border-bottom: 1px solid #000;\n\n  @media only screen and (min-width: 600px) {\n    position: sticky;\n    top: 0;\n    width: 33%;\n    height: 100%;\n    border-bottom: 0;\n  }\n'
        ]);
        return (
          (c = function() {
            return n;
          }),
          n
        );
      }
      function s() {
        var n = (0, i.Z)([
          '\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  & > * {\n    text-align: center;\n    margin: 0;\n  }\n\n  @media only screen and (max-width: 699px) {\n    padding: 10px;\n    gap: 24px;\n    align-content: center;\n  }\n\n  @media only screen and (min-width: 700px) {\n    position: sticky;\n    top: 0;\n    gap: 32px;\n    width: unset;\n    height: 100%;\n    padding: 16px 24px;\n  }\n'
        ]);
        return (
          (s = function() {
            return n;
          }),
          n
        );
      }
      function d() {
        var n = (0, i.Z)([
          '\n  z-index: 8;\n  display: flex;\n  flex-direction: column;\n  padding: 16px 24px ',
          'px;\n  border-left: 1px solid #000;\n\n  @media only screen and (min-width: 600px) {\n    width: 67%;\n    padding-bottom: 60px;\n  }\n\n  @media only screen and (max-width: 899px) {\n    overflow-y: scroll;\n  }\n\n  @media only screen and (min-width: 900px) {\n    /* totally arbitrary lol dont be afraid to change */\n    min-height: calc(100vh - 45px - 70px);\n  }\n'
        ]);
        return (
          (d = function() {
            return n;
          }),
          n
        );
      }
      var l = t.ZP.div.withConfig({ componentId: 'sc-6883e17e-0' })(a()),
        h = t.ZP.div.withConfig({ componentId: 'sc-6883e17e-1' })(c()),
        u = t.ZP.div.withConfig({ componentId: 'sc-6883e17e-2' })(s()),
        v = t.ZP.div.withConfig({ componentId: 'sc-6883e17e-3' })(d(), 2 * o.v);
    },
    22030: function(n, e, r) {
      r.r(e),
        r.d(e, {
          default: function() {
            return P;
          }
        });
      var i = r(85893),
        t = r(67294),
        o = r(37278),
        a = r(60374),
        c = r(7297),
        s = r(14141),
        d = r(12242),
        l = r(12725),
        h = r(92783);
      function u() {
        var n = (0, c.Z)([
          "\n  aspect-ratio: 12 / 5;\n  max-width: calc(100vw - 32px * 2);\n  width: 100%;\n  height: 35%;\n  min-height: 213px;\n  position: relative;\n  margin: 0 0 24px;\n  padding: 32px;\n  box-shadow: 2px 2px 0px #1c1c1e;\n  border: 1px solid #000;\n\n  --background-color: rgba(255, 255, 255);\n  --square-color: #e0e0e0;\n  --square-size: 1px;\n  background-color: var(--background-color);\n  background-image: linear-gradient(45deg, var(--square-color) 25%, transparent 25%),\n    linear-gradient(135deg, var(--square-color) 25%, transparent 25%),\n    linear-gradient(45deg, transparent 75%, var(--square-color) 75%),\n    linear-gradient(135deg, transparent 75%, var(--square-color) 75%);\n  background-size: calc(2 * var(--square-size)) calc(2 * var(--square-size));\n  background-position: 0 0, var(--square-size) 0, var(--square-size) calc(-1 * var(--square-size)),\n    0 calc(-1 * var(--square-size));\n\n  &:before,\n  &:after {\n    --margin: 32px;\n    content: ' ';\n    pointer-events: none;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: calc(100% - var(--margin) * 2);\n    height: calc(100% - var(--margin) * 2);\n    border-width: var(--margin);\n    mix-blend-mode: color-burn;\n  }\n\n  &:before {\n    border-style: outset;\n    border-color: #fff;\n    transform: scale(-1, 1);\n  }\n\n  &:after {\n    border-style: outset;\n    border-color: #b8b8b8;\n  }\n"
        ]);
        return (
          (u = function() {
            return n;
          }),
          n
        );
      }
      function v() {
        var n = (0, c.Z)([
          '\n  z-index: 10;\n  position: absolute;\n  top: 5px;\n  left: 44px;\n  margin: 0;\n  font-size: 13px;\n  line-height: 24px;\n'
        ]);
        return (
          (v = function() {
            return n;
          }),
          n
        );
      }
      function f() {
        var n = (0, c.Z)([
          '\n  --margin: 32px;\n  position: absolute;\n  top: var(--margin);\n  left: var(--margin);\n  width: calc(100% - var(--margin) * 2);\n  height: calc(100% - var(--margin) * 2);\n  border: 1px solid #000;\n  overflow: hidden;\n'
        ]);
        return (
          (f = function() {
            return n;
          }),
          n
        );
      }
      function p() {
        var n = (0, c.Z)([
          '\n  position: absolute;\n  right: 44px;\n  bottom: 12px;\n  z-index: 10;\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  justify-content: flex-end;\n\n  button {\n    box-shadow: 2px 2px 0px #1c1c1e;\n\n    &:hover {\n      box-shadow: 1px 0px 0px #000;\n      transform: translate(0, 2px);\n    }\n  }\n'
        ]);
        return (
          (p = function() {
            return n;
          }),
          n
        );
      }
      var x = s.ZP.div.withConfig({ componentId: 'sc-18cfe016-0' })(u()),
        g = s.ZP.h2.withConfig({ componentId: 'sc-18cfe016-1' })(v()),
        m = s.ZP.div.withConfig({ componentId: 'sc-18cfe016-2' })(f()),
        b = s.ZP.div.withConfig({ componentId: 'sc-18cfe016-3' })(p()),
        w = function(n) {
          var e,
            r,
            t = n.artist,
            o = n.index,
            a = n.onClick,
            c = t.Name.title[0].plain_text,
            s = null === (e = t['Website Image']) || void 0 === e ? void 0 : e.url,
            u = (0, h.qF)(t),
            v = null === (r = t.listImageYOffset) || void 0 === r ? void 0 : r.number;
          return (0, i.jsxs)(x, {
            children: [
              (0, i.jsx)(g, { children: c }),
              (0, i.jsx)(m, { children: (0, i.jsx)(l.Z, { src: s, alt: c, priority: o < 3, width: '100%', height: '150px', objectPosition: v }) }),
              (0, i.jsx)(b, {
                children: (0, i.jsx)(d.Z, {
                  variant: 'light',
                  onClick: function() {
                    return a(u);
                  },
                  children: 'Profile'
                })
              })
            ]
          });
        },
        Z = r(83670),
        V = r(46789),
        k = r(76222),
        j = r(20805),
        y = function(n) {
          var e = n.artists,
            r = (0, j.useStore)(function(n) {
              return { openWindow: n.openWindow };
            }, a.Z).openWindow,
            o = function(n) {
              r('artist', { slug: n });
            };
          return (0, i.jsx)(t.Suspense, {
            fallback: (0, i.jsx)('div', { children: 'Loading...' }),
            children: (0, i.jsxs)(k.im, {
              children: [
                (0, i.jsx)(k.WQ, {
                  children: (0, i.jsxs)(k.Ie, {
                    children: [
                      (0, i.jsx)(Z.Z, {}),
                      (0, i.jsx)('h2', { children: 'Artist Lab' }),
                      (0, i.jsx)('p', { children: h.sl['ArtistLab.Description'] }),
                      (0, i.jsx)(V.C, { urls: h.GT }),
                      h.sl['ArtistLab.ButtonHref'] &&
                        (0, i.jsx)(d.Z, { variant: 'dark', externalHref: h.sl['ArtistLab.ButtonHref'], children: h.sl['ArtistLab.ButtonLabel'] })
                    ]
                  })
                }),
                (0, i.jsx)(k.aV, {
                  children: e.map(function(n, e) {
                    return n['Show On Website'].checkbox && (0, i.jsx)(w, { artist: n, index: e, onClick: o }, e);
                  })
                })
              ]
            })
          });
        },
        C = r(21322),
        H = r(2962),
        I = r(6173),
        z = function() {
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(H.PB, {
                title: 'Artist Lab',
                description:
                  'Led by an experienced team of music industry professionals, HIFI Labs provides modern A&R support to a roster of emerging artists. The A&R team at HIFI Labs focuses on artist development through web2 & web3 tools, empowering their roster of artists to take ownership of their art and creative endeavors by way of decentralized engagement and community solutions.'
              }),
              (0, i.jsxs)(o.Z, {
                title: 'Artist Lab',
                windowId: 'artistlab',
                width: 845,
                height: 585,
                children: [(0, i.jsx)(y, { artists: I }), (0, i.jsx)(C.Z, { children: (0, h.xu)(h.sl['ArtistLab.Marquee']) })]
              })
            ]
          });
        },
        P = (0, t.memo)(z);
    }
  }
]);
