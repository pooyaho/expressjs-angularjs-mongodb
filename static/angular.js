/*
 AngularJS v1.0.8
 (c) 2010-2012 Google, Inc. http://angularjs.org
 License: MIT
 */
(function (P, T, q) {
    'use strict';
    function m(b, a, c) {
        var d;
        if (b)if (H(b))for (d in b)d != "prototype" && d != "length" && d != "name" && b.hasOwnProperty(d) && a.call(c, b[d], d); else if (b.forEach && b.forEach !== m)b.forEach(a, c); else if (!b || typeof b.length !== "number" ? 0 : typeof b.hasOwnProperty != "function" && typeof b.constructor != "function" || b instanceof L || aa && b instanceof aa || ma.call(b) !== "[object Object]" || typeof b.callee === "function")for (d = 0; d < b.length; d++)a.call(c, b[d], d); else for (d in b)b.hasOwnProperty(d) && a.call(c, b[d],
            d);
        return b
    }

    function nb(b) {
        var a = [], c;
        for (c in b)b.hasOwnProperty(c) && a.push(c);
        return a.sort()
    }

    function hc(b, a, c) {
        for (var d = nb(b), e = 0; e < d.length; e++)a.call(c, b[d[e]], d[e]);
        return d
    }

    function ob(b) {
        return function (a, c) {
            b(c, a)
        }
    }

    function xa() {
        for (var b = Z.length, a; b;) {
            b--;
            a = Z[b].charCodeAt(0);
            if (a == 57)return Z[b] = "A", Z.join("");
            if (a == 90)Z[b] = "0"; else return Z[b] = String.fromCharCode(a + 1), Z.join("")
        }
        Z.unshift("0");
        return Z.join("")
    }

    function pb(b, a) {
        a ? b.$$hashKey = a : delete b.$$hashKey
    }

    function D(b) {
        var a =
            b.$$hashKey;
        m(arguments, function (a) {
            a !== b && m(a, function (a, c) {
                b[c] = a
            })
        });
        pb(b, a);
        return b
    }

    function G(b) {
        return parseInt(b, 10)
    }

    function ya(b, a) {
        return D(new (D(function () {
        }, {prototype: b})), a)
    }

    function s() {
    }

    function na(b) {
        return b
    }

    function I(b) {
        return function () {
            return b
        }
    }

    function u(b) {
        return typeof b == "undefined"
    }

    function v(b) {
        return typeof b != "undefined"
    }

    function M(b) {
        return b != null && typeof b == "object"
    }

    function B(b) {
        return typeof b == "string"
    }

    function Ra(b) {
        return typeof b == "number"
    }

    function oa(b) {
        return ma.apply(b) ==
            "[object Date]"
    }

    function E(b) {
        return ma.apply(b) == "[object Array]"
    }

    function H(b) {
        return typeof b == "function"
    }

    function Sa(b) {
        return ma.apply(b) == "[object RegExp]"
    }

    function pa(b) {
        return b && b.document && b.location && b.alert && b.setInterval
    }

    function ic(b) {
        return b && (b.nodeName || b.bind && b.find)
    }

    function Ta(b, a, c) {
        var d = [];
        m(b, function (b, g, h) {
            d.push(a.call(c, b, g, h))
        });
        return d
    }

    function za(b, a) {
        if (b.indexOf)return b.indexOf(a);
        for (var c = 0; c < b.length; c++)if (a === b[c])return c;
        return-1
    }

    function Ua(b, a) {
        var c =
            za(b, a);
        c >= 0 && b.splice(c, 1);
        return a
    }

    function U(b, a) {
        if (pa(b) || b && b.$evalAsync && b.$watch)throw Error("Can't copy Window or Scope");
        if (a) {
            if (b === a)throw Error("Can't copy equivalent objects or arrays");
            if (E(b))for (var c = a.length = 0; c < b.length; c++)a.push(U(b[c])); else {
                c = a.$$hashKey;
                m(a, function (b, c) {
                    delete a[c]
                });
                for (var d in b)a[d] = U(b[d]);
                pb(a, c)
            }
        } else(a = b) && (E(b) ? a = U(b, []) : oa(b) ? a = new Date(b.getTime()) : Sa(b) ? a = RegExp(b.source) : M(b) && (a = U(b, {})));
        return a
    }

    function jc(b, a) {
        var a = a || {}, c;
        for (c in b)b.hasOwnProperty(c) &&
            c.substr(0, 2) !== "$$" && (a[c] = b[c]);
        return a
    }

    function ea(b, a) {
        if (b === a)return!0;
        if (b === null || a === null)return!1;
        if (b !== b && a !== a)return!0;
        var c = typeof b, d;
        if (c == typeof a && c == "object")if (E(b)) {
            if (!E(a))return!1;
            if ((c = b.length) == a.length) {
                for (d = 0; d < c; d++)if (!ea(b[d], a[d]))return!1;
                return!0
            }
        } else if (oa(b))return oa(a) && b.getTime() == a.getTime(); else if (Sa(b) && Sa(a))return b.toString() == a.toString(); else {
            if (b && b.$evalAsync && b.$watch || a && a.$evalAsync && a.$watch || pa(b) || pa(a) || E(a))return!1;
            c = {};
            for (d in b)if (!(d.charAt(0) ===
                "$" || H(b[d]))) {
                if (!ea(b[d], a[d]))return!1;
                c[d] = !0
            }
            for (d in a)if (!c[d] && d.charAt(0) !== "$" && a[d] !== q && !H(a[d]))return!1;
            return!0
        }
        return!1
    }

    function Va(b, a) {
        var c = arguments.length > 2 ? ha.call(arguments, 2) : [];
        return H(a) && !(a instanceof RegExp) ? c.length ? function () {
            return arguments.length ? a.apply(b, c.concat(ha.call(arguments, 0))) : a.apply(b, c)
        } : function () {
            return arguments.length ? a.apply(b, arguments) : a.call(b)
        } : a
    }

    function kc(b, a) {
        var c = a;
        /^\$+/.test(b) ? c = q : pa(a) ? c = "$WINDOW" : a && T === a ? c = "$DOCUMENT" : a && a.$evalAsync &&
            a.$watch && (c = "$SCOPE");
        return c
    }

    function ba(b, a) {
        return typeof b === "undefined" ? q : JSON.stringify(b, kc, a ? "  " : null)
    }

    function qb(b) {
        return B(b) ? JSON.parse(b) : b
    }

    function Wa(b) {
        b && b.length !== 0 ? (b = y("" + b), b = !(b == "f" || b == "0" || b == "false" || b == "no" || b == "n" || b == "[]")) : b = !1;
        return b
    }

    function qa(b) {
        b = w(b).clone();
        try {
            b.html("")
        } catch (a) {
        }
        var c = w("<div>").append(b).html();
        try {
            return b[0].nodeType === 3 ? y(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
                return"<" + y(b)
            })
        } catch (d) {
            return y(c)
        }
    }

    function rb(b) {
        try {
            return decodeURIComponent(b)
        } catch (a) {
        }
    }

    function Xa(b) {
        var a = {}, c, d;
        m((b || "").split("&"), function (b) {
            b && (c = b.split("="), d = rb(c[0]), v(d) && (a[d] = v(c[1]) ? rb(c[1]) : !0))
        });
        return a
    }

    function sb(b) {
        var a = [];
        m(b, function (b, d) {
            a.push(Ya(d, !0) + (b === !0 ? "" : "=" + Ya(b, !0)))
        });
        return a.length ? a.join("&") : ""
    }

    function Za(b) {
        return Ya(b, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function Ya(b, a) {
        return encodeURIComponent(b).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, a ? "%20" : "+")
    }

    function lc(b, a) {
        function c(a) {
            a && d.push(a)
        }

        var d = [b], e, g, h = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"], f = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
        m(h, function (a) {
            h[a] = !0;
            c(T.getElementById(a));
            a = a.replace(":", "\\:");
            b.querySelectorAll && (m(b.querySelectorAll("." + a), c), m(b.querySelectorAll("." + a + "\\:"), c), m(b.querySelectorAll("[" + a + "]"), c))
        });
        m(d, function (a) {
            if (!e) {
                var b = f.exec(" " + a.className + " ");
                b ? (e = a, g = (b[2] || "").replace(/\s+/g, ",")) : m(a.attributes, function (b) {
                    if (!e && h[b.name])e = a, g = b.value
                })
            }
        });
        e && a(e, g ? [g] : [])
    }

    function tb(b, a) {
        var c = function () {
            b = w(b);
            a = a || [];
            a.unshift(["$provide", function (a) {
                a.value("$rootElement", b)
            }]);
            a.unshift("ng");
            var c = ub(a);
            c.invoke(["$rootScope", "$rootElement", "$compile", "$injector", function (a, b, c, d) {
                a.$apply(function () {
                    b.data("$injector", d);
                    c(b)(a)
                })
            }]);
            return c
        }, d = /^NG_DEFER_BOOTSTRAP!/;
        if (P && !d.test(P.name))return c();
        P.name = P.name.replace(d, "");
        $a.resumeBootstrap = function (b) {
            m(b, function (b) {
                a.push(b)
            });
            c()
        }
    }

    function ab(b, a) {
        a = a || "_";
        return b.replace(mc, function (b, d) {
            return(d ? a : "") + b.toLowerCase()
        })
    }

    function bb(b, a, c) {
        if (!b)throw Error("Argument '" + (a || "?") + "' is " + (c || "required"));
        return b
    }

    function ra(b, a, c) {
        c && E(b) && (b = b[b.length - 1]);
        bb(H(b), a, "not a function, got " + (b && typeof b == "object" ? b.constructor.name || "Object" : typeof b));
        return b
    }

    function cb(b, a, c) {
        if (!a)return b;
        for (var a = a.split("."), d, e = b, g = a.length, h = 0; h < g; h++)d = a[h], b && (b = (e = b)[d]);
        return!c && H(b) ? Va(e, b) : b
    }

    function nc(b) {
        function a(a, b, e) {
            return a[b] || (a[b] = e())
        }

        return a(a(b, "angular", Object),
            "module", function () {
                var b = {};
                return function (d, e, g) {
                    e && b.hasOwnProperty(d) && (b[d] = null);
                    return a(b, d, function () {
                        function a(c, d, e) {
                            return function () {
                                b[e || "push"]([c, d, arguments]);
                                return k
                            }
                        }

                        if (!e)throw Error("No module: " + d);
                        var b = [], c = [], j = a("$injector", "invoke"), k = {_invokeQueue: b, _runBlocks: c, requires: e, name: d, provider: a("$provide", "provider"), factory: a("$provide", "factory"), service: a("$provide", "service"), value: a("$provide", "value"), constant: a("$provide", "constant", "unshift"), filter: a("$filterProvider",
                            "register"), controller: a("$controllerProvider", "register"), directive: a("$compileProvider", "directive"), config: j, run: function (a) {
                            c.push(a);
                            return this
                        }};
                        g && j(g);
                        return k
                    })
                }
            })
    }

    function vb(b) {
        return b.replace(oc,function (a, b, d, e) {
            return e ? d.toUpperCase() : d
        }).replace(pc, "Moz$1")
    }

    function db(b, a, c, d) {
        function e(b) {
            var f;
            var e = c && b ? [this.filter(b)] : [this], i = a, j, k, l, n, o, p;
            if (!d || b != null)for (; e.length;) {
                j = e.shift();
                k = 0;
                for (l = j.length; k < l; k++) {
                    n = w(j[k]);
                    i ? n.triggerHandler("$destroy") : i = !i;
                    o = 0;
                    for (f = (p = n.children()).length,
                             n = f; o < n; o++)e.push(aa(p[o]))
                }
            }
            return g.apply(this, arguments)
        }

        var g = aa.fn[b], g = g.$original || g;
        e.$original = g;
        aa.fn[b] = e
    }

    function L(b) {
        if (b instanceof L)return b;
        if (!(this instanceof L)) {
            if (B(b) && b.charAt(0) != "<")throw Error("selectors not implemented");
            return new L(b)
        }
        if (B(b)) {
            var a = T.createElement("div");
            a.innerHTML = "<div>&#160;</div>" + b;
            a.removeChild(a.firstChild);
            eb(this, a.childNodes);
            this.remove()
        } else eb(this, b)
    }

    function fb(b) {
        return b.cloneNode(!0)
    }

    function sa(b) {
        wb(b);
        for (var a = 0, b = b.childNodes ||
            []; a < b.length; a++)sa(b[a])
    }

    function xb(b, a, c) {
        var d = $(b, "events");
        $(b, "handle") && (u(a) ? m(d, function (a, c) {
            gb(b, c, a);
            delete d[c]
        }) : u(c) ? (gb(b, a, d[a]), delete d[a]) : Ua(d[a] || [], c))
    }

    function wb(b) {
        var a = b[Aa], c = Ba[a];
        c && (c.handle && (c.events.$destroy && c.handle({}, "$destroy"), xb(b)), delete Ba[a], b[Aa] = q)
    }

    function $(b, a, c) {
        var d = b[Aa], d = Ba[d || -1];
        if (v(c))d || (b[Aa] = d = ++qc, d = Ba[d] = {}), d[a] = c; else return d && d[a]
    }

    function yb(b, a, c) {
        var d = $(b, "data"), e = v(c), g = !e && v(a), h = g && !M(a);
        !d && !h && $(b, "data", d = {});
        if (e)d[a] =
            c; else if (g)if (h)return d && d[a]; else D(d, a); else return d
    }

    function Ca(b, a) {
        return(" " + b.className + " ").replace(/[\n\t]/g, " ").indexOf(" " + a + " ") > -1
    }

    function zb(b, a) {
        a && m(a.split(" "), function (a) {
            b.className = S((" " + b.className + " ").replace(/[\n\t]/g, " ").replace(" " + S(a) + " ", " "))
        })
    }

    function Ab(b, a) {
        a && m(a.split(" "), function (a) {
            if (!Ca(b, a))b.className = S(b.className + " " + S(a))
        })
    }

    function eb(b, a) {
        if (a)for (var a = !a.nodeName && v(a.length) && !pa(a) ? a : [a], c = 0; c < a.length; c++)b.push(a[c])
    }

    function Bb(b, a) {
        return Da(b,
            "$" + (a || "ngController") + "Controller")
    }

    function Da(b, a, c) {
        b = w(b);
        for (b[0].nodeType == 9 && (b = b.find("html")); b.length;) {
            if (c = b.data(a))return c;
            b = b.parent()
        }
    }

    function Cb(b, a) {
        var c = Ea[a.toLowerCase()];
        return c && Db[b.nodeName] && c
    }

    function rc(b, a) {
        var c = function (c, e) {
            if (!c.preventDefault)c.preventDefault = function () {
                c.returnValue = !1
            };
            if (!c.stopPropagation)c.stopPropagation = function () {
                c.cancelBubble = !0
            };
            if (!c.target)c.target = c.srcElement || T;
            if (u(c.defaultPrevented)) {
                var g = c.preventDefault;
                c.preventDefault =
                    function () {
                        c.defaultPrevented = !0;
                        g.call(c)
                    };
                c.defaultPrevented = !1
            }
            c.isDefaultPrevented = function () {
                return c.defaultPrevented
            };
            m(a[e || c.type], function (a) {
                a.call(b, c)
            });
            V <= 8 ? (c.preventDefault = null, c.stopPropagation = null, c.isDefaultPrevented = null) : (delete c.preventDefault, delete c.stopPropagation, delete c.isDefaultPrevented)
        };
        c.elem = b;
        return c
    }

    function fa(b) {
        var a = typeof b, c;
        if (a == "object" && b !== null)if (typeof(c = b.$$hashKey) == "function")c = b.$$hashKey(); else {
            if (c === q)c = b.$$hashKey = xa()
        } else c = b;
        return a +
            ":" + c
    }

    function Fa(b) {
        m(b, this.put, this)
    }

    function hb() {
    }

    function Eb(b) {
        var a, c;
        if (typeof b == "function") {
            if (!(a = b.$inject))a = [], c = b.toString().replace(sc, ""), c = c.match(tc), m(c[1].split(uc), function (b) {
                b.replace(vc, function (b, c, d) {
                    a.push(d)
                })
            }), b.$inject = a
        } else E(b) ? (c = b.length - 1, ra(b[c], "fn"), a = b.slice(0, c)) : ra(b, "fn", !0);
        return a
    }

    function ub(b) {
        function a(a) {
            return function (b, c) {
                if (M(b))m(b, ob(a)); else return a(b, c)
            }
        }

        function c(a, b) {
            if (H(b) || E(b))b = l.instantiate(b);
            if (!b.$get)throw Error("Provider " +
                a + " must define $get factory method.");
            return k[a + f] = b
        }

        function d(a, b) {
            return c(a, {$get: b})
        }

        function e(a) {
            var b = [];
            m(a, function (a) {
                if (!j.get(a))if (j.put(a, !0), B(a)) {
                    var c = ta(a);
                    b = b.concat(e(c.requires)).concat(c._runBlocks);
                    try {
                        for (var d = c._invokeQueue, c = 0, f = d.length; c < f; c++) {
                            var g = d[c], p = g[0] == "$injector" ? l : l.get(g[0]);
                            p[g[1]].apply(p, g[2])
                        }
                    } catch (h) {
                        throw h.message && (h.message += " from " + a), h;
                    }
                } else if (H(a))try {
                    b.push(l.invoke(a))
                } catch (i) {
                    throw i.message && (i.message += " from " + a), i;
                } else if (E(a))try {
                    b.push(l.invoke(a))
                } catch (o) {
                    throw o.message &&
                        (o.message += " from " + String(a[a.length - 1])), o;
                } else ra(a, "module")
            });
            return b
        }

        function g(a, b) {
            function c(d) {
                if (typeof d !== "string")throw Error("Service name expected");
                if (a.hasOwnProperty(d)) {
                    if (a[d] === h)throw Error("Circular dependency: " + i.join(" <- "));
                    return a[d]
                } else try {
                    return i.unshift(d), a[d] = h, a[d] = b(d)
                } finally {
                    i.shift()
                }
            }

            function d(a, b, e) {
                var f = [], j = Eb(a), g, h, p;
                h = 0;
                for (g = j.length; h < g; h++)p = j[h], f.push(e && e.hasOwnProperty(p) ? e[p] : c(p));
                a.$inject || (a = a[g]);
                switch (b ? -1 : f.length) {
                    case 0:
                        return a();
                    case 1:
                        return a(f[0]);
                    case 2:
                        return a(f[0], f[1]);
                    case 3:
                        return a(f[0], f[1], f[2]);
                    case 4:
                        return a(f[0], f[1], f[2], f[3]);
                    case 5:
                        return a(f[0], f[1], f[2], f[3], f[4]);
                    case 6:
                        return a(f[0], f[1], f[2], f[3], f[4], f[5]);
                    case 7:
                        return a(f[0], f[1], f[2], f[3], f[4], f[5], f[6]);
                    case 8:
                        return a(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7]);
                    case 9:
                        return a(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8]);
                    case 10:
                        return a(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9]);
                    default:
                        return a.apply(b, f)
                }
            }

            return{invoke: d, instantiate: function (a, b) {
                var c = function () {
                }, e;
                c.prototype = (E(a) ? a[a.length - 1] : a).prototype;
                c = new c;
                e = d(a, c, b);
                return M(e) ? e : c
            }, get: c, annotate: Eb}
        }

        var h = {}, f = "Provider", i = [], j = new Fa, k = {$provide: {provider: a(c), factory: a(d), service: a(function (a, b) {
                return d(a, ["$injector", function (a) {
                    return a.instantiate(b)
                }])
            }), value: a(function (a, b) {
                return d(a, I(b))
            }), constant: a(function (a, b) {
                k[a] = b;
                n[a] = b
            }), decorator: function (a, b) {
                var c = l.get(a + f), d = c.$get;
                c.$get = function () {
                    var a = o.invoke(d, c);
                    return o.invoke(b, null, {$delegate: a})
                }
            }}},
            l = g(k, function () {
                throw Error("Unknown provider: " + i.join(" <- "));
            }), n = {}, o = n.$injector = g(n, function (a) {
                a = l.get(a + f);
                return o.invoke(a.$get, a)
            });
        m(e(b), function (a) {
            o.invoke(a || s)
        });
        return o
    }

    function wc() {
        var b = !0;
        this.disableAutoScrolling = function () {
            b = !1
        };
        this.$get = ["$window", "$location", "$rootScope", function (a, c, d) {
            function e(a) {
                var b = null;
                m(a, function (a) {
                    !b && y(a.nodeName) === "a" && (b = a)
                });
                return b
            }

            function g() {
                var b = c.hash(), d;
                b ? (d = h.getElementById(b)) ? d.scrollIntoView() : (d = e(h.getElementsByName(b))) ?
                    d.scrollIntoView() : b === "top" && a.scrollTo(0, 0) : a.scrollTo(0, 0)
            }

            var h = a.document;
            b && d.$watch(function () {
                return c.hash()
            }, function () {
                d.$evalAsync(g)
            });
            return g
        }]
    }

    function xc(b, a, c, d) {
        function e(a) {
            try {
                a.apply(null, ha.call(arguments, 1))
            } finally {
                if (p--, p === 0)for (; z.length;)try {
                    z.pop()()
                } catch (b) {
                    c.error(b)
                }
            }
        }

        function g(a, b) {
            (function yc() {
                m(r, function (a) {
                    a()
                });
                x = b(yc, a)
            })()
        }

        function h() {
            N != f.url() && (N = f.url(), m(K, function (a) {
                a(f.url())
            }))
        }

        var f = this, i = a[0], j = b.location, k = b.history, l = b.setTimeout, n = b.clearTimeout,
            o = {};
        f.isMock = !1;
        var p = 0, z = [];
        f.$$completeOutstandingRequest = e;
        f.$$incOutstandingRequestCount = function () {
            p++
        };
        f.notifyWhenNoOutstandingRequests = function (a) {
            m(r, function (a) {
                a()
            });
            p === 0 ? a() : z.push(a)
        };
        var r = [], x;
        f.addPollFn = function (a) {
            u(x) && g(100, l);
            r.push(a);
            return a
        };
        var N = j.href, A = a.find("base"), J = null;
        f.url = function (a, b) {
            if (a) {
                if (N != a)return N = a, d.history ? b ? k.replaceState(null, "", a) : (k.pushState(null, "", a), A.attr("href", A.attr("href"))) : b ? (j.replace(a), J = a) : (j.href = a, J = null), f
            } else return J || j.href.replace(/%27/g,
                "'")
        };
        var K = [], C = !1;
        f.onUrlChange = function (a) {
            C || (d.history && w(b).bind("popstate", h), d.hashchange ? w(b).bind("hashchange", h) : f.addPollFn(h), C = !0);
            K.push(a);
            return a
        };
        f.baseHref = function () {
            var a = A.attr("href");
            return a ? a.replace(/^https?\:\/\/[^\/]*/, "") : ""
        };
        var ga = {}, Q = "", t = f.baseHref();
        f.cookies = function (a, b) {
            var d, e, f, j;
            if (a)if (b === q)i.cookie = escape(a) + "=;path=" + t + ";expires=Thu, 01 Jan 1970 00:00:00 GMT"; else {
                if (B(b))d = (i.cookie = escape(a) + "=" + escape(b) + ";path=" + t).length + 1, d > 4096 && c.warn("Cookie '" +
                    a + "' possibly not set or overflowed because it was too large (" + d + " > 4096 bytes)!")
            } else {
                if (i.cookie !== Q) {
                    Q = i.cookie;
                    d = Q.split("; ");
                    ga = {};
                    for (f = 0; f < d.length; f++)e = d[f], j = e.indexOf("="), j > 0 && (a = unescape(e.substring(0, j)), ga[a] === q && (ga[a] = unescape(e.substring(j + 1))))
                }
                return ga
            }
        };
        f.defer = function (a, b) {
            var c;
            p++;
            c = l(function () {
                delete o[c];
                e(a)
            }, b || 0);
            o[c] = !0;
            return c
        };
        f.defer.cancel = function (a) {
            return o[a] ? (delete o[a], n(a), e(s), !0) : !1
        }
    }

    function zc() {
        this.$get = ["$window", "$log", "$sniffer", "$document",
            function (b, a, c, d) {
                return new xc(b, d, a, c)
            }]
    }

    function Ac() {
        this.$get = function () {
            function b(b, d) {
                function e(a) {
                    if (a != l) {
                        if (n) {
                            if (n == a)n = a.n
                        } else n = a;
                        g(a.n, a.p);
                        g(a, l);
                        l = a;
                        l.n = null
                    }
                }

                function g(a, b) {
                    if (a != b) {
                        if (a)a.p = b;
                        if (b)b.n = a
                    }
                }

                if (b in a)throw Error("cacheId " + b + " taken");
                var h = 0, f = D({}, d, {id: b}), i = {}, j = d && d.capacity || Number.MAX_VALUE, k = {}, l = null, n = null;
                return a[b] = {put: function (a, b) {
                    var c = k[a] || (k[a] = {key: a});
                    e(c);
                    u(b) || (a in i || h++, i[a] = b, h > j && this.remove(n.key))
                }, get: function (a) {
                    var b = k[a];
                    if (b)return e(b),
                        i[a]
                }, remove: function (a) {
                    var b = k[a];
                    if (b) {
                        if (b == l)l = b.p;
                        if (b == n)n = b.n;
                        g(b.n, b.p);
                        delete k[a];
                        delete i[a];
                        h--
                    }
                }, removeAll: function () {
                    i = {};
                    h = 0;
                    k = {};
                    l = n = null
                }, destroy: function () {
                    k = f = i = null;
                    delete a[b]
                }, info: function () {
                    return D({}, f, {size: h})
                }}
            }

            var a = {};
            b.info = function () {
                var b = {};
                m(a, function (a, e) {
                    b[e] = a.info()
                });
                return b
            };
            b.get = function (b) {
                return a[b]
            };
            return b
        }
    }

    function Bc() {
        this.$get = ["$cacheFactory", function (b) {
            return b("templates")
        }]
    }

    function Fb(b) {
        var a = {}, c = "Directive", d = /^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,
            e = /(([\d\w\-_]+)(?:\:([^;]+))?;?)/, g = "Template must have exactly one root element. was: ", h = /^\s*(https?|ftp|mailto|file):/;
        this.directive = function i(d, e) {
            B(d) ? (bb(e, "directive"), a.hasOwnProperty(d) || (a[d] = [], b.factory(d + c, ["$injector", "$exceptionHandler", function (b, c) {
                var e = [];
                m(a[d], function (a) {
                    try {
                        var g = b.invoke(a);
                        if (H(g))g = {compile: I(g)}; else if (!g.compile && g.link)g.compile = I(g.link);
                        g.priority = g.priority || 0;
                        g.name = g.name || d;
                        g.require = g.require || g.controller && g.name;
                        g.restrict = g.restrict || "A";
                        e.push(g)
                    } catch (h) {
                        c(h)
                    }
                });
                return e
            }])), a[d].push(e)) : m(d, ob(i));
            return this
        };
        this.urlSanitizationWhitelist = function (a) {
            return v(a) ? (h = a, this) : h
        };
        this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", function (b, j, k, l, n, o, p, z, r) {
            function x(a, b, c) {
                a instanceof w || (a = w(a));
                m(a, function (b, c) {
                    b.nodeType == 3 && b.nodeValue.match(/\S+/) && (a[c] = w(b).wrap("<span></span>").parent()[0])
                });
                var d = A(a, b, a, c);
                return function (b, c) {
                    bb(b, "scope");
                    for (var e = c ? va.clone.call(a) : a, g = 0, j = e.length; g < j; g++) {
                        var h = e[g];
                        (h.nodeType == 1 || h.nodeType == 9) && e.eq(g).data("$scope", b)
                    }
                    N(e, "ng-scope");
                    c && c(e, b);
                    d && d(b, e, e);
                    return e
                }
            }

            function N(a, b) {
                try {
                    a.addClass(b)
                } catch (c) {
                }
            }

            function A(a, b, c, d) {
                function e(a, c, d, j) {
                    var h, i, k, p, o, l, n, r = [];
                    o = 0;
                    for (l = c.length; o < l; o++)r.push(c[o]);
                    n = o = 0;
                    for (l = g.length; o < l; n++)i = r[n], c = g[o++], h = g[o++], c ? (c.scope ? (k = a.$new(M(c.scope)), w(i).data("$scope", k)) : k = a, (p = c.transclude) || !j && b ? c(h, k, i, d, function (b) {
                        return function (c) {
                            var d =
                                a.$new();
                            d.$$transcluded = !0;
                            return b(d, c).bind("$destroy", Va(d, d.$destroy))
                        }
                    }(p || b)) : c(h, k, i, q, j)) : h && h(a, i.childNodes, q, j)
                }

                for (var g = [], j, h, i, k = 0; k < a.length; k++)h = new ia, j = J(a[k], [], h, d), h = (j = j.length ? K(j, a[k], h, b, c) : null) && j.terminal || !a[k].childNodes || !a[k].childNodes.length ? null : A(a[k].childNodes, j ? j.transclude : b), g.push(j), g.push(h), i = i || j || h;
                return i ? e : null
            }

            function J(a, b, c, g) {
                var j = c.$attr, h;
                switch (a.nodeType) {
                    case 1:
                        C(b, ca(Ga(a).toLowerCase()), "E", g);
                        var i, k, o;
                        h = a.attributes;
                        for (var p = 0, l =
                            h && h.length; p < l; p++)if (i = h[p], !V || V >= 8 || i.specified)k = i.name, o = ca(k.toLowerCase()), j[o] = k, c[o] = i = S(V && k == "href" ? decodeURIComponent(a.getAttribute(k, 2)) : i.value), Cb(a, o) && (c[o] = !0), R(a, b, i, o), C(b, o, "A", g);
                        a = a.className;
                        if (B(a) && a !== "")for (; h = e.exec(a);)o = ca(h[2]), C(b, o, "C", g) && (c[o] = S(h[3])), a = a.substr(h.index + h[0].length);
                        break;
                    case 3:
                        Y(b, a.nodeValue);
                        break;
                    case 8:
                        try {
                            if (h = d.exec(a.nodeValue))o = ca(h[1]), C(b, o, "M", g) && (c[o] = S(h[2]))
                        } catch (n) {
                        }
                }
                b.sort(t);
                return b
            }

            function K(a, b, c, d, e) {
                function j(a, b) {
                    if (a)a.require = t.require, n.push(a);
                    if (b)b.require = t.require, r.push(b)
                }

                function h(a, b) {
                    var c, d = "data", e = !1;
                    if (B(a)) {
                        for (; (c = a.charAt(0)) == "^" || c == "?";)a = a.substr(1), c == "^" && (d = "inheritedData"), e = e || c == "?";
                        c = b[d]("$" + a + "Controller");
                        if (!c && !e)throw Error("No controller: " + a);
                    } else E(a) && (c = [], m(a, function (a) {
                        c.push(h(a, b))
                    }));
                    return c
                }

                function i(a, d, e, g, j) {
                    var l, z, t, F, N;
                    l = b === e ? c : jc(c, new ia(w(e), c.$attr));
                    z = l.$$element;
                    if (K) {
                        var Cc = /^\s*([@=&])\s*(\w*)\s*$/, x = d.$parent || d;
                        m(K.scope, function (a, b) {
                            var c =
                                a.match(Cc) || [], e = c[2] || b, c = c[1], g, j, h;
                            d.$$isolateBindings[b] = c + e;
                            switch (c) {
                                case "@":
                                    l.$observe(e, function (a) {
                                        d[b] = a
                                    });
                                    l.$$observers[e].$$scope = x;
                                    break;
                                case "=":
                                    j = o(l[e]);
                                    h = j.assign || function () {
                                        g = d[b] = j(x);
                                        throw Error(Gb + l[e] + " (directive: " + K.name + ")");
                                    };
                                    g = d[b] = j(x);
                                    d.$watch(function () {
                                        var a = j(x);
                                        a !== d[b] && (a !== g ? g = d[b] = a : h(x, a = g = d[b]));
                                        return a
                                    });
                                    break;
                                case "&":
                                    j = o(l[e]);
                                    d[b] = function (a) {
                                        return j(x, a)
                                    };
                                    break;
                                default:
                                    throw Error("Invalid isolate scope definition for directive " + K.name + ": " + a);
                            }
                        })
                    }
                    Y &&
                    m(Y, function (a) {
                        var b = {$scope: d, $element: z, $attrs: l, $transclude: j};
                        N = a.controller;
                        N == "@" && (N = l[a.name]);
                        z.data("$" + a.name + "Controller", p(N, b))
                    });
                    g = 0;
                    for (t = n.length; g < t; g++)try {
                        F = n[g], F(d, z, l, F.require && h(F.require, z))
                    } catch (A) {
                        k(A, qa(z))
                    }
                    a && a(d, e.childNodes, q, j);
                    g = 0;
                    for (t = r.length; g < t; g++)try {
                        F = r[g], F(d, z, l, F.require && h(F.require, z))
                    } catch (Dc) {
                        k(Dc, qa(z))
                    }
                }

                for (var l = -Number.MAX_VALUE, n = [], r = [], z = null, K = null, A = null, F = c.$$element = w(b), t, C, R, ja, da = d, Y, s, u, D = 0, y = a.length; D < y; D++) {
                    t = a[D];
                    R = q;
                    if (l > t.priority)break;
                    if (u = t.scope)ua("isolated scope", K, t, F), M(u) && (N(F, "ng-isolate-scope"), K = t), N(F, "ng-scope"), z = z || t;
                    C = t.name;
                    if (u = t.controller)Y = Y || {}, ua("'" + C + "' controller", Y[C], t, F), Y[C] = t;
                    if (u = t.transclude)ua("transclusion", ja, t, F), ja = t, l = t.priority, u == "element" ? (R = w(b), F = c.$$element = w(T.createComment(" " + C + ": " + c[C] + " ")), b = F[0], v(e, w(R[0]), b), da = x(R, d, l)) : (R = w(fb(b)).contents(), F.html(""), da = x(R, d));
                    if (u = t.template)if (ua("template", A, t, F), A = t, u = Hb(u), t.replace) {
                        R = w("<div>" + S(u) + "</div>").contents();
                        b = R[0];
                        if (R.length !=
                            1 || b.nodeType !== 1)throw Error(g + u);
                        v(e, F, b);
                        C = {$attr: {}};
                        a = a.concat(J(b, a.splice(D + 1, a.length - (D + 1)), C));
                        ga(c, C);
                        y = a.length
                    } else F.html(u);
                    if (t.templateUrl)ua("template", A, t, F), A = t, i = Q(a.splice(D, a.length - D), i, F, c, e, t.replace, da), y = a.length; else if (t.compile)try {
                        s = t.compile(F, c, da), H(s) ? j(null, s) : s && j(s.pre, s.post)
                    } catch (G) {
                        k(G, qa(F))
                    }
                    if (t.terminal)i.terminal = !0, l = Math.max(l, t.priority)
                }
                i.scope = z && z.scope;
                i.transclude = ja && da;
                return i
            }

            function C(d, e, g, j) {
                var h = !1;
                if (a.hasOwnProperty(e))for (var o, e =
                    b.get(e + c), l = 0, p = e.length; l < p; l++)try {
                    if (o = e[l], (j === q || j > o.priority) && o.restrict.indexOf(g) != -1)d.push(o), h = !0
                } catch (n) {
                    k(n)
                }
                return h
            }

            function ga(a, b) {
                var c = b.$attr, d = a.$attr, e = a.$$element;
                m(a, function (d, e) {
                    e.charAt(0) != "$" && (b[e] && (d += (e === "style" ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
                });
                m(b, function (b, g) {
                    g == "class" ? (N(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : g == "style" ? e.attr("style", e.attr("style") + ";" + b) : g.charAt(0) != "$" && !a.hasOwnProperty(g) && (a[g] = b, d[g] = c[g])
                })
            }

            function Q(a, b, c, d, e, j, h) {
                var i = [], k, o, p = c[0], r = a.shift(), z = D({}, r, {controller: null, templateUrl: null, transclude: null, scope: null});
                c.html("");
                l.get(r.templateUrl, {cache: n}).success(function (l) {
                    var n, r, l = Hb(l);
                    if (j) {
                        r = w("<div>" + S(l) + "</div>").contents();
                        n = r[0];
                        if (r.length != 1 || n.nodeType !== 1)throw Error(g + l);
                        l = {$attr: {}};
                        v(e, c, n);
                        J(n, a, l);
                        ga(d, l)
                    } else n = p, c.html(l);
                    a.unshift(z);
                    k = K(a, n, d, h);
                    for (o = A(c[0].childNodes, h); i.length;) {
                        var ia = i.pop(), l = i.pop();
                        r = i.pop();
                        var F = i.pop(), t = n;
                        r !== p && (t = fb(n), v(l, w(r), t));
                        k(function () {
                            b(o,
                                F, t, e, ia)
                        }, F, t, e, ia)
                    }
                    i = null
                }).error(function (a, b, c, d) {
                        throw Error("Failed to load template: " + d.url);
                    });
                return function (a, c, d, e, g) {
                    i ? (i.push(c), i.push(d), i.push(e), i.push(g)) : k(function () {
                        b(o, c, d, e, g)
                    }, c, d, e, g)
                }
            }

            function t(a, b) {
                return b.priority - a.priority
            }

            function ua(a, b, c, d) {
                if (b)throw Error("Multiple directives [" + b.name + ", " + c.name + "] asking for " + a + " on: " + qa(d));
            }

            function Y(a, b) {
                var c = j(b, !0);
                c && a.push({priority: 0, compile: I(function (a, b) {
                    var d = b.parent(), e = d.data("$binding") || [];
                    e.push(c);
                    N(d.data("$binding",
                        e), "ng-binding");
                    a.$watch(c, function (a) {
                        b[0].nodeValue = a
                    })
                })})
            }

            function R(a, b, c, d) {
                var e = j(c, !0);
                e && b.push({priority: 100, compile: I(function (a, b, c) {
                    b = c.$$observers || (c.$$observers = {});
                    d === "class" && (e = j(c[d], !0));
                    c[d] = q;
                    (b[d] || (b[d] = [])).$$inter = !0;
                    (c.$$observers && c.$$observers[d].$$scope || a).$watch(e, function (a) {
                        c.$set(d, a)
                    })
                })})
            }

            function v(a, b, c) {
                var d = b[0], e = d.parentNode, g, j;
                if (a) {
                    g = 0;
                    for (j = a.length; g < j; g++)if (a[g] == d) {
                        a[g] = c;
                        break
                    }
                }
                e && e.replaceChild(c, d);
                c[w.expando] = d[w.expando];
                b[0] = c
            }

            var ia =
                function (a, b) {
                    this.$$element = a;
                    this.$attr = b || {}
                };
            ia.prototype = {$normalize: ca, $set: function (a, b, c, d) {
                var e = Cb(this.$$element[0], a), g = this.$$observers;
                e && (this.$$element.prop(a, b), d = e);
                this[a] = b;
                d ? this.$attr[a] = d : (d = this.$attr[a]) || (this.$attr[a] = d = ab(a, "-"));
                if (Ga(this.$$element[0]) === "A" && a === "href")F.setAttribute("href", b), e = F.href, e !== "" && !e.match(h) && (this[a] = b = "unsafe:" + e);
                c !== !1 && (b === null || b === q ? this.$$element.removeAttr(d) : this.$$element.attr(d, b));
                g && m(g[a], function (a) {
                    try {
                        a(b)
                    } catch (c) {
                        k(c)
                    }
                })
            },
                $observe: function (a, b) {
                    var c = this, d = c.$$observers || (c.$$observers = {}), e = d[a] || (d[a] = []);
                    e.push(b);
                    z.$evalAsync(function () {
                        e.$$inter || b(c[a])
                    });
                    return b
                }};
            var F = r[0].createElement("a"), ja = j.startSymbol(), da = j.endSymbol(), Hb = ja == "{{" || da == "}}" ? na : function (a) {
                return a.replace(/\{\{/g, ja).replace(/}}/g, da)
            };
            return x
        }]
    }

    function ca(b) {
        return vb(b.replace(Ec, ""))
    }

    function Fc() {
        var b = {};
        this.register = function (a, c) {
            M(a) ? D(b, a) : b[a] = c
        };
        this.$get = ["$injector", "$window", function (a, c) {
            return function (d, e) {
                if (B(d)) {
                    var g =
                        d, d = b.hasOwnProperty(g) ? b[g] : cb(e.$scope, g, !0) || cb(c, g, !0);
                    ra(d, g, !0)
                }
                return a.instantiate(d, e)
            }
        }]
    }

    function Gc() {
        this.$get = ["$window", function (b) {
            return w(b.document)
        }]
    }

    function Hc() {
        this.$get = ["$log", function (b) {
            return function (a, c) {
                b.error.apply(b, arguments)
            }
        }]
    }

    function Ic() {
        var b = "{{", a = "}}";
        this.startSymbol = function (a) {
            return a ? (b = a, this) : b
        };
        this.endSymbol = function (b) {
            return b ? (a = b, this) : a
        };
        this.$get = ["$parse", function (c) {
            function d(d, f) {
                for (var i, j, k = 0, l = [], n = d.length, o = !1, p = []; k < n;)(i = d.indexOf(b,
                    k)) != -1 && (j = d.indexOf(a, i + e)) != -1 ? (k != i && l.push(d.substring(k, i)), l.push(k = c(o = d.substring(i + e, j))), k.exp = o, k = j + g, o = !0) : (k != n && l.push(d.substring(k)), k = n);
                if (!(n = l.length))l.push(""), n = 1;
                if (!f || o)return p.length = n, k = function (a) {
                    for (var b = 0, c = n, d; b < c; b++) {
                        if (typeof(d = l[b]) == "function")d = d(a), d == null || d == q ? d = "" : typeof d != "string" && (d = ba(d));
                        p[b] = d
                    }
                    return p.join("")
                }, k.exp = d, k.parts = l, k
            }

            var e = b.length, g = a.length;
            d.startSymbol = function () {
                return b
            };
            d.endSymbol = function () {
                return a
            };
            return d
        }]
    }

    function Ib(b) {
        for (var b =
            b.split("/"), a = b.length; a--;)b[a] = Za(b[a]);
        return b.join("/")
    }

    function wa(b, a) {
        var c = Jb.exec(b), c = {protocol: c[1], host: c[3], port: G(c[5]) || Kb[c[1]] || null, path: c[6] || "/", search: c[8], hash: c[10]};
        if (a)a.$$protocol = c.protocol, a.$$host = c.host, a.$$port = c.port;
        return c
    }

    function ka(b, a, c) {
        return b + "://" + a + (c == Kb[b] ? "" : ":" + c)
    }

    function Jc(b, a, c) {
        var d = wa(b);
        return decodeURIComponent(d.path) != a || u(d.hash) || d.hash.indexOf(c) !== 0 ? b : ka(d.protocol, d.host, d.port) + a.substr(0, a.lastIndexOf("/")) + d.hash.substr(c.length)
    }

    function Kc(b, a, c) {
        var d = wa(b);
        if (decodeURIComponent(d.path) == a && !u(d.hash) && d.hash.indexOf(c) === 0)return b; else {
            var e = d.search && "?" + d.search || "", g = d.hash && "#" + d.hash || "", h = a.substr(0, a.lastIndexOf("/")), f = d.path.substr(h.length);
            if (d.path.indexOf(h) !== 0)throw Error('Invalid url "' + b + '", missing path prefix "' + h + '" !');
            return ka(d.protocol, d.host, d.port) + a + "#" + c + f + e + g
        }
    }

    function ib(b, a, c) {
        a = a || "";
        this.$$parse = function (b) {
            var c = wa(b, this);
            if (c.path.indexOf(a) !== 0)throw Error('Invalid url "' + b + '", missing path prefix "' +
                a + '" !');
            this.$$path = decodeURIComponent(c.path.substr(a.length));
            this.$$search = Xa(c.search);
            this.$$hash = c.hash && decodeURIComponent(c.hash) || "";
            this.$$compose()
        };
        this.$$compose = function () {
            var b = sb(this.$$search), c = this.$$hash ? "#" + Za(this.$$hash) : "";
            this.$$url = Ib(this.$$path) + (b ? "?" + b : "") + c;
            this.$$absUrl = ka(this.$$protocol, this.$$host, this.$$port) + a + this.$$url
        };
        this.$$rewriteAppUrl = function (a) {
            if (a.indexOf(c) == 0)return a
        };
        this.$$parse(b)
    }

    function Ha(b, a, c) {
        var d;
        this.$$parse = function (b) {
            var c = wa(b,
                this);
            if (c.hash && c.hash.indexOf(a) !== 0)throw Error('Invalid url "' + b + '", missing hash prefix "' + a + '" !');
            d = c.path + (c.search ? "?" + c.search : "");
            c = Lc.exec((c.hash || "").substr(a.length));
            this.$$path = c[1] ? (c[1].charAt(0) == "/" ? "" : "/") + decodeURIComponent(c[1]) : "";
            this.$$search = Xa(c[3]);
            this.$$hash = c[5] && decodeURIComponent(c[5]) || "";
            this.$$compose()
        };
        this.$$compose = function () {
            var b = sb(this.$$search), c = this.$$hash ? "#" + Za(this.$$hash) : "";
            this.$$url = Ib(this.$$path) + (b ? "?" + b : "") + c;
            this.$$absUrl = ka(this.$$protocol,
                this.$$host, this.$$port) + d + (this.$$url ? "#" + a + this.$$url : "")
        };
        this.$$rewriteAppUrl = function (a) {
            if (a.indexOf(c) == 0)return a
        };
        this.$$parse(b)
    }

    function Lb(b, a, c, d) {
        Ha.apply(this, arguments);
        this.$$rewriteAppUrl = function (b) {
            if (b.indexOf(c) == 0)return c + d + "#" + a + b.substr(c.length)
        }
    }

    function Ia(b) {
        return function () {
            return this[b]
        }
    }

    function Mb(b, a) {
        return function (c) {
            if (u(c))return this[b];
            this[b] = a(c);
            this.$$compose();
            return this
        }
    }

    function Mc() {
        var b = "", a = !1;
        this.hashPrefix = function (a) {
            return v(a) ? (b = a, this) :
                b
        };
        this.html5Mode = function (b) {
            return v(b) ? (a = b, this) : a
        };
        this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", function (c, d, e, g) {
            function h(a) {
                c.$broadcast("$locationChangeSuccess", f.absUrl(), a)
            }

            var f, i, j, k = d.url(), l = wa(k);
            a ? (i = d.baseHref() || "/", j = i.substr(0, i.lastIndexOf("/")), l = ka(l.protocol, l.host, l.port) + j + "/", f = e.history ? new ib(Jc(k, i, b), j, l) : new Lb(Kc(k, i, b), b, l, i.substr(j.length + 1))) : (l = ka(l.protocol, l.host, l.port) + (l.path || "") + (l.search ? "?" + l.search : "") + "#" + b + "/", f = new Ha(k, b, l));
            g.bind("click",
                function (a) {
                    if (!a.ctrlKey && !(a.metaKey || a.which == 2)) {
                        for (var b = w(a.target); y(b[0].nodeName) !== "a";)if (b[0] === g[0] || !(b = b.parent())[0])return;
                        var d = b.prop("href"), e = f.$$rewriteAppUrl(d);
                        d && !b.attr("target") && e && (f.$$parse(e), c.$apply(), a.preventDefault(), P.angular["ff-684208-preventDefault"] = !0)
                    }
                });
            f.absUrl() != k && d.url(f.absUrl(), !0);
            d.onUrlChange(function (a) {
                f.absUrl() != a && (c.$broadcast("$locationChangeStart", a, f.absUrl()).defaultPrevented ? d.url(f.absUrl()) : (c.$evalAsync(function () {
                    var b = f.absUrl();
                    f.$$parse(a);
                    h(b)
                }), c.$$phase || c.$digest()))
            });
            var n = 0;
            c.$watch(function () {
                var a = d.url(), b = f.$$replace;
                if (!n || a != f.absUrl())n++, c.$evalAsync(function () {
                    c.$broadcast("$locationChangeStart", f.absUrl(), a).defaultPrevented ? f.$$parse(a) : (d.url(f.absUrl(), b), h(a))
                });
                f.$$replace = !1;
                return n
            });
            return f
        }]
    }

    function Nc() {
        this.$get = ["$window", function (b) {
            function a(a) {
                a instanceof Error && (a.stack ? a = a.message && a.stack.indexOf(a.message) === -1 ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" +
                    a.sourceURL + ":" + a.line));
                return a
            }

            function c(c) {
                var e = b.console || {}, g = e[c] || e.log || s;
                return g.apply ? function () {
                    var b = [];
                    m(arguments, function (c) {
                        b.push(a(c))
                    });
                    return g.apply(e, b)
                } : function (a, b) {
                    g(a, b)
                }
            }

            return{log: c("log"), warn: c("warn"), info: c("info"), error: c("error")}
        }]
    }

    function Oc(b, a) {
        function c(a) {
            return a.indexOf(r) != -1
        }

        function d() {
            return p + 1 < b.length ? b.charAt(p + 1) : !1
        }

        function e(a) {
            return"0" <= a && a <= "9"
        }

        function g(a) {
            return a == " " || a == "\r" || a == "\t" || a == "\n" || a == "\u000b" || a == "\u00a0"
        }

        function h(a) {
            return"a" <=
                a && a <= "z" || "A" <= a && a <= "Z" || "_" == a || a == "$"
        }

        function f(a) {
            return a == "-" || a == "+" || e(a)
        }

        function i(a, c, d) {
            d = d || p;
            throw Error("Lexer Error: " + a + " at column" + (v(c) ? "s " + c + "-" + p + " [" + b.substring(c, d) + "]" : " " + d) + " in expression [" + b + "].");
        }

        function j() {
            for (var a = "", c = p; p < b.length;) {
                var g = y(b.charAt(p));
                if (g == "." || e(g))a += g; else {
                    var j = d();
                    if (g == "e" && f(j))a += g; else if (f(g) && j && e(j) && a.charAt(a.length - 1) == "e")a += g; else if (f(g) && (!j || !e(j)) && a.charAt(a.length - 1) == "e")i("Invalid exponent"); else break
                }
                p++
            }
            a *= 1;
            n.push({index: c, text: a, json: !0, fn: function () {
                return a
            }})
        }

        function k() {
            for (var c = "", d = p, f, j, i, k; p < b.length;) {
                k = b.charAt(p);
                if (k == "." || h(k) || e(k))k == "." && (f = p), c += k; else break;
                p++
            }
            if (f)for (j = p; j < b.length;) {
                k = b.charAt(j);
                if (k == "(") {
                    i = c.substr(f - d + 1);
                    c = c.substr(0, f - d);
                    p = j;
                    break
                }
                if (g(k))j++; else break
            }
            d = {index: d, text: c};
            if (Ja.hasOwnProperty(c))d.fn = d.json = Ja[c]; else {
                var l = Nb(c, a);
                d.fn = D(function (a, b) {
                    return l(a, b)
                }, {assign: function (a, b) {
                    return Ob(a, c, b)
                }})
            }
            n.push(d);
            i && (n.push({index: f, text: ".", json: !1}),
                n.push({index: f + 1, text: i, json: !1}))
        }

        function l(a) {
            var c = p;
            p++;
            for (var d = "", e = a, f = !1; p < b.length;) {
                var g = b.charAt(p);
                e += g;
                if (f)g == "u" ? (g = b.substring(p + 1, p + 5), g.match(/[\da-f]{4}/i) || i("Invalid unicode escape [\\u" + g + "]"), p += 4, d += String.fromCharCode(parseInt(g, 16))) : (f = Pc[g], d += f ? f : g), f = !1; else if (g == "\\")f = !0; else if (g == a) {
                    p++;
                    n.push({index: c, text: e, string: d, json: !0, fn: function () {
                        return d
                    }});
                    return
                } else d += g;
                p++
            }
            i("Unterminated quote", c)
        }

        for (var n = [], o, p = 0, z = [], r, x = ":"; p < b.length;) {
            r = b.charAt(p);
            if (c("\"'"))l(r);
            else if (e(r) || c(".") && e(d()))j(); else if (h(r)) {
                if (k(), "{,".indexOf(x) != -1 && z[0] == "{" && (o = n[n.length - 1]))o.json = o.text.indexOf(".") == -1
            } else if (c("(){}[].,;:"))n.push({index: p, text: r, json: ":[,".indexOf(x) != -1 && c("{[") || c("}]:,")}), c("{[") && z.unshift(r), c("}]") && z.shift(), p++; else if (g(r)) {
                p++;
                continue
            } else {
                var m = r + d(), A = Ja[r], J = Ja[m];
                J ? (n.push({index: p, text: m, fn: J}), p += 2) : A ? (n.push({index: p, text: r, fn: A, json: "[,:".indexOf(x) != -1 && c("+-")}), p += 1) : i("Unexpected next character ", p, p + 1)
            }
            x = r
        }
        return n
    }

    function Qc(b, a, c, d) {
        function e(a, c) {
            throw Error("Syntax Error: Token '" + c.text + "' " + a + " at column " + (c.index + 1) + " of the expression [" + b + "] starting at [" + b.substring(c.index) + "].");
        }

        function g() {
            if (Q.length === 0)throw Error("Unexpected end of expression: " + b);
            return Q[0]
        }

        function h(a, b, c, d) {
            if (Q.length > 0) {
                var e = Q[0], f = e.text;
                if (f == a || f == b || f == c || f == d || !a && !b && !c && !d)return e
            }
            return!1
        }

        function f(b, c, d, f) {
            return(b = h(b, c, d, f)) ? (a && !b.json && e("is not valid json", b), Q.shift(), b) : !1
        }

        function i(a) {
            f(a) || e("is unexpected, expecting [" +
                a + "]", h())
        }

        function j(a, b) {
            return function (c, d) {
                return a(c, d, b)
            }
        }

        function k(a, b, c) {
            return function (d, e) {
                return b(d, e, a, c)
            }
        }

        function l() {
            for (var a = []; ;)if (Q.length > 0 && !h("}", ")", ";", "]") && a.push(v()), !f(";"))return a.length == 1 ? a[0] : function (b, c) {
                for (var d, e = 0; e < a.length; e++) {
                    var f = a[e];
                    f && (d = f(b, c))
                }
                return d
            }
        }

        function n() {
            for (var a = f(), b = c(a.text), d = []; ;)if (a = f(":"))d.push(t()); else {
                var e = function (a, c, e) {
                    for (var e = [e], f = 0; f < d.length; f++)e.push(d[f](a, c));
                    return b.apply(a, e)
                };
                return function () {
                    return e
                }
            }
        }

        function o() {
            for (var a = p(), b; ;)if (b = f("||"))a = k(a, b.fn, p()); else return a
        }

        function p() {
            var a = z(), b;
            if (b = f("&&"))a = k(a, b.fn, p());
            return a
        }

        function z() {
            var a = r(), b;
            if (b = f("==", "!="))a = k(a, b.fn, z());
            return a
        }

        function r() {
            var a;
            a = x();
            for (var b; b = f("+", "-");)a = k(a, b.fn, x());
            if (b = f("<", ">", "<=", ">="))a = k(a, b.fn, r());
            return a
        }

        function x() {
            for (var a = m(), b; b = f("*", "/", "%");)a = k(a, b.fn, m());
            return a
        }

        function m() {
            var a;
            return f("+") ? A() : (a = f("-")) ? k(C, a.fn, m()) : (a = f("!")) ? j(a.fn, m()) : A()
        }

        function A() {
            var a;
            if (f("("))a = v(), i(")"); else if (f("["))a = J(); else if (f("{"))a = K(); else {
                var b = f();
                (a = b.fn) || e("not a primary expression", b)
            }
            for (var c; b = f("(", "[", ".");)b.text === "(" ? (a = w(a, c), c = null) : b.text === "[" ? (c = a, a = R(a)) : b.text === "." ? (c = a, a = Y(a)) : e("IMPOSSIBLE");
            return a
        }

        function J() {
            var a = [];
            if (g().text != "]") {
                do a.push(t()); while (f(","))
            }
            i("]");
            return function (b, c) {
                for (var d = [], e = 0; e < a.length; e++)d.push(a[e](b, c));
                return d
            }
        }

        function K() {
            var a = [];
            if (g().text != "}") {
                do {
                    var b = f(), b = b.string || b.text;
                    i(":");
                    var c = t();
                    a.push({key: b, value: c})
                } while (f(","))
            }
            i("}");
            return function (b, c) {
                for (var d = {}, e = 0; e < a.length; e++) {
                    var f = a[e];
                    d[f.key] = f.value(b, c)
                }
                return d
            }
        }

        var C = I(0), u, Q = Oc(b, d), t = function () {
            var a = o(), c, d;
            return(d = f("=")) ? (a.assign || e("implies assignment but [" + b.substring(0, d.index) + "] can not be assigned to", d), c = o(), function (b, d) {
                return a.assign(b, c(b, d), d)
            }) : a
        }, w = function (a, b) {
            var c = [];
            if (g().text != ")") {
                do c.push(t()); while (f(","))
            }
            i(")");
            return function (d, e) {
                for (var f = [], g = b ? b(d, e) : d, j = 0; j < c.length; j++)f.push(c[j](d,
                    e));
                j = a(d, e, g) || s;
                return j.apply ? j.apply(g, f) : j(f[0], f[1], f[2], f[3], f[4])
            }
        }, Y = function (a) {
            var b = f().text, c = Nb(b, d);
            return D(function (b, d, e) {
                return c(e || a(b, d), d)
            }, {assign: function (c, d, e) {
                return Ob(a(c, e), b, d)
            }})
        }, R = function (a) {
            var b = t();
            i("]");
            return D(function (c, d) {
                var e = a(c, d), f = b(c, d), g;
                if (!e)return q;
                if ((e = e[f]) && e.then) {
                    g = e;
                    if (!("$$v"in e))g.$$v = q, g.then(function (a) {
                        g.$$v = a
                    });
                    e = e.$$v
                }
                return e
            }, {assign: function (c, d, e) {
                return a(c, e)[b(c, e)] = d
            }})
        }, v = function () {
            for (var a = t(), b; ;)if (b = f("|"))a = k(a,
                b.fn, n()); else return a
        };
        a ? (t = o, w = Y = R = v = function () {
            e("is not valid json", {text: b, index: 0})
        }, u = A()) : u = l();
        Q.length !== 0 && e("is an unexpected token", Q[0]);
        return u
    }

    function Ob(b, a, c) {
        for (var a = a.split("."), d = 0; a.length > 1; d++) {
            var e = a.shift(), g = b[e];
            g || (g = {}, b[e] = g);
            b = g
        }
        return b[a.shift()] = c
    }

    function Pb(b, a, c, d, e) {
        return function (g, h) {
            var f = h && h.hasOwnProperty(b) ? h : g, i;
            if (f === null || f === q)return f;
            if ((f = f[b]) && f.then) {
                if (!("$$v"in f))i = f, i.$$v = q, i.then(function (a) {
                    i.$$v = a
                });
                f = f.$$v
            }
            if (!a || f === null || f ===
                q)return f;
            if ((f = f[a]) && f.then) {
                if (!("$$v"in f))i = f, i.$$v = q, i.then(function (a) {
                    i.$$v = a
                });
                f = f.$$v
            }
            if (!c || f === null || f === q)return f;
            if ((f = f[c]) && f.then) {
                if (!("$$v"in f))i = f, i.$$v = q, i.then(function (a) {
                    i.$$v = a
                });
                f = f.$$v
            }
            if (!d || f === null || f === q)return f;
            if ((f = f[d]) && f.then) {
                if (!("$$v"in f))i = f, i.$$v = q, i.then(function (a) {
                    i.$$v = a
                });
                f = f.$$v
            }
            if (!e || f === null || f === q)return f;
            if ((f = f[e]) && f.then) {
                if (!("$$v"in f))i = f, i.$$v = q, i.then(function (a) {
                    i.$$v = a
                });
                f = f.$$v
            }
            return f
        }
    }

    function Nb(b, a) {
        if (jb.hasOwnProperty(b))return jb[b];
        var c = b.split("."), d = c.length, e;
        if (a)e = d < 6 ? Pb(c[0], c[1], c[2], c[3], c[4]) : function (a, b) {
            var e = 0, g;
            do g = Pb(c[e++], c[e++], c[e++], c[e++], c[e++])(a, b), b = q, a = g; while (e < d);
            return g
        }; else {
            var g = "var l, fn, p;\n";
            m(c, function (a, b) {
                g += "if(s === null || s === undefined) return s;\nl=s;\ns=" + (b ? "s" : '((k&&k.hasOwnProperty("' + a + '"))?k:s)') + '["' + a + '"];\nif (s && s.then) {\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n'
            });
            g += "return s;";
            e = Function("s", "k", g);
            e.toString = function () {
                return g
            }
        }
        return jb[b] = e
    }

    function Rc() {
        var b = {};
        this.$get = ["$filter", "$sniffer", function (a, c) {
            return function (d) {
                switch (typeof d) {
                    case "string":
                        return b.hasOwnProperty(d) ? b[d] : b[d] = Qc(d, !1, a, c.csp);
                    case "function":
                        return d;
                    default:
                        return s
                }
            }
        }]
    }

    function Sc() {
        this.$get = ["$rootScope", "$exceptionHandler", function (b, a) {
            return Tc(function (a) {
                b.$evalAsync(a)
            }, a)
        }]
    }

    function Tc(b, a) {
        function c(a) {
            return a
        }

        function d(a) {
            return h(a)
        }

        var e = function () {
            var f = [], i, j;
            return j = {resolve: function (a) {
                if (f) {
                    var c =
                        f;
                    f = q;
                    i = g(a);
                    c.length && b(function () {
                        for (var a, b = 0, d = c.length; b < d; b++)a = c[b], i.then(a[0], a[1])
                    })
                }
            }, reject: function (a) {
                j.resolve(h(a))
            }, promise: {then: function (b, g) {
                var j = e(), h = function (d) {
                    try {
                        j.resolve((b || c)(d))
                    } catch (e) {
                        j.reject(e), a(e)
                    }
                }, p = function (b) {
                    try {
                        j.resolve((g || d)(b))
                    } catch (c) {
                        j.reject(c), a(c)
                    }
                };
                f ? f.push([h, p]) : i.then(h, p);
                return j.promise
            }}}
        }, g = function (a) {
            return a && a.then ? a : {then: function (c) {
                var d = e();
                b(function () {
                    d.resolve(c(a))
                });
                return d.promise
            }}
        }, h = function (a) {
            return{then: function (c, g) {
                var h = e();
                b(function () {
                    h.resolve((g || d)(a))
                });
                return h.promise
            }}
        };
        return{defer: e, reject: h, when: function (f, i, j) {
            var k = e(), l, n = function (b) {
                try {
                    return(i || c)(b)
                } catch (d) {
                    return a(d), h(d)
                }
            }, o = function (b) {
                try {
                    return(j || d)(b)
                } catch (c) {
                    return a(c), h(c)
                }
            };
            b(function () {
                g(f).then(function (a) {
                    l || (l = !0, k.resolve(g(a).then(n, o)))
                }, function (a) {
                    l || (l = !0, k.resolve(o(a)))
                })
            });
            return k.promise
        }, all: function (a) {
            var b = e(), c = a.length, d = [];
            c ? m(a, function (a, e) {
                g(a).then(function (a) {
                        e in d || (d[e] = a, --c || b.resolve(d))
                    },
                    function (a) {
                        e in d || b.reject(a)
                    })
            }) : b.resolve(d);
            return b.promise
        }}
    }

    function Uc() {
        var b = {};
        this.when = function (a, c) {
            b[a] = D({reloadOnSearch: !0}, c);
            if (a) {
                var d = a[a.length - 1] == "/" ? a.substr(0, a.length - 1) : a + "/";
                b[d] = {redirectTo: a}
            }
            return this
        };
        this.otherwise = function (a) {
            this.when(null, a);
            return this
        };
        this.$get = ["$rootScope", "$location", "$routeParams", "$q", "$injector", "$http", "$templateCache", function (a, c, d, e, g, h, f) {
            function i(a, b) {
                for (var b = "^" + b.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") + "$", c = "", d = [], e =
                {}, f = /:(\w+)/g, g, j = 0; (g = f.exec(b)) !== null;)c += b.slice(j, g.index), c += "([^\\/]*)", d.push(g[1]), j = f.lastIndex;
                c += b.substr(j);
                var h = a.match(RegExp(c));
                h && m(d, function (a, b) {
                    e[a] = h[b + 1]
                });
                return h ? e : null
            }

            function j() {
                var b = k(), j = o.current;
                if (b && j && b.$$route === j.$$route && ea(b.pathParams, j.pathParams) && !b.reloadOnSearch && !n)j.params = b.params, U(j.params, d), a.$broadcast("$routeUpdate", j); else if (b || j)n = !1, a.$broadcast("$routeChangeStart", b, j), (o.current = b) && b.redirectTo && (B(b.redirectTo) ? c.path(l(b.redirectTo,
                    b.params)).search(b.params).replace() : c.url(b.redirectTo(b.pathParams, c.path(), c.search())).replace()), e.when(b).then(function () {
                    if (b) {
                        var a = [], c = [], d;
                        m(b.resolve || {}, function (b, d) {
                            a.push(d);
                            c.push(B(b) ? g.get(b) : g.invoke(b))
                        });
                        if (!v(d = b.template))if (v(d = b.templateUrl))d = h.get(d, {cache: f}).then(function (a) {
                            return a.data
                        });
                        v(d) && (a.push("$template"), c.push(d));
                        return e.all(c).then(function (b) {
                            var c = {};
                            m(b, function (b, d) {
                                c[a[d]] = b
                            });
                            return c
                        })
                    }
                }).then(function (c) {
                        if (b == o.current) {
                            if (b)b.locals = c, U(b.params,
                                d);
                            a.$broadcast("$routeChangeSuccess", b, j)
                        }
                    }, function (c) {
                        b == o.current && a.$broadcast("$routeChangeError", b, j, c)
                    })
            }

            function k() {
                var a, d;
                m(b, function (b, e) {
                    if (!d && (a = i(c.path(), e)))d = ya(b, {params: D({}, c.search(), a), pathParams: a}), d.$$route = b
                });
                return d || b[null] && ya(b[null], {params: {}, pathParams: {}})
            }

            function l(a, b) {
                var c = [];
                m((a || "").split(":"), function (a, d) {
                    if (d == 0)c.push(a); else {
                        var e = a.match(/(\w+)(.*)/), f = e[1];
                        c.push(b[f]);
                        c.push(e[2] || "");
                        delete b[f]
                    }
                });
                return c.join("")
            }

            var n = !1, o = {routes: b, reload: function () {
                n = !0;
                a.$evalAsync(j)
            }};
            a.$on("$locationChangeSuccess", j);
            return o
        }]
    }

    function Vc() {
        this.$get = I({})
    }

    function Wc() {
        var b = 10;
        this.digestTtl = function (a) {
            arguments.length && (b = a);
            return b
        };
        this.$get = ["$injector", "$exceptionHandler", "$parse", function (a, c, d) {
            function e() {
                this.$id = xa();
                this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
                this["this"] = this.$root = this;
                this.$$destroyed = !1;
                this.$$asyncQueue = [];
                this.$$listeners = {};
                this.$$isolateBindings =
                {}
            }

            function g(a) {
                if (i.$$phase)throw Error(i.$$phase + " already in progress");
                i.$$phase = a
            }

            function h(a, b) {
                var c = d(a);
                ra(c, b);
                return c
            }

            function f() {
            }

            e.prototype = {$new: function (a) {
                if (H(a))throw Error("API-CHANGE: Use $controller to instantiate controllers.");
                a ? (a = new e, a.$root = this.$root) : (a = function () {
                }, a.prototype = this, a = new a, a.$id = xa());
                a["this"] = a;
                a.$$listeners = {};
                a.$parent = this;
                a.$$asyncQueue = [];
                a.$$watchers = a.$$nextSibling = a.$$childHead = a.$$childTail = null;
                a.$$prevSibling = this.$$childTail;
                this.$$childHead ?
                    this.$$childTail = this.$$childTail.$$nextSibling = a : this.$$childHead = this.$$childTail = a;
                return a
            }, $watch: function (a, b, c) {
                var d = h(a, "watch"), e = this.$$watchers, g = {fn: b, last: f, get: d, exp: a, eq: !!c};
                if (!H(b)) {
                    var i = h(b || s, "listener");
                    g.fn = function (a, b, c) {
                        i(c)
                    }
                }
                if (!e)e = this.$$watchers = [];
                e.unshift(g);
                return function () {
                    Ua(e, g)
                }
            }, $digest: function () {
                var a, d, e, h, o, p, m, r = b, x, q = [], A, J;
                g("$digest");
                do {
                    m = !1;
                    x = this;
                    do {
                        for (o = x.$$asyncQueue; o.length;)try {
                            x.$eval(o.shift())
                        } catch (K) {
                            c(K)
                        }
                        if (h = x.$$watchers)for (p = h.length; p--;)try {
                            if ((a =
                                h[p]) && (d = a.get(x)) !== (e = a.last) && !(a.eq ? ea(d, e) : typeof d == "number" && typeof e == "number" && isNaN(d) && isNaN(e)))m = !0, a.last = a.eq ? U(d) : d, a.fn(d, e === f ? d : e, x), r < 5 && (A = 4 - r, q[A] || (q[A] = []), J = H(a.exp) ? "fn: " + (a.exp.name || a.exp.toString()) : a.exp, J += "; newVal: " + ba(d) + "; oldVal: " + ba(e), q[A].push(J))
                        } catch (C) {
                            c(C)
                        }
                        if (!(h = x.$$childHead || x !== this && x.$$nextSibling))for (; x !== this && !(h = x.$$nextSibling);)x = x.$parent
                    } while (x = h);
                    if (m && !r--)throw i.$$phase = null, Error(b + " $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: " +
                        ba(q));
                } while (m || o.length);
                i.$$phase = null
            }, $destroy: function () {
                if (!(i == this || this.$$destroyed)) {
                    var a = this.$parent;
                    this.$broadcast("$destroy");
                    this.$$destroyed = !0;
                    if (a.$$childHead == this)a.$$childHead = this.$$nextSibling;
                    if (a.$$childTail == this)a.$$childTail = this.$$prevSibling;
                    if (this.$$prevSibling)this.$$prevSibling.$$nextSibling = this.$$nextSibling;
                    if (this.$$nextSibling)this.$$nextSibling.$$prevSibling = this.$$prevSibling;
                    this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail =
                        null
                }
            }, $eval: function (a, b) {
                return d(a)(this, b)
            }, $evalAsync: function (a) {
                this.$$asyncQueue.push(a)
            }, $apply: function (a) {
                try {
                    return g("$apply"), this.$eval(a)
                } catch (b) {
                    c(b)
                } finally {
                    i.$$phase = null;
                    try {
                        i.$digest()
                    } catch (d) {
                        throw c(d), d;
                    }
                }
            }, $on: function (a, b) {
                var c = this.$$listeners[a];
                c || (this.$$listeners[a] = c = []);
                c.push(b);
                return function () {
                    c[za(c, b)] = null
                }
            }, $emit: function (a, b) {
                var d = [], e, f = this, g = !1, h = {name: a, targetScope: f, stopPropagation: function () {
                    g = !0
                }, preventDefault: function () {
                    h.defaultPrevented = !0
                },
                    defaultPrevented: !1}, i = [h].concat(ha.call(arguments, 1)), m, q;
                do {
                    e = f.$$listeners[a] || d;
                    h.currentScope = f;
                    m = 0;
                    for (q = e.length; m < q; m++)if (e[m])try {
                        if (e[m].apply(null, i), g)return h
                    } catch (A) {
                        c(A)
                    } else e.splice(m, 1), m--, q--;
                    f = f.$parent
                } while (f);
                return h
            }, $broadcast: function (a, b) {
                var d = this, e = this, f = {name: a, targetScope: this, preventDefault: function () {
                    f.defaultPrevented = !0
                }, defaultPrevented: !1}, g = [f].concat(ha.call(arguments, 1)), h, i;
                do {
                    d = e;
                    f.currentScope = d;
                    e = d.$$listeners[a] || [];
                    h = 0;
                    for (i = e.length; h < i; h++)if (e[h])try {
                        e[h].apply(null,
                            g)
                    } catch (m) {
                        c(m)
                    } else e.splice(h, 1), h--, i--;
                    if (!(e = d.$$childHead || d !== this && d.$$nextSibling))for (; d !== this && !(e = d.$$nextSibling);)d = d.$parent
                } while (d = e);
                return f
            }};
            var i = new e;
            return i
        }]
    }

    function Xc() {
        this.$get = ["$window", function (b) {
            var a = {}, c = G((/android (\d+)/.exec(y(b.navigator.userAgent)) || [])[1]);
            return{history: !(!b.history || !b.history.pushState || c < 4), hashchange: "onhashchange"in b && (!b.document.documentMode || b.document.documentMode > 7), hasEvent: function (c) {
                if (c == "input" && V == 9)return!1;
                if (u(a[c])) {
                    var e =
                        b.document.createElement("div");
                    a[c] = "on" + c in e
                }
                return a[c]
            }, csp: !1}
        }]
    }

    function Yc() {
        this.$get = I(P)
    }

    function Qb(b) {
        var a = {}, c, d, e;
        if (!b)return a;
        m(b.split("\n"), function (b) {
            e = b.indexOf(":");
            c = y(S(b.substr(0, e)));
            d = S(b.substr(e + 1));
            c && (a[c] ? a[c] += ", " + d : a[c] = d)
        });
        return a
    }

    function Rb(b) {
        var a = M(b) ? b : q;
        return function (c) {
            a || (a = Qb(b));
            return c ? a[y(c)] || null : a
        }
    }

    function Sb(b, a, c) {
        if (H(c))return c(b, a);
        m(c, function (c) {
            b = c(b, a)
        });
        return b
    }

    function Zc() {
        var b = /^\s*(\[|\{[^\{])/, a = /[\}\]]\s*$/, c = /^\)\]\}',?\n/,
            d = this.defaults = {transformResponse: [function (d) {
                B(d) && (d = d.replace(c, ""), b.test(d) && a.test(d) && (d = qb(d, !0)));
                return d
            }], transformRequest: [function (a) {
                return M(a) && ma.apply(a) !== "[object File]" ? ba(a) : a
            }], headers: {common: {Accept: "application/json, text/plain, */*", "X-Requested-With": "XMLHttpRequest"}, post: {"Content-Type": "application/json;charset=utf-8"}, put: {"Content-Type": "application/json;charset=utf-8"}}}, e = this.responseInterceptors = [];
        this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope",
            "$q", "$injector", function (a, b, c, i, j, k) {
                function l(a) {
                    function c(a) {
                        var b = D({}, a, {data: Sb(a.data, a.headers, f)});
                        return 200 <= a.status && a.status < 300 ? b : j.reject(b)
                    }

                    a.method = la(a.method);
                    var e = a.transformRequest || d.transformRequest, f = a.transformResponse || d.transformResponse, g = D({}, a.headers), i = D({"X-XSRF-TOKEN": b.cookies()["XSRF-TOKEN"]}, d.headers.common, d.headers[y(a.method)]), k, l, o, p;
                    a:for (k in i) {
                        l = y(k);
                        for (o in a.headers)if (y(o) === l)continue a;
                        g[k] = i[k]
                    }
                    if (u(a.data))for (var q in g)if (y(q) === "content-type") {
                        delete g[q];
                        break
                    }
                    e = Sb(a.data, Rb(g), e);
                    p = n(a, e, g);
                    p = p.then(c, c);
                    m(z, function (a) {
                        p = a(p)
                    });
                    p.success = function (b) {
                        p.then(function (c) {
                            b(c.data, c.status, c.headers, a)
                        });
                        return p
                    };
                    p.error = function (b) {
                        p.then(null, function (c) {
                            b(c.data, c.status, c.headers, a)
                        });
                        return p
                    };
                    return p
                }

                function n(b, c, d) {
                    function e(a, b, c) {
                        m && (200 <= a && a < 300 ? m.put(q, [a, b, Qb(c)]) : m.remove(q));
                        f(b, a, c);
                        i.$apply()
                    }

                    function f(a, c, d) {
                        c = Math.max(c, 0);
                        (200 <= c && c < 300 ? k.resolve : k.reject)({data: a, status: c, headers: Rb(d), config: b})
                    }

                    function h() {
                        var a = za(l.pendingRequests,
                            b);
                        a !== -1 && l.pendingRequests.splice(a, 1)
                    }

                    var k = j.defer(), n = k.promise, m, t, q = o(b.url, b.params);
                    l.pendingRequests.push(b);
                    n.then(h, h);
                    b.cache && b.method == "GET" && (m = M(b.cache) ? b.cache : p);
                    if (m)if (t = m.get(q))if (t.then)return t.then(h, h), t; else E(t) ? f(t[1], t[0], U(t[2])) : f(t, 200, {}); else m.put(q, n);
                    t || a(b.method, q, c, e, d, b.timeout, b.withCredentials);
                    return n
                }

                function o(a, b) {
                    if (!b)return a;
                    var c = [];
                    hc(b, function (a, b) {
                        a == null || a == q || (M(a) && (a = ba(a)), c.push(encodeURIComponent(b) + "=" + encodeURIComponent(a)))
                    });
                    return a + (a.indexOf("?") == -1 ? "?" : "&") + c.join("&")
                }

                var p = c("$http"), z = [];
                m(e, function (a) {
                    z.push(B(a) ? k.get(a) : k.invoke(a))
                });
                l.pendingRequests = [];
                (function (a) {
                    m(arguments, function (a) {
                        l[a] = function (b, c) {
                            return l(D(c || {}, {method: a, url: b}))
                        }
                    })
                })("get", "delete", "head", "jsonp");
                (function (a) {
                    m(arguments, function (a) {
                        l[a] = function (b, c, d) {
                            return l(D(d || {}, {method: a, url: b, data: c}))
                        }
                    })
                })("post", "put");
                l.defaults = d;
                return l
            }]
    }

    function $c() {
        this.$get = ["$browser", "$window", "$document", function (b, a, c) {
            return ad(b,
                bd, b.defer, a.angular.callbacks, c[0], a.location.protocol.replace(":", ""))
        }]
    }

    function ad(b, a, c, d, e, g) {
        function h(a, b) {
            var c = e.createElement("script"), d = function () {
                e.body.removeChild(c);
                b && b()
            };
            c.type = "text/javascript";
            c.src = a;
            V ? c.onreadystatechange = function () {
                /loaded|complete/.test(c.readyState) && d()
            } : c.onload = c.onerror = d;
            e.body.appendChild(c)
        }

        return function (e, i, j, k, l, n, o) {
            function p(a, c, d, e) {
                c = (i.match(Jb) || ["", g])[1] == "file" ? d ? 200 : 404 : c;
                a(c == 1223 ? 204 : c, d, e);
                b.$$completeOutstandingRequest(s)
            }

            b.$$incOutstandingRequestCount();
            i = i || b.url();
            if (y(e) == "jsonp") {
                var q = "_" + (d.counter++).toString(36);
                d[q] = function (a) {
                    d[q].data = a
                };
                h(i.replace("JSON_CALLBACK", "angular.callbacks." + q), function () {
                    d[q].data ? p(k, 200, d[q].data) : p(k, -2);
                    delete d[q]
                })
            } else {
                var r = new a;
                r.open(e, i, !0);
                m(l, function (a, b) {
                    a && r.setRequestHeader(b, a)
                });
                var x;
                r.onreadystatechange = function () {
                    if (r.readyState == 4) {
                        var a = r.getAllResponseHeaders(), b = ["Cache-Control", "Content-Language", "Content-Type", "Expires", "Last-Modified", "Pragma"];
                        a || (a = "", m(b, function (b) {
                            var c =
                                r.getResponseHeader(b);
                            c && (a += b + ": " + c + "\n")
                        }));
                        p(k, x || r.status, r.responseText, a)
                    }
                };
                if (o)r.withCredentials = !0;
                r.send(j || "");
                n > 0 && c(function () {
                    x = -1;
                    r.abort()
                }, n)
            }
        }
    }

    function cd() {
        this.$get = function () {
            return{id: "en-us", NUMBER_FORMATS: {DECIMAL_SEP: ".", GROUP_SEP: ",", PATTERNS: [
                {minInt: 1, minFrac: 0, maxFrac: 3, posPre: "", posSuf: "", negPre: "-", negSuf: "", gSize: 3, lgSize: 3},
                {minInt: 1, minFrac: 2, maxFrac: 2, posPre: "\u00a4", posSuf: "", negPre: "(\u00a4", negSuf: ")", gSize: 3, lgSize: 3}
            ], CURRENCY_SYM: "$"}, DATETIME_FORMATS: {MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
                SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","), DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","), SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","), AMPMS: ["AM", "PM"], medium: "MMM d, y h:mm:ss a", "short": "M/d/yy h:mm a", fullDate: "EEEE, MMMM d, y", longDate: "MMMM d, y", mediumDate: "MMM d, y", shortDate: "M/d/yy", mediumTime: "h:mm:ss a", shortTime: "h:mm a"}, pluralCat: function (b) {
                return b === 1 ? "one" : "other"
            }}
        }
    }

    function dd() {
        this.$get = ["$rootScope", "$browser", "$q",
            "$exceptionHandler", function (b, a, c, d) {
                function e(e, f, i) {
                    var j = c.defer(), k = j.promise, l = v(i) && !i, f = a.defer(function () {
                        try {
                            j.resolve(e())
                        } catch (a) {
                            j.reject(a), d(a)
                        } finally {
                            delete g[k.$$timeoutId]
                        }
                        l || b.$apply()
                    }, f);
                    k.$$timeoutId = f;
                    g[f] = j;
                    return k
                }

                var g = {};
                e.cancel = function (b) {
                    return b && b.$$timeoutId in g ? (g[b.$$timeoutId].reject("canceled"), delete g[b.$$timeoutId], a.defer.cancel(b.$$timeoutId)) : !1
                };
                return e
            }]
    }

    function Tb(b) {
        function a(a, e) {
            return b.factory(a + c, e)
        }

        var c = "Filter";
        this.register = a;
        this.$get =
            ["$injector", function (a) {
                return function (b) {
                    return a.get(b + c)
                }
            }];
        a("currency", Ub);
        a("date", Vb);
        a("filter", ed);
        a("json", fd);
        a("limitTo", gd);
        a("lowercase", hd);
        a("number", Wb);
        a("orderBy", Xb);
        a("uppercase", id)
    }

    function ed() {
        return function (b, a) {
            if (!E(b))return b;
            var c = [];
            c.check = function (a) {
                for (var b = 0; b < c.length; b++)if (!c[b](a))return!1;
                return!0
            };
            var d = function (a, b) {
                if (b.charAt(0) === "!")return!d(a, b.substr(1));
                switch (typeof a) {
                    case "boolean":
                    case "number":
                    case "string":
                        return("" + a).toLowerCase().indexOf(b) > -1;
                    case "object":
                        for (var c in a)if (c.charAt(0) !== "$" && d(a[c], b))return!0;
                        return!1;
                    case "array":
                        for (c = 0; c < a.length; c++)if (d(a[c], b))return!0;
                        return!1;
                    default:
                        return!1
                }
            };
            switch (typeof a) {
                case "boolean":
                case "number":
                case "string":
                    a = {$: a};
                case "object":
                    for (var e in a)e == "$" ? function () {
                        var b = ("" + a[e]).toLowerCase();
                        b && c.push(function (a) {
                            return d(a, b)
                        })
                    }() : function () {
                        var b = e, f = ("" + a[e]).toLowerCase();
                        f && c.push(function (a) {
                            return d(cb(a, b), f)
                        })
                    }();
                    break;
                case "function":
                    c.push(a);
                    break;
                default:
                    return b
            }
            for (var g =
                [], h = 0; h < b.length; h++) {
                var f = b[h];
                c.check(f) && g.push(f)
            }
            return g
        }
    }

    function Ub(b) {
        var a = b.NUMBER_FORMATS;
        return function (b, d) {
            if (u(d))d = a.CURRENCY_SYM;
            return Yb(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, 2).replace(/\u00A4/g, d)
        }
    }

    function Wb(b) {
        var a = b.NUMBER_FORMATS;
        return function (b, d) {
            return Yb(b, a.PATTERNS[0], a.GROUP_SEP, a.DECIMAL_SEP, d)
        }
    }

    function Yb(b, a, c, d, e) {
        if (isNaN(b) || !isFinite(b))return"";
        var g = b < 0, b = Math.abs(b), h = b + "", f = "", i = [], j = !1;
        if (h.indexOf("e") !== -1) {
            var k = h.match(/([\d\.]+)e(-?)(\d+)/);
            k && k[2] == "-" && k[3] > e + 1 ? h = "0" : (f = h, j = !0)
        }
        if (j)e > 0 && b > -1 && b < 1 && (f = b.toFixed(e)); else {
            h = (h.split(Zb)[1] || "").length;
            u(e) && (e = Math.min(Math.max(a.minFrac, h), a.maxFrac));
            var h = Math.pow(10, e), b = Math.round(b * h) / h, b = ("" + b).split(Zb), h = b[0], b = b[1] || "", j = 0, k = a.lgSize, l = a.gSize;
            if (h.length >= k + l)for (var j = h.length - k, n = 0; n < j; n++)(j - n) % l === 0 && n !== 0 && (f += c), f += h.charAt(n);
            for (n = j; n < h.length; n++)(h.length - n) % k === 0 && n !== 0 && (f += c), f += h.charAt(n);
            for (; b.length < e;)b += "0";
            e && e !== "0" && (f += d + b.substr(0, e))
        }
        i.push(g ? a.negPre :
            a.posPre);
        i.push(f);
        i.push(g ? a.negSuf : a.posSuf);
        return i.join("")
    }

    function kb(b, a, c) {
        var d = "";
        b < 0 && (d = "-", b = -b);
        for (b = "" + b; b.length < a;)b = "0" + b;
        c && (b = b.substr(b.length - a));
        return d + b
    }

    function O(b, a, c, d) {
        c = c || 0;
        return function (e) {
            e = e["get" + b]();
            if (c > 0 || e > -c)e += c;
            e === 0 && c == -12 && (e = 12);
            return kb(e, a, d)
        }
    }

    function Ka(b, a) {
        return function (c, d) {
            var e = c["get" + b](), g = la(a ? "SHORT" + b : b);
            return d[g][e]
        }
    }

    function Vb(b) {
        function a(a) {
            var b;
            if (b = a.match(c)) {
                var a = new Date(0), g = 0, h = 0;
                b[9] && (g = G(b[9] + b[10]), h = G(b[9] +
                    b[11]));
                a.setUTCFullYear(G(b[1]), G(b[2]) - 1, G(b[3]));
                a.setUTCHours(G(b[4] || 0) - g, G(b[5] || 0) - h, G(b[6] || 0), G(b[7] || 0))
            }
            return a
        }

        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function (c, e) {
            var g = "", h = [], f, i, e = e || "mediumDate", e = b.DATETIME_FORMATS[e] || e;
            B(c) && (c = jd.test(c) ? G(c) : a(c));
            Ra(c) && (c = new Date(c));
            if (!oa(c))return c;
            for (; e;)(i = kd.exec(e)) ? (h = h.concat(ha.call(i, 1)), e = h.pop()) : (h.push(e), e = null);
            m(h, function (a) {
                f = ld[a];
                g += f ? f(c,
                    b.DATETIME_FORMATS) : a.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            });
            return g
        }
    }

    function fd() {
        return function (b) {
            return ba(b, !0)
        }
    }

    function gd() {
        return function (b, a) {
            if (!(b instanceof Array))return b;
            var a = G(a), c = [], d, e;
            if (!b || !(b instanceof Array))return c;
            a > b.length ? a = b.length : a < -b.length && (a = -b.length);
            a > 0 ? (d = 0, e = a) : (d = b.length + a, e = b.length);
            for (; d < e; d++)c.push(b[d]);
            return c
        }
    }

    function Xb(b) {
        return function (a, c, d) {
            function e(a, b) {
                return Wa(b) ? function (b, c) {
                    return a(c, b)
                } : a
            }

            if (!E(a))return a;
            if (!c)return a;
            for (var c = E(c) ? c : [c], c = Ta(c, function (a) {
                var c = !1, d = a || na;
                if (B(a)) {
                    if (a.charAt(0) == "+" || a.charAt(0) == "-")c = a.charAt(0) == "-", a = a.substring(1);
                    d = b(a)
                }
                return e(function (a, b) {
                    var c;
                    c = d(a);
                    var e = d(b), f = typeof c, g = typeof e;
                    f == g ? (f == "string" && (c = c.toLowerCase(), e = e.toLowerCase()), c = c === e ? 0 : c < e ? -1 : 1) : c = f < g ? -1 : 1;
                    return c
                }, c)
            }), g = [], h = 0; h < a.length; h++)g.push(a[h]);
            return g.sort(e(function (a, b) {
                for (var d = 0; d < c.length; d++) {
                    var e = c[d](a, b);
                    if (e !== 0)return e
                }
                return 0
            }, d))
        }
    }

    function W(b) {
        H(b) && (b = {link: b});
        b.restrict =
            b.restrict || "AC";
        return I(b)
    }

    function $b(b, a) {
        function c(a, c) {
            c = c ? "-" + ab(c, "-") : "";
            b.removeClass((a ? La : Ma) + c).addClass((a ? Ma : La) + c)
        }

        var d = this, e = b.parent().controller("form") || Na, g = 0, h = d.$error = {};
        d.$name = a.name || a.ngForm;
        d.$dirty = !1;
        d.$pristine = !0;
        d.$valid = !0;
        d.$invalid = !1;
        e.$addControl(d);
        b.addClass(Oa);
        c(!0);
        d.$addControl = function (a) {
            a.$name && !d.hasOwnProperty(a.$name) && (d[a.$name] = a)
        };
        d.$removeControl = function (a) {
            a.$name && d[a.$name] === a && delete d[a.$name];
            m(h, function (b, c) {
                d.$setValidity(c, !0,
                    a)
            })
        };
        d.$setValidity = function (a, b, j) {
            var k = h[a];
            if (b) {
                if (k && (Ua(k, j), !k.length)) {
                    g--;
                    if (!g)c(b), d.$valid = !0, d.$invalid = !1;
                    h[a] = !1;
                    c(!0, a);
                    e.$setValidity(a, !0, d)
                }
            } else {
                g || c(b);
                if (k) {
                    if (za(k, j) != -1)return
                } else h[a] = k = [], g++, c(!1, a), e.$setValidity(a, !1, d);
                k.push(j);
                d.$valid = !1;
                d.$invalid = !0
            }
        };
        d.$setDirty = function () {
            b.removeClass(Oa).addClass(ac);
            d.$dirty = !0;
            d.$pristine = !1;
            e.$setDirty()
        }
    }

    function X(b) {
        return u(b) || b === "" || b === null || b !== b
    }

    function Pa(b, a, c, d, e, g) {
        var h = function () {
            var c = S(a.val());
            d.$viewValue !==
                c && b.$apply(function () {
                d.$setViewValue(c)
            })
        };
        if (e.hasEvent("input"))a.bind("input", h); else {
            var f, i = function () {
                f || (f = g.defer(function () {
                    h();
                    f = null
                }))
            };
            a.bind("keydown", function (a) {
                a = a.keyCode;
                a === 91 || 15 < a && a < 19 || 37 <= a && a <= 40 || i()
            });
            a.bind("change", h);
            e.hasEvent("paste") && a.bind("paste cut", i)
        }
        d.$render = function () {
            a.val(X(d.$viewValue) ? "" : d.$viewValue)
        };
        var j = c.ngPattern, k = function (a, b) {
            return X(b) || a.test(b) ? (d.$setValidity("pattern", !0), b) : (d.$setValidity("pattern", !1), q)
        };
        j && (j.match(/^\/(.*)\/$/) ?
            (j = RegExp(j.substr(1, j.length - 2)), e = function (a) {
                return k(j, a)
            }) : e = function (a) {
            var c = b.$eval(j);
            if (!c || !c.test)throw Error("Expected " + j + " to be a RegExp but was " + c);
            return k(c, a)
        }, d.$formatters.push(e), d.$parsers.push(e));
        if (c.ngMinlength) {
            var l = G(c.ngMinlength), e = function (a) {
                return!X(a) && a.length < l ? (d.$setValidity("minlength", !1), q) : (d.$setValidity("minlength", !0), a)
            };
            d.$parsers.push(e);
            d.$formatters.push(e)
        }
        if (c.ngMaxlength) {
            var n = G(c.ngMaxlength), c = function (a) {
                return!X(a) && a.length > n ? (d.$setValidity("maxlength",
                    !1), q) : (d.$setValidity("maxlength", !0), a)
            };
            d.$parsers.push(c);
            d.$formatters.push(c)
        }
    }

    function lb(b, a) {
        b = "ngClass" + b;
        return W(function (c, d, e) {
            function g(b) {
                if (a === !0 || c.$index % 2 === a)i && !ea(b, i) && h(i), f(b);
                i = U(b)
            }

            function h(a) {
                M(a) && !E(a) && (a = Ta(a, function (a, b) {
                    if (a)return b
                }));
                d.removeClass(E(a) ? a.join(" ") : a)
            }

            function f(a) {
                M(a) && !E(a) && (a = Ta(a, function (a, b) {
                    if (a)return b
                }));
                a && d.addClass(E(a) ? a.join(" ") : a)
            }

            var i = q;
            c.$watch(e[b], g, !0);
            e.$observe("class", function () {
                var a = c.$eval(e[b]);
                g(a, a)
            });
            b !==
                "ngClass" && c.$watch("$index", function (d, g) {
                var i = d & 1;
                i !== g & 1 && (i === a ? f(c.$eval(e[b])) : h(c.$eval(e[b])))
            })
        })
    }

    var y = function (b) {
        return B(b) ? b.toLowerCase() : b
    }, la = function (b) {
        return B(b) ? b.toUpperCase() : b
    }, V = G((/msie (\d+)/.exec(y(navigator.userAgent)) || [])[1]), w, aa, ha = [].slice, Qa = [].push, ma = Object.prototype.toString, $a = P.angular || (P.angular = {}), ta, Ga, Z = ["0", "0", "0"];
    s.$inject = [];
    na.$inject = [];
    var S = function () {
        return!String.prototype.trim ? function (b) {
            return B(b) ? b.replace(/^\s*/, "").replace(/\s*$/, "") :
                b
        } : function (b) {
            return B(b) ? b.trim() : b
        }
    }();
    Ga = V < 9 ? function (b) {
        b = b.nodeName ? b : b[0];
        return b.scopeName && b.scopeName != "HTML" ? la(b.scopeName + ":" + b.nodeName) : b.nodeName
    } : function (b) {
        return b.nodeName ? b.nodeName : b[0].nodeName
    };
    var mc = /[A-Z]/g, md = {full: "1.0.8", major: 1, minor: 0, dot: 8, codeName: "bubble-burst"}, Ba = L.cache = {}, Aa = L.expando = "ng-" + (new Date).getTime(), qc = 1, bc = P.document.addEventListener ? function (b, a, c) {
        b.addEventListener(a, c, !1)
    } : function (b, a, c) {
        b.attachEvent("on" + a, c)
    }, gb = P.document.removeEventListener ?
        function (b, a, c) {
            b.removeEventListener(a, c, !1)
        } : function (b, a, c) {
        b.detachEvent("on" + a, c)
    }, oc = /([\:\-\_]+(.))/g, pc = /^moz([A-Z])/, va = L.prototype = {ready: function (b) {
        function a() {
            c || (c = !0, b())
        }

        var c = !1;
        this.bind("DOMContentLoaded", a);
        L(P).bind("load", a)
    }, toString: function () {
        var b = [];
        m(this, function (a) {
            b.push("" + a)
        });
        return"[" + b.join(", ") + "]"
    }, eq: function (b) {
        return b >= 0 ? w(this[b]) : w(this[this.length + b])
    }, length: 0, push: Qa, sort: [].sort, splice: [].splice}, Ea = {};
    m("multiple,selected,checked,disabled,readOnly,required".split(","),
        function (b) {
            Ea[y(b)] = b
        });
    var Db = {};
    m("input,select,option,textarea,button,form".split(","), function (b) {
        Db[la(b)] = !0
    });
    m({data: yb, inheritedData: Da, scope: function (b) {
        return Da(b, "$scope")
    }, controller: Bb, injector: function (b) {
        return Da(b, "$injector")
    }, removeAttr: function (b, a) {
        b.removeAttribute(a)
    }, hasClass: Ca, css: function (b, a, c) {
        a = vb(a);
        if (v(c))b.style[a] = c; else {
            var d;
            V <= 8 && (d = b.currentStyle && b.currentStyle[a], d === "" && (d = "auto"));
            d = d || b.style[a];
            V <= 8 && (d = d === "" ? q : d);
            return d
        }
    }, attr: function (b, a, c) {
        var d =
            y(a);
        if (Ea[d])if (v(c))c ? (b[a] = !0, b.setAttribute(a, d)) : (b[a] = !1, b.removeAttribute(d)); else return b[a] || (b.attributes.getNamedItem(a) || s).specified ? d : q; else if (v(c))b.setAttribute(a, c); else if (b.getAttribute)return b = b.getAttribute(a, 2), b === null ? q : b
    }, prop: function (b, a, c) {
        if (v(c))b[a] = c; else return b[a]
    }, text: D(V < 9 ? function (b, a) {
        if (b.nodeType == 1) {
            if (u(a))return b.innerText;
            b.innerText = a
        } else {
            if (u(a))return b.nodeValue;
            b.nodeValue = a
        }
    } : function (b, a) {
        if (u(a))return b.textContent;
        b.textContent = a
    }, {$dv: ""}),
        val: function (b, a) {
            if (u(a)) {
                if (Ga(b) === "SELECT" && b.multiple) {
                    var c = [];
                    m(b.options, function (a) {
                        a.selected && c.push(a.value || a.text)
                    });
                    return c.length === 0 ? null : c
                }
                return b.value
            }
            b.value = a
        }, html: function (b, a) {
            if (u(a))return b.innerHTML;
            for (var c = 0, d = b.childNodes; c < d.length; c++)sa(d[c]);
            b.innerHTML = a
        }}, function (b, a) {
        L.prototype[a] = function (a, d) {
            var e, g;
            if ((b.length == 2 && b !== Ca && b !== Bb ? a : d) === q)if (M(a)) {
                for (e = 0; e < this.length; e++)if (b === yb)b(this[e], a); else for (g in a)b(this[e], g, a[g]);
                return this
            } else {
                if (this.length)return b(this[0],
                    a, d)
            } else {
                for (e = 0; e < this.length; e++)b(this[e], a, d);
                return this
            }
            return b.$dv
        }
    });
    m({removeData: wb, dealoc: sa, bind: function a(c, d, e) {
        var g = $(c, "events"), h = $(c, "handle");
        g || $(c, "events", g = {});
        h || $(c, "handle", h = rc(c, g));
        m(d.split(" "), function (d) {
            var i = g[d];
            if (!i) {
                if (d == "mouseenter" || d == "mouseleave") {
                    var j = T.body.contains || T.body.compareDocumentPosition ? function (a, c) {
                        var d = a.nodeType === 9 ? a.documentElement : a, e = c && c.parentNode;
                        return a === e || !(!e || !(e.nodeType === 1 && (d.contains ? d.contains(e) : a.compareDocumentPosition &&
                            a.compareDocumentPosition(e) & 16)))
                    } : function (a, c) {
                        if (c)for (; c = c.parentNode;)if (c === a)return!0;
                        return!1
                    };
                    g[d] = [];
                    a(c, {mouseleave: "mouseout", mouseenter: "mouseover"}[d], function (a) {
                        var c = a.relatedTarget;
                        (!c || c !== this && !j(this, c)) && h(a, d)
                    })
                } else bc(c, d, h), g[d] = [];
                i = g[d]
            }
            i.push(e)
        })
    }, unbind: xb, replaceWith: function (a, c) {
        var d, e = a.parentNode;
        sa(a);
        m(new L(c), function (c) {
            d ? e.insertBefore(c, d.nextSibling) : e.replaceChild(c, a);
            d = c
        })
    }, children: function (a) {
        var c = [];
        m(a.childNodes, function (a) {
            a.nodeType === 1 && c.push(a)
        });
        return c
    }, contents: function (a) {
        return a.childNodes || []
    }, append: function (a, c) {
        m(new L(c), function (c) {
            a.nodeType === 1 && a.appendChild(c)
        })
    }, prepend: function (a, c) {
        if (a.nodeType === 1) {
            var d = a.firstChild;
            m(new L(c), function (c) {
                a.insertBefore(c, d)
            })
        }
    }, wrap: function (a, c) {
        var c = w(c)[0], d = a.parentNode;
        d && d.replaceChild(c, a);
        c.appendChild(a)
    }, remove: function (a) {
        sa(a);
        var c = a.parentNode;
        c && c.removeChild(a)
    }, after: function (a, c) {
        var d = a, e = a.parentNode;
        m(new L(c), function (a) {
            e.insertBefore(a, d.nextSibling);
            d = a
        })
    },
        addClass: Ab, removeClass: zb, toggleClass: function (a, c, d) {
            u(d) && (d = !Ca(a, c));
            (d ? Ab : zb)(a, c)
        }, parent: function (a) {
            return(a = a.parentNode) && a.nodeType !== 11 ? a : null
        }, next: function (a) {
            if (a.nextElementSibling)return a.nextElementSibling;
            for (a = a.nextSibling; a != null && a.nodeType !== 1;)a = a.nextSibling;
            return a
        }, find: function (a, c) {
            return a.getElementsByTagName(c)
        }, clone: fb, triggerHandler: function (a, c) {
            var d = ($(a, "events") || {})[c];
            m(d, function (c) {
                c.call(a, null)
            })
        }}, function (a, c) {
        L.prototype[c] = function (c, e) {
            for (var g,
                     h = 0; h < this.length; h++)g == q ? (g = a(this[h], c, e), g !== q && (g = w(g))) : eb(g, a(this[h], c, e));
            return g == q ? this : g
        }
    });
    Fa.prototype = {put: function (a, c) {
        this[fa(a)] = c
    }, get: function (a) {
        return this[fa(a)]
    }, remove: function (a) {
        var c = this[a = fa(a)];
        delete this[a];
        return c
    }};
    hb.prototype = {push: function (a, c) {
        var d = this[a = fa(a)];
        d ? d.push(c) : this[a] = [c]
    }, shift: function (a) {
        var c = this[a = fa(a)];
        if (c)return c.length == 1 ? (delete this[a], c[0]) : c.shift()
    }, peek: function (a) {
        if (a = this[fa(a)])return a[0]
    }};
    var tc = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
        uc = /,/, vc = /^\s*(_?)(\S+?)\1\s*$/, sc = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg, Gb = "Non-assignable model expression: ";
    Fb.$inject = ["$provide"];
    var Ec = /^(x[\:\-_]|data[\:\-_])/i, Jb = /^([^:]+):\/\/(\w+:{0,1}\w*@)?(\{?[\w\.-]*\}?)(:([0-9]+))?(\/[^\?#]*)?(\?([^#]*))?(#(.*))?$/, cc = /^([^\?#]*)?(\?([^#]*))?(#(.*))?$/, Lc = cc, Kb = {http: 80, https: 443, ftp: 21};
    ib.prototype = {$$replace: !1, absUrl: Ia("$$absUrl"), url: function (a, c) {
        if (u(a))return this.$$url;
        var d = cc.exec(a);
        d[1] && this.path(decodeURIComponent(d[1]));
        if (d[2] || d[1])this.search(d[3] ||
            "");
        this.hash(d[5] || "", c);
        return this
    }, protocol: Ia("$$protocol"), host: Ia("$$host"), port: Ia("$$port"), path: Mb("$$path", function (a) {
        return a.charAt(0) == "/" ? a : "/" + a
    }), search: function (a, c) {
        if (u(a))return this.$$search;
        v(c) ? c === null ? delete this.$$search[a] : this.$$search[a] = c : this.$$search = B(a) ? Xa(a) : a;
        this.$$compose();
        return this
    }, hash: Mb("$$hash", na), replace: function () {
        this.$$replace = !0;
        return this
    }};
    Ha.prototype = ya(ib.prototype);
    Lb.prototype = ya(Ha.prototype);
    var Ja = {"null": function () {
        return null
    }, "true": function () {
        return!0
    },
        "false": function () {
            return!1
        }, undefined: s, "+": function (a, c, d, e) {
            d = d(a, c);
            e = e(a, c);
            return v(d) ? v(e) ? d + e : d : v(e) ? e : q
        }, "-": function (a, c, d, e) {
            d = d(a, c);
            e = e(a, c);
            return(v(d) ? d : 0) - (v(e) ? e : 0)
        }, "*": function (a, c, d, e) {
            return d(a, c) * e(a, c)
        }, "/": function (a, c, d, e) {
            return d(a, c) / e(a, c)
        }, "%": function (a, c, d, e) {
            return d(a, c) % e(a, c)
        }, "^": function (a, c, d, e) {
            return d(a, c) ^ e(a, c)
        }, "=": s, "==": function (a, c, d, e) {
            return d(a, c) == e(a, c)
        }, "!=": function (a, c, d, e) {
            return d(a, c) != e(a, c)
        }, "<": function (a, c, d, e) {
            return d(a, c) < e(a, c)
        },
        ">": function (a, c, d, e) {
            return d(a, c) > e(a, c)
        }, "<=": function (a, c, d, e) {
            return d(a, c) <= e(a, c)
        }, ">=": function (a, c, d, e) {
            return d(a, c) >= e(a, c)
        }, "&&": function (a, c, d, e) {
            return d(a, c) && e(a, c)
        }, "||": function (a, c, d, e) {
            return d(a, c) || e(a, c)
        }, "&": function (a, c, d, e) {
            return d(a, c) & e(a, c)
        }, "|": function (a, c, d, e) {
            return e(a, c)(a, c, d(a, c))
        }, "!": function (a, c, d) {
            return!d(a, c)
        }}, Pc = {n: "\n", f: "\u000c", r: "\r", t: "\t", v: "\u000b", "'": "'", '"': '"'}, jb = {}, bd = P.XMLHttpRequest || function () {
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.6.0")
        } catch (a) {
        }
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.3.0")
        } catch (c) {
        }
        try {
            return new ActiveXObject("Msxml2.XMLHTTP")
        } catch (d) {
        }
        throw Error("This browser does not support XMLHttpRequest.");
    };
    Tb.$inject = ["$provide"];
    Ub.$inject = ["$locale"];
    Wb.$inject = ["$locale"];
    var Zb = ".", ld = {yyyy: O("FullYear", 4), yy: O("FullYear", 2, 0, !0), y: O("FullYear", 1), MMMM: Ka("Month"), MMM: Ka("Month", !0), MM: O("Month", 2, 1), M: O("Month", 1, 1), dd: O("Date", 2), d: O("Date", 1), HH: O("Hours", 2), H: O("Hours", 1), hh: O("Hours", 2, -12), h: O("Hours", 1, -12), mm: O("Minutes", 2), m: O("Minutes", 1), ss: O("Seconds", 2), s: O("Seconds", 1), EEEE: Ka("Day"), EEE: Ka("Day", !0), a: function (a, c) {
        return a.getHours() < 12 ? c.AMPMS[0] : c.AMPMS[1]
    }, Z: function (a) {
        var a =
            -1 * a.getTimezoneOffset(), c = a >= 0 ? "+" : "";
        c += kb(Math[a > 0 ? "floor" : "ceil"](a / 60), 2) + kb(Math.abs(a % 60), 2);
        return c
    }}, kd = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/, jd = /^\d+$/;
    Vb.$inject = ["$locale"];
    var hd = I(y), id = I(la);
    Xb.$inject = ["$parse"];
    var nd = I({restrict: "E", compile: function (a, c) {
        V <= 8 && (!c.href && !c.name && c.$set("href", ""), a.append(T.createComment("IE fix")));
        return function (a, c) {
            c.bind("click", function (a) {
                c.attr("href") || a.preventDefault()
            })
        }
    }}), mb = {};
    m(Ea, function (a, c) {
        var d = ca("ng-" + c);
        mb[d] = function () {
            return{priority: 100, compile: function () {
                return function (a, g, h) {
                    a.$watch(h[d], function (a) {
                        h.$set(c, !!a)
                    })
                }
            }}
        }
    });
    m(["src", "href"], function (a) {
        var c = ca("ng-" + a);
        mb[c] = function () {
            return{priority: 99, link: function (d, e, g) {
                g.$observe(c, function (c) {
                    c && (g.$set(a, c), V && e.prop(a, g[a]))
                })
            }}
        }
    });
    var Na = {$addControl: s, $removeControl: s, $setValidity: s, $setDirty: s};
    $b.$inject = ["$element", "$attrs", "$scope"];
    var Qa = function (a) {
            return["$timeout", function (c) {
                var d = {name: "form", restrict: "E",
                    controller: $b, compile: function () {
                        return{pre: function (a, d, h, f) {
                            if (!h.action) {
                                var i = function (a) {
                                    a.preventDefault ? a.preventDefault() : a.returnValue = !1
                                };
                                bc(d[0], "submit", i);
                                d.bind("$destroy", function () {
                                    c(function () {
                                        gb(d[0], "submit", i)
                                    }, 0, !1)
                                })
                            }
                            var j = d.parent().controller("form"), k = h.name || h.ngForm;
                            k && (a[k] = f);
                            j && d.bind("$destroy", function () {
                                j.$removeControl(f);
                                k && (a[k] = q);
                                D(f, Na)
                            })
                        }}
                    }};
                return a ? D(U(d), {restrict: "EAC"}) : d
            }]
        }, od = Qa(), pd = Qa(!0), qd = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
        rd = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/, sd = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, dc = {text: Pa, number: function (a, c, d, e, g, h) {
            Pa(a, c, d, e, g, h);
            e.$parsers.push(function (a) {
                var c = X(a);
                return c || sd.test(a) ? (e.$setValidity("number", !0), a === "" ? null : c ? a : parseFloat(a)) : (e.$setValidity("number", !1), q)
            });
            e.$formatters.push(function (a) {
                return X(a) ? "" : "" + a
            });
            if (d.min) {
                var f = parseFloat(d.min), a = function (a) {
                    return!X(a) && a < f ? (e.$setValidity("min", !1), q) : (e.$setValidity("min", !0), a)
                };
                e.$parsers.push(a);
                e.$formatters.push(a)
            }
            if (d.max) {
                var i = parseFloat(d.max), d = function (a) {
                    return!X(a) && a > i ? (e.$setValidity("max", !1), q) : (e.$setValidity("max", !0), a)
                };
                e.$parsers.push(d);
                e.$formatters.push(d)
            }
            e.$formatters.push(function (a) {
                return X(a) || Ra(a) ? (e.$setValidity("number", !0), a) : (e.$setValidity("number", !1), q)
            })
        }, url: function (a, c, d, e, g, h) {
            Pa(a, c, d, e, g, h);
            a = function (a) {
                return X(a) || qd.test(a) ? (e.$setValidity("url", !0), a) : (e.$setValidity("url", !1), q)
            };
            e.$formatters.push(a);
            e.$parsers.push(a)
        }, email: function (a, c, d, e, g, h) {
            Pa(a, c, d, e, g, h);
            a = function (a) {
                return X(a) || rd.test(a) ? (e.$setValidity("email", !0), a) : (e.$setValidity("email", !1), q)
            };
            e.$formatters.push(a);
            e.$parsers.push(a)
        }, radio: function (a, c, d, e) {
            u(d.name) && c.attr("name", xa());
            c.bind("click", function () {
                c[0].checked && a.$apply(function () {
                    e.$setViewValue(d.value)
                })
            });
            e.$render = function () {
                c[0].checked = d.value == e.$viewValue
            };
            d.$observe("value", e.$render)
        }, checkbox: function (a, c, d, e) {
            var g = d.ngTrueValue, h = d.ngFalseValue;
            B(g) || (g = !0);
            B(h) || (h = !1);
            c.bind("click",
                function () {
                    a.$apply(function () {
                        e.$setViewValue(c[0].checked)
                    })
                });
            e.$render = function () {
                c[0].checked = e.$viewValue
            };
            e.$formatters.push(function (a) {
                return a === g
            });
            e.$parsers.push(function (a) {
                return a ? g : h
            })
        }, hidden: s, button: s, submit: s, reset: s}, ec = ["$browser", "$sniffer", function (a, c) {
            return{restrict: "E", require: "?ngModel", link: function (d, e, g, h) {
                h && (dc[y(g.type)] || dc.text)(d, e, g, h, c, a)
            }}
        }], Ma = "ng-valid", La = "ng-invalid", Oa = "ng-pristine", ac = "ng-dirty", td = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse",
            function (a, c, d, e, g) {
                function h(a, c) {
                    c = c ? "-" + ab(c, "-") : "";
                    e.removeClass((a ? La : Ma) + c).addClass((a ? Ma : La) + c)
                }

                this.$modelValue = this.$viewValue = Number.NaN;
                this.$parsers = [];
                this.$formatters = [];
                this.$viewChangeListeners = [];
                this.$pristine = !0;
                this.$dirty = !1;
                this.$valid = !0;
                this.$invalid = !1;
                this.$name = d.name;
                var f = g(d.ngModel), i = f.assign;
                if (!i)throw Error(Gb + d.ngModel + " (" + qa(e) + ")");
                this.$render = s;
                var j = e.inheritedData("$formController") || Na, k = 0, l = this.$error = {};
                e.addClass(Oa);
                h(!0);
                this.$setValidity = function (a, c) {
                    if (l[a] !== !c) {
                        if (c) {
                            if (l[a] && k--, !k)h(!0), this.$valid = !0, this.$invalid = !1
                        } else h(!1), this.$invalid = !0, this.$valid = !1, k++;
                        l[a] = !c;
                        h(c, a);
                        j.$setValidity(a, c, this)
                    }
                };
                this.$setViewValue = function (d) {
                    this.$viewValue = d;
                    if (this.$pristine)this.$dirty = !0, this.$pristine = !1, e.removeClass(Oa).addClass(ac), j.$setDirty();
                    m(this.$parsers, function (a) {
                        d = a(d)
                    });
                    if (this.$modelValue !== d)this.$modelValue = d, i(a, d), m(this.$viewChangeListeners, function (a) {
                        try {
                            a()
                        } catch (d) {
                            c(d)
                        }
                    })
                };
                var n = this;
                a.$watch(function () {
                    var c =
                        f(a);
                    if (n.$modelValue !== c) {
                        var d = n.$formatters, e = d.length;
                        for (n.$modelValue = c; e--;)c = d[e](c);
                        if (n.$viewValue !== c)n.$viewValue = c, n.$render()
                    }
                })
            }], ud = function () {
            return{require: ["ngModel", "^?form"], controller: td, link: function (a, c, d, e) {
                var g = e[0], h = e[1] || Na;
                h.$addControl(g);
                c.bind("$destroy", function () {
                    h.$removeControl(g)
                })
            }}
        }, vd = I({require: "ngModel", link: function (a, c, d, e) {
            e.$viewChangeListeners.push(function () {
                a.$eval(d.ngChange)
            })
        }}), fc = function () {
            return{require: "?ngModel", link: function (a, c, d, e) {
                if (e) {
                    d.required = !0;
                    var g = function (a) {
                        if (d.required && (X(a) || a === !1))e.$setValidity("required", !1); else return e.$setValidity("required", !0), a
                    };
                    e.$formatters.push(g);
                    e.$parsers.unshift(g);
                    d.$observe("required", function () {
                        g(e.$viewValue)
                    })
                }
            }}
        }, wd = function () {
            return{require: "ngModel", link: function (a, c, d, e) {
                var g = (a = /\/(.*)\//.exec(d.ngList)) && RegExp(a[1]) || d.ngList || ",";
                e.$parsers.push(function (a) {
                    var c = [];
                    a && m(a.split(g), function (a) {
                        a && c.push(S(a))
                    });
                    return c
                });
                e.$formatters.push(function (a) {
                    return E(a) ? a.join(", ") :
                        q
                })
            }}
        }, xd = /^(true|false|\d+)$/, yd = function () {
            return{priority: 100, compile: function (a, c) {
                return xd.test(c.ngValue) ? function (a, c, g) {
                    g.$set("value", a.$eval(g.ngValue))
                } : function (a, c, g) {
                    a.$watch(g.ngValue, function (a) {
                        g.$set("value", a)
                    })
                }
            }}
        }, zd = W(function (a, c, d) {
            c.addClass("ng-binding").data("$binding", d.ngBind);
            a.$watch(d.ngBind, function (a) {
                c.text(a == q ? "" : a)
            })
        }), Ad = ["$interpolate", function (a) {
            return function (c, d, e) {
                c = a(d.attr(e.$attr.ngBindTemplate));
                d.addClass("ng-binding").data("$binding", c);
                e.$observe("ngBindTemplate",
                    function (a) {
                        d.text(a)
                    })
            }
        }], Bd = [function () {
            return function (a, c, d) {
                c.addClass("ng-binding").data("$binding", d.ngBindHtmlUnsafe);
                a.$watch(d.ngBindHtmlUnsafe, function (a) {
                    c.html(a || "")
                })
            }
        }], Cd = lb("", !0), Dd = lb("Odd", 0), Ed = lb("Even", 1), Fd = W({compile: function (a, c) {
            c.$set("ngCloak", q);
            a.removeClass("ng-cloak")
        }}), Gd = [function () {
            return{scope: !0, controller: "@"}
        }], Hd = ["$sniffer", function (a) {
            return{priority: 1E3, compile: function () {
                a.csp = !0
            }}
        }], gc = {};
    m("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave submit".split(" "),
        function (a) {
            var c = ca("ng-" + a);
            gc[c] = ["$parse", function (d) {
                return function (e, g, h) {
                    var f = d(h[c]);
                    g.bind(y(a), function (a) {
                        e.$apply(function () {
                            f(e, {$event: a})
                        })
                    })
                }
            }]
        });
    var Id = ["$http", "$templateCache", "$anchorScroll", "$compile", function (a, c, d, e) {
        return{restrict: "ECA", terminal: !0, compile: function (g, h) {
            var f = h.ngInclude || h.src, i = h.onload || "", j = h.autoscroll;
            return function (g, h) {
                var n = 0, o, p = function () {
                    o && (o.$destroy(), o = null);
                    h.html("")
                };
                g.$watch(f, function (f) {
                    var m = ++n;
                    f ? a.get(f, {cache: c}).success(function (a) {
                        m ===
                            n && (o && o.$destroy(), o = g.$new(), h.html(a), e(h.contents())(o), v(j) && (!j || g.$eval(j)) && d(), o.$emit("$includeContentLoaded"), g.$eval(i))
                    }).error(function () {
                            m === n && p()
                        }) : p()
                })
            }
        }}
    }], Jd = W({compile: function () {
        return{pre: function (a, c, d) {
            a.$eval(d.ngInit)
        }}
    }}), Kd = W({terminal: !0, priority: 1E3}), Ld = ["$locale", "$interpolate", function (a, c) {
        var d = /{}/g;
        return{restrict: "EA", link: function (e, g, h) {
            var f = h.count, i = g.attr(h.$attr.when), j = h.offset || 0, k = e.$eval(i), l = {}, n = c.startSymbol(), o = c.endSymbol();
            m(k, function (a, e) {
                l[e] =
                    c(a.replace(d, n + f + "-" + j + o))
            });
            e.$watch(function () {
                var c = parseFloat(e.$eval(f));
                return isNaN(c) ? "" : (c in k || (c = a.pluralCat(c - j)), l[c](e, g, !0))
            }, function (a) {
                g.text(a)
            })
        }}
    }], Md = W({transclude: "element", priority: 1E3, terminal: !0, compile: function (a, c, d) {
        return function (a, c, h) {
            var f = h.ngRepeat, h = f.match(/^\s*(.+)\s+in\s+(.*)\s*$/), i, j, k;
            if (!h)throw Error("Expected ngRepeat in form of '_item_ in _collection_' but got '" + f + "'.");
            f = h[1];
            i = h[2];
            h = f.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
            if (!h)throw Error("'item' in 'item in collection' should be identifier or (key, value) but got '" +
                f + "'.");
            j = h[3] || h[1];
            k = h[2];
            var l = new hb;
            a.$watch(function (a) {
                var e, f, h = a.$eval(i), m = c, q = new hb, u, A, w, v, C, s;
                if (E(h))C = h || []; else {
                    C = [];
                    for (w in h)h.hasOwnProperty(w) && w.charAt(0) != "$" && C.push(w);
                    C.sort()
                }
                u = C.length - 1;
                e = 0;
                for (f = C.length; e < f; e++) {
                    w = h === C ? e : C[e];
                    v = h[w];
                    if (s = l.shift(v)) {
                        A = s.scope;
                        q.push(v, s);
                        if (e !== s.index)s.index = e, m.after(s.element);
                        m = s.element
                    } else A = a.$new();
                    A[j] = v;
                    k && (A[k] = w);
                    A.$index = e;
                    A.$first = e === 0;
                    A.$last = e === u;
                    A.$middle = !(A.$first || A.$last);
                    s || d(A, function (a) {
                        m.after(a);
                        s = {scope: A,
                            element: m = a, index: e};
                        q.push(v, s)
                    })
                }
                for (w in l)if (l.hasOwnProperty(w))for (C = l[w]; C.length;)v = C.pop(), v.element.remove(), v.scope.$destroy();
                l = q
            })
        }
    }}), Nd = W(function (a, c, d) {
        a.$watch(d.ngShow, function (a) {
            c.css("display", Wa(a) ? "" : "none")
        })
    }), Od = W(function (a, c, d) {
        a.$watch(d.ngHide, function (a) {
            c.css("display", Wa(a) ? "none" : "")
        })
    }), Pd = W(function (a, c, d) {
        a.$watch(d.ngStyle, function (a, d) {
            d && a !== d && m(d, function (a, d) {
                c.css(d, "")
            });
            a && c.css(a)
        }, !0)
    }), Qd = I({restrict: "EA", require: "ngSwitch", controller: ["$scope", function () {
        this.cases =
        {}
    }], link: function (a, c, d, e) {
        var g, h, f;
        a.$watch(d.ngSwitch || d.on, function (i) {
            h && (f.$destroy(), h.remove(), h = f = null);
            if (g = e.cases["!" + i] || e.cases["?"])a.$eval(d.change), f = a.$new(), g(f, function (a) {
                h = a;
                c.append(a)
            })
        })
    }}), Rd = W({transclude: "element", priority: 500, require: "^ngSwitch", compile: function (a, c, d) {
        return function (a, g, h, f) {
            f.cases["!" + c.ngSwitchWhen] = d
        }
    }}), Sd = W({transclude: "element", priority: 500, require: "^ngSwitch", compile: function (a, c, d) {
        return function (a, c, h, f) {
            f.cases["?"] = d
        }
    }}), Td = W({controller: ["$transclude",
        "$element", function (a, c) {
            a(function (a) {
                c.append(a)
            })
        }]}), Ud = ["$http", "$templateCache", "$route", "$anchorScroll", "$compile", "$controller", function (a, c, d, e, g, h) {
        return{restrict: "ECA", terminal: !0, link: function (a, c, j) {
            function k() {
                var j = d.current && d.current.locals, k = j && j.$template;
                if (k) {
                    c.html(k);
                    l && (l.$destroy(), l = null);
                    var k = g(c.contents()), m = d.current;
                    l = m.scope = a.$new();
                    if (m.controller)j.$scope = l, j = h(m.controller, j), c.children().data("$ngControllerController", j);
                    k(l);
                    l.$emit("$viewContentLoaded");
                    l.$eval(n);
                    e()
                } else c.html(""), l && (l.$destroy(), l = null)
            }

            var l, n = j.onload || "";
            a.$on("$routeChangeSuccess", k);
            k()
        }}
    }], Vd = ["$templateCache", function (a) {
        return{restrict: "E", terminal: !0, compile: function (c, d) {
            d.type == "text/ng-template" && a.put(d.id, c[0].text)
        }}
    }], Wd = I({terminal: !0}), Xd = ["$compile", "$parse", function (a, c) {
        var d = /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w\d]*)|(?:\(\s*([\$\w][\$\w\d]*)\s*,\s*([\$\w][\$\w\d]*)\s*\)))\s+in\s+(.*)$/, e = {$setViewValue: s};
        return{restrict: "E",
            require: ["select", "?ngModel"], controller: ["$element", "$scope", "$attrs", function (a, c, d) {
                var i = this, j = {}, k = e, l;
                i.databound = d.ngModel;
                i.init = function (a, c, d) {
                    k = a;
                    l = d
                };
                i.addOption = function (c) {
                    j[c] = !0;
                    k.$viewValue == c && (a.val(c), l.parent() && l.remove())
                };
                i.removeOption = function (a) {
                    this.hasOption(a) && (delete j[a], k.$viewValue == a && this.renderUnknownOption(a))
                };
                i.renderUnknownOption = function (c) {
                    c = "? " + fa(c) + " ?";
                    l.val(c);
                    a.prepend(l);
                    a.val(c);
                    l.prop("selected", !0)
                };
                i.hasOption = function (a) {
                    return j.hasOwnProperty(a)
                };
                c.$on("$destroy", function () {
                    i.renderUnknownOption = s
                })
            }], link: function (e, h, f, i) {
                function j(a, c, d, e) {
                    d.$render = function () {
                        var a = d.$viewValue;
                        e.hasOption(a) ? (y.parent() && y.remove(), c.val(a), a === "" && x.prop("selected", !0)) : u(a) && x ? c.val("") : e.renderUnknownOption(a)
                    };
                    c.bind("change", function () {
                        a.$apply(function () {
                            y.parent() && y.remove();
                            d.$setViewValue(c.val())
                        })
                    })
                }

                function k(a, c, d) {
                    var e;
                    d.$render = function () {
                        var a = new Fa(d.$viewValue);
                        m(c.find("option"), function (c) {
                            c.selected = v(a.get(c.value))
                        })
                    };
                    a.$watch(function () {
                        ea(e,
                            d.$viewValue) || (e = U(d.$viewValue), d.$render())
                    });
                    c.bind("change", function () {
                        a.$apply(function () {
                            var a = [];
                            m(c.find("option"), function (c) {
                                c.selected && a.push(c.value)
                            });
                            d.$setViewValue(a)
                        })
                    })
                }

                function l(e, f, g) {
                    function h() {
                        var a = {"": []}, c = [""], d, i, s, v, u;
                        s = g.$modelValue;
                        v = o(e) || [];
                        var x = l ? nb(v) : v, C, y, z;
                        y = {};
                        u = !1;
                        var B, E;
                        p && (u = new Fa(s));
                        for (z = 0; C = x.length, z < C; z++) {
                            y[k] = v[l ? y[l] = x[z] : z];
                            d = m(e, y) || "";
                            if (!(i = a[d]))i = a[d] = [], c.push(d);
                            p ? d = u.remove(n(e, y)) != q : (d = s === n(e, y), u = u || d);
                            B = j(e, y);
                            B = B === q ? "" : B;
                            i.push({id: l ?
                                x[z] : z, label: B, selected: d})
                        }
                        p || (r || s === null ? a[""].unshift({id: "", label: "", selected: !u}) : u || a[""].unshift({id: "?", label: "", selected: !0}));
                        y = 0;
                        for (x = c.length; y < x; y++) {
                            d = c[y];
                            i = a[d];
                            if (w.length <= y)s = {element: A.clone().attr("label", d), label: i.label}, v = [s], w.push(v), f.append(s.element); else if (v = w[y], s = v[0], s.label != d)s.element.attr("label", s.label = d);
                            B = null;
                            z = 0;
                            for (C = i.length; z < C; z++)if (d = i[z], u = v[z + 1]) {
                                B = u.element;
                                if (u.label !== d.label)B.text(u.label = d.label);
                                if (u.id !== d.id)B.val(u.id = d.id);
                                if (B[0].selected !==
                                    d.selected)B.prop("selected", u.selected = d.selected)
                            } else d.id === "" && r ? E = r : (E = D.clone()).val(d.id).attr("selected", d.selected).text(d.label), v.push({element: E, label: d.label, id: d.id, selected: d.selected}), B ? B.after(E) : s.element.append(E), B = E;
                            for (z++; v.length > z;)v.pop().element.remove()
                        }
                        for (; w.length > y;)w.pop()[0].element.remove()
                    }

                    var i;
                    if (!(i = s.match(d)))throw Error("Expected ngOptions in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '" + s + "'.");
                    var j = c(i[2] || i[1]), k = i[4] ||
                        i[6], l = i[5], m = c(i[3] || ""), n = c(i[2] ? i[1] : k), o = c(i[7]), w = [
                        [
                            {element: f, label: ""}
                        ]
                    ];
                    r && (a(r)(e), r.removeClass("ng-scope"), r.remove());
                    f.html("");
                    f.bind("change", function () {
                        e.$apply(function () {
                            var a, c = o(e) || [], d = {}, h, i, j, m, r, s;
                            if (p) {
                                i = [];
                                m = 0;
                                for (s = w.length; m < s; m++) {
                                    a = w[m];
                                    j = 1;
                                    for (r = a.length; j < r; j++)if ((h = a[j].element)[0].selected)h = h.val(), l && (d[l] = h), d[k] = c[h], i.push(n(e, d))
                                }
                            } else h = f.val(), h == "?" ? i = q : h == "" ? i = null : (d[k] = c[h], l && (d[l] = h), i = n(e, d));
                            g.$setViewValue(i)
                        })
                    });
                    g.$render = h;
                    e.$watch(h)
                }

                if (i[1]) {
                    for (var n =
                        i[0], o = i[1], p = f.multiple, s = f.ngOptions, r = !1, x, D = w(T.createElement("option")), A = w(T.createElement("optgroup")), y = D.clone(), i = 0, B = h.children(), C = B.length; i < C; i++)if (B[i].value == "") {
                        x = r = B.eq(i);
                        break
                    }
                    n.init(o, r, y);
                    if (p && (f.required || f.ngRequired)) {
                        var E = function (a) {
                            o.$setValidity("required", !f.required || a && a.length);
                            return a
                        };
                        o.$parsers.push(E);
                        o.$formatters.unshift(E);
                        f.$observe("required", function () {
                            E(o.$viewValue)
                        })
                    }
                    s ? l(e, h, o) : p ? k(e, h, o) : j(e, h, o, n)
                }
            }}
    }], Yd = ["$interpolate", function (a) {
        var c = {addOption: s,
            removeOption: s};
        return{restrict: "E", priority: 100, compile: function (d, e) {
            if (u(e.value)) {
                var g = a(d.text(), !0);
                g || e.$set("value", d.text())
            }
            return function (a, d, e) {
                var j = d.parent(), k = j.data("$selectController") || j.parent().data("$selectController");
                k && k.databound ? d.prop("selected", !1) : k = c;
                g ? a.$watch(g, function (a, c) {
                    e.$set("value", a);
                    a !== c && k.removeOption(c);
                    k.addOption(a)
                }) : k.addOption(e.value);
                d.bind("$destroy", function () {
                    k.removeOption(e.value)
                })
            }
        }}
    }], Zd = I({restrict: "E", terminal: !0});
    (aa = P.jQuery) ? (w =
        aa, D(aa.fn, {scope: va.scope, controller: va.controller, injector: va.injector, inheritedData: va.inheritedData}), db("remove", !0, !0, !1), db("empty", !1, !1, !1), db("html", !1, !1, !0)) : w = L;
    $a.element = w;
    (function (a) {
        D(a, {bootstrap: tb, copy: U, extend: D, equals: ea, element: w, forEach: m, injector: ub, noop: s, bind: Va, toJson: ba, fromJson: qb, identity: na, isUndefined: u, isDefined: v, isString: B, isFunction: H, isObject: M, isNumber: Ra, isElement: ic, isArray: E, version: md, isDate: oa, lowercase: y, uppercase: la, callbacks: {counter: 0}});
        ta = nc(P);
        try {
            ta("ngLocale")
        } catch (c) {
            ta("ngLocale",
                []).provider("$locale", cd)
        }
        ta("ng", ["ngLocale"], ["$provide", function (a) {
            a.provider("$compile", Fb).directive({a: nd, input: ec, textarea: ec, form: od, script: Vd, select: Xd, style: Zd, option: Yd, ngBind: zd, ngBindHtmlUnsafe: Bd, ngBindTemplate: Ad, ngClass: Cd, ngClassEven: Ed, ngClassOdd: Dd, ngCsp: Hd, ngCloak: Fd, ngController: Gd, ngForm: pd, ngHide: Od, ngInclude: Id, ngInit: Jd, ngNonBindable: Kd, ngPluralize: Ld, ngRepeat: Md, ngShow: Nd, ngStyle: Pd, ngSwitch: Qd, ngSwitchWhen: Rd, ngSwitchDefault: Sd, ngOptions: Wd, ngView: Ud, ngTransclude: Td, ngModel: ud,
                ngList: wd, ngChange: vd, required: fc, ngRequired: fc, ngValue: yd}).directive(mb).directive(gc);
            a.provider({$anchorScroll: wc, $browser: zc, $cacheFactory: Ac, $controller: Fc, $document: Gc, $exceptionHandler: Hc, $filter: Tb, $interpolate: Ic, $http: Zc, $httpBackend: $c, $location: Mc, $log: Nc, $parse: Rc, $route: Uc, $routeParams: Vc, $rootScope: Wc, $q: Sc, $sniffer: Xc, $templateCache: Bc, $timeout: dd, $window: Yc})
        }])
    })($a);
    w(T).ready(function () {
        lc(T, tb)
    })
})(window, document);
angular.element(document).find("head").append('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak{display:none !important;}ng\\:form{display:block;}</style>');
