(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [803],
  {
    16149: function(e, t, r) {
      'use strict';
      r.d(t, {
        a: function() {
          return q;
        }
      });
      const o = e => t => `${e}/address/${t}`,
        n = e => t => `${e}/tx/${t}`,
        i = { name: 'Avalanche', symbol: 'AVAX', decimals: 18 },
        a = 'https://snowtrace.io',
        s = (o(a), n(a), 'https://testnet.snowtrace.io');
      o(s), n(s);
      const c = 'https://testnet.arbiscan.io',
        l = (o(c), n(c), 'https://goerli-rollup-explorer.arbitrum.io'),
        u = (o(l), n(l), 'https://arbiscan.io');
      o(u), n(u);
      const p = 'https://aurorascan.dev',
        d = (o(p), n(p), 'https://testnet.aurorascan.dev');
      o(d), n(d);
      const f = 'https://etherscan.io',
        g = 'https://ropsten.etherscan.io',
        m = 'https://rinkeby.etherscan.io',
        b = 'https://goerli.etherscan.io',
        h = 'https://kovan.etherscan.io',
        y = 'https://sepolia.etherscan.io';
      o(f), n(f), o(g), n(g), o(m), n(m), o(b), n(b), o(h), n(h), o(y), n(y);
      const v = 'https://bscscan.com',
        S = (o(v), n(v), 'https://testnet.bscscan.com');
      o(S), n(S);
      const w = 'https://cronoscan.com',
        R = (o(w), n(w), 'https://testnet.cronoscan.com');
      o(R), n(R);
      const O = 'https://ftmscan.com',
        x = (o(O), n(O), 'https://testnet.ftmscan.com');
      o(x), n(x);
      const T = 'https://blockscout.com/poa/xdai',
        j = {
          chainId: 100,
          chainName: 'xDai',
          isTestChain: !1,
          isLocalChain: !1,
          rpcUrl: 'https://rpc.gnosischain.com',
          multicallAddress: '0xb5b692a88bdfc81ca69dcb1d924f59f0413a602a',
          nativeCurrency: { name: 'xDAI', symbol: 'xDAI', decimals: 18 },
          blockExplorerUrl: T,
          getExplorerAddressLink: o(T),
          getExplorerTransactionLink: n(T)
        };
      Object.assign(Object.assign({}, j), { chainName: 'Gnosis' });
      const P = 'https://blockscout.com/poa/xdai';
      o(P), n(P);
      const k = 'https://stardust-explorer.metis.io',
        A = (o(k), n(k), 'https://andromeda-explorer.metis.io');
      o(A), n(A);
      const C = 'https://moonriver.moonscan.io',
        z = (o(C), n(C), 'https://moonbase.moonscan.io');
      o(z), n(z);
      const B = 'https://moonscan.io';
      o(B), n(B);
      const W = 'https://explorer.palm.io',
        E = (o(W), n(W), 'https://explorer.palm-uat.xyz');
      o(E), n(E);
      const L = 'https://polygonscan.com',
        I = (o(L), n(L), 'https://mumbai.polygonscan.com');
      o(I), n(I);
      const D = 'https://explorer.emerald.oasis.dev',
        G = (o(D), n(D), 'https://testnet.explorer.emerald.oasis.dev'),
        F = (o(G), n(G), 'https://explorer.sapphire.oasis.dev');
      o(F), n(F);
      const _ = 'https://songbird-explorer.flare.network',
        H = (o(_), n(_), 'https://explorer.thetatoken.org'),
        M = (o(H), n(H), 'https://testnet-explorer.thetatoken.org');
      o(M), n(M);
      const X = 'https://viewblock.io/thundercore',
        N = (o(X), n(X), 'https://explorer-testnet.thundercore.com');
      o(N), n(N);
      const $ = 'https://kovan-optimistic.etherscan.io',
        Y = (o($), n($), 'https://goerli-optimism.etherscan.io/'),
        K = (o(Y), n(Y), 'https://optimistic.etherscan.io');
      o(K), n(K);
      const Z = 'https://evmexplorer.velas.com',
        U = (o(Z), n(Z), 'https://evmexplorer.testnet.velas.com');
      o(U), n(U);
      const V = 'https://zksync2-testnet.zkscan.io',
        J = (o(V), n(V), 'https://testnet.redditspace.com');
      o(J), n(J);
      var q;
      !(function(e) {
        (e[(e.Mainnet = 1)] = 'Mainnet'),
          (e[(e.Ropsten = 3)] = 'Ropsten'),
          (e[(e.Rinkeby = 4)] = 'Rinkeby'),
          (e[(e.Goerli = 5)] = 'Goerli'),
          (e[(e.Sepolia = 11155111)] = 'Sepolia'),
          (e[(e.ThunderCoreTestnet = 18)] = 'ThunderCoreTestnet'),
          (e[(e.Cronos = 25)] = 'Cronos'),
          (e[(e.CronosTestnet = 338)] = 'CronosTestnet'),
          (e[(e.Kovan = 42)] = 'Kovan'),
          (e[(e.BSC = 56)] = 'BSC'),
          (e[(e.BSCTestnet = 97)] = 'BSCTestnet'),
          (e[(e.xDai = 100)] = 'xDai'),
          (e[(e.Gnosis = 100)] = 'Gnosis'),
          (e[(e.ThunderCore = 108)] = 'ThunderCore'),
          (e[(e.Polygon = 137)] = 'Polygon'),
          (e[(e.Theta = 361)] = 'Theta'),
          (e[(e.ThetaTestnet = 365)] = 'ThetaTestnet'),
          (e[(e.Moonriver = 1285)] = 'Moonriver'),
          (e[(e.Moonbeam = 1284)] = 'Moonbeam'),
          (e[(e.Mumbai = 80001)] = 'Mumbai'),
          (e[(e.Harmony = 16666e5)] = 'Harmony'),
          (e[(e.Palm = 11297108109)] = 'Palm'),
          (e[(e.PalmTestnet = 11297108099)] = 'PalmTestnet'),
          (e[(e.Localhost = 1337)] = 'Localhost'),
          (e[(e.Hardhat = 31337)] = 'Hardhat'),
          (e[(e.Fantom = 250)] = 'Fantom'),
          (e[(e.FantomTestnet = 4002)] = 'FantomTestnet'),
          (e[(e.Avalanche = 43114)] = 'Avalanche'),
          (e[(e.AvalancheTestnet = 43113)] = 'AvalancheTestnet'),
          (e[(e.Songbird = 19)] = 'Songbird'),
          (e[(e.MoonbaseAlpha = 1287)] = 'MoonbaseAlpha'),
          (e[(e.OasisEmerald = 42262)] = 'OasisEmerald'),
          (e[(e.OasisEmeraldTestnet = 42261)] = 'OasisEmeraldTestnet'),
          (e[(e.Stardust = 588)] = 'Stardust'),
          (e[(e.Andromeda = 1088)] = 'Andromeda'),
          (e[(e.OptimismGoerli = 420)] = 'OptimismGoerli'),
          (e[(e.OptimismKovan = 69)] = 'OptimismKovan'),
          (e[(e.Optimism = 10)] = 'Optimism'),
          (e[(e.Arbitrum = 42161)] = 'Arbitrum'),
          (e[(e.ArbitrumRinkeby = 421611)] = 'ArbitrumRinkeby'),
          (e[(e.ArbitrumGoerli = 421613)] = 'ArbitrumGoerli'),
          (e[(e.Aurora = 1313161554)] = 'Aurora'),
          (e[(e.AuroraTestnet = 1313161555)] = 'AuroraTestnet'),
          (e[(e.Velas = 106)] = 'Velas'),
          (e[(e.VelasTestnet = 111)] = 'VelasTestnet'),
          (e[(e.ZkSyncTestnet = 280)] = 'ZkSyncTestnet'),
          (e[(e.ArbitrumRedditTestnet = 5391184)] = 'ArbitrumRedditTestnet');
      })(q || (q = {}));
    },
    96086: function(e) {
      'use strict';
      var t = Object.assign.bind(Object);
      (e.exports = t), (e.exports.default = e.exports);
    },
    11163: function(e, t, r) {
      e.exports = r(90387);
    },
    10324: function(e, t, r) {
      'use strict';
      r.d(t, {
        y: function() {
          return i;
        }
      });
      var o = r(67294),
        n = r(20745);
      function i(e, t, r) {
        const i = { count: 0 },
          a = e => {
            const r = (0, o.useRef)(i.count);
            return (
              (0, o.useEffect)(() => {
                (r.current += 1), r.current === i.count + 1 && ((r.current -= 1), t.setState(e));
              }),
              null
            );
          };
        if (((a.displayName = `((${e})) devtool`), 'undefined' == typeof document)) return;
        if (!r) {
          let t = document.getElementById(`simple-zustand-devtools-${e}`);
          t || ((t = document.createElement('div')), (t.id = `simple-zustand-devtools-${e}`)), document.body.appendChild(t), (r = t);
        }
        const s = (0, n.createRoot)(r),
          c = e => {
            e && (s.render(o.createElement(a, Object.assign({}, e))), (i.count += 1));
          };
        c(t.getState()), t.subscribe(c);
      }
    },
    57247: function(e, t, r) {
      'use strict';
      r.d(t, {
        $_: function() {
          return h;
        },
        Dh: function() {
          return W;
        },
        bU: function() {
          return N;
        }
      });
      var o = r(96086),
        n = r.n(o),
        i = function(e, t) {
          var r = n()({}, e, t);
          for (var o in e) {
            var i;
            e[o] && 'object' === typeof t[o] && n()(r, (((i = {})[o] = n()(e[o], t[o])), i));
          }
          return r;
        },
        a = {
          breakpoints: [40, 52, 64].map(function(e) {
            return e + 'em';
          })
        },
        s = function(e) {
          return '@media screen and (min-width: ' + e + ')';
        },
        c = function(e, t) {
          return l(t, e, e);
        },
        l = function(e, t, r, o, n) {
          for (t = t && t.split ? t.split('.') : [t], o = 0; o < t.length; o++) e = e ? e[t[o]] : n;
          return e === n ? r : e;
        },
        u = function e(t) {
          var r = {},
            o = function(e) {
              var o = {},
                c = !1,
                u = e.theme && e.theme.disableStyledSystemCache;
              for (var f in e)
                if (t[f]) {
                  var g = t[f],
                    m = e[f],
                    b = l(e.theme, g.scale, g.defaults);
                  if ('object' !== typeof m) n()(o, g(m, b, e));
                  else {
                    if (((r.breakpoints = (!u && r.breakpoints) || l(e.theme, 'breakpoints', a.breakpoints)), Array.isArray(m))) {
                      (r.media = (!u && r.media) || [null].concat(r.breakpoints.map(s))), (o = i(o, p(r.media, g, b, m, e)));
                      continue;
                    }
                    null !== m && ((o = i(o, d(r.breakpoints, g, b, m, e))), (c = !0));
                  }
                }
              return (
                c &&
                  (o = (function(e) {
                    var t = {};
                    return (
                      Object.keys(e)
                        .sort(function(e, t) {
                          return e.localeCompare(t, void 0, { numeric: !0, sensitivity: 'base' });
                        })
                        .forEach(function(r) {
                          t[r] = e[r];
                        }),
                      t
                    );
                  })(o)),
                o
              );
            };
          (o.config = t), (o.propNames = Object.keys(t)), (o.cache = r);
          var c = Object.keys(t).filter(function(e) {
            return 'config' !== e;
          });
          return (
            c.length > 1 &&
              c.forEach(function(r) {
                var n;
                o[r] = e((((n = {})[r] = t[r]), n));
              }),
            o
          );
        },
        p = function(e, t, r, o, i) {
          var a = {};
          return (
            o.slice(0, e.length).forEach(function(o, s) {
              var c,
                l = e[s],
                u = t(o, r, i);
              l ? n()(a, (((c = {})[l] = n()({}, a[l], u)), c)) : n()(a, u);
            }),
            a
          );
        },
        d = function(e, t, r, o, i) {
          var a = {};
          for (var c in o) {
            var l = e[c],
              u = t(o[c], r, i);
            if (l) {
              var p,
                d = s(l);
              n()(a, (((p = {})[d] = n()({}, a[d], u)), p));
            } else n()(a, u);
          }
          return a;
        },
        f = function(e) {
          var t = e.properties,
            r = e.property,
            o = e.scale,
            n = e.transform,
            i = void 0 === n ? c : n,
            a = e.defaultScale;
          t = t || [r];
          var s = function(e, r, o) {
            var n = {},
              a = i(e, r, o);
            if (null !== a)
              return (
                t.forEach(function(e) {
                  n[e] = a;
                }),
                n
              );
          };
          return (s.scale = o), (s.defaults = a), s;
        },
        g = function(e) {
          void 0 === e && (e = {});
          var t = {};
          return (
            Object.keys(e).forEach(function(r) {
              var o = e[r];
              t[r] = !0 !== o ? ('function' !== typeof o ? f(o) : o) : f({ property: r, scale: r });
            }),
            u(t)
          );
        },
        m = g({
          width: {
            property: 'width',
            scale: 'sizes',
            transform: function(e, t) {
              return l(
                t,
                e,
                !(function(e) {
                  return 'number' === typeof e && !isNaN(e);
                })(e) || e > 1
                  ? e
                  : 100 * e + '%'
              );
            }
          },
          height: { property: 'height', scale: 'sizes' },
          minWidth: { property: 'minWidth', scale: 'sizes' },
          minHeight: { property: 'minHeight', scale: 'sizes' },
          maxWidth: { property: 'maxWidth', scale: 'sizes' },
          maxHeight: { property: 'maxHeight', scale: 'sizes' },
          size: { properties: ['width', 'height'], scale: 'sizes' },
          overflow: !0,
          overflowX: !0,
          overflowY: !0,
          display: !0,
          verticalAlign: !0
        }),
        b = { color: { property: 'color', scale: 'colors' }, backgroundColor: { property: 'backgroundColor', scale: 'colors' }, opacity: !0 };
      b.bg = b.backgroundColor;
      var h = g(b),
        y = h,
        v = g({
          fontFamily: { property: 'fontFamily', scale: 'fonts' },
          fontSize: { property: 'fontSize', scale: 'fontSizes', defaultScale: [12, 14, 16, 20, 24, 32, 48, 64, 72] },
          fontWeight: { property: 'fontWeight', scale: 'fontWeights' },
          lineHeight: { property: 'lineHeight', scale: 'lineHeights' },
          letterSpacing: { property: 'letterSpacing', scale: 'letterSpacings' },
          textAlign: !0,
          fontStyle: !0
        }),
        S = g({
          alignItems: !0,
          alignContent: !0,
          justifyItems: !0,
          justifyContent: !0,
          flexWrap: !0,
          flexDirection: !0,
          flex: !0,
          flexGrow: !0,
          flexShrink: !0,
          flexBasis: !0,
          justifySelf: !0,
          alignSelf: !0,
          order: !0
        }),
        w = { space: [0, 4, 8, 16, 32, 64, 128, 256, 512] },
        R = g({
          gridGap: { property: 'gridGap', scale: 'space', defaultScale: w.space },
          gridColumnGap: { property: 'gridColumnGap', scale: 'space', defaultScale: w.space },
          gridRowGap: { property: 'gridRowGap', scale: 'space', defaultScale: w.space },
          gridColumn: !0,
          gridRow: !0,
          gridAutoFlow: !0,
          gridAutoColumns: !0,
          gridAutoRows: !0,
          gridTemplateColumns: !0,
          gridTemplateRows: !0,
          gridTemplateAreas: !0,
          gridArea: !0
        }),
        O = {
          border: { property: 'border', scale: 'borders' },
          borderWidth: { property: 'borderWidth', scale: 'borderWidths' },
          borderStyle: { property: 'borderStyle', scale: 'borderStyles' },
          borderColor: { property: 'borderColor', scale: 'colors' },
          borderRadius: { property: 'borderRadius', scale: 'radii' },
          borderTop: { property: 'borderTop', scale: 'borders' },
          borderTopLeftRadius: { property: 'borderTopLeftRadius', scale: 'radii' },
          borderTopRightRadius: { property: 'borderTopRightRadius', scale: 'radii' },
          borderRight: { property: 'borderRight', scale: 'borders' },
          borderBottom: { property: 'borderBottom', scale: 'borders' },
          borderBottomLeftRadius: { property: 'borderBottomLeftRadius', scale: 'radii' },
          borderBottomRightRadius: { property: 'borderBottomRightRadius', scale: 'radii' },
          borderLeft: { property: 'borderLeft', scale: 'borders' },
          borderX: { properties: ['borderLeft', 'borderRight'], scale: 'borders' },
          borderY: { properties: ['borderTop', 'borderBottom'], scale: 'borders' },
          borderTopWidth: { property: 'borderTopWidth', scale: 'borderWidths' },
          borderTopColor: { property: 'borderTopColor', scale: 'colors' },
          borderTopStyle: { property: 'borderTopStyle', scale: 'borderStyles' }
        };
      (O.borderTopLeftRadius = { property: 'borderTopLeftRadius', scale: 'radii' }),
        (O.borderTopRightRadius = { property: 'borderTopRightRadius', scale: 'radii' }),
        (O.borderBottomWidth = { property: 'borderBottomWidth', scale: 'borderWidths' }),
        (O.borderBottomColor = { property: 'borderBottomColor', scale: 'colors' }),
        (O.borderBottomStyle = { property: 'borderBottomStyle', scale: 'borderStyles' }),
        (O.borderBottomLeftRadius = { property: 'borderBottomLeftRadius', scale: 'radii' }),
        (O.borderBottomRightRadius = { property: 'borderBottomRightRadius', scale: 'radii' }),
        (O.borderLeftWidth = { property: 'borderLeftWidth', scale: 'borderWidths' }),
        (O.borderLeftColor = { property: 'borderLeftColor', scale: 'colors' }),
        (O.borderLeftStyle = { property: 'borderLeftStyle', scale: 'borderStyles' }),
        (O.borderRightWidth = { property: 'borderRightWidth', scale: 'borderWidths' }),
        (O.borderRightColor = { property: 'borderRightColor', scale: 'colors' }),
        (O.borderRightStyle = { property: 'borderRightStyle', scale: 'borderStyles' });
      var x = g(O),
        T = { background: !0, backgroundImage: !0, backgroundSize: !0, backgroundPosition: !0, backgroundRepeat: !0 };
      (T.bgImage = T.backgroundImage), (T.bgSize = T.backgroundSize), (T.bgPosition = T.backgroundPosition), (T.bgRepeat = T.backgroundRepeat);
      var j = g(T),
        P = { space: [0, 4, 8, 16, 32, 64, 128, 256, 512] },
        k = g({
          position: !0,
          zIndex: { property: 'zIndex', scale: 'zIndices' },
          top: { property: 'top', scale: 'space', defaultScale: P.space },
          right: { property: 'right', scale: 'space', defaultScale: P.space },
          bottom: { property: 'bottom', scale: 'space', defaultScale: P.space },
          left: { property: 'left', scale: 'space', defaultScale: P.space }
        }),
        A = { space: [0, 4, 8, 16, 32, 64, 128, 256, 512] },
        C = function(e) {
          return 'number' === typeof e && !isNaN(e);
        },
        z = function(e, t) {
          if (!C(e)) return l(t, e, e);
          var r = e < 0,
            o = Math.abs(e),
            n = l(t, o, o);
          return C(n) ? n * (r ? -1 : 1) : r ? '-' + n : n;
        },
        B = {};
      (B.margin = {
        margin: { property: 'margin', scale: 'space', transform: z, defaultScale: A.space },
        marginTop: { property: 'marginTop', scale: 'space', transform: z, defaultScale: A.space },
        marginRight: { property: 'marginRight', scale: 'space', transform: z, defaultScale: A.space },
        marginBottom: { property: 'marginBottom', scale: 'space', transform: z, defaultScale: A.space },
        marginLeft: { property: 'marginLeft', scale: 'space', transform: z, defaultScale: A.space },
        marginX: { properties: ['marginLeft', 'marginRight'], scale: 'space', transform: z, defaultScale: A.space },
        marginY: { properties: ['marginTop', 'marginBottom'], scale: 'space', transform: z, defaultScale: A.space }
      }),
        (B.margin.m = B.margin.margin),
        (B.margin.mt = B.margin.marginTop),
        (B.margin.mr = B.margin.marginRight),
        (B.margin.mb = B.margin.marginBottom),
        (B.margin.ml = B.margin.marginLeft),
        (B.margin.mx = B.margin.marginX),
        (B.margin.my = B.margin.marginY),
        (B.padding = {
          padding: { property: 'padding', scale: 'space', defaultScale: A.space },
          paddingTop: { property: 'paddingTop', scale: 'space', defaultScale: A.space },
          paddingRight: { property: 'paddingRight', scale: 'space', defaultScale: A.space },
          paddingBottom: { property: 'paddingBottom', scale: 'space', defaultScale: A.space },
          paddingLeft: { property: 'paddingLeft', scale: 'space', defaultScale: A.space },
          paddingX: { properties: ['paddingLeft', 'paddingRight'], scale: 'space', defaultScale: A.space },
          paddingY: { properties: ['paddingTop', 'paddingBottom'], scale: 'space', defaultScale: A.space }
        }),
        (B.padding.p = B.padding.padding),
        (B.padding.pt = B.padding.paddingTop),
        (B.padding.pr = B.padding.paddingRight),
        (B.padding.pb = B.padding.paddingBottom),
        (B.padding.pl = B.padding.paddingLeft),
        (B.padding.px = B.padding.paddingX),
        (B.padding.py = B.padding.paddingY);
      var W = (function() {
        for (var e = {}, t = arguments.length, r = new Array(t), o = 0; o < t; o++) r[o] = arguments[o];
        r.forEach(function(t) {
          t && t.config && n()(e, t.config);
        });
        var i = u(e);
        return i;
      })(g(B.margin), g(B.padding));
      g({ boxShadow: { property: 'boxShadow', scale: 'shadows' }, textShadow: { property: 'textShadow', scale: 'shadows' } });
      function E() {
        return (
          (E =
            Object.assign ||
            function(e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
              }
              return e;
            }),
          E.apply(this, arguments)
        );
      }
      var L = function(e, t, r, o, n) {
          for (t = t && t.split ? t.split('.') : [t], o = 0; o < t.length; o++) e = e ? e[t[o]] : n;
          return e === n ? r : e;
        },
        I = [40, 52, 64].map(function(e) {
          return e + 'em';
        }),
        D = { space: [0, 4, 8, 16, 32, 64, 128, 256, 512], fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72] },
        G = {
          bg: 'backgroundColor',
          m: 'margin',
          mt: 'marginTop',
          mr: 'marginRight',
          mb: 'marginBottom',
          ml: 'marginLeft',
          mx: 'marginX',
          my: 'marginY',
          p: 'padding',
          pt: 'paddingTop',
          pr: 'paddingRight',
          pb: 'paddingBottom',
          pl: 'paddingLeft',
          px: 'paddingX',
          py: 'paddingY'
        },
        F = {
          marginX: ['marginLeft', 'marginRight'],
          marginY: ['marginTop', 'marginBottom'],
          paddingX: ['paddingLeft', 'paddingRight'],
          paddingY: ['paddingTop', 'paddingBottom'],
          size: ['width', 'height']
        },
        _ = {
          color: 'colors',
          backgroundColor: 'colors',
          borderColor: 'colors',
          margin: 'space',
          marginTop: 'space',
          marginRight: 'space',
          marginBottom: 'space',
          marginLeft: 'space',
          marginX: 'space',
          marginY: 'space',
          padding: 'space',
          paddingTop: 'space',
          paddingRight: 'space',
          paddingBottom: 'space',
          paddingLeft: 'space',
          paddingX: 'space',
          paddingY: 'space',
          top: 'space',
          right: 'space',
          bottom: 'space',
          left: 'space',
          gridGap: 'space',
          gridColumnGap: 'space',
          gridRowGap: 'space',
          gap: 'space',
          columnGap: 'space',
          rowGap: 'space',
          fontFamily: 'fonts',
          fontSize: 'fontSizes',
          fontWeight: 'fontWeights',
          lineHeight: 'lineHeights',
          letterSpacing: 'letterSpacings',
          border: 'borders',
          borderTop: 'borders',
          borderRight: 'borders',
          borderBottom: 'borders',
          borderLeft: 'borders',
          borderWidth: 'borderWidths',
          borderStyle: 'borderStyles',
          borderRadius: 'radii',
          borderTopRightRadius: 'radii',
          borderTopLeftRadius: 'radii',
          borderBottomRightRadius: 'radii',
          borderBottomLeftRadius: 'radii',
          borderTopWidth: 'borderWidths',
          borderTopColor: 'colors',
          borderTopStyle: 'borderStyles',
          borderBottomWidth: 'borderWidths',
          borderBottomColor: 'colors',
          borderBottomStyle: 'borderStyles',
          borderLeftWidth: 'borderWidths',
          borderLeftColor: 'colors',
          borderLeftStyle: 'borderStyles',
          borderRightWidth: 'borderWidths',
          borderRightColor: 'colors',
          borderRightStyle: 'borderStyles',
          outlineColor: 'colors',
          boxShadow: 'shadows',
          textShadow: 'shadows',
          zIndex: 'zIndices',
          width: 'sizes',
          minWidth: 'sizes',
          maxWidth: 'sizes',
          height: 'sizes',
          minHeight: 'sizes',
          maxHeight: 'sizes',
          flexBasis: 'sizes',
          size: 'sizes',
          fill: 'colors',
          stroke: 'colors'
        },
        H = function(e, t) {
          if ('number' !== typeof t || t >= 0) return L(e, t, t);
          var r = Math.abs(t),
            o = L(e, r, r);
          return 'string' === typeof o ? '-' + o : -1 * o;
        },
        M = ['margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'top', 'bottom', 'left', 'right'].reduce(
          function(e, t) {
            var r;
            return E({}, e, (((r = {})[t] = H), r));
          },
          {}
        ),
        X = function e(t) {
          return function(r) {
            void 0 === r && (r = {});
            var o = E({}, D, {}, r.theme || r),
              n = {},
              i = (function(e) {
                return function(t) {
                  var r = {},
                    o = L(t, 'breakpoints', I),
                    n = [null].concat(
                      o.map(function(e) {
                        return '@media screen and (min-width: ' + e + ')';
                      })
                    );
                  for (var i in e) {
                    var a = 'function' === typeof e[i] ? e[i](t) : e[i];
                    if (null != a)
                      if (Array.isArray(a))
                        for (var s = 0; s < a.slice(0, n.length).length; s++) {
                          var c = n[s];
                          c ? ((r[c] = r[c] || {}), null != a[s] && (r[c][i] = a[s])) : (r[i] = a[s]);
                        }
                      else r[i] = a;
                  }
                  return r;
                };
              })('function' === typeof t ? t(o) : t)(o);
            for (var a in i) {
              var s = i[a],
                c = 'function' === typeof s ? s(o) : s;
              if ('variant' !== a)
                if (c && 'object' === typeof c) n[a] = e(c)(o);
                else {
                  var l = L(G, a, a),
                    u = L(_, l),
                    p = L(o, u, L(o, l, {})),
                    d = L(M, l, L)(p, c, c);
                  if (F[l]) for (var f = F[l], g = 0; g < f.length; g++) n[f[g]] = d;
                  else n[l] = d;
                }
              else n = E({}, n, {}, e(L(o, c))(o));
            }
            return n;
          };
        },
        N = function(e) {
          var t,
            r,
            o = e.scale,
            n = e.prop,
            i = void 0 === n ? 'variant' : n,
            a = e.variants,
            s = void 0 === a ? {} : a,
            c = e.key;
          (r = Object.keys(s).length
            ? function(e, t, r) {
                return X(l(t, e, null))(r.theme);
              }
            : function(e, t) {
                return l(t, e, null);
              }),
            (r.scale = o || c),
            (r.defaults = s);
          var p = (((t = {})[i] = r), t);
          return u(p);
        };
      N({ key: 'buttons' }),
        N({ key: 'textStyles', prop: 'textStyle' }),
        N({ key: 'colorStyles', prop: 'colors' }),
        m.width,
        m.height,
        m.minWidth,
        m.minHeight,
        m.maxWidth,
        m.maxHeight,
        m.size,
        m.verticalAlign,
        m.display,
        m.overflow,
        m.overflowX,
        m.overflowY,
        y.opacity,
        v.fontSize,
        v.fontFamily,
        v.fontWeight,
        v.lineHeight,
        v.textAlign,
        v.fontStyle,
        v.letterSpacing,
        S.alignItems,
        S.alignContent,
        S.justifyItems,
        S.justifyContent,
        S.flexWrap,
        S.flexDirection,
        S.flex,
        S.flexGrow,
        S.flexShrink,
        S.flexBasis,
        S.justifySelf,
        S.alignSelf,
        S.order,
        R.gridGap,
        R.gridColumnGap,
        R.gridRowGap,
        R.gridColumn,
        R.gridRow,
        R.gridAutoFlow,
        R.gridAutoColumns,
        R.gridAutoRows,
        R.gridTemplateColumns,
        R.gridTemplateRows,
        R.gridTemplateAreas,
        R.gridArea,
        x.borderWidth,
        x.borderStyle,
        x.borderColor,
        x.borderTop,
        x.borderRight,
        x.borderBottom,
        x.borderLeft,
        x.borderRadius,
        j.backgroundImage,
        j.backgroundSize,
        j.backgroundPosition,
        j.backgroundRepeat,
        k.zIndex,
        k.top,
        k.right,
        k.bottom,
        k.left;
    },
    14671: function(e, t, r) {
      'use strict';
      r.d(t, {
        Z: function() {
          return a;
        }
      });
      var o = r(67294);
      function n(e) {
        let t;
        const r = new Set(),
          o = (e, o) => {
            const n = 'function' === typeof e ? e(t) : e;
            if (n !== t) {
              const e = t;
              (t = o ? n : Object.assign({}, t, n)), r.forEach(r => r(t, e));
            }
          },
          n = () => t,
          i = {
            setState: o,
            getState: n,
            subscribe: (e, o, i) =>
              o || i
                ? ((e, o = n, i = Object.is) => {
                    console.warn('[DEPRECATED] Please use `subscribeWithSelector` middleware');
                    let a = o(t);
                    function s() {
                      const r = o(t);
                      if (!i(a, r)) {
                        const t = a;
                        e((a = r), t);
                      }
                    }
                    return r.add(s), () => r.delete(s);
                  })(e, o, i)
                : (r.add(e), () => r.delete(e)),
            destroy: () => r.clear()
          };
        return (t = e(o, n, i)), i;
      }
      const i =
        'undefined' === typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent)
          ? o.useEffect
          : o.useLayoutEffect;
      function a(e) {
        const t = 'function' === typeof e ? n(e) : e,
          r = (e = t.getState, r = Object.is) => {
            const [, n] = (0, o.useReducer)(e => e + 1, 0),
              a = t.getState(),
              s = (0, o.useRef)(a),
              c = (0, o.useRef)(e),
              l = (0, o.useRef)(r),
              u = (0, o.useRef)(!1),
              p = (0, o.useRef)();
            let d;
            void 0 === p.current && (p.current = e(a));
            let f = !1;
            (s.current !== a || c.current !== e || l.current !== r || u.current) && ((d = e(a)), (f = !r(p.current, d))),
              i(() => {
                f && (p.current = d), (s.current = a), (c.current = e), (l.current = r), (u.current = !1);
              });
            const g = (0, o.useRef)(a);
            i(() => {
              const e = () => {
                  try {
                    const e = t.getState(),
                      r = c.current(e);
                    l.current(p.current, r) || ((s.current = e), (p.current = r), n());
                  } catch (e) {
                    (u.current = !0), n();
                  }
                },
                r = t.subscribe(e);
              return t.getState() !== g.current && e(), r;
            }, []);
            const m = f ? d : p.current;
            return (0, o.useDebugValue)(m), m;
          };
        return (
          Object.assign(r, t),
          (r[Symbol.iterator] = function() {
            console.warn('[useStore, api] = create() is deprecated and will be removed in v4');
            const e = [r, t];
            return {
              next() {
                const t = e.length <= 0;
                return { value: e.shift(), done: t };
              }
            };
          }),
          r
        );
      }
    },
    38597: function(e, t, r) {
      'use strict';
      r.d(t, {
        tJ: function() {
          return u;
        }
      });
      Object.defineProperty, Object.getOwnPropertySymbols, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
      var o = Object.defineProperty,
        n = Object.getOwnPropertySymbols,
        i = Object.prototype.hasOwnProperty,
        a = Object.prototype.propertyIsEnumerable,
        s = (e, t, r) => (t in e ? o(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)),
        c = (e, t) => {
          for (var r in t || (t = {})) i.call(t, r) && s(e, r, t[r]);
          if (n) for (var r of n(t)) a.call(t, r) && s(e, r, t[r]);
          return e;
        };
      const l = e => t => {
          try {
            const r = e(t);
            return r instanceof Promise
              ? r
              : {
                  then: e => l(e)(r),
                  catch(e) {
                    return this;
                  }
                };
          } catch (r) {
            return {
              then(e) {
                return this;
              },
              catch: e => l(e)(r)
            };
          }
        },
        u = (e, t) => (r, o, n) => {
          let i = c(
            {
              getStorage: () => localStorage,
              serialize: JSON.stringify,
              deserialize: JSON.parse,
              partialize: e => e,
              version: 0,
              merge: (e, t) => c(c({}, t), e)
            },
            t
          );
          (i.blacklist || i.whitelist) &&
            console.warn(
              `The ${
                i.blacklist ? 'blacklist' : 'whitelist'
              } option is deprecated and will be removed in the next version. Please use the 'partialize' option instead.`
            );
          let a = !1;
          const s = new Set(),
            u = new Set();
          let p;
          try {
            p = i.getStorage();
          } catch (y) {}
          if (!p)
            return e(
              (...e) => {
                console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`), r(...e);
              },
              o,
              n
            );
          p.removeItem ||
            console.warn(
              `[zustand persist middleware] The given storage for item '${i.name}' does not contain a 'removeItem' method, which will be required in v4.`
            );
          const d = l(i.serialize),
            f = () => {
              const e = i.partialize(c({}, o()));
              let t;
              i.whitelist &&
                Object.keys(e).forEach(t => {
                  var r;
                  !(null == (r = i.whitelist) ? void 0 : r.includes(t)) && delete e[t];
                }),
                i.blacklist && i.blacklist.forEach(t => delete e[t]);
              const r = d({ state: e, version: i.version })
                .then(e => p.setItem(i.name, e))
                .catch(e => {
                  t = e;
                });
              if (t) throw t;
              return r;
            },
            g = n.setState;
          n.setState = (e, t) => {
            g(e, t), f();
          };
          const m = e(
            (...e) => {
              r(...e), f();
            },
            o,
            n
          );
          let b;
          const h = () => {
            var e;
            if (!p) return;
            (a = !1), s.forEach(e => e(o()));
            const t = (null == (e = i.onRehydrateStorage) ? void 0 : e.call(i, o())) || void 0;
            return l(p.getItem.bind(p))(i.name)
              .then(e => {
                if (e) return i.deserialize(e);
              })
              .then(e => {
                if (e) {
                  if ('number' !== typeof e.version || e.version === i.version) return e.state;
                  if (i.migrate) return i.migrate(e.state, e.version);
                  console.error("State loaded from storage couldn't be migrated since no migrate function was provided");
                }
              })
              .then(e => {
                var t;
                return (b = i.merge(e, null != (t = o()) ? t : m)), r(b, !0), f();
              })
              .then(() => {
                null == t || t(b, void 0), (a = !0), u.forEach(e => e(b));
              })
              .catch(e => {
                null == t || t(void 0, e);
              });
          };
          return (
            (n.persist = {
              setOptions: e => {
                (i = c(c({}, i), e)), e.getStorage && (p = e.getStorage());
              },
              clearStorage: () => {
                var e;
                null == (e = null == p ? void 0 : p.removeItem) || e.call(p, i.name);
              },
              rehydrate: () => h(),
              hasHydrated: () => a,
              onHydrate: e => (
                s.add(e),
                () => {
                  s.delete(e);
                }
              ),
              onFinishHydration: e => (
                u.add(e),
                () => {
                  u.delete(e);
                }
              )
            }),
            h(),
            b || m
          );
        };
    },
    60374: function(e, t, r) {
      'use strict';
      function o(e, t) {
        if (Object.is(e, t)) return !0;
        if ('object' !== typeof e || null === e || 'object' !== typeof t || null === t) return !1;
        const r = Object.keys(e);
        if (r.length !== Object.keys(t).length) return !1;
        for (let o = 0; o < r.length; o++) if (!Object.prototype.hasOwnProperty.call(t, r[o]) || !Object.is(e[r[o]], t[r[o]])) return !1;
        return !0;
      }
      r.d(t, {
        Z: function() {
          return o;
        }
      });
    },
    51438: function(e, t, r) {
      'use strict';
      function o(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
      }
      r.d(t, {
        Z: function() {
          return o;
        }
      });
    },
    16567: function(e, t, r) {
      'use strict';
      function o(e) {
        return (
          (o = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          o(e)
        );
      }
      function n(e) {
        return o(e);
      }
      function i(e, t) {
        return !t || ('object' !== ((r = t) && r.constructor === Symbol ? 'symbol' : typeof r) && 'function' !== typeof t)
          ? (function(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e;
            })(e)
          : t;
        var r;
      }
      function a(e) {
        var t = (function() {
          if ('undefined' === typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' === typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0;
          } catch (e) {
            return !1;
          }
        })();
        return function() {
          var r,
            o = n(e);
          if (t) {
            var a = n(this).constructor;
            r = Reflect.construct(o, arguments, a);
          } else r = o.apply(this, arguments);
          return i(this, r);
        };
      }
      r.d(t, {
        Z: function() {
          return a;
        }
      });
    },
    88029: function(e, t, r) {
      'use strict';
      function o(e, t) {
        return (
          (o =
            Object.setPrototypeOf ||
            function(e, t) {
              return (e.__proto__ = t), e;
            }),
          o(e, t)
        );
      }
      function n(e, t) {
        if ('function' !== typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && o(e, t);
      }
      r.d(t, {
        Z: function() {
          return n;
        }
      });
    },
    99534: function(e, t, r) {
      'use strict';
      function o(e, t) {
        if (null == e) return {};
        var r,
          o,
          n = (function(e, t) {
            if (null == e) return {};
            var r,
              o,
              n = {},
              i = Object.keys(e);
            for (o = 0; o < i.length; o++) (r = i[o]), t.indexOf(r) >= 0 || (n[r] = e[r]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (o = 0; o < i.length; o++) (r = i[o]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]));
        }
        return n;
      }
      r.d(t, {
        Z: function() {
          return o;
        }
      });
    },
    70603: function(e, t, r) {
      'use strict';
      function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, o = new Array(t); r < t; r++) o[r] = e[r];
        return o;
      }
      function n(e, t) {
        return (
          (function(e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function(e) {
            if (('undefined' !== typeof Symbol && null != e[Symbol.iterator]) || null != e['@@iterator']) return Array.from(e);
          })(e) ||
          (function(e, t) {
            if (e) {
              if ('string' === typeof e) return o(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              return (
                'Object' === r && e.constructor && (r = e.constructor.name),
                'Map' === r || 'Set' === r
                  ? Array.from(r)
                  : 'Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
                  ? o(e, t)
                  : void 0
              );
            }
          })(e, t) ||
          (function() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      r.d(t, {
        Z: function() {
          return n;
        }
      });
    },
    12902: function(e, t, r) {
      'use strict';
      function o(e) {
        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
        throw Error(
          '[Immer] minified error nr: ' +
            e +
            (r.length
              ? ' ' +
                r
                  .map(function(e) {
                    return "'" + e + "'";
                  })
                  .join(',')
              : '') +
            '. Find the full error at: https://bit.ly/3cXEKWf'
        );
      }
      function n(e) {
        return !!e && !!e[$];
      }
      function i(e) {
        var t;
        return (
          !!e &&
          ((function(e) {
            if (!e || 'object' != typeof e) return !1;
            var t = Object.getPrototypeOf(e);
            if (null === t) return !0;
            var r = Object.hasOwnProperty.call(t, 'constructor') && t.constructor;
            return r === Object || ('function' == typeof r && Function.toString.call(r) === Y);
          })(e) ||
            Array.isArray(e) ||
            !!e[N] ||
            !!(null === (t = e.constructor) || void 0 === t ? void 0 : t[N]) ||
            d(e) ||
            f(e))
        );
      }
      function a(e, t, r) {
        void 0 === r && (r = !1),
          0 === s(e)
            ? (r ? Object.keys : K)(e).forEach(function(o) {
                (r && 'symbol' == typeof o) || t(o, e[o], e);
              })
            : e.forEach(function(r, o) {
                return t(o, r, e);
              });
      }
      function s(e) {
        var t = e[$];
        return t ? (t.i > 3 ? t.i - 4 : t.i) : Array.isArray(e) ? 1 : d(e) ? 2 : f(e) ? 3 : 0;
      }
      function c(e, t) {
        return 2 === s(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
      }
      function l(e, t) {
        return 2 === s(e) ? e.get(t) : e[t];
      }
      function u(e, t, r) {
        var o = s(e);
        2 === o ? e.set(t, r) : 3 === o ? (e.delete(t), e.add(r)) : (e[t] = r);
      }
      function p(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
      }
      function d(e) {
        return _ && e instanceof Map;
      }
      function f(e) {
        return H && e instanceof Set;
      }
      function g(e) {
        return e.o || e.t;
      }
      function m(e) {
        if (Array.isArray(e)) return Array.prototype.slice.call(e);
        var t = Z(e);
        delete t[$];
        for (var r = K(t), o = 0; o < r.length; o++) {
          var n = r[o],
            i = t[n];
          !1 === i.writable && ((i.writable = !0), (i.configurable = !0)),
            (i.get || i.set) && (t[n] = { configurable: !0, writable: !0, enumerable: i.enumerable, value: e[n] });
        }
        return Object.create(Object.getPrototypeOf(e), t);
      }
      function b(e, t) {
        return (
          void 0 === t && (t = !1),
          y(e) ||
            n(e) ||
            !i(e) ||
            (s(e) > 1 && (e.set = e.add = e.clear = e.delete = h),
            Object.freeze(e),
            t &&
              a(
                e,
                function(e, t) {
                  return b(t, !0);
                },
                !0
              )),
          e
        );
      }
      function h() {
        o(2);
      }
      function y(e) {
        return null == e || 'object' != typeof e || Object.isFrozen(e);
      }
      function v(e) {
        var t = U[e];
        return t || o(18, e), t;
      }
      function S() {
        return G;
      }
      function w(e, t) {
        t && (v('Patches'), (e.u = []), (e.s = []), (e.v = t));
      }
      function R(e) {
        O(e), e.p.forEach(T), (e.p = null);
      }
      function O(e) {
        e === G && (G = e.l);
      }
      function x(e) {
        return (G = { p: [], l: G, h: e, m: !0, _: 0 });
      }
      function T(e) {
        var t = e[$];
        0 === t.i || 1 === t.i ? t.j() : (t.O = !0);
      }
      function j(e, t) {
        t._ = t.p.length;
        var r = t.p[0],
          n = void 0 !== e && e !== r;
        return (
          t.h.g || v('ES5').S(t, e, n),
          n ? (r[$].P && (R(t), o(4)), i(e) && ((e = P(t, e)), t.l || A(t, e)), t.u && v('Patches').M(r[$].t, e, t.u, t.s)) : (e = P(t, r, [])),
          R(t),
          t.u && t.v(t.u, t.s),
          e !== X ? e : void 0
        );
      }
      function P(e, t, r) {
        if (y(t)) return t;
        var o = t[$];
        if (!o)
          return (
            a(
              t,
              function(n, i) {
                return k(e, o, t, n, i, r);
              },
              !0
            ),
            t
          );
        if (o.A !== e) return t;
        if (!o.P) return A(e, o.t, !0), o.t;
        if (!o.I) {
          (o.I = !0), o.A._--;
          var n = 4 === o.i || 5 === o.i ? (o.o = m(o.k)) : o.o;
          a(3 === o.i ? new Set(n) : n, function(t, i) {
            return k(e, o, n, t, i, r);
          }),
            A(e, n, !1),
            r && e.u && v('Patches').R(o, r, e.u, e.s);
        }
        return o.o;
      }
      function k(e, t, r, o, a, s) {
        if (n(a)) {
          var l = P(e, a, s && t && 3 !== t.i && !c(t.D, o) ? s.concat(o) : void 0);
          if ((u(r, o, l), !n(l))) return;
          e.m = !1;
        }
        if (i(a) && !y(a)) {
          if (!e.h.F && e._ < 1) return;
          P(e, a), (t && t.A.l) || A(e, a);
        }
      }
      function A(e, t, r) {
        void 0 === r && (r = !1), e.h.F && e.m && b(t, r);
      }
      function C(e, t) {
        var r = e[$];
        return (r ? g(r) : e)[t];
      }
      function z(e, t) {
        if (t in e)
          for (var r = Object.getPrototypeOf(e); r; ) {
            var o = Object.getOwnPropertyDescriptor(r, t);
            if (o) return o;
            r = Object.getPrototypeOf(r);
          }
      }
      function B(e) {
        e.P || ((e.P = !0), e.l && B(e.l));
      }
      function W(e) {
        e.o || (e.o = m(e.t));
      }
      function E(e, t, r) {
        var o = d(t)
          ? v('MapSet').N(t, r)
          : f(t)
          ? v('MapSet').T(t, r)
          : e.g
          ? (function(e, t) {
              var r = Array.isArray(e),
                o = { i: r ? 1 : 0, A: t ? t.A : S(), P: !1, I: !1, D: {}, l: t, t: e, k: null, o: null, j: null, C: !1 },
                n = o,
                i = V;
              r && ((n = [o]), (i = J));
              var a = Proxy.revocable(n, i),
                s = a.revoke,
                c = a.proxy;
              return (o.k = c), (o.j = s), c;
            })(t, r)
          : v('ES5').J(t, r);
        return (r ? r.A : S()).p.push(o), o;
      }
      function L(e) {
        return (
          n(e) || o(22, e),
          (function e(t) {
            if (!i(t)) return t;
            var r,
              o = t[$],
              n = s(t);
            if (o) {
              if (!o.P && (o.i < 4 || !v('ES5').K(o))) return o.t;
              (o.I = !0), (r = I(t, n)), (o.I = !1);
            } else r = I(t, n);
            return (
              a(r, function(t, n) {
                (o && l(o.t, t) === n) || u(r, t, e(n));
              }),
              3 === n ? new Set(r) : r
            );
          })(e)
        );
      }
      function I(e, t) {
        switch (t) {
          case 2:
            return new Map(e);
          case 3:
            return Array.from(e);
        }
        return m(e);
      }
      var D,
        G,
        F = 'undefined' != typeof Symbol && 'symbol' == typeof Symbol('x'),
        _ = 'undefined' != typeof Map,
        H = 'undefined' != typeof Set,
        M = 'undefined' != typeof Proxy && void 0 !== Proxy.revocable && 'undefined' != typeof Reflect,
        X = F ? Symbol.for('immer-nothing') : (((D = {})['immer-nothing'] = !0), D),
        N = F ? Symbol.for('immer-draftable') : '__$immer_draftable',
        $ = F ? Symbol.for('immer-state') : '__$immer_state',
        Y = ('undefined' != typeof Symbol && Symbol.iterator, '' + Object.prototype.constructor),
        K =
          'undefined' != typeof Reflect && Reflect.ownKeys
            ? Reflect.ownKeys
            : void 0 !== Object.getOwnPropertySymbols
            ? function(e) {
                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
              }
            : Object.getOwnPropertyNames,
        Z =
          Object.getOwnPropertyDescriptors ||
          function(e) {
            var t = {};
            return (
              K(e).forEach(function(r) {
                t[r] = Object.getOwnPropertyDescriptor(e, r);
              }),
              t
            );
          },
        U = {},
        V = {
          get: function(e, t) {
            if (t === $) return e;
            var r = g(e);
            if (!c(r, t))
              return (function(e, t, r) {
                var o,
                  n = z(t, r);
                return n ? ('value' in n ? n.value : null === (o = n.get) || void 0 === o ? void 0 : o.call(e.k)) : void 0;
              })(e, r, t);
            var o = r[t];
            return e.I || !i(o) ? o : o === C(e.t, t) ? (W(e), (e.o[t] = E(e.A.h, o, e))) : o;
          },
          has: function(e, t) {
            return t in g(e);
          },
          ownKeys: function(e) {
            return Reflect.ownKeys(g(e));
          },
          set: function(e, t, r) {
            var o = z(g(e), t);
            if (null == o ? void 0 : o.set) return o.set.call(e.k, r), !0;
            if (!e.P) {
              var n = C(g(e), t),
                i = null == n ? void 0 : n[$];
              if (i && i.t === r) return (e.o[t] = r), (e.D[t] = !1), !0;
              if (p(r, n) && (void 0 !== r || c(e.t, t))) return !0;
              W(e), B(e);
            }
            return (e.o[t] === r && 'number' != typeof r && (void 0 !== r || t in e.o)) || ((e.o[t] = r), (e.D[t] = !0), !0);
          },
          deleteProperty: function(e, t) {
            return void 0 !== C(e.t, t) || t in e.t ? ((e.D[t] = !1), W(e), B(e)) : delete e.D[t], e.o && delete e.o[t], !0;
          },
          getOwnPropertyDescriptor: function(e, t) {
            var r = g(e),
              o = Reflect.getOwnPropertyDescriptor(r, t);
            return o ? { writable: !0, configurable: 1 !== e.i || 'length' !== t, enumerable: o.enumerable, value: r[t] } : o;
          },
          defineProperty: function() {
            o(11);
          },
          getPrototypeOf: function(e) {
            return Object.getPrototypeOf(e.t);
          },
          setPrototypeOf: function() {
            o(12);
          }
        },
        J = {};
      a(V, function(e, t) {
        J[e] = function() {
          return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
        };
      }),
        (J.deleteProperty = function(e, t) {
          return J.set.call(this, e, t, void 0);
        }),
        (J.set = function(e, t, r) {
          return V.set.call(this, e[0], t, r, e[0]);
        });
      var q = (function() {
          function e(e) {
            var t = this;
            (this.g = M),
              (this.F = !0),
              (this.produce = function(e, r, n) {
                if ('function' == typeof e && 'function' != typeof r) {
                  var a = r;
                  r = e;
                  var s = t;
                  return function(e) {
                    var t = this;
                    void 0 === e && (e = a);
                    for (var o = arguments.length, n = Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++) n[i - 1] = arguments[i];
                    return s.produce(e, function(e) {
                      var o;
                      return (o = r).call.apply(o, [t, e].concat(n));
                    });
                  };
                }
                var c;
                if (('function' != typeof r && o(6), void 0 !== n && 'function' != typeof n && o(7), i(e))) {
                  var l = x(t),
                    u = E(t, e, void 0),
                    p = !0;
                  try {
                    (c = r(u)), (p = !1);
                  } finally {
                    p ? R(l) : O(l);
                  }
                  return 'undefined' != typeof Promise && c instanceof Promise
                    ? c.then(
                        function(e) {
                          return w(l, n), j(e, l);
                        },
                        function(e) {
                          throw (R(l), e);
                        }
                      )
                    : (w(l, n), j(c, l));
                }
                if (!e || 'object' != typeof e) {
                  if ((void 0 === (c = r(e)) && (c = e), c === X && (c = void 0), t.F && b(c, !0), n)) {
                    var d = [],
                      f = [];
                    v('Patches').M(e, c, d, f), n(d, f);
                  }
                  return c;
                }
                o(21, e);
              }),
              (this.produceWithPatches = function(e, r) {
                if ('function' == typeof e)
                  return function(r) {
                    for (var o = arguments.length, n = Array(o > 1 ? o - 1 : 0), i = 1; i < o; i++) n[i - 1] = arguments[i];
                    return t.produceWithPatches(r, function(t) {
                      return e.apply(void 0, [t].concat(n));
                    });
                  };
                var o,
                  n,
                  i = t.produce(e, r, function(e, t) {
                    (o = e), (n = t);
                  });
                return 'undefined' != typeof Promise && i instanceof Promise
                  ? i.then(function(e) {
                      return [e, o, n];
                    })
                  : [i, o, n];
              }),
              'boolean' == typeof (null == e ? void 0 : e.useProxies) && this.setUseProxies(e.useProxies),
              'boolean' == typeof (null == e ? void 0 : e.autoFreeze) && this.setAutoFreeze(e.autoFreeze);
          }
          var t = e.prototype;
          return (
            (t.createDraft = function(e) {
              i(e) || o(8), n(e) && (e = L(e));
              var t = x(this),
                r = E(this, e, void 0);
              return (r[$].C = !0), O(t), r;
            }),
            (t.finishDraft = function(e, t) {
              var r = (e && e[$]).A;
              return w(r, t), j(void 0, r);
            }),
            (t.setAutoFreeze = function(e) {
              this.F = e;
            }),
            (t.setUseProxies = function(e) {
              e && !M && o(20), (this.g = e);
            }),
            (t.applyPatches = function(e, t) {
              var r;
              for (r = t.length - 1; r >= 0; r--) {
                var o = t[r];
                if (0 === o.path.length && 'replace' === o.op) {
                  e = o.value;
                  break;
                }
              }
              r > -1 && (t = t.slice(r + 1));
              var i = v('Patches').$;
              return n(e)
                ? i(e, t)
                : this.produce(e, function(e) {
                    return i(e, t);
                  });
            }),
            e
          );
        })(),
        Q = new q(),
        ee = Q.produce;
      Q.produceWithPatches.bind(Q),
        Q.setAutoFreeze.bind(Q),
        Q.setUseProxies.bind(Q),
        Q.applyPatches.bind(Q),
        Q.createDraft.bind(Q),
        Q.finishDraft.bind(Q);
      t.ZP = ee;
    }
  }
]);
