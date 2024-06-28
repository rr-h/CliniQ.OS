(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [385], { 6505: function(n) { n.exports = function() { "use strict"; return function(n) { if (n) { var e = function(n) { return [].slice.call(n) },
                            t = 0,
                            i = 1,
                            r = 2,
                            o = 3,
                            a = [],
                            u = null,
                            c = "requestAnimationFrame" in n ? function() { n.cancelAnimationFrame(u), u = n.requestAnimationFrame((function() { return s(a.filter((function(n) { return n.dirty && n.active }))) })) } : function() {},
                            l = function(n) { return function() { a.forEach((function(e) { return e.dirty = n })), c() } },
                            s = function(n) { n.filter((function(n) { return !n.styleComputed })).forEach((function(n) { n.styleComputed = h(n) })), n.filter(v).forEach(m); var e = n.filter(p);
                                e.forEach(d), e.forEach((function(n) { m(n), f(n) })), e.forEach(g) },
                            f = function(n) { return n.dirty = t },
                            d = function(n) { n.availableWidth = n.element.parentNode.clientWidth, n.currentWidth = n.element.scrollWidth, n.previousFontSize = n.currentFontSize, n.currentFontSize = Math.min(Math.max(n.minSize, n.availableWidth / n.currentWidth * n.previousFontSize), n.maxSize), n.whiteSpace = n.multiLine && n.currentFontSize === n.minSize ? "normal" : "nowrap" },
                            p = function(n) { return n.dirty !== r || n.dirty === r && n.element.parentNode.clientWidth !== n.availableWidth },
                            h = function(e) { var t = n.getComputedStyle(e.element, null); return e.currentFontSize = parseFloat(t.getPropertyValue("font-size")), e.display = t.getPropertyValue("display"), e.whiteSpace = t.getPropertyValue("white-space"), !0 },
                            v = function(n) { var e = !1; return !n.preStyleTestCompleted && (/inline-/.test(n.display) || (e = !0, n.display = "inline-block"), "nowrap" !== n.whiteSpace && (e = !0, n.whiteSpace = "nowrap"), n.preStyleTestCompleted = !0, e) },
                            m = function(n) { n.element.style.whiteSpace = n.whiteSpace, n.element.style.display = n.display, n.element.style.fontSize = n.currentFontSize + "px" },
                            g = function(n) { n.element.dispatchEvent(new CustomEvent("fit", { detail: { oldValue: n.previousFontSize, newValue: n.currentFontSize, scaleFactor: n.currentFontSize / n.previousFontSize } })) },
                            x = function(n, e) { return function() { n.dirty = e, n.active && c() } },
                            w = function(n) { return function() { a = a.filter((function(e) { return e.element !== n.element })), n.observeMutations && n.observer.disconnect(), n.element.style.whiteSpace = n.originalStyle.whiteSpace, n.element.style.display = n.originalStyle.display, n.element.style.fontSize = n.originalStyle.fontSize } },
                            y = function(n) { return function() { n.active || (n.active = !0, c()) } },
                            b = function(n) { return function() { return n.active = !1 } },
                            S = function(n) { n.observeMutations && (n.observer = new MutationObserver(x(n, i)), n.observer.observe(n.element, n.observeMutations)) },
                            z = { minSize: 16, maxSize: 512, multiLine: !0, observeMutations: "MutationObserver" in n && { subtree: !0, childList: !0, characterData: !0 } },
                            j = null,
                            Z = function() { n.clearTimeout(j), j = n.setTimeout(l(r), C.observeWindowDelay) },
                            W = ["resize", "orientationchange"]; return Object.defineProperty(C, "observeWindow", { set: function(e) { var t = "".concat(e ? "add" : "remove", "EventListener");
                                W.forEach((function(e) { n[t](e, Z) })) } }), C.observeWindow = !0, C.observeWindowDelay = 100, C.fitAll = l(o), C }

                    function I(n, e) { var t = Object.assign({}, z, e),
                            i = n.map((function(n) { var e = Object.assign({}, t, { element: n, active: !0 }); return function(n) { n.originalStyle = { whiteSpace: n.element.style.whiteSpace, display: n.element.style.display, fontSize: n.element.style.fontSize }, S(n), n.newbie = !0, n.dirty = !0, a.push(n) }(e), { element: n, fit: x(e, o), unfreeze: y(e), freeze: b(e), unsubscribe: w(e) } })); return c(), i }

                    function C(n) { var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return "string" == typeof n ? I(e(document.querySelectorAll(n)), t) : I([n], t)[0] } }("undefined" == typeof window ? null : window) }() }, 79075: function(n, e, t) { "use strict"; var i = t(7297),
                r = t(85893),
                o = t(67294),
                a = t(14141),
                u = t(59395);
            t(12725);

            function c() { var n = (0, i.Z)(["\n  position: relative;\n  width: 100%;\n  overscroll-behavior-x: contain;\n  -webkit-overflow-scrolling: touch;\n"]); return c = function() { return n }, n }

            function l() { var n = (0, i.Z)(["\n  cursor: grab;\n  display: flex;\n  gap: 64px;\n  margin: 0 0 32px;\n\n  @media only screen and (max-width: 600px) {\n    gap: 32px;\n  }\n\n  > * {\n    overflow: hidden;\n    flex: 0 0 240px;\n    box-shadow: 2px 2px 0 #fff;\n    border: 1px solid #fff;\n    border-radius: 5px;\n    box-shadow: 3px 3px 0 #fff;\n\n    @media only screen and (max-width: 600px) {\n      flex-basis: 220px;\n    }\n  }\n"]); return l = function() { return n }, n } var s = a.ZP.div.withConfig({ componentId: "sc-3d01f1b7-0" })(c()),
                f = (0, a.ZP)(u.m.div).withConfig({ componentId: "sc-3d01f1b7-1" })(l());
            e.Z = function(n) { var e = n.children,
                    t = n.setIsDragging,
                    i = n.bounceStiffness,
                    a = void 0 === i ? 200 : i,
                    u = n.bounceDamping,
                    c = void 0 === u ? 20 : u,
                    l = (0, o.useRef)(),
                    d = (0, o.useState)(0),
                    p = d[0],
                    h = d[1],
                    v = (0, o.useState)(0),
                    m = v[0],
                    g = v[1],
                    x = (0, o.useState)(0),
                    w = x[0],
                    y = x[1]; return (0, o.useEffect)((function() { var n; if (l || l.current) { g(null === l || void 0 === l || null === (n = l.current) || void 0 === n ? void 0 : n.scrollWidth); var e = function() { var n;
                            h(null === l || void 0 === l || null === (n = l.current) || void 0 === n ? void 0 : n.clientWidth), y(m - p) };
                        e(), window.addEventListener("resize", e) } }), [l, m, p]), (0, r.jsx)(s, { children: (0, r.jsx)(f, { ref: l, drag: "x", dragConstraints: { left: -w, right: 0 }, dragTransition: { bounceStiffness: a, bounceDamping: c }, whileDrag: function() { return t(!0) }, onPointerUp: function() { return t(!1) }, children: e }) }) } }, 57655: function(n, e, t) { "use strict";
            t.d(e, { Z: function() { return f }, e: function() { return p } }); var i = t(26042),
                r = t(7297),
                o = t(85893),
                a = t(14141),
                u = t(60374),
                c = t(20805),
                l = t(85313);

            function s() { var n = (0, r.Z)(["\n  color: inherit;\n  text-decoration: none;\n\n  & > span {\n    vertical-align: text-bottom;\n  }\n\n  &::after {\n    content: url(./images/HIFILABS/icons/external-link.svg);\n    width: 24px;\n    margin-left: 4px;\n  }\n"]); return s = function() { return n }, n }

            function f(n) { var e = n.textArray,
                    t = n.className,
                    r = (0, c.useStore)((function(n) { return { openWindow: n.openWindow } }), u.Z).openWindow; return e && 0 !== e.length ? (0, o.jsx)("p", { className: t, children: e.map((function(n, e) { var t = n.plain_text,
                            a = n.annotations,
                            u = n.href,
                            c = function(n) { var e = n.match(/\[(.*?)\]/),
                                    t = {}; if (e) { var i = e[0].replace(/\u201d/g, '"'),
                                        r = (0, l.BZ)(i); return t.finalString = n.split(e[0])[0], t.data = r, t } return n }(t),
                            s = c.finalString,
                            f = c.data,
                            h = t.replace(/\n/g, "<br />").replace(/\u2022 /g, ""),
                            v = a.bold,
                            m = a.italic,
                            g = a.strikethrough,
                            x = a.underline,
                            w = (0, i.Z)({}, x && { textDecoration: "underline" }); return (0, o.jsx)(d, { condition: s && f, wrapper: function(n) { return (0, o.jsxs)("span", { children: [s, (0, o.jsx)("span", { style: { textDecoration: "underline", cursor: "pointer" }, onClick: function() { return function(n) { "contact" === n.window && r(n.window) }(f) }, children: f.text })] }) }, children: (0, o.jsx)(d, { condition: u, wrapper: function(n) { return (0, o.jsx)(p, { href: u, target: "_blank", rel: "noopener noreferrer", children: n }) }, children: (0, o.jsx)(d, { condition: v, wrapper: function(n) { return (0, o.jsx)("strong", { children: n }) }, children: (0, o.jsx)(d, { condition: m, wrapper: function(n) { return (0, o.jsx)("em", { children: n }) }, children: (0, o.jsx)(d, { condition: g, wrapper: function(n) { return (0, o.jsx)("s", { children: n }) }, children: (0, o.jsx)("span", { dangerouslySetInnerHTML: { __html: h }, style: { style: w } }) }) }) }) }, e) }, e) })) }) : null } var d = function(n) { var e = n.condition,
                        t = n.wrapper,
                        i = n.children; return e ? t(i) : i },
                p = a.ZP.a.withConfig({ componentId: "sc-a4d2f15c-0" })(s()) }, 79385: function(n, e, t) { "use strict";
            t.r(e), t.d(e, { Bio: function() { return A }, HeroImage: function() { return _ }, Name: function() { return P }, Wrapper: function() { return F }, WrapperContent: function() { return k }, charVariants: function() { return C } }); var i = t(47568),
                r = t(7297),
                o = t(70655),
                a = t(85893),
                u = t(67294),
                c = t(46513),
                l = t(59395),
                s = t(14141),
                f = t(60374),
                d = t(6505),
                p = t.n(d),
                h = t(2962),
                v = t(37278),
                m = t(46789),
                g = t(12725),
                x = t(79075),
                w = t(57655),
                y = t(20805),
                b = t(6173),
                S = t(92783);

            function z() { var n = (0, r.Z)(["\n  background: #000;\n  overflow-x: hidden;\n  padding-bottom: 50px;\n"]); return z = function() { return n }, n }

            function j() { var n = (0, r.Z)(["\n  z-index: 20;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 0 0 128px;\n  color: #fff;\n  text-align: center;\n\n  img {\n    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%);\n  }\n"]); return j = function() { return n }, n }

            function Z() { var n = (0, r.Z)(["\n  width: 100%;\n"]); return Z = function() { return n }, n }

            function W() { var n = (0, r.Z)(["\n  margin-top: calc(-0.5em - 5px);\n  padding: 0 32px;\n  font-weight: 700;\n  line-height: 1;\n  text-shadow: 4px 4px #000;\n"]); return W = function() { return n }, n }

            function I() { var n = (0, r.Z)(["\n  margin-left: 13vw;\n  margin-right: 13vw;\n  font-size: 40px;\n  line-height: 0.8;\n\n  @media only screen and (max-width: 600px) {\n    font-size: 28px;\n  }\n"]); return I = function() { return n }, n } var C = { initial: { opacity: 0 }, animate: function(n) { return { opacity: [0, 1], transition: { duration: .01, ease: "linear", delay: .2 * n } } } },
                E = function(n) { var e, t, r, s, d, w, z, j, Z, W, I = n.slug,
                        E = (0, y.useStore)((function(n) { return { openWindow: n.openWindow } }), f.Z).openWindow,
                        L = (0, S.X9)(b, I),
                        D = (0, c._)(),
                        M = (0, u.useState)(!1),
                        T = M[0],
                        N = M[1],
                        O = (0, u.useRef)(null),
                        B = (0, u.useRef)(null),
                        R = L.Name.title[0].plain_text,
                        V = null === (e = L["Website Image"]) || void 0 === e ? void 0 : e.url,
                        H = null === (t = L.Bio) || void 0 === t ? void 0 : t.rich_text,
                        q = null === (r = L.heroImageYOffset) || void 0 === r ? void 0 : r.number,
                        U = b.map((function(n) { return { sort: Math.random(), value: n } })).sort((function(n, e) { return n.sort - e.sort })).map((function(n) { return n.value })).filter((function(n) { return n.id !== L.id })),
                        X = (0, u.useRef)(U),
                        Y = { spotify: null === (s = L.Spotify) || void 0 === s ? void 0 : s.url, apple: null === (d = L["Apple Music"]) || void 0 === d ? void 0 : d.url, tiktok: null === (w = L.TikTok) || void 0 === w ? void 0 : w.url, instagram: null === (z = L.Instagram) || void 0 === z ? void 0 : z.url, twitter: null === (j = L.Twitter) || void 0 === j ? void 0 : j.url, facebook: null === (Z = L.Facebook) || void 0 === Z ? void 0 : Z.url, discord: null === (W = L.Discord) || void 0 === W ? void 0 : W.url }; return (0, u.useEffect)((function() { B && p()(B.current, { minSize: 30, maxSize: 100 }); var n = function() { var n = (0, i.Z)((function() { return (0, o.__generator)(this, (function(n) { switch (n.label) {
                                        case 0:
                                            return [4, D.set("initial")];
                                        case 1:
                                            return n.sent(), [4, D.start("animate")];
                                        case 2:
                                            return n.sent(), [2] } })) })); return function() { return n.apply(this, arguments) } }();
                        n() }), [R, D]), (0, u.useLayoutEffect)((function() { O.current && O.current.scrollBy({ top: -200, left: 0, behavior: "smooth" }) }), [I]), (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(h.PB, { title: "Artist Lab presents: ".concat(R), description: "Led by an experienced team of music industry professionals, HIFI Labs provides modern A&R support to a roster of emerging artists. The A&R team at HIFI Labs focuses on artist development through web2 & web3 tools, empowering their roster of artists to take ownership of their art and creative endeavors by way of decentralized engagement and community solutions." }), (0, a.jsx)(v.Z, { title: "Artist Lab / ".concat(R), windowId: "artist", slug: I, width: 990, height: 615, children: (0, a.jsxs)(F, { children: [(0, a.jsx)(_, { src: V, alt: R, width: "".concat(990, "px"), height: "".concat(450, "px"), objectPosition: q }), (0, a.jsxs)(k, { children: [(0, a.jsx)(P, { ref: B, minSize: 220, maxSize: 320, children: Array.from(R).map((function(n, e) { return (0, a.jsx)(l.m.span, { custom: e, variants: C, animate: D, initial: "initial", children: " " === n ? "\xa0" : n }, e) })) }), (0, a.jsx)(A, { textArray: H }), (0, a.jsx)(m.C, { urls: Y })] }), (0, a.jsx)(x.Z, { setIsDragging: N, children: X.current.map((function(n) { var e, t = n.Name.title[0].plain_text,
                                            i = null === (e = n["Website Image"]) || void 0 === e ? void 0 : e.url,
                                            r = (0, S.qF)(n); return (0, a.jsx)(g.Z, { onClick: function() {!T && E("artist", { slug: r }) }, src: i, alt: t, width: "240px", height: "336px" }, n.id) })) })] }) })] }) },
                F = s.ZP.div.withConfig({ componentId: "sc-c67a58aa-0" })(z()),
                k = s.ZP.div.withConfig({ componentId: "sc-c67a58aa-1" })(j()),
                _ = (0, s.ZP)(g.Z).withConfig({ componentId: "sc-c67a58aa-2" })(Z()),
                P = s.ZP.h1.withConfig({ componentId: "sc-c67a58aa-3" })(W()),
                A = (0, s.ZP)(w.Z).withConfig({ componentId: "sc-c67a58aa-4" })(I());
            e.default = (0, u.memo)(E) }, 46513: function(n, e, t) { "use strict";
            t.d(e, { _: function() { return s } }); var i = t(70655),
                r = t(24394),
                o = t(77107),
                a = t(5759);

            function u() { var n = !1,
                    e = [],
                    t = new Set,
                    u = { subscribe: function(n) { return t.add(n),
                                function() { t.delete(n) } }, start: function(i, r) { if (n) { var a = []; return t.forEach((function(n) { a.push((0, o.d5)(n, i, { transitionOverride: r })) })), Promise.all(a) } return new Promise((function(n) { e.push({ animation: [i, r], resolve: n }) })) }, set: function(e) { return (0, r.k)(n, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."), t.forEach((function(n) {
                                (0, a.gg)(n, e) })) }, stop: function() { t.forEach((function(n) {
                                (0, o.p_)(n) })) }, mount: function() { return n = !0, e.forEach((function(n) { var e = n.animation,
                                        t = n.resolve;
                                    u.start.apply(u, (0, i.__spreadArray)([], (0, i.__read)(e), !1)).then(t) })),
                                function() { n = !1, u.stop() } } }; return u } var c = t(67294),
                l = t(96681); var s = function() { var n = (0, l.h)(u); return (0, c.useEffect)(n.mount, []), n } } }
]);