(window.webpackJsonp = window.webpackJsonp || []).push([
    [93], {
        1056: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = o(a(4)),
                l = o(a(90)),
                i = o(a(3)),
                u = o(a(113)),
                r = (o(a(354)), o(a(700))),
                s = o(a(1062));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            t.default = function(e) {
                var t = e.visuallyDisabled,
                    a = e.small,
                    o = (0, l.default)(e, ["visuallyDisabled", "small"]);
                return i.default.createElement(r.default, (0, n.default)({}, o, {
                    className: (0, u.default)(s.default.button, t && s.default.fakeDisabled, a && s.default.small)
                }))
            }
        },
        1062: function(e, t, a) {
            e.exports = {
                button: "_2-oA2Sa",
                fakeDisabled: "_1QP48zv",
                small: "yYrYNjZ"
            }
        },
        1454: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = l(a(1));

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var i = (0, l(a(6)).default)({
                displayName: "AsyncOffsetMenuAuthenticatedArea",
                initialComponent: null,
                loadComponent: function() {
                    return new n.default(function(e) {
                        a.e(94).then(function(t) {
                            e(a(1387).default)
                        }.bind(null, a)).catch(a.oe)
                    })
                },
                chunkName: "OffsetMenuAuthenticatedArea"
            });
            t.default = i
        },
        1455: function(e, t, a) {
            e.exports = {
                container: "_2AQjBsO",
                scrollBoundary: "_1e2WAEb",
                joinContainer: "_1659fBp",
                continueAsABusiness: "dz-8Qdf",
                mainNavigation: "_34zQzzI",
                secondaryNavigation: "hP-FUlY",
                linkList: "_88mxIlo",
                linkContainer: "_2w6qZtt",
                link: "_1S7xeKE",
                proLink: "_1GFYuZy",
                linkText: "ygzQyJD",
                active: "_2kvmtUc",
                upgradeToPro: "_1uEa0Om"
            }
        },
        866: function(e, t, a) {
            "use strict";
            (function(e) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var n = h(a(30)),
                    l = h(a(21)),
                    i = h(a(25)),
                    u = h(a(27)),
                    r = h(a(28)),
                    s = h(a(45)),
                    o = a(3),
                    d = h(o),
                    c = (h(a(0)), h(a(8))),
                    f = h(a(113)),
                    m = a(71),
                    p = h(a(352)),
                    k = h(a(1454)),
                    v = h(a(1455)),
                    y = h(a(1056));

                function h(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                var C = function(e) {
                        var t = e.url,
                            a = e.title,
                            n = e.onClick,
                            l = e.additionalClassnames,
                            i = void 0 === l ? [] : l;
                        return d.default.createElement("li", {
                            className: f.default.apply(void 0, [v.default.linkContainer].concat((0, s.default)(i)))
                        }, d.default.createElement(m.Link, {
                            onlyActiveOnIndex: "/" === t,
                            activeClassName: v.default.active,
                            className: v.default.link,
                            onClick: n,
                            to: t
                        }, d.default.createElement("span", {
                            className: v.default.linkText
                        }, a)))
                    },
                    b = function(t) {
                        function a() {
                            (0, l.default)(this, a);
                            var e = (0, u.default)(this, (a.__proto__ || (0, n.default)(a)).call(this));
                            return e.handleResize = function() {
                                e.resizeDebounce && clearTimeout(e.resizeDebounce), e.resizeDebounce = setTimeout(function() {
                                    return e.forceUpdate()
                                }, 300)
                            }, e.renderMainNavigationLinks = function() {
                                return d.default.createElement("ul", {
                                    className: v.default.linkList
                                }, [{
                                    url: "/",
                                    key: "home",
                                    title: "Home"
                                }, {
                                    url: "/s/tattoos",
                                    key: "tattoos",
                                    title: "Tattoos"
                                }, {
                                    url: "/s/artists",
                                    key: "artists",
                                    title: "Artists"
                                }, {
                                    url: "/s/studios",
                                    key: "studios",
                                    title: "Studios"
                                }, {
                                    url: "/videos",
                                    key: "watch",
                                    title: "Watch"
                                }, {
                                    url: "/a",
                                    key: "articles",
                                    title: "Articles"
                                }, {
                                    url: "/guides",
                                    key: "guides",
                                    title: "Guides"
                                }, {
                                    url: "/destinations",
                                    key: "destinations",
                                    title: "Destinations"
                                }, {
                                    url: "/app",
                                    key: "app",
                                    title: "App"
                                }].map(function(t) {
                                    var a = t.key,
                                        n = t.title,
                                        l = t.url;
                                    return d.default.createElement(C, {
                                        key: a,
                                        title: n,
                                        url: l,
                                        onClick: e.props.onItemClick
                                    })
                                }))
                            }, e.renderSecondaryNavigationLinks = function() {
                                var t = [{
                                    key: "tattoodopro",
                                    title: "Tattoodo PRO",
                                    url: "/pricing",
                                    additionalClassnames: [v.default.proLink]
                                }, {
                                    key: "about",
                                    title: "About",
                                    url: "/about"
                                }, {
                                    key: "partners",
                                    title: "Partners",
                                    url: "/partners"
                                }, {
                                    key: "press",
                                    title: "Press",
                                    url: "/about/press"
                                }, {
                                    key: "career",
                                    title: "Career",
                                    url: "/about/career"
                                }, {
                                    key: "terms",
                                    title: "Terms",
                                    url: "/about/terms-of-use"
                                }, {
                                    key: "privacy",
                                    title: "Privacy",
                                    url: "/about/privacy-policy"
                                }, {
                                    key: "help",
                                    title: "Help",
                                    url: "/help"
                                }];
                                return d.default.createElement("ul", {
                                    className: v.default.linkList
                                }, t.map(function(t) {
                                    var a = t.key,
                                        n = t.title,
                                        l = t.url,
                                        i = t.additionalClassnames;
                                    return d.default.createElement(C, {
                                        key: a,
                                        title: n,
                                        url: l,
                                        additionalClassnames: i,
                                        onClick: e.props.onItemClick
                                    })
                                }))
                            }, e.renderAuthenticationArea = function() {
                                return e.isUserAuthenticated ? d.default.createElement(k.default, {
                                    onItemClick: e.props.onItemClick,
                                    auth: e.props.auth
                                }) : null
                            }, e.state = {
                                menuItems: e.menuItems
                            }, e.resizeDebounce = null, e
                        }
                        return (0, r.default)(a, t), (0, i.default)(a, [{
                            key: "componentDidMount",
                            value: function() {
                                e.window && e.window.addEventListener("resize", this.handleResize)
                            }
                        }, {
                            key: "componentWillUnmount",
                            value: function() {
                                e.window && e.window.removeEventListener("resize", this.handleResize)
                            }
                        }, {
                            key: "render",
                            value: function() {
                                var e = this.isUserAuthenticated;
                                return d.default.createElement("div", {
                                    className: v.default.scrollBoundary
                                }, d.default.createElement("div", {
                                    className: v.default.container
                                }, e ? this.renderAuthenticationArea() : null, e ? null : d.default.createElement("div", {
                                    className: v.default.joinContainer
                                }, d.default.createElement(p.default, {
                                    width: "350px",
                                    onClick: this.props.onItemClick,
                                    to: "/signin",
                                    label: "Sign up / Sign in"
                                }), d.default.createElement("div", {
                                    className: v.default.continueAsABusiness
                                }, d.default.createElement(y.default, {
                                    onClick: this.props.onItemClick,
                                    to: "/pricing",
                                    label: "Continue as a business"
                                }))), this.showUpgradeButton ? d.default.createElement("div", {
                                    className: v.default.upgradeToPro
                                }, d.default.createElement(p.default, {
                                    width: "350px",
                                    onClick: this.props.onItemClick,
                                    to: "/pricing",
                                    label: "Upgrade"
                                })) : null, d.default.createElement("nav", {
                                    className: v.default.mainNavigation
                                }, this.renderMainNavigationLinks()), d.default.createElement("nav", {
                                    className: v.default.secondaryNavigation
                                }, this.renderSecondaryNavigationLinks())))
                            }
                        }, {
                            key: "isUserAuthenticated",
                            get: function() {
                                return Boolean((0, c.default)(this, "props.auth.user.id"))
                            }
                        }, {
                            key: "showUpgradeButton",
                            get: function() {
                                var e = (0, c.default)(this, "props.auth.artist");
                                return e && "free" === e.plan
                            }
                        }]), a
                    }(o.Component);
                b.defaultProps = {
                    onItemClick: function() {}
                }, t.default = b
            }).call(this, a(7))
        }
    }
]);