"use strict";
(self["webpackChunkpoolsuite"] = self["webpackChunkpoolsuite"] || []).push([
    [343], {
        17724: (t, e, r) => {
            /*!
             * The buffer module from node.js, for the browser.
             *
             * @author   Feross Aboukhadijeh <https://feross.org>
             * @license  MIT
             */
            const n = r(79742),
                o = r(80645),
                i = "function" === typeof Symbol && "function" === typeof Symbol["for"] ? Symbol["for"]("nodejs.util.inspect.custom") : null;
            e.lW = u, e.h2 = 50;
            const s = 2147483647;

            function a() {
                try {
                    const t = new Uint8Array(1),
                        e = {
                            foo: function() {
                                return 42
                            }
                        };
                    return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), 42 === t.foo()
                } catch (t) {
                    return !1
                }
            }

            function f(t) {
                if (t > s) throw new RangeError('The value "' + t + '" is invalid for option "size"');
                const e = new Uint8Array(t);
                return Object.setPrototypeOf(e, u.prototype), e
            }

            function u(t, e, r) {
                if ("number" === typeof t) {
                    if ("string" === typeof e) throw new TypeError('The "string" argument must be of type string. Received type number');
                    return p(t)
                }
                return l(t, e, r)
            }

            function l(t, e, r) {
                if ("string" === typeof t) return g(t, e);
                if (ArrayBuffer.isView(t)) return y(t);
                if (null == t) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
                if (st(t, ArrayBuffer) || t && st(t.buffer, ArrayBuffer)) return w(t, e, r);
                if ("undefined" !== typeof SharedArrayBuffer && (st(t, SharedArrayBuffer) || t && st(t.buffer, SharedArrayBuffer))) return w(t, e, r);
                if ("number" === typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number');
                const n = t.valueOf && t.valueOf();
                if (null != n && n !== t) return u.from(n, e, r);
                const o = b(t);
                if (o) return o;
                if ("undefined" !== typeof Symbol && null != Symbol.toPrimitive && "function" === typeof t[Symbol.toPrimitive]) return u.from(t[Symbol.toPrimitive]("string"), e, r);
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t)
            }

            function c(t) {
                if ("number" !== typeof t) throw new TypeError('"size" argument must be of type number');
                if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"')
            }

            function h(t, e, r) {
                return c(t), t <= 0 ? f(t) : void 0 !== e ? "string" === typeof r ? f(t).fill(e, r) : f(t).fill(e) : f(t)
            }

            function p(t) {
                return c(t), f(t < 0 ? 0 : 0 | m(t))
            }

            function g(t, e) {
                if ("string" === typeof e && "" !== e || (e = "utf8"), !u.isEncoding(e)) throw new TypeError("Unknown encoding: " + e);
                const r = 0 | I(t, e);
                let n = f(r);
                const o = n.write(t, e);
                return o !== r && (n = n.slice(0, o)), n
            }

            function d(t) {
                const e = t.length < 0 ? 0 : 0 | m(t.length),
                    r = f(e);
                for (let n = 0; n < e; n += 1) r[n] = 255 & t[n];
                return r
            }

            function y(t) {
                if (st(t, Uint8Array)) {
                    const e = new Uint8Array(t);
                    return w(e.buffer, e.byteOffset, e.byteLength)
                }
                return d(t)
            }

            function w(t, e, r) {
                if (e < 0 || t.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds');
                if (t.byteLength < e + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
                let n;
                return n = void 0 === e && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, e) : new Uint8Array(t, e, r), Object.setPrototypeOf(n, u.prototype), n
            }

            function b(t) {
                if (u.isBuffer(t)) {
                    const e = 0 | m(t.length),
                        r = f(e);
                    return 0 === r.length || t.copy(r, 0, 0, e), r
                }
                return void 0 !== t.length ? "number" !== typeof t.length || at(t.length) ? f(0) : d(t) : "Buffer" === t.type && Array.isArray(t.data) ? d(t.data) : void 0
            }

            function m(t) {
                if (t >= s) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
                return 0 | t
            }

            function E(t) {
                return +t != t && (t = 0), u.alloc(+t)
            }

            function I(t, e) {
                if (u.isBuffer(t)) return t.length;
                if (ArrayBuffer.isView(t) || st(t, ArrayBuffer)) return t.byteLength;
                if ("string" !== typeof t) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
                const r = t.length,
                    n = arguments.length > 2 && !0 === arguments[2];
                if (!n && 0 === r) return 0;
                let o = !1;
                for (;;) switch (e) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return r;
                    case "utf8":
                    case "utf-8":
                        return et(t).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * r;
                    case "hex":
                        return r >>> 1;
                    case "base64":
                        return ot(t).length;
                    default:
                        if (o) return n ? -1 : et(t).length;
                        e = ("" + e).toLowerCase(), o = !0
                }
            }

            function v(t, e, r) {
                let n = !1;
                if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
                if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
                if (r >>>= 0, e >>>= 0, r <= e) return "";
                t || (t = "utf8");
                while (1) switch (t) {
                    case "hex":
                        return _(this, e, r);
                    case "utf8":
                    case "utf-8":
                        return S(this, e, r);
                    case "ascii":
                        return M(this, e, r);
                    case "latin1":
                    case "binary":
                        return P(this, e, r);
                    case "base64":
                        return W(this, e, r);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return x(this, e, r);
                    default:
                        if (n) throw new TypeError("Unknown encoding: " + t);
                        t = (t + "").toLowerCase(), n = !0
                }
            }

            function B(t, e, r) {
                const n = t[e];
                t[e] = t[r], t[r] = n
            }

            function A(t, e, r, n, o) {
                if (0 === t.length) return -1;
                if ("string" === typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, at(r) && (r = o ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
                    if (o) return -1;
                    r = t.length - 1
                } else if (r < 0) {
                    if (!o) return -1;
                    r = 0
                }
                if ("string" === typeof e && (e = u.from(e, n)), u.isBuffer(e)) return 0 === e.length ? -1 : U(t, e, r, n, o);
                if ("number" === typeof e) return e &= 255, "function" === typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : U(t, [e], r, n, o);
                throw new TypeError("val must be string, number or Buffer")
            }

            function U(t, e, r, n, o) {
                let i, s = 1,
                    a = t.length,
                    f = e.length;
                if (void 0 !== n && (n = String(n).toLowerCase(), "ucs2" === n || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                    if (t.length < 2 || e.length < 2) return -1;
                    s = 2, a /= 2, f /= 2, r /= 2
                }

                function u(t, e) {
                    return 1 === s ? t[e] : t.readUInt16BE(e * s)
                }
                if (o) {
                    let n = -1;
                    for (i = r; i < a; i++)
                        if (u(t, i) === u(e, -1 === n ? 0 : i - n)) {
                            if (-1 === n && (n = i), i - n + 1 === f) return n * s
                        } else -1 !== n && (i -= i - n), n = -1
                } else
                    for (r + f > a && (r = a - f), i = r; i >= 0; i--) {
                        let r = !0;
                        for (let n = 0; n < f; n++)
                            if (u(t, i + n) !== u(e, n)) {
                                r = !1;
                                break
                            }
                        if (r) return i
                    }
                return -1
            }

            function O(t, e, r, n) {
                r = Number(r) || 0;
                const o = t.length - r;
                n ? (n = Number(n), n > o && (n = o)) : n = o;
                const i = e.length;
                let s;
                for (n > i / 2 && (n = i / 2), s = 0; s < n; ++s) {
                    const n = parseInt(e.substr(2 * s, 2), 16);
                    if (at(n)) return s;
                    t[r + s] = n
                }
                return s
            }

            function L(t, e, r, n) {
                return it(et(e, t.length - r), t, r, n)
            }

            function C(t, e, r, n) {
                return it(rt(e), t, r, n)
            }

            function R(t, e, r, n) {
                return it(ot(e), t, r, n)
            }

            function T(t, e, r, n) {
                return it(nt(e, t.length - r), t, r, n)
            }

            function W(t, e, r) {
                return 0 === e && r === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, r))
            }

            function S(t, e, r) {
                r = Math.min(t.length, r);
                const n = [];
                let o = e;
                while (o < r) {
                    const e = t[o];
                    let i = null,
                        s = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
                    if (o + s <= r) {
                        let r, n, a, f;
                        switch (s) {
                            case 1:
                                e < 128 && (i = e);
                                break;
                            case 2:
                                r = t[o + 1], 128 === (192 & r) && (f = (31 & e) << 6 | 63 & r, f > 127 && (i = f));
                                break;
                            case 3:
                                r = t[o + 1], n = t[o + 2], 128 === (192 & r) && 128 === (192 & n) && (f = (15 & e) << 12 | (63 & r) << 6 | 63 & n, f > 2047 && (f < 55296 || f > 57343) && (i = f));
                                break;
                            case 4:
                                r = t[o + 1], n = t[o + 2], a = t[o + 3], 128 === (192 & r) && 128 === (192 & n) && 128 === (192 & a) && (f = (15 & e) << 18 | (63 & r) << 12 | (63 & n) << 6 | 63 & a, f > 65535 && f < 1114112 && (i = f))
                        }
                    }
                    null === i ? (i = 65533, s = 1) : i > 65535 && (i -= 65536, n.push(i >>> 10 & 1023 | 55296), i = 56320 | 1023 & i), n.push(i), o += s
                }
                return k(n)
            }
            u.TYPED_ARRAY_SUPPORT = a(), u.TYPED_ARRAY_SUPPORT || "undefined" === typeof console || "function" !== typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(u.prototype, "parent", {
                enumerable: !0,
                get: function() {
                    if (u.isBuffer(this)) return this.buffer
                }
            }), Object.defineProperty(u.prototype, "offset", {
                enumerable: !0,
                get: function() {
                    if (u.isBuffer(this)) return this.byteOffset
                }
            }), u.poolSize = 8192, u.from = function(t, e, r) {
                return l(t, e, r)
            }, Object.setPrototypeOf(u.prototype, Uint8Array.prototype), Object.setPrototypeOf(u, Uint8Array), u.alloc = function(t, e, r) {
                return h(t, e, r)
            }, u.allocUnsafe = function(t) {
                return p(t)
            }, u.allocUnsafeSlow = function(t) {
                return p(t)
            }, u.isBuffer = function(t) {
                return null != t && !0 === t._isBuffer && t !== u.prototype
            }, u.compare = function(t, e) {
                if (st(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)), st(e, Uint8Array) && (e = u.from(e, e.offset, e.byteLength)), !u.isBuffer(t) || !u.isBuffer(e)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                if (t === e) return 0;
                let r = t.length,
                    n = e.length;
                for (let o = 0, i = Math.min(r, n); o < i; ++o)
                    if (t[o] !== e[o]) {
                        r = t[o], n = e[o];
                        break
                    }
                return r < n ? -1 : n < r ? 1 : 0
            }, u.isEncoding = function(t) {
                switch (String(t).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, u.concat = function(t, e) {
                if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === t.length) return u.alloc(0);
                let r;
                if (void 0 === e)
                    for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
                const n = u.allocUnsafe(e);
                let o = 0;
                for (r = 0; r < t.length; ++r) {
                    let e = t[r];
                    if (st(e, Uint8Array)) o + e.length > n.length ? (u.isBuffer(e) || (e = u.from(e)), e.copy(n, o)) : Uint8Array.prototype.set.call(n, e, o);
                    else {
                        if (!u.isBuffer(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                        e.copy(n, o)
                    }
                    o += e.length
                }
                return n
            }, u.byteLength = I, u.prototype._isBuffer = !0, u.prototype.swap16 = function() {
                const t = this.length;
                if (t % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (let e = 0; e < t; e += 2) B(this, e, e + 1);
                return this
            }, u.prototype.swap32 = function() {
                const t = this.length;
                if (t % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (let e = 0; e < t; e += 4) B(this, e, e + 3), B(this, e + 1, e + 2);
                return this
            }, u.prototype.swap64 = function() {
                const t = this.length;
                if (t % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (let e = 0; e < t; e += 8) B(this, e, e + 7), B(this, e + 1, e + 6), B(this, e + 2, e + 5), B(this, e + 3, e + 4);
                return this
            }, u.prototype.toString = function() {
                const t = this.length;
                return 0 === t ? "" : 0 === arguments.length ? S(this, 0, t) : v.apply(this, arguments)
            }, u.prototype.toLocaleString = u.prototype.toString, u.prototype.equals = function(t) {
                if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                return this === t || 0 === u.compare(this, t)
            }, u.prototype.inspect = function() {
                let t = "";
                const r = e.h2;
                return t = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (t += " ... "), "<Buffer " + t + ">"
            }, i && (u.prototype[i] = u.prototype.inspect), u.prototype.compare = function(t, e, r, n, o) {
                if (st(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)), !u.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
                if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === n && (n = 0), void 0 === o && (o = this.length), e < 0 || r > t.length || n < 0 || o > this.length) throw new RangeError("out of range index");
                if (n >= o && e >= r) return 0;
                if (n >= o) return -1;
                if (e >= r) return 1;
                if (e >>>= 0, r >>>= 0, n >>>= 0, o >>>= 0, this === t) return 0;
                let i = o - n,
                    s = r - e;
                const a = Math.min(i, s),
                    f = this.slice(n, o),
                    l = t.slice(e, r);
                for (let u = 0; u < a; ++u)
                    if (f[u] !== l[u]) {
                        i = f[u], s = l[u];
                        break
                    }
                return i < s ? -1 : s < i ? 1 : 0
            }, u.prototype.includes = function(t, e, r) {
                return -1 !== this.indexOf(t, e, r)
            }, u.prototype.indexOf = function(t, e, r) {
                return A(this, t, e, r, !0)
            }, u.prototype.lastIndexOf = function(t, e, r) {
                return A(this, t, e, r, !1)
            }, u.prototype.write = function(t, e, r, n) {
                if (void 0 === e) n = "utf8", r = this.length, e = 0;
                else if (void 0 === r && "string" === typeof e) n = e, r = this.length, e = 0;
                else {
                    if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    e >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0)
                }
                const o = this.length - e;
                if ((void 0 === r || r > o) && (r = o), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                n || (n = "utf8");
                let i = !1;
                for (;;) switch (n) {
                    case "hex":
                        return O(this, t, e, r);
                    case "utf8":
                    case "utf-8":
                        return L(this, t, e, r);
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return C(this, t, e, r);
                    case "base64":
                        return R(this, t, e, r);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return T(this, t, e, r);
                    default:
                        if (i) throw new TypeError("Unknown encoding: " + n);
                        n = ("" + n).toLowerCase(), i = !0
                }
            }, u.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            };
            const j = 4096;

            function k(t) {
                const e = t.length;
                if (e <= j) return String.fromCharCode.apply(String, t);
                let r = "",
                    n = 0;
                while (n < e) r += String.fromCharCode.apply(String, t.slice(n, n += j));
                return r
            }

            function M(t, e, r) {
                let n = "";
                r = Math.min(t.length, r);
                for (let o = e; o < r; ++o) n += String.fromCharCode(127 & t[o]);
                return n
            }

            function P(t, e, r) {
                let n = "";
                r = Math.min(t.length, r);
                for (let o = e; o < r; ++o) n += String.fromCharCode(t[o]);
                return n
            }

            function _(t, e, r) {
                const n = t.length;
                (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
                let o = "";
                for (let i = e; i < r; ++i) o += ft[t[i]];
                return o
            }

            function x(t, e, r) {
                const n = t.slice(e, r);
                let o = "";
                for (let i = 0; i < n.length - 1; i += 2) o += String.fromCharCode(n[i] + 256 * n[i + 1]);
                return o
            }

            function D(t, e, r) {
                if (t % 1 !== 0 || t < 0) throw new RangeError("offset is not uint");
                if (t + e > r) throw new RangeError("Trying to access beyond buffer length")
            }

            function N(t, e, r, n, o, i) {
                if (!u.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (e > o || e < i) throw new RangeError('"value" argument is out of bounds');
                if (r + n > t.length) throw new RangeError("Index out of range")
            }

            function $(t, e, r, n, o) {
                J(e, n, o, t, r, 7);
                let i = Number(e & BigInt(4294967295));
                t[r++] = i, i >>= 8, t[r++] = i, i >>= 8, t[r++] = i, i >>= 8, t[r++] = i;
                let s = Number(e >> BigInt(32) & BigInt(4294967295));
                return t[r++] = s, s >>= 8, t[r++] = s, s >>= 8, t[r++] = s, s >>= 8, t[r++] = s, r
            }

            function z(t, e, r, n, o) {
                J(e, n, o, t, r, 7);
                let i = Number(e & BigInt(4294967295));
                t[r + 7] = i, i >>= 8, t[r + 6] = i, i >>= 8, t[r + 5] = i, i >>= 8, t[r + 4] = i;
                let s = Number(e >> BigInt(32) & BigInt(4294967295));
                return t[r + 3] = s, s >>= 8, t[r + 2] = s, s >>= 8, t[r + 1] = s, s >>= 8, t[r] = s, r + 8
            }

            function F(t, e, r, n, o, i) {
                if (r + n > t.length) throw new RangeError("Index out of range");
                if (r < 0) throw new RangeError("Index out of range")
            }

            function V(t, e, r, n, i) {
                return e = +e, r >>>= 0, i || F(t, e, r, 4, 34028234663852886e22, -34028234663852886e22), o.write(t, e, r, n, 23, 4), r + 4
            }

            function H(t, e, r, n, i) {
                return e = +e, r >>>= 0, i || F(t, e, r, 8, 17976931348623157e292, -17976931348623157e292), o.write(t, e, r, n, 52, 8), r + 8
            }
            u.prototype.slice = function(t, e) {
                const r = this.length;
                t = ~~t, e = void 0 === e ? r : ~~e, t < 0 ? (t += r, t < 0 && (t = 0)) : t > r && (t = r), e < 0 ? (e += r, e < 0 && (e = 0)) : e > r && (e = r), e < t && (e = t);
                const n = this.subarray(t, e);
                return Object.setPrototypeOf(n, u.prototype), n
            }, u.prototype.readUintLE = u.prototype.readUIntLE = function(t, e, r) {
                t >>>= 0, e >>>= 0, r || D(t, e, this.length);
                let n = this[t],
                    o = 1,
                    i = 0;
                while (++i < e && (o *= 256)) n += this[t + i] * o;
                return n
            }, u.prototype.readUintBE = u.prototype.readUIntBE = function(t, e, r) {
                t >>>= 0, e >>>= 0, r || D(t, e, this.length);
                let n = this[t + --e],
                    o = 1;
                while (e > 0 && (o *= 256)) n += this[t + --e] * o;
                return n
            }, u.prototype.readUint8 = u.prototype.readUInt8 = function(t, e) {
                return t >>>= 0, e || D(t, 1, this.length), this[t]
            }, u.prototype.readUint16LE = u.prototype.readUInt16LE = function(t, e) {
                return t >>>= 0, e || D(t, 2, this.length), this[t] | this[t + 1] << 8
            }, u.prototype.readUint16BE = u.prototype.readUInt16BE = function(t, e) {
                return t >>>= 0, e || D(t, 2, this.length), this[t] << 8 | this[t + 1]
            }, u.prototype.readUint32LE = u.prototype.readUInt32LE = function(t, e) {
                return t >>>= 0, e || D(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
            }, u.prototype.readUint32BE = u.prototype.readUInt32BE = function(t, e) {
                return t >>>= 0, e || D(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
            }, u.prototype.readBigUInt64LE = ut((function(t) {
                t >>>= 0, Z(t, "offset");
                const e = this[t],
                    r = this[t + 7];
                void 0 !== e && void 0 !== r || Q(t, this.length - 8);
                const n = e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24,
                    o = this[++t] + 256 * this[++t] + 65536 * this[++t] + r * 2 ** 24;
                return BigInt(n) + (BigInt(o) << BigInt(32))
            })), u.prototype.readBigUInt64BE = ut((function(t) {
                t >>>= 0, Z(t, "offset");
                const e = this[t],
                    r = this[t + 7];
                void 0 !== e && void 0 !== r || Q(t, this.length - 8);
                const n = e * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + this[++t],
                    o = this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r;
                return (BigInt(n) << BigInt(32)) + BigInt(o)
            })), u.prototype.readIntLE = function(t, e, r) {
                t >>>= 0, e >>>= 0, r || D(t, e, this.length);
                let n = this[t],
                    o = 1,
                    i = 0;
                while (++i < e && (o *= 256)) n += this[t + i] * o;
                return o *= 128, n >= o && (n -= Math.pow(2, 8 * e)), n
            }, u.prototype.readIntBE = function(t, e, r) {
                t >>>= 0, e >>>= 0, r || D(t, e, this.length);
                let n = e,
                    o = 1,
                    i = this[t + --n];
                while (n > 0 && (o *= 256)) i += this[t + --n] * o;
                return o *= 128, i >= o && (i -= Math.pow(2, 8 * e)), i
            }, u.prototype.readInt8 = function(t, e) {
                return t >>>= 0, e || D(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
            }, u.prototype.readInt16LE = function(t, e) {
                t >>>= 0, e || D(t, 2, this.length);
                const r = this[t] | this[t + 1] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, u.prototype.readInt16BE = function(t, e) {
                t >>>= 0, e || D(t, 2, this.length);
                const r = this[t + 1] | this[t] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, u.prototype.readInt32LE = function(t, e) {
                return t >>>= 0, e || D(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
            }, u.prototype.readInt32BE = function(t, e) {
                return t >>>= 0, e || D(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
            }, u.prototype.readBigInt64LE = ut((function(t) {
                t >>>= 0, Z(t, "offset");
                const e = this[t],
                    r = this[t + 7];
                void 0 !== e && void 0 !== r || Q(t, this.length - 8);
                const n = this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (r << 24);
                return (BigInt(n) << BigInt(32)) + BigInt(e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24)
            })), u.prototype.readBigInt64BE = ut((function(t) {
                t >>>= 0, Z(t, "offset");
                const e = this[t],
                    r = this[t + 7];
                void 0 !== e && void 0 !== r || Q(t, this.length - 8);
                const n = (e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t];
                return (BigInt(n) << BigInt(32)) + BigInt(this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r)
            })), u.prototype.readFloatLE = function(t, e) {
                return t >>>= 0, e || D(t, 4, this.length), o.read(this, t, !0, 23, 4)
            }, u.prototype.readFloatBE = function(t, e) {
                return t >>>= 0, e || D(t, 4, this.length), o.read(this, t, !1, 23, 4)
            }, u.prototype.readDoubleLE = function(t, e) {
                return t >>>= 0, e || D(t, 8, this.length), o.read(this, t, !0, 52, 8)
            }, u.prototype.readDoubleBE = function(t, e) {
                return t >>>= 0, e || D(t, 8, this.length), o.read(this, t, !1, 52, 8)
            }, u.prototype.writeUintLE = u.prototype.writeUIntLE = function(t, e, r, n) {
                if (t = +t, e >>>= 0, r >>>= 0, !n) {
                    const n = Math.pow(2, 8 * r) - 1;
                    N(this, t, e, r, n, 0)
                }
                let o = 1,
                    i = 0;
                this[e] = 255 & t;
                while (++i < r && (o *= 256)) this[e + i] = t / o & 255;
                return e + r
            }, u.prototype.writeUintBE = u.prototype.writeUIntBE = function(t, e, r, n) {
                if (t = +t, e >>>= 0, r >>>= 0, !n) {
                    const n = Math.pow(2, 8 * r) - 1;
                    N(this, t, e, r, n, 0)
                }
                let o = r - 1,
                    i = 1;
                this[e + o] = 255 & t;
                while (--o >= 0 && (i *= 256)) this[e + o] = t / i & 255;
                return e + r
            }, u.prototype.writeUint8 = u.prototype.writeUInt8 = function(t, e, r) {
                return t = +t, e >>>= 0, r || N(this, t, e, 1, 255, 0), this[e] = 255 & t, e + 1
            }, u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function(t, e, r) {
                return t = +t, e >>>= 0, r || N(this, t, e, 2, 65535, 0), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
            }, u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function(t, e, r) {
                return t = +t, e >>>= 0, r || N(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
            }, u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function(t, e, r) {
                return t = +t, e >>>= 0, r || N(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t, e + 4
            }, u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function(t, e, r) {
                return t = +t, e >>>= 0, r || N(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
            }, u.prototype.writeBigUInt64LE = ut((function(t, e = 0) {
                return $(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
            })), u.prototype.writeBigUInt64BE = ut((function(t, e = 0) {
                return z(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
            })), u.prototype.writeIntLE = function(t, e, r, n) {
                if (t = +t, e >>>= 0, !n) {
                    const n = Math.pow(2, 8 * r - 1);
                    N(this, t, e, r, n - 1, -n)
                }
                let o = 0,
                    i = 1,
                    s = 0;
                this[e] = 255 & t;
                while (++o < r && (i *= 256)) t < 0 && 0 === s && 0 !== this[e + o - 1] && (s = 1), this[e + o] = (t / i >> 0) - s & 255;
                return e + r
            }, u.prototype.writeIntBE = function(t, e, r, n) {
                if (t = +t, e >>>= 0, !n) {
                    const n = Math.pow(2, 8 * r - 1);
                    N(this, t, e, r, n - 1, -n)
                }
                let o = r - 1,
                    i = 1,
                    s = 0;
                this[e + o] = 255 & t;
                while (--o >= 0 && (i *= 256)) t < 0 && 0 === s && 0 !== this[e + o + 1] && (s = 1), this[e + o] = (t / i >> 0) - s & 255;
                return e + r
            }, u.prototype.writeInt8 = function(t, e, r) {
                return t = +t, e >>>= 0, r || N(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
            }, u.prototype.writeInt16LE = function(t, e, r) {
                return t = +t, e >>>= 0, r || N(this, t, e, 2, 32767, -32768), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
            }, u.prototype.writeInt16BE = function(t, e, r) {
                return t = +t, e >>>= 0, r || N(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
            }, u.prototype.writeInt32LE = function(t, e, r) {
                return t = +t, e >>>= 0, r || N(this, t, e, 4, 2147483647, -2147483648), this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4
            }, u.prototype.writeInt32BE = function(t, e, r) {
                return t = +t, e >>>= 0, r || N(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
            }, u.prototype.writeBigInt64LE = ut((function(t, e = 0) {
                return $(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
            })), u.prototype.writeBigInt64BE = ut((function(t, e = 0) {
                return z(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
            })), u.prototype.writeFloatLE = function(t, e, r) {
                return V(this, t, e, !0, r)
            }, u.prototype.writeFloatBE = function(t, e, r) {
                return V(this, t, e, !1, r)
            }, u.prototype.writeDoubleLE = function(t, e, r) {
                return H(this, t, e, !0, r)
            }, u.prototype.writeDoubleBE = function(t, e, r) {
                return H(this, t, e, !1, r)
            }, u.prototype.copy = function(t, e, r, n) {
                if (!u.isBuffer(t)) throw new TypeError("argument should be a Buffer");
                if (r || (r = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < r && (n = r), n === r) return 0;
                if (0 === t.length || 0 === this.length) return 0;
                if (e < 0) throw new RangeError("targetStart out of bounds");
                if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
                if (n < 0) throw new RangeError("sourceEnd out of bounds");
                n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
                const o = n - r;
                return this === t && "function" === typeof Uint8Array.prototype.copyWithin ? this.copyWithin(e, r, n) : Uint8Array.prototype.set.call(t, this.subarray(r, n), e), o
            }, u.prototype.fill = function(t, e, r, n) {
                if ("string" === typeof t) {
                    if ("string" === typeof e ? (n = e, e = 0, r = this.length) : "string" === typeof r && (n = r, r = this.length), void 0 !== n && "string" !== typeof n) throw new TypeError("encoding must be a string");
                    if ("string" === typeof n && !u.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
                    if (1 === t.length) {
                        const e = t.charCodeAt(0);
                        ("utf8" === n && e < 128 || "latin1" === n) && (t = e)
                    }
                } else "number" === typeof t ? t &= 255 : "boolean" === typeof t && (t = Number(t));
                if (e < 0 || this.length < e || this.length < r) throw new RangeError("Out of range index");
                if (r <= e) return this;
                let o;
                if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), "number" === typeof t)
                    for (o = e; o < r; ++o) this[o] = t;
                else {
                    const i = u.isBuffer(t) ? t : u.from(t, n),
                        s = i.length;
                    if (0 === s) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
                    for (o = 0; o < r - e; ++o) this[o + e] = i[o % s]
                }
                return this
            };
            const K = {};

            function G(t, e, r) {
                K[t] = class extends r {
                    constructor() {
                        super(), Object.defineProperty(this, "message", {
                            value: e.apply(this, arguments),
                            writable: !0,
                            configurable: !0
                        }), this.name = `${this.name} [${t}]`, this.stack, delete this.name
                    }
                    get code() {
                        return t
                    }
                    set code(t) {
                        Object.defineProperty(this, "code", {
                            configurable: !0,
                            enumerable: !0,
                            value: t,
                            writable: !0
                        })
                    }
                    toString() {
                        return `${this.name} [${t}]: ${this.message}`
                    }
                }
            }

            function Y(t) {
                let e = "",
                    r = t.length;
                const n = "-" === t[0] ? 1 : 0;
                for (; r >= n + 4; r -= 3) e = `_${t.slice(r-3,r)}${e}`;
                return `${t.slice(0,r)}${e}`
            }

            function q(t, e, r) {
                Z(e, "offset"), void 0 !== t[e] && void 0 !== t[e + r] || Q(e, t.length - (r + 1))
            }

            function J(t, e, r, n, o, i) {
                if (t > r || t < e) {
                    const n = "bigint" === typeof e ? "n" : "";
                    let o;
                    throw o = i > 3 ? 0 === e || e === BigInt(0) ? `>= 0${n} and < 2${n} ** ${8*(i+1)}${n}` : `>= -(2${n} ** ${8*(i+1)-1}${n}) and < 2 ** ${8*(i+1)-1}${n}` : `>= ${e}${n} and <= ${r}${n}`, new K.ERR_OUT_OF_RANGE("value", o, t)
                }
                q(n, o, i)
            }

            function Z(t, e) {
                if ("number" !== typeof t) throw new K.ERR_INVALID_ARG_TYPE(e, "number", t)
            }

            function Q(t, e, r) {
                if (Math.floor(t) !== t) throw Z(t, r), new K.ERR_OUT_OF_RANGE(r || "offset", "an integer", t);
                if (e < 0) throw new K.ERR_BUFFER_OUT_OF_BOUNDS;
                throw new K.ERR_OUT_OF_RANGE(r || "offset", `>= ${r?1:0} and <= ${e}`, t)
            }
            G("ERR_BUFFER_OUT_OF_BOUNDS", (function(t) {
                return t ? `${t} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
            }), RangeError), G("ERR_INVALID_ARG_TYPE", (function(t, e) {
                return `The "${t}" argument must be of type number. Received type ${typeof e}`
            }), TypeError), G("ERR_OUT_OF_RANGE", (function(t, e, r) {
                let n = `The value of "${t}" is out of range.`,
                    o = r;
                return Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? o = Y(String(r)) : "bigint" === typeof r && (o = String(r), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (o = Y(o)), o += "n"), n += ` It must be ${e}. Received ${o}`, n
            }), RangeError);
            const X = /[^+/0-9A-Za-z-_]/g;

            function tt(t) {
                if (t = t.split("=")[0], t = t.trim().replace(X, ""), t.length < 2) return "";
                while (t.length % 4 !== 0) t += "=";
                return t
            }

            function et(t, e) {
                let r;
                e = e || 1 / 0;
                const n = t.length;
                let o = null;
                const i = [];
                for (let s = 0; s < n; ++s) {
                    if (r = t.charCodeAt(s), r > 55295 && r < 57344) {
                        if (!o) {
                            if (r > 56319) {
                                (e -= 3) > -1 && i.push(239, 191, 189);
                                continue
                            }
                            if (s + 1 === n) {
                                (e -= 3) > -1 && i.push(239, 191, 189);
                                continue
                            }
                            o = r;
                            continue
                        }
                        if (r < 56320) {
                            (e -= 3) > -1 && i.push(239, 191, 189), o = r;
                            continue
                        }
                        r = 65536 + (o - 55296 << 10 | r - 56320)
                    } else o && (e -= 3) > -1 && i.push(239, 191, 189);
                    if (o = null, r < 128) {
                        if ((e -= 1) < 0) break;
                        i.push(r)
                    } else if (r < 2048) {
                        if ((e -= 2) < 0) break;
                        i.push(r >> 6 | 192, 63 & r | 128)
                    } else if (r < 65536) {
                        if ((e -= 3) < 0) break;
                        i.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                    } else {
                        if (!(r < 1114112)) throw new Error("Invalid code point");
                        if ((e -= 4) < 0) break;
                        i.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                    }
                }
                return i
            }

            function rt(t) {
                const e = [];
                for (let r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
                return e
            }

            function nt(t, e) {
                let r, n, o;
                const i = [];
                for (let s = 0; s < t.length; ++s) {
                    if ((e -= 2) < 0) break;
                    r = t.charCodeAt(s), n = r >> 8, o = r % 256, i.push(o), i.push(n)
                }
                return i
            }

            function ot(t) {
                return n.toByteArray(tt(t))
            }

            function it(t, e, r, n) {
                let o;
                for (o = 0; o < n; ++o) {
                    if (o + r >= e.length || o >= t.length) break;
                    e[o + r] = t[o]
                }
                return o
            }

            function st(t, e) {
                return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name
            }

            function at(t) {
                return t !== t
            }
            const ft = function() {
                const t = "0123456789abcdef",
                    e = new Array(256);
                for (let r = 0; r < 16; ++r) {
                    const n = 16 * r;
                    for (let o = 0; o < 16; ++o) e[n + o] = t[r] + t[o]
                }
                return e
            }();

            function ut(t) {
                return "undefined" === typeof BigInt ? lt : t
            }

            function lt() {
                throw new Error("BigInt not supported")
            }
        },
        75740: (t, e, r) => {
            r.d(e, {
                ConfigCtrl: () => L,
                zv: () => E,
                uA: () => B,
                ExplorerCtrl: () => D,
                jb: () => $,
                OptionsCtrl: () => U,
                AV: () => m,
                ThemeCtrl: () => J,
                ToastCtrl: () => Q
            });
            Symbol();
            const n = Symbol();
            const o = Object.getPrototypeOf,
                i = new WeakMap,
                s = t => t && (i.has(t) ? i.get(t) : o(t) === Object.prototype || o(t) === Array.prototype),
                a = t => s(t) && t[n] || null,
                f = (t, e = !0) => {
                    i.set(t, e)
                },
                u = t => "object" === typeof t && null !== t,
                l = new WeakMap,
                c = new WeakSet,
                h = (t = Object.is, e = ((t, e) => new Proxy(t, e)), r = (t => u(t) && !c.has(t) && (Array.isArray(t) || !(Symbol.iterator in t)) && !(t instanceof WeakMap) && !(t instanceof WeakSet) && !(t instanceof Error) && !(t instanceof Number) && !(t instanceof Date) && !(t instanceof String) && !(t instanceof RegExp) && !(t instanceof ArrayBuffer)), n = (t => {
                    switch (t.status) {
                        case "fulfilled":
                            return t.value;
                        case "rejected":
                            throw t.reason;
                        default:
                            throw t
                    }
                }), o = new WeakMap, i = ((t, e, r = n) => {
                    const s = o.get(t);
                    if ((null == s ? void 0 : s[0]) === e) return s[1];
                    const a = Array.isArray(t) ? [] : Object.create(Object.getPrototypeOf(t));
                    return f(a, !0), o.set(t, [e, a]), Reflect.ownKeys(t).forEach((e => {
                        if (Object.getOwnPropertyDescriptor(a, e)) return;
                        const n = Reflect.get(t, e),
                            o = {
                                value: n,
                                enumerable: !0,
                                configurable: !0
                            };
                        if (c.has(n)) f(n, !1);
                        else if (n instanceof Promise) delete o.value, o.get = () => r(n);
                        else if (l.has(n)) {
                            const [t, e] = l.get(n);
                            o.value = i(t, e(), r)
                        }
                        Object.defineProperty(a, e, o)
                    })), a
                }), s = new WeakMap, h = [1, 1], p = (n => {
                    if (!u(n)) throw new Error("object required");
                    const o = s.get(n);
                    if (o) return o;
                    let f = h[0];
                    const g = new Set,
                        d = (t, e = ++h[0]) => {
                            f !== e && (f = e, g.forEach((r => r(t, e))))
                        };
                    let y = h[1];
                    const w = (t = ++h[1]) => (y === t || g.size || (y = t, m.forEach((([e]) => {
                            const r = e[1](t);
                            r > f && (f = r)
                        }))), f),
                        b = t => (e, r) => {
                            const n = [...e];
                            n[1] = [t, ...n[1]], d(n, r)
                        },
                        m = new Map,
                        E = (t, e) => {
                            if (m.has(t)) throw new Error("prop listener already exists");
                            if (g.size) {
                                const r = e[3](b(t));
                                m.set(t, [e, r])
                            } else m.set(t, [e])
                        },
                        I = t => {
                            var e;
                            const r = m.get(t);
                            r && (m.delete(t), null == (e = r[1]) || e.call(r))
                        },
                        v = t => {
                            g.add(t), 1 === g.size && m.forEach((([t, e], r) => {
                                if (e) throw new Error("remove already exists");
                                const n = t[3](b(r));
                                m.set(r, [t, n])
                            }));
                            const e = () => {
                                g.delete(t), 0 === g.size && m.forEach((([t, e], r) => {
                                    e && (e(), m.set(r, [t]))
                                }))
                            };
                            return e
                        },
                        B = Array.isArray(n) ? [] : Object.create(Object.getPrototypeOf(n)),
                        A = {
                            deleteProperty(t, e) {
                                const r = Reflect.get(t, e);
                                I(e);
                                const n = Reflect.deleteProperty(t, e);
                                return n && d(["delete", [e], r]), n
                            },
                            set(e, n, o, i) {
                                const f = Reflect.has(e, n),
                                    h = Reflect.get(e, n, i);
                                if (f && (t(h, o) || s.has(o) && t(h, s.get(o)))) return !0;
                                I(n), u(o) && (o = a(o) || o);
                                let g = o;
                                if (o instanceof Promise) o.then((t => {
                                    o.status = "fulfilled", o.value = t, d(["resolve", [n], t])
                                })).catch((t => {
                                    o.status = "rejected", o.reason = t, d(["reject", [n], t])
                                }));
                                else {
                                    !l.has(o) && r(o) && (g = p(o));
                                    const t = !c.has(g) && l.get(g);
                                    t && E(n, t)
                                }
                                return Reflect.set(e, n, g, i), d(["set", [n], o, h]), !0
                            }
                        },
                        U = e(B, A);
                    s.set(n, U);
                    const O = [B, w, i, v];
                    return l.set(U, O), Reflect.ownKeys(n).forEach((t => {
                        const e = Object.getOwnPropertyDescriptor(n, t);
                        "value" in e && (U[t] = n[t], delete e.value, delete e.writable), Object.defineProperty(B, t, e)
                    })), U
                })) => [p, l, c, t, e, r, n, o, i, s, h],
                [p] = h();

            function g(t = {}) {
                return p(t)
            }

            function d(t, e, r) {
                const n = l.get(t);
                let o;
                n || console.warn("Please use proxy object");
                const i = [],
                    s = n[3];
                let a = !1;
                const f = t => {
                        i.push(t), r ? e(i.splice(0)) : o || (o = Promise.resolve().then((() => {
                            o = void 0, a && e(i.splice(0))
                        })))
                    },
                    u = s(f);
                return a = !0, () => {
                    a = !1, u()
                }
            }

            function y(t, e) {
                const r = l.get(t);
                r || console.warn("Please use proxy object");
                const [n, o, i] = r;
                return i(n, o(), e)
            }
            var w = r(17724);
            const b = g({
                    history: ["ConnectWallet"],
                    view: "ConnectWallet",
                    data: void 0
                }),
                m = {
                    state: b,
                    subscribe(t) {
                        return d(b, (() => t(b)))
                    },
                    push(t, e) {
                        t !== b.view && (b.view = t, e && (b.data = e), b.history.push(t))
                    },
                    reset(t) {
                        b.view = t, b.history = [t]
                    },
                    replace(t) {
                        b.history.length > 1 && (b.history[b.history.length - 1] = t, b.view = t)
                    },
                    goBack() {
                        if (b.history.length > 1) {
                            b.history.pop();
                            const [t] = b.history.slice(-1);
                            b.view = t
                        }
                    },
                    setData(t) {
                        b.data = t
                    }
                },
                E = {
                    WALLETCONNECT_DEEPLINK_CHOICE: "WALLETCONNECT_DEEPLINK_CHOICE",
                    WCM_VERSION: "WCM_VERSION",
                    RECOMMENDED_WALLET_AMOUNT: 9,
                    isMobile() {
                        return typeof window < "u" && Boolean(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent))
                    },
                    isAndroid() {
                        return E.isMobile() && navigator.userAgent.toLowerCase().includes("android")
                    },
                    isIos() {
                        const t = navigator.userAgent.toLowerCase();
                        return E.isMobile() && (t.includes("iphone") || t.includes("ipad"))
                    },
                    isHttpUrl(t) {
                        return t.startsWith("http://") || t.startsWith("https://")
                    },
                    isArray(t) {
                        return Array.isArray(t) && t.length > 0
                    },
                    formatNativeUrl(t, e, r) {
                        if (E.isHttpUrl(t)) return this.formatUniversalUrl(t, e, r);
                        let n = t;
                        n.includes("://") || (n = t.replaceAll("/", "").replaceAll(":", ""), n = `${n}://`), n.endsWith("/") || (n = `${n}/`), this.setWalletConnectDeepLink(n, r);
                        const o = encodeURIComponent(e);
                        return `${n}wc?uri=${o}`
                    },
                    formatUniversalUrl(t, e, r) {
                        if (!E.isHttpUrl(t)) return this.formatNativeUrl(t, e, r);
                        let n = t;
                        n.endsWith("/") || (n = `${n}/`), this.setWalletConnectDeepLink(n, r);
                        const o = encodeURIComponent(e);
                        return `${n}wc?uri=${o}`
                    },
                    async wait(t) {
                        return new Promise((e => {
                            setTimeout(e, t)
                        }))
                    },
                    openHref(t, e) {
                        window.open(t, e, "noreferrer noopener")
                    },
                    setWalletConnectDeepLink(t, e) {
                        try {
                            localStorage.setItem(E.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({
                                href: t,
                                name: e
                            }))
                        } catch {
                            console.info("Unable to set WalletConnect deep link")
                        }
                    },
                    setWalletConnectAndroidDeepLink(t) {
                        try {
                            const [e] = t.split("?");
                            localStorage.setItem(E.WALLETCONNECT_DEEPLINK_CHOICE, JSON.stringify({
                                href: e,
                                name: "Android"
                            }))
                        } catch {
                            console.info("Unable to set WalletConnect android deep link")
                        }
                    },
                    removeWalletConnectDeepLink() {
                        try {
                            localStorage.removeItem(E.WALLETCONNECT_DEEPLINK_CHOICE)
                        } catch {
                            console.info("Unable to remove WalletConnect deep link")
                        }
                    },
                    setModalVersionInStorage() {
                        try {
                            typeof localStorage < "u" && localStorage.setItem(E.WCM_VERSION, "2.5.6")
                        } catch {
                            console.info("Unable to set Web3Modal version in storage")
                        }
                    },
                    getWalletRouterData() {
                        var t;
                        const e = null == (t = m.state.data) ? void 0 : t.Wallet;
                        if (!e) throw new Error('Missing "Wallet" view data');
                        return e
                    }
                },
                I = typeof location < "u" && (location.hostname.includes("localhost") || location.protocol.includes("https")),
                v = g({
                    enabled: I,
                    userSessionId: "",
                    events: [],
                    connectedWalletId: void 0
                }),
                B = {
                    state: v,
                    subscribe(t) {
                        return d(v.events, (() => t(y(v.events[v.events.length - 1]))))
                    },
                    initialize() {
                        v.enabled && typeof(null == crypto ? void 0 : crypto.randomUUID) < "u" && (v.userSessionId = crypto.randomUUID())
                    },
                    setConnectedWalletId(t) {
                        v.connectedWalletId = t
                    },
                    click(t) {
                        if (v.enabled) {
                            const e = {
                                type: "CLICK",
                                name: t.name,
                                userSessionId: v.userSessionId,
                                timestamp: Date.now(),
                                data: t
                            };
                            v.events.push(e)
                        }
                    },
                    track(t) {
                        if (v.enabled) {
                            const e = {
                                type: "TRACK",
                                name: t.name,
                                userSessionId: v.userSessionId,
                                timestamp: Date.now(),
                                data: t
                            };
                            v.events.push(e)
                        }
                    },
                    view(t) {
                        if (v.enabled) {
                            const e = {
                                type: "VIEW",
                                name: t.name,
                                userSessionId: v.userSessionId,
                                timestamp: Date.now(),
                                data: t
                            };
                            v.events.push(e)
                        }
                    }
                },
                A = g({
                    chains: void 0,
                    walletConnectUri: void 0,
                    isAuth: !1,
                    isCustomDesktop: !1,
                    isCustomMobile: !1,
                    isDataLoaded: !1,
                    isUiLoaded: !1
                }),
                U = {
                    state: A,
                    subscribe(t) {
                        return d(A, (() => t(A)))
                    },
                    setChains(t) {
                        A.chains = t
                    },
                    setWalletConnectUri(t) {
                        A.walletConnectUri = t
                    },
                    setIsCustomDesktop(t) {
                        A.isCustomDesktop = t
                    },
                    setIsCustomMobile(t) {
                        A.isCustomMobile = t
                    },
                    setIsDataLoaded(t) {
                        A.isDataLoaded = t
                    },
                    setIsUiLoaded(t) {
                        A.isUiLoaded = t
                    },
                    setIsAuth(t) {
                        A.isAuth = t
                    }
                },
                O = g({
                    projectId: "",
                    mobileWallets: void 0,
                    desktopWallets: void 0,
                    walletImages: void 0,
                    chains: void 0,
                    enableAuthMode: !1,
                    enableExplorer: !0,
                    explorerExcludedWalletIds: void 0,
                    explorerRecommendedWalletIds: void 0,
                    termsOfServiceUrl: void 0,
                    privacyPolicyUrl: void 0
                }),
                L = {
                    state: O,
                    subscribe(t) {
                        return d(O, (() => t(O)))
                    },
                    setConfig(t) {
                        var e, r;
                        B.initialize(), U.setChains(t.chains), U.setIsAuth(Boolean(t.enableAuthMode)), U.setIsCustomMobile(Boolean(null == (e = t.mobileWallets) ? void 0 : e.length)), U.setIsCustomDesktop(Boolean(null == (r = t.desktopWallets) ? void 0 : r.length)), E.setModalVersionInStorage(), Object.assign(O, t)
                    }
                },
                C = "https://explorer-api.walletconnect.com";
            async function R(t, e) {
                const r = new URL(t, C);
                return r.searchParams.append("projectId", L.state.projectId), Object.entries(e).forEach((([t, e]) => {
                    e && r.searchParams.append(t, String(e))
                })), (await fetch(r)).json()
            }
            const T = {
                async getDesktopListings(t) {
                    return R("/w3m/v1/getDesktopListings", t)
                },
                async getMobileListings(t) {
                    return R("/w3m/v1/getMobileListings", t)
                },
                async getInjectedListings(t) {
                    return R("/w3m/v1/getInjectedListings", t)
                },
                async getAllListings(t) {
                    return R("/w3m/v1/getAllListings", t)
                },
                getWalletImageUrl(t) {
                    return `${C}/w3m/v1/getWalletImage/${t}?projectId=${L.state.projectId}`
                },
                getAssetImageUrl(t) {
                    return `${C}/w3m/v1/getAssetImage/${t}?projectId=${L.state.projectId}`
                }
            };
            var W = Object.defineProperty,
                S = Object.getOwnPropertySymbols,
                j = Object.prototype.hasOwnProperty,
                k = Object.prototype.propertyIsEnumerable,
                M = (t, e, r) => e in t ? W(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[e] = r,
                P = (t, e) => {
                    for (var r in e || (e = {})) j.call(e, r) && M(t, r, e[r]);
                    if (S)
                        for (var r of S(e)) k.call(e, r) && M(t, r, e[r]);
                    return t
                };
            const _ = E.isMobile(),
                x = g({
                    wallets: {
                        listings: [],
                        total: 0,
                        page: 1
                    },
                    search: {
                        listings: [],
                        total: 0,
                        page: 1
                    },
                    recomendedWallets: []
                }),
                D = {
                    state: x,
                    async getRecomendedWallets() {
                        const {
                            explorerRecommendedWalletIds: t,
                            explorerExcludedWalletIds: e
                        } = L.state;
                        if ("NONE" === t || "ALL" === e && !t) return x.recomendedWallets;
                        if (E.isArray(t)) {
                            const e = {
                                    recommendedIds: t.join(",")
                                },
                                {
                                    listings: r
                                } = await T.getAllListings(e),
                                n = Object.values(r);
                            n.sort(((e, r) => {
                                const n = t.indexOf(e.id),
                                    o = t.indexOf(r.id);
                                return n - o
                            })), x.recomendedWallets = n
                        } else {
                            const {
                                chains: t,
                                isAuth: r
                            } = U.state, n = t ? .join(","), o = E.isArray(e), i = {
                                page: 1,
                                sdks: r ? "auth_v1" : void 0,
                                entries: E.RECOMMENDED_WALLET_AMOUNT,
                                chains: n,
                                version: 2,
                                excludedIds: o ? e.join(",") : void 0
                            }, {
                                listings: s
                            } = _ ? await T.getMobileListings(i) : await T.getDesktopListings(i);
                            x.recomendedWallets = Object.values(s)
                        }
                        return x.recomendedWallets
                    },
                    async getWallets(t) {
                        const e = P({}, t),
                            {
                                explorerRecommendedWalletIds: r,
                                explorerExcludedWalletIds: n
                            } = L.state,
                            {
                                recomendedWallets: o
                            } = x;
                        if ("ALL" === n) return x.wallets;
                        o.length ? e.excludedIds = o.map((t => t.id)).join(",") : E.isArray(r) && (e.excludedIds = r.join(",")), E.isArray(n) && (e.excludedIds = [e.excludedIds, n].filter(Boolean).join(",")), U.state.isAuth && (e.sdks = "auth_v1");
                        const {
                            page: i,
                            search: s
                        } = t, {
                            listings: a,
                            total: f
                        } = _ ? await T.getMobileListings(e) : await T.getDesktopListings(e), u = Object.values(a), l = s ? "search" : "wallets";
                        return x[l] = {
                            listings: [...x[l].listings, ...u],
                            total: f,
                            page: i ? ? 1
                        }, {
                            listings: u,
                            total: f
                        }
                    },
                    getWalletImageUrl(t) {
                        return T.getWalletImageUrl(t)
                    },
                    getAssetImageUrl(t) {
                        return T.getAssetImageUrl(t)
                    },
                    resetSearch() {
                        x.search = {
                            listings: [],
                            total: 0,
                            page: 1
                        }
                    }
                },
                N = g({
                    open: !1
                }),
                $ = {
                    state: N,
                    subscribe(t) {
                        return d(N, (() => t(N)))
                    },
                    async open(t) {
                        return new Promise((e => {
                            const {
                                isUiLoaded: r,
                                isDataLoaded: n
                            } = U.state;
                            if (U.setWalletConnectUri(t ? .uri), U.setChains(t ? .chains), m.reset("ConnectWallet"), r && n) N.open = !0, e();
                            else {
                                const t = setInterval((() => {
                                    const r = U.state;
                                    r.isUiLoaded && r.isDataLoaded && (clearInterval(t), N.open = !0, e())
                                }), 200)
                            }
                        }))
                    },
                    close() {
                        N.open = !1
                    }
                };
            var z = Object.defineProperty,
                F = Object.getOwnPropertySymbols,
                V = Object.prototype.hasOwnProperty,
                H = Object.prototype.propertyIsEnumerable,
                K = (t, e, r) => e in t ? z(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : t[e] = r,
                G = (t, e) => {
                    for (var r in e || (e = {})) V.call(e, r) && K(t, r, e[r]);
                    if (F)
                        for (var r of F(e)) H.call(e, r) && K(t, r, e[r]);
                    return t
                };

            function Y() {
                return typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: dark)").matches
            }
            const q = g({
                    themeMode: Y() ? "dark" : "light"
                }),
                J = {
                    state: q,
                    subscribe(t) {
                        return d(q, (() => t(q)))
                    },
                    setThemeConfig(t) {
                        const {
                            themeMode: e,
                            themeVariables: r
                        } = t;
                        e && (q.themeMode = e), r && (q.themeVariables = G({}, r))
                    }
                },
                Z = g({
                    open: !1,
                    message: "",
                    variant: "success"
                }),
                Q = {
                    state: Z,
                    subscribe(t) {
                        return d(Z, (() => t(Z)))
                    },
                    openToast(t, e) {
                        Z.open = !0, Z.message = t, Z.variant = e
                    },
                    closeToast() {
                        Z.open = !1
                    }
                };
            typeof window < "u" && (window.Buffer || (window.Buffer = w.lW), window.global || (window.global = window), window.process || (window.process = {
                env: {}
            }), window.global || (window.global = window))
        },
        59343: (t, e, r) => {
            r.d(e, {
                WalletConnectModal: () => o
            });
            var n = r(75740);
            class o {
                constructor(t) {
                    this.openModal = n.jb.open, this.closeModal = n.jb.close, this.subscribeModal = n.jb.subscribe, this.setTheme = n.ThemeCtrl.setThemeConfig, n.ThemeCtrl.setThemeConfig(t), n.ConfigCtrl.setConfig(t), this.initUi()
                }
                async initUi() {
                    if (typeof window < "u") {
                        await r.e(391).then(r.bind(r, 41391));
                        const t = document.createElement("wcm-modal");
                        document.body.insertAdjacentElement("beforeend", t), n.OptionsCtrl.setIsUiLoaded(!0)
                    }
                }
            }
        }
    }
]);