'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [604],
  {
    12242: function(n, e, t) {
      var i = t(26042),
        r = t(69396),
        o = t(99534),
        a = t(85893),
        l = t(41664),
        c = t.n(l),
        d = t(5017),
        h = t(14141),
        s = t(57247),
        u = h.ZP.button.withConfig({ componentId: 'sc-e4deb317-0' })(
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
          (0, s.bU)({ variants: { light: { background: '#fff', color: '#000' }, dark: { background: '#000', color: '#fff' } } })
        );
      e.Z = function(n) {
        var e = n.href,
          t = n.externalHref,
          l = n.variant,
          h = n.style,
          s = void 0 === h ? {} : h,
          f = n.onClick,
          p = void 0 === f ? function() {} : f,
          x = (0, o.Z)(n, ['href', 'externalHref', 'variant', 'style', 'onClick']),
          v = (0, d.wW)();
        return e
          ? (0, a.jsx)(c(), {
              href: e,
              children: (0, a.jsx)(u, {
                variant: l,
                onClick: function() {
                  v('click-link', { props: { url: e } }), p();
                },
                children: x.children
              })
            })
          : t
          ? (0, a.jsx)('a', {
              href: t,
              target: '_blank',
              rel: 'noreferrer',
              style: (0, r.Z)((0, i.Z)({}, s), { textDecoration: 'none' }),
              onClick: function() {
                v('click-button-external-link', { props: { url: t } });
              },
              children: (0, a.jsx)(u, { variant: l, onClick: p, children: x.children })
            })
          : e
          ? void 0
          : (0, a.jsx)(u, {
              variant: l,
              onClick: function() {
                v('click-link', { props: { url: e } }), p();
              },
              children: x.children
            });
      };
    },
    83670: function(n, e, t) {
      var i = t(85893);
      e.Z = function(n) {
        var e = n.width,
          t = void 0 === e ? 110 : e,
          r = n.height,
          o = void 0 === r ? 24 : r;
        return (0, i.jsx)('svg', {
          viewBox: '0 0 110 24',
          width: t,
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
    21322: function(n, e, t) {
      t.d(e, {
        v: function() {
          return h;
        }
      });
      var i = t(7297),
        r = t(85893),
        o = t(67294),
        a = t(14141);

      function l() {
        var n = (0, i.Z)([
          '\n  z-index: 10;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  width: 100%;\n  height: ',
          'px;\n  border-top: 1px solid #000;\n  background: #fff;\n  overflow: hidden;\n'
        ]);
        return (
          (l = function() {
            return n;
          }),
          n
        );
      }

      function c() {
        var n = (0, i.Z)([
          '\n  display: flex;\n  background: #fff;\n  animation: scroll 30s linear infinite;\n\n  @keyframes scroll {\n    0% {\n      transform: translateX(0);\n    }\n\n    100% {\n      transform: translateX(-100%);\n    }\n  }\n'
        ]);
        return (
          (c = function() {
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
      var h = 40,
        s = a.ZP.div.withConfig({ componentId: 'sc-6c3c94a3-0' })(l(), h),
        u = a.ZP.div.withConfig({ componentId: 'sc-6c3c94a3-1' })(c()),
        f = a.ZP.div.withConfig({ componentId: 'sc-6c3c94a3-2' })(d());
      e.Z = function(n) {
        var e = n.children;
        return (0, r.jsx)(s, {
          'aria-hidden': 'true',
          children: [0, 1].map(function(n, t) {
            return (0, r.jsx)(
              u,
              {
                children: o.Children.map(e, function(n) {
                  return (0, r.jsxs)(f, { children: [(0, r.jsx)('img', { src: './images/HIFILABS/icons/hifibolt.svg', alt: 'bolt' }), n] }, t);
                })
              },
              t
            );
          })
        });
      };
    },
    76222: function(n, e, t) {
      t.d(e, {
        Ie: function() {
          return u;
        },
        WQ: function() {
          return s;
        },
        aV: function() {
          return f;
        },
        im: function() {
          return h;
        }
      });
      var i = t(7297),
        r = t(14141),
        o = t(21322);

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

      function l() {
        var n = (0, i.Z)([
          '\n  z-index: 9;\n  background: #fff;\n  border-bottom: 1px solid #000;\n\n  @media only screen and (min-width: 600px) {\n    position: sticky;\n    top: 0;\n    width: 33%;\n    height: 100%;\n    border-bottom: 0;\n  }\n'
        ]);
        return (
          (l = function() {
            return n;
          }),
          n
        );
      }

      function c() {
        var n = (0, i.Z)([
          '\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  & > * {\n    text-align: center;\n    margin: 0;\n  }\n\n  @media only screen and (max-width: 699px) {\n    padding: 10px;\n    gap: 24px;\n    align-content: center;\n  }\n\n  @media only screen and (min-width: 700px) {\n    position: sticky;\n    top: 0;\n    gap: 32px;\n    width: unset;\n    height: 100%;\n    padding: 16px 24px;\n  }\n'
        ]);
        return (
          (c = function() {
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
      var h = r.ZP.div.withConfig({ componentId: 'sc-6883e17e-0' })(a()),
        s = r.ZP.div.withConfig({ componentId: 'sc-6883e17e-1' })(l()),
        u = r.ZP.div.withConfig({ componentId: 'sc-6883e17e-2' })(c()),
        f = r.ZP.div.withConfig({ componentId: 'sc-6883e17e-3' })(d(), 2 * o.v);
    },
    25604: function(n, e, t) {
      t.r(e),
        t.d(e, {
          default: function() {
            return P;
          }
        });
      var i = t(85893),
        r = t(67294),
        o = t(37278),
        a = t(7297),
        l = t(14141),
        c = t(12242),
        d = t(12725);

      function h() {
        var n = (0, a.Z)([
          "\n  aspect-ratio: 12 / 5;\n  max-width: calc(100vw - 32px * 2);\n  width: 100%;\n  height: 35%;\n  min-height: 213px;\n  position: relative;\n  margin: 0 0 24px;\n  padding: 32px;\n  box-shadow: 2px 2px 0px #1c1c1e;\n  border: 1px solid #000;\n\n  --background-color: rgba(255, 255, 255);\n  --square-color: #e0e0e0;\n  --square-size: 1px;\n  background-color: var(--background-color);\n  background-image: linear-gradient(45deg, var(--square-color) 25%, transparent 25%),\n    linear-gradient(135deg, var(--square-color) 25%, transparent 25%),\n    linear-gradient(45deg, transparent 75%, var(--square-color) 75%),\n    linear-gradient(135deg, transparent 75%, var(--square-color) 75%);\n  background-size: calc(2 * var(--square-size)) calc(2 * var(--square-size));\n  background-position: 0 0, var(--square-size) 0, var(--square-size) calc(-1 * var(--square-size)),\n    0 calc(-1 * var(--square-size));\n\n  &:before,\n  &:after {\n    --margin: 32px;\n    content: ' ';\n    pointer-events: none;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: calc(100% - var(--margin) * 2);\n    height: calc(100% - var(--margin) * 2);\n    border-width: var(--margin);\n    mix-blend-mode: color-burn;\n  }\n\n  &:before {\n    border-style: outset;\n    border-color: #fff;\n    transform: scale(-1, 1);\n  }\n\n  &:after {\n    border-style: outset;\n    border-color: #b8b8b8;\n  }\n"
        ]);
        return (
          (h = function() {
            return n;
          }),
          n
        );
      }

      function s() {
        var n = (0, a.Z)([
          '\n  z-index: 10;\n  position: absolute;\n  top: 5px;\n  left: 44px;\n  margin: 0;\n  font-size: 13px;\n  line-height: 24px;\n'
        ]);
        return (
          (s = function() {
            return n;
          }),
          n
        );
      }

      function u() {
        var n = (0, a.Z)([
          '\n  --margin: 32px;\n  position: absolute;\n  top: var(--margin);\n  left: var(--margin);\n  width: calc(100% - var(--margin) * 2);\n  height: calc(100% - var(--margin) * 2);\n  border: 1px solid #000;\n  overflow: hidden;\n'
        ]);
        return (
          (u = function() {
            return n;
          }),
          n
        );
      }

      function f() {
        var n = (0, a.Z)([
          '\n  position: absolute;\n  right: 44px;\n  bottom: 12px;\n  z-index: 10;\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  justify-content: flex-end;\n\n  button {\n    box-shadow: 2px 2px 0px #1c1c1e;\n\n    &:hover {\n      box-shadow: 1px 0px 0px #000;\n      transform: translate(0, 2px);\n    }\n  }\n'
        ]);
        return (
          (f = function() {
            return n;
          }),
          n
        );
      }
      var p = l.ZP.div.withConfig({ componentId: 'sc-b1bc214c-0' })(h()),
        x = l.ZP.h2.withConfig({ componentId: 'sc-b1bc214c-1' })(s()),
        v = l.ZP.div.withConfig({ componentId: 'sc-b1bc214c-2' })(u()),
        b = l.ZP.div.withConfig({ componentId: 'sc-b1bc214c-3' })(f()),
        g = function(n) {
          var e,
            t = n.product,
            r = n.index,
            o = t.Name.title[0].plain_text,
            a = null === (e = t.Image) || void 0 === e ? void 0 : e.url,
            l = t.Website.url;
          return (0, i.jsxs)(p, {
            children: [
              (0, i.jsx)(x, { children: o }),
              (0, i.jsx)(v, { children: (0, i.jsx)(d.Z, { src: a, alt: o, priority: r < 3, width: '100%', height: '336px' }) }),
              (0, i.jsx)(b, {
                children: (0, i.jsx)(c.Z, { as: 'a', variant: 'light', href: l, target: '_blank', rel: 'noopener noreferrer', children: 'Website' })
              })
            ]
          });
        },
        m = t(83670),
        w = t(46789),
        k = t(76222),
        y = t(92783),
        Z = function(n) {
          var e = n.products;
          return (0, i.jsx)(r.Suspense, {
            fallback: (0, i.jsx)('div', { children: 'Loading...' }),
            children: (0, i.jsxs)(k.im, {
              children: [
                (0, i.jsx)(k.WQ, {
                  children: (0, i.jsxs)(k.Ie, {
                    children: [
                      (0, i.jsx)(m.Z, {}),
                      (0, i.jsx)('h2', { children: 'Product Lab' }),
                      (0, i.jsx)('p', { children: y.sl['ProductLab.Description'] }),
                      (0, i.jsx)(w.C, { urls: y.GT }),
                      y.sl['ProductLab.ButtonHref'] &&
                        (0, i.jsx)(c.Z, { variant: 'dark', externalHref: y.sl['ProductLab.ButtonHref'], children: y.sl['ProductLab.ButtonLabel'] })
                    ]
                  })
                }),
                (0, i.jsx)(k.aV, {
                  children: e.map(function(n, e) {
                    return (0, i.jsx)(g, { product: n, index: e }, e);
                  })
                })
              ]
            })
          });
        },
        V = t(21322),
        j = t(2962),
        I = JSON.parse(
          '[{"id":"fbbf571b-c0bb-497d-8822-3daa2f3ed763","Image":{"id":"LPpq","type":"url","url":"https://cdn.hifilabs.co/40fdacff-1f14-4aa6-dcd0-d6f162515a00"},"Website":{"id":"%7CulX","type":"url","url":"https://4cast.world/"},"Show On Website":{"id":"%7D%3EIh","type":"checkbox","checkbox":true},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"MVP","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"MVP","href":null}]}},{"id":"72c677dd-6801-4001-bfbd-a6c8650c4c98","Image":{"id":"LPpq","type":"url","url":"https://cdn.hifilabs.co/36488d3d-ace2-494a-423b-f2c45d7fdc00"},"Website":{"id":"%7CulX","type":"url","url":"https://eq.house"},"Show On Website":{"id":"%7D%3EIh","type":"checkbox","checkbox":true},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"Eq.house","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Eq.house","href":null}]}},{"id":"efa4c264-2144-453f-832d-bd75e432935b","Image":{"id":"LPpq","type":"url","url":"https://cdn.hifilabs.co/626ba5cf-b9de-4fb5-ab91-93fdf0d88900"},"Website":{"id":"%7CulX","type":"url","url":"https://musicos.xyz/"},"Show On Website":{"id":"%7D%3EIh","type":"checkbox","checkbox":true},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"musicOS","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"musicOS","href":null}]}},{"id":"974e5d7a-238d-4fa5-aa91-8b58a80a5033","Image":{"id":"LPpq","type":"url","url":"https://cdn.hifilabs.co/8fff893d-dfe0-4f44-1ad5-a161bfee0100"},"Website":{"id":"%7CulX","type":"url","url":"https://neume.network"},"Show On Website":{"id":"%7D%3EIh","type":"checkbox","checkbox":true},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"Neume","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Neume","href":null}]}}]'
        ),
        C = function() {
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(j.PB, { title: 'Product Lab', description: 'Take a peek at some original products and systems built by HIFI Labs.' }),
              (0, i.jsxs)(o.Z, {
                title: 'Product Lab',
                windowId: 'productlab',
                width: 845,
                height: 585,
                children: [(0, i.jsx)(Z, { products: I }), (0, i.jsx)(V.Z, { children: (0, y.xu)(y.sl['ProductLab.Marquee']) })]
              })
            ]
          });
        },
        P = (0, r.memo)(C);
    }
  }
]);
