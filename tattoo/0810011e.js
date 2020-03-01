(window.webpackJsonp = window.webpackJsonp || []).push([
    [5], {
        1056: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = s(n(4)),
                r = s(n(90)),
                o = s(n(3)),
                l = s(n(113)),
                u = (s(n(354)), s(n(700))),
                i = s(n(1062));

            function s(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.default = function(e) {
                var t = e.visuallyDisabled,
                    n = e.small,
                    s = (0, r.default)(e, ["visuallyDisabled", "small"]);
                return o.default.createElement(u.default, (0, a.default)({}, s, {
                    className: (0, l.default)(i.default.button, t && i.default.fakeDisabled, n && i.default.small)
                }))
            }
        },
        1062: function(e, t, n) {
            e.exports = {
                button: "_2-oA2Sa",
                fakeDisabled: "_1QP48zv",
                small: "yYrYNjZ"
            }
        },
        1067: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.smoothScrollTop = l, t.smoothScrollLeft = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.duration,
                    a = void 0 === n ? 200 : n,
                    r = t.context,
                    l = void 0 === r ? e.offsetParent : r,
                    u = t.offset,
                    i = void 0 === u ? 0 : u,
                    s = l.scrollLeft,
                    d = e.offsetLeft + i - s;
                return (0, o.default)(a)(function(e) {
                    l.scrollLeft = s + e * d
                })
            };
            var a, r = n(1077),
                o = (a = r) && a.__esModule ? a : {
                    default: a
                };

            function l(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.duration,
                    a = void 0 === n ? 200 : n,
                    r = t.context,
                    l = void 0 === r ? window : r,
                    u = t.offset,
                    i = void 0 === u ? 0 : u,
                    s = l.scrollTop || window.pageYOffset,
                    d = ("number" == typeof e ? parseInt(e) : function(e, t) {
                        return "HTML" === e.nodeName ? -t : e.getBoundingClientRect().top + t
                    }(e, s)) + i - s;
                return (0, o.default)(a)(function(e) {
                    var t = s + e * d;
                    l !== window ? l.scrollTop = t : window.scrollTo(0, t)
                })
            }
            t.default = l
        },
        1077: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.factory = t.EasingFunctions = void 0;
            var a, r = n(1),
                o = (a = r) && a.__esModule ? a : {
                    default: a
                };
            var l = t.EasingFunctions = {
                    linear: function(e) {
                        return e
                    },
                    inOutCubic: function(e) {
                        return e < .5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1
                    }
                },
                u = t.factory = function(e) {
                    return function(t) {
                        return function(n) {
                            return new o.default(function(a) {
                                var r = performance.now();
                                requestAnimationFrame(function o(l) {
                                    var u = Math.min((l - r) / t, 1),
                                        i = e(u);
                                    n(i), u < 1 ? requestAnimationFrame(o) : a()
                                })
                            })
                        }
                    }
                };
            t.default = u(l.inOutCubic)
        },
        1136: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = _(n(30)),
                r = _(n(21)),
                o = _(n(25)),
                l = _(n(27)),
                u = _(n(28)),
                i = n(3),
                s = _(i),
                d = (_(n(0)), _(n(113))),
                f = _(n(96)),
                c = n(327),
                p = n(1487),
                m = n(698),
                v = _(n(721)),
                g = _(n(1056)),
                h = _(n(352)),
                b = _(n(1488));

            function _(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var E = function(e) {
                function t() {
                    var e, n, o, u;
                    (0, r.default)(this, t);
                    for (var i = arguments.length, d = Array(i), _ = 0; _ < i; _++) d[_] = arguments[_];
                    return n = o = (0, l.default)(this, (e = t.__proto__ || (0, a.default)(t)).call.apply(e, [this].concat(d))), o.state = {
                        optionsOpen: !1,
                        modalOpen: null
                    }, o.references = {}, o.renderModal = function() {
                        var e = o,
                            t = e.state.modalOpen,
                            n = e.flaggingVariables;
                        return t ? s.default.createElement(m.Gateway, {
                            into: "modal"
                        }, s.default.createElement(v.default, {
                            showClose: !0,
                            onClose: function() {
                                return o.toggleModal(null)
                            }
                        }, "other" === t && o.renderForm(), "reported" === t && s.default.createElement("div", {
                            className: b.default.container
                        }, s.default.createElement("header", {
                            className: b.default.header
                        }, s.default.createElement("span", null, "The ", n.name, " has been reported"))), "errored" === t && s.default.createElement("div", {
                            className: b.default.container
                        }, s.default.createElement("header", {
                            className: b.default.header
                        }, s.default.createElement("span", null, "An error has occurred, please try again later"))))) : null
                    }, o.renderForm = function() {
                        return s.default.createElement("div", {
                            className: b.default.container
                        }, s.default.createElement("header", {
                            className: b.default.header
                        }, s.default.createElement("span", null, o.isInappropriateEnabled ? "Other" : "Report")), s.default.createElement("form", {
                            onSubmit: o.handleModalFormSubmit,
                            className: b.default.form
                        }, s.default.createElement("div", {
                            className: b.default.field
                        }, s.default.createElement("label", {
                            className: b.default.label,
                            htmlFor: "message"
                        }, "Reason"), s.default.createElement("input", {
                            className: b.default.input,
                            placeholder: "Your reason",
                            name: "reason",
                            autoComplete: "off",
                            required: !0
                        })), s.default.createElement("div", {
                            className: b.default.actions
                        }, s.default.createElement(g.default, {
                            onClick: function() {
                                return o.toggleModal(null)
                            },
                            label: "Back"
                        }), s.default.createElement(h.default, {
                            type: "submit",
                            label: "Send"
                        }))))
                    }, o.handleClick = function(e) {
                        var t = o,
                            n = t.references.container,
                            a = t.removeClickListeners;
                        if (n) {
                            (function e(t) {
                                return t === n || !!t.parentNode && e(t.parentNode)
                            })(e.target) || (a(), o.setState({
                                optionsOpen: !1
                            }))
                        }
                    }, o.setClickListeners = function() {
                        return window.addEventListener("click", o.handleClick, !1)
                    }, o.removeClickListeners = function() {
                        return window.removeEventListener("click", o.handleClick, !1)
                    }, o.toggleMenu = function() {
                        var e = o,
                            t = e.state.optionsOpen,
                            n = e.setClickListeners,
                            a = e.removeClickListeners;
                        t ? a() : n(), o.setState(function(e) {
                            return {
                                optionsOpen: !e.optionsOpen
                            }
                        })
                    }, o.toggleModal = function(e) {
                        var t = o,
                            n = t.props.isAuthorized,
                            a = t.removeClickListeners,
                            r = t.flaggingVariables;
                        if (!n) return (0, c.dispatchCustomEvent)("showSignInModal", "report_" + r.name), !1;
                        e || a(), o.setState({
                            modalOpen: e,
                            optionsOpen: !1
                        })
                    }, o.flagAsInappropriate = function() {
                        var e = o,
                            t = e.props,
                            n = t.isAuthorized,
                            a = t.id,
                            r = t.flag,
                            l = e.flaggingVariables;
                        if (!n) return (0, c.dispatchCustomEvent)("showSignInModal", "report_" + l.name), !1;
                        o.setState({
                            optionsOpen: !1
                        }), (0, p.postFlag)(a, l.backendReference, "INAPPROPRIATE").then(function() {
                            o.toggleModal("reported"), f.default.send("flag_inappropriate", r)
                        }).catch(function() {
                            o.toggleModal("errored")
                        })
                    }, o.flagAsOther = function(e) {
                        var t = o,
                            n = t.props,
                            a = n.id,
                            r = n.flag,
                            l = t.flaggingVariables;
                        (0, p.postFlag)(a, l.backendReference, "OTHER", e).then(function() {
                            o.toggleModal("reported"), f.default.send("flag_other", r)
                        }).catch(function() {
                            o.toggleModal("errored")
                        })
                    }, o.handleModalFormSubmit = function(e) {
                        var t = o.flagAsOther;
                        e.preventDefault();
                        var n = e.target,
                            a = n && n.elements.reason;
                        if (a && a.value && a.value.trim()) return t(a.value)
                    }, u = n, (0, l.default)(o, u)
                }
                return (0, u.default)(t, e), (0, o.default)(t, [{
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.state.optionsOpen,
                            n = this.props.color,
                            a = this.flagAsInappropriate,
                            r = this.flaggingVariables,
                            o = this.toggleModal,
                            l = this.toggleMenu,
                            u = this.renderModal,
                            i = this.isInappropriateEnabled,
                            f = (0, d.default)(b.default.buttonAndOptionsContainer, "white" === n && b.default.whiteButton);
                        if (!r) return null;
                        var c = (0, d.default)(b.default.options, t && b.default.optionsIsOpen);
                        return s.default.createElement("div", null, s.default.createElement("div", {
                            ref: function(t) {
                                return e.references.container = t
                            },
                            className: f
                        }, s.default.createElement("button", {
                            className: b.default.reportButton,
                            onClick: l
                        }, s.default.createElement("div", {
                            className: b.default.buttonIcon
                        })), s.default.createElement("div", {
                            className: c
                        }, i ? s.default.createElement("p", {
                            className: b.default.optionsTitle
                        }, "Report") : null, i ? s.default.createElement("button", {
                            type: "button",
                            className: b.default.option,
                            onClick: function() {
                                return a(r.backendReference)
                            }
                        }, "This ", r.name, " is inappropriate") : null, s.default.createElement("button", {
                            type: "button",
                            className: b.default.option,
                            onClick: function() {
                                return o("other")
                            }
                        }, i ? "Other" : "Report"))), u())
                    }
                }, {
                    key: "flaggingVariables",
                    get: function() {
                        var e = this.props.flag;
                        switch (e) {
                            case "user":
                            case "comment":
                            case "review":
                                return {
                                    name: e,
                                    backendReference: e + "s"
                                };
                            case "shop":
                            case "studio":
                                return {
                                    name: "studio",
                                    backendReference: "shops"
                                };
                            case "artist":
                                return {
                                    name: e,
                                    backendReference: "users"
                                };
                            case "tattoo":
                                return {
                                    name: e,
                                    backendReference: "posts"
                                };
                            default:
                                return null
                        }
                    }
                }, {
                    key: "isInappropriateEnabled",
                    get: function() {
                        var e = this.flaggingVariables;
                        return "tattoo" === e.name || "comment" === e.name
                    }
                }]), t
            }(i.PureComponent);
            E.defaultProps = {
                isAuthorized: !1,
                color: "grey"
            }, t.default = E
        },
        1146: function(e, t, n) {
            "use strict";
            (function(e) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.vibrate = function(t) {
                    if (!n()) return;
                    return e.navigator.vibrate(t)
                };
                var n = function() {
                    return e && e.navigator && "function" == typeof e.navigator.vibrate
                }
            }).call(this, n(7))
        },
        1487: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = u(n(1));
            t.postFlag = i;
            var r = n(10),
                o = u(n(8)),
                l = u(n(5));

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function i(e, t, n) {
                var u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
                if (!e || !n) return a.default.reject(new Error("No id or reason provided"));
                var i = l.default.api.backend + "/api/flags/" + t,
                    s = {
                        reason: n,
                        message: u
                    };
                if ("users" === t) s.user_id = e;
                else if ("shops" === t) s.shop_id = e;
                else if ("posts" === t) s.post_id = e;
                else if ("comments" === t) s.comment_id = e;
                else {
                    if ("reviews" !== t) return a.default.reject(new Error("Unknown backend reference"));
                    s.review_id = e
                }
                return (0, r.request)({
                    method: "post",
                    url: i,
                    data: s,
                    requiresAuth: !0,
                    validateStatus: function(e) {
                        return 200 === e || 201 === e || 450 === e
                    }
                }).then(function(e) {
                    return (0, o.default)(e, "data.data")
                })
            }
            t.default = {
                postFlag: i
            }
        },
        1488: function(e, t, n) {
            e.exports = {
                buttonAndOptionsContainer: "_1pmQOAk",
                reportButton: "_1Vtoozg",
                buttonIcon: "_25nrnOa",
                whiteButton: "_1OARqoQ",
                input: "_2tyjRA-",
                options: "_1ZsrWxH",
                optionsIsOpen: "Ih4nXSO",
                optionsTitle: "_2z0STYC",
                option: "_2i7W92_",
                container: "_1FW2NME",
                header: "_1ySl-0W",
                form: "_3YAMQvB",
                field: "_2LdBv6Z",
                label: "oeBLXCz",
                actions: "UPR-hPl"
            }
        }
    }
]);