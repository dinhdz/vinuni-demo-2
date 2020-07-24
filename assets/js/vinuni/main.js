!(function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = e.document
              ? t(e, !0)
              : function (e) {
                    if (!e.document) throw new Error("jQuery requires a window with a document");
                    return t(e);
                })
        : t(e);
})("undefined" != typeof window ? window : this, function (T, e) {
    "use strict";
    var t = [],
        k = T.document,
        i = Object.getPrototypeOf,
        a = t.slice,
        g = t.concat,
        l = t.push,
        o = t.indexOf,
        n = {},
        r = n.toString,
        m = n.hasOwnProperty,
        s = m.toString,
        c = s.call(Object),
        v = {},
        y = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType;
        },
        b = function (e) {
            return null != e && e === e.window;
        },
        d = { type: !0, src: !0, nonce: !0, noModule: !0 };
    function w(e, t, n) {
        var i,
            o,
            r = (n = n || k).createElement("script");
        if (((r.text = e), t)) for (i in d) (o = t[i] || (t.getAttribute && t.getAttribute(i))) && r.setAttribute(i, o);
        n.head.appendChild(r).parentNode.removeChild(r);
    }
    function x(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[r.call(e)] || "object" : typeof e;
    }
    var u = "3.4.1",
        C = function (e, t) {
            return new C.fn.init(e, t);
        },
        p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    function f(e) {
        var t = !!e && "length" in e && e.length,
            n = x(e);
        return !y(e) && !b(e) && ("array" === n || 0 === t || ("number" == typeof t && 0 < t && t - 1 in e));
    }
    (C.fn = C.prototype = {
        jquery: u,
        constructor: C,
        length: 0,
        toArray: function () {
            return a.call(this);
        },
        get: function (e) {
            return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function (e) {
            var t = C.merge(this.constructor(), e);
            return (t.prevObject = this), t;
        },
        each: function (e) {
            return C.each(this, e);
        },
        map: function (n) {
            return this.pushStack(
                C.map(this, function (e, t) {
                    return n.call(e, t, e);
                })
            );
        },
        slice: function () {
            return this.pushStack(a.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor();
        },
        push: l,
        sort: t.sort,
        splice: t.splice,
    }),
        (C.extend = C.fn.extend = function () {
            var e,
                t,
                n,
                i,
                o,
                r,
                s = arguments[0] || {},
                a = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof s && ((c = s), (s = arguments[a] || {}), a++), "object" == typeof s || y(s) || (s = {}), a === l && ((s = this), a--); a < l; a++)
                if (null != (e = arguments[a]))
                    for (t in e)
                        (i = e[t]),
                            "__proto__" !== t &&
                                s !== i &&
                                (c && i && (C.isPlainObject(i) || (o = Array.isArray(i)))
                                    ? ((n = s[t]), (r = o && !Array.isArray(n) ? [] : o || C.isPlainObject(n) ? n : {}), (o = !1), (s[t] = C.extend(c, r, i)))
                                    : void 0 !== i && (s[t] = i));
            return s;
        }),
        C.extend({
            expando: "jQuery" + (u + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
                var t, n;
                return !(!e || "[object Object]" !== r.call(e) || ((t = i(e)) && ("function" != typeof (n = m.call(t, "constructor") && t.constructor) || s.call(n) !== c)));
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
            },
            globalEval: function (e, t) {
                w(e, { nonce: t && t.nonce });
            },
            each: function (e, t) {
                var n,
                    i = 0;
                if (f(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                return e;
            },
            trim: function (e) {
                return null == e ? "" : (e + "").replace(p, "");
            },
            makeArray: function (e, t) {
                var n = t || [];
                return null != e && (f(Object(e)) ? C.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n;
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : o.call(t, e, n);
            },
            merge: function (e, t) {
                for (var n = +t.length, i = 0, o = e.length; i < n; i++) e[o++] = t[i];
                return (e.length = o), e;
            },
            grep: function (e, t, n) {
                for (var i = [], o = 0, r = e.length, s = !n; o < r; o++) !t(e[o], o) !== s && i.push(e[o]);
                return i;
            },
            map: function (e, t, n) {
                var i,
                    o,
                    r = 0,
                    s = [];
                if (f(e)) for (i = e.length; r < i; r++) null != (o = t(e[r], r, n)) && s.push(o);
                else for (r in e) null != (o = t(e[r], r, n)) && s.push(o);
                return g.apply([], s);
            },
            guid: 1,
            support: v,
        }),
        "function" == typeof Symbol && (C.fn[Symbol.iterator] = t[Symbol.iterator]),
        C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            n["[object " + t + "]"] = t.toLowerCase();
        });
    var h = (function (n) {
        var e,
            f,
            w,
            r,
            o,
            h,
            u,
            g,
            x,
            l,
            c,
            S,
            T,
            s,
            k,
            m,
            a,
            d,
            v,
            C = "sizzle" + 1 * new Date(),
            y = n.document,
            E = 0,
            i = 0,
            p = le(),
            b = le(),
            _ = le(),
            A = le(),
            O = function (e, t) {
                return e === t && (c = !0), 0;
            },
            $ = {}.hasOwnProperty,
            t = [],
            D = t.pop,
            j = t.push,
            N = t.push,
            P = t.slice,
            I = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
                return -1;
            },
            M = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            H = "[\\x20\\t\\r\\n\\f]",
            L = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            q = "\\[" + H + "*(" + L + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + H + "*\\]",
            R = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|.*)\\)|)",
            W = new RegExp(H + "+", "g"),
            F = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
            B = new RegExp("^" + H + "*," + H + "*"),
            z = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
            U = new RegExp(H + "|>"),
            X = new RegExp(R),
            G = new RegExp("^" + L + "$"),
            Q = {
                ID: new RegExp("^#(" + L + ")"),
                CLASS: new RegExp("^\\.(" + L + ")"),
                TAG: new RegExp("^(" + L + "|[*])"),
                ATTR: new RegExp("^" + q),
                PSEUDO: new RegExp("^" + R),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + M + ")$", "i"),
                needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i"),
            },
            K = /HTML$/i,
            V = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\([\\da-f]{1,6}" + H + "?|(" + H + ")|.)", "ig"),
            ne = function (e, t, n) {
                var i = "0x" + t - 65536;
                return i != i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
            },
            ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            oe = function (e, t) {
                return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
            },
            re = function () {
                S();
            },
            se = we(
                function (e) {
                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
                },
                { dir: "parentNode", next: "legend" }
            );
        try {
            N.apply((t = P.call(y.childNodes)), y.childNodes), t[y.childNodes.length].nodeType;
        } catch (e) {
            N = {
                apply: t.length
                    ? function (e, t) {
                          j.apply(e, P.call(t));
                      }
                    : function (e, t) {
                          for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                          e.length = n - 1;
                      },
            };
        }
        function ae(e, t, n, i) {
            var o,
                r,
                s,
                a,
                l,
                c,
                d,
                u = t && t.ownerDocument,
                p = t ? t.nodeType : 9;
            if (((n = n || []), "string" != typeof e || !e || (1 !== p && 9 !== p && 11 !== p))) return n;
            if (!i && ((t ? t.ownerDocument || t : y) !== T && S(t), (t = t || T), k)) {
                if (11 !== p && (l = Z.exec(e)))
                    if ((o = l[1])) {
                        if (9 === p) {
                            if (!(s = t.getElementById(o))) return n;
                            if (s.id === o) return n.push(s), n;
                        } else if (u && (s = u.getElementById(o)) && v(t, s) && s.id === o) return n.push(s), n;
                    } else {
                        if (l[2]) return N.apply(n, t.getElementsByTagName(e)), n;
                        if ((o = l[3]) && f.getElementsByClassName && t.getElementsByClassName) return N.apply(n, t.getElementsByClassName(o)), n;
                    }
                if (f.qsa && !A[e + " "] && (!m || !m.test(e)) && (1 !== p || "object" !== t.nodeName.toLowerCase())) {
                    if (((d = e), (u = t), 1 === p && U.test(e))) {
                        for ((a = t.getAttribute("id")) ? (a = a.replace(ie, oe)) : t.setAttribute("id", (a = C)), r = (c = h(e)).length; r--; ) c[r] = "#" + a + " " + be(c[r]);
                        (d = c.join(",")), (u = (ee.test(e) && ve(t.parentNode)) || t);
                    }
                    try {
                        return N.apply(n, u.querySelectorAll(d)), n;
                    } catch (t) {
                        A(e, !0);
                    } finally {
                        a === C && t.removeAttribute("id");
                    }
                }
            }
            return g(e.replace(F, "$1"), t, n, i);
        }
        function le() {
            var i = [];
            return function e(t, n) {
                return i.push(t + " ") > w.cacheLength && delete e[i.shift()], (e[t + " "] = n);
            };
        }
        function ce(e) {
            return (e[C] = !0), e;
        }
        function de(e) {
            var t = T.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
        }
        function ue(e, t) {
            for (var n = e.split("|"), i = n.length; i--; ) w.attrHandle[n[i]] = t;
        }
        function pe(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function fe(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t;
            };
        }
        function he(n) {
            return function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n;
            };
        }
        function ge(t) {
            return function (e) {
                return "form" in e
                    ? e.parentNode && !1 === e.disabled
                        ? "label" in e
                            ? "label" in e.parentNode
                                ? e.parentNode.disabled === t
                                : e.disabled === t
                            : e.isDisabled === t || (e.isDisabled !== !t && se(e) === t)
                        : e.disabled === t
                    : "label" in e && e.disabled === t;
            };
        }
        function me(s) {
            return ce(function (r) {
                return (
                    (r = +r),
                    ce(function (e, t) {
                        for (var n, i = s([], e.length, r), o = i.length; o--; ) e[(n = i[o])] && (e[n] = !(t[n] = e[n]));
                    })
                );
            });
        }
        function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e;
        }
        for (e in ((f = ae.support = {}),
        (o = ae.isXML = function (e) {
            var t = e.namespaceURI,
                n = (e.ownerDocument || e).documentElement;
            return !K.test(t || (n && n.nodeName) || "HTML");
        }),
        (S = ae.setDocument = function (e) {
            var t,
                n,
                i = e ? e.ownerDocument || e : y;
            return (
                i !== T &&
                    9 === i.nodeType &&
                    i.documentElement &&
                    ((s = (T = i).documentElement),
                    (k = !o(T)),
                    y !== T && (n = T.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", re, !1) : n.attachEvent && n.attachEvent("onunload", re)),
                    (f.attributes = de(function (e) {
                        return (e.className = "i"), !e.getAttribute("className");
                    })),
                    (f.getElementsByTagName = de(function (e) {
                        return e.appendChild(T.createComment("")), !e.getElementsByTagName("*").length;
                    })),
                    (f.getElementsByClassName = J.test(T.getElementsByClassName)),
                    (f.getById = de(function (e) {
                        return (s.appendChild(e).id = C), !T.getElementsByName || !T.getElementsByName(C).length;
                    })),
                    f.getById
                        ? ((w.filter.ID = function (e) {
                              var t = e.replace(te, ne);
                              return function (e) {
                                  return e.getAttribute("id") === t;
                              };
                          }),
                          (w.find.ID = function (e, t) {
                              if (void 0 !== t.getElementById && k) {
                                  var n = t.getElementById(e);
                                  return n ? [n] : [];
                              }
                          }))
                        : ((w.filter.ID = function (e) {
                              var n = e.replace(te, ne);
                              return function (e) {
                                  var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                  return t && t.value === n;
                              };
                          }),
                          (w.find.ID = function (e, t) {
                              if (void 0 !== t.getElementById && k) {
                                  var n,
                                      i,
                                      o,
                                      r = t.getElementById(e);
                                  if (r) {
                                      if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                                      for (o = t.getElementsByName(e), i = 0; (r = o[i++]); ) if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                                  }
                                  return [];
                              }
                          })),
                    (w.find.TAG = f.getElementsByTagName
                        ? function (e, t) {
                              return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : f.qsa ? t.querySelectorAll(e) : void 0;
                          }
                        : function (e, t) {
                              var n,
                                  i = [],
                                  o = 0,
                                  r = t.getElementsByTagName(e);
                              if ("*" !== e) return r;
                              for (; (n = r[o++]); ) 1 === n.nodeType && i.push(n);
                              return i;
                          }),
                    (w.find.CLASS =
                        f.getElementsByClassName &&
                        function (e, t) {
                            if (void 0 !== t.getElementsByClassName && k) return t.getElementsByClassName(e);
                        }),
                    (a = []),
                    (m = []),
                    (f.qsa = J.test(T.querySelectorAll)) &&
                        (de(function (e) {
                            (s.appendChild(e).innerHTML = "<a id='" + C + "'></a><select id='" + C + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + H + "*(?:''|\"\")"),
                                e.querySelectorAll("[selected]").length || m.push("\\[" + H + "*(?:value|" + M + ")"),
                                e.querySelectorAll("[id~=" + C + "-]").length || m.push("~="),
                                e.querySelectorAll(":checked").length || m.push(":checked"),
                                e.querySelectorAll("a#" + C + "+*").length || m.push(".#.+[+~]");
                        }),
                        de(function (e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = T.createElement("input");
                            t.setAttribute("type", "hidden"),
                                e.appendChild(t).setAttribute("name", "D"),
                                e.querySelectorAll("[name=d]").length && m.push("name" + H + "*[*^$|!~]?="),
                                2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"),
                                (s.appendChild(e).disabled = !0),
                                2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"),
                                e.querySelectorAll("*,:x"),
                                m.push(",.*:");
                        })),
                    (f.matchesSelector = J.test((d = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector))) &&
                        de(function (e) {
                            (f.disconnectedMatch = d.call(e, "*")), d.call(e, "[s!='']:x"), a.push("!=", R);
                        }),
                    (m = m.length && new RegExp(m.join("|"))),
                    (a = a.length && new RegExp(a.join("|"))),
                    (t = J.test(s.compareDocumentPosition)),
                    (v =
                        t || J.test(s.contains)
                            ? function (e, t) {
                                  var n = 9 === e.nodeType ? e.documentElement : e,
                                      i = t && t.parentNode;
                                  return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
                              }
                            : function (e, t) {
                                  if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                                  return !1;
                              }),
                    (O = t
                        ? function (e, t) {
                              if (e === t) return (c = !0), 0;
                              var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                              return (
                                  n ||
                                  (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!f.sortDetached && t.compareDocumentPosition(e) === n)
                                      ? e === T || (e.ownerDocument === y && v(y, e))
                                          ? -1
                                          : t === T || (t.ownerDocument === y && v(y, t))
                                          ? 1
                                          : l
                                          ? I(l, e) - I(l, t)
                                          : 0
                                      : 4 & n
                                      ? -1
                                      : 1)
                              );
                          }
                        : function (e, t) {
                              if (e === t) return (c = !0), 0;
                              var n,
                                  i = 0,
                                  o = e.parentNode,
                                  r = t.parentNode,
                                  s = [e],
                                  a = [t];
                              if (!o || !r) return e === T ? -1 : t === T ? 1 : o ? -1 : r ? 1 : l ? I(l, e) - I(l, t) : 0;
                              if (o === r) return pe(e, t);
                              for (n = e; (n = n.parentNode); ) s.unshift(n);
                              for (n = t; (n = n.parentNode); ) a.unshift(n);
                              for (; s[i] === a[i]; ) i++;
                              return i ? pe(s[i], a[i]) : s[i] === y ? -1 : a[i] === y ? 1 : 0;
                          })),
                T
            );
        }),
        (ae.matches = function (e, t) {
            return ae(e, null, null, t);
        }),
        (ae.matchesSelector = function (e, t) {
            if (((e.ownerDocument || e) !== T && S(e), f.matchesSelector && k && !A[t + " "] && (!a || !a.test(t)) && (!m || !m.test(t))))
                try {
                    var n = d.call(e, t);
                    if (n || f.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return n;
                } catch (e) {
                    A(t, !0);
                }
            return 0 < ae(t, T, null, [e]).length;
        }),
        (ae.contains = function (e, t) {
            return (e.ownerDocument || e) !== T && S(e), v(e, t);
        }),
        (ae.attr = function (e, t) {
            (e.ownerDocument || e) !== T && S(e);
            var n = w.attrHandle[t.toLowerCase()],
                i = n && $.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !k) : void 0;
            return void 0 !== i ? i : f.attributes || !k ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
        }),
        (ae.escape = function (e) {
            return (e + "").replace(ie, oe);
        }),
        (ae.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }),
        (ae.uniqueSort = function (e) {
            var t,
                n = [],
                i = 0,
                o = 0;
            if (((c = !f.detectDuplicates), (l = !f.sortStable && e.slice(0)), e.sort(O), c)) {
                for (; (t = e[o++]); ) t === e[o] && (i = n.push(o));
                for (; i--; ) e.splice(n[i], 1);
            }
            return (l = null), e;
        }),
        (r = ae.getText = function (e) {
            var t,
                n = "",
                i = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
                } else if (3 === o || 4 === o) return e.nodeValue;
            } else for (; (t = e[i++]); ) n += r(t);
            return n;
        }),
        ((w = ae.selectors = {
            cacheLength: 50,
            createPseudo: ce,
            match: Q,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
            preFilter: {
                ATTR: function (e) {
                    return (e[1] = e[1].replace(te, ne)), (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function (e) {
                    return (
                        (e[1] = e[1].toLowerCase()),
                        "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && ae.error(e[0]),
                        e
                    );
                },
                PSEUDO: function (e) {
                    var t,
                        n = !e[6] && e[2];
                    return Q.CHILD.test(e[0])
                        ? null
                        : (e[3] ? (e[2] = e[4] || e[5] || "") : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                },
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e
                        ? function () {
                              return !0;
                          }
                        : function (e) {
                              return e.nodeName && e.nodeName.toLowerCase() === t;
                          };
                },
                CLASS: function (e) {
                    var t = p[e + " "];
                    return (
                        t ||
                        ((t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) &&
                            p(e, function (e) {
                                return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "");
                            }))
                    );
                },
                ATTR: function (n, i, o) {
                    return function (e) {
                        var t = ae.attr(e, n);
                        return null == t
                            ? "!=" === i
                            : !i ||
                                  ((t += ""),
                                  "=" === i
                                      ? t === o
                                      : "!=" === i
                                      ? t !== o
                                      : "^=" === i
                                      ? o && 0 === t.indexOf(o)
                                      : "*=" === i
                                      ? o && -1 < t.indexOf(o)
                                      : "$=" === i
                                      ? o && t.slice(-o.length) === o
                                      : "~=" === i
                                      ? -1 < (" " + t.replace(W, " ") + " ").indexOf(o)
                                      : "|=" === i && (t === o || t.slice(0, o.length + 1) === o + "-"));
                    };
                },
                CHILD: function (h, e, t, g, m) {
                    var v = "nth" !== h.slice(0, 3),
                        y = "last" !== h.slice(-4),
                        b = "of-type" === e;
                    return 1 === g && 0 === m
                        ? function (e) {
                              return !!e.parentNode;
                          }
                        : function (e, t, n) {
                              var i,
                                  o,
                                  r,
                                  s,
                                  a,
                                  l,
                                  c = v !== y ? "nextSibling" : "previousSibling",
                                  d = e.parentNode,
                                  u = b && e.nodeName.toLowerCase(),
                                  p = !n && !b,
                                  f = !1;
                              if (d) {
                                  if (v) {
                                      for (; c; ) {
                                          for (s = e; (s = s[c]); ) if (b ? s.nodeName.toLowerCase() === u : 1 === s.nodeType) return !1;
                                          l = c = "only" === h && !l && "nextSibling";
                                      }
                                      return !0;
                                  }
                                  if (((l = [y ? d.firstChild : d.lastChild]), y && p)) {
                                      for (
                                          f = (a = (i = (o = (r = (s = d)[C] || (s[C] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[h] || [])[0] === E && i[1]) && i[2], s = a && d.childNodes[a];
                                          (s = (++a && s && s[c]) || (f = a = 0) || l.pop());

                                      )
                                          if (1 === s.nodeType && ++f && s === e) {
                                              o[h] = [E, a, f];
                                              break;
                                          }
                                  } else if ((p && (f = a = (i = (o = (r = (s = e)[C] || (s[C] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[h] || [])[0] === E && i[1]), !1 === f))
                                      for (
                                          ;
                                          (s = (++a && s && s[c]) || (f = a = 0) || l.pop()) &&
                                          ((b ? s.nodeName.toLowerCase() !== u : 1 !== s.nodeType) || !++f || (p && ((o = (r = s[C] || (s[C] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[h] = [E, f]), s !== e));

                                      );
                                  return (f -= m) === g || (f % g == 0 && 0 <= f / g);
                              }
                          };
                },
                PSEUDO: function (e, r) {
                    var t,
                        s = w.pseudos[e] || w.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                    return s[C]
                        ? s(r)
                        : 1 < s.length
                        ? ((t = [e, e, "", r]),
                          w.setFilters.hasOwnProperty(e.toLowerCase())
                              ? ce(function (e, t) {
                                    for (var n, i = s(e, r), o = i.length; o--; ) e[(n = I(e, i[o]))] = !(t[n] = i[o]);
                                })
                              : function (e) {
                                    return s(e, 0, t);
                                })
                        : s;
                },
            },
            pseudos: {
                not: ce(function (e) {
                    var i = [],
                        o = [],
                        a = u(e.replace(F, "$1"));
                    return a[C]
                        ? ce(function (e, t, n, i) {
                              for (var o, r = a(e, null, i, []), s = e.length; s--; ) (o = r[s]) && (e[s] = !(t[s] = o));
                          })
                        : function (e, t, n) {
                              return (i[0] = e), a(i, null, n, o), (i[0] = null), !o.pop();
                          };
                }),
                has: ce(function (t) {
                    return function (e) {
                        return 0 < ae(t, e).length;
                    };
                }),
                contains: ce(function (t) {
                    return (
                        (t = t.replace(te, ne)),
                        function (e) {
                            return -1 < (e.textContent || r(e)).indexOf(t);
                        }
                    );
                }),
                lang: ce(function (n) {
                    return (
                        G.test(n || "") || ae.error("unsupported lang: " + n),
                        (n = n.replace(te, ne).toLowerCase()),
                        function (e) {
                            var t;
                            do {
                                if ((t = k ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-");
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1;
                        }
                    );
                }),
                target: function (e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id;
                },
                root: function (e) {
                    return e === s;
                },
                focus: function (e) {
                    return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0;
                },
                parent: function (e) {
                    return !w.pseudos.empty(e);
                },
                header: function (e) {
                    return Y.test(e.nodeName);
                },
                input: function (e) {
                    return V.test(e.nodeName);
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t && "button" === e.type) || "button" === t;
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: me(function () {
                    return [0];
                }),
                last: me(function (e, t) {
                    return [t - 1];
                }),
                eq: me(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                }),
                even: me(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                }),
                odd: me(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                }),
                lt: me(function (e, t, n) {
                    for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i; ) e.push(i);
                    return e;
                }),
                gt: me(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                    return e;
                }),
            },
        }).pseudos.nth = w.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            w.pseudos[e] = fe(e);
        for (e in { submit: !0, reset: !0 }) w.pseudos[e] = he(e);
        function ye() {}
        function be(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i;
        }
        function we(a, e, t) {
            var l = e.dir,
                c = e.next,
                d = c || l,
                u = t && "parentNode" === d,
                p = i++;
            return e.first
                ? function (e, t, n) {
                      for (; (e = e[l]); ) if (1 === e.nodeType || u) return a(e, t, n);
                      return !1;
                  }
                : function (e, t, n) {
                      var i,
                          o,
                          r,
                          s = [E, p];
                      if (n) {
                          for (; (e = e[l]); ) if ((1 === e.nodeType || u) && a(e, t, n)) return !0;
                      } else
                          for (; (e = e[l]); )
                              if (1 === e.nodeType || u)
                                  if (((o = (r = e[C] || (e[C] = {}))[e.uniqueID] || (r[e.uniqueID] = {})), c && c === e.nodeName.toLowerCase())) e = e[l] || e;
                                  else {
                                      if ((i = o[d]) && i[0] === E && i[1] === p) return (s[2] = i[2]);
                                      if (((o[d] = s)[2] = a(e, t, n))) return !0;
                                  }
                      return !1;
                  };
        }
        function xe(o) {
            return 1 < o.length
                ? function (e, t, n) {
                      for (var i = o.length; i--; ) if (!o[i](e, t, n)) return !1;
                      return !0;
                  }
                : o[0];
        }
        function Se(e, t, n, i, o) {
            for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++) (r = e[a]) && ((n && !n(r, i, o)) || (s.push(r), c && t.push(a)));
            return s;
        }
        function Te(f, h, g, m, v, e) {
            return (
                m && !m[C] && (m = Te(m)),
                v && !v[C] && (v = Te(v, e)),
                ce(function (e, t, n, i) {
                    var o,
                        r,
                        s,
                        a = [],
                        l = [],
                        c = t.length,
                        d =
                            e ||
                            (function (e, t, n) {
                                for (var i = 0, o = t.length; i < o; i++) ae(e, t[i], n);
                                return n;
                            })(h || "*", n.nodeType ? [n] : n, []),
                        u = !f || (!e && h) ? d : Se(d, a, f, n, i),
                        p = g ? (v || (e ? f : c || m) ? [] : t) : u;
                    if ((g && g(u, p, n, i), m)) for (o = Se(p, l), m(o, [], n, i), r = o.length; r--; ) (s = o[r]) && (p[l[r]] = !(u[l[r]] = s));
                    if (e) {
                        if (v || f) {
                            if (v) {
                                for (o = [], r = p.length; r--; ) (s = p[r]) && o.push((u[r] = s));
                                v(null, (p = []), o, i);
                            }
                            for (r = p.length; r--; ) (s = p[r]) && -1 < (o = v ? I(e, s) : a[r]) && (e[o] = !(t[o] = s));
                        }
                    } else (p = Se(p === t ? p.splice(c, p.length) : p)), v ? v(null, t, p, i) : N.apply(t, p);
                })
            );
        }
        function ke(e) {
            for (
                var o,
                    t,
                    n,
                    i = e.length,
                    r = w.relative[e[0].type],
                    s = r || w.relative[" "],
                    a = r ? 1 : 0,
                    l = we(
                        function (e) {
                            return e === o;
                        },
                        s,
                        !0
                    ),
                    c = we(
                        function (e) {
                            return -1 < I(o, e);
                        },
                        s,
                        !0
                    ),
                    d = [
                        function (e, t, n) {
                            var i = (!r && (n || t !== x)) || ((o = t).nodeType ? l(e, t, n) : c(e, t, n));
                            return (o = null), i;
                        },
                    ];
                a < i;
                a++
            )
                if ((t = w.relative[e[a].type])) d = [we(xe(d), t)];
                else {
                    if ((t = w.filter[e[a].type].apply(null, e[a].matches))[C]) {
                        for (n = ++a; n < i && !w.relative[e[n].type]; n++);
                        return Te(1 < a && xe(d), 1 < a && be(e.slice(0, a - 1).concat({ value: " " === e[a - 2].type ? "*" : "" })).replace(F, "$1"), t, a < n && ke(e.slice(a, n)), n < i && ke((e = e.slice(n))), n < i && be(e));
                    }
                    d.push(t);
                }
            return xe(d);
        }
        return (
            (ye.prototype = w.filters = w.pseudos),
            (w.setFilters = new ye()),
            (h = ae.tokenize = function (e, t) {
                var n,
                    i,
                    o,
                    r,
                    s,
                    a,
                    l,
                    c = b[e + " "];
                if (c) return t ? 0 : c.slice(0);
                for (s = e, a = [], l = w.preFilter; s; ) {
                    for (r in ((n && !(i = B.exec(s))) || (i && (s = s.slice(i[0].length) || s), a.push((o = []))),
                    (n = !1),
                    (i = z.exec(s)) && ((n = i.shift()), o.push({ value: n, type: i[0].replace(F, " ") }), (s = s.slice(n.length))),
                    w.filter))
                        !(i = Q[r].exec(s)) || (l[r] && !(i = l[r](i))) || ((n = i.shift()), o.push({ value: n, type: r, matches: i }), (s = s.slice(n.length)));
                    if (!n) break;
                }
                return t ? s.length : s ? ae.error(e) : b(e, a).slice(0);
            }),
            (u = ae.compile = function (e, t) {
                var n,
                    m,
                    v,
                    y,
                    b,
                    i,
                    o = [],
                    r = [],
                    s = _[e + " "];
                if (!s) {
                    for (t || (t = h(e)), n = t.length; n--; ) (s = ke(t[n]))[C] ? o.push(s) : r.push(s);
                    (s = _(
                        e,
                        ((m = r),
                        (y = 0 < (v = o).length),
                        (b = 0 < m.length),
                        (i = function (e, t, n, i, o) {
                            var r,
                                s,
                                a,
                                l = 0,
                                c = "0",
                                d = e && [],
                                u = [],
                                p = x,
                                f = e || (b && w.find.TAG("*", o)),
                                h = (E += null == p ? 1 : Math.random() || 0.1),
                                g = f.length;
                            for (o && (x = t === T || t || o); c !== g && null != (r = f[c]); c++) {
                                if (b && r) {
                                    for (s = 0, t || r.ownerDocument === T || (S(r), (n = !k)); (a = m[s++]); )
                                        if (a(r, t || T, n)) {
                                            i.push(r);
                                            break;
                                        }
                                    o && (E = h);
                                }
                                y && ((r = !a && r) && l--, e && d.push(r));
                            }
                            if (((l += c), y && c !== l)) {
                                for (s = 0; (a = v[s++]); ) a(d, u, t, n);
                                if (e) {
                                    if (0 < l) for (; c--; ) d[c] || u[c] || (u[c] = D.call(i));
                                    u = Se(u);
                                }
                                N.apply(i, u), o && !e && 0 < u.length && 1 < l + v.length && ae.uniqueSort(i);
                            }
                            return o && ((E = h), (x = p)), d;
                        }),
                        y ? ce(i) : i)
                    )).selector = e;
                }
                return s;
            }),
            (g = ae.select = function (e, t, n, i) {
                var o,
                    r,
                    s,
                    a,
                    l,
                    c = "function" == typeof e && e,
                    d = !i && h((e = c.selector || e));
                if (((n = n || []), 1 === d.length)) {
                    if (2 < (r = d[0] = d[0].slice(0)).length && "ID" === (s = r[0]).type && 9 === t.nodeType && k && w.relative[r[1].type]) {
                        if (!(t = (w.find.ID(s.matches[0].replace(te, ne), t) || [])[0])) return n;
                        c && (t = t.parentNode), (e = e.slice(r.shift().value.length));
                    }
                    for (o = Q.needsContext.test(e) ? 0 : r.length; o-- && ((s = r[o]), !w.relative[(a = s.type)]); )
                        if ((l = w.find[a]) && (i = l(s.matches[0].replace(te, ne), (ee.test(r[0].type) && ve(t.parentNode)) || t))) {
                            if ((r.splice(o, 1), !(e = i.length && be(r)))) return N.apply(n, i), n;
                            break;
                        }
                }
                return (c || u(e, d))(i, t, !k, n, !t || (ee.test(e) && ve(t.parentNode)) || t), n;
            }),
            (f.sortStable = C.split("").sort(O).join("") === C),
            (f.detectDuplicates = !!c),
            S(),
            (f.sortDetached = de(function (e) {
                return 1 & e.compareDocumentPosition(T.createElement("fieldset"));
            })),
            de(function (e) {
                return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
            }) ||
                ue("type|href|height|width", function (e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                }),
            (f.attributes &&
                de(function (e) {
                    return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                })) ||
                ue("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                }),
            de(function (e) {
                return null == e.getAttribute("disabled");
            }) ||
                ue(M, function (e, t, n) {
                    var i;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
                }),
            ae
        );
    })(T);
    (C.find = h), (C.expr = h.selectors), (C.expr[":"] = C.expr.pseudos), (C.uniqueSort = C.unique = h.uniqueSort), (C.text = h.getText), (C.isXMLDoc = h.isXML), (C.contains = h.contains), (C.escapeSelector = h.escape);
    var S = function (e, t, n) {
            for (var i = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                if (1 === e.nodeType) {
                    if (o && C(e).is(n)) break;
                    i.push(e);
                }
            return i;
        },
        E = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
        },
        _ = C.expr.match.needsContext;
    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var O = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function $(e, n, i) {
        return y(n)
            ? C.grep(e, function (e, t) {
                  return !!n.call(e, t, e) !== i;
              })
            : n.nodeType
            ? C.grep(e, function (e) {
                  return (e === n) !== i;
              })
            : "string" != typeof n
            ? C.grep(e, function (e) {
                  return -1 < o.call(n, e) !== i;
              })
            : C.filter(n, e, i);
    }
    (C.filter = function (e, t, n) {
        var i = t[0];
        return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === i.nodeType
                ? C.find.matchesSelector(i, e)
                    ? [i]
                    : []
                : C.find.matches(
                      e,
                      C.grep(t, function (e) {
                          return 1 === e.nodeType;
                      })
                  )
        );
    }),
        C.fn.extend({
            find: function (e) {
                var t,
                    n,
                    i = this.length,
                    o = this;
                if ("string" != typeof e)
                    return this.pushStack(
                        C(e).filter(function () {
                            for (t = 0; t < i; t++) if (C.contains(o[t], this)) return !0;
                        })
                    );
                for (n = this.pushStack([]), t = 0; t < i; t++) C.find(e, o[t], n);
                return 1 < i ? C.uniqueSort(n) : n;
            },
            filter: function (e) {
                return this.pushStack($(this, e || [], !1));
            },
            not: function (e) {
                return this.pushStack($(this, e || [], !0));
            },
            is: function (e) {
                return !!$(this, "string" == typeof e && _.test(e) ? C(e) : e || [], !1).length;
            },
        });
    var D,
        j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((C.fn.init = function (e, t, n) {
        var i, o;
        if (!e) return this;
        if (((n = n || D), "string" != typeof e)) return e.nodeType ? ((this[0] = e), (this.length = 1), this) : y(e) ? (void 0 !== n.ready ? n.ready(e) : e(C)) : C.makeArray(e, this);
        if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : j.exec(e)) || (!i[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (i[1]) {
            if (((t = t instanceof C ? t[0] : t), C.merge(this, C.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : k, !0)), O.test(i[1]) && C.isPlainObject(t))) for (i in t) y(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this;
        }
        return (o = k.getElementById(i[2])) && ((this[0] = o), (this.length = 1)), this;
    }).prototype = C.fn),
        (D = C(k));
    var N = /^(?:parents|prev(?:Until|All))/,
        P = { children: !0, contents: !0, next: !0, prev: !0 };
    function I(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
    }
    C.fn.extend({
        has: function (e) {
            var t = C(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (C.contains(this, t[e])) return !0;
            });
        },
        closest: function (e, t) {
            var n,
                i = 0,
                o = this.length,
                r = [],
                s = "string" != typeof e && C(e);
            if (!_.test(e))
                for (; i < o; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                            r.push(n);
                            break;
                        }
            return this.pushStack(1 < r.length ? C.uniqueSort(r) : r);
        },
        index: function (e) {
            return e ? ("string" == typeof e ? o.call(C(e), this[0]) : o.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function (e, t) {
            return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))));
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        },
    }),
        C.each(
            {
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                    return S(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                    return S(e, "parentNode", n);
                },
                next: function (e) {
                    return I(e, "nextSibling");
                },
                prev: function (e) {
                    return I(e, "previousSibling");
                },
                nextAll: function (e) {
                    return S(e, "nextSibling");
                },
                prevAll: function (e) {
                    return S(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                    return S(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                    return S(e, "previousSibling", n);
                },
                siblings: function (e) {
                    return E((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                    return E(e.firstChild);
                },
                contents: function (e) {
                    return void 0 !== e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e), C.merge([], e.childNodes));
                },
            },
            function (i, o) {
                C.fn[i] = function (e, t) {
                    var n = C.map(this, o, e);
                    return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = C.filter(t, n)), 1 < this.length && (P[i] || C.uniqueSort(n), N.test(i) && n.reverse()), this.pushStack(n);
                };
            }
        );
    var M = /[^\x20\t\r\n\f]+/g;
    function H(e) {
        return e;
    }
    function L(e) {
        throw e;
    }
    function q(e, t, n, i) {
        var o;
        try {
            e && y((o = e.promise)) ? o.call(e).done(t).fail(n) : e && y((o = e.then)) ? o.call(e, t, n) : t.apply(void 0, [e].slice(i));
        } catch (e) {
            n.apply(void 0, [e]);
        }
    }
    (C.Callbacks = function (i) {
        var e, n;
        i =
            "string" == typeof i
                ? ((e = i),
                  (n = {}),
                  C.each(e.match(M) || [], function (e, t) {
                      n[t] = !0;
                  }),
                  n)
                : C.extend({}, i);
        var o,
            t,
            r,
            s,
            a = [],
            l = [],
            c = -1,
            d = function () {
                for (s = s || i.once, r = o = !0; l.length; c = -1) for (t = l.shift(); ++c < a.length; ) !1 === a[c].apply(t[0], t[1]) && i.stopOnFalse && ((c = a.length), (t = !1));
                i.memory || (t = !1), (o = !1), s && (a = t ? [] : "");
            },
            u = {
                add: function () {
                    return (
                        a &&
                            (t && !o && ((c = a.length - 1), l.push(t)),
                            (function n(e) {
                                C.each(e, function (e, t) {
                                    y(t) ? (i.unique && u.has(t)) || a.push(t) : t && t.length && "string" !== x(t) && n(t);
                                });
                            })(arguments),
                            t && !o && d()),
                        this
                    );
                },
                remove: function () {
                    return (
                        C.each(arguments, function (e, t) {
                            for (var n; -1 < (n = C.inArray(t, a, n)); ) a.splice(n, 1), n <= c && c--;
                        }),
                        this
                    );
                },
                has: function (e) {
                    return e ? -1 < C.inArray(e, a) : 0 < a.length;
                },
                empty: function () {
                    return a && (a = []), this;
                },
                disable: function () {
                    return (s = l = []), (a = t = ""), this;
                },
                disabled: function () {
                    return !a;
                },
                lock: function () {
                    return (s = l = []), t || o || (a = t = ""), this;
                },
                locked: function () {
                    return !!s;
                },
                fireWith: function (e, t) {
                    return s || ((t = [e, (t = t || []).slice ? t.slice() : t]), l.push(t), o || d()), this;
                },
                fire: function () {
                    return u.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!r;
                },
            };
        return u;
    }),
        C.extend({
            Deferred: function (e) {
                var r = [
                        ["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
                        ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"],
                    ],
                    o = "pending",
                    s = {
                        state: function () {
                            return o;
                        },
                        always: function () {
                            return a.done(arguments).fail(arguments), this;
                        },
                        catch: function (e) {
                            return s.then(null, e);
                        },
                        pipe: function () {
                            var o = arguments;
                            return C.Deferred(function (i) {
                                C.each(r, function (e, t) {
                                    var n = y(o[t[4]]) && o[t[4]];
                                    a[t[1]](function () {
                                        var e = n && n.apply(this, arguments);
                                        e && y(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments);
                                    });
                                }),
                                    (o = null);
                            }).promise();
                        },
                        then: function (t, n, i) {
                            var l = 0;
                            function c(o, r, s, a) {
                                return function () {
                                    var n = this,
                                        i = arguments,
                                        e = function () {
                                            var e, t;
                                            if (!(o < l)) {
                                                if ((e = s.apply(n, i)) === r.promise()) throw new TypeError("Thenable self-resolution");
                                                (t = e && ("object" == typeof e || "function" == typeof e) && e.then),
                                                    y(t)
                                                        ? a
                                                            ? t.call(e, c(l, r, H, a), c(l, r, L, a))
                                                            : (l++, t.call(e, c(l, r, H, a), c(l, r, L, a), c(l, r, H, r.notifyWith)))
                                                        : (s !== H && ((n = void 0), (i = [e])), (a || r.resolveWith)(n, i));
                                            }
                                        },
                                        t = a
                                            ? e
                                            : function () {
                                                  try {
                                                      e();
                                                  } catch (e) {
                                                      C.Deferred.exceptionHook && C.Deferred.exceptionHook(e, t.stackTrace), l <= o + 1 && (s !== L && ((n = void 0), (i = [e])), r.rejectWith(n, i));
                                                  }
                                              };
                                    o ? t() : (C.Deferred.getStackHook && (t.stackTrace = C.Deferred.getStackHook()), T.setTimeout(t));
                                };
                            }
                            return C.Deferred(function (e) {
                                r[0][3].add(c(0, e, y(i) ? i : H, e.notifyWith)), r[1][3].add(c(0, e, y(t) ? t : H)), r[2][3].add(c(0, e, y(n) ? n : L));
                            }).promise();
                        },
                        promise: function (e) {
                            return null != e ? C.extend(e, s) : s;
                        },
                    },
                    a = {};
                return (
                    C.each(r, function (e, t) {
                        var n = t[2],
                            i = t[5];
                        (s[t[1]] = n.add),
                            i &&
                                n.add(
                                    function () {
                                        o = i;
                                    },
                                    r[3 - e][2].disable,
                                    r[3 - e][3].disable,
                                    r[0][2].lock,
                                    r[0][3].lock
                                ),
                            n.add(t[3].fire),
                            (a[t[0]] = function () {
                                return a[t[0] + "With"](this === a ? void 0 : this, arguments), this;
                            }),
                            (a[t[0] + "With"] = n.fireWith);
                    }),
                    s.promise(a),
                    e && e.call(a, a),
                    a
                );
            },
            when: function (e) {
                var n = arguments.length,
                    t = n,
                    i = Array(t),
                    o = a.call(arguments),
                    r = C.Deferred(),
                    s = function (t) {
                        return function (e) {
                            (i[t] = this), (o[t] = 1 < arguments.length ? a.call(arguments) : e), --n || r.resolveWith(i, o);
                        };
                    };
                if (n <= 1 && (q(e, r.done(s(t)).resolve, r.reject, !n), "pending" === r.state() || y(o[t] && o[t].then))) return r.then();
                for (; t--; ) q(o[t], s(t), r.reject);
                return r.promise();
            },
        });
    var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (C.Deferred.exceptionHook = function (e, t) {
        T.console && T.console.warn && e && R.test(e.name) && T.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
    }),
        (C.readyException = function (e) {
            T.setTimeout(function () {
                throw e;
            });
        });
    var W = C.Deferred();
    function F() {
        k.removeEventListener("DOMContentLoaded", F), T.removeEventListener("load", F), C.ready();
    }
    (C.fn.ready = function (e) {
        return (
            W.then(e).catch(function (e) {
                C.readyException(e);
            }),
            this
        );
    }),
        C.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --C.readyWait : C.isReady) || ((C.isReady = !0) !== e && 0 < --C.readyWait) || W.resolveWith(k, [C]);
            },
        }),
        (C.ready.then = W.then),
        "complete" === k.readyState || ("loading" !== k.readyState && !k.documentElement.doScroll) ? T.setTimeout(C.ready) : (k.addEventListener("DOMContentLoaded", F), T.addEventListener("load", F));
    var B = function (e, t, n, i, o, r, s) {
            var a = 0,
                l = e.length,
                c = null == n;
            if ("object" === x(n)) for (a in ((o = !0), n)) B(e, t, a, n[a], !0, r, s);
            else if (
                void 0 !== i &&
                ((o = !0),
                y(i) || (s = !0),
                c &&
                    (t = s
                        ? (t.call(e, i), null)
                        : ((c = t),
                          function (e, t, n) {
                              return c.call(C(e), n);
                          })),
                t)
            )
                for (; a < l; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
            return o ? e : c ? t.call(e) : l ? t(e[0], n) : r;
        },
        z = /^-ms-/,
        U = /-([a-z])/g;
    function X(e, t) {
        return t.toUpperCase();
    }
    function G(e) {
        return e.replace(z, "ms-").replace(U, X);
    }
    var Q = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    function K() {
        this.expando = C.expando + K.uid++;
    }
    (K.uid = 1),
        (K.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return t || ((t = {}), Q(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
            },
            set: function (e, t, n) {
                var i,
                    o = this.cache(e);
                if ("string" == typeof t) o[G(t)] = n;
                else for (i in t) o[G(i)] = t[i];
                return o;
            },
            get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][G(t)];
            },
            access: function (e, t, n) {
                return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
                var n,
                    i = e[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(G) : (t = G(t)) in i ? [t] : t.match(M) || []).length;
                        for (; n--; ) delete i[t[n]];
                    }
                    (void 0 === t || C.isEmptyObject(i)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                }
            },
            hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !C.isEmptyObject(t);
            },
        });
    var V = new K(),
        Y = new K(),
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Z = /[A-Z]/g;
    function ee(e, t, n) {
        var i, o;
        if (void 0 === n && 1 === e.nodeType)
            if (((i = "data-" + t.replace(Z, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(i)))) {
                try {
                    n = "true" === (o = n) || ("false" !== o && ("null" === o ? null : o === +o + "" ? +o : J.test(o) ? JSON.parse(o) : o));
                } catch (e) {}
                Y.set(e, t, n);
            } else n = void 0;
        return n;
    }
    C.extend({
        hasData: function (e) {
            return Y.hasData(e) || V.hasData(e);
        },
        data: function (e, t, n) {
            return Y.access(e, t, n);
        },
        removeData: function (e, t) {
            Y.remove(e, t);
        },
        _data: function (e, t, n) {
            return V.access(e, t, n);
        },
        _removeData: function (e, t) {
            V.remove(e, t);
        },
    }),
        C.fn.extend({
            data: function (n, e) {
                var t,
                    i,
                    o,
                    r = this[0],
                    s = r && r.attributes;
                if (void 0 !== n)
                    return "object" == typeof n
                        ? this.each(function () {
                              Y.set(this, n);
                          })
                        : B(
                              this,
                              function (e) {
                                  var t;
                                  if (r && void 0 === e) return void 0 !== (t = Y.get(r, n)) ? t : void 0 !== (t = ee(r, n)) ? t : void 0;
                                  this.each(function () {
                                      Y.set(this, n, e);
                                  });
                              },
                              null,
                              e,
                              1 < arguments.length,
                              null,
                              !0
                          );
                if (this.length && ((o = Y.get(r)), 1 === r.nodeType && !V.get(r, "hasDataAttrs"))) {
                    for (t = s.length; t--; ) s[t] && 0 === (i = s[t].name).indexOf("data-") && ((i = G(i.slice(5))), ee(r, i, o[i]));
                    V.set(r, "hasDataAttrs", !0);
                }
                return o;
            },
            removeData: function (e) {
                return this.each(function () {
                    Y.remove(this, e);
                });
            },
        }),
        C.extend({
            queue: function (e, t, n) {
                var i;
                if (e) return (t = (t || "fx") + "queue"), (i = V.get(e, t)), n && (!i || Array.isArray(n) ? (i = V.access(e, t, C.makeArray(n))) : i.push(n)), i || [];
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = C.queue(e, t),
                    i = n.length,
                    o = n.shift(),
                    r = C._queueHooks(e, t);
                "inprogress" === o && ((o = n.shift()), i--),
                    o &&
                        ("fx" === t && n.unshift("inprogress"),
                        delete r.stop,
                        o.call(
                            e,
                            function () {
                                C.dequeue(e, t);
                            },
                            r
                        )),
                    !i && r && r.empty.fire();
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                    V.get(e, n) ||
                    V.access(e, n, {
                        empty: C.Callbacks("once memory").add(function () {
                            V.remove(e, [t + "queue", n]);
                        }),
                    })
                );
            },
        }),
        C.fn.extend({
            queue: function (t, n) {
                var e = 2;
                return (
                    "string" != typeof t && ((n = t), (t = "fx"), e--),
                    arguments.length < e
                        ? C.queue(this[0], t)
                        : void 0 === n
                        ? this
                        : this.each(function () {
                              var e = C.queue(this, t, n);
                              C._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t);
                          })
                );
            },
            dequeue: function (e) {
                return this.each(function () {
                    C.dequeue(this, e);
                });
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
                var n,
                    i = 1,
                    o = C.Deferred(),
                    r = this,
                    s = this.length,
                    a = function () {
                        --i || o.resolveWith(r, [r]);
                    };
                for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; s--; ) (n = V.get(r[s], e + "queueHooks")) && n.empty && (i++, n.empty.add(a));
                return a(), o.promise(t);
            },
        });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
        ie = ["Top", "Right", "Bottom", "Left"],
        oe = k.documentElement,
        re = function (e) {
            return C.contains(e.ownerDocument, e);
        },
        se = { composed: !0 };
    oe.getRootNode &&
        (re = function (e) {
            return C.contains(e.ownerDocument, e) || e.getRootNode(se) === e.ownerDocument;
        });
    var ae = function (e, t) {
            return "none" === (e = t || e).style.display || ("" === e.style.display && re(e) && "none" === C.css(e, "display"));
        },
        le = function (e, t, n, i) {
            var o,
                r,
                s = {};
            for (r in t) (s[r] = e.style[r]), (e.style[r] = t[r]);
            for (r in ((o = n.apply(e, i || [])), t)) e.style[r] = s[r];
            return o;
        };
    function ce(e, t, n, i) {
        var o,
            r,
            s = 20,
            a = i
                ? function () {
                      return i.cur();
                  }
                : function () {
                      return C.css(e, t, "");
                  },
            l = a(),
            c = (n && n[3]) || (C.cssNumber[t] ? "" : "px"),
            d = e.nodeType && (C.cssNumber[t] || ("px" !== c && +l)) && ne.exec(C.css(e, t));
        if (d && d[3] !== c) {
            for (l /= 2, c = c || d[3], d = +l || 1; s--; ) C.style(e, t, d + c), (1 - r) * (1 - (r = a() / l || 0.5)) <= 0 && (s = 0), (d /= r);
            (d *= 2), C.style(e, t, d + c), (n = n || []);
        }
        return n && ((d = +d || +l || 0), (o = n[1] ? d + (n[1] + 1) * n[2] : +n[2]), i && ((i.unit = c), (i.start = d), (i.end = o))), o;
    }
    var de = {};
    function ue(e, t) {
        for (var n, i, o, r, s, a, l, c = [], d = 0, u = e.length; d < u; d++)
            (i = e[d]).style &&
                ((n = i.style.display),
                t
                    ? ("none" === n && ((c[d] = V.get(i, "display") || null), c[d] || (i.style.display = "")),
                      "" === i.style.display &&
                          ae(i) &&
                          (c[d] =
                              ((l = s = r = void 0),
                              (s = (o = i).ownerDocument),
                              (a = o.nodeName),
                              (l = de[a]) || ((r = s.body.appendChild(s.createElement(a))), (l = C.css(r, "display")), r.parentNode.removeChild(r), "none" === l && (l = "block"), (de[a] = l)))))
                    : "none" !== n && ((c[d] = "none"), V.set(i, "display", n)));
        for (d = 0; d < u; d++) null != c[d] && (e[d].style.display = c[d]);
        return e;
    }
    C.fn.extend({
        show: function () {
            return ue(this, !0);
        },
        hide: function () {
            return ue(this);
        },
        toggle: function (e) {
            return "boolean" == typeof e
                ? e
                    ? this.show()
                    : this.hide()
                : this.each(function () {
                      ae(this) ? C(this).show() : C(this).hide();
                  });
        },
    });
    var pe = /^(?:checkbox|radio)$/i,
        fe = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i,
        ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
        };
    function me(e, t) {
        var n;
        return (n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && A(e, t)) ? C.merge([e], n) : n;
    }
    function ve(e, t) {
        for (var n = 0, i = e.length; n < i; n++) V.set(e[n], "globalEval", !t || V.get(t[n], "globalEval"));
    }
    (ge.optgroup = ge.option), (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead), (ge.th = ge.td);
    var ye,
        be,
        we = /<|&#?\w+;/;
    function xe(e, t, n, i, o) {
        for (var r, s, a, l, c, d, u = t.createDocumentFragment(), p = [], f = 0, h = e.length; f < h; f++)
            if ((r = e[f]) || 0 === r)
                if ("object" === x(r)) C.merge(p, r.nodeType ? [r] : r);
                else if (we.test(r)) {
                    for (s = s || u.appendChild(t.createElement("div")), a = (fe.exec(r) || ["", ""])[1].toLowerCase(), l = ge[a] || ge._default, s.innerHTML = l[1] + C.htmlPrefilter(r) + l[2], d = l[0]; d--; ) s = s.lastChild;
                    C.merge(p, s.childNodes), ((s = u.firstChild).textContent = "");
                } else p.push(t.createTextNode(r));
        for (u.textContent = "", f = 0; (r = p[f++]); )
            if (i && -1 < C.inArray(r, i)) o && o.push(r);
            else if (((c = re(r)), (s = me(u.appendChild(r), "script")), c && ve(s), n)) for (d = 0; (r = s[d++]); ) he.test(r.type || "") && n.push(r);
        return u;
    }
    (ye = k.createDocumentFragment().appendChild(k.createElement("div"))),
        (be = k.createElement("input")).setAttribute("type", "radio"),
        be.setAttribute("checked", "checked"),
        be.setAttribute("name", "t"),
        ye.appendChild(be),
        (v.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (ye.innerHTML = "<textarea>x</textarea>"),
        (v.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue);
    var Se = /^key/,
        Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ke = /^([^.]*)(?:\.(.+)|)/;
    function Ce() {
        return !0;
    }
    function Ee() {
        return !1;
    }
    function _e(e, t) {
        return (
            (e ===
                (function () {
                    try {
                        return k.activeElement;
                    } catch (e) {}
                })()) ==
            ("focus" === t)
        );
    }
    function Ae(e, t, n, i, o, r) {
        var s, a;
        if ("object" == typeof t) {
            for (a in ("string" != typeof n && ((i = i || n), (n = void 0)), t)) Ae(e, a, n, i, t[a], r);
            return e;
        }
        if ((null == i && null == o ? ((o = n), (i = n = void 0)) : null == o && ("string" == typeof n ? ((o = i), (i = void 0)) : ((o = i), (i = n), (n = void 0))), !1 === o)) o = Ee;
        else if (!o) return e;
        return (
            1 === r &&
                ((s = o),
                ((o = function (e) {
                    return C().off(e), s.apply(this, arguments);
                }).guid = s.guid || (s.guid = C.guid++))),
            e.each(function () {
                C.event.add(this, t, o, i, n);
            })
        );
    }
    function Oe(e, o, r) {
        r
            ? (V.set(e, o, !1),
              C.event.add(e, o, {
                  namespace: !1,
                  handler: function (e) {
                      var t,
                          n,
                          i = V.get(this, o);
                      if (1 & e.isTrigger && this[o]) {
                          if (i.length) (C.event.special[o] || {}).delegateType && e.stopPropagation();
                          else if (((i = a.call(arguments)), V.set(this, o, i), (t = r(this, o)), this[o](), i !== (n = V.get(this, o)) || t ? V.set(this, o, !1) : (n = {}), i !== n))
                              return e.stopImmediatePropagation(), e.preventDefault(), n.value;
                      } else i.length && (V.set(this, o, { value: C.event.trigger(C.extend(i[0], C.Event.prototype), i.slice(1), this) }), e.stopImmediatePropagation());
                  },
              }))
            : void 0 === V.get(e, o) && C.event.add(e, o, Ce);
    }
    (C.event = {
        global: {},
        add: function (t, e, n, i, o) {
            var r,
                s,
                a,
                l,
                c,
                d,
                u,
                p,
                f,
                h,
                g,
                m = V.get(t);
            if (m)
                for (
                    n.handler && ((n = (r = n).handler), (o = r.selector)),
                        o && C.find.matchesSelector(oe, o),
                        n.guid || (n.guid = C.guid++),
                        (l = m.events) || (l = m.events = {}),
                        (s = m.handle) ||
                            (s = m.handle = function (e) {
                                return void 0 !== C && C.event.triggered !== e.type ? C.event.dispatch.apply(t, arguments) : void 0;
                            }),
                        c = (e = (e || "").match(M) || [""]).length;
                    c--;

                )
                    (f = g = (a = ke.exec(e[c]) || [])[1]),
                        (h = (a[2] || "").split(".").sort()),
                        f &&
                            ((u = C.event.special[f] || {}),
                            (f = (o ? u.delegateType : u.bindType) || f),
                            (u = C.event.special[f] || {}),
                            (d = C.extend({ type: f, origType: g, data: i, handler: n, guid: n.guid, selector: o, needsContext: o && C.expr.match.needsContext.test(o), namespace: h.join(".") }, r)),
                            (p = l[f]) || (((p = l[f] = []).delegateCount = 0), (u.setup && !1 !== u.setup.call(t, i, h, s)) || (t.addEventListener && t.addEventListener(f, s))),
                            u.add && (u.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)),
                            o ? p.splice(p.delegateCount++, 0, d) : p.push(d),
                            (C.event.global[f] = !0));
        },
        remove: function (e, t, n, i, o) {
            var r,
                s,
                a,
                l,
                c,
                d,
                u,
                p,
                f,
                h,
                g,
                m = V.hasData(e) && V.get(e);
            if (m && (l = m.events)) {
                for (c = (t = (t || "").match(M) || [""]).length; c--; )
                    if (((f = g = (a = ke.exec(t[c]) || [])[1]), (h = (a[2] || "").split(".").sort()), f)) {
                        for (u = C.event.special[f] || {}, p = l[(f = (i ? u.delegateType : u.bindType) || f)] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = p.length; r--; )
                            (d = p[r]),
                                (!o && g !== d.origType) ||
                                    (n && n.guid !== d.guid) ||
                                    (a && !a.test(d.namespace)) ||
                                    (i && i !== d.selector && ("**" !== i || !d.selector)) ||
                                    (p.splice(r, 1), d.selector && p.delegateCount--, u.remove && u.remove.call(e, d));
                        s && !p.length && ((u.teardown && !1 !== u.teardown.call(e, h, m.handle)) || C.removeEvent(e, f, m.handle), delete l[f]);
                    } else for (f in l) C.event.remove(e, f + t[c], n, i, !0);
                C.isEmptyObject(l) && V.remove(e, "handle events");
            }
        },
        dispatch: function (e) {
            var t,
                n,
                i,
                o,
                r,
                s,
                a = C.event.fix(e),
                l = new Array(arguments.length),
                c = (V.get(this, "events") || {})[a.type] || [],
                d = C.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (((a.delegateTarget = this), !d.preDispatch || !1 !== d.preDispatch.call(this, a))) {
                for (s = C.event.handlers.call(this, a, c), t = 0; (o = s[t++]) && !a.isPropagationStopped(); )
                    for (a.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !a.isImmediatePropagationStopped(); )
                        (a.rnamespace && !1 !== r.namespace && !a.rnamespace.test(r.namespace)) ||
                            ((a.handleObj = r), (a.data = r.data), void 0 !== (i = ((C.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
                return d.postDispatch && d.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function (e, t) {
            var n,
                i,
                o,
                r,
                s,
                a = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (r = [], s = {}, n = 0; n < l; n++) void 0 === s[(o = (i = t[n]).selector + " ")] && (s[o] = i.needsContext ? -1 < C(o, this).index(c) : C.find(o, this, null, [c]).length), s[o] && r.push(i);
                        r.length && a.push({ elem: c, handlers: r });
                    }
            return (c = this), l < t.length && a.push({ elem: c, handlers: t.slice(l) }), a;
        },
        addProp: function (t, e) {
            Object.defineProperty(C.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: y(e)
                    ? function () {
                          if (this.originalEvent) return e(this.originalEvent);
                      }
                    : function () {
                          if (this.originalEvent) return this.originalEvent[t];
                      },
                set: function (e) {
                    Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e });
                },
            });
        },
        fix: function (e) {
            return e[C.expando] ? e : new C.Event(e);
        },
        special: {
            load: { noBubble: !0 },
            click: {
                setup: function (e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Oe(t, "click", Ce), !1;
                },
                trigger: function (e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Oe(t, "click"), !0;
                },
                _default: function (e) {
                    var t = e.target;
                    return (pe.test(t.type) && t.click && A(t, "input") && V.get(t, "click")) || A(t, "a");
                },
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                },
            },
        },
    }),
        (C.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
        }),
        (C.Event = function (e, t) {
            if (!(this instanceof C.Event)) return new C.Event(e, t);
            e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? Ce : Ee),
                  (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && C.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[C.expando] = !0);
        }),
        (C.Event.prototype = {
            constructor: C.Event,
            isDefaultPrevented: Ee,
            isPropagationStopped: Ee,
            isImmediatePropagationStopped: Ee,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = Ce), e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = Ce), e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = Ce), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
            },
        }),
        C.each(
            {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function (e) {
                    var t = e.button;
                    return null == e.which && Se.test(e.type) ? (null != e.charCode ? e.charCode : e.keyCode) : !e.which && void 0 !== t && Te.test(e.type) ? (1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0) : e.which;
                },
            },
            C.event.addProp
        ),
        C.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            C.event.special[e] = {
                setup: function () {
                    return Oe(this, e, _e), !1;
                },
                trigger: function () {
                    return Oe(this, e), !0;
                },
                delegateType: t,
            };
        }),
        C.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, o) {
            C.event.special[e] = {
                delegateType: o,
                bindType: o,
                handle: function (e) {
                    var t,
                        n = e.relatedTarget,
                        i = e.handleObj;
                    return (n && (n === this || C.contains(this, n))) || ((e.type = i.origType), (t = i.handler.apply(this, arguments)), (e.type = o)), t;
                },
            };
        }),
        C.fn.extend({
            on: function (e, t, n, i) {
                return Ae(this, e, t, n, i);
            },
            one: function (e, t, n, i) {
                return Ae(this, e, t, n, i, 1);
            },
            off: function (e, t, n) {
                var i, o;
                if (e && e.preventDefault && e.handleObj) return (i = e.handleObj), C(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" != typeof e)
                    return (
                        (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                        !1 === n && (n = Ee),
                        this.each(function () {
                            C.event.remove(this, e, n, t);
                        })
                    );
                for (o in e) this.off(o, t, e[o]);
                return this;
            },
        });
    var $e = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        De = /<script|<style|<link/i,
        je = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function Pe(e, t) {
        return (A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0]) || e;
    }
    function Ie(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function Me(e) {
        return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
    }
    function He(e, t) {
        var n, i, o, r, s, a, l, c;
        if (1 === t.nodeType) {
            if (V.hasData(e) && ((r = V.access(e)), (s = V.set(t, r)), (c = r.events))) for (o in (delete s.handle, (s.events = {}), c)) for (n = 0, i = c[o].length; n < i; n++) C.event.add(t, o, c[o][n]);
            Y.hasData(e) && ((a = Y.access(e)), (l = C.extend({}, a)), Y.set(t, l));
        }
    }
    function Le(n, i, o, r) {
        i = g.apply([], i);
        var e,
            t,
            s,
            a,
            l,
            c,
            d = 0,
            u = n.length,
            p = u - 1,
            f = i[0],
            h = y(f);
        if (h || (1 < u && "string" == typeof f && !v.checkClone && je.test(f)))
            return n.each(function (e) {
                var t = n.eq(e);
                h && (i[0] = f.call(this, e, t.html())), Le(t, i, o, r);
            });
        if (u && ((t = (e = xe(i, n[0].ownerDocument, !1, n, r)).firstChild), 1 === e.childNodes.length && (e = t), t || r)) {
            for (a = (s = C.map(me(e, "script"), Ie)).length; d < u; d++) (l = e), d !== p && ((l = C.clone(l, !0, !0)), a && C.merge(s, me(l, "script"))), o.call(n[d], l, d);
            if (a)
                for (c = s[s.length - 1].ownerDocument, C.map(s, Me), d = 0; d < a; d++)
                    (l = s[d]),
                        he.test(l.type || "") &&
                            !V.access(l, "globalEval") &&
                            C.contains(c, l) &&
                            (l.src && "module" !== (l.type || "").toLowerCase() ? C._evalUrl && !l.noModule && C._evalUrl(l.src, { nonce: l.nonce || l.getAttribute("nonce") }) : w(l.textContent.replace(Ne, ""), l, c));
        }
        return n;
    }
    function qe(e, t, n) {
        for (var i, o = t ? C.filter(t, e) : e, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || C.cleanData(me(i)), i.parentNode && (n && re(i) && ve(me(i, "script")), i.parentNode.removeChild(i));
        return e;
    }
    C.extend({
        htmlPrefilter: function (e) {
            return e.replace($e, "<$1></$2>");
        },
        clone: function (e, t, n) {
            var i,
                o,
                r,
                s,
                a,
                l,
                c,
                d = e.cloneNode(!0),
                u = re(e);
            if (!(v.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || C.isXMLDoc(e)))
                for (s = me(d), i = 0, o = (r = me(e)).length; i < o; i++)
                    (a = r[i]), "input" === (c = (l = s[i]).nodeName.toLowerCase()) && pe.test(a.type) ? (l.checked = a.checked) : ("input" !== c && "textarea" !== c) || (l.defaultValue = a.defaultValue);
            if (t)
                if (n) for (r = r || me(e), s = s || me(d), i = 0, o = r.length; i < o; i++) He(r[i], s[i]);
                else He(e, d);
            return 0 < (s = me(d, "script")).length && ve(s, !u && me(e, "script")), d;
        },
        cleanData: function (e) {
            for (var t, n, i, o = C.event.special, r = 0; void 0 !== (n = e[r]); r++)
                if (Q(n)) {
                    if ((t = n[V.expando])) {
                        if (t.events) for (i in t.events) o[i] ? C.event.remove(n, i) : C.removeEvent(n, i, t.handle);
                        n[V.expando] = void 0;
                    }
                    n[Y.expando] && (n[Y.expando] = void 0);
                }
        },
    }),
        C.fn.extend({
            detach: function (e) {
                return qe(this, e, !0);
            },
            remove: function (e) {
                return qe(this, e);
            },
            text: function (e) {
                return B(
                    this,
                    function (e) {
                        return void 0 === e
                            ? C.text(this)
                            : this.empty().each(function () {
                                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                              });
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function () {
                return Le(this, arguments, function (e) {
                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Pe(this, e).appendChild(e);
                });
            },
            prepend: function () {
                return Le(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = Pe(this, e);
                        t.insertBefore(e, t.firstChild);
                    }
                });
            },
            before: function () {
                return Le(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function () {
                return Le(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(me(e, !1)), (e.textContent = ""));
                return this;
            },
            clone: function (e, t) {
                return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                        return C.clone(this, e, t);
                    })
                );
            },
            html: function (e) {
                return B(
                    this,
                    function (e) {
                        var t = this[0] || {},
                            n = 0,
                            i = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !De.test(e) && !ge[(fe.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = C.htmlPrefilter(e);
                            try {
                                for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(me(t, !1)), (t.innerHTML = e));
                                t = 0;
                            } catch (e) {}
                        }
                        t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function () {
                var n = [];
                return Le(
                    this,
                    arguments,
                    function (e) {
                        var t = this.parentNode;
                        C.inArray(this, n) < 0 && (C.cleanData(me(this)), t && t.replaceChild(e, this));
                    },
                    n
                );
            },
        }),
        C.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, s) {
            C.fn[e] = function (e) {
                for (var t, n = [], i = C(e), o = i.length - 1, r = 0; r <= o; r++) (t = r === o ? this : this.clone(!0)), C(i[r])[s](t), l.apply(n, t.get());
                return this.pushStack(n);
            };
        });
    var Re = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
        We = function (e) {
            var t = e.ownerDocument.defaultView;
            return (t && t.opener) || (t = T), t.getComputedStyle(e);
        },
        Fe = new RegExp(ie.join("|"), "i");
    function Be(e, t, n) {
        var i,
            o,
            r,
            s,
            a = e.style;
        return (
            (n = n || We(e)) &&
                ("" !== (s = n.getPropertyValue(t) || n[t]) || re(e) || (s = C.style(e, t)),
                !v.pixelBoxStyles() && Re.test(s) && Fe.test(t) && ((i = a.width), (o = a.minWidth), (r = a.maxWidth), (a.minWidth = a.maxWidth = a.width = s), (s = n.width), (a.width = i), (a.minWidth = o), (a.maxWidth = r))),
            void 0 !== s ? s + "" : s
        );
    }
    function ze(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            },
        };
    }
    !(function () {
        function e() {
            if (l) {
                (a.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                    (l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                    oe.appendChild(a).appendChild(l);
                var e = T.getComputedStyle(l);
                (n = "1%" !== e.top),
                    (s = 12 === t(e.marginLeft)),
                    (l.style.right = "60%"),
                    (r = 36 === t(e.right)),
                    (i = 36 === t(e.width)),
                    (l.style.position = "absolute"),
                    (o = 12 === t(l.offsetWidth / 3)),
                    oe.removeChild(a),
                    (l = null);
            }
        }
        function t(e) {
            return Math.round(parseFloat(e));
        }
        var n,
            i,
            o,
            r,
            s,
            a = k.createElement("div"),
            l = k.createElement("div");
        l.style &&
            ((l.style.backgroundClip = "content-box"),
            (l.cloneNode(!0).style.backgroundClip = ""),
            (v.clearCloneStyle = "content-box" === l.style.backgroundClip),
            C.extend(v, {
                boxSizingReliable: function () {
                    return e(), i;
                },
                pixelBoxStyles: function () {
                    return e(), r;
                },
                pixelPosition: function () {
                    return e(), n;
                },
                reliableMarginLeft: function () {
                    return e(), s;
                },
                scrollboxSize: function () {
                    return e(), o;
                },
            }));
    })();
    var Ue = ["Webkit", "Moz", "ms"],
        Xe = k.createElement("div").style,
        Ge = {};
    function Qe(e) {
        return (
            C.cssProps[e] ||
            Ge[e] ||
            (e in Xe
                ? e
                : (Ge[e] =
                      (function (e) {
                          for (var t = e[0].toUpperCase() + e.slice(1), n = Ue.length; n--; ) if ((e = Ue[n] + t) in Xe) return e;
                      })(e) || e))
        );
    }
    var Ke = /^(none|table(?!-c[ea]).+)/,
        Ve = /^--/,
        Ye = { position: "absolute", visibility: "hidden", display: "block" },
        Je = { letterSpacing: "0", fontWeight: "400" };
    function Ze(e, t, n) {
        var i = ne.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
    }
    function et(e, t, n, i, o, r) {
        var s = "width" === t ? 1 : 0,
            a = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2)
            "margin" === n && (l += C.css(e, n + ie[s], !0, o)),
                i
                    ? ("content" === n && (l -= C.css(e, "padding" + ie[s], !0, o)), "margin" !== n && (l -= C.css(e, "border" + ie[s] + "Width", !0, o)))
                    : ((l += C.css(e, "padding" + ie[s], !0, o)), "padding" !== n ? (l += C.css(e, "border" + ie[s] + "Width", !0, o)) : (a += C.css(e, "border" + ie[s] + "Width", !0, o)));
        return !i && 0 <= r && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - 0.5)) || 0), l;
    }
    function tt(e, t, n) {
        var i = We(e),
            o = (!v.boxSizingReliable() || n) && "border-box" === C.css(e, "boxSizing", !1, i),
            r = o,
            s = Be(e, t, i),
            a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Re.test(s)) {
            if (!n) return s;
            s = "auto";
        }
        return (
            ((!v.boxSizingReliable() && o) || "auto" === s || (!parseFloat(s) && "inline" === C.css(e, "display", !1, i))) && e.getClientRects().length && ((o = "border-box" === C.css(e, "boxSizing", !1, i)), (r = a in e) && (s = e[a])),
            (s = parseFloat(s) || 0) + et(e, t, n || (o ? "border" : "content"), r, i, s) + "px"
        );
    }
    function nt(e, t, n, i, o) {
        return new nt.prototype.init(e, t, n, i, o);
    }
    C.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Be(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                },
            },
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
        },
        cssProps: {},
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o,
                    r,
                    s,
                    a = G(t),
                    l = Ve.test(t),
                    c = e.style;
                if ((l || (t = Qe(a)), (s = C.cssHooks[t] || C.cssHooks[a]), void 0 === n)) return s && "get" in s && void 0 !== (o = s.get(e, !1, i)) ? o : c[t];
                "string" == (r = typeof n) && (o = ne.exec(n)) && o[1] && ((n = ce(e, t, o)), (r = "number")),
                    null != n &&
                        n == n &&
                        ("number" !== r || l || (n += (o && o[3]) || (C.cssNumber[a] ? "" : "px")),
                        v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                        (s && "set" in s && void 0 === (n = s.set(e, n, i))) || (l ? c.setProperty(t, n) : (c[t] = n)));
            }
        },
        css: function (e, t, n, i) {
            var o,
                r,
                s,
                a = G(t);
            return (
                Ve.test(t) || (t = Qe(a)),
                (s = C.cssHooks[t] || C.cssHooks[a]) && "get" in s && (o = s.get(e, !0, n)),
                void 0 === o && (o = Be(e, t, i)),
                "normal" === o && t in Je && (o = Je[t]),
                "" === n || n ? ((r = parseFloat(o)), !0 === n || isFinite(r) ? r || 0 : o) : o
            );
        },
    }),
        C.each(["height", "width"], function (e, l) {
            C.cssHooks[l] = {
                get: function (e, t, n) {
                    if (t)
                        return !Ke.test(C.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                            ? tt(e, l, n)
                            : le(e, Ye, function () {
                                  return tt(e, l, n);
                              });
                },
                set: function (e, t, n) {
                    var i,
                        o = We(e),
                        r = !v.scrollboxSize() && "absolute" === o.position,
                        s = (r || n) && "border-box" === C.css(e, "boxSizing", !1, o),
                        a = n ? et(e, l, n, s, o) : 0;
                    return (
                        s && r && (a -= Math.ceil(e["offset" + l[0].toUpperCase() + l.slice(1)] - parseFloat(o[l]) - et(e, l, "border", !1, o) - 0.5)),
                        a && (i = ne.exec(t)) && "px" !== (i[3] || "px") && ((e.style[l] = t), (t = C.css(e, l))),
                        Ze(0, t, a)
                    );
                },
            };
        }),
        (C.cssHooks.marginLeft = ze(v.reliableMarginLeft, function (e, t) {
            if (t)
                return (
                    (parseFloat(Be(e, "marginLeft")) ||
                        e.getBoundingClientRect().left -
                            le(e, { marginLeft: 0 }, function () {
                                return e.getBoundingClientRect().left;
                            })) + "px"
                );
        })),
        C.each({ margin: "", padding: "", border: "Width" }, function (o, r) {
            (C.cssHooks[o + r] = {
                expand: function (e) {
                    for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[o + ie[t] + r] = i[t] || i[t - 2] || i[0];
                    return n;
                },
            }),
                "margin" !== o && (C.cssHooks[o + r].set = Ze);
        }),
        C.fn.extend({
            css: function (e, t) {
                return B(
                    this,
                    function (e, t, n) {
                        var i,
                            o,
                            r = {},
                            s = 0;
                        if (Array.isArray(t)) {
                            for (i = We(e), o = t.length; s < o; s++) r[t[s]] = C.css(e, t[s], !1, i);
                            return r;
                        }
                        return void 0 !== n ? C.style(e, t, n) : C.css(e, t);
                    },
                    e,
                    t,
                    1 < arguments.length
                );
            },
        }),
        (((C.Tween = nt).prototype = {
            constructor: nt,
            init: function (e, t, n, i, o, r) {
                (this.elem = e), (this.prop = n), (this.easing = o || C.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = i), (this.unit = r || (C.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
                var e = nt.propHooks[this.prop];
                return e && e.get ? e.get(this) : nt.propHooks._default.get(this);
            },
            run: function (e) {
                var t,
                    n = nt.propHooks[this.prop];
                return (
                    this.options.duration ? (this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : nt.propHooks._default.set(this),
                    this
                );
            },
        }).init.prototype = nt.prototype),
        ((nt.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
                },
                set: function (e) {
                    C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (!C.cssHooks[e.prop] && null == e.elem.style[Qe(e.prop)]) ? (e.elem[e.prop] = e.now) : C.style(e.elem, e.prop, e.now + e.unit);
                },
            },
        }).scrollTop = nt.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
        }),
        (C.easing = {
            linear: function (e) {
                return e;
            },
            swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (C.fx = nt.prototype.init),
        (C.fx.step = {});
    var it,
        ot,
        rt,
        st,
        at = /^(?:toggle|show|hide)$/,
        lt = /queueHooks$/;
    function ct() {
        ot && (!1 === k.hidden && T.requestAnimationFrame ? T.requestAnimationFrame(ct) : T.setTimeout(ct, C.fx.interval), C.fx.tick());
    }
    function dt() {
        return (
            T.setTimeout(function () {
                it = void 0;
            }),
            (it = Date.now())
        );
    }
    function ut(e, t) {
        var n,
            i = 0,
            o = { height: e };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) o["margin" + (n = ie[i])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e), o;
    }
    function pt(e, t, n) {
        for (var i, o = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), r = 0, s = o.length; r < s; r++) if ((i = o[r].call(n, t, e))) return i;
    }
    function ft(r, e, t) {
        var n,
            s,
            i = 0,
            o = ft.prefilters.length,
            a = C.Deferred().always(function () {
                delete l.elem;
            }),
            l = function () {
                if (s) return !1;
                for (var e = it || dt(), t = Math.max(0, c.startTime + c.duration - e), n = 1 - (t / c.duration || 0), i = 0, o = c.tweens.length; i < o; i++) c.tweens[i].run(n);
                return a.notifyWith(r, [c, n, t]), n < 1 && o ? t : (o || a.notifyWith(r, [c, 1, 0]), a.resolveWith(r, [c]), !1);
            },
            c = a.promise({
                elem: r,
                props: C.extend({}, e),
                opts: C.extend(!0, { specialEasing: {}, easing: C.easing._default }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: it || dt(),
                duration: t.duration,
                tweens: [],
                createTween: function (e, t) {
                    var n = C.Tween(r, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(n), n;
                },
                stop: function (e) {
                    var t = 0,
                        n = e ? c.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; t < n; t++) c.tweens[t].run(1);
                    return e ? (a.notifyWith(r, [c, 1, 0]), a.resolveWith(r, [c, e])) : a.rejectWith(r, [c, e]), this;
                },
            }),
            d = c.props;
        for (
            (function (e, t) {
                var n, i, o, r, s;
                for (n in e)
                    if (((o = t[(i = G(n))]), (r = e[n]), Array.isArray(r) && ((o = r[1]), (r = e[n] = r[0])), n !== i && ((e[i] = r), delete e[n]), (s = C.cssHooks[i]) && ("expand" in s)))
                        for (n in ((r = s.expand(r)), delete e[i], r)) (n in e) || ((e[n] = r[n]), (t[n] = o));
                    else t[i] = o;
            })(d, c.opts.specialEasing);
            i < o;
            i++
        )
            if ((n = ft.prefilters[i].call(c, r, d, c.opts))) return y(n.stop) && (C._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
        return (
            C.map(d, pt, c),
            y(c.opts.start) && c.opts.start.call(r, c),
            c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
            C.fx.timer(C.extend(l, { elem: r, anim: c, queue: c.opts.queue })),
            c
        );
    }
    (C.Animation = C.extend(ft, {
        tweeners: {
            "*": [
                function (e, t) {
                    var n = this.createTween(e, t);
                    return ce(n.elem, e, ne.exec(t), n), n;
                },
            ],
        },
        tweener: function (e, t) {
            for (var n, i = 0, o = (e = y(e) ? ((t = e), ["*"]) : e.match(M)).length; i < o; i++) (n = e[i]), (ft.tweeners[n] = ft.tweeners[n] || []), ft.tweeners[n].unshift(t);
        },
        prefilters: [
            function (e, t, n) {
                var i,
                    o,
                    r,
                    s,
                    a,
                    l,
                    c,
                    d,
                    u = "width" in t || "height" in t,
                    p = this,
                    f = {},
                    h = e.style,
                    g = e.nodeType && ae(e),
                    m = V.get(e, "fxshow");
                for (i in (n.queue ||
                    (null == (s = C._queueHooks(e, "fx")).unqueued &&
                        ((s.unqueued = 0),
                        (a = s.empty.fire),
                        (s.empty.fire = function () {
                            s.unqueued || a();
                        })),
                    s.unqueued++,
                    p.always(function () {
                        p.always(function () {
                            s.unqueued--, C.queue(e, "fx").length || s.empty.fire();
                        });
                    })),
                t))
                    if (((o = t[i]), at.test(o))) {
                        if ((delete t[i], (r = r || "toggle" === o), o === (g ? "hide" : "show"))) {
                            if ("show" !== o || !m || void 0 === m[i]) continue;
                            g = !0;
                        }
                        f[i] = (m && m[i]) || C.style(e, i);
                    }
                if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(f))
                    for (i in (u &&
                        1 === e.nodeType &&
                        ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                        null == (c = m && m.display) && (c = V.get(e, "display")),
                        "none" === (d = C.css(e, "display")) && (c ? (d = c) : (ue([e], !0), (c = e.style.display || c), (d = C.css(e, "display")), ue([e]))),
                        ("inline" === d || ("inline-block" === d && null != c)) &&
                            "none" === C.css(e, "float") &&
                            (l ||
                                (p.done(function () {
                                    h.display = c;
                                }),
                                null == c && ((d = h.display), (c = "none" === d ? "" : d))),
                            (h.display = "inline-block"))),
                    n.overflow &&
                        ((h.overflow = "hidden"),
                        p.always(function () {
                            (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
                        })),
                    (l = !1),
                    f))
                        l ||
                            (m ? "hidden" in m && (g = m.hidden) : (m = V.access(e, "fxshow", { display: c })),
                            r && (m.hidden = !g),
                            g && ue([e], !0),
                            p.done(function () {
                                for (i in (g || ue([e]), V.remove(e, "fxshow"), f)) C.style(e, i, f[i]);
                            })),
                            (l = pt(g ? m[i] : 0, i, p)),
                            i in m || ((m[i] = l.start), g && ((l.end = l.start), (l.start = 0)));
            },
        ],
        prefilter: function (e, t) {
            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
        },
    })),
        (C.speed = function (e, t, n) {
            var i = e && "object" == typeof e ? C.extend({}, e) : { complete: n || (!n && t) || (y(e) && e), duration: e, easing: (n && t) || (t && !y(t) && t) };
            return (
                C.fx.off ? (i.duration = 0) : "number" != typeof i.duration && (i.duration in C.fx.speeds ? (i.duration = C.fx.speeds[i.duration]) : (i.duration = C.fx.speeds._default)),
                (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                (i.old = i.complete),
                (i.complete = function () {
                    y(i.old) && i.old.call(this), i.queue && C.dequeue(this, i.queue);
                }),
                i
            );
        }),
        C.fn.extend({
            fadeTo: function (e, t, n, i) {
                return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i);
            },
            animate: function (t, e, n, i) {
                var o = C.isEmptyObject(t),
                    r = C.speed(e, n, i),
                    s = function () {
                        var e = ft(this, C.extend({}, t), r);
                        (o || V.get(this, "finish")) && e.stop(!0);
                    };
                return (s.finish = s), o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s);
            },
            stop: function (o, e, r) {
                var s = function (e) {
                    var t = e.stop;
                    delete e.stop, t(r);
                };
                return (
                    "string" != typeof o && ((r = e), (e = o), (o = void 0)),
                    e && !1 !== o && this.queue(o || "fx", []),
                    this.each(function () {
                        var e = !0,
                            t = null != o && o + "queueHooks",
                            n = C.timers,
                            i = V.get(this);
                        if (t) i[t] && i[t].stop && s(i[t]);
                        else for (t in i) i[t] && i[t].stop && lt.test(t) && s(i[t]);
                        for (t = n.length; t--; ) n[t].elem !== this || (null != o && n[t].queue !== o) || (n[t].anim.stop(r), (e = !1), n.splice(t, 1));
                        (!e && r) || C.dequeue(this, o);
                    })
                );
            },
            finish: function (s) {
                return (
                    !1 !== s && (s = s || "fx"),
                    this.each(function () {
                        var e,
                            t = V.get(this),
                            n = t[s + "queue"],
                            i = t[s + "queueHooks"],
                            o = C.timers,
                            r = n ? n.length : 0;
                        for (t.finish = !0, C.queue(this, s, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--; ) o[e].elem === this && o[e].queue === s && (o[e].anim.stop(!0), o.splice(e, 1));
                        for (e = 0; e < r; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete t.finish;
                    })
                );
            },
        }),
        C.each(["toggle", "show", "hide"], function (e, i) {
            var o = C.fn[i];
            C.fn[i] = function (e, t, n) {
                return null == e || "boolean" == typeof e ? o.apply(this, arguments) : this.animate(ut(i, !0), e, t, n);
            };
        }),
        C.each({ slideDown: ut("show"), slideUp: ut("hide"), slideToggle: ut("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, i) {
            C.fn[e] = function (e, t, n) {
                return this.animate(i, e, t, n);
            };
        }),
        (C.timers = []),
        (C.fx.tick = function () {
            var e,
                t = 0,
                n = C.timers;
            for (it = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || C.fx.stop(), (it = void 0);
        }),
        (C.fx.timer = function (e) {
            C.timers.push(e), C.fx.start();
        }),
        (C.fx.interval = 13),
        (C.fx.start = function () {
            ot || ((ot = !0), ct());
        }),
        (C.fx.stop = function () {
            ot = null;
        }),
        (C.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (C.fn.delay = function (i, e) {
            return (
                (i = (C.fx && C.fx.speeds[i]) || i),
                (e = e || "fx"),
                this.queue(e, function (e, t) {
                    var n = T.setTimeout(e, i);
                    t.stop = function () {
                        T.clearTimeout(n);
                    };
                })
            );
        }),
        (rt = k.createElement("input")),
        (st = k.createElement("select").appendChild(k.createElement("option"))),
        (rt.type = "checkbox"),
        (v.checkOn = "" !== rt.value),
        (v.optSelected = st.selected),
        ((rt = k.createElement("input")).value = "t"),
        (rt.type = "radio"),
        (v.radioValue = "t" === rt.value);
    var ht,
        gt = C.expr.attrHandle;
    C.fn.extend({
        attr: function (e, t) {
            return B(this, C.attr, e, t, 1 < arguments.length);
        },
        removeAttr: function (e) {
            return this.each(function () {
                C.removeAttr(this, e);
            });
        },
    }),
        C.extend({
            attr: function (e, t, n) {
                var i,
                    o,
                    r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r)
                    return void 0 === e.getAttribute
                        ? C.prop(e, t, n)
                        : ((1 === r && C.isXMLDoc(e)) || (o = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? ht : void 0)),
                          void 0 !== n
                              ? null === n
                                  ? void C.removeAttr(e, t)
                                  : o && "set" in o && void 0 !== (i = o.set(e, n, t))
                                  ? i
                                  : (e.setAttribute(t, n + ""), n)
                              : o && "get" in o && null !== (i = o.get(e, t))
                              ? i
                              : null == (i = C.find.attr(e, t))
                              ? void 0
                              : i);
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!v.radioValue && "radio" === t && A(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t;
                        }
                    },
                },
            },
            removeAttr: function (e, t) {
                var n,
                    i = 0,
                    o = t && t.match(M);
                if (o && 1 === e.nodeType) for (; (n = o[i++]); ) e.removeAttribute(n);
            },
        }),
        (ht = {
            set: function (e, t, n) {
                return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
        }),
        C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var s = gt[t] || C.find.attr;
            gt[t] = function (e, t, n) {
                var i,
                    o,
                    r = t.toLowerCase();
                return n || ((o = gt[r]), (gt[r] = i), (i = null != s(e, t, n) ? r : null), (gt[r] = o)), i;
            };
        });
    var mt = /^(?:input|select|textarea|button)$/i,
        vt = /^(?:a|area)$/i;
    function yt(e) {
        return (e.match(M) || []).join(" ");
    }
    function bt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function wt(e) {
        return Array.isArray(e) ? e : ("string" == typeof e && e.match(M)) || [];
    }
    C.fn.extend({
        prop: function (e, t) {
            return B(this, C.prop, e, t, 1 < arguments.length);
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[C.propFix[e] || e];
            });
        },
    }),
        C.extend({
            prop: function (e, t, n) {
                var i,
                    o,
                    r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r)
                    return (
                        (1 === r && C.isXMLDoc(e)) || ((t = C.propFix[t] || t), (o = C.propHooks[t])),
                        void 0 !== n ? (o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : (e[t] = n)) : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = C.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : mt.test(e.nodeName) || (vt.test(e.nodeName) && e.href) ? 0 : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
        v.optSelected ||
            (C.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                },
            }),
        C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            C.propFix[this.toLowerCase()] = this;
        }),
        C.fn.extend({
            addClass: function (t) {
                var e,
                    n,
                    i,
                    o,
                    r,
                    s,
                    a,
                    l = 0;
                if (y(t))
                    return this.each(function (e) {
                        C(this).addClass(t.call(this, e, bt(this)));
                    });
                if ((e = wt(t)).length)
                    for (; (n = this[l++]); )
                        if (((o = bt(n)), (i = 1 === n.nodeType && " " + yt(o) + " "))) {
                            for (s = 0; (r = e[s++]); ) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            o !== (a = yt(i)) && n.setAttribute("class", a);
                        }
                return this;
            },
            removeClass: function (t) {
                var e,
                    n,
                    i,
                    o,
                    r,
                    s,
                    a,
                    l = 0;
                if (y(t))
                    return this.each(function (e) {
                        C(this).removeClass(t.call(this, e, bt(this)));
                    });
                if (!arguments.length) return this.attr("class", "");
                if ((e = wt(t)).length)
                    for (; (n = this[l++]); )
                        if (((o = bt(n)), (i = 1 === n.nodeType && " " + yt(o) + " "))) {
                            for (s = 0; (r = e[s++]); ) for (; -1 < i.indexOf(" " + r + " "); ) i = i.replace(" " + r + " ", " ");
                            o !== (a = yt(i)) && n.setAttribute("class", a);
                        }
                return this;
            },
            toggleClass: function (o, t) {
                var r = typeof o,
                    s = "string" === r || Array.isArray(o);
                return "boolean" == typeof t && s
                    ? t
                        ? this.addClass(o)
                        : this.removeClass(o)
                    : y(o)
                    ? this.each(function (e) {
                          C(this).toggleClass(o.call(this, e, bt(this), t), t);
                      })
                    : this.each(function () {
                          var e, t, n, i;
                          if (s) for (t = 0, n = C(this), i = wt(o); (e = i[t++]); ) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                          else (void 0 !== o && "boolean" !== r) || ((e = bt(this)) && V.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === o ? "" : V.get(this, "__className__") || ""));
                      });
            },
            hasClass: function (e) {
                var t,
                    n,
                    i = 0;
                for (t = " " + e + " "; (n = this[i++]); ) if (1 === n.nodeType && -1 < (" " + yt(bt(n)) + " ").indexOf(t)) return !0;
                return !1;
            },
        });
    var xt = /\r/g;
    C.fn.extend({
        val: function (n) {
            var i,
                e,
                o,
                t = this[0];
            return arguments.length
                ? ((o = y(n)),
                  this.each(function (e) {
                      var t;
                      1 === this.nodeType &&
                          (null == (t = o ? n.call(this, e, C(this).val()) : n)
                              ? (t = "")
                              : "number" == typeof t
                              ? (t += "")
                              : Array.isArray(t) &&
                                (t = C.map(t, function (e) {
                                    return null == e ? "" : e + "";
                                })),
                          ((i = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value")) || (this.value = t));
                  }))
                : t
                ? (i = C.valHooks[t.type] || C.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value"))
                    ? e
                    : "string" == typeof (e = t.value)
                    ? e.replace(xt, "")
                    : null == e
                    ? ""
                    : e
                : void 0;
        },
    }),
        C.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = C.find.attr(e, "value");
                        return null != t ? t : yt(C.text(e));
                    },
                },
                select: {
                    get: function (e) {
                        var t,
                            n,
                            i,
                            o = e.options,
                            r = e.selectedIndex,
                            s = "select-one" === e.type,
                            a = s ? null : [],
                            l = s ? r + 1 : o.length;
                        for (i = r < 0 ? l : s ? r : 0; i < l; i++)
                            if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                                if (((t = C(n).val()), s)) return t;
                                a.push(t);
                            }
                        return a;
                    },
                    set: function (e, t) {
                        for (var n, i, o = e.options, r = C.makeArray(t), s = o.length; s--; ) ((i = o[s]).selected = -1 < C.inArray(C.valHooks.option.get(i), r)) && (n = !0);
                        return n || (e.selectedIndex = -1), r;
                    },
                },
            },
        }),
        C.each(["radio", "checkbox"], function () {
            (C.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t)) return (e.checked = -1 < C.inArray(C(e).val(), t));
                },
            }),
                v.checkOn ||
                    (C.valHooks[this].get = function (e) {
                        return null === e.getAttribute("value") ? "on" : e.value;
                    });
        }),
        (v.focusin = "onfocusin" in T);
    var St = /^(?:focusinfocus|focusoutblur)$/,
        Tt = function (e) {
            e.stopPropagation();
        };
    C.extend(C.event, {
        trigger: function (e, t, n, i) {
            var o,
                r,
                s,
                a,
                l,
                c,
                d,
                u,
                p = [n || k],
                f = m.call(e, "type") ? e.type : e,
                h = m.call(e, "namespace") ? e.namespace.split(".") : [];
            if (
                ((r = u = s = n = n || k),
                3 !== n.nodeType &&
                    8 !== n.nodeType &&
                    !St.test(f + C.event.triggered) &&
                    (-1 < f.indexOf(".") && ((f = (h = f.split(".")).shift()), h.sort()),
                    (l = f.indexOf(":") < 0 && "on" + f),
                    ((e = e[C.expando] ? e : new C.Event(f, "object" == typeof e && e)).isTrigger = i ? 2 : 3),
                    (e.namespace = h.join(".")),
                    (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                    (e.result = void 0),
                    e.target || (e.target = n),
                    (t = null == t ? [e] : C.makeArray(t, [e])),
                    (d = C.event.special[f] || {}),
                    i || !d.trigger || !1 !== d.trigger.apply(n, t)))
            ) {
                if (!i && !d.noBubble && !b(n)) {
                    for (a = d.delegateType || f, St.test(a + f) || (r = r.parentNode); r; r = r.parentNode) p.push(r), (s = r);
                    s === (n.ownerDocument || k) && p.push(s.defaultView || s.parentWindow || T);
                }
                for (o = 0; (r = p[o++]) && !e.isPropagationStopped(); )
                    (u = r),
                        (e.type = 1 < o ? a : d.bindType || f),
                        (c = (V.get(r, "events") || {})[e.type] && V.get(r, "handle")) && c.apply(r, t),
                        (c = l && r[l]) && c.apply && Q(r) && ((e.result = c.apply(r, t)), !1 === e.result && e.preventDefault());
                return (
                    (e.type = f),
                    i ||
                        e.isDefaultPrevented() ||
                        (d._default && !1 !== d._default.apply(p.pop(), t)) ||
                        !Q(n) ||
                        (l &&
                            y(n[f]) &&
                            !b(n) &&
                            ((s = n[l]) && (n[l] = null),
                            (C.event.triggered = f),
                            e.isPropagationStopped() && u.addEventListener(f, Tt),
                            n[f](),
                            e.isPropagationStopped() && u.removeEventListener(f, Tt),
                            (C.event.triggered = void 0),
                            s && (n[l] = s))),
                    e.result
                );
            }
        },
        simulate: function (e, t, n) {
            var i = C.extend(new C.Event(), n, { type: e, isSimulated: !0 });
            C.event.trigger(i, null, t);
        },
    }),
        C.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    C.event.trigger(e, t, this);
                });
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return C.event.trigger(e, t, n, !0);
            },
        }),
        v.focusin ||
            C.each({ focus: "focusin", blur: "focusout" }, function (n, i) {
                var o = function (e) {
                    C.event.simulate(i, e.target, C.event.fix(e));
                };
                C.event.special[i] = {
                    setup: function () {
                        var e = this.ownerDocument || this,
                            t = V.access(e, i);
                        t || e.addEventListener(n, o, !0), V.access(e, i, (t || 0) + 1);
                    },
                    teardown: function () {
                        var e = this.ownerDocument || this,
                            t = V.access(e, i) - 1;
                        t ? V.access(e, i, t) : (e.removeEventListener(n, o, !0), V.remove(e, i));
                    },
                };
            });
    var kt = T.location,
        Ct = Date.now(),
        Et = /\?/;
    C.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = new T.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
            t = void 0;
        }
        return (t && !t.getElementsByTagName("parsererror").length) || C.error("Invalid XML: " + e), t;
    };
    var _t = /\[\]$/,
        At = /\r?\n/g,
        Ot = /^(?:submit|button|image|reset|file)$/i,
        $t = /^(?:input|select|textarea|keygen)/i;
    function Dt(n, e, i, o) {
        var t;
        if (Array.isArray(e))
            C.each(e, function (e, t) {
                i || _t.test(n) ? o(n, t) : Dt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, i, o);
            });
        else if (i || "object" !== x(e)) o(n, e);
        else for (t in e) Dt(n + "[" + t + "]", e[t], i, o);
    }
    (C.param = function (e, t) {
        var n,
            i = [],
            o = function (e, t) {
                var n = y(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
            };
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !C.isPlainObject(e)))
            C.each(e, function () {
                o(this.name, this.value);
            });
        else for (n in e) Dt(n, e[n], t, o);
        return i.join("&");
    }),
        C.fn.extend({
            serialize: function () {
                return C.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = C.prop(this, "elements");
                    return e ? C.makeArray(e) : this;
                })
                    .filter(function () {
                        var e = this.type;
                        return this.name && !C(this).is(":disabled") && $t.test(this.nodeName) && !Ot.test(e) && (this.checked || !pe.test(e));
                    })
                    .map(function (e, t) {
                        var n = C(this).val();
                        return null == n
                            ? null
                            : Array.isArray(n)
                            ? C.map(n, function (e) {
                                  return { name: t.name, value: e.replace(At, "\r\n") };
                              })
                            : { name: t.name, value: n.replace(At, "\r\n") };
                    })
                    .get();
            },
        });
    var jt = /%20/g,
        Nt = /#.*$/,
        Pt = /([?&])_=[^&]*/,
        It = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Mt = /^(?:GET|HEAD)$/,
        Ht = /^\/\//,
        Lt = {},
        qt = {},
        Rt = "*/".concat("*"),
        Wt = k.createElement("a");
    function Ft(r) {
        return function (e, t) {
            "string" != typeof e && ((t = e), (e = "*"));
            var n,
                i = 0,
                o = e.toLowerCase().match(M) || [];
            if (y(t)) for (; (n = o[i++]); ) "+" === n[0] ? ((n = n.slice(1) || "*"), (r[n] = r[n] || []).unshift(t)) : (r[n] = r[n] || []).push(t);
        };
    }
    function Bt(t, o, r, s) {
        var a = {},
            l = t === qt;
        function c(e) {
            var i;
            return (
                (a[e] = !0),
                C.each(t[e] || [], function (e, t) {
                    var n = t(o, r, s);
                    return "string" != typeof n || l || a[n] ? (l ? !(i = n) : void 0) : (o.dataTypes.unshift(n), c(n), !1);
                }),
                i
            );
        }
        return c(o.dataTypes[0]) || (!a["*"] && c("*"));
    }
    function zt(e, t) {
        var n,
            i,
            o = C.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((o[n] ? e : i || (i = {}))[n] = t[n]);
        return i && C.extend(!0, e, i), e;
    }
    (Wt.href = kt.href),
        C.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: kt.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(kt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: { "*": Rt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": C.parseXML },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
                return t ? zt(zt(e, C.ajaxSettings), t) : zt(C.ajaxSettings, e);
            },
            ajaxPrefilter: Ft(Lt),
            ajaxTransport: Ft(qt),
            ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var d,
                    u,
                    p,
                    n,
                    f,
                    i,
                    h,
                    g,
                    o,
                    r,
                    m = C.ajaxSetup({}, t),
                    v = m.context || m,
                    y = m.context && (v.nodeType || v.jquery) ? C(v) : C.event,
                    b = C.Deferred(),
                    w = C.Callbacks("once memory"),
                    x = m.statusCode || {},
                    s = {},
                    a = {},
                    l = "canceled",
                    S = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (h) {
                                if (!n) for (n = {}; (t = It.exec(p)); ) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                t = n[e.toLowerCase() + " "];
                            }
                            return null == t ? null : t.join(", ");
                        },
                        getAllResponseHeaders: function () {
                            return h ? p : null;
                        },
                        setRequestHeader: function (e, t) {
                            return null == h && ((e = a[e.toLowerCase()] = a[e.toLowerCase()] || e), (s[e] = t)), this;
                        },
                        overrideMimeType: function (e) {
                            return null == h && (m.mimeType = e), this;
                        },
                        statusCode: function (e) {
                            var t;
                            if (e)
                                if (h) S.always(e[S.status]);
                                else for (t in e) x[t] = [x[t], e[t]];
                            return this;
                        },
                        abort: function (e) {
                            var t = e || l;
                            return d && d.abort(t), c(0, t), this;
                        },
                    };
                if (
                    (b.promise(S),
                    (m.url = ((e || m.url || kt.href) + "").replace(Ht, kt.protocol + "//")),
                    (m.type = t.method || t.type || m.method || m.type),
                    (m.dataTypes = (m.dataType || "*").toLowerCase().match(M) || [""]),
                    null == m.crossDomain)
                ) {
                    i = k.createElement("a");
                    try {
                        (i.href = m.url), (i.href = i.href), (m.crossDomain = Wt.protocol + "//" + Wt.host != i.protocol + "//" + i.host);
                    } catch (e) {
                        m.crossDomain = !0;
                    }
                }
                if ((m.data && m.processData && "string" != typeof m.data && (m.data = C.param(m.data, m.traditional)), Bt(Lt, m, t, S), h)) return S;
                for (o in ((g = C.event && m.global) && 0 == C.active++ && C.event.trigger("ajaxStart"),
                (m.type = m.type.toUpperCase()),
                (m.hasContent = !Mt.test(m.type)),
                (u = m.url.replace(Nt, "")),
                m.hasContent
                    ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(jt, "+"))
                    : ((r = m.url.slice(u.length)),
                      m.data && (m.processData || "string" == typeof m.data) && ((u += (Et.test(u) ? "&" : "?") + m.data), delete m.data),
                      !1 === m.cache && ((u = u.replace(Pt, "$1")), (r = (Et.test(u) ? "&" : "?") + "_=" + Ct++ + r)),
                      (m.url = u + r)),
                m.ifModified && (C.lastModified[u] && S.setRequestHeader("If-Modified-Since", C.lastModified[u]), C.etag[u] && S.setRequestHeader("If-None-Match", C.etag[u])),
                ((m.data && m.hasContent && !1 !== m.contentType) || t.contentType) && S.setRequestHeader("Content-Type", m.contentType),
                S.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : m.accepts["*"]),
                m.headers))
                    S.setRequestHeader(o, m.headers[o]);
                if (m.beforeSend && (!1 === m.beforeSend.call(v, S, m) || h)) return S.abort();
                if (((l = "abort"), w.add(m.complete), S.done(m.success), S.fail(m.error), (d = Bt(qt, m, t, S)))) {
                    if (((S.readyState = 1), g && y.trigger("ajaxSend", [S, m]), h)) return S;
                    m.async &&
                        0 < m.timeout &&
                        (f = T.setTimeout(function () {
                            S.abort("timeout");
                        }, m.timeout));
                    try {
                        (h = !1), d.send(s, c);
                    } catch (e) {
                        if (h) throw e;
                        c(-1, e);
                    }
                } else c(-1, "No Transport");
                function c(e, t, n, i) {
                    var o,
                        r,
                        s,
                        a,
                        l,
                        c = t;
                    h ||
                        ((h = !0),
                        f && T.clearTimeout(f),
                        (d = void 0),
                        (p = i || ""),
                        (S.readyState = 0 < e ? 4 : 0),
                        (o = (200 <= e && e < 300) || 304 === e),
                        n &&
                            (a = (function (e, t, n) {
                                for (var i, o, r, s, a = e.contents, l = e.dataTypes; "*" === l[0]; ) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                                if (i)
                                    for (o in a)
                                        if (a[o] && a[o].test(i)) {
                                            l.unshift(o);
                                            break;
                                        }
                                if (l[0] in n) r = l[0];
                                else {
                                    for (o in n) {
                                        if (!l[0] || e.converters[o + " " + l[0]]) {
                                            r = o;
                                            break;
                                        }
                                        s || (s = o);
                                    }
                                    r = r || s;
                                }
                                if (r) return r !== l[0] && l.unshift(r), n[r];
                            })(m, S, n)),
                        (a = (function (e, t, n, i) {
                            var o,
                                r,
                                s,
                                a,
                                l,
                                c = {},
                                d = e.dataTypes.slice();
                            if (d[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                            for (r = d.shift(); r; )
                                if ((e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (l = r), (r = d.shift())))
                                    if ("*" === r) r = l;
                                    else if ("*" !== l && l !== r) {
                                        if (!(s = c[l + " " + r] || c["* " + r]))
                                            for (o in c)
                                                if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                                    !0 === s ? (s = c[o]) : !0 !== c[o] && ((r = a[0]), d.unshift(a[1]));
                                                    break;
                                                }
                                        if (!0 !== s)
                                            if (s && e.throws) t = s(t);
                                            else
                                                try {
                                                    t = s(t);
                                                } catch (e) {
                                                    return { state: "parsererror", error: s ? e : "No conversion from " + l + " to " + r };
                                                }
                                    }
                            return { state: "success", data: t };
                        })(m, a, S, o)),
                        o
                            ? (m.ifModified && ((l = S.getResponseHeader("Last-Modified")) && (C.lastModified[u] = l), (l = S.getResponseHeader("etag")) && (C.etag[u] = l)),
                              204 === e || "HEAD" === m.type ? (c = "nocontent") : 304 === e ? (c = "notmodified") : ((c = a.state), (r = a.data), (o = !(s = a.error))))
                            : ((s = c), (!e && c) || ((c = "error"), e < 0 && (e = 0))),
                        (S.status = e),
                        (S.statusText = (t || c) + ""),
                        o ? b.resolveWith(v, [r, c, S]) : b.rejectWith(v, [S, c, s]),
                        S.statusCode(x),
                        (x = void 0),
                        g && y.trigger(o ? "ajaxSuccess" : "ajaxError", [S, m, o ? r : s]),
                        w.fireWith(v, [S, c]),
                        g && (y.trigger("ajaxComplete", [S, m]), --C.active || C.event.trigger("ajaxStop")));
                }
                return S;
            },
            getJSON: function (e, t, n) {
                return C.get(e, t, n, "json");
            },
            getScript: function (e, t) {
                return C.get(e, void 0, t, "script");
            },
        }),
        C.each(["get", "post"], function (e, o) {
            C[o] = function (e, t, n, i) {
                return y(t) && ((i = i || n), (n = t), (t = void 0)), C.ajax(C.extend({ url: e, type: o, dataType: i, data: t, success: n }, C.isPlainObject(e) && e));
            };
        }),
        (C._evalUrl = function (e, t) {
            return C.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                    C.globalEval(e, t);
                },
            });
        }),
        C.fn.extend({
            wrapAll: function (e) {
                var t;
                return (
                    this[0] &&
                        (y(e) && (e = e.call(this[0])),
                        (t = C(e, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && t.insertBefore(this[0]),
                        t
                            .map(function () {
                                for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                                return e;
                            })
                            .append(this)),
                    this
                );
            },
            wrapInner: function (n) {
                return y(n)
                    ? this.each(function (e) {
                          C(this).wrapInner(n.call(this, e));
                      })
                    : this.each(function () {
                          var e = C(this),
                              t = e.contents();
                          t.length ? t.wrapAll(n) : e.append(n);
                      });
            },
            wrap: function (t) {
                var n = y(t);
                return this.each(function (e) {
                    C(this).wrapAll(n ? t.call(this, e) : t);
                });
            },
            unwrap: function (e) {
                return (
                    this.parent(e)
                        .not("body")
                        .each(function () {
                            C(this).replaceWith(this.childNodes);
                        }),
                    this
                );
            },
        }),
        (C.expr.pseudos.hidden = function (e) {
            return !C.expr.pseudos.visible(e);
        }),
        (C.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        }),
        (C.ajaxSettings.xhr = function () {
            try {
                return new T.XMLHttpRequest();
            } catch (e) {}
        });
    var Ut = { 0: 200, 1223: 204 },
        Xt = C.ajaxSettings.xhr();
    (v.cors = !!Xt && "withCredentials" in Xt),
        (v.ajax = Xt = !!Xt),
        C.ajaxTransport(function (o) {
            var r, s;
            if (v.cors || (Xt && !o.crossDomain))
                return {
                    send: function (e, t) {
                        var n,
                            i = o.xhr();
                        if ((i.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields)) for (n in o.xhrFields) i[n] = o.xhrFields[n];
                        for (n in (o.mimeType && i.overrideMimeType && i.overrideMimeType(o.mimeType), o.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e)) i.setRequestHeader(n, e[n]);
                        (r = function (e) {
                            return function () {
                                r &&
                                    ((r = s = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null),
                                    "abort" === e
                                        ? i.abort()
                                        : "error" === e
                                        ? "number" != typeof i.status
                                            ? t(0, "error")
                                            : t(i.status, i.statusText)
                                        : t(Ut[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? { binary: i.response } : { text: i.responseText }, i.getAllResponseHeaders()));
                            };
                        }),
                            (i.onload = r()),
                            (s = i.onerror = i.ontimeout = r("error")),
                            void 0 !== i.onabort
                                ? (i.onabort = s)
                                : (i.onreadystatechange = function () {
                                      4 === i.readyState &&
                                          T.setTimeout(function () {
                                              r && s();
                                          });
                                  }),
                            (r = r("abort"));
                        try {
                            i.send((o.hasContent && o.data) || null);
                        } catch (e) {
                            if (r) throw e;
                        }
                    },
                    abort: function () {
                        r && r();
                    },
                };
        }),
        C.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
        }),
        C.ajaxSetup({
            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
                "text script": function (e) {
                    return C.globalEval(e), e;
                },
            },
        }),
        C.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
        }),
        C.ajaxTransport("script", function (n) {
            var i, o;
            if (n.crossDomain || n.scriptAttrs)
                return {
                    send: function (e, t) {
                        (i = C("<script>")
                            .attr(n.scriptAttrs || {})
                            .prop({ charset: n.scriptCharset, src: n.url })
                            .on(
                                "load error",
                                (o = function (e) {
                                    i.remove(), (o = null), e && t("error" === e.type ? 404 : 200, e.type);
                                })
                            )),
                            k.head.appendChild(i[0]);
                    },
                    abort: function () {
                        o && o();
                    },
                };
        });
    var Gt,
        Qt = [],
        Kt = /(=)\?(?=&|$)|\?\?/;
    C.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Qt.pop() || C.expando + "_" + Ct++;
            return (this[e] = !0), e;
        },
    }),
        C.ajaxPrefilter("json jsonp", function (e, t, n) {
            var i,
                o,
                r,
                s = !1 !== e.jsonp && (Kt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Kt.test(e.data) && "data");
            if (s || "jsonp" === e.dataTypes[0])
                return (
                    (i = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                    s ? (e[s] = e[s].replace(Kt, "$1" + i)) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                    (e.converters["script json"] = function () {
                        return r || C.error(i + " was not called"), r[0];
                    }),
                    (e.dataTypes[0] = "json"),
                    (o = T[i]),
                    (T[i] = function () {
                        r = arguments;
                    }),
                    n.always(function () {
                        void 0 === o ? C(T).removeProp(i) : (T[i] = o), e[i] && ((e.jsonpCallback = t.jsonpCallback), Qt.push(i)), r && y(o) && o(r[0]), (r = o = void 0);
                    }),
                    "script"
                );
        }),
        (v.createHTMLDocument = (((Gt = k.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === Gt.childNodes.length)),
        (C.parseHTML = function (e, t, n) {
            return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t || (v.createHTMLDocument ? (((i = (t = k.implementation.createHTMLDocument("")).createElement("base")).href = k.location.href), t.head.appendChild(i)) : (t = k)),
                  (r = !n && []),
                  (o = O.exec(e)) ? [t.createElement(o[1])] : ((o = xe([e], t, r)), r && r.length && C(r).remove(), C.merge([], o.childNodes)));
            var i, o, r;
        }),
        (C.fn.load = function (e, t, n) {
            var i,
                o,
                r,
                s = this,
                a = e.indexOf(" ");
            return (
                -1 < a && ((i = yt(e.slice(a))), (e = e.slice(0, a))),
                y(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (o = "POST"),
                0 < s.length &&
                    C.ajax({ url: e, type: o || "GET", dataType: "html", data: t })
                        .done(function (e) {
                            (r = arguments), s.html(i ? C("<div>").append(C.parseHTML(e)).find(i) : e);
                        })
                        .always(
                            n &&
                                function (e, t) {
                                    s.each(function () {
                                        n.apply(this, r || [e.responseText, t, e]);
                                    });
                                }
                        ),
                this
            );
        }),
        C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            C.fn[t] = function (e) {
                return this.on(t, e);
            };
        }),
        (C.expr.pseudos.animated = function (t) {
            return C.grep(C.timers, function (e) {
                return t === e.elem;
            }).length;
        }),
        (C.offset = {
            setOffset: function (e, t, n) {
                var i,
                    o,
                    r,
                    s,
                    a,
                    l,
                    c = C.css(e, "position"),
                    d = C(e),
                    u = {};
                "static" === c && (e.style.position = "relative"),
                    (a = d.offset()),
                    (r = C.css(e, "top")),
                    (l = C.css(e, "left")),
                    (o = ("absolute" === c || "fixed" === c) && -1 < (r + l).indexOf("auto") ? ((s = (i = d.position()).top), i.left) : ((s = parseFloat(r) || 0), parseFloat(l) || 0)),
                    y(t) && (t = t.call(e, n, C.extend({}, a))),
                    null != t.top && (u.top = t.top - a.top + s),
                    null != t.left && (u.left = t.left - a.left + o),
                    "using" in t ? t.using.call(e, u) : d.css(u);
            },
        }),
        C.fn.extend({
            offset: function (t) {
                if (arguments.length)
                    return void 0 === t
                        ? this
                        : this.each(function (e) {
                              C.offset.setOffset(this, t, e);
                          });
                var e,
                    n,
                    i = this[0];
                return i ? (i.getClientRects().length ? ((e = i.getBoundingClientRect()), (n = i.ownerDocument.defaultView), { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 }) : void 0;
            },
            position: function () {
                if (this[0]) {
                    var e,
                        t,
                        n,
                        i = this[0],
                        o = { top: 0, left: 0 };
                    if ("fixed" === C.css(i, "position")) t = i.getBoundingClientRect();
                    else {
                        for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position"); ) e = e.parentNode;
                        e && e !== i && 1 === e.nodeType && (((o = C(e).offset()).top += C.css(e, "borderTopWidth", !0)), (o.left += C.css(e, "borderLeftWidth", !0)));
                    }
                    return { top: t.top - o.top - C.css(i, "marginTop", !0), left: t.left - o.left - C.css(i, "marginLeft", !0) };
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent; e && "static" === C.css(e, "position"); ) e = e.offsetParent;
                    return e || oe;
                });
            },
        }),
        C.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, o) {
            var r = "pageYOffset" === o;
            C.fn[t] = function (e) {
                return B(
                    this,
                    function (e, t, n) {
                        var i;
                        if ((b(e) ? (i = e) : 9 === e.nodeType && (i = e.defaultView), void 0 === n)) return i ? i[o] : e[t];
                        i ? i.scrollTo(r ? i.pageXOffset : n, r ? n : i.pageYOffset) : (e[t] = n);
                    },
                    t,
                    e,
                    arguments.length
                );
            };
        }),
        C.each(["top", "left"], function (e, n) {
            C.cssHooks[n] = ze(v.pixelPosition, function (e, t) {
                if (t) return (t = Be(e, n)), Re.test(t) ? C(e).position()[n] + "px" : t;
            });
        }),
        C.each({ Height: "height", Width: "width" }, function (s, a) {
            C.each({ padding: "inner" + s, content: a, "": "outer" + s }, function (i, r) {
                C.fn[r] = function (e, t) {
                    var n = arguments.length && (i || "boolean" != typeof e),
                        o = i || (!0 === e || !0 === t ? "margin" : "border");
                    return B(
                        this,
                        function (e, t, n) {
                            var i;
                            return b(e)
                                ? 0 === r.indexOf("outer")
                                    ? e["inner" + s]
                                    : e.document.documentElement["client" + s]
                                : 9 === e.nodeType
                                ? ((i = e.documentElement), Math.max(e.body["scroll" + s], i["scroll" + s], e.body["offset" + s], i["offset" + s], i["client" + s]))
                                : void 0 === n
                                ? C.css(e, t, o)
                                : C.style(e, t, n, o);
                        },
                        a,
                        n ? e : void 0,
                        n
                    );
                };
            });
        }),
        C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, n) {
            C.fn[n] = function (e, t) {
                return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
            };
        }),
        C.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            },
        }),
        C.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
                return this.off(e, null, t);
            },
            delegate: function (e, t, n, i) {
                return this.on(t, e, n, i);
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
            },
        }),
        (C.proxy = function (e, t) {
            var n, i, o;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), y(e)))
                return (
                    (i = a.call(arguments, 2)),
                    ((o = function () {
                        return e.apply(t || this, i.concat(a.call(arguments)));
                    }).guid = e.guid = e.guid || C.guid++),
                    o
                );
        }),
        (C.holdReady = function (e) {
            e ? C.readyWait++ : C.ready(!0);
        }),
        (C.isArray = Array.isArray),
        (C.parseJSON = JSON.parse),
        (C.nodeName = A),
        (C.isFunction = y),
        (C.isWindow = b),
        (C.camelCase = G),
        (C.type = x),
        (C.now = Date.now),
        (C.isNumeric = function (e) {
            var t = C.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
        }),
        "function" == typeof define &&
            define.amd &&
            define("jquery", [], function () {
                return C;
            });
    var Vt = T.jQuery,
        Yt = T.$;
    return (
        (C.noConflict = function (e) {
            return T.$ === C && (T.$ = Yt), e && T.jQuery === C && (T.jQuery = Vt), C;
        }),
        e || (T.jQuery = T.$ = C),
        C
    );
}),
    function () {
        "use strict";
        var e = { function: !0, object: !0 },
            M = (e[typeof window] && window) || this,
            n = e[typeof exports] && exports,
            t = e[typeof module] && module && !module.nodeType && module,
            i = n && t && "object" == typeof global && global;
        !i || (i.global !== i && i.window !== i && i.self !== i) || (M = i);
        var r = Math.pow(2, 53) - 1,
            H = /\bOpera/,
            o = Object.prototype,
            s = o.hasOwnProperty,
            L = o.toString;
        function a(e) {
            return (e = String(e)).charAt(0).toUpperCase() + e.slice(1);
        }
        function q(e) {
            return (e = z(e)), /^(?:webOS|i(?:OS|P))/.test(e) ? e : a(e);
        }
        function R(e, t) {
            for (var n in e) s.call(e, n) && t(e[n], n, e);
        }
        function W(e) {
            return null == e ? a(e) : L.call(e).slice(8, -1);
        }
        function F(e) {
            return String(e).replace(/([ -])(?!$)/g, "$1?");
        }
        function B(n, i) {
            var o = null;
            return (
                (function (e, t) {
                    var n = -1,
                        i = e ? e.length : 0;
                    if ("number" == typeof i && -1 < i && i <= r) for (; ++n < i; ) t(e[n], n, e);
                    else R(e, t);
                })(n, function (e, t) {
                    o = i(o, e, t, n);
                }),
                o
            );
        }
        function z(e) {
            return String(e).replace(/^ +| +$/g, "");
        }
        var l = (function e(a) {
            var t = M,
                n = a && "object" == typeof a && "String" != W(a);
            n && ((t = a), (a = null));
            var i = t.navigator || {},
                o = i.userAgent || "";
            a || (a = o);
            var r,
                s,
                l,
                c,
                d,
                u = n ? !!i.likeChrome : /\bChrome\b/.test(a) && !/internal|\n/i.test(L.toString()),
                p = "Object",
                f = n ? p : "ScriptBridgingProxyObject",
                h = n ? p : "Environment",
                g = n && t.java ? "JavaPackage" : W(t.java),
                m = n ? p : "RuntimeObject",
                v = /\bJava/.test(g) && t.java,
                y = v && W(t.environment) == h,
                b = v ? "a" : "α",
                w = v ? "b" : "β",
                x = t.document || {},
                S = t.operamini || t.opera,
                T = H.test((T = n && S ? S["[[Class]]"] : W(S))) ? T : (S = null),
                k = a,
                C = [],
                E = null,
                _ = a == o,
                A = _ && S && "function" == typeof S.version && S.version(),
                O = B([{ label: "EdgeHTML", pattern: "Edge" }, "Trident", { label: "WebKit", pattern: "AppleWebKit" }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"], function (e, t) {
                    return e || (RegExp("\\b" + (t.pattern || F(t)) + "\\b", "i").exec(a) && (t.label || t));
                }),
                $ = B(
                    [
                        "Adobe AIR",
                        "Arora",
                        "Avant Browser",
                        "Breach",
                        "Camino",
                        "Electron",
                        "Epiphany",
                        "Fennec",
                        "Flock",
                        "Galeon",
                        "GreenBrowser",
                        "iCab",
                        "Iceweasel",
                        "K-Meleon",
                        "Konqueror",
                        "Lunascape",
                        "Maxthon",
                        { label: "Microsoft Edge", pattern: "Edge" },
                        "Midori",
                        "Nook Browser",
                        "PaleMoon",
                        "PhantomJS",
                        "Raven",
                        "Rekonq",
                        "RockMelt",
                        { label: "Samsung Internet", pattern: "SamsungBrowser" },
                        "SeaMonkey",
                        { label: "Silk", pattern: "(?:Cloud9|Silk-Accelerated)" },
                        "Sleipnir",
                        "SlimBrowser",
                        { label: "SRWare Iron", pattern: "Iron" },
                        "Sunrise",
                        "Swiftfox",
                        "Waterfox",
                        "WebPositive",
                        "Opera Mini",
                        { label: "Opera Mini", pattern: "OPiOS" },
                        "Opera",
                        { label: "Opera", pattern: "OPR" },
                        "Chrome",
                        { label: "Chrome Mobile", pattern: "(?:CriOS|CrMo)" },
                        { label: "Firefox", pattern: "(?:Firefox|Minefield)" },
                        { label: "Firefox for iOS", pattern: "FxiOS" },
                        { label: "IE", pattern: "IEMobile" },
                        { label: "IE", pattern: "MSIE" },
                        "Safari",
                    ],
                    function (e, t) {
                        return e || (RegExp("\\b" + (t.pattern || F(t)) + "\\b", "i").exec(a) && (t.label || t));
                    }
                ),
                D = P([
                    { label: "BlackBerry", pattern: "BB10" },
                    "BlackBerry",
                    { label: "Galaxy S", pattern: "GT-I9000" },
                    { label: "Galaxy S2", pattern: "GT-I9100" },
                    { label: "Galaxy S3", pattern: "GT-I9300" },
                    { label: "Galaxy S4", pattern: "GT-I9500" },
                    { label: "Galaxy S5", pattern: "SM-G900" },
                    { label: "Galaxy S6", pattern: "SM-G920" },
                    { label: "Galaxy S6 Edge", pattern: "SM-G925" },
                    { label: "Galaxy S7", pattern: "SM-G930" },
                    { label: "Galaxy S7 Edge", pattern: "SM-G935" },
                    "Google TV",
                    "Lumia",
                    "iPad",
                    "iPod",
                    "iPhone",
                    "Kindle",
                    { label: "Kindle Fire", pattern: "(?:Cloud9|Silk-Accelerated)" },
                    "Nexus",
                    "Nook",
                    "PlayBook",
                    "PlayStation Vita",
                    "PlayStation",
                    "TouchPad",
                    "Transformer",
                    { label: "Wii U", pattern: "WiiU" },
                    "Wii",
                    "Xbox One",
                    { label: "Xbox 360", pattern: "Xbox" },
                    "Xoom",
                ]),
                j = B(
                    {
                        Apple: { iPad: 1, iPhone: 1, iPod: 1 },
                        Archos: {},
                        Amazon: { Kindle: 1, "Kindle Fire": 1 },
                        Asus: { Transformer: 1 },
                        "Barnes & Noble": { Nook: 1 },
                        BlackBerry: { PlayBook: 1 },
                        Google: { "Google TV": 1, Nexus: 1 },
                        HP: { TouchPad: 1 },
                        HTC: {},
                        LG: {},
                        Microsoft: { Xbox: 1, "Xbox One": 1 },
                        Motorola: { Xoom: 1 },
                        Nintendo: { "Wii U": 1, Wii: 1 },
                        Nokia: { Lumia: 1 },
                        Samsung: { "Galaxy S": 1, "Galaxy S2": 1, "Galaxy S3": 1, "Galaxy S4": 1 },
                        Sony: { PlayStation: 1, "PlayStation Vita": 1 },
                    },
                    function (e, t, n) {
                        return e || ((t[D] || t[/^[a-z]+(?: +[a-z]+\b)*/i.exec(D)] || RegExp("\\b" + F(n) + "(?:\\b|\\w*\\d)", "i").exec(a)) && n);
                    }
                ),
                N = B(
                    [
                        "Windows Phone",
                        "Android",
                        "CentOS",
                        { label: "Chrome OS", pattern: "CrOS" },
                        "Debian",
                        "Fedora",
                        "FreeBSD",
                        "Gentoo",
                        "Haiku",
                        "Kubuntu",
                        "Linux Mint",
                        "OpenBSD",
                        "Red Hat",
                        "SuSE",
                        "Ubuntu",
                        "Xubuntu",
                        "Cygwin",
                        "Symbian OS",
                        "hpwOS",
                        "webOS ",
                        "webOS",
                        "Tablet OS",
                        "Tizen",
                        "Linux",
                        "Mac OS X",
                        "Macintosh",
                        "Mac",
                        "Windows 98;",
                        "Windows ",
                    ],
                    function (e, t) {
                        var n,
                            i,
                            o,
                            r,
                            s = t.pattern || F(t);
                        return (
                            !e &&
                                (e = RegExp("\\b" + s + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(a)) &&
                                ((n = e),
                                (i = s),
                                (o = t.label || t),
                                (r = {
                                    "10.0": "10",
                                    6.4: "10 Technical Preview",
                                    6.3: "8.1",
                                    6.2: "8",
                                    6.1: "Server 2008 R2 / 7",
                                    "6.0": "Server 2008 / Vista",
                                    5.2: "Server 2003 / XP 64-bit",
                                    5.1: "XP",
                                    5.01: "2000 SP1",
                                    "5.0": "2000",
                                    "4.0": "NT",
                                    "4.90": "ME",
                                }),
                                i && o && /^Win/i.test(n) && !/^Windows Phone /i.test(n) && (r = r[/[\d.]+$/.exec(n)]) && (n = "Windows " + r),
                                (n = String(n)),
                                i && o && (n = n.replace(RegExp(i, "i"), o)),
                                (e = n = q(
                                    n
                                        .replace(/ ce$/i, " CE")
                                        .replace(/\bhpw/i, "web")
                                        .replace(/\bMacintosh\b/, "Mac OS")
                                        .replace(/_PowerPC\b/i, " OS")
                                        .replace(/\b(OS X) [^ \d]+/i, "$1")
                                        .replace(/\bMac (OS X)\b/, "$1")
                                        .replace(/\/(\d)/, " $1")
                                        .replace(/_/g, ".")
                                        .replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "")
                                        .replace(/\bx86\.64\b/gi, "x86_64")
                                        .replace(/\b(Windows Phone) OS\b/, "$1")
                                        .replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1")
                                        .split(" on ")[0]
                                ))),
                            e
                        );
                    }
                );
            function P(e) {
                return B(e, function (e, t) {
                    var n = t.pattern || F(t);
                    return (
                        !e &&
                            (e = RegExp("\\b" + n + " *\\d+[.\\w_]*", "i").exec(a) || RegExp("\\b" + n + " *\\w+-[\\w]*", "i").exec(a) || RegExp("\\b" + n + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(a)) &&
                            ((e = String(t.label && !RegExp(n, "i").test(t.label) ? t.label : e).split("/"))[1] && !/[\d.]+/.test(e[0]) && (e[0] += " " + e[1]),
                            (t = t.label || t),
                            (e = q(
                                e[0]
                                    .replace(RegExp(n, "i"), t)
                                    .replace(RegExp("; *(?:" + t + "[_-])?", "i"), " ")
                                    .replace(RegExp("(" + t + ")[-_.]?(\\w)", "i"), "$1 $2")
                            ))),
                        e
                    );
                });
            }
            if (
                (O && (O = [O]),
                j && !D && (D = P([j])),
                (r = /\bGoogle TV\b/.exec(D)) && (D = r[0]),
                /\bSimulator\b/i.test(a) && (D = (D ? D + " " : "") + "Simulator"),
                "Opera Mini" == $ && /\bOPiOS\b/.test(a) && C.push("running in Turbo/Uncompressed mode"),
                "IE" == $ && /\blike iPhone OS\b/.test(a)
                    ? ((j = (r = e(a.replace(/like iPhone OS/, ""))).manufacturer), (D = r.product))
                    : /^iP/.test(D)
                    ? ($ || ($ = "Safari"), (N = "iOS" + ((r = / OS ([\d_]+)/i.exec(a)) ? " " + r[1].replace(/_/g, ".") : "")))
                    : "Konqueror" != $ || /buntu/i.test(N)
                    ? (j && "Google" != j && ((/Chrome/.test($) && !/\bMobile Safari\b/i.test(a)) || /\bVita\b/.test(D))) || (/\bAndroid\b/.test(N) && /^Chrome/.test($) && /\bVersion\//i.test(a))
                        ? (($ = "Android Browser"), (N = /\bAndroid\b/.test(N) ? N : "Android"))
                        : "Silk" == $
                        ? (/\bMobi/i.test(a) || ((N = "Android"), C.unshift("desktop mode")), /Accelerated *= *true/i.test(a) && C.unshift("accelerated"))
                        : "PaleMoon" == $ && (r = /\bFirefox\/([\d.]+)\b/.exec(a))
                        ? C.push("identifying as Firefox " + r[1])
                        : "Firefox" == $ && (r = /\b(Mobile|Tablet|TV)\b/i.exec(a))
                        ? (N || (N = "Firefox OS"), D || (D = r[1]))
                        : !$ || (r = !/\bMinefield\b/i.test(a) && /\b(?:Firefox|Safari)\b/.exec($))
                        ? ($ && !D && /[\/,]|^[^(]+?\)/.test(a.slice(a.indexOf(r + "/") + 8)) && ($ = null),
                          (r = D || j || N) && (D || j || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(N)) && ($ = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(N) ? N : r) + " Browser"))
                        : "Electron" == $ && (r = (/\bChrome\/([\d.]+)\b/.exec(a) || 0)[1]) && C.push("Chromium " + r)
                    : (N = "Kubuntu"),
                A ||
                    (A = B(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", F($), "(?:Firefox|Minefield|NetFront)"], function (e, t) {
                        return e || (RegExp(t + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(a) || 0)[1] || null;
                    })),
                (r =
                    ("iCab" == O && 3 < parseFloat(A) ? "WebKit" : /\bOpera\b/.test($) && (/\bOPR\b/.test(a) ? "Blink" : "Presto")) ||
                    (/\b(?:Midori|Nook|Safari)\b/i.test(a) && !/^(?:Trident|EdgeHTML)$/.test(O) && "WebKit") ||
                    (!O && /\bMSIE\b/i.test(a) && ("Mac OS" == N ? "Tasman" : "Trident")) ||
                    ("WebKit" == O && /\bPlayStation\b(?! Vita\b)/i.test($) && "NetFront")) && (O = [r]),
                "IE" == $ && (r = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(a) || 0)[1])
                    ? (($ += " Mobile"), (N = "Windows Phone " + (/\+$/.test(r) ? r : r + ".x")), C.unshift("desktop mode"))
                    : /\bWPDesktop\b/i.test(a)
                    ? (($ = "IE Mobile"), (N = "Windows Phone 8.x"), C.unshift("desktop mode"), A || (A = (/\brv:([\d.]+)/.exec(a) || 0)[1]))
                    : "IE" != $ && "Trident" == O && (r = /\brv:([\d.]+)/.exec(a)) && ($ && C.push("identifying as " + $ + (A ? " " + A : "")), ($ = "IE"), (A = r[1])),
                _)
            ) {
                if (((c = "global"), (d = null != (l = t) ? typeof l[c] : "number"), /^(?:boolean|number|string|undefined)$/.test(d) || ("object" == d && !l[c])))
                    W((r = t.runtime)) == f
                        ? (($ = "Adobe AIR"), (N = r.flash.system.Capabilities.os))
                        : W((r = t.phantom)) == m
                        ? (($ = "PhantomJS"), (A = (r = r.version || null) && r.major + "." + r.minor + "." + r.patch))
                        : "number" == typeof x.documentMode && (r = /\bTrident\/(\d+)/i.exec(a))
                        ? ((A = [A, x.documentMode]), (r = +r[1] + 4) != A[1] && (C.push("IE " + A[1] + " mode"), O && (O[1] = ""), (A[1] = r)), (A = "IE" == $ ? String(A[1].toFixed(1)) : A[0]))
                        : "number" == typeof x.documentMode && /^(?:Chrome|Firefox)\b/.test($) && (C.push("masking as " + $ + " " + A), ($ = "IE"), (A = "11.0"), (O = ["Trident"]), (N = "Windows"));
                else if ((v && ((k = (r = v.lang.System).getProperty("os.arch")), (N = N || r.getProperty("os.name") + " " + r.getProperty("os.version"))), y)) {
                    try {
                        (A = t.require("ringo/engine").version.join(".")), ($ = "RingoJS");
                    } catch (e) {
                        (r = t.system) && r.global.system == t.system && (($ = "Narwhal"), N || (N = r[0].os || null));
                    }
                    $ || ($ = "Rhino");
                } else
                    "object" == typeof t.process &&
                        !t.process.browser &&
                        (r = t.process) &&
                        ("object" == typeof r.versions &&
                            ("string" == typeof r.versions.electron
                                ? (C.push("Node " + r.versions.node), ($ = "Electron"), (A = r.versions.electron))
                                : "string" == typeof r.versions.nw && (C.push("Chromium " + A, "Node " + r.versions.node), ($ = "NW.js"), (A = r.versions.nw))),
                        $ || (($ = "Node.js"), (k = r.arch), (N = r.platform), (A = (A = /[\d.]+/.exec(r.version)) ? A[0] : null)));
                N = N && q(N);
            }
            if (
                (A &&
                    (r = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(A) || /(?:alpha|beta)(?: ?\d)?/i.exec(a + ";" + (_ && i.appMinorVersion)) || (/\bMinefield\b/i.test(a) && "a")) &&
                    ((E = /b/i.test(r) ? "beta" : "alpha"), (A = A.replace(RegExp(r + "\\+?$"), "") + ("beta" == E ? w : b) + (/\d+\+?/.exec(r) || ""))),
                "Fennec" == $ || ("Firefox" == $ && /\b(?:Android|Firefox OS)\b/.test(N)))
            )
                $ = "Firefox Mobile";
            else if ("Maxthon" == $ && A) A = A.replace(/\.[\d.]+/, ".x");
            else if (/\bXbox\b/i.test(D)) "Xbox 360" == D && (N = null), "Xbox 360" == D && /\bIEMobile\b/.test(a) && C.unshift("mobile mode");
            else if ((!/^(?:Chrome|IE|Opera)$/.test($) && (!$ || D || /Browser|Mobi/.test($))) || ("Windows CE" != N && !/Mobi/i.test(a)))
                if ("IE" == $ && _)
                    try {
                        null === t.external && C.unshift("platform preview");
                    } catch (e) {
                        C.unshift("embedded");
                    }
                else
                    (/\bBlackBerry\b/.test(D) || /\bBB10\b/.test(a)) && (r = (RegExp(D.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(a) || 0)[1] || A)
                        ? ((N = ((r = [r, /BB10/.test(a)])[1] ? ((D = null), (j = "BlackBerry")) : "Device Software") + " " + r[0]), (A = null))
                        : this != R &&
                          "Wii" != D &&
                          ((_ && S) ||
                              (/Opera/.test($) && /\b(?:MSIE|Firefox)\b/i.test(a)) ||
                              ("Firefox" == $ && /\bOS X (?:\d+\.){2,}/.test(N)) ||
                              ("IE" == $ && ((N && !/^Win/.test(N) && 5.5 < A) || (/\bWindows XP\b/.test(N) && 8 < A) || (8 == A && !/\bTrident\b/.test(a))))) &&
                          !H.test((r = e.call(R, a.replace(H, "") + ";"))) &&
                          r.name &&
                          ((r = "ing as " + r.name + ((r = r.version) ? " " + r : "")),
                          H.test($)
                              ? (/\bIE\b/.test(r) && "Mac OS" == N && (N = null), (r = "identify" + r))
                              : ((r = "mask" + r), ($ = T ? q(T.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera"), /\bIE\b/.test(r) && (N = null), _ || (A = null)),
                          (O = ["Presto"]),
                          C.push(r));
            else $ += " Mobile";
            (r = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(a) || 0)[1]) &&
                ((r = [parseFloat(r.replace(/\.(\d)$/, ".0$1")), r]),
                "Safari" == $ && "+" == r[1].slice(-1) ? (($ = "WebKit Nightly"), (E = "alpha"), (A = r[1].slice(0, -1))) : (A != r[1] && A != (r[2] = (/\bSafari\/([\d.]+\+?)/i.exec(a) || 0)[1])) || (A = null),
                (r[1] = (/\bChrome\/([\d.]+)/i.exec(a) || 0)[1]),
                537.36 == r[0] && 537.36 == r[2] && 28 <= parseFloat(r[1]) && "WebKit" == O && (O = ["Blink"]),
                (r =
                    _ && (u || r[1])
                        ? (O && (O[1] = "like Chrome"),
                          r[1] ||
                              ((r = r[0]) < 530
                                  ? 1
                                  : r < 532
                                  ? 2
                                  : r < 532.05
                                  ? 3
                                  : r < 533
                                  ? 4
                                  : r < 534.03
                                  ? 5
                                  : r < 534.07
                                  ? 6
                                  : r < 534.1
                                  ? 7
                                  : r < 534.13
                                  ? 8
                                  : r < 534.16
                                  ? 9
                                  : r < 534.24
                                  ? 10
                                  : r < 534.3
                                  ? 11
                                  : r < 535.01
                                  ? 12
                                  : r < 535.02
                                  ? "13+"
                                  : r < 535.07
                                  ? 15
                                  : r < 535.11
                                  ? 16
                                  : r < 535.19
                                  ? 17
                                  : r < 536.05
                                  ? 18
                                  : r < 536.1
                                  ? 19
                                  : r < 537.01
                                  ? 20
                                  : r < 537.11
                                  ? "21+"
                                  : r < 537.13
                                  ? 23
                                  : r < 537.18
                                  ? 24
                                  : r < 537.24
                                  ? 25
                                  : r < 537.36
                                  ? 26
                                  : "Blink" != O
                                  ? "27"
                                  : "28"))
                        : (O && (O[1] = "like Safari"), (r = r[0]) < 400 ? 1 : r < 500 ? 2 : r < 526 ? 3 : r < 533 ? 4 : r < 534 ? "4+" : r < 535 ? 5 : r < 537 ? 6 : r < 538 ? 7 : r < 601 ? 8 : "8")),
                O && (O[1] += " " + (r += "number" == typeof r ? ".x" : /[.+]/.test(r) ? "" : "+")),
                "Safari" == $ && (!A || 45 < parseInt(A)) && (A = r)),
                "Opera" == $ && (r = /\bzbov|zvav$/.exec(N))
                    ? (($ += " "), C.unshift("desktop mode"), "zvav" == r ? (($ += "Mini"), (A = null)) : ($ += "Mobile"), (N = N.replace(RegExp(" *" + r + "$"), "")))
                    : "Safari" == $ && /\bChrome\b/.exec(O && O[1]) && (C.unshift("desktop mode"), ($ = "Chrome Mobile"), (A = null), (N = /\bOS X\b/.test(N) ? ((j = "Apple"), "iOS 4.3+") : null)),
                A && 0 == A.indexOf((r = /[\d.]+$/.exec(N))) && -1 < a.indexOf("/" + r + "-") && (N = z(N.replace(r, ""))),
                O &&
                    !/\b(?:Avant|Nook)\b/.test($) &&
                    (/Browser|Lunascape|Maxthon/.test($) || ("Safari" != $ && /^iOS/.test(N) && /\bSafari\b/.test(O[1])) || (/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test($) && O[1])) &&
                    (r = O[O.length - 1]) &&
                    C.push(r),
                C.length && (C = ["(" + C.join("; ") + ")"]),
                j && D && D.indexOf(j) < 0 && C.push("on " + j),
                D && C.push((/^on /.test(C[C.length - 1]) ? "" : "on ") + D),
                N &&
                    ((r = / ([\d.+]+)$/.exec(N)),
                    (s = r && "/" == N.charAt(N.length - r[0].length - 1)),
                    (N = {
                        architecture: 32,
                        family: r && !s ? N.replace(r[0], "") : N,
                        version: r ? r[1] : null,
                        toString: function () {
                            var e = this.version;
                            return this.family + (e && !s ? " " + e : "") + (64 == this.architecture ? " 64-bit" : "");
                        },
                    })),
                (r = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(k)) && !/\bi686\b/i.test(k)
                    ? (N && ((N.architecture = 64), (N.family = N.family.replace(RegExp(" *" + r), ""))),
                      $ && (/\bWOW64\b/i.test(a) || (_ && /\w(?:86|32)$/.test(i.cpuClass || i.platform) && !/\bWin64; x64\b/i.test(a))) && C.unshift("32-bit"))
                    : N && /^OS X/.test(N.family) && "Chrome" == $ && 39 <= parseFloat(A) && (N.architecture = 64),
                a || (a = null);
            var I = {};
            return (
                (I.description = a),
                (I.layout = O && O[0]),
                (I.manufacturer = j),
                (I.name = $),
                (I.prerelease = E),
                (I.product = D),
                (I.ua = a),
                (I.version = $ && A),
                (I.os = N || {
                    architecture: null,
                    family: null,
                    version: null,
                    toString: function () {
                        return "null";
                    },
                }),
                (I.parse = e),
                (I.toString = function () {
                    return this.description || "";
                }),
                I.version && C.unshift(A),
                I.name && C.unshift($),
                N && $ && (N != String(N).split(" ")[0] || (N != $.split(" ")[0] && !D)) && C.push(D ? "(" + N + ")" : "on " + N),
                C.length && (I.description = C.join(" ")),
                I
            );
        })();
        "function" == typeof define && "object" == typeof define.amd && define.amd
            ? ((M.platform = l),
              define(function () {
                  return l;
              }))
            : n && t
            ? R(l, function (e, t) {
                  n[t] = e;
              })
            : (M.platform = l);
    }.call(this),
    (function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? (module.exports = t(require("jquery"))) : "function" == typeof define && define.amd ? define(["jquery"], t) : ((e = e || self).Util = t(e.jQuery));
    })(this, function (r) {
        "use strict";
        r = r && r.hasOwnProperty("default") ? r.default : r;
        var t = "transitionend";
        function e(e) {
            var t = this,
                n = !1;
            return (
                r(this).one(l.TRANSITION_END, function () {
                    n = !0;
                }),
                setTimeout(function () {
                    n || l.triggerTransitionEnd(t);
                }, e),
                this
            );
        }
        var l = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function (e) {
                for (; (e += ~~(1e6 * Math.random())), document.getElementById(e); );
                return e;
            },
            getSelectorFromElement: function (e) {
                var t = e.getAttribute("data-target");
                if (!t || "#" === t) {
                    var n = e.getAttribute("href");
                    t = n && "#" !== n ? n.trim() : "";
                }
                try {
                    return document.querySelector(t) ? t : null;
                } catch (e) {
                    return null;
                }
            },
            getTransitionDurationFromElement: function (e) {
                if (!e) return 0;
                var t = r(e).css("transition-duration"),
                    n = r(e).css("transition-delay"),
                    i = parseFloat(t),
                    o = parseFloat(n);
                return i || o ? ((t = t.split(",")[0]), (n = n.split(",")[0]), 1e3 * (parseFloat(t) + parseFloat(n))) : 0;
            },
            reflow: function (e) {
                return e.offsetHeight;
            },
            triggerTransitionEnd: function (e) {
                r(e).trigger(t);
            },
            supportsTransitionEnd: function () {
                return Boolean(t);
            },
            isElement: function (e) {
                return (e[0] || e).nodeType;
            },
            typeCheckConfig: function (e, t, n) {
                for (var i in n)
                    if (Object.prototype.hasOwnProperty.call(n, i)) {
                        var o = n[i],
                            r = t[i],
                            s =
                                r && l.isElement(r)
                                    ? "element"
                                    : ((a = r),
                                      {}.toString
                                          .call(a)
                                          .match(/\s([a-z]+)/i)[1]
                                          .toLowerCase());
                        if (!new RegExp(o).test(s)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".');
                    }
                var a;
            },
            findShadowRoot: function (e) {
                if (!document.documentElement.attachShadow) return null;
                if ("function" != typeof e.getRootNode) return e instanceof ShadowRoot ? e : e.parentNode ? l.findShadowRoot(e.parentNode) : null;
                var t = e.getRootNode();
                return t instanceof ShadowRoot ? t : null;
            },
            jQueryDetection: function () {
                if (void 0 === r) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
                var e = r.fn.jquery.split(" ")[0].split(".");
                if ((e[0] < 2 && e[1] < 9) || (1 === e[0] && 9 === e[1] && e[2] < 1) || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
            },
        };
        return (
            l.jQueryDetection(),
            (r.fn.emulateTransitionEnd = e),
            (r.event.special[l.TRANSITION_END] = {
                bindType: t,
                delegateType: t,
                handle: function (e) {
                    if (r(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
                },
            }),
            l
        );
    }),
    (function (e, t) {
        "object" == typeof exports && "undefined" != typeof module
            ? (module.exports = t(require("jquery"), require("./util.js")))
            : "function" == typeof define && define.amd
            ? define(["jquery", "./util.js"], t)
            : ((e = e || self).Collapse = t(e.jQuery, e.Util));
    })(this, function (l, c) {
        "use strict";
        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
            }
        }
        function t(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e &&
                    (i = i.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })),
                    n.push.apply(n, i);
            }
            return n;
        }
        function r(o) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2
                    ? t(Object(r), !0).forEach(function (e) {
                          var t, n, i;
                          (t = o), (i = r[(n = e)]), n in t ? Object.defineProperty(t, n, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (t[n] = i);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r))
                    : t(Object(r)).forEach(function (e) {
                          Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(r, e));
                      });
            }
            return o;
        }
        (l = l && l.hasOwnProperty("default") ? l.default : l), (c = c && c.hasOwnProperty("default") ? c.default : c);
        var s = "collapse",
            d = "bs.collapse",
            e = "." + d,
            n = l.fn[s],
            u = { toggle: !0, parent: "" },
            p = { toggle: "boolean", parent: "(string|element)" },
            f = { SHOW: "show" + e, SHOWN: "shown" + e, HIDE: "hide" + e, HIDDEN: "hidden" + e, CLICK_DATA_API: "click" + e + ".data-api" },
            h = "show",
            g = "collapse",
            m = "collapsing",
            v = "collapsed",
            y = "width",
            b = "height",
            w = ".show, .collapsing",
            x = '[data-toggle="collapse"]',
            a = (function () {
                function a(t, e) {
                    (this._isTransitioning = !1),
                        (this._element = t),
                        (this._config = this._getConfig(e)),
                        (this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]')));
                    for (var n = [].slice.call(document.querySelectorAll(x)), i = 0, o = n.length; i < o; i++) {
                        var r = n[i],
                            s = c.getSelectorFromElement(r),
                            a = [].slice.call(document.querySelectorAll(s)).filter(function (e) {
                                return e === t;
                            });
                        null !== s && 0 < a.length && ((this._selector = s), this._triggerArray.push(r));
                    }
                    (this._parent = this._config.parent ? this._getParent() : null), this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
                }
                var e,
                    t,
                    n,
                    i = a.prototype;
                return (
                    (i.toggle = function () {
                        l(this._element).hasClass(h) ? this.hide() : this.show();
                    }),
                    (i.show = function () {
                        var e,
                            t,
                            n = this;
                        if (
                            !this._isTransitioning &&
                            !l(this._element).hasClass(h) &&
                            (this._parent &&
                                0 ===
                                    (e = [].slice.call(this._parent.querySelectorAll(w)).filter(function (e) {
                                        return "string" == typeof n._config.parent ? e.getAttribute("data-parent") === n._config.parent : e.classList.contains(g);
                                    })).length &&
                                (e = null),
                            !(e && (t = l(e).not(this._selector).data(d)) && t._isTransitioning))
                        ) {
                            var i = l.Event(f.SHOW);
                            if ((l(this._element).trigger(i), !i.isDefaultPrevented())) {
                                e && (a._jQueryInterface.call(l(e).not(this._selector), "hide"), t || l(e).data(d, null));
                                var o = this._getDimension();
                                l(this._element).removeClass(g).addClass(m), (this._element.style[o] = 0), this._triggerArray.length && l(this._triggerArray).removeClass(v).attr("aria-expanded", !0), this.setTransitioning(!0);
                                var r = "scroll" + (o[0].toUpperCase() + o.slice(1)),
                                    s = c.getTransitionDurationFromElement(this._element);
                                l(this._element)
                                    .one(c.TRANSITION_END, function () {
                                        l(n._element).removeClass(m).addClass(g).addClass(h), (n._element.style[o] = ""), n.setTransitioning(!1), l(n._element).trigger(f.SHOWN);
                                    })
                                    .emulateTransitionEnd(s),
                                    (this._element.style[o] = this._element[r] + "px");
                            }
                        }
                    }),
                    (i.hide = function () {
                        var e = this;
                        if (!this._isTransitioning && l(this._element).hasClass(h)) {
                            var t = l.Event(f.HIDE);
                            if ((l(this._element).trigger(t), !t.isDefaultPrevented())) {
                                var n = this._getDimension();
                                (this._element.style[n] = this._element.getBoundingClientRect()[n] + "px"), c.reflow(this._element), l(this._element).addClass(m).removeClass(g).removeClass(h);
                                var i = this._triggerArray.length;
                                if (0 < i)
                                    for (var o = 0; o < i; o++) {
                                        var r = this._triggerArray[o],
                                            s = c.getSelectorFromElement(r);
                                        if (null !== s) l([].slice.call(document.querySelectorAll(s))).hasClass(h) || l(r).addClass(v).attr("aria-expanded", !1);
                                    }
                                this.setTransitioning(!0);
                                this._element.style[n] = "";
                                var a = c.getTransitionDurationFromElement(this._element);
                                l(this._element)
                                    .one(c.TRANSITION_END, function () {
                                        e.setTransitioning(!1), l(e._element).removeClass(m).addClass(g).trigger(f.HIDDEN);
                                    })
                                    .emulateTransitionEnd(a);
                            }
                        }
                    }),
                    (i.setTransitioning = function (e) {
                        this._isTransitioning = e;
                    }),
                    (i.dispose = function () {
                        l.removeData(this._element, d), (this._config = null), (this._parent = null), (this._element = null), (this._triggerArray = null), (this._isTransitioning = null);
                    }),
                    (i._getConfig = function (e) {
                        return ((e = r({}, u, {}, e)).toggle = Boolean(e.toggle)), c.typeCheckConfig(s, e, p), e;
                    }),
                    (i._getDimension = function () {
                        return l(this._element).hasClass(y) ? y : b;
                    }),
                    (i._getParent = function () {
                        var e,
                            n = this;
                        c.isElement(this._config.parent) ? ((e = this._config.parent), void 0 !== this._config.parent.jquery && (e = this._config.parent[0])) : (e = document.querySelector(this._config.parent));
                        var t = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                            i = [].slice.call(e.querySelectorAll(t));
                        return (
                            l(i).each(function (e, t) {
                                n._addAriaAndCollapsedClass(a._getTargetFromElement(t), [t]);
                            }),
                            e
                        );
                    }),
                    (i._addAriaAndCollapsedClass = function (e, t) {
                        var n = l(e).hasClass(h);
                        t.length && l(t).toggleClass(v, !n).attr("aria-expanded", n);
                    }),
                    (a._getTargetFromElement = function (e) {
                        var t = c.getSelectorFromElement(e);
                        return t ? document.querySelector(t) : null;
                    }),
                    (a._jQueryInterface = function (i) {
                        return this.each(function () {
                            var e = l(this),
                                t = e.data(d),
                                n = r({}, u, {}, e.data(), {}, "object" == typeof i && i ? i : {});
                            if ((!t && n.toggle && /show|hide/.test(i) && (n.toggle = !1), t || ((t = new a(this, n)), e.data(d, t)), "string" == typeof i)) {
                                if (void 0 === t[i]) throw new TypeError('No method named "' + i + '"');
                                t[i]();
                            }
                        });
                    }),
                    (e = a),
                    (n = [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.4.1";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return u;
                            },
                        },
                    ]),
                    (t = null) && o(e.prototype, t),
                    n && o(e, n),
                    a
                );
            })();
        return (
            l(document).on(f.CLICK_DATA_API, x, function (e) {
                "A" === e.currentTarget.tagName && e.preventDefault();
                var n = l(this),
                    t = c.getSelectorFromElement(this),
                    i = [].slice.call(document.querySelectorAll(t));
                l(i).each(function () {
                    var e = l(this),
                        t = e.data(d) ? "toggle" : n.data();
                    a._jQueryInterface.call(e, t);
                });
            }),
            (l.fn[s] = a._jQueryInterface),
            (l.fn[s].Constructor = a),
            (l.fn[s].noConflict = function () {
                return (l.fn[s] = n), a._jQueryInterface;
            }),
            a
        );
    }),
    (function (e, t) {
        "object" == typeof exports && "undefined" != typeof module
            ? (module.exports = t(require("jquery"), require("./util.js")))
            : "function" == typeof define && define.amd
            ? define(["jquery", "./util.js"], t)
            : ((e = e || self).Modal = t(e.jQuery, e.Util));
    })(this, function (a, l) {
        "use strict";
        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
            }
        }
        function t(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                e &&
                    (i = i.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })),
                    n.push.apply(n, i);
            }
            return n;
        }
        function s(o) {
            for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2
                    ? t(Object(r), !0).forEach(function (e) {
                          var t, n, i;
                          (t = o), (i = r[(n = e)]), n in t ? Object.defineProperty(t, n, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (t[n] = i);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r))
                    : t(Object(r)).forEach(function (e) {
                          Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(r, e));
                      });
            }
            return o;
        }
        (a = a && a.hasOwnProperty("default") ? a.default : a), (l = l && l.hasOwnProperty("default") ? l.default : l);
        var c = "modal",
            d = "bs.modal",
            u = "." + d,
            e = a.fn[c],
            p = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
            f = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
            h = {
                HIDE: "hide" + u,
                HIDE_PREVENTED: "hidePrevented" + u,
                HIDDEN: "hidden" + u,
                SHOW: "show" + u,
                SHOWN: "shown" + u,
                FOCUSIN: "focusin" + u,
                RESIZE: "resize" + u,
                CLICK_DISMISS: "click.dismiss" + u,
                KEYDOWN_DISMISS: "keydown.dismiss" + u,
                MOUSEUP_DISMISS: "mouseup.dismiss" + u,
                MOUSEDOWN_DISMISS: "mousedown.dismiss" + u,
                CLICK_DATA_API: "click" + u + ".data-api",
            },
            g = "modal-dialog-scrollable",
            m = "modal-scrollbar-measure",
            v = "modal-backdrop",
            y = "modal-open",
            b = "fade",
            w = "show",
            x = "modal-static",
            S = ".modal-dialog",
            T = ".modal-body",
            n = '[data-toggle="modal"]',
            k = '[data-dismiss="modal"]',
            C = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            E = ".sticky-top",
            _ = (function () {
                function o(e, t) {
                    (this._config = this._getConfig(t)),
                        (this._element = e),
                        (this._dialog = e.querySelector(S)),
                        (this._backdrop = null),
                        (this._isShown = !1),
                        (this._isBodyOverflowing = !1),
                        (this._ignoreBackdropClick = !1),
                        (this._isTransitioning = !1),
                        (this._scrollbarWidth = 0);
                }
                var e,
                    t,
                    n,
                    i = o.prototype;
                return (
                    (i.toggle = function (e) {
                        return this._isShown ? this.hide() : this.show(e);
                    }),
                    (i.show = function (e) {
                        var t = this;
                        if (!this._isShown && !this._isTransitioning) {
                            a(this._element).hasClass(b) && (this._isTransitioning = !0);
                            var n = a.Event(h.SHOW, { relatedTarget: e });
                            a(this._element).trigger(n),
                                this._isShown ||
                                    n.isDefaultPrevented() ||
                                    ((this._isShown = !0),
                                    this._checkScrollbar(),
                                    this._setScrollbar(),
                                    this._adjustDialog(),
                                    this._setEscapeEvent(),
                                    this._setResizeEvent(),
                                    a(this._element).on(h.CLICK_DISMISS, k, function (e) {
                                        return t.hide(e);
                                    }),
                                    a(this._dialog).on(h.MOUSEDOWN_DISMISS, function () {
                                        a(t._element).one(h.MOUSEUP_DISMISS, function (e) {
                                            a(e.target).is(t._element) && (t._ignoreBackdropClick = !0);
                                        });
                                    }),
                                    this._showBackdrop(function () {
                                        return t._showElement(e);
                                    }));
                        }
                    }),
                    (i.hide = function (e) {
                        var t = this;
                        if ((e && e.preventDefault(), this._isShown && !this._isTransitioning)) {
                            var n = a.Event(h.HIDE);
                            if ((a(this._element).trigger(n), this._isShown && !n.isDefaultPrevented())) {
                                this._isShown = !1;
                                var i = a(this._element).hasClass(b);
                                if (
                                    (i && (this._isTransitioning = !0),
                                    this._setEscapeEvent(),
                                    this._setResizeEvent(),
                                    a(document).off(h.FOCUSIN),
                                    a(this._element).removeClass(w),
                                    a(this._element).off(h.CLICK_DISMISS),
                                    a(this._dialog).off(h.MOUSEDOWN_DISMISS),
                                    i)
                                ) {
                                    var o = l.getTransitionDurationFromElement(this._element);
                                    a(this._element)
                                        .one(l.TRANSITION_END, function (e) {
                                            return t._hideModal(e);
                                        })
                                        .emulateTransitionEnd(o);
                                } else this._hideModal();
                            }
                        }
                    }),
                    (i.dispose = function () {
                        [window, this._element, this._dialog].forEach(function (e) {
                            return a(e).off(u);
                        }),
                            a(document).off(h.FOCUSIN),
                            a.removeData(this._element, d),
                            (this._config = null),
                            (this._element = null),
                            (this._dialog = null),
                            (this._backdrop = null),
                            (this._isShown = null),
                            (this._isBodyOverflowing = null),
                            (this._ignoreBackdropClick = null),
                            (this._isTransitioning = null),
                            (this._scrollbarWidth = null);
                    }),
                    (i.handleUpdate = function () {
                        this._adjustDialog();
                    }),
                    (i._getConfig = function (e) {
                        return (e = s({}, p, {}, e)), l.typeCheckConfig(c, e, f), e;
                    }),
                    (i._triggerBackdropTransition = function () {
                        var e = this;
                        if ("static" === this._config.backdrop) {
                            var t = a.Event(h.HIDE_PREVENTED);
                            if ((a(this._element).trigger(t), t.defaultPrevented)) return;
                            this._element.classList.add(x);
                            var n = l.getTransitionDurationFromElement(this._element);
                            a(this._element)
                                .one(l.TRANSITION_END, function () {
                                    e._element.classList.remove(x);
                                })
                                .emulateTransitionEnd(n),
                                this._element.focus();
                        } else this.hide();
                    }),
                    (i._showElement = function (e) {
                        var t = this,
                            n = a(this._element).hasClass(b),
                            i = this._dialog ? this._dialog.querySelector(T) : null;
                        (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE) || document.body.appendChild(this._element),
                            (this._element.style.display = "block"),
                            this._element.removeAttribute("aria-hidden"),
                            this._element.setAttribute("aria-modal", !0),
                            a(this._dialog).hasClass(g) && i ? (i.scrollTop = 0) : (this._element.scrollTop = 0),
                            n && l.reflow(this._element),
                            a(this._element).addClass(w),
                            this._config.focus && this._enforceFocus();
                        var o = a.Event(h.SHOWN, { relatedTarget: e }),
                            r = function () {
                                t._config.focus && t._element.focus(), (t._isTransitioning = !1), a(t._element).trigger(o);
                            };
                        if (n) {
                            var s = l.getTransitionDurationFromElement(this._dialog);
                            a(this._dialog).one(l.TRANSITION_END, r).emulateTransitionEnd(s);
                        } else r();
                    }),
                    (i._enforceFocus = function () {
                        var t = this;
                        a(document)
                            .off(h.FOCUSIN)
                            .on(h.FOCUSIN, function (e) {
                                document !== e.target && t._element !== e.target && 0 === a(t._element).has(e.target).length && t._element.focus();
                            });
                    }),
                    (i._setEscapeEvent = function () {
                        var t = this;
                        this._isShown && this._config.keyboard
                            ? a(this._element).on(h.KEYDOWN_DISMISS, function (e) {
                                  27 === e.which && t._triggerBackdropTransition();
                              })
                            : this._isShown || a(this._element).off(h.KEYDOWN_DISMISS);
                    }),
                    (i._setResizeEvent = function () {
                        var t = this;
                        this._isShown
                            ? a(window).on(h.RESIZE, function (e) {
                                  return t.handleUpdate(e);
                              })
                            : a(window).off(h.RESIZE);
                    }),
                    (i._hideModal = function () {
                        var e = this;
                        (this._element.style.display = "none"),
                            this._element.setAttribute("aria-hidden", !0),
                            this._element.removeAttribute("aria-modal"),
                            (this._isTransitioning = !1),
                            this._showBackdrop(function () {
                                a(document.body).removeClass(y), e._resetAdjustments(), e._resetScrollbar(), a(e._element).trigger(h.HIDDEN);
                            });
                    }),
                    (i._removeBackdrop = function () {
                        this._backdrop && (a(this._backdrop).remove(), (this._backdrop = null));
                    }),
                    (i._showBackdrop = function (e) {
                        var t = this,
                            n = a(this._element).hasClass(b) ? b : "";
                        if (this._isShown && this._config.backdrop) {
                            if (
                                ((this._backdrop = document.createElement("div")),
                                (this._backdrop.className = v),
                                n && this._backdrop.classList.add(n),
                                a(this._backdrop).appendTo(document.body),
                                a(this._element).on(h.CLICK_DISMISS, function (e) {
                                    t._ignoreBackdropClick ? (t._ignoreBackdropClick = !1) : e.target === e.currentTarget && t._triggerBackdropTransition();
                                }),
                                n && l.reflow(this._backdrop),
                                a(this._backdrop).addClass(w),
                                !e)
                            )
                                return;
                            if (!n) return void e();
                            var i = l.getTransitionDurationFromElement(this._backdrop);
                            a(this._backdrop).one(l.TRANSITION_END, e).emulateTransitionEnd(i);
                        } else if (!this._isShown && this._backdrop) {
                            a(this._backdrop).removeClass(w);
                            var o = function () {
                                t._removeBackdrop(), e && e();
                            };
                            if (a(this._element).hasClass(b)) {
                                var r = l.getTransitionDurationFromElement(this._backdrop);
                                a(this._backdrop).one(l.TRANSITION_END, o).emulateTransitionEnd(r);
                            } else o();
                        } else e && e();
                    }),
                    (i._adjustDialog = function () {
                        var e = this._element.scrollHeight > document.documentElement.clientHeight;
                        !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px");
                    }),
                    (i._resetAdjustments = function () {
                        (this._element.style.paddingLeft = ""), (this._element.style.paddingRight = "");
                    }),
                    (i._checkScrollbar = function () {
                        var e = document.body.getBoundingClientRect();
                        (this._isBodyOverflowing = e.left + e.right < window.innerWidth), (this._scrollbarWidth = this._getScrollbarWidth());
                    }),
                    (i._setScrollbar = function () {
                        var o = this;
                        if (this._isBodyOverflowing) {
                            var e = [].slice.call(document.querySelectorAll(C)),
                                t = [].slice.call(document.querySelectorAll(E));
                            a(e).each(function (e, t) {
                                var n = t.style.paddingRight,
                                    i = a(t).css("padding-right");
                                a(t)
                                    .data("padding-right", n)
                                    .css("padding-right", parseFloat(i) + o._scrollbarWidth + "px");
                            }),
                                a(t).each(function (e, t) {
                                    var n = t.style.marginRight,
                                        i = a(t).css("margin-right");
                                    a(t)
                                        .data("margin-right", n)
                                        .css("margin-right", parseFloat(i) - o._scrollbarWidth + "px");
                                });
                            var n = document.body.style.paddingRight,
                                i = a(document.body).css("padding-right");
                            a(document.body)
                                .data("padding-right", n)
                                .css("padding-right", parseFloat(i) + this._scrollbarWidth + "px");
                        }
                        a(document.body).addClass(y);
                    }),
                    (i._resetScrollbar = function () {
                        var e = [].slice.call(document.querySelectorAll(C));
                        a(e).each(function (e, t) {
                            var n = a(t).data("padding-right");
                            a(t).removeData("padding-right"), (t.style.paddingRight = n || "");
                        });
                        var t = [].slice.call(document.querySelectorAll("" + E));
                        a(t).each(function (e, t) {
                            var n = a(t).data("margin-right");
                            void 0 !== n && a(t).css("margin-right", n).removeData("margin-right");
                        });
                        var n = a(document.body).data("padding-right");
                        a(document.body).removeData("padding-right"), (document.body.style.paddingRight = n || "");
                    }),
                    (i._getScrollbarWidth = function () {
                        var e = document.createElement("div");
                        (e.className = m), document.body.appendChild(e);
                        var t = e.getBoundingClientRect().width - e.clientWidth;
                        return document.body.removeChild(e), t;
                    }),
                    (o._jQueryInterface = function (n, i) {
                        return this.each(function () {
                            var e = a(this).data(d),
                                t = s({}, p, {}, a(this).data(), {}, "object" == typeof n && n ? n : {});
                            if ((e || ((e = new o(this, t)), a(this).data(d, e)), "string" == typeof n)) {
                                if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                                e[n](i);
                            } else t.show && e.show(i);
                        });
                    }),
                    (e = o),
                    (n = [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.4.1";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return p;
                            },
                        },
                    ]),
                    (t = null) && r(e.prototype, t),
                    n && r(e, n),
                    o
                );
            })();
        return (
            a(document).on(h.CLICK_DATA_API, n, function (e) {
                var t,
                    n = this,
                    i = l.getSelectorFromElement(this);
                i && (t = document.querySelector(i));
                var o = a(t).data(d) ? "toggle" : s({}, a(t).data(), {}, a(this).data());
                ("A" !== this.tagName && "AREA" !== this.tagName) || e.preventDefault();
                var r = a(t).one(h.SHOW, function (e) {
                    e.isDefaultPrevented() ||
                        r.one(h.HIDDEN, function () {
                            a(n).is(":visible") && n.focus();
                        });
                });
                _._jQueryInterface.call(a(t), o, this);
            }),
            (a.fn[c] = _._jQueryInterface),
            (a.fn[c].Constructor = _),
            (a.fn[c].noConflict = function () {
                return (a.fn[c] = e), _._jQueryInterface;
            }),
            _
        );
    }),
    (function (e, t) {
        "object" == typeof exports && "undefined" != typeof module
            ? (module.exports = t(require("jquery"), require("./util.js")))
            : "function" == typeof define && define.amd
            ? define(["jquery", "./util.js"], t)
            : ((e = e || self).Tab = t(e.jQuery, e.Util));
    })(this, function (c, d) {
        "use strict";
        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
            }
        }
        (c = c && c.hasOwnProperty("default") ? c.default : c), (d = d && d.hasOwnProperty("default") ? d.default : d);
        var s = "bs.tab",
            e = "." + s,
            t = c.fn.tab,
            u = { HIDE: "hide" + e, HIDDEN: "hidden" + e, SHOW: "show" + e, SHOWN: "shown" + e, CLICK_DATA_API: "click" + e + ".data-api" },
            a = "dropdown-menu",
            p = "active",
            f = "disabled",
            l = "fade",
            h = "show",
            g = ".dropdown",
            m = ".nav, .list-group",
            v = ".active",
            y = "> li > .active",
            n = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
            b = ".dropdown-toggle",
            w = "> .dropdown-menu .active",
            i = (function () {
                function i(e) {
                    this._element = e;
                }
                var e,
                    t,
                    n,
                    o = i.prototype;
                return (
                    (o.show = function () {
                        var n = this;
                        if (!((this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && c(this._element).hasClass(p)) || c(this._element).hasClass(f))) {
                            var e,
                                i,
                                t = c(this._element).closest(m)[0],
                                o = d.getSelectorFromElement(this._element);
                            if (t) {
                                var r = "UL" === t.nodeName || "OL" === t.nodeName ? y : v;
                                i = (i = c.makeArray(c(t).find(r)))[i.length - 1];
                            }
                            var s = c.Event(u.HIDE, { relatedTarget: this._element }),
                                a = c.Event(u.SHOW, { relatedTarget: i });
                            if ((i && c(i).trigger(s), c(this._element).trigger(a), !a.isDefaultPrevented() && !s.isDefaultPrevented())) {
                                o && (e = document.querySelector(o)), this._activate(this._element, t);
                                var l = function () {
                                    var e = c.Event(u.HIDDEN, { relatedTarget: n._element }),
                                        t = c.Event(u.SHOWN, { relatedTarget: i });
                                    c(i).trigger(e), c(n._element).trigger(t);
                                };
                                e ? this._activate(e, e.parentNode, l) : l();
                            }
                        }
                    }),
                    (o.dispose = function () {
                        c.removeData(this._element, s), (this._element = null);
                    }),
                    (o._activate = function (e, t, n) {
                        var i = this,
                            o = (!t || ("UL" !== t.nodeName && "OL" !== t.nodeName) ? c(t).children(v) : c(t).find(y))[0],
                            r = n && o && c(o).hasClass(l),
                            s = function () {
                                return i._transitionComplete(e, o, n);
                            };
                        if (o && r) {
                            var a = d.getTransitionDurationFromElement(o);
                            c(o).removeClass(h).one(d.TRANSITION_END, s).emulateTransitionEnd(a);
                        } else s();
                    }),
                    (o._transitionComplete = function (e, t, n) {
                        if (t) {
                            c(t).removeClass(p);
                            var i = c(t.parentNode).find(w)[0];
                            i && c(i).removeClass(p), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1);
                        }
                        if ((c(e).addClass(p), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), d.reflow(e), e.classList.contains(l) && e.classList.add(h), e.parentNode && c(e.parentNode).hasClass(a))) {
                            var o = c(e).closest(g)[0];
                            if (o) {
                                var r = [].slice.call(o.querySelectorAll(b));
                                c(r).addClass(p);
                            }
                            e.setAttribute("aria-expanded", !0);
                        }
                        n && n();
                    }),
                    (i._jQueryInterface = function (n) {
                        return this.each(function () {
                            var e = c(this),
                                t = e.data(s);
                            if ((t || ((t = new i(this)), e.data(s, t)), "string" == typeof n)) {
                                if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
                                t[n]();
                            }
                        });
                    }),
                    (e = i),
                    (n = [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.4.1";
                            },
                        },
                    ]),
                    (t = null) && r(e.prototype, t),
                    n && r(e, n),
                    i
                );
            })();
        return (
            c(document).on(u.CLICK_DATA_API, n, function (e) {
                e.preventDefault(), i._jQueryInterface.call(c(this), "show");
            }),
            (c.fn.tab = i._jQueryInterface),
            (c.fn.tab.Constructor = i),
            (c.fn.tab.noConflict = function () {
                return (c.fn.tab = t), i._jQueryInterface;
            }),
            i
        );
    }),
    (function (e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? (module.exports = e(require("jquery"))) : e(jQuery);
    })(function (l) {
        var i = -1,
            o = -1,
            c = function (e) {
                return parseFloat(e) || 0;
            },
            d = function (e) {
                var t = l(e),
                    i = null,
                    o = [];
                return (
                    t.each(function () {
                        var e = l(this),
                            t = e.offset().top - c(e.css("margin-top")),
                            n = 0 < o.length ? o[o.length - 1] : null;
                        null === n ? o.push(e) : Math.floor(Math.abs(i - t)) <= 1 ? (o[o.length - 1] = n.add(e)) : o.push(e), (i = t);
                    }),
                    o
                );
            },
            u = function (e) {
                var t = { byRow: !0, property: "height", target: null, remove: !1 };
                return "object" == typeof e ? l.extend(t, e) : ("boolean" == typeof e ? (t.byRow = e) : "remove" === e && (t.remove = !0), t);
            },
            p = (l.fn.matchHeight = function (e) {
                var t = u(e);
                if (t.remove) {
                    var n = this;
                    return (
                        this.css(t.property, ""),
                        l.each(p._groups, function (e, t) {
                            t.elements = t.elements.not(n);
                        }),
                        this
                    );
                }
                return (this.length <= 1 && !t.target) || (p._groups.push({ elements: this, options: t }), p._apply(this, t)), this;
            });
        (p.version = "0.7.2"),
            (p._groups = []),
            (p._throttle = 80),
            (p._maintainScroll = !1),
            (p._beforeUpdate = null),
            (p._afterUpdate = null),
            (p._rows = d),
            (p._parse = c),
            (p._parseOptions = u),
            (p._apply = function (e, t) {
                var r = u(t),
                    n = l(e),
                    i = [n],
                    o = l(window).scrollTop(),
                    s = l("html").outerHeight(!0),
                    a = n.parents().filter(":hidden");
                return (
                    a.each(function () {
                        var e = l(this);
                        e.data("style-cache", e.attr("style"));
                    }),
                    a.css("display", "block"),
                    r.byRow &&
                        !r.target &&
                        (n.each(function () {
                            var e = l(this),
                                t = e.css("display");
                            "inline-block" !== t && "flex" !== t && "inline-flex" !== t && (t = "block"),
                                e.data("style-cache", e.attr("style")),
                                e.css({ display: t, "padding-top": "0", "padding-bottom": "0", "margin-top": "0", "margin-bottom": "0", "border-top-width": "0", "border-bottom-width": "0", height: "100px", overflow: "hidden" });
                        }),
                        (i = d(n)),
                        n.each(function () {
                            var e = l(this);
                            e.attr("style", e.data("style-cache") || "");
                        })),
                    l.each(i, function (e, t) {
                        var n = l(t),
                            o = 0;
                        if (r.target) o = r.target.outerHeight(!1);
                        else {
                            if (r.byRow && n.length <= 1) return void n.css(r.property, "");
                            n.each(function () {
                                var e = l(this),
                                    t = e.attr("style"),
                                    n = e.css("display");
                                "inline-block" !== n && "flex" !== n && "inline-flex" !== n && (n = "block");
                                var i = { display: n };
                                (i[r.property] = ""), e.css(i), e.outerHeight(!1) > o && (o = e.outerHeight(!1)), t ? e.attr("style", t) : e.css("display", "");
                            });
                        }
                        n.each(function () {
                            var e = l(this),
                                t = 0;
                            (r.target && e.is(r.target)) ||
                                ("border-box" !== e.css("box-sizing") && ((t += c(e.css("border-top-width")) + c(e.css("border-bottom-width"))), (t += c(e.css("padding-top")) + c(e.css("padding-bottom")))), e.css(r.property, o - t + "px"));
                        });
                    }),
                    a.each(function () {
                        var e = l(this);
                        e.attr("style", e.data("style-cache") || null);
                    }),
                    p._maintainScroll && l(window).scrollTop((o / s) * l("html").outerHeight(!0)),
                    this
                );
            }),
            (p._applyDataApi = function () {
                var n = {};
                l("[data-match-height], [data-mh]").each(function () {
                    var e = l(this),
                        t = e.attr("data-mh") || e.attr("data-match-height");
                    n[t] = t in n ? n[t].add(e) : e;
                }),
                    l.each(n, function () {
                        this.matchHeight(!0);
                    });
            });
        var r = function (e) {
            p._beforeUpdate && p._beforeUpdate(e, p._groups),
                l.each(p._groups, function () {
                    p._apply(this.elements, this.options);
                }),
                p._afterUpdate && p._afterUpdate(e, p._groups);
        };
        (p._update = function (e, t) {
            if (t && "resize" === t.type) {
                var n = l(window).width();
                if (n === i) return;
                i = n;
            }
            e
                ? -1 === o &&
                  (o = setTimeout(function () {
                      r(t), (o = -1);
                  }, p._throttle))
                : r(t);
        }),
            l(p._applyDataApi);
        var e = l.fn.on ? "on" : "bind";
        l(window)[e]("load", function (e) {
            p._update(!1, e);
        }),
            l(window)[e]("resize orientationchange", function (e) {
                p._update(!0, e);
            });
    }),
    (function (e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? (module.exports = e(require("jquery"))) : e(jQuery);
    })(function (c) {
        "use strict";
        var o,
            s = window.Slick || {};
        (o = 0),
            ((s = function (e, t) {
                var n,
                    i = this;
                (i.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: c(e),
                    appendDots: c(e),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function (e, t) {
                        return c('<button type="button" />').text(t + 1);
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: 0.35,
                    fade: !1,
                    focusOnSelect: !1,
                    focusOnChange: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3,
                }),
                    (i.initials = {
                        animating: !1,
                        dragging: !1,
                        autoPlayTimer: null,
                        currentDirection: 0,
                        currentLeft: null,
                        currentSlide: 0,
                        direction: 1,
                        $dots: null,
                        listWidth: null,
                        listHeight: null,
                        loadIndex: 0,
                        $nextArrow: null,
                        $prevArrow: null,
                        scrolling: !1,
                        slideCount: null,
                        slideWidth: null,
                        $slideTrack: null,
                        $slides: null,
                        sliding: !1,
                        slideOffset: 0,
                        swipeLeft: null,
                        swiping: !1,
                        $list: null,
                        touchObject: {},
                        transformsEnabled: !1,
                        unslicked: !1,
                    }),
                    c.extend(i, i.initials),
                    (i.activeBreakpoint = null),
                    (i.animType = null),
                    (i.animProp = null),
                    (i.breakpoints = []),
                    (i.breakpointSettings = []),
                    (i.cssTransitions = !1),
                    (i.focussed = !1),
                    (i.interrupted = !1),
                    (i.hidden = "hidden"),
                    (i.paused = !0),
                    (i.positionProp = null),
                    (i.respondTo = null),
                    (i.rowCount = 1),
                    (i.shouldClick = !0),
                    (i.$slider = c(e)),
                    (i.$slidesCache = null),
                    (i.transformType = null),
                    (i.transitionType = null),
                    (i.visibilityChange = "visibilitychange"),
                    (i.windowWidth = 0),
                    (i.windowTimer = null),
                    (n = c(e).data("slick") || {}),
                    (i.options = c.extend({}, i.defaults, t, n)),
                    (i.currentSlide = i.options.initialSlide),
                    (i.originalSettings = i.options),
                    void 0 !== document.mozHidden
                        ? ((i.hidden = "mozHidden"), (i.visibilityChange = "mozvisibilitychange"))
                        : void 0 !== document.webkitHidden && ((i.hidden = "webkitHidden"), (i.visibilityChange = "webkitvisibilitychange")),
                    (i.autoPlay = c.proxy(i.autoPlay, i)),
                    (i.autoPlayClear = c.proxy(i.autoPlayClear, i)),
                    (i.autoPlayIterator = c.proxy(i.autoPlayIterator, i)),
                    (i.changeSlide = c.proxy(i.changeSlide, i)),
                    (i.clickHandler = c.proxy(i.clickHandler, i)),
                    (i.selectHandler = c.proxy(i.selectHandler, i)),
                    (i.setPosition = c.proxy(i.setPosition, i)),
                    (i.swipeHandler = c.proxy(i.swipeHandler, i)),
                    (i.dragHandler = c.proxy(i.dragHandler, i)),
                    (i.keyHandler = c.proxy(i.keyHandler, i)),
                    (i.instanceUid = o++),
                    (i.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
                    i.registerBreakpoints(),
                    i.init(!0);
            }).prototype.activateADA = function () {
                this.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" });
            }),
            (s.prototype.addSlide = s.prototype.slickAdd = function (e, t, n) {
                var i = this;
                if ("boolean" == typeof t) (n = t), (t = null);
                else if (t < 0 || t >= i.slideCount) return !1;
                i.unload(),
                    "number" == typeof t
                        ? 0 === t && 0 === i.$slides.length
                            ? c(e).appendTo(i.$slideTrack)
                            : n
                            ? c(e).insertBefore(i.$slides.eq(t))
                            : c(e).insertAfter(i.$slides.eq(t))
                        : !0 === n
                        ? c(e).prependTo(i.$slideTrack)
                        : c(e).appendTo(i.$slideTrack),
                    (i.$slides = i.$slideTrack.children(this.options.slide)),
                    i.$slideTrack.children(this.options.slide).detach(),
                    i.$slideTrack.append(i.$slides),
                    i.$slides.each(function (e, t) {
                        c(t).attr("data-slick-index", e);
                    }),
                    (i.$slidesCache = i.$slides),
                    i.reinit();
            }),
            (s.prototype.animateHeight = function () {
                var e = this;
                if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                    var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                    e.$list.animate({ height: t }, e.options.speed);
                }
            }),
            (s.prototype.animateSlide = function (e, t) {
                var n = {},
                    i = this;
                i.animateHeight(),
                    !0 === i.options.rtl && !1 === i.options.vertical && (e = -e),
                    !1 === i.transformsEnabled
                        ? !1 === i.options.vertical
                            ? i.$slideTrack.animate({ left: e }, i.options.speed, i.options.easing, t)
                            : i.$slideTrack.animate({ top: e }, i.options.speed, i.options.easing, t)
                        : !1 === i.cssTransitions
                        ? (!0 === i.options.rtl && (i.currentLeft = -i.currentLeft),
                          c({ animStart: i.currentLeft }).animate(
                              { animStart: e },
                              {
                                  duration: i.options.speed,
                                  easing: i.options.easing,
                                  step: function (e) {
                                      (e = Math.ceil(e)), !1 === i.options.vertical ? (n[i.animType] = "translate(" + e + "px, 0px)") : (n[i.animType] = "translate(0px," + e + "px)"), i.$slideTrack.css(n);
                                  },
                                  complete: function () {
                                      t && t.call();
                                  },
                              }
                          ))
                        : (i.applyTransition(),
                          (e = Math.ceil(e)),
                          !1 === i.options.vertical ? (n[i.animType] = "translate3d(" + e + "px, 0px, 0px)") : (n[i.animType] = "translate3d(0px," + e + "px, 0px)"),
                          i.$slideTrack.css(n),
                          t &&
                              setTimeout(function () {
                                  i.disableTransition(), t.call();
                              }, i.options.speed));
            }),
            (s.prototype.getNavTarget = function () {
                var e = this.options.asNavFor;
                return e && null !== e && (e = c(e).not(this.$slider)), e;
            }),
            (s.prototype.asNavFor = function (t) {
                var e = this.getNavTarget();
                null !== e &&
                    "object" == typeof e &&
                    e.each(function () {
                        var e = c(this).slick("getSlick");
                        e.unslicked || e.slideHandler(t, !0);
                    });
            }),
            (s.prototype.applyTransition = function (e) {
                var t = this,
                    n = {};
                !1 === t.options.fade ? (n[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase) : (n[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase),
                    !1 === t.options.fade ? t.$slideTrack.css(n) : t.$slides.eq(e).css(n);
            }),
            (s.prototype.autoPlay = function () {
                var e = this;
                e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed));
            }),
            (s.prototype.autoPlayClear = function () {
                this.autoPlayTimer && clearInterval(this.autoPlayTimer);
            }),
            (s.prototype.autoPlayIterator = function () {
                var e = this,
                    t = e.currentSlide + e.options.slidesToScroll;
                e.paused ||
                    e.interrupted ||
                    e.focussed ||
                    (!1 === e.options.infinite &&
                        (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? (e.direction = 0) : 0 === e.direction && ((t = e.currentSlide - e.options.slidesToScroll), e.currentSlide - 1 == 0 && (e.direction = 1))),
                    e.slideHandler(t));
            }),
            (s.prototype.buildArrows = function () {
                var e = this;
                !0 === e.options.arrows &&
                    ((e.$prevArrow = c(e.options.prevArrow).addClass("slick-arrow")),
                    (e.$nextArrow = c(e.options.nextArrow).addClass("slick-arrow")),
                    e.slideCount > e.options.slidesToShow
                        ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                          e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                          e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows),
                          e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
                          !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"))
                        : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }));
            }),
            (s.prototype.buildDots = function () {
                var e,
                    t,
                    n = this;
                if (!0 === n.options.dots && n.slideCount > n.options.slidesToShow) {
                    for (n.$slider.addClass("slick-dotted"), t = c("<ul />").addClass(n.options.dotsClass), e = 0; e <= n.getDotCount(); e += 1) t.append(c("<li />").append(n.options.customPaging.call(this, n, e)));
                    (n.$dots = t.appendTo(n.options.appendDots)), n.$dots.find("li").first().addClass("slick-active");
                }
            }),
            (s.prototype.buildOut = function () {
                var e = this;
                (e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide")),
                    (e.slideCount = e.$slides.length),
                    e.$slides.each(function (e, t) {
                        c(t)
                            .attr("data-slick-index", e)
                            .data("originalStyling", c(t).attr("style") || "");
                    }),
                    e.$slider.addClass("slick-slider"),
                    (e.$slideTrack = 0 === e.slideCount ? c('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
                    (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
                    e.$slideTrack.css("opacity", 0),
                    (!0 !== e.options.centerMode && !0 !== e.options.swipeToSlide) || (e.options.slidesToScroll = 1),
                    c("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
                    e.setupInfinite(),
                    e.buildArrows(),
                    e.buildDots(),
                    e.updateDots(),
                    e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
                    !0 === e.options.draggable && e.$list.addClass("draggable");
            }),
            (s.prototype.buildRows = function () {
                var e,
                    t,
                    n,
                    i,
                    o,
                    r,
                    s,
                    a = this;
                if (((i = document.createDocumentFragment()), (r = a.$slider.children()), 0 < a.options.rows)) {
                    for (s = a.options.slidesPerRow * a.options.rows, o = Math.ceil(r.length / s), e = 0; e < o; e++) {
                        var l = document.createElement("div");
                        for (t = 0; t < a.options.rows; t++) {
                            var c = document.createElement("div");
                            for (n = 0; n < a.options.slidesPerRow; n++) {
                                var d = e * s + (t * a.options.slidesPerRow + n);
                                r.get(d) && c.appendChild(r.get(d));
                            }
                            l.appendChild(c);
                        }
                        i.appendChild(l);
                    }
                    a.$slider.empty().append(i),
                        a.$slider
                            .children()
                            .children()
                            .children()
                            .css({ width: 100 / a.options.slidesPerRow + "%", display: "inline-block" });
                }
            }),
            (s.prototype.checkResponsive = function (e, t) {
                var n,
                    i,
                    o,
                    r = this,
                    s = !1,
                    a = r.$slider.width(),
                    l = window.innerWidth || c(window).width();
                if (("window" === r.respondTo ? (o = l) : "slider" === r.respondTo ? (o = a) : "min" === r.respondTo && (o = Math.min(l, a)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive)) {
                    for (n in ((i = null), r.breakpoints)) r.breakpoints.hasOwnProperty(n) && (!1 === r.originalSettings.mobileFirst ? o < r.breakpoints[n] && (i = r.breakpoints[n]) : o > r.breakpoints[n] && (i = r.breakpoints[n]));
                    null !== i
                        ? null !== r.activeBreakpoint
                            ? (i !== r.activeBreakpoint || t) &&
                              ((r.activeBreakpoint = i),
                              "unslick" === r.breakpointSettings[i] ? r.unslick(i) : ((r.options = c.extend({}, r.originalSettings, r.breakpointSettings[i])), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)),
                              (s = i))
                            : ((r.activeBreakpoint = i),
                              "unslick" === r.breakpointSettings[i] ? r.unslick(i) : ((r.options = c.extend({}, r.originalSettings, r.breakpointSettings[i])), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)),
                              (s = i))
                        : null !== r.activeBreakpoint && ((r.activeBreakpoint = null), (r.options = r.originalSettings), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), (s = i)),
                        e || !1 === s || r.$slider.trigger("breakpoint", [r, s]);
                }
            }),
            (s.prototype.changeSlide = function (e, t) {
                var n,
                    i,
                    o = this,
                    r = c(e.currentTarget);
                switch ((r.is("a") && e.preventDefault(), r.is("li") || (r = r.closest("li")), (n = o.slideCount % o.options.slidesToScroll != 0 ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll), e.data.message)) {
                    case "previous":
                        (i = 0 === n ? o.options.slidesToScroll : o.options.slidesToShow - n), o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - i, !1, t);
                        break;
                    case "next":
                        (i = 0 === n ? o.options.slidesToScroll : n), o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + i, !1, t);
                        break;
                    case "index":
                        var s = 0 === e.data.index ? 0 : e.data.index || r.index() * o.options.slidesToScroll;
                        o.slideHandler(o.checkNavigable(s), !1, t), r.children().trigger("focus");
                        break;
                    default:
                        return;
                }
            }),
            (s.prototype.checkNavigable = function (e) {
                var t, n;
                if (((n = 0), e > (t = this.getNavigableIndexes())[t.length - 1])) e = t[t.length - 1];
                else
                    for (var i in t) {
                        if (e < t[i]) {
                            e = n;
                            break;
                        }
                        n = t[i];
                    }
                return e;
            }),
            (s.prototype.cleanUpEvents = function () {
                var e = this;
                e.options.dots &&
                    null !== e.$dots &&
                    (c("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", c.proxy(e.interrupt, e, !0)).off("mouseleave.slick", c.proxy(e.interrupt, e, !1)),
                    !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)),
                    e.$slider.off("focus.slick blur.slick"),
                    !0 === e.options.arrows &&
                        e.slideCount > e.options.slidesToShow &&
                        (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
                        e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
                        !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
                    e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
                    e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
                    e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
                    e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
                    e.$list.off("click.slick", e.clickHandler),
                    c(document).off(e.visibilityChange, e.visibility),
                    e.cleanUpSlideEvents(),
                    !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler),
                    !0 === e.options.focusOnSelect && c(e.$slideTrack).children().off("click.slick", e.selectHandler),
                    c(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange),
                    c(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
                    c("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault),
                    c(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
            }),
            (s.prototype.cleanUpSlideEvents = function () {
                var e = this;
                e.$list.off("mouseenter.slick", c.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", c.proxy(e.interrupt, e, !1));
            }),
            (s.prototype.cleanUpRows = function () {
                var e;
                0 < this.options.rows && ((e = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(e));
            }),
            (s.prototype.clickHandler = function (e) {
                !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault());
            }),
            (s.prototype.destroy = function (e) {
                var t = this;
                t.autoPlayClear(),
                    (t.touchObject = {}),
                    t.cleanUpEvents(),
                    c(".slick-cloned", t.$slider).detach(),
                    t.$dots && t.$dots.remove(),
                    t.$prevArrow &&
                        t.$prevArrow.length &&
                        (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
                    t.$nextArrow &&
                        t.$nextArrow.length &&
                        (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
                    t.$slides &&
                        (t.$slides
                            .removeClass("slick-slide slick-active slick-center slick-visible slick-current")
                            .removeAttr("aria-hidden")
                            .removeAttr("data-slick-index")
                            .each(function () {
                                c(this).attr("style", c(this).data("originalStyling"));
                            }),
                        t.$slideTrack.children(this.options.slide).detach(),
                        t.$slideTrack.detach(),
                        t.$list.detach(),
                        t.$slider.append(t.$slides)),
                    t.cleanUpRows(),
                    t.$slider.removeClass("slick-slider"),
                    t.$slider.removeClass("slick-initialized"),
                    t.$slider.removeClass("slick-dotted"),
                    (t.unslicked = !0),
                    e || t.$slider.trigger("destroy", [t]);
            }),
            (s.prototype.disableTransition = function (e) {
                var t = {};
                (t[this.transitionType] = ""), !1 === this.options.fade ? this.$slideTrack.css(t) : this.$slides.eq(e).css(t);
            }),
            (s.prototype.fadeSlide = function (e, t) {
                var n = this;
                !1 === n.cssTransitions
                    ? (n.$slides.eq(e).css({ zIndex: n.options.zIndex }), n.$slides.eq(e).animate({ opacity: 1 }, n.options.speed, n.options.easing, t))
                    : (n.applyTransition(e),
                      n.$slides.eq(e).css({ opacity: 1, zIndex: n.options.zIndex }),
                      t &&
                          setTimeout(function () {
                              n.disableTransition(e), t.call();
                          }, n.options.speed));
            }),
            (s.prototype.fadeSlideOut = function (e) {
                var t = this;
                !1 === t.cssTransitions ? t.$slides.eq(e).animate({ opacity: 0, zIndex: t.options.zIndex - 2 }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({ opacity: 0, zIndex: t.options.zIndex - 2 }));
            }),
            (s.prototype.filterSlides = s.prototype.slickFilter = function (e) {
                var t = this;
                null !== e && ((t.$slidesCache = t.$slides), t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit());
            }),
            (s.prototype.focusHandler = function () {
                var n = this;
                n.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (e) {
                    e.stopImmediatePropagation();
                    var t = c(this);
                    setTimeout(function () {
                        n.options.pauseOnFocus && ((n.focussed = t.is(":focus")), n.autoPlay());
                    }, 0);
                });
            }),
            (s.prototype.getCurrent = s.prototype.slickCurrentSlide = function () {
                return this.currentSlide;
            }),
            (s.prototype.getDotCount = function () {
                var e = this,
                    t = 0,
                    n = 0,
                    i = 0;
                if (!0 === e.options.infinite)
                    if (e.slideCount <= e.options.slidesToShow) ++i;
                    else for (; t < e.slideCount; ) ++i, (t = n + e.options.slidesToScroll), (n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow);
                else if (!0 === e.options.centerMode) i = e.slideCount;
                else if (e.options.asNavFor) for (; t < e.slideCount; ) ++i, (t = n + e.options.slidesToScroll), (n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow);
                else i = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
                return i - 1;
            }),
            (s.prototype.getLeft = function (e) {
                var t,
                    n,
                    i,
                    o,
                    r = this,
                    s = 0;
                return (
                    (r.slideOffset = 0),
                    (n = r.$slides.first().outerHeight(!0)),
                    !0 === r.options.infinite
                        ? (r.slideCount > r.options.slidesToShow &&
                              ((r.slideOffset = r.slideWidth * r.options.slidesToShow * -1),
                              (o = -1),
                              !0 === r.options.vertical && !0 === r.options.centerMode && (2 === r.options.slidesToShow ? (o = -1.5) : 1 === r.options.slidesToShow && (o = -2)),
                              (s = n * r.options.slidesToShow * o)),
                          r.slideCount % r.options.slidesToScroll != 0 &&
                              e + r.options.slidesToScroll > r.slideCount &&
                              r.slideCount > r.options.slidesToShow &&
                              (s =
                                  e > r.slideCount
                                      ? ((r.slideOffset = (r.options.slidesToShow - (e - r.slideCount)) * r.slideWidth * -1), (r.options.slidesToShow - (e - r.slideCount)) * n * -1)
                                      : ((r.slideOffset = (r.slideCount % r.options.slidesToScroll) * r.slideWidth * -1), (r.slideCount % r.options.slidesToScroll) * n * -1)))
                        : e + r.options.slidesToShow > r.slideCount && ((r.slideOffset = (e + r.options.slidesToShow - r.slideCount) * r.slideWidth), (s = (e + r.options.slidesToShow - r.slideCount) * n)),
                    r.slideCount <= r.options.slidesToShow && (s = r.slideOffset = 0),
                    !0 === r.options.centerMode && r.slideCount <= r.options.slidesToShow
                        ? (r.slideOffset = (r.slideWidth * Math.floor(r.options.slidesToShow)) / 2 - (r.slideWidth * r.slideCount) / 2)
                        : !0 === r.options.centerMode && !0 === r.options.infinite
                        ? (r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth)
                        : !0 === r.options.centerMode && ((r.slideOffset = 0), (r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2))),
                    (t = !1 === r.options.vertical ? e * r.slideWidth * -1 + r.slideOffset : e * n * -1 + s),
                    !0 === r.options.variableWidth &&
                        ((i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow)),
                        (t = !0 === r.options.rtl ? (i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0) : i[0] ? -1 * i[0].offsetLeft : 0),
                        !0 === r.options.centerMode &&
                            ((i = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow + 1)),
                            (t = !0 === r.options.rtl ? (i[0] ? -1 * (r.$slideTrack.width() - i[0].offsetLeft - i.width()) : 0) : i[0] ? -1 * i[0].offsetLeft : 0),
                            (t += (r.$list.width() - i.outerWidth()) / 2))),
                    t
                );
            }),
            (s.prototype.getOption = s.prototype.slickGetOption = function (e) {
                return this.options[e];
            }),
            (s.prototype.getNavigableIndexes = function () {
                var e,
                    t = this,
                    n = 0,
                    i = 0,
                    o = [];
                for (e = !1 === t.options.infinite ? t.slideCount : ((n = -1 * t.options.slidesToScroll), (i = -1 * t.options.slidesToScroll), 2 * t.slideCount); n < e; )
                    o.push(n), (n = i + t.options.slidesToScroll), (i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow);
                return o;
            }),
            (s.prototype.getSlick = function () {
                return this;
            }),
            (s.prototype.getSlideCount = function () {
                var n,
                    i,
                    o = this;
                return (
                    (i = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0),
                    !0 === o.options.swipeToSlide
                        ? (o.$slideTrack.find(".slick-slide").each(function (e, t) {
                              if (t.offsetLeft - i + c(t).outerWidth() / 2 > -1 * o.swipeLeft) return (n = t), !1;
                          }),
                          Math.abs(c(n).attr("data-slick-index") - o.currentSlide) || 1)
                        : o.options.slidesToScroll
                );
            }),
            (s.prototype.goTo = s.prototype.slickGoTo = function (e, t) {
                this.changeSlide({ data: { message: "index", index: parseInt(e) } }, t);
            }),
            (s.prototype.init = function (e) {
                var t = this;
                c(t.$slider).hasClass("slick-initialized") ||
                    (c(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()),
                    e && t.$slider.trigger("init", [t]),
                    !0 === t.options.accessibility && t.initADA(),
                    t.options.autoplay && ((t.paused = !1), t.autoPlay());
            }),
            (s.prototype.initADA = function () {
                var i = this,
                    n = Math.ceil(i.slideCount / i.options.slidesToShow),
                    o = i.getNavigableIndexes().filter(function (e) {
                        return 0 <= e && e < i.slideCount;
                    });
                i.$slides.add(i.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }),
                    null !== i.$dots &&
                        (i.$slides.not(i.$slideTrack.find(".slick-cloned")).each(function (e) {
                            var t = o.indexOf(e);
                            if ((c(this).attr({ role: "tabpanel", id: "slick-slide" + i.instanceUid + e, tabindex: -1 }), -1 !== t)) {
                                var n = "slick-slide-control" + i.instanceUid + t;
                                c("#" + n).length && c(this).attr({ "aria-describedby": n });
                            }
                        }),
                        i.$dots
                            .attr("role", "tablist")
                            .find("li")
                            .each(function (e) {
                                var t = o[e];
                                c(this).attr({ role: "presentation" }),
                                    c(this)
                                        .find("button")
                                        .first()
                                        .attr({ role: "tab", id: "slick-slide-control" + i.instanceUid + e, "aria-controls": "slick-slide" + i.instanceUid + t, "aria-label": e + 1 + " of " + n, "aria-selected": null, tabindex: "-1" });
                            })
                            .eq(i.currentSlide)
                            .find("button")
                            .attr({ "aria-selected": "true", tabindex: "0" })
                            .end());
                for (var e = i.currentSlide, t = e + i.options.slidesToShow; e < t; e++) i.options.focusOnChange ? i.$slides.eq(e).attr({ tabindex: "0" }) : i.$slides.eq(e).removeAttr("tabindex");
                i.activateADA();
            }),
            (s.prototype.initArrowEvents = function () {
                var e = this;
                !0 === e.options.arrows &&
                    e.slideCount > e.options.slidesToShow &&
                    (e.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, e.changeSlide),
                    e.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, e.changeSlide),
                    !0 === e.options.accessibility && (e.$prevArrow.on("keydown.slick", e.keyHandler), e.$nextArrow.on("keydown.slick", e.keyHandler)));
            }),
            (s.prototype.initDotEvents = function () {
                var e = this;
                !0 === e.options.dots && e.slideCount > e.options.slidesToShow && (c("li", e.$dots).on("click.slick", { message: "index" }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)),
                    !0 === e.options.dots &&
                        !0 === e.options.pauseOnDotsHover &&
                        e.slideCount > e.options.slidesToShow &&
                        c("li", e.$dots).on("mouseenter.slick", c.proxy(e.interrupt, e, !0)).on("mouseleave.slick", c.proxy(e.interrupt, e, !1));
            }),
            (s.prototype.initSlideEvents = function () {
                var e = this;
                e.options.pauseOnHover && (e.$list.on("mouseenter.slick", c.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", c.proxy(e.interrupt, e, !1)));
            }),
            (s.prototype.initializeEvents = function () {
                var e = this;
                e.initArrowEvents(),
                    e.initDotEvents(),
                    e.initSlideEvents(),
                    e.$list.on("touchstart.slick mousedown.slick", { action: "start" }, e.swipeHandler),
                    e.$list.on("touchmove.slick mousemove.slick", { action: "move" }, e.swipeHandler),
                    e.$list.on("touchend.slick mouseup.slick", { action: "end" }, e.swipeHandler),
                    e.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, e.swipeHandler),
                    e.$list.on("click.slick", e.clickHandler),
                    c(document).on(e.visibilityChange, c.proxy(e.visibility, e)),
                    !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler),
                    !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler),
                    c(window).on("orientationchange.slick.slick-" + e.instanceUid, c.proxy(e.orientationChange, e)),
                    c(window).on("resize.slick.slick-" + e.instanceUid, c.proxy(e.resize, e)),
                    c("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
                    c(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
                    c(e.setPosition);
            }),
            (s.prototype.initUI = function () {
                var e = this;
                !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show();
            }),
            (s.prototype.keyHandler = function (e) {
                var t = this;
                e.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
                    (37 === e.keyCode && !0 === t.options.accessibility
                        ? t.changeSlide({ data: { message: !0 === t.options.rtl ? "next" : "previous" } })
                        : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({ data: { message: !0 === t.options.rtl ? "previous" : "next" } }));
            }),
            (s.prototype.lazyLoad = function () {
                var e,
                    t,
                    n,
                    r = this;
                function i(e) {
                    c("img[data-lazy]", e).each(function () {
                        var e = c(this),
                            t = c(this).attr("data-lazy"),
                            n = c(this).attr("data-srcset"),
                            i = c(this).attr("data-sizes") || r.$slider.attr("data-sizes"),
                            o = document.createElement("img");
                        (o.onload = function () {
                            e.animate({ opacity: 0 }, 100, function () {
                                n && (e.attr("srcset", n), i && e.attr("sizes", i)),
                                    e.attr("src", t).animate({ opacity: 1 }, 200, function () {
                                        e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
                                    }),
                                    r.$slider.trigger("lazyLoaded", [r, e, t]);
                            });
                        }),
                            (o.onerror = function () {
                                e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, e, t]);
                            }),
                            (o.src = t);
                    });
                }
                if (
                    (!0 === r.options.centerMode
                        ? (n =
                              !0 === r.options.infinite
                                  ? (t = r.currentSlide + (r.options.slidesToShow / 2 + 1)) + r.options.slidesToShow + 2
                                  : ((t = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1))), r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide))
                        : ((t = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide), (n = Math.ceil(t + r.options.slidesToShow)), !0 === r.options.fade && (0 < t && t--, n <= r.slideCount && n++)),
                    (e = r.$slider.find(".slick-slide").slice(t, n)),
                    "anticipated" === r.options.lazyLoad)
                )
                    for (var o = t - 1, s = n, a = r.$slider.find(".slick-slide"), l = 0; l < r.options.slidesToScroll; l++) o < 0 && (o = r.slideCount - 1), (e = (e = e.add(a.eq(o))).add(a.eq(s))), o--, s++;
                i(e),
                    r.slideCount <= r.options.slidesToShow
                        ? i(r.$slider.find(".slick-slide"))
                        : r.currentSlide >= r.slideCount - r.options.slidesToShow
                        ? i(r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow))
                        : 0 === r.currentSlide && i(r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow));
            }),
            (s.prototype.loadSlider = function () {
                var e = this;
                e.setPosition(), e.$slideTrack.css({ opacity: 1 }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad();
            }),
            (s.prototype.next = s.prototype.slickNext = function () {
                this.changeSlide({ data: { message: "next" } });
            }),
            (s.prototype.orientationChange = function () {
                this.checkResponsive(), this.setPosition();
            }),
            (s.prototype.pause = s.prototype.slickPause = function () {
                this.autoPlayClear(), (this.paused = !0);
            }),
            (s.prototype.play = s.prototype.slickPlay = function () {
                var e = this;
                e.autoPlay(), (e.options.autoplay = !0), (e.paused = !1), (e.focussed = !1), (e.interrupted = !1);
            }),
            (s.prototype.postSlide = function (e) {
                var t = this;
                t.unslicked ||
                    (t.$slider.trigger("afterChange", [t, e]),
                    (t.animating = !1),
                    t.slideCount > t.options.slidesToShow && t.setPosition(),
                    (t.swipeLeft = null),
                    t.options.autoplay && t.autoPlay(),
                    !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && c(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
            }),
            (s.prototype.prev = s.prototype.slickPrev = function () {
                this.changeSlide({ data: { message: "previous" } });
            }),
            (s.prototype.preventDefault = function (e) {
                e.preventDefault();
            }),
            (s.prototype.progressiveLazyLoad = function (e) {
                e = e || 1;
                var t,
                    n,
                    i,
                    o,
                    r,
                    s = this,
                    a = c("img[data-lazy]", s.$slider);
                a.length
                    ? ((t = a.first()),
                      (n = t.attr("data-lazy")),
                      (i = t.attr("data-srcset")),
                      (o = t.attr("data-sizes") || s.$slider.attr("data-sizes")),
                      ((r = document.createElement("img")).onload = function () {
                          i && (t.attr("srcset", i), o && t.attr("sizes", o)),
                              t.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
                              !0 === s.options.adaptiveHeight && s.setPosition(),
                              s.$slider.trigger("lazyLoaded", [s, t, n]),
                              s.progressiveLazyLoad();
                      }),
                      (r.onerror = function () {
                          e < 3
                              ? setTimeout(function () {
                                    s.progressiveLazyLoad(e + 1);
                                }, 500)
                              : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, t, n]), s.progressiveLazyLoad());
                      }),
                      (r.src = n))
                    : s.$slider.trigger("allImagesLoaded", [s]);
            }),
            (s.prototype.refresh = function (e) {
                var t,
                    n,
                    i = this;
                (n = i.slideCount - i.options.slidesToShow),
                    !i.options.infinite && i.currentSlide > n && (i.currentSlide = n),
                    i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0),
                    (t = i.currentSlide),
                    i.destroy(!0),
                    c.extend(i, i.initials, { currentSlide: t }),
                    i.init(),
                    e || i.changeSlide({ data: { message: "index", index: t } }, !1);
            }),
            (s.prototype.registerBreakpoints = function () {
                var e,
                    t,
                    n,
                    i = this,
                    o = i.options.responsive || null;
                if ("array" === c.type(o) && o.length) {
                    for (e in ((i.respondTo = i.options.respondTo || "window"), o))
                        if (((n = i.breakpoints.length - 1), o.hasOwnProperty(e))) {
                            for (t = o[e].breakpoint; 0 <= n; ) i.breakpoints[n] && i.breakpoints[n] === t && i.breakpoints.splice(n, 1), n--;
                            i.breakpoints.push(t), (i.breakpointSettings[t] = o[e].settings);
                        }
                    i.breakpoints.sort(function (e, t) {
                        return i.options.mobileFirst ? e - t : t - e;
                    });
                }
            }),
            (s.prototype.reinit = function () {
                var e = this;
                (e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide")),
                    (e.slideCount = e.$slides.length),
                    e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
                    e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
                    e.registerBreakpoints(),
                    e.setProps(),
                    e.setupInfinite(),
                    e.buildArrows(),
                    e.updateArrows(),
                    e.initArrowEvents(),
                    e.buildDots(),
                    e.updateDots(),
                    e.initDotEvents(),
                    e.cleanUpSlideEvents(),
                    e.initSlideEvents(),
                    e.checkResponsive(!1, !0),
                    !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler),
                    e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
                    e.setPosition(),
                    e.focusHandler(),
                    (e.paused = !e.options.autoplay),
                    e.autoPlay(),
                    e.$slider.trigger("reInit", [e]);
            }),
            (s.prototype.resize = function () {
                var e = this;
                c(window).width() !== e.windowWidth &&
                    (clearTimeout(e.windowDelay),
                    (e.windowDelay = window.setTimeout(function () {
                        (e.windowWidth = c(window).width()), e.checkResponsive(), e.unslicked || e.setPosition();
                    }, 50)));
            }),
            (s.prototype.removeSlide = s.prototype.slickRemove = function (e, t, n) {
                var i = this;
                if (((e = "boolean" == typeof e ? (!0 === (t = e) ? 0 : i.slideCount - 1) : !0 === t ? --e : e), i.slideCount < 1 || e < 0 || e > i.slideCount - 1)) return !1;
                i.unload(),
                    !0 === n ? i.$slideTrack.children().remove() : i.$slideTrack.children(this.options.slide).eq(e).remove(),
                    (i.$slides = i.$slideTrack.children(this.options.slide)),
                    i.$slideTrack.children(this.options.slide).detach(),
                    i.$slideTrack.append(i.$slides),
                    (i.$slidesCache = i.$slides),
                    i.reinit();
            }),
            (s.prototype.setCSS = function (e) {
                var t,
                    n,
                    i = this,
                    o = {};
                !0 === i.options.rtl && (e = -e),
                    (t = "left" == i.positionProp ? Math.ceil(e) + "px" : "0px"),
                    (n = "top" == i.positionProp ? Math.ceil(e) + "px" : "0px"),
                    (o[i.positionProp] = e),
                    !1 === i.transformsEnabled || (!(o = {}) === i.cssTransitions ? (o[i.animType] = "translate(" + t + ", " + n + ")") : (o[i.animType] = "translate3d(" + t + ", " + n + ", 0px)")),
                    i.$slideTrack.css(o);
            }),
            (s.prototype.setDimensions = function () {
                var e = this;
                !1 === e.options.vertical
                    ? !0 === e.options.centerMode && e.$list.css({ padding: "0px " + e.options.centerPadding })
                    : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({ padding: e.options.centerPadding + " 0px" })),
                    (e.listWidth = e.$list.width()),
                    (e.listHeight = e.$list.height()),
                    !1 === e.options.vertical && !1 === e.options.variableWidth
                        ? ((e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow)), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length)))
                        : !0 === e.options.variableWidth
                        ? e.$slideTrack.width(5e3 * e.slideCount)
                        : ((e.slideWidth = Math.ceil(e.listWidth)), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
                var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
                !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t);
            }),
            (s.prototype.setFade = function () {
                var n,
                    i = this;
                i.$slides.each(function (e, t) {
                    (n = i.slideWidth * e * -1),
                        !0 === i.options.rtl ? c(t).css({ position: "relative", right: n, top: 0, zIndex: i.options.zIndex - 2, opacity: 0 }) : c(t).css({ position: "relative", left: n, top: 0, zIndex: i.options.zIndex - 2, opacity: 0 });
                }),
                    i.$slides.eq(i.currentSlide).css({ zIndex: i.options.zIndex - 1, opacity: 1 });
            }),
            (s.prototype.setHeight = function () {
                var e = this;
                if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
                    var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                    e.$list.css("height", t);
                }
            }),
            (s.prototype.setOption = s.prototype.slickSetOption = function () {
                var e,
                    t,
                    n,
                    i,
                    o,
                    r = this,
                    s = !1;
                if (
                    ("object" === c.type(arguments[0])
                        ? ((n = arguments[0]), (s = arguments[1]), (o = "multiple"))
                        : "string" === c.type(arguments[0]) &&
                          ((n = arguments[0]), (i = arguments[1]), (s = arguments[2]), "responsive" === arguments[0] && "array" === c.type(arguments[1]) ? (o = "responsive") : void 0 !== arguments[1] && (o = "single")),
                    "single" === o)
                )
                    r.options[n] = i;
                else if ("multiple" === o)
                    c.each(n, function (e, t) {
                        r.options[e] = t;
                    });
                else if ("responsive" === o)
                    for (t in i)
                        if ("array" !== c.type(r.options.responsive)) r.options.responsive = [i[t]];
                        else {
                            for (e = r.options.responsive.length - 1; 0 <= e; ) r.options.responsive[e].breakpoint === i[t].breakpoint && r.options.responsive.splice(e, 1), e--;
                            r.options.responsive.push(i[t]);
                        }
                s && (r.unload(), r.reinit());
            }),
            (s.prototype.setPosition = function () {
                var e = this;
                e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e]);
            }),
            (s.prototype.setProps = function () {
                var e = this,
                    t = document.body.style;
                (e.positionProp = !0 === e.options.vertical ? "top" : "left"),
                    "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"),
                    (void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition) || (!0 === e.options.useCSS && (e.cssTransitions = !0)),
                    e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : (e.options.zIndex = e.defaults.zIndex)),
                    void 0 !== t.OTransform && ((e.animType = "OTransform"), (e.transformType = "-o-transform"), (e.transitionType = "OTransition"), void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
                    void 0 !== t.MozTransform &&
                        ((e.animType = "MozTransform"), (e.transformType = "-moz-transform"), (e.transitionType = "MozTransition"), void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)),
                    void 0 !== t.webkitTransform &&
                        ((e.animType = "webkitTransform"), (e.transformType = "-webkit-transform"), (e.transitionType = "webkitTransition"), void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
                    void 0 !== t.msTransform && ((e.animType = "msTransform"), (e.transformType = "-ms-transform"), (e.transitionType = "msTransition"), void 0 === t.msTransform && (e.animType = !1)),
                    void 0 !== t.transform && !1 !== e.animType && ((e.animType = "transform"), (e.transformType = "transform"), (e.transitionType = "transition")),
                    (e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType);
            }),
            (s.prototype.setSlideClasses = function (e) {
                var t,
                    n,
                    i,
                    o,
                    r = this;
                if (((n = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true")), r.$slides.eq(e).addClass("slick-current"), !0 === r.options.centerMode)) {
                    var s = r.options.slidesToShow % 2 == 0 ? 1 : 0;
                    (t = Math.floor(r.options.slidesToShow / 2)),
                        !0 === r.options.infinite &&
                            (t <= e && e <= r.slideCount - 1 - t
                                ? r.$slides
                                      .slice(e - t + s, e + t + 1)
                                      .addClass("slick-active")
                                      .attr("aria-hidden", "false")
                                : ((i = r.options.slidesToShow + e),
                                  n
                                      .slice(i - t + 1 + s, i + t + 2)
                                      .addClass("slick-active")
                                      .attr("aria-hidden", "false")),
                            0 === e ? n.eq(n.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && n.eq(r.options.slidesToShow).addClass("slick-center")),
                        r.$slides.eq(e).addClass("slick-center");
                } else
                    0 <= e && e <= r.slideCount - r.options.slidesToShow
                        ? r.$slides
                              .slice(e, e + r.options.slidesToShow)
                              .addClass("slick-active")
                              .attr("aria-hidden", "false")
                        : n.length <= r.options.slidesToShow
                        ? n.addClass("slick-active").attr("aria-hidden", "false")
                        : ((o = r.slideCount % r.options.slidesToShow),
                          (i = !0 === r.options.infinite ? r.options.slidesToShow + e : e),
                          r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow
                              ? n
                                    .slice(i - (r.options.slidesToShow - o), i + o)
                                    .addClass("slick-active")
                                    .attr("aria-hidden", "false")
                              : n
                                    .slice(i, i + r.options.slidesToShow)
                                    .addClass("slick-active")
                                    .attr("aria-hidden", "false"));
                ("ondemand" !== r.options.lazyLoad && "anticipated" !== r.options.lazyLoad) || r.lazyLoad();
            }),
            (s.prototype.setupInfinite = function () {
                var e,
                    t,
                    n,
                    i = this;
                if ((!0 === i.options.fade && (i.options.centerMode = !1), !0 === i.options.infinite && !1 === i.options.fade && ((t = null), i.slideCount > i.options.slidesToShow))) {
                    for (n = !0 === i.options.centerMode ? i.options.slidesToShow + 1 : i.options.slidesToShow, e = i.slideCount; e > i.slideCount - n; e -= 1)
                        (t = e - 1),
                            c(i.$slides[t])
                                .clone(!0)
                                .attr("id", "")
                                .attr("data-slick-index", t - i.slideCount)
                                .prependTo(i.$slideTrack)
                                .addClass("slick-cloned");
                    for (e = 0; e < n + i.slideCount; e += 1)
                        (t = e),
                            c(i.$slides[t])
                                .clone(!0)
                                .attr("id", "")
                                .attr("data-slick-index", t + i.slideCount)
                                .appendTo(i.$slideTrack)
                                .addClass("slick-cloned");
                    i.$slideTrack
                        .find(".slick-cloned")
                        .find("[id]")
                        .each(function () {
                            c(this).attr("id", "");
                        });
                }
            }),
            (s.prototype.interrupt = function (e) {
                e || this.autoPlay(), (this.interrupted = e);
            }),
            (s.prototype.selectHandler = function (e) {
                var t = c(e.target).is(".slick-slide") ? c(e.target) : c(e.target).parents(".slick-slide"),
                    n = parseInt(t.attr("data-slick-index"));
                n || (n = 0), this.slideCount <= this.options.slidesToShow ? this.slideHandler(n, !1, !0) : this.slideHandler(n);
            }),
            (s.prototype.slideHandler = function (e, t, n) {
                var i,
                    o,
                    r,
                    s,
                    a,
                    l,
                    c = this;
                if (((t = t || !1), !((!0 === c.animating && !0 === c.options.waitForAnimate) || (!0 === c.options.fade && c.currentSlide === e))))
                    if (
                        (!1 === t && c.asNavFor(e),
                        (i = e),
                        (a = c.getLeft(i)),
                        (s = c.getLeft(c.currentSlide)),
                        (c.currentLeft = null === c.swipeLeft ? s : c.swipeLeft),
                        !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll))
                    )
                        !1 === c.options.fade &&
                            ((i = c.currentSlide),
                            !0 !== n && c.slideCount > c.options.slidesToShow
                                ? c.animateSlide(s, function () {
                                      c.postSlide(i);
                                  })
                                : c.postSlide(i));
                    else if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll))
                        !1 === c.options.fade &&
                            ((i = c.currentSlide),
                            !0 !== n && c.slideCount > c.options.slidesToShow
                                ? c.animateSlide(s, function () {
                                      c.postSlide(i);
                                  })
                                : c.postSlide(i));
                    else {
                        if (
                            (c.options.autoplay && clearInterval(c.autoPlayTimer),
                            (o =
                                i < 0
                                    ? c.slideCount % c.options.slidesToScroll != 0
                                        ? c.slideCount - (c.slideCount % c.options.slidesToScroll)
                                        : c.slideCount + i
                                    : i >= c.slideCount
                                    ? c.slideCount % c.options.slidesToScroll != 0
                                        ? 0
                                        : i - c.slideCount
                                    : i),
                            (c.animating = !0),
                            c.$slider.trigger("beforeChange", [c, c.currentSlide, o]),
                            (r = c.currentSlide),
                            (c.currentSlide = o),
                            c.setSlideClasses(c.currentSlide),
                            c.options.asNavFor && (l = (l = c.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(c.currentSlide),
                            c.updateDots(),
                            c.updateArrows(),
                            !0 === c.options.fade)
                        )
                            return (
                                !0 !== n
                                    ? (c.fadeSlideOut(r),
                                      c.fadeSlide(o, function () {
                                          c.postSlide(o);
                                      }))
                                    : c.postSlide(o),
                                void c.animateHeight()
                            );
                        !0 !== n && c.slideCount > c.options.slidesToShow
                            ? c.animateSlide(a, function () {
                                  c.postSlide(o);
                              })
                            : c.postSlide(o);
                    }
            }),
            (s.prototype.startLoad = function () {
                var e = this;
                !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()),
                    !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(),
                    e.$slider.addClass("slick-loading");
            }),
            (s.prototype.swipeDirection = function () {
                var e,
                    t,
                    n,
                    i,
                    o = this;
                return (
                    (e = o.touchObject.startX - o.touchObject.curX),
                    (t = o.touchObject.startY - o.touchObject.curY),
                    (n = Math.atan2(t, e)),
                    (i = Math.round((180 * n) / Math.PI)) < 0 && (i = 360 - Math.abs(i)),
                    i <= 45 && 0 <= i
                        ? !1 === o.options.rtl
                            ? "left"
                            : "right"
                        : i <= 360 && 315 <= i
                        ? !1 === o.options.rtl
                            ? "left"
                            : "right"
                        : 135 <= i && i <= 225
                        ? !1 === o.options.rtl
                            ? "right"
                            : "left"
                        : !0 === o.options.verticalSwiping
                        ? 35 <= i && i <= 135
                            ? "down"
                            : "up"
                        : "vertical"
                );
            }),
            (s.prototype.swipeEnd = function (e) {
                var t,
                    n,
                    i = this;
                if (((i.dragging = !1), (i.swiping = !1), i.scrolling)) return (i.scrolling = !1);
                if (((i.interrupted = !1), (i.shouldClick = !(10 < i.touchObject.swipeLength)), void 0 === i.touchObject.curX)) return !1;
                if ((!0 === i.touchObject.edgeHit && i.$slider.trigger("edge", [i, i.swipeDirection()]), i.touchObject.swipeLength >= i.touchObject.minSwipe)) {
                    switch ((n = i.swipeDirection())) {
                        case "left":
                        case "down":
                            (t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount()), (i.currentDirection = 0);
                            break;
                        case "right":
                        case "up":
                            (t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount()), (i.currentDirection = 1);
                    }
                    "vertical" != n && (i.slideHandler(t), (i.touchObject = {}), i.$slider.trigger("swipe", [i, n]));
                } else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), (i.touchObject = {}));
            }),
            (s.prototype.swipeHandler = function (e) {
                var t = this;
                if (!(!1 === t.options.swipe || ("ontouchend" in document && !1 === t.options.swipe) || (!1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))))
                    switch (
                        ((t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1),
                        (t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold),
                        !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold),
                        e.data.action)
                    ) {
                        case "start":
                            t.swipeStart(e);
                            break;
                        case "move":
                            t.swipeMove(e);
                            break;
                        case "end":
                            t.swipeEnd(e);
                    }
            }),
            (s.prototype.swipeMove = function (e) {
                var t,
                    n,
                    i,
                    o,
                    r,
                    s,
                    a = this;
                return (
                    (r = void 0 !== e.originalEvent ? e.originalEvent.touches : null),
                    !(!a.dragging || a.scrolling || (r && 1 !== r.length)) &&
                        ((t = a.getLeft(a.currentSlide)),
                        (a.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX),
                        (a.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY),
                        (a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2)))),
                        (s = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2)))),
                        !a.options.verticalSwiping && !a.swiping && 4 < s
                            ? !(a.scrolling = !0)
                            : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = s),
                              (n = a.swipeDirection()),
                              void 0 !== e.originalEvent && 4 < a.touchObject.swipeLength && ((a.swiping = !0), e.preventDefault()),
                              (o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1)),
                              !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
                              (i = a.touchObject.swipeLength),
                              (a.touchObject.edgeHit = !1) === a.options.infinite &&
                                  ((0 === a.currentSlide && "right" === n) || (a.currentSlide >= a.getDotCount() && "left" === n)) &&
                                  ((i = a.touchObject.swipeLength * a.options.edgeFriction), (a.touchObject.edgeHit = !0)),
                              !1 === a.options.vertical ? (a.swipeLeft = t + i * o) : (a.swipeLeft = t + i * (a.$list.height() / a.listWidth) * o),
                              !0 === a.options.verticalSwiping && (a.swipeLeft = t + i * o),
                              !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? ((a.swipeLeft = null), !1) : void a.setCSS(a.swipeLeft))))
                );
            }),
            (s.prototype.swipeStart = function (e) {
                var t,
                    n = this;
                if (((n.interrupted = !0), 1 !== n.touchObject.fingerCount || n.slideCount <= n.options.slidesToShow)) return !(n.touchObject = {});
                void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]),
                    (n.touchObject.startX = n.touchObject.curX = void 0 !== t ? t.pageX : e.clientX),
                    (n.touchObject.startY = n.touchObject.curY = void 0 !== t ? t.pageY : e.clientY),
                    (n.dragging = !0);
            }),
            (s.prototype.unfilterSlides = s.prototype.slickUnfilter = function () {
                var e = this;
                null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit());
            }),
            (s.prototype.unload = function () {
                var e = this;
                c(".slick-cloned", e.$slider).remove(),
                    e.$dots && e.$dots.remove(),
                    e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(),
                    e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(),
                    e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
            }),
            (s.prototype.unslick = function (e) {
                this.$slider.trigger("unslick", [this, e]), this.destroy();
            }),
            (s.prototype.updateArrows = function () {
                var e = this;
                Math.floor(e.options.slidesToShow / 2),
                    !0 === e.options.arrows &&
                        e.slideCount > e.options.slidesToShow &&
                        !e.options.infinite &&
                        (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                        e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                        0 === e.currentSlide
                            ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
                            : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode
                            ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
                            : e.currentSlide >= e.slideCount - 1 &&
                              !0 === e.options.centerMode &&
                              (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
            }),
            (s.prototype.updateDots = function () {
                var e = this;
                null !== e.$dots &&
                    (e.$dots.find("li").removeClass("slick-active").end(),
                    e.$dots
                        .find("li")
                        .eq(Math.floor(e.currentSlide / e.options.slidesToScroll))
                        .addClass("slick-active"));
            }),
            (s.prototype.visibility = function () {
                this.options.autoplay && (document[this.hidden] ? (this.interrupted = !0) : (this.interrupted = !1));
            }),
            (c.fn.slick = function () {
                var e,
                    t,
                    n = this,
                    i = arguments[0],
                    o = Array.prototype.slice.call(arguments, 1),
                    r = n.length;
                for (e = 0; e < r; e++) if (("object" == typeof i || void 0 === i ? (n[e].slick = new s(n[e], i)) : (t = n[e].slick[i].apply(n[e].slick, o)), void 0 !== t)) return t;
                return n;
            });
    }),
    (function (s, a) {
        s(document).ready(function () {
            var e, t, n, i, o, r;
            !(function () {
                var e = s("body");
                if ("undefined" != typeof platform && platform) {
                    var t = "bs-" + platform.name.toLowerCase().replace(/ /g, "-"),
                        n = "os-" + platform.os.family.split(" ")[0].toLowerCase();
                    "os-os" == n && (n = "os-macos"), e.addClass(t).addClass(n);
                }
            })(),
                (e = s(".sticky-header")),
                s(a).scroll(function () {
                    40 < s(this).scrollTop() ? (e.removeClass("affix-top").addClass("affix"), e.css({ op: 59 })) : e.removeClass("affix").addClass("affix-top");
                }),
                s(document).on("click", ".menu-mobile-effect", function (e) {
                    e.stopPropagation(), s("body").toggleClass("mobile-menu-open"), s(".header-mobile-language").toggleClass("show-language");
                }),
                s(document).on("click", ".mobile-menu-open", function (e) {
                    s("body").toggleClass("mobile-menu-open"), s(".header-mobile-language").toggleClass("show-language");
                }),
                s(".header-mobile-content .nav-main>li.menu-item-has-children >a").after('<span class="icon-toggle"><span class="icon-down"></span></span>'),
                s(".header-mobile-content .nav-main>li.menu-item-has-children .icon-toggle").on("click", function () {
                    s(this).next("ul.sub-menu").is(":hidden")
                        ? (s(this).next("ul.sub-menu").slideDown(200, "linear"), s(this).html('<span class="icon-up"></span>'))
                        : (s(this).next("ul.sub-menu").slideUp(200, "linear"), s(this).html('<span class="icon-down"></span>'));
                }),
                (t = s(".header-mobile-search").find(".search-button")),
                (n = s(".header-mobile-search").find(".search-form")),
                (i = s(".header-mobile-search").find(".close-form")),
                t.click(function () {
                    n.find("#s-mobile").focus(), n.addClass("open");
                }),
                i.click(function () {
                    n.removeClass("open");
                }),
                (o = a.location.pathname.substring(1)),
                s(".header-destop .nav-main a").each(function () {
                    s(this).attr("href") == o &&
                        (s(".header-destop .nav-main li").removeClass("current-menu"), s(this).closest(".sub-menu").length ? s(this).closest(".sub-menu").parent().addClass("current-menu") : s(this).parent().addClass("current-menu"));
                }),
                s(".vin-carousel")
                    .on("init", function (e, t) {
                        var n = s(this);
                        if (n.data("arrows-dots-wrapper")) {
                            var i = n.find(".slick-dots"),
                                o = n.find(".slick-arrow"),
                                r = s(n.data("arrows-dots-wrapper"));
                            i.prependTo(r), o.prependTo(r), r.prependTo(n);
                        }
                    })
                    .slick(),
                (function () {
                    if (s(".bg-video").length) {
                        var e = document.getElementById("bg-video__object-cover");
                        s(".bg-video .overlay").click(function () {
                            e.paused
                                ? (s(".bg-video .overlay").addClass("pause").removeClass("play"), s(".bg-video .info .container").css("display", "none"), e.play())
                                : (s(".bg-video .overlay").addClass("play").removeClass("pause"), s(".bg-video .info .container").css("display", "block"), e.pause()),
                                (e.onended = function () {
                                    s(".bg-video .overlay").addClass("play").removeClass("pause"), s(".bg-video .info .container").css("display", "block");
                                });
                        });
                    }
                })(),
                s(".working-icon .list-icon").length &&
                    jQuery("img.svg").each(function () {
                        var n = jQuery(this),
                            i = n.attr("id"),
                            o = n.attr("class"),
                            e = n.attr("src");
                        jQuery.get(
                            e,
                            function (e) {
                                var t = jQuery(e).find("svg");
                                void 0 !== i && (t = t.attr("id", i)),
                                    void 0 !== o && (t = t.attr("class", o + " replaced-svg")),
                                    !(t = t.removeAttr("xmlns:a")).attr("viewBox") && t.attr("height") && t.attr("width") && t.attr("viewBox", "0 0 " + t.attr("height") + " " + t.attr("width")),
                                    n.replaceWith(t);
                            },
                            "xml"
                        );
                    }),
                s(".banner-speech").length && s(".news-event__aside").length && s(".news-event__aside").addClass("with-banner-speech"),
                (r = s(".arrow-dots-wrap")).length &&
                    r.each(function () {
                        var e = s(this),
                            t = e.find(".slick-dots"),
                            n = e.find(".slick-arrow");
                        e.hasClass("arrow-dots-items") && (e.find(".content-slide").append("<div class='arrow-dots d-flex'></div>"), t.appendTo(e.find(".arrow-dots")), n.appendTo(e.find(".arrow-dots"))),
                            e.hasClass("arrow-dots-container") && (t.wrap("<div class='arrow-dots'><div class='container d-flex'></div></div>"), n.appendTo(e.find(".arrow-dots .container"))),
                            e.hasClass("arrow-dots-style");
                    }),
                s(".ask-question .accordion .card").length &&
                    s(".ask-question .accordion .card").each(function () {
                        var e = s(this);
                        e.find("card-header").on("click", function () {
                            e.find(".collapse").collapse("toggle");
                        }),
                            e.find(".collapse").on("shown.bs.collapse", function () {
                                e.find(".card-header").addClass("active");
                            }),
                            e.find(".collapse").on("hidden.bs.collapse", function () {
                                e.find(".card-header").removeClass("active");
                            });
                    }),
                s(".ask-question-menu .menu-item-has-children").length && s('<span class="icon-toggle"><span class="icon"></span></span>').insertBefore(".ask-question-menu .menu-item-has-children .sub-menu"),
                s(".ask-question-menu .icon-toggle").length &&
                    s(".ask-question-menu .icon-toggle").each(function () {
                        var e = s(this);
                        e.on("click", function () {
                            e.next("ul.sub-menu").is(":hidden") ? (e.next("ul.sub-menu").slideDown(200, "linear"), e.addClass("up")) : (e.next("ul.sub-menu").slideUp(200, "linear"), e.removeClass("up"));
                        });
                    }),
                s(".ask-question-menu.v2 .menu-item-has-children").length &&
                    s(".ask-question-menu.v2 .menu-item-has-children").each(function () {
                        (s(this).hasClass("current-menu-item") || s(this).hasClass("current-menu-parent")) && s(this).find(".sub-menu").addClass("show");
                    }),
                s("#apply-modal").length &&
                    s("#apply-modal").on("show.bs.modal", function (e) {
                        var t = s(e.relatedTarget).data("whatever"),
                            n = s(this);
                        n.find(".title-modal").text(t), n.find(".modal-content input.input-job").val(t);
                    }),
                s("#visit-video-modal").length &&
                    s(".visit-video-modal-on").click(function () {
                        var t = s(this).data("video");
                        s("#visit-video-modal").on("show.bs.modal", function (e) {
                            s("#visit-video-modal video").attr("src", t);
                        });
                    }),
                s(".bg-text").length && s(".news-event__aside").length && s(".bg-text").removeClass("no-pad");
        });
    })(jQuery, window);
