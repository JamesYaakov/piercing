! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}(function(e) {
    var t = function() {
            if (e && e.fn && e.fn.select2 && e.fn.select2.amd) var t = e.fn.select2.amd;
            return function() {
                var e, n, i;
                t && t.requirejs || (t ? n = t : t = {}, function(t) {
                    function r(e, t) {
                        return $.call(e, t)
                    }

                    function o(e, t) {
                        var n, i, r, o, s, a, l, c, u, d, p, h = t && t.split("/"),
                            f = y.map,
                            g = f && f["*"] || {};
                        if (e && "." === e.charAt(0))
                            if (t) {
                                for (s = (e = e.split("/")).length - 1, y.nodeIdCompat && b.test(e[s]) && (e[s] = e[s].replace(b, "")), e = h.slice(0, h.length - 1).concat(e), u = 0; u < e.length; u += 1)
                                    if ("." === (p = e[u])) e.splice(u, 1), u -= 1;
                                    else if (".." === p) {
                                    if (1 === u && (".." === e[2] || ".." === e[0])) break;
                                    u > 0 && (e.splice(u - 1, 2), u -= 2)
                                }
                                e = e.join("/")
                            } else 0 === e.indexOf("./") && (e = e.substring(2));
                        if ((h || g) && f) {
                            for (u = (n = e.split("/")).length; u > 0; u -= 1) {
                                if (i = n.slice(0, u).join("/"), h)
                                    for (d = h.length; d > 0; d -= 1)
                                        if ((r = f[h.slice(0, d).join("/")]) && (r = r[i])) {
                                            o = r, a = u;
                                            break
                                        }
                                if (o) break;
                                !l && g && g[i] && (l = g[i], c = u)
                            }!o && l && (o = l, a = c), o && (n.splice(0, a, o), e = n.join("/"))
                        }
                        return e
                    }

                    function s(e, n) {
                        return function() {
                            var i = w.call(arguments, 0);
                            return "string" != typeof i[0] && 1 === i.length && i.push(null), h.apply(t, i.concat([e, n]))
                        }
                    }

                    function a(e) {
                        return function(t) {
                            return o(t, e)
                        }
                    }

                    function l(e) {
                        return function(t) {
                            m[e] = t
                        }
                    }

                    function c(e) {
                        if (r(v, e)) {
                            var n = v[e];
                            delete v[e], _[e] = !0, p.apply(t, n)
                        }
                        if (!r(m, e) && !r(_, e)) throw new Error("No " + e);
                        return m[e]
                    }

                    function u(e) {
                        var t, n = e ? e.indexOf("!") : -1;
                        return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)), [t, e]
                    }

                    function d(e) {
                        return function() {
                            return y && y.config && y.config[e] || {}
                        }
                    }
                    var p, h, f, g, m = {},
                        v = {},
                        y = {},
                        _ = {},
                        $ = Object.prototype.hasOwnProperty,
                        w = [].slice,
                        b = /\.js$/;
                    f = function(e, t) {
                        var n, i = u(e),
                            r = i[0];
                        return e = i[1], r && (n = c(r = o(r, t))), r ? e = n && n.normalize ? n.normalize(e, a(t)) : o(e, t) : (r = (i = u(e = o(e, t)))[0], e = i[1], r && (n = c(r))), {
                            f: r ? r + "!" + e : e,
                            n: e,
                            pr: r,
                            p: n
                        }
                    }, g = {
                        require: function(e) {
                            return s(e)
                        },
                        exports: function(e) {
                            var t = m[e];
                            return void 0 !== t ? t : m[e] = {}
                        },
                        module: function(e) {
                            return {
                                id: e,
                                uri: "",
                                exports: m[e],
                                config: d(e)
                            }
                        }
                    }, p = function(e, n, i, o) {
                        var a, u, d, p, h, y, $ = [],
                            w = typeof i;
                        if (o = o || e, "undefined" === w || "function" === w) {
                            for (n = !n.length && i.length ? ["require", "exports", "module"] : n, h = 0; h < n.length; h += 1)
                                if ("require" === (u = (p = f(n[h], o)).f)) $[h] = g.require(e);
                                else if ("exports" === u) $[h] = g.exports(e), y = !0;
                            else if ("module" === u) a = $[h] = g.module(e);
                            else if (r(m, u) || r(v, u) || r(_, u)) $[h] = c(u);
                            else {
                                if (!p.p) throw new Error(e + " missing " + u);
                                p.p.load(p.n, s(o, !0), l(u), {}), $[h] = m[u]
                            }
                            d = i ? i.apply(m[e], $) : void 0, e && (a && a.exports !== t && a.exports !== m[e] ? m[e] = a.exports : d === t && y || (m[e] = d))
                        } else e && (m[e] = i)
                    }, e = n = h = function(e, n, i, r, o) {
                        if ("string" == typeof e) return g[e] ? g[e](n) : c(f(e, n).f);
                        if (!e.splice) {
                            if ((y = e).deps && h(y.deps, y.callback), !n) return;
                            n.splice ? (e = n, n = i, i = null) : e = t
                        }
                        return n = n || function() {}, "function" == typeof i && (i = r, r = o), r ? p(t, e, n, i) : setTimeout(function() {
                            p(t, e, n, i)
                        }, 4), h
                    }, h.config = function(e) {
                        return h(e)
                    }, e._defined = m, (i = function(e, t, n) {
                        if ("string" != typeof e) throw new Error("See almond README: incorrect module build, no module name");
                        t.splice || (n = t, t = []), r(m, e) || r(v, e) || (v[e] = [e, t, n])
                    }).amd = {
                        jQuery: !0
                    }
                }(), t.requirejs = e, t.require = n, t.define = i)
            }(), t.define("almond", function() {}), t.define("jquery", [], function() {
                var t = e || $;
                return null == t && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), t
            }), t.define("select2/utils", ["jquery"], function(e) {
                function t(e) {
                    var t = e.prototype,
                        n = [];
                    for (var i in t) {
                        "function" == typeof t[i] && "constructor" !== i && n.push(i)
                    }
                    return n
                }
                var n = {
                        Extend: function(e, t) {
                            function n() {
                                this.constructor = e
                            }
                            var i = {}.hasOwnProperty;
                            for (var r in t) i.call(t, r) && (e[r] = t[r]);
                            return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
                        },
                        Decorate: function(e, n) {
                            function i() {
                                var t = Array.prototype.unshift,
                                    i = n.prototype.constructor.length,
                                    r = e.prototype.constructor;
                                i > 0 && (t.call(arguments, e.prototype.constructor), r = n.prototype.constructor), r.apply(this, arguments)
                            }

                            function r() {
                                this.constructor = i
                            }
                            var o = t(n),
                                s = t(e);
                            n.displayName = e.displayName, i.prototype = new r;
                            for (var a = 0; a < s.length; a++) {
                                var l = s[a];
                                i.prototype[l] = e.prototype[l]
                            }
                            for (var c = function(e) {
                                    var t = function() {};
                                    e in i.prototype && (t = i.prototype[e]);
                                    var r = n.prototype[e];
                                    return function() {
                                        return Array.prototype.unshift.call(arguments, t), r.apply(this, arguments)
                                    }
                                }, u = 0; u < o.length; u++) {
                                var d = o[u];
                                i.prototype[d] = c(d)
                            }
                            return i
                        }
                    },
                    i = function() {
                        this.listeners = {}
                    };
                return i.prototype.on = function(e, t) {
                    this.listeners = this.listeners || {}, e in this.listeners ? this.listeners[e].push(t) : this.listeners[e] = [t]
                }, i.prototype.trigger = function(e) {
                    var t = Array.prototype.slice,
                        n = t.call(arguments, 1);
                    this.listeners = this.listeners || {}, null == n && (n = []), 0 === n.length && n.push({}), n[0]._type = e, e in this.listeners && this.invoke(this.listeners[e], t.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments)
                }, i.prototype.invoke = function(e, t) {
                    for (var n = 0, i = e.length; i > n; n++) e[n].apply(this, t)
                }, n.Observable = i, n.generateChars = function(e) {
                    for (var t = "", n = 0; e > n; n++) {
                        t += Math.floor(36 * Math.random()).toString(36)
                    }
                    return t
                }, n.bind = function(e, t) {
                    return function() {
                        e.apply(t, arguments)
                    }
                }, n._convertData = function(e) {
                    for (var t in e) {
                        var n = t.split("-"),
                            i = e;
                        if (1 !== n.length) {
                            for (var r = 0; r < n.length; r++) {
                                var o = n[r];
                                (o = o.substring(0, 1).toLowerCase() + o.substring(1)) in i || (i[o] = {}), r == n.length - 1 && (i[o] = e[t]), i = i[o]
                            }
                            delete e[t]
                        }
                    }
                    return e
                }, n.hasScroll = function(t, n) {
                    var i = e(n),
                        r = n.style.overflowX,
                        o = n.style.overflowY;
                    return (r !== o || "hidden" !== o && "visible" !== o) && ("scroll" === r || "scroll" === o || (i.innerHeight() < n.scrollHeight || i.innerWidth() < n.scrollWidth))
                }, n.escapeMarkup = function(e) {
                    var t = {
                        "\\": "&#92;",
                        "&": "&amp;",
                        "<": "&lt;",
                        ">": "&gt;",
                        '"': "&quot;",
                        "'": "&#39;",
                        "/": "&#47;"
                    };
                    return "string" != typeof e ? e : String(e).replace(/[&<>"'\/\\]/g, function(e) {
                        return t[e]
                    })
                }, n.appendMany = function(t, n) {
                    if ("1.7" === e.fn.jquery.substr(0, 3)) {
                        var i = e();
                        e.map(n, function(e) {
                            i = i.add(e)
                        }), n = i
                    }
                    t.append(n)
                }, n
            }), t.define("select2/results", ["jquery", "./utils"], function(e, t) {
                function n(e, t, i) {
                    this.$element = e, this.data = i, this.options = t, n.__super__.constructor.call(this)
                }
                return t.Extend(n, t.Observable), n.prototype.render = function() {
                    var t = e('<ul class="select2-results__options" role="tree"></ul>');
                    return this.options.get("multiple") && t.attr("aria-multiselectable", "true"), this.$results = t, t
                }, n.prototype.clear = function() {
                    this.$results.empty()
                }, n.prototype.displayMessage = function(t) {
                    var n = this.options.get("escapeMarkup");
                    this.clear(), this.hideLoading();
                    var i = e('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                        r = this.options.get("translations").get(t.message);
                    i.append(n(r(t.args))), i[0].className += " select2-results__message", this.$results.append(i)
                }, n.prototype.hideMessages = function() {
                    this.$results.find(".select2-results__message").remove()
                }, n.prototype.append = function(e) {
                    this.hideLoading();
                    var t = [];
                    if (null != e.results && 0 !== e.results.length) {
                        e.results = this.sort(e.results);
                        for (var n = 0; n < e.results.length; n++) {
                            var i = e.results[n],
                                r = this.option(i);
                            t.push(r)
                        }
                        this.$results.append(t)
                    } else 0 === this.$results.children().length && this.trigger("results:message", {
                        message: "noResults"
                    })
                }, n.prototype.position = function(e, t) {
                    t.find(".select2-results").append(e)
                }, n.prototype.sort = function(e) {
                    return this.options.get("sorter")(e)
                }, n.prototype.highlightFirstItem = function() {
                    var e = this.$results.find(".select2-results__option[aria-selected]"),
                        t = e.filter("[aria-selected=true]");
                    t.length > 0 ? t.first().trigger("mouseenter") : e.first().trigger("mouseenter"), this.ensureHighlightVisible()
                }, n.prototype.setClasses = function() {
                    var t = this;
                    this.data.current(function(n) {
                        var i = e.map(n, function(e) {
                            return e.id.toString()
                        });
                        t.$results.find(".select2-results__option[aria-selected]").each(function() {
                            var t = e(this),
                                n = e.data(this, "data"),
                                r = "" + n.id;
                            null != n.element && n.element.selected || null == n.element && e.inArray(r, i) > -1 ? t.attr("aria-selected", "true") : t.attr("aria-selected", "false")
                        })
                    })
                }, n.prototype.showLoading = function(e) {
                    this.hideLoading();
                    var t = {
                            disabled: !0,
                            loading: !0,
                            text: this.options.get("translations").get("searching")(e)
                        },
                        n = this.option(t);
                    n.className += " loading-results", this.$results.prepend(n)
                }, n.prototype.hideLoading = function() {
                    this.$results.find(".loading-results").remove()
                }, n.prototype.option = function(t) {
                    var n = document.createElement("li");
                    n.className = "select2-results__option";
                    var i = {
                        role: "treeitem",
                        "aria-selected": "false"
                    };
                    for (var r in t.disabled && (delete i["aria-selected"], i["aria-disabled"] = "true"), null == t.id && delete i["aria-selected"], null != t._resultId && (n.id = t._resultId), t.title && (n.title = t.title), t.children && (i.role = "group", i["aria-label"] = t.text, delete i["aria-selected"]), i) {
                        var o = i[r];
                        n.setAttribute(r, o)
                    }
                    if (t.children) {
                        var s = e(n),
                            a = document.createElement("strong");
                        a.className = "select2-results__group", e(a), this.template(t, a);
                        for (var l = [], c = 0; c < t.children.length; c++) {
                            var u = t.children[c],
                                d = this.option(u);
                            l.push(d)
                        }
                        var p = e("<ul></ul>", {
                            "class": "select2-results__options select2-results__options--nested"
                        });
                        p.append(l), s.append(a), s.append(p)
                    } else this.template(t, n);
                    return e.data(n, "data", t), n
                }, n.prototype.bind = function(t) {
                    var n = this,
                        i = t.id + "-results";
                    this.$results.attr("id", i), t.on("results:all", function(e) {
                        n.clear(), n.append(e.data), t.isOpen() && (n.setClasses(), n.highlightFirstItem())
                    }), t.on("results:append", function(e) {
                        n.append(e.data), t.isOpen() && n.setClasses()
                    }), t.on("query", function(e) {
                        n.hideMessages(), n.showLoading(e)
                    }), t.on("select", function() {
                        t.isOpen() && (n.setClasses(), n.highlightFirstItem())
                    }), t.on("unselect", function() {
                        t.isOpen() && (n.setClasses(), n.highlightFirstItem())
                    }), t.on("open", function() {
                        n.$results.attr("aria-expanded", "true"), n.$results.attr("aria-hidden", "false"), n.setClasses(), n.ensureHighlightVisible()
                    }), t.on("close", function() {
                        n.$results.attr("aria-expanded", "false"), n.$results.attr("aria-hidden", "true"), n.$results.removeAttr("aria-activedescendant")
                    }), t.on("results:toggle", function() {
                        var e = n.getHighlightedResults();
                        0 !== e.length && e.trigger("mouseup")
                    }), t.on("results:select", function() {
                        var e = n.getHighlightedResults();
                        if (0 !== e.length) {
                            var t = e.data("data");
                            "true" == e.attr("aria-selected") ? n.trigger("close", {}) : n.trigger("select", {
                                data: t
                            })
                        }
                    }), t.on("results:previous", function() {
                        var e = n.getHighlightedResults(),
                            t = n.$results.find("[aria-selected]"),
                            i = t.index(e);
                        if (0 !== i) {
                            var r = i - 1;
                            0 === e.length && (r = 0);
                            var o = t.eq(r);
                            o.trigger("mouseenter");
                            var s = n.$results.offset().top,
                                a = o.offset().top,
                                l = n.$results.scrollTop() + (a - s);
                            0 === r ? n.$results.scrollTop(0) : 0 > a - s && n.$results.scrollTop(l)
                        }
                    }), t.on("results:next", function() {
                        var e = n.getHighlightedResults(),
                            t = n.$results.find("[aria-selected]"),
                            i = t.index(e) + 1;
                        if (!(i >= t.length)) {
                            var r = t.eq(i);
                            r.trigger("mouseenter");
                            var o = n.$results.offset().top + n.$results.outerHeight(!1),
                                s = r.offset().top + r.outerHeight(!1),
                                a = n.$results.scrollTop() + s - o;
                            0 === i ? n.$results.scrollTop(0) : s > o && n.$results.scrollTop(a)
                        }
                    }), t.on("results:focus", function(e) {
                        e.element.addClass("select2-results__option--highlighted")
                    }), t.on("results:message", function(e) {
                        n.displayMessage(e)
                    }), e.fn.mousewheel && this.$results.on("mousewheel", function(e) {
                        var t = n.$results.scrollTop(),
                            i = n.$results.get(0).scrollHeight - t + e.deltaY,
                            r = e.deltaY > 0 && t - e.deltaY <= 0,
                            o = e.deltaY < 0 && i <= n.$results.height();
                        r ? (n.$results.scrollTop(0), e.preventDefault(), e.stopPropagation()) : o && (n.$results.scrollTop(n.$results.get(0).scrollHeight - n.$results.height()), e.preventDefault(), e.stopPropagation())
                    }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function(t) {
                        var i = e(this),
                            r = i.data("data");
                        return "true" === i.attr("aria-selected") ? void(n.options.get("multiple") ? n.trigger("unselect", {
                            originalEvent: t,
                            data: r
                        }) : n.trigger("close", {})) : void n.trigger("select", {
                            originalEvent: t,
                            data: r
                        })
                    }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function() {
                        var t = e(this).data("data");
                        n.getHighlightedResults().removeClass("select2-results__option--highlighted"), n.trigger("results:focus", {
                            data: t,
                            element: e(this)
                        })
                    })
                }, n.prototype.getHighlightedResults = function() {
                    return this.$results.find(".select2-results__option--highlighted")
                }, n.prototype.destroy = function() {
                    this.$results.remove()
                }, n.prototype.ensureHighlightVisible = function() {
                    var e = this.getHighlightedResults();
                    if (0 !== e.length) {
                        var t = this.$results.find("[aria-selected]").index(e),
                            n = this.$results.offset().top,
                            i = e.offset().top,
                            r = this.$results.scrollTop() + (i - n),
                            o = i - n;
                        r -= 2 * e.outerHeight(!1), 2 >= t ? this.$results.scrollTop(0) : (o > this.$results.outerHeight() || 0 > o) && this.$results.scrollTop(r)
                    }
                }, n.prototype.template = function(t, n) {
                    var i = this.options.get("templateResult"),
                        r = this.options.get("escapeMarkup"),
                        o = i(t, n);
                    null == o ? n.style.display = "none" : "string" == typeof o ? n.innerHTML = r(o) : e(n).append(o)
                }, n
            }), t.define("select2/keys", [], function() {
                return {
                    BACKSPACE: 8,
                    TAB: 9,
                    ENTER: 13,
                    SHIFT: 16,
                    CTRL: 17,
                    ALT: 18,
                    ESC: 27,
                    SPACE: 32,
                    PAGE_UP: 33,
                    PAGE_DOWN: 34,
                    END: 35,
                    HOME: 36,
                    LEFT: 37,
                    UP: 38,
                    RIGHT: 39,
                    DOWN: 40,
                    DELETE: 46
                }
            }), t.define("select2/selection/base", ["jquery", "../utils", "../keys"], function(e, t, n) {
                function i(e, t) {
                    this.$element = e, this.options = t, i.__super__.constructor.call(this)
                }
                return t.Extend(i, t.Observable), i.prototype.render = function() {
                    var t = e('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');
                    return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), t.attr("title", this.$element.attr("title")), t.attr("tabindex", this._tabindex), this.$selection = t, t
                }, i.prototype.bind = function(e) {
                    var t = this,
                        i = (e.id, e.id + "-results");
                    this.container = e, this.$selection.on("focus", function(e) {
                        t.trigger("focus", e)
                    }), this.$selection.on("blur", function(e) {
                        t._handleBlur(e)
                    }), this.$selection.on("keydown", function(e) {
                        t.trigger("keypress", e), e.which === n.SPACE && e.preventDefault()
                    }), e.on("results:focus", function(e) {
                        t.$selection.attr("aria-activedescendant", e.data._resultId)
                    }), e.on("selection:update", function(e) {
                        t.update(e.data)
                    }), e.on("open", function() {
                        t.$selection.attr("aria-expanded", "true"), t.$selection.attr("aria-owns", i), t._attachCloseHandler(e)
                    }), e.on("close", function() {
                        t.$selection.attr("aria-expanded", "false"), t.$selection.removeAttr("aria-activedescendant"), t.$selection.removeAttr("aria-owns"), t.$selection.focus(), t._detachCloseHandler(e)
                    }), e.on("enable", function() {
                        t.$selection.attr("tabindex", t._tabindex)
                    }), e.on("disable", function() {
                        t.$selection.attr("tabindex", "-1")
                    })
                }, i.prototype._handleBlur = function(t) {
                    var n = this;
                    window.setTimeout(function() {
                        document.activeElement == n.$selection[0] || e.contains(n.$selection[0], document.activeElement) || n.trigger("blur", t)
                    }, 1)
                }, i.prototype._attachCloseHandler = function(t) {
                    e(document.body).on("mousedown.select2." + t.id, function(t) {
                        var n = e(t.target).closest(".select2");
                        e(".select2.select2-container--open").each(function() {
                            var t = e(this);
                            this != n[0] && t.data("element").select2("close")
                        })
                    })
                }, i.prototype._detachCloseHandler = function(t) {
                    e(document.body).off("mousedown.select2." + t.id)
                }, i.prototype.position = function(e, t) {
                    t.find(".selection").append(e)
                }, i.prototype.destroy = function() {
                    this._detachCloseHandler(this.container)
                }, i.prototype.update = function() {
                    throw new Error("The `update` method must be defined in child classes.")
                }, i
            }), t.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function(e, t, n) {
                function i() {
                    i.__super__.constructor.apply(this, arguments)
                }
                return n.Extend(i, t), i.prototype.render = function() {
                    var e = i.__super__.render.call(this);
                    return e.addClass("select2-selection--single"), e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), e
                }, i.prototype.bind = function(e) {
                    var t = this;
                    i.__super__.bind.apply(this, arguments);
                    var n = e.id + "-container";
                    this.$selection.find(".select2-selection__rendered").attr("id", n), this.$selection.attr("aria-labelledby", n), this.$selection.on("mousedown", function(e) {
                        1 === e.which && t.trigger("toggle", {
                            originalEvent: e
                        })
                    }), this.$selection.on("focus", function() {}), this.$selection.on("blur", function() {}), e.on("focus", function() {
                        e.isOpen() || t.$selection.focus()
                    }), e.on("selection:update", function(e) {
                        t.update(e.data)
                    })
                }, i.prototype.clear = function() {
                    this.$selection.find(".select2-selection__rendered").empty()
                }, i.prototype.display = function(e, t) {
                    var n = this.options.get("templateSelection");
                    return this.options.get("escapeMarkup")(n(e, t))
                }, i.prototype.selectionContainer = function() {
                    return e("<span></span>")
                }, i.prototype.update = function(e) {
                    if (0 !== e.length) {
                        var t = e[0],
                            n = this.$selection.find(".select2-selection__rendered"),
                            i = this.display(t, n);
                        n.empty().append(i), n.prop("title", t.title || t.text)
                    } else this.clear()
                }, i
            }), t.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function(e, t, n) {
                function i() {
                    i.__super__.constructor.apply(this, arguments)
                }
                return n.Extend(i, t), i.prototype.render = function() {
                    var e = i.__super__.render.call(this);
                    return e.addClass("select2-selection--multiple"), e.html('<ul class="select2-selection__rendered"></ul>'), e
                }, i.prototype.bind = function() {
                    var t = this;
                    i.__super__.bind.apply(this, arguments), this.$selection.on("click", function(e) {
                        t.trigger("toggle", {
                            originalEvent: e
                        })
                    }), this.$selection.on("click", ".select2-selection__choice__remove", function(n) {
                        if (!t.options.get("disabled")) {
                            var i = e(this).parent().data("data");
                            t.trigger("unselect", {
                                originalEvent: n,
                                data: i
                            })
                        }
                    })
                }, i.prototype.clear = function() {
                    this.$selection.find(".select2-selection__rendered").empty()
                }, i.prototype.display = function(e, t) {
                    var n = this.options.get("templateSelection");
                    return this.options.get("escapeMarkup")(n(e, t))
                }, i.prototype.selectionContainer = function() {
                    return e('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')
                }, i.prototype.update = function(e) {
                    if (this.clear(), 0 !== e.length) {
                        for (var t = [], i = 0; i < e.length; i++) {
                            var r = e[i],
                                o = this.selectionContainer(),
                                s = this.display(r, o);
                            o.append(s), o.prop("title", r.title || r.text), o.data("data", r), t.push(o)
                        }
                        var a = this.$selection.find(".select2-selection__rendered");
                        n.appendMany(a, t)
                    }
                }, i
            }), t.define("select2/selection/placeholder", ["../utils"], function() {
                function e(e, t, n) {
                    this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n)
                }
                return e.prototype.normalizePlaceholder = function(e, t) {
                    return "string" == typeof t && (t = {
                        id: "",
                        text: t
                    }), t
                }, e.prototype.createPlaceholder = function(e, t) {
                    var n = this.selectionContainer();
                    return n.html(this.display(t)), n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), n
                }, e.prototype.update = function(e, t) {
                    var n = 1 == t.length && t[0].id != this.placeholder.id;
                    if (t.length > 1 || n) return e.call(this, t);
                    this.clear();
                    var i = this.createPlaceholder(this.placeholder);
                    this.$selection.find(".select2-selection__rendered").append(i)
                }, e
            }), t.define("select2/selection/allowClear", ["jquery", "../keys"], function(e, t) {
                function n() {}
                return n.prototype.bind = function(e, t, n) {
                    var i = this;
                    e.call(this, t, n), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function(e) {
                        i._handleClear(e)
                    }), t.on("keypress", function(e) {
                        i._handleKeyboardClear(e, t)
                    })
                }, n.prototype._handleClear = function(e, t) {
                    if (!this.options.get("disabled")) {
                        var n = this.$selection.find(".select2-selection__clear");
                        if (0 !== n.length) {
                            t.stopPropagation();
                            for (var i = n.data("data"), r = 0; r < i.length; r++) {
                                var o = {
                                    data: i[r]
                                };
                                if (this.trigger("unselect", o), o.prevented) return
                            }
                            this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {})
                        }
                    }
                }, n.prototype._handleKeyboardClear = function(e, n, i) {
                    i.isOpen() || (n.which == t.DELETE || n.which == t.BACKSPACE) && this._handleClear(n)
                }, n.prototype.update = function(t, n) {
                    if (t.call(this, n), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === n.length)) {
                        var i = e('<span class="select2-selection__clear">&times;</span>');
                        i.data("data", n), this.$selection.find(".select2-selection__rendered").prepend(i)
                    }
                }, n
            }), t.define("select2/selection/search", ["jquery", "../utils", "../keys"], function(e, t, n) {
                function i(e, t, n) {
                    e.call(this, t, n)
                }
                return i.prototype.render = function(t) {
                    var n = e('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');
                    this.$searchContainer = n, this.$search = n.find("input");
                    var i = t.call(this);
                    return this._transferTabIndex(), i
                }, i.prototype.bind = function(e, t, i) {
                    var r = this;
                    e.call(this, t, i), t.on("open", function() {
                        r.$search.trigger("focus")
                    }), t.on("close", function() {
                        r.$search.val(""), r.$search.removeAttr("aria-activedescendant"), r.$search.trigger("focus")
                    }), t.on("enable", function() {
                        r.$search.prop("disabled", !1), r._transferTabIndex()
                    }), t.on("disable", function() {
                        r.$search.prop("disabled", !0)
                    }), t.on("focus", function() {
                        r.$search.trigger("focus")
                    }), t.on("results:focus", function(e) {
                        r.$search.attr("aria-activedescendant", e.id)
                    }), this.$selection.on("focusin", ".select2-search--inline", function(e) {
                        r.trigger("focus", e)
                    }), this.$selection.on("focusout", ".select2-search--inline", function(e) {
                        r._handleBlur(e)
                    }), this.$selection.on("keydown", ".select2-search--inline", function(e) {
                        if (e.stopPropagation(), r.trigger("keypress", e), r._keyUpPrevented = e.isDefaultPrevented(), e.which === n.BACKSPACE && "" === r.$search.val()) {
                            var t = r.$searchContainer.prev(".select2-selection__choice");
                            if (t.length > 0) {
                                var i = t.data("data");
                                r.searchRemoveChoice(i), e.preventDefault()
                            }
                        }
                    });
                    var o = document.documentMode,
                        s = o && 11 >= o;
                    this.$selection.on("input.searchcheck", ".select2-search--inline", function() {
                        return s ? void r.$selection.off("input.search input.searchcheck") : void r.$selection.off("keyup.search")
                    }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function(e) {
                        if (s && "input" === e.type) r.$selection.off("input.search input.searchcheck");
                        else {
                            var t = e.which;
                            t != n.SHIFT && t != n.CTRL && t != n.ALT && t != n.TAB && r.handleSearch(e)
                        }
                    })
                }, i.prototype._transferTabIndex = function() {
                    this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1")
                }, i.prototype.createPlaceholder = function(e, t) {
                    this.$search.attr("placeholder", t.text)
                }, i.prototype.update = function(e, t) {
                    var n = this.$search[0] == document.activeElement;
                    this.$search.attr("placeholder", ""), e.call(this, t), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), n && this.$search.focus()
                }, i.prototype.handleSearch = function() {
                    if (this.resizeSearch(), !this._keyUpPrevented) {
                        var e = this.$search.val();
                        this.trigger("query", {
                            term: e
                        })
                    }
                    this._keyUpPrevented = !1
                }, i.prototype.searchRemoveChoice = function(e, t) {
                    this.trigger("unselect", {
                        data: t
                    }), this.$search.val(t.text), this.handleSearch()
                }, i.prototype.resizeSearch = function() {
                    this.$search.css("width", "25px");
                    var e = "";
                    "" !== this.$search.attr("placeholder") ? e = this.$selection.find(".select2-selection__rendered").innerWidth() : e = .75 * (this.$search.val().length + 1) + "em";
                    this.$search.css("width", e)
                }, i
            }), t.define("select2/selection/eventRelay", ["jquery"], function(e) {
                function t() {}
                return t.prototype.bind = function(t, n, i) {
                    var r = this,
                        o = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
                        s = ["opening", "closing", "selecting", "unselecting"];
                    t.call(this, n, i), n.on("*", function(t, n) {
                        if (-1 !== e.inArray(t, o)) {
                            n = n || {};
                            var i = e.Event("select2:" + t, {
                                params: n
                            });
                            r.$element.trigger(i), -1 !== e.inArray(t, s) && (n.prevented = i.isDefaultPrevented())
                        }
                    })
                }, t
            }), t.define("select2/translation", ["jquery", "require"], function(e, t) {
                function n(e) {
                    this.dict = e || {}
                }
                return n.prototype.all = function() {
                    return this.dict
                }, n.prototype.get = function(e) {
                    return this.dict[e]
                }, n.prototype.extend = function(t) {
                    this.dict = e.extend({}, t.all(), this.dict)
                }, n._cache = {}, n.loadPath = function(e) {
                    if (!(e in n._cache)) {
                        var i = t(e);
                        n._cache[e] = i
                    }
                    return new n(n._cache[e])
                }, n
            }), t.define("select2/diacritics", [], function() {
                return {
                    "\u24b6": "A",
                    "\uff21": "A",
                    "\xc0": "A",
                    "\xc1": "A",
                    "\xc2": "A",
                    "\u1ea6": "A",
                    "\u1ea4": "A",
                    "\u1eaa": "A",
                    "\u1ea8": "A",
                    "\xc3": "A",
                    "\u0100": "A",
                    "\u0102": "A",
                    "\u1eb0": "A",
                    "\u1eae": "A",
                    "\u1eb4": "A",
                    "\u1eb2": "A",
                    "\u0226": "A",
                    "\u01e0": "A",
                    "\xc4": "A",
                    "\u01de": "A",
                    "\u1ea2": "A",
                    "\xc5": "A",
                    "\u01fa": "A",
                    "\u01cd": "A",
                    "\u0200": "A",
                    "\u0202": "A",
                    "\u1ea0": "A",
                    "\u1eac": "A",
                    "\u1eb6": "A",
                    "\u1e00": "A",
                    "\u0104": "A",
                    "\u023a": "A",
                    "\u2c6f": "A",
                    "\ua732": "AA",
                    "\xc6": "AE",
                    "\u01fc": "AE",
                    "\u01e2": "AE",
                    "\ua734": "AO",
                    "\ua736": "AU",
                    "\ua738": "AV",
                    "\ua73a": "AV",
                    "\ua73c": "AY",
                    "\u24b7": "B",
                    "\uff22": "B",
                    "\u1e02": "B",
                    "\u1e04": "B",
                    "\u1e06": "B",
                    "\u0243": "B",
                    "\u0182": "B",
                    "\u0181": "B",
                    "\u24b8": "C",
                    "\uff23": "C",
                    "\u0106": "C",
                    "\u0108": "C",
                    "\u010a": "C",
                    "\u010c": "C",
                    "\xc7": "C",
                    "\u1e08": "C",
                    "\u0187": "C",
                    "\u023b": "C",
                    "\ua73e": "C",
                    "\u24b9": "D",
                    "\uff24": "D",
                    "\u1e0a": "D",
                    "\u010e": "D",
                    "\u1e0c": "D",
                    "\u1e10": "D",
                    "\u1e12": "D",
                    "\u1e0e": "D",
                    "\u0110": "D",
                    "\u018b": "D",
                    "\u018a": "D",
                    "\u0189": "D",
                    "\ua779": "D",
                    "\u01f1": "DZ",
                    "\u01c4": "DZ",
                    "\u01f2": "Dz",
                    "\u01c5": "Dz",
                    "\u24ba": "E",
                    "\uff25": "E",
                    "\xc8": "E",
                    "\xc9": "E",
                    "\xca": "E",
                    "\u1ec0": "E",
                    "\u1ebe": "E",
                    "\u1ec4": "E",
                    "\u1ec2": "E",
                    "\u1ebc": "E",
                    "\u0112": "E",
                    "\u1e14": "E",
                    "\u1e16": "E",
                    "\u0114": "E",
                    "\u0116": "E",
                    "\xcb": "E",
                    "\u1eba": "E",
                    "\u011a": "E",
                    "\u0204": "E",
                    "\u0206": "E",
                    "\u1eb8": "E",
                    "\u1ec6": "E",
                    "\u0228": "E",
                    "\u1e1c": "E",
                    "\u0118": "E",
                    "\u1e18": "E",
                    "\u1e1a": "E",
                    "\u0190": "E",
                    "\u018e": "E",
                    "\u24bb": "F",
                    "\uff26": "F",
                    "\u1e1e": "F",
                    "\u0191": "F",
                    "\ua77b": "F",
                    "\u24bc": "G",
                    "\uff27": "G",
                    "\u01f4": "G",
                    "\u011c": "G",
                    "\u1e20": "G",
                    "\u011e": "G",
                    "\u0120": "G",
                    "\u01e6": "G",
                    "\u0122": "G",
                    "\u01e4": "G",
                    "\u0193": "G",
                    "\ua7a0": "G",
                    "\ua77d": "G",
                    "\ua77e": "G",
                    "\u24bd": "H",
                    "\uff28": "H",
                    "\u0124": "H",
                    "\u1e22": "H",
                    "\u1e26": "H",
                    "\u021e": "H",
                    "\u1e24": "H",
                    "\u1e28": "H",
                    "\u1e2a": "H",
                    "\u0126": "H",
                    "\u2c67": "H",
                    "\u2c75": "H",
                    "\ua78d": "H",
                    "\u24be": "I",
                    "\uff29": "I",
                    "\xcc": "I",
                    "\xcd": "I",
                    "\xce": "I",
                    "\u0128": "I",
                    "\u012a": "I",
                    "\u012c": "I",
                    "\u0130": "I",
                    "\xcf": "I",
                    "\u1e2e": "I",
                    "\u1ec8": "I",
                    "\u01cf": "I",
                    "\u0208": "I",
                    "\u020a": "I",
                    "\u1eca": "I",
                    "\u012e": "I",
                    "\u1e2c": "I",
                    "\u0197": "I",
                    "\u24bf": "J",
                    "\uff2a": "J",
                    "\u0134": "J",
                    "\u0248": "J",
                    "\u24c0": "K",
                    "\uff2b": "K",
                    "\u1e30": "K",
                    "\u01e8": "K",
                    "\u1e32": "K",
                    "\u0136": "K",
                    "\u1e34": "K",
                    "\u0198": "K",
                    "\u2c69": "K",
                    "\ua740": "K",
                    "\ua742": "K",
                    "\ua744": "K",
                    "\ua7a2": "K",
                    "\u24c1": "L",
                    "\uff2c": "L",
                    "\u013f": "L",
                    "\u0139": "L",
                    "\u013d": "L",
                    "\u1e36": "L",
                    "\u1e38": "L",
                    "\u013b": "L",
                    "\u1e3c": "L",
                    "\u1e3a": "L",
                    "\u0141": "L",
                    "\u023d": "L",
                    "\u2c62": "L",
                    "\u2c60": "L",
                    "\ua748": "L",
                    "\ua746": "L",
                    "\ua780": "L",
                    "\u01c7": "LJ",
                    "\u01c8": "Lj",
                    "\u24c2": "M",
                    "\uff2d": "M",
                    "\u1e3e": "M",
                    "\u1e40": "M",
                    "\u1e42": "M",
                    "\u2c6e": "M",
                    "\u019c": "M",
                    "\u24c3": "N",
                    "\uff2e": "N",
                    "\u01f8": "N",
                    "\u0143": "N",
                    "\xd1": "N",
                    "\u1e44": "N",
                    "\u0147": "N",
                    "\u1e46": "N",
                    "\u0145": "N",
                    "\u1e4a": "N",
                    "\u1e48": "N",
                    "\u0220": "N",
                    "\u019d": "N",
                    "\ua790": "N",
                    "\ua7a4": "N",
                    "\u01ca": "NJ",
                    "\u01cb": "Nj",
                    "\u24c4": "O",
                    "\uff2f": "O",
                    "\xd2": "O",
                    "\xd3": "O",
                    "\xd4": "O",
                    "\u1ed2": "O",
                    "\u1ed0": "O",
                    "\u1ed6": "O",
                    "\u1ed4": "O",
                    "\xd5": "O",
                    "\u1e4c": "O",
                    "\u022c": "O",
                    "\u1e4e": "O",
                    "\u014c": "O",
                    "\u1e50": "O",
                    "\u1e52": "O",
                    "\u014e": "O",
                    "\u022e": "O",
                    "\u0230": "O",
                    "\xd6": "O",
                    "\u022a": "O",
                    "\u1ece": "O",
                    "\u0150": "O",
                    "\u01d1": "O",
                    "\u020c": "O",
                    "\u020e": "O",
                    "\u01a0": "O",
                    "\u1edc": "O",
                    "\u1eda": "O",
                    "\u1ee0": "O",
                    "\u1ede": "O",
                    "\u1ee2": "O",
                    "\u1ecc": "O",
                    "\u1ed8": "O",
                    "\u01ea": "O",
                    "\u01ec": "O",
                    "\xd8": "O",
                    "\u01fe": "O",
                    "\u0186": "O",
                    "\u019f": "O",
                    "\ua74a": "O",
                    "\ua74c": "O",
                    "\u01a2": "OI",
                    "\ua74e": "OO",
                    "\u0222": "OU",
                    "\u24c5": "P",
                    "\uff30": "P",
                    "\u1e54": "P",
                    "\u1e56": "P",
                    "\u01a4": "P",
                    "\u2c63": "P",
                    "\ua750": "P",
                    "\ua752": "P",
                    "\ua754": "P",
                    "\u24c6": "Q",
                    "\uff31": "Q",
                    "\ua756": "Q",
                    "\ua758": "Q",
                    "\u024a": "Q",
                    "\u24c7": "R",
                    "\uff32": "R",
                    "\u0154": "R",
                    "\u1e58": "R",
                    "\u0158": "R",
                    "\u0210": "R",
                    "\u0212": "R",
                    "\u1e5a": "R",
                    "\u1e5c": "R",
                    "\u0156": "R",
                    "\u1e5e": "R",
                    "\u024c": "R",
                    "\u2c64": "R",
                    "\ua75a": "R",
                    "\ua7a6": "R",
                    "\ua782": "R",
                    "\u24c8": "S",
                    "\uff33": "S",
                    "\u1e9e": "S",
                    "\u015a": "S",
                    "\u1e64": "S",
                    "\u015c": "S",
                    "\u1e60": "S",
                    "\u0160": "S",
                    "\u1e66": "S",
                    "\u1e62": "S",
                    "\u1e68": "S",
                    "\u0218": "S",
                    "\u015e": "S",
                    "\u2c7e": "S",
                    "\ua7a8": "S",
                    "\ua784": "S",
                    "\u24c9": "T",
                    "\uff34": "T",
                    "\u1e6a": "T",
                    "\u0164": "T",
                    "\u1e6c": "T",
                    "\u021a": "T",
                    "\u0162": "T",
                    "\u1e70": "T",
                    "\u1e6e": "T",
                    "\u0166": "T",
                    "\u01ac": "T",
                    "\u01ae": "T",
                    "\u023e": "T",
                    "\ua786": "T",
                    "\ua728": "TZ",
                    "\u24ca": "U",
                    "\uff35": "U",
                    "\xd9": "U",
                    "\xda": "U",
                    "\xdb": "U",
                    "\u0168": "U",
                    "\u1e78": "U",
                    "\u016a": "U",
                    "\u1e7a": "U",
                    "\u016c": "U",
                    "\xdc": "U",
                    "\u01db": "U",
                    "\u01d7": "U",
                    "\u01d5": "U",
                    "\u01d9": "U",
                    "\u1ee6": "U",
                    "\u016e": "U",
                    "\u0170": "U",
                    "\u01d3": "U",
                    "\u0214": "U",
                    "\u0216": "U",
                    "\u01af": "U",
                    "\u1eea": "U",
                    "\u1ee8": "U",
                    "\u1eee": "U",
                    "\u1eec": "U",
                    "\u1ef0": "U",
                    "\u1ee4": "U",
                    "\u1e72": "U",
                    "\u0172": "U",
                    "\u1e76": "U",
                    "\u1e74": "U",
                    "\u0244": "U",
                    "\u24cb": "V",
                    "\uff36": "V",
                    "\u1e7c": "V",
                    "\u1e7e": "V",
                    "\u01b2": "V",
                    "\ua75e": "V",
                    "\u0245": "V",
                    "\ua760": "VY",
                    "\u24cc": "W",
                    "\uff37": "W",
                    "\u1e80": "W",
                    "\u1e82": "W",
                    "\u0174": "W",
                    "\u1e86": "W",
                    "\u1e84": "W",
                    "\u1e88": "W",
                    "\u2c72": "W",
                    "\u24cd": "X",
                    "\uff38": "X",
                    "\u1e8a": "X",
                    "\u1e8c": "X",
                    "\u24ce": "Y",
                    "\uff39": "Y",
                    "\u1ef2": "Y",
                    "\xdd": "Y",
                    "\u0176": "Y",
                    "\u1ef8": "Y",
                    "\u0232": "Y",
                    "\u1e8e": "Y",
                    "\u0178": "Y",
                    "\u1ef6": "Y",
                    "\u1ef4": "Y",
                    "\u01b3": "Y",
                    "\u024e": "Y",
                    "\u1efe": "Y",
                    "\u24cf": "Z",
                    "\uff3a": "Z",
                    "\u0179": "Z",
                    "\u1e90": "Z",
                    "\u017b": "Z",
                    "\u017d": "Z",
                    "\u1e92": "Z",
                    "\u1e94": "Z",
                    "\u01b5": "Z",
                    "\u0224": "Z",
                    "\u2c7f": "Z",
                    "\u2c6b": "Z",
                    "\ua762": "Z",
                    "\u24d0": "a",
                    "\uff41": "a",
                    "\u1e9a": "a",
                    "\xe0": "a",
                    "\xe1": "a",
                    "\xe2": "a",
                    "\u1ea7": "a",
                    "\u1ea5": "a",
                    "\u1eab": "a",
                    "\u1ea9": "a",
                    "\xe3": "a",
                    "\u0101": "a",
                    "\u0103": "a",
                    "\u1eb1": "a",
                    "\u1eaf": "a",
                    "\u1eb5": "a",
                    "\u1eb3": "a",
                    "\u0227": "a",
                    "\u01e1": "a",
                    "\xe4": "a",
                    "\u01df": "a",
                    "\u1ea3": "a",
                    "\xe5": "a",
                    "\u01fb": "a",
                    "\u01ce": "a",
                    "\u0201": "a",
                    "\u0203": "a",
                    "\u1ea1": "a",
                    "\u1ead": "a",
                    "\u1eb7": "a",
                    "\u1e01": "a",
                    "\u0105": "a",
                    "\u2c65": "a",
                    "\u0250": "a",
                    "\ua733": "aa",
                    "\xe6": "ae",
                    "\u01fd": "ae",
                    "\u01e3": "ae",
                    "\ua735": "ao",
                    "\ua737": "au",
                    "\ua739": "av",
                    "\ua73b": "av",
                    "\ua73d": "ay",
                    "\u24d1": "b",
                    "\uff42": "b",
                    "\u1e03": "b",
                    "\u1e05": "b",
                    "\u1e07": "b",
                    "\u0180": "b",
                    "\u0183": "b",
                    "\u0253": "b",
                    "\u24d2": "c",
                    "\uff43": "c",
                    "\u0107": "c",
                    "\u0109": "c",
                    "\u010b": "c",
                    "\u010d": "c",
                    "\xe7": "c",
                    "\u1e09": "c",
                    "\u0188": "c",
                    "\u023c": "c",
                    "\ua73f": "c",
                    "\u2184": "c",
                    "\u24d3": "d",
                    "\uff44": "d",
                    "\u1e0b": "d",
                    "\u010f": "d",
                    "\u1e0d": "d",
                    "\u1e11": "d",
                    "\u1e13": "d",
                    "\u1e0f": "d",
                    "\u0111": "d",
                    "\u018c": "d",
                    "\u0256": "d",
                    "\u0257": "d",
                    "\ua77a": "d",
                    "\u01f3": "dz",
                    "\u01c6": "dz",
                    "\u24d4": "e",
                    "\uff45": "e",
                    "\xe8": "e",
                    "\xe9": "e",
                    "\xea": "e",
                    "\u1ec1": "e",
                    "\u1ebf": "e",
                    "\u1ec5": "e",
                    "\u1ec3": "e",
                    "\u1ebd": "e",
                    "\u0113": "e",
                    "\u1e15": "e",
                    "\u1e17": "e",
                    "\u0115": "e",
                    "\u0117": "e",
                    "\xeb": "e",
                    "\u1ebb": "e",
                    "\u011b": "e",
                    "\u0205": "e",
                    "\u0207": "e",
                    "\u1eb9": "e",
                    "\u1ec7": "e",
                    "\u0229": "e",
                    "\u1e1d": "e",
                    "\u0119": "e",
                    "\u1e19": "e",
                    "\u1e1b": "e",
                    "\u0247": "e",
                    "\u025b": "e",
                    "\u01dd": "e",
                    "\u24d5": "f",
                    "\uff46": "f",
                    "\u1e1f": "f",
                    "\u0192": "f",
                    "\ua77c": "f",
                    "\u24d6": "g",
                    "\uff47": "g",
                    "\u01f5": "g",
                    "\u011d": "g",
                    "\u1e21": "g",
                    "\u011f": "g",
                    "\u0121": "g",
                    "\u01e7": "g",
                    "\u0123": "g",
                    "\u01e5": "g",
                    "\u0260": "g",
                    "\ua7a1": "g",
                    "\u1d79": "g",
                    "\ua77f": "g",
                    "\u24d7": "h",
                    "\uff48": "h",
                    "\u0125": "h",
                    "\u1e23": "h",
                    "\u1e27": "h",
                    "\u021f": "h",
                    "\u1e25": "h",
                    "\u1e29": "h",
                    "\u1e2b": "h",
                    "\u1e96": "h",
                    "\u0127": "h",
                    "\u2c68": "h",
                    "\u2c76": "h",
                    "\u0265": "h",
                    "\u0195": "hv",
                    "\u24d8": "i",
                    "\uff49": "i",
                    "\xec": "i",
                    "\xed": "i",
                    "\xee": "i",
                    "\u0129": "i",
                    "\u012b": "i",
                    "\u012d": "i",
                    "\xef": "i",
                    "\u1e2f": "i",
                    "\u1ec9": "i",
                    "\u01d0": "i",
                    "\u0209": "i",
                    "\u020b": "i",
                    "\u1ecb": "i",
                    "\u012f": "i",
                    "\u1e2d": "i",
                    "\u0268": "i",
                    "\u0131": "i",
                    "\u24d9": "j",
                    "\uff4a": "j",
                    "\u0135": "j",
                    "\u01f0": "j",
                    "\u0249": "j",
                    "\u24da": "k",
                    "\uff4b": "k",
                    "\u1e31": "k",
                    "\u01e9": "k",
                    "\u1e33": "k",
                    "\u0137": "k",
                    "\u1e35": "k",
                    "\u0199": "k",
                    "\u2c6a": "k",
                    "\ua741": "k",
                    "\ua743": "k",
                    "\ua745": "k",
                    "\ua7a3": "k",
                    "\u24db": "l",
                    "\uff4c": "l",
                    "\u0140": "l",
                    "\u013a": "l",
                    "\u013e": "l",
                    "\u1e37": "l",
                    "\u1e39": "l",
                    "\u013c": "l",
                    "\u1e3d": "l",
                    "\u1e3b": "l",
                    "\u017f": "l",
                    "\u0142": "l",
                    "\u019a": "l",
                    "\u026b": "l",
                    "\u2c61": "l",
                    "\ua749": "l",
                    "\ua781": "l",
                    "\ua747": "l",
                    "\u01c9": "lj",
                    "\u24dc": "m",
                    "\uff4d": "m",
                    "\u1e3f": "m",
                    "\u1e41": "m",
                    "\u1e43": "m",
                    "\u0271": "m",
                    "\u026f": "m",
                    "\u24dd": "n",
                    "\uff4e": "n",
                    "\u01f9": "n",
                    "\u0144": "n",
                    "\xf1": "n",
                    "\u1e45": "n",
                    "\u0148": "n",
                    "\u1e47": "n",
                    "\u0146": "n",
                    "\u1e4b": "n",
                    "\u1e49": "n",
                    "\u019e": "n",
                    "\u0272": "n",
                    "\u0149": "n",
                    "\ua791": "n",
                    "\ua7a5": "n",
                    "\u01cc": "nj",
                    "\u24de": "o",
                    "\uff4f": "o",
                    "\xf2": "o",
                    "\xf3": "o",
                    "\xf4": "o",
                    "\u1ed3": "o",
                    "\u1ed1": "o",
                    "\u1ed7": "o",
                    "\u1ed5": "o",
                    "\xf5": "o",
                    "\u1e4d": "o",
                    "\u022d": "o",
                    "\u1e4f": "o",
                    "\u014d": "o",
                    "\u1e51": "o",
                    "\u1e53": "o",
                    "\u014f": "o",
                    "\u022f": "o",
                    "\u0231": "o",
                    "\xf6": "o",
                    "\u022b": "o",
                    "\u1ecf": "o",
                    "\u0151": "o",
                    "\u01d2": "o",
                    "\u020d": "o",
                    "\u020f": "o",
                    "\u01a1": "o",
                    "\u1edd": "o",
                    "\u1edb": "o",
                    "\u1ee1": "o",
                    "\u1edf": "o",
                    "\u1ee3": "o",
                    "\u1ecd": "o",
                    "\u1ed9": "o",
                    "\u01eb": "o",
                    "\u01ed": "o",
                    "\xf8": "o",
                    "\u01ff": "o",
                    "\u0254": "o",
                    "\ua74b": "o",
                    "\ua74d": "o",
                    "\u0275": "o",
                    "\u01a3": "oi",
                    "\u0223": "ou",
                    "\ua74f": "oo",
                    "\u24df": "p",
                    "\uff50": "p",
                    "\u1e55": "p",
                    "\u1e57": "p",
                    "\u01a5": "p",
                    "\u1d7d": "p",
                    "\ua751": "p",
                    "\ua753": "p",
                    "\ua755": "p",
                    "\u24e0": "q",
                    "\uff51": "q",
                    "\u024b": "q",
                    "\ua757": "q",
                    "\ua759": "q",
                    "\u24e1": "r",
                    "\uff52": "r",
                    "\u0155": "r",
                    "\u1e59": "r",
                    "\u0159": "r",
                    "\u0211": "r",
                    "\u0213": "r",
                    "\u1e5b": "r",
                    "\u1e5d": "r",
                    "\u0157": "r",
                    "\u1e5f": "r",
                    "\u024d": "r",
                    "\u027d": "r",
                    "\ua75b": "r",
                    "\ua7a7": "r",
                    "\ua783": "r",
                    "\u24e2": "s",
                    "\uff53": "s",
                    "\xdf": "s",
                    "\u015b": "s",
                    "\u1e65": "s",
                    "\u015d": "s",
                    "\u1e61": "s",
                    "\u0161": "s",
                    "\u1e67": "s",
                    "\u1e63": "s",
                    "\u1e69": "s",
                    "\u0219": "s",
                    "\u015f": "s",
                    "\u023f": "s",
                    "\ua7a9": "s",
                    "\ua785": "s",
                    "\u1e9b": "s",
                    "\u24e3": "t",
                    "\uff54": "t",
                    "\u1e6b": "t",
                    "\u1e97": "t",
                    "\u0165": "t",
                    "\u1e6d": "t",
                    "\u021b": "t",
                    "\u0163": "t",
                    "\u1e71": "t",
                    "\u1e6f": "t",
                    "\u0167": "t",
                    "\u01ad": "t",
                    "\u0288": "t",
                    "\u2c66": "t",
                    "\ua787": "t",
                    "\ua729": "tz",
                    "\u24e4": "u",
                    "\uff55": "u",
                    "\xf9": "u",
                    "\xfa": "u",
                    "\xfb": "u",
                    "\u0169": "u",
                    "\u1e79": "u",
                    "\u016b": "u",
                    "\u1e7b": "u",
                    "\u016d": "u",
                    "\xfc": "u",
                    "\u01dc": "u",
                    "\u01d8": "u",
                    "\u01d6": "u",
                    "\u01da": "u",
                    "\u1ee7": "u",
                    "\u016f": "u",
                    "\u0171": "u",
                    "\u01d4": "u",
                    "\u0215": "u",
                    "\u0217": "u",
                    "\u01b0": "u",
                    "\u1eeb": "u",
                    "\u1ee9": "u",
                    "\u1eef": "u",
                    "\u1eed": "u",
                    "\u1ef1": "u",
                    "\u1ee5": "u",
                    "\u1e73": "u",
                    "\u0173": "u",
                    "\u1e77": "u",
                    "\u1e75": "u",
                    "\u0289": "u",
                    "\u24e5": "v",
                    "\uff56": "v",
                    "\u1e7d": "v",
                    "\u1e7f": "v",
                    "\u028b": "v",
                    "\ua75f": "v",
                    "\u028c": "v",
                    "\ua761": "vy",
                    "\u24e6": "w",
                    "\uff57": "w",
                    "\u1e81": "w",
                    "\u1e83": "w",
                    "\u0175": "w",
                    "\u1e87": "w",
                    "\u1e85": "w",
                    "\u1e98": "w",
                    "\u1e89": "w",
                    "\u2c73": "w",
                    "\u24e7": "x",
                    "\uff58": "x",
                    "\u1e8b": "x",
                    "\u1e8d": "x",
                    "\u24e8": "y",
                    "\uff59": "y",
                    "\u1ef3": "y",
                    "\xfd": "y",
                    "\u0177": "y",
                    "\u1ef9": "y",
                    "\u0233": "y",
                    "\u1e8f": "y",
                    "\xff": "y",
                    "\u1ef7": "y",
                    "\u1e99": "y",
                    "\u1ef5": "y",
                    "\u01b4": "y",
                    "\u024f": "y",
                    "\u1eff": "y",
                    "\u24e9": "z",
                    "\uff5a": "z",
                    "\u017a": "z",
                    "\u1e91": "z",
                    "\u017c": "z",
                    "\u017e": "z",
                    "\u1e93": "z",
                    "\u1e95": "z",
                    "\u01b6": "z",
                    "\u0225": "z",
                    "\u0240": "z",
                    "\u2c6c": "z",
                    "\ua763": "z",
                    "\u0386": "\u0391",
                    "\u0388": "\u0395",
                    "\u0389": "\u0397",
                    "\u038a": "\u0399",
                    "\u03aa": "\u0399",
                    "\u038c": "\u039f",
                    "\u038e": "\u03a5",
                    "\u03ab": "\u03a5",
                    "\u038f": "\u03a9",
                    "\u03ac": "\u03b1",
                    "\u03ad": "\u03b5",
                    "\u03ae": "\u03b7",
                    "\u03af": "\u03b9",
                    "\u03ca": "\u03b9",
                    "\u0390": "\u03b9",
                    "\u03cc": "\u03bf",
                    "\u03cd": "\u03c5",
                    "\u03cb": "\u03c5",
                    "\u03b0": "\u03c5",
                    "\u03c9": "\u03c9",
                    "\u03c2": "\u03c3"
                }
            }), t.define("select2/data/base", ["../utils"], function(e) {
                function t() {
                    t.__super__.constructor.call(this)
                }
                return e.Extend(t, e.Observable), t.prototype.current = function() {
                    throw new Error("The `current` method must be defined in child classes.")
                }, t.prototype.query = function() {
                    throw new Error("The `query` method must be defined in child classes.")
                }, t.prototype.bind = function() {}, t.prototype.destroy = function() {}, t.prototype.generateResultId = function(t, n) {
                    var i = t.id + "-result-";
                    return (i += e.generateChars(4)) + (null != n.id ? "-" + n.id.toString() : "-" + e.generateChars(4))
                }, t
            }), t.define("select2/data/select", ["./base", "../utils", "jquery"], function(e, t, n) {
                function i(e, t) {
                    this.$element = e, this.options = t, i.__super__.constructor.call(this)
                }
                return t.Extend(i, e), i.prototype.current = function(e) {
                    var t = [],
                        i = this;
                    this.$element.find(":selected").each(function() {
                        var e = n(this),
                            r = i.item(e);
                        t.push(r)
                    }), e(t)
                }, i.prototype.select = function(e) {
                    var t = this;
                    if (e.selected = !0, n(e.element).is("option")) return e.element.selected = !0, void this.$element.trigger("change");
                    if (this.$element.prop("multiple")) this.current(function(i) {
                        var r = [];
                        (e = [e]).push.apply(e, i);
                        for (var o = 0; o < e.length; o++) {
                            var s = e[o].id; - 1 === n.inArray(s, r) && r.push(s)
                        }
                        t.$element.val(r), t.$element.trigger("change")
                    });
                    else {
                        var i = e.id;
                        this.$element.val(i), this.$element.trigger("change")
                    }
                }, i.prototype.unselect = function(e) {
                    var t = this;
                    if (this.$element.prop("multiple")) return e.selected = !1, n(e.element).is("option") ? (e.element.selected = !1, void this.$element.trigger("change")) : void this.current(function(i) {
                        for (var r = [], o = 0; o < i.length; o++) {
                            var s = i[o].id;
                            s !== e.id && -1 === n.inArray(s, r) && r.push(s)
                        }
                        t.$element.val(r), t.$element.trigger("change")
                    })
                }, i.prototype.bind = function(e) {
                    var t = this;
                    this.container = e, e.on("select", function(e) {
                        t.select(e.data)
                    }), e.on("unselect", function(e) {
                        t.unselect(e.data)
                    })
                }, i.prototype.destroy = function() {
                    this.$element.find("*").each(function() {
                        n.removeData(this, "data")
                    })
                }, i.prototype.query = function(e, t) {
                    var i = [],
                        r = this;
                    this.$element.children().each(function() {
                        var t = n(this);
                        if (t.is("option") || t.is("optgroup")) {
                            var o = r.item(t),
                                s = r.matches(e, o);
                            null !== s && i.push(s)
                        }
                    }), t({
                        results: i
                    })
                }, i.prototype.addOptions = function(e) {
                    t.appendMany(this.$element, e)
                }, i.prototype.option = function(e) {
                    var t;
                    e.children ? (t = document.createElement("optgroup")).label = e.text : void 0 !== (t = document.createElement("option")).textContent ? t.textContent = e.text : t.innerText = e.text, e.id && (t.value = e.id), e.disabled && (t.disabled = !0), e.selected && (t.selected = !0), e.title && (t.title = e.title);
                    var i = n(t),
                        r = this._normalizeItem(e);
                    return r.element = t, n.data(t, "data", r), i
                }, i.prototype.item = function(e) {
                    var t = {};
                    if (null != (t = n.data(e[0], "data"))) return t;
                    if (e.is("option")) t = {
                        id: e.val(),
                        text: e.text(),
                        disabled: e.prop("disabled"),
                        selected: e.prop("selected"),
                        title: e.prop("title")
                    };
                    else if (e.is("optgroup")) {
                        t = {
                            text: e.prop("label"),
                            children: [],
                            title: e.prop("title")
                        };
                        for (var i = e.children("option"), r = [], o = 0; o < i.length; o++) {
                            var s = n(i[o]),
                                a = this.item(s);
                            r.push(a)
                        }
                        t.children = r
                    }
                    return (t = this._normalizeItem(t)).element = e[0], n.data(e[0], "data", t), t
                }, i.prototype._normalizeItem = function(e) {
                    n.isPlainObject(e) || (e = {
                        id: e,
                        text: e
                    });
                    var t = {
                        selected: !1,
                        disabled: !1
                    };
                    return null != (e = n.extend({}, {
                        text: ""
                    }, e)).id && (e.id = e.id.toString()), null != e.text && (e.text = e.text.toString()), null == e._resultId && e.id && null != this.container && (e._resultId = this.generateResultId(this.container, e)), n.extend({}, t, e)
                }, i.prototype.matches = function(e, t) {
                    return this.options.get("matcher")(e, t)
                }, i
            }), t.define("select2/data/array", ["./select", "../utils", "jquery"], function(e, t, n) {
                function i(e, t) {
                    var n = t.get("data") || [];
                    i.__super__.constructor.call(this, e, t), this.addOptions(this.convertToOptions(n))
                }
                return t.Extend(i, e), i.prototype.select = function(e) {
                    var t = this.$element.find("option").filter(function(t, n) {
                        return n.value == e.id.toString()
                    });
                    0 === t.length && (t = this.option(e), this.addOptions(t)), i.__super__.select.call(this, e)
                }, i.prototype.convertToOptions = function(e) {
                    function i(e) {
                        return function() {
                            return n(this).val() == e.id
                        }
                    }
                    for (var r = this, o = this.$element.find("option"), s = o.map(function() {
                            return r.item(n(this)).id
                        }).get(), a = [], l = 0; l < e.length; l++) {
                        var c = this._normalizeItem(e[l]);
                        if (n.inArray(c.id, s) >= 0) {
                            var u = o.filter(i(c)),
                                d = this.item(u),
                                p = n.extend(!0, {}, c, d),
                                h = this.option(p);
                            u.replaceWith(h)
                        } else {
                            var f = this.option(c);
                            if (c.children) {
                                var g = this.convertToOptions(c.children);
                                t.appendMany(f, g)
                            }
                            a.push(f)
                        }
                    }
                    return a
                }, i
            }), t.define("select2/data/ajax", ["./array", "../utils", "jquery"], function(e, t, n) {
                function i(e, t) {
                    this.ajaxOptions = this._applyDefaults(t.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), i.__super__.constructor.call(this, e, t)
                }
                return t.Extend(i, e), i.prototype._applyDefaults = function(e) {
                    var t = {
                        data: function(e) {
                            return n.extend({}, e, {
                                q: e.term
                            })
                        },
                        transport: function(e, t, i) {
                            var r = n.ajax(e);
                            return r.then(t), r.fail(i), r
                        }
                    };
                    return n.extend({}, t, e, !0)
                }, i.prototype.processResults = function(e) {
                    return e
                }, i.prototype.query = function(e, t) {
                    function i() {
                        var i = o.transport(o, function(i) {
                            var o = r.processResults(i, e);
                            r.options.get("debug") && window.console && console.error && (o && o.results && n.isArray(o.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), t(o)
                        }, function() {
                            i.status && "0" === i.status || r.trigger("results:message", {
                                message: "errorLoading"
                            })
                        });
                        r._request = i
                    }
                    var r = this;
                    null != this._request && (n.isFunction(this._request.abort) && this._request.abort(), this._request = null);
                    var o = n.extend({
                        type: "GET"
                    }, this.ajaxOptions);
                    "function" == typeof o.url && (o.url = o.url.call(this.$element, e)), "function" == typeof o.data && (o.data = o.data.call(this.$element, e)), this.ajaxOptions.delay && null != e.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(i, this.ajaxOptions.delay)) : i()
                }, i
            }), t.define("select2/data/tags", ["jquery"], function(e) {
                function t(t, n, i) {
                    var r = i.get("tags"),
                        o = i.get("createTag");
                    void 0 !== o && (this.createTag = o);
                    var s = i.get("insertTag");
                    if (void 0 !== s && (this.insertTag = s), t.call(this, n, i), e.isArray(r))
                        for (var a = 0; a < r.length; a++) {
                            var l = r[a],
                                c = this._normalizeItem(l),
                                u = this.option(c);
                            this.$element.append(u)
                        }
                }
                return t.prototype.query = function(e, t, n) {
                    function i(e, o) {
                        for (var s = e.results, a = 0; a < s.length; a++) {
                            var l = s[a],
                                c = null != l.children && !i({
                                    results: l.children
                                }, !0);
                            if (l.text === t.term || c) return !o && (e.data = s, void n(e))
                        }
                        if (o) return !0;
                        var u = r.createTag(t);
                        if (null != u) {
                            var d = r.option(u);
                            d.attr("data-select2-tag", !0), r.addOptions([d]), r.insertTag(s, u)
                        }
                        e.results = s, n(e)
                    }
                    var r = this;
                    return this._removeOldTags(), null == t.term || null != t.page ? void e.call(this, t, n) : void e.call(this, t, i)
                }, t.prototype.createTag = function(t, n) {
                    var i = e.trim(n.term);
                    return "" === i ? null : {
                        id: i,
                        text: i
                    }
                }, t.prototype.insertTag = function(e, t, n) {
                    t.unshift(n)
                }, t.prototype._removeOldTags = function() {
                    (this._lastTag, this.$element.find("option[data-select2-tag]")).each(function() {
                        this.selected || e(this).remove()
                    })
                }, t
            }), t.define("select2/data/tokenizer", ["jquery"], function(e) {
                function t(e, t, n) {
                    var i = n.get("tokenizer");
                    void 0 !== i && (this.tokenizer = i), e.call(this, t, n)
                }
                return t.prototype.bind = function(e, t, n) {
                    e.call(this, t, n), this.$search = t.dropdown.$search || t.selection.$search || n.find(".select2-search__field")
                }, t.prototype.query = function(t, n, i) {
                    function r(t) {
                        var n = s._normalizeItem(t);
                        if (!s.$element.find("option").filter(function() {
                                return e(this).val() === n.id
                            }).length) {
                            var i = s.option(n);
                            i.attr("data-select2-tag", !0), s._removeOldTags(), s.addOptions([i])
                        }
                        o(n)
                    }

                    function o(e) {
                        s.trigger("select", {
                            data: e
                        })
                    }
                    var s = this;
                    n.term = n.term || "";
                    var a = this.tokenizer(n, this.options, r);
                    a.term !== n.term && (this.$search.length && (this.$search.val(a.term), this.$search.focus()), n.term = a.term), t.call(this, n, i)
                }, t.prototype.tokenizer = function(t, n, i, r) {
                    for (var o = i.get("tokenSeparators") || [], s = n.term, a = 0, l = this.createTag || function(e) {
                            return {
                                id: e.term,
                                text: e.term
                            }
                        }; a < s.length;) {
                        var c = s[a];
                        if (-1 !== e.inArray(c, o)) {
                            var u = s.substr(0, a),
                                d = l(e.extend({}, n, {
                                    term: u
                                }));
                            null != d ? (r(d), s = s.substr(a + 1) || "", a = 0) : a++
                        } else a++
                    }
                    return {
                        term: s
                    }
                }, t
            }), t.define("select2/data/minimumInputLength", [], function() {
                function e(e, t, n) {
                    this.minimumInputLength = n.get("minimumInputLength"), e.call(this, t, n)
                }
                return e.prototype.query = function(e, t, n) {
                    return t.term = t.term || "", t.term.length < this.minimumInputLength ? void this.trigger("results:message", {
                        message: "inputTooShort",
                        args: {
                            minimum: this.minimumInputLength,
                            input: t.term,
                            params: t
                        }
                    }) : void e.call(this, t, n)
                }, e
            }), t.define("select2/data/maximumInputLength", [], function() {
                function e(e, t, n) {
                    this.maximumInputLength = n.get("maximumInputLength"), e.call(this, t, n)
                }
                return e.prototype.query = function(e, t, n) {
                    return t.term = t.term || "", this.maximumInputLength > 0 && t.term.length > this.maximumInputLength ? void this.trigger("results:message", {
                        message: "inputTooLong",
                        args: {
                            maximum: this.maximumInputLength,
                            input: t.term,
                            params: t
                        }
                    }) : void e.call(this, t, n)
                }, e
            }), t.define("select2/data/maximumSelectionLength", [], function() {
                function e(e, t, n) {
                    this.maximumSelectionLength = n.get("maximumSelectionLength"), e.call(this, t, n)
                }
                return e.prototype.query = function(e, t, n) {
                    var i = this;
                    this.current(function(r) {
                        var o = null != r ? r.length : 0;
                        return i.maximumSelectionLength > 0 && o >= i.maximumSelectionLength ? void i.trigger("results:message", {
                            message: "maximumSelected",
                            args: {
                                maximum: i.maximumSelectionLength
                            }
                        }) : void e.call(i, t, n)
                    })
                }, e
            }), t.define("select2/dropdown", ["jquery", "./utils"], function(e, t) {
                function n(e, t) {
                    this.$element = e, this.options = t, n.__super__.constructor.call(this)
                }
                return t.Extend(n, t.Observable), n.prototype.render = function() {
                    var t = e('<span class="select2-dropdown"><span class="select2-results"></span></span>');
                    return t.attr("dir", this.options.get("dir")), this.$dropdown = t, t
                }, n.prototype.bind = function() {}, n.prototype.position = function() {}, n.prototype.destroy = function() {
                    this.$dropdown.remove()
                }, n
            }), t.define("select2/dropdown/search", ["jquery", "../utils"], function(e) {
                function t() {}
                return t.prototype.render = function(t) {
                    var n = t.call(this),
                        i = e('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');
                    return this.$searchContainer = i, this.$search = i.find("input"), n.prepend(i), n
                }, t.prototype.bind = function(t, n, i) {
                    var r = this;
                    t.call(this, n, i), this.$search.on("keydown", function(e) {
                        r.trigger("keypress", e), r._keyUpPrevented = e.isDefaultPrevented()
                    }), this.$search.on("input", function() {
                        e(this).off("keyup")
                    }), this.$search.on("keyup input", function(e) {
                        r.handleSearch(e)
                    }), n.on("open", function() {
                        r.$search.attr("tabindex", 0), r.$search.focus(), window.setTimeout(function() {
                            r.$search.focus()
                        }, 0)
                    }), n.on("close", function() {
                        r.$search.attr("tabindex", -1), r.$search.val("")
                    }), n.on("focus", function() {
                        n.isOpen() && r.$search.focus()
                    }), n.on("results:all", function(e) {
                        null != e.query.term && "" !== e.query.term || (r.showSearch(e) ? r.$searchContainer.removeClass("select2-search--hide") : r.$searchContainer.addClass("select2-search--hide"))
                    })
                }, t.prototype.handleSearch = function() {
                    if (!this._keyUpPrevented) {
                        var e = this.$search.val();
                        this.trigger("query", {
                            term: e
                        })
                    }
                    this._keyUpPrevented = !1
                }, t.prototype.showSearch = function() {
                    return !0
                }, t
            }), t.define("select2/dropdown/hidePlaceholder", [], function() {
                function e(e, t, n, i) {
                    this.placeholder = this.normalizePlaceholder(n.get("placeholder")), e.call(this, t, n, i)
                }
                return e.prototype.append = function(e, t) {
                    t.results = this.removePlaceholder(t.results), e.call(this, t)
                }, e.prototype.normalizePlaceholder = function(e, t) {
                    return "string" == typeof t && (t = {
                        id: "",
                        text: t
                    }), t
                }, e.prototype.removePlaceholder = function(e, t) {
                    for (var n = t.slice(0), i = t.length - 1; i >= 0; i--) {
                        var r = t[i];
                        this.placeholder.id === r.id && n.splice(i, 1)
                    }
                    return n
                }, e
            }), t.define("select2/dropdown/infiniteScroll", ["jquery"], function(e) {
                function t(e, t, n, i) {
                    this.lastParams = {}, e.call(this, t, n, i), this.$loadingMore = this.createLoadingMore(), this.loading = !1
                }
                return t.prototype.append = function(e, t) {
                    this.$loadingMore.remove(), this.loading = !1, e.call(this, t), this.showLoadingMore(t) && this.$results.append(this.$loadingMore)
                }, t.prototype.bind = function(t, n, i) {
                    var r = this;
                    t.call(this, n, i), n.on("query", function(e) {
                        r.lastParams = e, r.loading = !0
                    }), n.on("query:append", function(e) {
                        r.lastParams = e, r.loading = !0
                    }), this.$results.on("scroll", function() {
                        var t = e.contains(document.documentElement, r.$loadingMore[0]);
                        !r.loading && t && (r.$results.offset().top + r.$results.outerHeight(!1) + 50 >= r.$loadingMore.offset().top + r.$loadingMore.outerHeight(!1) && r.loadMore())
                    })
                }, t.prototype.loadMore = function() {
                    this.loading = !0;
                    var t = e.extend({}, {
                        page: 1
                    }, this.lastParams);
                    t.page++, this.trigger("query:append", t)
                }, t.prototype.showLoadingMore = function(e, t) {
                    return t.pagination && t.pagination.more
                }, t.prototype.createLoadingMore = function() {
                    var t = e('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                        n = this.options.get("translations").get("loadingMore");
                    return t.html(n(this.lastParams)), t
                }, t
            }), t.define("select2/dropdown/attachBody", ["jquery", "../utils"], function(e, t) {
                function n(t, n, i) {
                    this.$dropdownParent = i.get("dropdownParent") || e(document.body), t.call(this, n, i)
                }
                return n.prototype.bind = function(e, t, n) {
                    var i = this,
                        r = !1;
                    e.call(this, t, n), t.on("open", function() {
                        i._showDropdown(), i._attachPositioningHandler(t), r || (r = !0, t.on("results:all", function() {
                            i._positionDropdown(), i._resizeDropdown()
                        }), t.on("results:append", function() {
                            i._positionDropdown(), i._resizeDropdown()
                        }))
                    }), t.on("close", function() {
                        i._hideDropdown(), i._detachPositioningHandler(t)
                    }), this.$dropdownContainer.on("mousedown", function(e) {
                        e.stopPropagation()
                    })
                }, n.prototype.destroy = function(e) {
                    e.call(this), this.$dropdownContainer.remove()
                }, n.prototype.position = function(e, t, n) {
                    t.attr("class", n.attr("class")), t.removeClass("select2"), t.addClass("select2-container--open"), t.css({
                        position: "absolute",
                        top: -999999
                    }), this.$container = n
                }, n.prototype.render = function(t) {
                    var n = e("<span></span>"),
                        i = t.call(this);
                    return n.append(i), this.$dropdownContainer = n, n
                }, n.prototype._hideDropdown = function() {
                    this.$dropdownContainer.detach()
                }, n.prototype._attachPositioningHandler = function(n, i) {
                    var r = this,
                        o = "scroll.select2." + i.id,
                        s = "resize.select2." + i.id,
                        a = "orientationchange.select2." + i.id,
                        l = this.$container.parents().filter(t.hasScroll);
                    l.each(function() {
                        e(this).data("select2-scroll-position", {
                            x: e(this).scrollLeft(),
                            y: e(this).scrollTop()
                        })
                    }), l.on(o, function() {
                        var t = e(this).data("select2-scroll-position");
                        e(this).scrollTop(t.y)
                    }), e(window).on(o + " " + s + " " + a, function() {
                        r._positionDropdown(), r._resizeDropdown()
                    })
                }, n.prototype._detachPositioningHandler = function(n, i) {
                    var r = "scroll.select2." + i.id,
                        o = "resize.select2." + i.id,
                        s = "orientationchange.select2." + i.id;
                    this.$container.parents().filter(t.hasScroll).off(r), e(window).off(r + " " + o + " " + s)
                }, n.prototype._positionDropdown = function() {
                    var t = e(window),
                        n = this.$dropdown.hasClass("select2-dropdown--above"),
                        i = this.$dropdown.hasClass("select2-dropdown--below"),
                        r = null,
                        o = this.$container.offset();
                    o.bottom = o.top + this.$container.outerHeight(!1);
                    var s = {
                        height: this.$container.outerHeight(!1)
                    };
                    s.top = o.top, s.bottom = o.top + s.height;
                    var a = {
                            height: this.$dropdown.outerHeight(!1)
                        },
                        l = {
                            top: t.scrollTop(),
                            bottom: t.scrollTop() + t.height()
                        },
                        c = l.top < o.top - a.height,
                        u = l.bottom > o.bottom + a.height,
                        d = {
                            left: o.left,
                            top: s.bottom
                        },
                        p = this.$dropdownParent;
                    "static" === p.css("position") && (p = p.offsetParent());
                    var h = p.offset();
                    d.top -= h.top, d.left -= h.left, n || i || (r = "below"), u || !c || n ? !c && u && n && (r = "below") : r = "above", ("above" == r || n && "below" !== r) && (d.top = s.top - h.top - a.height), null != r && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + r), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + r)), this.$dropdownContainer.css(d)
                }, n.prototype._resizeDropdown = function() {
                    var e = {
                        width: this.$container.outerWidth(!1) + "px"
                    };
                    this.options.get("dropdownAutoWidth") && (e.minWidth = e.width, e.position = "relative", e.width = "auto"), this.$dropdown.css(e)
                }, n.prototype._showDropdown = function() {
                    this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown()
                }, n
            }), t.define("select2/dropdown/minimumResultsForSearch", [], function() {
                function e(t) {
                    for (var n = 0, i = 0; i < t.length; i++) {
                        var r = t[i];
                        r.children ? n += e(r.children) : n++
                    }
                    return n
                }

                function t(e, t, n, i) {
                    this.minimumResultsForSearch = n.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), e.call(this, t, n, i)
                }
                return t.prototype.showSearch = function(t, n) {
                    return !(e(n.data.results) < this.minimumResultsForSearch) && t.call(this, n)
                }, t
            }), t.define("select2/dropdown/selectOnClose", [], function() {
                function e() {}
                return e.prototype.bind = function(e, t, n) {
                    var i = this;
                    e.call(this, t, n), t.on("close", function(e) {
                        i._handleSelectOnClose(e)
                    })
                }, e.prototype._handleSelectOnClose = function(e, t) {
                    if (t && null != t.originalSelect2Event) {
                        var n = t.originalSelect2Event;
                        if ("select" === n._type || "unselect" === n._type) return
                    }
                    var i = this.getHighlightedResults();
                    if (!(i.length < 1)) {
                        var r = i.data("data");
                        null != r.element && r.element.selected || null == r.element && r.selected || this.trigger("select", {
                            data: r
                        })
                    }
                }, e
            }), t.define("select2/dropdown/closeOnSelect", [], function() {
                function e() {}
                return e.prototype.bind = function(e, t, n) {
                    var i = this;
                    e.call(this, t, n), t.on("select", function(e) {
                        i._selectTriggered(e)
                    }), t.on("unselect", function(e) {
                        i._selectTriggered(e)
                    })
                }, e.prototype._selectTriggered = function(e, t) {
                    var n = t.originalEvent;
                    n && n.ctrlKey || this.trigger("close", {
                        originalEvent: n,
                        originalSelect2Event: t
                    })
                }, e
            }), t.define("select2/i18n/en", [], function() {
                return {
                    errorLoading: function() {
                        return "The results could not be loaded."
                    },
                    inputTooLong: function(e) {
                        var t = e.input.length - e.maximum,
                            n = "Please delete " + t + " character";
                        return 1 != t && (n += "s"), n
                    },
                    inputTooShort: function(e) {
                        return "Please enter " + (e.minimum - e.input.length) + " or more characters"
                    },
                    loadingMore: function() {
                        return "Loading more results\u2026"
                    },
                    maximumSelected: function(e) {
                        var t = "You can only select " + e.maximum + " item";
                        return 1 != e.maximum && (t += "s"), t
                    },
                    noResults: function() {
                        return "No results found"
                    },
                    searching: function() {
                        return "Searching\u2026"
                    }
                }
            }), t.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function(e, t, n, i, r, o, s, a, l, c, u, d, p, h, f, g, m, v, y, _, $, w, b, A, x, E, C, O, S) {
                function T() {
                    this.reset()
                }
                return T.prototype.apply = function(d) {
                    if (null == (d = e.extend(!0, {}, this.defaults, d)).dataAdapter) {
                        if (null != d.ajax ? d.dataAdapter = f : null != d.data ? d.dataAdapter = h : d.dataAdapter = p, d.minimumInputLength > 0 && (d.dataAdapter = c.Decorate(d.dataAdapter, v)), d.maximumInputLength > 0 && (d.dataAdapter = c.Decorate(d.dataAdapter, y)), d.maximumSelectionLength > 0 && (d.dataAdapter = c.Decorate(d.dataAdapter, _)), d.tags && (d.dataAdapter = c.Decorate(d.dataAdapter, g)), (null != d.tokenSeparators || null != d.tokenizer) && (d.dataAdapter = c.Decorate(d.dataAdapter, m)), null != d.query) {
                            var S = t(d.amdBase + "compat/query");
                            d.dataAdapter = c.Decorate(d.dataAdapter, S)
                        }
                        if (null != d.initSelection) {
                            var T = t(d.amdBase + "compat/initSelection");
                            d.dataAdapter = c.Decorate(d.dataAdapter, T)
                        }
                    }
                    if (null == d.resultsAdapter && (d.resultsAdapter = n, null != d.ajax && (d.resultsAdapter = c.Decorate(d.resultsAdapter, A)), null != d.placeholder && (d.resultsAdapter = c.Decorate(d.resultsAdapter, b)), d.selectOnClose && (d.resultsAdapter = c.Decorate(d.resultsAdapter, C))), null == d.dropdownAdapter) {
                        if (d.multiple) d.dropdownAdapter = $;
                        else {
                            var D = c.Decorate($, w);
                            d.dropdownAdapter = D
                        }
                        if (0 !== d.minimumResultsForSearch && (d.dropdownAdapter = c.Decorate(d.dropdownAdapter, E)), d.closeOnSelect && (d.dropdownAdapter = c.Decorate(d.dropdownAdapter, O)), null != d.dropdownCssClass || null != d.dropdownCss || null != d.adaptDropdownCssClass) {
                            var q = t(d.amdBase + "compat/dropdownCss");
                            d.dropdownAdapter = c.Decorate(d.dropdownAdapter, q)
                        }
                        d.dropdownAdapter = c.Decorate(d.dropdownAdapter, x)
                    }
                    if (null == d.selectionAdapter) {
                        if (d.multiple ? d.selectionAdapter = r : d.selectionAdapter = i, null != d.placeholder && (d.selectionAdapter = c.Decorate(d.selectionAdapter, o)), d.allowClear && (d.selectionAdapter = c.Decorate(d.selectionAdapter, s)), d.multiple && (d.selectionAdapter = c.Decorate(d.selectionAdapter, a)), null != d.containerCssClass || null != d.containerCss || null != d.adaptContainerCssClass) {
                            var L = t(d.amdBase + "compat/containerCss");
                            d.selectionAdapter = c.Decorate(d.selectionAdapter, L)
                        }
                        d.selectionAdapter = c.Decorate(d.selectionAdapter, l)
                    }
                    if ("string" == typeof d.language)
                        if (d.language.indexOf("-") > 0) {
                            var j = d.language.split("-")[0];
                            d.language = [d.language, j]
                        } else d.language = [d.language];
                    if (e.isArray(d.language)) {
                        var P = new u;
                        d.language.push("en");
                        for (var k = d.language, I = 0; I < k.length; I++) {
                            var R = k[I],
                                M = {};
                            try {
                                M = u.loadPath(R)
                            } catch (z) {
                                try {
                                    R = this.defaults.amdLanguageBase + R, M = u.loadPath(R)
                                } catch (N) {
                                    d.debug && window.console && console.warn && console.warn('Select2: The language file for "' + R + '" could not be automatically loaded. A fallback will be used instead.');
                                    continue
                                }
                            }
                            P.extend(M)
                        }
                        d.translations = P
                    } else {
                        var U = u.loadPath(this.defaults.amdLanguageBase + "en"),
                            H = new u(d.language);
                        H.extend(U), d.translations = H
                    }
                    return d
                }, T.prototype.reset = function() {
                    function t(e) {
                        function t(e) {
                            return d[e] || e
                        }
                        return e.replace(/[^\u0000-\u007E]/g, t)
                    }

                    function n(i, r) {
                        if ("" === e.trim(i.term)) return r;
                        if (r.children && r.children.length > 0) {
                            for (var o = e.extend(!0, {}, r), s = r.children.length - 1; s >= 0; s--) {
                                null == n(i, r.children[s]) && o.children.splice(s, 1)
                            }
                            return o.children.length > 0 ? o : n(i, o)
                        }
                        var a = t(r.text).toUpperCase(),
                            l = t(i.term).toUpperCase();
                        return a.indexOf(l) > -1 ? r : null
                    }
                    this.defaults = {
                        amdBase: "./",
                        amdLanguageBase: "./i18n/",
                        closeOnSelect: !0,
                        debug: !1,
                        dropdownAutoWidth: !1,
                        escapeMarkup: c.escapeMarkup,
                        language: S,
                        matcher: n,
                        minimumInputLength: 0,
                        maximumInputLength: 0,
                        maximumSelectionLength: 0,
                        minimumResultsForSearch: 0,
                        selectOnClose: !1,
                        sorter: function(e) {
                            return e
                        },
                        templateResult: function(e) {
                            return e.text
                        },
                        templateSelection: function(e) {
                            return e.text
                        },
                        theme: "default",
                        width: "resolve"
                    }
                }, T.prototype.set = function(t, n) {
                    var i = {};
                    i[e.camelCase(t)] = n;
                    var r = c._convertData(i);
                    e.extend(this.defaults, r)
                }, new T
            }), t.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function(e, t, n, i) {
                function r(t, r) {
                    if (this.options = t, null != r && this.fromElement(r), this.options = n.apply(this.options), r && r.is("input")) {
                        var o = e(this.get("amdBase") + "compat/inputData");
                        this.options.dataAdapter = i.Decorate(this.options.dataAdapter, o)
                    }
                }
                return r.prototype.fromElement = function(e) {
                    var n = ["select2"];
                    null == this.options.multiple && (this.options.multiple = e.prop("multiple")), null == this.options.disabled && (this.options.disabled = e.prop("disabled")), null == this.options.language && (e.prop("lang") ? this.options.language = e.prop("lang").toLowerCase() : e.closest("[lang]").prop("lang") && (this.options.language = e.closest("[lang]").prop("lang"))), null == this.options.dir && (e.prop("dir") ? this.options.dir = e.prop("dir") : e.closest("[dir]").prop("dir") ? this.options.dir = e.closest("[dir]").prop("dir") : this.options.dir = "ltr"), e.prop("disabled", this.options.disabled), e.prop("multiple", this.options.multiple), e.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), e.data("data", e.data("select2Tags")), e.data("tags", !0)), e.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), e.attr("ajax--url", e.data("ajaxUrl")), e.data("ajax--url", e.data("ajaxUrl")));
                    var r = {};
                    r = t.fn.jquery && "1." == t.fn.jquery.substr(0, 2) && e[0].dataset ? t.extend(!0, {}, e[0].dataset, e.data()) : e.data();
                    var o = t.extend(!0, {}, r);
                    for (var s in o = i._convertData(o)) t.inArray(s, n) > -1 || (t.isPlainObject(this.options[s]) ? t.extend(this.options[s], o[s]) : this.options[s] = o[s]);
                    return this
                }, r.prototype.get = function(e) {
                    return this.options[e]
                }, r.prototype.set = function(e, t) {
                    this.options[e] = t
                }, r
            }), t.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function(e, t, n, i) {
                var r = function(e, n) {
                    null != e.data("select2") && e.data("select2").destroy(), this.$element = e, this.id = this._generateId(e), n = n || {}, this.options = new t(n, e), r.__super__.constructor.call(this);
                    var i = e.attr("tabindex") || 0;
                    e.data("old-tabindex", i), e.attr("tabindex", "-1");
                    var o = this.options.get("dataAdapter");
                    this.dataAdapter = new o(e, this.options);
                    var s = this.render();
                    this._placeContainer(s);
                    var a = this.options.get("selectionAdapter");
                    this.selection = new a(e, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, s);
                    var l = this.options.get("dropdownAdapter");
                    this.dropdown = new l(e, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, s);
                    var c = this.options.get("resultsAdapter");
                    this.results = new c(e, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);
                    var u = this;
                    this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function(e) {
                        u.trigger("selection:update", {
                            data: e
                        })
                    }), e.addClass("select2-hidden-accessible"), e.attr("aria-hidden", "true"), this._syncAttributes(), e.data("select2", this)
                };
                return n.Extend(r, n.Observable), r.prototype._generateId = function(e) {
                    return "select2-" + (null != e.attr("id") ? e.attr("id") : null != e.attr("name") ? e.attr("name") + "-" + n.generateChars(2) : n.generateChars(4)).replace(/(:|\.|\[|\]|,)/g, "")
                }, r.prototype._placeContainer = function(e) {
                    e.insertAfter(this.$element);
                    var t = this._resolveWidth(this.$element, this.options.get("width"));
                    null != t && e.css("width", t)
                }, r.prototype._resolveWidth = function(e, t) {
                    var n = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                    if ("resolve" == t) {
                        var i = this._resolveWidth(e, "style");
                        return null != i ? i : this._resolveWidth(e, "element")
                    }
                    if ("element" == t) {
                        var r = e.outerWidth(!1);
                        return 0 >= r ? "auto" : r + "px"
                    }
                    if ("style" == t) {
                        var o = e.attr("style");
                        if ("string" != typeof o) return null;
                        for (var s = o.split(";"), a = 0, l = s.length; l > a; a += 1) {
                            var c = s[a].replace(/\s/g, "").match(n);
                            if (null !== c && c.length >= 1) return c[1]
                        }
                        return null
                    }
                    return t
                }, r.prototype._bindAdapters = function() {
                    this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container)
                }, r.prototype._registerDomEvents = function() {
                    var t = this;
                    this.$element.on("change.select2", function() {
                        t.dataAdapter.current(function(e) {
                            t.trigger("selection:update", {
                                data: e
                            })
                        })
                    }), this.$element.on("focus.select2", function(e) {
                        t.trigger("focus", e)
                    }), this._syncA = n.bind(this._syncAttributes, this), this._syncS = n.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);
                    var i = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
                    null != i ? (this._observer = new i(function(n) {
                        e.each(n, t._syncA), e.each(n, t._syncS)
                    }), this._observer.observe(this.$element[0], {
                        attributes: !0,
                        childList: !0,
                        subtree: !1
                    })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", t._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", t._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", t._syncS, !1))
                }, r.prototype._registerDataEvents = function() {
                    var e = this;
                    this.dataAdapter.on("*", function(t, n) {
                        e.trigger(t, n)
                    })
                }, r.prototype._registerSelectionEvents = function() {
                    var t = this,
                        n = ["toggle", "focus"];
                    this.selection.on("toggle", function() {
                        t.toggleDropdown()
                    }), this.selection.on("focus", function(e) {
                        t.focus(e)
                    }), this.selection.on("*", function(i, r) {
                        -1 === e.inArray(i, n) && t.trigger(i, r)
                    })
                }, r.prototype._registerDropdownEvents = function() {
                    var e = this;
                    this.dropdown.on("*", function(t, n) {
                        e.trigger(t, n)
                    })
                }, r.prototype._registerResultsEvents = function() {
                    var e = this;
                    this.results.on("*", function(t, n) {
                        e.trigger(t, n)
                    })
                }, r.prototype._registerEvents = function() {
                    var e = this;
                    this.on("open", function() {
                        e.$container.addClass("select2-container--open")
                    }), this.on("close", function() {
                        e.$container.removeClass("select2-container--open")
                    }), this.on("enable", function() {
                        e.$container.removeClass("select2-container--disabled")
                    }), this.on("disable", function() {
                        e.$container.addClass("select2-container--disabled")
                    }), this.on("blur", function() {
                        e.$container.removeClass("select2-container--focus")
                    }), this.on("query", function(t) {
                        e.isOpen() || e.trigger("open", {}), this.dataAdapter.query(t, function(n) {
                            e.trigger("results:all", {
                                data: n,
                                query: t
                            })
                        })
                    }), this.on("query:append", function(t) {
                        this.dataAdapter.query(t, function(n) {
                            e.trigger("results:append", {
                                data: n,
                                query: t
                            })
                        })
                    }), this.on("keypress", function(t) {
                        var n = t.which;
                        e.isOpen() ? n === i.ESC || n === i.TAB || n === i.UP && t.altKey ? (e.close(), t.preventDefault()) : n === i.ENTER ? (e.trigger("results:select", {}), t.preventDefault()) : n === i.SPACE && t.ctrlKey ? (e.trigger("results:toggle", {}), t.preventDefault()) : n === i.UP ? (e.trigger("results:previous", {}), t.preventDefault()) : n === i.DOWN && (e.trigger("results:next", {}), t.preventDefault()) : (n === i.ENTER || n === i.SPACE || n === i.DOWN && t.altKey) && (e.open(), t.preventDefault())
                    })
                }, r.prototype._syncAttributes = function() {
                    this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {})
                }, r.prototype._syncSubtree = function(e, t) {
                    var n = !1,
                        i = this;
                    if (!e || !e.target || "OPTION" === e.target.nodeName || "OPTGROUP" === e.target.nodeName) {
                        if (t)
                            if (t.addedNodes && t.addedNodes.length > 0)
                                for (var r = 0; r < t.addedNodes.length; r++) {
                                    t.addedNodes[r].selected && (n = !0)
                                } else t.removedNodes && t.removedNodes.length > 0 && (n = !0);
                            else n = !0;
                        n && this.dataAdapter.current(function(e) {
                            i.trigger("selection:update", {
                                data: e
                            })
                        })
                    }
                }, r.prototype.trigger = function(e, t) {
                    var n = r.__super__.trigger,
                        i = {
                            open: "opening",
                            close: "closing",
                            select: "selecting",
                            unselect: "unselecting"
                        };
                    if (void 0 === t && (t = {}), e in i) {
                        var o = i[e],
                            s = {
                                prevented: !1,
                                name: e,
                                args: t
                            };
                        if (n.call(this, o, s), s.prevented) return void(t.prevented = !0)
                    }
                    n.call(this, e, t)
                }, r.prototype.toggleDropdown = function() {
                    this.options.get("disabled") || (this.isOpen() ? this.close() : this.open())
                }, r.prototype.open = function() {
                    this.isOpen() || this.trigger("query", {})
                }, r.prototype.close = function() {
                    this.isOpen() && this.trigger("close", {})
                }, r.prototype.isOpen = function() {
                    return this.$container.hasClass("select2-container--open")
                }, r.prototype.hasFocus = function() {
                    return this.$container.hasClass("select2-container--focus")
                }, r.prototype.focus = function() {
                    this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}))
                }, r.prototype.enable = function(e) {
                    this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), (null == e || 0 === e.length) && (e = [!0]);
                    var t = !e[0];
                    this.$element.prop("disabled", t)
                }, r.prototype.data = function() {
                    this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');
                    var e = [];
                    return this.dataAdapter.current(function(t) {
                        e = t
                    }), e
                }, r.prototype.val = function(t) {
                    if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == t || 0 === t.length) return this.$element.val();
                    var n = t[0];
                    e.isArray(n) && (n = e.map(n, function(e) {
                        return e.toString()
                    })), this.$element.val(n).trigger("change")
                }, r.prototype.destroy = function() {
                    this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null
                }, r.prototype.render = function() {
                    var t = e('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');
                    return t.attr("dir", this.options.get("dir")), this.$container = t, this.$container.addClass("select2-container--" + this.options.get("theme")), t.data("element", this.$element), t
                }, r
            }), t.define("jquery-mousewheel", ["jquery"], function(e) {
                return e
            }), t.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function(e, t, n, i) {
                if (null == e.fn.select2) {
                    var r = ["open", "close", "destroy"];
                    e.fn.select2 = function(t) {
                        if ("object" == typeof(t = t || {})) return this.each(function() {
                            var i = e.extend(!0, {}, t);
                            new n(e(this), i)
                        }), this;
                        if ("string" == typeof t) {
                            var i, o = Array.prototype.slice.call(arguments, 1);
                            return this.each(function() {
                                var n = e(this).data("select2");
                                null == n && window.console && console.error && console.error("The select2('" + t + "') method was called on an element that is not using Select2."), i = n[t].apply(n, o)
                            }), e.inArray(t, r) > -1 ? this : i
                        }
                        throw new Error("Invalid arguments for Select2: " + t)
                    }
                }
                return null == e.fn.select2.defaults && (e.fn.select2.defaults = i), n
            }), {
                define: t.define,
                require: t.require
            }
        }(),
        n = t.require("jquery.select2");
    return e.fn.select2.amd = t, n
}),
function() {
    $(document).ready(function() {
        $(".select2_select").select2(), $(".search_select2").select2(), $(".search_select2.multi").select2({
            multiple: !0,
            placeholder: $(this).data("placeholder")
        }).on("search_select2:unselecting", function() {
            if (1 === $(this).val().length) return $(this).val("").trigger("change"), !1
        })
    })
}.call(this);