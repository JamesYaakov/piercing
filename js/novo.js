/*! Superslides - v0.6.3-wip - 2013-12-17
 * https://github.com/nicinabox/superslides
 * Copyright (c) 2013 Nic Aitch; Licensed MIT */
(function (i, t) {
    var n, e = "superslides";
    n = function (n, e) {
        this.options = t.extend({
            play: !1,
            animation_speed: 600,
            animation_easing: "swing",
            animation: "slide",
            inherit_width_from: i,
            inherit_height_from: i,
            pagination: !0,
            hashchange: !1,
            scrollable: !0,
            elements: {
                preserve: ".preserve",
                nav: ".slides-navigation",
                container: ".slides-container",
                pagination: ".slides-pagination"
            }
        }, e);
        var s = this,
            o = t("<div>", {
                "class": "slides-control"
            }),
            a = 1;
        this.$el = t(n), this.$container = this.$el.find(this.options.elements.container);
        var r = function () {
            return a = s._findMultiplier(), s.$el.on("click", s.options.elements.nav + " a", function (i) {
                i.preventDefault(), s.stop(), t(this).hasClass("next") ? s.animate("next", function () {
                    s.start()
                }) : s.animate("prev", function () {
                    s.start()
                })
            }), t(document).on("keyup", function (i) {
                37 === i.keyCode && s.animate("prev"), 39 === i.keyCode && s.animate("next")
            }), t(i).on("resize", function () {
                setTimeout(function () {
                    var i = s.$container.children();
                    s.width = s._findWidth(), s.height = s._findHeight(), i.css({
                        width: s.width,
                        left: s.width
                    }), s.css.containers(), s.css.images()
                }, 10)
            }), s.options.hashchange && t(i).on("hashchange", function () {
                var i, t = s._parseHash();
                i = s._upcomingSlide(t), i >= 0 && i !== s.current && s.animate(i)
            }), s.pagination._events(), s.start(), s
        },


            l = {
                _setCurrent: function (i) {
                    if (s.$pagination) {
                        var t = s.$pagination.children();
                        t.removeClass("current"), t.eq(i).addClass("current")
                    }
                },
                _addItem: function (i) {
                    var n = i + 1,
                        e = n,
                        o = s.$container.children().eq(i),
                        a = o.attr("id");
                    a && (e = a);
                    var r = t("<a>", {
                        href: "#" + e,
                        text: e
                    });
                    r.appendTo(s.$pagination)
                },
                _setup: function () {
                    if (s.options.pagination && 1 !== s.size()) {
                        var i = t("<nav>", {
                            "class": s.options.elements.pagination.replace(/^\./, "")
                        });
                        s.$pagination = i.appendTo(s.$el);
                        for (var n = 0; s.size() > n; n++) s.pagination._addItem(n)
                    }
                },
                _events: function () {
                    s.$el.on("click", s.options.elements.pagination + " a", function (i) {
                        i.preventDefault();
                        var t, n = s._parseHash(this.hash);
                        t = s._upcomingSlide(n, !0), t !== s.current && s.animate(t, function () {
                            s.start()
                        })
                    })
                }
            };
        return this.css = h, this.image = d, this.pagination = l, this.fx = c, this.animation = this.fx[this.options.animation], this.$control = this.$container.wrap(o).parent(".slides-control"), s._findPositions(), s.width = s._findWidth(), s.height = s._findHeight(), this.css.children(), this.css.containers(), this.css.images(), this.pagination._setup(), r()

    }, t.fn[e] = function (i, s) {
        var o = [];
        return this.each(function () {
            var a, r, h;
            return a = t(this), r = a.data(e), h = "object" == typeof i && i, r || (o = a.data(e, r = new n(this, h))), "string" == typeof i && (o = r[i], "function" == typeof o) ? o = o.call(r, s) : void 0
        }), o
    }, t.fn[e].fx = {}
})(this, jQuery); /*CONTROLA UMA PARTE DO TOP MAIN*/

//Plugin name        : inewsticker - jQuery news ticker 
//Version            : 0.1.0
//Author             : mahdi khaksar
//Author website     : progpars.com
//Url	 			 : http://www.ijquery.ir/effect/inewsticker/
(function (e) {
    e.fn.inewsticker = function (t) {
        var n = {
            speed: 200,
            effect: "fade",
            dir: "ltr",
            font_size: null,
            color: null,
            font_family: null,
            delay_after: 3e3
        };
        e.extend(n, t);
        var r = e(this);
        var i = r.children();
        i.not(":first").hide();
        r.css("direction", t.dir);
        r.css("font-size", t.font_size);
        r.css("color", t.color);
        r.css("font-family", t.font_family);
        setInterval(function () {
            var e = r.children();
            e.not(":first").hide();
            var n = e.eq(0);
            var i = e.eq(1);
            if (t.effect == "slide") {
                n.slideUp();
                i.slideDown(function () {
                    n.remove().appendTo(r)
                })
            }
            if (t.effect == "fade") {
                n.fadeOut(function () {
                    i.fadeIn();
                    n.remove().appendTo(r)
                })
            }
        }, t.speed);
        if (t.effect == "typing") {
            var s = 0;
            var o = 0;
            var u = t.delay_after / t.speed;
            var a = (new Array(1 + u)).join(" ");
            var f = new Array;
            i.each(function () {
                f.push(e(this).text() + a)
            });
            count = f.length;
            setInterval(function () {
                result = f[o].substring(0, s);
                e(r).html(result);
                s++;
                if (s == f[o].length) {
                    s = 0;
                    r.appendTo(r).hide().fadeIn("slow");
                    o++;
                    if (count == o) {
                        o = 0
                    }
                }
            }, t.speed)
        }
    }
})(jQuery)/*CONTROLA UMA PARTE DO TOP MAIN*/

/*!
 * imagesLoaded PACKAGED v4.1.3
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

! function (e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function () {
    function e() { }
    var t = e.prototype;
    return t.on = function (e, t) {
        if (e && t) {
            var i = this._events = this._events || {},
                n = i[e] = i[e] || [];
            return -1 == n.indexOf(t) && n.push(t), this
        }
    }, t.once = function (e, t) {
        if (e && t) {
            this.on(e, t);
            var i = this._onceEvents = this._onceEvents || {},
                n = i[e] = i[e] || {};
            return n[t] = !0, this
        }
    }, t.off = function (e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            var n = i.indexOf(t);
            return -1 != n && i.splice(n, 1), this
        }
    }, t.emitEvent = function (e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            var n = 0,
                o = i[n];
            t = t || [];
            for (var r = this._onceEvents && this._onceEvents[e]; o;) {
                var s = r && r[o];
                s && (this.off(e, o), delete r[o]), o.apply(this, t), n += s ? 0 : 1, o = i[n]
            }
            return this
        }
    }, t.allOff = t.removeAllListeners = function () {
        delete this._events, delete this._onceEvents
    }, e
}),
    function (e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function (i) {
            return t(e, i)
        }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
    }("undefined" != typeof window ? window : this, function (e, t) {
        function i(e, t) {
            for (var i in t) e[i] = t[i];
            return e
        }

        function n(e) {
            var t = [];
            if (Array.isArray(e)) t = e;
            else if ("number" == typeof e.length)
                for (var i = 0; i < e.length; i++) t.push(e[i]);
            else t.push(e);
            return t
        }

        function o(e, t, r) {
            return this instanceof o ? ("string" == typeof e && (e = document.querySelectorAll(e)), this.elements = n(e), this.options = i({}, this.options), "function" == typeof t ? r = t : i(this.options, t), r && this.on("always", r), this.getImages(), h && (this.jqDeferred = new h.Deferred), void setTimeout(function () {
                this.check()
            }.bind(this))) : new o(e, t, r)
        }

        function r(e) {
            this.img = e
        }

        function s(e, t) {
            this.url = e, this.element = t, this.img = new Image
        }
        var h = e.jQuery,
            a = e.console;
        o.prototype = Object.create(t.prototype), o.prototype.options = {}, o.prototype.getImages = function () {
            this.images = [], this.elements.forEach(this.addElementImages, this)
        }, o.prototype.addElementImages = function (e) {
            "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
            var t = e.nodeType;
            if (t && d[t]) {
                for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
                    var o = i[n];
                    this.addImage(o)
                }
                if ("string" == typeof this.options.background) {
                    var r = e.querySelectorAll(this.options.background);
                    for (n = 0; n < r.length; n++) {
                        var s = r[n];
                        this.addElementBackgroundImages(s)
                    }
                }
            }
        };
        var d = {
            1: !0,
            9: !0,
            11: !0
        };
        return o.prototype.addElementBackgroundImages = function (e) {
            var t = getComputedStyle(e);
            if (t)
                for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n;) {
                    var o = n && n[2];
                    o && this.addBackground(o, e), n = i.exec(t.backgroundImage)
                }
        }, o.prototype.addImage = function (e) {
            var t = new r(e);
            this.images.push(t)
        }, o.prototype.addBackground = function (e, t) {
            var i = new s(e, t);
            this.images.push(i)
        }, o.prototype.check = function () {
            function e(e, i, n) {
                setTimeout(function () {
                    t.progress(e, i, n)
                })
            }
            var t = this;
            return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function (t) {
                t.once("progress", e), t.check()
            }) : void this.complete()
        }, o.prototype.progress = function (e, t, i) {
            this.progressedCount++ , this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, e, t)
        }, o.prototype.complete = function () {
            var e = this.hasAnyBroken ? "fail" : "done";
            if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                var t = this.hasAnyBroken ? "reject" : "resolve";
                this.jqDeferred[t](this)
            }
        }, r.prototype = Object.create(t.prototype), r.prototype.check = function () {
            var e = this.getIsImageComplete();
            return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void (this.proxyImage.src = this.img.src))
        }, r.prototype.getIsImageComplete = function () {
            return this.img.complete && void 0 !== this.img.naturalWidth
        }, r.prototype.confirm = function (e, t) {
            this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
        }, r.prototype.handleEvent = function (e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, r.prototype.onload = function () {
            this.confirm(!0, "onload"), this.unbindEvents()
        }, r.prototype.onerror = function () {
            this.confirm(!1, "onerror"), this.unbindEvents()
        }, r.prototype.unbindEvents = function () {
            this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, s.prototype = Object.create(r.prototype), s.prototype.check = function () {
            this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
            var e = this.getIsImageComplete();
            e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
        }, s.prototype.unbindEvents = function () {
            this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
        }, s.prototype.confirm = function (e, t) {
            this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
        }, o.makeJQueryPlugin = function (t) {
            t = t || e.jQuery, t && (h = t, h.fn.imagesLoaded = function (e, t) {
                var i = new o(this, e, t);
                return i.jqDeferred.promise(h(this))
            })
        }, o.makeJQueryPlugin(), o
    });/*CONTROLA UMA PARTE DO TOP MAIN*/

/*!
 * baguetteBox.js
 * @author  feimosi
 * @version 1.10.0
 * @url https://github.com/feimosi/baguetteBox.js
 */
! function (e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.baguetteBox = t()
}(this, function () {
    "use strict";
    var e, t, n, o, i, a = '<svg width="44" height="60"><polyline points="30 10 10 30 30 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>',
        s = '<svg width="44" height="60"><polyline points="14 10 34 30 14 50" stroke="rgba(255,255,255,0.5)" stroke-width="4"stroke-linecap="butt" fill="none" stroke-linejoin="round"/></svg>',
        l = '<svg width="30" height="30"><g stroke="rgb(160,160,160)" stroke-width="4"><line x1="5" y1="5" x2="25" y2="25"/><line x1="5" y1="25" x2="25" y2="5"/></g></svg>',
        r = {},
        u = {
            captions: !0,
            buttons: "auto",
            fullScreen: !1,
            noScrollbars: !1,
            bodyClass: "baguetteBox-open",
            titleTag: !1,
            async: !1,
            preload: 2,
            animation: "slideIn",
            afterShow: null,
            afterHide: null,
            onChange: null,
            overlayBackgroundColor: "rgba(0,0,0,.8)"
        },
        c = {},
        d = [],
        f = 0,
        g = !1,
        p = {},
        b = !1,
        m = /.+\.(gif|jpe?g|png|webp)/i,
        v = {},
        h = [],
        y = null,
        w = function (e) {
            -1 !== e.target.id.indexOf("baguette-img") && I()
        },
        k = function (e) {
            e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0, q()
        },
        x = function (e) {
            e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0, j()
        },
        C = function (e) {
            e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0, I()
        },
        E = function (e) {
            p.count++ , p.count > 1 && (p.multitouch = !0), p.startX = e.changedTouches[0].pageX, p.startY = e.changedTouches[0].pageY
        },
        B = function (e) {
            if (!b && !p.multitouch) {
                e.preventDefault ? e.preventDefault() : e.returnValue = !1;
                var t = e.touches[0] || e.changedTouches[0];
                t.pageX - p.startX > 40 ? (b = !0, q()) : t.pageX - p.startX < -40 ? (b = !0, j()) : p.startY - t.pageY > 100 && I()
            }
        },
        T = function () {
            p.count-- , p.count <= 0 && (p.multitouch = !1), b = !1
        },
        N = function () {
            T()
        },
        L = function (t) {
            "block" === e.style.display && e.contains && !e.contains(t.target) && (t.stopPropagation(), H())
        };

    function A(e) {
        if (v.hasOwnProperty(e)) {
            var t = v[e].galleries;
            [].forEach.call(t, function (e) {
                [].forEach.call(e, function (e) {
                    V(e.imageElement, "click", e.eventHandler)
                }), d === e && (d = [])
            }), delete v[e]
        }
    }

    function P(e) {
        switch (e.keyCode) {
            case 37:
                q();
                break;
            case 39:
                j();
                break;
            case 27:
                I()
        }
    }

    function S(i, a) {
        if (d !== i) {
            for (d = i, function (i) {
                i || (i = {});
                for (var a in u) r[a] = u[a], "undefined" != typeof i[a] && (r[a] = i[a]);
                t.style.transition = t.style.webkitTransition = "fadeIn" === r.animation ? "opacity .4s ease" : "slideIn" === r.animation ? "" : "none", "auto" === r.buttons && ("ontouchstart" in window || 1 === d.length) && (r.buttons = !1);
                n.style.display = o.style.display = r.buttons ? "" : "none";
                try {
                    e.style.backgroundColor = r.overlayBackgroundColor
                } catch (s) { }
            }(a); t.firstChild;) t.removeChild(t.firstChild);
            h.length = 0;
            for (var s, l = [], c = [], f = 0; f < i.length; f++)(s = W("div")).className = "full-image", s.id = "baguette-img-" + f, h.push(s), l.push("baguetteBox-figure-" + f), c.push("baguetteBox-figcaption-" + f), t.appendChild(h[f]);
            e.setAttribute("aria-labelledby", l.join(" ")), e.setAttribute("aria-describedby", c.join(" "))
        }
    }

    function F(t) {
        r.noScrollbars && (document.documentElement.style.overflowY = "hidden", document.body.style.overflowY = "scroll"), "block" !== e.style.display && (D(document, "keydown", P), p = {
            count: 0,
            startX: null,
            startY: null
        }, Y(f = t, function () {
            R(f), z(f)
        }), O(), e.style.display = "block", r.fullScreen && (e.requestFullscreen ? e.requestFullscreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.mozRequestFullScreen && e.mozRequestFullScreen()), setTimeout(function () {
            e.className = "visible", r.bodyClass && document.body.classList && document.body.classList.add(r.bodyClass), r.afterShow && r.afterShow()
        }, 50), r.onChange && r.onChange(f, h.length), y = document.activeElement, H(), g = !0)
    }

    function H() {
        r.buttons ? n.focus() : i.focus()
    }

    function I() {
        r.noScrollbars && (document.documentElement.style.overflowY = "auto", document.body.style.overflowY = "auto"), "none" !== e.style.display && (V(document, "keydown", P), e.className = "", setTimeout(function () {
            e.style.display = "none", document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen(), r.bodyClass && document.body.classList && document.body.classList.remove(r.bodyClass), r.afterHide && r.afterHide(), y && y.focus(), g = !1
        }, 500))
    }

    function Y(e, t) {
        var n = h[e],
            o = d[e];
        if (void 0 !== n && void 0 !== o)
            if (n.getElementsByTagName("img")[0]) t && t();
            else {
                var i = o.imageElement,
                    a = i.getElementsByTagName("img")[0],
                    s = "function" == typeof r.captions ? r.captions.call(d, i) : i.getAttribute("data-caption") || i.title,
                    l = function (e) {
                        var t = e.href;
                        if (e.dataset) {
                            var n = [];
                            for (var o in e.dataset) "at-" !== o.substring(0, 3) || isNaN(o.substring(3)) || (n[o.replace("at-", "")] = e.dataset[o]);
                            for (var i = Object.keys(n).sort(function (e, t) {
                                return parseInt(e, 10) < parseInt(t, 10) ? -1 : 1
                            }), a = window.innerWidth * window.devicePixelRatio, s = 0; s < i.length - 1 && i[s] < a;) s++;
                            t = n[i[s]] || t
                        }
                        return t
                    }(i),
                    u = W("figure");
                if (u.id = "baguetteBox-figure-" + e, u.innerHTML = '<div class="baguetteBox-spinner"><div class="baguetteBox-double-bounce1"></div><div class="baguetteBox-double-bounce2"></div></div>', r.captions && s) {
                    var c = W("figcaption");
                    c.id = "baguetteBox-figcaption-" + e, c.innerHTML = s, u.appendChild(c)
                }
                n.appendChild(u);
                var f = W("img");
                f.onload = function () {
                    var n = document.querySelector("#baguette-img-" + e + " .baguetteBox-spinner");
                    u.removeChild(n), !r.async && t && t()
                }, f.setAttribute("src", l), f.alt = a && a.alt || "", r.titleTag && s && (f.title = s), u.appendChild(f), r.async && t && t()
            }
    }

    function j() {
        return X(f + 1)
    }

    function q() {
        return X(f - 1)
    }

    function X(e, t) {
        return !g && e >= 0 && e < t.length ? (S(t, r), F(e), !0) : e < 0 ? (r.animation && M("left"), !1) : e >= h.length ? (r.animation && M("right"), !1) : (Y(f = e, function () {
            R(f), z(f)
        }), O(), r.onChange && r.onChange(f, h.length), !0)
    }

    function M(e) {
        t.className = "bounce-from-" + e, setTimeout(function () {
            t.className = ""
        }, 400)
    }

    function O() {
        var e = 100 * -f + "%";
        "fadeIn" === r.animation ? (t.style.opacity = 0, setTimeout(function () {
            c.transforms ? t.style.transform = t.style.webkitTransform = "translate3d(" + e + ",0,0)" : t.style.left = e, t.style.opacity = 1
        }, 400)) : c.transforms ? t.style.transform = t.style.webkitTransform = "translate3d(" + e + ",0,0)" : t.style.left = e
    }

    function R(e) {
        e - f >= r.preload || Y(e + 1, function () {
            R(e + 1)
        })
    }

    function z(e) {
        f - e >= r.preload || Y(e - 1, function () {
            z(e - 1)
        })
    }

    function D(e, t, n, o) {
        e.addEventListener ? e.addEventListener(t, n, o) : e.attachEvent("on" + t, function (e) {
            (e = e || window.event).target = e.target || e.srcElement, n(e)
        })
    }

    function V(e, t, n, o) {
        e.removeEventListener ? e.removeEventListener(t, n, o) : e.detachEvent("on" + t, n)
    }

    function U(e) {
        return document.getElementById(e)
    }

    function W(e) {
        return document.createElement(e)
    }
    return [].forEach || (Array.prototype.forEach = function (e, t) {
        for (var n = 0; n < this.length; n++) e.call(t, this[n], n, this)
    }), [].filter || (Array.prototype.filter = function (e, t, n, o, i) {
        for (n = this, o = [], i = 0; i < n.length; i++) e.call(t, n[i], i, n) && o.push(n[i]);
        return o
    }), {
        run: function (r, u) {
            var d, f, g, p, b, h;
            return c.transforms = "undefined" != typeof (d = W("div")).style.perspective || "undefined" != typeof d.style.webkitPerspective, c.svg = ((f = W("div")).innerHTML = "<svg/>", "http://www.w3.org/2000/svg" === (f.firstChild && f.firstChild.namespaceURI)), c.passiveEvents = function () {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function () {
                            e = !0
                        }
                    });
                    window.addEventListener("test", null, t)
                } catch (n) { }
                return e
            }(),
                function () {
                    if (e = U("baguetteBox-overlay")) return t = U("baguetteBox-slider"), n = U("previous-button"), o = U("next-button"), void (i = U("close-button"));
                    var r;
                    (e = W("div")).setAttribute("role", "dialog"), e.id = "baguetteBox-overlay", document.getElementsByTagName("body")[0].appendChild(e), (t = W("div")).id = "baguetteBox-slider", e.appendChild(t), (n = W("button")).setAttribute("type", "button"), n.id = "previous-button", n.setAttribute("aria-label", "Previous"), n.innerHTML = c.svg ? a : "&lt;", e.appendChild(n), (o = W("button")).setAttribute("type", "button"), o.id = "next-button", o.setAttribute("aria-label", "Next"), o.innerHTML = c.svg ? s : "&gt;", e.appendChild(o), (i = W("button")).setAttribute("type", "button"), i.id = "close-button", i.setAttribute("aria-label", "Close"), i.innerHTML = c.svg ? l : "&times;", e.appendChild(i), n.className = o.className = i.className = "baguetteBox-button", r = c.passiveEvents ? {
                        passive: !0
                    } : null, D(e, "click", w), D(n, "click", k), D(o, "click", x), D(i, "click", C), D(t, "contextmenu", N), D(e, "touchstart", E, r), D(e, "touchmove", B, r), D(e, "touchend", T), D(document, "focus", L, !0)
                }(), A(r), g = r, p = u, b = document.querySelectorAll(g), h = {
                    galleries: [],
                    nodeList: b
                }, v[g] = h, [].forEach.call(b, function (e) {
                    p && p.filter && (m = p.filter);
                    var t = [];
                    if (t = "A" === e.tagName ? [e] : e.getElementsByTagName("a"), 0 !== (t = [].filter.call(t, function (e) {
                        if (-1 === e.className.indexOf(p && p.ignoreClass)) return m.test(e.href)
                    })).length) {
                        var n = [];
                        [].forEach.call(t, function (e, t) {
                            var o = function (e) {
                                e.preventDefault ? e.preventDefault() : e.returnValue = !1, S(n, p), F(t)
                            },
                                i = {
                                    eventHandler: o,
                                    imageElement: e
                                };
                            D(e, "click", o), n.push(i)
                        }), h.galleries.push(n)
                    }
                }), h.galleries
        },
        show: X,
        showNext: j,
        showPrevious: q,
        hide: I,
        destroy: function () {
            var a;
            a = c.passiveEvents ? {
                passive: !0
            } : null, V(e, "click", w), V(n, "click", k), V(o, "click", x), V(i, "click", C), V(t, "contextmenu", N), V(e, "touchstart", E, a), V(e, "touchmove", B, a), V(e, "touchend", T), V(document, "focus", L, !0),
                function () {
                    for (var e in v) v.hasOwnProperty(e) && A(e)
                }(), V(document, "keydown", P), document.getElementsByTagName("body")[0].removeChild(document.getElementById("baguetteBox-overlay")), v = {}, d = [], f = 0
        }
    }
});

(function ($) {
    "use strict";

	/* ..............................................
	   Loader 
	   ................................................. */
    $(window).on('load', function () {
        $('.preloader').fadeOut();
        $('#preloader').delay(550).fadeOut('slow');
        $('body').delay(450).css({
            'overflow': 'visible'
        });
    });

	/* ..............................................
	   Fixed Menu
	   ................................................. */

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $('.main-header').addClass('fixed-menu');
        } else {
            $('.main-header').removeClass('fixed-menu');
        }
    });

	/* ..............................................
	   Gallery
	   ................................................. */

    $('#slides-shop').superslides({
        inherit_width_from: '.cover-slides',
        inherit_height_from: '.cover-slides',
        play: 5000,
        animation: 'fade',
    });

    $(".cover-slides ul li").append("<div class='overlay-background'></div>");

	/* ..............................................
	   Map Full
	   ................................................. */

    $(document).ready(function () {
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 100) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        $('#back-to-top').click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });
    });

	/* ..............................................
	   Special Menu
	   ................................................. */

    var Container = $('.container');
    Container.imagesLoaded(function () {
        var portfolio = $('.special-menu');
        portfolio.on('click', 'button', function () {
            $(this).addClass('active').siblings().removeClass('active');
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        var $grid = $('.special-list').isotope({
            itemSelector: '.special-grid'
        });
    });

	/* ..............................................
	   BaguetteBox
	   ................................................. */

    baguetteBox.run('.tz-gallery', {
        animation: 'fadeIn',
        noScrollbars: true
    });

	/* ..............................................
	   Offer Box
	   ................................................. */

    $('.offer-box').inewsticker({
        speed: 3000,
        effect: 'fade',
        dir: 'ltr',
        font_size: 13,
        color: '#ffffff',
        font_family: 'Montserrat, sans-serif',
        delay_after: 1000
    });

	/* ..............................................
	   Tooltip
	   ................................................. */

    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

	/* ..............................................
	   Owl Carousel Instagram Feed
	   ................................................. */

    $('.main-instagram').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            600: {
                items: 4,
                nav: true
            },
            1000: {
                items: 8,
                nav: true,
                loop: true
            }
        }
    });

	/* ..............................................
	   Featured Products
	   ................................................. */

    $('.featured-products-box').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        navText: ["<i class='fas fa-arrow-left'></i>", "<i class='fas fa-arrow-right'></i>"],
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: true
            },
            1000: {
                items: 4,
                nav: true,
                loop: true
            }
        }
    });

	/* ..............................................
	   Scroll
	   ................................................. */

    $(document).ready(function () {
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 100) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        $('#back-to-top').click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });
    });


	/* ..............................................
	   Slider Range
	   ................................................. */

    $(function () {
        $("#slider-range").slider({
            range: true,
            min: 0,
            max: 4000,
            values: [1000, 3000],
            slide: function (event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        $("#amount").val("$" + $("#slider-range").slider("values", 0) +
            " - $" + $("#slider-range").slider("values", 1));
    });

	/* ..............................................
	   NiceScroll
	   ................................................. */

    $(".brand-box").niceScroll({
        cursorcolor: "#9b9b9c",
    });


}(jQuery));

/* Track all links within a container - e.g. add one data-trackNav parameter to a <ul> and links in inside it to track links within <li>s */
/*Tracking for Menu Items*/
jQuery('a[data-trackNav]').click(function () {
    gaNavTrack(this);
});
function gaNavTrack(link) {
    var category = link.getAttribute('data-trackNav');
    var action = window.location.pathname;
    var label = link.text;
    ga('send', 'event', category, action, label);
}

/* Track the links where we don't have link text, SO we need to provide Label*/
jQuery('[data-trackPathLink]').click(function () {
    var category = this.getAttribute('data-trackPathLink');
    var action = window.location.pathname;
    var label = this.getAttribute('data-trackLabel');
    ga('send', 'event', category, action, label);
});

/* Track general click action links having only track ckick attribute for cateogry */
jQuery('a[data-trackClick]').click(function () { gaClickActionTrack(this); });
function gaClickActionTrack(link) {
    var category = link.getAttribute('data-trackClick');
    var label = link.text
    var action = "Click " + link.text;
    ga('send', 'event', category, action, label);
}

/* Track dynamic links having all 3 attribute tracklink,label action*/
/* Added document.ready because of async tracking */
$(document).ready(function () {
    jQuery("#content").on("click", '[data-trackLink]', function () {
        gaTrackLink(this);
    });
});
function gaTrackLink(link) {
    var category = link.getAttribute('data-trackLink');
    var label = link.getAttribute('data-trackLabel');
    var action = link.getAttribute('data-trackAction');
    ga('send', 'event', category, action, label);
}

        /* All Facebook functions should be included 
           in this function, or at least initiated from here */
           window.fbAsyncInit = function () {
            FB.init({
                appId: '183661215085448',
                status: true,
                cookie: true,
                xfbml: true,
                fileUpload: true,
                oauth: true
            });
        };
        (function () {
            var e = document.createElement('script'); e.async = true;
            e.src = document.location.protocol +
                '//connect.facebook.net/en_US/all.js';
            document.getElementById('fb-root').appendChild(e);
        }());

        $('a.fb_share, a.__facebook, a.facebook, li.facebook a').click(function (event) {
            event.preventDefault();
            event.stopPropagation();
            FB.ui({
                method: 'share',
                href: $(this).data('param'),
            }, function (response) { });
        });