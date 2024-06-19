"use strict";
(() => {
  var wt = Object.create;
  var F = Object.defineProperty;
  var gt = Object.getOwnPropertyDescriptor;
  var Ct = Object.getOwnPropertyNames;
  var Lt = Object.getPrototypeOf,
    vt = Object.prototype.hasOwnProperty;
  var Ot = (t, e) => () => (
    e || t((e = { exports: {} }).exports, e), e.exports
  );
  var Kt = (t, e, o, r) => {
    if ((e && typeof e == "object") || typeof e == "function")
      for (let n of Ct(e))
        !vt.call(t, n) &&
          n !== o &&
          F(t, n, {
            get: () => e[n],
            enumerable: !(r = gt(e, n)) || r.enumerable,
          });
    return t;
  };
  var Dt = (t, e, o) => (
    (o = t != null ? wt(Lt(t)) : {}),
    Kt(
      e || !t || !t.__esModule
        ? F(o, "default", { value: t, enumerable: !0 })
        : o,
      t
    )
  );
  var At = Ot((lo, ft) => {
    ft.exports = zt;
    function zt(t, e, o, r) {
      var n, s, i;
      return function () {
        if (
          ((i = this),
          (s = Array.prototype.slice.call(arguments)),
          n && (o || r))
        )
          return;
        if (!o) return a(), (n = setTimeout(p, e)), n;
        (n = setTimeout(a, e)), t.apply(i, s);
        function p() {
          a(), t.apply(i, s);
        }
        function a() {
          clearTimeout(n), (n = null);
        }
      };
    }
  });
  var d = "fs-attributes";
  var V = "cmsattribute";
  var q = "cmsselect";
  var T = "selectcustom";
  var h = "support";
  var W = async (...t) => {
    var o;
    let e = [];
    for (let r of t) {
      let n = await ((o = window.fsAttributes[r]) == null ? void 0 : o.loading);
      e.push(n);
    }
    return e;
  };
  var A = () => {};
  function E(t, e, o, r) {
    return t
      ? (t.addEventListener(e, o, r), () => t.removeEventListener(e, o, r))
      : A;
  }
  var j = (t) => t instanceof Element,
    X = (t) => t instanceof HTMLElement,
    G = (t) => t instanceof HTMLInputElement;
  var z = (t) => t instanceof HTMLAnchorElement;
  var Q = (t) => t instanceof HTMLOptionElement;
  var U = (t) => t != null;
  var I = (t) => typeof t == "string";
  var Z = "w--current";
  var y = {
    dropdown: "w-dropdown",
    dropdownToggle: "w-dropdown-toggle",
    dropdownList: "w-dropdown-list",
  };
  var b = (t, e) => (
    Array.isArray(e) || (e = [e]),
    e.map((r) => t.dispatchEvent(new Event(r, { bubbles: !0 }))).every((r) => r)
  );
  var w = (t, e = !0) => t.cloneNode(e);
  var f = (t) => {
    var o;
    let e;
    for (let r of t.childNodes)
      if (
        (X(r) && r.childNodes.length
          ? (e = f(r))
          : r.nodeType === Node.TEXT_NODE &&
            (o = r.textContent) != null &&
            o.trim() &&
            (e = r),
        e)
      )
        break;
    return e;
  };
  var B = (t, e) => {
    let { type: o } = t,
      r = o === "radio";
    if (r || o === "checkbox") {
      if (!G(t) || typeof e != "boolean" || e === t.checked || (r && e === !1))
        return;
      t.checked = e;
    } else {
      if (t.value === e) return;
      t.value = e.toString();
    }
    b(t, ["click", "input", "change"]);
  };
  function J(t, e, o) {
    var n;
    let r = window.fsAttributes[t];
    return (r.destroy = o || A), (n = r.resolve) == null || n.call(r, e), e;
  }
  var tt = (t, e = "1", o = "iife") => {
    let n = `${t}${o === "esm" ? ".esm" : ""}.js`;
    return `https://cdn.jsdelivr.net/npm/@finsweet/attributes-${t}@${e}/${n}`;
  };
  var Nt = `${d}-${h}`,
    et = async () => {
      var n;
      let { fsAttributes: t, location: e } = window,
        { host: o, searchParams: r } = new URL(e.href);
      return !o.includes("webflow.io") || !r.has(Nt)
        ? !1
        : (n = t.import) == null
        ? void 0
        : n.call(t, h, "1");
    };
  var g = (t) => {
    let e = (n, s, i) => {
      let c = t[n],
        { key: p, values: a } = c,
        l;
      if (!s) return `[${p}]`;
      let u = a == null ? void 0 : a[s];
      I(u)
        ? (l = u)
        : (l = u(i && "instanceIndex" in i ? i.instanceIndex : void 0));
      let m = i && "caseInsensitive" in i && i.caseInsensitive ? "i" : "";
      if (!(i != null && i.operator)) return `[${p}="${l}"${m}]`;
      switch (i.operator) {
        case "prefixed":
          return `[${p}^="${l}"${m}]`;
        case "suffixed":
          return `[${p}$="${l}"${m}]`;
        case "contains":
          return `[${p}*="${l}"${m}]`;
      }
    };
    function o(n, s) {
      let i = e("element", n, s),
        c = (s == null ? void 0 : s.scope) || document;
      return s != null && s.all
        ? [...c.querySelectorAll(i)]
        : c.querySelector(i);
    }
    return [
      e,
      o,
      (n, s) => {
        let i = t[s];
        return i ? n.getAttribute(i.key) : null;
      },
    ];
  };
  var x = {
      preventLoad: { key: `${d}-preventload` },
      debugMode: { key: `${d}-debug` },
      src: { key: "src", values: { finsweet: "@finsweet/attributes" } },
      dev: { key: `${d}-dev` },
    },
    [M, Me] = g(x);
  var ot = (t) => {
    let { currentScript: e } = document,
      o = {};
    if (!e) return { attributes: o, preventsLoad: !1 };
    let n = {
      preventsLoad: I(e.getAttribute(x.preventLoad.key)),
      attributes: o,
    };
    for (let s in t) {
      let i = e.getAttribute(t[s]);
      n.attributes[s] = i;
    }
    return n;
  };
  var rt = ({ scriptAttributes: t, attributeKey: e, version: o, init: r }) => {
      var c;
      ht(), (c = window.fsAttributes)[e] || (c[e] = {});
      let { preventsLoad: n, attributes: s } = ot(t),
        i = window.fsAttributes[e];
      (i.version = o),
        (i.init = r),
        n ||
          (window.Webflow || (window.Webflow = []),
          window.Webflow.push(() => r(s)));
    },
    ht = () => {
      let t = Bt();
      if (window.fsAttributes && !Array.isArray(window.fsAttributes)) {
        P(window.fsAttributes, t);
        return;
      }
      let e = Ut(t);
      P(e, t),
        Mt(e),
        (window.fsAttributes = e),
        (window.FsAttributes = window.fsAttributes),
        et();
    },
    Ut = (t) => {
      let e = {
        cms: {},
        push(...o) {
          var r, n;
          for (let [s, i] of o)
            (n = (r = this[s]) == null ? void 0 : r.loading) == null ||
              n.then(i);
        },
        async import(o, r) {
          let n = e[o];
          return (
            n ||
            new Promise((s) => {
              let i = document.createElement("script");
              (i.src = tt(o, r)),
                (i.async = !0),
                (i.onload = () => {
                  let [c] = P(e, [o]);
                  s(c);
                }),
                document.head.append(i);
            })
          );
        },
        destroy() {
          var o, r;
          for (let n of t)
            (r = (o = window.fsAttributes[n]) == null ? void 0 : o.destroy) ==
              null || r.call(o);
        },
      };
      return e;
    },
    Bt = () => {
      let t = M("src", "finsweet", { operator: "contains" }),
        e = M("dev");
      return [...document.querySelectorAll(`script${t}, script${e}`)].reduce(
        (n, s) => {
          var c;
          let i =
            s.getAttribute(x.dev.key) ||
            ((c = s.src.match(/[\w-. ]+(?=(\.js)$)/)) == null ? void 0 : c[0]);
          return i && !n.includes(i) && n.push(i), n;
        },
        []
      );
    },
    P = (t, e) =>
      e.map((r) => {
        let n = t[r];
        return (
          n ||
          ((t[r] = {}),
          (n = t[r]),
          (n.loading = new Promise((s) => {
            n.resolve = (i) => {
              s(i), delete n.resolve;
            };
          })),
          n)
        );
      }),
    Mt = (t) => {
      let e = Array.isArray(window.fsAttributes) ? window.fsAttributes : [];
      t.push(...e);
    };
  var nt = "1.7.2";
  var C = " ";
  var L = "Tab";
  var S = "ArrowUp",
    _ = "ArrowDown";
  var Y = (t, e = !0) => {
    e && t.focus(), b(t, ["click", "mouseup"]);
  };
  var st = `fs-${T}`,
    Yt = "dropdown",
    kt = "label",
    Ht = "option-reset",
    $t = "clear",
    Ft = "hideinitial",
    Vt = { true: "true" },
    v = {
      element: {
        key: `${st}-element`,
        values: {
          dropdown: Yt,
          label: kt,
          resetOption: $t,
          resetOptionFallback: Ht,
        },
      },
      hideInitial: { key: `${st}-${Ft}`, values: Vt },
    },
    [k, O] = g(v),
    it = [C, L, S, _];
  var H = "role";
  var K = "tabindex";
  var ct = "aria-selected",
    pt = "aria-haspopup",
    at = "aria-multiselectable",
    lt = "aria-expanded",
    ut = "aria-current";
  var R = (t, e) => {
      let { selectElement: o, optionsStore: r, label: n } = t;
      e && B(o, e.value);
      for (let s of r) {
        let { element: i } = s,
          c = i === (e == null ? void 0 : e.element);
        (s.selected = c),
          i.classList[c ? "add" : "remove"](Z),
          i.setAttribute(ct, `${c}`),
          i.setAttribute(K, c ? "0" : "-1");
      }
      e && (n.textContent = e.text);
    },
    D = (t, { optionsStore: e }) => {
      let o = e.find(({ value: r }) => !r);
      o && ((o.hidden = !t), (o.element.style.display = t ? "" : "none"));
    };
  var Et = (t, { optionsStore: e }) => {
      let { target: o } = t;
      if (!j(o)) return;
      let r = o.closest("a");
      if (!r) return;
      let n = e.find(({ element: s }) => s === r);
      if (n) return n;
    },
    dt = (t, e) => {
      if (t.target === e.selectElement) return;
      t.preventDefault();
      let o = Et(t, e);
      o && (o.selected || R(e, o), Y(e.dropdownToggle));
    },
    qt = (t, { dropdownToggle: e }) => {
      let { shiftKey: o } = t;
      o && t.preventDefault(), Y(e, o);
    },
    Wt = ({ key: t }, { optionsStore: e }) => {
      let o = e.findIndex(({ focused: n }) => n);
      if (o < 0) return;
      let r = e[t === S ? o - 1 : o + 1];
      r == null || r.element.focus();
    },
    jt = (t, e) => {
      let { key: o } = t;
      it.includes(o) &&
        (o === C
          ? dt(t, e)
          : o === L
          ? qt(t, e)
          : (o === S || o === _) && Wt(t, e));
    },
    mt = (t, e, o) => {
      let r = Et(t, o);
      r && (r.focused = e);
    },
    Xt = ({ key: t }, { optionsStore: e }) => {
      if (t !== _) return;
      let o = e.find(({ hidden: r }) => !r);
      o && o.element.focus();
    },
    Gt = (t) => {
      let { selectElement: e, optionsStore: o } = t,
        r = o.find(({ value: n }) => n === e.value);
      r && R(t, r);
    },
    Tt = (t) => {
      let { dropdownToggle: e, dropdownList: o, selectElement: r } = t,
        n = [
          E(e, "keydown", (s) => Xt(s, t)),
          E(o, "click", (s) => dt(s, t)),
          E(o, "keydown", (s) => jt(s, t)),
          E(o, "focusin", (s) => mt(s, !0, t)),
          E(o, "focusout", (s) => mt(s, !1, t)),
          E(r, "change", () => Gt(t)),
        ];
      return () => {
        for (let s of n) s();
      };
    };
  var St = Dt(At(), 1);
  var bt = (t, e) => {
      t.setAttribute(pt, "listbox"),
        e.setAttribute(H, "listbox"),
        e.setAttribute(at, "false");
    },
    xt = (t) => {
      t.setAttribute(H, "option");
    };
  var N = (t) => {
    let {
      optionsStore: e,
      optionTemplate: o,
      optionsList: r,
      emptyOption: n,
      hideInitial: s,
      selectElement: { options: i, value: c },
    } = t;
    for (let { element: a } of e.values()) a.remove();
    e.splice(0, e.length);
    let p;
    for (let { value: a, text: l } of i) {
      let u;
      if (!a && n) u = w(n);
      else {
        u = w(o);
        let yt = f(u) || u;
        yt.textContent = l;
      }
      xt(u), r.appendChild(u);
      let m = a === c,
        $ = { text: l, value: a, element: u, selected: m, focused: !1 };
      m && (p = $), e.push($);
    }
    R(t, p), s && D(!!(p != null && p.value), t);
  };
  var Qt = (t) => {
      let {
          dropdownToggle: e,
          dropdownList: o,
          optionsStore: r,
          hideInitial: n,
        } = t,
        s = (0, St.default)(() => {
          let c = r.find(({ selected: l }) => l),
            p = r.find(({ hidden: l }) => !l);
          if (!c || !p) return;
          if (e.getAttribute(lt) === "true") {
            c.hidden ? p.element.focus() : c.element.focus();
            return;
          }
          n && window.requestAnimationFrame(() => D(!!c.value, t));
        }, 20),
        i = new MutationObserver(s);
      return (
        i.observe(o, { attributes: !0, attributeFilter: ["class", "style"] }), i
      );
    },
    Zt = (t) => {
      let { selectElement: e } = t,
        o = new MutationObserver((r) => {
          r.some(({ addedNodes: s, removedNodes: i }) =>
            [...s, ...i].some(Q)
          ) && N(t);
        });
      return o.observe(e, { childList: !0 }), o;
    },
    _t = (t) => {
      let e = Qt(t),
        o = Zt(t);
      return () => {
        e.disconnect(), o.disconnect();
      };
    };
  var Rt = (t) => {
    let e = [],
      o = t.closest(`.${y.dropdown}`);
    if (!o) return;
    let r = o.querySelector("select");
    if (!r) return;
    let n = o.querySelector(`.${y.dropdownToggle}`),
      s = o.querySelector(`.${y.dropdownList}`);
    if (!n || !s) return;
    bt(n, s);
    let i = O("label", { operator: "prefixed", scope: n }) || f(n) || n,
      c = [
        k("element", "resetOption", { operator: "prefixed" }),
        k("element", "resetOptionFallback", { operator: "prefixed" }),
      ].join(", "),
      p = s.querySelector(`a:not(${c})`);
    if (!z(p)) return;
    let a = p.parentElement;
    if (!a) return;
    let l = s.querySelector(c);
    for (let m of [p, l])
      m &&
        ((m.href = "#"),
        m.setAttribute(K, "-1"),
        m.removeAttribute(ut),
        m.remove());
    let u = t.getAttribute(v.hideInitial.key) === v.hideInitial.values.true;
    return {
      optionsStore: e,
      selectElement: r,
      dropdownToggle: n,
      dropdownList: s,
      label: i,
      optionTemplate: p,
      optionsList: a,
      emptyOption: l,
      hideInitial: u,
    };
  };
  var It = async () => {
      await W(V, q);
      let t = O("dropdown", { all: !0, operator: "prefixed" }),
        e = t.map(Jt).filter(U);
      return J(T, t, () => {
        for (let o of e) o();
      });
    },
    Jt = (t) => {
      let e = Rt(t);
      if (!e) return;
      N(e);
      let o = _t(e),
        r = Tt(e);
      return () => {
        o(), r();
      };
    };
  rt({ init: It, version: nt, attributeKey: T });
})();
