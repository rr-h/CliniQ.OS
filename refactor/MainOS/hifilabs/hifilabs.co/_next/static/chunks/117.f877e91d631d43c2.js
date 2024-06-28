'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [117],
  {
    71117: function(e, n, t) {
      t.r(n);
      var r = t(7297),
        a = t(85893),
        o = t(67294);
      function u() {
        var e = (0, r.Z)([
          '\n  font-family: var(--font-body);\n  font-size: 24px;\n\n  @media only screen and (max-width: 600px) {\n    display: none;\n  }\n'
        ]);
        return (
          (u = function() {
            return e;
          }),
          e
        );
      }
      var c = t(14141).ZP.div.withConfig({ componentId: 'sc-c7ac2932-0' })(u());
      n.default = function() {
        var e = new Date().toLocaleDateString('en-us', { weekday: 'short', month: 'short', day: 'numeric' }),
          n = new Date().toLocaleTimeString('en-us', { hour24: !0, hour: 'numeric', minute: 'numeric' }),
          t = (0, o.useState)(e),
          r = t[0],
          u = t[1],
          i = (0, o.useState)(n),
          s = i[0],
          f = i[1],
          h = (0, o.useState)(1e3 * (60 - new Date().getSeconds())),
          l = h[0],
          m = h[1];
        return (
          (0, o.useEffect)(
            function() {
              var e = setInterval(function() {
                u(new Date().toLocaleDateString('en-us', { weekday: 'short', month: 'short', day: 'numeric' })),
                  f(new Date().toLocaleTimeString('en-us', { hour24: !0, hour: 'numeric', minute: 'numeric' })),
                  6e4 !== l && (clearInterval(e), m(6e4));
              }, l);
              return function() {
                return clearInterval(e);
              };
            },
            [l]
          ),
          (0, a.jsxs)(c, { className: '.no-hover', children: [r, '\xa0\xa0\xa0', s] })
        );
      };
    }
  }
]);
