'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [984],
  {
    47568: function(n, t, e) {
      function r(n, t, e, r, o, a, i) {
        try {
          var u = n[a](i),
            s = u.value;
        } catch (l) {
          return void e(l);
        }
        u.done ? t(s) : Promise.resolve(s).then(r, o);
      }
      function o(n) {
        return function() {
          var t = this,
            e = arguments;
          return new Promise(function(o, a) {
            var i = n.apply(t, e);
            function u(n) {
              r(i, o, a, u, s, 'next', n);
            }
            function s(n) {
              r(i, o, a, u, s, 'throw', n);
            }
            u(void 0);
          });
        };
      }
      e.d(t, {
        Z: function() {
          return o;
        }
      });
    },
    59395: function(n, t, e) {
      e.d(t, {
        m: function() {
          return X;
        }
      });
      var r = e(70655),
        o = e(67294),
        a = e(49304),
        i = e(9442),
        u = e(24394),
        s = e(70398),
        l = Object.keys(i.A),
        c = l.length;
      var f = e(16014),
        d = (0, o.createContext)({});
      var v = e(240),
        p = e(58868),
        m = e(11741),
        y = { current: null },
        _ = !1;
      function g() {
        return (
          !_ &&
            (function() {
              if (((_ = !0), m.j))
                if (window.matchMedia) {
                  var n = window.matchMedia('(prefers-reduced-motion)'),
                    t = function() {
                      return (y.current = n.matches);
                    };
                  n.addListener(t), t();
                } else y.current = !1;
            })(),
          (0, r.__read)((0, o.useState)(y.current), 1)[0]
        );
      }
      function h(n, t, e, r) {
        var a = (0, o.useContext)(s.u),
          i = (0, o.useContext)(d).visualElement,
          u = (0, o.useContext)(v.O),
          l = (function() {
            var n = g(),
              t = (0, o.useContext)(f._).reducedMotion;
            return 'never' !== t && ('always' === t || n);
          })(),
          c = (0, o.useRef)(void 0);
        r || (r = a.renderer),
          !c.current &&
            r &&
            (c.current = r(n, {
              visualState: t,
              parent: i,
              props: e,
              presenceId: null === u || void 0 === u ? void 0 : u.id,
              blockInitialAnimation: !1 === (null === u || void 0 === u ? void 0 : u.initial),
              shouldReduceMotion: l
            }));
        var m = c.current;
        return (
          (0, p.L)(function() {
            null === m || void 0 === m || m.syncRender();
          }),
          (0, o.useEffect)(function() {
            var n;
            null === (n = null === m || void 0 === m ? void 0 : m.animationState) || void 0 === n || n.animateChanges();
          }),
          (0, p.L)(function() {
            return function() {
              return null === m || void 0 === m ? void 0 : m.notifyUnmount();
            };
          }, []),
          m
        );
      }
      var C = e(51804);
      var E = e(67909);
      function w(n) {
        var t = (function(n, t) {
            if ((0, E.O6)(n)) {
              var e = n.initial,
                r = n.animate;
              return { initial: !1 === e || (0, E.$L)(e) ? e : void 0, animate: (0, E.$L)(r) ? r : void 0 };
            }
            return !1 !== n.inherit ? t : {};
          })(n, (0, o.useContext)(d)),
          e = t.initial,
          r = t.animate;
        return (0, o.useMemo)(
          function() {
            return { initial: e, animate: r };
          },
          [x(e), x(r)]
        );
      }
      function x(n) {
        return Array.isArray(n) ? n.join(' ') : n;
      }
      var S = e(96681),
        b = e(93083),
        M = 1;
      var j = e(25364),
        V = e(41705);
      var A = (function(n) {
        function t() {
          return (null !== n && n.apply(this, arguments)) || this;
        }
        return (
          (0, r.__extends)(t, n),
          (t.prototype.getSnapshotBeforeUpdate = function() {
            return this.updateProps(), null;
          }),
          (t.prototype.componentDidUpdate = function() {}),
          (t.prototype.updateProps = function() {
            var n = this.props,
              t = n.visualElement,
              e = n.props;
            t && t.setProps(e);
          }),
          (t.prototype.render = function() {
            return this.props.children;
          }),
          t
        );
      })(o.Component);
      function k(n) {
        var t = n.preloadedFeatures,
          e = n.createVisualElement,
          v = n.projectionNodeConstructor,
          p = n.useRender,
          y = n.useVisualState,
          _ = n.Component;
        return (
          t && (0, i.K)(t),
          (0, o.forwardRef)(function(n, g) {
            var E = (function(n) {
              var t,
                e = n.layoutId,
                r = null === (t = (0, o.useContext)(j.p)) || void 0 === t ? void 0 : t.id;
              return r && void 0 !== e ? r + '-' + e : e;
            })(n);
            n = (0, r.__assign)((0, r.__assign)({}, n), { layoutId: E });
            var x = (0, o.useContext)(f._),
              k = null,
              P = w(n),
              L = x.isStatic
                ? void 0
                : (0, S.h)(function() {
                    if (b.V.hasEverUpdated) return M++;
                  }),
              R = y(n, x.isStatic);
            return (
              !x.isStatic &&
                m.j &&
                ((P.visualElement = h(_, R, (0, r.__assign)((0, r.__assign)({}, x), n), e)),
                (function(n, t, e, r) {
                  var a,
                    i = t.layoutId,
                    u = t.layout,
                    s = t.drag,
                    l = t.dragConstraints,
                    c = t.layoutScroll,
                    f = (0, o.useContext)(V.g);
                  r &&
                    e &&
                    !(null === e || void 0 === e ? void 0 : e.projection) &&
                    ((e.projection = new r(n, e.getLatestValues(), null === (a = e.parent) || void 0 === a ? void 0 : a.projection)),
                    e.projection.setOptions({
                      layoutId: i,
                      layout: u,
                      alwaysMeasureLayout: Boolean(s) || (l && (0, C.I)(l)),
                      visualElement: e,
                      scheduleRender: function() {
                        return e.scheduleRender();
                      },
                      animationType: 'string' === typeof u ? u : 'both',
                      initialPromotionConfig: f,
                      layoutScroll: c
                    }));
                })(L, n, P.visualElement, v || i.A.projectionNodeConstructor),
                (k = (function(n, t, e) {
                  var f = [],
                    d = (0, o.useContext)(s.u);
                  if (!t) return null;
                  'production' !== a.O &&
                    e &&
                    d.strict &&
                    (0, u.k)(
                      !1,
                      'You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.'
                    );
                  for (var v = 0; v < c; v++) {
                    var p = l[v],
                      m = i.A[p],
                      y = m.isEnabled,
                      _ = m.Component;
                    y(n) && _ && f.push(o.createElement(_, (0, r.__assign)({ key: p }, n, { visualElement: t })));
                  }
                  return f;
                })(n, P.visualElement, t))),
              o.createElement(
                A,
                { visualElement: P.visualElement, props: (0, r.__assign)((0, r.__assign)({}, x), n) },
                k,
                o.createElement(
                  d.Provider,
                  { value: P },
                  p(
                    _,
                    n,
                    L,
                    (function(n, t, e) {
                      return (0, o.useCallback)(
                        function(r) {
                          var o;
                          r && (null === (o = n.mount) || void 0 === o || o.call(n, r)),
                            t && (r ? t.mount(r) : t.unmount()),
                            e && ('function' === typeof e ? e(r) : (0, C.I)(e) && (e.current = r));
                        },
                        [t]
                      );
                    })(R, P.visualElement, g),
                    R,
                    x.isStatic,
                    P.visualElement
                  )
                )
              )
            );
          })
        );
      }
      var P = e(62627),
        L = e(56816),
        R = e(40406),
        O = e(38057),
        I = function() {
          return { style: {}, transform: {}, transformKeys: [], transformOrigin: {}, vars: {} };
        };
      function B(n, t, e) {
        for (var r in t) (0, R.i)(t[r]) || (0, L.j)(r, e) || (n[r] = t[r]);
      }
      function U(n, t, e) {
        var a = {};
        return (
          B(a, n.style || {}, n),
          Object.assign(
            a,
            (function(n, t, e) {
              var a = n.transformTemplate;
              return (0, o.useMemo)(
                function() {
                  var n = { style: {}, transform: {}, transformKeys: [], transformOrigin: {}, vars: {} };
                  (0, O.r)(n, t, { enableHardwareAcceleration: !e }, a);
                  var o = n.vars,
                    i = n.style;
                  return (0, r.__assign)((0, r.__assign)({}, o), i);
                },
                [t]
              );
            })(n, t, e)
          ),
          n.transformValues && (a = n.transformValues(a)),
          a
        );
      }
      function T(n, t, e) {
        var r = {},
          o = U(n, t, e);
        return (
          Boolean(n.drag) &&
            !1 !== n.dragListener &&
            ((r.draggable = !1),
            (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = 'none'),
            (o.touchAction = !0 === n.drag ? 'none' : 'pan-'.concat('x' === n.drag ? 'y' : 'x'))),
          (r.style = o),
          r
        );
      }
      var F = e(91492),
        K = e(85415),
        N = function() {
          return (0, r.__assign)((0, r.__assign)({}, { style: {}, transform: {}, transformKeys: [], transformOrigin: {}, vars: {} }), { attrs: {} });
        };
      function H(n, t) {
        var e = (0, o.useMemo)(
          function() {
            var e = N();
            return (
              (0, K.i)(e, t, { enableHardwareAcceleration: !1 }, n.transformTemplate),
              (0, r.__assign)((0, r.__assign)({}, e.attrs), { style: (0, r.__assign)({}, e.style) })
            );
          },
          [t]
        );
        if (n.style) {
          var a = {};
          B(a, n.style, n), (e.style = (0, r.__assign)((0, r.__assign)({}, a), e.style));
        }
        return e;
      }
      function q(n) {
        void 0 === n && (n = !1);
        return function(t, e, a, i, u, s) {
          var l = u.latestValues,
            c = ((0, P.q)(t) ? H : T)(e, l, s),
            f = (0, F.L)(e, 'string' === typeof t, n),
            d = (0, r.__assign)((0, r.__assign)((0, r.__assign)({}, f), c), { ref: i });
          return a && (d['data-projection-id'] = a), (0, o.createElement)(t, d);
        };
      }
      var W = e(68504),
        $ = e(16832),
        z = e(2445),
        D = e(16399);
      function Q(n, t, e, r) {
        var o = n.scrapeMotionValuesFromProps,
          a = n.createRenderState,
          i = n.onMount,
          u = { latestValues: Z(t, e, r, o), renderState: a() };
        return (
          i &&
            (u.mount = function(n) {
              return i(t, n, u);
            }),
          u
        );
      }
      var Y = function(n) {
        return function(t, e) {
          var r = (0, o.useContext)(d),
            a = (0, o.useContext)(v.O);
          return e
            ? Q(n, t, r, a)
            : (0, S.h)(function() {
                return Q(n, t, r, a);
              });
        };
      };
      function Z(n, t, e, o) {
        var a = {},
          i = !1 === (null === e || void 0 === e ? void 0 : e.initial),
          u = o(n);
        for (var s in u) a[s] = (0, D.b)(u[s]);
        var l = n.initial,
          c = n.animate,
          f = (0, E.O6)(n),
          d = (0, E.e8)(n);
        t && d && !f && !1 !== n.inherit && ((null !== l && void 0 !== l) || (l = t.initial), (null !== c && void 0 !== c) || (c = t.animate));
        var v = i || !1 === l,
          p = v ? c : l;
        p &&
          'boolean' !== typeof p &&
          !(0, z.H)(p) &&
          (Array.isArray(p) ? p : [p]).forEach(function(t) {
            var e = (0, E.oQ)(n, t);
            if (e) {
              var o = e.transitionEnd;
              e.transition;
              var i = (0, r.__rest)(e, ['transitionEnd', 'transition']);
              for (var u in i) {
                var s = i[u];
                if (Array.isArray(s)) s = s[v ? s.length - 1 : 0];
                null !== s && (a[u] = s);
              }
              for (var u in o) a[u] = o[u];
            }
          });
        return a;
      }
      var G = {
          useVisualState: Y({
            scrapeMotionValuesFromProps: $.U,
            createRenderState: N,
            onMount: function(n, t, e) {
              var r = e.renderState,
                o = e.latestValues;
              try {
                r.dimensions = 'function' === typeof t.getBBox ? t.getBBox() : t.getBoundingClientRect();
              } catch (a) {
                r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
              (0, K.i)(r, o, { enableHardwareAcceleration: !1 }, n.transformTemplate), (0, W.K)(t, r);
            }
          })
        },
        J = { useVisualState: Y({ scrapeMotionValuesFromProps: e(50189).U, createRenderState: I }) };
      var X = (function(n) {
        function t(t, e) {
          return void 0 === e && (e = {}), k(n(t, e));
        }
        if ('undefined' === typeof Proxy) return t;
        var e = new Map();
        return new Proxy(t, {
          get: function(n, r) {
            return e.has(r) || e.set(r, t(r)), e.get(r);
          }
        });
      })(function(n, t, e, o, a) {
        var i = t.forwardMotionProps,
          u = void 0 !== i && i,
          s = (0, P.q)(n) ? G : J;
        return (0,
        r.__assign)((0, r.__assign)({}, s), { preloadedFeatures: e, useRender: q(u), createVisualElement: o, projectionNodeConstructor: a, Component: n });
      });
    },
    58868: function(n, t, e) {
      e.d(t, {
        L: function() {
          return o;
        }
      });
      var r = e(67294),
        o = e(11741).j ? r.useLayoutEffect : r.useEffect;
    }
  }
]);
