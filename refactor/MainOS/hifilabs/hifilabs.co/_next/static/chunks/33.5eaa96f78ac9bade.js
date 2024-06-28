'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [33],
  {
    12064: function(t, e, n) {
      n.d(e, {
        j: function() {
          return a;
        }
      });
      var i = n(33234),
        o = n(40406),
        r = n(81593);
      function a(t, e, n) {
        void 0 === n && (n = {});
        var a = (0, o.i)(t) ? t : (0, i.B)(t);
        return (
          (0, r.b8)('', a, e, n),
          {
            stop: function() {
              return a.stop();
            },
            isAnimating: function() {
              return a.isAnimating();
            }
          }
        );
      }
    },
    4033: function(t, e, n) {
      n.d(e, {
        g: function() {
          return Kn;
        }
      });
      var i = n(70655),
        o = n(67294),
        r = n(24394);
      function a(t) {
        return 'undefined' !== typeof PointerEvent && t instanceof PointerEvent ? !('mouse' !== t.pointerType) : t instanceof MouseEvent;
      }
      function s(t) {
        return !!t.touches;
      }
      var u = { pageX: 0, pageY: 0 };
      function l(t, e) {
        void 0 === e && (e = 'page');
        var n = t.touches[0] || t.changedTouches[0] || u;
        return { x: n[e + 'X'], y: n[e + 'Y'] };
      }
      function c(t, e) {
        return void 0 === e && (e = 'page'), { x: t[e + 'X'], y: t[e + 'Y'] };
      }
      function d(t, e) {
        return void 0 === e && (e = 'page'), { point: s(t) ? l(t, e) : c(t, e) };
      }
      var v = function(t, e) {
          void 0 === e && (e = !1);
          var n,
            i = function(e) {
              return t(e, d(e));
            };
          return e
            ? ((n = i),
              function(t) {
                var e = t instanceof MouseEvent;
                (!e || (e && 0 === t.button)) && n(t);
              })
            : i;
        },
        p = n(54735),
        h = n(86917);
      function f(t, e, n, i) {
        return (
          void 0 === i && (i = { passive: !0 }),
          t.addEventListener(e, n, i),
          function() {
            return t.removeEventListener(e, n);
          }
        );
      }
      function m(t, e, n, i) {
        (0, o.useEffect)(
          function() {
            var o = t.current;
            if (n && o) return f(o, e, n, i);
          },
          [t, e, n, i]
        );
      }
      var g = n(11741),
        y = {
          pointerdown: 'mousedown',
          pointermove: 'mousemove',
          pointerup: 'mouseup',
          pointercancel: 'mousecancel',
          pointerover: 'mouseover',
          pointerout: 'mouseout',
          pointerenter: 'mouseenter',
          pointerleave: 'mouseleave'
        },
        x = { pointerdown: 'touchstart', pointermove: 'touchmove', pointerup: 'touchend', pointercancel: 'touchcancel' };
      function P(t) {
        return g.j && null === window.onpointerdown ? t : g.j && null === window.ontouchstart ? x[t] : g.j && null === window.onmousedown ? y[t] : t;
      }
      function E(t, e, n, i) {
        return f(t, P(e), v(n, 'pointerdown' === e), i);
      }
      function T(t, e, n, i) {
        return m(t, P(e), n && v(n, 'pointerdown' === e), i);
      }
      const V = t => t.hasOwnProperty('x') && t.hasOwnProperty('y'),
        _ = t => V(t) && t.hasOwnProperty('z');
      var A = n(80734);
      const S = (t, e) => Math.abs(t - e);
      function w(t, e) {
        if ((0, A.e)(t) && (0, A.e)(e)) return S(t, e);
        if (V(t) && V(e)) {
          const n = S(t.x, e.x),
            i = S(t.y, e.y),
            o = _(t) && _(e) ? S(t.z, e.z) : 0;
          return Math.sqrt(Math.pow(n, 2) + Math.pow(i, 2) + Math.pow(o, 2));
        }
      }
      var b = n(9897),
        C = (function() {
          function t(t, e, n) {
            var o = this,
              r = (void 0 === n ? {} : n).transformPagePoint;
            if (
              ((this.startEvent = null),
              (this.lastMoveEvent = null),
              (this.lastMoveEventInfo = null),
              (this.handlers = {}),
              (this.updatePoint = function() {
                if (o.lastMoveEvent && o.lastMoveEventInfo) {
                  var t = D(o.lastMoveEventInfo, o.history),
                    e = null !== o.startEvent,
                    n = w(t.offset, { x: 0, y: 0 }) >= 3;
                  if (e || n) {
                    var r = t.point,
                      a = (0, p.$B)().timestamp;
                    o.history.push((0, i.__assign)((0, i.__assign)({}, r), { timestamp: a }));
                    var s = o.handlers,
                      u = s.onStart,
                      l = s.onMove;
                    e || (u && u(o.lastMoveEvent, t), (o.startEvent = o.lastMoveEvent)), l && l(o.lastMoveEvent, t);
                  }
                }
              }),
              (this.handlePointerMove = function(t, e) {
                (o.lastMoveEvent = t),
                  (o.lastMoveEventInfo = L(e, o.transformPagePoint)),
                  a(t) && 0 === t.buttons ? o.handlePointerUp(t, e) : p.ZP.update(o.updatePoint, !0);
              }),
              (this.handlePointerUp = function(t, e) {
                o.end();
                var n = o.handlers,
                  i = n.onEnd,
                  r = n.onSessionEnd,
                  a = D(L(e, o.transformPagePoint), o.history);
                o.startEvent && i && i(t, a), r && r(t, a);
              }),
              !(s(t) && t.touches.length > 1))
            ) {
              (this.handlers = e), (this.transformPagePoint = r);
              var u = L(d(t), this.transformPagePoint),
                l = u.point,
                c = (0, p.$B)().timestamp;
              this.history = [(0, i.__assign)((0, i.__assign)({}, l), { timestamp: c })];
              var v = e.onSessionStart;
              v && v(t, D(u, this.history)),
                (this.removeListeners = (0, b.z)(
                  E(window, 'pointermove', this.handlePointerMove),
                  E(window, 'pointerup', this.handlePointerUp),
                  E(window, 'pointercancel', this.handlePointerUp)
                ));
            }
          }
          return (
            (t.prototype.updateHandlers = function(t) {
              this.handlers = t;
            }),
            (t.prototype.end = function() {
              this.removeListeners && this.removeListeners(), p.qY.update(this.updatePoint);
            }),
            t
          );
        })();
      function L(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function R(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function D(t, e) {
        var n = t.point;
        return { point: n, delta: R(n, k(e)), offset: R(n, M(e)), velocity: B(e, 0.1) };
      }
      function M(t) {
        return t[0];
      }
      function k(t) {
        return t[t.length - 1];
      }
      function B(t, e) {
        if (t.length < 2) return { x: 0, y: 0 };
        for (var n = t.length - 1, i = null, o = k(t); n >= 0 && ((i = t[n]), !(o.timestamp - i.timestamp > (0, h.w)(e))); ) n--;
        if (!i) return { x: 0, y: 0 };
        var r = (o.timestamp - i.timestamp) / 1e3;
        if (0 === r) return { x: 0, y: 0 };
        var a = { x: (o.x - i.x) / r, y: (o.y - i.y) / r };
        return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
      }
      function F(t) {
        var e = null;
        return function() {
          return (
            null === e &&
            ((e = t),
            function() {
              e = null;
            })
          );
        };
      }
      var j = F('dragHorizontal'),
        I = F('dragVertical');
      function U(t) {
        var e = !1;
        if ('y' === t) e = I();
        else if ('x' === t) e = j();
        else {
          var n = j(),
            i = I();
          n && i
            ? (e = function() {
                n(), i();
              })
            : (n && n(), i && i());
        }
        return e;
      }
      function O() {
        var t = U(!0);
        return !t || (t(), !1);
      }
      var N = n(51804),
        z = n(72453),
        G = n(9326),
        H = n(6773);
      function Y(t) {
        return t.max - t.min;
      }
      function W(t, e, n) {
        return void 0 === e && (e = 0), void 0 === n && (n = 0.01), w(t, e) < n;
      }
      function X(t, e, n, i) {
        void 0 === i && (i = 0.5),
          (t.origin = i),
          (t.originPoint = (0, z.C)(e.min, e.max, t.origin)),
          (t.scale = Y(n) / Y(e)),
          (W(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
          (t.translate = (0, z.C)(n.min, n.max, t.origin) - t.originPoint),
          (W(t.translate) || isNaN(t.translate)) && (t.translate = 0);
      }
      function q(t, e, n, i) {
        X(t.x, e.x, n.x, null === i || void 0 === i ? void 0 : i.originX), X(t.y, e.y, n.y, null === i || void 0 === i ? void 0 : i.originY);
      }
      function $(t, e, n) {
        (t.min = n.min + e.min), (t.max = t.min + Y(e));
      }
      function Z(t, e, n) {
        (t.min = e.min - n.min), (t.max = t.min + Y(e));
      }
      function K(t, e, n) {
        Z(t.x, e.x, n.x), Z(t.y, e.y, n.y);
      }
      function Q(t, e, n) {
        return { min: void 0 !== e ? t.min + e : void 0, max: void 0 !== n ? t.max + n - (t.max - t.min) : void 0 };
      }
      function J(t, e) {
        var n,
          o = e.min - t.min,
          r = e.max - t.max;
        return e.max - e.min < t.max - t.min && ((o = (n = (0, i.__read)([r, o], 2))[0]), (r = n[1])), { min: o, max: r };
      }
      var tt,
        et = 0.35;
      function nt(t, e, n) {
        return { min: it(t, e), max: it(t, n) };
      }
      function it(t, e) {
        var n;
        return 'number' === typeof t ? t : null !== (n = t[e]) && void 0 !== n ? n : 0;
      }
      !(function(t) {
        (t.Animate = 'animate'),
          (t.Hover = 'whileHover'),
          (t.Tap = 'whileTap'),
          (t.Drag = 'whileDrag'),
          (t.Focus = 'whileFocus'),
          (t.InView = 'whileInView'),
          (t.Exit = 'exit');
      })(tt || (tt = {}));
      function ot(t) {
        return [t('x'), t('y')];
      }
      function rt(t) {
        var e = t.top;
        return { x: { min: t.left, max: t.right }, y: { min: e, max: t.bottom } };
      }
      function at(t) {
        return void 0 === t || 1 === t;
      }
      function st(t) {
        var e = t.scale,
          n = t.scaleX,
          i = t.scaleY;
        return !at(e) || !at(n) || !at(i);
      }
      function ut(t) {
        return st(t) || lt(t.x) || lt(t.y) || t.z || t.rotate || t.rotateX || t.rotateY;
      }
      function lt(t) {
        return t && '0%' !== t;
      }
      function ct(t, e, n) {
        return n + e * (t - n);
      }
      function dt(t, e, n, i, o) {
        return void 0 !== o && (t = ct(t, o, i)), ct(t, n, i) + e;
      }
      function vt(t, e, n, i, o) {
        void 0 === e && (e = 0), void 0 === n && (n = 1), (t.min = dt(t.min, e, n, i, o)), (t.max = dt(t.max, e, n, i, o));
      }
      function pt(t, e) {
        var n = e.x,
          i = e.y;
        vt(t.x, n.translate, n.scale, n.originPoint), vt(t.y, i.translate, i.scale, i.originPoint);
      }
      function ht(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function ft(t, e, n) {
        var o = (0, i.__read)(n, 3),
          r = o[0],
          a = o[1],
          s = o[2],
          u = void 0 !== e[s] ? e[s] : 0.5,
          l = (0, z.C)(t.min, t.max, u);
        vt(t, e[r], e[a], l, e.scale);
      }
      var mt = ['x', 'scaleX', 'originX'],
        gt = ['y', 'scaleY', 'originY'];
      function yt(t, e) {
        ft(t.x, e, mt), ft(t.y, e, gt);
      }
      function xt(t, e) {
        return rt(
          (function(t, e) {
            if (!e) return t;
            var n = e({ x: t.left, y: t.top }),
              i = e({ x: t.right, y: t.bottom });
            return { top: n.y, left: n.x, bottom: i.y, right: i.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      var Pt = n(81593),
        Et = n(2969),
        Tt = new WeakMap(),
        Vt = (function() {
          function t(t) {
            (this.openGlobalLock = null),
              (this.isDragging = !1),
              (this.currentDirection = null),
              (this.originPoint = { x: 0, y: 0 }),
              (this.constraints = !1),
              (this.hasMutatedConstraints = !1),
              (this.elastic = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
              (this.visualElement = t);
          }
          return (
            (t.prototype.start = function(t, e) {
              var n = this,
                i = (void 0 === e ? {} : e).snapToCursor,
                o = void 0 !== i && i;
              if (!1 !== this.visualElement.isPresent) {
                this.panSession = new C(
                  t,
                  {
                    onSessionStart: function(t) {
                      n.stopAnimation(), o && n.snapToCursor(d(t, 'page').point);
                    },
                    onStart: function(t, e) {
                      var i,
                        o = n.getProps(),
                        r = o.drag,
                        a = o.dragPropagation,
                        s = o.onDragStart;
                      (!r || a || (n.openGlobalLock && n.openGlobalLock(), (n.openGlobalLock = U(r)), n.openGlobalLock)) &&
                        ((n.isDragging = !0),
                        (n.currentDirection = null),
                        n.resolveConstraints(),
                        n.visualElement.projection &&
                          ((n.visualElement.projection.isAnimationBlocked = !0), (n.visualElement.projection.target = void 0)),
                        ot(function(t) {
                          var e,
                            i,
                            o = n.getAxisMotionValue(t).get() || 0;
                          if (Et.aQ.test(o)) {
                            var r =
                              null === (i = null === (e = n.visualElement.projection) || void 0 === e ? void 0 : e.layout) || void 0 === i
                                ? void 0
                                : i.actual[t];
                            if (r) o = Y(r) * (parseFloat(o) / 100);
                          }
                          n.originPoint[t] = o;
                        }),
                        null === s || void 0 === s || s(t, e),
                        null === (i = n.visualElement.animationState) || void 0 === i || i.setActive(tt.Drag, !0));
                    },
                    onMove: function(t, e) {
                      var i = n.getProps(),
                        o = i.dragPropagation,
                        r = i.dragDirectionLock,
                        a = i.onDirectionLock,
                        s = i.onDrag;
                      if (o || n.openGlobalLock) {
                        var u = e.offset;
                        if (r && null === n.currentDirection)
                          return (
                            (n.currentDirection = (function(t, e) {
                              void 0 === e && (e = 10);
                              var n = null;
                              Math.abs(t.y) > e ? (n = 'y') : Math.abs(t.x) > e && (n = 'x');
                              return n;
                            })(u)),
                            void (null !== n.currentDirection && (null === a || void 0 === a || a(n.currentDirection)))
                          );
                        n.updateAxis('x', e.point, u),
                          n.updateAxis('y', e.point, u),
                          n.visualElement.syncRender(),
                          null === s || void 0 === s || s(t, e);
                      }
                    },
                    onSessionEnd: function(t, e) {
                      return n.stop(t, e);
                    }
                  },
                  { transformPagePoint: this.visualElement.getTransformPagePoint() }
                );
              }
            }),
            (t.prototype.stop = function(t, e) {
              var n = this.isDragging;
              if ((this.cancel(), n)) {
                var i = e.velocity;
                this.startAnimation(i);
                var o = this.getProps().onDragEnd;
                null === o || void 0 === o || o(t, e);
              }
            }),
            (t.prototype.cancel = function() {
              var t, e;
              (this.isDragging = !1),
                this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1),
                null === (t = this.panSession) || void 0 === t || t.end(),
                (this.panSession = void 0),
                !this.getProps().dragPropagation && this.openGlobalLock && (this.openGlobalLock(), (this.openGlobalLock = null)),
                null === (e = this.visualElement.animationState) || void 0 === e || e.setActive(tt.Drag, !1);
            }),
            (t.prototype.updateAxis = function(t, e, n) {
              var i = this.getProps().drag;
              if (n && _t(t, i, this.currentDirection)) {
                var o = this.getAxisMotionValue(t),
                  r = this.originPoint[t] + n[t];
                this.constraints &&
                  this.constraints[t] &&
                  (r = (function(t, e, n) {
                    var i = e.min,
                      o = e.max;
                    return (
                      void 0 !== i && t < i
                        ? (t = n ? (0, z.C)(i, t, n.min) : Math.max(t, i))
                        : void 0 !== o && t > o && (t = n ? (0, z.C)(o, t, n.max) : Math.min(t, o)),
                      t
                    );
                  })(r, this.constraints[t], this.elastic[t])),
                  o.set(r);
              }
            }),
            (t.prototype.resolveConstraints = function() {
              var t = this,
                e = this.getProps(),
                n = e.dragConstraints,
                i = e.dragElastic,
                o = (this.visualElement.projection || {}).layout,
                r = this.constraints;
              n && (0, N.I)(n)
                ? this.constraints || (this.constraints = this.resolveRefConstraints())
                : (this.constraints =
                    !(!n || !o) &&
                    (function(t, e) {
                      var n = e.top,
                        i = e.left,
                        o = e.bottom,
                        r = e.right;
                      return { x: Q(t.x, i, r), y: Q(t.y, n, o) };
                    })(o.actual, n)),
                (this.elastic = (function(t) {
                  return (
                    void 0 === t && (t = et), !1 === t ? (t = 0) : !0 === t && (t = et), { x: nt(t, 'left', 'right'), y: nt(t, 'top', 'bottom') }
                  );
                })(i)),
                r !== this.constraints &&
                  o &&
                  this.constraints &&
                  !this.hasMutatedConstraints &&
                  ot(function(e) {
                    t.getAxisMotionValue(e) &&
                      (t.constraints[e] = (function(t, e) {
                        var n = {};
                        return void 0 !== e.min && (n.min = e.min - t.min), void 0 !== e.max && (n.max = e.max - t.min), n;
                      })(o.actual[e], t.constraints[e]));
                  });
            }),
            (t.prototype.resolveRefConstraints = function() {
              var t = this.getProps(),
                e = t.dragConstraints,
                n = t.onMeasureDragConstraints;
              if (!e || !(0, N.I)(e)) return !1;
              var i = e.current;
              (0, r.k)(null !== i, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
              var o = this.visualElement.projection;
              if (!o || !o.layout) return !1;
              var a = (function(t, e, n) {
                  var i = xt(t, n),
                    o = e.scroll;
                  return o && (ht(i.x, o.x), ht(i.y, o.y)), i;
                })(i, o.root, this.visualElement.getTransformPagePoint()),
                s = (function(t, e) {
                  return { x: J(t.x, e.x), y: J(t.y, e.y) };
                })(o.layout.actual, a);
              if (n) {
                var u = n(
                  (function(t) {
                    var e = t.x,
                      n = t.y;
                    return { top: n.min, right: e.max, bottom: n.max, left: e.min };
                  })(s)
                );
                (this.hasMutatedConstraints = !!u), u && (s = rt(u));
              }
              return s;
            }),
            (t.prototype.startAnimation = function(t) {
              var e = this,
                n = this.getProps(),
                o = n.drag,
                r = n.dragMomentum,
                a = n.dragElastic,
                s = n.dragTransition,
                u = n.dragSnapToOrigin,
                l = n.onDragTransitionEnd,
                c = this.constraints || {},
                d = ot(function(n) {
                  var l;
                  if (_t(n, o, e.currentDirection)) {
                    var d = null !== (l = null === c || void 0 === c ? void 0 : c[n]) && void 0 !== l ? l : {};
                    u && (d = { min: 0, max: 0 });
                    var v = a ? 200 : 1e6,
                      p = a ? 40 : 1e7,
                      h = (0, i.__assign)(
                        (0, i.__assign)(
                          {
                            type: 'inertia',
                            velocity: r ? t[n] : 0,
                            bounceStiffness: v,
                            bounceDamping: p,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10
                          },
                          s
                        ),
                        d
                      );
                    return e.startAxisValueAnimation(n, h);
                  }
                });
              return Promise.all(d).then(l);
            }),
            (t.prototype.startAxisValueAnimation = function(t, e) {
              var n = this.getAxisMotionValue(t);
              return (0, Pt.b8)(t, n, 0, e);
            }),
            (t.prototype.stopAnimation = function() {
              var t = this;
              ot(function(e) {
                return t.getAxisMotionValue(e).stop();
              });
            }),
            (t.prototype.getAxisMotionValue = function(t) {
              var e,
                n,
                i = '_drag' + t.toUpperCase(),
                o = this.visualElement.getProps()[i];
              return (
                o ||
                this.visualElement.getValue(
                  t,
                  null !== (n = null === (e = this.visualElement.getProps().initial) || void 0 === e ? void 0 : e[t]) && void 0 !== n ? n : 0
                )
              );
            }),
            (t.prototype.snapToCursor = function(t) {
              var e = this;
              ot(function(n) {
                if (_t(n, e.getProps().drag, e.currentDirection)) {
                  var i = e.visualElement.projection,
                    o = e.getAxisMotionValue(n);
                  if (i && i.layout) {
                    var r = i.layout.actual[n],
                      a = r.min,
                      s = r.max;
                    o.set(t[n] - (0, z.C)(a, s, 0.5));
                  }
                }
              });
            }),
            (t.prototype.scalePositionWithinConstraints = function() {
              var t,
                e = this,
                n = this.getProps(),
                i = n.drag,
                o = n.dragConstraints,
                r = this.visualElement.projection;
              if ((0, N.I)(o) && r && this.constraints) {
                this.stopAnimation();
                var a = { x: 0, y: 0 };
                ot(function(t) {
                  var n = e.getAxisMotionValue(t);
                  if (n) {
                    var i = n.get();
                    a[t] = (function(t, e) {
                      var n = 0.5,
                        i = Y(t),
                        o = Y(e);
                      return o > i ? (n = (0, G.Y)(e.min, e.max - i, t.min)) : i > o && (n = (0, G.Y)(t.min, t.max - o, e.min)), (0, H.u)(0, 1, n);
                    })({ min: i, max: i }, e.constraints[t]);
                  }
                });
                var s = this.visualElement.getProps().transformTemplate;
                (this.visualElement.getInstance().style.transform = s ? s({}, '') : 'none'),
                  null === (t = r.root) || void 0 === t || t.updateScroll(),
                  r.updateLayout(),
                  this.resolveConstraints(),
                  ot(function(t) {
                    if (_t(t, i, null)) {
                      var n = e.getAxisMotionValue(t),
                        o = e.constraints[t],
                        r = o.min,
                        s = o.max;
                      n.set((0, z.C)(r, s, a[t]));
                    }
                  });
              }
            }),
            (t.prototype.addListeners = function() {
              var t,
                e = this;
              Tt.set(this.visualElement, this);
              var n = E(this.visualElement.getInstance(), 'pointerdown', function(t) {
                  var n = e.getProps(),
                    i = n.drag,
                    o = n.dragListener;
                  i && (void 0 === o || o) && e.start(t);
                }),
                i = function() {
                  var t = e.getProps().dragConstraints;
                  (0, N.I)(t) && (e.constraints = e.resolveRefConstraints());
                },
                o = this.visualElement.projection,
                r = o.addEventListener('measure', i);
              o && !o.layout && (null === (t = o.root) || void 0 === t || t.updateScroll(), o.updateLayout()), i();
              var a = f(window, 'resize', function() {
                return e.scalePositionWithinConstraints();
              });
              return (
                o.addEventListener('didUpdate', function(t) {
                  var n = t.delta,
                    i = t.hasLayoutChanged;
                  e.isDragging &&
                    i &&
                    (ot(function(t) {
                      var i = e.getAxisMotionValue(t);
                      i && ((e.originPoint[t] += n[t].translate), i.set(i.get() + n[t].translate));
                    }),
                    e.visualElement.syncRender());
                }),
                function() {
                  a(), n(), r();
                }
              );
            }),
            (t.prototype.getProps = function() {
              var t = this.visualElement.getProps(),
                e = t.drag,
                n = void 0 !== e && e,
                o = t.dragDirectionLock,
                r = void 0 !== o && o,
                a = t.dragPropagation,
                s = void 0 !== a && a,
                u = t.dragConstraints,
                l = void 0 !== u && u,
                c = t.dragElastic,
                d = void 0 === c ? et : c,
                v = t.dragMomentum,
                p = void 0 === v || v;
              return (0, i.__assign)((0, i.__assign)({}, t), {
                drag: n,
                dragDirectionLock: r,
                dragPropagation: s,
                dragConstraints: l,
                dragElastic: d,
                dragMomentum: p
              });
            }),
            t
          );
        })();
      function _t(t, e, n) {
        return (!0 === e || e === t) && (null === n || n === t);
      }
      var At = n(96681);
      var St = n(16014),
        wt = n(65411);
      var bt = function(t) {
          return function(e) {
            return t(e), null;
          };
        },
        Ct = {
          pan: bt(function(t) {
            var e = t.onPan,
              n = t.onPanStart,
              i = t.onPanEnd,
              r = t.onPanSessionStart,
              a = t.visualElement,
              s = e || n || i || r,
              u = (0, o.useRef)(null),
              l = (0, o.useContext)(St._).transformPagePoint,
              c = {
                onSessionStart: r,
                onStart: n,
                onMove: e,
                onEnd: function(t, e) {
                  (u.current = null), i && i(t, e);
                }
              };
            (0, o.useEffect)(function() {
              null !== u.current && u.current.updateHandlers(c);
            }),
              T(
                a,
                'pointerdown',
                s &&
                  function(t) {
                    u.current = new C(t, c, { transformPagePoint: l });
                  }
              ),
              (0, wt.z)(function() {
                return u.current && u.current.end();
              });
          }),
          drag: bt(function(t) {
            var e = t.dragControls,
              n = t.visualElement,
              i = (0, At.h)(function() {
                return new Vt(n);
              });
            (0, o.useEffect)(
              function() {
                return e && e.subscribe(i);
              },
              [i, e]
            ),
              (0, o.useEffect)(
                function() {
                  return i.addListeners();
                },
                [i]
              );
          })
        },
        Lt = n(240),
        Rt = n(76316);
      function Dt() {
        var t = (0, o.useContext)(Lt.O);
        if (null === t) return [!0, null];
        var e = t.isPresent,
          n = t.onExitComplete,
          i = t.register,
          r = (0, Rt.M)();
        (0, o.useEffect)(function() {
          return i(r);
        }, []);
        return !e && n
          ? [
              !1,
              function() {
                return null === n || void 0 === n ? void 0 : n(r);
              }
            ]
          : [!0];
      }
      var Mt = n(25364),
        kt = n(41705),
        Bt = n(93083);
      function Ft(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      var jt = {
          correct: function(t, e) {
            if (!e.target) return t;
            if ('string' === typeof t) {
              if (!Et.px.test(t)) return t;
              t = parseFloat(t);
            }
            var n = Ft(t, e.target.x),
              i = Ft(t, e.target.y);
            return ''.concat(n, '% ').concat(i, '%');
          }
        },
        It = n(28407);
      function Ut(t) {
        return 'string' === typeof t && t.startsWith('var(--');
      }
      var Ot = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function Nt(t, e, n) {
        void 0 === n && (n = 1),
          (0, r.k)(
            n <= 4,
            'Max CSS variable fallback depth detected in property "'.concat(t, '". This may indicate a circular fallback dependency.')
          );
        var o = (0, i.__read)(
            (function(t) {
              var e = Ot.exec(t);
              if (!e) return [,];
              var n = (0, i.__read)(e, 3);
              return [n[1], n[2]];
            })(t),
            2
          ),
          a = o[0],
          s = o[1];
        if (a) {
          var u = window.getComputedStyle(e).getPropertyValue(a);
          return u ? u.trim() : Ut(s) ? Nt(s, e, n + 1) : s;
        }
      }
      var zt = '_$css',
        Gt = {
          correct: function(t, e) {
            var n = e.treeScale,
              i = e.projectionDelta,
              o = t,
              r = t.includes('var('),
              a = [];
            r &&
              (t = t.replace(Ot, function(t) {
                return a.push(t), zt;
              }));
            var s = It.P.parse(t);
            if (s.length > 5) return o;
            var u = It.P.createTransformer(t),
              l = 'number' !== typeof s[0] ? 1 : 0,
              c = i.x.scale * n.x,
              d = i.y.scale * n.y;
            (s[0 + l] /= c), (s[1 + l] /= d);
            var v = (0, z.C)(c, d, 0.5);
            'number' === typeof s[2 + l] && (s[2 + l] /= v), 'number' === typeof s[3 + l] && (s[3 + l] /= v);
            var p = u(s);
            if (r) {
              var h = 0;
              p = p.replace(zt, function() {
                var t = a[h];
                return h++, t;
              });
            }
            return p;
          }
        },
        Ht = n(64561),
        Yt = (function(t) {
          function e() {
            return (null !== t && t.apply(this, arguments)) || this;
          }
          return (
            (0, i.__extends)(e, t),
            (e.prototype.componentDidMount = function() {
              var t = this,
                e = this.props,
                n = e.visualElement,
                o = e.layoutGroup,
                r = e.switchLayoutGroup,
                a = e.layoutId,
                s = n.projection;
              (0, Ht.B)(Wt),
                s &&
                  ((null === o || void 0 === o ? void 0 : o.group) && o.group.add(s),
                  (null === r || void 0 === r ? void 0 : r.register) && a && r.register(s),
                  s.root.didUpdate(),
                  s.addEventListener('animationComplete', function() {
                    t.safeToRemove();
                  }),
                  s.setOptions(
                    (0, i.__assign)((0, i.__assign)({}, s.options), {
                      onExitComplete: function() {
                        return t.safeToRemove();
                      }
                    })
                  )),
                (Bt.V.hasEverUpdated = !0);
            }),
            (e.prototype.getSnapshotBeforeUpdate = function(t) {
              var e = this,
                n = this.props,
                i = n.layoutDependency,
                o = n.visualElement,
                r = n.drag,
                a = n.isPresent,
                s = o.projection;
              return s
                ? ((s.isPresent = a),
                  r || t.layoutDependency !== i || void 0 === i ? s.willUpdate() : this.safeToRemove(),
                  t.isPresent !== a &&
                    (a
                      ? s.promote()
                      : s.relegate() ||
                        p.ZP.postRender(function() {
                          var t;
                          (null === (t = s.getStack()) || void 0 === t ? void 0 : t.members.length) || e.safeToRemove();
                        })),
                  null)
                : null;
            }),
            (e.prototype.componentDidUpdate = function() {
              var t = this.props.visualElement.projection;
              t && (t.root.didUpdate(), !t.currentAnimation && t.isLead() && this.safeToRemove());
            }),
            (e.prototype.componentWillUnmount = function() {
              var t = this.props,
                e = t.visualElement,
                n = t.layoutGroup,
                i = t.switchLayoutGroup,
                o = e.projection;
              o &&
                (o.scheduleCheckAfterUnmount(),
                (null === n || void 0 === n ? void 0 : n.group) && n.group.remove(o),
                (null === i || void 0 === i ? void 0 : i.deregister) && i.deregister(o));
            }),
            (e.prototype.safeToRemove = function() {
              var t = this.props.safeToRemove;
              null === t || void 0 === t || t();
            }),
            (e.prototype.render = function() {
              return null;
            }),
            e
          );
        })(o.Component);
      var Wt = {
          borderRadius: (0, i.__assign)((0, i.__assign)({}, jt), {
            applyTo: ['borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomLeftRadius', 'borderBottomRightRadius']
          }),
          borderTopLeftRadius: jt,
          borderTopRightRadius: jt,
          borderBottomLeftRadius: jt,
          borderBottomRightRadius: jt,
          boxShadow: Gt
        },
        Xt = {
          measureLayout: function(t) {
            var e = (0, i.__read)(Dt(), 2),
              n = e[0],
              r = e[1],
              a = (0, o.useContext)(Mt.p);
            return o.createElement(
              Yt,
              (0, i.__assign)({}, t, { layoutGroup: a, switchLayoutGroup: (0, o.useContext)(kt.g), isPresent: n, safeToRemove: r })
            );
          }
        },
        qt = n(2445),
        $t = n(48488);
      function Zt(t, e) {
        if (!Array.isArray(e)) return !1;
        var n = e.length;
        if (n !== t.length) return !1;
        for (var i = 0; i < n; i++) if (e[i] !== t[i]) return !1;
        return !0;
      }
      var Kt = n(77107),
        Qt = n(67909),
        Jt = [tt.Animate, tt.InView, tt.Focus, tt.Hover, tt.Tap, tt.Drag, tt.Exit],
        te = (0, i.__spreadArray)([], (0, i.__read)(Jt), !1).reverse(),
        ee = Jt.length;
      function ne(t) {
        var e = (function(t) {
            return function(e) {
              return Promise.all(
                e.map(function(e) {
                  var n = e.animation,
                    i = e.options;
                  return (0, Kt.d5)(t, n, i);
                })
              );
            };
          })(t),
          n = (function() {
            var t;
            return (
              ((t = {})[tt.Animate] = ie(!0)),
              (t[tt.InView] = ie()),
              (t[tt.Hover] = ie()),
              (t[tt.Tap] = ie()),
              (t[tt.Drag] = ie()),
              (t[tt.Focus] = ie()),
              (t[tt.Exit] = ie()),
              t
            );
          })(),
          o = {},
          r = !0,
          a = function(e, n) {
            var o = (0, Qt.x5)(t, n);
            if (o) {
              o.transition;
              var r = o.transitionEnd,
                a = (0, i.__rest)(o, ['transition', 'transitionEnd']);
              e = (0, i.__assign)((0, i.__assign)((0, i.__assign)({}, e), a), r);
            }
            return e;
          };
        function s(s, u) {
          for (
            var l,
              c = t.getProps(),
              d = t.getVariantContext(!0) || {},
              v = [],
              p = new Set(),
              h = {},
              f = 1 / 0,
              m = function(e) {
                var o = te[e],
                  m = n[o],
                  g = null !== (l = c[o]) && void 0 !== l ? l : d[o],
                  y = (0, Qt.$L)(g),
                  x = o === u ? m.isActive : null;
                !1 === x && (f = e);
                var P = g === d[o] && g !== c[o] && y;
                if (
                  (P && r && t.manuallyAnimateOnMount && (P = !1),
                  (m.protectedKeys = (0, i.__assign)({}, h)),
                  (!m.isActive && null === x) || (!g && !m.prevProp) || (0, qt.H)(g) || 'boolean' === typeof g)
                )
                  return 'continue';
                var E = (function(t, e) {
                    if ('string' === typeof e) return e !== t;
                    if ((0, Qt.A0)(e)) return !Zt(e, t);
                    return !1;
                  })(m.prevProp, g),
                  T = E || (o === u && m.isActive && !P && y) || (e > f && y),
                  V = Array.isArray(g) ? g : [g],
                  _ = V.reduce(a, {});
                !1 === x && (_ = {});
                var A = m.prevResolvedValues,
                  S = void 0 === A ? {} : A,
                  w = (0, i.__assign)((0, i.__assign)({}, S), _),
                  b = function(t) {
                    (T = !0), p.delete(t), (m.needsAnimating[t] = !0);
                  };
                for (var C in w) {
                  var L = _[C],
                    R = S[C];
                  h.hasOwnProperty(C) ||
                    (L !== R
                      ? (0, $t.C)(L) && (0, $t.C)(R)
                        ? !Zt(L, R) || E
                          ? b(C)
                          : (m.protectedKeys[C] = !0)
                        : void 0 !== L
                        ? b(C)
                        : p.add(C)
                      : void 0 !== L && p.has(C)
                      ? b(C)
                      : (m.protectedKeys[C] = !0));
                }
                (m.prevProp = g),
                  (m.prevResolvedValues = _),
                  m.isActive && (h = (0, i.__assign)((0, i.__assign)({}, h), _)),
                  r && t.blockInitialAnimation && (T = !1),
                  T &&
                    !P &&
                    v.push.apply(
                      v,
                      (0, i.__spreadArray)(
                        [],
                        (0, i.__read)(
                          V.map(function(t) {
                            return { animation: t, options: (0, i.__assign)({ type: o }, s) };
                          })
                        ),
                        !1
                      )
                    );
              },
              g = 0;
            g < ee;
            g++
          )
            m(g);
          if (((o = (0, i.__assign)({}, h)), p.size)) {
            var y = {};
            p.forEach(function(e) {
              var n = t.getBaseTarget(e);
              void 0 !== n && (y[e] = n);
            }),
              v.push({ animation: y });
          }
          var x = Boolean(v.length);
          return r && !1 === c.initial && !t.manuallyAnimateOnMount && (x = !1), (r = !1), x ? e(v) : Promise.resolve();
        }
        return {
          isAnimated: function(t) {
            return void 0 !== o[t];
          },
          animateChanges: s,
          setActive: function(e, i, o) {
            var r;
            if (n[e].isActive === i) return Promise.resolve();
            null === (r = t.variantChildren) ||
              void 0 === r ||
              r.forEach(function(t) {
                var n;
                return null === (n = t.animationState) || void 0 === n ? void 0 : n.setActive(e, i);
              }),
              (n[e].isActive = i);
            var a = s(o, e);
            for (var u in n) n[u].protectedKeys = {};
            return a;
          },
          setAnimateFunction: function(n) {
            e = n(t);
          },
          getState: function() {
            return n;
          }
        };
      }
      function ie(t) {
        return void 0 === t && (t = !1), { isActive: t, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
      }
      var oe = {
        animation: bt(function(t) {
          var e = t.visualElement,
            n = t.animate;
          e.animationState || (e.animationState = ne(e)),
            (0, qt.H)(n) &&
              (0, o.useEffect)(
                function() {
                  return n.subscribe(e);
                },
                [n]
              );
        }),
        exit: bt(function(t) {
          var e = t.custom,
            n = t.visualElement,
            r = (0, i.__read)(Dt(), 2),
            a = r[0],
            s = r[1],
            u = (0, o.useContext)(Lt.O);
          (0, o.useEffect)(
            function() {
              var t, i;
              n.isPresent = a;
              var o =
                null === (t = n.animationState) || void 0 === t
                  ? void 0
                  : t.setActive(tt.Exit, !a, { custom: null !== (i = null === u || void 0 === u ? void 0 : u.custom) && void 0 !== i ? i : e });
              !a && (null === o || void 0 === o || o.then(s));
            },
            [a]
          );
        })
      };
      function re(t, e, n) {
        return function(i, o) {
          var r;
          a(i) && !O() && (null === (r = t.animationState) || void 0 === r || r.setActive(tt.Hover, e), null === n || void 0 === n || n(i, o));
        };
      }
      var ae = function(t, e) {
        return !!e && (t === e || ae(t, e.parentElement));
      };
      var se = n(49304),
        ue = new Set();
      var le = new WeakMap(),
        ce = new WeakMap(),
        de = function(t) {
          var e;
          null === (e = le.get(t.target)) || void 0 === e || e(t);
        },
        ve = function(t) {
          t.forEach(de);
        };
      function pe(t, e, n) {
        var o = (function(t) {
          var e = t.root,
            n = (0, i.__rest)(t, ['root']),
            o = e || document;
          ce.has(o) || ce.set(o, {});
          var r = ce.get(o),
            a = JSON.stringify(n);
          return r[a] || (r[a] = new IntersectionObserver(ve, (0, i.__assign)({ root: e }, n))), r[a];
        })(e);
        return (
          le.set(t, n),
          o.observe(t),
          function() {
            le.delete(t), o.unobserve(t);
          }
        );
      }
      var he = { some: 0, all: 1 };
      function fe(t, e, n, i) {
        var r = i.root,
          a = i.margin,
          s = i.amount,
          u = void 0 === s ? 'some' : s,
          l = i.once;
        (0, o.useEffect)(
          function() {
            if (t) {
              var i = { root: null === r || void 0 === r ? void 0 : r.current, rootMargin: a, threshold: 'number' === typeof u ? u : he[u] };
              return pe(n.getInstance(), i, function(t) {
                var i,
                  o = t.isIntersecting;
                if (e.isInView !== o && ((e.isInView = o), !l || o || !e.hasEnteredView)) {
                  o && (e.hasEnteredView = !0), null === (i = n.animationState) || void 0 === i || i.setActive(tt.InView, o);
                  var r = n.getProps(),
                    a = o ? r.onViewportEnter : r.onViewportLeave;
                  null === a || void 0 === a || a(t);
                }
              });
            }
          },
          [t, r, a, u]
        );
      }
      function me(t, e, n, i) {
        var r = i.fallback,
          a = void 0 === r || r;
        (0, o.useEffect)(
          function() {
            var i, o;
            t &&
              a &&
              ('production' !== se.O &&
                ((i = 'IntersectionObserver not available on this device. whileInView animations will trigger on mount.'),
                !1 || ue.has(i) || (console.warn(i), o && console.warn(o), ue.add(i))),
              requestAnimationFrame(function() {
                var t;
                e.hasEnteredView = !0;
                var i = n.getProps().onViewportEnter;
                null === i || void 0 === i || i(null), null === (t = n.animationState) || void 0 === t || t.setActive(tt.InView, !0);
              }));
          },
          [t]
        );
      }
      var ge = {
          inView: bt(function(t) {
            var e = t.visualElement,
              n = t.whileInView,
              i = t.onViewportEnter,
              r = t.onViewportLeave,
              a = t.viewport,
              s = void 0 === a ? {} : a,
              u = (0, o.useRef)({ hasEnteredView: !1, isInView: !1 }),
              l = Boolean(n || i || r);
            s.once && u.current.hasEnteredView && (l = !1), ('undefined' === typeof IntersectionObserver ? me : fe)(l, u.current, e, s);
          }),
          tap: bt(function(t) {
            var e = t.onTap,
              n = t.onTapStart,
              i = t.onTapCancel,
              r = t.whileTap,
              a = t.visualElement,
              s = e || n || i || r,
              u = (0, o.useRef)(!1),
              l = (0, o.useRef)(null),
              c = { passive: !(n || e || i || f) };
            function d() {
              var t;
              null === (t = l.current) || void 0 === t || t.call(l), (l.current = null);
            }
            function v() {
              var t;
              return d(), (u.current = !1), null === (t = a.animationState) || void 0 === t || t.setActive(tt.Tap, !1), !O();
            }
            function p(t, n) {
              v() && (ae(a.getInstance(), t.target) ? null === e || void 0 === e || e(t, n) : null === i || void 0 === i || i(t, n));
            }
            function h(t, e) {
              v() && (null === i || void 0 === i || i(t, e));
            }
            function f(t, e) {
              var i;
              d(),
                u.current ||
                  ((u.current = !0),
                  (l.current = (0, b.z)(E(window, 'pointerup', p, c), E(window, 'pointercancel', h, c))),
                  null === (i = a.animationState) || void 0 === i || i.setActive(tt.Tap, !0),
                  null === n || void 0 === n || n(t, e));
            }
            T(a, 'pointerdown', s ? f : void 0, c), (0, wt.z)(d);
          }),
          focus: bt(function(t) {
            var e = t.whileFocus,
              n = t.visualElement;
            m(
              n,
              'focus',
              e
                ? function() {
                    var t;
                    null === (t = n.animationState) || void 0 === t || t.setActive(tt.Focus, !0);
                  }
                : void 0
            ),
              m(
                n,
                'blur',
                e
                  ? function() {
                      var t;
                      null === (t = n.animationState) || void 0 === t || t.setActive(tt.Focus, !1);
                    }
                  : void 0
              );
          }),
          hover: bt(function(t) {
            var e = t.onHoverStart,
              n = t.onHoverEnd,
              i = t.whileHover,
              o = t.visualElement;
            T(o, 'pointerenter', e || i ? re(o, !0, e) : void 0, { passive: !e }),
              T(o, 'pointerleave', n || i ? re(o, !1, n) : void 0, { passive: !n });
          })
        },
        ye = n(33234),
        xe = n(40406),
        Pe = n(21560),
        Ee = [
          'LayoutMeasure',
          'BeforeLayoutMeasure',
          'LayoutUpdate',
          'ViewportBoxUpdate',
          'Update',
          'Render',
          'AnimationComplete',
          'LayoutAnimationComplete',
          'AnimationStart',
          'LayoutAnimationStart',
          'SetAxisTarget',
          'Unmount'
        ];
      var Te,
        Ve = function(t) {
          var e = t.treeType,
            n = void 0 === e ? '' : e,
            o = t.build,
            r = t.getBaseTarget,
            a = t.makeTargetAnimatable,
            s = t.measureViewportBox,
            u = t.render,
            l = t.readValueFromInstance,
            c = t.removeValueFromRenderState,
            d = t.sortNodePosition,
            v = t.scrapeMotionValuesFromProps;
          return function(t, e) {
            var h = t.parent,
              f = t.props,
              m = t.presenceId,
              g = t.blockInitialAnimation,
              y = t.visualState,
              x = t.shouldReduceMotion;
            void 0 === e && (e = {});
            var P,
              E,
              T = !1,
              V = y.latestValues,
              _ = y.renderState,
              A = (function() {
                var t = Ee.map(function() {
                    return new Pe.L();
                  }),
                  e = {},
                  n = {
                    clearAllListeners: function() {
                      return t.forEach(function(t) {
                        return t.clear();
                      });
                    },
                    updatePropListeners: function(t) {
                      Ee.forEach(function(i) {
                        var o,
                          r = 'on' + i,
                          a = t[r];
                        null === (o = e[i]) || void 0 === o || o.call(e), a && (e[i] = n[r](a));
                      });
                    }
                  };
                return (
                  t.forEach(function(t, e) {
                    (n['on' + Ee[e]] = function(e) {
                      return t.add(e);
                    }),
                      (n['notify' + Ee[e]] = function() {
                        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                        return t.notify.apply(t, (0, i.__spreadArray)([], (0, i.__read)(e), !1));
                      });
                  }),
                  n
                );
              })(),
              S = new Map(),
              w = new Map(),
              b = {},
              C = (0, i.__assign)({}, V);
            function L() {
              P && T && (R(), u(P, _, f.style, U.projection));
            }
            function R() {
              o(U, _, V, e, f);
            }
            function D() {
              A.notifyUpdate(V);
            }
            function M(t, e) {
              var n = e.onChange(function(e) {
                  (V[t] = e), f.onUpdate && p.ZP.update(D, !1, !0);
                }),
                i = e.onRenderRequest(U.scheduleRender);
              w.set(t, function() {
                n(), i();
              });
            }
            var k = v(f);
            for (var B in k) {
              var F = k[B];
              void 0 !== V[B] && (0, xe.i)(F) && F.set(V[B], !1);
            }
            var j = (0, Qt.O6)(f),
              I = (0, Qt.e8)(f),
              U = (0, i.__assign)(
                (0, i.__assign)(
                  {
                    treeType: n,
                    current: null,
                    depth: h ? h.depth + 1 : 0,
                    parent: h,
                    children: new Set(),
                    presenceId: m,
                    shouldReduceMotion: x,
                    variantChildren: I ? new Set() : void 0,
                    isVisible: void 0,
                    manuallyAnimateOnMount: Boolean(null === h || void 0 === h ? void 0 : h.isMounted()),
                    blockInitialAnimation: g,
                    isMounted: function() {
                      return Boolean(P);
                    },
                    mount: function(t) {
                      (T = !0),
                        (P = U.current = t),
                        U.projection && U.projection.mount(t),
                        I && h && !j && (E = null === h || void 0 === h ? void 0 : h.addVariantChild(U)),
                        S.forEach(function(t, e) {
                          return M(e, t);
                        }),
                        null === h || void 0 === h || h.children.add(U),
                        U.setProps(f);
                    },
                    unmount: function() {
                      var t;
                      null === (t = U.projection) || void 0 === t || t.unmount(),
                        p.qY.update(D),
                        p.qY.render(L),
                        w.forEach(function(t) {
                          return t();
                        }),
                        null === E || void 0 === E || E(),
                        null === h || void 0 === h || h.children.delete(U),
                        A.clearAllListeners(),
                        (P = void 0),
                        (T = !1);
                    },
                    addVariantChild: function(t) {
                      var e,
                        n = U.getClosestVariantNode();
                      if (n)
                        return (
                          null === (e = n.variantChildren) || void 0 === e || e.add(t),
                          function() {
                            return n.variantChildren.delete(t);
                          }
                        );
                    },
                    sortNodePosition: function(t) {
                      return d && n === t.treeType ? d(U.getInstance(), t.getInstance()) : 0;
                    },
                    getClosestVariantNode: function() {
                      return I ? U : null === h || void 0 === h ? void 0 : h.getClosestVariantNode();
                    },
                    getLayoutId: function() {
                      return f.layoutId;
                    },
                    getInstance: function() {
                      return P;
                    },
                    getStaticValue: function(t) {
                      return V[t];
                    },
                    setStaticValue: function(t, e) {
                      return (V[t] = e);
                    },
                    getLatestValues: function() {
                      return V;
                    },
                    setVisibility: function(t) {
                      U.isVisible !== t && ((U.isVisible = t), U.scheduleRender());
                    },
                    makeTargetAnimatable: function(t, e) {
                      return void 0 === e && (e = !0), a(U, t, f, e);
                    },
                    measureViewportBox: function() {
                      return s(P, f);
                    },
                    addValue: function(t, e) {
                      U.hasValue(t) && U.removeValue(t), S.set(t, e), (V[t] = e.get()), M(t, e);
                    },
                    removeValue: function(t) {
                      var e;
                      S.delete(t), null === (e = w.get(t)) || void 0 === e || e(), w.delete(t), delete V[t], c(t, _);
                    },
                    hasValue: function(t) {
                      return S.has(t);
                    },
                    getValue: function(t, e) {
                      var n = S.get(t);
                      return void 0 === n && void 0 !== e && ((n = (0, ye.B)(e)), U.addValue(t, n)), n;
                    },
                    forEachValue: function(t) {
                      return S.forEach(t);
                    },
                    readValue: function(t) {
                      var n;
                      return null !== (n = V[t]) && void 0 !== n ? n : l(P, t, e);
                    },
                    setBaseTarget: function(t, e) {
                      C[t] = e;
                    },
                    getBaseTarget: function(t) {
                      if (r) {
                        var e = r(f, t);
                        if (void 0 !== e && !(0, xe.i)(e)) return e;
                      }
                      return C[t];
                    }
                  },
                  A
                ),
                {
                  build: function() {
                    return R(), _;
                  },
                  scheduleRender: function() {
                    p.ZP.render(L, !1, !0);
                  },
                  syncRender: L,
                  setProps: function(t) {
                    (t.transformTemplate || f.transformTemplate) && U.scheduleRender(),
                      (f = t),
                      A.updatePropListeners(t),
                      (b = (function(t, e, n) {
                        var i;
                        for (var o in e) {
                          var r = e[o],
                            a = n[o];
                          if ((0, xe.i)(r)) t.addValue(o, r);
                          else if ((0, xe.i)(a)) t.addValue(o, (0, ye.B)(r));
                          else if (a !== r)
                            if (t.hasValue(o)) {
                              var s = t.getValue(o);
                              !s.hasAnimated && s.set(r);
                            } else t.addValue(o, (0, ye.B)(null !== (i = t.getStaticValue(o)) && void 0 !== i ? i : r));
                        }
                        for (var o in n) void 0 === e[o] && t.removeValue(o);
                        return e;
                      })(U, v(f), b));
                  },
                  getProps: function() {
                    return f;
                  },
                  getVariant: function(t) {
                    var e;
                    return null === (e = f.variants) || void 0 === e ? void 0 : e[t];
                  },
                  getDefaultTransition: function() {
                    return f.transition;
                  },
                  getTransformPagePoint: function() {
                    return f.transformPagePoint;
                  },
                  getVariantContext: function(t) {
                    if ((void 0 === t && (t = !1), t)) return null === h || void 0 === h ? void 0 : h.getVariantContext();
                    if (!j) {
                      var e = (null === h || void 0 === h ? void 0 : h.getVariantContext()) || {};
                      return void 0 !== f.initial && (e.initial = f.initial), e;
                    }
                    for (var n = {}, i = 0; i < Ae; i++) {
                      var o = _e[i],
                        r = f[o];
                      ((0, Qt.$L)(r) || !1 === r) && (n[o] = r);
                    }
                    return n;
                  }
                }
              );
            return U;
          };
        },
        _e = (0, i.__spreadArray)(['initial'], (0, i.__read)(Jt), !1),
        Ae = _e.length,
        Se = n(5759),
        we = n(38057),
        be = n(57630),
        Ce = n(11248),
        Le = n(94714),
        Re = n(56440),
        De = new Set(['width', 'height', 'top', 'left', 'right', 'bottom', 'x', 'y']),
        Me = function(t) {
          return De.has(t);
        },
        ke = function(t, e) {
          t.set(e, !1), t.set(e);
        },
        Be = function(t) {
          return t === Ce.Rx || t === Et.px;
        };
      !(function(t) {
        (t.width = 'width'), (t.height = 'height'), (t.left = 'left'), (t.right = 'right'), (t.top = 'top'), (t.bottom = 'bottom');
      })(Te || (Te = {}));
      var Fe = function(t, e) {
          return parseFloat(t.split(', ')[e]);
        },
        je = function(t, e) {
          return function(n, i) {
            var o = i.transform;
            if ('none' === o || !o) return 0;
            var r = o.match(/^matrix3d\((.+)\)$/);
            if (r) return Fe(r[1], e);
            var a = o.match(/^matrix\((.+)\)$/);
            return a ? Fe(a[1], t) : 0;
          };
        },
        Ie = new Set(['x', 'y', 'z']),
        Ue = Le.Gl.filter(function(t) {
          return !Ie.has(t);
        });
      var Oe = {
          width: function(t, e) {
            var n = t.x,
              i = e.paddingLeft,
              o = void 0 === i ? '0' : i,
              r = e.paddingRight,
              a = void 0 === r ? '0' : r;
            return n.max - n.min - parseFloat(o) - parseFloat(a);
          },
          height: function(t, e) {
            var n = t.y,
              i = e.paddingTop,
              o = void 0 === i ? '0' : i,
              r = e.paddingBottom,
              a = void 0 === r ? '0' : r;
            return n.max - n.min - parseFloat(o) - parseFloat(a);
          },
          top: function(t, e) {
            var n = e.top;
            return parseFloat(n);
          },
          left: function(t, e) {
            var n = e.left;
            return parseFloat(n);
          },
          bottom: function(t, e) {
            var n = t.y,
              i = e.top;
            return parseFloat(i) + (n.max - n.min);
          },
          right: function(t, e) {
            var n = t.x,
              i = e.left;
            return parseFloat(i) + (n.max - n.min);
          },
          x: je(4, 13),
          y: je(5, 14)
        },
        Ne = function(t, e, n, o) {
          void 0 === n && (n = {}), void 0 === o && (o = {}), (e = (0, i.__assign)({}, e)), (o = (0, i.__assign)({}, o));
          var a = Object.keys(e).filter(Me),
            s = [],
            u = !1,
            l = [];
          if (
            (a.forEach(function(i) {
              var a = t.getValue(i);
              if (t.hasValue(i)) {
                var c,
                  d = n[i],
                  v = (0, Re.C)(d),
                  p = e[i];
                if ((0, $t.C)(p)) {
                  var h = p.length,
                    f = null === p[0] ? 1 : 0;
                  (d = p[f]), (v = (0, Re.C)(d));
                  for (var m = f; m < h; m++)
                    c
                      ? (0, r.k)((0, Re.C)(p[m]) === c, 'All keyframes must be of the same type')
                      : ((c = (0, Re.C)(p[m])),
                        (0, r.k)(c === v || (Be(v) && Be(c)), 'Keyframes must be of the same dimension as the current value'));
                } else c = (0, Re.C)(p);
                if (v !== c)
                  if (Be(v) && Be(c)) {
                    var g = a.get();
                    'string' === typeof g && a.set(parseFloat(g)),
                      'string' === typeof p ? (e[i] = parseFloat(p)) : Array.isArray(p) && c === Et.px && (e[i] = p.map(parseFloat));
                  } else
                    (null === v || void 0 === v ? void 0 : v.transform) && (null === c || void 0 === c ? void 0 : c.transform) && (0 === d || 0 === p)
                      ? 0 === d
                        ? a.set(c.transform(d))
                        : (e[i] = v.transform(p))
                      : (u ||
                          ((s = (function(t) {
                            var e = [];
                            return (
                              Ue.forEach(function(n) {
                                var i = t.getValue(n);
                                void 0 !== i && (e.push([n, i.get()]), i.set(n.startsWith('scale') ? 1 : 0));
                              }),
                              e.length && t.syncRender(),
                              e
                            );
                          })(t)),
                          (u = !0)),
                        l.push(i),
                        (o[i] = void 0 !== o[i] ? o[i] : e[i]),
                        ke(a, p));
              }
            }),
            l.length)
          ) {
            var c = l.indexOf('height') >= 0 ? window.pageYOffset : null,
              d = (function(t, e, n) {
                var i = e.measureViewportBox(),
                  o = e.getInstance(),
                  r = getComputedStyle(o),
                  a = r.display,
                  s = {};
                'none' === a && e.setStaticValue('display', t.display || 'block'),
                  n.forEach(function(t) {
                    s[t] = Oe[t](i, r);
                  }),
                  e.syncRender();
                var u = e.measureViewportBox();
                return (
                  n.forEach(function(n) {
                    var i = e.getValue(n);
                    ke(i, s[n]), (t[n] = Oe[n](u, r));
                  }),
                  t
                );
              })(e, t, l);
            return (
              s.length &&
                s.forEach(function(e) {
                  var n = (0, i.__read)(e, 2),
                    o = n[0],
                    r = n[1];
                  t.getValue(o).set(r);
                }),
              t.syncRender(),
              null !== c && window.scrollTo({ top: c }),
              { target: d, transitionEnd: o }
            );
          }
          return { target: e, transitionEnd: o };
        };
      function ze(t, e, n, i) {
        return (function(t) {
          return Object.keys(t).some(Me);
        })(e)
          ? Ne(t, e, n, i)
          : { target: e, transitionEnd: i };
      }
      var Ge = function(t, e, n, o) {
          var r = (function(t, e, n) {
            var o,
              r = (0, i.__rest)(e, []),
              a = t.getInstance();
            if (!(a instanceof Element)) return { target: r, transitionEnd: n };
            for (var s in (n && (n = (0, i.__assign)({}, n)),
            t.forEachValue(function(t) {
              var e = t.get();
              if (Ut(e)) {
                var n = Nt(e, a);
                n && t.set(n);
              }
            }),
            r)) {
              var u = r[s];
              if (Ut(u)) {
                var l = Nt(u, a);
                l && ((r[s] = l), n && ((null !== (o = n[s]) && void 0 !== o) || (n[s] = u)));
              }
            }
            return { target: r, transitionEnd: n };
          })(t, e, o);
          return ze(t, (e = r.target), n, (o = r.transitionEnd));
        },
        He = n(50189),
        Ye = n(34242),
        We = n(2728);
      var Xe = {
          treeType: 'dom',
          readValueFromInstance: function(t, e) {
            if ((0, Le._c)(e)) {
              var n = (0, We.A)(e);
              return (n && n.default) || 0;
            }
            var i,
              o = ((i = t), window.getComputedStyle(i));
            return ((0, be.o)(e) ? o.getPropertyValue(e) : o[e]) || 0;
          },
          sortNodePosition: function(t, e) {
            return 2 & t.compareDocumentPosition(e) ? 1 : -1;
          },
          getBaseTarget: function(t, e) {
            var n;
            return null === (n = t.style) || void 0 === n ? void 0 : n[e];
          },
          measureViewportBox: function(t, e) {
            return xt(t, e.transformPagePoint);
          },
          resetTransform: function(t, e, n) {
            var i = n.transformTemplate;
            (e.style.transform = i ? i({}, '') : 'none'), t.scheduleRender();
          },
          restoreTransform: function(t, e) {
            t.style.transform = e.style.transform;
          },
          removeValueFromRenderState: function(t, e) {
            var n = e.vars,
              i = e.style;
            delete n[t], delete i[t];
          },
          makeTargetAnimatable: function(t, e, n, o) {
            var r = n.transformValues;
            void 0 === o && (o = !0);
            var a = e.transition,
              s = e.transitionEnd,
              u = (0, i.__rest)(e, ['transition', 'transitionEnd']),
              l = (0, Se.P$)(u, a || {}, t);
            if ((r && (s && (s = r(s)), u && (u = r(u)), l && (l = r(l))), o)) {
              (0, Se.GJ)(t, u, l);
              var c = Ge(t, u, l, s);
              (s = c.transitionEnd), (u = c.target);
            }
            return (0, i.__assign)({ transition: a, transitionEnd: s }, u);
          },
          scrapeMotionValuesFromProps: He.U,
          build: function(t, e, n, i, o) {
            void 0 !== t.isVisible && (e.style.visibility = t.isVisible ? 'visible' : 'hidden'), (0, we.r)(e, n, i, o.transformTemplate);
          },
          render: Ye.N
        },
        qe = Ve(Xe),
        $e = n(16832),
        Ze = n(85415),
        Ke = n(93193),
        Qe = n(77302),
        Je = n(68504),
        tn = Ve(
          (0, i.__assign)((0, i.__assign)({}, Xe), {
            getBaseTarget: function(t, e) {
              return t[e];
            },
            readValueFromInstance: function(t, e) {
              var n;
              return (0, Le._c)(e)
                ? (null === (n = (0, We.A)(e)) || void 0 === n ? void 0 : n.default) || 0
                : ((e = Qe.s.has(e) ? e : (0, Ke.D)(e)), t.getAttribute(e));
            },
            scrapeMotionValuesFromProps: $e.U,
            build: function(t, e, n, i, o) {
              (0, Ze.i)(e, n, i, o.transformTemplate);
            },
            render: Je.K
          })
        ),
        en = n(62627),
        nn = (0, i.__assign)(
          (0, i.__assign)(
            {
              renderer: function(t, e) {
                return (0, en.q)(t) ? tn(e, { enableHardwareAcceleration: !1 }) : qe(e, { enableHardwareAcceleration: !0 });
              }
            },
            oe
          ),
          ge
        ),
        on = n(12064),
        rn = n(84710),
        an = ['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'],
        sn = an.length,
        un = function(t) {
          return 'string' === typeof t ? parseFloat(t) : t;
        },
        ln = function(t) {
          return 'number' === typeof t || Et.px.test(t);
        };
      function cn(t, e) {
        var n;
        return null !== (n = t[e]) && void 0 !== n ? n : t.borderRadius;
      }
      var dn = pn(0, 0.5, rn.Bn),
        vn = pn(0.5, 0.95, rn.GE);
      function pn(t, e, n) {
        return function(i) {
          return i < t ? 0 : i > e ? 1 : n((0, G.Y)(t, e, i));
        };
      }
      function hn(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function fn(t, e) {
        hn(t.x, e.x), hn(t.y, e.y);
      }
      function mn(t, e, n, i, o) {
        return (t = ct((t -= e), 1 / n, i)), void 0 !== o && (t = ct(t, 1 / o, i)), t;
      }
      function gn(t, e, n, o, r) {
        var a = (0, i.__read)(n, 3),
          s = a[0],
          u = a[1],
          l = a[2];
        !(function(t, e, n, i, o, r, a) {
          if (
            (void 0 === e && (e = 0),
            void 0 === n && (n = 1),
            void 0 === i && (i = 0.5),
            void 0 === r && (r = t),
            void 0 === a && (a = t),
            Et.aQ.test(e) && ((e = parseFloat(e)), (e = (0, z.C)(a.min, a.max, e / 100) - a.min)),
            'number' === typeof e)
          ) {
            var s = (0, z.C)(r.min, r.max, i);
            t === r && (s -= e), (t.min = mn(t.min, e, n, s, o)), (t.max = mn(t.max, e, n, s, o));
          }
        })(t, e[s], e[u], e[l], e.scale, o, r);
      }
      var yn = ['x', 'scaleX', 'originX'],
        xn = ['y', 'scaleY', 'originY'];
      function Pn(t, e, n, i) {
        gn(t.x, e, yn, null === n || void 0 === n ? void 0 : n.x, null === i || void 0 === i ? void 0 : i.x),
          gn(t.y, e, xn, null === n || void 0 === n ? void 0 : n.y, null === i || void 0 === i ? void 0 : i.y);
      }
      function En(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function Tn(t) {
        return En(t.x) && En(t.y);
      }
      function Vn(t, e) {
        return t.x.min === e.x.min && t.x.max === e.x.max && t.y.min === e.y.min && t.y.max === e.y.max;
      }
      var _n = n(10010),
        An = (function() {
          function t() {
            this.members = [];
          }
          return (
            (t.prototype.add = function(t) {
              (0, _n.y4)(this.members, t), t.scheduleRender();
            }),
            (t.prototype.remove = function(t) {
              if (((0, _n.cl)(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead)) {
                var e = this.members[this.members.length - 1];
                e && this.promote(e);
              }
            }),
            (t.prototype.relegate = function(t) {
              var e,
                n = this.members.findIndex(function(e) {
                  return t === e;
                });
              if (0 === n) return !1;
              for (var i = n; i >= 0; i--) {
                var o = this.members[i];
                if (!1 !== o.isPresent) {
                  e = o;
                  break;
                }
              }
              return !!e && (this.promote(e), !0);
            }),
            (t.prototype.promote = function(t, e) {
              var n,
                i = this.lead;
              t !== i &&
                ((this.prevLead = i),
                (this.lead = t),
                t.show(),
                i &&
                  (i.instance && i.scheduleRender(),
                  t.scheduleRender(),
                  (t.resumeFrom = i),
                  e && (t.resumeFrom.preserveOpacity = !0),
                  i.snapshot &&
                    ((t.snapshot = i.snapshot), (t.snapshot.latestValues = i.animationValues || i.latestValues), (t.snapshot.isShared = !0)),
                  (null === (n = t.root) || void 0 === n ? void 0 : n.isUpdating) && (t.isLayoutDirty = !0),
                  !1 === t.options.crossfade && i.hide()));
            }),
            (t.prototype.exitAnimationComplete = function() {
              this.members.forEach(function(t) {
                var e, n, i, o, r;
                null === (n = (e = t.options).onExitComplete) || void 0 === n || n.call(e),
                  null === (r = null === (i = t.resumingFrom) || void 0 === i ? void 0 : (o = i.options).onExitComplete) || void 0 === r || r.call(o);
              });
            }),
            (t.prototype.scheduleRender = function() {
              this.members.forEach(function(t) {
                t.instance && t.scheduleRender(!1);
              });
            }),
            (t.prototype.removeLeadSnapshot = function() {
              this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
            }),
            t
          );
        })();
      function Sn(t, e, n) {
        var i = t.x.translate / e.x,
          o = t.y.translate / e.y,
          r = 'translate3d('.concat(i, 'px, ').concat(o, 'px, 0) ');
        if (((r += 'scale('.concat(1 / e.x, ', ').concat(1 / e.y, ') ')), n)) {
          var a = n.rotate,
            s = n.rotateX,
            u = n.rotateY;
          a && (r += 'rotate('.concat(a, 'deg) ')), s && (r += 'rotateX('.concat(s, 'deg) ')), u && (r += 'rotateY('.concat(u, 'deg) '));
        }
        var l = t.x.scale * e.x,
          c = t.y.scale * e.y;
        return 'translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)' === (r += 'scale('.concat(l, ', ').concat(c, ')')) ? 'none' : r;
      }
      var wn = function(t, e) {
          return t.depth - e.depth;
        },
        bn = (function() {
          function t() {
            (this.children = []), (this.isDirty = !1);
          }
          return (
            (t.prototype.add = function(t) {
              (0, _n.y4)(this.children, t), (this.isDirty = !0);
            }),
            (t.prototype.remove = function(t) {
              (0, _n.cl)(this.children, t), (this.isDirty = !0);
            }),
            (t.prototype.forEach = function(t) {
              this.isDirty && this.children.sort(wn), (this.isDirty = !1), this.children.forEach(t);
            }),
            t
          );
        })(),
        Cn = n(16399);
      function Ln(t) {
        var e = t.attachResizeListener,
          n = t.defaultParent,
          o = t.measureScroll,
          r = t.checkIsScrollRoot,
          a = t.resetTransform;
        return (function() {
          function t(t, e, o) {
            var r = this;
            void 0 === e && (e = {}),
              void 0 === o && (o = null === n || void 0 === n ? void 0 : n()),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.potentialNodes = new Map()),
              (this.checkUpdateFailed = function() {
                r.isUpdating && ((r.isUpdating = !1), r.clearAllSnapshots());
              }),
              (this.updateProjection = function() {
                r.nodes.forEach(jn), r.nodes.forEach(In);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.id = t),
              (this.latestValues = e),
              (this.root = o ? o.root || o : this),
              (this.path = o ? (0, i.__spreadArray)((0, i.__spreadArray)([], (0, i.__read)(o.path), !1), [o], !1) : []),
              (this.parent = o),
              (this.depth = o ? o.depth + 1 : 0),
              t && this.root.registerPotentialNode(t, this);
            for (var a = 0; a < this.path.length; a++) this.path[a].shouldResetTransform = !0;
            this.root === this && (this.nodes = new bn());
          }
          return (
            (t.prototype.addEventListener = function(t, e) {
              return this.eventHandlers.has(t) || this.eventHandlers.set(t, new Pe.L()), this.eventHandlers.get(t).add(e);
            }),
            (t.prototype.notifyListeners = function(t) {
              for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
              var o = this.eventHandlers.get(t);
              null === o || void 0 === o || o.notify.apply(o, (0, i.__spreadArray)([], (0, i.__read)(e), !1));
            }),
            (t.prototype.hasListeners = function(t) {
              return this.eventHandlers.has(t);
            }),
            (t.prototype.registerPotentialNode = function(t, e) {
              this.potentialNodes.set(t, e);
            }),
            (t.prototype.mount = function(t, n) {
              var o,
                r = this;
              if ((void 0 === n && (n = !1), !this.instance)) {
                (this.isSVG = t instanceof SVGElement && 'svg' !== t.tagName), (this.instance = t);
                var a = this.options,
                  s = a.layoutId,
                  u = a.layout,
                  l = a.visualElement;
                if (
                  (l && !l.getInstance() && l.mount(t),
                  this.root.nodes.add(this),
                  null === (o = this.parent) || void 0 === o || o.children.add(this),
                  this.id && this.root.potentialNodes.delete(this.id),
                  n && (u || s) && (this.isLayoutDirty = !0),
                  e)
                ) {
                  var c,
                    d = function() {
                      return (r.root.updateBlockedByResize = !1);
                    };
                  e(t, function() {
                    (r.root.updateBlockedByResize = !0),
                      clearTimeout(c),
                      (c = window.setTimeout(d, 250)),
                      Bt.V.hasAnimatedSinceResize && ((Bt.V.hasAnimatedSinceResize = !1), r.nodes.forEach(Fn));
                  });
                }
                s && this.root.registerSharedNode(s, this),
                  !1 !== this.options.animate &&
                    l &&
                    (s || u) &&
                    this.addEventListener('didUpdate', function(t) {
                      var e,
                        n,
                        o,
                        a,
                        s,
                        u = t.delta,
                        c = t.hasLayoutChanged,
                        d = t.hasRelativeTargetChanged,
                        v = t.layout;
                      if (r.isTreeAnimationBlocked()) return (r.target = void 0), void (r.relativeTarget = void 0);
                      var p =
                          null !== (n = null !== (e = r.options.transition) && void 0 !== e ? e : l.getDefaultTransition()) && void 0 !== n ? n : Hn,
                        h = l.getProps(),
                        f = h.onLayoutAnimationStart,
                        m = h.onLayoutAnimationComplete,
                        g = !r.targetLayout || !Vn(r.targetLayout, v) || d,
                        y = !c && d;
                      if ((null === (o = r.resumeFrom) || void 0 === o ? void 0 : o.instance) || y || (c && (g || !r.currentAnimation))) {
                        r.resumeFrom && ((r.resumingFrom = r.resumeFrom), (r.resumingFrom.resumingFrom = void 0)), r.setAnimationOrigin(u, y);
                        var x = (0, i.__assign)((0, i.__assign)({}, (0, Pt.ev)(p, 'layout')), { onPlay: f, onComplete: m });
                        l.shouldReduceMotion && ((x.delay = 0), (x.type = !1)), r.startAnimation(x);
                      } else c || 0 !== r.animationProgress || r.finishAnimation(), r.isLead() && (null === (s = (a = r.options).onExitComplete) || void 0 === s || s.call(a));
                      r.targetLayout = v;
                    });
              }
            }),
            (t.prototype.unmount = function() {
              var t, e;
              this.options.layoutId && this.willUpdate(),
                this.root.nodes.remove(this),
                null === (t = this.getStack()) || void 0 === t || t.remove(this),
                null === (e = this.parent) || void 0 === e || e.children.delete(this),
                (this.instance = void 0),
                p.qY.preRender(this.updateProjection);
            }),
            (t.prototype.blockUpdate = function() {
              this.updateManuallyBlocked = !0;
            }),
            (t.prototype.unblockUpdate = function() {
              this.updateManuallyBlocked = !1;
            }),
            (t.prototype.isUpdateBlocked = function() {
              return this.updateManuallyBlocked || this.updateBlockedByResize;
            }),
            (t.prototype.isTreeAnimationBlocked = function() {
              var t;
              return this.isAnimationBlocked || (null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimationBlocked()) || !1;
            }),
            (t.prototype.startUpdate = function() {
              var t;
              this.isUpdateBlocked() || ((this.isUpdating = !0), null === (t = this.nodes) || void 0 === t || t.forEach(Un));
            }),
            (t.prototype.willUpdate = function(t) {
              var e, n, i;
              if ((void 0 === t && (t = !0), this.root.isUpdateBlocked()))
                null === (n = (e = this.options).onExitComplete) || void 0 === n || n.call(e);
              else if ((!this.root.isUpdating && this.root.startUpdate(), !this.isLayoutDirty)) {
                this.isLayoutDirty = !0;
                for (var o = 0; o < this.path.length; o++) {
                  var r = this.path[o];
                  (r.shouldResetTransform = !0), r.updateScroll();
                }
                var a = this.options,
                  s = a.layoutId,
                  u = a.layout;
                if (void 0 !== s || u) {
                  var l = null === (i = this.options.visualElement) || void 0 === i ? void 0 : i.getProps().transformTemplate;
                  (this.prevTransformTemplateValue = null === l || void 0 === l ? void 0 : l(this.latestValues, '')),
                    this.updateSnapshot(),
                    t && this.notifyListeners('willUpdate');
                }
              }
            }),
            (t.prototype.didUpdate = function() {
              if (this.isUpdateBlocked()) return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(kn);
              this.isUpdating &&
                ((this.isUpdating = !1),
                this.potentialNodes.size && (this.potentialNodes.forEach(Yn), this.potentialNodes.clear()),
                this.nodes.forEach(Bn),
                this.nodes.forEach(Rn),
                this.nodes.forEach(Dn),
                this.clearAllSnapshots(),
                p.iW.update(),
                p.iW.preRender(),
                p.iW.render());
            }),
            (t.prototype.clearAllSnapshots = function() {
              this.nodes.forEach(Mn), this.sharedNodes.forEach(On);
            }),
            (t.prototype.scheduleUpdateProjection = function() {
              p.ZP.preRender(this.updateProjection, !1, !0);
            }),
            (t.prototype.scheduleCheckAfterUnmount = function() {
              var t = this;
              p.ZP.postRender(function() {
                t.isLayoutDirty ? t.root.didUpdate() : t.root.checkUpdateFailed();
              });
            }),
            (t.prototype.updateSnapshot = function() {
              if (!this.snapshot && this.instance) {
                var t = this.measure(),
                  e = this.removeTransform(this.removeElementScroll(t));
                Xn(e), (this.snapshot = { measured: t, layout: e, latestValues: {} });
              }
            }),
            (t.prototype.updateLayout = function() {
              var t;
              if (this.instance && (this.updateScroll(), (this.options.alwaysMeasureLayout && this.isLead()) || this.isLayoutDirty)) {
                if (this.resumeFrom && !this.resumeFrom.instance)
                  for (var e = 0; e < this.path.length; e++) {
                    this.path[e].updateScroll();
                  }
                var n = this.measure();
                Xn(n);
                var i = this.layout;
                (this.layout = { measured: n, actual: this.removeElementScroll(n) }),
                  (this.layoutCorrected = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
                  (this.isLayoutDirty = !1),
                  (this.projectionDelta = void 0),
                  this.notifyListeners('measure', this.layout.actual),
                  null === (t = this.options.visualElement) ||
                    void 0 === t ||
                    t.notifyLayoutMeasure(this.layout.actual, null === i || void 0 === i ? void 0 : i.actual);
              }
            }),
            (t.prototype.updateScroll = function() {
              this.options.layoutScroll && this.instance && ((this.isScrollRoot = r(this.instance)), (this.scroll = o(this.instance)));
            }),
            (t.prototype.resetTransform = function() {
              var t;
              if (a) {
                var e = this.isLayoutDirty || this.shouldResetTransform,
                  n = this.projectionDelta && !Tn(this.projectionDelta),
                  i = null === (t = this.options.visualElement) || void 0 === t ? void 0 : t.getProps().transformTemplate,
                  o = null === i || void 0 === i ? void 0 : i(this.latestValues, ''),
                  r = o !== this.prevTransformTemplateValue;
                e && (n || ut(this.latestValues) || r) && (a(this.instance, o), (this.shouldResetTransform = !1), this.scheduleRender());
              }
            }),
            (t.prototype.measure = function() {
              var t = this.options.visualElement;
              if (!t) return { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              var e = t.measureViewportBox(),
                n = this.root.scroll;
              return n && (ht(e.x, n.x), ht(e.y, n.y)), e;
            }),
            (t.prototype.removeElementScroll = function(t) {
              var e = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              fn(e, t);
              for (var n = 0; n < this.path.length; n++) {
                var i = this.path[n],
                  o = i.scroll,
                  r = i.options,
                  a = i.isScrollRoot;
                if (i !== this.root && o && r.layoutScroll) {
                  if (a) {
                    fn(e, t);
                    var s = this.root.scroll;
                    s && (ht(e.x, -s.x), ht(e.y, -s.y));
                  }
                  ht(e.x, o.x), ht(e.y, o.y);
                }
              }
              return e;
            }),
            (t.prototype.applyTransform = function(t, e) {
              void 0 === e && (e = !1);
              var n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              fn(n, t);
              for (var i = 0; i < this.path.length; i++) {
                var o = this.path[i];
                !e && o.options.layoutScroll && o.scroll && o !== o.root && yt(n, { x: -o.scroll.x, y: -o.scroll.y }),
                  ut(o.latestValues) && yt(n, o.latestValues);
              }
              return ut(this.latestValues) && yt(n, this.latestValues), n;
            }),
            (t.prototype.removeTransform = function(t) {
              var e,
                n = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              fn(n, t);
              for (var i = 0; i < this.path.length; i++) {
                var o = this.path[i];
                if (o.instance && ut(o.latestValues)) {
                  st(o.latestValues) && o.updateSnapshot();
                  var r = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
                  fn(r, o.measure()), Pn(n, o.latestValues, null === (e = o.snapshot) || void 0 === e ? void 0 : e.layout, r);
                }
              }
              return ut(this.latestValues) && Pn(n, this.latestValues), n;
            }),
            (t.prototype.setTargetDelta = function(t) {
              (this.targetDelta = t), this.root.scheduleUpdateProjection();
            }),
            (t.prototype.setOptions = function(t) {
              var e;
              this.options = (0, i.__assign)((0, i.__assign)((0, i.__assign)({}, this.options), t), {
                crossfade: null === (e = t.crossfade) || void 0 === e || e
              });
            }),
            (t.prototype.clearMeasurements = function() {
              (this.scroll = void 0),
                (this.layout = void 0),
                (this.snapshot = void 0),
                (this.prevTransformTemplateValue = void 0),
                (this.targetDelta = void 0),
                (this.target = void 0),
                (this.isLayoutDirty = !1);
            }),
            (t.prototype.resolveTargetDelta = function() {
              var t,
                e,
                n,
                i,
                o = this.options,
                r = o.layout,
                a = o.layoutId;
              this.layout &&
                (r || a) &&
                (this.targetDelta ||
                  this.relativeTarget ||
                  ((this.relativeParent = this.getClosestProjectingParent()),
                  this.relativeParent &&
                    this.relativeParent.layout &&
                    ((this.relativeTarget = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
                    (this.relativeTargetOrigin = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
                    K(this.relativeTargetOrigin, this.layout.actual, this.relativeParent.layout.actual),
                    fn(this.relativeTarget, this.relativeTargetOrigin))),
                (this.relativeTarget || this.targetDelta) &&
                  (this.target ||
                    ((this.target = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
                    (this.targetWithTransforms = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } })),
                  this.relativeTarget && this.relativeTargetOrigin && (null === (t = this.relativeParent) || void 0 === t ? void 0 : t.target)
                    ? ((e = this.target), (n = this.relativeTarget), (i = this.relativeParent.target), $(e.x, n.x, i.x), $(e.y, n.y, i.y))
                    : this.targetDelta
                    ? (Boolean(this.resumingFrom) ? (this.target = this.applyTransform(this.layout.actual)) : fn(this.target, this.layout.actual),
                      pt(this.target, this.targetDelta))
                    : fn(this.target, this.layout.actual),
                  this.attemptToResolveRelativeTarget &&
                    ((this.attemptToResolveRelativeTarget = !1),
                    (this.relativeParent = this.getClosestProjectingParent()),
                    this.relativeParent &&
                      Boolean(this.relativeParent.resumingFrom) === Boolean(this.resumingFrom) &&
                      !this.relativeParent.options.layoutScroll &&
                      this.relativeParent.target &&
                      ((this.relativeTarget = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
                      (this.relativeTargetOrigin = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } }),
                      K(this.relativeTargetOrigin, this.target, this.relativeParent.target),
                      fn(this.relativeTarget, this.relativeTargetOrigin)))));
            }),
            (t.prototype.getClosestProjectingParent = function() {
              if (this.parent && !ut(this.parent.latestValues))
                return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout
                  ? this.parent
                  : this.parent.getClosestProjectingParent();
            }),
            (t.prototype.calcProjection = function() {
              var t,
                e = this.options,
                n = e.layout,
                i = e.layoutId;
              if (
                ((this.isTreeAnimating = Boolean(
                  (null === (t = this.parent) || void 0 === t ? void 0 : t.isTreeAnimating) || this.currentAnimation || this.pendingAnimation
                )),
                this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
                this.layout && (n || i))
              ) {
                var o = this.getLead();
                fn(this.layoutCorrected, this.layout.actual),
                  (function(t, e, n, i) {
                    var o, r;
                    void 0 === i && (i = !1);
                    var a = n.length;
                    if (a) {
                      var s, u;
                      e.x = e.y = 1;
                      for (var l = 0; l < a; l++)
                        (u = (s = n[l]).projectionDelta),
                          'contents' !==
                            (null === (r = null === (o = s.instance) || void 0 === o ? void 0 : o.style) || void 0 === r ? void 0 : r.display) &&
                            (i && s.options.layoutScroll && s.scroll && s !== s.root && yt(t, { x: -s.scroll.x, y: -s.scroll.y }),
                            u && ((e.x *= u.x.scale), (e.y *= u.y.scale), pt(t, u)),
                            i && ut(s.latestValues) && yt(t, s.latestValues));
                    }
                  })(this.layoutCorrected, this.treeScale, this.path, Boolean(this.resumingFrom) || this !== o);
                var r = o.target;
                if (r) {
                  this.projectionDelta ||
                    ((this.projectionDelta = {
                      x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                      y: { translate: 0, scale: 1, origin: 0, originPoint: 0 }
                    }),
                    (this.projectionDeltaWithTransform = {
                      x: { translate: 0, scale: 1, origin: 0, originPoint: 0 },
                      y: { translate: 0, scale: 1, origin: 0, originPoint: 0 }
                    }));
                  var a = this.treeScale.x,
                    s = this.treeScale.y,
                    u = this.projectionTransform;
                  q(this.projectionDelta, this.layoutCorrected, r, this.latestValues),
                    (this.projectionTransform = Sn(this.projectionDelta, this.treeScale)),
                    (this.projectionTransform === u && this.treeScale.x === a && this.treeScale.y === s) ||
                      ((this.hasProjected = !0), this.scheduleRender(), this.notifyListeners('projectionUpdate', r));
                }
              }
            }),
            (t.prototype.hide = function() {
              this.isVisible = !1;
            }),
            (t.prototype.show = function() {
              this.isVisible = !0;
            }),
            (t.prototype.scheduleRender = function(t) {
              var e, n, i;
              void 0 === t && (t = !0),
                null === (n = (e = this.options).scheduleRender) || void 0 === n || n.call(e),
                t && (null === (i = this.getStack()) || void 0 === i || i.scheduleRender()),
                this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
            }),
            (t.prototype.setAnimationOrigin = function(t, e) {
              var n,
                o = this;
              void 0 === e && (e = !1);
              var r = this.snapshot,
                a = (null === r || void 0 === r ? void 0 : r.latestValues) || {},
                s = (0, i.__assign)({}, this.latestValues),
                u = { x: { translate: 0, scale: 1, origin: 0, originPoint: 0 }, y: { translate: 0, scale: 1, origin: 0, originPoint: 0 } };
              (this.relativeTarget = this.relativeTargetOrigin = void 0), (this.attemptToResolveRelativeTarget = !e);
              var l = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } },
                c = null === r || void 0 === r ? void 0 : r.isShared,
                d = ((null === (n = this.getStack()) || void 0 === n ? void 0 : n.members.length) || 0) <= 1,
                v = Boolean(c && !d && !0 === this.options.crossfade && !this.path.some(Gn));
              (this.animationProgress = 0),
                (this.mixTargetDelta = function(e) {
                  var n,
                    i,
                    r,
                    p,
                    h,
                    f = e / 1e3;
                  Nn(u.x, t.x, f),
                    Nn(u.y, t.y, f),
                    o.setTargetDelta(u),
                    o.relativeTarget &&
                      o.relativeTargetOrigin &&
                      o.layout &&
                      (null === (n = o.relativeParent) || void 0 === n ? void 0 : n.layout) &&
                      (K(l, o.layout.actual, o.relativeParent.layout.actual),
                      (i = o.relativeTarget),
                      (r = o.relativeTargetOrigin),
                      (p = l),
                      (h = f),
                      zn(i.x, r.x, p.x, h),
                      zn(i.y, r.y, p.y, h)),
                    c &&
                      ((o.animationValues = s),
                      (function(t, e, n, i, o, r) {
                        var a, s, u, l;
                        o
                          ? ((t.opacity = (0, z.C)(0, null !== (a = n.opacity) && void 0 !== a ? a : 1, dn(i))),
                            (t.opacityExit = (0, z.C)(null !== (s = e.opacity) && void 0 !== s ? s : 1, 0, vn(i))))
                          : r &&
                            (t.opacity = (0, z.C)(
                              null !== (u = e.opacity) && void 0 !== u ? u : 1,
                              null !== (l = n.opacity) && void 0 !== l ? l : 1,
                              i
                            ));
                        for (var c = 0; c < sn; c++) {
                          var d = 'border'.concat(an[c], 'Radius'),
                            v = cn(e, d),
                            p = cn(n, d);
                          (void 0 === v && void 0 === p) ||
                            (v || (v = 0),
                            p || (p = 0),
                            0 === v || 0 === p || ln(v) === ln(p)
                              ? ((t[d] = Math.max((0, z.C)(un(v), un(p), i), 0)), (Et.aQ.test(p) || Et.aQ.test(v)) && (t[d] += '%'))
                              : (t[d] = p));
                        }
                        (e.rotate || n.rotate) && (t.rotate = (0, z.C)(e.rotate || 0, n.rotate || 0, i));
                      })(s, a, o.latestValues, f, v, d)),
                    o.root.scheduleUpdateProjection(),
                    o.scheduleRender(),
                    (o.animationProgress = f);
                }),
                this.mixTargetDelta(0);
            }),
            (t.prototype.startAnimation = function(t) {
              var e,
                n,
                o = this;
              this.notifyListeners('animationStart'),
                null === (e = this.currentAnimation) || void 0 === e || e.stop(),
                this.resumingFrom && (null === (n = this.resumingFrom.currentAnimation) || void 0 === n || n.stop()),
                this.pendingAnimation && (p.qY.update(this.pendingAnimation), (this.pendingAnimation = void 0)),
                (this.pendingAnimation = p.ZP.update(function() {
                  (Bt.V.hasAnimatedSinceResize = !0),
                    (o.currentAnimation = (0, on.j)(
                      0,
                      1e3,
                      (0, i.__assign)((0, i.__assign)({}, t), {
                        onUpdate: function(e) {
                          var n;
                          o.mixTargetDelta(e), null === (n = t.onUpdate) || void 0 === n || n.call(t, e);
                        },
                        onComplete: function() {
                          var e;
                          null === (e = t.onComplete) || void 0 === e || e.call(t), o.completeAnimation();
                        }
                      })
                    )),
                    o.resumingFrom && (o.resumingFrom.currentAnimation = o.currentAnimation),
                    (o.pendingAnimation = void 0);
                }));
            }),
            (t.prototype.completeAnimation = function() {
              var t;
              this.resumingFrom && ((this.resumingFrom.currentAnimation = void 0), (this.resumingFrom.preserveOpacity = void 0)),
                null === (t = this.getStack()) || void 0 === t || t.exitAnimationComplete(),
                (this.resumingFrom = this.currentAnimation = this.animationValues = void 0),
                this.notifyListeners('animationComplete');
            }),
            (t.prototype.finishAnimation = function() {
              var t;
              this.currentAnimation && (null === (t = this.mixTargetDelta) || void 0 === t || t.call(this, 1e3), this.currentAnimation.stop()),
                this.completeAnimation();
            }),
            (t.prototype.applyTransformsToTarget = function() {
              var t = this.getLead(),
                e = t.targetWithTransforms,
                n = t.target,
                i = t.layout,
                o = t.latestValues;
              e && n && i && (fn(e, n), yt(e, o), q(this.projectionDeltaWithTransform, this.layoutCorrected, e, o));
            }),
            (t.prototype.registerSharedNode = function(t, e) {
              var n, i, o;
              this.sharedNodes.has(t) || this.sharedNodes.set(t, new An()),
                this.sharedNodes.get(t).add(e),
                e.promote({
                  transition: null === (n = e.options.initialPromotionConfig) || void 0 === n ? void 0 : n.transition,
                  preserveFollowOpacity:
                    null === (o = null === (i = e.options.initialPromotionConfig) || void 0 === i ? void 0 : i.shouldPreserveFollowOpacity) ||
                    void 0 === o
                      ? void 0
                      : o.call(i, e)
                });
            }),
            (t.prototype.isLead = function() {
              var t = this.getStack();
              return !t || t.lead === this;
            }),
            (t.prototype.getLead = function() {
              var t;
              return (this.options.layoutId && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead)) || this;
            }),
            (t.prototype.getPrevLead = function() {
              var t;
              return this.options.layoutId ? (null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead) : void 0;
            }),
            (t.prototype.getStack = function() {
              var t = this.options.layoutId;
              if (t) return this.root.sharedNodes.get(t);
            }),
            (t.prototype.promote = function(t) {
              var e = void 0 === t ? {} : t,
                n = e.needsReset,
                i = e.transition,
                o = e.preserveFollowOpacity,
                r = this.getStack();
              r && r.promote(this, o), n && ((this.projectionDelta = void 0), (this.needsReset = !0)), i && this.setOptions({ transition: i });
            }),
            (t.prototype.relegate = function() {
              var t = this.getStack();
              return !!t && t.relegate(this);
            }),
            (t.prototype.resetRotation = function() {
              var t = this.options.visualElement;
              if (t) {
                for (var e = !1, n = {}, i = 0; i < Le.r$.length; i++) {
                  var o = 'rotate' + Le.r$[i];
                  t.getStaticValue(o) && ((e = !0), (n[o] = t.getStaticValue(o)), t.setStaticValue(o, 0));
                }
                if (e) {
                  for (var o in (null === t || void 0 === t || t.syncRender(), n)) t.setStaticValue(o, n[o]);
                  t.scheduleRender();
                }
              }
            }),
            (t.prototype.getProjectionStyles = function(t) {
              var e, n, i, o, r, a;
              void 0 === t && (t = {});
              var s = {};
              if (!this.instance || this.isSVG) return s;
              if (!this.isVisible) return { visibility: 'hidden' };
              s.visibility = '';
              var u = null === (e = this.options.visualElement) || void 0 === e ? void 0 : e.getProps().transformTemplate;
              if (this.needsReset)
                return (
                  (this.needsReset = !1),
                  (s.opacity = ''),
                  (s.pointerEvents = (0, Cn.b)(t.pointerEvents) || ''),
                  (s.transform = u ? u(this.latestValues, '') : 'none'),
                  s
                );
              var l = this.getLead();
              if (!this.projectionDelta || !this.layout || !l.target) {
                var c = {};
                return (
                  this.options.layoutId &&
                    ((c.opacity = null !== (n = this.latestValues.opacity) && void 0 !== n ? n : 1),
                    (c.pointerEvents = (0, Cn.b)(t.pointerEvents) || '')),
                  this.hasProjected && !ut(this.latestValues) && ((c.transform = u ? u({}, '') : 'none'), (this.hasProjected = !1)),
                  c
                );
              }
              var d = l.animationValues || l.latestValues;
              this.applyTransformsToTarget(),
                (s.transform = Sn(this.projectionDeltaWithTransform, this.treeScale, d)),
                u && (s.transform = u(d, s.transform));
              var v = this.projectionDelta,
                p = v.x,
                h = v.y;
              for (var f in ((s.transformOrigin = ''.concat(100 * p.origin, '% ').concat(100 * h.origin, '% 0')),
              l.animationValues
                ? (s.opacity =
                    l === this
                      ? null !== (o = null !== (i = d.opacity) && void 0 !== i ? i : this.latestValues.opacity) && void 0 !== o
                        ? o
                        : 1
                      : this.preserveOpacity
                      ? this.latestValues.opacity
                      : d.opacityExit)
                : (s.opacity =
                    l === this ? (null !== (r = d.opacity) && void 0 !== r ? r : '') : null !== (a = d.opacityExit) && void 0 !== a ? a : 0),
              Ht.P))
                if (void 0 !== d[f]) {
                  var m = Ht.P[f],
                    g = m.correct,
                    y = m.applyTo,
                    x = g(d[f], l);
                  if (y) for (var P = y.length, E = 0; E < P; E++) s[y[E]] = x;
                  else s[f] = x;
                }
              return this.options.layoutId && (s.pointerEvents = l === this ? (0, Cn.b)(t.pointerEvents) || '' : 'none'), s;
            }),
            (t.prototype.clearSnapshot = function() {
              this.resumeFrom = this.snapshot = void 0;
            }),
            (t.prototype.resetTree = function() {
              this.root.nodes.forEach(function(t) {
                var e;
                return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop();
              }),
                this.root.nodes.forEach(kn),
                this.root.sharedNodes.clear();
            }),
            t
          );
        })();
      }
      function Rn(t) {
        t.updateLayout();
      }
      function Dn(t) {
        var e,
          n,
          i,
          o,
          r = null !== (n = null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) && void 0 !== n ? n : t.snapshot;
        if (t.isLead() && t.layout && r && t.hasListeners('didUpdate')) {
          var a = t.layout,
            s = a.actual,
            u = a.measured;
          'size' === t.options.animationType
            ? ot(function(t) {
                var e = r.isShared ? r.measured[t] : r.layout[t],
                  n = Y(e);
                (e.min = s[t].min), (e.max = e.min + n);
              })
            : 'position' === t.options.animationType &&
              ot(function(t) {
                var e = r.isShared ? r.measured[t] : r.layout[t],
                  n = Y(s[t]);
                e.max = e.min + n;
              });
          var l = { x: { translate: 0, scale: 1, origin: 0, originPoint: 0 }, y: { translate: 0, scale: 1, origin: 0, originPoint: 0 } };
          q(l, s, r.layout);
          var c = { x: { translate: 0, scale: 1, origin: 0, originPoint: 0 }, y: { translate: 0, scale: 1, origin: 0, originPoint: 0 } };
          r.isShared ? q(c, t.applyTransform(u, !0), r.measured) : q(c, s, r.layout);
          var d = !Tn(l),
            v = !1;
          if (!t.resumeFrom && ((t.relativeParent = t.getClosestProjectingParent()), t.relativeParent && !t.relativeParent.resumeFrom)) {
            var p = t.relativeParent,
              h = p.snapshot,
              f = p.layout;
            if (h && f) {
              var m = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              K(m, r.layout, h.layout);
              var g = { x: { min: 0, max: 0 }, y: { min: 0, max: 0 } };
              K(g, s, f.actual), Vn(m, g) || (v = !0);
            }
          }
          t.notifyListeners('didUpdate', { layout: s, snapshot: r, delta: c, layoutDelta: l, hasLayoutChanged: d, hasRelativeTargetChanged: v });
        } else t.isLead() && (null === (o = (i = t.options).onExitComplete) || void 0 === o || o.call(i));
        t.options.transition = void 0;
      }
      function Mn(t) {
        t.clearSnapshot();
      }
      function kn(t) {
        t.clearMeasurements();
      }
      function Bn(t) {
        var e = t.options.visualElement;
        (null === e || void 0 === e ? void 0 : e.getProps().onBeforeLayoutMeasure) && e.notifyBeforeLayoutMeasure(), t.resetTransform();
      }
      function Fn(t) {
        t.finishAnimation(), (t.targetDelta = t.relativeTarget = t.target = void 0);
      }
      function jn(t) {
        t.resolveTargetDelta();
      }
      function In(t) {
        t.calcProjection();
      }
      function Un(t) {
        t.resetRotation();
      }
      function On(t) {
        t.removeLeadSnapshot();
      }
      function Nn(t, e, n) {
        (t.translate = (0, z.C)(e.translate, 0, n)), (t.scale = (0, z.C)(e.scale, 1, n)), (t.origin = e.origin), (t.originPoint = e.originPoint);
      }
      function zn(t, e, n, i) {
        (t.min = (0, z.C)(e.min, n.min, i)), (t.max = (0, z.C)(e.max, n.max, i));
      }
      function Gn(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      var Hn = { duration: 0.45, ease: [0.4, 0, 0.1, 1] };
      function Yn(t, e) {
        for (var n = t.root, i = t.path.length - 1; i >= 0; i--)
          if (Boolean(t.path[i].instance)) {
            n = t.path[i];
            break;
          }
        var o = (n && n !== t.root ? n.instance : document).querySelector('[data-projection-id="'.concat(e, '"]'));
        o && t.mount(o, !0);
      }
      function Wn(t) {
        (t.min = Math.round(t.min)), (t.max = Math.round(t.max));
      }
      function Xn(t) {
        Wn(t.x), Wn(t.y);
      }
      var qn = Ln({
          attachResizeListener: function(t, e) {
            return f(t, 'resize', e);
          },
          measureScroll: function() {
            return {
              x: document.documentElement.scrollLeft || document.body.scrollLeft,
              y: document.documentElement.scrollTop || document.body.scrollTop
            };
          },
          checkIsScrollRoot: function() {
            return !0;
          }
        }),
        $n = { current: void 0 },
        Zn = Ln({
          measureScroll: function(t) {
            return { x: t.scrollLeft, y: t.scrollTop };
          },
          defaultParent: function() {
            if (!$n.current) {
              var t = new qn(0, {});
              t.mount(window), t.setOptions({ layoutScroll: !0 }), ($n.current = t);
            }
            return $n.current;
          },
          resetTransform: function(t, e) {
            t.style.transform = null !== e && void 0 !== e ? e : 'none';
          },
          checkIsScrollRoot: function(t) {
            return Boolean('fixed' === window.getComputedStyle(t).position);
          }
        }),
        Kn = (0, i.__assign)((0, i.__assign)((0, i.__assign)((0, i.__assign)({}, nn), Ct), Xt), { projectionNodeConstructor: Zn });
    },
    76316: function(t, e, n) {
      n.d(e, {
        M: function() {
          return a;
        }
      });
      var i = n(96681),
        o = 0,
        r = function() {
          return o++;
        },
        a = function() {
          return (0, i.h)(r);
        };
    },
    65411: function(t, e, n) {
      n.d(e, {
        z: function() {
          return o;
        }
      });
      var i = n(67294);
      function o(t) {
        return (0, i.useEffect)(function() {
          return function() {
            return t();
          };
        }, []);
      }
    }
  }
]);
