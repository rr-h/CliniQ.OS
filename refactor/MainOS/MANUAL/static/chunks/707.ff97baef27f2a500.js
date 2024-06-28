"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [707], { 97707: function(n, t, e) { e.r(t), e.d(t, { IntroAnimation: function() { return M }, default: function() { return nn } }); var i = e(47568),
                r = e(26042),
                o = e(7297),
                a = e(70655),
                u = e(85893),
                c = e(67294),
                s = e(14141),
                f = e(46513),
                d = e(33234),
                l = e(16014),
                h = e(96681); var p = e(12064),
                m = e(59395),
                g = e(96964),
                v = e(96076),
                w = e(61634),
                x = e(6173);

            function y() { var n = (0, o.Z)(["\n  position: relative;\n  width: 100%;\n  height: 100vh;\n"]); return y = function() { return n }, n }

            function Z() { var n = (0, o.Z)(["\n  z-index: 30;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  transform-origin: center top;\n"]); return Z = function() { return n }, n }

            function b() { var n = (0, o.Z)(["\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  transform-origin: center top;\n"]); return b = function() { return n }, n }

            function I() { var n = (0, o.Z)(["\n  display: flex;\n  justify-content: center;\n  position: relative;\n  margin: 0 auto;\n  height: 100%;\n"]); return I = function() { return n }, n }

            function _() { var n = (0, o.Z)(["\n  z-index: 100;\n  grid-area: center;\n  position: absolute;\n  width: 55vw;\n  pointer-events: none;\n"]); return _ = function() { return n }, n }

            function S() { var n = (0, o.Z)(["\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-areas: 'center';\n  align-items: center;\n  z-index: 50;\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  transform-origin: center top;\n"]); return S = function() { return n }, n }

            function j() { var n = (0, o.Z)(["\n  z-index: 50;\n  position: relative;\n  grid-area: center;\n"]); return j = function() { return n }, n }

            function E() { var n = (0, o.Z)(["\n  grid-area: center;\n  z-index: 100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n\n  background-size: cover;\n  background-position: center;\n"]); return E = function() { return n }, n }

            function C() { var n = (0, o.Z)(["\n  width: clamp(400px, 60vw, 620px);\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 8px;\n\n  background: #ffffff;\n  border: 1px solid #000000;\n  border-radius: 2px;\n"]); return C = function() { return n }, n }

            function P() { var n = (0, o.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  padding: 8px 12px;\n\n  background: #000;\n  color: #fff;\n  font-family: var(--font-title);\n  font-size: 13px;\n  line-height: 24px;\n  text-align: center;\n"]); return P = function() { return n }, n }

            function k() { var n = (0, o.Z)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 24px;\n  padding: 20px clamp(30px, 15vw, 90px);\n\n  background: #ffffff;\n  border: 2px solid #000000;\n  border-radius: 2px;\n"]); return k = function() { return n }, n }

            function z() { var n = (0, o.Z)(["\n  height: 100px;\n"]); return z = function() { return n }, n }

            function A() { var n = (0, o.Z)(["\n  text-align: center;\n\n  h3 {\n    font-family: var(--font-title);\n    font-size: 13px;\n    line-height: 24px;\n  }\n\n  h3,\n  p {\n    margin-bottom: 0;\n    white-space: nowrap;\n  }\n"]); return A = function() { return n }, n }

            function L() { var n = (0, o.Z)(["\n  overflow: hidden;\n  width: 100%;\n  height: 24px;\n  margin: 0 90px;\n  background: #ffffff;\n  border: 2px solid #000000;\n"]); return L = function() { return n }, n }

            function T() { var n = (0, o.Z)(["\n  height: 100%;\n  background: #000000;\n  transform-origin: 0 center;\n"]); return T = function() { return n }, n } var O = 100,
                N = { ease: g.Vv, duration: 1 },
                B = x.map((function(n) { var t, e = "".concat(null === (t = n["Website Image"]) || void 0 === t ? void 0 : t.url, "/w=400"); if (e) return { url: e, name: n.Name.title[0].plain_text } })).map((function(n) { return { sort: Math.random(), value: n } })).sort((function(n, t) { return n.sort - t.sort })).map((function(n) { return n.value })),
                M = function(n) { var t = n.children,
                        e = n.aspect,
                        o = (0, f._)(),
                        s = (0, f._)(),
                        m = (0, f._)(),
                        x = (0, f._)(),
                        y = (0, f._)(),
                        Z = (0, c.useState)({ w: null, h: null }),
                        b = Z[0],
                        I = Z[1],
                        _ = (0, c.useState)(1),
                        S = _[0],
                        j = _[1],
                        E = (0, c.useState)(1),
                        C = E[0],
                        P = E[1],
                        k = (0, c.useState)(1),
                        z = k[0],
                        A = k[1],
                        L = (0, c.useState)(0),
                        T = L[0],
                        M = L[1],
                        nn = (0, c.useState)(!1),
                        tn = nn[0],
                        en = nn[1],
                        rn = (0, c.useState)(!1),
                        on = rn[0],
                        an = rn[1],
                        un = (0, c.useState)(!1),
                        cn = un[0],
                        sn = un[1],
                        fn = (0, c.useState)(!1),
                        dn = fn[0],
                        ln = fn[1],
                        hn = (0, c.useState)(!1),
                        pn = hn[0],
                        mn = hn[1],
                        gn = (0, c.useState)(!1),
                        vn = gn[0],
                        wn = gn[1],
                        xn = (0, c.useState)(B[0]),
                        yn = xn[0],
                        Zn = xn[1],
                        bn = (0, c.useState)(0),
                        In = bn[0],
                        _n = bn[1],
                        Sn = function(n) { var t = (0, h.h)((function() { return (0, d.B)(n) })); if ((0, c.useContext)(l._).isStatic) { var e = (0, a.__read)((0, c.useState)(n), 2)[1];
                                (0, c.useEffect)((function() { return t.onChange(e) }), []) } return t }(0),
                        jn = (0, c.useRef)(null),
                        En = (0, c.useRef)(null),
                        Cn = (0, c.useRef)(null); return (0, c.useEffect)((function() { En.current.complete && en(!0) }), []), (0, c.useEffect)((function() {
                        function n() { return (n = (0, i.Z)((function() { return (0, a.__generator)(this, (function(n) { switch (n.label) {
                                        case 0:
                                            return [4, m.start({ y: O, opacity: 1, transition: { duration: .8, ease: g.Vv } })];
                                        case 1:
                                            return n.sent(), [4, s.start({ y: T - 15, opacity: 1, transition: { duration: .5, ease: g.Vv } })];
                                        case 2:
                                            return n.sent(), x.start({ opacity: 1, transition: { duration: .005 } }), [2] } })) }))).apply(this, arguments) }
                        tn && function() { n.apply(this, arguments) }() }), [tn, m, s, T, on, y, x]), (0, c.useEffect)((function() { if (En.current && Cn.current) { var n = function() { if (tn) { var n = window.innerWidth,
                                        t = window.innerHeight,
                                        e = En.current.getBoundingClientRect(),
                                        i = e.width - .25 * e.width,
                                        r = e.height - .58 * e.height;
                                    I({ w: i, h: r }), M(Math.ceil(e.top + .11 * e.height) - O); var o = Math.min(n / i, t / r),
                                        a = Math.max(n / i, t / r);
                                    P(o), A(a); var u = Math.min(i / n, r / t);
                                    j(u) } }; return n(), window.addEventListener("resize", n), cn && window.removeEventListener("resize", n),
                                function() { return window.removeEventListener("resize", n) } } }), [tn, En, Cn, cn]), (0, c.useEffect)((function() { v.Qg || (document.querySelector("body").style.pointerEvents = v.Qg ? "" : "none") }), []), (0, c.useEffect)((function() {
                        function n() { return n = (0, i.Z)((function() { return (0, a.__generator)(this, (function(n) { switch (n.label) {
                                        case 0:
                                            return [4, Promise.all(B.map((function(n) { var t = n.url,
                                                    e = n.name; if (t) return new Promise((function(n, i) { var r = document.createElement("img");
                                                    r.onload = function() { return n(!0) }, r.src = t, r.alt = e })) }))).then((function() { an(!0) }))];
                                        case 1:
                                            return n.sent(), [2] } })) })), n.apply(this, arguments) }! function() { n.apply(this, arguments) }() }), []), (0, c.useEffect)((function() { on && tn && (Zn(B[0]), function() { if (In === B.length) return clearTimeout(n), x.start({ opacity: 0, transition: { duration: .001 } }), Zn(null), void setTimeout((function() { sn(!0) }), v.Qg ? 0 : 500);
                            Zn(B[In]); var n = setTimeout((function() { var n = In + 1;
                                _n(n), (0, p.j)(Sn, n / B.length * .7, { duration: .3 }) }), v.Qg ? 150 : 500 - 30 * (In + 1)) }()) }), [on, yn, In, Sn, tn, x]), (0, c.useEffect)((function() {
                        function n() { return (n = (0, i.Z)((function() { return (0, a.__generator)(this, (function(n) { switch (n.label) {
                                        case 0:
                                            return ln(!0), s.start((function() { return { originY: .5, y: 0, transition: N } })), o.start({ scale: z, transition: N }), [4, m.start({ scale: C, y: 0, originY: 0, transition: (0, r.Z)({ easeOutTransition: N }, { duration: 1 }) })];
                                        case 1:
                                            return n.sent(), m.start({ opacity: 0, transition: { duration: .2 } }), setTimeout((function() { mn(!0) }), 500), [2] } })) }))).apply(this, arguments) }
                        cn && function() { n.apply(this, arguments) }() }), [cn, o, s, m, C, z, S, T, e]), (0, c.useEffect)((function() {
                        function n() { return (n = (0, i.Z)((function() { return (0, a.__generator)(this, (function(n) { return (0, p.j)(Sn, "75%", { duration: .05, onComplete: function() {
                                            (0, p.j)(Sn, "80%", { delay: .05, duration: .05, onComplete: function() {
                                                    (0, p.j)(Sn, "100%", { delay: .05, duration: .25, onComplete: function() { setTimeout((function() { wn(!0), document.querySelector("body").style.pointerEvents = "" }), 500) } }) } }) } }), [2] })) }))).apply(this, arguments) }
                        pn && (! function() { n.apply(this, arguments) }(), (0, w.t8)("INTRO_ANIMATION_SEEN", v.RP, { withPrefix: !1 })) }), [pn, y, Sn]), (0, u.jsx)(R, { ref: jn, animate: o, children: (0, u.jsxs)(Q, { children: [(0, u.jsx)(q, { src: "./images/HIFILABS/monitor-lq.svg", onLoad: function() { return en(!0) }, ref: En, initial: { y: 200, opacity: 0 }, animate: m }), !vn && (0, u.jsx)(F, { animate: x, initial: { opacity: 0, y: T, width: b.w, height: b.h }, style: { y: T, width: b.w, height: b.h }, children: B.map((function(n, t) { var e = n.url,
                                        i = n.name; return (0, u.jsx)(H, { initial: { opacity: 0 }, animate: (0, r.Z)({ transition: { duration: 1e-4 } }, yn && { opacity: yn.name === i ? 1 : 0 }), style: { zIndex: t, backgroundImage: "url(".concat(e, ")") } }, t) })) }), (0, u.jsx)(V, { ref: Cn, animate: s, initial: { scale: S, y: T, opacity: 0 }, style: { scale: S, y: T, opacity: 0 }, children: vn ? (0, u.jsx)(W, { children: t }) : (0, u.jsx)(X, { animate: y, children: (0, u.jsxs)(Y, { children: [(0, u.jsxs)(J, { children: [dn ? "Booting" : "", " HIFI Labs OS"] }), (0, u.jsxs)(U, { children: [(0, u.jsx)(D, { src: "/images/HIFILABS/logo-large.jpg" }), (0, u.jsxs)(G, { children: [(0, u.jsx)("h3", { children: dn ? "Welcome to HIFI Labs OS" : "Loading Artist lab..." }), (0, u.jsxs)("p", { children: ["\xa0", dn ? "Last login: Tue Jan 9 06:15:14 AEST 2018 on tty1" : yn && (0, u.jsxs)(u.Fragment, { children: [yn.name, ": bio, socials, images, metadata..."] })] })] }), (0, u.jsx)(K, { children: (0, u.jsx)($, { initial: { scaleX: Sn }, style: { scaleX: Sn }, animate: { scaleX: Sn } }) })] })] }) }) })] }) }) },
                R = (0, s.ZP)(m.m.div).withConfig({ componentId: "sc-8d074581-0" })(y()),
                F = (0, s.ZP)(m.m.div).withConfig({ componentId: "sc-8d074581-1" })(Z()),
                H = (0, s.ZP)(m.m.div).withConfig({ componentId: "sc-8d074581-2" })(b()),
                Q = (0, s.ZP)(m.m.div).withConfig({ componentId: "sc-8d074581-3" })(I()),
                q = (0, s.ZP)(m.m.img).withConfig({ componentId: "sc-8d074581-4" })(_()),
                V = (0, s.ZP)(m.m.div).withConfig({ componentId: "sc-8d074581-5" })(S()),
                W = (0, s.ZP)(m.m.div).withConfig({ componentId: "sc-8d074581-6" })(j()),
                X = (0, s.ZP)(m.m.div).withConfig({ componentId: "sc-8d074581-7" })(E()),
                Y = s.ZP.div.withConfig({ componentId: "sc-8d074581-8" })(C()),
                J = s.ZP.header.withConfig({ componentId: "sc-8d074581-9" })(P()),
                U = s.ZP.div.withConfig({ componentId: "sc-8d074581-10" })(k()),
                D = s.ZP.img.withConfig({ componentId: "sc-8d074581-11" })(z()),
                G = s.ZP.div.withConfig({ componentId: "sc-8d074581-12" })(A()),
                K = s.ZP.div.withConfig({ componentId: "sc-8d074581-13" })(L()),
                $ = (0, s.ZP)(m.m.div).withConfig({ componentId: "sc-8d074581-14" })(T()),
                nn = M }, 61634: function(n, t, e) { e.d(t, { Od: function() { return a }, U2: function() { return r }, t8: function() { return o } }); var i = "musicOS",
                r = function(n, t) { var e = t.withPrefix,
                        r = void 0 === e || e; return localStorage.getItem("".concat(r ? "".concat(i, "_") : "").concat(n)) },
                o = function(n, t, e) { var r = e.withPrefix,
                        o = void 0 === r || r;
                    localStorage.setItem("".concat(o ? "".concat(i, "_") : "").concat(n), t) },
                a = function(n) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        e = t.withPrefix,
                        r = void 0 === e || e;
                    localStorage.removeItem("".concat(r ? "".concat(i, "_") : "").concat(n)) } }, 12064: function(n, t, e) { e.d(t, { j: function() { return a } }); var i = e(33234),
                r = e(40406),
                o = e(81593);

            function a(n, t, e) { void 0 === e && (e = {}); var a = (0, r.i)(n) ? n : (0, i.B)(n); return (0, o.b8)("", a, t, e), { stop: function() { return a.stop() }, isAnimating: function() { return a.isAnimating() } } } }, 46513: function(n, t, e) { e.d(t, { _: function() { return f } }); var i = e(70655),
                r = e(24394),
                o = e(77107),
                a = e(5759);

            function u() { var n = !1,
                    t = [],
                    e = new Set,
                    u = { subscribe: function(n) { return e.add(n),
                                function() { e.delete(n) } }, start: function(i, r) { if (n) { var a = []; return e.forEach((function(n) { a.push((0, o.d5)(n, i, { transitionOverride: r })) })), Promise.all(a) } return new Promise((function(n) { t.push({ animation: [i, r], resolve: n }) })) }, set: function(t) { return (0, r.k)(n, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."), e.forEach((function(n) {
                                (0, a.gg)(n, t) })) }, stop: function() { e.forEach((function(n) {
                                (0, o.p_)(n) })) }, mount: function() { return n = !0, t.forEach((function(n) { var t = n.animation,
                                        e = n.resolve;
                                    u.start.apply(u, (0, i.__spreadArray)([], (0, i.__read)(t), !1)).then(e) })),
                                function() { n = !1, u.stop() } } }; return u } var c = e(67294),
                s = e(96681); var f = function() { var n = (0, s.h)(u); return (0, c.useEffect)(n.mount, []), n } } }
]);;