(window.webpackJsonp = window.webpackJsonp || []).push([
    [31], {
        1107: function(e, t, a) {
            "use strict";

            function l(e, t) {
                return e.artist.artists[t] || null
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getArtistByUsername = function(e, t) {
                var a = e.artist.idsByUsername,
                    r = "string" == typeof t && a[t.toLowerCase()];
                return l(e, r)
            }, t.getArtistById = l
        },
        1115: function(e, t) {
            e.exports = function(e, t, a) {
                var l = -1,
                    r = e.length;
                t < 0 && (t = -t > r ? 0 : r + t), (a = a > r ? r : a) < 0 && (a += r), r = t > a ? 0 : a - t >>> 0, t >>>= 0;
                for (var o = Array(r); ++l < r;) o[l] = e[l + t];
                return o
            }
        },
        1116: function(e, t, a) {
            "use strict";
            (function(e) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var l = g(a(30)),
                    r = g(a(21)),
                    o = g(a(25)),
                    n = g(a(27)),
                    s = g(a(28)),
                    i = a(3),
                    u = g(i),
                    d = (g(a(1063)), g(a(8))),
                    f = a(351),
                    c = g(a(113)),
                    m = g(a(96)),
                    p = a(353),
                    h = a(736),
                    v = a(71),
                    k = g(a(350)),
                    _ = g(a(1044)),
                    w = g(a(1045)),
                    E = g(a(1126));

                function g(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                var y = (0, p.shouldSaveData)() || (0, p.isSlowConnection)() ? 200 : 400,
                    b = function(t) {
                        function a() {
                            var e, t, o, s;
                            (0, r.default)(this, a);
                            for (var i = arguments.length, f = Array(i), p = 0; p < i; p++) f[p] = arguments[p];
                            return t = o = (0, n.default)(this, (e = a.__proto__ || (0, l.default)(a)).call.apply(e, [this].concat(f))), o.state = {
                                activePortfolioIndex: 0,
                                showPortfolio: !1,
                                tattoos: (0, d.default)(o, "props.studio.portfolio_preview", [])
                            }, o.handlePortfolioDotClick = function(e) {
                                var t = (0, d.default)(e, "currentTarget.dataset.index", null);
                                null !== t && o.setState({
                                    activePortfolioIndex: Number(t)
                                })
                            }, o.handlePortfolioPreviousClick = function() {
                                m.default.send("studio_portfolio_previous_click"), o.setState(function(e) {
                                    return {
                                        activePortfolioIndex: e.activePortfolioIndex - 1
                                    }
                                })
                            }, o.handlePortfolioNextClick = function() {
                                m.default.send("studio_portfolio_next_click"), o.setState(function(e) {
                                    return {
                                        activePortfolioIndex: e.activePortfolioIndex + 1
                                    }
                                })
                            }, o.handleProfileClick = function() {
                                return m.default.send("clicked_studio_profile")
                            }, o.renderPortfolioControls = function() {
                                var e = o,
                                    t = e.hasPreviousPortfolioItem,
                                    a = e.hasNextPortfolioItem;
                                return u.default.createElement("div", {
                                    className: E.default.portfolioControls
                                }, u.default.createElement("button", {
                                    disabled: !t,
                                    onClick: o.handlePortfolioPreviousClick,
                                    className: (0, c.default)(E.default.portfolioControl, E.default.portfolioControlPrevious)
                                }, u.default.createElement(k.default, {
                                    name: "arrow-right"
                                })), u.default.createElement("button", {
                                    disabled: !a,
                                    onClick: o.handlePortfolioNextClick,
                                    className: (0, c.default)(E.default.portfolioControl, E.default.portfolioControlNext)
                                }, u.default.createElement(k.default, {
                                    name: "arrow-right"
                                })))
                            }, o.renderPortfolio = function() {
                                var e = o,
                                    t = e.state,
                                    a = t.activePortfolioIndex,
                                    l = t.showPortfolio,
                                    r = t.tattoos,
                                    n = e.isClientSide && l,
                                    s = r;
                                return n || (s = [s[a]]), s = s.filter(Boolean), u.default.createElement("div", {
                                    className: E.default.portfolio
                                }, u.default.createElement("div", {
                                    className: E.default.portfolioFallback
                                }, u.default.createElement(k.default, {
                                    name: "icon"
                                })), s.map(function(e, t) {
                                    return u.default.createElement("div", {
                                        key: e.id,
                                        className: (0, c.default)(E.default.portfolioTattooWrapper, (t === a || 1 === s.length) && E.default.portfolioTattooWrapperActive)
                                    }, u.default.createElement(_.default, {
                                        width: y,
                                        key: e.id,
                                        className: E.default.portfolioTattoo,
                                        alt: "",
                                        src: (0, d.default)(e, "image.url", e.image_url)
                                    }))
                                }), n ? u.default.createElement("div", {
                                    className: E.default.portfolioDots
                                }, s.map(function(e, t) {
                                    return u.default.createElement("button", {
                                        "aria-label": "Go to tattoo number " + t,
                                        type: "button",
                                        key: e.id,
                                        "data-index": t,
                                        className: (0, c.default)(E.default.portfolioDot, t === a && E.default.portfolioDotActive),
                                        onClick: o.handlePortfolioDotClick
                                    })
                                })) : null, n ? o.renderPortfolioControls() : null)
                            }, o.handleMouseEnter = function() {
                                return o.setState({
                                    showPortfolio: !0
                                })
                            }, o.handleMouseLeave = function() {
                                return o.setState({
                                    showPortfolio: !1
                                })
                            }, s = t, (0, n.default)(o, s)
                        }
                        return (0, s.default)(a, t), (0, o.default)(a, [{
                            key: "componentDidMount",
                            value: function() {
                                var e = this,
                                    t = (0, d.default)(this, "props.studio.portfolio_preview", []);
                                t && t.length || (0, h.fetchPostsByUsername)((0, d.default)(this, "props.studio.username", null)).then(function(t) {
                                    var a = t.data;
                                    return e.setState({
                                        tattoos: a
                                    })
                                })
                            }
                        }, {
                            key: "render",
                            value: function() {
                                var e = this.props.studio,
                                    t = this.url,
                                    a = this.address,
                                    l = this.reviewsCount;
                                return u.default.createElement("div", {
                                    onMouseEnter: this.handleMouseEnter,
                                    onMouseLeave: this.handleMouseLeave,
                                    className: E.default.container
                                }, this.renderPortfolio(), u.default.createElement("div", {
                                    className: E.default.profile
                                }, u.default.createElement(v.Link, {
                                    onClick: this.handleProfileClick,
                                    to: t,
                                    className: E.default.profileAvatar
                                }, u.default.createElement(w.default, {
                                    size: 40,
                                    type: "studio",
                                    name: e.name || e.username,
                                    src: e.image_url
                                })), u.default.createElement(v.Link, {
                                    onClick: this.handleProfileClick,
                                    to: t,
                                    className: E.default.profileDetails
                                }, u.default.createElement("span", {
                                    className: E.default.profileName
                                }, e.name || e.username), a ? u.default.createElement("span", {
                                    className: E.default.profileMeta
                                }, a) : null), u.default.createElement("div", {
                                    className: E.default.ratingAndBook
                                }, this.hasStudioAllowedBookings ? u.default.createElement(v.Link, {
                                    onClick: function() {
                                        return m.default.send("clicked_book", "studio")
                                    },
                                    to: t + "/book",
                                    className: E.default.book
                                }, "Book now") : null, e.reviews_average > 4 ? u.default.createElement("span", {
                                    className: E.default.rating
                                }, u.default.createElement(k.default, {
                                    name: "star"
                                }), u.default.createElement("span", {
                                    className: E.default.ratingAverage
                                }, e.reviews_average.toFixed(1)), l ? u.default.createElement("span", {
                                    className: E.default.ratingCount
                                }, "(", l, ")") : null) : null)))
                            }
                        }, {
                            key: "isPro",
                            get: function() {
                                return "pro" === this.props.studio.plan
                            }
                        }, {
                            key: "hasStudioAllowedBookings",
                            get: function() {
                                return this.props.studio.allow_bookings
                            }
                        }, {
                            key: "url",
                            get: function() {
                                return (0, f.generateUserUrl)(this.props.studio, "studio")
                            }
                        }, {
                            key: "address",
                            get: function() {
                                var e = this.props.studio;
                                return [e.address.city, e.address.state || e.address.country].filter(Boolean).join(", ")
                            }
                        }, {
                            key: "isClientSide",
                            get: function() {
                                return !!e.window
                            }
                        }, {
                            key: "reviewsCount",
                            get: function() {
                                return (0, d.default)(this, "props.studio.counts.reviews", 0)
                            }
                        }, {
                            key: "hasPreviousPortfolioItem",
                            get: function() {
                                return this.state.activePortfolioIndex > 0
                            }
                        }, {
                            key: "hasNextPortfolioItem",
                            get: function() {
                                var e = this.props.studio,
                                    t = this.state.activePortfolioIndex;
                                return e.portfolio_preview.length - 1 > t
                            }
                        }]), a
                    }(i.PureComponent);
                t.default = b
            }).call(this, a(7))
        },
        1126: function(e, t, a) {
            e.exports = {
                container: "_2SX2H33",
                portfolio: "_1D4clCS",
                portfolioTattooWrapper: "_20WYp_L",
                portfolioTattooWrapperActive: "_1BWdTsg",
                portfolioTattoo: "_2f_DVjJ",
                profile: "_3-hOUSK",
                profileAvatar: "_2rNqAFd",
                profileDetails: "_2bpf3hC",
                profileName: "_3QCqA5H",
                profileMeta: "_3QBGLG7",
                ratingAndBook: "_1xyByQ6",
                rating: "_3Ztgnib",
                ratingAverage: "zK0rYut",
                ratingCount: "_2Rm9PTh",
                book: "_1jkla9A",
                portfolioDots: "FeVO4Gr",
                portfolioDot: "_3Ad0gKv",
                portfolioDotActive: "itx49Kf",
                portfolioControls: "Qphi1YO",
                portfolioControl: "_1_49BtK",
                portfolioControlPrevious: "_1ZiWkhA",
                portfolioControlNext: "_1JVyF56",
                portfolioFallback: "_2WyDAZ3"
            }
        },
        1197: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l = o(a(3)),
                r = (o(a(0)), a(725));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var n = function(e) {
                var t = e.date,
                    a = e.format,
                    o = e.titleFormat;
                return l.default.createElement("time", {
                    dateTime: t,
                    title: (0, r.formatDate)(t, o)
                }, (0, r.formatDate)(t, a))
            };
            n.defaultProps = {
                format: r.dateFormats.mdy,
                titleFormat: r.dateFormats.WMDY
            }, t.default = n
        },
        1470: function(e, t, a) {
            var l = a(381),
                r = a(1471),
                o = a(1472),
                n = a(1473),
                s = a(1474),
                i = a(380),
                u = /^\s+|\s+$/g;
            e.exports = function(e, t, a) {
                if ((e = i(e)) && (a || void 0 === t)) return e.replace(u, "");
                if (!e || !(t = l(t))) return e;
                var d = s(e),
                    f = s(t),
                    c = n(d, f),
                    m = o(d, f) + 1;
                return r(d, c, m).join("")
            }
        },
        1471: function(e, t, a) {
            var l = a(1115);
            e.exports = function(e, t, a) {
                var r = e.length;
                return a = void 0 === a ? r : a, !t && a >= r ? e : l(e, t, a)
            }
        },
        1472: function(e, t, a) {
            var l = a(375);
            e.exports = function(e, t) {
                for (var a = e.length; a-- && l(t, e[a], 0) > -1;);
                return a
            }
        },
        1473: function(e, t, a) {
            var l = a(375);
            e.exports = function(e, t) {
                for (var a = -1, r = e.length; ++a < r && l(t, e[a], 0) > -1;);
                return a
            }
        },
        1474: function(e, t, a) {
            var l = a(1475),
                r = a(1476),
                o = a(1477);
            e.exports = function(e) {
                return r(e) ? o(e) : l(e)
            }
        },
        1475: function(e, t) {
            e.exports = function(e) {
                return e.split("")
            }
        },
        1476: function(e, t) {
            var a = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
            e.exports = function(e) {
                return a.test(e)
            }
        },
        1477: function(e, t) {
            var a = "[\\ud800-\\udfff]",
                l = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
                r = "\\ud83c[\\udffb-\\udfff]",
                o = "[^\\ud800-\\udfff]",
                n = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                s = "[\\ud800-\\udbff][\\udc00-\\udfff]",
                i = "(?:" + l + "|" + r + ")" + "?",
                u = "[\\ufe0e\\ufe0f]?" + i + ("(?:\\u200d(?:" + [o, n, s].join("|") + ")[\\ufe0e\\ufe0f]?" + i + ")*"),
                d = "(?:" + [o + l + "?", l, n, s, a].join("|") + ")",
                f = RegExp(r + "(?=" + r + ")|" + d + u, "g");
            e.exports = function(e) {
                return e.match(f) || []
            }
        },
        1486: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l = w(a(4)),
                r = w(a(30)),
                o = w(a(21)),
                n = w(a(25)),
                s = w(a(27)),
                i = w(a(28)),
                u = a(3),
                d = w(u),
                f = (w(a(0)), w(a(113))),
                c = w(a(1046)),
                m = w(a(96)),
                p = a(1096),
                h = w(a(350)),
                v = w(a(726)),
                k = w(a(1136)),
                _ = w(a(1489));

            function w(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var E = function(e) {
                function t() {
                    var e, a, l, n;
                    (0, o.default)(this, t);
                    for (var i = arguments.length, u = Array(i), f = 0; f < i; f++) u[f] = arguments[f];
                    return a = l = (0, s.default)(this, (e = t.__proto__ || (0, r.default)(t)).call.apply(e, [this].concat(u))), l.renderSocialLinks = function() {
                        var e = l.props.artist,
                            t = e.social_links,
                            a = t.instagram_link,
                            r = t.facebook_link,
                            o = t.twitter_link,
                            n = e.website;
                        return a || r || o || n ? d.default.createElement("div", {
                            className: _.default.socialLinks
                        }, r && d.default.createElement("a", {
                            className: _.default.socialLink,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            onClick: function() {
                                return m.default.send("click_facebook")
                            },
                            href: r
                        }, d.default.createElement(h.default, {
                            name: "facebook"
                        })), a && d.default.createElement("a", {
                            className: _.default.socialLink,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            onClick: function() {
                                return m.default.send("click_instagram")
                            },
                            href: a
                        }, d.default.createElement(h.default, {
                            name: "instagram"
                        })), o && d.default.createElement("a", {
                            className: _.default.socialLink,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            onClick: function() {
                                return m.default.send("click_twitter")
                            },
                            href: o
                        }, d.default.createElement(h.default, {
                            name: "shareTwitter"
                        })), n && d.default.createElement("a", {
                            className: _.default.socialLink,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            onClick: function() {
                                return m.default.send("click_website")
                            },
                            href: n
                        }, d.default.createElement(h.default, {
                            name: "globe"
                        }))) : null
                    }, l.renderVerificationLevels = function() {
                        return d.default.createElement("div", {
                            className: _.default.verificationLevels
                        }, l.isVerified && d.default.createElement("span", {
                            className: _.default.verified
                        }, d.default.createElement("span", {
                            className: _.default.verifiedBadge
                        }, d.default.createElement(h.default, {
                            name: "verified_checkmark"
                        })), d.default.createElement("span", {
                            className: _.default.verifiedLabel
                        }, "Verified")))
                    }, l.renderMoreInfoLink = function() {
                        var e = l.props,
                            t = e.showMoreInfoButton,
                            a = e.onMoreInfoClick;
                        return t ? d.default.createElement("button", {
                            onClick: a,
                            className: _.default.moreInfo
                        }, d.default.createElement("span", null, "More info"), d.default.createElement("span", {
                            className: _.default.moreInfoIcon
                        }, d.default.createElement(h.default, {
                            name: "arrow-rounded"
                        }))) : null
                    }, n = a, (0, s.default)(l, n)
                }
                return (0, i.default)(t, e), (0, n.default)(t, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.artist,
                            a = e.onFollowClick,
                            r = e.isFollowedByAuthedUser,
                            o = e.useItemProps,
                            n = e.isArtistSameAsAuthedUser,
                            s = e.userId,
                            i = this.isMobile,
                            u = this.isArtistPro,
                            m = t.name || t.username;
                        return d.default.createElement("div", {
                            className: u && _.default.proArtist
                        }, n ? null : d.default.createElement("button", {
                            onClick: a,
                            className: (0, f.default)(_.default.followButton, r && _.default.followButtonFollowing)
                        }, d.default.createElement("span", {
                            className: _.default.followButtonText
                        }, r ? "Following" : "Follow")), d.default.createElement("header", {
                            className: _.default.profile
                        }, d.default.createElement("div", {
                            className: _.default.profileExcerpt
                        }, d.default.createElement("div", {
                            className: _.default.profileImage
                        }, d.default.createElement("span", null, (0, c.default)(m)), t.image_url && d.default.createElement(v.default, {
                            alt: m,
                            src: t.image_url,
                            size: 80
                        })), d.default.createElement("div", {
                            className: _.default.profileDetails
                        }, d.default.createElement("div", {
                            className: _.default.profileNameContainer
                        }, d.default.createElement("h1", (0, l.default)({
                            className: _.default.profileName
                        }, o ? {
                            itemProp: "name"
                        } : {}), m), s !== t.user_id ? d.default.createElement("div", {
                            className: _.default.reportBtnMobile
                        }, d.default.createElement(k.default, {
                            id: t.user_id,
                            flag: "artist",
                            isAuthorized: null !== s
                        })) : null), o ? d.default.createElement("meta", {
                            itemProp: "image",
                            content: t.image_url
                        }) : null, this.renderVerificationLevels(), !!t.biography && i && d.default.createElement("div", {
                            className: (0, f.default)(_.default.profileBiography, _.default.wrapLines)
                        }, t.biography), this.renderSocialLinks()), s !== t.user_id ? d.default.createElement("div", {
                            className: _.default.reportBtnDesktop
                        }, d.default.createElement(k.default, {
                            id: t.user_id,
                            flag: "artist",
                            isAuthorized: null !== s
                        })) : null, this.renderMoreInfoLink()), !!t.biography && !i && d.default.createElement("div", {
                            className: _.default.desktopBiography
                        }, d.default.createElement("h2", {
                            className: _.default.desktopBiographyTitle
                        }, "Introduction"), d.default.createElement("p", {
                            className: _.default.wrapLines
                        }, t.biography))))
                    }
                }, {
                    key: "isArtistPro",
                    get: function() {
                        return "pro" === this.props.artist.plan
                    }
                }, {
                    key: "isVerified",
                    get: function() {
                        return (0, p.isUserVerified)(this.props.artist)
                    }
                }, {
                    key: "isMobile",
                    get: function() {
                        return "mobile" === this.props.deviceType
                    }
                }]), t
            }(u.Component);
            E.defaultProps = {
                useItemProps: !1,
                showMoreInfoButton: !0,
                isFollowedByAuthedUser: !1,
                onFollowClick: function() {},
                onMoreInfoClick: function() {}
            }, t.default = E
        },
        1489: function(e, t, a) {
            e.exports = {
                profile: "_2kf_g9h",
                profileExcerpt: "clQOxP0",
                profileImage: "_3d-tMQP",
                proArtist: "_3cvMq1f",
                reportBtnMobile: "VVfpWLO",
                reportBtnDesktop: "_3ivo-6V",
                profileDetails: "_3foVPaL",
                profileNameContainer: "_1iEvp1e",
                profileName: "Lps1doV",
                socialLinks: "_3BQKLOH",
                socialLink: "_347q6Mw",
                profileBiography: "_3lC8BBE",
                followButton: "If21Knv",
                followButtonFollowing: "_2m0YQl7",
                followButtonText: "_49nZQoh",
                verificationLevels: "_2YGNrZi",
                verified: "_1P9spY-",
                verifiedBadge: "_26wyYrV",
                verifiedLabel: "_2S_SuXe",
                desktopBiography: "_3qlIsKP",
                desktopBiographyTitle: "_3CZFdL5",
                moreInfo: "_1XpS4Ie",
                moreInfoIcon: "-XX9hx1",
                wrapLines: "_6huom_Y"
            }
        },
        1490: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l = v(a(30)),
                r = v(a(21)),
                o = v(a(25)),
                n = v(a(27)),
                s = v(a(28)),
                i = a(3),
                u = v(i),
                d = (v(a(0)), a(1070)),
                f = a(71),
                c = v(a(1135)),
                m = v(a(352)),
                p = v(a(727)),
                h = v(a(1491));

            function v(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var k = function(e) {
                function t() {
                    var e, a, o, s;
                    (0, r.default)(this, t);
                    for (var i = arguments.length, v = Array(i), k = 0; k < i; k++) v[k] = arguments[k];
                    return a = o = (0, n.default)(this, (e = t.__proto__ || (0, l.default)(t)).call.apply(e, [this].concat(v))), o.renderStyles = function() {
                        var e = o.props.styles;
                        return e && e.length ? u.default.createElement("section", null, u.default.createElement("h2", {
                            className: h.default.title
                        }, "Styles"), u.default.createElement("ul", {
                            className: h.default.stylesList
                        }, e.map(function(e) {
                            return u.default.createElement("li", {
                                className: h.default.styleItem,
                                key: e
                            }, e)
                        })), u.default.createElement("hr", {
                            className: h.default.divider
                        })) : null
                    }, o.renderFollowersBar = function() {
                        var e = o.props,
                            t = e.followersCount,
                            a = e.followingCount,
                            l = e.onFollowClick,
                            r = e.isFollowedByAuthedUser,
                            n = e.isArtistSameAsAuthedUser,
                            s = e.baseUrl,
                            i = e.authedUserIsBusinessCardEditor,
                            c = e.artist;
                        return u.default.createElement("div", null, u.default.createElement("div", {
                            className: h.default.followers
                        }, u.default.createElement(f.Link, {
                            title: "Followers",
                            to: s + "/followers"
                        }, u.default.createElement("span", {
                            className: h.default.followersCount
                        }, (0, d.abbr)(t)), u.default.createElement("span", {
                            className: h.default.followersLabel
                        }, 1 === t ? "Follower" : "Followers")), u.default.createElement(f.Link, {
                            title: "Following",
                            to: s + "/following"
                        }, u.default.createElement("span", {
                            className: h.default.followersCount
                        }, (0, d.abbr)(a)), u.default.createElement("span", {
                            className: h.default.followersLabel
                        }, "Following"))), n ? null : u.default.createElement(p.default, {
                            onClick: l,
                            visuallyDisabled: r,
                            label: r ? "Following" : "Follow"
                        }), i ? u.default.createElement("div", null, u.default.createElement("br", null), u.default.createElement(p.default, {
                            to: "/business-cards/" + c.username,
                            label: "Edit business card"
                        })) : null)
                    }, o.renderCta = function() {
                        var e = o.props,
                            t = e.showCta,
                            a = e.onCtaClick,
                            l = e.isArtistSameAsAuthedUser,
                            r = e.artist;
                        return l ? u.default.createElement("div", null, u.default.createElement(c.default, {
                            buttonLabel: "Upload work",
                            defaultArtist: r,
                            uploader: r
                        }), u.default.createElement("div", {
                            className: h.default.uploadSpacer
                        })) : t ? u.default.createElement("div", {
                            className: h.default.cta
                        }, u.default.createElement(m.default, {
                            onClick: a,
                            label: "Book now"
                        })) : null
                    }, s = a, (0, n.default)(o, s)
                }
                return (0, s.default)(t, e), (0, o.default)(t, [{
                    key: "render",
                    value: function() {
                        return u.default.createElement("div", {
                            className: h.default.container
                        }, this.renderCta(), u.default.createElement("div", {
                            className: h.default.box
                        }, this.renderStyles(), this.renderFollowersBar()))
                    }
                }]), t
            }(i.Component);
            k.defaultProps = {
                isFollowedByAuthedUser: !1,
                showCta: !1,
                isArtistSameAsAuthedUser: !1,
                authedUserIsBusinessCardEditor: !1,
                onCtaClick: function() {},
                onFollowClick: function() {}
            }, t.default = k
        },
        1491: function(e, t, a) {
            e.exports = {
                container: "_3LoCIcU",
                cta: "_1eAzdOX",
                box: "_2C36bJ1",
                title: "_3ffxstI",
                stylesList: "_27YYDnY",
                styleItem: "_2iMxTzO",
                divider: "_2Hn7kLg",
                followers: "_3s6a4iu",
                followersCount: "_3G2jWki",
                followersLabel: "_2ukywRR",
                uploadSpacer: "AQIpKrF"
            }
        },
        1492: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var l = v(a(30)),
                r = v(a(21)),
                o = v(a(25)),
                n = v(a(27)),
                s = v(a(28)),
                i = a(3),
                u = v(i),
                d = (v(a(0)), v(a(113))),
                f = a(1070),
                c = v(a(96)),
                m = a(71),
                p = v(a(350)),
                h = v(a(1493));

            function v(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var k = function(e) {
                function t() {
                    var e, a, o, s;
                    (0, r.default)(this, t);
                    for (var i = arguments.length, v = Array(i), k = 0; k < i; k++) v[k] = arguments[k];
                    return a = o = (0, n.default)(this, (e = t.__proto__ || (0, l.default)(t)).call.apply(e, [this].concat(v))), o.renderBiography = function() {
                        var e = o.props.biography;
                        return e ? u.default.createElement("section", null, u.default.createElement("h2", {
                            className: h.default.title
                        }, "Biography"), u.default.createElement("p", {
                            className: h.default.biography
                        }, e), u.default.createElement("hr", {
                            className: h.default.divider
                        })) : null
                    }, o.renderFollowersBar = function() {
                        var e = o.props,
                            t = e.followersCount,
                            a = e.followingCount,
                            l = e.onFollowClick,
                            r = e.isFollowedByAuthedUser,
                            n = e.baseUrl,
                            s = e.isArtistSameAsAuthedUser;
                        return u.default.createElement("div", null, u.default.createElement("div", {
                            className: h.default.followers
                        }, u.default.createElement(m.Link, {
                            title: "Followers",
                            to: n + "/followers",
                            className: h.default.followersColumn
                        }, u.default.createElement("span", {
                            className: h.default.followersCount
                        }, (0, f.abbr)(t)), u.default.createElement("span", {
                            className: h.default.followersLabel
                        }, 1 === t ? "Follower" : "Followers")), u.default.createElement(m.Link, {
                            title: "Following",
                            to: n + "/following",
                            className: h.default.followersColumn
                        }, u.default.createElement("span", {
                            className: h.default.followersCount
                        }, (0, f.abbr)(a)), u.default.createElement("span", {
                            className: h.default.followersLabel
                        }, "Following")), s ? null : u.default.createElement("div", {
                            className: h.default.followersColumn
                        }, u.default.createElement("button", {
                            onClick: l,
                            className: (0, d.default)(h.default.followButton)
                        }, u.default.createElement("span", {
                            className: h.default.followButtonLabel
                        }, r ? "Following" : "Follow")))), u.default.createElement("hr", {
                            className: h.default.divider
                        }))
                    }, o.renderStyles = function() {
                        var e = o.props.styles;
                        return e && e.length ? u.default.createElement("section", null, u.default.createElement("h2", {
                            className: h.default.title
                        }, "Styles"), u.default.createElement("ul", {
                            className: h.default.stylesList
                        }, e.map(function(e) {
                            return u.default.createElement("li", {
                                className: h.default.styleItem,
                                key: e
                            }, e)
                        })), u.default.createElement("hr", {
                            className: h.default.divider
                        })) : null
                    }, o.renderSocialLinks = function() {
                        var e = o.props,
                            t = e.showContactInfo,
                            a = e.website,
                            l = e.instagramLink,
                            r = e.twitterLink,
                            n = e.facebookLink;
                        return t && (l || n || r || a) ? u.default.createElement("div", null, u.default.createElement("h2", {
                            className: h.default.title
                        }, "Get in touch"), u.default.createElement("ul", {
                            className: h.default.contactInfo
                        }, a && u.default.createElement("li", {
                            className: h.default.contactInfoItem
                        }, u.default.createElement("a", {
                            className: h.default.contactInfoLink,
                            href: a
                        }, u.default.createElement("span", {
                            className: h.default.contactInfoIcon
                        }, u.default.createElement(p.default, {
                            name: "globe"
                        })), u.default.createElement("span", {
                            className: h.default.contactInfoLabel
                        }, a))) || null), u.default.createElement("div", {
                            className: h.default.socialLinks
                        }, n && u.default.createElement("a", {
                            className: h.default.socialLink,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            onClick: function() {
                                return c.default.send("click_facebook")
                            },
                            href: n
                        }, u.default.createElement(p.default, {
                            name: "facebook"
                        })), l && u.default.createElement("a", {
                            className: h.default.socialLink,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            onClick: function() {
                                return c.default.send("click_instagram")
                            },
                            href: l
                        }, u.default.createElement(p.default, {
                            name: "instagram"
                        })), r && u.default.createElement("a", {
                            className: h.default.socialLink,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            onClick: function() {
                                return c.default.send("click_twitter")
                            },
                            href: r
                        }, u.default.createElement(p.default, {
                            name: "shareTwitter"
                        })))) : null
                    }, s = a, (0, n.default)(o, s)
                }
                return (0, s.default)(t, e), (0, o.default)(t, [{
                    key: "render",
                    value: function() {
                        return u.default.createElement("div", null, this.renderBiography(), this.renderFollowersBar(), this.renderStyles(), this.renderSocialLinks())
                    }
                }]), t
            }(i.Component);
            k.defaultProps = {
                onFollowClick: function() {},
                showContactInfo: !1
            }, t.default = k
        },
        1493: function(e, t, a) {
            e.exports = {
                title: "_21wCwUp",
                biography: "_2MkF-0a",
                followers: "Txtvs8d",
                followersColumn: "_249uRp5",
                followersCount: "_2TsT5jq",
                followersLabel: "_1TAE7as",
                followButton: "VstFhy0",
                followButtonLabel: "_7U9CYvb",
                divider: "_1U_1gph",
                stylesList: "CTd4mSV",
                styleItem: "_2zUBAFQ",
                socialLinks: "Zqv09IQ",
                socialLink: "_3kPaoO_",
                contactInfo: "ASgHFGO",
                contactInfoItem: "_1eOQmbt",
                contactInfoLink: "_2JHhnow",
                contactInfoIcon: "_2JZ3T93",
                contactInfoLabel: "gn4a8gR"
            }
        },
        1497: function(e, t, a) {
            e.exports = {
                containerWrapper: "tmw912P",
                container: "_1ZPrZct",
                mainContent: "_2NfTtK0",
                sidebar: "_3pRXama",
                section: "_34txBZ4",
                sectionTitle: "TQMULS1",
                subsection: "B-i7XA4",
                subsectionTitle: "BPpa_cC",
                board: "_38i1oDg",
                workplaces: "_2xRBbAl",
                mobileBottom: "_3_XR9YK",
                stickyCta: "rOvA69e"
            }
        },
        873: function(e, t, a) {
            "use strict";
            (function(e) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var l = Q(a(4)),
                    r = Q(a(30)),
                    o = Q(a(21)),
                    n = Q(a(25)),
                    s = Q(a(27)),
                    i = Q(a(28)),
                    u = a(3),
                    d = Q(u),
                    f = (Q(a(0)), Q(a(699)), Q(a(212)), a(72)),
                    c = a(71),
                    m = Q(a(91)),
                    p = Q(a(1470)),
                    h = a(351),
                    v = a(725),
                    k = a(327),
                    _ = Q(a(96)),
                    w = Q(a(8)),
                    E = Q(a(5)),
                    g = Q(a(1067)),
                    y = a(1102),
                    b = a(1096),
                    C = a(1146),
                    N = a(1107),
                    A = a(770),
                    B = a(145),
                    P = a(76),
                    I = a(1196),
                    U = a(94),
                    L = Q(a(728)),
                    F = Q(a(697)),
                    S = Q(a(1315)),
                    T = Q(a(1316)),
                    x = Q(a(1135)),
                    M = Q(a(1317)),
                    D = Q(a(1486)),
                    W = Q(a(1490)),
                    O = Q(a(1492)),
                    V = Q(a(1318)),
                    Y = Q(a(1197)),
                    R = Q(a(352)),
                    j = Q(a(1116)),
                    z = Q(a(1497));

                function Q(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                var H = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Date;
                        return (0, v.formatDate)(e, "YYYY-MM-DD")
                    },
                    q = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : H();
                        return function(t) {
                            var a = t.start_date,
                                l = t.end_date;
                            return a <= e && (null === l || l >= e)
                        }
                    },
                    G = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : H();
                        return function(t) {
                            var a = t.end_date;
                            return null === a || a >= e
                        }
                    },
                    K = function(t) {
                        function a() {
                            var e, t, n, i;
                            (0, o.default)(this, a);
                            for (var u = arguments.length, f = Array(u), m = 0; m < u; m++) f[m] = arguments[m];
                            return t = n = (0, s.default)(this, (e = a.__proto__ || (0, r.default)(a)).call.apply(e, [this].concat(f))), n.state = {
                                isFollowedByAuthedUser: !1,
                                boards: [],
                                posts: [],
                                bookingEnabledWorkplaces: null
                            }, n.references = {}, n.setTrackingData = function(e) {
                                var t = e.id,
                                    a = e.plan;
                                _.default.pushToDataLayer({
                                    event: "artistView",
                                    artist: {
                                        id: t,
                                        plan: a
                                    }
                                })
                            }, n.handleResize = function() {
                                n.handleResizeDebounce && clearTimeout(n.handleResizeDebounce)
                            }, n.fetchBoards = function(e, t) {
                                n.setState({
                                    boards: []
                                }, function() {
                                    return (0, B.fetchBoardsByUserId)(e, t).then(function(t) {
                                        e === n.props.artist.user_id && n.setState({
                                            boards: t
                                        })
                                    })
                                })
                            }, n.requestConsultation = function() {
                                var e = n,
                                    t = e.props.artist,
                                    a = e.bookingEnabledWorkplaces,
                                    l = e.artistBaseUrl,
                                    r = e.isArtistBookable;
                                return _.default.send("clicked_book", "artist_profile"), r ? n.props.history.push({
                                    pathname: l + "/book"
                                }) : 1 === a.length ? n.props.history.push({
                                    pathname: (0, h.generateUserUrl)(a[0].shop, "studio") + "/book",
                                    query: {
                                        preferred_artist: t.name || t.username
                                    }
                                }) : void 0
                            }, n.renderWorkplaces = function() {
                                var e = n.props.artist,
                                    t = e.styles && e.styles.length,
                                    a = e.workplaces && e.workplaces.length,
                                    l = (0, p.default)(e.biography);
                                if (!t && !a && !l) return null;
                                var r = n.renderPermanentWorkplaces(),
                                    o = n.renderTemporaryWorkplaces();
                                return r || o ? d.default.createElement("section", {
                                    className: z.default.section
                                }, r, o) : null
                            }, n.renderPermanentWorkplaces = function() {
                                var e = n.props.artist.workplaces,
                                    t = (void 0 === e ? [] : e).filter(b.isFulltimeArtist).filter(q());
                                return 0 === t.length ? null : d.default.createElement("section", {
                                    className: z.default.subsection
                                }, d.default.createElement("h3", {
                                    className: z.default.subsectionTitle
                                }, "Works at"), d.default.createElement("ul", {
                                    className: z.default.workplaces
                                }, t.map(function(e) {
                                    return d.default.createElement("li", {
                                        key: e.id
                                    }, d.default.createElement(j.default, {
                                        studio: e.shop
                                    }))
                                })))
                            }, n.renderBoardsSection = function() {
                                var e = n,
                                    t = e.state.boards,
                                    a = e.props,
                                    l = a.artist,
                                    r = a.deviceType,
                                    o = t.filter(function(e) {
                                        return e.preview_posts && e.preview_posts.length > 0
                                    });
                                if (!o || !o.length) return null;
                                var s = (0, h.generateUserUrl)(l, "artist"),
                                    i = o.map(function(e) {
                                        return {
                                            id: e.id,
                                            image_url: e.preview_posts[0].image_url,
                                            title: e.title,
                                            url: s + "/boards/" + e.id,
                                            tattoo_count: e.posts_count
                                        }
                                    });
                                return d.default.createElement("section", {
                                    className: z.default.section
                                }, d.default.createElement("h2", {
                                    className: z.default.sectionTitle
                                }, "Boards"), "mobile" === r ? d.default.createElement(T.default, {
                                    boards: i
                                }) : o.map(function(e) {
                                    return d.default.createElement("div", {
                                        key: e.id,
                                        className: z.default.board
                                    }, d.default.createElement(S.default, {
                                        url: s + "/boards/" + e.id,
                                        board: e
                                    }))
                                }))
                            }, n.renderTemporaryWorkplaces = function() {
                                var e = n.props.artist.workplaces,
                                    t = (void 0 === e ? [] : e).filter(b.isGuestArtist).filter(G());
                                return 0 === t.length ? null : d.default.createElement("div", null, t.map(function(e) {
                                    return d.default.createElement("section", {
                                        key: e.id,
                                        className: z.default.subsection
                                    }, d.default.createElement("h3", {
                                        className: z.default.subsectionTitle
                                    }, "Guest artist: ", d.default.createElement(Y.default, {
                                        date: e.start_date
                                    }), " â€“ ", d.default.createElement(Y.default, {
                                        date: e.end_date
                                    })), d.default.createElement("ul", {
                                        className: z.default.workplaces
                                    }, d.default.createElement("li", null, d.default.createElement(j.default, {
                                        studio: e.shop
                                    }))))
                                }))
                            }, n.updateIsFollowedByAuthUser = function(e, t) {
                                e ? (0, P.follows)(e, [t]).then(function(e) {
                                    n.setState({
                                        isFollowedByAuthedUser: 1 === e.length
                                    })
                                }) : n.setState({
                                    isFollowedByAuthedUser: !1
                                })
                            }, n.followHandler = function() {
                                var e = n.props,
                                    t = e.auth.user,
                                    a = e.artist,
                                    r = e.dispatch;
                                if (null === t) return (0, k.dispatchCustomEvent)("showSignInModal", "follow_user"), null;
                                var o = I.follow,
                                    s = "Follow",
                                    i = n.state.isFollowedByAuthedUser,
                                    u = !i,
                                    d = (0, l.default)({}, a);
                                if (i && (o = I.unFollow, s = "Unfollow", !confirm("Are you sure you want to unfollow " + (a.name || a.username)))) return (0, C.vibrate)([2, 2]);
                                (0, C.vibrate)(2), _.default.send(s, "follow_cta"), n.setState({
                                    isFollowedByAuthedUser: u
                                });
                                var f = u ? d.counts.followers + 1 : d.counts.followers - 1;
                                return r(U.actions.setArtist((0, l.default)({}, d, {
                                    counts: (0, l.default)({}, d.counts, {
                                        followers: f
                                    })
                                }))), o(a.user_id).catch(function() {
                                    return !1
                                }).then(function(e) {
                                    if (!e || e.status && "accepted" !== e.status || "deleted" in e && !e.deleted) return r(U.actions.setArtist(d))
                                })
                            }, n.renderMetaHead = function() {
                                var e = n.props.artist,
                                    t = [],
                                    a = [],
                                    l = (e.name || e.username) + " - Tattoo Artist",
                                    r = E.default.origin + "artists/" + e.username;
                                n.isArtistBookable && (l += " | Book Now"), a = a.concat([{
                                    rel: "canonical",
                                    href: r
                                }]), t = t.concat([{
                                    property: "og:title",
                                    content: l
                                }, {
                                    property: "og:url",
                                    content: r
                                }, {
                                    property: "og:locale",
                                    content: "en_US"
                                }, {
                                    property: "og:type",
                                    content: "profile"
                                }]);
                                var o = e.styles && e.styles.length ? ". " + e.styles.join(", ") : "",
                                    s = "Discover, collect and share inspiration from a curated collection of tattoos by " + (e.name || e.username) + o;
                                return t = t.concat([{
                                    name: "description",
                                    content: s
                                }, {
                                    property: "og:description",
                                    content: s
                                }]), e.image_url && (t = t.concat({
                                    property: "og:image",
                                    content: e.image_url
                                })), d.default.createElement(F.default, {
                                    title: l,
                                    meta: t,
                                    link: a
                                })
                            }, n.scrollToMobileBottom = function() {
                                var e = n.references.mobileBottom;
                                e && (0, g.default)(e, {
                                    offset: -72
                                })
                            }, n.renderCta = function() {
                                var e = n.props.artist;
                                return n.isArtistSameAsAuthedUser ? d.default.createElement("div", {
                                    className: z.default.stickyCta
                                }, d.default.createElement(x.default, {
                                    buttonLabel: "Upload work",
                                    defaultArtist: e,
                                    uploader: e
                                })) : n.isArtistBookable ? d.default.createElement("div", {
                                    className: z.default.stickyCta
                                }, d.default.createElement(R.default, {
                                    onClick: n.requestConsultation,
                                    label: "Book now"
                                })) : null
                            }, n.renderPortfolio = function() {
                                var e = n.props,
                                    t = e.artist,
                                    a = e.deviceType,
                                    r = e.portfolio;
                                return d.default.createElement(M.default, {
                                    initialResults: r && r.posts,
                                    owner: (0, l.default)({
                                        user_type: "artist"
                                    }, t),
                                    deviceType: a,
                                    type: n.isArtistPro ? "slider" : "grid"
                                }, function(e) {
                                    return d.default.createElement("section", {
                                        id: "Portfolio",
                                        className: z.default.section
                                    }, d.default.createElement(c.Link, {
                                        to: (0, h.generateUserUrl)(t, "artist") + "/uploads"
                                    }, d.default.createElement("h2", {
                                        className: z.default.sectionTitle
                                    }, "Portfolio")), e)
                                })
                            }, i = t, (0, s.default)(n, i)
                        }
                        return (0, i.default)(a, t), (0, n.default)(a, [{
                            key: "componentDidMount",
                            value: function() {
                                var t = this.props,
                                    a = t.artist,
                                    l = t.auth;
                                this.fetchBoards(a.user_id, a.user_id === (0, w.default)(l, "user.id")), _.default.setCategory("artist"), this.setTrackingData(a), this.updateIsFollowedByAuthUser((0, w.default)(l, "user.id"), a.user_id), e.window.addEventListener("resize", this.handleResize, !1)
                            }
                        }, {
                            key: "componentWillUnmount",
                            value: function() {
                                e.window.removeEventListener("resize", this.handleResize, !1)
                            }
                        }, {
                            key: "componentWillReceiveProps",
                            value: function(e) {
                                var t = this.props.artist,
                                    a = e.artist;
                                t.user_id !== a.user_id && (this.fetchBoards(a.user_id, (0, w.default)(e.auth, "user.id") === a.user_id), this.setTrackingData(a)), (0, w.default)(e.auth, "user.id") === (0, w.default)(this.props.auth, "user.id") && e.artist.user_id === this.props.artist.user_id || (this.updateIsFollowedByAuthUser((0, w.default)(e.auth, "user.id"), e.artist.user_id), (0, w.default)(e.auth, "user.id") === e.artist.user_id && this.fetchBoards(e.artist.user_id, !0))
                            }
                        }, {
                            key: "render",
                            value: function() {
                                var e = this,
                                    t = this.props,
                                    a = t.artist,
                                    r = t.history,
                                    o = t.deviceType,
                                    n = t.portfolio,
                                    s = t.auth.user,
                                    i = this.state.isFollowedByAuthedUser,
                                    u = this.isArtistBookable,
                                    f = this.isArtistPro,
                                    c = this.shouldUseItemProps,
                                    m = this.isArtistSameAsAuthedUser,
                                    p = "" + (E.default.origin.endsWith("/") ? E.default.origin.slice(0, E.default.origin.length - 1) : E.default.origin) + (0, h.generateUserUrl)(a, "artist");
                                return d.default.createElement("div", (0, l.default)({
                                    className: z.default.containerWrapper
                                }, c ? {
                                    itemScope: !0,
                                    itemType: "http://schema.org/Person"
                                } : {}), c ? d.default.createElement("div", null, d.default.createElement("meta", {
                                    itemProp: "alternateName",
                                    content: "@" + a.username
                                }), d.default.createElement("meta", {
                                    itemProp: "url",
                                    content: p
                                }), a.biography ? d.default.createElement("meta", {
                                    itemProp: "description",
                                    content: a.biography.replace(/\n\s*/gi, "")
                                }) : null, d.default.createElement("div", {
                                    itemProp: "mainEntityOfPage",
                                    itemScope: !0,
                                    itemType: "http://schema.org/ProfilePage",
                                    itemID: p
                                }, d.default.createElement("div", {
                                    itemProp: "interactionStatistic",
                                    itemScope: !0,
                                    itemType: "http://schema.org/InteractionCounter"
                                }, d.default.createElement("meta", {
                                    itemProp: "interactionType",
                                    content: "http://schema.org/FollowAction"
                                }), d.default.createElement("meta", {
                                    itemProp: "userInteractionCount",
                                    content: a.counts.followers
                                })))) : null, this.renderMetaHead(), f ? d.default.createElement(V.default, {
                                    baseUrl: (0, h.generateUserUrl)(a, "artist"),
                                    username: a.username,
                                    deviceType: o,
                                    tattoos: n.posts,
                                    totalCount: (0, w.default)(n, "meta.total", 0),
                                    fetcher: P.fetchUploadsByUsername
                                }) : null, d.default.createElement("div", {
                                    className: z.default.container
                                }, d.default.createElement("div", {
                                    className: z.default.mainContent
                                }, d.default.createElement(D.default, {
                                    isArtistSameAsAuthedUser: m,
                                    showMoreInfoButton: "pro" === a.plan,
                                    onMoreInfoClick: this.scrollToMobileBottom,
                                    onFollowClick: this.followHandler,
                                    deviceType: o,
                                    history: r,
                                    isFollowedByAuthedUser: i,
                                    artist: a,
                                    userId: s ? s.id : null,
                                    useItemProps: c
                                }), this.renderPortfolio(), this.renderWorkplaces(), this.renderBoardsSection(), d.default.createElement("div", {
                                    ref: function(t) {
                                        return e.references.mobileBottom = t
                                    },
                                    className: z.default.mobileBottom
                                }, d.default.createElement(O.default, {
                                    baseUrl: (0, h.generateUserUrl)(a, "artist"),
                                    showContactInfo: "pro" === a.plan,
                                    instagramLink: a.social_links.instagram_link,
                                    facebookLink: a.social_links.facebook_link,
                                    twitterLink: a.social_links.twitter_link,
                                    website: a.website,
                                    email: a.email,
                                    biography: a.biography,
                                    onFollowClick: this.followHandler,
                                    styles: a.styles,
                                    followersCount: (0, w.default)(a, "counts.followers", 0),
                                    followingCount: (0, w.default)(a, "counts.following", 0),
                                    isFollowedByAuthedUser: i,
                                    isArtistSameAsAuthedUser: m
                                }))), d.default.createElement("div", {
                                    className: z.default.sidebar
                                }, d.default.createElement(W.default, {
                                    artist: a,
                                    baseUrl: (0, h.generateUserUrl)(a, "artist"),
                                    isArtistSameAsAuthedUser: m,
                                    showCta: u,
                                    authedUserIsBusinessCardEditor: this.authedUserIsBusinessCardEditor,
                                    onCtaClick: this.requestConsultation,
                                    isFollowedByAuthedUser: i,
                                    followersCount: (0, w.default)(a, "counts.followers", 0),
                                    followingCount: (0, w.default)(a, "counts.following", 0),
                                    onFollowClick: this.followHandler,
                                    styles: a.styles
                                }))), this.renderCta())
                            }
                        }, {
                            key: "isArtistSameAsAuthedUser",
                            get: function() {
                                var e = this.props,
                                    t = e.artist,
                                    a = e.auth.user;
                                return null !== a && t.user_id === a.id
                            }
                        }, {
                            key: "authedUserIsBusinessCardEditor",
                            get: function() {
                                return !0 === (0, w.default)(this, "props.auth.user.is_business_card_editor")
                            }
                        }, {
                            key: "bookingEnabledWorkplaces",
                            get: function() {
                                return (this.props.artist.workplaces || []).filter(G()).filter(function(e) {
                                    return (0, y.isBookingEnabled)(e.shop)
                                })
                            }
                        }, {
                            key: "artistBaseUrl",
                            get: function() {
                                var e = this.props.artist;
                                return (0, h.generateUserUrl)(e, "artist")
                            }
                        }, {
                            key: "isArtistPro",
                            get: function() {
                                return "pro" === this.props.artist.plan
                            }
                        }, {
                            key: "hasArtistAllowedBookings",
                            get: function() {
                                return (0, b.isArtistBookable)(this.props.artist)
                            }
                        }, {
                            key: "isArtistBookable",
                            get: function() {
                                return this.hasArtistAllowedBookings || this.bookingEnabledWorkplaces.length >= 1
                            }
                        }, {
                            key: "shouldUseItemProps",
                            get: function() {
                                return !0
                            }
                        }]), a
                    }(u.Component);
                t.default = (0, f.connect)(function(e, t) {
                    return {
                        history: t.router,
                        deviceType: e.ui.browser.deviceType,
                        artist: (0, N.getArtistByUsername)(e, t.params.username),
                        auth: e.auth,
                        portfolio: (0, A.selectPostBatchByGroupAndBatchId)(e, t.params.username, "portfolio")
                    }
                })(function(e) {
                    return (0, m.default)(e.artist) ? d.default.createElement(L.default, {
                        code: 404,
                        headline: "Artist not found"
                    }) : d.default.createElement(K, e)
                })
            }).call(this, a(7))
        }
    }
]);