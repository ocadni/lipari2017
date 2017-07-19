// CartoDB.js version: 3.15.10 
// sha: b0f743801efcdf67255637c955b8fcfc9e811f64 
! function() {
    var define, root = this,
        __prev = { jQuery: root.jQuery, $: root.$, L: root.L, Mustache: root.Mustache, Backbone: root.Backbone, _: root._ };
    ! function(a, b) {
        function c(a) {
            return J.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1 }

        function d(a) {
            if (!sb[a]) {
                var b = G.body,
                    c = J("<" + a + ">").appendTo(b),
                    d = c.css("display");
                c.remove(), ("none" === d || "" === d) && (ob || (ob = G.createElement("iframe"), ob.frameBorder = ob.width = ob.height = 0), b.appendChild(ob), pb && ob.createElement || (pb = (ob.contentWindow || ob.contentDocument).document, pb.write((J.support.boxModel ? "<!doctype html>" : "") + "<html><body>"), pb.close()), c = pb.createElement(a), pb.body.appendChild(c), d = J.css(c, "display"), b.removeChild(ob)), sb[a] = d }
            return sb[a] }

        function e(a, b) {
            var c = {};
            return J.each(vb.concat.apply([], vb.slice(0, b)), function() { c[this] = a }), c }

        function f() { rb = b }

        function g() {
            return setTimeout(f, 0), rb = J.now() }

        function h() {
            try {
                return new a.ActiveXObject("Microsoft.XMLHTTP") } catch (b) {} }

        function i() {
            try {
                return new a.XMLHttpRequest } catch (b) {} }

        function j(a, c) { a.dataFilter && (c = a.dataFilter(c, a.dataType));
            var d, e, f, g, h, i, j, k, l = a.dataTypes,
                m = {},
                n = l.length,
                o = l[0];
            for (d = 1; n > d; d++) {
                if (1 === d)
                    for (e in a.converters) "string" == typeof e && (m[e.toLowerCase()] = a.converters[e]);
                if (g = o, o = l[d], "*" === o) o = g;
                else if ("*" !== g && g !== o) {
                    if (h = g + " " + o, i = m[h] || m["* " + o], !i) { k = b;
                        for (j in m)
                            if (f = j.split(" "), (f[0] === g || "*" === f[0]) && (k = m[f[1] + " " + o])) { j = m[j], j === !0 ? i = k : k === !0 && (i = j);
                                break } }!i && !k && J.error("No conversion from " + h.replace(" ", " to ")), i !== !0 && (c = i ? i(c) : k(j(c))) } }
            return c }

        function k(a, c, d) {
            var e, f, g, h, i = a.contents,
                j = a.dataTypes,
                k = a.responseFields;
            for (f in k) f in d && (c[k[f]] = d[f]);
            for (;
                "*" === j[0];) j.shift(), e === b && (e = a.mimeType || c.getResponseHeader("content-type"));
            if (e)
                for (f in i)
                    if (i[f] && i[f].test(e)) { j.unshift(f);
                        break }
            if (j[0] in d) g = j[0];
            else {
                for (f in d) {
                    if (!j[0] || a.converters[f + " " + j[0]]) { g = f;
                        break }
                    h || (h = f) }
                g = g || h }
            return g ? (g !== j[0] && j.unshift(g), d[g]) : void 0 }

        function l(a, b, c, d) {
            if (J.isArray(b)) J.each(b, function(b, e) { c || Sa.test(a) ? d(a, e) : l(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d) });
            else if (c || "object" !== J.type(b)) d(a, b);
            else
                for (var e in b) l(a + "[" + e + "]", b[e], c, d) }

        function m(a, c) {
            var d, e, f = J.ajaxSettings.flatOptions || {};
            for (d in c) c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
            e && J.extend(!0, a, e) }

        function n(a, c, d, e, f, g) { f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
            for (var h, i = a[f], j = 0, k = i ? i.length : 0, l = a === fb; k > j && (l || !h); j++) h = i[j](c, d, e), "string" == typeof h && (!l || g[h] ? h = b : (c.dataTypes.unshift(h), h = n(a, c, d, e, h, g)));
            return (l || !h) && !g["*"] && (h = n(a, c, d, e, "*", g)), h }

        function o(a) {
            return function(b, c) {
                if ("string" != typeof b && (c = b, b = "*"), J.isFunction(c))
                    for (var d, e, f, g = b.toLowerCase().split(bb), h = 0, i = g.length; i > h; h++) d = g[h], f = /^\+/.test(d), f && (d = d.substr(1) || "*"), e = a[d] = a[d] || [], e[f ? "unshift" : "push"](c) } }

        function p(a, b, c) {
            var d = "width" === b ? a.offsetWidth : a.offsetHeight,
                e = "width" === b ? 1 : 0,
                f = 4;
            if (d > 0) {
                if ("border" !== c)
                    for (; f > e; e += 2) c || (d -= parseFloat(J.css(a, "padding" + Oa[e])) || 0), "margin" === c ? d += parseFloat(J.css(a, c + Oa[e])) || 0 : d -= parseFloat(J.css(a, "border" + Oa[e] + "Width")) || 0;
                return d + "px" }
            if (d = Da(a, b), (0 > d || null == d) && (d = a.style[b]), Ka.test(d)) return d;
            if (d = parseFloat(d) || 0, c)
                for (; f > e; e += 2) d += parseFloat(J.css(a, "padding" + Oa[e])) || 0, "padding" !== c && (d += parseFloat(J.css(a, "border" + Oa[e] + "Width")) || 0), "margin" === c && (d += parseFloat(J.css(a, c + Oa[e])) || 0);
            return d + "px" }

        function q(a) {
            var b = G.createElement("div");
            return Ca.appendChild(b), b.innerHTML = a.outerHTML, b.firstChild }

        function r(a) {
            var b = (a.nodeName || "").toLowerCase(); "input" === b ? s(a) : "script" !== b && "undefined" != typeof a.getElementsByTagName && J.grep(a.getElementsByTagName("input"), s) }

        function s(a) {
            ("checkbox" === a.type || "radio" === a.type) && (a.defaultChecked = a.checked) }

        function t(a) {
            return "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName("*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll("*") : [] }

        function u(a, b) {
            var c;
            1 === b.nodeType && (b.clearAttributes && b.clearAttributes(), b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName.toLowerCase(), "object" === c ? b.outerHTML = a.outerHTML : "input" !== c || "checkbox" !== a.type && "radio" !== a.type ? "option" === c ? b.selected = a.defaultSelected : "input" === c || "textarea" === c ? b.defaultValue = a.defaultValue : "script" === c && b.text !== a.text && (b.text = a.text) : (a.checked && (b.defaultChecked = b.checked = a.checked), b.value !== a.value && (b.value = a.value)), b.removeAttribute(J.expando), b.removeAttribute("_submit_attached"), b.removeAttribute("_change_attached")) }

        function v(a, b) {
            if (1 === b.nodeType && J.hasData(a)) {
                var c, d, e, f = J._data(a),
                    g = J._data(b, f),
                    h = f.events;
                if (h) { delete g.handle, g.events = {};
                    for (c in h)
                        for (d = 0, e = h[c].length; e > d; d++) J.event.add(b, c, h[c][d]) }
                g.data && (g.data = J.extend({}, g.data)) } }

        function w(a, b) {
            return J.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a }

        function x(a) {
            var b = oa.split("|"),
                c = a.createDocumentFragment();
            if (c.createElement)
                for (; b.length;) c.createElement(b.pop());
            return c }

        function y(a, b, c) {
            if (b = b || 0, J.isFunction(b)) return J.grep(a, function(a, d) {
                var e = !!b.call(a, d, a);
                return e === c });
            if (b.nodeType) return J.grep(a, function(a, d) {
                return a === b === c });
            if ("string" == typeof b) {
                var d = J.grep(a, function(a) {
                    return 1 === a.nodeType });
                if (ka.test(b)) return J.filter(b, d, !c);
                b = J.filter(b, d) }
            return J.grep(a, function(a, d) {
                return J.inArray(a, b) >= 0 === c }) }

        function z(a) {
            return !a || !a.parentNode || 11 === a.parentNode.nodeType }

        function A() {
            return !0 }

        function B() {
            return !1 }

        function C(a, b, c) {
            var d = b + "defer",
                e = b + "queue",
                f = b + "mark",
                g = J._data(a, d);
            g && ("queue" === c || !J._data(a, e)) && ("mark" === c || !J._data(a, f)) && setTimeout(function() {!J._data(a, e) && !J._data(a, f) && (J.removeData(a, d, !0), g.fire()) }, 0) }

        function D(a) {
            for (var b in a)
                if (("data" !== b || !J.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
            return !0 }

        function E(a, c, d) {
            if (d === b && 1 === a.nodeType) {
                var e = "data-" + c.replace(N, "-$1").toLowerCase();
                if (d = a.getAttribute(e), "string" == typeof d) {
                    try { d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : J.isNumeric(d) ? +d : M.test(d) ? J.parseJSON(d) : d } catch (f) {}
                    J.data(a, c, d) } else d = b }
            return d }

        function F(a) {
            var b, c, d = K[a] = {};
            for (a = a.split(/\s+/), b = 0, c = a.length; c > b; b++) d[a[b]] = !0;
            return d }
        var G = a.document,
            H = a.navigator,
            I = a.location,
            J = function() {
                function c() {
                    if (!h.isReady) {
                        try { G.documentElement.doScroll("left") } catch (a) {
                            return void setTimeout(c, 1) }
                        h.ready() } }
                var d, e, f, g, h = function(a, b) {
                        return new h.fn.init(a, b, d) },
                    i = a.jQuery,
                    j = a.$,
                    k = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                    l = /\S/,
                    m = /^\s+/,
                    n = /\s+$/,
                    o = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                    p = /^[\],:{}\s]*$/,
                    q = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                    r = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                    s = /(?:^|:|,)(?:\s*\[)+/g,
                    t = /(webkit)[ \/]([\w.]+)/,
                    u = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                    v = /(msie) ([\w.]+)/,
                    w = /(mozilla)(?:.*? rv:([\w.]+))?/,
                    x = /-([a-z]|[0-9])/gi,
                    y = /^-ms-/,
                    z = function(a, b) {
                        return (b + "").toUpperCase() },
                    A = H.userAgent,
                    B = Object.prototype.toString,
                    C = Object.prototype.hasOwnProperty,
                    D = Array.prototype.push,
                    E = Array.prototype.slice,
                    F = String.prototype.trim,
                    I = Array.prototype.indexOf,
                    J = {};
                return h.fn = h.prototype = { constructor: h, init: function(a, c, d) {
                        var e, f, g, i;
                        if (!a) return this;
                        if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
                        if ("body" === a && !c && G.body) return this.context = G, this[0] = G.body, this.selector = a, this.length = 1, this;
                        if ("string" == typeof a) {
                            if (e = "<" !== a.charAt(0) || ">" !== a.charAt(a.length - 1) || a.length < 3 ? k.exec(a) : [null, a, null], e && (e[1] || !c)) {
                                if (e[1]) return c = c instanceof h ? c[0] : c, i = c ? c.ownerDocument || c : G, g = o.exec(a), g ? h.isPlainObject(c) ? (a = [G.createElement(g[1])], h.fn.attr.call(a, c, !0)) : a = [i.createElement(g[1])] : (g = h.buildFragment([e[1]], [i]), a = (g.cacheable ? h.clone(g.fragment) : g.fragment).childNodes), h.merge(this, a);
                                if (f = G.getElementById(e[2]), f && f.parentNode) {
                                    if (f.id !== e[2]) return d.find(a);
                                    this.length = 1, this[0] = f }
                                return this.context = G, this.selector = a, this }
                            return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a) }
                        return h.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, this.context = a.context), h.makeArray(a, this)) }, selector: "", jquery: "1.7.2", length: 0, size: function() {
                        return this.length }, toArray: function() {
                        return E.call(this, 0) }, get: function(a) {
                        return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a] }, pushStack: function(a, b, c) {
                        var d = this.constructor();
                        return h.isArray(a) ? D.apply(d, a) : h.merge(d, a), d.prevObject = this, d.context = this.context, "find" === b ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")"), d }, each: function(a, b) {
                        return h.each(this, a, b) }, ready: function(a) {
                        return h.bindReady(), f.add(a), this }, eq: function(a) {
                        return a = +a, -1 === a ? this.slice(a) : this.slice(a, a + 1) }, first: function() {
                        return this.eq(0) }, last: function() {
                        return this.eq(-1) }, slice: function() {
                        return this.pushStack(E.apply(this, arguments), "slice", E.call(arguments).join(",")) }, map: function(a) {
                        return this.pushStack(h.map(this, function(b, c) {
                            return a.call(b, c, b) })) }, end: function() {
                        return this.prevObject || this.constructor(null) }, push: D, sort: [].sort, splice: [].splice }, h.fn.init.prototype = h.fn, h.extend = h.fn.extend = function() {
                    var a, c, d, e, f, g, i = arguments[0] || {},
                        j = 1,
                        k = arguments.length,
                        l = !1;
                    for ("boolean" == typeof i && (l = i, i = arguments[1] || {}, j = 2), "object" != typeof i && !h.isFunction(i) && (i = {}), k === j && (i = this, --j); k > j; j++)
                        if (null != (a = arguments[j]))
                            for (c in a) d = i[c], e = a[c], i !== e && (l && e && (h.isPlainObject(e) || (f = h.isArray(e))) ? (f ? (f = !1, g = d && h.isArray(d) ? d : []) : g = d && h.isPlainObject(d) ? d : {}, i[c] = h.extend(l, g, e)) : e !== b && (i[c] = e));
                    return i }, h.extend({ noConflict: function(b) {
                        return a.$ === h && (a.$ = j), b && a.jQuery === h && (a.jQuery = i), h }, isReady: !1, readyWait: 1, holdReady: function(a) { a ? h.readyWait++ : h.ready(!0) }, ready: function(a) {
                        if (a === !0 && !--h.readyWait || a !== !0 && !h.isReady) {
                            if (!G.body) return setTimeout(h.ready, 1);
                            if (h.isReady = !0, a !== !0 && --h.readyWait > 0) return;
                            f.fireWith(G, [h]), h.fn.trigger && h(G).trigger("ready").off("ready") } }, bindReady: function() {
                        if (!f) {
                            if (f = h.Callbacks("once memory"), "complete" === G.readyState) return setTimeout(h.ready, 1);
                            if (G.addEventListener) G.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", h.ready, !1);
                            else if (G.attachEvent) { G.attachEvent("onreadystatechange", g), a.attachEvent("onload", h.ready);
                                var b = !1;
                                try { b = null == a.frameElement } catch (d) {}
                                G.documentElement.doScroll && b && c() } } }, isFunction: function(a) {
                        return "function" === h.type(a) }, isArray: Array.isArray || function(a) {
                        return "array" === h.type(a) }, isWindow: function(a) {
                        return null != a && a == a.window }, isNumeric: function(a) {
                        return !isNaN(parseFloat(a)) && isFinite(a) }, type: function(a) {
                        return null == a ? String(a) : J[B.call(a)] || "object" }, isPlainObject: function(a) {
                        if (!a || "object" !== h.type(a) || a.nodeType || h.isWindow(a)) return !1;
                        try {
                            if (a.constructor && !C.call(a, "constructor") && !C.call(a.constructor.prototype, "isPrototypeOf")) return !1 } catch (c) {
                            return !1 }
                        var d;
                        for (d in a);
                        return d === b || C.call(a, d) }, isEmptyObject: function(a) {
                        for (var b in a) return !1;
                        return !0 }, error: function(a) {
                        throw new Error(a) }, parseJSON: function(b) {
                        return "string" == typeof b && b ? (b = h.trim(b), a.JSON && a.JSON.parse ? a.JSON.parse(b) : p.test(b.replace(q, "@").replace(r, "]").replace(s, "")) ? new Function("return " + b)() : void h.error("Invalid JSON: " + b)) : null }, parseXML: function(c) {
                        if ("string" != typeof c || !c) return null;
                        var d, e;
                        try { a.DOMParser ? (e = new DOMParser, d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), d.async = "false", d.loadXML(c)) } catch (f) { d = b }
                        return (!d || !d.documentElement || d.getElementsByTagName("parsererror").length) && h.error("Invalid XML: " + c), d }, noop: function() {}, globalEval: function(b) { b && l.test(b) && (a.execScript || function(b) { a.eval.call(a, b) })(b) }, camelCase: function(a) {
                        return a.replace(y, "ms-").replace(x, z) }, nodeName: function(a, b) {
                        return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase() }, each: function(a, c, d) {
                        var e, f = 0,
                            g = a.length,
                            i = g === b || h.isFunction(a);
                        if (d)
                            if (i) {
                                for (e in a)
                                    if (c.apply(a[e], d) === !1) break } else
                                for (; g > f && c.apply(a[f++], d) !== !1;);
                        else if (i) {
                            for (e in a)
                                if (c.call(a[e], e, a[e]) === !1) break } else
                            for (; g > f && c.call(a[f], f, a[f++]) !== !1;);
                        return a }, trim: F ? function(a) {
                        return null == a ? "" : F.call(a) } : function(a) {
                        return null == a ? "" : (a + "").replace(m, "").replace(n, "") }, makeArray: function(a, b) {
                        var c = b || [];
                        if (null != a) {
                            var d = h.type(a);
                            null == a.length || "string" === d || "function" === d || "regexp" === d || h.isWindow(a) ? D.call(c, a) : h.merge(c, a) }
                        return c }, inArray: function(a, b, c) {
                        var d;
                        if (b) {
                            if (I) return I.call(b, a, c);
                            for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                                if (c in b && b[c] === a) return c }
                        return -1 }, merge: function(a, c) {
                        var d = a.length,
                            e = 0;
                        if ("number" == typeof c.length)
                            for (var f = c.length; f > e; e++) a[d++] = c[e];
                        else
                            for (; c[e] !== b;) a[d++] = c[e++];
                        return a.length = d, a }, grep: function(a, b, c) {
                        var d, e = [];
                        c = !!c;
                        for (var f = 0, g = a.length; g > f; f++) d = !!b(a[f], f), c !== d && e.push(a[f]);
                        return e }, map: function(a, c, d) {
                        var e, f, g = [],
                            i = 0,
                            j = a.length,
                            k = a instanceof h || j !== b && "number" == typeof j && (j > 0 && a[0] && a[j - 1] || 0 === j || h.isArray(a));
                        if (k)
                            for (; j > i; i++) e = c(a[i], i, d), null != e && (g[g.length] = e);
                        else
                            for (f in a) e = c(a[f], f, d), null != e && (g[g.length] = e);
                        return g.concat.apply([], g) }, guid: 1, proxy: function(a, c) {
                        if ("string" == typeof c) {
                            var d = a[c];
                            c = a, a = d }
                        if (!h.isFunction(a)) return b;
                        var e = E.call(arguments, 2),
                            f = function() {
                                return a.apply(c, e.concat(E.call(arguments))) };
                        return f.guid = a.guid = a.guid || f.guid || h.guid++, f }, access: function(a, c, d, e, f, g, i) {
                        var j, k = null == d,
                            l = 0,
                            m = a.length;
                        if (d && "object" == typeof d) {
                            for (l in d) h.access(a, c, l, d[l], 1, g, e);
                            f = 1 } else if (e !== b) {
                            if (j = i === b && h.isFunction(e), k && (j ? (j = c, c = function(a, b, c) {
                                    return j.call(h(a), c) }) : (c.call(a, e), c = null)), c)
                                for (; m > l; l++) c(a[l], d, j ? e.call(a[l], l, c(a[l], d)) : e, i);
                            f = 1 }
                        return f ? a : k ? c.call(a) : m ? c(a[0], d) : g }, now: function() {
                        return (new Date).getTime() }, uaMatch: function(a) { a = a.toLowerCase();
                        var b = t.exec(a) || u.exec(a) || v.exec(a) || a.indexOf("compatible") < 0 && w.exec(a) || [];
                        return { browser: b[1] || "", version: b[2] || "0" } }, sub: function() {
                        function a(b, c) {
                            return new a.fn.init(b, c) }
                        h.extend(!0, a, this), a.superclass = this, a.fn = a.prototype = this(), a.fn.constructor = a, a.sub = this.sub, a.fn.init = function(c, d) {
                            return d && d instanceof h && !(d instanceof a) && (d = a(d)), h.fn.init.call(this, c, d, b) }, a.fn.init.prototype = a.fn;
                        var b = a(G);
                        return a }, browser: {} }), h.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(a, b) { J["[object " + b + "]"] = b.toLowerCase() }), e = h.uaMatch(A), e.browser && (h.browser[e.browser] = !0, h.browser.version = e.version), h.browser.webkit && (h.browser.safari = !0), l.test("Â ") && (m = /^[\s\xA0]+/, n = /[\s\xA0]+$/), d = h(G), G.addEventListener ? g = function() { G.removeEventListener("DOMContentLoaded", g, !1), h.ready() } : G.attachEvent && (g = function() { "complete" === G.readyState && (G.detachEvent("onreadystatechange", g), h.ready()) }), h }(),
            K = {};
        J.Callbacks = function(a) { a = a ? K[a] || F(a) : {};
            var c, d, e, f, g, h, i = [],
                j = [],
                k = function(b) {
                    var c, d, e, f;
                    for (c = 0, d = b.length; d > c; c++) e = b[c], f = J.type(e), "array" === f ? k(e) : "function" === f && (!a.unique || !m.has(e)) && i.push(e) },
                l = function(b, k) {
                    for (k = k || [], c = !a.memory || [b, k], d = !0, e = !0, h = f || 0, f = 0, g = i.length; i && g > h; h++)
                        if (i[h].apply(b, k) === !1 && a.stopOnFalse) { c = !0;
                            break }
                    e = !1, i && (a.once ? c === !0 ? m.disable() : i = [] : j && j.length && (c = j.shift(), m.fireWith(c[0], c[1]))) },
                m = { add: function() {
                        if (i) {
                            var a = i.length;
                            k(arguments), e ? g = i.length : c && c !== !0 && (f = a, l(c[0], c[1])) }
                        return this }, remove: function() {
                        if (i)
                            for (var b = arguments, c = 0, d = b.length; d > c; c++)
                                for (var f = 0; f < i.length && (b[c] !== i[f] || (e && g >= f && (g--, h >= f && h--), i.splice(f--, 1), !a.unique)); f++);
                        return this }, has: function(a) {
                        if (i)
                            for (var b = 0, c = i.length; c > b; b++)
                                if (a === i[b]) return !0;
                        return !1 }, empty: function() {
                        return i = [], this }, disable: function() {
                        return i = j = c = b, this }, disabled: function() {
                        return !i }, lock: function() {
                        return j = b, (!c || c === !0) && m.disable(), this }, locked: function() {
                        return !j }, fireWith: function(b, d) {
                        return j && (e ? a.once || j.push([b, d]) : (!a.once || !c) && l(b, d)), this }, fire: function() {
                        return m.fireWith(this, arguments), this }, fired: function() {
                        return !!d } };
            return m };
        var L = [].slice;
        J.extend({ Deferred: function(a) {
                var b, c = J.Callbacks("once memory"),
                    d = J.Callbacks("once memory"),
                    e = J.Callbacks("memory"),
                    f = "pending",
                    g = { resolve: c, reject: d, notify: e },
                    h = { done: c.add, fail: d.add, progress: e.add, state: function() {
                            return f }, isResolved: c.fired, isRejected: d.fired, then: function(a, b, c) {
                            return i.done(a).fail(b).progress(c), this }, always: function() {
                            return i.done.apply(i, arguments).fail.apply(i, arguments), this }, pipe: function(a, b, c) {
                            return J.Deferred(function(d) { J.each({ done: [a, "resolve"], fail: [b, "reject"], progress: [c, "notify"] }, function(a, b) {
                                    var c, e = b[0],
                                        f = b[1];
                                    J.isFunction(e) ? i[a](function() { c = e.apply(this, arguments), c && J.isFunction(c.promise) ? c.promise().then(d.resolve, d.reject, d.notify) : d[f + "With"](this === i ? d : this, [c]) }) : i[a](d[f]) }) }).promise() }, promise: function(a) {
                            if (null == a) a = h;
                            else
                                for (var b in h) a[b] = h[b];
                            return a } },
                    i = h.promise({});
                for (b in g) i[b] = g[b].fire, i[b + "With"] = g[b].fireWith;
                return i.done(function() { f = "resolved" }, d.disable, e.lock).fail(function() { f = "rejected" }, c.disable, e.lock), a && a.call(i, i), i }, when: function(a) {
                function b(a) {
                    return function(b) { g[a] = arguments.length > 1 ? L.call(arguments, 0) : b, i.notifyWith(j, g) } }

                function c(a) {
                    return function(b) { d[a] = arguments.length > 1 ? L.call(arguments, 0) : b, --h || i.resolveWith(i, d) } }
                var d = L.call(arguments, 0),
                    e = 0,
                    f = d.length,
                    g = Array(f),
                    h = f,
                    i = 1 >= f && a && J.isFunction(a.promise) ? a : J.Deferred(),
                    j = i.promise();
                if (f > 1) {
                    for (; f > e; e++) d[e] && d[e].promise && J.isFunction(d[e].promise) ? d[e].promise().then(c(e), i.reject, b(e)) : --h;
                    h || i.resolveWith(i, d) } else i !== a && i.resolveWith(i, f ? [a] : []);
                return j } }), J.support = function() {
            var b, c, d, e, f, g, h, i, j, k, l, m = G.createElement("div");
            G.documentElement;
            if (m.setAttribute("className", "t"), m.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>", c = m.getElementsByTagName("*"), d = m.getElementsByTagName("a")[0], !c || !c.length || !d) return {};
            e = G.createElement("select"), f = e.appendChild(G.createElement("option")), g = m.getElementsByTagName("input")[0], b = { leadingWhitespace: 3 === m.firstChild.nodeType, tbody: !m.getElementsByTagName("tbody").length, htmlSerialize: !!m.getElementsByTagName("link").length, style: /top/.test(d.getAttribute("style")), hrefNormalized: "/a" === d.getAttribute("href"), opacity: /^0.55/.test(d.style.opacity), cssFloat: !!d.style.cssFloat, checkOn: "on" === g.value, optSelected: f.selected, getSetAttribute: "t" !== m.className, enctype: !!G.createElement("form").enctype, html5Clone: "<:nav></:nav>" !== G.createElement("nav").cloneNode(!0).outerHTML, submitBubbles: !0, changeBubbles: !0, focusinBubbles: !1, deleteExpando: !0, noCloneEvent: !0, inlineBlockNeedsLayout: !1, shrinkWrapBlocks: !1, reliableMarginRight: !0, pixelMargin: !0 }, J.boxModel = b.boxModel = "CSS1Compat" === G.compatMode, g.checked = !0, b.noCloneChecked = g.cloneNode(!0).checked, e.disabled = !0, b.optDisabled = !f.disabled;
            try { delete m.test } catch (n) { b.deleteExpando = !1 }
            if (!m.addEventListener && m.attachEvent && m.fireEvent && (m.attachEvent("onclick", function() { b.noCloneEvent = !1 }), m.cloneNode(!0).fireEvent("onclick")), g = G.createElement("input"), g.value = "t", g.setAttribute("type", "radio"), b.radioValue = "t" === g.value, g.setAttribute("checked", "checked"), g.setAttribute("name", "t"), m.appendChild(g), h = G.createDocumentFragment(), h.appendChild(m.lastChild), b.checkClone = h.cloneNode(!0).cloneNode(!0).lastChild.checked, b.appendChecked = g.checked, h.removeChild(g), h.appendChild(m), m.attachEvent)
                for (k in { submit: 1, change: 1, focusin: 1 }) j = "on" + k, l = j in m, l || (m.setAttribute(j, "return;"), l = "function" == typeof m[j]), b[k + "Bubbles"] = l;
            return h.removeChild(m), h = e = f = m = g = null, J(function() {
                var c, d, e, f, g, h, j, k, n, o, p, q, r = G.getElementsByTagName("body")[0];!r || (j = 1, q = "padding:0;margin:0;border:", o = "position:absolute;top:0;left:0;width:1px;height:1px;", p = q + "0;visibility:hidden;", k = "style='" + o + q + "5px solid #000;", n = "<div " + k + "display:block;'><div style='" + q + "0;display:block;overflow:hidden;'></div></div><table " + k + "' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>", c = G.createElement("div"), c.style.cssText = p + "width:0;height:0;position:static;top:0;margin-top:" + j + "px", r.insertBefore(c, r.firstChild), m = G.createElement("div"), c.appendChild(m), m.innerHTML = "<table><tr><td style='" + q + "0;display:none'></td><td>t</td></tr></table>", i = m.getElementsByTagName("td"), l = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", b.reliableHiddenOffsets = l && 0 === i[0].offsetHeight, a.getComputedStyle && (m.innerHTML = "", h = G.createElement("div"), h.style.width = "0", h.style.marginRight = "0", m.style.width = "2px", m.appendChild(h), b.reliableMarginRight = 0 === (parseInt((a.getComputedStyle(h, null) || { marginRight: 0 }).marginRight, 10) || 0)), "undefined" != typeof m.style.zoom && (m.innerHTML = "", m.style.width = m.style.padding = "1px", m.style.border = 0, m.style.overflow = "hidden", m.style.display = "inline", m.style.zoom = 1, b.inlineBlockNeedsLayout = 3 === m.offsetWidth, m.style.display = "block", m.style.overflow = "visible", m.innerHTML = "<div style='width:5px;'></div>", b.shrinkWrapBlocks = 3 !== m.offsetWidth), m.style.cssText = o + p, m.innerHTML = n, d = m.firstChild, e = d.firstChild, f = d.nextSibling.firstChild.firstChild, g = { doesNotAddBorder: 5 !== e.offsetTop, doesAddBorderForTableAndCells: 5 === f.offsetTop }, e.style.position = "fixed", e.style.top = "20px", g.fixedPosition = 20 === e.offsetTop || 15 === e.offsetTop, e.style.position = e.style.top = "", d.style.overflow = "hidden", d.style.position = "relative", g.subtractsBorderForOverflowNotVisible = -5 === e.offsetTop, g.doesNotIncludeMarginInBodyOffset = r.offsetTop !== j, a.getComputedStyle && (m.style.marginTop = "1%", b.pixelMargin = "1%" !== (a.getComputedStyle(m, null) || { marginTop: 0 }).marginTop), "undefined" != typeof c.style.zoom && (c.style.zoom = 1), r.removeChild(c), h = m = c = null, J.extend(b, g)) }), b }();
        var M = /^(?:\{.*\}|\[.*\])$/,
            N = /([A-Z])/g;
        J.extend({ cache: {}, uuid: 0, expando: "jQuery" + (J.fn.jquery + Math.random()).replace(/\D/g, ""), noData: { embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0 }, hasData: function(a) {
                return a = a.nodeType ? J.cache[a[J.expando]] : a[J.expando], !!a && !D(a) }, data: function(a, c, d, e) {
                if (J.acceptData(a)) {
                    var f, g, h, i = J.expando,
                        j = "string" == typeof c,
                        k = a.nodeType,
                        l = k ? J.cache : a,
                        m = k ? a[i] : a[i] && i,
                        n = "events" === c;
                    if ((!m || !l[m] || !n && !e && !l[m].data) && j && d === b) return;
                    return m || (k ? a[i] = m = ++J.uuid : m = i), l[m] || (l[m] = {}, k || (l[m].toJSON = J.noop)), ("object" == typeof c || "function" == typeof c) && (e ? l[m] = J.extend(l[m], c) : l[m].data = J.extend(l[m].data, c)), f = g = l[m], e || (g.data || (g.data = {}), g = g.data), d !== b && (g[J.camelCase(c)] = d), n && !g[c] ? f.events : (j ? (h = g[c], null == h && (h = g[J.camelCase(c)])) : h = g, h) } }, removeData: function(a, b, c) {
                if (J.acceptData(a)) {
                    var d, e, f, g = J.expando,
                        h = a.nodeType,
                        i = h ? J.cache : a,
                        j = h ? a[g] : g;
                    if (!i[j]) return;
                    if (b && (d = c ? i[j] : i[j].data)) { J.isArray(b) || (b in d ? b = [b] : (b = J.camelCase(b), b = b in d ? [b] : b.split(" ")));
                        for (e = 0, f = b.length; f > e; e++) delete d[b[e]];
                        if (!(c ? D : J.isEmptyObject)(d)) return }
                    if (!c && (delete i[j].data, !D(i[j]))) return;
                    J.support.deleteExpando || !i.setInterval ? delete i[j] : i[j] = null, h && (J.support.deleteExpando ? delete a[g] : a.removeAttribute ? a.removeAttribute(g) : a[g] = null) } }, _data: function(a, b, c) {
                return J.data(a, b, c, !0) }, acceptData: function(a) {
                if (a.nodeName) {
                    var b = J.noData[a.nodeName.toLowerCase()];
                    if (b) return b !== !0 && a.getAttribute("classid") === b }
                return !0 } }), J.fn.extend({ data: function(a, c) {
                var d, e, f, g, h, i = this[0],
                    j = 0,
                    k = null;
                if (a === b) {
                    if (this.length && (k = J.data(i), 1 === i.nodeType && !J._data(i, "parsedAttrs"))) {
                        for (f = i.attributes, h = f.length; h > j; j++) g = f[j].name, 0 === g.indexOf("data-") && (g = J.camelCase(g.substring(5)), E(i, g, k[g]));
                        J._data(i, "parsedAttrs", !0) }
                    return k }
                return "object" == typeof a ? this.each(function() { J.data(this, a) }) : (d = a.split(".", 2), d[1] = d[1] ? "." + d[1] : "", e = d[1] + "!", J.access(this, function(c) {
                    return c === b ? (k = this.triggerHandler("getData" + e, [d[0]]), k === b && i && (k = J.data(i, a), k = E(i, a, k)), k === b && d[1] ? this.data(d[0]) : k) : (d[1] = c, void this.each(function() {
                        var b = J(this);
                        b.triggerHandler("setData" + e, d), J.data(this, a, c), b.triggerHandler("changeData" + e, d) })) }, null, c, arguments.length > 1, null, !1)) }, removeData: function(a) {
                return this.each(function() { J.removeData(this, a) }) } }), J.extend({ _mark: function(a, b) { a && (b = (b || "fx") + "mark", J._data(a, b, (J._data(a, b) || 0) + 1)) }, _unmark: function(a, b, c) {
                if (a !== !0 && (c = b, b = a, a = !1), b) { c = c || "fx";
                    var d = c + "mark",
                        e = a ? 0 : (J._data(b, d) || 1) - 1;
                    e ? J._data(b, d, e) : (J.removeData(b, d, !0), C(b, c, "mark")) } }, queue: function(a, b, c) {
                var d;
                return a ? (b = (b || "fx") + "queue", d = J._data(a, b), c && (!d || J.isArray(c) ? d = J._data(a, b, J.makeArray(c)) : d.push(c)), d || []) : void 0 }, dequeue: function(a, b) { b = b || "fx";
                var c = J.queue(a, b),
                    d = c.shift(),
                    e = {}; "inprogress" === d && (d = c.shift()), d && ("fx" === b && c.unshift("inprogress"), J._data(a, b + ".run", e), d.call(a, function() { J.dequeue(a, b) }, e)), c.length || (J.removeData(a, b + "queue " + b + ".run", !0), C(a, b, "queue")) } }), J.fn.extend({ queue: function(a, c) {
                var d = 2;
                return "string" != typeof a && (c = a, a = "fx", d--), arguments.length < d ? J.queue(this[0], a) : c === b ? this : this.each(function() {
                    var b = J.queue(this, a, c); "fx" === a && "inprogress" !== b[0] && J.dequeue(this, a) }) }, dequeue: function(a) {
                return this.each(function() { J.dequeue(this, a) }) }, delay: function(a, b) {
                return a = J.fx ? J.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                    var d = setTimeout(b, a);
                    c.stop = function() { clearTimeout(d) } }) }, clearQueue: function(a) {
                return this.queue(a || "fx", []) }, promise: function(a, c) {
                function d() {--i || f.resolveWith(g, [g]) } "string" != typeof a && (c = a, a = b), a = a || "fx";
                for (var e, f = J.Deferred(), g = this, h = g.length, i = 1, j = a + "defer", k = a + "queue", l = a + "mark"; h--;)(e = J.data(g[h], j, b, !0) || (J.data(g[h], k, b, !0) || J.data(g[h], l, b, !0)) && J.data(g[h], j, J.Callbacks("once memory"), !0)) && (i++, e.add(d));
                return d(), f.promise(c) } });
        var O, P, Q, R = /[\n\t\r]/g,
            S = /\s+/,
            T = /\r/g,
            U = /^(?:button|input)$/i,
            V = /^(?:button|input|object|select|textarea)$/i,
            W = /^a(?:rea)?$/i,
            X = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            Y = J.support.getSetAttribute;
        J.fn.extend({ attr: function(a, b) {
                return J.access(this, J.attr, a, b, arguments.length > 1) }, removeAttr: function(a) {
                return this.each(function() { J.removeAttr(this, a) }) }, prop: function(a, b) {
                return J.access(this, J.prop, a, b, arguments.length > 1) }, removeProp: function(a) {
                return a = J.propFix[a] || a, this.each(function() {
                    try { this[a] = b, delete this[a] } catch (c) {} }) }, addClass: function(a) {
                var b, c, d, e, f, g, h;
                if (J.isFunction(a)) return this.each(function(b) { J(this).addClass(a.call(this, b, this.className)) });
                if (a && "string" == typeof a)
                    for (b = a.split(S), c = 0, d = this.length; d > c; c++)
                        if (e = this[c], 1 === e.nodeType)
                            if (e.className || 1 !== b.length) {
                                for (f = " " + e.className + " ", g = 0, h = b.length; h > g; g++) ~f.indexOf(" " + b[g] + " ") || (f += b[g] + " ");
                                e.className = J.trim(f) } else e.className = a;
                return this }, removeClass: function(a) {
                var c, d, e, f, g, h, i;
                if (J.isFunction(a)) return this.each(function(b) { J(this).removeClass(a.call(this, b, this.className)) });
                if (a && "string" == typeof a || a === b)
                    for (c = (a || "").split(S), d = 0, e = this.length; e > d; d++)
                        if (f = this[d], 1 === f.nodeType && f.className)
                            if (a) {
                                for (g = (" " + f.className + " ").replace(R, " "), h = 0, i = c.length; i > h; h++) g = g.replace(" " + c[h] + " ", " ");
                                f.className = J.trim(g) } else f.className = "";
                return this }, toggleClass: function(a, b) {
                var c = typeof a,
                    d = "boolean" == typeof b;
                return J.isFunction(a) ? this.each(function(c) { J(this).toggleClass(a.call(this, c, this.className, b), b) }) : this.each(function() {
                    if ("string" === c)
                        for (var e, f = 0, g = J(this), h = b, i = a.split(S); e = i[f++];) h = d ? h : !g.hasClass(e), g[h ? "addClass" : "removeClass"](e);
                    else("undefined" === c || "boolean" === c) && (this.className && J._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : J._data(this, "__className__") || "") }) }, hasClass: function(a) {
                for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                    if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(R, " ").indexOf(b) > -1) return !0;
                return !1 }, val: function(a) {
                var c, d, e, f = this[0];
                return arguments.length ? (e = J.isFunction(a), this.each(function(d) {
                    var f, g = J(this);
                    1 === this.nodeType && (f = e ? a.call(this, d, g.val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : J.isArray(f) && (f = J.map(f, function(a) {
                        return null == a ? "" : a + "" })), c = J.valHooks[this.type] || J.valHooks[this.nodeName.toLowerCase()], c && "set" in c && c.set(this, f, "value") !== b || (this.value = f)) })) : f ? (c = J.valHooks[f.type] || J.valHooks[f.nodeName.toLowerCase()], c && "get" in c && (d = c.get(f, "value")) !== b ? d : (d = f.value, "string" == typeof d ? d.replace(T, "") : null == d ? "" : d)) : void 0 } }), J.extend({ valHooks: { option: { get: function(a) {
                        var b = a.attributes.value;
                        return !b || b.specified ? a.value : a.text } }, select: { get: function(a) {
                        var b, c, d, e, f = a.selectedIndex,
                            g = [],
                            h = a.options,
                            i = "select-one" === a.type;
                        if (0 > f) return null;
                        for (c = i ? f : 0, d = i ? f + 1 : h.length; d > c; c++)
                            if (e = h[c], e.selected && (J.support.optDisabled ? !e.disabled : null === e.getAttribute("disabled")) && (!e.parentNode.disabled || !J.nodeName(e.parentNode, "optgroup"))) {
                                if (b = J(e).val(), i) return b;
                                g.push(b) }
                        return i && !g.length && h.length ? J(h[f]).val() : g }, set: function(a, b) {
                        var c = J.makeArray(b);
                        return J(a).find("option").each(function() { this.selected = J.inArray(J(this).val(), c) >= 0 }), c.length || (a.selectedIndex = -1), c } } }, attrFn: { val: !0, css: !0, html: !0, text: !0, data: !0, width: !0, height: !0, offset: !0 }, attr: function(a, c, d, e) {
                var f, g, h, i = a.nodeType;
                return a && 3 !== i && 8 !== i && 2 !== i ? e && c in J.attrFn ? J(a)[c](d) : "undefined" == typeof a.getAttribute ? J.prop(a, c, d) : (h = 1 !== i || !J.isXMLDoc(a), h && (c = c.toLowerCase(), g = J.attrHooks[c] || (X.test(c) ? P : O)), d !== b ? null === d ? void J.removeAttr(a, c) : g && "set" in g && h && (f = g.set(a, d, c)) !== b ? f : (a.setAttribute(c, "" + d), d) : g && "get" in g && h && null !== (f = g.get(a, c)) ? f : (f = a.getAttribute(c), null === f ? b : f)) : void 0 }, removeAttr: function(a, b) {
                var c, d, e, f, g, h = 0;
                if (b && 1 === a.nodeType)
                    for (d = b.toLowerCase().split(S), f = d.length; f > h; h++) e = d[h], e && (c = J.propFix[e] || e, g = X.test(e), g || J.attr(a, e, ""), a.removeAttribute(Y ? e : c), g && c in a && (a[c] = !1)) }, attrHooks: { type: { set: function(a, b) {
                        if (U.test(a.nodeName) && a.parentNode) J.error("type property can't be changed");
                        else if (!J.support.radioValue && "radio" === b && J.nodeName(a, "input")) {
                            var c = a.value;
                            return a.setAttribute("type", b), c && (a.value = c), b } } }, value: { get: function(a, b) {
                        return O && J.nodeName(a, "button") ? O.get(a, b) : b in a ? a.value : null }, set: function(a, b, c) {
                        return O && J.nodeName(a, "button") ? O.set(a, b, c) : void(a.value = b) } } }, propFix: { tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable" }, prop: function(a, c, d) {
                var e, f, g, h = a.nodeType;
                return a && 3 !== h && 8 !== h && 2 !== h ? (g = 1 !== h || !J.isXMLDoc(a), g && (c = J.propFix[c] || c, f = J.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && null !== (e = f.get(a, c)) ? e : a[c]) : void 0 }, propHooks: { tabIndex: { get: function(a) {
                        var c = a.getAttributeNode("tabindex");
                        return c && c.specified ? parseInt(c.value, 10) : V.test(a.nodeName) || W.test(a.nodeName) && a.href ? 0 : b } } } }), J.attrHooks.tabindex = J.propHooks.tabIndex, P = { get: function(a, c) {
                var d, e = J.prop(a, c);
                return e === !0 || "boolean" != typeof e && (d = a.getAttributeNode(c)) && d.nodeValue !== !1 ? c.toLowerCase() : b }, set: function(a, b, c) {
                var d;
                return b === !1 ? J.removeAttr(a, c) : (d = J.propFix[c] || c, d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())), c } }, Y || (Q = { name: !0, id: !0, coords: !0 }, O = J.valHooks.button = { get: function(a, c) {
                var d;
                return d = a.getAttributeNode(c), d && (Q[c] ? "" !== d.nodeValue : d.specified) ? d.nodeValue : b }, set: function(a, b, c) {
                var d = a.getAttributeNode(c);
                return d || (d = G.createAttribute(c), a.setAttributeNode(d)), d.nodeValue = b + "" } }, J.attrHooks.tabindex.set = O.set, J.each(["width", "height"], function(a, b) { J.attrHooks[b] = J.extend(J.attrHooks[b], { set: function(a, c) {
                    return "" === c ? (a.setAttribute(b, "auto"), c) : void 0 } }) }), J.attrHooks.contenteditable = { get: O.get, set: function(a, b, c) { "" === b && (b = "false"), O.set(a, b, c) } }), J.support.hrefNormalized || J.each(["href", "src", "width", "height"], function(a, c) { J.attrHooks[c] = J.extend(J.attrHooks[c], { get: function(a) {
                    var d = a.getAttribute(c, 2);
                    return null === d ? b : d } }) }), J.support.style || (J.attrHooks.style = { get: function(a) {
                return a.style.cssText.toLowerCase() || b }, set: function(a, b) {
                return a.style.cssText = "" + b } }), J.support.optSelected || (J.propHooks.selected = J.extend(J.propHooks.selected, { get: function(a) {
                var b = a.parentNode;
                return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null } })), J.support.enctype || (J.propFix.enctype = "encoding"), J.support.checkOn || J.each(["radio", "checkbox"], function() { J.valHooks[this] = { get: function(a) {
                    return null === a.getAttribute("value") ? "on" : a.value } } }), J.each(["radio", "checkbox"], function() {
            J.valHooks[this] = J.extend(J.valHooks[this], {
                set: function(a, b) {
                    return J.isArray(b) ? a.checked = J.inArray(J(a).val(), b) >= 0 : void 0;
                }
            })
        });
        var Z = /^(?:textarea|input|select)$/i,
            $ = /^([^\.]*)?(?:\.(.+))?$/,
            _ = /(?:^|\s)hover(\.\S+)?\b/,
            aa = /^key/,
            ba = /^(?:mouse|contextmenu)|click/,
            ca = /^(?:focusinfocus|focusoutblur)$/,
            da = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
            ea = function(a) {
                var b = da.exec(a);
                return b && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp("(?:^|\\s)" + b[3] + "(?:\\s|$)")), b },
            fa = function(a, b) {
                var c = a.attributes || {};
                return (!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] || (c.id || {}).value === b[2]) && (!b[3] || b[3].test((c["class"] || {}).value)) },
            ga = function(a) {
                return J.event.special.hover ? a : a.replace(_, "mouseenter$1 mouseleave$1") };
        J.event = { add: function(a, c, d, e, f) {
                    var g, h, i, j, k, l, m, n, o, p, q;
                    if (3 !== a.nodeType && 8 !== a.nodeType && c && d && (g = J._data(a))) {
                        for (d.handler && (o = d, d = o.handler, f = o.selector), d.guid || (d.guid = J.guid++), i = g.events, i || (g.events = i = {}), h = g.handle, h || (g.handle = h = function(a) {
                                return "undefined" == typeof J || a && J.event.triggered === a.type ? b : J.event.dispatch.apply(h.elem, arguments) }, h.elem = a), c = J.trim(ga(c)).split(" "), j = 0; j < c.length; j++) k = $.exec(c[j]) || [], l = k[1], m = (k[2] || "").split(".").sort(), q = J.event.special[l] || {}, l = (f ? q.delegateType : q.bindType) || l, q = J.event.special[l] || {}, n = J.extend({ type: l, origType: k[1], data: e, handler: d, guid: d.guid, selector: f, quick: f && ea(f), namespace: m.join(".") }, o), p = i[l], p || (p = i[l] = [], p.delegateCount = 0, q.setup && q.setup.call(a, e, m, h) !== !1 || (a.addEventListener ? a.addEventListener(l, h, !1) : a.attachEvent && a.attachEvent("on" + l, h))), q.add && (q.add.call(a, n), n.handler.guid || (n.handler.guid = d.guid)), f ? p.splice(p.delegateCount++, 0, n) : p.push(n), J.event.global[l] = !0;
                        a = null } }, global: {}, remove: function(a, b, c, d, e) {
                    var f, g, h, i, j, k, l, m, n, o, p, q, r = J.hasData(a) && J._data(a);
                    if (r && (m = r.events)) {
                        for (b = J.trim(ga(b || "")).split(" "), f = 0; f < b.length; f++)
                            if (g = $.exec(b[f]) || [], h = i = g[1], j = g[2], h) {
                                for (n = J.event.special[h] || {}, h = (d ? n.delegateType : n.bindType) || h, p = m[h] || [], k = p.length, j = j ? new RegExp("(^|\\.)" + j.split(".").sort().join("\\.(?:.*\\.)?") + "(\\.|$)") : null, l = 0; l < p.length; l++) q = p[l], (e || i === q.origType) && (!c || c.guid === q.guid) && (!j || j.test(q.namespace)) && (!d || d === q.selector || "**" === d && q.selector) && (p.splice(l--, 1), q.selector && p.delegateCount--, n.remove && n.remove.call(a, q));
                                0 === p.length && k !== p.length && ((!n.teardown || n.teardown.call(a, j) === !1) && J.removeEvent(a, h, r.handle), delete m[h]) } else
                                for (h in m) J.event.remove(a, h + b[f], c, d, !0);
                        J.isEmptyObject(m) && (o = r.handle, o && (o.elem = null), J.removeData(a, ["events", "handle"], !0)) } }, customEvent: { getData: !0, setData: !0, changeData: !0 }, trigger: function(c, d, e, f) {
                    if (!e || 3 !== e.nodeType && 8 !== e.nodeType) {
                        var g, h, i, j, k, l, m, n, o, p, q = c.type || c,
                            r = [];
                        if (ca.test(q + J.event.triggered)) return;
                        if (q.indexOf("!") >= 0 && (q = q.slice(0, -1), h = !0), q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), (!e || J.event.customEvent[q]) && !J.event.global[q]) return;
                        if (c = "object" == typeof c ? c[J.expando] ? c : new J.Event(q, c) : new J.Event(q), c.type = q, c.isTrigger = !0, c.exclusive = h, c.namespace = r.join("."), c.namespace_re = c.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.)?") + "(\\.|$)") : null, l = q.indexOf(":") < 0 ? "on" + q : "", !e) { g = J.cache;
                            for (i in g) g[i].events && g[i].events[q] && J.event.trigger(c, d, g[i].handle.elem, !0);
                            return }
                        if (c.result = b, c.target || (c.target = e), d = null != d ? J.makeArray(d) : [], d.unshift(c), m = J.event.special[q] || {}, m.trigger && m.trigger.apply(e, d) === !1) return;
                        if (o = [
                                [e, m.bindType || q]
                            ], !f && !m.noBubble && !J.isWindow(e)) {
                            for (p = m.delegateType || q, j = ca.test(p + q) ? e : e.parentNode, k = null; j; j = j.parentNode) o.push([j, p]), k = j;
                            k && k === e.ownerDocument && o.push([k.defaultView || k.parentWindow || a, p]) }
                        for (i = 0; i < o.length && !c.isPropagationStopped(); i++) j = o[i][0], c.type = o[i][1], n = (J._data(j, "events") || {})[c.type] && J._data(j, "handle"), n && n.apply(j, d), n = l && j[l], n && J.acceptData(j) && n.apply(j, d) === !1 && c.preventDefault();
                        return c.type = q, !f && !c.isDefaultPrevented() && (!m._default || m._default.apply(e.ownerDocument, d) === !1) && ("click" !== q || !J.nodeName(e, "a")) && J.acceptData(e) && l && e[q] && ("focus" !== q && "blur" !== q || 0 !== c.target.offsetWidth) && !J.isWindow(e) && (k = e[l], k && (e[l] = null), J.event.triggered = q, e[q](), J.event.triggered = b, k && (e[l] = k)), c.result } }, dispatch: function(c) { c = J.event.fix(c || a.event);
                    var d, e, f, g, h, i, j, k, l, m, n = (J._data(this, "events") || {})[c.type] || [],
                        o = n.delegateCount,
                        p = [].slice.call(arguments, 0),
                        q = !c.exclusive && !c.namespace,
                        r = J.event.special[c.type] || {},
                        s = [];
                    if (p[0] = c, c.delegateTarget = this, !r.preDispatch || r.preDispatch.call(this, c) !== !1) {
                        if (o && (!c.button || "click" !== c.type))
                            for (g = J(this), g.context = this.ownerDocument || this, f = c.target; f != this; f = f.parentNode || this)
                                if (f.disabled !== !0) {
                                    for (i = {}, k = [], g[0] = f, d = 0; o > d; d++) l = n[d], m = l.selector, i[m] === b && (i[m] = l.quick ? fa(f, l.quick) : g.is(m)), i[m] && k.push(l);
                                    k.length && s.push({ elem: f, matches: k }) }
                        for (n.length > o && s.push({ elem: this, matches: n.slice(o) }), d = 0; d < s.length && !c.isPropagationStopped(); d++)
                            for (j = s[d], c.currentTarget = j.elem, e = 0; e < j.matches.length && !c.isImmediatePropagationStopped(); e++) l = j.matches[e], (q || !c.namespace && !l.namespace || c.namespace_re && c.namespace_re.test(l.namespace)) && (c.data = l.data, c.handleObj = l, h = ((J.event.special[l.origType] || {}).handle || l.handler).apply(j.elem, p), h !== b && (c.result = h, h === !1 && (c.preventDefault(), c.stopPropagation())));
                        return r.postDispatch && r.postDispatch.call(this, c), c.result } }, props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(a, b) {
                        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(a, c) {
                        var d, e, f, g = c.button,
                            h = c.fromElement;
                        return null == a.pageX && null != c.clientX && (d = a.target.ownerDocument || G, e = d.documentElement, f = d.body, a.pageX = c.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), a.pageY = c.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? c.toElement : h), !a.which && g !== b && (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a } }, fix: function(a) {
                    if (a[J.expando]) return a;
                    var c, d, e = a,
                        f = J.event.fixHooks[a.type] || {},
                        g = f.props ? this.props.concat(f.props) : this.props;
                    for (a = J.Event(e), c = g.length; c;) d = g[--c], a[d] = e[d];
                    return a.target || (a.target = e.srcElement || G), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey === b && (a.metaKey = a.ctrlKey), f.filter ? f.filter(a, e) : a }, special: { ready: { setup: J.bindReady }, load: { noBubble: !0 }, focus: { delegateType: "focusin" }, blur: { delegateType: "focusout" }, beforeunload: { setup: function(a, b, c) { J.isWindow(this) && (this.onbeforeunload = c) }, teardown: function(a, b) { this.onbeforeunload === b && (this.onbeforeunload = null) } } }, simulate: function(a, b, c, d) {
                    var e = J.extend(new J.Event, c, { type: a, isSimulated: !0, originalEvent: {} });
                    d ? J.event.trigger(e, null, b) : J.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault() } }, J.event.handle = J.event.dispatch, J.removeEvent = G.removeEventListener ? function(a, b, c) { a.removeEventListener && a.removeEventListener(b, c, !1) } : function(a, b, c) { a.detachEvent && a.detachEvent("on" + b, c) }, J.Event = function(a, b) {
                return this instanceof J.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? A : B) : this.type = a, b && J.extend(this, b), this.timeStamp = a && a.timeStamp || J.now(), this[J.expando] = !0, void 0) : new J.Event(a, b) }, J.Event.prototype = { preventDefault: function() { this.isDefaultPrevented = A;
                    var a = this.originalEvent;!a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1) }, stopPropagation: function() { this.isPropagationStopped = A;
                    var a = this.originalEvent;!a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0) }, stopImmediatePropagation: function() { this.isImmediatePropagationStopped = A, this.stopPropagation() }, isDefaultPrevented: B, isPropagationStopped: B, isImmediatePropagationStopped: B }, J.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function(a, b) { J.event.special[a] = { delegateType: b, bindType: b, handle: function(a) {
                        var c, d = this,
                            e = a.relatedTarget,
                            f = a.handleObj;
                        f.selector;
                        return (!e || e !== d && !J.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c } } }), J.support.submitBubbles || (J.event.special.submit = { setup: function() {
                    return J.nodeName(this, "form") ? !1 : void J.event.add(this, "click._submit keypress._submit", function(a) {
                        var c = a.target,
                            d = J.nodeName(c, "input") || J.nodeName(c, "button") ? c.form : b;
                        d && !d._submit_attached && (J.event.add(d, "submit._submit", function(a) { a._submit_bubble = !0 }), d._submit_attached = !0) }) }, postDispatch: function(a) { a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && J.event.simulate("submit", this.parentNode, a, !0)) }, teardown: function() {
                    return J.nodeName(this, "form") ? !1 : void J.event.remove(this, "._submit") } }), J.support.changeBubbles || (J.event.special.change = { setup: function() {
                    return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (J.event.add(this, "propertychange._change", function(a) { "checked" === a.originalEvent.propertyName && (this._just_changed = !0) }), J.event.add(this, "click._change", function(a) { this._just_changed && !a.isTrigger && (this._just_changed = !1, J.event.simulate("change", this, a, !0)) })), !1) : void J.event.add(this, "beforeactivate._change", function(a) {
                        var b = a.target;
                        Z.test(b.nodeName) && !b._change_attached && (J.event.add(b, "change._change", function(a) { this.parentNode && !a.isSimulated && !a.isTrigger && J.event.simulate("change", this.parentNode, a, !0) }), b._change_attached = !0) }) }, handle: function(a) {
                    var b = a.target;
                    return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0 }, teardown: function() {
                    return J.event.remove(this, "._change"), Z.test(this.nodeName) } }), J.support.focusinBubbles || J.each({ focus: "focusin", blur: "focusout" }, function(a, b) {
                var c = 0,
                    d = function(a) { J.event.simulate(b, a.target, J.event.fix(a), !0) };
                J.event.special[b] = { setup: function() { 0 === c++ && G.addEventListener(a, d, !0) }, teardown: function() { 0 === --c && G.removeEventListener(a, d, !0) } } }), J.fn.extend({ on: function(a, c, d, e, f) {
                    var g, h;
                    if ("object" == typeof a) { "string" != typeof c && (d = d || c, c = b);
                        for (h in a) this.on(h, c, d, a[h], f);
                        return this }
                    if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, d = b) : (e = d, d = c, c = b)), e === !1) e = B;
                    else if (!e) return this;
                    return 1 === f && (g = e, e = function(a) {
                        return J().off(a), g.apply(this, arguments) }, e.guid = g.guid || (g.guid = J.guid++)), this.each(function() { J.event.add(this, a, e, d, c) }) }, one: function(a, b, c, d) {
                    return this.on(a, b, c, d, 1) }, off: function(a, c, d) {
                    if (a && a.preventDefault && a.handleObj) {
                        var e = a.handleObj;
                        return J(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), this }
                    if ("object" == typeof a) {
                        for (var f in a) this.off(f, c, a[f]);
                        return this }
                    return (c === !1 || "function" == typeof c) && (d = c, c = b), d === !1 && (d = B), this.each(function() { J.event.remove(this, a, d, c) }) }, bind: function(a, b, c) {
                    return this.on(a, null, b, c) }, unbind: function(a, b) {
                    return this.off(a, null, b) }, live: function(a, b, c) {
                    return J(this.context).on(a, this.selector, b, c), this }, die: function(a, b) {
                    return J(this.context).off(a, this.selector || "**", b), this }, delegate: function(a, b, c, d) {
                    return this.on(b, a, c, d) }, undelegate: function(a, b, c) {
                    return 1 == arguments.length ? this.off(a, "**") : this.off(b, a, c) }, trigger: function(a, b) {
                    return this.each(function() { J.event.trigger(a, b, this) }) }, triggerHandler: function(a, b) {
                    return this[0] ? J.event.trigger(a, b, this[0], !0) : void 0 }, toggle: function(a) {
                    var b = arguments,
                        c = a.guid || J.guid++,
                        d = 0,
                        e = function(c) {
                            var e = (J._data(this, "lastToggle" + a.guid) || 0) % d;
                            return J._data(this, "lastToggle" + a.guid, e + 1), c.preventDefault(), b[e].apply(this, arguments) || !1 };
                    for (e.guid = c; d < b.length;) b[d++].guid = c;
                    return this.click(e) }, hover: function(a, b) {
                    return this.mouseenter(a).mouseleave(b || a) } }), J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) { J.fn[b] = function(a, c) {
                    return null == c && (c = a, a = null), arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) }, J.attrFn && (J.attrFn[b] = !0), aa.test(b) && (J.event.fixHooks[b] = J.event.keyHooks), ba.test(b) && (J.event.fixHooks[b] = J.event.mouseHooks) }),
            function() {
                function a(a, b, c, d, f, g) {
                    for (var h = 0, i = d.length; i > h; h++) {
                        var j = d[h];
                        if (j) {
                            var k = !1;
                            for (j = j[a]; j;) {
                                if (j[e] === c) { k = d[j.sizset];
                                    break }
                                if (1 === j.nodeType)
                                    if (g || (j[e] = c, j.sizset = h), "string" != typeof b) {
                                        if (j === b) { k = !0;
                                            break } } else if (m.filter(b, [j]).length > 0) { k = j;
                                    break }
                                j = j[a] }
                            d[h] = k } } }

                function c(a, b, c, d, f, g) {
                    for (var h = 0, i = d.length; i > h; h++) {
                        var j = d[h];
                        if (j) {
                            var k = !1;
                            for (j = j[a]; j;) {
                                if (j[e] === c) { k = d[j.sizset];
                                    break }
                                if (1 === j.nodeType && !g && (j[e] = c, j.sizset = h), j.nodeName.toLowerCase() === b) { k = j;
                                    break }
                                j = j[a] }
                            d[h] = k } } }
                var d = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
                    e = "sizcache" + (Math.random() + "").replace(".", ""),
                    f = 0,
                    g = Object.prototype.toString,
                    h = !1,
                    i = !0,
                    j = /\\/g,
                    k = /\r\n/g,
                    l = /\W/;
                [0, 0].sort(function() {
                    return i = !1, 0 });
                var m = function(a, b, c, e) { c = c || [], b = b || G;
                    var f = b;
                    if (1 !== b.nodeType && 9 !== b.nodeType) return [];
                    if (!a || "string" != typeof a) return c;
                    var h, i, j, k, l, n, q, r, t = !0,
                        u = m.isXML(b),
                        v = [],
                        x = a;
                    do
                        if (d.exec(""), h = d.exec(x), h && (x = h[3], v.push(h[1]), h[2])) { k = h[3];
                            break }
                    while (h);
                    if (v.length > 1 && p.exec(a))
                        if (2 === v.length && o.relative[v[0]]) i = w(v[0] + v[1], b, e);
                        else
                            for (i = o.relative[v[0]] ? [b] : m(v.shift(), b); v.length;) a = v.shift(), o.relative[a] && (a += v.shift()), i = w(a, i, e);
                    else if (!e && v.length > 1 && 9 === b.nodeType && !u && o.match.ID.test(v[0]) && !o.match.ID.test(v[v.length - 1]) && (l = m.find(v.shift(), b, u), b = l.expr ? m.filter(l.expr, l.set)[0] : l.set[0]), b)
                        for (l = e ? { expr: v.pop(), set: s(e) } : m.find(v.pop(), 1 !== v.length || "~" !== v[0] && "+" !== v[0] || !b.parentNode ? b : b.parentNode, u), i = l.expr ? m.filter(l.expr, l.set) : l.set, v.length > 0 ? j = s(i) : t = !1; v.length;) n = v.pop(), q = n, o.relative[n] ? q = v.pop() : n = "", null == q && (q = b), o.relative[n](j, q, u);
                    else j = v = [];
                    if (j || (j = i), j || m.error(n || a), "[object Array]" === g.call(j))
                        if (t)
                            if (b && 1 === b.nodeType)
                                for (r = 0; null != j[r]; r++) j[r] && (j[r] === !0 || 1 === j[r].nodeType && m.contains(b, j[r])) && c.push(i[r]);
                            else
                                for (r = 0; null != j[r]; r++) j[r] && 1 === j[r].nodeType && c.push(i[r]);
                    else c.push.apply(c, j);
                    else s(j, c);
                    return k && (m(k, f, c, e), m.uniqueSort(c)), c };
                m.uniqueSort = function(a) {
                    if (u && (h = i, a.sort(u), h))
                        for (var b = 1; b < a.length; b++) a[b] === a[b - 1] && a.splice(b--, 1);
                    return a }, m.matches = function(a, b) {
                    return m(a, null, null, b) }, m.matchesSelector = function(a, b) {
                    return m(b, null, null, [a]).length > 0 }, m.find = function(a, b, c) {
                    var d, e, f, g, h, i;
                    if (!a) return [];
                    for (e = 0, f = o.order.length; f > e; e++)
                        if (h = o.order[e], (g = o.leftMatch[h].exec(a)) && (i = g[1], g.splice(1, 1), "\\" !== i.substr(i.length - 1) && (g[1] = (g[1] || "").replace(j, ""), d = o.find[h](g, b, c), null != d))) { a = a.replace(o.match[h], "");
                            break }
                    return d || (d = "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName("*") : []), { set: d, expr: a } }, m.filter = function(a, c, d, e) {
                    for (var f, g, h, i, j, k, l, n, p, q = a, r = [], s = c, t = c && c[0] && m.isXML(c[0]); a && c.length;) {
                        for (h in o.filter)
                            if (null != (f = o.leftMatch[h].exec(a)) && f[2]) {
                                if (k = o.filter[h], l = f[1], g = !1, f.splice(1, 1), "\\" === l.substr(l.length - 1)) continue;
                                if (s === r && (r = []), o.preFilter[h])
                                    if (f = o.preFilter[h](f, s, d, r, e, t)) {
                                        if (f === !0) continue } else g = i = !0;
                                if (f)
                                    for (n = 0; null != (j = s[n]); n++) j && (i = k(j, f, n, s), p = e ^ i, d && null != i ? p ? g = !0 : s[n] = !1 : p && (r.push(j), g = !0));
                                if (i !== b) {
                                    if (d || (s = r), a = a.replace(o.match[h], ""), !g) return [];
                                    break } }
                        if (a === q) {
                            if (null != g) break;
                            m.error(a) }
                        q = a }
                    return s }, m.error = function(a) {
                    throw new Error("Syntax error, unrecognized expression: " + a) };
                var n = m.getText = function(a) {
                        var b, c, d = a.nodeType,
                            e = "";
                        if (d) {
                            if (1 === d || 9 === d || 11 === d) {
                                if ("string" == typeof a.textContent) return a.textContent;
                                if ("string" == typeof a.innerText) return a.innerText.replace(k, "");
                                for (a = a.firstChild; a; a = a.nextSibling) e += n(a) } else if (3 === d || 4 === d) return a.nodeValue } else
                            for (b = 0; c = a[b]; b++) 8 !== c.nodeType && (e += n(c));
                        return e },
                    o = m.selectors = { order: ["ID", "NAME", "TAG"], match: { ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/, NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/, ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/, TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/, CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/, POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/, PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/ }, leftMatch: {}, attrMap: { "class": "className", "for": "htmlFor" }, attrHandle: { href: function(a) {
                                return a.getAttribute("href") }, type: function(a) {
                                return a.getAttribute("type") } }, relative: { "+": function(a, b) {
                                var c = "string" == typeof b,
                                    d = c && !l.test(b),
                                    e = c && !d;
                                d && (b = b.toLowerCase());
                                for (var f, g = 0, h = a.length; h > g; g++)
                                    if (f = a[g]) {
                                        for (;
                                            (f = f.previousSibling) && 1 !== f.nodeType;);
                                        a[g] = e || f && f.nodeName.toLowerCase() === b ? f || !1 : f === b }
                                e && m.filter(b, a, !0) }, ">": function(a, b) {
                                var c, d = "string" == typeof b,
                                    e = 0,
                                    f = a.length;
                                if (d && !l.test(b)) {
                                    for (b = b.toLowerCase(); f > e; e++)
                                        if (c = a[e]) {
                                            var g = c.parentNode;
                                            a[e] = g.nodeName.toLowerCase() === b ? g : !1 } } else {
                                    for (; f > e; e++) c = a[e], c && (a[e] = d ? c.parentNode : c.parentNode === b);
                                    d && m.filter(b, a, !0) } }, "": function(b, d, e) {
                                var g, h = f++,
                                    i = a; "string" == typeof d && !l.test(d) && (d = d.toLowerCase(), g = d, i = c), i("parentNode", d, h, b, g, e) }, "~": function(b, d, e) {
                                var g, h = f++,
                                    i = a; "string" == typeof d && !l.test(d) && (d = d.toLowerCase(), g = d, i = c), i("previousSibling", d, h, b, g, e) } }, find: { ID: function(a, b, c) {
                                if ("undefined" != typeof b.getElementById && !c) {
                                    var d = b.getElementById(a[1]);
                                    return d && d.parentNode ? [d] : [] } }, NAME: function(a, b) {
                                if ("undefined" != typeof b.getElementsByName) {
                                    for (var c = [], d = b.getElementsByName(a[1]), e = 0, f = d.length; f > e; e++) d[e].getAttribute("name") === a[1] && c.push(d[e]);
                                    return 0 === c.length ? null : c } }, TAG: function(a, b) {
                                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a[1]) : void 0 } }, preFilter: { CLASS: function(a, b, c, d, e, f) {
                                if (a = " " + a[1].replace(j, "") + " ", f) return a;
                                for (var g, h = 0; null != (g = b[h]); h++) g && (e ^ (g.className && (" " + g.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(g) : c && (b[h] = !1));
                                return !1 }, ID: function(a) {
                                return a[1].replace(j, "") }, TAG: function(a, b) {
                                return a[1].replace(j, "").toLowerCase() }, CHILD: function(a) {
                                if ("nth" === a[1]) { a[2] || m.error(a[0]), a[2] = a[2].replace(/^\+|\s*/g, "");
                                    var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even" === a[2] && "2n" || "odd" === a[2] && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                                    a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[3] - 0 } else a[2] && m.error(a[0]);
                                return a[0] = f++, a }, ATTR: function(a, b, c, d, e, f) {
                                var g = a[1] = a[1].replace(j, "");
                                return !f && o.attrMap[g] && (a[1] = o.attrMap[g]), a[4] = (a[4] || a[5] || "").replace(j, ""), "~=" === a[2] && (a[4] = " " + a[4] + " "), a }, PSEUDO: function(a, b, c, e, f) {
                                if ("not" === a[1]) {
                                    if (!((d.exec(a[3]) || "").length > 1 || /^\w/.test(a[3]))) {
                                        var g = m.filter(a[3], b, c, !0 ^ f);
                                        return c || e.push.apply(e, g), !1 }
                                    a[3] = m(a[3], null, null, b) } else if (o.match.POS.test(a[0]) || o.match.CHILD.test(a[0])) return !0;
                                return a }, POS: function(a) {
                                return a.unshift(!0), a } }, filters: { enabled: function(a) {
                                return a.disabled === !1 && "hidden" !== a.type }, disabled: function(a) {
                                return a.disabled === !0 }, checked: function(a) {
                                return a.checked === !0 }, selected: function(a) {
                                return a.parentNode && a.parentNode.selectedIndex, a.selected === !0 }, parent: function(a) {
                                return !!a.firstChild }, empty: function(a) {
                                return !a.firstChild }, has: function(a, b, c) {
                                return !!m(c[3], a).length }, header: function(a) {
                                return /h\d/i.test(a.nodeName) }, text: function(a) {
                                var b = a.getAttribute("type"),
                                    c = a.type;
                                return "input" === a.nodeName.toLowerCase() && "text" === c && (b === c || null === b) }, radio: function(a) {
                                return "input" === a.nodeName.toLowerCase() && "radio" === a.type }, checkbox: function(a) {
                                return "input" === a.nodeName.toLowerCase() && "checkbox" === a.type }, file: function(a) {
                                return "input" === a.nodeName.toLowerCase() && "file" === a.type }, password: function(a) {
                                return "input" === a.nodeName.toLowerCase() && "password" === a.type }, submit: function(a) {
                                var b = a.nodeName.toLowerCase();
                                return ("input" === b || "button" === b) && "submit" === a.type }, image: function(a) {
                                return "input" === a.nodeName.toLowerCase() && "image" === a.type }, reset: function(a) {
                                var b = a.nodeName.toLowerCase();
                                return ("input" === b || "button" === b) && "reset" === a.type }, button: function(a) {
                                var b = a.nodeName.toLowerCase();
                                return "input" === b && "button" === a.type || "button" === b }, input: function(a) {
                                return /input|select|textarea|button/i.test(a.nodeName) }, focus: function(a) {
                                return a === a.ownerDocument.activeElement } }, setFilters: { first: function(a, b) {
                                return 0 === b }, last: function(a, b, c, d) {
                                return b === d.length - 1 }, even: function(a, b) {
                                return b % 2 === 0 }, odd: function(a, b) {
                                return b % 2 === 1 }, lt: function(a, b, c) {
                                return b < c[3] - 0 }, gt: function(a, b, c) {
                                return b > c[3] - 0 }, nth: function(a, b, c) {
                                return c[3] - 0 === b }, eq: function(a, b, c) {
                                return c[3] - 0 === b } }, filter: { PSEUDO: function(a, b, c, d) {
                                var e = b[1],
                                    f = o.filters[e];
                                if (f) return f(a, c, b, d);
                                if ("contains" === e) return (a.textContent || a.innerText || n([a]) || "").indexOf(b[3]) >= 0;
                                if ("not" === e) {
                                    for (var g = b[3], h = 0, i = g.length; i > h; h++)
                                        if (g[h] === a) return !1;
                                    return !0 }
                                m.error(e) }, CHILD: function(a, b) {
                                var c, d, f, g, h, i, j = b[1],
                                    k = a;
                                switch (j) {
                                    case "only":
                                    case "first":
                                        for (; k = k.previousSibling;)
                                            if (1 === k.nodeType) return !1;
                                        if ("first" === j) return !0;
                                        k = a;
                                    case "last":
                                        for (; k = k.nextSibling;)
                                            if (1 === k.nodeType) return !1;
                                        return !0;
                                    case "nth":
                                        if (c = b[2], d = b[3], 1 === c && 0 === d) return !0;
                                        if (f = b[0], g = a.parentNode, g && (g[e] !== f || !a.nodeIndex)) {
                                            for (h = 0, k = g.firstChild; k; k = k.nextSibling) 1 === k.nodeType && (k.nodeIndex = ++h);
                                            g[e] = f }
                                        return i = a.nodeIndex - d, 0 === c ? 0 === i : i % c === 0 && i / c >= 0 } }, ID: function(a, b) {
                                return 1 === a.nodeType && a.getAttribute("id") === b }, TAG: function(a, b) {
                                return "*" === b && 1 === a.nodeType || !!a.nodeName && a.nodeName.toLowerCase() === b }, CLASS: function(a, b) {
                                return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1 }, ATTR: function(a, b) {
                                var c = b[1],
                                    d = m.attr ? m.attr(a, c) : o.attrHandle[c] ? o.attrHandle[c](a) : null != a[c] ? a[c] : a.getAttribute(c),
                                    e = d + "",
                                    f = b[2],
                                    g = b[4];
                                return null == d ? "!=" === f : !f && m.attr ? null != d : "=" === f ? e === g : "*=" === f ? e.indexOf(g) >= 0 : "~=" === f ? (" " + e + " ").indexOf(g) >= 0 : g ? "!=" === f ? e !== g : "^=" === f ? 0 === e.indexOf(g) : "$=" === f ? e.substr(e.length - g.length) === g : "|=" === f ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1 }, POS: function(a, b, c, d) {
                                var e = b[2],
                                    f = o.setFilters[e];
                                return f ? f(a, c, b, d) : void 0 } } },
                    p = o.match.POS,
                    q = function(a, b) {
                        return "\\" + (b - 0 + 1) };
                for (var r in o.match) o.match[r] = new RegExp(o.match[r].source + /(?![^\[]*\])(?![^\(]*\))/.source), o.leftMatch[r] = new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source.replace(/\\(\d+)/g, q));
                o.match.globalPOS = p;
                var s = function(a, b) {
                    return a = Array.prototype.slice.call(a, 0), b ? (b.push.apply(b, a), b) : a };
                try { Array.prototype.slice.call(G.documentElement.childNodes, 0)[0].nodeType } catch (t) { s = function(a, b) {
                        var c = 0,
                            d = b || [];
                        if ("[object Array]" === g.call(a)) Array.prototype.push.apply(d, a);
                        else if ("number" == typeof a.length)
                            for (var e = a.length; e > c; c++) d.push(a[c]);
                        else
                            for (; a[c]; c++) d.push(a[c]);
                        return d } }
                var u, v;
                G.documentElement.compareDocumentPosition ? u = function(a, b) {
                        return a === b ? (h = !0, 0) : a.compareDocumentPosition && b.compareDocumentPosition ? 4 & a.compareDocumentPosition(b) ? -1 : 1 : a.compareDocumentPosition ? -1 : 1 } : (u = function(a, b) {
                        if (a === b) return h = !0, 0;
                        if (a.sourceIndex && b.sourceIndex) return a.sourceIndex - b.sourceIndex;
                        var c, d, e = [],
                            f = [],
                            g = a.parentNode,
                            i = b.parentNode,
                            j = g;
                        if (g === i) return v(a, b);
                        if (!g) return -1;
                        if (!i) return 1;
                        for (; j;) e.unshift(j), j = j.parentNode;
                        for (j = i; j;) f.unshift(j), j = j.parentNode;
                        c = e.length, d = f.length;
                        for (var k = 0; c > k && d > k; k++)
                            if (e[k] !== f[k]) return v(e[k], f[k]);
                        return k === c ? v(a, f[k], -1) : v(e[k], b, 1) }, v = function(a, b, c) {
                        if (a === b) return c;
                        for (var d = a.nextSibling; d;) {
                            if (d === b) return -1;
                            d = d.nextSibling }
                        return 1 }),
                    function() {
                        var a = G.createElement("div"),
                            c = "script" + (new Date).getTime(),
                            d = G.documentElement;
                        a.innerHTML = "<a name='" + c + "'/>", d.insertBefore(a, d.firstChild), G.getElementById(c) && (o.find.ID = function(a, c, d) {
                            if ("undefined" != typeof c.getElementById && !d) {
                                var e = c.getElementById(a[1]);
                                return e ? e.id === a[1] || "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : [] } }, o.filter.ID = function(a, b) {
                            var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                            return 1 === a.nodeType && c && c.nodeValue === b }), d.removeChild(a), d = a = null }(),
                    function() {
                        var a = G.createElement("div");
                        a.appendChild(G.createComment("")), a.getElementsByTagName("*").length > 0 && (o.find.TAG = function(a, b) {
                            var c = b.getElementsByTagName(a[1]);
                            if ("*" === a[1]) {
                                for (var d = [], e = 0; c[e]; e++) 1 === c[e].nodeType && d.push(c[e]);
                                c = d }
                            return c }), a.innerHTML = "<a href='#'></a>", a.firstChild && "undefined" != typeof a.firstChild.getAttribute && "#" !== a.firstChild.getAttribute("href") && (o.attrHandle.href = function(a) {
                            return a.getAttribute("href", 2) }), a = null }(), G.querySelectorAll && function() {
                        var a = m,
                            b = G.createElement("div"),
                            c = "__sizzle__";
                        if (b.innerHTML = "<p class='TEST'></p>", !b.querySelectorAll || 0 !== b.querySelectorAll(".TEST").length) { m = function(b, d, e, f) {
                                if (d = d || G, !f && !m.isXML(d)) {
                                    var g = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                                    if (g && (1 === d.nodeType || 9 === d.nodeType)) {
                                        if (g[1]) return s(d.getElementsByTagName(b), e);
                                        if (g[2] && o.find.CLASS && d.getElementsByClassName) return s(d.getElementsByClassName(g[2]), e) }
                                    if (9 === d.nodeType) {
                                        if ("body" === b && d.body) return s([d.body], e);
                                        if (g && g[3]) {
                                            var h = d.getElementById(g[3]);
                                            if (!h || !h.parentNode) return s([], e);
                                            if (h.id === g[3]) return s([h], e) }
                                        try {
                                            return s(d.querySelectorAll(b), e) } catch (i) {} } else if (1 === d.nodeType && "object" !== d.nodeName.toLowerCase()) {
                                        var j = d,
                                            k = d.getAttribute("id"),
                                            l = k || c,
                                            n = d.parentNode,
                                            p = /^\s*[+~]/.test(b);
                                        k ? l = l.replace(/'/g, "\\$&") : d.setAttribute("id", l), p && n && (d = d.parentNode);
                                        try {
                                            if (!p || n) return s(d.querySelectorAll("[id='" + l + "'] " + b), e) } catch (q) {} finally { k || j.removeAttribute("id") } } }
                                return a(b, d, e, f) };
                            for (var d in a) m[d] = a[d];
                            b = null } }(),
                    function() {
                        var a = G.documentElement,
                            b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
                        if (b) {
                            var c = !b.call(G.createElement("div"), "div"),
                                d = !1;
                            try { b.call(G.documentElement, "[test!='']:sizzle") } catch (e) { d = !0 }
                            m.matchesSelector = function(a, e) {
                                if (e = e.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']"), !m.isXML(a)) try {
                                    if (d || !o.match.PSEUDO.test(e) && !/!=/.test(e)) {
                                        var f = b.call(a, e);
                                        if (f || !c || a.document && 11 !== a.document.nodeType) return f } } catch (g) {}
                                return m(e, null, null, [a]).length > 0 } } }(),
                    function() {
                        var a = G.createElement("div");
                        if (a.innerHTML = "<div class='test e'></div><div class='test'></div>", a.getElementsByClassName && 0 !== a.getElementsByClassName("e").length) {
                            if (a.lastChild.className = "e", 1 === a.getElementsByClassName("e").length) return;
                            o.order.splice(1, 0, "CLASS"), o.find.CLASS = function(a, b, c) {
                                return "undefined" == typeof b.getElementsByClassName || c ? void 0 : b.getElementsByClassName(a[1]) }, a = null } }(), G.documentElement.contains ? m.contains = function(a, b) {
                        return a !== b && (a.contains ? a.contains(b) : !0) } : G.documentElement.compareDocumentPosition ? m.contains = function(a, b) {
                        return !!(16 & a.compareDocumentPosition(b)) } : m.contains = function() {
                        return !1 }, m.isXML = function(a) {
                        var b = (a ? a.ownerDocument || a : 0).documentElement;
                        return b ? "HTML" !== b.nodeName : !1 };
                var w = function(a, b, c) {
                    for (var d, e = [], f = "", g = b.nodeType ? [b] : b; d = o.match.PSEUDO.exec(a);) f += d[0], a = a.replace(o.match.PSEUDO, "");
                    a = o.relative[a] ? a + "*" : a;
                    for (var h = 0, i = g.length; i > h; h++) m(a, g[h], e, c);
                    return m.filter(f, e) };
                m.attr = J.attr, m.selectors.attrMap = {}, J.find = m, J.expr = m.selectors, J.expr[":"] = J.expr.filters, J.unique = m.uniqueSort, J.text = m.getText, J.isXMLDoc = m.isXML, J.contains = m.contains }();
        var ha = /Until$/,
            ia = /^(?:parents|prevUntil|prevAll)/,
            ja = /,/,
            ka = /^.[^:#\[\.,]*$/,
            la = Array.prototype.slice,
            ma = J.expr.match.globalPOS,
            na = { children: !0, contents: !0, next: !0, prev: !0 };
        J.fn.extend({ find: function(a) {
                var b, c, d = this;
                if ("string" != typeof a) return J(a).filter(function() {
                    for (b = 0, c = d.length; c > b; b++)
                        if (J.contains(d[b], this)) return !0 });
                var e, f, g, h = this.pushStack("", "find", a);
                for (b = 0, c = this.length; c > b; b++)
                    if (e = h.length, J.find(a, this[b], h), b > 0)
                        for (f = e; f < h.length; f++)
                            for (g = 0; e > g; g++)
                                if (h[g] === h[f]) { h.splice(f--, 1);
                                    break }
                return h }, has: function(a) {
                var b = J(a);
                return this.filter(function() {
                    for (var a = 0, c = b.length; c > a; a++)
                        if (J.contains(this, b[a])) return !0 }) }, not: function(a) {
                return this.pushStack(y(this, a, !1), "not", a) }, filter: function(a) {
                return this.pushStack(y(this, a, !0), "filter", a) }, is: function(a) {
                return !!a && ("string" == typeof a ? ma.test(a) ? J(a, this.context).index(this[0]) >= 0 : J.filter(a, this).length > 0 : this.filter(a).length > 0) }, closest: function(a, b) {
                var c, d, e = [],
                    f = this[0];
                if (J.isArray(a)) {
                    for (var g = 1; f && f.ownerDocument && f !== b;) {
                        for (c = 0; c < a.length; c++) J(f).is(a[c]) && e.push({ selector: a[c], elem: f, level: g });
                        f = f.parentNode, g++ }
                    return e }
                var h = ma.test(a) || "string" != typeof a ? J(a, b || this.context) : 0;
                for (c = 0, d = this.length; d > c; c++)
                    for (f = this[c]; f;) {
                        if (h ? h.index(f) > -1 : J.find.matchesSelector(f, a)) { e.push(f);
                            break }
                        if (f = f.parentNode, !f || !f.ownerDocument || f === b || 11 === f.nodeType) break }
                return e = e.length > 1 ? J.unique(e) : e, this.pushStack(e, "closest", a) }, index: function(a) {
                return a ? "string" == typeof a ? J.inArray(this[0], J(a)) : J.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1 }, add: function(a, b) {
                var c = "string" == typeof a ? J(a, b) : J.makeArray(a && a.nodeType ? [a] : a),
                    d = J.merge(this.get(), c);
                return this.pushStack(z(c[0]) || z(d[0]) ? d : J.unique(d)) }, andSelf: function() {
                return this.add(this.prevObject) } }), J.each({ parent: function(a) {
                var b = a.parentNode;
                return b && 11 !== b.nodeType ? b : null }, parents: function(a) {
                return J.dir(a, "parentNode") }, parentsUntil: function(a, b, c) {
                return J.dir(a, "parentNode", c) }, next: function(a) {
                return J.nth(a, 2, "nextSibling") }, prev: function(a) {
                return J.nth(a, 2, "previousSibling") }, nextAll: function(a) {
                return J.dir(a, "nextSibling") }, prevAll: function(a) {
                return J.dir(a, "previousSibling") }, nextUntil: function(a, b, c) {
                return J.dir(a, "nextSibling", c) }, prevUntil: function(a, b, c) {
                return J.dir(a, "previousSibling", c) }, siblings: function(a) {
                return J.sibling((a.parentNode || {}).firstChild, a) }, children: function(a) {
                return J.sibling(a.firstChild) }, contents: function(a) {
                return J.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : J.makeArray(a.childNodes) } }, function(a, b) { J.fn[a] = function(c, d) {
                var e = J.map(this, b, c);
                return ha.test(a) || (d = c), d && "string" == typeof d && (e = J.filter(d, e)), e = this.length > 1 && !na[a] ? J.unique(e) : e, (this.length > 1 || ja.test(d)) && ia.test(a) && (e = e.reverse()), this.pushStack(e, a, la.call(arguments).join(",")) } }), J.extend({ filter: function(a, b, c) {
                return c && (a = ":not(" + a + ")"), 1 === b.length ? J.find.matchesSelector(b[0], a) ? [b[0]] : [] : J.find.matches(a, b) }, dir: function(a, c, d) {
                for (var e = [], f = a[c]; f && 9 !== f.nodeType && (d === b || 1 !== f.nodeType || !J(f).is(d));) 1 === f.nodeType && e.push(f), f = f[c];
                return e }, nth: function(a, b, c, d) { b = b || 1;
                for (var e = 0; a && (1 !== a.nodeType || ++e !== b); a = a[c]);
                return a }, sibling: function(a, b) {
                for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
                return c } });
        var oa = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            pa = / jQuery\d+="(?:\d+|null)"/g,
            qa = /^\s+/,
            ra = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            sa = /<([\w:]+)/,
            ta = /<tbody/i,
            ua = /<|&#?\w+;/,
            va = /<(?:script|style)/i,
            wa = /<(?:script|object|embed|option|style)/i,
            xa = new RegExp("<(?:" + oa + ")[\\s/>]", "i"),
            ya = /checked\s*(?:[^=]|=\s*.checked.)/i,
            za = /\/(java|ecma)script/i,
            Aa = /^\s*<!(?:\[CDATA\[|\-\-)/,
            Ba = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], area: [1, "<map>", "</map>"], _default: [0, "", ""] },
            Ca = x(G);
        Ba.optgroup = Ba.option, Ba.tbody = Ba.tfoot = Ba.colgroup = Ba.caption = Ba.thead, Ba.th = Ba.td, J.support.htmlSerialize || (Ba._default = [1, "div<div>", "</div>"]), J.fn.extend({
            text: function(a) {
                return J.access(this, function(a) {
                    return a === b ? J.text(this) : this.empty().append((this[0] && this[0].ownerDocument || G).createTextNode(a)) }, null, a, arguments.length) },
            wrapAll: function(a) {
                if (J.isFunction(a)) return this.each(function(b) { J(this).wrapAll(a.call(this, b)) });
                if (this[0]) {
                    var b = J(a, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                        for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
                        return a
                    }).append(this)
                }
                return this
            },
            wrapInner: function(a) {
                return J.isFunction(a) ? this.each(function(b) { J(this).wrapInner(a.call(this, b)) }) : this.each(function() {
                    var b = J(this),
                        c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a) }) },
            wrap: function(a) {
                var b = J.isFunction(a);
                return this.each(function(c) { J(this).wrapAll(b ? a.call(this, c) : a) }) },
            unwrap: function() {
                return this.parent().each(function() { J.nodeName(this, "body") || J(this).replaceWith(this.childNodes) }).end() },
            append: function() {
                return this.domManip(arguments, !0, function(a) { 1 === this.nodeType && this.appendChild(a) }) },
            prepend: function() {
                return this.domManip(arguments, !0, function(a) { 1 === this.nodeType && this.insertBefore(a, this.firstChild) }) },
            before: function() {
                if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) { this.parentNode.insertBefore(a, this) });
                if (arguments.length) {
                    var a = J.clean(arguments);
                    return a.push.apply(a, this.toArray()), this.pushStack(a, "before", arguments) } },
            after: function() {
                if (this[0] && this[0].parentNode) return this.domManip(arguments, !1, function(a) { this.parentNode.insertBefore(a, this.nextSibling) });
                if (arguments.length) {
                    var a = this.pushStack(this, "after", arguments);
                    return a.push.apply(a, J.clean(arguments)), a } },
            remove: function(a, b) {
                for (var c, d = 0; null != (c = this[d]); d++)(!a || J.filter(a, [c]).length) && (!b && 1 === c.nodeType && (J.cleanData(c.getElementsByTagName("*")), J.cleanData([c])), c.parentNode && c.parentNode.removeChild(c));
                return this },
            empty: function() {
                for (var a, b = 0; null != (a = this[b]); b++)
                    for (1 === a.nodeType && J.cleanData(a.getElementsByTagName("*")); a.firstChild;) a.removeChild(a.firstChild);
                return this },
            clone: function(a, b) {
                return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                    return J.clone(this, a, b) }) },
            html: function(a) {
                return J.access(this, function(a) {
                    var c = this[0] || {},
                        d = 0,
                        e = this.length;
                    if (a === b) return 1 === c.nodeType ? c.innerHTML.replace(pa, "") : null;
                    if ("string" == typeof a && !va.test(a) && (J.support.leadingWhitespace || !qa.test(a)) && !Ba[(sa.exec(a) || ["", ""])[1].toLowerCase()]) { a = a.replace(ra, "<$1></$2>");
                        try {
                            for (; e > d; d++) c = this[d] || {}, 1 === c.nodeType && (J.cleanData(c.getElementsByTagName("*")), c.innerHTML = a);
                            c = 0 } catch (f) {} }
                    c && this.empty().append(a) }, null, a, arguments.length) },
            replaceWith: function(a) {
                return this[0] && this[0].parentNode ? J.isFunction(a) ? this.each(function(b) {
                    var c = J(this),
                        d = c.html();
                    c.replaceWith(a.call(this, b, d)) }) : ("string" != typeof a && (a = J(a).detach()), this.each(function() {
                    var b = this.nextSibling,
                        c = this.parentNode;
                    J(this).remove(), b ? J(b).before(a) : J(c).append(a) })) : this.length ? this.pushStack(J(J.isFunction(a) ? a() : a), "replaceWith", a) : this },
            detach: function(a) {
                return this.remove(a, !0) },
            domManip: function(a, c, d) {
                var e, f, g, h, i = a[0],
                    j = [];
                if (!J.support.checkClone && 3 === arguments.length && "string" == typeof i && ya.test(i)) return this.each(function() { J(this).domManip(a, c, d, !0) });
                if (J.isFunction(i)) return this.each(function(e) {
                    var f = J(this);
                    a[0] = i.call(this, e, c ? f.html() : b), f.domManip(a, c, d) });
                if (this[0]) {
                    if (h = i && i.parentNode, e = J.support.parentNode && h && 11 === h.nodeType && h.childNodes.length === this.length ? { fragment: h } : J.buildFragment(a, this, j), g = e.fragment, f = 1 === g.childNodes.length ? g = g.firstChild : g.firstChild, f) { c = c && J.nodeName(f, "tr");
                        for (var k = 0, l = this.length, m = l - 1; l > k; k++) d.call(c ? w(this[k], f) : this[k], e.cacheable || l > 1 && m > k ? J.clone(g, !0, !0) : g) }
                    j.length && J.each(j, function(a, b) { b.src ? J.ajax({ type: "GET", global: !1, url: b.src, async: !1, dataType: "script" }) : J.globalEval((b.text || b.textContent || b.innerHTML || "").replace(Aa, "/*$0*/")), b.parentNode && b.parentNode.removeChild(b) }) }
                return this }
        }), J.buildFragment = function(a, b, c) {
            var d, e, f, g, h = a[0];
            return b && b[0] && (g = b[0].ownerDocument || b[0]), g.createDocumentFragment || (g = G), 1 === a.length && "string" == typeof h && h.length < 512 && g === G && "<" === h.charAt(0) && !wa.test(h) && (J.support.checkClone || !ya.test(h)) && (J.support.html5Clone || !xa.test(h)) && (e = !0, f = J.fragments[h], f && 1 !== f && (d = f)), d || (d = g.createDocumentFragment(), J.clean(a, g, d, c)), e && (J.fragments[h] = f ? d : 1), { fragment: d, cacheable: e } }, J.fragments = {}, J.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(a, b) { J.fn[a] = function(c) {
                var d = [],
                    e = J(c),
                    f = 1 === this.length && this[0].parentNode;
                if (f && 11 === f.nodeType && 1 === f.childNodes.length && 1 === e.length) return e[b](this[0]), this;
                for (var g = 0, h = e.length; h > g; g++) {
                    var i = (g > 0 ? this.clone(!0) : this).get();
                    J(e[g])[b](i), d = d.concat(i) }
                return this.pushStack(d, a, e.selector) } }), J.extend({ clone: function(a, b, c) {
                var d, e, f, g = J.support.html5Clone || J.isXMLDoc(a) || !xa.test("<" + a.nodeName + ">") ? a.cloneNode(!0) : q(a);
                if (!(J.support.noCloneEvent && J.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || J.isXMLDoc(a)))
                    for (u(a, g), d = t(a), e = t(g), f = 0; d[f]; ++f) e[f] && u(d[f], e[f]);
                if (b && (v(a, g), c))
                    for (d = t(a), e = t(g), f = 0; d[f]; ++f) v(d[f], e[f]);
                return d = e = null, g }, clean: function(a, b, c, d) {
                var e, f, g, h = [];
                b = b || G, "undefined" == typeof b.createElement && (b = b.ownerDocument || b[0] && b[0].ownerDocument || G);
                for (var i, j = 0; null != (i = a[j]); j++)
                    if ("number" == typeof i && (i += ""), i) {
                        if ("string" == typeof i)
                            if (ua.test(i)) { i = i.replace(ra, "<$1></$2>");
                                var k, l = (sa.exec(i) || ["", ""])[1].toLowerCase(),
                                    m = Ba[l] || Ba._default,
                                    n = m[0],
                                    o = b.createElement("div"),
                                    p = Ca.childNodes;
                                for (b === G ? Ca.appendChild(o) : x(b).appendChild(o), o.innerHTML = m[1] + i + m[2]; n--;) o = o.lastChild;
                                if (!J.support.tbody) {
                                    var q = ta.test(i),
                                        s = "table" !== l || q ? "<table>" !== m[1] || q ? [] : o.childNodes : o.firstChild && o.firstChild.childNodes;
                                    for (g = s.length - 1; g >= 0; --g) J.nodeName(s[g], "tbody") && !s[g].childNodes.length && s[g].parentNode.removeChild(s[g]) }!J.support.leadingWhitespace && qa.test(i) && o.insertBefore(b.createTextNode(qa.exec(i)[0]), o.firstChild), i = o.childNodes, o && (o.parentNode.removeChild(o), p.length > 0 && (k = p[p.length - 1], k && k.parentNode && k.parentNode.removeChild(k))) } else i = b.createTextNode(i);
                        var t;
                        if (!J.support.appendChecked)
                            if (i[0] && "number" == typeof(t = i.length))
                                for (g = 0; t > g; g++) r(i[g]);
                            else r(i);
                        i.nodeType ? h.push(i) : h = J.merge(h, i) }
                if (c)
                    for (e = function(a) {
                            return !a.type || za.test(a.type) }, j = 0; h[j]; j++)
                        if (f = h[j], d && J.nodeName(f, "script") && (!f.type || za.test(f.type))) d.push(f.parentNode ? f.parentNode.removeChild(f) : f);
                        else {
                            if (1 === f.nodeType) {
                                var u = J.grep(f.getElementsByTagName("script"), e);
                                h.splice.apply(h, [j + 1, 0].concat(u)) }
                            c.appendChild(f) }
                return h }, cleanData: function(a) {
                for (var b, c, d, e = J.cache, f = J.event.special, g = J.support.deleteExpando, h = 0; null != (d = a[h]); h++)
                    if ((!d.nodeName || !J.noData[d.nodeName.toLowerCase()]) && (c = d[J.expando])) {
                        if (b = e[c], b && b.events) {
                            for (var i in b.events) f[i] ? J.event.remove(d, i) : J.removeEvent(d, i, b.handle);
                            b.handle && (b.handle.elem = null) }
                        g ? delete d[J.expando] : d.removeAttribute && d.removeAttribute(J.expando), delete e[c] } } });
        var Da, Ea, Fa, Ga = /alpha\([^)]*\)/i,
            Ha = /opacity=([^)]*)/,
            Ia = /([A-Z]|^ms)/g,
            Ja = /^[\-+]?(?:\d*\.)?\d+$/i,
            Ka = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,
            La = /^([\-+])=([\-+.\de]+)/,
            Ma = /^margin/,
            Na = { position: "absolute", visibility: "hidden", display: "block" },
            Oa = ["Top", "Right", "Bottom", "Left"];
        J.fn.css = function(a, c) {
            return J.access(this, function(a, c, d) {
                return d !== b ? J.style(a, c, d) : J.css(a, c) }, a, c, arguments.length > 1) }, J.extend({ cssHooks: { opacity: { get: function(a, b) {
                        if (b) {
                            var c = Da(a, "opacity");
                            return "" === c ? "1" : c }
                        return a.style.opacity } } }, cssNumber: { fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": J.support.cssFloat ? "cssFloat" : "styleFloat" }, style: function(a, c, d, e) {
                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                    var f, g, h = J.camelCase(c),
                        i = a.style,
                        j = J.cssHooks[h];
                    if (c = J.cssProps[h] || h, d === b) return j && "get" in j && (f = j.get(a, !1, e)) !== b ? f : i[c];
                    if (g = typeof d, "string" === g && (f = La.exec(d)) && (d = +(f[1] + 1) * +f[2] + parseFloat(J.css(a, c)), g = "number"), null == d || "number" === g && isNaN(d)) return;
                    if ("number" === g && !J.cssNumber[h] && (d += "px"), !(j && "set" in j && (d = j.set(a, d)) === b)) try { i[c] = d } catch (k) {} } }, css: function(a, c, d) {
                var e, f;
                return c = J.camelCase(c), f = J.cssHooks[c], c = J.cssProps[c] || c, "cssFloat" === c && (c = "float"), f && "get" in f && (e = f.get(a, !0, d)) !== b ? e : Da ? Da(a, c) : void 0 }, swap: function(a, b, c) {
                var d, e, f = {};
                for (e in b) f[e] = a.style[e], a.style[e] = b[e];
                d = c.call(a);
                for (e in b) a.style[e] = f[e];
                return d } }), J.curCSS = J.css, G.defaultView && G.defaultView.getComputedStyle && (Ea = function(a, b) {
            var c, d, e, f, g = a.style;
            return b = b.replace(Ia, "-$1").toLowerCase(), (d = a.ownerDocument.defaultView) && (e = d.getComputedStyle(a, null)) && (c = e.getPropertyValue(b), "" === c && !J.contains(a.ownerDocument.documentElement, a) && (c = J.style(a, b))), !J.support.pixelMargin && e && Ma.test(b) && Ka.test(c) && (f = g.width, g.width = c, c = e.width, g.width = f), c }), G.documentElement.currentStyle && (Fa = function(a, b) {
            var c, d, e, f = a.currentStyle && a.currentStyle[b],
                g = a.style;
            return null == f && g && (e = g[b]) && (f = e), Ka.test(f) && (c = g.left, d = a.runtimeStyle && a.runtimeStyle.left, d && (a.runtimeStyle.left = a.currentStyle.left), g.left = "fontSize" === b ? "1em" : f, f = g.pixelLeft + "px", g.left = c, d && (a.runtimeStyle.left = d)), "" === f ? "auto" : f }), Da = Ea || Fa, J.each(["height", "width"], function(a, b) { J.cssHooks[b] = { get: function(a, c, d) {
                    return c ? 0 !== a.offsetWidth ? p(a, b, d) : J.swap(a, Na, function() {
                        return p(a, b, d) }) : void 0 }, set: function(a, b) {
                    return Ja.test(b) ? b + "px" : b } } }), J.support.opacity || (J.cssHooks.opacity = { get: function(a, b) {
                return Ha.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : "" }, set: function(a, b) {
                var c = a.style,
                    d = a.currentStyle,
                    e = J.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                    f = d && d.filter || c.filter || "";
                c.zoom = 1, b >= 1 && "" === J.trim(f.replace(Ga, "")) && (c.removeAttribute("filter"), d && !d.filter) || (c.filter = Ga.test(f) ? f.replace(Ga, e) : f + " " + e) } }), J(function() { J.support.reliableMarginRight || (J.cssHooks.marginRight = { get: function(a, b) {
                    return J.swap(a, { display: "inline-block" }, function() {
                        return b ? Da(a, "margin-right") : a.style.marginRight }) } }) }), J.expr && J.expr.filters && (J.expr.filters.hidden = function(a) {
            var b = a.offsetWidth,
                c = a.offsetHeight;
            return 0 === b && 0 === c || !J.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || J.css(a, "display")) }, J.expr.filters.visible = function(a) {
            return !J.expr.filters.hidden(a) }), J.each({ margin: "", padding: "", border: "Width" }, function(a, b) { J.cssHooks[a + b] = { expand: function(c) {
                    var d, e = "string" == typeof c ? c.split(" ") : [c],
                        f = {};
                    for (d = 0; 4 > d; d++) f[a + Oa[d] + b] = e[d] || e[d - 2] || e[0];
                    return f } } });
        var Pa, Qa, Ra = /%20/g,
            Sa = /\[\]$/,
            Ta = /\r?\n/g,
            Ua = /#.*$/,
            Va = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Wa = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
            Xa = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
            Ya = /^(?:GET|HEAD)$/,
            Za = /^\/\//,
            $a = /\?/,
            _a = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
            ab = /^(?:select|textarea)/i,
            bb = /\s+/,
            cb = /([?&])_=[^&]*/,
            db = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
            eb = J.fn.load,
            fb = {},
            gb = {},
            hb = ["*/"] + ["*"];
        try { Pa = I.href } catch (ib) { Pa = G.createElement("a"), Pa.href = "", Pa = Pa.href }
        Qa = db.exec(Pa.toLowerCase()) || [], J.fn.extend({ load: function(a, c, d) {
                if ("string" != typeof a && eb) return eb.apply(this, arguments);
                if (!this.length) return this;
                var e = a.indexOf(" ");
                if (e >= 0) {
                    var f = a.slice(e, a.length);
                    a = a.slice(0, e) }
                var g = "GET";
                c && (J.isFunction(c) ? (d = c, c = b) : "object" == typeof c && (c = J.param(c, J.ajaxSettings.traditional), g = "POST"));
                var h = this;
                return J.ajax({ url: a, type: g, dataType: "html", data: c, complete: function(a, b, c) { c = a.responseText, a.isResolved() && (a.done(function(a) { c = a }), h.html(f ? J("<div>").append(c.replace(_a, "")).find(f) : c)), d && h.each(d, [c, b, a]) } }), this }, serialize: function() {
                return J.param(this.serializeArray()) }, serializeArray: function() {
                return this.map(function() {
                    return this.elements ? J.makeArray(this.elements) : this }).filter(function() {
                    return this.name && !this.disabled && (this.checked || ab.test(this.nodeName) || Wa.test(this.type)) }).map(function(a, b) {
                    var c = J(this).val();
                    return null == c ? null : J.isArray(c) ? J.map(c, function(a, c) {
                        return { name: b.name, value: a.replace(Ta, "\r\n") } }) : { name: b.name, value: c.replace(Ta, "\r\n") } }).get() } }), J.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) { J.fn[b] = function(a) {
                return this.on(b, a) } }), J.each(["get", "post"], function(a, c) { J[c] = function(a, d, e, f) {
                return J.isFunction(d) && (f = f || e, e = d, d = b), J.ajax({ type: c, url: a, data: d, success: e, dataType: f }) } }), J.extend({ getScript: function(a, c) {
                return J.get(a, b, c, "script") }, getJSON: function(a, b, c) {
                return J.get(a, b, c, "json") }, ajaxSetup: function(a, b) {
                return b ? m(a, J.ajaxSettings) : (b = a, a = J.ajaxSettings), m(a, b), a }, ajaxSettings: { url: Pa, isLocal: Xa.test(Qa[1]), global: !0, type: "GET", contentType: "application/x-www-form-urlencoded; charset=UTF-8", processData: !0, async: !0, accepts: { xml: "application/xml, text/xml", html: "text/html", text: "text/plain", json: "application/json, text/javascript", "*": hb }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText" }, converters: { "* text": a.String, "text html": !0, "text json": J.parseJSON, "text xml": J.parseXML }, flatOptions: { context: !0, url: !0 } }, ajaxPrefilter: o(fb), ajaxTransport: o(gb), ajax: function(a, c) {
                function d(a, c, d, g) {
                    if (2 !== x) { x = 2, i && clearTimeout(i), h = b, f = g || "", y.readyState = a > 0 ? 4 : 0;
                        var l, n, o, v, w, z = c,
                            A = d ? k(p, y, d) : b;
                        if (a >= 200 && 300 > a || 304 === a)
                            if (p.ifModified && ((v = y.getResponseHeader("Last-Modified")) && (J.lastModified[e] = v), (w = y.getResponseHeader("Etag")) && (J.etag[e] = w)), 304 === a) z = "notmodified", l = !0;
                            else try { n = j(p, A), z = "success", l = !0 } catch (B) { z = "parsererror", o = B } else o = z, (!z || a) && (z = "error", 0 > a && (a = 0));
                        y.status = a, y.statusText = "" + (c || z), l ? s.resolveWith(q, [n, z, y]) : s.rejectWith(q, [y, z, o]), y.statusCode(u), u = b, m && r.trigger("ajax" + (l ? "Success" : "Error"), [y, p, l ? n : o]), t.fireWith(q, [y, z]), m && (r.trigger("ajaxComplete", [y, p]), --J.active || J.event.trigger("ajaxStop")) } } "object" == typeof a && (c = a, a = b), c = c || {};
                var e, f, g, h, i, l, m, o, p = J.ajaxSetup({}, c),
                    q = p.context || p,
                    r = q !== p && (q.nodeType || q instanceof J) ? J(q) : J.event,
                    s = J.Deferred(),
                    t = J.Callbacks("once memory"),
                    u = p.statusCode || {},
                    v = {},
                    w = {},
                    x = 0,
                    y = { readyState: 0, setRequestHeader: function(a, b) {
                            if (!x) {
                                var c = a.toLowerCase();
                                a = w[c] = w[c] || a, v[a] = b }
                            return this }, getAllResponseHeaders: function() {
                            return 2 === x ? f : null }, getResponseHeader: function(a) {
                            var c;
                            if (2 === x) {
                                if (!g)
                                    for (g = {}; c = Va.exec(f);) g[c[1].toLowerCase()] = c[2];
                                c = g[a.toLowerCase()] }
                            return c === b ? null : c }, overrideMimeType: function(a) {
                            return x || (p.mimeType = a), this }, abort: function(a) {
                            return a = a || "abort", h && h.abort(a), d(0, a), this } };
                if (s.promise(y), y.success = y.done, y.error = y.fail, y.complete = t.add, y.statusCode = function(a) {
                        if (a) {
                            var b;
                            if (2 > x)
                                for (b in a) u[b] = [u[b], a[b]];
                            else b = a[y.status], y.then(b, b) }
                        return this }, p.url = ((a || p.url) + "").replace(Ua, "").replace(Za, Qa[1] + "//"), p.dataTypes = J.trim(p.dataType || "*").toLowerCase().split(bb), null == p.crossDomain && (l = db.exec(p.url.toLowerCase()), p.crossDomain = !(!l || l[1] == Qa[1] && l[2] == Qa[2] && (l[3] || ("http:" === l[1] ? 80 : 443)) == (Qa[3] || ("http:" === Qa[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = J.param(p.data, p.traditional)), n(fb, p, c, y), 2 === x) return !1;
                if (m = p.global, p.type = p.type.toUpperCase(), p.hasContent = !Ya.test(p.type), m && 0 === J.active++ && J.event.trigger("ajaxStart"), !p.hasContent && (p.data && (p.url += ($a.test(p.url) ? "&" : "?") + p.data, delete p.data), e = p.url, p.cache === !1)) {
                    var z = J.now(),
                        A = p.url.replace(cb, "$1_=" + z);
                    p.url = A + (A === p.url ? ($a.test(p.url) ? "&" : "?") + "_=" + z : "") }(p.data && p.hasContent && p.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", p.contentType), p.ifModified && (e = e || p.url, J.lastModified[e] && y.setRequestHeader("If-Modified-Since", J.lastModified[e]), J.etag[e] && y.setRequestHeader("If-None-Match", J.etag[e])), y.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + hb + "; q=0.01" : "") : p.accepts["*"]);
                for (o in p.headers) y.setRequestHeader(o, p.headers[o]);
                if (p.beforeSend && (p.beforeSend.call(q, y, p) === !1 || 2 === x)) return y.abort(), !1;
                for (o in { success: 1, error: 1, complete: 1 }) y[o](p[o]);
                if (h = n(gb, p, c, y)) { y.readyState = 1, m && r.trigger("ajaxSend", [y, p]), p.async && p.timeout > 0 && (i = setTimeout(function() { y.abort("timeout") }, p.timeout));
                    try { x = 1, h.send(v, d) } catch (B) {
                        if (!(2 > x)) throw B;
                        d(-1, B) } } else d(-1, "No Transport");
                return y }, param: function(a, c) {
                var d = [],
                    e = function(a, b) { b = J.isFunction(b) ? b() : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b) };
                if (c === b && (c = J.ajaxSettings.traditional), J.isArray(a) || a.jquery && !J.isPlainObject(a)) J.each(a, function() { e(this.name, this.value) });
                else
                    for (var f in a) l(f, a[f], c, e);
                return d.join("&").replace(Ra, "+") } }), J.extend({ active: 0, lastModified: {}, etag: {} });
        var jb = J.now(),
            kb = /(\=)\?(&|$)|\?\?/i;
        J.ajaxSetup({ jsonp: "callback", jsonpCallback: function() {
                return J.expando + "_" + jb++ } }), J.ajaxPrefilter("json jsonp", function(b, c, d) {
            var e = "string" == typeof b.data && /^application\/x\-www\-form\-urlencoded/.test(b.contentType);
            if ("jsonp" === b.dataTypes[0] || b.jsonp !== !1 && (kb.test(b.url) || e && kb.test(b.data))) {
                var f, g = b.jsonpCallback = J.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
                    h = a[g],
                    i = b.url,
                    j = b.data,
                    k = "$1" + g + "$2";
                return b.jsonp !== !1 && (i = i.replace(kb, k), b.url === i && (e && (j = j.replace(kb, k)), b.data === j && (i += (/\?/.test(i) ? "&" : "?") + b.jsonp + "=" + g))), b.url = i, b.data = j, a[g] = function(a) { f = [a] }, d.always(function() { a[g] = h, f && J.isFunction(h) && a[g](f[0]) }), b.converters["script json"] = function() {
                    return f || J.error(g + " was not called"), f[0] }, b.dataTypes[0] = "json", "script" } }), J.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /javascript|ecmascript/ }, converters: { "text script": function(a) {
                    return J.globalEval(a), a } } }), J.ajaxPrefilter("script", function(a) { a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1) }), J.ajaxTransport("script", function(a) {
            if (a.crossDomain) {
                var c, d = G.head || G.getElementsByTagName("head")[0] || G.documentElement;
                return { send: function(e, f) { c = G.createElement("script"), c.async = "async", a.scriptCharset && (c.charset = a.scriptCharset), c.src = a.url, c.onload = c.onreadystatechange = function(a, e) {
                            (e || !c.readyState || /loaded|complete/.test(c.readyState)) && (c.onload = c.onreadystatechange = null, d && c.parentNode && d.removeChild(c), c = b, e || f(200, "success")) }, d.insertBefore(c, d.firstChild) }, abort: function() { c && c.onload(0, 1) } } } });
        var lb, mb = a.ActiveXObject ? function() {
                for (var a in lb) lb[a](0, 1) } : !1,
            nb = 0;
        J.ajaxSettings.xhr = a.ActiveXObject ? function() {
                return !this.isLocal && i() || h() } : i,
            function(a) { J.extend(J.support, { ajax: !!a, cors: !!a && "withCredentials" in a }) }(J.ajaxSettings.xhr()), J.support.ajax && J.ajaxTransport(function(c) {
                if (!c.crossDomain || J.support.cors) {
                    var d;
                    return { send: function(e, f) {
                            var g, h, i = c.xhr();
                            if (c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async), c.xhrFields)
                                for (h in c.xhrFields) i[h] = c.xhrFields[h];
                            c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType), !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                            try {
                                for (h in e) i.setRequestHeader(h, e[h]) } catch (j) {}
                            i.send(c.hasContent && c.data || null), d = function(a, e) {
                                var h, j, k, l, m;
                                try {
                                    if (d && (e || 4 === i.readyState))
                                        if (d = b, g && (i.onreadystatechange = J.noop, mb && delete lb[g]), e) 4 !== i.readyState && i.abort();
                                        else { h = i.status, k = i.getAllResponseHeaders(), l = {}, m = i.responseXML, m && m.documentElement && (l.xml = m);
                                            try { l.text = i.responseText } catch (a) {}
                                            try { j = i.statusText } catch (n) { j = "" }
                                            h || !c.isLocal || c.crossDomain ? 1223 === h && (h = 204) : h = l.text ? 200 : 404 } } catch (o) { e || f(-1, o) }
                                l && f(h, j, l, k) }, c.async && 4 !== i.readyState ? (g = ++nb, mb && (lb || (lb = {}, J(a).unload(mb)), lb[g] = d), i.onreadystatechange = d) : d() }, abort: function() { d && d(0, 1) } } } });
        var ob, pb, qb, rb, sb = {},
            tb = /^(?:toggle|show|hide)$/,
            ub = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
            vb = [
                ["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"],
                ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"],
                ["opacity"]
            ];
        J.fn.extend({ show: function(a, b, c) {
                var f, g;
                if (a || 0 === a) return this.animate(e("show", 3), a, b, c);
                for (var h = 0, i = this.length; i > h; h++) f = this[h], f.style && (g = f.style.display, !J._data(f, "olddisplay") && "none" === g && (g = f.style.display = ""), ("" === g && "none" === J.css(f, "display") || !J.contains(f.ownerDocument.documentElement, f)) && J._data(f, "olddisplay", d(f.nodeName)));
                for (h = 0; i > h; h++) f = this[h], f.style && (g = f.style.display, ("" === g || "none" === g) && (f.style.display = J._data(f, "olddisplay") || ""));
                return this }, hide: function(a, b, c) {
                if (a || 0 === a) return this.animate(e("hide", 3), a, b, c);
                for (var d, f, g = 0, h = this.length; h > g; g++) d = this[g], d.style && (f = J.css(d, "display"), "none" !== f && !J._data(d, "olddisplay") && J._data(d, "olddisplay", f));
                for (g = 0; h > g; g++) this[g].style && (this[g].style.display = "none");
                return this }, _toggle: J.fn.toggle, toggle: function(a, b, c) {
                var d = "boolean" == typeof a;
                return J.isFunction(a) && J.isFunction(b) ? this._toggle.apply(this, arguments) : null == a || d ? this.each(function() {
                    var b = d ? a : J(this).is(":hidden");
                    J(this)[b ? "show" : "hide"]() }) : this.animate(e("toggle", 3), a, b, c), this }, fadeTo: function(a, b, c, d) {
                return this.filter(":hidden").css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) }, animate: function(a, b, c, e) {
                function f() { g.queue === !1 && J._mark(this);
                    var b, c, e, f, h, i, j, k, l, m, n, o = J.extend({}, g),
                        p = 1 === this.nodeType,
                        q = p && J(this).is(":hidden");
                    o.animatedProperties = {};
                    for (e in a)
                        if (b = J.camelCase(e), e !== b && (a[b] = a[e], delete a[e]), (h = J.cssHooks[b]) && "expand" in h) { i = h.expand(a[b]), delete a[b];
                            for (e in i) e in a || (a[e] = i[e]) }
                    for (b in a) {
                        if (c = a[b], J.isArray(c) ? (o.animatedProperties[b] = c[1], c = a[b] = c[0]) : o.animatedProperties[b] = o.specialEasing && o.specialEasing[b] || o.easing || "swing", "hide" === c && q || "show" === c && !q) return o.complete.call(this);
                        p && ("height" === b || "width" === b) && (o.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY], "inline" === J.css(this, "display") && "none" === J.css(this, "float") && (J.support.inlineBlockNeedsLayout && "inline" !== d(this.nodeName) ? this.style.zoom = 1 : this.style.display = "inline-block")) }
                    null != o.overflow && (this.style.overflow = "hidden");
                    for (e in a) f = new J.fx(this, o, e), c = a[e], tb.test(c) ? (n = J._data(this, "toggle" + e) || ("toggle" === c ? q ? "show" : "hide" : 0), n ? (J._data(this, "toggle" + e, "show" === n ? "hide" : "show"), f[n]()) : f[c]()) : (j = ub.exec(c), k = f.cur(), j ? (l = parseFloat(j[2]), m = j[3] || (J.cssNumber[e] ? "" : "px"), "px" !== m && (J.style(this, e, (l || 1) + m), k = (l || 1) / f.cur() * k, J.style(this, e, k + m)), j[1] && (l = ("-=" === j[1] ? -1 : 1) * l + k), f.custom(k, l, m)) : f.custom(k, c, ""));
                    return !0 }
                var g = J.speed(b, c, e);
                return J.isEmptyObject(a) ? this.each(g.complete, [!1]) : (a = J.extend({}, a), g.queue === !1 ? this.each(f) : this.queue(g.queue, f)) }, stop: function(a, c, d) {
                return "string" != typeof a && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    function b(a, b, c) {
                        var e = b[c];
                        J.removeData(a, c, !0), e.stop(d) }
                    var c, e = !1,
                        f = J.timers,
                        g = J._data(this);
                    if (d || J._unmark(!0, this), null == a)
                        for (c in g) g[c] && g[c].stop && c.indexOf(".run") === c.length - 4 && b(this, g, c);
                    else g[c = a + ".run"] && g[c].stop && b(this, g, c);
                    for (c = f.length; c--;) f[c].elem === this && (null == a || f[c].queue === a) && (d ? f[c](!0) : f[c].saveState(), e = !0, f.splice(c, 1));
                    (!d || !e) && J.dequeue(this, a) }) } }), J.each({ slideDown: e("show", 1), slideUp: e("hide", 1), slideToggle: e("toggle", 1), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(a, b) { J.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d) } }), J.extend({ speed: function(a, b, c) {
                var d = a && "object" == typeof a ? J.extend({}, a) : { complete: c || !c && b || J.isFunction(a) && a, duration: a, easing: c && b || b && !J.isFunction(b) && b };
                return d.duration = J.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in J.fx.speeds ? J.fx.speeds[d.duration] : J.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function(a) { J.isFunction(d.old) && d.old.call(this), d.queue ? J.dequeue(this, d.queue) : a !== !1 && J._unmark(this) }, d }, easing: { linear: function(a) {
                    return a }, swing: function(a) {
                    return -Math.cos(a * Math.PI) / 2 + .5 } }, timers: [], fx: function(a, b, c) { this.options = b, this.elem = a, this.prop = c, b.orig = b.orig || {} } }), J.fx.prototype = { update: function() { this.options.step && this.options.step.call(this.elem, this.now, this), (J.fx.step[this.prop] || J.fx.step._default)(this) }, cur: function() {
                if (null != this.elem[this.prop] && (!this.elem.style || null == this.elem.style[this.prop])) return this.elem[this.prop];
                var a, b = J.css(this.elem, this.prop);
                return isNaN(a = parseFloat(b)) ? b && "auto" !== b ? b : 0 : a }, custom: function(a, c, d) {
                function e(a) {
                    return f.step(a) }
                var f = this,
                    h = J.fx;
                this.startTime = rb || g(), this.end = c, this.now = this.start = a, this.pos = this.state = 0, this.unit = d || this.unit || (J.cssNumber[this.prop] ? "" : "px"), e.queue = this.options.queue, e.elem = this.elem, e.saveState = function() { J._data(f.elem, "fxshow" + f.prop) === b && (f.options.hide ? J._data(f.elem, "fxshow" + f.prop, f.start) : f.options.show && J._data(f.elem, "fxshow" + f.prop, f.end)) }, e() && J.timers.push(e) && !qb && (qb = setInterval(h.tick, h.interval)) }, show: function() {
                var a = J._data(this.elem, "fxshow" + this.prop);
                this.options.orig[this.prop] = a || J.style(this.elem, this.prop), this.options.show = !0, a !== b ? this.custom(this.cur(), a) : this.custom("width" === this.prop || "height" === this.prop ? 1 : 0, this.cur()), J(this.elem).show() }, hide: function() { this.options.orig[this.prop] = J._data(this.elem, "fxshow" + this.prop) || J.style(this.elem, this.prop), this.options.hide = !0, this.custom(this.cur(), 0) }, step: function(a) {
                var b, c, d, e = rb || g(),
                    f = !0,
                    h = this.elem,
                    i = this.options;
                if (a || e >= i.duration + this.startTime) { this.now = this.end, this.pos = this.state = 1, this.update(), i.animatedProperties[this.prop] = !0;
                    for (b in i.animatedProperties) i.animatedProperties[b] !== !0 && (f = !1);
                    if (f) {
                        if (null != i.overflow && !J.support.shrinkWrapBlocks && J.each(["", "X", "Y"], function(a, b) { h.style["overflow" + b] = i.overflow[a] }), i.hide && J(h).hide(), i.hide || i.show)
                            for (b in i.animatedProperties) J.style(h, b, i.orig[b]), J.removeData(h, "fxshow" + b, !0), J.removeData(h, "toggle" + b, !0);
                        d = i.complete, d && (i.complete = !1, d.call(h)) }
                    return !1 }
                return i.duration == 1 / 0 ? this.now = e : (c = e - this.startTime, this.state = c / i.duration, this.pos = J.easing[i.animatedProperties[this.prop]](this.state, c, 0, 1, i.duration), this.now = this.start + (this.end - this.start) * this.pos), this.update(), !0 } }, J.extend(J.fx, { tick: function() {
                for (var a, b = J.timers, c = 0; c < b.length; c++) a = b[c], !a() && b[c] === a && b.splice(c--, 1);
                b.length || J.fx.stop() }, interval: 13, stop: function() { clearInterval(qb), qb = null }, speeds: { slow: 600, fast: 200, _default: 400 }, step: { opacity: function(a) { J.style(a.elem, "opacity", a.now) }, _default: function(a) { a.elem.style && null != a.elem.style[a.prop] ? a.elem.style[a.prop] = a.now + a.unit : a.elem[a.prop] = a.now } } }), J.each(vb.concat.apply([], vb), function(a, b) { b.indexOf("margin") && (J.fx.step[b] = function(a) { J.style(a.elem, b, Math.max(0, a.now) + a.unit) }) }), J.expr && J.expr.filters && (J.expr.filters.animated = function(a) {
            return J.grep(J.timers, function(b) {
                return a === b.elem }).length });
        var wb, xb = /^t(?:able|d|h)$/i,
            yb = /^(?:body|html)$/i;
        wb = "getBoundingClientRect" in G.documentElement ? function(a, b, d, e) {
            try { e = a.getBoundingClientRect() } catch (f) {}
            if (!e || !J.contains(d, a)) return e ? { top: e.top, left: e.left } : { top: 0, left: 0 };
            var g = b.body,
                h = c(b),
                i = d.clientTop || g.clientTop || 0,
                j = d.clientLeft || g.clientLeft || 0,
                k = h.pageYOffset || J.support.boxModel && d.scrollTop || g.scrollTop,
                l = h.pageXOffset || J.support.boxModel && d.scrollLeft || g.scrollLeft,
                m = e.top + k - i,
                n = e.left + l - j;
            return { top: m, left: n } } : function(a, b, c) {
            for (var d, e = a.offsetParent, f = a, g = b.body, h = b.defaultView, i = h ? h.getComputedStyle(a, null) : a.currentStyle, j = a.offsetTop, k = a.offsetLeft;
                (a = a.parentNode) && a !== g && a !== c && (!J.support.fixedPosition || "fixed" !== i.position);) d = h ? h.getComputedStyle(a, null) : a.currentStyle, j -= a.scrollTop, k -= a.scrollLeft, a === e && (j += a.offsetTop, k += a.offsetLeft, J.support.doesNotAddBorder && (!J.support.doesAddBorderForTableAndCells || !xb.test(a.nodeName)) && (j += parseFloat(d.borderTopWidth) || 0, k += parseFloat(d.borderLeftWidth) || 0), f = e, e = a.offsetParent), J.support.subtractsBorderForOverflowNotVisible && "visible" !== d.overflow && (j += parseFloat(d.borderTopWidth) || 0, k += parseFloat(d.borderLeftWidth) || 0), i = d;
            return ("relative" === i.position || "static" === i.position) && (j += g.offsetTop, k += g.offsetLeft), J.support.fixedPosition && "fixed" === i.position && (j += Math.max(c.scrollTop, g.scrollTop), k += Math.max(c.scrollLeft, g.scrollLeft)), { top: j, left: k } }, J.fn.offset = function(a) {
            if (arguments.length) return a === b ? this : this.each(function(b) { J.offset.setOffset(this, a, b) });
            var c = this[0],
                d = c && c.ownerDocument;
            return d ? c === d.body ? J.offset.bodyOffset(c) : wb(c, d, d.documentElement) : null }, J.offset = { bodyOffset: function(a) {
                var b = a.offsetTop,
                    c = a.offsetLeft;
                return J.support.doesNotIncludeMarginInBodyOffset && (b += parseFloat(J.css(a, "marginTop")) || 0, c += parseFloat(J.css(a, "marginLeft")) || 0), { top: b, left: c } }, setOffset: function(a, b, c) {
                var d = J.css(a, "position"); "static" === d && (a.style.position = "relative");
                var e, f, g = J(a),
                    h = g.offset(),
                    i = J.css(a, "top"),
                    j = J.css(a, "left"),
                    k = ("absolute" === d || "fixed" === d) && J.inArray("auto", [i, j]) > -1,
                    l = {},
                    m = {};
                k ? (m = g.position(), e = m.top, f = m.left) : (e = parseFloat(i) || 0, f = parseFloat(j) || 0), J.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (l.top = b.top - h.top + e), null != b.left && (l.left = b.left - h.left + f), "using" in b ? b.using.call(a, l) : g.css(l) } }, J.fn.extend({ position: function() {
                if (!this[0]) return null;
                var a = this[0],
                    b = this.offsetParent(),
                    c = this.offset(),
                    d = yb.test(b[0].nodeName) ? { top: 0, left: 0 } : b.offset();
                return c.top -= parseFloat(J.css(a, "marginTop")) || 0, c.left -= parseFloat(J.css(a, "marginLeft")) || 0, d.top += parseFloat(J.css(b[0], "borderTopWidth")) || 0, d.left += parseFloat(J.css(b[0], "borderLeftWidth")) || 0, { top: c.top - d.top, left: c.left - d.left } }, offsetParent: function() {
                return this.map(function() {
                    for (var a = this.offsetParent || G.body; a && !yb.test(a.nodeName) && "static" === J.css(a, "position");) a = a.offsetParent;
                    return a }) } }), J.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(a, d) {
            var e = /Y/.test(d);
            J.fn[a] = function(f) {
                return J.access(this, function(a, f, g) {
                    var h = c(a);
                    return g === b ? h ? d in h ? h[d] : J.support.boxModel && h.document.documentElement[f] || h.document.body[f] : a[f] : void(h ? h.scrollTo(e ? J(h).scrollLeft() : g, e ? g : J(h).scrollTop()) : a[f] = g) }, a, f, arguments.length, null) } }), J.each({ Height: "height", Width: "width" }, function(a, c) {
            var d = "client" + a,
                e = "scroll" + a,
                f = "offset" + a;
            J.fn["inner" + a] = function() {
                var a = this[0];
                return a ? a.style ? parseFloat(J.css(a, c, "padding")) : this[c]() : null }, J.fn["outer" + a] = function(a) {
                var b = this[0];
                return b ? b.style ? parseFloat(J.css(b, c, a ? "margin" : "border")) : this[c]() : null }, J.fn[c] = function(a) {
                return J.access(this, function(a, c, g) {
                    var h, i, j, k;
                    return J.isWindow(a) ? (h = a.document, i = h.documentElement[d], J.support.boxModel && i || h.body && h.body[d] || i) : 9 === a.nodeType ? (h = a.documentElement, h[d] >= h[e] ? h[d] : Math.max(a.body[e], h[e], a.body[f], h[f])) : g === b ? (j = J.css(a, c), k = parseFloat(j), J.isNumeric(k) ? k : j) : void J(a).css(c, g) }, c, a, arguments.length, null) } }), a.jQuery = a.$ = J, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
            return J })
    }(window),
    function() {
        var a = this,
            b = a._,
            c = {},
            d = Array.prototype,
            e = Object.prototype,
            f = Function.prototype,
            g = d.push,
            h = d.slice,
            i = d.concat,
            j = e.toString,
            k = e.hasOwnProperty,
            l = d.forEach,
            m = d.map,
            n = d.reduce,
            o = d.reduceRight,
            p = d.filter,
            q = d.every,
            r = d.some,
            s = d.indexOf,
            t = d.lastIndexOf,
            u = Array.isArray,
            v = Object.keys,
            w = f.bind,
            x = function(a) {
                return a instanceof x ? a : this instanceof x ? void(this._wrapped = a) : new x(a) };
        "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = x), exports._ = x) : a._ = x, x.VERSION = "1.4.4";
        var y = x.each = x.forEach = function(a, b, d) {
            if (null != a)
                if (l && a.forEach === l) a.forEach(b, d);
                else if (a.length === +a.length) {
                for (var e = 0, f = a.length; f > e; e++)
                    if (b.call(d, a[e], e, a) === c) return } else
                for (var g in a)
                    if (x.has(a, g) && b.call(d, a[g], g, a) === c) return };
        x.map = x.collect = function(a, b, c) {
            var d = [];
            return null == a ? d : m && a.map === m ? a.map(b, c) : (y(a, function(a, e, f) { d[d.length] = b.call(c, a, e, f) }), d) };
        var z = "Reduce of empty array with no initial value";
        x.reduce = x.foldl = x.inject = function(a, b, c, d) {
            var e = arguments.length > 2;
            if (null == a && (a = []), n && a.reduce === n) return d && (b = x.bind(b, d)), e ? a.reduce(b, c) : a.reduce(b);
            if (y(a, function(a, f, g) { e ? c = b.call(d, c, a, f, g) : (c = a, e = !0) }), !e) throw new TypeError(z);
            return c }, x.reduceRight = x.foldr = function(a, b, c, d) {
            var e = arguments.length > 2;
            if (null == a && (a = []), o && a.reduceRight === o) return d && (b = x.bind(b, d)), e ? a.reduceRight(b, c) : a.reduceRight(b);
            var f = a.length;
            if (f !== +f) {
                var g = x.keys(a);
                f = g.length }
            if (y(a, function(h, i, j) { i = g ? g[--f] : --f, e ? c = b.call(d, c, a[i], i, j) : (c = a[i], e = !0) }), !e) throw new TypeError(z);
            return c }, x.find = x.detect = function(a, b, c) {
            var d;
            return A(a, function(a, e, f) {
                return b.call(c, a, e, f) ? (d = a, !0) : void 0 }), d }, x.filter = x.select = function(a, b, c) {
            var d = [];
            return null == a ? d : p && a.filter === p ? a.filter(b, c) : (y(a, function(a, e, f) {
                b.call(c, a, e, f) && (d[d.length] = a)
            }), d)
        }, x.reject = function(a, b, c) {
            return x.filter(a, function(a, d, e) {
                return !b.call(c, a, d, e) }, c) }, x.every = x.all = function(a, b, d) { b || (b = x.identity);
            var e = !0;
            return null == a ? e : q && a.every === q ? a.every(b, d) : (y(a, function(a, f, g) {
                return (e = e && b.call(d, a, f, g)) ? void 0 : c }), !!e) };
        var A = x.some = x.any = function(a, b, d) { b || (b = x.identity);
            var e = !1;
            return null == a ? e : r && a.some === r ? a.some(b, d) : (y(a, function(a, f, g) {
                return e || (e = b.call(d, a, f, g)) ? c : void 0 }), !!e) };
        x.contains = x.include = function(a, b) {
            return null == a ? !1 : s && a.indexOf === s ? -1 != a.indexOf(b) : A(a, function(a) {
                return a === b }) }, x.invoke = function(a, b) {
            var c = h.call(arguments, 2),
                d = x.isFunction(b);
            return x.map(a, function(a) {
                return (d ? b : a[b]).apply(a, c) }) }, x.pluck = function(a, b) {
            return x.map(a, function(a) {
                return a[b] }) }, x.where = function(a, b, c) {
            return x.isEmpty(b) ? c ? null : [] : x[c ? "find" : "filter"](a, function(a) {
                for (var c in b)
                    if (b[c] !== a[c]) return !1;
                return !0 }) }, x.findWhere = function(a, b) {
            return x.where(a, b, !0) }, x.max = function(a, b, c) {
            if (!b && x.isArray(a) && a[0] === +a[0] && 65535 > a.length) return Math.max.apply(Math, a);
            if (!b && x.isEmpty(a)) return -1 / 0;
            var d = { computed: -1 / 0, value: -1 / 0 };
            return y(a, function(a, e, f) {
                var g = b ? b.call(c, a, e, f) : a;
                g >= d.computed && (d = { value: a, computed: g }) }), d.value }, x.min = function(a, b, c) {
            if (!b && x.isArray(a) && a[0] === +a[0] && 65535 > a.length) return Math.min.apply(Math, a);
            if (!b && x.isEmpty(a)) return 1 / 0;
            var d = { computed: 1 / 0, value: 1 / 0 };
            return y(a, function(a, e, f) {
                var g = b ? b.call(c, a, e, f) : a;
                d.computed > g && (d = { value: a, computed: g }) }), d.value }, x.shuffle = function(a) {
            var b, c = 0,
                d = [];
            return y(a, function(a) { b = x.random(c++), d[c - 1] = d[b], d[b] = a }), d };
        var B = function(a) {
            return x.isFunction(a) ? a : function(b) {
                return b[a] } };
        x.sortBy = function(a, b, c) {
            var d = B(b);
            return x.pluck(x.map(a, function(a, b, e) {
                return { value: a, index: b, criteria: d.call(c, a, b, e) } }).sort(function(a, b) {
                var c = a.criteria,
                    d = b.criteria;
                if (c !== d) {
                    if (c > d || void 0 === c) return 1;
                    if (d > c || void 0 === d) return -1 }
                return a.index < b.index ? -1 : 1 }), "value") };
        var C = function(a, b, c, d) {
            var e = {},
                f = B(b || x.identity);
            return y(a, function(b, g) {
                var h = f.call(c, b, g, a);
                d(e, h, b) }), e };
        x.groupBy = function(a, b, c) {
            return C(a, b, c, function(a, b, c) {
                (x.has(a, b) ? a[b] : a[b] = []).push(c) }) }, x.countBy = function(a, b, c) {
            return C(a, b, c, function(a, b) { x.has(a, b) || (a[b] = 0), a[b]++ }) }, x.sortedIndex = function(a, b, c, d) { c = null == c ? x.identity : B(c);
            for (var e = c.call(d, b), f = 0, g = a.length; g > f;) {
                var h = f + g >>> 1;
                e > c.call(d, a[h]) ? f = h + 1 : g = h }
            return f }, x.toArray = function(a) {
            return a ? x.isArray(a) ? h.call(a) : a.length === +a.length ? x.map(a, x.identity) : x.values(a) : [] }, x.size = function(a) {
            return null == a ? 0 : a.length === +a.length ? a.length : x.keys(a).length }, x.first = x.head = x.take = function(a, b, c) {
            return null == a ? void 0 : null == b || c ? a[0] : h.call(a, 0, b) }, x.initial = function(a, b, c) {
            return h.call(a, 0, a.length - (null == b || c ? 1 : b)) }, x.last = function(a, b, c) {
            return null == a ? void 0 : null == b || c ? a[a.length - 1] : h.call(a, Math.max(a.length - b, 0)) }, x.rest = x.tail = x.drop = function(a, b, c) {
            return h.call(a, null == b || c ? 1 : b) }, x.compact = function(a) {
            return x.filter(a, x.identity) };
        var D = function(a, b, c) {
            return y(a, function(a) { x.isArray(a) ? b ? g.apply(c, a) : D(a, b, c) : c.push(a) }), c };
        x.flatten = function(a, b) {
            return D(a, b, []) }, x.without = function(a) {
            return x.difference(a, h.call(arguments, 1)) }, x.uniq = x.unique = function(a, b, c, d) { x.isFunction(b) && (d = c, c = b, b = !1);
            var e = c ? x.map(a, c, d) : a,
                f = [],
                g = [];
            return y(e, function(c, d) {
                (b ? d && g[g.length - 1] === c : x.contains(g, c)) || (g.push(c), f.push(a[d])) }), f }, x.union = function() {
            return x.uniq(i.apply(d, arguments)) }, x.intersection = function(a) {
            var b = h.call(arguments, 1);
            return x.filter(x.uniq(a), function(a) {
                return x.every(b, function(b) {
                    return x.indexOf(b, a) >= 0 }) }) }, x.difference = function(a) {
            var b = i.apply(d, h.call(arguments, 1));
            return x.filter(a, function(a) {
                return !x.contains(b, a) }) }, x.zip = function() {
            for (var a = h.call(arguments), b = x.max(x.pluck(a, "length")), c = Array(b), d = 0; b > d; d++) c[d] = x.pluck(a, "" + d);
            return c }, x.object = function(a, b) {
            if (null == a) return {};
            for (var c = {}, d = 0, e = a.length; e > d; d++) b ? c[a[d]] = b[d] : c[a[d][0]] = a[d][1];
            return c }, x.indexOf = function(a, b, c) {
            if (null == a) return -1;
            var d = 0,
                e = a.length;
            if (c) {
                if ("number" != typeof c) return d = x.sortedIndex(a, b), a[d] === b ? d : -1;
                d = 0 > c ? Math.max(0, e + c) : c }
            if (s && a.indexOf === s) return a.indexOf(b, c);
            for (; e > d; d++)
                if (a[d] === b) return d;
            return -1 }, x.lastIndexOf = function(a, b, c) {
            if (null == a) return -1;
            var d = null != c;
            if (t && a.lastIndexOf === t) return d ? a.lastIndexOf(b, c) : a.lastIndexOf(b);
            for (var e = d ? c : a.length; e--;)
                if (a[e] === b) return e;
            return -1 }, x.range = function(a, b, c) { 1 >= arguments.length && (b = a || 0, a = 0), c = arguments[2] || 1;
            for (var d = Math.max(Math.ceil((b - a) / c), 0), e = 0, f = Array(d); d > e;) f[e++] = a, a += c;
            return f }, x.bind = function(a, b) {
            if (a.bind === w && w) return w.apply(a, h.call(arguments, 1));
            var c = h.call(arguments, 2);
            return function() {
                return a.apply(b, c.concat(h.call(arguments))) } }, x.partial = function(a) {
            var b = h.call(arguments, 1);
            return function() {
                return a.apply(this, b.concat(h.call(arguments))) } }, x.bindAll = function(a) {
            var b = h.call(arguments, 1);
            return 0 === b.length && (b = x.functions(a)), y(b, function(b) { a[b] = x.bind(a[b], a) }), a }, x.memoize = function(a, b) {
            var c = {};
            return b || (b = x.identity),
                function() {
                    var d = b.apply(this, arguments);
                    return x.has(c, d) ? c[d] : c[d] = a.apply(this, arguments) } }, x.delay = function(a, b) {
            var c = h.call(arguments, 2);
            return setTimeout(function() {
                return a.apply(null, c) }, b) }, x.defer = function(a) {
            return x.delay.apply(x, [a, 1].concat(h.call(arguments, 1))) }, x.throttle = function(a, b) {
            var c, d, e, f, g = 0,
                h = function() { g = new Date, e = null, f = a.apply(c, d) };
            return function() {
                var i = new Date,
                    j = b - (i - g);
                return c = this, d = arguments, 0 >= j ? (clearTimeout(e), e = null, g = i, f = a.apply(c, d)) : e || (e = setTimeout(h, j)), f } }, x.debounce = function(a, b, c) {
            var d, e;
            return function() {
                var f = this,
                    g = arguments,
                    h = function() { d = null, c || (e = a.apply(f, g)) },
                    i = c && !d;
                return clearTimeout(d), d = setTimeout(h, b), i && (e = a.apply(f, g)), e } }, x.once = function(a) {
            var b, c = !1;
            return function() {
                return c ? b : (c = !0, b = a.apply(this, arguments), a = null, b) } }, x.wrap = function(a, b) {
            return function() {
                var c = [a];
                return g.apply(c, arguments), b.apply(this, c) } }, x.compose = function() {
            var a = arguments;
            return function() {
                for (var b = arguments, c = a.length - 1; c >= 0; c--) b = [a[c].apply(this, b)];
                return b[0] } }, x.after = function(a, b) {
            return 0 >= a ? b() : function() {
                return 1 > --a ? b.apply(this, arguments) : void 0 } }, x.keys = v || function(a) {
            if (a !== Object(a)) throw new TypeError("Invalid object");
            var b = [];
            for (var c in a) x.has(a, c) && (b[b.length] = c);
            return b }, x.values = function(a) {
            var b = [];
            for (var c in a) x.has(a, c) && b.push(a[c]);
            return b }, x.pairs = function(a) {
            var b = [];
            for (var c in a) x.has(a, c) && b.push([c, a[c]]);
            return b }, x.invert = function(a) {
            var b = {};
            for (var c in a) x.has(a, c) && (b[a[c]] = c);
            return b }, x.functions = x.methods = function(a) {
            var b = [];
            for (var c in a) x.isFunction(a[c]) && b.push(c);
            return b.sort() }, x.extend = function(a) {
            return y(h.call(arguments, 1), function(b) {
                if (b)
                    for (var c in b) a[c] = b[c] }), a }, x.pick = function(a) {
            var b = {},
                c = i.apply(d, h.call(arguments, 1));
            return y(c, function(c) { c in a && (b[c] = a[c]) }), b }, x.omit = function(a) {
            var b = {},
                c = i.apply(d, h.call(arguments, 1));
            for (var e in a) x.contains(c, e) || (b[e] = a[e]);
            return b }, x.defaults = function(a) {
            return y(h.call(arguments, 1), function(b) {
                if (b)
                    for (var c in b) null == a[c] && (a[c] = b[c]) }), a }, x.clone = function(a) {
            return x.isObject(a) ? x.isArray(a) ? a.slice() : x.extend({}, a) : a }, x.tap = function(a, b) {
            return b(a), a };
        var E = function(a, b, c, d) {
            if (a === b) return 0 !== a || 1 / a == 1 / b;
            if (null == a || null == b) return a === b;
            a instanceof x && (a = a._wrapped), b instanceof x && (b = b._wrapped);
            var e = j.call(a);
            if (e != j.call(b)) return !1;
            switch (e) {
                case "[object String]":
                    return a == b + "";
                case "[object Number]":
                    return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;
                case "[object Date]":
                case "[object Boolean]":
                    return +a == +b;
                case "[object RegExp]":
                    return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase }
            if ("object" != typeof a || "object" != typeof b) return !1;
            for (var f = c.length; f--;)
                if (c[f] == a) return d[f] == b;
            c.push(a), d.push(b);
            var g = 0,
                h = !0;
            if ("[object Array]" == e) {
                if (g = a.length, h = g == b.length)
                    for (; g-- && (h = E(a[g], b[g], c, d));); } else {
                var i = a.constructor,
                    k = b.constructor;
                if (i !== k && !(x.isFunction(i) && i instanceof i && x.isFunction(k) && k instanceof k)) return !1;
                for (var l in a)
                    if (x.has(a, l) && (g++, !(h = x.has(b, l) && E(a[l], b[l], c, d)))) break;
                if (h) {
                    for (l in b)
                        if (x.has(b, l) && !g--) break;
                    h = !g } }
            return c.pop(), d.pop(), h };
        x.isEqual = function(a, b) {
            return E(a, b, [], []) }, x.isEmpty = function(a) {
            if (null == a) return !0;
            if (x.isArray(a) || x.isString(a)) return 0 === a.length;
            for (var b in a)
                if (x.has(a, b)) return !1;
            return !0 }, x.isElement = function(a) {
            return !(!a || 1 !== a.nodeType) }, x.isArray = u || function(a) {
            return "[object Array]" == j.call(a) }, x.isObject = function(a) {
            return a === Object(a) }, y(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(a) { x["is" + a] = function(b) {
                return j.call(b) == "[object " + a + "]" } }), x.isArguments(arguments) || (x.isArguments = function(a) {
            return !(!a || !x.has(a, "callee")) }), "function" != typeof /./ && (x.isFunction = function(a) {
            return "function" == typeof a }), x.isFinite = function(a) {
            return isFinite(a) && !isNaN(parseFloat(a)) }, x.isNaN = function(a) {
            return x.isNumber(a) && a != +a }, x.isBoolean = function(a) {
            return a === !0 || a === !1 || "[object Boolean]" == j.call(a) }, x.isNull = function(a) {
            return null === a }, x.isUndefined = function(a) {
            return void 0 === a }, x.has = function(a, b) {
            return k.call(a, b) }, x.noConflict = function() {
            return a._ = b, this }, x.identity = function(a) {
            return a }, x.times = function(a, b, c) {
            for (var d = Array(a), e = 0; a > e; e++) d[e] = b.call(c, e);
            return d }, x.random = function(a, b) {
            return null == b && (b = a, a = 0), a + Math.floor(Math.random() * (b - a + 1)) };
        var F = { escape: { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "/": "&#x2F;" } };
        F.unescape = x.invert(F.escape);
        var G = { escape: RegExp("[" + x.keys(F.escape).join("") + "]", "g"), unescape: RegExp("(" + x.keys(F.unescape).join("|") + ")", "g") };
        x.each(["escape", "unescape"], function(a) { x[a] = function(b) {
                return null == b ? "" : ("" + b).replace(G[a], function(b) {
                    return F[a][b] }) } }), x.result = function(a, b) {
            if (null == a) return null;
            var c = a[b];
            return x.isFunction(c) ? c.call(a) : c }, x.mixin = function(a) { y(x.functions(a), function(b) {
                var c = x[b] = a[b];
                x.prototype[b] = function() {
                    var a = [this._wrapped];
                    return g.apply(a, arguments), L.call(this, c.apply(x, a)) } }) };
        var H = 0;
        x.uniqueId = function(a) {
            var b = ++H + "";
            return a ? a + b : b }, x.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g };
        var I = /(.)^/,
            J = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "	": "t", "\u2028": "u2028", "\u2029": "u2029" },
            K = /\\|'|\r|\n|\t|\u2028|\u2029/g;
        x.template = function(a, b, c) {
            var d;
            c = x.defaults({}, c, x.templateSettings);
            var e = RegExp([(c.escape || I).source, (c.interpolate || I).source, (c.evaluate || I).source].join("|") + "|$", "g"),
                f = 0,
                g = "__p+='";
            a.replace(e, function(b, c, d, e, h) {
                return g += a.slice(f, h).replace(K, function(a) {
                    return "\\" + J[a] }), c && (g += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'"), d && (g += "'+\n((__t=(" + d + "))==null?'':__t)+\n'"), e && (g += "';\n" + e + "\n__p+='"), f = h + b.length, b }), g += "';\n", c.variable || (g = "with(obj||{}){\n" + g + "}\n"), g = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + g + "return __p;\n";
            try { d = Function(c.variable || "obj", "_", g) } catch (h) {
                throw h.source = g, h }
            if (b) return d(b, x);
            var i = function(a) {
                return d.call(this, a, x) };
            return i.source = "function(" + (c.variable || "obj") + "){\n" + g + "}", i }, x.chain = function(a) {
            return x(a).chain() };
        var L = function(a) {
            return this._chain ? x(a).chain() : a };
        x.mixin(x), y(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(a) {
            var b = d[a];
            x.prototype[a] = function() {
                var c = this._wrapped;
                return b.apply(c, arguments), "shift" != a && "splice" != a || 0 !== c.length || delete c[0], L.call(this, c) } }), y(["concat", "join", "slice"], function(a) {
            var b = d[a];
            x.prototype[a] = function() {
                return L.call(this, b.apply(this._wrapped, arguments)) } }), x.extend(x.prototype, { chain: function() {
                return this._chain = !0, this }, value: function() {
                return this._wrapped } })
    }.call(this), "object" != typeof JSON && (JSON = {}),
        function() { "use strict";

            function f(a) {
                return 10 > a ? "0" + a : a }

            function quote(a) {
                return escapable.lastIndex = 0, escapable.test(a) ? '"' + a.replace(escapable, function(a) {
                    var b = meta[a];
                    return "string" == typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4) }) + '"' : '"' + a + '"' }

            function str(a, b) {
                var c, d, e, f, g, h = gap,
                    i = b[a];
                switch (i && "object" == typeof i && "function" == typeof i.toJSON && (i = i.toJSON(a)), "function" == typeof rep && (i = rep.call(b, a, i)), typeof i) {
                    case "string":
                        return quote(i);
                    case "number":
                        return isFinite(i) ? String(i) : "null";
                    case "boolean":
                    case "null":
                        return String(i);
                    case "object":
                        if (!i) return "null";
                        if (gap += indent, g = [], "[object Array]" === Object.prototype.toString.apply(i)) {
                            for (f = i.length, c = 0; f > c; c += 1) g[c] = str(c, i) || "null";
                            return e = 0 === g.length ? "[]" : gap ? "[\n" + gap + g.join(",\n" + gap) + "\n" + h + "]" : "[" + g.join(",") + "]", gap = h, e }
                        if (rep && "object" == typeof rep)
                            for (f = rep.length, c = 0; f > c; c += 1) "string" == typeof rep[c] && (d = rep[c], e = str(d, i), e && g.push(quote(d) + (gap ? ": " : ":") + e));
                        else
                            for (d in i) Object.prototype.hasOwnProperty.call(i, d) && (e = str(d, i), e && g.push(quote(d) + (gap ? ": " : ":") + e));
                        return e = 0 === g.length ? "{}" : gap ? "{\n" + gap + g.join(",\n" + gap) + "\n" + h + "}" : "{" + g.join(",") + "}", gap = h, e } } "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function(a) {
                return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function(a) {
                return this.valueOf() });
            var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                gap, indent, meta = { "\b": "\\b", "	": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" },
                rep; "function" != typeof JSON.stringify && (JSON.stringify = function(a, b, c) {
                var d;
                if (gap = "", indent = "", "number" == typeof c)
                    for (d = 0; c > d; d += 1) indent += " ";
                else "string" == typeof c && (indent = c);
                if (rep = b, b && "function" != typeof b && ("object" != typeof b || "number" != typeof b.length)) throw new Error("JSON.stringify");
                return str("", { "": a }) }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
                function walk(a, b) {
                    var c, d, e = a[b];
                    if (e && "object" == typeof e)
                        for (c in e) Object.prototype.hasOwnProperty.call(e, c) && (d = walk(e, c), void 0 !== d ? e[c] = d : delete e[c]);
                    return reviver.call(a, b, e) }
                var j;
                if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(a) {
                        return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4) })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({ "": j }, "") : j;
                throw new SyntaxError("JSON.parse") }) }(),
        function() {
            var a, b = this,
                c = b.Backbone,
                d = Array.prototype.slice,
                e = Array.prototype.splice;
            a = "undefined" != typeof exports ? exports : b.Backbone = {}, a.VERSION = "0.9.2";
            var f = b._;
            f || "undefined" == typeof require || (f = require("underscore"));
            var g = b.jQuery || b.Zepto || b.ender;
            a.setDomLibrary = function(a) { g = a }, a.noConflict = function() {
                return b.Backbone = c, this }, a.emulateHTTP = !1, a.emulateJSON = !1;
            var h = /\s+/,
                i = a.Events = { on: function(a, b, c) {
                        var d, e, f, g, i;
                        if (!b) return this;
                        for (a = a.split(h), d = this._callbacks || (this._callbacks = {}); e = a.shift();) i = d[e], f = i ? i.tail : {}, f.next = g = {}, f.context = c, f.callback = b, d[e] = { tail: g, next: i ? i.next : f };
                        return this }, off: function(a, b, c) {
                        var d, e, g, i, j, k;
                        if (e = this._callbacks) {
                            if (!(a || b || c)) return delete this._callbacks, this;
                            for (a = a ? a.split(h) : f.keys(e); d = a.shift();)
                                if (g = e[d], delete e[d], g && (b || c))
                                    for (i = g.tail;
                                        (g = g.next) !== i;) j = g.callback, k = g.context, (b && j !== b || c && k !== c) && this.on(d, j, k);
                            return this } }, trigger: function(a) {
                        var b, c, e, f, g, i, j;
                        if (!(e = this._callbacks)) return this;
                        for (i = e.all, a = a.split(h), j = d.call(arguments, 1); b = a.shift();) {
                            if (c = e[b])
                                for (f = c.tail;
                                    (c = c.next) !== f;) c.callback.apply(c.context || this, j);
                            if (c = i)
                                for (f = c.tail, g = [b].concat(j);
                                    (c = c.next) !== f;) c.callback.apply(c.context || this, g) }
                        return this } };
            i.bind = i.on, i.unbind = i.off;
            var j = a.Model = function(a, b) {
                var c;
                a || (a = {}), b && b.parse && (a = this.parse(a)), (c = A(this, "defaults")) && (a = f.extend({}, c, a)), b && b.collection && (this.collection = b.collection), this.attributes = {}, this._escapedAttributes = {}, this.cid = f.uniqueId("c"), this.changed = {}, this._silent = {}, this._pending = {}, this.set(a, { silent: !0 }), this.changed = {}, this._silent = {}, this._pending = {}, this._previousAttributes = f.clone(this.attributes), this.initialize.apply(this, arguments) };
            f.extend(j.prototype, i, { changed: null, _silent: null, _pending: null, idAttribute: "id", initialize: function() {}, toJSON: function(a) {
                    return f.clone(this.attributes) }, get: function(a) {
                    return this.attributes[a] }, escape: function(a) {
                    var b;
                    if (b = this._escapedAttributes[a]) return b;
                    var c = this.get(a);
                    return this._escapedAttributes[a] = f.escape(null == c ? "" : "" + c) }, has: function(a) {
                    return null != this.get(a) }, set: function(a, b, c) {
                    var d, e, g;
                    if (f.isObject(a) || null == a ? (d = a, c = b) : (d = {}, d[a] = b), c || (c = {}), !d) return this;
                    if (d instanceof j && (d = d.attributes), c.unset)
                        for (e in d) d[e] = void 0;
                    if (!this._validate(d, c)) return !1;
                    this.idAttribute in d && (this.id = d[this.idAttribute]);
                    var h = c.changes = {},
                        i = this.attributes,
                        k = this._escapedAttributes,
                        l = this._previousAttributes || {};
                    for (e in d) g = d[e], (!f.isEqual(i[e], g) || c.unset && f.has(i, e)) && (delete k[e], (c.silent ? this._silent : h)[e] = !0), c.unset ? delete i[e] : i[e] = g, f.isEqual(l[e], g) && f.has(i, e) == f.has(l, e) ? (delete this.changed[e], delete this._pending[e]) : (this.changed[e] = g, c.silent || (this._pending[e] = !0));
                    return c.silent || this.change(c), this }, unset: function(a, b) {
                    return (b || (b = {})).unset = !0, this.set(a, null, b) }, clear: function(a) {
                    return (a || (a = {})).unset = !0, this.set(f.clone(this.attributes), a) }, fetch: function(b) { b = b ? f.clone(b) : {};
                    var c = this,
                        d = b.success;
                    return b.success = function(a, e, f) {
                        return c.set(c.parse(a, f), b) ? void(d && d(c, a)) : !1 }, b.error = a.wrapError(b.error, c, b), (this.sync || a.sync).call(this, "read", this, b) }, save: function(b, c, d) {
                    var e, g;
                    if (f.isObject(b) || null == b ? (e = b, d = c) : (e = {}, e[b] = c), d = d ? f.clone(d) : {}, d.wait) {
                        if (!this._validate(e, d)) return !1;
                        g = f.clone(this.attributes) }
                    var h = f.extend({}, d, { silent: !0 });
                    if (e && !this.set(e, d.wait ? h : d)) return !1;
                    var i = this,
                        j = d.success;
                    d.success = function(a, b, c) {
                        var g = i.parse(a, c);
                        return d.wait && (delete d.wait, g = f.extend(e || {}, g)), i.set(g, d) ? void(j ? j(i, a) : i.trigger("sync", i, a, d)) : !1 }, d.error = a.wrapError(d.error, i, d);
                    var k = this.isNew() ? "create" : "update",
                        l = (this.sync || a.sync).call(this, k, this, d);
                    return d.wait && this.set(g, h), l }, destroy: function(b) { b = b ? f.clone(b) : {};
                    var c = this,
                        d = b.success,
                        e = function() { c.trigger("destroy", c, c.collection, b) };
                    if (this.isNew()) return e(), !1;
                    b.success = function(a) { b.wait && e(), d ? d(c, a) : c.trigger("sync", c, a, b) }, b.error = a.wrapError(b.error, c, b);
                    var g = (this.sync || a.sync).call(this, "delete", this, b);
                    return b.wait || e(), g }, url: function() {
                    var a = A(this, "urlRoot") || A(this.collection, "url") || B();
                    return this.isNew() ? a : a + ("/" == a.charAt(a.length - 1) ? "" : "/") + encodeURIComponent(this.id) }, parse: function(a, b) {
                    return a }, clone: function() {
                    return new this.constructor(this.attributes) }, isNew: function() {
                    return null == this.id }, change: function(a) { a || (a = {});
                    var b = this._changing;
                    this._changing = !0;
                    for (var c in this._silent) this._pending[c] = !0;
                    var d = f.extend({}, a.changes, this._silent);
                    this._silent = {};
                    for (var c in d) this.trigger("change:" + c, this, this.get(c), a);
                    if (b) return this;
                    for (; !f.isEmpty(this._pending);) { this._pending = {}, this.trigger("change", this, a);
                        for (var c in this.changed) this._pending[c] || this._silent[c] || delete this.changed[c];
                        this._previousAttributes = f.clone(this.attributes) }
                    return this._changing = !1, this }, hasChanged: function(a) {
                    return arguments.length ? f.has(this.changed, a) : !f.isEmpty(this.changed) }, changedAttributes: function(a) {
                    if (!a) return this.hasChanged() ? f.clone(this.changed) : !1;
                    var b, c = !1,
                        d = this._previousAttributes;
                    for (var e in a) f.isEqual(d[e], b = a[e]) || ((c || (c = {}))[e] = b);
                    return c }, previous: function(a) {
                    return arguments.length && this._previousAttributes ? this._previousAttributes[a] : null }, previousAttributes: function() {
                    return f.clone(this._previousAttributes) }, isValid: function() {
                    return !this.validate(this.attributes) }, _validate: function(a, b) {
                    if (b.silent || !this.validate) return !0;
                    a = f.extend({}, this.attributes, a);
                    var c = this.validate(a, b);
                    return c ? (b && b.error ? b.error(this, c, b) : this.trigger("error", this, c, b), !1) : !0 } });
            var k = a.Collection = function(a, b) { b || (b = {}), b.model && (this.model = b.model), b.comparator && (this.comparator = b.comparator), this._reset(), this.initialize.apply(this, arguments), a && this.reset(a, { silent: !0, parse: b.parse }) };
            f.extend(k.prototype, i, { model: j, initialize: function() {}, toJSON: function(a) {
                    return this.map(function(b) {
                        return b.toJSON(a) }) }, add: function(a, b) {
                    var c, d, g, h, i, j, k = {},
                        l = {},
                        m = [];
                    for (b || (b = {}), a = f.isArray(a) ? a.slice() : [a], c = 0, g = a.length; g > c; c++) {
                        if (!(h = a[c] = this._prepareModel(a[c], b))) throw new Error("Can't add an invalid model to a collection");
                        i = h.cid, j = h.id, k[i] || this._byCid[i] || null != j && (l[j] || this._byId[j]) ? m.push(c) : k[i] = l[j] = h }
                    for (c = m.length; c--;) a.splice(m[c], 1);
                    for (c = 0, g = a.length; g > c; c++)(h = a[c]).on("all", this._onModelEvent, this), this._byCid[h.cid] = h, null != h.id && (this._byId[h.id] = h);
                    if (this.length += g, d = null != b.at ? b.at : this.models.length, e.apply(this.models, [d, 0].concat(a)), this.comparator && this.sort({ silent: !0 }), b.silent) return this;
                    for (c = 0, g = this.models.length; g > c; c++) k[(h = this.models[c]).cid] && (b.index = c, h.trigger("add", h, this, b));
                    return this }, remove: function(a, b) {
                    var c, d, e, g;
                    for (b || (b = {}), a = f.isArray(a) ? a.slice() : [a], c = 0, d = a.length; d > c; c++) g = this.getByCid(a[c]) || this.get(a[c]), g && (delete this._byId[g.id], delete this._byCid[g.cid], e = this.indexOf(g), this.models.splice(e, 1), this.length--, b.silent || (b.index = e, g.trigger("remove", g, this, b)), this._removeReference(g));
                    return this }, push: function(a, b) {
                    return a = this._prepareModel(a, b), this.add(a, b), a }, pop: function(a) {
                    var b = this.at(this.length - 1);
                    return this.remove(b, a), b }, unshift: function(a, b) {
                    return a = this._prepareModel(a, b), this.add(a, f.extend({ at: 0 }, b)), a }, shift: function(a) {
                    var b = this.at(0);
                    return this.remove(b, a), b }, get: function(a) {
                    return null == a ? void 0 : this._byId[null != a.id ? a.id : a] }, getByCid: function(a) {
                    return a && this._byCid[a.cid || a] }, at: function(a) {
                    return this.models[a] }, where: function(a) {
                    return f.isEmpty(a) ? [] : this.filter(function(b) {
                        for (var c in a)
                            if (a[c] !== b.get(c)) return !1;
                        return !0 }) }, sort: function(a) {
                    if (a || (a = {}), !this.comparator) throw new Error("Cannot sort a set without a comparator");
                    var b = f.bind(this.comparator, this);
                    return 1 == this.comparator.length ? this.models = this.sortBy(b) : this.models.sort(b), a.silent || this.trigger("reset", this, a), this }, pluck: function(a) {
                    return f.map(this.models, function(b) {
                        return b.get(a) }) }, reset: function(a, b) { a || (a = []), b || (b = {});
                    for (var c = 0, d = this.models.length; d > c; c++) this._removeReference(this.models[c]);
                    return this._reset(), this.add(a, f.extend({ silent: !0 }, b)), b.silent || this.trigger("reset", this, b), this }, fetch: function(b) { b = b ? f.clone(b) : {}, void 0 === b.parse && (b.parse = !0);
                    var c = this,
                        d = b.success;
                    return b.success = function(a, e, f) { c[b.add ? "add" : "reset"](c.parse(a, f), b), d && d(c, a) }, b.error = a.wrapError(b.error, c, b), (this.sync || a.sync).call(this, "read", this, b) }, create: function(a, b) {
                    var c = this;
                    if (b = b ? f.clone(b) : {}, a = this._prepareModel(a, b), !a) return !1;
                    b.wait || c.add(a, b);
                    var d = b.success;
                    return b.success = function(e, f, g) { b.wait && c.add(e, b), d ? d(e, f) : e.trigger("sync", a, f, b) }, a.save(null, b), a }, parse: function(a, b) {
                    return a }, chain: function() {
                    return f(this.models).chain() }, _reset: function(a) { this.length = 0, this.models = [], this._byId = {}, this._byCid = {} }, _prepareModel: function(a, b) {
                    if (b || (b = {}), a instanceof j) a.collection || (a.collection = this);
                    else {
                        var c = a;
                        b.collection = this, a = new this.model(c, b), a._validate(a.attributes, b) || (a = !1) }
                    return a }, _removeReference: function(a) { this == a.collection && delete a.collection, a.off("all", this._onModelEvent, this) }, _onModelEvent: function(a, b, c, d) {
                    ("add" != a && "remove" != a || c == this) && ("destroy" == a && this.remove(b, d), b && a === "change:" + b.idAttribute && (delete this._byId[b.previous(b.idAttribute)], this._byId[b.id] = b), this.trigger.apply(this, arguments)) } });
            var l = ["forEach", "each", "map", "reduce", "reduceRight", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "sortBy", "sortedIndex", "toArray", "size", "first", "initial", "rest", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "groupBy"];
            f.each(l, function(a) { k.prototype[a] = function() {
                    return f[a].apply(f, [this.models].concat(f.toArray(arguments))) } });
            var m = a.Router = function(a) { a || (a = {}), a.routes && (this.routes = a.routes), this._bindRoutes(), this.initialize.apply(this, arguments) },
                n = /:\w+/g,
                o = /\*\w+/g,
                p = /[-[\]{}()+?.,\\^$|#\s]/g;
            f.extend(m.prototype, i, { initialize: function() {}, route: function(b, c, d) {
                    return a.history || (a.history = new q), f.isRegExp(b) || (b = this._routeToRegExp(b)), d || (d = this[c]), a.history.route(b, f.bind(function(e) {
                        var f = this._extractParameters(b, e);
                        d && d.apply(this, f), this.trigger.apply(this, ["route:" + c].concat(f)), a.history.trigger("route", this, c, f) }, this)), this }, navigate: function(b, c) { a.history.navigate(b, c) }, _bindRoutes: function() {
                    if (this.routes) {
                        var a = [];
                        for (var b in this.routes) a.unshift([b, this.routes[b]]);
                        for (var c = 0, d = a.length; d > c; c++) this.route(a[c][0], a[c][1], this[a[c][1]]) } }, _routeToRegExp: function(a) {
                    return a = a.replace(p, "\\$&").replace(n, "([^/]+)").replace(o, "(.*?)"), new RegExp("^" + a + "$") }, _extractParameters: function(a, b) {
                    return a.exec(b).slice(1) } });
            var q = a.History = function() { this.handlers = [], f.bindAll(this, "checkUrl") },
                r = /^[#\/]/,
                s = /msie [\w.]+/;
            q.started = !1, f.extend(q.prototype, i, { interval: 50, getHash: function(a) {
                    var b = a ? a.location : window.location,
                        c = b.href.match(/#(.*)$/);
                    return c ? c[1] : "" }, getFragment: function(a, b) {
                    if (null == a)
                        if (this._hasPushState || b) { a = window.location.pathname;
                            var c = window.location.search;
                            c && (a += c) } else a = this.getHash();
                    return a.indexOf(this.options.root) || (a = a.substr(this.options.root.length)), a.replace(r, "") }, start: function(a) {
                    if (q.started) throw new Error("Backbone.history has already been started");
                    q.started = !0, this.options = f.extend({}, { root: "/" }, this.options, a), this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && window.history && window.history.pushState);
                    var b = this.getFragment(),
                        c = document.documentMode,
                        d = s.exec(navigator.userAgent.toLowerCase()) && (!c || 7 >= c);
                    d && (this.iframe = g('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(b)), this._hasPushState ? g(window).bind("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !d ? g(window).bind("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = b;
                    var e = window.location,
                        h = e.pathname == this.options.root;
                    return this._wantsHashChange && this._wantsPushState && !this._hasPushState && !h ? (this.fragment = this.getFragment(null, !0), window.location.replace(this.options.root + "#" + this.fragment), !0) : (this._wantsPushState && this._hasPushState && h && e.hash && (this.fragment = this.getHash().replace(r, ""), window.history.replaceState({}, document.title, e.protocol + "//" + e.host + this.options.root + this.fragment)), this.options.silent ? void 0 : this.loadUrl()) }, stop: function() { g(window).unbind("popstate", this.checkUrl).unbind("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), q.started = !1 }, route: function(a, b) { this.handlers.unshift({ route: a, callback: b }) }, checkUrl: function(a) {
                    var b = this.getFragment();
                    return b == this.fragment && this.iframe && (b = this.getFragment(this.getHash(this.iframe))), b == this.fragment ? !1 : (this.iframe && this.navigate(b), void(this.loadUrl() || this.loadUrl(this.getHash()))) }, loadUrl: function(a) {
                    var b = this.fragment = this.getFragment(a),
                        c = f.any(this.handlers, function(a) {
                            return a.route.test(b) ? (a.callback(b), !0) : void 0 });
                    return c }, navigate: function(a, b) {
                    if (!q.started) return !1;
                    b && b !== !0 || (b = { trigger: b });
                    var c = (a || "").replace(r, "");
                    this.fragment != c && (this._hasPushState ? (0 != c.indexOf(this.options.root) && (c = this.options.root + c), this.fragment = c, window.history[b.replace ? "replaceState" : "pushState"]({}, document.title, c)) : this._wantsHashChange ? (this.fragment = c, this._updateHash(window.location, c, b.replace), this.iframe && c != this.getFragment(this.getHash(this.iframe)) && (b.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, c, b.replace))) : window.location.assign(this.options.root + a), b.trigger && this.loadUrl(a)) }, _updateHash: function(a, b, c) { c ? a.replace(a.toString().replace(/(javascript:|#).*$/, "") + "#" + b) : a.hash = b } });
            var t = a.View = function(a) { this.cid = f.uniqueId("view"), this._configure(a || {}), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents() },
                u = /^(\S+)\s*(.*)$/,
                v = ["model", "collection", "el", "id", "attributes", "className", "tagName"];
            f.extend(t.prototype, i, { tagName: "div", $: function(a) {
                    return this.$el.find(a) }, initialize: function() {}, render: function() {
                    return this }, remove: function() {
                    return this.$el.remove(), this }, make: function(a, b, c) {
                    var d = document.createElement(a);
                    return b && g(d).attr(b), c && g(d).html(c), d }, setElement: function(a, b) {
                    return this.$el && this.undelegateEvents(), this.$el = a instanceof g ? a : g(a), this.el = this.$el[0], b !== !1 && this.delegateEvents(), this }, delegateEvents: function(a) {
                    if (a || (a = A(this, "events"))) { this.undelegateEvents();
                        for (var b in a) {
                            var c = a[b];
                            if (f.isFunction(c) || (c = this[a[b]]), !c) throw new Error('Method "' + a[b] + '" does not exist');
                            var d = b.match(u),
                                e = d[1],
                                g = d[2];
                            c = f.bind(c, this), e += ".delegateEvents" + this.cid, "" === g ? this.$el.bind(e, c) : this.$el.delegate(g, e, c) } } }, undelegateEvents: function() { this.$el.unbind(".delegateEvents" + this.cid) }, _configure: function(a) { this.options && (a = f.extend({}, this.options, a));
                    for (var b = 0, c = v.length; c > b; b++) {
                        var d = v[b];
                        a[d] && (this[d] = a[d]) }
                    this.options = a }, _ensureElement: function() {
                    if (this.el) this.setElement(this.el, !1);
                    else {
                        var a = A(this, "attributes") || {};
                        this.id && (a.id = this.id), this.className && (a["class"] = this.className), this.setElement(this.make(this.tagName, a), !1) } } });
            var w = function(a, b) {
                var c = z(this, a, b);
                return c.extend = this.extend, c };
            j.extend = k.extend = m.extend = t.extend = w;
            var x = { create: "POST", update: "PUT", "delete": "DELETE", read: "GET" };
            a.sync = function(b, c, d) {
                var e = x[b];
                d || (d = {});
                var h = { type: e, dataType: "json" };
                return d.url || (h.url = A(c, "url") || B()), d.data || !c || "create" != b && "update" != b || (h.contentType = "application/json", h.data = JSON.stringify(c.toJSON())), a.emulateJSON && (h.contentType = "application/x-www-form-urlencoded", h.data = h.data ? { model: h.data } : {}), a.emulateHTTP && ("PUT" === e || "DELETE" === e) && (a.emulateJSON && (h.data._method = e), h.type = "POST", h.beforeSend = function(a) { a.setRequestHeader("X-HTTP-Method-Override", e) }), "GET" === h.type || a.emulateJSON || (h.processData = !1), g.ajax(f.extend(h, d)) }, a.wrapError = function(a, b, c) {
                return function(d, e) { e = d === b ? e : d, a ? a(b, e, c) : b.trigger("error", b, e, c) } };
            var y = function() {},
                z = function(a, b, c) {
                    var d;
                    return d = b && b.hasOwnProperty("constructor") ? b.constructor : function() { a.apply(this, arguments) }, f.extend(d, a), y.prototype = a.prototype, d.prototype = new y, b && f.extend(d.prototype, b), c && f.extend(d, c), d.prototype.constructor = d, d.__super__ = a.prototype, d },
                A = function(a, b) {
                    return a && a[b] ? f.isFunction(a[b]) ? a[b]() : a[b] : null },
                B = function() {
                    throw new Error('A "url" property or function must be specified') } }.call(this),
        function(a, b) { "object" == typeof exports && exports ? b(exports) : "function" == typeof define && define.amd ? define(["exports"], b) : b(a.Mustache = {}) }(this, function(a) {
            function b(a) {
                return "function" == typeof a }

            function c(a) {
                return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&") }

            function d(a, b) {
                return o.call(a, b) }

            function e(a) {
                return !d(p, a) }

            function f(a) {
                return String(a).replace(/[&<>"'\/]/g, function(a) {
                    return q[a] }) }

            function g(b, d) {
                function f() {
                    if (w && !x)
                        for (; q.length;) delete p[q.pop()];
                    else q = [];
                    w = !1, x = !1 }

                function g(a) {
                    if ("string" == typeof a && (a = a.split(s, 2)), !n(a) || 2 !== a.length) throw new Error("Invalid tags: " + a);
                    k = new RegExp(c(a[0]) + "\\s*"), l = new RegExp("\\s*" + c(a[1])), m = new RegExp("\\s*" + c("}" + a[1])) }
                if (!b) return [];
                var k, l, m, o = [],
                    p = [],
                    q = [],
                    w = !1,
                    x = !1;
                g(d || a.tags);
                for (var y, z, A, B, C, D, E = new j(b); !E.eos();) {
                    if (y = E.pos, A = E.scanUntil(k))
                        for (var F = 0, G = A.length; G > F; ++F) B = A.charAt(F), e(B) ? q.push(p.length) : x = !0, p.push(["text", B, y, y + 1]), y += 1, "\n" === B && f();
                    if (!E.scan(k)) break;
                    if (w = !0, z = E.scan(v) || "name", E.scan(r), "=" === z ? (A = E.scanUntil(t), E.scan(t), E.scanUntil(l)) : "{" === z ? (A = E.scanUntil(m), E.scan(u), E.scanUntil(l), z = "&") : A = E.scanUntil(l), !E.scan(l)) throw new Error("Unclosed tag at " + E.pos);
                    if (C = [z, A, y, E.pos], p.push(C), "#" === z || "^" === z) o.push(C);
                    else if ("/" === z) {
                        if (D = o.pop(), !D) throw new Error('Unopened section "' + A + '" at ' + y);
                        if (D[1] !== A) throw new Error('Unclosed section "' + D[1] + '" at ' + y) } else "name" === z || "{" === z || "&" === z ? x = !0 : "=" === z && g(A)
                }
                if (D = o.pop()) throw new Error('Unclosed section "' + D[1] + '" at ' + E.pos);
                return i(h(p))
            }

            function h(a) {
                for (var b, c, d = [], e = 0, f = a.length; f > e; ++e) b = a[e], b && ("text" === b[0] && c && "text" === c[0] ? (c[1] += b[1], c[3] = b[3]) : (d.push(b), c = b));
                return d }

            function i(a) {
                for (var b, c, d = [], e = d, f = [], g = 0, h = a.length; h > g; ++g) switch (b = a[g], b[0]) {
                    case "#":
                    case "^":
                        e.push(b), f.push(b), e = b[4] = [];
                        break;
                    case "/":
                        c = f.pop(), c[5] = b[2], e = f.length > 0 ? f[f.length - 1][4] : d;
                        break;
                    default:
                        e.push(b) }
                return d }

            function j(a) { this.string = a, this.tail = a, this.pos = 0 }

            function k(a, b) { this.view = null == a ? {} : a, this.cache = { ".": this.view }, this.parent = b }

            function l() { this.cache = {} }
            var m = Object.prototype.toString,
                n = Array.isArray || function(a) {
                    return "[object Array]" === m.call(a) },
                o = RegExp.prototype.test,
                p = /\S/,
                q = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;" },
                r = /\s*/,
                s = /\s+/,
                t = /\s*=/,
                u = /\s*\}/,
                v = /#|\^|\/|>|\{|&|=|!/;
            j.prototype.eos = function() {
                return "" === this.tail }, j.prototype.scan = function(a) {
                var b = this.tail.match(a);
                if (!b || 0 !== b.index) return "";
                var c = b[0];
                return this.tail = this.tail.substring(c.length), this.pos += c.length, c }, j.prototype.scanUntil = function(a) {
                var b, c = this.tail.search(a);
                switch (c) {
                    case -1:
                        b = this.tail, this.tail = "";
                        break;
                    case 0:
                        b = "";
                        break;
                    default:
                        b = this.tail.substring(0, c), this.tail = this.tail.substring(c) }
                return this.pos += b.length, b }, k.prototype.push = function(a) {
                return new k(a, this) }, k.prototype.lookup = function(a) {
                var c, d = this.cache;
                if (a in d) c = d[a];
                else {
                    for (var e, f, g = this; g;) {
                        if (a.indexOf(".") > 0)
                            for (c = g.view, e = a.split("."), f = 0; null != c && f < e.length;) c = c[e[f++]];
                        else "object" == typeof g.view && (c = g.view[a]);
                        if (null != c) break;
                        g = g.parent }
                    d[a] = c }
                return b(c) && (c = c.call(this.view)), c }, l.prototype.clearCache = function() { this.cache = {} }, l.prototype.parse = function(a, b) {
                var c = this.cache,
                    d = c[a];
                return null == d && (d = c[a] = g(a, b)), d }, l.prototype.render = function(a, b, c) {
                var d = this.parse(a),
                    e = b instanceof k ? b : new k(b);
                return this.renderTokens(d, e, c, a) }, l.prototype.renderTokens = function(a, b, c, d) {
                for (var e, f, g, h = "", i = 0, j = a.length; j > i; ++i) g = void 0, e = a[i], f = e[0], "#" === f ? g = this._renderSection(e, b, c, d) : "^" === f ? g = this._renderInverted(e, b, c, d) : ">" === f ? g = this._renderPartial(e, b, c, d) : "&" === f ? g = this._unescapedValue(e, b) : "name" === f ? g = this._escapedValue(e, b) : "text" === f && (g = this._rawValue(e)), void 0 !== g && (h += g);
                return h }, l.prototype._renderSection = function(a, c, d, e) {
                function f(a) {
                    return g.render(a, c, d) }
                var g = this,
                    h = "",
                    i = c.lookup(a[1]);
                if (i) {
                    if (n(i))
                        for (var j = 0, k = i.length; k > j; ++j) h += this.renderTokens(a[4], c.push(i[j]), d, e);
                    else if ("object" == typeof i || "string" == typeof i) h += this.renderTokens(a[4], c.push(i), d, e);
                    else if (b(i)) {
                        if ("string" != typeof e) throw new Error("Cannot use higher-order sections without the original template");
                        i = i.call(c.view, e.slice(a[3], a[5]), f), null != i && (h += i) } else h += this.renderTokens(a[4], c, d, e);
                    return h } }, l.prototype._renderInverted = function(a, b, c, d) {
                var e = b.lookup(a[1]);
                return !e || n(e) && 0 === e.length ? this.renderTokens(a[4], b, c, d) : void 0 }, l.prototype._renderPartial = function(a, c, d) {
                if (d) {
                    var e = b(d) ? d(a[1]) : d[a[1]];
                    return null != e ? this.renderTokens(this.parse(e), c, d, e) : void 0 } }, l.prototype._unescapedValue = function(a, b) {
                var c = b.lookup(a[1]);
                return null != c ? c : void 0 }, l.prototype._escapedValue = function(b, c) {
                var d = c.lookup(b[1]);
                return null != d ? a.escape(d) : void 0 }, l.prototype._rawValue = function(a) {
                return a[1] }, a.name = "mustache.js", a.version = "1.1.0", a.tags = ["{{", "}}"];
            var w = new l;
            a.clearCache = function() {
                return w.clearCache() }, a.parse = function(a, b) {
                return w.parse(a, b) }, a.render = function(a, b, c) {
                return w.render(a, b, c) }, a.to_html = function(c, d, e, f) {
                var g = a.render(c, d, e);
                return b(f) ? void f(g) : g }, a.escape = f, a.Scanner = j, a.Context = k, a.Writer = l
        }),
        function(a, b, c) {
            var d = a.L,
                e = {};
            e.version = "0.7.3", "object" == typeof module && "object" == typeof module.exports ? module.exports = e : "function" == typeof define && define.amd && define(e), e.noConflict = function() {
                    return a.L = d, this }, a.L = e, e.Util = { extend: function(a) {
                        var b, c, d, e, f = Array.prototype.slice.call(arguments, 1);
                        for (c = 0, d = f.length; d > c; c++) { e = f[c] || {};
                            for (b in e) e.hasOwnProperty(b) && (a[b] = e[b]) }
                        return a }, bind: function(a, b) {
                        var c = arguments.length > 2 ? Array.prototype.slice.call(arguments, 2) : null;
                        return function() {
                            return a.apply(b, c || arguments) } }, stamp: function() {
                        var a = 0,
                            b = "_leaflet_id";
                        return function(c) {
                            return c[b] = c[b] || ++a, c[b] } }(), invokeEach: function(a, b, c) {
                        var d, e;
                        if ("object" == typeof a) { e = Array.prototype.slice.call(arguments, 3);
                            for (d in a) b.apply(c, [d, a[d]].concat(e));
                            return !0 }
                        return !1 }, limitExecByInterval: function(a, b, c) {
                        var d, e;
                        return function f() {
                            var g = arguments;
                            return d ? void(e = !0) : (d = !0, setTimeout(function() { d = !1, e && (f.apply(c, g), e = !1) }, b), void a.apply(c, g)) } }, falseFn: function() {
                        return !1 }, formatNum: function(a, b) {
                        var c = Math.pow(10, b || 5);
                        return Math.round(a * c) / c }, trim: function(a) {
                        return a.trim ? a.trim() : a.replace(/^\s+|\s+$/g, "") }, splitWords: function(a) {
                        return e.Util.trim(a).split(/\s+/) }, setOptions: function(a, b) {
                        return a.options = e.extend({}, a.options, b), a.options }, getParamString: function(a, b, c) {
                        var d = [];
                        for (var e in a) d.push(encodeURIComponent(c ? e.toUpperCase() : e) + "=" + encodeURIComponent(a[e]));
                        return (b && -1 !== b.indexOf("?") ? "&" : "?") + d.join("&") }, template: function(a, b) {
                        return a.replace(/\{ *([\w_]+) *\}/g, function(a, d) {
                            var e = b[d];
                            if (e === c) throw new Error("No value provided for variable " + a);
                            return "function" == typeof e && (e = e(b)), e }) }, isArray: Array.isArray || function(a) {
                        return "[object Array]" === Object.prototype.toString.call(a) }, emptyImageUrl: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" },
                function() {
                    function b(b) {
                        var c, d, e = ["webkit", "moz", "o", "ms"];
                        for (c = 0; c < e.length && !d; c++) d = a[e[c] + b];
                        return d }

                    function c(b) {
                        var c = +new Date,
                            e = Math.max(0, 16 - (c - d));
                        return d = c + e, a.setTimeout(b, e) }
                    var d = 0,
                        f = a.requestAnimationFrame || b("RequestAnimationFrame") || c,
                        g = a.cancelAnimationFrame || b("CancelAnimationFrame") || b("CancelRequestAnimationFrame") || function(b) { a.clearTimeout(b) };
                    e.Util.requestAnimFrame = function(b, d, g, h) {
                        return b = e.bind(b, d), g && f === c ? void b() : f.call(a, b, h) }, e.Util.cancelAnimFrame = function(b) { b && g.call(a, b) } }(), e.extend = e.Util.extend, e.bind = e.Util.bind, e.stamp = e.Util.stamp, e.setOptions = e.Util.setOptions, e.Class = function() {}, e.Class.extend = function(a) {
                    var b = function() { this.initialize && this.initialize.apply(this, arguments), this._initHooks && this.callInitHooks() },
                        c = function() {};
                    c.prototype = this.prototype;
                    var d = new c;
                    d.constructor = b, b.prototype = d;
                    for (var f in this) this.hasOwnProperty(f) && "prototype" !== f && (b[f] = this[f]);
                    a.statics && (e.extend(b, a.statics), delete a.statics), a.includes && (e.Util.extend.apply(null, [d].concat(a.includes)), delete a.includes), a.options && d.options && (a.options = e.extend({}, d.options, a.options)), e.extend(d, a), d._initHooks = [];
                    var g = this;
                    return b.__super__ = g.prototype, d.callInitHooks = function() {
                        if (!this._initHooksCalled) { g.prototype.callInitHooks && g.prototype.callInitHooks.call(this), this._initHooksCalled = !0;
                            for (var a = 0, b = d._initHooks.length; b > a; a++) d._initHooks[a].call(this) } }, b }, e.Class.include = function(a) { e.extend(this.prototype, a) }, e.Class.mergeOptions = function(a) { e.extend(this.prototype.options, a) }, e.Class.addInitHook = function(a) {
                    var b = Array.prototype.slice.call(arguments, 1),
                        c = "function" == typeof a ? a : function() { this[a].apply(this, b) };
                    this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(c) };
            var f = "_leaflet_events";
            e.Mixin = {}, e.Mixin.Events = { addEventListener: function(a, b, c) {
                        if (e.Util.invokeEach(a, this.addEventListener, this, b, c)) return this;
                        var d, g, h, i, j, k, l, m = this[f] = this[f] || {},
                            n = c && c !== this && e.stamp(c);
                        for (a = e.Util.splitWords(a), d = 0, g = a.length; g > d; d++) h = { action: b, context: c || this }, i = a[d], n ? (j = i + "_idx", k = j + "_len", l = m[j] = m[j] || {}, l[n] || (l[n] = [], m[k] = (m[k] || 0) + 1), l[n].push(h)) : (m[i] = m[i] || [], m[i].push(h));
                        return this }, hasEventListeners: function(a) {
                        var b = this[f];
                        return !!b && (a in b && b[a].length > 0 || a + "_idx" in b && b[a + "_idx_len"] > 0) }, removeEventListener: function(a, b, c) {
                        if (!this[f]) return this;
                        if (!a) return this.clearAllEventListeners();
                        if (e.Util.invokeEach(a, this.removeEventListener, this, b, c)) return this;
                        var d, g, h, i, j, k, l, m, n, o = this[f],
                            p = c && c !== this && e.stamp(c);
                        for (a = e.Util.splitWords(a), d = 0, g = a.length; g > d; d++)
                            if (h = a[d], k = h + "_idx", l = k + "_len", m = o[k], b) {
                                if (i = p && m ? m[p] : o[h]) {
                                    for (j = i.length - 1; j >= 0; j--) i[j].action !== b || c && i[j].context !== c || (n = i.splice(j, 1), n[0].action = e.Util.falseFn);
                                    c && m && 0 === i.length && (delete m[p], o[l]--) } } else delete o[h], delete o[k], delete o[l];
                        return this }, clearAllEventListeners: function() {
                        return delete this[f], this }, fireEvent: function(a, b) {
                        if (!this.hasEventListeners(a)) return this;
                        var c, d, g, h, i, j = e.Util.extend({}, b, { type: a, target: this }),
                            k = this[f];
                        if (k[a])
                            for (c = k[a].slice(), d = 0, g = c.length; g > d; d++) c[d].action.call(c[d].context, j);
                        h = k[a + "_idx"];
                        for (i in h)
                            if (c = h[i].slice())
                                for (d = 0, g = c.length; g > d; d++) c[d].action.call(c[d].context, j);
                        return this }, addOneTimeEventListener: function(a, b, c) {
                        if (e.Util.invokeEach(a, this.addOneTimeEventListener, this, b, c)) return this;
                        var d = e.bind(function() { this.removeEventListener(a, b, c).removeEventListener(a, d, c) }, this);
                        return this.addEventListener(a, b, c).addEventListener(a, d, c) } }, e.Mixin.Events.on = e.Mixin.Events.addEventListener, e.Mixin.Events.off = e.Mixin.Events.removeEventListener, e.Mixin.Events.once = e.Mixin.Events.addOneTimeEventListener, e.Mixin.Events.fire = e.Mixin.Events.fireEvent,
                function() {
                    var d = "ActiveXObject" in a,
                        f = d && !b.addEventListener,
                        g = navigator.userAgent.toLowerCase(),
                        h = -1 !== g.indexOf("webkit"),
                        i = -1 !== g.indexOf("chrome"),
                        j = -1 !== g.indexOf("phantom"),
                        k = -1 !== g.indexOf("android"),
                        l = -1 !== g.search("android [23]"),
                        m = -1 !== g.indexOf("gecko"),
                        n = typeof orientation != c + "",
                        o = a.navigator && a.navigator.msPointerEnabled && a.navigator.msMaxTouchPoints && !a.PointerEvent,
                        p = a.PointerEvent && a.navigator.pointerEnabled && a.navigator.maxTouchPoints || o,
                        q = "devicePixelRatio" in a && a.devicePixelRatio > 1 || "matchMedia" in a && a.matchMedia("(min-resolution:144dpi)") && a.matchMedia("(min-resolution:144dpi)").matches,
                        r = b.documentElement,
                        s = d && "transition" in r.style,
                        t = "WebKitCSSMatrix" in a && "m11" in new a.WebKitCSSMatrix && !l,
                        u = "MozPerspective" in r.style,
                        v = "OTransition" in r.style,
                        w = !a.L_DISABLE_3D && (s || t || u || v) && !j,
                        x = !a.L_NO_TOUCH && !j && function() {
                            var a = "ontouchstart";
                            if (p || a in r) return !0;
                            var c = b.createElement("div"),
                                d = !1;
                            return c.setAttribute ? (c.setAttribute(a, "return;"), "function" == typeof c[a] && (d = !0), c.removeAttribute(a), c = null, d) : !1 }();
                    e.Browser = { ie: d, ielt9: f, webkit: h, gecko: m && !h && !a.opera && !d, android: k, android23: l, chrome: i, ie3d: s, webkit3d: t, gecko3d: u, opera3d: v, any3d: w, mobile: n, mobileWebkit: n && h, mobileWebkit3d: n && t, mobileOpera: n && a.opera, touch: x, msPointer: o, pointer: p, retina: q } }(), e.Point = function(a, b, c) { this.x = c ? Math.round(a) : a, this.y = c ? Math.round(b) : b }, e.Point.prototype = { clone: function() {
                        return new e.Point(this.x, this.y) }, add: function(a) {
                        return this.clone()._add(e.point(a)) }, _add: function(a) {
                        return this.x += a.x, this.y += a.y, this }, subtract: function(a) {
                        return this.clone()._subtract(e.point(a)) }, _subtract: function(a) {
                        return this.x -= a.x, this.y -= a.y, this }, divideBy: function(a) {
                        return this.clone()._divideBy(a) }, _divideBy: function(a) {
                        return this.x /= a, this.y /= a, this }, multiplyBy: function(a) {
                        return this.clone()._multiplyBy(a) }, _multiplyBy: function(a) {
                        return this.x *= a, this.y *= a, this }, round: function() {
                        return this.clone()._round() }, _round: function() {
                        return this.x = Math.round(this.x), this.y = Math.round(this.y), this }, floor: function() {
                        return this.clone()._floor() }, _floor: function() {
                        return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this }, distanceTo: function(a) { a = e.point(a);
                        var b = a.x - this.x,
                            c = a.y - this.y;
                        return Math.sqrt(b * b + c * c) }, equals: function(a) {
                        return a = e.point(a), a.x === this.x && a.y === this.y }, contains: function(a) {
                        return a = e.point(a), Math.abs(a.x) <= Math.abs(this.x) && Math.abs(a.y) <= Math.abs(this.y) }, toString: function() {
                        return "Point(" + e.Util.formatNum(this.x) + ", " + e.Util.formatNum(this.y) + ")" } }, e.point = function(a, b, d) {
                    return a instanceof e.Point ? a : e.Util.isArray(a) ? new e.Point(a[0], a[1]) : a === c || null === a ? a : new e.Point(a, b, d) }, e.Bounds = function(a, b) {
                    if (a)
                        for (var c = b ? [a, b] : a, d = 0, e = c.length; e > d; d++) this.extend(c[d]) }, e.Bounds.prototype = { extend: function(a) {
                        return a = e.point(a), this.min || this.max ? (this.min.x = Math.min(a.x, this.min.x), this.max.x = Math.max(a.x, this.max.x), this.min.y = Math.min(a.y, this.min.y), this.max.y = Math.max(a.y, this.max.y)) : (this.min = a.clone(), this.max = a.clone()), this }, getCenter: function(a) {
                        return new e.Point((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, a) }, getBottomLeft: function() {
                        return new e.Point(this.min.x, this.max.y) }, getTopRight: function() {
                        return new e.Point(this.max.x, this.min.y) }, getSize: function() {
                        return this.max.subtract(this.min) }, contains: function(a) {
                        var b, c;
                        return a = "number" == typeof a[0] || a instanceof e.Point ? e.point(a) : e.bounds(a), a instanceof e.Bounds ? (b = a.min, c = a.max) : b = c = a, b.x >= this.min.x && c.x <= this.max.x && b.y >= this.min.y && c.y <= this.max.y }, intersects: function(a) { a = e.bounds(a);
                        var b = this.min,
                            c = this.max,
                            d = a.min,
                            f = a.max,
                            g = f.x >= b.x && d.x <= c.x,
                            h = f.y >= b.y && d.y <= c.y;
                        return g && h }, isValid: function() {
                        return !(!this.min || !this.max) } }, e.bounds = function(a, b) {
                    return !a || a instanceof e.Bounds ? a : new e.Bounds(a, b) }, e.Transformation = function(a, b, c, d) { this._a = a, this._b = b, this._c = c, this._d = d }, e.Transformation.prototype = { transform: function(a, b) {
                        return this._transform(a.clone(), b) }, _transform: function(a, b) {
                        return b = b || 1, a.x = b * (this._a * a.x + this._b), a.y = b * (this._c * a.y + this._d), a }, untransform: function(a, b) {
                        return b = b || 1, new e.Point((a.x / b - this._b) / this._a, (a.y / b - this._d) / this._c) } }, e.DomUtil = { get: function(a) {
                        return "string" == typeof a ? b.getElementById(a) : a }, getStyle: function(a, c) {
                        var d = a.style[c];
                        if (!d && a.currentStyle && (d = a.currentStyle[c]), (!d || "auto" === d) && b.defaultView) {
                            var e = b.defaultView.getComputedStyle(a, null);
                            d = e ? e[c] : null }
                        return "auto" === d ? null : d }, getViewportOffset: function(a) {
                        var c, d = 0,
                            f = 0,
                            g = a,
                            h = b.body,
                            i = b.documentElement;
                        do {
                            if (d += g.offsetTop || 0, f += g.offsetLeft || 0, d += parseInt(e.DomUtil.getStyle(g, "borderTopWidth"), 10) || 0, f += parseInt(e.DomUtil.getStyle(g, "borderLeftWidth"), 10) || 0, c = e.DomUtil.getStyle(g, "position"), g.offsetParent === h && "absolute" === c) break;
                            if ("fixed" === c) { d += h.scrollTop || i.scrollTop || 0, f += h.scrollLeft || i.scrollLeft || 0;
                                break }
                            if ("relative" === c && !g.offsetLeft) {
                                var j = e.DomUtil.getStyle(g, "width"),
                                    k = e.DomUtil.getStyle(g, "max-width"),
                                    l = g.getBoundingClientRect();
                                ("none" !== j || "none" !== k) && (f += l.left + g.clientLeft), d += l.top + (h.scrollTop || i.scrollTop || 0);
                                break }
                            g = g.offsetParent } while (g);
                        g = a;
                        do {
                            if (g === h) break;
                            d -= g.scrollTop || 0, f -= g.scrollLeft || 0, g = g.parentNode } while (g);
                        return new e.Point(f, d) }, documentIsLtr: function() {
                        return e.DomUtil._docIsLtrCached || (e.DomUtil._docIsLtrCached = !0, e.DomUtil._docIsLtr = "ltr" === e.DomUtil.getStyle(b.body, "direction")), e.DomUtil._docIsLtr }, create: function(a, c, d) {
                        var e = b.createElement(a);
                        return e.className = c, d && d.appendChild(e), e }, hasClass: function(a, b) {
                        if (a.classList !== c) return a.classList.contains(b);
                        var d = e.DomUtil._getClass(a);
                        return d.length > 0 && new RegExp("(^|\\s)" + b + "(\\s|$)").test(d) }, addClass: function(a, b) {
                        if (a.classList !== c)
                            for (var d = e.Util.splitWords(b), f = 0, g = d.length; g > f; f++) a.classList.add(d[f]);
                        else if (!e.DomUtil.hasClass(a, b)) {
                            var h = e.DomUtil._getClass(a);
                            e.DomUtil._setClass(a, (h ? h + " " : "") + b) } }, removeClass: function(a, b) { a.classList !== c ? a.classList.remove(b) : e.DomUtil._setClass(a, e.Util.trim((" " + e.DomUtil._getClass(a) + " ").replace(" " + b + " ", " "))) }, _setClass: function(a, b) { a.className.baseVal === c ? a.className = b : a.className.baseVal = b }, _getClass: function(a) {
                        return a.className.baseVal === c ? a.className : a.className.baseVal }, setOpacity: function(a, b) {
                        if ("opacity" in a.style) a.style.opacity = b;
                        else if ("filter" in a.style) {
                            var c = !1,
                                d = "DXImageTransform.Microsoft.Alpha";
                            try { c = a.filters.item(d) } catch (e) {
                                if (1 === b) return }
                            b = Math.round(100 * b), c ? (c.Enabled = 100 !== b, c.Opacity = b) : a.style.filter += " progid:" + d + "(opacity=" + b + ")" } }, testProp: function(a) {
                        for (var c = b.documentElement.style, d = 0; d < a.length; d++)
                            if (a[d] in c) return a[d];
                        return !1 }, getTranslateString: function(a) {
                        var b = e.Browser.webkit3d,
                            c = "translate" + (b ? "3d" : "") + "(",
                            d = (b ? ",0" : "") + ")";
                        return c + a.x + "px," + a.y + "px" + d }, getScaleString: function(a, b) {
                        var c = e.DomUtil.getTranslateString(b.add(b.multiplyBy(-1 * a))),
                            d = " scale(" + a + ") ";
                        return c + d }, setPosition: function(a, b, c) { a._leaflet_pos = b, !c && e.Browser.any3d ? a.style[e.DomUtil.TRANSFORM] = e.DomUtil.getTranslateString(b) : (a.style.left = b.x + "px", a.style.top = b.y + "px") }, getPosition: function(a) {
                        return a._leaflet_pos } }, e.DomUtil.TRANSFORM = e.DomUtil.testProp(["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]), e.DomUtil.TRANSITION = e.DomUtil.testProp(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]), e.DomUtil.TRANSITION_END = "webkitTransition" === e.DomUtil.TRANSITION || "OTransition" === e.DomUtil.TRANSITION ? e.DomUtil.TRANSITION + "End" : "transitionend",
                function() {
                    if ("onselectstart" in b) e.extend(e.DomUtil, { disableTextSelection: function() { e.DomEvent.on(a, "selectstart", e.DomEvent.preventDefault) }, enableTextSelection: function() { e.DomEvent.off(a, "selectstart", e.DomEvent.preventDefault) } });
                    else {
                        var c = e.DomUtil.testProp(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
                        e.extend(e.DomUtil, { disableTextSelection: function() {
                                if (c) {
                                    var a = b.documentElement.style;
                                    this._userSelect = a[c], a[c] = "none" } }, enableTextSelection: function() { c && (b.documentElement.style[c] = this._userSelect, delete this._userSelect) } }) }
                    e.extend(e.DomUtil, { disableImageDrag: function() { e.DomEvent.on(a, "dragstart", e.DomEvent.preventDefault) }, enableImageDrag: function() { e.DomEvent.off(a, "dragstart", e.DomEvent.preventDefault) } }) }(), e.LatLng = function(a, b, d) {
                    if (a = parseFloat(a), b = parseFloat(b), isNaN(a) || isNaN(b)) throw new Error("Invalid LatLng object: (" + a + ", " + b + ")");
                    this.lat = a, this.lng = b, d !== c && (this.alt = parseFloat(d)) }, e.extend(e.LatLng, { DEG_TO_RAD: Math.PI / 180, RAD_TO_DEG: 180 / Math.PI, MAX_MARGIN: 1e-9 }), e.LatLng.prototype = { equals: function(a) {
                        if (!a) return !1;
                        a = e.latLng(a);
                        var b = Math.max(Math.abs(this.lat - a.lat), Math.abs(this.lng - a.lng));
                        return b <= e.LatLng.MAX_MARGIN }, toString: function(a) {
                        return "LatLng(" + e.Util.formatNum(this.lat, a) + ", " + e.Util.formatNum(this.lng, a) + ")" }, distanceTo: function(a) { a = e.latLng(a);
                        var b = 6378137,
                            c = e.LatLng.DEG_TO_RAD,
                            d = (a.lat - this.lat) * c,
                            f = (a.lng - this.lng) * c,
                            g = this.lat * c,
                            h = a.lat * c,
                            i = Math.sin(d / 2),
                            j = Math.sin(f / 2),
                            k = i * i + j * j * Math.cos(g) * Math.cos(h);
                        return 2 * b * Math.atan2(Math.sqrt(k), Math.sqrt(1 - k)) }, wrap: function(a, b) {
                        var c = this.lng;
                        return a = a || -180, b = b || 180, c = (c + b) % (b - a) + (a > c || c === b ? b : a), new e.LatLng(this.lat, c) } }, e.latLng = function(a, b) {
                    return a instanceof e.LatLng ? a : e.Util.isArray(a) ? "number" == typeof a[0] || "string" == typeof a[0] ? new e.LatLng(a[0], a[1], a[2]) : null : a === c || null === a ? a : "object" == typeof a && "lat" in a ? new e.LatLng(a.lat, "lng" in a ? a.lng : a.lon) : b === c ? null : new e.LatLng(a, b) }, e.LatLngBounds = function(a, b) {
                    if (a)
                        for (var c = b ? [a, b] : a, d = 0, e = c.length; e > d; d++) this.extend(c[d]) }, e.LatLngBounds.prototype = { extend: function(a) {
                        if (!a) return this;
                        var b = e.latLng(a);
                        return a = null !== b ? b : e.latLngBounds(a), a instanceof e.LatLng ? this._southWest || this._northEast ? (this._southWest.lat = Math.min(a.lat, this._southWest.lat), this._southWest.lng = Math.min(a.lng, this._southWest.lng), this._northEast.lat = Math.max(a.lat, this._northEast.lat), this._northEast.lng = Math.max(a.lng, this._northEast.lng)) : (this._southWest = new e.LatLng(a.lat, a.lng), this._northEast = new e.LatLng(a.lat, a.lng)) : a instanceof e.LatLngBounds && (this.extend(a._southWest), this.extend(a._northEast)), this }, pad: function(a) {
                        var b = this._southWest,
                            c = this._northEast,
                            d = Math.abs(b.lat - c.lat) * a,
                            f = Math.abs(b.lng - c.lng) * a;
                        return new e.LatLngBounds(new e.LatLng(b.lat - d, b.lng - f), new e.LatLng(c.lat + d, c.lng + f)) }, getCenter: function() {
                        return new e.LatLng((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2) }, getSouthWest: function() {
                        return this._southWest }, getNorthEast: function() {
                        return this._northEast }, getNorthWest: function() {
                        return new e.LatLng(this.getNorth(), this.getWest()) }, getSouthEast: function() {
                        return new e.LatLng(this.getSouth(), this.getEast()) }, getWest: function() {
                        return this._southWest.lng }, getSouth: function() {
                        return this._southWest.lat }, getEast: function() {
                        return this._northEast.lng }, getNorth: function() {
                        return this._northEast.lat }, contains: function(a) { a = "number" == typeof a[0] || a instanceof e.LatLng ? e.latLng(a) : e.latLngBounds(a);
                        var b, c, d = this._southWest,
                            f = this._northEast;
                        return a instanceof e.LatLngBounds ? (b = a.getSouthWest(), c = a.getNorthEast()) : b = c = a, b.lat >= d.lat && c.lat <= f.lat && b.lng >= d.lng && c.lng <= f.lng }, intersects: function(a) { a = e.latLngBounds(a);
                        var b = this._southWest,
                            c = this._northEast,
                            d = a.getSouthWest(),
                            f = a.getNorthEast(),
                            g = f.lat >= b.lat && d.lat <= c.lat,
                            h = f.lng >= b.lng && d.lng <= c.lng;
                        return g && h }, toBBoxString: function() {
                        return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",") }, equals: function(a) {
                        return a ? (a = e.latLngBounds(a), this._southWest.equals(a.getSouthWest()) && this._northEast.equals(a.getNorthEast())) : !1 }, isValid: function() {
                        return !(!this._southWest || !this._northEast) } }, e.latLngBounds = function(a, b) {
                    return !a || a instanceof e.LatLngBounds ? a : new e.LatLngBounds(a, b) }, e.Projection = {}, e.Projection.SphericalMercator = { MAX_LATITUDE: 85.0511287798, project: function(a) {
                        var b = e.LatLng.DEG_TO_RAD,
                            c = this.MAX_LATITUDE,
                            d = Math.max(Math.min(c, a.lat), -c),
                            f = a.lng * b,
                            g = d * b;
                        return g = Math.log(Math.tan(Math.PI / 4 + g / 2)), new e.Point(f, g) }, unproject: function(a) {
                        var b = e.LatLng.RAD_TO_DEG,
                            c = a.x * b,
                            d = (2 * Math.atan(Math.exp(a.y)) - Math.PI / 2) * b;
                        return new e.LatLng(d, c) } }, e.Projection.LonLat = { project: function(a) {
                        return new e.Point(a.lng, a.lat) }, unproject: function(a) {
                        return new e.LatLng(a.y, a.x) } }, e.CRS = { latLngToPoint: function(a, b) {
                        var c = this.projection.project(a),
                            d = this.scale(b);
                        return this.transformation._transform(c, d) }, pointToLatLng: function(a, b) {
                        var c = this.scale(b),
                            d = this.transformation.untransform(a, c);
                        return this.projection.unproject(d) }, project: function(a) {
                        return this.projection.project(a) }, scale: function(a) {
                        return 256 * Math.pow(2, a) }, getSize: function(a) {
                        var b = this.scale(a);
                        return e.point(b, b) } }, e.CRS.Simple = e.extend({}, e.CRS, { projection: e.Projection.LonLat, transformation: new e.Transformation(1, 0, -1, 0), scale: function(a) {
                        return Math.pow(2, a) } }), e.CRS.EPSG3857 = e.extend({}, e.CRS, { code: "EPSG:3857", projection: e.Projection.SphericalMercator, transformation: new e.Transformation(.5 / Math.PI, .5, -.5 / Math.PI, .5), project: function(a) {
                        var b = this.projection.project(a),
                            c = 6378137;
                        return b.multiplyBy(c) } }), e.CRS.EPSG900913 = e.extend({}, e.CRS.EPSG3857, { code: "EPSG:900913" }), e.CRS.EPSG4326 = e.extend({}, e.CRS, { code: "EPSG:4326", projection: e.Projection.LonLat, transformation: new e.Transformation(1 / 360, .5, -1 / 360, .5) }), e.Map = e.Class.extend({
                    includes: e.Mixin.Events,
                    options: { crs: e.CRS.EPSG3857, fadeAnimation: e.DomUtil.TRANSITION && !e.Browser.android23, trackResize: !0, markerZoomAnimation: e.DomUtil.TRANSITION && e.Browser.any3d },
                    initialize: function(a, b) { b = e.setOptions(this, b), this._initContainer(a), this._initLayout(), this._onResize = e.bind(this._onResize, this), this._initEvents(), b.maxBounds && this.setMaxBounds(b.maxBounds), b.center && b.zoom !== c && this.setView(e.latLng(b.center), b.zoom, { reset: !0 }), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._tileLayersNum = 0, this.callInitHooks(), this._addLayers(b.layers) },
                    setView: function(a, b) {
                        return b = b === c ? this.getZoom() : b, this._resetView(e.latLng(a), this._limitZoom(b)), this },
                    setZoom: function(a, b) {
                        return this._loaded ? this.setView(this.getCenter(), a, { zoom: b }) : (this._zoom = this._limitZoom(a), this) },
                    zoomIn: function(a, b) {
                        return this.setZoom(this._zoom + (a || 1), b) },
                    zoomOut: function(a, b) {
                        return this.setZoom(this._zoom - (a || 1), b) },
                    setZoomAround: function(a, b, c) {
                        var d = this.getZoomScale(b),
                            f = this.getSize().divideBy(2),
                            g = a instanceof e.Point ? a : this.latLngToContainerPoint(a),
                            h = g.subtract(f).multiplyBy(1 - 1 / d),
                            i = this.containerPointToLatLng(f.add(h));
                        return this.setView(i, b, { zoom: c }) },
                    fitBounds: function(a, b) { b = b || {}, a = a.getBounds ? a.getBounds() : e.latLngBounds(a);
                        var c = e.point(b.paddingTopLeft || b.padding || [0, 0]),
                            d = e.point(b.paddingBottomRight || b.padding || [0, 0]),
                            f = this.getBoundsZoom(a, !1, c.add(d)),
                            g = d.subtract(c).divideBy(2),
                            h = this.project(a.getSouthWest(), f),
                            i = this.project(a.getNorthEast(), f),
                            j = this.unproject(h.add(i).divideBy(2).add(g), f);
                        return f = b && b.maxZoom ? Math.min(b.maxZoom, f) : f, this.setView(j, f, b) },
                    fitWorld: function(a) {
                        return this.fitBounds([
                            [-90, -180],
                            [90, 180]
                        ], a) },
                    panTo: function(a, b) {
                        return this.setView(a, this._zoom, { pan: b }) },
                    panBy: function(a) {
                        return this.fire("movestart"), this._rawPanBy(e.point(a)), this.fire("move"), this.fire("moveend") },
                    setMaxBounds: function(a) {
                        return a = e.latLngBounds(a), this.options.maxBounds = a, a ? (this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds, this)) : this.off("moveend", this._panInsideMaxBounds, this) },
                    panInsideBounds: function(a, b) {
                        var c = this.getCenter(),
                            d = this._limitCenter(c, this._zoom, a);
                        return c.equals(d) ? this : this.panTo(d, b) },
                    addLayer: function(a) {
                        var b = e.stamp(a);
                        return this._layers[b] ? this : (this._layers[b] = a, !a.options || isNaN(a.options.maxZoom) && isNaN(a.options.minZoom) || (this._zoomBoundLayers[b] = a, this._updateZoomLevels()), this.options.zoomAnimation && e.TileLayer && a instanceof e.TileLayer && (this._tileLayersNum++, this._tileLayersToLoad++, a.on("load", this._onTileLayerLoad, this)), this._loaded && this._layerAdd(a), this) },
                    removeLayer: function(a) {
                        var b = e.stamp(a);
                        return this._layers[b] ? (this._loaded && a.onRemove(this), delete this._layers[b], this._loaded && this.fire("layerremove", { layer: a }), this._zoomBoundLayers[b] && (delete this._zoomBoundLayers[b], this._updateZoomLevels()), this.options.zoomAnimation && e.TileLayer && a instanceof e.TileLayer && (this._tileLayersNum--, this._tileLayersToLoad--, a.off("load", this._onTileLayerLoad, this)), this) : this },
                    hasLayer: function(a) {
                        return a ? e.stamp(a) in this._layers : !1 },
                    eachLayer: function(a, b) {
                        for (var c in this._layers) a.call(b, this._layers[c]);
                        return this },
                    invalidateSize: function(a) {
                        if (!this._loaded) return this;
                        a = e.extend({ animate: !1, pan: !0 }, a === !0 ? { animate: !0 } : a);
                        var b = this.getSize();
                        this._sizeChanged = !0, this._initialCenter = null;
                        var c = this.getSize(),
                            d = b.divideBy(2).round(),
                            f = c.divideBy(2).round(),
                            g = d.subtract(f);
                        return g.x || g.y ? (a.animate && a.pan ? this.panBy(g) : (a.pan && this._rawPanBy(g), this.fire("move"), a.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(e.bind(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", { oldSize: b, newSize: c })) : this },
                    addHandler: function(a, b) {
                        if (!b) return this;
                        var c = this[a] = new b(this);
                        return this._handlers.push(c), this.options[a] && c.enable(), this },
                    remove: function() { this._loaded && this.fire("unload"), this._initEvents("off");
                        try { delete this._container._leaflet } catch (a) { this._container._leaflet = c }
                        return this._clearPanes(), this._clearControlPos && this._clearControlPos(), this._clearHandlers(), this },
                    getCenter: function() {
                        return this._checkIfLoaded(), this._initialCenter && !this._moved() ? this._initialCenter : this.layerPointToLatLng(this._getCenterLayerPoint()) },
                    getZoom: function() {
                        return this._zoom },
                    getBounds: function() {
                        var a = this.getPixelBounds(),
                            b = this.unproject(a.getBottomLeft()),
                            c = this.unproject(a.getTopRight());
                        return new e.LatLngBounds(b, c) },
                    getMinZoom: function() {
                        return this.options.minZoom === c ? this._layersMinZoom === c ? 0 : this._layersMinZoom : this.options.minZoom },
                    getMaxZoom: function() {
                        return this.options.maxZoom === c ? this._layersMaxZoom === c ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom },
                    getBoundsZoom: function(a, b, c) { a = e.latLngBounds(a);
                        var d, f = this.getMinZoom() - (b ? 1 : 0),
                            g = this.getMaxZoom(),
                            h = this.getSize(),
                            i = a.getNorthWest(),
                            j = a.getSouthEast(),
                            k = !0;
                        c = e.point(c || [0, 0]);
                        do f++, d = this.project(j, f).subtract(this.project(i, f)).add(c), k = b ? d.x < h.x || d.y < h.y : h.contains(d); while (k && g >= f);
                        return k && b ? null : b ? f : f - 1 },
                    getSize: function() {
                        return (!this._size || this._sizeChanged) && (this._size = new e.Point(this._container.clientWidth, this._container.clientHeight), this._sizeChanged = !1), this._size.clone() },
                    getPixelBounds: function() {
                        var a = this._getTopLeftPoint();
                        return new e.Bounds(a, a.add(this.getSize())) },
                    getPixelOrigin: function() {
                        return this._checkIfLoaded(), this._initialTopLeftPoint },
                    getPanes: function() {
                        return this._panes },
                    getContainer: function() {
                        return this._container },
                    getZoomScale: function(a) {
                        var b = this.options.crs;
                        return b.scale(a) / b.scale(this._zoom) },
                    getScaleZoom: function(a) {
                        return this._zoom + Math.log(a) / Math.LN2 },
                    project: function(a, b) {
                        return b = b === c ? this._zoom : b, this.options.crs.latLngToPoint(e.latLng(a), b) },
                    unproject: function(a, b) {
                        return b = b === c ? this._zoom : b, this.options.crs.pointToLatLng(e.point(a), b) },
                    layerPointToLatLng: function(a) {
                        var b = e.point(a).add(this.getPixelOrigin());
                        return this.unproject(b) },
                    latLngToLayerPoint: function(a) {
                        var b = this.project(e.latLng(a))._round();
                        return b._subtract(this.getPixelOrigin()) },
                    containerPointToLayerPoint: function(a) {
                        return e.point(a).subtract(this._getMapPanePos()) },
                    layerPointToContainerPoint: function(a) {
                        return e.point(a).add(this._getMapPanePos()) },
                    containerPointToLatLng: function(a) {
                        var b = this.containerPointToLayerPoint(e.point(a));
                        return this.layerPointToLatLng(b) },
                    latLngToContainerPoint: function(a) {
                        return this.layerPointToContainerPoint(this.latLngToLayerPoint(e.latLng(a))) },
                    mouseEventToContainerPoint: function(a) {
                        return e.DomEvent.getMousePosition(a, this._container) },
                    mouseEventToLayerPoint: function(a) {
                        return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(a)) },
                    mouseEventToLatLng: function(a) {
                        return this.layerPointToLatLng(this.mouseEventToLayerPoint(a)) },
                    _initContainer: function(a) {
                        var b = this._container = e.DomUtil.get(a);
                        if (!b) throw new Error("Map container not found.");
                        if (b._leaflet) throw new Error("Map container is already initialized.");
                        b._leaflet = !0 },
                    _initLayout: function() {
                        var a = this._container;
                        e.DomUtil.addClass(a, "leaflet-container" + (e.Browser.touch ? " leaflet-touch" : "") + (e.Browser.retina ? " leaflet-retina" : "") + (e.Browser.ielt9 ? " leaflet-oldie" : "") + (this.options.fadeAnimation ? " leaflet-fade-anim" : ""));
                        var b = e.DomUtil.getStyle(a, "position"); "absolute" !== b && "relative" !== b && "fixed" !== b && (a.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos() },
                    _initPanes: function() {
                        var a = this._panes = {};
                        this._mapPane = a.mapPane = this._createPane("leaflet-map-pane", this._container), this._tilePane = a.tilePane = this._createPane("leaflet-tile-pane", this._mapPane), a.objectsPane = this._createPane("leaflet-objects-pane", this._mapPane), a.shadowPane = this._createPane("leaflet-shadow-pane"), a.overlayPane = this._createPane("leaflet-overlay-pane"), a.markerPane = this._createPane("leaflet-marker-pane"), a.popupPane = this._createPane("leaflet-popup-pane");
                        var b = " leaflet-zoom-hide";
                        this.options.markerZoomAnimation || (e.DomUtil.addClass(a.markerPane, b), e.DomUtil.addClass(a.shadowPane, b), e.DomUtil.addClass(a.popupPane, b)) },
                    _createPane: function(a, b) {
                        return e.DomUtil.create("div", a, b || this._panes.objectsPane) },
                    _clearPanes: function() { this._container.removeChild(this._mapPane) },
                    _addLayers: function(a) { a = a ? e.Util.isArray(a) ? a : [a] : [];
                        for (var b = 0, c = a.length; c > b; b++) this.addLayer(a[b]) },
                    _resetView: function(a, b, c, d) {
                        var f = this._zoom !== b;
                        d || (this.fire("movestart"), f && this.fire("zoomstart")), this._zoom = b, this._initialCenter = a, this._initialTopLeftPoint = this._getNewTopLeftPoint(a), c ? this._initialTopLeftPoint._add(this._getMapPanePos()) : e.DomUtil.setPosition(this._mapPane, new e.Point(0, 0)), this._tileLayersToLoad = this._tileLayersNum;
                        var g = !this._loaded;
                        this._loaded = !0, this.fire("viewreset", { hard: !c }), g && (this.fire("load"), this.eachLayer(this._layerAdd, this)), this.fire("move"), (f || d) && this.fire("zoomend"), this.fire("moveend", { hard: !c }) },
                    _rawPanBy: function(a) { e.DomUtil.setPosition(this._mapPane, this._getMapPanePos().subtract(a)) },
                    _getZoomSpan: function() {
                        return this.getMaxZoom() - this.getMinZoom() },
                    _updateZoomLevels: function() {
                        var a, b = 1 / 0,
                            d = -(1 / 0),
                            e = this._getZoomSpan();
                        for (a in this._zoomBoundLayers) {
                            var f = this._zoomBoundLayers[a];
                            isNaN(f.options.minZoom) || (b = Math.min(b, f.options.minZoom)), isNaN(f.options.maxZoom) || (d = Math.max(d, f.options.maxZoom))
                        }
                        a === c ? this._layersMaxZoom = this._layersMinZoom = c : (this._layersMaxZoom = d, this._layersMinZoom = b), e !== this._getZoomSpan() && this.fire("zoomlevelschange")
                    },
                    _panInsideMaxBounds: function() { this.panInsideBounds(this.options.maxBounds) },
                    _checkIfLoaded: function() {
                        if (!this._loaded) throw new Error("Set map center and zoom first.") },
                    _initEvents: function(b) {
                        if (e.DomEvent) { b = b || "on", e.DomEvent[b](this._container, "click", this._onMouseClick, this);
                            var c, d, f = ["dblclick", "mousedown", "mouseup", "mouseenter", "mouseleave", "mousemove", "contextmenu"];
                            for (c = 0, d = f.length; d > c; c++) e.DomEvent[b](this._container, f[c], this._fireMouseEvent, this);
                            this.options.trackResize && e.DomEvent[b](a, "resize", this._onResize, this) } },
                    _onResize: function() { e.Util.cancelAnimFrame(this._resizeRequest), this._resizeRequest = e.Util.requestAnimFrame(function() { this.invalidateSize({ debounceMoveend: !0 }) }, this, !1, this._container) },
                    _onMouseClick: function(a) {!this._loaded || !a._simulated && (this.dragging && this.dragging.moved() || this.boxZoom && this.boxZoom.moved()) || e.DomEvent._skipped(a) || (this.fire("preclick"), this._fireMouseEvent(a)) },
                    _fireMouseEvent: function(a) {
                        if (this._loaded && !e.DomEvent._skipped(a)) {
                            var b = a.type;
                            if (b = "mouseenter" === b ? "mouseover" : "mouseleave" === b ? "mouseout" : b, this.hasEventListeners(b)) { "contextmenu" === b && e.DomEvent.preventDefault(a);
                                var c = this.mouseEventToContainerPoint(a),
                                    d = this.containerPointToLayerPoint(c),
                                    f = this.layerPointToLatLng(d);
                                this.fire(b, { latlng: f, layerPoint: d, containerPoint: c, originalEvent: a }) } } },
                    _onTileLayerLoad: function() { this._tileLayersToLoad--, this._tileLayersNum && !this._tileLayersToLoad && this.fire("tilelayersload") },
                    _clearHandlers: function() {
                        for (var a = 0, b = this._handlers.length; b > a; a++) this._handlers[a].disable() },
                    whenReady: function(a, b) {
                        return this._loaded ? a.call(b || this, this) : this.on("load", a, b), this },
                    _layerAdd: function(a) { a.onAdd(this), this.fire("layeradd", { layer: a }) },
                    _getMapPanePos: function() {
                        return e.DomUtil.getPosition(this._mapPane) },
                    _moved: function() {
                        var a = this._getMapPanePos();
                        return a && !a.equals([0, 0]) },
                    _getTopLeftPoint: function() {
                        return this.getPixelOrigin().subtract(this._getMapPanePos()) },
                    _getNewTopLeftPoint: function(a, b) {
                        var c = this.getSize()._divideBy(2);
                        return this.project(a, b)._subtract(c)._round() },
                    _latLngToNewLayerPoint: function(a, b, c) {
                        var d = this._getNewTopLeftPoint(c, b).add(this._getMapPanePos());
                        return this.project(a, b)._subtract(d) },
                    _getCenterLayerPoint: function() {
                        return this.containerPointToLayerPoint(this.getSize()._divideBy(2)) },
                    _getCenterOffset: function(a) {
                        return this.latLngToLayerPoint(a).subtract(this._getCenterLayerPoint()) },
                    _limitCenter: function(a, b, c) {
                        if (!c) return a;
                        var d = this.project(a, b),
                            f = this.getSize().divideBy(2),
                            g = new e.Bounds(d.subtract(f), d.add(f)),
                            h = this._getBoundsOffset(g, c, b);
                        return this.unproject(d.add(h), b) },
                    _limitOffset: function(a, b) {
                        if (!b) return a;
                        var c = this.getPixelBounds(),
                            d = new e.Bounds(c.min.add(a), c.max.add(a));
                        return a.add(this._getBoundsOffset(d, b)) },
                    _getBoundsOffset: function(a, b, c) {
                        var d = this.project(b.getNorthWest(), c).subtract(a.min),
                            f = this.project(b.getSouthEast(), c).subtract(a.max),
                            g = this._rebound(d.x, -f.x),
                            h = this._rebound(d.y, -f.y);
                        return new e.Point(g, h) },
                    _rebound: function(a, b) {
                        return a + b > 0 ? Math.round(a - b) / 2 : Math.max(0, Math.ceil(a)) - Math.max(0, Math.floor(b)) },
                    _limitZoom: function(a) {
                        var b = this.getMinZoom(),
                            c = this.getMaxZoom();
                        return Math.max(b, Math.min(c, a)) }
                }), e.map = function(a, b) {
                    return new e.Map(a, b) }, e.Projection.Mercator = { MAX_LATITUDE: 85.0840591556, R_MINOR: 6356752.314245179, R_MAJOR: 6378137, project: function(a) {
                        var b = e.LatLng.DEG_TO_RAD,
                            c = this.MAX_LATITUDE,
                            d = Math.max(Math.min(c, a.lat), -c),
                            f = this.R_MAJOR,
                            g = this.R_MINOR,
                            h = a.lng * b * f,
                            i = d * b,
                            j = g / f,
                            k = Math.sqrt(1 - j * j),
                            l = k * Math.sin(i);
                        l = Math.pow((1 - l) / (1 + l), .5 * k);
                        var m = Math.tan(.5 * (.5 * Math.PI - i)) / l;
                        return i = -f * Math.log(m), new e.Point(h, i) }, unproject: function(a) {
                        for (var b, c = e.LatLng.RAD_TO_DEG, d = this.R_MAJOR, f = this.R_MINOR, g = a.x * c / d, h = f / d, i = Math.sqrt(1 - h * h), j = Math.exp(-a.y / d), k = Math.PI / 2 - 2 * Math.atan(j), l = 15, m = 1e-7, n = l, o = .1; Math.abs(o) > m && --n > 0;) b = i * Math.sin(k), o = Math.PI / 2 - 2 * Math.atan(j * Math.pow((1 - b) / (1 + b), .5 * i)) - k, k += o;
                        return new e.LatLng(k * c, g) } }, e.CRS.EPSG3395 = e.extend({}, e.CRS, { code: "EPSG:3395", projection: e.Projection.Mercator, transformation: function() {
                        var a = e.Projection.Mercator,
                            b = a.R_MAJOR,
                            c = .5 / (Math.PI * b);
                        return new e.Transformation(c, .5, -c, .5) }() }), e.TileLayer = e.Class.extend({ includes: e.Mixin.Events, options: { minZoom: 0, maxZoom: 18, tileSize: 256, subdomains: "abc", errorTileUrl: "", attribution: "", zoomOffset: 0, opacity: 1, unloadInvisibleTiles: e.Browser.mobile, updateWhenIdle: e.Browser.mobile }, initialize: function(a, b) { b = e.setOptions(this, b), b.detectRetina && e.Browser.retina && b.maxZoom > 0 && (b.tileSize = Math.floor(b.tileSize / 2), b.zoomOffset++, b.minZoom > 0 && b.minZoom--, this.options.maxZoom--), b.bounds && (b.bounds = e.latLngBounds(b.bounds)), this._url = a;
                        var c = this.options.subdomains; "string" == typeof c && (this.options.subdomains = c.split("")) }, onAdd: function(a) { this._map = a, this._animated = a._zoomAnimated, this._initContainer(), a.on({ viewreset: this._reset, moveend: this._update }, this), this._animated && a.on({ zoomanim: this._animateZoom, zoomend: this._endZoomAnim }, this), this.options.updateWhenIdle || (this._limitedUpdate = e.Util.limitExecByInterval(this._update, 150, this), a.on("move", this._limitedUpdate, this)), this._reset(), this._update() }, addTo: function(a) {
                        return a.addLayer(this), this }, onRemove: function(a) { this._container.parentNode.removeChild(this._container), a.off({ viewreset: this._reset, moveend: this._update }, this), this._animated && a.off({ zoomanim: this._animateZoom, zoomend: this._endZoomAnim }, this), this.options.updateWhenIdle || a.off("move", this._limitedUpdate, this), this._container = null, this._map = null }, bringToFront: function() {
                        var a = this._map._panes.tilePane;
                        return this._container && (a.appendChild(this._container), this._setAutoZIndex(a, Math.max)), this }, bringToBack: function() {
                        var a = this._map._panes.tilePane;
                        return this._container && (a.insertBefore(this._container, a.firstChild), this._setAutoZIndex(a, Math.min)), this }, getAttribution: function() {
                        return this.options.attribution }, getContainer: function() {
                        return this._container }, setOpacity: function(a) {
                        return this.options.opacity = a, this._map && this._updateOpacity(), this }, setZIndex: function(a) {
                        return this.options.zIndex = a, this._updateZIndex(), this }, setUrl: function(a, b) {
                        return this._url = a, b || this.redraw(), this }, redraw: function() {
                        return this._map && (this._reset({ hard: !0 }), this._update()), this }, _updateZIndex: function() { this._container && this.options.zIndex !== c && (this._container.style.zIndex = this.options.zIndex) }, _setAutoZIndex: function(a, b) {
                        var c, d, e, f = a.children,
                            g = -b(1 / 0, -(1 / 0));
                        for (d = 0, e = f.length; e > d; d++) f[d] !== this._container && (c = parseInt(f[d].style.zIndex, 10), isNaN(c) || (g = b(g, c)));
                        this.options.zIndex = this._container.style.zIndex = (isFinite(g) ? g : 0) + b(1, -1) }, _updateOpacity: function() {
                        var a, b = this._tiles;
                        if (e.Browser.ielt9)
                            for (a in b) e.DomUtil.setOpacity(b[a], this.options.opacity);
                        else e.DomUtil.setOpacity(this._container, this.options.opacity) }, _initContainer: function() {
                        var a = this._map._panes.tilePane;
                        if (!this._container) {
                            if (this._container = e.DomUtil.create("div", "leaflet-layer"), this._updateZIndex(), this._animated) {
                                var b = "leaflet-tile-container";
                                this._bgBuffer = e.DomUtil.create("div", b, this._container), this._tileContainer = e.DomUtil.create("div", b, this._container) } else this._tileContainer = this._container;
                            a.appendChild(this._container), this.options.opacity < 1 && this._updateOpacity() } }, _reset: function(a) {
                        for (var b in this._tiles) this.fire("tileunload", { tile: this._tiles[b] });
                        this._tiles = {}, this._tilesToLoad = 0, this.options.reuseTiles && (this._unusedTiles = []), this._tileContainer.innerHTML = "", this._animated && a && a.hard && this._clearBgBuffer(), this._initContainer() }, _getTileSize: function() {
                        var a = this._map,
                            b = a.getZoom() + this.options.zoomOffset,
                            c = this.options.maxNativeZoom,
                            d = this.options.tileSize;
                        return c && b > c && (d = Math.round(a.getZoomScale(b) / a.getZoomScale(c) * d)), d }, _update: function() {
                        if (this._map) {
                            var a = this._map,
                                b = a.getPixelBounds(),
                                c = a.getZoom(),
                                d = this._getTileSize();
                            if (!(c > this.options.maxZoom || c < this.options.minZoom)) {
                                var f = e.bounds(b.min.divideBy(d)._floor(), b.max.divideBy(d)._floor());
                                this._addTilesFromCenterOut(f), (this.options.unloadInvisibleTiles || this.options.reuseTiles) && this._removeOtherTiles(f) } } }, _addTilesFromCenterOut: function(a) {
                        var c, d, f, g = [],
                            h = a.getCenter();
                        for (c = a.min.y; c <= a.max.y; c++)
                            for (d = a.min.x; d <= a.max.x; d++) f = new e.Point(d, c), this._tileShouldBeLoaded(f) && g.push(f);
                        var i = g.length;
                        if (0 !== i) { g.sort(function(a, b) {
                                return a.distanceTo(h) - b.distanceTo(h) });
                            var j = b.createDocumentFragment();
                            for (this._tilesToLoad || this.fire("loading"), this._tilesToLoad += i, d = 0; i > d; d++) this._addTile(g[d], j);
                            this._tileContainer.appendChild(j) } }, _tileShouldBeLoaded: function(a) {
                        if (a.x + ":" + a.y in this._tiles) return !1;
                        var b = this.options;
                        if (!b.continuousWorld) {
                            var c = this._getWrapTileNum();
                            if (b.noWrap && (a.x < 0 || a.x >= c.x) || a.y < 0 || a.y >= c.y) return !1 }
                        if (b.bounds) {
                            var d = b.tileSize,
                                e = a.multiplyBy(d),
                                f = e.add([d, d]),
                                g = this._map.unproject(e),
                                h = this._map.unproject(f);
                            if (b.continuousWorld || b.noWrap || (g = g.wrap(), h = h.wrap()), !b.bounds.intersects([g, h])) return !1 }
                        return !0 }, _removeOtherTiles: function(a) {
                        var b, c, d, e;
                        for (e in this._tiles) b = e.split(":"), c = parseInt(b[0], 10), d = parseInt(b[1], 10), (c < a.min.x || c > a.max.x || d < a.min.y || d > a.max.y) && this._removeTile(e) }, _removeTile: function(a) {
                        var b = this._tiles[a];
                        this.fire("tileunload", { tile: b, url: b.src }), this.options.reuseTiles ? (e.DomUtil.removeClass(b, "leaflet-tile-loaded"), this._unusedTiles.push(b)) : b.parentNode === this._tileContainer && this._tileContainer.removeChild(b), e.Browser.android || (b.onload = null, b.src = e.Util.emptyImageUrl), delete this._tiles[a] }, _addTile: function(a, b) {
                        var c = this._getTilePos(a),
                            d = this._getTile();
                        e.DomUtil.setPosition(d, c, e.Browser.chrome), this._tiles[a.x + ":" + a.y] = d, this._loadTile(d, a), d.parentNode !== this._tileContainer && b.appendChild(d) }, _getZoomForUrl: function() {
                        var a = this.options,
                            b = this._map.getZoom();
                        return a.zoomReverse && (b = a.maxZoom - b), b += a.zoomOffset, a.maxNativeZoom ? Math.min(b, a.maxNativeZoom) : b }, _getTilePos: function(a) {
                        var b = this._map.getPixelOrigin(),
                            c = this._getTileSize();
                        return a.multiplyBy(c).subtract(b) }, getTileUrl: function(a) {
                        return e.Util.template(this._url, e.extend({ s: this._getSubdomain(a), z: a.z, x: a.x, y: a.y }, this.options)) }, _getWrapTileNum: function() {
                        var a = this._map.options.crs,
                            b = a.getSize(this._map.getZoom());
                        return b.divideBy(this._getTileSize())._floor() }, _adjustTilePoint: function(a) {
                        var b = this._getWrapTileNum();
                        this.options.continuousWorld || this.options.noWrap || (a.x = (a.x % b.x + b.x) % b.x), this.options.tms && (a.y = b.y - a.y - 1), a.z = this._getZoomForUrl() }, _getSubdomain: function(a) {
                        var b = Math.abs(a.x + a.y) % this.options.subdomains.length;
                        return this.options.subdomains[b] }, _getTile: function() {
                        if (this.options.reuseTiles && this._unusedTiles.length > 0) {
                            var a = this._unusedTiles.pop();
                            return this._resetTile(a), a }
                        return this._createTile() }, _resetTile: function() {}, _createTile: function() {
                        var a = e.DomUtil.create("img", "leaflet-tile");
                        return a.style.width = a.style.height = this._getTileSize() + "px", a.galleryimg = "no", a.onselectstart = a.onmousemove = e.Util.falseFn, e.Browser.ielt9 && this.options.opacity !== c && e.DomUtil.setOpacity(a, this.options.opacity), e.Browser.mobileWebkit3d && (a.style.WebkitBackfaceVisibility = "hidden"), a }, _loadTile: function(a, b) { a._layer = this, a.onload = this._tileOnLoad, a.onerror = this._tileOnError, this._adjustTilePoint(b), a.src = this.getTileUrl(b), this.fire("tileloadstart", { tile: a, url: a.src }) }, _tileLoaded: function() { this._tilesToLoad--, this._animated && e.DomUtil.addClass(this._tileContainer, "leaflet-zoom-animated"), this._tilesToLoad || (this.fire("load"), this._animated && (clearTimeout(this._clearBgBufferTimer), this._clearBgBufferTimer = setTimeout(e.bind(this._clearBgBuffer, this), 500))) }, _tileOnLoad: function() {
                        var a = this._layer;
                        this.src !== e.Util.emptyImageUrl && (e.DomUtil.addClass(this, "leaflet-tile-loaded"), a.fire("tileload", { tile: this, url: this.src })), a._tileLoaded() }, _tileOnError: function() {
                        var a = this._layer;
                        a.fire("tileerror", { tile: this, url: this.src });
                        var b = a.options.errorTileUrl;
                        b && (this.src = b), a._tileLoaded() } }), e.tileLayer = function(a, b) {
                    return new e.TileLayer(a, b) }, e.TileLayer.WMS = e.TileLayer.extend({ defaultWmsParams: { service: "WMS", request: "GetMap", version: "1.1.1", layers: "", styles: "", format: "image/jpeg", transparent: !1 }, initialize: function(a, b) { this._url = a;
                        var c = e.extend({}, this.defaultWmsParams),
                            d = b.tileSize || this.options.tileSize;
                        b.detectRetina && e.Browser.retina ? c.width = c.height = 2 * d : c.width = c.height = d;
                        for (var f in b) this.options.hasOwnProperty(f) || "crs" === f || (c[f] = b[f]);
                        this.wmsParams = c, e.setOptions(this, b) }, onAdd: function(a) { this._crs = this.options.crs || a.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
                        var b = this._wmsVersion >= 1.3 ? "crs" : "srs";
                        this.wmsParams[b] = this._crs.code, e.TileLayer.prototype.onAdd.call(this, a) }, getTileUrl: function(a) {
                        var b = this._map,
                            c = this.options.tileSize,
                            d = a.multiplyBy(c),
                            f = d.add([c, c]),
                            g = this._crs.project(b.unproject(d, a.z)),
                            h = this._crs.project(b.unproject(f, a.z)),
                            i = this._wmsVersion >= 1.3 && this._crs === e.CRS.EPSG4326 ? [h.y, g.x, g.y, h.x].join(",") : [g.x, h.y, h.x, g.y].join(","),
                            j = e.Util.template(this._url, { s: this._getSubdomain(a) });
                        return j + e.Util.getParamString(this.wmsParams, j, !0) + "&BBOX=" + i }, setParams: function(a, b) {
                        return e.extend(this.wmsParams, a), b || this.redraw(), this } }), e.tileLayer.wms = function(a, b) {
                    return new e.TileLayer.WMS(a, b) }, e.TileLayer.Canvas = e.TileLayer.extend({ options: { async: !1 }, initialize: function(a) { e.setOptions(this, a) }, redraw: function() { this._map && (this._reset({ hard: !0 }), this._update());
                        for (var a in this._tiles) this._redrawTile(this._tiles[a]);
                        return this }, _redrawTile: function(a) { this.drawTile(a, a._tilePoint, this._map._zoom) }, _createTile: function() {
                        var a = e.DomUtil.create("canvas", "leaflet-tile");
                        return a.width = a.height = this.options.tileSize, a.onselectstart = a.onmousemove = e.Util.falseFn, a }, _loadTile: function(a, b) { a._layer = this, a._tilePoint = b, this._redrawTile(a), this.options.async || this.tileDrawn(a) }, drawTile: function() {}, tileDrawn: function(a) { this._tileOnLoad.call(a) } }), e.tileLayer.canvas = function(a) {
                    return new e.TileLayer.Canvas(a) }, e.ImageOverlay = e.Class.extend({ includes: e.Mixin.Events, options: { opacity: 1 }, initialize: function(a, b, c) { this._url = a, this._bounds = e.latLngBounds(b), e.setOptions(this, c) }, onAdd: function(a) { this._map = a, this._image || this._initImage(), a._panes.overlayPane.appendChild(this._image), a.on("viewreset", this._reset, this), a.options.zoomAnimation && e.Browser.any3d && a.on("zoomanim", this._animateZoom, this), this._reset() }, onRemove: function(a) { a.getPanes().overlayPane.removeChild(this._image), a.off("viewreset", this._reset, this), a.options.zoomAnimation && a.off("zoomanim", this._animateZoom, this) }, addTo: function(a) {
                        return a.addLayer(this), this }, setOpacity: function(a) {
                        return this.options.opacity = a, this._updateOpacity(), this }, bringToFront: function() {
                        return this._image && this._map._panes.overlayPane.appendChild(this._image), this }, bringToBack: function() {
                        var a = this._map._panes.overlayPane;
                        return this._image && a.insertBefore(this._image, a.firstChild), this }, setUrl: function(a) { this._url = a, this._image.src = this._url }, getAttribution: function() {
                        return this.options.attribution }, _initImage: function() { this._image = e.DomUtil.create("img", "leaflet-image-layer"), this._map.options.zoomAnimation && e.Browser.any3d ? e.DomUtil.addClass(this._image, "leaflet-zoom-animated") : e.DomUtil.addClass(this._image, "leaflet-zoom-hide"), this._updateOpacity(), e.extend(this._image, { galleryimg: "no", onselectstart: e.Util.falseFn, onmousemove: e.Util.falseFn, onload: e.bind(this._onImageLoad, this), src: this._url }) }, _animateZoom: function(a) {
                        var b = this._map,
                            c = this._image,
                            d = b.getZoomScale(a.zoom),
                            f = this._bounds.getNorthWest(),
                            g = this._bounds.getSouthEast(),
                            h = b._latLngToNewLayerPoint(f, a.zoom, a.center),
                            i = b._latLngToNewLayerPoint(g, a.zoom, a.center)._subtract(h),
                            j = h._add(i._multiplyBy(.5 * (1 - 1 / d)));
                        c.style[e.DomUtil.TRANSFORM] = e.DomUtil.getTranslateString(j) + " scale(" + d + ") " }, _reset: function() {
                        var a = this._image,
                            b = this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
                            c = this._map.latLngToLayerPoint(this._bounds.getSouthEast())._subtract(b);
                        e.DomUtil.setPosition(a, b), a.style.width = c.x + "px", a.style.height = c.y + "px" }, _onImageLoad: function() { this.fire("load") }, _updateOpacity: function() { e.DomUtil.setOpacity(this._image, this.options.opacity) } }), e.imageOverlay = function(a, b, c) {
                    return new e.ImageOverlay(a, b, c) }, e.Icon = e.Class.extend({ options: { className: "" }, initialize: function(a) { e.setOptions(this, a) }, createIcon: function(a) {
                        return this._createIcon("icon", a) }, createShadow: function(a) {
                        return this._createIcon("shadow", a) }, _createIcon: function(a, b) {
                        var c = this._getIconUrl(a);
                        if (!c) {
                            if ("icon" === a) throw new Error("iconUrl not set in Icon options (see the docs).");
                            return null }
                        var d;
                        return d = b && "IMG" === b.tagName ? this._createImg(c, b) : this._createImg(c), this._setIconStyles(d, a), d }, _setIconStyles: function(a, b) {
                        var c, d = this.options,
                            f = e.point(d[b + "Size"]);
                        c = "shadow" === b ? e.point(d.shadowAnchor || d.iconAnchor) : e.point(d.iconAnchor), !c && f && (c = f.divideBy(2, !0)), a.className = "leaflet-marker-" + b + " " + d.className, c && (a.style.marginLeft = -c.x + "px", a.style.marginTop = -c.y + "px"), f && (a.style.width = f.x + "px", a.style.height = f.y + "px") }, _createImg: function(a, c) {
                        return c = c || b.createElement("img"), c.src = a, c }, _getIconUrl: function(a) {
                        return e.Browser.retina && this.options[a + "RetinaUrl"] ? this.options[a + "RetinaUrl"] : this.options[a + "Url"] } }), e.icon = function(a) {
                    return new e.Icon(a) }, e.Icon.Default = e.Icon.extend({ options: { iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41] }, _getIconUrl: function(a) {
                        var b = a + "Url";
                        if (this.options[b]) return this.options[b];
                        e.Browser.retina && "icon" === a && (a += "-2x");
                        var c = e.Icon.Default.imagePath;
                        if (!c) throw new Error("Couldn't autodetect L.Icon.Default.imagePath, set it manually.");
                        return c + "/marker-" + a + ".png" } }), e.Icon.Default.imagePath = function() {
                    var a, c, d, e, f, g = b.getElementsByTagName("script"),
                        h = /[\/^]leaflet[\-\._]?([\w\-\._]*)\.js\??/;
                    for (a = 0, c = g.length; c > a; a++)
                        if (d = g[a].src, e = d.match(h)) return f = d.split(h)[0], (f ? f + "/" : "") + "images" }(), e.Marker = e.Class.extend({ includes: e.Mixin.Events, options: { icon: new e.Icon.Default, title: "", alt: "", clickable: !0, draggable: !1, keyboard: !0, zIndexOffset: 0, opacity: 1, riseOnHover: !1, riseOffset: 250 }, initialize: function(a, b) { e.setOptions(this, b), this._latlng = e.latLng(a) }, onAdd: function(a) { this._map = a, a.on("viewreset", this.update, this), this._initIcon(), this.update(), this.fire("add"), a.options.zoomAnimation && a.options.markerZoomAnimation && a.on("zoomanim", this._animateZoom, this) }, addTo: function(a) {
                        return a.addLayer(this), this }, onRemove: function(a) { this.dragging && this.dragging.disable(), this._removeIcon(), this._removeShadow(), this.fire("remove"), a.off({ viewreset: this.update, zoomanim: this._animateZoom }, this), this._map = null }, getLatLng: function() {
                        return this._latlng }, setLatLng: function(a) {
                        return this._latlng = e.latLng(a), this.update(), this.fire("move", { latlng: this._latlng }) }, setZIndexOffset: function(a) {
                        return this.options.zIndexOffset = a, this.update(), this }, setIcon: function(a) {
                        return this.options.icon = a, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup), this }, update: function() {
                        if (this._icon) {
                            var a = this._map.latLngToLayerPoint(this._latlng).round();
                            this._setPos(a) }
                        return this }, _initIcon: function() {
                        var a = this.options,
                            b = this._map,
                            c = b.options.zoomAnimation && b.options.markerZoomAnimation,
                            d = c ? "leaflet-zoom-animated" : "leaflet-zoom-hide",
                            f = a.icon.createIcon(this._icon),
                            g = !1;
                        f !== this._icon && (this._icon && this._removeIcon(), g = !0, a.title && (f.title = a.title), a.alt && (f.alt = a.alt)), e.DomUtil.addClass(f, d), a.keyboard && (f.tabIndex = "0"), this._icon = f, this._initInteraction(), a.riseOnHover && e.DomEvent.on(f, "mouseover", this._bringToFront, this).on(f, "mouseout", this._resetZIndex, this);
                        var h = a.icon.createShadow(this._shadow),
                            i = !1;
                        h !== this._shadow && (this._removeShadow(), i = !0), h && e.DomUtil.addClass(h, d), this._shadow = h, a.opacity < 1 && this._updateOpacity();
                        var j = this._map._panes;
                        g && j.markerPane.appendChild(this._icon), h && i && j.shadowPane.appendChild(this._shadow) }, _removeIcon: function() { this.options.riseOnHover && e.DomEvent.off(this._icon, "mouseover", this._bringToFront).off(this._icon, "mouseout", this._resetZIndex), this._map._panes.markerPane.removeChild(this._icon), this._icon = null }, _removeShadow: function() { this._shadow && this._map._panes.shadowPane.removeChild(this._shadow), this._shadow = null }, _setPos: function(a) { e.DomUtil.setPosition(this._icon, a), this._shadow && e.DomUtil.setPosition(this._shadow, a), this._zIndex = a.y + this.options.zIndexOffset, this._resetZIndex() }, _updateZIndex: function(a) { this._icon.style.zIndex = this._zIndex + a }, _animateZoom: function(a) {
                        var b = this._map._latLngToNewLayerPoint(this._latlng, a.zoom, a.center).round();
                        this._setPos(b) }, _initInteraction: function() {
                        if (this.options.clickable) {
                            var a = this._icon,
                                b = ["dblclick", "mousedown", "mouseover", "mouseout", "contextmenu"];
                            e.DomUtil.addClass(a, "leaflet-clickable"), e.DomEvent.on(a, "click", this._onMouseClick, this), e.DomEvent.on(a, "keypress", this._onKeyPress, this);
                            for (var c = 0; c < b.length; c++) e.DomEvent.on(a, b[c], this._fireMouseEvent, this);
                            e.Handler.MarkerDrag && (this.dragging = new e.Handler.MarkerDrag(this), this.options.draggable && this.dragging.enable()) } }, _onMouseClick: function(a) {
                        var b = this.dragging && this.dragging.moved();
                        (this.hasEventListeners(a.type) || b) && e.DomEvent.stopPropagation(a), b || (this.dragging && this.dragging._enabled || !this._map.dragging || !this._map.dragging.moved()) && this.fire(a.type, { originalEvent: a, latlng: this._latlng }) }, _onKeyPress: function(a) { 13 === a.keyCode && this.fire("click", { originalEvent: a, latlng: this._latlng }) }, _fireMouseEvent: function(a) { this.fire(a.type, { originalEvent: a, latlng: this._latlng }), "contextmenu" === a.type && this.hasEventListeners(a.type) && e.DomEvent.preventDefault(a), "mousedown" !== a.type ? e.DomEvent.stopPropagation(a) : e.DomEvent.preventDefault(a) }, setOpacity: function(a) {
                        return this.options.opacity = a, this._map && this._updateOpacity(), this }, _updateOpacity: function() { e.DomUtil.setOpacity(this._icon, this.options.opacity), this._shadow && e.DomUtil.setOpacity(this._shadow, this.options.opacity) }, _bringToFront: function() { this._updateZIndex(this.options.riseOffset) }, _resetZIndex: function() { this._updateZIndex(0) } }), e.marker = function(a, b) {
                    return new e.Marker(a, b) }, e.DivIcon = e.Icon.extend({ options: { iconSize: [12, 12], className: "leaflet-div-icon", html: !1 }, createIcon: function(a) {
                        var c = a && "DIV" === a.tagName ? a : b.createElement("div"),
                            d = this.options;
                        return d.html !== !1 ? c.innerHTML = d.html : c.innerHTML = "", d.bgPos && (c.style.backgroundPosition = -d.bgPos.x + "px " + -d.bgPos.y + "px"), this._setIconStyles(c, "icon"), c }, createShadow: function() {
                        return null } }), e.divIcon = function(a) {
                    return new e.DivIcon(a) }, e.Map.mergeOptions({ closePopupOnClick: !0 }), e.Popup = e.Class.extend({ includes: e.Mixin.Events, options: { minWidth: 50, maxWidth: 300, autoPan: !0, closeButton: !0, offset: [0, 7], autoPanPadding: [5, 5], keepInView: !1, className: "", zoomAnimation: !0 }, initialize: function(a, b) { e.setOptions(this, a), this._source = b, this._animated = e.Browser.any3d && this.options.zoomAnimation, this._isOpen = !1 }, onAdd: function(a) { this._map = a, this._container || this._initLayout();
                        var b = a.options.fadeAnimation;
                        b && e.DomUtil.setOpacity(this._container, 0), a._panes.popupPane.appendChild(this._container), a.on(this._getEvents(), this), this.update(), b && e.DomUtil.setOpacity(this._container, 1), this.fire("open"), a.fire("popupopen", { popup: this }), this._source && this._source.fire("popupopen", { popup: this }) }, addTo: function(a) {
                        return a.addLayer(this), this }, openOn: function(a) {
                        return a.openPopup(this), this }, onRemove: function(a) { a._panes.popupPane.removeChild(this._container), e.Util.falseFn(this._container.offsetWidth), a.off(this._getEvents(), this), a.options.fadeAnimation && e.DomUtil.setOpacity(this._container, 0), this._map = null, this.fire("close"), a.fire("popupclose", { popup: this }), this._source && this._source.fire("popupclose", { popup: this }) }, getLatLng: function() {
                        return this._latlng }, setLatLng: function(a) {
                        return this._latlng = e.latLng(a), this._map && (this._updatePosition(), this._adjustPan()), this }, getContent: function() {
                        return this._content }, setContent: function(a) {
                        return this._content = a, this.update(), this }, update: function() { this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan()) }, _getEvents: function() {
                        var a = { viewreset: this._updatePosition };
                        return this._animated && (a.zoomanim = this._zoomAnimation), ("closeOnClick" in this.options ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (a.preclick = this._close), this.options.keepInView && (a.moveend = this._adjustPan), a }, _close: function() { this._map && this._map.closePopup(this) }, _initLayout: function() {
                        var a, b = "leaflet-popup",
                            c = b + " " + this.options.className + " leaflet-zoom-" + (this._animated ? "animated" : "hide"),
                            d = this._container = e.DomUtil.create("div", c);
                        this.options.closeButton && (a = this._closeButton = e.DomUtil.create("a", b + "-close-button", d), a.href = "#close", a.innerHTML = "&#215;", e.DomEvent.disableClickPropagation(a), e.DomEvent.on(a, "click", this._onCloseButtonClick, this));
                        var f = this._wrapper = e.DomUtil.create("div", b + "-content-wrapper", d);
                        e.DomEvent.disableClickPropagation(f), this._contentNode = e.DomUtil.create("div", b + "-content", f), e.DomEvent.disableScrollPropagation(this._contentNode), e.DomEvent.on(f, "contextmenu", e.DomEvent.stopPropagation), this._tipContainer = e.DomUtil.create("div", b + "-tip-container", d), this._tip = e.DomUtil.create("div", b + "-tip", this._tipContainer) }, _updateContent: function() {
                        if (this._content) {
                            if ("string" == typeof this._content) this._contentNode.innerHTML = this._content;
                            else {
                                for (; this._contentNode.hasChildNodes();) this._contentNode.removeChild(this._contentNode.firstChild);
                                this._contentNode.appendChild(this._content) }
                            this.fire("contentupdate") } }, _updateLayout: function() {
                        var a = this._contentNode,
                            b = a.style;
                        b.width = "", b.whiteSpace = "nowrap";
                        var c = a.offsetWidth;
                        c = Math.min(c, this.options.maxWidth), c = Math.max(c, this.options.minWidth), b.width = c + 1 + "px", b.whiteSpace = "", b.height = "";
                        var d = a.offsetHeight,
                            f = this.options.maxHeight,
                            g = "leaflet-popup-scrolled";
                        f && d > f ? (b.height = f + "px", e.DomUtil.addClass(a, g)) : e.DomUtil.removeClass(a, g), this._containerWidth = this._container.offsetWidth }, _updatePosition: function() {
                        if (this._map) {
                            var a = this._map.latLngToLayerPoint(this._latlng),
                                b = this._animated,
                                c = e.point(this.options.offset);
                            b && e.DomUtil.setPosition(this._container, a), this._containerBottom = -c.y - (b ? 0 : a.y), this._containerLeft = -Math.round(this._containerWidth / 2) + c.x + (b ? 0 : a.x), this._container.style.bottom = this._containerBottom + "px", this._container.style.left = this._containerLeft + "px" } }, _zoomAnimation: function(a) {
                        var b = this._map._latLngToNewLayerPoint(this._latlng, a.zoom, a.center);
                        e.DomUtil.setPosition(this._container, b) }, _adjustPan: function() {
                        if (this.options.autoPan) {
                            var a = this._map,
                                b = this._container.offsetHeight,
                                c = this._containerWidth,
                                d = new e.Point(this._containerLeft, -b - this._containerBottom);
                            this._animated && d._add(e.DomUtil.getPosition(this._container));
                            var f = a.layerPointToContainerPoint(d),
                                g = e.point(this.options.autoPanPadding),
                                h = e.point(this.options.autoPanPaddingTopLeft || g),
                                i = e.point(this.options.autoPanPaddingBottomRight || g),
                                j = a.getSize(),
                                k = 0,
                                l = 0;
                            f.x + c + i.x > j.x && (k = f.x + c - j.x + i.x), f.x - k - h.x < 0 && (k = f.x - h.x), f.y + b + i.y > j.y && (l = f.y + b - j.y + i.y), f.y - l - h.y < 0 && (l = f.y - h.y), (k || l) && a.fire("autopanstart").panBy([k, l]) } }, _onCloseButtonClick: function(a) { this._close(), e.DomEvent.stop(a) } }), e.popup = function(a, b) {
                    return new e.Popup(a, b) }, e.Map.include({ openPopup: function(a, b, c) {
                        if (this.closePopup(), !(a instanceof e.Popup)) {
                            var d = a;
                            a = new e.Popup(c).setLatLng(b).setContent(d) }
                        return a._isOpen = !0, this._popup = a, this.addLayer(a) }, closePopup: function(a) {
                        return a && a !== this._popup || (a = this._popup, this._popup = null), a && (this.removeLayer(a), a._isOpen = !1), this } }), e.Marker.include({ openPopup: function() {
                        return this._popup && this._map && !this._map.hasLayer(this._popup) && (this._popup.setLatLng(this._latlng), this._map.openPopup(this._popup)), this }, closePopup: function() {
                        return this._popup && this._popup._close(), this }, togglePopup: function() {
                        return this._popup && (this._popup._isOpen ? this.closePopup() : this.openPopup()), this }, bindPopup: function(a, b) {
                        var c = e.point(this.options.icon.options.popupAnchor || [0, 0]);
                        return c = c.add(e.Popup.prototype.options.offset), b && b.offset && (c = c.add(b.offset)), b = e.extend({ offset: c }, b), this._popupHandlersAdded || (this.on("click", this.togglePopup, this).on("remove", this.closePopup, this).on("move", this._movePopup, this), this._popupHandlersAdded = !0), a instanceof e.Popup ? (e.setOptions(a, b), this._popup = a) : this._popup = new e.Popup(b, this).setContent(a), this }, setPopupContent: function(a) {
                        return this._popup && this._popup.setContent(a), this }, unbindPopup: function() {
                        return this._popup && (this._popup = null, this.off("click", this.togglePopup, this).off("remove", this.closePopup, this).off("move", this._movePopup, this), this._popupHandlersAdded = !1), this }, getPopup: function() {
                        return this._popup }, _movePopup: function(a) { this._popup.setLatLng(a.latlng) } }), e.LayerGroup = e.Class.extend({ initialize: function(a) { this._layers = {};
                        var b, c;
                        if (a)
                            for (b = 0, c = a.length; c > b; b++) this.addLayer(a[b]) }, addLayer: function(a) {
                        var b = this.getLayerId(a);
                        return this._layers[b] = a, this._map && this._map.addLayer(a), this }, removeLayer: function(a) {
                        var b = a in this._layers ? a : this.getLayerId(a);
                        return this._map && this._layers[b] && this._map.removeLayer(this._layers[b]), delete this._layers[b], this }, hasLayer: function(a) {
                        return a ? a in this._layers || this.getLayerId(a) in this._layers : !1 }, clearLayers: function() {
                        return this.eachLayer(this.removeLayer, this), this }, invoke: function(a) {
                        var b, c, d = Array.prototype.slice.call(arguments, 1);
                        for (b in this._layers) c = this._layers[b], c[a] && c[a].apply(c, d);
                        return this }, onAdd: function(a) { this._map = a, this.eachLayer(a.addLayer, a) }, onRemove: function(a) { this.eachLayer(a.removeLayer, a), this._map = null }, addTo: function(a) {
                        return a.addLayer(this), this }, eachLayer: function(a, b) {
                        for (var c in this._layers) a.call(b, this._layers[c]);
                        return this }, getLayer: function(a) {
                        return this._layers[a] }, getLayers: function() {
                        var a = [];
                        for (var b in this._layers) a.push(this._layers[b]);
                        return a }, setZIndex: function(a) {
                        return this.invoke("setZIndex", a) }, getLayerId: function(a) {
                        return e.stamp(a) } }), e.layerGroup = function(a) {
                    return new e.LayerGroup(a) }, e.FeatureGroup = e.LayerGroup.extend({ includes: e.Mixin.Events, statics: { EVENTS: "click dblclick mouseover mouseout mousemove contextmenu popupopen popupclose" }, addLayer: function(a) {
                        return this.hasLayer(a) ? this : ("on" in a && a.on(e.FeatureGroup.EVENTS, this._propagateEvent, this), e.LayerGroup.prototype.addLayer.call(this, a), this._popupContent && a.bindPopup && a.bindPopup(this._popupContent, this._popupOptions), this.fire("layeradd", { layer: a })) }, removeLayer: function(a) {
                        return this.hasLayer(a) ? (a in this._layers && (a = this._layers[a]), a.off(e.FeatureGroup.EVENTS, this._propagateEvent, this), e.LayerGroup.prototype.removeLayer.call(this, a), this._popupContent && this.invoke("unbindPopup"), this.fire("layerremove", { layer: a })) : this }, bindPopup: function(a, b) {
                        return this._popupContent = a, this._popupOptions = b, this.invoke("bindPopup", a, b) }, openPopup: function(a) {
                        for (var b in this._layers) { this._layers[b].openPopup(a);
                            break }
                        return this }, setStyle: function(a) {
                        return this.invoke("setStyle", a) }, bringToFront: function() {
                        return this.invoke("bringToFront") }, bringToBack: function() {
                        return this.invoke("bringToBack") }, getBounds: function() {
                        var a = new e.LatLngBounds;
                        return this.eachLayer(function(b) { a.extend(b instanceof e.Marker ? b.getLatLng() : b.getBounds()) }), a }, _propagateEvent: function(a) { a = e.extend({ layer: a.target, target: this }, a), this.fire(a.type, a) } }), e.featureGroup = function(a) {
                    return new e.FeatureGroup(a) }, e.Path = e.Class.extend({
                    includes: [e.Mixin.Events],
                    statics: { CLIP_PADDING: function() {
                            var b = e.Browser.mobile ? 1280 : 2e3,
                                c = (b / Math.max(a.outerWidth, a.outerHeight) - 1) / 2;
                            return Math.max(0, Math.min(.5, c)) }() },
                    options: {
                        stroke: !0,
                        color: "#0033ff",
                        dashArray: null,
                        lineCap: null,
                        lineJoin: null,
                        weight: 5,
                        opacity: .5,
                        fill: !1,
                        fillColor: null,
                        fillOpacity: .2,
                        clickable: !0
                    },
                    initialize: function(a) { e.setOptions(this, a) },
                    onAdd: function(a) { this._map = a, this._container || (this._initElements(), this._initEvents()), this.projectLatlngs(), this._updatePath(), this._container && this._map._pathRoot.appendChild(this._container), this.fire("add"), a.on({ viewreset: this.projectLatlngs, moveend: this._updatePath }, this) },
                    addTo: function(a) {
                        return a.addLayer(this), this },
                    onRemove: function(a) { a._pathRoot.removeChild(this._container), this.fire("remove"), this._map = null, e.Browser.vml && (this._container = null, this._stroke = null, this._fill = null), a.off({ viewreset: this.projectLatlngs, moveend: this._updatePath }, this) },
                    projectLatlngs: function() {},
                    setStyle: function(a) {
                        return e.setOptions(this, a), this._container && this._updateStyle(), this },
                    redraw: function() {
                        return this._map && (this.projectLatlngs(), this._updatePath()), this }
                }), e.Map.include({ _updatePathViewport: function() {
                        var a = e.Path.CLIP_PADDING,
                            b = this.getSize(),
                            c = e.DomUtil.getPosition(this._mapPane),
                            d = c.multiplyBy(-1)._subtract(b.multiplyBy(a)._round()),
                            f = d.add(b.multiplyBy(1 + 2 * a)._round());
                        this._pathViewport = new e.Bounds(d, f) } }), e.Path.SVG_NS = "http://www.w3.org/2000/svg", e.Browser.svg = !(!b.createElementNS || !b.createElementNS(e.Path.SVG_NS, "svg").createSVGRect), e.Path = e.Path.extend({ statics: { SVG: e.Browser.svg }, bringToFront: function() {
                        var a = this._map._pathRoot,
                            b = this._container;
                        return b && a.lastChild !== b && a.appendChild(b), this }, bringToBack: function() {
                        var a = this._map._pathRoot,
                            b = this._container,
                            c = a.firstChild;
                        return b && c !== b && a.insertBefore(b, c), this }, getPathString: function() {}, _createElement: function(a) {
                        return b.createElementNS(e.Path.SVG_NS, a) }, _initElements: function() { this._map._initPathRoot(), this._initPath(), this._initStyle() }, _initPath: function() { this._container = this._createElement("g"), this._path = this._createElement("path"), this.options.className && e.DomUtil.addClass(this._path, this.options.className), this._container.appendChild(this._path) }, _initStyle: function() { this.options.stroke && (this._path.setAttribute("stroke-linejoin", "round"), this._path.setAttribute("stroke-linecap", "round")), this.options.fill && this._path.setAttribute("fill-rule", "evenodd"), this.options.pointerEvents && this._path.setAttribute("pointer-events", this.options.pointerEvents), this.options.clickable || this.options.pointerEvents || this._path.setAttribute("pointer-events", "none"), this._updateStyle() }, _updateStyle: function() { this.options.stroke ? (this._path.setAttribute("stroke", this.options.color), this._path.setAttribute("stroke-opacity", this.options.opacity), this._path.setAttribute("stroke-width", this.options.weight), this.options.dashArray ? this._path.setAttribute("stroke-dasharray", this.options.dashArray) : this._path.removeAttribute("stroke-dasharray"), this.options.lineCap && this._path.setAttribute("stroke-linecap", this.options.lineCap), this.options.lineJoin && this._path.setAttribute("stroke-linejoin", this.options.lineJoin)) : this._path.setAttribute("stroke", "none"), this.options.fill ? (this._path.setAttribute("fill", this.options.fillColor || this.options.color), this._path.setAttribute("fill-opacity", this.options.fillOpacity)) : this._path.setAttribute("fill", "none") }, _updatePath: function() {
                        var a = this.getPathString();
                        a || (a = "M0 0"), this._path.setAttribute("d", a) }, _initEvents: function() {
                        if (this.options.clickable) {
                            (e.Browser.svg || !e.Browser.vml) && e.DomUtil.addClass(this._path, "leaflet-clickable"), e.DomEvent.on(this._container, "click", this._onMouseClick, this);
                            for (var a = ["dblclick", "mousedown", "mouseover", "mouseout", "mousemove", "contextmenu"], b = 0; b < a.length; b++) e.DomEvent.on(this._container, a[b], this._fireMouseEvent, this) } }, _onMouseClick: function(a) { this._map.dragging && this._map.dragging.moved() || this._fireMouseEvent(a) }, _fireMouseEvent: function(a) {
                        if (this.hasEventListeners(a.type)) {
                            var b = this._map,
                                c = b.mouseEventToContainerPoint(a),
                                d = b.containerPointToLayerPoint(c),
                                f = b.layerPointToLatLng(d);
                            this.fire(a.type, { latlng: f, layerPoint: d, containerPoint: c, originalEvent: a }), "contextmenu" === a.type && e.DomEvent.preventDefault(a), "mousemove" !== a.type && e.DomEvent.stopPropagation(a) } } }), e.Map.include({ _initPathRoot: function() { this._pathRoot || (this._pathRoot = e.Path.prototype._createElement("svg"), this._panes.overlayPane.appendChild(this._pathRoot), this.options.zoomAnimation && e.Browser.any3d ? (e.DomUtil.addClass(this._pathRoot, "leaflet-zoom-animated"), this.on({ zoomanim: this._animatePathZoom, zoomend: this._endPathZoom })) : e.DomUtil.addClass(this._pathRoot, "leaflet-zoom-hide"), this.on("moveend", this._updateSvgViewport), this._updateSvgViewport()) }, _animatePathZoom: function(a) {
                        var b = this.getZoomScale(a.zoom),
                            c = this._getCenterOffset(a.center)._multiplyBy(-b)._add(this._pathViewport.min);
                        this._pathRoot.style[e.DomUtil.TRANSFORM] = e.DomUtil.getTranslateString(c) + " scale(" + b + ") ", this._pathZooming = !0 }, _endPathZoom: function() { this._pathZooming = !1 }, _updateSvgViewport: function() {
                        if (!this._pathZooming) { this._updatePathViewport();
                            var a = this._pathViewport,
                                b = a.min,
                                c = a.max,
                                d = c.x - b.x,
                                f = c.y - b.y,
                                g = this._pathRoot,
                                h = this._panes.overlayPane;
                            e.Browser.mobileWebkit && h.removeChild(g), e.DomUtil.setPosition(g, b), g.setAttribute("width", d), g.setAttribute("height", f), g.setAttribute("viewBox", [b.x, b.y, d, f].join(" ")), e.Browser.mobileWebkit && h.appendChild(g) } } }), e.Path.include({ bindPopup: function(a, b) {
                        return a instanceof e.Popup ? this._popup = a : ((!this._popup || b) && (this._popup = new e.Popup(b, this)), this._popup.setContent(a)), this._popupHandlersAdded || (this.on("click", this._openPopup, this).on("remove", this.closePopup, this), this._popupHandlersAdded = !0), this }, unbindPopup: function() {
                        return this._popup && (this._popup = null, this.off("click", this._openPopup).off("remove", this.closePopup), this._popupHandlersAdded = !1), this }, openPopup: function(a) {
                        return this._popup && (a = a || this._latlng || this._latlngs[Math.floor(this._latlngs.length / 2)], this._openPopup({ latlng: a })), this }, closePopup: function() {
                        return this._popup && this._popup._close(), this }, _openPopup: function(a) { this._popup.setLatLng(a.latlng), this._map.openPopup(this._popup) } }), e.Browser.vml = !e.Browser.svg && function() {
                    try {
                        var a = b.createElement("div");
                        a.innerHTML = '<v:shape adj="1"/>';
                        var c = a.firstChild;
                        return c.style.behavior = "url(#default#VML)", c && "object" == typeof c.adj } catch (d) {
                        return !1 } }(), e.Path = e.Browser.svg || !e.Browser.vml ? e.Path : e.Path.extend({ statics: { VML: !0, CLIP_PADDING: .02 }, _createElement: function() {
                        try {
                            return b.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
                                function(a) {
                                    return b.createElement("<lvml:" + a + ' class="lvml">') } } catch (a) {
                            return function(a) {
                                return b.createElement("<" + a + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">') } } }(), _initPath: function() {
                        var a = this._container = this._createElement("shape");
                        e.DomUtil.addClass(a, "leaflet-vml-shape" + (this.options.className ? " " + this.options.className : "")), this.options.clickable && e.DomUtil.addClass(a, "leaflet-clickable"), a.coordsize = "1 1", this._path = this._createElement("path"), a.appendChild(this._path), this._map._pathRoot.appendChild(a) }, _initStyle: function() { this._updateStyle() }, _updateStyle: function() {
                        var a = this._stroke,
                            b = this._fill,
                            c = this.options,
                            d = this._container;
                        d.stroked = c.stroke, d.filled = c.fill, c.stroke ? (a || (a = this._stroke = this._createElement("stroke"), a.endcap = "round", d.appendChild(a)), a.weight = c.weight + "px", a.color = c.color, a.opacity = c.opacity, c.dashArray ? a.dashStyle = e.Util.isArray(c.dashArray) ? c.dashArray.join(" ") : c.dashArray.replace(/( *, *)/g, " ") : a.dashStyle = "", c.lineCap && (a.endcap = c.lineCap.replace("butt", "flat")), c.lineJoin && (a.joinstyle = c.lineJoin)) : a && (d.removeChild(a), this._stroke = null), c.fill ? (b || (b = this._fill = this._createElement("fill"), d.appendChild(b)), b.color = c.fillColor || c.color, b.opacity = c.fillOpacity) : b && (d.removeChild(b), this._fill = null) }, _updatePath: function() {
                        var a = this._container.style;
                        a.display = "none", this._path.v = this.getPathString() + " ", a.display = "" } }), e.Map.include(e.Browser.svg || !e.Browser.vml ? {} : { _initPathRoot: function() {
                        if (!this._pathRoot) {
                            var a = this._pathRoot = b.createElement("div");
                            a.className = "leaflet-vml-container", this._panes.overlayPane.appendChild(a), this.on("moveend", this._updatePathViewport), this._updatePathViewport() } } }), e.Browser.canvas = function() {
                    return !!b.createElement("canvas").getContext }(), e.Path = e.Path.SVG && !a.L_PREFER_CANVAS || !e.Browser.canvas ? e.Path : e.Path.extend({ statics: { CANVAS: !0, SVG: !1 }, redraw: function() {
                        return this._map && (this.projectLatlngs(), this._requestUpdate()), this }, setStyle: function(a) {
                        return e.setOptions(this, a), this._map && (this._updateStyle(), this._requestUpdate()), this }, onRemove: function(a) { a.off("viewreset", this.projectLatlngs, this).off("moveend", this._updatePath, this), this.options.clickable && (this._map.off("click", this._onClick, this), this._map.off("mousemove", this._onMouseMove, this)), this._requestUpdate(), this.fire("remove"), this._map = null }, _requestUpdate: function() { this._map && !e.Path._updateRequest && (e.Path._updateRequest = e.Util.requestAnimFrame(this._fireMapMoveEnd, this._map)) }, _fireMapMoveEnd: function() { e.Path._updateRequest = null, this.fire("moveend") }, _initElements: function() { this._map._initPathRoot(), this._ctx = this._map._canvasCtx }, _updateStyle: function() {
                        var a = this.options;
                        a.stroke && (this._ctx.lineWidth = a.weight, this._ctx.strokeStyle = a.color), a.fill && (this._ctx.fillStyle = a.fillColor || a.color) }, _drawPath: function() {
                        var a, b, c, d, f, g;
                        for (this._ctx.beginPath(), a = 0, c = this._parts.length; c > a; a++) {
                            for (b = 0, d = this._parts[a].length; d > b; b++) f = this._parts[a][b], g = (0 === b ? "move" : "line") + "To", this._ctx[g](f.x, f.y);
                            this instanceof e.Polygon && this._ctx.closePath() } }, _checkIfEmpty: function() {
                        return !this._parts.length }, _updatePath: function() {
                        if (!this._checkIfEmpty()) {
                            var a = this._ctx,
                                b = this.options;
                            this._drawPath(), a.save(), this._updateStyle(), b.fill && (a.globalAlpha = b.fillOpacity, a.fill()), b.stroke && (a.globalAlpha = b.opacity, a.stroke()), a.restore() } }, _initEvents: function() { this.options.clickable && (this._map.on("mousemove", this._onMouseMove, this), this._map.on("click", this._onClick, this)) }, _onClick: function(a) { this._containsPoint(a.layerPoint) && this.fire("click", a) }, _onMouseMove: function(a) { this._map && !this._map._animatingZoom && (this._containsPoint(a.layerPoint) ? (this._ctx.canvas.style.cursor = "pointer", this._mouseInside = !0, this.fire("mouseover", a)) : this._mouseInside && (this._ctx.canvas.style.cursor = "", this._mouseInside = !1, this.fire("mouseout", a))) } }), e.Map.include(e.Path.SVG && !a.L_PREFER_CANVAS || !e.Browser.canvas ? {} : { _initPathRoot: function() {
                        var a, c = this._pathRoot;
                        c || (c = this._pathRoot = b.createElement("canvas"), c.style.position = "absolute", a = this._canvasCtx = c.getContext("2d"), a.lineCap = "round", a.lineJoin = "round", this._panes.overlayPane.appendChild(c), this.options.zoomAnimation && (this._pathRoot.className = "leaflet-zoom-animated", this.on("zoomanim", this._animatePathZoom), this.on("zoomend", this._endPathZoom)), this.on("moveend", this._updateCanvasViewport), this._updateCanvasViewport()) }, _updateCanvasViewport: function() {
                        if (!this._pathZooming) { this._updatePathViewport();
                            var a = this._pathViewport,
                                b = a.min,
                                c = a.max.subtract(b),
                                d = this._pathRoot;
                            e.DomUtil.setPosition(d, b), d.width = c.x, d.height = c.y, d.getContext("2d").translate(-b.x, -b.y) } } }), e.LineUtil = { simplify: function(a, b) {
                        if (!b || !a.length) return a.slice();
                        var c = b * b;
                        return a = this._reducePoints(a, c), a = this._simplifyDP(a, c) }, pointToSegmentDistance: function(a, b, c) {
                        return Math.sqrt(this._sqClosestPointOnSegment(a, b, c, !0)) }, closestPointOnSegment: function(a, b, c) {
                        return this._sqClosestPointOnSegment(a, b, c) }, _simplifyDP: function(a, b) {
                        var d = a.length,
                            e = typeof Uint8Array != c + "" ? Uint8Array : Array,
                            f = new e(d);
                        f[0] = f[d - 1] = 1, this._simplifyDPStep(a, f, b, 0, d - 1);
                        var g, h = [];
                        for (g = 0; d > g; g++) f[g] && h.push(a[g]);
                        return h }, _simplifyDPStep: function(a, b, c, d, e) {
                        var f, g, h, i = 0;
                        for (g = d + 1; e - 1 >= g; g++) h = this._sqClosestPointOnSegment(a[g], a[d], a[e], !0), h > i && (f = g, i = h);
                        i > c && (b[f] = 1, this._simplifyDPStep(a, b, c, d, f), this._simplifyDPStep(a, b, c, f, e)) }, _reducePoints: function(a, b) {
                        for (var c = [a[0]], d = 1, e = 0, f = a.length; f > d; d++) this._sqDist(a[d], a[e]) > b && (c.push(a[d]), e = d);
                        return f - 1 > e && c.push(a[f - 1]), c }, clipSegment: function(a, b, c, d) {
                        var e, f, g, h = d ? this._lastCode : this._getBitCode(a, c),
                            i = this._getBitCode(b, c);
                        for (this._lastCode = i;;) {
                            if (!(h | i)) return [a, b];
                            if (h & i) return !1;
                            e = h || i, f = this._getEdgeIntersection(a, b, e, c), g = this._getBitCode(f, c), e === h ? (a = f, h = g) : (b = f, i = g) } }, _getEdgeIntersection: function(a, b, c, d) {
                        var f = b.x - a.x,
                            g = b.y - a.y,
                            h = d.min,
                            i = d.max;
                        return 8 & c ? new e.Point(a.x + f * (i.y - a.y) / g, i.y) : 4 & c ? new e.Point(a.x + f * (h.y - a.y) / g, h.y) : 2 & c ? new e.Point(i.x, a.y + g * (i.x - a.x) / f) : 1 & c ? new e.Point(h.x, a.y + g * (h.x - a.x) / f) : void 0 }, _getBitCode: function(a, b) {
                        var c = 0;
                        return a.x < b.min.x ? c |= 1 : a.x > b.max.x && (c |= 2), a.y < b.min.y ? c |= 4 : a.y > b.max.y && (c |= 8), c }, _sqDist: function(a, b) {
                        var c = b.x - a.x,
                            d = b.y - a.y;
                        return c * c + d * d }, _sqClosestPointOnSegment: function(a, b, c, d) {
                        var f, g = b.x,
                            h = b.y,
                            i = c.x - g,
                            j = c.y - h,
                            k = i * i + j * j;
                        return k > 0 && (f = ((a.x - g) * i + (a.y - h) * j) / k, f > 1 ? (g = c.x, h = c.y) : f > 0 && (g += i * f, h += j * f)), i = a.x - g, j = a.y - h, d ? i * i + j * j : new e.Point(g, h) } }, e.Polyline = e.Path.extend({ initialize: function(a, b) { e.Path.prototype.initialize.call(this, b), this._latlngs = this._convertLatLngs(a) }, options: { smoothFactor: 1, noClip: !1 }, projectLatlngs: function() { this._originalPoints = [];
                        for (var a = 0, b = this._latlngs.length; b > a; a++) this._originalPoints[a] = this._map.latLngToLayerPoint(this._latlngs[a]) }, getPathString: function() {
                        for (var a = 0, b = this._parts.length, c = ""; b > a; a++) c += this._getPathPartStr(this._parts[a]);
                        return c }, getLatLngs: function() {
                        return this._latlngs }, setLatLngs: function(a) {
                        return this._latlngs = this._convertLatLngs(a), this.redraw() }, addLatLng: function(a) {
                        return this._latlngs.push(e.latLng(a)), this.redraw() }, spliceLatLngs: function() {
                        var a = [].splice.apply(this._latlngs, arguments);
                        return this._convertLatLngs(this._latlngs, !0), this.redraw(), a }, closestLayerPoint: function(a) {
                        for (var b, c, d = 1 / 0, f = this._parts, g = null, h = 0, i = f.length; i > h; h++)
                            for (var j = f[h], k = 1, l = j.length; l > k; k++) { b = j[k - 1], c = j[k];
                                var m = e.LineUtil._sqClosestPointOnSegment(a, b, c, !0);
                                d > m && (d = m, g = e.LineUtil._sqClosestPointOnSegment(a, b, c)) }
                        return g && (g.distance = Math.sqrt(d)), g }, getBounds: function() {
                        return new e.LatLngBounds(this.getLatLngs()) }, _convertLatLngs: function(a, b) {
                        var c, d, f = b ? a : [];
                        for (c = 0, d = a.length; d > c; c++) {
                            if (e.Util.isArray(a[c]) && "number" != typeof a[c][0]) return;
                            f[c] = e.latLng(a[c]) }
                        return f }, _initEvents: function() { e.Path.prototype._initEvents.call(this) }, _getPathPartStr: function(a) {
                        for (var b, c = e.Path.VML, d = 0, f = a.length, g = ""; f > d; d++) b = a[d], c && b._round(), g += (d ? "L" : "M") + b.x + " " + b.y;
                        return g }, _clipPoints: function() {
                        var a, b, c, d = this._originalPoints,
                            f = d.length;
                        if (this.options.noClip) return void(this._parts = [d]);
                        this._parts = [];
                        var g = this._parts,
                            h = this._map._pathViewport,
                            i = e.LineUtil;
                        for (a = 0, b = 0; f - 1 > a; a++) c = i.clipSegment(d[a], d[a + 1], h, a), c && (g[b] = g[b] || [], g[b].push(c[0]), (c[1] !== d[a + 1] || a === f - 2) && (g[b].push(c[1]), b++)) }, _simplifyPoints: function() {
                        for (var a = this._parts, b = e.LineUtil, c = 0, d = a.length; d > c; c++) a[c] = b.simplify(a[c], this.options.smoothFactor) }, _updatePath: function() { this._map && (this._clipPoints(), this._simplifyPoints(), e.Path.prototype._updatePath.call(this)) } }), e.polyline = function(a, b) {
                    return new e.Polyline(a, b) }, e.PolyUtil = {}, e.PolyUtil.clipPolygon = function(a, b) {
                    var c, d, f, g, h, i, j, k, l, m = [1, 4, 2, 8],
                        n = e.LineUtil;
                    for (d = 0, j = a.length; j > d; d++) a[d]._code = n._getBitCode(a[d], b);
                    for (g = 0; 4 > g; g++) {
                        for (k = m[g], c = [], d = 0, j = a.length, f = j - 1; j > d; f = d++) h = a[d], i = a[f], h._code & k ? i._code & k || (l = n._getEdgeIntersection(i, h, k, b), l._code = n._getBitCode(l, b), c.push(l)) : (i._code & k && (l = n._getEdgeIntersection(i, h, k, b), l._code = n._getBitCode(l, b), c.push(l)), c.push(h));
                        a = c }
                    return a }, e.Polygon = e.Polyline.extend({ options: { fill: !0 }, initialize: function(a, b) { e.Polyline.prototype.initialize.call(this, a, b), this._initWithHoles(a) }, _initWithHoles: function(a) {
                        var b, c, d;
                        if (a && e.Util.isArray(a[0]) && "number" != typeof a[0][0])
                            for (this._latlngs = this._convertLatLngs(a[0]), this._holes = a.slice(1), b = 0, c = this._holes.length; c > b; b++) d = this._holes[b] = this._convertLatLngs(this._holes[b]), d[0].equals(d[d.length - 1]) && d.pop();
                        a = this._latlngs, a.length >= 2 && a[0].equals(a[a.length - 1]) && a.pop() }, projectLatlngs: function() {
                        if (e.Polyline.prototype.projectLatlngs.call(this), this._holePoints = [], this._holes) {
                            var a, b, c, d;
                            for (a = 0, c = this._holes.length; c > a; a++)
                                for (this._holePoints[a] = [], b = 0, d = this._holes[a].length; d > b; b++) this._holePoints[a][b] = this._map.latLngToLayerPoint(this._holes[a][b]) } }, setLatLngs: function(a) {
                        return a && e.Util.isArray(a[0]) && "number" != typeof a[0][0] ? (this._initWithHoles(a), this.redraw()) : e.Polyline.prototype.setLatLngs.call(this, a) }, _clipPoints: function() {
                        var a = this._originalPoints,
                            b = [];
                        if (this._parts = [a].concat(this._holePoints), !this.options.noClip) {
                            for (var c = 0, d = this._parts.length; d > c; c++) {
                                var f = e.PolyUtil.clipPolygon(this._parts[c], this._map._pathViewport);
                                f.length && b.push(f) }
                            this._parts = b } }, _getPathPartStr: function(a) {
                        var b = e.Polyline.prototype._getPathPartStr.call(this, a);
                        return b + (e.Browser.svg ? "z" : "x") } }), e.polygon = function(a, b) {
                    return new e.Polygon(a, b) },
                function() {
                    function a(a) {
                        return e.FeatureGroup.extend({ initialize: function(a, b) { this._layers = {}, this._options = b, this.setLatLngs(a) }, setLatLngs: function(b) {
                                var c = 0,
                                    d = b.length;
                                for (this.eachLayer(function(a) { d > c ? a.setLatLngs(b[c++]) : this.removeLayer(a) }, this); d > c;) this.addLayer(new a(b[c++], this._options));
                                return this }, getLatLngs: function() {
                                var a = [];
                                return this.eachLayer(function(b) { a.push(b.getLatLngs()) }), a } }) }
                    e.MultiPolyline = a(e.Polyline), e.MultiPolygon = a(e.Polygon), e.multiPolyline = function(a, b) {
                        return new e.MultiPolyline(a, b) }, e.multiPolygon = function(a, b) {
                        return new e.MultiPolygon(a, b) } }(), e.Rectangle = e.Polygon.extend({ initialize: function(a, b) { e.Polygon.prototype.initialize.call(this, this._boundsToLatLngs(a), b) }, setBounds: function(a) { this.setLatLngs(this._boundsToLatLngs(a)) }, _boundsToLatLngs: function(a) {
                        return a = e.latLngBounds(a), [a.getSouthWest(), a.getNorthWest(), a.getNorthEast(), a.getSouthEast()] } }), e.rectangle = function(a, b) {
                    return new e.Rectangle(a, b) }, e.Circle = e.Path.extend({ initialize: function(a, b, c) { e.Path.prototype.initialize.call(this, c), this._latlng = e.latLng(a), this._mRadius = b }, options: { fill: !0 }, setLatLng: function(a) {
                        return this._latlng = e.latLng(a), this.redraw() }, setRadius: function(a) {
                        return this._mRadius = a, this.redraw() }, projectLatlngs: function() {
                        var a = this._getLngRadius(),
                            b = this._latlng,
                            c = this._map.latLngToLayerPoint([b.lat, b.lng - a]);
                        this._point = this._map.latLngToLayerPoint(b), this._radius = Math.max(this._point.x - c.x, 1) }, getBounds: function() {
                        var a = this._getLngRadius(),
                            b = this._mRadius / 40075017 * 360,
                            c = this._latlng;
                        return new e.LatLngBounds([c.lat - b, c.lng - a], [c.lat + b, c.lng + a]) }, getLatLng: function() {
                        return this._latlng }, getPathString: function() {
                        var a = this._point,
                            b = this._radius;
                        return this._checkIfEmpty() ? "" : e.Browser.svg ? "M" + a.x + "," + (a.y - b) + "A" + b + "," + b + ",0,1,1," + (a.x - .1) + "," + (a.y - b) + " z" : (a._round(), b = Math.round(b), "AL " + a.x + "," + a.y + " " + b + "," + b + " 0,23592600") }, getRadius: function() {
                        return this._mRadius }, _getLatRadius: function() {
                        return this._mRadius / 40075017 * 360 }, _getLngRadius: function() {
                        return this._getLatRadius() / Math.cos(e.LatLng.DEG_TO_RAD * this._latlng.lat) }, _checkIfEmpty: function() {
                        if (!this._map) return !1;
                        var a = this._map._pathViewport,
                            b = this._radius,
                            c = this._point;
                        return c.x - b > a.max.x || c.y - b > a.max.y || c.x + b < a.min.x || c.y + b < a.min.y } }), e.circle = function(a, b, c) {
                    return new e.Circle(a, b, c) }, e.CircleMarker = e.Circle.extend({ options: { radius: 10, weight: 2 }, initialize: function(a, b) { e.Circle.prototype.initialize.call(this, a, null, b), this._radius = this.options.radius }, projectLatlngs: function() { this._point = this._map.latLngToLayerPoint(this._latlng) }, _updateStyle: function() { e.Circle.prototype._updateStyle.call(this), this.setRadius(this.options.radius) }, setLatLng: function(a) {
                        return e.Circle.prototype.setLatLng.call(this, a), this._popup && this._popup._isOpen && this._popup.setLatLng(a), this }, setRadius: function(a) {
                        return this.options.radius = this._radius = a, this.redraw() }, getRadius: function() {
                        return this._radius } }), e.circleMarker = function(a, b) {
                    return new e.CircleMarker(a, b) }, e.Polyline.include(e.Path.CANVAS ? { _containsPoint: function(a, b) {
                        var c, d, f, g, h, i, j, k = this.options.weight / 2;
                        for (e.Browser.touch && (k += 10), c = 0, g = this._parts.length; g > c; c++)
                            for (j = this._parts[c], d = 0, h = j.length, f = h - 1; h > d; f = d++)
                                if ((b || 0 !== d) && (i = e.LineUtil.pointToSegmentDistance(a, j[f], j[d]), k >= i)) return !0;
                        return !1 } } : {}), e.Polygon.include(e.Path.CANVAS ? { _containsPoint: function(a) {
                        var b, c, d, f, g, h, i, j, k = !1;
                        if (e.Polyline.prototype._containsPoint.call(this, a, !0)) return !0;
                        for (f = 0, i = this._parts.length; i > f; f++)
                            for (b = this._parts[f], g = 0, j = b.length, h = j - 1; j > g; h = g++) c = b[g], d = b[h], c.y > a.y != d.y > a.y && a.x < (d.x - c.x) * (a.y - c.y) / (d.y - c.y) + c.x && (k = !k);
                        return k } } : {}), e.Circle.include(e.Path.CANVAS ? { _drawPath: function() {
                        var a = this._point;
                        this._ctx.beginPath(), this._ctx.arc(a.x, a.y, this._radius, 0, 2 * Math.PI, !1) }, _containsPoint: function(a) {
                        var b = this._point,
                            c = this.options.stroke ? this.options.weight / 2 : 0;
                        return a.distanceTo(b) <= this._radius + c } } : {}), e.CircleMarker.include(e.Path.CANVAS ? { _updateStyle: function() { e.Path.prototype._updateStyle.call(this) } } : {}), e.GeoJSON = e.FeatureGroup.extend({ initialize: function(a, b) { e.setOptions(this, b), this._layers = {}, a && this.addData(a) }, addData: function(a) {
                        var b, c, d, f = e.Util.isArray(a) ? a : a.features;
                        if (f) {
                            for (b = 0, c = f.length; c > b; b++) d = f[b], (d.geometries || d.geometry || d.features || d.coordinates) && this.addData(f[b]);
                            return this }
                        var g = this.options;
                        if (!g.filter || g.filter(a)) {
                            var h = e.GeoJSON.geometryToLayer(a, g.pointToLayer, g.coordsToLatLng, g);
                            return h.feature = e.GeoJSON.asFeature(a), h.defaultOptions = h.options, this.resetStyle(h), g.onEachFeature && g.onEachFeature(a, h), this.addLayer(h) } }, resetStyle: function(a) {
                        var b = this.options.style;
                        b && (e.Util.extend(a.options, a.defaultOptions), this._setLayerStyle(a, b)) }, setStyle: function(a) { this.eachLayer(function(b) { this._setLayerStyle(b, a) }, this) }, _setLayerStyle: function(a, b) { "function" == typeof b && (b = b(a.feature)), a.setStyle && a.setStyle(b) } }), e.extend(e.GeoJSON, { geometryToLayer: function(a, b, c, d) {
                        var f, g, h, i, j = "Feature" === a.type ? a.geometry : a,
                            k = j.coordinates,
                            l = [];
                        switch (c = c || this.coordsToLatLng, j.type) {
                            case "Point":
                                return f = c(k), b ? b(a, f) : new e.Marker(f);
                            case "MultiPoint":
                                for (h = 0, i = k.length; i > h; h++) f = c(k[h]), l.push(b ? b(a, f) : new e.Marker(f));
                                return new e.FeatureGroup(l);
                            case "LineString":
                                return g = this.coordsToLatLngs(k, 0, c), new e.Polyline(g, d);
                            case "Polygon":
                                if (2 === k.length && !k[1].length) throw new Error("Invalid GeoJSON object.");
                                return g = this.coordsToLatLngs(k, 1, c), new e.Polygon(g, d);
                            case "MultiLineString":
                                return g = this.coordsToLatLngs(k, 1, c), new e.MultiPolyline(g, d);
                            case "MultiPolygon":
                                return g = this.coordsToLatLngs(k, 2, c), new e.MultiPolygon(g, d);
                            case "GeometryCollection":
                                for (h = 0, i = j.geometries.length; i > h; h++) l.push(this.geometryToLayer({ geometry: j.geometries[h], type: "Feature", properties: a.properties }, b, c, d));
                                return new e.FeatureGroup(l);
                            default:
                                throw new Error("Invalid GeoJSON object.") } }, coordsToLatLng: function(a) {
                        return new e.LatLng(a[1], a[0], a[2]) }, coordsToLatLngs: function(a, b, c) {
                        var d, e, f, g = [];
                        for (e = 0, f = a.length; f > e; e++) d = b ? this.coordsToLatLngs(a[e], b - 1, c) : (c || this.coordsToLatLng)(a[e]), g.push(d);
                        return g }, latLngToCoords: function(a) {
                        var b = [a.lng, a.lat];
                        return a.alt !== c && b.push(a.alt), b }, latLngsToCoords: function(a) {
                        for (var b = [], c = 0, d = a.length; d > c; c++) b.push(e.GeoJSON.latLngToCoords(a[c]));
                        return b }, getFeature: function(a, b) {
                        return a.feature ? e.extend({}, a.feature, { geometry: b }) : e.GeoJSON.asFeature(b) }, asFeature: function(a) {
                        return "Feature" === a.type ? a : { type: "Feature", properties: {}, geometry: a } } });
            var g = { toGeoJSON: function() {
                    return e.GeoJSON.getFeature(this, { type: "Point", coordinates: e.GeoJSON.latLngToCoords(this.getLatLng()) }) } };
            e.Marker.include(g), e.Circle.include(g), e.CircleMarker.include(g), e.Polyline.include({ toGeoJSON: function() {
                        return e.GeoJSON.getFeature(this, { type: "LineString", coordinates: e.GeoJSON.latLngsToCoords(this.getLatLngs()) }) } }), e.Polygon.include({ toGeoJSON: function() {
                        var a, b, c, d = [e.GeoJSON.latLngsToCoords(this.getLatLngs())];
                        if (d[0].push(d[0][0]), this._holes)
                            for (a = 0, b = this._holes.length; b > a; a++) c = e.GeoJSON.latLngsToCoords(this._holes[a]), c.push(c[0]), d.push(c);
                        return e.GeoJSON.getFeature(this, { type: "Polygon", coordinates: d }) } }),
                function() {
                    function a(a) {
                        return function() {
                            var b = [];
                            return this.eachLayer(function(a) { b.push(a.toGeoJSON().geometry.coordinates) }), e.GeoJSON.getFeature(this, { type: a, coordinates: b }) } }
                    e.MultiPolyline.include({ toGeoJSON: a("MultiLineString") }), e.MultiPolygon.include({ toGeoJSON: a("MultiPolygon") }), e.LayerGroup.include({ toGeoJSON: function() {
                            var b, c = this.feature && this.feature.geometry,
                                d = [];
                            if (c && "MultiPoint" === c.type) return a("MultiPoint").call(this);
                            var f = c && "GeometryCollection" === c.type;
                            return this.eachLayer(function(a) { a.toGeoJSON && (b = a.toGeoJSON(), d.push(f ? b.geometry : e.GeoJSON.asFeature(b))) }), f ? e.GeoJSON.getFeature(this, { geometries: d, type: "GeometryCollection" }) : { type: "FeatureCollection", features: d } } }) }(), e.geoJson = function(a, b) {
                    return new e.GeoJSON(a, b) }, e.DomEvent = { addListener: function(a, b, c, d) {
                        var f, g, h, i = e.stamp(c),
                            j = "_leaflet_" + b + i;
                        return a[j] ? this : (f = function(b) {
                            return c.call(d || a, b || e.DomEvent._getEvent()) }, e.Browser.pointer && 0 === b.indexOf("touch") ? this.addPointerListener(a, b, f, i) : (e.Browser.touch && "dblclick" === b && this.addDoubleTapListener && this.addDoubleTapListener(a, f, i), "addEventListener" in a ? "mousewheel" === b ? (a.addEventListener("DOMMouseScroll", f, !1), a.addEventListener(b, f, !1)) : "mouseenter" === b || "mouseleave" === b ? (g = f, h = "mouseenter" === b ? "mouseover" : "mouseout", f = function(b) {
                            return e.DomEvent._checkMouse(a, b) ? g(b) : void 0 }, a.addEventListener(h, f, !1)) : "click" === b && e.Browser.android ? (g = f, f = function(a) {
                            return e.DomEvent._filterClick(a, g) }, a.addEventListener(b, f, !1)) : a.addEventListener(b, f, !1) : "attachEvent" in a && a.attachEvent("on" + b, f), a[j] = f, this)) }, removeListener: function(a, b, c) {
                        var d = e.stamp(c),
                            f = "_leaflet_" + b + d,
                            g = a[f];
                        return g ? (e.Browser.pointer && 0 === b.indexOf("touch") ? this.removePointerListener(a, b, d) : e.Browser.touch && "dblclick" === b && this.removeDoubleTapListener ? this.removeDoubleTapListener(a, d) : "removeEventListener" in a ? "mousewheel" === b ? (a.removeEventListener("DOMMouseScroll", g, !1), a.removeEventListener(b, g, !1)) : "mouseenter" === b || "mouseleave" === b ? a.removeEventListener("mouseenter" === b ? "mouseover" : "mouseout", g, !1) : a.removeEventListener(b, g, !1) : "detachEvent" in a && a.detachEvent("on" + b, g), a[f] = null, this) : this }, stopPropagation: function(a) {
                        return a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0, e.DomEvent._skipped(a), this }, disableScrollPropagation: function(a) {
                        var b = e.DomEvent.stopPropagation;
                        return e.DomEvent.on(a, "mousewheel", b).on(a, "MozMousePixelScroll", b) }, disableClickPropagation: function(a) {
                        for (var b = e.DomEvent.stopPropagation, c = e.Draggable.START.length - 1; c >= 0; c--) e.DomEvent.on(a, e.Draggable.START[c], b);
                        return e.DomEvent.on(a, "click", e.DomEvent._fakeStop).on(a, "dblclick", b) }, preventDefault: function(a) {
                        return a.preventDefault ? a.preventDefault() : a.returnValue = !1, this }, stop: function(a) {
                        return e.DomEvent.preventDefault(a).stopPropagation(a) }, getMousePosition: function(a, b) {
                        if (!b) return new e.Point(a.clientX, a.clientY);
                        var c = b.getBoundingClientRect();
                        return new e.Point(a.clientX - c.left - b.clientLeft, a.clientY - c.top - b.clientTop) }, getWheelDelta: function(a) {
                        var b = 0;
                        return a.wheelDelta && (b = a.wheelDelta / 120), a.detail && (b = -a.detail / 3), b }, _skipEvents: {}, _fakeStop: function(a) { e.DomEvent._skipEvents[a.type] = !0 }, _skipped: function(a) {
                        var b = this._skipEvents[a.type];
                        return this._skipEvents[a.type] = !1, b }, _checkMouse: function(a, b) {
                        var c = b.relatedTarget;
                        if (!c) return !0;
                        try {
                            for (; c && c !== a;) c = c.parentNode } catch (d) {
                            return !1 }
                        return c !== a }, _getEvent: function() {
                        var b = a.event;
                        if (!b)
                            for (var c = arguments.callee.caller; c && (b = c.arguments[0], !b || a.Event !== b.constructor);) c = c.caller;
                        return b }, _filterClick: function(a, b) {
                        var c = a.timeStamp || a.originalEvent.timeStamp,
                            d = e.DomEvent._lastClick && c - e.DomEvent._lastClick;
                        return d && d > 100 && 500 > d || a.target._simulatedClick && !a._simulated ? void e.DomEvent.stop(a) : (e.DomEvent._lastClick = c, b(a)) } }, e.DomEvent.on = e.DomEvent.addListener, e.DomEvent.off = e.DomEvent.removeListener, e.Draggable = e.Class.extend({ includes: e.Mixin.Events, statics: { START: e.Browser.touch ? ["touchstart", "mousedown"] : ["mousedown"], END: { mousedown: "mouseup", touchstart: "touchend", pointerdown: "touchend", MSPointerDown: "touchend" }, MOVE: { mousedown: "mousemove", touchstart: "touchmove", pointerdown: "touchmove", MSPointerDown: "touchmove" } }, initialize: function(a, b) { this._element = a, this._dragStartTarget = b || a }, enable: function() {
                        if (!this._enabled) {
                            for (var a = e.Draggable.START.length - 1; a >= 0; a--) e.DomEvent.on(this._dragStartTarget, e.Draggable.START[a], this._onDown, this);
                            this._enabled = !0 } }, disable: function() {
                        if (this._enabled) {
                            for (var a = e.Draggable.START.length - 1; a >= 0; a--) e.DomEvent.off(this._dragStartTarget, e.Draggable.START[a], this._onDown, this);
                            this._enabled = !1, this._moved = !1 } }, _onDown: function(a) {
                        if (this._moved = !1, !a.shiftKey && (1 === a.which || 1 === a.button || a.touches) && (e.DomEvent.stopPropagation(a), !e.Draggable._disabled && (e.DomUtil.disableImageDrag(), e.DomUtil.disableTextSelection(), !this._moving))) {
                            var c = a.touches ? a.touches[0] : a;
                            this._startPoint = new e.Point(c.clientX, c.clientY), this._startPos = this._newPos = e.DomUtil.getPosition(this._element), e.DomEvent.on(b, e.Draggable.MOVE[a.type], this._onMove, this).on(b, e.Draggable.END[a.type], this._onUp, this) } }, _onMove: function(a) {
                        if (a.touches && a.touches.length > 1) return void(this._moved = !0);
                        var c = a.touches && 1 === a.touches.length ? a.touches[0] : a,
                            d = new e.Point(c.clientX, c.clientY),
                            f = d.subtract(this._startPoint);
                        (f.x || f.y) && (e.Browser.touch && Math.abs(f.x) + Math.abs(f.y) < 3 || (e.DomEvent.preventDefault(a), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = e.DomUtil.getPosition(this._element).subtract(f), e.DomUtil.addClass(b.body, "leaflet-dragging"), this._lastTarget = a.target || a.srcElement, e.DomUtil.addClass(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(f), this._moving = !0, e.Util.cancelAnimFrame(this._animRequest), this._animRequest = e.Util.requestAnimFrame(this._updatePosition, this, !0, this._dragStartTarget))) }, _updatePosition: function() { this.fire("predrag"), e.DomUtil.setPosition(this._element, this._newPos), this.fire("drag") }, _onUp: function() { e.DomUtil.removeClass(b.body, "leaflet-dragging"), this._lastTarget && (e.DomUtil.removeClass(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null);
                        for (var a in e.Draggable.MOVE) e.DomEvent.off(b, e.Draggable.MOVE[a], this._onMove).off(b, e.Draggable.END[a], this._onUp);
                        e.DomUtil.enableImageDrag(), e.DomUtil.enableTextSelection(), this._moved && this._moving && (e.Util.cancelAnimFrame(this._animRequest), this.fire("dragend", { distance: this._newPos.distanceTo(this._startPos) })), this._moving = !1 } }), e.Handler = e.Class.extend({ initialize: function(a) { this._map = a }, enable: function() { this._enabled || (this._enabled = !0, this.addHooks()) }, disable: function() { this._enabled && (this._enabled = !1, this.removeHooks()) }, enabled: function() {
                        return !!this._enabled } }), e.Map.mergeOptions({ dragging: !0, inertia: !e.Browser.android23, inertiaDeceleration: 3400, inertiaMaxSpeed: 1 / 0, inertiaThreshold: e.Browser.touch ? 32 : 18, easeLinearity: .25, worldCopyJump: !1 }), e.Map.Drag = e.Handler.extend({
                    addHooks: function() {
                        if (!this._draggable) {
                            var a = this._map;
                            this._draggable = new e.Draggable(a._mapPane, a._container), this._draggable.on({ dragstart: this._onDragStart, drag: this._onDrag, dragend: this._onDragEnd }, this), a.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDrag, this), a.on("viewreset", this._onViewReset, this), a.whenReady(this._onViewReset, this)) }
                        this._draggable.enable() },
                    removeHooks: function() { this._draggable.disable() },
                    moved: function() {
                        return this._draggable && this._draggable._moved },
                    _onDragStart: function() {
                        var a = this._map;
                        a._panAnim && a._panAnim.stop(), a.fire("movestart").fire("dragstart"), a.options.inertia && (this._positions = [], this._times = []) },
                    _onDrag: function() {
                        if (this._map.options.inertia) {
                            var a = this._lastTime = +new Date,
                                b = this._lastPos = this._draggable._newPos;
                            this._positions.push(b), this._times.push(a), a - this._times[0] > 200 && (this._positions.shift(), this._times.shift()) }
                        this._map.fire("move").fire("drag") },
                    _onViewReset: function() {
                        var a = this._map.getSize()._divideBy(2),
                            b = this._map.latLngToLayerPoint([0, 0]);
                        this._initialWorldOffset = b.subtract(a).x, this._worldWidth = this._map.project([0, 180]).x },
                    _onPreDrag: function() {
                        var a = this._worldWidth,
                            b = Math.round(a / 2),
                            c = this._initialWorldOffset,
                            d = this._draggable._newPos.x,
                            e = (d - b + c) % a + b - c,
                            f = (d + b + c) % a - b - c,
                            g = Math.abs(e + c) < Math.abs(f + c) ? e : f;
                        this._draggable._newPos.x = g
                    },
                    _onDragEnd: function(a) {
                        var b = this._map,
                            c = b.options,
                            d = +new Date - this._lastTime,
                            f = !c.inertia || d > c.inertiaThreshold || !this._positions[0];
                        if (b.fire("dragend", a), f) b.fire("moveend");
                        else {
                            var g = this._lastPos.subtract(this._positions[0]),
                                h = (this._lastTime + d - this._times[0]) / 1e3,
                                i = c.easeLinearity,
                                j = g.multiplyBy(i / h),
                                k = j.distanceTo([0, 0]),
                                l = Math.min(c.inertiaMaxSpeed, k),
                                m = j.multiplyBy(l / k),
                                n = l / (c.inertiaDeceleration * i),
                                o = m.multiplyBy(-n / 2).round();
                            o.x && o.y ? (o = b._limitOffset(o, b.options.maxBounds), e.Util.requestAnimFrame(function() { b.panBy(o, { duration: n, easeLinearity: i, noMoveStart: !0 }) })) : b.fire("moveend") } }
                }), e.Map.addInitHook("addHandler", "dragging", e.Map.Drag), e.Map.mergeOptions({ doubleClickZoom: !0 }), e.Map.DoubleClickZoom = e.Handler.extend({ addHooks: function() { this._map.on("dblclick", this._onDoubleClick, this) }, removeHooks: function() { this._map.off("dblclick", this._onDoubleClick, this) }, _onDoubleClick: function(a) {
                        var b = this._map,
                            c = b.getZoom() + (a.originalEvent.shiftKey ? -1 : 1); "center" === b.options.doubleClickZoom ? b.setZoom(c) : b.setZoomAround(a.containerPoint, c) } }), e.Map.addInitHook("addHandler", "doubleClickZoom", e.Map.DoubleClickZoom), e.Map.mergeOptions({ scrollWheelZoom: !0 }), e.Map.ScrollWheelZoom = e.Handler.extend({ addHooks: function() { e.DomEvent.on(this._map._container, "mousewheel", this._onWheelScroll, this), e.DomEvent.on(this._map._container, "MozMousePixelScroll", e.DomEvent.preventDefault), this._delta = 0 }, removeHooks: function() { e.DomEvent.off(this._map._container, "mousewheel", this._onWheelScroll), e.DomEvent.off(this._map._container, "MozMousePixelScroll", e.DomEvent.preventDefault) }, _onWheelScroll: function(a) {
                        var b = e.DomEvent.getWheelDelta(a);
                        this._delta += b, this._lastMousePos = this._map.mouseEventToContainerPoint(a), this._startTime || (this._startTime = +new Date);
                        var c = Math.max(40 - (+new Date - this._startTime), 0);
                        clearTimeout(this._timer), this._timer = setTimeout(e.bind(this._performZoom, this), c), e.DomEvent.preventDefault(a), e.DomEvent.stopPropagation(a) }, _performZoom: function() {
                        var a = this._map,
                            b = this._delta,
                            c = a.getZoom();
                        b = b > 0 ? Math.ceil(b) : Math.floor(b), b = Math.max(Math.min(b, 4), -4), b = a._limitZoom(c + b) - c, this._delta = 0, this._startTime = null, b && ("center" === a.options.scrollWheelZoom ? a.setZoom(c + b) : a.setZoomAround(this._lastMousePos, c + b)) } }), e.Map.addInitHook("addHandler", "scrollWheelZoom", e.Map.ScrollWheelZoom), e.extend(e.DomEvent, { _touchstart: e.Browser.msPointer ? "MSPointerDown" : e.Browser.pointer ? "pointerdown" : "touchstart", _touchend: e.Browser.msPointer ? "MSPointerUp" : e.Browser.pointer ? "pointerup" : "touchend", addDoubleTapListener: function(a, c, d) {
                        function f(a) {
                            var b;
                            if (e.Browser.pointer ? (o.push(a.pointerId), b = o.length) : b = a.touches.length, !(b > 1)) {
                                var c = Date.now(),
                                    d = c - (h || c);
                                i = a.touches ? a.touches[0] : a, j = d > 0 && k >= d, h = c } }

                        function g(a) {
                            if (e.Browser.pointer) {
                                var b = o.indexOf(a.pointerId);
                                if (-1 === b) return;
                                o.splice(b, 1) }
                            if (j) {
                                if (e.Browser.pointer) {
                                    var d, f = {};
                                    for (var g in i) d = i[g], "function" == typeof d ? f[g] = d.bind(i) : f[g] = d;
                                    i = f }
                                i.type = "dblclick", c(i), h = null } }
                        var h, i, j = !1,
                            k = 250,
                            l = "_leaflet_",
                            m = this._touchstart,
                            n = this._touchend,
                            o = [];
                        a[l + m + d] = f, a[l + n + d] = g;
                        var p = e.Browser.pointer ? b.documentElement : a;
                        return a.addEventListener(m, f, !1), p.addEventListener(n, g, !1), e.Browser.pointer && p.addEventListener(e.DomEvent.POINTER_CANCEL, g, !1), this }, removeDoubleTapListener: function(a, c) {
                        var d = "_leaflet_";
                        return a.removeEventListener(this._touchstart, a[d + this._touchstart + c], !1), (e.Browser.pointer ? b.documentElement : a).removeEventListener(this._touchend, a[d + this._touchend + c], !1), e.Browser.pointer && b.documentElement.removeEventListener(e.DomEvent.POINTER_CANCEL, a[d + this._touchend + c], !1), this } }), e.extend(e.DomEvent, { POINTER_DOWN: e.Browser.msPointer ? "MSPointerDown" : "pointerdown", POINTER_MOVE: e.Browser.msPointer ? "MSPointerMove" : "pointermove", POINTER_UP: e.Browser.msPointer ? "MSPointerUp" : "pointerup", POINTER_CANCEL: e.Browser.msPointer ? "MSPointerCancel" : "pointercancel", _pointers: [], _pointerDocumentListener: !1, addPointerListener: function(a, b, c, d) {
                        switch (b) {
                            case "touchstart":
                                return this.addPointerListenerStart(a, b, c, d);
                            case "touchend":
                                return this.addPointerListenerEnd(a, b, c, d);
                            case "touchmove":
                                return this.addPointerListenerMove(a, b, c, d);
                            default:
                                throw "Unknown touch event type" } }, addPointerListenerStart: function(a, c, d, f) {
                        var g = "_leaflet_",
                            h = this._pointers,
                            i = function(a) { e.DomEvent.preventDefault(a);
                                for (var b = !1, c = 0; c < h.length; c++)
                                    if (h[c].pointerId === a.pointerId) { b = !0;
                                        break }
                                b || h.push(a), a.touches = h.slice(), a.changedTouches = [a], d(a) };
                        if (a[g + "touchstart" + f] = i, a.addEventListener(this.POINTER_DOWN, i, !1), !this._pointerDocumentListener) {
                            var j = function(a) {
                                for (var b = 0; b < h.length; b++)
                                    if (h[b].pointerId === a.pointerId) { h.splice(b, 1);
                                        break } };
                            b.documentElement.addEventListener(this.POINTER_UP, j, !1), b.documentElement.addEventListener(this.POINTER_CANCEL, j, !1), this._pointerDocumentListener = !0 }
                        return this }, addPointerListenerMove: function(a, b, c, d) {
                        function e(a) {
                            if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType || 0 !== a.buttons) {
                                for (var b = 0; b < g.length; b++)
                                    if (g[b].pointerId === a.pointerId) { g[b] = a;
                                        break }
                                a.touches = g.slice(), a.changedTouches = [a], c(a) } }
                        var f = "_leaflet_",
                            g = this._pointers;
                        return a[f + "touchmove" + d] = e, a.addEventListener(this.POINTER_MOVE, e, !1), this }, addPointerListenerEnd: function(a, b, c, d) {
                        var e = "_leaflet_",
                            f = this._pointers,
                            g = function(a) {
                                for (var b = 0; b < f.length; b++)
                                    if (f[b].pointerId === a.pointerId) { f.splice(b, 1);
                                        break }
                                a.touches = f.slice(), a.changedTouches = [a], c(a) };
                        return a[e + "touchend" + d] = g, a.addEventListener(this.POINTER_UP, g, !1), a.addEventListener(this.POINTER_CANCEL, g, !1), this }, removePointerListener: function(a, b, c) {
                        var d = "_leaflet_",
                            e = a[d + b + c];
                        switch (b) {
                            case "touchstart":
                                a.removeEventListener(this.POINTER_DOWN, e, !1);
                                break;
                            case "touchmove":
                                a.removeEventListener(this.POINTER_MOVE, e, !1);
                                break;
                            case "touchend":
                                a.removeEventListener(this.POINTER_UP, e, !1), a.removeEventListener(this.POINTER_CANCEL, e, !1) }
                        return this } }), e.Map.mergeOptions({ touchZoom: e.Browser.touch && !e.Browser.android23, bounceAtZoomLimits: !0 }), e.Map.TouchZoom = e.Handler.extend({ addHooks: function() { e.DomEvent.on(this._map._container, "touchstart", this._onTouchStart, this) }, removeHooks: function() { e.DomEvent.off(this._map._container, "touchstart", this._onTouchStart, this) }, _onTouchStart: function(a) {
                        var c = this._map;
                        if (a.touches && 2 === a.touches.length && !c._animatingZoom && !this._zooming) {
                            var d = c.mouseEventToLayerPoint(a.touches[0]),
                                f = c.mouseEventToLayerPoint(a.touches[1]),
                                g = c._getCenterLayerPoint();
                            this._startCenter = d.add(f)._divideBy(2), this._startDist = d.distanceTo(f), this._moved = !1, this._zooming = !0, this._centerOffset = g.subtract(this._startCenter), c._panAnim && c._panAnim.stop(), e.DomEvent.on(b, "touchmove", this._onTouchMove, this).on(b, "touchend", this._onTouchEnd, this), e.DomEvent.preventDefault(a) } }, _onTouchMove: function(a) {
                        var b = this._map;
                        if (a.touches && 2 === a.touches.length && this._zooming) {
                            var c = b.mouseEventToLayerPoint(a.touches[0]),
                                d = b.mouseEventToLayerPoint(a.touches[1]);
                            this._scale = c.distanceTo(d) / this._startDist, this._delta = c._add(d)._divideBy(2)._subtract(this._startCenter), 1 !== this._scale && (b.options.bounceAtZoomLimits || !(b.getZoom() === b.getMinZoom() && this._scale < 1 || b.getZoom() === b.getMaxZoom() && this._scale > 1)) && (this._moved || (e.DomUtil.addClass(b._mapPane, "leaflet-touching"), b.fire("movestart").fire("zoomstart"), this._moved = !0), e.Util.cancelAnimFrame(this._animRequest), this._animRequest = e.Util.requestAnimFrame(this._updateOnMove, this, !0, this._map._container), e.DomEvent.preventDefault(a)) } }, _updateOnMove: function() {
                        var a = this._map,
                            b = this._getScaleOrigin(),
                            c = a.layerPointToLatLng(b),
                            d = a.getScaleZoom(this._scale);
                        a._animateZoom(c, d, this._startCenter, this._scale, this._delta, !1, !0) }, _onTouchEnd: function() {
                        if (!this._moved || !this._zooming) return void(this._zooming = !1);
                        var a = this._map;
                        this._zooming = !1, e.DomUtil.removeClass(a._mapPane, "leaflet-touching"), e.Util.cancelAnimFrame(this._animRequest), e.DomEvent.off(b, "touchmove", this._onTouchMove).off(b, "touchend", this._onTouchEnd);
                        var c = this._getScaleOrigin(),
                            d = a.layerPointToLatLng(c),
                            f = a.getZoom(),
                            g = a.getScaleZoom(this._scale) - f,
                            h = g > 0 ? Math.ceil(g) : Math.floor(g),
                            i = a._limitZoom(f + h),
                            j = a.getZoomScale(i) / this._scale;
                        a._animateZoom(d, i, c, j) }, _getScaleOrigin: function() {
                        var a = this._centerOffset.subtract(this._delta).divideBy(this._scale);
                        return this._startCenter.add(a) } }), e.Map.addInitHook("addHandler", "touchZoom", e.Map.TouchZoom), e.Map.mergeOptions({ tap: !0, tapTolerance: 15 }), e.Map.Tap = e.Handler.extend({ addHooks: function() { e.DomEvent.on(this._map._container, "touchstart", this._onDown, this) }, removeHooks: function() { e.DomEvent.off(this._map._container, "touchstart", this._onDown, this) }, _onDown: function(a) {
                        if (a.touches) {
                            if (e.DomEvent.preventDefault(a), this._fireClick = !0, a.touches.length > 1) return this._fireClick = !1, void clearTimeout(this._holdTimeout);
                            var c = a.touches[0],
                                d = c.target;
                            this._startPos = this._newPos = new e.Point(c.clientX, c.clientY), d.tagName && "a" === d.tagName.toLowerCase() && e.DomUtil.addClass(d, "leaflet-active"), this._holdTimeout = setTimeout(e.bind(function() { this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", c)) }, this), 1e3), e.DomEvent.on(b, "touchmove", this._onMove, this).on(b, "touchend", this._onUp, this) } }, _onUp: function(a) {
                        if (clearTimeout(this._holdTimeout), e.DomEvent.off(b, "touchmove", this._onMove, this).off(b, "touchend", this._onUp, this), this._fireClick && a && a.changedTouches) {
                            var c = a.changedTouches[0],
                                d = c.target;
                            d && d.tagName && "a" === d.tagName.toLowerCase() && e.DomUtil.removeClass(d, "leaflet-active"), this._isTapValid() && this._simulateEvent("click", c) } }, _isTapValid: function() {
                        return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance }, _onMove: function(a) {
                        var b = a.touches[0];
                        this._newPos = new e.Point(b.clientX, b.clientY) }, _simulateEvent: function(c, d) {
                        var e = b.createEvent("MouseEvents");
                        e._simulated = !0, d.target._simulatedClick = !0, e.initMouseEvent(c, !0, !0, a, 1, d.screenX, d.screenY, d.clientX, d.clientY, !1, !1, !1, !1, 0, null), d.target.dispatchEvent(e) } }), e.Browser.touch && !e.Browser.pointer && e.Map.addInitHook("addHandler", "tap", e.Map.Tap), e.Map.mergeOptions({ boxZoom: !0 }), e.Map.BoxZoom = e.Handler.extend({ initialize: function(a) { this._map = a, this._container = a._container, this._pane = a._panes.overlayPane, this._moved = !1 }, addHooks: function() { e.DomEvent.on(this._container, "mousedown", this._onMouseDown, this) }, removeHooks: function() { e.DomEvent.off(this._container, "mousedown", this._onMouseDown), this._moved = !1 }, moved: function() {
                        return this._moved }, _onMouseDown: function(a) {
                        return this._moved = !1, !a.shiftKey || 1 !== a.which && 1 !== a.button ? !1 : (e.DomUtil.disableTextSelection(), e.DomUtil.disableImageDrag(), this._startLayerPoint = this._map.mouseEventToLayerPoint(a), void e.DomEvent.on(b, "mousemove", this._onMouseMove, this).on(b, "mouseup", this._onMouseUp, this).on(b, "keydown", this._onKeyDown, this)) }, _onMouseMove: function(a) { this._moved || (this._box = e.DomUtil.create("div", "leaflet-zoom-box", this._pane), e.DomUtil.setPosition(this._box, this._startLayerPoint), this._container.style.cursor = "crosshair", this._map.fire("boxzoomstart"));
                        var b = this._startLayerPoint,
                            c = this._box,
                            d = this._map.mouseEventToLayerPoint(a),
                            f = d.subtract(b),
                            g = new e.Point(Math.min(d.x, b.x), Math.min(d.y, b.y));
                        e.DomUtil.setPosition(c, g), this._moved = !0, c.style.width = Math.max(0, Math.abs(f.x) - 4) + "px", c.style.height = Math.max(0, Math.abs(f.y) - 4) + "px" }, _finish: function() { this._moved && (this._pane.removeChild(this._box), this._container.style.cursor = ""), e.DomUtil.enableTextSelection(), e.DomUtil.enableImageDrag(), e.DomEvent.off(b, "mousemove", this._onMouseMove).off(b, "mouseup", this._onMouseUp).off(b, "keydown", this._onKeyDown) }, _onMouseUp: function(a) { this._finish();
                        var b = this._map,
                            c = b.mouseEventToLayerPoint(a);
                        if (!this._startLayerPoint.equals(c)) {
                            var d = new e.LatLngBounds(b.layerPointToLatLng(this._startLayerPoint), b.layerPointToLatLng(c));
                            b.fitBounds(d), b.fire("boxzoomend", { boxZoomBounds: d }) } }, _onKeyDown: function(a) { 27 === a.keyCode && this._finish() } }), e.Map.addInitHook("addHandler", "boxZoom", e.Map.BoxZoom), e.Map.mergeOptions({ keyboard: !0, keyboardPanOffset: 80, keyboardZoomOffset: 1 }), e.Map.Keyboard = e.Handler.extend({ keyCodes: { left: [37], right: [39], down: [40], up: [38], zoomIn: [187, 107, 61, 171], zoomOut: [189, 109, 173] }, initialize: function(a) { this._map = a, this._setPanOffset(a.options.keyboardPanOffset), this._setZoomOffset(a.options.keyboardZoomOffset) }, addHooks: function() {
                        var a = this._map._container; - 1 === a.tabIndex && (a.tabIndex = "0"), e.DomEvent.on(a, "focus", this._onFocus, this).on(a, "blur", this._onBlur, this).on(a, "mousedown", this._onMouseDown, this), this._map.on("focus", this._addHooks, this).on("blur", this._removeHooks, this) }, removeHooks: function() { this._removeHooks();
                        var a = this._map._container;
                        e.DomEvent.off(a, "focus", this._onFocus, this).off(a, "blur", this._onBlur, this).off(a, "mousedown", this._onMouseDown, this), this._map.off("focus", this._addHooks, this).off("blur", this._removeHooks, this) }, _onMouseDown: function() {
                        if (!this._focused) {
                            var c = b.body,
                                d = b.documentElement,
                                e = c.scrollTop || d.scrollTop,
                                f = c.scrollLeft || d.scrollLeft;
                            this._map._container.focus(), a.scrollTo(f, e) } }, _onFocus: function() { this._focused = !0, this._map.fire("focus") }, _onBlur: function() { this._focused = !1, this._map.fire("blur") }, _setPanOffset: function(a) {
                        var b, c, d = this._panKeys = {},
                            e = this.keyCodes;
                        for (b = 0, c = e.left.length; c > b; b++) d[e.left[b]] = [-1 * a, 0];
                        for (b = 0, c = e.right.length; c > b; b++) d[e.right[b]] = [a, 0];
                        for (b = 0, c = e.down.length; c > b; b++) d[e.down[b]] = [0, a];
                        for (b = 0, c = e.up.length; c > b; b++) d[e.up[b]] = [0, -1 * a] }, _setZoomOffset: function(a) {
                        var b, c, d = this._zoomKeys = {},
                            e = this.keyCodes;
                        for (b = 0, c = e.zoomIn.length; c > b; b++) d[e.zoomIn[b]] = a;
                        for (b = 0, c = e.zoomOut.length; c > b; b++) d[e.zoomOut[b]] = -a }, _addHooks: function() { e.DomEvent.on(b, "keydown", this._onKeyDown, this) }, _removeHooks: function() { e.DomEvent.off(b, "keydown", this._onKeyDown, this) }, _onKeyDown: function(a) {
                        var b = a.keyCode,
                            c = this._map;
                        if (b in this._panKeys) {
                            if (c._panAnim && c._panAnim._inProgress) return;
                            c.panBy(this._panKeys[b]), c.options.maxBounds && c.panInsideBounds(c.options.maxBounds) } else {
                            if (!(b in this._zoomKeys)) return;
                            c.setZoom(c.getZoom() + this._zoomKeys[b]) }
                        e.DomEvent.stop(a) } }), e.Map.addInitHook("addHandler", "keyboard", e.Map.Keyboard), e.Handler.MarkerDrag = e.Handler.extend({ initialize: function(a) { this._marker = a }, addHooks: function() {
                        var a = this._marker._icon;
                        this._draggable || (this._draggable = new e.Draggable(a, a)), this._draggable.on("dragstart", this._onDragStart, this).on("drag", this._onDrag, this).on("dragend", this._onDragEnd, this), this._draggable.enable(), e.DomUtil.addClass(this._marker._icon, "leaflet-marker-draggable") }, removeHooks: function() { this._draggable.off("dragstart", this._onDragStart, this).off("drag", this._onDrag, this).off("dragend", this._onDragEnd, this), this._draggable.disable(), e.DomUtil.removeClass(this._marker._icon, "leaflet-marker-draggable") }, moved: function() {
                        return this._draggable && this._draggable._moved }, _onDragStart: function() { this._marker.closePopup().fire("movestart").fire("dragstart") }, _onDrag: function() {
                        var a = this._marker,
                            b = a._shadow,
                            c = e.DomUtil.getPosition(a._icon),
                            d = a._map.layerPointToLatLng(c);
                        b && e.DomUtil.setPosition(b, c), a._latlng = d, a.fire("move", { latlng: d }).fire("drag") }, _onDragEnd: function(a) { this._marker.fire("moveend").fire("dragend", a) } }), e.Control = e.Class.extend({ options: { position: "topright" }, initialize: function(a) { e.setOptions(this, a) }, getPosition: function() {
                        return this.options.position }, setPosition: function(a) {
                        var b = this._map;
                        return b && b.removeControl(this), this.options.position = a, b && b.addControl(this), this }, getContainer: function() {
                        return this._container }, addTo: function(a) { this._map = a;
                        var b = this._container = this.onAdd(a),
                            c = this.getPosition(),
                            d = a._controlCorners[c];
                        return e.DomUtil.addClass(b, "leaflet-control"), -1 !== c.indexOf("bottom") ? d.insertBefore(b, d.firstChild) : d.appendChild(b), this }, removeFrom: function(a) {
                        var b = this.getPosition(),
                            c = a._controlCorners[b];
                        return c.removeChild(this._container), this._map = null, this.onRemove && this.onRemove(a), this }, _refocusOnMap: function() { this._map && this._map.getContainer().focus() } }), e.control = function(a) {
                    return new e.Control(a) }, e.Map.include({ addControl: function(a) {
                        return a.addTo(this), this }, removeControl: function(a) {
                        return a.removeFrom(this), this }, _initControlPos: function() {
                        function a(a, f) {
                            var g = c + a + " " + c + f;
                            b[a + f] = e.DomUtil.create("div", g, d) }
                        var b = this._controlCorners = {},
                            c = "leaflet-",
                            d = this._controlContainer = e.DomUtil.create("div", c + "control-container", this._container);
                        a("top", "left"), a("top", "right"), a("bottom", "left"), a("bottom", "right") }, _clearControlPos: function() { this._container.removeChild(this._controlContainer) } }), e.Control.Zoom = e.Control.extend({ options: { position: "topleft", zoomInText: "+", zoomInTitle: "Zoom in", zoomOutText: "-", zoomOutTitle: "Zoom out" }, onAdd: function(a) {
                        var b = "leaflet-control-zoom",
                            c = e.DomUtil.create("div", b + " leaflet-bar");
                        return this._map = a, this._zoomInButton = this._createButton(this.options.zoomInText, this.options.zoomInTitle, b + "-in", c, this._zoomIn, this), this._zoomOutButton = this._createButton(this.options.zoomOutText, this.options.zoomOutTitle, b + "-out", c, this._zoomOut, this), this._updateDisabled(), a.on("zoomend zoomlevelschange", this._updateDisabled, this), c }, onRemove: function(a) { a.off("zoomend zoomlevelschange", this._updateDisabled, this) }, _zoomIn: function(a) { this._map.zoomIn(a.shiftKey ? 3 : 1) }, _zoomOut: function(a) { this._map.zoomOut(a.shiftKey ? 3 : 1) }, _createButton: function(a, b, c, d, f, g) {
                        var h = e.DomUtil.create("a", c, d);
                        h.innerHTML = a, h.href = "#", h.title = b;
                        var i = e.DomEvent.stopPropagation;
                        return e.DomEvent.on(h, "click", i).on(h, "mousedown", i).on(h, "dblclick", i).on(h, "click", e.DomEvent.preventDefault).on(h, "click", f, g).on(h, "click", this._refocusOnMap, g), h }, _updateDisabled: function() {
                        var a = this._map,
                            b = "leaflet-disabled";
                        e.DomUtil.removeClass(this._zoomInButton, b), e.DomUtil.removeClass(this._zoomOutButton, b), a._zoom === a.getMinZoom() && e.DomUtil.addClass(this._zoomOutButton, b), a._zoom === a.getMaxZoom() && e.DomUtil.addClass(this._zoomInButton, b) } }), e.Map.mergeOptions({ zoomControl: !0 }), e.Map.addInitHook(function() { this.options.zoomControl && (this.zoomControl = new e.Control.Zoom, this.addControl(this.zoomControl)) }), e.control.zoom = function(a) {
                    return new e.Control.Zoom(a) }, e.Control.Attribution = e.Control.extend({ options: { position: "bottomright", prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>' }, initialize: function(a) { e.setOptions(this, a), this._attributions = {} }, onAdd: function(a) { this._container = e.DomUtil.create("div", "leaflet-control-attribution"), e.DomEvent.disableClickPropagation(this._container);
                        for (var b in a._layers) a._layers[b].getAttribution && this.addAttribution(a._layers[b].getAttribution());
                        return a.on("layeradd", this._onLayerAdd, this).on("layerremove", this._onLayerRemove, this), this._update(), this._container }, onRemove: function(a) { a.off("layeradd", this._onLayerAdd).off("layerremove", this._onLayerRemove) }, setPrefix: function(a) {
                        return this.options.prefix = a, this._update(), this }, addAttribution: function(a) {
                        return a ? (this._attributions[a] || (this._attributions[a] = 0), this._attributions[a]++, this._update(), this) : void 0 }, removeAttribution: function(a) {
                        return a ? (this._attributions[a] && (this._attributions[a]--, this._update()), this) : void 0 }, _update: function() {
                        if (this._map) {
                            var a = [];
                            for (var b in this._attributions) this._attributions[b] && a.push(b);
                            var c = [];
                            this.options.prefix && c.push(this.options.prefix), a.length && c.push(a.join(", ")), this._container.innerHTML = c.join(" | ") } }, _onLayerAdd: function(a) { a.layer.getAttribution && this.addAttribution(a.layer.getAttribution()) }, _onLayerRemove: function(a) { a.layer.getAttribution && this.removeAttribution(a.layer.getAttribution()) } }), e.Map.mergeOptions({ attributionControl: !0 }), e.Map.addInitHook(function() { this.options.attributionControl && (this.attributionControl = (new e.Control.Attribution).addTo(this)) }), e.control.attribution = function(a) {
                    return new e.Control.Attribution(a) }, e.Control.Scale = e.Control.extend({ options: { position: "bottomleft", maxWidth: 100, metric: !0, imperial: !0, updateWhenIdle: !1 }, onAdd: function(a) { this._map = a;
                        var b = "leaflet-control-scale",
                            c = e.DomUtil.create("div", b),
                            d = this.options;
                        return this._addScales(d, b, c), a.on(d.updateWhenIdle ? "moveend" : "move", this._update, this), a.whenReady(this._update, this), c }, onRemove: function(a) { a.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this) }, _addScales: function(a, b, c) { a.metric && (this._mScale = e.DomUtil.create("div", b + "-line", c)), a.imperial && (this._iScale = e.DomUtil.create("div", b + "-line", c)) }, _update: function() {
                        var a = this._map.getBounds(),
                            b = a.getCenter().lat,
                            c = 6378137 * Math.PI * Math.cos(b * Math.PI / 180),
                            d = c * (a.getNorthEast().lng - a.getSouthWest().lng) / 180,
                            e = this._map.getSize(),
                            f = this.options,
                            g = 0;
                        e.x > 0 && (g = d * (f.maxWidth / e.x)), this._updateScales(f, g) }, _updateScales: function(a, b) { a.metric && b && this._updateMetric(b), a.imperial && b && this._updateImperial(b) }, _updateMetric: function(a) {
                        var b = this._getRoundNum(a);
                        this._mScale.style.width = this._getScaleWidth(b / a) + "px", this._mScale.innerHTML = 1e3 > b ? b + " m" : b / 1e3 + " km" }, _updateImperial: function(a) {
                        var b, c, d, e = 3.2808399 * a,
                            f = this._iScale;
                        e > 5280 ? (b = e / 5280, c = this._getRoundNum(b), f.style.width = this._getScaleWidth(c / b) + "px", f.innerHTML = c + " mi") : (d = this._getRoundNum(e), f.style.width = this._getScaleWidth(d / e) + "px", f.innerHTML = d + " ft") }, _getScaleWidth: function(a) {
                        return Math.round(this.options.maxWidth * a) - 10 }, _getRoundNum: function(a) {
                        var b = Math.pow(10, (Math.floor(a) + "").length - 1),
                            c = a / b;
                        return c = c >= 10 ? 10 : c >= 5 ? 5 : c >= 3 ? 3 : c >= 2 ? 2 : 1, b * c } }), e.control.scale = function(a) {
                    return new e.Control.Scale(a) }, e.Control.Layers = e.Control.extend({ options: { collapsed: !0, position: "topright", autoZIndex: !0 }, initialize: function(a, b, c) { e.setOptions(this, c), this._layers = {}, this._lastZIndex = 0, this._handlingClick = !1;
                        for (var d in a) this._addLayer(a[d], d);
                        for (d in b) this._addLayer(b[d], d, !0) }, onAdd: function(a) {
                        return this._initLayout(), this._update(), a.on("layeradd", this._onLayerChange, this).on("layerremove", this._onLayerChange, this), this._container }, onRemove: function(a) { a.off("layeradd", this._onLayerChange, this).off("layerremove", this._onLayerChange, this) }, addBaseLayer: function(a, b) {
                        return this._addLayer(a, b), this._update(), this }, addOverlay: function(a, b) {
                        return this._addLayer(a, b, !0), this._update(), this }, removeLayer: function(a) {
                        var b = e.stamp(a);
                        return delete this._layers[b], this._update(), this }, _initLayout: function() {
                        var a = "leaflet-control-layers",
                            b = this._container = e.DomUtil.create("div", a);
                        b.setAttribute("aria-haspopup", !0), e.Browser.touch ? e.DomEvent.on(b, "click", e.DomEvent.stopPropagation) : e.DomEvent.disableClickPropagation(b).disableScrollPropagation(b);
                        var c = this._form = e.DomUtil.create("form", a + "-list");
                        if (this.options.collapsed) { e.Browser.android || e.DomEvent.on(b, "mouseover", this._expand, this).on(b, "mouseout", this._collapse, this);
                            var d = this._layersLink = e.DomUtil.create("a", a + "-toggle", b);
                            d.href = "#", d.title = "Layers", e.Browser.touch ? e.DomEvent.on(d, "click", e.DomEvent.stop).on(d, "click", this._expand, this) : e.DomEvent.on(d, "focus", this._expand, this), e.DomEvent.on(c, "click", function() { setTimeout(e.bind(this._onInputClick, this), 0) }, this), this._map.on("click", this._collapse, this) } else this._expand();
                        this._baseLayersList = e.DomUtil.create("div", a + "-base", c), this._separator = e.DomUtil.create("div", a + "-separator", c), this._overlaysList = e.DomUtil.create("div", a + "-overlays", c), b.appendChild(c) }, _addLayer: function(a, b, c) {
                        var d = e.stamp(a);
                        this._layers[d] = { layer: a, name: b, overlay: c }, this.options.autoZIndex && a.setZIndex && (this._lastZIndex++, a.setZIndex(this._lastZIndex)) }, _update: function() {
                        if (this._container) { this._baseLayersList.innerHTML = "", this._overlaysList.innerHTML = "";
                            var a, b, c = !1,
                                d = !1;
                            for (a in this._layers) b = this._layers[a], this._addItem(b), d = d || b.overlay, c = c || !b.overlay;
                            this._separator.style.display = d && c ? "" : "none" } }, _onLayerChange: function(a) {
                        var b = this._layers[e.stamp(a.layer)];
                        if (b) { this._handlingClick || this._update();
                            var c = b.overlay ? "layeradd" === a.type ? "overlayadd" : "overlayremove" : "layeradd" === a.type ? "baselayerchange" : null;
                            c && this._map.fire(c, b) } }, _createRadioElement: function(a, c) {
                        var d = '<input type="radio" class="leaflet-control-layers-selector" name="' + a + '"';
                        c && (d += ' checked="checked"'), d += "/>";
                        var e = b.createElement("div");
                        return e.innerHTML = d, e.firstChild }, _addItem: function(a) {
                        var c, d = b.createElement("label"),
                            f = this._map.hasLayer(a.layer);
                        a.overlay ? (c = b.createElement("input"), c.type = "checkbox", c.className = "leaflet-control-layers-selector", c.defaultChecked = f) : c = this._createRadioElement("leaflet-base-layers", f), c.layerId = e.stamp(a.layer), e.DomEvent.on(c, "click", this._onInputClick, this);
                        var g = b.createElement("span");
                        g.innerHTML = " " + a.name, d.appendChild(c), d.appendChild(g);
                        var h = a.overlay ? this._overlaysList : this._baseLayersList;
                        return h.appendChild(d), d }, _onInputClick: function() {
                        var a, b, c, d = this._form.getElementsByTagName("input"),
                            e = d.length;
                        for (this._handlingClick = !0, a = 0; e > a; a++) b = d[a], c = this._layers[b.layerId], b.checked && !this._map.hasLayer(c.layer) ? this._map.addLayer(c.layer) : !b.checked && this._map.hasLayer(c.layer) && this._map.removeLayer(c.layer);
                        this._handlingClick = !1, this._refocusOnMap() }, _expand: function() { e.DomUtil.addClass(this._container, "leaflet-control-layers-expanded") }, _collapse: function() { this._container.className = this._container.className.replace(" leaflet-control-layers-expanded", "") } }), e.control.layers = function(a, b, c) {
                    return new e.Control.Layers(a, b, c) }, e.PosAnimation = e.Class.extend({ includes: e.Mixin.Events, run: function(a, b, c, d) { this.stop(), this._el = a, this._inProgress = !0, this._newPos = b, this.fire("start"), a.style[e.DomUtil.TRANSITION] = "all " + (c || .25) + "s cubic-bezier(0,0," + (d || .5) + ",1)", e.DomEvent.on(a, e.DomUtil.TRANSITION_END, this._onTransitionEnd, this), e.DomUtil.setPosition(a, b), e.Util.falseFn(a.offsetWidth), this._stepTimer = setInterval(e.bind(this._onStep, this), 50) }, stop: function() { this._inProgress && (e.DomUtil.setPosition(this._el, this._getPos()), this._onTransitionEnd(), e.Util.falseFn(this._el.offsetWidth)) }, _onStep: function() {
                        var a = this._getPos();
                        return a ? (this._el._leaflet_pos = a, void this.fire("step")) : void this._onTransitionEnd() }, _transformRe: /([-+]?(?:\d*\.)?\d+)\D*, ([-+]?(?:\d*\.)?\d+)\D*\)/, _getPos: function() {
                        var b, c, d, f = this._el,
                            g = a.getComputedStyle(f);
                        if (e.Browser.any3d) {
                            if (d = g[e.DomUtil.TRANSFORM].match(this._transformRe), !d) return;
                            b = parseFloat(d[1]), c = parseFloat(d[2]) } else b = parseFloat(g.left), c = parseFloat(g.top);
                        return new e.Point(b, c, !0) }, _onTransitionEnd: function() { e.DomEvent.off(this._el, e.DomUtil.TRANSITION_END, this._onTransitionEnd, this), this._inProgress && (this._inProgress = !1, this._el.style[e.DomUtil.TRANSITION] = "", this._el._leaflet_pos = this._newPos, clearInterval(this._stepTimer), this.fire("step").fire("end")) } }), e.Map.include({ setView: function(a, b, d) {
                        if (b = b === c ? this._zoom : this._limitZoom(b), a = this._limitCenter(e.latLng(a), b, this.options.maxBounds), d = d || {}, this._panAnim && this._panAnim.stop(), this._loaded && !d.reset && d !== !0) { d.animate !== c && (d.zoom = e.extend({ animate: d.animate }, d.zoom), d.pan = e.extend({ animate: d.animate }, d.pan));
                            var f = this._zoom !== b ? this._tryAnimatedZoom && this._tryAnimatedZoom(a, b, d.zoom) : this._tryAnimatedPan(a, d.pan);
                            if (f) return clearTimeout(this._sizeTimer), this }
                        return this._resetView(a, b), this }, panBy: function(a, b) {
                        if (a = e.point(a).round(), b = b || {}, !a.x && !a.y) return this;
                        if (this._panAnim || (this._panAnim = new e.PosAnimation, this._panAnim.on({ step: this._onPanTransitionStep, end: this._onPanTransitionEnd }, this)), b.noMoveStart || this.fire("movestart"), b.animate !== !1) { e.DomUtil.addClass(this._mapPane, "leaflet-pan-anim");
                            var c = this._getMapPanePos().subtract(a);
                            this._panAnim.run(this._mapPane, c, b.duration || .25, b.easeLinearity) } else this._rawPanBy(a), this.fire("move").fire("moveend");
                        return this }, _onPanTransitionStep: function() { this.fire("move") }, _onPanTransitionEnd: function() { e.DomUtil.removeClass(this._mapPane, "leaflet-pan-anim"), this.fire("moveend") }, _tryAnimatedPan: function(a, b) {
                        var c = this._getCenterOffset(a)._floor();
                        return (b && b.animate) === !0 || this.getSize().contains(c) ? (this.panBy(c, b), !0) : !1 } }), e.PosAnimation = e.DomUtil.TRANSITION ? e.PosAnimation : e.PosAnimation.extend({ run: function(a, b, c, d) { this.stop(), this._el = a, this._inProgress = !0, this._duration = c || .25, this._easeOutPower = 1 / Math.max(d || .5, .2), this._startPos = e.DomUtil.getPosition(a), this._offset = b.subtract(this._startPos), this._startTime = +new Date, this.fire("start"), this._animate() }, stop: function() { this._inProgress && (this._step(), this._complete()) }, _animate: function() { this._animId = e.Util.requestAnimFrame(this._animate, this), this._step() }, _step: function() {
                        var a = +new Date - this._startTime,
                            b = 1e3 * this._duration;
                        b > a ? this._runFrame(this._easeOut(a / b)) : (this._runFrame(1), this._complete()) }, _runFrame: function(a) {
                        var b = this._startPos.add(this._offset.multiplyBy(a));
                        e.DomUtil.setPosition(this._el, b), this.fire("step") }, _complete: function() { e.Util.cancelAnimFrame(this._animId), this._inProgress = !1, this.fire("end") }, _easeOut: function(a) {
                        return 1 - Math.pow(1 - a, this._easeOutPower) } }), e.Map.mergeOptions({ zoomAnimation: !0, zoomAnimationThreshold: 4 }), e.DomUtil.TRANSITION && e.Map.addInitHook(function() { this._zoomAnimated = this.options.zoomAnimation && e.DomUtil.TRANSITION && e.Browser.any3d && !e.Browser.android23 && !e.Browser.mobileOpera, this._zoomAnimated && e.DomEvent.on(this._mapPane, e.DomUtil.TRANSITION_END, this._catchTransitionEnd, this) }), e.Map.include(e.DomUtil.TRANSITION ? { _catchTransitionEnd: function(a) { this._animatingZoom && a.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd() }, _nothingToAnimate: function() {
                        return !this._container.getElementsByClassName("leaflet-zoom-animated").length }, _tryAnimatedZoom: function(a, b, c) {
                        if (this._animatingZoom) return !0;
                        if (c = c || {}, !this._zoomAnimated || c.animate === !1 || this._nothingToAnimate() || Math.abs(b - this._zoom) > this.options.zoomAnimationThreshold) return !1;
                        var d = this.getZoomScale(b),
                            e = this._getCenterOffset(a)._divideBy(1 - 1 / d),
                            f = this._getCenterLayerPoint()._add(e);
                        return c.animate === !0 || this.getSize().contains(e) ? (this.fire("movestart").fire("zoomstart"), this._animateZoom(a, b, f, d, null, !0), !0) : !1 }, _animateZoom: function(a, b, c, d, f, g, h) { h || (this._animatingZoom = !0), e.DomUtil.addClass(this._mapPane, "leaflet-zoom-anim"), this._animateToCenter = a, this._animateToZoom = b, e.Draggable && (e.Draggable._disabled = !0), e.Util.requestAnimFrame(function() { this.fire("zoomanim", { center: a, zoom: b, origin: c, scale: d, delta: f, backwards: g }) }, this) }, _onZoomTransitionEnd: function() { this._animatingZoom = !1, e.DomUtil.removeClass(this._mapPane, "leaflet-zoom-anim"), this._resetView(this._animateToCenter, this._animateToZoom, !0, !0), e.Draggable && (e.Draggable._disabled = !1) } } : {}), e.TileLayer.include({ _animateZoom: function(a) { this._animating || (this._animating = !0, this._prepareBgBuffer());
                        var b = this._bgBuffer,
                            c = e.DomUtil.TRANSFORM,
                            d = a.delta ? e.DomUtil.getTranslateString(a.delta) : b.style[c],
                            f = e.DomUtil.getScaleString(a.scale, a.origin);
                        b.style[c] = a.backwards ? f + " " + d : d + " " + f }, _endZoomAnim: function() {
                        var a = this._tileContainer,
                            b = this._bgBuffer;
                        a.style.visibility = "", a.parentNode.appendChild(a), e.Util.falseFn(b.offsetWidth), this._animating = !1 }, _clearBgBuffer: function() {
                        var a = this._map;!a || a._animatingZoom || a.touchZoom._zooming || (this._bgBuffer.innerHTML = "", this._bgBuffer.style[e.DomUtil.TRANSFORM] = "") }, _prepareBgBuffer: function() {
                        var a = this._tileContainer,
                            b = this._bgBuffer,
                            c = this._getLoadedTilesPercentage(b),
                            d = this._getLoadedTilesPercentage(a);
                        return b && c > .5 && .5 > d ? (a.style.visibility = "hidden", void this._stopLoadingImages(a)) : (b.style.visibility = "hidden", b.style[e.DomUtil.TRANSFORM] = "", this._tileContainer = b, b = this._bgBuffer = a, this._stopLoadingImages(b), void clearTimeout(this._clearBgBufferTimer)) }, _getLoadedTilesPercentage: function(a) {
                        var b, c, d = a.getElementsByTagName("img"),
                            e = 0;
                        for (b = 0, c = d.length; c > b; b++) d[b].complete && e++;
                        return e / c }, _stopLoadingImages: function(a) {
                        var b, c, d, f = Array.prototype.slice.call(a.getElementsByTagName("img"));
                        for (b = 0, c = f.length; c > b; b++) d = f[b], d.complete || (d.onload = e.Util.falseFn, d.onerror = e.Util.falseFn, d.src = e.Util.emptyImageUrl, d.parentNode.removeChild(d)) } }), e.Map.include({
                    _defaultLocateOptions: {
                        watch: !1,
                        setView: !1,
                        maxZoom: 1 / 0,
                        timeout: 1e4,
                        maximumAge: 0,
                        enableHighAccuracy: !1
                    },
                    locate: function(a) {
                        if (a = this._locateOptions = e.extend(this._defaultLocateOptions, a), !navigator.geolocation) return this._handleGeolocationError({ code: 0, message: "Geolocation not supported." }), this;
                        var b = e.bind(this._handleGeolocationResponse, this),
                            c = e.bind(this._handleGeolocationError, this);
                        return a.watch ? this._locationWatchId = navigator.geolocation.watchPosition(b, c, a) : navigator.geolocation.getCurrentPosition(b, c, a), this },
                    stopLocate: function() {
                        return navigator.geolocation && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this },
                    _handleGeolocationError: function(a) {
                        var b = a.code,
                            c = a.message || (1 === b ? "permission denied" : 2 === b ? "position unavailable" : "timeout");
                        this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", { code: b, message: "Geolocation error: " + c + "." }) },
                    _handleGeolocationResponse: function(a) {
                        var b = a.coords.latitude,
                            c = a.coords.longitude,
                            d = new e.LatLng(b, c),
                            f = 180 * a.coords.accuracy / 40075017,
                            g = f / Math.cos(e.LatLng.DEG_TO_RAD * b),
                            h = e.latLngBounds([b - f, c - g], [b + f, c + g]),
                            i = this._locateOptions;
                        if (i.setView) {
                            var j = Math.min(this.getBoundsZoom(h), i.maxZoom);
                            this.setView(d, j) }
                        var k = { latlng: d, bounds: h, timestamp: a.timestamp };
                        for (var l in a.coords) "number" == typeof a.coords[l] && (k[l] = a.coords[l]);
                        this.fire("locationfound", k) }
                })
        }(window, document), ! function(a, b, c) { b[a] = c(a, b) }("bean", this, function(a, b) {
            var c = window,
                d = b[a],
                e = /over|out/,
                f = /[^\.]*(?=\..*)\.|.*/,
                g = /\..*/,
                h = "addEventListener",
                i = "attachEvent",
                j = "removeEventListener",
                k = "detachEvent",
                l = document || {},
                m = l.documentElement || {},
                n = m[h],
                o = n ? h : i,
                p = Array.prototype.slice,
                q = /click|mouse(?!(.*wheel|scroll))|menu|drag|drop/i,
                r = /mouse.*(wheel|scroll)/i,
                s = /^text/i,
                t = /^touch|^gesture/i,
                u = { one: 1 },
                v = function(a, b, c) {
                    for (c = 0; c < b.length; c++) a[b[c]] = 1;
                    return a }({}, ("click dblclick mouseup mousedown contextmenu mousewheel mousemultiwheel DOMMouseScroll mouseover mouseout mousemove selectstart selectend keydown keypress keyup orientationchange focus blur change reset select submit load unload beforeunload resize move DOMContentLoaded readystatechange error abort scroll " + (n ? "show input invalid touchstart touchmove touchend touchcancel gesturestart gesturechange gestureend MSPointerUp MSPointerDown MSPointerCancel MSPointerMove MSPointerOver MSPointerOut pointerup pointerdown pointermove pointercancelmessage readystatechange pageshow pagehide popstate hashchange offline online afterprint beforeprint dragstart dragenter dragover dragleave drag drop dragend loadstart progress suspend emptied stalled loadmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate play pause ratechange volumechange cuechange checking noupdate downloading cached updateready obsolete " : "")).split(" ")),
                w = function() {
                    function a(a, b) {
                        for (; null !== (b = b.parentNode);)
                            if (b === a) return !0;
                        return !1 }

                    function b(b) {
                        var c = b.relatedTarget;
                        return c ? c !== this && "xul" !== c.prefix && !/document/.test(this.toString()) && !a(this, c) : null === c }
                    return { mouseenter: { base: "mouseover", condition: b }, mouseleave: { base: "mouseout", condition: b }, mousewheel: { base: /Firefox/.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel" } } }(),
                x = function() {
                    var a = "altKey attrChange attrName bubbles cancelable ctrlKey currentTarget detail eventPhase getModifierState isTrusted metaKey relatedNode relatedTarget shiftKey srcElement target timeStamp type view which".split(" "),
                        b = a.concat("button buttons clientX clientY dataTransfer fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" ")),
                        c = b.concat("wheelDelta wheelDeltaX wheelDeltaY wheelDeltaZ axis".split(" ")),
                        d = a.concat("char charCode key keyCode keyIdentifier keyLocation".split(" ")),
                        f = a.concat(["data"]),
                        g = a.concat("touches targetTouches changedTouches scale rotation".split(" ")),
                        h = "preventDefault",
                        i = function(a) {
                            return function() { a[h] ? a[h]() : a.returnValue = !1 } },
                        j = "stopPropagation",
                        k = function(a) {
                            return function() { a[j] ? a[j]() : a.cancelBubble = !0 } },
                        n = function(a) {
                            return function() { a[h](), a[j](), a.stopped = !0 } },
                        o = function(a, b, c) {
                            var d, e;
                            for (d = c.length; d--;) e = c[d], !(e in b) && e in a && (b[e] = a[e]) };
                    return function(p, u) {
                        var v = { originalEvent: p, isNative: u };
                        if (!p) return v;
                        var w, x = p.type,
                            y = p.target || p.srcElement;
                        return v[h] = i(p), v[j] = k(p), v.stop = n(v), v.target = y && 3 === y.nodeType ? y.parentNode : y, u && (-1 !== x.indexOf("key") ? (w = d, v.keyCode = p.which || p.keyCode) : q.test(x) ? (w = b, v.rightClick = 3 === p.which || 2 === p.button, v.pos = { x: 0, y: 0 }, p.pageX || p.pageY ? (v.clientX = p.pageX, v.clientY = p.pageY) : (p.clientX || p.clientY) && (v.clientX = p.clientX + l.body.scrollLeft + m.scrollLeft, v.clientY = p.clientY + l.body.scrollTop + m.scrollTop), e.test(x) && (v.relatedTarget = p.relatedTarget || p[("mouseover" === x ? "from" : "to") + "Element"])) : t.test(x) ? w = g : r.test(x) ? w = c : s.test(x) && (w = f), o(p, v, w || a)), v } }(),
                y = function(a, b) {
                    return n || b || a !== l && a !== c ? a : m },
                z = function() {
                    function a(a, b, c, d, e) { this.element = a, this.type = b, this.handler = c, this.original = d, this.namespaces = e, this.custom = w[b], this.isNative = v[b] && a[o], this.eventType = n || this.isNative ? b : "propertychange", this.customType = !n && !this.isNative && b, this.target = y(a, this.isNative), this.eventSupport = this.target[o] }
                    return a.prototype = { inNamespaces: function(a) {
                            var b, c;
                            if (!a) return !0;
                            if (!this.namespaces) return !1;
                            for (b = a.length; b--;)
                                for (c = this.namespaces.length; c--;)
                                    if (a[b] === this.namespaces[c]) return !0;
                            return !1 }, matches: function(a, b, c) {
                            return !(this.element !== a || b && this.original !== b || c && this.handler !== c) } }, a }(),
                A = function() {
                    var a = {},
                        b = function(c, d, e, f, g) {
                            if (d && "*" !== d) {
                                var h, i = 0,
                                    j = a["$" + d],
                                    k = "*" === c;
                                if (!j) return;
                                for (h = j.length; h > i; i++)
                                    if ((k || j[i].matches(c, e, f)) && !g(j[i], j, i, d)) return } else
                                for (var l in a) "$" === l.charAt(0) && b(c, l.substr(1), e, f, g) },
                        c = function(b, c, d) {
                            var e, f = a["$" + c];
                            if (f)
                                for (e = f.length; e--;)
                                    if (f[e].matches(b, d, null)) return !0;
                            return !1 },
                        d = function(a, c, d) {
                            var e = [];
                            return b(a, c, d, null, function(a) {
                                return e.push(a) }), e },
                        e = function(b) {
                            return (a["$" + b.type] || (a["$" + b.type] = [])).push(b), b },
                        f = function(c) { b(c.element, c.type, null, c.handler, function(b, c, d) {
                                return c.splice(d, 1), 0 === c.length && delete a["$" + b.type], !1 }) },
                        g = function() {
                            var b, c = [];
                            for (b in a) "$" === b.charAt(0) && (c = c.concat(a[b]));
                            return c };
                    return { has: c, get: d, put: e, del: f, entries: g } }(),
                B = n ? function(a, b, c, d) { a[d ? h : j](b, c, !1) } : function(a, b, c, d, e) { e && d && null === a["_on" + e] && (a["_on" + e] = 0), a[d ? i : k]("on" + b, c) },
                C = function(a, b, d) {
                    return function(e) {
                        return e = x(e || ((this.ownerDocument || this.document || this).parentWindow || c).event, !0), b.apply(a, [e].concat(d)) } },
                D = function(a, b, d, e, f, g) {
                    return function(h) {
                        (e ? e.apply(this, arguments) : n ? !0 : h && h.propertyName === "_on" + d || !h) && (h && (h = x(h || ((this.ownerDocument || this.document || this).parentWindow || c).event, g)), b.apply(a, !h || f && 0 !== f.length ? p.call(arguments, h ? 0 : 1).concat(f) : arguments)) } },
                E = function(a, b, c, d, e) {
                    return function() { a(b, c, e), d.apply(this, arguments) } },
                F = function(a, b, c, d) {
                    var e, f, h, i = b && b.replace(g, ""),
                        j = A.get(a, i, c);
                    for (e = 0, f = j.length; f > e; e++) j[e].inNamespaces(d) && ((h = j[e]).eventSupport && B(h.target, h.eventType, h.handler, !1, h.type), A.del(h)) },
                G = function(a, b, c, d, e) {
                    var h, i = b.replace(g, ""),
                        j = b.replace(f, "").split(".");
                    return A.has(a, i, c) ? a : ("unload" === i && (c = E(F, a, i, c, d)), w[i] && (w[i].condition && (c = D(a, c, i, w[i].condition, !0)), i = w[i].base || i), h = A.put(new z(a, i, c, d, j[0] && j)), h.handler = h.isNative ? C(a, h.handler, e) : D(a, h.handler, i, !1, e, !1), void(h.eventSupport && B(h.target, h.eventType, h.handler, !0, h.customType))) },
                H = function(a, b, c) {
                    return function(d) {
                        var e, f, g = "string" == typeof a ? c(a, this) : a;
                        for (e = d.target; e && e !== this; e = e.parentNode)
                            for (f = g.length; f--;)
                                if (g[f] === e) return b.apply(e, arguments) } },
                I = function(a, b, c) {
                    var d, e, h, i, j = F,
                        k = b && "string" == typeof b;
                    if (k && b.indexOf(" ") > 0) {
                        for (b = b.split(" "), i = b.length; i--;) I(a, b[i], c);
                        return a }
                    if (e = k && b.replace(g, ""), e && w[e] && (e = w[e].type), !b || k)(h = k && b.replace(f, "")) && (h = h.split(".")), j(a, e, c, h);
                    else if ("function" == typeof b) j(a, null, b);
                    else
                        for (d in b) b.hasOwnProperty(d) && I(a, d, b[d]);
                    return a },
                J = function(a, b, c, d, e) {
                    var f, g, h, i, j = c,
                        k = c && "string" == typeof c;
                    if (b && !c && "object" == typeof b)
                        for (f in b) b.hasOwnProperty(f) && J.apply(this, [a, f, b[f]]);
                    else
                        for (i = arguments.length > 3 ? p.call(arguments, 3) : [], g = (k ? c : b).split(" "), k && (c = H(b, j = d, e)) && (i = p.call(i, 1)), this === u && (c = E(I, a, b, c, j)), h = g.length; h--;) G(a, g[h], c, j, i);
                    return a },
                K = function() {
                    return J.apply(u, arguments) },
                L = n ? function(a, b, d) {
                    var e = l.createEvent(a ? "HTMLEvents" : "UIEvents");
                    e[a ? "initEvent" : "initUIEvent"](b, !0, !0, c, 1), d.dispatchEvent(e) } : function(a, b, c) { c = y(c, a), a ? c.fireEvent("on" + b, l.createEventObject()) : c["_on" + b]++ },
                M = function(a, b, c) {
                    var d, e, h, i, j, k = b.split(" ");
                    for (d = k.length; d--;)
                        if (b = k[d].replace(g, ""), (i = k[d].replace(f, "")) && (i = i.split(".")), i || c || !a[o])
                            for (j = A.get(a, b), c = [!1].concat(c), e = 0, h = j.length; h > e; e++) j[e].inNamespaces(i) && j[e].handler.apply(a, c);
                        else L(v[b], b, a);
                    return a },
                N = function(a, b, c) {
                    for (var d = 0, e = A.get(b, c), f = e.length; f > d; d++) e[d].original && J(a, e[d].type, e[d].original);
                    return a },
                O = { add: J, one: K, remove: I, clone: N, fire: M, noConflict: function() {
                        return b[a] = d, this } };
            if (c[i]) {
                var P = function() {
                    var a, b = A.entries();
                    for (a in b) b[a].type && "unload" !== b[a].type && I(b[a].element, b[a].type);
                    c[k]("onunload", P), c.CollectGarbage && c.CollectGarbage() };
                c[i]("onunload", P) }
            return O });
    var html4 = {};
    html4.atype = { NONE: 0, URI: 1, URI_FRAGMENT: 11, SCRIPT: 2, STYLE: 3, ID: 4, IDREF: 5, IDREFS: 6, GLOBAL_NAME: 7, LOCAL_NAME: 8, CLASSES: 9, FRAME_TARGET: 10 }, html4.ATTRIBS = { "*::class": 9, "*::dir": 0, "*::id": 4, "*::lang": 0, "*::onclick": 2, "*::ondblclick": 2, "*::onkeydown": 2, "*::onkeypress": 2, "*::onkeyup": 2, "*::onload": 2, "*::onmousedown": 2, "*::onmousemove": 2, "*::onmouseout": 2, "*::onmouseover": 2, "*::onmouseup": 2, "*::style": 3, "*::title": 0, "a::accesskey": 0, "a::coords": 0, "a::href": 1, "a::hreflang": 0, "a::name": 7, "a::onblur": 2, "a::onfocus": 2, "a::rel": 0, "a::rev": 0, "a::shape": 0, "a::tabindex": 0, "a::target": 10, "a::type": 0, "area::accesskey": 0, "area::alt": 0, "area::coords": 0, "area::href": 1, "area::nohref": 0, "area::onblur": 2, "area::onfocus": 2, "area::shape": 0, "area::tabindex": 0, "area::target": 10, "bdo::dir": 0, "blockquote::cite": 1, "br::clear": 0, "button::accesskey": 0, "button::disabled": 0, "button::name": 8, "button::onblur": 2, "button::onfocus": 2, "button::tabindex": 0, "button::type": 0, "button::value": 0, "canvas::height": 0, "canvas::width": 0, "caption::align": 0, "col::align": 0, "col::char": 0, "col::charoff": 0, "col::span": 0, "col::valign": 0, "col::width": 0, "colgroup::align": 0, "colgroup::char": 0, "colgroup::charoff": 0, "colgroup::span": 0, "colgroup::valign": 0, "colgroup::width": 0, "del::cite": 1, "del::datetime": 0, "dir::compact": 0, "div::align": 0, "dl::compact": 0, "font::color": 0, "font::face": 0, "font::size": 0, "form::accept": 0, "form::action": 1, "form::autocomplete": 0, "form::enctype": 0, "form::method": 0, "form::name": 7, "form::onreset": 2, "form::onsubmit": 2, "form::target": 10, "h1::align": 0, "h2::align": 0, "h3::align": 0, "h4::align": 0, "h5::align": 0, "h6::align": 0, "hr::align": 0, "hr::noshade": 0, "hr::size": 0, "hr::width": 0, "iframe::align": 0, "iframe::frameborder": 0, "iframe::height": 0, "iframe::marginheight": 0, "iframe::marginwidth": 0, "iframe::width": 0, "img::align": 0, "img::alt": 0, "img::border": 0, "img::height": 0, "img::hspace": 0, "img::ismap": 0, "img::name": 7, "img::src": 1, "img::usemap": 11, "img::vspace": 0, "img::width": 0, "input::accept": 0, "input::accesskey": 0, "input::align": 0, "input::alt": 0, "input::autocomplete": 0, "input::checked": 0, "input::disabled": 0, "input::ismap": 0, "input::maxlength": 0, "input::name": 8, "input::onblur": 2, "input::onchange": 2, "input::onfocus": 2, "input::onselect": 2, "input::readonly": 0, "input::size": 0, "input::src": 1, "input::tabindex": 0, "input::type": 0, "input::usemap": 11, "input::value": 0, "ins::cite": 1, "ins::datetime": 0, "label::accesskey": 0, "label::for": 5, "label::onblur": 2, "label::onfocus": 2, "legend::accesskey": 0, "legend::align": 0, "li::type": 0, "li::value": 0, "map::name": 7, "menu::compact": 0, "ol::compact": 0, "ol::start": 0, "ol::type": 0, "optgroup::disabled": 0, "optgroup::label": 0, "option::disabled": 0, "option::label": 0, "option::selected": 0, "option::value": 0, "p::align": 0, "pre::width": 0, "q::cite": 1, "select::disabled": 0, "select::multiple": 0, "select::name": 8, "select::onblur": 2, "select::onchange": 2, "select::onfocus": 2, "select::size": 0, "select::tabindex": 0, "table::align": 0, "table::bgcolor": 0, "table::border": 0, "table::cellpadding": 0, "table::cellspacing": 0, "table::frame": 0, "table::rules": 0, "table::summary": 0, "table::width": 0, "tbody::align": 0, "tbody::char": 0, "tbody::charoff": 0, "tbody::valign": 0, "td::abbr": 0, "td::align": 0, "td::axis": 0, "td::bgcolor": 0, "td::char": 0, "td::charoff": 0, "td::colspan": 0, "td::headers": 6, "td::height": 0, "td::nowrap": 0, "td::rowspan": 0, "td::scope": 0, "td::valign": 0, "td::width": 0, "textarea::accesskey": 0, "textarea::cols": 0, "textarea::disabled": 0, "textarea::name": 8, "textarea::onblur": 2, "textarea::onchange": 2, "textarea::onfocus": 2, "textarea::onselect": 2, "textarea::readonly": 0, "textarea::rows": 0, "textarea::tabindex": 0, "tfoot::align": 0, "tfoot::char": 0, "tfoot::charoff": 0, "tfoot::valign": 0, "th::abbr": 0, "th::align": 0, "th::axis": 0, "th::bgcolor": 0, "th::char": 0, "th::charoff": 0, "th::colspan": 0, "th::headers": 6, "th::height": 0, "th::nowrap": 0, "th::rowspan": 0, "th::scope": 0, "th::valign": 0, "th::width": 0, "thead::align": 0, "thead::char": 0, "thead::charoff": 0, "thead::valign": 0, "tr::align": 0, "tr::bgcolor": 0, "tr::char": 0, "tr::charoff": 0, "tr::valign": 0, "ul::compact": 0, "ul::type": 0 }, html4.eflags = { OPTIONAL_ENDTAG: 1, EMPTY: 2, CDATA: 4, RCDATA: 8, UNSAFE: 16, FOLDABLE: 32, SCRIPT: 64, STYLE: 128 }, html4.ELEMENTS = { a: 0, abbr: 0, acronym: 0, address: 0, applet: 16, area: 2, b: 0, base: 18, basefont: 18, bdo: 0, big: 0, blockquote: 0, body: 49, br: 2, button: 0, canvas: 0, caption: 0, center: 0, cite: 0, code: 0, col: 2, colgroup: 1, dd: 1, del: 0, dfn: 0, dir: 0, div: 0, dl: 0, dt: 1, em: 0, fieldset: 0, font: 0, form: 0, frame: 18, frameset: 16, h1: 0, h2: 0, h3: 0, h4: 0, h5: 0, h6: 0, head: 49, hr: 2, html: 49, i: 0, iframe: 4, img: 2, input: 2, ins: 0, isindex: 18, kbd: 0, label: 0, legend: 0, li: 1, link: 18, map: 0, menu: 0, meta: 18, nobr: 0, noembed: 4, noframes: 20, noscript: 20, object: 16, ol: 0, optgroup: 0, option: 1, p: 1, param: 18, pre: 0, q: 0, s: 0, samp: 0, script: 84, select: 0, small: 0, span: 0, strike: 0, strong: 0, style: 148, sub: 0, sup: 0, table: 0, tbody: 1, td: 1, textarea: 8, tfoot: 1, th: 1, thead: 1, title: 24, tr: 1, tt: 0, u: 0, ul: 0, "var": 0 }, html4.ueffects = { NOT_LOADED: 0, SAME_DOCUMENT: 1, NEW_DOCUMENT: 2 }, html4.URIEFFECTS = { "a::href": 2, "area::href": 2, "blockquote::cite": 0, "body::background": 1, "del::cite": 0, "form::action": 2, "img::src": 1, "input::src": 1, "ins::cite": 0, "q::cite": 0 }, html4.ltypes = { UNSANDBOXED: 2, SANDBOXED: 1, DATA: 0 }, html4.LOADERTYPES = { "a::href": 2, "area::href": 2, "blockquote::cite": 2, "body::background": 1, "del::cite": 2, "form::action": 2, "img::src": 1, "input::src": 1, "ins::cite": 2, "q::cite": 2 };
    var html = function(a) {
            function b(a) {
                if (a = k(a), l.hasOwnProperty(a)) return l[a];
                var b = a.match(n);
                return b ? String.fromCharCode(parseInt(b[1], 10)) : (b = a.match(o)) ? String.fromCharCode(parseInt(b[1], 16)) : "" }

            function c(a, c) {
                return b(c) }

            function d(a) {
                return a.replace(p, "") }

            function e(a) {
                return a.replace(q, c) }

            function f(a) {
                return a.replace(r, "&amp;").replace(t, "&lt;").replace(u, "&gt;").replace(v, "&#34;").replace(w, "&#61;") }

            function g(a) {
                return a.replace(s, "&amp;$1").replace(t, "&lt;").replace(u, "&gt;") }

            function h(b) {
                return function(c, f) { c = String(c);
                    var h = null,
                        i = !1,
                        j = [],
                        l = void 0,
                        m = void 0,
                        n = void 0;
                    for (b.startDoc && b.startDoc(f); c;) {
                        var o = c.match(i ? x : y);
                        if (c = c.substring(o[0].length), i) {
                            if (o[1]) {
                                var p, q = k(o[1]);
                                if (o[2]) {
                                    var r = o[3];
                                    switch (r.charCodeAt(0)) {
                                        case 34:
                                        case 39:
                                            r = r.substring(1, r.length - 1) }
                                    p = e(d(r)) } else p = q;
                                j.push(q, p) } else if (o[4]) {
                                if (void 0 !== m && (n ? b.startTag && b.startTag(l, j, f) : b.endTag && b.endTag(l, f)), n && m & (a.eflags.CDATA | a.eflags.RCDATA)) { h = null === h ? k(c) : h.substring(h.length - c.length);
                                    var s = h.indexOf("</" + l);
                                    0 > s && (s = c.length), s && (m & a.eflags.CDATA ? b.cdata && b.cdata(c.substring(0, s), f) : b.rcdata && b.rcdata(g(c.substring(0, s)), f), c = c.substring(s)) }
                                l = m = n = void 0, j.length = 0, i = !1 } } else if (o[1]) b.pcdata && b.pcdata(o[0], f);
                        else if (o[3]) n = !o[2], i = !0, l = k(o[3]), m = a.ELEMENTS.hasOwnProperty(l) ? a.ELEMENTS[l] : void 0;
                        else if (o[4]) b.pcdata && b.pcdata(o[4], f);
                        else if (o[5] && b.pcdata) {
                            var t = o[5];
                            b.pcdata("<" === t ? "&lt;" : ">" === t ? "&gt;" : "&amp;", f) } }
                    b.endDoc && b.endDoc(f) } }

            function i(b) {
                var c, d;
                return h({ startDoc: function(a) { c = [], d = !1 }, startTag: function(e, g, h) {
                        if (!d && a.ELEMENTS.hasOwnProperty(e)) {
                            var i = a.ELEMENTS[e];
                            if (!(i & a.eflags.FOLDABLE)) {
                                if (i & a.eflags.UNSAFE) return void(d = !(i & a.eflags.EMPTY));
                                if (g = b(e, g)) { i & a.eflags.EMPTY || c.push(e), h.push("<", e);
                                    for (var j = 0, k = g.length; k > j; j += 2) {
                                        var l = g[j],
                                            m = g[j + 1];
                                        null !== m && void 0 !== m && h.push(" ", l, '="', f(m), '"') }
                                    h.push(">") } } } }, endTag: function(b, e) {
                        if (d) return void(d = !1);
                        if (a.ELEMENTS.hasOwnProperty(b)) {
                            var f = a.ELEMENTS[b];
                            if (!(f & (a.eflags.UNSAFE | a.eflags.EMPTY | a.eflags.FOLDABLE))) {
                                var g;
                                if (f & a.eflags.OPTIONAL_ENDTAG)
                                    for (g = c.length; --g >= 0;) {
                                        var h = c[g];
                                        if (h === b) break;
                                        if (!(a.ELEMENTS[h] & a.eflags.OPTIONAL_ENDTAG)) return } else
                                        for (g = c.length; --g >= 0 && c[g] !== b;);
                                if (0 > g) return;
                                for (var i = c.length; --i > g;) {
                                    var h = c[i];
                                    a.ELEMENTS[h] & a.eflags.OPTIONAL_ENDTAG || e.push("</", h, ">") }
                                c.length = g, e.push("</", b, ">") } } }, pcdata: function(a, b) { d || b.push(a) }, rcdata: function(a, b) { d || b.push(a) }, cdata: function(a, b) { d || b.push(a) }, endDoc: function(a) {
                        for (var b = c.length; --b >= 0;) a.push("</", c[b], ">");
                        c.length = 0 } }) }

            function j(b, c, d) {
                var e = [];
                return i(function(b, e) {
                    for (var f = 0; f < e.length; f += 2) {
                        var g, h = e[f],
                            i = e[f + 1],
                            j = null;
                        if (g = b + "::" + h, (a.ATTRIBS.hasOwnProperty(g) || (g = "*::" + h, a.ATTRIBS.hasOwnProperty(g))) && (j = a.ATTRIBS[g]), null !== j) switch (j) {
                            case a.atype.NONE:
                                break;
                            case a.atype.SCRIPT:
                            case a.atype.STYLE:
                                i = null;
                                break;
                            case a.atype.ID:
                            case a.atype.IDREF:
                            case a.atype.IDREFS:
                            case a.atype.GLOBAL_NAME:
                            case a.atype.LOCAL_NAME:
                            case a.atype.CLASSES:
                                i = d ? d(i) : i;
                                break;
                            case a.atype.URI:
                                var k = ("" + i).match(z);
                                i = k && (!k[1] || m.test(k[1])) ? c && c(i) : null;
                                break;
                            case a.atype.URI_FRAGMENT:
                                i && "#" === i.charAt(0) ? (i = d ? d(i) : i, i && (i = "#" + i)) : i = null;
                                break;
                            default:
                                i = null } else i = null;
                        e[f + 1] = i }
                    return e })(b, e), e.join("") }
            var k;
            k = "script" === "SCRIPT".toLowerCase() ? function(a) {
                return a.toLowerCase() } : function(a) {
                return a.replace(/[A-Z]/g, function(a) {
                    return String.fromCharCode(32 | a.charCodeAt(0)) }) };
            var l = { lt: "<", gt: ">", amp: "&", nbsp: "Â ", quot: '"', apos: "'" },
                m = /^(?:https?|mailto|data)$/i,
                n = /^#(\d+)$/,
                o = /^#x([0-9A-Fa-f]+)$/,
                p = /\0/g,
                q = /&(#\d+|#x[0-9A-Fa-f]+|\w+);/g,
                r = /&/g,
                s = /&([^a-z#]|#(?:[^0-9x]|x(?:[^0-9a-f]|$)|$)|$)/gi,
                t = /</g,
                u = />/g,
                v = /\"/g,
                w = /\=/g,
                x = new RegExp("^\\s*(?:(?:([a-z][a-z-]*)(\\s*=\\s*(\"[^\"]*\"|'[^']*'|(?=[a-z][a-z-]*\\s*=)|[^>\"'\\s]*))?)|(/?>)|[\\s\\S][^a-z\\s>]*)", "i"),
                y = new RegExp("^(?:&(\\#[0-9]+|\\#[x][0-9a-f]+|\\w+);|<!--[\\s\\S]*?-->|<!\\w[^>]*>|<\\?[^>*]*>|<(/)?([a-z][a-z0-9]*)|([^<&>]+)|([<&>]))", "i"),
                z = new RegExp("^(?:([^:/?#]+):)?");
            return { escapeAttrib: f, makeHtmlSanitizer: i, makeSaxParser: h, normalizeRCData: g, sanitize: j, unescapeEntities: e } }(html4),
        html_sanitize = html.sanitize;
    "undefined" != typeof window && (window.html = html, window.html_sanitize = html_sanitize), html4.ATTRIBS["*::style"] = 0, html4.ELEMENTS.style = 0, html4.ATTRIBS["a::target"] = 0, html4.ELEMENTS.video = 0, html4.ATTRIBS["video::src"] = 0, html4.ATTRIBS["video::poster"] = 0, html4.ATTRIBS["video::controls"] = 0, html4.ELEMENTS.audio = 0, html4.ATTRIBS["audio::src"] = 0, html4.ATTRIBS["video::autoplay"] = 0, html4.ATTRIBS["video::controls"] = 0,
        function(a, b, c) { b[a] = c() }("reqwest", this, function() {
            function handleReadyState(a, b, c) {
                return function() {
                    return a._aborted ? c(a.request) : void(a.request && 4 == a.request[readyState] && (a.request.onreadystatechange = noop, twoHundo.test(a.request.status) ? b(a.request) : c(a.request))) } }

            function setHeaders(a, b) {
                var c, d = b.headers || {};
                d.Accept = d.Accept || defaultHeaders.accept[b.type] || defaultHeaders.accept["*"], b.crossOrigin || d[requestedWith] || (d[requestedWith] = defaultHeaders.requestedWith), d[contentType] || (d[contentType] = b.contentType || defaultHeaders.contentType);
                for (c in d) d.hasOwnProperty(c) && a.setRequestHeader(c, d[c]) }

            function setCredentials(a, b) { "undefined" != typeof b.withCredentials && "undefined" != typeof a.withCredentials && (a.withCredentials = !!b.withCredentials) }

            function generalCallback(a) { lastValue = a }

            function urlappend(a, b) {
                return a + (/\?/.test(a) ? "&" : "?") + b }

            function handleJsonp(a, b, c, d) {
                var e = uniqid++,
                    f = a.jsonpCallback || "callback",
                    g = a.jsonpCallbackName || reqwest.getcallbackPrefix(e),
                    h = new RegExp("((^|\\?|&)" + f + ")=([^&]+)"),
                    i = d.match(h),
                    j = doc.createElement("script"),
                    k = 0,
                    l = -1 !== navigator.userAgent.indexOf("MSIE 10.0");
                return i ? "?" === i[3] ? d = d.replace(h, "$1=" + g) : g = i[3] : d = urlappend(d, f + "=" + g), win[g] = generalCallback, j.type = "text/javascript", "undefined" == typeof j.onreadystatechange || l || (j.event = "onclick", j.htmlFor = j.id = "_reqwest_" + e), j.onload = j.onreadystatechange = function() {
                    return j[readyState] && "complete" !== j[readyState] && "loaded" !== j[readyState] || k ? !1 : (j.onload = j.onreadystatechange = null, j.onclick && j.onclick(), a.success && a.success(lastValue), lastValue = void 0, head.removeChild(j), void(k = 1)) }, j.src = d, j.async = !0, head.appendChild(j), { abort: function() { j.onload = j.onreadystatechange = null, a.error && a.error({}, "Request is aborted: timeout", {}), lastValue = void 0, head.removeChild(j), k = 1 } } }

            function getRequest(a, b) {
                var c, d = this.o,
                    e = (d.method || "GET").toUpperCase(),
                    f = "string" == typeof d ? d : d.url,
                    g = d.processData !== !1 && d.data && "string" != typeof d.data ? reqwest.toQueryString(d.data) : d.data || null;
                return "jsonp" != d.type && "GET" != e || !g || (f = urlappend(f, g), g = null), "jsonp" == d.type ? handleJsonp(d, a, b, f) : (c = xhr(), c.open(e, f, !0), setHeaders(c, d), setCredentials(c, d), c.onreadystatechange = handleReadyState(this, a, b), d.before && d.before(c), c.send(g), c) }

            function Reqwest(a, b) { this.o = a, this.fn = b, init.apply(this, arguments) }

            function setType(a) {
                var b = a.match(/\.(json|jsonp|html|xml)(\?|$)/);
                return b ? b[1] : "js" }

            function init(o, fn) {
                function complete(a) {
                    for (o.timeout && clearTimeout(self.timeout), self.timeout = null; self._completeHandlers.length > 0;) self._completeHandlers.shift()(a) }

                function success(resp) {
                    var r = resp.responseText;
                    if (r) switch (type) {
                        case "json":
                            try { resp = win.JSON ? win.JSON.parse(r) : eval("(" + r + ")") } catch (err) {
                                return error(resp, "Could not parse JSON in response", err) }
                            break;
                        case "js":
                            resp = eval(r);
                            break;
                        case "html":
                            resp = r;
                            break;
                        case "xml":
                            resp = resp.responseXML && resp.responseXML.parseError && resp.responseXML.parseError.errorCode && resp.responseXML.parseError.reason ? null : resp.responseXML }
                    for (self._responseArgs.resp = resp, self._fulfilled = !0, fn(resp); self._fulfillmentHandlers.length > 0;) self._fulfillmentHandlers.shift()(resp);
                    complete(resp) }

                function error(a, b, c) {
                    for (self._responseArgs.resp = a, self._responseArgs.msg = b, self._responseArgs.t = c, self._erred = !0; self._errorHandlers.length > 0;) self._errorHandlers.shift()(a, b, c);
                    complete(a) }
                this.url = "string" == typeof o ? o : o.url, this.timeout = null, this._fulfilled = !1, this._fulfillmentHandlers = [], this._errorHandlers = [], this._completeHandlers = [], this._erred = !1, this._responseArgs = {};
                var self = this,
                    type = o.type || setType(this.url);
                fn = fn || function() {}, o.timeout && (this.timeout = setTimeout(function() { self.abort() }, o.timeout)), o.success && this._fulfillmentHandlers.push(function() { o.success.apply(o, arguments) }), o.error && this._errorHandlers.push(function() { o.error.apply(o, arguments) }), o.complete && this._completeHandlers.push(function() { o.complete.apply(o, arguments) }), this.request = getRequest.call(this, success, error) }

            function reqwest(a, b) {
                return new Reqwest(a, b) }

            function normalize(a) {
                return a ? a.replace(/\r?\n/g, "\r\n") : "" }

            function serial(a, b) {
                var c, d, e, f, g = a.name,
                    h = a.tagName.toLowerCase(),
                    i = function(a) { a && !a.disabled && b(g, normalize(a.attributes.value && a.attributes.value.specified ? a.value : a.text)) };
                if (!a.disabled && g) switch (h) {
                    case "input":
                        /reset|button|image|file/i.test(a.type) || (c = /checkbox/i.test(a.type), d = /radio/i.test(a.type), e = a.value, (!(c || d) || a.checked) && b(g, normalize(c && "" === e ? "on" : e)));
                        break;
                    case "textarea":
                        b(g, normalize(a.value));
                        break;
                    case "select":
                        if ("select-one" === a.type.toLowerCase()) i(a.selectedIndex >= 0 ? a.options[a.selectedIndex] : null);
                        else
                            for (f = 0; a.length && f < a.length; f++) a.options[f].selected && i(a.options[f]) } }

            function eachFormElement() {
                var a, b, c = this,
                    d = function(a, b) {
                        var d, e, f;
                        for (d = 0; d < b.length; d++)
                            for (f = a[byTag](b[d]), e = 0; e < f.length; e++) serial(f[e], c) };
                for (b = 0; b < arguments.length; b++) a = arguments[b], /input|select|textarea/i.test(a.tagName) && serial(a, c), d(a, ["input", "select", "textarea"]) }

            function serializeQueryString() {
                return reqwest.toQueryString(reqwest.serializeArray.apply(null, arguments)) }

            function serializeHash() {
                var a = {};
                return eachFormElement.apply(function(b, c) { b in a ? (a[b] && !isArray(a[b]) && (a[b] = [a[b]]), a[b].push(c)) : a[b] = c }, arguments), a }
            var win = window,
                doc = document,
                twoHundo = /^20\d$/,
                byTag = "getElementsByTagName",
                readyState = "readyState",
                contentType = "Content-Type",
                requestedWith = "X-Requested-With",
                head = doc[byTag]("head")[0],
                uniqid = 0,
                callbackPrefix = "reqwest_" + +new Date,
                lastValue, xmlHttpRequest = "XMLHttpRequest",
                noop = function() {},
                isArray = "function" == typeof Array.isArray ? Array.isArray : function(a) {
                    return a instanceof Array },
                defaultHeaders = { contentType: "application/x-www-form-urlencoded", requestedWith: xmlHttpRequest, accept: { "*": "text/javascript, text/html, application/xml, text/xml, */*", xml: "application/xml, text/xml", html: "text/html", text: "text/plain", json: "application/json, text/javascript", js: "application/javascript, text/javascript" } },
                xhr = win[xmlHttpRequest] ? function() {
                    return new XMLHttpRequest } : function() {
                    return new ActiveXObject("Microsoft.XMLHTTP") };
            return Reqwest.prototype = { abort: function() { this._aborted = !0, this.request.abort() }, retry: function() { init.call(this, this.o, this.fn) }, then: function(a, b) {
                    return this._fulfilled ? a(this._responseArgs.resp) : this._erred ? b(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t) : (this._fulfillmentHandlers.push(a), this._errorHandlers.push(b)), this }, always: function(a) {
                    return this._fulfilled || this._erred ? a(this._responseArgs.resp) : this._completeHandlers.push(a), this }, fail: function(a) {
                    return this._erred ? a(this._responseArgs.resp, this._responseArgs.msg, this._responseArgs.t) : this._errorHandlers.push(a), this } }, reqwest.serializeArray = function() {
                var a = [];
                return eachFormElement.apply(function(b, c) { a.push({ name: b, value: c }) }, arguments), a }, reqwest.serialize = function() {
                if (0 === arguments.length) return "";
                var a, b, c = Array.prototype.slice.call(arguments, 0);
                return a = c.pop(), a && a.nodeType && c.push(a) && (a = null), a && (a = a.type), b = "map" == a ? serializeHash : "array" == a ? reqwest.serializeArray : serializeQueryString, b.apply(null, c) }, reqwest.toQueryString = function(a) {
                var b, c, d, e = "",
                    f = encodeURIComponent,
                    g = function(a, b) { e += f(a) + "=" + f(b) + "&" };
                if (isArray(a))
                    for (b = 0; a && b < a.length; b++) g(a[b].name, a[b].value);
                else
                    for (c in a)
                        if (Object.hasOwnProperty.call(a, c))
                            if (d = a[c], isArray(d))
                                for (b = 0; b < d.length; b++) g(c, d[b]);
                            else g(c, a[c]); return e.replace(/&$/, "").replace(/%20/g, "+") }, reqwest.getcallbackPrefix = function() {
                return callbackPrefix }, reqwest.compat = function(a, b) {
                return a && (a.type && (a.method = a.type) && delete a.type, a.dataType && (a.type = a.dataType), a.jsonpCallback && (a.jsonpCallbackName = a.jsonpCallback) && delete a.jsonpCallback, a.jsonp && (a.jsonpCallback = a.jsonp)), new Reqwest(a, b) }, reqwest }), wax = wax || {}, wax.attribution = function() {
            var a = {},
                b = document.createElement("div");
            return b.className = "map-attribution", a.content = function(a) {
                return "undefined" == typeof a ? b.innerHTML : (b.innerHTML = wax.u.sanitize(a), this) }, a.element = function() {
                return b }, a.init = function() {
                return this }, a }, wax = wax || {}, wax.bwdetect = function(a, b) {
            function c() { wax.bw = -1;
                var a = new Image;
                a.src = f;
                var b = !0,
                    c = setTimeout(function() { b && -1 == wax.bw && (d.bw(0), b = !1) }, e);
                a.onload = function() { b && -1 == wax.bw && (clearTimeout(c), d.bw(1), b = !1) } }
            var d = {},
                e = a.threshold || 400,
                f = "http://a.tiles.mapbox.com/mapbox/1.0.0/blue-marble-topo-bathy-jul/0/0/0.png?preventcache=" + +new Date,
                g = 1,
                h = void 0 === a.auto ? !0 : a.auto;
            return d.bw = function(a) {
                if (!arguments.length) return g;
                wax.bwlisteners && wax.bwlisteners.length && function() {
                    for (listeners = wax.bwlisteners, wax.bwlisteners = [], i = 0; i < listeners; i++) listeners[i](a) }(), wax.bw = a, g != (g = a) && b(a) }, d.add = function() {
                return h && c(), this }, -1 == wax.bw ? (wax.bwlisteners = wax.bwlisteners || [], wax.bwlisteners.push(d.bw)) : void 0 !== wax.bw ? d.bw(wax.bw) : d.add(), d }, wax.formatter = function(x) {
            var formatter = {},
                f;
            if (x && "string" == typeof x) try { eval("f = " + x) } catch (e) { console && console.log(e) } else f = x && "function" == typeof x ? x : function() {};
            return formatter.format = function(a, b) {
                try {
                    return wax.u.sanitize(f(a, b)) } catch (c) { console && console.log(c) } }, formatter }, wax.gi = function(a, b) {
            function c(a) {
                return a >= 93 && a--, a >= 35 && a--, a -= 32 }
            b = b || {};
            var d = {},
                e = b.resolution || 4,
                f = b.tileSize || 256;
            return d.grid_tile = function() {
                return a }, d.getKey = function(b, d) {
                return a && a.grid && !(0 > d || 0 > b || Math.floor(d) >= f || Math.floor(b) >= f) ? c(a.grid[Math.floor(d / e)].charCodeAt(Math.floor(b / e))) : void 0 }, d.gridFeature = function(b, c) {
                var d = this.getKey(b, c),
                    e = a.keys;
                return e && e[d] && a.data[e[d]] ? a.data[e[d]] : void 0 }, d.tileFeature = function(b, c, d) {
                if (a) {
                    var e = wax.u.offset(d);
                    return feature = this.gridFeature(b - e.left, c - e.top), feature } }, d }, wax.gm = function() {
            function a(a) {
                return "string" == typeof a && (a = [a]),
                    function(b) {
                        if (b) {
                            var c = new RegExp(e.tileRegexp()),
                                d = c.exec(b);
                            if (d) return a[parseInt(d[2], 10) % a.length].replace(/\{z\}/g, d[1]).replace(/\{x\}/g, d[2]).replace(/\{y\}/g, d[3]) } } }
            var b, c, d = 4,
                e = {},
                f = function(a) {
                    return a ? a.replace(/(\.png|\.jpg|\.jpeg)(\d*)/, ".grid.json") : void 0 };
            return e.tileRegexp = function() {
                var a = b.tiles[0],
                    c = a.indexOf("?"); - 1 !== c && (a = a.substr(0, c)), a = a.replace(/[\(\)\?\$\*\+\^]/g, "."), 0 === a.indexOf("https") ? a = a.replace(":443", "[:0-9]*") : 0 === a.indexOf("http") && (a = a.replace(":80", "[:0-9]*"));
                var d = "";
                if (b.tiles.length > 1)
                    for (var e = b.tiles[0], f = b.tiles[1], g = 0; g < e.length; ++g) d += e.charAt(g) != f.charAt(g) ? "." : a.charAt(g) || "";
                else d = a;
                return d.replace(/\{x\}/, "(\\d+)").replace(/\{y\}/, "(\\d+)").replace(/\{z\}/, "(\\d+)") }, e.formatter = function(a) {
                return arguments.length ? (c = wax.formatter(a), e) : c }, e.template = function(a) {
                return arguments.length ? (c = wax.template(a), e) : c }, e.gridUrl = function(b) {
                return arguments.length ? (f = b ? "function" == typeof b ? b : a(b) : function() {
                    return null }, e) : f }, e.getGrid = function(a, b) {
                var g = f(a);
                return c && g ? (wax.request.get(g, function(a, e) {
                    return a ? b(a, null) : void b(null, wax.gi(e, { formatter: c, resolution: d })) }), e) : b(null, null) }, e.tilejson = function(a) {
                return arguments.length ? (a.template ? e.template(a.template) : a.formatter ? e.formatter(a.formatter) : c = void 0, e.gridUrl(a.grids), a.resolution && (d = a.resolution), b = a, e) : b }, e }, wax = wax || {}, wax.hash = function(a) {
            function b() {
                return location.hash.substring(1) }

            function c(a) {
                var b = window.location;
                b.replace(b.toString().replace(b.hash || /$/, "#" + a)) }

            function d(b) {
                for (var c = b.split("/"), d = 0; d < c.length; d++)
                    if (c[d] = Number(c[d]), isNaN(c[d])) return !0;
                return c.length < 3 ? !0 : void(3 == c.length && a.setCenterZoom(c)) }

            function e() {
                var b = a.getCenterZoom();
                g !== b && (g = b, c(g)) }

            function f(a) { a !== g && d(g = a) && e() }
            a = a || {};
            var g, h = {},
                i = wax.u.throttle(e, 500);
            return h.add = function() {
                return f(b()), a.bindChange(i), h }, h.remove = function() {
                return a.unbindChange(i), h }, h }, wax = wax || {}, wax.interaction = function() {
            function a(a) {
                for (var b = i(), c = new RegExp(n.tileRegexp()), d = 0; d < b.length; d++)
                    if (a) {
                        var e = b[d][0] <= a.y && b[d][0] + 256 > a.y && b[d][1] <= a.x && b[d][1] + 256 > a.x;
                        if (e && c.exec(b[d][2].src)) return b[d][2] }
                return !1 }

            function b() {
                return q ? (window.clearTimeout(q), q = null, !0) : !1 }

            function c(a) {
                if (!p) {
                    var b = "MSPointerMove" !== a.type && "pointermove" !== a.type ? a : a.originalEvent,
                        c = wax.u.eventoffset(b);
                    o.screen_feature(c, function(b) { b ? bean.fire(o, "on", { parent: l(), data: b, formatter: n.formatter().format, e: a }) : bean.fire(o, "off") }) } }

            function d(a) { p = !0;
                var b = "MSPointerDown" !== a.type && "pointerdown" !== a.type ? a : a.originalEvent;
                h = wax.u.eventoffset(b), "mousedown" === a.type ? (bean.add(document.body, "click", g), bean.add(document.body, "mouseup", e)) : "touchstart" === a.type && 1 === a.touches.length ? (bean.remove(document.body, "click", g), bean.add(document.body, "click", g), bean.add(document.body, "touchEnd", e)) : "MSPointerDown" === a.originalEvent.type && a.originalEvent.touches && 1 === a.originalEvent.touches.length ? (bean.fire(o, "off"), bean.add(l(), v)) : "pointerdown" === a.type && a.originalEvent.touches && 1 === a.originalEvent.touches.length ? (bean.fire(o, "off"), bean.add(l(), w)) : p = !1 }

            function e() { p = !1 }

            function f() { bean.remove(l(), u), bean.remove(l(), v), bean.remove(l(), w), p = !1 }

            function g(a) {
                var c = {},
                    d = "MSPointerMove" !== a.type && "MSPointerUp" !== a.type && "pointerup" !== a.type && "pointermove" !== a.type ? a : a.originalEvent,
                    e = wax.u.eventoffset(d);
                p = !1;
                for (var f in d) c[f] = d[f];
                if (bean.remove(document.body, "mouseup", g),
                    bean.remove(l(), u), bean.remove(l(), v), bean.remove(l(), w), "touchend" === a.type) o.click(a, h);
                else if (e && h)
                    if ("MSPointerMove" === c.type || "MSPointerUp" === c.type) c.changedTouches = [], o.click(c, e);
                    else if ("pointermove" === c.type || "pointerup" === c.type) o.click(c, e);
                else if (Math.round(e.y / r) === Math.round(h.y / r) && Math.round(e.x / r) === Math.round(h.x / r)) {
                    if (s && "touchmove" === c.type) return g;
                    q ? b() : q = window.setTimeout(function() { q = null, o.click(c, e) }, 150) }
                return g
            }
            var h, i, j, k, l, m, n = wax.gm(),
                o = {},
                p = !1,
                q = null,
                r = 4,
                s = !1,
                t = { mousemove: c, touchstart: d, mousedown: d },
                u = { touchend: g, touchmove: g, touchcancel: f },
                v = { MSPointerUp: g, MSPointerMove: g, MSPointerCancel: f },
                w = { pointerup: g, pointermove: g, pointercancel: f };
            return o.discardTouchMove = function(a) {
                return arguments.length ? (s = a, o) : s }, o.click = function(a, b) { o.screen_feature(b, function(b) { b && bean.fire(o, "on", { parent: l(), data: b, formatter: n.formatter().format, e: a }) }) }, o.screen_feature = function(b, c) {
                var d = a(b);
                d || c(null), n.getGrid(d.src, function(a, e) {
                    if (a || !e) return c(null);
                    var f = e.tileFeature(b.x, b.y, d);
                    c(f) }) }, o.attach = function(a) {
                return arguments.length ? (j = a, o) : j }, o.detach = function(a) {
                return arguments.length ? (k = a, o) : k }, o.map = function(a) {
                return arguments.length ? (m = a, j && j(m), bean.add(l(), t), bean.add(l(), "touchstart", d), bean.add(l(), "MSPointerDown", d), bean.add(l(), "pointerdown", d), o) : m }, o.grid = function(a) {
                return arguments.length ? (i = a, o) : i }, o.remove = function(a) {
                return k && k(m), bean.remove(l(), t), bean.fire(o, "remove"), o }, o.tilejson = function(a) {
                return arguments.length ? (n.tilejson(a), o) : n.tilejson() }, o.formatter = function() {
                return n.formatter() }, o.on = function(a, b) {
                return bean.add(o, a, b), o }, o.off = function(a, b) {
                return bean.remove(o, a, b), o }, o.gridmanager = function(a) {
                return arguments.length ? (n = a, o) : n }, o.parent = function(a) {
                return l = a, o }, o
        };
    var wax = wax || {};
    wax.location = function() {
        function a(a) {
            if ("mousemove" !== a.e.type && a.e.type) {
                var b = a.formatter({ format: "location" }, a.data);
                b && (window.location.href = b) } }
        var b = {};
        return b.events = function() {
            return { on: a } }, b };
    var wax = wax || {};
    if (wax.request = { cache: {}, locks: {}, promises: {}, get: function(a, b) {
                if (this.cache[a]) return b(this.cache[a][0], this.cache[a][1]);
                if (this.promises[a] = this.promises[a] || [], this.promises[a].push(b), !this.locks[a]) {
                    var c = this;
                    this.locks[a] = !0, reqwest({ url: a + (~a.indexOf("?") ? "&" : "?") + "callback=grid", type: "jsonp", jsonpCallback: "callback", success: function(b) { c.locks[a] = !1, c.cache[a] = [null, b];
                            for (var d = 0; d < c.promises[a].length; d++) c.promises[a][d](c.cache[a][0], c.cache[a][1]) }, error: function(b) { c.locks[a] = !1, c.cache[a] = [b, null];
                            for (var d = 0; d < c.promises[a].length; d++) c.promises[a][d](c.cache[a][0], c.cache[a][1]) } }) } } }, wax.template = function(a) {
            var b = {};
            return b.format = function(a, b) {
                throw new Error("mustache.js templates are no longer supported") }, b }, !wax) var wax = {};
    wax.tilejson = function(a, b) { reqwest({ url: a + (~a.indexOf("?") ? "&" : "?") + "callback=grid", type: "jsonp", jsonpCallback: "callback", success: b, error: b }) };
    var wax = wax || {};
    wax.u = { offset: function(a) {
            function b() { h(a);
                try {
                    for (; a = a.offsetParent;) h(a) } catch (b) {} }
            var c = a.offsetWidth || parseInt(a.style.width, 10),
                d = a.offsetHeight || parseInt(a.style.height, 10),
                e = document.body,
                f = 0,
                g = 0,
                h = function(a) {
                    if (a !== e && a !== document.documentElement) { f += a.offsetTop, g += a.offsetLeft;
                        var b = a.style.transform || a.style.WebkitTransform || a.style.OTransform || a.style.MozTransform || a.style.msTransform;
                        if (b) {
                            var c;
                            if (c = b.match(/translate\((.+)px, (.+)px\)/)) f += parseInt(c[2], 10), g += parseInt(c[1], 10);
                            else if (c = b.match(/translate3d\((.+)px, (.+)px, (.+)px\)/)) f += parseInt(c[2], 10), g += parseInt(c[1], 10);
                            else if (c = b.match(/matrix3d\(([\-\d,\s]+)\)/)) {
                                var d = c[1].split(",");
                                f += parseInt(d[13], 10), g += parseInt(d[12], 10) } else(c = b.match(/matrix\(.+, .+, .+, .+, (.+), (.+)\)/)) && (f += parseInt(c[2], 10), g += parseInt(c[1], 10)) } } };
            if ("undefined" != typeof a.getBoundingClientRect) {
                var i = document.body,
                    j = a.ownerDocument.documentElement,
                    k = document.clientTop || i.clientTop || 0,
                    l = document.clientLeft || i.clientLeft || 0,
                    m = window.pageYOffset || j.scrollTop,
                    n = window.pageXOffset || j.scrollLeft;
                try {
                    var o = a.getBoundingClientRect();
                    f = o.top + m - k, g = o.left + n - l } catch (p) { b() } } else b();
            f += e.offsetTop, g += e.offsetLeft, f += e.parentNode.offsetTop, g += e.parentNode.offsetLeft;
            var q = document.defaultView ? window.getComputedStyle(e.parentNode, null) : e.parentNode.currentStyle;
            return e.parentNode.offsetTop === parseInt(q.marginTop, 10) || isNaN(parseInt(q.marginTop, 10)) || (f += parseInt(q.marginTop, 10), g += parseInt(q.marginLeft, 10)), { top: f, left: g, height: d, width: c } }, $: function(a) {
            return "string" == typeof a ? document.getElementById(a) : a }, eventoffset: function(a) {
            return a || (a = window.event), "MSPointerMove" == a.type || "MSPointerDown" == a.type || "MSPointerUp" == a.type ? { x: a.pageX + window.pageXOffset, y: a.pageY + window.pageYOffset } : a.pageX || a.pageY ? { x: a.pageX, y: a.pageY } : a.clientX || a.clientY ? { x: a.clientX, y: a.clientY } : a.touches && 1 === a.touches.length ? { x: a.touches[0].pageX, y: a.touches[0].pageY } : void 0 }, limit: function(a, b, c) {
            var d;
            return function() {
                var e = this,
                    f = arguments,
                    g = function() { d = null, a.apply(e, f) };
                c && clearTimeout(d), (c || !d) && (d = setTimeout(g, b)) } }, throttle: function(a, b) {
            return this.limit(a, b, !1) }, sanitize: function(a) {
            function b(a) {
                return /^(https?:\/\/|data:image)/.test(a) ? a : void 0 }

            function c(a) {
                return a }
            return a ? html_sanitize(a, b, c) : "" } }, wax = wax || {}, wax.leaf = wax.leaf || {}, wax.leaf.hash = function(a) {
        return wax.hash({ getCenterZoom: function() {
                var b = a.getCenter(),
                    c = a.getZoom(),
                    d = Math.max(0, Math.ceil(Math.log(c) / Math.LN2));
                return [c, b.lat.toFixed(d), b.lng.toFixed(d)].join("/") }, setCenterZoom: function(b) { a.setView(new L.LatLng(b[1], b[2]), b[0]) }, bindChange: function(b) { a.on("moveend", b) }, unbindChange: function(b) { a.off("moveend", b) } }) }, wax = wax || {}, wax.leaf = wax.leaf || {}, wax.leaf.interaction = function() {
        function a() { g = !0 }

        function b() {
            return !g && e ? e : e = function(a) {
                var b = [];
                for (var c in a)
                    if (a[c]._tiles)
                        for (var d in a[c]._tiles) {
                            var e = a[c]._tiles[d];
                            if (e.src) {
                                var f = wax.u.offset(e);
                                b.push([f.top, f.left, e]) } }
                    return b }(f._layers) }

        function c(b) {
            if (!arguments.length) return f;
            f = b;
            for (var c = ["moveend"], d = 0; d < c.length; d++) f.on(c[d], a) }

        function d(b) {
            if (!arguments.length) return f;
            f = b;
            for (var c = ["moveend"], d = 0; d < c.length; d++) f.off(c[d], a) }
        var e, f, g = !1;
        return wax.interaction().attach(c).detach(d).parent(function() {
            return f._container }).grid(b) }, wax = wax || {}, wax.leaf = wax.leaf || {}, wax.leaf.connector = L.TileLayer.extend({ initialize: function(a) { a = a || {}, a.minZoom = a.minzoom || 0, a.maxZoom = a.maxzoom || 22, L.TileLayer.prototype.initialize.call(this, a.tiles[0], a) } }), wax = wax || {}, wax.g = wax.g || {}, wax.g.attribution = function(a, b) { b = b || {};
        var c, d = {};
        return d.element = function() {
            return c.element() }, d.appendTo = function(a) {
            return wax.u.$(a).appendChild(c.element()), this }, d.init = function() {
            return c = wax.attribution(), c.content(b.attribution), c.element().className = "map-attribution map-g", this }, d.init() }, wax = wax || {}, wax.g = wax.g || {}, wax.g.bwdetect = function(a, b) { b = b || {};
        var c = b.png || ".png128",
            d = b.jpg || ".jpg70";
        if (!a.mapTypes["mb-low"]) {
            for (var e = a.mapTypes.mb, f = { tiles: [], scheme: e.options.scheme, blankImage: e.options.blankImage, minzoom: e.minZoom, maxzoom: e.maxZoom, name: e.name, description: e.description }, g = 0; g < e.options.tiles.length; g++) f.tiles.push(e.options.tiles[g].replace(".png", c).replace(".jpg", d));
            m.mapTypes.set("mb-low", new wax.g.connector(f)) }
        return wax.bwdetect(b, function(b) { a.setMapTypeId(b ? "mb" : "mb-low") }) }, wax = wax || {}, wax.g = wax.g || {}, wax.g.hash = function(a) {
        return wax.hash({ getCenterZoom: function() {
                var b = a.getCenter(),
                    c = a.getZoom(),
                    d = Math.max(0, Math.ceil(Math.log(c) / Math.LN2));
                return [c.toFixed(2), b.lat().toFixed(d), b.lng().toFixed(d)].join("/") }, setCenterZoom: function(b) { a.setCenter(new google.maps.LatLng(b[1], b[2])), a.setZoom(b[0]) }, bindChange: function(b) { google.maps.event.addListener(a, "idle", b) }, unbindChange: function(b) { google.maps.event.removeListener(a, "idle", b) } }) }, wax = wax || {}, wax.g = wax.g || {}, wax.g.interaction = function() {
        function a() { g = !0 }

        function b() {
            if (!g && e && (e.length > 0 || !h)) return e;
            e = [];
            var a = f.getZoom(),
                b = (wax.u.offset(f.getDiv()), function(b) {
                    if (b && b.interactive) { h = !0;
                        for (var c in b.cache)
                            if (c.split("/")[0] == a) {
                                var d = wax.u.offset(b.cache[c]);
                                e.push([d.top, d.left, b.cache[c]]) } } });
            for (var c in f.mapTypes) b(f.mapTypes[c]);
            return f.overlayMapTypes.forEach(b), e }

        function c(b) {
            return arguments.length ? (f = b, i = google.maps.event.addListener(f, "tileloaded", a), void(j = google.maps.event.addListener(f, "idle", a))) : f }

        function d(a) { i && google.maps.event.removeListener(i), j && google.maps.event.removeListener(j) }
        var e, f, g = !1,
            h = !1,
            i = null,
            j = null;
        return wax.interaction().attach(c).detach(d).discardTouchMove(!0).parent(function() {
            return f.getDiv() }).grid(b) };
    var wax = wax || {};
    wax.g = wax.g || {}, wax.g.connector = function(a) { a = a || {}, this.options = { tiles: a.tiles, scheme: a.scheme || "xyz", blankImage: a.blankImage || "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" }, this.opacity = a.opacity || 0, this.minZoom = a.minzoom || 0, this.maxZoom = a.maxzoom || 22, this.name = a.name || "", this.description = a.description || "", this.interactive = !0, this.tileSize = new google.maps.Size(256, 256), this.cache = {} }, wax.g.connector.prototype.getTile = function(a, b, c) {
        var d = b + "/" + a.x + "/" + a.y;
        if (!this.cache[d]) {
            var e = this.cache[d] = new Image(256, 256);
            this.cache[d].src = this.getTileUrl(a, b), this.cache[d].setAttribute("gTileKey", d), this.cache[d].setAttribute("style", "opacity: " + this.opacity + "; filter: alpha(opacity=" + 100 * this.opacity + ");"), this.cache[d].onerror = function() { e.style.display = "none" } }
        return this.cache[d] }, wax.g.connector.prototype.releaseTile = function(a) {
        var b = a.getAttribute("gTileKey");
        this.cache[b] && delete this.cache[b], a.parentNode && a.parentNode.removeChild(a) }, wax.g.connector.prototype.getTileUrl = function(a, b) {
        var c = Math.pow(2, b),
            d = "tms" === this.options.scheme ? c - 1 - a.y : a.y,
            e = a.x % c;
        return e = 0 > e ? a.x % c + c : e, 0 > d ? this.options.blankImage : this.options.tiles[parseInt(e + d, 10) % this.options.tiles.length].replace(/\{z\}/g, b).replace(/\{x\}/g, e).replace(/\{y\}/g, d) };
    var GeoJSON = function(a, b) {
        var c, d = function(a, b, c) {
                var g;
                switch (a.type) {
                    case "Point":
                        b.position = new google.maps.LatLng(a.coordinates[1], a.coordinates[0]), g = new google.maps.Marker(b), c && g.set("geojsonProperties", c);
                        break;
                    case "MultiPoint":
                        g = [];
                        for (var h = 0; h < a.coordinates.length; h++) b.position = new google.maps.LatLng(a.coordinates[h][1], a.coordinates[h][0]), g.push(new google.maps.Marker(b));
                        if (c)
                            for (var i = 0; i < g.length; i++) g[i].set("geojsonProperties", c);
                        break;
                    case "LineString":
                        for (var j = [], h = 0; h < a.coordinates.length; h++) {
                            var k = a.coordinates[h],
                                l = new google.maps.LatLng(k[1], k[0]);
                            j.push(l) }
                        b.path = j, g = new google.maps.Polyline(b), c && g.set("geojsonProperties", c);
                        break;
                    case "MultiLineString":
                        g = [];
                        for (var h = 0; h < a.coordinates.length; h++) {
                            for (var j = [], m = 0; m < a.coordinates[h].length; m++) {
                                var k = a.coordinates[h][m],
                                    l = new google.maps.LatLng(k[1], k[0]);
                                j.push(l) }
                            b.path = j, g.push(new google.maps.Polyline(b)) }
                        if (c)
                            for (var i = 0; i < g.length; i++) g[i].set("geojsonProperties", c);
                        break;
                    case "Polygon":
                        for (var n, o, p = [], h = 0; h < a.coordinates.length; h++) {
                            for (var j = [], m = 0; m < a.coordinates[h].length; m++) {
                                var l = new google.maps.LatLng(a.coordinates[h][m][1], a.coordinates[h][m][0]);
                                j.push(l) }
                            h ? 1 == h ? (o = f(j), n == o ? p.push(j.reverse()) : p.push(j)) : n == o ? p.push(j.reverse()) : p.push(j) : (n = f(j), p.push(j)) }
                        b.paths = p, g = new google.maps.Polygon(b), c && g.set("geojsonProperties", c);
                        break;
                    case "MultiPolygon":
                        g = [];
                        for (var h = 0; h < a.coordinates.length; h++) {
                            for (var n, o, p = [], m = 0; m < a.coordinates[h].length; m++) {
                                for (var j = [], i = 0; i < a.coordinates[h][m].length - 1; i++) {
                                    var l = new google.maps.LatLng(a.coordinates[h][m][i][1], a.coordinates[h][m][i][0]);
                                    j.push(l) }
                                m ? 1 == m ? (o = f(j), n == o ? p.push(j.reverse()) : p.push(j)) : n == o ? p.push(j.reverse()) : p.push(j) : (n = f(j), p.push(j)) }
                            b.paths = p, g.push(new google.maps.Polygon(b)) }
                        if (c)
                            for (var i = 0; i < g.length; i++) g[i].set("geojsonProperties", c);
                        break;
                    case "GeometryCollection":
                        if (g = [], a.geometries)
                            for (var h = 0; h < a.geometries.length; h++) g.push(d(a.geometries[h], b, c || null));
                        else g = e('Invalid GeoJSON object: GeometryCollection object missing "geometries" member.');
                        break;
                    default:
                        g = e('Invalid GeoJSON object: Geometry object must be one of "Point", "LineString", "Polygon" or "MultiPolygon".') }
                return g },
            e = function(a) {
                return { type: "Error", message: a } },
            f = function(a) {
                for (var b, c = 0, d = 0; d < a.length - 2; d++) c += (a[d + 1].lat() - a[d].lat()) * (a[d + 2].lng() - a[d].lng()) - (a[d + 2].lat() - a[d].lat()) * (a[d + 1].lng() - a[d].lng());
                return b = c > 0 ? !0 : !1 },
            g = b || {};
        switch (a.type) {
            case "FeatureCollection":
                if (a.features) { c = [];
                    for (var h = 0; h < a.features.length; h++) c.push(d(a.features[h].geometry, g, a.features[h].properties)) } else c = e('Invalid GeoJSON object: FeatureCollection object missing "features" member.');
                break;
            case "GeometryCollection":
                if (a.geometries) { c = [];
                    for (var h = 0; h < a.geometries.length; h++) c.push(d(a.geometries[h], g)) } else c = e('Invalid GeoJSON object: GeometryCollection object missing "geometries" member.');
                break;
            case "Feature":
                c = a.properties && a.geometry ? d(a.geometry, g, a.properties) : e('Invalid GeoJSON object: Feature object missing "properties" or "geometry" member.');
                break;
            case "Point":
            case "MultiPoint":
            case "LineString":
            case "MultiLineString":
            case "Polygon":
            case "MultiPolygon":
                c = a.coordinates ? c = d(a, g) : e('Invalid GeoJSON object: Geometry object missing "coordinates" member.');
                break;
            default:
                c = e('Invalid GeoJSON object: GeoJSON object must be one of "Point", "LineString", "Polygon", "MultiPolygon", "Feature", "FeatureCollection" or "GeometryCollection".') }
        return c };
    ! function(a, b, c) { a.fn.jScrollPane = function(d) {
            function e(d, e) {
                function f(b) {
                    var e, h, j, l, m, n, q = !1,
                        r = !1;
                    if (P = b, Q === c) m = d.scrollTop(), n = d.scrollLeft(), d.css({ overflow: "hidden", padding: 0 }), R = d.innerWidth() + ta, S = d.innerHeight(), d.width(R), Q = a('<div class="jspPane" />').css("padding", sa).append(d.children()), T = a('<div class="jspContainer" />').css({ width: R + "px", height: S + "px" }).append(Q).appendTo(d);
                    else {
                        if (d.css("width", ""), q = P.stickToBottom && C(), r = P.stickToRight && D(), l = d.innerWidth() + ta != R || d.outerHeight() != S, l && (R = d.innerWidth() + ta, S = d.innerHeight(), T.css({ width: R + "px", height: S + "px" })), !l && ua == U && Q.outerHeight() == V) return void d.width(R);
                        ua = U, Q.css("width", ""), d.width(R), T.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end() }
                    Q.css("overflow", "auto"), U = b.contentWidth ? b.contentWidth : Q[0].scrollWidth, V = Q[0].scrollHeight, Q.css("overflow", ""), W = U / R, X = V / S, Y = X > 1, Z = W > 1, Z || Y ? (d.addClass("jspScrollable"), e = P.maintainPosition && (aa || da), e && (h = A(), j = B()), g(), i(), k(), e && (y(r ? U - R : h, !1), x(q ? V - S : j, !1)), H(), E(), N(), P.enableKeyboardNavigation && J(), P.clickOnTrack && o(), L(), P.hijackInternalLinks && M()) : (d.removeClass("jspScrollable"), Q.css({ top: 0, width: T.width() - ta }), F(), I(), K(), p()), P.autoReinitialise && !ra ? ra = setInterval(function() { f(P) }, P.autoReinitialiseDelay) : !P.autoReinitialise && ra && clearInterval(ra), m && d.scrollTop(0) && x(m, !1), n && d.scrollLeft(0) && y(n, !1), d.trigger("jsp-initialised", [Z || Y]) }

                function g() { Y && (T.append(a('<div class="jspVerticalBar" />').append(a('<div class="jspCap jspCapTop" />'), a('<div class="jspTrack" />').append(a('<div class="jspDrag" />').append(a('<div class="jspDragTop" />'), a('<div class="jspDragBottom" />'))), a('<div class="jspCap jspCapBottom" />'))), ea = T.find(">.jspVerticalBar"), fa = ea.find(">.jspTrack"), $ = fa.find(">.jspDrag"), P.showArrows && (ja = a('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp", m(0, -1)).bind("click.jsp", G), ka = a('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp", m(0, 1)).bind("click.jsp", G), P.arrowScrollOnHover && (ja.bind("mouseover.jsp", m(0, -1, ja)), ka.bind("mouseover.jsp", m(0, 1, ka))), l(fa, P.verticalArrowPositions, ja, ka)), ha = S, T.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function() { ha -= a(this).outerHeight() }), $.hover(function() { $.addClass("jspHover") }, function() { $.removeClass("jspHover") }).bind("mousedown.jsp", function(b) { a("html").bind("dragstart.jsp selectstart.jsp", G), $.addClass("jspActive");
                        var c = b.pageY - $.position().top;
                        return a("html").bind("mousemove.jsp", function(a) { r(a.pageY - c, !1) }).bind("mouseup.jsp mouseleave.jsp", q), !1 }), h()) }

                function h() { fa.height(ha + "px"), aa = 0, ga = P.verticalGutter + fa.outerWidth(), Q.width(R - ga - ta);
                    try { 0 === ea.position().left && Q.css("margin-left", ga + "px") } catch (a) {} }

                function i() { Z && (T.append(a('<div class="jspHorizontalBar" />').append(a('<div class="jspCap jspCapLeft" />'), a('<div class="jspTrack" />').append(a('<div class="jspDrag" />').append(a('<div class="jspDragLeft" />'), a('<div class="jspDragRight" />'))), a('<div class="jspCap jspCapRight" />'))), la = T.find(">.jspHorizontalBar"), ma = la.find(">.jspTrack"), ba = ma.find(">.jspDrag"), P.showArrows && (pa = a('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp", m(-1, 0)).bind("click.jsp", G), qa = a('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp", m(1, 0)).bind("click.jsp", G), P.arrowScrollOnHover && (pa.bind("mouseover.jsp", m(-1, 0, pa)), qa.bind("mouseover.jsp", m(1, 0, qa))), l(ma, P.horizontalArrowPositions, pa, qa)), ba.hover(function() { ba.addClass("jspHover") }, function() { ba.removeClass("jspHover") }).bind("mousedown.jsp", function(b) { a("html").bind("dragstart.jsp selectstart.jsp", G), ba.addClass("jspActive");
                        var c = b.pageX - ba.position().left;
                        return a("html").bind("mousemove.jsp", function(a) { t(a.pageX - c, !1) }).bind("mouseup.jsp mouseleave.jsp", q), !1 }), na = T.innerWidth(), j()) }

                function j() { T.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function() { na -= a(this).outerWidth() }), ma.width(na + "px"), da = 0 }

                function k() {
                    if (Z && Y) {
                        var b = ma.outerHeight(),
                            c = fa.outerWidth();
                        ha -= b, a(la).find(">.jspCap:visible,>.jspArrow").each(function() { na += a(this).outerWidth() }), na -= c, S -= c, R -= b, ma.parent().append(a('<div class="jspCorner" />').css("width", b + "px")), h(), j() }
                    Z && Q.width(T.outerWidth() - ta + "px"), V = Q.outerHeight(), X = V / S, Z && (oa = Math.ceil(1 / W * na), oa > P.horizontalDragMaxWidth ? oa = P.horizontalDragMaxWidth : oa < P.horizontalDragMinWidth && (oa = P.horizontalDragMinWidth), ba.width(oa + "px"), ca = na - oa, u(da)), Y && (ia = Math.ceil(1 / X * ha), ia > P.verticalDragMaxHeight ? ia = P.verticalDragMaxHeight : ia < P.verticalDragMinHeight && (ia = P.verticalDragMinHeight), $.height(ia + "px"), _ = ha - ia, s(aa)) }

                function l(a, b, c, d) {
                    var e, f = "before",
                        g = "after"; "os" == b && (b = /Mac/.test(navigator.platform) ? "after" : "split"), b == f ? g = b : b == g && (f = b, e = c, c = d, d = e), a[f](c)[g](d) }

                function m(a, b, c) {
                    return function() {
                        return n(a, b, this, c), this.blur(), !1 } }

                function n(b, c, d, e) { d = a(d).addClass("jspActive");
                    var f, g, h = !0,
                        i = function() { 0 !== b && va.scrollByX(b * P.arrowButtonSpeed), 0 !== c && va.scrollByY(c * P.arrowButtonSpeed), g = setTimeout(i, h ? P.initialDelay : P.arrowRepeatFreq), h = !1 };
                    i(), f = e ? "mouseout.jsp" : "mouseup.jsp", e = e || a("html"), e.bind(f, function() { d.removeClass("jspActive"), g && clearTimeout(g), g = null, e.unbind(f) }) }

                function o() { p(), Y && fa.bind("mousedown.jsp", function(b) {
                        if (b.originalTarget === c || b.originalTarget == b.currentTarget) {
                            var d, e = a(this),
                                f = e.offset(),
                                g = b.pageY - f.top - aa,
                                h = !0,
                                i = function() {
                                    var a = e.offset(),
                                        c = b.pageY - a.top - ia / 2,
                                        f = S * P.scrollPagePercent,
                                        k = _ * f / (V - S);
                                    if (0 > g) aa - k > c ? va.scrollByY(-f) : r(c);
                                    else {
                                        if (!(g > 0)) return void j();
                                        c > aa + k ? va.scrollByY(f) : r(c) }
                                    d = setTimeout(i, h ? P.initialDelay : P.trackClickRepeatFreq), h = !1 },
                                j = function() { d && clearTimeout(d), d = null, a(document).unbind("mouseup.jsp", j) };
                            return i(), a(document).bind("mouseup.jsp", j), !1 } }), Z && ma.bind("mousedown.jsp", function(b) {
                        if (b.originalTarget === c || b.originalTarget == b.currentTarget) {
                            var d, e = a(this),
                                f = e.offset(),
                                g = b.pageX - f.left - da,
                                h = !0,
                                i = function() {
                                    var a = e.offset(),
                                        c = b.pageX - a.left - oa / 2,
                                        f = R * P.scrollPagePercent,
                                        k = ca * f / (U - R);
                                    if (0 > g) da - k > c ? va.scrollByX(-f) : t(c);
                                    else {
                                        if (!(g > 0)) return void j();
                                        c > da + k ? va.scrollByX(f) : t(c) }
                                    d = setTimeout(i, h ? P.initialDelay : P.trackClickRepeatFreq), h = !1 },
                                j = function() { d && clearTimeout(d), d = null, a(document).unbind("mouseup.jsp", j) };
                            return i(), a(document).bind("mouseup.jsp", j), !1 } }) }

                function p() { ma && ma.unbind("mousedown.jsp"), fa && fa.unbind("mousedown.jsp") }

                function q() { a("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"), $ && $.removeClass("jspActive"), ba && ba.removeClass("jspActive") }

                function r(a, b) { Y && (0 > a ? a = 0 : a > _ && (a = _), b === c && (b = P.animateScroll), b ? va.animate($, "top", a, s) : ($.css("top", a), s(a))) }

                function s(a) { a === c && (a = $.position().top), T.scrollTop(0), aa = a;
                    var b = 0 === aa,
                        e = aa == _,
                        f = a / _,
                        g = -f * (V - S);
                    (wa != b || ya != e) && (wa = b, ya = e, d.trigger("jsp-arrow-change", [wa, ya, xa, za])), v(b, e), Q.css("top", g), d.trigger("jsp-scroll-y", [-g, b, e]).trigger("scroll") }

                function t(a, b) { Z && (0 > a ? a = 0 : a > ca && (a = ca), b === c && (b = P.animateScroll), b ? va.animate(ba, "left", a, u) : (ba.css("left", a), u(a))) }

                function u(a) { a === c && (a = ba.position().left), T.scrollTop(0), da = a;
                    var b = 0 === da,
                        e = da == ca,
                        f = a / ca,
                        g = -f * (U - R);
                    (xa != b || za != e) && (xa = b, za = e, d.trigger("jsp-arrow-change", [wa, ya, xa, za])), w(b, e), Q.css("left", g), d.trigger("jsp-scroll-x", [-g, b, e]).trigger("scroll") }

                function v(a, b) { P.showArrows && (ja[a ? "addClass" : "removeClass"]("jspDisabled"), ka[b ? "addClass" : "removeClass"]("jspDisabled")) }

                function w(a, b) { P.showArrows && (pa[a ? "addClass" : "removeClass"]("jspDisabled"), qa[b ? "addClass" : "removeClass"]("jspDisabled")) }

                function x(a, b) {
                    var c = a / (V - S);
                    r(c * _, b) }

                function y(a, b) {
                    var c = a / (U - R);
                    t(c * ca, b) }

                function z(b, c, d) {
                    var e, f, g, h, i, j, k, l, m, n = 0,
                        o = 0;
                    try { e = a(b) } catch (p) {
                        return }
                    for (f = e.outerHeight(), g = e.outerWidth(), T.scrollTop(0), T.scrollLeft(0); !e.is(".jspPane");)
                        if (n += e.position().top, o += e.position().left, e = e.offsetParent(), /^body|html$/i.test(e[0].nodeName)) return;
                    h = B(), j = h + S, h > n || c ? l = n - P.verticalGutter : n + f > j && (l = n - S + f + P.verticalGutter), l && x(l, d), i = A(), k = i + R, i > o || c ? m = o - P.horizontalGutter : o + g > k && (m = o - R + g + P.horizontalGutter), m && y(m, d) }

                function A() {
                    return -Q.position().left }

                function B() {
                    return -Q.position().top }

                function C() {
                    var a = V - S;
                    return a > 20 && a - B() < 10 }

                function D() {
                    var a = U - R;
                    return a > 20 && a - A() < 10 }

                function E() { T.unbind(Ba).bind(Ba, function(a, b, c, d) {
                        var e = da,
                            f = aa;
                        return va.scrollBy(c * P.mouseWheelSpeed, -d * P.mouseWheelSpeed, !1), e == da && f == aa }) }

                function F() { T.unbind(Ba) }

                function G() {
                    return !1 }

                function H() { Q.find(":input,a").unbind("focus.jsp").bind("focus.jsp", function(a) { z(a.target, !1) }) }

                function I() { Q.find(":input,a").unbind("focus.jsp") }

                function J() {
                    function b() {
                        var a = da,
                            b = aa;
                        switch (c) {
                            case 40:
                                va.scrollByY(P.keyboardSpeed, !1);
                                break;
                            case 38:
                                va.scrollByY(-P.keyboardSpeed, !1);
                                break;
                            case 34:
                            case 32:
                                va.scrollByY(S * P.scrollPagePercent, !1);
                                break;
                            case 33:
                                va.scrollByY(-S * P.scrollPagePercent, !1);
                                break;
                            case 39:
                                va.scrollByX(P.keyboardSpeed, !1);
                                break;
                            case 37:
                                va.scrollByX(-P.keyboardSpeed, !1) }
                        return e = a != da || b != aa }
                    var c, e, f = [];
                    Z && f.push(la[0]), Y && f.push(ea[0]), Q.focus(function() { d.focus() }), d.attr("tabindex", 0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp", function(d) {
                        if (d.target === this || f.length && a(d.target).closest(f).length) {
                            var g = da,
                                h = aa;
                            switch (d.keyCode) {
                                case 40:
                                case 38:
                                case 34:
                                case 32:
                                case 33:
                                case 39:
                                case 37:
                                    c = d.keyCode, b();
                                    break;
                                case 35:
                                    x(V - S), c = null;
                                    break;
                                case 36:
                                    x(0), c = null }
                            return e = d.keyCode == c && g != da || h != aa, !e } }).bind("keypress.jsp", function(a) {
                        return a.keyCode == c && b(), !e }), P.hideFocus ? (d.css("outline", "none"), "hideFocus" in T[0] && d.attr("hideFocus", !0)) : (d.css("outline", ""), "hideFocus" in T[0] && d.attr("hideFocus", !1)) }

                function K() { d.attr("tabindex", "-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp") }

                function L() {
                    if (location.hash && location.hash.length > 1) {
                        var b, c, d = escape(location.hash.substr(1));
                        try { b = a("#" + d + ', a[name="' + d + '"]') } catch (e) {
                            return }
                        b.length && Q.find(d) && (0 === T.scrollTop() ? c = setInterval(function() { T.scrollTop() > 0 && (z(b, !0), a(document).scrollTop(T.position().top), clearInterval(c)) }, 50) : (z(b, !0), a(document).scrollTop(T.position().top))) } }

                function M() { a(document.body).data("jspHijack") || (a(document.body).data("jspHijack", !0), a(document.body).delegate("a[href*=#]", "click", function(c) {
                        var d, e, f, g, h, i, j = this.href.substr(0, this.href.indexOf("#")),
                            k = location.href;
                        if (-1 !== location.href.indexOf("#") && (k = location.href.substr(0, location.href.indexOf("#"))), j === k) { d = escape(this.href.substr(this.href.indexOf("#") + 1));
                            try { e = a("#" + d + ', a[name="' + d + '"]') } catch (l) {
                                return }
                            e.length && (f = e.closest(".jspScrollable"), g = f.data("jsp"), g.scrollToElement(e, !0), f[0].scrollIntoView && (h = a(b).scrollTop(), i = e.offset().top, (h > i || i > h + a(b).height()) && f[0].scrollIntoView()), c.preventDefault()) } })) }

                function N() {
                    var a, b, c, d, e, f = !1;
                    T.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp", function(g) {
                        var h = g.originalEvent.touches[0];
                        a = A(), b = B(), c = h.pageX, d = h.pageY, e = !1, f = !0 }).bind("touchmove.jsp", function(g) {
                        if (f) {
                            var h = g.originalEvent.touches[0],
                                i = da,
                                j = aa;
                            return va.scrollTo(a + c - h.pageX, b + d - h.pageY), e = e || Math.abs(c - h.pageX) > 5 || Math.abs(d - h.pageY) > 5, i == da && j == aa } }).bind("touchend.jsp", function(a) { f = !1 }).bind("click.jsp-touchclick", function(a) {
                        return e ? (e = !1, !1) : void 0 }) }

                function O() {
                    var a = B(),
                        b = A();
                    d.removeClass("jspScrollable").unbind(".jsp"), d.replaceWith(Aa.append(Q.children())), Aa.scrollTop(a), Aa.scrollLeft(b), ra && clearInterval(ra) }
                var P, Q, R, S, T, U, V, W, X, Y, Z, $, _, aa, ba, ca, da, ea, fa, ga, ha, ia, ja, ka, la, ma, na, oa, pa, qa, ra, sa, ta, ua, va = this,
                    wa = !0,
                    xa = !0,
                    ya = !1,
                    za = !1,
                    Aa = d.clone(!1, !1).empty(),
                    Ba = a.fn.mwheelIntent ? "mwheelIntent.jsp" : "mousewheel.jsp";
                sa = d.css("paddingTop") + " " + d.css("paddingRight") + " " + d.css("paddingBottom") + " " + d.css("paddingLeft"), ta = (parseInt(d.css("paddingLeft"), 10) || 0) + (parseInt(d.css("paddingRight"), 10) || 0), a.extend(va, { reinitialise: function(b) { b = a.extend({}, P, b), f(b) }, scrollToElement: function(a, b, c) { z(a, b, c) }, scrollTo: function(a, b, c) { y(a, c), x(b, c) }, scrollToX: function(a, b) { y(a, b) }, scrollToY: function(a, b) { x(a, b) }, scrollToPercentX: function(a, b) { y(a * (U - R), b) }, scrollToPercentY: function(a, b) { x(a * (V - S), b) }, scrollBy: function(a, b, c) { va.scrollByX(a, c), va.scrollByY(b, c) }, scrollByX: function(a, b) {
                        var c = A() + Math[0 > a ? "floor" : "ceil"](a),
                            d = c / (U - R);
                        t(d * ca, b) }, scrollByY: function(a, b) {
                        var c = B() + Math[0 > a ? "floor" : "ceil"](a),
                            d = c / (V - S);
                        r(d * _, b) }, positionDragX: function(a, b) { t(a, b) }, positionDragY: function(a, b) { r(a, b) }, animate: function(a, b, c, d) {
                        var e = {};
                        e[b] = c, a.animate(e, { duration: P.animateDuration, easing: P.animateEase, queue: !1, step: d }) }, getContentPositionX: function() {
                        return A() }, getContentPositionY: function() {
                        return B() }, getContentWidth: function() {
                        return U }, getContentHeight: function() {
                        return V }, getPercentScrolledX: function() {
                        return A() / (U - R) }, getPercentScrolledY: function() {
                        return B() / (V - S) }, getIsScrollableH: function() {
                        return Z }, getIsScrollableV: function() {
                        return Y }, getContentPane: function() {
                        return Q }, scrollToBottom: function(a) { r(_, a) }, hijackInternalLinks: a.noop, destroy: function() { O() } }), f(e) }
            return d = a.extend({}, a.fn.jScrollPane.defaults, d), a.each(["mouseWheelSpeed", "arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed"], function() { d[this] = d[this] || d.speed }), this.each(function() {
                var b = a(this),
                    c = b.data("jsp");
                c ? c.reinitialise(d) : (a("script", b).filter('[type="text/javascript"],:not([type])').remove(), c = new e(b, d), b.data("jsp", c)) }) }, a.fn.jScrollPane.defaults = { showArrows: !1, maintainPosition: !0, stickToBottom: !1, stickToRight: !1, clickOnTrack: !0, autoReinitialise: !1, autoReinitialiseDelay: 500, verticalDragMinHeight: 0, verticalDragMaxHeight: 99999, horizontalDragMinWidth: 0, horizontalDragMaxWidth: 99999, contentWidth: c, animateScroll: !1, animateDuration: 300, animateEase: "linear", hijackInternalLinks: !1, verticalGutter: 4, horizontalGutter: 4, mouseWheelSpeed: 0, arrowButtonSpeed: 0, arrowRepeatFreq: 50, arrowScrollOnHover: !1, trackClickSpeed: 0, trackClickRepeatFreq: 70, verticalArrowPositions: "split", horizontalArrowPositions: "split", enableKeyboardNavigation: !0, hideFocus: !1, keyboardSpeed: 0, initialDelay: 300, speed: 30, scrollPagePercent: .8 } }(jQuery, this),
    function(a) {
        function b(b) {
            var c = b || window.event,
                d = [].slice.call(arguments, 1),
                e = 0,
                f = 0,
                g = 0;
            return b = a.event.fix(c), b.type = "mousewheel", c.wheelDelta && (e = c.wheelDelta / 120), c.detail && (e = -c.detail / 3), g = e, void 0 !== c.axis && c.axis === c.HORIZONTAL_AXIS && (g = 0, f = -1 * e), void 0 !== c.wheelDeltaY && (g = c.wheelDeltaY / 120), void 0 !== c.wheelDeltaX && (f = -1 * c.wheelDeltaX / 120), d.unshift(b, e, f, g), (a.event.dispatch || a.event.handle).apply(this, d) }
        var c = ["DOMMouseScroll", "mousewheel"];
        if (a.event.fixHooks)
            for (var d = c.length; d;) a.event.fixHooks[c[--d]] = a.event.mouseHooks;
        a.event.special.mousewheel = { setup: function() {
                if (this.addEventListener)
                    for (var a = c.length; a;) this.addEventListener(c[--a], b, !1);
                else this.onmousewheel = b }, teardown: function() {
                if (this.removeEventListener)
                    for (var a = c.length; a;) this.removeEventListener(c[--a], b, !1);
                else this.onmousewheel = null } }, a.fn.extend({ mousewheel: function(a) {
                return a ? this.bind("mousewheel", a) : this.trigger("mousewheel") }, unmousewheel: function(a) {
                return this.unbind("mousewheel", a) } }) }(jQuery),
    function(a) {
        function b() { this === e.elem && (e.pos = [-260, -260], e.elem = !1, f = 3) }
        var c, d, e = { pos: [-260, -260] },
            f = 3,
            g = document,
            h = g.documentElement,
            i = g.body;
        a.event.special.mwheelIntent = { setup: function() {
                var c = a(this).bind("mousewheel", a.event.special.mwheelIntent.handler);
                return this !== g && this !== h && this !== i && c.bind("mouseleave", b), c = null, !0 }, teardown: function() {
                return a(this).unbind("mousewheel", a.event.special.mwheelIntent.handler).unbind("mouseleave", b), !0 }, handler: function(b, g) {
                var h = [b.clientX, b.clientY];
                return this === e.elem || Math.abs(e.pos[0] - h[0]) > f || Math.abs(e.pos[1] - h[1]) > f ? (e.elem = this, e.pos = h, f = 250, clearTimeout(d), d = setTimeout(function() { f = 10 }, 200), clearTimeout(c), c = setTimeout(function() { f = 3 }, 1500), b = a.extend({}, b, { type: "mwheelIntent" }), (a.event.dispatch || a.event.handle).apply(this, arguments)) : void 0 } }, a.fn.extend({ mwheelIntent: function(a) {
                return a ? this.bind("mwheelIntent", a) : this.trigger("mwheelIntent") }, unmwheelIntent: function(a) {
                return this.unbind("mwheelIntent", a) } }), a(function() { i = g.body, a(g).bind("mwheelIntent.mwheelIntentDefault", a.noop) }) }(jQuery),
    function(a, b, c) {
        function d(a, c) {
            var d, e = b.createElement(a || "div");
            for (d in c) e[d] = c[d];
            return e }

        function e(a) {
            for (var b = 1, c = arguments.length; c > b; b++) a.appendChild(arguments[b]);
            return a }

        function f(a, b, c, d) {
            var e = ["opacity", b, ~~(100 * a), c, d].join("-"),
                f = .01 + c / d * 100,
                g = Math.max(1 - (1 - a) / b * (100 - f), a),
                h = k.substring(0, k.indexOf("Animation")).toLowerCase(),
                i = h && "-" + h + "-" || "";
            return m[e] || (n.insertRule("@" + i + "keyframes " + e + "{0%{opacity:" + g + "}" + f + "%{opacity:" + a + "}" + (f + .01) + "%{opacity:1}" + (f + b) % 100 + "%{opacity:" + a + "}100%{opacity:" + g + "}}", 0), m[e] = 1), e }

        function g(a, b) {
            var d, e, f = a.style;
            if (f[b] !== c) return b;
            for (b = b.charAt(0).toUpperCase() + b.slice(1), e = 0; e < l.length; e++)
                if (d = l[e] + b, f[d] !== c) return d }

        function h(a, b) {
            for (var c in b) a.style[g(a, c) || c] = b[c];
            return a }

        function i(a) {
            for (var b = 1; b < arguments.length; b++) {
                var d = arguments[b];
                for (var e in d) a[e] === c && (a[e] = d[e]) }
            return a }

        function j(a) {
            for (var b = { x: a.offsetLeft, y: a.offsetTop }; a = a.offsetParent;) b.x += a.offsetLeft, b.y += a.offsetTop;
            return b }
        var k, l = ["webkit", "Moz", "ms", "O"],
            m = {},
            n = function() {
                var a = d("style");
                return e(b.getElementsByTagName("head")[0], a), a.sheet || a.styleSheet }(),
            o = { lines: 12, length: 7, width: 5, radius: 10, rotate: 0, color: "#000", speed: 1, trail: 100, opacity: .25, fps: 20, zIndex: 2e9, className: "spinner", top: "auto", left: "auto" },
            p = function q(a) {
                return this.spin ? void(this.opts = i(a || {}, q.defaults, o)) : new q(a) };
        p.defaults = {}, i(p.prototype, {
            spin: function(a) { this.stop();
                var b, c, e = this,
                    f = e.opts,
                    g = e.el = h(d(0, { className: f.className }), { position: "relative", zIndex: f.zIndex }),
                    i = f.radius + f.length + f.width;
                if (a && (a.insertBefore(g, a.firstChild || null), c = j(a), b = j(g), h(g, { left: ("auto" == f.left ? c.x - b.x + (a.offsetWidth >> 1) : f.left + i) + "px", top: ("auto" == f.top ? c.y - b.y + (a.offsetHeight >> 1) : f.top + i) + "px" })), g.setAttribute("aria-role", "progressbar"), e.lines(g, e.opts), !k) {
                    var l = 0,
                        m = f.fps,
                        n = m / f.speed,
                        o = (1 - f.opacity) / (n * f.trail / 100),
                        p = n / f.lines;! function q() { l++;
                        for (var a = f.lines; a; a--) {
                            var b = Math.max(1 - (l + a * p) % n * o, f.opacity);
                            e.opacity(g, f.lines - a, b, f) }
                        e.timeout = e.el && setTimeout(q, ~~(1e3 / m)) }() }
                return e },
            stop: function() {
                var a = this.el;
                return a && (clearTimeout(this.timeout), a.parentNode && a.parentNode.removeChild(a), this.el = c), this },
            lines: function(a, b) {
                function c(a, c) {
                    return h(d(), { position: "absolute", width: b.length + b.width + "px", height: b.width + "px", background: a, boxShadow: c, transformOrigin: "left", transform: "rotate(" + ~~(360 / b.lines * i + b.rotate) + "deg) translate(" + b.radius + "px,0)", borderRadius: (b.width >> 1) + "px" }) }
                for (var g, i = 0; i < b.lines; i++) g = h(d(), { position: "absolute", top: 1 + ~(b.width / 2) + "px", transform: b.hwaccel ? "translate3d(0,0,0)" : "", opacity: b.opacity, animation: k && f(b.opacity, b.trail, i, b.lines) + " " + 1 / b.speed + "s linear infinite" }), b.shadow && e(g, h(c("#000", "0 0 4px #000"), { top: "2px" })), e(a, e(g, c(b.color, "0 0 1px rgba(0,0,0,.1)")));
                return a },
            opacity: function(a, b, c) {
                b < a.childNodes.length && (a.childNodes[b].style.opacity = c);
            }
        }), ! function() {
            function a(a, b) {
                return d("<" + a + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', b) }
            var b = h(d("group"), { behavior: "url(#default#VML)" });!g(b, "transform") && b.adj ? (n.addRule(".spin-vml", "behavior:url(#default#VML)"), p.prototype.lines = function(b, c) {
                function d() {
                    return h(a("group", { coordsize: j + " " + j, coordorigin: -i + " " + -i }), { width: j, height: j }) }

                function f(b, f, g) { e(l, e(h(d(), { rotation: 360 / c.lines * b + "deg", left: ~~f }), e(h(a("roundrect", { arcsize: 1 }), { width: i, height: c.width, left: c.radius, top: -c.width >> 1, filter: g }), a("fill", { color: c.color, opacity: c.opacity }), a("stroke", { opacity: 0 })))) }
                var g, i = c.length + c.width,
                    j = 2 * i,
                    k = 2 * -(c.width + c.length) + "px",
                    l = h(d(), { position: "absolute", top: k, left: k });
                if (c.shadow)
                    for (g = 1; g <= c.lines; g++) f(g, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
                for (g = 1; g <= c.lines; g++) f(g);
                return e(b, l) }, p.prototype.opacity = function(a, b, c, d) {
                var e = a.firstChild;
                d = d.shadow && d.lines || 0, e && b + d < e.childNodes.length && (e = e.childNodes[b + d], e = e && e.firstChild, e = e && e.firstChild, e && (e.opacity = c)) }) : k = g(b, "animation") }(), a.Spinner = p
    }(window, document);
    var LZMA = function() {
        function a(a, b) { postMessage({ action: 3, callback_num: b, result: a }) }

        function b() {
            return Ye }

        function c() {}

        function d() {
            return Ze }

        function e() {}

        function f() {
            return $e }

        function g() {}

        function h(a, b) {
            return a.detailMessage = b, a }

        function i() {
            return _e }

        function j() {}

        function k(a, b) {
            return a }

        function l() {
            return af }

        function m() {}

        function n(a, b) { a[a.explicitLength++] = b }

        function o(a, b) { a[a.explicitLength++] = b }

        function p(a) {
            var b, c;
            return c = a.join(""), a.length = a.explicitLength = 0, b = c, a[a.explicitLength++] = b, b }

        function q(a, b) {
            var c = new Array(b);
            if (a > 0)
                for (var d = [null, 0, !1, [0, 0]][a], e = 0; b > e; ++e) c[e] = d;
            return c }

        function r() {
            return this.arrayClass$ }

        function s(a, b, c, d, e) {
            var f;
            return f = q(e, d), w(), y(f, Je, Ke), f.arrayClass$ = a, f.typeId$ = b, f.queryId$ = c, f }

        function t(a, b, c, d) {
            return w(), y(d, Je, Ke), d.arrayClass$ = a, d.typeId$ = b, d.queryId$ = c, d }

        function u(a, b, c) {
            if (null != c) {
                if (a.queryId$ > 0 && !A(c.typeId$, a.queryId$)) throw new Ba;
                if (a.queryId$ < 0 && (c.typeMarker$ == se || 2 == c.typeId$)) throw new Ba }
            return a[b] = c }

        function v() {}

        function w() { w = se, Je = [], Ke = [], x(new v, Je, Ke) }

        function x(a, b, c) {
            var d, e = 0;
            for (var f in a)(d = a[f]) && (b[e] = f, c[e] = d, ++e) }

        function y(a, b, c) { w();
            for (var d = 0, e = b.length; e > d; ++d) a[b[d]] = c[d] }

        function z(a, b) {
            return a && !!Ue[a][b] }

        function A(a, b) {
            return a && Ue[a][b] }

        function B(a, b) {
            if (null != a && !A(a.typeId$, b)) throw new Ia;
            return a }

        function C(a, b) {
            return null != a && z(a.typeId$, b) }

        function D(a) {
            return ~~Math.max(Math.min(a, 2147483647), -2147483648) }

        function E(a) {
            return null != a && z(a.typeId$, 2) ? a : k(new m, a) }

        function F(a, b) {
            var c, d;
            return c = a[1] + b[1], d = a[0] + b[0], J(d, c) }

        function G(a, b, c) {
            return 0 == b ? a : 0 == c ? a : F(a, J(b * c, 0)) }

        function H(a, b) {
            return Q(~~Math.max(Math.min(a[1] / 4294967296, 2147483647), -2147483648) & ~~Math.max(Math.min(b[1] / 4294967296, 2147483647), -2147483648), P(a) & P(b)) }

        function I(a, b) {
            var c, d;
            return a[0] == b[0] && a[1] == b[1] ? 0 : (c = a[1] < 0, d = b[1] < 0, c && !d ? -1 : !c && d ? 1 : Y(a, b)[1] < 0 ? -1 : 1) }

        function J(a, b) {
            var c, d;
            for (b %= 0x10000000000000000, a %= 0x10000000000000000, c = b % 4294967296, d = 4294967296 * Math.floor(a / 4294967296), b = b - c + d, a = a - d + c; 0 > a;) a += 4294967296, b -= 4294967296;
            for (; a > 4294967295;) a -= 4294967296, b += 4294967296;
            for (b %= 0x10000000000000000; b > 0x7fffffff00000000;) b -= 0x10000000000000000;
            for (; - 0x8000000000000000 > b;) b += 0x10000000000000000;
            return [a, b] }

        function K(a, b) {
            var c, d, e, f, g, h;
            if (0 == b[0] && 0 == b[1]) throw wa(new ya, "/ by zero");
            if (0 == a[0] && 0 == a[1]) return ba(), Te;
            if (L(a, (ba(), Oe))) return L(b, Qe) || L(b, Pe) ? Oe : (f = W(a, 1), c = V(K(f, b), 1), g = Y(a, R(b, c)), F(c, K(g, b)));
            if (L(b, Oe)) return Te;
            if (a[1] < 0) return b[1] < 0 ? K(T(a), T(b)) : T(K(T(a), b));
            if (b[1] < 0) return T(K(a, T(b)));
            for (h = Te, g = a; I(g, b) >= 0;) e = M(Math.floor(Z(g) / $(b))), 0 == e[0] && 0 == e[1] && (e = Qe), d = R(e, b), h = F(h, e), g = Y(g, d);
            return h }

        function L(a, b) {
            return a[0] == b[0] && a[1] == b[1] }

        function M(a) {
            return isNaN(a) ? (ba(), Te) : -0x8000000000000000 > a ? (ba(), Oe) : a >= 0x8000000000000000 ? (ba(), Ne) : a > 0 ? J(Math.floor(a), 0) : J(Math.ceil(a), 0) }

        function N(a) {
            var b, c;
            return a > -129 && 128 > a ? (b = a + 128, c = (aa(), Le)[b], null == c && (c = Le[b] = O(a)), c) : O(a) }

        function O(a) {
            return a >= 0 ? [a, 0] : [a + 4294967296, -4294967296] }

        function P(a) {
            return a[0] >= 2147483648 ? ~~Math.max(Math.min(a[0] - 4294967296, 2147483647), -2147483648) : ~~Math.max(Math.min(a[0], 2147483647), -2147483648) }

        function Q(a, b) {
            var c, d;
            return c = 4294967296 * a, d = b, 0 > b && (d += 4294967296), [d, c] }

        function R(a, b) {
            var c, d, e, f, g, h, i, j, k;
            return 0 == a[0] && 0 == a[1] ? (ba(), Te) : 0 == b[0] && 0 == b[1] ? (ba(), Te) : L(a, (ba(), Oe)) ? S(b) : L(b, Oe) ? S(a) : a[1] < 0 ? b[1] < 0 ? R(T(a), T(b)) : T(R(T(a), b)) : b[1] < 0 ? T(R(a, T(b))) : I(a, Se) < 0 && I(b, Se) < 0 ? J((a[1] + a[0]) * (b[1] + b[0]), 0) : (e = a[1] % 281474976710656, f = a[1] - e, c = a[0] % 65536, d = a[0] - c, i = b[1] % 281474976710656, j = b[1] - i, g = b[0] % 65536, h = b[0] - g, k = Te, k = G(k, f, g), k = G(k, e, h), k = G(k, e, g), k = G(k, d, i), k = G(k, d, h), k = G(k, d, g), k = G(k, c, j), k = G(k, c, i), k = G(k, c, h), k = G(k, c, g)) }

        function S(a) {
            return 1 == (1 & P(a)) ? (ba(), Oe) : (ba(), Te) }

        function T(a) {
            var b, c;
            return L(a, (ba(), Oe)) ? Oe : (b = -a[1], c = -a[0], c > 4294967295 && (c -= 4294967296, b += 4294967296), 0 > c && (c += 4294967296, b -= 4294967296), [c, b]) }

        function U(a) {
            return 30 >= a ? 1 << a : U(30) * U(a - 30) }

        function V(a, b) {
            var c, d, e, f;
            return b &= 63, L(a, (ba(), Oe)) ? 0 == b ? a : Te : a[1] < 0 ? T(V(T(a), b)) : (f = U(b), d = a[1] * f % 0x10000000000000000, e = a[0] * f, c = e - e % 4294967296, d += c, e -= c, d >= 0x8000000000000000 && (d -= 0x10000000000000000), [e, d]) }

        function W(a, b) {
            var c, d, e;
            return b &= 63, e = U(b), c = a[1] / e, d = Math.floor(a[0] / e), J(d, c) }

        function X(a, b) {
            var c;
            return b &= 63, c = W(a, b), a[1] < 0 && (c = F(c, V((ba(), Re), 63 - b))), c }

        function Y(a, b) {
            var c, d;
            return c = a[1] - b[1], d = a[0] - b[0], J(d, c) }

        function Z(a) {
            var b, c, d;
            return c = D(Math.log(a[1]) / (ba(), Me)), 48 >= c ? a[1] + a[0] : (b = c - 48, d = (1 << b) - 1, a[1] + (a[0] - d)) }

        function $(a) {
            var b, c, d;
            return c = D(Math.log(a[1]) / (ba(), Me)), 48 >= c ? a[1] + a[0] : (b = c - 48, d = (1 << b) - 1, a[1] + (a[0] + d)) }

        function _(a) {
            var b, c, d, e, f, g;
            if (0 == a[0] && 0 == a[1]) return "0";
            if (L(a, (ba(), Oe))) return "-9223372036854775808";
            if (a[1] < 0) return "-" + _(T(a));
            for (c = a, e = ""; 0 != c[0] || 0 != c[1];) {
                if (f = N(1e9), d = K(c, f), b = "" + P(Y(c, R(d, f))), c = d, 0 != c[0] || 0 != c[1])
                    for (g = 9 - b.length; g > 0; --g) b = "0" + b;
                e = b + e }
            return e }

        function aa() { aa = se, Le = s(cf, 0, 9, 256, 0) }

        function ba() { ba = se, Me = Math.log(2), Ne = Ie, Oe = ye, Pe = N(-1), Qe = N(1), Re = N(2), Se = Fe, Te = N(0) }

        function ca() {
            return df }

        function da() {}

        function ea(a, b) {
            return fa(a, b, 0, b.length), a }

        function fa(a, b, c, d) {
            return a.buf = b, a.pos = c, a.count = c + d, a.count > b.length && (a.count = b.length), a }

        function ga(a) {
            return a.pos >= a.count ? -1 : 255 & a.buf[a.pos++] }

        function ha(a, b, c, d) {
            return a.pos >= a.count ? -1 : (d = Ta(d, a.count - a.pos), ab(a.buf, a.pos, b, c, d), a.pos += d, d) }

        function ia() {
            return ef }

        function ja() {}

        function ka() {
            return gf }

        function la() {}

        function ma(a) {
            return a.buf = s(ff, 0, -1, 32, 1), a }

        function na(a, b) {
            var c;
            b <= a.buf.length || (b = Sa(b, 2 * a.buf.length), c = s(ff, 0, -1, b, 1), ab(a.buf, 0, c, 0, a.buf.length), a.buf = c) }

        function oa(a) {
            var b;
            return b = s(ff, 0, -1, a.count, 1), ab(a.buf, 0, b, 0, a.count), b }

        function pa(a, b) { na(a, a.count + 1), a.buf[a.count++] = b << 24 >> 24 }

        function qa(a, b, c, d) { na(a, a.count + d), ab(b, c, a.buf, a.count, d), a.count += d }

        function ra() {
            return hf }

        function sa() {}

        function ta(a, b) {
            return a.detailMessage = b, a }

        function ua() {
            return jf }

        function va() {}

        function wa(a, b) {
            return a.detailMessage = b, a }

        function xa() {
            return lf }

        function ya() {}

        function za(a, b) {
            return a.detailMessage = b, a }

        function Aa() {
            return mf }

        function Ba() {}

        function Ca(a, b) {
            var c;
            return c = new Ga, c.typeName = a + b, c }

        function Da(a, b) {
            var c;
            return c = new Ga, c.typeName = a + b, c }

        function Ea(a, b) {
            var c;
            return c = new Ga, c.typeName = a + b, c }

        function Fa() {
            return of }

        function Ga() {}

        function Ha() {
            return pf }

        function Ia() {}

        function Ja() {
            return kf }

        function Ka() {}

        function La(a, b) {
            return a.detailMessage = b, a }

        function Ma() {
            return qf }

        function Na() {}

        function Oa() {
            return rf }

        function Pa() {}

        function Qa() {
            return sf }

        function Ra() {}

        function Sa(a, b) {
            return a > b ? a : b }

        function Ta(a, b) {
            return b > a ? a : b }

        function Ua() {
            return uf }

        function Va() {}

        function Wa(a, b) {
            return null == b ? !1 : String(a) == b }

        function Xa(a, b, c, d, e) {
            var f;
            for (f = b; c > f; ++f) d[e++] = a.charCodeAt(f) }

        function Ya() {
            return vf }

        function Za(a) {
            var b;
            return a.data = (b = [], b.explicitLength = 0, b), a }

        function $a() {
            return wf }

        function _a() {}

        function ab(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m;
            if (null == a || null == c) throw new Va;
            if (l = (a.typeMarker$ == se || 2 == a.typeId$ ? a.getClass$() : bf).typeName, h = (c.typeMarker$ == se || 2 == c.typeId$ ? c.getClass$() : bf).typeName, 91 != l.charCodeAt(0) || 91 != h.charCodeAt(0)) throw za(new Ba, "Must be array types");
            if (l.charCodeAt(1) != h.charCodeAt(1)) throw za(new Ba, "Array types must match");
            if (m = a.length, i = c.length, 0 > b || 0 > d || 0 > e || b + e > m || d + e > i) throw new Ra;
            if (76 != l.charCodeAt(1) && 91 != l.charCodeAt(1) || Wa(l, h))
                for (j = 0; e > j; ++j) c[d + j] = a[b + j];
            else if (k = B(a, 3), f = B(c, 3), (null == a ? null : a) === (null == c ? null : c) && d > b)
                for (b += e, g = d + e; g-- > d;) u(f, g, k[--b]);
            else
                for (g = d + e; g > d;) u(f, d++, k[b++]) }

        function bb(a, b) {
            if (!Vc(b, 1 << a.dictionarySize)) throw h(new j, "unexpected failure");
            if (!Yc(b, a.fb)) throw h(new j, "unexpected failure");
            if (!Xc(b, a.matchFinder)) throw h(new j, "unexpected failure");
            if (!Wc(b, a.lc, a.lp, a.pb)) throw h(new j, "unexpected failure") }

        function cb() {
            return Xf }

        function db() {}

        function eb(a) {
            var b;
            try {
                return $b(a.chunker) } catch (b) {
                if (b = E(b), C(b, 10)) return !1;
                throw b } }

        function fb(a, b, c, d, e) {
            var f, g;
            if (!e) throw La(new Na, "null mode");
            if (I(d, ze) < 0) throw La(new Na, "invalid length " + _(d));
            for (a.length_0 = d, f = Ic(new cd), bb(e, f), f._writeEndMark = !0, Zc(f, c), g = 0; 64 > g; g += 8) pa(c, 255 & P(W(d, g)));
            a.chunker = (f._needReleaseMFStream = !1, f._inStream = b, f._finished = !1, Hc(f), f._rangeEncoder.Stream = c, Qc(f), Kc(f), Jc(f), f._lenEncoder._tableSize = f._numFastBytes + 1 - 2, md(f._lenEncoder, 1 << f._posStateBits), f._repMatchLenEncoder._tableSize = f._numFastBytes + 1 - 2, md(f._repMatchLenEncoder, 1 << f._posStateBits), void(f.nowPos64 = Ae), Yb(new cc, f)) }

        function gb() {
            return Yf }

        function hb() {}

        function ib(a, b, c) {
            var d;
            a.output = ma(new sa);
            try { fb(a, ea(new ja, b), a.output, N(b.length), c) } catch (d) {
                throw d = E(d), C(d, 10) ? h(new j, "impossible exception") : d }
            return a }

        function jb() {
            return Zf }

        function kb() {}

        function lb(a) {
            var b, c;
            try {
                return $b(a.chunker) } catch (b) {
                if (b = E(b), C(b, 10)) return c = b, a.exception = c, !1;
                throw b } }

        function mb(a, b, c) {
            var d, e, f, g, h, i = "";
            for (f = s(ff, 0, -1, 5, 1), e = 0; e < f.length; ++e) {
                if (g = ga(b), -1 == g) throw ta(new va, "truncated input");
                f[e] = g << 24 >> 24 }
            if (d = gc(new mc), !ic(d, f)) throw ta(new va, "corrupted input");
            for (e = 0; 64 > e; e += 8) {
                if (g = ga(b), -1 == g) throw ta(new va, "truncated input");
                g = g.toString(16), 1 == g.length && (g = "0" + g), i = g + "" + i } "ffffffffffffffffff" == i.toLowerCase() || 0 == i ? a.length_0 = ze : (h = parseInt(i, 16), h > 4294967295 ? a.length_0 = ze : a.length_0 = M(h)), a.chunker = ec(d, b, c, a.length_0) }

        function nb() {
            return $f }

        function ob() {}

        function pb(a, b) {
            return a.output = ma(new sa), mb(a, ea(new ja, b), a.output), a }

        function qb() {
            return _f }

        function rb() {}

        function sb(a, b, c, d) {
            var e;
            a._keepSizeBefore = b, a._keepSizeAfter = c, e = b + c + d, (null == a._bufferBase || a._blockSize != e) && (a._bufferBase = null, a._blockSize = e, a._bufferBase = s(ff, 0, -1, a._blockSize, 1)), a._pointerToLastSafePosition = a._blockSize - c }

        function tb(a, b) {
            return a._bufferBase[a._bufferOffset + a._pos + b] }

        function ub(a, b, c, d) {
            var e, f;
            for (a._streamEndWasReached && a._pos + b + d > a._streamPos && (d = a._streamPos - (a._pos + b)), ++c, f = a._bufferOffset + a._pos + b, e = 0; d > e && a._bufferBase[f + e] == a._bufferBase[f + e - c]; ++e);
            return e }

        function vb(a) {
            return a._streamPos - a._pos }

        function wb(a) {
            var b, c, d;
            for (d = a._bufferOffset + a._pos - a._keepSizeBefore, d > 0 && --d, c = a._bufferOffset + a._streamPos - d, b = 0; c > b; ++b) a._bufferBase[b] = a._bufferBase[d + b];
            a._bufferOffset -= d }

        function xb(a) {
            var b;++a._pos, a._pos > a._posLimit && (b = a._bufferOffset + a._pos, b > a._pointerToLastSafePosition && wb(a), yb(a)) }

        function yb(a) {
            var b, c, d;
            if (!a._streamEndWasReached)
                for (;;) {
                    if (d = -a._bufferOffset + a._blockSize - a._streamPos, 0 == d) return;
                    if (b = ha(a._stream, a._bufferBase, a._bufferOffset + a._streamPos, d), -1 == b) return a._posLimit = a._streamPos, c = a._bufferOffset + a._posLimit, c > a._pointerToLastSafePosition && (a._posLimit = a._pointerToLastSafePosition - a._bufferOffset), void(a._streamEndWasReached = !0);
                    a._streamPos += b, a._streamPos >= a._pos + a._keepSizeAfter && (a._posLimit = a._streamPos - a._keepSizeAfter) } }

        function zb(a, b) { a._bufferOffset += b, a._posLimit -= b, a._pos -= b, a._streamPos -= b }

        function Ab() {
            return xf }

        function Bb() {}

        function Cb() { Cb = se;
            var a, b, c;
            for (Ve = s(tf, 0, -1, 256, 1), a = 0; 256 > a; ++a) {
                for (c = a, b = 0; 8 > b; ++b) 0 != (1 & c) ? c = c >>> 1 ^ -306674912 : c >>>= 1;
                Ve[a] = c } }

        function Db(a, b, c, d, e) {
            var f, g, h;
            return b > 1073741567 ? !1 : (a._cutValue = 16 + (d >> 1), h = ~~((b + c + d + e) / 2) + 256, sb(a, b + c, d + e, h), a._matchMaxLen = d, f = b + 1, a._cyclicBufferSize != f && (a._son = s(tf, 0, -1, 2 * (a._cyclicBufferSize = f), 1)), g = 65536, a.HASH_ARRAY && (g = b - 1, g |= g >> 1, g |= g >> 2, g |= g >> 4, g |= g >> 8, g >>= 1, g |= 65535, g > 16777216 && (g >>= 1), a._hashMask = g, ++g, g += a.kFixHashSize), g != a._hashSizeSum && (a._hash = s(tf, 0, -1, a._hashSizeSum = g, 1)), !0) }

        function Eb(a, b) {
            var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w;
            if (a._pos + a._matchMaxLen <= a._streamPos) p = a._matchMaxLen;
            else if (p = a._streamPos - a._pos, p < a.kMinMatchCheck) return Gb(a), 0;
            for (s = 0, q = a._pos > a._cyclicBufferSize ? a._pos - a._cyclicBufferSize : 0, d = a._bufferOffset + a._pos, r = 1, j = 0, k = 0, a.HASH_ARRAY ? (w = Ve[255 & a._bufferBase[d]] ^ 255 & a._bufferBase[d + 1], j = 1023 & w, w ^= (255 & a._bufferBase[d + 2]) << 8, k = 65535 & w, l = (w ^ Ve[255 & a._bufferBase[d + 3]] << 5) & a._hashMask) : l = 255 & a._bufferBase[d] ^ (255 & a._bufferBase[d + 1]) << 8, e = a._hash[a.kFixHashSize + l], a.HASH_ARRAY && (f = a._hash[j], g = a._hash[1024 + k], a._hash[j] = a._pos, a._hash[1024 + k] = a._pos, f > q && a._bufferBase[a._bufferOffset + f] == a._bufferBase[d] && (b[s++] = r = 2, b[s++] = a._pos - f - 1), g > q && a._bufferBase[a._bufferOffset + g] == a._bufferBase[d] && (g == f && (s -= 2), b[s++] = r = 3, b[s++] = a._pos - g - 1, f = g), 0 != s && f == e && (s -= 2, r = 1)), a._hash[a.kFixHashSize + l] = a._pos, u = (a._cyclicBufferPos << 1) + 1, v = a._cyclicBufferPos << 1, n = o = a.kNumHashDirectBytes, 0 != a.kNumHashDirectBytes && e > q && a._bufferBase[a._bufferOffset + e + a.kNumHashDirectBytes] != a._bufferBase[d + a.kNumHashDirectBytes] && (b[s++] = r = a.kNumHashDirectBytes, b[s++] = a._pos - e - 1), c = a._cutValue;;) {
                if (q >= e || 0 == c--) { a._son[u] = a._son[v] = 0;
                    break }
                if (i = a._pos - e, h = (i <= a._cyclicBufferPos ? a._cyclicBufferPos - i : a._cyclicBufferPos - i + a._cyclicBufferSize) << 1, t = a._bufferOffset + e, m = o > n ? n : o, a._bufferBase[t + m] == a._bufferBase[d + m]) {
                    for (; ++m != p && a._bufferBase[t + m] == a._bufferBase[d + m];);
                    if (m > r && (b[s++] = r = m, b[s++] = i - 1, m == p)) { a._son[v] = a._son[h], a._son[u] = a._son[h + 1];
                        break } }(255 & a._bufferBase[t + m]) < (255 & a._bufferBase[d + m]) ? (a._son[v] = e, v = h + 1, e = a._son[v], o = m) : (a._son[u] = e, u = h, e = a._son[u], n = m) }
            return Gb(a), s }

        function Fb(a) {
            var b;
            for (a._bufferOffset = 0, a._pos = 0, a._streamPos = 0, a._streamEndWasReached = !1, yb(a), b = 0; b < a._hashSizeSum; ++b) a._hash[b] = 0;
            a._cyclicBufferPos = 0, zb(a, -1) }

        function Gb(a) {
            var b;++a._cyclicBufferPos >= a._cyclicBufferSize && (a._cyclicBufferPos = 0), xb(a), 1073741823 == a._pos && (b = a._pos - a._cyclicBufferSize, Hb(a._son, 2 * a._cyclicBufferSize, b), Hb(a._hash, a._hashSizeSum, b), zb(a, b)) }

        function Hb(a, b, c) {
            var d, e;
            for (d = 0; b > d; ++d) e = a[d], c >= e ? e = 0 : e -= c, a[d] = e }

        function Ib(a, b) { a.HASH_ARRAY = b > 2, a.HASH_ARRAY ? (a.kNumHashDirectBytes = 0, a.kMinMatchCheck = 4, a.kFixHashSize = 66560) : (a.kNumHashDirectBytes = 2, a.kMinMatchCheck = 3, a.kFixHashSize = 0) }

        function Jb(a, b) {
            var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s;
            do {
                if (a._pos + a._matchMaxLen <= a._streamPos) n = a._matchMaxLen;
                else if (n = a._streamPos - a._pos, n < a.kMinMatchCheck) { Gb(a);
                    continue }
                for (o = a._pos > a._cyclicBufferSize ? a._pos - a._cyclicBufferSize : 0, d = a._bufferOffset + a._pos, a.HASH_ARRAY ? (s = Ve[255 & a._bufferBase[d]] ^ 255 & a._bufferBase[d + 1], h = 1023 & s, a._hash[h] = a._pos, s ^= (255 & a._bufferBase[d + 2]) << 8, i = 65535 & s, a._hash[1024 + i] = a._pos, j = (s ^ Ve[255 & a._bufferBase[d + 3]] << 5) & a._hashMask) : j = 255 & a._bufferBase[d] ^ (255 & a._bufferBase[d + 1]) << 8, e = a._hash[a.kFixHashSize + j], a._hash[a.kFixHashSize + j] = a._pos, q = (a._cyclicBufferPos << 1) + 1, r = a._cyclicBufferPos << 1, l = m = a.kNumHashDirectBytes, c = a._cutValue;;) {
                    if (o >= e || 0 == c--) { a._son[q] = a._son[r] = 0;
                        break }
                    if (g = a._pos - e, f = (g <= a._cyclicBufferPos ? a._cyclicBufferPos - g : a._cyclicBufferPos - g + a._cyclicBufferSize) << 1, p = a._bufferOffset + e, k = m > l ? l : m, a._bufferBase[p + k] == a._bufferBase[d + k]) {
                        for (; ++k != n && a._bufferBase[p + k] == a._bufferBase[d + k];);
                        if (k == n) { a._son[r] = a._son[f], a._son[q] = a._son[f + 1];
                            break } }(255 & a._bufferBase[p + k]) < (255 & a._bufferBase[d + k]) ? (a._son[r] = e, r = f + 1, e = a._son[r], m = k) : (a._son[q] = e, q = f, e = a._son[q], l = k) }
                Gb(a) } while (0 != --b) }

        function Kb() {
            return yf }

        function Lb() {}

        function Mb(a, b, c) {
            var d;
            for (d = a._pos - b - 1, 0 > d && (d += a._windowSize); 0 != c; --c) d >= a._windowSize && (d = 0), a._buffer[a._pos++] = a._buffer[d++], a._pos >= a._windowSize && Ob(a) }

        function Nb(a, b) {
            (null == a._buffer || a._windowSize != b) && (a._buffer = s(ff, 0, -1, b, 1)), a._windowSize = b, a._pos = 0, a._streamPos = 0 }

        function Ob(a) {
            var b;
            b = a._pos - a._streamPos, 0 != b && (qa(a._stream, a._buffer, a._streamPos, b), a._pos >= a._windowSize && (a._pos = 0), a._streamPos = a._pos) }

        function Pb(a, b) {
            var c;
            return c = a._pos - b - 1, 0 > c && (c += a._windowSize), a._buffer[c] }

        function Qb(a, b) { b || (a._streamPos = 0, a._pos = 0) }

        function Rb(a, b) { a._buffer[a._pos++] = b, a._pos >= a._windowSize && Ob(a) }

        function Sb(a) { Ob(a), a._stream = null }

        function Tb(a, b) { Ob(a), a._stream = null, a._stream = b }

        function Ub() {
            return zf }

        function Vb() {}

        function Wb(a) {
            return a -= 2, 4 > a ? a : 3 }

        function Xb(a) {
            return 4 > a ? 0 : 10 > a ? a - 3 : a - 6 }

        function Yb(a, b) {
            return a.encoder = b, a.decoder = null, a.alive = !0, a }

        function Zb(a, b) {
            return a.decoder = b, a.encoder = null, a.alive = !0, a }

        function $b(a) {
            var b;
            if (!a.alive) throw new Pa;
            b = !0;
            try {
                return a.encoder ? ac(a) : _b(a), b = !1, a.alive } finally { b && (a.alive = !1) } }

        function _b(a) {
            var b;
            if (b = fc(a.decoder), -1 == b) throw ta(new va, "corrupted input");
            a.inBytesProcessed = ze, a.outBytesProcessed = a.decoder.nowPos64, (1 == b || I(a.decoder.outSize, Ae) >= 0 && I(a.decoder.nowPos64, a.decoder.outSize) >= 0) && (dc(a.decoder), a.alive = !1) }

        function ac(a) { Gc(a.encoder, a.encoder.processedInSize, a.encoder.processedOutSize, a.encoder.finished), a.inBytesProcessed = a.encoder.processedInSize[0], a.encoder.finished[0] && (Uc(a.encoder), a.alive = !1) }

        function bc() {
            return Af }

        function cc() {}

        function dc(a) { Ob(a.m_OutWindow), Sb(a.m_OutWindow), a.m_RangeDecoder.Stream = null }

        function ec(a, b, c, d) {
            return a.m_RangeDecoder.Stream = b, Tb(a.m_OutWindow, c), hc(a), a.state = 0, a.rep0 = 0, a.rep1 = 0, a.rep2 = 0, a.rep3 = 0, a.outSize = d, a.nowPos64 = Ae, a.prevByte = 0, Zb(new cc, a) }

        function fc(a) {
            var b, c, d, e, f, g;
            if (g = P(a.nowPos64) & a.m_PosStateMask, 0 == Td(a.m_RangeDecoder, a.m_IsMatchDecoders, (a.state << 4) + g)) b = uc(a.m_LiteralDecoder, P(a.nowPos64), a.prevByte), a.state < 7 ? a.prevByte = yc(b, a.m_RangeDecoder) : a.prevByte = zc(b, a.m_RangeDecoder, Pb(a.m_OutWindow, a.rep0)), Rb(a.m_OutWindow, a.prevByte), a.state = Xb(a.state), a.nowPos64 = F(a.nowPos64, Be);
            else {
                if (1 == Td(a.m_RangeDecoder, a.m_IsRepDecoders, a.state)) d = 0, 0 == Td(a.m_RangeDecoder, a.m_IsRepG0Decoders, a.state) ? 0 == Td(a.m_RangeDecoder, a.m_IsRep0LongDecoders, (a.state << 4) + g) && (a.state = a.state < 7 ? 9 : 11, d = 1) : (0 == Td(a.m_RangeDecoder, a.m_IsRepG1Decoders, a.state) ? c = a.rep1 : (0 == Td(a.m_RangeDecoder, a.m_IsRepG2Decoders, a.state) ? c = a.rep2 : (c = a.rep3, a.rep3 = a.rep2), a.rep2 = a.rep1), a.rep1 = a.rep0, a.rep0 = c), 0 == d && (d = oc(a.m_RepLenDecoder, a.m_RangeDecoder, g) + 2, a.state = a.state < 7 ? 8 : 11);
                else if (a.rep3 = a.rep2, a.rep2 = a.rep1, a.rep1 = a.rep0, d = 2 + oc(a.m_LenDecoder, a.m_RangeDecoder, g), a.state = a.state < 7 ? 7 : 10, f = Fd(a.m_PosSlotDecoder[Wb(d)], a.m_RangeDecoder), f >= 4) {
                    if (e = (f >> 1) - 1, a.rep0 = (2 | 1 & f) << e, 14 > f) a.rep0 += Hd(a.m_PosDecoders, a.rep0 - f - 1, a.m_RangeDecoder, e);
                    else if (a.rep0 += Ud(a.m_RangeDecoder, e - 4) << 4, a.rep0 += Gd(a.m_PosAlignDecoder, a.m_RangeDecoder), a.rep0 < 0) return -1 == a.rep0 ? 1 : -1 } else a.rep0 = f;
                if (I(N(a.rep0), a.nowPos64) >= 0 || a.rep0 >= a.m_DictionarySizeCheck) return -1;
                Mb(a.m_OutWindow, a.rep0, d), a.nowPos64 = F(a.nowPos64, N(d)), a.prevByte = Pb(a.m_OutWindow, 0) }
            return 0 }

        function gc(a) {
            var b;
            for (a.m_OutWindow = new Vb, a.m_RangeDecoder = new Yd, a.m_IsMatchDecoders = s(Bf, 0, -1, 192, 1), a.m_IsRepDecoders = s(Bf, 0, -1, 12, 1), a.m_IsRepG0Decoders = s(Bf, 0, -1, 12, 1), a.m_IsRepG1Decoders = s(Bf, 0, -1, 12, 1), a.m_IsRepG2Decoders = s(Bf, 0, -1, 12, 1), a.m_IsRep0LongDecoders = s(Bf, 0, -1, 192, 1), a.m_PosSlotDecoder = s(Cf, 0, 7, 4, 0), a.m_PosDecoders = s(Bf, 0, -1, 114, 1), a.m_PosAlignDecoder = Ed(new Jd, 4), a.m_LenDecoder = pc(new sc), a.m_RepLenDecoder = pc(new sc), a.m_LiteralDecoder = new xc, b = 0; 4 > b; ++b) a.m_PosSlotDecoder[b] = Ed(new Jd, 6);
            return a }

        function hc(a) {
            var b;
            for (Qb(a.m_OutWindow, !1), Wd(a.m_IsMatchDecoders), Wd(a.m_IsRep0LongDecoders), Wd(a.m_IsRepDecoders), Wd(a.m_IsRepG0Decoders), Wd(a.m_IsRepG1Decoders), Wd(a.m_IsRepG2Decoders), Wd(a.m_PosDecoders), vc(a.m_LiteralDecoder), b = 0; 4 > b; ++b) Wd(a.m_PosSlotDecoder[b].Models);
            qc(a.m_LenDecoder), qc(a.m_RepLenDecoder), Wd(a.m_PosAlignDecoder.Models), Vd(a.m_RangeDecoder) }

        function ic(a, b) {
            var c, d, e, f, g, h, i;
            if (b.length < 5) return !1;
            for (i = 255 & b[0], e = i % 9, h = ~~(i / 9), f = h % 5, g = ~~(h / 5), c = 0, d = 0; 4 > d; ++d) c += (255 & b[1 + d]) << 8 * d;
            return kc(a, e, f, g) ? jc(a, c) : !1 }

        function jc(a, b) {
            return 0 > b ? !1 : (a.m_DictionarySize != b && (a.m_DictionarySize = b, a.m_DictionarySizeCheck = Sa(a.m_DictionarySize, 1), Nb(a.m_OutWindow, Sa(a.m_DictionarySizeCheck, 4096))), !0) }

        function kc(a, b, c, d) {
            var e;
            return b > 8 || c > 4 || d > 4 ? !1 : (tc(a.m_LiteralDecoder, c, b), e = 1 << d, nc(a.m_LenDecoder, e), nc(a.m_RepLenDecoder, e), a.m_PosStateMask = e - 1, !0) }

        function lc() {
            return Df }

        function mc() {}

        function nc(a, b) {
            for (; a.m_NumPosStates < b; ++a.m_NumPosStates) a.m_LowCoder[a.m_NumPosStates] = Ed(new Jd, 3), a.m_MidCoder[a.m_NumPosStates] = Ed(new Jd, 3) }

        function oc(a, b, c) {
            var d;
            return 0 == Td(b, a.m_Choice, 0) ? Fd(a.m_LowCoder[c], b) : (d = 8, d += 0 == Td(b, a.m_Choice, 1) ? Fd(a.m_MidCoder[c], b) : 8 + Fd(a.m_HighCoder, b)) }

        function pc(a) {
            return a.m_Choice = s(Bf, 0, -1, 2, 1), a.m_LowCoder = s(Cf, 0, 7, 16, 0), a.m_MidCoder = s(Cf, 0, 7, 16, 0), a.m_HighCoder = Ed(new Jd, 8), a }

        function qc(a) {
            var b;
            for (Wd(a.m_Choice), b = 0; b < a.m_NumPosStates; ++b) Wd(a.m_LowCoder[b].Models), Wd(a.m_MidCoder[b].Models);
            Wd(a.m_HighCoder.Models) }

        function rc() {
            return Ef }

        function sc() {}

        function tc(a, b, c) {
            var d, e;
            if (null == a.m_Coders || a.m_NumPrevBits != c || a.m_NumPosBits != b)
                for (a.m_NumPosBits = b, a.m_PosMask = (1 << b) - 1, a.m_NumPrevBits = c, e = 1 << a.m_NumPrevBits + a.m_NumPosBits, a.m_Coders = s(Ff, 0, 4, e, 0), d = 0; e > d; ++d) a.m_Coders[d] = Ac(new Cc) }

        function uc(a, b, c) {
            return a.m_Coders[((b & a.m_PosMask) << a.m_NumPrevBits) + ((255 & c) >>> 8 - a.m_NumPrevBits)] }

        function vc(a) {
            var b, c;
            for (c = 1 << a.m_NumPrevBits + a.m_NumPosBits, b = 0; c > b; ++b) Wd(a.m_Coders[b].m_Decoders) }

        function wc() {
            return Gf }

        function xc() {}

        function yc(a, b) {
            var c;
            c = 1;
            do c = c << 1 | Td(b, a.m_Decoders, c); while (256 > c);
            return c << 24 >> 24 }

        function zc(a, b, c) {
            var d, e, f;
            f = 1;
            do
                if (e = c >> 7 & 1, c <<= 1, d = Td(b, a.m_Decoders, (1 + e << 8) + f), f = f << 1 | d, e != d) {
                    for (; 256 > f;) f = f << 1 | Td(b, a.m_Decoders, f);
                    break }
            while (256 > f);
            return f << 24 >> 24 }

        function Ac(a) {
            return a.m_Decoders = s(Bf, 0, -1, 768, 1), a }

        function Bc() {
            return Hf }

        function Cc() {}

        function Dc() { Dc = se;
            var a, b, c, d;
            for (We = s(ff, 0, -1, 2048, 1), a = 2, We[0] = 0, We[1] = 1, d = 2; 22 > d; ++d)
                for (c = 1 << (d >> 1) - 1, b = 0; c > b; ++b, ++a) We[a] = d << 24 >> 24 }

        function Ec(a, b) {
            var c, d, e, f;
            a._optimumEndIndex = b, e = a._optimum[b].PosPrev, d = a._optimum[b].BackPrev;
            do a._optimum[b].Prev1IsChar && (Ad(a._optimum[e]), a._optimum[e].PosPrev = e - 1, a._optimum[b].Prev2 && (a._optimum[e - 1].Prev1IsChar = !1, a._optimum[e - 1].PosPrev = a._optimum[b].PosPrev2, a._optimum[e - 1].BackPrev = a._optimum[b].BackPrev2)), f = e, c = d, d = a._optimum[f].BackPrev, e = a._optimum[f].PosPrev, a._optimum[f].BackPrev = c, a._optimum[f].PosPrev = b, b = f; while (b > 0);
            return a.backRes = a._optimum[0].BackPrev, a._optimumCurrentIndex = a._optimum[0].PosPrev, a._optimumCurrentIndex }

        function Fc(a) {
            var b;
            for (a._state = 0, a._previousByte = 0, b = 0; 4 > b; ++b) a._repDistances[b] = 0 }

        function Gc(a, b, c, d) {
            var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s;
            if (b[0] = Ae, c[0] = Ae, d[0] = !0, a._inStream && (a._matchFinder._stream = a._inStream, Fb(a._matchFinder), a._needReleaseMFStream = !0, a._inStream = null), !a._finished) {
                if (a._finished = !0, r = a.nowPos64, L(a.nowPos64, Ae)) {
                    if (0 == vb(a._matchFinder)) return void Lc(a, P(a.nowPos64));
                    Sc(a), q = P(a.nowPos64) & a._posStateMask, $d(a._rangeEncoder, a._isMatch, (a._state << 4) + q, 0), a._state = Xb(a._state), g = tb(a._matchFinder, -a._additionalOffset), ud(qd(a._literalEncoder, P(a.nowPos64), a._previousByte), a._rangeEncoder, g), a._previousByte = g, --a._additionalOffset, a.nowPos64 = F(a.nowPos64, Be) }
                if (0 == vb(a._matchFinder)) return void Lc(a, P(a.nowPos64));
                for (;;) {
                    if (k = Mc(a, P(a.nowPos64)), n = a.backRes, q = P(a.nowPos64) & a._posStateMask, f = (a._state << 4) + q, 1 == k && -1 == n) $d(a._rangeEncoder, a._isMatch, f, 0), g = tb(a._matchFinder, -a._additionalOffset), s = qd(a._literalEncoder, P(a.nowPos64), a._previousByte), a._state < 7 ? ud(s, a._rangeEncoder, g) : (m = tb(a._matchFinder, -a._repDistances[0] - 1 - a._additionalOffset), vd(s, a._rangeEncoder, m, g)), a._previousByte = g, a._state = Xb(a._state);
                    else {
                        if ($d(a._rangeEncoder, a._isMatch, f, 1), 4 > n) {
                            if ($d(a._rangeEncoder, a._isRep, a._state, 1), 0 == n ? ($d(a._rangeEncoder, a._isRepG0, a._state, 0), 1 == k ? $d(a._rangeEncoder, a._isRep0Long, f, 0) : $d(a._rangeEncoder, a._isRep0Long, f, 1)) : ($d(a._rangeEncoder, a._isRepG0, a._state, 1), 1 == n ? $d(a._rangeEncoder, a._isRepG1, a._state, 0) : ($d(a._rangeEncoder, a._isRepG1, a._state, 1), $d(a._rangeEncoder, a._isRepG2, a._state, n - 2))), 1 == k ? a._state = a._state < 7 ? 9 : 11 : (jd(a._repMatchLenEncoder, a._rangeEncoder, k - 2, q), a._state = a._state < 7 ? 8 : 11), h = a._repDistances[n], 0 != n) {
                                for (j = n; j >= 1; --j) a._repDistances[j] = a._repDistances[j - 1];
                                a._repDistances[0] = h } } else {
                            for ($d(a._rangeEncoder, a._isRep, a._state, 0), a._state = a._state < 7 ? 7 : 10, jd(a._lenEncoder, a._rangeEncoder, k - 2, q), n -= 4, p = _c(n), l = Wb(k), Ld(a._posSlotEncoder[l], a._rangeEncoder, p), p >= 4 && (i = (p >> 1) - 1, e = (2 | 1 & p) << i, o = n - e, 14 > p ? Pd(a._posEncoders, e - p - 1, a._rangeEncoder, i, o) : (_d(a._rangeEncoder, o >> 4, i - 4), Nd(a._posAlignEncoder, a._rangeEncoder, 15 & o), ++a._alignPriceCount)), h = n, j = 3; j >= 1; --j) a._repDistances[j] = a._repDistances[j - 1];
                            a._repDistances[0] = h, ++a._matchPriceCount }
                        a._previousByte = tb(a._matchFinder, k - 1 - a._additionalOffset) }
                    if (a._additionalOffset -= k, a.nowPos64 = F(a.nowPos64, N(k)), 0 == a._additionalOffset) {
                        if (a._matchPriceCount >= 128 && Kc(a), a._alignPriceCount >= 16 && Jc(a), b[0] = a.nowPos64, c[0] = be(a._rangeEncoder), 0 == vb(a._matchFinder)) return void Lc(a, P(a.nowPos64));
                        if (I(Y(a.nowPos64, r), De) >= 0) return a._finished = !1, void(d[0] = !1) } } } }

        function Hc(a) {
            var b, c;
            a._matchFinder || (Cb(), b = new Lb, c = 4, 0 == a._matchFinderType && (c = 2), Ib(b, c), a._matchFinder = b), pd(a._literalEncoder, a._numLiteralPosStateBits, a._numLiteralContextBits), (a._dictionarySize != a._dictionarySizePrev || a._numFastBytesPrev != a._numFastBytes) && (Db(a._matchFinder, a._dictionarySize, 4096, a._numFastBytes, 274), a._dictionarySizePrev = a._dictionarySize, a._numFastBytesPrev = a._numFastBytes) }

        function Ic(a) {
            var b;
            for (Dc(), a._repDistances = s(tf, 0, -1, 4, 1), a._optimum = s(If, 0, 6, 4096, 0), a._rangeEncoder = (Zd(), new he), a._isMatch = s(Bf, 0, -1, 192, 1), a._isRep = s(Bf, 0, -1, 12, 1), a._isRepG0 = s(Bf, 0, -1, 12, 1), a._isRepG1 = s(Bf, 0, -1, 12, 1), a._isRepG2 = s(Bf, 0, -1, 12, 1), a._isRep0Long = s(Bf, 0, -1, 192, 1), a._posSlotEncoder = s(Jf, 0, 8, 4, 0), a._posEncoders = s(Bf, 0, -1, 114, 1), a._posAlignEncoder = Kd(new Sd, 4), a._lenEncoder = kd(new od), a._repMatchLenEncoder = kd(new od), a._literalEncoder = new td, a._matchDistances = s(tf, 0, -1, 548, 1), a._posSlotPrices = s(tf, 0, -1, 256, 1), a._distancesPrices = s(tf, 0, -1, 512, 1), a._alignPrices = s(tf, 0, -1, 16, 1), a.reps = s(tf, 0, -1, 4, 1), a.repLens = s(tf, 0, -1, 4, 1), a.processedInSize = s(Kf, 0, -1, 1, 3), a.processedOutSize = s(Kf, 0, -1, 1, 3), a.finished = s(Lf, 0, -1, 1, 2), a.properties = s(ff, 0, -1, 5, 1), a.tempPrices = s(tf, 0, -1, 128, 1), b = 0; 4096 > b; ++b) a._optimum[b] = new Dd;
            for (b = 0; 4 > b; ++b) a._posSlotEncoder[b] = Kd(new Sd, 6);
            return a }

        function Jc(a) {
            var b;
            for (b = 0; 16 > b; ++b) a._alignPrices[b] = Od(a._posAlignEncoder, b);
            a._alignPriceCount = 0 }

        function Kc(a) {
            var b, c, d, e, f, g, h, i;
            for (e = 4; 128 > e; ++e) g = _c(e), d = (g >> 1) - 1, b = (2 | 1 & g) << d, a.tempPrices[e] = Qd(a._posEncoders, b - g - 1, d, e - b);
            for (f = 0; 4 > f; ++f) {
                for (c = a._posSlotEncoder[f], h = f << 6, g = 0; g < a._distTableSize; ++g) a._posSlotPrices[h + g] = Md(c, g);
                for (g = 14; g < a._distTableSize; ++g) a._posSlotPrices[h + g] += (g >> 1) - 1 - 4 << 6;
                for (i = 128 * f, e = 0; 4 > e; ++e) a._distancesPrices[i + e] = a._posSlotPrices[h + e];
                for (; 128 > e; ++e) a._distancesPrices[i + e] = a._posSlotPrices[h + _c(e)] + a.tempPrices[e] }
            a._matchPriceCount = 0 }

        function Lc(a, b) { Tc(a), $c(a, b & a._posStateMask), ae(a._rangeEncoder) }

        function Mc(a, b) {
            var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z;
            if (a._optimumEndIndex != a._optimumCurrentIndex) return o = a._optimum[a._optimumCurrentIndex].PosPrev - a._optimumCurrentIndex, a.backRes = a._optimum[a._optimumCurrentIndex].BackPrev, a._optimumCurrentIndex = a._optimum[a._optimumCurrentIndex].PosPrev, o;
            if (a._optimumCurrentIndex = a._optimumEndIndex = 0, a._longestMatchWasFound ? (n = a._longestMatchLength, a._longestMatchWasFound = !1) : n = Sc(a), C = a._numDistancePairs, A = vb(a._matchFinder) + 1, 2 > A) return a.backRes = -1, 1;
            for (A > 273 && (A = 273), P = 0, k = 0; 4 > k; ++k) a.reps[k] = a._repDistances[k], a.repLens[k] = ub(a._matchFinder, -1, a.reps[k], 273), a.repLens[k] > a.repLens[P] && (P = k);
            if (a.repLens[P] >= a._numFastBytes) return a.backRes = P, o = a.repLens[P], Rc(a, o - 1), o;
            if (n >= a._numFastBytes) return a.backRes = a._matchDistances[C - 1] + 4, Rc(a, n - 1), n;
            if (i = tb(a._matchFinder, -1), s = tb(a._matchFinder, -a._repDistances[0] - 1 - 1), 2 > n && i != s && a.repLens[P] < 2) return a.backRes = -1, 1;
            if (a._optimum[0].State = a._state, J = b & a._posStateMask, a._optimum[1].Price = (Zd(), Xe[a._isMatch[(a._state << 4) + J] >>> 2] + xd(qd(a._literalEncoder, b, a._previousByte), a._state >= 7, s, i)), Ad(a._optimum[1]), t = Xe[2048 - a._isMatch[(a._state << 4) + J] >>> 2], O = t + Xe[2048 - a._isRep[a._state] >>> 2], s == i && (Q = O + Pc(a, a._state, J), Q < a._optimum[1].Price && (a._optimum[1].Price = Q, Bd(a._optimum[1]))), m = n >= a.repLens[P] ? n : a.repLens[P], 2 > m) return a.backRes = a._optimum[1].BackPrev, 1;
            a._optimum[1].PosPrev = 0, a._optimum[0].Backs0 = a.reps[0], a._optimum[0].Backs1 = a.reps[1], a._optimum[0].Backs2 = a.reps[2], a._optimum[0].Backs3 = a.reps[3], l = m;
            do a._optimum[l--].Price = 268435455; while (l >= 2);
            for (k = 0; 4 > k; ++k)
                if (N = a.repLens[k], !(2 > N)) { L = O + Oc(a, k, a._state, J);
                    do f = L + ld(a._repMatchLenEncoder, N - 2, J), G = a._optimum[N], f < G.Price && (G.Price = f, G.PosPrev = 0, G.BackPrev = k, G.Prev1IsChar = !1); while (--N >= 2) }
            if (z = t + Xe[a._isRep[a._state] >>> 2], l = a.repLens[0] >= 2 ? a.repLens[0] + 1 : 2, n >= l) {
                for (D = 0; l > a._matchDistances[D];) D += 2;
                for (; j = a._matchDistances[D + 1], f = z + Nc(a, j, l, J), G = a._optimum[l], f < G.Price && (G.Price = f, G.PosPrev = 0, G.BackPrev = j + 4, G.Prev1IsChar = !1), l != a._matchDistances[D] || (D += 2, D != C); ++l); }
            for (c = 0;;) {
                if (++c, c == m) return Ec(a, c);
                if (u = Sc(a), C = a._numDistancePairs, u >= a._numFastBytes) return a._longestMatchLength = u, a._longestMatchWasFound = !0, Ec(a, c);
                if (++b, I = a._optimum[c].PosPrev, a._optimum[c].Prev1IsChar ? (--I, a._optimum[c].Prev2 ? (S = a._optimum[a._optimum[c].PosPrev2].State, S = a._optimum[c].BackPrev2 < 4 ? 7 > S ? 8 : 11 : 7 > S ? 7 : 10) : S = a._optimum[I].State, S = Xb(S)) : S = a._optimum[I].State, I == c - 1 ? S = 0 == a._optimum[c].BackPrev ? 7 > S ? 9 : 11 : Xb(S) : (a._optimum[c].Prev1IsChar && a._optimum[c].Prev2 ? (I = a._optimum[c].PosPrev2, H = a._optimum[c].BackPrev2, S = 7 > S ? 8 : 11) : (H = a._optimum[c].BackPrev, S = 4 > H ? 7 > S ? 8 : 11 : 7 > S ? 7 : 10), F = a._optimum[I], 4 > H ? 0 == H ? (a.reps[0] = F.Backs0, a.reps[1] = F.Backs1, a.reps[2] = F.Backs2, a.reps[3] = F.Backs3) : 1 == H ? (a.reps[0] = F.Backs1, a.reps[1] = F.Backs0, a.reps[2] = F.Backs2, a.reps[3] = F.Backs3) : 2 == H ? (a.reps[0] = F.Backs2, a.reps[1] = F.Backs0, a.reps[2] = F.Backs1, a.reps[3] = F.Backs3) : (a.reps[0] = F.Backs3, a.reps[1] = F.Backs0, a.reps[2] = F.Backs1, a.reps[3] = F.Backs2) : (a.reps[0] = H - 4, a.reps[1] = F.Backs0, a.reps[2] = F.Backs1, a.reps[3] = F.Backs2)), a._optimum[c].State = S, a._optimum[c].Backs0 = a.reps[0], a._optimum[c].Backs1 = a.reps[1], a._optimum[c].Backs2 = a.reps[2], a._optimum[c].Backs3 = a.reps[3], h = a._optimum[c].Price, i = tb(a._matchFinder, -1), s = tb(a._matchFinder, -a.reps[0] - 1 - 1), J = b & a._posStateMask, d = h + Xe[a._isMatch[(S << 4) + J] >>> 2] + xd(qd(a._literalEncoder, b, tb(a._matchFinder, -2)), S >= 7, s, i), x = a._optimum[c + 1], v = !1, d < x.Price && (x.Price = d, x.PosPrev = c, x.BackPrev = -1, x.Prev1IsChar = !1, v = !0), t = h + Xe[2048 - a._isMatch[(S << 4) + J] >>> 2], O = t + Xe[2048 - a._isRep[S] >>> 2], s != i || x.PosPrev < c && 0 == x.BackPrev || (Q = O + (Xe[a._isRepG0[S] >>> 2] + Xe[a._isRep0Long[(S << 4) + J] >>> 2]), Q <= x.Price && (x.Price = Q, x.PosPrev = c, x.BackPrev = 0, x.Prev1IsChar = !1, v = !0)), B = vb(a._matchFinder) + 1, B = B > 4095 - c ? 4095 - c : B, A = B, !(2 > A)) {
                    if (A > a._numFastBytes && (A = a._numFastBytes), !v && s != i && (U = Ta(B - 1, a._numFastBytes), q = ub(a._matchFinder, 0, a.reps[0], U), q >= 2)) {
                        for (T = Xb(S), K = b + 1 & a._posStateMask, y = d + Xe[2048 - a._isMatch[(T << 4) + K] >>> 2] + Xe[2048 - a._isRep[T] >>> 2], E = c + 1 + q; E > m;) a._optimum[++m].Price = 268435455;
                        f = y + (V = ld(a._repMatchLenEncoder, q - 2, K), V + Oc(a, 0, T, K)), G = a._optimum[E], f < G.Price && (G.Price = f, G.PosPrev = c + 1, G.BackPrev = 0, G.Prev1IsChar = !0, G.Prev2 = !1) }
                    for (R = 2, M = 0; 4 > M; ++M)
                        if (p = ub(a._matchFinder, -1, a.reps[M], A), !(2 > p)) {
                            r = p;
                            do {
                                for (; c + p > m;) a._optimum[++m].Price = 268435455;
                                f = O + (W = ld(a._repMatchLenEncoder, p - 2, J), W + Oc(a, M, S, J)), G = a._optimum[c + p], f < G.Price && (G.Price = f, G.PosPrev = c, G.BackPrev = M, G.Prev1IsChar = !1) } while (--p >= 2);
                            if (p = r, 0 == M && (R = p + 1), B > p && (U = Ta(B - 1 - p, a._numFastBytes), q = ub(a._matchFinder, p, a.reps[M], U),
                                    q >= 2)) {
                                for (T = 7 > S ? 8 : 11, K = b + p & a._posStateMask, e = O + (X = ld(a._repMatchLenEncoder, p - 2, J), X + Oc(a, M, S, J)) + Xe[a._isMatch[(T << 4) + K] >>> 2] + xd(qd(a._literalEncoder, b + p, tb(a._matchFinder, p - 1 - 1)), !0, tb(a._matchFinder, p - 1 - (a.reps[M] + 1)), tb(a._matchFinder, p - 1)), T = Xb(T), K = b + p + 1 & a._posStateMask, w = e + Xe[2048 - a._isMatch[(T << 4) + K] >>> 2], y = w + Xe[2048 - a._isRep[T] >>> 2], E = p + 1 + q; c + E > m;) a._optimum[++m].Price = 268435455;
                                f = y + (Y = ld(a._repMatchLenEncoder, q - 2, K), Y + Oc(a, 0, T, K)), G = a._optimum[c + E], f < G.Price && (G.Price = f, G.PosPrev = c + p + 1, G.BackPrev = 0, G.Prev1IsChar = !0, G.Prev2 = !0, G.PosPrev2 = c, G.BackPrev2 = M) }
                        }
                    if (u > A) {
                        for (u = A, C = 0; u > a._matchDistances[C]; C += 2);
                        a._matchDistances[C] = u, C += 2 }
                    if (u >= R) {
                        for (z = t + Xe[a._isRep[S] >>> 2]; c + u > m;) a._optimum[++m].Price = 268435455;
                        for (D = 0; R > a._matchDistances[D];) D += 2;
                        for (p = R;; ++p)
                            if (g = a._matchDistances[D + 1], f = z + Nc(a, g, p, J), G = a._optimum[c + p], f < G.Price && (G.Price = f, G.PosPrev = c, G.BackPrev = g + 4, G.Prev1IsChar = !1), p == a._matchDistances[D]) {
                                if (B > p && (U = Ta(B - 1 - p, a._numFastBytes), q = ub(a._matchFinder, p, g, U), q >= 2)) {
                                    for (T = 7 > S ? 7 : 10, K = b + p & a._posStateMask, e = f + Xe[a._isMatch[(T << 4) + K] >>> 2] + xd(qd(a._literalEncoder, b + p, tb(a._matchFinder, p - 1 - 1)), !0, tb(a._matchFinder, p - (g + 1) - 1), tb(a._matchFinder, p - 1)), T = Xb(T), K = b + p + 1 & a._posStateMask, w = e + Xe[2048 - a._isMatch[(T << 4) + K] >>> 2], y = w + Xe[2048 - a._isRep[T] >>> 2], E = p + 1 + q; c + E > m;) a._optimum[++m].Price = 268435455;
                                    f = y + (Z = ld(a._repMatchLenEncoder, q - 2, K), Z + Oc(a, 0, T, K)), G = a._optimum[c + E], f < G.Price && (G.Price = f, G.PosPrev = c + p + 1, G.BackPrev = 0, G.Prev1IsChar = !0, G.Prev2 = !0, G.PosPrev2 = c, G.BackPrev2 = g + 4) }
                                if (D += 2, D == C) break } }
                }
            }
        }

        function Nc(a, b, c, d) {
            var e, f;
            return e = Wb(c), f = 128 > b ? a._distancesPrices[128 * e + b] : a._posSlotPrices[(e << 6) + ad(b)] + a._alignPrices[15 & b], f + ld(a._lenEncoder, c - 2, d) }

        function Oc(a, b, c, d) {
            var e;
            return 0 == b ? (Zd(), e = Xe[a._isRepG0[c] >>> 2], e += Xe[2048 - a._isRep0Long[(c << 4) + d] >>> 2]) : (Zd(), e = Xe[2048 - a._isRepG0[c] >>> 2], 1 == b ? e += Xe[a._isRepG1[c] >>> 2] : (e += Xe[2048 - a._isRepG1[c] >>> 2], e += ee(a._isRepG2[c], b - 2))), e }

        function Pc(a, b, c) {
            return Zd(), Xe[a._isRepG0[b] >>> 2] + Xe[a._isRep0Long[(b << 4) + c] >>> 2] }

        function Qc(a) {
            var b;
            for (Fc(a), ce(a._rangeEncoder), fe(a._isMatch), fe(a._isRep0Long), fe(a._isRep), fe(a._isRepG0), fe(a._isRepG1), fe(a._isRepG2), fe(a._posEncoders), rd(a._literalEncoder), b = 0; 4 > b; ++b) Wd(a._posSlotEncoder[b].Models);
            fd(a._lenEncoder, 1 << a._posStateBits), fd(a._repMatchLenEncoder, 1 << a._posStateBits), Wd(a._posAlignEncoder.Models), a._longestMatchWasFound = !1, a._optimumEndIndex = 0, a._optimumCurrentIndex = 0, a._additionalOffset = 0 }

        function Rc(a, b) { b > 0 && (Jb(a._matchFinder, b), a._additionalOffset += b) }

        function Sc(a) {
            var b;
            return b = 0, a._numDistancePairs = Eb(a._matchFinder, a._matchDistances), a._numDistancePairs > 0 && (b = a._matchDistances[a._numDistancePairs - 2], b == a._numFastBytes && (b += ub(a._matchFinder, b - 1, a._matchDistances[a._numDistancePairs - 1], 273 - b))), ++a._additionalOffset, b }

        function Tc(a) { a._matchFinder && a._needReleaseMFStream && (a._matchFinder._stream = null, a._needReleaseMFStream = !1) }

        function Uc(a) { Tc(a), a._rangeEncoder.Stream = null }

        function Vc(a, b) {
            var c;
            if (1 > b || b > 536870912) return !1;
            for (a._dictionarySize = b, c = 0; b > 1 << c; ++c);
            return a._distTableSize = 2 * c, !0 }

        function Wc(a, b, c, d) {
            return 0 > c || c > 4 || 0 > b || b > 8 || 0 > d || d > 4 ? !1 : (a._numLiteralPosStateBits = c, a._numLiteralContextBits = b, a._posStateBits = d, a._posStateMask = (1 << a._posStateBits) - 1, !0) }

        function Xc(a, b) {
            var c;
            return 0 > b || b > 2 ? !1 : (c = a._matchFinderType, a._matchFinderType = b, a._matchFinder && c != a._matchFinderType && (a._dictionarySizePrev = -1, a._matchFinder = null), !0) }

        function Yc(a, b) {
            return 5 > b || b > 273 ? !1 : (a._numFastBytes = b, !0) }

        function Zc(a, b) {
            var c;
            for (a.properties[0] = 9 * (5 * a._posStateBits + a._numLiteralPosStateBits) + a._numLiteralContextBits << 24 >> 24, c = 0; 4 > c; ++c) a.properties[1 + c] = a._dictionarySize >> 8 * c << 24 >> 24;
            qa(b, a.properties, 0, 5) }

        function $c(a, b) {
            var c;
            a._writeEndMark && ($d(a._rangeEncoder, a._isMatch, (a._state << 4) + b, 1), $d(a._rangeEncoder, a._isRep, a._state, 0), a._state = a._state < 7 ? 7 : 10, jd(a._lenEncoder, a._rangeEncoder, 0, b), c = Wb(2), Ld(a._posSlotEncoder[c], a._rangeEncoder, 63), _d(a._rangeEncoder, 67108863, 26), Nd(a._posAlignEncoder, a._rangeEncoder, 15)) }

        function _c(a) {
            return 2048 > a ? We[a] : 2097152 > a ? We[a >> 10] + 20 : We[a >> 20] + 40 }

        function ad(a) {
            return 131072 > a ? We[a >> 6] + 12 : 134217728 > a ? We[a >> 16] + 32 : We[a >> 26] + 52 }

        function bd() {
            return Mf }

        function cd() {}

        function dd(a, b, c, d) { 8 > c ? ($d(b, a._choice, 0, 0), Ld(a._lowCoder[d], b, c)) : (c -= 8, $d(b, a._choice, 0, 1), 8 > c ? ($d(b, a._choice, 1, 0), Ld(a._midCoder[d], b, c)) : ($d(b, a._choice, 1, 1), Ld(a._highCoder, b, c - 8))) }

        function ed(a) {
            var b;
            for (a._choice = s(Bf, 0, -1, 2, 1), a._lowCoder = s(Jf, 0, 8, 16, 0), a._midCoder = s(Jf, 0, 8, 16, 0), a._highCoder = Kd(new Sd, 8), b = 0; 16 > b; ++b) a._lowCoder[b] = Kd(new Sd, 3), a._midCoder[b] = Kd(new Sd, 3);
            return a }

        function fd(a, b) {
            var c;
            for (fe(a._choice), c = 0; b > c; ++c) Wd(a._lowCoder[c].Models), Wd(a._midCoder[c].Models);
            Wd(a._highCoder.Models) }

        function gd(a, b, c, d, e) {
            var f, g, h, i, j;
            for (Zd(), f = Xe[a._choice[0] >>> 2], g = Xe[2048 - a._choice[0] >>> 2], h = g + Xe[a._choice[1] >>> 2], i = g + Xe[2048 - a._choice[1] >>> 2], j = 0, j = 0; 8 > j; ++j) {
                if (j >= c) return;
                d[e + j] = f + Md(a._lowCoder[b], j) }
            for (; 16 > j; ++j) {
                if (j >= c) return;
                d[e + j] = h + Md(a._midCoder[b], j - 8) }
            for (; c > j; ++j) d[e + j] = i + Md(a._highCoder, j - 8 - 8) }

        function hd() {
            return Qf }

        function id() {}

        function jd(a, b, c, d) { dd(a, b, c, d), 0 == --a._counters[d] && (gd(a, d, a._tableSize, a._prices, 272 * d), a._counters[d] = a._tableSize) }

        function kd(a) {
            return ed(a), a._prices = s(tf, 0, -1, 4352, 1), a._counters = s(tf, 0, -1, 16, 1), a }

        function ld(a, b, c) {
            return a._prices[272 * c + b] }

        function md(a, b) {
            var c;
            for (c = 0; b > c; ++c) gd(a, c, a._tableSize, a._prices, 272 * c), a._counters[c] = a._tableSize }

        function nd() {
            return Rf }

        function od() {}

        function pd(a, b, c) {
            var d, e;
            if (null == a.m_Coders || a.m_NumPrevBits != c || a.m_NumPosBits != b)
                for (a.m_NumPosBits = b, a.m_PosMask = (1 << b) - 1, a.m_NumPrevBits = c, e = 1 << a.m_NumPrevBits + a.m_NumPosBits, a.m_Coders = s(Nf, 0, 5, e, 0), d = 0; e > d; ++d) a.m_Coders[d] = wd(new zd) }

        function qd(a, b, c) {
            return a.m_Coders[((b & a.m_PosMask) << a.m_NumPrevBits) + ((255 & c) >>> 8 - a.m_NumPrevBits)] }

        function rd(a) {
            var b, c;
            for (c = 1 << a.m_NumPrevBits + a.m_NumPosBits, b = 0; c > b; ++b) fe(a.m_Coders[b].m_Encoders) }

        function sd() {
            return Of }

        function td() {}

        function ud(a, b, c) {
            var d, e, f;
            for (e = 1, f = 7; f >= 0; --f) d = c >> f & 1, $d(b, a.m_Encoders, e, d), e = e << 1 | d }

        function vd(a, b, c, d) {
            var e, f, g, h, i, j;
            for (f = 1, i = !0, g = 7; g >= 0; --g) e = d >> g & 1, j = f, i && (h = c >> g & 1, j += 1 + h << 8, i = h == e), $d(b, a.m_Encoders, j, e), f = f << 1 | e }

        function wd(a) {
            return a.m_Encoders = s(Bf, 0, -1, 768, 1), a }

        function xd(a, b, c, d) {
            var e, f, g, h, i;
            if (i = 0, f = 1, g = 7, b)
                for (; g >= 0; --g)
                    if (h = c >> g & 1, e = d >> g & 1, i += ee(a.m_Encoders[(1 + h << 8) + f], e), f = f << 1 | e, h != e) {--g;
                        break }
            for (; g >= 0; --g) e = d >> g & 1, i += ee(a.m_Encoders[f], e), f = f << 1 | e;
            return i }

        function yd() {
            return Pf }

        function zd() {}

        function Ad(a) { a.BackPrev = -1, a.Prev1IsChar = !1 }

        function Bd(a) { a.BackPrev = 0, a.Prev1IsChar = !1 }

        function Cd() {
            return Sf }

        function Dd() {}

        function Ed(a, b) {
            return a.NumBitLevels = b, a.Models = s(Bf, 0, -1, 1 << b, 1), a }

        function Fd(a, b) {
            var c, d;
            for (d = 1, c = a.NumBitLevels; 0 != c; --c) d = (d << 1) + Td(b, a.Models, d);
            return d - (1 << a.NumBitLevels) }

        function Gd(a, b) {
            var c, d, e, f;
            for (e = 1, f = 0, d = 0; d < a.NumBitLevels; ++d) c = Td(b, a.Models, e), e <<= 1, e += c, f |= c << d;
            return f }

        function Hd(a, b, c, d) {
            var e, f, g, h;
            for (g = 1, h = 0, f = 0; d > f; ++f) e = Td(c, a, b + g), g <<= 1, g += e, h |= e << f;
            return h }

        function Id() {
            return Tf }

        function Jd() {}

        function Kd(a, b) {
            return a.NumBitLevels = b, a.Models = s(Bf, 0, -1, 1 << b, 1), a }

        function Ld(a, b, c) {
            var d, e, f;
            for (f = 1, e = a.NumBitLevels; 0 != e;) --e, d = c >>> e & 1, $d(b, a.Models, f, d), f = f << 1 | d }

        function Md(a, b) {
            var c, d, e, f;
            for (f = 0, e = 1, d = a.NumBitLevels; 0 != d;) --d, c = b >>> d & 1, f += ee(a.Models[e], c), e = (e << 1) + c;
            return f }

        function Nd(a, b, c) {
            var d, e, f;
            for (f = 1, e = 0; e < a.NumBitLevels; ++e) d = 1 & c, $d(b, a.Models, f, d), f = f << 1 | d, c >>= 1 }

        function Od(a, b) {
            var c, d, e, f;
            for (f = 0, e = 1, d = a.NumBitLevels; 0 != d; --d) c = 1 & b, b >>>= 1, f += ee(a.Models[e], c), e = e << 1 | c;
            return f }

        function Pd(a, b, c, d, e) {
            var f, g, h;
            for (h = 1, g = 0; d > g; ++g) f = 1 & e, $d(c, a, b + h, f), h = h << 1 | f, e >>= 1 }

        function Qd(a, b, c, d) {
            var e, f, g, h;
            for (h = 0, g = 1, f = c; 0 != f; --f) e = 1 & d, d >>>= 1, Zd(), h += Xe[(2047 & (a[b + g] - e ^ -e)) >>> 2], g = g << 1 | e;
            return h }

        function Rd() {
            return Uf }

        function Sd() {}

        function Td(a, b, c) {
            var d, e;
            return e = b[c], d = (a.Range >>> 11) * e, (-2147483648 ^ a.Code) < (-2147483648 ^ d) ? (a.Range = d, b[c] = e + (2048 - e >>> 5) << 16 >> 16, 0 == (-16777216 & a.Range) && (a.Code = a.Code << 8 | ga(a.Stream), a.Range <<= 8), 0) : (a.Range -= d, a.Code -= d, b[c] = e - (e >>> 5) << 16 >> 16, 0 == (-16777216 & a.Range) && (a.Code = a.Code << 8 | ga(a.Stream), a.Range <<= 8), 1) }

        function Ud(a, b) {
            var c, d, e;
            for (d = 0, c = b; 0 != c; --c) a.Range >>>= 1, e = a.Code - a.Range >>> 31, a.Code -= a.Range & e - 1, d = d << 1 | 1 - e, 0 == (-16777216 & a.Range) && (a.Code = a.Code << 8 | ga(a.Stream), a.Range <<= 8);
            return d }

        function Vd(a) {
            var b;
            for (a.Code = 0, a.Range = -1, b = 0; 5 > b; ++b) a.Code = a.Code << 8 | ga(a.Stream) }

        function Wd(a) {
            var b;
            for (b = 0; b < a.length; ++b) a[b] = 1024 }

        function Xd() {
            return Vf }

        function Yd() {}

        function Zd() { Zd = se;
            var a, b, c, d;
            for (Xe = s(tf, 0, -1, 512, 1), b = 8; b >= 0; --b)
                for (d = 1 << 9 - b - 1, a = 1 << 9 - b, c = d; a > c; ++c) Xe[c] = (b << 6) + (a - c << 6 >>> 9 - b - 1) }

        function $d(a, b, c, d) {
            var e, f;
            f = b[c], e = (a.Range >>> 11) * f, 0 == d ? (a.Range = e, b[c] = f + (2048 - f >>> 5) << 16 >> 16) : (a.Low = F(a.Low, H(N(e), He)), a.Range -= e, b[c] = f - (f >>> 5) << 16 >> 16), 0 == (-16777216 & a.Range) && (a.Range <<= 8, de(a)) }

        function _d(a, b, c) {
            var d;
            for (d = c - 1; d >= 0; --d) a.Range >>>= 1, 1 == (b >>> d & 1) && (a.Low = F(a.Low, N(a.Range))), 0 == (-16777216 & a.Range) && (a.Range <<= 8, de(a)) }

        function ae(a) {
            var b;
            for (b = 0; 5 > b; ++b) de(a) }

        function be(a) {
            return F(F(N(a._cacheSize), a._position), Ce) }

        function ce(a) { a._position = Ae, a.Low = Ae, a.Range = -1, a._cacheSize = 1, a._cache = 0 }

        function de(a) {
            var b, c;
            if (b = P(X(a.Low, 32)), 0 != b || I(a.Low, Ge) < 0) { a._position = F(a._position, N(a._cacheSize)), c = a._cache;
                do pa(a.Stream, c + b), c = 255; while (0 != --a._cacheSize);
                a._cache = P(a.Low) >>> 24 }++a._cacheSize, a.Low = V(H(a.Low, Ee), 8) }

        function ee(a, b) {
            return Zd(), Xe[(2047 & (a - b ^ -b)) >>> 2] }

        function fe(a) { Zd();
            var b;
            for (b = 0; b < a.length; ++b) a[b] = 1024 }

        function ge() {
            return Wf }

        function he() {}

        function ie(a) {
            var b, c, d, e, f;
            for (b = Za(new _a), c = 0; c < a.length; ++c)
                if (d = 255 & a[c], 0 == (128 & d)) {
                    if (0 == d) throw La(new Na, "invalid UTF-8");
                    o(b.data, String.fromCharCode(65535 & d)) } else if (192 == (224 & d)) {
                if (c + 1 >= a.length) throw La(new Na, "invalid UTF-8");
                if (e = 255 & a[++c], 128 != (192 & e)) throw La(new Na, "invalid UTF-8");
                n(b.data, String.fromCharCode((31 & d) << 6 & 65535 | 63 & e)) } else {
                if (224 != (240 & d)) throw La(new Na, "invalid UTF-8");
                if (c + 2 >= a.length) throw La(new Na, "invalid UTF-8");
                if (e = 255 & a[++c], 128 != (192 & e)) throw La(new Na, "invalid UTF-8");
                if (f = 255 & a[++c], 128 != (192 & f)) throw La(new Na, "invalid UTF-8");
                o(b.data, String.fromCharCode(65535 & ((15 & d) << 12 | (63 & e) << 6 | 63 & f))) }
            return p(b.data) }

        function je(a) {
            var b, c, d, e, f, g, h;
            for (h = a.length, g = s(nf, 0, -1, h, 1), Xa(a, 0, h, g, 0), c = g, e = 0, f = 0; f < a.length; ++f) b = c[f], b >= 1 && 127 >= b ? ++e : e += 0 == b || b >= 128 && 2047 >= b ? 2 : 3;
            for (d = s(ff, 0, -1, e, 1), e = 0, f = 0; f < a.length; ++f) b = c[f], b >= 1 && 127 >= b ? d[e++] = b << 24 >> 24 : 0 == b || b >= 128 && 2047 >= b ? (d[e++] = (192 | b >> 6 & 31) << 24 >> 24, d[e++] = (128 | 63 & b) << 24 >> 24) : (d[e++] = (224 | b >> 12 & 15) << 24 >> 24, d[e++] = (128 | b >> 6 & 63) << 24 >> 24, d[e++] = (128 | 63 & b) << 24 >> 24);
            return d }

        function ke(a) {
            return a }

        function le(a) {
            return a[1] + a[0] }

        function me() {
            function b() {
                var i;
                for (d = (new Date).getTime(); eb(h.c);)
                    if (c = le(h.c.chunker.inBytesProcessed) / le(h.c.length_0), (new Date).getTime() - d > 200) return g ? g(c) : "undefined" != typeof e && a(c, e), setTimeout(b, 0), !1;
                g ? g(1) : "undefined" != typeof e && a(1, e), i = oa(h.c.output).slice(0), f ? f(i) : "undefined" != typeof e && postMessage({ action: we, callback_num: e, result: i }) }
            var c, d, e, f, g, h = ke(new pe),
                i = arguments[0],
                j = arguments[1]; "function" == typeof arguments[2] ? (f = arguments[2], "function" == typeof arguments[3] && (g = arguments[3])) : e = arguments[2], h.mode = bg(j), h.c = ib(new kb, je(i), h.mode), g ? g(0) : "undefined" != typeof e && a(0, e), setTimeout(b, 1) }

        function ne() {
            function b() {
                var d;
                for (e = (new Date).getTime(); lb(i.d);)
                    if (c = le(i.d.chunker.decoder.nowPos64) / le(i.d.length_0), (new Date).getTime() - e > 200) return h ? h(c) : "undefined" != typeof f && a(c, f), setTimeout(b, 0), !1;
                h ? h(1) : "undefined" != typeof f && a(1, f), d = ie(oa(i.d.output)), g ? g(d) : "undefined" != typeof f && postMessage({ action: xe, callback_num: f, result: d }) }
            var c, d, e, f, g, h, i = ke(new pe),
                j = arguments[0]; "function" == typeof arguments[1] ? (g = arguments[1], "function" == typeof arguments[2] && (h = arguments[2])) : f = arguments[1], d = t(ff, 0, -1, j), i.d = pb(new rb, d), h ? h(0) : "undefined" != typeof f && a(0, f), setTimeout(b, 0) }

        function oe() {
            return ag }

        function pe() {}

        function qe() {!!$stats && $stats({ moduleName: te, subSystem: "startup", evtGroup: "moduleStartup", millis: (new Date).getTime(), type: "onModuleLoadStart", className: "org.dellroad.lzma.demo.client.LZMADemo" }) }

        function re(a, b, c) {
            if (te = b, ue = c, a) try { qe() } catch (d) { a(b) } else qe() }

        function se() {}
        var te, ue, ve, we = 1,
            xe = 2,
            ye = [0, -0x8000000000000000],
            ze = [4294967295, -4294967296],
            Ae = [0, 0],
            Be = [1, 0],
            Ce = [4, 0],
            De = [4096, 0],
            Ee = [16777215, 0],
            Fe = [16777216, 0],
            Ge = [4278190080, 0],
            He = [4294967295, 0],
            Ie = [4294967295, 0x7fffffff00000000];
        ve = c.prototype = {}, ve.getClass$ = b, ve.typeMarker$ = se, ve.typeId$ = 1, ve = e.prototype = new c, ve.getClass$ = d, ve.typeId$ = 3, ve.detailMessage = null, ve = g.prototype = new e, ve.getClass$ = f, ve.typeId$ = 4, ve = j.prototype = new g, ve.getClass$ = i, ve.typeId$ = 5, ve = m.prototype = new j, ve.getClass$ = l, ve.typeId$ = 6, ve = v.prototype = new c, ve.getClass$ = r, ve.typeId$ = 0, ve.arrayClass$ = null, ve.length = 0, ve.queryId$ = 0;
        var Je, Ke, Le, Me, Ne, Oe, Pe, Qe, Re, Se, Te, Ue = [{}, {}, { 1: 1 }, { 2: 1 }, { 2: 1 }, { 2: 1 }, { 2: 1 }, { 2: 1, 10: 1 }, { 2: 1 }, { 2: 1 }, { 2: 1 }, { 2: 1 }, { 2: 1 }, { 2: 1, 11: 1 }, { 2: 1 }, { 2: 1 }, { 2: 1 }, { 4: 1 }, { 5: 1 }, { 6: 1 }, { 7: 1 }, { 8: 1 }, { 9: 1 }];
        ve = da.prototype = new c, ve.getClass$ = ca, ve.typeId$ = 0, ve = ja.prototype = new da, ve.getClass$ = ia, ve.typeId$ = 0, ve.buf = null, ve.count = 0, ve.pos = 0, ve = la.prototype = new c, ve.getClass$ = ka, ve.typeId$ = 0, ve = sa.prototype = new la, ve.getClass$ = ra, ve.typeId$ = 0, ve.buf = null, ve.count = 0, ve = va.prototype = new g, ve.getClass$ = ua, ve.typeId$ = 7, ve = ya.prototype = new j, ve.getClass$ = xa, ve.typeId$ = 8, ve = Ba.prototype = new j, ve.getClass$ = Aa, ve.typeId$ = 9, ve = Ga.prototype = new c, ve.getClass$ = Fa, ve.typeId$ = 0, ve.typeName = null, ve = Ia.prototype = new j, ve.getClass$ = Ha, ve.typeId$ = 12, ve = Ka.prototype = new c, ve.getClass$ = Ja, ve.typeId$ = 0, ve = Na.prototype = new j, ve.getClass$ = Ma, ve.typeId$ = 13, ve = Pa.prototype = new j, ve.getClass$ = Oa, ve.typeId$ = 14, ve = Ra.prototype = new j, ve.getClass$ = Qa, ve.typeId$ = 15, ve = Va.prototype = new j, ve.getClass$ = Ua, ve.typeId$ = 16, ve = String.prototype, ve.getClass$ = Ya, ve.typeId$ = 2, ve = _a.prototype = new c, ve.getClass$ = $a, ve.typeId$ = 0, ve = db.prototype = new Ka, ve.getClass$ = cb, ve.typeId$ = 0, ve.dictionarySize = 0, ve.fb = 0, ve.lc = 0, ve.lp = 0, ve.matchFinder = 0, ve.pb = 0, ve = hb.prototype = new c, ve.getClass$ = gb, ve.typeId$ = 0, ve.chunker = null, ve = kb.prototype = new hb, ve.getClass$ = jb, ve.typeId$ = 0, ve.output = null, ve = ob.prototype = new c, ve.getClass$ = nb, ve.typeId$ = 0, ve.chunker = null, ve.exception = null, ve.length_0 = Ae, ve = rb.prototype = new ob, ve.getClass$ = qb, ve.typeId$ = 0, ve.output = null, ve = Bb.prototype = new c, ve.getClass$ = Ab, ve.typeId$ = 0, ve._blockSize = 0, ve._bufferBase = null, ve._bufferOffset = 0, ve._keepSizeAfter = 0, ve._keepSizeBefore = 0, ve._pointerToLastSafePosition = 0, ve._pos = 0, ve._posLimit = 0, ve._stream = null, ve._streamEndWasReached = !1, ve._streamPos = 0, ve = Lb.prototype = new Bb, ve.getClass$ = Kb, ve.typeId$ = 0, ve.HASH_ARRAY = !0, ve._cutValue = 255, ve._cyclicBufferPos = 0, ve._cyclicBufferSize = 0, ve._hash = null, ve._hashMask = 0, ve._hashSizeSum = 0, ve._matchMaxLen = 0, ve._son = null, ve.kFixHashSize = 66560, ve.kMinMatchCheck = 4, ve.kNumHashDirectBytes = 0;
        var Ve;
        ve = Vb.prototype = new c, ve.getClass$ = Ub, ve.typeId$ = 0, ve._buffer = null, ve._pos = 0, ve._stream = null, ve._streamPos = 0, ve._windowSize = 0, ve = cc.prototype = new c, ve.getClass$ = bc, ve.typeId$ = 0, ve.alive = !1, ve.decoder = null, ve.encoder = null, ve = mc.prototype = new c, ve.getClass$ = lc, ve.typeId$ = 0, ve.m_DictionarySize = -1, ve.m_DictionarySizeCheck = -1, ve.m_PosStateMask = 0, ve.nowPos64 = Ae, ve.outSize = Ae, ve.prevByte = 0, ve.rep0 = 0, ve.rep1 = 0, ve.rep2 = 0, ve.rep3 = 0, ve.state = 0, ve = sc.prototype = new c, ve.getClass$ = rc, ve.typeId$ = 0, ve.m_NumPosStates = 0, ve = xc.prototype = new c, ve.getClass$ = wc, ve.typeId$ = 0, ve.m_Coders = null, ve.m_NumPosBits = 0, ve.m_NumPrevBits = 0, ve.m_PosMask = 0, ve = Cc.prototype = new c, ve.getClass$ = Bc, ve.typeId$ = 17, ve = cd.prototype = new c, ve.getClass$ = bd, ve.typeId$ = 0, ve._additionalOffset = 0, ve._alignPriceCount = 0, ve._dictionarySize = 4194304, ve._dictionarySizePrev = -1, ve._distTableSize = 44, ve._finished = !1, ve._inStream = null, ve._longestMatchLength = 0, ve._longestMatchWasFound = !1, ve._matchFinder = null, ve._matchFinderType = 1, ve._matchPriceCount = 0, ve._needReleaseMFStream = !1, ve._numDistancePairs = 0, ve._numFastBytes = 32, ve._numFastBytesPrev = -1, ve._numLiteralContextBits = 3, ve._numLiteralPosStateBits = 0, ve._optimumCurrentIndex = 0, ve._optimumEndIndex = 0, ve._posStateBits = 2, ve._posStateMask = 3, ve._previousByte = 0, ve._state = 0, ve._writeEndMark = !1, ve.backRes = 0, ve.nowPos64 = Ae;
        var We;
        ve = id.prototype = new c, ve.getClass$ = hd, ve.typeId$ = 0, ve = od.prototype = new id, ve.getClass$ = nd, ve.typeId$ = 0, ve._tableSize = 0, ve = td.prototype = new c, ve.getClass$ = sd, ve.typeId$ = 0, ve.m_Coders = null, ve.m_NumPosBits = 0, ve.m_NumPrevBits = 0, ve.m_PosMask = 0, ve = zd.prototype = new c, ve.getClass$ = yd, ve.typeId$ = 18, ve = Dd.prototype = new c, ve.getClass$ = Cd, ve.typeId$ = 19, ve.BackPrev = 0, ve.BackPrev2 = 0, ve.Backs0 = 0, ve.Backs1 = 0, ve.Backs2 = 0, ve.Backs3 = 0, ve.PosPrev = 0, ve.PosPrev2 = 0, ve.Prev1IsChar = !1, ve.Prev2 = !1, ve.Price = 0, ve.State = 0, ve = Jd.prototype = new c, ve.getClass$ = Id, ve.typeId$ = 20, ve.Models = null, ve.NumBitLevels = 0, ve = Sd.prototype = new c, ve.getClass$ = Rd, ve.typeId$ = 21, ve.Models = null, ve.NumBitLevels = 0, ve = Yd.prototype = new c, ve.getClass$ = Xd, ve.typeId$ = 0, ve.Code = 0, ve.Range = 0, ve.Stream = null, ve = he.prototype = new c, ve.getClass$ = ge, ve.typeId$ = 0, ve.Low = Ae, ve.Range = 0, ve.Stream = null, ve._cache = 0, ve._cacheSize = 0, ve._position = Ae;
        var Xe;
        ve = pe.prototype = new c, ve.getClass$ = oe, ve.typeId$ = 0, ve.c = null, ve.d = null;
        var Ye = Da("java.lang.", "Object"),
            Ze = Da("java.lang.", "Throwable"),
            $e = Da("java.lang.", "Exception"),
            _e = Da("java.lang.", "RuntimeException"),
            af = Da("com.google.gwt.core.client.", "JavaScriptException"),
            bf = Da("com.google.gwt.core.client.", "JavaScriptObject$"),
            cf = Ca("", "[[D"),
            df = Da("java.io.", "InputStream"),
            ef = Da("java.io.", "ByteArrayInputStream"),
            ff = Ca("", "[B"),
            gf = Da("java.io.", "OutputStream"),
            hf = Da("java.io.", "ByteArrayOutputStream"),
            jf = Da("java.io.", "IOException"),
            kf = Da("java.lang.", "Enum"),
            lf = Da("java.lang.", "ArithmeticException"),
            mf = Da("java.lang.", "ArrayStoreException"),
            nf = Ca("", "[C"),
            of = Da("java.lang.", "Class"),
            pf = Da("java.lang.", "ClassCastException"),
            qf = Da("java.lang.", "IllegalArgumentException"),
            rf = Da("java.lang.", "IllegalStateException"),
            sf = Da("java.lang.", "IndexOutOfBoundsException"),
            tf = Ca("", "[I"),
            uf = Da("java.lang.", "NullPointerException"),
            vf = Da("java.lang.", "String"),
            wf = Da("java.lang.", "StringBuilder"),
            xf = Da("org.dellroad.lzma.client.SevenZip.Compression.LZ.", "InWindow"),
            yf = Da("org.dellroad.lzma.client.SevenZip.Compression.LZ.", "BinTree"),
            zf = Da("org.dellroad.lzma.client.SevenZip.Compression.LZ.", "OutWindow"),
            Af = Da("org.dellroad.lzma.client.SevenZip.Compression.LZMA.", "Chunker"),
            Bf = Ca("", "[S"),
            Cf = Ca("[Lorg.dellroad.lzma.client.SevenZip.Compression.RangeCoder.", "BitTreeDecoder;"),
            Df = Da("org.dellroad.lzma.client.SevenZip.Compression.LZMA.", "Decoder"),
            Ef = Da("org.dellroad.lzma.client.SevenZip.Compression.LZMA.", "Decoder$LenDecoder"),
            Ff = Ca("[Lorg.dellroad.lzma.client.SevenZip.Compression.LZMA.", "Decoder$LiteralDecoder$Decoder2;"),
            Gf = Da("org.dellroad.lzma.client.SevenZip.Compression.LZMA.", "Decoder$LiteralDecoder"),
            Hf = Da("org.dellroad.lzma.client.SevenZip.Compression.LZMA.", "Decoder$LiteralDecoder$Decoder2"),
            If = Ca("[Lorg.dellroad.lzma.client.SevenZip.Compression.LZMA.", "Encoder$Optimal;"),
            Jf = Ca("[Lorg.dellroad.lzma.client.SevenZip.Compression.RangeCoder.", "BitTreeEncoder;"),
            Kf = Ca("", "[J"),
            Lf = Ca("", "[Z"),
            Mf = Da("org.dellroad.lzma.client.SevenZip.Compression.LZMA.", "Encoder"),
            Nf = Ca("[Lorg.dellroad.lzma.client.SevenZip.Compression.LZMA.", "Encoder$LiteralEncoder$Encoder2;"),
            Of = Da("org.dellroad.lzma.client.SevenZip.Compression.LZMA.", "Encoder$LiteralEncoder"),
            Pf = Da("org.dellroad.lzma.client.SevenZip.Compression.LZMA.", "Encoder$LiteralEncoder$Encoder2"),
            Qf = Da("org.dellroad.lzma.client.SevenZip.Compression.LZMA.", "Encoder$LenEncoder"),
            Rf = Da("org.dellroad.lzma.client.SevenZip.Compression.LZMA.", "Encoder$LenPriceTableEncoder"),
            Sf = Da("org.dellroad.lzma.client.SevenZip.Compression.LZMA.", "Encoder$Optimal"),
            Tf = Da("org.dellroad.lzma.client.SevenZip.Compression.RangeCoder.", "BitTreeDecoder"),
            Uf = Da("org.dellroad.lzma.client.SevenZip.Compression.RangeCoder.", "BitTreeEncoder"),
            Vf = Da("org.dellroad.lzma.client.SevenZip.Compression.RangeCoder.", "Decoder"),
            Wf = Da("org.dellroad.lzma.client.SevenZip.Compression.RangeCoder.", "Encoder"),
            Xf = Ea("org.dellroad.lzma.client.", "CompressionMode"),
            Yf = Da("org.dellroad.lzma.client.", "LZMACompressor"),
            Zf = Da("org.dellroad.lzma.client.", "LZMAByteArrayCompressor"),
            $f = Da("org.dellroad.lzma.client.", "LZMADecompressor"),
            _f = Da("org.dellroad.lzma.client.", "LZMAByteArrayDecompressor"),
            ag = Da("org.dellroad.lzma.demo.client.", "LZMADemo");
        re(function() {}, "lzma_demo", "");
        var bg = function() {
            function a(a) {
                return !isNaN(parseFloat(a)) && isFinite(a) }
            var b = [{ dictionarySize: 16, fb: 64, matchFinder: 0, lc: 3, lp: 0, pb: 2 }, { dictionarySize: 20, fb: 64, matchFinder: 0, lc: 3, lp: 0, pb: 2 }, { dictionarySize: 19, fb: 64, matchFinder: 1, lc: 3, lp: 0, pb: 2 }, { dictionarySize: 20, fb: 64, matchFinder: 1, lc: 3, lp: 0, pb: 2 }, { dictionarySize: 21, fb: 128, matchFinder: 1, lc: 3, lp: 0, pb: 2 }, { dictionarySize: 22, fb: 128, matchFinder: 1, lc: 3, lp: 0, pb: 2 }, { dictionarySize: 23, fb: 128, matchFinder: 1, lc: 3, lp: 0, pb: 2 }, { dictionarySize: 24, fb: 255, matchFinder: 1, lc: 3, lp: 0, pb: 2 }, { dictionarySize: 25, fb: 255, matchFinder: 1, lc: 3, lp: 0, pb: 2 }];
            return function(c) {
                return a(c) ? 1 > c ? c = 1 : c > 9 && (c = 9) : c = 1, b[c - 1] } }();
        return { compress: me, decompress: ne }
    }();
    this.LZMA = LZMA;
    var CSS_PROP_BIT_QUANTITY = 1,
        CSS_PROP_BIT_HASH_VALUE = 2,
        CSS_PROP_BIT_NEGATIVE_QUANTITY = 4,
        CSS_PROP_BIT_QSTRING = 8,
        CSS_PROP_BIT_URL = 16,
        CSS_PROP_BIT_UNRESERVED_WORD = 64,
        CSS_PROP_BIT_UNICODE_RANGE = 128,
        CSS_PROP_BIT_GLOBAL_NAME = 512,
        CSS_PROP_BIT_PROPERTY_NAME = 1024,
        cssSchema = function() {
            var a = [
                    ["aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige", "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown", "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue", "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod", "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen", "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen", "darkslateblue", "darkslategray", "darkturquoise", "darkviolet", "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick", "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite", "gold", "goldenrod", "gray", "green", "greenyellow", "honeydew", "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender", "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral", "lightcyan", "lightgoldenrodyellow", "lightgreen", "lightgrey", "lightpink", "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray", "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta", "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple", "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise", "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin", "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered", "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred", "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue", "purple", "red", "rosybrown", "royalblue", "saddlebrown", "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue", "slateblue", "slategray", "snow", "springgreen", "steelblue", "tan", "teal", "thistle", "tomato", "transparent", "turquoise", "violet", "wheat", "white", "whitesmoke", "yellow", "yellowgreen"],
                    ["all-scroll", "col-resize", "crosshair", "default", "e-resize", "hand", "help", "move", "n-resize", "ne-resize", "no-drop", "not-allowed", "nw-resize", "pointer", "progress", "row-resize", "s-resize", "se-resize", "sw-resize", "text", "vertical-text", "w-resize", "wait"],
                    ["armenian", "decimal", "decimal-leading-zero", "disc", "georgian", "lower-alpha", "lower-greek", "lower-latin", "lower-roman", "square", "upper-alpha", "upper-latin", "upper-roman"],
                    ["100", "200", "300", "400", "500", "600", "700", "800", "900", "bold", "bolder", "lighter"],
                    ["block-level", "inline-level", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row", "table-row-group"],
                    ["condensed", "expanded", "extra-condensed", "extra-expanded", "narrower", "semi-condensed", "semi-expanded", "ultra-condensed", "ultra-expanded", "wider"],
                    ["inherit", "inline", "inline-block", "inline-box", "inline-flex", "inline-grid", "inline-list-item", "inline-stack", "inline-table", "run-in"],
                    ["behind", "center-left", "center-right", "far-left", "far-right", "left-side", "leftwards", "right-side", "rightwards"],
                    ["large", "larger", "small", "smaller", "x-large", "x-small", "xx-large", "xx-small"],
                    ["dashed", "dotted", "double", "groove", "outset", "ridge", "solid"],
                    ["ease", "ease-in", "ease-in-out", "ease-out", "linear", "step-end", "step-start"],
                    ["at", "closest-corner", "closest-side", "ellipse", "farthest-corner", "farthest-side"],
                    ["baseline", "middle", "sub", "super", "text-bottom", "text-top"],
                    ["caption", "icon", "menu", "message-box", "small-caption", "status-bar"],
                    ["fast", "faster", "slow", "slower", "x-fast", "x-slow"],
                    ["above", "below", "higher", "level", "lower"],
                    ["cursive", "fantasy", "monospace", "sans-serif", "serif"],
                    ["loud", "silent", "soft", "x-loud", "x-soft"],
                    ["no-repeat", "repeat-x", "repeat-y", "round", "space"],
                    ["blink", "line-through", "overline", "underline"],
                    ["block", "flex", "grid", "table"],
                    ["high", "low", "x-high", "x-low"],
                    ["nowrap", "pre", "pre-line", "pre-wrap"],
                    ["absolute", "relative", "static"],
                    ["alternate", "alternate-reverse", "reverse"],
                    ["border-box", "content-box", "padding-box"],
                    ["capitalize", "lowercase", "uppercase"],
                    ["child", "female", "male"],
                    ["=", "opacity"],
                    ["backwards", "forwards"],
                    ["bidi-override", "embed"],
                    ["bottom", "top"],
                    ["break-all", "keep-all"],
                    ["clip", "ellipsis"],
                    ["contain", "cover"],
                    ["continuous", "digits"],
                    ["end", "start"],
                    ["flat", "preserve-3d"],
                    ["hide", "show"],
                    ["horizontal", "vertical"],
                    ["inside", "outside"],
                    ["italic", "oblique"],
                    ["left", "right"],
                    ["ltr", "rtl"],
                    ["no-content", "no-display"],
                    ["paused", "running"],
                    ["suppress", "unrestricted"],
                    ["thick", "thin"],
                    [","],
                    ["/"],
                    ["all"],
                    ["always"],
                    ["auto"],
                    ["avoid"],
                    ["both"],
                    ["break-word"],
                    ["center"],
                    ["circle"],
                    ["code"],
                    ["collapse"],
                    ["contents"],
                    ["fixed"],
                    ["hidden"],
                    ["infinite"],
                    ["inset"],
                    ["invert"],
                    ["justify"],
                    ["list-item"],
                    ["local"],
                    ["medium"],
                    ["mix"],
                    ["none"],
                    ["normal"],
                    ["once"],
                    ["repeat"],
                    ["scroll"],
                    ["separate"],
                    ["small-caps"],
                    ["spell-out"],
                    ["to"],
                    ["visible"]
                ],
                b = {
                    animation: { cssPropBits: 517, cssLitGroup: [a[10], a[24], a[29], a[45], a[48], a[54], a[63], a[71], a[72]], cssFns: ["cubic-bezier()", "steps()"] },
                    "animation-delay": { cssPropBits: 5, cssLitGroup: [a[48]], cssFns: [] },
                    "animation-direction": { cssPropBits: 0, cssLitGroup: [a[24], a[48], a[72]], cssFns: [] },
                    "animation-duration": "animation-delay",
                    "animation-fill-mode": { cssPropBits: 0, cssLitGroup: [a[29], a[48], a[54], a[71]], cssFns: [] },
                    "animation-iteration-count": { cssPropBits: 5, cssLitGroup: [a[48], a[63]], cssFns: [] },
                    "animation-name": { cssPropBits: 512, cssLitGroup: [a[48], a[71]], cssFns: [] },
                    "animation-play-state": { cssPropBits: 0, cssLitGroup: [a[45], a[48]], cssFns: [] },
                    "animation-timing-function": { cssPropBits: 0, cssLitGroup: [a[10], a[48]], cssFns: ["cubic-bezier()", "steps()"] },
                    appearance: { cssPropBits: 0, cssLitGroup: [a[71]], cssFns: [] },
                    azimuth: { cssPropBits: 5, cssLitGroup: [a[7], a[42], a[56]], cssFns: [] },
                    "backface-visibility": { cssPropBits: 0, cssLitGroup: [a[59], a[62], a[80]], cssFns: [] },
                    background: { cssPropBits: 23, cssLitGroup: [a[0], a[18], a[25], a[31], a[34], a[42], a[48], a[49], a[52], a[56], a[61], a[68], a[71], a[74], a[75]], cssFns: ["image()", "linear-gradient()", "radial-gradient()", "repeating-linear-gradient()", "repeating-radial-gradient()", "rgb()", "rgba()"] },
                    "background-attachment": { cssPropBits: 0, cssLitGroup: [a[48], a[61], a[68], a[75]], cssFns: [] },
                    "background-color": { cssPropBits: 2, cssLitGroup: [a[0]], cssFns: ["rgb()", "rgba()"] },
                    "background-image": { cssPropBits: 16, cssLitGroup: [a[48], a[71]], cssFns: ["image()", "linear-gradient()", "radial-gradient()", "repeating-linear-gradient()", "repeating-radial-gradient()"] },
                    "background-position": { cssPropBits: 5, cssLitGroup: [a[31], a[42], a[48], a[56]], cssFns: [] },
                    "background-repeat": { cssPropBits: 0, cssLitGroup: [a[18], a[48], a[74]], cssFns: [] },
                    "background-size": { cssPropBits: 5, cssLitGroup: [a[34], a[48], a[52]], cssFns: [] },
                    border: { cssPropBits: 7, cssLitGroup: [a[0], a[9], a[47], a[62], a[64], a[69], a[71]], cssFns: ["rgb()", "rgba()"] },
                    "border-bottom": "border",
                    "border-bottom-color": "background-color",
                    "border-bottom-left-radius": { cssPropBits: 5, cssFns: [] },
                    "border-bottom-right-radius": "border-bottom-left-radius",
                    "border-bottom-style": { cssPropBits: 0, cssLitGroup: [a[9], a[62], a[64], a[71]], cssFns: [] },
                    "border-bottom-width": { cssPropBits: 5, cssLitGroup: [a[47], a[69]], cssFns: [] },
                    "border-collapse": { cssPropBits: 0, cssLitGroup: [a[59], a[76]], cssFns: [] },
                    "border-color": "background-color",
                    "border-left": "border",
                    "border-left-color": "background-color",
                    "border-left-style": "border-bottom-style",
                    "border-left-width": "border-bottom-width",
                    "border-radius": { cssPropBits: 5, cssLitGroup: [a[49]], cssFns: [] },
                    "border-right": "border",
                    "border-right-color": "background-color",
                    "border-right-style": "border-bottom-style",
                    "border-right-width": "border-bottom-width",
                    "border-spacing": "border-bottom-left-radius",
                    "border-style": "border-bottom-style",
                    "border-top": "border",
                    "border-top-color": "background-color",
                    "border-top-left-radius": "border-bottom-left-radius",
                    "border-top-right-radius": "border-bottom-left-radius",
                    "border-top-style": "border-bottom-style",
                    "border-top-width": "border-bottom-width",
                    "border-width": "border-bottom-width",
                    bottom: { cssPropBits: 5, cssLitGroup: [a[52]], cssFns: [] },
                    box: { cssPropBits: 0, cssLitGroup: [a[60], a[71], a[72]], cssFns: [] },
                    "box-shadow": { cssPropBits: 7, cssLitGroup: [a[0], a[48], a[64], a[71]], cssFns: ["rgb()", "rgba()"] },
                    "box-sizing": { cssPropBits: 0, cssLitGroup: [a[25]], cssFns: [] },
                    "caption-side": { cssPropBits: 0, cssLitGroup: [a[31]], cssFns: [] },
                    clear: { cssPropBits: 0, cssLitGroup: [a[42], a[54], a[71]], cssFns: [] },
                    clip: { cssPropBits: 0, cssLitGroup: [a[52]], cssFns: ["rect()"] },
                    color: "background-color",
                    content: { cssPropBits: 8, cssLitGroup: [a[71], a[72]], cssFns: [] },
                    cue: { cssPropBits: 16, cssLitGroup: [a[71]], cssFns: [] },
                    "cue-after": "cue",
                    "cue-before": "cue",
                    cursor: { cssPropBits: 16, cssLitGroup: [a[1], a[48], a[52]], cssFns: [] },
                    direction: { cssPropBits: 0, cssLitGroup: [a[43]], cssFns: [] },
                    display: { cssPropBits: 0, cssLitGroup: [a[4], a[6], a[20], a[52], a[67], a[71]], cssFns: [] },
                    "display-extras": { cssPropBits: 0, cssLitGroup: [a[67], a[71]], cssFns: [] },
                    "display-inside": { cssPropBits: 0, cssLitGroup: [a[20], a[52]], cssFns: [] },
                    "display-outside": { cssPropBits: 0, cssLitGroup: [a[4], a[71]], cssFns: [] },
                    elevation: { cssPropBits: 5, cssLitGroup: [a[15]], cssFns: [] },
                    "empty-cells": { cssPropBits: 0, cssLitGroup: [a[38]], cssFns: [] },
                    filter: { cssPropBits: 0, cssFns: ["alpha()"] },
                    "float": { cssPropBits: 0, cssLitGroup: [a[42], a[71]], cssFns: [] },
                    font: { cssPropBits: 73, cssLitGroup: [a[3], a[8], a[13], a[16], a[41], a[48], a[49], a[69], a[72], a[77]], cssFns: [] },
                    "font-family": { cssPropBits: 72, cssLitGroup: [a[16], a[48]], cssFns: [] },
                    "font-size": { cssPropBits: 1, cssLitGroup: [a[8], a[69]], cssFns: [] },
                    "font-stretch": { cssPropBits: 0, cssLitGroup: [a[5], a[72]], cssFns: [] },
                    "font-style": { cssPropBits: 0, cssLitGroup: [a[41], a[72]], cssFns: [] },
                    "font-variant": { cssPropBits: 0, cssLitGroup: [a[72], a[77]], cssFns: [] },
                    "font-weight": { cssPropBits: 0, cssLitGroup: [a[3], a[72]], cssFns: [] },
                    height: "bottom",
                    left: "bottom",
                    "letter-spacing": { cssPropBits: 5, cssLitGroup: [a[72]], cssFns: [] },
                    "line-height": { cssPropBits: 1, cssLitGroup: [a[72]], cssFns: [] },
                    "list-style": { cssPropBits: 16, cssLitGroup: [a[2], a[40], a[57], a[71]], cssFns: ["image()", "linear-gradient()", "radial-gradient()", "repeating-linear-gradient()", "repeating-radial-gradient()"] },
                    "list-style-image": { cssPropBits: 16, cssLitGroup: [a[71]], cssFns: ["image()", "linear-gradient()", "radial-gradient()", "repeating-linear-gradient()", "repeating-radial-gradient()"] },
                    "list-style-position": { cssPropBits: 0, cssLitGroup: [a[40]], cssFns: [] },
                    "list-style-type": { cssPropBits: 0, cssLitGroup: [a[2], a[57], a[71]], cssFns: [] },
                    margin: "bottom",
                    "margin-bottom": "bottom",
                    "margin-left": "bottom",
                    "margin-right": "bottom",
                    "margin-top": "bottom",
                    "max-height": { cssPropBits: 1, cssLitGroup: [a[52], a[71]], cssFns: [] },
                    "max-width": "max-height",
                    "min-height": { cssPropBits: 1, cssLitGroup: [a[52]], cssFns: [] },
                    "min-width": "min-height",
                    opacity: { cssPropBits: 1, cssFns: [] },
                    outline: { cssPropBits: 7, cssLitGroup: [a[0], a[9], a[47], a[62], a[64], a[65], a[69], a[71]], cssFns: ["rgb()", "rgba()"] },
                    "outline-color": { cssPropBits: 2, cssLitGroup: [a[0], a[65]], cssFns: ["rgb()", "rgba()"] },
                    "outline-style": "border-bottom-style",
                    "outline-width": "border-bottom-width",
                    overflow: {
                        cssPropBits: 0,
                        cssLitGroup: [a[52], a[62], a[75], a[80]],
                        cssFns: []
                    },
                    "overflow-wrap": { cssPropBits: 0, cssLitGroup: [a[55], a[72]], cssFns: [] },
                    "overflow-x": { cssPropBits: 0, cssLitGroup: [a[44], a[52], a[62], a[75], a[80]], cssFns: [] },
                    "overflow-y": "overflow-x",
                    padding: "opacity",
                    "padding-bottom": "opacity",
                    "padding-left": "opacity",
                    "padding-right": "opacity",
                    "padding-top": "opacity",
                    "page-break-after": { cssPropBits: 0, cssLitGroup: [a[42], a[51], a[52], a[53]], cssFns: [] },
                    "page-break-before": "page-break-after",
                    "page-break-inside": { cssPropBits: 0, cssLitGroup: [a[52], a[53]], cssFns: [] },
                    pause: "border-bottom-left-radius",
                    "pause-after": "border-bottom-left-radius",
                    "pause-before": "border-bottom-left-radius",
                    perspective: { cssPropBits: 5, cssLitGroup: [a[71]], cssFns: [] },
                    "perspective-origin": { cssPropBits: 5, cssLitGroup: [a[31], a[42], a[56]], cssFns: [] },
                    pitch: { cssPropBits: 5, cssLitGroup: [a[21], a[69]], cssFns: [] },
                    "pitch-range": "border-bottom-left-radius",
                    "play-during": { cssPropBits: 16, cssLitGroup: [a[52], a[70], a[71], a[74]], cssFns: [] },
                    position: { cssPropBits: 0, cssLitGroup: [a[23]], cssFns: [] },
                    quotes: { cssPropBits: 8, cssLitGroup: [a[71]], cssFns: [] },
                    resize: { cssPropBits: 0, cssLitGroup: [a[39], a[54], a[71]], cssFns: [] },
                    richness: "border-bottom-left-radius",
                    right: "bottom",
                    speak: { cssPropBits: 0, cssLitGroup: [a[71], a[72], a[78]], cssFns: [] },
                    "speak-header": { cssPropBits: 0, cssLitGroup: [a[51], a[73]], cssFns: [] },
                    "speak-numeral": { cssPropBits: 0, cssLitGroup: [a[35]], cssFns: [] },
                    "speak-punctuation": { cssPropBits: 0, cssLitGroup: [a[58], a[71]], cssFns: [] },
                    "speech-rate": { cssPropBits: 5, cssLitGroup: [a[14], a[69]], cssFns: [] },
                    stress: "border-bottom-left-radius",
                    "table-layout": { cssPropBits: 0, cssLitGroup: [a[52], a[61]], cssFns: [] },
                    "text-align": { cssPropBits: 0, cssLitGroup: [a[42], a[56], a[66]], cssFns: [] },
                    "text-decoration": { cssPropBits: 0, cssLitGroup: [a[19], a[71]], cssFns: [] },
                    "text-indent": "border-bottom-left-radius",
                    "text-overflow": { cssPropBits: 8, cssLitGroup: [a[33]], cssFns: [] },
                    "text-shadow": "box-shadow",
                    "text-transform": { cssPropBits: 0, cssLitGroup: [a[26], a[71]], cssFns: [] },
                    "text-wrap": { cssPropBits: 0, cssLitGroup: [a[46], a[71], a[72]], cssFns: [] },
                    top: "bottom",
                    transform: { cssPropBits: 0, cssLitGroup: [a[71]], cssFns: ["matrix()", "perspective()", "rotate()", "rotate3d()", "rotatex()", "rotatey()", "rotatez()", "scale()", "scale3d()", "scalex()", "scaley()", "scalez()", "skew()", "skewx()", "skewy()", "translate()", "translate3d()", "translatex()", "translatey()", "translatez()"] },
                    "transform-origin": "perspective-origin",
                    "transform-style": { cssPropBits: 0, cssLitGroup: [a[37]], cssFns: [] },
                    transition: { cssPropBits: 1029, cssLitGroup: [a[10], a[48], a[50], a[71]], cssFns: ["cubic-bezier()", "steps()"] },
                    "transition-delay": "animation-delay",
                    "transition-duration": "animation-delay",
                    "transition-property": { cssPropBits: 1024, cssLitGroup: [a[48], a[50]], cssFns: [] },
                    "transition-timing-function": "animation-timing-function",
                    "unicode-bidi": { cssPropBits: 0, cssLitGroup: [a[30], a[72]], cssFns: [] },
                    "vertical-align": { cssPropBits: 5, cssLitGroup: [a[12], a[31]], cssFns: [] },
                    visibility: "backface-visibility",
                    "voice-family": { cssPropBits: 8, cssLitGroup: [a[27], a[48]], cssFns: [] },
                    volume: { cssPropBits: 1, cssLitGroup: [a[17], a[69]], cssFns: [] },
                    "white-space": { cssPropBits: 0, cssLitGroup: [a[22], a[72]], cssFns: [] },
                    width: "min-height",
                    "word-break": { cssPropBits: 0, cssLitGroup: [a[32], a[72]], cssFns: [] },
                    "word-spacing": "letter-spacing",
                    "word-wrap": "overflow-wrap",
                    "z-index": "bottom",
                    zoom: "line-height",
                    "cubic-bezier()": "animation-delay",
                    "steps()": { cssPropBits: 5, cssLitGroup: [a[36], a[48]], cssFns: [] },
                    "image()": { cssPropBits: 18, cssLitGroup: [a[0], a[48]], cssFns: ["rgb()", "rgba()"] },
                    "linear-gradient()": { cssPropBits: 7, cssLitGroup: [a[0], a[31], a[42], a[48], a[79]], cssFns: ["rgb()", "rgba()"] },
                    "radial-gradient()": { cssPropBits: 7, cssLitGroup: [a[0], a[11], a[31], a[42], a[48], a[56], a[57]], cssFns: ["rgb()", "rgba()"] },
                    "repeating-linear-gradient()": "linear-gradient()",
                    "repeating-radial-gradient()": "radial-gradient()",
                    "rgb()": { cssPropBits: 1, cssLitGroup: [a[48]], cssFns: [] },
                    "rgba()": "rgb()",
                    "rect()": { cssPropBits: 5, cssLitGroup: [a[48], a[52]], cssFns: [] },
                    "alpha()": { cssPropBits: 1, cssLitGroup: [a[28]], cssFns: [] },
                    "matrix()": "animation-delay",
                    "perspective()": "border-bottom-left-radius",
                    "rotate()": "border-bottom-left-radius",
                    "rotate3d()": "animation-delay",
                    "rotatex()": "border-bottom-left-radius",
                    "rotatey()": "border-bottom-left-radius",
                    "rotatez()": "border-bottom-left-radius",
                    "scale()": "animation-delay",
                    "scale3d()": "animation-delay",
                    "scalex()": "border-bottom-left-radius",
                    "scaley()": "border-bottom-left-radius",
                    "scalez()": "border-bottom-left-radius",
                    "skew()": "animation-delay",
                    "skewx()": "border-bottom-left-radius",
                    "skewy()": "border-bottom-left-radius",
                    "translate()": "animation-delay",
                    "translate3d()": "animation-delay",
                    "translatex()": "border-bottom-left-radius",
                    "translatey()": "border-bottom-left-radius",
                    "translatez()": "border-bottom-left-radius"
                };
            for (var c in b) "string" == typeof b[c] && Object.hasOwnProperty.call(b, c) && (b[c] = b[b[c]]);
            return b
        }();
    "undefined" != typeof window && (window.cssSchema = cssSchema);
    var lexCss, decodeCss;
    ! function() {
        function a(a) {
            var b = parseInt(a.substring(1), 16);
            return b > 65535 ? (b -= 65536, String.fromCharCode(55296 + (b >> 10), 56320 + (1023 & b))) : b == b ? String.fromCharCode(b) : a[1] < " " ? "" : a[1] }

        function b(a, b) {
            return '"' + a.replace(/[\u0000-\u001f\\\"<>]/g, b) + '"' }

        function c(a) {
            return e[a] || (e[a] = "\\" + a.charCodeAt(0).toString(16) + " ") }

        function d(a) {
            return f[a] || (f[a] = ("" > a ? "%0" : "%") + a.charCodeAt(0).toString(16)) }
        var e = { "\\": "\\\\" },
            f = { "\\": "%5c" },
            g = "[\\t\\n\\f ]",
            h = g + "*",
            i = "[\\n\\f]",
            j = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            k = "[\\u0080-\\ud7ff\\ue000-\\ufffd]|" + j,
            l = "[0-9a-fA-F]{1,6}" + g + "?",
            m = "(?:" + l + "|[\\u0020-\\u007e\\u0080-\\ud7ff\\ue000\\ufffd]|" + j + ")",
            n = "\\\\" + m,
            o = "(?:[\\t\\x21\\x23-\\x26\\x28-\\x5b\\x5d-\\x7e]|" + k + "|" + n + ")",
            p = "[^'\"\\n\\f\\\\]|\\\\[\\s\\S]",
            q = "\"(?:'|" + p + ')*"|\'(?:"|' + p + ")*'",
            r = "[-+]?(?:[0-9]+(?:[.][0-9]+)?|[.][0-9]+)",
            s = "(?:[a-zA-Z_]|" + k + "|" + n + ")",
            t = "(?:[a-zA-Z0-9_-]|" + k + "|" + n + ")",
            u = "-?" + s + t + "*",
            v = "(?:@?-?" + s + "|#)" + t + "*",
            w = r + "(?:%|" + u + ")?",
            x = "url[(]" + h + "(?:" + q + "|" + o + "*)" + h + "[)]",
            y = "U[+][0-9A-F?]{1,6}(?:-[0-9A-F]{1,6})?",
            z = "<!--",
            A = "-->",
            B = g + "+",
            C = "/(?:[*][^*]*[*]+(?:[^/][^*]*[*]+)*/|/[^\\n\\f]*)",
            D = "(?!url[(])" + u + "[(]",
            E = "[~|^$*]=",
            F = "[^\"'\\\\/]|/(?![/*])",
            G = "\\uFEFF",
            H = new RegExp([G, y, x, D, v, q, w, z, A, B, C, E, F].join("|"), "gi"),
            I = new RegExp("\\\\(?:" + m + "|" + i + ")", "g"),
            J = new RegExp("^url\\(" + h + "[\"']?|[\"']?" + h + "\\)$", "gi");
        decodeCss = function(b) {
            return b.replace(I, a) }, lexCss = function(a) { a = ("ï¿¿" + a).replace(/^\uffff/, ""), a = a.replace(/\r\n?/g, "\n");
            for (var e = a.match(H) || [], f = 0, g = " ", h = 0, i = e.length; i > h; ++h) {
                var j = decodeCss(e[h]),
                    k = j.length,
                    l = j.charCodeAt(0);
                j = l == '"'.charCodeAt(0) || l == "'".charCodeAt(0) ? b(j.substring(1, k - 1), c) : l == "/".charCodeAt(0) && k > 1 || "\\" == j || j == A || j == z || "\ufeff" == j || l <= " ".charCodeAt(0) ? " " : /url\(/i.test(j) ? "url(" + b(j.replace(J, ""), d) + ")" : j, (g != j || " " != j) && (e[f++] = g = j) }
            return e.length = f, e } }(), "undefined" != typeof window && (window.lexCss = lexCss, window.decodeCss = decodeCss);
    var URI = function() {
        function a(a) {
            var b = ("" + a).match(n);
            return b ? new i(j(b[1]), j(b[2]), j(b[3]), j(b[4]), j(b[5]), j(b[6]), j(b[7])) : null }

        function b(a, b, f, g, h, j, k) {
            var l = new i(d(a, o), d(b, o), c(f), g > 0 ? g.toString() : null, d(h, p), null, c(k));
            return j && ("string" == typeof j ? l.setRawQuery(j.replace(/[^?&=0-9A-Za-z_\-~.%]/g, e)) : l.setAllParameters(j)), l }

        function c(a) {
            return "string" == typeof a ? encodeURIComponent(a) : null }

        function d(a, b) {
            return "string" == typeof a ? encodeURI(a).replace(b, e) : null }

        function e(a) {
            var b = a.charCodeAt(0);
            return "%" + "0123456789ABCDEF".charAt(b >> 4 & 15) + "0123456789ABCDEF".charAt(15 & b) }

        function f(a) {
            return a.replace(/(^|\/)\.(?:\/|$)/g, "$1").replace(/\/{2,}/g, "/") }

        function g(a) {
            if (null === a) return null;
            for (var b, c = f(a), d = l;
                (b = c.replace(d, "$1")) != c; c = b);
            return c }

        function h(a, b) {
            var c = a.clone(),
                d = b.hasScheme();
            d ? c.setRawScheme(b.getRawScheme()) : d = b.hasCredentials(), d ? c.setRawCredentials(b.getRawCredentials()) : d = b.hasDomain(), d ? c.setRawDomain(b.getRawDomain()) : d = b.hasPort();
            var e = b.getRawPath(),
                f = g(e);
            if (d) c.setPort(b.getPort()), f = f && f.replace(m, "");
            else if (d = !!e) {
                if (47 !== f.charCodeAt(0)) {
                    var h = g(c.getRawPath() || "").replace(m, ""),
                        i = h.lastIndexOf("/") + 1;
                    f = g((i ? h.substring(0, i) : "") + g(e)).replace(m, "") } } else f = f && f.replace(m, ""), f !== e && c.setRawPath(f);
            return d ? c.setRawPath(f) : d = b.hasQuery(), d ? c.setRawQuery(b.getRawQuery()) : d = b.hasFragment(), d && c.setRawFragment(b.getRawFragment()), c }

        function i(a, b, c, d, e, f, g) { this.scheme_ = a, this.credentials_ = b, this.domain_ = c, this.port_ = d, this.path_ = e, this.query_ = f, this.fragment_ = g, this.paramCache_ = null }

        function j(a) {
            return "string" == typeof a && a.length > 0 ? a : null }
        var k = new RegExp("(/|^)(?:[^./][^/]*|\\.{2,}(?:[^./][^/]*)|\\.{3,}[^/]*)/\\.\\.(?:/|$)"),
            l = new RegExp(k),
            m = /^(?:\.\.\/)*(?:\.\.$)?/;
        i.prototype.toString = function() {
            var a = [];
            return null !== this.scheme_ && a.push(this.scheme_, ":"), null !== this.domain_ && (a.push("//"), null !== this.credentials_ && a.push(this.credentials_, "@"), a.push(this.domain_), null !== this.port_ && a.push(":", this.port_.toString())), null !== this.path_ && a.push(this.path_), null !== this.query_ && a.push("?", this.query_), null !== this.fragment_ && a.push("#", this.fragment_), a.join("") }, i.prototype.clone = function() {
            return new i(this.scheme_, this.credentials_, this.domain_, this.port_, this.path_, this.query_, this.fragment_) }, i.prototype.getScheme = function() {
            return this.scheme_ && decodeURIComponent(this.scheme_).toLowerCase() }, i.prototype.getRawScheme = function() {
            return this.scheme_ }, i.prototype.setScheme = function(a) {
            return this.scheme_ = d(a, o), this }, i.prototype.setRawScheme = function(a) {
            return this.scheme_ = a ? a : null, this }, i.prototype.hasScheme = function() {
            return null !== this.scheme_ }, i.prototype.getCredentials = function() {
            return this.credentials_ && decodeURIComponent(this.credentials_) }, i.prototype.getRawCredentials = function() {
            return this.credentials_ }, i.prototype.setCredentials = function(a) {
            return this.credentials_ = d(a, o), this }, i.prototype.setRawCredentials = function(a) {
            return this.credentials_ = a ? a : null, this }, i.prototype.hasCredentials = function() {
            return null !== this.credentials_ }, i.prototype.getDomain = function() {
            return this.domain_ && decodeURIComponent(this.domain_) }, i.prototype.getRawDomain = function() {
            return this.domain_ }, i.prototype.setDomain = function(a) {
            return this.setRawDomain(a && encodeURIComponent(a)) }, i.prototype.setRawDomain = function(a) {
            return this.domain_ = a ? a : null, this.setRawPath(this.path_) }, i.prototype.hasDomain = function() {
            return null !== this.domain_ }, i.prototype.getPort = function() {
            return this.port_ && decodeURIComponent(this.port_) }, i.prototype.setPort = function(a) {
            if (a) {
                if (a = Number(a), a !== (65535 & a)) throw new Error("Bad port number " + a);
                this.port_ = "" + a } else this.port_ = null;
            return this }, i.prototype.hasPort = function() {
            return null !== this.port_ }, i.prototype.getPath = function() {
            return this.path_ && decodeURIComponent(this.path_) }, i.prototype.getRawPath = function() {
            return this.path_ }, i.prototype.setPath = function(a) {
            return this.setRawPath(d(a, p)) }, i.prototype.setRawPath = function(a) {
            return a ? (a = String(a), this.path_ = !this.domain_ || /^\//.test(a) ? a : "/" + a) : this.path_ = null, this }, i.prototype.hasPath = function() {
            return null !== this.path_ }, i.prototype.getQuery = function() {
            return this.query_ && decodeURIComponent(this.query_).replace(/\+/g, " ") }, i.prototype.getRawQuery = function() {
            return this.query_ }, i.prototype.setQuery = function(a) {
            return this.paramCache_ = null, this.query_ = c(a), this }, i.prototype.setRawQuery = function(a) {
            return this.paramCache_ = null, this.query_ = a ? a : null, this }, i.prototype.hasQuery = function() {
            return null !== this.query_ }, i.prototype.setAllParameters = function(a) {
            if ("object" == typeof a && !(a instanceof Array) && (a instanceof Object || "[object Array]" !== Object.prototype.toString.call(a))) {
                var b = [],
                    c = -1;
                for (var d in a) {
                    var e = a[d]; "string" == typeof e && (b[++c] = d, b[++c] = e) }
                a = b }
            this.paramCache_ = null;
            for (var f = [], g = "", h = 0; h < a.length;) {
                var d = a[h++],
                    e = a[h++];
                f.push(g, encodeURIComponent(d.toString())), g = "&", e && f.push("=", encodeURIComponent(e.toString())) }
            return this.query_ = f.join(""), this }, i.prototype.checkParameterCache_ = function() {
            if (!this.paramCache_) {
                var a = this.query_;
                if (a) {
                    for (var b = a.split(/[&\?]/), c = [], d = -1, e = 0; e < b.length; ++e) {
                        var f = b[e].match(/^([^=]*)(?:=(.*))?$/);
                        c[++d] = decodeURIComponent(f[1]).replace(/\+/g, " "), c[++d] = decodeURIComponent(f[2] || "").replace(/\+/g, " ") }
                    this.paramCache_ = c } else this.paramCache_ = [] } }, i.prototype.setParameterValues = function(a, b) { "string" == typeof b && (b = [b]), this.checkParameterCache_();
            for (var c = 0, d = this.paramCache_, e = [], f = 0; f < d.length; f += 2) a === d[f] ? c < b.length && e.push(a, b[c++]) : e.push(d[f], d[f + 1]);
            for (; c < b.length;) e.push(a, b[c++]);
            return this.setAllParameters(e), this }, i.prototype.removeParameter = function(a) {
            return this.setParameterValues(a, []) }, i.prototype.getAllParameters = function() {
            return this.checkParameterCache_(), this.paramCache_.slice(0, this.paramCache_.length) }, i.prototype.getParameterValues = function(a) { this.checkParameterCache_();
            for (var b = [], c = 0; c < this.paramCache_.length; c += 2) a === this.paramCache_[c] && b.push(this.paramCache_[c + 1]);
            return b }, i.prototype.getParameterMap = function(a) { this.checkParameterCache_();
            for (var b = {}, c = 0; c < this.paramCache_.length; c += 2) {
                var d = this.paramCache_[c++],
                    e = this.paramCache_[c++];
                d in b ? b[d].push(e) : b[d] = [e] }
            return b }, i.prototype.getParameterValue = function(a) { this.checkParameterCache_();
            for (var b = 0; b < this.paramCache_.length; b += 2)
                if (a === this.paramCache_[b]) return this.paramCache_[b + 1];
            return null }, i.prototype.getFragment = function() {
            return this.fragment_ && decodeURIComponent(this.fragment_) }, i.prototype.getRawFragment = function() {
            return this.fragment_ }, i.prototype.setFragment = function(a) {
            return this.fragment_ = a ? encodeURIComponent(a) : null, this }, i.prototype.setRawFragment = function(a) {
            return this.fragment_ = a ? a : null, this }, i.prototype.hasFragment = function() {
            return null !== this.fragment_ };
        var n = new RegExp("^(?:([^:/?#]+):)?(?://(?:([^/?#]*)@)?([^/?#:@]*)(?::([0-9]+))?)?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),
            o = /[#\/\?@]/g,
            p = /[\#\?]/g;
        return i.parse = a, i.create = b, i.resolve = h, i.collapse_dots = g, i.utils = { mimeTypeOf: function(b) {
                var c = a(b);
                return /\.html$/.test(c.getPath()) ? "text/html" : "application/javascript" }, resolve: function(b, c) {
                return b ? h(a(b), a(c)).toString() : "" + c } }, i }();
    "undefined" != typeof window && (window.URI = URI);
    var sanitizeCssProperty = void 0,
        sanitizeCssSelectorList = void 0,
        sanitizeStylesheet = void 0,
        sanitizeStylesheetWithExternals = void 0,
        sanitizeMediaQuery = void 0;
    if (function() {
            function a(a) {
                return "string" == typeof a ? 'url("' + a.replace(g, b) + '")' : f }

            function b(a) {
                return h[a] }

            function c(a, b) {
                return a ? URI.utils.resolve(a, b) : b }

            function d(a, b, c) {
                if (!c) return null;
                var d = ("" + a).match(i);
                return !d || d[1] && !j.test(d[1]) ? null : c(a, b) }

            function e(a) {
                return a.replace(/^-(?:apple|css|epub|khtml|moz|mso?|o|rim|wap|webkit|xv)-(?=[a-z])/, "") }
            var f = 'url("about:blank")',
                g = /[\n\f\r\"\'()*<>]/g,
                h = { "\n": "%0a", "\f": "%0c", "\r": "%0d", '"': "%22", "'": "%27", "(": "%28", ")": "%29", "*": "%2a", "<": "%3c", ">": "%3e" },
                i = new RegExp("^(?:([^:/?# ]+):)?"),
                j = /^(?:https?|mailto)$/i;
            sanitizeCssProperty = function() {
                function b(a) {
                    for (var b = {}, c = a.length; --c >= 0;)
                        for (var d = a[c], e = d.length; --e >= 0;) b[d[e]] = g;
                    return b }
                var g = {};
                return function h(i, j, k, l, m) {
                    function n(a, b) {
                        for (var c = 1, d = b + 1, f = a.length; f > d && c;) {
                            var g = a[d++];
                            c += ")" === g ? -1 : /^[^"']*\($/.test(g) }
                        if (!c)
                            for (var i = a[b].toLowerCase(), j = e(i), m = a.splice(b, d - b, ""), n = p.cssFns, o = 0, q = n.length; q > o; ++o)
                                if (n[o].substring(0, j.length) == j) return m[0] = m[m.length - 1] = "", h(n[o], m, k, l), i + m.join(" ") + ")";
                        return "" }
                    var o = e(i),
                        p = cssSchema[o];
                    if (!p || "object" != typeof p) return void(j.length = 0);
                    for (var q = p.cssPropBits, r = q & (CSS_PROP_BIT_URL | CSS_PROP_BIT_UNRESERVED_WORD), s = q & (CSS_PROP_BIT_GLOBAL_NAME | CSS_PROP_BIT_PROPERTY_NAME), t = NaN, u = 0, v = 0; u < j.length; ++u) {
                        var w, x, y, z, A, B, C = j[u].toLowerCase(),
                            D = C.charCodeAt(0);
                        C = D === " ".charCodeAt(0) ? "" : D === '"'.charCodeAt(0) ? r === CSS_PROP_BIT_URL ? k ? a(d(c(l, decodeCss(j[u].substring(1, C.length - 1))), o, k)) : "" : q & CSS_PROP_BIT_QSTRING && !(r & r - 1) ? C : "" : "inherit" === C ? C : (A = p.cssLitGroup, B = A ? p.cssLitMap || (p.cssLitMap = b(A)) : g, B[e(C)] === g ? C : D === "#".charCodeAt(0) && /^#(?:[0-9a-f]{3}){1,2}$/.test(C) ? q & CSS_PROP_BIT_HASH_VALUE ? C : "" : "0".charCodeAt(0) <= D && D <= "9".charCodeAt(0) ? q & CSS_PROP_BIT_QUANTITY ? C : "" : (w = C.charCodeAt(1), x = C.charCodeAt(2), y = "0".charCodeAt(0) <= w && w <= "9".charCodeAt(0), z = "0".charCodeAt(0) <= x && x <= "9".charCodeAt(0), D === "+".charCodeAt(0) && (y || w === ".".charCodeAt(0) && z) ? q & CSS_PROP_BIT_QUANTITY ? (y ? "" : "0") + C.substring(1) : "" : D === "-".charCodeAt(0) && (y || w === ".".charCodeAt(0) && z) ? q & CSS_PROP_BIT_NEGATIVE_QUANTITY ? (y ? "-" : "-0") + C.substring(1) : q & CSS_PROP_BIT_QUANTITY ? "0" : "" : D === ".".charCodeAt(0) && y ? q & CSS_PROP_BIT_QUANTITY ? "0" + C : "" : 'url("' === C.substring(0, 5) ? k && q & CSS_PROP_BIT_URL ? a(d(c(l, j[u].substring(5, C.length - 2)), o, k)) : "" : "(" === C.charAt(C.length - 1) ? n(j, u) : s && /^-?[a-z_][\w\-]*$/.test(C) && !/__$/.test(C) ? m && s === CSS_PROP_BIT_GLOBAL_NAME ? j[u] + m : s === CSS_PROP_BIT_PROPERTY_NAME && cssSchema[C] && "number" == typeof cssSchema[C].cssPropBits ? C : "" : /^\w+$/.test(C) && r === CSS_PROP_BIT_UNRESERVED_WORD && q & CSS_PROP_BIT_QSTRING ? t + 1 === v ? (j[t] = j[t].substring(0, j[t].length - 1) + " " + C + '"', C = "") : (t = v, '"' + C + '"') : "")), C && (j[v++] = C) }
                    1 === v && j[0] === f && (v = 0), j.length = v } }();
            var k = new RegExp("^(active|after|before|blank|checked|default|disabled|drop|empty|enabled|first|first-child|first-letter|first-line|first-of-type|fullscreen|focus|hover|in-range|indeterminate|invalid|last-child|last-of-type|left|link|only-child|only-of-type|optional|out-of-range|placeholder-shown|read-only|read-write|required|right|root|scope|user-error|valid|visited)$"),
                l = {};
            l[">"] = l["+"] = l["~"] = l, sanitizeCssSelectorList = function(a, b, c) {
                    function d(d, e) {
                        function f(c, d, e) {
                            var f, g, j, l, n, o = !0;
                            if (f = "", d > c)
                                if (n = a[c], "*" === n) ++c, f = n;
                                else if (/^[a-zA-Z]/.test(n)) {
                                var p = i(n.toLowerCase(), []);
                                p && ("tagName" in p && (n = p.tagName), ++c, f = n) }
                            for (g = "", j = "", l = ""; o && d > c; ++c)
                                if (n = a[c], "#" === n.charAt(0)) /^#_|__$|[^\w#:\-]/.test(n) ? o = !1 : g += n + h;
                                else if ("." === n) ++c < d && /^[0-9A-Za-z:_\-]+$/.test(n = a[c]) && !/^_|__$/.test(n) ? g += "." + n : o = !1;
                            else if (d > c + 1 && "[" === a[c]) {++c;
                                var q = a[c++].toLowerCase(),
                                    r = html4.ATTRIBS[f + "::" + q];
                                r !== +r && (r = html4.ATTRIBS["*::" + q]);
                                var s;
                                b.virtualizeAttrName ? (s = b.virtualizeAttrName(f, q), "string" != typeof s && (o = !1, s = q), o && r !== +r && (r = html4.atype.NONE)) : (s = q, r !== +r && (o = !1));
                                var t = "",
                                    u = "",
                                    v = !1;
                                switch (/^[~^$*|]?=$/.test(a[c]) && (t = a[c++], u = a[c++], /^[0-9A-Za-z:_\-]+$/.test(u) ? u = '"' + u + '"' : "]" === u && (u = '""', --c), /^"([^\"\\]|\\.)*"$/.test(u) || (o = !1), v = "i" === a[c], v && ++c), "]" !== a[c] && (++c, o = !1), r) {
                                    case html4.atype.CLASSES:
                                    case html4.atype.LOCAL_NAME:
                                    case html4.atype.NONE:
                                        break;
                                    case html4.atype.GLOBAL_NAME:
                                    case html4.atype.ID:
                                    case html4.atype.IDREF:
                                        "=" !== t && "~=" !== t && "$=" !== t || '""' == u || v ? "|=" === t || "" === t || (o = !1) : u = '"' + u.substring(1, u.length - 1) + h + '"';
                                        break;
                                    case html4.atype.URI:
                                    case html4.atype.URI_FRAGMENT:
                                        "" !== t && (o = !1);
                                        break;
                                    default:
                                        o = !1 }
                                o && (j += "[" + s.replace(/[^\w-]/g, "\\$&") + t + u + (v ? " i]" : "]")) } else {
                                if (!(d > c && ":" === a[c])) break;
                                if (n = a[++c], !k.test(n)) break;
                                l += ":" + n }
                            if (c !== d && (o = !1), o) {
                                var w = (f + g).replace(/[^ .*#\w-]/g, "\\$&") + j + l + e;
                                w && m.push(w) }
                            return o } " " === a[d] && ++d, e - 1 !== d && " " === a[e] && --e;
                        for (var m = [], n = d, o = !0, p = d; o && e > p; ++p) {
                            var q = a[p];
                            (l[q] === l || " " === q) && (f(n, p, q) ? n = p + 1 : o = !1) }
                        if (f(n, e, "") || (o = !1), o) {
                            if (m.length) {
                                var r = m.join("");
                                null !== g && (r = "." + g + " " + r), j.push(r) }
                            return !0 }
                        return !c || c(a.slice(d, e)) }
                    var e, f, g = b.containerClass,
                        h = b.idSuffix,
                        i = b.tagPolicy,
                        j = [],
                        m = 0,
                        n = 0;
                    for (e = 0; e < a.length; ++e) f = a[e], ("(" == f || "[" == f ? (++n, 0) : ")" == f || "]" == f ? (n && --n, 0) : " " == a[e] && (n || l[a[e - 1]] === l || l[a[e + 1]] === l)) || (a[m++] = a[e]);
                    a.length = m;
                    var o = a.length,
                        p = 0;
                    for (e = 0; o > e; ++e)
                        if ("," === a[e]) {
                            if (!d(p, e)) return null;
                            p = e + 1 }
                    return d(p, o) ? j : null },
                function() {
                    var a = "(?:all|aural|braille|embossed|handheld|print|projection|screen|speech|tty|tv)",
                        b = "(?:(?:min-|max-)?(?:(?:device-)?(?:aspect-ratio|height|width)|color(?:-index)?|monochrome|orientation|resolution)|grid|hover|luminosity|pointer|scan|script)",
                        c = "(?:p[cxt]|[cem]m|in|dpi|dppx|dpcm|%)",
                        d = "-?(?:[a-z]\\w+(?:-\\w+)*|\\d+(?: / \\d+|(?:\\.\\d+)?" + c + "?))",
                        e = "\\( " + b + " (?:: " + d + " )?\\)",
                        f = "(?:(?:(?:(?:only|not) )?" + a + "|" + e + ")(?: and ?" + e + ")*)",
                        g = /^\w/,
                        h = new RegExp("^" + f + "(?: , " + f + ")*$", "i");
                    sanitizeMediaQuery = function(a) { a = a.slice();
                        for (var b = a.length, c = 0, d = 0; b > d; ++d) {
                            var e = a[d]; " " != e && (a[c++] = e) }
                        a.length = c;
                        var f = a.join(" ");
                        return f = f.length ? h.test(f) ? g.test(f) ? f : "not all , " + f : "not all" : "" } }(),
                function() {
                    function a(a) {
                        var b, c = /^\s*["]([^"]*)["]\s*$/,
                            d = /^\s*[']([^']*)[']\s*$/,
                            e = /^\s*url\s*[(]["]([^"]*)["][)]\s*$/,
                            f = /^\s*url\s*[(][']([^']*)['][)]\s*$/,
                            g = /^\s*url\s*[(]([^)]*)[)]\s*$/;
                        return (b = c.exec(a)) ? b[1] : (b = d.exec(a)) ? b[1] : (b = e.exec(a)) ? b[1] : (b = f.exec(a)) ? b[1] : (b = g.exec(a)) ? b[1] : null }

                    function b(e, f, g, h, i, j, k) {
                        function l() { p = o.length && null === o[o.length - 1] }
                        var m = void 0,
                            n = k || [0],
                            o = [],
                            p = !1;
                        return parseCssStylesheet(f, { startStylesheet: function() { m = [] }, endStylesheet: function() {}, startAtrule: function(f, k) {
                                if (p) f = null;
                                else if ("@media" === f) m.push("@media", " ", sanitizeMediaQuery(k));
                                else if ("@keyframes" === f || "@-webkit-keyframes" === f) {
                                    var l = k[0];
                                    1 !== k.length || /__$|[^\w\-]/.test(l) ? f = null : (m.push(f, " ", l + g.idSuffix), f = "@keyframes") } else if ("@import" === f && k.length > 0)
                                    if (f = null, "function" == typeof j) {
                                        var q = sanitizeMediaQuery(k.slice(1));
                                        if ("not all" !== q) {++n[0];
                                            var r = [];
                                            m.push(r);
                                            var s = d(c(e, a(k[0])), function(a) {
                                                var c = b(s, a.html, g, h, i, j, n);--n[0];
                                                var d = q ? { toString: function() {
                                                        return "@media " + q + " {" + c.result + "}" } } : c.result;
                                                r[0] = d, j(d, !!n[0]) }, i) } } else window.console && window.console.log("@import " + k.join(" ") + " elided");
                                p = !f, o.push(f) }, endAtrule: function() { o.pop(), p || m.push(";"), l() }, startBlock: function() { p || m.push("{") }, endBlock: function() { p || (m.push("}"), p = !0) }, startRuleset: function(a) {
                                if (!p) {
                                    var b = void 0;
                                    if ("@keyframes" === o[o.length - 1]) b = a.join(" ").match(/^ *(?:from|to|\d+(?:\.\d+)?%) *(?:, *(?:from|to|\d+(?:\.\d+)?%) *)*$/i), p = !b, b && (b = b[0].replace(/ +/g, ""));
                                    else {
                                        var c = sanitizeCssSelectorList(a, g);
                                        c && c.length ? b = c.join(", ") : p = !0 }
                                    p || m.push(b, "{") }
                                o.push(null) }, endRuleset: function() { o.pop(), p || m.push("}"), l() }, declaration: function(a, b) {
                                if (!p) {
                                    var c = !1,
                                        d = b.length;
                                    d >= 2 && "!" === b[d - 2] && "important" === b[d - 1].toLowerCase() && (c = !0, b.length -= 2), sanitizeCssProperty(a, b, h, e, g.idSuffix), b.length && m.push(a, ":", b.join(" "), c ? " !important;" : ";") } } }), { result: { toString: function() {
                                    return m.join("") } }, moreToCome: !!n[0] } }
                    sanitizeStylesheet = function(a, c, d, e) {
                        return b(a, c, d, e, void 0, void 0).result.toString() }, sanitizeStylesheetWithExternals = function(a, c, d, e, f, g) {
                        return b(a, c, d, e, f, g) } }() }(), "undefined" != typeof window && (window.sanitizeCssProperty = sanitizeCssProperty, window.sanitizeCssSelectorList = sanitizeCssSelectorList, window.sanitizeStylesheet = sanitizeStylesheet, window.sanitizeMediaQuery = sanitizeMediaQuery), "i" !== "I".toLowerCase()) throw "I/i problem";
    var parseCssStylesheet, parseCssDeclarations;
    ! function() {
        function a(a, c, e, f) {
            if (e > c) {
                var g = a[c];
                return "@" === g.charAt(0) ? b(a, c, e, f, !0) : d(a, c, e, f) }
            return c }

        function b(a, b, d, e, f) {
            for (var g = b++; d > b && "{" !== a[b] && ";" !== a[b];) ++b;
            if (d > b && (f || ";" === a[b])) {
                var h = g + 1,
                    i = b;
                d > h && " " === a[h] && ++h, i > h && " " === a[i - 1] && --i, e.startAtrule && e.startAtrule(a[g].toLowerCase(), a.slice(h, i)), b = "{" === a[b] ? c(a, b, d, e) : b + 1, e.endAtrule && e.endAtrule() }
            return b }

        function c(a, e, f, g) {
            for (++e, g.startBlock && g.startBlock(); f > e;) {
                var h = a[e].charAt(0);
                if ("}" == h) {++e;
                    break } " " === h || ";" === h ? e += 1 : e = "@" === h ? b(a, e, f, g, !1) : "{" === h ? c(a, e, f, g) : d(a, e, f, g) }
            return g.endBlock && g.endBlock(), e }

        function d(a, b, c, d) {
            var f = b,
                h = e(a, b, c, !0);
            if (0 > h) return h = ~h, h === f ? h + 1 : h;
            var i = a[h];
            if ("{" !== i) return h === f ? h + 1 : h;
            for (b = h + 1, h > f && " " === a[h - 1] && --h, d.startRuleset && d.startRuleset(a.slice(f, h)); c > b;) {
                if (i = a[b], "}" === i) {++b;
                    break } " " === i ? b += 1 : b = g(a, b, c, d) }
            return d.endRuleset && d.endRuleset(), b }

        function e(a, b, c, d) {
            for (var e, f = [], g = -1; c > b; ++b)
                if (e = a[b].charAt(0), "[" === e || "(" === e) f[++g] = e;
                else if ("]" === e && "[" === f[g] || ")" === e && "(" === f[g]) --g;
            else if ("{" === e || "}" === e || ";" === e || "@" === e || ":" === e && !d) break;
            return g >= 0 && (b = ~(b + 1)), b }

        function f(a, b, c) {
            for (; c > b && ";" !== a[b] && "}" !== a[b];) ++b;
            return c > b && ";" === a[b] ? b + 1 : b }

        function g(a, b, c, d) {
            var g = a[b++];
            if (!h.test(g)) return f(a, b, c);
            var i;
            if (c > b && " " === a[b] && ++b, b == c || ":" !== a[b]) return f(a, b, c);++b, c > b && " " === a[b] && ++b;
            var j = b,
                k = e(a, b, c, !1);
            if (0 > k) k = ~k;
            else {
                for (var l = [], m = 0, n = j; k > n; ++n) i = a[n], " " !== i && (l[m++] = i);
                if (c > k) { do {
                        if (i = a[k], ";" === i || "}" === i) break;
                        m = 0 } while (++k < c); ";" === i && ++k }
                m && d.declaration && d.declaration(g.toLowerCase(), l) }
            return k }
        parseCssStylesheet = function(b, c) {
            var d = lexCss(b);
            c.startStylesheet && c.startStylesheet();
            for (var e = 0, f = d.length; f > e;) e = " " === d[e] ? e + 1 : a(d, e, f, c);
            c.endStylesheet && c.endStylesheet() };
        var h = /^-?[a-z]/i;
        parseCssDeclarations = function(a, b) {
            for (var c = lexCss(a), d = 0, e = c.length; e > d;) d = " " !== c[d] ? g(c, d, e, b) : d + 1 } }(), "undefined" != typeof window && (window.parseCssStylesheet = parseCssStylesheet, window.parseCssDeclarations = parseCssDeclarations);
    var html4 = {};
    if (html4.atype = { NONE: 0, URI: 1, URI_FRAGMENT: 11, SCRIPT: 2, STYLE: 3, HTML: 12, ID: 4, IDREF: 5, IDREFS: 6, GLOBAL_NAME: 7, LOCAL_NAME: 8, CLASSES: 9, FRAME_TARGET: 10, MEDIA_QUERY: 13 }, html4.atype = html4.atype, html4.ATTRIBS = { "*::class": 9, "*::dir": 0, "*::draggable": 0, "*::hidden": 0, "*::id": 4, "*::inert": 0, "*::itemprop": 0, "*::itemref": 6, "*::itemscope": 0, "*::lang": 0, "*::onblur": 2, "*::onchange": 2, "*::onclick": 2, "*::ondblclick": 2, "*::onerror": 2, "*::onfocus": 2, "*::onkeydown": 2, "*::onkeypress": 2, "*::onkeyup": 2, "*::onload": 2, "*::onmousedown": 2, "*::onmousemove": 2, "*::onmouseout": 2, "*::onmouseover": 2, "*::onmouseup": 2, "*::onreset": 2, "*::onscroll": 2, "*::onselect": 2, "*::onsubmit": 2, "*::ontouchcancel": 2, "*::ontouchend": 2, "*::ontouchenter": 2, "*::ontouchleave": 2, "*::ontouchmove": 2, "*::ontouchstart": 2, "*::onunload": 2, "*::spellcheck": 0, "*::style": 3, "*::tabindex": 0, "*::title": 0, "*::translate": 0, "a::accesskey": 0, "a::coords": 0, "a::href": 1, "a::hreflang": 0, "a::name": 7, "a::onblur": 2, "a::onfocus": 2, "a::shape": 0, "a::target": 0, "a::type": 0, "area::accesskey": 0, "area::alt": 0, "area::coords": 0, "area::href": 1, "area::nohref": 0, "area::onblur": 2, "area::onfocus": 2, "area::shape": 0, "area::target": 10, "audio::controls": 0, "audio::loop": 0, "audio::mediagroup": 5, "audio::muted": 0, "audio::preload": 0, "audio::src": 1, "bdo::dir": 0, "blockquote::cite": 1, "br::clear": 0, "button::accesskey": 0, "button::disabled": 0, "button::name": 8, "button::onblur": 2, "button::onfocus": 2, "button::type": 0, "button::value": 0, "canvas::height": 0, "canvas::width": 0, "caption::align": 0, "col::align": 0, "col::char": 0, "col::charoff": 0, "col::span": 0, "col::valign": 0, "col::width": 0, "colgroup::align": 0, "colgroup::char": 0, "colgroup::charoff": 0, "colgroup::span": 0, "colgroup::valign": 0, "colgroup::width": 0, "command::checked": 0, "command::command": 5, "command::disabled": 0, "command::icon": 1, "command::label": 0, "command::radiogroup": 0, "command::type": 0, "data::value": 0, "del::cite": 1, "del::datetime": 0, "details::open": 0, "dir::compact": 0, "div::align": 0, "dl::compact": 0, "fieldset::disabled": 0, "font::color": 0, "font::face": 0, "font::size": 0, "form::accept": 0, "form::action": 1, "form::autocomplete": 0, "form::enctype": 0, "form::method": 0, "form::name": 7, "form::novalidate": 0, "form::onreset": 2, "form::onsubmit": 2, "form::target": 10, "h1::align": 0, "h2::align": 0, "h3::align": 0, "h4::align": 0, "h5::align": 0, "h6::align": 0, "hr::align": 0, "hr::noshade": 0, "hr::size": 0, "hr::width": 0, "iframe::align": 0, "iframe::frameborder": 0, "iframe::height": 0, "iframe::marginheight": 0, "iframe::marginwidth": 0, "iframe::width": 0, "img::align": 0, "img::alt": 0, "img::border": 0, "img::height": 0, "img::hspace": 0, "img::ismap": 0, "img::name": 7, "img::src": 1, "img::usemap": 11, "img::vspace": 0, "img::width": 0, "input::accept": 0, "input::accesskey": 0, "input::align": 0, "input::alt": 0, "input::autocomplete": 0, "input::checked": 0, "input::disabled": 0, "input::inputmode": 0, "input::ismap": 0, "input::list": 5, "input::max": 0, "input::maxlength": 0, "input::min": 0, "input::multiple": 0, "input::name": 8, "input::onblur": 2, "input::onchange": 2, "input::onfocus": 2, "input::onselect": 2, "input::pattern": 0, "input::placeholder": 0, "input::readonly": 0, "input::required": 0, "input::size": 0, "input::src": 1, "input::step": 0, "input::type": 0, "input::usemap": 11, "input::value": 0, "ins::cite": 1, "ins::datetime": 0, "label::accesskey": 0, "label::for": 5, "label::onblur": 2, "label::onfocus": 2, "legend::accesskey": 0, "legend::align": 0, "li::type": 0, "li::value": 0, "map::name": 7, "menu::compact": 0, "menu::label": 0, "menu::type": 0, "meter::high": 0, "meter::low": 0, "meter::max": 0, "meter::min": 0, "meter::optimum": 0, "meter::value": 0, "ol::compact": 0, "ol::reversed": 0, "ol::start": 0, "ol::type": 0, "optgroup::disabled": 0, "optgroup::label": 0, "option::disabled": 0, "option::label": 0, "option::selected": 0, "option::value": 0, "output::for": 6, "output::name": 8, "p::align": 0, "pre::width": 0, "progress::max": 0, "progress::min": 0, "progress::value": 0, "q::cite": 1, "select::autocomplete": 0, "select::disabled": 0, "select::multiple": 0, "select::name": 8, "select::onblur": 2, "select::onchange": 2, "select::onfocus": 2, "select::required": 0, "select::size": 0, "source::type": 0, "table::align": 0, "table::bgcolor": 0, "table::border": 0, "table::cellpadding": 0, "table::cellspacing": 0, "table::frame": 0, "table::rules": 0, "table::summary": 0, "table::width": 0, "tbody::align": 0, "tbody::char": 0, "tbody::charoff": 0, "tbody::valign": 0, "td::abbr": 0, "td::align": 0, "td::axis": 0, "td::bgcolor": 0, "td::char": 0, "td::charoff": 0, "td::colspan": 0, "td::headers": 6, "td::height": 0, "td::nowrap": 0, "td::rowspan": 0, "td::scope": 0, "td::valign": 0, "td::width": 0, "textarea::accesskey": 0, "textarea::autocomplete": 0, "textarea::cols": 0, "textarea::disabled": 0, "textarea::inputmode": 0, "textarea::name": 8, "textarea::onblur": 2, "textarea::onchange": 2, "textarea::onfocus": 2, "textarea::onselect": 2, "textarea::placeholder": 0, "textarea::readonly": 0, "textarea::required": 0, "textarea::rows": 0, "textarea::wrap": 0, "tfoot::align": 0, "tfoot::char": 0, "tfoot::charoff": 0, "tfoot::valign": 0, "th::abbr": 0, "th::align": 0, "th::axis": 0, "th::bgcolor": 0, "th::char": 0, "th::charoff": 0, "th::colspan": 0, "th::headers": 6, "th::height": 0, "th::nowrap": 0, "th::rowspan": 0, "th::scope": 0, "th::valign": 0, "th::width": 0, "thead::align": 0, "thead::char": 0, "thead::charoff": 0, "thead::valign": 0, "tr::align": 0, "tr::bgcolor": 0, "tr::char": 0, "tr::charoff": 0, "tr::valign": 0, "track::default": 0, "track::kind": 0, "track::label": 0, "track::srclang": 0, "ul::compact": 0, "ul::type": 0, "video::controls": 0, "video::height": 0, "video::loop": 0, "video::mediagroup": 5, "video::muted": 0, "video::poster": 1, "video::preload": 0, "video::src": 1, "video::width": 0 }, html4.ATTRIBS = html4.ATTRIBS, html4.eflags = { OPTIONAL_ENDTAG: 1, EMPTY: 2, CDATA: 4, RCDATA: 8, UNSAFE: 16, FOLDABLE: 32, SCRIPT: 64, STYLE: 128, VIRTUALIZED: 256 }, html4.eflags = html4.eflags, html4.ELEMENTS = { a: 0, abbr: 0, acronym: 0, address: 0, applet: 272, area: 2, article: 0, aside: 0, audio: 0, b: 0, base: 274, basefont: 274, bdi: 0, bdo: 0, big: 0, blockquote: 0, body: 305, br: 2, button: 0, canvas: 0, caption: 0, center: 0, cite: 0, code: 0, col: 2, colgroup: 1, command: 2, data: 0, datalist: 0, dd: 1, del: 0, details: 0, dfn: 0, dialog: 272, dir: 0, div: 0, dl: 0, dt: 1, em: 0, fieldset: 0, figcaption: 0, figure: 0, font: 0, footer: 0, form: 0, frame: 274, frameset: 272, h1: 0, h2: 0, h3: 0, h4: 0, h5: 0, h6: 0, head: 305, header: 0, hgroup: 0, hr: 2, html: 305, i: 0, iframe: 16, img: 2, input: 2, ins: 0, isindex: 274, kbd: 0, keygen: 274, label: 0, legend: 0, li: 1, link: 274, map: 0, mark: 0, menu: 0, meta: 274, meter: 0, nav: 0, nobr: 0, noembed: 276, noframes: 276, noscript: 276, object: 272, ol: 0, optgroup: 0, option: 1, output: 0, p: 1, param: 274, pre: 0, progress: 0, q: 0, s: 0, samp: 0, script: 84, section: 0, select: 0, small: 0, source: 2, span: 0, strike: 0, strong: 0, style: 148, sub: 0, summary: 0, sup: 0, table: 0, tbody: 1, td: 1, textarea: 8, tfoot: 1, th: 1, thead: 1, time: 0, title: 280, tr: 1, track: 2, tt: 0, u: 0, ul: 0, "var": 0, video: 0, wbr: 2 }, html4.ELEMENTS = html4.ELEMENTS, html4.ELEMENT_DOM_INTERFACES = {
            a: "HTMLAnchorElement",
            abbr: "HTMLElement",
            acronym: "HTMLElement",
            address: "HTMLElement",
            applet: "HTMLAppletElement",
            area: "HTMLAreaElement",
            article: "HTMLElement",
            aside: "HTMLElement",
            audio: "HTMLAudioElement",
            b: "HTMLElement",
            base: "HTMLBaseElement",
            basefont: "HTMLBaseFontElement",
            bdi: "HTMLElement",
            bdo: "HTMLElement",
            big: "HTMLElement",
            blockquote: "HTMLQuoteElement",
            body: "HTMLBodyElement",
            br: "HTMLBRElement",
            button: "HTMLButtonElement",
            canvas: "HTMLCanvasElement",
            caption: "HTMLTableCaptionElement",
            center: "HTMLElement",
            cite: "HTMLElement",
            code: "HTMLElement",
            col: "HTMLTableColElement",
            colgroup: "HTMLTableColElement",
            command: "HTMLCommandElement",
            data: "HTMLElement",
            datalist: "HTMLDataListElement",
            dd: "HTMLElement",
            del: "HTMLModElement",
            details: "HTMLDetailsElement",
            dfn: "HTMLElement",
            dialog: "HTMLDialogElement",
            dir: "HTMLDirectoryElement",
            div: "HTMLDivElement",
            dl: "HTMLDListElement",
            dt: "HTMLElement",
            em: "HTMLElement",
            fieldset: "HTMLFieldSetElement",
            figcaption: "HTMLElement",
            figure: "HTMLElement",
            font: "HTMLFontElement",
            footer: "HTMLElement",
            form: "HTMLFormElement",
            frame: "HTMLFrameElement",
            frameset: "HTMLFrameSetElement",
            h1: "HTMLHeadingElement",
            h2: "HTMLHeadingElement",
            h3: "HTMLHeadingElement",
            h4: "HTMLHeadingElement",
            h5: "HTMLHeadingElement",
            h6: "HTMLHeadingElement",
            head: "HTMLHeadElement",
            header: "HTMLElement",
            hgroup: "HTMLElement",
            hr: "HTMLHRElement",
            html: "HTMLHtmlElement",
            i: "HTMLElement",
            iframe: "HTMLIFrameElement",
            img: "HTMLImageElement",
            input: "HTMLInputElement",
            ins: "HTMLModElement",
            isindex: "HTMLUnknownElement",
            kbd: "HTMLElement",
            keygen: "HTMLKeygenElement",
            label: "HTMLLabelElement",
            legend: "HTMLLegendElement",
            li: "HTMLLIElement",
            link: "HTMLLinkElement",
            map: "HTMLMapElement",
            mark: "HTMLElement",
            menu: "HTMLMenuElement",
            meta: "HTMLMetaElement",
            meter: "HTMLMeterElement",
            nav: "HTMLElement",
            nobr: "HTMLElement",
            noembed: "HTMLElement",
            noframes: "HTMLElement",
            noscript: "HTMLElement",
            object: "HTMLObjectElement",
            ol: "HTMLOListElement",
            optgroup: "HTMLOptGroupElement",
            option: "HTMLOptionElement",
            output: "HTMLOutputElement",
            p: "HTMLParagraphElement",
            param: "HTMLParamElement",
            pre: "HTMLPreElement",
            progress: "HTMLProgressElement",
            q: "HTMLQuoteElement",
            s: "HTMLElement",
            samp: "HTMLElement",
            script: "HTMLScriptElement",
            section: "HTMLElement",
            select: "HTMLSelectElement",
            small: "HTMLElement",
            source: "HTMLSourceElement",
            span: "HTMLSpanElement",
            strike: "HTMLElement",
            strong: "HTMLElement",
            style: "HTMLStyleElement",
            sub: "HTMLElement",
            summary: "HTMLElement",
            sup: "HTMLElement",
            table: "HTMLTableElement",
            tbody: "HTMLTableSectionElement",
            td: "HTMLTableDataCellElement",
            textarea: "HTMLTextAreaElement",
            tfoot: "HTMLTableSectionElement",
            th: "HTMLTableHeaderCellElement",
            thead: "HTMLTableSectionElement",
            time: "HTMLTimeElement",
            title: "HTMLTitleElement",
            tr: "HTMLTableRowElement",
            track: "HTMLTrackElement",
            tt: "HTMLElement",
            u: "HTMLElement",
            ul: "HTMLUListElement",
            "var": "HTMLElement",
            video: "HTMLVideoElement",
            wbr: "HTMLElement"
        }, html4.ELEMENT_DOM_INTERFACES = html4.ELEMENT_DOM_INTERFACES, html4.ueffects = { NOT_LOADED: 0, SAME_DOCUMENT: 1, NEW_DOCUMENT: 2 }, html4.ueffects = html4.ueffects, html4.URIEFFECTS = { "a::href": 2, "area::href": 2, "audio::src": 1, "blockquote::cite": 0, "command::icon": 1, "del::cite": 0, "form::action": 2, "img::src": 1, "input::src": 1, "ins::cite": 0, "q::cite": 0, "video::poster": 1, "video::src": 1 }, html4.URIEFFECTS = html4.URIEFFECTS, html4.ltypes = { UNSANDBOXED: 2, SANDBOXED: 1, DATA: 0 }, html4.ltypes = html4.ltypes, html4.LOADERTYPES = { "a::href": 2, "area::href": 2, "audio::src": 2, "blockquote::cite": 2, "command::icon": 1, "del::cite": 2, "form::action": 2, "img::src": 1, "input::src": 1, "ins::cite": 2, "q::cite": 2, "video::poster": 1, "video::src": 2 }, html4.LOADERTYPES = html4.LOADERTYPES, "undefined" != typeof window && (window.html4 = html4), "i" !== "I".toLowerCase()) throw "I/i problem";
    var html = function(a) {
            function b(a) {
                if (E.hasOwnProperty(a)) return E[a];
                var b = a.match(F);
                if (b) return String.fromCharCode(parseInt(b[1], 10));
                if (b = a.match(G)) return String.fromCharCode(parseInt(b[1], 16));
                if (I && H.test(a)) { I.innerHTML = "&" + a + ";";
                    var c = I.textContent;
                    return E[a] = c, c }
                return "&" + a + ";" }

            function c(a, c) {
                return b(c) }

            function d(a) {
                return a.replace(J, "") }

            function e(a) {
                return a.replace(K, c) }

            function f(a) {
                return ("" + a).replace(M, "&amp;").replace(O, "&lt;").replace(P, "&gt;").replace(Q, "&#34;") }

            function g(a) {
                return a.replace(N, "&amp;$1").replace(O, "&lt;").replace(P, "&gt;") }

            function h(a) {
                var b = { cdata: a.cdata || a.cdata, comment: a.comment || a.comment, endDoc: a.endDoc || a.endDoc, endTag: a.endTag || a.endTag, pcdata: a.pcdata || a.pcdata, rcdata: a.rcdata || a.rcdata, startDoc: a.startDoc || a.startDoc, startTag: a.startTag || a.startTag };
                return function(a, c) {
                    return i(a, b, c) } }

            function i(a, b, c) {
                var d = l(a),
                    e = { noMoreGT: !1, noMoreEndComments: !1 };
                k(b, d, 0, e, c) }

            function j(a, b, c, d, e) {
                return function() { k(a, b, c, d, e) } }

            function k(b, c, d, e, f) {
                try { b.startDoc && 0 == d && b.startDoc(f);
                    for (var g, h, i, k = d, l = c.length; l > k;) {
                        var p = c[k++],
                            q = c[k];
                        switch (p) {
                            case "&":
                                L.test(q) ? (b.pcdata && b.pcdata("&" + q, f, U, j(b, c, k, e, f)), k++) : b.pcdata && b.pcdata("&amp;", f, U, j(b, c, k, e, f));
                                break;
                            case "</":
                                (g = /^([-\w:]+)[^\'\"]*/.exec(q)) ? g[0].length === q.length && ">" === c[k + 1] ? (k += 2, i = g[1].toLowerCase(), b.endTag && b.endTag(i, f, U, j(b, c, k, e, f))) : k = m(c, k, b, f, U, e): b.pcdata && b.pcdata("&lt;/", f, U, j(b, c, k, e, f));
                                break;
                            case "<":
                                if (g = /^([-\w:]+)\s*\/?/.exec(q))
                                    if (g[0].length === q.length && ">" === c[k + 1]) { k += 2, i = g[1].toLowerCase(), b.startTag && b.startTag(i, [], f, U, j(b, c, k, e, f));
                                        var r = a.ELEMENTS[i];
                                        if (r & T) {
                                            var s = { name: i, next: k, eflags: r };
                                            k = o(c, s, b, f, U, e) } } else k = n(c, k, b, f, U, e);
                                else b.pcdata && b.pcdata("&lt;", f, U, j(b, c, k, e, f));
                                break;
                            case "<!--":
                                if (!e.noMoreEndComments) {
                                    for (h = k + 1; l > h && (">" !== c[h] || !/--$/.test(c[h - 1])); h++);
                                    if (l > h) {
                                        if (b.comment) {
                                            var t = c.slice(k, h).join("");
                                            b.comment(t.substr(0, t.length - 2), f, U, j(b, c, h + 1, e, f)) }
                                        k = h + 1 } else e.noMoreEndComments = !0 }
                                e.noMoreEndComments && b.pcdata && b.pcdata("&lt;!--", f, U, j(b, c, k, e, f));
                                break;
                            case "<!":
                                if (/^\w/.test(q)) {
                                    if (!e.noMoreGT) {
                                        for (h = k + 1; l > h && ">" !== c[h]; h++);
                                        l > h ? k = h + 1 : e.noMoreGT = !0 }
                                    e.noMoreGT && b.pcdata && b.pcdata("&lt;!", f, U, j(b, c, k, e, f)) } else b.pcdata && b.pcdata("&lt;!", f, U, j(b, c, k, e, f));
                                break;
                            case "<?":
                                if (!e.noMoreGT) {
                                    for (h = k + 1; l > h && ">" !== c[h]; h++);
                                    l > h ? k = h + 1 : e.noMoreGT = !0 }
                                e.noMoreGT && b.pcdata && b.pcdata("&lt;?", f, U, j(b, c, k, e, f));
                                break;
                            case ">":
                                b.pcdata && b.pcdata("&gt;", f, U, j(b, c, k, e, f));
                                break;
                            case "":
                                break;
                            default:
                                b.pcdata && b.pcdata(p, f, U, j(b, c, k, e, f)) } }
                    b.endDoc && b.endDoc(f) } catch (u) {
                    if (u !== U) throw u } }

            function l(a) {
                var b = /(<\/|<\!--|<[!?]|[&<>])/g;
                if (a += "", S) return a.split(b);
                for (var c, d = [], e = 0; null !== (c = b.exec(a));) d.push(a.substring(e, c.index)), d.push(c[0]), e = c.index + c[0].length;
                return d.push(a.substring(e)), d }

            function m(a, b, c, d, e, f) {
                var g = p(a, b);
                return g ? (c.endTag && c.endTag(g.name, d, e, j(c, a, b, f, d)), g.next) : a.length }

            function n(a, b, c, d, e, f) {
                var g = p(a, b);
                return g ? (c.startTag && c.startTag(g.name, g.attrs, d, e, j(c, a, g.next, f, d)), g.eflags & T ? o(a, g, c, d, e, f) : g.next) : a.length }

            function o(b, c, d, e, f, h) {
                var i = b.length;
                V.hasOwnProperty(c.name) || (V[c.name] = new RegExp("^" + c.name + "(?:[\\s\\/]|$)", "i"));
                for (var k = V[c.name], l = c.next, m = c.next + 1; i > m && ("</" !== b[m - 1] || !k.test(b[m])); m++);
                i > m && (m -= 1);
                var n = b.slice(l, m).join("");
                if (c.eflags & a.eflags.CDATA) d.cdata && d.cdata(n, e, f, j(d, b, m, h, e));
                else {
                    if (!(c.eflags & a.eflags.RCDATA)) throw new Error("bug");
                    d.rcdata && d.rcdata(g(n), e, f, j(d, b, m, h, e)) }
                return m }

            function p(b, c) {
                var d = /^([-\w:]+)/.exec(b[c]),
                    e = {};
                e.name = d[1].toLowerCase(), e.eflags = a.ELEMENTS[e.name];
                for (var f = b[c].substr(d[0].length), g = c + 1, h = b.length; h > g && ">" !== b[g]; g++) f += b[g];
                if (g >= h) return void 0;
                for (var i = [];
                    "" !== f;)
                    if (d = R.exec(f)) {
                        if (d[4] && !d[5] || d[6] && !d[7]) {
                            for (var j = d[4] || d[6], k = !1, l = [f, b[g++]]; h > g; g++) {
                                if (k) {
                                    if (">" === b[g]) break } else 0 <= b[g].indexOf(j) && (k = !0);
                                l.push(b[g]) }
                            if (g >= h) break;
                            f = l.join("");
                            continue }
                        var m = d[1].toLowerCase(),
                            n = d[2] ? q(d[3]) : "";
                        i.push(m, n), f = f.substr(d[0].length) } else f = f.replace(/^[\s\S][^a-z\s]*/, "");
                return e.attrs = i, e.next = g + 1, e }

            function q(a) {
                var b = a.charCodeAt(0);
                return (34 === b || 39 === b) && (a = a.substr(1, a.length - 2)), e(d(a)) }

            function r(b) {
                var c, d, e = function(a, b) { d || b.push(a) };
                return h({ startDoc: function(a) { c = [], d = !1 }, startTag: function(e, g, h) {
                        if (!d && a.ELEMENTS.hasOwnProperty(e)) {
                            var i = a.ELEMENTS[e];
                            if (!(i & a.eflags.FOLDABLE)) {
                                var j = b(e, g);
                                if (!j) return void(d = !(i & a.eflags.EMPTY));
                                if ("object" != typeof j) throw new Error("tagPolicy did not return object (old API?)");
                                if (!("attribs" in j)) throw new Error("tagPolicy gave no attribs");
                                g = j.attribs;
                                var k, l;
                                if ("tagName" in j ? (l = j.tagName, k = a.ELEMENTS[l]) : (l = e, k = i), i & a.eflags.OPTIONAL_ENDTAG) {
                                    var m = c[c.length - 1];!m || m.orig !== e || m.rep === l && e === l || h.push("</", m.rep, ">") }
                                i & a.eflags.EMPTY || c.push({ orig: e, rep: l }), h.push("<", l);
                                for (var n = 0, o = g.length; o > n; n += 2) {
                                    var p = g[n],
                                        q = g[n + 1];
                                    null !== q && void 0 !== q && h.push(" ", p, '="', f(q), '"') }
                                h.push(">"), i & a.eflags.EMPTY && !(k & a.eflags.EMPTY) && h.push("</", l, ">") } } }, endTag: function(b, e) {
                        if (d) return void(d = !1);
                        if (a.ELEMENTS.hasOwnProperty(b)) {
                            var f = a.ELEMENTS[b];
                            if (!(f & (a.eflags.EMPTY | a.eflags.FOLDABLE))) {
                                var g;
                                if (f & a.eflags.OPTIONAL_ENDTAG)
                                    for (g = c.length; --g >= 0;) {
                                        var h = c[g].orig;
                                        if (h === b) break;
                                        if (!(a.ELEMENTS[h] & a.eflags.OPTIONAL_ENDTAG)) return } else
                                        for (g = c.length; --g >= 0 && c[g].orig !== b;);
                                if (0 > g) return;
                                for (var i = c.length; --i > g;) {
                                    var j = c[i].rep;
                                    a.ELEMENTS[j] & a.eflags.OPTIONAL_ENDTAG || e.push("</", j, ">") }
                                g < c.length && (b = c[g].rep), c.length = g, e.push("</", b, ">") } } }, pcdata: e, rcdata: e, cdata: e, endDoc: function(a) {
                        for (; c.length; c.length--) a.push("</", c[c.length - 1].rep, ">") } }) }

            function s(a, b, c, d, e) {
                if (!e) return null;
                try {
                    var f = URI.parse("" + a);
                    if (f && (!f.hasScheme() || W.test(f.getScheme()))) {
                        var g = e(f, b, c, d);
                        return g ? g.toString() : null } } catch (h) {
                    return null }
                return null }

            function t(a, b, c, d, e) {
                if (c || a(b + " removed", { change: "removed", tagName: b }), d !== e) {
                    var f = "changed";
                    d && !e ? f = "removed" : !d && e && (f = "added"), a(b + "." + c + " " + f, { change: f, tagName: b, attribName: c, oldValue: d, newValue: e }) } }

            function u(a, b, c) {
                var d;
                return d = b + "::" + c, a.hasOwnProperty(d) ? a[d] : (d = "*::" + c, a.hasOwnProperty(d) ? a[d] : void 0) }

            function v(b, c) {
                return u(a.LOADERTYPES, b, c) }

            function w(b, c) {
                return u(a.URIEFFECTS, b, c) }

            function x(b, c, d, e, f) {
                for (var g = 0; g < c.length; g += 2) {
                    var h, i = c[g],
                        j = c[g + 1],
                        k = j,
                        l = null;
                    if (h = b + "::" + i, (a.ATTRIBS.hasOwnProperty(h) || (h = "*::" + i, a.ATTRIBS.hasOwnProperty(h))) && (l = a.ATTRIBS[h]), null !== l) switch (l) {
                        case a.atype.NONE:
                            break;
                        case a.atype.SCRIPT:
                            j = null, f && t(f, b, i, k, j);
                            break;
                        case a.atype.STYLE:
                            if ("undefined" == typeof B) { j = null, f && t(f, b, i, k, j);
                                break }
                            var m = [];
                            B(j, { declaration: function(b, c) {
                                    var e = b.toLowerCase();
                                    C(e, c, d ? function(b) {
                                        return s(b, a.ueffects.SAME_DOCUMENT, a.ltypes.SANDBOXED, { TYPE: "CSS", CSS_PROP: e }, d) } : null), c.length && m.push(e + ": " + c.join(" ")) } }), j = m.length > 0 ? m.join(" ; ") : null, f && t(f, b, i, k, j);
                            break;
                        case a.atype.ID:
                        case a.atype.IDREF:
                        case a.atype.IDREFS:
                        case a.atype.GLOBAL_NAME:
                        case a.atype.LOCAL_NAME:
                        case a.atype.CLASSES:
                            j = e ? e(j) : j, f && t(f, b, i, k, j);
                            break;
                        case a.atype.URI:
                            j = s(j, w(b, i), v(b, i), { TYPE: "MARKUP", XML_ATTR: i, XML_TAG: b }, d), f && t(f, b, i, k, j);
                            break;
                        case a.atype.URI_FRAGMENT:
                            j && "#" === j.charAt(0) ? (j = j.substring(1), j = e ? e(j) : j, null !== j && void 0 !== j && (j = "#" + j)) : j = null, f && t(f, b, i, k, j);
                            break;
                        default:
                            j = null, f && t(f, b, i, k, j) } else j = /data-[\w-]+/.test(i) ? e ? e(j) : j : null, f && t(f, b, i, k, j);
                    c[g + 1] = j }
                return c }

            function y(b, c, d) {
                return function(e, f) {
                    return a.ELEMENTS[e] & a.eflags.UNSAFE ? void(d && t(d, e, void 0, void 0, void 0)) : { attribs: x(e, f, b, c, d) } } }

            function z(a, b) {
                var c = [];
                return r(b)(a, c), c.join("") }

            function A(a, b, c, d) {
                var e = y(b, c, d);
                return z(a, e) }
            var B, C, D; "undefined" != typeof window && (B = window.parseCssDeclarations, C = window.sanitizeCssProperty, D = window.cssSchema);
            var E = { lt: "<", LT: "<", gt: ">", GT: ">", amp: "&", AMP: "&", quot: '"', apos: "'", nbsp: "Â " },
                F = /^#(\d+)$/,
                G = /^#x([0-9A-Fa-f]+)$/,
                H = /^[A-Za-z][A-za-z0-9]+$/,
                I = "undefined" != typeof window && window.document ? window.document.createElement("textarea") : null,
                J = /\0/g,
                K = /&(#[0-9]+|#[xX][0-9A-Fa-f]+|\w+);/g,
                L = /^(#[0-9]+|#[xX][0-9A-Fa-f]+|\w+);/,
                M = /&/g,
                N = /&([^a-z#]|#(?:[^0-9x]|x(?:[^0-9a-f]|$)|$)|$)/gi,
                O = /[<]/g,
                P = />/g,
                Q = /\"/g,
                R = new RegExp("^\\s*([-.:\\w]+)(?:\\s*(=)\\s*((\")[^\"]*(\"|$)|(')[^']*('|$)|(?=[a-z][-\\w]*\\s*=)|[^\"'\\s]*))?", "i"),
                S = 3 === "a,b".split(/(,)/).length,
                T = a.eflags.CDATA | a.eflags.RCDATA,
                U = {},
                V = {},
                W = /^(?:https?|mailto)$/i,
                X = {};
            return X.escapeAttrib = X.escapeAttrib = f, X.makeHtmlSanitizer = X.makeHtmlSanitizer = r, X.makeSaxParser = X.makeSaxParser = h, X.makeTagPolicy = X.makeTagPolicy = y, X.normalizeRCData = X.normalizeRCData = g, X.sanitize = X.sanitize = A, X.sanitizeAttribs = X.sanitizeAttribs = x, X.sanitizeWithPolicy = X.sanitizeWithPolicy = z, X.unescapeEntities = X.unescapeEntities = e, X }(html4),
        html_sanitize = html.sanitize;
    "undefined" != typeof window && (window.html = html, window.html_sanitize = html_sanitize), root.Mustache = Mustache,
        function() {
            function GeometryView() {}

            function SubLayerFactory() {}

            function SubLayerBase(a, b) { this._parent = a, this._position = b, this._added = !0 }

            function CartoDBSubLayer(a, b) { SubLayerBase.call(this, a, b), this._bindInteraction();
                var a = this._parent.getLayer(this._position);
                Backbone.Model && a && (this.infowindow = new Backbone.Model(a.infowindow), this.infowindow.bind("change", function() { a.infowindow = this.infowindow.toJSON(), this._parent.setLayer(this._position, a) }, this)) }

            function HttpSubLayer(a, b) { SubLayerBase.call(this, a, b) }

            function MapProperties(a) { this.mapProperties = a }

            function MapBase(a) {
                var b = this;
                this.options = _.defaults(a, { ajax: window.$ ? window.$.ajax : reqwest.compat, pngParams: ["map_key", "api_key", "cache_policy", "updated_at"], gridParams: ["map_key", "api_key", "cache_policy", "updated_at"], cors: cdb.core.util.isCORSSupported(), MAX_GET_SIZE: 2033, force_cors: !1, instanciateCallback: function() {
                        return "_cdbc_" + b._callbackName() } }), this.mapProperties = null, this.urls = null, this.silent = !1, this.interactionEnabled = [], this._timeout = -1, this._createMapCallsStack = [], this._createMapCallbacks = [], this._waiting = !1, this.lastTimeUpdated = null, this._refreshTimer = -1, this.options.maps_api_template || this._buildMapsApiTemplate(this.options) }

            function LayerDefinition(a, b) { MapBase.call(this, b), this.endPoint = MapBase.BASE_URL, this.setLayerDefinition(a, { silent: !0 }) }

            function NamedMap(a, b) { MapBase.call(this, b), this.options.pngParams.push("auth_token"), this.options.gridParams.push("auth_token"), this.setLayerDefinition(a, b), this.stat_tag = a.stat_tag }

            function CartoDBLayerCommon() { this.visible = !0 }
            var $ = root.$,
                jQuery = root.jQuery,
                L = root.L,
                Mustache = root.Mustache,
                Backbone = root.Backbone,
                _ = root._;
            ! function() {
                var a = this,
                    b = a.cdb = {};
                b.VERSION = "3.15.10", b.DEBUG = !1, b.CARTOCSS_VERSIONS = { "2.0.0": "", "2.1.0": "" }, b.CARTOCSS_DEFAULT_VERSION = "2.1.1", a.cdb.config = {}, a.cdb.core = {}, a.cdb.image = {}, a.cdb.geo = {}, a.cdb.geo.ui = {}, a.cdb.geo.geocoder = {}, a.cdb.ui = {}, a.cdb.ui.common = {}, a.cdb.vis = {}, a.cdb.decorators = {}, a.JST = a.JST || {}, a.cartodb = b, b.files = ["../vendor/jquery.min.js", "../vendor/underscore-min.js", "../vendor/json2.js", "../vendor/backbone.js", "../vendor/mustache.js", "../vendor/leaflet.js", "../vendor/wax.cartodb.js", "../vendor/GeoJSON.js", "../vendor/jscrollpane.js", "../vendor/mousewheel.js", "../vendor/mwheelIntent.js", "../vendor/spin.js", "../vendor/lzma.js", "../vendor/html-css-sanitizer-bundle.js", "core/sanitize.js", "core/decorator.js", "core/config.js", "core/log.js", "core/profiler.js", "core/template.js", "core/model.js", "core/view.js", "core/loader.js", "core/util.js", "geo/geocoder.js", "geo/geometry.js", "geo/map.js", "geo/ui/text.js", "geo/ui/annotation.js", "geo/ui/image.js", "geo/ui/share.js", "geo/ui/zoom.js", "geo/ui/zoom_info.js", "geo/ui/legend.js", "geo/ui/switcher.js", "geo/ui/infowindow.js", "geo/ui/header.js", "geo/ui/search.js", "geo/ui/layer_selector.js", "geo/ui/slides_controller.js", "geo/ui/mobile.js", "geo/ui/tiles_loader.js", "geo/ui/infobox.js", "geo/ui/tooltip.js", "geo/ui/fullscreen.js", "geo/sublayer.js", "geo/layer_definition.js", "geo/common.js", "geo/leaflet/leaflet_base.js", "geo/leaflet/leaflet_plainlayer.js", "geo/leaflet/leaflet_tiledlayer.js", "geo/leaflet/leaflet_gmaps_tiledlayer.js", "geo/leaflet/leaflet_wmslayer.js", "geo/leaflet/leaflet_cartodb_layergroup.js", "geo/leaflet/leaflet_cartodb_layer.js", "geo/leaflet/leaflet.geometry.js", "geo/leaflet/leaflet.js", "geo/gmaps/gmaps_base.js", "geo/gmaps/gmaps_baselayer.js", "geo/gmaps/gmaps_plainlayer.js", "geo/gmaps/gmaps_tiledlayer.js", "geo/gmaps/gmaps_cartodb_layergroup.js", "geo/gmaps/gmaps_cartodb_layer.js", "geo/gmaps/gmaps.geometry.js", "geo/gmaps/gmaps.js", "ui/common/dialog.js", "ui/common/share.js", "ui/common/notification.js", "ui/common/table.js", "ui/common/dropdown.js", "vis/vis.js", "vis/image.js", "vis/overlays.js", "vis/layers.js", "api/layers.js", "api/sql.js", "api/vis.js"], b.init = function(c) {
                    var d = b.Class = function() {};
                    _.extend(d.prototype, Backbone.Events), b._loadJST(), a.cdb.god = new Backbone.Model, c && c() }, b.load = function(a, c) {
                    var d = 0,
                        e = function() {
                            var f = document.createElement("script");
                            f.src = a + b.files[d], document.body.appendChild(f), ++d, d == b.files.length ? c && (f.onload = c) : f.onload = e };
                    e() } }(),
            function(a, b) { a.sanitize = b.html, a.sanitize.html = function(b, c) {
                    return b ? void 0 === c ? a.sanitize.sanitize(b, function(a) {
                        return a }) : "function" == typeof c ? c(b) : b : void 0 } }(cdb.core, window), cdb.decorators.elder = function() {
                    var a = Backbone.Router.extend,
                        b = function(a, b) {
                            var c = null;
                            if (null != this.parent) {
                                var d = this.parent;
                                this.parent = this.parent.parent;
                                var b = Array.prototype.slice.call(arguments, 1);
                                d.hasOwnProperty(a) ? c = d[a].apply(this, b) : (b.splice(0, 0, a), c = d.elder.apply(this, b)), this.parent = d }
                            return c },
                        c = function(c, d) {
                            var e = a.call(this, c, d);
                            return e.prototype.parent = this.prototype, e.prototype.elder = function(a) {
                                var c = Array.prototype.slice.call(arguments, 1);
                                return a ? (c.splice(0, 0, a), b.apply(this, c)) : e.prototype.parent }, e },
                        d = function(a) { a.extend = c, a.prototype.elder = function() {}, a.prototype.parent = null };
                    return d }(), cdb.decorators.elder(Backbone.Model), cdb.decorators.elder(Backbone.View), cdb.decorators.elder(Backbone.Collection), window.JSON || (window.JSON = { stringify: function(a) {
                        if ("number" == typeof a || "boolean" == typeof a) return a.toString();
                        if ("string" == typeof a) return '"' + a.toString() + '"';
                        if (_.isArray(a)) {
                            var b = "[";
                            for (var c in a) c > 0 && (b += ", "), b += JSON.stringify(a[c]);
                            return b += "]" }
                        var b = "{";
                        for (var d in a) a.hasOwnProperty(d) && (b += '"' + d + '": ' + JSON.stringify(a[d]));
                        return b += "}" }, parse: function(param) {
                        return eval(param) } }),
                function() { Config = Backbone.Model.extend({ VERSION: 2, initialize: function() { this.modules = new Backbone.Collection, this.modules.bind("add", function(a) { this.trigger("moduleLoaded"), this.trigger("moduleLoaded:" + a.get("name")) }, this) }, REPORT_ERROR_URL: "/api/v0/error", ERROR_TRACK_ENABLED: !1, getSqlApiBaseUrl: function() {
                            var a;
                            return a = this.get("sql_api_template") ? this.get("sql_api_template").replace("{user}", this.get("user_name")) : this.get("sql_api_protocol") + "://" + this.get("user_name") + "." + this.get("sql_api_domain") + ":" + this.get("sql_api_port") }, getSqlApiUrl: function(a) {
                            return a = a || "v2", this.getSqlApiBaseUrl() + "/api/" + a + "/sql" }, getMapsApiHost: function() {
                            var a, b = this.get("maps_api_template");
                            return b && (a = b.replace(/https?:\/\/{user}\./, "")), a } }), cdb.config = new Config, cdb.config.set({ cartodb_attributions: 'CARTO <a href="https://carto.com/attributions" target="_blank">attribution</a>', cartodb_logo_link: "http://www.carto.com" }) }(),
                function() { cdb.core.Error = Backbone.Model.extend({ url: cdb.config.REPORT_ERROR_URL, initialize: function() { this.set({ browser: JSON.stringify($.browser) }) } }), cdb.core.ErrorList = Backbone.Collection.extend({ model: cdb.core.Error, enableTrack: function() {
                            var a = window.onerror;
                            window.onerror = function(b, c, d) { cdb.errors.create({ msg: b, url: c, line: d }), a && a.apply(window, arguments) } } }), cdb.errors = new cdb.core.ErrorList, cdb.config.ERROR_TRACK_ENABLED && cdb.errors.enableTrack();
                    var a = function() {};
                    if (a.prototype.error = function() {}, a.prototype.log = function() {}, "undefined" != typeof console) { _console = console;
                        try { _console.log.apply(_console, ["cartodb.js " + cartodb.VERSION]) } catch (b) { _console = new a } } else _console = new a;
                    cdb.core.Log = Backbone.Model.extend({ error: function() { _console.error.apply(_console, arguments), cdb.config.ERROR_TRACK_ENABLED && cdb.errors.create({ msg: Array.prototype.slice.call(arguments).join("") }) }, log: function() { _console.log.apply(_console, arguments) }, info: function() { _console.log.apply(_console, arguments) }, debug: function() { cdb.DEBUG && _console.log.apply(_console, arguments) } }) }(), cdb.log = new cdb.core.Log({ tag: "cdb" }),
                function(a) {
                    function b() {}

                    function c(a) { this.t0 = null, this.name = a, this.count = 0 }
                    var d = 1024;
                    b.metrics = {}, b._backend = null, b.get = function(a) {
                        return b.metrics[a] || { max: 0, min: Number.MAX_VALUE, avg: 0, total: 0, count: 0, last: 0, history: "undefined" != typeof Float32Array ? new Float32Array(d) : [] } }, b.backend = function(a) { b._backend = a }, b.new_value = function(a, c, e, f) { e = e || "i";
                        var g = b.metrics[a] = b.get(a);
                        if (g.max = Math.max(g.max, c), g.min = Math.min(g.min, c), g.total += c, ++g.count, g.avg = g.total / g.count, g.history[g.count % d] = c, f) {
                            var h = (new Date).getTime();
                            h - g.last > 1e3 && (b._backend && b._backend([e, a, g.avg]), g.last = h) } else b._backend && b._backend([e, a, c]) }, b.print_stats = function() {
                        for (k in b.metrics) {
                            var a = b.metrics[k];
                            console.log(" === " + k + " === "), console.log(" max: " + a.max), console.log(" min: " + a.min), console.log(" avg: " + a.avg), console.log(" count: " + a.count), console.log(" total: " + a.total) } }, c.prototype = { start: function() {
                            return this.t0 = +new Date, this }, _elapsed: function() {
                            return +new Date - this.t0 }, end: function(a) { null !== this.t0 && (b.new_value(this.name, this._elapsed(), "t", a), this.t0 = null) }, inc: function(a) { a = void 0 === a ? 1 : a, b.new_value(this.name, a, "i") }, dec: function(a) { a = void 0 === a ? 1 : a, b.new_value(this.name, a, "d") }, mark: function() {
                            if (++this.count, null === this.t0) return void this.start();
                            var a = this._elapsed();
                            a > 1 && (b.new_value(this.name, this.count), this.count = 0, this.start()) } }, b.metric = function(a) {
                        return new c(a) }, a.Profiler = b }(cdb.core), cdb.core.Template = Backbone.Model.extend({ initialize: function() { this.bind("change", this._invalidate), this._invalidate() }, url: function() {
                        return this.get("template_url") }, parse: function(a) {
                        return { template: a } }, _invalidate: function() { this.compiled = null, this.get("template_url") && this.fetch() }, compile: function() {
                        var a = this.get("type") || "underscore",
                            b = cdb.core.Template.compilers[a];
                        return b ? b(this.get("template")) : (cdb.log.error("can't get rendered for " + a), null) }, render: function(a) {
                        var b = this.compiled = this.compiled || this.get("compiled") || this.compile(),
                            c = b(a);
                        return c }, asFunction: function() {
                        return _.bind(this.render, this) } }, { compilers: { underscore: _.template, mustache: "undefined" == typeof Mustache ? null : function(a) {
                            return Mustache.parse(a),
                                function(b, c) {
                                    return Mustache.render(a, b, c) } } }, compile: function(a, b) {
                        var c = new cdb.core.Template({ template: a, type: b || "underscore" });
                        return _.bind(c.render, c) } }), cdb.core.TemplateList = Backbone.Collection.extend({ model: cdb.core.Template, getTemplate: function(a) { this.namespace && (a = this.namespace + a);
                        var b = this.find(function(b) {
                            return b.get("name") === a });
                        return b ? _.bind(b.render, b) : (cdb.log.error(a + " not found"), null) } }), cdb.templates = new cdb.core.TemplateList, cdb._loadJST = function() { void 0 !== typeof window.JST && cdb.templates.reset(_(JST).map(function(a, b) {
                        return { name: b, compiled: a } })) },
                function() { cdb._debugCallbacks = function(a) {
                        var b = a._callbacks;
                        for (var c in b) {
                            var d = b[c];
                            console.log(" * ", c);
                            for (var e = d.tail;
                                (d = d.next) !== e;) console.log("    - ", d.context, d.context && d.context.el || "none") } };
                    cdb.core.Model = Backbone.Model.extend({ initialize: function(a) {
                            return _.bindAll(this, "fetch", "save", "retrigger"), Backbone.Model.prototype.initialize.call(this, a) }, fetch: function(a) {
                            var b = this;
                            this.trigger("loadModelStarted"), $.when(this.elder("fetch", a)).done(function(a) { b.trigger("loadModelCompleted", a) }).fail(function(a) { b.trigger("loadModelFailed", a) }) }, setIdAttribute: function(a) { this.idAttribute = a }, retrigger: function(a, b, c) { c || (c = a);
                            var d = this;
                            b.bind && b.bind(a, function() { d.trigger(c) }, d) }, save: function(a, b) {
                            var c = this;
                            b && b.silent || this.trigger("saving");
                            var d = Backbone.Model.prototype.save.apply(this, arguments);
                            return $.when(d).done(function() { b && b.silent || c.trigger("saved") }).fail(function() { b && b.silent || c.trigger("errorSaving") }), d } }) }(),
                function() {
                    var a = cdb.core.View = Backbone.View.extend({ classLabel: "cdb.core.View", constructor: function(b) { this._models = [], this._subviews = {}, Backbone.View.call(this, b), a.viewCount++, a.views[this.cid] = this, this._created_at = new Date, cdb.core.Profiler.new_value("total_views", a.viewCount) }, add_related_model: function(a) {
                            if (!a) throw "added non valid model";
                            this._models.push(a) }, addView: function(a) { this._subviews[a.cid] = a, a._parent = this }, removeView: function(a) { delete this._subviews[a.cid] }, clearSubViews: function() { _(this._subviews).each(function(a) { a.clean() }), this._subviews = {} }, clean: function() {
                            var b = this;
                            return this.trigger("clean"), this.clearSubViews(), this._parent && (this._parent.removeView(this), this._parent = null), this.remove(), this.unbind(), this.model && this.model.unbind && this.model.unbind(null, null, this), _(this._models).each(function(a) { a.unbind(null, null, b) }), this._models = [], a.viewCount--, delete a.views[this.cid], this }, getTemplate: function(a) {
                            return this.options.template ? _.template(this.options.template) : cdb.templates.getTemplate(a) }, show: function() { this.$el.show() }, hide: function() { this.$el.hide() }, retrigger: function(a, b, c) { c || (c = a);
                            var d = this;
                            b.bind && b.bind(a, function() { d.trigger(c) }, d), this.add_related_model(b) }, killEvent: function(a) { a && a.preventDefault && a.preventDefault(), a && a.stopPropagation && a.stopPropagation() }, cleanTooltips: function() { this.$(".tipsy").remove() } }, { viewCount: 0, views: {}, extendEvents: function(a) {
                            return function() {
                                return _.extend(a, this.constructor.__super__.events) } }, runChecker: function() { _.each(cdb.core.View.views, function(a) { _.each(a, function(b, c) { "_parent" !== c && a.hasOwnProperty(c) && b instanceof cdb.core.View && void 0 === a._subviews[b.cid] && (console.log("========="), console.log("untracked view: "), console.log(b.el), console.log("parent"), console.log(a.el), console.log(" ")) }) }) } }) }();
            var Loader = cdb.vis.Loader = cdb.core.Loader = { queue: [], current: void 0, _script: null, head: null, loadScript: function(a) {
                    var b = document.createElement("script");
                    return b.type = "text/javascript", b.src = a, b.async = !0, Loader.head || (Loader.head = document.getElementsByTagName("head")[0]), setTimeout(function() { Loader.head.appendChild(b) }, 0), b }, get: function(a, b) { Loader._script ? Loader.queue.push([a, b]) : (Loader.current = b, Loader._script = Loader.loadScript(a + (~a.indexOf("?") ? "&" : "?") + "callback=vizjson")) }, getPath: function(a) {
                    var b = document.getElementsByTagName("script"),
                        c = /\/?cartodb[\-\._]?([\w\-\._]*)\.js\??/;
                    for (i = 0, len = b.length; i < len; i++)
                        if (src = b[i].src, matches = src.match(c), matches) {
                            var d = src.split("/");
                            return delete d[d.length - 1], d.join("/") + a }
                    return null }, loadModule: function(a) {
                    var b = "cartodb.mod." + a + (cartodb.DEBUG ? ".uncompressed.js" : ".js"),
                        c = this.getPath(b);
                    c || cartodb.log.error("can't find cartodb.js file"), Loader.loadScript(c) } };
            window.vizjson = function(a) { Loader.current && Loader.current(a), Loader.head.removeChild(Loader._script), Loader._script = null;
                var b = Loader.queue.shift();
                b && Loader.get(b[0], b[1]) }, cdb.core.util = {}, cdb.core.util.isCORSSupported = function() {
                return "withCredentials" in new XMLHttpRequest }, cdb.core.util.array2hex = function(a) {
                for (var b = [], c = 0; c < a.length; ++c) b.push(String.fromCharCode(a[c] + 128));
                return cdb.core.util.btoa(b.join("")) }, cdb.core.util.btoa = function(a) {
                return "function" == typeof window.btoa ? cdb.core.util.encodeBase64Native(a) : cdb.core.util.encodeBase64(a) }, cdb.core.util.encodeBase64Native = function(a) {
                return btoa(a) }, cdb.core.util.encodeBase64 = function(a) {
                var b, c, d, e, f, g, h, i, j = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    k = 0,
                    l = 0,
                    m = "",
                    n = [];
                if (!a) return a;
                do b = a.charCodeAt(k++), c = a.charCodeAt(k++), d = a.charCodeAt(k++), i = b << 16 | c << 8 | d, e = i >> 18 & 63, f = i >> 12 & 63, g = i >> 6 & 63, h = 63 & i, n[l++] = j.charAt(e) + j.charAt(f) + j.charAt(g) + j.charAt(h); while (k < a.length);
                m = n.join("");
                var o = a.length % 3;
                return (o ? m.slice(0, o - 3) : m) + "===".slice(o || 3) }, cdb.core.util.uniqueCallbackName = function(a) {
                return cdb.core.util._callback_c = cdb.core.util._callback_c || 0, ++cdb.core.util._callback_c, cdb.core.util.crc32(a) + "_" + cdb.core.util._callback_c }, cdb.core.util.crc32 = function(a) {
                for (var b = cdb.core.util._crcTable || (cdb.core.util._crcTable = cdb.core.util._makeCRCTable()), c = -1, d = 0, e = a.length; e > d; ++d) c = c >>> 8 ^ b[255 & (c ^ a.charCodeAt(d))];
                return (-1 ^ c) >>> 0 }, cdb.core.util._makeCRCTable = function() {
                for (var a, b = [], c = 0; 256 > c; ++c) { a = c;
                    for (var d = 0; 8 > d; ++d) a = 1 & a ? 3988292384 ^ a >>> 1 : a >>> 1;
                    b[c] = a }
                return b }, cdb.core.util._inferBrowser = function(a) {
                function b() {
                    var b = a.indexOf("MSIE "),
                        c = a.indexOf("Trident/");
                    return b > -1 || c > -1 ? !0 : !1 }

                function c() {
                    return document.compatMode ? window.XMLHttpRequest ? document.querySelector ? document.addEventListener ? window.atob ? document.all ? 10 : 11 : 9 : 8 : 7 : 6 : 5 }
                var d = {};
                return a = a || window.navigator.userAgent, b() ? d.ie = { version: c() } : a.indexOf("Edge/") > -1 ? d.edge = a : a.indexOf("Chrome") > -1 ? d.chrome = a : a.indexOf("Firefox") > -1 ? d.firefox = a : a.indexOf("Opera") > -1 ? d.opera = a : a.indexOf("Safari") > -1 && (d.safari = a), d }, cdb.core.util.browser = cdb.core.util._inferBrowser(), cdb.geo.geocoder.YAHOO = { keys: { app_id: "nLQPTdTV34FB9L3yK2dCXydWXRv3ZKzyu_BdCSrmCBAM1HgGErsCyCbBbVP2Yg--" }, geocode: function(a, b) { a = a.toLowerCase().replace(/Ã©/g, "e").replace(/Ã¡/g, "a").replace(/Ã­/g, "i").replace(/Ã³/g, "o").replace(/Ãº/g, "u").replace(/ /g, "+");
                    var c = ""; - 1 === location.protocol.indexOf("http") && (c = "http:"), $.getJSON(c + "//query.yahooapis.com/v1/public/yql?q=" + encodeURIComponent('SELECT * FROM json WHERE url="http://where.yahooapis.com/geocode?q=' + a + "&appid=" + this.keys.app_id + '&flags=JX"') + "&format=json&callback=?", function(a) {
                        var c = [];
                        if (a && a.query && a.query.results && a.query.results.json && a.query.results.json.ResultSet && "0" != a.query.results.json.ResultSet.Found) {
                            var d;
                            d = _.isArray(a.query.results.json.ResultSet.Results) ? a.query.results.json.ResultSet.Results : [a.query.results.json.ResultSet.Results];
                            for (var e in d) {
                                var f, g = d[e];
                                f = { lat: g.latitude, lon: g.longitude }, g.boundingbox && (f.boundingbox = g.boundingbox), c.push(f) } }
                        b(c) }) } }, cdb.geo.geocoder.MAPZEN = { keys: { app_id: "search-DH1Lkhw" }, geocode: function(a, b) { a = a.toLowerCase().replace(/Ã©/g, "e").replace(/Ã¡/g, "a").replace(/Ã­/g, "i").replace(/Ã³/g, "o").replace(/Ãº/g, "u");
                    var c = ""; - 1 === location.protocol.indexOf("http") && (c = "http:"), $.getJSON(c + "//search.mapzen.com/v1/search?text=" + encodeURIComponent(a) + "&api_key=" + this.keys.app_id, function(a) {
                        var c = [];
                        if (a && a.features && a.features.length > 0) {
                            var d = a.features;
                            for (var e in d) {
                                var f, g = d[e];
                                f = { lat: g.geometry.coordinates[1], lon: g.geometry.coordinates[0] }, g.properties.layer && (f.type = g.properties.layer), g.properties.label && (f.title = g.properties.label), c.push(f) } }
                        b && b.call(this, c) }) } }, cdb.geo.geocoder.NOKIA = { keys: { app_id: "KuYppsdXZznpffJsKT24", app_code: "A7tBPacePg9Mj_zghvKt9Q" }, geocode: function(a, b) { a = a.toLowerCase().replace(/Ã©/g, "e").replace(/Ã¡/g, "a").replace(/Ã­/g, "i").replace(/Ã³/g, "o").replace(/Ãº/g, "u");
                    var c = ""; - 1 === location.protocol.indexOf("http") && (c = "http:"), $.getJSON(c + "//places.nlp.nokia.com/places/v1/discover/search/?q=" + encodeURIComponent(a) + "&app_id=" + this.keys.app_id + "&app_code=" + this.keys.app_code + "&Accept-Language=en-US&at=0,0&callback=?", function(a) {
                        var c = [];
                        if (a && a.results && a.results.items && a.results.items.length > 0) {
                            var d = a.results.items;
                            for (var e in d) {
                                var f, g = d[e];
                                f = { lat: g.position[0], lon: g.position[1] }, g.bbox && (f.boundingbox = { north: g.bbox[3], south: g.bbox[1], east: g.bbox[2], west: g.bbox[0] }), g.category && (f.type = g.category.id), g.title && (f.title = g.title), c.push(f) } }
                        b && b.call(this, c) }) } }, cdb.geo.Geometry = cdb.core.Model.extend({ isPoint: function() {
                    var a = this.get("geojson").type;
                    return a && "point" === a.toLowerCase() ? !0 : !1 } }), cdb.geo.Geometries = Backbone.Collection.extend({}), _.extend(GeometryView.prototype, Backbone.Events, { edit: function() {
                    throw new Error("to be implemented") } }), cdb.geo.MapLayer = cdb.core.Model.extend({ defaults: { visible: !0, type: "Tiled" }, isEqual: function(a) {
                    var b = this.toJSON(),
                        c = a.toJSON(),
                        d = ["id", "order"];
                    _.each(d, function(a) { delete b[a], delete c[a], b.options && delete b.options[a], c.options && delete c.options[a] });
                    var e = b.type ? b.type : b.options.type,
                        f = c.type ? c.type : c.options.type;
                    if (e && e === f) {
                        if ("Tiled" === e) {
                            var g = b.urlTemplate ? b.urlTemplate : b.options.urlTemplate,
                                h = c.urlTemplate ? c.urlTemplate : c.options.urlTemplate,
                                i = b.name ? b.name : b.options.name,
                                j = c.name ? c.name : c.options.name;
                            return g === h && i === j }
                        if ("WMS" === e) {
                            var g = b.urlTemplate ? b.urlTemplate : b.options.urlTemplate,
                                h = c.urlTemplate ? c.urlTemplate : c.options.urlTemplate,
                                k = b.layers ? b.layers : b.options.layers,
                                l = c.layers ? c.layers : c.options.layers;
                            return g === h && k === l }
                        if ("torque" === e) return cdb.geo.TorqueLayer.prototype.isEqual.call(this, a);
                        if ("named_map" === e) return cdb.geo.CartoDBNamedMapLayer.prototype.isEqual.call(this, a);
                        var m = b.base_type ? b.base_type : b.options.base_type;
                        c.base_type ? c.base_type : c.options.base_type;
                        return m ? _.isEqual(b, c) ? !0 : !1 : !0 }
                    return !1 } }), cdb.geo.TileLayer = cdb.geo.MapLayer.extend({ getTileLayer: function() {} }), cdb.geo.GMapsBaseLayer = cdb.geo.MapLayer.extend({ OPTIONS: ["roadmap", "satellite", "terrain", "custom"], defaults: { type: "GMapsBase", base_type: "gray_roadmap", style: null } }), cdb.geo.WMSLayer = cdb.geo.MapLayer.extend({ defaults: { service: "WMS", request: "GetMap", version: "1.1.1", layers: "", styles: "", format: "image/jpeg", transparent: !1 } }), cdb.geo.PlainLayer = cdb.geo.MapLayer.extend({ defaults: { type: "Plain", base_type: "plain", className: "plain", color: "#FFFFFF", image: "" } }), cdb.geo.TorqueLayer = cdb.geo.MapLayer.extend({
                defaults: {
                    type: "torque",
                    visible: !0
                },
                isEqual: function(a) {
                    var b = ["query", "query_wrapper", "cartocss"],
                        c = this;
                    return this.get("type") === a.get("type") && _.every(b, function(b) {
                        return a.get(b) === c.get(b) }) }
            }), cdb.geo.CartoDBLayer = cdb.geo.MapLayer.extend({ defaults: { attribution: cdb.config.get("cartodb_attributions"), type: "CartoDB", active: !0, query: null, opacity: .99, interactivity: null, interaction: !0, debug: !1, tiler_domain: "carto.com", tiler_port: "80", tiler_protocol: "http", sql_api_domain: "carto.com", sql_api_port: "80", sql_api_protocol: "http", extra_params: {}, cdn_url: null, maxZoom: 28 }, activate: function() { this.set({ active: !0, opacity: .99, visible: !0 }) }, deactivate: function() { this.set({ active: !1, opacity: 0, visible: !1 }) }, invalidate: function() {
                    var a = this.get("extra_params") || a;
                    a.cache_buster = (new Date).getTime(), this.set("extra_params", a), this.trigger("change", this) }, toggle: function() { this.get("active") ? this.deactivate() : this.activate() } }), cdb.geo.CartoDBGroupLayer = cdb.geo.MapLayer.extend({ defaults: { visible: !0, type: "layergroup" }, initialize: function() { this.sublayers = new cdb.geo.Layers }, isEqual: function() {
                    return !1 }, contains: function(a) {
                    return "cartodb" === a.get("type") } }), cdb.geo.CartoDBNamedMapLayer = cdb.geo.MapLayer.extend({ defaults: { visible: !0, type: "namedmap" }, isEqual: function(a) {
                    return _.isEqual(this.get("options").named_map, a.get("options").named_map) } });
            var TILED_LAYER_TYPE = "Tiled",
                CARTODB_LAYER_TYPE = "CartoDB",
                TORQUE_LAYER_TYPE = "torque";
            if (cdb.geo.Layers = Backbone.Collection.extend({ model: cdb.geo.MapLayer, initialize: function() { this.comparator = function(a) {
                            return parseInt(a.get("order"), 10) }, this.bind("add", this._assignIndexes), this.bind("remove", this._assignIndexes) }, _assignIndexes: function(a, b, c) {
                        if (this.size() > 0 && (this.at(0).set({ order: 0 }), this.size() > 1)) {
                            for (var d = {}, e = 1; e < this.size(); ++e) {
                                var f = this.at(e),
                                    g = f.get("type");
                                d[g] = d[g] || [], d[g].push(f) }
                            for (var h = 0, i = [CARTODB_LAYER_TYPE, TORQUE_LAYER_TYPE, TILED_LAYER_TYPE], e = 0; e < i.length; ++e)
                                for (var j = i[e], k = d[j] || [], l = 0; l < k.length; ++l) {
                                    var f = k[l];
                                    f.set({ order: ++h }) } } } }), cdb.geo.Map = cdb.core.Model.extend({ defaults: { attribution: [cdb.config.get("cartodb_attributions")], center: [0, 0], zoom: 3, minZoom: 0, maxZoom: 40, scrollwheel: !0, drag: !0, keyboard: !0, provider: "leaflet" }, initialize: function() { this.layers = new cdb.geo.Layers, this.layers.bind("reset", function() { this.layers.size() >= 1 && this._adjustZoomtoLayer(this.layers.models[0]) }, this), this.layers.bind("reset", this._updateAttributions, this), this.layers.bind("add", this._updateAttributions, this), this.layers.bind("remove", this._updateAttributions, this), this.layers.bind("change:attribution", this._updateAttributions, this), this.geometries = new cdb.geo.Geometries }, _updateAttributions: function() {
                        var a = cdb.core.sanitize.html(this.defaults.attribution[0]),
                            b = _.chain(this.layers.models).map(function(a) {
                                return cdb.core.sanitize.html(a.get("attribution")) }).reject(function(b) {
                                return b == a }).compact().uniq().value();
                        b.push(a), this.set("attribution", b) }, setView: function(a, b) { this.set({ center: a, zoom: b }, { silent: !0 }), this.trigger("set_view") }, setZoom: function(a) { this.set({ zoom: a }) }, enableKeyboard: function() { this.set({ keyboard: !0 }) }, disableKeyboard: function() { this.set({ keyboard: !1 }) }, enableScrollWheel: function() { this.set({ scrollwheel: !0 }) }, disableScrollWheel: function() { this.set({ scrollwheel: !1 }) }, getZoom: function() {
                        return this.get("zoom") }, setCenter: function(a) { this.set({ center: a }) }, setOptions: function(a) {
                        if ("object" != typeof a || a.length) {
                            if (this.options.debug) throw a + " options has to be an object" } else _.defaults(this.options, a) }, getViewBounds: function() {
                        return this.has("view_bounds_sw") && this.has("view_bounds_ne") ? [this.get("view_bounds_sw"), this.get("view_bounds_ne")] : null }, getLayerAt: function(a) {
                        return this.layers.at(a) }, getLayerByCid: function(a) {
                        return this.layers.getByCid(a) }, _adjustZoomtoLayer: function(a) {
                        var b = parseInt(a.get("maxZoom"), 10),
                            c = parseInt(a.get("minZoom"), 10);
                        _.isNumber(b) && !_.isNaN(b) && (this.get("zoom") > b ? this.set({ zoom: b, maxZoom: b }) : this.set("maxZoom", b)), _.isNumber(c) && !_.isNaN(c) && (this.get("zoom") < c ? this.set({ minZoom: c, zoom: c }) : this.set("minZoom", c)) }, addLayer: function(a, b) {
                        return 0 == this.layers.size() && this._adjustZoomtoLayer(a), this.layers.add(a, b), this.trigger("layerAdded"), 1 === this.layers.length && this.trigger("firstLayerAdded"), a.cid }, removeLayer: function(a) { this.layers.remove(a) }, removeLayerByCid: function(a) {
                        var b = this.layers.getByCid(a);
                        b ? this.removeLayer(b) : cdb.log.error("There's no layer with cid = " + a + ".") }, removeLayerAt: function(a) {
                        var b = this.layers.at(a);
                        b ? this.removeLayer(b) : cdb.log.error("There's no layer in that position.") }, clearLayers: function() {
                        for (; this.layers.length > 0;) this.removeLayer(this.layers.at(0)) }, getBaseLayer: function() {
                        return this.layers.at(0) }, isBaseLayerAdded: function(a) {
                        var b = this.getBaseLayer();
                        return b && a.isEqual(b) }, getLayerTemplate: function() {
                        var a = this.getBaseLayer();
                        return a && a.get("options") ? a.get("options").urlTemplate : void 0 }, addGeometry: function(a) { this.geometries.add(a) }, removeGeometry: function(a) { this.geometries.remove(a) }, setBounds: function(a) { this.attributes.view_bounds_sw = [a[0][0], a[0][1]], this.attributes.view_bounds_ne = [a[1][0], a[1][1]], this.trigger("change:view_bounds_ne", this) }, fitBounds: function(a, b) {
                        var c = this.getBoundsZoom(a, b);
                        if (null !== c) {
                            var d = cdb.geo.Map.latlngToMercator(a[0], c),
                                e = cdb.geo.Map.latlngToMercator(a[1], c),
                                f = cdb.geo.Map.mercatorToLatLng({ x: .5 * (d[0] + e[0]), y: .5 * (d[1] + e[1]) }, c);
                            this.set({ center: f, zoom: c }) } }, getBoundsZoom: function(a, b) {
                        if (0 === b.x || 0 === b.y) return null;
                        var c, d, e = [b.x, b.y],
                            f = this.get("minZoom") || 0,
                            g = this.get("maxZoom") || 24,
                            h = a[1],
                            i = a[0],
                            j = [],
                            k = !0;
                        do f++, c = cdb.geo.Map.latlngToMercator(h, f), d = cdb.geo.Map.latlngToMercator(i, f), j[0] = Math.abs(c[0] - d[0]), j[1] = Math.abs(d[1] - c[1]), k = j[0] <= e[0] || j[1] <= e[1]; while (k && g >= f);
                        return k ? g : f - 1 } }, { latlngToMercator: function(a, b) {
                        var c = new L.LatLng(a[0], a[1]),
                            d = L.CRS.EPSG3857.latLngToPoint(c, b);
                        return [d.x, d.y] }, mercatorToLatLng: function(a, b) {
                        var c = L.CRS.EPSG3857.pointToLatLng(a, b);
                        return [c.lat, c.lng] } }), cdb.geo.MapView = cdb.core.View.extend({ initialize: function() {
                        if (void 0 === this.options.map) throw "you should specify a map model";
                        this.map = this.options.map, this.add_related_model(this.map), this.add_related_model(this.map.layers), this.autoSaveBounds = !1, this.layers = {}, this.geometries = {}, this.bind("clean", this._removeLayers, this) }, render: function() {
                        return this }, addInfowindow: function(a) { this.addOverlay(a) }, addOverlay: function(a) { a && (this.$el.append(a.render().el), this.addView(a)) }, getInfoWindows: function() {
                        var a = [];
                        for (var b in this._subviews) this._subviews[b] instanceof cdb.geo.ui.Infowindow && a.push(this._subviews[b]);
                        return a }, showBounds: function(a) {
                        throw "to be implemented" }, _setModelProperty: function(a) {
                        if (this._unbindModel(), this.map.set(a), void 0 !== a.center || void 0 !== a.zoom) {
                            var b = this.getBounds();
                            this.map.set({ view_bounds_sw: b[0], view_bounds_ne: b[1] }), this.autoSaveBounds && this._saveLocation() }
                        this._bindModel() }, _bindModel: function() { this._unbindModel(), this.map.bind("change:view_bounds_sw", this._changeBounds, this), this.map.bind("change:view_bounds_ne", this._changeBounds, this), this.map.bind("change:zoom", this._setZoom, this), this.map.bind("change:scrollwheel", this._setScrollWheel, this), this.map.bind("change:keyboard", this._setKeyboard, this), this.map.bind("change:center", this._setCenter, this), this.map.bind("change:attribution", this.setAttribution, this) }, _unbindModel: function() { this.map.unbind("change:view_bounds_sw", null, this), this.map.unbind("change:view_bounds_ne", null, this), this.map.unbind("change:zoom", null, this), this.map.unbind("change:scrollwheel", null, this), this.map.unbind("change:keyboard", null, this), this.map.unbind("change:center", null, this), this.map.unbind("change:attribution", null, this) }, _changeBounds: function() {
                        var a = this.map.getViewBounds();
                        a && this.showBounds(a) }, showBounds: function(a) { this.map.fitBounds(a, this.getSize()) }, _addLayers: function() {
                        var a = this;
                        this._removeLayers(), this.map.layers.each(function(b) { a._addLayer(b) }) }, _removeLayers: function(a) {
                        for (var b in this.layers) {
                            var c = this.layers[b];
                            c.remove(), delete this.layers[b] } }, _removeLayer: function(a) {
                        var b = this.layers[a.cid];
                        b && (b.remove(), delete this.layers[a.cid]) }, _swicthLayerView: function(a, b, c) { this._removeLayer(a), this._addLayer(a, this.map.layers, c) }, _removeGeometry: function(a) { this.geometries[a.cid];
                        delete this.layers[layer.cid] }, getLayerByCid: function(a) {
                        var b = this.layers[a];
                        return b || cdb.log.debug("layer with cid " + a + " can't be get"), b }, _setZoom: function(a, b) {
                        throw "to be implemented" }, _setCenter: function(a, b) {
                        throw "to be implemented" }, _addLayer: function(a, b, c) {
                        throw "to be implemented" }, _addGeomToMap: function(a) {
                        throw "to be implemented" }, _removeGeomFromMap: function(a) {
                        throw "to be implemented" }, setAutoSaveBounds: function() { this.autoSaveBounds = !0 }, _saveLocation: _.debounce(function() { this.map.save(null, { silent: !0 }) }, 1e3), _addGeometry: function(a) {
                        var b = this._addGeomToMap(a);
                        this.geometries[a.cid] = b }, _removeGeometry: function(a) {
                        var b = this.geometries[a.cid];
                        this._removeGeomFromMap(b), delete this.geometries[a.cid] } }, { _getClass: function(a) {
                        var b = cdb.geo.LeafletMapView;
                        return "googlemaps" === a && ("undefined" != typeof google && "undefined" != typeof google.maps ? b = cdb.geo.GoogleMapsMapView : cdb.log.error("you must include google maps library _before_ include cdb")), b }, create: function(a, b) {
                        var c = cdb.geo.MapView._getClass(b.get("provider"));
                        return new c({ el: a, map: b }) } }), cdb.geo.ui.Text = cdb.core.View.extend({ className: "cartodb-overlay overlay-text", events: { click: "stopPropagation" }, default_options: {}, stopPropagation: function(a) { a.stopPropagation() }, initialize: function() { _.defaults(this.options, this.default_options), this.template = this.options.template;
                        var a = this;
                        $(window).on("map_resized", function() { a._place() }), $(window).on("resize", function() { a._place() }) }, _applyStyle: function() {
                        var a = this.model.get("style"),
                            b = a["box-color"],
                            c = a["box-opacity"],
                            d = a["box-width"],
                            e = a["font-family-name"];
                        this.$text = this.$el.find(".text"), this.$text.css(a), this.$text.css("font-size", a["font-size"] + "px"), this.$el.css("z-index", a["z-index"]);
                        var f = ""; "Droid Sans" == e ? f = "droid" : "Vollkorn" == e ? f = "vollkorn" : "Open Sans" == e ? f = "open_sans" : "Roboto" == e ? f = "roboto" : "Lato" == e ? f = "lato" : "Graduate" == e ? f = "graduate" : "Gravitas One" == e ? f = "gravitas_one" : "Old Standard TT" == e && (f = "old_standard_tt");
                        var g = "rgba(" + parseInt(b.slice(-6, -4), 16) + "," + parseInt(b.slice(-4, -2), 16) + "," + parseInt(b.slice(-2), 16) + ", " + c + " )";
                        this.$el.removeClass("droid").removeClass("vollkorn").removeClass("roboto").removeClass("open_sans").removeClass("lato").removeClass("graduate").removeClass("gravitas_one").removeClass("old_standard_tt"), this.$el.addClass(f), this.$el.css({ backgroundColor: g, maxWidth: d }) }, _place: function(a) {
                        var b = a || this.model.get("extra"),
                            c = this.model.get("y"),
                            d = this.model.get("x"),
                            e = b.bottom - this.$el.height(),
                            f = b.right - this.$el.width(),
                            g = b.top_percentage,
                            h = b.left_percentage,
                            i = "auto",
                            j = "auto",
                            k = 0,
                            l = 0,
                            m = b.width,
                            n = b.height,
                            o = b.portrait_dominant_side,
                            p = b.landscape_dominant_side; "bottom" === o && 250 >= e ? (c = "auto", j = e) : g > 45 && 55 > g && (c = "50%", k = -n / 2), "right" === p && 250 >= f ? (d = "auto", i = f) : h > 45 && 55 > h && (d = "50%", l = -m / 2), this.$el.css({ marginLeft: l, marginTop: k, top: c, left: d, right: i, bottom: j }) }, show: function(a) { this.$el.fadeIn(150, function() { a && a() }) }, hide: function(a) { this.$el.fadeOut(150, function() { a && a() }) }, _fixLinks: function() { this.$el.find("a").each(function(a, b) { $(this).attr("target", "_top") }) }, render: function() {
                        var a = cdb.core.sanitize.html(this.model.get("extra").rendered_text, this.model.get("sanitizeText")),
                            b = _.chain(this.model.attributes).clone().extend({ text: a }).value();
                        this.$el.html(this.template(b)), this._fixLinks();
                        var c = this;
                        return setTimeout(function() { c._applyStyle(), c._place(), c.show() }, 900), this } }), cdb.geo.ui.Annotation = cdb.core.View.extend({ className: "cartodb-overlay overlay-annotation", defaults: { minZoom: 0, maxZoom: 40, style: { textAlign: "left", zIndex: 5, color: "#ffffff", fontSize: "13", fontFamilyName: "Helvetica", boxColor: "#333333", boxOpacity: .7, boxPadding: 10, lineWidth: 50, lineColor: "#333333" } }, template: cdb.core.Template.compile('<div class="content">    <div class="text widget_text">{{{ text }}}</div>    <div class="stick"><div class="ball"></div></div>    </div>', "mustache"), events: { click: "stopPropagation" }, stopPropagation: function(a) { a.stopPropagation() }, initialize: function() { this.template = this.options.template || this.template, this.mapView = this.options.mapView, this.mobileEnabled = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), this._cleanStyleProperties(this.options.style), _.defaults(this.options.style, this.defaults.style), this._setupModels(), this._bindMap() }, _setupModels: function() { this.model = new cdb.core.Model({ display: !0, hidden: !1, text: this.options.text, latlng: this.options.latlng, minZoom: this.options.minZoom || this.defaults.minZoom, maxZoom: this.options.maxZoom || this.defaults.maxZoom }), this.model.on("change:display", this._onChangeDisplay, this), this.model.on("change:text", this._onChangeText, this), this.model.on("change:latlng", this._place, this), this.model.on("change:minZoom", this._applyZoomLevelStyle, this), this.model.on("change:maxZoom", this._applyZoomLevelStyle, this), this.style = new cdb.core.Model(this.options.style), this.style.on("change", this._applyStyle, this), this.add_related_model(this.style) }, _bindMap: function() { this.mapView.map.bind("change", this._place, this), this.mapView.map.bind("change:zoom", this._applyZoomLevelStyle, this), this.mapView.bind("zoomstart", this.hide, this), this.mapView.bind("zoomend", this.show, this) }, _unbindMap: function() { this.mapView.map.unbind("change", this._place, this), this.mapView.map.unbind("change:zoom", this._applyZoomLevelStyle, this), this.mapView.unbind("zoomstart", this.hide, this), this.mapView.unbind("zoomend", this.show, this) }, _onChangeDisplay: function() { this.model.get("display") ? this.show() : this.hide() }, _onChangeText: function() { this.$el.find(".text").html(this._sanitizedText()) }, _sanitizedText: function() {
                        return cdb.core.sanitize.html(this.model.get("text"), this.model.get("sanitizeText")) }, _getStandardPropertyName: function(a) {
                        if (a) {
                            var b = a.split("-");
                            return 1 === b.length ? a : b[0] + _.map(b.slice(1), function(a) {
                                return a.slice(0, 1).toUpperCase() + a.slice(1) }).join("") } }, _cleanStyleProperties: function(a) {
                        var b = {};
                        _.each(a, function(a, c) { b[this._getStandardPropertyName(c)] = a }, this), this.options.style = b }, _belongsToCanvas: function() {
                        var a = "mobile" === this.options.device ? !0 : !1;
                        return a === this.mobileEnabled }, show: function(a) {
                        if (!this.model.get("hidden") && this._belongsToCanvas()) { this.$el.css({ opacity: 0, display: "inline-table" }), this.$el.stop().animate({ opacity: 1 }, { duration: 150, complete: function() { a && a() } }) } }, hide: function(a) { this.$el.stop().fadeOut(150, function() { a && a() }) }, _place: function() {
                        var a = this.model.get("latlng"),
                            b = this.style.get("lineWidth"),
                            c = this.style.get("textAlign"),
                            d = this.mapView.latLonToPixel(a);
                        if (d) {
                            var e = d.y - this.$el.height() / 2,
                                f = d.x + b; "right" === c && (f = d.x - this.$el.width() - b - this.$el.find(".ball").width()), this.$el.css({ top: e, left: f }) } }, setMinZoom: function(a) { this.model.set("minZoom", a) }, setMaxZoom: function(a) { this.model.set("maxZoom", a) }, setPosition: function(a) { this.model.set("latlng", a) }, setText: function(a) { this.model.set("text", a) }, setStyle: function(a, b) {
                        var c = this._getStandardPropertyName(a);
                        c && this.style.set(c, b) }, _applyStyle: function() {
                        var a = this.style.get("color"),
                            b = this.style.get("textAlign"),
                            c = (this.style.get("boxColor"), this.style.get("boxOpacity"), this.style.get("boxPadding")),
                            d = this.style.get("lineWidth"),
                            e = (this.style.get("lineColor"), this.style.get("fontFamilyName"));
                        this.$text = this.$el.find(".text"), this.$text.css({ color: a, textAlign: b }), this.$el.find(".content").css("padding", c), this.$text.css("font-size", this.style.get("fontSize") + "px"), this.$el.css("z-index", this.style.get("zIndex")), this.$el.find(".stick").css({ width: d, left: -d });
                        var f = ""; "Droid Sans" == e ? f = "droid" : "Vollkorn" == e ? f = "vollkorn" : "Open Sans" == e ? f = "open_sans" : "Roboto" == e ? f = "roboto" : "Lato" == e ? f = "lato" : "Graduate" == e ? f = "graduate" : "Gravitas One" == e ? f = "gravitas_one" : "Old Standard TT" == e && (f = "old_standard_tt"), this.$el.removeClass("droid").removeClass("vollkorn").removeClass("roboto").removeClass("open_sans").removeClass("lato").removeClass("graduate").removeClass("gravitas_one").removeClass("old_standard_tt"), this.$el.addClass(f), "right" === b ? (this.$el.addClass("align-right"), this.$el.find(".stick").css({ left: "auto", right: -d })) : this.$el.removeClass("align-right"), this._place(), this._applyZoomLevelStyle() }, _getRGBA: function(a, b) {
                        return "rgba(" + parseInt(a.slice(-6, -4), 16) + "," + parseInt(a.slice(-4, -2), 16) + "," + parseInt(a.slice(-2), 16) + "," + b + " )" }, _applyZoomLevelStyle: function() {
                        var a = this.style.get("boxColor"),
                            b = this.style.get("boxOpacity"),
                            c = this.style.get("lineColor"),
                            d = this.model.get("minZoom"),
                            e = this.model.get("maxZoom"),
                            f = this.mapView.map.get("zoom");
                        if (f >= d && e >= f) {
                            var g = this._getRGBA(c, 1),
                                h = this._getRGBA(a, b);
                            this.$el.find(".text").animate({ opacity: 1 }, 150), this.$el.css("background-color", h), this.$el.find(".stick").css("background-color", g), this.$el.find(".ball").css("background-color", g), this.model.set("hidden", !1), this.model.set("display", !0) } else this.model.set("hidden", !0), this.model.set("display", !1) }, clean: function() { this._unbindMap(), cdb.core.View.prototype.clean.call(this) }, _fixLinks: function() { this.$el.find("a").each(function(a, b) { $(this).attr("target", "_top") }) }, render: function() {
                        var a = _.clone(this.model.attributes);
                        a.text = this._sanitizedText(), this.$el.html(this.template(a)), this._fixLinks();
                        var b = this;
                        return setTimeout(function() { b._applyStyle(), b._applyZoomLevelStyle(), b.show() }, 500), this } }), cdb.geo.ui.Image = cdb.geo.ui.Text.extend({ className: "cartodb-overlay image-overlay", events: { click: "stopPropagation" }, default_options: {}, stopPropagation: function(a) { a.stopPropagation() }, initialize: function() { _.defaults(this.options, this.default_options), this.template = this.options.template;
                        var a = this;
                        $(window).on("map_resized", function() { a._place() }), $(window).on("resize", function() { a._place() }) }, _applyStyle: function() {
                        var a = this.model.get("style"),
                            b = a["box-color"],
                            c = a["box-opacity"],
                            d = a["box-width"];
                        this.$el.find(".text").css(a), this.$el.css("z-index", a["z-index"]);
                        var e = "rgba(" + parseInt(b.slice(-6, -4), 16) + "," + parseInt(b.slice(-4, -2), 16) + "," + parseInt(b.slice(-2), 16) + ", " + c + " )";
                        this.$el.css({ backgroundColor: e }), this.$el.find("img").css({ width: d }) }, render: function() {
                        var a;
                        a = this.model.get("extra").has_default_image ? _.template('<img src="<%- url %>" />')({ url: this.model.get("extra").public_default_image_url }) : cdb.core.sanitize.html(this.model.get("extra").rendered_text, this.model.get("sanitizeContent"));
                        var b = _.chain(this.model.attributes).clone().extend({ content: a }).value();
                        this.$el.html(this.template(b));
                        var c = this;
                        return setTimeout(function() { c._applyStyle(), c._place(), c.show() }, 900), this } }), cdb.geo.ui.Share = cdb.core.View.extend({ className: "cartodb-share", events: { "click a": "_onClick" }, default_options: {}, initialize: function() { _.bindAll(this, "_onClick"), _.defaults(this.options, this.default_options), this.template = this.options.template }, _applyStyle: function() {}, _onClick: function(a) { a.preventDefault(), a.stopPropagation(), this.dialog.show() }, createDialog: function() {
                        var a = this.options;
                        a.template = "", location.href ? a.share_url = encodeURIComponent(location.href) : a.share_url = a.url;
                        var b = cdb.core.Template.compile(a.template || '      <div class="mamufas">      <div class="block modal {{modal_type}}">      <a href="#close" class="close">x</a>      <div class="head">      <h3>Share this map</h3>      </div>      <div class="content">      <div class="buttons">      <h4>Social</h4>      <ul>      <li><a class="facebook" target="_blank" href="{{ facebook_url }}">Share on Facebook</a></li>      <li><a class="twitter" href="{{ twitter_url }}" target="_blank">Share on Twitter</a></li>      <li><a class="link" href="{{ public_map_url }}" target="_blank">Link to this map</a></li>      </ul>      </div><div class="embed_code">      <h4>Embed this map</h4>      <textarea id="" name="" cols="30" rows="10">{{ code }}</textarea>      </div>      </div>      </div>      </div>      ', a.templateType || "mustache"),
                            c = location.href;
                        c = c.replace("public_map", "embed_map");
                        var d = c.replace("embed_map", "public_map"),
                            e = "<iframe width='100%' height='520' frameborder='0' src='" + c + "' allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>";
                        this.dialog = new cdb.ui.common.ShareDialog({ title: a.map.get("title"), description: a.map.get("description"), model: this.options.vis.map, code: e, url: a.url, public_map_url: d, share_url: a.share_url, template: b, target: $(".cartodb-share a"), size: $(document).width() > 400 ? "" : "small", width: $(document).width() > 400 ? 430 : 216 }), $(".cartodb-map-wrapper").append(this.dialog.render().$el), this.addView(this.dialog) }, render: function() {
                        return this.$el.html(this.template(_.extend(this.model.attributes))), this } }), cdb.geo.ui.Zoom = cdb.core.View.extend({ className: "cartodb-zoom", events: { "click .zoom_in": "zoom_in", "click .zoom_out": "zoom_out" }, default_options: { timeout: 0, msg: "" }, initialize: function() { this.map = this.model, _.defaults(this.options, this.default_options), this.template = this.options.template ? this.options.template : cdb.templates.getTemplate("geo/zoom"), this.map.bind("change:zoom change:minZoom change:maxZoom", this._checkZoom, this) }, render: function() {
                        return this.$el.html(this.template(this.options)), this._checkZoom(), this }, _checkZoom: function() {
                        var a = this.map.get("zoom");
                        this.$(".zoom_in")[a < this.map.get("maxZoom") ? "removeClass" : "addClass"]("disabled"), this.$(".zoom_out")[a > this.map.get("minZoom") ? "removeClass" : "addClass"]("disabled") }, zoom_in: function(a) { this.map.get("maxZoom") > this.map.getZoom() && this.map.setZoom(this.map.getZoom() + 1), a.preventDefault(), a.stopPropagation() }, zoom_out: function(a) { this.map.get("minZoom") < this.map.getZoom() && this.map.setZoom(this.map.getZoom() - 1), a.preventDefault(), a.stopPropagation() } }), cdb.geo.ui.ZoomInfo = cdb.core.View.extend({ className: "cartodb-zoom-info", initialize: function() { this.model.bind("change:zoom", this.render, this) }, render: function() {
                        return this.$el.html(this.model.get("zoom")), this } }), cdb.geo.ui.LegendItemModel = cdb.core.Model.extend({ defaults: { name: "Untitled", visible: !0, value: "" } }), cdb.geo.ui.LegendItems = Backbone.Collection.extend({ model: cdb.geo.ui.LegendItemModel }), cdb.geo.ui.LegendModel = cdb.core.Model.extend({ defaults: { type: null, show_title: !1, title: "", template: "", visible: !0 }, initialize: function() { this.items = new cdb.geo.ui.LegendItems(this.get("items")), this.items.bind("add remove reset change", function() { this.set({ items: this.items.toJSON() }) }, this), this.bind("change:items", this._onUpdateItems, this), this.bind("change:title change:show_title", this._onUpdateTitle, this), this.bind("change:template", this._onUpdateTemplate, this) }, _onUpdateTemplate: function() { this.template = this.get("template") }, _onUpdateTitle: function() { this.title = this.get("title"), this.show_title = this.get("show_title") }, _onUpdateItems: function() {
                        var a = this.get("items");
                        this.items.reset(a) } }), cdb.geo.ui.Legends = Backbone.Collection.extend({ model: cdb.geo.ui.LegendModel }), cdb.geo.ui.LegendItem = cdb.core.View.extend({ tagName: "li", initialize: function() { _.bindAll(this, "render"), this.template = this.options.template ? _.template(this.options.template) : cdb.templates.getTemplate("geo/legend") }, render: function() {
                        var a;
                        this.model.attributes.name = "" + this.model.attributes.name, a = "image" == this.model.get("type") && this.model.get("value") ? "url( " + this.model.get("value") + ")" : this.model.get("value");
                        var b = _.extend(this.model.toJSON(), { value: a });
                        return this.$el.html(this.template(b)), this.$el } }), cdb.geo.ui.Legend = cdb.core.View.extend({ className: "cartodb-legend", events: { dragstart: "_stopPropagation", mousedown: "_stopPropagation", touchstart: "_stopPropagation", MSPointerDown: "_stopPropagation", dblclick: "_stopPropagation", mousewheel: "_stopPropagation", DOMMouseScroll: "_stopPropagation", dbclick: "_stopPropagation", click: "_stopPropagation" }, initialize: function() { _.bindAll(this, "render", "show", "hide"), _.defaults(this.options, this.default_options), this.map = this.options.map, this._setupModel(), this._setupItems(), this._updateLegendType() }, _stopPropagation: function(a) { a.stopPropagation() }, _setupModel: function() { this.model || (this.model = new cdb.geo.ui.LegendModel({ type: this.options.type || cdb.geo.ui.LegendModel.prototype.defaults.type, title: this.options.title || cdb.geo.ui.LegendModel.prototype.defaults.title, show_title: this.options.show_title || cdb.geo.ui.LegendModel.prototype.defaults.show_title, template: this.options.template || cdb.geo.ui.LegendModel.prototype.defaults.template })), this.add_related_model(this.model), this.model.bind("change", this._updateLegendType, this) }, _updateLegendType: function() {
                        var a = this.model.get("type");
                        if (this.legend_name = this._capitalize(a) + "Legend", "none" == a || null == a) this.legend_name = null, this.model.set({ type: "none" }, { silent: !0 });
                        else if (!cdb.geo.ui[this.legend_name]) return this.legend_name = null, void this.model.set({ type: this.model.previous("type") }, { silent: !0 });
                        this._refresh() }, _capitalize: function(a) {
                        return a && _.isString(a) ? a.charAt(0).toUpperCase() + a.slice(1) : void 0 }, _refresh: function() { this.view && this.view.clean();
                        var a = this.model.get("type");
                        this.model.get("title"), this.model.get("show_title"), this.model.get("template");
                        a && this.legend_name ? (this.view = new cdb.geo.ui[this.legend_name]({ model: this.model }), this.$el.removeClass(), this.$el.addClass(this.className + " " + this.model.get("type"))) : (this.hide(), this.$el.removeClass(), this.$el.addClass(this.className + " none")), this.render() }, _setupItems: function() { this.items = this.model.items, this.options.data && this.items.reset(this.options.data), this.items.bind("add remove change:value change:name", this.render, this) }, render: function() {
                        return this.view && (this.model.get("template") ? (this.$el.html(this.view.render().$el.html()), this.$el.removeClass(this.model.get("type")), this.$el.addClass("wrapper")) : this.$el.html(this.view.render().$el.html()), this.model.get("visible") === !1 ? this.hide() : this.show()), this }, show: function(a) {
                        var b = this.model.get("type");
                        b && "none" != b && this.$el.show() }, hide: function(a) { this.model.get("type") && this.$el.hide() } }), cdb.geo.ui.DebugLegend = cdb.core.View.extend({}), cdb.geo.ui.BaseLegend = cdb.core.View.extend({ _bindModel: function() { this.model.bind("change:template change:title change:show_title", this.render, this) }, addTo: function(a) { $(a).html(this.render().$el) }, setTitle: function(a) { this.model.set("title", a) }, showTitle: function() { this.model.set("show_title", !0) }, hideTitle: function() { this.model.set("show_title", !1) } }), cdb.geo.ui.NoneLegend = cdb.geo.ui.BaseLegend.extend({}), cdb.geo.ui.Legend.None = cdb.core.View.extend({}), cdb.geo.ui.ChoroplethLegend = cdb.geo.ui.BaseLegend.extend({ className: "choropleth-legend", template: _.template('<% if (title && show_title) { %>\n<div class="legend-title"><%- title %></div><% } %><ul><li class="min">		<%- leftLabel %></li><li class="max">		<%- rightLabel %></li><li class="graph count_<%- buckets_count %>">	<div class="colors"><%= colors %>\n	</div></li></ul>'), initialize: function() { this.items = this.model.items }, _generateColorList: function() {
                        var a = "";
                        if (this.model.get("colors")) return _.map(this.model.get("colors"), function(a) {
                            return '\n	<div class="quartile" style="background-color:' + a + '"></div>' }).join("");
                        for (var b = 2; b < this.items.length; b++) {
                            var c = this.items.at(b).get("value");
                            a += '\n	<div class="quartile" style="background-color:' + c + '"></div>' }
                        return a }, setLeftLabel: function(a) { this.model.set("leftLabel", a) }, setRightLabel: function(a) { this.model.set("rightLabel", a) }, setColors: function(a) { this.model.set("colors", a) }, render: function() {
                        if (this.model.get("template")) {
                            var a = _.template(cdb.core.sanitize.html(this.model.get("template"), this.model.get("sanitizeTemplate")));
                            this.$el.html(a(this.model.toJSON())) } else if (this.items.length >= 2) { this.leftLabel = this.items.at(0), this.rightLabel = this.items.at(1);
                            var b = this.model.get("leftLabel") || this.leftLabel.get("value"),
                                c = this.model.get("rightLabel") || this.rightLabel.get("value"),
                                d = this._generateColorList(),
                                e = _.extend(this.model.toJSON(), { leftLabel: b, rightLabel: c, colors: d, buckets_count: d.length });
                            this.$el.html(this.template(e)) }
                        return this } }), cdb.geo.ui.DensityLegend = cdb.geo.ui.BaseLegend.extend({ className: "density-legend", template: _.template('<% if (title && show_title) { %>\n<div class="legend-title"><%- title %></div><% } %><ul><li class="min">	<%- leftLabel %></li><li class="max">	<%- rightLabel %></li><li class="graph count_<%- buckets_count %>">	<div class="colors"><%= colors %>\n	</div></li></ul>'), initialize: function() { this.items = this.model.items }, setLeftLabel: function(a) { this.model.set("leftLabel", a) }, setRightLabel: function(a) { this.model.set("rightLabel", a) }, setColors: function(a) { this.model.set("colors", a) }, _generateColorList: function() {
                        var a = "";
                        if (this.model.get("colors")) return _.map(this.model.get("colors"), function(a) {
                            return '\n		<div class="quartile" style="background-color:' + a + '"></div>' }).join("");
                        for (var b = 2; b < this.items.length; b++) {
                            var c = this.items.at(b).get("value");
                            a += '\n		<div class="quartile" style="background-color:' + c + '"></div>' }
                        return a }, render: function() {
                        if (this.model.get("template")) {
                            var a = _.template(cdb.core.sanitize.html(this.model.get("template"), this.model.get("sanitizeTemplate")));
                            this.$el.html(a(this.model.toJSON())) } else if (this.items.length >= 2) { this.leftLabel = this.items.at(0), this.rightLabel = this.items.at(1);
                            var b = this.model.get("leftLabel") || this.leftLabel.get("value"),
                                c = this.model.get("rightLabel") || this.rightLabel.get("value"),
                                d = this._generateColorList(),
                                e = _.extend(this.model.toJSON(), { leftLabel: b, rightLabel: c, colors: d, buckets_count: d.length });
                            this.$el.html(this.template(e)) }
                        return this } }), cdb.geo.ui.Legend.Density = cdb.geo.ui.DensityLegend.extend({ type: "density", className: "cartodb-legend density", initialize: function() { this.items = this.options.items, this.model = new cdb.geo.ui.LegendModel({ type: this.type, title: this.options.title, show_title: this.options.title ? !0 : !1, leftLabel: this.options.left || this.options.leftLabel, rightLabel: this.options.right || this.options.rightLabel, colors: this.options.colors, buckets_count: this.options.colors ? this.options.colors.length : 0, items: this.options.items }), this._bindModel() }, _bindModel: function() { this.model.bind("change:colors change:template change:title change:show_title change:colors change:leftLabel change:rightLabel", this.render, this) }, _generateColorList: function() {
                        return _.map(this.model.get("colors"), function(a) {
                            return '<div class="quartile" style="background-color:' + a + '"></div>' }).join("") }, render: function() {
                        var a = _.extend(this.model.toJSON(), { colors: this._generateColorList() });
                        return this.$el.html(this.template(a)), this } }), cdb.geo.ui.IntensityLegend = cdb.geo.ui.BaseLegend.extend({
                    className: "intensity-legend",
                    template: _.template('<% if (title && show_title) { %>\n<div class="legend-title"><%- title %></div><% } %><ul><li class="min">	<%- leftLabel %></li><li class="max">	<%- rightLabel %></li><li class="graph"></li></ul>'),
                    initialize: function() { this.items = this.model.items },
                    _bindModel: function() { this.model.bind("change:template", this.render, this) },
                    setColor: function(a) { this.model.set("color", a) },
                    setLeftLabel: function(a) { this.model.set("leftLabel", a) },
                    setRightLabel: function(a) { this.model.set("rightLabel", a) },
                    _hexToRGB: function(a) {
                        var b = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
                        return b ? { r: parseInt(b[1], 16), g: parseInt(b[2], 16), b: parseInt(b[3], 16) } : null },
                    _rgbToHex: function(a, b, c) {
                        function d(a) {
                            var b = a.toString(16);
                            return 1 == b.length ? "0" + b : b }
                        return "#" + d(a) + d(b) + d(c) },
                    _calculateMultiply: function(a, b) {
                        var c = this._hexToRGB(a);
                        if (c) {
                            for (var d = c.r, e = c.g, f = c.b, g = 0; b >= g; g++) d = Math.round(d * c.r / 255), e = Math.round(e * c.g / 255), f = Math.round(f * c.b / 255);
                            return this._rgbToHex(d, e, f) }
                        return "#ffffff" },
                    _renderGraph: function(a) {
                        var b = "";
                        b += "background: <%= color %>;", b += "background: -moz-linear-gradient(left, <%= color %> 0%, <%= right %> 100%);", b += "background: -webkit-gradient(linear, left top, right top, color-stop(0%,<%= color %>), color-stop(100%,<%= right %>));", b += "background: -webkit-linear-gradient(left, <%= color %> 0%,<%= right %> 100%);", b += "background: -o-linear-gradient(left, <%= color %> 0%,<%= right %> 100%);",
                            b += "background: -ms-linear-gradient(left, <%= color %> 0%,<%= right %> 100%)", b += "background: linear-gradient(to right, <%= color %> 0%,<%= right %> 100%);", b += "filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='<%= color %>', endColorstr='<%= right %>',GradientType=1 );", b += "background-image: -ms-linear-gradient(left, <%= color %> 0%,<%= right %> 100%)";
                        var c = _.template(b),
                            d = this._calculateMultiply(a, 4);
                        this.$el.find(".graph").attr("style", c({ color: a, right: d }))
                    },
                    render: function() {
                        if (this.model.get("template")) {
                            var a = _.template(cdb.core.sanitize.html(this.model.get("template"), this.model.get("sanitizeTemplate")));
                            this.$el.html(a(this.model.toJSON())) } else if (this.items.length >= 3) { this.leftLabel = this.items.at(0), this.rightLabel = this.items.at(1);
                            var b = this.model.get("color") || this.items.at(2).get("value"),
                                c = this.model.get("leftLabel") || this.leftLabel.get("value"),
                                d = this.model.get("rightLabel") || this.rightLabel.get("value"),
                                e = _.extend(this.model.toJSON(), { color: b, leftLabel: c, rightLabel: d });
                            this.$el.html(this.template(e)), this._renderGraph(b) }
                        return this }
                }), cdb.geo.ui.CategoryLegend = cdb.geo.ui.BaseLegend.extend({ className: "category-legend", template: _.template('<% if (title && show_title) { %>\n<div class="legend-title"><%- title %></div><% } %><ul></ul>'), initialize: function() { this.items = this.model.items }, _bindModel: function() { this.model.bind("change:title change:show_title change:template", this.render, this) }, _renderItems: function() { this.items.each(this._renderItem, this) }, _renderItem: function(a) { view = new cdb.geo.ui.LegendItem({ model: a, className: a.get("value") && a.get("value").indexOf("http") >= 0 || a.get("type") && "image" == a.get("type") ? "bkg" : "", template: '		<div class="bullet" style="background: <%= value %>"></div> <%- name || ((name === false) ? "false": "null") %>' }), this.$el.find("ul").append(view.render()) }, render: function() {
                        if (this.model.get("template")) {
                            var a = _.template(cdb.core.sanitize.html(this.model.get("template"), this.model.get("sanitizeTemplate")));
                            this.$el.html(a(this.model.toJSON())) } else this.$el.html(this.template(this.model.toJSON())), this.items.length > 0 ? this._renderItems() : this.$el.html('<div class="warning">The category legend is empty</div>');
                        return this } }), cdb.geo.ui.Legend.Category = cdb.geo.ui.CategoryLegend.extend({ className: "cartodb-legend category", type: "category", initialize: function() { this.items = new cdb.geo.ui.LegendItems(this.options.data), this.model = new cdb.geo.ui.LegendModel({ type: this.type, title: this.options.title, show_title: this.options.title ? !0 : !1 }), this._bindModel() }, render: function() {
                        return this.$el.html(this.template(this.model.toJSON())), this._renderItems(), this } }), cdb.geo.ui.ColorLegend = cdb.geo.ui.BaseLegend.extend({ className: "color-legend", type: "color", template: _.template('<% if (title && show_title) { %>\n<div class="legend-title"><%- title %></div><% } %><ul></ul>'), initialize: function() { this.items = this.model.items }, _renderItems: function() { this.items.each(this._renderItem, this) }, _renderItem: function(a) { view = new cdb.geo.ui.LegendItem({ model: a, className: a.get("value") && a.get("value").indexOf("http") >= 0 ? "bkg" : "", template: '		<div class="bullet" style="background: <%= value %>"></div> <%- name || ((name === false) ? "false": "null") %>' }), this.$el.find("ul").append(view.render()) }, render: function() {
                        return this.$el.html(this.template(this.model.toJSON())), this.items.length > 0 ? this._renderItems() : this.$el.html('<div class="warning">The color legend is empty</div>'), this } }), cdb.geo.ui.Legend.Color = cdb.geo.ui.Legend.Category.extend({}), cdb.geo.ui.StackedLegend = cdb.core.View.extend({ events: { dragstart: "_stopPropagation", mousedown: "_stopPropagation", touchstart: "_stopPropagation", MSPointerDown: "_stopPropagation", dblclick: "_stopPropagation", mousewheel: "_stopPropagation", DOMMouseScroll: "_stopPropagation", dbclick: "_stopPropagation", click: "_stopPropagation" }, className: "cartodb-legend-stack", initialize: function() { _.each(this.options.legends, this._setupBinding, this) }, _stopPropagation: function(a) { a.stopPropagation() }, getLegendByIndex: function(a) {
                        if (!this._layerByIndex) { this._layerByIndex = {};
                            for (var b = this.options.legends, c = 0; c < b.length; ++c) {
                                var d = b[c];
                                this._layerByIndex[d.options.index] = d } }
                        return this._layerByIndex[a] }, _setupBinding: function(a) { a.model.bind("change:type", this._checkVisibility, this), this.add_related_model(a.model) }, render: function() {
                        return this._renderItems(), this._checkVisibility(), this }, _renderItems: function() { _.each(this.options.legends, function(a) { this.$el.append(a.render().$el) }, this) }, _checkVisibility: function() {
                        var a = _.some(this.options.legends, function(a) {
                            return a.model.get("type") && ("none" != a.model.get("type") || a.model.get("template")) }, this);
                        a ? this.show() : this.hide(), _.each(this.options.legends, function(a) {
                            var b = a.model; "none" === b.get("type") || b.get("visible") === !1 ? a.hide() : a.show() }, this) }, show: function() { this.$el.show() }, hide: function() { this.$el.hide() }, addTo: function(a) { $(a).html(this.render().$el) } }), cdb.geo.ui.Legend.Stacked = cdb.geo.ui.StackedLegend.extend({ initialize: function() {
                        if (this.options.legends) {
                            var a = _.map(this.options.legends, function(a) {
                                return a.model });
                            this.legendItems = new cdb.geo.ui.Legends(a), this.legendItems.bind("add remove change", this.render, this) } else if (this.options.data) {
                            var a = _.map(this.options.data, function(a) {
                                return new cdb.geo.ui.LegendModel(a) });
                            this.legendItems = new cdb.geo.ui.Legends(a), this.legendItems.bind("add remove change", this.render, this) } }, _capitalize: function(a) {
                        return a && _.isString(a) ? a.charAt(0).toUpperCase() + a.slice(1) : void 0 }, render: function() {
                        return this.$el.empty(), this.legends = [], this.legendItems && this.legendItems.length > 0 && this.legendItems.each(this._renderLegend, this), this }, _renderLegend: function(a) {
                        var b = a.get("type");
                        b || (b = "custom"), b = this._capitalize(b);
                        var c = new cdb.geo.ui.Legend[b](a.attributes);
                        this.legends.push(c), a.get("visible") !== !1 && this.$el.append(c.render().$el) }, getLegendAt: function(a) {
                        return this.legends[a] }, addLegend: function(a) {
                        var b = new cdb.geo.ui.LegendModel(a);
                        this.legendItems.push(b) }, removeLegendAt: function(a) {
                        var b = this.legendItems.at(a);
                        this.legendItems.remove(b) } }), cdb.geo.ui.CustomLegend = cdb.geo.ui.BaseLegend.extend({ className: "custom-legend", type: "custom", template: _.template('<% if (title && show_title) { %>\n<div class="legend-title"><%- title %></div><% } %><ul></ul>'), initialize: function() { this.items = this.model.items }, setData: function(a) { this.items = new cdb.geo.ui.LegendItems(a), this.model.items = this.items, this.model.set("items", a) }, _renderItems: function() { this.items.each(this._renderItem, this) }, _renderItem: function(a) {
                        var b = this.options.itemTemplate || '		<div class="bullet" style="background:<%= value %>"></div>\n		<%- name || "null" %>';
                        view = new cdb.geo.ui.LegendItem({ model: a, className: a.get("value") && a.get("value").indexOf("http") >= 0 ? "bkg" : "", template: b }), this.$el.find("ul").append(view.render()) }, render: function() {
                        if (this.model.get("template")) {
                            var a = _.template(cdb.core.sanitize.html(this.model.get("template"), this.model.get("sanitizeTemplate")));
                            this.$el.html(a(this.model.toJSON())) } else this.$el.html(this.template(this.model.toJSON())), this.items.length > 0 ? this._renderItems() : this.$el.html('<div class="warning">The legend is empty</div>');
                        return this } }), cdb.geo.ui.Legend.Custom = cdb.geo.ui.CustomLegend.extend({ className: "cartodb-legend custom", type: "custom", initialize: function() { this.items = new cdb.geo.ui.LegendItems(this.options.data || this.options.items), this.model = new cdb.geo.ui.LegendModel({ type: this.type, title: this.options.title, show_title: this.options.title ? !0 : !1, items: this.items.models, template: this.options.template }), this._bindModel() }, _bindModel: function() { this.model.bind("change:items change:template change:title change:show_title", this.render, this) } }), cdb.geo.ui.BubbleLegend = cdb.geo.ui.BaseLegend.extend({ className: "bubble-legend", template: _.template('<% if (title && show_title) { %>\n<div class="legend-title"><%- title %></div><% } %><ul><li>	<%- min %></li><li class="graph">		<div class="bubbles"></div></li><li>	<%- max %></li></ul>'), initialize: function() { this.items = this.model.items }, _bindModel: function() { this.model.bind("change:template change:title change:show_title change:color change:min change:max", this.render, this) }, setColor: function(a) { this.model.set("color", a) }, setMinValue: function(a) { this.model.set("min", a) }, setMaxValue: function(a) { this.model.set("max", a) }, _renderGraph: function(a) { this.$el.find(".graph").css("background", a) }, render: function() {
                        if (this.model.get("template")) {
                            var a = _.template(cdb.core.sanitize.html(this.model.get("template"), this.model.get("sanitizeTemplate")));
                            this.$el.html(a(this.model.toJSON())), this.$el.removeClass("bubble-legend") } else {
                            var b = this.model.get("color") || (this.items.length >= 3 ? this.items.at(2).get("value") : "");
                            if (this.items.length >= 3) {
                                var c = this.model.get("min") || this.items.at(0).get("value"),
                                    d = this.model.get("max") || this.items.at(1).get("value"),
                                    e = _.extend(this.model.toJSON(), { min: c, max: d });
                                this.$el.html(this.template(e)) }
                            this._renderGraph(b) }
                        return this } }), cdb.geo.ui.Legend.Bubble = cdb.geo.ui.BubbleLegend.extend({ className: "cartodb-legend bubble", type: "bubble", initialize: function() { this.model = new cdb.geo.ui.LegendModel({ type: this.type, title: this.options.title, min: this.options.min, max: this.options.max, color: this.options.color, show_title: this.options.title ? !0 : !1 }), this.add_related_model(this.model), this._bindModel() }, render: function() {
                        return this.$el.html(this.template(this.model.toJSON())), this._renderGraph(this.model.get("color")), this } }), cdb.geo.ui.Legend.Choropleth = cdb.geo.ui.ChoroplethLegend.extend({ type: "choropleth", className: "cartodb-legend choropleth", initialize: function() { this.items = this.options.items, this.model = new cdb.geo.ui.LegendModel({ type: this.type, title: this.options.title, show_title: this.options.title ? !0 : !1, leftLabel: this.options.left || this.options.leftLabel, rightLabel: this.options.right || this.options.rightLabel, colors: this.options.colors, buckets_count: this.options.colors ? this.options.colors.length : 0 }), this.add_related_model(this.model), this._bindModel() }, _bindModel: function() { this.model.bind("change:template change:title change:show_title change:colors change:leftLabel change:rightLabel", this.render, this) }, _generateColorList: function() {
                        return _.map(this.model.get("colors"), function(a) {
                            return '		<div class="quartile" style="background-color:' + a + '"></div>' }).join("") }, render: function() {
                        var a = _.extend(this.model.toJSON(), { colors: this._generateColorList() });
                        return this.$el.html(this.template(a)), this } }), cdb.geo.ui.Legend.Intensity = cdb.geo.ui.IntensityLegend.extend({ className: "cartodb-legend intensity", type: "intensity", initialize: function() { this.items = this.options.items, this.model = new cdb.geo.ui.LegendModel({ type: this.type, title: this.options.title, show_title: this.options.title ? !0 : !1, color: this.options.color, leftLabel: this.options.left || this.options.leftLabel, rightLabel: this.options.right || this.options.rightLabel }), this.add_related_model(this.model), this._bindModel() }, _bindModel: function() { this.model.bind("change:title change:show_title change:color change:leftLabel change:rightLabel", this.render, this) }, render: function() {
                        return this.$el.html(this.template(this.model.toJSON())), this._renderGraph(this.model.get("color")), this } }), cdb.geo.ui.SwitcherItemModel = Backbone.Model.extend({}), cdb.geo.ui.SwitcherItems = Backbone.Collection.extend({ model: cdb.geo.ui.SwitcherItemModel }), cdb.geo.ui.SwitcherItem = cdb.core.View.extend({ tagName: "li", events: { "click a": "select" }, initialize: function() { _.bindAll(this, "render"), this.template = cdb.templates.getTemplate("templates/map/switcher/item"), this.parent = this.options.parent, this.model.on("change:selected", this.render) }, select: function(a) { a.preventDefault(), this.parent.toggle(this);
                        var b = this.model.get("callback");
                        b && b() }, render: function() {
                        return 1 == this.model.get("selected") ? this.$el.addClass("selected") : this.$el.removeClass("selected"), this.$el.html(this.template(this.model.toJSON())), this.$el } }), cdb.geo.ui.Switcher = cdb.core.View.extend({ id: "switcher", default_options: {}, initialize: function() { this.map = this.model, this.add_related_model(this.model), _.bindAll(this, "render", "show", "hide", "toggle"), _.defaults(this.options, this.default_options), this.collection && (this.model.collection = this.collection), this.template = this.options.template ? this.options.template : cdb.templates.getTemplate("geo/switcher") }, show: function() { this.$el.fadeIn(250) }, hide: function() { this.$el.fadeOut(250) }, toggle: function(a) { this.collection && this.collection.each(function(a) { a.set("selected", !a.get("selected")) }) }, render: function() {
                        var a = this;
                        return void 0 != this.model && this.$el.html(this.template(this.model.toJSON())), this.collection && this.collection.each(function(b) {
                            var c = new cdb.geo.ui.SwitcherItem({ parent: a, className: b.get("className"), model: b });
                            a.$el.find("ul").append(c.render()) }), this } }), cdb.geo.ui.InfowindowModel = Backbone.Model.extend({ SYSTEM_COLUMNS: ["the_geom", "the_geom_webmercator", "created_at", "updated_at", "cartodb_id", "cartodb_georef_status"], defaults: { template_name: "infowindow_light", latlng: [0, 0], offset: [28, 0], maxHeight: 180, autoPan: !0, template: "", content: "", visibility: !1, alternative_names: {}, fields: null }, clearFields: function() { this.set({ fields: [] }) }, saveFields: function(a) { a = a || "old_fields", this.set(a, _.clone(this.get("fields"))) }, fieldCount: function() {
                        var a = this.get("fields");
                        return a ? a.length : 0 }, restoreFields: function(a, b) { b = b || "old_fields";
                        var c = this.get(b);
                        a && (c = c.filter(function(b) {
                            return _.contains(a, b.name) })), c && c.length && this._setFields(c), this.unset(b) }, _cloneFields: function() {
                        return _(this.get("fields")).map(function(a) {
                            return _.clone(a) }) }, _setFields: function(a) { a.sort(function(a, b) {
                            return a.position - b.position }), this.set({ fields: a }) }, sortFields: function() { this.get("fields").sort(function(a, b) {
                            return a.position - b.position }) }, _addField: function(a, b) {
                        var c = $.Deferred();
                        if (!this.containsField(a)) {
                            var d = this.get("fields");
                            d ? (b = void 0 === b ? d.length : b, d.push({ name: a, title: !0, position: b })) : (b = void 0 === b ? 0 : b, this.set("fields", [{ name: a, title: !0, position: b }], { silent: !0 })) }
                        return c.resolve(), c.promise() }, addField: function(a, b) {
                        var c = this;
                        return $.when(this._addField(a, b)).then(function() { c.sortFields(), c.trigger("change:fields"), c.trigger("add:fields") }), this }, getFieldProperty: function(a, b) {
                        if (this.containsField(a)) {
                            var c = this.get("fields") || [],
                                d = _.indexOf(_(c).pluck("name"), a);
                            return c[d][b] }
                        return null }, setFieldProperty: function(a, b, c) {
                        if (this.containsField(a)) {
                            var d = this._cloneFields() || [],
                                e = _.indexOf(_(d).pluck("name"), a);
                            d[e][b] = c, this._setFields(d) }
                        return this }, getAlternativeName: function(a) {
                        return this.get("alternative_names") && this.get("alternative_names")[a] }, setAlternativeName: function(a, b) {
                        var c = this.get("alternative_names") || [];
                        c[a] = b, this.set({ alternative_names: c }), this.trigger("change:alternative_names") }, getFieldPos: function(a) {
                        var b = this.getFieldProperty(a, "position");
                        return void 0 == b ? Number.MAX_VALUE : b }, containsAlternativeName: function(a) {
                        var b = this.get("alternative_names") || [];
                        return b[a] }, containsField: function(a) {
                        var b = this.get("fields") || [];
                        return _.contains(_(b).pluck("name"), a) }, removeField: function(a) {
                        if (this.containsField(a)) {
                            var b = this._cloneFields() || [],
                                c = _.indexOf(_(b).pluck("name"), a);
                            c >= 0 && b.splice(c, 1), this._setFields(b), this.trigger("remove:fields") }
                        return this }, updateContent: function(a) {
                        var b = this.get("fields");
                        this.set("content", cdb.geo.ui.InfowindowModel.contentForFields(a, b)) }, closeInfowindow: function() { this.get("visibility") && (this.set("visibility", !1), this.trigger("close")) } }, { contentForFields: function(a, b, c) { c = c || {};
                        for (var d = [], e = 0; e < b.length; ++e) {
                            var f = b[e],
                                g = a[f.name];
                            (c.empty_fields || void 0 !== g && null !== g) && d.push({ title: f.title ? f.name : null, value: a[f.name], index: e }) }
                        return 0 === d.length && d.push({ title: null, value: "No data available", index: 0, type: "empty" }), { fields: d, data: a } } }), cdb.geo.ui.Infowindow = cdb.core.View.extend({ className: "cartodb-infowindow", spin_options: { lines: 10, length: 0, width: 4, radius: 6, corners: 1, rotate: 0, color: "rgba(0,0,0,0.5)", speed: 1, trail: 60, shadow: !1, hwaccel: !0, className: "spinner", zIndex: 2e9, top: "auto", left: "auto", position: "absolute" }, events: { "click .close": "_closeInfowindow", "touchstart .close": "_closeInfowindow", "MSPointerDown .close": "_closeInfowindow", dragstart: "_checkOrigin", mousedown: "_checkOrigin", touchstart: "_checkOrigin", MSPointerDown: "_checkOrigin", dblclick: "_stopPropagation", DOMMouseScroll: "_stopBubbling", MozMousePixelScroll: "_stopBubbling", mousewheel: "_stopBubbling", dbclick: "_stopPropagation", click: "_stopPropagation" }, initialize: function() {
                        var a = this;
                        _.bindAll(this, "render", "setLatLng", "_setTemplate", "_updatePosition", "_update", "toggle", "show", "hide"), this.mapView = this.options.mapView, this.options.template && this.model.set("template", this.options.template), this.model.get("template") ? this._compileTemplate() : this._setTemplate(), this.model.bind("change:content", this.render, this), this.model.bind("change:template_name", this._setTemplate, this), this.model.bind("change:latlng", this._update, this), this.model.bind("change:visibility", this.toggle, this), this.model.bind("change:template", this._compileTemplate, this), this.model.bind("change:sanitizeTemplate", this._compileTemplate, this), this.model.bind("change:alternative_names", this.render, this), this.model.bind("change:width", this.render, this), this.model.bind("change:maxHeight", this.render, this), this.mapView.map.bind("change", this._updatePosition, this), this.mapView.bind("zoomstart", function() { a.hide(!0) }), this.mapView.bind("zoomend", function() { a.show(!0) }), this.add_related_model(this.mapView.map), this.$el.hide() }, render: function() {
                        if (this.template) {
                            var a = this.$(".cartodb-popup-content");
                            a.length > 0 && null != a.data() && a.data().jsp && a.data().jsp.destroy();
                            var b = _.map(this.model.attributes.content.fields, function(a) {
                                    return _.clone(a) }),
                                c = this.model.get("content") ? this.model.get("content").data : {};
                            if (this.model.get("template_name")) {
                                var d = _.clone(this.model.attributes.template_name);
                                b = this._fieldsToString(b, d) }
                            var e = {};
                            _.each(this.model.get("content").fields, function(a) { e[a.title] = a.value });
                            var f = _.extend({ content: { fields: b, data: c } }, e);
                            this.$el.html(cdb.core.sanitize.html(this.template(f), this.model.get("sanitizeTemplate"))), this.model.get("width") && this.$(".cartodb-popup").css("width", this.model.get("width") + "px"), this.$(".cartodb-popup .cartodb-popup-content").css("max-height", this.model.get("maxHeight") + "px");
                            var g = this;
                            setTimeout(function() {
                                var a = g.$(".cartodb-popup-content").outerHeight();
                                g.model.get("maxHeight") <= a && g.$(".cartodb-popup-content").jScrollPane({ verticalDragMinHeight: 20, autoReinitialise: !0 }) }, 1), this._checkLoading(), this._loadCover(), this.isLoadingData() || (this.model.trigger("domready", this, this.$el), this.trigger("domready", this, this.$el)) }
                        return this }, _getModelTemplate: function() {
                        return this.model.get("template_name") }, _setTemplate: function() { this.model.get("template_name") && (this.template = cdb.templates.getTemplate(this._getModelTemplate()), this.render()) }, _compileTemplate: function() {
                        var a = this.model.get("template") ? this.model.get("template") : cdb.templates.getTemplate(this._getModelTemplate()); "function" != typeof a ? this.template = new cdb.core.Template({ template: a, type: this.model.get("template_type") || "mustache" }).asFunction() : this.template = a, this.render() }, _checkOrigin: function(a) {
                        var b = $(a.target).closest(".jspVerticalBar").length > 0 && "touchstart" != a.type;
                        b || a.stopPropagation() }, _fieldsToString: function(a, b) {
                        var c = [];
                        if (a && a.length > 0) {
                            var d = this;
                            c = _.map(a, function(a, c) {
                                return d._sanitizeField(a, b, a.index || c) }) }
                        return c }, _sanitizeField: function(a, b, c) {
                        (null == a.value || void 0 == a.value) && (a.value = "");
                        var d = this.model.getAlternativeName(a.title);
                        a.title && d ? a.title = d : a.title && (a.title = a.title.replace(/_/g, " "));
                        var e = a.value.toString();
                        return !a.type && 0 == c && a.value.length > 35 && b && -1 != b.search("_header_") && (e = a.value.substr(0, 32) + "..."), !a.type && 1 == c && a.value.length > 35 && b && -1 != b.search("_header_with_image") && (e = a.value.substr(0, 32) + "..."), this._isValidURL(a.value) && (e = "<a href='" + a.value + "' target='_blank'>" + e + "</a>"), 0 == c && -1 != b.search("_header_with_image") && (e = a.value), a.value = e, a }, isLoadingData: function() {
                        var a = this.model.get("content");
                        return a.fields && 1 == a.fields.length && "loading" === a.fields[0].type }, _checkLoading: function() { this.isLoadingData() ? this._startSpinner() : this._stopSpinner() }, _stopSpinner: function() { this.spinner && this.spinner.stop() }, _startSpinner: function(a) { this._stopSpinner();
                        var a = this.$el.find(".loading");
                        if (a) {
                            var b = -1 != this.model.get("template_name").search("dark");
                            b ? this.spin_options.color = "#FFF" : this.spin_options.color = "rgba(0,0,0,0.5)", this.spinner = new Spinner(this.spin_options).spin(), a.append(this.spinner.el) } }, _containsCover: function() {
                        return this.$el.find(".cartodb-popup.header").attr("data-cover") ? !0 : !1 }, _getCoverURL: function() {
                        var a = this.model.get("content");
                        return a && a.fields && a.fields.length > 0 ? (a.fields[0].value || "").toString() : !1 }, _loadCover: function() {
                        if (this._containsCover()) {
                            var a = this.$(".cover"),
                                b = a.find("img"),
                                c = this.$(".shadow"),
                                d = this._getCoverURL();
                            if (!this._isValidURL(d)) return b.hide(), c.hide(), void cdb.log.info("Header image url not valid");
                            var e = document.getElementById("spinner"),
                                f = { lines: 9, length: 4, width: 2, radius: 4, corners: 1, rotate: 0, color: "#ccc", speed: 1, trail: 60, shadow: !0, hwaccel: !1, zIndex: 2e9 },
                                g = new Spinner(f).spin(e);
                            b.hide(function() { this.remove() }), b = $("<img />").attr("src", d), a.append(b), b.load(function() { g.stop();
                                var c = b.width(),
                                    d = b.height(),
                                    e = a.width(),
                                    f = a.height(),
                                    h = d / c,
                                    i = f / e;
                                if (c > e && d > f)
                                    if (i > h) b.css({ height: f });
                                    else {
                                        var j = d / (c / e);
                                        b.css({ width: e, top: "50%", position: "absolute", "margin-top": -1 * parseInt(j, 10) / 2 }) }
                                else {
                                    var j = d / (c / e);
                                    b.css({ width: e, top: "50%", position: "absolute", "margin-top": -1 * parseInt(j, 10) / 2 }) }
                                b.fadeIn(300) }).error(function() { g.stop() }) } }, _isValidURL: function(a) {
                        if (a) {
                            var b = /^(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-|]*[\w@?^=%&amp;\/~+#-])?$/;
                            return null != String(a).match(b) ? !0 : !1 }
                        return !1 }, toggle: function() { this.model.get("visibility") ? this.show() : this.hide() }, _stopBubbling: function(a) { a.preventDefault(), a.stopPropagation() }, _stopPropagation: function(a) { a.stopPropagation() }, setLoading: function() {
                        return this.model.set({ content: { fields: [{ title: null, alternative_name: null, value: "Loading content...", index: null, type: "loading" }], data: {} } }), this }, setError: function() {
                        return this.model.set({ content: { fields: [{ title: null, alternative_name: null, value: "There has been an error...", index: null, type: "error" }], data: {} } }), this }, setLatLng: function(a) {
                        return this.model.set("latlng", a), this }, _closeInfowindow: function(a) { a && (a.preventDefault(), a.stopPropagation()), this.model.get("visibility") && (this.model.set("visibility", !1), this.trigger("close")) }, showInfowindow: function() { this.model.set("visibility", !0) }, show: function(a) {
                        var b = this;
                        this.model.get("visibility") && (b.$el.css({ left: -5e3 }), b._update(a)) }, isHidden: function() {
                        return !this.model.get("visibility") }, hide: function(a) {
                        (a || !this.model.get("visibility")) && this._animateOut() }, _update: function(a) {
                        if (!this.isHidden()) {
                            var b = 0;
                            if (!a) var b = this.adjustPan();
                            this._updatePosition(), this._animateIn(b) } }, _animateIn: function(a) {!cdb.core.util.ie || cdb.core.util.browser.ie && cdb.core.util.browser.ie.version > 8 ? (this.$el.css({ marginBottom: "-10px", display: "block", visibility: "visible", opacity: 0 }), this.$el.delay(a).animate({ opacity: 1, marginBottom: 0 }, 300)) : this.$el.show() }, _animateOut: function() {
                        if (!$.browser.msie || $.browser.msie && parseInt($.browser.version) > 8) {
                            var a = this;
                            this.$el.animate({ marginBottom: "-10px", opacity: "0", display: "block" }, 180, function() { a.$el.css({ visibility: "hidden" }) }) } else this.$el.hide() }, _updatePosition: function() {
                        if (!this.isHidden()) {
                            var a = this.model.get("offset"),
                                b = this.mapView.latLonToPixel(this.model.get("latlng")),
                                c = (this.$el.position().left, this.$el.position().top, this.$el.outerHeight(!0), this.$el.width(), b.x - a[0]),
                                d = this.mapView.getSize(),
                                e = -1 * (b.y - a[1] - d.y);
                            this.$el.css({ bottom: e, left: c }) } }, adjustPan: function() {
                        var a = this.model.get("offset");
                        if (this.model.get("autoPan") && !this.isHidden()) {
                            var b = (this.$el.position().left, this.$el.position().top, this.$el.outerHeight(!0) + 15),
                                c = this.$el.width(),
                                d = this.mapView.latLonToPixel(this.model.get("latlng")),
                                e = { x: 0, y: 0 };
                            return size = this.mapView.getSize(), wait_callback = 0, d.x - a[0] < 0 && (e.x = d.x - a[0] - 10), d.x - a[0] + c > size.x && (e.x = d.x + c - size.x - a[0] + 10), d.y - b < 0 && (e.y = d.y - b - 10), d.y - b > size.y && (e.y = d.y + b - size.y), (e.x || e.y) && (this.mapView.panBy(e), wait_callback = 300), wait_callback } } }), cdb.geo.ui.Header = cdb.core.View.extend({ className: "cartodb-header", initialize: function() {
                        var a = this.model.get("extra");
                        this.model.set({ title: a.title, description: a.description, show_title: a.show_title, show_description: a.show_description }, { silent: !0 }) }, show: function() {
                        var a = this.model.get("title") && this.model.get("show_title"),
                            b = this.model.get("description") && this.model.get("show_description");
                        (a || b) && (this.$el.show(), a && this.$el.find(".content div.title").show(), b && this.$el.find(".content div.description").show()) }, _setLinksTarget: function(a) {
                        if (!a) return a;
                        var b = new RegExp(/<(a)([^>]+)>/g);
                        return a.replace(b, '<$1 target="_blank"$2>') }, render: function() {
                        var a = _.clone(this.model.attributes);
                        return a.title = cdb.core.sanitize.html(a.title), a.description = this._setLinksTarget(cdb.core.sanitize.html(a.description)), this.$el.html(this.options.template(a)), this.options.slides && (this.slides_controller = new cdb.geo.ui.SlidesController({ transitions: this.options.transitions, slides: this.options.slides }), this.$el.append(this.slides_controller.render().$el)), this.model.get("show_title") || this.model.get("show_description") ? this.show() : this.hide(), this } }), cdb.geo.ui.Search = cdb.core.View.extend({ className: "cartodb-searchbox", _ZOOM_BY_CATEGORY: { building: 18, "postal-area": 15, venue: 18, region: 8, address: 18, country: 5, county: 8, locality: 12, localadmin: 11, neighbourhood: 15, "default": 12 }, events: { "click input[type='text']": "_onFocus", "submit form": "_onSubmit", click: "_stopPropagation", dblclick: "_stopPropagation", mousedown: "_stopPropagation" }, options: { searchPin: !0, infowindowTemplate: '<div class="cartodb-infowindow"><div class="cartodb-popup v2 centered"><a href="#close" class="cartodb-popup-close-button close">x</a><div class="cartodb-popup-content-wrapper"><p>{{ address }}</p></div><div class="cartodb-popup-tip-container"></div></div>', infowindowWidth: 186, infowindowOffset: [93, 90], iconUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAfCAYAAADXwvzvAAACuklEQVR4Ae3PQ+AsNxzA8e8vo/Xus237vVN9qW3b7qW2bdu2caxt29bu/meSmaTpqW63Pfc7wemTZPh9K/Xv3zhzxIgVrho0aMsLGo2N9o+iuYDwV02E5NJpM7d5fMGC515dMP/7l6dNMc+OGJY9Uq99cVMc33I4LOJXCQBQuXPBglNnDRm0Xa1RAWewP3yL/vJLul99Q/pNm0/b+qsnbLHngXAVgAI4b9KkXWc1m9vV58ykst56lKdMptyokdTKRJUIV1MMTGTgbOTknWABgFo2SSbOjuN9wlgIBrSIJ0yiVG9QUgGxUigRRAlpCQYrBs+A/QClliuXV6ppPVibDPPqi5irL8G+/QY2S3FZhityrLNYBWkAI2G5WTA2nGTthKDTJfP/FH1sCb76nNBa7I8/knba6Eyj8wJjLbk4qlCdAFNClWXKiiL72kGRUkSRhwUuTUm7XTqZ3z3KnMM7QhAFUfiKMZ9OQci+ydFFH32BIsDh8hxjDF2T0y0KtHHUczCg34P3wgesfWhZozstW1R/cJpuohA8dI7cWrSfxqM4gwEOnoJnn4HXBVDHwHnriNr2W3G0I8FEkKufMbjcIw1DC+iCuRw2OBduEYAKDD8drlkGlk6BHwAtIEDioD/QBnsnnHAI7A9YAAAGenwEnPuAd8+DewHcS+CeB3szvL0b7ADE/FWzYf5BCxa9dMvqa7oLll7WbTlsxKkDYRi9dPqhRz743L0PuKtOPMXtutHmm/InKf5Y6Co15Upl8qSCqVajXiEeUTRb6GqNIojoGaLEDwEA6B0KIKL8lH8JBeS/3AgK73qAPfc/tCLiAACUCmyvsJHnphwEAYFStNs/NoHgn2ATWPmlF54b/9GHH/Khn88/+9SywJx/+q0SsKTZbB45d/6CO0aNHnutv3kbYDQg9JAAIRDwF/0EjlkjUi3fkAMAAAAASUVORK5CYII=", iconAnchor: [7, 31] }, initialize: function() { this.mapView = this.options.mapView, this.template = this.options.template }, render: function() {
                        return this.$el.html(this.template(this.options)), this }, _stopPropagation: function(a) { a && a.stopPropagation() }, _onFocus: function(a) { a && (a.preventDefault(), $(a.target).focus()) }, _showLoader: function() { this.$("span.loader").show() }, _hideLoader: function() { this.$("span.loader").hide() }, _onSubmit: function(a) { a.preventDefault();
                        var b = this,
                            c = this.$("input.text").val();
                        c && (this._showLoader(), this._destroySearchPin(), cdb.geo.geocoder.MAPZEN.geocode(c, function(a) { b._onResult(a), b._hideLoader() })) }, _onResult: function(a) {
                        var b = "",
                            c = this.$("input.text").val();
                        if (a && a.length > 0) {
                            var d = a[0],
                                e = this._isBBoxValid(d);
                            if (e) {
                                var f = parseFloat(d.boundingbox.south),
                                    g = parseFloat(d.boundingbox.west),
                                    h = parseFloat(d.boundingbox.north),
                                    i = parseFloat(d.boundingbox.east),
                                    j = (g + i) / 2,
                                    k = (f + h) / 2;
                                b = [k, j], this.model.setBounds([
                                    [f, g],
                                    [h, i]
                                ]) }
                            d.lat && d.lon && (b = [d.lat, d.lon]), e || (this.model.setCenter(b), this.model.setZoom(this._getZoomByCategory(d.type))), this.options.searchPin && this._createSearchPin(b, c) } }, _getZoomByCategory: function(a) {
                        return a && this._ZOOM_BY_CATEGORY[a] ? this._ZOOM_BY_CATEGORY[a] : this._ZOOM_BY_CATEGORY["default"] }, _isBBoxValid: function(a) {
                        return a.boundingbox && a.boundingbox.south != a.boundingbox.north && a.boundingbox.east != a.boundingbox.west ? !0 : !1 }, _createSearchPin: function(a, b) { this._destroySearchPin(), this._createPin(a, b), this._createInfowindow(a, b), this._bindEvents() }, _destroySearchPin: function() { this._unbindEvents(), this._destroyPin(), this._destroyInfowindow() }, _createInfowindow: function(a, b) {
                        var c = new cdb.geo.ui.InfowindowModel({ template: this.options.infowindowTemplate, latlng: a, width: this.options.infowindowWidth, offset: this.options.infowindowOffset, content: { fields: [{ title: "address", value: b }] } });
                        this._searchInfowindow = new cdb.geo.ui.Infowindow({ model: c, mapView: this.mapView }), this.mapView.$el.append(this._searchInfowindow.el), c.set("visibility", !0) }, _destroyInfowindow: function() {
                        if (this._searchInfowindow) { this._searchInfowindow.hide(!0);
                            var a = this._searchInfowindow;
                            setTimeout(function() { a.clean() }, 1e3) } }, _createPin: function(a, b) { this._searchPin = this.mapView._addGeomToMap(new cdb.geo.Geometry({ geojson: { type: "Point", coordinates: [a[1], a[0]] }, iconUrl: this.options.iconUrl, iconAnchor: this.options.iconAnchor })) }, _toggleSearchInfowindow: function() {
                        var a = this._searchInfowindow.model.get("visibility");
                        this._searchInfowindow.model.set("visibility", !a) }, _destroyPin: function() { this._searchPin && (this.mapView._removeGeomFromMap(this._searchPin), delete this._searchPin) }, _bindEvents: function() { this._searchPin && this._searchPin.bind("click", this._toggleSearchInfowindow, this), this.mapView.bind("click", this._destroySearchPin, this) }, _unbindEvents: function() { this._searchPin && this._searchPin.unbind("click", this._toggleSearchInfowindow, this), this.mapView.unbind("click", this._destroySearchPin, this) }, clean: function() { this._unbindEvents(), this._destroySearchPin(), this.elder("clean") } }), cdb.geo.ui.LayerSelector = cdb.core.View.extend({
                    className: "cartodb-layer-selector-box",
                    events: { click: "_openDropdown", dblclick: "killEvent", mousedown: "killEvent" },
                    initialize: function() { this.map = this.options.mapView.map, this.mapView = this.options.mapView, this.mapView.bind("click zoomstart drag", function() { this.dropdown && this.dropdown.hide() }, this), this.add_related_model(this.mapView), this.layers = [] },
                    render: function() {
                        return this.$el.html(this.options.template(this.options)), this.dropdown = new cdb.ui.common.Dropdown({ className: "cartodb-dropdown border", template: this.options.dropdown_template, target: this.$el.find("a"), speedIn: 300, speedOut: 200, position: "position", tick: "right", vertical_position: "down", horizontal_position: "right", vertical_offset: 7, horizontal_offset: 13 }), cdb.god && cdb.god.bind("closeDialogs", this.dropdown.hide, this.dropdown), this.$el.append(this.dropdown.render().el), this._getLayers(), this._setCount(), this },
                    _getLayers: function() {
                        var a = this;
                        this.layers = [], _.each(this.map.layers.models, function(b) {
                            if ("layergroup" == b.get("type") || "namedmap" === b.get("type"))
                                for (var c = a.mapView.getLayerByCid(b.cid), d = 0; d < c.getLayerCount(); ++d) {
                                    var e = c.getLayer(d),
                                        f = new cdb.core.Model(e);
                                    f.set("order", d), f.set("type", "layergroup"), void 0 === f.get("visible") && f.set("visible", !0), f.bind("change:visible", function(a) { this.trigger("change:visible", a.get("visible"), a.get("order"), a) }, a), a.options.layer_names ? f.set("layer_name", a.options.layer_names[d]) : f.set("layer_name", e.options.layer_name);
                                    var g = a._createLayer("LayerViewFromLayerGroup", { model: f, layerView: c, layerIndex: d });
                                    g.bind("switchChanged", a._setCount, a), a.layers.push(g) } else if ("CartoDB" === b.get("type") || "torque" === b.get("type")) {
                                    var g = a._createLayer("LayerView", { model: b });
                                    g.bind("switchChanged", a._setCount, a), a.layers.push(g), g.model.bind("change:visible", function(a) { this.trigger("change:visible", a.get("visible"), a.get("order"), a) }, a)
                                }
                        })
                    },
                    _createLayer: function(a, b) {
                        var c = new cdb.geo.ui[a](b);
                        return this.$("ul").append(c.render().el), this.addView(c), c },
                    _setCount: function() {
                        for (var a = 0, b = 0, c = this.layers.length; c > b; ++b) {
                            var d = this.layers[b];
                            d.model.get("visible") && a++ }
                        this.$(".count").text(a), this.trigger("switchChanged", this) },
                    _openDropdown: function() { this.dropdown.open() }
                }), cdb.geo.ui.LayerView = cdb.core.View.extend({ tagName: "li", defaults: { template: '      <a class="layer" href="#/change-layer"><%- layer_name %></a>      <a href="#switch" class="right <%- visible ? "enabled" : "disabled" %> switch"><span class="handle"></span></a>    ' }, events: { click: "_onSwitchClick" }, initialize: function() { this.model.has("visible") || this.model.set("visible", !1), this.model.bind("change:visible", this._onSwitchSelected, this), this.add_related_model(this.model), this._onSwitchSelected(), this.template = this.options.template ? cdb.templates.getTemplate(this.options.template) : _.template(this.defaults.template) }, render: function() {
                        var a = _.clone(this.model.attributes);
                        return a.layer_name = a.layer_name || a.table_name, this.$el.append(this.template(a)), this }, _onSwitchSelected: function() {
                        var a = this.model.get("visible");
                        this.$el.find(".switch").removeClass(a ? "disabled" : "enabled").addClass(a ? "enabled" : "disabled"), this.trigger("switchChanged") }, _onSwitchClick: function(a) { this.killEvent(a), this.model.set("visible", !this.model.get("visible")) } }), cdb.geo.ui.LayerViewFromLayerGroup = cdb.geo.ui.LayerView.extend({ _onSwitchSelected: function() { cdb.geo.ui.LayerView.prototype._onSwitchSelected.call(this);
                        var a = this.options.layerView.getSubLayer(this.options.layerIndex),
                            b = this.model.get("visible");
                        b ? a.show() : a.hide() } }), cdb.geo.ui.SlidesControllerItem = cdb.core.View.extend({ tagName: "li", events: { "click a": "_onClick" }, template: cdb.core.Template.compile('<a href="#" class="<%- transition_trigger %>"></a>'), initialize: function() { this.model = new cdb.core.Model(this.options), this.model.bind("change:active", this._onChangeActive, this) }, _onChangeActive: function(a) { this.model.get("active") ? this.$el.find("a").addClass("active") : this.$el.find("a").removeClass("active") }, _onClick: function(a) { a && this.killEvent(a), this.trigger("onClick", this) }, render: function() {
                        var a = _.extend({ transition_trigger: "click" }, this.options.transition_options);
                        return this.$el.html(this.template(a)), this._onChangeActive(), this } }), cdb.geo.ui.SlidesController = cdb.core.View.extend({ defaults: { show_counter: !1 }, events: { "click a.next": "_next", "click a.prev": "_prev" }, tagName: "div", className: "cartodb-slides-controller", template: cdb.core.Template.compile("<div class='slides-controller-content'><a href='#' class='prev'></a><% if (show_counter) {%><div class='counter'></div><% } else { %><ul></ul><% } %><a href='#' class='next'></a></div>"), initialize: function() { this.slidesCount = this.options.transitions.length, this.visualization = this.options.visualization, this.slides = this.visualization.slides }, _prev: function(a) { a && this.killEvent(a), this.visualization.sequence.prev() }, _next: function(a) { a && this.killEvent(a), this.visualization.sequence.next() }, _renderDots: function() {
                        for (var a = this.slides.state(), b = 0; b < this.options.transitions.length; b++) {
                            var c = new cdb.geo.ui.SlidesControllerItem({ num: b, transition_options: this.options.transitions[b], active: b == a });
                            c.bind("onClick", this._onSlideClick, this), this.$el.find("ul").append(c.render().$el) } }, _renderCounter: function() {
                        var a = this.slides.state(),
                            b = this.options.transitions[a],
                            c = this.$el.find(".counter");
                        b && "time" === b.transition_trigger ? c.addClass("loading") : c.removeClass("loading"), c.html(a + 1 + "/" + this.options.transitions.length) }, _onSlideClick: function(a) { this.visualization.sequence.current(a.options.num) }, render: function() {
                        var a = _.extend(this.defaults, this.options);
                        return this.$el.html(this.template(a)), this.slides && this.options.transitions && (a.show_counter ? this._renderCounter() : this._renderDots()), this } }), cdb.geo.ui.MobileLayer = cdb.core.View.extend({ events: { "click h3": "_toggle", dblclick: "_stopPropagation" }, tagName: "li", className: "cartodb-mobile-layer has-toggle", template: cdb.core.Template.compile("<% if (show_title) { %><h3><%- layer_name %><% } %><a href='#' class='toggle<%- toggle_class %>'></a></h3>"), _stopPropagation: function(a) { a.stopPropagation() }, initialize: function() { _.defaults(this.options, this.default_options), this.model.bind("change:visible", this._onChangeVisible, this) }, _onChangeVisible: function() { this.$el.find(".legend")[this.model.get("visible") ? "fadeIn" : "fadeOut"](150), this.$el[this.model.get("visible") ? "removeClass" : "addClass"]("hidden"), this.trigger("change_visibility", this) }, _toggle: function(a) { a.preventDefault(), a.stopPropagation(), this.options.hide_toggle || this.model.set("visible", !this.model.get("visible")) }, _renderLegend: function() {
                        if (this.options.show_legends && (!this.model.get("legend") || "none" != this.model.get("legend").type && this.model.get("legend").type) && (!this.model.get("legend") || !this.model.get("legend").items || 0 != this.model.get("legend").items.length)) { this.$el.addClass("has-legend");
                            var a = new cdb.geo.ui.Legend(this.model.get("legend"));
                            a.undelegateEvents(), this.$el.append(a.render().$el) } }, _truncate: function(a, b) {
                        return a.substr(0, b - 1) + (a.length > b ? "&hellip;" : "") }, render: function() {
                        var a = this.model.get("layer_name");
                        a = a ? this._truncate(a, 23) : "untitled";
                        var b = _.extend(this.model.attributes, { layer_name: this.options.show_title ? a : "", toggle_class: this.options.hide_toggle ? " hide" : "" });
                        return this.$el.html(this.template(_.extend(b, { show_title: this.options.show_title }))), this.options.hide_toggle && this.$el.removeClass("has-toggle"), this.model.get("visible") || this.$el.addClass("hidden"), this.model.get("legend") && this._renderLegend(), this._onChangeVisible(), this } }), cdb.geo.ui.Mobile = cdb.core.View.extend({ className: "cartodb-mobile", events: { "click .cartodb-attribution-button": "_onAttributionClick", "click .toggle": "_toggle", "click .fullscreen": "_toggleFullScreen", "click .backdrop": "_onBackdropClick", "dblclick .aside": "_stopPropagation", "dragstart .aside": "_checkOrigin", "mousedown .aside": "_checkOrigin", "touchstart .aside": "_checkOrigin", "MSPointerDown .aside": "_checkOrigin" }, initialize: function() { _.bindAll(this, "_toggle", "_reInitScrollpane"), _.defaults(this.options, this.default_options), this.hasLayerSelector = !1, this.layersLoading = 0, this.slides_data = this.options.slides_data, this.visualization = this.options.visualization, this.visualization && (this.slides = this.visualization.slides), this.mobileEnabled = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), this.visibility_options = this.options.visibility_options || {}, this.mapView = this.options.mapView, this.map = this.mapView.map, this.template = this.options.template ? this.options.template : cdb.templates.getTemplate("geo/zoom"), this._selectOverlays(), this._setupModel(), window.addEventListener("orientationchange", _.bind(this.doOnOrientationChange, this)), this._addWheelEvent() }, loadingTiles: function() { this.loader && this.loader.show(), 0 === this.layersLoading && this.trigger("loading"), this.layersLoading++ }, loadTiles: function() { this.loader && this.loader.hide(), this.layersLoading--, this.layersLoading <= 0 && (this.layersLoading = 0, this.trigger("load")) }, _selectOverlays: function() {
                        if (this.slides && this.slides_data) {
                            var a = this.slides.state();
                            0 == a ? this.overlays = this.options.overlays : this.overlays = this.slides_data[a - 1].overlays } else this.overlays = this.options.overlays }, _addWheelEvent: function() {
                        var a = this.options.mapView;
                        $(document).on("webkitfullscreenchange mozfullscreenchange fullscreenchange", function() { document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || a.options.map.set("scrollwheel", !1), a.invalidateSize() }) }, _setupModel: function() { this.model = new Backbone.Model({ open: !1, layer_count: 0 }), this.model.on("change:open", this._onChangeOpen, this), this.model.on("change:layer_count", this._onChangeLayerCount, this) }, _checkOrigin: function(a) {
                        var b = $(a.target).closest(".jspVerticalBar").length > 0 && "touchstart" != a.type;
                        b || a.stopPropagation() }, _stopPropagation: function(a) { a.stopPropagation() }, _onBackdropClick: function(a) { a.preventDefault(), a.stopPropagation(), this.$el.find(".backdrop").fadeOut(250), this.$el.find(".cartodb-attribution").fadeOut(250) }, _onAttributionClick: function(a) { a.preventDefault(), a.stopPropagation(), this.$el.find(".backdrop").fadeIn(250), this.$el.find(".cartodb-attribution").fadeIn(250) }, _toggle: function(a) { a.preventDefault(), a.stopPropagation(), this.model.set("open", !this.model.get("open")) }, _toggleFullScreen: function(a) { a.stopPropagation(), a.preventDefault();
                        var b = window.document,
                            c = $("#map > div")[0],
                            d = c.requestFullscreen || c.mozRequestFullScreen || c.webkitRequestFullScreen,
                            e = b.exitFullscreen || b.mozCancelFullScreen || b.webkitExitFullscreen,
                            f = this.options.mapView;
                        b.fullscreenElement || b.mozFullScreenElement || b.webkitFullscreenElement ? e.call(b) : (d.call(c), f && f.options.map.set("scrollwheel", !0)) }, _open: function() {
                        var a = this.$el.find(".aside").width();
                        this.$el.find(".cartodb-header").animate({ right: a }, 200), this.$el.find(".aside").animate({ right: 0 }, 200), this.$el.find(".cartodb-attribution-button").animate({ right: a + parseInt(this.$el.find(".cartodb-attribution-button").css("right")) }, 200), this.$el.find(".cartodb-attribution").animate({ right: a + parseInt(this.$el.find(".cartodb-attribution-button").css("right")) }, 200), this._initScrollPane() }, _close: function() { this.$el.find(".cartodb-header").animate({ right: 0 }, 200), this.$el.find(".aside").animate({ right: -this.$el.find(".aside").width() }, 200), this.$el.find(".cartodb-attribution-button").animate({ right: 20 }, 200), this.$el.find(".cartodb-attribution").animate({ right: 20 }, 200) }, default_options: { timeout: 0, msg: "" }, _stopPropagation: function(a) { a.stopPropagation() }, doOnOrientationChange: function() {
                        switch (window.orientation) {
                            case -90:
                            case 90:
                                this.recalc("landscape");
                                break;
                            default:
                                this.recalc("portrait") } }, recalc: function(a) {
                        var b = $(".legends > div.cartodb-legend-stack").height();
                        this.$el.hasClass("open") && 100 > b && !this.$el.hasClass("torque") ? (this.$el.css("height", b), this.$el.find(".top-shadow").hide(), this.$el.find(".bottom-shadow").hide()) : this.$el.hasClass("open") && 100 > b && this.$el.hasClass("legends") && this.$el.hasClass("torque") && (this.$el.css("height", b + $(".legends > div.torque").height()), this.$el.find(".top-shadow").hide(), this.$el.find(".bottom-shadow").hide()) }, _onChangeLayerCount: function() {
                        var a = this.model.get("layer_count"),
                            b = a + " layer" + (1 != a ? "s" : "");
                        this.$el.find(".aside .layer-container > h3").html(b) }, _onChangeOpen: function() { this.model.get("open") ? this._open() : this._close() }, _createLayer: function(a, b) {
                        return new cdb.geo.ui[a](b) }, _getLayers: function() { this.layers = [], this.options.layerView ? this._getLayersFromLayerView() : _.each(this.map.layers.models, this._getLayer, this) }, _getLayersFromLayerView: function() {
                        if (this.options.layerView && "layergroup" == this.options.layerView.model.get("type")) this.layers = _.map(this.options.layerView.layers, function(b, c) {
                            var d = new cdb.core.Model(b);
                            return d.set("order", c), d.set("type", "layergroup"), d.set("visible", b.visible), d.set("layer_name", b.options.layer_name), a = this._createLayer("LayerViewFromLayerGroup", { model: d, layerView: this.options.layerView, layerIndex: c }), a.model }, this);
                        else if (this.options.layerView && "torque" == this.options.layerView.model.get("type")) {
                            var a = this._createLayer("LayerView", { model: this.options.layerView.model });
                            this.layers.push(a.model) } }, _getLayer: function(a) {
                        if ("layergroup" == a.get("type") || "namedmap" === a.get("type"))
                            for (var b = this.mapView.getLayerByCid(a.cid), c = 0; c < b.getLayerCount(); ++c) {
                                var d = b.getLayer(c),
                                    e = new cdb.core.Model(d);
                                e.set("order", c), e.set("type", "layergroup"), e.set("visible", d.visible), e.set("layer_name", d.options.layer_name), layerView = this._createLayer("LayerViewFromLayerGroup", { model: e, layerView: b, layerIndex: c }), this.layers.push(layerView.model) } else("CartoDB" === a.get("type") || "torque" === a.get("type")) && ("torque" === a.get("type") && a.on("change:visible", this._toggleSlider, this), this.layers.push(a)) }, _toggleSlider: function(a) { a.get("visible") ? (this.$el.addClass("with-torque"), this.slider.show()) : (this.$el.removeClass("with-torque"), this.slider.hide()) }, _reInitScrollpane: function() { this.$(".scrollpane").data("jsp") && this.$(".scrollpane").data("jsp").reinitialise() }, _bindOrientationChange: function() {
                        var a = this,
                            b = function() { $(".cartodb-mobile .scrollpane").css("max-height", a.$el.height() - 30), $(".cartodb-mobile .scrollpane").data("jsp") && $(".cartodb-mobile .scrollpane").data("jsp").reinitialise() };
                        window.addEventListener ? window.addEventListener("orientationchange", _.bind(b)) : window.attachEvent("orientationchange", b, this) }, _renderOverlays: function() {
                        var a = !1,
                            b = !1,
                            c = !1,
                            d = !1;
                        _.each(this.overlays, function(e) { this.visibility_options.search || "search" != e.type || this.visibility_options.search !== !1 && "false" !== this.visibility_options.search && (this._addSearch(), a = !0), this.visibility_options.zoomControl || "zoom" !== e.type || "false" !== this.visibility_options.zoomControl && (this._addZoom(), b = !0), this.visibility_options.loaderControl || "loader" !== e.type || "false" !== this.visibility_options.loaderControl && (this._addLoader(), c = !0), "fullscreen" != e.type || this.mobileEnabled || this._addFullscreen(), "header" == e.type && this._addHeader(e), "layer_selector" == e.type && (d = !0) }, this);
                        var e = this.visibility_options.search === !0 || "true" === this.visibility_options.search,
                            f = this.visibility_options.zoomControl === !0 || "true" === this.visibility_options.zoomControl,
                            g = this.visibility_options.loaderControl === !0 || "true" === this.visibility_options.loaderControl,
                            h = this.visibility_options.layer_selector;!a && e && this._addSearch(), !b && f && this._addZoom(), !c && g && this._addLoader(), (h || d && void 0 == h) && (this.hasLayerSelector = !0) }, _initScrollPane: function() {
                        if (!this.$scrollpane) {
                            var a = this,
                                b = this.$el.height();
                            this.$scrollpane = this.$el.find(".scrollpane"), setTimeout(function() { a.$scrollpane.css("max-height", b - 60), a.$scrollpane.jScrollPane({ showArrows: !0 }) }, 500) } }, _addZoom: function() {
                        var a = cdb.core.Template.compile('    <a href="#zoom_in" class="zoom_in">+</a>    <a href="#zoom_out" class="zoom_out">-</a>    <div class="info"></div>', "mustache"),
                            b = new cdb.geo.ui.Zoom({ model: this.options.map, template: a });
                        this.$el.append(b.render().$el), this.$el.addClass("with-zoom") }, _addLoader: function() {
                        var a = cdb.core.Template.compile('<div class="loader"></div>', "mustache");
                        this.loader = new cdb.geo.ui.TilesLoader({ template: a }), this.$el.append(this.loader.render().$el), this.$el.addClass("with-loader") }, _addFullscreen: function() { 0 != this.visibility_options.fullscreen && (this.hasFullscreen = !0, this.$el.addClass("with-fullscreen")) }, _addSearch: function() { this.hasSearch = !0;
                        var a = cdb.core.Template.compile('      <form>      <span class="loader"></span>      <input type="text" class="text" placeholder="Search for places..." value="" />      <input type="submit" class="submit" value="" />      </form>      ', "mustache"),
                            b = new cdb.geo.ui.Search({ template: a, mapView: this.mapView, model: this.mapView.map });
                        this.$el.find(".aside").prepend(b.render().$el), this.$el.find(".cartodb-searchbox").show(), this.$el.addClass("with-search") }, _addHeader: function(a) { this.hasHeader = !0, this.$header = this.$el.find(".cartodb-header");
                        var b = _.template('<div class="hgroup"><% if (show_title) { %><div class="title"><%= title %></div><% } %><% if (show_description) { %><div class="description"><%= description %><% } %></div></div>'),
                            c = a.options.extra,
                            d = !1,
                            e = !1,
                            f = !1;
                        if (c) {
                            (this.visibility_options.title || 0 != this.visibility_options.title && c.show_title) && (d = !0, e = !0), (this.visibility_options.description || 0 != this.visibility_options.description && c.show_description) && (d = !0, f = !0), this.slides && (d = !0);
                            var g = b({ title: cdb.core.sanitize.html(c.title), show_title: e, description: cdb.core.sanitize.html(c.description), show_description: f });
                            d && (this.$el.addClass("with-header"), this.$header.find(".content").append(g)) } }, _addAttributions: function() {
                        var a = "";
                        this.options.mapView.$el.find(".leaflet-control-attribution").hide(), this.options.layerView ? (a = this.options.layerView.model.get("attribution"), this.$el.find(".cartodb-attribution").append(a)) : this.options.map.get("attribution") && (a = this.options.map.get("attribution"), _.each(a, function(a) {
                            var b = $("<li></li>");
                            b.html(a);
                            this.$el.find(".cartodb-attribution").append(b) }, this)), a && this.$el.find(".cartodb-attribution-button").fadeIn(250) }, _renderLayers: function() {
                        var a = this.visibility_options.legends,
                            b = this.layers.filter(function(a) {
                                return a.get("legend") && "none" !== a.get("legend").type }),
                            c = b.length ? !0 : !1;
                        (this.hasLayerSelector || a) && (this.hasLayerSelector || c) && 0 != this.layers.length && (1 != this.layers.length || c) && (this.$el.addClass("with-layers"), this.model.set("layer_count", 0), this.hasSearch || this.$el.find(".aside .layer-container").prepend("<h3></h3>"), _.each(this.layers, this._renderLayer, this)) }, _renderLayer: function(a) {
                        var b = a.get("legend") && "" !== a.get("legend").type && "none" !== a.get("legend").type;
                        if ((this.hasLayerSelector || b) && (this.hasLayerSelector || a.get("visible"))) {
                            var c = 1 == this.layers.length || !this.hasLayerSelector,
                                d = !0;
                            this.visibility_options && void 0 !== this.visibility_options.legends && (d = this.visibility_options.legends);
                            var e = new cdb.geo.ui.MobileLayer({ model: a, show_legends: d, show_title: this.hasLayerSelector ? !0 : !1, hide_toggle: c });
                            this.$el.find(".aside .layers").append(e.render().$el), e.bind("change_visibility", this._reInitScrollpane, this), this.model.set("layer_count", this.model.get("layer_count") + 1) } }, _renderTorque: function() { this.options.torqueLayer && (this.hasTorque = !0, this.slider = new cdb.geo.ui.TimeSlider({ type: "time_slider", layer: this.options.torqueLayer, map: this.options.map, pos_margin: 0, position: "none", width: "auto" }), this.slider.bind("time_clicked", function() { this.slider.toggleTime() }, this), this.$el.find(".torque").append(this.slider.render().$el), this.options.torqueLayer.hidden ? this.slider.hide() : this.$el.addClass("with-torque")) }, _renderSlidesController: function() { this.slides && (this.$el.addClass("with-slides"), this.slidesController = new cdb.geo.ui.SlidesController({ show_counter: !0, transitions: this.options.transitions, visualization: this.options.visualization, slides: this.slides }), this.$el.append(this.slidesController.render().$el)) }, render: function() {
                        return this._bindOrientationChange(), this.$el.html(this.template(this.options)), this.$header = this.$el.find(".cartodb-header"), this.$header.show(), this._renderOverlays(), this._renderSlidesController(), this._addAttributions(), this._getLayers(), this._renderLayers(), this._renderTorque(), this } }), cdb.geo.ui.TilesLoader = cdb.core.View.extend({ className: "cartodb-tiles-loader", default_options: { animationSpeed: 500 }, initialize: function() { _.defaults(this.options, this.default_options), this.isVisible = 0, this.template = this.options.template ? this.options.template : cdb.templates.getTemplate("geo/tiles_loader") }, render: function() {
                        return this.$el.html($(this.template(this.options))), this }, show: function(a) { this.isVisible || (!cdb.core.util.ie || cdb.core.util.browser.ie && cdb.core.util.browser.ie.version >= 10 ? this.$el.fadeTo(this.options.animationSpeed, 1) : this.$el.show(), this.isVisible++) }, hide: function(a) { this.isVisible--, this.isVisible > 0 || (this.isVisible = 0, !cdb.core.util.ie || cdb.core.util.browser.ie && cdb.core.util.browser.ie.version >= 10 ? this.$el.stop(!0).fadeTo(this.options.animationSpeed, 0) : this.$el.hide()) }, visible: function() {
                        return this.isVisible > 0 } }), cdb.geo.ui.InfoBox = cdb.core.View.extend({ className: "cartodb-infobox", defaults: { pos_margin: 20, position: "bottom|right", width: 200 }, initialize: function() { _.defaults(this.options, this.defaults), this.options.layer && this.enable(), this.setTemplate(this.options.template || this.defaultTemplate, "mustache") }, setTemplate: function(a) { this.template = cdb.core.Template.compile(a, "mustache") }, enable: function() { this.options.layer && this.options.layer.on("featureOver", function(a, b, c, d) { this.render(d).show() }, this).on("featureOut", function() { this.hide() }, this) }, disable: function() { this.options.layer && this.options.layer.off(null, null, this) }, setPosition: function(a) {
                        var b = {}; - 1 !== a.indexOf("top") ? b.top = this.options.pos_margin : -1 !== a.indexOf("bottom") && (b.bottom = this.options.pos_margin), -1 !== a.indexOf("left") ? b.left = this.options.pos_margin : -1 !== a.indexOf("right") && (b.right = this.options.pos_margin), this.$el.css(b) }, render: function(a) {
                        return this.$el.html(this.template(a)), this.options.width && this.$el.css("width", this.options.width), this.options.position && this.setPosition(this.options.position), this } }), cdb.geo.ui.Tooltip = cdb.geo.ui.InfoBox.extend({ defaultTemplate: "<p>{{text}}</p>", className: "cartodb-tooltip", defaults: { vertical_offset: 0, horizontal_offset: 0, position: "top|center" }, initialize: function() {
                        if (!this.options.mapView) throw new Error("mapView should be present");
                        this.options.template = this.options.template || this.defaultTemplate, cdb.geo.ui.InfoBox.prototype.initialize.call(this), this._filter = null, this.showing = !1, this.showhideTimeout = null }, setLayer: function(a) {
                        return this.options.layer = a, this }, setFilter: function(a) {
                        return this._filter = a, this }, setFields: function(a) {
                        return this.options.fields = a, this }, setAlternativeNames: function(a) { this.options.alternative_names = a }, enable: function() { this.options.layer && (this.options.layer.unbind(null, null, this), this.options.layer.on("mouseover", function(a, b, c, d) {
                            if (this.options.fields && this.options.fields.length > 0) {
                                var e = ["fields", "content"];
                                this.options.omit_columns && (e = e.concat(this.options.omit_columns));
                                var f = cdb.geo.ui.InfowindowModel.contentForFields(d, this.options.fields, { empty_fields: this.options.empty_fields });
                                d.content = _.omit(d, e), d.fields = f.fields;
                                var g = this.options.alternative_names;
                                if (g)
                                    for (var h = 0; h < d.fields.length; ++h) {
                                        var i = d.fields[h];
                                        i.title = g[i.title] || i.title }
                                this.show(c, d), this.showing = !0 } else this.showing && (this.hide(), this.showing = !1) }, this).on("mouseout", function() { this.showing && (this.hide(), this.showing = !1) }, this), this.add_related_model(this.options.layer)) }, disable: function() { this.options.layer && this.options.layer.unbind(null, null, this), this.hide(), this.showing = !1 }, _visibility: function() {
                        var a = this;
                        clearTimeout(this.showhideTimeout), this.showhideTimeout = setTimeout(a._showing ? function() { a.$el.fadeIn(100) } : function() { a.$el.fadeOut(200) }, 50) }, hide: function() { this._showing && (this._showing = !1, this._visibility()) }, show: function(a, b) {
                        return this._filter && !this._filter(b) ? this : (this.render(b), this.setPosition(a), this._showing || (this._showing = !0, this._visibility()), this) }, setPosition: function(a) {
                        var b = this.options.position,
                            c = this.$el.innerHeight(),
                            d = this.$el.innerWidth(),
                            e = this.options.mapView.getSize(),
                            f = 0,
                            g = 0;
                        f = -1 !== b.indexOf("top") ? a.y - c : -1 !== b.indexOf("middle") ? a.y - c / 2 : a.y, 0 > f ? f = a.y : f + c > e.y && (f = a.y - c), g = -1 !== b.indexOf("left") ? a.x - d : -1 !== b.indexOf("center") ? a.x - d / 2 : a.x, 0 > g ? g = a.x : g + d > e.x && (g = a.x - d), f += this.options.vertical_offset, g += this.options.horizontal_offset, this.$el.css({ top: f, left: g }) }, render: function(a) {
                        var b = cdb.core.sanitize.html(this.template(a));
                        return this.$el.html(b), this } }), cdb.ui.common.FullScreen = cdb.core.View.extend({ tagName: "div", className: "cartodb-fullscreen", events: { "click a": "_toggleFullScreen" }, initialize: function() { _.bindAll(this, "render"), _.defaults(this.options, this.default_options), this._addWheelEvent() }, _addWheelEvent: function() {
                        var a = this,
                            b = this.options.mapView;
                        $(document).on("webkitfullscreenchange mozfullscreenchange fullscreenchange", function() { document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || a.model.get("allowWheelOnFullscreen") && b.options.map.set("scrollwheel", !1), b.invalidateSize() }) }, _toggleFullScreen: function(a) { a && this.killEvent(a);
                        var b = window.document,
                            c = b.documentElement;
                        this.options.doc && (c = $(this.options.doc)[0]);
                        var d = c.requestFullscreen || c.mozRequestFullScreen || c.webkitRequestFullScreen || c.msRequestFullscreen,
                            e = b.exitFullscreen || b.mozCancelFullScreen || b.webkitExitFullscreen || b.msExitFullscreen,
                            f = this.options.mapView;
                        b.fullscreenElement || b.mozFullScreenElement || b.webkitFullscreenElement || b.msFullscreenElement ? e.call(b) : (c.webkitRequestFullScreen ? d.call(c, void 0) : d && d.call(c), f && this.model.get("allowWheelOnFullscreen") && f.map.set("scrollwheel", !0)) }, render: function() {
                        var a = _.extend(this.options, { mapUrl: location.href || "" });
                        return this.$el.html(this.options.template(a)), this._canFullScreenBeEnabled() || (this.undelegateEvents(), cdb.log.info("FullScreen API is deprecated on insecure origins. See https://goo.gl/rStTGz for more details.")), this }, _canFullScreenBeEnabled: function() {
                        if (this._isInIframe()) {
                            var a = document.referrer;
                            if (0 !== a.search("https:")) return !1 }
                        return !0 }, _isInIframe: function() {
                        try {
                            return window.self !== window.top } catch (a) {
                            return !0 } } }), SubLayerFactory.createSublayer = function(a, b, c) {
                    if (a = a && a.toLowerCase(), a && "mapnik" !== a && "cartodb" !== a) {
                        if ("http" === a) return new HttpSubLayer(b, c);
                        throw "Sublayer type not supported" }
                    return new CartoDBSubLayer(b, c) }, SubLayerBase.prototype = { toJSON: function() {
                        throw "toJSON must be implemented" }, isValid: function() {
                        throw "isValid must be implemented" }, remove: function() { this._check(), this._parent.removeLayer(this._position), this._added = !1, this.trigger("remove", this), this._onRemove() }, _onRemove: function() {}, toggle: function() {
                        return this.get("hidden") ? this.show() : this.hide(), !this.get("hidden") }, show: function() { this.get("hidden") && this.set({ hidden: !1 }) }, hide: function() { this.get("hidden") || this.set({ hidden: !0 }) }, set: function(a) { this._check();
                        var b = this._parent.getLayer(this._position),
                            c = b.options;
                        for (var d in a) c[d] = a[d];
                        return this._parent.setLayer(this._position, b), void 0 !== a.hidden && this.trigger("change:visibility", this, a.hidden), this }, unset: function(a) {
                        var b = this._parent.getLayer(this._position);
                        delete b.options[a], this._parent.setLayer(this._position, b) }, get: function(a) { this._check();
                        var b = this._parent.getLayer(this._position);
                        return b.options[a] }, isVisible: function() {
                        return !this.get("hidden") }, _check: function() {
                        if (!this._added) throw "sublayer was removed" }, _unbindInteraction: function() { this._parent.off && this._parent.off(null, null, this) }, _bindInteraction: function() {
                        if (this._parent.on) {
                            var a = this,
                                b = function(b, c) { c = c || b, a._parent.on(b, function() {
                                        var b = Array.prototype.slice.call(arguments);
                                        parseInt(b[b.length - 1], 10) == a._position && a.trigger.apply(a, [c].concat(b)) }, a) };
                            b("featureOver"), b("featureOut"), b("featureClick"), b("layermouseover", "mouseover"), b("layermouseout", "mouseout") } }, _setPosition: function(a) { this._position = a } }, _.extend(SubLayerBase.prototype, Backbone.Events), CartoDBSubLayer.prototype = _.extend({}, SubLayerBase.prototype, { toJSON: function() {
                        var a = { type: "cartodb", options: { sql: this.getSQL(), cartocss: this.getCartoCSS(), cartocss_version: this.get("cartocss_version") || "2.1.0" } },
                            b = this.getInteractivity();
                        if (b && b.length > 0) { a.options.interactivity = b;
                            var c = this.getAttributes();
                            c.length > 0 && (a.options.attributes = { id: "cartodb_id", columns: c }) }
                        return this.get("raster") && (a.options.raster = !0, a.options.geom_column = "the_raster_webmercator", a.options.geom_type = "raster", a.options.raster_band = this.get("raster_band") || 0, a.options.cartocss_version = this.get("cartocss_version") || "2.3.0"), a }, isValid: function() {
                        return this.get("sql") && this.get("cartocss") }, _onRemove: function() { this._unbindInteraction() }, setSQL: function(a) {
                        return this.set({ sql: a }) }, setCartoCSS: function(a) {
                        return this.set({ cartocss: a }) }, setInteractivity: function(a) {
                        return this.set({ interactivity: a }) }, setInteraction: function(a) { this._parent.setInteraction(this._position, a) }, getSQL: function() {
                        return this.get("sql") }, getCartoCSS: function() {
                        return this.get("cartocss") }, getInteractivity: function() {
                        var a = this.get("interactivity");
                        return a ? ("string" == typeof a && (a = a.split(",")), this._trimArrayItems(a)) : void 0 }, getAttributes: function() {
                        var a = [];
                        return a = this.get("attributes") ? this.get("attributes") : _.map(this.infowindow.get("fields"), function(a) {
                            return a.name }), this._trimArrayItems(a) }, _trimArrayItems: function(a) {
                        return _.map(a, function(a) {
                            return a.trim() }) } }), HttpSubLayer.prototype = _.extend({}, SubLayerBase.prototype, { toJSON: function() {
                        var a = { type: "http", options: { urlTemplate: this.getURLTemplate() } },
                            b = this.get("subdomains");
                        b && (a.options.subdomains = b);
                        var c = this.get("tms");
                        return void 0 !== c && (a.options.tms = c), a }, isValid: function() {
                        return this.get("urlTemplate") }, setURLTemplate: function(a) {
                        return this.set({ urlTemplate: a }) }, setSubdomains: function(a) {
                        return this.set({ subdomains: a }) }, setTms: function(a) {
                        return this.set({ tms: a }) }, getURLTemplate: function(a) {
                        return this.get("urlTemplate") }, getSubdomains: function(a) {
                        return this.get("subdomains") }, getTms: function(a) {
                        return this.get("tms") } }), MapProperties.prototype.getMapId = function() {
                    return this.mapProperties.layergroupid }, MapProperties.prototype.getLayerIndexByType = function(a, b) {
                    var c = this.mapProperties.metadata && this.mapProperties.metadata.layers;
                    if (!c) return a;
                    for (var d = {}, e = 0, f = 0; f < c.length; f++) c[f].type == b && (d[e] = f, e++);
                    return void 0 == d[a] ? -1 : d[a] }, MapProperties.prototype.getLayerIndexesByType = function(a) {
                    var b = this.mapProperties.metadata && this.mapProperties.metadata.layers;
                    if (b) {
                        for (var c = [], d = 0; d < b.length; d++) {
                            var e = b[d],
                                f = "torque" !== e.type;
                            a && a.length > 0 && (f = f && -1 != a.indexOf(e.type)), f && c.push(d) }
                        return c } }, MapBase.BASE_URL = "/api/v1/map", MapBase.EMPTY_GIF = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", MapBase.prototype = {
                    _buildMapsApiTemplate: function(a) {
                        var b = a.tiler_protocol,
                            c = a.tiler_domain,
                            d = "" != a.tiler_port ? ":" + a.tiler_port : "",
                            e = a.user_name ? "{user}." : "";
                        a.maps_api_template = [b, "://", e, c, d].join("") },
                    createMap: function(a) {
                        function b(a, b) {
                            for (var d; d = c._createMapCallbacks.pop();) d(a, b) }
                        var c = this;
                        clearTimeout(this._timeout), this._createMapCallsStack.push(b), this._createMapCallbacks.push(a), this._timeout = setTimeout(function() { c._createMap(b) }, 4) },
                    _createMap: function(a) {
                        if (a = a || function() {}, this._waiting) return this;
                        if (this._createMapCallsStack = [], !this.named_map && 0 === this.visibleLayers().length) return void a(null);
                        this._waiting = !0;
                        var b = null;
                        b = this._usePOST() ? this._requestPOST : this._requestGET;
                        var c = this._getParamsFromOptions(this.options);
                        return b.call(this, c, a), this },
                    _getParamsFromOptions: function(a) {
                        var b = [],
                            c = a.extra_params || {},
                            d = a.map_key || a.api_key || c.map_key || c.api_key;
                        if (d && b.push("map_key=" + d), c.auth_token)
                            if (_.isArray(c.auth_token))
                                for (var e = 0, f = c.auth_token.length; f > e; e++) b.push("auth_token[]=" + c.auth_token[e]);
                            else b.push("auth_token=" + c.auth_token);
                        return this.stat_tag && b.push("stat_tag=" + this.stat_tag), b },
                    _usePOST: function() {
                        if (this.options.cors) {
                            if (this.options.force_cors) return !0;
                            var a = JSON.stringify(this.toJSON());
                            if (a.length > this.options.MAX_GET_SIZE) return !0 }
                        return !1 },
                    _requestPOST: function(a, b) {
                        var c = this,
                            d = this.options.ajax,
                            e = cartodb.core.Profiler.metric("cartodb-js.layergroup.post.time").start();
                        d({ crossOrigin: !0, type: "POST", method: "POST", dataType: "json", contentType: "application/json", url: this._tilerHost() + this.endPoint + (a.length ? "?" + a.join("&") : ""), data: JSON.stringify(this.toJSON()), success: function(a) { e.end(), 0 === c._createMapCallsStack.length && (a.errors ? (cartodb.core.Profiler.metric("cartodb-js.layergroup.post.error").inc(), b(null, a)) : b(a)), c._requestFinished() }, error: function(a) { e.end(), cartodb.core.Profiler.metric("cartodb-js.layergroup.post.error").inc();
                                var d = { errors: ["unknow error"] };
                                0 === a.status && (d = { errors: ["connection error"] });
                                try { d = JSON.parse(a.responseText) } catch (f) {}
                                0 === c._createMapCallsStack.length && b(null, d), c._requestFinished() } }) },
                    _requestGET: function(a, b) {
                        var c = this,
                            d = this.options.ajax,
                            e = JSON.stringify(this.toJSON()),
                            f = this._getCompressor(e),
                            g = c.JSONPendPoint || c.endPoint;
                        f(e, 3, function(e) {
                            a.push(e);
                            var f = cartodb.core.Profiler.metric("cartodb-js.layergroup.get.time").start(),
                                h = c.options.dynamic_cdn ? c._host() : c._tilerHost();
                            d({
                                dataType: "jsonp",
                                url: h + g + "?" + a.join("&"),
                                jsonpCallback: c.options.instanciateCallback,
                                cache: !!c.options.instanciateCallback,
                                success: function(a) {
                                    f.end(), 0 === c._createMapCallsStack.length && (a.errors ? (cartodb.core.Profiler.metric("cartodb-js.layergroup.get.error").inc(),
                                        b(null, a)) : b(a)), c._requestFinished()
                                },
                                error: function(a) { f.end(), cartodb.core.Profiler.metric("cartodb-js.layergroup.get.error").inc();
                                    var d = { errors: ["unknow error"] };
                                    try { d = JSON.parse(xhr.responseText) } catch (e) {}
                                    0 === c._createMapCallsStack.length && b(null, d), c._requestFinished() }
                            })
                        })
                    },
                    _getCompressor: function(a) {
                        return this.options.compressor ? this.options.compressor : (a = a || JSON.stringify(this.toJSON()), !this.options.force_compress && a.length < this.options.MAX_GET_SIZE ? function(a, b, c) { c("config=" + encodeURIComponent(a)) } : function(a, b, c) { a = JSON.stringify({ config: a }), LZMA.compress(a, b, function(a) { c("lzma=" + encodeURIComponent(cdb.core.util.array2hex(a))) }) }) },
                    _requestFinished: function() {
                        var a = this;
                        if (this._waiting = !1, this.lastTimeUpdated = (new Date).getTime(), clearTimeout(this._refreshTimer), this._refreshTimer = setTimeout(function() { a.invalidate() }, this.options.refreshTime || 72e5), this._createMapCallsStack.length) {
                            var b = this._createMapCallsStack.pop();
                            this._createMap(b) } },
                    fetchAttributes: function(a, b, c, d) { this._attrCallbackName = this._attrCallbackName || this._callbackName();
                        var e = this.options.ajax,
                            f = cartodb.core.Profiler.metric("cartodb-js.named_map.attributes.time").start();
                        e({ dataType: "jsonp", url: this._attributesUrl(a, b), jsonpCallback: "_cdbi_layer_attributes_" + this._attrCallbackName, cache: !0, success: function(a) { f.end(), d(a) }, error: function(a) { f.end(), cartodb.core.Profiler.metric("cartodb-js.named_map.attributes.error").inc(), d(null) } }) },
                    _callbackName: function() {
                        return cdb.core.util.uniqueCallbackName(JSON.stringify(this.toJSON())) },
                    _attributesUrl: function(a, b) {
                        var c = this._host(),
                            d = [c, MapBase.BASE_URL.slice(1), this.mapProperties.getMapId(), this.mapProperties.getLayerIndexByType(this.getLayerIndexByNumber(a), "mapnik"), "attributes", b].join("/"),
                            e = this.options.extra_params || {},
                            f = e.auth_token;
                        if (f)
                            if (_.isArray(f)) {
                                for (var g = [], h = 0, i = f.length; i > h; h++) g.push("auth_token[]=" + f[h]);
                                d += "?" + g.join("&") } else d += "?auth_token=" + f;
                        return d },
                    invalidate: function() { this.mapProperties = null, this.urls = null, this.onLayerDefinitionUpdated() },
                    getTiles: function(a) {
                        var b = this;
                        return b.mapProperties ? (a && a(b._layerGroupTiles(b.mapProperties, b.options.extra_params)), this) : (this.createMap(function(c, d) {
                            if (c) b.mapProperties = new MapProperties(c), c.cdn_url && (b.options.cdn_url = b.options.cdn_url || {}, b.options.cdn_url = { http: c.cdn_url.http || b.options.cdn_url.http, https: c.cdn_url.https || b.options.cdn_url.https }), b.urls = b._layerGroupTiles(b.mapProperties, b.options.extra_params), a && a(b.urls);
                            else if (null !== b.named_map && d) a && a(null, d);
                            else if (0 === b.visibleLayers().length) return void(a && a({ tiles: [MapBase.EMPTY_GIF], grids: [] })) }), this) },
                    isHttps: function() {
                        return 0 === this.options.maps_api_template.indexOf("https") },
                    _layerGroupTiles: function(a, b) {
                        var c = [],
                            d = [],
                            e = this._encodeParams(b, this.options.pngParams),
                            f = this._encodeParams(b, this.options.gridParams),
                            g = this.options.subdomains || ["0", "1", "2", "3"];
                        this.isHttps() && (g = [null]);
                        var h = a.getLayerIndexesByType(this.options.filter);
                        if (h.length)
                            for (var i = "/" + h.join(",") + "/{z}/{x}/{y}", j = "/{z}/{x}/{y}", k = 0; k < g.length; ++k) {
                                var l = g[k],
                                    m = this._host(l) + MapBase.BASE_URL + "/" + a.getMapId();
                                d.push(m + i + ".png" + (e ? "?" + e : ""));
                                for (var n = 0; n < this.layers.length; ++n) {
                                    var o = a.getLayerIndexByType(n, "mapnik");
                                    c[n] = c[n] || [], c[n].push(m + "/" + o + j + ".grid.json" + (f ? "?" + f : "")) } } else d = [MapBase.EMPTY_GIF];
                        return { tiles: d, grids: c } },
                    _encodeParams: function(a, b) {
                        if (!a) return "";
                        var c = [];
                        b = b || _.keys(a);
                        for (var d in b) {
                            var e = b[d],
                                f = a[e];
                            if (f)
                                if (_.isArray(f))
                                    for (var g = 0, h = f.length; h > g; g++) c.push(e + "[]=" + encodeURIComponent(f[g]));
                                else {
                                    var i = encodeURIComponent(f);
                                    i = i.replace(/%7Bx%7D/g, "{x}").replace(/%7By%7D/g, "{y}").replace(/%7Bz%7D/g, "{z}"), c.push(e + "=" + i) } }
                        return c.join("&") },
                    onLayerDefinitionUpdated: function() {},
                    setSilent: function(a) { this.silent = a },
                    _definitionUpdated: function() { this.silent || this.invalidate() },
                    getTileJSON: function(a, b) { a = void 0 == a ? 0 : a;
                        var c = this;
                        this.getTiles(function(d) {
                            return d ? void(b && b(c._tileJSONfromTiles(a, d))) : void b(null) }) },
                    _tileJSONfromTiles: function(a, b, c) {
                        function d(a) {
                            for (var b = [], c = 0; c < a.length; ++c) b.push(a[c].replace("{s}", e[c % e.length]));
                            return b }
                        c = c || {};
                        var e = c.subdomains || ["0", "1", "2", "3"];
                        return { tilejson: "2.0.0", scheme: "xyz", grids: d(b.grids[a]), tiles: d(b.tiles), formatter: function(a, b) {
                                return b } } },
                    _tilerHost: function() {
                        var a = this.options;
                        return a.maps_api_template.replace("{user}", a.user_name) },
                    _host: function(a) {
                        var b = this.options,
                            c = b.cdn_url,
                            d = !c || c && !c.http && !c.https;
                        if (b.no_cdn || d) return this._tilerHost();
                        var e = this.isHttps() ? "https" : "http",
                            f = e + "://";
                        a && (f += a + ".");
                        var g = c[e];
                        return this._isUserTemplateUrl(g) || (g += "/{user}"), f += g.replace("{user}", b.user_name) },
                    _isUserTemplateUrl: function(a) {
                        return a && -1 !== a.indexOf("{user}") },
                    getLayer: function(a) {
                        return _.clone(this.layers[a]) },
                    getLayerCount: function() {
                        return this.layers ? this.layers.length : 0 },
                    getLayerIndexByNumber: function(a) {
                        for (var b = {}, c = 0, d = 0; d < this.layers.length; ++d) {
                            var e = this.layers[d];
                            b[d] = c, e.options && !e.options.hidden && ++c }
                        return b[a] },
                    getLayerNumberByIndex: function(a) {
                        for (var b = [], c = 0; c < this.layers.length; ++c) {
                            var d = this.layers[c];
                            this._isLayerVisible(d) && b.push(c) }
                        return a >= b.length ? -1 : +b[a] },
                    visibleLayers: function() {
                        for (var a = [], b = 0; b < this.layers.length; ++b) {
                            var c = this.layers[b];
                            this._isLayerVisible(c) && a.push(c) }
                        return a },
                    _isLayerVisible: function(a) {
                        return a.options && "hidden" in a.options ? !a.options.hidden : a.visible !== !1 },
                    setLayer: function(a, b) {
                        if (a < this.getLayerCount() && a >= 0) {
                            if (b.options.hidden) {
                                var c = this.interactionEnabled[a];
                                c && (b.interaction = !0, this.setInteraction(a, !1)) } else this.layers[a].interaction && (this.setInteraction(a, !0), delete this.layers[a].interaction);
                            this.layers[a] = _.clone(b) }
                        return this.invalidate(), this },
                    getTooltipData: function(a) {
                        var b = this.layers[a].tooltip;
                        return b && b.fields && b.fields.length ? b : null },
                    getInfowindowData: function(a) {
                        var b, c = this.layers[a].infowindow;
                        return !c && this.options.layer_definition && (b = this.options.layer_definition.layers[a]) && (c = b.infowindow), c && c.fields && c.fields.length > 0 ? c : null },
                    containInfowindow: function() {
                        for (var a = this.options.layer_definition.layers, b = 0; b < a.length; ++b) {
                            var c = a[b].infowindow;
                            if (c && c.fields && c.fields.length > 0) return !0 }
                        return !1 },
                    containTooltip: function() {
                        for (var a = this.options.layer_definition.layers, b = 0; b < a.length; ++b) {
                            var c = a[b].tooltip;
                            if (c && c.fields && c.fields.length) return !0 }
                        return !1 },
                    getSubLayer: function(a) {
                        var b = this.layers[a];
                        return b.sub = b.sub || SubLayerFactory.createSublayer(b.type, this, a), b.sub },
                    getSubLayerCount: function() {
                        return this.getLayerCount() },
                    getSubLayers: function() {
                        for (var a = [], b = 0; b < this.getSubLayerCount(); ++b) a.push(this.getSubLayer(b));
                        return a }
                }, LayerDefinition.layerDefFromSubLayers = function(a) {
                    if (!a || void 0 === a.length) throw new Error("sublayers should be an array");
                    a = _.map(a, function(a) {
                        var b = a.type;
                        return delete a.type, { type: b, options: a } });
                    var b = { version: "1.3.0", stat_tag: "API", layers: a };
                    return new LayerDefinition(b, {}).toJSON() }, LayerDefinition.prototype = _.extend({}, MapBase.prototype, { setLayerDefinition: function(a, b) { b = b || {}, this.version = a.version || "1.0.0", this.stat_tag = a.stat_tag, this.layers = _.clone(a.layers), b.silent || this._definitionUpdated() }, toJSON: function() {
                        var a = {};
                        a.version = this.version, this.stat_tag && (a.stat_tag = this.stat_tag), a.layers = [];
                        for (var b = this.visibleLayers(), c = 0; c < b.length; ++c) {
                            var d = this.getSubLayer(this.getLayerNumberByIndex(c));
                            a.layers.push(d.toJSON()) }
                        return a }, removeLayer: function(a) {
                        return a < this.getLayerCount() && a >= 0 && (this.layers.splice(a, 1), this.interactionEnabled.splice(a, 1), this._reorderSubLayers(), this.invalidate()), this }, _reorderSubLayers: function() {
                        for (var a = 0; a < this.layers.length; ++a) {
                            var b = this.layers[a];
                            b.sub && b.sub._setPosition(a) } }, addLayer: function(a, b) {
                        if (b = void 0 === b ? this.getLayerCount() : b, b <= this.getLayerCount() && b >= 0) {
                            var c = a.type || "cartodb";
                            delete a.type, this.layers.splice(b, 0, { type: c, options: a });
                            var d = this.getSubLayer(b);
                            if (!d.isValid()) throw d.remove(), "Layer definition should contain all the required attributes";
                            this._definitionUpdated() }
                        return this }, setInteractivity: function(a, b) {
                        if (void 0 === b && (b = a, a = 0), a >= this.getLayerCount() && 0 > a) throw new Error("layer does not exist"); "string" == typeof b && (b = b.split(","));
                        for (var c = 0; c < b.length; ++c) b[c] = b[c].replace(/ /g, "");
                        return this.layers[a].options.interactivity = b, this._definitionUpdated(), this }, setQuery: function(a, b) { void 0 === b && (b = a, a = 0), this.layers[a].options.sql = b, this._definitionUpdated() }, getQuery: function(a) {
                        return a = a || 0, this.layers[a].options.sql }, setCartoCSS: function(a, b, c) { void 0 === c && (c = b, b = a, a = 0), c = c || cartodb.CARTOCSS_DEFAULT_VERSION, this.layers[a].options.cartocss = b, this.layers[a].options.cartocss_version = c, this._definitionUpdated() }, createSubLayer: function(a, b) {
                        return this.addLayer(a), this.getSubLayer(this.getLayerCount() - 1) } }), NamedMap.prototype = _.extend({}, MapBase.prototype, { getSubLayer: function(a) {
                        var b = this.layers[a];
                        return b || (b = this.layers[a] = { options: {} }), b.sub = b.sub || SubLayerFactory.createSublayer(b.type, this, a), b.sub }, setLayerDefinition: function(a, b) { b = b || {}, this.endPoint = MapBase.BASE_URL + "/named/" + a.name, this.JSONPendPoint = MapBase.BASE_URL + "/named/" + a.name + "/jsonp", this.layers = _.clone(a.layers) || [];
                        for (var c = 0; c < this.layers.length; ++c) {
                            var d = this.layers[c];
                            d.options = d.options || { hidden: d.visible === !1 }, d.options.layer_name = d.layer_name }
                        this.named_map = a;
                        var e = a.auth_token || b.auth_token;
                        e && this.setAuthToken(e), b.silent || this.invalidate() }, setAuthToken: function(a) {
                        if (!this.isHttps()) throw new Error("https must be used when map has token authentication");
                        return this.options.extra_params = this.options.extra_params || {}, this.options.extra_params.auth_token = a, this.invalidate(), this }, setParams: function(a, b) {
                        var c;
                        2 === arguments.length ? (c = {}, c[a] = b) : c = a, this.named_map.params || (this.named_map.params = {});
                        for (var d in c) void 0 === c[d] || null === c[d] ? delete this.named_map.params[d] : this.named_map.params[d] = c[d];
                        return this.invalidate(), this }, toJSON: function() {
                        for (var a = this.named_map.params || {}, b = 0; b < this.layers.length; ++b) {
                            var c = this.layers[b];
                            a["layer" + b] = this._isLayerVisible(c) ? 1 : 0 }
                        return a }, containInfowindow: function() {
                        for (var a = this.layers || [], b = 0; b < a.length; ++b) {
                            var c = a[b].infowindow;
                            if (c && c.fields && c.fields.length > 0) return !0 }
                        return !1 }, containTooltip: function() {
                        for (var a = this.layers || [], b = 0; b < a.length; ++b) {
                            var c = a[b].tooltip;
                            if (c) return !0 }
                        return !1 }, setSQL: function(a) {
                        throw new Error("SQL is read-only in NamedMaps") }, setCartoCSS: function(a) {
                        throw new Error("cartocss is read-only in NamedMaps") }, getCartoCSS: function() {
                        throw new Error("cartocss can't be accessed in NamedMaps") }, getSQL: function() {
                        throw new Error("SQL can't be accessed in NamedMaps") }, setLayer: function(a, b) {
                        var c = { sql: 1, cartocss: 1, interactivity: 1 };
                        for (var d in b.options)
                            if (d in c) throw delete b.options[d], new Error(d + " is read-only in NamedMaps");
                        return MapBase.prototype.setLayer.call(this, a, b) }, removeLayer: function(a) {
                        throw new Error("sublayers are read-only in Named Maps") }, createSubLayer: function(a, b) {
                        throw new Error("sublayers are read-only in Named Maps") }, addLayer: function(a, b) {
                        throw new Error("sublayers are read-only in Named Maps") }, getLayerIndexByNumber: function(a) {
                        return +a } }), CartoDBLayerCommon.prototype = { show: function() { this.setOpacity(void 0 === this.options.previous_opacity ? .99 : this.options.previous_opacity), delete this.options.previous_opacity, this._interactionDisabled = !1, this.visible = !0 }, hide: function() { void 0 == this.options.previous_opacity && (this.options.previous_opacity = this.options.opacity), this.setOpacity(0), this._interactionDisabled = !0, this.visible = !1 }, toggle: function() {
                        return this.isVisible() ? this.hide() : this.show(), this.isVisible() }, isVisible: function() {
                        return this.visible }, setInteraction: function(a, b) { void 0 == b && (b = a, a = 0);
                        var c;
                        if (this.interactionEnabled[a] = b, b) {
                            if (this.urls) {
                                var d = this.getLayerIndexByNumber(+a),
                                    e = this._tileJSONfromTiles(d, this.urls);
                                c = this.interaction[a], c && c.remove();
                                var f = this;
                                this.interaction[a] = this.interactionClass().map(this.options.map).tilejson(e).on("on", function(b) { f._interactionDisabled || (b.layer = +a, f._manageOnEvents(f.options.map, b)) }).on("off", function(b) { f._interactionDisabled || (b = b || {}, b.layer = +a, f._manageOffEvents(f.options.map, b)) }) } } else c = this.interaction[a], c && (c.remove(), this.interaction[a] = null);
                        return this }, setOptions: function(a) {
                        if ("object" != typeof a || a.length) throw new Error(a + " options must be an object");
                        _.extend(this.options, a);
                        var a = this.options;
                        this.options.query = this.options.query || "select * from " + this.options.table_name, this.options.query_wrapper && (this.options.query = _.template(this.options.query_wrapper)({ sql: this.options.query })), this.setSilent(!0), a.interaction && this.setInteraction(a.interaction), a.opacity && this.setOpacity(a.opacity), a.query && this.setQuery(a.query.replace(/\{\{table_name\}\}/g, this.options.table_name)), a.tile_style && this.setCartoCSS(a.tile_style.replace(new RegExp(a.table_name, "g"), "layer0")), a.cartocss && this.setCartoCSS(a.cartocss), a.interactivity && this.setInteractivity(a.interactivity), a.visible ? this.show() : this.hide(), this.setSilent(!1), this._definitionUpdated() }, _getLayerDefinition: function() {
                        var a, b, c, d = {},
                            e = this.options;
                        a = e.query || "select * from " + e.table_name, e.query_wrapper && (a = _.template(e.query_wrapper)({ sql: a })), b = e.tile_style, c = e.cartocss_version || "2.1.0";
                        for (var f in e.extra_params) {
                            var g = e.extra_params[f];
                            d[f] = g.replace ? g.replace(/\{\{table_name\}\}/g, e.table_name) : g }
                        return a = a.replace(/\{\{table_name\}\}/g, e.table_name), b = b.replace(/\{\{table_name\}\}/g, e.table_name), b = b.replace(new RegExp(e.table_name, "g"), "layer0"), { sql: a, cartocss: b, cartocss_version: c, params: d, interactivity: e.interactivity } }, error: function(a) {}, tilesOk: function() {}, _clearInteraction: function() {
                        for (var a in this.interactionEnabled) this.interactionEnabled.hasOwnProperty(a) && this.interactionEnabled[a] && this.setInteraction(a, !1) }, _reloadInteraction: function() {
                        for (var a in this.interactionEnabled) this.interactionEnabled.hasOwnProperty(a) && this.interactionEnabled[a] && (this.setInteraction(a, !1), this.setInteraction(a, !0)) }, _checkTiles: function() {
                        var a = { z: 4, x: 6, y: 6 },
                            b = this;
                        new Image, this._tileJSON();
                        getTiles(function(d) {
                            var e = d.tiles[0].replace(/\{z\}/g, a.z).replace(/\{x\}/g, a.x).replace(/\{y\}/g, a.y);
                            this.options.ajax({ method: "get", url: e, crossDomain: !0, success: function() { b.tilesOk(), clearTimeout(c) }, error: function(a, d, e) { clearTimeout(c), b.error(a.responseText && JSON.parse(a.responseText)) } }) });
                        var c = setTimeout(function() { clearTimeout(c), b.error("tile timeout") }, 3e4) } }, cdb.geo.common = {}, cdb.geo.common.CartoDBLogo = { isWadusAdded: function(a, b) {
                        for (var c = [], d = new RegExp("\\b" + b + "\\b"), e = a.getElementsByTagName("*"), f = 0, g = e.length; g > f; f++) d.test(e[f].className) && c.push(e[f]);
                        return c.length > 0 }, isRetinaBrowser: function() {
                        return "devicePixelRatio" in window && window.devicePixelRatio > 1 || "matchMedia" in window && window.matchMedia("(min-resolution:144dpi)") && window.matchMedia("(min-resolution:144dpi)").matches }, addWadus: function(a, b, c) {
                        var d = this;
                        setTimeout(function() {
                            if (!d.isWadusAdded(c, "cartodb-logo")) {
                                var b = document.createElement("div"),
                                    e = d.isRetinaBrowser();
                                b.setAttribute("class", "cartodb-logo"), b.setAttribute("style", "position:absolute; bottom:0; left:0; display:block; border:none; z-index:1000000;");
                                var f = -1 === location.protocol.indexOf("https") ? "http" : "https",
                                    g = cdb.config.get("cartodb_logo_link");
                                b.innerHTML = "<a href='" + g + "' target='_blank'><img width='71' height='29' src='" + f + "://cartodb.s3.amazonaws.com/static/new_logo" + (e ? "@2x" : "") + ".png' style='position:absolute; bottom:" + (a.bottom || 0) + "px; left:" + (a.left || 0) + "px; display:block; width:71px!important; height:29px!important; border:none; outline:none;' alt='CARTO' title='CARTO' />", c.appendChild(b) } }, b || 0) } }, function() {
                    var a = function(a, b, c) { this.leafletLayer = b, this.leafletMap = c, this.model = a, this.setModel(a), this.type = a.get("type") || a.get("kind"), this.type = this.type.toLowerCase() };
                    _.extend(a.prototype, Backbone.Events), _.extend(a.prototype, { setModel: function(a) { this.model && this.model.unbind("change", this._modelUpdated, this), this.model = a, this.model.bind("change", this._modelUpdated, this) }, remove: function() { this.leafletMap.removeLayer(this.leafletLayer), this.trigger("remove", this), this.model.unbind(null, null, this), this.unbind() }, reload: function() { this.leafletLayer.redraw() } }), cdb.geo.LeafLetLayerView = a }(), function() {
                    if ("undefined" != typeof L) {
                        var a = L.Class.extend({ includes: L.Mixin.Events, initialize: function(a, b) { cdb.geo.LeafLetLayerView.call(this, a, this, b) }, onAdd: function() { this.redraw() }, onRemove: function() {
                                var a = this.leafletMap.getContainer();
                                a.style.background = "none" }, _modelUpdated: function() { this.redraw() }, redraw: function() {
                                var a = this.leafletMap.getContainer();
                                if (a.style.backgroundColor = this.model.get("color") || "#FFF", this.model.get("image")) {
                                    var b = "transparent url(" + this.model.get("image") + ") repeat center center";
                                    a.style.background = b } }, setZIndex: function() {} });
                        _.extend(a.prototype, cdb.geo.LeafLetLayerView.prototype), cdb.geo.LeafLetPlainLayerView = a } }(), function() {
                    if ("undefined" != typeof L) {
                        var a = L.TileLayer.extend({ initialize: function(a, b) {
                                var c = { tms: a.get("tms"), attribution: a.get("attribution"), minZoom: a.get("minZoom"), maxZoom: a.get("maxZoom"), subdomains: a.get("subdomains") || "abc", errorTileUrl: a.get("errorTileUrl"), opacity: a.get("opacity") };
                                a.get("tileSize") && (c.tileSize = a.get("tileSize")), a.get("zoomOffset") && (c.zoomOffset = a.get("zoomOffset")), L.TileLayer.prototype.initialize.call(this, a.get("urlTemplate"), c), cdb.geo.LeafLetLayerView.call(this, a, this, b) } });
                        _.extend(a.prototype, cdb.geo.LeafLetLayerView.prototype, { _modelUpdated: function() { _.defaults(this.leafletLayer.options, _.clone(this.model.attributes)), this.leafletLayer.options.subdomains = this.model.get("subdomains") || "abc", this.leafletLayer.options.attribution = this.model.get("attribution"), this.leafletLayer.options.maxZoom = this.model.get("maxZoom"), this.leafletLayer.options.minZoom = this.model.get("minZoom"), this.leafletLayer.setUrl(this.model.get("urlTemplate")) } }), cdb.geo.LeafLetTiledLayerView = a } }(), function() {
                    if ("undefined" != typeof L) {
                        var a = function(a) {
                                return { url: "http://{s}.basemaps.cartocdn.com/" + a + "_all/{z}/{x}/{y}.png", subdomains: "abcd", minZoom: 0, maxZoom: 18, attribution: 'Map designs by <a href="http://stamen.com/">Stamen</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, Provided by <a href="https://carto.com">CARTO</a>' } },
                            b = function(a) {
                                return { url: "https://{s}.maps.nlp.nokia.com/maptile/2.1/maptile/newest/" + a + ".day/{z}/{x}/{y}/256/png8?lg=eng&token=A7tBPacePg9Mj_zghvKt9Q&app_id=KuYppsdXZznpffJsKT24", subdomains: "1234", minZoom: 0, maxZoom: 21, attribution: 'Â©2012 Nokia <a href="http://here.net/services/terms" target="_blank">Terms of use</a>' } },
                            c = { roadmap: b("normal"), gray_roadmap: a("light"), dark_roadmap: a("dark"), hybrid: b("hybrid"), terrain: b("terrain"), satellite: b("satellite") },
                            d = L.TileLayer.extend({ initialize: function(a, b) {
                                    var d = c[a.get("base_type")];
                                    L.TileLayer.prototype.initialize.call(this, d.url, { tms: !1, attribution: d.attribution, minZoom: d.minZoom, maxZoom: d.maxZoom, subdomains: d.subdomains, errorTileUrl: "", opacity: 1 }), cdb.geo.LeafLetLayerView.call(this, a, this, b) } });
                        _.extend(d.prototype, cdb.geo.LeafLetLayerView.prototype, { _modelUpdated: function() {} }), cdb.geo.LeafLetGmapsTiledLayerView = d } }(), function() {
                    if ("undefined" != typeof L) {
                        var a = L.TileLayer.WMS.extend({ initialize: function(a, b) {
                                var c = { attribution: a.get("attribution"), layers: a.get("layers"), format: a.get("format"), transparent: a.get("transparent"), minZoom: a.get("minZomm"), maxZoom: a.get("maxZoom"), subdomains: a.get("subdomains") || "abc", errorTileUrl: a.get("errorTileUrl"), opacity: a.get("opacity") };
                                a.get("tileSize") && (c.tileSize = a.get("tileSize")), a.get("zoomOffset") && (c.zoomOffset = a.get("zoomOffset")), L.TileLayer.WMS.prototype.initialize.call(this, a.get("urlTemplate"), c), cdb.geo.LeafLetLayerView.call(this, a, this, b) } });
                        _.extend(a.prototype, cdb.geo.LeafLetLayerView.prototype, { _modelUpdated: function() { _.defaults(this.leafletLayer.options, _.clone(this.model.attributes)), this.leafletLayer.setUrl(this.model.get("urlTemplate")) } }), cdb.geo.LeafLetWMSLayerView = a } }(), function() {
                    function a(a) {
                        var b = a.extend({ includes: [cdb.geo.LeafLetLayerView.prototype, Backbone.Events], initialize: function(b, c) {
                                var d = this,
                                    e = [],
                                    f = _.clone(b.attributes);
                                f.map = c;
                                var g, h = f.featureOver,
                                    i = f.featureOut,
                                    j = f.featureClick,
                                    k = -1;
                                f.featureOver = function(a, b, c, f, i) { e[i] || d.trigger("layerenter", a, b, c, f, i), e[i] = 1, h && h.apply(this, arguments), d.featureOver && d.featureOver.apply(d, arguments), a.timeStamp === g && clearTimeout(k), k = setTimeout(function() { d.trigger("mouseover", a, b, c, f, i), d.trigger("layermouseover", a, b, c, f, i) }, 0), g = a.timeStamp }, f.featureOut = function(a, b) { e[b] && d.trigger("layermouseout", b), e[b] = 0, _.any(e) || d.trigger("mouseout"), i && i.apply(this, arguments), d.featureOut && d.featureOut.apply(d, arguments) }, f.featureClick = _.debounce(function() { j && j.apply(d, arguments), d.featureClick && d.featureClick.apply(d, arguments) }, 10), a.prototype.initialize.call(this, f), cdb.geo.LeafLetLayerView.call(this, b, this, c) }, featureOver: function(a, b, c, d, e) { this.trigger("featureOver", a, [b.lat, b.lng], c, d, e) }, featureOut: function(a, b) { this.trigger("featureOut", a, b) }, featureClick: function(a, b, c, d, e) { this.trigger("featureClick", a, [b.lat, b.lng], c, d, e) }, error: function(a) { this.trigger("error", a ? a.errors || a : "unknown error"), this.model.trigger("error", a ? a.errors : "unknown error") }, ok: function(a) { this.model.trigger("tileOk") }, onLayerDefinitionUpdated: function() { this.__update() } });
                        return b } "undefined" != typeof L && (L.CartoDBGroupLayerBase = L.TileLayer.extend({ interactionClass: wax.leaf.interaction, includes: [cdb.geo.LeafLetLayerView.prototype, CartoDBLayerCommon.prototype], options: { opacity: .99, attribution: cdb.config.get("cartodb_attributions"), debug: !1, visible: !0, added: !1, tiler_domain: "carto.com", tiler_port: "80", tiler_protocol: "http", sql_api_domain: "carto.com", sql_api_port: "80", sql_api_protocol: "http", maxZoom: 30, extra_params: {}, cdn_url: null, subdomains: null }, initialize: function(a) {
                            if (a = a || {}, L.Util.setOptions(this, a), !a.layer_definition && !a.sublayers) throw new Error("cartodb-leaflet needs at least the layer_definition or sublayer list");
                            a.layer_definition || (this.options.layer_definition = LayerDefinition.layerDefFromSubLayers(a.sublayers)), LayerDefinition.call(this, this.options.layer_definition, this.options), this.fire = this.trigger, CartoDBLayerCommon.call(this), L.TileLayer.prototype.initialize.call(this), this.interaction = [], this.addProfiling() }, addProfiling: function() { this.bind("tileloadstart", function(a) {
                                var b = this.tileStats || (this.tileStats = {});
                                b[a.tile.src] = cartodb.core.Profiler.metric("cartodb-js.tile.png.load.time").start() });
                            var a = function(a) {
                                var b = this.tileStats && this.tileStats[a.tile.src];
                                b && b.end() };
                            this.bind("tileload", a), this.bind("tileerror", function(b) { cartodb.core.Profiler.metric("cartodb-js.tile.png.error").inc(), a(b) }) }, getTileUrl: function(a) {
                            var b = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
                            this._adjustTilePoint(a);
                            var c = [b];
                            this.tilejson && (c = this.tilejson.tiles);
                            var d = (a.x + a.y) % c.length;
                            return L.Util.template(c[d], L.Util.extend({ z: this._getZoomForUrl(), x: a.x, y: a.y }, this.options)) }, setOpacity: function(a) {
                            if (isNaN(a) || a > 1 || 0 > a) throw new Error(a + " is not a valid value");
                            this.options.opacity = Math.min(a, .99), this.options.visible && (L.TileLayer.prototype.setOpacity.call(this, this.options.opacity), this.fire("updated")) }, onAdd: function(a) {
                            var b = this;
                            this.options.map = a, 0 != this.options.cartodb_logo && cdb.geo.common.CartoDBLogo.addWadus({ left: 8, bottom: 8 }, 0, a._container), this.__update(function() {
                                var c = L.stamp(b);
                                a._layers[c] && (L.TileLayer.prototype.onAdd.call(b, a), b.fire("added"), b.options.added = !0) }) }, getAttribution: function() {
                            return cdb.core.sanitize.html(this.options.attribution) }, onRemove: function(a) { this.options.added && (this.options.added = !1, L.TileLayer.prototype.onRemove.call(this, a)) }, __update: function(a) {
                            var b = this;
                            this.fire("updated"), this.fire("loading");
                            this.options.map;
                            this.getTiles(function(c, d) { c ? (b.tilejson = c, b.setUrl(b.tilejson.tiles[0]), b._reloadInteraction(), b.ok && b.ok(), a && a()) : (b.error && b.error(d), a && a()) }) }, _checkLayer: function() {
                            if (!this.options.added) throw new Error("the layer is not still added to the map") }, setAttribution: function(a) { this._checkLayer(), this.map.attributionControl.removeAttribution(cdb.core.sanitize.html(this.options.attribution)), this.map.attributionControl.addAttribution(cdb.core.sanitize.html(a)), this.options.attribution = a, this.tilejson.attribution = this.options.attribution, this.fire("updated") }, _manageOnEvents: function(a, b) {
                            var c = this._findPos(a, b);
                            if (!c || isNaN(c.x) || isNaN(c.y)) return !1;
                            var d = a.layerPointToLatLng(c),
                                e = b.e.type.toLowerCase(),
                                f = a.layerPointToContainerPoint(c);
                            switch (e) {
                                case "mousemove":
                                    if (this.options.featureOver) return this.options.featureOver(b.e, d, f, b.data, b.layer);
                                    break;
                                case "click":
                                case "touchend":
                                case "touchmove":
                                case "mspointerup":
                                case "pointerup":
                                case "pointermove":
                                    this.options.featureClick && this.options.featureClick(b.e, d, f, b.data, b.layer) } }, _manageOffEvents: function(a, b) {
                            return this.options.featureOut ? this.options.featureOut && this.options.featureOut(b.e, b.layer) : void 0 }, _findPos: function(a, b) {
                            var c, d, e = 0,
                                f = 0,
                                g = a.getContainer();
                            if (b.e.changedTouches && b.e.changedTouches.length > 0 ? (c = b.e.changedTouches[0].clientX + window.scrollX, d = b.e.changedTouches[0].clientY + window.scrollY) : (c = b.e.clientX, d = b.e.clientY), g.offsetParent && g.offsetTop > 0) { do e += g.offsetLeft, f += g.offsetTop; while (g = g.offsetParent);
                                var h = this._newPoint(c - e, d - f) } else var i = g.getBoundingClientRect(),
                                j = window.scrollX || window.pageXOffset,
                                k = window.scrollY || window.pageYOffset,
                                h = this._newPoint((b.e.clientX ? b.e.clientX : c) - i.left - g.clientLeft - j, (b.e.clientY ? b.e.clientY : d) - i.top - g.clientTop - k);
                            return a.containerPointToLayerPoint(h) }, _newPoint: function(a, b) {
                            return new L.Point(a, b) } }), L.CartoDBGroupLayer = L.CartoDBGroupLayerBase.extend({ includes: [LayerDefinition.prototype], _modelUpdated: function() { this.setLayerDefinition(this.model.get("layer_definition")) } }), L.NamedMap = L.CartoDBGroupLayerBase.extend({ includes: [cdb.geo.LeafLetLayerView.prototype, NamedMap.prototype, CartoDBLayerCommon.prototype], initialize: function(a) {
                            if (a = a || {}, L.Util.setOptions(this, a), !a.named_map && !a.sublayers) throw new Error("cartodb-leaflet needs at least the named_map");
                            NamedMap.call(this, this.options.named_map, this.options), this.fire = this.trigger, CartoDBLayerCommon.call(this), L.TileLayer.prototype.initialize.call(this), this.interaction = [], this.addProfiling() }, _modelUpdated: function() { this.setLayerDefinition(this.model.get("named_map")) } }), cdb.geo.LeafLetCartoDBLayerGroupView = a(L.CartoDBGroupLayer), cdb.geo.LeafLetCartoDBNamedMapView = a(L.NamedMap)) }(), function() {
                    if ("undefined" != typeof L) { L.CartoDBLayer = L.CartoDBGroupLayer.extend({ options: { query: "SELECT * FROM {{table_name}}", opacity: .99, attribution: cdb.config.get("cartodb_attributions"), debug: !1, visible: !0, added: !1, extra_params: {}, layer_definition_version: "1.0.0" }, initialize: function(a) {
                                if (L.Util.setOptions(this, a), !a.table_name || !a.user_name || !a.tile_style) throw "cartodb-leaflet needs at least a CartoDB table name, user_name and tile_style";
                                L.CartoDBGroupLayer.prototype.initialize.call(this, { layer_definition: { version: this.options.layer_definition_version, layers: [{ type: "cartodb", options: this._getLayerDefinition(), infowindow: this.options.infowindow }] } }), this.setOptions(this.options) }, setQuery: function(a, b) { void 0 === b && (b = a, a = 0), b = b || "select * from " + this.options.table_name, LayerDefinition.prototype.setQuery.call(this, a, b) }, isVisible: function() {
                                return this.visible }, isAdded: function() {
                                return this.options.added } });
                        var a = L.CartoDBLayer.extend({ initialize: function(a, b) {
                                var c = this;
                                _.bindAll(this, "featureOut", "featureOver", "featureClick");
                                var d = _.clone(a.attributes);
                                d.map = b;
                                var e = d.featureOver,
                                    f = d.featureOut,
                                    g = d.featureClick;
                                d.featureOver = function() { e && e.apply(this, arguments), c.featureOver && c.featureOver.apply(this, arguments) }, d.featureOut = function() { f && f.apply(this, arguments), c.featureOut && c.featureOut.apply(this, arguments) }, d.featureClick = function() { g && g.apply(this, arguments), c.featureClick && c.featureClick.apply(d, arguments) }, a.bind("change:visible", function() { c.model.get("visible") ? c.show() : c.hide() }, this), L.CartoDBLayer.prototype.initialize.call(this, d), cdb.geo.LeafLetLayerView.call(this, a, this, b) }, _modelUpdated: function() {
                                var a = _.clone(this.model.attributes);
                                this.leafletLayer.setOptions(a) }, featureOver: function(a, b, c, d) { this.trigger("featureOver", a, [b.lat, b.lng], c, d, 0) }, featureOut: function(a) { this.trigger("featureOut", a, 0) }, featureClick: function(a, b, c, d) { this.trigger("featureClick", a, [b.lat, b.lng], c, d, 0) }, reload: function() { this.model.invalidate() }, error: function(a) { this.trigger("error", a ? a.error : "unknown error"), this.model.trigger("tileError", a ? a.error : "unknown error") }, tilesOk: function(a) { this.model.trigger("tileOk") }, includes: [cdb.geo.LeafLetLayerView.prototype, Backbone.Events] });
                        cdb.geo.LeafLetLayerCartoDBView = a } }(), function() {
                    function a(a) {
                        var b = this,
                            c = ["click", "dblclick", "mousedown", "mouseover", "mouseout", "dragstart", "drag", "dragend"];
                        this._eventHandlers = {}, this.model = a, this.points = [];
                        var d = { iconUrl: this.model.get("iconUrl") || cdb.config.get("assets_url") + "/images/layout/default_marker.png", iconAnchor: this.model.get("iconAnchor") || [11, 11] };
                        this.geom = L.GeoJSON.geometryToLayer(a.get("geojson"), function(a, e) {
                            var f, g = L.marker(e, { icon: L.icon(d) });
                            for (f = 0; f < c.length; ++f) {
                                var h = c[f];
                                g.on(h, b._eventHandler(h)) }
                            return g }), this.bind("dragend", function(b, c) { a.set({ geojson: { type: "Point", coordinates: [c[1], c[0]] } }) }) }

                    function b(a) { this._eventHandlers = {}, this.model = a, this.points = [], this.geom = L.GeoJSON.geometryToLayer(a.get("geojson")), this.geom.setStyle(a.get("style")) }
                    a.prototype = new GeometryView, a.prototype.edit = function() { this.geom.dragging.enable() }, a.prototype._eventHandler = function(a) {
                        var b = this,
                            c = this._eventHandlers[a];
                        return c || (c = function(c) {
                            var d = c.target.getLatLng(),
                                e = [d.lat, d.lng];
                            b.trigger(a, c.originalEvent, e) }, this._eventHandlers[a] = c), c }, b.prototype = new GeometryView, b.prototype._leafletLayers = function() {
                        return this.geom.getLayers ? this.geom.getLayers() : [this.geom] }, b.prototype.enableEdit = function() {
                        var a = this,
                            b = this._leafletLayers();
                        _.each(b, function(b) { b.setStyle(a.model.get("style")), b.on("edit", function() { a.model.set("geojson", a.geom.toGeoJSON().geometry) }, a) }) }, b.prototype.disableEdit = function() {
                        var a = this,
                            b = this._leafletLayers();
                        _.each(b, function(b) { b.off("edit", null, a) }) }, b.prototype.edit = function(a) {
                        var b = this,
                            c = a ? "enable" : "disable",
                            d = this._leafletLayers();
                        _.each(d, function(d) { d.editing[c](), a ? b.enableEdit() : b.disableEdit() }) }, cdb.geo.leaflet = cdb.geo.leaflet || {}, cdb.geo.leaflet.PointView = a, cdb.geo.leaflet.PathView = b }(), function() {
                    "undefined" != typeof L && (cdb.geo.LeafletMapView = cdb.geo.MapView.extend({
                        initialize: function() {
                            _.bindAll(this, "_addLayer", "_removeLayer", "_setZoom", "_setCenter", "_setView"), cdb.geo.MapView.prototype.initialize.call(this);
                            var a = this,
                                b = this.map.get("center"),
                                c = { zoomControl: !1, center: new L.LatLng(b[0], b[1]), zoom: this.map.get("zoom"), minZoom: this.map.get("minZoom"), maxZoom: this.map.get("maxZoom") };
                            if (this.map.get("bounding_box_ne"), this.options.map_object) { this.map_leaflet = this.options.map_object, this.setElement(this.map_leaflet.getContainer());
                                var d = a.map_leaflet.getCenter();
                                a._setModelProperty({ center: [d.lat, d.lng] }), a._setModelProperty({ zoom: a.map_leaflet.getZoom() }), a.map.unset("view_bounds_sw", { silent: !0 }), a.map.unset("view_bounds_ne", { silent: !0 }) } else this.map_leaflet = new L.Map(this.el, c), this.map_leaflet.attributionControl.setPrefix(""), 0 == this.map.get("scrollwheel") && this.map_leaflet.scrollWheelZoom.disable(), 0 == this.map.get("keyboard") && this.map_leaflet.keyboard.disable(), 0 == this.map.get("drag") && (this.map_leaflet.dragging.disable(), this.map_leaflet.doubleClickZoom.disable());
                            this.map.bind("set_view", this._setView, this), this.map.layers.bind("add", this._addLayer, this), this.map.layers.bind("remove", this._removeLayer, this), this.map.layers.bind("reset", this._addLayers, this), this.map.layers.bind("change:type", this._swicthLayerView, this), this.map.geometries.bind("add", this._addGeometry, this), this.map.geometries.bind("remove", this._removeGeometry, this), this._bindModel(),
                                this._addLayers(), this.setAttribution(), this.map_leaflet.on("layeradd", function(b) { this.trigger("layeradd", b, a) }, this), this.map_leaflet.on("zoomstart", function() { a.trigger("zoomstart") }), this.map_leaflet.on("click", function(b) { a.trigger("click", b.originalEvent, [b.latlng.lat, b.latlng.lng]) }), this.map_leaflet.on("dblclick", function(b) { a.trigger("dblclick", b.originalEvent) }), this.map_leaflet.on("zoomend", function() { a._setModelProperty({ zoom: a.map_leaflet.getZoom() }), a.trigger("zoomend") }, this), this.map_leaflet.on("move", function() {
                                    var b = a.map_leaflet.getCenter();
                                    a._setModelProperty({ center: [b.lat, b.lng] }) }), this.map_leaflet.on("dragend", function() {
                                    var b = a.map_leaflet.getCenter();
                                    this.trigger("dragend", [b.lat, b.lng]) }, this), this.map_leaflet.on("drag", function() {
                                    var b = a.map_leaflet.getCenter();
                                    a._setModelProperty({ center: [b.lat, b.lng] }), a.trigger("drag") }, this), this.map.bind("change:maxZoom", function() { L.Util.setOptions(a.map_leaflet, { maxZoom: a.map.get("maxZoom") }) }, this), this.map.bind("change:minZoom", function() { L.Util.setOptions(a.map_leaflet, { minZoom: a.map.get("minZoom") }) }, this), this.trigger("ready");
                            var e = this.map.getViewBounds();
                            e && this.showBounds(e)
                        },
                        _addLayers: function() {
                            function a(a) {
                                var b = _.find(d, function(b) {
                                    var c = b.model;
                                    return c.isEqual(a) });
                                return b }

                            function b(a) {
                                return c.map.layers.find(function(b) {
                                    return b.isEqual(a) }) }
                            var c = this,
                                d = this.layers;
                            this.layers = {};
                            for (var e in d) {
                                var f = d[e];
                                b(f.model) || f.remove() }
                            this.map.layers.each(function(b) {
                                var d = a(b);
                                d ? (d.setModel(b), c.layers[b.cid] = d, c.trigger("newLayerView", d, d.model, c)) : c._addLayer(b) }) },
                        clean: function() { L.DomEvent.off(window, "resize", this.map_leaflet._onResize, this.map_leaflet);
                            for (var a in this.layers) {
                                var b = this.layers[a];
                                b.remove(), delete this.layers[a] }
                            cdb.core.View.prototype.clean.call(this) },
                        _setKeyboard: function(a, b) { b ? this.map_leaflet.keyboard.enable() : this.map_leaflet.keyboard.disable() },
                        _setScrollWheel: function(a, b) { b ? this.map_leaflet.scrollWheelZoom.enable() : this.map_leaflet.scrollWheelZoom.disable() },
                        _setZoom: function(a, b) { this._setView() },
                        _setCenter: function(a, b) { this._setView() },
                        _setView: function() { this.map_leaflet.setView(this.map.get("center"), this.map.get("zoom") || 0) },
                        _addGeomToMap: function(a) {
                            var b = cdb.geo.LeafletMapView.createGeometry(a);
                            return b.geom.addTo(this.map_leaflet), b },
                        _removeGeomFromMap: function(a) { this.map_leaflet.removeLayer(a.geom) },
                        createLayer: function(a) {
                            return cdb.geo.LeafletMapView.createLayer(a, this.map_leaflet) },
                        _addLayer: function(a, b, c) {
                            var d;
                            return (d = cdb.geo.LeafletMapView.createLayer(a, this.map_leaflet)) ? this._addLayerToMap(d, c) : void 0 },
                        _addLayerToMap: function(a, b) {
                            var c = a.model;
                            this.layers[c.cid] = a, cdb.geo.LeafletMapView.addLayerToMap(a, this.map_leaflet);
                            for (var d in this.layers) {
                                var e = this.layers[d];
                                e.setZIndex(e.model.get("order")) }
                            return void 0 !== b && b.silent || this.trigger("newLayerView", a, a.model, this), a },
                        pixelToLatLon: function(a) {
                            var b = this.map_leaflet.containerPointToLatLng([a[0], a[1]]);
                            return b },
                        latLonToPixel: function(a) {
                            var b = this.map_leaflet.latLngToLayerPoint(new L.LatLng(a[0], a[1]));
                            return this.map_leaflet.layerPointToContainerPoint(b) },
                        getBounds: function() {
                            var a = this.map_leaflet.getBounds(),
                                b = a.getSouthWest(),
                                c = a.getNorthEast();
                            return [
                                [b.lat, b.lng],
                                [c.lat, c.lng]
                            ] },
                        setAttribution: function() {
                            var a = this._getAttributionControl();
                            this._originalAttributions || (this._originalAttributions = Object.keys(a._attributions)), a._attributions = {};
                            var b = this._originalAttributions.concat(this.map.get("attribution"));
                            _.each(b, function(b) { a.addAttribution(cdb.core.sanitize.html(b)) }) },
                        _getAttributionControl: function() {
                            return this._attributionControl ? this._attributionControl : (this._attributionControl = this.map_leaflet.attributionControl, this._attributionControl || (this._attributionControl = L.control.attribution({ prefix: "" }), this.map_leaflet.addControl(this._attributionControl)), this._attributionControl) },
                        getSize: function() {
                            return this.map_leaflet.getSize() },
                        panBy: function(a) { this.map_leaflet.panBy(new L.Point(a.x, a.y)) },
                        setCursor: function(a) { $(this.map_leaflet.getContainer()).css("cursor", a) },
                        getNativeMap: function() {
                            return this.map_leaflet },
                        invalidateSize: function() { this.map_leaflet.invalidateSize({ pan: !1 }), this.map_leaflet.setView(this.map.get("center"), this.map.get("zoom") || 0, { animate: !1 }) }
                    }, { layerTypeMap: { tiled: cdb.geo.LeafLetTiledLayerView, wms: cdb.geo.LeafLetWMSLayerView, cartodb: cdb.geo.LeafLetLayerCartoDBView, carto: cdb.geo.LeafLetLayerCartoDBView, plain: cdb.geo.LeafLetPlainLayerView, gmapsbase: cdb.geo.LeafLetGmapsTiledLayerView, layergroup: cdb.geo.LeafLetCartoDBLayerGroupView, namedmap: cdb.geo.LeafLetCartoDBNamedMapView, torque: function(a, b) {
                                return new cdb.geo.LeafLetTorqueLayer(a, b) } }, createLayer: function(a, b) {
                            var c = null,
                                d = this.layerTypeMap[a.get("type").toLowerCase()];
                            if (d) try { c = new d(a, b) } catch (e) { cdb.log.error("MAP: error creating '" + a.get("type") + "' layer -> " + e.message) } else cdb.log.error("MAP: " + a.get("type") + " can't be created");
                            return c }, addLayerToMap: function(a, b, c) { b.addLayer(a.leafletLayer), void 0 !== c && a.setZIndex && a.setZIndex(c) }, createGeometry: function(a) {
                            return a.isPoint() ? new cdb.geo.leaflet.PointView(a) : new cdb.geo.leaflet.PathView(a) } }), L.Icon.Default.imagePath = function() {
                        var a, b, c, d, e = document.getElementsByTagName("script"),
                            f = /\/?cartodb[\-\._]?([\w\-\._]*)\.js\??/;
                        for (a = 0, b = e.length; b > a; a++)
                            if (c = e[a].src, d = c.match(f)) {
                                var g = c.split("/");
                                return delete g[g.length - 1], g.join("/") + "themes/css/images" } }())
                }(), function() {
                    if ("undefined" != typeof google && "undefined" != typeof google.maps) {
                        var a = function(a, b, c) { this.gmapsLayer = b, this.map = this.gmapsMap = c, this.model = a, this.model.bind("change", this._update, this), this.type = a.get("type") || a.get("kind"), this.type = this.type.toLowerCase() };
                        _.extend(a.prototype, Backbone.Events), _.extend(a.prototype, { _searchLayerIndex: function() {
                                var a = this,
                                    b = -1;
                                return this.gmapsMap.overlayMapTypes.forEach(function(c, d) { c == a && (b = d) }), b }, remove: function() {
                                if (!this.isBase) {
                                    var a = this._searchLayerIndex();
                                    a >= 0 ? this.gmapsMap.overlayMapTypes.removeAt(a) : this.gmapsLayer.setMap && this.gmapsLayer.setMap(null), this.model.unbind(null, null, this), this.unbind() } }, refreshView: function() {
                                if (this.isBase) {
                                    var a = "_baseLayer";
                                    this.gmapsMap.setMapTypeId(null), this.gmapsMap.mapTypes.set(a, this.gmapsLayer), this.gmapsMap.setMapTypeId(a) } else {
                                    var b = this._searchLayerIndex();
                                    b >= 0 && this.gmapsMap.overlayMapTypes.setAt(b, this) } }, reload: function() { this.refreshView() }, _update: function() { this.refreshView() } }), cdb.geo.GMapsLayerView = a } }(), function() {
                    if ("undefined" != typeof google && "undefined" != typeof google.maps) {
                        var a = function(a, b) { cdb.geo.GMapsLayerView.call(this, a, null, b) };
                        _.extend(a.prototype, cdb.geo.GMapsLayerView.prototype, { _update: function() {
                                var a = this.model,
                                    b = { roadmap: google.maps.MapTypeId.ROADMAP, gray_roadmap: google.maps.MapTypeId.ROADMAP, dark_roadmap: google.maps.MapTypeId.ROADMAP, hybrid: google.maps.MapTypeId.HYBRID, satellite: google.maps.MapTypeId.SATELLITE, terrain: google.maps.MapTypeId.TERRAIN };
                                this.gmapsMap.setOptions({ mapTypeId: b[a.get("base_type")] }), this.gmapsMap.setOptions({ styles: a.get("style") || DEFAULT_MAP_STYLE }) }, remove: function() {} }), cdb.geo.GMapsBaseLayerView = a } }(), function() {
                    if ("undefined" != typeof google && "undefined" != typeof google.maps) {
                        var a = function(a, b) { this.color = a.get("color"), cdb.geo.GMapsLayerView.call(this, a, this, b) };
                        _.extend(a.prototype, cdb.geo.GMapsLayerView.prototype, { _update: function() { this.color = this.model.get("color"), this.refreshView() }, getTile: function(a, b, c) {
                                var d = document.createElement("div");
                                return d.style.width = this.tileSize.x, d.style.height = this.tileSize.y, d["background-color"] = this.color, d }, tileSize: new google.maps.Size(256, 256), maxZoom: 100, minZoom: 0, name: "plain layer", alt: "plain layer" }), cdb.geo.GMapsPlainLayerView = a } }(), function() {
                    if ("undefined" != typeof google && "undefined" != typeof google.maps) {
                        var a = function(a, b) { cdb.geo.GMapsLayerView.call(this, a, this, b), this.tileSize = new google.maps.Size(256, 256), this.opacity = 1, this.isPng = !0, this.maxZoom = 22, this.minZoom = 0, this.name = "cartodb tiled layer", google.maps.ImageMapType.call(this, this) };
                        _.extend(a.prototype, cdb.geo.GMapsLayerView.prototype, google.maps.ImageMapType.prototype, { getTileUrl: function(a, b) {
                                var c = a.y,
                                    d = 1 << b;
                                if (0 > c || c >= d) return null;
                                var e = a.x;
                                (0 > e || e >= d) && (e = (e % d + d) % d), this.model.get("tms") && (c = d - c - 1);
                                var f = this.model.get("urlTemplate");
                                return f.replace("{x}", e).replace("{y}", c).replace("{z}", b) } }), cdb.geo.GMapsTiledLayerView = a } }(), function() {
                    function a(a, b) {
                        var c = Math.round(100 * b);
                        c >= 99 ? a.style.filter = f : a.style.filter = "alpha(opacity=" + b + ");" }

                    function b() {}

                    function c(a) {
                        var b = function(b, c) {
                            var d = this,
                                e = [];
                            _.bindAll(this, "featureOut", "featureOver", "featureClick");
                            var f = _.clone(b.attributes);
                            f.map = c;
                            var g, h = f.featureOver,
                                i = f.featureOut,
                                j = f.featureClick,
                                k = -1;
                            f.featureOver = function(a, b, c, f, i) { e[i] || d.trigger("layerenter", a, b, c, f, i), e[i] = 1, h && h.apply(this, arguments), d.featureOver && d.featureOver.apply(this, arguments), a.timeStamp === g && clearTimeout(k), k = setTimeout(function() { d.trigger("mouseover", a, b, c, f, i), d.trigger("layermouseover", a, b, c, f, i) }, 0), g = a.timeStamp }, f.featureOut = function(a, b) { e[b] && d.trigger("layermouseout", b), e[b] = 0, _.any(e) || d.trigger("mouseout"), i && i.apply(this, arguments), d.featureOut && d.featureOut.apply(this, arguments) }, f.featureClick = _.debounce(function() { j && j.apply(this, arguments), d.featureClick && d.featureClick.apply(f, arguments) }, 10), a.call(this, f), cdb.geo.GMapsLayerView.call(this, b, this, c) };
                        return _.extend(b.prototype, cdb.geo.GMapsLayerView.prototype, a.prototype, { _update: function() { this.setOptions(this.model.attributes) }, reload: function() { this.model.invalidate() }, remove: function() { cdb.geo.GMapsLayerView.prototype.remove.call(this), this.clear() }, featureOver: function(a, b, c, d, e) { this.trigger("featureOver", a, [b.lat(), b.lng()], c, d, e) }, featureOut: function(a, b) { this.trigger("featureOut", a, b) }, featureClick: function(a, b, c, d, e) { this.trigger("featureClick", a, [b.lat(), b.lng()], c, d, e) }, error: function(a) { this.model && (this.model.trigger("error", a ? a.errors : "unknown error"), this.model.trigger("tileError", a ? a.errors : "unknown error")) }, ok: function(a) { this.model.trigger("tileOk") }, tilesOk: function(a) { this.model.trigger("tileOk") }, loading: function() { this.trigger("loading") }, finishLoading: function() { this.trigger("load") } }), b }
                    if ("undefined" != typeof google && "undefined" != typeof google.maps) {
                        var d = function(a) { this.setMap(a) };
                        d.prototype = new google.maps.OverlayView, d.prototype.draw = function() {}, d.prototype.latLngToPixel = function(a) {
                            var b = this.getProjection();
                            return b ? b.fromLatLngToContainerPixel(a) : [0, 0] }, d.prototype.pixelToLatLng = function(a) {
                            var b = this.getProjection();
                            return b ? b.fromContainerPixelToLatLng(a) : [0, 0] };
                        var e = { opacity: .99, attribution: cdb.config.get("cartodb_attributions"), debug: !1, visible: !0, added: !1, tiler_domain: "carto.com", tiler_port: "80", tiler_protocol: "http", sql_api_domain: "carto.com", sql_api_port: "80", sql_api_protocol: "http", extra_params: {}, cdn_url: null, subdomains: null },
                            f = "progid:DXImageTransform.Microsoft.gradient(startColorstr=#00FFFFFF,endColorstr=#00FFFFFF)",
                            g = function(a) {
                                if (this.options = _.defaults(a, e), this.tiles = 0, this.tilejson = null, this.interaction = [], !a.named_map && !a.sublayers) throw new Error("cartodb-gmaps needs at least the named_map");
                                0 != this.options.cartodb_logo && cdb.geo.common.CartoDBLogo.addWadus({ left: 74, bottom: 8 }, 2e3, this.options.map.getDiv()), wax.g.connector.call(this, a), _.extend(this.options, a), this.projector = new d(a.map), NamedMap.call(this, this.options.named_map, this.options), CartoDBLayerCommon.call(this), this.update() },
                            h = function(a) {
                                if (this.options = _.defaults(a, e), this.tiles = 0, this.tilejson = null, this.interaction = [], !a.layer_definition && !a.sublayers) throw new Error("cartodb-leaflet needs at least the layer_definition or sublayer list");
                                a.layer_definition || (a.layer_definition = LayerDefinition.layerDefFromSubLayers(a.sublayers)), 0 != this.options.cartodb_logo && cdb.geo.common.CartoDBLogo.addWadus({ left: 74, bottom: 8 }, 2e3, this.options.map.getDiv()), wax.g.connector.call(this, a), _.extend(this.options, a), this.projector = new d(a.map), LayerDefinition.call(this, a.layer_definition, this.options), CartoDBLayerCommon.call(this), this.update() };
                        b.prototype.setOpacity = function(b) {
                            if (isNaN(b) || b > 1 || 0 > b) throw new Error(b + " is not a valid value, should be in [0, 1] range");
                            this.opacity = this.options.opacity = b;
                            for (var c in this.cache) {
                                var d = this.cache[c];
                                d.style.opacity = b, a(d, b) } }, b.prototype.setAttribution = function() {}, b.prototype.getTile = function(b, c, d) {
                            var e = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                                f = this,
                                g = "ActiveXObject" in window,
                                h = g && !document.addEventListener;
                            if (this.options.added = !0, null === this.tilejson) {
                                var i = c + "/" + b.x + "/" + b.y,
                                    j = this.cache[i] = new Image(256, 256);
                                return j.src = e, j.setAttribute("gTileKey", i), j.style.opacity = this.options.opacity, j }
                            var k = wax.g.connector.prototype.getTile.call(this, b, c, d);
                            h && a(k, this.options.opacity), k.style.opacity = this.options.opacity, 0 === this.tiles && this.loading && this.loading(), this.tiles++;
                            var l = cartodb.core.Profiler.metric("cartodb-js.tile.png.load.time").start(),
                                m = function() { l.end(), f.tiles--, 0 === f.tiles && f.finishLoading && f.finishLoading() };
                            return k.onload = m, k.onerror = function() { cartodb.core.Profiler.metric("cartodb-js.tile.png.error").inc(), m() }, k }, b.prototype.onAdd = function() {}, b.prototype.clear = function() { this._clearInteraction(), self.finishLoading && self.finishLoading() }, b.prototype.update = function(a) {
                            var b = this;
                            this.loading && this.loading(), this.getTiles(function(c, d) { c ? (b.tilejson = c, b.options.tiles = c.tiles, b.tiles = 0, b.cache = {}, b._reloadInteraction(), b.refreshView(), b.ok && b.ok(), a && a()) : b.error && b.error(d) }) }, b.prototype.refreshView = function() {
                            var a = this,
                                b = this.options.map;
                            b.overlayMapTypes.forEach(function(c, d) {
                                return c == a ? void b.overlayMapTypes.setAt(d, a) : void 0 }) }, b.prototype.onLayerDefinitionUpdated = function() { this.update() }, b.prototype._checkLayer = function() {
                            if (!this.options.added) throw new Error("the layer is not still added to the map") }, b.prototype._findPos = function(a, b) {
                            var c, d, e = 0,
                                f = 0,
                                g = a.getDiv();
                            if (b.e.changedTouches && b.e.changedTouches.length > 0 ? (c = b.e.changedTouches[0].clientX + window.scrollX, d = b.e.changedTouches[0].clientY + window.scrollY) : (c = b.e.clientX, d = b.e.clientY), g.offsetParent && g.offsetTop > 0) { do e += g.offsetLeft, f += g.offsetTop; while (g = g.offsetParent);
                                var h = this._newPoint(c - e, d - f) } else var i = g.getBoundingClientRect(),
                                j = window.scrollX || window.pageXOffset,
                                k = window.scrollY || window.pageYOffset,
                                h = this._newPoint((b.e.clientX ? b.e.clientX : c) - i.left - g.clientLeft - j, (b.e.clientY ? b.e.clientY : d) - i.top - g.clientTop - k);
                            return h }, b.prototype._newPoint = function(a, b) {
                            return new google.maps.Point(a, b) }, b.prototype._manageOffEvents = function(a, b) {
                            return this.options.featureOut ? this.options.featureOut && this.options.featureOut(b.e, b.layer) : void 0 }, b.prototype._manageOnEvents = function(a, b) {
                            var c = this._findPos(a, b),
                                d = this.projector.pixelToLatLng(c),
                                e = b.e.type.toLowerCase();
                            switch (e) {
                                case "mousemove":
                                    if (this.options.featureOver) return this.options.featureOver(b.e, d, c, b.data, b.layer);
                                    break;
                                case "click":
                                case "touchend":
                                case "touchmove":
                                case "mspointerup":
                                case "pointerup":
                                case "pointermove":
                                    this.options.featureClick && this.options.featureClick(b.e, d, c, b.data, b.layer) } }, h.Projector = d, h.prototype = new wax.g.connector, _.extend(h.prototype, LayerDefinition.prototype, b.prototype, CartoDBLayerCommon.prototype), h.prototype.interactionClass = wax.g.interaction, g.prototype = new wax.g.connector, _.extend(g.prototype, NamedMap.prototype, b.prototype, CartoDBLayerCommon.prototype), g.prototype.interactionClass = wax.g.interaction, cdb.geo.CartoDBLayerGroupGMaps = h, cdb.geo.CartoDBNamedMapGMaps = g, cdb.geo.GMapsCartoDBLayerGroupView = c(h), cdb.geo.GMapsCartoDBNamedMapView = c(g), cdb.geo.CartoDBNamedMapGMaps = g } }(), function() {
                    if ("undefined" != typeof google && "undefined" != typeof google.maps) {
                        var a = function(a) { this.setMap(a) };
                        a.prototype = new google.maps.OverlayView, a.prototype.draw = function() {}, a.prototype.latLngToPixel = function(a) {
                            var b = this.getProjection();
                            return b ? b.fromLatLngToContainerPixel(a) : [0, 0] }, a.prototype.pixelToLatLng = function(a) {
                            var b = this.getProjection();
                            return b ? b.fromContainerPixelToLatLng(a) : [0, 0] };
                        var b = function(a) {
                            var b = { query: "SELECT * FROM {{table_name}}", opacity: .99, attribution: cdb.config.get("cartodb_attributions"), opacity: 1, debug: !1, visible: !0, added: !1, extra_params: {}, layer_definition_version: "1.0.0" };
                            if (this.options = _.defaults(a, b), !a.table_name || !a.user_name || !a.tile_style) throw "cartodb-gmaps needs at least a CartoDB table name, user_name and tile_style";
                            this.options.layer_definition = { version: this.options.layer_definition_version, layers: [{ type: "cartodb", options: this._getLayerDefinition(), infowindow: this.options.infowindow }] }, cdb.geo.CartoDBLayerGroupGMaps.call(this, this.options), this.setOptions(this.options) };
                        _.extend(b.prototype, cdb.geo.CartoDBLayerGroupGMaps.prototype), b.prototype.setQuery = function(a, b) { void 0 === b && (b = a, a = 0), b = b || "select * from " + this.options.table_name, LayerDefinition.prototype.setQuery.call(this, a, b) }, cdb.geo.CartoDBLayerGMaps = b;
                        var c = function(a, b) {
                            var c = this;
                            _.bindAll(this, "featureOut", "featureOver", "featureClick");
                            var d = _.clone(a.attributes);
                            d.map = b;
                            var e = d.featureOver,
                                f = d.featureOut,
                                g = d.featureClick;
                            d.featureOver = function() { e && e.apply(this, arguments), c.featureOver && c.featureOver.apply(this, arguments) }, d.featureOut = function() { f && f.apply(this, arguments), c.featureOut && c.featureOut.apply(this, arguments) }, d.featureClick = function() { g && g.apply(this, arguments), c.featureClick && c.featureClick.apply(d, arguments) }, cdb.geo.CartoDBLayerGMaps.call(this, d), cdb.geo.GMapsLayerView.call(this, a, this, b) };
                        cdb.geo.GMapsCartoDBLayerView = c, _.extend(c.prototype, cdb.geo.CartoDBLayerGMaps.prototype, cdb.geo.GMapsLayerView.prototype, { _update: function() { this.setOptions(this.model.attributes) }, reload: function() { this.model.invalidate() }, remove: function() { cdb.geo.GMapsLayerView.prototype.remove.call(this), this.clear() }, featureOver: function(a, b, c, d) { this.trigger("featureOver", a, [b.lat(), b.lng()], c, d, 0) }, featureOut: function(a) { this.trigger("featureOut", a) }, featureClick: function(a, b, c, d, e) { this.trigger("featureClick", a, [b.lat(), b.lng()], c, d, 0) }, error: function(a) { this.model && (this.model.trigger("error", a ? a.error : "unknown error"), this.model.trigger("tileError", a ? a.error : "unknown error")) }, tilesOk: function(a) { this.model.trigger("tileOk") }, loading: function() { this.trigger("loading") }, finishLoading: function() { this.trigger("load") } }) } }(), function() {
                    function a(a) {
                        var b = this,
                            c = ["click", "dblclick", "mousedown", "mouseover", "mouseout", "dragstart", "drag", "dragend"];
                        this._eventHandlers = {}, this.model = a, this.points = [];
                        var d = (_.clone(a.get("style")) || {}, this.model.get("iconAnchor")),
                            e = { url: this.model.get("iconUrl") || cdb.config.get("assets_url") + "/images/layout/default_marker.png", anchor: { x: d && d[0] || 10, y: d && d[1] || 10 } };
                        this.geom = new GeoJSON(a.get("geojson"), { icon: e, raiseOnDrag: !1, crossOnDrag: !1 });
                        var f;
                        for (f = 0; f < c.length; ++f) {
                            var g = c[f];
                            google.maps.event.addListener(this.geom, g, b._eventHandler(g)) }
                        this.bind("dragend", function(b, c) { a.set({ geojson: { type: "Point", coordinates: [c[1], c[0]] } }) }) }

                    function b(a) {
                        function b(a) { google.maps.event.addListener(a, "insert_at", c._updateModel) }
                        var c = this;
                        this._eventHandlers = {}, this.model = a, this.points = [];
                        var d = _.clone(a.get("style")) || {};
                        this.geom = new GeoJSON(a.get("geojson"), d), _.bindAll(this, "_updateModel");
                        var c = this;
                        if (this.geom.getPaths) {
                            var e = this.geom.getPaths();
                            if (e && e[0])
                                for (var f = 0; f < e.length; ++f) b(e[f]);
                            else b(e), google.maps.event.addListener(this.geom, "mouseup", this._updateModel) } else if (this.geom.length)
                            for (var f = 0; f < this.geom.length; ++f) b(this.geom[f].getPath()), google.maps.event.addListener(this.geom[f], "mouseup", this._updateModel);
                        else b(this.geom.getPath()), google.maps.event.addListener(this.geom, "mouseup", this._updateModel) }
                    a.prototype = new GeometryView, a.prototype._eventHandler = function(a) {
                        var b = this,
                            c = this._eventHandlers[a];
                        return c || (c = function(c) {
                            var d = c.latLng,
                                e = [d.lat(), d.lng()];
                            b.trigger(a, c, e) }, this._eventHandlers[a] = c), c }, a.prototype.edit = function(a) { this.geom.setDraggable(a) }, b.prototype = new GeometryView, b.getGeoJSON = function(a, c) {
                        function d(a) {
                            return [a.lng(), a.lat()] }

                        function e(a) {
                            for (var b = [], c = 0; c < a.length; ++c) b.push(d(a.getAt(c)));
                            return b }
                        if (a.length && 1 != a.length) {
                            for (var f = [], g = 0; g < a.length; ++g) f.push(b.getGeoJSON(a[g], c).coordinates[0]);
                            return { type: c, coordinates: f } }
                        var h, i = a.length ? a[0] : a;
                        if ("Point" == c) h = d(i.getPosition());
                        else if ("MultiPoint" == c) h = [d(i.getPosition())];
                        else if ("Polygon" == c) h = [e(i.getPath())], h[0].push(d(i.getPath().getAt(0)));
                        else if ("MultiPolygon" == c) { h = [];
                            for (var j = 0; j < i.getPaths().length; ++j) {
                                var f = e(i.getPaths().getAt(j));
                                f.push(d(i.getPaths().getAt(j).getAt(0))), h.push(f) }
                            h = [h] } else "LineString" == c ? h = e(i.getPath()) : "MultiLineString" == c && (h = [e(i.getPath())]);
                        return { type: c, coordinates: h } }, b.prototype._updateModel = function(a) {
                        var c = this;
                        setTimeout(function() { c.model.set("geojson", b.getGeoJSON(c.geom, c.model.get("geojson").type)) }, 100) }, b.prototype.edit = function(a) {
                        for (var c = this.geom.length ? this.geom : [this.geom], d = 0; d < c.length; ++d) c[d].setEditable(a);
                        a || this.model.set("geojson", b.getGeoJSON(this.geom, this.model.get("geojson").type)) }, cdb.geo.gmaps = cdb.geo.gmaps || {}, cdb.geo.gmaps.PointView = a, cdb.geo.gmaps.PathView = b }(), "undefined" != typeof google && "undefined" != typeof google.maps) {
                var DEFAULT_MAP_STYLE = [{ stylers: [{ saturation: -65 }, { gamma: 1.52 }] }, { featureType: "administrative", stylers: [{ saturation: -95 }, { gamma: 2.26 }] }, { featureType: "water", elementType: "labels", stylers: [{ visibility: "off" }] }, { featureType: "administrative.locality", stylers: [{ visibility: "off" }] }, { featureType: "road", stylers: [{ visibility: "simplified" }, { saturation: -99 }, { gamma: 2.22 }] }, { featureType: "poi", elementType: "labels", stylers: [{ visibility: "off" }] }, { featureType: "road.arterial", stylers: [{ visibility: "off" }] }, { featureType: "road.local", elementType: "labels", stylers: [{ visibility: "off" }] }, { featureType: "transit", stylers: [{ visibility: "off" }] }, { featureType: "road", elementType: "labels", stylers: [{ visibility: "off" }] }, { featureType: "poi", stylers: [{ saturation: -55 }] }];
                cdb.geo.GoogleMapsMapView = cdb.geo.MapView.extend({ layerTypeMap: { tiled: cdb.geo.GMapsTiledLayerView, cartodb: cdb.geo.GMapsCartoDBLayerView, carto: cdb.geo.GMapsCartoDBLayerView, plain: cdb.geo.GMapsPlainLayerView, gmapsbase: cdb.geo.GMapsBaseLayerView, layergroup: cdb.geo.GMapsCartoDBLayerGroupView, namedmap: cdb.geo.GMapsCartoDBNamedMapView, torque: function(a, b) {
                            return new cdb.geo.GMapsTorqueLayerView(a, b) }, wms: cdb.geo.LeafLetWMSLayerView }, initialize: function() { _.bindAll(this, "_ready"), this._isReady = !1;
                        var a = this;
                        cdb.geo.MapView.prototype.initialize.call(this);
                        var b = this.map.getViewBounds();
                        b && this.showBounds(b);
                        var c = this.map.get("center");
                        if (this.options.map_object) { this.map_googlemaps = this.options.map_object, this.setElement(this.map_googlemaps.getDiv());
                            var d = a.map_googlemaps.getCenter();
                            a._setModelProperty({ center: [d.lat(), d.lng()] }), a._setModelProperty({ zoom: a.map_googlemaps.getZoom() }), a.map.unset("view_bounds_sw", { silent: !0 }), a.map.unset("view_bounds_ne", { silent: !0 }) } else this.map_googlemaps = new google.maps.Map(this.el, { center: new google.maps.LatLng(c[0], c[1]), zoom: this.map.get("zoom"), minZoom: this.map.get("minZoom"), maxZoom: this.map.get("maxZoom"), disableDefaultUI: !0, scrollwheel: this.map.get("scrollwheel"), draggable: this.map.get("drag"), disableDoubleClickZoom: !this.map.get("drag"), mapTypeControl: !1, mapTypeId: google.maps.MapTypeId.ROADMAP, backgroundColor: "white", tilt: 0 }), this.map.bind("change:maxZoom", function() { a.map_googlemaps.setOptions({ maxZoom: a.map.get("maxZoom") }) }, this), this.map.bind("change:minZoom", function() { a.map_googlemaps.setOptions({ minZoom: a.map.get("minZoom") }) }, this);
                        this.map.geometries.bind("add", this._addGeometry, this), this.map.geometries.bind("remove", this._removeGeometry, this), this._bindModel(), this._addLayers(), this.setAttribution(), google.maps.event.addListener(this.map_googlemaps, "center_changed", function() {
                            var b = a.map_googlemaps.getCenter();
                            a._setModelProperty({ center: [b.lat(), b.lng()] }) }), google.maps.event.addListener(this.map_googlemaps, "zoom_changed", function() { a._setModelProperty({ zoom: a.map_googlemaps.getZoom() }) }), google.maps.event.addListener(this.map_googlemaps, "click", function(b) { a.trigger("click", b, [b.latLng.lat(), b.latLng.lng()]) }), google.maps.event.addListener(this.map_googlemaps, "dragend", function(b) {
                            var c = a.map_googlemaps.getCenter();
                            a.trigger("dragend", b, [c.lat(), c.lng()]) }), google.maps.event.addListener(this.map_googlemaps, "dblclick", function(b) { a.trigger("dblclick", b) }), this.map.layers.bind("add", this._addLayer, this), this.map.layers.bind("remove", this._removeLayer, this), this.map.layers.bind("reset", this._addLayers, this), this.map.layers.bind("change:type", this._swicthLayerView, this), this.projector = new cdb.geo.CartoDBLayerGroupGMaps.Projector(this.map_googlemaps), this.projector.draw = this._ready }, _ready: function() { this.projector.draw = function() {}, this.trigger("ready"), this._isReady = !0 }, _setKeyboard: function(a, b) { this.map_googlemaps.setOptions({ keyboardShortcuts: b }) }, _setScrollWheel: function(a, b) { this.map_googlemaps.setOptions({ scrollwheel: b }) }, _setZoom: function(a, b) { b = b || 0, this.map_googlemaps.setZoom(b) }, _setCenter: function(a, b) {
                        var c = new google.maps.LatLng(b[0], b[1]);
                        this.map_googlemaps.setCenter(c) }, createLayer: function(a) {
                        var b, c = this.layerTypeMap[a.get("type").toLowerCase()];
                        if (c) try { b = new c(a, this.map_googlemaps) } catch (d) { cdb.log.error("MAP: error creating '" + a.get("type") + "' layer -> " + d.message) } else cdb.log.error("MAP: " + a.get("type") + " can't be created");
                        return b }, _addLayer: function(a, b, c) { c = c || {};
                        var d;
                        return (d = this.createLayer(a)) ? this._addLayerToMap(d, c) : void 0 }, _addLayerToMap: function(a, b) {
                        var c = a.model;
                        if (this.layers[c.cid] = a, a) {
                            var d = _(this.layers).filter(function(a) {
                                    return !!a.getTile }).length - 1,
                                e = 1 === _.keys(this.layers).length || b && 0 === b.index || 0 === c.get("order");
                            if (e && !b.no_base_layer) {
                                var f = a.model; "GMapsBase" === f.get("type") ? a._update() : (a.isBase = !0, a._update()) } else d -= 1, d = Math.max(0, d), a.getTile ? (a.gmapsLayer || cdb.log.error("gmaps layer can't be null"), this.map_googlemaps.overlayMapTypes.setAt(d, a.gmapsLayer)) : a.gmapsLayer.setMap(this.map_googlemaps);
                            void 0 !== b && b.silent || this.trigger("newLayerView", a, c, this) } else cdb.log.error("layer type not supported");
                        return a }, pixelToLatLon: function(a) {
                        var b = this.projector.pixelToLatLng(new google.maps.Point(a[0], a[1]));
                        return { lat: b.lat(), lng: b.lng() } }, latLonToPixel: function(a) {
                        return this.projector.latLngToPixel(new google.maps.LatLng(a[0], a[1])) }, getSize: function() {
                        return { x: this.$el.width(), y: this.$el.height() } }, panBy: function(a) {
                        var b = this.map.get("center"),
                            c = this.latLonToPixel(b);
                        a.x += c.x, a.y += c.y;
                        var d = this.projector.pixelToLatLng(a);
                        this.map.setCenter([d.lat(), d.lng()]) }, getBounds: function() {
                        if (this._isReady) {
                            var a = this.map_googlemaps.getBounds(),
                                b = a.getSouthWest(),
                                c = a.getNorthEast();
                            return [
                                [b.lat(), b.lng()],
                                [c.lat(), c.lng()]
                            ] }
                        return [
                            [0, 0],
                            [0, 0]
                        ] }, setAttribution: function() {
                        var a = document.getElementById("cartodb-gmaps-attribution"),
                            b = cdb.core.sanitize.html(this.map.get("attribution").join(", "));
                        a && a.parentNode.removeChild(a);
                        var c = this.map_googlemaps.getDiv(),
                            d = document.createElement("div");
                        d.setAttribute("id", "cartodb-gmaps-attribution"), d.setAttribute("class", "gmaps"), c.appendChild(d), d.innerHTML = b }, setCursor: function(a) { this.map_googlemaps.setOptions({ draggableCursor: a }) }, _addGeomToMap: function(a) {
                        var b = cdb.geo.GoogleMapsMapView.createGeometry(a);
                        if (b.geom.length)
                            for (var c = 0; c < b.geom.length; ++c) b.geom[c].setMap(this.map_googlemaps);
                        else b.geom.setMap(this.map_googlemaps);
                        return b }, _removeGeomFromMap: function(a) {
                        if (a.geom.length)
                            for (var b = 0; b < a.geom.length; ++b) a.geom[b].setMap(null);
                        else a.geom.setMap(null) }, getNativeMap: function() {
                        return this.map_googlemaps }, invalidateSize: function() { google.maps.event.trigger(this.map_googlemaps, "resize") } }, { addLayerToMap: function(a, b, c) { c = c || 0, a || cdb.log.error("gmaps layer can't be null"), a.getTile ? b.overlayMapTypes.setAt(c, a) : a.setMap(b) }, createGeometry: function(a) {
                        return a.isPoint() ? new cdb.geo.gmaps.PointView(a) : new cdb.geo.gmaps.PathView(a) } }) }
            cdb.ui.common.Dialog = cdb.core.View.extend({ tagName: "div", className: "dialog", events: { "click .ok": "_ok", "click .cancel": "_cancel", "click .close": "_cancel" }, default_options: { title: "title", description: "", ok_title: "Ok", cancel_title: "Cancel", width: 300, height: 200, clean_on_hide: !1, enter_to_confirm: !1, template_name: "old_common/views/dialog_base", ok_button_classes: "button green", cancel_button_classes: "", modal_type: "", modal_class: "", include_footer: !0, additionalButtons: [] }, initialize: function() { _.defaults(this.options, this.default_options), _.bindAll(this, "render", "_keydown"), $(document).bind("keydown", this._keydown), this.bind("clean", this._reClean), this.template_base = this.options.template_base ? _.template(this.options.template_base) : cdb.templates.getTemplate(this.options.template_name) }, render: function() {
                        var a = this.$el;
                        return a.html(this.template_base(this.options)), a.find(".modal").css({ width: this.options.width }), this.render_content && this.$(".content").append(this.render_content()), this.options.modal_class && this.$el.addClass(this.options.modal_class), this }, _keydown: function(a) { 27 === a.keyCode ? this._cancel() : 13 === a.keyCode && this.options.enter_to_confirm && this._ok() }, appendToBody: function() {
                        return $("body").append(this.render().el), this }, _ok: function(a) { a && a.preventDefault(), this.ok && this.ok(this.result), this.hide() }, _cancel: function(a) { a && (a.preventDefault(), a.stopPropagation()), this.cancel && this.cancel(), this.hide() }, hide: function() { this.$el.hide(), this.options.clean_on_hide && this.clean() }, open: function() { this.$el.show() }, _reClean: function() { $(document).unbind("keydown", this._keydown) } }), cdb.ui.common.ShareDialog = cdb.ui.common.Dialog.extend({ tagName: "div", className: "cartodb-share-dialog", events: { "click .ok": "_ok", "click .cancel": "_cancel", "click .close": "_cancel", click: "_stopPropagation", dblclick: "_stopPropagation", mousedown: "_stopPropagation" }, default_options: { title: "", description: "", ok_title: "Ok", cancel_title: "Cancel", width: 300, height: 200, clean_on_hide: !1, enter_to_confirm: !1, template_name: "old_common/views/dialog_base", ok_button_classes: "button green", cancel_button_classes: "", modal_type: "", modal_class: "", include_footer: !0, additionalButtons: [] }, initialize: function() { _.defaults(this.options, this.default_options), _.bindAll(this, "render", "_keydown"), this.isOpen = !1;
                        var a = this;
                        this.options.target && this.options.target.on("click", function(b) { b.preventDefault(), b.stopPropagation(), a.open() }), $(document).bind("keydown", this._keydown), this.bind("clean", this._reClean) }, _stopPropagation: function(a) { a.stopPropagation() }, _stripHTML: function(a, b) { b = (((b || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join("");
                        var c = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
                        return a && "string" == typeof a ? a.replace(c, function(a, c) {
                            return b.indexOf("<" + c.toLowerCase() + ">") > -1 ? a : "" }) : "" }, open: function() {
                        var a = this;
                        this.$el.show(0, function() { a.isOpen = !0 }) }, hide: function() {
                        var a = this;
                        this.$el.hide(0, function() { a.isOpen = !1 }), this.options.clean_on_hide && this.clean() }, toggle: function() { this.isOpen ? this.hide() : this.open() }, _truncateTitle: function(a, b) {
                        return a.substr(0, b - 1) + (a.length > b ? "â€¦" : "") }, render: function() {
                        var a, b, c = this.$el,
                            d = cdb.core.sanitize.html(this.options.title),
                            e = (cdb.core.sanitize.html(this.options.description), this._stripHTML(this.options.description)),
                            f = this.options.share_url;
                        this.$el.addClass(this.options.size);
                        var g, h = d + ": " + e;
                        g = d && e ? this._truncateTitle(d + ": " + e, 112) + " %23map " : d ? this._truncateTitle(d, 112) + " %23map" : e ? this._truncateTitle(e, 112) + " %23map" : "%23map", a = this.options.facebook_url ? this.options.facebook_url : "http://www.facebook.com/sharer.php?u=" + f + "&text=" + h, b = this.options.twitter_url ? this.options.twitter_url : "https://twitter.com/share?url=" + f + "&text=" + g;
                        var i = _.extend(this.options, { facebook_url: a, twitter_url: b });
                        return c.html(this.options.template(i)), c.find(".modal").css({ width: this.options.width }), this.render_content && this.$(".content").append(this.render_content()), this.options.modal_class && this.$el.addClass(this.options.modal_class), this.options.disableLinks && this.$el.find("a").attr("target", ""), this } }), cdb.ui.common.Notification = cdb.core.View.extend({
                    tagName: "div",
                    className: "dialog",
                    events: { "click .close": "hide" },
                    default_options: { timeout: 0, msg: "", hideMethod: "", duration: "normal" },
                    initialize: function() { this.closeTimeout = -1, _.defaults(this.options, this.default_options), this.template = this.options.template ? _.template(this.options.template) : cdb.templates.getTemplate("common/notification"), this.$el.hide() },
                    render: function() {
                        var a = this.$el;
                        return a.html(this.template(this.options)), this.render_content && this.$(".content").append(this.render_content()), this },
                    hide: function(a) {
                        var b = this;
                        a && a.preventDefault(), clearTimeout(this.closeTimeout), "" != this.options.hideMethod && this.$el.is(":visible") ? this.$el[this.options.hideMethod](this.options.duration, "swing", function() { b.$el.html(""), b.trigger("notificationDeleted"), b.remove() }) : (this.$el.hide(), b.$el.html(""), b.trigger("notificationDeleted"), b.remove()) },
                    open: function(a, b) { this.render(), this.$el.show(a, b), this.options.timeout && (this.closeTimeout = setTimeout(_.bind(this.hide, this), this.options.timeout)) }
                }), cdb.ui.common.Row = cdb.core.Model.extend({}), cdb.ui.common.TableData = Backbone.Collection.extend({ model: cdb.ui.common.Row, fetched: !1, initialize: function() {
                        var a = this;
                        this.bind("reset", function() { a.fetched = !0 }) }, getCell: function(a, b) {
                        var c = this.at(a);
                        return c ? c.get(b) : null }, isEmpty: function() {
                        return 0 === this.length } }), cdb.ui.common.TableProperties = cdb.core.Model.extend({ columnNames: function() {
                        return _.map(this.get("schema"), function(a) {
                            return a[0] }) }, columnName: function(a) {
                        return this.columnNames()[a] } }), cdb.ui.common.RowView = cdb.core.View.extend({ tagName: "tr", initialize: function() { this.model.bind("change", this.render, this), this.model.bind("destroy", this.clean, this), this.model.bind("remove", this.clean, this), this.model.bind("change", this.triggerChange, this), this.model.bind("sync", this.triggerSync, this), this.model.bind("error", this.triggerError, this), this.add_related_model(this.model), this.order = this.options.order }, triggerChange: function() { this.trigger("changeRow") }, triggerSync: function() { this.trigger("syncRow") }, triggerError: function() { this.trigger("errorRow") }, valueView: function(a, b) {
                        return b }, render: function() {
                        var a, b = this,
                            c = this.model,
                            d = "",
                            e = 0;
                        a = this.options.row_header ? '<td class="rowHeader" data-x="' + e + '">' : '<td class="EmptyRowHeader" data-x="' + e + '">';
                        var f = b.valueView("", "");
                        f.html && (f = f[0].outerHTML), a += f, a += "</td>", e++, d += a;
                        for (var g = this.order || _.keys(c.attributes), h = "", i = c.attributes, j = 0, k = g.length; k > j; ++j) {
                            var l = g[j],
                                m = i[l];
                            if (void 0 !== m) {
                                var a = '<td id="cell_' + c.id + "_" + l + '" data-x="' + e + '">',
                                    f = b.valueView(l, m);
                                f.html && (f = f[0].outerHTML), a += f, a += "</td>", e++, h += a } }
                        return d += h, this.$el.html(d).attr("id", "row_" + c.id), this }, getCell: function(a) {
                        return this.options.row_header && ++a, this.$("td:eq(" + a + ")") }, getTableView: function() {
                        return this.tableView } }), cdb.ui.common.Table = cdb.core.View.extend({ tagName: "table", rowView: cdb.ui.common.RowView, events: { "click td": "_cellClick", "dblclick td": "_cellDblClick" }, default_options: {}, initialize: function() {
                        var a = this;
                        _.defaults(this.options, this.default_options), this.dataModel = this.options.dataModel, this.rowViews = [], this.setDataSource(this.dataModel), this.model.bind("change", this.render, this), this.model.bind("change:dataSource", this.setDataSource, this), this.bind("clean", this.clear_rows, this), this.add_related_model(this.dataModel), this.add_related_model(this.model), this.model.bind("removing:row", function() { a.rowsBeingDeleted = a.rowsBeingDeleted ? a.rowsBeingDeleted + 1 : 1, a.rowDestroying() }), this.model.bind("remove:row", function() { a.rowsBeingDeleted > 0 && (a.rowsBeingDeleted--, a.rowDestroyed(), 0 == a.dataModel.length && a.emptyTable()) }) }, headerView: function(a) {
                        return a[0] }, setDataSource: function(a) { this.dataModel && this.dataModel.unbind(null, null, this), this.dataModel = a, this.dataModel.bind("reset", this._renderRows, this), this.dataModel.bind("error", this._renderRows, this), this.dataModel.bind("add", this.addRow, this) }, _renderHeader: function() {
                        var a = this,
                            b = $("<thead>"),
                            c = $("<tr>");
                        return this.options.row_header ? c.append($("<th>").append(a.headerView(["", "header"]))) : c.append($("<th>").append(a.headerView(["", "header"]))), _(this.model.get("schema")).each(function(b) { c.append($("<th>").append(a.headerView(b))) }), b.append(c), b }, clear_rows: function() { this.$("tfoot").remove(), this.$("tr.noRows").remove();
                        for (var a = null; a = this.rowViews.pop();) a.unbind(null, null, this), a.clean();
                        this.rowViews = [] }, addRow: function(a, b, c) {
                        var d = this,
                            e = new d.rowView({ model: a, order: this.model.columnNames(), row_header: this.options.row_header });
                        if (e.tableView = this, e.bind("clean", function() {
                                var a = _.indexOf(d.rowViews, e);
                                d.rowViews.splice(a, 1);
                                for (var b = a; b < d.rowViews.length; ++b) d.rowViews[b].$el.attr("data-y", b) }, this), e.bind("changeRow", this.rowChanged, this), e.bind("saved", this.rowSynched, this), e.bind("errorSaving", this.rowFailed, this), e.bind("saving", this.rowSaving, this), this.retrigger("saving", e), e.render(), c && void 0 !== c.index && c.index != d.rowViews.length) { e.$el.insertBefore(d.rowViews[c.index].$el), d.rowViews.splice(c.index, 0, e);
                            for (var f = c.index; f < d.rowViews.length; ++f) d.rowViews[f].$el.attr("data-y", f) } else e.$el.attr("data-y", d.rowViews.length), d.$el.append(e.el), d.rowViews.push(e);
                        this.trigger("createRow") }, rowChanged: function() {}, rowSynched: function() {}, rowFailed: function() {}, rowSaving: function() {}, rowDestroying: function() {}, rowDestroyed: function() {}, emptyTable: function() {}, isEmptyTable: function() {
                        return 0 === this.dataModel.length && this.dataModel.fetched }, _renderRows: function() {
                        if (this.clear_rows(), this.isEmptyTable()) this._renderEmpty();
                        else if (this.dataModel.fetched) {
                            var a = this;
                            this.dataModel.each(function(b) { a.addRow(b) }) } else this._renderLoading() }, _renderLoading: function() {}, _renderEmpty: function() {}, addEmptyTableInfo: function() {}, render: function() {
                        var a = this;
                        return a.$el.html(a._renderHeader()), a._renderRows(), this }, getCell: function(a, b) {
                        return this.options.row_header && ++b, this.rowViews[b].getCell(a) }, _cellClick: function(a, b) { b = b || "cellClick", a.preventDefault();
                        var c = $(a.currentTarget || a.target),
                            d = parseInt(c.attr("data-x"), 10),
                            e = parseInt(c.parent().attr("data-y"), 10);
                        this.trigger(b, a, c, d, e) }, _cellDblClick: function(a) { this._cellClick(a, "cellDblClick") } }), cdb.ui.common.Dropdown = cdb.core.View.extend({ tagName: "div", className: "dropdown", events: { "click ul li a": "_fireClick" }, default_options: { width: 160, speedIn: 150, speedOut: 300, vertical_position: "down", horizontal_position: "right", tick: "right", vertical_offset: 0, horizontal_offset: 0 }, initialize: function() { _.bindAll(this, "open", "hide", "_handleClick", "_keydown"), _.defaults(this.options, this.default_options), this.options.template_base ? this.template_base = cdb.templates.getTemplate(this.options.template_base) : this.options.template && (this.template_base = this.options.template), $(this.options.target).bind({ click: this._handleClick }), $(document).bind("keydown", this._keydown), this.isOpen = !1 }, render: function() {
                        var a = this.$el;
                        return a.html(this.template_base(this.options)).css({ width: this.options.width }), this }, _handleClick: function(a) { a && (a.preventDefault(), a.stopPropagation()), this.isOpen ? this.hide() : this.open() }, _keydown: function(a) { 27 === a.keyCode && this.hide() }, hide: function() { this.isOpen = !1, this.$el.hide() }, show: function() { this.$el.css({ display: "block", opacity: 1 }), this.isOpen = !0 }, open: function(a, b) {
                        var c = b && $(b) || this.options.target;
                        this.options.target = c;
                        var d = c[this.options.position || "offset"](),
                            e = c.outerWidth(),
                            f = c.outerHeight(),
                            g = this.$el.outerWidth(),
                            h = this.$el.outerHeight(),
                            i = this;
                        this.$el.css({ top: d.top + parseInt("up" == i.options.vertical_position ? -h - 10 - i.options.vertical_offset : f + 10 - i.options.vertical_offset), left: d.left + parseInt("left" == i.options.horizontal_position ? i.options.horizontal_offset - 15 : e - g + 15 - i.options.horizontal_offset) }).addClass(("up" == this.options.vertical_position ? "vertical_top" : "vertical_bottom") + " " + ("right" == this.options.horizontal_position ? "horizontal_right" : "horizontal_left") + " tick_" + this.options.tick), this.show(), this.isOpen = !0 }, clean: function() { $(this.options.target).unbind({ click: this._handleClick }), $(document).unbind("keydown", this._keydown), cdb.core.View.prototype.clean.apply(this, arguments) }, _fireClick: function(a) { this.trigger("optionClicked", a, this.el) } }),
                function() {
                    var a = { _types: {}, register: function(b, c) { a._types[b] = c }, create: function(b, c, d) {
                            var e = a._types[b];
                            if (!e) return void cdb.log.error("Overlay: " + b + " does not exist");
                            d.options = "string" == typeof d.options ? JSON.parse(d.options) : d.options, d.options = d.options || {};
                            var f = e(d, c);
                            return f ? (f.type = b, f) : !1 } };
                    cdb.vis.Overlay = a, cdb.vis.Overlays = Backbone.Collection.extend({ comparator: function() {} });
                    var b = { _types: {}, register: function(a, b) { this._types[a] = b }, create: function(a, b, c) {
                            if (!a) return cdb.log.error("creating a layer without type"), null;
                            var d = this._types[a.toLowerCase()],
                                e = {};
                            return e.type = a, _.extend(e, c, c.options), new d(b, e) }, moduleForLayer: function(a) {
                            return "torque" === a.toLowerCase() ? "torque" : null }, modulesForLayers: function(a) {
                            var c = _(a).map(function(a) {
                                return b.moduleForLayer(a.type || a.kind) });
                            return _.compact(_.uniq(c)) } };
                    cdb.vis.Layers = b, cartodb.moduleLoad = function(a, b) { cartodb[a] = b, cartodb.config.modules.add({ name: a, mod: b }) };
                    var c = cdb.core.View.extend({ initialize: function() { _.bindAll(this, "loadingTiles", "loadTiles", "_onResize"), this.https = !1, this.overlays = [], this.moduleChecked = !1, this.layersLoading = 0, this.options.mapView && (this.mapView = this.options.mapView, this.map = this.mapView.map), window.addEventListener ? window.addEventListener("orientationchange", _.bind(this.doOnOrientationChange, this)) : window.attachEvent("orientationchange", this.doOnOrientationChange, this) }, doOnOrientationChange: function() {}, checkModules: function(a) {
                            var c = b.modulesForLayers(a);
                            return _.every(_.map(c, function(a) {
                                return void 0 !== cartodb[a] })) }, loadModules: function(a, c) {
                            function d() { e.checkModules(a) && (cdb.config.unbind("moduleLoaded", d), c()) }
                            for (var e = this, f = b.modulesForLayers(a), g = 0; g < f.length; ++g) Loader.loadModule(f[g]);
                            cdb.config.bind("moduleLoaded", d), _.defer(d) }, _addLegends: function(a) { this.legends && this.legends.remove(), this.legends = new cdb.geo.ui.StackedLegend({ legends: a }), this.isMobileEnabled || this.mapView.addOverlay(this.legends) }, addLegends: function(a) { this._addLegends(this.createLegendView(a)) }, _setLayerOptions: function(a) {
                            var b = [],
                                b = _.map(this.getLayers().slice(1), function(a) {
                                    return a.getSubLayers ? a.getSubLayers() : a });
                            for (b = _.flatten(b), i = 0; i < Math.min(a.sublayer_options.length, b.length); ++i) {
                                var c = a.sublayer_options[i],
                                    d = b[i],
                                    e = this.legends && this.legends.getLegendByIndex(i);
                                e && e[c.visible ? "show" : "hide"](), d.model && "torque" === d.model.get("type") && c.visible === !1 && (d.model.set("visible", !1), this.timeSlider && this.timeSlider.hide()) } }, _addOverlays: function(a, b, c) {
                            for (a = a.toJSON(), a = _.sortBy(a, function(a) {
                                    return null === a.order ? Number.MAX_VALUE : a.order }); 0 !== this.overlays.length;) this.overlays.pop().clean();
                            this._createOverlays(a, b, c) }, addTimeSlider: function(b) {
                            if (b && b.options.steps > 1 && !this.timeSlider) {
                                var c = this,
                                    d = a.create("time_slider", this, { layer: b });
                                this.mapView.addOverlay(d), this.timeSlider = d, b.bind("remove", function e() { c.timeSlider = null, d.remove(), b.unbind("remove", e) }) } }, _setupSublayers: function(a, b) { b.sublayer_options = [], _.each(a.slice(1), function(a) { "layergroup" === a.type ? _.each(a.options.layer_definition.layers, function(a) { b.sublayer_options.push({ visible: void 0 !== a.visible ? a.visible : !0 }) }) : "namedmap" === a.type ? _.each(a.options.named_map.layers, function(a) { b.sublayer_options.push({ visible: void 0 !== a.visible ? a.visible : !0 }) }) : "torque" === a.type && b.sublayer_options.push({ visible: void 0 !== a.options.visible ? a.options.visible : !0 }) }) }, load: function(a, c) {
                            function d() { e._createSlides([a].concat(a.slides)) }
                            var e = this;
                            if ("string" == typeof a) {
                                var f = a;
                                return cdb.core.Loader.get(f, function(a) { a ? e.load(a, c) : e.throwError("error fetching viz.json file") }), this }
                            var g = a.slides;
                            g && g.length > 0 && (a = g[0], a.slides = g.slice(1));
                            var h = a.layers;
                            if (a.slides && a.slides.length > 0 && (h = h.concat(_.flatten(a.slides.map(function(a) {
                                    return a.layers })))), !this.checkModules(h)) return this.moduleChecked ? (e.throwError("modules couldn't be loaded"), this) : (this.moduleChecked = !0, this.loadModules(h, function() { e.load(a, c) }), this);
                            window && window.location.protocol && "https:" === window.location.protocol && (this.https = !0), a.https && (this.https = a.https), c = c || {}, this._applyOptions(a, c);
                            var i = !!_.find(a.overlays, function(a) {
                                return "logo" === a.type && a.options.display });
                            this.cartodb_logo = void 0 !== c.cartodb_logo ? c.cartodb_logo : i, this.mobile ? this.cartodb_logo = !1 : i || void 0 !== c.cartodb_logo || (this.cartodb_logo = !0);
                            var j = void 0 === c.scrollwheel ? a.scrollwheel : c.scrollwheel,
                                k = (void 0 === c.slides_controller ? a.slides_controller : c.slides_controller, this.isMobileDevice()),
                                l = _.isObject(_.find(a.overlays, function(a) {
                                    return "zoom" == a.type })),
                                m = k || l || j;
                            if (a.maxZoom || (a.maxZoom = 20), a.minZoom || (a.minZoom = 0), this.gmaps_base_type && "leaflet" === a.map_provider) {
                                var n = ["roadmap", "gray_roadmap", "dark_roadmap", "hybrid", "satellite", "terrain"];
                                _.contains(n, this.gmaps_base_type) ? a.layers ? (a.layers[0].options.type = "GMapsBase", a.layers[0].options.base_type = this.gmaps_base_type, a.layers[0].options.name = this.gmaps_base_type, this.gmaps_style && (a.layers[0].options.style = "string" == typeof this.gmaps_style ? JSON.parse(this.gmaps_style) : this.gmaps_style), a.map_provider = "googlemaps", a.layers[0].options.attribution = "") : cdb.log.error("No base map loaded. Using Leaflet.") : cdb.log.error('GMaps base_type "' + this.gmaps_base_type + " is not supported. Using leaflet.") }
                            var o = { title: a.title, description: a.description, maxZoom: a.maxZoom, minZoom: a.minZoom, legends: a.legends, scrollwheel: j, drag: m, provider: a.map_provider };
                            if (a.bounding_box_sw && a.bounding_box_ne && (o.bounding_box_sw = a.bounding_box_sw, o.bounding_box_ne = a.bounding_box_ne), a.bounds) o.view_bounds_sw = a.bounds[0], o.view_bounds_ne = a.bounds[1];
                            else {
                                var p = a.center; "string" == typeof p && (p = $.parseJSON(p)), o.center = p || [0, 0], o.zoom = void 0 === a.zoom ? 4 : a.zoom }
                            var q = new cdb.geo.Map(o);
                            this.map = q, this.overlayModels = new Backbone.Collection, this.updated_at = a.updated_at || (new Date).getTime();
                            var r = this.$el.outerHeight();
                            0 === r && (this.mapConfig = o, $(window).bind("resize", this._onResize));
                            var s = $("<div>").css({ position: "relative", width: "100%", height: "100%" });
                            this.container = s;
                            var t = $("<div>").addClass("cartodb-map-wrapper").css({ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, width: "100%" });
                            s.append(t), this.$el.append(s);
                            var u = new cdb.geo.MapView.create(t, q);
                            return this.mapView = u, (c.legends || void 0 === c.legends && this.map.get("legends") !== !1) && q.layers.bind("reset", this.addLegends, this), this.overlayModels.bind("reset", function(b) { this._addOverlays(b, a, c), this._addMobile(a, c) }, this), this.mapView.bind("newLayerView", this._addLoading, this), c.time_slider && this.mapView.bind("newLayerView", this._addTimeSlider, this), this.infowindow && this.mapView.bind("newLayerView", this.addInfowindow, this), this.tooltip && this.mapView.bind("newLayerView", this.addTooltip, this), this.map.layers.reset(_.map(a.layers, function(a) {
                                return b.create(a.type || a.kind, e, a) })), this.overlayModels.reset(a.overlays), c.sublayer_options || this._setupSublayers(a.layers, c), this._setLayerOptions(c), a.slides && (this.map.disableKeyboard(), void 0 === cartodb.odyssey ? (cdb.config.bind("moduleLoaded:odyssey", d), Loader.loadModule("odyssey")) : d()), _.defer(function() { e.trigger("done", e, e.getLayers()) }), this }, _addTimeSlider: function() {
                            var a = _(this.getLayers()).find(function(a) {
                                return "torque" === a.model.get("type") && a.model.get("visible") });
                            a && (this.torqueLayer = a, this.torqueLayer.bind("change:time", function(a) { this.trigger("change:step", this.torqueLayer, this.torqueLayer.getStep()) }, this), !this.isMobileEnabled && this.torqueLayer && this.addTimeSlider(this.torqueLayer)) }, setAnimationStep: function(a, b) {
                            return this.torqueLayer ? (this.torqueLayer.setStep(a, b), !0) : !1 }, _createSlides: function(a) {
                            function c(a) {
                                var b = { set: function() {
                                        var b = arguments;
                                        return O.Action({ enter: function() { a.set.apply(a, b) } }) }, reset: function() {
                                        var b = arguments;
                                        return O.Action({ enter: function() { a.reset.apply(a, b) } }) } };
                                return b }

                            function d(a, b) {
                                var c = O.Trigger(),
                                    e = d._callbacks;
                                return e || (e = d._callbacks = [], O.Keys().left().then(function() {
                                    for (var b = 0; b < e.length; ++b)
                                        if (e[b] === a.current()) return void c.trigger() })), e.push(b), c }

                            function e(a, b) {
                                var c = O.Trigger(),
                                    d = e._callbacks;
                                return d || (d = e._callbacks = [], O.Keys().right().then(function() {
                                    for (var b = 0; b < d.length; ++b)
                                        if (d[b] === a.current()) return void c.trigger() })), d.push(b), c }

                            function f(a, b) {
                                return O.Step(O.Sleep(b), O.Action(function() { a.next() })) }
                            var g = this,
                                h = this.sequence = O.Sequential();
                            this.slides = O.Story(), this.map.actions = c(this.map), this.map.layers.actions = c(this.map.layers), this.overlayModels.actions = c(this.overlayModels);
                            for (var i = 0; i < a.length; ++i) {
                                var j = a[i],
                                    k = [],
                                    l = O.Step(this.map.actions.set({ center: "string" == typeof j.center ? JSON.parse(j.center) : j.center, zoom: j.zoom }), O.Sleep(350), this.map.layers.actions.reset(_.map(j.layers, function(a) {
                                        return b.create(a.type || a.kind, g, a) })));
                                if (k.push(l), k.push(this.overlayModels.actions.reset(j.overlays)), j.transition_options) {
                                    var m = j.transition_options; "time" === m.transition_trigger ? k.push(f(h, 1e3 * m.time)) : (e(h, i).then(h.next, h), d(h, i).then(h.prev, h)) }
                                this.slides.addState(h.step(i), O.Parallel.apply(window, k)) }
                            this.slides.go(0) }, _createOverlays: function(a, b, c) {!c.slides_controller && void 0 !== c.slides_controller || this.isMobileEnabled || _.find(a, function(a) {
                                return "header" === a.type && a.options.display }) || this._addSlideController(b), _(a).each(function(a) {
                                var d = a.type;
                                if (!(this.isMobileEnabled && ("zoom" === d || "header" === d || "loader" === d) || "fullscreen" === d && cdb.core.util.browser.ie && cdb.core.util.browser.ie.version <= 10)) {
                                    if ("image" === d || "text" === d || "annotation" === d) {
                                        var e = "mobile" == a.options.device ? !0 : !1;
                                        if (this.mobile !== e) return;
                                        if (!c[d] && void 0 !== c[d]) return }
                                    if ("header" === d) var f = this._addHeader(a, b);
                                    else var f = this.addOverlay(a);
                                    f && d in c && c[d] === !1 && f.hide();
                                    var g = a.options;
                                    if (!this.isMobileEnabled && (("share" == d && c.shareable || "share" == d && f.model.get("display") && void 0 == c.shareable) && f.show(), ("layer_selector" == d && c[d] || "layer_selector" == d && f.model.get("display") && void 0 == c[d]) && f.show(), ("fullscreen" == d && c[d] || "fullscreen" == d && f.model.get("display") && void 0 == c[d]) && f.show(), ("search" == d && c[d] || "search" == d && g.display && void 0 == c[d]) && f.show(), "header" === d)) {
                                        var h = f.model;
                                        void 0 !== c.title && h.set("show_title", c.title), void 0 !== c.description && h.set("show_description", c.description), (h.get("show_title") || h.get("show_description")) && $(".cartodb-map-wrapper").addClass("with_header"), f.render() } } }, this) }, _addSlideController: function(a) {
                            if (a.slides && a.slides.length > 0) {
                                var b = [a.transition_options].concat(_.pluck(a.slides, "transition_options"));
                                return this.addOverlay({ type: "slides_controller", transitions: b }) } }, _addHeader: function(a, b) {
                            var c = [b.transition_options].concat(_.pluck(b.slides, "transition_options"));
                            return this.addOverlay({ type: "header", options: a.options, transitions: c }) }, _addMobile: function(a, b) {
                            var c, d = a.layers[1];
                            if (this.isMobileEnabled) { b && void 0 === b.legends && (b.legends = this.legends ? !0 : !1), d.options && d.options.layer_definition ? c = d.options.layer_definition.layers : d.options && d.options.named_map && d.options.named_map.layers && (c = d.options.named_map.layers);
                                var e = [a.transition_options].concat(_.pluck(a.slides, "transition_options"));
                                this.mobileOverlay = this.addOverlay({ type: "mobile", layers: c, slides: a.slides, transitions: e, overlays: a.overlays, options: b, torqueLayer: this.torqueLayer }) } }, _createLegendView: function(a, b) {
                            if (a.legend) { a.legend.data = a.legend.items;
                                var c = a.legend;
                                if (c.items && c.items.length || c.template) {
                                    var d = _.extend(a.legend, { visible: a.visible }),
                                        e = new cdb.geo.ui.LegendModel(d),
                                        f = new cdb.geo.ui.Legend({ model: e });
                                    return b.bind("change:visibility", function(a, b) { f[b ? "hide" : "show"]() }), b.legend = e, f } }
                            return null }, createLegendView: function(a) {
                            for (var b = [], c = a.length - 1; c >= 0; --c) {
                                var d = a.at(c).cid,
                                    e = a.at(c).attributes;
                                if (e.visible) {
                                    var f = this.mapView.getLayerByCid(d);
                                    if (f) {
                                        var f = this.mapView.getLayerByCid(d);
                                        b.push(this._createLayerLegendView(e, f)) } } }
                            return _.flatten(b) }, _createLayerLegendView: function(a, b) {
                            var c = this,
                                d = [];
                            if (a.options && a.options.layer_definition) {
                                var e = a.options.layer_definition.layers;
                                _(e).each(function(a, e) { d.push(c._createLegendView(a, b.getSubLayer(e))) }) } else if (a.options && a.options.named_map && a.options.named_map.layers) {
                                var e = a.options.named_map.layers;
                                _(e).each(function(a, e) { d.push(c._createLegendView(a, b.getSubLayer(e))) }) } else d.push(this._createLegendView(a, b));
                            return _.compact(d).reverse() }, addOverlay: function(b) { b.map = this.map;
                            var c = a.create(b.type, this, b);
                            return c && ("loader" == b.type && (this.loader = c), this.mapView.addOverlay(c), this.overlays.push(c), c.bind("clean", function() {
                                for (var a in this.overlays) {
                                    var b = this.overlays[a];
                                    if (c.cid === b.cid) return void this.overlays.splice(a, 1) } }, this)), c }, _applyOptions: function(a, b) {
                            function c(b) {
                                if (!a.overlays) return null;
                                for (var c = 0; c < a.overlays.length; ++c)
                                    if (a.overlays[c].type === b) return a.overlays[c] }

                            function d(b) {
                                if (a.overlays)
                                    for (var c = 0; c < a.overlays.length; ++c)
                                        if (a.overlays[c].type === b) return void a.overlays.splice(c, 1) }

                            function e(a) {
                                for (var c = 1; c < a.length; ++c) {
                                    var d = a[c].options;
                                    d.no_cdn = b.no_cdn, d.force_cors = b.force_cors, m && (d.auth_token = m) } }
                            b = b || {}, b = _.defaults(b, { tiles_loader: !0, loaderControl: !0, infowindow: !0, tooltip: !0, time_slider: !0 }), a.overlays = a.overlays || [], a.layers = a.layers || [], this.infowindow = b.infowindow, this.tooltip = b.tooltip, b.https && (this.https = !0), b.gmaps_base_type && (this.gmaps_base_type = b.gmaps_base_type), b.gmaps_style && (this.gmaps_style = b.gmaps_style), this.mobile = this.isMobileDevice(), this.isMobileEnabled = b.mobile_layout && this.mobile || b.force_mobile, (b.force_mobile === !1 || "false" === b.force_mobile) && (this.isMobileEnabled = !1), b.title || (a.title = null), b.description || (a.description = null), b.tiles_loader || d("loader"), b.loaderControl || d("loader"), void 0 !== b.searchControl && (b.search = b.searchControl), !this.isMobileEnabled && b.search && (c("search") || a.overlays.push({ type: "search", order: 3 })), (b.title && a.title || b.description && a.description) && (c("header") || a.overlays.unshift({ type: "header", order: 1, shareable: b.shareable ? !0 : !1, url: a.url, options: { extra: { title: a.title, description: a.description, show_title: b.title, show_description: b.description } } })), b.layer_selector && (c("layer_selector") || a.overlays.push({ type: "layer_selector" })), b.shareable && !this.isMobileEnabled && (c("share") || a.overlays.push({ type: "share", order: 2, url: a.url })), this.isMobileEnabled && (d("logo"), d("share")), (this.mobile || void 0 !== b.zoomControl && !b.zoomControl) && d("zoom"), (this.mobile || void 0 !== b.search && !b.search) && d("search");
                            var f = parseInt(b.zoom);
                            isNaN(f) || (a.zoom = f, a.bounds = null);
                            var g = parseFloat(b.center_lat),
                                h = parseFloat(b.center_lon);
                            isNaN(g) || isNaN(h) || (a.center = [g, h], a.bounds = null), void 0 !== b.center && (a.center = b.center, a.bounds = null);
                            var i = parseFloat(b.sw_lat),
                                j = parseFloat(b.sw_lon),
                                k = parseFloat(b.ne_lat),
                                l = parseFloat(b.ne_lon);
                            if (isNaN(i) || isNaN(j) || isNaN(k) || isNaN(l) || (a.bounds = [
                                    [i, j],
                                    [k, l]
                                ]), a.layers.length > 1) {
                                var m = b.auth_token;
                                if (e(a.layers), a.slides)
                                    for (var n = 0; n < a.slides.length; ++n) e(a.slides[n].layers) } }, setMapPosition: function() {}, createLayer: function(a, c) {
                            var d = b.create(a.type || a.kind, this, a);
                            return this.mapView.createLayer(d) }, _getSqlApi: function(a) { a = a || {};
                            var b = a.sql_api_port,
                                c = a.sql_api_domain + (b ? ":" + b : ""),
                                d = a.sql_api_protocol,
                                e = "v1"; - 1 !== c.indexOf("carto.com") && (d = "http", c = "carto.com", e = "v2");
                            var f = new cartodb.SQL({ user: a.user_name, protocol: d, host: c, version: e });
                            return f }, addTooltip: function(a) {
                            if (a && a.containTooltip && a.containTooltip()) {
                                for (var b = 0; b < a.getLayerCount(); ++b) {
                                    var c = a.getTooltipData(b);
                                    if (c) {
                                        if (!a.tooltip) {
                                            var d = new cdb.geo.ui.Tooltip({ mapView: this.mapView, layer: a, template: c.template, position: "bottom|right", vertical_offset: 10, horizontal_offset: 4, fields: c.fields, omit_columns: ["cartodb_id"] });
                                            a.tooltip = d, this.mapView.addOverlay(d), a.bind("remove", function() { this.tooltip.clean() }) }
                                        a.setInteraction(b, !0) } }
                                a.tooltip && a.bind("featureOver", function(b, c, d, e, f) {
                                    var g = a.getTooltipData(f);
                                    g ? (a.tooltip.setTemplate(g.template), a.tooltip.setFields(g.fields), a.tooltip.setAlternativeNames(g.alternative_names), a.tooltip.enable()) : a.tooltip.disable() }) } }, addInfowindow: function(b) {
                            if (b.containInfowindow && b.containInfowindow()) {
                                for (var c = this.mapView, d = "featureClick", e = null, f = 0; f < b.getLayerCount(); ++f) b.getInfowindowData(f) && (e || (e = a.create("infowindow", this, b.getInfowindowData(f), !0), c.addInfowindow(e)), b.setInteraction(f, !0));
                                if (e) { e.bind("close", function() {
                                        for (var a = 0; a < b.getLayerCount(); ++a) {
                                            var c = b.tooltip;
                                            c && c.setFilter(null) } }), b.bind(d, function(a, c, d, f, g) {
                                        var h = b.getInfowindowData(g);
                                        if (h) {
                                            var i = _.pluck(h.fields, "name"),
                                                j = f.cartodb_id;
                                            b.fetchAttributes(g, j, i, function(a) {
                                                var b = _.defaults({ offset: h.offset, width: h.width, maxHeight: h.maxHeight }, cdb.geo.ui.InfowindowModel.prototype.defaults);
                                                e.model.set({ fields: h.fields, template: h.template, template_type: h.template_type, alternative_names: h.alternative_names, sanitizeTemplate: h.sanitizeTemplate, offset: b.offset, width: b.width, maxHeight: b.maxHeight }), a ? (e.model.updateContent(a), e.adjustPan()) : e.setError() }), e.setLatLng(c).setLoading().showInfowindow(), b.tooltip && b.tooltip.setFilter(function(a) {
                                                return a.cartodb_id !== j }).hide() } });
                                    b.bind("mouseover", function() { c.setCursor("pointer") }), b.bind("mouseout", function(a, b) { c.setCursor("auto") }), b.infowindow = e.model } } }, _addLoading: function(a) {
                            if (a) {
                                var b = this,
                                    c = function() { b.loadingTiles() },
                                    d = function() { b.loadTiles() };
                                a.bind("loading", c), a.bind("load", d) } }, loadingTiles: function() { this.mobileOverlay && this.mobileOverlay.loadingTiles(), this.loader && this.loader.show(), 0 === this.layersLoading && this.trigger("loading"), this.layersLoading++ }, loadTiles: function() { this.mobileOverlay && this.mobileOverlay.loadTiles(), this.loader && this.loader.hide(), this.layersLoading--, this.layersLoading <= 0 && (this.layersLoading = 0, this.trigger("load")) }, throwError: function(a, b) { cdb.log.error(a);
                            var c = this;
                            _.defer(function() { c.trigger("error", a, b) }) }, error: function(a) {
                            return this.bind("error", a) }, done: function(a) {
                            return this.bind("done", a) }, getNativeMap: function() {
                            return this.mapView.getNativeMap() }, getLayers: function() {
                            var a = this;
                            return _.compact(this.map.layers.map(function(b) {
                                return a.mapView.getLayerByCid(b.cid) })) }, getOverlays: function() {
                            return this.overlays }, getOverlay: function(a) {
                            return _(this.overlays).find(function(b) {
                                return b.type == a }) }, getOverlaysByType: function(a) {
                            return _(this.overlays).filter(function(b) {
                                return b.type == a }) }, _onResize: function() { $(window).unbind("resize", this._onResize);
                            var a = this;
                            a.mapView.invalidateSize(), setTimeout(function() {
                                var b = a.mapConfig;
                                b.view_bounds_sw ? a.mapView.map.setBounds([b.view_bounds_sw, b.view_bounds_ne]) : a.mapView.map.set({ center: b.center, zoom: b.zoom }) }, 150) }, isMobileDevice: function() {
                            return /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) } }, { addInfowindow: function(a, b, c, d) {
                            var e = _.defaults(d || {}, { infowindowTemplate: cdb.vis.INFOWINDOW_TEMPLATE.light, templateType: "mustache", triggerEvent: "featureClick", templateName: "light", extraFields: [], cursorInteraction: !0 });
                            if (!a) throw new Error("map is not valid");
                            if (!b) throw new Error("layer is not valid");
                            if (!c && void 0 === c.length) throw new Error("fields should be a list of strings");
                            var f = [];
                            c = c.concat(e.extraFields);
                            for (var g = 0; g < c.length; ++g) f.push({ name: c, order: g });
                            var h = new cdb.geo.ui.InfowindowModel({ fields: f, template_name: e.templateName }),
                                i = new cdb.geo.ui.Infowindow({ model: h, mapView: a.viz.mapView, template: new cdb.core.Template({ template: e.infowindowTemplate, type: e.templateType }).asFunction() });
                            a.viz.mapView.addInfowindow(i);
                            try { b.setInteractivity(c) } catch (j) {}
                            return b.setInteraction(!0), b.bind(e.triggerEvent, function(a, b, d, e, f) {
                                for (var g, h = [], j = 0; j < c.length; ++j) {
                                    var k = c[j];
                                    (g = e[k]) && h.push({ title: k, value: g, index: 0 }) }
                                i.model.set({ content: { fields: h, data: e } }), i.setLatLng(b).showInfowindow(), i.adjustPan() }, i), i.bind("clean", function() { b.unbind(e.triggerEvent, null, i) }), e.cursorInteraction && cdb.vis.Vis.addCursorInteraction(a, b), i }, addCursorInteraction: function(a, b) {
                            var c = a.viz.mapView;
                            b.bind("mouseover", function() { c.setCursor("pointer") }), b.bind("mouseout", function(a, b) { c.setCursor("auto") }) }, removeCursorInteraction: function(a, b) {
                            var c = a.viz.mapView;
                            b.unbind(null, null, c) } });
                    cdb.vis.INFOWINDOW_TEMPLATE = { light: ['<div class="cartodb-popup v2">', '<a href="#close" class="cartodb-popup-close-button close">x</a>', '<div class="cartodb-popup-content-wrapper">', '<div class="cartodb-popup-content">', "{{#content.fields}}", "{{#title}}<h4>{{title}}</h4>{{/title}}", "{{#value}}", '<p {{#type}}class="{{ type }}"{{/type}}>{{{ value }}}</p>', "{{/value}}", "{{^value}}", '<p class="empty">null</p>', "{{/value}}", "{{/content.fields}}", "</div>", "</div>", '<div class="cartodb-popup-tip-container"></div>', "</div>"].join("") }, cdb.vis.Vis = c }(),
                function() {
                    Queue = function() { this._methods = [], this._response = null, this._flushed = !1 }, Queue.prototype = { add: function(a) { this._flushed ? a(this._response) : this._methods.push(a) }, flush: function(a) {
                            if (!this._flushed)
                                for (this._response = a, this._flushed = !0; this._methods[0];) this._methods.shift()(a) } }, StaticImage = function() { MapBase.call(this, this), this.imageOptions = {}, this.error = null, this.supported_formats = ["png", "jpg"], this.defaults = { basemap_url_template: "http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", basemap_subdomains: ["a", "b", "c"], format: "png", zoom: 10, center: [0, 0], size: [320, 240], tiler_port: 80, tiler_domain: "carto.com" } }, StaticImage.prototype = _.extend({}, MapBase.prototype, {
                        load: function(a, b) {
                            return _.bindAll(this, "_onVisLoaded"), this.queue = new Queue, this.no_cdn = b.no_cdn, this.userOptions = b, b = _.defaults({ vizjson: a, temp_id: "s" + this._getUUID() }, this.defaults), this.imageOptions = b, cdb.core.Loader.get(a, this._onVisLoaded), this },
                        loadLayerDefinition: function(a, b) {
                            return this.queue = new Queue, a.user_name ? (this.userOptions = b, this.options.api_key = a.api_key, this.options.user_name = a.user_name, this.options.tiler_protocol = a.tiler_protocol, this.options.tiler_domain = a.tiler_domain, this.options.tiler_port = a.tiler_port, this.options.maps_api_template = a.maps_api_template, this.endPoint = "/api/v1/map", this.options.maps_api_template || this._buildMapsApiTemplate(this.options), this.options.layers = a, void this._requestLayerGroupID()) : void cartodb.log.error("Please, specify the username") },
                        _onVisLoaded: function(a) {
                            if (a) {
                                var b = a.layers[0],
                                    c = this._getDataLayer(a.layers);
                                c.options && (this.options.user_name = c.options.user_name), c.options.maps_api_template ? this.options.maps_api_template = c.options.maps_api_template : this._setupTilerConfiguration(c.options.tiler_protocol, c.options.tiler_domain, c.options.tiler_port), this.auth_tokens = a.auth_tokens, this.endPoint = "/api/v1/map";
                                var d = [],
                                    e = a.bounds;
                                e && (d.push([e[0][1], e[0][0]]), d.push([e[1][1], e[1][0]])), this.imageOptions.zoom = a.zoom, this.imageOptions.center = JSON.parse(a.center), this.imageOptions.bbox = d, this.imageOptions.bounds = a.bounds, b && b.options && (this.imageOptions.basemap = b);
                                var f = !1,
                                    g = this._getLayerByType(a.layers, "namedmap");
                                if (g) {
                                    var h = this._getLayerByType(a.layers, "torque");
                                    h && h.options && h.options.named_map && h.options.named_map.name === g.options.named_map.name && (f = !0) }
                                var i = [],
                                    j = this._getBasemapLayer();
                                j && i.push(j);
                                for (var k, l = 1; l < a.layers.length; l++) {
                                    var m = a.layers[l];
                                    if ("torque" !== m.type || f) {
                                        if ("namedmap" === m.type) i.push(this._getNamedmapLayerDefinition(m));
                                        else if ("tiled" === m.type) k = this._getHTTPLayer(m);
                                        else if ("torque" !== m.type && "namedmap" !== m.type)
                                            for (var n = this._getLayergroupLayerDefinition(m), o = 0; o < n.length; o++) i.push(n[o]) } else i.push(this._getTorqueLayerDefinition(m)) }
                                k && i.push(k), this.options.layers = { layers: i }, this._requestLayerGroupID() } },
                        _getDataLayer: function(a) {
                            return this._getLayerByType(a, "namedmap") || this._getLayerByType(a, "layergroup") || this._getLayerByType(a, "torque") },
                        visibleLayers: function() {
                            return this.options.layers.layers },
                        _getLayerByType: function(a, b) {
                            return _.find(a, function(a) {
                                return a.type === b }) },
                        _setupTilerConfiguration: function(a, b, c) { this.options.tiler_domain = b, this.options.tiler_protocol = a, this.options.tiler_port = c, this._buildMapsApiTemplate(this.options) },
                        toJSON: function() {
                            return this.options.layers },
                        _requestLayerGroupID: function() {
                            var a = this;
                            this.createMap(function(b, c) {
                                c && (a.error = c), b && (a.imageOptions.layergroupid = b.layergroupid, a.cdn_url = b.cdn_url), a.queue.flush(this)
                            })
                        },
                        _getDefaultBasemapLayer: function() {
                            return { type: "http", options: { urlTemplate: this.defaults.basemap_url_template, subdomains: this.defaults.basemap_subdomains } } },
                        _getHTTPLayer: function(a) {
                            var b = a.options.urlTemplate;
                            return b ? { type: "http", options: { urlTemplate: b, subdomains: a.options.subdomains || this.defaults.basemap_subdomains } } : null },
                        _getPlainBasemapLayer: function(a) {
                            return { type: "plain", options: { color: a } } },
                        _getBasemapLayer: function() {
                            var a = this.userOptions.basemap || this.imageOptions.basemap;
                            if (a) {
                                var b = a.type.toLowerCase();
                                return a.options && a.options.type && (b = a.options.type.toLowerCase()), "plain" === b ? this._getPlainBasemapLayer(a.options.color) : this._getHTTPLayer(a) }
                            return this._getDefaultBasemapLayer() },
                        _getTorqueLayerDefinition: function(a) {
                            if (a.options.named_map) return this._getNamedmapLayerDefinition(a);
                            var b = new LayerDefinition(a, a.options),
                                c = b.options.query || "SELECT * FROM " + b.options.table_name,
                                d = a.options.tile_style;
                            return { type: "torque", options: { step: this.userOptions.step || 0, sql: c, cartocss: d } } },
                        _getLayergroupLayerDefinition: function(a) {
                            var b = a.options;
                            b.layer_definition.layers = this._getVisibleLayers(b.layer_definition.layers);
                            var c = new LayerDefinition(b.layer_definition, b);
                            return c.toJSON().layers },
                        _getNamedmapLayerDefinition: function(a) {
                            var b = a.options,
                                c = new NamedMap(b.named_map, b),
                                b = { name: c.named_map.name };
                            return this.auth_tokens && this.auth_tokens.length > 0 && (b.auth_tokens = this.auth_tokens), { type: "named", options: b } },
                        _getVisibleLayers: function(a) {
                            return _.filter(a, function(a) {
                                return a.visible }) },
                        _getUrl: function() {
                            var a = (this.options.user_name, this.imageOptions.bbox),
                                b = this.imageOptions.layergroupid,
                                c = this.imageOptions.zoom || this.defaults.zoom,
                                d = this.imageOptions.center || this.defaults.center,
                                e = this.imageOptions.size || this.defaults.size,
                                f = this.imageOptions.format || this.defaults.format,
                                g = d[0],
                                h = d[1],
                                i = e[0],
                                j = e[1],
                                k = this.isHttps() ? null : "a",
                                l = this._host(k) + this.endPoint;
                            return a && a.length && !this.userOptions.override_bbox ? [l, "static/bbox", b, a.join(","), i, j + "." + f].join("/") : [l, "static/center", b, c, g, h, i, j + "." + f].join("/") },
                        _getUUID: function() {
                            var a = function() {
                                return (65536 * (1 + Math.random()) | 0).toString(16).substring(1) };
                            return a() + a() + "-" + a() + "-" + a() + "-" + a() + "-" + a() + a() + a() },
                        _set: function(a, b) {
                            var c = this;
                            return this.queue.add(function() { c.imageOptions[a] = b }), this },
                        zoom: function(a) {
                            return this._set("zoom", a) },
                        bbox: function(a) {
                            return this._set("bbox", a) },
                        center: function(a) {
                            return this._set("bbox", null), this._set("center", a) },
                        format: function(a) {
                            return this._set("format", _.include(this.supported_formats, a) ? a : this.defaults.format) },
                        size: function(a, b) {
                            return this._set("size", [a, void 0 === b ? a : b]) },
                        into: function(a) {
                            var b = this;
                            return a instanceof HTMLImageElement ? (this.imageOptions.size = [a.width, a.height], void this.queue.add(function(c) { a.src = b._getUrl() })) : void cartodb.log.error("img should be an image") },
                        getUrl: function(a) {
                            var b = this;
                            this.queue.add(function() { a && a(b.error, b._getUrl()) }) },
                        write: function(a) {
                            var b = this;
                            return this.imageOptions.attributes = a, a && a.src ? document.write('<img id="' + this.imageOptions.temp_id + '" src="' + a.src + '" />') : document.write('<img id="' + this.imageOptions.temp_id + '" />'), this.queue.add(function() {
                                var a = document.getElementById(b.imageOptions.temp_id);
                                a.src = b._getUrl(), a.removeAttribute("temp_id");
                                var c = b.imageOptions.attributes;
                                c && c["class"] && a.setAttribute("class", c["class"]), c && c.id && a.setAttribute("id", c.id) }), this }
                    }), cdb.Image = function(a, b) { b || (b = {});
                        var c = new StaticImage;
                        return "string" == typeof a ? c.load(a, b) : c.loadLayerDefinition(a, b), c }
                }(),
                function() { cdb.vis.Overlay.register("logo", function(a, b) {}), cdb.vis.Overlay.register("slides_controller", function(a, b) {
                        var c = new cdb.geo.ui.SlidesController({ transitions: a.transitions, visualization: b });
                        return c.render() }), cdb.vis.Overlay.register("mobile", function(a, b) {
                        var c = cdb.core.Template.compile(a.template || '    <div class="backdrop"></div>    <div class="cartodb-header">      <div class="content">        <a href="#" class="fullscreen"></a>        <a href="#" class="toggle"></a>        </div>      </div>    </div>    <div class="aside">    <div class="layer-container">    <div class="scrollpane"><ul class="layers"></ul></div>    </div>    </div>    <div class="cartodb-attribution"></div>    <a href="#" class="cartodb-attribution-button"></a>    <div class="torque"></div>    ', a.templateType || "mustache"),
                            d = new cdb.geo.ui.Mobile({ template: c, mapView: b.mapView, overlays: a.overlays, transitions: a.transitions, slides_data: a.slides, visualization: b, layerView: a.layerView, visibility_options: a.options, torqueLayer: a.torqueLayer, map: a.map });
                        return d.render() }), cdb.vis.Overlay.register("image", function(a, b) {
                        var c = a.options,
                            d = cdb.core.Template.compile(a.template || '    <div class="content">    <div class="text widget_text">{{{ content }}}</div>    </div>', a.templateType || "mustache"),
                            e = new cdb.geo.ui.Image({ model: new cdb.core.Model(c), template: d });
                        return e.render() }), cdb.vis.Overlay.register("text", function(a, b) {
                        var c = a.options,
                            d = cdb.core.Template.compile(a.template || '    <div class="content">    <div class="text widget_text">{{{ text }}}</div>    </div>', a.templateType || "mustache"),
                            e = new cdb.geo.ui.Text({ model: new cdb.core.Model(c), template: d, className: "cartodb-overlay overlay-text " + c.device });
                        return e.render() }), cdb.vis.Overlay.register("annotation", function(a, b) {
                        var c = a.options,
                            d = cdb.core.Template.compile(a.template || '    <div class="content">    <div class="text widget_text">{{{ text }}}</div>    <div class="stick"><div class="ball"></div></div>    </div>', a.templateType || "mustache"),
                            c = a.options,
                            e = new cdb.geo.ui.Annotation({ className: "cartodb-overlay overlay-annotation " + c.device, template: d, mapView: b.mapView, device: c.device, text: c.extra.rendered_text, minZoom: c.style["min-zoom"], maxZoom: c.style["max-zoom"], latlng: c.extra.latlng, style: c.style });
                        return e.render() }), cdb.vis.Overlay.register("zoom_info", function(a, b) {}), cdb.vis.Overlay.register("header", function(a, b) {
                        var c = a.options,
                            d = cdb.core.Template.compile(a.template || '    <div class="content">    <div class="title">{{{ title }}}</div>    <div class="description">{{{ description }}}</div>    </div>', a.templateType || "mustache"),
                            e = new cdb.geo.ui.Header({ model: new cdb.core.Model(c), transitions: a.transitions, slides: b.slides, template: d });
                        return e.render() }), cdb.vis.Overlay.register("zoom", function(a, b) {
                        if (!a.template) return void b.trigger("error", "zoom template is empty");
                        var c = new cdb.geo.ui.Zoom({ model: a.map, template: cdb.core.Template.compile(a.template) });
                        return c.render() }), cdb.vis.Overlay.register("loader", function(a) {
                        var b = new cdb.geo.ui.TilesLoader({ template: cdb.core.Template.compile(a.template) });
                        return b.render() }), cdb.vis.Overlay.register("time_slider", function(a, b) {
                        var c = new cdb.geo.ui.TimeSlider(a);
                        return c.render() }), cdb.vis.Overlay.register("_header", function(a, b) {
                        function c(a, b) {
                            return a.substr(0, b - 1) + (a.length > b ? "â€¦" : "") }
                        location.href ? a.share_url = encodeURIComponent(location.href) : a.share_url = a.url;
                        var d, e = cdb.core.Template.compile(a.template || "      {{#title}}        <h1>          {{#url}}            <a href='#' onmousedown=\"window.open('{{url}}')\">{{title}}</a>          {{/url}}          {{^url}}            {{title}}          {{/url}}        </h1>      {{/title}}      {{#description}}<p>{{{description}}}</p>{{/description}}      {{#mobile_shareable}}        <div class='social'>          <a class='facebook' target='_blank'            href='http://www.facebook.com/sharer.php?u={{share_url}}&text=Map of {{title}}: {{description}}'>F</a>          <a class='twitter' href='https://twitter.com/share?url={{share_url}}&text={{twitter_title}}'           target='_blank'>T</a>        </div>      {{/mobile_shareable}}    ", a.templateType || "mustache"),
                            f = a.map.get("title"),
                            g = a.map.get("description"),
                            h = f + ": " + g;
                        d = f && g ? c(f + ": " + g, 112) + " %23map " : f ? c(f, 112) + " %23map" : g ? c(g, 112) + " %23map" : "%23map";
                        var i = "false" != a.shareable && a.shareable ? a.shareable : null,
                            j = i;
                        j = j && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                        var k = new cdb.geo.ui.Header({ title: f, description: g, facebook_title: h, twitter_title: d, url: a.url, share_url: a.share_url, mobile_shareable: j, shareable: i && !j, template: e });
                        return k.render() }), cdb.vis.Overlay.register("infowindow", function(a, b) {
                        if (0 == _.size(a.fields)) return null;
                        var c = new cdb.geo.ui.InfowindowModel({ template: a.template, template_type: a.templateType, alternative_names: a.alternative_names, fields: a.fields, template_name: a.template_name }),
                            d = new cdb.geo.ui.Infowindow({ model: c, mapView: b.mapView, template: a.template });
                        return d }), cdb.vis.Overlay.register("layer_selector", function(a, b) {
                        var c = a.options,
                            d = cdb.core.Template.compile(a.template || '      <a href="#/change-visibility" class="layers">Visible layers<div class="count"></div></a>      ', a.templateType || "underscore"),
                            e = cdb.core.Template.compile(a.template || '      <ul></ul><div class="tail"><span class="border"></span></div>      ', a.templateType || "underscore"),
                            f = new cdb.geo.ui.LayerSelector({ model: new cdb.core.Model(c), mapView: b.mapView, template: d, dropdown_template: e, layer_names: a.layer_names }),
                            g = b.timeSlider;
                        return g && f.bind("change:visible", function(a, b, c) { "torque" === c.get("type") && g[a ? "show" : "hide"]() }), b.legends && f.bind("change:visible", function(a, c, d) {
                            if ("layergroup" === d.get("type") || "torque" === d.get("type")) {
                                var e = b.legends && b.legends.getLegendByIndex(c);
                                e && e[a ? "show" : "hide"]() } }), f.render() }), cdb.vis.Overlay.register("fullscreen", function(a, b) {
                        var c = a.options;
                        c.allowWheelOnFullscreen = !1;
                        var d = cdb.core.Template.compile(a.template || '<a href="{{ mapUrl }}" target="_blank"></a>', a.templateType || "mustache"),
                            e = new cdb.ui.common.FullScreen({ doc: "#map > div", model: new cdb.core.Model(c), mapView: b.mapView, template: d });
                        return e.render() }), cdb.vis.Overlay.register("share", function(a, b) {
                        var c = a.options,
                            d = cdb.core.Template.compile(a.template || '<a href="#"></a>', a.templateType || "mustache"),
                            e = new cdb.geo.ui.Share({ model: new cdb.core.Model(c), vis: b, map: b.map, template: d });
                        return e.createDialog(), e.render() }), cdb.vis.Overlay.register("search", function(a, b) {
                        var c = cdb.core.Template.compile(a.template || '      <form>        <span class="loader"></span>        <input type="text" class="text" value="" />        <input type="submit" class="submit" value="" />      </form>    ', a.templateType || "mustache"),
                            d = new cdb.geo.ui.Search(_.extend(a, { template: c, mapView: b.mapView, model: b.map }));
                        return d.render() }), cdb.vis.Overlay.register("tooltip", function(a, b) {
                        if (!a.layer && b.getLayers().length <= 1) throw new Error("layer is null");
                        return a.layer = a.layer || b.getLayers()[1], a.layer.setInteraction(!0), a.mapView = b.mapView, new cdb.geo.ui.Tooltip(a) }), cdb.vis.Overlay.register("infobox", function(a, b) {
                        var c, d = b.getLayers();
                        if (a.layer || (d.length > 1 && (c = d[1]), a.layer = c), !a.layer) throw new Error("layer is null");
                        a.layer.setInteraction(!0);
                        var e = new cdb.geo.ui.InfoBox(a);
                        return e }) }(),
                function() {
                    function a(a) {
                        for (var b in e)
                            if (-1 !== a.indexOf(b)) return a.replace(b, e[b]);
                        return a }

                    function b(a) {
                        for (var b in e) {
                            var c = e[b];
                            if (-1 !== a.indexOf(c)) return a.replace(c, b) }
                        return a }

                    function c(a, b) { b.infowindow && b.infowindow.fields && (b.interactivity ? -1 === b.interactivity.indexOf("cartodb_id") && (b.interactivity = b.interactivity + ",cartodb_id") : b.interactivity = "cartodb_id"), a.https && (b.tiler_protocol = "https", b.tiler_port = 443, b.sql_api_protocol = "https", b.sql_api_port = 443), b.cartodb_logo = void 0 == a.cartodb_logo ? b.cartodb_logo : a.cartodb_logo }
                    var d = cdb.vis.Layers,
                        e = { "https://dnv9my2eseobd.cloudfront.net/": "http://a.tiles.mapbox.com/", "https://maps.nlp.nokia.com/": "http://maps.nlp.nokia.com/", "https://tile.stamen.com/": "http://tile.stamen.com/", "https://{s}.maps.nlp.nokia.com/": "http://{s}.maps.nlp.nokia.com/", "https://cartocdn_{s}.global.ssl.fastly.net/": "http://{s}.api.cartocdn.com/", "https://cartodb-basemaps-{s}.global.ssl.fastly.net/": "http://{s}.basemaps.cartocdn.com/" };
                    d.register("tilejson", function(c, d) {
                        var e = d.tiles[0];
                        return c.https === !0 ? e = b(e) : c.https === !1 && (e = a(e)), new cdb.geo.TileLayer({ urlTemplate: e }) }), d.register("tiled", function(c, d) {
                        var e = d.urlTemplate;
                        return c.https === !0 ? e = b(e) : c.https === !1 && (e = a(e)), d.urlTemplate = e, new cdb.geo.TileLayer(d) }), d.register("wms", function(a, b) {
                        return new cdb.geo.WMSLayer(b) }), d.register("gmapsbase", function(a, b) {
                        return new cdb.geo.GMapsBaseLayer(b) }), d.register("plain", function(a, b) {
                        return new cdb.geo.PlainLayer(b) }), d.register("background", function(a, b) {
                        return new cdb.geo.PlainLayer(b) });
                    var f = function(a, b) {
                        return c(a, b), b.sublayers ? (b.type = "layergroup", new cdb.geo.CartoDBGroupLayer(b)) : new cdb.geo.CartoDBLayer(b) };
                    d.register("cartodb", f), d.register("carto", f), d.register("layergroup", function(a, b) {
                        return c(a, b), new cdb.geo.CartoDBGroupLayer(b) }), d.register("namedmap", function(a, b) {
                        return c(a, b), new cdb.geo.CartoDBNamedMapLayer(b) }), d.register("torque", function(a, b) {
                        return c(a, b), a.https && b.sql_api_domain && -1 !== b.sql_api_domain.indexOf("carto.com") && (b.sql_api_protocol = "https", b.sql_api_port = 443, b.tiler_protocol = "https", b.tiler_port = 443), b.cartodb_logo = void 0 == a.cartodb_logo ? b.cartodb_logo : a.cartodb_logo, new cdb.geo.TorqueLayer(b) }) }(),
                function() {
                    function a() {}

                    function b(a) {
                        var b = a.host || "carto.com",
                            c = a.protocol || "https";
                        return c + "://" + a.user + "." + b + "/api/v1/viz/" + a.table + "/viz.json" }

                    function c(a, c) {
                        var d = null;
                        return void 0 !== a.layers || void 0 !== (a.kind || a.type) ? void _.defer(function() { c(a) }) : (void 0 !== a.table && void 0 !== a.user ? d = b(a) : a.indexOf && (d = a), void(d ? cdb.core.Loader.get(d, c) : _.defer(function() { c(null) }))) }
                    _.extend(a.prototype, Backbone.Events, { done: function(a) {
                            return this.bind("done", a) }, error: function(a) {
                            return this.bind("error", a) } }), cdb._Promise = a;
                    cartodb.createLayer = function(b, d, e, f) {
                        if (void 0 === b) throw new TypeError("map should be provided");
                        if (void 0 === d) throw new TypeError("layer should be provided");
                        var g, h, e = e || {},
                            i = arguments,
                            j = i[i.length - 1];
                        _.isFunction(j) && (f = j);
                        var k = new a;
                        return k.addTo = function(a, b) {
                            return k.on("done", function() { h.addLayerToMap(g, a, b) }), k }, c(d, function(a) {
                            function c() { g = l.createLayer(d, { no_base_layer: !0 });
                                var a, c = /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                                    h = e.mobile_layout && c || e.force_mobile;
                                if (!g) return k.trigger("error", "layer not supported"), k;
                                if (e.infowindow && l.addInfowindow(g), e.tooltip && l.addTooltip(g), e.legends) {
                                    var i = cdb.vis.Layers.create(d.type || d.kind, l, d);
                                    l._addLegends(l._createLayerLegendView(i.attributes, g)) }
                                e.time_slider && "torque" === g.model.get("type") && (h || l.addTimeSlider(g), a = g), h && (e.mapView = b.viz.mapView, l.addOverlay({ type: "mobile", layerView: g, overlays: [], torqueLayer: a, options: e })), f && f(g), k.trigger("done", g) }
                            var d;
                            if (!a) return void k.trigger("error");
                            if (a.layers) { a.layers.length < 2 && k.trigger("error", "visualization file does not contain layer info");
                                var i = e.layerIndex;
                                if (void 0 !== i) {
                                    if (a.layers.length <= i) return void k.trigger("error", "layerIndex out of bounds");
                                    d = a.layers[i] } else {
                                    var j = ["namedmap", "layergroup", "torque"];
                                    d = _.find(a.layers, function(a) {
                                        return -1 !== j.indexOf(a.type) }) } } else d = a;
                            if (!d) return void k.trigger("error");
                            if (e && !_.isFunction(e) && (d.options = d.options || {}, _.extend(d.options, e)), e = _.defaults(e, { infowindow: !0, https: !1, legends: !0, time_slider: !0, tooltip: !0 }), "undefined" != typeof b.overlayMapTypes) h = cdb.geo.GoogleMapsMapView;
                            else {
                                if (!(b instanceof L.Map || window.L && b instanceof window.L.Map)) return k.trigger("error", "cartodb.js can't guess the map type"), k;
                                h = cdb.geo.LeafletMapView }
                            var l = b.viz;
                            if (!l) {
                                var m = new h({ map_object: b, map: new cdb.geo.Map });
                                b.viz = l = new cdb.vis.Vis({ mapView: m }), l.updated_at = a.updated_at, l.https = e.https }
                            l.checkModules([d]) ? c() : l.loadModules([d], function() { c() }) }), k } }(),
                function() {
                    function a(b) {
                        if (cartodb === this || window === this) return new a(b);
                        if (!b.user) throw new Error("user should be provided");
                        var c = new String(window.location.protocol);
                        if (c = c.slice(0, c.length - 1), "file" == c && (c = "https"), this.ajax = b.ajax || ("undefined" != typeof jQuery ? jQuery.ajax : reqwest), !this.ajax) throw new Error("jQuery or reqwest should be loaded");
                        if (this.options = _.defaults(b, { version: "v2", protocol: c, jsonp: "undefined" != typeof jQuery ? !jQuery.support.cors : !1 }), !this.options.sql_api_template) {
                            var d = this.options,
                                e = null;
                            if (d && d.completeDomain) e = d.completeDomain;
                            else {
                                var f = d.host || "carto.com",
                                    g = d.protocol || "https";
                                e = g + "://{user}." + f }
                            this.options.sql_api_template = e } }

                    function b(a) {
                        return JSON.parse(a.replace(/^{/, "[").replace(/}$/, "]")) }
                    var c = this;
                    c.cartodb = c.cartodb || {}, a.prototype._host = function() {
                        var a = this.options;
                        return a.sql_api_template.replace("{user}", a.user) + "/api/" + a.version + "/sql" }, a.prototype.execute = function(a, b, c, d) {
                        var e = 1024,
                            f = new cartodb._Promise;
                        if (!a) throw new TypeError("sql should not be null");
                        var g = arguments,
                            h = g[g.length - 1];
                        _.isFunction(h) && (d = h), c = _.defaults(c || {}, this.options);
                        var i = { type: "get", dataType: "json", crossDomain: !0 };
                        void 0 !== c.cache && (i.cache = c.cache), c.jsonp && (delete i.crossDomain, c.jsonpCallback && (i.jsonpCallback = c.jsonpCallback), i.dataType = "jsonp");
                        var j = "156543.03515625",
                            k = "ST_MakeEnvelope(-20037508.5,-20037508.5,20037508.5,20037508.5,3857)";
                        a = a.replace("!bbox!", k).replace("!pixel_width!", j).replace("!pixel_height!", j);
                        var l = Mustache.render(a, b),
                            m = l.length < e,
                            n = ["format", "dp", "api_key"];
                        if (c.extra_params && (n = n.concat(c.extra_params)), i.url = this._host(), m) {
                            var o = "q=" + encodeURIComponent(l);
                            for (var p in n) {
                                var q = n[p],
                                    r = c[q];
                                r && (o += "&" + q + "=" + r) }
                            i.url += "?" + o } else {
                            var s = { q: l };
                            for (var p in n) {
                                var q = n[p],
                                    r = c[q];
                                r && (s[q] = r) }
                            i.data = s, "undefined" != typeof jQuery ? i.type = "post" : i.method = "post" }
                        var t = c.success,
                            u = c.error;
                        return t && delete c.success, u && delete u.success, i.error = function(a) {
                            var b = a.responseText || a.response,
                                c = b && JSON.parse(b);
                            f.trigger("error", c && c.error, a), u && u(a) }, i.success = function(a, b, c) { void 0 == b && (b = a.status, c = a, a = JSON.parse(a.response)), setTimeout(function() { f.trigger("done", a, b, c), t && t(a, b, c), d && d(a) }, 0) }, delete c.jsonp, this.ajax(_.extend(i, c)), f }, a.prototype.getBounds = function(a, b, c, d) {
                        var e = new cartodb._Promise,
                            f = arguments,
                            g = f[f.length - 1];
                        _.isFunction(g) && (d = g);
                        var h = "SELECT ST_XMin(ST_Extent(the_geom)) as minx,       ST_YMin(ST_Extent(the_geom)) as miny,       ST_XMax(ST_Extent(the_geom)) as maxx,       ST_YMax(ST_Extent(the_geom)) as maxy from ({{{ sql }}}) as subq";
                        return a = Mustache.render(a, b), this.execute(h, { sql: a }, c).done(function(a) {
                            if (a.rows && a.rows.length > 0 && null != a.rows[0].maxx) {
                                var b = a.rows[0],
                                    c = -85.0511,
                                    f = 85.0511,
                                    g = -179,
                                    h = 179,
                                    i = function(a, b, c) {
                                        return b > a ? b : a > c ? c : a },
                                    j = i(b.maxx, g, h),
                                    k = i(b.minx, g, h),
                                    l = i(b.maxy, c, f),
                                    m = i(b.miny, c, f),
                                    n = [
                                        [l, j],
                                        [m, k]
                                    ];
                                e.trigger("done", n), d && d(n) } }).error(function(a) { e.trigger("error", a) }), e }, a.prototype.table = function(a) {
                        function b() { b.fetch.apply(b, arguments) }
                        var c, d, e, f, g = a,
                            h = [],
                            i = this;
                        return b.fetch = function(a) { a = a || {};
                            var c = arguments,
                                d = c[c.length - 1];
                            _.isFunction(d) && (callback = d, 1 === c.length && (a = {})), i.execute(b.sql(), a, callback) }, b.sql = function() {
                            var a = "select";
                            return a += h.length ? " " + h.join(",") + " " : " * ", a += "from " + g, c && (a += " where " + c), d && (a += " limit " + d), e && (a += " order by " + e), f && (a += " " + f), a }, b.filter = function(a) {
                            return c = a, b }, b.order_by = function(a) {
                            return e = a, b }, b.asc = function() {
                            return f = "asc", b }, b.desc = function() {
                            return f = "desc", b }, b.columns = function(a) {
                            return h = a, b }, b.limit = function(a) {
                            return d = a, b }, b }, a.prototype.describeString = function(a, c, d) {
                        var e = ["WITH t as (", "        SELECT count(*) as total,", "               count(DISTINCT {{column}}) as ndist", "        FROM ({{sql}}) _wrap", "      ), a as (", "        SELECT ", "          count(*) cnt, ", "          {{column}}", "        FROM ", "          ({{sql}}) _wrap ", "        GROUP BY ", "          {{column}} ", "        ORDER BY ", "          cnt DESC", "        ), b As (", "         SELECT", "          row_number() OVER (ORDER BY cnt DESC) rn,", "          cnt", "         FROM a", "        ), c As (", "        SELECT ", "          sum(cnt) OVER (ORDER BY rn ASC) / t.total cumperc,", "          rn,", "          cnt ", "         FROM b, t", "         LIMIT 10", "         ),", "stats as (", "select count(distinct({{column}})) as uniq, ", "       count(*) as cnt, ", "       sum(case when COALESCE(NULLIF({{column}},'')) is null then 1 else 0 end)::numeric as null_count, ", "       sum(case when COALESCE(NULLIF({{column}},'')) is null then 1 else 0 end)::numeric / count(*)::numeric as null_ratio, ", "       (SELECT max(cumperc) weight FROM c) As skew ", "from ({{sql}}) __wrap", "),", "hist as (", "select array_agg(row(d, c)) array_agg from (select distinct({{column}}) d, count(*) as c from ({{sql}}) __wrap, stats group by 1 limit 100) _a", ")", "select * from stats, hist"],
                            f = Mustache.render(e.join("\n"), { column: c, sql: a }),
                            g = function(a) {
                                var b = a.replace(/^"(.+(?="$))?"$/, "$1");
                                return b.replace(/""/g, '"') };
                        this.execute(f, function(a) {
                            var c = a.rows[0],
                                e = 0,
                                f = [];
                            try {
                                var h = b(c.array_agg),
                                    f = _(h).map(function(a) {
                                        var b = a.match(/\((.*),(\d+)/),
                                            c = g(b[1]);
                                        return [c, +b[2]] });
                                e = c.skew * (1 - c.null_ratio) * (1 - c.uniq / c.cnt) * (c.uniq > 1 ? 1 : 0) } catch (i) {}
                            d({ type: "string", hist: f, distinct: c.uniq, count: c.cnt, null_count: c.null_count, null_ratio: c.null_ratio, skew: c.skew, weight: e }) }) }, a.prototype.describeDate = function(a, b, c) {
                        var d = ["with minimum as (", "SELECT min({{column}}) as start_time FROM ({{sql}}) _wrap), ", "maximum as (SELECT max({{column}}) as end_time FROM ({{sql}}) _wrap), ", "null_ratio as (SELECT sum(case when {{column}} is null then 1 else 0 end)::numeric / count(*)::numeric as null_ratio FROM ({{sql}}) _wrap), ", "moments as (SELECT count(DISTINCT {{column}}) as moments FROM ({{sql}}) _wrap)", "SELECT * FROM minimum, maximum, moments, null_ratio"],
                            e = Mustache.render(d.join("\n"), { column: b, sql: a });
                        this.execute(e, function(a) {
                            var b = a.rows[0],
                                d = new Date(b.end_time),
                                e = new Date(b.start_time),
                                f = (b.moments, Math.min(b.moments, 1024));
                            c({ type: "date", start_time: e, end_time: d, range: d - e, steps: f, null_ratio: b.null_ratio }) }) }, a.prototype.describeBoolean = function(a, b, c) {
                        var d = ["with stats as (", "select count(distinct({{column}})) as uniq,", "count(*) as cnt", "from ({{sql}}) _wrap ", "),", "null_ratio as (", "SELECT sum(case when {{column}} is null then 1 else 0 end)::numeric / count(*)::numeric as null_ratio FROM ({{sql}}) _wrap), ", "true_ratio as (", "SELECT sum(case when {{column}} is true then 1 else 0 end)::numeric / count(*)::numeric as true_ratio FROM ({{sql}}) _wrap) ", "SELECT * FROM true_ratio, null_ratio, stats"],
                            e = Mustache.render(d.join("\n"), { column: b, sql: a });
                        this.execute(e, function(a) {
                            var b = a.rows[0];
                            c({ type: "boolean", null_ratio: b.null_ratio, true_ratio: b.true_ratio, distinct: b.uniq, count: b.cnt }) }) }, a.prototype.describeGeom = function(a, b, c) {
                        function d(a) {
                            return { st_multipolygon: "polygon", st_polygon: "polygon", st_multilinestring: "line", st_linestring: "line", st_multipoint: "point", st_point: "point" }[a.toLowerCase()] }
                        var e = ["with stats as (", "select st_asgeojson(st_extent({{column}})) as bbox", "from ({{sql}}) _wrap", "),", "geotype as (", "select st_geometrytype({{column}}) as geometry_type from ({{sql}}) _w where {{column}} is not null limit 1", "),", "clusters as (", "with clus as (", "SELECT distinct(ST_snaptogrid(the_geom, 10)) as cluster, count(*) as clustercount FROM ({{sql}}) _wrap group by 1 order by 2 desc limit 3),", "total as (", "SELECT count(*) FROM ({{sql}}) _wrap)", "SELECT sum(clus.clustercount)/sum(total.count) AS clusterrate FROM clus, total", "),", "density as (", "SELECT count(*) / st_area(st_extent(the_geom)) as density FROM ({{sql}}) _wrap", ")", "select * from stats, geotype, clusters, density"],
                            f = Mustache.render(e.join("\n"), { column: b, sql: a });
                        this.execute(f, function(a) {
                            var b = a.rows[0],
                                e = JSON.parse(b.bbox).coordinates[0];
                            c({ type: "geom", bbox: [
                                    [e[0][0], e[0][1]],
                                    [e[2][0], e[2][1]]
                                ], geometry_type: b.geometry_type, simplified_geometry_type: d(b.geometry_type), cluster_rate: b.clusterrate, density: b.density }) }) }, a.prototype.columns = function(a, b, c) {
                        var d = arguments,
                            e = d[d.length - 1];
                        _.isFunction(e) && (c = e);
                        var f = "select * from (" + a + ") __wrap limit 0",
                            g = ["cartodb_id", "latitude", "longitude", "created_at", "updated_at", "lat", "lon", "the_geom_webmercator"];
                        this.execute(f, function(a) {
                            var b = {};
                            for (var d in a.fields) - 1 === g.indexOf(d) && (b[d] = a.fields[d].type);
                            c(b) }) }, a.prototype.describeFloat = function(a, c, d) {
                        var e = ["with stats as (", "select min({{column}}) as min,", "max({{column}}) as max,", "avg({{column}}) as avg,", "count(DISTINCT {{column}}) as cnt,", "count(distinct({{column}})) as uniq,", "count(*) as cnt,", "sum(case when {{column}} is null then 1 else 0 end)::numeric / count(*)::numeric as null_ratio,", "stddev_pop({{column}}) / count({{column}}) as stddev,", "CASE WHEN abs(avg({{column}})) > 1e-7 THEN stddev({{column}}) / abs(avg({{column}})) ELSE 1e12 END as stddevmean,", 'CDB_DistType(array_agg("{{column}}"::numeric)) as dist_type ', "from ({{sql}}) _wrap ", "),", "params as (select min(a) as min, (max(a) - min(a)) / 7 as diff from ( select {{column}} as a from ({{sql}}) _table_sql where {{column}} is not null ) as foo ),", "histogram as (", "select array_agg(row(bucket, range, freq)) as hist from (", "select CASE WHEN uniq > 1 then width_bucket({{column}}, min-0.01*abs(min), max+0.01*abs(max), 100) ELSE 1 END as bucket,", "numrange(min({{column}})::numeric, max({{column}})::numeric) as range,", "count(*) as freq", "from ({{sql}}) _w, stats", "group by 1", "order by 1", ") __wrap", "),", "hist as (", "select array_agg(row(d, c)) cat_hist from (select distinct({{column}}) d, count(*) as c from ({{sql}}) __wrap, stats group by 1 limit 100) _a", "),", "buckets as (", "select CDB_QuantileBins(array_agg(distinct({{column}}::numeric)), 7) as quantiles, ", "       (select array_agg(x::numeric) FROM (SELECT (min + n * diff)::numeric as x FROM generate_series(1,7) n, params) p) as equalint,", "       CDB_JenksBins(array_agg(distinct({{column}}::numeric)), 7) as jenks, ", "       CDB_HeadsTailsBins(array_agg(distinct({{column}}::numeric)), 7) as headtails ", "from ({{sql}}) _table_sql where {{column}} is not null", ")", "select * from histogram, stats, buckets, hist"],
                            f = Mustache.render(e.join("\n"), { column: c, sql: a });
                        this.execute(f, function(a) {
                            var c = a.rows[0],
                                e = b(c.hist),
                                f = b(c.cat_hist);
                            d({ type: "number", cat_hist: _(f).map(function(a) {
                                    var b = a.match(/\((.*),(\d+)/);
                                    return [+b[1], +b[2]] }), hist: _(e).map(function(a) {
                                    if (!(a.indexOf("empty") > -1)) {
                                        var b = a.split('"');
                                        return { index: b[0].replace(/\D/g, ""), range: b[1].split(",").map(function(a) {
                                                return a.replace(/\D/g, "") }), freq: b[2].replace(/\D/g, "") } } }), stddev: c.stddev, null_ratio: c.null_ratio, count: c.cnt, distinct: c.uniq, avg: c.avg, max: c.max, min: c.min, stddevmean: c.stddevmean, weight: (c.uniq > 1 ? 1 : 0) * (1 - c.null_ratio) * (c.stddev < -1 ? 1 : c.stddev < 1 ? .5 : c.stddev < 3 ? .25 : .1), quantiles: c.quantiles, equalint: c.equalint, jenks: c.jenks, headtails: c.headtails, dist_type: c.dist_type }) }) }, a.prototype.describe = function(a, b, c) {
                        var d = this,
                            e = arguments,
                            f = e[e.length - 1];
                        if (_.isFunction(f)) var g = f;
                        var h = function(a) { a.column = b, g(a) },
                            i = "select * from (" + a + ") __wrap limit 0";
                        this.execute(i, function(e) {
                            var f = c && c.type ? c.type : e.fields[b].type;
                            return f ? void("string" === f ? d.describeString(a, b, h) : "number" === f ? d.describeFloat(a, b, h) : "geometry" === f ? d.describeGeom(a, b, h) : "date" === f ? d.describeDate(a, b, h) : "boolean" === f ? d.describeBoolean(a, b, h) : h(new Error("column type is not supported"))) : void h(new Error("column does not exist")) }) }, c.cartodb.SQL = a }(),
                function() { cartodb.createVis = function(a, b, c, d) {
                        if (!a) throw new TypeError("a DOM element should be provided");
                        var e = arguments,
                            f = e[e.length - 1];
                        _.isFunction(f) && (d = f), a = "string" == typeof a ? document.getElementById(a) : a;
                        var g = new cartodb.vis.Vis({ el: a });
                        return b && (g.load(b, c), d && g.done(d)), g } }(), cdb.$ = $, cdb.L = L, cdb.Mustache = Mustache, cdb.Backbone = Backbone, cdb._ = _
        }();
    for (var i in __prev) __prev[i] && (window[i] = __prev[i])
}();
