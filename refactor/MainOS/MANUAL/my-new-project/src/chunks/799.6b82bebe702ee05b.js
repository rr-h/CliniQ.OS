'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [799],
  {
    12242: function(e, t, n) {
      var l = n(26042),
        i = n(69396),
        a = n(99534),
        o = n(85893),
        r = n(41664),
        s = n.n(r),
        c = n(5017),
        d = n(14141),
        f = n(57247),
        h = d.ZP.button.withConfig({ componentId: 'sc-e4deb317-0' })(
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
          (0, f.bU)({ variants: { light: { background: '#fff', color: '#000' }, dark: { background: '#000', color: '#fff' } } })
        );
      t.Z = function(e) {
        var t = e.href,
          n = e.externalHref,
          r = e.variant,
          d = e.style,
          f = void 0 === d ? {} : d,
          u = e.onClick,
          p = void 0 === u ? function() {} : u,
          x = (0, a.Z)(e, ['href', 'externalHref', 'variant', 'style', 'onClick']),
          b = (0, c.wW)();
        return t
          ? (0, o.jsx)(s(), {
              href: t,
              children: (0, o.jsx)(h, {
                variant: r,
                onClick: function() {
                  b('click-link', { props: { url: t } }), p();
                },
                children: x.children
              })
            })
          : n
          ? (0, o.jsx)('a', {
              href: n,
              target: '_blank',
              rel: 'noreferrer',
              style: (0, i.Z)((0, l.Z)({}, f), { textDecoration: 'none' }),
              onClick: function() {
                b('click-button-external-link', { props: { url: n } });
              },
              children: (0, o.jsx)(h, { variant: r, onClick: p, children: x.children })
            })
          : t
          ? void 0
          : (0, o.jsx)(h, {
              variant: r,
              onClick: function() {
                b('click-link', { props: { url: t } }), p();
              },
              children: x.children
            });
      };
    },
    83670: function(e, t, n) {
      var l = n(85893);
      t.Z = function(e) {
        var t = e.width,
          n = void 0 === t ? 110 : t,
          i = e.height,
          a = void 0 === i ? 24 : i;
        return (0, l.jsx)('svg', {
          viewBox: '0 0 110 24',
          width: n,
          height: a,
          fill: 'none',
          xmlns: 'http://www.w3.org/2000/svg',
          children: (0, l.jsx)('path', {
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            d:
              'M10.6 0h1v9h9v1h-1v1h-1v2h-1v1h-1v2h-1v2h-1v1h-1v2h-1v1h-1v1h-1v1h-1v-9h-9v-1h1v-1h1v-2h1v-1h1V8h1V6h1V5h1V3h1V2h1V1h1V0Zm20.8 4.8h-4.8v14.4h4.8v-4.8h4.8v4.8H41V4.8h-4.8v4.8h-4.8V4.8Zm21.6 6h4.8v3.6H53v4.8h-4.8V4.8h12v4.8H53v1.2Zm-6-6h-4.8v14.4H47V4.8Zm14.4 0h4.8v14.4h-4.8V4.8Zm10.8 0H71v14.4h8.4V18h-7.2V4.8Zm8.4 6h1.2V9.6H83V8.4h4.8v1.2H89V18h1.2v1.2h-2.4V18h-1.2v1.2h-4.8V18h-1.2V14.4h1.2v-1.2H85.4V12h2.4v-1.2h-1.2V9.6h-2.4v1.2H83V12h-2.4v-1.2Zm6 2.4v1.2H83v1.2h-1.2v1.2H83V18h2.4v-1.2h2.4V13.2h-1.2ZM95 18h2.4v-1.2h1.2v-1.2h1.2V12h-1.2v-1.2h-1.2V9.6H95v1.2h-2.4v6H95V18Zm-2.4 0v1.2h-1.2V4.8h1.2v4.8h1.2V8.4h4.8v1.2h1.2v1.2h1.2v6h-1.2V18h-1.2v1.2h-4.8V18h-1.2Zm9.6-2.4h1.2v1.2h1.2V18h2.4v-1.2h1.2v-1.2H107v-1.2H103.4v-1.2h-1.2V9.6h1.2V8.4h4.8v1.2h1.2V12h-1.2v-1.2H107V9.6h-2.4v1.2h-1.2V12h1.2v1.2H108.2v1.2h1.2V18h-1.2v1.2h-4.8V18h-1.2v-2.4Z',
            fill: '#000'
          })
        });
      };
    },
    21322: function(e, t, n) {
      n.d(t, {
        v: function() {
          return d;
        }
      });
      var l = n(7297),
        i = n(85893),
        a = n(67294),
        o = n(14141);

      function r() {
        var e = (0, l.Z)([
          '\n  z-index: 10;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  width: 100%;\n  height: ',
          'px;\n  border-top: 1px solid #000;\n  background: #fff;\n  overflow: hidden;\n'
        ]);
        return (
          (r = function() {
            return e;
          }),
          e
        );
      }

      function s() {
        var e = (0, l.Z)([
          '\n  display: flex;\n  background: #fff;\n  animation: scroll 30s linear infinite;\n\n  @keyframes scroll {\n    0% {\n      transform: translateX(0);\n    }\n\n    100% {\n      transform: translateX(-100%);\n    }\n  }\n'
        ]);
        return (
          (s = function() {
            return e;
          }),
          e
        );
      }

      function c() {
        var e = (0, l.Z)([
          '\n  --margin: 12px;\n  display: flex;\n  align-items: center;\n  margin: 5px var(--margin) 5px 0;\n  white-space: nowrap;\n  font-family: var(--font-title);\n  font-size: 13px;\n\n  img {\n    width: 16px;\n    margin-right: var(--margin);\n  }\n'
        ]);
        return (
          (c = function() {
            return e;
          }),
          e
        );
      }
      var d = 40,
        f = o.ZP.div.withConfig({ componentId: 'sc-6c3c94a3-0' })(r(), d),
        h = o.ZP.div.withConfig({ componentId: 'sc-6c3c94a3-1' })(s()),
        u = o.ZP.div.withConfig({ componentId: 'sc-6c3c94a3-2' })(c());
      t.Z = function(e) {
        var t = e.children;
        return (0, i.jsx)(f, {
          'aria-hidden': 'true',
          children: [0, 1].map(function(e, n) {
            return (0, i.jsx)(
              h,
              {
                children: a.Children.map(t, function(e) {
                  return (0, i.jsxs)(u, { children: [(0, i.jsx)('img', { src: './images/HIFILABS/icons/hifibolt.svg', alt: 'bolt' }), e] }, n);
                })
              },
              n
            );
          })
        });
      };
    },
    76222: function(e, t, n) {
      n.d(t, {
        Ie: function() {
          return h;
        },
        WQ: function() {
          return f;
        },
        aV: function() {
          return u;
        },
        im: function() {
          return d;
        }
      });
      var l = n(7297),
        i = n(14141),
        a = n(21322);

      function o() {
        var e = (0, l.Z)([
          '\n  display: flex;\n  flex-direction: column;\n\n  @media only screen and (min-width: 600px) {\n    flex-direction: row;\n  }\n'
        ]);
        return (
          (o = function() {
            return e;
          }),
          e
        );
      }

      function r() {
        var e = (0, l.Z)([
          '\n  z-index: 9;\n  background: #fff;\n  border-bottom: 1px solid #000;\n\n  @media only screen and (min-width: 600px) {\n    position: sticky;\n    top: 0;\n    width: 33%;\n    height: 100%;\n    border-bottom: 0;\n  }\n'
        ]);
        return (
          (r = function() {
            return e;
          }),
          e
        );
      }

      function s() {
        var e = (0, l.Z)([
          '\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  & > * {\n    text-align: center;\n    margin: 0;\n  }\n\n  @media only screen and (max-width: 699px) {\n    padding: 10px;\n    gap: 24px;\n    align-content: center;\n  }\n\n  @media only screen and (min-width: 700px) {\n    position: sticky;\n    top: 0;\n    gap: 32px;\n    width: unset;\n    height: 100%;\n    padding: 16px 24px;\n  }\n'
        ]);
        return (
          (s = function() {
            return e;
          }),
          e
        );
      }

      function c() {
        var e = (0, l.Z)([
          '\n  z-index: 8;\n  display: flex;\n  flex-direction: column;\n  padding: 16px 24px ',
          'px;\n  border-left: 1px solid #000;\n\n  @media only screen and (min-width: 600px) {\n    width: 67%;\n    padding-bottom: 60px;\n  }\n\n  @media only screen and (max-width: 899px) {\n    overflow-y: scroll;\n  }\n\n  @media only screen and (min-width: 900px) {\n    /* totally arbitrary lol dont be afraid to change */\n    min-height: calc(100vh - 45px - 70px);\n  }\n'
        ]);
        return (
          (c = function() {
            return e;
          }),
          e
        );
      }
      var d = i.ZP.div.withConfig({ componentId: 'sc-6883e17e-0' })(o()),
        f = i.ZP.div.withConfig({ componentId: 'sc-6883e17e-1' })(r()),
        h = i.ZP.div.withConfig({ componentId: 'sc-6883e17e-2' })(s()),
        u = i.ZP.div.withConfig({ componentId: 'sc-6883e17e-3' })(c(), 2 * a.v);
    },
    1799: function(e, t, n) {
      n.r(t),
        n.d(t, {
          default: function() {
            return B;
          }
        });
      var l = n(85893),
        i = n(67294),
        a = n(37278),
        o = n(7297),
        r = n(14141),
        s = n(12725);

      function c() {
        var e = (0, o.Z)([
          "\n  aspect-ratio: 12 / 5;\n  width: 100%;\n  max-width: calc(100vw - 32px * 2);\n  height: 35%;\n  min-height: 350px;\n  position: relative;\n  margin: 0 0 24px;\n  padding: 32px;\n  box-shadow: 2px 2px 0px #1c1c1e;\n  border: 1px solid #000;\n\n  --background-color: rgba(255, 255, 255);\n  --square-color: #e0e0e0;\n  --square-size: 1px;\n  background-color: var(--background-color);\n  background-image: linear-gradient(45deg, var(--square-color) 25%, transparent 25%),\n    linear-gradient(135deg, var(--square-color) 25%, transparent 25%),\n    linear-gradient(45deg, transparent 75%, var(--square-color) 75%),\n    linear-gradient(135deg, transparent 75%, var(--square-color) 75%);\n  background-size: calc(2 * var(--square-size)) calc(2 * var(--square-size));\n  background-position: 0 0, var(--square-size) 0, var(--square-size) calc(-1 * var(--square-size)),\n    0 calc(-1 * var(--square-size));\n\n  &:before,\n  &:after {\n    --margin: 32px;\n    content: ' ';\n    pointer-events: none;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: calc(100% - var(--margin) * 2);\n    height: calc(100% - var(--margin) * 2);\n    border-width: var(--margin);\n    mix-blend-mode: color-burn;\n  }\n\n  &:before {\n    border-style: outset;\n    border-color: #fff;\n    transform: scale(-1, 1);\n  }\n\n  &:after {\n    border-style: outset;\n    border-color: #b8b8b8;\n  }\n"
        ]);
        return (
          (c = function() {
            return e;
          }),
          e
        );
      }

      function d() {
        var e = (0, o.Z)([
          '\n  z-index: 10;\n  position: absolute;\n  top: 5px;\n  left: 44px;\n  margin: 0;\n  font-size: 13px;\n  line-height: 24px;\n'
        ]);
        return (
          (d = function() {
            return e;
          }),
          e
        );
      }

      function f() {
        var e = (0, o.Z)([
          '\n  --margin: 32px;\n  position: absolute;\n  top: var(--margin);\n  left: var(--margin);\n  width: calc(100% - var(--margin) * 2);\n  height: calc(100% - var(--margin) * 2);\n  border: 1px solid #000;\n  overflow: hidden;\n'
        ]);
        return (
          (f = function() {
            return e;
          }),
          e
        );
      }
      var h = r.ZP.div.withConfig({ componentId: 'sc-c5ead0fc-0' })(c()),
        u = r.ZP.h2.withConfig({ componentId: 'sc-c5ead0fc-1' })(d()),
        p = r.ZP.div.withConfig({ componentId: 'sc-c5ead0fc-2' })(f()),
        x = function(e) {
          var t,
            n,
            i = e.employee,
            a = e.index,
            o = i.Name.title[0].plain_text,
            r = null === (n = null === (t = i['Image On Website']) || void 0 === t ? void 0 : t.files[0]) || void 0 === n ? void 0 : n.name;
          return (0, l.jsxs)(h, {
            children: [
              (0, l.jsx)(u, { children: o }),
              (0, l.jsx)(p, { children: (0, l.jsx)(s.Z, { src: r, alt: o, priority: a < 3, width: '450px', height: '350px', objectFit: 'cover' }) })
            ]
          });
        },
        b = n(12242),
        m = n(83670),
        y = n(46789),
        _ = n(76222),
        g = n(92783),
        k = function(e) {
          var t = e.employees
            .map(function(e) {
              return { sort: Math.random(), value: e };
            })
            .sort(function(e, t) {
              return e.sort - t.sort;
            })
            .map(function(e) {
              return e.value;
            });
          return (0, l.jsx)(i.Suspense, {
            fallback: (0, l.jsx)('div', { children: 'Loading...' }),
            children: (0, l.jsxs)(_.im, {
              children: [
                (0, l.jsx)(_.WQ, {
                  children: (0, l.jsxs)(_.Ie, {
                    children: [
                      (0, l.jsx)(m.Z, {}),
                      (0, l.jsx)('h2', { children: 'About Us' }),
                      (0, l.jsx)('p', { children: g.sl['AboutUs.Description'] }),
                      (0, l.jsx)(y.C, { urls: g.GT }),
                      g.sl['AboutUs.ButtonHref'] &&
                        (0, l.jsx)(b.Z, { variant: 'dark', externalHref: g.sl['AboutUs.ButtonHref'], children: g.sl['AboutUs.ButtonLabel'] })
                    ]
                  })
                }),
                (0, l.jsx)(_.aV, {
                  children: t.map(function(e, t) {
                    var n,
                      i,
                      a = e['Show On Website'].checkbox,
                      o = null === (i = null === (n = e['Image On Website']) || void 0 === n ? void 0 : n.files[0]) || void 0 === i ? void 0 : i.name;
                    return a && o && (0, l.jsx)(x, { employee: e, index: t }, t);
                  })
                })
              ]
            })
          });
        },
        v = n(21322),
        w = n(2962),
        C = JSON.parse(
          '[{"id":"dc1b7d05-65b6-4e6e-b2e1-1d9ec01db06d","Show On Website":{"id":"AY%3C%5C","type":"checkbox","checkbox":true},"Phone":{"id":"G%5Bp%7B","type":"phone_number","phone_number":null},"Reports":{"id":"IhQr","type":"relation","relation":[],"has_more":false},"Birthday":{"id":"Qi%3DJ","type":"rich_text","rich_text":[{"type":"text","text":{"content":"September 20","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"September 20","href":null}]},"Job Title":{"id":"Y%60QF","type":"rich_text","rich_text":[{"type":"text","text":{"content":"Research & Socials Intern","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Research & Socials Intern","href":null}]},"Part-Time / Full-Time":{"id":"%5Cdfh","type":"select","select":{"id":"q\\\\XZ","name":"Part-Time","color":"yellow"}},"Location":{"id":"btl%3B","type":"rich_text","rich_text":[{"type":"text","text":{"content":"Los Angeles","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Los Angeles","href":null}]},"Email":{"id":"u%3ACH","type":"email","email":"taylor@hifilabs.co"},"Image On Website":{"id":"uS%7DP","type":"files","files":[]},"Reports To":{"id":"wgTD","type":"relation","relation":[{"object":"page","id":"df749cb5-2d8d-4395-92ce-39a4729ceae1","created_time":"2022-05-31T09:57:00.000Z","last_edited_time":"2024-04-22T17:53:00.000Z","created_by":{"object":"user","id":"113abb26-7f63-41d6-b5a6-e07b947bf841"},"last_edited_by":{"object":"user","id":"8f186db3-d228-4ae5-8250-44a3f5c3b09f"},"cover":{"type":"external","external":{"url":"https://eq.house/assets/media/crystal.jpeg"}},"icon":null,"parent":{"type":"database_id","database_id":"acdff8f5-c157-4c87-9fc7-870378ca7aaf"},"archived":false,"in_trash":false,"properties":{"Show On Website":{"id":"AY%3C%5C","type":"checkbox","checkbox":true},"Phone":{"id":"G%5Bp%7B","type":"phone_number","phone_number":"727-437-9090"},"Reports":{"id":"IhQr","type":"relation","relation":[{"id":"dc1b7d05-65b6-4e6e-b2e1-1d9ec01db06d"}],"has_more":false},"Birthday":{"id":"Qi%3DJ","type":"rich_text","rich_text":[{"type":"text","text":{"content":"June 3","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"June 3","href":null}]},"Job Title":{"id":"Y%60QF","type":"rich_text","rich_text":[{"type":"text","text":{"content":"Chief of Staff","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Chief of Staff","href":null}]},"Part-Time / Full-Time":{"id":"%5Cdfh","type":"select","select":{"id":"o:dl","name":"Full-Time","color":"green"}},"Location":{"id":"btl%3B","type":"rich_text","rich_text":[{"type":"text","text":{"content":"New York","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"New York","href":null}]},"Email":{"id":"u%3ACH","type":"email","email":"crystal@hifilabs.co"},"Image On Website":{"id":"uS%7DP","type":"files","files":[{"name":"https://cdn.hifilabs.co/2e237945-4252-4702-bf59-ceb4a87a0f00","type":"external","external":{"url":"https://cdn.hifilabs.co/2e237945-4252-4702-bf59-ceb4a87a0f00"}}]},"Reports To":{"id":"wgTD","type":"relation","relation":[],"has_more":false},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"Crystal Desai ","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Crystal Desai ","href":null}]}},"url":"https://www.notion.so/Crystal-Desai-df749cb52d8d439592ce39a4729ceae1","public_url":null,"request_id":"9e229f3e-d442-488f-82f2-07745e4fecaf"}],"has_more":false},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"Taylor Araki","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Taylor Araki","href":null}]}},{"id":"6b12904a-90b3-48f8-ad19-4ef11166080e","Show On Website":{"id":"AY%3C%5C","type":"checkbox","checkbox":true},"Phone":{"id":"G%5Bp%7B","type":"phone_number","phone_number":null},"Reports":{"id":"IhQr","type":"relation","relation":[],"has_more":false},"Birthday":{"id":"Qi%3DJ","type":"rich_text","rich_text":[{"type":"text","text":{"content":"29-12-1983","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"29-12-1983","href":null}]},"Job Title":{"id":"Y%60QF","type":"rich_text","rich_text":[{"type":"text","text":{"content":"Creative frontend developer","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Creative frontend developer","href":null}]},"Part-Time / Full-Time":{"id":"%5Cdfh","type":"select","select":{"id":"o:dl","name":"Full-Time","color":"green"}},"Location":{"id":"btl%3B","type":"rich_text","rich_text":[{"type":"text","text":{"content":"Birmingham, UK","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Birmingham, UK","href":null}]},"Email":{"id":"u%3ACH","type":"email","email":"lowen@hifilabs.co"},"Image On Website":{"id":"uS%7DP","type":"files","files":[{"name":"https://cdn.hifilabs.co/83ff058e-1bd5-4d24-5220-2ac572d3e100","type":"external","external":{"url":"https://cdn.hifilabs.co/83ff058e-1bd5-4d24-5220-2ac572d3e100"}}]},"Reports To":{"id":"wgTD","type":"relation","relation":[],"has_more":false},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"Rou Hun Fan","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Rou Hun Fan","href":null}]}},{"id":"797d6851-f861-4470-a9e3-d2cb27426ffa","Show On Website":{"id":"AY%3C%5C","type":"checkbox","checkbox":true},"Phone":{"id":"G%5Bp%7B","type":"phone_number","phone_number":"415-726-7607"},"Reports":{"id":"IhQr","type":"relation","relation":[],"has_more":false},"Birthday":{"id":"Qi%3DJ","type":"rich_text","rich_text":[{"type":"text","text":{"content":"November 12","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"November 12","href":null}]},"Job Title":{"id":"Y%60QF","type":"rich_text","rich_text":[{"type":"text","text":{"content":"Artist Relations / Project Manager","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Artist Relations / Project Manager","href":null}]},"Part-Time / Full-Time":{"id":"%5Cdfh","type":"select","select":{"id":"o:dl","name":"Full-Time","color":"green"}},"Location":{"id":"btl%3B","type":"rich_text","rich_text":[{"type":"text","text":{"content":"San Francisco","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"San Francisco","href":null}]},"Email":{"id":"u%3ACH","type":"email","email":"jade@hifilabs.co"},"Image On Website":{"id":"uS%7DP","type":"files","files":[{"name":"https://cdn.hifilabs.co/4ee82952-476d-4d06-6d10-43b07865a700","type":"external","external":{"url":"https://cdn.hifilabs.co/4ee82952-476d-4d06-6d10-43b07865a700"}}]},"Reports To":{"id":"wgTD","type":"relation","relation":[],"has_more":false},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"Jade Garcia","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Jade Garcia","href":null}]}},{"id":"3e5e2a96-5ebb-498e-8b67-012b0aa292a2","Show On Website":{"id":"AY%3C%5C","type":"checkbox","checkbox":true},"Phone":{"id":"G%5Bp%7B","type":"phone_number","phone_number":"916-919-6393"},"Reports":{"id":"IhQr","type":"relation","relation":[],"has_more":false},"Birthday":{"id":"Qi%3DJ","type":"rich_text","rich_text":[{"type":"text","text":{"content":"July 22","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"July 22","href":null}]},"Job Title":{"id":"Y%60QF","type":"rich_text","rich_text":[{"type":"text","text":{"content":"Head of A&R ","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Head of A&R ","href":null}]},"Part-Time / Full-Time":{"id":"%5Cdfh","type":"select","select":{"id":"o:dl","name":"Full-Time","color":"green"}},"Location":{"id":"btl%3B","type":"rich_text","rich_text":[{"type":"text","text":{"content":"San Francisco","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"San Francisco","href":null}]},"Email":{"id":"u%3ACH","type":"email","email":"caleb@hifilabs.co"},"Image On Website":{"id":"uS%7DP","type":"files","files":[{"name":"https://cdn.hifilabs.co/4b62a778-aea7-4cec-fe5a-d0d9a9524300","type":"external","external":{"url":"https://cdn.hifilabs.co/4b62a778-aea7-4cec-fe5a-d0d9a9524300"}}]},"Reports To":{"id":"wgTD","type":"relation","relation":[],"has_more":false},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"Caleb Morairty","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Caleb Morairty","href":null}]}},{"id":"4e471747-7b2f-40b1-a860-d87f56f17fbc","Show On Website":{"id":"AY%3C%5C","type":"checkbox","checkbox":true},"Phone":{"id":"G%5Bp%7B","type":"phone_number","phone_number":"559-213-8819"},"Reports":{"id":"IhQr","type":"relation","relation":[],"has_more":false},"Birthday":{"id":"Qi%3DJ","type":"rich_text","rich_text":[{"type":"text","text":{"content":"January 24","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"January 24","href":null}]},"Job Title":{"id":"Y%60QF","type":"rich_text","rich_text":[{"type":"text","text":{"content":"Design","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Design","href":null}]},"Part-Time / Full-Time":{"id":"%5Cdfh","type":"select","select":{"id":"o:dl","name":"Full-Time","color":"green"}},"Location":{"id":"btl%3B","type":"rich_text","rich_text":[{"type":"text","text":{"content":"Portland","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Portland","href":null}]},"Email":{"id":"u%3ACH","type":"email","email":"aaron@hifilabs.co"},"Image On Website":{"id":"uS%7DP","type":"files","files":[{"name":"https://cdn.hifilabs.co/9f9e6642-6916-403c-c9ca-2126de3b9300","type":"external","external":{"url":"https://cdn.hifilabs.co/9f9e6642-6916-403c-c9ca-2126de3b9300"}}]},"Reports To":{"id":"wgTD","type":"relation","relation":[],"has_more":false},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"Aaron Akbari-Mort","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Aaron Akbari-Mort","href":null}]}},{"id":"67bd4e4e-228a-46e1-acb1-1705139a2045","Show On Website":{"id":"AY%3C%5C","type":"checkbox","checkbox":true},"Phone":{"id":"G%5Bp%7B","type":"phone_number","phone_number":"207-322-4655"},"Reports":{"id":"IhQr","type":"relation","relation":[],"has_more":false},"Birthday":{"id":"Qi%3DJ","type":"rich_text","rich_text":[{"type":"text","text":{"content":"February 19","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"February 19","href":null}]},"Job Title":{"id":"Y%60QF","type":"rich_text","rich_text":[{"type":"text","text":{"content":"Head of web3, Artist Teams","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Head of web3, Artist Teams","href":null}]},"Part-Time / Full-Time":{"id":"%5Cdfh","type":"select","select":{"id":"o:dl","name":"Full-Time","color":"green"}},"Location":{"id":"btl%3B","type":"rich_text","rich_text":[{"type":"text","text":{"content":"San Francisco","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"San Francisco","href":null}]},"Email":{"id":"u%3ACH","type":"email","email":"henry@hifilabs.co"},"Image On Website":{"id":"uS%7DP","type":"files","files":[{"name":"https://cdn.hifilabs.co/e6096bfc-42d4-4370-e00d-c9673c03d900","type":"external","external":{"url":"https://cdn.hifilabs.co/e6096bfc-42d4-4370-e00d-c9673c03d900"}}]},"Reports To":{"id":"wgTD","type":"relation","relation":[],"has_more":false},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"Henry Chatfield","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Henry Chatfield","href":null}]}},{"id":"9343b1c0-1b13-4839-bb6e-3d39ec4ce515","Show On Website":{"id":"AY%3C%5C","type":"checkbox","checkbox":true},"Phone":{"id":"G%5Bp%7B","type":"phone_number","phone_number":"415-602-7060"},"Reports":{"id":"IhQr","type":"relation","relation":[],"has_more":false},"Birthday":{"id":"Qi%3DJ","type":"rich_text","rich_text":[]},"Job Title":{"id":"Y%60QF","type":"rich_text","rich_text":[{"type":"text","text":{"content":"Co-founder / Board","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Co-founder / Board","href":null}]},"Part-Time / Full-Time":{"id":"%5Cdfh","type":"select","select":{"id":"q\\\\XZ","name":"Part-Time","color":"yellow"}},"Location":{"id":"btl%3B","type":"rich_text","rich_text":[{"type":"text","text":{"content":"San Francisco","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"San Francisco","href":null}]},"Email":{"id":"u%3ACH","type":"email","email":"mike@structure.vc "},"Image On Website":{"id":"uS%7DP","type":"files","files":[{"name":"https://cdn.hifilabs.co/157209d0-f0ae-4752-ac8e-040824d68700","type":"external","external":{"url":"https://cdn.hifilabs.co/157209d0-f0ae-4752-ac8e-040824d68700"}}]},"Reports To":{"id":"wgTD","type":"relation","relation":[],"has_more":false},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"Mike Walsh","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Mike Walsh","href":null}]}},{"id":"a15a73bc-1557-4ac7-b882-93b8f17aabc4","Show On Website":{"id":"AY%3C%5C","type":"checkbox","checkbox":true},"Phone":{"id":"G%5Bp%7B","type":"phone_number","phone_number":"310-503-7302"},"Reports":{"id":"IhQr","type":"relation","relation":[],"has_more":false},"Birthday":{"id":"Qi%3DJ","type":"rich_text","rich_text":[{"type":"text","text":{"content":"December 27","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"December 27","href":null}]},"Job Title":{"id":"Y%60QF","type":"rich_text","rich_text":[{"type":"text","text":{"content":"Co-founder / Head of Broadcast","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Co-founder / Head of Broadcast","href":null}]},"Part-Time / Full-Time":{"id":"%5Cdfh","type":"select","select":{"id":"q\\\\XZ","name":"Part-Time","color":"yellow"}},"Location":{"id":"btl%3B","type":"rich_text","rich_text":[{"type":"text","text":{"content":"Los Angeles","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Los Angeles","href":null}]},"Email":{"id":"u%3ACH","type":"email","email":"clayton@hifilabs.co"},"Image On Website":{"id":"uS%7DP","type":"files","files":[]},"Reports To":{"id":"wgTD","type":"relation","relation":[],"has_more":false},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"Clayton Janes","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Clayton Janes","href":null}]}},{"id":"dee03ce4-24aa-499c-a07b-6b28a0afbab1","Show On Website":{"id":"AY%3C%5C","type":"checkbox","checkbox":true},"Phone":{"id":"G%5Bp%7B","type":"phone_number","phone_number":null},"Reports":{"id":"IhQr","type":"relation","relation":[],"has_more":false},"Birthday":{"id":"Qi%3DJ","type":"rich_text","rich_text":[{"type":"text","text":{"content":"July 28","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"July 28","href":null}]},"Job Title":{"id":"Y%60QF","type":"rich_text","rich_text":[{"type":"text","text":{"content":"Head of Engineering ","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Head of Engineering ","href":null}]},"Part-Time / Full-Time":{"id":"%5Cdfh","type":"select","select":{"id":"o:dl","name":"Full-Time","color":"green"}},"Location":{"id":"btl%3B","type":"rich_text","rich_text":[{"type":"text","text":{"content":"Sweden","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Sweden","href":null}]},"Email":{"id":"u%3ACH","type":"email","email":"pierre@hifilabs.co"},"Image On Website":{"id":"uS%7DP","type":"files","files":[{"name":"https://cdn.hifilabs.co/08845e7b-79c4-4e0f-c102-0f9ce6cd1000","type":"external","external":{"url":"https://cdn.hifilabs.co/08845e7b-79c4-4e0f-c102-0f9ce6cd1000"}}]},"Reports To":{"id":"wgTD","type":"relation","relation":[],"has_more":false},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"Pierre Reimertz","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Pierre Reimertz","href":null}]}},{"id":"df749cb5-2d8d-4395-92ce-39a4729ceae1","Show On Website":{"id":"AY%3C%5C","type":"checkbox","checkbox":true},"Phone":{"id":"G%5Bp%7B","type":"phone_number","phone_number":"727-437-9090"},"Reports":{"id":"IhQr","type":"relation","relation":[{"object":"page","id":"dc1b7d05-65b6-4e6e-b2e1-1d9ec01db06d","created_time":"2024-04-22T17:54:00.000Z","last_edited_time":"2024-04-22T19:15:00.000Z","created_by":{"object":"user","id":"8f186db3-d228-4ae5-8250-44a3f5c3b09f"},"last_edited_by":{"object":"user","id":"8f186db3-d228-4ae5-8250-44a3f5c3b09f"},"cover":null,"icon":null,"parent":{"type":"database_id","database_id":"acdff8f5-c157-4c87-9fc7-870378ca7aaf"},"archived":false,"in_trash":false,"properties":{"Show On Website":{"id":"AY%3C%5C","type":"checkbox","checkbox":true},"Phone":{"id":"G%5Bp%7B","type":"phone_number","phone_number":null},"Reports":{"id":"IhQr","type":"relation","relation":[],"has_more":false},"Birthday":{"id":"Qi%3DJ","type":"rich_text","rich_text":[{"type":"text","text":{"content":"September 20","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"September 20","href":null}]},"Job Title":{"id":"Y%60QF","type":"rich_text","rich_text":[{"type":"text","text":{"content":"Research & Socials Intern","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Research & Socials Intern","href":null}]},"Part-Time / Full-Time":{"id":"%5Cdfh","type":"select","select":{"id":"q\\\\XZ","name":"Part-Time","color":"yellow"}},"Location":{"id":"btl%3B","type":"rich_text","rich_text":[{"type":"text","text":{"content":"Los Angeles","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Los Angeles","href":null}]},"Email":{"id":"u%3ACH","type":"email","email":"taylor@hifilabs.co"},"Image On Website":{"id":"uS%7DP","type":"files","files":[]},"Reports To":{"id":"wgTD","type":"relation","relation":[{"id":"df749cb5-2d8d-4395-92ce-39a4729ceae1"}],"has_more":false},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"Taylor Araki","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Taylor Araki","href":null}]}},"url":"https://www.notion.so/Taylor-Araki-dc1b7d0565b64e6eb2e11d9ec01db06d","public_url":null,"request_id":"87cf2355-7902-4743-a30d-d4a8ecfa35f3"}],"has_more":false},"Birthday":{"id":"Qi%3DJ","type":"rich_text","rich_text":[{"type":"text","text":{"content":"June 3","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"June 3","href":null}]},"Job Title":{"id":"Y%60QF","type":"rich_text","rich_text":[{"type":"text","text":{"content":"Chief of Staff","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Chief of Staff","href":null}]},"Part-Time / Full-Time":{"id":"%5Cdfh","type":"select","select":{"id":"o:dl","name":"Full-Time","color":"green"}},"Location":{"id":"btl%3B","type":"rich_text","rich_text":[{"type":"text","text":{"content":"New York","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"New York","href":null}]},"Email":{"id":"u%3ACH","type":"email","email":"crystal@hifilabs.co"},"Image On Website":{"id":"uS%7DP","type":"files","files":[{"name":"https://cdn.hifilabs.co/2e237945-4252-4702-bf59-ceb4a87a0f00","type":"external","external":{"url":"https://cdn.hifilabs.co/2e237945-4252-4702-bf59-ceb4a87a0f00"}}]},"Reports To":{"id":"wgTD","type":"relation","relation":[],"has_more":false},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"Crystal Desai ","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Crystal Desai ","href":null}]}},{"id":"ff02f4de-a8a5-4b33-b01c-46ef4edd1ca8","Show On Website":{"id":"AY%3C%5C","type":"checkbox","checkbox":true},"Phone":{"id":"G%5Bp%7B","type":"phone_number","phone_number":"415-308-8082"},"Reports":{"id":"IhQr","type":"relation","relation":[],"has_more":false},"Birthday":{"id":"Qi%3DJ","type":"rich_text","rich_text":[{"type":"text","text":{"content":"July 29","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"July 29","href":null}]},"Job Title":{"id":"Y%60QF","type":"rich_text","rich_text":[{"type":"text","text":{"content":"Co-founder / CEO","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Co-founder / CEO","href":null}]},"Part-Time / Full-Time":{"id":"%5Cdfh","type":"select","select":{"id":"o:dl","name":"Full-Time","color":"green"}},"Location":{"id":"btl%3B","type":"rich_text","rich_text":[{"type":"text","text":{"content":"San Francisco","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"San Francisco","href":null}]},"Email":{"id":"u%3ACH","type":"email","email":"joe@hifilabs.co"},"Image On Website":{"id":"uS%7DP","type":"files","files":[{"name":"https://cdn.hifilabs.co/33028b64-6f8e-41d7-467a-592f2396f000","type":"external","external":{"url":"https://cdn.hifilabs.co/33028b64-6f8e-41d7-467a-592f2396f000"}}]},"Reports To":{"id":"wgTD","type":"relation","relation":[],"has_more":false},"Name":{"id":"title","type":"title","title":[{"type":"text","text":{"content":"Joe Barham","link":null},"annotations":{"bold":false,"italic":false,"strikethrough":false,"underline":false,"code":false,"color":"default"},"plain_text":"Joe Barham","href":null}]}}]'
        ),
        T = function() {
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)(w.PB, {
                title: 'About us',
                description:
                  "HIFI Labs is a creative incubator and artist mentorship collective building an artist-owned, community-powered future for musicians. Fueled by web3 technology and industry-changing innovation, HIFI Labs' mission is to achieve a more equitable and sustainable music economy."
              }),
              (0, l.jsxs)(a.Z, {
                title: 'About Us',
                windowId: 'about',
                width: 845,
                height: 585,
                children: [(0, l.jsx)(k, { employees: C }), (0, l.jsx)(v.Z, { children: (0, g.xu)(g.sl['AboutUs.Marquee']) })]
              })
            ]
          });
        },
        B = (0, i.memo)(T);
    }
  }
]);
