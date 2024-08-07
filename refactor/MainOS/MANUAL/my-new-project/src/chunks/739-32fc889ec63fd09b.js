'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [739],
  {
    27949: function(e, t, n) {
      n.d(t, {
        c: function() {
          return c;
        }
      });
      var i = n(26042),
        l = n(99534),
        a = n(7297),
        o = n(85893),
        r = (n(67294), n(14141)),
        s = n(57247);

      function u() {
        var e = (0, a.Z)(['\n  width: ', ';\n  height: ', ';\n  pointer-events: none;\n  ', '\n']);
        return (
          (u = function() {
            return e;
          }),
          e
        );
      }
      var c = {
          BOLT: './images/icons/bolt.svg',
          EXTERNAL: './images/icons/external_link.png',
          FOLDER: './images/HIFILABS/icons/folder.svg',
          FLOPPY: './images/HIFILABS/icons/floppy.svg',
          DISC: './images/HIFILABS/icons/disc.svg',
          TRASH: './images/HIFILABS/icons/trash.svg',
          TWITTER: './images/icons/twitter.png',
          PLATFORM: './images/icons/platform.png',
          PLAYER: './images/icons/player.png',
          PROFILE: './images/icons/profile.png',
          LOGO: './images/icons/logo.png',
          CLOSE: './images/icons/close.png',
          SHOWS: './images/icons/shows.png',
          EDIT: './images/icons/edit.svg',
          TEXT: './images/HIFILABS/icons/filetype-text.svg'
        },
        d = r.ZP.img.withConfig({ componentId: 'sc-fb2bce45-0' })(
          u(),
          function(e) {
            return e.width ? e.width : 'auto';
          },
          function(e) {
            return e.height ? e.height : 'auto';
          },
          s.Dh
        ),
        f = function(e) {
          var t = e.icon,
            n = e.onClick,
            a = (0, l.Z)(e, ['icon', 'onClick']);
          return (0, o.jsx)(d, (0, i.Z)({ src: t, role: 'button', tabindex: '0', onClick: n }, a));
        };
      (f.defaultProps = { onClick: function() {} }), (t.Z = f);
    },
    77388: function(e, t, n) {
      n.d(t, {
        v: function() {
          return i;
        }
      });
      var i = {
        about: {
          pageTitle: 'About HIFI Labs',
          url: function() {
            return '/about';
          }
        },
        welcome: {
          pageTitle: 'Welcome to HIFI Labs',
          url: function() {
            return '/welcome';
          }
        },
        webby: {
          pageTitle: 'We Won a Webby Award!',
          url: function() {
            return '/webby';
          },
          alwaysRender: !0,
          open: !0
        },
        contact: {
          pageTitle: 'Contact HIFI Labs',
          url: function() {
            return '/contact';
          }
        },
        launcher: {
          pageTitle: 'HIFI Labs launcher',
          url: function() {
            return '/launcher';
          },
          alwaysRender: !1,
          open: !1
        },
        artistlab: {
          pageTitle: 'Artist Lab',
          url: function() {
            return '/artistlab';
          }
        },
        artist: {
          pageTitle: 'Artist Lab',
          url: function(e) {
            var t = e.slug;
            return '/artistlab/'.concat(t);
          }
        },
        web3cohort: {
          pageTitle: 'Web3 Cohort',
          url: function() {
            return '/web3cohort';
          }
        },
        web3cohortartist: {
          url: function(e) {
            var t = e.slug;
            return '/web3cohort/'.concat(t);
          }
        },
        idealab: {
          pageTitle: 'Idea Lab',
          url: function() {
            return '/idealab';
          }
        },
        idea: {
          pageTitle: 'Idea Lab',
          url: function(e) {
            var t = e.slug;
            return '/idealab/'.concat(t);
          }
        },
        productlab: {
          pageTitle: 'Product Lab',
          url: function() {
            return '/productlab';
          }
        },
        trash: {
          pageTitle: 'Trash',
          url: function() {
            return '/trash';
          }
        },
        text: {
          pageTitle: 'Text',
          url: function() {
            return '/text';
          }
        }
      };
    },
    90698: function(e, t, n) {
      n.d(t, {
        i: function() {
          return l;
        }
      });
      var i = n(67294),
        l = function() {
          var e = (0, i.useState)({ width: void 0, height: void 0, screenType: void 0 }),
            t = e[0],
            n = e[1];
          return (
            (0, i.useEffect)(function() {
              var e = function() {
                var e;
                n({
                  width: window.innerWidth,
                  height: window.innerHeight,
                  screenType: ((e = window.innerWidth), e > 1280 ? 'xlarge' : e > 1024 ? 'large' : e > 800 ? 'medium' : e > 600 ? 'small' : 'xsmall')
                });
              };
              return (
                window.addEventListener('resize', e),
                e(),
                function() {
                  return window.removeEventListener('resize', e);
                }
              );
            }, []),
            [t]
          );
        };
    },
    71739: function(e, t, n) {
      n.r(t),
        n.d(t, {
          __N_SSG: function() {
            return pe;
          },
          default: function() {
            return be;
          }
        });
      var i,
        l = n(47568),
        a = n(26042),
        o = n(70603),
        r = n(70655),
        s = n(85893),
        u = n(67294),
        c = n(5152),
        d = n.n(c),
        f = n(2962),
        h = n(60374),
        p = n(20805),
        b = n(11163),
        x = n(27949);

      function m() {
        return (
          (m = Object.assign
            ? Object.assign.bind()
            : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                }
                return e;
              }),
          m.apply(this, arguments)
        );
      }
      var g = function(e) {
          return u.createElement(
            'svg',
            m({ width: 25, height: 24, fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
            i ||
              (i = u.createElement('path', {
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                d:
                  'M13.667 2h-.834v.833H12v.834h-.833V4.5h-.834V6.167H9.5V7h-.833V8.667h-.834v1.666H7v.834h-.833v1.666h-.834v.834H4.5v.833H12V22h.833v-.833h.834v-.834h.833V19.5h.833V17.833h.834V17H17V15.333h.833v-1.666h.834v-.834h.833v-1.666h.833v-.834h.834V9.5h-7.5V2Z',
                fill: '#000'
              }))
          );
        },
        y = n(7297),
        w = n(14141),
        k = n(59395),
        v = n(96076);

      function _() {
        var e = (0, y.Z)([
          '\n  scroll-behavior: none;\n  overscroll-behavior: none;\n  z-index: 133333337;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: ',
          'px;\n  padding: 0 12px;\n\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 24px;\n\n  background: #fff;\n  font-family: var(--font-title);\n  font-size: 11px;\n\n  @media only screen and (max-width: 899px) {\n    border-bottom: 1px solid #000;\n  }\n'
        ]);
        return (
          (_ = function() {
            return e;
          }),
          e
        );
      }

      function I() {
        var e = (0, y.Z)([
          '\n  position: relative;\n  flex: 0 1 auto;\n  display: flex;\n  align-items: center;\n  border-radius: 2px;\n  outline: none;\n\n  @media only screen and (max-width: 600px) {\n    display: ',
          ';\n  }\n'
        ]);
        return (
          (I = function() {
            return e;
          }),
          e
        );
      }

      function L() {
        var e = (0, y.Z)(['\n  margin-right: 11px;\n  flex: 1;\n  flex-grow: 0;\n  display: flex;\n  align-items: center;\n']);
        return (
          (L = function() {
            return e;
          }),
          e
        );
      }

      function T() {
        var e = (0, y.Z)([
          '\n  flex: 0 1 auto;\n  white-space: nowrap;\n  padding: 2px 4px;\n  border-radius: 2px;\n\n  &:not(.no-hover) {\n    @media (hover: hover) and (pointer: fine) {\n      cursor: pointer;\n\n      &:hover {\n        background: #000;\n        color: #fff;\n      }\n    }\n  }\n'
        ]);
        return (
          (T = function() {
            return e;
          }),
          e
        );
      }

      function C() {
        var e = (0, y.Z)(['\n  flex: 1;\n  flex-direction: row;\n  justify-content: flex-end;\n  display: flex;\n  gap: 24px;\n']);
        return (
          (C = function() {
            return e;
          }),
          e
        );
      }

      function B() {
        var e = (0, y.Z)(['\n  z-index: 5000;\n  position: relative;\n']);
        return (
          (B = function() {
            return e;
          }),
          e
        );
      }

      function H() {
        var e = (0, y.Z)([
          '\n  z-index: 4999;\n  position: fixed;\n  top: ',
          'px;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(0, 0, 0, 0.1);\n'
        ]);
        return (
          (H = function() {
            return e;
          }),
          e
        );
      }

      function S() {
        var e = (0, y.Z)([
          '\n  visibility: hidden;\n  position: absolute;\n  left: 0;\n  top: 22px;\n\n  min-width: 256px;\n  padding: 4px;\n  border: 1px solid #000;\n  border-radius: 2px;\n  box-shadow: 2px 2px 0 #000;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 8px;\n  background: #fff;\n\n  & > ',
          ' {\n    width: 100%;\n  }\n\n  & > * {\n    pointer-events: none;\n  }\n'
        ]);
        return (
          (S = function() {
            return e;
          }),
          e
        );
      }

      function A() {
        var e = (0, y.Z)([
          '\n  visibility: hidden;\n  width: 0;\n  height: 0;\n  margin: 0;\n  display: none;\n\n  &:checked ~ label {\n    background: #000;\n    color: #fff;\n  }\n\n  &:checked ~ ',
          ' {\n    visibility: unset;\n\n    > * {\n      pointer-events: all;\n    }\n  }\n'
        ]);
        return (
          (A = function() {
            return e;
          }),
          e
        );
      }

      function Z() {
        var e = (0, y.Z)(['\n  text-decoration: none;\n  color: #000;\n']);
        return (
          (Z = function() {
            return e;
          }),
          e
        );
      }
      var P = (0, w.ZP)(k.m.div).withConfig({ componentId: 'sc-f8c1ea71-0' })(_(), v.MP),
        N = (0, w.ZP)(k.m.div).withConfig({ componentId: 'sc-f8c1ea71-1' })(I(), function(e) {
          return e.hideForMobile ? 'none' : 'flex';
        }),
        j = w.ZP.div.withConfig({ componentId: 'sc-f8c1ea71-2' })(L()),
        W = w.ZP.div.withConfig({ componentId: 'sc-f8c1ea71-3' })(T()),
        F = w.ZP.div.withConfig({ componentId: 'sc-f8c1ea71-4' })(C()),
        M = w.ZP.div.withConfig({ componentId: 'sc-f8c1ea71-5' })(B()),
        D = w.ZP.div.withConfig({ componentId: 'sc-f8c1ea71-6' })(H(), v.MP),
        O = w.ZP.div.withConfig({ componentId: 'sc-f8c1ea71-7' })(S(), W),
        R = w.ZP.input.withConfig({ componentId: 'sc-f8c1ea71-8' })(A(), O),
        E = (0, w.ZP)(W).withConfig({ componentId: 'sc-f8c1ea71-9' })(Z()),
        G = n(92783),
        U = d()(
          function() {
            return n.e(117).then(n.bind(n, 71117));
          },
          {
            loadableGenerated: {
              webpack: function() {
                return [71117];
              }
            },
            ssr: !1
          }
        ),
        q = {
          initial: { y: '-100%', opacity: 0 },
          animate: { y: 0, opacity: 1 },
          transition: { when: 'beforeChildren', delayChildren: 0.2, duration: 1e-4 }
        },
        V = {
          initial: { opacity: 0, y: '-100%' },
          animate: function(e) {
            return { opacity: 1, y: 0, transition: { delay: 0.1 * e + 0.8, duration: 0.2 } };
          }
        },
        z = function() {
          (0, p.useStore)(function(e) {
            return { web3: e.web3 };
          }, h.Z).web3;
          var e = (0, p.useStore)(function(e) {
              return { openWindow: e.openWindow };
            }, h.Z).openWindow,
            t = [
              {
                label: 'HIFI Labs',
                menu: [
                  {
                    label: 'Meet the Team',
                    onClick: function() {
                      return e('about');
                    }
                  },
                  { label: 'Job Board', href: 'https://hifilabs.notion.site/HIFI-Labs-Job-Board-7eade43524ff4217827cd9e2e116c944' }
                ]
              },
              {
                label: 'View',
                hideForMobile: !0,
                menu: [
                  {
                    label: 'Idea Lab',
                    onClick: function() {
                      return e('idealab');
                    }
                  },
                  {
                    label: 'Artist Lab',
                    onClick: function() {
                      return e('artistlab');
                    }
                  },
                  {
                    label: 'Product Lab',
                    onClick: function() {
                      return e('productlab');
                    }
                  },
                  {
                    label: 'Web3 Cohort',
                    onClick: function() {
                      return e('web3cohort');
                    }
                  }
                ]
              },
              {
                label: 'Connect',
                menu: [
                  {
                    label: 'Contact',
                    onClick: function() {
                      return e('contact');
                    }
                  },
                  { label: 'Discord', href: G.GT.discord },
                  { label: 'Twitter', href: G.GT.twitter },
                  { label: 'Instagram', href: G.GT.instagram },
                  { label: 'Spotify', href: G.GT.spotify }
                ]
              }
            ],
            n = Array.apply(null, Array(t.length)).map(function() {
              return !1;
            }),
            i = (0, u.useState)(n),
            l = i[0],
            a = i[1],
            o = function(e) {
              var t = n;
              l[e] || (t[e] = !0), a(t);
            };
          return (0, s.jsxs)(P, {
            variants: q,
            initial: 'initial',
            animate: 'animate',
            children: [
              (0, s.jsx)(g, {}),
              l.some(function(e) {
                return !0 === e;
              }) && (0, s.jsx)(D, { onClick: o }),
              t
                .filter(function(e) {
                  return !!e;
                })
                .map(function(e, t) {
                  return (
                    e &&
                    (0, s.jsxs)(
                      N,
                      {
                        tabIndex: '0',
                        role: 'button',
                        onClick: e.onClick,
                        hideForMobile: e.hideForMobile,
                        variants: V,
                        initial: 'initial',
                        animate: 'animate',
                        custom: t,
                        children: [
                          e.icon && (0, s.jsx)(j, { children: (0, s.jsx)(x.Z, { icon: e.icon, width: '15px' }) }),
                          !e.menu && (0, s.jsx)(W, { children: e.label }),
                          e.menu &&
                            (0, s.jsxs)(M, {
                              hideForMobile: e.hideForMobile,
                              children: [
                                (0, s.jsx)(R, {
                                  type: 'checkbox',
                                  id: 'dropdown'.concat(t),
                                  checked: l[t],
                                  onChange: function() {
                                    return o(t);
                                  }
                                }),
                                (0, s.jsx)(W, { htmlFor: 'dropdown'.concat(t), as: 'label', children: e.label }),
                                (0, s.jsx)(O, {
                                  children: e.menu.map(function(e, t) {
                                    if (e)
                                      return (0, s.jsx)(
                                        N,
                                        {
                                          hideForMobile: e.hideForMobile,
                                          children: e.href
                                            ? (0, s.jsx)(E, {
                                                as: 'a',
                                                href: e.href,
                                                target: '_blank',
                                                rel: 'noopener noreferrer',
                                                children: e.label
                                              })
                                            : (0, s.jsx)(
                                                W,
                                                {
                                                  onClick: function() {
                                                    o(), e.onClick && e.onClick();
                                                  },
                                                  children: e.label
                                                },
                                                t
                                              )
                                        },
                                        t
                                      );
                                  })
                                })
                              ]
                            })
                        ]
                      },
                      t
                    )
                  );
                }),
              (0, s.jsxs)(F, {
                children: [
                  []
                    .filter(function(e) {
                      return !!e;
                    })
                    .map(function(e, t) {
                      return (0,
                      s.jsxs)(N, { tabIndex: '0', role: 'button', onClick: e.onClick, mobileHidden: e.mobileHidden, style: e.style, children: [e.icon && (0, s.jsx)(j, { children: (0, s.jsx)(x.Z, { icon: e.icon, width: '15px' }) }), (0, s.jsx)(W, { children: e.label })] }, t);
                    }),
                  (0, s.jsx)(U, {})
                ]
              })
            ]
          });
        },
        Y = n(42147),
        J = n(77388),
        K = d()(
          function() {
            return Promise.all([n.e(193), n.e(664), n.e(856), n.e(173), n.e(30)]).then(n.bind(n, 22030));
          },
          {
            loadableGenerated: {
              webpack: function() {
                return [22030];
              }
            }
          }
        ),
        X = d()(
          function() {
            return Promise.all([n.e(193), n.e(107), n.e(856), n.e(173), n.e(385)]).then(n.bind(n, 79385));
          },
          {
            loadableGenerated: {
              webpack: function() {
                return [79385];
              }
            }
          }
        ),
        Q = d()(
          function() {
            return Promise.all([n.e(193), n.e(664), n.e(856), n.e(957), n.e(665)]).then(n.bind(n, 60665));
          },
          {
            loadableGenerated: {
              webpack: function() {
                return [60665];
              }
            }
          }
        ),
        $ = d()(
          function() {
            return Promise.all([n.e(193), n.e(664), n.e(107), n.e(856), n.e(173), n.e(957), n.e(385), n.e(139)]).then(n.bind(n, 40139));
          },
          {
            loadableGenerated: {
              webpack: function() {
                return [40139];
              }
            }
          }
        ),
        ee = d()(
          function() {
            return Promise.all([n.e(193), n.e(664), n.e(856), n.e(454), n.e(14)]).then(n.bind(n, 49014));
          },
          {
            loadableGenerated: {
              webpack: function() {
                return [49014];
              }
            }
          }
        ),
        te = d()(
          function() {
            return Promise.all([n.e(193), n.e(107), n.e(856), n.e(454), n.e(414)]).then(n.bind(n, 82414));
          },
          {
            loadableGenerated: {
              webpack: function() {
                return [82414];
              }
            }
          }
        ),
        ne = d()(
          function() {
            return Promise.all([n.e(193), n.e(664), n.e(856), n.e(604)]).then(n.bind(n, 25604));
          },
          {
            loadableGenerated: {
              webpack: function() {
                return [25604];
              }
            }
          }
        ),
        ie = d()(
          function() {
            return Promise.all([n.e(193), n.e(664), n.e(460)]).then(n.bind(n, 2460));
          },
          {
            loadableGenerated: {
              webpack: function() {
                return [2460];
              }
            }
          }
        ),
        le = d()(
          function() {
            return Promise.all([n.e(193), n.e(65)]).then(n.bind(n, 53065));
          },
          {
            loadableGenerated: {
              webpack: function() {
                return [53065];
              }
            }
          }
        ),
        ae = d()(
          function() {
            return Promise.all([n.e(193), n.e(664), n.e(562)]).then(n.bind(n, 85562));
          },
          {
            loadableGenerated: {
              webpack: function() {
                return [85562];
              }
            }
          }
        ),
        oe = d()(
          function() {
            return Promise.all([n.e(193), n.e(664), n.e(856), n.e(799)]).then(n.bind(n, 1799));
          },
          {
            loadableGenerated: {
              webpack: function() {
                return [1799];
              }
            }
          }
        ),
        re = d()(
          function() {
            return Promise.all([n.e(193), n.e(111)]).then(n.bind(n, 13111));
          },
          {
            loadableGenerated: {
              webpack: function() {
                return [13111];
              }
            }
          }
        ),
        se = d()(
          function() {
            return Promise.all([n.e(193), n.e(901)]).then(n.bind(n, 40901));
          },
          {
            loadableGenerated: {
              webpack: function() {
                return [40901];
              }
            }
          }
        ),
        ue = d()(
          function() {
            return Promise.all([n.e(193), n.e(927)]).then(n.bind(n, 72927));
          },
          {
            loadableGenerated: {
              webpack: function() {
                return [72927];
              }
            }
          }
        ),
        ce = function(e) {
          var t = e.pageTitle,
            n = e.windowOpts,
            i = void 0 === n ? {} : n,
            l = (0, u.useRef)(!0),
            o = (0, p.useStore)(function(e) {
              var t = e.web3,
                n = e.windows;
              return { web3: t, windows: n, focusedWindow: (0, Y.m6)(n) };
            }, h.Z),
            r = (o.web3, o.windows),
            c = o.focusedWindow,
            d = r.artistlab,
            f = r.artist,
            b = r.idealab,
            x = r.idea,
            m = r.web3cohort,
            g = r.web3cohortartist,
            y = r.productlab,
            w = r.launcher,
            k = r.about,
            v = r.welcome,
            _ = r.contact,
            I = r.trash,
            L = r.text,
            T = r.webby;
          return (
            (0, u.useEffect)(
              function() {
                if ((l.current && (l.current = !1), !c)) return (document.title = 'HIFI Labs'), window.history.replaceState({}, 'HIFI Labs', '/');
                var e, t;
                window.location.pathname !== '/'.concat(c.id) &&
                  !(null === c || void 0 === c ? void 0 : c.alwaysRender) &&
                    (null === c || void 0 === c ? void 0 : c.focus) &&
                    (window.history.replaceState({}, 'HIFI Labs', c.params ? J.v[c.id].url(c.params) : '/'.concat(c.id)),
                    (document.title = (null === (e = J.v[c.id]) || void 0 === e
                    ? void 0
                    : e.pageTitle)
                      ? ''.concat(null === (t = J.v[c.id]) || void 0 === t ? void 0 : t.pageTitle, ' | HIFI Labs ')
                      : 'HIFI Labs'));
              },
              [c]
            ),
            (0, s.jsxs)(s.Fragment, {
              children: [
                d.open && (0, s.jsx)(K, (0, a.Z)({ pageTitle: t }, i, d.params)),
                f.open && (0, s.jsx)(X, (0, a.Z)({ pageTitle: t }, i, f.params)),
                b.open && (0, s.jsx)(Q, (0, a.Z)({ pageTitle: t }, i, b.params)),
                x.open && (0, s.jsx)($, (0, a.Z)({ pageTitle: t }, i, x.params)),
                m.open && (0, s.jsx)(ee, (0, a.Z)({ pageTitle: t }, i, m.params)),
                g.open && (0, s.jsx)(te, (0, a.Z)({ pageTitle: t }, i, g.params)),
                y.open && (0, s.jsx)(ne, (0, a.Z)({ pageTitle: t }, i, y.params)),
                w.open && (0, s.jsx)(ie, (0, a.Z)({ pageTitle: t }, i, w.params)),
                k.open && (0, s.jsx)(oe, (0, a.Z)({ pageTitle: t }, i, k.params)),
                v.open && (0, s.jsx)(le, (0, a.Z)({ pageTitle: t }, i, v.params)),
                _.open && (0, s.jsx)(ae, (0, a.Z)({ pageTitle: t }, i, _.params)),
                I.open && (0, s.jsx)(re, (0, a.Z)({ pageTitle: t }, i, I.params)),
                L.open && (0, s.jsx)(se, (0, a.Z)({ pageTitle: t }, i, L.params)),
                T.open && (0, s.jsx)(ue, (0, a.Z)({ pageTitle: t }, i, v.params))
              ]
            })
          );
        },
        de = n(85313),
        fe = n(90698),
        he = d()(
          function() {
            return n.e(388).then(n.bind(n, 91388));
          },
          {
            loadableGenerated: {
              webpack: function() {
                return [91388];
              }
            },
            ssr: !1
          }
        ),
        pe = !0,
        be = function(e) {
          var t = e.pageTitle,
            i = void 0 === t ? 'HIFI Labs' : t,
            c = e.metadata,
            d = e.windowId,
            x = e.params,
            m = e.windowOpts,
            g = void 0 === m ? {} : m,
            y = e.profile,
            w = (0, p.useStore)(function(e) {
              return { openWindow: e.openWindow, moveWindow: e.moveWindow };
            }, h.Z),
            k = w.openWindow,
            v = w.moveWindow,
            _ = (0, o.Z)((0, fe.i)(), 1)[0],
            I = (0, u.useState)(!1),
            L = I[0],
            T = I[1],
            C = '/' === (0, b.useRouter)().pathname;
          return (
            (0, u.useEffect)(
              function() {
                C &&
                  (L ||
                    ('undefined' !== typeof _.screenType &&
                      'undefined' !== _.screenType &&
                      (T(!0),
                      k('launcher'),
                      ['xsmall', 'small', 'medium'].includes(_.screenType) ||
                        (v('launcher', { x: 20, y: 60 }), v('welcome', { x: 120, y: _.height / 2 }), k('welcome')))));
              },
              [_, L, C, k, v, d, x]
            ),
            (0, u.useEffect)(function() {
              var e = (function() {
                  var e = (0, l.Z)(function() {
                    var e, t, i, l;
                    return (0, r.__generator)(this, function(a) {
                      switch (a.label) {
                        case 0:
                          return [4, Promise.resolve().then(n.bind(n, 20805))];
                        case 1:
                          return (e = a.sent().default), (t = e.getState()), (i = t.web3), (l = t.openWindow), i.connect(), d && l(d, x), [2];
                      }
                    });
                  });
                  return function() {
                    return e.apply(this, arguments);
                  };
                })(),
                t = (function() {
                  var e = (0, l.Z)(function() {
                    var e, t;
                    return (0, r.__generator)(this, function(i) {
                      switch (i.label) {
                        case 0:
                          return [4, Promise.resolve().then(n.bind(n, 20805))];
                        case 1:
                          return (e = i.sent().default), (t = e.getState().openWindow), d && t(d, x), [2];
                      }
                    });
                  });
                  return function() {
                    return e.apply(this, arguments);
                  };
                })();
              (0, de.lS)() ? e() : t();
            }, []),
            (0, s.jsxs)(s.Fragment, {
              children: [
                c
                  ? (0, s.jsx)(f.PB, {
                      title: c.title,
                      description: c.description,
                      openGraph: { title: c.title, description: c.description, images: c.images },
                      twitter: { cardType: 'summary_large_image', images: c.images }
                    })
                  : (0, s.jsx)(f.PB, { title: i }),
                (0, s.jsx)(z, {}),
                (0, s.jsx)(he, {
                  userId: null === y || void 0 === y ? void 0 : y.userId,
                  children: (0, s.jsx)(ce, { windowOpts: (0, a.Z)({ profile: y }, g) })
                })
              ]
            })
          );
        };
    },
    20805: function(e, t, n) {
      n.r(t),
        n.d(t, {
          default: function() {
            return P;
          },
          useStore: function() {
            return Z;
          }
        });
      var i,
        l,
        a,
        o,
        r = n(26042),
        s = n(70603),
        u = n(14671),
        c = n(38597),
        d = n(10324),
        f = n(47568),
        h = n(51438),
        p = n(88029),
        b = n(69396),
        x = n(16567),
        m = n(70655),
        g = n(12902),
        y = n(61634),
        w = n(14924),
        k = n(16149),
        v = ('true' !== n(34155).env.LOCALHOST_PRODUCTION) === 'development',
        _ = {
          isDEV: v,
          infuraId: v ? '495ec5eee9c24e55807f1c1f49b3e256' : 'eae49078c233449b863ca4cc692a8032',
          chainId: v ? k.a.Rinkeby : k.a.Mainnet,
          chainName: v ? 'rinkeby' : 'mainnet',
          dapp: {
            readOnlyChainId: v ? k.a.Rinkeby : k.a.Mainnet,
            readOnlyUrls:
              ((i = {}),
              (0, w.Z)(i, k.a.Mainnet, 'https://mainnet.infura.io/v3/eae49078c233449b863ca4cc692a8032'),
              (0, w.Z)(i, k.a.Rinkeby, 'https://rinkeby.infura.io/v3/495ec5eee9c24e55807f1c1f49b3e256'),
              i)
          }
        },
        I = (function() {
          var e = (0, f.Z)(function() {
            var e;
            return (0, m.__generator)(this, function(t) {
              switch (t.label) {
                case 0:
                  return l ? [3, 2] : [4, Promise.all([n.e(246), n.e(845), n.e(45)]).then(n.bind(n, 74845))];
                case 1:
                  return (
                    (e = t.sent().default),
                    (l = (function(e) {
                      (0, p.Z)(n, e);
                      var t = (0, x.Z)(n);

                      function n(e) {
                        return (0, h.Z)(this, n), t.call(this, (0, b.Z)((0, r.Z)({}, e), { pollingInterval: 45e3 }));
                      }
                      return n;
                    })(e)),
                    [2, l]
                  );
                case 2:
                  return [2, l];
                case 3:
                  return [2];
              }
            });
          });
          return function() {
            return e.apply(this, arguments);
          };
        })(),
        L = (function() {
          var e = (0, f.Z)(function() {
            var e, t;
            return (0, m.__generator)(this, function(i) {
              switch (i.label) {
                case 0:
                  return a ? [3, 3] : [4, n.e(277).then(n.t.bind(n, 42484, 23))];
                case 1:
                  return (e = i.sent().default), [4, I()];
                case 2:
                  return (
                    (t = i.sent()),
                    [
                      2,
                      (a = new e({
                        network: _.isDEV ? 'rinkeby' : 'mainnet',
                        cacheProvider: !0,
                        providerOptions: { walletconnect: { package: t, options: { infuraId: _.infuraId } } },
                        theme: 'light'
                      }))
                    ]
                  );
                case 3:
                  return [2, a];
                case 4:
                  return [2];
              }
            });
          });
          return function() {
            return e.apply(this, arguments);
          };
        })(),
        T = function(e, t) {
          return {
            web3: {
              provider: null,
              address: null,
              ensName: null,
              chainId: null,
              isConnected: !1,
              isConnecting: !1,
              isSigning: !1,
              isChecking: !1,
              disconnect: (0, f.Z)(function() {
                var t, i;
                return (0, m.__generator)(this, function(l) {
                  switch (l.label) {
                    case 0:
                      return [4, L()];
                    case 1:
                      return (t = l.sent()), [4, Promise.all([n.e(16), n.e(590), n.e(479), n.e(916)]).then(n.bind(n, 70916))];
                    case 2:
                      return (
                        (i = l.sent().signOutFromFirebase),
                        t && t.clearCachedProvider(),
                        'function' === typeof o && o(),
                        (0, y.Od)('walletconnect'),
                        (0, y.Od)('WALLETCONNECT_DEEPLINK_CHOICE'),
                        [4, i()]
                      );
                    case 3:
                      return (
                        l.sent(),
                        [
                          4,
                          e(
                            (0, g.ZP)(function(e) {
                              (e.web3.provider = null),
                                (e.web3.address = null),
                                (e.web3.ensName = null),
                                (e.web3.chainId = null),
                                (e.web3.isConnected = !1),
                                (e.web3.isConnecting = !1),
                                (e.web3.isSigning = !1),
                                (e.web3.isChecking = !1);
                            })
                          )
                        ]
                      );
                    case 4:
                      return l.sent(), [2];
                  }
                });
              }),
              connect: (0, f.Z)(function() {
                var n, i, l, a, o, r;
                return (0, m.__generator)(this, function(s) {
                  switch (s.label) {
                    case 0:
                      return (
                        (n = t().web3),
                        (i = n.connectWallet),
                        (l = n.connectWalletWithFirebase),
                        (a = n.disconnect),
                        [
                          4,
                          e(
                            (0, g.ZP)(function(e) {
                              (e.web3.isConnecting = !0), (e.web3.isSigning = !0), (e.web3.isConnected = !1);
                            })
                          )
                        ]
                      );
                    case 1:
                      s.sent(), (s.label = 2);
                    case 2:
                      return s.trys.push([2, 6, , 7]), [4, i()];
                    case 3:
                      return s.sent(), [4, l()];
                    case 4:
                      return (
                        s.sent(),
                        [
                          4,
                          e(
                            (0, g.ZP)(function(e) {
                              (e.web3.isConnecting = !1), (e.web3.isSigning = !1), (e.web3.isConnected = !0);
                            })
                          )
                        ]
                      );
                    case 5:
                      return s.sent(), [3, 7];
                    case 6:
                      return (
                        (o = s.sent()),
                        (r = o.message ? o.message : o),
                        a(),
                        ['Modal closed by user', 'User closed modal'].includes(r)
                          ? [2, 'You closed the web3 modal.']
                          : 'MetaMask Message Signature: User denied message signature.' == r
                          ? [2, 'You closed the web3 signing modal.']
                          : [2, r]
                      );
                    case 7:
                      return [2];
                  }
                });
              }),
              connectWallet: (0, f.Z)(function() {
                var t, i, l, a, o, r, s;
                return (0, m.__generator)(this, function(u) {
                  switch (u.label) {
                    case 0:
                      return [4, L()];
                    case 1:
                      if (!(t = u.sent())) throw Error('No web3 wallet installed. Go here to install: https://metamask.io/');
                      return [4, t.connect()];
                    case 2:
                      return (i = u.sent()), [4, Promise.all([n.e(246), n.e(828), n.e(995)]).then(n.bind(n, 93828))];
                    case 3:
                      return (l = u.sent().providers), (a = new l.Web3Provider(i)), [4, a.getSigner().getAddress()];
                    case 4:
                      return (o = u.sent()), [4, a.lookupAddress(o)];
                    case 5:
                      return (r = u.sent()), [4, a.getNetwork()];
                    case 6:
                      if ((s = u.sent()).chainId !== _.chainId)
                        throw Error('You seem to be on the wrong Ethereum network. Should be '.concat(_.chainName, ' but was ').concat(s.name, '.'));
                      return [
                        4,
                        e(
                          (0, g.ZP)(function(e) {
                            (e.web3.provider = a), (e.web3.address = o), (e.web3.ensName = r), (e.web3.chainId = s.chainId);
                          })
                        )
                      ];
                    case 7:
                      return u.sent(), [2];
                  }
                });
              }),
              connectWalletWithFirebase: (0, f.Z)(function() {
                var e, i, l, a, r, s;
                return (0, m.__generator)(this, function(u) {
                  switch (u.label) {
                    case 0:
                      return (
                        (e = t().web3),
                        (i = e.provider),
                        (l = e.address),
                        [4, Promise.all([n.e(16), n.e(590), n.e(479), n.e(916)]).then(n.bind(n, 70916))]
                      );
                    case 1:
                      return (
                        (a = u.sent()),
                        (r = a.onAuthStateChanged),
                        (s = a.SignIntoFirebaseWithWallet),
                        [
                          4,
                          new Promise(function(e, t) {
                            o = r(
                              (function() {
                                var n = (0, f.Z)(function(n) {
                                  var a;
                                  return (0, m.__generator)(this, function(o) {
                                    switch (o.label) {
                                      case 0:
                                        return o.trys.push([0, 4, , 5]), n || !l ? [3, 2] : [4, s({ provider: i, address: l })];
                                      case 1:
                                        return o.sent(), e(), [3, 3];
                                      case 2:
                                        e(), (o.label = 3);
                                      case 3:
                                        return [3, 5];
                                      case 4:
                                        return (a = o.sent()), t(a), [3, 5];
                                      case 5:
                                        return [2];
                                    }
                                  });
                                });
                                return function(e) {
                                  return n.apply(this, arguments);
                                };
                              })()
                            );
                          })
                        ]
                      );
                    case 2:
                      return u.sent(), [2];
                  }
                });
              })
            }
          };
        },
        C = n(42147),
        B = function(e, t) {
          return {
            volume: 1,
            muted: !1,
            setVolume: function(t) {
              return e(
                (0, g.ZP)(function(e) {
                  (e.volume = t), (e.muted = !1);
                })
              );
            },
            setMuted: function(t) {
              return e(
                (0, g.ZP)(function(e) {
                  e.muted = t;
                })
              );
            }
          };
        },
        H = function(e, t) {
          return {
            platform: null,
            setPlatform: function(t) {
              return e(
                (0, g.ZP)(function(e) {
                  e.platform = t;
                })
              );
            }
          };
        },
        S = n(85313),
        A = function() {
          return function(e, t) {
            return (0, r.Z)({}, T(e, t), (0, C.iA)(e, t), B(e), H(e));
          };
        },
        Z = (0, u.Z)(
          S.H7
            ? A()
            : (0, c.tJ)(A(), {
                name: 'HIFILABS',
                version: 1.2,
                partialize: function(e) {
                  return Object.fromEntries(
                    Object.entries(e).filter(function(e) {
                      var t = (0, s.Z)(e, 1)[0];
                      return !['web3', 'ui'].includes(t);
                    })
                  );
                }
              })
        );
      S.H7 && (0, d.y)('Store', Z);
      var P = Z;
    },
    42147: function(e, t, n) {
      n.d(t, {
        iA: function() {
          return c;
        },
        m6: function() {
          return f;
        }
      });
      var i = n(14924),
        l = n(26042),
        a = n(69396),
        o = n(70603),
        r = n(12902),
        s = n(77388),
        u = Object.entries(s.v).reduce(function(e, t) {
          var n = (0, o.Z)(t, 2),
            r = n[0],
            s = n[1];
          return (0,
          a.Z)((0, l.Z)({}, e), (0, i.Z)({}, r, { id: r, alwaysRender: s.alwaysRender || !1, zIndex: 'webby' === r ? 133333337 : 1337, open: !(!s.open && 'webby' != r), focus: !1, params: !1, x: 200 * Math.random(), y: 200 * Math.random() }));
        }, {}),
        c = function(e, t) {
          return {
            currentZIndex: 1337,
            windows: u,
            openWindow: function(t, n) {
              e(
                (0, r.ZP)(function(e) {
                  (e.currentZIndex += 1),
                    Object.keys(e.windows).forEach(function(t) {
                      e.windows[t].focus = !1;
                    }),
                    (e.windows[t].zIndex = e.currentZIndex),
                    (e.windows[t].focus = !0),
                    (e.windows[t].open = !0),
                    (e.windows[t].params = n || !1);
                })
              );
            },
            focusWindow: function(t) {
              return e(
                (0, r.ZP)(function(e) {
                  Object.keys(e.windows).forEach(function(t) {
                    e.windows[t].focus = !1;
                  }),
                    (e.currentZIndex += 1),
                    (e.windows[t].zIndex = e.currentZIndex),
                    (e.windows[t].focus = !0);
                })
              );
            },
            moveWindow: function(t, n) {
              var i = n.x,
                l = n.y;
              return e(
                (0, r.ZP)(function(e) {
                  (e.currentZIndex += 1), (e.windows[t].x = i), (e.windows[t].y = l);
                })
              );
            },
            closeWindow: function(n) {
              var i = t().windows,
                l = Object.values(i)
                  .sort(function(e, t) {
                    return t.zIndex - e.zIndex;
                  })
                  .filter(function(e) {
                    return e.open;
                  })
                  .filter(function(e) {
                    return e.id !== n;
                  });
              e(
                (0, r.ZP)(function(e) {
                  (e.windows[n].focus = !1), (e.windows[n].open = !1), l[0] && (e.windows[l[0].id].focus = !0);
                })
              );
            }
          };
        },
        d = ['likedTracks', 'launcher', 'webby'],
        f = function(e) {
          var t = Object.values(e)
            .sort(function(e, t) {
              return t.zIndex - e.zIndex;
            })
            .filter(function(e) {
              return e.open;
            })
            .filter(function(e) {
              return !d.includes(e.id);
            });
          return !!t[0] && t[0];
        };
    },
    92783: function(e, t, n) {
      n.d(t, {
        GT: function() {
          return d;
        },
        sl: function() {
          return c;
        },
        xu: function() {
          return f;
        },
        X9: function() {
          return u;
        },
        qF: function() {
          return s;
        }
      });
      var i = n(14924),
        l = n(26042),
        a = n(69396),
        o = JSON.parse(
          '[{"id":"15ecf695-0698-4a87-8228-347510e4d2f9","Url":{"id":"S%7BH~","type":"url","url":"mailto:shout@hifilabs.co"},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"email","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"email","href":null}]}},{"id":"358cebe9-692f-4af4-81c3-c1cdb01d8f8b","Url":{"id":"S%7BH~","type":"url","url":"https://instagram.com/hifilabs"},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"instagram","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"instagram","href":null}]}},{"id":"a9371743-f2d9-4b33-ba36-4a4907c63d3f","Url":{"id":"S%7BH~","type":"url","url":"https://open.spotify.com/user/ib3tse7i520i0uk007nxaj43i"},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"spotify","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"spotify","href":null}]}},{"id":"168953fa-70fd-4e6e-a826-1af3f091fd20","Url":{"id":"S%7BH~","type":"url","url":"https://discord.gg/7JnzAQCqjY"},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"discord","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"discord","href":null}]}},{"id":"886973db-c2a6-4b5b-9e77-4eab3db8e059","Url":{"id":"S%7BH~","type":"url","url":"https://twitter.com/hifilabs"},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"twitter","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"twitter","href":null}]}}]'
        ),
        r = JSON.parse(
          '[{"id":"591e623c-af2b-4887-ab6a-8cb907899323","Text":{"id":"S%7BH~","type":"rich_text","rich_text":[{"type":"text","text":{"content":"Web3 Cohort","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Web3 Cohort","href":null}]},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"Web3Cohort.Title","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Web3Cohort.Title","href":null}]}},{"id":"e0c6ce7a-1009-4871-99ee-b85aeeeedd06","Text":{"id":"S%7BH~","type":"rich_text","rich_text":[{"type":"text","text":{"content":"Get info","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Get info","href":null}]},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"Web3Cohort.ButtonLabel","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Web3Cohort.ButtonLabel","href":null}]}},{"id":"ceb8869b-c73d-414f-a3ad-fb8ea1182c85","Text":{"id":"S%7BH~","type":"rich_text","rich_text":[{"type":"text","text":{"content":"The web3 artist cohort is a three week program that helps connect artists with the resources they need to launch their next music project using web3 tools.","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"The web3 artist cohort is a three week program that helps connect artists with the resources they need to launch their next music project using web3 tools.","href":null}]},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"Web3Cohort.Description","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Web3Cohort.Description","href":null}]}},{"id":"7a0b2998-5291-4157-97b8-d8c1e581d80a","Text":{"id":"S%7BH~","type":"rich_text","rich_text":[{"type":"text","text":{"content":"Alan Lili, ASTU, Blaire / WYMN, Nessnite, Sassy Black, Alara, Boy Untitled, Brenna, Kevin Shaw/ Mexyu, TK, Brux, Nduka, Sandu Ndu, Toha, Upper Reality","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Alan Lili, ASTU, Blaire / WYMN, Nessnite, Sassy Black, Alara, Boy Untitled, Brenna, Kevin Shaw/ Mexyu, TK, Brux, Nduka, Sandu Ndu, Toha, Upper Reality","href":null}]},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"Web3Cohort.Marquee","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Web3Cohort.Marquee","href":null}]}},{"id":"f2c1bb3a-2ad8-4cac-99a7-991dae1b5ce6","Text":{"id":"S%7BH~","type":"rich_text","rich_text":[{"type":"text","text":{"content":"Work with us","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Work with us","href":null}]},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"AboutUs.ButtonLabel","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"AboutUs.ButtonLabel","href":null}]}},{"id":"1ee69a49-7dec-4492-8fa1-7120e4efad29","Text":{"id":"S%7BH~","type":"rich_text","rich_text":[{"type":"text","text":{"content":"mailto:shout@hifilabs.co","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"mailto:shout@hifilabs.co","href":null}]},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"AboutUs.ButtonHref","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"AboutUs.ButtonHref","href":null}]}},{"id":"2c728e84-4502-4352-8482-85ab7816fb74","Text":{"id":"S%7BH~","type":"rich_text","rich_text":[{"type":"text","text":{"content":"Build with us","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Build with us","href":null}]},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"Contact.Button2Label","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Contact.Button2Label","href":null}]}},{"id":"d407557e-90a1-413d-8603-75ac8284ccc7","Text":{"id":"S%7BH~","type":"rich_text","rich_text":[{"type":"text","text":{"content":"https://guilds.hifilabs.co/","link":{"url":"https://guilds.hifilabs.co/"}},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"https://guilds.hifilabs.co/","href":"https://guilds.hifilabs.co/"}]},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"Contact.Button2Href","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Contact.Button2Href","href":null}]}},{"id":"9bf04909-e48d-44b9-9aca-2a147bf282ea","Text":{"id":"S%7BH~","type":"rich_text","rich_text":[{"type":"text","text":{"content":"Work with us","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Work with us","href":null}]},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"Launcher.ButtonLabel","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Launcher.ButtonLabel","href":null}]}},{"id":"66179517-c6c4-4c1c-a77e-6a6dbc59fc12","Text":{"id":"S%7BH~","type":"rich_text","rich_text":[{"type":"text","text":{"content":"mailto:shout@hifilabs.co","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"mailto:shout@hifilabs.co","href":null}]},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"Launcher.ButtonHref","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Launcher.ButtonHref","href":null}]}},{"id":"f1391bde-6a21-4fcd-97fc-9c39a1f9673f","Text":{"id":"S%7BH~","type":"rich_text","rich_text":[{"type":"text","text":{"content":"Work with us","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Work with us","href":null}]},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"ProductLab.ButtonLabel","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"ProductLab.ButtonLabel","href":null}]}},{"id":"3b7054b5-06ef-4149-82f0-999995888f04","Text":{"id":"S%7BH~","type":"rich_text","rich_text":[{"type":"text","text":{"content":"mailto:shout@hifilabs.co","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"mailto:shout@hifilabs.co","href":null}]},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"ProductLab.ButtonHref","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"ProductLab.ButtonHref","href":null}]}},{"id":"c5483fe1-a89f-4b57-9a65-a7479ac23cc3","Text":{"id":"S%7BH~","type":"rich_text","rich_text":[{"type":"text","text":{"content":"https://airtable.com/shrjmRjPBxCyL222O","link":{"url":"https://airtable.com/shrjmRjPBxCyL222O"}},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"https://airtable.com/shrjmRjPBxCyL222O","href":"https://airtable.com/shrjmRjPBxCyL222O"}]},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"Web3Cohort.ButtonHref","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Web3Cohort.ButtonHref","href":null}]}},{"id":"06aad715-c59b-414d-8890-95b083b154ce","Text":{"id":"S%7BH~","type":"rich_text","rich_text":[{"type":"text","text":{"content":"Work with us","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Work with us","href":null}]},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"IdeaLab.ButtonLabel","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"IdeaLab.ButtonLabel","href":null}]}},{"id":"e140c55e-e8b1-4183-9a4a-6cb9aa62478f","Text":{"id":"S%7BH~","type":"rich_text","rich_text":[{"type":"text","text":{"content":"mailto:shout@hifilabs.co","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"mailto:shout@hifilabs.co","href":null}]},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"IdeaLab.ButtonHref","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"IdeaLab.ButtonHref","href":null}]}},{"id":"9efc1000-2669-431c-a184-fdcc2c40578d","Text":{"id":"S%7BH~","type":"rich_text","rich_text":[{"type":"text","text":{"content":"Work with us","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Work with us","href":null}]},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"ArtistLab.ButtonLabel","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"ArtistLab.ButtonLabel","href":null}]}},{"id":"b870f698-63be-4681-9a39-f5ad3dd594e1","Text":{"id":"S%7BH~","type":"rich_text","rich_text":[{"type":"text","text":{"content":"mailto:shout@hifilabs.co","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"mailto:shout@hifilabs.co","href":null}]},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"ArtistLab.ButtonHref","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"ArtistLab.ButtonHref","href":null}]}},{"id":"3f47c7e0-ae4d-4a3b-876f-5c228b053c68","Text":{"id":"S%7BH~","type":"rich_text","rich_text":[{"type":"text","text":{"content":"mailto:shout@hifilabs.co","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"mailto:shout@hifilabs.co","href":null}]},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"Contact.Button1Href","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Contact.Button1Href","href":null}]}},{"id":"0ac786e7-8d24-4b77-9aec-e68a8e017774","Text":{"id":"S%7BH~","type":"rich_text","rich_text":[{"type":"text","text":{"content":"Work with us","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Work with us","href":null}]},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"Contact.Button1Label","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Contact.Button1Label","href":null}]}},{"id":"53886bb4-f929-44ff-ab36-4ede4ba6c0ea","Text":{"id":"S%7BH~","type":"rich_text","rich_text":[{"type":"text","text":{"content":"Sign up for our newsletter","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Sign up for our newsletter","href":null}]},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"Contact.Newsletter.Description","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Contact.Newsletter.Description","href":null}]}},{"id":"82e5f3e8-cd63-4fbe-aec8-6944dd3d6ee0","Text":{"id":"S%7BH~","type":"rich_text","rich_text":[{"type":"text","text":{"content":"Join us in building an artist-owned, community-powered, future for musicians.","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Join us in building an artist-owned, community-powered, future for musicians.","href":null}]},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"Contact.Description","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Contact.Description","href":null}]}},{"id":"3ec31e3e-ad15-45c7-a2c0-4f0f25b000db","Text":{"id":"S%7BH~","type":"rich_text","rich_text":[{"type":"text","text":{"content":"https://videodelivery.net/422f57c3e79d43e7bd8ae2c21d9b7a18/thumbnails/thumbnail.jpg","link":{"url":"https://videodelivery.net/422f57c3e79d43e7bd8ae2c21d9b7a18/thumbnails/thumbnail.jpg"}},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"https://videodelivery.net/422f57c3e79d43e7bd8ae2c21d9b7a18/thumbnails/thumbnail.jpg","href":"https://videodelivery.net/422f57c3e79d43e7bd8ae2c21d9b7a18/thumbnails/thumbnail.jpg"}]},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"Launcher.VideoPoster","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Launcher.VideoPoster","href":null}]}},{"id":"548e6978-ae1b-46fa-87b5-adac23d6bb69","Text":{"id":"S%7BH~","type":"rich_text","rich_text":[{"type":"text","text":{"content":"https://videodelivery.net/422f57c3e79d43e7bd8ae2c21d9b7a18/thumbnails/thumbnail.mp4?duration=2m00s&audio=true&height=360","link":{"url":"https://videodelivery.net/422f57c3e79d43e7bd8ae2c21d9b7a18/thumbnails/thumbnail.mp4?duration=2m00s&audio=true&height=360"}},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"https://videodelivery.net/422f57c3e79d43e7bd8ae2c21d9b7a18/thumbnails/thumbnail.mp4?duration=2m00s&audio=true&height=360","href":"https://videodelivery.net/422f57c3e79d43e7bd8ae2c21d9b7a18/thumbnails/thumbnail.mp4?duration=2m00s&audio=true&height=360"}]},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"Launcher.Video","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Launcher.Video","href":null}]}},{"id":"3b0bcae1-9aa1-48b2-851f-77e170aabd4d","Text":{"id":"S%7BH~","type":"rich_text","rich_text":[{"type":"text","text":{"content":"HIFI Labs, Modern Artist & Community Development, HIFI Labs, Modern Artist & Community Development","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"HIFI Labs, Modern Artist & Community Development, HIFI Labs, Modern Artist & Community Development","href":null}]},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"AboutUs.Marquee","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"AboutUs.Marquee","href":null}]}},{"id":"fa92fa6d-629b-4b9f-ae86-87e8d73fb208","Text":{"id":"S%7BH~","type":"rich_text","rich_text":[{"type":"text","text":{"content":"PRODUCT LAB, Modern Artist & Community Development, PRODUCT LAB, Modern Artist & Community Development","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"PRODUCT LAB, Modern Artist & Community Development, PRODUCT LAB, Modern Artist & Community Development","href":null}]},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"ProductLab.Marquee","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"ProductLab.Marquee","href":null}]}},{"id":"dbedac8d-d0b0-4063-b570-098f1c7fcc11","Text":{"id":"S%7BH~","type":"rich_text","rich_text":[{"type":"text","text":{"content":"IDEA LAB, Modern Artist & Community Development, IDEA LAB, Modern Artist & Community Development","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"IDEA LAB, Modern Artist & Community Development, IDEA LAB, Modern Artist & Community Development","href":null}]},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"IdeaLab.Marquee","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"IdeaLab.Marquee","href":null}]}},{"id":"f65632b9-3bde-4b6b-9484-58d67b6f33ca","Text":{"id":"S%7BH~","type":"rich_text","rich_text":[{"type":"text","text":{"content":"ARTIST LAB, Modern Artist & Community Development, ARTIST LAB, Modern Artist & Community Development","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"ARTIST LAB, Modern Artist & Community Development, ARTIST LAB, Modern Artist & Community Development","href":null}]},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"ArtistLab.Marquee","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"ArtistLab.Marquee","href":null}]}},{"id":"44750a56-e9e0-473b-bc3f-e428d25d088d","Text":{"id":"S%7BH~","type":"rich_text","rich_text":[{"type":"text","text":{"content":"Anderson .Paak, Courtney Barnett, Charli XCX, David Lynch, Interpol, Migos, RAC, TOKiMONSTA, Tiny Tiger, Poppy, A.G. Cook, LP, Noah Cyrus, Reggie Watts, Yacht, Twin Shadow, 100 Gecs, Clairo ","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Anderson .Paak, Courtney Barnett, Charli XCX, David Lynch, Interpol, Migos, RAC, TOKiMONSTA, Tiny Tiger, Poppy, A.G. Cook, LP, Noah Cyrus, Reggie Watts, Yacht, Twin Shadow, 100 Gecs, Clairo ","href":null}]},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"Launcher.Marquee","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Launcher.Marquee","href":null}]}},{"id":"3712421d-5e6c-4904-9a04-f715addd881a","Text":{"id":"S%7BH~","type":"rich_text","rich_text":[{"type":"text","text":{"content":"Take a peek at some original products and systems built by HIFI Labs.","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Take a peek at some original products and systems built by HIFI Labs.","href":null}]},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"ProductLab.Description","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"ProductLab.Description","href":null}]}},{"id":"71e13ae0-05a7-4952-9199-dfdef2900867","Text":{"id":"S%7BH~","type":"rich_text","rich_text":[{"type":"text","text":{"content":"HIFI Labs is a creative incubator and artist mentorship collective building an artist-owned, community-powered future for musicians. Fueled by modern technology and industry-changing innovation, HIFI Labs\' mission is to achieve a more equitable and sustainable music economy.","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"HIFI Labs is a creative incubator and artist mentorship collective building an artist-owned, community-powered future for musicians. Fueled by modern technology and industry-changing innovation, HIFI Labs\' mission is to achieve a more equitable and sustainable music economy.","href":null}]},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"AboutUs.Description","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"AboutUs.Description","href":null}]}},{"id":"0b6a74d4-77f2-4a8e-afb5-9d58e9268531","Text":{"id":"S%7BH~","type":"rich_text","rich_text":[{"type":"text","text":{"content":"HIFI Labs is a creative incubator and artist mentorship collective building an artist-owned, community-powered future for musicians. Fueled by modern technology and industry-changing innovation, HIFI Labs\' mission is to achieve a more equitable and sustainable music economy.","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"HIFI Labs is a creative incubator and artist mentorship collective building an artist-owned, community-powered future for musicians. Fueled by modern technology and industry-changing innovation, HIFI Labs\' mission is to achieve a more equitable and sustainable music economy.","href":null}]},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"Launcher.Description","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Launcher.Description","href":null}]}},{"id":"7037ac5c-be51-468a-b470-17792f281bb9","Text":{"id":"S%7BH~","type":"rich_text","rich_text":[{"type":"text","text":{"content":"The Idea Lab is here to bring the most original ideas to life with the greatest artists in the world.\xa0 Whether it\u2019s an artist\u2019s original concept or an idea we help to build with an artist\u2019s unique talents and goals in mind, we provide the resources to pull off the most unique and creative ideas, which traditionally fell through the cracks due to lack of funding, bandwidth, and know-how.","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"The Idea Lab is here to bring the most original ideas to life with the greatest artists in the world.\xa0 Whether it\u2019s an artist\u2019s original concept or an idea we help to build with an artist\u2019s unique talents and goals in mind, we provide the resources to pull off the most unique and creative ideas, which traditionally fell through the cracks due to lack of funding, bandwidth, and know-how.","href":null}]},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"IdeaLab.Description","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"IdeaLab.Description","href":null}]}},{"id":"a7e2863e-2e64-4009-9589-bbdebcb1a666","Text":{"id":"S%7BH~","type":"rich_text","rich_text":[{"type":"text","text":{"content":"Led by an experienced team of music industry professionals, HIFI Labs provides modern A&R support to a roster of emerging artists. The A&R team at HIFI Labs focuses on artist development through web2 & web3 tools, empowering their roster of artists to take ownership of their art and creative endeavors by way of decentralized engagement and community solutions.","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Led by an experienced team of music industry professionals, HIFI Labs provides modern A&R support to a roster of emerging artists. The A&R team at HIFI Labs focuses on artist development through web2 & web3 tools, empowering their roster of artists to take ownership of their art and creative endeavors by way of decentralized engagement and community solutions.","href":null}]},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"ArtistLab.Description","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"ArtistLab.Description","href":null}]}}]'
        ),
        s = function(e) {
          var t;
          return null === (t = e['Website Slug']) || void 0 === t
            ? void 0
            : t.rich_text
                .map(function(e) {
                  return e.plain_text;
                })
                .join();
        },
        u = function(e, t) {
          return e.find(function(e) {
            return s(e) === t;
          });
        },
        c = r.reduce(function(e, t) {
          var n, o;
          return (0, a.Z)(
            (0, l.Z)({}, e),
            (0, i.Z)(
              {},
              null === (n = t.Name.title[0]) || void 0 === n ? void 0 : n.plain_text,
              null === (o = t.Text) || void 0 === o
                ? void 0
                : o.rich_text
                    .map(function(e) {
                      return e.plain_text;
                    })
                    .join()
            )
          );
        }, {}),
        d = o.reduce(function(e, t) {
          return (0, a.Z)((0, l.Z)({}, e), (0, i.Z)({}, t.Name.title[0].plain_text, t.Url.url));
        }, {}),
        f = function(e) {
          return e
            ? e.split(',').map(function(e) {
                return e.trim();
              })
            : null;
        };
    },
    85313: function(e, t, n) {
      n.d(t, {
        BZ: function() {
          return o;
        },
        H7: function() {
          return l;
        },
        lS: function() {
          return a;
        }
      });
      var i = n(61634),
        l = (n(96076), !1),
        a = function() {
          return null !== (0, i.U2)('WEB3_CONNECT_CACHED_PROVIDER', { withPrefix: !1 });
        };

      function o(e) {
        for (var t = [], n = '', i = !1, l = 0; l < e.length; l++) {
          var a = e[l];
          ' ' !== a || i ? ('"' === a && (i = !i), (n += a)) : (t.push(n), (n = ''));
        }
        t.push(n);
        var o = {};
        return (
          t.forEach(function(e) {
            var t = e.split('='),
              n = t[0].replace(/[\[\]'"]/g, ''),
              i = t[1].replace(/[\[\]'"]/g, '');
            o[n] = i;
          }),
          o
        );
      }
    },
    61634: function(e, t, n) {
      n.d(t, {
        Od: function() {
          return o;
        },
        U2: function() {
          return l;
        },
        t8: function() {
          return a;
        }
      });
      var i = 'musicOS',
        l = function(e, t) {
          var n = t.withPrefix,
            l = void 0 === n || n;
          return localStorage.getItem(''.concat(l ? ''.concat(i, '_') : '').concat(e));
        },
        a = function(e, t, n) {
          var l = n.withPrefix,
            a = void 0 === l || l;
          localStorage.setItem(''.concat(a ? ''.concat(i, '_') : '').concat(e), t);
        },
        o = function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = t.withPrefix,
            l = void 0 === n || n;
          localStorage.removeItem(''.concat(l ? ''.concat(i, '_') : '').concat(e));
        };
    }
  }
]);
