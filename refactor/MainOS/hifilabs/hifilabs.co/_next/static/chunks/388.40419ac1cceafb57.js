'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [388],
  {
    91388: function(n, e, t) {
      t.r(e),
        t.d(e, {
          Shortcut: function() {
            return x;
          },
          default: function() {
            return g;
          }
        });
      var o = t(26042),
        i = t(69396),
        c = t(99534),
        r = t(85893),
        a = t(60374),
        l = t(31803),
        u = t(14141),
        d = t(57247),
        s = u.ZP.div.withConfig({ componentId: 'sc-5eba1d62-0' })(
          { fontSize: '24px' },
          (0, d.bU)({
            variants: {
              title: { fontSize: 4, color: 'black', marginBottom: '7px' },
              subtitle: { fontSize: 3, color: 'black' },
              section: { fontSize: 2, color: 'black' },
              body: { fontSize: 3, color: 'black' },
              text: { padding: '2px 4px', borderRadius: 2 },
              wellText: { fontSize: 3, color: 'black' },
              danger: { color: 'red' }
            }
          }),
          d.$_,
          d.Dh
        ),
        p = t(27949),
        f = t(20805),
        b = {
          animate: function(n) {
            return { opacity: 1, transition: { delay: 0.2 * n + 0.2, duration: 1e-4 } };
          },
          initial: { opacity: 0 }
        },
        x = function(n) {
          var e = n.icon,
            t = n.label,
            a = n.custom,
            u = n.external,
            d = void 0 !== u && u,
            f = n.onClick,
            x = void 0 === f ? function() {} : f,
            g = (0, c.Z)(n, ['icon', 'label', 'custom', 'external', 'onClick']);
          return (0, r.jsxs)(
            l._R,
            (0, i.Z)((0, o.Z)({ variants: b, initial: 'initial', animate: 'animate', custom: a, role: 'button', tabIndex: '0', onClick: x }, g), {
              children: [
                (0, r.jsx)(p.Z, { icon: e, height: '50px', mb: '8px' }),
                (0, r.jsxs)(s, {
                  variant: 'text',
                  bg: 'white',
                  children: [t, ' ', d && (0, r.jsx)(p.Z, { icon: p.c.EXTERNAL, height: '12px', mb: '-1px' })]
                })
              ]
            })
          );
        },
        g = function(n) {
          var e = n.children,
            t = (0, f.useStore)(function(n) {
              return { openWindow: n.openWindow };
            }, a.Z).openWindow;
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(l.eF, { children: e }),
              (0, r.jsxs)(l.Gz, {
                children: [
                  (0, r.jsx)(x, {
                    label: 'Webby Award',
                    icon: 'https://www.webbyawards.com/wp-content/uploads/sites/4/2015/04/Color_Webby_PV_Winner.png',
                    custom: 1,
                    onClick: function() {
                      t('webby');
                    }
                  }),
                  (0, r.jsx)(x, {
                    label: 'Launcher',
                    icon: p.c.FLOPPY,
                    custom: 1,
                    onClick: function() {
                      t('launcher');
                    }
                  }),
                  (0, r.jsx)(x, {
                    label: 'Idea Lab',
                    icon: p.c.FOLDER,
                    custom: 2,
                    onClick: function() {
                      t('idealab');
                    }
                  }),
                  (0, r.jsx)(x, {
                    label: 'Artist Lab',
                    icon: p.c.FOLDER,
                    custom: 3,
                    onClick: function() {
                      t('artistlab');
                    }
                  }),
                  (0, r.jsx)(x, {
                    label: 'Product Lab',
                    icon: p.c.FOLDER,
                    custom: 4,
                    onClick: function() {
                      t('productlab');
                    }
                  }),
                  (0, r.jsx)(x, {
                    label: 'Web3 Cohort',
                    icon: p.c.FOLDER,
                    custom: 5,
                    onClick: function() {
                      t('web3cohort');
                    }
                  }),
                  (0, r.jsx)(x, {
                    label: 'Trash',
                    icon: p.c.TRASH,
                    custom: 5,
                    onClick: function() {
                      t('trash');
                    }
                  })
                ]
              })
            ]
          });
        };
    },
    31803: function(n, e, t) {
      t.d(e, {
        Gz: function() {
          return p;
        },
        _R: function() {
          return f;
        },
        eF: function() {
          return s;
        }
      });
      var o = t(7297),
        i = t(14141),
        c = (t(96076), t(59395));
      function r() {
        var n = (0, o.Z)([
          '\n  overflow: hidden;\n  scroll-behavior: none;\n  overscroll-behavior: none;\n  position: relative;\n\n  height: 100vh;\n\n  background-color: #f7aebe;\n  background-size: cover;\n  background-position: center;\n  background: repeating-conic-gradient(#cf92a0 0% 25%, #f7aebe 0% 50%) 50% / 3px 3px;\n\n  ',
          '\n'
        ]);
        return (
          (r = function() {
            return n;
          }),
          n
        );
      }
      function a() {
        var n = (0, o.Z)(['\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  row-gap: 40px;\n  padding: 20px;\n']);
        return (
          (a = function() {
            return n;
          }),
          n
        );
      }
      function l() {
        var n = (0, o.Z)([
          '\n  position: absolute;\n  top: 80px;\n  right: 40px;\n  display: flex;\n  align-content: flex-start;\n  justify-items: fflex;\n  flex-direction: column;\n  flex-wrap: wrap-reverse;\n  row-gap: 40px;\n  max-height: 90vh;\n\n  @media only screen and (max-width: 600px) {\n    top: 80px;\n    left: 0px;\n    width: 100%;\n    max-height: fit-content;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-gap: 30px 0px;\n  }\n'
        ]);
        return (
          (l = function() {
            return n;
          }),
          n
        );
      }
      function u() {
        var n = (0, o.Z)([
          '\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  text-align: center;\n  max-width: 110px;\n  cursor: pointer;\n  @media only screen and (max-width: 600px) {\n    margin-right: 0px;\n    outline: none;\n  }\n'
        ]);
        return (
          (u = function() {
            return n;
          }),
          n
        );
      }
      function d() {
        var n = (0, o.Z)(['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n']);
        return (
          (d = function() {
            return n;
          }),
          n
        );
      }
      var s = i.ZP.div.withConfig({ componentId: 'sc-9be8bed7-0' })(r(), function(n) {
          return n.backgroundImage
            ? '\n      background-image: '.concat(function(n) {
                var e = n.backgroundImage;
                return e ? 'url('.concat(e, ')') : 'none';
              }, ';')
            : '\n      background: repeating-conic-gradient(#CF92A0 0% 25%, #F7AEBE 0% 50%) 50% / 3px 3px\n      ';
        }),
        p = (i.ZP.div.withConfig({ componentId: 'sc-9be8bed7-1' })(a()), (0, i.ZP)(c.m.div).withConfig({ componentId: 'sc-9be8bed7-2' })(l())),
        f = (0, i.ZP)(c.m.div).withConfig({ componentId: 'sc-9be8bed7-3' })(u());
      i.ZP.div.withConfig({ componentId: 'sc-9be8bed7-4' })(d());
    }
  }
]);
