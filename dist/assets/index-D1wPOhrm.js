function Wg(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i && Object.defineProperty(e, o, i.get ? i : { enumerable: !0, get: () => r[o] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const l of i.addedNodes) l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function pp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var hp = { exports: {} },
  Bl = {},
  mp = { exports: {} },
  re = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ti = Symbol.for("react.element"),
  Hg = Symbol.for("react.portal"),
  Kg = Symbol.for("react.fragment"),
  Gg = Symbol.for("react.strict_mode"),
  Qg = Symbol.for("react.profiler"),
  Yg = Symbol.for("react.provider"),
  Zg = Symbol.for("react.context"),
  Xg = Symbol.for("react.forward_ref"),
  Jg = Symbol.for("react.suspense"),
  qg = Symbol.for("react.memo"),
  ey = Symbol.for("react.lazy"),
  tf = Symbol.iterator;
function ty(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (tf && e[tf]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var vp = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  gp = Object.assign,
  yp = {};
function Wr(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = yp), (this.updater = n || vp);
}
Wr.prototype.isReactComponent = {};
Wr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Wr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Sp() {}
Sp.prototype = Wr.prototype;
function Mu(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = yp), (this.updater = n || vp);
}
var ju = (Mu.prototype = new Sp());
ju.constructor = Mu;
gp(ju, Wr.prototype);
ju.isPureReactComponent = !0;
var nf = Array.isArray,
  _p = Object.prototype.hasOwnProperty,
  Du = { current: null },
  wp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Rp(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref), t.key !== void 0 && (i = "" + t.key), t))
      _p.call(t, r) && !wp.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps) for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return { $$typeof: ti, type: e, key: i, ref: l, props: o, _owner: Du.current };
}
function ny(e, t) {
  return { $$typeof: ti, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Ou(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ti;
}
function ry(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var rf = /\/+/g;
function Os(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? ry("" + e.key) : t.toString(36);
}
function Hi(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (i) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ti:
          case Hg:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === "" ? "." + Os(l, 0) : r),
      nf(o)
        ? ((n = ""),
          e != null && (n = e.replace(rf, "$&/") + "/"),
          Hi(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (Ou(o) &&
            (o = ny(o, n + (!o.key || (l && l.key === o.key) ? "" : ("" + o.key).replace(rf, "$&/") + "/") + e)),
          t.push(o)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), nf(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var a = r + Os(i, s);
      l += Hi(i, t, n, a, o);
    }
  else if (((a = ty(e)), typeof a == "function"))
    for (e = a.call(e), s = 0; !(i = e.next()).done; ) (i = i.value), (a = r + Os(i, s++)), (l += Hi(i, t, n, a, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function vi(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Hi(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function oy(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ye = { current: null },
  Ki = { transition: null },
  iy = { ReactCurrentDispatcher: Ye, ReactCurrentBatchConfig: Ki, ReactCurrentOwner: Du };
function Ep() {
  throw Error("act(...) is not supported in production builds of React.");
}
re.Children = {
  map: vi,
  forEach: function (e, t, n) {
    vi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      vi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      vi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Ou(e)) throw Error("React.Children.only expected to receive a single React element child.");
    return e;
  },
};
re.Component = Wr;
re.Fragment = Kg;
re.Profiler = Qg;
re.PureComponent = Mu;
re.StrictMode = Gg;
re.Suspense = Jg;
re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = iy;
re.act = Ep;
re.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = gp({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = Du.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (a in t) _p.call(t, a) && !wp.hasOwnProperty(a) && (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    s = Array(a);
    for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
    r.children = s;
  }
  return { $$typeof: ti, type: e.type, key: o, ref: i, props: r, _owner: l };
};
re.createContext = function (e) {
  return (
    (e = {
      $$typeof: Zg,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Yg, _context: e }),
    (e.Consumer = e)
  );
};
re.createElement = Rp;
re.createFactory = function (e) {
  var t = Rp.bind(null, e);
  return (t.type = e), t;
};
re.createRef = function () {
  return { current: null };
};
re.forwardRef = function (e) {
  return { $$typeof: Xg, render: e };
};
re.isValidElement = Ou;
re.lazy = function (e) {
  return { $$typeof: ey, _payload: { _status: -1, _result: e }, _init: oy };
};
re.memo = function (e, t) {
  return { $$typeof: qg, type: e, compare: t === void 0 ? null : t };
};
re.startTransition = function (e) {
  var t = Ki.transition;
  Ki.transition = {};
  try {
    e();
  } finally {
    Ki.transition = t;
  }
};
re.unstable_act = Ep;
re.useCallback = function (e, t) {
  return Ye.current.useCallback(e, t);
};
re.useContext = function (e) {
  return Ye.current.useContext(e);
};
re.useDebugValue = function () {};
re.useDeferredValue = function (e) {
  return Ye.current.useDeferredValue(e);
};
re.useEffect = function (e, t) {
  return Ye.current.useEffect(e, t);
};
re.useId = function () {
  return Ye.current.useId();
};
re.useImperativeHandle = function (e, t, n) {
  return Ye.current.useImperativeHandle(e, t, n);
};
re.useInsertionEffect = function (e, t) {
  return Ye.current.useInsertionEffect(e, t);
};
re.useLayoutEffect = function (e, t) {
  return Ye.current.useLayoutEffect(e, t);
};
re.useMemo = function (e, t) {
  return Ye.current.useMemo(e, t);
};
re.useReducer = function (e, t, n) {
  return Ye.current.useReducer(e, t, n);
};
re.useRef = function (e) {
  return Ye.current.useRef(e);
};
re.useState = function (e) {
  return Ye.current.useState(e);
};
re.useSyncExternalStore = function (e, t, n) {
  return Ye.current.useSyncExternalStore(e, t, n);
};
re.useTransition = function () {
  return Ye.current.useTransition();
};
re.version = "18.3.1";
mp.exports = re;
var j = mp.exports;
const le = pp(j),
  ly = Wg({ __proto__: null, default: le }, [j]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sy = j,
  ay = Symbol.for("react.element"),
  uy = Symbol.for("react.fragment"),
  cy = Object.prototype.hasOwnProperty,
  fy = sy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  dy = { key: !0, ref: !0, __self: !0, __source: !0 };
function xp(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (l = t.ref);
  for (r in t) cy.call(t, r) && !dy.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return { $$typeof: ay, type: e, key: i, ref: l, props: o, _owner: fy.current };
}
Bl.Fragment = uy;
Bl.jsx = xp;
Bl.jsxs = xp;
hp.exports = Bl;
var g = hp.exports,
  Ea = {},
  kp = { exports: {} },
  pt = {},
  Cp = { exports: {} },
  Tp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, b) {
    var $ = M.length;
    M.push(b);
    e: for (; 0 < $; ) {
      var W = ($ - 1) >>> 1,
        _ = M[W];
      if (0 < o(_, b)) (M[W] = b), (M[$] = _), ($ = W);
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var b = M[0],
      $ = M.pop();
    if ($ !== b) {
      M[0] = $;
      e: for (var W = 0, _ = M.length, A = _ >>> 1; W < A; ) {
        var P = 2 * (W + 1) - 1,
          K = M[P],
          D = P + 1,
          Z = M[D];
        if (0 > o(K, $)) D < _ && 0 > o(Z, K) ? ((M[W] = Z), (M[D] = $), (W = D)) : ((M[W] = K), (M[P] = $), (W = P));
        else if (D < _ && 0 > o(Z, $)) (M[W] = Z), (M[D] = $), (W = D);
        else break e;
      }
    }
    return b;
  }
  function o(M, b) {
    var $ = M.sortIndex - b.sortIndex;
    return $ !== 0 ? $ : M.id - b.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      s = l.now();
    e.unstable_now = function () {
      return l.now() - s;
    };
  }
  var a = [],
    u = [],
    f = 1,
    d = null,
    m = 3,
    S = !1,
    v = !1,
    w = !1,
    T = typeof setTimeout == "function" ? setTimeout : null,
    h = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(M) {
    for (var b = n(u); b !== null; ) {
      if (b.callback === null) r(u);
      else if (b.startTime <= M) r(u), (b.sortIndex = b.expirationTime), t(a, b);
      else break;
      b = n(u);
    }
  }
  function E(M) {
    if (((w = !1), p(M), !v))
      if (n(a) !== null) (v = !0), Me(k);
      else {
        var b = n(u);
        b !== null && Ve(E, b.startTime - M);
      }
  }
  function k(M, b) {
    (v = !1), w && ((w = !1), h(I), (I = -1)), (S = !0);
    var $ = m;
    try {
      for (p(b), d = n(a); d !== null && (!(d.expirationTime > b) || (M && !de())); ) {
        var W = d.callback;
        if (typeof W == "function") {
          (d.callback = null), (m = d.priorityLevel);
          var _ = W(d.expirationTime <= b);
          (b = e.unstable_now()), typeof _ == "function" ? (d.callback = _) : d === n(a) && r(a), p(b);
        } else r(a);
        d = n(a);
      }
      if (d !== null) var A = !0;
      else {
        var P = n(u);
        P !== null && Ve(E, P.startTime - b), (A = !1);
      }
      return A;
    } finally {
      (d = null), (m = $), (S = !1);
    }
  }
  var C = !1,
    x = null,
    I = -1,
    oe = 5,
    B = -1;
  function de() {
    return !(e.unstable_now() - B < oe);
  }
  function Xe() {
    if (x !== null) {
      var M = e.unstable_now();
      B = M;
      var b = !0;
      try {
        b = x(!0, M);
      } finally {
        b ? se() : ((C = !1), (x = null));
      }
    } else C = !1;
  }
  var se;
  if (typeof c == "function")
    se = function () {
      c(Xe);
    };
  else if (typeof MessageChannel < "u") {
    var $e = new MessageChannel(),
      kt = $e.port2;
    ($e.port1.onmessage = Xe),
      (se = function () {
        kt.postMessage(null);
      });
  } else
    se = function () {
      T(Xe, 0);
    };
  function Me(M) {
    (x = M), C || ((C = !0), se());
  }
  function Ve(M, b) {
    I = T(function () {
      M(e.unstable_now());
    }, b);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || S || ((v = !0), Me(k));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (oe = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (M) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var b = 3;
          break;
        default:
          b = m;
      }
      var $ = m;
      m = b;
      try {
        return M();
      } finally {
        m = $;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, b) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var $ = m;
      m = M;
      try {
        return b();
      } finally {
        m = $;
      }
    }),
    (e.unstable_scheduleCallback = function (M, b, $) {
      var W = e.unstable_now();
      switch (
        (typeof $ == "object" && $ !== null
          ? (($ = $.delay), ($ = typeof $ == "number" && 0 < $ ? W + $ : W))
          : ($ = W),
        M)
      ) {
        case 1:
          var _ = -1;
          break;
        case 2:
          _ = 250;
          break;
        case 5:
          _ = 1073741823;
          break;
        case 4:
          _ = 1e4;
          break;
        default:
          _ = 5e3;
      }
      return (
        (_ = $ + _),
        (M = { id: f++, callback: b, priorityLevel: M, startTime: $, expirationTime: _, sortIndex: -1 }),
        $ > W
          ? ((M.sortIndex = $), t(u, M), n(a) === null && M === n(u) && (w ? (h(I), (I = -1)) : (w = !0), Ve(E, $ - W)))
          : ((M.sortIndex = _), t(a, M), v || S || ((v = !0), Me(k))),
        M
      );
    }),
    (e.unstable_shouldYield = de),
    (e.unstable_wrapCallback = function (M) {
      var b = m;
      return function () {
        var $ = m;
        m = b;
        try {
          return M.apply(this, arguments);
        } finally {
          m = $;
        }
      };
    });
})(Tp);
Cp.exports = Tp;
var py = Cp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hy = j,
  dt = py;
function L(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Np = new Set(),
  jo = {};
function Zn(e, t) {
  Tr(e, t), Tr(e + "Capture", t);
}
function Tr(e, t) {
  for (jo[e] = t, e = 0; e < t.length; e++) Np.add(t[e]);
}
var Xt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
  xa = Object.prototype.hasOwnProperty,
  my =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  of = {},
  lf = {};
function vy(e) {
  return xa.call(lf, e) ? !0 : xa.call(of, e) ? !1 : my.test(e) ? (lf[e] = !0) : ((of[e] = !0), !1);
}
function gy(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function yy(e, t, n, r) {
  if (t === null || typeof t > "u" || gy(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ze(e, t, n, r, o, i, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l);
}
var Be = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Be[e] = new Ze(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Be[t] = new Ze(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Be[e] = new Ze(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
  Be[e] = new Ze(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Be[e] = new Ze(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Be[e] = new Ze(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Be[e] = new Ze(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Be[e] = new Ze(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Be[e] = new Ze(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var zu = /[\-:]([a-z])/g;
function Vu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(zu, Vu);
    Be[t] = new Ze(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
  var t = e.replace(zu, Vu);
  Be[t] = new Ze(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(zu, Vu);
  Be[t] = new Ze(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Be[e] = new Ze(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Be.xlinkHref = new Ze("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
  Be[e] = new Ze(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Uu(e, t, n, r) {
  var o = Be.hasOwnProperty(t) ? Be[t] : null;
  (o !== null
    ? o.type !== 0
    : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
    (yy(t, n, o, r) && (n = null),
    r || o === null
      ? vy(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var tn = hy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  gi = Symbol.for("react.element"),
  sr = Symbol.for("react.portal"),
  ar = Symbol.for("react.fragment"),
  Fu = Symbol.for("react.strict_mode"),
  ka = Symbol.for("react.profiler"),
  Lp = Symbol.for("react.provider"),
  Ap = Symbol.for("react.context"),
  Bu = Symbol.for("react.forward_ref"),
  Ca = Symbol.for("react.suspense"),
  Ta = Symbol.for("react.suspense_list"),
  bu = Symbol.for("react.memo"),
  ln = Symbol.for("react.lazy"),
  Pp = Symbol.for("react.offscreen"),
  sf = Symbol.iterator;
function eo(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (sf && e[sf]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var ke = Object.assign,
  zs;
function mo(e) {
  if (zs === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      zs = (t && t[1]) || "";
    }
  return (
    `
` +
    zs +
    e
  );
}
var Vs = !1;
function Us(e, t) {
  if (!e || Vs) return "";
  Vs = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          l = o.length - 1,
          s = i.length - 1;
        1 <= l && 0 <= s && o[l] !== i[s];

      )
        s--;
      for (; 1 <= l && 0 <= s; l--, s--)
        if (o[l] !== i[s]) {
          if (l !== 1 || s !== 1)
            do
              if ((l--, s--, 0 > s || o[l] !== i[s])) {
                var a =
                  `
` + o[l].replace(" at new ", " at ");
                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
              }
            while (1 <= l && 0 <= s);
          break;
        }
    }
  } finally {
    (Vs = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? mo(e) : "";
}
function Sy(e) {
  switch (e.tag) {
    case 5:
      return mo(e.type);
    case 16:
      return mo("Lazy");
    case 13:
      return mo("Suspense");
    case 19:
      return mo("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Us(e.type, !1)), e;
    case 11:
      return (e = Us(e.type.render, !1)), e;
    case 1:
      return (e = Us(e.type, !0)), e;
    default:
      return "";
  }
}
function Na(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case ar:
      return "Fragment";
    case sr:
      return "Portal";
    case ka:
      return "Profiler";
    case Fu:
      return "StrictMode";
    case Ca:
      return "Suspense";
    case Ta:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ap:
        return (e.displayName || "Context") + ".Consumer";
      case Lp:
        return (e._context.displayName || "Context") + ".Provider";
      case Bu:
        var t = e.render;
        return (
          (e = e.displayName),
          e || ((e = t.displayName || t.name || ""), (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case bu:
        return (t = e.displayName || null), t !== null ? t : Na(e.type) || "Memo";
      case ln:
        (t = e._payload), (e = e._init);
        try {
          return Na(e(t));
        } catch {}
    }
  return null;
}
function _y(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Na(t);
    case 8:
      return t === Fu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Rn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Ip(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function wy(e) {
  var t = Ip(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (l) {
          (r = "" + l), i.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function yi(e) {
  e._valueTracker || (e._valueTracker = wy(e));
}
function $p(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return e && (r = Ip(e) ? (e.checked ? "true" : "false") : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function cl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function La(e, t) {
  var n = t.checked;
  return ke({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function af(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Rn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
    });
}
function Mp(e, t) {
  (t = t.checked), t != null && Uu(e, "checked", t, !1);
}
function Aa(e, t) {
  Mp(e, t);
  var n = Rn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Pa(e, t.type, n) : t.hasOwnProperty("defaultValue") && Pa(e, t.type, Rn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function uf(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!((r !== "submit" && r !== "reset") || (t.value !== void 0 && t.value !== null))) return;
    (t = "" + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Pa(e, t, n) {
  (t !== "number" || cl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var vo = Array.isArray;
function _r(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Rn(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ia(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
  return ke({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function cf(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(L(92));
      if (vo(n)) {
        if (1 < n.length) throw Error(L(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Rn(n) };
}
function jp(e, t) {
  var n = Rn(t.value),
    r = Rn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ff(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Dp(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function $a(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Dp(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var Si,
  Op = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (
        Si = Si || document.createElement("div"),
          Si.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Si.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Do(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var wo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Ry = ["Webkit", "ms", "Moz", "O"];
Object.keys(wo).forEach(function (e) {
  Ry.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (wo[t] = wo[e]);
  });
});
function zp(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (wo.hasOwnProperty(e) && wo[e])
      ? ("" + t).trim()
      : t + "px";
}
function Vp(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = zp(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Ey = ke(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Ma(e, t) {
  if (t) {
    if (Ey[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(L(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(L(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(L(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(L(62));
  }
}
function ja(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Da = null;
function Wu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Oa = null,
  wr = null,
  Rr = null;
function df(e) {
  if ((e = oi(e))) {
    if (typeof Oa != "function") throw Error(L(280));
    var t = e.stateNode;
    t && ((t = Gl(t)), Oa(e.stateNode, e.type, t));
  }
}
function Up(e) {
  wr ? (Rr ? Rr.push(e) : (Rr = [e])) : (wr = e);
}
function Fp() {
  if (wr) {
    var e = wr,
      t = Rr;
    if (((Rr = wr = null), df(e), t)) for (e = 0; e < t.length; e++) df(t[e]);
  }
}
function Bp(e, t) {
  return e(t);
}
function bp() {}
var Fs = !1;
function Wp(e, t, n) {
  if (Fs) return e(t, n);
  Fs = !0;
  try {
    return Bp(e, t, n);
  } finally {
    (Fs = !1), (wr !== null || Rr !== null) && (bp(), Fp());
  }
}
function Oo(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Gl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type), (r = !(e === "button" || e === "input" || e === "select" || e === "textarea"))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(L(231, t, typeof n));
  return n;
}
var za = !1;
if (Xt)
  try {
    var to = {};
    Object.defineProperty(to, "passive", {
      get: function () {
        za = !0;
      },
    }),
      window.addEventListener("test", to, to),
      window.removeEventListener("test", to, to);
  } catch {
    za = !1;
  }
function xy(e, t, n, r, o, i, l, s, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (f) {
    this.onError(f);
  }
}
var Ro = !1,
  fl = null,
  dl = !1,
  Va = null,
  ky = {
    onError: function (e) {
      (Ro = !0), (fl = e);
    },
  };
function Cy(e, t, n, r, o, i, l, s, a) {
  (Ro = !1), (fl = null), xy.apply(ky, arguments);
}
function Ty(e, t, n, r, o, i, l, s, a) {
  if ((Cy.apply(this, arguments), Ro)) {
    if (Ro) {
      var u = fl;
      (Ro = !1), (fl = null);
    } else throw Error(L(198));
    dl || ((dl = !0), (Va = u));
  }
}
function Xn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Hp(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
  }
  return null;
}
function pf(e) {
  if (Xn(e) !== e) throw Error(L(188));
}
function Ny(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Xn(e)), t === null)) throw Error(L(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return pf(o), e;
        if (i === r) return pf(o), t;
        i = i.sibling;
      }
      throw Error(L(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var l = !1, s = o.child; s; ) {
        if (s === n) {
          (l = !0), (n = o), (r = i);
          break;
        }
        if (s === r) {
          (l = !0), (r = o), (n = i);
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = i.child; s; ) {
          if (s === n) {
            (l = !0), (n = i), (r = o);
            break;
          }
          if (s === r) {
            (l = !0), (r = i), (n = o);
            break;
          }
          s = s.sibling;
        }
        if (!l) throw Error(L(189));
      }
    }
    if (n.alternate !== r) throw Error(L(190));
  }
  if (n.tag !== 3) throw Error(L(188));
  return n.stateNode.current === n ? e : t;
}
function Kp(e) {
  return (e = Ny(e)), e !== null ? Gp(e) : null;
}
function Gp(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Gp(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Qp = dt.unstable_scheduleCallback,
  hf = dt.unstable_cancelCallback,
  Ly = dt.unstable_shouldYield,
  Ay = dt.unstable_requestPaint,
  Te = dt.unstable_now,
  Py = dt.unstable_getCurrentPriorityLevel,
  Hu = dt.unstable_ImmediatePriority,
  Yp = dt.unstable_UserBlockingPriority,
  pl = dt.unstable_NormalPriority,
  Iy = dt.unstable_LowPriority,
  Zp = dt.unstable_IdlePriority,
  bl = null,
  Ft = null;
function $y(e) {
  if (Ft && typeof Ft.onCommitFiberRoot == "function")
    try {
      Ft.onCommitFiberRoot(bl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var $t = Math.clz32 ? Math.clz32 : Dy,
  My = Math.log,
  jy = Math.LN2;
function Dy(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((My(e) / jy) | 0)) | 0;
}
var _i = 64,
  wi = 4194304;
function go(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function hl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var s = l & ~o;
    s !== 0 ? (r = go(s)) : ((i &= l), i !== 0 && (r = go(i)));
  } else (l = n & ~o), l !== 0 ? (r = go(l)) : i !== 0 && (r = go(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & o) && ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0)))
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - $t(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Oy(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function zy(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var l = 31 - $t(i),
      s = 1 << l,
      a = o[l];
    a === -1 ? (!(s & n) || s & r) && (o[l] = Oy(s, t)) : a <= t && (e.expiredLanes |= s), (i &= ~s);
  }
}
function Ua(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Xp() {
  var e = _i;
  return (_i <<= 1), !(_i & 4194240) && (_i = 64), e;
}
function Bs(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ni(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - $t(t)),
    (e[t] = n);
}
function Vy(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - $t(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Ku(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - $t(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var ue = 0;
function Jp(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var qp,
  Gu,
  eh,
  th,
  nh,
  Fa = !1,
  Ri = [],
  hn = null,
  mn = null,
  vn = null,
  zo = new Map(),
  Vo = new Map(),
  un = [],
  Uy =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function mf(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      hn = null;
      break;
    case "dragenter":
    case "dragleave":
      mn = null;
      break;
    case "mouseover":
    case "mouseout":
      vn = null;
      break;
    case "pointerover":
    case "pointerout":
      zo.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Vo.delete(t.pointerId);
  }
}
function no(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [o] }),
      t !== null && ((t = oi(t)), t !== null && Gu(t)),
      e)
    : ((e.eventSystemFlags |= r), (t = e.targetContainers), o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function Fy(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (hn = no(hn, e, t, n, r, o)), !0;
    case "dragenter":
      return (mn = no(mn, e, t, n, r, o)), !0;
    case "mouseover":
      return (vn = no(vn, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return zo.set(i, no(zo.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (i = o.pointerId), Vo.set(i, no(Vo.get(i) || null, e, t, n, r, o)), !0;
  }
  return !1;
}
function rh(e) {
  var t = Mn(e.target);
  if (t !== null) {
    var n = Xn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Hp(n)), t !== null)) {
          (e.blockedOn = t),
            nh(e.priority, function () {
              eh(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Gi(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ba(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Da = r), n.target.dispatchEvent(r), (Da = null);
    } else return (t = oi(n)), t !== null && Gu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function vf(e, t, n) {
  Gi(e) && n.delete(t);
}
function By() {
  (Fa = !1),
    hn !== null && Gi(hn) && (hn = null),
    mn !== null && Gi(mn) && (mn = null),
    vn !== null && Gi(vn) && (vn = null),
    zo.forEach(vf),
    Vo.forEach(vf);
}
function ro(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null), Fa || ((Fa = !0), dt.unstable_scheduleCallback(dt.unstable_NormalPriority, By)));
}
function Uo(e) {
  function t(o) {
    return ro(o, e);
  }
  if (0 < Ri.length) {
    ro(Ri[0], e);
    for (var n = 1; n < Ri.length; n++) {
      var r = Ri[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    hn !== null && ro(hn, e), mn !== null && ro(mn, e), vn !== null && ro(vn, e), zo.forEach(t), Vo.forEach(t), n = 0;
    n < un.length;
    n++
  )
    (r = un[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < un.length && ((n = un[0]), n.blockedOn === null); ) rh(n), n.blockedOn === null && un.shift();
}
var Er = tn.ReactCurrentBatchConfig,
  ml = !0;
function by(e, t, n, r) {
  var o = ue,
    i = Er.transition;
  Er.transition = null;
  try {
    (ue = 1), Qu(e, t, n, r);
  } finally {
    (ue = o), (Er.transition = i);
  }
}
function Wy(e, t, n, r) {
  var o = ue,
    i = Er.transition;
  Er.transition = null;
  try {
    (ue = 4), Qu(e, t, n, r);
  } finally {
    (ue = o), (Er.transition = i);
  }
}
function Qu(e, t, n, r) {
  if (ml) {
    var o = Ba(e, t, n, r);
    if (o === null) Js(e, t, r, vl, n), mf(e, r);
    else if (Fy(o, e, t, n, r)) r.stopPropagation();
    else if ((mf(e, r), t & 4 && -1 < Uy.indexOf(e))) {
      for (; o !== null; ) {
        var i = oi(o);
        if ((i !== null && qp(i), (i = Ba(e, t, n, r)), i === null && Js(e, t, r, vl, n), i === o)) break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Js(e, t, r, null, n);
  }
}
var vl = null;
function Ba(e, t, n, r) {
  if (((vl = null), (e = Wu(r)), (e = Mn(e)), e !== null))
    if (((t = Xn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Hp(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (vl = e), null;
}
function oh(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Py()) {
        case Hu:
          return 1;
        case Yp:
          return 4;
        case pl:
        case Iy:
          return 16;
        case Zp:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var fn = null,
  Yu = null,
  Qi = null;
function ih() {
  if (Qi) return Qi;
  var e,
    t = Yu,
    n = t.length,
    r,
    o = "value" in fn ? fn.value : fn.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (Qi = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Yi(e) {
  var t = e.keyCode;
  return (
    "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ei() {
  return !0;
}
function gf() {
  return !1;
}
function ht(e) {
  function t(n, r, o, i, l) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null);
    for (var s in e) e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
    return (
      (this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Ei : gf),
      (this.isPropagationStopped = gf),
      this
    );
  }
  return (
    ke(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ei));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ei));
      },
      persist: function () {},
      isPersistent: Ei,
    }),
    t
  );
}
var Hr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Zu = ht(Hr),
  ri = ke({}, Hr, { view: 0, detail: 0 }),
  Hy = ht(ri),
  bs,
  Ws,
  oo,
  Wl = ke({}, ri, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Xu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== oo &&
            (oo && e.type === "mousemove"
              ? ((bs = e.screenX - oo.screenX), (Ws = e.screenY - oo.screenY))
              : (Ws = bs = 0),
            (oo = e)),
          bs);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ws;
    },
  }),
  yf = ht(Wl),
  Ky = ke({}, Wl, { dataTransfer: 0 }),
  Gy = ht(Ky),
  Qy = ke({}, ri, { relatedTarget: 0 }),
  Hs = ht(Qy),
  Yy = ke({}, Hr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Zy = ht(Yy),
  Xy = ke({}, Hr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Jy = ht(Xy),
  qy = ke({}, Hr, { data: 0 }),
  Sf = ht(qy),
  e0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  t0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  n0 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function r0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = n0[e]) ? !!t[e] : !1;
}
function Xu() {
  return r0;
}
var o0 = ke({}, ri, {
    key: function (e) {
      if (e.key) {
        var t = e0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Yi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
          ? t0[e.keyCode] || "Unidentified"
          : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Xu,
    charCode: function (e) {
      return e.type === "keypress" ? Yi(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress" ? Yi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
  }),
  i0 = ht(o0),
  l0 = ke({}, Wl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  _f = ht(l0),
  s0 = ke({}, ri, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Xu,
  }),
  a0 = ht(s0),
  u0 = ke({}, Hr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  c0 = ht(u0),
  f0 = ke({}, Wl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  d0 = ht(f0),
  p0 = [9, 13, 27, 32],
  Ju = Xt && "CompositionEvent" in window,
  Eo = null;
Xt && "documentMode" in document && (Eo = document.documentMode);
var h0 = Xt && "TextEvent" in window && !Eo,
  lh = Xt && (!Ju || (Eo && 8 < Eo && 11 >= Eo)),
  wf = " ",
  Rf = !1;
function sh(e, t) {
  switch (e) {
    case "keyup":
      return p0.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function ah(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var ur = !1;
function m0(e, t) {
  switch (e) {
    case "compositionend":
      return ah(t);
    case "keypress":
      return t.which !== 32 ? null : ((Rf = !0), wf);
    case "textInput":
      return (e = t.data), e === wf && Rf ? null : e;
    default:
      return null;
  }
}
function v0(e, t) {
  if (ur) return e === "compositionend" || (!Ju && sh(e, t)) ? ((e = ih()), (Qi = Yu = fn = null), (ur = !1), e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return lh && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var g0 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Ef(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!g0[e.type] : t === "textarea";
}
function uh(e, t, n, r) {
  Up(r),
    (t = gl(t, "onChange")),
    0 < t.length && ((n = new Zu("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
}
var xo = null,
  Fo = null;
function y0(e) {
  _h(e, 0);
}
function Hl(e) {
  var t = dr(e);
  if ($p(t)) return e;
}
function S0(e, t) {
  if (e === "change") return t;
}
var ch = !1;
if (Xt) {
  var Ks;
  if (Xt) {
    var Gs = "oninput" in document;
    if (!Gs) {
      var xf = document.createElement("div");
      xf.setAttribute("oninput", "return;"), (Gs = typeof xf.oninput == "function");
    }
    Ks = Gs;
  } else Ks = !1;
  ch = Ks && (!document.documentMode || 9 < document.documentMode);
}
function kf() {
  xo && (xo.detachEvent("onpropertychange", fh), (Fo = xo = null));
}
function fh(e) {
  if (e.propertyName === "value" && Hl(Fo)) {
    var t = [];
    uh(t, Fo, e, Wu(e)), Wp(y0, t);
  }
}
function _0(e, t, n) {
  e === "focusin" ? (kf(), (xo = t), (Fo = n), xo.attachEvent("onpropertychange", fh)) : e === "focusout" && kf();
}
function w0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Hl(Fo);
}
function R0(e, t) {
  if (e === "click") return Hl(t);
}
function E0(e, t) {
  if (e === "input" || e === "change") return Hl(t);
}
function x0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Dt = typeof Object.is == "function" ? Object.is : x0;
function Bo(e, t) {
  if (Dt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!xa.call(t, o) || !Dt(e[o], t[o])) return !1;
  }
  return !0;
}
function Cf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Tf(e, t) {
  var n = Cf(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Cf(n);
  }
}
function dh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? dh(e, t.parentNode)
          : "contains" in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function ph() {
  for (var e = window, t = cl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = cl(e.document);
  }
  return t;
}
function qu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function k0(e) {
  var t = ph(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && dh(n.ownerDocument.documentElement, n)) {
    if (r !== null && qu(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), "selectionStart" in n))
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Tf(n, i));
        var l = Tf(n, r);
        o &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r ? (e.addRange(t), e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var C0 = Xt && "documentMode" in document && 11 >= document.documentMode,
  cr = null,
  ba = null,
  ko = null,
  Wa = !1;
function Nf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Wa ||
    cr == null ||
    cr !== cl(r) ||
    ((r = cr),
    "selectionStart" in r && qu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ko && Bo(ko, r)) ||
      ((ko = r),
      (r = gl(ba, "onSelect")),
      0 < r.length &&
        ((t = new Zu("onSelect", "select", null, t, n)), e.push({ event: t, listeners: r }), (t.target = cr))));
}
function xi(e, t) {
  var n = {};
  return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
}
var fr = {
    animationend: xi("Animation", "AnimationEnd"),
    animationiteration: xi("Animation", "AnimationIteration"),
    animationstart: xi("Animation", "AnimationStart"),
    transitionend: xi("Transition", "TransitionEnd"),
  },
  Qs = {},
  hh = {};
Xt &&
  ((hh = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete fr.animationend.animation, delete fr.animationiteration.animation, delete fr.animationstart.animation),
  "TransitionEvent" in window || delete fr.transitionend.transition);
function Kl(e) {
  if (Qs[e]) return Qs[e];
  if (!fr[e]) return e;
  var t = fr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in hh) return (Qs[e] = t[n]);
  return e;
}
var mh = Kl("animationend"),
  vh = Kl("animationiteration"),
  gh = Kl("animationstart"),
  yh = Kl("transitionend"),
  Sh = new Map(),
  Lf =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function xn(e, t) {
  Sh.set(e, t), Zn(t, [e]);
}
for (var Ys = 0; Ys < Lf.length; Ys++) {
  var Zs = Lf[Ys],
    T0 = Zs.toLowerCase(),
    N0 = Zs[0].toUpperCase() + Zs.slice(1);
  xn(T0, "on" + N0);
}
xn(mh, "onAnimationEnd");
xn(vh, "onAnimationIteration");
xn(gh, "onAnimationStart");
xn("dblclick", "onDoubleClick");
xn("focusin", "onFocus");
xn("focusout", "onBlur");
xn(yh, "onTransitionEnd");
Tr("onMouseEnter", ["mouseout", "mouseover"]);
Tr("onMouseLeave", ["mouseout", "mouseover"]);
Tr("onPointerEnter", ["pointerout", "pointerover"]);
Tr("onPointerLeave", ["pointerout", "pointerover"]);
Zn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Zn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Zn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Zn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Zn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Zn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var yo =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  L0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(yo));
function Af(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Ty(r, t, void 0, e), (e.currentTarget = null);
}
function _h(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var s = r[l],
            a = s.instance,
            u = s.currentTarget;
          if (((s = s.listener), a !== i && o.isPropagationStopped())) break e;
          Af(o, s, u), (i = a);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((s = r[l]), (a = s.instance), (u = s.currentTarget), (s = s.listener), a !== i && o.isPropagationStopped())
          )
            break e;
          Af(o, s, u), (i = a);
        }
    }
  }
  if (dl) throw ((e = Va), (dl = !1), (Va = null), e);
}
function he(e, t) {
  var n = t[Ya];
  n === void 0 && (n = t[Ya] = new Set());
  var r = e + "__bubble";
  n.has(r) || (wh(t, e, 2, !1), n.add(r));
}
function Xs(e, t, n) {
  var r = 0;
  t && (r |= 4), wh(n, e, r, t);
}
var ki = "_reactListening" + Math.random().toString(36).slice(2);
function bo(e) {
  if (!e[ki]) {
    (e[ki] = !0),
      Np.forEach(function (n) {
        n !== "selectionchange" && (L0.has(n) || Xs(n, !1, e), Xs(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ki] || ((t[ki] = !0), Xs("selectionchange", !1, t));
  }
}
function wh(e, t, n, r) {
  switch (oh(t)) {
    case 1:
      var o = by;
      break;
    case 4:
      o = Wy;
      break;
    default:
      o = Qu;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !za || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1);
}
function Js(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var s = r.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var a = l.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = l.stateNode.containerInfo), a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            l = l.return;
          }
        for (; s !== null; ) {
          if (((l = Mn(s)), l === null)) return;
          if (((a = l.tag), a === 5 || a === 6)) {
            r = i = l;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Wp(function () {
    var u = i,
      f = Wu(n),
      d = [];
    e: {
      var m = Sh.get(e);
      if (m !== void 0) {
        var S = Zu,
          v = e;
        switch (e) {
          case "keypress":
            if (Yi(n) === 0) break e;
          case "keydown":
          case "keyup":
            S = i0;
            break;
          case "focusin":
            (v = "focus"), (S = Hs);
            break;
          case "focusout":
            (v = "blur"), (S = Hs);
            break;
          case "beforeblur":
          case "afterblur":
            S = Hs;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            S = yf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = Gy;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = a0;
            break;
          case mh:
          case vh:
          case gh:
            S = Zy;
            break;
          case yh:
            S = c0;
            break;
          case "scroll":
            S = Hy;
            break;
          case "wheel":
            S = d0;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = Jy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = _f;
        }
        var w = (t & 4) !== 0,
          T = !w && e === "scroll",
          h = w ? (m !== null ? m + "Capture" : null) : m;
        w = [];
        for (var c = u, p; c !== null; ) {
          p = c;
          var E = p.stateNode;
          if (
            (p.tag === 5 && E !== null && ((p = E), h !== null && ((E = Oo(c, h)), E != null && w.push(Wo(c, E, p)))),
            T)
          )
            break;
          c = c.return;
        }
        0 < w.length && ((m = new S(m, v, null, n, f)), d.push({ event: m, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (S = e === "mouseout" || e === "pointerout"),
          m && n !== Da && (v = n.relatedTarget || n.fromElement) && (Mn(v) || v[Jt]))
        )
          break e;
        if (
          (S || m) &&
          ((m = f.window === f ? f : (m = f.ownerDocument) ? m.defaultView || m.parentWindow : window),
          S
            ? ((v = n.relatedTarget || n.toElement),
              (S = u),
              (v = v ? Mn(v) : null),
              v !== null && ((T = Xn(v)), v !== T || (v.tag !== 5 && v.tag !== 6)) && (v = null))
            : ((S = null), (v = u)),
          S !== v)
        ) {
          if (
            ((w = yf),
            (E = "onMouseLeave"),
            (h = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = _f), (E = "onPointerLeave"), (h = "onPointerEnter"), (c = "pointer")),
            (T = S == null ? m : dr(S)),
            (p = v == null ? m : dr(v)),
            (m = new w(E, c + "leave", S, n, f)),
            (m.target = T),
            (m.relatedTarget = p),
            (E = null),
            Mn(f) === u && ((w = new w(h, c + "enter", v, n, f)), (w.target = p), (w.relatedTarget = T), (E = w)),
            (T = E),
            S && v)
          )
            t: {
              for (w = S, h = v, c = 0, p = w; p; p = tr(p)) c++;
              for (p = 0, E = h; E; E = tr(E)) p++;
              for (; 0 < c - p; ) (w = tr(w)), c--;
              for (; 0 < p - c; ) (h = tr(h)), p--;
              for (; c--; ) {
                if (w === h || (h !== null && w === h.alternate)) break t;
                (w = tr(w)), (h = tr(h));
              }
              w = null;
            }
          else w = null;
          S !== null && Pf(d, m, S, w, !1), v !== null && T !== null && Pf(d, T, v, w, !0);
        }
      }
      e: {
        if (
          ((m = u ? dr(u) : window),
          (S = m.nodeName && m.nodeName.toLowerCase()),
          S === "select" || (S === "input" && m.type === "file"))
        )
          var k = S0;
        else if (Ef(m))
          if (ch) k = E0;
          else {
            k = w0;
            var C = _0;
          }
        else
          (S = m.nodeName) && S.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (k = R0);
        if (k && (k = k(e, u))) {
          uh(d, k, n, f);
          break e;
        }
        C && C(e, m, u),
          e === "focusout" && (C = m._wrapperState) && C.controlled && m.type === "number" && Pa(m, "number", m.value);
      }
      switch (((C = u ? dr(u) : window), e)) {
        case "focusin":
          (Ef(C) || C.contentEditable === "true") && ((cr = C), (ba = u), (ko = null));
          break;
        case "focusout":
          ko = ba = cr = null;
          break;
        case "mousedown":
          Wa = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Wa = !1), Nf(d, n, f);
          break;
        case "selectionchange":
          if (C0) break;
        case "keydown":
        case "keyup":
          Nf(d, n, f);
      }
      var x;
      if (Ju)
        e: {
          switch (e) {
            case "compositionstart":
              var I = "onCompositionStart";
              break e;
            case "compositionend":
              I = "onCompositionEnd";
              break e;
            case "compositionupdate":
              I = "onCompositionUpdate";
              break e;
          }
          I = void 0;
        }
      else
        ur ? sh(e, n) && (I = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (I = "onCompositionStart");
      I &&
        (lh &&
          n.locale !== "ko" &&
          (ur || I !== "onCompositionStart"
            ? I === "onCompositionEnd" && ur && (x = ih())
            : ((fn = f), (Yu = "value" in fn ? fn.value : fn.textContent), (ur = !0))),
        (C = gl(u, I)),
        0 < C.length &&
          ((I = new Sf(I, e, null, n, f)),
          d.push({ event: I, listeners: C }),
          x ? (I.data = x) : ((x = ah(n)), x !== null && (I.data = x)))),
        (x = h0 ? m0(e, n) : v0(e, n)) &&
          ((u = gl(u, "onBeforeInput")),
          0 < u.length &&
            ((f = new Sf("onBeforeInput", "beforeinput", null, n, f)),
            d.push({ event: f, listeners: u }),
            (f.data = x)));
    }
    _h(d, t);
  });
}
function Wo(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function gl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i), (i = Oo(e, n)), i != null && r.unshift(Wo(e, i, o)), (i = Oo(e, t)), i != null && r.push(Wo(e, i, o))),
      (e = e.return);
  }
  return r;
}
function tr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Pf(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n,
      a = s.alternate,
      u = s.stateNode;
    if (a !== null && a === r) break;
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      o
        ? ((a = Oo(n, i)), a != null && l.unshift(Wo(n, a, s)))
        : o || ((a = Oo(n, i)), a != null && l.push(Wo(n, a, s)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var A0 = /\r\n?/g,
  P0 = /\u0000|\uFFFD/g;
function If(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      A0,
      `
`
    )
    .replace(P0, "");
}
function Ci(e, t, n) {
  if (((t = If(t)), If(e) !== t && n)) throw Error(L(425));
}
function yl() {}
var Ha = null,
  Ka = null;
function Ga(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Qa = typeof setTimeout == "function" ? setTimeout : void 0,
  I0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  $f = typeof Promise == "function" ? Promise : void 0,
  $0 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof $f < "u"
        ? function (e) {
            return $f.resolve(null).then(e).catch(M0);
          }
        : Qa;
function M0(e) {
  setTimeout(function () {
    throw e;
  });
}
function qs(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Uo(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Uo(t);
}
function gn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Mf(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Kr = Math.random().toString(36).slice(2),
  Ut = "__reactFiber$" + Kr,
  Ho = "__reactProps$" + Kr,
  Jt = "__reactContainer$" + Kr,
  Ya = "__reactEvents$" + Kr,
  j0 = "__reactListeners$" + Kr,
  D0 = "__reactHandles$" + Kr;
function Mn(e) {
  var t = e[Ut];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Jt] || n[Ut])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = Mf(e); e !== null; ) {
          if ((n = e[Ut])) return n;
          e = Mf(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function oi(e) {
  return (e = e[Ut] || e[Jt]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function dr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(L(33));
}
function Gl(e) {
  return e[Ho] || null;
}
var Za = [],
  pr = -1;
function kn(e) {
  return { current: e };
}
function ge(e) {
  0 > pr || ((e.current = Za[pr]), (Za[pr] = null), pr--);
}
function pe(e, t) {
  pr++, (Za[pr] = e.current), (e.current = t);
}
var En = {},
  Ke = kn(En),
  nt = kn(!1),
  bn = En;
function Nr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return En;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function rt(e) {
  return (e = e.childContextTypes), e != null;
}
function Sl() {
  ge(nt), ge(Ke);
}
function jf(e, t, n) {
  if (Ke.current !== En) throw Error(L(168));
  pe(Ke, t), pe(nt, n);
}
function Rh(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(L(108, _y(e) || "Unknown", o));
  return ke({}, n, r);
}
function _l(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || En),
    (bn = Ke.current),
    pe(Ke, e),
    pe(nt, nt.current),
    !0
  );
}
function Df(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(L(169));
  n ? ((e = Rh(e, t, bn)), (r.__reactInternalMemoizedMergedChildContext = e), ge(nt), ge(Ke), pe(Ke, e)) : ge(nt),
    pe(nt, n);
}
var Gt = null,
  Ql = !1,
  ea = !1;
function Eh(e) {
  Gt === null ? (Gt = [e]) : Gt.push(e);
}
function O0(e) {
  (Ql = !0), Eh(e);
}
function Cn() {
  if (!ea && Gt !== null) {
    ea = !0;
    var e = 0,
      t = ue;
    try {
      var n = Gt;
      for (ue = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Gt = null), (Ql = !1);
    } catch (o) {
      throw (Gt !== null && (Gt = Gt.slice(e + 1)), Qp(Hu, Cn), o);
    } finally {
      (ue = t), (ea = !1);
    }
  }
  return null;
}
var hr = [],
  mr = 0,
  wl = null,
  Rl = 0,
  gt = [],
  yt = 0,
  Wn = null,
  Qt = 1,
  Yt = "";
function An(e, t) {
  (hr[mr++] = Rl), (hr[mr++] = wl), (wl = e), (Rl = t);
}
function xh(e, t, n) {
  (gt[yt++] = Qt), (gt[yt++] = Yt), (gt[yt++] = Wn), (Wn = e);
  var r = Qt;
  e = Yt;
  var o = 32 - $t(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - $t(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    (i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (Qt = (1 << (32 - $t(t) + o)) | (n << o) | r),
      (Yt = i + e);
  } else (Qt = (1 << i) | (n << o) | r), (Yt = e);
}
function ec(e) {
  e.return !== null && (An(e, 1), xh(e, 1, 0));
}
function tc(e) {
  for (; e === wl; ) (wl = hr[--mr]), (hr[mr] = null), (Rl = hr[--mr]), (hr[mr] = null);
  for (; e === Wn; )
    (Wn = gt[--yt]), (gt[yt] = null), (Yt = gt[--yt]), (gt[yt] = null), (Qt = gt[--yt]), (gt[yt] = null);
}
var ft = null,
  ct = null,
  _e = !1,
  It = null;
function kh(e, t) {
  var n = St(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Of(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (ft = e), (ct = gn(t.firstChild)), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ft = e), (ct = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Wn !== null ? { id: Qt, overflow: Yt } : null),
            (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
            (n = St(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ft = e),
            (ct = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Xa(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ja(e) {
  if (_e) {
    var t = ct;
    if (t) {
      var n = t;
      if (!Of(e, t)) {
        if (Xa(e)) throw Error(L(418));
        t = gn(n.nextSibling);
        var r = ft;
        t && Of(e, t) ? kh(r, n) : ((e.flags = (e.flags & -4097) | 2), (_e = !1), (ft = e));
      }
    } else {
      if (Xa(e)) throw Error(L(418));
      (e.flags = (e.flags & -4097) | 2), (_e = !1), (ft = e);
    }
  }
}
function zf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  ft = e;
}
function Ti(e) {
  if (e !== ft) return !1;
  if (!_e) return zf(e), (_e = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== "head" && t !== "body" && !Ga(e.type, e.memoizedProps))),
    t && (t = ct))
  ) {
    if (Xa(e)) throw (Ch(), Error(L(418)));
    for (; t; ) kh(e, t), (t = gn(t.nextSibling));
  }
  if ((zf(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(L(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ct = gn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ct = null;
    }
  } else ct = ft ? gn(e.stateNode.nextSibling) : null;
  return !0;
}
function Ch() {
  for (var e = ct; e; ) e = gn(e.nextSibling);
}
function Lr() {
  (ct = ft = null), (_e = !1);
}
function nc(e) {
  It === null ? (It = [e]) : It.push(e);
}
var z0 = tn.ReactCurrentBatchConfig;
function io(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(L(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(L(147, e));
      var o = r,
        i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var s = o.refs;
            l === null ? delete s[i] : (s[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(L(284));
    if (!n._owner) throw Error(L(290, e));
  }
  return e;
}
function Ni(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(L(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
  );
}
function Vf(e) {
  var t = e._init;
  return t(e._payload);
}
function Th(e) {
  function t(h, c) {
    if (e) {
      var p = h.deletions;
      p === null ? ((h.deletions = [c]), (h.flags |= 16)) : p.push(c);
    }
  }
  function n(h, c) {
    if (!e) return null;
    for (; c !== null; ) t(h, c), (c = c.sibling);
    return null;
  }
  function r(h, c) {
    for (h = new Map(); c !== null; ) c.key !== null ? h.set(c.key, c) : h.set(c.index, c), (c = c.sibling);
    return h;
  }
  function o(h, c) {
    return (h = wn(h, c)), (h.index = 0), (h.sibling = null), h;
  }
  function i(h, c, p) {
    return (
      (h.index = p),
      e
        ? ((p = h.alternate), p !== null ? ((p = p.index), p < c ? ((h.flags |= 2), c) : p) : ((h.flags |= 2), c))
        : ((h.flags |= 1048576), c)
    );
  }
  function l(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function s(h, c, p, E) {
    return c === null || c.tag !== 6 ? ((c = sa(p, h.mode, E)), (c.return = h), c) : ((c = o(c, p)), (c.return = h), c);
  }
  function a(h, c, p, E) {
    var k = p.type;
    return k === ar
      ? f(h, c, p.props.children, E, p.key)
      : c !== null &&
          (c.elementType === k || (typeof k == "object" && k !== null && k.$$typeof === ln && Vf(k) === c.type))
        ? ((E = o(c, p.props)), (E.ref = io(h, c, p)), (E.return = h), E)
        : ((E = nl(p.type, p.key, p.props, null, h.mode, E)), (E.ref = io(h, c, p)), (E.return = h), E);
  }
  function u(h, c, p, E) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== p.containerInfo ||
      c.stateNode.implementation !== p.implementation
      ? ((c = aa(p, h.mode, E)), (c.return = h), c)
      : ((c = o(c, p.children || [])), (c.return = h), c);
  }
  function f(h, c, p, E, k) {
    return c === null || c.tag !== 7
      ? ((c = Vn(p, h.mode, E, k)), (c.return = h), c)
      : ((c = o(c, p)), (c.return = h), c);
  }
  function d(h, c, p) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = sa("" + c, h.mode, p)), (c.return = h), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case gi:
          return (p = nl(c.type, c.key, c.props, null, h.mode, p)), (p.ref = io(h, null, c)), (p.return = h), p;
        case sr:
          return (c = aa(c, h.mode, p)), (c.return = h), c;
        case ln:
          var E = c._init;
          return d(h, E(c._payload), p);
      }
      if (vo(c) || eo(c)) return (c = Vn(c, h.mode, p, null)), (c.return = h), c;
      Ni(h, c);
    }
    return null;
  }
  function m(h, c, p, E) {
    var k = c !== null ? c.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number") return k !== null ? null : s(h, c, "" + p, E);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case gi:
          return p.key === k ? a(h, c, p, E) : null;
        case sr:
          return p.key === k ? u(h, c, p, E) : null;
        case ln:
          return (k = p._init), m(h, c, k(p._payload), E);
      }
      if (vo(p) || eo(p)) return k !== null ? null : f(h, c, p, E, null);
      Ni(h, p);
    }
    return null;
  }
  function S(h, c, p, E, k) {
    if ((typeof E == "string" && E !== "") || typeof E == "number") return (h = h.get(p) || null), s(c, h, "" + E, k);
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case gi:
          return (h = h.get(E.key === null ? p : E.key) || null), a(c, h, E, k);
        case sr:
          return (h = h.get(E.key === null ? p : E.key) || null), u(c, h, E, k);
        case ln:
          var C = E._init;
          return S(h, c, p, C(E._payload), k);
      }
      if (vo(E) || eo(E)) return (h = h.get(p) || null), f(c, h, E, k, null);
      Ni(c, E);
    }
    return null;
  }
  function v(h, c, p, E) {
    for (var k = null, C = null, x = c, I = (c = 0), oe = null; x !== null && I < p.length; I++) {
      x.index > I ? ((oe = x), (x = null)) : (oe = x.sibling);
      var B = m(h, x, p[I], E);
      if (B === null) {
        x === null && (x = oe);
        break;
      }
      e && x && B.alternate === null && t(h, x),
        (c = i(B, c, I)),
        C === null ? (k = B) : (C.sibling = B),
        (C = B),
        (x = oe);
    }
    if (I === p.length) return n(h, x), _e && An(h, I), k;
    if (x === null) {
      for (; I < p.length; I++)
        (x = d(h, p[I], E)), x !== null && ((c = i(x, c, I)), C === null ? (k = x) : (C.sibling = x), (C = x));
      return _e && An(h, I), k;
    }
    for (x = r(h, x); I < p.length; I++)
      (oe = S(x, h, I, p[I], E)),
        oe !== null &&
          (e && oe.alternate !== null && x.delete(oe.key === null ? I : oe.key),
          (c = i(oe, c, I)),
          C === null ? (k = oe) : (C.sibling = oe),
          (C = oe));
    return (
      e &&
        x.forEach(function (de) {
          return t(h, de);
        }),
      _e && An(h, I),
      k
    );
  }
  function w(h, c, p, E) {
    var k = eo(p);
    if (typeof k != "function") throw Error(L(150));
    if (((p = k.call(p)), p == null)) throw Error(L(151));
    for (var C = (k = null), x = c, I = (c = 0), oe = null, B = p.next(); x !== null && !B.done; I++, B = p.next()) {
      x.index > I ? ((oe = x), (x = null)) : (oe = x.sibling);
      var de = m(h, x, B.value, E);
      if (de === null) {
        x === null && (x = oe);
        break;
      }
      e && x && de.alternate === null && t(h, x),
        (c = i(de, c, I)),
        C === null ? (k = de) : (C.sibling = de),
        (C = de),
        (x = oe);
    }
    if (B.done) return n(h, x), _e && An(h, I), k;
    if (x === null) {
      for (; !B.done; I++, B = p.next())
        (B = d(h, B.value, E)), B !== null && ((c = i(B, c, I)), C === null ? (k = B) : (C.sibling = B), (C = B));
      return _e && An(h, I), k;
    }
    for (x = r(h, x); !B.done; I++, B = p.next())
      (B = S(x, h, I, B.value, E)),
        B !== null &&
          (e && B.alternate !== null && x.delete(B.key === null ? I : B.key),
          (c = i(B, c, I)),
          C === null ? (k = B) : (C.sibling = B),
          (C = B));
    return (
      e &&
        x.forEach(function (Xe) {
          return t(h, Xe);
        }),
      _e && An(h, I),
      k
    );
  }
  function T(h, c, p, E) {
    if (
      (typeof p == "object" && p !== null && p.type === ar && p.key === null && (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case gi:
          e: {
            for (var k = p.key, C = c; C !== null; ) {
              if (C.key === k) {
                if (((k = p.type), k === ar)) {
                  if (C.tag === 7) {
                    n(h, C.sibling), (c = o(C, p.props.children)), (c.return = h), (h = c);
                    break e;
                  }
                } else if (
                  C.elementType === k ||
                  (typeof k == "object" && k !== null && k.$$typeof === ln && Vf(k) === C.type)
                ) {
                  n(h, C.sibling), (c = o(C, p.props)), (c.ref = io(h, C, p)), (c.return = h), (h = c);
                  break e;
                }
                n(h, C);
                break;
              } else t(h, C);
              C = C.sibling;
            }
            p.type === ar
              ? ((c = Vn(p.props.children, h.mode, E, p.key)), (c.return = h), (h = c))
              : ((E = nl(p.type, p.key, p.props, null, h.mode, E)), (E.ref = io(h, c, p)), (E.return = h), (h = E));
          }
          return l(h);
        case sr:
          e: {
            for (C = p.key; c !== null; ) {
              if (c.key === C)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === p.containerInfo &&
                  c.stateNode.implementation === p.implementation
                ) {
                  n(h, c.sibling), (c = o(c, p.children || [])), (c.return = h), (h = c);
                  break e;
                } else {
                  n(h, c);
                  break;
                }
              else t(h, c);
              c = c.sibling;
            }
            (c = aa(p, h.mode, E)), (c.return = h), (h = c);
          }
          return l(h);
        case ln:
          return (C = p._init), T(h, c, C(p._payload), E);
      }
      if (vo(p)) return v(h, c, p, E);
      if (eo(p)) return w(h, c, p, E);
      Ni(h, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        c !== null && c.tag === 6
          ? (n(h, c.sibling), (c = o(c, p)), (c.return = h), (h = c))
          : (n(h, c), (c = sa(p, h.mode, E)), (c.return = h), (h = c)),
        l(h))
      : n(h, c);
  }
  return T;
}
var Ar = Th(!0),
  Nh = Th(!1),
  El = kn(null),
  xl = null,
  vr = null,
  rc = null;
function oc() {
  rc = vr = xl = null;
}
function ic(e) {
  var t = El.current;
  ge(El), (e._currentValue = t);
}
function qa(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function xr(e, t) {
  (xl = e),
    (rc = vr = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (et = !0), (e.firstContext = null));
}
function Rt(e) {
  var t = e._currentValue;
  if (rc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), vr === null)) {
      if (xl === null) throw Error(L(308));
      (vr = e), (xl.dependencies = { lanes: 0, firstContext: e });
    } else vr = vr.next = e;
  return t;
}
var jn = null;
function lc(e) {
  jn === null ? (jn = [e]) : jn.push(e);
}
function Lh(e, t, n, r) {
  var o = t.interleaved;
  return o === null ? ((n.next = n), lc(t)) : ((n.next = o.next), (o.next = n)), (t.interleaved = n), qt(e, r);
}
function qt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var sn = !1;
function sc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ah(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Zt(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function yn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), ie & 2)) {
    var o = r.pending;
    return o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)), (r.pending = t), qt(e, n);
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), lc(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    qt(e, n)
  );
}
function Zi(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ku(e, n);
  }
}
function Uf(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = l) : (i = i.next = l), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: i, shared: r.shared, effects: r.effects }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function kl(e, t, n, r) {
  var o = e.updateQueue;
  sn = !1;
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var a = s,
      u = a.next;
    (a.next = null), l === null ? (i = u) : (l.next = u), (l = a);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (s = f.lastBaseUpdate),
      s !== l && (s === null ? (f.firstBaseUpdate = u) : (s.next = u), (f.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var d = o.baseState;
    (l = 0), (f = u = a = null), (s = i);
    do {
      var m = s.lane,
        S = s.eventTime;
      if ((r & m) === m) {
        f !== null &&
          (f = f.next = { eventTime: S, lane: 0, tag: s.tag, payload: s.payload, callback: s.callback, next: null });
        e: {
          var v = e,
            w = s;
          switch (((m = t), (S = n), w.tag)) {
            case 1:
              if (((v = w.payload), typeof v == "function")) {
                d = v.call(S, d, m);
                break e;
              }
              d = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (((v = w.payload), (m = typeof v == "function" ? v.call(S, d, m) : v), m == null)) break e;
              d = ke({}, d, m);
              break e;
            case 2:
              sn = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64), (m = o.effects), m === null ? (o.effects = [s]) : m.push(s));
      } else
        (S = { eventTime: S, lane: m, tag: s.tag, payload: s.payload, callback: s.callback, next: null }),
          f === null ? ((u = f = S), (a = d)) : (f = f.next = S),
          (l |= m);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (m = s), (s = m.next), (m.next = null), (o.lastBaseUpdate = m), (o.shared.pending = null);
      }
    } while (!0);
    if (
      (f === null && (a = d),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = f),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (l |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (Kn |= l), (e.lanes = l), (e.memoizedState = d);
  }
}
function Ff(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function")) throw Error(L(191, o));
        o.call(r);
      }
    }
}
var ii = {},
  Bt = kn(ii),
  Ko = kn(ii),
  Go = kn(ii);
function Dn(e) {
  if (e === ii) throw Error(L(174));
  return e;
}
function ac(e, t) {
  switch ((pe(Go, t), pe(Ko, e), pe(Bt, ii), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : $a(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = $a(t, e));
  }
  ge(Bt), pe(Bt, t);
}
function Pr() {
  ge(Bt), ge(Ko), ge(Go);
}
function Ph(e) {
  Dn(Go.current);
  var t = Dn(Bt.current),
    n = $a(t, e.type);
  t !== n && (pe(Ko, e), pe(Bt, n));
}
function uc(e) {
  Ko.current === e && (ge(Bt), ge(Ko));
}
var Ee = kn(0);
function Cl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ta = [];
function cc() {
  for (var e = 0; e < ta.length; e++) ta[e]._workInProgressVersionPrimary = null;
  ta.length = 0;
}
var Xi = tn.ReactCurrentDispatcher,
  na = tn.ReactCurrentBatchConfig,
  Hn = 0,
  xe = null,
  Ae = null,
  De = null,
  Tl = !1,
  Co = !1,
  Qo = 0,
  V0 = 0;
function be() {
  throw Error(L(321));
}
function fc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Dt(e[n], t[n])) return !1;
  return !0;
}
function dc(e, t, n, r, o, i) {
  if (
    ((Hn = i),
    (xe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Xi.current = e === null || e.memoizedState === null ? b0 : W0),
    (e = n(r, o)),
    Co)
  ) {
    i = 0;
    do {
      if (((Co = !1), (Qo = 0), 25 <= i)) throw Error(L(301));
      (i += 1), (De = Ae = null), (t.updateQueue = null), (Xi.current = H0), (e = n(r, o));
    } while (Co);
  }
  if (((Xi.current = Nl), (t = Ae !== null && Ae.next !== null), (Hn = 0), (De = Ae = xe = null), (Tl = !1), t))
    throw Error(L(300));
  return e;
}
function pc() {
  var e = Qo !== 0;
  return (Qo = 0), e;
}
function zt() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return De === null ? (xe.memoizedState = De = e) : (De = De.next = e), De;
}
function Et() {
  if (Ae === null) {
    var e = xe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Ae.next;
  var t = De === null ? xe.memoizedState : De.next;
  if (t !== null) (De = t), (Ae = e);
  else {
    if (e === null) throw Error(L(310));
    (Ae = e),
      (e = {
        memoizedState: Ae.memoizedState,
        baseState: Ae.baseState,
        baseQueue: Ae.baseQueue,
        queue: Ae.queue,
        next: null,
      }),
      De === null ? (xe.memoizedState = De = e) : (De = De.next = e);
  }
  return De;
}
function Yo(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ra(e) {
  var t = Et(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = Ae,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      (o.next = i.next), (i.next = l);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var s = (l = null),
      a = null,
      u = i;
    do {
      var f = u.lane;
      if ((Hn & f) === f)
        a !== null &&
          (a = a.next =
            { lane: 0, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var d = { lane: f, action: u.action, hasEagerState: u.hasEagerState, eagerState: u.eagerState, next: null };
        a === null ? ((s = a = d), (l = r)) : (a = a.next = d), (xe.lanes |= f), (Kn |= f);
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? (l = r) : (a.next = s),
      Dt(r, t.memoizedState) || (et = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (xe.lanes |= i), (Kn |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function oa(e) {
  var t = Et(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = (o = o.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== o);
    Dt(i, t.memoizedState) || (et = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Ih() {}
function $h(e, t) {
  var n = xe,
    r = Et(),
    o = t(),
    i = !Dt(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (et = !0)),
    (r = r.queue),
    hc(Dh.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (De !== null && De.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), Zo(9, jh.bind(null, n, r, o, t), void 0, null), ze === null)) throw Error(L(349));
    Hn & 30 || Mh(n, t, o);
  }
  return o;
}
function Mh(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = xe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (xe.updateQueue = t), (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function jh(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Oh(t) && zh(e);
}
function Dh(e, t, n) {
  return n(function () {
    Oh(t) && zh(e);
  });
}
function Oh(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Dt(e, n);
  } catch {
    return !0;
  }
}
function zh(e) {
  var t = qt(e, 1);
  t !== null && Mt(t, e, 1, -1);
}
function Bf(e) {
  var t = zt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Yo, lastRenderedState: e }),
    (t.queue = e),
    (e = e.dispatch = B0.bind(null, xe, e)),
    [t.memoizedState, e]
  );
}
function Zo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = xe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }), (xe.updateQueue = t), (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Vh() {
  return Et().memoizedState;
}
function Ji(e, t, n, r) {
  var o = zt();
  (xe.flags |= e), (o.memoizedState = Zo(1 | t, n, void 0, r === void 0 ? null : r));
}
function Yl(e, t, n, r) {
  var o = Et();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Ae !== null) {
    var l = Ae.memoizedState;
    if (((i = l.destroy), r !== null && fc(r, l.deps))) {
      o.memoizedState = Zo(t, n, i, r);
      return;
    }
  }
  (xe.flags |= e), (o.memoizedState = Zo(1 | t, n, i, r));
}
function bf(e, t) {
  return Ji(8390656, 8, e, t);
}
function hc(e, t) {
  return Yl(2048, 8, e, t);
}
function Uh(e, t) {
  return Yl(4, 2, e, t);
}
function Fh(e, t) {
  return Yl(4, 4, e, t);
}
function Bh(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function bh(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), Yl(4, 4, Bh.bind(null, t, e), n);
}
function mc() {}
function Wh(e, t) {
  var n = Et();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && fc(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Hh(e, t) {
  var n = Et();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && fc(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Kh(e, t, n) {
  return Hn & 21
    ? (Dt(n, t) || ((n = Xp()), (xe.lanes |= n), (Kn |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (et = !0)), (e.memoizedState = n));
}
function U0(e, t) {
  var n = ue;
  (ue = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = na.transition;
  na.transition = {};
  try {
    e(!1), t();
  } finally {
    (ue = n), (na.transition = r);
  }
}
function Gh() {
  return Et().memoizedState;
}
function F0(e, t, n) {
  var r = _n(e);
  if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Qh(e))) Yh(t, n);
  else if (((n = Lh(e, t, n, r)), n !== null)) {
    var o = Qe();
    Mt(n, e, r, o), Zh(n, t, r);
  }
}
function B0(e, t, n) {
  var r = _n(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Qh(e)) Yh(t, o);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && ((i = t.lastRenderedReducer), i !== null))
      try {
        var l = t.lastRenderedState,
          s = i(l, n);
        if (((o.hasEagerState = !0), (o.eagerState = s), Dt(s, l))) {
          var a = t.interleaved;
          a === null ? ((o.next = o), lc(t)) : ((o.next = a.next), (a.next = o)), (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Lh(e, t, o, r)), n !== null && ((o = Qe()), Mt(n, e, r, o), Zh(n, t, r));
  }
}
function Qh(e) {
  var t = e.alternate;
  return e === xe || (t !== null && t === xe);
}
function Yh(e, t) {
  Co = Tl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function Zh(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Ku(e, n);
  }
}
var Nl = {
    readContext: Rt,
    useCallback: be,
    useContext: be,
    useEffect: be,
    useImperativeHandle: be,
    useInsertionEffect: be,
    useLayoutEffect: be,
    useMemo: be,
    useReducer: be,
    useRef: be,
    useState: be,
    useDebugValue: be,
    useDeferredValue: be,
    useTransition: be,
    useMutableSource: be,
    useSyncExternalStore: be,
    useId: be,
    unstable_isNewReconciler: !1,
  },
  b0 = {
    readContext: Rt,
    useCallback: function (e, t) {
      return (zt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Rt,
    useEffect: bf,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), Ji(4194308, 4, Bh.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return Ji(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ji(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = zt();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var r = zt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = F0.bind(null, xe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = zt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Bf,
    useDebugValue: mc,
    useDeferredValue: function (e) {
      return (zt().memoizedState = e);
    },
    useTransition: function () {
      var e = Bf(!1),
        t = e[0];
      return (e = U0.bind(null, e[1])), (zt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = xe,
        o = zt();
      if (_e) {
        if (n === void 0) throw Error(L(407));
        n = n();
      } else {
        if (((n = t()), ze === null)) throw Error(L(349));
        Hn & 30 || Mh(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        bf(Dh.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Zo(9, jh.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = zt(),
        t = ze.identifierPrefix;
      if (_e) {
        var n = Yt,
          r = Qt;
        (n = (r & ~(1 << (32 - $t(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Qo++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = V0++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  W0 = {
    readContext: Rt,
    useCallback: Wh,
    useContext: Rt,
    useEffect: hc,
    useImperativeHandle: bh,
    useInsertionEffect: Uh,
    useLayoutEffect: Fh,
    useMemo: Hh,
    useReducer: ra,
    useRef: Vh,
    useState: function () {
      return ra(Yo);
    },
    useDebugValue: mc,
    useDeferredValue: function (e) {
      var t = Et();
      return Kh(t, Ae.memoizedState, e);
    },
    useTransition: function () {
      var e = ra(Yo)[0],
        t = Et().memoizedState;
      return [e, t];
    },
    useMutableSource: Ih,
    useSyncExternalStore: $h,
    useId: Gh,
    unstable_isNewReconciler: !1,
  },
  H0 = {
    readContext: Rt,
    useCallback: Wh,
    useContext: Rt,
    useEffect: hc,
    useImperativeHandle: bh,
    useInsertionEffect: Uh,
    useLayoutEffect: Fh,
    useMemo: Hh,
    useReducer: oa,
    useRef: Vh,
    useState: function () {
      return oa(Yo);
    },
    useDebugValue: mc,
    useDeferredValue: function (e) {
      var t = Et();
      return Ae === null ? (t.memoizedState = e) : Kh(t, Ae.memoizedState, e);
    },
    useTransition: function () {
      var e = oa(Yo)[0],
        t = Et().memoizedState;
      return [e, t];
    },
    useMutableSource: Ih,
    useSyncExternalStore: $h,
    useId: Gh,
    unstable_isNewReconciler: !1,
  };
function At(e, t) {
  if (e && e.defaultProps) {
    (t = ke({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function eu(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ke({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Zl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Xn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Qe(),
      o = _n(e),
      i = Zt(r, o);
    (i.payload = t), n != null && (i.callback = n), (t = yn(e, i, o)), t !== null && (Mt(t, e, o, r), Zi(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Qe(),
      o = _n(e),
      i = Zt(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = yn(e, i, o)),
      t !== null && (Mt(t, e, o, r), Zi(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Qe(),
      r = _n(e),
      o = Zt(n, r);
    (o.tag = 2), t != null && (o.callback = t), (t = yn(e, o, r)), t !== null && (Mt(t, e, r, n), Zi(t, e, r));
  },
};
function Wf(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
        ? !Bo(n, r) || !Bo(o, i)
        : !0
  );
}
function Xh(e, t, n) {
  var r = !1,
    o = En,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Rt(i))
      : ((o = rt(t) ? bn : Ke.current), (r = t.contextTypes), (i = (r = r != null) ? Nr(e, o) : En)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Zl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Hf(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Zl.enqueueReplaceState(t, t.state, null);
}
function tu(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), sc(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? (o.context = Rt(i)) : ((i = rt(t) ? bn : Ke.current), (o.context = Nr(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (eu(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
      t !== o.state && Zl.enqueueReplaceState(o, o.state, null),
      kl(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ir(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Sy(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function ia(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function nu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var K0 = typeof WeakMap == "function" ? WeakMap : Map;
function Jh(e, t, n) {
  (n = Zt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Al || ((Al = !0), (du = r)), nu(e, t);
    }),
    n
  );
}
function qh(e, t, n) {
  (n = Zt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        nu(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        nu(e, t), typeof r != "function" && (Sn === null ? (Sn = new Set([this])) : Sn.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, { componentStack: l !== null ? l : "" });
      }),
    n
  );
}
function Kf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new K0();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = l1.bind(null, e, t, n)), t.then(e, e));
}
function Gf(e) {
  do {
    var t;
    if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Qf(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = Zt(-1, 1)), (t.tag = 2), yn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var G0 = tn.ReactCurrentOwner,
  et = !1;
function Ge(e, t, n, r) {
  t.child = e === null ? Nh(t, null, n, r) : Ar(t, e.child, n, r);
}
function Yf(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    xr(t, o),
    (r = dc(e, t, n, r, i, o)),
    (n = pc()),
    e !== null && !et
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), en(e, t, o))
      : (_e && n && ec(t), (t.flags |= 1), Ge(e, t, r, o), t.child)
  );
}
function Zf(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Ec(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), em(e, t, i, r, o))
      : ((e = nl(n.type, null, r, t, t.mode, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : Bo), n(l, r) && e.ref === t.ref)) return en(e, t, o);
  }
  return (t.flags |= 1), (e = wn(i, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function em(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Bo(i, r) && e.ref === t.ref)
      if (((et = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0)) e.flags & 131072 && (et = !0);
      else return (t.lanes = e.lanes), en(e, t, o);
  }
  return ru(e, t, n, r, o);
}
function tm(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1)) (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), pe(yr, ut), (ut |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
          (t.updateQueue = null),
          pe(yr, ut),
          (ut |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        pe(yr, ut),
        (ut |= r);
    }
  else i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n), pe(yr, ut), (ut |= r);
  return Ge(e, t, o, n), t.child;
}
function nm(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function ru(e, t, n, r, o) {
  var i = rt(n) ? bn : Ke.current;
  return (
    (i = Nr(t, i)),
    xr(t, o),
    (n = dc(e, t, n, r, i, o)),
    (r = pc()),
    e !== null && !et
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), en(e, t, o))
      : (_e && r && ec(t), (t.flags |= 1), Ge(e, t, n, o), t.child)
  );
}
function Xf(e, t, n, r, o) {
  if (rt(n)) {
    var i = !0;
    _l(t);
  } else i = !1;
  if ((xr(t, o), t.stateNode === null)) qi(e, t), Xh(t, n, r), tu(t, n, r, o), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      s = t.memoizedProps;
    l.props = s;
    var a = l.context,
      u = n.contextType;
    typeof u == "object" && u !== null ? (u = Rt(u)) : ((u = rt(n) ? bn : Ke.current), (u = Nr(t, u)));
    var f = n.getDerivedStateFromProps,
      d = typeof f == "function" || typeof l.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function") ||
      ((s !== r || a !== u) && Hf(t, l, r, u)),
      (sn = !1);
    var m = t.memoizedState;
    (l.state = m),
      kl(t, r, l, o),
      (a = t.memoizedState),
      s !== r || m !== a || nt.current || sn
        ? (typeof f == "function" && (eu(t, n, f, r), (a = t.memoizedState)),
          (s = sn || Wf(t, n, s, r, m, a, u))
            ? (d ||
                (typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" && l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (l.props = r),
          (l.state = a),
          (l.context = u),
          (r = s))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308), (r = !1));
  } else {
    (l = t.stateNode),
      Ah(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : At(t.type, s)),
      (l.props = u),
      (d = t.pendingProps),
      (m = l.context),
      (a = n.contextType),
      typeof a == "object" && a !== null ? (a = Rt(a)) : ((a = rt(n) ? bn : Ke.current), (a = Nr(t, a)));
    var S = n.getDerivedStateFromProps;
    (f = typeof S == "function" || typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function") ||
      ((s !== d || m !== a) && Hf(t, l, r, a)),
      (sn = !1),
      (m = t.memoizedState),
      (l.state = m),
      kl(t, r, l, o);
    var v = t.memoizedState;
    s !== d || m !== v || nt.current || sn
      ? (typeof S == "function" && (eu(t, n, S, r), (v = t.memoizedState)),
        (u = sn || Wf(t, n, u, r, m, v, a) || !1)
          ? (f ||
              (typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, v, a),
              typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, v, a)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (l.props = r),
        (l.state = v),
        (l.context = a),
        (r = u))
      : (typeof l.componentDidUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ou(e, t, n, r, i, o);
}
function ou(e, t, n, r, o, i) {
  nm(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && Df(t, n, !1), en(e, t, i);
  (r = t.stateNode), (G0.current = t);
  var s = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l ? ((t.child = Ar(t, e.child, null, i)), (t.child = Ar(t, null, s, i))) : Ge(e, t, s, i),
    (t.memoizedState = r.state),
    o && Df(t, n, !0),
    t.child
  );
}
function rm(e) {
  var t = e.stateNode;
  t.pendingContext ? jf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && jf(e, t.context, !1),
    ac(e, t.containerInfo);
}
function Jf(e, t, n, r, o) {
  return Lr(), nc(o), (t.flags |= 256), Ge(e, t, n, r), t.child;
}
var iu = { dehydrated: null, treeContext: null, retryLane: 0 };
function lu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function om(e, t, n) {
  var r = t.pendingProps,
    o = Ee.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    s;
  if (
    ((s = l) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s ? ((i = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (o |= 1),
    pe(Ee, o & 1),
    e === null)
  )
    return (
      Ja(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
        : ((l = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && i !== null ? ((i.childLanes = 0), (i.pendingProps = l)) : (i = ql(l, r, 0, null)),
              (e = Vn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = lu(n)),
              (t.memoizedState = iu),
              e)
            : vc(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null))) return Q0(e, t, l, r, s, o, n);
  if (i) {
    (i = r.fallback), (l = t.mode), (o = e.child), (s = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = a), (t.deletions = null))
        : ((r = wn(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = wn(s, i)) : ((i = Vn(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l = l === null ? lu(n) : { baseLanes: l.baseLanes | n, cachePool: null, transitions: l.transitions }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = iu),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = wn(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function vc(e, t) {
  return (t = ql({ mode: "visible", children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function Li(e, t, n, r) {
  return (
    r !== null && nc(r),
    Ar(t, e.child, null, n),
    (e = vc(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Q0(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ia(Error(L(422)))), Li(e, t, l, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = ql({ mode: "visible", children: r.children }, o, 0, null)),
          (i = Vn(i, o, l, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && Ar(t, e.child, null, l),
          (t.child.memoizedState = lu(l)),
          (t.memoizedState = iu),
          i);
  if (!(t.mode & 1)) return Li(e, t, l, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error(L(419))), (r = ia(i, r, void 0)), Li(e, t, l, r);
  }
  if (((s = (l & e.childLanes) !== 0), et || s)) {
    if (((r = ze), r !== null)) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | l) ? 0 : o),
        o !== 0 && o !== i.retryLane && ((i.retryLane = o), qt(e, o), Mt(r, e, o, -1));
    }
    return Rc(), (r = ia(Error(L(421)))), Li(e, t, l, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128), (t.child = e.child), (t = s1.bind(null, e)), (o._reactRetry = t), null)
    : ((e = i.treeContext),
      (ct = gn(o.nextSibling)),
      (ft = t),
      (_e = !0),
      (It = null),
      e !== null && ((gt[yt++] = Qt), (gt[yt++] = Yt), (gt[yt++] = Wn), (Qt = e.id), (Yt = e.overflow), (Wn = t)),
      (t = vc(t, r.children)),
      (t.flags |= 4096),
      t);
}
function qf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), qa(e.return, t, n);
}
function la(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function im(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Ge(e, t, r.children, n), (r = Ee.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && qf(e, n, t);
        else if (e.tag === 19) qf(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((pe(Ee, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate), e !== null && Cl(e) === null && (o = n), (n = n.sibling);
        (n = o),
          n === null ? ((o = t.child), (t.child = null)) : ((o = n.sibling), (n.sibling = null)),
          la(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Cl(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        la(t, !0, n, null, i);
        break;
      case "together":
        la(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function qi(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function en(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (Kn |= t.lanes), !(n & t.childLanes))) return null;
  if (e !== null && t.child !== e.child) throw Error(L(153));
  if (t.child !== null) {
    for (e = t.child, n = wn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      (e = e.sibling), (n = n.sibling = wn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Y0(e, t, n) {
  switch (t.tag) {
    case 3:
      rm(t), Lr();
      break;
    case 5:
      Ph(t);
      break;
    case 1:
      rt(t.type) && _l(t);
      break;
    case 4:
      ac(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      pe(El, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (pe(Ee, Ee.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? om(e, t, n)
            : (pe(Ee, Ee.current & 1), (e = en(e, t, n)), e !== null ? e.sibling : null);
      pe(Ee, Ee.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return im(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        pe(Ee, Ee.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), tm(e, t, n);
  }
  return en(e, t, n);
}
var lm, su, sm, am;
lm = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
su = function () {};
sm = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Dn(Bt.current);
    var i = null;
    switch (n) {
      case "input":
        (o = La(e, o)), (r = La(e, r)), (i = []);
        break;
      case "select":
        (o = ke({}, o, { value: void 0 })), (r = ke({}, r, { value: void 0 })), (i = []);
        break;
      case "textarea":
        (o = Ia(e, o)), (r = Ia(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = yl);
    }
    Ma(n, r);
    var l;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var s = o[u];
          for (l in s) s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (jo.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (((s = o != null ? o[u] : void 0), r.hasOwnProperty(u) && a !== s && (a != null || s != null)))
        if (u === "style")
          if (s) {
            for (l in s) !s.hasOwnProperty(l) || (a && a.hasOwnProperty(l)) || (n || (n = {}), (n[l] = ""));
            for (l in a) a.hasOwnProperty(l) && s[l] !== a[l] && (n || (n = {}), (n[l] = a[l]));
          } else n || (i || (i = []), i.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (s = s ? s.__html : void 0),
              a != null && s !== a && (i = i || []).push(u, a))
            : u === "children"
              ? (typeof a != "string" && typeof a != "number") || (i = i || []).push(u, "" + a)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (jo.hasOwnProperty(u)
                  ? (a != null && u === "onScroll" && he("scroll", e), i || s === a || (i = []))
                  : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
am = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function lo(e, t) {
  if (!_e)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
        r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
    }
}
function We(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes), (r |= o.subtreeFlags), (r |= o.flags), (o.return = e), (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Z0(e, t, n) {
  var r = t.pendingProps;
  switch ((tc(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return We(t), null;
    case 1:
      return rt(t.type) && Sl(), We(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Pr(),
        ge(nt),
        ge(Ke),
        cc(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ti(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), It !== null && (mu(It), (It = null)))),
        su(e, t),
        We(t),
        null
      );
    case 5:
      uc(t);
      var o = Dn(Go.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        sm(e, t, n, r, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(L(166));
          return We(t), null;
        }
        if (((e = Dn(Bt.current)), Ti(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Ut] = t), (r[Ho] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              he("cancel", r), he("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              he("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < yo.length; o++) he(yo[o], r);
              break;
            case "source":
              he("error", r);
              break;
            case "img":
            case "image":
            case "link":
              he("error", r), he("load", r);
              break;
            case "details":
              he("toggle", r);
              break;
            case "input":
              af(r, i), he("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }), he("invalid", r);
              break;
            case "textarea":
              cf(r, i), he("invalid", r);
          }
          Ma(n, i), (o = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var s = i[l];
              l === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 && Ci(r.textContent, s, e), (o = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (i.suppressHydrationWarning !== !0 && Ci(r.textContent, s, e), (o = ["children", "" + s]))
                : jo.hasOwnProperty(l) && s != null && l === "onScroll" && he("scroll", r);
            }
          switch (n) {
            case "input":
              yi(r), uf(r, i, !0);
              break;
            case "textarea":
              yi(r), ff(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = yl);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Dp(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")), (e.innerHTML = "<script></script>"), (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                  ? (e = l.createElement(n, { is: r.is }))
                  : ((e = l.createElement(n)),
                    n === "select" && ((l = e), r.multiple ? (l.multiple = !0) : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[Ut] = t),
            (e[Ho] = r),
            lm(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = ja(n, r)), n)) {
              case "dialog":
                he("cancel", e), he("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                he("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < yo.length; o++) he(yo[o], e);
                o = r;
                break;
              case "source":
                he("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                he("error", e), he("load", e), (o = r);
                break;
              case "details":
                he("toggle", e), (o = r);
                break;
              case "input":
                af(e, r), (o = La(e, r)), he("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }), (o = ke({}, r, { value: void 0 })), he("invalid", e);
                break;
              case "textarea":
                cf(e, r), (o = Ia(e, r)), he("invalid", e);
                break;
              default:
                o = r;
            }
            Ma(n, o), (s = o);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var a = s[i];
                i === "style"
                  ? Vp(e, a)
                  : i === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && Op(e, a))
                    : i === "children"
                      ? typeof a == "string"
                        ? (n !== "textarea" || a !== "") && Do(e, a)
                        : typeof a == "number" && Do(e, "" + a)
                      : i !== "suppressContentEditableWarning" &&
                        i !== "suppressHydrationWarning" &&
                        i !== "autoFocus" &&
                        (jo.hasOwnProperty(i)
                          ? a != null && i === "onScroll" && he("scroll", e)
                          : a != null && Uu(e, i, a, l));
              }
            switch (n) {
              case "input":
                yi(e), uf(e, r, !1);
                break;
              case "textarea":
                yi(e), ff(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Rn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? _r(e, !!r.multiple, i, !1)
                    : r.defaultValue != null && _r(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = yl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return We(t), null;
    case 6:
      if (e && t.stateNode != null) am(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(L(166));
        if (((n = Dn(Go.current)), Dn(Bt.current), Ti(t))) {
          if (
            ((r = t.stateNode), (n = t.memoizedProps), (r[Ut] = t), (i = r.nodeValue !== n) && ((e = ft), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ci(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Ci(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[Ut] = t), (t.stateNode = r);
      }
      return We(t), null;
    case 13:
      if (
        (ge(Ee), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (_e && ct !== null && t.mode & 1 && !(t.flags & 128)) Ch(), Lr(), (t.flags |= 98560), (i = !1);
        else if (((i = Ti(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(L(318));
            if (((i = t.memoizedState), (i = i !== null ? i.dehydrated : null), !i)) throw Error(L(317));
            i[Ut] = t;
          } else Lr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          We(t), (i = !1);
        } else It !== null && (mu(It), (It = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192), t.mode & 1 && (e === null || Ee.current & 1 ? Pe === 0 && (Pe = 3) : Rc())),
          t.updateQueue !== null && (t.flags |= 4),
          We(t),
          null);
    case 4:
      return Pr(), su(e, t), e === null && bo(t.stateNode.containerInfo), We(t), null;
    case 10:
      return ic(t.type._context), We(t), null;
    case 17:
      return rt(t.type) && Sl(), We(t), null;
    case 19:
      if ((ge(Ee), (i = t.memoizedState), i === null)) return We(t), null;
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) lo(i, !1);
        else {
          if (Pe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = Cl(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    lo(i, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })),
                    (n = n.sibling);
                return pe(Ee, (Ee.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null && Te() > $r && ((t.flags |= 128), (r = !0), lo(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Cl(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              lo(i, !0),
              i.tail === null && i.tailMode === "hidden" && !l.alternate && !_e)
            )
              return We(t), null;
          } else
            2 * Te() - i.renderingStartTime > $r &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), lo(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = i.last), n !== null ? (n.sibling = l) : (t.child = l), (i.last = l));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Te()),
          (t.sibling = null),
          (n = Ee.current),
          pe(Ee, r ? (n & 1) | 2 : n & 1),
          t)
        : (We(t), null);
    case 22:
    case 23:
      return (
        wc(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1 ? ut & 1073741824 && (We(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : We(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(L(156, t.tag));
}
function X0(e, t) {
  switch ((tc(t), t.tag)) {
    case 1:
      return rt(t.type) && Sl(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 3:
      return (
        Pr(), ge(nt), ge(Ke), cc(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return uc(t), null;
    case 13:
      if ((ge(Ee), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(L(340));
        Lr();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return ge(Ee), null;
    case 4:
      return Pr(), null;
    case 10:
      return ic(t.type._context), null;
    case 22:
    case 23:
      return wc(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ai = !1,
  He = !1,
  J0 = typeof WeakSet == "function" ? WeakSet : Set,
  V = null;
function gr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Ce(e, t, r);
      }
    else n.current = null;
}
function au(e, t, n) {
  try {
    n();
  } catch (r) {
    Ce(e, t, r);
  }
}
var ed = !1;
function q0(e, t) {
  if (((Ha = ml), (e = ph()), qu(e))) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            s = -1,
            a = -1,
            u = 0,
            f = 0,
            d = e,
            m = null;
          t: for (;;) {
            for (
              var S;
              d !== n || (o !== 0 && d.nodeType !== 3) || (s = l + o),
                d !== i || (r !== 0 && d.nodeType !== 3) || (a = l + r),
                d.nodeType === 3 && (l += d.nodeValue.length),
                (S = d.firstChild) !== null;

            )
              (m = d), (d = S);
            for (;;) {
              if (d === e) break t;
              if ((m === n && ++u === o && (s = l), m === i && ++f === r && (a = l), (S = d.nextSibling) !== null))
                break;
              (d = m), (m = d.parentNode);
            }
            d = S;
          }
          n = s === -1 || a === -1 ? null : { start: s, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ka = { focusedElem: e, selectionRange: n }, ml = !1, V = t; V !== null; )
    if (((t = V), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (V = e);
    else
      for (; V !== null; ) {
        t = V;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var w = v.memoizedProps,
                    T = v.memoizedState,
                    h = t.stateNode,
                    c = h.getSnapshotBeforeUpdate(t.elementType === t.type ? w : At(t.type, w), T);
                  h.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(L(163));
            }
        } catch (E) {
          Ce(t, t.return, E);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (V = e);
          break;
        }
        V = t.return;
      }
  return (v = ed), (ed = !1), v;
}
function To(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && au(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Xl(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function uu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function um(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), um(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode), t !== null && (delete t[Ut], delete t[Ho], delete t[Ya], delete t[j0], delete t[D0])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function cm(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function td(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || cm(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function cu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = yl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (cu(e, t, n), e = e.sibling; e !== null; ) cu(e, t, n), (e = e.sibling);
}
function fu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (fu(e, t, n), e = e.sibling; e !== null; ) fu(e, t, n), (e = e.sibling);
}
var Ue = null,
  Pt = !1;
function rn(e, t, n) {
  for (n = n.child; n !== null; ) fm(e, t, n), (n = n.sibling);
}
function fm(e, t, n) {
  if (Ft && typeof Ft.onCommitFiberUnmount == "function")
    try {
      Ft.onCommitFiberUnmount(bl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      He || gr(n, t);
    case 6:
      var r = Ue,
        o = Pt;
      (Ue = null),
        rn(e, t, n),
        (Ue = r),
        (Pt = o),
        Ue !== null &&
          (Pt
            ? ((e = Ue), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ue.removeChild(n.stateNode));
      break;
    case 18:
      Ue !== null &&
        (Pt
          ? ((e = Ue), (n = n.stateNode), e.nodeType === 8 ? qs(e.parentNode, n) : e.nodeType === 1 && qs(e, n), Uo(e))
          : qs(Ue, n.stateNode));
      break;
    case 4:
      (r = Ue), (o = Pt), (Ue = n.stateNode.containerInfo), (Pt = !0), rn(e, t, n), (Ue = r), (Pt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!He && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        o = r = r.next;
        do {
          var i = o,
            l = i.destroy;
          (i = i.tag), l !== void 0 && (i & 2 || i & 4) && au(n, t, l), (o = o.next);
        } while (o !== r);
      }
      rn(e, t, n);
      break;
    case 1:
      if (!He && (gr(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
        try {
          (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
        } catch (s) {
          Ce(n, t, s);
        }
      rn(e, t, n);
      break;
    case 21:
      rn(e, t, n);
      break;
    case 22:
      n.mode & 1 ? ((He = (r = He) || n.memoizedState !== null), rn(e, t, n), (He = r)) : rn(e, t, n);
      break;
    default:
      rn(e, t, n);
  }
}
function nd(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new J0()),
      t.forEach(function (r) {
        var o = a1.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function Nt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          l = t,
          s = l;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (Ue = s.stateNode), (Pt = !1);
              break e;
            case 3:
              (Ue = s.stateNode.containerInfo), (Pt = !0);
              break e;
            case 4:
              (Ue = s.stateNode.containerInfo), (Pt = !0);
              break e;
          }
          s = s.return;
        }
        if (Ue === null) throw Error(L(160));
        fm(i, l, o), (Ue = null), (Pt = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (u) {
        Ce(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) dm(t, e), (t = t.sibling);
}
function dm(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Nt(t, e), Ot(e), r & 4)) {
        try {
          To(3, e, e.return), Xl(3, e);
        } catch (w) {
          Ce(e, e.return, w);
        }
        try {
          To(5, e, e.return);
        } catch (w) {
          Ce(e, e.return, w);
        }
      }
      break;
    case 1:
      Nt(t, e), Ot(e), r & 512 && n !== null && gr(n, n.return);
      break;
    case 5:
      if ((Nt(t, e), Ot(e), r & 512 && n !== null && gr(n, n.return), e.flags & 32)) {
        var o = e.stateNode;
        try {
          Do(o, "");
        } catch (w) {
          Ce(e, e.return, w);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          s = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            s === "input" && i.type === "radio" && i.name != null && Mp(o, i), ja(s, l);
            var u = ja(s, i);
            for (l = 0; l < a.length; l += 2) {
              var f = a[l],
                d = a[l + 1];
              f === "style"
                ? Vp(o, d)
                : f === "dangerouslySetInnerHTML"
                  ? Op(o, d)
                  : f === "children"
                    ? Do(o, d)
                    : Uu(o, f, d, u);
            }
            switch (s) {
              case "input":
                Aa(o, i);
                break;
              case "textarea":
                jp(o, i);
                break;
              case "select":
                var m = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var S = i.value;
                S != null
                  ? _r(o, !!i.multiple, S, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? _r(o, !!i.multiple, i.defaultValue, !0)
                      : _r(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Ho] = i;
          } catch (w) {
            Ce(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((Nt(t, e), Ot(e), r & 4)) {
        if (e.stateNode === null) throw Error(L(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (w) {
          Ce(e, e.return, w);
        }
      }
      break;
    case 3:
      if ((Nt(t, e), Ot(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          Uo(t.containerInfo);
        } catch (w) {
          Ce(e, e.return, w);
        }
      break;
    case 4:
      Nt(t, e), Ot(e);
      break;
    case 13:
      Nt(t, e),
        Ot(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i || (o.alternate !== null && o.alternate.memoizedState !== null) || (Sc = Te())),
        r & 4 && nd(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((He = (u = He) || f), Nt(t, e), (He = u)) : Nt(t, e),
        Ot(e),
        r & 8192)
      ) {
        if (((u = e.memoizedState !== null), (e.stateNode.isHidden = u) && !f && e.mode & 1))
          for (V = e, f = e.child; f !== null; ) {
            for (d = V = f; V !== null; ) {
              switch (((m = V), (S = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  To(4, m, m.return);
                  break;
                case 1:
                  gr(m, m.return);
                  var v = m.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r), (v.props = t.memoizedProps), (v.state = t.memoizedState), v.componentWillUnmount();
                    } catch (w) {
                      Ce(r, n, w);
                    }
                  }
                  break;
                case 5:
                  gr(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    od(d);
                    continue;
                  }
              }
              S !== null ? ((S.return = m), (V = S)) : od(d);
            }
            f = f.sibling;
          }
        e: for (f = null, d = e; ; ) {
          if (d.tag === 5) {
            if (f === null) {
              f = d;
              try {
                (o = d.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((s = d.stateNode),
                      (a = d.memoizedProps.style),
                      (l = a != null && a.hasOwnProperty("display") ? a.display : null),
                      (s.style.display = zp("display", l)));
              } catch (w) {
                Ce(e, e.return, w);
              }
            }
          } else if (d.tag === 6) {
            if (f === null)
              try {
                d.stateNode.nodeValue = u ? "" : d.memoizedProps;
              } catch (w) {
                Ce(e, e.return, w);
              }
          } else if (((d.tag !== 22 && d.tag !== 23) || d.memoizedState === null || d === e) && d.child !== null) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            f === d && (f = null), (d = d.return);
          }
          f === d && (f = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      Nt(t, e), Ot(e), r & 4 && nd(e);
      break;
    case 21:
      break;
    default:
      Nt(t, e), Ot(e);
  }
}
function Ot(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (cm(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(L(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Do(o, ""), (r.flags &= -33));
          var i = td(e);
          fu(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            s = td(e);
          cu(e, s, l);
          break;
        default:
          throw Error(L(161));
      }
    } catch (a) {
      Ce(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function e1(e, t, n) {
  (V = e), pm(e);
}
function pm(e, t, n) {
  for (var r = (e.mode & 1) !== 0; V !== null; ) {
    var o = V,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || Ai;
      if (!l) {
        var s = o.alternate,
          a = (s !== null && s.memoizedState !== null) || He;
        s = Ai;
        var u = He;
        if (((Ai = l), (He = a) && !u))
          for (V = o; V !== null; )
            (l = V),
              (a = l.child),
              l.tag === 22 && l.memoizedState !== null ? id(o) : a !== null ? ((a.return = l), (V = a)) : id(o);
        for (; i !== null; ) (V = i), pm(i), (i = i.sibling);
        (V = o), (Ai = s), (He = u);
      }
      rd(e);
    } else o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (V = i)) : rd(e);
  }
}
function rd(e) {
  for (; V !== null; ) {
    var t = V;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              He || Xl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !He)
                if (n === null) r.componentDidMount();
                else {
                  var o = t.elementType === t.type ? n.memoizedProps : At(t.type, n.memoizedProps);
                  r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var i = t.updateQueue;
              i !== null && Ff(t, i, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Ff(t, l, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var f = u.memoizedState;
                  if (f !== null) {
                    var d = f.dehydrated;
                    d !== null && Uo(d);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(L(163));
          }
        He || (t.flags & 512 && uu(t));
      } catch (m) {
        Ce(t, t.return, m);
      }
    }
    if (t === e) {
      V = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (V = n);
      break;
    }
    V = t.return;
  }
}
function od(e) {
  for (; V !== null; ) {
    var t = V;
    if (t === e) {
      V = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (V = n);
      break;
    }
    V = t.return;
  }
}
function id(e) {
  for (; V !== null; ) {
    var t = V;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Xl(4, t);
          } catch (a) {
            Ce(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Ce(t, o, a);
            }
          }
          var i = t.return;
          try {
            uu(t);
          } catch (a) {
            Ce(t, i, a);
          }
          break;
        case 5:
          var l = t.return;
          try {
            uu(t);
          } catch (a) {
            Ce(t, l, a);
          }
      }
    } catch (a) {
      Ce(t, t.return, a);
    }
    if (t === e) {
      V = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (V = s);
      break;
    }
    V = t.return;
  }
}
var t1 = Math.ceil,
  Ll = tn.ReactCurrentDispatcher,
  gc = tn.ReactCurrentOwner,
  _t = tn.ReactCurrentBatchConfig,
  ie = 0,
  ze = null,
  Le = null,
  Fe = 0,
  ut = 0,
  yr = kn(0),
  Pe = 0,
  Xo = null,
  Kn = 0,
  Jl = 0,
  yc = 0,
  No = null,
  qe = null,
  Sc = 0,
  $r = 1 / 0,
  Ht = null,
  Al = !1,
  du = null,
  Sn = null,
  Pi = !1,
  dn = null,
  Pl = 0,
  Lo = 0,
  pu = null,
  el = -1,
  tl = 0;
function Qe() {
  return ie & 6 ? Te() : el !== -1 ? el : (el = Te());
}
function _n(e) {
  return e.mode & 1
    ? ie & 2 && Fe !== 0
      ? Fe & -Fe
      : z0.transition !== null
        ? (tl === 0 && (tl = Xp()), tl)
        : ((e = ue), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : oh(e.type))), e)
    : 1;
}
function Mt(e, t, n, r) {
  if (50 < Lo) throw ((Lo = 0), (pu = null), Error(L(185)));
  ni(e, n, r),
    (!(ie & 2) || e !== ze) &&
      (e === ze && (!(ie & 2) && (Jl |= n), Pe === 4 && cn(e, Fe)),
      ot(e, r),
      n === 1 && ie === 0 && !(t.mode & 1) && (($r = Te() + 500), Ql && Cn()));
}
function ot(e, t) {
  var n = e.callbackNode;
  zy(e, t);
  var r = hl(e, e === ze ? Fe : 0);
  if (r === 0) n !== null && hf(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && hf(n), t === 1))
      e.tag === 0 ? O0(ld.bind(null, e)) : Eh(ld.bind(null, e)),
        $0(function () {
          !(ie & 6) && Cn();
        }),
        (n = null);
    else {
      switch (Jp(r)) {
        case 1:
          n = Hu;
          break;
        case 4:
          n = Yp;
          break;
        case 16:
          n = pl;
          break;
        case 536870912:
          n = Zp;
          break;
        default:
          n = pl;
      }
      n = wm(n, hm.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function hm(e, t) {
  if (((el = -1), (tl = 0), ie & 6)) throw Error(L(327));
  var n = e.callbackNode;
  if (kr() && e.callbackNode !== n) return null;
  var r = hl(e, e === ze ? Fe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Il(e, r);
  else {
    t = r;
    var o = ie;
    ie |= 2;
    var i = vm();
    (ze !== e || Fe !== t) && ((Ht = null), ($r = Te() + 500), zn(e, t));
    do
      try {
        o1();
        break;
      } catch (s) {
        mm(e, s);
      }
    while (!0);
    oc(), (Ll.current = i), (ie = o), Le !== null ? (t = 0) : ((ze = null), (Fe = 0), (t = Pe));
  }
  if (t !== 0) {
    if ((t === 2 && ((o = Ua(e)), o !== 0 && ((r = o), (t = hu(e, o)))), t === 1))
      throw ((n = Xo), zn(e, 0), cn(e, r), ot(e, Te()), n);
    if (t === 6) cn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !n1(o) &&
          ((t = Il(e, r)), t === 2 && ((i = Ua(e)), i !== 0 && ((r = i), (t = hu(e, i)))), t === 1))
      )
        throw ((n = Xo), zn(e, 0), cn(e, r), ot(e, Te()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(L(345));
        case 2:
          Pn(e, qe, Ht);
          break;
        case 3:
          if ((cn(e, r), (r & 130023424) === r && ((t = Sc + 500 - Te()), 10 < t))) {
            if (hl(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Qe(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Qa(Pn.bind(null, e, qe, Ht), t);
            break;
          }
          Pn(e, qe, Ht);
          break;
        case 4:
          if ((cn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - $t(r);
            (i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i);
          }
          if (
            ((r = o),
            (r = Te() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * t1(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Qa(Pn.bind(null, e, qe, Ht), r);
            break;
          }
          Pn(e, qe, Ht);
          break;
        case 5:
          Pn(e, qe, Ht);
          break;
        default:
          throw Error(L(329));
      }
    }
  }
  return ot(e, Te()), e.callbackNode === n ? hm.bind(null, e) : null;
}
function hu(e, t) {
  var n = No;
  return (
    e.current.memoizedState.isDehydrated && (zn(e, t).flags |= 256),
    (e = Il(e, t)),
    e !== 2 && ((t = qe), (qe = n), t !== null && mu(t)),
    e
  );
}
function mu(e) {
  qe === null ? (qe = e) : qe.push.apply(qe, e);
}
function n1(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Dt(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function cn(e, t) {
  for (t &= ~yc, t &= ~Jl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - $t(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function ld(e) {
  if (ie & 6) throw Error(L(327));
  kr();
  var t = hl(e, 0);
  if (!(t & 1)) return ot(e, Te()), null;
  var n = Il(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ua(e);
    r !== 0 && ((t = r), (n = hu(e, r)));
  }
  if (n === 1) throw ((n = Xo), zn(e, 0), cn(e, t), ot(e, Te()), n);
  if (n === 6) throw Error(L(345));
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), Pn(e, qe, Ht), ot(e, Te()), null;
}
function _c(e, t) {
  var n = ie;
  ie |= 1;
  try {
    return e(t);
  } finally {
    (ie = n), ie === 0 && (($r = Te() + 500), Ql && Cn());
  }
}
function Gn(e) {
  dn !== null && dn.tag === 0 && !(ie & 6) && kr();
  var t = ie;
  ie |= 1;
  var n = _t.transition,
    r = ue;
  try {
    if (((_t.transition = null), (ue = 1), e)) return e();
  } finally {
    (ue = r), (_t.transition = n), (ie = t), !(ie & 6) && Cn();
  }
}
function wc() {
  (ut = yr.current), ge(yr);
}
function zn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), I0(n)), Le !== null))
    for (n = Le.return; n !== null; ) {
      var r = n;
      switch ((tc(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Sl();
          break;
        case 3:
          Pr(), ge(nt), ge(Ke), cc();
          break;
        case 5:
          uc(r);
          break;
        case 4:
          Pr();
          break;
        case 13:
          ge(Ee);
          break;
        case 19:
          ge(Ee);
          break;
        case 10:
          ic(r.type._context);
          break;
        case 22:
        case 23:
          wc();
      }
      n = n.return;
    }
  if (
    ((ze = e),
    (Le = e = wn(e.current, null)),
    (Fe = ut = t),
    (Pe = 0),
    (Xo = null),
    (yc = Jl = Kn = 0),
    (qe = No = null),
    jn !== null)
  ) {
    for (t = 0; t < jn.length; t++)
      if (((n = jn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = o), (r.next = l);
        }
        n.pending = r;
      }
    jn = null;
  }
  return e;
}
function mm(e, t) {
  do {
    var n = Le;
    try {
      if ((oc(), (Xi.current = Nl), Tl)) {
        for (var r = xe.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Tl = !1;
      }
      if (
        ((Hn = 0), (De = Ae = xe = null), (Co = !1), (Qo = 0), (gc.current = null), n === null || n.return === null)
      ) {
        (Pe = 1), (Xo = t), (Le = null);
        break;
      }
      e: {
        var i = e,
          l = n.return,
          s = n,
          a = t;
        if (((t = Fe), (s.flags |= 32768), a !== null && typeof a == "object" && typeof a.then == "function")) {
          var u = a,
            f = s,
            d = f.tag;
          if (!(f.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var m = f.alternate;
            m
              ? ((f.updateQueue = m.updateQueue), (f.memoizedState = m.memoizedState), (f.lanes = m.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var S = Gf(l);
          if (S !== null) {
            (S.flags &= -257), Qf(S, l, s, i, t), S.mode & 1 && Kf(i, u, t), (t = S), (a = u);
            var v = t.updateQueue;
            if (v === null) {
              var w = new Set();
              w.add(a), (t.updateQueue = w);
            } else v.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Kf(i, u, t), Rc();
              break e;
            }
            a = Error(L(426));
          }
        } else if (_e && s.mode & 1) {
          var T = Gf(l);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256), Qf(T, l, s, i, t), nc(Ir(a, s));
            break e;
          }
        }
        (i = a = Ir(a, s)), Pe !== 4 && (Pe = 2), No === null ? (No = [i]) : No.push(i), (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var h = Jh(i, a, t);
              Uf(i, h);
              break e;
            case 1:
              s = a;
              var c = i.type,
                p = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (p !== null && typeof p.componentDidCatch == "function" && (Sn === null || !Sn.has(p))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var E = qh(i, s, t);
                Uf(i, E);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      ym(n);
    } catch (k) {
      (t = k), Le === n && n !== null && (Le = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function vm() {
  var e = Ll.current;
  return (Ll.current = Nl), e === null ? Nl : e;
}
function Rc() {
  (Pe === 0 || Pe === 3 || Pe === 2) && (Pe = 4), ze === null || (!(Kn & 268435455) && !(Jl & 268435455)) || cn(ze, Fe);
}
function Il(e, t) {
  var n = ie;
  ie |= 2;
  var r = vm();
  (ze !== e || Fe !== t) && ((Ht = null), zn(e, t));
  do
    try {
      r1();
      break;
    } catch (o) {
      mm(e, o);
    }
  while (!0);
  if ((oc(), (ie = n), (Ll.current = r), Le !== null)) throw Error(L(261));
  return (ze = null), (Fe = 0), Pe;
}
function r1() {
  for (; Le !== null; ) gm(Le);
}
function o1() {
  for (; Le !== null && !Ly(); ) gm(Le);
}
function gm(e) {
  var t = _m(e.alternate, e, ut);
  (e.memoizedProps = e.pendingProps), t === null ? ym(e) : (Le = t), (gc.current = null);
}
function ym(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = X0(n, t)), n !== null)) {
        (n.flags &= 32767), (Le = n);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Pe = 6), (Le = null);
        return;
      }
    } else if (((n = Z0(n, t, ut)), n !== null)) {
      Le = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Le = t;
      return;
    }
    Le = t = e;
  } while (t !== null);
  Pe === 0 && (Pe = 5);
}
function Pn(e, t, n) {
  var r = ue,
    o = _t.transition;
  try {
    (_t.transition = null), (ue = 1), i1(e, t, n, r);
  } finally {
    (_t.transition = o), (ue = r);
  }
  return null;
}
function i1(e, t, n, r) {
  do kr();
  while (dn !== null);
  if (ie & 6) throw Error(L(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(L(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Vy(e, i),
    e === ze && ((Le = ze = null), (Fe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Pi ||
      ((Pi = !0),
      wm(pl, function () {
        return kr(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = _t.transition), (_t.transition = null);
    var l = ue;
    ue = 1;
    var s = ie;
    (ie |= 4),
      (gc.current = null),
      q0(e, n),
      dm(n, e),
      k0(Ka),
      (ml = !!Ha),
      (Ka = Ha = null),
      (e.current = n),
      e1(n),
      Ay(),
      (ie = s),
      (ue = l),
      (_t.transition = i);
  } else e.current = n;
  if (
    (Pi && ((Pi = !1), (dn = e), (Pl = o)),
    (i = e.pendingLanes),
    i === 0 && (Sn = null),
    $y(n.stateNode),
    ot(e, Te()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (Al) throw ((Al = !1), (e = du), (du = null), e);
  return (
    Pl & 1 && e.tag !== 0 && kr(),
    (i = e.pendingLanes),
    i & 1 ? (e === pu ? Lo++ : ((Lo = 0), (pu = e))) : (Lo = 0),
    Cn(),
    null
  );
}
function kr() {
  if (dn !== null) {
    var e = Jp(Pl),
      t = _t.transition,
      n = ue;
    try {
      if (((_t.transition = null), (ue = 16 > e ? 16 : e), dn === null)) var r = !1;
      else {
        if (((e = dn), (dn = null), (Pl = 0), ie & 6)) throw Error(L(331));
        var o = ie;
        for (ie |= 4, V = e.current; V !== null; ) {
          var i = V,
            l = i.child;
          if (V.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var a = 0; a < s.length; a++) {
                var u = s[a];
                for (V = u; V !== null; ) {
                  var f = V;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      To(8, f, i);
                  }
                  var d = f.child;
                  if (d !== null) (d.return = f), (V = d);
                  else
                    for (; V !== null; ) {
                      f = V;
                      var m = f.sibling,
                        S = f.return;
                      if ((um(f), f === u)) {
                        V = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = S), (V = m);
                        break;
                      }
                      V = S;
                    }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var w = v.child;
                if (w !== null) {
                  v.child = null;
                  do {
                    var T = w.sibling;
                    (w.sibling = null), (w = T);
                  } while (w !== null);
                }
              }
              V = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (V = l);
          else
            e: for (; V !== null; ) {
              if (((i = V), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    To(9, i, i.return);
                }
              var h = i.sibling;
              if (h !== null) {
                (h.return = i.return), (V = h);
                break e;
              }
              V = i.return;
            }
        }
        var c = e.current;
        for (V = c; V !== null; ) {
          l = V;
          var p = l.child;
          if (l.subtreeFlags & 2064 && p !== null) (p.return = l), (V = p);
          else
            e: for (l = c; V !== null; ) {
              if (((s = V), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xl(9, s);
                  }
                } catch (k) {
                  Ce(s, s.return, k);
                }
              if (s === l) {
                V = null;
                break e;
              }
              var E = s.sibling;
              if (E !== null) {
                (E.return = s.return), (V = E);
                break e;
              }
              V = s.return;
            }
        }
        if (((ie = o), Cn(), Ft && typeof Ft.onPostCommitFiberRoot == "function"))
          try {
            Ft.onPostCommitFiberRoot(bl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ue = n), (_t.transition = t);
    }
  }
  return !1;
}
function sd(e, t, n) {
  (t = Ir(n, t)), (t = Jh(e, t, 1)), (e = yn(e, t, 1)), (t = Qe()), e !== null && (ni(e, 1, t), ot(e, t));
}
function Ce(e, t, n) {
  if (e.tag === 3) sd(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        sd(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" && (Sn === null || !Sn.has(r)))
        ) {
          (e = Ir(n, e)), (e = qh(t, e, 1)), (t = yn(t, e, 1)), (e = Qe()), t !== null && (ni(t, 1, e), ot(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function l1(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Qe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ze === e &&
      (Fe & n) === n &&
      (Pe === 4 || (Pe === 3 && (Fe & 130023424) === Fe && 500 > Te() - Sc) ? zn(e, 0) : (yc |= n)),
    ot(e, t);
}
function Sm(e, t) {
  t === 0 && (e.mode & 1 ? ((t = wi), (wi <<= 1), !(wi & 130023424) && (wi = 4194304)) : (t = 1));
  var n = Qe();
  (e = qt(e, t)), e !== null && (ni(e, t, n), ot(e, n));
}
function s1(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Sm(e, n);
}
function a1(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(L(314));
  }
  r !== null && r.delete(t), Sm(e, n);
}
var _m;
_m = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || nt.current) et = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (et = !1), Y0(e, t, n);
      et = !!(e.flags & 131072);
    }
  else (et = !1), _e && t.flags & 1048576 && xh(t, Rl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      qi(e, t), (e = t.pendingProps);
      var o = Nr(t, Ke.current);
      xr(t, n), (o = dc(null, t, r, e, o, n));
      var i = pc();
      return (
        (t.flags |= 1),
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            rt(r) ? ((i = !0), _l(t)) : (i = !1),
            (t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
            sc(t),
            (o.updater = Zl),
            (t.stateNode = o),
            (o._reactInternals = t),
            tu(t, r, e, n),
            (t = ou(null, t, r, !0, i, n)))
          : ((t.tag = 0), _e && i && ec(t), Ge(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (qi(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = c1(r)),
          (e = At(r, e)),
          o)
        ) {
          case 0:
            t = ru(null, t, r, e, n);
            break e;
          case 1:
            t = Xf(null, t, r, e, n);
            break e;
          case 11:
            t = Yf(null, t, r, e, n);
            break e;
          case 14:
            t = Zf(null, t, r, At(r.type, e), n);
            break e;
        }
        throw Error(L(306, r, ""));
      }
      return t;
    case 0:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : At(r, o)), ru(e, t, r, o, n);
    case 1:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : At(r, o)), Xf(e, t, r, o, n);
    case 3:
      e: {
        if ((rm(t), e === null)) throw Error(L(387));
        (r = t.pendingProps), (i = t.memoizedState), (o = i.element), Ah(e, t), kl(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = Ir(Error(L(423)), t)), (t = Jf(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Ir(Error(L(424)), t)), (t = Jf(e, t, r, n, o));
            break e;
          } else
            for (
              ct = gn(t.stateNode.containerInfo.firstChild),
                ft = t,
                _e = !0,
                It = null,
                n = Nh(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Lr(), r === o)) {
            t = en(e, t, n);
            break e;
          }
          Ge(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Ph(t),
        e === null && Ja(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        Ga(r, o) ? (l = null) : i !== null && Ga(r, i) && (t.flags |= 32),
        nm(e, t),
        Ge(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && Ja(t), null;
    case 13:
      return om(e, t, n);
    case 4:
      return (
        ac(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Ar(t, null, r, n)) : Ge(e, t, r, n),
        t.child
      );
    case 11:
      return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : At(r, o)), Yf(e, t, r, o, n);
    case 7:
      return Ge(e, t, t.pendingProps, n), t.child;
    case 8:
      return Ge(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Ge(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value),
          pe(El, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (Dt(i.value, l)) {
            if (i.children === o.children && !nt.current) {
              t = en(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                l = i.child;
                for (var a = s.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = Zt(-1, n & -n)), (a.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var f = u.pending;
                        f === null ? (a.next = a) : ((a.next = f.next), (f.next = a)), (u.pending = a);
                      }
                    }
                    (i.lanes |= n), (a = i.alternate), a !== null && (a.lanes |= n), qa(i.return, n, t), (s.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(L(341));
                (l.lanes |= n), (s = l.alternate), s !== null && (s.lanes |= n), qa(l, n, t), (l = i.sibling);
              } else l = i.child;
              if (l !== null) l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((i = l.sibling), i !== null)) {
                    (i.return = l.return), (l = i);
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        Ge(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        xr(t, n),
        (o = Rt(o)),
        (r = r(o)),
        (t.flags |= 1),
        Ge(e, t, r, n),
        t.child
      );
    case 14:
      return (r = t.type), (o = At(r, t.pendingProps)), (o = At(r.type, o)), Zf(e, t, r, o, n);
    case 15:
      return em(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : At(r, o)),
        qi(e, t),
        (t.tag = 1),
        rt(r) ? ((e = !0), _l(t)) : (e = !1),
        xr(t, n),
        Xh(t, r, o),
        tu(t, r, o, n),
        ou(null, t, r, !0, e, n)
      );
    case 19:
      return im(e, t, n);
    case 22:
      return tm(e, t, n);
  }
  throw Error(L(156, t.tag));
};
function wm(e, t) {
  return Qp(e, t);
}
function u1(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function St(e, t, n, r) {
  return new u1(e, t, n, r);
}
function Ec(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function c1(e) {
  if (typeof e == "function") return Ec(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Bu)) return 11;
    if (e === bu) return 14;
  }
  return 2;
}
function wn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = St(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function nl(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == "function")) Ec(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case ar:
        return Vn(n.children, o, i, t);
      case Fu:
        (l = 8), (o |= 8);
        break;
      case ka:
        return (e = St(12, n, t, o | 2)), (e.elementType = ka), (e.lanes = i), e;
      case Ca:
        return (e = St(13, n, t, o)), (e.elementType = Ca), (e.lanes = i), e;
      case Ta:
        return (e = St(19, n, t, o)), (e.elementType = Ta), (e.lanes = i), e;
      case Pp:
        return ql(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Lp:
              l = 10;
              break e;
            case Ap:
              l = 9;
              break e;
            case Bu:
              l = 11;
              break e;
            case bu:
              l = 14;
              break e;
            case ln:
              (l = 16), (r = null);
              break e;
          }
        throw Error(L(130, e == null ? e : typeof e, ""));
    }
  return (t = St(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t;
}
function Vn(e, t, n, r) {
  return (e = St(7, e, r, t)), (e.lanes = n), e;
}
function ql(e, t, n, r) {
  return (e = St(22, e, r, t)), (e.elementType = Pp), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function sa(e, t, n) {
  return (e = St(6, e, null, t)), (e.lanes = n), e;
}
function aa(e, t, n) {
  return (
    (t = St(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
    t
  );
}
function f1(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Bs(0)),
    (this.expirationTimes = Bs(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Bs(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function xc(e, t, n, r, o, i, l, s, a) {
  return (
    (e = new f1(e, t, n, s, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = St(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    sc(i),
    e
  );
}
function d1(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: sr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Rm(e) {
  if (!e) return En;
  e = e._reactInternals;
  e: {
    if (Xn(e) !== e || e.tag !== 1) throw Error(L(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (rt(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(L(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (rt(n)) return Rh(e, n, t);
  }
  return t;
}
function Em(e, t, n, r, o, i, l, s, a) {
  return (
    (e = xc(n, r, !0, e, o, i, l, s, a)),
    (e.context = Rm(null)),
    (n = e.current),
    (r = Qe()),
    (o = _n(n)),
    (i = Zt(r, o)),
    (i.callback = t ?? null),
    yn(n, i, o),
    (e.current.lanes = o),
    ni(e, o, r),
    ot(e, r),
    e
  );
}
function es(e, t, n, r) {
  var o = t.current,
    i = Qe(),
    l = _n(o);
  return (
    (n = Rm(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Zt(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = yn(o, t, l)),
    e !== null && (Mt(e, o, l, i), Zi(e, o, l)),
    l
  );
}
function $l(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ad(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function kc(e, t) {
  ad(e, t), (e = e.alternate) && ad(e, t);
}
function p1() {
  return null;
}
var xm =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Cc(e) {
  this._internalRoot = e;
}
ts.prototype.render = Cc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(L(409));
  es(e, t, null, null);
};
ts.prototype.unmount = Cc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Gn(function () {
      es(null, e, null, null);
    }),
      (t[Jt] = null);
  }
};
function ts(e) {
  this._internalRoot = e;
}
ts.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = th();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < un.length && t !== 0 && t < un[n].priority; n++);
    un.splice(n, 0, e), n === 0 && rh(e);
  }
};
function Tc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ns(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function ud() {}
function h1(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = $l(l);
        i.call(u);
      };
    }
    var l = Em(t, r, e, 0, null, !1, !1, "", ud);
    return (e._reactRootContainer = l), (e[Jt] = l.current), bo(e.nodeType === 8 ? e.parentNode : e), Gn(), l;
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var u = $l(a);
      s.call(u);
    };
  }
  var a = xc(e, 0, !1, null, null, !1, !1, "", ud);
  return (
    (e._reactRootContainer = a),
    (e[Jt] = a.current),
    bo(e.nodeType === 8 ? e.parentNode : e),
    Gn(function () {
      es(t, a, n, r);
    }),
    a
  );
}
function rs(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var a = $l(l);
        s.call(a);
      };
    }
    es(t, l, e, o);
  } else l = h1(n, t, e, o, r);
  return $l(l);
}
qp = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = go(t.pendingLanes);
        n !== 0 && (Ku(t, n | 1), ot(t, Te()), !(ie & 6) && (($r = Te() + 500), Cn()));
      }
      break;
    case 13:
      Gn(function () {
        var r = qt(e, 1);
        if (r !== null) {
          var o = Qe();
          Mt(r, e, 1, o);
        }
      }),
        kc(e, 1);
  }
};
Gu = function (e) {
  if (e.tag === 13) {
    var t = qt(e, 134217728);
    if (t !== null) {
      var n = Qe();
      Mt(t, e, 134217728, n);
    }
    kc(e, 134217728);
  }
};
eh = function (e) {
  if (e.tag === 13) {
    var t = _n(e),
      n = qt(e, t);
    if (n !== null) {
      var r = Qe();
      Mt(n, e, t, r);
    }
    kc(e, t);
  }
};
th = function () {
  return ue;
};
nh = function (e, t) {
  var n = ue;
  try {
    return (ue = e), t();
  } finally {
    ue = n;
  }
};
Oa = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Aa(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Gl(r);
            if (!o) throw Error(L(90));
            $p(r), Aa(r, o);
          }
        }
      }
      break;
    case "textarea":
      jp(e, n);
      break;
    case "select":
      (t = n.value), t != null && _r(e, !!n.multiple, t, !1);
  }
};
Bp = _c;
bp = Gn;
var m1 = { usingClientEntryPoint: !1, Events: [oi, dr, Gl, Up, Fp, _c] },
  so = { findFiberByHostInstance: Mn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" },
  v1 = {
    bundleType: so.bundleType,
    version: so.version,
    rendererPackageName: so.rendererPackageName,
    rendererConfig: so.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: tn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Kp(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: so.findFiberByHostInstance || p1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ii = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ii.isDisabled && Ii.supportsFiber)
    try {
      (bl = Ii.inject(v1)), (Ft = Ii);
    } catch {}
}
pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = m1;
pt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Tc(t)) throw Error(L(200));
  return d1(e, t, null, n);
};
pt.createRoot = function (e, t) {
  if (!Tc(e)) throw Error(L(299));
  var n = !1,
    r = "",
    o = xm;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = xc(e, 1, !1, null, null, n, !1, r, o)),
    (e[Jt] = t.current),
    bo(e.nodeType === 8 ? e.parentNode : e),
    new Cc(t)
  );
};
pt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(L(188)) : ((e = Object.keys(e).join(",")), Error(L(268, e)));
  return (e = Kp(t)), (e = e === null ? null : e.stateNode), e;
};
pt.flushSync = function (e) {
  return Gn(e);
};
pt.hydrate = function (e, t, n) {
  if (!ns(t)) throw Error(L(200));
  return rs(null, e, t, !0, n);
};
pt.hydrateRoot = function (e, t, n) {
  if (!Tc(e)) throw Error(L(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    l = xm;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = Em(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[Jt] = t.current),
    bo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new ts(t);
};
pt.render = function (e, t, n) {
  if (!ns(t)) throw Error(L(200));
  return rs(null, e, t, !1, n);
};
pt.unmountComponentAtNode = function (e) {
  if (!ns(e)) throw Error(L(40));
  return e._reactRootContainer
    ? (Gn(function () {
        rs(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Jt] = null);
        });
      }),
      !0)
    : !1;
};
pt.unstable_batchedUpdates = _c;
pt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!ns(n)) throw Error(L(200));
  if (e == null || e._reactInternals === void 0) throw Error(L(38));
  return rs(e, t, n, !1, r);
};
pt.version = "18.3.1-next-f1338f8080-20240426";
function km() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(km);
    } catch (e) {
      console.error(e);
    }
}
km(), (kp.exports = pt);
var Cm = kp.exports;
const g1 = pp(Cm);
var cd = Cm;
(Ea.createRoot = cd.createRoot), (Ea.hydrateRoot = cd.hydrateRoot);
/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Jo() {
  return (
    (Jo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Jo.apply(this, arguments)
  );
}
var pn;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(pn || (pn = {}));
const fd = "popstate";
function y1(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: l, hash: s } = r.location;
    return vu(
      "",
      { pathname: i, search: l, hash: s },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : Nm(o);
  }
  return _1(t, n, null, e);
}
function Ie(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Tm(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function S1() {
  return Math.random().toString(36).substr(2, 8);
}
function dd(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function vu(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Jo({ pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" }, typeof t == "string" ? Gr(t) : t, {
      state: n,
      key: (t && t.key) || r || S1(),
    })
  );
}
function Nm(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Gr(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
  }
  return t;
}
function _1(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    l = o.history,
    s = pn.Pop,
    a = null,
    u = f();
  u == null && ((u = 0), l.replaceState(Jo({}, l.state, { idx: u }), ""));
  function f() {
    return (l.state || { idx: null }).idx;
  }
  function d() {
    s = pn.Pop;
    let T = f(),
      h = T == null ? null : T - u;
    (u = T), a && a({ action: s, location: w.location, delta: h });
  }
  function m(T, h) {
    s = pn.Push;
    let c = vu(w.location, T, h);
    u = f() + 1;
    let p = dd(c, u),
      E = w.createHref(c);
    try {
      l.pushState(p, "", E);
    } catch (k) {
      if (k instanceof DOMException && k.name === "DataCloneError") throw k;
      o.location.assign(E);
    }
    i && a && a({ action: s, location: w.location, delta: 1 });
  }
  function S(T, h) {
    s = pn.Replace;
    let c = vu(w.location, T, h);
    u = f();
    let p = dd(c, u),
      E = w.createHref(c);
    l.replaceState(p, "", E), i && a && a({ action: s, location: w.location, delta: 0 });
  }
  function v(T) {
    let h = o.location.origin !== "null" ? o.location.origin : o.location.href,
      c = typeof T == "string" ? T : Nm(T);
    return (
      (c = c.replace(/ $/, "%20")),
      Ie(h, "No window.location.(origin|href) available to create URL for href: " + c),
      new URL(c, h)
    );
  }
  let w = {
    get action() {
      return s;
    },
    get location() {
      return e(o, l);
    },
    listen(T) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(fd, d),
        (a = T),
        () => {
          o.removeEventListener(fd, d), (a = null);
        }
      );
    },
    createHref(T) {
      return t(o, T);
    },
    createURL: v,
    encodeLocation(T) {
      let h = v(T);
      return { pathname: h.pathname, search: h.search, hash: h.hash };
    },
    push: m,
    replace: S,
    go(T) {
      return l.go(T);
    },
  };
  return w;
}
var pd;
(function (e) {
  (e.data = "data"), (e.deferred = "deferred"), (e.redirect = "redirect"), (e.error = "error");
})(pd || (pd = {}));
function w1(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Gr(t) : t,
    o = Pm(r.pathname || "/", n);
  if (o == null) return null;
  let i = Lm(e);
  R1(i);
  let l = null;
  for (let s = 0; l == null && s < i.length; ++s) {
    let a = M1(o);
    l = P1(i[s], a);
  }
  return l;
}
function Lm(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, l, s) => {
    let a = {
      relativePath: s === void 0 ? i.path || "" : s,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: l,
      route: i,
    };
    a.relativePath.startsWith("/") &&
      (Ie(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = Un([r, a.relativePath]),
      f = n.concat(a);
    i.children &&
      i.children.length > 0 &&
      (Ie(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')
      ),
      Lm(i.children, t, f, u)),
      !(i.path == null && !i.index) && t.push({ path: u, score: L1(u, i.index), routesMeta: f });
  };
  return (
    e.forEach((i, l) => {
      var s;
      if (i.path === "" || !((s = i.path) != null && s.includes("?"))) o(i, l);
      else for (let a of Am(i.path)) o(i, l, a);
    }),
    t
  );
}
function Am(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let l = Am(r.join("/")),
    s = [];
  return (
    s.push(...l.map((a) => (a === "" ? i : [i, a].join("/")))),
    o && s.push(...l),
    s.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function R1(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : A1(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const E1 = /^:[\w-]+$/,
  x1 = 3,
  k1 = 2,
  C1 = 1,
  T1 = 10,
  N1 = -2,
  hd = (e) => e === "*";
function L1(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(hd) && (r += N1),
    t && (r += k1),
    n.filter((o) => !hd(o)).reduce((o, i) => o + (E1.test(i) ? x1 : i === "" ? C1 : T1), r)
  );
}
function A1(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function P1(e, t) {
  let { routesMeta: n } = e,
    r = {},
    o = "/",
    i = [];
  for (let l = 0; l < n.length; ++l) {
    let s = n[l],
      a = l === n.length - 1,
      u = o === "/" ? t : t.slice(o.length) || "/",
      f = I1({ path: s.relativePath, caseSensitive: s.caseSensitive, end: a }, u);
    if (!f) return null;
    Object.assign(r, f.params);
    let d = s.route;
    i.push({ params: r, pathname: Un([o, f.pathname]), pathnameBase: U1(Un([o, f.pathnameBase])), route: d }),
      f.pathnameBase !== "/" && (o = Un([o, f.pathnameBase]));
  }
  return i;
}
function I1(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = $1(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    l = i.replace(/(.)\/+$/, "$1"),
    s = o.slice(1);
  return {
    params: r.reduce((u, f, d) => {
      let { paramName: m, isOptional: S } = f;
      if (m === "*") {
        let w = s[d] || "";
        l = i.slice(0, i.length - w.length).replace(/(.)\/+$/, "$1");
      }
      const v = s[d];
      return S && !v ? (u[m] = void 0) : (u[m] = (v || "").replace(/%2F/g, "/")), u;
    }, {}),
    pathname: i,
    pathnameBase: l,
    pattern: e,
  };
}
function $1(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Tm(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (l, s, a) => (r.push({ paramName: s, isOptional: a != null }), a ? "/?([^\\/]+)?" : "/([^\\/]+)")
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }), (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
        ? (o += "\\/*$")
        : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function M1(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Tm(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Pm(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function j1(e, t) {
  t === void 0 && (t = "/");
  let { pathname: n, search: r = "", hash: o = "" } = typeof e == "string" ? Gr(e) : e;
  return { pathname: n ? (n.startsWith("/") ? n : D1(n, t)) : t, search: F1(r), hash: B1(o) };
}
function D1(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function ua(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function O1(e) {
  return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0));
}
function z1(e, t) {
  let n = O1(e);
  return t ? n.map((r, o) => (o === e.length - 1 ? r.pathname : r.pathnameBase)) : n.map((r) => r.pathnameBase);
}
function V1(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = Gr(e))
    : ((o = Jo({}, e)),
      Ie(!o.pathname || !o.pathname.includes("?"), ua("?", "pathname", "search", o)),
      Ie(!o.pathname || !o.pathname.includes("#"), ua("#", "pathname", "hash", o)),
      Ie(!o.search || !o.search.includes("#"), ua("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    l = i ? "/" : o.pathname,
    s;
  if (l == null) s = n;
  else {
    let d = t.length - 1;
    if (!r && l.startsWith("..")) {
      let m = l.split("/");
      for (; m[0] === ".."; ) m.shift(), (d -= 1);
      o.pathname = m.join("/");
    }
    s = d >= 0 ? t[d] : "/";
  }
  let a = j1(o, s),
    u = l && l !== "/" && l.endsWith("/"),
    f = (i || l === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (u || f) && (a.pathname += "/"), a;
}
const Un = (e) => e.join("/").replace(/\/\/+/g, "/"),
  U1 = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  F1 = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  B1 = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function b1(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Im = ["post", "put", "patch", "delete"];
new Set(Im);
const W1 = ["get", ...Im];
new Set(W1);
/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function qo() {
  return (
    (qo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    qo.apply(this, arguments)
  );
}
const Nc = j.createContext(null),
  H1 = j.createContext(null),
  os = j.createContext(null),
  is = j.createContext(null),
  Qr = j.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  $m = j.createContext(null);
function ls() {
  return j.useContext(is) != null;
}
function Mm() {
  return ls() || Ie(!1), j.useContext(is).location;
}
function jm(e) {
  j.useContext(os).static || j.useLayoutEffect(e);
}
function li() {
  let { isDataRoute: e } = j.useContext(Qr);
  return e ? oS() : K1();
}
function K1() {
  ls() || Ie(!1);
  let e = j.useContext(Nc),
    { basename: t, future: n, navigator: r } = j.useContext(os),
    { matches: o } = j.useContext(Qr),
    { pathname: i } = Mm(),
    l = JSON.stringify(z1(o, n.v7_relativeSplatPath)),
    s = j.useRef(!1);
  return (
    jm(() => {
      s.current = !0;
    }),
    j.useCallback(
      function (u, f) {
        if ((f === void 0 && (f = {}), !s.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let d = V1(u, JSON.parse(l), i, f.relative === "path");
        e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : Un([t, d.pathname])),
          (f.replace ? r.replace : r.push)(d, f.state, f);
      },
      [t, r, l, i, e]
    )
  );
}
function G1(e, t) {
  return Q1(e, t);
}
function Q1(e, t, n, r) {
  ls() || Ie(!1);
  let { navigator: o } = j.useContext(os),
    { matches: i } = j.useContext(Qr),
    l = i[i.length - 1],
    s = l ? l.params : {};
  l && l.pathname;
  let a = l ? l.pathnameBase : "/";
  l && l.route;
  let u = Mm(),
    f;
  if (t) {
    var d;
    let T = typeof t == "string" ? Gr(t) : t;
    a === "/" || ((d = T.pathname) != null && d.startsWith(a)) || Ie(!1), (f = T);
  } else f = u;
  let m = f.pathname || "/",
    S = m;
  if (a !== "/") {
    let T = a.replace(/^\//, "").split("/");
    S = "/" + m.replace(/^\//, "").split("/").slice(T.length).join("/");
  }
  let v = w1(e, { pathname: S }),
    w = q1(
      v &&
        v.map((T) =>
          Object.assign({}, T, {
            params: Object.assign({}, s, T.params),
            pathname: Un([a, o.encodeLocation ? o.encodeLocation(T.pathname).pathname : T.pathname]),
            pathnameBase:
              T.pathnameBase === "/"
                ? a
                : Un([a, o.encodeLocation ? o.encodeLocation(T.pathnameBase).pathname : T.pathnameBase]),
          })
        ),
      i,
      n,
      r
    );
  return t && w
    ? j.createElement(
        is.Provider,
        {
          value: {
            location: qo({ pathname: "/", search: "", hash: "", state: null, key: "default" }, f),
            navigationType: pn.Pop,
          },
        },
        w
      )
    : w;
}
function Y1() {
  let e = rS(),
    t = b1(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return j.createElement(
    j.Fragment,
    null,
    j.createElement("h2", null, "Unexpected Application Error!"),
    j.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? j.createElement("pre", { style: o }, n) : null,
    null
  );
}
const Z1 = j.createElement(Y1, null);
class X1 extends j.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, revalidation: t.revalidation, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location || (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error("React Router caught the following error during render", t, n);
  }
  render() {
    return this.state.error !== void 0
      ? j.createElement(
          Qr.Provider,
          { value: this.props.routeContext },
          j.createElement($m.Provider, { value: this.state.error, children: this.props.component })
        )
      : this.props.children;
  }
}
function J1(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = j.useContext(Nc);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    j.createElement(Qr.Provider, { value: t }, r)
  );
}
function q1(e, t, n, r) {
  var o;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null)) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let l = e,
    s = (o = n) == null ? void 0 : o.errors;
  if (s != null) {
    let f = l.findIndex((d) => d.route.id && (s == null ? void 0 : s[d.route.id]) !== void 0);
    f >= 0 || Ie(!1), (l = l.slice(0, Math.min(l.length, f + 1)));
  }
  let a = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let f = 0; f < l.length; f++) {
      let d = l[f];
      if (((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (u = f), d.route.id)) {
        let { loaderData: m, errors: S } = n,
          v = d.route.loader && m[d.route.id] === void 0 && (!S || S[d.route.id] === void 0);
        if (d.route.lazy || v) {
          (a = !0), u >= 0 ? (l = l.slice(0, u + 1)) : (l = [l[0]]);
          break;
        }
      }
    }
  return l.reduceRight((f, d, m) => {
    let S,
      v = !1,
      w = null,
      T = null;
    n &&
      ((S = s && d.route.id ? s[d.route.id] : void 0),
      (w = d.route.errorElement || Z1),
      a &&
        (u < 0 && m === 0
          ? ((v = !0), (T = null))
          : u === m && ((v = !0), (T = d.route.hydrateFallbackElement || null))));
    let h = t.concat(l.slice(0, m + 1)),
      c = () => {
        let p;
        return (
          S
            ? (p = w)
            : v
              ? (p = T)
              : d.route.Component
                ? (p = j.createElement(d.route.Component, null))
                : d.route.element
                  ? (p = d.route.element)
                  : (p = f),
          j.createElement(J1, {
            match: d,
            routeContext: { outlet: f, matches: h, isDataRoute: n != null },
            children: p,
          })
        );
      };
    return n && (d.route.ErrorBoundary || d.route.errorElement || m === 0)
      ? j.createElement(X1, {
          location: n.location,
          revalidation: n.revalidation,
          component: w,
          error: S,
          children: c(),
          routeContext: { outlet: null, matches: h, isDataRoute: !0 },
        })
      : c();
  }, null);
}
var Dm = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"), (e.UseRevalidator = "useRevalidator"), (e.UseNavigateStable = "useNavigate"), e
    );
  })(Dm || {}),
  Ml = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(Ml || {});
function eS(e) {
  let t = j.useContext(Nc);
  return t || Ie(!1), t;
}
function tS(e) {
  let t = j.useContext(H1);
  return t || Ie(!1), t;
}
function nS(e) {
  let t = j.useContext(Qr);
  return t || Ie(!1), t;
}
function Om(e) {
  let t = nS(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Ie(!1), n.route.id;
}
function rS() {
  var e;
  let t = j.useContext($m),
    n = tS(Ml.UseRouteError),
    r = Om(Ml.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function oS() {
  let { router: e } = eS(Dm.UseNavigateStable),
    t = Om(Ml.UseNavigateStable),
    n = j.useRef(!1);
  return (
    jm(() => {
      n.current = !0;
    }),
    j.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, qo({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
function In(e) {
  Ie(!1);
}
function iS(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = pn.Pop,
    navigator: i,
    static: l = !1,
    future: s,
  } = e;
  ls() && Ie(!1);
  let a = t.replace(/^\/*/, "/"),
    u = j.useMemo(
      () => ({ basename: a, navigator: i, static: l, future: qo({ v7_relativeSplatPath: !1 }, s) }),
      [a, s, i, l]
    );
  typeof r == "string" && (r = Gr(r));
  let { pathname: f = "/", search: d = "", hash: m = "", state: S = null, key: v = "default" } = r,
    w = j.useMemo(() => {
      let T = Pm(f, a);
      return T == null ? null : { location: { pathname: T, search: d, hash: m, state: S, key: v }, navigationType: o };
    }, [a, f, d, m, S, v, o]);
  return w == null
    ? null
    : j.createElement(os.Provider, { value: u }, j.createElement(is.Provider, { children: n, value: w }));
}
function lS(e) {
  let { children: t, location: n } = e;
  return G1(gu(t), n);
}
new Promise(() => {});
function gu(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    j.Children.forEach(e, (r, o) => {
      if (!j.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === j.Fragment) {
        n.push.apply(n, gu(r.props.children, i));
        return;
      }
      r.type !== In && Ie(!1), !r.props.index || !r.props.children || Ie(!1);
      let l = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (l.children = gu(r.props.children, i)), n.push(l);
    }),
    n
  );
}
/**
 * React Router DOM v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const sS = "6";
try {
  window.__reactRouterVersion = sS;
} catch {}
const aS = "startTransition",
  md = ly[aS];
function uS(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = j.useRef();
  i.current == null && (i.current = y1({ window: o, v5Compat: !0 }));
  let l = i.current,
    [s, a] = j.useState({ action: l.action, location: l.location }),
    { v7_startTransition: u } = r || {},
    f = j.useCallback(
      (d) => {
        u && md ? md(() => a(d)) : a(d);
      },
      [a, u]
    );
  return (
    j.useLayoutEffect(() => l.listen(f), [l, f]),
    j.createElement(iS, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: l,
      future: r,
    })
  );
}
var vd;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(vd || (vd = {}));
var gd;
(function (e) {
  (e.UseFetcher = "useFetcher"), (e.UseFetchers = "useFetchers"), (e.UseScrollRestoration = "useScrollRestoration");
})(gd || (gd = {}));
var zm = {};
function cS(e) {
  const t = new Error(e);
  if (t.stack === void 0)
    try {
      throw t;
    } catch {}
  return t;
}
var fS = cS,
  ee = fS;
function dS(e) {
  return !!e && typeof e.then == "function";
}
var ve = dS;
function pS(e, t) {
  if (e != null) return e;
  throw ee(t ?? "Got unexpected null or undefined");
}
var we = pS;
function J(e, t, n) {
  return (
    t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e
  );
}
class ss {
  getValue() {
    throw ee("BaseLoadable");
  }
  toPromise() {
    throw ee("BaseLoadable");
  }
  valueMaybe() {
    throw ee("BaseLoadable");
  }
  valueOrThrow() {
    throw ee(`Loadable expected value, but in "${this.state}" state`);
  }
  promiseMaybe() {
    throw ee("BaseLoadable");
  }
  promiseOrThrow() {
    throw ee(`Loadable expected promise, but in "${this.state}" state`);
  }
  errorMaybe() {
    throw ee("BaseLoadable");
  }
  errorOrThrow() {
    throw ee(`Loadable expected error, but in "${this.state}" state`);
  }
  is(t) {
    return t.state === this.state && t.contents === this.contents;
  }
  map(t) {
    throw ee("BaseLoadable");
  }
}
class hS extends ss {
  constructor(t) {
    super(), J(this, "state", "hasValue"), J(this, "contents", void 0), (this.contents = t);
  }
  getValue() {
    return this.contents;
  }
  toPromise() {
    return Promise.resolve(this.contents);
  }
  valueMaybe() {
    return this.contents;
  }
  valueOrThrow() {
    return this.contents;
  }
  promiseMaybe() {}
  errorMaybe() {}
  map(t) {
    try {
      const n = t(this.contents);
      return ve(n) ? Qn(n) : Mr(n) ? n : si(n);
    } catch (n) {
      return ve(n) ? Qn(n.next(() => this.map(t))) : as(n);
    }
  }
}
class mS extends ss {
  constructor(t) {
    super(), J(this, "state", "hasError"), J(this, "contents", void 0), (this.contents = t);
  }
  getValue() {
    throw this.contents;
  }
  toPromise() {
    return Promise.reject(this.contents);
  }
  valueMaybe() {}
  promiseMaybe() {}
  errorMaybe() {
    return this.contents;
  }
  errorOrThrow() {
    return this.contents;
  }
  map(t) {
    return this;
  }
}
class Vm extends ss {
  constructor(t) {
    super(), J(this, "state", "loading"), J(this, "contents", void 0), (this.contents = t);
  }
  getValue() {
    throw this.contents;
  }
  toPromise() {
    return this.contents;
  }
  valueMaybe() {}
  promiseMaybe() {
    return this.contents;
  }
  promiseOrThrow() {
    return this.contents;
  }
  errorMaybe() {}
  map(t) {
    return Qn(
      this.contents
        .then((n) => {
          const r = t(n);
          if (Mr(r)) {
            const o = r;
            switch (o.state) {
              case "hasValue":
                return o.contents;
              case "hasError":
                throw o.contents;
              case "loading":
                return o.contents;
            }
          }
          return r;
        })
        .catch((n) => {
          if (ve(n)) return n.then(() => this.map(t).contents);
          throw n;
        })
    );
  }
}
function si(e) {
  return Object.freeze(new hS(e));
}
function as(e) {
  return Object.freeze(new mS(e));
}
function Qn(e) {
  return Object.freeze(new Vm(e));
}
function Um() {
  return Object.freeze(new Vm(new Promise(() => {})));
}
function vS(e) {
  return e.every((t) => t.state === "hasValue")
    ? si(e.map((t) => t.contents))
    : e.some((t) => t.state === "hasError")
      ? as(
          we(
            e.find((t) => t.state === "hasError"),
            "Invalid loadable passed to loadableAll"
          ).contents
        )
      : Qn(Promise.all(e.map((t) => t.contents)));
}
function Fm(e) {
  const n = (Array.isArray(e) ? e : Object.getOwnPropertyNames(e).map((o) => e[o])).map((o) =>
      Mr(o) ? o : ve(o) ? Qn(o) : si(o)
    ),
    r = vS(n);
  return Array.isArray(e)
    ? r
    : r.map((o) => Object.getOwnPropertyNames(e).reduce((i, l, s) => ({ ...i, [l]: o[s] }), {}));
}
function Mr(e) {
  return e instanceof ss;
}
const gS = {
  of: (e) => (ve(e) ? Qn(e) : Mr(e) ? e : si(e)),
  error: (e) => as(e),
  loading: () => Um(),
  all: Fm,
  isLoadable: Mr,
};
var Jn = {
    loadableWithValue: si,
    loadableWithError: as,
    loadableWithPromise: Qn,
    loadableLoading: Um,
    loadableAll: Fm,
    isLoadable: Mr,
    RecoilLoadable: gS,
  },
  yS = Jn.loadableWithValue,
  SS = Jn.loadableWithError,
  _S = Jn.loadableWithPromise,
  wS = Jn.loadableLoading,
  RS = Jn.loadableAll,
  ES = Jn.isLoadable,
  xS = Jn.RecoilLoadable,
  ai = Object.freeze({
    __proto__: null,
    loadableWithValue: yS,
    loadableWithError: SS,
    loadableWithPromise: _S,
    loadableLoading: wS,
    loadableAll: RS,
    isLoadable: ES,
    RecoilLoadable: xS,
  });
const yu = {
  RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED: !0,
  RECOIL_GKS_ENABLED: new Set([
    "recoil_hamt_2020",
    "recoil_sync_external_store",
    "recoil_suppress_rerender_in_callback",
    "recoil_memory_managament_2020",
  ]),
};
function kS(e, t) {
  var n, r;
  const o = (n = zm[e]) === null || n === void 0 || (r = n.toLowerCase()) === null || r === void 0 ? void 0 : r.trim();
  if (o == null || o === "") return;
  if (!["true", "false"].includes(o)) throw ee(`process.env.${e} value must be 'true', 'false', or empty: ${o}`);
  t(o === "true");
}
function CS(e, t) {
  var n;
  const r = (n = zm[e]) === null || n === void 0 ? void 0 : n.trim();
  r == null || r === "" || t(r.split(/\s*,\s*|\s+/));
}
function TS() {
  var e;
  typeof process > "u" ||
    (((e = process) === null || e === void 0 ? void 0 : e.env) != null &&
      (kS("RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED", (t) => {
        yu.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = t;
      }),
      CS("RECOIL_GKS_ENABLED", (t) => {
        t.forEach((n) => {
          yu.RECOIL_GKS_ENABLED.add(n);
        });
      })));
}
TS();
var Yr = yu;
function us(e) {
  return Yr.RECOIL_GKS_ENABLED.has(e);
}
us.setPass = (e) => {
  Yr.RECOIL_GKS_ENABLED.add(e);
};
us.setFail = (e) => {
  Yr.RECOIL_GKS_ENABLED.delete(e);
};
us.clear = () => {
  Yr.RECOIL_GKS_ENABLED.clear();
};
var fe = us;
function NS(e, t, { error: n } = {}) {
  return null;
}
var LS = NS,
  Lc = LS,
  ca,
  fa,
  da;
const AS = (ca = le.createMutableSource) !== null && ca !== void 0 ? ca : le.unstable_createMutableSource,
  Bm = (fa = le.useMutableSource) !== null && fa !== void 0 ? fa : le.unstable_useMutableSource,
  bm = (da = le.useSyncExternalStore) !== null && da !== void 0 ? da : le.unstable_useSyncExternalStore;
function PS() {
  var e;
  const { ReactCurrentDispatcher: t, ReactCurrentOwner: n } = le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  return (
    ((e = t == null ? void 0 : t.current) !== null && e !== void 0 ? e : n.currentDispatcher).useSyncExternalStore !=
    null
  );
}
function IS() {
  return fe("recoil_transition_support")
    ? { mode: "TRANSITION_SUPPORT", early: !0, concurrent: !0 }
    : fe("recoil_sync_external_store") && bm != null
      ? { mode: "SYNC_EXTERNAL_STORE", early: !0, concurrent: !1 }
      : fe("recoil_mutable_source") &&
          Bm != null &&
          typeof window < "u" &&
          !window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE
        ? fe("recoil_suppress_rerender_in_callback")
          ? { mode: "MUTABLE_SOURCE", early: !0, concurrent: !0 }
          : { mode: "MUTABLE_SOURCE", early: !1, concurrent: !1 }
        : fe("recoil_suppress_rerender_in_callback")
          ? { mode: "LEGACY", early: !0, concurrent: !1 }
          : { mode: "LEGACY", early: !1, concurrent: !1 };
}
function $S() {
  return !1;
}
var ui = {
  createMutableSource: AS,
  useMutableSource: Bm,
  useSyncExternalStore: bm,
  currentRendererSupportsUseSyncExternalStore: PS,
  reactMode: IS,
  isFastRefreshEnabled: $S,
};
class Ac {
  constructor(t) {
    J(this, "key", void 0), (this.key = t);
  }
  toJSON() {
    return { key: this.key };
  }
}
class Wm extends Ac {}
class Hm extends Ac {}
function MS(e) {
  return e instanceof Wm || e instanceof Hm;
}
var cs = { AbstractRecoilValue: Ac, RecoilState: Wm, RecoilValueReadOnly: Hm, isRecoilValue: MS },
  jS = cs.AbstractRecoilValue,
  DS = cs.RecoilState,
  OS = cs.RecoilValueReadOnly,
  zS = cs.isRecoilValue,
  jr = Object.freeze({
    __proto__: null,
    AbstractRecoilValue: jS,
    RecoilState: DS,
    RecoilValueReadOnly: OS,
    isRecoilValue: zS,
  });
function VS(e, t) {
  return (function* () {
    let n = 0;
    for (const r of e) yield t(r, n++);
  })();
}
var fs = VS;
class Km {}
const US = new Km(),
  Yn = new Map(),
  Pc = new Map();
function FS(e) {
  return fs(e, (t) => we(Pc.get(t)));
}
function BS(e) {
  if (Yn.has(e)) {
    const t = `Duplicate atom key "${e}". This is a FATAL ERROR in
      production. But it is safe to ignore this warning if it occurred because of
      hot module replacement.`;
    console.warn(t);
  }
}
function bS(e) {
  Yr.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED && BS(e.key), Yn.set(e.key, e);
  const t = e.set == null ? new jr.RecoilValueReadOnly(e.key) : new jr.RecoilState(e.key);
  return Pc.set(e.key, t), t;
}
class Gm extends Error {}
function WS(e) {
  const t = Yn.get(e);
  if (t == null) throw new Gm(`Missing definition for RecoilValue: "${e}""`);
  return t;
}
function HS(e) {
  return Yn.get(e);
}
const jl = new Map();
function KS(e) {
  var t;
  if (!fe("recoil_memory_managament_2020")) return;
  const n = Yn.get(e);
  if (n != null && (t = n.shouldDeleteConfigOnRelease) !== null && t !== void 0 && t.call(n)) {
    var r;
    Yn.delete(e), (r = Qm(e)) === null || r === void 0 || r(), jl.delete(e);
  }
}
function GS(e, t) {
  fe("recoil_memory_managament_2020") && (t === void 0 ? jl.delete(e) : jl.set(e, t));
}
function Qm(e) {
  return jl.get(e);
}
var lt = {
  nodes: Yn,
  recoilValues: Pc,
  registerNode: bS,
  getNode: WS,
  getNodeMaybe: HS,
  deleteNodeConfigIfPossible: KS,
  setConfigDeletionHandler: GS,
  getConfigDeletionHandler: Qm,
  recoilValuesForKeys: FS,
  NodeMissingError: Gm,
  DefaultValue: Km,
  DEFAULT_VALUE: US,
};
function QS(e, t) {
  t();
}
var YS = { enqueueExecution: QS };
function ZS(e, t) {
  return (t = { exports: {} }), e(t, t.exports), t.exports;
}
var XS = ZS(function (e) {
  var t =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (R) {
            return typeof R;
          }
        : function (R) {
            return R && typeof Symbol == "function" && R.constructor === Symbol && R !== Symbol.prototype
              ? "symbol"
              : typeof R;
          },
    n = {},
    r = 5,
    o = Math.pow(2, r),
    i = o - 1,
    l = o / 2,
    s = o / 4,
    a = {},
    u = function (y) {
      return function () {
        return y;
      };
    },
    f = (n.hash = function (R) {
      var y = typeof R > "u" ? "undefined" : t(R);
      if (y === "number") return R;
      y !== "string" && (R += "");
      for (var N = 0, O = 0, z = R.length; O < z; ++O) {
        var U = R.charCodeAt(O);
        N = ((N << 5) - N + U) | 0;
      }
      return N;
    }),
    d = function (y) {
      return (
        (y -= (y >> 1) & 1431655765),
        (y = (y & 858993459) + ((y >> 2) & 858993459)),
        (y = (y + (y >> 4)) & 252645135),
        (y += y >> 8),
        (y += y >> 16),
        y & 127
      );
    },
    m = function (y, N) {
      return (N >>> y) & i;
    },
    S = function (y) {
      return 1 << y;
    },
    v = function (y, N) {
      return d(y & (N - 1));
    },
    w = function (y, N, O, z) {
      var U = z;
      if (!y) {
        var Y = z.length;
        U = new Array(Y);
        for (var G = 0; G < Y; ++G) U[G] = z[G];
      }
      return (U[N] = O), U;
    },
    T = function (y, N, O) {
      var z = O.length - 1,
        U = 0,
        Y = 0,
        G = O;
      if (y) U = Y = N;
      else for (G = new Array(z); U < N; ) G[Y++] = O[U++];
      for (++U; U <= z; ) G[Y++] = O[U++];
      return y && (G.length = z), G;
    },
    h = function (y, N, O, z) {
      var U = z.length;
      if (y) {
        for (var Y = U; Y >= N; ) z[Y--] = z[Y];
        return (z[N] = O), z;
      }
      for (var G = 0, Q = 0, te = new Array(U + 1); G < N; ) te[Q++] = z[G++];
      for (te[N] = O; G < U; ) te[++Q] = z[G++];
      return te;
    },
    c = 1,
    p = 2,
    E = 3,
    k = 4,
    C = { __hamt_isEmpty: !0 },
    x = function (y) {
      return y === C || (y && y.__hamt_isEmpty);
    },
    I = function (y, N, O, z) {
      return { type: c, edit: y, hash: N, key: O, value: z, _modify: M };
    },
    oe = function (y, N, O) {
      return { type: p, edit: y, hash: N, children: O, _modify: b };
    },
    B = function (y, N, O) {
      return { type: E, edit: y, mask: N, children: O, _modify: $ };
    },
    de = function (y, N, O) {
      return { type: k, edit: y, size: N, children: O, _modify: W };
    },
    Xe = function (y) {
      return y === C || y.type === c || y.type === p;
    },
    se = function (y, N, O, z, U) {
      for (var Y = [], G = z, Q = 0, te = 0; G; ++te) G & 1 && (Y[te] = U[Q++]), (G >>>= 1);
      return (Y[N] = O), de(y, Q + 1, Y);
    },
    $e = function (y, N, O, z) {
      for (var U = new Array(N - 1), Y = 0, G = 0, Q = 0, te = z.length; Q < te; ++Q)
        if (Q !== O) {
          var Se = z[Q];
          Se && !x(Se) && ((U[Y++] = Se), (G |= 1 << Q));
        }
      return B(y, G, U);
    },
    kt = function R(y, N, O, z, U, Y) {
      if (O === U) return oe(y, O, [Y, z]);
      var G = m(N, O),
        Q = m(N, U);
      return B(y, S(G) | S(Q), G === Q ? [R(y, N + r, O, z, U, Y)] : G < Q ? [z, Y] : [Y, z]);
    },
    Me = function (y, N, O, z, U, Y, G, Q) {
      for (var te = U.length, Se = 0; Se < te; ++Se) {
        var Je = U[Se];
        if (O(G, Je.key)) {
          var je = Je.value,
            vt = Y(je);
          return vt === je ? U : vt === a ? (--Q.value, T(y, Se, U)) : w(y, Se, I(N, z, G, vt), U);
        }
      }
      var Tt = Y();
      return Tt === a ? U : (++Q.value, w(y, te, I(N, z, G, Tt), U));
    },
    Ve = function (y, N) {
      return y === N.edit;
    },
    M = function (y, N, O, z, U, Y, G) {
      if (N(Y, this.key)) {
        var Q = z(this.value);
        return Q === this.value
          ? this
          : Q === a
            ? (--G.value, C)
            : Ve(y, this)
              ? ((this.value = Q), this)
              : I(y, U, Y, Q);
      }
      var te = z();
      return te === a ? this : (++G.value, kt(y, O, this.hash, this, U, I(y, U, Y, te)));
    },
    b = function (y, N, O, z, U, Y, G) {
      if (U === this.hash) {
        var Q = Ve(y, this),
          te = Me(Q, y, N, this.hash, this.children, z, Y, G);
        return te === this.children ? this : te.length > 1 ? oe(y, this.hash, te) : te[0];
      }
      var Se = z();
      return Se === a ? this : (++G.value, kt(y, O, this.hash, this, U, I(y, U, Y, Se)));
    },
    $ = function (y, N, O, z, U, Y, G) {
      var Q = this.mask,
        te = this.children,
        Se = m(O, U),
        Je = S(Se),
        je = v(Q, Je),
        vt = Q & Je,
        Tt = vt ? te[je] : C,
        er = Tt._modify(y, N, O + r, z, U, Y, G);
      if (Tt === er) return this;
      var mi = Ve(y, this),
        Jr = Q,
        qr = void 0;
      if (vt && x(er)) {
        if (((Jr &= ~Je), !Jr)) return C;
        if (te.length <= 2 && Xe(te[je ^ 1])) return te[je ^ 1];
        qr = T(mi, je, te);
      } else if (!vt && !x(er)) {
        if (te.length >= l) return se(y, Se, er, Q, te);
        (Jr |= Je), (qr = h(mi, je, er, te));
      } else qr = w(mi, je, er, te);
      return mi ? ((this.mask = Jr), (this.children = qr), this) : B(y, Jr, qr);
    },
    W = function (y, N, O, z, U, Y, G) {
      var Q = this.size,
        te = this.children,
        Se = m(O, U),
        Je = te[Se],
        je = (Je || C)._modify(y, N, O + r, z, U, Y, G);
      if (Je === je) return this;
      var vt = Ve(y, this),
        Tt = void 0;
      if (x(Je) && !x(je)) ++Q, (Tt = w(vt, Se, je, te));
      else if (!x(Je) && x(je)) {
        if ((--Q, Q <= s)) return $e(y, Q, Se, te);
        Tt = w(vt, Se, C, te);
      } else Tt = w(vt, Se, je, te);
      return vt ? ((this.size = Q), (this.children = Tt), this) : de(y, Q, Tt);
    };
  C._modify = function (R, y, N, O, z, U, Y) {
    var G = O();
    return G === a ? C : (++Y.value, I(R, z, U, G));
  };
  function _(R, y, N, O, z) {
    (this._editable = R), (this._edit = y), (this._config = N), (this._root = O), (this._size = z);
  }
  _.prototype.setTree = function (R, y) {
    return this._editable
      ? ((this._root = R), (this._size = y), this)
      : R === this._root
        ? this
        : new _(this._editable, this._edit, this._config, R, y);
  };
  var A = (n.tryGetHash = function (R, y, N, O) {
    for (var z = O._root, U = 0, Y = O._config.keyEq; ; )
      switch (z.type) {
        case c:
          return Y(N, z.key) ? z.value : R;
        case p: {
          if (y === z.hash)
            for (var G = z.children, Q = 0, te = G.length; Q < te; ++Q) {
              var Se = G[Q];
              if (Y(N, Se.key)) return Se.value;
            }
          return R;
        }
        case E: {
          var Je = m(U, y),
            je = S(Je);
          if (z.mask & je) {
            (z = z.children[v(z.mask, je)]), (U += r);
            break;
          }
          return R;
        }
        case k: {
          if (((z = z.children[m(U, y)]), z)) {
            U += r;
            break;
          }
          return R;
        }
        default:
          return R;
      }
  });
  _.prototype.tryGetHash = function (R, y, N) {
    return A(R, y, N, this);
  };
  var P = (n.tryGet = function (R, y, N) {
    return A(R, N._config.hash(y), y, N);
  });
  _.prototype.tryGet = function (R, y) {
    return P(R, y, this);
  };
  var K = (n.getHash = function (R, y, N) {
    return A(void 0, R, y, N);
  });
  (_.prototype.getHash = function (R, y) {
    return K(R, y, this);
  }),
    (n.get = function (R, y) {
      return A(void 0, y._config.hash(R), R, y);
    }),
    (_.prototype.get = function (R, y) {
      return P(y, R, this);
    });
  var D = (n.has = function (R, y, N) {
    return A(a, R, y, N) !== a;
  });
  _.prototype.hasHash = function (R, y) {
    return D(R, y, this);
  };
  var Z = (n.has = function (R, y) {
    return D(y._config.hash(R), R, y);
  });
  _.prototype.has = function (R) {
    return Z(R, this);
  };
  var X = function (y, N) {
    return y === N;
  };
  (n.make = function (R) {
    return new _(0, 0, { keyEq: (R && R.keyEq) || X, hash: (R && R.hash) || f }, C, 0);
  }),
    (n.empty = n.make());
  var F = (n.isEmpty = function (R) {
    return R && !!x(R._root);
  });
  _.prototype.isEmpty = function () {
    return F(this);
  };
  var ce = (n.modifyHash = function (R, y, N, O) {
    var z = { value: O._size },
      U = O._root._modify(O._editable ? O._edit : NaN, O._config.keyEq, 0, R, y, N, z);
    return O.setTree(U, z.value);
  });
  _.prototype.modifyHash = function (R, y, N) {
    return ce(N, R, y, this);
  };
  var ye = (n.modify = function (R, y, N) {
    return ce(R, N._config.hash(y), y, N);
  });
  _.prototype.modify = function (R, y) {
    return ye(y, R, this);
  };
  var ne = (n.setHash = function (R, y, N, O) {
    return ce(u(N), R, y, O);
  });
  _.prototype.setHash = function (R, y, N) {
    return ne(R, y, N, this);
  };
  var Re = (n.set = function (R, y, N) {
    return ne(N._config.hash(R), R, y, N);
  });
  _.prototype.set = function (R, y) {
    return Re(R, y, this);
  };
  var Ct = u(a),
    Ln = (n.removeHash = function (R, y, N) {
      return ce(Ct, R, y, N);
    });
  _.prototype.removeHash = _.prototype.deleteHash = function (R, y) {
    return Ln(R, y, this);
  };
  var mt = (n.remove = function (R, y) {
    return Ln(y._config.hash(R), R, y);
  });
  _.prototype.remove = _.prototype.delete = function (R) {
    return mt(R, this);
  };
  var st = (n.beginMutation = function (R) {
    return new _(R._editable + 1, R._edit + 1, R._config, R._root, R._size);
  });
  _.prototype.beginMutation = function () {
    return st(this);
  };
  var Xc = (n.endMutation = function (R) {
    return (R._editable = R._editable && R._editable - 1), R;
  });
  _.prototype.endMutation = function () {
    return Xc(this);
  };
  var Mg = (n.mutate = function (R, y) {
    var N = st(y);
    return R(N), Xc(N);
  });
  _.prototype.mutate = function (R) {
    return Mg(R, this);
  };
  var Ms = function (y) {
      return y && Jc(y[0], y[1], y[2], y[3], y[4]);
    },
    Jc = function (y, N, O, z, U) {
      for (; O < y; ) {
        var Y = N[O++];
        if (Y && !x(Y)) return qc(Y, z, [y, N, O, z, U]);
      }
      return Ms(U);
    },
    qc = function (y, N, O) {
      switch (y.type) {
        case c:
          return { value: N(y), rest: O };
        case p:
        case k:
        case E:
          var z = y.children;
          return Jc(z.length, z, 0, N, O);
        default:
          return Ms(O);
      }
    },
    jg = { done: !0 };
  function js(R) {
    this.v = R;
  }
  (js.prototype.next = function () {
    if (!this.v) return jg;
    var R = this.v;
    return (this.v = Ms(R.rest)), R;
  }),
    (js.prototype[Symbol.iterator] = function () {
      return this;
    });
  var Ds = function (y, N) {
      return new js(qc(y._root, N));
    },
    Dg = function (y) {
      return [y.key, y.value];
    },
    Og = (n.entries = function (R) {
      return Ds(R, Dg);
    });
  _.prototype.entries = _.prototype[Symbol.iterator] = function () {
    return Og(this);
  };
  var zg = function (y) {
      return y.key;
    },
    Vg = (n.keys = function (R) {
      return Ds(R, zg);
    });
  _.prototype.keys = function () {
    return Vg(this);
  };
  var Ug = function (y) {
      return y.value;
    },
    Fg =
      (n.values =
      _.prototype.values =
        function (R) {
          return Ds(R, Ug);
        });
  _.prototype.values = function () {
    return Fg(this);
  };
  var ef = (n.fold = function (R, y, N) {
    var O = N._root;
    if (O.type === c) return R(y, O.value, O.key);
    for (var z = [O.children], U = void 0; (U = z.pop()); )
      for (var Y = 0, G = U.length; Y < G; ) {
        var Q = U[Y++];
        Q && Q.type && (Q.type === c ? (y = R(y, Q.value, Q.key)) : z.push(Q.children));
      }
    return y;
  });
  _.prototype.fold = function (R, y) {
    return ef(R, y, this);
  };
  var Bg = (n.forEach = function (R, y) {
    return ef(
      function (N, O, z) {
        return R(O, z, y);
      },
      null,
      y
    );
  });
  _.prototype.forEach = function (R) {
    return Bg(R, this);
  };
  var bg = (n.count = function (R) {
    return R._size;
  });
  (_.prototype.count = function () {
    return bg(this);
  }),
    Object.defineProperty(_.prototype, "size", { get: _.prototype.count }),
    e.exports ? (e.exports = n) : ((void 0).hamt = n);
});
class JS {
  constructor(t) {
    J(this, "_map", void 0), (this._map = new Map(t == null ? void 0 : t.entries()));
  }
  keys() {
    return this._map.keys();
  }
  entries() {
    return this._map.entries();
  }
  get(t) {
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
  set(t, n) {
    return this._map.set(t, n), this;
  }
  delete(t) {
    return this._map.delete(t), this;
  }
  clone() {
    return $c(this);
  }
  toMap() {
    return new Map(this._map);
  }
}
class Ic {
  constructor(t) {
    if ((J(this, "_hamt", XS.empty.beginMutation()), t instanceof Ic)) {
      const n = t._hamt.endMutation();
      (t._hamt = n.beginMutation()), (this._hamt = n.beginMutation());
    } else if (t) for (const [n, r] of t.entries()) this._hamt.set(n, r);
  }
  keys() {
    return this._hamt.keys();
  }
  entries() {
    return this._hamt.entries();
  }
  get(t) {
    return this._hamt.get(t);
  }
  has(t) {
    return this._hamt.has(t);
  }
  set(t, n) {
    return this._hamt.set(t, n), this;
  }
  delete(t) {
    return this._hamt.delete(t), this;
  }
  clone() {
    return $c(this);
  }
  toMap() {
    return new Map(this._hamt);
  }
}
function $c(e) {
  return fe("recoil_hamt_2020") ? new Ic(e) : new JS(e);
}
var qS = { persistentMap: $c },
  e_ = qS.persistentMap,
  t_ = Object.freeze({ __proto__: null, persistentMap: e_ });
function n_(e, ...t) {
  const n = new Set();
  e: for (const r of e) {
    for (const o of t) if (o.has(r)) continue e;
    n.add(r);
  }
  return n;
}
var Ao = n_;
function r_(e, t) {
  const n = new Map();
  return (
    e.forEach((r, o) => {
      n.set(o, t(r, o));
    }),
    n
  );
}
var Dl = r_;
function o_() {
  return { nodeDeps: new Map(), nodeToNodeSubscriptions: new Map() };
}
function i_(e) {
  return {
    nodeDeps: Dl(e.nodeDeps, (t) => new Set(t)),
    nodeToNodeSubscriptions: Dl(e.nodeToNodeSubscriptions, (t) => new Set(t)),
  };
}
function pa(e, t, n, r) {
  const { nodeDeps: o, nodeToNodeSubscriptions: i } = n,
    l = o.get(e);
  if (l && r && l !== r.nodeDeps.get(e)) return;
  o.set(e, t);
  const s = l == null ? t : Ao(t, l);
  for (const a of s) i.has(a) || i.set(a, new Set()), we(i.get(a)).add(e);
  if (l) {
    const a = Ao(l, t);
    for (const u of a) {
      if (!i.has(u)) return;
      const f = we(i.get(u));
      f.delete(e), f.size === 0 && i.delete(u);
    }
  }
}
function l_(e, t, n, r) {
  var o, i, l, s;
  const a = n.getState();
  r === a.currentTree.version ||
    r === ((o = a.nextTree) === null || o === void 0 ? void 0 : o.version) ||
    (i = a.previousTree) === null ||
    i === void 0 ||
    i.version;
  const u = n.getGraph(r);
  if ((pa(e, t, u), r === ((l = a.previousTree) === null || l === void 0 ? void 0 : l.version))) {
    const d = n.getGraph(a.currentTree.version);
    pa(e, t, d, u);
  }
  if (r === ((s = a.previousTree) === null || s === void 0 ? void 0 : s.version) || r === a.currentTree.version) {
    var f;
    const d = (f = a.nextTree) === null || f === void 0 ? void 0 : f.version;
    if (d !== void 0) {
      const m = n.getGraph(d);
      pa(e, t, m, u);
    }
  }
}
var ci = { cloneGraph: i_, graph: o_, saveDepsToStore: l_ };
let s_ = 0;
const a_ = () => s_++;
let u_ = 0;
const c_ = () => u_++;
let f_ = 0;
const d_ = () => f_++;
var ds = { getNextTreeStateVersion: a_, getNextStoreID: c_, getNextComponentID: d_ };
const { persistentMap: yd } = t_,
  { graph: p_ } = ci,
  { getNextTreeStateVersion: Ym } = ds;
function Zm() {
  const e = Ym();
  return {
    version: e,
    stateID: e,
    transactionMetadata: {},
    dirtyAtoms: new Set(),
    atomValues: yd(),
    nonvalidatedAtoms: yd(),
  };
}
function h_() {
  const e = Zm();
  return {
    currentTree: e,
    nextTree: null,
    previousTree: null,
    commitDepth: 0,
    knownAtoms: new Set(),
    knownSelectors: new Set(),
    transactionSubscriptions: new Map(),
    nodeTransactionSubscriptions: new Map(),
    nodeToComponentSubscriptions: new Map(),
    queuedComponentCallbacks_DEPRECATED: [],
    suspendedComponentResolvers: new Set(),
    graphsByVersion: new Map().set(e.version, p_()),
    retention: { referenceCounts: new Map(), nodesRetainedByZone: new Map(), retainablesToCheckForRelease: new Set() },
    nodeCleanupFunctions: new Map(),
  };
}
var Xm = { makeEmptyTreeState: Zm, makeEmptyStoreState: h_, getNextTreeStateVersion: Ym };
class Jm {}
function m_() {
  return new Jm();
}
var ps = { RetentionZone: Jm, retentionZone: m_ };
function v_(e, t) {
  const n = new Set(e);
  return n.add(t), n;
}
function g_(e, t) {
  const n = new Set(e);
  return n.delete(t), n;
}
function y_(e, t, n) {
  const r = new Map(e);
  return r.set(t, n), r;
}
function S_(e, t, n) {
  const r = new Map(e);
  return r.set(t, n(r.get(t))), r;
}
function __(e, t) {
  const n = new Map(e);
  return n.delete(t), n;
}
function w_(e, t) {
  const n = new Map(e);
  return t.forEach((r) => n.delete(r)), n;
}
var qm = {
  setByAddingToSet: v_,
  setByDeletingFromSet: g_,
  mapBySettingInMap: y_,
  mapByUpdatingInMap: S_,
  mapByDeletingFromMap: __,
  mapByDeletingMultipleFromMap: w_,
};
function* R_(e, t) {
  let n = 0;
  for (const r of e) t(r, n++) && (yield r);
}
var Mc = R_;
function E_(e, t) {
  return new Proxy(e, {
    get: (r, o) => (!(o in r) && o in t && (r[o] = t[o]()), r[o]),
    ownKeys: (r) => Object.keys(r),
  });
}
var ev = E_;
const { getNode: fi, getNodeMaybe: x_, recoilValuesForKeys: Sd } = lt,
  { RetentionZone: _d } = ps,
  { setByAddingToSet: k_ } = qm,
  C_ = Object.freeze(new Set());
class T_ extends Error {}
function N_(e, t, n) {
  if (!fe("recoil_memory_managament_2020")) return () => {};
  const { nodesRetainedByZone: r } = e.getState().retention;
  function o(i) {
    let l = r.get(i);
    l || r.set(i, (l = new Set())), l.add(t);
  }
  if (n instanceof _d) o(n);
  else if (Array.isArray(n)) for (const i of n) o(i);
  return () => {
    if (!fe("recoil_memory_managament_2020")) return;
    const { retention: i } = e.getState();
    function l(s) {
      const a = i.nodesRetainedByZone.get(s);
      a == null || a.delete(t), a && a.size === 0 && i.nodesRetainedByZone.delete(s);
    }
    if (n instanceof _d) l(n);
    else if (Array.isArray(n)) for (const s of n) l(s);
  };
}
function jc(e, t, n, r) {
  const o = e.getState();
  if (o.nodeCleanupFunctions.has(n)) return;
  const i = fi(n),
    l = N_(e, n, i.retainedBy),
    s = i.init(e, t, r);
  o.nodeCleanupFunctions.set(n, () => {
    s(), l();
  });
}
function L_(e, t, n) {
  jc(e, e.getState().currentTree, t, n);
}
function A_(e, t) {
  var n;
  const r = e.getState();
  (n = r.nodeCleanupFunctions.get(t)) === null || n === void 0 || n(), r.nodeCleanupFunctions.delete(t);
}
function P_(e, t, n) {
  return jc(e, t, n, "get"), fi(n).get(e, t);
}
function tv(e, t, n) {
  return fi(n).peek(e, t);
}
function I_(e, t, n) {
  var r;
  const o = x_(t);
  return (
    o == null || (r = o.invalidate) === null || r === void 0 || r.call(o, e),
    {
      ...e,
      atomValues: e.atomValues.clone().delete(t),
      nonvalidatedAtoms: e.nonvalidatedAtoms.clone().set(t, n),
      dirtyAtoms: k_(e.dirtyAtoms, t),
    }
  );
}
function $_(e, t, n, r) {
  const o = fi(n);
  if (o.set == null) throw new T_(`Attempt to set read-only RecoilValue: ${n}`);
  const i = o.set;
  return jc(e, t, n, "set"), i(e, t, r);
}
function M_(e, t, n) {
  const r = e.getState(),
    o = e.getGraph(t.version),
    i = fi(n).nodeType;
  return ev(
    { type: i },
    {
      loadable: () => tv(e, t, n),
      isActive: () => r.knownAtoms.has(n) || r.knownSelectors.has(n),
      isSet: () => (i === "selector" ? !1 : t.atomValues.has(n)),
      isModified: () => t.dirtyAtoms.has(n),
      deps: () => {
        var l;
        return Sd((l = o.nodeDeps.get(n)) !== null && l !== void 0 ? l : []);
      },
      subscribers: () => {
        var l, s;
        return {
          nodes: Sd(Mc(nv(e, t, new Set([n])), (a) => a !== n)),
          components: fs(
            (l = (s = r.nodeToComponentSubscriptions.get(n)) === null || s === void 0 ? void 0 : s.values()) !== null &&
              l !== void 0
              ? l
              : [],
            ([a]) => ({ name: a })
          ),
        };
      },
    }
  );
}
function nv(e, t, n) {
  const r = new Set(),
    o = Array.from(n),
    i = e.getGraph(t.version);
  for (let s = o.pop(); s; s = o.pop()) {
    var l;
    r.add(s);
    const a = (l = i.nodeToNodeSubscriptions.get(s)) !== null && l !== void 0 ? l : C_;
    for (const u of a) r.has(u) || o.push(u);
  }
  return r;
}
var Tn = {
  getNodeLoadable: P_,
  peekNodeLoadable: tv,
  setNodeValue: $_,
  initializeNode: L_,
  cleanUpNode: A_,
  setUnvalidatedAtomValue_DEPRECATED: I_,
  peekNodeInfo: M_,
  getDownstreamNodes: nv,
};
let rv = null;
function j_(e) {
  rv = e;
}
function D_() {
  var e;
  (e = rv) === null || e === void 0 || e();
}
var ov = { setInvalidateMemoizedSnapshot: j_, invalidateMemoizedSnapshot: D_ };
const { getDownstreamNodes: O_, getNodeLoadable: iv, setNodeValue: z_ } = Tn,
  { getNextComponentID: V_ } = ds,
  { getNode: U_, getNodeMaybe: lv } = lt,
  { DefaultValue: Dc } = lt,
  { reactMode: F_ } = ui,
  { AbstractRecoilValue: B_, RecoilState: b_, RecoilValueReadOnly: W_, isRecoilValue: H_ } = jr,
  { invalidateMemoizedSnapshot: K_ } = ov;
function G_(e, { key: t }, n = e.getState().currentTree) {
  var r, o;
  const i = e.getState();
  n.version === i.currentTree.version ||
    n.version === ((r = i.nextTree) === null || r === void 0 ? void 0 : r.version) ||
    (n.version, (o = i.previousTree) === null || o === void 0 || o.version);
  const l = iv(e, n, t);
  return l.state === "loading" && l.contents.catch(() => {}), l;
}
function Q_(e, t) {
  const n = e.clone();
  return (
    t.forEach((r, o) => {
      r.state === "hasValue" && r.contents instanceof Dc ? n.delete(o) : n.set(o, r);
    }),
    n
  );
}
function Y_(e, t, { key: n }, r) {
  if (typeof r == "function") {
    const o = iv(e, t, n);
    if (o.state === "loading") {
      const i = `Tried to set atom or selector "${n}" using an updater function while the current state is pending, this is not currently supported.`;
      throw ee(i);
    } else if (o.state === "hasError") throw o.contents;
    return r(o.contents);
  } else return r;
}
function Z_(e, t, n) {
  if (n.type === "set") {
    const { recoilValue: o, valueOrUpdater: i } = n,
      l = Y_(e, t, o, i),
      s = z_(e, t, o.key, l);
    for (const [a, u] of s.entries()) Su(t, a, u);
  } else if (n.type === "setLoadable") {
    const {
      recoilValue: { key: o },
      loadable: i,
    } = n;
    Su(t, o, i);
  } else if (n.type === "markModified") {
    const {
      recoilValue: { key: o },
    } = n;
    t.dirtyAtoms.add(o);
  } else if (n.type === "setUnvalidated") {
    var r;
    const {
        recoilValue: { key: o },
        unvalidatedValue: i,
      } = n,
      l = lv(o);
    l == null || (r = l.invalidate) === null || r === void 0 || r.call(l, t),
      t.atomValues.delete(o),
      t.nonvalidatedAtoms.set(o, i),
      t.dirtyAtoms.add(o);
  } else Lc(`Unknown action ${n.type}`);
}
function Su(e, t, n) {
  n.state === "hasValue" && n.contents instanceof Dc ? e.atomValues.delete(t) : e.atomValues.set(t, n),
    e.dirtyAtoms.add(t),
    e.nonvalidatedAtoms.delete(t);
}
function sv(e, t) {
  e.replaceState((n) => {
    const r = av(n);
    for (const o of t) Z_(e, r, o);
    return uv(e, r), K_(), r;
  });
}
function hs(e, t) {
  if (Po.length) {
    const n = Po[Po.length - 1];
    let r = n.get(e);
    r || n.set(e, (r = [])), r.push(t);
  } else sv(e, [t]);
}
const Po = [];
function X_() {
  const e = new Map();
  return (
    Po.push(e),
    () => {
      for (const [t, n] of e) sv(t, n);
      Po.pop();
    }
  );
}
function av(e) {
  return {
    ...e,
    atomValues: e.atomValues.clone(),
    nonvalidatedAtoms: e.nonvalidatedAtoms.clone(),
    dirtyAtoms: new Set(e.dirtyAtoms),
  };
}
function uv(e, t) {
  const n = O_(e, t, t.dirtyAtoms);
  for (const i of n) {
    var r, o;
    (r = lv(i)) === null || r === void 0 || (o = r.invalidate) === null || o === void 0 || o.call(r, t);
  }
}
function cv(e, t, n) {
  hs(e, { type: "set", recoilValue: t, valueOrUpdater: n });
}
function J_(e, t, n) {
  if (n instanceof Dc) return cv(e, t, n);
  hs(e, { type: "setLoadable", recoilValue: t, loadable: n });
}
function q_(e, t) {
  hs(e, { type: "markModified", recoilValue: t });
}
function ew(e, t, n) {
  hs(e, { type: "setUnvalidated", recoilValue: t, unvalidatedValue: n });
}
function tw(e, { key: t }, n, r = null) {
  const o = V_(),
    i = e.getState();
  i.nodeToComponentSubscriptions.has(t) || i.nodeToComponentSubscriptions.set(t, new Map()),
    we(i.nodeToComponentSubscriptions.get(t)).set(o, [r ?? "<not captured>", n]);
  const l = F_();
  if (l.early && (l.mode === "LEGACY" || l.mode === "MUTABLE_SOURCE")) {
    const s = e.getState().nextTree;
    s && s.dirtyAtoms.has(t) && n(s);
  }
  return {
    release: () => {
      const s = e.getState(),
        a = s.nodeToComponentSubscriptions.get(t);
      a === void 0 || !a.has(o) || (a.delete(o), a.size === 0 && s.nodeToComponentSubscriptions.delete(t));
    },
  };
}
function nw(e, t) {
  var n;
  const { currentTree: r } = e.getState(),
    o = U_(t.key);
  (n = o.clearCache) === null || n === void 0 || n.call(o, e, r);
}
var bt = {
  RecoilValueReadOnly: W_,
  AbstractRecoilValue: B_,
  RecoilState: b_,
  getRecoilValueAsLoadable: G_,
  setRecoilValue: cv,
  setRecoilValueLoadable: J_,
  markRecoilValueModified: q_,
  setUnvalidatedRecoilValue: ew,
  subscribeToRecoilValue: tw,
  isRecoilValue: H_,
  applyAtomValueWrites: Q_,
  batchStart: X_,
  writeLoadableToTreeState: Su,
  invalidateDownstreams: uv,
  copyTreeState: av,
  refreshRecoilValue: nw,
};
function rw(e, t, n) {
  const r = e.entries();
  let o = r.next();
  for (; !o.done; ) {
    const i = o.value;
    if (t.call(n, i[1], i[0], e)) return !0;
    o = r.next();
  }
  return !1;
}
var ow = rw;
const { cleanUpNode: iw } = Tn,
  { deleteNodeConfigIfPossible: lw, getNode: fv } = lt,
  { RetentionZone: dv } = ps,
  sw = 12e4,
  pv = new Set();
function hv(e, t) {
  const n = e.getState(),
    r = n.currentTree;
  if (n.nextTree) return;
  const o = new Set();
  for (const l of t)
    if (l instanceof dv) for (const s of fw(n, l)) o.add(s);
    else o.add(l);
  const i = aw(e, o);
  for (const l of i) cw(e, r, l);
}
function aw(e, t) {
  const n = e.getState(),
    r = n.currentTree,
    o = e.getGraph(r.version),
    i = new Set(),
    l = new Set();
  return s(t), i;
  function s(a) {
    const u = new Set(),
      f = uw(e, r, a, i, l);
    for (const v of f) {
      var d;
      if (fv(v).retainedBy === "recoilRoot") {
        l.add(v);
        continue;
      }
      if (((d = n.retention.referenceCounts.get(v)) !== null && d !== void 0 ? d : 0) > 0) {
        l.add(v);
        continue;
      }
      if (mv(v).some((T) => n.retention.referenceCounts.get(T))) {
        l.add(v);
        continue;
      }
      const w = o.nodeToNodeSubscriptions.get(v);
      if (w && ow(w, (T) => l.has(T))) {
        l.add(v);
        continue;
      }
      i.add(v), u.add(v);
    }
    const m = new Set();
    for (const v of u)
      for (const w of (S = o.nodeDeps.get(v)) !== null && S !== void 0 ? S : pv) {
        var S;
        i.has(w) || m.add(w);
      }
    m.size && s(m);
  }
}
function uw(e, t, n, r, o) {
  const i = e.getGraph(t.version),
    l = [],
    s = new Set();
  for (; n.size > 0; ) a(we(n.values().next().value));
  return l;
  function a(u) {
    if (r.has(u) || o.has(u)) {
      n.delete(u);
      return;
    }
    if (s.has(u)) return;
    const f = i.nodeToNodeSubscriptions.get(u);
    if (f) for (const d of f) a(d);
    s.add(u), n.delete(u), l.push(u);
  }
}
function cw(e, t, n) {
  if (!fe("recoil_memory_managament_2020")) return;
  iw(e, n);
  const r = e.getState();
  r.knownAtoms.delete(n),
    r.knownSelectors.delete(n),
    r.nodeTransactionSubscriptions.delete(n),
    r.retention.referenceCounts.delete(n);
  const o = mv(n);
  for (const a of o) {
    var i;
    (i = r.retention.nodesRetainedByZone.get(a)) === null || i === void 0 || i.delete(n);
  }
  t.atomValues.delete(n), t.dirtyAtoms.delete(n), t.nonvalidatedAtoms.delete(n);
  const l = r.graphsByVersion.get(t.version);
  if (l) {
    const a = l.nodeDeps.get(n);
    if (a !== void 0) {
      l.nodeDeps.delete(n);
      for (const u of a) {
        var s;
        (s = l.nodeToNodeSubscriptions.get(u)) === null || s === void 0 || s.delete(n);
      }
    }
    l.nodeToNodeSubscriptions.delete(n);
  }
  lw(n);
}
function fw(e, t) {
  var n;
  return (n = e.retention.nodesRetainedByZone.get(t)) !== null && n !== void 0 ? n : pv;
}
function mv(e) {
  const t = fv(e).retainedBy;
  return t === void 0 || t === "components" || t === "recoilRoot" ? [] : t instanceof dv ? [t] : t;
}
function dw(e, t) {
  const n = e.getState();
  n.nextTree ? n.retention.retainablesToCheckForRelease.add(t) : hv(e, new Set([t]));
}
function pw(e, t, n) {
  var r;
  if (!fe("recoil_memory_managament_2020")) return;
  const o = e.getState().retention.referenceCounts,
    i = ((r = o.get(t)) !== null && r !== void 0 ? r : 0) + n;
  i === 0 ? vv(e, t) : o.set(t, i);
}
function vv(e, t) {
  if (!fe("recoil_memory_managament_2020")) return;
  e.getState().retention.referenceCounts.delete(t), dw(e, t);
}
function hw(e) {
  if (!fe("recoil_memory_managament_2020")) return;
  const t = e.getState();
  hv(e, t.retention.retainablesToCheckForRelease), t.retention.retainablesToCheckForRelease.clear();
}
function mw(e) {
  return e === void 0 ? "recoilRoot" : e;
}
var qn = {
  SUSPENSE_TIMEOUT_MS: sw,
  updateRetainCount: pw,
  updateRetainCountToZero: vv,
  releaseScheduledRetainablesNow: hw,
  retainedByOptionWithDefault: mw,
};
const { unstable_batchedUpdates: vw } = g1;
var gw = { unstable_batchedUpdates: vw };
const { unstable_batchedUpdates: yw } = gw;
var Sw = { unstable_batchedUpdates: yw };
const { batchStart: _w } = bt,
  { unstable_batchedUpdates: ww } = Sw;
let Oc = ww || ((e) => e());
const Rw = (e) => {
    Oc = e;
  },
  Ew = () => Oc,
  xw = (e) => {
    Oc(() => {
      let t = () => {};
      try {
        (t = _w()), e();
      } finally {
        t();
      }
    });
  };
var ms = { getBatcher: Ew, setBatcher: Rw, batchUpdates: xw };
function* kw(e) {
  for (const t of e) for (const n of t) yield n;
}
var gv = kw;
const yv = typeof Window > "u" || typeof window > "u",
  Cw = (e) => !yv && (e === window || e instanceof Window),
  Tw = typeof navigator < "u" && navigator.product === "ReactNative";
var vs = { isSSR: yv, isReactNative: Tw, isWindow: Cw };
function Nw(e, t) {
  let n;
  return (...r) => {
    n || (n = {});
    const o = t(...r);
    return Object.hasOwnProperty.call(n, o) || (n[o] = e(...r)), n[o];
  };
}
function Lw(e, t) {
  let n, r;
  return (...o) => {
    const i = t(...o);
    return n === i || ((n = i), (r = e(...o))), r;
  };
}
function Aw(e, t) {
  let n, r;
  return [
    (...l) => {
      const s = t(...l);
      return n === s || ((n = s), (r = e(...l))), r;
    },
    () => {
      n = null;
    },
  ];
}
var Pw = { memoizeWithArgsHash: Nw, memoizeOneWithArgsHash: Lw, memoizeOneWithArgsHashAndInvalidation: Aw };
const { batchUpdates: _u } = ms,
  { initializeNode: Iw, peekNodeInfo: $w } = Tn,
  { graph: Mw } = ci,
  { getNextStoreID: jw } = ds,
  { DEFAULT_VALUE: Dw, recoilValues: wd, recoilValuesForKeys: Rd } = lt,
  { AbstractRecoilValue: Ow, getRecoilValueAsLoadable: zw, setRecoilValue: Ed, setUnvalidatedRecoilValue: Vw } = bt,
  { updateRetainCount: rl } = qn,
  { setInvalidateMemoizedSnapshot: Uw } = ov,
  { getNextTreeStateVersion: Fw, makeEmptyStoreState: Bw } = Xm,
  { isSSR: bw } = vs,
  { memoizeOneWithArgsHashAndInvalidation: Ww } = Pw;
class gs {
  constructor(t, n) {
    J(this, "_store", void 0),
      J(this, "_refCount", 1),
      J(this, "getLoadable", (r) => (this.checkRefCount_INTERNAL(), zw(this._store, r))),
      J(this, "getPromise", (r) => (this.checkRefCount_INTERNAL(), this.getLoadable(r).toPromise())),
      J(this, "getNodes_UNSTABLE", (r) => {
        if ((this.checkRefCount_INTERNAL(), (r == null ? void 0 : r.isModified) === !0)) {
          if ((r == null ? void 0 : r.isInitialized) === !1) return [];
          const l = this._store.getState().currentTree;
          return Rd(l.dirtyAtoms);
        }
        const o = this._store.getState().knownAtoms,
          i = this._store.getState().knownSelectors;
        return (r == null ? void 0 : r.isInitialized) == null
          ? wd.values()
          : r.isInitialized === !0
            ? Rd(gv([o, i]))
            : Mc(wd.values(), ({ key: l }) => !o.has(l) && !i.has(l));
      }),
      J(
        this,
        "getInfo_UNSTABLE",
        ({ key: r }) => (this.checkRefCount_INTERNAL(), $w(this._store, this._store.getState().currentTree, r))
      ),
      J(this, "map", (r) => {
        this.checkRefCount_INTERNAL();
        const o = new wu(this, _u);
        return r(o), o;
      }),
      J(this, "asyncMap", async (r) => {
        this.checkRefCount_INTERNAL();
        const o = new wu(this, _u);
        return o.retain(), await r(o), o.autoRelease_INTERNAL(), o;
      }),
      (this._store = {
        storeID: jw(),
        parentStoreID: n,
        getState: () => t,
        replaceState: (r) => {
          t.currentTree = r(t.currentTree);
        },
        getGraph: (r) => {
          const o = t.graphsByVersion;
          if (o.has(r)) return we(o.get(r));
          const i = Mw();
          return o.set(r, i), i;
        },
        subscribeToTransactions: () => ({ release: () => {} }),
        addTransactionMetadata: () => {
          throw ee("Cannot subscribe to Snapshots");
        },
      });
    for (const r of this._store.getState().knownAtoms) Iw(this._store, r, "get"), rl(this._store, r, 1);
    this.autoRelease_INTERNAL();
  }
  retain() {
    this._refCount <= 0, this._refCount++;
    let t = !1;
    return () => {
      t || ((t = !0), this._release());
    };
  }
  autoRelease_INTERNAL() {
    bw || window.setTimeout(() => this._release(), 10);
  }
  _release() {
    if ((this._refCount--, this._refCount === 0)) {
      if (
        (this._store.getState().nodeCleanupFunctions.forEach((t) => t()),
        this._store.getState().nodeCleanupFunctions.clear(),
        !fe("recoil_memory_managament_2020"))
      )
        return;
    } else this._refCount < 0;
  }
  isRetained() {
    return this._refCount > 0;
  }
  checkRefCount_INTERNAL() {
    fe("recoil_memory_managament_2020") && this._refCount <= 0;
  }
  getStore_INTERNAL() {
    return this.checkRefCount_INTERNAL(), this._store;
  }
  getID() {
    return this.checkRefCount_INTERNAL(), this._store.getState().currentTree.stateID;
  }
  getStoreID() {
    return this.checkRefCount_INTERNAL(), this._store.storeID;
  }
}
function Sv(e, t, n = !1) {
  const r = e.getState(),
    o = n ? Fw() : t.version;
  return {
    currentTree: {
      version: n ? o : t.version,
      stateID: n ? o : t.stateID,
      transactionMetadata: { ...t.transactionMetadata },
      dirtyAtoms: new Set(t.dirtyAtoms),
      atomValues: t.atomValues.clone(),
      nonvalidatedAtoms: t.nonvalidatedAtoms.clone(),
    },
    commitDepth: 0,
    nextTree: null,
    previousTree: null,
    knownAtoms: new Set(r.knownAtoms),
    knownSelectors: new Set(r.knownSelectors),
    transactionSubscriptions: new Map(),
    nodeTransactionSubscriptions: new Map(),
    nodeToComponentSubscriptions: new Map(),
    queuedComponentCallbacks_DEPRECATED: [],
    suspendedComponentResolvers: new Set(),
    graphsByVersion: new Map().set(o, e.getGraph(t.version)),
    retention: { referenceCounts: new Map(), nodesRetainedByZone: new Map(), retainablesToCheckForRelease: new Set() },
    nodeCleanupFunctions: new Map(fs(r.nodeCleanupFunctions.entries(), ([i]) => [i, () => {}])),
  };
}
function Hw(e) {
  const t = new gs(Bw());
  return e != null ? t.map(e) : t;
}
const [xd, _v] = Ww(
  (e, t) => {
    var n;
    const r = e.getState(),
      o = t === "latest" ? ((n = r.nextTree) !== null && n !== void 0 ? n : r.currentTree) : we(r.previousTree);
    return new gs(Sv(e, o), e.storeID);
  },
  (e, t) => {
    var n, r;
    return (
      String(t) +
      String(e.storeID) +
      String((n = e.getState().nextTree) === null || n === void 0 ? void 0 : n.version) +
      String(e.getState().currentTree.version) +
      String((r = e.getState().previousTree) === null || r === void 0 ? void 0 : r.version)
    );
  }
);
Uw(_v);
function Kw(e, t = "latest") {
  const n = xd(e, t);
  return n.isRetained() ? n : (_v(), xd(e, t));
}
class wu extends gs {
  constructor(t, n) {
    super(Sv(t.getStore_INTERNAL(), t.getStore_INTERNAL().getState().currentTree, !0), t.getStoreID()),
      J(this, "_batch", void 0),
      J(this, "set", (r, o) => {
        this.checkRefCount_INTERNAL();
        const i = this.getStore_INTERNAL();
        this._batch(() => {
          rl(i, r.key, 1), Ed(this.getStore_INTERNAL(), r, o);
        });
      }),
      J(this, "reset", (r) => {
        this.checkRefCount_INTERNAL();
        const o = this.getStore_INTERNAL();
        this._batch(() => {
          rl(o, r.key, 1), Ed(this.getStore_INTERNAL(), r, Dw);
        });
      }),
      J(this, "setUnvalidatedAtomValues_DEPRECATED", (r) => {
        this.checkRefCount_INTERNAL();
        const o = this.getStore_INTERNAL();
        _u(() => {
          for (const [i, l] of r.entries()) rl(o, i, 1), Vw(o, new Ow(i), l);
        });
      }),
      (this._batch = n);
  }
}
var ys = { Snapshot: gs, MutableSnapshot: wu, freshSnapshot: Hw, cloneSnapshot: Kw },
  Gw = ys.Snapshot,
  Qw = ys.MutableSnapshot,
  Yw = ys.freshSnapshot,
  Zw = ys.cloneSnapshot,
  Ss = Object.freeze({ __proto__: null, Snapshot: Gw, MutableSnapshot: Qw, freshSnapshot: Yw, cloneSnapshot: Zw });
function Xw(...e) {
  const t = new Set();
  for (const n of e) for (const r of n) t.add(r);
  return t;
}
var Jw = Xw;
const { useRef: qw } = le;
function eR(e) {
  const t = qw(e);
  return t.current === e && typeof e == "function" && (t.current = e()), t;
}
var kd = eR;
const { getNextTreeStateVersion: tR, makeEmptyStoreState: wv } = Xm,
  {
    cleanUpNode: nR,
    getDownstreamNodes: rR,
    initializeNode: oR,
    setNodeValue: iR,
    setUnvalidatedAtomValue_DEPRECATED: lR,
  } = Tn,
  { graph: sR } = ci,
  { cloneGraph: aR } = ci,
  { getNextStoreID: Rv } = ds,
  { createMutableSource: ha, reactMode: Ev } = ui,
  { applyAtomValueWrites: uR } = bt,
  { releaseScheduledRetainablesNow: xv } = qn,
  { freshSnapshot: cR } = Ss,
  { useCallback: fR, useContext: kv, useEffect: Ru, useMemo: dR, useRef: pR, useState: hR } = le;
function ao() {
  throw ee("This component must be used inside a <RecoilRoot> component.");
}
const Cv = Object.freeze({
  storeID: Rv(),
  getState: ao,
  replaceState: ao,
  getGraph: ao,
  subscribeToTransactions: ao,
  addTransactionMetadata: ao,
});
let Eu = !1;
function Cd(e) {
  if (Eu)
    throw ee(
      "An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions."
    );
  const t = e.getState();
  if (t.nextTree === null) {
    fe("recoil_memory_managament_2020") &&
      fe("recoil_release_on_cascading_update_killswitch_2021") &&
      t.commitDepth > 0 &&
      xv(e);
    const n = t.currentTree.version,
      r = tR();
    (t.nextTree = { ...t.currentTree, version: r, stateID: r, dirtyAtoms: new Set(), transactionMetadata: {} }),
      t.graphsByVersion.set(r, aR(we(t.graphsByVersion.get(n))));
  }
}
const Tv = le.createContext({ current: Cv }),
  _s = () => kv(Tv),
  Nv = le.createContext(null);
function mR() {
  return kv(Nv);
}
function zc(e, t, n) {
  const r = rR(e, n, n.dirtyAtoms);
  for (const o of r) {
    const i = t.nodeToComponentSubscriptions.get(o);
    if (i) for (const [l, [s, a]] of i) a(n);
  }
}
function Lv(e) {
  const t = e.getState(),
    n = t.currentTree,
    r = n.dirtyAtoms;
  if (r.size) {
    for (const [o, i] of t.nodeTransactionSubscriptions) if (r.has(o)) for (const [l, s] of i) s(e);
    for (const [o, i] of t.transactionSubscriptions) i(e);
    (!Ev().early || t.suspendedComponentResolvers.size > 0) &&
      (zc(e, t, n), t.suspendedComponentResolvers.forEach((o) => o()), t.suspendedComponentResolvers.clear());
  }
  t.queuedComponentCallbacks_DEPRECATED.forEach((o) => o(n)),
    t.queuedComponentCallbacks_DEPRECATED.splice(0, t.queuedComponentCallbacks_DEPRECATED.length);
}
function vR(e) {
  const t = e.getState();
  t.commitDepth++;
  try {
    const { nextTree: n } = t;
    if (n == null) return;
    (t.previousTree = t.currentTree),
      (t.currentTree = n),
      (t.nextTree = null),
      Lv(e),
      t.previousTree != null
        ? t.graphsByVersion.delete(t.previousTree.version)
        : Lc("Ended batch with no previous state, which is unexpected", "recoil"),
      (t.previousTree = null),
      fe("recoil_memory_managament_2020") && n == null && xv(e);
  } finally {
    t.commitDepth--;
  }
}
function gR({ setNotifyBatcherOfChange: e }) {
  const t = _s(),
    [, n] = hR([]);
  return (
    e(() => n({})),
    Ru(
      () => (
        e(() => n({})),
        () => {
          e(() => {});
        }
      ),
      [e]
    ),
    Ru(() => {
      YS.enqueueExecution("Batcher", () => {
        vR(t.current);
      });
    }),
    null
  );
}
function yR(e, t) {
  const n = wv();
  return (
    t({
      set: (r, o) => {
        const i = n.currentTree,
          l = iR(e, i, r.key, o),
          s = new Set(l.keys()),
          a = i.nonvalidatedAtoms.clone();
        for (const u of s) a.delete(u);
        n.currentTree = {
          ...i,
          dirtyAtoms: Jw(i.dirtyAtoms, s),
          atomValues: uR(i.atomValues, l),
          nonvalidatedAtoms: a,
        };
      },
      setUnvalidatedAtomValues: (r) => {
        r.forEach((o, i) => {
          n.currentTree = lR(n.currentTree, i, o);
        });
      },
    }),
    n
  );
}
function SR(e) {
  const t = cR(e),
    n = t.getStore_INTERNAL().getState();
  return t.retain(), n.nodeCleanupFunctions.forEach((r) => r()), n.nodeCleanupFunctions.clear(), n;
}
let Td = 0;
function _R({ initializeState_DEPRECATED: e, initializeState: t, store_INTERNAL: n, children: r }) {
  let o;
  const i = (S) => {
      const v = o.current.graphsByVersion;
      if (v.has(S)) return we(v.get(S));
      const w = sR();
      return v.set(S, w), w;
    },
    l = (S, v) => {
      if (v == null) {
        const { transactionSubscriptions: w } = d.current.getState(),
          T = Td++;
        return (
          w.set(T, S),
          {
            release: () => {
              w.delete(T);
            },
          }
        );
      } else {
        const { nodeTransactionSubscriptions: w } = d.current.getState();
        w.has(v) || w.set(v, new Map());
        const T = Td++;
        return (
          we(w.get(v)).set(T, S),
          {
            release: () => {
              const h = w.get(v);
              h && (h.delete(T), h.size === 0 && w.delete(v));
            },
          }
        );
      }
    },
    s = (S) => {
      Cd(d.current);
      for (const v of Object.keys(S)) we(d.current.getState().nextTree).transactionMetadata[v] = S[v];
    },
    a = (S) => {
      Cd(d.current);
      const v = we(o.current.nextTree);
      let w;
      try {
        (Eu = !0), (w = S(v));
      } finally {
        Eu = !1;
      }
      w !== v && ((o.current.nextTree = w), Ev().early && zc(d.current, o.current, w), we(u.current)());
    },
    u = pR(null),
    f = fR(
      (S) => {
        u.current = S;
      },
      [u]
    ),
    d = kd(
      () =>
        n ?? {
          storeID: Rv(),
          getState: () => o.current,
          replaceState: a,
          getGraph: i,
          subscribeToTransactions: l,
          addTransactionMetadata: s,
        }
    );
  n != null && (d.current = n), (o = kd(() => (e != null ? yR(d.current, e) : t != null ? SR(t) : wv())));
  const m = dR(() => (ha == null ? void 0 : ha(o, () => o.current.currentTree.version)), [o]);
  return (
    Ru(() => {
      const S = d.current;
      for (const v of new Set(S.getState().knownAtoms)) oR(S, v, "get");
      return () => {
        for (const v of S.getState().knownAtoms) nR(S, v);
      };
    }, [d]),
    le.createElement(
      Tv.Provider,
      { value: d },
      le.createElement(Nv.Provider, { value: m }, le.createElement(gR, { setNotifyBatcherOfChange: f }), r)
    )
  );
}
function wR(e) {
  const { override: t, ...n } = e,
    r = _s();
  return t === !1 && r.current !== Cv ? e.children : le.createElement(_R, n);
}
function RR() {
  return _s().current.storeID;
}
var nn = {
  RecoilRoot: wR,
  useStoreRef: _s,
  useRecoilMutableSource: mR,
  useRecoilStoreID: RR,
  notifyComponents_FOR_TESTING: zc,
  sendEndOfBatchNotifications_FOR_TESTING: Lv,
};
function ER(e, t) {
  if (e === t) return !0;
  if (e.length !== t.length) return !1;
  for (let n = 0, r = e.length; n < r; n++) if (e[n] !== t[n]) return !1;
  return !0;
}
var xR = ER;
const { useEffect: kR, useRef: CR } = le;
function TR(e) {
  const t = CR();
  return (
    kR(() => {
      t.current = e;
    }),
    t.current
  );
}
var Av = TR;
const { useStoreRef: NR } = nn,
  { SUSPENSE_TIMEOUT_MS: LR } = qn,
  { updateRetainCount: uo } = qn,
  { RetentionZone: AR } = ps,
  { useEffect: PR, useRef: IR } = le,
  { isSSR: Nd } = vs;
function $R(e) {
  if (fe("recoil_memory_managament_2020")) return MR(e);
}
function MR(e) {
  const n = (Array.isArray(e) ? e : [e]).map((l) => (l instanceof AR ? l : l.key)),
    r = NR();
  PR(() => {
    if (!fe("recoil_memory_managament_2020")) return;
    const l = r.current;
    if (o.current && !Nd) window.clearTimeout(o.current), (o.current = null);
    else for (const s of n) uo(l, s, 1);
    return () => {
      for (const s of n) uo(l, s, -1);
    };
  }, [r, ...n]);
  const o = IR(),
    i = Av(n);
  if (!Nd && (i === void 0 || !xR(i, n))) {
    const l = r.current;
    for (const s of n) uo(l, s, 1);
    if (i) for (const s of i) uo(l, s, -1);
    o.current && window.clearTimeout(o.current),
      (o.current = window.setTimeout(() => {
        o.current = null;
        for (const s of n) uo(l, s, -1);
      }, LR));
  }
}
var Vc = $R;
function jR() {
  return "<component name not available>";
}
var di = jR;
const { batchUpdates: DR } = ms,
  { DEFAULT_VALUE: Pv } = lt,
  {
    currentRendererSupportsUseSyncExternalStore: OR,
    reactMode: Zr,
    useMutableSource: zR,
    useSyncExternalStore: VR,
  } = ui,
  { useRecoilMutableSource: UR, useStoreRef: Wt } = nn,
  {
    AbstractRecoilValue: xu,
    getRecoilValueAsLoadable: pi,
    setRecoilValue: Ol,
    setUnvalidatedRecoilValue: FR,
    subscribeToRecoilValue: Dr,
  } = bt,
  { useCallback: it, useEffect: Or, useMemo: Iv, useRef: Io, useState: Uc } = le,
  { setByAddingToSet: BR } = qm,
  { isSSR: bR } = vs;
function Fc(e, t, n) {
  if (e.state === "hasValue") return e.contents;
  throw e.state === "loading"
    ? new Promise((o) => {
        const i = n.current.getState().suspendedComponentResolvers;
        i.add(o),
          bR &&
            ve(e.contents) &&
            e.contents.finally(() => {
              i.delete(o);
            });
      })
    : e.state === "hasError"
      ? e.contents
      : ee(`Invalid value of loadable atom "${t.key}"`);
}
function WR() {
  const e = di(),
    t = Wt(),
    [, n] = Uc([]),
    r = Io(new Set());
  r.current = new Set();
  const o = Io(new Set()),
    i = Io(new Map()),
    l = it(
      (a) => {
        const u = i.current.get(a);
        u && (u.release(), i.current.delete(a));
      },
      [i]
    ),
    s = it((a, u) => {
      i.current.has(u) && n([]);
    }, []);
  return (
    Or(() => {
      const a = t.current;
      Ao(r.current, o.current).forEach((u) => {
        if (i.current.has(u)) return;
        const f = Dr(a, new xu(u), (m) => s(m, u), e);
        i.current.set(u, f),
          a.getState().nextTree
            ? a.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
                s(a.getState(), u);
              })
            : s(a.getState(), u);
      }),
        Ao(o.current, r.current).forEach((u) => {
          l(u);
        }),
        (o.current = r.current);
    }),
    Or(() => {
      const a = i.current;
      return (
        Ao(r.current, new Set(a.keys())).forEach((u) => {
          const f = Dr(t.current, new xu(u), (d) => s(d, u), e);
          a.set(u, f);
        }),
        () => a.forEach((u, f) => l(f))
      );
    }, [e, t, l, s]),
    Iv(() => {
      function a(v) {
        return (w) => {
          Ol(t.current, v, w);
        };
      }
      function u(v) {
        return () => Ol(t.current, v, Pv);
      }
      function f(v) {
        var w;
        r.current.has(v.key) || (r.current = BR(r.current, v.key));
        const T = t.current.getState();
        return pi(t.current, v, Zr().early && (w = T.nextTree) !== null && w !== void 0 ? w : T.currentTree);
      }
      function d(v) {
        const w = f(v);
        return Fc(w, v, t);
      }
      function m(v) {
        return [d(v), a(v)];
      }
      function S(v) {
        return [f(v), a(v)];
      }
      return {
        getRecoilValue: d,
        getRecoilValueLoadable: f,
        getRecoilState: m,
        getRecoilStateLoadable: S,
        getSetRecoilState: a,
        getResetRecoilState: u,
      };
    }, [r, t])
  );
}
const HR = { current: 0 };
function KR(e) {
  const t = Wt(),
    n = di(),
    r = it(() => {
      var s;
      const a = t.current,
        u = a.getState(),
        f = Zr().early && (s = u.nextTree) !== null && s !== void 0 ? s : u.currentTree;
      return { loadable: pi(a, e, f), key: e.key };
    }, [t, e]),
    o = it((s) => {
      let a;
      return () => {
        var u, f;
        const d = s();
        return (u = a) !== null &&
          u !== void 0 &&
          u.loadable.is(d.loadable) &&
          ((f = a) === null || f === void 0 ? void 0 : f.key) === d.key
          ? a
          : ((a = d), d);
      };
    }, []),
    i = Iv(() => o(r), [r, o]),
    l = it(
      (s) => {
        const a = t.current;
        return Dr(a, e, s, n).release;
      },
      [t, e, n]
    );
  return VR(l, i, i).loadable;
}
function GR(e) {
  const t = Wt(),
    n = it(() => {
      var u;
      const f = t.current,
        d = f.getState(),
        m = Zr().early && (u = d.nextTree) !== null && u !== void 0 ? u : d.currentTree;
      return pi(f, e, m);
    }, [t, e]),
    r = it(() => n(), [n]),
    o = di(),
    i = it(
      (u, f) => {
        const d = t.current;
        return Dr(
          d,
          e,
          () => {
            if (!fe("recoil_suppress_rerender_in_callback")) return f();
            const S = n();
            a.current.is(S) || f(), (a.current = S);
          },
          o
        ).release;
      },
      [t, e, o, n]
    ),
    l = UR();
  if (l == null) throw ee("Recoil hooks must be used in components contained within a <RecoilRoot> component.");
  const s = zR(l, r, i),
    a = Io(s);
  return (
    Or(() => {
      a.current = s;
    }),
    s
  );
}
function ku(e) {
  const t = Wt(),
    n = di(),
    r = it(() => {
      var a;
      const u = t.current,
        f = u.getState(),
        d = Zr().early && (a = f.nextTree) !== null && a !== void 0 ? a : f.currentTree;
      return pi(u, e, d);
    }, [t, e]),
    o = it(() => ({ loadable: r(), key: e.key }), [r, e.key]),
    i = it(
      (a) => {
        const u = o();
        return a.loadable.is(u.loadable) && a.key === u.key ? a : u;
      },
      [o]
    );
  Or(() => {
    const a = Dr(
      t.current,
      e,
      (u) => {
        s(i);
      },
      n
    );
    return s(i), a.release;
  }, [n, e, t, i]);
  const [l, s] = Uc(o);
  return l.key !== e.key ? o().loadable : l.loadable;
}
function QR(e) {
  const t = Wt(),
    [, n] = Uc([]),
    r = di(),
    o = it(() => {
      var s;
      const a = t.current,
        u = a.getState(),
        f = Zr().early && (s = u.nextTree) !== null && s !== void 0 ? s : u.currentTree;
      return pi(a, e, f);
    }, [t, e]),
    i = o(),
    l = Io(i);
  return (
    Or(() => {
      l.current = i;
    }),
    Or(() => {
      const s = t.current,
        a = s.getState(),
        u = Dr(
          s,
          e,
          (d) => {
            var m;
            if (!fe("recoil_suppress_rerender_in_callback")) return n([]);
            const S = o();
            ((m = l.current) !== null && m !== void 0 && m.is(S)) || n(S), (l.current = S);
          },
          r
        );
      if (a.nextTree)
        s.getState().queuedComponentCallbacks_DEPRECATED.push(() => {
          (l.current = null), n([]);
        });
      else {
        var f;
        if (!fe("recoil_suppress_rerender_in_callback")) return n([]);
        const d = o();
        ((f = l.current) !== null && f !== void 0 && f.is(d)) || n(d), (l.current = d);
      }
      return u.release;
    }, [r, o, e, t]),
    i
  );
}
function Bc(e) {
  return (
    fe("recoil_memory_managament_2020") && Vc(e),
    { TRANSITION_SUPPORT: ku, SYNC_EXTERNAL_STORE: OR() ? KR : ku, MUTABLE_SOURCE: GR, LEGACY: QR }[Zr().mode](e)
  );
}
function $v(e) {
  const t = Wt(),
    n = Bc(e);
  return Fc(n, e, t);
}
function ws(e) {
  const t = Wt();
  return it(
    (n) => {
      Ol(t.current, e, n);
    },
    [t, e]
  );
}
function YR(e) {
  const t = Wt();
  return it(() => {
    Ol(t.current, e, Pv);
  }, [t, e]);
}
function ZR(e) {
  return [$v(e), ws(e)];
}
function XR(e) {
  return [Bc(e), ws(e)];
}
function JR() {
  const e = Wt();
  return (t, n = {}) => {
    DR(() => {
      e.current.addTransactionMetadata(n), t.forEach((r, o) => FR(e.current, new xu(o), r));
    });
  };
}
function Mv(e) {
  return fe("recoil_memory_managament_2020") && Vc(e), ku(e);
}
function jv(e) {
  const t = Wt(),
    n = Mv(e);
  return Fc(n, e, t);
}
function qR(e) {
  return [jv(e), ws(e)];
}
var eE = {
  recoilComponentGetRecoilValueCount_FOR_TESTING: HR,
  useRecoilInterface: WR,
  useRecoilState: ZR,
  useRecoilStateLoadable: XR,
  useRecoilValue: $v,
  useRecoilValueLoadable: Bc,
  useResetRecoilState: YR,
  useSetRecoilState: ws,
  useSetUnvalidatedAtomValues: JR,
  useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: Mv,
  useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: jv,
  useRecoilState_TRANSITION_SUPPORT_UNSTABLE: qR,
};
function tE(e, t) {
  const n = new Map();
  for (const [r, o] of e) t(o, r) && n.set(r, o);
  return n;
}
var nE = tE;
function rE(e, t) {
  const n = new Set();
  for (const r of e) t(r) && n.add(r);
  return n;
}
var oE = rE;
function iE(...e) {
  const t = new Map();
  for (let n = 0; n < e.length; n++) {
    const r = e[n].keys();
    let o;
    for (; !(o = r.next()).done; ) t.set(o.value, e[n].get(o.value));
  }
  return t;
}
var lE = iE;
const { batchUpdates: sE } = ms,
  { DEFAULT_VALUE: aE, getNode: Dv, nodes: uE } = lt,
  { useStoreRef: bc } = nn,
  { AbstractRecoilValue: cE, setRecoilValueLoadable: fE } = bt,
  { SUSPENSE_TIMEOUT_MS: dE } = qn,
  { cloneSnapshot: zl } = Ss,
  { useCallback: Rs, useEffect: Ov, useRef: Ld, useState: pE } = le,
  { isSSR: Ad } = vs;
function Es(e) {
  const t = bc();
  Ov(() => t.current.subscribeToTransactions(e).release, [e, t]);
}
function Pd(e) {
  const t = e.atomValues.toMap(),
    n = Dl(
      nE(t, (r, o) => {
        const l = Dv(o).persistence_UNSTABLE;
        return l != null && l.type !== "none" && r.state === "hasValue";
      }),
      (r) => r.contents
    );
  return lE(e.nonvalidatedAtoms.toMap(), n);
}
function hE(e) {
  Es(
    Rs(
      (t) => {
        let n = t.getState().previousTree;
        const r = t.getState().currentTree;
        n || (n = t.getState().currentTree);
        const o = Pd(r),
          i = Pd(n),
          l = Dl(uE, (a) => {
            var u, f, d, m;
            return {
              persistence_UNSTABLE: {
                type:
                  (u = (f = a.persistence_UNSTABLE) === null || f === void 0 ? void 0 : f.type) !== null && u !== void 0
                    ? u
                    : "none",
                backButton:
                  (d = (m = a.persistence_UNSTABLE) === null || m === void 0 ? void 0 : m.backButton) !== null &&
                  d !== void 0
                    ? d
                    : !1,
              },
            };
          }),
          s = oE(r.dirtyAtoms, (a) => o.has(a) || i.has(a));
        e({
          atomValues: o,
          previousAtomValues: i,
          atomInfo: l,
          modifiedAtoms: s,
          transactionMetadata: { ...r.transactionMetadata },
        });
      },
      [e]
    )
  );
}
function mE(e) {
  Es(
    Rs(
      (t) => {
        const n = zl(t, "latest"),
          r = zl(t, "previous");
        e({ snapshot: n, previousSnapshot: r });
      },
      [e]
    )
  );
}
function vE() {
  const e = bc(),
    [t, n] = pE(() => zl(e.current)),
    r = Av(t),
    o = Ld(),
    i = Ld();
  if (
    (Es(Rs((s) => n(zl(s)), [])),
    Ov(() => {
      const s = t.retain();
      if (o.current && !Ad) {
        var a;
        window.clearTimeout(o.current),
          (o.current = null),
          (a = i.current) === null || a === void 0 || a.call(i),
          (i.current = null);
      }
      return () => {
        window.setTimeout(s, 10);
      };
    }, [t]),
    r !== t && !Ad)
  ) {
    if (o.current) {
      var l;
      window.clearTimeout(o.current),
        (o.current = null),
        (l = i.current) === null || l === void 0 || l.call(i),
        (i.current = null);
    }
    (i.current = t.retain()),
      (o.current = window.setTimeout(() => {
        var s;
        (o.current = null), (s = i.current) === null || s === void 0 || s.call(i), (i.current = null);
      }, dE));
  }
  return t;
}
function zv(e, t) {
  var n;
  const r = e.getState(),
    o = (n = r.nextTree) !== null && n !== void 0 ? n : r.currentTree,
    i = t.getStore_INTERNAL().getState().currentTree;
  sE(() => {
    const l = new Set();
    for (const u of [o.atomValues.keys(), i.atomValues.keys()])
      for (const f of u) {
        var s, a;
        ((s = o.atomValues.get(f)) === null || s === void 0 ? void 0 : s.contents) !==
          ((a = i.atomValues.get(f)) === null || a === void 0 ? void 0 : a.contents) &&
          Dv(f).shouldRestoreFromSnapshots &&
          l.add(f);
      }
    l.forEach((u) => {
      fE(e, new cE(u), i.atomValues.has(u) ? we(i.atomValues.get(u)) : aE);
    }),
      e.replaceState((u) => ({ ...u, stateID: t.getID() }));
  });
}
function gE() {
  const e = bc();
  return Rs((t) => zv(e.current, t), [e]);
}
var Vv = {
  useRecoilSnapshot: vE,
  gotoSnapshot: zv,
  useGotoRecoilSnapshot: gE,
  useRecoilTransactionObserver: mE,
  useTransactionObservation_DEPRECATED: hE,
  useTransactionSubscription_DEPRECATED: Es,
};
const { peekNodeInfo: yE } = Tn,
  { useStoreRef: SE } = nn;
function _E() {
  const e = SE();
  return ({ key: t }) => yE(e.current, e.current.getState().currentTree, t);
}
var wE = _E;
const { reactMode: RE } = ui,
  { RecoilRoot: EE, useStoreRef: xE } = nn,
  { useMemo: kE } = le;
function CE() {
  RE().mode === "MUTABLE_SOURCE" &&
    console.warn(
      "Warning: There are known issues using useRecoilBridgeAcrossReactRoots() in recoil_mutable_source rendering mode.  Please consider upgrading to recoil_sync_external_store mode."
    );
  const e = xE().current;
  return kE(() => {
    function t({ children: n }) {
      return le.createElement(EE, { store_INTERNAL: e }, n);
    }
    return t;
  }, [e]);
}
var TE = CE;
const { loadableWithValue: NE } = ai,
  { initializeNode: LE } = Tn,
  { DEFAULT_VALUE: AE, getNode: PE } = lt,
  { copyTreeState: IE, getRecoilValueAsLoadable: $E, invalidateDownstreams: ME, writeLoadableToTreeState: jE } = bt;
function Id(e) {
  return PE(e.key).nodeType === "atom";
}
class DE {
  constructor(t, n) {
    J(this, "_store", void 0),
      J(this, "_treeState", void 0),
      J(this, "_changes", void 0),
      J(this, "get", (r) => {
        if (this._changes.has(r.key)) return this._changes.get(r.key);
        if (!Id(r)) throw ee("Reading selectors within atomicUpdate is not supported");
        const o = $E(this._store, r, this._treeState);
        if (o.state === "hasValue") return o.contents;
        throw o.state === "hasError"
          ? o.contents
          : ee(`Expected Recoil atom ${r.key} to have a value, but it is in a loading state.`);
      }),
      J(this, "set", (r, o) => {
        if (!Id(r)) throw ee("Setting selectors within atomicUpdate is not supported");
        if (typeof o == "function") {
          const i = this.get(r);
          this._changes.set(r.key, o(i));
        } else LE(this._store, r.key, "set"), this._changes.set(r.key, o);
      }),
      J(this, "reset", (r) => {
        this.set(r, AE);
      }),
      (this._store = t),
      (this._treeState = n),
      (this._changes = new Map());
  }
  newTreeState_INTERNAL() {
    if (this._changes.size === 0) return this._treeState;
    const t = IE(this._treeState);
    for (const [n, r] of this._changes) jE(t, n, NE(r));
    return ME(this._store, t), t;
  }
}
function OE(e) {
  return (t) => {
    e.replaceState((n) => {
      const r = new DE(e, n);
      return t(r), r.newTreeState_INTERNAL();
    });
  };
}
var zE = { atomicUpdater: OE },
  VE = zE.atomicUpdater,
  Uv = Object.freeze({ __proto__: null, atomicUpdater: VE });
function UE(e, t) {
  if (!e) throw new Error(t);
}
var FE = UE,
  So = FE;
const { atomicUpdater: BE } = Uv,
  { batchUpdates: bE } = ms,
  { DEFAULT_VALUE: WE } = lt,
  { useStoreRef: HE } = nn,
  { refreshRecoilValue: KE, setRecoilValue: $d } = bt,
  { cloneSnapshot: GE } = Ss,
  { gotoSnapshot: QE } = Vv,
  { useCallback: YE } = le;
class Fv {}
const ZE = new Fv();
function Bv(e, t, n, r) {
  let o = ZE,
    i;
  if (
    (bE(() => {
      const s =
        "useRecoilCallback() expects a function that returns a function: it accepts a function of the type (RecoilInterface) => (Args) => ReturnType and returns a callback function (Args) => ReturnType, where RecoilInterface is an object {snapshot, set, ...} and Args and ReturnType are the argument and return types of the callback you want to create.  Please see the docs at recoiljs.org for details.";
      if (typeof t != "function") throw ee(s);
      const a = ev(
          {
            ...(r ?? {}),
            set: (f, d) => $d(e, f, d),
            reset: (f) => $d(e, f, WE),
            refresh: (f) => KE(e, f),
            gotoSnapshot: (f) => QE(e, f),
            transact_UNSTABLE: (f) => BE(e)(f),
          },
          {
            snapshot: () => {
              const f = GE(e);
              return (i = f.retain()), f;
            },
          }
        ),
        u = t(a);
      if (typeof u != "function") throw ee(s);
      o = u(...n);
    }),
    o instanceof Fv && So(!1),
    ve(o))
  )
    o = o.finally(() => {
      var s;
      (s = i) === null || s === void 0 || s();
    });
  else {
    var l;
    (l = i) === null || l === void 0 || l();
  }
  return o;
}
function XE(e, t) {
  const n = HE();
  return YE((...r) => Bv(n.current, e, r), t != null ? [...t, n] : void 0);
}
var bv = { recoilCallback: Bv, useRecoilCallback: XE };
const { useStoreRef: JE } = nn,
  { refreshRecoilValue: qE } = bt,
  { useCallback: ex } = le;
function tx(e) {
  const t = JE();
  return ex(() => {
    const n = t.current;
    qE(n, e);
  }, [e, t]);
}
var nx = tx;
const { atomicUpdater: rx } = Uv,
  { useStoreRef: ox } = nn,
  { useMemo: ix } = le;
function lx(e, t) {
  const n = ox();
  return ix(
    () =>
      (...r) => {
        rx(n.current)((i) => {
          e(i)(...r);
        });
      },
    t != null ? [...t, n] : void 0
  );
}
var sx = lx;
class ax {
  constructor(t) {
    J(this, "value", void 0), (this.value = t);
  }
}
var ux = { WrappedValue: ax },
  cx = ux.WrappedValue,
  Wv = Object.freeze({ __proto__: null, WrappedValue: cx });
const { isFastRefreshEnabled: fx } = ui;
class Md extends Error {}
class dx {
  constructor(t) {
    var n, r, o;
    J(this, "_name", void 0),
      J(this, "_numLeafs", void 0),
      J(this, "_root", void 0),
      J(this, "_onHit", void 0),
      J(this, "_onSet", void 0),
      J(this, "_mapNodeValue", void 0),
      (this._name = t == null ? void 0 : t.name),
      (this._numLeafs = 0),
      (this._root = null),
      (this._onHit = (n = t == null ? void 0 : t.onHit) !== null && n !== void 0 ? n : () => {}),
      (this._onSet = (r = t == null ? void 0 : t.onSet) !== null && r !== void 0 ? r : () => {}),
      (this._mapNodeValue = (o = t == null ? void 0 : t.mapNodeValue) !== null && o !== void 0 ? o : (i) => i);
  }
  size() {
    return this._numLeafs;
  }
  root() {
    return this._root;
  }
  get(t, n) {
    var r;
    return (r = this.getLeafNode(t, n)) === null || r === void 0 ? void 0 : r.value;
  }
  getLeafNode(t, n) {
    if (this._root == null) return;
    let r = this._root;
    for (; r; ) {
      if ((n == null || n.onNodeVisit(r), r.type === "leaf")) return this._onHit(r), r;
      const o = this._mapNodeValue(t(r.nodeKey));
      r = r.branches.get(o);
    }
  }
  set(t, n, r) {
    const o = () => {
      var i, l, s, a;
      let u, f;
      for (const [T, h] of t) {
        var d, m, S;
        const c = this._root;
        if ((c == null ? void 0 : c.type) === "leaf") throw this.invalidCacheError();
        const p = u;
        if (
          ((u = p ? p.branches.get(f) : c),
          (u =
            (d = u) !== null && d !== void 0
              ? d
              : { type: "branch", nodeKey: T, parent: p, branches: new Map(), branchKey: f }),
          u.type !== "branch" || u.nodeKey !== T)
        )
          throw this.invalidCacheError();
        p == null || p.branches.set(f, u),
          r == null || (m = r.onNodeVisit) === null || m === void 0 || m.call(r, u),
          (f = this._mapNodeValue(h)),
          (this._root = (S = this._root) !== null && S !== void 0 ? S : u);
      }
      const v = u ? ((i = u) === null || i === void 0 ? void 0 : i.branches.get(f)) : this._root;
      if (v != null && (v.type !== "leaf" || v.branchKey !== f)) throw this.invalidCacheError();
      const w = { type: "leaf", value: n, parent: u, branchKey: f };
      (l = u) === null || l === void 0 || l.branches.set(f, w),
        (this._root = (s = this._root) !== null && s !== void 0 ? s : w),
        this._numLeafs++,
        this._onSet(w),
        r == null || (a = r.onNodeVisit) === null || a === void 0 || a.call(r, w);
    };
    try {
      o();
    } catch (i) {
      if (i instanceof Md) this.clear(), o();
      else throw i;
    }
  }
  delete(t) {
    const n = this.root();
    if (!n) return !1;
    if (t === n) return (this._root = null), (this._numLeafs = 0), !0;
    let r = t.parent,
      o = t.branchKey;
    for (; r; ) {
      var i;
      if ((r.branches.delete(o), r === n))
        return r.branches.size === 0 ? ((this._root = null), (this._numLeafs = 0)) : this._numLeafs--, !0;
      if (r.branches.size > 0) break;
      (o = (i = r) === null || i === void 0 ? void 0 : i.branchKey), (r = r.parent);
    }
    for (; r !== n; r = r.parent) if (r == null) return !1;
    return this._numLeafs--, !0;
  }
  clear() {
    (this._numLeafs = 0), (this._root = null);
  }
  invalidCacheError() {
    const t = fx()
      ? "Possible Fast Refresh module reload detected.  This may also be caused by an selector returning inconsistent values. Resetting cache."
      : "Invalid cache values.  This happens when selectors do not return consistent values for the same input dependency values.  That may also be caused when using Fast Refresh to change a selector implementation.  Resetting cache.";
    throw (Lc(t + (this._name != null ? ` - ${this._name}` : "")), new Md());
  }
}
var px = { TreeCache: dx },
  hx = px.TreeCache,
  Hv = Object.freeze({ __proto__: null, TreeCache: hx });
class mx {
  constructor(t) {
    var n;
    J(this, "_maxSize", void 0),
      J(this, "_size", void 0),
      J(this, "_head", void 0),
      J(this, "_tail", void 0),
      J(this, "_map", void 0),
      J(this, "_keyMapper", void 0),
      (this._maxSize = t.maxSize),
      (this._size = 0),
      (this._head = null),
      (this._tail = null),
      (this._map = new Map()),
      (this._keyMapper = (n = t.mapKey) !== null && n !== void 0 ? n : (r) => r);
  }
  head() {
    return this._head;
  }
  tail() {
    return this._tail;
  }
  size() {
    return this._size;
  }
  maxSize() {
    return this._maxSize;
  }
  has(t) {
    return this._map.has(this._keyMapper(t));
  }
  get(t) {
    const n = this._keyMapper(t),
      r = this._map.get(n);
    if (r) return this.set(t, r.value), r.value;
  }
  set(t, n) {
    const r = this._keyMapper(t);
    this._map.get(r) && this.delete(t);
    const i = this.head(),
      l = { key: t, right: i, left: null, value: n };
    i ? (i.left = l) : (this._tail = l), this._map.set(r, l), (this._head = l), this._size++, this._maybeDeleteLRU();
  }
  _maybeDeleteLRU() {
    this.size() > this.maxSize() && this.deleteLru();
  }
  deleteLru() {
    const t = this.tail();
    t && this.delete(t.key);
  }
  delete(t) {
    const n = this._keyMapper(t);
    if (!this._size || !this._map.has(n)) return;
    const r = we(this._map.get(n)),
      o = r.right,
      i = r.left;
    o && (o.left = r.left),
      i && (i.right = r.right),
      r === this.head() && (this._head = o),
      r === this.tail() && (this._tail = i),
      this._map.delete(n),
      this._size--;
  }
  clear() {
    (this._size = 0), (this._head = null), (this._tail = null), (this._map = new Map());
  }
}
var vx = { LRUCache: mx },
  gx = vx.LRUCache,
  Kv = Object.freeze({ __proto__: null, LRUCache: gx });
const { LRUCache: yx } = Kv,
  { TreeCache: Sx } = Hv;
function _x({ name: e, maxSize: t, mapNodeValue: n = (r) => r }) {
  const r = new yx({ maxSize: t }),
    o = new Sx({
      name: e,
      mapNodeValue: n,
      onHit: (i) => {
        r.set(i, !0);
      },
      onSet: (i) => {
        const l = r.tail();
        r.set(i, !0), l && o.size() > t && o.delete(l.key);
      },
    });
  return o;
}
var jd = _x;
function Lt(e, t, n) {
  if (typeof e == "string" && !e.includes('"') && !e.includes("\\")) return `"${e}"`;
  switch (typeof e) {
    case "undefined":
      return "";
    case "boolean":
      return e ? "true" : "false";
    case "number":
    case "symbol":
      return String(e);
    case "string":
      return JSON.stringify(e);
    case "function":
      if ((t == null ? void 0 : t.allowFunctions) !== !0)
        throw ee("Attempt to serialize function in a Recoil cache key");
      return `__FUNCTION(${e.name})__`;
  }
  if (e === null) return "null";
  if (typeof e != "object") {
    var r;
    return (r = JSON.stringify(e)) !== null && r !== void 0 ? r : "";
  }
  if (ve(e)) return "__PROMISE__";
  if (Array.isArray(e)) return `[${e.map((o, i) => Lt(o, t, i.toString()))}]`;
  if (typeof e.toJSON == "function") return Lt(e.toJSON(n), t, n);
  if (e instanceof Map) {
    const o = {};
    for (const [i, l] of e) o[typeof i == "string" ? i : Lt(i, t)] = l;
    return Lt(o, t, n);
  }
  return e instanceof Set
    ? Lt(
        Array.from(e).sort((o, i) => Lt(o, t).localeCompare(Lt(i, t))),
        t,
        n
      )
    : Symbol !== void 0 && e[Symbol.iterator] != null && typeof e[Symbol.iterator] == "function"
      ? Lt(Array.from(e), t, n)
      : `{${Object.keys(e)
          .filter((o) => e[o] !== void 0)
          .sort()
          .map((o) => `${Lt(o, t)}:${Lt(e[o], t, o)}`)
          .join(",")}}`;
}
function wx(e, t = { allowFunctions: !1 }) {
  return Lt(e, t);
}
var xs = wx;
const { TreeCache: Rx } = Hv,
  $i = { equality: "reference", eviction: "keep-all", maxSize: 1 / 0 };
function Ex({ equality: e = $i.equality, eviction: t = $i.eviction, maxSize: n = $i.maxSize } = $i, r) {
  const o = xx(e);
  return kx(t, n, o, r);
}
function xx(e) {
  switch (e) {
    case "reference":
      return (t) => t;
    case "value":
      return (t) => xs(t);
  }
  throw ee(`Unrecognized equality policy ${e}`);
}
function kx(e, t, n, r) {
  switch (e) {
    case "keep-all":
      return new Rx({ name: r, mapNodeValue: n });
    case "lru":
      return jd({ name: r, maxSize: we(t), mapNodeValue: n });
    case "most-recent":
      return jd({ name: r, maxSize: 1, mapNodeValue: n });
  }
  throw ee(`Unrecognized eviction policy ${e}`);
}
var Cx = Ex;
function Tx(e) {
  return () => null;
}
var Nx = { startPerfBlock: Tx };
const { isLoadable: Lx, loadableWithError: Mi, loadableWithPromise: Ax, loadableWithValue: ma } = ai,
  { WrappedValue: Gv } = Wv,
  { getNodeLoadable: ji, peekNodeLoadable: Px, setNodeValue: Ix } = Tn,
  { saveDepsToStore: $x } = ci,
  { DEFAULT_VALUE: Mx, getConfigDeletionHandler: jx, getNode: Dx, registerNode: Dd } = lt,
  { isRecoilValue: Ox } = jr,
  { markRecoilValueModified: Od } = bt,
  { retainedByOptionWithDefault: zx } = qn,
  { recoilCallback: Vx } = bv,
  { startPerfBlock: Ux } = Nx;
class Qv {}
const co = new Qv(),
  fo = [],
  Di = new Map(),
  Fx = (() => {
    let e = 0;
    return () => e++;
  })();
function Yv(e) {
  let t = null;
  const { key: n, get: r, cachePolicy_UNSTABLE: o } = e,
    i = e.set != null ? e.set : void 0,
    l = new Set(),
    s = Cx(o ?? { equality: "reference", eviction: "keep-all" }, n),
    a = zx(e.retainedBy_UNSTABLE),
    u = new Map();
  let f = 0;
  function d() {
    return !fe("recoil_memory_managament_2020") || f > 0;
  }
  function m(_) {
    return (
      _.getState().knownSelectors.add(n),
      f++,
      () => {
        f--;
      }
    );
  }
  function S() {
    return jx(n) !== void 0 && !d();
  }
  function v(_, A, P, K, D) {
    Me(A, K, D), w(_, P);
  }
  function w(_, A) {
    $e(_, A) && se(_), h(A, !0);
  }
  function T(_, A) {
    $e(_, A) && (we(B(_)).stateVersions.clear(), h(A, !1));
  }
  function h(_, A) {
    const P = Di.get(_);
    if (P != null) {
      for (const K of P) Od(K, we(t));
      A && Di.delete(_);
    }
  }
  function c(_, A) {
    let P = Di.get(A);
    P == null && Di.set(A, (P = new Set())), P.add(_);
  }
  function p(_, A, P, K, D, Z) {
    return A.then((X) => {
      if (!d()) throw (se(_), co);
      const F = ma(X);
      return v(_, P, D, F, K), X;
    }).catch((X) => {
      if (!d()) throw (se(_), co);
      if (ve(X)) return E(_, X, P, K, D, Z);
      const F = Mi(X);
      throw (v(_, P, D, F, K), X);
    });
  }
  function E(_, A, P, K, D, Z) {
    return A.then((X) => {
      if (!d()) throw (se(_), co);
      Z.loadingDepKey != null && Z.loadingDepPromise === A
        ? P.atomValues.set(Z.loadingDepKey, ma(X))
        : _.getState().knownSelectors.forEach((ne) => {
            P.atomValues.delete(ne);
          });
      const F = x(_, P);
      if (F && F.state !== "loading") {
        if ((($e(_, D) || B(_) == null) && w(_, D), F.state === "hasValue")) return F.contents;
        throw F.contents;
      }
      if (!$e(_, D)) {
        const ne = oe(_, P);
        if (ne != null) return ne.loadingLoadable.contents;
      }
      const [ce, ye] = C(_, P, D);
      if ((ce.state !== "loading" && v(_, P, D, ce, ye), ce.state === "hasError")) throw ce.contents;
      return ce.contents;
    }).catch((X) => {
      if (X instanceof Qv) throw co;
      if (!d()) throw (se(_), co);
      const F = Mi(X);
      throw (v(_, P, D, F, K), X);
    });
  }
  function k(_, A, P, K) {
    var D, Z, X, F;
    if (
      $e(_, K) ||
      A.version ===
        ((D = _.getState()) === null || D === void 0 || (Z = D.currentTree) === null || Z === void 0
          ? void 0
          : Z.version) ||
      A.version ===
        ((X = _.getState()) === null || X === void 0 || (F = X.nextTree) === null || F === void 0 ? void 0 : F.version)
    ) {
      var ce, ye, ne;
      $x(
        n,
        P,
        _,
        (ce =
          (ye = _.getState()) === null || ye === void 0 || (ne = ye.nextTree) === null || ne === void 0
            ? void 0
            : ne.version) !== null && ce !== void 0
          ? ce
          : _.getState().currentTree.version
      );
    }
    for (const Re of P) l.add(Re);
  }
  function C(_, A, P) {
    const K = Ux(n);
    let D = !0,
      Z = !0;
    const X = () => {
      K(), (Z = !1);
    };
    let F,
      ce = !1,
      ye;
    const ne = { loadingDepKey: null, loadingDepPromise: null },
      Re = new Map();
    function Ct({ key: mt }) {
      const st = ji(_, A, mt);
      switch ((Re.set(mt, st), D || (k(_, A, new Set(Re.keys()), P), T(_, P)), st.state)) {
        case "hasValue":
          return st.contents;
        case "hasError":
          throw st.contents;
        case "loading":
          throw ((ne.loadingDepKey = mt), (ne.loadingDepPromise = st.contents), st.contents);
      }
      throw ee("Invalid Loadable state");
    }
    const Ln =
      (mt) =>
      (...st) => {
        if (Z)
          throw ee(
            "Callbacks from getCallback() should only be called asynchronously after the selector is evalutated.  It can be used for selectors to return objects with callbacks that can work with Recoil state without a subscription."
          );
        return t == null && So(!1), Vx(_, mt, st, { node: t });
      };
    try {
      (F = r({ get: Ct, getCallback: Ln })),
        (F = Ox(F) ? Ct(F) : F),
        Lx(F) && (F.state === "hasError" && (ce = !0), (F = F.contents)),
        ve(F) ? (F = p(_, F, A, Re, P, ne).finally(X)) : X(),
        (F = F instanceof Gv ? F.value : F);
    } catch (mt) {
      (F = mt), ve(F) ? (F = E(_, F, A, Re, P, ne).finally(X)) : ((ce = !0), X());
    }
    return (
      ce ? (ye = Mi(F)) : ve(F) ? (ye = Ax(F)) : (ye = ma(F)),
      (D = !1),
      Xe(_, P, Re),
      k(_, A, new Set(Re.keys()), P),
      [ye, Re]
    );
  }
  function x(_, A) {
    let P = A.atomValues.get(n);
    if (P != null) return P;
    const K = new Set();
    try {
      P = s.get((Z) => (typeof Z != "string" && So(!1), ji(_, A, Z).contents), {
        onNodeVisit: (Z) => {
          Z.type === "branch" && Z.nodeKey !== n && K.add(Z.nodeKey);
        },
      });
    } catch (Z) {
      throw ee(`Problem with cache lookup for selector "${n}": ${Z.message}`);
    }
    if (P) {
      var D;
      A.atomValues.set(n, P), k(_, A, K, (D = B(_)) === null || D === void 0 ? void 0 : D.executionID);
    }
    return P;
  }
  function I(_, A) {
    const P = x(_, A);
    if (P != null) return se(_), P;
    const K = oe(_, A);
    if (K != null) {
      var D;
      return (
        ((D = K.loadingLoadable) === null || D === void 0 ? void 0 : D.state) === "loading" && c(_, K.executionID),
        K.loadingLoadable
      );
    }
    const Z = Fx(),
      [X, F] = C(_, A, Z);
    return X.state === "loading" ? (de(_, Z, X, F, A), c(_, Z)) : (se(_), Me(A, X, F)), X;
  }
  function oe(_, A) {
    const P = gv([
      u.has(_) ? [we(u.get(_))] : [],
      fs(
        Mc(u, ([D]) => D !== _),
        ([, D]) => D
      ),
    ]);
    function K(D) {
      for (const [Z, X] of D) if (!ji(_, A, Z).is(X)) return !0;
      return !1;
    }
    for (const D of P) {
      if (D.stateVersions.get(A.version) || !K(D.depValuesDiscoveredSoFarDuringAsyncWork))
        return D.stateVersions.set(A.version, !0), D;
      D.stateVersions.set(A.version, !1);
    }
  }
  function B(_) {
    return u.get(_);
  }
  function de(_, A, P, K, D) {
    u.set(_, {
      depValuesDiscoveredSoFarDuringAsyncWork: K,
      executionID: A,
      loadingLoadable: P,
      stateVersions: new Map([[D.version, !0]]),
    });
  }
  function Xe(_, A, P) {
    if ($e(_, A)) {
      const K = B(_);
      K != null && (K.depValuesDiscoveredSoFarDuringAsyncWork = P);
    }
  }
  function se(_) {
    u.delete(_);
  }
  function $e(_, A) {
    var P;
    return A === ((P = B(_)) === null || P === void 0 ? void 0 : P.executionID);
  }
  function kt(_) {
    return Array.from(_.entries()).map(([A, P]) => [A, P.contents]);
  }
  function Me(_, A, P) {
    _.atomValues.set(n, A);
    try {
      s.set(kt(P), A);
    } catch (K) {
      throw ee(`Problem with setting cache for selector "${n}": ${K.message}`);
    }
  }
  function Ve(_) {
    if (fo.includes(n)) {
      const A = `Recoil selector has circular dependencies: ${fo.slice(fo.indexOf(n)).join(" → ")}`;
      return Mi(ee(A));
    }
    fo.push(n);
    try {
      return _();
    } finally {
      fo.pop();
    }
  }
  function M(_, A) {
    const P = A.atomValues.get(n);
    return (
      P ??
      s.get((K) => {
        var D;
        return typeof K != "string" && So(!1), (D = Px(_, A, K)) === null || D === void 0 ? void 0 : D.contents;
      })
    );
  }
  function b(_, A) {
    return Ve(() => I(_, A));
  }
  function $(_) {
    _.atomValues.delete(n);
  }
  function W(_, A) {
    t == null && So(!1);
    for (const K of l) {
      var P;
      const D = Dx(K);
      (P = D.clearCache) === null || P === void 0 || P.call(D, _, A);
    }
    l.clear(), $(A), s.clear(), Od(_, t);
  }
  return i != null
    ? (t = Dd({
        key: n,
        nodeType: "selector",
        peek: M,
        get: b,
        set: (A, P, K) => {
          let D = !1;
          const Z = new Map();
          function X({ key: ne }) {
            if (D) throw ee("Recoil: Async selector sets are not currently supported.");
            const Re = ji(A, P, ne);
            if (Re.state === "hasValue") return Re.contents;
            if (Re.state === "loading") {
              const Ct = `Getting value of asynchronous atom or selector "${ne}" in a pending state while setting selector "${n}" is not yet supported.`;
              throw ee(Ct);
            } else throw Re.contents;
          }
          function F(ne, Re) {
            if (D) throw ee("Recoil: Async selector sets are not currently supported.");
            const Ct = typeof Re == "function" ? Re(X(ne)) : Re;
            Ix(A, P, ne.key, Ct).forEach((mt, st) => Z.set(st, mt));
          }
          function ce(ne) {
            F(ne, Mx);
          }
          const ye = i({ set: F, get: X, reset: ce }, K);
          if (ye !== void 0)
            throw ve(ye)
              ? ee("Recoil: Async selector sets are not currently supported.")
              : ee("Recoil: selector set should be a void function.");
          return (D = !0), Z;
        },
        init: m,
        invalidate: $,
        clearCache: W,
        shouldDeleteConfigOnRelease: S,
        dangerouslyAllowMutability: e.dangerouslyAllowMutability,
        shouldRestoreFromSnapshots: !1,
        retainedBy: a,
      }))
    : (t = Dd({
        key: n,
        nodeType: "selector",
        peek: M,
        get: b,
        init: m,
        invalidate: $,
        clearCache: W,
        shouldDeleteConfigOnRelease: S,
        dangerouslyAllowMutability: e.dangerouslyAllowMutability,
        shouldRestoreFromSnapshots: !1,
        retainedBy: a,
      }));
}
Yv.value = (e) => new Gv(e);
var zr = Yv;
const { isLoadable: Bx, loadableWithError: va, loadableWithPromise: ga, loadableWithValue: nr } = ai,
  { WrappedValue: Zv } = Wv,
  { peekNodeInfo: bx } = Tn,
  {
    DEFAULT_VALUE: $n,
    DefaultValue: an,
    getConfigDeletionHandler: Xv,
    registerNode: Wx,
    setConfigDeletionHandler: Hx,
  } = lt,
  { isRecoilValue: Kx } = jr,
  { getRecoilValueAsLoadable: Gx, markRecoilValueModified: Qx, setRecoilValue: zd, setRecoilValueLoadable: Yx } = bt,
  { retainedByOptionWithDefault: Zx } = qn,
  po = (e) => (e instanceof Zv ? e.value : e);
function Xx(e) {
  const { key: t, persistence_UNSTABLE: n } = e,
    r = Zx(e.retainedBy_UNSTABLE);
  let o = 0;
  function i(c) {
    return ga(
      c
        .then((p) => ((l = nr(p)), p))
        .catch((p) => {
          throw ((l = va(p)), p);
        })
    );
  }
  let l = ve(e.default)
    ? i(e.default)
    : Bx(e.default)
      ? e.default.state === "loading"
        ? i(e.default.contents)
        : e.default
      : nr(po(e.default));
  l.contents;
  let s;
  const a = new Map();
  function u(c) {
    return c;
  }
  function f(c, p) {
    const E = p
      .then((k) => {
        var C, x;
        return (
          ((x = ((C = c.getState().nextTree) !== null && C !== void 0 ? C : c.getState().currentTree).atomValues.get(
            t
          )) === null || x === void 0
            ? void 0
            : x.contents) === E && zd(c, h, k),
          k
        );
      })
      .catch((k) => {
        var C, x;
        throw (
          (((x = ((C = c.getState().nextTree) !== null && C !== void 0 ? C : c.getState().currentTree).atomValues.get(
            t
          )) === null || x === void 0
            ? void 0
            : x.contents) === E && Yx(c, h, va(k)),
          k)
        );
      });
    return E;
  }
  function d(c, p, E) {
    var k;
    o++;
    const C = () => {
      var B;
      o--, (B = a.get(c)) === null || B === void 0 || B.forEach((de) => de()), a.delete(c);
    };
    if ((c.getState().knownAtoms.add(t), l.state === "loading")) {
      const B = () => {
        var de;
        ((de = c.getState().nextTree) !== null && de !== void 0 ? de : c.getState().currentTree).atomValues.has(t) ||
          Qx(c, h);
      };
      l.contents.finally(B);
    }
    const x = (k = e.effects) !== null && k !== void 0 ? k : e.effects_UNSTABLE;
    if (x != null) {
      let B = function ($) {
          if ($e && $.key === t) {
            const W = se;
            return W instanceof an ? m(c, p) : ve(W) ? ga(W.then((_) => (_ instanceof an ? l.toPromise() : _))) : nr(W);
          }
          return Gx(c, $);
        },
        de = function ($) {
          return B($).toPromise();
        },
        Xe = function ($) {
          var W;
          const _ = bx(c, (W = c.getState().nextTree) !== null && W !== void 0 ? W : c.getState().currentTree, $.key);
          return $e && $.key === t && !(se instanceof an) ? { ..._, isSet: !0, loadable: B($) } : _;
        },
        se = $n,
        $e = !0,
        kt = !1,
        Me = null;
      const Ve = ($) => (W) => {
          if ($e) {
            const _ = B(h),
              A = _.state === "hasValue" ? _.contents : $n;
            (se = typeof W == "function" ? W(A) : W),
              ve(se) && (se = se.then((P) => ((Me = { effect: $, value: P }), P)));
          } else {
            if (ve(W)) throw ee("Setting atoms to async values is not implemented.");
            typeof W != "function" && (Me = { effect: $, value: po(W) }),
              zd(
                c,
                h,
                typeof W == "function"
                  ? (_) => {
                      const A = po(W(_));
                      return (Me = { effect: $, value: A }), A;
                    }
                  : po(W)
              );
          }
        },
        M = ($) => () => Ve($)($n),
        b = ($) => (W) => {
          var _;
          const { release: A } = c.subscribeToTransactions((P) => {
            var K;
            let { currentTree: D, previousTree: Z } = P.getState();
            Z || (Z = D);
            const X = (K = D.atomValues.get(t)) !== null && K !== void 0 ? K : l;
            if (X.state === "hasValue") {
              var F, ce, ye, ne;
              const Re = X.contents,
                Ct = (F = Z.atomValues.get(t)) !== null && F !== void 0 ? F : l,
                Ln = Ct.state === "hasValue" ? Ct.contents : $n;
              ((ce = Me) === null || ce === void 0 ? void 0 : ce.effect) !== $ ||
              ((ye = Me) === null || ye === void 0 ? void 0 : ye.value) !== Re
                ? W(Re, Ln, !D.atomValues.has(t))
                : ((ne = Me) === null || ne === void 0 ? void 0 : ne.effect) === $ && (Me = null);
            }
          }, t);
          a.set(c, [...((_ = a.get(c)) !== null && _ !== void 0 ? _ : []), A]);
        };
      for (const $ of x)
        try {
          const W = $({
            node: h,
            storeID: c.storeID,
            parentStoreID_UNSTABLE: c.parentStoreID,
            trigger: E,
            setSelf: Ve($),
            resetSelf: M($),
            onSet: b($),
            getPromise: de,
            getLoadable: B,
            getInfo_UNSTABLE: Xe,
          });
          if (W != null) {
            var I;
            a.set(c, [...((I = a.get(c)) !== null && I !== void 0 ? I : []), W]);
          }
        } catch (W) {
          (se = W), (kt = !0);
        }
      if ((($e = !1), !(se instanceof an))) {
        var oe;
        const $ = kt ? va(se) : ve(se) ? ga(f(c, se)) : nr(po(se));
        $.contents,
          p.atomValues.set(t, $),
          (oe = c.getState().nextTree) === null || oe === void 0 || oe.atomValues.set(t, $);
      }
    }
    return C;
  }
  function m(c, p) {
    var E, k;
    return (E = (k = p.atomValues.get(t)) !== null && k !== void 0 ? k : s) !== null && E !== void 0 ? E : l;
  }
  function S(c, p) {
    if (p.atomValues.has(t)) return we(p.atomValues.get(t));
    if (p.nonvalidatedAtoms.has(t)) {
      if (s != null) return s;
      if (n == null) return l;
      const E = p.nonvalidatedAtoms.get(t),
        k = n.validator(E, $n);
      return (s = k instanceof an ? l : nr(k)), s;
    } else return l;
  }
  function v() {
    s = void 0;
  }
  function w(c, p, E) {
    if (p.atomValues.has(t)) {
      const k = we(p.atomValues.get(t));
      if (k.state === "hasValue" && E === k.contents) return new Map();
    } else if (!p.nonvalidatedAtoms.has(t) && E instanceof an) return new Map();
    return (s = void 0), new Map().set(t, nr(E));
  }
  function T() {
    return Xv(t) !== void 0 && o <= 0;
  }
  const h = Wx({
    key: t,
    nodeType: "atom",
    peek: m,
    get: S,
    set: w,
    init: d,
    invalidate: v,
    shouldDeleteConfigOnRelease: T,
    dangerouslyAllowMutability: e.dangerouslyAllowMutability,
    persistence_UNSTABLE: e.persistence_UNSTABLE
      ? { type: e.persistence_UNSTABLE.type, backButton: e.persistence_UNSTABLE.backButton }
      : void 0,
    shouldRestoreFromSnapshots: !0,
    retainedBy: r,
  });
  return h;
}
function Wc(e) {
  const { ...t } = e,
    n = "default" in e ? e.default : new Promise(() => {});
  return Kx(n) ? Jx({ ...t, default: n }) : Xx({ ...t, default: n });
}
function Jx(e) {
  const t = Wc({
      ...e,
      default: $n,
      persistence_UNSTABLE:
        e.persistence_UNSTABLE === void 0
          ? void 0
          : {
              ...e.persistence_UNSTABLE,
              validator: (r) => (r instanceof an ? r : we(e.persistence_UNSTABLE).validator(r, $n)),
            },
      effects: e.effects,
      effects_UNSTABLE: e.effects_UNSTABLE,
    }),
    n = zr({
      key: `${e.key}__withFallback`,
      get: ({ get: r }) => {
        const o = r(t);
        return o instanceof an ? e.default : o;
      },
      set: ({ set: r }, o) => r(t, o),
      cachePolicy_UNSTABLE: { eviction: "most-recent" },
      dangerouslyAllowMutability: e.dangerouslyAllowMutability,
    });
  return Hx(n.key, Xv(e.key)), n;
}
Wc.value = (e) => new Zv(e);
var Jv = Wc;
class qx {
  constructor(t) {
    var n;
    J(this, "_map", void 0),
      J(this, "_keyMapper", void 0),
      (this._map = new Map()),
      (this._keyMapper = (n = t == null ? void 0 : t.mapKey) !== null && n !== void 0 ? n : (r) => r);
  }
  size() {
    return this._map.size;
  }
  has(t) {
    return this._map.has(this._keyMapper(t));
  }
  get(t) {
    return this._map.get(this._keyMapper(t));
  }
  set(t, n) {
    this._map.set(this._keyMapper(t), n);
  }
  delete(t) {
    this._map.delete(this._keyMapper(t));
  }
  clear() {
    this._map.clear();
  }
}
var ek = { MapCache: qx },
  tk = ek.MapCache,
  nk = Object.freeze({ __proto__: null, MapCache: tk });
const { LRUCache: Vd } = Kv,
  { MapCache: rk } = nk,
  Oi = { equality: "reference", eviction: "none", maxSize: 1 / 0 };
function ok({ equality: e = Oi.equality, eviction: t = Oi.eviction, maxSize: n = Oi.maxSize } = Oi) {
  const r = ik(e);
  return lk(t, n, r);
}
function ik(e) {
  switch (e) {
    case "reference":
      return (t) => t;
    case "value":
      return (t) => xs(t);
  }
  throw ee(`Unrecognized equality policy ${e}`);
}
function lk(e, t, n) {
  switch (e) {
    case "keep-all":
      return new rk({ mapKey: n });
    case "lru":
      return new Vd({ mapKey: n, maxSize: we(t) });
    case "most-recent":
      return new Vd({ mapKey: n, maxSize: 1 });
  }
  throw ee(`Unrecognized eviction policy ${e}`);
}
var qv = ok;
const { setConfigDeletionHandler: sk } = lt;
function ak(e) {
  var t, n;
  const r = qv({
    equality:
      (t = (n = e.cachePolicyForParams_UNSTABLE) === null || n === void 0 ? void 0 : n.equality) !== null &&
      t !== void 0
        ? t
        : "value",
    eviction: "keep-all",
  });
  return (o) => {
    var i, l;
    const s = r.get(o);
    if (s != null) return s;
    const { cachePolicyForParams_UNSTABLE: a, ...u } = e,
      f = "default" in e ? e.default : new Promise(() => {}),
      d = Jv({
        ...u,
        key: `${e.key}__${(i = xs(o)) !== null && i !== void 0 ? i : "void"}`,
        default: typeof f == "function" ? f(o) : f,
        retainedBy_UNSTABLE:
          typeof e.retainedBy_UNSTABLE == "function" ? e.retainedBy_UNSTABLE(o) : e.retainedBy_UNSTABLE,
        effects:
          typeof e.effects == "function"
            ? e.effects(o)
            : typeof e.effects_UNSTABLE == "function"
              ? e.effects_UNSTABLE(o)
              : (l = e.effects) !== null && l !== void 0
                ? l
                : e.effects_UNSTABLE,
      });
    return (
      r.set(o, d),
      sk(d.key, () => {
        r.delete(o);
      }),
      d
    );
  };
}
var uk = ak;
const { setConfigDeletionHandler: ck } = lt;
let fk = 0;
function dk(e) {
  var t, n;
  const r = qv({
    equality:
      (t = (n = e.cachePolicyForParams_UNSTABLE) === null || n === void 0 ? void 0 : n.equality) !== null &&
      t !== void 0
        ? t
        : "value",
    eviction: "keep-all",
  });
  return (o) => {
    var i;
    let l;
    try {
      l = r.get(o);
    } catch (m) {
      throw ee(`Problem with cache lookup for selector ${e.key}: ${m.message}`);
    }
    if (l != null) return l;
    const s = `${e.key}__selectorFamily/${(i = xs(o, { allowFunctions: !0 })) !== null && i !== void 0 ? i : "void"}/${fk++}`,
      a = (m) => e.get(o)(m),
      u = e.cachePolicy_UNSTABLE,
      f = typeof e.retainedBy_UNSTABLE == "function" ? e.retainedBy_UNSTABLE(o) : e.retainedBy_UNSTABLE;
    let d;
    if (e.set != null) {
      const m = e.set;
      d = zr({
        key: s,
        get: a,
        set: (v, w) => m(o)(v, w),
        cachePolicy_UNSTABLE: u,
        dangerouslyAllowMutability: e.dangerouslyAllowMutability,
        retainedBy_UNSTABLE: f,
      });
    } else
      d = zr({
        key: s,
        get: a,
        cachePolicy_UNSTABLE: u,
        dangerouslyAllowMutability: e.dangerouslyAllowMutability,
        retainedBy_UNSTABLE: f,
      });
    return (
      r.set(o, d),
      ck(d.key, () => {
        r.delete(o);
      }),
      d
    );
  };
}
var Nn = dk;
const pk = Nn({ key: "__constant", get: (e) => () => e, cachePolicyForParams_UNSTABLE: { equality: "reference" } });
function hk(e) {
  return pk(e);
}
var mk = hk;
const vk = Nn({
  key: "__error",
  get: (e) => () => {
    throw ee(e);
  },
  cachePolicyForParams_UNSTABLE: { equality: "reference" },
});
function gk(e) {
  return vk(e);
}
var yk = gk;
function Sk(e) {
  return e;
}
var _k = Sk;
const { loadableWithError: eg, loadableWithPromise: tg, loadableWithValue: ng } = ai;
function ks(e, t) {
  const n = Array(t.length).fill(void 0),
    r = Array(t.length).fill(void 0);
  for (const [o, i] of t.entries())
    try {
      n[o] = e(i);
    } catch (l) {
      r[o] = l;
    }
  return [n, r];
}
function wk(e) {
  return e != null && !ve(e);
}
function Cs(e) {
  return Array.isArray(e) ? e : Object.getOwnPropertyNames(e).map((t) => e[t]);
}
function Cu(e, t) {
  return Array.isArray(e) ? t : Object.getOwnPropertyNames(e).reduce((n, r, o) => ({ ...n, [r]: t[o] }), {});
}
function Cr(e, t, n) {
  const r = n.map((o, i) => (o == null ? ng(t[i]) : ve(o) ? tg(o) : eg(o)));
  return Cu(e, r);
}
function Rk(e, t) {
  return t.map((n, r) => (n === void 0 ? e[r] : n));
}
const Ek = Nn({
    key: "__waitForNone",
    get:
      (e) =>
      ({ get: t }) => {
        const n = Cs(e),
          [r, o] = ks(t, n);
        return Cr(e, r, o);
      },
    dangerouslyAllowMutability: !0,
  }),
  xk = Nn({
    key: "__waitForAny",
    get:
      (e) =>
      ({ get: t }) => {
        const n = Cs(e),
          [r, o] = ks(t, n);
        return o.some((i) => !ve(i))
          ? Cr(e, r, o)
          : new Promise((i) => {
              for (const [l, s] of o.entries())
                ve(s) &&
                  s
                    .then((a) => {
                      (r[l] = a), (o[l] = void 0), i(Cr(e, r, o));
                    })
                    .catch((a) => {
                      (o[l] = a), i(Cr(e, r, o));
                    });
            });
      },
    dangerouslyAllowMutability: !0,
  }),
  kk = Nn({
    key: "__waitForAll",
    get:
      (e) =>
      ({ get: t }) => {
        const n = Cs(e),
          [r, o] = ks(t, n);
        if (o.every((l) => l == null)) return Cu(e, r);
        const i = o.find(wk);
        if (i != null) throw i;
        return Promise.all(o).then((l) => Cu(e, Rk(r, l)));
      },
    dangerouslyAllowMutability: !0,
  }),
  Ck = Nn({
    key: "__waitForAllSettled",
    get:
      (e) =>
      ({ get: t }) => {
        const n = Cs(e),
          [r, o] = ks(t, n);
        return o.every((i) => !ve(i))
          ? Cr(e, r, o)
          : Promise.all(
              o.map((i, l) =>
                ve(i)
                  ? i
                      .then((s) => {
                        (r[l] = s), (o[l] = void 0);
                      })
                      .catch((s) => {
                        (r[l] = void 0), (o[l] = s);
                      })
                  : null
              )
            ).then(() => Cr(e, r, o));
      },
    dangerouslyAllowMutability: !0,
  }),
  Tk = Nn({
    key: "__noWait",
    get:
      (e) =>
      ({ get: t }) => {
        try {
          return zr.value(ng(t(e)));
        } catch (n) {
          return zr.value(ve(n) ? tg(n) : eg(n));
        }
      },
    dangerouslyAllowMutability: !0,
  });
var Nk = { waitForNone: Ek, waitForAny: xk, waitForAll: kk, waitForAllSettled: Ck, noWait: Tk };
const { RecoilLoadable: Lk } = ai,
  { DefaultValue: Ak } = lt,
  { RecoilRoot: Pk, useRecoilStoreID: Ik } = nn,
  { isRecoilValue: $k } = jr,
  { retentionZone: Mk } = ps,
  { freshSnapshot: jk } = Ss,
  {
    useRecoilState: Dk,
    useRecoilState_TRANSITION_SUPPORT_UNSTABLE: Ok,
    useRecoilStateLoadable: zk,
    useRecoilValue: Vk,
    useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: Uk,
    useRecoilValueLoadable: Fk,
    useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: Bk,
    useResetRecoilState: bk,
    useSetRecoilState: Wk,
  } = eE,
  { useGotoRecoilSnapshot: Hk, useRecoilSnapshot: Kk, useRecoilTransactionObserver: Gk } = Vv,
  { useRecoilCallback: Qk } = bv,
  { noWait: Yk, waitForAll: Zk, waitForAllSettled: Xk, waitForAny: Jk, waitForNone: qk } = Nk;
var eC = {
    DefaultValue: Ak,
    isRecoilValue: $k,
    RecoilLoadable: Lk,
    RecoilEnv: Yr,
    RecoilRoot: Pk,
    useRecoilStoreID: Ik,
    useRecoilBridgeAcrossReactRoots_UNSTABLE: TE,
    atom: Jv,
    selector: zr,
    atomFamily: uk,
    selectorFamily: Nn,
    constSelector: mk,
    errorSelector: yk,
    readOnlySelector: _k,
    noWait: Yk,
    waitForNone: qk,
    waitForAny: Jk,
    waitForAll: Zk,
    waitForAllSettled: Xk,
    useRecoilValue: Vk,
    useRecoilValueLoadable: Fk,
    useRecoilState: Dk,
    useRecoilStateLoadable: zk,
    useSetRecoilState: Wk,
    useResetRecoilState: bk,
    useGetRecoilValueInfo_UNSTABLE: wE,
    useRecoilRefresher_UNSTABLE: nx,
    useRecoilValueLoadable_TRANSITION_SUPPORT_UNSTABLE: Bk,
    useRecoilValue_TRANSITION_SUPPORT_UNSTABLE: Uk,
    useRecoilState_TRANSITION_SUPPORT_UNSTABLE: Ok,
    useRecoilCallback: Qk,
    useRecoilTransaction_UNSTABLE: sx,
    useGotoRecoilSnapshot: Hk,
    useRecoilSnapshot: Kk,
    useRecoilTransactionObserver_UNSTABLE: Gk,
    snapshot_UNSTABLE: jk,
    useRetain: Vc,
    retentionZone: Mk,
  },
  rg = eC.RecoilRoot,
  tt = function () {
    return (
      (tt =
        Object.assign ||
        function (t) {
          for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        }),
      tt.apply(this, arguments)
    );
  };
function Vl(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var me = "-ms-",
  $o = "-moz-",
  ae = "-webkit-",
  og = "comm",
  Ts = "rule",
  Hc = "decl",
  tC = "@import",
  ig = "@keyframes",
  nC = "@layer",
  lg = Math.abs,
  Kc = String.fromCharCode,
  Tu = Object.assign;
function rC(e, t) {
  return Oe(e, 0) ^ 45 ? (((((((t << 2) ^ Oe(e, 0)) << 2) ^ Oe(e, 1)) << 2) ^ Oe(e, 2)) << 2) ^ Oe(e, 3) : 0;
}
function sg(e) {
  return e.trim();
}
function Kt(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function q(e, t, n) {
  return e.replace(t, n);
}
function ol(e, t, n) {
  return e.indexOf(t, n);
}
function Oe(e, t) {
  return e.charCodeAt(t) | 0;
}
function Vr(e, t, n) {
  return e.slice(t, n);
}
function Vt(e) {
  return e.length;
}
function ag(e) {
  return e.length;
}
function _o(e, t) {
  return t.push(e), e;
}
function oC(e, t) {
  return e.map(t).join("");
}
function Ud(e, t) {
  return e.filter(function (n) {
    return !Kt(n, t);
  });
}
var Ns = 1,
  Ur = 1,
  ug = 0,
  xt = 0,
  Ne = 0,
  Xr = "";
function Ls(e, t, n, r, o, i, l, s) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: Ns,
    column: Ur,
    length: l,
    return: "",
    siblings: s,
  };
}
function on(e, t) {
  return Tu(Ls("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, t);
}
function rr(e) {
  for (; e.root; ) e = on(e.root, { children: [e] });
  _o(e, e.siblings);
}
function iC() {
  return Ne;
}
function lC() {
  return (Ne = xt > 0 ? Oe(Xr, --xt) : 0), Ur--, Ne === 10 && ((Ur = 1), Ns--), Ne;
}
function jt() {
  return (Ne = xt < ug ? Oe(Xr, xt++) : 0), Ur++, Ne === 10 && ((Ur = 1), Ns++), Ne;
}
function Fn() {
  return Oe(Xr, xt);
}
function il() {
  return xt;
}
function As(e, t) {
  return Vr(Xr, e, t);
}
function Nu(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function sC(e) {
  return (Ns = Ur = 1), (ug = Vt((Xr = e))), (xt = 0), [];
}
function aC(e) {
  return (Xr = ""), e;
}
function ya(e) {
  return sg(As(xt - 1, Lu(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function uC(e) {
  for (; (Ne = Fn()) && Ne < 33; ) jt();
  return Nu(e) > 2 || Nu(Ne) > 3 ? "" : " ";
}
function cC(e, t) {
  for (; --t && jt() && !(Ne < 48 || Ne > 102 || (Ne > 57 && Ne < 65) || (Ne > 70 && Ne < 97)); );
  return As(e, il() + (t < 6 && Fn() == 32 && jt() == 32));
}
function Lu(e) {
  for (; jt(); )
    switch (Ne) {
      case e:
        return xt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Lu(Ne);
        break;
      case 40:
        e === 41 && Lu(e);
        break;
      case 92:
        jt();
        break;
    }
  return xt;
}
function fC(e, t) {
  for (; jt() && e + Ne !== 57; ) if (e + Ne === 84 && Fn() === 47) break;
  return "/*" + As(t, xt - 1) + "*" + Kc(e === 47 ? e : jt());
}
function dC(e) {
  for (; !Nu(Fn()); ) jt();
  return As(e, xt);
}
function pC(e) {
  return aC(ll("", null, null, null, [""], (e = sC(e)), 0, [0], e));
}
function ll(e, t, n, r, o, i, l, s, a) {
  for (
    var u = 0, f = 0, d = l, m = 0, S = 0, v = 0, w = 1, T = 1, h = 1, c = 0, p = "", E = o, k = i, C = r, x = p;
    T;

  )
    switch (((v = c), (c = jt()))) {
      case 40:
        if (v != 108 && Oe(x, d - 1) == 58) {
          ol((x += q(ya(c), "&", "&\f")), "&\f", lg(u ? s[u - 1] : 0)) != -1 && (h = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += ya(c);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += uC(v);
        break;
      case 92:
        x += cC(il() - 1, 7);
        continue;
      case 47:
        switch (Fn()) {
          case 42:
          case 47:
            _o(hC(fC(jt(), il()), t, n, a), a);
            break;
          default:
            x += "/";
        }
        break;
      case 123 * w:
        s[u++] = Vt(x) * h;
      case 125 * w:
      case 59:
      case 0:
        switch (c) {
          case 0:
          case 125:
            T = 0;
          case 59 + f:
            h == -1 && (x = q(x, /\f/g, "")),
              S > 0 &&
                Vt(x) - d &&
                _o(S > 32 ? Bd(x + ";", r, n, d - 1, a) : Bd(q(x, " ", "") + ";", r, n, d - 2, a), a);
            break;
          case 59:
            x += ";";
          default:
            if ((_o((C = Fd(x, t, n, u, f, o, s, p, (E = []), (k = []), d, i)), i), c === 123))
              if (f === 0) ll(x, t, C, C, E, i, d, s, k);
              else
                switch (m === 99 && Oe(x, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ll(e, C, C, r && _o(Fd(e, C, C, 0, 0, o, s, p, o, (E = []), d, k), k), o, k, d, s, r ? E : k);
                    break;
                  default:
                    ll(x, C, C, C, [""], k, 0, s, k);
                }
        }
        (u = f = S = 0), (w = h = 1), (p = x = ""), (d = l);
        break;
      case 58:
        (d = 1 + Vt(x)), (S = v);
      default:
        if (w < 1) {
          if (c == 123) --w;
          else if (c == 125 && w++ == 0 && lC() == 125) continue;
        }
        switch (((x += Kc(c)), c * w)) {
          case 38:
            h = f > 0 ? 1 : ((x += "\f"), -1);
            break;
          case 44:
            (s[u++] = (Vt(x) - 1) * h), (h = 1);
            break;
          case 64:
            Fn() === 45 && (x += ya(jt())), (m = Fn()), (f = d = Vt((p = x += dC(il())))), c++;
            break;
          case 45:
            v === 45 && Vt(x) == 2 && (w = 0);
        }
    }
  return i;
}
function Fd(e, t, n, r, o, i, l, s, a, u, f, d) {
  for (var m = o - 1, S = o === 0 ? i : [""], v = ag(S), w = 0, T = 0, h = 0; w < r; ++w)
    for (var c = 0, p = Vr(e, m + 1, (m = lg((T = l[w])))), E = e; c < v; ++c)
      (E = sg(T > 0 ? S[c] + " " + p : q(p, /&\f/g, S[c]))) && (a[h++] = E);
  return Ls(e, t, n, o === 0 ? Ts : s, a, u, f, d);
}
function hC(e, t, n, r) {
  return Ls(e, t, n, og, Kc(iC()), Vr(e, 2, -2), 0, r);
}
function Bd(e, t, n, r, o) {
  return Ls(e, t, n, Hc, Vr(e, 0, r), Vr(e, r + 1, -1), r, o);
}
function cg(e, t, n) {
  switch (rC(e, t)) {
    case 5103:
      return ae + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ae + e + e;
    case 4789:
      return $o + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ae + e + $o + e + me + e + e;
    case 5936:
      switch (Oe(e, t + 11)) {
        case 114:
          return ae + e + me + q(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return ae + e + me + q(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return ae + e + me + q(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return ae + e + me + e + e;
    case 6165:
      return ae + e + me + "flex-" + e + e;
    case 5187:
      return ae + e + q(e, /(\w+).+(:[^]+)/, ae + "box-$1$2" + me + "flex-$1$2") + e;
    case 5443:
      return (
        ae +
        e +
        me +
        "flex-item-" +
        q(e, /flex-|-self/g, "") +
        (Kt(e, /flex-|baseline/) ? "" : me + "grid-row-" + q(e, /flex-|-self/g, "")) +
        e
      );
    case 4675:
      return ae + e + me + "flex-line-pack" + q(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return ae + e + me + q(e, "shrink", "negative") + e;
    case 5292:
      return ae + e + me + q(e, "basis", "preferred-size") + e;
    case 6060:
      return ae + "box-" + q(e, "-grow", "") + ae + e + me + q(e, "grow", "positive") + e;
    case 4554:
      return ae + q(e, /([^-])(transform)/g, "$1" + ae + "$2") + e;
    case 6187:
      return q(q(q(e, /(zoom-|grab)/, ae + "$1"), /(image-set)/, ae + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return q(e, /(image-set\([^]*)/, ae + "$1$`$1");
    case 4968:
      return (
        q(q(e, /(.+:)(flex-)?(.*)/, ae + "box-pack:$3" + me + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ae + e + e
      );
    case 4200:
      if (!Kt(e, /flex-|baseline/)) return me + "grid-column-align" + Vr(e, t) + e;
      break;
    case 2592:
    case 3360:
      return me + q(e, "template-", "") + e;
    case 4384:
    case 3616:
      return n &&
        n.some(function (r, o) {
          return (t = o), Kt(r.props, /grid-\w+-end/);
        })
        ? ~ol(e + (n = n[t].value), "span", 0)
          ? e
          : me +
            q(e, "-start", "") +
            e +
            me +
            "grid-row-span:" +
            (~ol(n, "span", 0) ? Kt(n, /\d+/) : +Kt(n, /\d+/) - +Kt(e, /\d+/)) +
            ";"
        : me + q(e, "-start", "") + e;
    case 4896:
    case 4128:
      return n &&
        n.some(function (r) {
          return Kt(r.props, /grid-\w+-start/);
        })
        ? e
        : me + q(q(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return q(e, /(.+)-inline(.+)/, ae + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Vt(e) - 1 - t > 6)
        switch (Oe(e, t + 1)) {
          case 109:
            if (Oe(e, t + 4) !== 45) break;
          case 102:
            return q(e, /(.+:)(.+)-([^]+)/, "$1" + ae + "$2-$3$1" + $o + (Oe(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~ol(e, "stretch", 0) ? cg(q(e, "stretch", "fill-available"), t, n) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return q(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function (r, o, i, l, s, a, u) {
        return me + o + ":" + i + u + (l ? me + o + "-span:" + (s ? a : +a - +i) + u : "") + e;
      });
    case 4949:
      if (Oe(e, t + 6) === 121) return q(e, ":", ":" + ae) + e;
      break;
    case 6444:
      switch (Oe(e, Oe(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return (
            q(
              e,
              /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
              "$1" + ae + (Oe(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ae + "$2$3$1" + me + "$2box$3"
            ) + e
          );
        case 100:
          return q(e, ":", ":" + me) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return q(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function Ul(e, t) {
  for (var n = "", r = 0; r < e.length; r++) n += t(e[r], r, e, t) || "";
  return n;
}
function mC(e, t, n, r) {
  switch (e.type) {
    case nC:
      if (e.children.length) break;
    case tC:
    case Hc:
      return (e.return = e.return || e.value);
    case og:
      return "";
    case ig:
      return (e.return = e.value + "{" + Ul(e.children, r) + "}");
    case Ts:
      if (!Vt((e.value = e.props.join(",")))) return "";
  }
  return Vt((n = Ul(e.children, r))) ? (e.return = e.value + "{" + n + "}") : "";
}
function vC(e) {
  var t = ag(e);
  return function (n, r, o, i) {
    for (var l = "", s = 0; s < t; s++) l += e[s](n, r, o, i) || "";
    return l;
  };
}
function gC(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
function yC(e, t, n, r) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case Hc:
        e.return = cg(e.value, e.length, n);
        return;
      case ig:
        return Ul([on(e, { value: q(e.value, "@", "@" + ae) })], r);
      case Ts:
        if (e.length)
          return oC((n = e.props), function (o) {
            switch (Kt(o, (r = /(::plac\w+|:read-\w+)/))) {
              case ":read-only":
              case ":read-write":
                rr(on(e, { props: [q(o, /:(read-\w+)/, ":" + $o + "$1")] })),
                  rr(on(e, { props: [o] })),
                  Tu(e, { props: Ud(n, r) });
                break;
              case "::placeholder":
                rr(on(e, { props: [q(o, /:(plac\w+)/, ":" + ae + "input-$1")] })),
                  rr(on(e, { props: [q(o, /:(plac\w+)/, ":" + $o + "$1")] })),
                  rr(on(e, { props: [q(o, /:(plac\w+)/, me + "input-$1")] })),
                  rr(on(e, { props: [o] })),
                  Tu(e, { props: Ud(n, r) });
                break;
            }
            return "";
          });
    }
}
var SC = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  at = {},
  Fr = (typeof process < "u" && at !== void 0 && (at.REACT_APP_SC_ATTR || at.SC_ATTR)) || "data-styled",
  fg = "active",
  dg = "data-styled-version",
  Ps = "6.1.10",
  Gc = `/*!sc*/
`,
  Qc = typeof window < "u" && "HTMLElement" in window,
  _C = !!(typeof SC_DISABLE_SPEEDY == "boolean"
    ? SC_DISABLE_SPEEDY
    : typeof process < "u" &&
        at !== void 0 &&
        at.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
        at.REACT_APP_SC_DISABLE_SPEEDY !== ""
      ? at.REACT_APP_SC_DISABLE_SPEEDY !== "false" && at.REACT_APP_SC_DISABLE_SPEEDY
      : typeof process < "u" &&
        at !== void 0 &&
        at.SC_DISABLE_SPEEDY !== void 0 &&
        at.SC_DISABLE_SPEEDY !== "" &&
        at.SC_DISABLE_SPEEDY !== "false" &&
        at.SC_DISABLE_SPEEDY),
  Is = Object.freeze([]),
  Br = Object.freeze({});
function wC(e, t, n) {
  return n === void 0 && (n = Br), (e.theme !== n.theme && e.theme) || t || n.theme;
}
var pg = new Set([
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "tr",
    "track",
    "u",
    "ul",
    "use",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "marker",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ]),
  RC = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  EC = /(^-|-$)/g;
function bd(e) {
  return e.replace(RC, "-").replace(EC, "");
}
var xC = /(a)(d)/gi,
  zi = 52,
  Wd = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function Au(e) {
  var t,
    n = "";
  for (t = Math.abs(e); t > zi; t = (t / zi) | 0) n = Wd(t % zi) + n;
  return (Wd(t % zi) + n).replace(xC, "$1-$2");
}
var Sa,
  hg = 5381,
  Sr = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  mg = function (e) {
    return Sr(hg, e);
  };
function kC(e) {
  return Au(mg(e) >>> 0);
}
function CC(e) {
  return e.displayName || e.name || "Component";
}
function _a(e) {
  return typeof e == "string" && !0;
}
var vg = typeof Symbol == "function" && Symbol.for,
  gg = vg ? Symbol.for("react.memo") : 60115,
  TC = vg ? Symbol.for("react.forward_ref") : 60112,
  NC = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  LC = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 },
  yg = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 },
  AC =
    (((Sa = {})[TC] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }),
    (Sa[gg] = yg),
    Sa);
function Hd(e) {
  return ("type" in (t = e) && t.type.$$typeof) === gg ? yg : "$$typeof" in e ? AC[e.$$typeof] : NC;
  var t;
}
var PC = Object.defineProperty,
  IC = Object.getOwnPropertyNames,
  Kd = Object.getOwnPropertySymbols,
  $C = Object.getOwnPropertyDescriptor,
  MC = Object.getPrototypeOf,
  Gd = Object.prototype;
function Sg(e, t, n) {
  if (typeof t != "string") {
    if (Gd) {
      var r = MC(t);
      r && r !== Gd && Sg(e, r, n);
    }
    var o = IC(t);
    Kd && (o = o.concat(Kd(t)));
    for (var i = Hd(e), l = Hd(t), s = 0; s < o.length; ++s) {
      var a = o[s];
      if (!(a in LC || (n && n[a]) || (l && a in l) || (i && a in i))) {
        var u = $C(t, a);
        try {
          PC(e, a, u);
        } catch {}
      }
    }
  }
  return e;
}
function br(e) {
  return typeof e == "function";
}
function Yc(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function On(e, t) {
  return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Qd(e, t) {
  if (e.length === 0) return "";
  for (var n = e[0], r = 1; r < e.length; r++) n += e[r];
  return n;
}
function ei(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Pu(e, t, n) {
  if ((n === void 0 && (n = !1), !n && !ei(e) && !Array.isArray(e))) return t;
  if (Array.isArray(t)) for (var r = 0; r < t.length; r++) e[r] = Pu(e[r], t[r]);
  else if (ei(t)) for (var r in t) e[r] = Pu(e[r], t[r]);
  return e;
}
function Zc(e, t) {
  Object.defineProperty(e, "toString", { value: t });
}
function hi(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  return new Error(
    "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
      .concat(e, " for more information.")
      .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")
  );
}
var jC = (function () {
    function e(t) {
      (this.groupSizes = new Uint32Array(512)), (this.length = 512), (this.tag = t);
    }
    return (
      (e.prototype.indexOfGroup = function (t) {
        for (var n = 0, r = 0; r < t; r++) n += this.groupSizes[r];
        return n;
      }),
      (e.prototype.insertRules = function (t, n) {
        if (t >= this.groupSizes.length) {
          for (var r = this.groupSizes, o = r.length, i = o; t >= i; ) if ((i <<= 1) < 0) throw hi(16, "".concat(t));
          (this.groupSizes = new Uint32Array(i)), this.groupSizes.set(r), (this.length = i);
          for (var l = o; l < i; l++) this.groupSizes[l] = 0;
        }
        for (var s = this.indexOfGroup(t + 1), a = ((l = 0), n.length); l < a; l++)
          this.tag.insertRule(s, n[l]) && (this.groupSizes[t]++, s++);
      }),
      (e.prototype.clearGroup = function (t) {
        if (t < this.length) {
          var n = this.groupSizes[t],
            r = this.indexOfGroup(t),
            o = r + n;
          this.groupSizes[t] = 0;
          for (var i = r; i < o; i++) this.tag.deleteRule(r);
        }
      }),
      (e.prototype.getGroup = function (t) {
        var n = "";
        if (t >= this.length || this.groupSizes[t] === 0) return n;
        for (var r = this.groupSizes[t], o = this.indexOfGroup(t), i = o + r, l = o; l < i; l++)
          n += "".concat(this.tag.getRule(l)).concat(Gc);
        return n;
      }),
      e
    );
  })(),
  sl = new Map(),
  Fl = new Map(),
  al = 1,
  Vi = function (e) {
    if (sl.has(e)) return sl.get(e);
    for (; Fl.has(al); ) al++;
    var t = al++;
    return sl.set(e, t), Fl.set(t, e), t;
  },
  DC = function (e, t) {
    (al = t + 1), sl.set(e, t), Fl.set(t, e);
  },
  OC = "style[".concat(Fr, "][").concat(dg, '="').concat(Ps, '"]'),
  zC = new RegExp("^".concat(Fr, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),
  VC = function (e, t, n) {
    for (var r, o = n.split(","), i = 0, l = o.length; i < l; i++) (r = o[i]) && e.registerName(t, r);
  },
  UC = function (e, t) {
    for (
      var n, r = ((n = t.textContent) !== null && n !== void 0 ? n : "").split(Gc), o = [], i = 0, l = r.length;
      i < l;
      i++
    ) {
      var s = r[i].trim();
      if (s) {
        var a = s.match(zC);
        if (a) {
          var u = 0 | parseInt(a[1], 10),
            f = a[2];
          u !== 0 && (DC(f, u), VC(e, f, a[3]), e.getTag().insertRules(u, o)), (o.length = 0);
        } else o.push(s);
      }
    }
  };
function FC() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var _g = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement("style"),
      o = (function (s) {
        var a = Array.from(s.querySelectorAll("style[".concat(Fr, "]")));
        return a[a.length - 1];
      })(n),
      i = o !== void 0 ? o.nextSibling : null;
    r.setAttribute(Fr, fg), r.setAttribute(dg, Ps);
    var l = FC();
    return l && r.setAttribute("nonce", l), n.insertBefore(r, i), r;
  },
  BC = (function () {
    function e(t) {
      (this.element = _g(t)),
        this.element.appendChild(document.createTextNode("")),
        (this.sheet = (function (n) {
          if (n.sheet) return n.sheet;
          for (var r = document.styleSheets, o = 0, i = r.length; o < i; o++) {
            var l = r[o];
            if (l.ownerNode === n) return l;
          }
          throw hi(17);
        })(this.element)),
        (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        try {
          return this.sheet.insertRule(n, t), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (e.prototype.deleteRule = function (t) {
        this.sheet.deleteRule(t), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        var n = this.sheet.cssRules[t];
        return n && n.cssText ? n.cssText : "";
      }),
      e
    );
  })(),
  bC = (function () {
    function e(t) {
      (this.element = _g(t)), (this.nodes = this.element.childNodes), (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        if (t <= this.length && t >= 0) {
          var r = document.createTextNode(n);
          return this.element.insertBefore(r, this.nodes[t] || null), this.length++, !0;
        }
        return !1;
      }),
      (e.prototype.deleteRule = function (t) {
        this.element.removeChild(this.nodes[t]), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.nodes[t].textContent : "";
      }),
      e
    );
  })(),
  WC = (function () {
    function e(t) {
      (this.rules = []), (this.length = 0);
    }
    return (
      (e.prototype.insertRule = function (t, n) {
        return t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0);
      }),
      (e.prototype.deleteRule = function (t) {
        this.rules.splice(t, 1), this.length--;
      }),
      (e.prototype.getRule = function (t) {
        return t < this.length ? this.rules[t] : "";
      }),
      e
    );
  })(),
  Yd = Qc,
  HC = { isServer: !Qc, useCSSOMInjection: !_C },
  wg = (function () {
    function e(t, n, r) {
      t === void 0 && (t = Br), n === void 0 && (n = {});
      var o = this;
      (this.options = tt(tt({}, HC), t)),
        (this.gs = n),
        (this.names = new Map(r)),
        (this.server = !!t.isServer),
        !this.server &&
          Qc &&
          Yd &&
          ((Yd = !1),
          (function (i) {
            for (var l = document.querySelectorAll(OC), s = 0, a = l.length; s < a; s++) {
              var u = l[s];
              u && u.getAttribute(Fr) !== fg && (UC(i, u), u.parentNode && u.parentNode.removeChild(u));
            }
          })(this)),
        Zc(this, function () {
          return (function (i) {
            for (
              var l = i.getTag(),
                s = l.length,
                a = "",
                u = function (d) {
                  var m = (function (h) {
                    return Fl.get(h);
                  })(d);
                  if (m === void 0) return "continue";
                  var S = i.names.get(m),
                    v = l.getGroup(d);
                  if (S === void 0 || v.length === 0) return "continue";
                  var w = "".concat(Fr, ".g").concat(d, '[id="').concat(m, '"]'),
                    T = "";
                  S !== void 0 &&
                    S.forEach(function (h) {
                      h.length > 0 && (T += "".concat(h, ","));
                    }),
                    (a += "".concat(v).concat(w, '{content:"').concat(T, '"}').concat(Gc));
                },
                f = 0;
              f < s;
              f++
            )
              u(f);
            return a;
          })(o);
        });
    }
    return (
      (e.registerId = function (t) {
        return Vi(t);
      }),
      (e.prototype.reconstructWithOptions = function (t, n) {
        return n === void 0 && (n = !0), new e(tt(tt({}, this.options), t), this.gs, (n && this.names) || void 0);
      }),
      (e.prototype.allocateGSInstance = function (t) {
        return (this.gs[t] = (this.gs[t] || 0) + 1);
      }),
      (e.prototype.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((t = (function (n) {
              var r = n.useCSSOMInjection,
                o = n.target;
              return n.isServer ? new WC(o) : r ? new BC(o) : new bC(o);
            })(this.options)),
            new jC(t)))
        );
        var t;
      }),
      (e.prototype.hasNameForId = function (t, n) {
        return this.names.has(t) && this.names.get(t).has(n);
      }),
      (e.prototype.registerName = function (t, n) {
        if ((Vi(t), this.names.has(t))) this.names.get(t).add(n);
        else {
          var r = new Set();
          r.add(n), this.names.set(t, r);
        }
      }),
      (e.prototype.insertRules = function (t, n, r) {
        this.registerName(t, n), this.getTag().insertRules(Vi(t), r);
      }),
      (e.prototype.clearNames = function (t) {
        this.names.has(t) && this.names.get(t).clear();
      }),
      (e.prototype.clearRules = function (t) {
        this.getTag().clearGroup(Vi(t)), this.clearNames(t);
      }),
      (e.prototype.clearTag = function () {
        this.tag = void 0;
      }),
      e
    );
  })(),
  KC = /&/g,
  GC = /^\s*\/\/.*$/gm;
function Rg(e, t) {
  return e.map(function (n) {
    return (
      n.type === "rule" &&
        ((n.value = "".concat(t, " ").concat(n.value)),
        (n.value = n.value.replaceAll(",", ",".concat(t, " "))),
        (n.props = n.props.map(function (r) {
          return "".concat(t, " ").concat(r);
        }))),
      Array.isArray(n.children) && n.type !== "@keyframes" && (n.children = Rg(n.children, t)),
      n
    );
  });
}
function QC(e) {
  var t,
    n,
    r,
    o = Br,
    i = o.options,
    l = i === void 0 ? Br : i,
    s = o.plugins,
    a = s === void 0 ? Is : s,
    u = function (m, S, v) {
      return v.startsWith(n) && v.endsWith(n) && v.replaceAll(n, "").length > 0 ? ".".concat(t) : m;
    },
    f = a.slice();
  f.push(function (m) {
    m.type === Ts && m.value.includes("&") && (m.props[0] = m.props[0].replace(KC, n).replace(r, u));
  }),
    l.prefix && f.push(yC),
    f.push(mC);
  var d = function (m, S, v, w) {
    S === void 0 && (S = ""),
      v === void 0 && (v = ""),
      w === void 0 && (w = "&"),
      (t = w),
      (n = S),
      (r = new RegExp("\\".concat(n, "\\b"), "g"));
    var T = m.replace(GC, ""),
      h = pC(v || S ? "".concat(v, " ").concat(S, " { ").concat(T, " }") : T);
    l.namespace && (h = Rg(h, l.namespace));
    var c = [];
    return (
      Ul(
        h,
        vC(
          f.concat(
            gC(function (p) {
              return c.push(p);
            })
          )
        )
      ),
      c
    );
  };
  return (
    (d.hash = a.length
      ? a
          .reduce(function (m, S) {
            return S.name || hi(15), Sr(m, S.name);
          }, hg)
          .toString()
      : ""),
    d
  );
}
var YC = new wg(),
  Iu = QC(),
  Eg = le.createContext({ shouldForwardProp: void 0, styleSheet: YC, stylis: Iu });
Eg.Consumer;
le.createContext(void 0);
function Zd() {
  return j.useContext(Eg);
}
var ZC = (function () {
    function e(t, n) {
      var r = this;
      (this.inject = function (o, i) {
        i === void 0 && (i = Iu);
        var l = r.name + i.hash;
        o.hasNameForId(r.id, l) || o.insertRules(r.id, l, i(r.rules, l, "@keyframes"));
      }),
        (this.name = t),
        (this.id = "sc-keyframes-".concat(t)),
        (this.rules = n),
        Zc(this, function () {
          throw hi(12, String(r.name));
        });
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = Iu), this.name + t.hash;
      }),
      e
    );
  })(),
  XC = function (e) {
    return e >= "A" && e <= "Z";
  };
function Xd(e) {
  for (var t = "", n = 0; n < e.length; n++) {
    var r = e[n];
    if (n === 1 && r === "-" && e[0] === "-") return e;
    XC(r) ? (t += "-" + r.toLowerCase()) : (t += r);
  }
  return t.startsWith("ms-") ? "-" + t : t;
}
var xg = function (e) {
    return e == null || e === !1 || e === "";
  },
  kg = function (e) {
    var t,
      n,
      r = [];
    for (var o in e) {
      var i = e[o];
      e.hasOwnProperty(o) &&
        !xg(i) &&
        ((Array.isArray(i) && i.isCss) || br(i)
          ? r.push("".concat(Xd(o), ":"), i, ";")
          : ei(i)
            ? r.push.apply(r, Vl(Vl(["".concat(o, " {")], kg(i), !1), ["}"], !1))
            : r.push(
                ""
                  .concat(Xd(o), ": ")
                  .concat(
                    ((t = o),
                    (n = i) == null || typeof n == "boolean" || n === ""
                      ? ""
                      : typeof n != "number" || n === 0 || t in SC || t.startsWith("--")
                        ? String(n).trim()
                        : "".concat(n, "px")),
                    ";"
                  )
              ));
    }
    return r;
  };
function Bn(e, t, n, r) {
  if (xg(e)) return [];
  if (Yc(e)) return [".".concat(e.styledComponentId)];
  if (br(e)) {
    if (!br((i = e)) || (i.prototype && i.prototype.isReactComponent) || !t) return [e];
    var o = e(t);
    return Bn(o, t, n, r);
  }
  var i;
  return e instanceof ZC
    ? n
      ? (e.inject(n, r), [e.getName(r)])
      : [e]
    : ei(e)
      ? kg(e)
      : Array.isArray(e)
        ? Array.prototype.concat.apply(
            Is,
            e.map(function (l) {
              return Bn(l, t, n, r);
            })
          )
        : [e.toString()];
}
function JC(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (br(n) && !Yc(n)) return !1;
  }
  return !0;
}
var qC = mg(Ps),
  eT = (function () {
    function e(t, n, r) {
      (this.rules = t),
        (this.staticRulesId = ""),
        (this.isStatic = (r === void 0 || r.isStatic) && JC(t)),
        (this.componentId = n),
        (this.baseHash = Sr(qC, n)),
        (this.baseStyle = r),
        wg.registerId(n);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, n, r) {
        var o = this.baseStyle ? this.baseStyle.generateAndInjectStyles(t, n, r) : "";
        if (this.isStatic && !r.hash)
          if (this.staticRulesId && n.hasNameForId(this.componentId, this.staticRulesId)) o = On(o, this.staticRulesId);
          else {
            var i = Qd(Bn(this.rules, t, n, r)),
              l = Au(Sr(this.baseHash, i) >>> 0);
            if (!n.hasNameForId(this.componentId, l)) {
              var s = r(i, ".".concat(l), void 0, this.componentId);
              n.insertRules(this.componentId, l, s);
            }
            (o = On(o, l)), (this.staticRulesId = l);
          }
        else {
          for (var a = Sr(this.baseHash, r.hash), u = "", f = 0; f < this.rules.length; f++) {
            var d = this.rules[f];
            if (typeof d == "string") u += d;
            else if (d) {
              var m = Qd(Bn(d, t, n, r));
              (a = Sr(a, m + f)), (u += m);
            }
          }
          if (u) {
            var S = Au(a >>> 0);
            n.hasNameForId(this.componentId, S) ||
              n.insertRules(this.componentId, S, r(u, ".".concat(S), void 0, this.componentId)),
              (o = On(o, S));
          }
        }
        return o;
      }),
      e
    );
  })(),
  Cg = le.createContext(void 0);
Cg.Consumer;
var wa = {};
function tT(e, t, n) {
  var r = Yc(e),
    o = e,
    i = !_a(e),
    l = t.attrs,
    s = l === void 0 ? Is : l,
    a = t.componentId,
    u =
      a === void 0
        ? (function (E, k) {
            var C = typeof E != "string" ? "sc" : bd(E);
            wa[C] = (wa[C] || 0) + 1;
            var x = "".concat(C, "-").concat(kC(Ps + C + wa[C]));
            return k ? "".concat(k, "-").concat(x) : x;
          })(t.displayName, t.parentComponentId)
        : a,
    f = t.displayName,
    d =
      f === void 0
        ? (function (E) {
            return _a(E) ? "styled.".concat(E) : "Styled(".concat(CC(E), ")");
          })(e)
        : f,
    m = t.displayName && t.componentId ? "".concat(bd(t.displayName), "-").concat(t.componentId) : t.componentId || u,
    S = r && o.attrs ? o.attrs.concat(s).filter(Boolean) : s,
    v = t.shouldForwardProp;
  if (r && o.shouldForwardProp) {
    var w = o.shouldForwardProp;
    if (t.shouldForwardProp) {
      var T = t.shouldForwardProp;
      v = function (E, k) {
        return w(E, k) && T(E, k);
      };
    } else v = w;
  }
  var h = new eT(n, m, r ? o.componentStyle : void 0);
  function c(E, k) {
    return (function (C, x, I) {
      var oe = C.attrs,
        B = C.componentStyle,
        de = C.defaultProps,
        Xe = C.foldedComponentIds,
        se = C.styledComponentId,
        $e = C.target,
        kt = le.useContext(Cg),
        Me = Zd(),
        Ve = C.shouldForwardProp || Me.shouldForwardProp,
        M = wC(x, kt, de) || Br,
        b = (function (K, D, Z) {
          for (var X, F = tt(tt({}, D), { className: void 0, theme: Z }), ce = 0; ce < K.length; ce += 1) {
            var ye = br((X = K[ce])) ? X(F) : X;
            for (var ne in ye)
              F[ne] = ne === "className" ? On(F[ne], ye[ne]) : ne === "style" ? tt(tt({}, F[ne]), ye[ne]) : ye[ne];
          }
          return D.className && (F.className = On(F.className, D.className)), F;
        })(oe, x, M),
        $ = b.as || $e,
        W = {};
      for (var _ in b)
        b[_] === void 0 ||
          _[0] === "$" ||
          _ === "as" ||
          (_ === "theme" && b.theme === M) ||
          (_ === "forwardedAs" ? (W.as = b.forwardedAs) : (Ve && !Ve(_, $)) || (W[_] = b[_]));
      var A = (function (K, D) {
          var Z = Zd(),
            X = K.generateAndInjectStyles(D, Z.styleSheet, Z.stylis);
          return X;
        })(B, b),
        P = On(Xe, se);
      return (
        A && (P += " " + A),
        b.className && (P += " " + b.className),
        (W[_a($) && !pg.has($) ? "class" : "className"] = P),
        (W.ref = I),
        j.createElement($, W)
      );
    })(p, E, k);
  }
  c.displayName = d;
  var p = le.forwardRef(c);
  return (
    (p.attrs = S),
    (p.componentStyle = h),
    (p.displayName = d),
    (p.shouldForwardProp = v),
    (p.foldedComponentIds = r ? On(o.foldedComponentIds, o.styledComponentId) : ""),
    (p.styledComponentId = m),
    (p.target = r ? o.target : e),
    Object.defineProperty(p, "defaultProps", {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (E) {
        this._foldedDefaultProps = r
          ? (function (k) {
              for (var C = [], x = 1; x < arguments.length; x++) C[x - 1] = arguments[x];
              for (var I = 0, oe = C; I < oe.length; I++) Pu(k, oe[I], !0);
              return k;
            })({}, o.defaultProps, E)
          : E;
      },
    }),
    Zc(p, function () {
      return ".".concat(p.styledComponentId);
    }),
    i &&
      Sg(p, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
      }),
    p
  );
}
function Jd(e, t) {
  for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1) n.push(t[r], e[r + 1]);
  return n;
}
var qd = function (e) {
  return Object.assign(e, { isCss: !0 });
};
function nT(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  if (br(e) || ei(e)) return qd(Bn(Jd(Is, Vl([e], t, !0))));
  var r = e;
  return t.length === 0 && r.length === 1 && typeof r[0] == "string" ? Bn(r) : qd(Bn(Jd(r, t)));
}
function $u(e, t, n) {
  if ((n === void 0 && (n = Br), !t)) throw hi(1, t);
  var r = function (o) {
    for (var i = [], l = 1; l < arguments.length; l++) i[l - 1] = arguments[l];
    return e(t, n, nT.apply(void 0, Vl([o], i, !1)));
  };
  return (
    (r.attrs = function (o) {
      return $u(e, t, tt(tt({}, n), { attrs: Array.prototype.concat(n.attrs, o).filter(Boolean) }));
    }),
    (r.withConfig = function (o) {
      return $u(e, t, tt(tt({}, n), o));
    }),
    r
  );
}
var Tg = function (e) {
    return $u(tT, e);
  },
  H = Tg;
pg.forEach(function (e) {
  H[e] = Tg(e);
});
const wt = ({ primary: e = !1, size: t = "medium", backgroundColor: n, label: r, ...o }) => {
    const i = e ? "storybook-button--primary" : "storybook-button--secondary";
    return g.jsx("button", {
      type: "button",
      className: ["storybook-button", `storybook-button--${t}`, i].join(" "),
      style: { backgroundColor: n },
      ...o,
      children: r,
    });
  },
  $s = ({ user: e, onLogin: t, onLogout: n }) =>
    g.jsx("header", {
      children: g.jsxs("div", {
        className: "storybook-header",
        children: [
          g.jsx("div", { children: g.jsx("h1", { children: "SnapEvent" }) }),
          g.jsx("div", {
            children: e
              ? g.jsxs(g.Fragment, {
                  children: [
                    g.jsx("span", { className: "welcome", children: "마이페이지" }),
                    g.jsx(wt, { size: "medium", onClick: n, label: "Log out" }),
                  ],
                })
              : g.jsx(g.Fragment, {
                  children: g.jsx(wt, { primary: !0, size: "medium", onClick: t, label: "Log In" }),
                }),
          }),
        ],
      }),
    }),
  rT = () => {
    const e = li(),
      t = () => {
        e("/login");
      },
      n = () => {
        e("/");
      };
    return g.jsxs(oT, {
      children: [
        g.jsx($s, { onLogin: t, onLogout: n }),
        g.jsxs(ep, {
          children: [
            g.jsx(tp, { src: "/sale.jpeg" }),
            g.jsx(iT, { children: g.jsx(lT, { children: "세일 기간을 놓쳐서 아쉬웠던 적 있으셨나요?" }) }),
            g.jsxs(np, {
              children: [
                "SnapEvent는 관심 있는 브랜드를 구독하면",
                g.jsx("br", {}),
                "세일 기간에 알림을 보내드립니다.",
                g.jsx("br", {}),
                "마감 전 날까지도 알림을 받아보세요!",
              ],
            }),
            g.jsx(rp, {
              children: g.jsx(wt, {
                primary: !1,
                label: "서비스 중인 상품 구경하기",
                onClick: () => {
                  e("/onboarding");
                },
              }),
            }),
          ],
        }),
        g.jsxs(ep, {
          children: [
            g.jsx(tp, { src: "/hands.jpeg" }),
            g.jsxs(np, {
              children: [
                "SnapEvent를 친구에게 공유하고 함께",
                g.jsx("br", {}),
                "구독 상품을 공유해보세요!",
                g.jsx("br", {}),
                "새로운 상품을 발견하세요.",
              ],
            }),
            g.jsx(rp, { children: g.jsx(wt, { primary: !1, label: "공유하기" }) }),
          ],
        }),
      ],
    });
  },
  oT = H.div`
  width: 100%;
  padding: 2rem;
`,
  ep = H.div`
  margin-top: 5rem;
  text-align: center;
`,
  tp = H.img`
  width: 80%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`,
  iT = H.div`
  margin-top: 1.5rem;
`,
  lT = H.h1`
  color: #333;
  font-size: 2rem;
  line-height: 1.5;
`,
  np = H.p`
  color: #555;
  font-size: 1.2rem;
  line-height: 1.6;
  margin: 1.5rem 0;
`,
  rp = H.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`,
  Mo = ({ title: e, description: t, dateRange: n, image: r, href: o }) =>
    g.jsxs(Ng, {
      children: [
        g.jsx(Lg, { src: r }),
        g.jsxs(Ag, {
          children: [
            g.jsx(Pg, { href: o, children: e }),
            t && g.jsx(ul, { children: t }),
            g.jsxs(ul, { children: ["📅 시작 날짜 📅 : ", n.startDate] }),
            g.jsxs(ul, { children: ["📅 종료 날짜 📅 : ", n.endDate] }),
            g.jsx(Ig, { children: g.jsx(wt, { primary: !0, size: "medium", label: "알림 설정" }) }),
          ],
        }),
      ],
    }),
  sT = ({ title: e, ticketOpenDate: t, image: n, href: r }) =>
    g.jsxs(Ng, {
      children: [
        g.jsx(Lg, { src: n }),
        g.jsxs(Ag, {
          children: [
            g.jsx(Pg, { href: r, children: e }),
            g.jsxs(ul, { children: ["📅 시작 날짜 📅 : ", t] }),
            g.jsx(Ig, { children: g.jsx(wt, { primary: !0, size: "medium", label: "알림 설정" }) }),
          ],
        }),
      ],
    }),
  Ng = H.div`
  width: 40%;
  min-width: 250px;
  height: 70%;
  margin: 0.8rem;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
  overflow: hidden;
`,
  Lg = H.img`
  width: 100%;
  height: 60%;
  object-fit: contain;
`,
  Ag = H.div`
  padding: 1rem;
  justify-content: space-evenly;
`,
  Pg = H.a`
  color: #333;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`,
  ul = H.p`
  color: #555;
  font-size: 1rem;
`,
  Ig = H.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`,
  aT = "https://snapevent.site/api/crawl/olive-young",
  uT = "https://snapevent.site/api/crawl/interpark",
  cT = "https://snapevent.site/api/crawl/ssf-shop",
  fT = "https://snapevent.site/api/crawl/ediya-coffee",
  dT = () => {
    const e = li(),
      [t, n] = j.useState(!0),
      [r, o] = j.useState([]),
      [i, l] = j.useState(!0),
      [s, a] = j.useState([]),
      [u, f] = j.useState(!0),
      [d, m] = j.useState([]),
      [S, v] = j.useState(!0),
      [w, T] = j.useState([]);
    return (
      j.useEffect(() => {
        (async () => {
          const h = await fetch(aT),
            c = await fetch(uT),
            p = await fetch(cT),
            E = await fetch(fT);
          if (!h.ok) throw new Error("API 호출 실패" + h.statusText);
          if (!c.ok) throw new Error("API 호출 실패" + c.statusText);
          if (!p.ok) throw new Error("API 호출 실패" + p.statusText);
          if (!E.ok) throw new Error("API 호출 실패" + E.statusText);
          const k = await h.json();
          o(k), n(!1);
          const C = await c.json();
          a(C), l(!1);
          const x = await p.json();
          m(x), f(!1);
          const I = await E.json();
          T(I), v(!1);
        })();
      }, []),
      g.jsxs(pT, {
        children: [
          g.jsx($s, {
            onLogin: () => {
              e("/login");
            },
          }),
          g.jsxs(hT, {
            children: [
              g.jsx(mT, { children: "구독할 이벤트를 골라 주세요!" }),
              g.jsxs(vT, {
                children: [
                  g.jsx(Ui, { children: " 💄 화장품 💄 " }),
                  g.jsxs(Bi, {
                    children: [
                      g.jsx(bi, { type: "checkbox", id: "subscribe-cosmetics", name: "subscribe-cosmetics" }),
                      g.jsx(Wi, { htmlFor: "subscribe-cosmetics", children: "Oliveyoung 구독하기" }),
                    ],
                  }),
                  g.jsx(Fi, {
                    children: t ? g.jsx("div", { children: " ⚠ 로딩 중 ... ⚠ " }) : r.map((h) => g.jsx(Mo, { ...h })),
                  }),
                  g.jsx(Ui, { children: " 🎬 공연/티켓 🎤 " }),
                  g.jsxs(Bi, {
                    children: [
                      g.jsx(bi, { type: "checkbox", id: "subscribe-cosmetics", name: "subscribe-cosmetics" }),
                      g.jsx(Wi, { htmlFor: "subscribe-cosmetics", children: "Interpark 구독하기" }),
                    ],
                  }),
                  g.jsx(Fi, {
                    children: i ? g.jsx("div", { children: " ⚠ 로딩 중 ... ⚠ " }) : s.map((h) => g.jsx(sT, { ...h })),
                  }),
                  g.jsx(Ui, { children: " 🧵 의류 🧶 " }),
                  g.jsxs(Bi, {
                    children: [
                      g.jsx(bi, { type: "checkbox", id: "subscribe-cosmetics", name: "subscribe-cosmetics" }),
                      g.jsx(Wi, { htmlFor: "subscribe-cosmetics", children: "SSF 구독하기" }),
                    ],
                  }),
                  g.jsx(Fi, {
                    children: u ? g.jsx("div", { children: " ⚠ 로딩 중 ... ⚠ " }) : d.map((h) => g.jsx(Mo, { ...h })),
                  }),
                  g.jsx(Ui, { children: " ☕ 카페 🍰 " }),
                  g.jsxs(Bi, {
                    children: [
                      g.jsx(bi, { type: "checkbox", id: "subscribe-cosmetics", name: "subscribe-cosmetics" }),
                      g.jsx(Wi, { htmlFor: "subscribe-cosmetics", children: "Ediya 구독하기" }),
                    ],
                  }),
                  g.jsx(Fi, {
                    children: S ? g.jsx("div", { children: " ⚠ 로딩 중 ... ⚠ " }) : w.map((h) => g.jsx(Mo, { ...h })),
                  }),
                ],
              }),
              g.jsx(gT, { children: g.jsx(wt, { primary: !0, size: "large", label: "구독하기" }) }),
            ],
          }),
        ],
      })
    );
  },
  pT = H.div`
  width: 100%;
  padding: 3rem;
`,
  hT = H.div`
  margin-top: 3rem;
`,
  mT = H.h1`
  color: #333;
  font-size: 2.4rem;
  font-weight: bold;
  text-align: center;
`,
  vT = H.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  margin-top: 2rem;
`,
  Ui = H.h2`
  color: #333;
  font-size: 2rem;
  font-weight: bolder;
  text-align: start;
`,
  Fi = H.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  overflow-x: scroll;
`,
  gT = H.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 1rem 1rem 1rem;
`,
  Bi = H.div`
  display: flex;
  align-items: center;
  margin-left: 0.3rem;
`,
  bi = H.input`
  margin-right: 0.5rem;
  zoom: 2;
`,
  Wi = H.label`
  font-size: 1.3rem;
`,
  yT = () => {
    const [e, t] = j.useState(!1);
    return {
      isOpenModal: e,
      clickModal: () => {
        t(!0);
      },
      closeModal: () => {
        t(!1);
      },
    };
  },
  ST = ({ title: e, onLogIn: t, closeModal: n, logIn: r, joinIn: o, checkDuplication: i }) => {
    const l = li(),
      [s, a] = j.useState(""),
      [u, f] = j.useState(""),
      [d, m] = j.useState(""),
      [S, v] = j.useState(""),
      [w, T] = j.useState(""),
      [h, c] = j.useState("");
    return (
      console.log(s),
      console.log(u),
      console.log(d),
      console.log(h),
      g.jsx(_T, {
        children: g.jsx(wT, {
          children: g.jsxs(RT, {
            children: [
              g.jsxs(ET, { children: [g.jsx(op, { children: e }), g.jsx(op, { onClick: n, children: " ❌ " })] }),
              t
                ? g.jsx(g.Fragment, {
                    children: g.jsxs(ip, {
                      children: [
                        g.jsxs(or, {
                          children: [
                            g.jsx(ir, { htmlFor: "ID", children: "ID" }),
                            g.jsx(lr, {
                              name: "ID",
                              type: "text",
                              id: "ID",
                              onChange: (p) => {
                                a(p.target.value);
                              },
                            }),
                          ],
                        }),
                        g.jsxs(or, {
                          children: [
                            g.jsx(ir, { htmlFor: "PASSWORD", children: "PASSWORD" }),
                            g.jsx(lr, {
                              id: "PASSWORD",
                              name: "password",
                              type: "text",
                              onChange: (p) => {
                                f(p.target.value);
                              },
                            }),
                          ],
                        }),
                        g.jsx(wt, {
                          primary: !0,
                          size: "medium",
                          label: "로그인",
                          onClick: () => {
                            a(""), f(""), l("/main");
                          },
                        }),
                      ],
                    }),
                  })
                : g.jsx(g.Fragment, {
                    children: g.jsxs(ip, {
                      children: [
                        g.jsxs(or, {
                          children: [
                            g.jsx(ir, { htmlFor: "JOINID", children: "ID" }),
                            g.jsx(lr, {
                              id: "JOINID",
                              name: "joinId",
                              type: "text",
                              onChange: (p) => {
                                m(p.target.value);
                              },
                            }),
                          ],
                        }),
                        g.jsxs(or, {
                          children: [
                            g.jsx(ir, { htmlFor: "JOINPASSWORD", children: "PASSWORD" }),
                            g.jsx(lr, {
                              id: "JOINPASSWORD",
                              name: "joinPassword",
                              type: "text",
                              onChange: (p) => {
                                v(p.target.value);
                              },
                            }),
                          ],
                        }),
                        g.jsxs(or, {
                          children: [
                            g.jsx(ir, { htmlFor: "CHECKPASSWORD", children: " CHECK PASSWORD" }),
                            g.jsx(lr, {
                              id: "CHECKPASSWORD",
                              name: "checkPassword",
                              type: "text",
                              onChange: (p) => {
                                T(p.target.value);
                              },
                            }),
                            w !== S && g.jsx("div", { children: "입력한 비밀번호가 다릅니다." }),
                          ],
                        }),
                        g.jsxs(or, {
                          children: [
                            g.jsx(ir, { htmlFor: "NICKNAME", children: "닉네임" }),
                            g.jsx(lr, {
                              id: "NICKNAME",
                              name: "joinNickname",
                              type: "text",
                              onChange: (p) => {
                                c(p.target.value);
                              },
                            }),
                            g.jsx(wt, { primary: !1, size: "small", label: "중복 확인", onClick: i }),
                          ],
                        }),
                        g.jsx(wt, {
                          primary: !0,
                          label: "회원가입",
                          size: "medium",
                          onClick: () => {
                            m(""), v(""), l("/main");
                          },
                        }),
                      ],
                    }),
                  }),
            ],
          }),
        }),
      })
    );
  },
  _T = H.div`
  width:100vw;
  height: 100vh;
`,
  wT = H.div`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`,
  RT = H.div`
  background-color: white;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 3rem;
  border: 1px solid var(--color-white);
  position: fixed;
  width: 25%;
  min-width: 270px;
  height: 65%;
  min-height: 600;
`,
  ET = H.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,
  op = H.h1`
  font-size: 2.5rem;
  color: #333;
  cursor: pointer;
`,
  ip = H.form`
  display: flex;
  flex-direction : column;
  height: calc(100% - 2rem);
`,
  or = H.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1rem 0 1rem 0;
`,
  ir = H.label`
  color: #333;
`,
  lr = H.input`
  width: calc(80% - 1rem);
  height: 2rem;
  border-radius: 5px;
  border-color: #7a7a7a;
`,
  xT = "https://snapevent.site/oauth2/authorization/google",
  kT = "https://snapevent.site/oauth2/authorization/naver",
  CT = "https://snapevent.site/oauth2/authorization/kakao",
  TT = () => {
    fetch(xT);
  },
  NT = async () => {
    fetch(CT);
  },
  LT = async () => {
    fetch(kT);
  },
  AT = () => {
    const { isOpenModal: e, clickModal: t, closeModal: n } = yT(),
      [r, o] = j.useState(!1);
    return g.jsxs(PT, {
      children: [
        g.jsx(IT, { children: "🔥 SnapEvent 🔥" }),
        g.jsx($T, { children: "회원가입 또는 로그인하세요!" }),
        g.jsx(MT, { children: "스냅 이벤트의 다양한 서비스를 이용해보세요." }),
        g.jsxs(jT, {
          children: [
            g.jsx(wt, {
              primary: !1,
              size: "large",
              label: "회원가입",
              onClick: () => {
                o(!0), t();
              },
            }),
            g.jsx(wt, {
              primary: !0,
              size: "large",
              label: "로그인",
              onClick: () => {
                o(!1), t();
              },
            }),
          ],
        }),
        g.jsx(DT, {}),
        g.jsxs(OT, {
          children: [
            g.jsx(Ra, { src: "/kakao.png", onClick: NT }),
            g.jsx(Ra, { src: "/naver.svg", onClick: LT }),
            g.jsx(Ra, { src: "/google.png", onClick: TT }),
          ],
        }),
        e && g.jsx(ST, { title: r ? "Join In" : "Log In", closeModal: n, onLogIn: !r }),
      ],
    });
  },
  PT = H.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: hidden;
`,
  IT = H.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`,
  $T = H.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`,
  MT = H.p`
  font-size: 1.3rem;
  color: #777;
  margin-bottom: 2rem;
`,
  jT = H.div`
  display: flex;
  gap: 1rem;
`,
  DT = H.hr`
  margin-top: 2rem;
  border: solid 0.7px #777;
  width: 370px;
`,
  OT = H.div`
  display: flex;
  flex-direction: row;
`,
  Ra = H.img`
  width: 2rem;
  height: 2rem;
  border-radius: 5px;
  margin: 0.5rem 3rem 0.5rem 3rem;
`,
  zT = () => {
    const e = li();
    return g.jsx(VT, {
      children: g.jsxs(UT, {
        children: [
          g.jsx(ho, { onClick: () => e("/cosmetic"), children: "화장품" }),
          g.jsx(ho, { onClick: () => e("/cafe"), children: "카페" }),
          g.jsx(ho, { onClick: () => e("/concert"), children: "공연/티켓" }),
          g.jsx(ho, { onClick: () => e("/clothes"), children: "의류" }),
          g.jsx(ho, { onClick: () => e("/board"), children: "게시판" }),
        ],
      }),
    });
  },
  VT = H.div`
  margin: 0;
  width: 90vw;
  display: flex;
  justify-content: center;
  align-items: center;
`,
  UT = H.div`
  margin: 1rem;
  width: 95%;
  height: 10%;
  display: flex;
  background-color: #ffbe98;
  justify-content: space-around;
  align-items: center;
  align-self: center;
`,
  ho = H.span`
  color: black;
  font-size: 1.2rem;
  font-weight: bolder;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`,
  FT = () => {
    const e = li(),
      t = [
        {
          title: "oliveyoung",
          description: "예시 데이터입니다",
          dateRange: { startDate: "2024-01-12", endDate: "2024-04-25" },
          image: "brand1.jpg",
          href: "1234",
        },
        {
          title: "ediya",
          description: "예시 데이터입니다",
          dateRange: { startDate: "2024-01-12", endDate: "2024-04-25" },
          image: "brand2.jpg",
          href: "1234",
        },
        {
          title: "ssf",
          description: "예시 데이터입니다",
          dateRange: { startDate: "2024-01-12", endDate: "2024-04-25" },
          image: "brand3.jpg",
          href: "1234",
        },
        {
          title: "Etc",
          description: "예시 데이터입니다",
          dateRange: { startDate: "2024-01-12", endDate: "2024-04-25" },
          image: "brand4.jpg",
          href: "1234",
        },
      ],
      n = [
        {
          title: "brandA",
          description: "예시 데이터입니다",
          dateRange: { startDate: "2024-01-12", endDate: "2024-04-25" },
          image: "follower1.jpg",
          href: "1234",
        },
        {
          title: "brandB",
          description: "예시 데이터입니다",
          dateRange: { startDate: "2024-01-12", endDate: "2024-04-25" },
          image: "follower2.jpg",
          href: "1234",
        },
        {
          title: "brandC",
          description: "예시 데이터입니다",
          dateRange: { startDate: "2024-01-12", endDate: "2024-04-25" },
          image: "follower3.jpg",
          href: "1234",
        },
        {
          title: "brandD",
          description: "예시 데이터입니다",
          dateRange: { startDate: "2024-01-12", endDate: "2024-04-25" },
          image: "follower4.jpg",
          href: "1234",
        },
        {
          title: "brandE",
          description: "예시 데이터입니다",
          dateRange: { startDate: "2024-01-12", endDate: "2024-04-25" },
          image: "follower5.jpg",
          href: "1234",
        },
      ],
      r = [
        { id: 1, title: "첫 번째 게시글" },
        { id: 2, title: "두 번째 게시글" },
        { id: 3, title: "세 번째 게시글" },
        { id: 4, title: "네 번째 게시글" },
        { id: 5, title: "다섯 번째 게시글" },
      ];
    return g.jsxs(BT, {
      children: [
        g.jsx($s, {
          user: { name: "sebin" },
          onLogin: () => {
            e("/login");
          },
          onLogout: () => {
            e("/login");
          },
        }),
        g.jsx(zT, {}),
        g.jsxs(lp, {
          children: [
            g.jsx(sp, { children: "000님이 구독 중인 브랜드" }),
            g.jsx(ap, {
              children:
                t.length > 0
                  ? g.jsx(up, {
                      children: t.map((o) =>
                        g.jsxs(
                          cp,
                          {
                            children: [
                              g.jsx(fp, { src: o.image, alt: o.title }),
                              g.jsx(Mo, {
                                image: o.image,
                                title: o.title,
                                dateRange: o.dateRange,
                                href: o.href,
                                description: o.description,
                              }),
                            ],
                          },
                          o.title
                        )
                      ),
                    })
                  : g.jsx(dp, { children: "구독 중인 브랜드가 없습니다!" }),
            }),
          ],
        }),
        g.jsxs(lp, {
          children: [
            g.jsx(sp, { children: "000님이 팔로우 중인 000님이 구독 중인 브랜드" }),
            g.jsx(ap, {
              children:
                n.length > 0
                  ? g.jsx(up, {
                      children: n.map((o) =>
                        g.jsxs(
                          cp,
                          {
                            children: [
                              g.jsx(fp, { src: o.image, alt: o.title }),
                              g.jsx(Mo, {
                                image: o.image,
                                title: o.title,
                                dateRange: o.dateRange,
                                href: o.href,
                                description: o.description,
                              }),
                            ],
                          },
                          o.title
                        )
                      ),
                    })
                  : g.jsx(dp, { children: "팔로우 중인 브랜드가 없습니다!" }),
            }),
          ],
        }),
        g.jsx(bT, { children: g.jsx("h2", { children: "게시판" }) }),
        g.jsx(WT, { children: r.map((o) => g.jsx(HT, { children: o.title }, o.id)) }),
      ],
    });
  },
  BT = H.div`
  padding: 2rem;
`,
  lp = H.section`
  margin-top: 2rem;
`,
  sp = H.h2`
  font-weight: bold;
  font-size: 1.5rem;
  color: black;
  margin-left: 3.7rem;
`,
  ap = H.div`
  overflow-x: auto;
  padding-bottom: 1rem;
  margin-left: 3.7rem;
  max-width: 1300px;
`,
  up = H.div`
  display: flex;
`,
  cp = H.div`
  width: 400px;
  height: 300px;
  margin: 1rem;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  flex: 0 0 auto;
`,
  fp = H.img`
  width: 200px; /* 이미지 크기 조절 */
  height: 200px;
  object-fit: cover;
  border-radius: 10px; /* 이미지에 원하는 모양의 테두리 설정 */
`,
  dp = H.p`
  font-weight: bold;
  font-size: 1.2rem;
  color: black;
  margin-left: 3.7rem;
`,
  bT = H.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 5px solid #ffbe98;
  padding: 1rem;
  margin-left: 4rem;
  margin-right: 2rem;
  margin-bottom: 1rem;
  h2 {
    font-size: 1.8rem;
    color: #333;
    margin: 3rem;
  }
`,
  WT = H.div`
  margin: 2rem auto;
  max-width: 1000px;
`,
  HT = H.div`
  padding: 1rem;
  border-bottom: 1px solid #ccc;
  &:last-child {
    border-bottom: none;
  }
`,
  KT = () => g.jsx("div", { children: g.jsx($s, {}) }),
  $g = () => g.jsx($g, {}),
  GT = () =>
    g.jsx(rg, {
      children: g.jsx(uS, {
        children: g.jsxs(lS, {
          children: [
            g.jsx(In, { path: "/", element: g.jsx(rT, {}) }),
            g.jsx(In, { path: "/onboarding", element: g.jsx(dT, {}) }),
            g.jsx(In, { path: "/login", element: g.jsx(AT, {}) }),
            g.jsx(In, { path: "/main", element: g.jsx(FT, {}) }),
            g.jsx(In, { path: "/board", element: g.jsx(KT, {}) }),
            g.jsx(In, { path: "/mypage", element: g.jsx($g, {}) }),
          ],
        }),
      }),
    });
Ea.createRoot(document.getElementById("root")).render(
  g.jsx(rg, { children: g.jsx(le.StrictMode, { children: g.jsx(GT, {}) }) })
);
