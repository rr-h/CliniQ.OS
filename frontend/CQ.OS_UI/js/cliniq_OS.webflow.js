/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
  var k_ = Object.create;
  var tn = Object.defineProperty;
  var W_ = Object.getOwnPropertyDescriptor;
  var B_ = Object.getOwnPropertyNames;
  var j_ = Object.getPrototypeOf,
    z_ = Object.prototype.hasOwnProperty;
  var fe = (e, t) => () => (e && (t = e((e = 0))), t);
  var c = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports),
    Ce = (e, t) => {
      for (var r in t) tn(e, r, { get: t[r], enumerable: !0 });
    },
    Ss = (e, t, r, n) => {
      if ((t && typeof t == "object") || typeof t == "function")
        for (let i of B_(t))
          !z_.call(e, i) &&
            i !== r &&
            tn(e, i, {
              get: () => t[i],
              enumerable: !(n = W_(t, i)) || n.enumerable,
            });
      return e;
    };
  var oe = (e, t, r) => (
    (r = e != null ? k_(j_(e)) : {}),
    Ss(
      t || !e || !e.__esModule
        ? tn(r, "default", { value: e, enumerable: !0 })
        : r,
      e
    )
  ),
    Ze = (e) => Ss(tn({}, "__esModule", { value: !0 }), e);
  var Ci = c(() => {
    "use strict";
    window.tram = (function (e) {
      function t(l, m) {
        var b = new V.Bare();
        return b.init(l, m);
      }
      function r(l) {
        return l.replace(/[A-Z]/g, function (m) {
          return "-" + m.toLowerCase();
        });
      }
      function n(l) {
        var m = parseInt(l.slice(1), 16),
          b = (m >> 16) & 255,
          w = (m >> 8) & 255,
          T = 255 & m;
        return [b, w, T];
      }
      function i(l, m, b) {
        return (
          "#" + ((1 << 24) | (l << 16) | (m << 8) | b).toString(16).slice(1)
        );
      }
      function o() { }
      function a(l, m) {
        f("Type warning: Expected: [" + l + "] Got: [" + typeof m + "] " + m);
      }
      function s(l, m, b) {
        f("Units do not match [" + l + "]: " + m + ", " + b);
      }
      function u(l, m, b) {
        if ((m !== void 0 && (b = m), l === void 0)) return b;
        var w = b;
        return (
          Ri.test(l) || !Jr.test(l)
            ? (w = parseInt(l, 10))
            : Jr.test(l) && (w = 1e3 * parseFloat(l)),
          0 > w && (w = 0),
          w === w ? w : b
        );
      }
      function f(l) {
        ae.debug && window && window.console.warn(l);
      }
      function g(l) {
        for (var m = -1, b = l ? l.length : 0, w = []; ++m < b;) {
          var T = l[m];
          T && w.push(T);
        }
        return w;
      }
      var d = (function (l, m, b) {
        function w(ee) {
          return typeof ee == "object";
        }
        function T(ee) {
          return typeof ee == "function";
        }
        function x() { }
        function Y(ee, ce) {
          function X() {
            var Oe = new te();
            return T(Oe.init) && Oe.init.apply(Oe, arguments), Oe;
          }
          function te() { }
          ce === b && ((ce = ee), (ee = Object)), (X.Bare = te);
          var ne,
            ve = (x[l] = ee[l]),
            Qe = (te[l] = X[l] = new x());
          return (
            (Qe.constructor = X),
            (X.mixin = function (Oe) {
              return (te[l] = X[l] = Y(X, Oe)[l]), X;
            }),
            (X.open = function (Oe) {
              if (
                ((ne = {}),
                  T(Oe) ? (ne = Oe.call(X, Qe, ve, X, ee)) : w(Oe) && (ne = Oe),
                  w(ne))
              )
                for (var vr in ne) m.call(ne, vr) && (Qe[vr] = ne[vr]);
              return T(Qe.init) || (Qe.init = ee), X;
            }),
            X.open(ce)
          );
        }
        return Y;
      })("prototype", {}.hasOwnProperty),
        h = {
          ease: [
            "ease",
            function (l, m, b, w) {
              var T = (l /= w) * l,
                x = T * l;
              return (
                m +
                b * (-2.75 * x * T + 11 * T * T + -15.5 * x + 8 * T + 0.25 * l)
              );
            },
          ],
          "ease-in": [
            "ease-in",
            function (l, m, b, w) {
              var T = (l /= w) * l,
                x = T * l;
              return m + b * (-1 * x * T + 3 * T * T + -3 * x + 2 * T);
            },
          ],
          "ease-out": [
            "ease-out",
            function (l, m, b, w) {
              var T = (l /= w) * l,
                x = T * l;
              return (
                m +
                b * (0.3 * x * T + -1.6 * T * T + 2.2 * x + -1.8 * T + 1.9 * l)
              );
            },
          ],
          "ease-in-out": [
            "ease-in-out",
            function (l, m, b, w) {
              var T = (l /= w) * l,
                x = T * l;
              return m + b * (2 * x * T + -5 * T * T + 2 * x + 2 * T);
            },
          ],
          linear: [
            "linear",
            function (l, m, b, w) {
              return (b * l) / w + m;
            },
          ],
          "ease-in-quad": [
            "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
            function (l, m, b, w) {
              return b * (l /= w) * l + m;
            },
          ],
          "ease-out-quad": [
            "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
            function (l, m, b, w) {
              return -b * (l /= w) * (l - 2) + m;
            },
          ],
          "ease-in-out-quad": [
            "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
            function (l, m, b, w) {
              return (l /= w / 2) < 1
                ? (b / 2) * l * l + m
                : (-b / 2) * (--l * (l - 2) - 1) + m;
            },
          ],
          "ease-in-cubic": [
            "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
            function (l, m, b, w) {
              return b * (l /= w) * l * l + m;
            },
          ],
          "ease-out-cubic": [
            "cubic-bezier(0.215, 0.610, 0.355, 1)",
            function (l, m, b, w) {
              return b * ((l = l / w - 1) * l * l + 1) + m;
            },
          ],
          "ease-in-out-cubic": [
            "cubic-bezier(0.645, 0.045, 0.355, 1)",
            function (l, m, b, w) {
              return (l /= w / 2) < 1
                ? (b / 2) * l * l * l + m
                : (b / 2) * ((l -= 2) * l * l + 2) + m;
            },
          ],
          "ease-in-quart": [
            "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
            function (l, m, b, w) {
              return b * (l /= w) * l * l * l + m;
            },
          ],
          "ease-out-quart": [
            "cubic-bezier(0.165, 0.840, 0.440, 1)",
            function (l, m, b, w) {
              return -b * ((l = l / w - 1) * l * l * l - 1) + m;
            },
          ],
          "ease-in-out-quart": [
            "cubic-bezier(0.770, 0, 0.175, 1)",
            function (l, m, b, w) {
              return (l /= w / 2) < 1
                ? (b / 2) * l * l * l * l + m
                : (-b / 2) * ((l -= 2) * l * l * l - 2) + m;
            },
          ],
          "ease-in-quint": [
            "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
            function (l, m, b, w) {
              return b * (l /= w) * l * l * l * l + m;
            },
          ],
          "ease-out-quint": [
            "cubic-bezier(0.230, 1, 0.320, 1)",
            function (l, m, b, w) {
              return b * ((l = l / w - 1) * l * l * l * l + 1) + m;
            },
          ],
          "ease-in-out-quint": [
            "cubic-bezier(0.860, 0, 0.070, 1)",
            function (l, m, b, w) {
              return (l /= w / 2) < 1
                ? (b / 2) * l * l * l * l * l + m
                : (b / 2) * ((l -= 2) * l * l * l * l + 2) + m;
            },
          ],
          "ease-in-sine": [
            "cubic-bezier(0.470, 0, 0.745, 0.715)",
            function (l, m, b, w) {
              return -b * Math.cos((l / w) * (Math.PI / 2)) + b + m;
            },
          ],
          "ease-out-sine": [
            "cubic-bezier(0.390, 0.575, 0.565, 1)",
            function (l, m, b, w) {
              return b * Math.sin((l / w) * (Math.PI / 2)) + m;
            },
          ],
          "ease-in-out-sine": [
            "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
            function (l, m, b, w) {
              return (-b / 2) * (Math.cos((Math.PI * l) / w) - 1) + m;
            },
          ],
          "ease-in-expo": [
            "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
            function (l, m, b, w) {
              return l === 0 ? m : b * Math.pow(2, 10 * (l / w - 1)) + m;
            },
          ],
          "ease-out-expo": [
            "cubic-bezier(0.190, 1, 0.220, 1)",
            function (l, m, b, w) {
              return l === w
                ? m + b
                : b * (-Math.pow(2, (-10 * l) / w) + 1) + m;
            },
          ],
          "ease-in-out-expo": [
            "cubic-bezier(1, 0, 0, 1)",
            function (l, m, b, w) {
              return l === 0
                ? m
                : l === w
                  ? m + b
                  : (l /= w / 2) < 1
                    ? (b / 2) * Math.pow(2, 10 * (l - 1)) + m
                    : (b / 2) * (-Math.pow(2, -10 * --l) + 2) + m;
            },
          ],
          "ease-in-circ": [
            "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
            function (l, m, b, w) {
              return -b * (Math.sqrt(1 - (l /= w) * l) - 1) + m;
            },
          ],
          "ease-out-circ": [
            "cubic-bezier(0.075, 0.820, 0.165, 1)",
            function (l, m, b, w) {
              return b * Math.sqrt(1 - (l = l / w - 1) * l) + m;
            },
          ],
          "ease-in-out-circ": [
            "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
            function (l, m, b, w) {
              return (l /= w / 2) < 1
                ? (-b / 2) * (Math.sqrt(1 - l * l) - 1) + m
                : (b / 2) * (Math.sqrt(1 - (l -= 2) * l) + 1) + m;
            },
          ],
          "ease-in-back": [
            "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
            function (l, m, b, w, T) {
              return (
                T === void 0 && (T = 1.70158),
                b * (l /= w) * l * ((T + 1) * l - T) + m
              );
            },
          ],
          "ease-out-back": [
            "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
            function (l, m, b, w, T) {
              return (
                T === void 0 && (T = 1.70158),
                b * ((l = l / w - 1) * l * ((T + 1) * l + T) + 1) + m
              );
            },
          ],
          "ease-in-out-back": [
            "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
            function (l, m, b, w, T) {
              return (
                T === void 0 && (T = 1.70158),
                (l /= w / 2) < 1
                  ? (b / 2) * l * l * (((T *= 1.525) + 1) * l - T) + m
                  : (b / 2) *
                  ((l -= 2) * l * (((T *= 1.525) + 1) * l + T) + 2) +
                  m
              );
            },
          ],
        },
        y = {
          "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
          "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
          "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
        },
        E = document,
        _ = window,
        q = "bkwld-tram",
        I = /[\-\.0-9]/g,
        S = /[A-Z]/,
        A = "number",
        N = /^(rgb|#)/,
        P = /(em|cm|mm|in|pt|pc|px)$/,
        L = /(em|cm|mm|in|pt|pc|px|%)$/,
        B = /(deg|rad|turn)$/,
        j = "unitless",
        z = /(all|none) 0s ease 0s/,
        $ = /^(width|height)$/,
        U = " ",
        O = E.createElement("a"),
        v = ["Webkit", "Moz", "O", "ms"],
        R = ["-webkit-", "-moz-", "-o-", "-ms-"],
        M = function (l) {
          if (l in O.style) return { dom: l, css: l };
          var m,
            b,
            w = "",
            T = l.split("-");
          for (m = 0; m < T.length; m++)
            w += T[m].charAt(0).toUpperCase() + T[m].slice(1);
          for (m = 0; m < v.length; m++)
            if (((b = v[m] + w), b in O.style))
              return { dom: b, css: R[m] + l };
        },
        G = (t.support = {
          bind: Function.prototype.bind,
          transform: M("transform"),
          transition: M("transition"),
          backface: M("backface-visibility"),
          timing: M("transition-timing-function"),
        });
      if (G.transition) {
        var Q = G.timing.dom;
        if (((O.style[Q] = h["ease-in-back"][0]), !O.style[Q]))
          for (var Z in y) h[Z][0] = y[Z];
      }
      var D = (t.frame = (function () {
        var l =
          _.requestAnimationFrame ||
          _.webkitRequestAnimationFrame ||
          _.mozRequestAnimationFrame ||
          _.oRequestAnimationFrame ||
          _.msRequestAnimationFrame;
        return l && G.bind
          ? l.bind(_)
          : function (m) {
            _.setTimeout(m, 16);
          };
      })()),
        k = (t.now = (function () {
          var l = _.performance,
            m = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
          return m && G.bind
            ? m.bind(l)
            : Date.now ||
            function () {
              return +new Date();
            };
        })()),
        K = d(function (l) {
          function m(J, ie) {
            var pe = g(("" + J).split(U)),
              se = pe[0];
            ie = ie || {};
            var Ae = gr[se];
            if (!Ae) return f("Unsupported property: " + se);
            if (!ie.weak || !this.props[se]) {
              var Ue = Ae[0],
                Re = this.props[se];
              return (
                Re || (Re = this.props[se] = new Ue.Bare()),
                Re.init(this.$el, pe, Ae, ie),
                Re
              );
            }
          }
          function b(J, ie, pe) {
            if (J) {
              var se = typeof J;
              if (
                (ie ||
                  (this.timer && this.timer.destroy(),
                    (this.queue = []),
                    (this.active = !1)),
                  se == "number" && ie)
              )
                return (
                  (this.timer = new re({
                    duration: J,
                    context: this,
                    complete: x,
                  })),
                  void (this.active = !0)
                );
              if (se == "string" && ie) {
                switch (J) {
                  case "hide":
                    X.call(this);
                    break;
                  case "stop":
                    Y.call(this);
                    break;
                  case "redraw":
                    te.call(this);
                    break;
                  default:
                    m.call(this, J, pe && pe[1]);
                }
                return x.call(this);
              }
              if (se == "function") return void J.call(this, this);
              if (se == "object") {
                var Ae = 0;
                Qe.call(
                  this,
                  J,
                  function (he, X_) {
                    he.span > Ae && (Ae = he.span), he.stop(), he.animate(X_);
                  },
                  function (he) {
                    "wait" in he && (Ae = u(he.wait, 0));
                  }
                ),
                  ve.call(this),
                  Ae > 0 &&
                  ((this.timer = new re({ duration: Ae, context: this })),
                    (this.active = !0),
                    ie && (this.timer.complete = x));
                var Ue = this,
                  Re = !1,
                  en = {};
                D(function () {
                  Qe.call(Ue, J, function (he) {
                    he.active && ((Re = !0), (en[he.name] = he.nextStyle));
                  }),
                    Re && Ue.$el.css(en);
                });
              }
            }
          }
          function w(J) {
            (J = u(J, 0)),
              this.active
                ? this.queue.push({ options: J })
                : ((this.timer = new re({
                  duration: J,
                  context: this,
                  complete: x,
                })),
                  (this.active = !0));
          }
          function T(J) {
            return this.active
              ? (this.queue.push({ options: J, args: arguments }),
                void (this.timer.complete = x))
              : f(
                "No active transition timer. Use start() or wait() before then()."
              );
          }
          function x() {
            if (
              (this.timer && this.timer.destroy(),
                (this.active = !1),
                this.queue.length)
            ) {
              var J = this.queue.shift();
              b.call(this, J.options, !0, J.args);
            }
          }
          function Y(J) {
            this.timer && this.timer.destroy(),
              (this.queue = []),
              (this.active = !1);
            var ie;
            typeof J == "string"
              ? ((ie = {}), (ie[J] = 1))
              : (ie = typeof J == "object" && J != null ? J : this.props),
              Qe.call(this, ie, Oe),
              ve.call(this);
          }
          function ee(J) {
            Y.call(this, J), Qe.call(this, J, vr, V_);
          }
          function ce(J) {
            typeof J != "string" && (J = "block"), (this.el.style.display = J);
          }
          function X() {
            Y.call(this), (this.el.style.display = "none");
          }
          function te() {
            this.el.offsetHeight;
          }
          function ne() {
            Y.call(this), e.removeData(this.el, q), (this.$el = this.el = null);
          }
          function ve() {
            var J,
              ie,
              pe = [];
            this.upstream && pe.push(this.upstream);
            for (J in this.props)
              (ie = this.props[J]), ie.active && pe.push(ie.string);
            (pe = pe.join(",")),
              this.style !== pe &&
              ((this.style = pe), (this.el.style[G.transition.dom] = pe));
          }
          function Qe(J, ie, pe) {
            var se,
              Ae,
              Ue,
              Re,
              en = ie !== Oe,
              he = {};
            for (se in J)
              (Ue = J[se]),
                se in $e
                  ? (he.transform || (he.transform = {}),
                    (he.transform[se] = Ue))
                  : (S.test(se) && (se = r(se)),
                    se in gr
                      ? (he[se] = Ue)
                      : (Re || (Re = {}), (Re[se] = Ue)));
            for (se in he) {
              if (((Ue = he[se]), (Ae = this.props[se]), !Ae)) {
                if (!en) continue;
                Ae = m.call(this, se);
              }
              ie.call(this, Ae, Ue);
            }
            pe && Re && pe.call(this, Re);
          }
          function Oe(J) {
            J.stop();
          }
          function vr(J, ie) {
            J.set(ie);
          }
          function V_(J) {
            this.$el.css(J);
          }
          function Ge(J, ie) {
            l[J] = function () {
              return this.children
                ? H_.call(this, ie, arguments)
                : (this.el && ie.apply(this, arguments), this);
            };
          }
          function H_(J, ie) {
            var pe,
              se = this.children.length;
            for (pe = 0; se > pe; pe++) J.apply(this.children[pe], ie);
            return this;
          }
          (l.init = function (J) {
            if (
              ((this.$el = e(J)),
                (this.el = this.$el[0]),
                (this.props = {}),
                (this.queue = []),
                (this.style = ""),
                (this.active = !1),
                ae.keepInherited && !ae.fallback)
            ) {
              var ie = Ye(this.el, "transition");
              ie && !z.test(ie) && (this.upstream = ie);
            }
            G.backface &&
              ae.hideBackface &&
              Fe(this.el, G.backface.css, "hidden");
          }),
            Ge("add", m),
            Ge("start", b),
            Ge("wait", w),
            Ge("then", T),
            Ge("next", x),
            Ge("stop", Y),
            Ge("set", ee),
            Ge("show", ce),
            Ge("hide", X),
            Ge("redraw", te),
            Ge("destroy", ne);
        }),
        V = d(K, function (l) {
          function m(b, w) {
            var T = e.data(b, q) || e.data(b, q, new K.Bare());
            return T.el || T.init(b), w ? T.start(w) : T;
          }
          l.init = function (b, w) {
            var T = e(b);
            if (!T.length) return this;
            if (T.length === 1) return m(T[0], w);
            var x = [];
            return (
              T.each(function (Y, ee) {
                x.push(m(ee, w));
              }),
              (this.children = x),
              this
            );
          };
        }),
        F = d(function (l) {
          function m() {
            var x = this.get();
            this.update("auto");
            var Y = this.get();
            return this.update(x), Y;
          }
          function b(x, Y, ee) {
            return Y !== void 0 && (ee = Y), x in h ? x : ee;
          }
          function w(x) {
            var Y = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(x);
            return (Y ? i(Y[1], Y[2], Y[3]) : x).replace(
              /#(\w)(\w)(\w)$/,
              "#$1$1$2$2$3$3"
            );
          }
          var T = { duration: 500, ease: "ease", delay: 0 };
          (l.init = function (x, Y, ee, ce) {
            (this.$el = x), (this.el = x[0]);
            var X = Y[0];
            ee[2] && (X = ee[2]),
              pr[X] && (X = pr[X]),
              (this.name = X),
              (this.type = ee[1]),
              (this.duration = u(Y[1], this.duration, T.duration)),
              (this.ease = b(Y[2], this.ease, T.ease)),
              (this.delay = u(Y[3], this.delay, T.delay)),
              (this.span = this.duration + this.delay),
              (this.active = !1),
              (this.nextStyle = null),
              (this.auto = $.test(this.name)),
              (this.unit = ce.unit || this.unit || ae.defaultUnit),
              (this.angle = ce.angle || this.angle || ae.defaultAngle),
              ae.fallback || ce.fallback
                ? (this.animate = this.fallback)
                : ((this.animate = this.transition),
                  (this.string =
                    this.name +
                    U +
                    this.duration +
                    "ms" +
                    (this.ease != "ease" ? U + h[this.ease][0] : "") +
                    (this.delay ? U + this.delay + "ms" : "")));
          }),
            (l.set = function (x) {
              (x = this.convert(x, this.type)), this.update(x), this.redraw();
            }),
            (l.transition = function (x) {
              (this.active = !0),
                (x = this.convert(x, this.type)),
                this.auto &&
                (this.el.style[this.name] == "auto" &&
                  (this.update(this.get()), this.redraw()),
                  x == "auto" && (x = m.call(this))),
                (this.nextStyle = x);
            }),
            (l.fallback = function (x) {
              var Y =
                this.el.style[this.name] || this.convert(this.get(), this.type);
              (x = this.convert(x, this.type)),
                this.auto &&
                (Y == "auto" && (Y = this.convert(this.get(), this.type)),
                  x == "auto" && (x = m.call(this))),
                (this.tween = new C({
                  from: Y,
                  to: x,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                }));
            }),
            (l.get = function () {
              return Ye(this.el, this.name);
            }),
            (l.update = function (x) {
              Fe(this.el, this.name, x);
            }),
            (l.stop = function () {
              (this.active || this.nextStyle) &&
                ((this.active = !1),
                  (this.nextStyle = null),
                  Fe(this.el, this.name, this.get()));
              var x = this.tween;
              x && x.context && x.destroy();
            }),
            (l.convert = function (x, Y) {
              if (x == "auto" && this.auto) return x;
              var ee,
                ce = typeof x == "number",
                X = typeof x == "string";
              switch (Y) {
                case A:
                  if (ce) return x;
                  if (X && x.replace(I, "") === "") return +x;
                  ee = "number(unitless)";
                  break;
                case N:
                  if (X) {
                    if (x === "" && this.original) return this.original;
                    if (Y.test(x))
                      return x.charAt(0) == "#" && x.length == 7 ? x : w(x);
                  }
                  ee = "hex or rgb string";
                  break;
                case P:
                  if (ce) return x + this.unit;
                  if (X && Y.test(x)) return x;
                  ee = "number(px) or string(unit)";
                  break;
                case L:
                  if (ce) return x + this.unit;
                  if (X && Y.test(x)) return x;
                  ee = "number(px) or string(unit or %)";
                  break;
                case B:
                  if (ce) return x + this.angle;
                  if (X && Y.test(x)) return x;
                  ee = "number(deg) or string(angle)";
                  break;
                case j:
                  if (ce || (X && L.test(x))) return x;
                  ee = "number(unitless) or string(unit or %)";
              }
              return a(ee, x), x;
            }),
            (l.redraw = function () {
              this.el.offsetHeight;
            });
        }),
        p = d(F, function (l, m) {
          l.init = function () {
            m.init.apply(this, arguments),
              this.original || (this.original = this.convert(this.get(), N));
          };
        }),
        H = d(F, function (l, m) {
          (l.init = function () {
            m.init.apply(this, arguments), (this.animate = this.fallback);
          }),
            (l.get = function () {
              return this.$el[this.name]();
            }),
            (l.update = function (b) {
              this.$el[this.name](b);
            });
        }),
        W = d(F, function (l, m) {
          function b(w, T) {
            var x, Y, ee, ce, X;
            for (x in w)
              (ce = $e[x]),
                (ee = ce[0]),
                (Y = ce[1] || x),
                (X = this.convert(w[x], ee)),
                T.call(this, Y, X, ee);
          }
          (l.init = function () {
            m.init.apply(this, arguments),
              this.current ||
              ((this.current = {}),
                $e.perspective &&
                ae.perspective &&
                ((this.current.perspective = ae.perspective),
                  Fe(this.el, this.name, this.style(this.current)),
                  this.redraw()));
          }),
            (l.set = function (w) {
              b.call(this, w, function (T, x) {
                this.current[T] = x;
              }),
                Fe(this.el, this.name, this.style(this.current)),
                this.redraw();
            }),
            (l.transition = function (w) {
              var T = this.values(w);
              this.tween = new Ee({
                current: this.current,
                values: T,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
              });
              var x,
                Y = {};
              for (x in this.current) Y[x] = x in T ? T[x] : this.current[x];
              (this.active = !0), (this.nextStyle = this.style(Y));
            }),
            (l.fallback = function (w) {
              var T = this.values(w);
              this.tween = new Ee({
                current: this.current,
                values: T,
                duration: this.duration,
                delay: this.delay,
                ease: this.ease,
                update: this.update,
                context: this,
              });
            }),
            (l.update = function () {
              Fe(this.el, this.name, this.style(this.current));
            }),
            (l.style = function (w) {
              var T,
                x = "";
              for (T in w) x += T + "(" + w[T] + ") ";
              return x;
            }),
            (l.values = function (w) {
              var T,
                x = {};
              return (
                b.call(this, w, function (Y, ee, ce) {
                  (x[Y] = ee),
                    this.current[Y] === void 0 &&
                    ((T = 0),
                      ~Y.indexOf("scale") && (T = 1),
                      (this.current[Y] = this.convert(T, ce)));
                }),
                x
              );
            });
        }),
        C = d(function (l) {
          function m(X) {
            ee.push(X) === 1 && D(b);
          }
          function b() {
            var X,
              te,
              ne,
              ve = ee.length;
            if (ve)
              for (D(b), te = k(), X = ve; X--;)
                (ne = ee[X]), ne && ne.render(te);
          }
          function w(X) {
            var te,
              ne = e.inArray(X, ee);
            ne >= 0 &&
              ((te = ee.slice(ne + 1)),
                (ee.length = ne),
                te.length && (ee = ee.concat(te)));
          }
          function T(X) {
            return Math.round(X * ce) / ce;
          }
          function x(X, te, ne) {
            return i(
              X[0] + ne * (te[0] - X[0]),
              X[1] + ne * (te[1] - X[1]),
              X[2] + ne * (te[2] - X[2])
            );
          }
          var Y = { ease: h.ease[1], from: 0, to: 1 };
          (l.init = function (X) {
            (this.duration = X.duration || 0), (this.delay = X.delay || 0);
            var te = X.ease || Y.ease;
            h[te] && (te = h[te][1]),
              typeof te != "function" && (te = Y.ease),
              (this.ease = te),
              (this.update = X.update || o),
              (this.complete = X.complete || o),
              (this.context = X.context || this),
              (this.name = X.name);
            var ne = X.from,
              ve = X.to;
            ne === void 0 && (ne = Y.from),
              ve === void 0 && (ve = Y.to),
              (this.unit = X.unit || ""),
              typeof ne == "number" && typeof ve == "number"
                ? ((this.begin = ne), (this.change = ve - ne))
                : this.format(ve, ne),
              (this.value = this.begin + this.unit),
              (this.start = k()),
              X.autoplay !== !1 && this.play();
          }),
            (l.play = function () {
              this.active ||
                (this.start || (this.start = k()), (this.active = !0), m(this));
            }),
            (l.stop = function () {
              this.active && ((this.active = !1), w(this));
            }),
            (l.render = function (X) {
              var te,
                ne = X - this.start;
              if (this.delay) {
                if (ne <= this.delay) return;
                ne -= this.delay;
              }
              if (ne < this.duration) {
                var ve = this.ease(ne, 0, 1, this.duration);
                return (
                  (te = this.startRGB
                    ? x(this.startRGB, this.endRGB, ve)
                    : T(this.begin + ve * this.change)),
                  (this.value = te + this.unit),
                  void this.update.call(this.context, this.value)
                );
              }
              (te = this.endHex || this.begin + this.change),
                (this.value = te + this.unit),
                this.update.call(this.context, this.value),
                this.complete.call(this.context),
                this.destroy();
            }),
            (l.format = function (X, te) {
              if (((te += ""), (X += ""), X.charAt(0) == "#"))
                return (
                  (this.startRGB = n(te)),
                  (this.endRGB = n(X)),
                  (this.endHex = X),
                  (this.begin = 0),
                  void (this.change = 1)
                );
              if (!this.unit) {
                var ne = te.replace(I, ""),
                  ve = X.replace(I, "");
                ne !== ve && s("tween", te, X), (this.unit = ne);
              }
              (te = parseFloat(te)),
                (X = parseFloat(X)),
                (this.begin = this.value = te),
                (this.change = X - te);
            }),
            (l.destroy = function () {
              this.stop(),
                (this.context = null),
                (this.ease = this.update = this.complete = o);
            });
          var ee = [],
            ce = 1e3;
        }),
        re = d(C, function (l) {
          (l.init = function (m) {
            (this.duration = m.duration || 0),
              (this.complete = m.complete || o),
              (this.context = m.context),
              this.play();
          }),
            (l.render = function (m) {
              var b = m - this.start;
              b < this.duration ||
                (this.complete.call(this.context), this.destroy());
            });
        }),
        Ee = d(C, function (l, m) {
          (l.init = function (b) {
            (this.context = b.context),
              (this.update = b.update),
              (this.tweens = []),
              (this.current = b.current);
            var w, T;
            for (w in b.values)
              (T = b.values[w]),
                this.current[w] !== T &&
                this.tweens.push(
                  new C({
                    name: w,
                    from: this.current[w],
                    to: T,
                    duration: b.duration,
                    delay: b.delay,
                    ease: b.ease,
                    autoplay: !1,
                  })
                );
            this.play();
          }),
            (l.render = function (b) {
              var w,
                T,
                x = this.tweens.length,
                Y = !1;
              for (w = x; w--;)
                (T = this.tweens[w]),
                  T.context &&
                  (T.render(b), (this.current[T.name] = T.value), (Y = !0));
              return Y
                ? void (this.update && this.update.call(this.context))
                : this.destroy();
            }),
            (l.destroy = function () {
              if ((m.destroy.call(this), this.tweens)) {
                var b,
                  w = this.tweens.length;
                for (b = w; b--;) this.tweens[b].destroy();
                (this.tweens = null), (this.current = null);
              }
            });
        }),
        ae = (t.config = {
          debug: !1,
          defaultUnit: "px",
          defaultAngle: "deg",
          keepInherited: !1,
          hideBackface: !1,
          perspective: "",
          fallback: !G.transition,
          agentTests: [],
        });
      (t.fallback = function (l) {
        if (!G.transition) return (ae.fallback = !0);
        ae.agentTests.push("(" + l + ")");
        var m = new RegExp(ae.agentTests.join("|"), "i");
        ae.fallback = m.test(navigator.userAgent);
      }),
        t.fallback("6.0.[2-5] Safari"),
        (t.tween = function (l) {
          return new C(l);
        }),
        (t.delay = function (l, m, b) {
          return new re({ complete: m, duration: l, context: b });
        }),
        (e.fn.tram = function (l) {
          return t.call(null, this, l);
        });
      var Fe = e.style,
        Ye = e.css,
        pr = { transform: G.transform && G.transform.css },
        gr = {
          color: [p, N],
          background: [p, N, "background-color"],
          "outline-color": [p, N],
          "border-color": [p, N],
          "border-top-color": [p, N],
          "border-right-color": [p, N],
          "border-bottom-color": [p, N],
          "border-left-color": [p, N],
          "border-width": [F, P],
          "border-top-width": [F, P],
          "border-right-width": [F, P],
          "border-bottom-width": [F, P],
          "border-left-width": [F, P],
          "border-spacing": [F, P],
          "letter-spacing": [F, P],
          margin: [F, P],
          "margin-top": [F, P],
          "margin-right": [F, P],
          "margin-bottom": [F, P],
          "margin-left": [F, P],
          padding: [F, P],
          "padding-top": [F, P],
          "padding-right": [F, P],
          "padding-bottom": [F, P],
          "padding-left": [F, P],
          "outline-width": [F, P],
          opacity: [F, A],
          top: [F, L],
          right: [F, L],
          bottom: [F, L],
          left: [F, L],
          "font-size": [F, L],
          "text-indent": [F, L],
          "word-spacing": [F, L],
          width: [F, L],
          "min-width": [F, L],
          "max-width": [F, L],
          height: [F, L],
          "min-height": [F, L],
          "max-height": [F, L],
          "line-height": [F, j],
          "scroll-top": [H, A, "scrollTop"],
          "scroll-left": [H, A, "scrollLeft"],
        },
        $e = {};
      G.transform &&
        ((gr.transform = [W]),
          ($e = {
            x: [L, "translateX"],
            y: [L, "translateY"],
            rotate: [B],
            rotateX: [B],
            rotateY: [B],
            scale: [A],
            scaleX: [A],
            scaleY: [A],
            skew: [B],
            skewX: [B],
            skewY: [B],
          })),
        G.transform &&
        G.backface &&
        (($e.z = [L, "translateZ"]),
          ($e.rotateZ = [B]),
          ($e.scaleZ = [A]),
          ($e.perspective = [P]));
      var Ri = /ms/,
        Jr = /s|\./;
      return (e.tram = t);
    })(window.jQuery);
  });
  var Cs = c((qH, Rs) => {
    "use strict";
    var K_ = window.$,
      Y_ = Ci() && K_.tram;
    Rs.exports = (function () {
      var e = {};
      e.VERSION = "1.6.0-Webflow";
      var t = {},
        r = Array.prototype,
        n = Object.prototype,
        i = Function.prototype,
        o = r.push,
        a = r.slice,
        s = r.concat,
        u = n.toString,
        f = n.hasOwnProperty,
        g = r.forEach,
        d = r.map,
        h = r.reduce,
        y = r.reduceRight,
        E = r.filter,
        _ = r.every,
        q = r.some,
        I = r.indexOf,
        S = r.lastIndexOf,
        A = Array.isArray,
        N = Object.keys,
        P = i.bind,
        L =
          (e.each =
            e.forEach =
            function (v, R, M) {
              if (v == null) return v;
              if (g && v.forEach === g) v.forEach(R, M);
              else if (v.length === +v.length) {
                for (var G = 0, Q = v.length; G < Q; G++)
                  if (R.call(M, v[G], G, v) === t) return;
              } else
                for (var Z = e.keys(v), G = 0, Q = Z.length; G < Q; G++)
                  if (R.call(M, v[Z[G]], Z[G], v) === t) return;
              return v;
            });
      (e.map = e.collect =
        function (v, R, M) {
          var G = [];
          return v == null
            ? G
            : d && v.map === d
              ? v.map(R, M)
              : (L(v, function (Q, Z, D) {
                G.push(R.call(M, Q, Z, D));
              }),
                G);
        }),
        (e.find = e.detect =
          function (v, R, M) {
            var G;
            return (
              B(v, function (Q, Z, D) {
                if (R.call(M, Q, Z, D)) return (G = Q), !0;
              }),
              G
            );
          }),
        (e.filter = e.select =
          function (v, R, M) {
            var G = [];
            return v == null
              ? G
              : E && v.filter === E
                ? v.filter(R, M)
                : (L(v, function (Q, Z, D) {
                  R.call(M, Q, Z, D) && G.push(Q);
                }),
                  G);
          });
      var B =
        (e.some =
          e.any =
          function (v, R, M) {
            R || (R = e.identity);
            var G = !1;
            return v == null
              ? G
              : q && v.some === q
                ? v.some(R, M)
                : (L(v, function (Q, Z, D) {
                  if (G || (G = R.call(M, Q, Z, D))) return t;
                }),
                  !!G);
          });
      (e.contains = e.include =
        function (v, R) {
          return v == null
            ? !1
            : I && v.indexOf === I
              ? v.indexOf(R) != -1
              : B(v, function (M) {
                return M === R;
              });
        }),
        (e.delay = function (v, R) {
          var M = a.call(arguments, 2);
          return setTimeout(function () {
            return v.apply(null, M);
          }, R);
        }),
        (e.defer = function (v) {
          return e.delay.apply(e, [v, 1].concat(a.call(arguments, 1)));
        }),
        (e.throttle = function (v) {
          var R, M, G;
          return function () {
            R ||
              ((R = !0),
                (M = arguments),
                (G = this),
                Y_.frame(function () {
                  (R = !1), v.apply(G, M);
                }));
          };
        }),
        (e.debounce = function (v, R, M) {
          var G,
            Q,
            Z,
            D,
            k,
            K = function () {
              var V = e.now() - D;
              V < R
                ? (G = setTimeout(K, R - V))
                : ((G = null), M || ((k = v.apply(Z, Q)), (Z = Q = null)));
            };
          return function () {
            (Z = this), (Q = arguments), (D = e.now());
            var V = M && !G;
            return (
              G || (G = setTimeout(K, R)),
              V && ((k = v.apply(Z, Q)), (Z = Q = null)),
              k
            );
          };
        }),
        (e.defaults = function (v) {
          if (!e.isObject(v)) return v;
          for (var R = 1, M = arguments.length; R < M; R++) {
            var G = arguments[R];
            for (var Q in G) v[Q] === void 0 && (v[Q] = G[Q]);
          }
          return v;
        }),
        (e.keys = function (v) {
          if (!e.isObject(v)) return [];
          if (N) return N(v);
          var R = [];
          for (var M in v) e.has(v, M) && R.push(M);
          return R;
        }),
        (e.has = function (v, R) {
          return f.call(v, R);
        }),
        (e.isObject = function (v) {
          return v === Object(v);
        }),
        (e.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (e.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        });
      var j = /(.)^/,
        z = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        },
        $ = /\\|'|\r|\n|\u2028|\u2029/g,
        U = function (v) {
          return "\\" + z[v];
        },
        O = /^\s*(\w|\$)+\s*$/;
      return (
        (e.template = function (v, R, M) {
          !R && M && (R = M), (R = e.defaults({}, R, e.templateSettings));
          var G = RegExp(
            [
              (R.escape || j).source,
              (R.interpolate || j).source,
              (R.evaluate || j).source,
            ].join("|") + "|$",
            "g"
          ),
            Q = 0,
            Z = "__p+='";
          v.replace(G, function (V, F, p, H, W) {
            return (
              (Z += v.slice(Q, W).replace($, U)),
              (Q = W + V.length),
              F
                ? (Z +=
                  `'+
((__t=(` +
                  F +
                  `))==null?'':_.escape(__t))+
'`)
                : p
                  ? (Z +=
                    `'+
((__t=(` +
                    p +
                    `))==null?'':__t)+
'`)
                  : H &&
                  (Z +=
                    `';
` +
                    H +
                    `
__p+='`),
              V
            );
          }),
            (Z += `';
`);
          var D = R.variable;
          if (D) {
            if (!O.test(D))
              throw new Error("variable is not a bare identifier: " + D);
          } else
            (Z =
              `with(obj||{}){
` +
              Z +
              `}
`),
              (D = "obj");
          Z =
            `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
            Z +
            `return __p;
`;
          var k;
          try {
            k = new Function(R.variable || "obj", "_", Z);
          } catch (V) {
            throw ((V.source = Z), V);
          }
          var K = function (V) {
            return k.call(this, V, e);
          };
          return (
            (K.source =
              "function(" +
              D +
              `){
` +
              Z +
              "}"),
            K
          );
        }),
        e
      );
    })();
  });
  var Me = c((MH, Gs) => {
    "use strict";
    var ue = {},
      Mt = {},
      Dt = [],
      Li = window.Webflow || [],
      gt = window.jQuery,
      He = gt(window),
      $_ = gt(document),
      Je = gt.isFunction,
      Ve = (ue._ = Cs()),
      Ls = (ue.tram = Ci() && gt.tram),
      nn = !1,
      Pi = !1;
    Ls.config.hideBackface = !1;
    Ls.config.keepInherited = !0;
    ue.define = function (e, t, r) {
      Mt[e] && qs(Mt[e]);
      var n = (Mt[e] = t(gt, Ve, r) || {});
      return Ps(n), n;
    };
    ue.require = function (e) {
      return Mt[e];
    };
    function Ps(e) {
      ue.env() &&
        (Je(e.design) && He.on("__wf_design", e.design),
          Je(e.preview) && He.on("__wf_preview", e.preview)),
        Je(e.destroy) && He.on("__wf_destroy", e.destroy),
        e.ready && Je(e.ready) && Q_(e);
    }
    function Q_(e) {
      if (nn) {
        e.ready();
        return;
      }
      Ve.contains(Dt, e.ready) || Dt.push(e.ready);
    }
    function qs(e) {
      Je(e.design) && He.off("__wf_design", e.design),
        Je(e.preview) && He.off("__wf_preview", e.preview),
        Je(e.destroy) && He.off("__wf_destroy", e.destroy),
        e.ready && Je(e.ready) && Z_(e);
    }
    function Z_(e) {
      Dt = Ve.filter(Dt, function (t) {
        return t !== e.ready;
      });
    }
    ue.push = function (e) {
      if (nn) {
        Je(e) && e();
        return;
      }
      Li.push(e);
    };
    ue.env = function (e) {
      var t = window.__wf_design,
        r = typeof t < "u";
      if (!e) return r;
      if (e === "design") return r && t;
      if (e === "preview") return r && !t;
      if (e === "slug") return r && window.__wf_slug;
      if (e === "editor") return window.WebflowEditor;
      if (e === "test") return window.__wf_test;
      if (e === "frame") return window !== window.top;
    };
    var rn = navigator.userAgent.toLowerCase(),
      Ms = (ue.env.touch =
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
      J_ = (ue.env.chrome =
        /chrome/.test(rn) &&
        /Google/.test(navigator.vendor) &&
        parseInt(rn.match(/chrome\/(\d+)\./)[1], 10)),
      eT = (ue.env.ios = /(ipod|iphone|ipad)/.test(rn));
    ue.env.safari = /safari/.test(rn) && !J_ && !eT;
    var Ni;
    Ms &&
      $_.on("touchstart mousedown", function (e) {
        Ni = e.target;
      });
    ue.validClick = Ms
      ? function (e) {
        return e === Ni || gt.contains(e, Ni);
      }
      : function () {
        return !0;
      };
    var Ds = "resize.webflow orientationchange.webflow load.webflow",
      tT = "scroll.webflow " + Ds;
    ue.resize = qi(He, Ds);
    ue.scroll = qi(He, tT);
    ue.redraw = qi();
    function qi(e, t) {
      var r = [],
        n = {};
      return (
        (n.up = Ve.throttle(function (i) {
          Ve.each(r, function (o) {
            o(i);
          });
        })),
        e && t && e.on(t, n.up),
        (n.on = function (i) {
          typeof i == "function" && (Ve.contains(r, i) || r.push(i));
        }),
        (n.off = function (i) {
          if (!arguments.length) {
            r = [];
            return;
          }
          r = Ve.filter(r, function (o) {
            return o !== i;
          });
        }),
        n
      );
    }
    ue.location = function (e) {
      window.location = e;
    };
    ue.env() && (ue.location = function () { });
    ue.ready = function () {
      (nn = !0), Pi ? rT() : Ve.each(Dt, Ns), Ve.each(Li, Ns), ue.resize.up();
    };
    function Ns(e) {
      Je(e) && e();
    }
    function rT() {
      (Pi = !1), Ve.each(Mt, Ps);
    }
    var It;
    ue.load = function (e) {
      It.then(e);
    };
    function Fs() {
      It && (It.reject(), He.off("load", It.resolve)),
        (It = new gt.Deferred()),
        He.on("load", It.resolve);
    }
    ue.destroy = function (e) {
      (e = e || {}),
        (Pi = !0),
        He.triggerHandler("__wf_destroy"),
        e.domready != null && (nn = e.domready),
        Ve.each(Mt, qs),
        ue.resize.off(),
        ue.scroll.off(),
        ue.redraw.off(),
        (Dt = []),
        (Li = []),
        It.state() === "pending" && Fs();
    };
    gt(ue.ready);
    Fs();
    Gs.exports = window.Webflow = ue;
  });
  var Hs = c((DH, Vs) => {
    "use strict";
    var Us = Me();
    Us.define(
      "brand",
      (Vs.exports = function (e) {
        var t = {},
          r = document,
          n = e("html"),
          i = e("body"),
          o = ".w-webflow-badge",
          a = window.location,
          s = /PhantomJS/i.test(navigator.userAgent),
          u =
            "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
          f;
        t.ready = function () {
          var y = n.attr("data-wf-status"),
            E = n.attr("data-wf-domain") || "";
          /\.webflow\.io$/i.test(E) && a.hostname !== E && (y = !0),
            y &&
            !s &&
            ((f = f || d()),
              h(),
              setTimeout(h, 500),
              e(r).off(u, g).on(u, g));
        };
        function g() {
          var y =
            r.fullScreen ||
            r.mozFullScreen ||
            r.webkitIsFullScreen ||
            r.msFullscreenElement ||
            !!r.webkitFullscreenElement;
          e(f).attr("style", y ? "display: none !important;" : "");
        }
        function d() {
          var y = e('<a class="w-webflow-badge"></a>').attr(
            "href",
            "https://webflow.com?utm_campaign=brandjs"
          ),
            E = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg"
              )
              .attr("alt", "")
              .css({ marginRight: "4px", width: "26px" }),
            _ = e("<img>")
              .attr(
                "src",
                "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg"
              )
              .attr("alt", "Made in Webflow");
          return y.append(E, _), y[0];
        }
        function h() {
          var y = i.children(o),
            E = y.length && y.get(0) === f,
            _ = Us.env("editor");
          if (E) {
            _ && y.remove();
            return;
          }
          y.length && y.remove(), _ || i.append(f);
        }
        return t;
      })
    );
  });
  var ks = c((FH, Xs) => {
    "use strict";
    var Mi = Me();
    Mi.define(
      "edit",
      (Xs.exports = function (e, t, r) {
        if (
          ((r = r || {}),
            (Mi.env("test") || Mi.env("frame")) && !r.fixture && !nT())
        )
          return { exit: 1 };
        var n = {},
          i = e(window),
          o = e(document.documentElement),
          a = document.location,
          s = "hashchange",
          u,
          f = r.load || h,
          g = !1;
        try {
          g =
            localStorage &&
            localStorage.getItem &&
            localStorage.getItem("WebflowEditor");
        } catch { }
        g
          ? f()
          : a.search
            ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) ||
              /\?edit$/.test(a.href)) &&
            f()
            : i.on(s, d).triggerHandler(s);
        function d() {
          u || (/\?edit/.test(a.hash) && f());
        }
        function h() {
          (u = !0),
            (window.WebflowEditor = !0),
            i.off(s, d),
            S(function (N) {
              e.ajax({
                url: I("https://editor-api.webflow.com/api/editor/view"),
                data: { siteId: o.attr("data-wf-site") },
                xhrFields: { withCredentials: !0 },
                dataType: "json",
                crossDomain: !0,
                success: y(N),
              });
            });
        }
        function y(N) {
          return function (P) {
            if (!P) {
              console.error("Could not load editor data");
              return;
            }
            (P.thirdPartyCookiesSupported = N),
              E(q(P.bugReporterScriptPath), function () {
                E(q(P.scriptPath), function () {
                  window.WebflowEditor(P);
                });
              });
          };
        }
        function E(N, P) {
          e.ajax({ type: "GET", url: N, dataType: "script", cache: !0 }).then(
            P,
            _
          );
        }
        function _(N, P, L) {
          throw (console.error("Could not load editor script: " + P), L);
        }
        function q(N) {
          return N.indexOf("//") >= 0
            ? N
            : I("https://editor-api.webflow.com" + N);
        }
        function I(N) {
          return N.replace(/([^:])\/\//g, "$1/");
        }
        function S(N) {
          var P = window.document.createElement("iframe");
          (P.src = "https://webflow.com/site/third-party-cookie-check.html"),
            (P.style.display = "none"),
            (P.sandbox = "allow-scripts allow-same-origin");
          var L = function (B) {
            B.data === "WF_third_party_cookies_unsupported"
              ? (A(P, L), N(!1))
              : B.data === "WF_third_party_cookies_supported" &&
              (A(P, L), N(!0));
          };
          (P.onerror = function () {
            A(P, L), N(!1);
          }),
            window.addEventListener("message", L, !1),
            window.document.body.appendChild(P);
        }
        function A(N, P) {
          window.removeEventListener("message", P, !1), N.remove();
        }
        return n;
      })
    );
    function nT() {
      try {
        return window.top.__Cypress__;
      } catch {
        return !1;
      }
    }
  });
  var Bs = c((GH, Ws) => {
    "use strict";
    var iT = Me();
    iT.define(
      "focus-visible",
      (Ws.exports = function () {
        function e(r) {
          var n = !0,
            i = !1,
            o = null,
            a = {
              text: !0,
              search: !0,
              url: !0,
              tel: !0,
              email: !0,
              password: !0,
              number: !0,
              date: !0,
              month: !0,
              week: !0,
              time: !0,
              datetime: !0,
              "datetime-local": !0,
            };
          function s(A) {
            return !!(
              A &&
              A !== document &&
              A.nodeName !== "HTML" &&
              A.nodeName !== "BODY" &&
              "classList" in A &&
              "contains" in A.classList
            );
          }
          function u(A) {
            var N = A.type,
              P = A.tagName;
            return !!(
              (P === "INPUT" && a[N] && !A.readOnly) ||
              (P === "TEXTAREA" && !A.readOnly) ||
              A.isContentEditable
            );
          }
          function f(A) {
            A.getAttribute("data-wf-focus-visible") ||
              A.setAttribute("data-wf-focus-visible", "true");
          }
          function g(A) {
            A.getAttribute("data-wf-focus-visible") &&
              A.removeAttribute("data-wf-focus-visible");
          }
          function d(A) {
            A.metaKey ||
              A.altKey ||
              A.ctrlKey ||
              (s(r.activeElement) && f(r.activeElement), (n = !0));
          }
          function h() {
            n = !1;
          }
          function y(A) {
            s(A.target) && (n || u(A.target)) && f(A.target);
          }
          function E(A) {
            s(A.target) &&
              A.target.hasAttribute("data-wf-focus-visible") &&
              ((i = !0),
                window.clearTimeout(o),
                (o = window.setTimeout(function () {
                  i = !1;
                }, 100)),
                g(A.target));
          }
          function _() {
            document.visibilityState === "hidden" && (i && (n = !0), q());
          }
          function q() {
            document.addEventListener("mousemove", S),
              document.addEventListener("mousedown", S),
              document.addEventListener("mouseup", S),
              document.addEventListener("pointermove", S),
              document.addEventListener("pointerdown", S),
              document.addEventListener("pointerup", S),
              document.addEventListener("touchmove", S),
              document.addEventListener("touchstart", S),
              document.addEventListener("touchend", S);
          }
          function I() {
            document.removeEventListener("mousemove", S),
              document.removeEventListener("mousedown", S),
              document.removeEventListener("mouseup", S),
              document.removeEventListener("pointermove", S),
              document.removeEventListener("pointerdown", S),
              document.removeEventListener("pointerup", S),
              document.removeEventListener("touchmove", S),
              document.removeEventListener("touchstart", S),
              document.removeEventListener("touchend", S);
          }
          function S(A) {
            (A.target.nodeName && A.target.nodeName.toLowerCase() === "html") ||
              ((n = !1), I());
          }
          document.addEventListener("keydown", d, !0),
            document.addEventListener("mousedown", h, !0),
            document.addEventListener("pointerdown", h, !0),
            document.addEventListener("touchstart", h, !0),
            document.addEventListener("visibilitychange", _, !0),
            q(),
            r.addEventListener("focus", y, !0),
            r.addEventListener("blur", E, !0);
        }
        function t() {
          if (typeof document < "u")
            try {
              document.querySelector(":focus-visible");
            } catch {
              e(document);
            }
        }
        return { ready: t };
      })
    );
  });
  var Ks = c((UH, zs) => {
    "use strict";
    var js = Me();
    js.define(
      "focus",
      (zs.exports = function () {
        var e = [],
          t = !1;
        function r(a) {
          t &&
            (a.preventDefault(),
              a.stopPropagation(),
              a.stopImmediatePropagation(),
              e.unshift(a));
        }
        function n(a) {
          var s = a.target,
            u = s.tagName;
          return (
            (/^a$/i.test(u) && s.href != null) ||
            (/^(button|textarea)$/i.test(u) && s.disabled !== !0) ||
            (/^input$/i.test(u) &&
              /^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
              !s.disabled) ||
            (!/^(button|input|textarea|select|a)$/i.test(u) &&
              !Number.isNaN(Number.parseFloat(s.tabIndex))) ||
            /^audio$/i.test(u) ||
            (/^video$/i.test(u) && s.controls === !0)
          );
        }
        function i(a) {
          n(a) &&
            ((t = !0),
              setTimeout(() => {
                for (t = !1, a.target.focus(); e.length > 0;) {
                  var s = e.pop();
                  s.target.dispatchEvent(new MouseEvent(s.type, s));
                }
              }, 0));
        }
        function o() {
          typeof document < "u" &&
            document.body.hasAttribute("data-wf-focus-within") &&
            js.env.safari &&
            (document.addEventListener("mousedown", i, !0),
              document.addEventListener("mouseup", r, !0),
              document.addEventListener("click", r, !0));
        }
        return { ready: o };
      })
    );
  });
  var Qs = c((VH, $s) => {
    "use strict";
    var Di = window.jQuery,
      et = {},
      on = [],
      Ys = ".w-ix",
      an = {
        reset: function (e, t) {
          t.__wf_intro = null;
        },
        intro: function (e, t) {
          t.__wf_intro ||
            ((t.__wf_intro = !0), Di(t).triggerHandler(et.types.INTRO));
        },
        outro: function (e, t) {
          t.__wf_intro &&
            ((t.__wf_intro = null), Di(t).triggerHandler(et.types.OUTRO));
        },
      };
    et.triggers = {};
    et.types = { INTRO: "w-ix-intro" + Ys, OUTRO: "w-ix-outro" + Ys };
    et.init = function () {
      for (var e = on.length, t = 0; t < e; t++) {
        var r = on[t];
        r[0](0, r[1]);
      }
      (on = []), Di.extend(et.triggers, an);
    };
    et.async = function () {
      for (var e in an) {
        var t = an[e];
        an.hasOwnProperty(e) &&
          (et.triggers[e] = function (r, n) {
            on.push([t, n]);
          });
      }
    };
    et.async();
    $s.exports = et;
  });
  var un = c((HH, eu) => {
    "use strict";
    var Fi = Qs();
    function Zs(e, t) {
      var r = document.createEvent("CustomEvent");
      r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
    }
    var oT = window.jQuery,
      sn = {},
      Js = ".w-ix",
      aT = {
        reset: function (e, t) {
          Fi.triggers.reset(e, t);
        },
        intro: function (e, t) {
          Fi.triggers.intro(e, t), Zs(t, "COMPONENT_ACTIVE");
        },
        outro: function (e, t) {
          Fi.triggers.outro(e, t), Zs(t, "COMPONENT_INACTIVE");
        },
      };
    sn.triggers = {};
    sn.types = { INTRO: "w-ix-intro" + Js, OUTRO: "w-ix-outro" + Js };
    oT.extend(sn.triggers, aT);
    eu.exports = sn;
  });
  var tu = c((XH, st) => {
    function Gi(e) {
      return (
        (st.exports = Gi =
          typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (t) {
              return typeof t;
            }
            : function (t) {
              return t &&
                typeof Symbol == "function" &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
        (st.exports.__esModule = !0),
        (st.exports.default = st.exports),
        Gi(e)
      );
    }
    (st.exports = Gi),
      (st.exports.__esModule = !0),
      (st.exports.default = st.exports);
  });
  var cn = c((kH, hr) => {
    var sT = tu().default;
    function ru(e) {
      if (typeof WeakMap != "function") return null;
      var t = new WeakMap(),
        r = new WeakMap();
      return (ru = function (i) {
        return i ? r : t;
      })(e);
    }
    function uT(e, t) {
      if (!t && e && e.__esModule) return e;
      if (e === null || (sT(e) !== "object" && typeof e != "function"))
        return { default: e };
      var r = ru(t);
      if (r && r.has(e)) return r.get(e);
      var n = {},
        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var o in e)
        if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
          var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
          a && (a.get || a.set)
            ? Object.defineProperty(n, o, a)
            : (n[o] = e[o]);
        }
      return (n.default = e), r && r.set(e, n), n;
    }
    (hr.exports = uT),
      (hr.exports.__esModule = !0),
      (hr.exports.default = hr.exports);
  });
  var nu = c((WH, Er) => {
    function cT(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Er.exports = cT),
      (Er.exports.__esModule = !0),
      (Er.exports.default = Er.exports);
  });
  var de = c((BH, iu) => {
    var ln = function (e) {
      return e && e.Math == Math && e;
    };
    iu.exports =
      ln(typeof globalThis == "object" && globalThis) ||
      ln(typeof window == "object" && window) ||
      ln(typeof self == "object" && self) ||
      ln(typeof global == "object" && global) ||
      (function () {
        return this;
      })() ||
      Function("return this")();
  });
  var Ft = c((jH, ou) => {
    ou.exports = function (e) {
      try {
        return !!e();
      } catch {
        return !0;
      }
    };
  });
  var Ot = c((zH, au) => {
    var lT = Ft();
    au.exports = !lT(function () {
      return (
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1] != 7
      );
    });
  });
  var fn = c((KH, su) => {
    var yr = Function.prototype.call;
    su.exports = yr.bind
      ? yr.bind(yr)
      : function () {
        return yr.apply(yr, arguments);
      };
  });
  var fu = c((lu) => {
    "use strict";
    var uu = {}.propertyIsEnumerable,
      cu = Object.getOwnPropertyDescriptor,
      fT = cu && !uu.call({ 1: 2 }, 1);
    lu.f = fT
      ? function (t) {
        var r = cu(this, t);
        return !!r && r.enumerable;
      }
      : uu;
  });
  var Ui = c(($H, du) => {
    du.exports = function (e, t) {
      return {
        enumerable: !(e & 1),
        configurable: !(e & 2),
        writable: !(e & 4),
        value: t,
      };
    };
  });
  var Xe = c((QH, gu) => {
    var pu = Function.prototype,
      Vi = pu.bind,
      Hi = pu.call,
      dT = Vi && Vi.bind(Hi);
    gu.exports = Vi
      ? function (e) {
        return e && dT(Hi, e);
      }
      : function (e) {
        return (
          e &&
          function () {
            return Hi.apply(e, arguments);
          }
        );
      };
  });
  var Eu = c((ZH, hu) => {
    var vu = Xe(),
      pT = vu({}.toString),
      gT = vu("".slice);
    hu.exports = function (e) {
      return gT(pT(e), 8, -1);
    };
  });
  var mu = c((JH, yu) => {
    var vT = de(),
      hT = Xe(),
      ET = Ft(),
      yT = Eu(),
      Xi = vT.Object,
      mT = hT("".split);
    yu.exports = ET(function () {
      return !Xi("z").propertyIsEnumerable(0);
    })
      ? function (e) {
        return yT(e) == "String" ? mT(e, "") : Xi(e);
      }
      : Xi;
  });
  var ki = c((eX, _u) => {
    var _T = de(),
      TT = _T.TypeError;
    _u.exports = function (e) {
      if (e == null) throw TT("Can't call method on " + e);
      return e;
    };
  });
  var mr = c((tX, Tu) => {
    var bT = mu(),
      IT = ki();
    Tu.exports = function (e) {
      return bT(IT(e));
    };
  });
  var tt = c((rX, bu) => {
    bu.exports = function (e) {
      return typeof e == "function";
    };
  });
  var Gt = c((nX, Iu) => {
    var OT = tt();
    Iu.exports = function (e) {
      return typeof e == "object" ? e !== null : OT(e);
    };
  });
  var _r = c((iX, Ou) => {
    var Wi = de(),
      AT = tt(),
      wT = function (e) {
        return AT(e) ? e : void 0;
      };
    Ou.exports = function (e, t) {
      return arguments.length < 2 ? wT(Wi[e]) : Wi[e] && Wi[e][t];
    };
  });
  var wu = c((oX, Au) => {
    var xT = Xe();
    Au.exports = xT({}.isPrototypeOf);
  });
  var Su = c((aX, xu) => {
    var ST = _r();
    xu.exports = ST("navigator", "userAgent") || "";
  });
  var Mu = c((sX, qu) => {
    var Pu = de(),
      Bi = Su(),
      Ru = Pu.process,
      Cu = Pu.Deno,
      Nu = (Ru && Ru.versions) || (Cu && Cu.version),
      Lu = Nu && Nu.v8,
      ke,
      dn;
    Lu &&
      ((ke = Lu.split(".")),
        (dn = ke[0] > 0 && ke[0] < 4 ? 1 : +(ke[0] + ke[1])));
    !dn &&
      Bi &&
      ((ke = Bi.match(/Edge\/(\d+)/)),
        (!ke || ke[1] >= 74) &&
        ((ke = Bi.match(/Chrome\/(\d+)/)), ke && (dn = +ke[1])));
    qu.exports = dn;
  });
  var ji = c((uX, Fu) => {
    var Du = Mu(),
      RT = Ft();
    Fu.exports =
      !!Object.getOwnPropertySymbols &&
      !RT(function () {
        var e = Symbol();
        return (
          !String(e) ||
          !(Object(e) instanceof Symbol) ||
          (!Symbol.sham && Du && Du < 41)
        );
      });
  });
  var zi = c((cX, Gu) => {
    var CT = ji();
    Gu.exports = CT && !Symbol.sham && typeof Symbol.iterator == "symbol";
  });
  var Ki = c((lX, Uu) => {
    var NT = de(),
      LT = _r(),
      PT = tt(),
      qT = wu(),
      MT = zi(),
      DT = NT.Object;
    Uu.exports = MT
      ? function (e) {
        return typeof e == "symbol";
      }
      : function (e) {
        var t = LT("Symbol");
        return PT(t) && qT(t.prototype, DT(e));
      };
  });
  var Hu = c((fX, Vu) => {
    var FT = de(),
      GT = FT.String;
    Vu.exports = function (e) {
      try {
        return GT(e);
      } catch {
        return "Object";
      }
    };
  });
  var ku = c((dX, Xu) => {
    var UT = de(),
      VT = tt(),
      HT = Hu(),
      XT = UT.TypeError;
    Xu.exports = function (e) {
      if (VT(e)) return e;
      throw XT(HT(e) + " is not a function");
    };
  });
  var Bu = c((pX, Wu) => {
    var kT = ku();
    Wu.exports = function (e, t) {
      var r = e[t];
      return r == null ? void 0 : kT(r);
    };
  });
  var zu = c((gX, ju) => {
    var WT = de(),
      Yi = fn(),
      $i = tt(),
      Qi = Gt(),
      BT = WT.TypeError;
    ju.exports = function (e, t) {
      var r, n;
      if (
        (t === "string" && $i((r = e.toString)) && !Qi((n = Yi(r, e)))) ||
        ($i((r = e.valueOf)) && !Qi((n = Yi(r, e)))) ||
        (t !== "string" && $i((r = e.toString)) && !Qi((n = Yi(r, e))))
      )
        return n;
      throw BT("Can't convert object to primitive value");
    };
  });
  var Yu = c((vX, Ku) => {
    Ku.exports = !1;
  });
  var pn = c((hX, Qu) => {
    var $u = de(),
      jT = Object.defineProperty;
    Qu.exports = function (e, t) {
      try {
        jT($u, e, { value: t, configurable: !0, writable: !0 });
      } catch {
        $u[e] = t;
      }
      return t;
    };
  });
  var gn = c((EX, Ju) => {
    var zT = de(),
      KT = pn(),
      Zu = "__core-js_shared__",
      YT = zT[Zu] || KT(Zu, {});
    Ju.exports = YT;
  });
  var Zi = c((yX, tc) => {
    var $T = Yu(),
      ec = gn();
    (tc.exports = function (e, t) {
      return ec[e] || (ec[e] = t !== void 0 ? t : {});
    })("versions", []).push({
      version: "3.19.0",
      mode: $T ? "pure" : "global",
      copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)",
    });
  });
  var nc = c((mX, rc) => {
    var QT = de(),
      ZT = ki(),
      JT = QT.Object;
    rc.exports = function (e) {
      return JT(ZT(e));
    };
  });
  var vt = c((_X, ic) => {
    var eb = Xe(),
      tb = nc(),
      rb = eb({}.hasOwnProperty);
    ic.exports =
      Object.hasOwn ||
      function (t, r) {
        return rb(tb(t), r);
      };
  });
  var Ji = c((TX, oc) => {
    var nb = Xe(),
      ib = 0,
      ob = Math.random(),
      ab = nb((1).toString);
    oc.exports = function (e) {
      return "Symbol(" + (e === void 0 ? "" : e) + ")_" + ab(++ib + ob, 36);
    };
  });
  var eo = c((bX, lc) => {
    var sb = de(),
      ub = Zi(),
      ac = vt(),
      cb = Ji(),
      sc = ji(),
      cc = zi(),
      Ut = ub("wks"),
      At = sb.Symbol,
      uc = At && At.for,
      lb = cc ? At : (At && At.withoutSetter) || cb;
    lc.exports = function (e) {
      if (!ac(Ut, e) || !(sc || typeof Ut[e] == "string")) {
        var t = "Symbol." + e;
        sc && ac(At, e)
          ? (Ut[e] = At[e])
          : cc && uc
            ? (Ut[e] = uc(t))
            : (Ut[e] = lb(t));
      }
      return Ut[e];
    };
  });
  var gc = c((IX, pc) => {
    var fb = de(),
      db = fn(),
      fc = Gt(),
      dc = Ki(),
      pb = Bu(),
      gb = zu(),
      vb = eo(),
      hb = fb.TypeError,
      Eb = vb("toPrimitive");
    pc.exports = function (e, t) {
      if (!fc(e) || dc(e)) return e;
      var r = pb(e, Eb),
        n;
      if (r) {
        if (
          (t === void 0 && (t = "default"), (n = db(r, e, t)), !fc(n) || dc(n))
        )
          return n;
        throw hb("Can't convert object to primitive value");
      }
      return t === void 0 && (t = "number"), gb(e, t);
    };
  });
  var to = c((OX, vc) => {
    var yb = gc(),
      mb = Ki();
    vc.exports = function (e) {
      var t = yb(e, "string");
      return mb(t) ? t : t + "";
    };
  });
  var no = c((AX, Ec) => {
    var _b = de(),
      hc = Gt(),
      ro = _b.document,
      Tb = hc(ro) && hc(ro.createElement);
    Ec.exports = function (e) {
      return Tb ? ro.createElement(e) : {};
    };
  });
  var io = c((wX, yc) => {
    var bb = Ot(),
      Ib = Ft(),
      Ob = no();
    yc.exports =
      !bb &&
      !Ib(function () {
        return (
          Object.defineProperty(Ob("div"), "a", {
            get: function () {
              return 7;
            },
          }).a != 7
        );
      });
  });
  var oo = c((_c) => {
    var Ab = Ot(),
      wb = fn(),
      xb = fu(),
      Sb = Ui(),
      Rb = mr(),
      Cb = to(),
      Nb = vt(),
      Lb = io(),
      mc = Object.getOwnPropertyDescriptor;
    _c.f = Ab
      ? mc
      : function (t, r) {
        if (((t = Rb(t)), (r = Cb(r)), Lb))
          try {
            return mc(t, r);
          } catch { }
        if (Nb(t, r)) return Sb(!wb(xb.f, t, r), t[r]);
      };
  });
  var Tr = c((SX, bc) => {
    var Tc = de(),
      Pb = Gt(),
      qb = Tc.String,
      Mb = Tc.TypeError;
    bc.exports = function (e) {
      if (Pb(e)) return e;
      throw Mb(qb(e) + " is not an object");
    };
  });
  var br = c((Ac) => {
    var Db = de(),
      Fb = Ot(),
      Gb = io(),
      Ic = Tr(),
      Ub = to(),
      Vb = Db.TypeError,
      Oc = Object.defineProperty;
    Ac.f = Fb
      ? Oc
      : function (t, r, n) {
        if ((Ic(t), (r = Ub(r)), Ic(n), Gb))
          try {
            return Oc(t, r, n);
          } catch { }
        if ("get" in n || "set" in n) throw Vb("Accessors not supported");
        return "value" in n && (t[r] = n.value), t;
      };
  });
  var vn = c((CX, wc) => {
    var Hb = Ot(),
      Xb = br(),
      kb = Ui();
    wc.exports = Hb
      ? function (e, t, r) {
        return Xb.f(e, t, kb(1, r));
      }
      : function (e, t, r) {
        return (e[t] = r), e;
      };
  });
  var so = c((NX, xc) => {
    var Wb = Xe(),
      Bb = tt(),
      ao = gn(),
      jb = Wb(Function.toString);
    Bb(ao.inspectSource) ||
      (ao.inspectSource = function (e) {
        return jb(e);
      });
    xc.exports = ao.inspectSource;
  });
  var Cc = c((LX, Rc) => {
    var zb = de(),
      Kb = tt(),
      Yb = so(),
      Sc = zb.WeakMap;
    Rc.exports = Kb(Sc) && /native code/.test(Yb(Sc));
  });
  var uo = c((PX, Lc) => {
    var $b = Zi(),
      Qb = Ji(),
      Nc = $b("keys");
    Lc.exports = function (e) {
      return Nc[e] || (Nc[e] = Qb(e));
    };
  });
  var hn = c((qX, Pc) => {
    Pc.exports = {};
  });
  var Uc = c((MX, Gc) => {
    var Zb = Cc(),
      Fc = de(),
      co = Xe(),
      Jb = Gt(),
      eI = vn(),
      lo = vt(),
      fo = gn(),
      tI = uo(),
      rI = hn(),
      qc = "Object already initialized",
      go = Fc.TypeError,
      nI = Fc.WeakMap,
      En,
      Ir,
      yn,
      iI = function (e) {
        return yn(e) ? Ir(e) : En(e, {});
      },
      oI = function (e) {
        return function (t) {
          var r;
          if (!Jb(t) || (r = Ir(t)).type !== e)
            throw go("Incompatible receiver, " + e + " required");
          return r;
        };
      };
    Zb || fo.state
      ? ((ht = fo.state || (fo.state = new nI())),
        (Mc = co(ht.get)),
        (po = co(ht.has)),
        (Dc = co(ht.set)),
        (En = function (e, t) {
          if (po(ht, e)) throw new go(qc);
          return (t.facade = e), Dc(ht, e, t), t;
        }),
        (Ir = function (e) {
          return Mc(ht, e) || {};
        }),
        (yn = function (e) {
          return po(ht, e);
        }))
      : ((wt = tI("state")),
        (rI[wt] = !0),
        (En = function (e, t) {
          if (lo(e, wt)) throw new go(qc);
          return (t.facade = e), eI(e, wt, t), t;
        }),
        (Ir = function (e) {
          return lo(e, wt) ? e[wt] : {};
        }),
        (yn = function (e) {
          return lo(e, wt);
        }));
    var ht, Mc, po, Dc, wt;
    Gc.exports = { set: En, get: Ir, has: yn, enforce: iI, getterFor: oI };
  });
  var Xc = c((DX, Hc) => {
    var vo = Ot(),
      aI = vt(),
      Vc = Function.prototype,
      sI = vo && Object.getOwnPropertyDescriptor,
      ho = aI(Vc, "name"),
      uI = ho && function () { }.name === "something",
      cI = ho && (!vo || (vo && sI(Vc, "name").configurable));
    Hc.exports = { EXISTS: ho, PROPER: uI, CONFIGURABLE: cI };
  });
  var zc = c((FX, jc) => {
    var lI = de(),
      kc = tt(),
      fI = vt(),
      Wc = vn(),
      dI = pn(),
      pI = so(),
      Bc = Uc(),
      gI = Xc().CONFIGURABLE,
      vI = Bc.get,
      hI = Bc.enforce,
      EI = String(String).split("String");
    (jc.exports = function (e, t, r, n) {
      var i = n ? !!n.unsafe : !1,
        o = n ? !!n.enumerable : !1,
        a = n ? !!n.noTargetGet : !1,
        s = n && n.name !== void 0 ? n.name : t,
        u;
      if (
        (kc(r) &&
          (String(s).slice(0, 7) === "Symbol(" &&
            (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
            (!fI(r, "name") || (gI && r.name !== s)) && Wc(r, "name", s),
            (u = hI(r)),
            u.source || (u.source = EI.join(typeof s == "string" ? s : ""))),
          e === lI)
      ) {
        o ? (e[t] = r) : dI(t, r);
        return;
      } else i ? !a && e[t] && (o = !0) : delete e[t];
      o ? (e[t] = r) : Wc(e, t, r);
    })(Function.prototype, "toString", function () {
      return (kc(this) && vI(this).source) || pI(this);
    });
  });
  var Eo = c((GX, Kc) => {
    var yI = Math.ceil,
      mI = Math.floor;
    Kc.exports = function (e) {
      var t = +e;
      return t !== t || t === 0 ? 0 : (t > 0 ? mI : yI)(t);
    };
  });
  var $c = c((UX, Yc) => {
    var _I = Eo(),
      TI = Math.max,
      bI = Math.min;
    Yc.exports = function (e, t) {
      var r = _I(e);
      return r < 0 ? TI(r + t, 0) : bI(r, t);
    };
  });
  var Zc = c((VX, Qc) => {
    var II = Eo(),
      OI = Math.min;
    Qc.exports = function (e) {
      return e > 0 ? OI(II(e), 9007199254740991) : 0;
    };
  });
  var el = c((HX, Jc) => {
    var AI = Zc();
    Jc.exports = function (e) {
      return AI(e.length);
    };
  });
  var yo = c((XX, rl) => {
    var wI = mr(),
      xI = $c(),
      SI = el(),
      tl = function (e) {
        return function (t, r, n) {
          var i = wI(t),
            o = SI(i),
            a = xI(n, o),
            s;
          if (e && r != r) {
            for (; o > a;) if (((s = i[a++]), s != s)) return !0;
          } else
            for (; o > a; a++)
              if ((e || a in i) && i[a] === r) return e || a || 0;
          return !e && -1;
        };
      };
    rl.exports = { includes: tl(!0), indexOf: tl(!1) };
  });
  var _o = c((kX, il) => {
    var RI = Xe(),
      mo = vt(),
      CI = mr(),
      NI = yo().indexOf,
      LI = hn(),
      nl = RI([].push);
    il.exports = function (e, t) {
      var r = CI(e),
        n = 0,
        i = [],
        o;
      for (o in r) !mo(LI, o) && mo(r, o) && nl(i, o);
      for (; t.length > n;) mo(r, (o = t[n++])) && (~NI(i, o) || nl(i, o));
      return i;
    };
  });
  var mn = c((WX, ol) => {
    ol.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  });
  var sl = c((al) => {
    var PI = _o(),
      qI = mn(),
      MI = qI.concat("length", "prototype");
    al.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return PI(t, MI);
      };
  });
  var cl = c((ul) => {
    ul.f = Object.getOwnPropertySymbols;
  });
  var fl = c((zX, ll) => {
    var DI = _r(),
      FI = Xe(),
      GI = sl(),
      UI = cl(),
      VI = Tr(),
      HI = FI([].concat);
    ll.exports =
      DI("Reflect", "ownKeys") ||
      function (t) {
        var r = GI.f(VI(t)),
          n = UI.f;
        return n ? HI(r, n(t)) : r;
      };
  });
  var pl = c((KX, dl) => {
    var XI = vt(),
      kI = fl(),
      WI = oo(),
      BI = br();
    dl.exports = function (e, t) {
      for (var r = kI(t), n = BI.f, i = WI.f, o = 0; o < r.length; o++) {
        var a = r[o];
        XI(e, a) || n(e, a, i(t, a));
      }
    };
  });
  var vl = c((YX, gl) => {
    var jI = Ft(),
      zI = tt(),
      KI = /#|\.prototype\./,
      Or = function (e, t) {
        var r = $I[YI(e)];
        return r == ZI ? !0 : r == QI ? !1 : zI(t) ? jI(t) : !!t;
      },
      YI = (Or.normalize = function (e) {
        return String(e).replace(KI, ".").toLowerCase();
      }),
      $I = (Or.data = {}),
      QI = (Or.NATIVE = "N"),
      ZI = (Or.POLYFILL = "P");
    gl.exports = Or;
  });
  var El = c(($X, hl) => {
    var To = de(),
      JI = oo().f,
      eO = vn(),
      tO = zc(),
      rO = pn(),
      nO = pl(),
      iO = vl();
    hl.exports = function (e, t) {
      var r = e.target,
        n = e.global,
        i = e.stat,
        o,
        a,
        s,
        u,
        f,
        g;
      if (
        (n
          ? (a = To)
          : i
            ? (a = To[r] || rO(r, {}))
            : (a = (To[r] || {}).prototype),
          a)
      )
        for (s in t) {
          if (
            ((f = t[s]),
              e.noTargetGet ? ((g = JI(a, s)), (u = g && g.value)) : (u = a[s]),
              (o = iO(n ? s : r + (i ? "." : "#") + s, e.forced)),
              !o && u !== void 0)
          ) {
            if (typeof f == typeof u) continue;
            nO(f, u);
          }
          (e.sham || (u && u.sham)) && eO(f, "sham", !0), tO(a, s, f, e);
        }
    };
  });
  var ml = c((QX, yl) => {
    var oO = _o(),
      aO = mn();
    yl.exports =
      Object.keys ||
      function (t) {
        return oO(t, aO);
      };
  });
  var Tl = c((ZX, _l) => {
    var sO = Ot(),
      uO = br(),
      cO = Tr(),
      lO = mr(),
      fO = ml();
    _l.exports = sO
      ? Object.defineProperties
      : function (t, r) {
        cO(t);
        for (var n = lO(r), i = fO(r), o = i.length, a = 0, s; o > a;)
          uO.f(t, (s = i[a++]), n[s]);
        return t;
      };
  });
  var Il = c((JX, bl) => {
    var dO = _r();
    bl.exports = dO("document", "documentElement");
  });
  var Nl = c((ek, Cl) => {
    var pO = Tr(),
      gO = Tl(),
      Ol = mn(),
      vO = hn(),
      hO = Il(),
      EO = no(),
      yO = uo(),
      Al = ">",
      wl = "<",
      Io = "prototype",
      Oo = "script",
      Sl = yO("IE_PROTO"),
      bo = function () { },
      Rl = function (e) {
        return wl + Oo + Al + e + wl + "/" + Oo + Al;
      },
      xl = function (e) {
        e.write(Rl("")), e.close();
        var t = e.parentWindow.Object;
        return (e = null), t;
      },
      mO = function () {
        var e = EO("iframe"),
          t = "java" + Oo + ":",
          r;
        return (
          (e.style.display = "none"),
          hO.appendChild(e),
          (e.src = String(t)),
          (r = e.contentWindow.document),
          r.open(),
          r.write(Rl("document.F=Object")),
          r.close(),
          r.F
        );
      },
      _n,
      Tn = function () {
        try {
          _n = new ActiveXObject("htmlfile");
        } catch { }
        Tn =
          typeof document < "u"
            ? document.domain && _n
              ? xl(_n)
              : mO()
            : xl(_n);
        for (var e = Ol.length; e--;) delete Tn[Io][Ol[e]];
        return Tn();
      };
    vO[Sl] = !0;
    Cl.exports =
      Object.create ||
      function (t, r) {
        var n;
        return (
          t !== null
            ? ((bo[Io] = pO(t)), (n = new bo()), (bo[Io] = null), (n[Sl] = t))
            : (n = Tn()),
          r === void 0 ? n : gO(n, r)
        );
      };
  });
  var Pl = c((tk, Ll) => {
    var _O = eo(),
      TO = Nl(),
      bO = br(),
      Ao = _O("unscopables"),
      wo = Array.prototype;
    wo[Ao] == null && bO.f(wo, Ao, { configurable: !0, value: TO(null) });
    Ll.exports = function (e) {
      wo[Ao][e] = !0;
    };
  });
  var ql = c(() => {
    "use strict";
    var IO = El(),
      OO = yo().includes,
      AO = Pl();
    IO(
      { target: "Array", proto: !0 },
      {
        includes: function (t) {
          return OO(this, t, arguments.length > 1 ? arguments[1] : void 0);
        },
      }
    );
    AO("includes");
  });
  var Dl = c((ik, Ml) => {
    var wO = de(),
      xO = Xe();
    Ml.exports = function (e, t) {
      return xO(wO[e].prototype[t]);
    };
  });
  var Gl = c((ok, Fl) => {
    ql();
    var SO = Dl();
    Fl.exports = SO("Array", "includes");
  });
  var Vl = c((ak, Ul) => {
    var RO = Gl();
    Ul.exports = RO;
  });
  var Xl = c((sk, Hl) => {
    var CO = Vl();
    Hl.exports = CO;
  });
  var xo = c((uk, kl) => {
    var NO =
      typeof global == "object" && global && global.Object === Object && global;
    kl.exports = NO;
  });
  var We = c((ck, Wl) => {
    var LO = xo(),
      PO = typeof self == "object" && self && self.Object === Object && self,
      qO = LO || PO || Function("return this")();
    Wl.exports = qO;
  });
  var Vt = c((lk, Bl) => {
    var MO = We(),
      DO = MO.Symbol;
    Bl.exports = DO;
  });
  var Yl = c((fk, Kl) => {
    var jl = Vt(),
      zl = Object.prototype,
      FO = zl.hasOwnProperty,
      GO = zl.toString,
      Ar = jl ? jl.toStringTag : void 0;
    function UO(e) {
      var t = FO.call(e, Ar),
        r = e[Ar];
      try {
        e[Ar] = void 0;
        var n = !0;
      } catch { }
      var i = GO.call(e);
      return n && (t ? (e[Ar] = r) : delete e[Ar]), i;
    }
    Kl.exports = UO;
  });
  var Ql = c((dk, $l) => {
    var VO = Object.prototype,
      HO = VO.toString;
    function XO(e) {
      return HO.call(e);
    }
    $l.exports = XO;
  });
  var Et = c((pk, ef) => {
    var Zl = Vt(),
      kO = Yl(),
      WO = Ql(),
      BO = "[object Null]",
      jO = "[object Undefined]",
      Jl = Zl ? Zl.toStringTag : void 0;
    function zO(e) {
      return e == null
        ? e === void 0
          ? jO
          : BO
        : Jl && Jl in Object(e)
          ? kO(e)
          : WO(e);
    }
    ef.exports = zO;
  });
  var So = c((gk, tf) => {
    function KO(e, t) {
      return function (r) {
        return e(t(r));
      };
    }
    tf.exports = KO;
  });
  var Ro = c((vk, rf) => {
    var YO = So(),
      $O = YO(Object.getPrototypeOf, Object);
    rf.exports = $O;
  });
  var ut = c((hk, nf) => {
    function QO(e) {
      return e != null && typeof e == "object";
    }
    nf.exports = QO;
  });
  var Co = c((Ek, af) => {
    var ZO = Et(),
      JO = Ro(),
      eA = ut(),
      tA = "[object Object]",
      rA = Function.prototype,
      nA = Object.prototype,
      of = rA.toString,
      iA = nA.hasOwnProperty,
      oA = of.call(Object);
    function aA(e) {
      if (!eA(e) || ZO(e) != tA) return !1;
      var t = JO(e);
      if (t === null) return !0;
      var r = iA.call(t, "constructor") && t.constructor;
      return typeof r == "function" && r instanceof r && of.call(r) == oA;
    }
    af.exports = aA;
  });
  var sf = c((No) => {
    "use strict";
    Object.defineProperty(No, "__esModule", { value: !0 });
    No.default = sA;
    function sA(e) {
      var t,
        r = e.Symbol;
      return (
        typeof r == "function"
          ? r.observable
            ? (t = r.observable)
            : ((t = r("observable")), (r.observable = t))
          : (t = "@@observable"),
        t
      );
    }
  });
  var uf = c((Po, Lo) => {
    "use strict";
    Object.defineProperty(Po, "__esModule", { value: !0 });
    var uA = sf(),
      cA = lA(uA);
    function lA(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var Ht;
    typeof self < "u"
      ? (Ht = self)
      : typeof window < "u"
        ? (Ht = window)
        : typeof global < "u"
          ? (Ht = global)
          : typeof Lo < "u"
            ? (Ht = Lo)
            : (Ht = Function("return this")());
    var fA = (0, cA.default)(Ht);
    Po.default = fA;
  });
  var qo = c((wr) => {
    "use strict";
    wr.__esModule = !0;
    wr.ActionTypes = void 0;
    wr.default = df;
    var dA = Co(),
      pA = ff(dA),
      gA = uf(),
      cf = ff(gA);
    function ff(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var lf = (wr.ActionTypes = { INIT: "@@redux/INIT" });
    function df(e, t, r) {
      var n;
      if (
        (typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
          typeof r < "u")
      ) {
        if (typeof r != "function")
          throw new Error("Expected the enhancer to be a function.");
        return r(df)(e, t);
      }
      if (typeof e != "function")
        throw new Error("Expected the reducer to be a function.");
      var i = e,
        o = t,
        a = [],
        s = a,
        u = !1;
      function f() {
        s === a && (s = a.slice());
      }
      function g() {
        return o;
      }
      function d(_) {
        if (typeof _ != "function")
          throw new Error("Expected listener to be a function.");
        var q = !0;
        return (
          f(),
          s.push(_),
          function () {
            if (q) {
              (q = !1), f();
              var S = s.indexOf(_);
              s.splice(S, 1);
            }
          }
        );
      }
      function h(_) {
        if (!(0, pA.default)(_))
          throw new Error(
            "Actions must be plain objects. Use custom middleware for async actions."
          );
        if (typeof _.type > "u")
          throw new Error(
            'Actions may not have an undefined "type" property. Have you misspelled a constant?'
          );
        if (u) throw new Error("Reducers may not dispatch actions.");
        try {
          (u = !0), (o = i(o, _));
        } finally {
          u = !1;
        }
        for (var q = (a = s), I = 0; I < q.length; I++) q[I]();
        return _;
      }
      function y(_) {
        if (typeof _ != "function")
          throw new Error("Expected the nextReducer to be a function.");
        (i = _), h({ type: lf.INIT });
      }
      function E() {
        var _,
          q = d;
        return (
          (_ = {
            subscribe: function (S) {
              if (typeof S != "object")
                throw new TypeError("Expected the observer to be an object.");
              function A() {
                S.next && S.next(g());
              }
              A();
              var N = q(A);
              return { unsubscribe: N };
            },
          }),
          (_[cf.default] = function () {
            return this;
          }),
          _
        );
      }
      return (
        h({ type: lf.INIT }),
        (n = { dispatch: h, subscribe: d, getState: g, replaceReducer: y }),
        (n[cf.default] = E),
        n
      );
    }
  });
  var Do = c((Mo) => {
    "use strict";
    Mo.__esModule = !0;
    Mo.default = vA;
    function vA(e) {
      typeof console < "u" &&
        typeof console.error == "function" &&
        console.error(e);
      try {
        throw new Error(e);
      } catch { }
    }
  });
  var vf = c((Fo) => {
    "use strict";
    Fo.__esModule = !0;
    Fo.default = _A;
    var pf = qo(),
      hA = Co(),
      Tk = gf(hA),
      EA = Do(),
      bk = gf(EA);
    function gf(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function yA(e, t) {
      var r = t && t.type,
        n = (r && '"' + r.toString() + '"') || "an action";
      return (
        "Given action " +
        n +
        ', reducer "' +
        e +
        '" returned undefined. To ignore an action, you must explicitly return the previous state.'
      );
    }
    function mA(e) {
      Object.keys(e).forEach(function (t) {
        var r = e[t],
          n = r(void 0, { type: pf.ActionTypes.INIT });
        if (typeof n > "u")
          throw new Error(
            'Reducer "' +
            t +
            '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
          );
        var i =
          "@@redux/PROBE_UNKNOWN_ACTION_" +
          Math.random().toString(36).substring(7).split("").join(".");
        if (typeof r(void 0, { type: i }) > "u")
          throw new Error(
            'Reducer "' +
            t +
            '" returned undefined when probed with a random type. ' +
            ("Don't try to handle " +
              pf.ActionTypes.INIT +
              ' or other actions in "redux/*" ') +
            "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
          );
      });
    }
    function _A(e) {
      for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        typeof e[i] == "function" && (r[i] = e[i]);
      }
      var o = Object.keys(r);
      if (!1) var a;
      var s;
      try {
        mA(r);
      } catch (u) {
        s = u;
      }
      return function () {
        var f =
          arguments.length <= 0 || arguments[0] === void 0
            ? {}
            : arguments[0],
          g = arguments[1];
        if (s) throw s;
        if (!1) var d;
        for (var h = !1, y = {}, E = 0; E < o.length; E++) {
          var _ = o[E],
            q = r[_],
            I = f[_],
            S = q(I, g);
          if (typeof S > "u") {
            var A = yA(_, g);
            throw new Error(A);
          }
          (y[_] = S), (h = h || S !== I);
        }
        return h ? y : f;
      };
    }
  });
  var Ef = c((Go) => {
    "use strict";
    Go.__esModule = !0;
    Go.default = TA;
    function hf(e, t) {
      return function () {
        return t(e.apply(void 0, arguments));
      };
    }
    function TA(e, t) {
      if (typeof e == "function") return hf(e, t);
      if (typeof e != "object" || e === null)
        throw new Error(
          "bindActionCreators expected an object or a function, instead received " +
          (e === null ? "null" : typeof e) +
          '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
        );
      for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
        var o = r[i],
          a = e[o];
        typeof a == "function" && (n[o] = hf(a, t));
      }
      return n;
    }
  });
  var Vo = c((Uo) => {
    "use strict";
    Uo.__esModule = !0;
    Uo.default = bA;
    function bA() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      if (t.length === 0)
        return function (o) {
          return o;
        };
      if (t.length === 1) return t[0];
      var n = t[t.length - 1],
        i = t.slice(0, -1);
      return function () {
        return i.reduceRight(function (o, a) {
          return a(o);
        }, n.apply(void 0, arguments));
      };
    }
  });
  var yf = c((Ho) => {
    "use strict";
    Ho.__esModule = !0;
    var IA =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      };
    Ho.default = xA;
    var OA = Vo(),
      AA = wA(OA);
    function wA(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function xA() {
      for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
        t[r] = arguments[r];
      return function (n) {
        return function (i, o, a) {
          var s = n(i, o, a),
            u = s.dispatch,
            f = [],
            g = {
              getState: s.getState,
              dispatch: function (h) {
                return u(h);
              },
            };
          return (
            (f = t.map(function (d) {
              return d(g);
            })),
            (u = AA.default.apply(void 0, f)(s.dispatch)),
            IA({}, s, { dispatch: u })
          );
        };
      };
    }
  });
  var Xo = c((De) => {
    "use strict";
    De.__esModule = !0;
    De.compose =
      De.applyMiddleware =
      De.bindActionCreators =
      De.combineReducers =
      De.createStore =
      void 0;
    var SA = qo(),
      RA = Xt(SA),
      CA = vf(),
      NA = Xt(CA),
      LA = Ef(),
      PA = Xt(LA),
      qA = yf(),
      MA = Xt(qA),
      DA = Vo(),
      FA = Xt(DA),
      GA = Do(),
      xk = Xt(GA);
    function Xt(e) {
      return e && e.__esModule ? e : { default: e };
    }
    De.createStore = RA.default;
    De.combineReducers = NA.default;
    De.bindActionCreators = PA.default;
    De.applyMiddleware = MA.default;
    De.compose = FA.default;
  });
  var Be,
    ko,
    rt,
    UA,
    VA,
    bn,
    HA,
    Wo = fe(() => {
      "use strict";
      (Be = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL",
      }),
        (ko = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" }),
        (rt = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" }),
        (UA = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" }),
        (VA = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        }),
        (bn = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        }),
        (HA = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        });
    });
  var Ne,
    XA,
    In = fe(() => {
      "use strict";
      (Ne = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        OBJECT_VALUE: "OBJECT_VALUE",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        PLUGIN_SPLINE: "PLUGIN_SPLINE",
        PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
      }),
        (XA = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        });
    });
  var kA,
    mf = fe(() => {
      "use strict";
      kA = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    });
  var WA,
    BA,
    jA,
    zA,
    KA,
    YA,
    $A,
    Bo,
    _f = fe(() => {
      "use strict";
      In();
      ({
        TRANSFORM_MOVE: WA,
        TRANSFORM_SCALE: BA,
        TRANSFORM_ROTATE: jA,
        TRANSFORM_SKEW: zA,
        STYLE_SIZE: KA,
        STYLE_FILTER: YA,
        STYLE_FONT_VARIATION: $A,
      } = Ne),
        (Bo = {
          [WA]: !0,
          [BA]: !0,
          [jA]: !0,
          [zA]: !0,
          [KA]: !0,
          [YA]: !0,
          [$A]: !0,
        });
    });
  var ye = {};
  Ce(ye, {
    IX2_ACTION_LIST_PLAYBACK_CHANGED: () => pw,
    IX2_ANIMATION_FRAME_CHANGED: () => sw,
    IX2_CLEAR_REQUESTED: () => iw,
    IX2_ELEMENT_STATE_CHANGED: () => dw,
    IX2_EVENT_LISTENER_ADDED: () => ow,
    IX2_EVENT_STATE_CHANGED: () => aw,
    IX2_INSTANCE_ADDED: () => cw,
    IX2_INSTANCE_REMOVED: () => fw,
    IX2_INSTANCE_STARTED: () => lw,
    IX2_MEDIA_QUERIES_DEFINED: () => vw,
    IX2_PARAMETER_CHANGED: () => uw,
    IX2_PLAYBACK_REQUESTED: () => rw,
    IX2_PREVIEW_REQUESTED: () => tw,
    IX2_RAW_DATA_IMPORTED: () => QA,
    IX2_SESSION_INITIALIZED: () => ZA,
    IX2_SESSION_STARTED: () => JA,
    IX2_SESSION_STOPPED: () => ew,
    IX2_STOP_REQUESTED: () => nw,
    IX2_TEST_FRAME_RENDERED: () => hw,
    IX2_VIEWPORT_WIDTH_CHANGED: () => gw,
  });
  var QA,
    ZA,
    JA,
    ew,
    tw,
    rw,
    nw,
    iw,
    ow,
    aw,
    sw,
    uw,
    cw,
    lw,
    fw,
    dw,
    pw,
    gw,
    vw,
    hw,
    Tf = fe(() => {
      "use strict";
      (QA = "IX2_RAW_DATA_IMPORTED"),
        (ZA = "IX2_SESSION_INITIALIZED"),
        (JA = "IX2_SESSION_STARTED"),
        (ew = "IX2_SESSION_STOPPED"),
        (tw = "IX2_PREVIEW_REQUESTED"),
        (rw = "IX2_PLAYBACK_REQUESTED"),
        (nw = "IX2_STOP_REQUESTED"),
        (iw = "IX2_CLEAR_REQUESTED"),
        (ow = "IX2_EVENT_LISTENER_ADDED"),
        (aw = "IX2_EVENT_STATE_CHANGED"),
        (sw = "IX2_ANIMATION_FRAME_CHANGED"),
        (uw = "IX2_PARAMETER_CHANGED"),
        (cw = "IX2_INSTANCE_ADDED"),
        (lw = "IX2_INSTANCE_STARTED"),
        (fw = "IX2_INSTANCE_REMOVED"),
        (dw = "IX2_ELEMENT_STATE_CHANGED"),
        (pw = "IX2_ACTION_LIST_PLAYBACK_CHANGED"),
        (gw = "IX2_VIEWPORT_WIDTH_CHANGED"),
        (vw = "IX2_MEDIA_QUERIES_DEFINED"),
        (hw = "IX2_TEST_FRAME_RENDERED");
    });
  var Ie = {};
  Ce(Ie, {
    ABSTRACT_NODE: () => gx,
    AUTO: () => nx,
    BACKGROUND: () => Qw,
    BACKGROUND_COLOR: () => $w,
    BAR_DELIMITER: () => ax,
    BORDER_COLOR: () => Zw,
    BOUNDARY_SELECTOR: () => Tw,
    CHILDREN: () => sx,
    COLON_DELIMITER: () => ox,
    COLOR: () => Jw,
    COMMA_DELIMITER: () => ix,
    CONFIG_UNIT: () => Rw,
    CONFIG_VALUE: () => Aw,
    CONFIG_X_UNIT: () => ww,
    CONFIG_X_VALUE: () => bw,
    CONFIG_Y_UNIT: () => xw,
    CONFIG_Y_VALUE: () => Iw,
    CONFIG_Z_UNIT: () => Sw,
    CONFIG_Z_VALUE: () => Ow,
    DISPLAY: () => ex,
    FILTER: () => jw,
    FLEX: () => tx,
    FONT_VARIATION_SETTINGS: () => zw,
    HEIGHT: () => Yw,
    HTML_ELEMENT: () => dx,
    IMMEDIATE_CHILDREN: () => ux,
    IX2_ID_DELIMITER: () => Ew,
    OPACITY: () => Bw,
    PARENT: () => lx,
    PLAIN_OBJECT: () => px,
    PRESERVE_3D: () => fx,
    RENDER_GENERAL: () => hx,
    RENDER_PLUGIN: () => yx,
    RENDER_STYLE: () => Ex,
    RENDER_TRANSFORM: () => vx,
    ROTATE_X: () => Uw,
    ROTATE_Y: () => Vw,
    ROTATE_Z: () => Hw,
    SCALE_3D: () => Gw,
    SCALE_X: () => Mw,
    SCALE_Y: () => Dw,
    SCALE_Z: () => Fw,
    SIBLINGS: () => cx,
    SKEW: () => Xw,
    SKEW_X: () => kw,
    SKEW_Y: () => Ww,
    TRANSFORM: () => Cw,
    TRANSLATE_3D: () => qw,
    TRANSLATE_X: () => Nw,
    TRANSLATE_Y: () => Lw,
    TRANSLATE_Z: () => Pw,
    WF_PAGE: () => yw,
    WIDTH: () => Kw,
    WILL_CHANGE: () => rx,
    W_MOD_IX: () => _w,
    W_MOD_JS: () => mw,
  });
  var Ew,
    yw,
    mw,
    _w,
    Tw,
    bw,
    Iw,
    Ow,
    Aw,
    ww,
    xw,
    Sw,
    Rw,
    Cw,
    Nw,
    Lw,
    Pw,
    qw,
    Mw,
    Dw,
    Fw,
    Gw,
    Uw,
    Vw,
    Hw,
    Xw,
    kw,
    Ww,
    Bw,
    jw,
    zw,
    Kw,
    Yw,
    $w,
    Qw,
    Zw,
    Jw,
    ex,
    tx,
    rx,
    nx,
    ix,
    ox,
    ax,
    sx,
    ux,
    cx,
    lx,
    fx,
    dx,
    px,
    gx,
    vx,
    hx,
    Ex,
    yx,
    bf = fe(() => {
      "use strict";
      (Ew = "|"),
        (yw = "data-wf-page"),
        (mw = "w-mod-js"),
        (_w = "w-mod-ix"),
        (Tw = ".w-dyn-item"),
        (bw = "xValue"),
        (Iw = "yValue"),
        (Ow = "zValue"),
        (Aw = "value"),
        (ww = "xUnit"),
        (xw = "yUnit"),
        (Sw = "zUnit"),
        (Rw = "unit"),
        (Cw = "transform"),
        (Nw = "translateX"),
        (Lw = "translateY"),
        (Pw = "translateZ"),
        (qw = "translate3d"),
        (Mw = "scaleX"),
        (Dw = "scaleY"),
        (Fw = "scaleZ"),
        (Gw = "scale3d"),
        (Uw = "rotateX"),
        (Vw = "rotateY"),
        (Hw = "rotateZ"),
        (Xw = "skew"),
        (kw = "skewX"),
        (Ww = "skewY"),
        (Bw = "opacity"),
        (jw = "filter"),
        (zw = "font-variation-settings"),
        (Kw = "width"),
        (Yw = "height"),
        ($w = "backgroundColor"),
        (Qw = "background"),
        (Zw = "borderColor"),
        (Jw = "color"),
        (ex = "display"),
        (tx = "flex"),
        (rx = "willChange"),
        (nx = "AUTO"),
        (ix = ","),
        (ox = ":"),
        (ax = "|"),
        (sx = "CHILDREN"),
        (ux = "IMMEDIATE_CHILDREN"),
        (cx = "SIBLINGS"),
        (lx = "PARENT"),
        (fx = "preserve-3d"),
        (dx = "HTML_ELEMENT"),
        (px = "PLAIN_OBJECT"),
        (gx = "ABSTRACT_NODE"),
        (vx = "RENDER_TRANSFORM"),
        (hx = "RENDER_GENERAL"),
        (Ex = "RENDER_STYLE"),
        (yx = "RENDER_PLUGIN");
    });
  var If = {};
  Ce(If, {
    ActionAppliesTo: () => XA,
    ActionTypeConsts: () => Ne,
    EventAppliesTo: () => ko,
    EventBasedOn: () => rt,
    EventContinuousMouseAxes: () => UA,
    EventLimitAffectedElements: () => VA,
    EventTypeConsts: () => Be,
    IX2EngineActionTypes: () => ye,
    IX2EngineConstants: () => Ie,
    InteractionTypeConsts: () => kA,
    QuickEffectDirectionConsts: () => HA,
    QuickEffectIds: () => bn,
    ReducedMotionTypes: () => Bo,
  });
  var Le = fe(() => {
    "use strict";
    Wo();
    In();
    mf();
    _f();
    Tf();
    bf();
    In();
    Wo();
  });
  var mx,
    Of,
    Af = fe(() => {
      "use strict";
      Le();
      ({ IX2_RAW_DATA_IMPORTED: mx } = ye),
        (Of = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case mx:
              return t.payload.ixData || Object.freeze({});
            default:
              return e;
          }
        });
    });
  var kt = c((ge) => {
    "use strict";
    Object.defineProperty(ge, "__esModule", { value: !0 });
    var _x =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (e) {
          return typeof e;
        }
        : function (e) {
          return e &&
            typeof Symbol == "function" &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? "symbol"
            : typeof e;
        };
    ge.clone = An;
    ge.addLast = Sf;
    ge.addFirst = Rf;
    ge.removeLast = Cf;
    ge.removeFirst = Nf;
    ge.insert = Lf;
    ge.removeAt = Pf;
    ge.replaceAt = qf;
    ge.getIn = wn;
    ge.set = xn;
    ge.setIn = Sn;
    ge.update = Df;
    ge.updateIn = Ff;
    ge.merge = Gf;
    ge.mergeDeep = Uf;
    ge.mergeIn = Vf;
    ge.omit = Hf;
    ge.addDefaults = Xf;
    var wf = "INVALID_ARGS";
    function xf(e) {
      throw new Error(e);
    }
    function jo(e) {
      var t = Object.keys(e);
      return Object.getOwnPropertySymbols
        ? t.concat(Object.getOwnPropertySymbols(e))
        : t;
    }
    var Tx = {}.hasOwnProperty;
    function An(e) {
      if (Array.isArray(e)) return e.slice();
      for (var t = jo(e), r = {}, n = 0; n < t.length; n++) {
        var i = t[n];
        r[i] = e[i];
      }
      return r;
    }
    function Pe(e, t, r) {
      var n = r;
      n == null && xf(wf);
      for (
        var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), s = 3;
        s < o;
        s++
      )
        a[s - 3] = arguments[s];
      for (var u = 0; u < a.length; u++) {
        var f = a[u];
        if (f != null) {
          var g = jo(f);
          if (g.length)
            for (var d = 0; d <= g.length; d++) {
              var h = g[d];
              if (!(e && n[h] !== void 0)) {
                var y = f[h];
                t && On(n[h]) && On(y) && (y = Pe(e, t, n[h], y)),
                  !(y === void 0 || y === n[h]) &&
                  (i || ((i = !0), (n = An(n))), (n[h] = y));
              }
            }
        }
      }
      return n;
    }
    function On(e) {
      var t = typeof e > "u" ? "undefined" : _x(e);
      return e != null && (t === "object" || t === "function");
    }
    function Sf(e, t) {
      return Array.isArray(t) ? e.concat(t) : e.concat([t]);
    }
    function Rf(e, t) {
      return Array.isArray(t) ? t.concat(e) : [t].concat(e);
    }
    function Cf(e) {
      return e.length ? e.slice(0, e.length - 1) : e;
    }
    function Nf(e) {
      return e.length ? e.slice(1) : e;
    }
    function Lf(e, t, r) {
      return e
        .slice(0, t)
        .concat(Array.isArray(r) ? r : [r])
        .concat(e.slice(t));
    }
    function Pf(e, t) {
      return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
    }
    function qf(e, t, r) {
      if (e[t] === r) return e;
      for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
      return (i[t] = r), i;
    }
    function wn(e, t) {
      if ((!Array.isArray(t) && xf(wf), e != null)) {
        for (var r = e, n = 0; n < t.length; n++) {
          var i = t[n];
          if (((r = r?.[i]), r === void 0)) return r;
        }
        return r;
      }
    }
    function xn(e, t, r) {
      var n = typeof t == "number" ? [] : {},
        i = e ?? n;
      if (i[t] === r) return i;
      var o = An(i);
      return (o[t] = r), o;
    }
    function Mf(e, t, r, n) {
      var i = void 0,
        o = t[n];
      if (n === t.length - 1) i = r;
      else {
        var a =
          On(e) && On(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
        i = Mf(a, t, r, n + 1);
      }
      return xn(e, o, i);
    }
    function Sn(e, t, r) {
      return t.length ? Mf(e, t, r, 0) : r;
    }
    function Df(e, t, r) {
      var n = e?.[t],
        i = r(n);
      return xn(e, t, i);
    }
    function Ff(e, t, r) {
      var n = wn(e, t),
        i = r(n);
      return Sn(e, t, i);
    }
    function Gf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Pe.call.apply(Pe, [null, !1, !1, e, t, r, n, i, o].concat(s))
        : Pe(!1, !1, e, t, r, n, i, o);
    }
    function Uf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Pe.call.apply(Pe, [null, !1, !0, e, t, r, n, i, o].concat(s))
        : Pe(!1, !0, e, t, r, n, i, o);
    }
    function Vf(e, t, r, n, i, o, a) {
      var s = wn(e, t);
      s == null && (s = {});
      for (
        var u = void 0,
        f = arguments.length,
        g = Array(f > 7 ? f - 7 : 0),
        d = 7;
        d < f;
        d++
      )
        g[d - 7] = arguments[d];
      return (
        g.length
          ? (u = Pe.call.apply(Pe, [null, !1, !1, s, r, n, i, o, a].concat(g)))
          : (u = Pe(!1, !1, s, r, n, i, o, a)),
        Sn(e, t, u)
      );
    }
    function Hf(e, t) {
      for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
        if (Tx.call(e, r[i])) {
          n = !0;
          break;
        }
      if (!n) return e;
      for (var o = {}, a = jo(e), s = 0; s < a.length; s++) {
        var u = a[s];
        r.indexOf(u) >= 0 || (o[u] = e[u]);
      }
      return o;
    }
    function Xf(e, t, r, n, i, o) {
      for (
        var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6;
        u < a;
        u++
      )
        s[u - 6] = arguments[u];
      return s.length
        ? Pe.call.apply(Pe, [null, !0, !1, e, t, r, n, i, o].concat(s))
        : Pe(!0, !1, e, t, r, n, i, o);
    }
    var bx = {
      clone: An,
      addLast: Sf,
      addFirst: Rf,
      removeLast: Cf,
      removeFirst: Nf,
      insert: Lf,
      removeAt: Pf,
      replaceAt: qf,
      getIn: wn,
      set: xn,
      setIn: Sn,
      update: Df,
      updateIn: Ff,
      merge: Gf,
      mergeDeep: Uf,
      mergeIn: Vf,
      omit: Hf,
      addDefaults: Xf,
    };
    ge.default = bx;
  });
  var Wf,
    Ix,
    Ox,
    Ax,
    wx,
    xx,
    kf,
    Bf,
    jf = fe(() => {
      "use strict";
      Le();
      (Wf = oe(kt())),
        ({
          IX2_PREVIEW_REQUESTED: Ix,
          IX2_PLAYBACK_REQUESTED: Ox,
          IX2_STOP_REQUESTED: Ax,
          IX2_CLEAR_REQUESTED: wx,
        } = ye),
        (xx = { preview: {}, playback: {}, stop: {}, clear: {} }),
        (kf = Object.create(null, {
          [Ix]: { value: "preview" },
          [Ox]: { value: "playback" },
          [Ax]: { value: "stop" },
          [wx]: { value: "clear" },
        })),
        (Bf = (e = xx, t) => {
          if (t.type in kf) {
            let r = [kf[t.type]];
            return (0, Wf.setIn)(e, [r], { ...t.payload });
          }
          return e;
        });
    });
  var we,
    Sx,
    Rx,
    Cx,
    Nx,
    Lx,
    Px,
    qx,
    Mx,
    Dx,
    Fx,
    zf,
    Gx,
    Kf,
    Yf = fe(() => {
      "use strict";
      Le();
      (we = oe(kt())),
        ({
          IX2_SESSION_INITIALIZED: Sx,
          IX2_SESSION_STARTED: Rx,
          IX2_TEST_FRAME_RENDERED: Cx,
          IX2_SESSION_STOPPED: Nx,
          IX2_EVENT_LISTENER_ADDED: Lx,
          IX2_EVENT_STATE_CHANGED: Px,
          IX2_ANIMATION_FRAME_CHANGED: qx,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: Mx,
          IX2_VIEWPORT_WIDTH_CHANGED: Dx,
          IX2_MEDIA_QUERIES_DEFINED: Fx,
        } = ye),
        (zf = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        }),
        (Gx = 20),
        (Kf = (e = zf, t) => {
          switch (t.type) {
            case Sx: {
              let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
              return (0, we.merge)(e, {
                hasBoundaryNodes: r,
                reducedMotion: n,
              });
            }
            case Rx:
              return (0, we.set)(e, "active", !0);
            case Cx: {
              let {
                payload: { step: r = Gx },
              } = t;
              return (0, we.set)(e, "tick", e.tick + r);
            }
            case Nx:
              return zf;
            case qx: {
              let {
                payload: { now: r },
              } = t;
              return (0, we.set)(e, "tick", r);
            }
            case Lx: {
              let r = (0, we.addLast)(e.eventListeners, t.payload);
              return (0, we.set)(e, "eventListeners", r);
            }
            case Px: {
              let { stateKey: r, newState: n } = t.payload;
              return (0, we.setIn)(e, ["eventState", r], n);
            }
            case Mx: {
              let { actionListId: r, isPlaying: n } = t.payload;
              return (0, we.setIn)(e, ["playbackState", r], n);
            }
            case Dx: {
              let { width: r, mediaQueries: n } = t.payload,
                i = n.length,
                o = null;
              for (let a = 0; a < i; a++) {
                let { key: s, min: u, max: f } = n[a];
                if (r >= u && r <= f) {
                  o = s;
                  break;
                }
              }
              return (0, we.merge)(e, { viewportWidth: r, mediaQueryKey: o });
            }
            case Fx:
              return (0, we.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        });
    });
  var Qf = c((zk, $f) => {
    function Ux() {
      (this.__data__ = []), (this.size = 0);
    }
    $f.exports = Ux;
  });
  var Rn = c((Kk, Zf) => {
    function Vx(e, t) {
      return e === t || (e !== e && t !== t);
    }
    Zf.exports = Vx;
  });
  var xr = c((Yk, Jf) => {
    var Hx = Rn();
    function Xx(e, t) {
      for (var r = e.length; r--;) if (Hx(e[r][0], t)) return r;
      return -1;
    }
    Jf.exports = Xx;
  });
  var td = c(($k, ed) => {
    var kx = xr(),
      Wx = Array.prototype,
      Bx = Wx.splice;
    function jx(e) {
      var t = this.__data__,
        r = kx(t, e);
      if (r < 0) return !1;
      var n = t.length - 1;
      return r == n ? t.pop() : Bx.call(t, r, 1), --this.size, !0;
    }
    ed.exports = jx;
  });
  var nd = c((Qk, rd) => {
    var zx = xr();
    function Kx(e) {
      var t = this.__data__,
        r = zx(t, e);
      return r < 0 ? void 0 : t[r][1];
    }
    rd.exports = Kx;
  });
  var od = c((Zk, id) => {
    var Yx = xr();
    function $x(e) {
      return Yx(this.__data__, e) > -1;
    }
    id.exports = $x;
  });
  var sd = c((Jk, ad) => {
    var Qx = xr();
    function Zx(e, t) {
      var r = this.__data__,
        n = Qx(r, e);
      return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
    }
    ad.exports = Zx;
  });
  var Sr = c((eW, ud) => {
    var Jx = Qf(),
      eS = td(),
      tS = nd(),
      rS = od(),
      nS = sd();
    function Wt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Wt.prototype.clear = Jx;
    Wt.prototype.delete = eS;
    Wt.prototype.get = tS;
    Wt.prototype.has = rS;
    Wt.prototype.set = nS;
    ud.exports = Wt;
  });
  var ld = c((tW, cd) => {
    var iS = Sr();
    function oS() {
      (this.__data__ = new iS()), (this.size = 0);
    }
    cd.exports = oS;
  });
  var dd = c((rW, fd) => {
    function aS(e) {
      var t = this.__data__,
        r = t.delete(e);
      return (this.size = t.size), r;
    }
    fd.exports = aS;
  });
  var gd = c((nW, pd) => {
    function sS(e) {
      return this.__data__.get(e);
    }
    pd.exports = sS;
  });
  var hd = c((iW, vd) => {
    function uS(e) {
      return this.__data__.has(e);
    }
    vd.exports = uS;
  });
  var nt = c((oW, Ed) => {
    function cS(e) {
      var t = typeof e;
      return e != null && (t == "object" || t == "function");
    }
    Ed.exports = cS;
  });
  var zo = c((aW, yd) => {
    var lS = Et(),
      fS = nt(),
      dS = "[object AsyncFunction]",
      pS = "[object Function]",
      gS = "[object GeneratorFunction]",
      vS = "[object Proxy]";
    function hS(e) {
      if (!fS(e)) return !1;
      var t = lS(e);
      return t == pS || t == gS || t == dS || t == vS;
    }
    yd.exports = hS;
  });
  var _d = c((sW, md) => {
    var ES = We(),
      yS = ES["__core-js_shared__"];
    md.exports = yS;
  });
  var Id = c((uW, bd) => {
    var Ko = _d(),
      Td = (function () {
        var e = /[^.]+$/.exec((Ko && Ko.keys && Ko.keys.IE_PROTO) || "");
        return e ? "Symbol(src)_1." + e : "";
      })();
    function mS(e) {
      return !!Td && Td in e;
    }
    bd.exports = mS;
  });
  var Yo = c((cW, Od) => {
    var _S = Function.prototype,
      TS = _S.toString;
    function bS(e) {
      if (e != null) {
        try {
          return TS.call(e);
        } catch { }
        try {
          return e + "";
        } catch { }
      }
      return "";
    }
    Od.exports = bS;
  });
  var wd = c((lW, Ad) => {
    var IS = zo(),
      OS = Id(),
      AS = nt(),
      wS = Yo(),
      xS = /[\\^$.*+?()[\]{}|]/g,
      SS = /^\[object .+?Constructor\]$/,
      RS = Function.prototype,
      CS = Object.prototype,
      NS = RS.toString,
      LS = CS.hasOwnProperty,
      PS = RegExp(
        "^" +
        NS.call(LS)
          .replace(xS, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
      );
    function qS(e) {
      if (!AS(e) || OS(e)) return !1;
      var t = IS(e) ? PS : SS;
      return t.test(wS(e));
    }
    Ad.exports = qS;
  });
  var Sd = c((fW, xd) => {
    function MS(e, t) {
      return e?.[t];
    }
    xd.exports = MS;
  });
  var yt = c((dW, Rd) => {
    var DS = wd(),
      FS = Sd();
    function GS(e, t) {
      var r = FS(e, t);
      return DS(r) ? r : void 0;
    }
    Rd.exports = GS;
  });
  var Cn = c((pW, Cd) => {
    var US = yt(),
      VS = We(),
      HS = US(VS, "Map");
    Cd.exports = HS;
  });
  var Rr = c((gW, Nd) => {
    var XS = yt(),
      kS = XS(Object, "create");
    Nd.exports = kS;
  });
  var qd = c((vW, Pd) => {
    var Ld = Rr();
    function WS() {
      (this.__data__ = Ld ? Ld(null) : {}), (this.size = 0);
    }
    Pd.exports = WS;
  });
  var Dd = c((hW, Md) => {
    function BS(e) {
      var t = this.has(e) && delete this.__data__[e];
      return (this.size -= t ? 1 : 0), t;
    }
    Md.exports = BS;
  });
  var Gd = c((EW, Fd) => {
    var jS = Rr(),
      zS = "__lodash_hash_undefined__",
      KS = Object.prototype,
      YS = KS.hasOwnProperty;
    function $S(e) {
      var t = this.__data__;
      if (jS) {
        var r = t[e];
        return r === zS ? void 0 : r;
      }
      return YS.call(t, e) ? t[e] : void 0;
    }
    Fd.exports = $S;
  });
  var Vd = c((yW, Ud) => {
    var QS = Rr(),
      ZS = Object.prototype,
      JS = ZS.hasOwnProperty;
    function e0(e) {
      var t = this.__data__;
      return QS ? t[e] !== void 0 : JS.call(t, e);
    }
    Ud.exports = e0;
  });
  var Xd = c((mW, Hd) => {
    var t0 = Rr(),
      r0 = "__lodash_hash_undefined__";
    function n0(e, t) {
      var r = this.__data__;
      return (
        (this.size += this.has(e) ? 0 : 1),
        (r[e] = t0 && t === void 0 ? r0 : t),
        this
      );
    }
    Hd.exports = n0;
  });
  var Wd = c((_W, kd) => {
    var i0 = qd(),
      o0 = Dd(),
      a0 = Gd(),
      s0 = Vd(),
      u0 = Xd();
    function Bt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    Bt.prototype.clear = i0;
    Bt.prototype.delete = o0;
    Bt.prototype.get = a0;
    Bt.prototype.has = s0;
    Bt.prototype.set = u0;
    kd.exports = Bt;
  });
  var zd = c((TW, jd) => {
    var Bd = Wd(),
      c0 = Sr(),
      l0 = Cn();
    function f0() {
      (this.size = 0),
        (this.__data__ = {
          hash: new Bd(),
          map: new (l0 || c0)(),
          string: new Bd(),
        });
    }
    jd.exports = f0;
  });
  var Yd = c((bW, Kd) => {
    function d0(e) {
      var t = typeof e;
      return t == "string" || t == "number" || t == "symbol" || t == "boolean"
        ? e !== "__proto__"
        : e === null;
    }
    Kd.exports = d0;
  });
  var Cr = c((IW, $d) => {
    var p0 = Yd();
    function g0(e, t) {
      var r = e.__data__;
      return p0(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
    }
    $d.exports = g0;
  });
  var Zd = c((OW, Qd) => {
    var v0 = Cr();
    function h0(e) {
      var t = v0(this, e).delete(e);
      return (this.size -= t ? 1 : 0), t;
    }
    Qd.exports = h0;
  });
  var ep = c((AW, Jd) => {
    var E0 = Cr();
    function y0(e) {
      return E0(this, e).get(e);
    }
    Jd.exports = y0;
  });
  var rp = c((wW, tp) => {
    var m0 = Cr();
    function _0(e) {
      return m0(this, e).has(e);
    }
    tp.exports = _0;
  });
  var ip = c((xW, np) => {
    var T0 = Cr();
    function b0(e, t) {
      var r = T0(this, e),
        n = r.size;
      return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
    }
    np.exports = b0;
  });
  var Nn = c((SW, op) => {
    var I0 = zd(),
      O0 = Zd(),
      A0 = ep(),
      w0 = rp(),
      x0 = ip();
    function jt(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.clear(); ++t < r;) {
        var n = e[t];
        this.set(n[0], n[1]);
      }
    }
    jt.prototype.clear = I0;
    jt.prototype.delete = O0;
    jt.prototype.get = A0;
    jt.prototype.has = w0;
    jt.prototype.set = x0;
    op.exports = jt;
  });
  var sp = c((RW, ap) => {
    var S0 = Sr(),
      R0 = Cn(),
      C0 = Nn(),
      N0 = 200;
    function L0(e, t) {
      var r = this.__data__;
      if (r instanceof S0) {
        var n = r.__data__;
        if (!R0 || n.length < N0 - 1)
          return n.push([e, t]), (this.size = ++r.size), this;
        r = this.__data__ = new C0(n);
      }
      return r.set(e, t), (this.size = r.size), this;
    }
    ap.exports = L0;
  });
  var $o = c((CW, up) => {
    var P0 = Sr(),
      q0 = ld(),
      M0 = dd(),
      D0 = gd(),
      F0 = hd(),
      G0 = sp();
    function zt(e) {
      var t = (this.__data__ = new P0(e));
      this.size = t.size;
    }
    zt.prototype.clear = q0;
    zt.prototype.delete = M0;
    zt.prototype.get = D0;
    zt.prototype.has = F0;
    zt.prototype.set = G0;
    up.exports = zt;
  });
  var lp = c((NW, cp) => {
    var U0 = "__lodash_hash_undefined__";
    function V0(e) {
      return this.__data__.set(e, U0), this;
    }
    cp.exports = V0;
  });
  var dp = c((LW, fp) => {
    function H0(e) {
      return this.__data__.has(e);
    }
    fp.exports = H0;
  });
  var gp = c((PW, pp) => {
    var X0 = Nn(),
      k0 = lp(),
      W0 = dp();
    function Ln(e) {
      var t = -1,
        r = e == null ? 0 : e.length;
      for (this.__data__ = new X0(); ++t < r;) this.add(e[t]);
    }
    Ln.prototype.add = Ln.prototype.push = k0;
    Ln.prototype.has = W0;
    pp.exports = Ln;
  });
  var hp = c((qW, vp) => {
    function B0(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length; ++r < n;)
        if (t(e[r], r, e)) return !0;
      return !1;
    }
    vp.exports = B0;
  });
  var yp = c((MW, Ep) => {
    function j0(e, t) {
      return e.has(t);
    }
    Ep.exports = j0;
  });
  var Qo = c((DW, mp) => {
    var z0 = gp(),
      K0 = hp(),
      Y0 = yp(),
      $0 = 1,
      Q0 = 2;
    function Z0(e, t, r, n, i, o) {
      var a = r & $0,
        s = e.length,
        u = t.length;
      if (s != u && !(a && u > s)) return !1;
      var f = o.get(e),
        g = o.get(t);
      if (f && g) return f == t && g == e;
      var d = -1,
        h = !0,
        y = r & Q0 ? new z0() : void 0;
      for (o.set(e, t), o.set(t, e); ++d < s;) {
        var E = e[d],
          _ = t[d];
        if (n) var q = a ? n(_, E, d, t, e, o) : n(E, _, d, e, t, o);
        if (q !== void 0) {
          if (q) continue;
          h = !1;
          break;
        }
        if (y) {
          if (
            !K0(t, function (I, S) {
              if (!Y0(y, S) && (E === I || i(E, I, r, n, o))) return y.push(S);
            })
          ) {
            h = !1;
            break;
          }
        } else if (!(E === _ || i(E, _, r, n, o))) {
          h = !1;
          break;
        }
      }
      return o.delete(e), o.delete(t), h;
    }
    mp.exports = Z0;
  });
  var Tp = c((FW, _p) => {
    var J0 = We(),
      eR = J0.Uint8Array;
    _p.exports = eR;
  });
  var Ip = c((GW, bp) => {
    function tR(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n, i) {
          r[++t] = [i, n];
        }),
        r
      );
    }
    bp.exports = tR;
  });
  var Ap = c((UW, Op) => {
    function rR(e) {
      var t = -1,
        r = Array(e.size);
      return (
        e.forEach(function (n) {
          r[++t] = n;
        }),
        r
      );
    }
    Op.exports = rR;
  });
  var Cp = c((VW, Rp) => {
    var wp = Vt(),
      xp = Tp(),
      nR = Rn(),
      iR = Qo(),
      oR = Ip(),
      aR = Ap(),
      sR = 1,
      uR = 2,
      cR = "[object Boolean]",
      lR = "[object Date]",
      fR = "[object Error]",
      dR = "[object Map]",
      pR = "[object Number]",
      gR = "[object RegExp]",
      vR = "[object Set]",
      hR = "[object String]",
      ER = "[object Symbol]",
      yR = "[object ArrayBuffer]",
      mR = "[object DataView]",
      Sp = wp ? wp.prototype : void 0,
      Zo = Sp ? Sp.valueOf : void 0;
    function _R(e, t, r, n, i, o, a) {
      switch (r) {
        case mR:
          if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
            return !1;
          (e = e.buffer), (t = t.buffer);
        case yR:
          return !(e.byteLength != t.byteLength || !o(new xp(e), new xp(t)));
        case cR:
        case lR:
        case pR:
          return nR(+e, +t);
        case fR:
          return e.name == t.name && e.message == t.message;
        case gR:
        case hR:
          return e == t + "";
        case dR:
          var s = oR;
        case vR:
          var u = n & sR;
          if ((s || (s = aR), e.size != t.size && !u)) return !1;
          var f = a.get(e);
          if (f) return f == t;
          (n |= uR), a.set(e, t);
          var g = iR(s(e), s(t), n, i, o, a);
          return a.delete(e), g;
        case ER:
          if (Zo) return Zo.call(e) == Zo.call(t);
      }
      return !1;
    }
    Rp.exports = _R;
  });
  var Pn = c((HW, Np) => {
    function TR(e, t) {
      for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
      return e;
    }
    Np.exports = TR;
  });
  var _e = c((XW, Lp) => {
    var bR = Array.isArray;
    Lp.exports = bR;
  });
  var Jo = c((kW, Pp) => {
    var IR = Pn(),
      OR = _e();
    function AR(e, t, r) {
      var n = t(e);
      return OR(e) ? n : IR(n, r(e));
    }
    Pp.exports = AR;
  });
  var Mp = c((WW, qp) => {
    function wR(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n;) {
        var a = e[r];
        t(a, r, e) && (o[i++] = a);
      }
      return o;
    }
    qp.exports = wR;
  });
  var ea = c((BW, Dp) => {
    function xR() {
      return [];
    }
    Dp.exports = xR;
  });
  var ta = c((jW, Gp) => {
    var SR = Mp(),
      RR = ea(),
      CR = Object.prototype,
      NR = CR.propertyIsEnumerable,
      Fp = Object.getOwnPropertySymbols,
      LR = Fp
        ? function (e) {
          return e == null
            ? []
            : ((e = Object(e)),
              SR(Fp(e), function (t) {
                return NR.call(e, t);
              }));
        }
        : RR;
    Gp.exports = LR;
  });
  var Vp = c((zW, Up) => {
    function PR(e, t) {
      for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
      return n;
    }
    Up.exports = PR;
  });
  var Xp = c((KW, Hp) => {
    var qR = Et(),
      MR = ut(),
      DR = "[object Arguments]";
    function FR(e) {
      return MR(e) && qR(e) == DR;
    }
    Hp.exports = FR;
  });
  var Nr = c((YW, Bp) => {
    var kp = Xp(),
      GR = ut(),
      Wp = Object.prototype,
      UR = Wp.hasOwnProperty,
      VR = Wp.propertyIsEnumerable,
      HR = kp(
        (function () {
          return arguments;
        })()
      )
        ? kp
        : function (e) {
          return GR(e) && UR.call(e, "callee") && !VR.call(e, "callee");
        };
    Bp.exports = HR;
  });
  var zp = c(($W, jp) => {
    function XR() {
      return !1;
    }
    jp.exports = XR;
  });
  var qn = c((Lr, Kt) => {
    var kR = We(),
      WR = zp(),
      $p = typeof Lr == "object" && Lr && !Lr.nodeType && Lr,
      Kp = $p && typeof Kt == "object" && Kt && !Kt.nodeType && Kt,
      BR = Kp && Kp.exports === $p,
      Yp = BR ? kR.Buffer : void 0,
      jR = Yp ? Yp.isBuffer : void 0,
      zR = jR || WR;
    Kt.exports = zR;
  });
  var Mn = c((QW, Qp) => {
    var KR = 9007199254740991,
      YR = /^(?:0|[1-9]\d*)$/;
    function $R(e, t) {
      var r = typeof e;
      return (
        (t = t ?? KR),
        !!t &&
        (r == "number" || (r != "symbol" && YR.test(e))) &&
        e > -1 &&
        e % 1 == 0 &&
        e < t
      );
    }
    Qp.exports = $R;
  });
  var Dn = c((ZW, Zp) => {
    var QR = 9007199254740991;
    function ZR(e) {
      return typeof e == "number" && e > -1 && e % 1 == 0 && e <= QR;
    }
    Zp.exports = ZR;
  });
  var eg = c((JW, Jp) => {
    var JR = Et(),
      eC = Dn(),
      tC = ut(),
      rC = "[object Arguments]",
      nC = "[object Array]",
      iC = "[object Boolean]",
      oC = "[object Date]",
      aC = "[object Error]",
      sC = "[object Function]",
      uC = "[object Map]",
      cC = "[object Number]",
      lC = "[object Object]",
      fC = "[object RegExp]",
      dC = "[object Set]",
      pC = "[object String]",
      gC = "[object WeakMap]",
      vC = "[object ArrayBuffer]",
      hC = "[object DataView]",
      EC = "[object Float32Array]",
      yC = "[object Float64Array]",
      mC = "[object Int8Array]",
      _C = "[object Int16Array]",
      TC = "[object Int32Array]",
      bC = "[object Uint8Array]",
      IC = "[object Uint8ClampedArray]",
      OC = "[object Uint16Array]",
      AC = "[object Uint32Array]",
      le = {};
    le[EC] =
      le[yC] =
      le[mC] =
      le[_C] =
      le[TC] =
      le[bC] =
      le[IC] =
      le[OC] =
      le[AC] =
      !0;
    le[rC] =
      le[nC] =
      le[vC] =
      le[iC] =
      le[hC] =
      le[oC] =
      le[aC] =
      le[sC] =
      le[uC] =
      le[cC] =
      le[lC] =
      le[fC] =
      le[dC] =
      le[pC] =
      le[gC] =
      !1;
    function wC(e) {
      return tC(e) && eC(e.length) && !!le[JR(e)];
    }
    Jp.exports = wC;
  });
  var rg = c((e5, tg) => {
    function xC(e) {
      return function (t) {
        return e(t);
      };
    }
    tg.exports = xC;
  });
  var ig = c((Pr, Yt) => {
    var SC = xo(),
      ng = typeof Pr == "object" && Pr && !Pr.nodeType && Pr,
      qr = ng && typeof Yt == "object" && Yt && !Yt.nodeType && Yt,
      RC = qr && qr.exports === ng,
      ra = RC && SC.process,
      CC = (function () {
        try {
          var e = qr && qr.require && qr.require("util").types;
          return e || (ra && ra.binding && ra.binding("util"));
        } catch { }
      })();
    Yt.exports = CC;
  });
  var Fn = c((t5, sg) => {
    var NC = eg(),
      LC = rg(),
      og = ig(),
      ag = og && og.isTypedArray,
      PC = ag ? LC(ag) : NC;
    sg.exports = PC;
  });
  var na = c((r5, ug) => {
    var qC = Vp(),
      MC = Nr(),
      DC = _e(),
      FC = qn(),
      GC = Mn(),
      UC = Fn(),
      VC = Object.prototype,
      HC = VC.hasOwnProperty;
    function XC(e, t) {
      var r = DC(e),
        n = !r && MC(e),
        i = !r && !n && FC(e),
        o = !r && !n && !i && UC(e),
        a = r || n || i || o,
        s = a ? qC(e.length, String) : [],
        u = s.length;
      for (var f in e)
        (t || HC.call(e, f)) &&
          !(
            a &&
            (f == "length" ||
              (i && (f == "offset" || f == "parent")) ||
              (o &&
                (f == "buffer" || f == "byteLength" || f == "byteOffset")) ||
              GC(f, u))
          ) &&
          s.push(f);
      return s;
    }
    ug.exports = XC;
  });
  var Gn = c((n5, cg) => {
    var kC = Object.prototype;
    function WC(e) {
      var t = e && e.constructor,
        r = (typeof t == "function" && t.prototype) || kC;
      return e === r;
    }
    cg.exports = WC;
  });
  var fg = c((i5, lg) => {
    var BC = So(),
      jC = BC(Object.keys, Object);
    lg.exports = jC;
  });
  var Un = c((o5, dg) => {
    var zC = Gn(),
      KC = fg(),
      YC = Object.prototype,
      $C = YC.hasOwnProperty;
    function QC(e) {
      if (!zC(e)) return KC(e);
      var t = [];
      for (var r in Object(e)) $C.call(e, r) && r != "constructor" && t.push(r);
      return t;
    }
    dg.exports = QC;
  });
  var xt = c((a5, pg) => {
    var ZC = zo(),
      JC = Dn();
    function eN(e) {
      return e != null && JC(e.length) && !ZC(e);
    }
    pg.exports = eN;
  });
  var Mr = c((s5, gg) => {
    var tN = na(),
      rN = Un(),
      nN = xt();
    function iN(e) {
      return nN(e) ? tN(e) : rN(e);
    }
    gg.exports = iN;
  });
  var hg = c((u5, vg) => {
    var oN = Jo(),
      aN = ta(),
      sN = Mr();
    function uN(e) {
      return oN(e, sN, aN);
    }
    vg.exports = uN;
  });
  var mg = c((c5, yg) => {
    var Eg = hg(),
      cN = 1,
      lN = Object.prototype,
      fN = lN.hasOwnProperty;
    function dN(e, t, r, n, i, o) {
      var a = r & cN,
        s = Eg(e),
        u = s.length,
        f = Eg(t),
        g = f.length;
      if (u != g && !a) return !1;
      for (var d = u; d--;) {
        var h = s[d];
        if (!(a ? h in t : fN.call(t, h))) return !1;
      }
      var y = o.get(e),
        E = o.get(t);
      if (y && E) return y == t && E == e;
      var _ = !0;
      o.set(e, t), o.set(t, e);
      for (var q = a; ++d < u;) {
        h = s[d];
        var I = e[h],
          S = t[h];
        if (n) var A = a ? n(S, I, h, t, e, o) : n(I, S, h, e, t, o);
        if (!(A === void 0 ? I === S || i(I, S, r, n, o) : A)) {
          _ = !1;
          break;
        }
        q || (q = h == "constructor");
      }
      if (_ && !q) {
        var N = e.constructor,
          P = t.constructor;
        N != P &&
          "constructor" in e &&
          "constructor" in t &&
          !(
            typeof N == "function" &&
            N instanceof N &&
            typeof P == "function" &&
            P instanceof P
          ) &&
          (_ = !1);
      }
      return o.delete(e), o.delete(t), _;
    }
    yg.exports = dN;
  });
  var Tg = c((l5, _g) => {
    var pN = yt(),
      gN = We(),
      vN = pN(gN, "DataView");
    _g.exports = vN;
  });
  var Ig = c((f5, bg) => {
    var hN = yt(),
      EN = We(),
      yN = hN(EN, "Promise");
    bg.exports = yN;
  });
  var Ag = c((d5, Og) => {
    var mN = yt(),
      _N = We(),
      TN = mN(_N, "Set");
    Og.exports = TN;
  });
  var ia = c((p5, wg) => {
    var bN = yt(),
      IN = We(),
      ON = bN(IN, "WeakMap");
    wg.exports = ON;
  });
  var Vn = c((g5, Pg) => {
    var oa = Tg(),
      aa = Cn(),
      sa = Ig(),
      ua = Ag(),
      ca = ia(),
      Lg = Et(),
      $t = Yo(),
      xg = "[object Map]",
      AN = "[object Object]",
      Sg = "[object Promise]",
      Rg = "[object Set]",
      Cg = "[object WeakMap]",
      Ng = "[object DataView]",
      wN = $t(oa),
      xN = $t(aa),
      SN = $t(sa),
      RN = $t(ua),
      CN = $t(ca),
      St = Lg;
    ((oa && St(new oa(new ArrayBuffer(1))) != Ng) ||
      (aa && St(new aa()) != xg) ||
      (sa && St(sa.resolve()) != Sg) ||
      (ua && St(new ua()) != Rg) ||
      (ca && St(new ca()) != Cg)) &&
      (St = function (e) {
        var t = Lg(e),
          r = t == AN ? e.constructor : void 0,
          n = r ? $t(r) : "";
        if (n)
          switch (n) {
            case wN:
              return Ng;
            case xN:
              return xg;
            case SN:
              return Sg;
            case RN:
              return Rg;
            case CN:
              return Cg;
          }
        return t;
      });
    Pg.exports = St;
  });
  var Hg = c((v5, Vg) => {
    var la = $o(),
      NN = Qo(),
      LN = Cp(),
      PN = mg(),
      qg = Vn(),
      Mg = _e(),
      Dg = qn(),
      qN = Fn(),
      MN = 1,
      Fg = "[object Arguments]",
      Gg = "[object Array]",
      Hn = "[object Object]",
      DN = Object.prototype,
      Ug = DN.hasOwnProperty;
    function FN(e, t, r, n, i, o) {
      var a = Mg(e),
        s = Mg(t),
        u = a ? Gg : qg(e),
        f = s ? Gg : qg(t);
      (u = u == Fg ? Hn : u), (f = f == Fg ? Hn : f);
      var g = u == Hn,
        d = f == Hn,
        h = u == f;
      if (h && Dg(e)) {
        if (!Dg(t)) return !1;
        (a = !0), (g = !1);
      }
      if (h && !g)
        return (
          o || (o = new la()),
          a || qN(e) ? NN(e, t, r, n, i, o) : LN(e, t, u, r, n, i, o)
        );
      if (!(r & MN)) {
        var y = g && Ug.call(e, "__wrapped__"),
          E = d && Ug.call(t, "__wrapped__");
        if (y || E) {
          var _ = y ? e.value() : e,
            q = E ? t.value() : t;
          return o || (o = new la()), i(_, q, r, n, o);
        }
      }
      return h ? (o || (o = new la()), PN(e, t, r, n, i, o)) : !1;
    }
    Vg.exports = FN;
  });
  var fa = c((h5, Wg) => {
    var GN = Hg(),
      Xg = ut();
    function kg(e, t, r, n, i) {
      return e === t
        ? !0
        : e == null || t == null || (!Xg(e) && !Xg(t))
          ? e !== e && t !== t
          : GN(e, t, r, n, kg, i);
    }
    Wg.exports = kg;
  });
  var jg = c((E5, Bg) => {
    var UN = $o(),
      VN = fa(),
      HN = 1,
      XN = 2;
    function kN(e, t, r, n) {
      var i = r.length,
        o = i,
        a = !n;
      if (e == null) return !o;
      for (e = Object(e); i--;) {
        var s = r[i];
        if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
      }
      for (; ++i < o;) {
        s = r[i];
        var u = s[0],
          f = e[u],
          g = s[1];
        if (a && s[2]) {
          if (f === void 0 && !(u in e)) return !1;
        } else {
          var d = new UN();
          if (n) var h = n(f, g, u, e, t, d);
          if (!(h === void 0 ? VN(g, f, HN | XN, n, d) : h)) return !1;
        }
      }
      return !0;
    }
    Bg.exports = kN;
  });
  var da = c((y5, zg) => {
    var WN = nt();
    function BN(e) {
      return e === e && !WN(e);
    }
    zg.exports = BN;
  });
  var Yg = c((m5, Kg) => {
    var jN = da(),
      zN = Mr();
    function KN(e) {
      for (var t = zN(e), r = t.length; r--;) {
        var n = t[r],
          i = e[n];
        t[r] = [n, i, jN(i)];
      }
      return t;
    }
    Kg.exports = KN;
  });
  var pa = c((_5, $g) => {
    function YN(e, t) {
      return function (r) {
        return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
      };
    }
    $g.exports = YN;
  });
  var Zg = c((T5, Qg) => {
    var $N = jg(),
      QN = Yg(),
      ZN = pa();
    function JN(e) {
      var t = QN(e);
      return t.length == 1 && t[0][2]
        ? ZN(t[0][0], t[0][1])
        : function (r) {
          return r === e || $N(r, e, t);
        };
    }
    Qg.exports = JN;
  });
  var Dr = c((b5, Jg) => {
    var eL = Et(),
      tL = ut(),
      rL = "[object Symbol]";
    function nL(e) {
      return typeof e == "symbol" || (tL(e) && eL(e) == rL);
    }
    Jg.exports = nL;
  });
  var Xn = c((I5, ev) => {
    var iL = _e(),
      oL = Dr(),
      aL = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      sL = /^\w*$/;
    function uL(e, t) {
      if (iL(e)) return !1;
      var r = typeof e;
      return r == "number" ||
        r == "symbol" ||
        r == "boolean" ||
        e == null ||
        oL(e)
        ? !0
        : sL.test(e) || !aL.test(e) || (t != null && e in Object(t));
    }
    ev.exports = uL;
  });
  var nv = c((O5, rv) => {
    var tv = Nn(),
      cL = "Expected a function";
    function ga(e, t) {
      if (typeof e != "function" || (t != null && typeof t != "function"))
        throw new TypeError(cL);
      var r = function () {
        var n = arguments,
          i = t ? t.apply(this, n) : n[0],
          o = r.cache;
        if (o.has(i)) return o.get(i);
        var a = e.apply(this, n);
        return (r.cache = o.set(i, a) || o), a;
      };
      return (r.cache = new (ga.Cache || tv)()), r;
    }
    ga.Cache = tv;
    rv.exports = ga;
  });
  var ov = c((A5, iv) => {
    var lL = nv(),
      fL = 500;
    function dL(e) {
      var t = lL(e, function (n) {
        return r.size === fL && r.clear(), n;
      }),
        r = t.cache;
      return t;
    }
    iv.exports = dL;
  });
  var sv = c((w5, av) => {
    var pL = ov(),
      gL =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      vL = /\\(\\)?/g,
      hL = pL(function (e) {
        var t = [];
        return (
          e.charCodeAt(0) === 46 && t.push(""),
          e.replace(gL, function (r, n, i, o) {
            t.push(i ? o.replace(vL, "$1") : n || r);
          }),
          t
        );
      });
    av.exports = hL;
  });
  var va = c((x5, uv) => {
    function EL(e, t) {
      for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n;)
        i[r] = t(e[r], r, e);
      return i;
    }
    uv.exports = EL;
  });
  var gv = c((S5, pv) => {
    var cv = Vt(),
      yL = va(),
      mL = _e(),
      _L = Dr(),
      TL = 1 / 0,
      lv = cv ? cv.prototype : void 0,
      fv = lv ? lv.toString : void 0;
    function dv(e) {
      if (typeof e == "string") return e;
      if (mL(e)) return yL(e, dv) + "";
      if (_L(e)) return fv ? fv.call(e) : "";
      var t = e + "";
      return t == "0" && 1 / e == -TL ? "-0" : t;
    }
    pv.exports = dv;
  });
  var hv = c((R5, vv) => {
    var bL = gv();
    function IL(e) {
      return e == null ? "" : bL(e);
    }
    vv.exports = IL;
  });
  var Fr = c((C5, Ev) => {
    var OL = _e(),
      AL = Xn(),
      wL = sv(),
      xL = hv();
    function SL(e, t) {
      return OL(e) ? e : AL(e, t) ? [e] : wL(xL(e));
    }
    Ev.exports = SL;
  });
  var Qt = c((N5, yv) => {
    var RL = Dr(),
      CL = 1 / 0;
    function NL(e) {
      if (typeof e == "string" || RL(e)) return e;
      var t = e + "";
      return t == "0" && 1 / e == -CL ? "-0" : t;
    }
    yv.exports = NL;
  });
  var kn = c((L5, mv) => {
    var LL = Fr(),
      PL = Qt();
    function qL(e, t) {
      t = LL(t, e);
      for (var r = 0, n = t.length; e != null && r < n;) e = e[PL(t[r++])];
      return r && r == n ? e : void 0;
    }
    mv.exports = qL;
  });
  var Wn = c((P5, _v) => {
    var ML = kn();
    function DL(e, t, r) {
      var n = e == null ? void 0 : ML(e, t);
      return n === void 0 ? r : n;
    }
    _v.exports = DL;
  });
  var bv = c((q5, Tv) => {
    function FL(e, t) {
      return e != null && t in Object(e);
    }
    Tv.exports = FL;
  });
  var Ov = c((M5, Iv) => {
    var GL = Fr(),
      UL = Nr(),
      VL = _e(),
      HL = Mn(),
      XL = Dn(),
      kL = Qt();
    function WL(e, t, r) {
      t = GL(t, e);
      for (var n = -1, i = t.length, o = !1; ++n < i;) {
        var a = kL(t[n]);
        if (!(o = e != null && r(e, a))) break;
        e = e[a];
      }
      return o || ++n != i
        ? o
        : ((i = e == null ? 0 : e.length),
          !!i && XL(i) && HL(a, i) && (VL(e) || UL(e)));
    }
    Iv.exports = WL;
  });
  var wv = c((D5, Av) => {
    var BL = bv(),
      jL = Ov();
    function zL(e, t) {
      return e != null && jL(e, t, BL);
    }
    Av.exports = zL;
  });
  var Sv = c((F5, xv) => {
    var KL = fa(),
      YL = Wn(),
      $L = wv(),
      QL = Xn(),
      ZL = da(),
      JL = pa(),
      eP = Qt(),
      tP = 1,
      rP = 2;
    function nP(e, t) {
      return QL(e) && ZL(t)
        ? JL(eP(e), t)
        : function (r) {
          var n = YL(r, e);
          return n === void 0 && n === t ? $L(r, e) : KL(t, n, tP | rP);
        };
    }
    xv.exports = nP;
  });
  var Bn = c((G5, Rv) => {
    function iP(e) {
      return e;
    }
    Rv.exports = iP;
  });
  var ha = c((U5, Cv) => {
    function oP(e) {
      return function (t) {
        return t?.[e];
      };
    }
    Cv.exports = oP;
  });
  var Lv = c((V5, Nv) => {
    var aP = kn();
    function sP(e) {
      return function (t) {
        return aP(t, e);
      };
    }
    Nv.exports = sP;
  });
  var qv = c((H5, Pv) => {
    var uP = ha(),
      cP = Lv(),
      lP = Xn(),
      fP = Qt();
    function dP(e) {
      return lP(e) ? uP(fP(e)) : cP(e);
    }
    Pv.exports = dP;
  });
  var mt = c((X5, Mv) => {
    var pP = Zg(),
      gP = Sv(),
      vP = Bn(),
      hP = _e(),
      EP = qv();
    function yP(e) {
      return typeof e == "function"
        ? e
        : e == null
          ? vP
          : typeof e == "object"
            ? hP(e)
              ? gP(e[0], e[1])
              : pP(e)
            : EP(e);
    }
    Mv.exports = yP;
  });
  var Ea = c((k5, Dv) => {
    var mP = mt(),
      _P = xt(),
      TP = Mr();
    function bP(e) {
      return function (t, r, n) {
        var i = Object(t);
        if (!_P(t)) {
          var o = mP(r, 3);
          (t = TP(t)),
            (r = function (s) {
              return o(i[s], s, i);
            });
        }
        var a = e(t, r, n);
        return a > -1 ? i[o ? t[a] : a] : void 0;
      };
    }
    Dv.exports = bP;
  });
  var ya = c((W5, Fv) => {
    function IP(e, t, r, n) {
      for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i;)
        if (t(e[o], o, e)) return o;
      return -1;
    }
    Fv.exports = IP;
  });
  var Uv = c((B5, Gv) => {
    var OP = /\s/;
    function AP(e) {
      for (var t = e.length; t-- && OP.test(e.charAt(t)););
      return t;
    }
    Gv.exports = AP;
  });
  var Hv = c((j5, Vv) => {
    var wP = Uv(),
      xP = /^\s+/;
    function SP(e) {
      return e && e.slice(0, wP(e) + 1).replace(xP, "");
    }
    Vv.exports = SP;
  });
  var jn = c((z5, Wv) => {
    var RP = Hv(),
      Xv = nt(),
      CP = Dr(),
      kv = 0 / 0,
      NP = /^[-+]0x[0-9a-f]+$/i,
      LP = /^0b[01]+$/i,
      PP = /^0o[0-7]+$/i,
      qP = parseInt;
    function MP(e) {
      if (typeof e == "number") return e;
      if (CP(e)) return kv;
      if (Xv(e)) {
        var t = typeof e.valueOf == "function" ? e.valueOf() : e;
        e = Xv(t) ? t + "" : t;
      }
      if (typeof e != "string") return e === 0 ? e : +e;
      e = RP(e);
      var r = LP.test(e);
      return r || PP.test(e) ? qP(e.slice(2), r ? 2 : 8) : NP.test(e) ? kv : +e;
    }
    Wv.exports = MP;
  });
  var zv = c((K5, jv) => {
    var DP = jn(),
      Bv = 1 / 0,
      FP = 17976931348623157e292;
    function GP(e) {
      if (!e) return e === 0 ? e : 0;
      if (((e = DP(e)), e === Bv || e === -Bv)) {
        var t = e < 0 ? -1 : 1;
        return t * FP;
      }
      return e === e ? e : 0;
    }
    jv.exports = GP;
  });
  var ma = c((Y5, Kv) => {
    var UP = zv();
    function VP(e) {
      var t = UP(e),
        r = t % 1;
      return t === t ? (r ? t - r : t) : 0;
    }
    Kv.exports = VP;
  });
  var $v = c(($5, Yv) => {
    var HP = ya(),
      XP = mt(),
      kP = ma(),
      WP = Math.max;
    function BP(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = r == null ? 0 : kP(r);
      return i < 0 && (i = WP(n + i, 0)), HP(e, XP(t, 3), i);
    }
    Yv.exports = BP;
  });
  var _a = c((Q5, Qv) => {
    var jP = Ea(),
      zP = $v(),
      KP = jP(zP);
    Qv.exports = KP;
  });
  var eh = {};
  Ce(eh, {
    ELEMENT_MATCHES: () => YP,
    FLEX_PREFIXED: () => Ta,
    IS_BROWSER_ENV: () => je,
    TRANSFORM_PREFIXED: () => _t,
    TRANSFORM_STYLE_PREFIXED: () => Kn,
    withBrowser: () => zn,
  });
  var Jv,
    je,
    zn,
    YP,
    Ta,
    _t,
    Zv,
    Kn,
    Yn = fe(() => {
      "use strict";
      (Jv = oe(_a())),
        (je = typeof window < "u"),
        (zn = (e, t) => (je ? e() : t)),
        (YP = zn(() =>
          (0, Jv.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        )),
        (Ta = zn(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ],
            r = "";
          try {
            let { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i];
              if (((e.style.display = o), e.style.display === o)) return o;
            }
            return r;
          } catch {
            return r;
          }
        }, "flex")),
        (_t = zn(() => {
          let e = document.createElement("i");
          if (e.style.transform == null) {
            let t = ["Webkit", "Moz", "ms"],
              r = "Transform",
              { length: n } = t;
            for (let i = 0; i < n; i++) {
              let o = t[i] + r;
              if (e.style[o] !== void 0) return o;
            }
          }
          return "transform";
        }, "transform")),
        (Zv = _t.split("transform")[0]),
        (Kn = Zv ? Zv + "TransformStyle" : "transformStyle");
    });
  var ba = c((Z5, oh) => {
    var $P = 4,
      QP = 0.001,
      ZP = 1e-7,
      JP = 10,
      Gr = 11,
      $n = 1 / (Gr - 1),
      eq = typeof Float32Array == "function";
    function th(e, t) {
      return 1 - 3 * t + 3 * e;
    }
    function rh(e, t) {
      return 3 * t - 6 * e;
    }
    function nh(e) {
      return 3 * e;
    }
    function Qn(e, t, r) {
      return ((th(t, r) * e + rh(t, r)) * e + nh(t)) * e;
    }
    function ih(e, t, r) {
      return 3 * th(t, r) * e * e + 2 * rh(t, r) * e + nh(t);
    }
    function tq(e, t, r, n, i) {
      var o,
        a,
        s = 0;
      do
        (a = t + (r - t) / 2), (o = Qn(a, n, i) - e), o > 0 ? (r = a) : (t = a);
      while (Math.abs(o) > ZP && ++s < JP);
      return a;
    }
    function rq(e, t, r, n) {
      for (var i = 0; i < $P; ++i) {
        var o = ih(t, r, n);
        if (o === 0) return t;
        var a = Qn(t, r, n) - e;
        t -= a / o;
      }
      return t;
    }
    oh.exports = function (t, r, n, i) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
        throw new Error("bezier x values must be in [0, 1] range");
      var o = eq ? new Float32Array(Gr) : new Array(Gr);
      if (t !== r || n !== i)
        for (var a = 0; a < Gr; ++a) o[a] = Qn(a * $n, t, n);
      function s(u) {
        for (var f = 0, g = 1, d = Gr - 1; g !== d && o[g] <= u; ++g) f += $n;
        --g;
        var h = (u - o[g]) / (o[g + 1] - o[g]),
          y = f + h * $n,
          E = ih(y, t, n);
        return E >= QP ? rq(u, y, t, n) : E === 0 ? y : tq(u, f, f + $n, t, n);
      }
      return function (f) {
        return t === r && n === i
          ? f
          : f === 0
            ? 0
            : f === 1
              ? 1
              : Qn(s(f), r, i);
      };
    };
  });
  var Vr = {};
  Ce(Vr, {
    bounce: () => Gq,
    bouncePast: () => Uq,
    ease: () => nq,
    easeIn: () => iq,
    easeInOut: () => aq,
    easeOut: () => oq,
    inBack: () => Rq,
    inCirc: () => Aq,
    inCubic: () => lq,
    inElastic: () => Lq,
    inExpo: () => bq,
    inOutBack: () => Nq,
    inOutCirc: () => xq,
    inOutCubic: () => dq,
    inOutElastic: () => qq,
    inOutExpo: () => Oq,
    inOutQuad: () => cq,
    inOutQuart: () => vq,
    inOutQuint: () => yq,
    inOutSine: () => Tq,
    inQuad: () => sq,
    inQuart: () => pq,
    inQuint: () => hq,
    inSine: () => mq,
    outBack: () => Cq,
    outBounce: () => Sq,
    outCirc: () => wq,
    outCubic: () => fq,
    outElastic: () => Pq,
    outExpo: () => Iq,
    outQuad: () => uq,
    outQuart: () => gq,
    outQuint: () => Eq,
    outSine: () => _q,
    swingFrom: () => Dq,
    swingFromTo: () => Mq,
    swingTo: () => Fq,
  });
  function sq(e) {
    return Math.pow(e, 2);
  }
  function uq(e) {
    return -(Math.pow(e - 1, 2) - 1);
  }
  function cq(e) {
    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
  }
  function lq(e) {
    return Math.pow(e, 3);
  }
  function fq(e) {
    return Math.pow(e - 1, 3) + 1;
  }
  function dq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 3)
      : 0.5 * (Math.pow(e - 2, 3) + 2);
  }
  function pq(e) {
    return Math.pow(e, 4);
  }
  function gq(e) {
    return -(Math.pow(e - 1, 4) - 1);
  }
  function vq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 4)
      : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
  }
  function hq(e) {
    return Math.pow(e, 5);
  }
  function Eq(e) {
    return Math.pow(e - 1, 5) + 1;
  }
  function yq(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 5)
      : 0.5 * (Math.pow(e - 2, 5) + 2);
  }
  function mq(e) {
    return -Math.cos(e * (Math.PI / 2)) + 1;
  }
  function _q(e) {
    return Math.sin(e * (Math.PI / 2));
  }
  function Tq(e) {
    return -0.5 * (Math.cos(Math.PI * e) - 1);
  }
  function bq(e) {
    return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
  }
  function Iq(e) {
    return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
  }
  function Oq(e) {
    return e === 0
      ? 0
      : e === 1
        ? 1
        : (e /= 0.5) < 1
          ? 0.5 * Math.pow(2, 10 * (e - 1))
          : 0.5 * (-Math.pow(2, -10 * --e) + 2);
  }
  function Aq(e) {
    return -(Math.sqrt(1 - e * e) - 1);
  }
  function wq(e) {
    return Math.sqrt(1 - Math.pow(e - 1, 2));
  }
  function xq(e) {
    return (e /= 0.5) < 1
      ? -0.5 * (Math.sqrt(1 - e * e) - 1)
      : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
  }
  function Sq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function Rq(e) {
    let t = ct;
    return e * e * ((t + 1) * e - t);
  }
  function Cq(e) {
    let t = ct;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function Nq(e) {
    let t = ct;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function Lq(e) {
    let t = ct,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
        ? 1
        : (r || (r = 0.3),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          -(
            n *
            Math.pow(2, 10 * (e -= 1)) *
            Math.sin(((e - t) * (2 * Math.PI)) / r)
          ));
  }
  function Pq(e) {
    let t = ct,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : e === 1
        ? 1
        : (r || (r = 0.3),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) + 1);
  }
  function qq(e) {
    let t = ct,
      r = 0,
      n = 1;
    return e === 0
      ? 0
      : (e /= 1 / 2) === 2
        ? 1
        : (r || (r = 0.3 * 1.5),
          n < 1
            ? ((n = 1), (t = r / 4))
            : (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
          e < 1
            ? -0.5 *
            (n *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin(((e - t) * (2 * Math.PI)) / r))
            : n *
            Math.pow(2, -10 * (e -= 1)) *
            Math.sin(((e - t) * (2 * Math.PI)) / r) *
            0.5 +
            1);
  }
  function Mq(e) {
    let t = ct;
    return (e /= 0.5) < 1
      ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
      : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
  }
  function Dq(e) {
    let t = ct;
    return e * e * ((t + 1) * e - t);
  }
  function Fq(e) {
    let t = ct;
    return (e -= 1) * e * ((t + 1) * e + t) + 1;
  }
  function Gq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
  }
  function Uq(e) {
    return e < 1 / 2.75
      ? 7.5625 * e * e
      : e < 2 / 2.75
        ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
        : e < 2.5 / 2.75
          ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
          : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
  }
  var Ur,
    ct,
    nq,
    iq,
    oq,
    aq,
    Ia = fe(() => {
      "use strict";
      (Ur = oe(ba())),
        (ct = 1.70158),
        (nq = (0, Ur.default)(0.25, 0.1, 0.25, 1)),
        (iq = (0, Ur.default)(0.42, 0, 1, 1)),
        (oq = (0, Ur.default)(0, 0, 0.58, 1)),
        (aq = (0, Ur.default)(0.42, 0, 0.58, 1));
    });
  var sh = {};
  Ce(sh, {
    applyEasing: () => Hq,
    createBezierEasing: () => Vq,
    optimizeFloat: () => Hr,
  });
  function Hr(e, t = 5, r = 10) {
    let n = Math.pow(r, t),
      i = Number(Math.round(e * n) / n);
    return Math.abs(i) > 1e-4 ? i : 0;
  }
  function Vq(e) {
    return (0, ah.default)(...e);
  }
  function Hq(e, t, r) {
    return t === 0
      ? 0
      : t === 1
        ? 1
        : Hr(r ? (t > 0 ? r(t) : t) : t > 0 && e && Vr[e] ? Vr[e](t) : t);
  }
  var ah,
    Oa = fe(() => {
      "use strict";
      Ia();
      ah = oe(ba());
    });
  var lh = {};
  Ce(lh, {
    createElementState: () => ch,
    ixElements: () => tM,
    mergeActionState: () => Aa,
  });
  function ch(e, t, r, n, i) {
    let o =
      r === Xq ? (0, Zt.getIn)(i, ["config", "target", "objectId"]) : null;
    return (0, Zt.mergeIn)(e, [n], { id: n, ref: t, refId: o, refType: r });
  }
  function Aa(e, t, r, n, i) {
    let o = nM(i);
    return (0, Zt.mergeIn)(e, [t, eM, r], n, o);
  }
  function nM(e) {
    let { config: t } = e;
    return rM.reduce((r, n) => {
      let i = n[0],
        o = n[1],
        a = t[i],
        s = t[o];
      return a != null && s != null && (r[o] = s), r;
    }, {});
  }
  var Zt,
    eB,
    Xq,
    tB,
    kq,
    Wq,
    Bq,
    jq,
    zq,
    Kq,
    Yq,
    $q,
    Qq,
    Zq,
    Jq,
    uh,
    eM,
    tM,
    rM,
    fh = fe(() => {
      "use strict";
      Zt = oe(kt());
      Le();
      ({
        HTML_ELEMENT: eB,
        PLAIN_OBJECT: Xq,
        ABSTRACT_NODE: tB,
        CONFIG_X_VALUE: kq,
        CONFIG_Y_VALUE: Wq,
        CONFIG_Z_VALUE: Bq,
        CONFIG_VALUE: jq,
        CONFIG_X_UNIT: zq,
        CONFIG_Y_UNIT: Kq,
        CONFIG_Z_UNIT: Yq,
        CONFIG_UNIT: $q,
      } = Ie),
        ({
          IX2_SESSION_STOPPED: Qq,
          IX2_INSTANCE_ADDED: Zq,
          IX2_ELEMENT_STATE_CHANGED: Jq,
        } = ye),
        (uh = {}),
        (eM = "refState"),
        (tM = (e = uh, t = {}) => {
          switch (t.type) {
            case Qq:
              return uh;
            case Zq: {
              let {
                elementId: r,
                element: n,
                origin: i,
                actionItem: o,
                refType: a,
              } = t.payload,
                { actionTypeId: s } = o,
                u = e;
              return (
                (0, Zt.getIn)(u, [r, n]) !== n && (u = ch(u, n, a, r, o)),
                Aa(u, r, s, i, o)
              );
            }
            case Jq: {
              let {
                elementId: r,
                actionTypeId: n,
                current: i,
                actionItem: o,
              } = t.payload;
              return Aa(e, r, n, i, o);
            }
            default:
              return e;
          }
        });
      rM = [
        [kq, zq],
        [Wq, Kq],
        [Bq, Yq],
        [jq, $q],
      ];
    });
  var dh = c((Te) => {
    "use strict";
    Object.defineProperty(Te, "__esModule", { value: !0 });
    Te.renderPlugin =
      Te.getPluginOrigin =
      Te.getPluginDuration =
      Te.getPluginDestination =
      Te.getPluginConfig =
      Te.createPluginInstance =
      Te.clearPlugin =
      void 0;
    var iM = (e) => e.value;
    Te.getPluginConfig = iM;
    var oM = (e, t) => {
      if (t.config.duration !== "auto") return null;
      let r = parseFloat(e.getAttribute("data-duration"));
      return r > 0
        ? r * 1e3
        : parseFloat(e.getAttribute("data-default-duration")) * 1e3;
    };
    Te.getPluginDuration = oM;
    var aM = (e) => e || { value: 0 };
    Te.getPluginOrigin = aM;
    var sM = (e) => ({ value: e.value });
    Te.getPluginDestination = sM;
    var uM = (e) => {
      let t = window.Webflow.require("lottie").createInstance(e);
      return t.stop(), t.setSubframe(!0), t;
    };
    Te.createPluginInstance = uM;
    var cM = (e, t, r) => {
      if (!e) return;
      let n = t[r.actionTypeId].value / 100;
      e.goToFrame(e.frames * n);
    };
    Te.renderPlugin = cM;
    var lM = (e) => {
      window.Webflow.require("lottie").createInstance(e).stop();
    };
    Te.clearPlugin = lM;
  });
  var gh = c((be) => {
    "use strict";
    Object.defineProperty(be, "__esModule", { value: !0 });
    be.renderPlugin =
      be.getPluginOrigin =
      be.getPluginDuration =
      be.getPluginDestination =
      be.getPluginConfig =
      be.createPluginInstance =
      be.clearPlugin =
      void 0;
    var fM = (e) => document.querySelector(`[data-w-id="${e}"]`),
      dM = () => window.Webflow.require("spline"),
      pM = (e, t) => e.filter((r) => !t.includes(r)),
      gM = (e, t) => e.value[t];
    be.getPluginConfig = gM;
    var vM = () => null;
    be.getPluginDuration = vM;
    var ph = Object.freeze({
      positionX: 0,
      positionY: 0,
      positionZ: 0,
      rotationX: 0,
      rotationY: 0,
      rotationZ: 0,
      scaleX: 1,
      scaleY: 1,
      scaleZ: 1,
    }),
      hM = (e, t) => {
        let r = t.config.value,
          n = Object.keys(r);
        if (e) {
          let o = Object.keys(e),
            a = pM(n, o);
          return a.length ? a.reduce((u, f) => ((u[f] = ph[f]), u), e) : e;
        }
        return n.reduce((o, a) => ((o[a] = ph[a]), o), {});
      };
    be.getPluginOrigin = hM;
    var EM = (e) => e.value;
    be.getPluginDestination = EM;
    var yM = (e, t) => {
      var r, n;
      let i =
        t == null ||
          (r = t.config) === null ||
          r === void 0 ||
          (n = r.target) === null ||
          n === void 0
          ? void 0
          : n.pluginElement;
      return i ? fM(i) : null;
    };
    be.createPluginInstance = yM;
    var mM = (e, t, r) => {
      let n = dM(),
        i = n.getInstance(e),
        o = r.config.target.objectId,
        a = (s) => {
          if (!s) throw new Error("Invalid spline app passed to renderSpline");
          let u = o && s.findObjectById(o);
          if (!u) return;
          let { PLUGIN_SPLINE: f } = t;
          f.positionX != null && (u.position.x = f.positionX),
            f.positionY != null && (u.position.y = f.positionY),
            f.positionZ != null && (u.position.z = f.positionZ),
            f.rotationX != null && (u.rotation.x = f.rotationX),
            f.rotationY != null && (u.rotation.y = f.rotationY),
            f.rotationZ != null && (u.rotation.z = f.rotationZ),
            f.scaleX != null && (u.scale.x = f.scaleX),
            f.scaleY != null && (u.scale.y = f.scaleY),
            f.scaleZ != null && (u.scale.z = f.scaleZ);
        };
      i ? a(i.spline) : n.setLoadHandler(e, a);
    };
    be.renderPlugin = mM;
    var _M = () => null;
    be.clearPlugin = _M;
  });
  var hh = c((me) => {
    "use strict";
    Object.defineProperty(me, "__esModule", { value: !0 });
    me.getPluginOrigin =
      me.getPluginDuration =
      me.getPluginDestination =
      me.getPluginConfig =
      me.createPluginInstance =
      me.clearPlugin =
      void 0;
    me.normalizeColor = vh;
    me.renderPlugin = void 0;
    function vh(e) {
      let t,
        r,
        n,
        i = 1,
        o = e.replace(/\s/g, "").toLowerCase();
      if (o.startsWith("#")) {
        let a = o.substring(1);
        a.length === 3
          ? ((t = parseInt(a[0] + a[0], 16)),
            (r = parseInt(a[1] + a[1], 16)),
            (n = parseInt(a[2] + a[2], 16)))
          : a.length === 6 &&
          ((t = parseInt(a.substring(0, 2), 16)),
            (r = parseInt(a.substring(2, 4), 16)),
            (n = parseInt(a.substring(4, 6), 16)));
      } else if (o.startsWith("rgba")) {
        let a = o.match(/rgba\(([^)]+)\)/)[1].split(",");
        (t = parseInt(a[0], 10)),
          (r = parseInt(a[1], 10)),
          (n = parseInt(a[2], 10)),
          (i = parseFloat(a[3]));
      } else if (o.startsWith("rgb")) {
        let a = o.match(/rgb\(([^)]+)\)/)[1].split(",");
        (t = parseInt(a[0], 10)),
          (r = parseInt(a[1], 10)),
          (n = parseInt(a[2], 10));
      } else if (o.startsWith("hsla")) {
        let a = o.match(/hsla\(([^)]+)\)/)[1].split(","),
          s = parseFloat(a[0]),
          u = parseFloat(a[1].replace("%", "")) / 100,
          f = parseFloat(a[2].replace("%", "")) / 100;
        i = parseFloat(a[3]);
        let g = (1 - Math.abs(2 * f - 1)) * u,
          d = g * (1 - Math.abs(((s / 60) % 2) - 1)),
          h = f - g / 2,
          y,
          E,
          _;
        s >= 0 && s < 60
          ? ((y = g), (E = d), (_ = 0))
          : s >= 60 && s < 120
            ? ((y = d), (E = g), (_ = 0))
            : s >= 120 && s < 180
              ? ((y = 0), (E = g), (_ = d))
              : s >= 180 && s < 240
                ? ((y = 0), (E = d), (_ = g))
                : s >= 240 && s < 300
                  ? ((y = d), (E = 0), (_ = g))
                  : ((y = g), (E = 0), (_ = d)),
          (t = Math.round((y + h) * 255)),
          (r = Math.round((E + h) * 255)),
          (n = Math.round((_ + h) * 255));
      } else if (o.startsWith("hsl")) {
        let a = o.match(/hsl\(([^)]+)\)/)[1].split(","),
          s = parseFloat(a[0]),
          u = parseFloat(a[1].replace("%", "")) / 100,
          f = parseFloat(a[2].replace("%", "")) / 100,
          g = (1 - Math.abs(2 * f - 1)) * u,
          d = g * (1 - Math.abs(((s / 60) % 2) - 1)),
          h = f - g / 2,
          y,
          E,
          _;
        s >= 0 && s < 60
          ? ((y = g), (E = d), (_ = 0))
          : s >= 60 && s < 120
            ? ((y = d), (E = g), (_ = 0))
            : s >= 120 && s < 180
              ? ((y = 0), (E = g), (_ = d))
              : s >= 180 && s < 240
                ? ((y = 0), (E = d), (_ = g))
                : s >= 240 && s < 300
                  ? ((y = d), (E = 0), (_ = g))
                  : ((y = g), (E = 0), (_ = d)),
          (t = Math.round((y + h) * 255)),
          (r = Math.round((E + h) * 255)),
          (n = Math.round((_ + h) * 255));
      }
      return (
        (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) && `${e}`,
        { red: t, green: r, blue: n, alpha: i }
      );
    }
    var TM = (e, t) => e.value[t];
    me.getPluginConfig = TM;
    var bM = () => null;
    me.getPluginDuration = bM;
    var IM = (e, t) => {
      if (e) return e;
      let r = t.config.value,
        n = t.config.target.objectId,
        i = getComputedStyle(document.documentElement).getPropertyValue(n);
      if (r.size != null) return { size: parseInt(i, 10) };
      if (r.red != null && r.green != null && r.blue != null) return vh(i);
    };
    me.getPluginOrigin = IM;
    var OM = (e) => e.value;
    me.getPluginDestination = OM;
    var AM = () => null;
    me.createPluginInstance = AM;
    var wM = (e, t, r) => {
      let n = r.config.target.objectId,
        i = r.config.value.unit,
        { PLUGIN_VARIABLE: o } = t,
        { size: a, red: s, green: u, blue: f, alpha: g } = o,
        d;
      a != null && (d = a + i),
        s != null &&
        f != null &&
        u != null &&
        g != null &&
        (d = `rgba(${s}, ${u}, ${f}, ${g})`),
        d != null && document.documentElement.style.setProperty(n, d);
    };
    me.renderPlugin = wM;
    var xM = (e, t) => {
      let r = t.config.target.objectId;
      document.documentElement.style.removeProperty(r);
    };
    me.clearPlugin = xM;
  });
  var Eh = c((Zn) => {
    "use strict";
    var xa = cn().default;
    Object.defineProperty(Zn, "__esModule", { value: !0 });
    Zn.pluginMethodMap = void 0;
    var wa = (Le(), Ze(If)),
      SM = xa(dh()),
      RM = xa(gh()),
      CM = xa(hh()),
      oB = (Zn.pluginMethodMap = new Map([
        [wa.ActionTypeConsts.PLUGIN_LOTTIE, { ...SM }],
        [wa.ActionTypeConsts.PLUGIN_SPLINE, { ...RM }],
        [wa.ActionTypeConsts.PLUGIN_VARIABLE, { ...CM }],
      ]));
  });
  var yh = {};
  Ce(yh, {
    clearPlugin: () => Pa,
    createPluginInstance: () => LM,
    getPluginConfig: () => Ra,
    getPluginDestination: () => Na,
    getPluginDuration: () => NM,
    getPluginOrigin: () => Ca,
    isPluginType: () => Rt,
    renderPlugin: () => La,
  });
  function Rt(e) {
    return Sa.pluginMethodMap.has(e);
  }
  var Sa,
    Ct,
    Ra,
    Ca,
    NM,
    Na,
    LM,
    La,
    Pa,
    qa = fe(() => {
      "use strict";
      Yn();
      Sa = oe(Eh());
      (Ct = (e) => (t) => {
        if (!je) return () => null;
        let r = Sa.pluginMethodMap.get(t);
        if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
        let n = r[e];
        if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
        return n;
      }),
        (Ra = Ct("getPluginConfig")),
        (Ca = Ct("getPluginOrigin")),
        (NM = Ct("getPluginDuration")),
        (Na = Ct("getPluginDestination")),
        (LM = Ct("createPluginInstance")),
        (La = Ct("renderPlugin")),
        (Pa = Ct("clearPlugin"));
    });
  var _h = c((uB, mh) => {
    function PM(e, t) {
      return e == null || e !== e ? t : e;
    }
    mh.exports = PM;
  });
  var bh = c((cB, Th) => {
    function qM(e, t, r, n) {
      var i = -1,
        o = e == null ? 0 : e.length;
      for (n && o && (r = e[++i]); ++i < o;) r = t(r, e[i], i, e);
      return r;
    }
    Th.exports = qM;
  });
  var Oh = c((lB, Ih) => {
    function MM(e) {
      return function (t, r, n) {
        for (var i = -1, o = Object(t), a = n(t), s = a.length; s--;) {
          var u = a[e ? s : ++i];
          if (r(o[u], u, o) === !1) break;
        }
        return t;
      };
    }
    Ih.exports = MM;
  });
  var wh = c((fB, Ah) => {
    var DM = Oh(),
      FM = DM();
    Ah.exports = FM;
  });
  var Ma = c((dB, xh) => {
    var GM = wh(),
      UM = Mr();
    function VM(e, t) {
      return e && GM(e, t, UM);
    }
    xh.exports = VM;
  });
  var Rh = c((pB, Sh) => {
    var HM = xt();
    function XM(e, t) {
      return function (r, n) {
        if (r == null) return r;
        if (!HM(r)) return e(r, n);
        for (
          var i = r.length, o = t ? i : -1, a = Object(r);
          (t ? o-- : ++o < i) && n(a[o], o, a) !== !1;

        );
        return r;
      };
    }
    Sh.exports = XM;
  });
  var Da = c((gB, Ch) => {
    var kM = Ma(),
      WM = Rh(),
      BM = WM(kM);
    Ch.exports = BM;
  });
  var Lh = c((vB, Nh) => {
    function jM(e, t, r, n, i) {
      return (
        i(e, function (o, a, s) {
          r = n ? ((n = !1), o) : t(r, o, a, s);
        }),
        r
      );
    }
    Nh.exports = jM;
  });
  var qh = c((hB, Ph) => {
    var zM = bh(),
      KM = Da(),
      YM = mt(),
      $M = Lh(),
      QM = _e();
    function ZM(e, t, r) {
      var n = QM(e) ? zM : $M,
        i = arguments.length < 3;
      return n(e, YM(t, 4), r, i, KM);
    }
    Ph.exports = ZM;
  });
  var Dh = c((EB, Mh) => {
    var JM = ya(),
      e1 = mt(),
      t1 = ma(),
      r1 = Math.max,
      n1 = Math.min;
    function i1(e, t, r) {
      var n = e == null ? 0 : e.length;
      if (!n) return -1;
      var i = n - 1;
      return (
        r !== void 0 &&
        ((i = t1(r)), (i = r < 0 ? r1(n + i, 0) : n1(i, n - 1))),
        JM(e, e1(t, 3), i, !0)
      );
    }
    Mh.exports = i1;
  });
  var Gh = c((yB, Fh) => {
    var o1 = Ea(),
      a1 = Dh(),
      s1 = o1(a1);
    Fh.exports = s1;
  });
  function Uh(e, t) {
    return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
  }
  function c1(e, t) {
    if (Uh(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    let r = Object.keys(e),
      n = Object.keys(t);
    if (r.length !== n.length) return !1;
    for (let i = 0; i < r.length; i++)
      if (!u1.call(t, r[i]) || !Uh(e[r[i]], t[r[i]])) return !1;
    return !0;
  }
  var u1,
    Fa,
    Vh = fe(() => {
      "use strict";
      u1 = Object.prototype.hasOwnProperty;
      Fa = c1;
    });
  var nE = {};
  Ce(nE, {
    cleanupHTMLElement: () => aD,
    clearAllStyles: () => oD,
    clearObjectCache: () => w1,
    getActionListProgress: () => uD,
    getAffectedElements: () => Xa,
    getComputedStyle: () => q1,
    getDestinationValues: () => H1,
    getElementId: () => C1,
    getInstanceId: () => S1,
    getInstanceOrigin: () => F1,
    getItemConfigByKey: () => V1,
    getMaxDurationItemIndex: () => rE,
    getNamespacedParameterId: () => fD,
    getRenderType: () => Jh,
    getStyleProp: () => X1,
    mediaQueriesEqual: () => pD,
    observeStore: () => P1,
    reduceListToGroup: () => cD,
    reifyState: () => N1,
    renderHTMLElement: () => k1,
    shallowEqual: () => Fa,
    shouldAllowMediaQuery: () => dD,
    shouldNamespaceEventParameter: () => lD,
    stringifyTarget: () => gD,
  });
  function w1() {
    Jn.clear();
  }
  function S1() {
    return "i" + x1++;
  }
  function C1(e, t) {
    for (let r in e) {
      let n = e[r];
      if (n && n.ref === t) return n.id;
    }
    return "e" + R1++;
  }
  function N1({ events: e, actionLists: t, site: r } = {}) {
    let n = (0, ni.default)(
      e,
      (a, s) => {
        let { eventTypeId: u } = s;
        return a[u] || (a[u] = {}), (a[u][s.id] = s), a;
      },
      {}
    ),
      i = r && r.mediaQueries,
      o = [];
    return (
      i
        ? (o = i.map((a) => a.key))
        : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
      {
        ixData: {
          events: e,
          actionLists: t,
          eventTypeMap: n,
          mediaQueries: i,
          mediaQueryKeys: o,
        },
      }
    );
  }
  function P1({ store: e, select: t, onChange: r, comparator: n = L1 }) {
    let { getState: i, subscribe: o } = e,
      a = o(u),
      s = t(i());
    function u() {
      let f = t(i());
      if (f == null) {
        a();
        return;
      }
      n(f, s) || ((s = f), r(s, e));
    }
    return a;
  }
  function kh(e) {
    let t = typeof e;
    if (t === "string") return { id: e };
    if (e != null && t === "object") {
      let {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      } = e;
      return {
        id: r,
        objectId: n,
        selector: i,
        selectorGuids: o,
        appliesTo: a,
        useEventTarget: s,
      };
    }
    return {};
  }
  function Xa({
    config: e,
    event: t,
    eventTarget: r,
    elementRoot: n,
    elementApi: i,
  }) {
    if (!i) throw new Error("IX2 missing elementApi");
    let { targets: o } = e;
    if (Array.isArray(o) && o.length > 0)
      return o.reduce(
        (O, v) =>
          O.concat(
            Xa({
              config: { target: v },
              event: t,
              eventTarget: r,
              elementRoot: n,
              elementApi: i,
            })
          ),
        []
      );
    let {
      getValidDocument: a,
      getQuerySelector: s,
      queryDocument: u,
      getChildElements: f,
      getSiblingElements: g,
      matchSelector: d,
      elementContains: h,
      isSiblingNode: y,
    } = i,
      { target: E } = e;
    if (!E) return [];
    let {
      id: _,
      objectId: q,
      selector: I,
      selectorGuids: S,
      appliesTo: A,
      useEventTarget: N,
    } = kh(E);
    if (q) return [Jn.has(q) ? Jn.get(q) : Jn.set(q, {}).get(q)];
    if (A === ko.PAGE) {
      let O = a(_);
      return O ? [O] : [];
    }
    let L = (t?.action?.config?.affectedElements ?? {})[_ || I] || {},
      B = !!(L.id || L.selector),
      j,
      z,
      $,
      U = t && s(kh(t.target));
    if (
      (B
        ? ((j = L.limitAffectedElements), (z = U), ($ = s(L)))
        : (z = $ = s({ id: _, selector: I, selectorGuids: S })),
        t && N)
    ) {
      let O = r && ($ || N === !0) ? [r] : u(U);
      if ($) {
        if (N === I1) return u($).filter((v) => O.some((R) => h(v, R)));
        if (N === Hh) return u($).filter((v) => O.some((R) => h(R, v)));
        if (N === Xh) return u($).filter((v) => O.some((R) => y(R, v)));
      }
      return O;
    }
    return z == null || $ == null
      ? []
      : je && n
        ? u($).filter((O) => n.contains(O))
        : j === Hh
          ? u(z, $)
          : j === b1
            ? f(u(z)).filter(d($))
            : j === Xh
              ? g(u(z)).filter(d($))
              : u($);
  }
  function q1({ element: e, actionItem: t }) {
    if (!je) return {};
    let { actionTypeId: r } = t;
    switch (r) {
      case nr:
      case ir:
      case or:
      case ar:
      case oi:
        return window.getComputedStyle(e);
      default:
        return {};
    }
  }
  function F1(e, t = {}, r = {}, n, i) {
    let { getStyle: o } = i,
      { actionTypeId: a } = n;
    if (Rt(a)) return Ca(a)(t[a], n);
    switch (n.actionTypeId) {
      case er:
      case tr:
      case rr:
      case Br:
        return t[n.actionTypeId] || ka[n.actionTypeId];
      case jr:
        return M1(t[n.actionTypeId], n.config.filters);
      case zr:
        return D1(t[n.actionTypeId], n.config.fontVariations);
      case $h:
        return { value: (0, lt.default)(parseFloat(o(e, ti)), 1) };
      case nr: {
        let s = o(e, it),
          u = o(e, ot),
          f,
          g;
        return (
          n.config.widthUnit === Tt
            ? (f = Wh.test(s) ? parseFloat(s) : parseFloat(r.width))
            : (f = (0, lt.default)(parseFloat(s), parseFloat(r.width))),
          n.config.heightUnit === Tt
            ? (g = Wh.test(u) ? parseFloat(u) : parseFloat(r.height))
            : (g = (0, lt.default)(parseFloat(u), parseFloat(r.height))),
          { widthValue: f, heightValue: g }
        );
      }
      case ir:
      case or:
      case ar:
        return rD({
          element: e,
          actionTypeId: n.actionTypeId,
          computedStyle: r,
          getStyle: o,
        });
      case oi:
        return { value: (0, lt.default)(o(e, ri), r.display) };
      case A1:
        return t[n.actionTypeId] || { value: 0 };
      default:
        return;
    }
  }
  function H1({ element: e, actionItem: t, elementApi: r }) {
    if (Rt(t.actionTypeId)) return Na(t.actionTypeId)(t.config);
    switch (t.actionTypeId) {
      case er:
      case tr:
      case rr:
      case Br: {
        let { xValue: n, yValue: i, zValue: o } = t.config;
        return { xValue: n, yValue: i, zValue: o };
      }
      case nr: {
        let { getStyle: n, setStyle: i, getProperty: o } = r,
          { widthUnit: a, heightUnit: s } = t.config,
          { widthValue: u, heightValue: f } = t.config;
        if (!je) return { widthValue: u, heightValue: f };
        if (a === Tt) {
          let g = n(e, it);
          i(e, it, ""), (u = o(e, "offsetWidth")), i(e, it, g);
        }
        if (s === Tt) {
          let g = n(e, ot);
          i(e, ot, ""), (f = o(e, "offsetHeight")), i(e, ot, g);
        }
        return { widthValue: u, heightValue: f };
      }
      case ir:
      case or:
      case ar: {
        let { rValue: n, gValue: i, bValue: o, aValue: a } = t.config;
        return { rValue: n, gValue: i, bValue: o, aValue: a };
      }
      case jr:
        return t.config.filters.reduce(G1, {});
      case zr:
        return t.config.fontVariations.reduce(U1, {});
      default: {
        let { value: n } = t.config;
        return { value: n };
      }
    }
  }
  function Jh(e) {
    if (/^TRANSFORM_/.test(e)) return Kh;
    if (/^STYLE_/.test(e)) return Va;
    if (/^GENERAL_/.test(e)) return Ua;
    if (/^PLUGIN_/.test(e)) return Yh;
  }
  function X1(e, t) {
    return e === Va ? t.replace("STYLE_", "").toLowerCase() : null;
  }
  function k1(e, t, r, n, i, o, a, s, u) {
    switch (s) {
      case Kh:
        return K1(e, t, r, i, a);
      case Va:
        return nD(e, t, r, i, o, a);
      case Ua:
        return iD(e, i, a);
      case Yh: {
        let { actionTypeId: f } = i;
        if (Rt(f)) return La(f)(u, t, i);
      }
    }
  }
  function K1(e, t, r, n, i) {
    let o = z1
      .map((s) => {
        let u = ka[s],
          {
            xValue: f = u.xValue,
            yValue: g = u.yValue,
            zValue: d = u.zValue,
            xUnit: h = "",
            yUnit: y = "",
            zUnit: E = "",
          } = t[s] || {};
        switch (s) {
          case er:
            return `${d1}(${f}${h}, ${g}${y}, ${d}${E})`;
          case tr:
            return `${p1}(${f}${h}, ${g}${y}, ${d}${E})`;
          case rr:
            return `${g1}(${f}${h}) ${v1}(${g}${y}) ${h1}(${d}${E})`;
          case Br:
            return `${E1}(${f}${h}, ${g}${y})`;
          default:
            return "";
        }
      })
      .join(" "),
      { setStyle: a } = i;
    Nt(e, _t, i), a(e, _t, o), Q1(n, r) && a(e, Kn, y1);
  }
  function Y1(e, t, r, n) {
    let i = (0, ni.default)(t, (a, s, u) => `${a} ${u}(${s}${j1(u, r)})`, ""),
      { setStyle: o } = n;
    Nt(e, Xr, n), o(e, Xr, i);
  }
  function $1(e, t, r, n) {
    let i = (0, ni.default)(
      t,
      (a, s, u) => (a.push(`"${u}" ${s}`), a),
      []
    ).join(", "),
      { setStyle: o } = n;
    Nt(e, kr, n), o(e, kr, i);
  }
  function Q1({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
    return (
      (e === er && n !== void 0) ||
      (e === tr && n !== void 0) ||
      (e === rr && (t !== void 0 || r !== void 0))
    );
  }
  function tD(e, t) {
    let r = e.exec(t);
    return r ? r[1] : "";
  }
  function rD({ element: e, actionTypeId: t, computedStyle: r, getStyle: n }) {
    let i = Ha[t],
      o = n(e, i),
      a = J1.test(o) ? o : r[i],
      s = tD(eD, a).split(Wr);
    return {
      rValue: (0, lt.default)(parseInt(s[0], 10), 255),
      gValue: (0, lt.default)(parseInt(s[1], 10), 255),
      bValue: (0, lt.default)(parseInt(s[2], 10), 255),
      aValue: (0, lt.default)(parseFloat(s[3]), 1),
    };
  }
  function nD(e, t, r, n, i, o) {
    let { setStyle: a } = o;
    switch (n.actionTypeId) {
      case nr: {
        let { widthUnit: s = "", heightUnit: u = "" } = n.config,
          { widthValue: f, heightValue: g } = r;
        f !== void 0 && (s === Tt && (s = "px"), Nt(e, it, o), a(e, it, f + s)),
          g !== void 0 &&
          (u === Tt && (u = "px"), Nt(e, ot, o), a(e, ot, g + u));
        break;
      }
      case jr: {
        Y1(e, r, n.config, o);
        break;
      }
      case zr: {
        $1(e, r, n.config, o);
        break;
      }
      case ir:
      case or:
      case ar: {
        let s = Ha[n.actionTypeId],
          u = Math.round(r.rValue),
          f = Math.round(r.gValue),
          g = Math.round(r.bValue),
          d = r.aValue;
        Nt(e, s, o),
          a(e, s, d >= 1 ? `rgb(${u},${f},${g})` : `rgba(${u},${f},${g},${d})`);
        break;
      }
      default: {
        let { unit: s = "" } = n.config;
        Nt(e, i, o), a(e, i, r.value + s);
        break;
      }
    }
  }
  function iD(e, t, r) {
    let { setStyle: n } = r;
    switch (t.actionTypeId) {
      case oi: {
        let { value: i } = t.config;
        i === m1 && je ? n(e, ri, Ta) : n(e, ri, i);
        return;
      }
    }
  }
  function Nt(e, t, r) {
    if (!je) return;
    let n = Zh[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, Jt);
    if (!a) {
      o(e, Jt, n);
      return;
    }
    let s = a.split(Wr).map(Qh);
    s.indexOf(n) === -1 && o(e, Jt, s.concat(n).join(Wr));
  }
  function eE(e, t, r) {
    if (!je) return;
    let n = Zh[t];
    if (!n) return;
    let { getStyle: i, setStyle: o } = r,
      a = i(e, Jt);
    !a ||
      a.indexOf(n) === -1 ||
      o(
        e,
        Jt,
        a
          .split(Wr)
          .map(Qh)
          .filter((s) => s !== n)
          .join(Wr)
      );
  }
  function oD({ store: e, elementApi: t }) {
    let { ixData: r } = e.getState(),
      { events: n = {}, actionLists: i = {} } = r;
    Object.keys(n).forEach((o) => {
      let a = n[o],
        { config: s } = a.action,
        { actionListId: u } = s,
        f = i[u];
      f && Bh({ actionList: f, event: a, elementApi: t });
    }),
      Object.keys(i).forEach((o) => {
        Bh({ actionList: i[o], elementApi: t });
      });
  }
  function Bh({ actionList: e = {}, event: t, elementApi: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e;
    n &&
      n.forEach((o) => {
        jh({ actionGroup: o, event: t, elementApi: r });
      }),
      i &&
      i.forEach((o) => {
        let { continuousActionGroups: a } = o;
        a.forEach((s) => {
          jh({ actionGroup: s, event: t, elementApi: r });
        });
      });
  }
  function jh({ actionGroup: e, event: t, elementApi: r }) {
    let { actionItems: n } = e;
    n.forEach((i) => {
      let { actionTypeId: o, config: a } = i,
        s;
      Rt(o)
        ? (s = (u) => Pa(o)(u, i))
        : (s = tE({ effect: sD, actionTypeId: o, elementApi: r })),
        Xa({ config: a, event: t, elementApi: r }).forEach(s);
    });
  }
  function aD(e, t, r) {
    let { setStyle: n, getStyle: i } = r,
      { actionTypeId: o } = t;
    if (o === nr) {
      let { config: a } = t;
      a.widthUnit === Tt && n(e, it, ""), a.heightUnit === Tt && n(e, ot, "");
    }
    i(e, Jt) && tE({ effect: eE, actionTypeId: o, elementApi: r })(e);
  }
  function sD(e, t, r) {
    let { setStyle: n } = r;
    eE(e, t, r), n(e, t, ""), t === _t && n(e, Kn, "");
  }
  function rE(e) {
    let t = 0,
      r = 0;
    return (
      e.forEach((n, i) => {
        let { config: o } = n,
          a = o.delay + o.duration;
        a >= t && ((t = a), (r = i));
      }),
      r
    );
  }
  function uD(e, t) {
    let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
      { actionItem: i, verboseTimeElapsed: o = 0 } = t,
      a = 0,
      s = 0;
    return (
      r.forEach((u, f) => {
        if (n && f === 0) return;
        let { actionItems: g } = u,
          d = g[rE(g)],
          { config: h, actionTypeId: y } = d;
        i.id === d.id && (s = a + o);
        let E = Jh(y) === Ua ? 0 : h.duration;
        a += h.delay + E;
      }),
      a > 0 ? Hr(s / a) : 0
    );
  }
  function cD({ actionList: e, actionItemId: t, rawData: r }) {
    let { actionItemGroups: n, continuousParameterGroups: i } = e,
      o = [],
      a = (s) => (
        o.push((0, ii.mergeIn)(s, ["config"], { delay: 0, duration: 0 })),
        s.id === t
      );
    return (
      n && n.some(({ actionItems: s }) => s.some(a)),
      i &&
      i.some((s) => {
        let { continuousActionGroups: u } = s;
        return u.some(({ actionItems: f }) => f.some(a));
      }),
      (0, ii.setIn)(r, ["actionLists"], {
        [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
      })
    );
  }
  function lD(e, { basedOn: t }) {
    return (
      (e === Be.SCROLLING_IN_VIEW && (t === rt.ELEMENT || t == null)) ||
      (e === Be.MOUSE_MOVE && t === rt.ELEMENT)
    );
  }
  function fD(e, t) {
    return e + O1 + t;
  }
  function dD(e, t) {
    return t == null ? !0 : e.indexOf(t) !== -1;
  }
  function pD(e, t) {
    return Fa(e && e.sort(), t && t.sort());
  }
  function gD(e) {
    if (typeof e == "string") return e;
    if (e.pluginElement && e.objectId) return e.pluginElement + Ga + e.objectId;
    if (e.objectId) return e.objectId;
    let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
    return t + Ga + r + Ga + n;
  }
  var lt,
    ni,
    ei,
    ii,
    l1,
    f1,
    d1,
    p1,
    g1,
    v1,
    h1,
    E1,
    y1,
    m1,
    ti,
    Xr,
    kr,
    it,
    ot,
    zh,
    _1,
    T1,
    Hh,
    b1,
    Xh,
    I1,
    ri,
    Jt,
    Tt,
    Wr,
    O1,
    Ga,
    Kh,
    Ua,
    Va,
    Yh,
    er,
    tr,
    rr,
    Br,
    $h,
    jr,
    zr,
    nr,
    ir,
    or,
    ar,
    oi,
    A1,
    Qh,
    Ha,
    Zh,
    Jn,
    x1,
    R1,
    L1,
    Wh,
    M1,
    D1,
    G1,
    U1,
    V1,
    ka,
    W1,
    B1,
    j1,
    z1,
    Z1,
    J1,
    eD,
    tE,
    iE = fe(() => {
      "use strict";
      (lt = oe(_h())), (ni = oe(qh())), (ei = oe(Gh())), (ii = oe(kt()));
      Le();
      Vh();
      Oa();
      qa();
      Yn();
      ({
        BACKGROUND: l1,
        TRANSFORM: f1,
        TRANSLATE_3D: d1,
        SCALE_3D: p1,
        ROTATE_X: g1,
        ROTATE_Y: v1,
        ROTATE_Z: h1,
        SKEW: E1,
        PRESERVE_3D: y1,
        FLEX: m1,
        OPACITY: ti,
        FILTER: Xr,
        FONT_VARIATION_SETTINGS: kr,
        WIDTH: it,
        HEIGHT: ot,
        BACKGROUND_COLOR: zh,
        BORDER_COLOR: _1,
        COLOR: T1,
        CHILDREN: Hh,
        IMMEDIATE_CHILDREN: b1,
        SIBLINGS: Xh,
        PARENT: I1,
        DISPLAY: ri,
        WILL_CHANGE: Jt,
        AUTO: Tt,
        COMMA_DELIMITER: Wr,
        COLON_DELIMITER: O1,
        BAR_DELIMITER: Ga,
        RENDER_TRANSFORM: Kh,
        RENDER_GENERAL: Ua,
        RENDER_STYLE: Va,
        RENDER_PLUGIN: Yh,
      } = Ie),
        ({
          TRANSFORM_MOVE: er,
          TRANSFORM_SCALE: tr,
          TRANSFORM_ROTATE: rr,
          TRANSFORM_SKEW: Br,
          STYLE_OPACITY: $h,
          STYLE_FILTER: jr,
          STYLE_FONT_VARIATION: zr,
          STYLE_SIZE: nr,
          STYLE_BACKGROUND_COLOR: ir,
          STYLE_BORDER: or,
          STYLE_TEXT_COLOR: ar,
          GENERAL_DISPLAY: oi,
          OBJECT_VALUE: A1,
        } = Ne),
        (Qh = (e) => e.trim()),
        (Ha = Object.freeze({ [ir]: zh, [or]: _1, [ar]: T1 })),
        (Zh = Object.freeze({
          [_t]: f1,
          [zh]: l1,
          [ti]: ti,
          [Xr]: Xr,
          [it]: it,
          [ot]: ot,
          [kr]: kr,
        })),
        (Jn = new Map());
      x1 = 1;
      R1 = 1;
      L1 = (e, t) => e === t;
      (Wh = /px/),
        (M1 = (e, t) =>
          t.reduce(
            (r, n) => (r[n.type] == null && (r[n.type] = W1[n.type]), r),
            e || {}
          )),
        (D1 = (e, t) =>
          t.reduce(
            (r, n) => (
              r[n.type] == null &&
              (r[n.type] = B1[n.type] || n.defaultValue || 0),
              r
            ),
            e || {}
          ));
      (G1 = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (U1 = (e, t) => (t && (e[t.type] = t.value || 0), e)),
        (V1 = (e, t, r) => {
          if (Rt(e)) return Ra(e)(r, t);
          switch (e) {
            case jr: {
              let n = (0, ei.default)(r.filters, ({ type: i }) => i === t);
              return n ? n.value : 0;
            }
            case zr: {
              let n = (0, ei.default)(
                r.fontVariations,
                ({ type: i }) => i === t
              );
              return n ? n.value : 0;
            }
            default:
              return r[t];
          }
        });
      (ka = {
        [er]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [tr]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
        [rr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
        [Br]: Object.freeze({ xValue: 0, yValue: 0 }),
      }),
        (W1 = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        })),
        (B1 = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 })),
        (j1 = (e, t) => {
          let r = (0, ei.default)(t.filters, ({ type: n }) => n === e);
          if (r && r.unit) return r.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        }),
        (z1 = Object.keys(ka));
      (Z1 = "\\(([^)]+)\\)"), (J1 = /^rgb/), (eD = RegExp(`rgba?${Z1}`));
      tE =
        ({ effect: e, actionTypeId: t, elementApi: r }) =>
          (n) => {
            switch (t) {
              case er:
              case tr:
              case rr:
              case Br:
                e(n, _t, r);
                break;
              case jr:
                e(n, Xr, r);
                break;
              case zr:
                e(n, kr, r);
                break;
              case $h:
                e(n, ti, r);
                break;
              case nr:
                e(n, it, r), e(n, ot, r);
                break;
              case ir:
              case or:
              case ar:
                e(n, Ha[t], r);
                break;
              case oi:
                e(n, ri, r);
                break;
            }
          };
    });
  var Lt = c((xe) => {
    "use strict";
    var sr = cn().default;
    Object.defineProperty(xe, "__esModule", { value: !0 });
    xe.IX2VanillaUtils =
      xe.IX2VanillaPlugins =
      xe.IX2ElementsReducer =
      xe.IX2Easings =
      xe.IX2EasingUtils =
      xe.IX2BrowserSupport =
      void 0;
    var vD = sr((Yn(), Ze(eh)));
    xe.IX2BrowserSupport = vD;
    var hD = sr((Ia(), Ze(Vr)));
    xe.IX2Easings = hD;
    var ED = sr((Oa(), Ze(sh)));
    xe.IX2EasingUtils = ED;
    var yD = sr((fh(), Ze(lh)));
    xe.IX2ElementsReducer = yD;
    var mD = sr((qa(), Ze(yh)));
    xe.IX2VanillaPlugins = mD;
    var _D = sr((iE(), Ze(nE)));
    xe.IX2VanillaUtils = _D;
  });
  var si,
    ft,
    TD,
    bD,
    ID,
    OD,
    AD,
    wD,
    ai,
    oE,
    xD,
    SD,
    Wa,
    RD,
    CD,
    ND,
    LD,
    aE,
    sE = fe(() => {
      "use strict";
      Le();
      (si = oe(Lt())),
        (ft = oe(kt())),
        ({
          IX2_RAW_DATA_IMPORTED: TD,
          IX2_SESSION_STOPPED: bD,
          IX2_INSTANCE_ADDED: ID,
          IX2_INSTANCE_STARTED: OD,
          IX2_INSTANCE_REMOVED: AD,
          IX2_ANIMATION_FRAME_CHANGED: wD,
        } = ye),
        ({
          optimizeFloat: ai,
          applyEasing: oE,
          createBezierEasing: xD,
        } = si.IX2EasingUtils),
        ({ RENDER_GENERAL: SD } = Ie),
        ({
          getItemConfigByKey: Wa,
          getRenderType: RD,
          getStyleProp: CD,
        } = si.IX2VanillaUtils),
        (ND = (e, t) => {
          let {
            position: r,
            parameterId: n,
            actionGroups: i,
            destinationKeys: o,
            smoothing: a,
            restingValue: s,
            actionTypeId: u,
            customEasingFn: f,
            skipMotion: g,
            skipToValue: d,
          } = e,
            { parameters: h } = t.payload,
            y = Math.max(1 - a, 0.01),
            E = h[n];
          E == null && ((y = 1), (E = s));
          let _ = Math.max(E, 0) || 0,
            q = ai(_ - r),
            I = g ? d : ai(r + q * y),
            S = I * 100;
          if (I === r && e.current) return e;
          let A, N, P, L;
          for (let j = 0, { length: z } = i; j < z; j++) {
            let { keyframe: $, actionItems: U } = i[j];
            if ((j === 0 && (A = U[0]), S >= $)) {
              A = U[0];
              let O = i[j + 1],
                v = O && S !== $;
              (N = v ? O.actionItems[0] : null),
                v && ((P = $ / 100), (L = (O.keyframe - $) / 100));
            }
          }
          let B = {};
          if (A && !N)
            for (let j = 0, { length: z } = o; j < z; j++) {
              let $ = o[j];
              B[$] = Wa(u, $, A.config);
            }
          else if (A && N && P !== void 0 && L !== void 0) {
            let j = (I - P) / L,
              z = A.config.easing,
              $ = oE(z, j, f);
            for (let U = 0, { length: O } = o; U < O; U++) {
              let v = o[U],
                R = Wa(u, v, A.config),
                Q = (Wa(u, v, N.config) - R) * $ + R;
              B[v] = Q;
            }
          }
          return (0, ft.merge)(e, { position: I, current: B });
        }),
        (LD = (e, t) => {
          let {
            active: r,
            origin: n,
            start: i,
            immediate: o,
            renderType: a,
            verbose: s,
            actionItem: u,
            destination: f,
            destinationKeys: g,
            pluginDuration: d,
            instanceDelay: h,
            customEasingFn: y,
            skipMotion: E,
          } = e,
            _ = u.config.easing,
            { duration: q, delay: I } = u.config;
          d != null && (q = d),
            (I = h ?? I),
            a === SD ? (q = 0) : (o || E) && (q = I = 0);
          let { now: S } = t.payload;
          if (r && n) {
            let A = S - (i + I);
            if (s) {
              let j = S - i,
                z = q + I,
                $ = ai(Math.min(Math.max(0, j / z), 1));
              e = (0, ft.set)(e, "verboseTimeElapsed", z * $);
            }
            if (A < 0) return e;
            let N = ai(Math.min(Math.max(0, A / q), 1)),
              P = oE(_, N, y),
              L = {},
              B = null;
            return (
              g.length &&
              (B = g.reduce((j, z) => {
                let $ = f[z],
                  U = parseFloat(n[z]) || 0,
                  v = (parseFloat($) - U) * P + U;
                return (j[z] = v), j;
              }, {})),
              (L.current = B),
              (L.position = N),
              N === 1 && ((L.active = !1), (L.complete = !0)),
              (0, ft.merge)(e, L)
            );
          }
          return e;
        }),
        (aE = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case TD:
              return t.payload.ixInstances || Object.freeze({});
            case bD:
              return Object.freeze({});
            case ID: {
              let {
                instanceId: r,
                elementId: n,
                actionItem: i,
                eventId: o,
                eventTarget: a,
                eventStateKey: s,
                actionListId: u,
                groupIndex: f,
                isCarrier: g,
                origin: d,
                destination: h,
                immediate: y,
                verbose: E,
                continuous: _,
                parameterId: q,
                actionGroups: I,
                smoothing: S,
                restingValue: A,
                pluginInstance: N,
                pluginDuration: P,
                instanceDelay: L,
                skipMotion: B,
                skipToValue: j,
              } = t.payload,
                { actionTypeId: z } = i,
                $ = RD(z),
                U = CD($, z),
                O = Object.keys(h).filter(
                  (R) => h[R] != null && typeof h[R] != "string"
                ),
                { easing: v } = i.config;
              return (0, ft.set)(e, r, {
                id: r,
                elementId: n,
                active: !1,
                position: 0,
                start: 0,
                origin: d,
                destination: h,
                destinationKeys: O,
                immediate: y,
                verbose: E,
                current: null,
                actionItem: i,
                actionTypeId: z,
                eventId: o,
                eventTarget: a,
                eventStateKey: s,
                actionListId: u,
                groupIndex: f,
                renderType: $,
                isCarrier: g,
                styleProp: U,
                continuous: _,
                parameterId: q,
                actionGroups: I,
                smoothing: S,
                restingValue: A,
                pluginInstance: N,
                pluginDuration: P,
                instanceDelay: L,
                skipMotion: B,
                skipToValue: j,
                customEasingFn:
                  Array.isArray(v) && v.length === 4 ? xD(v) : void 0,
              });
            }
            case OD: {
              let { instanceId: r, time: n } = t.payload;
              return (0, ft.mergeIn)(e, [r], {
                active: !0,
                complete: !1,
                start: n,
              });
            }
            case AD: {
              let { instanceId: r } = t.payload;
              if (!e[r]) return e;
              let n = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let a = 0; a < o; a++) {
                let s = i[a];
                s !== r && (n[s] = e[s]);
              }
              return n;
            }
            case wD: {
              let r = e,
                n = Object.keys(e),
                { length: i } = n;
              for (let o = 0; o < i; o++) {
                let a = n[o],
                  s = e[a],
                  u = s.continuous ? ND : LD;
                r = (0, ft.set)(r, a, u(s, t));
              }
              return r;
            }
            default:
              return e;
          }
        });
    });
  var PD,
    qD,
    MD,
    uE,
    cE = fe(() => {
      "use strict";
      Le();
      ({
        IX2_RAW_DATA_IMPORTED: PD,
        IX2_SESSION_STOPPED: qD,
        IX2_PARAMETER_CHANGED: MD,
      } = ye),
        (uE = (e = {}, t) => {
          switch (t.type) {
            case PD:
              return t.payload.ixParameters || {};
            case qD:
              return {};
            case MD: {
              let { key: r, value: n } = t.payload;
              return (e[r] = n), e;
            }
            default:
              return e;
          }
        });
    });
  var dE = {};
  Ce(dE, { default: () => FD });
  var lE,
    fE,
    DD,
    FD,
    pE = fe(() => {
      "use strict";
      lE = oe(Xo());
      Af();
      jf();
      Yf();
      fE = oe(Lt());
      sE();
      cE();
      ({ ixElements: DD } = fE.IX2ElementsReducer),
        (FD = (0, lE.combineReducers)({
          ixData: Of,
          ixRequest: Bf,
          ixSession: Kf,
          ixElements: DD,
          ixInstances: aE,
          ixParameters: uE,
        }));
    });
  var vE = c((MB, gE) => {
    var GD = Et(),
      UD = _e(),
      VD = ut(),
      HD = "[object String]";
    function XD(e) {
      return typeof e == "string" || (!UD(e) && VD(e) && GD(e) == HD);
    }
    gE.exports = XD;
  });
  var EE = c((DB, hE) => {
    var kD = ha(),
      WD = kD("length");
    hE.exports = WD;
  });
  var mE = c((FB, yE) => {
    var BD = "\\ud800-\\udfff",
      jD = "\\u0300-\\u036f",
      zD = "\\ufe20-\\ufe2f",
      KD = "\\u20d0-\\u20ff",
      YD = jD + zD + KD,
      $D = "\\ufe0e\\ufe0f",
      QD = "\\u200d",
      ZD = RegExp("[" + QD + BD + YD + $D + "]");
    function JD(e) {
      return ZD.test(e);
    }
    yE.exports = JD;
  });
  var SE = c((GB, xE) => {
    var TE = "\\ud800-\\udfff",
      eF = "\\u0300-\\u036f",
      tF = "\\ufe20-\\ufe2f",
      rF = "\\u20d0-\\u20ff",
      nF = eF + tF + rF,
      iF = "\\ufe0e\\ufe0f",
      oF = "[" + TE + "]",
      Ba = "[" + nF + "]",
      ja = "\\ud83c[\\udffb-\\udfff]",
      aF = "(?:" + Ba + "|" + ja + ")",
      bE = "[^" + TE + "]",
      IE = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      OE = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      sF = "\\u200d",
      AE = aF + "?",
      wE = "[" + iF + "]?",
      uF = "(?:" + sF + "(?:" + [bE, IE, OE].join("|") + ")" + wE + AE + ")*",
      cF = wE + AE + uF,
      lF = "(?:" + [bE + Ba + "?", Ba, IE, OE, oF].join("|") + ")",
      _E = RegExp(ja + "(?=" + ja + ")|" + lF + cF, "g");
    function fF(e) {
      for (var t = (_E.lastIndex = 0); _E.test(e);) ++t;
      return t;
    }
    xE.exports = fF;
  });
  var CE = c((UB, RE) => {
    var dF = EE(),
      pF = mE(),
      gF = SE();
    function vF(e) {
      return pF(e) ? gF(e) : dF(e);
    }
    RE.exports = vF;
  });
  var LE = c((VB, NE) => {
    var hF = Un(),
      EF = Vn(),
      yF = xt(),
      mF = vE(),
      _F = CE(),
      TF = "[object Map]",
      bF = "[object Set]";
    function IF(e) {
      if (e == null) return 0;
      if (yF(e)) return mF(e) ? _F(e) : e.length;
      var t = EF(e);
      return t == TF || t == bF ? e.size : hF(e).length;
    }
    NE.exports = IF;
  });
  var qE = c((HB, PE) => {
    var OF = "Expected a function";
    function AF(e) {
      if (typeof e != "function") throw new TypeError(OF);
      return function () {
        var t = arguments;
        switch (t.length) {
          case 0:
            return !e.call(this);
          case 1:
            return !e.call(this, t[0]);
          case 2:
            return !e.call(this, t[0], t[1]);
          case 3:
            return !e.call(this, t[0], t[1], t[2]);
        }
        return !e.apply(this, t);
      };
    }
    PE.exports = AF;
  });
  var za = c((XB, ME) => {
    var wF = yt(),
      xF = (function () {
        try {
          var e = wF(Object, "defineProperty");
          return e({}, "", {}), e;
        } catch { }
      })();
    ME.exports = xF;
  });
  var Ka = c((kB, FE) => {
    var DE = za();
    function SF(e, t, r) {
      t == "__proto__" && DE
        ? DE(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
        : (e[t] = r);
    }
    FE.exports = SF;
  });
  var UE = c((WB, GE) => {
    var RF = Ka(),
      CF = Rn(),
      NF = Object.prototype,
      LF = NF.hasOwnProperty;
    function PF(e, t, r) {
      var n = e[t];
      (!(LF.call(e, t) && CF(n, r)) || (r === void 0 && !(t in e))) &&
        RF(e, t, r);
    }
    GE.exports = PF;
  });
  var XE = c((BB, HE) => {
    var qF = UE(),
      MF = Fr(),
      DF = Mn(),
      VE = nt(),
      FF = Qt();
    function GF(e, t, r, n) {
      if (!VE(e)) return e;
      t = MF(t, e);
      for (var i = -1, o = t.length, a = o - 1, s = e; s != null && ++i < o;) {
        var u = FF(t[i]),
          f = r;
        if (u === "__proto__" || u === "constructor" || u === "prototype")
          return e;
        if (i != a) {
          var g = s[u];
          (f = n ? n(g, u, s) : void 0),
            f === void 0 && (f = VE(g) ? g : DF(t[i + 1]) ? [] : {});
        }
        qF(s, u, f), (s = s[u]);
      }
      return e;
    }
    HE.exports = GF;
  });
  var WE = c((jB, kE) => {
    var UF = kn(),
      VF = XE(),
      HF = Fr();
    function XF(e, t, r) {
      for (var n = -1, i = t.length, o = {}; ++n < i;) {
        var a = t[n],
          s = UF(e, a);
        r(s, a) && VF(o, HF(a, e), s);
      }
      return o;
    }
    kE.exports = XF;
  });
  var jE = c((zB, BE) => {
    var kF = Pn(),
      WF = Ro(),
      BF = ta(),
      jF = ea(),
      zF = Object.getOwnPropertySymbols,
      KF = zF
        ? function (e) {
          for (var t = []; e;) kF(t, BF(e)), (e = WF(e));
          return t;
        }
        : jF;
    BE.exports = KF;
  });
  var KE = c((KB, zE) => {
    function YF(e) {
      var t = [];
      if (e != null) for (var r in Object(e)) t.push(r);
      return t;
    }
    zE.exports = YF;
  });
  var $E = c((YB, YE) => {
    var $F = nt(),
      QF = Gn(),
      ZF = KE(),
      JF = Object.prototype,
      e2 = JF.hasOwnProperty;
    function t2(e) {
      if (!$F(e)) return ZF(e);
      var t = QF(e),
        r = [];
      for (var n in e)
        (n == "constructor" && (t || !e2.call(e, n))) || r.push(n);
      return r;
    }
    YE.exports = t2;
  });
  var ZE = c(($B, QE) => {
    var r2 = na(),
      n2 = $E(),
      i2 = xt();
    function o2(e) {
      return i2(e) ? r2(e, !0) : n2(e);
    }
    QE.exports = o2;
  });
  var ey = c((QB, JE) => {
    var a2 = Jo(),
      s2 = jE(),
      u2 = ZE();
    function c2(e) {
      return a2(e, u2, s2);
    }
    JE.exports = c2;
  });
  var ry = c((ZB, ty) => {
    var l2 = va(),
      f2 = mt(),
      d2 = WE(),
      p2 = ey();
    function g2(e, t) {
      if (e == null) return {};
      var r = l2(p2(e), function (n) {
        return [n];
      });
      return (
        (t = f2(t)),
        d2(e, r, function (n, i) {
          return t(n, i[0]);
        })
      );
    }
    ty.exports = g2;
  });
  var iy = c((JB, ny) => {
    var v2 = mt(),
      h2 = qE(),
      E2 = ry();
    function y2(e, t) {
      return E2(e, h2(v2(t)));
    }
    ny.exports = y2;
  });
  var ay = c((ej, oy) => {
    var m2 = Un(),
      _2 = Vn(),
      T2 = Nr(),
      b2 = _e(),
      I2 = xt(),
      O2 = qn(),
      A2 = Gn(),
      w2 = Fn(),
      x2 = "[object Map]",
      S2 = "[object Set]",
      R2 = Object.prototype,
      C2 = R2.hasOwnProperty;
    function N2(e) {
      if (e == null) return !0;
      if (
        I2(e) &&
        (b2(e) ||
          typeof e == "string" ||
          typeof e.splice == "function" ||
          O2(e) ||
          w2(e) ||
          T2(e))
      )
        return !e.length;
      var t = _2(e);
      if (t == x2 || t == S2) return !e.size;
      if (A2(e)) return !m2(e).length;
      for (var r in e) if (C2.call(e, r)) return !1;
      return !0;
    }
    oy.exports = N2;
  });
  var uy = c((tj, sy) => {
    var L2 = Ka(),
      P2 = Ma(),
      q2 = mt();
    function M2(e, t) {
      var r = {};
      return (
        (t = q2(t, 3)),
        P2(e, function (n, i, o) {
          L2(r, i, t(n, i, o));
        }),
        r
      );
    }
    sy.exports = M2;
  });
  var ly = c((rj, cy) => {
    function D2(e, t) {
      for (
        var r = -1, n = e == null ? 0 : e.length;
        ++r < n && t(e[r], r, e) !== !1;

      );
      return e;
    }
    cy.exports = D2;
  });
  var dy = c((nj, fy) => {
    var F2 = Bn();
    function G2(e) {
      return typeof e == "function" ? e : F2;
    }
    fy.exports = G2;
  });
  var gy = c((ij, py) => {
    var U2 = ly(),
      V2 = Da(),
      H2 = dy(),
      X2 = _e();
    function k2(e, t) {
      var r = X2(e) ? U2 : V2;
      return r(e, H2(t));
    }
    py.exports = k2;
  });
  var hy = c((oj, vy) => {
    var W2 = We(),
      B2 = function () {
        return W2.Date.now();
      };
    vy.exports = B2;
  });
  var my = c((aj, yy) => {
    var j2 = nt(),
      Ya = hy(),
      Ey = jn(),
      z2 = "Expected a function",
      K2 = Math.max,
      Y2 = Math.min;
    function $2(e, t, r) {
      var n,
        i,
        o,
        a,
        s,
        u,
        f = 0,
        g = !1,
        d = !1,
        h = !0;
      if (typeof e != "function") throw new TypeError(z2);
      (t = Ey(t) || 0),
        j2(r) &&
        ((g = !!r.leading),
          (d = "maxWait" in r),
          (o = d ? K2(Ey(r.maxWait) || 0, t) : o),
          (h = "trailing" in r ? !!r.trailing : h));
      function y(L) {
        var B = n,
          j = i;
        return (n = i = void 0), (f = L), (a = e.apply(j, B)), a;
      }
      function E(L) {
        return (f = L), (s = setTimeout(I, t)), g ? y(L) : a;
      }
      function _(L) {
        var B = L - u,
          j = L - f,
          z = t - B;
        return d ? Y2(z, o - j) : z;
      }
      function q(L) {
        var B = L - u,
          j = L - f;
        return u === void 0 || B >= t || B < 0 || (d && j >= o);
      }
      function I() {
        var L = Ya();
        if (q(L)) return S(L);
        s = setTimeout(I, _(L));
      }
      function S(L) {
        return (s = void 0), h && n ? y(L) : ((n = i = void 0), a);
      }
      function A() {
        s !== void 0 && clearTimeout(s), (f = 0), (n = u = i = s = void 0);
      }
      function N() {
        return s === void 0 ? a : S(Ya());
      }
      function P() {
        var L = Ya(),
          B = q(L);
        if (((n = arguments), (i = this), (u = L), B)) {
          if (s === void 0) return E(u);
          if (d) return clearTimeout(s), (s = setTimeout(I, t)), y(u);
        }
        return s === void 0 && (s = setTimeout(I, t)), a;
      }
      return (P.cancel = A), (P.flush = N), P;
    }
    yy.exports = $2;
  });
  var Ty = c((sj, _y) => {
    var Q2 = my(),
      Z2 = nt(),
      J2 = "Expected a function";
    function eG(e, t, r) {
      var n = !0,
        i = !0;
      if (typeof e != "function") throw new TypeError(J2);
      return (
        Z2(r) &&
        ((n = "leading" in r ? !!r.leading : n),
          (i = "trailing" in r ? !!r.trailing : i)),
        Q2(e, t, { leading: n, maxWait: t, trailing: i })
      );
    }
    _y.exports = eG;
  });
  var Iy = {};
  Ce(Iy, {
    actionListPlaybackChanged: () => cr,
    animationFrameChanged: () => ci,
    clearRequested: () => AG,
    elementStateChanged: () => ns,
    eventListenerAdded: () => ui,
    eventStateChanged: () => es,
    instanceAdded: () => ts,
    instanceRemoved: () => rs,
    instanceStarted: () => li,
    mediaQueriesDefined: () => os,
    parameterChanged: () => ur,
    playbackRequested: () => IG,
    previewRequested: () => bG,
    rawDataImported: () => $a,
    sessionInitialized: () => Qa,
    sessionStarted: () => Za,
    sessionStopped: () => Ja,
    stopRequested: () => OG,
    testFrameRendered: () => wG,
    viewportWidthChanged: () => is,
  });
  var by,
    tG,
    rG,
    nG,
    iG,
    oG,
    aG,
    sG,
    uG,
    cG,
    lG,
    fG,
    dG,
    pG,
    gG,
    vG,
    hG,
    EG,
    yG,
    mG,
    _G,
    TG,
    $a,
    Qa,
    Za,
    Ja,
    bG,
    IG,
    OG,
    AG,
    ui,
    wG,
    es,
    ci,
    ur,
    ts,
    li,
    rs,
    ns,
    cr,
    is,
    os,
    fi = fe(() => {
      "use strict";
      Le();
      (by = oe(Lt())),
        ({
          IX2_RAW_DATA_IMPORTED: tG,
          IX2_SESSION_INITIALIZED: rG,
          IX2_SESSION_STARTED: nG,
          IX2_SESSION_STOPPED: iG,
          IX2_PREVIEW_REQUESTED: oG,
          IX2_PLAYBACK_REQUESTED: aG,
          IX2_STOP_REQUESTED: sG,
          IX2_CLEAR_REQUESTED: uG,
          IX2_EVENT_LISTENER_ADDED: cG,
          IX2_TEST_FRAME_RENDERED: lG,
          IX2_EVENT_STATE_CHANGED: fG,
          IX2_ANIMATION_FRAME_CHANGED: dG,
          IX2_PARAMETER_CHANGED: pG,
          IX2_INSTANCE_ADDED: gG,
          IX2_INSTANCE_STARTED: vG,
          IX2_INSTANCE_REMOVED: hG,
          IX2_ELEMENT_STATE_CHANGED: EG,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: yG,
          IX2_VIEWPORT_WIDTH_CHANGED: mG,
          IX2_MEDIA_QUERIES_DEFINED: _G,
        } = ye),
        ({ reifyState: TG } = by.IX2VanillaUtils),
        ($a = (e) => ({ type: tG, payload: { ...TG(e) } })),
        (Qa = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: rG,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        })),
        (Za = () => ({ type: nG })),
        (Ja = () => ({ type: iG })),
        (bG = ({ rawData: e, defer: t }) => ({
          type: oG,
          payload: { defer: t, rawData: e },
        })),
        (IG = ({
          actionTypeId: e = Ne.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: r,
          eventId: n,
          allowEvents: i,
          immediate: o,
          testManual: a,
          verbose: s,
          rawData: u,
        }) => ({
          type: aG,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: r,
            testManual: a,
            eventId: n,
            allowEvents: i,
            immediate: o,
            verbose: s,
            rawData: u,
          },
        })),
        (OG = (e) => ({ type: sG, payload: { actionListId: e } })),
        (AG = () => ({ type: uG })),
        (ui = (e, t) => ({
          type: cG,
          payload: { target: e, listenerParams: t },
        })),
        (wG = (e = 1) => ({ type: lG, payload: { step: e } })),
        (es = (e, t) => ({ type: fG, payload: { stateKey: e, newState: t } })),
        (ci = (e, t) => ({ type: dG, payload: { now: e, parameters: t } })),
        (ur = (e, t) => ({ type: pG, payload: { key: e, value: t } })),
        (ts = (e) => ({ type: gG, payload: { ...e } })),
        (li = (e, t) => ({ type: vG, payload: { instanceId: e, time: t } })),
        (rs = (e) => ({ type: hG, payload: { instanceId: e } })),
        (ns = (e, t, r, n) => ({
          type: EG,
          payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
        })),
        (cr = ({ actionListId: e, isPlaying: t }) => ({
          type: yG,
          payload: { actionListId: e, isPlaying: t },
        })),
        (is = ({ width: e, mediaQueries: t }) => ({
          type: mG,
          payload: { width: e, mediaQueries: t },
        })),
        (os = () => ({ type: _G }));
    });
  var Se = {};
  Ce(Se, {
    elementContains: () => us,
    getChildElements: () => DG,
    getClosestElement: () => Kr,
    getProperty: () => NG,
    getQuerySelector: () => ss,
    getRefType: () => cs,
    getSiblingElements: () => FG,
    getStyle: () => CG,
    getValidDocument: () => PG,
    isSiblingNode: () => MG,
    matchSelector: () => LG,
    queryDocument: () => qG,
    setStyle: () => RG,
  });
  function RG(e, t, r) {
    e.style[t] = r;
  }
  function CG(e, t) {
    return e.style[t];
  }
  function NG(e, t) {
    return e[t];
  }
  function LG(e) {
    return (t) => t[as](e);
  }
  function ss({ id: e, selector: t }) {
    if (e) {
      let r = e;
      if (e.indexOf(Oy) !== -1) {
        let n = e.split(Oy),
          i = n[0];
        if (((r = n[1]), i !== document.documentElement.getAttribute(wy)))
          return null;
      }
      return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
    }
    return t;
  }
  function PG(e) {
    return e == null || e === document.documentElement.getAttribute(wy)
      ? document
      : null;
  }
  function qG(e, t) {
    return Array.prototype.slice.call(
      document.querySelectorAll(t ? e + " " + t : e)
    );
  }
  function us(e, t) {
    return e.contains(t);
  }
  function MG(e, t) {
    return e !== t && e.parentNode === t.parentNode;
  }
  function DG(e) {
    let t = [];
    for (let r = 0, { length: n } = e || []; r < n; r++) {
      let { children: i } = e[r],
        { length: o } = i;
      if (o) for (let a = 0; a < o; a++) t.push(i[a]);
    }
    return t;
  }
  function FG(e = []) {
    let t = [],
      r = [];
    for (let n = 0, { length: i } = e; n < i; n++) {
      let { parentNode: o } = e[n];
      if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1)
        continue;
      r.push(o);
      let a = o.firstElementChild;
      for (; a != null;)
        e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
    }
    return t;
  }
  function cs(e) {
    return e != null && typeof e == "object"
      ? e instanceof Element
        ? xG
        : SG
      : null;
  }
  var Ay,
    as,
    Oy,
    xG,
    SG,
    wy,
    Kr,
    xy = fe(() => {
      "use strict";
      Ay = oe(Lt());
      Le();
      ({ ELEMENT_MATCHES: as } = Ay.IX2BrowserSupport),
        ({
          IX2_ID_DELIMITER: Oy,
          HTML_ELEMENT: xG,
          PLAIN_OBJECT: SG,
          WF_PAGE: wy,
        } = Ie);
      Kr = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
          if (!document.documentElement.contains(e)) return null;
          let r = e;
          do {
            if (r[as] && r[as](t)) return r;
            r = r.parentNode;
          } while (r != null);
          return null;
        };
    });
  var ls = c((lj, Ry) => {
    var GG = nt(),
      Sy = Object.create,
      UG = (function () {
        function e() { }
        return function (t) {
          if (!GG(t)) return {};
          if (Sy) return Sy(t);
          e.prototype = t;
          var r = new e();
          return (e.prototype = void 0), r;
        };
      })();
    Ry.exports = UG;
  });
  var di = c((fj, Cy) => {
    function VG() { }
    Cy.exports = VG;
  });
  var gi = c((dj, Ny) => {
    var HG = ls(),
      XG = di();
    function pi(e, t) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__chain__ = !!t),
        (this.__index__ = 0),
        (this.__values__ = void 0);
    }
    pi.prototype = HG(XG.prototype);
    pi.prototype.constructor = pi;
    Ny.exports = pi;
  });
  var My = c((pj, qy) => {
    var Ly = Vt(),
      kG = Nr(),
      WG = _e(),
      Py = Ly ? Ly.isConcatSpreadable : void 0;
    function BG(e) {
      return WG(e) || kG(e) || !!(Py && e && e[Py]);
    }
    qy.exports = BG;
  });
  var Gy = c((gj, Fy) => {
    var jG = Pn(),
      zG = My();
    function Dy(e, t, r, n, i) {
      var o = -1,
        a = e.length;
      for (r || (r = zG), i || (i = []); ++o < a;) {
        var s = e[o];
        t > 0 && r(s)
          ? t > 1
            ? Dy(s, t - 1, r, n, i)
            : jG(i, s)
          : n || (i[i.length] = s);
      }
      return i;
    }
    Fy.exports = Dy;
  });
  var Vy = c((vj, Uy) => {
    var KG = Gy();
    function YG(e) {
      var t = e == null ? 0 : e.length;
      return t ? KG(e, 1) : [];
    }
    Uy.exports = YG;
  });
  var Xy = c((hj, Hy) => {
    function $G(e, t, r) {
      switch (r.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, r[0]);
        case 2:
          return e.call(t, r[0], r[1]);
        case 3:
          return e.call(t, r[0], r[1], r[2]);
      }
      return e.apply(t, r);
    }
    Hy.exports = $G;
  });
  var By = c((Ej, Wy) => {
    var QG = Xy(),
      ky = Math.max;
    function ZG(e, t, r) {
      return (
        (t = ky(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var n = arguments, i = -1, o = ky(n.length - t, 0), a = Array(o);
            ++i < o;

          )
            a[i] = n[t + i];
          i = -1;
          for (var s = Array(t + 1); ++i < t;) s[i] = n[i];
          return (s[t] = r(a)), QG(e, this, s);
        }
      );
    }
    Wy.exports = ZG;
  });
  var zy = c((yj, jy) => {
    function JG(e) {
      return function () {
        return e;
      };
    }
    jy.exports = JG;
  });
  var $y = c((mj, Yy) => {
    var eU = zy(),
      Ky = za(),
      tU = Bn(),
      rU = Ky
        ? function (e, t) {
          return Ky(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: eU(t),
            writable: !0,
          });
        }
        : tU;
    Yy.exports = rU;
  });
  var Zy = c((_j, Qy) => {
    var nU = 800,
      iU = 16,
      oU = Date.now;
    function aU(e) {
      var t = 0,
        r = 0;
      return function () {
        var n = oU(),
          i = iU - (n - r);
        if (((r = n), i > 0)) {
          if (++t >= nU) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    Qy.exports = aU;
  });
  var em = c((Tj, Jy) => {
    var sU = $y(),
      uU = Zy(),
      cU = uU(sU);
    Jy.exports = cU;
  });
  var rm = c((bj, tm) => {
    var lU = Vy(),
      fU = By(),
      dU = em();
    function pU(e) {
      return dU(fU(e, void 0, lU), e + "");
    }
    tm.exports = pU;
  });
  var om = c((Ij, im) => {
    var nm = ia(),
      gU = nm && new nm();
    im.exports = gU;
  });
  var sm = c((Oj, am) => {
    function vU() { }
    am.exports = vU;
  });
  var fs = c((Aj, cm) => {
    var um = om(),
      hU = sm(),
      EU = um
        ? function (e) {
          return um.get(e);
        }
        : hU;
    cm.exports = EU;
  });
  var fm = c((wj, lm) => {
    var yU = {};
    lm.exports = yU;
  });
  var ds = c((xj, pm) => {
    var dm = fm(),
      mU = Object.prototype,
      _U = mU.hasOwnProperty;
    function TU(e) {
      for (
        var t = e.name + "", r = dm[t], n = _U.call(dm, t) ? r.length : 0;
        n--;

      ) {
        var i = r[n],
          o = i.func;
        if (o == null || o == e) return i.name;
      }
      return t;
    }
    pm.exports = TU;
  });
  var hi = c((Sj, gm) => {
    var bU = ls(),
      IU = di(),
      OU = 4294967295;
    function vi(e) {
      (this.__wrapped__ = e),
        (this.__actions__ = []),
        (this.__dir__ = 1),
        (this.__filtered__ = !1),
        (this.__iteratees__ = []),
        (this.__takeCount__ = OU),
        (this.__views__ = []);
    }
    vi.prototype = bU(IU.prototype);
    vi.prototype.constructor = vi;
    gm.exports = vi;
  });
  var hm = c((Rj, vm) => {
    function AU(e, t) {
      var r = -1,
        n = e.length;
      for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
      return t;
    }
    vm.exports = AU;
  });
  var ym = c((Cj, Em) => {
    var wU = hi(),
      xU = gi(),
      SU = hm();
    function RU(e) {
      if (e instanceof wU) return e.clone();
      var t = new xU(e.__wrapped__, e.__chain__);
      return (
        (t.__actions__ = SU(e.__actions__)),
        (t.__index__ = e.__index__),
        (t.__values__ = e.__values__),
        t
      );
    }
    Em.exports = RU;
  });
  var Tm = c((Nj, _m) => {
    var CU = hi(),
      mm = gi(),
      NU = di(),
      LU = _e(),
      PU = ut(),
      qU = ym(),
      MU = Object.prototype,
      DU = MU.hasOwnProperty;
    function Ei(e) {
      if (PU(e) && !LU(e) && !(e instanceof CU)) {
        if (e instanceof mm) return e;
        if (DU.call(e, "__wrapped__")) return qU(e);
      }
      return new mm(e);
    }
    Ei.prototype = NU.prototype;
    Ei.prototype.constructor = Ei;
    _m.exports = Ei;
  });
  var Im = c((Lj, bm) => {
    var FU = hi(),
      GU = fs(),
      UU = ds(),
      VU = Tm();
    function HU(e) {
      var t = UU(e),
        r = VU[t];
      if (typeof r != "function" || !(t in FU.prototype)) return !1;
      if (e === r) return !0;
      var n = GU(r);
      return !!n && e === n[0];
    }
    bm.exports = HU;
  });
  var xm = c((Pj, wm) => {
    var Om = gi(),
      XU = rm(),
      kU = fs(),
      ps = ds(),
      WU = _e(),
      Am = Im(),
      BU = "Expected a function",
      jU = 8,
      zU = 32,
      KU = 128,
      YU = 256;
    function $U(e) {
      return XU(function (t) {
        var r = t.length,
          n = r,
          i = Om.prototype.thru;
        for (e && t.reverse(); n--;) {
          var o = t[n];
          if (typeof o != "function") throw new TypeError(BU);
          if (i && !a && ps(o) == "wrapper") var a = new Om([], !0);
        }
        for (n = a ? n : r; ++n < r;) {
          o = t[n];
          var s = ps(o),
            u = s == "wrapper" ? kU(o) : void 0;
          u &&
            Am(u[0]) &&
            u[1] == (KU | jU | zU | YU) &&
            !u[4].length &&
            u[9] == 1
            ? (a = a[ps(u[0])].apply(a, u[3]))
            : (a = o.length == 1 && Am(o) ? a[s]() : a.thru(o));
        }
        return function () {
          var f = arguments,
            g = f[0];
          if (a && f.length == 1 && WU(g)) return a.plant(g).value();
          for (var d = 0, h = r ? t[d].apply(this, f) : g; ++d < r;)
            h = t[d].call(this, h);
          return h;
        };
      });
    }
    wm.exports = $U;
  });
  var Rm = c((qj, Sm) => {
    var QU = xm(),
      ZU = QU();
    Sm.exports = ZU;
  });
  var Nm = c((Mj, Cm) => {
    function JU(e, t, r) {
      return (
        e === e &&
        (r !== void 0 && (e = e <= r ? e : r),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    Cm.exports = JU;
  });
  var Pm = c((Dj, Lm) => {
    var eV = Nm(),
      gs = jn();
    function tV(e, t, r) {
      return (
        r === void 0 && ((r = t), (t = void 0)),
        r !== void 0 && ((r = gs(r)), (r = r === r ? r : 0)),
        t !== void 0 && ((t = gs(t)), (t = t === t ? t : 0)),
        eV(gs(e), t, r)
      );
    }
    Lm.exports = tV;
  });
  var Xm,
    km,
    Wm,
    Bm,
    rV,
    nV,
    iV,
    oV,
    aV,
    sV,
    uV,
    cV,
    lV,
    fV,
    dV,
    pV,
    gV,
    vV,
    hV,
    jm,
    zm,
    EV,
    yV,
    mV,
    Km,
    _V,
    TV,
    Ym,
    bV,
    vs,
    $m,
    qm,
    Mm,
    Qm,
    $r,
    IV,
    at,
    Zm,
    OV,
    qe,
    ze,
    Qr,
    Jm,
    hs,
    Dm,
    Es,
    AV,
    Yr,
    wV,
    xV,
    SV,
    e_,
    Fm,
    RV,
    Gm,
    CV,
    NV,
    LV,
    Um,
    yi,
    mi,
    Vm,
    Hm,
    t_,
    r_ = fe(() => {
      "use strict";
      (Xm = oe(Rm())), (km = oe(Wn())), (Wm = oe(Pm()));
      Le();
      ys();
      fi();
      (Bm = oe(Lt())),
        ({
          MOUSE_CLICK: rV,
          MOUSE_SECOND_CLICK: nV,
          MOUSE_DOWN: iV,
          MOUSE_UP: oV,
          MOUSE_OVER: aV,
          MOUSE_OUT: sV,
          DROPDOWN_CLOSE: uV,
          DROPDOWN_OPEN: cV,
          SLIDER_ACTIVE: lV,
          SLIDER_INACTIVE: fV,
          TAB_ACTIVE: dV,
          TAB_INACTIVE: pV,
          NAVBAR_CLOSE: gV,
          NAVBAR_OPEN: vV,
          MOUSE_MOVE: hV,
          PAGE_SCROLL_DOWN: jm,
          SCROLL_INTO_VIEW: zm,
          SCROLL_OUT_OF_VIEW: EV,
          PAGE_SCROLL_UP: yV,
          SCROLLING_IN_VIEW: mV,
          PAGE_FINISH: Km,
          ECOMMERCE_CART_CLOSE: _V,
          ECOMMERCE_CART_OPEN: TV,
          PAGE_START: Ym,
          PAGE_SCROLL: bV,
        } = Be),
        (vs = "COMPONENT_ACTIVE"),
        ($m = "COMPONENT_INACTIVE"),
        ({ COLON_DELIMITER: qm } = Ie),
        ({ getNamespacedParameterId: Mm } = Bm.IX2VanillaUtils),
        (Qm = (e) => (t) => typeof t == "object" && e(t) ? !0 : t),
        ($r = Qm(({ element: e, nativeEvent: t }) => e === t.target)),
        (IV = Qm(({ element: e, nativeEvent: t }) => e.contains(t.target))),
        (at = (0, Xm.default)([$r, IV])),
        (Zm = (e, t) => {
          if (t) {
            let { ixData: r } = e.getState(),
              { events: n } = r,
              i = n[t];
            if (i && !AV[i.eventTypeId]) return i;
          }
          return null;
        }),
        (OV = ({ store: e, event: t }) => {
          let { action: r } = t,
            { autoStopEventId: n } = r.config;
          return !!Zm(e, n);
        }),
        (qe = ({ store: e, event: t, element: r, eventStateKey: n }, i) => {
          let { action: o, id: a } = t,
            { actionListId: s, autoStopEventId: u } = o.config,
            f = Zm(e, u);
          return (
            f &&
            lr({
              store: e,
              eventId: u,
              eventTarget: r,
              eventStateKey: u + qm + n.split(qm)[1],
              actionListId: (0, km.default)(f, "action.config.actionListId"),
            }),
            lr({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            Zr({
              store: e,
              eventId: a,
              eventTarget: r,
              eventStateKey: n,
              actionListId: s,
            }),
            i
          );
        }),
        (ze = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n),
        (Qr = { handler: ze(at, qe) }),
        (Jm = { ...Qr, types: [vs, $m].join(" ") }),
        (hs = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ]),
        (Dm = "mouseover mouseout"),
        (Es = { types: hs }),
        (AV = { PAGE_START: Ym, PAGE_FINISH: Km }),
        (Yr = (() => {
          let e = window.pageXOffset !== void 0,
            r =
              document.compatMode === "CSS1Compat"
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : r.scrollLeft,
            scrollTop: e ? window.pageYOffset : r.scrollTop,
            stiffScrollTop: (0, Wm.default)(
              e ? window.pageYOffset : r.scrollTop,
              0,
              r.scrollHeight - window.innerHeight
            ),
            scrollWidth: r.scrollWidth,
            scrollHeight: r.scrollHeight,
            clientWidth: r.clientWidth,
            clientHeight: r.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })()),
        (wV = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          )),
        (xV = ({ element: e, nativeEvent: t }) => {
          let { type: r, target: n, relatedTarget: i } = t,
            o = e.contains(n);
          if (r === "mouseover" && o) return !0;
          let a = e.contains(i);
          return !!(r === "mouseout" && o && a);
        }),
        (SV = (e) => {
          let {
            element: t,
            event: { config: r },
          } = e,
            { clientWidth: n, clientHeight: i } = Yr(),
            o = r.scrollOffsetValue,
            u = r.scrollOffsetUnit === "PX" ? o : (i * (o || 0)) / 100;
          return wV(t.getBoundingClientRect(), {
            left: 0,
            top: u,
            right: n,
            bottom: i - u,
          });
        }),
        (e_ = (e) => (t, r) => {
          let { type: n } = t.nativeEvent,
            i = [vs, $m].indexOf(n) !== -1 ? n === vs : r.isActive,
            o = { ...r, isActive: i };
          return ((!r || o.isActive !== r.isActive) && e(t, o)) || o;
        }),
        (Fm = (e) => (t, r) => {
          let n = { elementHovered: xV(t) };
          return (
            ((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
              e(t, n)) ||
            n
          );
        }),
        (RV = (e) => (t, r) => {
          let n = { ...r, elementVisible: SV(t) };
          return (
            ((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
              e(t, n)) ||
            n
          );
        }),
        (Gm =
          (e) =>
            (t, r = {}) => {
              let { stiffScrollTop: n, scrollHeight: i, innerHeight: o } = Yr(),
                {
                  event: { config: a, eventTypeId: s },
                } = t,
                { scrollOffsetValue: u, scrollOffsetUnit: f } = a,
                g = f === "PX",
                d = i - o,
                h = Number((n / d).toFixed(2));
              if (r && r.percentTop === h) return r;
              let y = (g ? u : (o * (u || 0)) / 100) / d,
                E,
                _,
                q = 0;
              r &&
                ((E = h > r.percentTop),
                  (_ = r.scrollingDown !== E),
                  (q = _ ? h : r.anchorTop));
              let I = s === jm ? h >= q + y : h <= q - y,
                S = {
                  ...r,
                  percentTop: h,
                  inBounds: I,
                  anchorTop: q,
                  scrollingDown: E,
                };
              return (r && I && (_ || S.inBounds !== r.inBounds) && e(t, S)) || S;
            }),
        (CV = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom),
        (NV = (e) => (t, r) => {
          let n = { finished: document.readyState === "complete" };
          return n.finished && !(r && r.finshed) && e(t), n;
        }),
        (LV = (e) => (t, r) => {
          let n = { started: !0 };
          return r || e(t), n;
        }),
        (Um =
          (e) =>
            (t, r = { clickCount: 0 }) => {
              let n = { clickCount: (r.clickCount % 2) + 1 };
              return (n.clickCount !== r.clickCount && e(t, n)) || n;
            }),
        (yi = (e = !0) => ({
          ...Jm,
          handler: ze(
            e ? at : $r,
            e_((t, r) => (r.isActive ? Qr.handler(t, r) : r))
          ),
        })),
        (mi = (e = !0) => ({
          ...Jm,
          handler: ze(
            e ? at : $r,
            e_((t, r) => (r.isActive ? r : Qr.handler(t, r)))
          ),
        })),
        (Vm = {
          ...Es,
          handler: RV((e, t) => {
            let { elementVisible: r } = t,
              { event: n, store: i } = e,
              { ixData: o } = i.getState(),
              { events: a } = o;
            return !a[n.action.config.autoStopEventId] && t.triggered
              ? t
              : (n.eventTypeId === zm) === r
                ? (qe(e), { ...t, triggered: !0 })
                : t;
          }),
        }),
        (Hm = 0.05),
        (t_ = {
          [lV]: yi(),
          [fV]: mi(),
          [cV]: yi(),
          [uV]: mi(),
          [vV]: yi(!1),
          [gV]: mi(!1),
          [dV]: yi(),
          [pV]: mi(),
          [TV]: { types: "ecommerce-cart-open", handler: ze(at, qe) },
          [_V]: { types: "ecommerce-cart-close", handler: ze(at, qe) },
          [rV]: {
            types: "click",
            handler: ze(
              at,
              Um((e, { clickCount: t }) => {
                OV(e) ? t === 1 && qe(e) : qe(e);
              })
            ),
          },
          [nV]: {
            types: "click",
            handler: ze(
              at,
              Um((e, { clickCount: t }) => {
                t === 2 && qe(e);
              })
            ),
          },
          [iV]: { ...Qr, types: "mousedown" },
          [oV]: { ...Qr, types: "mouseup" },
          [aV]: {
            types: Dm,
            handler: ze(
              at,
              Fm((e, t) => {
                t.elementHovered && qe(e);
              })
            ),
          },
          [sV]: {
            types: Dm,
            handler: ze(
              at,
              Fm((e, t) => {
                t.elementHovered || qe(e);
              })
            ),
          },
          [hV]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: r,
                nativeEvent: n,
                eventStateKey: i,
              },
              o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                basedOn: a,
                selectedAxis: s,
                continuousParameterGroupId: u,
                reverse: f,
                restingState: g = 0,
              } = r,
                {
                  clientX: d = o.clientX,
                  clientY: h = o.clientY,
                  pageX: y = o.pageX,
                  pageY: E = o.pageY,
                } = n,
                _ = s === "X_AXIS",
                q = n.type === "mouseout",
                I = g / 100,
                S = u,
                A = !1;
              switch (a) {
                case rt.VIEWPORT: {
                  I = _
                    ? Math.min(d, window.innerWidth) / window.innerWidth
                    : Math.min(h, window.innerHeight) / window.innerHeight;
                  break;
                }
                case rt.PAGE: {
                  let {
                    scrollLeft: N,
                    scrollTop: P,
                    scrollWidth: L,
                    scrollHeight: B,
                  } = Yr();
                  I = _ ? Math.min(N + y, L) / L : Math.min(P + E, B) / B;
                  break;
                }
                case rt.ELEMENT:
                default: {
                  S = Mm(i, u);
                  let N = n.type.indexOf("mouse") === 0;
                  if (N && at({ element: t, nativeEvent: n }) !== !0) break;
                  let P = t.getBoundingClientRect(),
                    { left: L, top: B, width: j, height: z } = P;
                  if (!N && !CV({ left: d, top: h }, P)) break;
                  (A = !0), (I = _ ? (d - L) / j : (h - B) / z);
                  break;
                }
              }
              return (
                q && (I > 1 - Hm || I < Hm) && (I = Math.round(I)),
                (a !== rt.ELEMENT || A || A !== o.elementHovered) &&
                ((I = f ? 1 - I : I), e.dispatch(ur(S, I))),
                {
                  elementHovered: A,
                  clientX: d,
                  clientY: h,
                  pageX: y,
                  pageY: E,
                }
              );
            },
          },
          [bV]: {
            types: hs,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: r, reverse: n } = t,
                { scrollTop: i, scrollHeight: o, clientHeight: a } = Yr(),
                s = i / (o - a);
              (s = n ? 1 - s : s), e.dispatch(ur(r, s));
            },
          },
          [mV]: {
            types: hs,
            handler: (
              { element: e, store: t, eventConfig: r, eventStateKey: n },
              i = { scrollPercent: 0 }
            ) => {
              let {
                scrollLeft: o,
                scrollTop: a,
                scrollWidth: s,
                scrollHeight: u,
                clientHeight: f,
              } = Yr(),
                {
                  basedOn: g,
                  selectedAxis: d,
                  continuousParameterGroupId: h,
                  startsEntering: y,
                  startsExiting: E,
                  addEndOffset: _,
                  addStartOffset: q,
                  addOffsetValue: I = 0,
                  endOffsetValue: S = 0,
                } = r,
                A = d === "X_AXIS";
              if (g === rt.VIEWPORT) {
                let N = A ? o / s : a / u;
                return (
                  N !== i.scrollPercent && t.dispatch(ur(h, N)),
                  { scrollPercent: N }
                );
              } else {
                let N = Mm(n, h),
                  P = e.getBoundingClientRect(),
                  L = (q ? I : 0) / 100,
                  B = (_ ? S : 0) / 100;
                (L = y ? L : 1 - L), (B = E ? B : 1 - B);
                let j = P.top + Math.min(P.height * L, f),
                  $ = P.top + P.height * B - j,
                  U = Math.min(f + $, u),
                  v = Math.min(Math.max(0, f - j), U) / U;
                return (
                  v !== i.scrollPercent && t.dispatch(ur(N, v)),
                  { scrollPercent: v }
                );
              }
            },
          },
          [zm]: Vm,
          [EV]: Vm,
          [jm]: {
            ...Es,
            handler: Gm((e, t) => {
              t.scrollingDown && qe(e);
            }),
          },
          [yV]: {
            ...Es,
            handler: Gm((e, t) => {
              t.scrollingDown || qe(e);
            }),
          },
          [Km]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: ze($r, NV(qe)),
          },
          [Ym]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: ze($r, LV(qe)),
          },
        });
    });
  var m_ = {};
  Ce(m_, {
    observeRequests: () => ZV,
    startActionGroup: () => Zr,
    startEngine: () => Ai,
    stopActionGroup: () => lr,
    stopAllActionGroups: () => h_,
    stopEngine: () => wi,
  });
  function ZV(e) {
    Pt({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: tH }),
      Pt({ store: e, select: ({ ixRequest: t }) => t.playback, onChange: rH }),
      Pt({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: nH }),
      Pt({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: iH });
  }
  function JV(e) {
    Pt({
      store: e,
      select: ({ ixSession: t }) => t.mediaQueryKey,
      onChange: () => {
        wi(e),
          d_({ store: e, elementApi: Se }),
          Ai({ store: e, allowEvents: !0 }),
          p_();
      },
    });
  }
  function eH(e, t) {
    let r = Pt({
      store: e,
      select: ({ ixSession: n }) => n.tick,
      onChange: (n) => {
        t(n), r();
      },
    });
  }
  function tH({ rawData: e, defer: t }, r) {
    let n = () => {
      Ai({ store: r, rawData: e, allowEvents: !0 }), p_();
    };
    t ? setTimeout(n, 0) : n();
  }
  function p_() {
    document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
  }
  function rH(e, t) {
    let {
      actionTypeId: r,
      actionListId: n,
      actionItemId: i,
      eventId: o,
      allowEvents: a,
      immediate: s,
      testManual: u,
      verbose: f = !0,
    } = e,
      { rawData: g } = e;
    if (n && i && g && s) {
      let d = g.actionLists[n];
      d && (g = HV({ actionList: d, actionItemId: i, rawData: g }));
    }
    if (
      (Ai({ store: t, rawData: g, allowEvents: a, testManual: u }),
        (n && r === Ne.GENERAL_START_ACTION) || ms(r))
    ) {
      lr({ store: t, actionListId: n }),
        v_({ store: t, actionListId: n, eventId: o });
      let d = Zr({
        store: t,
        eventId: o,
        actionListId: n,
        immediate: s,
        verbose: f,
      });
      f && d && t.dispatch(cr({ actionListId: n, isPlaying: !s }));
    }
  }
  function nH({ actionListId: e }, t) {
    e ? lr({ store: t, actionListId: e }) : h_({ store: t }), wi(t);
  }
  function iH(e, t) {
    wi(t), d_({ store: t, elementApi: Se });
  }
  function Ai({ store: e, rawData: t, allowEvents: r, testManual: n }) {
    let { ixSession: i } = e.getState();
    t && e.dispatch($a(t)),
      i.active ||
      (e.dispatch(
        Qa({
          hasBoundaryNodes: !!document.querySelector(Ti),
          reducedMotion:
            document.body.hasAttribute("data-wf-ix-vacation") &&
            window.matchMedia("(prefers-reduced-motion)").matches,
        })
      ),
        r &&
        (lH(e), oH(), e.getState().ixSession.hasDefinedMediaQueries && JV(e)),
        e.dispatch(Za()),
        aH(e, n));
  }
  function oH() {
    let { documentElement: e } = document;
    e.className.indexOf(n_) === -1 && (e.className += ` ${n_}`);
  }
  function aH(e, t) {
    let r = (n) => {
      let { ixSession: i, ixParameters: o } = e.getState();
      i.active &&
        (e.dispatch(ci(n, o)), t ? eH(e, r) : requestAnimationFrame(r));
    };
    r(window.performance.now());
  }
  function wi(e) {
    let { ixSession: t } = e.getState();
    if (t.active) {
      let { eventListeners: r } = t;
      r.forEach(sH), BV(), e.dispatch(Ja());
    }
  }
  function sH({ target: e, listenerParams: t }) {
    e.removeEventListener.apply(e, t);
  }
  function uH({
    store: e,
    eventStateKey: t,
    eventTarget: r,
    eventId: n,
    eventConfig: i,
    actionListId: o,
    parameterGroup: a,
    smoothing: s,
    restingValue: u,
  }) {
    let { ixData: f, ixSession: g } = e.getState(),
      { events: d } = f,
      h = d[n],
      { eventTypeId: y } = h,
      E = {},
      _ = {},
      q = [],
      { continuousActionGroups: I } = a,
      { id: S } = a;
    XV(y, i) && (S = kV(t, S));
    let A = g.hasBoundaryNodes && r ? Kr(r, Ti) : null;
    I.forEach((N) => {
      let { keyframe: P, actionItems: L } = N;
      L.forEach((B) => {
        let { actionTypeId: j } = B,
          { target: z } = B.config;
        if (!z) return;
        let $ = z.boundaryMode ? A : null,
          U = jV(z) + _s + j;
        if (((_[U] = cH(_[U], P, B)), !E[U])) {
          E[U] = !0;
          let { config: O } = B;
          bi({
            config: O,
            event: h,
            eventTarget: r,
            elementRoot: $,
            elementApi: Se,
          }).forEach((v) => {
            q.push({ element: v, key: U });
          });
        }
      });
    }),
      q.forEach(({ element: N, key: P }) => {
        let L = _[P],
          B = (0, dt.default)(L, "[0].actionItems[0]", {}),
          { actionTypeId: j } = B,
          z = Oi(j) ? bs(j)(N, B) : null,
          $ = Ts({ element: N, actionItem: B, elementApi: Se }, z);
        Is({
          store: e,
          element: N,
          eventId: n,
          actionListId: o,
          actionItem: B,
          destination: $,
          continuous: !0,
          parameterId: S,
          actionGroups: L,
          smoothing: s,
          restingValue: u,
          pluginInstance: z,
        });
      });
  }
  function cH(e = [], t, r) {
    let n = [...e],
      i;
    return (
      n.some((o, a) => (o.keyframe === t ? ((i = a), !0) : !1)),
      i == null && ((i = n.length), n.push({ keyframe: t, actionItems: [] })),
      n[i].actionItems.push(r),
      n
    );
  }
  function lH(e) {
    let { ixData: t } = e.getState(),
      { eventTypeMap: r } = t;
    g_(e),
      (0, fr.default)(r, (i, o) => {
        let a = t_[o];
        if (!a) {
          console.warn(`IX2 event type not configured: ${o}`);
          return;
        }
        hH({ logic: a, store: e, events: i });
      });
    let { ixSession: n } = e.getState();
    n.eventListeners.length && dH(e);
  }
  function dH(e) {
    let t = () => {
      g_(e);
    };
    fH.forEach((r) => {
      window.addEventListener(r, t), e.dispatch(ui(window, [r, t]));
    }),
      t();
  }
  function g_(e) {
    let { ixSession: t, ixData: r } = e.getState(),
      n = window.innerWidth;
    if (n !== t.viewportWidth) {
      let { mediaQueries: i } = r;
      e.dispatch(is({ width: n, mediaQueries: i }));
    }
  }
  function hH({ logic: e, store: t, events: r }) {
    EH(r);
    let { types: n, handler: i } = e,
      { ixData: o } = t.getState(),
      { actionLists: a } = o,
      s = pH(r, vH);
    if (!(0, a_.default)(s)) return;
    (0, fr.default)(s, (d, h) => {
      let y = r[h],
        { action: E, id: _, mediaQueries: q = o.mediaQueryKeys } = y,
        { actionListId: I } = E.config;
      zV(q, o.mediaQueryKeys) || t.dispatch(os()),
        E.actionTypeId === Ne.GENERAL_CONTINUOUS_ACTION &&
        (Array.isArray(y.config) ? y.config : [y.config]).forEach((A) => {
          let { continuousParameterGroupId: N } = A,
            P = (0, dt.default)(a, `${I}.continuousParameterGroups`, []),
            L = (0, o_.default)(P, ({ id: z }) => z === N),
            B = (A.smoothing || 0) / 100,
            j = (A.restingState || 0) / 100;
          L &&
            d.forEach((z, $) => {
              let U = _ + _s + $;
              uH({
                store: t,
                eventStateKey: U,
                eventTarget: z,
                eventId: _,
                eventConfig: A,
                actionListId: I,
                parameterGroup: L,
                smoothing: B,
                restingValue: j,
              });
            });
        }),
        (E.actionTypeId === Ne.GENERAL_START_ACTION || ms(E.actionTypeId)) &&
        v_({ store: t, actionListId: I, eventId: _ });
    });
    let u = (d) => {
      let { ixSession: h } = t.getState();
      gH(s, (y, E, _) => {
        let q = r[E],
          I = h.eventState[_],
          { action: S, mediaQueries: A = o.mediaQueryKeys } = q;
        if (!Ii(A, h.mediaQueryKey)) return;
        let N = (P = {}) => {
          let L = i(
            {
              store: t,
              element: y,
              event: q,
              eventConfig: P,
              nativeEvent: d,
              eventStateKey: _,
            },
            I
          );
          KV(L, I) || t.dispatch(es(_, L));
        };
        S.actionTypeId === Ne.GENERAL_CONTINUOUS_ACTION
          ? (Array.isArray(q.config) ? q.config : [q.config]).forEach(N)
          : N();
      });
    },
      f = (0, l_.default)(u, QV),
      g = ({ target: d = document, types: h, throttle: y }) => {
        h.split(" ")
          .filter(Boolean)
          .forEach((E) => {
            let _ = y ? f : u;
            d.addEventListener(E, _), t.dispatch(ui(d, [E, _]));
          });
      };
    Array.isArray(n) ? n.forEach(g) : typeof n == "string" && g(e);
  }
  function EH(e) {
    if (!$V) return;
    let t = {},
      r = "";
    for (let n in e) {
      let { eventTypeId: i, target: o } = e[n],
        a = ss(o);
      t[a] ||
        ((i === Be.MOUSE_CLICK || i === Be.MOUSE_SECOND_CLICK) &&
          ((t[a] = !0),
            (r += a + "{cursor: pointer;touch-action: manipulation;}")));
    }
    if (r) {
      let n = document.createElement("style");
      (n.textContent = r), document.body.appendChild(n);
    }
  }
  function v_({ store: e, actionListId: t, eventId: r }) {
    let { ixData: n, ixSession: i } = e.getState(),
      { actionLists: o, events: a } = n,
      s = a[r],
      u = o[t];
    if (u && u.useFirstGroupAsInitialState) {
      let f = (0, dt.default)(u, "actionItemGroups[0].actionItems", []),
        g = (0, dt.default)(s, "mediaQueries", n.mediaQueryKeys);
      if (!Ii(g, i.mediaQueryKey)) return;
      f.forEach((d) => {
        let { config: h, actionTypeId: y } = d,
          E =
            h?.target?.useEventTarget === !0 && h?.target?.objectId == null
              ? { target: s.target, targets: s.targets }
              : h,
          _ = bi({ config: E, event: s, elementApi: Se }),
          q = Oi(y);
        _.forEach((I) => {
          let S = q ? bs(y)(I, d) : null;
          Is({
            destination: Ts({ element: I, actionItem: d, elementApi: Se }, S),
            immediate: !0,
            store: e,
            element: I,
            eventId: r,
            actionItem: d,
            actionListId: t,
            pluginInstance: S,
          });
        });
      });
    }
  }
  function h_({ store: e }) {
    let { ixInstances: t } = e.getState();
    (0, fr.default)(t, (r) => {
      if (!r.continuous) {
        let { actionListId: n, verbose: i } = r;
        Os(r, e), i && e.dispatch(cr({ actionListId: n, isPlaying: !1 }));
      }
    });
  }
  function lr({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
  }) {
    let { ixInstances: o, ixSession: a } = e.getState(),
      s = a.hasBoundaryNodes && r ? Kr(r, Ti) : null;
    (0, fr.default)(o, (u) => {
      let f = (0, dt.default)(u, "actionItem.config.target.boundaryMode"),
        g = n ? u.eventStateKey === n : !0;
      if (u.actionListId === i && u.eventId === t && g) {
        if (s && f && !us(s, u.element)) return;
        Os(u, e),
          u.verbose && e.dispatch(cr({ actionListId: i, isPlaying: !1 }));
      }
    });
  }
  function Zr({
    store: e,
    eventId: t,
    eventTarget: r,
    eventStateKey: n,
    actionListId: i,
    groupIndex: o = 0,
    immediate: a,
    verbose: s,
  }) {
    let { ixData: u, ixSession: f } = e.getState(),
      { events: g } = u,
      d = g[t] || {},
      { mediaQueries: h = u.mediaQueryKeys } = d,
      y = (0, dt.default)(u, `actionLists.${i}`, {}),
      { actionItemGroups: E, useFirstGroupAsInitialState: _ } = y;
    if (!E || !E.length) return !1;
    o >= E.length && (0, dt.default)(d, "config.loop") && (o = 0),
      o === 0 && _ && o++;
    let I =
      (o === 0 || (o === 1 && _)) && ms(d.action?.actionTypeId)
        ? d.config.delay
        : void 0,
      S = (0, dt.default)(E, [o, "actionItems"], []);
    if (!S.length || !Ii(h, f.mediaQueryKey)) return !1;
    let A = f.hasBoundaryNodes && r ? Kr(r, Ti) : null,
      N = GV(S),
      P = !1;
    return (
      S.forEach((L, B) => {
        let { config: j, actionTypeId: z } = L,
          $ = Oi(z),
          { target: U } = j;
        if (!U) return;
        let O = U.boundaryMode ? A : null;
        bi({
          config: j,
          event: d,
          eventTarget: r,
          elementRoot: O,
          elementApi: Se,
        }).forEach((R, M) => {
          let G = $ ? bs(z)(R, L) : null,
            Q = $ ? YV(z)(R, L) : null;
          P = !0;
          let Z = N === B && M === 0,
            D = UV({ element: R, actionItem: L }),
            k = Ts({ element: R, actionItem: L, elementApi: Se }, G);
          Is({
            store: e,
            element: R,
            actionItem: L,
            eventId: t,
            eventTarget: r,
            eventStateKey: n,
            actionListId: i,
            groupIndex: o,
            isCarrier: Z,
            computedStyle: D,
            destination: k,
            immediate: a,
            verbose: s,
            pluginInstance: G,
            pluginDuration: Q,
            instanceDelay: I,
          });
        });
      }),
      P
    );
  }
  function Is(e) {
    let { store: t, computedStyle: r, ...n } = e,
      {
        element: i,
        actionItem: o,
        immediate: a,
        pluginInstance: s,
        continuous: u,
        restingValue: f,
        eventId: g,
      } = n,
      d = !u,
      h = DV(),
      { ixElements: y, ixSession: E, ixData: _ } = t.getState(),
      q = MV(y, i),
      { refState: I } = y[q] || {},
      S = cs(i),
      A = E.reducedMotion && Bo[o.actionTypeId],
      N;
    if (A && u)
      switch (_.events[g]?.eventTypeId) {
        case Be.MOUSE_MOVE:
        case Be.MOUSE_MOVE_IN_VIEWPORT:
          N = f;
          break;
        default:
          N = 0.5;
          break;
      }
    let P = VV(i, I, r, o, Se, s);
    if (
      (t.dispatch(
        ts({
          instanceId: h,
          elementId: q,
          origin: P,
          refType: S,
          skipMotion: A,
          skipToValue: N,
          ...n,
        })
      ),
        E_(document.body, "ix2-animation-started", h),
        a)
    ) {
      yH(t, h);
      return;
    }
    Pt({ store: t, select: ({ ixInstances: L }) => L[h], onChange: y_ }),
      d && t.dispatch(li(h, E.tick));
  }
  function Os(e, t) {
    E_(document.body, "ix2-animation-stopping", {
      instanceId: e.id,
      state: t.getState(),
    });
    let { elementId: r, actionItem: n } = e,
      { ixElements: i } = t.getState(),
      { ref: o, refType: a } = i[r] || {};
    a === f_ && WV(o, n, Se), t.dispatch(rs(e.id));
  }
  function E_(e, t, r) {
    let n = document.createEvent("CustomEvent");
    n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
  }
  function yH(e, t) {
    let { ixParameters: r } = e.getState();
    e.dispatch(li(t, 0)), e.dispatch(ci(performance.now(), r));
    let { ixInstances: n } = e.getState();
    y_(n[t], e);
  }
  function y_(e, t) {
    let {
      active: r,
      continuous: n,
      complete: i,
      elementId: o,
      actionItem: a,
      actionTypeId: s,
      renderType: u,
      current: f,
      groupIndex: g,
      eventId: d,
      eventTarget: h,
      eventStateKey: y,
      actionListId: E,
      isCarrier: _,
      styleProp: q,
      verbose: I,
      pluginInstance: S,
    } = e,
      { ixData: A, ixSession: N } = t.getState(),
      { events: P } = A,
      L = P[d] || {},
      { mediaQueries: B = A.mediaQueryKeys } = L;
    if (Ii(B, N.mediaQueryKey) && (n || r || i)) {
      if (f || (u === qV && i)) {
        t.dispatch(ns(o, s, f, a));
        let { ixElements: j } = t.getState(),
          { ref: z, refType: $, refState: U } = j[o] || {},
          O = U && U[s];
        ($ === f_ || Oi(s)) && FV(z, U, O, d, a, q, Se, u, S);
      }
      if (i) {
        if (_) {
          let j = Zr({
            store: t,
            eventId: d,
            eventTarget: h,
            eventStateKey: y,
            actionListId: E,
            groupIndex: g + 1,
            verbose: I,
          });
          I && !j && t.dispatch(cr({ actionListId: E, isPlaying: !1 }));
        }
        Os(e, t);
      }
    }
  }
  var o_,
    dt,
    a_,
    s_,
    u_,
    c_,
    fr,
    l_,
    _i,
    PV,
    ms,
    _s,
    Ti,
    f_,
    qV,
    n_,
    bi,
    MV,
    Ts,
    Pt,
    DV,
    FV,
    d_,
    GV,
    UV,
    VV,
    HV,
    XV,
    kV,
    Ii,
    WV,
    BV,
    jV,
    zV,
    KV,
    Oi,
    bs,
    YV,
    i_,
    $V,
    QV,
    fH,
    pH,
    gH,
    vH,
    ys = fe(() => {
      "use strict";
      (o_ = oe(_a())),
        (dt = oe(Wn())),
        (a_ = oe(LE())),
        (s_ = oe(iy())),
        (u_ = oe(ay())),
        (c_ = oe(uy())),
        (fr = oe(gy())),
        (l_ = oe(Ty()));
      Le();
      _i = oe(Lt());
      fi();
      xy();
      r_();
      (PV = Object.keys(bn)),
        (ms = (e) => PV.includes(e)),
        ({
          COLON_DELIMITER: _s,
          BOUNDARY_SELECTOR: Ti,
          HTML_ELEMENT: f_,
          RENDER_GENERAL: qV,
          W_MOD_IX: n_,
        } = Ie),
        ({
          getAffectedElements: bi,
          getElementId: MV,
          getDestinationValues: Ts,
          observeStore: Pt,
          getInstanceId: DV,
          renderHTMLElement: FV,
          clearAllStyles: d_,
          getMaxDurationItemIndex: GV,
          getComputedStyle: UV,
          getInstanceOrigin: VV,
          reduceListToGroup: HV,
          shouldNamespaceEventParameter: XV,
          getNamespacedParameterId: kV,
          shouldAllowMediaQuery: Ii,
          cleanupHTMLElement: WV,
          clearObjectCache: BV,
          stringifyTarget: jV,
          mediaQueriesEqual: zV,
          shallowEqual: KV,
        } = _i.IX2VanillaUtils),
        ({
          isPluginType: Oi,
          createPluginInstance: bs,
          getPluginDuration: YV,
        } = _i.IX2VanillaPlugins),
        (i_ = navigator.userAgent),
        ($V = i_.match(/iPad/i) || i_.match(/iPhone/)),
        (QV = 12);
      fH = ["resize", "orientationchange"];
      (pH = (e, t) => (0, s_.default)((0, c_.default)(e, t), u_.default)),
        (gH = (e, t) => {
          (0, fr.default)(e, (r, n) => {
            r.forEach((i, o) => {
              let a = n + _s + o;
              t(i, n, a);
            });
          });
        }),
        (vH = (e) => {
          let t = { target: e.target, targets: e.targets };
          return bi({ config: t, elementApi: Se });
        });
    });
  var T_ = c((pt) => {
    "use strict";
    var mH = cn().default,
      _H = nu().default;
    Object.defineProperty(pt, "__esModule", { value: !0 });
    pt.actions = void 0;
    pt.destroy = __;
    pt.init = AH;
    pt.setEnv = OH;
    pt.store = void 0;
    Xl();
    var TH = Xo(),
      bH = _H((pE(), Ze(dE))),
      As = (ys(), Ze(m_)),
      IH = mH((fi(), Ze(Iy)));
    pt.actions = IH;
    var ws = (pt.store = (0, TH.createStore)(bH.default));
    function OH(e) {
      e() && (0, As.observeRequests)(ws);
    }
    function AH(e) {
      __(), (0, As.startEngine)({ store: ws, rawData: e, allowEvents: !0 });
    }
    function __() {
      (0, As.stopEngine)(ws);
    }
  });
  var A_ = c((Bj, O_) => {
    "use strict";
    var b_ = Me(),
      I_ = T_();
    I_.setEnv(b_.env);
    b_.define(
      "ix2",
      (O_.exports = function () {
        return I_;
      })
    );
  });
  var x_ = c((jj, w_) => {
    "use strict";
    var dr = Me();
    dr.define(
      "links",
      (w_.exports = function (e, t) {
        var r = {},
          n = e(window),
          i,
          o = dr.env(),
          a = window.location,
          s = document.createElement("a"),
          u = "w--current",
          f = /index\.(html|php)$/,
          g = /\/$/,
          d,
          h;
        r.ready = r.design = r.preview = y;
        function y() {
          (i = o && dr.env("design")),
            (h = dr.env("slug") || a.pathname || ""),
            dr.scroll.off(_),
            (d = []);
          for (var I = document.links, S = 0; S < I.length; ++S) E(I[S]);
          d.length && (dr.scroll.on(_), _());
        }
        function E(I) {
          if (!I.getAttribute("hreflang")) {
            var S =
              (i && I.getAttribute("href-disabled")) || I.getAttribute("href");
            if (((s.href = S), !(S.indexOf(":") >= 0))) {
              var A = e(I);
              if (
                s.hash.length > 1 &&
                s.host + s.pathname === a.host + a.pathname
              ) {
                if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                var N = e(s.hash);
                N.length && d.push({ link: A, sec: N, active: !1 });
                return;
              }
              if (!(S === "#" || S === "")) {
                var P =
                  s.href === a.href || S === h || (f.test(S) && g.test(h));
                q(A, u, P);
              }
            }
          }
        }
        function _() {
          var I = n.scrollTop(),
            S = n.height();
          t.each(d, function (A) {
            if (!A.link.attr("hreflang")) {
              var N = A.link,
                P = A.sec,
                L = P.offset().top,
                B = P.outerHeight(),
                j = S * 0.5,
                z = P.is(":visible") && L + B - j >= I && L + j <= I + S;
              A.active !== z && ((A.active = z), q(N, u, z));
            }
          });
        }
        function q(I, S, A) {
          var N = I.hasClass(S);
          (A && N) || (!A && !N) || (A ? I.addClass(S) : I.removeClass(S));
        }
        return r;
      })
    );
  });
  var R_ = c((zj, S_) => {
    "use strict";
    var xi = Me();
    xi.define(
      "scroll",
      (S_.exports = function (e) {
        var t = {
          WF_CLICK_EMPTY: "click.wf-empty-link",
          WF_CLICK_SCROLL: "click.wf-scroll",
        },
          r = window.location,
          n = E() ? null : window.history,
          i = e(window),
          o = e(document),
          a = e(document.body),
          s =
            window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            function (O) {
              window.setTimeout(O, 15);
            },
          u = xi.env("editor") ? ".w-editor-body" : "body",
          f =
            "header, " +
            u +
            " > .header, " +
            u +
            " > .w-nav:not([data-no-scroll])",
          g = 'a[href="#"]',
          d = 'a[href*="#"]:not(.w-tab-link):not(' + g + ")",
          h = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
          y = document.createElement("style");
        y.appendChild(document.createTextNode(h));
        function E() {
          try {
            return !!window.frameElement;
          } catch {
            return !0;
          }
        }
        var _ = /^#[a-zA-Z0-9][\w:.-]*$/;
        function q(O) {
          return _.test(O.hash) && O.host + O.pathname === r.host + r.pathname;
        }
        let I =
          typeof window.matchMedia == "function" &&
          window.matchMedia("(prefers-reduced-motion: reduce)");
        function S() {
          return (
            document.body.getAttribute("data-wf-scroll-motion") === "none" ||
            I.matches
          );
        }
        function A(O, v) {
          var R;
          switch (v) {
            case "add":
              (R = O.attr("tabindex")),
                R
                  ? O.attr("data-wf-tabindex-swap", R)
                  : O.attr("tabindex", "-1");
              break;
            case "remove":
              (R = O.attr("data-wf-tabindex-swap")),
                R
                  ? (O.attr("tabindex", R),
                    O.removeAttr("data-wf-tabindex-swap"))
                  : O.removeAttr("tabindex");
              break;
          }
          O.toggleClass("wf-force-outline-none", v === "add");
        }
        function N(O) {
          var v = O.currentTarget;
          if (
            !(
              xi.env("design") ||
              (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(v.className))
            )
          ) {
            var R = q(v) ? v.hash : "";
            if (R !== "") {
              var M = e(R);
              M.length &&
                (O && (O.preventDefault(), O.stopPropagation()),
                  P(R, O),
                  window.setTimeout(
                    function () {
                      L(M, function () {
                        A(M, "add"),
                          M.get(0).focus({ preventScroll: !0 }),
                          A(M, "remove");
                      });
                    },
                    O ? 0 : 300
                  ));
            }
          }
        }
        function P(O) {
          if (
            r.hash !== O &&
            n &&
            n.pushState &&
            !(xi.env.chrome && r.protocol === "file:")
          ) {
            var v = n.state && n.state.hash;
            v !== O && n.pushState({ hash: O }, "", O);
          }
        }
        function L(O, v) {
          var R = i.scrollTop(),
            M = B(O);
          if (R !== M) {
            var G = j(O, R, M),
              Q = Date.now(),
              Z = function () {
                var D = Date.now() - Q;
                window.scroll(0, z(R, M, D, G)),
                  D <= G ? s(Z) : typeof v == "function" && v();
              };
            s(Z);
          }
        }
        function B(O) {
          var v = e(f),
            R = v.css("position") === "fixed" ? v.outerHeight() : 0,
            M = O.offset().top - R;
          if (O.data("scroll") === "mid") {
            var G = i.height() - R,
              Q = O.outerHeight();
            Q < G && (M -= Math.round((G - Q) / 2));
          }
          return M;
        }
        function j(O, v, R) {
          if (S()) return 0;
          var M = 1;
          return (
            a.add(O).each(function (G, Q) {
              var Z = parseFloat(Q.getAttribute("data-scroll-time"));
              !isNaN(Z) && Z >= 0 && (M = Z);
            }),
            (472.143 * Math.log(Math.abs(v - R) + 125) - 2e3) * M
          );
        }
        function z(O, v, R, M) {
          return R > M ? v : O + (v - O) * $(R / M);
        }
        function $(O) {
          return O < 0.5
            ? 4 * O * O * O
            : (O - 1) * (2 * O - 2) * (2 * O - 2) + 1;
        }
        function U() {
          var { WF_CLICK_EMPTY: O, WF_CLICK_SCROLL: v } = t;
          o.on(v, d, N),
            o.on(O, g, function (R) {
              R.preventDefault();
            }),
            document.head.insertBefore(y, document.head.firstChild);
        }
        return { ready: U };
      })
    );
  });
  var N_ = c((Kj, C_) => {
    "use strict";
    var wH = Me();
    wH.define(
      "touch",
      (C_.exports = function (e) {
        var t = {},
          r = window.getSelection;
        (e.event.special.tap = { bindType: "click", delegateType: "click" }),
          (t.init = function (o) {
            return (
              (o = typeof o == "string" ? e(o).get(0) : o), o ? new n(o) : null
            );
          });
        function n(o) {
          var a = !1,
            s = !1,
            u = Math.min(Math.round(window.innerWidth * 0.04), 40),
            f,
            g;
          o.addEventListener("touchstart", d, !1),
            o.addEventListener("touchmove", h, !1),
            o.addEventListener("touchend", y, !1),
            o.addEventListener("touchcancel", E, !1),
            o.addEventListener("mousedown", d, !1),
            o.addEventListener("mousemove", h, !1),
            o.addEventListener("mouseup", y, !1),
            o.addEventListener("mouseout", E, !1);
          function d(q) {
            var I = q.touches;
            (I && I.length > 1) ||
              ((a = !0),
                I ? ((s = !0), (f = I[0].clientX)) : (f = q.clientX),
                (g = f));
          }
          function h(q) {
            if (a) {
              if (s && q.type === "mousemove") {
                q.preventDefault(), q.stopPropagation();
                return;
              }
              var I = q.touches,
                S = I ? I[0].clientX : q.clientX,
                A = S - g;
              (g = S),
                Math.abs(A) > u &&
                r &&
                String(r()) === "" &&
                (i("swipe", q, { direction: A > 0 ? "right" : "left" }), E());
            }
          }
          function y(q) {
            if (a && ((a = !1), s && q.type === "mouseup")) {
              q.preventDefault(), q.stopPropagation(), (s = !1);
              return;
            }
          }
          function E() {
            a = !1;
          }
          function _() {
            o.removeEventListener("touchstart", d, !1),
              o.removeEventListener("touchmove", h, !1),
              o.removeEventListener("touchend", y, !1),
              o.removeEventListener("touchcancel", E, !1),
              o.removeEventListener("mousedown", d, !1),
              o.removeEventListener("mousemove", h, !1),
              o.removeEventListener("mouseup", y, !1),
              o.removeEventListener("mouseout", E, !1),
              (o = null);
          }
          this.destroy = _;
        }
        function i(o, a, s) {
          var u = e.Event(o, { originalEvent: a });
          e(a.target).trigger(u, s);
        }
        return (t.instance = t.init(document)), t;
      })
    );
  });
  var q_ = c((Yj, P_) => {
    "use strict";
    var qt = Me(),
      xH = un(),
      Ke = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      },
      L_ = !0,
      SH = /^#[a-zA-Z0-9\-_]+$/;
    qt.define(
      "dropdown",
      (P_.exports = function (e, t) {
        var r = t.debounce,
          n = {},
          i = qt.env(),
          o = !1,
          a,
          s = qt.env.touch,
          u = ".w-dropdown",
          f = "w--open",
          g = xH.triggers,
          d = 900,
          h = "focusout" + u,
          y = "keydown" + u,
          E = "mouseenter" + u,
          _ = "mousemove" + u,
          q = "mouseleave" + u,
          I = (s ? "click" : "mouseup") + u,
          S = "w-close" + u,
          A = "setting" + u,
          N = e(document),
          P;
        (n.ready = L),
          (n.design = function () {
            o && v(), (o = !1), L();
          }),
          (n.preview = function () {
            (o = !0), L();
          });
        function L() {
          (a = i && qt.env("design")), (P = N.find(u)), P.each(B);
        }
        function B(p, H) {
          var W = e(H),
            C = e.data(H, u);
          C ||
            (C = e.data(H, u, {
              open: !1,
              el: W,
              config: {},
              selectedIdx: -1,
            })),
            (C.toggle = C.el.children(".w-dropdown-toggle")),
            (C.list = C.el.children(".w-dropdown-list")),
            (C.links = C.list.find("a:not(.w-dropdown .w-dropdown a)")),
            (C.complete = G(C)),
            (C.mouseLeave = Z(C)),
            (C.mouseUpOutside = M(C)),
            (C.mouseMoveOutside = D(C)),
            j(C);
          var re = C.toggle.attr("id"),
            Ee = C.list.attr("id");
          re || (re = "w-dropdown-toggle-" + p),
            Ee || (Ee = "w-dropdown-list-" + p),
            C.toggle.attr("id", re),
            C.toggle.attr("aria-controls", Ee),
            C.toggle.attr("aria-haspopup", "menu"),
            C.toggle.attr("aria-expanded", "false"),
            C.toggle
              .find(".w-icon-dropdown-toggle")
              .attr("aria-hidden", "true"),
            C.toggle.prop("tagName") !== "BUTTON" &&
            (C.toggle.attr("role", "button"),
              C.toggle.attr("tabindex") || C.toggle.attr("tabindex", "0")),
            C.list.attr("id", Ee),
            C.list.attr("aria-labelledby", re),
            C.links.each(function (Fe, Ye) {
              Ye.hasAttribute("tabindex") || Ye.setAttribute("tabindex", "0"),
                SH.test(Ye.hash) &&
                Ye.addEventListener("click", O.bind(null, C));
            }),
            C.el.off(u),
            C.toggle.off(u),
            C.nav && C.nav.off(u);
          var ae = $(C, L_);
          a && C.el.on(A, z(C)),
            a ||
            (i && ((C.hovering = !1), O(C)),
              C.config.hover && C.toggle.on(E, Q(C)),
              C.el.on(S, ae),
              C.el.on(y, k(C)),
              C.el.on(h, F(C)),
              C.toggle.on(I, ae),
              C.toggle.on(y, V(C)),
              (C.nav = C.el.closest(".w-nav")),
              C.nav.on(S, ae));
        }
        function j(p) {
          var H = Number(p.el.css("z-index"));
          (p.manageZ = H === d || H === d + 1),
            (p.config = {
              hover: p.el.attr("data-hover") === "true" && !s,
              delay: p.el.attr("data-delay"),
            });
        }
        function z(p) {
          return function (H, W) {
            (W = W || {}),
              j(p),
              W.open === !0 && U(p, !0),
              W.open === !1 && O(p, { immediate: !0 });
          };
        }
        function $(p, H) {
          return r(function (W) {
            if (p.open || (W && W.type === "w-close"))
              return O(p, { forceClose: H });
            U(p);
          });
        }
        function U(p) {
          if (!p.open) {
            R(p),
              (p.open = !0),
              p.list.addClass(f),
              p.toggle.addClass(f),
              p.toggle.attr("aria-expanded", "true"),
              g.intro(0, p.el[0]),
              qt.redraw.up(),
              p.manageZ && p.el.css("z-index", d + 1);
            var H = qt.env("editor");
            a || N.on(I, p.mouseUpOutside),
              p.hovering && !H && p.el.on(q, p.mouseLeave),
              p.hovering && H && N.on(_, p.mouseMoveOutside),
              window.clearTimeout(p.delayId);
          }
        }
        function O(p, { immediate: H, forceClose: W } = {}) {
          if (p.open && !(p.config.hover && p.hovering && !W)) {
            p.toggle.attr("aria-expanded", "false"), (p.open = !1);
            var C = p.config;
            if (
              (g.outro(0, p.el[0]),
                N.off(I, p.mouseUpOutside),
                N.off(_, p.mouseMoveOutside),
                p.el.off(q, p.mouseLeave),
                window.clearTimeout(p.delayId),
                !C.delay || H)
            )
              return p.complete();
            p.delayId = window.setTimeout(p.complete, C.delay);
          }
        }
        function v() {
          N.find(u).each(function (p, H) {
            e(H).triggerHandler(S);
          });
        }
        function R(p) {
          var H = p.el[0];
          P.each(function (W, C) {
            var re = e(C);
            re.is(H) || re.has(H).length || re.triggerHandler(S);
          });
        }
        function M(p) {
          return (
            p.mouseUpOutside && N.off(I, p.mouseUpOutside),
            r(function (H) {
              if (p.open) {
                var W = e(H.target);
                if (!W.closest(".w-dropdown-toggle").length) {
                  var C = e.inArray(p.el[0], W.parents(u)) === -1,
                    re = qt.env("editor");
                  if (C) {
                    if (re) {
                      var Ee =
                        W.parents().length === 1 &&
                        W.parents("svg").length === 1,
                        ae = W.parents(
                          ".w-editor-bem-EditorHoverControls"
                        ).length;
                      if (Ee || ae) return;
                    }
                    O(p);
                  }
                }
              }
            })
          );
        }
        function G(p) {
          return function () {
            p.list.removeClass(f),
              p.toggle.removeClass(f),
              p.manageZ && p.el.css("z-index", "");
          };
        }
        function Q(p) {
          return function () {
            (p.hovering = !0), U(p);
          };
        }
        function Z(p) {
          return function () {
            (p.hovering = !1), p.links.is(":focus") || O(p);
          };
        }
        function D(p) {
          return r(function (H) {
            if (p.open) {
              var W = e(H.target),
                C = e.inArray(p.el[0], W.parents(u)) === -1;
              if (C) {
                var re = W.parents(".w-editor-bem-EditorHoverControls").length,
                  Ee = W.parents(".w-editor-bem-RTToolbar").length,
                  ae = e(".w-editor-bem-EditorOverlay"),
                  Fe =
                    ae.find(".w-editor-edit-outline").length ||
                    ae.find(".w-editor-bem-RTToolbar").length;
                if (re || Ee || Fe) return;
                (p.hovering = !1), O(p);
              }
            }
          });
        }
        function k(p) {
          return function (H) {
            if (!(a || !p.open))
              switch (
              ((p.selectedIdx = p.links.index(document.activeElement)),
                H.keyCode)
              ) {
                case Ke.HOME:
                  return p.open
                    ? ((p.selectedIdx = 0), K(p), H.preventDefault())
                    : void 0;
                case Ke.END:
                  return p.open
                    ? ((p.selectedIdx = p.links.length - 1),
                      K(p),
                      H.preventDefault())
                    : void 0;
                case Ke.ESCAPE:
                  return O(p), p.toggle.focus(), H.stopPropagation();
                case Ke.ARROW_RIGHT:
                case Ke.ARROW_DOWN:
                  return (
                    (p.selectedIdx = Math.min(
                      p.links.length - 1,
                      p.selectedIdx + 1
                    )),
                    K(p),
                    H.preventDefault()
                  );
                case Ke.ARROW_LEFT:
                case Ke.ARROW_UP:
                  return (
                    (p.selectedIdx = Math.max(-1, p.selectedIdx - 1)),
                    K(p),
                    H.preventDefault()
                  );
              }
          };
        }
        function K(p) {
          p.links[p.selectedIdx] && p.links[p.selectedIdx].focus();
        }
        function V(p) {
          var H = $(p, L_);
          return function (W) {
            if (!a) {
              if (!p.open)
                switch (W.keyCode) {
                  case Ke.ARROW_UP:
                  case Ke.ARROW_DOWN:
                    return W.stopPropagation();
                }
              switch (W.keyCode) {
                case Ke.SPACE:
                case Ke.ENTER:
                  return H(), W.stopPropagation(), W.preventDefault();
              }
            }
          };
        }
        function F(p) {
          return r(function (H) {
            var { relatedTarget: W, target: C } = H,
              re = p.el[0],
              Ee = re.contains(W) || re.contains(C);
            return Ee || O(p), H.stopPropagation();
          });
        }
        return n;
      })
    );
  });
  var M_ = c((xs) => {
    "use strict";
    Object.defineProperty(xs, "__esModule", { value: !0 });
    xs.default = RH;
    function RH(e, t, r, n, i, o, a, s, u, f, g, d, h) {
      return function (y) {
        e(y);
        var E = y.form,
          _ = {
            name: E.attr("data-name") || E.attr("name") || "Untitled Form",
            pageId: E.attr("data-wf-page-id") || "",
            elementId: E.attr("data-wf-element-id") || "",
            source: t.href,
            test: r.env(),
            fields: {},
            fileUploads: {},
            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
              E.html()
            ),
            trackingCookies: n(),
          };
        let q = E.attr("data-wf-flow");
        q && (_.wfFlow = q), i(y);
        var I = o(E, _.fields);
        if (I) return a(I);
        if (((_.fileUploads = s(E)), u(y), !f)) {
          g(y);
          return;
        }
        d.ajax({
          url: h,
          type: "POST",
          data: _,
          dataType: "json",
          crossDomain: !0,
        })
          .done(function (S) {
            S && S.code === 200 && (y.success = !0), g(y);
          })
          .fail(function () {
            g(y);
          });
      };
    }
  });
  var F_ = c((Qj, D_) => {
    "use strict";
    var Si = Me();
    Si.define(
      "forms",
      (D_.exports = function (e, t) {
        var r = {},
          n = e(document),
          i,
          o = window.location,
          a = window.XDomainRequest && !window.atob,
          s = ".w-form",
          u,
          f = /e(-)?mail/i,
          g = /^\S+@\S+$/,
          d = window.alert,
          h = Si.env(),
          y,
          E,
          _,
          q = /list-manage[1-9]?.com/i,
          I = t.debounce(function () {
            d(
              "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
            );
          }, 100);
        r.ready =
          r.design =
          r.preview =
          function () {
            S(), !h && !y && N();
          };
        function S() {
          (u = e("html").attr("data-wf-site")),
            (E = "https://webflow.com/api/v1/form/" + u),
            a &&
            E.indexOf("https://webflow.com") >= 0 &&
            (E = E.replace(
              "https://webflow.com",
              "https://formdata.webflow.com"
            )),
            (_ = `${E}/signFile`),
            (i = e(s + " form")),
            i.length && i.each(A);
        }
        function A(D, k) {
          var K = e(k),
            V = e.data(k, s);
          V || (V = e.data(k, s, { form: K })), P(V);
          var F = K.closest("div.w-form");
          (V.done = F.find("> .w-form-done")),
            (V.fail = F.find("> .w-form-fail")),
            (V.fileUploads = F.find(".w-file-upload")),
            V.fileUploads.each(function (W) {
              G(W, V);
            });
          var p =
            V.form.attr("aria-label") || V.form.attr("data-name") || "Form";
          V.done.attr("aria-label") || V.form.attr("aria-label", p),
            V.done.attr("tabindex", "-1"),
            V.done.attr("role", "region"),
            V.done.attr("aria-label") ||
            V.done.attr("aria-label", p + " success"),
            V.fail.attr("tabindex", "-1"),
            V.fail.attr("role", "region"),
            V.fail.attr("aria-label") ||
            V.fail.attr("aria-label", p + " failure");
          var H = (V.action = K.attr("action"));
          if (
            ((V.handler = null),
              (V.redirect = K.attr("data-redirect")),
              q.test(H))
          ) {
            V.handler = v;
            return;
          }
          if (!H) {
            if (u) {
              V.handler = (() => {
                let W = M_().default;
                return W(P, o, Si, $, M, B, d, j, L, u, R, e, E);
              })();
              return;
            }
            I();
          }
        }
        function N() {
          (y = !0),
            n.on("submit", s + " form", function (W) {
              var C = e.data(this, s);
              C.handler && ((C.evt = W), C.handler(C));
            });
          let D = ".w-checkbox-input",
            k = ".w-radio-input",
            K = "w--redirected-checked",
            V = "w--redirected-focus",
            F = "w--redirected-focus-visible",
            p = ":focus-visible, [data-wf-focus-visible]",
            H = [
              ["checkbox", D],
              ["radio", k],
            ];
          n.on(
            "change",
            s + ' form input[type="checkbox"]:not(' + D + ")",
            (W) => {
              e(W.target).siblings(D).toggleClass(K);
            }
          ),
            n.on("change", s + ' form input[type="radio"]', (W) => {
              e(`input[name="${W.target.name}"]:not(${D})`).map((re, Ee) =>
                e(Ee).siblings(k).removeClass(K)
              );
              let C = e(W.target);
              C.hasClass("w-radio-input") || C.siblings(k).addClass(K);
            }),
            H.forEach(([W, C]) => {
              n.on(
                "focus",
                s + ` form input[type="${W}"]:not(` + C + ")",
                (re) => {
                  e(re.target).siblings(C).addClass(V),
                    e(re.target).filter(p).siblings(C).addClass(F);
                }
              ),
                n.on(
                  "blur",
                  s + ` form input[type="${W}"]:not(` + C + ")",
                  (re) => {
                    e(re.target).siblings(C).removeClass(`${V} ${F}`);
                  }
                );
            });
        }
        function P(D) {
          var k = (D.btn = D.form.find(':input[type="submit"]'));
          (D.wait = D.btn.attr("data-wait") || null),
            (D.success = !1),
            k.prop("disabled", !1),
            D.label && k.val(D.label);
        }
        function L(D) {
          var k = D.btn,
            K = D.wait;
          k.prop("disabled", !0), K && ((D.label = k.val()), k.val(K));
        }
        function B(D, k) {
          var K = null;
          return (
            (k = k || {}),
            D.find(':input:not([type="submit"]):not([type="file"])').each(
              function (V, F) {
                var p = e(F),
                  H = p.attr("type"),
                  W =
                    p.attr("data-name") || p.attr("name") || "Field " + (V + 1),
                  C = p.val();
                if (H === "checkbox") C = p.is(":checked");
                else if (H === "radio") {
                  if (k[W] === null || typeof k[W] == "string") return;
                  C =
                    D.find(
                      'input[name="' + p.attr("name") + '"]:checked'
                    ).val() || null;
                }
                typeof C == "string" && (C = e.trim(C)),
                  (k[W] = C),
                  (K = K || U(p, H, W, C));
              }
            ),
            K
          );
        }
        function j(D) {
          var k = {};
          return (
            D.find(':input[type="file"]').each(function (K, V) {
              var F = e(V),
                p = F.attr("data-name") || F.attr("name") || "File " + (K + 1),
                H = F.attr("data-value");
              typeof H == "string" && (H = e.trim(H)), (k[p] = H);
            }),
            k
          );
        }
        let z = { _mkto_trk: "marketo" };
        function $() {
          return document.cookie.split("; ").reduce(function (k, K) {
            let V = K.split("="),
              F = V[0];
            if (F in z) {
              let p = z[F],
                H = V.slice(1).join("=");
              k[p] = H;
            }
            return k;
          }, {});
        }
        function U(D, k, K, V) {
          var F = null;
          return (
            k === "password"
              ? (F = "Passwords cannot be submitted.")
              : D.attr("required")
                ? V
                  ? f.test(D.attr("type")) &&
                  (g.test(V) ||
                    (F = "Please enter a valid email address for: " + K))
                  : (F = "Please fill out the required field: " + K)
                : K === "g-recaptcha-response" &&
                !V &&
                (F = "Please confirm you\u2019re not a robot."),
            F
          );
        }
        function O(D) {
          M(D), R(D);
        }
        function v(D) {
          P(D);
          var k = D.form,
            K = {};
          if (/^https/.test(o.href) && !/^https/.test(D.action)) {
            k.attr("method", "post");
            return;
          }
          M(D);
          var V = B(k, K);
          if (V) return d(V);
          L(D);
          var F;
          t.each(K, function (C, re) {
            f.test(re) && (K.EMAIL = C),
              /^((full[ _-]?)?name)$/i.test(re) && (F = C),
              /^(first[ _-]?name)$/i.test(re) && (K.FNAME = C),
              /^(last[ _-]?name)$/i.test(re) && (K.LNAME = C);
          }),
            F &&
            !K.FNAME &&
            ((F = F.split(" ")),
              (K.FNAME = F[0]),
              (K.LNAME = K.LNAME || F[1]));
          var p = D.action.replace("/post?", "/post-json?") + "&c=?",
            H = p.indexOf("u=") + 2;
          H = p.substring(H, p.indexOf("&", H));
          var W = p.indexOf("id=") + 3;
          (W = p.substring(W, p.indexOf("&", W))),
            (K["b_" + H + "_" + W] = ""),
            e
              .ajax({ url: p, data: K, dataType: "jsonp" })
              .done(function (C) {
                (D.success = C.result === "success" || /already/.test(C.msg)),
                  D.success || console.info("MailChimp error: " + C.msg),
                  R(D);
              })
              .fail(function () {
                R(D);
              });
        }
        function R(D) {
          var k = D.form,
            K = D.redirect,
            V = D.success;
          if (V && K) {
            Si.location(K);
            return;
          }
          D.done.toggle(V),
            D.fail.toggle(!V),
            V ? D.done.focus() : D.fail.focus(),
            k.toggle(!V),
            P(D);
        }
        function M(D) {
          D.evt && D.evt.preventDefault(), (D.evt = null);
        }
        function G(D, k) {
          if (!k.fileUploads || !k.fileUploads[D]) return;
          var K,
            V = e(k.fileUploads[D]),
            F = V.find("> .w-file-upload-default"),
            p = V.find("> .w-file-upload-uploading"),
            H = V.find("> .w-file-upload-success"),
            W = V.find("> .w-file-upload-error"),
            C = F.find(".w-file-upload-input"),
            re = F.find(".w-file-upload-label"),
            Ee = re.children(),
            ae = W.find(".w-file-upload-error-msg"),
            Fe = H.find(".w-file-upload-file"),
            Ye = H.find(".w-file-remove-link"),
            pr = Fe.find(".w-file-upload-file-name"),
            gr = ae.attr("data-w-size-error"),
            $e = ae.attr("data-w-type-error"),
            Ri = ae.attr("data-w-generic-error");
          if (
            (h ||
              re.on("click keydown", function (T) {
                (T.type === "keydown" && T.which !== 13 && T.which !== 32) ||
                  (T.preventDefault(), C.click());
              }),
              re.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
              Ye.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
              h)
          )
            C.on("click", function (T) {
              T.preventDefault();
            }),
              re.on("click", function (T) {
                T.preventDefault();
              }),
              Ee.on("click", function (T) {
                T.preventDefault();
              });
          else {
            Ye.on("click keydown", function (T) {
              if (T.type === "keydown") {
                if (T.which !== 13 && T.which !== 32) return;
                T.preventDefault();
              }
              C.removeAttr("data-value"),
                C.val(""),
                pr.html(""),
                F.toggle(!0),
                H.toggle(!1),
                re.focus();
            }),
              C.on("change", function (T) {
                (K = T.target && T.target.files && T.target.files[0]),
                  K &&
                  (F.toggle(!1),
                    W.toggle(!1),
                    p.toggle(!0),
                    p.focus(),
                    pr.text(K.name),
                    w() || L(k),
                    (k.fileUploads[D].uploading = !0),
                    Q(K, m));
              });
            var Jr = re.outerHeight();
            C.height(Jr), C.width(1);
          }
          function l(T) {
            var x = T.responseJSON && T.responseJSON.msg,
              Y = Ri;
            typeof x == "string" && x.indexOf("InvalidFileTypeError") === 0
              ? (Y = $e)
              : typeof x == "string" &&
              x.indexOf("MaxFileSizeError") === 0 &&
              (Y = gr),
              ae.text(Y),
              C.removeAttr("data-value"),
              C.val(""),
              p.toggle(!1),
              F.toggle(!0),
              W.toggle(!0),
              W.focus(),
              (k.fileUploads[D].uploading = !1),
              w() || P(k);
          }
          function m(T, x) {
            if (T) return l(T);
            var Y = x.fileName,
              ee = x.postData,
              ce = x.fileId,
              X = x.s3Url;
            C.attr("data-value", ce), Z(X, ee, K, Y, b);
          }
          function b(T) {
            if (T) return l(T);
            p.toggle(!1),
              H.css("display", "inline-block"),
              H.focus(),
              (k.fileUploads[D].uploading = !1),
              w() || P(k);
          }
          function w() {
            var T = (k.fileUploads && k.fileUploads.toArray()) || [];
            return T.some(function (x) {
              return x.uploading;
            });
          }
        }
        function Q(D, k) {
          var K = new URLSearchParams({ name: D.name, size: D.size });
          e.ajax({ type: "GET", url: `${_}?${K}`, crossDomain: !0 })
            .done(function (V) {
              k(null, V);
            })
            .fail(function (V) {
              k(V);
            });
        }
        function Z(D, k, K, V, F) {
          var p = new FormData();
          for (var H in k) p.append(H, k[H]);
          p.append("file", K, V),
            e
              .ajax({
                type: "POST",
                url: D,
                data: p,
                processData: !1,
                contentType: !1,
              })
              .done(function () {
                F(null);
              })
              .fail(function (W) {
                F(W);
              });
        }
        return r;
      })
    );
  });
  var U_ = c((Zj, G_) => {
    "use strict";
    var bt = Me(),
      CH = un();
    bt.define(
      "tabs",
      (G_.exports = function (e) {
        var t = {},
          r = e.tram,
          n = e(document),
          i,
          o,
          a = bt.env,
          s = a.safari,
          u = a(),
          f = "data-w-tab",
          g = "data-w-pane",
          d = ".w-tabs",
          h = "w--current",
          y = "w--tab-active",
          E = CH.triggers,
          _ = !1;
        (t.ready = t.design = t.preview = q),
          (t.redraw = function () {
            (_ = !0), q(), (_ = !1);
          }),
          (t.destroy = function () {
            (i = n.find(d)), i.length && (i.each(A), I());
          });
        function q() {
          (o = u && bt.env("design")),
            (i = n.find(d)),
            i.length &&
            (i.each(N), bt.env("preview") && !_ && i.each(A), I(), S());
        }
        function I() {
          bt.redraw.off(t.redraw);
        }
        function S() {
          bt.redraw.on(t.redraw);
        }
        function A(U, O) {
          var v = e.data(O, d);
          v &&
            (v.links && v.links.each(E.reset),
              v.panes && v.panes.each(E.reset));
        }
        function N(U, O) {
          var v = d.substr(1) + "-" + U,
            R = e(O),
            M = e.data(O, d);
          if (
            (M || (M = e.data(O, d, { el: R, config: {} })),
              (M.current = null),
              (M.tabIdentifier = v + "-" + f),
              (M.paneIdentifier = v + "-" + g),
              (M.menu = R.children(".w-tab-menu")),
              (M.links = M.menu.children(".w-tab-link")),
              (M.content = R.children(".w-tab-content")),
              (M.panes = M.content.children(".w-tab-pane")),
              M.el.off(d),
              M.links.off(d),
              M.menu.attr("role", "tablist"),
              M.links.attr("tabindex", "-1"),
              P(M),
              !o)
          ) {
            M.links.on("click" + d, B(M)), M.links.on("keydown" + d, j(M));
            var G = M.links.filter("." + h),
              Q = G.attr(f);
            Q && z(M, { tab: Q, immediate: !0 });
          }
        }
        function P(U) {
          var O = {};
          O.easing = U.el.attr("data-easing") || "ease";
          var v = parseInt(U.el.attr("data-duration-in"), 10);
          v = O.intro = v === v ? v : 0;
          var R = parseInt(U.el.attr("data-duration-out"), 10);
          (R = O.outro = R === R ? R : 0),
            (O.immediate = !v && !R),
            (U.config = O);
        }
        function L(U) {
          var O = U.current;
          return Array.prototype.findIndex.call(
            U.links,
            (v) => v.getAttribute(f) === O,
            null
          );
        }
        function B(U) {
          return function (O) {
            O.preventDefault();
            var v = O.currentTarget.getAttribute(f);
            v && z(U, { tab: v });
          };
        }
        function j(U) {
          return function (O) {
            var v = L(U),
              R = O.key,
              M = {
                ArrowLeft: v - 1,
                ArrowUp: v - 1,
                ArrowRight: v + 1,
                ArrowDown: v + 1,
                End: U.links.length - 1,
                Home: 0,
              };
            if (R in M) {
              O.preventDefault();
              var G = M[R];
              G === -1 && (G = U.links.length - 1),
                G === U.links.length && (G = 0);
              var Q = U.links[G],
                Z = Q.getAttribute(f);
              Z && z(U, { tab: Z });
            }
          };
        }
        function z(U, O) {
          O = O || {};
          var v = U.config,
            R = v.easing,
            M = O.tab;
          if (M !== U.current) {
            U.current = M;
            var G;
            U.links.each(function (F, p) {
              var H = e(p);
              if (O.immediate || v.immediate) {
                var W = U.panes[F];
                p.id || (p.id = U.tabIdentifier + "-" + F),
                  W.id || (W.id = U.paneIdentifier + "-" + F),
                  (p.href = "#" + W.id),
                  p.setAttribute("role", "tab"),
                  p.setAttribute("aria-controls", W.id),
                  p.setAttribute("aria-selected", "false"),
                  W.setAttribute("role", "tabpanel"),
                  W.setAttribute("aria-labelledby", p.id);
              }
              p.getAttribute(f) === M
                ? ((G = p),
                  H.addClass(h)
                    .removeAttr("tabindex")
                    .attr({ "aria-selected": "true" })
                    .each(E.intro))
                : H.hasClass(h) &&
                H.removeClass(h)
                  .attr({ tabindex: "-1", "aria-selected": "false" })
                  .each(E.outro);
            });
            var Q = [],
              Z = [];
            U.panes.each(function (F, p) {
              var H = e(p);
              p.getAttribute(f) === M ? Q.push(p) : H.hasClass(y) && Z.push(p);
            });
            var D = e(Q),
              k = e(Z);
            if (O.immediate || v.immediate) {
              D.addClass(y).each(E.intro),
                k.removeClass(y),
                _ || bt.redraw.up();
              return;
            } else {
              var K = window.scrollX,
                V = window.scrollY;
              G.focus(), window.scrollTo(K, V);
            }
            k.length && v.outro
              ? (k.each(E.outro),
                r(k)
                  .add("opacity " + v.outro + "ms " + R, { fallback: s })
                  .start({ opacity: 0 })
                  .then(() => $(v, k, D)))
              : $(v, k, D);
          }
        }
        function $(U, O, v) {
          if (
            (O.removeClass(y).css({
              opacity: "",
              transition: "",
              transform: "",
              width: "",
              height: "",
            }),
              v.addClass(y).each(E.intro),
              bt.redraw.up(),
              !U.intro)
          )
            return r(v).set({ opacity: 1 });
          r(v)
            .set({ opacity: 0 })
            .redraw()
            .add("opacity " + U.intro + "ms " + U.easing, { fallback: s })
            .start({ opacity: 1 });
        }
        return t;
      })
    );
  });
  Hs();
  ks();
  Bs();
  Ks();
  un();
  A_();
  x_();
  R_();
  N_();
  q_();
  F_();
  U_();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
  events: {
    e: {
      id: "e",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-2",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".content-block",
        originalId:
          "63e4d5b7359de159bee34dae|67af61e7-558b-f92e-6c4f-491deb69b2a5",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".content-block",
          originalId:
            "63e4d5b7359de159bee34dae|67af61e7-558b-f92e-6c4f-491deb69b2a5",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1654185105029,
    },
    "e-3": {
      id: "e-3",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-4",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".div-block-2._2",
        originalId:
          "63e4d5b7359de159bee34dae|dbafbea6-b86e-6447-96a8-47adefc9cee4",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".div-block-2._2",
          originalId:
            "63e4d5b7359de159bee34dae|dbafbea6-b86e-6447-96a8-47adefc9cee4",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1654185265314,
    },
    "e-5": {
      id: "e-5",
      name: "",
      animationType: "custom",
      eventTypeId: "SCROLL_INTO_VIEW",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-6",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        selector: ".div-block-2._1",
        originalId:
          "63e4d5b7359de159bee34dae|937263e3-77ee-95eb-bd0f-eae393ef0fcc",
        appliesTo: "CLASS",
      },
      targets: [
        {
          selector: ".div-block-2._1",
          originalId:
            "63e4d5b7359de159bee34dae|937263e3-77ee-95eb-bd0f-eae393ef0fcc",
          appliesTo: "CLASS",
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: 0,
        scrollOffsetUnit: "%",
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1654185274563,
    },
    "e-7": {
      id: "e-7",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-8",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|ac48f439-bb77-abb9-99e3-e60c38fc61e1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|ac48f439-bb77-abb9-99e3-e60c38fc61e1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1654202337482,
    },
    "e-9": {
      id: "e-9",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-4",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-10",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|30ddb4cf-2afe-801e-5244-c24b79d05b3e",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|30ddb4cf-2afe-801e-5244-c24b79d05b3e",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1654202967139,
    },
    "e-11": {
      id: "e-11",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-5",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-12",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|c045ac82-f5a0-8610-ffe8-b6d1969426d9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|c045ac82-f5a0-8610-ffe8-b6d1969426d9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1654204552735,
    },
    "e-13": {
      id: "e-13",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-6",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-14",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|b0e12881-f2fd-464e-14f5-6e57e8b3a6e8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|b0e12881-f2fd-464e-14f5-6e57e8b3a6e8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1654204632722,
    },
    "e-17": {
      id: "e-17",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-13",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-18",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|50a80dfa-a12c-fae1-ca03-5c8886456103",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|50a80dfa-a12c-fae1-ca03-5c8886456103",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1654205525696,
    },
    "e-19": {
      id: "e-19",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-9",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-20",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|5080cc49-9485-9efe-829d-b12aaa2dfdfc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|5080cc49-9485-9efe-829d-b12aaa2dfdfc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1654209570515,
    },
    "e-21": {
      id: "e-21",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-8",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-22",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|b79a9326-4ff5-c912-61c8-b2ece8c6a839",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|b79a9326-4ff5-c912-61c8-b2ece8c6a839",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1654209621448,
    },
    "e-23": {
      id: "e-23",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-10",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-24",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|170a44dd-3a35-9f01-c8f4-0114f1a35a50",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|170a44dd-3a35-9f01-c8f4-0114f1a35a50",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1654209717899,
    },
    "e-25": {
      id: "e-25",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-11",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-26",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|57fde76a-0201-fa7d-9988-683d09558d39",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|57fde76a-0201-fa7d-9988-683d09558d39",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1654209771088,
    },
    "e-27": {
      id: "e-27",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-12",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-28",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|49d900b1-de7d-8eec-20df-821591810397",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|49d900b1-de7d-8eec-20df-821591810397",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1654209821161,
    },
    "e-29": {
      id: "e-29",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-14",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-30",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|072c925d-d052-cc66-a180-f2c5a9286b8b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|072c925d-d052-cc66-a180-f2c5a9286b8b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1654212896158,
    },
    "e-31": {
      id: "e-31",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-15",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-32",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|7a7d79dd-f2d0-83ac-5370-61fc969cfd5f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|7a7d79dd-f2d0-83ac-5370-61fc969cfd5f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1654212939356,
    },
    "e-33": {
      id: "e-33",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-7",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-34",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|5096f17e-06e3-b14a-6873-1b9d146f9d3f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|5096f17e-06e3-b14a-6873-1b9d146f9d3f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1654213489843,
    },
    "e-35": {
      id: "e-35",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-45",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-36",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|d1b2c1a0-7b9e-47c8-9204-fbbc3e31884b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|d1b2c1a0-7b9e-47c8-9204-fbbc3e31884b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1654215457248,
    },
    "e-39": {
      id: "e-39",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-40",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|18d22c0b-8f7d-2bb0-9bcd-4c63870593fa",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|18d22c0b-8f7d-2bb0-9bcd-4c63870593fa",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1654217560239,
    },
    "e-41": {
      id: "e-41",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-18",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-42",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|37df3d7e-d1d0-cf11-ffb1-899064a0e26d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|37df3d7e-d1d0-cf11-ffb1-899064a0e26d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1654261673152,
    },
    "e-43": {
      id: "e-43",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-44",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|18b1cbe9-0eff-819b-72bd-8e5b69b91be7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|18b1cbe9-0eff-819b-72bd-8e5b69b91be7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1654262055030,
    },
    "e-45": {
      id: "e-45",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-18",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-46",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|7612b7c2-4938-ded4-d438-1d593d3b33f0",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|7612b7c2-4938-ded4-d438-1d593d3b33f0",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1654262554774,
    },
    "e-51": {
      id: "e-51",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-20",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-52",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|aa7aaaee-9d32-bd7b-8550-5014a1014b4d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|aa7aaaee-9d32-bd7b-8550-5014a1014b4d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1654265145237,
    },
    "e-53": {
      id: "e-53",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-54",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|cd6deb31-dbfb-a528-f172-48cdfb072ef7",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|cd6deb31-dbfb-a528-f172-48cdfb072ef7",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1654265161293,
    },
    "e-55": {
      id: "e-55",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-56",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|b392bc02-7a44-8a9d-3eb5-5642d1c1df25",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|b392bc02-7a44-8a9d-3eb5-5642d1c1df25",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1654265604338,
    },
    "e-57": {
      id: "e-57",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-16",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-58",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|b392bc02-7a44-8a9d-3eb5-5642d1c1df4a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|b392bc02-7a44-8a9d-3eb5-5642d1c1df4a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1654265604338,
    },
    "e-59": {
      id: "e-59",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-19",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-60",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|b392bc02-7a44-8a9d-3eb5-5642d1c1df4a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|b392bc02-7a44-8a9d-3eb5-5642d1c1df4a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1654265604338,
    },
    "e-61": {
      id: "e-61",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-24",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-62",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|6a27d2ae-198d-1e34-3077-de3a5167533a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|6a27d2ae-198d-1e34-3077-de3a5167533a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1654267761375,
    },
    "e-63": {
      id: "e-63",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-23",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-64",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|38e2e920-e01d-ba97-aa87-cb8f7b05e0e9",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|38e2e920-e01d-ba97-aa87-cb8f7b05e0e9",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1654267838243,
    },
    "e-65": {
      id: "e-65",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-21",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-66",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|7bc4a8cf-b974-7195-099e-80d545ed01ad",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|7bc4a8cf-b974-7195-099e-80d545ed01ad",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1654268327611,
    },
    "e-67": {
      id: "e-67",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-68",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|1c70d090-50b0-fe2e-a95d-c5255d9ab374",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|1c70d090-50b0-fe2e-a95d-c5255d9ab374",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1654268337214,
    },
    "e-71": {
      id: "e-71",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-2",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-72",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|22573d47-3bba-dc62-908f-63ed19e71bd2",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|22573d47-3bba-dc62-908f-63ed19e71bd2",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1654268365009,
    },
    "e-73": {
      id: "e-73",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-47",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-74",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|b668b37f-8234-0a5b-1d2f-50d1ffc93354",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|b668b37f-8234-0a5b-1d2f-50d1ffc93354",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1654269662111,
    },
    "e-75": {
      id: "e-75",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-26",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-76",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|c890ed27-75bc-ff07-3f70-70eb6b007921",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|c890ed27-75bc-ff07-3f70-70eb6b007921",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1654273271272,
    },
    "e-77": {
      id: "e-77",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-27",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-78",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|aa7aaaee-9d32-bd7b-8550-5014a1014b56",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|aa7aaaee-9d32-bd7b-8550-5014a1014b56",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1654273487482,
    },
    "e-79": {
      id: "e-79",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-28",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-80",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|33aeb146-7cd9-63e8-9205-2a63f1e74d50",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|33aeb146-7cd9-63e8-9205-2a63f1e74d50",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1654273511385,
    },
    "e-91": {
      id: "e-91",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-33",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-92",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|fd204100-2844-9ac6-0061-a48b4340b2d8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|fd204100-2844-9ac6-0061-a48b4340b2d8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1654298213830,
    },
    "e-93": {
      id: "e-93",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-25",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-94",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|bf7187c4-4441-f01d-b905-a6ebf0a54f24",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|bf7187c4-4441-f01d-b905-a6ebf0a54f24",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1655219326725,
    },
    "e-95": {
      id: "e-95",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-34",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-96",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|30702944-7370-1aa5-cca8-40a8adf8c83a",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|30702944-7370-1aa5-cca8-40a8adf8c83a",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1655219498747,
    },
    "e-97": {
      id: "e-97",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-35",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-98",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|6a8a2d25-d8f1-249b-9359-80d175cfa2dd",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|6a8a2d25-d8f1-249b-9359-80d175cfa2dd",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1655219562664,
    },
    "e-99": {
      id: "e-99",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-36",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-100",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|ec8445a4-c922-f78b-1508-e8646591a4b1",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|ec8445a4-c922-f78b-1508-e8646591a4b1",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1655219839763,
    },
    "e-101": {
      id: "e-101",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-37",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-102",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|670b9d60-9b71-178d-c4e4-536f367f12ee",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|670b9d60-9b71-178d-c4e4-536f367f12ee",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1655219946611,
    },
    "e-103": {
      id: "e-103",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-38",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-104",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|b72d82c5-5c19-7807-8748-dc2e9fbe46a8",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|b72d82c5-5c19-7807-8748-dc2e9fbe46a8",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1655220308305,
    },
    "e-105": {
      id: "e-105",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-39",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-106",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|c5941327-b2cd-3b44-3540-d3c7f3f1c983",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|c5941327-b2cd-3b44-3540-d3c7f3f1c983",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1655220785046,
    },
    "e-107": {
      id: "e-107",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-41",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-108",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|8226d090-2ad2-99f4-8027-ab5f3d37d39d",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|8226d090-2ad2-99f4-8027-ab5f3d37d39d",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1655221081635,
    },
    "e-109": {
      id: "e-109",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-42",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-110",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|f7d2f7db-20e7-7e54-1401-cb2ced377648",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|f7d2f7db-20e7-7e54-1401-cb2ced377648",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1655221254497,
    },
    "e-111": {
      id: "e-111",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-44",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-112",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|e8ea8b5c-49b1-919c-e833-231559dc21cf",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|e8ea8b5c-49b1-919c-e833-231559dc21cf",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1655221503092,
    },
    "e-113": {
      id: "e-113",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-43",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-114",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|5c1579fd-9c7e-01a8-3dbf-1cc62fbb94b6",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|5c1579fd-9c7e-01a8-3dbf-1cc62fbb94b6",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1655221551408,
    },
    "e-115": {
      id: "e-115",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-46",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-116",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|dcacb4b7-de36-3d58-e41a-bf0ce16a242f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|dcacb4b7-de36-3d58-e41a-bf0ce16a242f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1655221973671,
    },
    "e-117": {
      id: "e-117",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-118",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|202dbc7d-3e1a-9817-eb84-9c4ce7767955",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|202dbc7d-3e1a-9817-eb84-9c4ce7767955",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1655222010780,
    },
    "e-119": {
      id: "e-119",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-17",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-120",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|b668b37f-8234-0a5b-1d2f-50d1ffc93363",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|b668b37f-8234-0a5b-1d2f-50d1ffc93363",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1655222542753,
    },
    "e-121": {
      id: "e-121",
      name: "",
      animationType: "custom",
      eventTypeId: "PAGE_START",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-48",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-122",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae",
        appliesTo: "PAGE",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae",
          appliesTo: "PAGE",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1655233953371,
    },
    "e-123": {
      id: "e-123",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-50",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-124",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|dae63006-35ee-3f59-5f68-496f1e2acaf4",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|dae63006-35ee-3f59-5f68-496f1e2acaf4",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1675945913402,
    },
    "e-125": {
      id: "e-125",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-49",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-126",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|842d1d8b-ad9e-8f2a-9611-6695906e9bdc",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|842d1d8b-ad9e-8f2a-9611-6695906e9bdc",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1675946652765,
    },
    "e-131": {
      id: "e-131",
      name: "",
      animationType: "preset",
      eventTypeId: "MOUSE_CLICK",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-52",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-132",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|ea36db0a-3105-cc11-5797-23907d00980f",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|ea36db0a-3105-cc11-5797-23907d00980f",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1675962783502,
    },
    "e-133": {
      id: "e-133",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_MOVE",
      action: {
        id: "",
        actionTypeId: "GENERAL_CONTINUOUS_ACTION",
        config: { actionListId: "a-53", affectedElements: {}, duration: 0 },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|274fbb95-cd81-85e6-c736-406538f4380b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|274fbb95-cd81-85e6-c736-406538f4380b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: [
        {
          continuousParameterGroupId: "a-53-p",
          selectedAxis: "X_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
        {
          continuousParameterGroupId: "a-53-p-2",
          selectedAxis: "Y_AXIS",
          basedOn: "ELEMENT",
          reverse: false,
          smoothing: 50,
          restingState: 50,
        },
      ],
      createdOn: 1676022868880,
    },
    "e-134": {
      id: "e-134",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OVER",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-54",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-135",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|274fbb95-cd81-85e6-c736-406538f4380b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|274fbb95-cd81-85e6-c736-406538f4380b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676023068488,
    },
    "e-135": {
      id: "e-135",
      name: "",
      animationType: "custom",
      eventTypeId: "MOUSE_OUT",
      action: {
        id: "",
        actionTypeId: "GENERAL_START_ACTION",
        config: {
          delay: 0,
          easing: "",
          duration: 0,
          actionListId: "a-55",
          affectedElements: {},
          playInReverse: false,
          autoStopEventId: "e-134",
        },
      },
      mediaQueries: ["main", "medium", "small", "tiny"],
      target: {
        id: "63e4d5b7359de159bee34dae|274fbb95-cd81-85e6-c736-406538f4380b",
        appliesTo: "ELEMENT",
        styleBlockIds: [],
      },
      targets: [
        {
          id: "63e4d5b7359de159bee34dae|274fbb95-cd81-85e6-c736-406538f4380b",
          appliesTo: "ELEMENT",
          styleBlockIds: [],
        },
      ],
      config: {
        loop: false,
        playInReverse: false,
        scrollOffsetValue: null,
        scrollOffsetUnit: null,
        delay: null,
        direction: null,
        effectIn: null,
      },
      createdOn: 1676023068489,
    },
  },
  actionLists: {
    a: {
      id: "a",
      title: "New Timed Animation",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "63e4d5b7359de159bee34dae|67af61e7-558b-f92e-6c4f-491deb69b2a5",
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
            {
              id: "a-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "63e4d5b7359de159bee34dae|67af61e7-558b-f92e-6c4f-491deb69b2a5",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-n-2",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "63e4d5b7359de159bee34dae|67af61e7-558b-f92e-6c4f-491deb69b2a5",
                },
                yValue: 50,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-n-4",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.175, 0.885, 0.32, 1.275],
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "63e4d5b7359de159bee34dae|67af61e7-558b-f92e-6c4f-491deb69b2a5",
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-n-6",
              actionTypeId: "TRANSFORM_MOVE",
              config: {
                delay: 0,
                easing: [0.175, 0.885, 0.32, 1.275],
                duration: 500,
                target: {
                  useEventTarget: true,
                  id: "63e4d5b7359de159bee34dae|67af61e7-558b-f92e-6c4f-491deb69b2a5",
                },
                yValue: 0,
                xUnit: "PX",
                yUnit: "%",
                zUnit: "PX",
              },
            },
            {
              id: "a-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 650,
                target: {
                  useEventTarget: true,
                  id: "63e4d5b7359de159bee34dae|67af61e7-558b-f92e-6c4f-491deb69b2a5",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1654185107859,
    },
    "a-2": {
      id: "a-2",
      title: "About Me ON",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-2-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".window-about-me",
                  selectorGuids: ["54bb747f-4c9c-42f1-8d5d-2212b5ff2bec"],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
            {
              id: "a-2-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".window-pics-about-me",
                  selectorGuids: ["8f5ab35e-54bb-4d5d-8215-6542362857be"],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
            {
              id: "a-2-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".image-about-me",
                  selectorGuids: ["8dc658a1-57f1-4a74-9ad3-15e7639e9cc8"],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-2-n-4",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.075, 0.82, 0.165, 1],
                duration: 200,
                target: {
                  selector: ".window-about-me",
                  selectorGuids: ["54bb747f-4c9c-42f1-8d5d-2212b5ff2bec"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-2-n-5",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 200,
                easing: [0.075, 0.82, 0.165, 1],
                duration: 200,
                target: {
                  selector: ".window-pics-about-me",
                  selectorGuids: ["8f5ab35e-54bb-4d5d-8215-6542362857be"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1654202340964,
    },
    "a-4": {
      id: "a-4",
      title: "New Timed Animation",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-4-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".image-about-me",
                  selectorGuids: ["8dc658a1-57f1-4a74-9ad3-15e7639e9cc8"],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-4-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.25, 0.25, 0.75, 0.75],
                duration: 200,
                target: {
                  selector: ".image-about-me",
                  selectorGuids: ["8dc658a1-57f1-4a74-9ad3-15e7639e9cc8"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1654202987380,
    },
    "a-5": {
      id: "a-5",
      title: "Exit Window",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-5-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.6, -0.28, 0.735, 0.045],
                duration: 200,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".window-pics-about-me.draggable",
                  selectorGuids: [
                    "8f5ab35e-54bb-4d5d-8215-6542362857be",
                    "7f50e0a0-2a5a-2082-2229-fff69985ee05",
                  ],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1654204555209,
    },
    "a-6": {
      id: "a-6",
      title: "Exit Window 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-6-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.6, -0.28, 0.735, 0.045],
                duration: 200,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".window-notes.draggable",
                  selectorGuids: [
                    "9afc38d1-e8b1-adc3-b595-06e021c8ee99",
                    "2cb1ff0e-62fb-b60d-f70f-457228218142",
                  ],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1654204555209,
    },
    "a-13": {
      id: "a-13",
      title: "Exit Window 6",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-13-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.6, -0.28, 0.735, 0.045],
                duration: 200,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".image-about-bike.draggable",
                  selectorGuids: [
                    "50adc9fc-3a44-bb32-7090-f419143acf1c",
                    "27d491f1-93b6-8e38-3396-73dc7a9f31e0",
                  ],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1654204555209,
    },
    "a-9": {
      id: "a-9",
      title: "Exit Window 4",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-9-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.6, -0.28, 0.735, 0.045],
                duration: 200,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".image-about-me.draggable",
                  selectorGuids: [
                    "8dc658a1-57f1-4a74-9ad3-15e7639e9cc8",
                    "2f84419d-e434-c863-3842-c9e36dd93500",
                  ],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1654204555209,
    },
    "a-8": {
      id: "a-8",
      title: "Exit Window 3",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-8-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.6, -0.28, 0.735, 0.045],
                duration: 200,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".image-about-myself.draggable",
                  selectorGuids: [
                    "4fb24ddf-b6c7-a2ea-4a17-e5b42b967edb",
                    "075c2d33-6651-5997-6902-be6715a70741",
                  ],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1654204555209,
    },
    "a-10": {
      id: "a-10",
      title: "New Timed Animation 3",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-10-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".image-about-trip.draggable",
                  selectorGuids: [
                    "702f74d8-7e71-eb25-6a03-7ebbcabe554d",
                    "5d0c7c45-341e-374a-6f25-f3db58c64cbf",
                  ],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-10-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.25, 0.25, 0.75, 0.75],
                duration: 200,
                target: {
                  selector: ".image-about-trip.draggable",
                  selectorGuids: [
                    "702f74d8-7e71-eb25-6a03-7ebbcabe554d",
                    "5d0c7c45-341e-374a-6f25-f3db58c64cbf",
                  ],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1654202987380,
    },
    "a-11": {
      id: "a-11",
      title: "Exit Window 5",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-11-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.6, -0.28, 0.735, 0.045],
                duration: 200,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".image-about-trip.draggable",
                  selectorGuids: [
                    "702f74d8-7e71-eb25-6a03-7ebbcabe554d",
                    "5d0c7c45-341e-374a-6f25-f3db58c64cbf",
                  ],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1654204555209,
    },
    "a-12": {
      id: "a-12",
      title: "New Timed Animation 4",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-12-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".image-about-bike.draggable",
                  selectorGuids: [
                    "50adc9fc-3a44-bb32-7090-f419143acf1c",
                    "27d491f1-93b6-8e38-3396-73dc7a9f31e0",
                  ],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-12-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.25, 0.25, 0.75, 0.75],
                duration: 200,
                target: {
                  selector: ".image-about-bike.draggable",
                  selectorGuids: [
                    "50adc9fc-3a44-bb32-7090-f419143acf1c",
                    "27d491f1-93b6-8e38-3396-73dc7a9f31e0",
                  ],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1654202987380,
    },
    "a-14": {
      id: "a-14",
      title: "Exit Music",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-14-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.6, -0.28, 0.735, 0.045],
                duration: 200,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".div-block-40",
                  selectorGuids: ["32f9d289-d9fd-f066-930d-dd61fe636154"],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1654212898573,
    },
    "a-15": {
      id: "a-15",
      title: "Music ON",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-15-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".div-block-40",
                  selectorGuids: ["32f9d289-d9fd-f066-930d-dd61fe636154"],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-15-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.175, 0.885, 0.32, 1.275],
                duration: 200,
                target: {
                  selector: ".div-block-40",
                  selectorGuids: ["32f9d289-d9fd-f066-930d-dd61fe636154"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1654212941583,
    },
    "a-7": {
      id: "a-7",
      title: "New Timed Animation 2",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-7-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".image-about-myself.draggable",
                  selectorGuids: [
                    "4fb24ddf-b6c7-a2ea-4a17-e5b42b967edb",
                    "075c2d33-6651-5997-6902-be6715a70741",
                  ],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-7-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.25, 0.25, 0.75, 0.75],
                duration: 200,
                target: {
                  selector: ".image-about-myself.draggable",
                  selectorGuids: [
                    "4fb24ddf-b6c7-a2ea-4a17-e5b42b967edb",
                    "075c2d33-6651-5997-6902-be6715a70741",
                  ],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1654202987380,
    },
    "a-45": {
      id: "a-45",
      title: "Exit Window 20",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-45-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.6, -0.28, 0.735, 0.045],
                duration: 200,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".window-partnerhub.draggable",
                  selectorGuids: [
                    "7afc9c53-a697-dd6b-ecab-fdbb7e09fb3b",
                    "9b6f6d10-f927-f7de-81a9-cc5ee5af884c",
                  ],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1654204555209,
    },
    "a-17": {
      id: "a-17",
      title: "New Timed Animation 5",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-17-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".window-form-mail._2.draggable",
                  selectorGuids: [
                    "e63bef16-1076-ed4f-e134-f01e159ec846",
                    "df3c943a-e381-4d23-fc00-987d434a3c59",
                    "034a3c1f-5286-f449-20a4-214e6d434d51",
                  ],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-17-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.075, 0.82, 0.165, 1],
                duration: 200,
                target: {
                  selector: ".window-form-mail._2.draggable",
                  selectorGuids: [
                    "e63bef16-1076-ed4f-e134-f01e159ec846",
                    "df3c943a-e381-4d23-fc00-987d434a3c59",
                    "034a3c1f-5286-f449-20a4-214e6d434d51",
                  ],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1654202987380,
    },
    "a-18": {
      id: "a-18",
      title: "Exit Window 8",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-18-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.6, -0.28, 0.735, 0.045],
                duration: 200,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".window-confirm._2.draggable",
                  selectorGuids: [
                    "2c6bdf0e-d522-5184-86c5-602d051fe04f",
                    "cf54f0f7-96ff-e2a5-aeba-1866a78fdd30",
                    "8b4b3756-6e51-3bd0-ef79-bd577164b7ab",
                  ],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1654204555209,
    },
    "a-23": {
      id: "a-23",
      title: "Exit Window 10",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-23-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.6, -0.28, 0.735, 0.045],
                duration: 200,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".theme._2-copy.draggable",
                  selectorGuids: [
                    "1e689f1a-daad-7238-a028-27d49be4d90a",
                    "26849003-4b79-5ed7-a7eb-8cac5f0e346d",
                    "bba4c9b9-c0b6-a087-4804-154d83825898",
                  ],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1654204555209,
    },
    "a-20": {
      id: "a-20",
      title: "Exit Window 9",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-20-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.6, -0.28, 0.735, 0.045],
                duration: 200,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".window-projects._2.draggable",
                  selectorGuids: [
                    "e56136a5-4855-9a91-f7f8-a33ed9932231",
                    "6c010109-ef0d-d445-0007-cfb7c33daf3e",
                    "9e3ce1d7-f3cb-7f32-1fca-8ac63fa1e855",
                  ],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1654204555209,
    },
    "a-21": {
      id: "a-21",
      title: "New Timed Animation 6",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-21-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".window-projects._2.draggable",
                  selectorGuids: [
                    "e56136a5-4855-9a91-f7f8-a33ed9932231",
                    "6c010109-ef0d-d445-0007-cfb7c33daf3e",
                    "9e3ce1d7-f3cb-7f32-1fca-8ac63fa1e855",
                  ],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-21-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.075, 0.82, 0.165, 1],
                duration: 200,
                target: {
                  selector: ".window-projects.draggable._2",
                  selectorGuids: [
                    "e56136a5-4855-9a91-f7f8-a33ed9932231",
                    "8249ec40-989b-5b1e-bf38-d0478b00aab4",
                    "2f715151-d816-be82-dd63-815b70ed0374",
                  ],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1654202987380,
    },
    "a-16": {
      id: "a-16",
      title: "Exit Window 7",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-16-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.6, -0.28, 0.735, 0.045],
                duration: 200,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".window-form-mail._2.draggable",
                  selectorGuids: [
                    "e63bef16-1076-ed4f-e134-f01e159ec846",
                    "df3c943a-e381-4d23-fc00-987d434a3c59",
                    "034a3c1f-5286-f449-20a4-214e6d434d51",
                  ],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1654204555209,
    },
    "a-19": {
      id: "a-19",
      title: "Send Email",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-19-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".window-blackhole._2.draggable",
                  selectorGuids: [
                    "e6b4d5f5-d902-7f7a-bea8-8eabe9cec6a2",
                    "eeda6379-d105-c781-db09-29ab4fec0eab",
                    "bc204211-1ceb-aff8-7dc9-feef6f0b47f1",
                  ],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
            {
              id: "a-19-n-16",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".window-blackhole._2.draggable",
                  selectorGuids: [
                    "e6b4d5f5-d902-7f7a-bea8-8eabe9cec6a2",
                    "eeda6379-d105-c781-db09-29ab4fec0eab",
                    "bc204211-1ceb-aff8-7dc9-feef6f0b47f1",
                  ],
                },
                zValue: -61,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-19-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".window-confirm._2.draggable",
                  selectorGuids: [
                    "2c6bdf0e-d522-5184-86c5-602d051fe04f",
                    "cf54f0f7-96ff-e2a5-aeba-1866a78fdd30",
                    "8b4b3756-6e51-3bd0-ef79-bd577164b7ab",
                  ],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-19-n-4",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "63e4d5b7359de159bee34dae|91e099d1-59f8-4cf0-8787-030a14fae3b9",
                },
                value: "none",
              },
            },
            {
              id: "a-19-n-5",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "63e4d5b7359de159bee34dae|30700437-fa65-8e46-8369-407c41dfef3c",
                },
                value: "block",
              },
            },
            {
              id: "a-19-n-17",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: [0.215, 0.61, 0.355, 1],
                duration: 500,
                target: {
                  selector: ".window-blackhole._2.draggable",
                  selectorGuids: [
                    "e6b4d5f5-d902-7f7a-bea8-8eabe9cec6a2",
                    "eeda6379-d105-c781-db09-29ab4fec0eab",
                    "bc204211-1ceb-aff8-7dc9-feef6f0b47f1",
                  ],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
            {
              id: "a-19-n-3",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.175, 0.885, 0.32, 1.275],
                duration: 750,
                target: {
                  selector: ".window-blackhole._2.draggable",
                  selectorGuids: [
                    "e6b4d5f5-d902-7f7a-bea8-8eabe9cec6a2",
                    "eeda6379-d105-c781-db09-29ab4fec0eab",
                    "bc204211-1ceb-aff8-7dc9-feef6f0b47f1",
                  ],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-19-n-6",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "63e4d5b7359de159bee34dae|91e099d1-59f8-4cf0-8787-030a14fae3b9",
                },
                value: "block",
              },
            },
            {
              id: "a-19-n-7",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "63e4d5b7359de159bee34dae|30700437-fa65-8e46-8369-407c41dfef3c",
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-19-n-8",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 1000,
                easing: "",
                duration: 0,
                target: {
                  id: "63e4d5b7359de159bee34dae|91e099d1-59f8-4cf0-8787-030a14fae3b9",
                },
                value: "none",
              },
            },
            {
              id: "a-19-n-9",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 1000,
                easing: "",
                duration: 0,
                target: {
                  id: "63e4d5b7359de159bee34dae|30700437-fa65-8e46-8369-407c41dfef3c",
                },
                value: "block",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-19-n-10",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 1000,
                easing: "",
                duration: 0,
                target: {
                  id: "63e4d5b7359de159bee34dae|91e099d1-59f8-4cf0-8787-030a14fae3b9",
                },
                value: "block",
              },
            },
            {
              id: "a-19-n-11",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 1000,
                easing: "",
                duration: 0,
                target: {
                  id: "63e4d5b7359de159bee34dae|30700437-fa65-8e46-8369-407c41dfef3c",
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-19-n-12",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 1000,
                easing: "",
                duration: 0,
                target: {
                  id: "63e4d5b7359de159bee34dae|91e099d1-59f8-4cf0-8787-030a14fae3b9",
                },
                value: "none",
              },
            },
            {
              id: "a-19-n-13",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 1000,
                easing: "",
                duration: 0,
                target: {
                  id: "63e4d5b7359de159bee34dae|30700437-fa65-8e46-8369-407c41dfef3c",
                },
                value: "block",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-19-n-14",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 1000,
                easing: [0.6, -0.28, 0.735, 0.045],
                duration: 200,
                target: {
                  selector: ".window-blackhole._2.draggable",
                  selectorGuids: [
                    "e6b4d5f5-d902-7f7a-bea8-8eabe9cec6a2",
                    "eeda6379-d105-c781-db09-29ab4fec0eab",
                    "bc204211-1ceb-aff8-7dc9-feef6f0b47f1",
                  ],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-19-n-15",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.175, 0.885, 0.32, 1.275],
                duration: 200,
                target: {
                  selector: ".window-confirm._2.draggable",
                  selectorGuids: [
                    "2c6bdf0e-d522-5184-86c5-602d051fe04f",
                    "cf54f0f7-96ff-e2a5-aeba-1866a78fdd30",
                    "8b4b3756-6e51-3bd0-ef79-bd577164b7ab",
                  ],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1654262792012,
    },
    "a-24": {
      id: "a-24",
      title: "New Timed Animation",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-24-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".theme._2-copy.draggable",
                  selectorGuids: [
                    "1e689f1a-daad-7238-a028-27d49be4d90a",
                    "26849003-4b79-5ed7-a7eb-8cac5f0e346d",
                    "bba4c9b9-c0b6-a087-4804-154d83825898",
                  ],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-24-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.175, 0.885, 0.32, 1.275],
                duration: 200,
                target: {
                  selector: ".theme._2-copy.draggable",
                  selectorGuids: [
                    "1e689f1a-daad-7238-a028-27d49be4d90a",
                    "26849003-4b79-5ed7-a7eb-8cac5f0e346d",
                    "bba4c9b9-c0b6-a087-4804-154d83825898",
                  ],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1654268041477,
    },
    "a-47": {
      id: "a-47",
      title: "Exit Window 21",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-47-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.6, -0.28, 0.735, 0.045],
                duration: 200,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".window-about-me.draggable",
                  selectorGuids: [
                    "54bb747f-4c9c-42f1-8d5d-2212b5ff2bec",
                    "932a1140-d279-4fff-c149-dcfe60068b0d",
                  ],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
            {
              id: "a-47-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.6, -0.28, 0.735, 0.045],
                duration: 200,
                target: {
                  selector: ".window-pics-about-me.draggable",
                  selectorGuids: [
                    "8f5ab35e-54bb-4d5d-8215-6542362857be",
                    "7f50e0a0-2a5a-2082-2229-fff69985ee05",
                  ],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1654204555209,
    },
    "a-26": {
      id: "a-26",
      title: "Exit Window 12",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-26-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.6, -0.28, 0.735, 0.045],
                duration: 200,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".window-motkraft",
                  selectorGuids: ["d555e0f4-9d65-dbce-f3a7-1b5f47c752a4"],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1654204555209,
    },
    "a-27": {
      id: "a-27",
      title: "New Timed Animation 7",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-27-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".window-motkraft.draggable",
                  selectorGuids: [
                    "d555e0f4-9d65-dbce-f3a7-1b5f47c752a4",
                    "32fcb28f-040f-705c-f383-ec2963e2e7b4",
                  ],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-27-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.075, 0.82, 0.165, 1],
                duration: 200,
                target: {
                  selector: ".window-motkraft.draggable",
                  selectorGuids: [
                    "d555e0f4-9d65-dbce-f3a7-1b5f47c752a4",
                    "32fcb28f-040f-705c-f383-ec2963e2e7b4",
                  ],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1654202987380,
    },
    "a-28": {
      id: "a-28",
      title: "New Timed Animation 8",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-28-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".window-apteo.draggable",
                  selectorGuids: [
                    "a97433ba-29b8-80f7-eef2-66394686adaf",
                    "7d5c0679-37ea-1b4b-604d-963806063286",
                  ],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-28-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.075, 0.82, 0.165, 1],
                duration: 200,
                target: {
                  selector: ".window-apteo.draggable",
                  selectorGuids: [
                    "a97433ba-29b8-80f7-eef2-66394686adaf",
                    "7d5c0679-37ea-1b4b-604d-963806063286",
                  ],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1654202987380,
    },
    "a-33": {
      id: "a-33",
      title: "New Timed Animation 10",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-33-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".window-notes.draggable",
                  selectorGuids: [
                    "9afc38d1-e8b1-adc3-b595-06e021c8ee99",
                    "2cb1ff0e-62fb-b60d-f70f-457228218142",
                  ],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-33-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.075, 0.82, 0.165, 1],
                duration: 200,
                target: {
                  selector: ".window-notes.draggable",
                  selectorGuids: [
                    "9afc38d1-e8b1-adc3-b595-06e021c8ee99",
                    "2cb1ff0e-62fb-b60d-f70f-457228218142",
                  ],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1654202987380,
    },
    "a-25": {
      id: "a-25",
      title: "Exit Window 11",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-25-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.6, -0.28, 0.735, 0.045],
                duration: 200,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".window-apteo",
                  selectorGuids: ["a97433ba-29b8-80f7-eef2-66394686adaf"],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1654204555209,
    },
    "a-34": {
      id: "a-34",
      title: "New Timed Animation 11",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-34-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".window-kmc.draggable",
                  selectorGuids: [
                    "ae4bf0cb-451b-6e64-5dbe-cc81d9ca14f8",
                    "be5f766e-b693-42ff-d3d3-fbb6d56c094a",
                  ],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-34-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.075, 0.82, 0.165, 1],
                duration: 200,
                target: {
                  selector: ".window-kmc.draggable",
                  selectorGuids: [
                    "ae4bf0cb-451b-6e64-5dbe-cc81d9ca14f8",
                    "be5f766e-b693-42ff-d3d3-fbb6d56c094a",
                  ],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1654202987380,
    },
    "a-35": {
      id: "a-35",
      title: "Exit Window 15",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-35-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.6, -0.28, 0.735, 0.045],
                duration: 200,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".window-kmc.draggable",
                  selectorGuids: [
                    "ae4bf0cb-451b-6e64-5dbe-cc81d9ca14f8",
                    "be5f766e-b693-42ff-d3d3-fbb6d56c094a",
                  ],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1654204555209,
    },
    "a-36": {
      id: "a-36",
      title: "New Timed Animation 12",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-36-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".window-readylift.draggable",
                  selectorGuids: [
                    "48df82b9-4fb8-0783-b77d-05377337b91a",
                    "5eabc3b6-20d8-6592-4b7a-b4b11a396baa",
                  ],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-36-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.075, 0.82, 0.165, 1],
                duration: 200,
                target: {
                  selector: ".window-readylift.draggable",
                  selectorGuids: [
                    "48df82b9-4fb8-0783-b77d-05377337b91a",
                    "5eabc3b6-20d8-6592-4b7a-b4b11a396baa",
                  ],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1654202987380,
    },
    "a-37": {
      id: "a-37",
      title: "Exit Window 16",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-37-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.6, -0.28, 0.735, 0.045],
                duration: 200,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".window-readylift.draggable",
                  selectorGuids: [
                    "48df82b9-4fb8-0783-b77d-05377337b91a",
                    "5eabc3b6-20d8-6592-4b7a-b4b11a396baa",
                  ],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1654204555209,
    },
    "a-38": {
      id: "a-38",
      title: "New Timed Animation 13",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-38-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".window-imchi.draggable",
                  selectorGuids: [
                    "b907887f-7597-3efa-6425-e5472e8c2977",
                    "799d7a5e-b341-f67b-2cd0-aeb756bb909c",
                  ],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-38-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.075, 0.82, 0.165, 1],
                duration: 200,
                target: {
                  selector: ".window-imchi.draggable",
                  selectorGuids: [
                    "b907887f-7597-3efa-6425-e5472e8c2977",
                    "799d7a5e-b341-f67b-2cd0-aeb756bb909c",
                  ],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1654202987380,
    },
    "a-39": {
      id: "a-39",
      title: "Exit Window 17",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-39-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.6, -0.28, 0.735, 0.045],
                duration: 200,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".window-imchi.draggable",
                  selectorGuids: [
                    "b907887f-7597-3efa-6425-e5472e8c2977",
                    "799d7a5e-b341-f67b-2cd0-aeb756bb909c",
                  ],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1654204555209,
    },
    "a-41": {
      id: "a-41",
      title: "New Timed Animation 14",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-41-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".window-musea.draggable",
                  selectorGuids: [
                    "ccb0cfb8-1d43-4fcd-d582-52c0df618308",
                    "898a85a5-2c48-cb96-1ed0-005f3617e918",
                  ],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-41-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.075, 0.82, 0.165, 1],
                duration: 200,
                target: {
                  selector: ".window-musea.draggable",
                  selectorGuids: [
                    "ccb0cfb8-1d43-4fcd-d582-52c0df618308",
                    "898a85a5-2c48-cb96-1ed0-005f3617e918",
                  ],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1654202987380,
    },
    "a-42": {
      id: "a-42",
      title: "Exit Window 18",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-42-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.6, -0.28, 0.735, 0.045],
                duration: 200,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".window-musea.draggable",
                  selectorGuids: [
                    "ccb0cfb8-1d43-4fcd-d582-52c0df618308",
                    "898a85a5-2c48-cb96-1ed0-005f3617e918",
                  ],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1654204555209,
    },
    "a-44": {
      id: "a-44",
      title: "New Timed Animation 15",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-44-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".window-automaited.draggable",
                  selectorGuids: [
                    "e4c0363c-faf9-785e-5a3d-5166ea3208d8",
                    "b4d3450f-424a-041c-9871-8492ddfa6036",
                  ],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-44-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.075, 0.82, 0.165, 1],
                duration: 200,
                target: {
                  selector: ".window-automaited.draggable",
                  selectorGuids: [
                    "e4c0363c-faf9-785e-5a3d-5166ea3208d8",
                    "b4d3450f-424a-041c-9871-8492ddfa6036",
                  ],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1654202987380,
    },
    "a-43": {
      id: "a-43",
      title: "Exit Window 19",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-43-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.6, -0.28, 0.735, 0.045],
                duration: 200,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".window-automaited.draggable",
                  selectorGuids: [
                    "e4c0363c-faf9-785e-5a3d-5166ea3208d8",
                    "b4d3450f-424a-041c-9871-8492ddfa6036",
                  ],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1654204555209,
    },
    "a-46": {
      id: "a-46",
      title: "New Timed Animation 16",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-46-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".window-partnerhub.draggable",
                  selectorGuids: [
                    "7afc9c53-a697-dd6b-ecab-fdbb7e09fb3b",
                    "9b6f6d10-f927-f7de-81a9-cc5ee5af884c",
                  ],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-46-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.075, 0.82, 0.165, 1],
                duration: 200,
                target: {
                  selector: ".window-automaited.draggable",
                  selectorGuids: [
                    "e4c0363c-faf9-785e-5a3d-5166ea3208d8",
                    "b4d3450f-424a-041c-9871-8492ddfa6036",
                  ],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1654202987380,
    },
    "a-48": {
      id: "a-48",
      title: "Loader",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-48-n",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "63e4d5b7359de159bee34dae|0e407d89-754d-c9df-c046-2f01976fb14d",
                },
                value: "flex",
              },
            },
            {
              id: "a-48-n-23",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "63e4d5b7359de159bee34dae|a5d4f439-93e8-500c-0cce-8603583d6f8f",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-48-n-2",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "63e4d5b7359de159bee34dae|0af9e2fe-1e59-7406-ba50-bf88d385654b",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-48-n-3",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "63e4d5b7359de159bee34dae|081f29a3-81bc-8188-ae90-451a724d6764",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-48-n-4",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "63e4d5b7359de159bee34dae|9fa4a8fa-06cf-964a-727b-80b0056437f7",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-48-n-5",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "63e4d5b7359de159bee34dae|a5bcda8a-1bc6-0164-2e3a-f93a4ac5e0fe",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-48-n-6",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "63e4d5b7359de159bee34dae|9e97a157-2c19-edfd-fbf2-098dd8cb022d",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-48-n-7",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "63e4d5b7359de159bee34dae|0e45985d-d680-8a21-a714-88a72c9ac1c0",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-48-n-8",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "63e4d5b7359de159bee34dae|044e1ac8-b7bf-4b1b-8905-64d076247791",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-48-n-9",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "63e4d5b7359de159bee34dae|dd800c0e-83d6-fb6c-aab7-e6d90e90ae5b",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-48-n-10",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "63e4d5b7359de159bee34dae|67eed2b3-2a12-a123-ce26-c11fefe0c996",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-48-n-11",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  id: "63e4d5b7359de159bee34dae|e275e18b-71f6-fe27-b370-0ff8d910265c",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-48-n-26",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "63e4d5b7359de159bee34dae|0e407d89-754d-c9df-c046-2f01976fb14d",
                },
                value: "flex",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-48-n-12",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "63e4d5b7359de159bee34dae|0af9e2fe-1e59-7406-ba50-bf88d385654b",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-48-n-13",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 500,
                easing: "",
                duration: 0,
                target: {
                  id: "63e4d5b7359de159bee34dae|081f29a3-81bc-8188-ae90-451a724d6764",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-48-n-14",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1000,
                easing: "",
                duration: 0,
                target: {
                  id: "63e4d5b7359de159bee34dae|9fa4a8fa-06cf-964a-727b-80b0056437f7",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-48-n-15",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 1500,
                easing: "",
                duration: 0,
                target: {
                  id: "63e4d5b7359de159bee34dae|a5bcda8a-1bc6-0164-2e3a-f93a4ac5e0fe",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-48-n-16",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 2000,
                easing: "",
                duration: 0,
                target: {
                  id: "63e4d5b7359de159bee34dae|9e97a157-2c19-edfd-fbf2-098dd8cb022d",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-48-n-17",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 2500,
                easing: "",
                duration: 0,
                target: {
                  id: "63e4d5b7359de159bee34dae|0e45985d-d680-8a21-a714-88a72c9ac1c0",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-48-n-18",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 3000,
                easing: "",
                duration: 0,
                target: {
                  id: "63e4d5b7359de159bee34dae|044e1ac8-b7bf-4b1b-8905-64d076247791",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-48-n-19",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 3500,
                easing: "",
                duration: 0,
                target: {
                  id: "63e4d5b7359de159bee34dae|dd800c0e-83d6-fb6c-aab7-e6d90e90ae5b",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-48-n-20",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 4000,
                easing: "",
                duration: 0,
                target: {
                  id: "63e4d5b7359de159bee34dae|67eed2b3-2a12-a123-ce26-c11fefe0c996",
                },
                value: 1,
                unit: "",
              },
            },
            {
              id: "a-48-n-21",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 4500,
                easing: "",
                duration: 0,
                target: {
                  id: "63e4d5b7359de159bee34dae|e275e18b-71f6-fe27-b370-0ff8d910265c",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-48-n-22",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 250,
                target: {
                  id: "63e4d5b7359de159bee34dae|0e407d89-754d-c9df-c046-2f01976fb14d",
                },
                value: 0,
                unit: "",
              },
            },
            {
              id: "a-48-n-25",
              actionTypeId: "GENERAL_DISPLAY",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                target: {
                  id: "63e4d5b7359de159bee34dae|0e407d89-754d-c9df-c046-2f01976fb14d",
                },
                value: "none",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-48-n-24",
              actionTypeId: "STYLE_OPACITY",
              config: {
                delay: 0,
                easing: "",
                duration: 250,
                target: {
                  id: "63e4d5b7359de159bee34dae|a5d4f439-93e8-500c-0cce-8603583d6f8f",
                },
                value: 1,
                unit: "",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1655233958217,
    },
    "a-50": {
      id: "a-50",
      title: "Exit Window 22",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-50-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.6, -0.28, 0.735, 0.045],
                duration: 200,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".snake.draggable",
                  selectorGuids: [
                    "bc6cf9a9-f173-90d2-fcd3-340b9241cc7e",
                    "a084029a-9030-d109-1510-5d45baad6cd7",
                  ],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1654204555209,
    },
    "a-49": {
      id: "a-49",
      title: "New Timed Animation 17",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-49-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".snake.draggable",
                  selectorGuids: [
                    "bc6cf9a9-f173-90d2-fcd3-340b9241cc7e",
                    "a084029a-9030-d109-1510-5d45baad6cd7",
                  ],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-49-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.075, 0.82, 0.165, 1],
                duration: 200,
                target: {
                  selector: ".snake.draggable",
                  selectorGuids: [
                    "bc6cf9a9-f173-90d2-fcd3-340b9241cc7e",
                    "a084029a-9030-d109-1510-5d45baad6cd7",
                  ],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1654202987380,
    },
    "a-52": {
      id: "a-52",
      title: "Exit Window 24",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-52-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.6, -0.28, 0.735, 0.045],
                duration: 200,
                target: {
                  useEventTarget: "PARENT",
                  selector: ".snake.draggable.message",
                  selectorGuids: [
                    "bc6cf9a9-f173-90d2-fcd3-340b9241cc7e",
                    "a084029a-9030-d109-1510-5d45baad6cd7",
                    "90202dad-e1f5-2ae4-aaaf-7adc78cafb9b",
                  ],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1654204555209,
    },
    "a-53": {
      id: "a-53",
      title: "New Mouse Animation",
      continuousParameterGroups: [
        {
          id: "a-53-p",
          type: "MOUSE_X",
          parameterLabel: "Mouse X",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-53-n",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".div-block-95",
                      selectorGuids: ["5112c4a3-81da-72d3-d454-5d049b8f8a2c"],
                    },
                    xValue: 35,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-53-n-2",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".div-block-95",
                      selectorGuids: ["5112c4a3-81da-72d3-d454-5d049b8f8a2c"],
                    },
                    xValue: -35,
                    xUnit: "%",
                    yUnit: "PX",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
        {
          id: "a-53-p-2",
          type: "MOUSE_Y",
          parameterLabel: "Mouse Y",
          continuousActionGroups: [
            {
              keyframe: 0,
              actionItems: [
                {
                  id: "a-53-n-3",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".div-block-95",
                      selectorGuids: ["5112c4a3-81da-72d3-d454-5d049b8f8a2c"],
                    },
                    yValue: -10,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
            {
              keyframe: 100,
              actionItems: [
                {
                  id: "a-53-n-4",
                  actionTypeId: "TRANSFORM_MOVE",
                  config: {
                    delay: 0,
                    easing: "",
                    duration: 500,
                    target: {
                      useEventTarget: "CHILDREN",
                      selector: ".div-block-95",
                      selectorGuids: ["5112c4a3-81da-72d3-d454-5d049b8f8a2c"],
                    },
                    yValue: 10,
                    xUnit: "PX",
                    yUnit: "%",
                    zUnit: "PX",
                  },
                },
              ],
            },
          ],
        },
      ],
      createdOn: 1676022871449,
    },
    "a-54": {
      id: "a-54",
      title: "New Timed Animation",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-54-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".div-block-95",
                  selectorGuids: ["5112c4a3-81da-72d3-d454-5d049b8f8a2c"],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
            {
              id: "a-54-n-3",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 500,
                target: {
                  selector: ".div-block-95",
                  selectorGuids: ["5112c4a3-81da-72d3-d454-5d049b8f8a2c"],
                },
                zValue: -49,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
        {
          actionItems: [
            {
              id: "a-54-n-2",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: [0.175, 0.885, 0.32, 1.275],
                duration: 650,
                target: {
                  selector: ".div-block-95",
                  selectorGuids: ["5112c4a3-81da-72d3-d454-5d049b8f8a2c"],
                },
                xValue: 1,
                yValue: 1,
                locked: true,
              },
            },
            {
              id: "a-54-n-4",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: [0.175, 0.885, 0.32, 1.275],
                duration: 650,
                target: {
                  selector: ".div-block-95",
                  selectorGuids: ["5112c4a3-81da-72d3-d454-5d049b8f8a2c"],
                },
                zValue: 0,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: true,
      createdOn: 1676023071523,
    },
    "a-55": {
      id: "a-55",
      title: "New Timed Animation 18",
      actionItemGroups: [
        {
          actionItems: [
            {
              id: "a-55-n",
              actionTypeId: "TRANSFORM_SCALE",
              config: {
                delay: 0,
                easing: "",
                duration: 250,
                target: {
                  selector: ".div-block-95",
                  selectorGuids: ["5112c4a3-81da-72d3-d454-5d049b8f8a2c"],
                },
                xValue: 0,
                yValue: 0,
                locked: true,
              },
            },
            {
              id: "a-55-n-2",
              actionTypeId: "TRANSFORM_ROTATE",
              config: {
                delay: 0,
                easing: "",
                duration: 250,
                target: {
                  selector: ".div-block-95",
                  selectorGuids: ["5112c4a3-81da-72d3-d454-5d049b8f8a2c"],
                },
                zValue: -49,
                xUnit: "DEG",
                yUnit: "DEG",
                zUnit: "deg",
              },
            },
          ],
        },
      ],
      useFirstGroupAsInitialState: false,
      createdOn: 1676023071523,
    },
  },
  site: {
    mediaQueries: [
      { key: "main", min: 992, max: 10000 },
      { key: "medium", min: 768, max: 991 },
      { key: "small", min: 480, max: 767 },
      { key: "tiny", min: 0, max: 479 },
    ],
  },
});
