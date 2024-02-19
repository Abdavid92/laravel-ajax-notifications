function me(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: He } = Object.prototype, { getPrototypeOf: Z } = Object, H = /* @__PURE__ */ ((e) => (t) => {
  const n = He.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), A = (e) => (e = e.toLowerCase(), (t) => H(t) === e), I = (e) => (t) => typeof t === e, { isArray: C } = Array, _ = I("undefined");
function Ie(e) {
  return e !== null && !_(e) && e.constructor !== null && !_(e.constructor) && R(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const ye = A("ArrayBuffer");
function qe(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && ye(e.buffer), t;
}
const Me = I("string"), R = I("function"), Ee = I("number"), q = (e) => e !== null && typeof e == "object", ze = (e) => e === !0 || e === !1, D = (e) => {
  if (H(e) !== "object")
    return !1;
  const t = Z(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Je = A("Date"), $e = A("File"), Ve = A("Blob"), We = A("FileList"), Ke = (e) => q(e) && R(e.pipe), Ge = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || R(e.append) && ((t = H(e)) === "formdata" || // detect form-data instance
  t === "object" && R(e.toString) && e.toString() === "[object FormData]"));
}, Xe = A("URLSearchParams"), ve = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function B(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, s;
  if (typeof e != "object" && (e = [e]), C(e))
    for (r = 0, s = e.length; r < s; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let c;
    for (r = 0; r < i; r++)
      c = o[r], t.call(null, e[c], c, e);
  }
}
function we(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, s;
  for (; r-- > 0; )
    if (s = n[r], t === s.toLowerCase())
      return s;
  return null;
}
const be = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Se = (e) => !_(e) && e !== be;
function K() {
  const { caseless: e } = Se(this) && this || {}, t = {}, n = (r, s) => {
    const o = e && we(t, s) || s;
    D(t[o]) && D(r) ? t[o] = K(t[o], r) : D(r) ? t[o] = K({}, r) : C(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && B(arguments[r], n);
  return t;
}
const Qe = (e, t, n, { allOwnKeys: r } = {}) => (B(t, (s, o) => {
  n && R(s) ? e[o] = me(s, n) : e[o] = s;
}, { allOwnKeys: r }), e), Ze = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Ye = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, et = (e, t, n, r) => {
  let s, o, i;
  const c = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      i = s[o], (!r || r(i, e, t)) && !c[i] && (t[i] = e[i], c[i] = !0);
    e = n !== !1 && Z(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, tt = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, nt = (e) => {
  if (!e)
    return null;
  if (C(e))
    return e;
  let t = e.length;
  if (!Ee(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, rt = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Z(Uint8Array)), st = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = r.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, ot = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, it = A("HTMLFormElement"), at = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, s) {
    return r.toUpperCase() + s;
  }
), se = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), ct = A("RegExp"), Re = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  B(n, (s, o) => {
    let i;
    (i = t(s, o, e)) !== !1 && (r[o] = i || s);
  }), Object.defineProperties(e, r);
}, ut = (e) => {
  Re(e, (t, n) => {
    if (R(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (R(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, lt = (e, t) => {
  const n = {}, r = (s) => {
    s.forEach((o) => {
      n[o] = !0;
    });
  };
  return C(e) ? r(e) : r(String(e).split(t)), n;
}, ft = () => {
}, dt = (e, t) => (e = +e, Number.isFinite(e) ? e : t), J = "abcdefghijklmnopqrstuvwxyz", oe = "0123456789", Oe = {
  DIGIT: oe,
  ALPHA: J,
  ALPHA_DIGIT: J + J.toUpperCase() + oe
}, pt = (e = 16, t = Oe.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function ht(e) {
  return !!(e && R(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const mt = (e) => {
  const t = new Array(10), n = (r, s) => {
    if (q(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[s] = r;
        const o = C(r) ? [] : {};
        return B(r, (i, c) => {
          const p = n(i, s + 1);
          !_(p) && (o[c] = p);
        }), t[s] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, yt = A("AsyncFunction"), Et = (e) => e && (q(e) || R(e)) && R(e.then) && R(e.catch), a = {
  isArray: C,
  isArrayBuffer: ye,
  isBuffer: Ie,
  isFormData: Ge,
  isArrayBufferView: qe,
  isString: Me,
  isNumber: Ee,
  isBoolean: ze,
  isObject: q,
  isPlainObject: D,
  isUndefined: _,
  isDate: Je,
  isFile: $e,
  isBlob: Ve,
  isRegExp: ct,
  isFunction: R,
  isStream: Ke,
  isURLSearchParams: Xe,
  isTypedArray: rt,
  isFileList: We,
  forEach: B,
  merge: K,
  extend: Qe,
  trim: ve,
  stripBOM: Ze,
  inherits: Ye,
  toFlatObject: et,
  kindOf: H,
  kindOfTest: A,
  endsWith: tt,
  toArray: nt,
  forEachEntry: st,
  matchAll: ot,
  isHTMLForm: it,
  hasOwnProperty: se,
  hasOwnProp: se,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Re,
  freezeMethods: ut,
  toObjectSet: lt,
  toCamelCase: at,
  noop: ft,
  toFiniteNumber: dt,
  findKey: we,
  global: be,
  isContextDefined: Se,
  ALPHABET: Oe,
  generateString: pt,
  isSpecCompliantForm: ht,
  toJSONObject: mt,
  isAsyncFn: yt,
  isThenable: Et
};
function m(e, t, n, r, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), s && (this.response = s);
}
a.inherits(m, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: a.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Ae = m.prototype, Te = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Te[e] = { value: e };
});
Object.defineProperties(m, Te);
Object.defineProperty(Ae, "isAxiosError", { value: !0 });
m.from = (e, t, n, r, s, o) => {
  const i = Object.create(Ae);
  return a.toFlatObject(e, i, function(p) {
    return p !== Error.prototype;
  }, (c) => c !== "isAxiosError"), m.call(i, e.message, t, n, r, s), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const wt = null;
function G(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function ge(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ie(e, t, n) {
  return e ? e.concat(t).map(function(s, o) {
    return s = ge(s), !n && o ? "[" + s + "]" : s;
  }).join(n ? "." : "") : t;
}
function bt(e) {
  return a.isArray(e) && !e.some(G);
}
const St = a.toFlatObject(a, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function M(e, t, n) {
  if (!a.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = a.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(d, w) {
    return !a.isUndefined(w[d]);
  });
  const r = n.metaTokens, s = n.visitor || l, o = n.dots, i = n.indexes, p = (n.Blob || typeof Blob < "u" && Blob) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s))
    throw new TypeError("visitor must be a function");
  function h(f) {
    if (f === null)
      return "";
    if (a.isDate(f))
      return f.toISOString();
    if (!p && a.isBlob(f))
      throw new m("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(f) || a.isTypedArray(f) ? p && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function l(f, d, w) {
    let b = f;
    if (f && !w && typeof f == "object") {
      if (a.endsWith(d, "{}"))
        d = r ? d : d.slice(0, -2), f = JSON.stringify(f);
      else if (a.isArray(f) && bt(f) || (a.isFileList(f) || a.endsWith(d, "[]")) && (b = a.toArray(f)))
        return d = ge(d), b.forEach(function(N, ke) {
          !(a.isUndefined(N) || N === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? ie([d], ke, o) : i === null ? d : d + "[]",
            h(N)
          );
        }), !1;
    }
    return G(f) ? !0 : (t.append(ie(w, d, o), h(f)), !1);
  }
  const u = [], E = Object.assign(St, {
    defaultVisitor: l,
    convertValue: h,
    isVisitable: G
  });
  function S(f, d) {
    if (!a.isUndefined(f)) {
      if (u.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + d.join("."));
      u.push(f), a.forEach(f, function(b, g) {
        (!(a.isUndefined(b) || b === null) && s.call(
          t,
          b,
          a.isString(g) ? g.trim() : g,
          d,
          E
        )) === !0 && S(b, d ? d.concat(g) : [g]);
      }), u.pop();
    }
  }
  if (!a.isObject(e))
    throw new TypeError("data must be an object");
  return S(e), t;
}
function ae(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function Y(e, t) {
  this._pairs = [], e && M(e, this, t);
}
const Ne = Y.prototype;
Ne.append = function(t, n) {
  this._pairs.push([t, n]);
};
Ne.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, ae);
  } : ae;
  return this._pairs.map(function(s) {
    return n(s[0]) + "=" + n(s[1]);
  }, "").join("&");
};
function Rt(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function xe(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Rt, s = n && n.serialize;
  let o;
  if (s ? o = s(t, n) : o = a.isURLSearchParams(t) ? t.toString() : new Y(t, n).toString(r), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class ce {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    a.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const Pe = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ot = typeof URLSearchParams < "u" ? URLSearchParams : Y, At = typeof FormData < "u" ? FormData : null, Tt = typeof Blob < "u" ? Blob : null, gt = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ot,
    FormData: At,
    Blob: Tt
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ce = typeof window < "u" && typeof document < "u", Nt = ((e) => Ce && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), xt = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Pt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ce,
  hasStandardBrowserEnv: Nt,
  hasStandardBrowserWebWorkerEnv: xt
}, Symbol.toStringTag, { value: "Module" })), O = {
  ...Pt,
  ...gt
};
function Ct(e, t) {
  return M(e, new O.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, s, o) {
      return O.isNode && a.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Ft(e) {
  return a.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function _t(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function Fe(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__")
      return !0;
    const c = Number.isFinite(+i), p = o >= n.length;
    return i = !i && a.isArray(s) ? s.length : i, p ? (a.hasOwnProp(s, i) ? s[i] = [s[i], r] : s[i] = r, !c) : ((!s[i] || !a.isObject(s[i])) && (s[i] = []), t(n, r, s[i], o) && a.isArray(s[i]) && (s[i] = _t(s[i])), !c);
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return a.forEachEntry(e, (r, s) => {
      t(Ft(r), s, n, 0);
    }), n;
  }
  return null;
}
function Bt(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const ee = {
  transitional: Pe,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", s = r.indexOf("application/json") > -1, o = a.isObject(t);
    if (o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t))
      return s ? JSON.stringify(Fe(t)) : t;
    if (a.isArrayBuffer(t) || a.isBuffer(t) || a.isStream(t) || a.isFile(t) || a.isBlob(t))
      return t;
    if (a.isArrayBufferView(t))
      return t.buffer;
    if (a.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let c;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Ct(t, this.formSerializer).toString();
      if ((c = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const p = this.env && this.env.FormData;
        return M(
          c ? { "files[]": t } : t,
          p && new p(),
          this.formSerializer
        );
      }
    }
    return o || s ? (n.setContentType("application/json", !1), Bt(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || ee.transitional, r = n && n.forcedJSONParsing, s = this.responseType === "json";
    if (t && a.isString(t) && (r && !this.responseType || s)) {
      const i = !(n && n.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (c) {
        if (i)
          throw c.name === "SyntaxError" ? m.from(c, m.ERR_BAD_RESPONSE, this, null, this.response) : c;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: O.classes.FormData,
    Blob: O.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
a.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  ee.headers[e] = {};
});
const te = ee, Lt = a.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), Dt = (e) => {
  const t = {};
  let n, r, s;
  return e && e.split(`
`).forEach(function(i) {
    s = i.indexOf(":"), n = i.substring(0, s).trim().toLowerCase(), r = i.substring(s + 1).trim(), !(!n || t[n] && Lt[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, ue = Symbol("internals");
function F(e) {
  return e && String(e).trim().toLowerCase();
}
function U(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(U) : String(e);
}
function Ut(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const jt = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function $(e, t, n, r, s) {
  if (a.isFunction(r))
    return r.call(this, t, n);
  if (s && (t = n), !!a.isString(t)) {
    if (a.isString(r))
      return t.indexOf(r) !== -1;
    if (a.isRegExp(r))
      return r.test(t);
  }
}
function kt(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Ht(e, t) {
  const n = a.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0
    });
  });
}
class z {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(c, p, h) {
      const l = F(p);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const u = a.findKey(s, l);
      (!u || s[u] === void 0 || h === !0 || h === void 0 && s[u] !== !1) && (s[u || p] = U(c));
    }
    const i = (c, p) => a.forEach(c, (h, l) => o(h, l, p));
    return a.isPlainObject(t) || t instanceof this.constructor ? i(t, n) : a.isString(t) && (t = t.trim()) && !jt(t) ? i(Dt(t), n) : t != null && o(n, t, r), this;
  }
  get(t, n) {
    if (t = F(t), t) {
      const r = a.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n)
          return s;
        if (n === !0)
          return Ut(s);
        if (a.isFunction(n))
          return n.call(this, s, r);
        if (a.isRegExp(n))
          return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = F(t), t) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || $(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (i = F(i), i) {
        const c = a.findKey(r, i);
        c && (!n || $(r, r[c], c, n)) && (delete r[c], s = !0);
      }
    }
    return a.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || $(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const n = this, r = {};
    return a.forEach(this, (s, o) => {
      const i = a.findKey(r, o);
      if (i) {
        n[i] = U(s), delete n[o];
        return;
      }
      const c = t ? kt(o) : String(o).trim();
      c !== o && delete n[o], n[c] = U(s), r[c] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return a.forEach(this, (r, s) => {
      r != null && r !== !1 && (n[s] = t && a.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[ue] = this[ue] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(i) {
      const c = F(i);
      r[c] || (Ht(s, i), r[c] = !0);
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
z.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
a.reduceDescriptors(z.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
a.freezeMethods(z);
const T = z;
function V(e, t) {
  const n = this || te, r = t || n, s = T.from(r.headers);
  let o = r.data;
  return a.forEach(e, function(c) {
    o = c.call(n, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function _e(e) {
  return !!(e && e.__CANCEL__);
}
function L(e, t, n) {
  m.call(this, e ?? "canceled", m.ERR_CANCELED, t, n), this.name = "CanceledError";
}
a.inherits(L, m, {
  __CANCEL__: !0
});
function It(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new m(
    "Request failed with status code " + n.status,
    [m.ERR_BAD_REQUEST, m.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const qt = O.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, s, o) {
      const i = [e + "=" + encodeURIComponent(t)];
      a.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), a.isString(r) && i.push("path=" + r), a.isString(s) && i.push("domain=" + s), o === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Mt(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function zt(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Be(e, t) {
  return e && !Mt(t) ? zt(e, t) : t;
}
const Jt = O.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function s(o) {
      let i = o;
      return t && (n.setAttribute("href", i), i = n.href), n.setAttribute("href", i), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return r = s(window.location.href), function(i) {
      const c = a.isString(i) ? s(i) : i;
      return c.protocol === r.protocol && c.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
);
function $t(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Vt(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let s = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(p) {
    const h = Date.now(), l = r[o];
    i || (i = h), n[s] = p, r[s] = h;
    let u = o, E = 0;
    for (; u !== s; )
      E += n[u++], u = u % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), h - i < t)
      return;
    const S = l && h - l;
    return S ? Math.round(E * 1e3 / S) : void 0;
  };
}
function le(e, t) {
  let n = 0;
  const r = Vt(50, 250);
  return (s) => {
    const o = s.loaded, i = s.lengthComputable ? s.total : void 0, c = o - n, p = r(c), h = o <= i;
    n = o;
    const l = {
      loaded: o,
      total: i,
      progress: i ? o / i : void 0,
      bytes: c,
      rate: p || void 0,
      estimated: p && i && h ? (i - o) / p : void 0,
      event: s
    };
    l[t ? "download" : "upload"] = !0, e(l);
  };
}
const Wt = typeof XMLHttpRequest < "u", Kt = Wt && function(e) {
  return new Promise(function(n, r) {
    let s = e.data;
    const o = T.from(e.headers).normalize();
    let { responseType: i, withXSRFToken: c } = e, p;
    function h() {
      e.cancelToken && e.cancelToken.unsubscribe(p), e.signal && e.signal.removeEventListener("abort", p);
    }
    let l;
    if (a.isFormData(s)) {
      if (O.hasStandardBrowserEnv || O.hasStandardBrowserWebWorkerEnv)
        o.setContentType(!1);
      else if ((l = o.getContentType()) !== !1) {
        const [d, ...w] = l ? l.split(";").map((b) => b.trim()).filter(Boolean) : [];
        o.setContentType([d || "multipart/form-data", ...w].join("; "));
      }
    }
    let u = new XMLHttpRequest();
    if (e.auth) {
      const d = e.auth.username || "", w = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(d + ":" + w));
    }
    const E = Be(e.baseURL, e.url);
    u.open(e.method.toUpperCase(), xe(E, e.params, e.paramsSerializer), !0), u.timeout = e.timeout;
    function S() {
      if (!u)
        return;
      const d = T.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), b = {
        data: !i || i === "text" || i === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: d,
        config: e,
        request: u
      };
      It(function(N) {
        n(N), h();
      }, function(N) {
        r(N), h();
      }, b), u = null;
    }
    if ("onloadend" in u ? u.onloadend = S : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(S);
    }, u.onabort = function() {
      u && (r(new m("Request aborted", m.ECONNABORTED, e, u)), u = null);
    }, u.onerror = function() {
      r(new m("Network Error", m.ERR_NETWORK, e, u)), u = null;
    }, u.ontimeout = function() {
      let w = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const b = e.transitional || Pe;
      e.timeoutErrorMessage && (w = e.timeoutErrorMessage), r(new m(
        w,
        b.clarifyTimeoutError ? m.ETIMEDOUT : m.ECONNABORTED,
        e,
        u
      )), u = null;
    }, O.hasStandardBrowserEnv && (c && a.isFunction(c) && (c = c(e)), c || c !== !1 && Jt(E))) {
      const d = e.xsrfHeaderName && e.xsrfCookieName && qt.read(e.xsrfCookieName);
      d && o.set(e.xsrfHeaderName, d);
    }
    s === void 0 && o.setContentType(null), "setRequestHeader" in u && a.forEach(o.toJSON(), function(w, b) {
      u.setRequestHeader(b, w);
    }), a.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials), i && i !== "json" && (u.responseType = e.responseType), typeof e.onDownloadProgress == "function" && u.addEventListener("progress", le(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", le(e.onUploadProgress)), (e.cancelToken || e.signal) && (p = (d) => {
      u && (r(!d || d.type ? new L(null, e, u) : d), u.abort(), u = null);
    }, e.cancelToken && e.cancelToken.subscribe(p), e.signal && (e.signal.aborted ? p() : e.signal.addEventListener("abort", p)));
    const f = $t(E);
    if (f && O.protocols.indexOf(f) === -1) {
      r(new m("Unsupported protocol " + f + ":", m.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(s || null);
  });
}, X = {
  http: wt,
  xhr: Kt
};
a.forEach(X, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const fe = (e) => `- ${e}`, Gt = (e) => a.isFunction(e) || e === null || e === !1, Le = {
  getAdapter: (e) => {
    e = a.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const s = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let i;
      if (r = n, !Gt(n) && (r = X[(i = String(n)).toLowerCase()], r === void 0))
        throw new m(`Unknown adapter '${i}'`);
      if (r)
        break;
      s[i || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(s).map(
        ([c, p]) => `adapter ${c} ` + (p === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? o.length > 1 ? `since :
` + o.map(fe).join(`
`) : " " + fe(o[0]) : "as no adapter specified";
      throw new m(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: X
};
function W(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new L(null, e);
}
function de(e) {
  return W(e), e.headers = T.from(e.headers), e.data = V.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Le.getAdapter(e.adapter || te.adapter)(e).then(function(r) {
    return W(e), r.data = V.call(
      e,
      e.transformResponse,
      r
    ), r.headers = T.from(r.headers), r;
  }, function(r) {
    return _e(r) || (W(e), r && r.response && (r.response.data = V.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = T.from(r.response.headers))), Promise.reject(r);
  });
}
const pe = (e) => e instanceof T ? e.toJSON() : e;
function P(e, t) {
  t = t || {};
  const n = {};
  function r(h, l, u) {
    return a.isPlainObject(h) && a.isPlainObject(l) ? a.merge.call({ caseless: u }, h, l) : a.isPlainObject(l) ? a.merge({}, l) : a.isArray(l) ? l.slice() : l;
  }
  function s(h, l, u) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(h))
        return r(void 0, h, u);
    } else
      return r(h, l, u);
  }
  function o(h, l) {
    if (!a.isUndefined(l))
      return r(void 0, l);
  }
  function i(h, l) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(h))
        return r(void 0, h);
    } else
      return r(void 0, l);
  }
  function c(h, l, u) {
    if (u in t)
      return r(h, l);
    if (u in e)
      return r(void 0, h);
  }
  const p = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: c,
    headers: (h, l) => s(pe(h), pe(l), !0)
  };
  return a.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const u = p[l] || s, E = u(e[l], t[l], l);
    a.isUndefined(E) && u !== c || (n[l] = E);
  }), n;
}
const De = "1.6.7", ne = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ne[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const he = {};
ne.transitional = function(t, n, r) {
  function s(o, i) {
    return "[Axios v" + De + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, c) => {
    if (t === !1)
      throw new m(
        s(i, " has been removed" + (n ? " in " + n : "")),
        m.ERR_DEPRECATED
      );
    return n && !he[i] && (he[i] = !0, console.warn(
      s(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, c) : !0;
  };
};
function Xt(e, t, n) {
  if (typeof e != "object")
    throw new m("options must be an object", m.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s], i = t[o];
    if (i) {
      const c = e[o], p = c === void 0 || i(c, o, e);
      if (p !== !0)
        throw new m("option " + o + " must be " + p, m.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new m("Unknown option " + o, m.ERR_BAD_OPTION);
  }
}
const v = {
  assertOptions: Xt,
  validators: ne
}, x = v.validators;
class k {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new ce(),
      response: new ce()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s;
        Error.captureStackTrace ? Error.captureStackTrace(s = {}) : s = new Error();
        const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o;
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = P(this.defaults, n);
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 && v.assertOptions(r, {
      silentJSONParsing: x.transitional(x.boolean),
      forcedJSONParsing: x.transitional(x.boolean),
      clarifyTimeoutError: x.transitional(x.boolean)
    }, !1), s != null && (a.isFunction(s) ? n.paramsSerializer = {
      serialize: s
    } : v.assertOptions(s, {
      encode: x.function,
      serialize: x.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && a.merge(
      o.common,
      o[n.method]
    );
    o && a.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (f) => {
        delete o[f];
      }
    ), n.headers = T.concat(i, o);
    const c = [];
    let p = !0;
    this.interceptors.request.forEach(function(d) {
      typeof d.runWhen == "function" && d.runWhen(n) === !1 || (p = p && d.synchronous, c.unshift(d.fulfilled, d.rejected));
    });
    const h = [];
    this.interceptors.response.forEach(function(d) {
      h.push(d.fulfilled, d.rejected);
    });
    let l, u = 0, E;
    if (!p) {
      const f = [de.bind(this), void 0];
      for (f.unshift.apply(f, c), f.push.apply(f, h), E = f.length, l = Promise.resolve(n); u < E; )
        l = l.then(f[u++], f[u++]);
      return l;
    }
    E = c.length;
    let S = n;
    for (u = 0; u < E; ) {
      const f = c[u++], d = c[u++];
      try {
        S = f(S);
      } catch (w) {
        d.call(this, w);
        break;
      }
    }
    try {
      l = de.call(this, S);
    } catch (f) {
      return Promise.reject(f);
    }
    for (u = 0, E = h.length; u < E; )
      l = l.then(h[u++], h[u++]);
    return l;
  }
  getUri(t) {
    t = P(this.defaults, t);
    const n = Be(t.baseURL, t.url);
    return xe(n, t.params, t.paramsSerializer);
  }
}
a.forEach(["delete", "get", "head", "options"], function(t) {
  k.prototype[t] = function(n, r) {
    return this.request(P(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
a.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, c) {
      return this.request(P(c || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  k.prototype[t] = n(), k.prototype[t + "Form"] = n(!0);
});
const j = k;
class re {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners)
        return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](s);
      r._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const i = new Promise((c) => {
        r.subscribe(c), o = c;
      }).then(s);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, t(function(o, i, c) {
      r.reason || (r.reason = new L(o, i, c), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new re(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const vt = re;
function Qt(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Zt(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const Q = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Q).forEach(([e, t]) => {
  Q[t] = e;
});
const Yt = Q;
function Ue(e) {
  const t = new j(e), n = me(j.prototype.request, t);
  return a.extend(n, j.prototype, t, { allOwnKeys: !0 }), a.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(s) {
    return Ue(P(e, s));
  }, n;
}
const y = Ue(te);
y.Axios = j;
y.CanceledError = L;
y.CancelToken = vt;
y.isCancel = _e;
y.VERSION = De;
y.toFormData = M;
y.AxiosError = m;
y.Cancel = y.CanceledError;
y.all = function(t) {
  return Promise.all(t);
};
y.spread = Qt;
y.isAxiosError = Zt;
y.mergeConfig = P;
y.AxiosHeaders = T;
y.formToJSON = (e) => Fe(a.isHTMLForm(e) ? new FormData(e) : e);
y.getAdapter = Le.getAdapter;
y.HttpStatusCode = Yt;
y.default = y;
const je = {
  listeners: [],
  addListener: (e) => {
    (void 0).listeners.push(e);
  },
  removeListener: (e) => {
    let t = (void 0).listeners.findIndex((n) => n === e);
    t !== -1 && (void 0).listeners.splice(t, 1);
  },
  launchNotification(e) {
    this.listeners.forEach((t) => {
      t(e);
    });
  }
};
window.AjaxNotifications = je;
async function en() {
  try {
    let e = await y.get("/ajax-notifications");
    e.status === 200 && e.data.forEach((t) => {
      je.launchNotification(t);
    });
  } catch (e) {
    console.log(e.message);
  }
}
setInterval(en, 5e3);
