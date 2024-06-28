'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [856],
  {
    12725: function(n, e, t) {
      t.d(e, {
        Z: function() {
          return h;
        }
      });
      var i = t(26042),
        o = t(69396),
        r = t(99534),
        a = t(7297),
        c = t(85893),
        u = t(67294),
        s = t(14141);

      function l() {
        var n = (0, a.Z)(['\n  width: ', ';\n  height: ', ';\n  object-fit: cover;\n  object-position: ', ';\n']);
        return (
          (l = function() {
            return n;
          }),
          n
        );
      }

      function d() {
        var n = (0, a.Z)([
          '\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n\n  /* filter: grayscale(1); */\n  mix-blend-mode: hard-light;\n\n  background-image: var(--noise-1);\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  animation: noise 1.8s forwards 0.2s steps(6);\n  animation-play-state: running;\n\n  @media only screen and (max-width: 599px) {\n    animation: none;\n    background-image: var(--noise-7);\n  }\n\n  @keyframes noise {\n    0% {\n      background-image: var(--noise-1);\n    }\n    20% {\n      background-image: var(--noise-2);\n    }\n    40% {\n      background-image: var(--noise-3);\n    }\n    55% {\n      background-image: var(--noise-4);\n    }\n    70% {\n      background-image: var(--noise-5);\n    }\n    85% {\n      background-image: var(--noise-6);\n    }\n    100% {\n      background-image: var(--noise-7);\n    }\n  }\n'
        ]);
        return (
          (d = function() {
            return n;
          }),
          n
        );
      }

      function f() {
        var n = (0, a.Z)([
          '\n  position: relative;\n  width: 100%;\n  height: 100%;\n\n  & img {\n    filter: contrast(200%) brightness(100%);\n  }\n'
        ]);
        return (
          (f = function() {
            return n;
          }),
          n
        );
      }

      function h(n) {
        var e = n.onClick,
          t = void 0 === e ? function() {} : e,
          a = n.objectPosition,
          s = (0, r.Z)(n, ['onClick', 'objectPosition']),
          l = (0, u.useRef)(null),
          d = (0, u.useState)(!1),
          f = d[0],
          h = d[1];
        return (
          (0, u.useEffect)(
            function() {
              f && l && (l.current.style.animationPlayState = 'running');
            },
            [f]
          ),
          (0, c.jsxs)(m, {
            onClick: t,
            children: [
              (0, c.jsx)(
                g,
                (0, o.Z)((0, i.Z)({ alt: s.alt }, s), {
                  onload: function() {
                    return h(!0);
                  },
                  objectPosition: Number.isInteger(a) ? 'center '.concat(a, '%') : 'center'
                })
              ),
              (0, c.jsx)(p, { ref: l })
            ]
          })
        );
      }
      var g = s.ZP.img.withConfig({ componentId: 'sc-61bd013-0' })(
          l(),
          function(n) {
            return n.width;
          },
          function(n) {
            return n.height;
          },
          function(n) {
            return n.objectPosition;
          }
        ),
        p = s.ZP.div.withConfig({ componentId: 'sc-61bd013-1' })(d()),
        m = s.ZP.div.withConfig({ componentId: 'sc-61bd013-2' })(f());
    },
    46789: function(n, e, t) {
      var i = t(26042),
        o = t(69396),
        r = t(7297),
        a = t(85893),
        c = t(14141);

      function u() {
        var n = (0, r.Z)(['\n  display: flex;\n  gap: min(5vw, 16px);\n']);
        return (
          (u = function() {
            return n;
          }),
          n
        );
      }
      var s = [
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
        l = c.ZP.div.withConfig({ componentId: 'sc-91b301eb-0' })(u());
      e.C = function(n) {
        var e = n.urls,
          t = n.size,
          r = void 0 === t ? 24 : t,
          c = s.map(function(n) {
            var t = e[n.id];
            return (0, o.Z)((0, i.Z)({}, n), { url: t });
          });
        return (0, a.jsx)(l, {
          children: c.map(function(n) {
            var e = n.id,
              t = n.url,
              i = n.iconPath,
              o = n.alt;
            if (t)
              return (0, a.jsx)(
                'a',
                { href: t, target: '_blank', rel: 'noopener noreferrer', children: (0, a.jsx)('img', { src: i, alt: o, width: r, height: r }) },
                e
              );
          })
        });
      };
    },
    37278: function(n, e, t) {
      t.d(e, {
        Z: function() {
          return T;
        }
      });
      var i = t(70603),
        o = t(85893),
        r = t(67294),
        a = t(45697),
        c = t.n(a),
        u = t(61193),
        s = t.n(u),
        l = t(60374),
        d = t(7297),
        f = t(14141),
        h = t(96076);

      function g() {
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
          (g = function() {
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

      function m() {
        var n = (0, d.Z)([
          '\n  display: flex;\n  align-items: flex;\n  gap: ',
          ';\n  padding: ',
          ';\n  background: #fff;\n  border-bottom: 1px solid ',
          ';\n  cursor: grab;\n\n  .react-draggable-transparent-selection & {\n    cursor: grabbing;\n  }\n\n  @media only screen and (max-width: 600px) {\n    position: relative;\n  }\n'
        ]);
        return (
          (m = function() {
            return n;
          }),
          n
        );
      }

      function v() {
        var n = (0, d.Z)(['\n  width: 24px;\n  height: 24px;\n  border: 2px solid #000;\n']);
        return (
          (v = function() {
            return n;
          }),
          n
        );
      }

      function x() {
        var n = (0, d.Z)([
          '\n  display: flex;\n  align-items: center;\n  gap: ',
          ";\n  width: 100%;\n  white-space: nowrap;\n  font-size: 13px;\n  font-family: var(--font-title);\n\n  @media screen and (max-width: 599px) {\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  &::after,\n  &::before {\n    --height: 20px;\n    content: '';\n    pointer-events: none;\n    width: 100%;\n    height: var(--height);\n    border-top: 2px solid #000;\n    // black line is 2px = 10%\n    // white space is 3px = 15%\n    background-image: linear-gradient(\n      to bottom,\n      #fff0 0%,\n      #fff0 15%,\n      #000 15%,\n      #000 25%,\n      #fff0 25%,\n      #fff0 40%,\n      #000 40%,\n      #000 50%,\n      #fff0 50%,\n      #fff0 65%,\n      #000 65%,\n      #000 75%,\n      #fff0 75%,\n      #fff0 90%,\n      #000 90%,\n      #000 100%\n    );\n    background-size: 100% var(--height);\n    background-position: center center;\n    background-repeat: no-repeat;\n  }\n"
        ]);
        return (
          (x = function() {
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
        k = f.ZP.div.withConfig({ componentId: 'sc-43642528-0' })(
          g(),
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
          h.MP,
          20,
          function(n) {
            return n.theme.colors.black;
          },
          function(n) {
            return n.theme.colors.white;
          },
          h.MP,
          20,
          h.MP,
          20,
          20
        ),
        I =
          (f.ZP.div.withConfig({ componentId: 'sc-43642528-1' })(p(), function(n) {
            return n.short && 'flex-grow: 0';
          }),
          f.ZP.div.withConfig({ componentId: 'sc-43642528-2' })(m(), y, y, function(n) {
            return n.theme.colors.black;
          })),
        P = f.ZP.div.withConfig({ componentId: 'sc-43642528-3' })(v()),
        Z = f.ZP.div.withConfig({ componentId: 'sc-43642528-4' })(x(), y),
        C = (0, f.F4)(
          w(),
          (function() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
              e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              t = e.alternating,
              i = void 0 !== t && t,
              o = n.map(function(e, t) {
                var i = t * (100 / n.length);
                return ''.concat(i, "% {\n  content: '").concat(e, "';\n}");
              });
            return (o = o.concat(["100% {\n    content: '".concat(n[i ? n.length - 1 : 0], "';\n  }")])).join('\n');
          })(['loading', '.oading', 'l.ading', 'lo.ding', 'loa.ing', 'load.ng', 'loadi.g', 'loadin.', 'loading'], { alternating: !1 })
        ),
        j = f.ZP.div.withConfig({ componentId: 'sc-43642528-5' })(
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
          C,
          function(n) {
            return n.theme.colors.gray;
          }
        ),
        S = t(20805),
        L = t(90698),
        z = function(n) {
          var e = n.windowId,
            t = n.slug,
            a = n.children,
            c = n.title,
            u = n.height,
            d = n.width,
            f = n.isLoading,
            g = void 0 !== f && f,
            p = n.windowStyle,
            m = void 0 === p ? {} : p,
            v = n.windowTopStyle,
            x = void 0 === v ? {} : v,
            w = (0, S.useStore)(function(n) {
              return {
                currentTrack: n.currentTrack,
                closeWindow: n.closeWindow,
                focusWindow: n.focusWindow,
                moveWindow: n.moveWindow,
                currentWindow: n.windows[e]
              };
            }, l.Z),
            b = w.currentTrack,
            y = w.closeWindow,
            C = w.focusWindow,
            z = w.moveWindow,
            T = w.currentWindow,
            W = (0, r.useState)({ x: T.x, y: T.y }),
            E = W[0],
            F = W[1],
            M = (0, r.useRef)(null),
            A = (0, r.useRef)(null),
            B = ((0, r.useRef)(null), (0, i.Z)((0, L.i)(), 1)[0]),
            H = ['xsmall', 'small'].includes(B.screenType);
          (0, r.useLayoutEffect)(
            function() {
              F({ x: T.x, y: T.y });
            },
            [T.x, T.y]
          );
          var R = (0, r.useCallback)(
            function() {
              if (!H && M.current && B.width && B.height) {
                var n = M.current.getBoundingClientRect(),
                  t = n.width,
                  i = n.height,
                  o = T.x,
                  r = T.y;
                z(e, { x: Math.min(B.width - t / 2, Math.max(-t / 2, o)), y: Math.min(B.height - i / 4, Math.max(0, r)) });
              }
            },
            [H, B, T, z, e]
          );
          if (
            ((0, r.useEffect)(
              function() {
                return (
                  window.addEventListener('resize', R),
                  H && window.removeEventListener('resize', R),
                  function() {
                    return window.removeEventListener('resize', R);
                  }
                );
              },
              [R, H]
            ),
            (0, r.useLayoutEffect)(
              function() {
                F({ x: T.x, y: T.y });
              },
              [T.x, T.y]
            ),
            (0, r.useEffect)(
              function() {
                R();
              },
              [R]
            ),
            (0, r.useEffect)(
              function() {
                A.current && A.current.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
              },
              [t]
            ),
            T)
          )
            return (0, o.jsx)(s(), {
              axis: 'both',
              currentTrack: b,
              position: { x: H ? 10 : E.x, y: H ? 10 + h.MP : E.y },
              handle: '.window-top',
              bounds: { left: -d / 2, right: B.width - d / 2, top: h.MP, bottom: B.height - u / 4 },
              isOpen: T.open,
              isCurrent: T.focus,
              zIndex: T.zIndex,
              onMouseDown: function(n) {
                'close' !== n.target.id && C(e);
              },
              onStart: function() {
                document.body.style.userSelect = 'none';
              },
              onStop: function(n, t) {
                var i = t.x,
                  o = t.y;
                z(e, { x: i, y: o }), (document.body.style.userSelect = 'inherit');
              },
              nodeRef: M,
              disabled: H,
              children: (0, o.jsxs)(k, {
                width: d,
                isOpen: T.open,
                isCurrent: T.focus,
                zIndex: T.zIndex,
                ref: M,
                style: m,
                children: [
                  (0, o.jsxs)(I, {
                    className: 'window-top',
                    style: x,
                    children: [
                      (0, o.jsx)(Z, { children: c }),
                      (0, o.jsx)(P, {
                        onClick: function(n) {
                          n.stopPropagation(), y(e);
                        }
                      })
                    ]
                  }),
                  (0, o.jsx)(j, { height: u, isLoading: g, ref: A, children: a })
                ]
              })
            });
        };
      (z.propTypes = { onClose: c().func, title: c().node, width: c().number, height: c().number }),
        (z.defaultProps = { width: 560, height: 430, onClose: function() {} });
      var T = r.memo(z);
    }
  }
]);
