'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [107],
  {
    81593: function(t, n, e) {
      e.d(n, {
        ev: function() {
          return bt;
        },
        b8: function() {
          return _t;
        }
      });
      var r = e(70655),
        o = e(24394),
        i = e(6773);
      const a = 0.001;
      function s({ duration: t = 800, bounce: n = 0.25, velocity: e = 0, mass: r = 1 }) {
        let s, c;
        (0, o.K)(t <= 1e4, 'Spring duration must be 10 seconds or less');
        let l = 1 - n;
        (l = (0, i.u)(0.05, 1, l)),
          (t = (0, i.u)(0.01, 10, t / 1e3)),
          l < 1
            ? ((s = n => {
                const r = n * l,
                  o = r * t,
                  i = r - e,
                  s = u(n, l),
                  c = Math.exp(-o);
                return a - (i / s) * c;
              }),
              (c = n => {
                const r = n * l * t,
                  o = r * e + e,
                  i = Math.pow(l, 2) * Math.pow(n, 2) * t,
                  c = Math.exp(-r),
                  f = u(Math.pow(n, 2), l);
                return ((-s(n) + a > 0 ? -1 : 1) * ((o - i) * c)) / f;
              }))
            : ((s = n => Math.exp(-n * t) * ((n - e) * t + 1) - 0.001), (c = n => Math.exp(-n * t) * (t * t * (e - n))));
        const f = (function(t, n, e) {
          let r = e;
          for (let o = 1; o < 12; o++) r -= t(r) / n(r);
          return r;
        })(s, c, 5 / t);
        if (((t *= 1e3), isNaN(f))) return { stiffness: 100, damping: 10, duration: t };
        {
          const n = Math.pow(f, 2) * r;
          return { stiffness: n, damping: 2 * l * Math.sqrt(r * n), duration: t };
        }
      }
      function u(t, n) {
        return t * Math.sqrt(1 - n * n);
      }
      const c = ['duration', 'bounce'],
        l = ['stiffness', 'damping', 'mass'];
      function f(t, n) {
        return n.some(n => void 0 !== t[n]);
      }
      function p(t) {
        var { from: n = 0, to: e = 1, restSpeed: o = 2, restDelta: i } = t,
          a = (0, r.__rest)(t, ['from', 'to', 'restSpeed', 'restDelta']);
        const p = { done: !1, value: n };
        let { stiffness: h, damping: v, mass: m, velocity: y, duration: g, isResolvedFromDuration: b } = (function(t) {
            let n = Object.assign({ velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1 }, t);
            if (!f(t, l) && f(t, c)) {
              const e = s(t);
              (n = Object.assign(Object.assign(Object.assign({}, n), e), { velocity: 0, mass: 1 })), (n.isResolvedFromDuration = !0);
            }
            return n;
          })(a),
          _ = d,
          A = d;
        function C() {
          const t = y ? -y / 1e3 : 0,
            r = e - n,
            o = v / (2 * Math.sqrt(h * m)),
            a = Math.sqrt(h / m) / 1e3;
          if ((void 0 === i && (i = Math.min(Math.abs(e - n) / 100, 0.4)), o < 1)) {
            const n = u(a, o);
            (_ = i => {
              const s = Math.exp(-o * a * i);
              return e - s * (((t + o * a * r) / n) * Math.sin(n * i) + r * Math.cos(n * i));
            }),
              (A = e => {
                const i = Math.exp(-o * a * e);
                return (
                  o * a * i * ((Math.sin(n * e) * (t + o * a * r)) / n + r * Math.cos(n * e)) -
                  i * (Math.cos(n * e) * (t + o * a * r) - n * r * Math.sin(n * e))
                );
              });
          } else if (1 === o) _ = n => e - Math.exp(-a * n) * (r + (t + a * r) * n);
          else {
            const n = a * Math.sqrt(o * o - 1);
            _ = i => {
              const s = Math.exp(-o * a * i),
                u = Math.min(n * i, 300);
              return e - (s * ((t + o * a * r) * Math.sinh(u) + n * r * Math.cosh(u))) / n;
            };
          }
        }
        return (
          C(),
          {
            next: t => {
              const n = _(t);
              if (b) p.done = t >= g;
              else {
                const r = 1e3 * A(t),
                  a = Math.abs(r) <= o,
                  s = Math.abs(e - n) <= i;
                p.done = a && s;
              }
              return (p.value = p.done ? e : n), p;
            },
            flipTarget: () => {
              (y = -y), ([n, e] = [e, n]), C();
            }
          }
        );
      }
      p.needsInterpolation = (t, n) => 'string' === typeof t || 'string' === typeof n;
      const d = t => 0;
      var h = e(9326),
        v = e(72453),
        m = e(22960),
        y = e(78059),
        g = e(34582);
      function b(t, n, e) {
        return e < 0 && (e += 1), e > 1 && (e -= 1), e < 1 / 6 ? t + 6 * (n - t) * e : e < 0.5 ? n : e < 2 / 3 ? t + (n - t) * (2 / 3 - e) * 6 : t;
      }
      function _({ hue: t, saturation: n, lightness: e, alpha: r }) {
        (t /= 360), (e /= 100);
        let o = 0,
          i = 0,
          a = 0;
        if ((n /= 100)) {
          const r = e < 0.5 ? e * (1 + n) : e + n - e * n,
            s = 2 * e - r;
          (o = b(s, r, t + 1 / 3)), (i = b(s, r, t)), (a = b(s, r, t - 1 / 3));
        } else o = i = a = e;
        return { red: Math.round(255 * o), green: Math.round(255 * i), blue: Math.round(255 * a), alpha: r };
      }
      const A = (t, n, e) => {
          const r = t * t,
            o = n * n;
          return Math.sqrt(Math.max(0, e * (o - r) + r));
        },
        C = [m.$, y.m, g.J],
        M = t => C.find(n => n.test(t)),
        w = t => `'${t}' is not an animatable color. Use the equivalent color code instead.`,
        O = (t, n) => {
          let e = M(t),
            r = M(n);
          (0, o.k)(!!e, w(t)), (0, o.k)(!!r, w(n));
          let i = e.parse(t),
            a = r.parse(n);
          e === g.J && ((i = _(i)), (e = y.m)), r === g.J && ((a = _(a)), (r = y.m));
          const s = Object.assign({}, i);
          return t => {
            for (const n in s) 'alpha' !== n && (s[n] = A(i[n], a[n], t));
            return (s.alpha = (0, v.C)(i.alpha, a.alpha, t)), e.transform(s);
          };
        };
      var k = e(87405),
        x = e(28407),
        D = e(80734),
        S = e(9897);
      function $(t, n) {
        return (0, D.e)(t) ? e => (0, v.C)(t, n, e) : k.$.test(t) ? O(t, n) : j(t, n);
      }
      const P = (t, n) => {
          const e = [...t],
            r = e.length,
            o = t.map((t, e) => $(t, n[e]));
          return t => {
            for (let n = 0; n < r; n++) e[n] = o[n](t);
            return e;
          };
        },
        T = (t, n) => {
          const e = Object.assign(Object.assign({}, t), n),
            r = {};
          for (const o in e) void 0 !== t[o] && void 0 !== n[o] && (r[o] = $(t[o], n[o]));
          return t => {
            for (const n in r) e[n] = r[n](t);
            return e;
          };
        };
      function R(t) {
        const n = x.P.parse(t),
          e = n.length;
        let r = 0,
          o = 0,
          i = 0;
        for (let a = 0; a < e; a++) r || 'number' === typeof n[a] ? r++ : void 0 !== n[a].hue ? i++ : o++;
        return { parsed: n, numNumbers: r, numRGB: o, numHSL: i };
      }
      const j = (t, n) => {
          const e = x.P.createTransformer(n),
            r = R(t),
            i = R(n);
          return r.numHSL === i.numHSL && r.numRGB === i.numRGB && r.numNumbers >= i.numNumbers
            ? (0, S.z)(P(r.parsed, i.parsed), e)
            : ((0, o.K)(
                !0,
                `Complex values '${t}' and '${n}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
              ),
              e => `${e > 0 ? n : t}`);
        },
        N = (t, n) => e => (0, v.C)(t, n, e);
      function U(t, n, e) {
        const r = [],
          o =
            e ||
            ('number' === typeof (i = t[0])
              ? N
              : 'string' === typeof i
              ? k.$.test(i)
                ? O
                : j
              : Array.isArray(i)
              ? P
              : 'object' === typeof i
              ? T
              : void 0);
        var i;
        const a = t.length - 1;
        for (let s = 0; s < a; s++) {
          let e = o(t[s], t[s + 1]);
          if (n) {
            const t = Array.isArray(n) ? n[s] : n;
            e = (0, S.z)(t, e);
          }
          r.push(e);
        }
        return r;
      }
      function V(t, n, { clamp: e = !0, ease: r, mixer: a } = {}) {
        const s = t.length;
        (0, o.k)(s === n.length, 'Both input and output ranges must be the same length'),
          (0, o.k)(
            !r || !Array.isArray(r) || r.length === s - 1,
            'Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values.'
          ),
          t[0] > t[s - 1] && ((t = [].concat(t)), (n = [].concat(n)), t.reverse(), n.reverse());
        const u = U(n, r, a),
          c =
            2 === s
              ? (function([t, n], [e]) {
                  return r => e((0, h.Y)(t, n, r));
                })(t, u)
              : (function(t, n) {
                  const e = t.length,
                    r = e - 1;
                  return o => {
                    let i = 0,
                      a = !1;
                    if ((o <= t[0] ? (a = !0) : o >= t[r] && ((i = r - 1), (a = !0)), !a)) {
                      let n = 1;
                      for (; n < e && !(t[n] > o || n === r); n++);
                      i = n - 1;
                    }
                    const s = (0, h.Y)(t[i], t[i + 1], o);
                    return n[i](s);
                  };
                })(t, u);
        return e ? n => c((0, i.u)(t[0], t[s - 1], n)) : c;
      }
      var E = e(84710);
      function F(t, n) {
        return t.map(() => n || E.mZ).splice(0, t.length - 1);
      }
      function I({ from: t = 0, to: n = 1, ease: e, offset: r, duration: o = 300 }) {
        const i = { done: !1, value: t },
          a = Array.isArray(n) ? n : [t, n],
          s = (function(t, n) {
            return t.map(t => t * n);
          })(
            r && r.length === a.length
              ? r
              : (function(t) {
                  const n = t.length;
                  return t.map((t, e) => (0 !== e ? e / (n - 1) : 0));
                })(a),
            o
          );
        function u() {
          return V(s, a, { ease: Array.isArray(e) ? e : F(a, e) });
        }
        let c = u();
        return {
          next: t => ((i.value = c(t)), (i.done = t >= o), i),
          flipTarget: () => {
            a.reverse(), (c = u());
          }
        };
      }
      const q = {
        keyframes: I,
        spring: p,
        decay: function({ velocity: t = 0, from: n = 0, power: e = 0.8, timeConstant: r = 350, restDelta: o = 0.5, modifyTarget: i }) {
          const a = { done: !1, value: n };
          let s = e * t;
          const u = n + s,
            c = void 0 === i ? u : i(u);
          return (
            c !== u && (s = c - n),
            {
              next: t => {
                const n = -s * Math.exp(-t / r);
                return (a.done = !(n > o || n < -o)), (a.value = a.done ? c : c + n), a;
              },
              flipTarget: () => {}
            }
          );
        }
      };
      var B = e(54735);
      function L(t, n, e = 0) {
        return t - n - e;
      }
      const Y = t => {
        const n = ({ delta: n }) => t(n);
        return { start: () => B.ZP.update(n, !0), stop: () => B.qY.update(n) };
      };
      function z(t) {
        var n,
          e,
          {
            from: o,
            autoplay: i = !0,
            driver: a = Y,
            elapsed: s = 0,
            repeat: u = 0,
            repeatType: c = 'loop',
            repeatDelay: l = 0,
            onPlay: f,
            onStop: d,
            onComplete: h,
            onRepeat: v,
            onUpdate: m
          } = t,
          y = (0, r.__rest)(t, [
            'from',
            'autoplay',
            'driver',
            'elapsed',
            'repeat',
            'repeatType',
            'repeatDelay',
            'onPlay',
            'onStop',
            'onComplete',
            'onRepeat',
            'onUpdate'
          ]);
        let g,
          b,
          _,
          { to: A } = y,
          C = 0,
          M = y.duration,
          w = !1,
          O = !0;
        const k = (function(t) {
          if (Array.isArray(t.to)) return I;
          if (q[t.type]) return q[t.type];
          const n = new Set(Object.keys(t));
          return n.has('ease') || (n.has('duration') && !n.has('dampingRatio'))
            ? I
            : n.has('dampingRatio') || n.has('stiffness') || n.has('mass') || n.has('damping') || n.has('restSpeed') || n.has('restDelta')
            ? p
            : I;
        })(y);
        (null === (e = (n = k).needsInterpolation) || void 0 === e ? void 0 : e.call(n, o, A)) &&
          ((_ = V([0, 100], [o, A], { clamp: !1 })), (o = 0), (A = 100));
        const x = k(Object.assign(Object.assign({}, y), { from: o, to: A }));
        function D() {
          C++,
            'reverse' === c
              ? ((O = C % 2 === 0),
                (s = (function(t, n, e = 0, r = !0) {
                  return r ? L(n + -t, n, e) : n - (t - n) + e;
                })(s, M, l, O)))
              : ((s = L(s, M, l)), 'mirror' === c && x.flipTarget()),
            (w = !1),
            v && v();
        }
        function S(t) {
          if ((O || (t = -t), (s += t), !w)) {
            const t = x.next(Math.max(0, s));
            (b = t.value), _ && (b = _(b)), (w = O ? t.done : s <= 0);
          }
          null === m || void 0 === m || m(b),
            w &&
              (0 === C && ((null !== M && void 0 !== M) || (M = s)),
              C < u
                ? (function(t, n, e, r) {
                    return r ? t >= n + e : t <= -e;
                  })(s, M, l, O) && D()
                : (g.stop(), h && h()));
        }
        return (
          i && (null === f || void 0 === f || f(), (g = a(S)), g.start()),
          {
            stop: () => {
              null === d || void 0 === d || d(), g.stop();
            }
          }
        );
      }
      var G = e(99296);
      var J = e(86917);
      const Z = (t, n) => 1 - 3 * n + 3 * t,
        K = (t, n) => 3 * n - 6 * t,
        H = t => 3 * t,
        W = (t, n, e) => ((Z(n, e) * t + K(n, e)) * t + H(n)) * t,
        X = (t, n, e) => 3 * Z(n, e) * t * t + 2 * K(n, e) * t + H(n);
      const Q = 0.1;
      function tt(t, n, e, r) {
        if (t === n && e === r) return E.GE;
        const o = new Float32Array(11);
        for (let a = 0; a < 11; ++a) o[a] = W(a * Q, t, e);
        function i(n) {
          let r = 0,
            i = 1;
          for (; 10 !== i && o[i] <= n; ++i) r += Q;
          --i;
          const a = r + ((n - o[i]) / (o[i + 1] - o[i])) * Q,
            s = X(a, t, e);
          return s >= 0.001
            ? (function(t, n, e, r) {
                for (let o = 0; o < 8; ++o) {
                  const o = X(n, e, r);
                  if (0 === o) return n;
                  n -= (W(n, e, r) - t) / o;
                }
                return n;
              })(n, a, t, e)
            : 0 === s
            ? a
            : (function(t, n, e, r, o) {
                let i,
                  a,
                  s = 0;
                do {
                  (a = n + (e - n) / 2), (i = W(a, r, o) - t), i > 0 ? (e = a) : (n = a);
                } while (Math.abs(i) > 1e-7 && ++s < 10);
                return a;
              })(n, r, r + Q, t, e);
        }
        return t => (0 === t || 1 === t ? t : W(i(t), n, r));
      }
      var nt = {
          linear: E.GE,
          easeIn: E.YQ,
          easeInOut: E.mZ,
          easeOut: E.Vv,
          circIn: E.Z7,
          circInOut: E.X7,
          circOut: E.Bn,
          backIn: E.G2,
          backInOut: E.XL,
          backOut: E.CG,
          anticipate: E.LU,
          bounceIn: E.h9,
          bounceInOut: E.yD,
          bounceOut: E.gJ
        },
        et = function(t) {
          if (Array.isArray(t)) {
            (0, o.k)(4 === t.length, 'Cubic bezier arrays must contain four numerical values.');
            var n = (0, r.__read)(t, 4);
            return tt(n[0], n[1], n[2], n[3]);
          }
          return 'string' === typeof t ? ((0, o.k)(void 0 !== nt[t], "Invalid easing type '".concat(t, "'")), nt[t]) : t;
        },
        rt = function(t, n) {
          return (
            'zIndex' !== t && (!('number' !== typeof n && !Array.isArray(n)) || !('string' !== typeof n || !x.P.test(n) || n.startsWith('url(')))
          );
        },
        ot = e(48488),
        it = function() {
          return { type: 'spring', stiffness: 500, damping: 25, restSpeed: 10 };
        },
        at = function(t) {
          return { type: 'spring', stiffness: 550, damping: 0 === t ? 2 * Math.sqrt(550) : 30, restSpeed: 10 };
        },
        st = function() {
          return { type: 'keyframes', ease: 'linear', duration: 0.3 };
        },
        ut = function(t) {
          return { type: 'keyframes', duration: 0.8, values: t };
        },
        ct = {
          x: it,
          y: it,
          z: it,
          rotate: it,
          rotateX: it,
          rotateY: it,
          rotateZ: it,
          scaleX: at,
          scaleY: at,
          scale: at,
          opacity: st,
          backgroundColor: st,
          color: st,
          default: at
        },
        lt = e(79135),
        ft = !1,
        pt = e(8715);
      var dt = !1;
      function ht(t) {
        var n = t.ease,
          e = t.times,
          i = t.yoyo,
          a = t.flip,
          s = t.loop,
          u = (0, r.__rest)(t, ['ease', 'times', 'yoyo', 'flip', 'loop']),
          c = (0, r.__assign)({}, u);
        return (
          e && (c.offset = e),
          u.duration && (c.duration = (0, J.w)(u.duration)),
          u.repeatDelay && (c.repeatDelay = (0, J.w)(u.repeatDelay)),
          n &&
            (c.ease = (function(t) {
              return Array.isArray(t) && 'number' !== typeof t[0];
            })(n)
              ? n.map(et)
              : et(n)),
          'tween' === u.type && (c.type = 'keyframes'),
          (i || s || a) &&
            ((0, o.K)(!dt, 'yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options.'),
            (dt = !0),
            i ? (c.repeatType = 'reverse') : s ? (c.repeatType = 'loop') : a && (c.repeatType = 'mirror'),
            (c.repeat = s || i || a || u.repeat)),
          'spring' !== u.type && (c.type = 'keyframes'),
          c
        );
      }
      function vt(t, n, e) {
        var o;
        return (
          Array.isArray(n.to) && ((null !== (o = t.duration) && void 0 !== o) || (t.duration = 0.8)),
          (function(t) {
            Array.isArray(t.to) && null === t.to[0] && ((t.to = (0, r.__spreadArray)([], (0, r.__read)(t.to), !1)), (t.to[0] = t.from));
          })(n),
          (function(t) {
            t.when, t.delay, t.delayChildren, t.staggerChildren, t.staggerDirection, t.repeat, t.repeatType, t.repeatDelay, t.from;
            var n = (0, r.__rest)(t, [
              'when',
              'delay',
              'delayChildren',
              'staggerChildren',
              'staggerDirection',
              'repeat',
              'repeatType',
              'repeatDelay',
              'from'
            ]);
            return !!Object.keys(n).length;
          })(t) ||
            (t = (0, r.__assign)(
              (0, r.__assign)({}, t),
              (function(t, n) {
                var e;
                return (e = (0, ot.C)(n) ? ut : ct[t] || ct.default), (0, r.__assign)({ to: n }, e(n));
              })(e, n.to)
            )),
          (0, r.__assign)((0, r.__assign)({}, n), ht(t))
        );
      }
      function mt(t, n, e, i, a) {
        var s,
          u = bt(i, t),
          c = null !== (s = u.from) && void 0 !== s ? s : n.get(),
          l = rt(t, e);
        'none' === c && l && 'string' === typeof e
          ? (c = (0, lt.T)(t, e))
          : yt(c) && 'string' === typeof e
          ? (c = gt(e))
          : !Array.isArray(e) && yt(e) && 'string' === typeof c && (e = gt(c));
        var f = rt(t, c);
        return (
          (0, o.K)(
            f === l,
            'You are trying to animate '
              .concat(t, ' from "')
              .concat(c, '" to "')
              .concat(e, '". ')
              .concat(c, ' is not an animatable value - to enable this animation set ')
              .concat(c, ' to a value animatable to ')
              .concat(e, ' via the `style` property.')
          ),
          f && l && !1 !== u.type
            ? function() {
                var o = {
                  from: c,
                  to: e,
                  velocity: n.getVelocity(),
                  onComplete: a,
                  onUpdate: function(t) {
                    return n.set(t);
                  }
                };
                return 'inertia' === u.type || 'decay' === u.type
                  ? (function({
                      from: t = 0,
                      velocity: n = 0,
                      min: e,
                      max: r,
                      power: o = 0.8,
                      timeConstant: i = 750,
                      bounceStiffness: a = 500,
                      bounceDamping: s = 10,
                      restDelta: u = 1,
                      modifyTarget: c,
                      driver: l,
                      onUpdate: f,
                      onComplete: p,
                      onStop: d
                    }) {
                      let h;
                      function v(t) {
                        return (void 0 !== e && t < e) || (void 0 !== r && t > r);
                      }
                      function m(t) {
                        return void 0 === e ? r : void 0 === r || Math.abs(e - t) < Math.abs(r - t) ? e : r;
                      }
                      function y(t) {
                        null === h || void 0 === h || h.stop(),
                          (h = z(
                            Object.assign(Object.assign({}, t), {
                              driver: l,
                              onUpdate: n => {
                                var e;
                                null === f || void 0 === f || f(n), null === (e = t.onUpdate) || void 0 === e || e.call(t, n);
                              },
                              onComplete: p,
                              onStop: d
                            })
                          ));
                      }
                      function g(t) {
                        y(Object.assign({ type: 'spring', stiffness: a, damping: s, restDelta: u }, t));
                      }
                      if (v(t)) g({ from: t, velocity: n, to: m(t) });
                      else {
                        let r = o * n + t;
                        'undefined' !== typeof c && (r = c(r));
                        const a = m(r),
                          s = a === e ? -1 : 1;
                        let l, f;
                        const p = t => {
                          (l = f),
                            (f = t),
                            (n = (0, G.R)(t - l, (0, B.$B)().delta)),
                            ((1 === s && t > a) || (-1 === s && t < a)) && g({ from: t, to: a, velocity: n });
                        };
                        y({
                          type: 'decay',
                          from: t,
                          velocity: n,
                          timeConstant: i,
                          power: o,
                          restDelta: u,
                          modifyTarget: c,
                          onUpdate: v(r) ? p : void 0
                        });
                      }
                      return { stop: () => (null === h || void 0 === h ? void 0 : h.stop()) };
                    })((0, r.__assign)((0, r.__assign)({}, o), u))
                  : z(
                      (0, r.__assign)((0, r.__assign)({}, vt(u, o, t)), {
                        onUpdate: function(t) {
                          var n;
                          o.onUpdate(t), null === (n = u.onUpdate) || void 0 === n || n.call(u, t);
                        },
                        onComplete: function() {
                          var t;
                          o.onComplete(), null === (t = u.onComplete) || void 0 === t || t.call(u);
                        }
                      })
                    );
              }
            : function() {
                var t,
                  r,
                  o = (0, pt.Y)(e);
                return (
                  n.set(o),
                  a(),
                  null === (t = null === u || void 0 === u ? void 0 : u.onUpdate) || void 0 === t || t.call(u, o),
                  null === (r = null === u || void 0 === u ? void 0 : u.onComplete) || void 0 === r || r.call(u),
                  { stop: function() {} }
                );
              }
        );
      }
      function yt(t) {
        return 0 === t || ('string' === typeof t && 0 === parseFloat(t) && -1 === t.indexOf(' '));
      }
      function gt(t) {
        return 'number' === typeof t ? 0 : (0, lt.T)('', t);
      }
      function bt(t, n) {
        return t[n] || t.default || t;
      }
      function _t(t, n, e, r) {
        return (
          void 0 === r && (r = {}),
          ft && (r = { type: !1 }),
          n.start(function(o) {
            var i,
              a,
              s = mt(t, n, e, r, o),
              u = (function(t, n) {
                var e, r;
                return null !== (r = null !== (e = (bt(t, n) || {}).delay) && void 0 !== e ? e : t.delay) && void 0 !== r ? r : 0;
              })(r, t),
              c = function() {
                return (a = s());
              };
            return (
              u ? (i = window.setTimeout(c, (0, J.w)(u))) : c(),
              function() {
                clearTimeout(i), null === a || void 0 === a || a.stop();
              }
            );
          })
        );
      }
    },
    79135: function(t, n, e) {
      e.d(n, {
        T: function() {
          return a;
        }
      });
      var r = e(25738),
        o = e(28407),
        i = e(2728);
      function a(t, n) {
        var e,
          a = (0, i.A)(t);
        return a !== r.h && (a = o.P), null === (e = a.getAnimatableNone) || void 0 === e ? void 0 : e.call(a, n);
      }
    },
    2728: function(t, n, e) {
      e.d(n, {
        A: function() {
          return u;
        }
      });
      var r = e(70655),
        o = e(87405),
        i = e(25738),
        a = e(36173),
        s = (0, r.__assign)((0, r.__assign)({}, a.j), {
          color: o.$,
          backgroundColor: o.$,
          outlineColor: o.$,
          fill: o.$,
          stroke: o.$,
          borderColor: o.$,
          borderTopColor: o.$,
          borderRightColor: o.$,
          borderBottomColor: o.$,
          borderLeftColor: o.$,
          filter: i.h,
          WebkitFilter: i.h
        }),
        u = function(t) {
          return s[t];
        };
    },
    56440: function(t, n, e) {
      e.d(n, {
        $: function() {
          return a;
        },
        C: function() {
          return s;
        }
      });
      var r = e(11248),
        o = e(2969),
        i = e(88340),
        a = [
          r.Rx,
          o.px,
          o.aQ,
          o.RW,
          o.vw,
          o.vh,
          {
            test: function(t) {
              return 'auto' === t;
            },
            parse: function(t) {
              return t;
            }
          }
        ],
        s = function(t) {
          return a.find((0, i.l)(t));
        };
    },
    88340: function(t, n, e) {
      e.d(n, {
        l: function() {
          return r;
        }
      });
      var r = function(t) {
        return function(n) {
          return n.test(t);
        };
      };
    },
    77107: function(t, n, e) {
      e.d(n, {
        d5: function() {
          return u;
        },
        p_: function() {
          return f;
        }
      });
      var r = e(70655),
        o = e(81593),
        i = e(5759),
        a = e(67909),
        s = e(94714);
      function u(t, n, e) {
        var r;
        if ((void 0 === e && (e = {}), t.notifyAnimationStart(n), Array.isArray(n))) {
          var o = n.map(function(n) {
            return c(t, n, e);
          });
          r = Promise.all(o);
        } else if ('string' === typeof n) r = c(t, n, e);
        else {
          var i = 'function' === typeof n ? (0, a.x5)(t, n, e.custom) : n;
          r = l(t, i, e);
        }
        return r.then(function() {
          return t.notifyAnimationComplete(n);
        });
      }
      function c(t, n, e) {
        var o;
        void 0 === e && (e = {});
        var i = (0, a.x5)(t, n, e.custom),
          s = (i || {}).transition,
          u = void 0 === s ? t.getDefaultTransition() || {} : s;
        e.transitionOverride && (u = e.transitionOverride);
        var f = i
            ? function() {
                return l(t, i, e);
              }
            : function() {
                return Promise.resolve();
              },
          d = (null === (o = t.variantChildren) || void 0 === o
          ? void 0
          : o.size)
            ? function(o) {
                void 0 === o && (o = 0);
                var i = u.delayChildren,
                  a = void 0 === i ? 0 : i,
                  s = u.staggerChildren,
                  l = u.staggerDirection;
                return (function(t, n, e, o, i, a) {
                  void 0 === e && (e = 0);
                  void 0 === o && (o = 0);
                  void 0 === i && (i = 1);
                  var s = [],
                    u = (t.variantChildren.size - 1) * o,
                    l =
                      1 === i
                        ? function(t) {
                            return void 0 === t && (t = 0), t * o;
                          }
                        : function(t) {
                            return void 0 === t && (t = 0), u - t * o;
                          };
                  return (
                    Array.from(t.variantChildren)
                      .sort(p)
                      .forEach(function(t, o) {
                        s.push(
                          c(t, n, (0, r.__assign)((0, r.__assign)({}, a), { delay: e + l(o) })).then(function() {
                            return t.notifyAnimationComplete(n);
                          })
                        );
                      }),
                    Promise.all(s)
                  );
                })(t, n, a + o, s, l, e);
              }
            : function() {
                return Promise.resolve();
              },
          h = u.when;
        if (h) {
          var v = (0, r.__read)('beforeChildren' === h ? [f, d] : [d, f], 2),
            m = v[0],
            y = v[1];
          return m().then(y);
        }
        return Promise.all([f(), d(e.delay)]);
      }
      function l(t, n, e) {
        var a,
          u = void 0 === e ? {} : e,
          c = u.delay,
          l = void 0 === c ? 0 : c,
          f = u.transitionOverride,
          p = u.type,
          h = t.makeTargetAnimatable(n),
          v = h.transition,
          m = void 0 === v ? t.getDefaultTransition() : v,
          y = h.transitionEnd,
          g = (0, r.__rest)(h, ['transition', 'transitionEnd']);
        f && (m = f);
        var b = [],
          _ = p && (null === (a = t.animationState) || void 0 === a ? void 0 : a.getState()[p]);
        for (var A in g) {
          var C = t.getValue(A),
            M = g[A];
          if (!(!C || void 0 === M || (_ && d(_, A)))) {
            var w = (0, r.__assign)({ delay: l }, m);
            t.shouldReduceMotion && (0, s._c)(A) && (w = (0, r.__assign)((0, r.__assign)({}, w), { type: !1, delay: 0 }));
            var O = (0, o.b8)(A, C, M, w);
            b.push(O);
          }
        }
        return Promise.all(b).then(function() {
          y && (0, i.CD)(t, y);
        });
      }
      function f(t) {
        t.forEachValue(function(t) {
          return t.stop();
        });
      }
      function p(t, n) {
        return t.sortNodePosition(n);
      }
      function d(t, n) {
        var e = t.protectedKeys,
          r = t.needsAnimating,
          o = e.hasOwnProperty(n) && !0 !== r[n];
        return (r[n] = !1), o;
      }
    },
    5759: function(t, n, e) {
      e.d(n, {
        GJ: function() {
          return b;
        },
        P$: function() {
          return A;
        },
        CD: function() {
          return m;
        },
        gg: function() {
          return g;
        }
      });
      var r = e(70655),
        o = e(28407),
        i = function(t) {
          return /^0[^.\s]+$/.test(t);
        },
        a = e(8715),
        s = e(33234),
        u = e(79135),
        c = e(87405),
        l = e(56440),
        f = e(88340),
        p = (0, r.__spreadArray)((0, r.__spreadArray)([], (0, r.__read)(l.$), !1), [c.$, o.P], !1),
        d = function(t) {
          return p.find((0, f.l)(t));
        },
        h = e(67909);
      function v(t, n, e) {
        t.hasValue(n) ? t.getValue(n).set(e) : t.addValue(n, (0, s.B)(e));
      }
      function m(t, n) {
        var e = (0, h.x5)(t, n),
          o = e ? t.makeTargetAnimatable(e, !1) : {},
          i = o.transitionEnd,
          s = void 0 === i ? {} : i;
        o.transition;
        var u = (0, r.__rest)(o, ['transitionEnd', 'transition']);
        for (var c in (u = (0, r.__assign)((0, r.__assign)({}, u), s))) {
          v(t, c, (0, a.Y)(u[c]));
        }
      }
      function y(t, n) {
        (0, r.__spreadArray)([], (0, r.__read)(n), !1)
          .reverse()
          .forEach(function(e) {
            var r,
              o = t.getVariant(e);
            o && m(t, o),
              null === (r = t.variantChildren) ||
                void 0 === r ||
                r.forEach(function(t) {
                  y(t, n);
                });
          });
      }
      function g(t, n) {
        return Array.isArray(n) ? y(t, n) : 'string' === typeof n ? y(t, [n]) : void m(t, n);
      }
      function b(t, n, e) {
        var r,
          a,
          c,
          l,
          f = Object.keys(n).filter(function(n) {
            return !t.hasValue(n);
          }),
          p = f.length;
        if (p)
          for (var h = 0; h < p; h++) {
            var v = f[h],
              m = n[v],
              y = null;
            Array.isArray(m) && (y = m[0]),
              null === y && (y = null !== (a = null !== (r = e[v]) && void 0 !== r ? r : t.readValue(v)) && void 0 !== a ? a : n[v]),
              void 0 !== y &&
                null !== y &&
                ('string' === typeof y && (/^\-?\d*\.?\d+$/.test(y) || i(y)) ? (y = parseFloat(y)) : !d(y) && o.P.test(m) && (y = (0, u.T)(v, m)),
                t.addValue(v, (0, s.B)(y)),
                (null !== (c = (l = e)[v]) && void 0 !== c) || (l[v] = y),
                t.setBaseTarget(v, y));
          }
      }
      function _(t, n) {
        if (n) return (n[t] || n.default || n).from;
      }
      function A(t, n, e) {
        var r,
          o,
          i = {};
        for (var a in t) i[a] = null !== (r = _(a, n)) && void 0 !== r ? r : null === (o = e.getValue(a)) || void 0 === o ? void 0 : o.get();
        return i;
      }
    },
    10010: function(t, n, e) {
      function r(t, n) {
        -1 === t.indexOf(n) && t.push(n);
      }
      function o(t, n) {
        var e = t.indexOf(n);
        e > -1 && t.splice(e, 1);
      }
      e.d(n, {
        cl: function() {
          return o;
        },
        y4: function() {
          return r;
        }
      });
    },
    21560: function(t, n, e) {
      e.d(n, {
        L: function() {
          return o;
        }
      });
      var r = e(10010),
        o = (function() {
          function t() {
            this.subscriptions = [];
          }
          return (
            (t.prototype.add = function(t) {
              var n = this;
              return (
                (0, r.y4)(this.subscriptions, t),
                function() {
                  return (0, r.cl)(n.subscriptions, t);
                }
              );
            }),
            (t.prototype.notify = function(t, n, e) {
              var r = this.subscriptions.length;
              if (r)
                if (1 === r) this.subscriptions[0](t, n, e);
                else
                  for (var o = 0; o < r; o++) {
                    var i = this.subscriptions[o];
                    i && i(t, n, e);
                  }
            }),
            (t.prototype.getSize = function() {
              return this.subscriptions.length;
            }),
            (t.prototype.clear = function() {
              this.subscriptions.length = 0;
            }),
            t
          );
        })();
    },
    86917: function(t, n, e) {
      e.d(n, {
        w: function() {
          return r;
        }
      });
      var r = function(t) {
        return 1e3 * t;
      };
    },
    33234: function(t, n, e) {
      e.d(n, {
        B: function() {
          return s;
        }
      });
      var r = e(54735),
        o = e(99296),
        i = e(21560),
        a = (function() {
          function t(t) {
            var n,
              e = this;
            (this.version = '6.5.1'),
              (this.timeDelta = 0),
              (this.lastUpdated = 0),
              (this.updateSubscribers = new i.L()),
              (this.velocityUpdateSubscribers = new i.L()),
              (this.renderSubscribers = new i.L()),
              (this.canTrackVelocity = !1),
              (this.updateAndNotify = function(t, n) {
                void 0 === n && (n = !0), (e.prev = e.current), (e.current = t);
                var o = (0, r.$B)(),
                  i = o.delta,
                  a = o.timestamp;
                e.lastUpdated !== a && ((e.timeDelta = i), (e.lastUpdated = a), r.ZP.postRender(e.scheduleVelocityCheck)),
                  e.prev !== e.current && e.updateSubscribers.notify(e.current),
                  e.velocityUpdateSubscribers.getSize() && e.velocityUpdateSubscribers.notify(e.getVelocity()),
                  n && e.renderSubscribers.notify(e.current);
              }),
              (this.scheduleVelocityCheck = function() {
                return r.ZP.postRender(e.velocityCheck);
              }),
              (this.velocityCheck = function(t) {
                t.timestamp !== e.lastUpdated && ((e.prev = e.current), e.velocityUpdateSubscribers.notify(e.getVelocity()));
              }),
              (this.hasAnimated = !1),
              (this.prev = this.current = t),
              (this.canTrackVelocity = ((n = this.current), !isNaN(parseFloat(n))));
          }
          return (
            (t.prototype.onChange = function(t) {
              return this.updateSubscribers.add(t);
            }),
            (t.prototype.clearListeners = function() {
              this.updateSubscribers.clear();
            }),
            (t.prototype.onRenderRequest = function(t) {
              return t(this.get()), this.renderSubscribers.add(t);
            }),
            (t.prototype.attach = function(t) {
              this.passiveEffect = t;
            }),
            (t.prototype.set = function(t, n) {
              void 0 === n && (n = !0), n && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, n);
            }),
            (t.prototype.get = function() {
              return this.current;
            }),
            (t.prototype.getPrevious = function() {
              return this.prev;
            }),
            (t.prototype.getVelocity = function() {
              return this.canTrackVelocity ? (0, o.R)(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0;
            }),
            (t.prototype.start = function(t) {
              var n = this;
              return (
                this.stop(),
                new Promise(function(e) {
                  (n.hasAnimated = !0), (n.stopAnimation = t(e));
                }).then(function() {
                  return n.clearAnimation();
                })
              );
            }),
            (t.prototype.stop = function() {
              this.stopAnimation && this.stopAnimation(), this.clearAnimation();
            }),
            (t.prototype.isAnimating = function() {
              return !!this.stopAnimation;
            }),
            (t.prototype.clearAnimation = function() {
              this.stopAnimation = null;
            }),
            (t.prototype.destroy = function() {
              this.updateSubscribers.clear(), this.renderSubscribers.clear(), this.stop();
            }),
            t
          );
        })();
      function s(t) {
        return new a(t);
      }
    },
    54735: function(t, n, e) {
      e.d(n, {
        qY: function() {
          return d;
        },
        ZP: function() {
          return b;
        },
        iW: function() {
          return h;
        },
        $B: function() {
          return g;
        }
      });
      const r = (1 / 60) * 1e3,
        o = 'undefined' !== typeof performance ? () => performance.now() : () => Date.now(),
        i = 'undefined' !== typeof window ? t => window.requestAnimationFrame(t) : t => setTimeout(() => t(o()), r);
      let a = !0,
        s = !1,
        u = !1;
      const c = { delta: 0, timestamp: 0 },
        l = ['read', 'update', 'preRender', 'render', 'postRender'],
        f = l.reduce(
          (t, n) => (
            (t[n] = (function(t) {
              let n = [],
                e = [],
                r = 0,
                o = !1,
                i = !1;
              const a = new WeakSet(),
                s = {
                  schedule: (t, i = !1, s = !1) => {
                    const u = s && o,
                      c = u ? n : e;
                    return i && a.add(t), -1 === c.indexOf(t) && (c.push(t), u && o && (r = n.length)), t;
                  },
                  cancel: t => {
                    const n = e.indexOf(t);
                    -1 !== n && e.splice(n, 1), a.delete(t);
                  },
                  process: u => {
                    if (o) i = !0;
                    else {
                      if (((o = !0), ([n, e] = [e, n]), (e.length = 0), (r = n.length), r))
                        for (let e = 0; e < r; e++) {
                          const r = n[e];
                          r(u), a.has(r) && (s.schedule(r), t());
                        }
                      (o = !1), i && ((i = !1), s.process(u));
                    }
                  }
                };
              return s;
            })(() => (s = !0))),
            t
          ),
          {}
        ),
        p = l.reduce((t, n) => {
          const e = f[n];
          return (t[n] = (t, n = !1, r = !1) => (s || y(), e.schedule(t, n, r))), t;
        }, {}),
        d = l.reduce((t, n) => ((t[n] = f[n].cancel), t), {}),
        h = l.reduce((t, n) => ((t[n] = () => f[n].process(c)), t), {}),
        v = t => f[t].process(c),
        m = t => {
          (s = !1),
            (c.delta = a ? r : Math.max(Math.min(t - c.timestamp, 40), 1)),
            (c.timestamp = t),
            (u = !0),
            l.forEach(v),
            (u = !1),
            s && ((a = !1), i(m));
        },
        y = () => {
          (s = !0), (a = !0), u || i(m);
        },
        g = () => c;
      var b = p;
    },
    84710: function(t, n, e) {
      e.d(n, {
        LU: function() {
          return y;
        },
        G2: function() {
          return h;
        },
        XL: function() {
          return m;
        },
        CG: function() {
          return v;
        },
        h9: function() {
          return b;
        },
        yD: function() {
          return _;
        },
        gJ: function() {
          return g;
        },
        Z7: function() {
          return f;
        },
        X7: function() {
          return d;
        },
        Bn: function() {
          return p;
        },
        YQ: function() {
          return s;
        },
        mZ: function() {
          return l;
        },
        Vv: function() {
          return c;
        },
        GE: function() {
          return a;
        }
      });
      const r = t => n => 1 - t(1 - n),
        o = t => n => (n <= 0.5 ? t(2 * n) / 2 : (2 - t(2 * (1 - n))) / 2),
        i = t => n => n * n * ((t + 1) * n - t),
        a = t => t,
        s = ((u = 2), t => Math.pow(t, u));
      var u;
      const c = r(s),
        l = o(s),
        f = t => 1 - Math.sin(Math.acos(t)),
        p = r(f),
        d = o(p),
        h = i(1.525),
        v = r(h),
        m = o(h),
        y = (t => {
          const n = i(t);
          return t => ((t *= 2) < 1 ? 0.5 * n(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))));
        })(1.525),
        g = t => {
          if (1 === t || 0 === t) return t;
          const n = t * t;
          return t < 0.36363636363636365
            ? 7.5625 * n
            : t < 0.7272727272727273
            ? 9.075 * n - 9.9 * t + 3.4
            : t < 0.9
            ? 12.066481994459833 * n - 19.63545706371191 * t + 8.898060941828255
            : 10.8 * t * t - 20.52 * t + 10.72;
        },
        b = r(g),
        _ = t => (t < 0.5 ? 0.5 * (1 - g(1 - 2 * t)) : 0.5 * g(2 * t - 1) + 0.5);
    },
    6773: function(t, n, e) {
      e.d(n, {
        u: function() {
          return r;
        }
      });
      const r = (t, n, e) => Math.min(Math.max(e, t), n);
    },
    80734: function(t, n, e) {
      e.d(n, {
        e: function() {
          return r;
        }
      });
      const r = t => 'number' === typeof t;
    },
    72453: function(t, n, e) {
      e.d(n, {
        C: function() {
          return r;
        }
      });
      const r = (t, n, e) => -e * t + e * n + t;
    },
    9897: function(t, n, e) {
      e.d(n, {
        z: function() {
          return o;
        }
      });
      const r = (t, n) => e => n(t(e)),
        o = (...t) => t.reduce(r);
    },
    9326: function(t, n, e) {
      e.d(n, {
        Y: function() {
          return r;
        }
      });
      const r = (t, n, e) => {
        const r = n - t;
        return 0 === r ? 1 : (e - t) / r;
      };
    },
    99296: function(t, n, e) {
      function r(t, n) {
        return n ? t * (1e3 / n) : 0;
      }
      e.d(n, {
        R: function() {
          return r;
        }
      });
    },
    22960: function(t, n, e) {
      e.d(n, {
        $: function() {
          return o;
        }
      });
      var r = e(78059);
      const o = {
        test: (0, e(23953).i)('#'),
        parse: function(t) {
          let n = '',
            e = '',
            r = '',
            o = '';
          return (
            t.length > 5
              ? ((n = t.substr(1, 2)), (e = t.substr(3, 2)), (r = t.substr(5, 2)), (o = t.substr(7, 2)))
              : ((n = t.substr(1, 1)), (e = t.substr(2, 1)), (r = t.substr(3, 1)), (o = t.substr(4, 1)), (n += n), (e += e), (r += r), (o += o)),
            { red: parseInt(n, 16), green: parseInt(e, 16), blue: parseInt(r, 16), alpha: o ? parseInt(o, 16) / 255 : 1 }
          );
        },
        transform: r.m.transform
      };
    },
    34582: function(t, n, e) {
      e.d(n, {
        J: function() {
          return s;
        }
      });
      var r = e(11248),
        o = e(2969),
        i = e(16777),
        a = e(23953);
      const s = {
        test: (0, a.i)('hsl', 'hue'),
        parse: (0, a.d)('hue', 'saturation', 'lightness'),
        transform: ({ hue: t, saturation: n, lightness: e, alpha: a = 1 }) =>
          'hsla(' +
          Math.round(t) +
          ', ' +
          o.aQ.transform((0, i.Nw)(n)) +
          ', ' +
          o.aQ.transform((0, i.Nw)(e)) +
          ', ' +
          (0, i.Nw)(r.Fq.transform(a)) +
          ')'
      };
    },
    87405: function(t, n, e) {
      e.d(n, {
        $: function() {
          return s;
        }
      });
      var r = e(16777),
        o = e(22960),
        i = e(34582),
        a = e(78059);
      const s = {
        test: t => a.m.test(t) || o.$.test(t) || i.J.test(t),
        parse: t => (a.m.test(t) ? a.m.parse(t) : i.J.test(t) ? i.J.parse(t) : o.$.parse(t)),
        transform: t => ((0, r.HD)(t) ? t : t.hasOwnProperty('red') ? a.m.transform(t) : i.J.transform(t))
      };
    },
    78059: function(t, n, e) {
      e.d(n, {
        m: function() {
          return u;
        }
      });
      var r = e(11248),
        o = e(16777),
        i = e(23953);
      const a = (0, o.uZ)(0, 255),
        s = Object.assign(Object.assign({}, r.Rx), { transform: t => Math.round(a(t)) }),
        u = {
          test: (0, i.i)('rgb', 'red'),
          parse: (0, i.d)('red', 'green', 'blue'),
          transform: ({ red: t, green: n, blue: e, alpha: i = 1 }) =>
            'rgba(' + s.transform(t) + ', ' + s.transform(n) + ', ' + s.transform(e) + ', ' + (0, o.Nw)(r.Fq.transform(i)) + ')'
        };
    },
    23953: function(t, n, e) {
      e.d(n, {
        d: function() {
          return i;
        },
        i: function() {
          return o;
        }
      });
      var r = e(16777);
      const o = (t, n) => e => Boolean(((0, r.HD)(e) && r.mj.test(e) && e.startsWith(t)) || (n && Object.prototype.hasOwnProperty.call(e, n))),
        i = (t, n, e) => o => {
          if (!(0, r.HD)(o)) return o;
          const [i, a, s, u] = o.match(r.KP);
          return { [t]: parseFloat(i), [n]: parseFloat(a), [e]: parseFloat(s), alpha: void 0 !== u ? parseFloat(u) : 1 };
        };
    },
    25738: function(t, n, e) {
      e.d(n, {
        h: function() {
          return u;
        }
      });
      var r = e(28407),
        o = e(16777);
      const i = new Set(['brightness', 'contrast', 'saturate', 'opacity']);
      function a(t) {
        let [n, e] = t.slice(0, -1).split('(');
        if ('drop-shadow' === n) return t;
        const [r] = e.match(o.KP) || [];
        if (!r) return t;
        const a = e.replace(r, '');
        let s = i.has(n) ? 1 : 0;
        return r !== e && (s *= 100), n + '(' + s + a + ')';
      }
      const s = /([a-z-]*)\(.*?\)/g,
        u = Object.assign(Object.assign({}, r.P), {
          getAnimatableNone: t => {
            const n = t.match(s);
            return n ? n.map(a).join(' ') : t;
          }
        });
    },
    28407: function(t, n, e) {
      e.d(n, {
        P: function() {
          return p;
        }
      });
      var r = e(87405),
        o = e(11248),
        i = e(16777);
      const a = '${c}',
        s = '${n}';
      function u(t) {
        'number' === typeof t && (t = `${t}`);
        const n = [];
        let e = 0;
        const u = t.match(i.dA);
        u && ((e = u.length), (t = t.replace(i.dA, a)), n.push(...u.map(r.$.parse)));
        const c = t.match(i.KP);
        return c && ((t = t.replace(i.KP, s)), n.push(...c.map(o.Rx.parse))), { values: n, numColors: e, tokenised: t };
      }
      function c(t) {
        return u(t).values;
      }
      function l(t) {
        const { values: n, numColors: e, tokenised: o } = u(t),
          c = n.length;
        return t => {
          let n = o;
          for (let o = 0; o < c; o++) n = n.replace(o < e ? a : s, o < e ? r.$.transform(t[o]) : (0, i.Nw)(t[o]));
          return n;
        };
      }
      const f = t => ('number' === typeof t ? 0 : t);
      const p = {
        test: function(t) {
          var n, e, r, o;
          return (
            isNaN(t) &&
            (0, i.HD)(t) &&
            (null !== (e = null === (n = t.match(i.KP)) || void 0 === n ? void 0 : n.length) && void 0 !== e ? e : 0) +
              (null !== (o = null === (r = t.match(i.dA)) || void 0 === r ? void 0 : r.length) && void 0 !== o ? o : 0) >
              0
          );
        },
        parse: c,
        createTransformer: l,
        getAnimatableNone: function(t) {
          const n = c(t);
          return l(t)(n.map(f));
        }
      };
    }
  }
]);
