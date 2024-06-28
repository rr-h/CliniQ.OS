'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [460],
  {
    12242: function(n, e, i) {
      var t = i(26042),
        r = i(69396),
        o = i(99534),
        a = i(85893),
        c = i(41664),
        h = i.n(c),
        l = i(5017),
        s = i(14141),
        d = i(57247),
        u = s.ZP.button.withConfig({ componentId: 'sc-e4deb317-0' })(
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
          (0, d.bU)({ variants: { light: { background: '#fff', color: '#000' }, dark: { background: '#000', color: '#fff' } } })
        );
      e.Z = function(n) {
        var e = n.href,
          i = n.externalHref,
          c = n.variant,
          s = n.style,
          d = void 0 === s ? {} : s,
          f = n.onClick,
          v = void 0 === f ? function() {} : f,
          p = (0, o.Z)(n, ['href', 'externalHref', 'variant', 'style', 'onClick']),
          x = (0, l.wW)();
        return e
          ? (0, a.jsx)(h(), {
              href: e,
              children: (0, a.jsx)(u, {
                variant: c,
                onClick: function() {
                  x('click-link', { props: { url: e } }), v();
                },
                children: p.children
              })
            })
          : i
          ? (0, a.jsx)('a', {
              href: i,
              target: '_blank',
              rel: 'noreferrer',
              style: (0, r.Z)((0, t.Z)({}, d), { textDecoration: 'none' }),
              onClick: function() {
                x('click-button-external-link', { props: { url: i } });
              },
              children: (0, a.jsx)(u, { variant: c, onClick: v, children: p.children })
            })
          : e
          ? void 0
          : (0, a.jsx)(u, {
              variant: c,
              onClick: function() {
                x('click-link', { props: { url: e } }), v();
              },
              children: p.children
            });
      };
    },
    83670: function(n, e, i) {
      var t = i(85893);
      e.Z = function(n) {
        var e = n.width,
          i = void 0 === e ? 110 : e,
          r = n.height,
          o = void 0 === r ? 24 : r;
        return (0, t.jsx)('svg', {
          viewBox: '0 0 110 24',
          width: i,
          height: o,
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: (0, t.jsx)('path', {
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
      var t = i(7297),
        r = i(85893),
        o = i(67294),
        a = i(14141);
      function c() {
        var n = (0, t.Z)([
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
      function h() {
        var n = (0, t.Z)([
          '\n  display: flex;\n  background: #fff;\n  animation: scroll 30s linear infinite;\n\n  @keyframes scroll {\n    0% {\n      transform: translateX(0);\n    }\n\n    100% {\n      transform: translateX(-100%);\n    }\n  }\n'
        ]);
        return (
          (h = function() {
            return n;
          }),
          n
        );
      }
      function l() {
        var n = (0, t.Z)([
          '\n  --margin: 12px;\n  display: flex;\n  align-items: center;\n  margin: 5px var(--margin) 5px 0;\n  white-space: nowrap;\n  font-family: var(--font-title);\n  font-size: 13px;\n\n  img {\n    width: 16px;\n    margin-right: var(--margin);\n  }\n'
        ]);
        return (
          (l = function() {
            return n;
          }),
          n
        );
      }
      var s = 40,
        d = a.ZP.div.withConfig({ componentId: 'sc-6c3c94a3-0' })(c(), s),
        u = a.ZP.div.withConfig({ componentId: 'sc-6c3c94a3-1' })(h()),
        f = a.ZP.div.withConfig({ componentId: 'sc-6c3c94a3-2' })(l());
      e.Z = function(n) {
        var e = n.children;
        return (0, r.jsx)(d, {
          'aria-hidden': 'true',
          children: [0, 1].map(function(n, i) {
            return (0, r.jsx)(
              u,
              {
                children: o.Children.map(e, function(n) {
                  return (0, r.jsxs)(f, { children: [(0, r.jsx)('img', { src: '/images/HIFILABS/icons/hifibolt.svg', alt: 'bolt' }), n] }, i);
                })
              },
              i
            );
          })
        });
      };
    },
    46789: function(n, e, i) {
      var t = i(26042),
        r = i(69396),
        o = i(7297),
        a = i(85893),
        c = i(14141);
      function h() {
        var n = (0, o.Z)(['\n  display: flex;\n  gap: min(5vw, 16px);\n']);
        return (
          (h = function() {
            return n;
          }),
          n
        );
      }
      var l = [
          { id: 'spotify', alt: 'Spotify', iconPath: '/images/HIFILABS/icons/spotify.svg', url: null },
          { id: 'apple', alt: 'Apple Music', iconPath: '/images/HIFILABS/icons/apple-music.svg', url: null },
          { id: 'tiktok', alt: 'Tik Tok', iconPath: '/images/HIFILABS/icons/tiktok.svg', url: null },
          { id: 'instagram', alt: 'Instagram', iconPath: '/images/HIFILABS/icons/instagram.svg', url: null },
          { id: 'twitter', alt: 'Twitter', iconPath: '/images/HIFILABS/icons/twitter.svg', url: null },
          { id: 'facebook', alt: 'Facebook', iconPath: '/images/HIFILABS/icons/facebook.svg', url: null },
          { id: 'discord', alt: 'Discord', iconPath: '/images/HIFILABS/icons/discord.svg', url: null },
          { id: 'website', alt: 'Website', iconPath: '/images/HIFILABS/icons/world.svg', url: null },
          { id: 'email', alt: 'email', iconPath: '/images/HIFILABS/icons/email.svg', url: null }
        ],
        s = c.ZP.div.withConfig({ componentId: 'sc-91b301eb-0' })(h());
      e.C = function(n) {
        var e = n.urls,
          i = n.size,
          o = void 0 === i ? 24 : i,
          c = l.map(function(n) {
            var i = e[n.id];
            return (0, r.Z)((0, t.Z)({}, n), { url: i });
          });
        return (0, a.jsx)(s, {
          children: c.map(function(n) {
            var e = n.id,
              i = n.url,
              t = n.iconPath,
              r = n.alt;
            if (i)
              return (0, a.jsx)(
                'a',
                { href: i, target: '_blank', rel: 'noopener noreferrer', children: (0, a.jsx)('img', { src: t, alt: r, width: o, height: o }) },
                e
              );
          })
        });
      };
    },
    46028: function(n, e, i) {
      i.d(e, {
        Z: function() {
          return x;
        }
      });
      var t,
        r = i(7297),
        o = i(85893),
        a = i(67294),
        c = i(14141);
      function h() {
        return (
          (h = Object.assign
            ? Object.assign.bind()
            : function(n) {
                for (var e = 1; e < arguments.length; e++) {
                  var i = arguments[e];
                  for (var t in i) Object.prototype.hasOwnProperty.call(i, t) && (n[t] = i[t]);
                }
                return n;
              }),
          h.apply(this, arguments)
        );
      }
      var l,
        s = function(n) {
          return a.createElement(
            'svg',
            h({ width: 64, height: 64, fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, n),
            t ||
              (t = a.createElement('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d:
                  'M28 9.333h5.333v45.334H28V52h-5.333v-2.667H20v-2.666h-2.667V44h-2.666v-2.667H4V22.667h10.667V20h2.666v-2.667H20v-2.666h2.667V12H28V9.333Zm13.333 12H44V24h2.667v4H52v-4h2.667v-2.667H60V24h-2.667v2.667h-2.666v2.666h-1.334v5.334h1.334v2.666h2.666V40H60v2.667h-5.333V40H52v-4h-5.333v4H44v2.667h-5.333V40h2.666v-2.667H44v-2.666h1.333v-5.334H44v-2.666h-2.667V24h-2.666v-2.667h2.666Z',
                fill: '#000'
              }))
          );
        };
      function d() {
        return (
          (d = Object.assign
            ? Object.assign.bind()
            : function(n) {
                for (var e = 1; e < arguments.length; e++) {
                  var i = arguments[e];
                  for (var t in i) Object.prototype.hasOwnProperty.call(i, t) && (n[t] = i[t]);
                }
                return n;
              }),
          d.apply(this, arguments)
        );
      }
      var u = function(n) {
        return a.createElement(
          'svg',
          d({ width: 64, height: 64, fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, n),
          l ||
            (l = a.createElement('path', {
              fillRule: 'evenodd',
              clipRule: 'evenodd',
              d:
                'M28 9.333h5.333v45.334H28V52h-5.333v-2.667H20v-2.666h-2.667V44h-2.666v-2.667H4V22.667h10.667V20h2.666v-2.667H20v-2.666h2.667V12H28V9.333Zm21.333 12h-2.666v-2.666H44V24h2.667v2.667h2.666v10.666h-2.666V40H44v5.333h2.667v-2.666h2.666V40H52V24h-2.667v-2.667Zm5.334-2.666h2.666V24H60v16h-2.667v5.333h-2.666V48H52v2.667h-2.667v2.666h-2.666V48h2.666v-2.667H52v-2.666h2.667v-5.334h2.666V26.667h-2.666v-5.334H52v-2.666h-2.667V16h-2.666v-5.333h2.666v2.666H52V16h2.667v2.667Zm-16 5.333h2.666v2.667H44v10.666h-2.667V40h-2.666v-5.333h2.666v-5.334h-2.666V24Z',
              fill: '#000'
            }))
        );
      };
      function f() {
        var n = (0, r.Z)([
          '\n  position: relative;\n  width: 100%;\n  background: #000;\n\n  video {\n    aspect-ratio: 16/9;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n\n    @media only screen and (max-width: 899px) {\n      object-position: center;\n    }\n  }\n'
        ]);
        return (
          (f = function() {
            return n;
          }),
          n
        );
      }
      function v() {
        var n = (0, r.Z)([
          '\n  --radius: 50px;\n  position: absolute;\n  bottom: 20px;\n  left: 20px;\n\n  width: var(--radius);\n  height: var(--radius);\n\n  border-radius: 100%;\n  border: 2px solid #fff;\n  background: transparent;\n  /* opacity: 0.75; */\n  cursor: pointer;\n\n  &:hover {\n    opacity: 1;\n  }\n\n  & svg {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) scale(calc(24 / 64));\n\n    path {\n      fill: #fff;\n    }\n  }\n'
        ]);
        return (
          (v = function() {
            return n;
          }),
          n
        );
      }
      function p() {
        var n = (0, r.Z)([
          "\n  position: absolute;\n  bottom: 30px;\n  right: 20px;\n\n  border: 1px solid hsla(0, 0%, 100%, 0.3);\n  background: hsla(0, 0%, 100%, 0.3);\n  border-radius: 20px;\n  padding: 6px;\n  color: hsla(0, 0%, 100%, 0.8);\n  /* mix-blend-mode: difference; */\n\n  &::before {\n    content: '\ud83e\udd18: ';\n    font-size: 12px;\n  }\n"
        ]);
        return (
          (p = function() {
            return n;
          }),
          n
        );
      }
      function x(n) {
        var e = n.className,
          i = n.src,
          t = void 0 === i ? null : i,
          r = n.width,
          c = void 0 === r ? 700 : r,
          h = n.height,
          l = void 0 === h ? 456 : h,
          d = n.poster,
          f = void 0 === d ? null : d,
          v = n.credits,
          p = void 0 === v ? '' : v,
          x = t.includes('audio=false'),
          b = (0, a.useState)(!0),
          y = b[0],
          V = b[1],
          Z = (0, a.useRef)(null);
        return (
          (0, a.useEffect)(
            function() {
              Z.current && (Z.current.muted = y);
            },
            [y]
          ),
          t &&
            (0, o.jsxs)(g, {
              className: e,
              children: [
                (0, o.jsx)('video', {
                  ref: Z,
                  width: c,
                  height: l,
                  controls: !1,
                  autoPlay: !0,
                  loop: !0,
                  playsInline: !0,
                  muted: !0,
                  poster: f,
                  children: (0, o.jsx)('source', { src: t, type: 'video/mp4' })
                }),
                !x &&
                  (0, o.jsx)(m, {
                    onClick: function() {
                      return V(!y);
                    },
                    children: y ? (0, o.jsx)(s, {}) : (0, o.jsx)(u, {})
                  }),
                p && (0, o.jsx)(w, { children: p })
              ]
            })
        );
      }
      var g = c.ZP.div.withConfig({ componentId: 'sc-7a583e2d-0' })(f()),
        m = c.ZP.button.withConfig({ componentId: 'sc-7a583e2d-1' })(v()),
        w = c.ZP.span.withConfig({ componentId: 'sc-7a583e2d-2' })(p());
    },
    37278: function(n, e, i) {
      i.d(e, {
        Z: function() {
          return S;
        }
      });
      var t = i(70603),
        r = i(85893),
        o = i(67294),
        a = i(45697),
        c = i.n(a),
        h = i(61193),
        l = i.n(h),
        s = i(60374),
        d = i(7297),
        u = i(14141),
        f = i(96076);
      function v() {
        var n = (0, d.Z)([
          '\n  pointer-events: ',
          ';\n  overflow: hidden;\n\n  scroll-behavior: none;\n  overscroll-behavior: none;\n  z-index: ',
          ';\n  position: absolute;\n  width: ',
          'px;\n  max-width: calc(100vw - ',
          'px);\n  max-height: calc(100vh - ',
          'px - ',
          'px);\n\n  border: 1px solid ',
          ';\n  border-radius: 5px;\n  background: ',
          ';\n\n  @media only screen and (max-width: 599px) {\n    max-height: calc(88vh - ',
          'px - ',
          'px);\n    height: calc(100% - ',
          'px - ',
          'px);\n    height: -moz-available;\n    height: -webkit-fill-available;\n    height: fill-available;\n    max-width: calc(100% - ',
          'px);\n    width: 100%;\n    margin: 0;\n  }\n'
        ]);
        return (
          (v = function() {
            return n;
          }),
          n
        );
      }
      function p() {
        var n = (0, d.Z)(['\n  flex: 1;\n  ', ';\n  min-width: 4px;\n  height: 12px;\n  cursor: pointer;\n']);
        return (
          (p = function() {
            return n;
          }),
          n
        );
      }
      function x() {
        var n = (0, d.Z)([
          '\n  display: flex;\n  align-items: flex;\n  gap: ',
          ';\n  padding: ',
          ';\n  background: #fff;\n  border-bottom: 1px solid ',
          ';\n  cursor: grab;\n\n  .react-draggable-transparent-selection & {\n    cursor: grabbing;\n  }\n\n  @media only screen and (max-width: 600px) {\n    position: relative;\n  }\n'
        ]);
        return (
          (x = function() {
            return n;
          }),
          n
        );
      }
      function g() {
        var n = (0, d.Z)(['\n  width: 24px;\n  height: 24px;\n  border: 2px solid #000;\n']);
        return (
          (g = function() {
            return n;
          }),
          n
        );
      }
      function m() {
        var n = (0, d.Z)([
          '\n  display: flex;\n  align-items: center;\n  gap: ',
          ";\n  width: 100%;\n  white-space: nowrap;\n  font-size: 13px;\n  font-family: var(--font-title);\n\n  @media screen and (max-width: 599px) {\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  &::after,\n  &::before {\n    --height: 20px;\n    content: '';\n    pointer-events: none;\n    width: 100%;\n    height: var(--height);\n    border-top: 2px solid #000;\n    // black line is 2px = 10%\n    // white space is 3px = 15%\n    background-image: linear-gradient(\n      to bottom,\n      #fff0 0%,\n      #fff0 15%,\n      #000 15%,\n      #000 25%,\n      #fff0 25%,\n      #fff0 40%,\n      #000 40%,\n      #000 50%,\n      #fff0 50%,\n      #fff0 65%,\n      #000 65%,\n      #000 75%,\n      #fff0 75%,\n      #fff0 90%,\n      #000 90%,\n      #000 100%\n    );\n    background-size: 100% var(--height);\n    background-position: center center;\n    background-repeat: no-repeat;\n  }\n"
        ]);
        return (
          (m = function() {
            return n;
          }),
          n
        );
      }
      function w() {
        var n = (0, d.Z)(['\n  ', '\n']);
        return (
          (w = function() {
            return n;
          }),
          n
        );
      }
      function b() {
        var n = (0, d.Z)([
          '\n  overflow-y: auto;\n  position: relative;\n  height: ',
          'px;\n  min-height: ',
          "px;\n  padding: 0;\n\n  @media only screen and (max-width: 599px) {\n    min-height: auto;\n    height: calc(100% - 45px);\n  }\n\n  &::before {\n    content: '';\n    z-index: 133337;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: ",
          ';\n    pointer-events: none;\n    transition: opacity 250ms;\n    opacity: ',
          ';\n    animation: ',
          ' 1.337s linear infinite;\n\n    color: ',
          ';\n    font-size: 14px;\n    font-family: monospace;\n  }\n'
        ]);
        return (
          (b = function() {
            return n;
          }),
          n
        );
      }
      var y = '12px',
        V = u.ZP.div.withConfig({ componentId: 'sc-43642528-0' })(
          v(),
          function(n) {
            return n.isOpen ? 'all' : 'none';
          },
          function(n) {
            return n.zIndex;
          },
          function(n) {
            return n.width;
          },
          40,
          f.MP,
          20,
          function(n) {
            return n.theme.colors.black;
          },
          function(n) {
            return n.theme.colors.white;
          },
          f.MP,
          20,
          f.MP,
          20,
          20
        ),
        Z =
          (u.ZP.div.withConfig({ componentId: 'sc-43642528-1' })(p(), function(n) {
            return n.short && 'flex-grow: 0';
          }),
          u.ZP.div.withConfig({ componentId: 'sc-43642528-2' })(x(), y, y, function(n) {
            return n.theme.colors.black;
          })),
        H = u.ZP.div.withConfig({ componentId: 'sc-43642528-3' })(g()),
        k = u.ZP.div.withConfig({ componentId: 'sc-43642528-4' })(m(), y),
        I = (0, u.F4)(
          w(),
          (function() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              i = e.alternating,
              t = void 0 !== i && i,
              r = n.map(function(e, i) {
                var t = i * (100 / n.length);
                return ''.concat(t, "% {\n  content: '").concat(e, "';\n}");
              });
            return (r = r.concat(["100% {\n    content: '".concat(n[t ? n.length - 1 : 0], "';\n  }")])).join('\n');
          })(['loading', '.oading', 'l.ading', 'lo.ding', 'loa.ing', 'load.ng', 'loadi.g', 'loadin.', 'loading'], { alternating: !1 })
        ),
        j = u.ZP.div.withConfig({ componentId: 'sc-43642528-5' })(
          b(),
          function(n) {
            return n.height;
          },
          function(n) {
            var e = n.height;
            return e || 430;
          },
          function(n) {
            return n.theme.colors.bgTransparentColor;
          },
          function(n) {
            return n.isLoading ? 1 : 0;
          },
          I,
          function(n) {
            return n.theme.colors.gray;
          }
        ),
        P = i(20805),
        C = i(90698),
        L = function(n) {
          var e = n.windowId,
            i = n.slug,
            a = n.children,
            c = n.title,
            h = n.height,
            d = n.width,
            u = n.isLoading,
            v = void 0 !== u && u,
            p = n.windowStyle,
            x = void 0 === p ? {} : p,
            g = n.windowTopStyle,
            m = void 0 === g ? {} : g,
            w = (0, P.useStore)(function(n) {
              return {
                currentTrack: n.currentTrack,
                closeWindow: n.closeWindow,
                focusWindow: n.focusWindow,
                moveWindow: n.moveWindow,
                currentWindow: n.windows[e]
              };
            }, s.Z),
            b = w.currentTrack,
            y = w.closeWindow,
            I = w.focusWindow,
            L = w.moveWindow,
            S = w.currentWindow,
            z = (0, o.useState)({ x: S.x, y: S.y }),
            F = z[0],
            E = z[1],
            B = (0, o.useRef)(null),
            M = (0, o.useRef)(null),
            R = ((0, o.useRef)(null), (0, t.Z)((0, C.i)(), 1)[0]),
            T = ['xsmall', 'small'].includes(R.screenType);
          (0, o.useLayoutEffect)(
            function() {
              E({ x: S.x, y: S.y });
            },
            [S.x, S.y]
          );
          var W = (0, o.useCallback)(
            function() {
              if (!T && B.current && R.width && R.height) {
                var n = B.current.getBoundingClientRect(),
                  i = n.width,
                  t = n.height,
                  r = S.x,
                  o = S.y;
                L(e, { x: Math.min(R.width - i / 2, Math.max(-i / 2, r)), y: Math.min(R.height - t / 4, Math.max(0, o)) });
              }
            },
            [T, R, S, L, e]
          );
          if (
            ((0, o.useEffect)(
              function() {
                return (
                  window.addEventListener('resize', W),
                  T && window.removeEventListener('resize', W),
                  function() {
                    return window.removeEventListener('resize', W);
                  }
                );
              },
              [W, T]
            ),
            (0, o.useLayoutEffect)(
              function() {
                E({ x: S.x, y: S.y });
              },
              [S.x, S.y]
            ),
            (0, o.useEffect)(
              function() {
                W();
              },
              [W]
            ),
            (0, o.useEffect)(
              function() {
                M.current && M.current.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
              },
              [i]
            ),
            S)
          )
            return (0, r.jsx)(l(), {
              axis: 'both',
              currentTrack: b,
              position: { x: T ? 10 : F.x, y: T ? 10 + f.MP : F.y },
              handle: '.window-top',
              bounds: { left: -d / 2, right: R.width - d / 2, top: f.MP, bottom: R.height - h / 4 },
              isOpen: S.open,
              isCurrent: S.focus,
              zIndex: S.zIndex,
              onMouseDown: function(n) {
                'close' !== n.target.id && I(e);
              },
              onStart: function() {
                document.body.style.userSelect = 'none';
              },
              onStop: function(n, i) {
                var t = i.x,
                  r = i.y;
                L(e, { x: t, y: r }), (document.body.style.userSelect = 'inherit');
              },
              nodeRef: B,
              disabled: T,
              children: (0, r.jsxs)(V, {
                width: d,
                isOpen: S.open,
                isCurrent: S.focus,
                zIndex: S.zIndex,
                ref: B,
                style: x,
                children: [
                  (0, r.jsxs)(Z, {
                    className: 'window-top',
                    style: m,
                    children: [
                      (0, r.jsx)(k, { children: c }),
                      (0, r.jsx)(H, {
                        onClick: function(n) {
                          n.stopPropagation(), y(e);
                        }
                      })
                    ]
                  }),
                  (0, r.jsx)(j, { height: h, isLoading: v, ref: M, children: a })
                ]
              })
            });
        };
      (L.propTypes = { onClose: c().func, title: c().node, width: c().number, height: c().number }),
        (L.defaultProps = { width: 560, height: 430, onClose: function() {} });
      var S = o.memo(L);
    },
    2460: function(n, e, i) {
      i.r(e),
        i.d(e, {
          default: function() {
            return P;
          }
        });
      var t = i(85893),
        r = i(67294),
        o = i(7297),
        a = i(14141),
        c = i(46028),
        h = i(12242),
        l = i(83670),
        s = i(46789),
        d = i(92783),
        u = i(21322);
      function f() {
        var n = (0, o.Z)([
          '\n  display: flex;\n  flex-direction: column;\n  height: calc(100% - ',
          'px);\n\n  @media only screen and (min-width: ',
          'px) {\n    flex-direction: row;\n  }\n\n  @media only screen and (max-width: 899px) {\n    /* height = window height \u2013 menuBar - windowPane - Marqueeheight*/\n    min-height: calc(100vh - 44px - 50px - ',
          'px);\n    height: calc(100vh - 44px - 50px - ',
          'px);\n    overflow-y: auto;\n  }\n'
        ]);
        return (
          (f = function() {
            return n;
          }),
          n
        );
      }
      function v() {
        var n = (0, o.Z)([
          '\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  text-align: center;\n\n  p {\n    max-width: 600px;\n    font-size: 24px;\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: ',
          'px) {\n    width: 100%;\n    margin-top: -40px;\n\n    svg {\n      z-index: 8;\n      transform: scale(1.25);\n      stroke: #fff;\n      stroke-width: 0.5px;\n\n      @media screen and (min-width: 425px) {\n        transform: scale(1.75);\n      }\n    }\n  }\n'
        ]);
        return (
          (v = function() {
            return n;
          }),
          n
        );
      }
      function p() {
        var n = (0, o.Z)(['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n']);
        return (
          (p = function() {
            return n;
          }),
          n
        );
      }
      function x() {
        var n = (0, o.Z)([
          '\n  @media only screen and (max-width: ',
          'px) {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    align-content: center;\n    padding: 10px 10px 80px;\n    gap: 24px;\n  }\n\n  @media only screen and (min-width: ',
          'px) {\n    width: unset;\n    position: sticky;\n    top: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100%;\n    padding: 16px 24px;\n    gap: 32px;\n\n    & > * {\n      text-align: center;\n      margin: 0;\n    }\n  }\n'
        ]);
        return (
          (x = function() {
            return n;
          }),
          n
        );
      }
      function g() {
        var n = (0, o.Z)([
          '\n  background: #fff;\n  border-bottom: 1px solid #000;\n  padding: 24px 16px;\n\n  @media only screen and (max-width: ',
          'px) {\n    padding: 0;\n    order: 10;\n\n    ',
          ' {\n      gap: 5vw;\n    }\n\n    ',
          ' {\n      flex-direction: row;\n    }\n  }\n\n  @media only screen and (min-width: ',
          'px) {\n    z-index: 9;\n    position: sticky;\n    top: 0;\n\n    width: 33%;\n    height: 100%;\n    border-bottom: 0;\n\n    ',
          ' {\n      padding: 0;\n    }\n  }\n'
        ]);
        return (
          (g = function() {
            return n;
          }),
          n
        );
      }
      var m = 1e3,
        w = a.ZP.div.withConfig({ componentId: 'sc-86c9e0ab-0' })(f(), u.v, m, u.v, u.v),
        b = a.ZP.div.withConfig({ componentId: 'sc-86c9e0ab-1' })(v(), 999),
        y = a.ZP.div.withConfig({ componentId: 'sc-86c9e0ab-2' })(p()),
        V = a.ZP.div.withConfig({ componentId: 'sc-86c9e0ab-3' })(x(), 999, m),
        Z = a.ZP.div.withConfig({ componentId: 'sc-86c9e0ab-4' })(g(), 999, V, y, m, V),
        H = function() {
          return (0, t.jsx)(r.Suspense, {
            fallback: (0, t.jsx)('div', { children: 'Loading...' }),
            children: (0, t.jsxs)(w, {
              children: [
                (0, t.jsx)(Z, {
                  children: (0, t.jsxs)(V, {
                    children: [
                      (0, t.jsxs)(b, {
                        children: [(0, t.jsx)(l.Z, { width: 220, height: 46 }), (0, t.jsx)('p', { children: d.sl['Launcher.Description'] })]
                      }),
                      (0, t.jsx)(s.C, { urls: d.GT }),
                      (0, t.jsx)(y, {
                        children:
                          d.sl['Launcher.ButtonHref'] &&
                          (0, t.jsx)(h.Z, { variant: 'dark', externalHref: d.sl['Launcher.ButtonHref'], children: d.sl['Launcher.ButtonLabel'] })
                      })
                    ]
                  })
                }),
                (0, t.jsx)(c.Z, {
                  src: d.sl['Launcher.Video'],
                  width: '700',
                  height: '456',
                  poster: d.sl['Launcher.VideoPoster'],
                  credits: '"Adaleena" by Svvarms '
                })
              ]
            })
          });
        },
        k = i(37278),
        I = i(2962),
        j = function() {
          return (0, t.jsxs)(t.Fragment, {
            children: [
              (0, t.jsx)(I.PB, {
                title: 'HIFI Labs Launcher',
                description:
                  "HIFI Labs is a creative incubator and artist mentorship collective building an artist-owned, community-powered future for musicians. Fueled by web3 technology and industry-changing innovation, HIFI Labs' mission is to achieve a more equitable and sustainable music economy."
              }),
              (0, t.jsxs)(k.Z, {
                title: 'HIFI Labs Launcher',
                windowId: 'launcher',
                width: 1130,
                height: 520,
                children: [(0, t.jsx)(H, {}), (0, t.jsx)(u.Z, { children: (0, d.xu)(d.sl['Launcher.Marquee']) })]
              })
            ]
          });
        },
        P = (0, r.memo)(j);
    }
  }
]);
