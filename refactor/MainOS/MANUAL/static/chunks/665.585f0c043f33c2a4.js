'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [665],
  {
    83670: function(n, e, i) {
      var r = i(85893);
      e.Z = function(n) {
        var e = n.width,
          i = void 0 === e ? 110 : e,
          t = n.height,
          o = void 0 === t ? 24 : t;
        return (0, r.jsx)('svg', {
          viewBox: '0 0 110 24',
          width: i,
          height: o,
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: (0, r.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d:
              'M10.6 0h1v9h9v1h-1v1h-1v2h-1v1h-1v2h-1v2h-1v1h-1v2h-1v1h-1v1h-1v1h-1v-9h-9v-1h1v-1h1v-2h1v-1h1V8h1V6h1V5h1V3h1V2h1V1h1V0Zm20.8 4.8h-4.8v14.4h4.8v-4.8h4.8v4.8H41V4.8h-4.8v4.8h-4.8V4.8Zm21.6 6h4.8v3.6H53v4.8h-4.8V4.8h12v4.8H53v1.2Zm-6-6h-4.8v14.4H47V4.8Zm14.4 0h4.8v14.4h-4.8V4.8Zm10.8 0H71v14.4h8.4V18h-7.2V4.8Zm8.4 6h1.2V9.6H83V8.4h4.8v1.2H89V18h1.2v1.2h-2.4V18h-1.2v1.2h-4.8V18h-1.2V14.4h1.2v-1.2H85.4V12h2.4v-1.2h-1.2V9.6h-2.4v1.2H83V12h-2.4v-1.2Zm6 2.4v1.2H83v1.2h-1.2v1.2H83V18h2.4v-1.2h2.4V13.2h-1.2ZM95 18h2.4v-1.2h1.2v-1.2h1.2V12h-1.2v-1.2h-1.2V9.6H95v1.2h-2.4v6H95V18Zm-2.4 0v1.2h-1.2V4.8h1.2v4.8h1.2V8.4h4.8v1.2h1.2v1.2h1.2v6h-1.2V18h-1.2v1.2h-4.8V18h-1.2Zm9.6-2.4h1.2v1.2h1.2V18h2.4v-1.2h1.2v-1.2H107v-1.2H103.4v-1.2h-1.2V9.6h1.2V8.4h4.8v1.2h1.2V12h-1.2v-1.2H107V9.6h-2.4v1.2h-1.2V12h1.2v1.2H108.2v1.2h1.2V18h-1.2v1.2h-4.8V18h-1.2v-2.4Z',
            fill: '#000'
          })
        });
      };
    },
    21322: function(n, e, i) {
      i.d(e, {
        v: function() {
          return s;
        }
      });
      var r = i(7297),
        t = i(85893),
        o = i(67294),
        a = i(14141);

      function d() {
        var n = (0, r.Z)([
          '\n  z-index: 10;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  width: 100%;\n  height: ',
          'px;\n  border-top: 1px solid #000;\n  background: #fff;\n  overflow: hidden;\n'
        ]);
        return (
          (d = function() {
            return n;
          }),
          n
        );
      }

      function h() {
        var n = (0, r.Z)([
          '\n  display: flex;\n  background: #fff;\n  animation: scroll 30s linear infinite;\n\n  @keyframes scroll {\n    0% {\n      transform: translateX(0);\n    }\n\n    100% {\n      transform: translateX(-100%);\n    }\n  }\n'
        ]);
        return (
          (h = function() {
            return n;
          }),
          n
        );
      }

      function c() {
        var n = (0, r.Z)([
          '\n  --margin: 12px;\n  display: flex;\n  align-items: center;\n  margin: 5px var(--margin) 5px 0;\n  white-space: nowrap;\n  font-family: var(--font-title);\n  font-size: 13px;\n\n  img {\n    width: 16px;\n    margin-right: var(--margin);\n  }\n'
        ]);
        return (
          (c = function() {
            return n;
          }),
          n
        );
      }
      var s = 40,
        l = a.ZP.div.withConfig({ componentId: 'sc-6c3c94a3-0' })(d(), s),
        u = a.ZP.div.withConfig({ componentId: 'sc-6c3c94a3-1' })(h()),
        v = a.ZP.div.withConfig({ componentId: 'sc-6c3c94a3-2' })(c());
      e.Z = function(n) {
        var e = n.children;
        return (0, t.jsx)(l, {
          'aria-hidden': 'true',
          children: [0, 1].map(function(n, i) {
            return (0, t.jsx)(
              u,
              {
                children: o.Children.map(e, function(n) {
                  return (0, t.jsxs)(v, { children: [(0, t.jsx)('img', { src: './images/HIFILABS/icons/hifibolt.svg', alt: 'bolt' }), n] }, i);
                })
              },
              i
            );
          })
        });
      };
    },
    76222: function(n, e, i) {
      i.d(e, {
        Ie: function() {
          return u;
        },
        WQ: function() {
          return l;
        },
        aV: function() {
          return v;
        },
        im: function() {
          return s;
        }
      });
      var r = i(7297),
        t = i(14141),
        o = i(21322);

      function a() {
        var n = (0, r.Z)([
          '\n  display: flex;\n  flex-direction: column;\n\n  @media only screen and (min-width: 600px) {\n    flex-direction: row;\n  }\n'
        ]);
        return (
          (a = function() {
            return n;
          }),
          n
        );
      }

      function d() {
        var n = (0, r.Z)([
          '\n  z-index: 9;\n  background: #fff;\n  border-bottom: 1px solid #000;\n\n  @media only screen and (min-width: 600px) {\n    position: sticky;\n    top: 0;\n    width: 33%;\n    height: 100%;\n    border-bottom: 0;\n  }\n'
        ]);
        return (
          (d = function() {
            return n;
          }),
          n
        );
      }

      function h() {
        var n = (0, r.Z)([
          '\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  & > * {\n    text-align: center;\n    margin: 0;\n  }\n\n  @media only screen and (max-width: 699px) {\n    padding: 10px;\n    gap: 24px;\n    align-content: center;\n  }\n\n  @media only screen and (min-width: 700px) {\n    position: sticky;\n    top: 0;\n    gap: 32px;\n    width: unset;\n    height: 100%;\n    padding: 16px 24px;\n  }\n'
        ]);
        return (
          (h = function() {
            return n;
          }),
          n
        );
      }

      function c() {
        var n = (0, r.Z)([
          '\n  z-index: 8;\n  display: flex;\n  flex-direction: column;\n  padding: 16px 24px ',
          'px;\n  border-left: 1px solid #000;\n\n  @media only screen and (min-width: 600px) {\n    width: 67%;\n    padding-bottom: 60px;\n  }\n\n  @media only screen and (max-width: 899px) {\n    overflow-y: scroll;\n  }\n\n  @media only screen and (min-width: 900px) {\n    /* totally arbitrary lol dont be afraid to change */\n    min-height: calc(100vh - 45px - 70px);\n  }\n'
        ]);
        return (
          (c = function() {
            return n;
          }),
          n
        );
      }
      var s = t.ZP.div.withConfig({ componentId: 'sc-6883e17e-0' })(a()),
        l = t.ZP.div.withConfig({ componentId: 'sc-6883e17e-1' })(d()),
        u = t.ZP.div.withConfig({ componentId: 'sc-6883e17e-2' })(h()),
        v = t.ZP.div.withConfig({ componentId: 'sc-6883e17e-3' })(c(), 2 * o.v);
    },
    60665: function(n, e, i) {
      i.r(e),
        i.d(e, {
          default: function() {
            return z;
          }
        });
      var r = i(85893),
        t = i(67294),
        o = i(37278),
        a = i(60374),
        d = i(7297),
        h = i(14141),
        c = i(12242),
        s = i(12725);

      function l() {
        var n = (0, d.Z)([
          "\n  aspect-ratio: 12 / 5;\n  max-width: calc(100vw - 32px * 2);\n  width: 100%;\n  height: 35%;\n  min-height: 213px;\n  position: relative;\n  margin: 0 0 24px;\n  padding: 32px;\n  box-shadow: 2px 2px 0px #1c1c1e;\n  border: 1px solid #000;\n\n  --background-color: rgba(255, 255, 255);\n  --square-color: #e0e0e0;\n  --square-size: 1px;\n  background-color: var(--background-color);\n  background-image: linear-gradient(45deg, var(--square-color) 25%, transparent 25%),\n    linear-gradient(135deg, var(--square-color) 25%, transparent 25%),\n    linear-gradient(45deg, transparent 75%, var(--square-color) 75%),\n    linear-gradient(135deg, transparent 75%, var(--square-color) 75%);\n  background-size: calc(2 * var(--square-size)) calc(2 * var(--square-size));\n  background-position: 0 0, var(--square-size) 0, var(--square-size) calc(-1 * var(--square-size)),\n    0 calc(-1 * var(--square-size));\n\n  &:before,\n  &:after {\n    --margin: 32px;\n    content: ' ';\n    pointer-events: none;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: calc(100% - var(--margin) * 2);\n    height: calc(100% - var(--margin) * 2);\n    border-width: var(--margin);\n    mix-blend-mode: color-burn;\n  }\n\n  &:before {\n    border-style: outset;\n    border-color: #fff;\n    transform: scale(-1, 1);\n  }\n\n  &:after {\n    border-style: outset;\n    border-color: #b8b8b8;\n  }\n"
        ]);
        return (
          (l = function() {
            return n;
          }),
          n
        );
      }

      function u() {
        var n = (0, d.Z)([
          '\n  z-index: 10;\n  position: absolute;\n  top: 5px;\n  left: 44px;\n  margin: 0;\n  font-size: 13px;\n  line-height: 24px;\n'
        ]);
        return (
          (u = function() {
            return n;
          }),
          n
        );
      }

      function v() {
        var n = (0, d.Z)([
          '\n  --margin: 32px;\n  position: absolute;\n  top: var(--margin);\n  left: var(--margin);\n  width: calc(100% - var(--margin) * 2);\n  height: calc(100% - var(--margin) * 2);\n  border: 1px solid #000;\n  overflow: hidden;\n'
        ]);
        return (
          (v = function() {
            return n;
          }),
          n
        );
      }

      function f() {
        var n = (0, d.Z)([
          '\n  position: absolute;\n  right: 44px;\n  bottom: 12px;\n  z-index: 10;\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  justify-content: flex-end;\n\n  button {\n    box-shadow: 2px 2px 0px #1c1c1e;\n\n    &:hover {\n      box-shadow: 1px 0px 0px #000;\n      transform: translate(0, 2px);\n    }\n  }\n'
        ]);
        return (
          (f = function() {
            return n;
          }),
          n
        );
      }
      var p = h.ZP.div.withConfig({ componentId: 'sc-18712ac0-0' })(l()),
        x = h.ZP.h2.withConfig({ componentId: 'sc-18712ac0-1' })(u()),
        g = h.ZP.div.withConfig({ componentId: 'sc-18712ac0-2' })(v()),
        m = h.ZP.div.withConfig({ componentId: 'sc-18712ac0-3' })(f()),
        b = function(n) {
          var e,
            i,
            t,
            o = n.idea,
            a = n.index,
            d = n.onClick,
            h = o.Name.title[0].plain_text,
            l = null === (e = o.Image) || void 0 === e ? void 0 : e.url,
            u =
              null === (i = o['Website Slug']) || void 0 === i
                ? void 0
                : i.rich_text
                    .map(function(n) {
                      return n.plain_text;
                    })
                    .join(),
            v = null === (t = o.listImageYOffset) || void 0 === t ? void 0 : t.number;
          return (0, r.jsxs)(p, {
            children: [
              (0, r.jsx)(x, { children: h }),
              (0, r.jsx)(g, { children: (0, r.jsx)(s.Z, { src: l, alt: h, priority: a < 3, width: '100%', height: '100%', objectPosition: v }) }),
              (0, r.jsx)(m, {
                children: (0, r.jsx)(c.Z, {
                  variant: 'light',
                  onClick: function() {
                    return d(u);
                  },
                  children: 'Project Info'
                })
              })
            ]
          });
        },
        w = i(83670),
        V = i(46789),
        Z = i(76222),
        j = i(20805),
        I = i(92783),
        y = function(n) {
          var e = n.ideas,
            i = (0, j.useStore)(function(n) {
              return { openWindow: n.openWindow };
            }, a.Z).openWindow,
            o = function(n) {
              i('idea', { slug: n });
            },
            d = e.sort(function(n, e) {
              return n.Order.number - e.Order.number;
            });
          return (0, r.jsx)(t.Suspense, {
            fallback: (0, r.jsx)('div', { children: 'Loading...' }),
            children: (0, r.jsxs)(Z.im, {
              children: [
                (0, r.jsx)(Z.WQ, {
                  children: (0, r.jsxs)(Z.Ie, {
                    children: [
                      (0, r.jsx)(w.Z, {}),
                      (0, r.jsx)('h2', { children: 'Idea Lab' }),
                      (0, r.jsx)('p', { children: I.sl['IdeaLab.Description'] }),
                      (0, r.jsx)(V.C, { urls: I.GT }),
                      I.sl['IdeaLab.ButtonHref'] &&
                        (0, r.jsx)(c.Z, { variant: 'dark', externalHref: I.sl['IdeaLab.ButtonHref'], children: I.sl['IdeaLab.ButtonLabel'] })
                    ]
                  })
                }),
                (0, r.jsx)(Z.aV, {
                  children: d.map(function(n, e) {
                    return n['Show On Website'].checkbox && (0, r.jsx)(b, { idea: n, index: e, onClick: o }, e);
                  })
                })
              ]
            })
          });
        },
        k = i(21322),
        H = i(2962),
        C = i(32618),
        q = function() {
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(H.PB, {
                title: 'Idea Lab',
                description:
                  'The Idea Lab is here to bring the most original ideas in web3 to life with the greatest artists in the world. Whether an artist\u2019s original concept, or an idea we help to build with an artist\u2019s unique talents and goals in mind, we provide the resources to pull off the most unique and creative ideas, which traditionally fell through the cracks due to lack of funding, bandwidth and know-how.'
              }),
              (0, r.jsxs)(o.Z, {
                title: 'Idea Lab',
                windowId: 'idealab',
                width: 845,
                height: 585,
                children: [(0, r.jsx)(y, { ideas: C }), (0, r.jsx)(k.Z, { children: (0, I.xu)(I.sl['IdeaLab.Marquee']) })]
              })
            ]
          });
        },
        z = (0, t.memo)(q);
    }
  }
]);
