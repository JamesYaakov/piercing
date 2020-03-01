function get_auto_suggestions(t, e) {
    var n = {
        search: t.term
    };
    $.get("/search/json_search", n, function(t) {
        e(t)
    }, "json")
}

function renderModal(t, e) {
    $("#randomModal.overlayWrap").removeClass("hide").fadeIn(800), $("#randomModal .popWrap").removeClass($("#randomModal .popWrap").attr("class")).removeClass(e).addClass("popWrap clearfix").addClass(t), $(".overlay").removeClass("hide").fadeIn(800)
}

function showModalDialog() {
    let t = !0;
    return $.each($(".wrap-modal-window"), function() {
        $(this).is(":visible") && (t = !1)
    }), !0 === t && $.each($(".modal-body-rm"), function() {
        $(this).is(":visible") && (t = !1)
    }), t
}! function(t, e) {
    var n;
    t.rails !== e && t.error("jquery-ujs has already been loaded!"), t.rails = n = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
        disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]",
        linkDisableSelector: "a[data-disable-with]",
        CSRFProtection: function(e) {
            var n = t('meta[name="csrf-token"]').attr("content");
            n && e.setRequestHeader("X-CSRF-Token", n)
        },
        fire: function(e, n, i) {
            var r = t.Event(n);
            return e.trigger(r, i), !1 !== r.result
        },
        confirm: function(t) {
            return confirm(t)
        },
        ajax: function(e) {
            return t.ajax(e)
        },
        href: function(t) {
            return t.attr("href")
        },
        handleRemote: function(i) {
            var r, s, a, o, u, l, c, h;
            if (n.fire(i, "ajax:before")) {
                if (u = (o = i.data("cross-domain")) === e ? null : o, l = i.data("with-credentials") || null, c = i.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, i.is("form")) {
                    r = i.attr("method"), s = i.attr("action"), a = i.serializeArray();
                    var d = i.data("ujs:submit-button");
                    d && (a.push(d), i.data("ujs:submit-button", null))
                } else i.is(n.inputChangeSelector) ? (r = i.data("method"), s = i.data("url"), a = i.serialize(), i.data("params") && (a = a + "&" + i.data("params"))) : (r = i.data("method"), s = n.href(i), a = i.data("params") || null);
                h = {
                    type: r || "GET",
                    data: a,
                    dataType: c,
                    beforeSend: function(t, r) {
                        return r.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script), n.fire(i, "ajax:beforeSend", [t, r])
                    },
                    success: function(t, e, n) {
                        i.trigger("ajax:success", [t, e, n])
                    },
                    complete: function(t, e) {
                        i.trigger("ajax:complete", [t, e])
                    },
                    error: function(t, e, n) {
                        i.trigger("ajax:error", [t, e, n])
                    },
                    crossDomain: u
                }, l && (h.xhrFields = {
                    withCredentials: l
                }), s && (h.url = s);
                var f = n.ajax(h);
                return i.trigger("ajax:send", f), f
            }
            return !1
        },
        handleMethod: function(i) {
            var r = n.href(i),
                s = i.data("method"),
                a = i.attr("target"),
                o = t("meta[name=csrf-token]").attr("content"),
                u = t("meta[name=csrf-param]").attr("content"),
                l = t('<form method="post" action="' + r + '"></form>'),
                c = '<input name="_method" value="' + s + '" type="hidden" />';
            u !== e && o !== e && (c += '<input name="' + u + '" value="' + o + '" type="hidden" />'), a && l.attr("target", a), l.hide().append(c).appendTo("body"), l.submit()
        },
        disableFormElements: function(e) {
            e.find(n.disableSelector).each(function() {
                var e = t(this),
                    n = e.is("button") ? "html" : "val";
                e.data("ujs:enable-with", e[n]()), e[n](e.data("disable-with")), e.prop("disabled", !0)
            })
        },
        enableFormElements: function(e) {
            e.find(n.enableSelector).each(function() {
                var e = t(this),
                    n = e.is("button") ? "html" : "val";
                e.data("ujs:enable-with") && e[n](e.data("ujs:enable-with")), e.prop("disabled", !1)
            })
        },
        allowAction: function(t) {
            var e, i = t.data("confirm"),
                r = !1;
            return !i || (n.fire(t, "confirm") && (r = n.confirm(i), e = n.fire(t, "confirm:complete", [r])), r && e)
        },
        blankInputs: function(e, n, i) {
            var r, s = t(),
                a = n || "input,textarea",
                o = e.find(a);
            return o.each(function() {
                if (r = t(this), !(r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : r.val()) == !i) {
                    if (r.is("input[type=radio]") && o.filter('input[type=radio]:checked[name="' + r.attr("name") + '"]').length) return !0;
                    s = s.add(r)
                }
            }), !!s.length && s
        },
        nonBlankInputs: function(t, e) {
            return n.blankInputs(t, e, !0)
        },
        stopEverything: function(e) {
            return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
        },
        callFormSubmitBindings: function(n, i) {
            var r = n.data("events"),
                s = !0;
            return r !== e && r.submit !== e && t.each(r.submit, function(t, e) {
                if ("function" == typeof e.handler) return s = e.handler(i)
            }), s
        },
        disableElement: function(t) {
            t.data("ujs:enable-with", t.html()), t.html(t.data("disable-with")), t.bind("click.railsDisable", function(t) {
                return n.stopEverything(t)
            })
        },
        enableElement: function(t) {
            t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable")
        }
    }, n.fire(t(document), "rails:attachBindings") && (t.ajaxPrefilter(function(t, e, i) {
        t.crossDomain || n.CSRFProtection(i)
    }), t(document).delegate(n.linkDisableSelector, "ajax:complete", function() {
        n.enableElement(t(this))
    }), t(document).delegate(n.linkClickSelector, "click.rails", function(i) {
        var r = t(this),
            s = r.data("method"),
            a = r.data("params");
        if (!n.allowAction(r)) return n.stopEverything(i);
        if (r.is(n.linkDisableSelector) && n.disableElement(r), r.data("remote") !== e) {
            if ((i.metaKey || i.ctrlKey) && (!s || "GET" === s) && !a) return !0;
            var o = n.handleRemote(r);
            return !1 === o ? n.enableElement(r) : o.error(function() {
                n.enableElement(r)
            }), !1
        }
        return r.data("method") ? (n.handleMethod(r), !1) : void 0
    }), t(document).delegate(n.inputChangeSelector, "change.rails", function(e) {
        var i = t(this);
        return n.allowAction(i) ? (n.handleRemote(i), !1) : n.stopEverything(e)
    }), t(document).delegate(n.formSubmitSelector, "submit.rails", function(i) {
        var r = t(this),
            s = r.data("remote") !== e,
            a = n.blankInputs(r, n.requiredInputSelector),
            o = n.nonBlankInputs(r, n.fileInputSelector);
        if (!n.allowAction(r)) return n.stopEverything(i);
        if (a && r.attr("novalidate") == e && n.fire(r, "ajax:aborted:required", [a])) return n.stopEverything(i);
        if (s) {
            if (o) {
                setTimeout(function() {
                    n.disableFormElements(r)
                }, 13);
                var u = n.fire(r, "ajax:aborted:file", [o]);
                return u || setTimeout(function() {
                    n.enableFormElements(r)
                }, 13), u
            }
            return !t.support.submitBubbles && t().jquery < "1.7" && !1 === n.callFormSubmitBindings(r, i) ? n.stopEverything(i) : (n.handleRemote(r), !1)
        }
        setTimeout(function() {
            n.disableFormElements(r)
        }, 13)
    }), t(document).delegate(n.formInputClickSelector, "click.rails", function(e) {
        var i = t(this);
        if (!n.allowAction(i)) return n.stopEverything(e);
        var r = i.attr("name"),
            s = r ? {
                name: r,
                value: i.val()
            } : null;
        i.closest("form").data("ujs:submit-button", s)
    }), t(document).delegate(n.formSubmitSelector, "ajax:beforeSend.rails", function(e) {
        this == e.target && n.disableFormElements(t(this))
    }), t(document).delegate(n.formSubmitSelector, "ajax:complete.rails", function(e) {
        this == e.target && n.enableFormElements(t(this))
    }), t(function() {
        var e = t("meta[name=csrf-token]").attr("content"),
            n = t("meta[name=csrf-param]").attr("content");
        t('form input[name="' + n + '"]').val(e)
    }))
}(jQuery),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(t) {
    t.extend(t.fn, {
        validate: function(e) {
            if (this.length) {
                var n = t.data(this[0], "validator");
                return n || (this.attr("novalidate", "novalidate"), n = new t.validator(e, this[0]), t.data(this[0], "validator", n), n.settings.onsubmit && (this.on("click.validate", ":submit", function(e) {
                    n.submitButton = e.currentTarget, t(this).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== t(this).attr("formnovalidate") && (n.cancelSubmit = !0)
                }), this.on("submit.validate", function(e) {
                    function i() {
                        var i, r;
                        return n.submitButton && (n.settings.submitHandler || n.formSubmitted) && (i = t("<input type='hidden'/>").attr("name", n.submitButton.name).val(t(n.submitButton).val()).appendTo(n.currentForm)), !(n.settings.submitHandler && !n.settings.debug) || (r = n.settings.submitHandler.call(n, n.currentForm, e), i && i.remove(), void 0 !== r && r)
                    }
                    return n.settings.debug && e.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, i()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : i() : (n.focusInvalid(), !1)
                })), n)
            }
            e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
        },
        valid: function() {
            var e, n, i;
            return t(this[0]).is("form") ? e = this.validate().form() : (i = [], e = !0, n = t(this[0].form).validate(), this.each(function() {
                (e = n.element(this) && e) || (i = i.concat(n.errorList))
            }), n.errorList = i), e
        },
        rules: function(e, n) {
            var i, r, s, a, o, u, l = this[0],
                c = void 0 !== this.attr("contenteditable") && "false" !== this.attr("contenteditable");
            if (null != l && (!l.form && c && (l.form = this.closest("form")[0], l.name = this.attr("name")), null != l.form)) {
                if (e) switch (i = t.data(l.form, "validator").settings, r = i.rules, s = t.validator.staticRules(l), e) {
                    case "add":
                        t.extend(s, t.validator.normalizeRule(n)), delete s.messages, r[l.name] = s, n.messages && (i.messages[l.name] = t.extend(i.messages[l.name], n.messages));
                        break;
                    case "remove":
                        return n ? (u = {}, t.each(n.split(/\s/), function(t, e) {
                            u[e] = s[e], delete s[e]
                        }), u) : (delete r[l.name], s)
                }
                return (a = t.validator.normalizeRules(t.extend({}, t.validator.classRules(l), t.validator.attributeRules(l), t.validator.dataRules(l), t.validator.staticRules(l)), l)).required && (o = a.required, delete a.required, a = t.extend({
                    required: o
                }, a)), a.remote && (o = a.remote, delete a.remote, a = t.extend(a, {
                    remote: o
                })), a
            }
        }
    }), t.extend(t.expr.pseudos || t.expr[":"], {
        blank: function(e) {
            return !t.trim("" + t(e).val())
        },
        filled: function(e) {
            var n = t(e).val();
            return null !== n && !!t.trim("" + n)
        },
        unchecked: function(e) {
            return !t(e).prop("checked")
        }
    }), t.validator = function(e, n) {
        this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = n, this.init()
    }, t.validator.format = function(e, n) {
        return 1 === arguments.length ? function() {
            var n = t.makeArray(arguments);
            return n.unshift(e), t.validator.format.apply(this, n)
        } : void 0 === n ? e : (arguments.length > 2 && n.constructor !== Array && (n = t.makeArray(arguments).slice(1)), n.constructor !== Array && (n = [n]), t.each(n, function(t, n) {
            e = e.replace(new RegExp("\\{" + t + "\\}", "g"), function() {
                return n
            })
        }), e)
    }, t.extend(t.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: t([]),
            errorLabelContainer: t([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(t) {
                this.lastActive = t, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(t)))
            },
            onfocusout: function(t) {
                this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
            },
            onkeyup: function(e, n) {
                var i = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                9 === n.which && "" === this.elementValue(e) || -1 !== t.inArray(n.keyCode, i) || (e.name in this.submitted || e.name in this.invalid) && this.element(e)
            },
            onclick: function(t) {
                t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
            },
            highlight: function(e, n, i) {
                "radio" === e.type ? this.findByName(e.name).addClass(n).removeClass(i) : t(e).addClass(n).removeClass(i)
            },
            unhighlight: function(e, n, i) {
                "radio" === e.type ? this.findByName(e.name).removeClass(n).addClass(i) : t(e).removeClass(n).addClass(i)
            }
        },
        setDefaults: function(e) {
            t.extend(t.validator.defaults, e)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: t.validator.format("Please enter no more than {0} characters."),
            minlength: t.validator.format("Please enter at least {0} characters."),
            rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
            range: t.validator.format("Please enter a value between {0} and {1}."),
            max: t.validator.format("Please enter a value less than or equal to {0}."),
            min: t.validator.format("Please enter a value greater than or equal to {0}."),
            step: t.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function e(e) {
                    var n = void 0 !== t(this).attr("contenteditable") && "false" !== t(this).attr("contenteditable");
                    if (!this.form && n && (this.form = t(this).closest("form")[0], this.name = t(this).attr("name")), i === this.form) {
                        var r = t.data(this.form, "validator"),
                            s = "on" + e.type.replace(/^validate/, ""),
                            a = r.settings;
                        a[s] && !t(this).is(a.ignore) && a[s].call(r, this, e)
                    }
                }
                this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var n, i = this.currentForm,
                    r = this.groups = {};
                t.each(this.settings.groups, function(e, n) {
                    "string" == typeof n && (n = n.split(/\s/)), t.each(n, function(t, n) {
                        r[n] = e
                    })
                }), n = this.settings.rules, t.each(n, function(e, i) {
                    n[e] = t.validator.normalizeRule(i)
                }), t(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", e).on("click.validate", "select, option, [type='radio'], [type='checkbox']", e), this.settings.invalidHandler && t(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() {
                return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
                return this.valid()
            },
            element: function(e) {
                var n, i, r = this.clean(e),
                    s = this.validationTargetFor(r),
                    a = this,
                    o = !0;
                return void 0 === s ? delete this.invalid[r.name] : (this.prepareElement(s), this.currentElements = t(s), (i = this.groups[s.name]) && t.each(this.groups, function(t, e) {
                    e === i && t !== s.name && ((r = a.validationTargetFor(a.clean(a.findByName(t)))) && r.name in a.invalid && (a.currentElements.push(r), o = a.check(r) && o))
                }), n = !1 !== this.check(s), o = o && n, this.invalid[s.name] = !n, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), t(e).attr("aria-invalid", !n)), o
            },
            showErrors: function(e) {
                if (e) {
                    var n = this;
                    t.extend(this.errorMap, e), this.errorList = t.map(this.errorMap, function(t, e) {
                        return {
                            message: t,
                            element: n.findByName(e)[0]
                        }
                    }), this.successList = t.grep(this.successList, function(t) {
                        return !(t.name in e)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                t.fn.resetForm && t(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
                var e = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(e)
            },
            resetElements: function(t) {
                var e;
                if (this.settings.unhighlight)
                    for (e = 0; t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, ""), this.findByName(t[e].name).removeClass(this.settings.validClass);
                else t.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(t) {
                var e, n = 0;
                for (e in t) void 0 !== t[e] && null !== t[e] && !1 !== t[e] && n++;
                return n
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(t) {
                t.not(this.containers).text(""), this.addWrapper(t).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (e) {}
            },
            findLastActive: function() {
                var e = this.lastActive;
                return e && 1 === t.grep(this.errorList, function(t) {
                    return t.element.name === e.name
                }).length && e
            },
            elements: function() {
                var e = this,
                    n = {};
                return t(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    var i = this.name || t(this).attr("name"),
                        r = void 0 !== t(this).attr("contenteditable") && "false" !== t(this).attr("contenteditable");
                    return !i && e.settings.debug && window.console && console.error("%o has no name assigned", this), r && (this.form = t(this).closest("form")[0], this.name = i), !(this.form !== e.currentForm || i in n || !e.objectLength(t(this).rules()) || (n[i] = !0, 0))
                })
            },
            clean: function(e) {
                return t(e)[0]
            },
            errors: function() {
                var e = this.settings.errorClass.split(" ").join(".");
                return t(this.settings.errorElement + "." + e, this.errorContext)
            },
            resetInternals: function() {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([])
            },
            reset: function() {
                this.resetInternals(), this.currentElements = t([])
            },
            prepareForm: function() {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(t) {
                this.reset(), this.toHide = this.errorsFor(t)
            },
            elementValue: function(e) {
                var n, i, r = t(e),
                    s = e.type,
                    a = void 0 !== r.attr("contenteditable") && "false" !== r.attr("contenteditable");
                return "radio" === s || "checkbox" === s ? this.findByName(e.name).filter(":checked").val() : "number" === s && "undefined" != typeof e.validity ? e.validity.badInput ? "NaN" : r.val() : (n = a ? r.text() : r.val(), "file" === s ? "C:\\fakepath\\" === n.substr(0, 12) ? n.substr(12) : (i = n.lastIndexOf("/")) >= 0 ? n.substr(i + 1) : (i = n.lastIndexOf("\\")) >= 0 ? n.substr(i + 1) : n : "string" == typeof n ? n.replace(/\r/g, "") : n)
            },
            check: function(e) {
                e = this.validationTargetFor(this.clean(e));
                var n, i, r, s, a = t(e).rules(),
                    o = t.map(a, function(t, e) {
                        return e
                    }).length,
                    u = !1,
                    l = this.elementValue(e);
                for (i in "function" == typeof a.normalizer ? s = a.normalizer : "function" == typeof this.settings.normalizer && (s = this.settings.normalizer), s && (l = s.call(e, l), delete a.normalizer), a) {
                    r = {
                        method: i,
                        parameters: a[i]
                    };
                    try {
                        if ("dependency-mismatch" === (n = t.validator.methods[i].call(this, l, e, r.parameters)) && 1 === o) {
                            u = !0;
                            continue
                        }
                        if (u = !1, "pending" === n) return void(this.toHide = this.toHide.not(this.errorsFor(e)));
                        if (!n) return this.formatAndAdd(e, r), !1
                    } catch (c) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + r.method + "' method.", c), c instanceof TypeError && (c.message += ".  Exception occurred when checking element " + e.id + ", check the '" + r.method + "' method."), c
                    }
                }
                if (!u) return this.objectLength(a) && this.successList.push(e), !0
            },
            customDataMessage: function(e, n) {
                return t(e).data("msg" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase()) || t(e).data("msg")
            },
            customMessage: function(t, e) {
                var n = this.settings.messages[t];
                return n && (n.constructor === String ? n : n[e])
            },
            findDefined: function() {
                for (var t = 0; t < arguments.length; t++)
                    if (void 0 !== arguments[t]) return arguments[t]
            },
            defaultMessage: function(e, n) {
                "string" == typeof n && (n = {
                    method: n
                });
                var i = this.findDefined(this.customMessage(e.name, n.method), this.customDataMessage(e, n.method), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[n.method], "<strong>Warning: No message defined for " + e.name + "</strong>"),
                    r = /\$?\{(\d+)\}/g;
                return "function" == typeof i ? i = i.call(this, n.parameters, e) : r.test(i) && (i = t.validator.format(i.replace(r, "{$1}"), n.parameters)), i
            },
            formatAndAdd: function(t, e) {
                var n = this.defaultMessage(t, e);
                this.errorList.push({
                    message: n,
                    element: t,
                    method: e.method
                }), this.errorMap[t.name] = n, this.submitted[t.name] = n
            },
            addWrapper: function(t) {
                return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
            },
            defaultShowErrors: function() {
                var t, e, n;
                for (t = 0; this.errorList[t]; t++) n = this.errorList[t], this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
                if (this.settings.unhighlight)
                    for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return t(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(e, n) {
                var i, r, s, a, o = this.errorsFor(e),
                    u = this.idOrName(e),
                    l = t(e).attr("aria-describedby");
                o.length ? (o.removeClass(this.settings.validClass).addClass(this.settings.errorClass), o.html(n)) : (i = o = t("<" + this.settings.errorElement + ">").attr("id", u + "-error").addClass(this.settings.errorClass).html(n || ""), this.settings.wrapper && (i = o.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(i) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, i, t(e)) : i.insertAfter(e), o.is("label") ? o.attr("for", u) : 0 === o.parents("label[for='" + this.escapeCssMeta(u) + "']").length && (s = o.attr("id"), l ? l.match(new RegExp("\\b" + this.escapeCssMeta(s) + "\\b")) || (l += " " + s) : l = s, t(e).attr("aria-describedby", l), (r = this.groups[e.name]) && (a = this, t.each(a.groups, function(e, n) {
                    n === r && t("[name='" + a.escapeCssMeta(e) + "']", a.currentForm).attr("aria-describedby", o.attr("id"))
                })))), !n && this.settings.success && (o.text(""), "string" == typeof this.settings.success ? o.addClass(this.settings.success) : this.settings.success(o, e)), this.toShow = this.toShow.add(o)
            },
            errorsFor: function(e) {
                var n = this.escapeCssMeta(this.idOrName(e)),
                    i = t(e).attr("aria-describedby"),
                    r = "label[for='" + n + "'], label[for='" + n + "'] *";
                return i && (r = r + ", #" + this.escapeCssMeta(i).replace(/\s+/g, ", #")), this.errors().filter(r)
            },
            escapeCssMeta: function(t) {
                return t.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1")
            },
            idOrName: function(t) {
                return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
            },
            validationTargetFor: function(e) {
                return this.checkable(e) && (e = this.findByName(e.name)), t(e).not(this.settings.ignore)[0]
            },
            checkable: function(t) {
                return /radio|checkbox/i.test(t.type)
            },
            findByName: function(e) {
                return t(this.currentForm).find("[name='" + this.escapeCssMeta(e) + "']")
            },
            getLength: function(e, n) {
                switch (n.nodeName.toLowerCase()) {
                    case "select":
                        return t("option:selected", n).length;
                    case "input":
                        if (this.checkable(n)) return this.findByName(n.name).filter(":checked").length
                }
                return e.length
            },
            depend: function(t, e) {
                return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e)
            },
            dependTypes: {
                boolean: function(t) {
                    return t
                },
                string: function(e, n) {
                    return !!t(e, n.form).length
                },
                "function": function(t, e) {
                    return t(e)
                }
            },
            optional: function(e) {
                var n = this.elementValue(e);
                return !t.validator.methods.required.call(this, n, e) && "dependency-mismatch"
            },
            startRequest: function(e) {
                this.pending[e.name] || (this.pendingRequest++, t(e).addClass(this.settings.pendingClass), this.pending[e.name] = !0)
            },
            stopRequest: function(e, n) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], t(e).removeClass(this.settings.pendingClass), n && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.submitButton && t("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !n && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(e, n) {
                return n = "string" == typeof n && n || "remote", t.data(e, "previousValue") || t.data(e, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(e, {
                        method: n
                    })
                })
            },
            destroy: function() {
                this.resetForm(), t(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur").find(".validate-lessThan-blur").off(".validate-lessThan").removeClass("validate-lessThan-blur").find(".validate-lessThanEqual-blur").off(".validate-lessThanEqual").removeClass("validate-lessThanEqual-blur").find(".validate-greaterThanEqual-blur").off(".validate-greaterThanEqual").removeClass("validate-greaterThanEqual-blur").find(".validate-greaterThan-blur").off(".validate-greaterThan").removeClass("validate-greaterThan-blur")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(e, n) {
            e.constructor === String ? this.classRuleSettings[e] = n : t.extend(this.classRuleSettings, e)
        },
        classRules: function(e) {
            var n = {},
                i = t(e).attr("class");
            return i && t.each(i.split(" "), function() {
                this in t.validator.classRuleSettings && t.extend(n, t.validator.classRuleSettings[this])
            }), n
        },
        normalizeAttributeRule: function(t, e, n, i) {
            /min|max|step/.test(n) && (null === e || /number|range|text/.test(e)) && (i = Number(i), isNaN(i) && (i = void 0)), i || 0 === i ? t[n] = i : e === n && "range" !== e && (t[n] = !0)
        },
        attributeRules: function(e) {
            var n, i, r = {},
                s = t(e),
                a = e.getAttribute("type");
            for (n in t.validator.methods) "required" === n ? ("" === (i = e.getAttribute(n)) && (i = !0), i = !!i) : i = s.attr(n), this.normalizeAttributeRule(r, a, n, i);
            return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength, r
        },
        dataRules: function(e) {
            var n, i, r = {},
                s = t(e),
                a = e.getAttribute("type");
            for (n in t.validator.methods) "" === (i = s.data("rule" + n.charAt(0).toUpperCase() + n.substring(1).toLowerCase())) && (i = !0), this.normalizeAttributeRule(r, a, n, i);
            return r
        },
        staticRules: function(e) {
            var n = {},
                i = t.data(e.form, "validator");
            return i.settings.rules && (n = t.validator.normalizeRule(i.settings.rules[e.name]) || {}), n
        },
        normalizeRules: function(e, n) {
            return t.each(e, function(i, r) {
                if (!1 !== r) {
                    if (r.param || r.depends) {
                        var s = !0;
                        switch (typeof r.depends) {
                            case "string":
                                s = !!t(r.depends, n.form).length;
                                break;
                            case "function":
                                s = r.depends.call(n, n)
                        }
                        s ? e[i] = void 0 === r.param || r.param : (t.data(n.form, "validator").resetElements(t(n)), delete e[i])
                    }
                } else delete e[i]
            }), t.each(e, function(i, r) {
                e[i] = t.isFunction(r) && "normalizer" !== i ? r(n) : r
            }), t.each(["minlength", "maxlength"], function() {
                e[this] && (e[this] = Number(e[this]))
            }), t.each(["rangelength", "range"], function() {
                var n;
                e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (n = e[this].replace(/[\[\]]/g, "").split(/[\s,]+/), e[this] = [Number(n[0]), Number(n[1])]))
            }), t.validator.autoCreateRanges && (null != e.min && null != e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), null != e.minlength && null != e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e
        },
        normalizeRule: function(e) {
            if ("string" == typeof e) {
                var n = {};
                t.each(e.split(/\s/), function() {
                    n[this] = !0
                }), e = n
            }
            return e
        },
        addMethod: function(e, n, i) {
            t.validator.methods[e] = n, t.validator.messages[e] = void 0 !== i ? i : t.validator.messages[e], n.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e))
        },
        methods: {
            required: function(e, n, i) {
                if (!this.depend(i, n)) return "dependency-mismatch";
                if ("select" === n.nodeName.toLowerCase()) {
                    var r = t(n).val();
                    return r && r.length > 0
                }
                return this.checkable(n) ? this.getLength(e, n) > 0 : null != e && e.length > 0
            },
            email: function(t, e) {
                return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)
            },
            url: function(t, e) {
                return this.optional(e) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(t)
            },
            date: function() {
                var t = !1;
                return function(e, n) {
                    return t || (t = !0, this.settings.debug && window.console && console.warn("The `date` method is deprecated and will be removed in version '2.0.0'.\nPlease don't use it, since it relies on the Date constructor, which\nbehaves very differently across browsers and locales. Use `dateISO`\ninstead or one of the locale specific methods in `localizations/`\nand `additional-methods.js`.")), this.optional(n) || !/Invalid|NaN/.test(new Date(e).toString())
                }
            }(),
            dateISO: function(t, e) {
                return this.optional(e) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)
            },
            number: function(t, e) {
                return this.optional(e) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
            },
            digits: function(t, e) {
                return this.optional(e) || /^\d+$/.test(t)
            },
            minlength: function(e, n, i) {
                var r = t.isArray(e) ? e.length : this.getLength(e, n);
                return this.optional(n) || r >= i
            },
            maxlength: function(e, n, i) {
                var r = t.isArray(e) ? e.length : this.getLength(e, n);
                return this.optional(n) || r <= i
            },
            rangelength: function(e, n, i) {
                var r = t.isArray(e) ? e.length : this.getLength(e, n);
                return this.optional(n) || r >= i[0] && r <= i[1]
            },
            min: function(t, e, n) {
                return this.optional(e) || t >= n
            },
            max: function(t, e, n) {
                return this.optional(e) || t <= n
            },
            range: function(t, e, n) {
                return this.optional(e) || t >= n[0] && t <= n[1]
            },
            step: function(e, n, i) {
                var r, s = t(n).attr("type"),
                    a = "Step attribute on input type " + s + " is not supported.",
                    o = ["text", "number", "range"],
                    u = new RegExp("\\b" + s + "\\b"),
                    l = function(t) {
                        var e = ("" + t).match(/(?:\.(\d+))?$/);
                        return e && e[1] ? e[1].length : 0
                    },
                    c = function(t) {
                        return Math.round(t * Math.pow(10, r))
                    },
                    h = !0;
                if (s && !u.test(o.join())) throw new Error(a);
                return r = l(i), (l(e) > r || c(e) % c(i) != 0) && (h = !1), this.optional(n) || h
            },
            equalTo: function(e, n, i) {
                var r = t(i);
                return this.settings.onfocusout && r.not(".validate-equalTo-blur").length && r.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                    t(n).valid()
                }), e === r.val()
            },
            remote: function(e, n, i, r) {
                if (this.optional(n)) return "dependency-mismatch";
                r = "string" == typeof r && r || "remote";
                var s, a, o, u = this.previousValue(n, r);
                return this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), u.originalMessage = u.originalMessage || this.settings.messages[n.name][r], this.settings.messages[n.name][r] = u.message, i = "string" == typeof i && {
                    url: i
                } || i, o = t.param(t.extend({
                    data: e
                }, i.data)), u.old === o ? u.valid : (u.old = o, s = this, this.startRequest(n), (a = {})[n.name] = e, t.ajax(t.extend(!0, {
                    mode: "abort",
                    port: "validate" + n.name,
                    dataType: "json",
                    data: a,
                    context: s.currentForm,
                    success: function(t) {
                        var i, a, o, l = !0 === t || "true" === t;
                        s.settings.messages[n.name][r] = u.originalMessage, l ? (o = s.formSubmitted, s.resetInternals(), s.toHide = s.errorsFor(n), s.formSubmitted = o, s.successList.push(n), s.invalid[n.name] = !1, s.showErrors()) : (i = {}, a = t || s.defaultMessage(n, {
                            method: r,
                            parameters: e
                        }), i[n.name] = u.message = a, s.invalid[n.name] = !0, s.showErrors(i)), u.valid = l, s.stopRequest(n, l)
                    }
                }, i)), "pending")
            }
        }
    });
    var e, n = {};
    return t.ajaxPrefilter ? t.ajaxPrefilter(function(t, e, i) {
        var r = t.port;
        "abort" === t.mode && (n[r] && n[r].abort(), n[r] = i)
    }) : (e = t.ajax, t.ajax = function(i) {
        var r = ("mode" in i ? i : t.ajaxSettings).mode,
            s = ("port" in i ? i : t.ajaxSettings).port;
        return "abort" === r ? (n[s] && n[s].abort(), n[s] = e.apply(this, arguments), n[s]) : e.apply(this, arguments)
    }), t
}), $(document).ready(function() {
        "use strict";
        var t = {
            beforeConvert: !1,
            afterConvert: !1,
            baseCurrency: "EUR",
            microformat: {
                selector: "span.money",
                amount: {
                    selector: "span.amount"
                },
                currency: {
                    selector: "abbr.currency",
                    value: ["title", "content"]
                },
                unit: {
                    selector: "abbr.unit",
                    value: ["title", "content"]
                }
            },
            rates: {},
            parseAmount: function(t) {
                return parseFloat(t)
            },
            formatAmount: function(t, e) {
                var n = e && parseFloat(e.precision);
                return t.toFixed(isNaN(n) || n < 2 ? 2 : n)
            }
        };
        $.extend({
            currency: {
                getRate: function(e, n) {
                    var i = e === t.baseCurrency ? 1 : t.rates[e],
                        r = n === t.baseCurrency ? 1 : t.rates[n];
                    if (i && r) return r / i
                },
                convert: function(t, e, n) {
                    if (0 == parseFloat(t)) return parseFloat(t);
                    var i = parseFloat($.currency.getRate(e, n));
                    return !isNaN(i) && parseFloat(t * i)
                },
                getSymbol: function(e) {
                    return t.symbols[e]
                },
                configure: function(e) {
                    return e && e.symbols && (e.symbols = $.extend({}, t.symbols, e.symbols)), t = $.extend(t, e)
                },
                getDefaults: function() {
                    return t
                },
                parse: function(e, n) {
                    var i = $.extend({}, t, n),
                        r = function(t) {
                            var n = i.microformat,
                                r = e.find(n[t].selector),
                                s = $.isArray(n[t].value) ? n[t].value : [n[t].value],
                                a = null;
                            return e.data(t) ? e.data(t) : ($.each(s, function(t, e) {
                                if (e && "content" !== e) {
                                    if (r.attr(e)) return a = r.attr(e), !1
                                } else if (r.html() && r.html().match(/\S/)) return a = r.html(), !1
                            }), a)
                        },
                        s = t.parseAmount(r("amount"));
                    return isNaN(s) ? null : {
                        amount: s,
                        currency: r("currency"),
                        unit: r("unit"),
                        precision: e.data("precision") || ((s + "").match(/\..+$/) || [".00"])[0].length - 1
                    }
                },
                update: function(e, n, i) {
                    var r = $.extend({}, t, i),
                        s = function(t, n) {
                            var i = r.microformat,
                                s = e.find(i[t].selector),
                                a = $.isArray(i[t].value) ? i[t].value : [i[t].value];
                            $.each(a, function(t, e) {
                                e && "content" !== e && s.attr(e) && s.attr(e).match(/\S/) ? s.attr(e, n) : s.html() && s.html().match(/\S/) && s.html(n)
                            })
                        };
                    e.data(n), s("amount", $.currency.formatAmount(n.amount, e.data())), n.currency && s("currency", n.currency),
                        n.unit && s("unit", n.unit)
                },
                formatAmount: t.formatAmount
            }
        }), $.fn.currency = function(e, n) {
            var i = $.extend({}, i, t, n);
            return this.find(i.microformat.selector).andSelf().filter(i.microformat.selector).each(function() {
                var t, n = this,
                    r = $(this),
                    s = $.currency.parse(r, i);
                "number" == typeof(t = s ? $.currency.convert(s.amount, s.currency || i.baseCurrency, e) : null) && ($.isFunction(i.beforeConvert) && i.beforeConvert(n, arguments), $.extend(s, {
                    amount: t,
                    currency: e,
                    unit: i.symbol || $.currency.getSymbol(e) || ""
                }), $.currency.update(r, s, i), $.isFunction(i.afterConvert) && i.afterConvert(n, arguments))
            }), this
        }
    }), $(document).ready(function() {
        $("input[name=authenticity_token]").val($("meta[name=csrf-token]").attr("content")), $.currency.configure({
            baseCurrency: "USD",
            microformat: {
                selector: ".shipprice, .formatprice",
                amount: {
                    selector: "span.number"
                },
                currency: {
                    selector: "span.currency"
                },
                unit: {
                    selector: "span.unit"
                }
            }
        })
    }),
    /*!
     * jQuery Cookie Plugin v1.3.1
     * https://github.com/carhartl/jquery-cookie
     *
     * Copyright 2013 Klaus Hartl
     * Released under the MIT license
     */
    function(t) {
        "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], t) : t(jQuery)
    }(function(t) {
        function e(t) {
            return t
        }

        function n(t) {
            return decodeURIComponent(t.replace(r, " "))
        }

        function i(t) {
            0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return s.json ? JSON.parse(t) : t
            } catch (e) {}
        }
        var r = /\+/g,
            s = t.cookie = function(r, a, o) {
                if (a !== undefined) {
                    if ("number" == typeof(o = t.extend({}, s.defaults, o)).expires) {
                        var u = o.expires,
                            l = o.expires = new Date;
                        l.setDate(l.getDate() + u)
                    }
                    return a = s.json ? JSON.stringify(a) : String(a), document.cookie = [encodeURIComponent(r), "=", s.raw ? a : encodeURIComponent(a), o.expires ? "; expires=" + o.expires.toUTCString() : "", o.path ? "; path=" + o.path : "", o.domain ? "; domain=" + o.domain : "", o.secure ? "; secure" : ""].join("")
                }
                for (var c = s.raw ? e : n, h = document.cookie.split("; "), d = r ? undefined : {}, f = 0, m = h.length; f < m; f++) {
                    var p = h[f].split("="),
                        g = c(p.shift()),
                        v = c(p.join("="));
                    if (r && r === g) {
                        d = i(v);
                        break
                    }
                    r || (d[g] = i(v))
                }
                return d
            };
        s.defaults = {}, t.removeCookie = function(e, n) {
            return t.cookie(e) !== undefined && (t.cookie(e, "", t.extend(n, {
                expires: -1
            })), !0)
        }
    }),
    function() {
        var t, e;
        e = "#modal-holder", t = ".content-modal-rm", this.hidePopup = function() {
            return $("#modal-holder").hide()
        }, this.renderPopup = function(t) {
            return $(e).load(t, function(t, n, i) {
                if ("success" === n && ($(".menu_content-close").click(), $(e).show()), "error" === n) return 301 === i.status ? window.location.reload() : alert("Error: Occured")
            })
        }, this.renderPopupContent = function(t, n) {
            return e = "#modal-holder", $(e).html('<div class="modal-body-rm"><div class="closeBtn"></div><header class="header-modal-rm"><h3>' + t + '</h3><div class="close-modal-rm"><i class="icon icon-close"></i></div></header><div class="content-modal-rm">' + n + "</div></div>").show()
        }, $(function() {
            return e = "#modal-holder", $(document).on("click", "a[data-modal]", function() {
                var t;
                return t = $(this).attr("href"), renderPopup(t), !1
            }), $("#modal-holder").on("click", ".close-modal, .close-modal-rm, .close-modal-btn", event, function() {
                return $(e).hide(), event.preventDefault()
            }), $(document).on("ajax:success", "form[data-modal]", function(e, n, i, r) {
                var s, a, o;
                return s = n.detail, a = n.body_class, (o = r.getResponseHeader("Location")) ? window.location = o : ("#randomModal.modal".length && $("#randomModal div.modal-body").html(s), $(t).addClass(a).html(s).show()), !1
            }), $(".login-btn").on("click", function() {
                var t;
                return !(t = this.dataset.modalLink) || (renderPopup(t), !1)
            })
        })
    }.call(this),
    function(t, e) {
        var n = e(t, t.document);
        t.lazySizes = n, "object" == typeof module && module.exports && (module.exports = n)
    }(window, function(t, e) {
        "use strict";
        if (e.getElementsByClassName) {
            var n, i, r = e.documentElement,
                s = t.Date,
                a = t.HTMLPictureElement,
                o = "addEventListener",
                u = "getAttribute",
                l = t[o],
                c = t.setTimeout,
                h = t.requestAnimationFrame || c,
                d = t.requestIdleCallback,
                f = /^picture$/i,
                m = ["load", "error", "lazyincluded", "_lazyloaded"],
                p = {},
                g = Array.prototype.forEach,
                v = function(t, e) {
                    return p[e] || (p[e] = new RegExp("(\\s|^)" + e + "(\\s|$)")), p[e].test(t[u]("class") || "") && p[e]
                },
                y = function(t, e) {
                    v(t, e) || t.setAttribute("class", (t[u]("class") || "").trim() + " " + e)
                },
                b = function(t, e) {
                    var n;
                    (n = v(t, e)) && t.setAttribute("class", (t[u]("class") || "").replace(n, " "))
                },
                _ = function(t, e, n) {
                    var i = n ? o : "removeEventListener";
                    n && _(t, e), m.forEach(function(n) {
                        t[i](n, e)
                    })
                },
                w = function(t, i, r, s, a) {
                    var o = e.createEvent("Event");
                    return r || (r = {}), r.instance = n, o.initEvent(i, !s, !a), o.detail = r, t.dispatchEvent(o), o
                },
                x = function(e, n) {
                    var r;
                    !a && (r = t.picturefill || i.pf) ? (n && n.src && !e[u]("srcset") && e.setAttribute("srcset", n.src), r({
                        reevaluate: !0,
                        elements: [e]
                    })) : n && n.src && (e.src = n.src)
                },
                C = function(t, e) {
                    return (getComputedStyle(t, null) || {})[e]
                },
                $ = function(t, e, n) {
                    for (n = n || t.offsetWidth; n < i.minSize && e && !t._lazysizesWidth;) n = e.offsetWidth, e = e.parentNode;
                    return n
                },
                S = function() {
                    var t, n, i = [],
                        r = [],
                        s = i,
                        a = function() {
                            var e = s;
                            for (s = i.length ? r : i, t = !0, n = !1; e.length;) e.shift()();
                            t = !1
                        },
                        o = function(i, r) {
                            t && !r ? i.apply(this, arguments) : (s.push(i), n || (n = !0, (e.hidden ? c : h)(a)))
                        };
                    return o._lsFlush = a, o
                }(),
                k = function(t, e) {
                    return e ? function() {
                        S(t)
                    } : function() {
                        var e = this,
                            n = arguments;
                        S(function() {
                            t.apply(e, n)
                        })
                    }
                },
                A = function(t) {
                    var e, n = 0,
                        r = i.throttleDelay,
                        a = i.ricTimeout,
                        o = function() {
                            e = !1, n = s.now(), t()
                        },
                        u = d && a > 49 ? function() {
                            d(o, {
                                timeout: a
                            }), a !== i.ricTimeout && (a = i.ricTimeout)
                        } : k(function() {
                            c(o)
                        }, !0);
                    return function(t) {
                        var i;
                        (t = !0 === t) && (a = 33), e || (e = !0, 0 > (i = r - (s.now() - n)) && (i = 0), t || 9 > i ? u() : c(u, i))
                    }
                },
                z = function(t) {
                    var e, n, i = 99,
                        r = function() {
                            e = null, t()
                        },
                        a = function() {
                            var t = s.now() - n;
                            i > t ? c(a, i - t) : (d || r)(r)
                        };
                    return function() {
                        n = s.now(), e || (e = c(a, i))
                    }
                };
            ! function() {
                var e, n = {
                    lazyClass: "lazyload",
                    loadedClass: "lazyloaded",
                    loadingClass: "lazyloading",
                    preloadClass: "lazypreload",
                    errorClass: "lazyerror",
                    autosizesClass: "lazyautosizes",
                    srcAttr: "data-src",
                    srcsetAttr: "data-srcset",
                    sizesAttr: "data-sizes",
                    minSize: 40,
                    customMedia: {},
                    init: !0,
                    expFactor: 1.5,
                    hFac: .8,
                    loadMode: 2,
                    loadHidden: !0,
                    ricTimeout: 0,
                    throttleDelay: 125
                };
                for (e in i = t.lazySizesConfig || t.lazysizesConfig || {}, n) e in i || (i[e] = n[e]);
                t.lazySizesConfig = i, c(function() {
                    i.init && q()
                })
            }();
            var E = function() {
                    var a, h, d, m, p, $, E, q, R, j, F, L, D, I, N = /^img$/i,
                        B = /^iframe$/i,
                        M = "onscroll" in t && !/(gle|ing)bot/.test(navigator.userAgent),
                        O = 0,
                        H = 0,
                        P = 0,
                        K = -1,
                        W = function(t) {
                            P--, t && t.target && _(t.target, W), (!t || 0 > P || !t.target) && (P = 0)
                        },
                        Q = function(t, n) {
                            var i, s = t,
                                a = "hidden" == C(e.body, "visibility") || "hidden" != C(t.parentNode, "visibility") && "hidden" != C(t, "visibility");
                            for (q -= n, F += n, R -= n, j += n; a && (s = s.offsetParent) && s != e.body && s != r;)(a = (C(s, "opacity") || 1) > 0) && "visible" != C(s, "overflow") && (i = s.getBoundingClientRect(), a = j > i.left && R < i.right && F > i.top - 1 && q < i.bottom + 1);
                            return a
                        },
                        V = function() {
                            var t, s, o, l, c, d, f, p, g, v = n.elements;
                            if ((m = i.loadMode) && 8 > P && (t = v.length)) {
                                s = 0, K++, null == D && ("expand" in i || (i.expand = r.clientHeight > 500 && r.clientWidth > 500 ? 500 : 370), L = i.expand, D = L * i.expFactor), D > H && 1 > P && K > 2 && m > 2 && !e.hidden ? (H = D, K = 0) : H = m > 1 && K > 1 && 6 > P ? L : O;
                                for (; t > s; s++)
                                    if (v[s] && !v[s]._lazyRace)
                                        if (M)
                                            if ((p = v[s][u]("data-expand")) && (d = 1 * p) || (d = H), g !== d && ($ = innerWidth + d * I, E = innerHeight + d, f = -1 * d, g = d), o = v[s].getBoundingClientRect(), (F = o.bottom) >= f && (q = o.top) <= E && (j = o.right) >= f * I && (R = o.left) <= $ && (F || j || R || q) && (i.loadHidden || "hidden" != C(v[s], "visibility")) && (h && 3 > P && !p && (3 > m || 4 > K) || Q(v[s], d))) {
                                                if (et(v[s]), c = !0, P > 9) break
                                            } else !c && h && !l && 4 > P && 4 > K && m > 2 && (a[0] || i.preloadAfterLoad) && (a[0] || !p && (F || j || R || q || "auto" != v[s][u](i.sizesAttr))) && (l = a[0] || v[s]);
                                else et(v[s]);
                                l && !c && et(l)
                            }
                        },
                        U = A(V),
                        J = function(t) {
                            y(t.target, i.loadedClass), b(t.target, i.loadingClass), _(t.target, Z), w(t.target, "lazyloaded")
                        },
                        G = k(J),
                        Z = function(t) {
                            G({
                                target: t.target
                            })
                        },
                        X = function(t, e) {
                            try {
                                t.contentWindow.location.replace(e)
                            } catch (n) {
                                t.src = e
                            }
                        },
                        Y = function(t) {
                            var e, n = t[u](i.srcsetAttr);
                            (e = i.customMedia[t[u]("data-media") || t[u]("media")]) && t.setAttribute("media", e), n && t.setAttribute("srcset", n)
                        },
                        tt = k(function(t, e, n, r, s) {
                            var a, o, l, h, m, p;
                            (m = w(t, "lazybeforeunveil", e)).defaultPrevented || (r && (n ? y(t, i.autosizesClass) : t.setAttribute("sizes", r)), o = t[u](i.srcsetAttr), a = t[u](i.srcAttr), s && (h = (l = t.parentNode) && f.test(l.nodeName || "")), p = e.firesLoad || "src" in t && (o || a || h), m = {
                                target: t
                            }, p && (_(t, W, !0), clearTimeout(d), d = c(W, 2500), y(t, i.loadingClass), _(t, Z, !0)), h && g.call(l.getElementsByTagName("source"), Y), o ? t.setAttribute("srcset", o) : a && !h && (B.test(t.nodeName) ? X(t, a) : t.src = a), s && (o || h) && x(t, {
                                src: a
                            })), t._lazyRace && delete t._lazyRace, b(t, i.lazyClass), S(function() {
                                (!p || t.complete && t.naturalWidth > 1) && (p ? W(m) : P--, J(m))
                            }, !0)
                        }),
                        et = function(t) {
                            var e, n = N.test(t.nodeName),
                                r = n && (t[u](i.sizesAttr) || t[u]("sizes")),
                                s = "auto" == r;
                            (!s && h || !n || !t[u]("src") && !t.srcset || t.complete || v(t, i.errorClass) || !v(t, i.lazyClass)) && (e = w(t, "lazyunveilread").detail, s && T.updateElem(t, !0, t.offsetWidth), t._lazyRace = !0, P++, tt(t, e, s, r, n))
                        },
                        nt = function() {
                            if (!h) {
                                if (s.now() - p < 999) return void c(nt, 999);
                                var t = z(function() {
                                    i.loadMode = 3, U()
                                });
                                h = !0, i.loadMode = 3, U(), l("scroll", function() {
                                    3 == i.loadMode && (i.loadMode = 2), t()
                                }, !0)
                            }
                        };
                    return {
                        _: function() {
                            p = s.now(), n.elements = e.getElementsByClassName(i.lazyClass), a = e.getElementsByClassName(i.lazyClass + " " + i.preloadClass), I = i.hFac, l("scroll", U, !0), l("resize", U, !0), t.MutationObserver ? new MutationObserver(U).observe(r, {
                                childList: !0,
                                subtree: !0,
                                attributes: !0
                            }) : (r[o]("DOMNodeInserted", U, !0), r[o]("DOMAttrModified", U, !0), setInterval(U, 999)), l("hashchange", U, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function(t) {
                                e[o](t, U, !0)
                            }), /d$|^c/.test(e.readyState) ? nt() : (l("load", nt), e[o]("DOMContentLoaded", U), c(nt, 2e4)), n.elements.length ? (V(), S._lsFlush()) : U()
                        },
                        checkElems: U,
                        unveil: et
                    }
                }(),
                T = function() {
                    var t, n = k(function(t, e, n, i) {
                            var r, s, a;
                            if (t._lazysizesWidth = i, i += "px", t.setAttribute("sizes", i), f.test(e.nodeName || ""))
                                for (s = 0, a = (r = e.getElementsByTagName("source")).length; a > s; s++) r[s].setAttribute("sizes", i);
                            n.detail.dataAttr || x(t, n.detail)
                        }),
                        r = function(t, e, i) {
                            var r, s = t.parentNode;
                            s && (i = $(t, s, i), (r = w(t, "lazybeforesizes", {
                                width: i,
                                dataAttr: !!e
                            })).defaultPrevented || (i = r.detail.width) && i !== t._lazysizesWidth && n(t, s, r, i))
                        },
                        s = z(function() {
                            var e, n = t.length;
                            if (n)
                                for (e = 0; n > e; e++) r(t[e])
                        });
                    return {
                        _: function() {
                            t = e.getElementsByClassName(i.autosizesClass), l("resize", s)
                        },
                        checkElems: s,
                        updateElem: r
                    }
                }(),
                q = function() {
                    q.i || (q.i = !0, T._(), E._())
                };
            return n = {
                cfg: i,
                autoSizer: T,
                loader: E,
                init: q,
                uP: x,
                aC: y,
                rC: b,
                hC: v,
                fire: w,
                gW: $,
                rAF: S
            }
        }
    }),
    /*!
     * typeahead.js 0.11.1
     * https://github.com/twitter/typeahead.js
     * Copyright 2013-2015 Twitter, Inc. and other contributors; Licensed MIT
     */
    function(t, e) {
        "function" == typeof define && define.amd ? define("bloodhound", ["jquery"], function(n) {
            return t.Bloodhound = e(n)
        }) : "object" == typeof exports ? module.exports = e(require("jquery")) : t.Bloodhound = e(jQuery)
    }(this, function(t) {
        var e = function() {
                "use strict";
                return {
                    isMsie: function() {
                        return !!/(msie|trident)/i.test(navigator.userAgent) && navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]
                    },
                    isBlankString: function(t) {
                        return !t || /^\s*$/.test(t)
                    },
                    escapeRegExChars: function(t) {
                        return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                    },
                    isString: function(t) {
                        return "string" == typeof t
                    },
                    isNumber: function(t) {
                        return "number" == typeof t
                    },
                    isArray: t.isArray,
                    isFunction: t.isFunction,
                    isObject: t.isPlainObject,
                    isUndefined: function(t) {
                        return void 0 === t
                    },
                    isElement: function(t) {
                        return !(!t || 1 !== t.nodeType)
                    },
                    isJQuery: function(e) {
                        return e instanceof t
                    },
                    toStr: function(t) {
                        return e.isUndefined(t) || null === t ? "" : t + ""
                    },
                    bind: t.proxy,
                    each: function(e, n) {
                        function i(t, e) {
                            return n(e, t)
                        }
                        t.each(e, i)
                    },
                    map: t.map,
                    filter: t.grep,
                    every: function(e, n) {
                        var i = !0;
                        return e ? (t.each(e, function(t, r) {
                            if (!(i = n.call(null, r, t, e))) return !1
                        }), !!i) : i
                    },
                    some: function(e, n) {
                        var i = !1;
                        return e ? (t.each(e, function(t, r) {
                            if (i = n.call(null, r, t, e)) return !1
                        }), !!i) : i
                    },
                    mixin: t.extend,
                    identity: function(t) {
                        return t
                    },
                    clone: function(e) {
                        return t.extend(!0, {}, e)
                    },
                    getIdGenerator: function() {
                        var t = 0;
                        return function() {
                            return t++
                        }
                    },
                    templatify: function(e) {
                        function n() {
                            return String(e)
                        }
                        return t.isFunction(e) ? e : n
                    },
                    defer: function(t) {
                        setTimeout(t, 0)
                    },
                    debounce: function(t, e, n) {
                        var i, r;
                        return function() {
                            var s, a, o = this,
                                u = arguments;
                            return s = function() {
                                i = null, n || (r = t.apply(o, u))
                            }, a = n && !i, clearTimeout(i), i = setTimeout(s, e), a && (r = t.apply(o, u)), r
                        }
                    },
                    throttle: function(t, e) {
                        var n, i, r, s, a, o;
                        return a = 0, o = function() {
                                a = new Date, r = null, s = t.apply(n, i)
                            },
                            function() {
                                var u = new Date,
                                    l = e - (u - a);
                                return n = this, i = arguments, l <= 0 ? (clearTimeout(r), r = null, a = u, s = t.apply(n, i)) : r || (r = setTimeout(o, l)), s
                            }
                    },
                    stringify: function(t) {
                        return e.isString(t) ? t : JSON.stringify(t)
                    },
                    noop: function() {}
                }
            }(),
            n = "0.11.1",
            i = function() {
                "use strict";

                function t(t) {
                    return (t = e.toStr(t)) ? t.split(/\s+/) : []
                }

                function n(t) {
                    return (t = e.toStr(t)) ? t.split(/\W+/) : []
                }

                function i(t) {
                    return function(n) {
                        return n = e.isArray(n) ? n : [].slice.call(arguments, 0),
                            function(i) {
                                var r = [];
                                return e.each(n, function(n) {
                                    r = r.concat(t(e.toStr(i[n])))
                                }), r
                            }
                    }
                }
                return {
                    nonword: n,
                    whitespace: t,
                    obj: {
                        nonword: i(n),
                        whitespace: i(t)
                    }
                }
            }(),
            r = function() {
                "use strict";

                function n(n) {
                    this.maxSize = e.isNumber(n) ? n : 100, this.reset(), this.maxSize <= 0 && (this.set = this.get = t.noop)
                }

                function i() {
                    this.head = this.tail = null
                }

                function r(t, e) {
                    this.key = t, this.val = e, this.prev = this.next = null
                }
                return e.mixin(n.prototype, {
                    set: function(t, e) {
                        var n, i = this.list.tail;
                        this.size >= this.maxSize && (this.list.remove(i), delete this.hash[i.key], this.size--), (n = this.hash[t]) ? (n.val = e, this.list.moveToFront(n)) : (n = new r(t, e), this.list.add(n), this.hash[t] = n, this.size++)
                    },
                    get: function(t) {
                        var e = this.hash[t];
                        if (e) return this.list.moveToFront(e), e.val
                    },
                    reset: function() {
                        this.size = 0, this.hash = {}, this.list = new i
                    }
                }), e.mixin(i.prototype, {
                    add: function(t) {
                        this.head && (t.next = this.head, this.head.prev = t), this.head = t, this.tail = this.tail || t
                    },
                    remove: function(t) {
                        t.prev ? t.prev.next = t.next : this.head = t.next, t.next ? t.next.prev = t.prev : this.tail = t.prev
                    },
                    moveToFront: function(t) {
                        this.remove(t), this.add(t)
                    }
                }), n
            }(),
            s = function() {
                "use strict";

                function n(t, n) {
                    this.prefix = ["__", t, "__"].join(""), this.ttlKey = "__ttl__", this.keyMatcher = new RegExp("^" + e.escapeRegExChars(this.prefix)), this.ls = n || o, !this.ls && this._noop()
                }

                function i() {
                    return (new Date).getTime()
                }

                function r(t) {
                    return JSON.stringify(e.isUndefined(t) ? null : t)
                }

                function s(e) {
                    return t.parseJSON(e)
                }

                function a(t) {
                    var e, n, i = [],
                        r = o.length;
                    for (e = 0; e < r; e++)(n = o.key(e)).match(t) && i.push(n.replace(t, ""));
                    return i
                }
                var o;
                try {
                    (o = window.localStorage).setItem("~~~", "!"), o.removeItem("~~~")
                } catch (u) {
                    o = null
                }
                return e.mixin(n.prototype, {
                    _prefix: function(t) {
                        return this.prefix + t
                    },
                    _ttlKey: function(t) {
                        return this._prefix(t) + this.ttlKey
                    },
                    _noop: function() {
                        this.get = this.set = this.remove = this.clear = this.isExpired = e.noop
                    },
                    _safeSet: function(t, e) {
                        try {
                            this.ls.setItem(t, e)
                        } catch (u) {
                            "QuotaExceededError" === u.name && (this.clear(), this._noop())
                        }
                    },
                    get: function(t) {
                        return this.isExpired(t) && this.remove(t), s(this.ls.getItem(this._prefix(t)))
                    },
                    set: function(t, n, s) {
                        return e.isNumber(s) ? this._safeSet(this._ttlKey(t), r(i() + s)) : this.ls.removeItem(this._ttlKey(t)), this._safeSet(this._prefix(t), r(n))
                    },
                    remove: function(t) {
                        return this.ls.removeItem(this._ttlKey(t)), this.ls.removeItem(this._prefix(t)), this
                    },
                    clear: function() {
                        var t, e = a(this.keyMatcher);
                        for (t = e.length; t--;) this.remove(e[t]);
                        return this
                    },
                    isExpired: function(t) {
                        var n = s(this.ls.getItem(this._ttlKey(t)));
                        return !!(e.isNumber(n) && i() > n)
                    }
                }), n
            }(),
            a = function() {
                "use strict";

                function n(t) {
                    t = t || {}, this.cancelled = !1, this.lastReq = null, this._send = t.transport, this._get = t.limiter ? t.limiter(this._get) : this._get, this._cache = !1 === t.cache ? new r(0) : o
                }
                var i = 0,
                    s = {},
                    a = 6,
                    o = new r(10);
                return n.setMaxPendingRequests = function(t) {
                    a = t
                }, n.resetCache = function() {
                    o.reset()
                }, e.mixin(n.prototype, {
                    _fingerprint: function(e) {
                        return (e = e || {}).url + e.type + t.param(e.data || {})
                    },
                    _get: function(t, e) {
                        function n(t) {
                            e(null, t), c._cache.set(u, t)
                        }

                        function r() {
                            e(!0)
                        }

                        function o() {
                            i--, delete s[u], c.onDeckRequestArgs && (c._get.apply(c, c.onDeckRequestArgs), c.onDeckRequestArgs = null)
                        }
                        var u, l, c = this;
                        u = this._fingerprint(t), this.cancelled || u !== this.lastReq || ((l = s[u]) ? l.done(n).fail(r) : i < a ? (i++, s[u] = this._send(t).done(n).fail(r).always(o)) : this.onDeckRequestArgs = [].slice.call(arguments, 0))
                    },
                    get: function(n, i) {
                        var r, s;
                        i = i || t.noop, n = e.isString(n) ? {
                            url: n
                        } : n || {}, s = this._fingerprint(n), this.cancelled = !1, this.lastReq = s, (r = this._cache.get(s)) ? i(null, r) : this._get(n, i)
                    },
                    cancel: function() {
                        this.cancelled = !0
                    }
                }), n
            }(),
            o = window.SearchIndex = function() {
                "use strict";

                function n(n) {
                    (n = n || {}).datumTokenizer && n.queryTokenizer || t.error("datumTokenizer and queryTokenizer are both required"), this.identify = n.identify || e.stringify, this.datumTokenizer = n.datumTokenizer, this.queryTokenizer = n.queryTokenizer, this.reset()
                }

                function i(t) {
                    return t = e.filter(t, function(t) {
                        return !!t
                    }), t = e.map(t, function(t) {
                        return t.toLowerCase()
                    })
                }

                function r() {
                    var t = {};
                    return t[u] = [], t[o] = {}, t
                }

                function s(t) {
                    for (var e = {}, n = [], i = 0, r = t.length; i < r; i++) e[t[i]] || (e[t[i]] = !0, n.push(t[i]));
                    return n
                }

                function a(t, e) {
                    var n = 0,
                        i = 0,
                        r = [];
                    t = t.sort(), e = e.sort();
                    for (var s = t.length, a = e.length; n < s && i < a;) t[n] < e[i] ? n++ : t[n] > e[i] ? i++ : (r.push(t[n]), n++, i++);
                    return r
                }
                var o = "c",
                    u = "i";
                return e.mixin(n.prototype, {
                    bootstrap: function(t) {
                        this.datums = t.datums, this.trie = t.trie
                    },
                    add: function(t) {
                        var n = this;
                        t = e.isArray(t) ? t : [t], e.each(t, function(t) {
                            var s, a;
                            n.datums[s = n.identify(t)] = t, a = i(n.datumTokenizer(t)), e.each(a, function(t) {
                                var e, i, a;
                                for (e = n.trie, i = t.split(""); a = i.shift();)(e = e[o][a] || (e[o][a] = r()))[u].push(s)
                            })
                        })
                    },
                    get: function(t) {
                        var n = this;
                        return e.map(t, function(t) {
                            return n.datums[t]
                        })
                    },
                    search: function(t) {
                        var n, r, l = this;
                        return n = i(this.queryTokenizer(t)), e.each(n, function(t) {
                            var e, n, i, s;
                            if (r && 0 === r.length) return !1;
                            for (e = l.trie, n = t.split(""); e && (i = n.shift());) e = e[o][i];
                            if (!e || 0 !== n.length) return r = [], !1;
                            s = e[u].slice(0), r = r ? a(r, s) : s
                        }), r ? e.map(s(r), function(t) {
                            return l.datums[t]
                        }) : []
                    },
                    all: function() {
                        var t = [];
                        for (var e in this.datums) t.push(this.datums[e]);
                        return t
                    },
                    reset: function() {
                        this.datums = {}, this.trie = r()
                    },
                    serialize: function() {
                        return {
                            datums: this.datums,
                            trie: this.trie
                        }
                    }
                }), n
            }(),
            u = function() {
                "use strict";

                function t(t) {
                    this.url = t.url, this.ttl = t.ttl, this.cache = t.cache, this.prepare = t.prepare, this.transform = t.transform, this.transport = t.transport, this.thumbprint = t.thumbprint, this.storage = new s(t.cacheKey)
                }
                var n;
                return n = {
                    data: "data",
                    protocol: "protocol",
                    thumbprint: "thumbprint"
                }, e.mixin(t.prototype, {
                    _settings: function() {
                        return {
                            url: this.url,
                            type: "GET",
                            dataType: "json"
                        }
                    },
                    store: function(t) {
                        this.cache && (this.storage.set(n.data, t, this.ttl), this.storage.set(n.protocol, location.protocol, this.ttl), this.storage.set(n.thumbprint, this.thumbprint, this.ttl))
                    },
                    fromCache: function() {
                        var t, e = {};
                        return this.cache ? (e.data = this.storage.get(n.data), e.protocol = this.storage.get(n.protocol), e.thumbprint = this.storage.get(n.thumbprint), t = e.thumbprint !== this.thumbprint || e.protocol !== location.protocol, e.data && !t ? e.data : null) : null
                    },
                    fromNetwork: function(t) {
                        function e() {
                            t(!0)
                        }

                        function n(e) {
                            t(null, r.transform(e))
                        }
                        var i, r = this;
                        t && (i = this.prepare(this._settings()), this.transport(i).fail(e).done(n))
                    },
                    clear: function() {
                        return this.storage.clear(), this
                    }
                }), t
            }(),
            l = function() {
                "use strict";

                function t(t) {
                    this.url = t.url, this.prepare = t.prepare, this.transform = t.transform, this.transport = new a({
                        cache: t.cache,
                        limiter: t.limiter,
                        transport: t.transport
                    })
                }
                return e.mixin(t.prototype, {
                    _settings: function() {
                        return {
                            url: this.url,
                            type: "GET",
                            dataType: "json"
                        }
                    },
                    get: function(t, e) {
                        function n(t, n) {
                            e(t ? [] : r.transform(n))
                        }
                        var i, r = this;
                        if (e) return t = t || "", i = this.prepare(t, this._settings()), this.transport.get(i, n)
                    },
                    cancelLastRequest: function() {
                        this.transport.cancel()
                    }
                }), t
            }(),
            c = function() {
                "use strict";

                function i(i) {
                    var r;
                    return i ? (r = {
                        url: null,
                        ttl: 864e5,
                        cache: !0,
                        cacheKey: null,
                        thumbprint: "",
                        prepare: e.identity,
                        transform: e.identity,
                        transport: null
                    }, i = e.isString(i) ? {
                        url: i
                    } : i, !(i = e.mixin(r, i)).url && t.error("prefetch requires url to be set"), i.transform = i.filter || i.transform, i.cacheKey = i.cacheKey || i.url, i.thumbprint = n + i.thumbprint, i.transport = i.transport ? o(i.transport) : t.ajax, i) : null
                }

                function r(n) {
                    var i;
                    if (n) return i = {
                        url: null,
                        cache: !0,
                        prepare: null,
                        replace: null,
                        wildcard: null,
                        limiter: null,
                        rateLimitBy: "debounce",
                        rateLimitWait: 300,
                        transform: e.identity,
                        transport: null
                    }, n = e.isString(n) ? {
                        url: n
                    } : n, !(n = e.mixin(i, n)).url && t.error("remote requires url to be set"), n.transform = n.filter || n.transform, n.prepare = s(n), n.limiter = a(n), n.transport = n.transport ? o(n.transport) : t.ajax, delete n.replace, delete n.wildcard, delete n.rateLimitBy, delete n.rateLimitWait, n
                }

                function s(t) {
                    function e(t, e) {
                        return e.url = s(e.url, t), e
                    }

                    function n(t, e) {
                        return e.url = e.url.replace(a, encodeURIComponent(t)), e
                    }

                    function i(t, e) {
                        return e
                    }
                    var r, s, a;
                    return r = t.prepare, s = t.replace, a = t.wildcard, r || (r = s ? e : t.wildcard ? n : i)
                }

                function a(t) {
                    function n(t) {
                        return function(n) {
                            return e.debounce(n, t)
                        }
                    }

                    function i(t) {
                        return function(n) {
                            return e.throttle(n, t)
                        }
                    }
                    var r, s, a;
                    return r = t.limiter, s = t.rateLimitBy, a = t.rateLimitWait, r || (r = /^throttle$/i.test(s) ? i(a) : n(a)), r
                }

                function o(n) {
                    return function(i) {
                        function r(t) {
                            e.defer(function() {
                                a.resolve(t)
                            })
                        }

                        function s(t) {
                            e.defer(function() {
                                a.reject(t)
                            })
                        }
                        var a = t.Deferred();
                        return n(i, r, s), a
                    }
                }
                return function(n) {
                    var s, a;
                    return s = {
                        initialize: !0,
                        identify: e.stringify,
                        datumTokenizer: null,
                        queryTokenizer: null,
                        sufficient: 5,
                        sorter: null,
                        local: [],
                        prefetch: null,
                        remote: null
                    }, !(n = e.mixin(s, n || {})).datumTokenizer && t.error("datumTokenizer is required"), !n.queryTokenizer && t.error("queryTokenizer is required"), a = n.sorter, n.sorter = a ? function(t) {
                        return t.sort(a)
                    } : e.identity, n.local = e.isFunction(n.local) ? n.local() : n.local, n.prefetch = i(n.prefetch), n.remote = r(n.remote), n
                }
            }();
        return function() {
            "use strict";

            function n(t) {
                t = c(t), this.sorter = t.sorter, this.identify = t.identify, this.sufficient = t.sufficient, this.local = t.local, this.remote = t.remote ? new l(t.remote) : null, this.prefetch = t.prefetch ? new u(t.prefetch) : null, this.index = new o({
                    identify: this.identify,
                    datumTokenizer: t.datumTokenizer,
                    queryTokenizer: t.queryTokenizer
                }), !1 !== t.initialize && this.initialize()
            }
            var r;
            return r = window && window.Bloodhound, n.noConflict = function() {
                return window && (window.Bloodhound = r), n
            }, n.tokenizers = i, e.mixin(n.prototype, {
                __ttAdapter: function() {
                    function t(t, e, i) {
                        return n.search(t, e, i)
                    }

                    function e(t, e) {
                        return n.search(t, e)
                    }
                    var n = this;
                    return this.remote ? t : e
                },
                _loadPrefetch: function() {
                    function e(t, e) {
                        if (t) return n.reject();
                        r.add(e), r.prefetch.store(r.index.serialize()), n.resolve()
                    }
                    var n, i, r = this;
                    return n = t.Deferred(), this.prefetch ? (i = this.prefetch.fromCache()) ? (this.index.bootstrap(i), n.resolve()) : this.prefetch.fromNetwork(e) : n.resolve(), n.promise()
                },
                _initialize: function() {
                    function t() {
                        e.add(e.local)
                    }
                    var e = this;
                    return this.clear(), (this.initPromise = this._loadPrefetch()).done(t), this.initPromise
                },
                initialize: function(t) {
                    return !this.initPromise || t ? this._initialize() : this.initPromise
                },
                add: function(t) {
                    return this.index.add(t), this
                },
                get: function(t) {
                    return t = e.isArray(t) ? t : [].slice.call(arguments), this.index.get(t)
                },
                search: function(t, n, i) {
                    function r(t) {
                        var n = [];
                        e.each(t, function(t) {
                            !e.some(s, function(e) {
                                return a.identify(t) === a.identify(e)
                            }) && n.push(t)
                        }), i && i(n)
                    }
                    var s, a = this;
                    return s = this.sorter(this.index.search(t)), n(this.remote ? s.slice() : s), this.remote && s.length < this.sufficient ? this.remote.get(t, r) : this.remote && this.remote.cancelLastRequest(), this
                },
                all: function() {
                    return this.index.all()
                },
                clear: function() {
                    return this.index.reset(), this
                },
                clearPrefetchCache: function() {
                    return this.prefetch && this.prefetch.clear(), this
                },
                clearRemoteCache: function() {
                    return a.resetCache(), this
                },
                ttAdapter: function() {
                    return this.__ttAdapter()
                }
            }), n
        }()
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("typeahead.js", ["jquery"], function(t) {
            return e(t)
        }) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(0, function(t) {
        var e = function() {
                "use strict";
                return {
                    isMsie: function() {
                        return !!/(msie|trident)/i.test(navigator.userAgent) && navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]
                    },
                    isBlankString: function(t) {
                        return !t || /^\s*$/.test(t)
                    },
                    escapeRegExChars: function(t) {
                        return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
                    },
                    isString: function(t) {
                        return "string" == typeof t
                    },
                    isNumber: function(t) {
                        return "number" == typeof t
                    },
                    isArray: t.isArray,
                    isFunction: t.isFunction,
                    isObject: t.isPlainObject,
                    isUndefined: function(t) {
                        return void 0 === t
                    },
                    isElement: function(t) {
                        return !(!t || 1 !== t.nodeType)
                    },
                    isJQuery: function(e) {
                        return e instanceof t
                    },
                    toStr: function(t) {
                        return e.isUndefined(t) || null === t ? "" : t + ""
                    },
                    bind: t.proxy,
                    each: function(e, n) {
                        function i(t, e) {
                            return n(e, t)
                        }
                        t.each(e, i)
                    },
                    map: t.map,
                    filter: t.grep,
                    every: function(e, n) {
                        var i = !0;
                        return e ? (t.each(e, function(t, r) {
                            if (!(i = n.call(null, r, t, e))) return !1
                        }), !!i) : i
                    },
                    some: function(e, n) {
                        var i = !1;
                        return e ? (t.each(e, function(t, r) {
                            if (i = n.call(null, r, t, e)) return !1
                        }), !!i) : i
                    },
                    mixin: t.extend,
                    identity: function(t) {
                        return t
                    },
                    clone: function(e) {
                        return t.extend(!0, {}, e)
                    },
                    getIdGenerator: function() {
                        var t = 0;
                        return function() {
                            return t++
                        }
                    },
                    templatify: function(e) {
                        function n() {
                            return String(e)
                        }
                        return t.isFunction(e) ? e : n
                    },
                    defer: function(t) {
                        setTimeout(t, 0)
                    },
                    debounce: function(t, e, n) {
                        var i, r;
                        return function() {
                            var s, a, o = this,
                                u = arguments;
                            return s = function() {
                                i = null, n || (r = t.apply(o, u))
                            }, a = n && !i, clearTimeout(i), i = setTimeout(s, e), a && (r = t.apply(o, u)), r
                        }
                    },
                    throttle: function(t, e) {
                        var n, i, r, s, a, o;
                        return a = 0, o = function() {
                                a = new Date, r = null, s = t.apply(n, i)
                            },
                            function() {
                                var u = new Date,
                                    l = e - (u - a);
                                return n = this, i = arguments, l <= 0 ? (clearTimeout(r), r = null, a = u, s = t.apply(n, i)) : r || (r = setTimeout(o, l)), s
                            }
                    },
                    stringify: function(t) {
                        return e.isString(t) ? t : JSON.stringify(t)
                    },
                    noop: function() {}
                }
            }(),
            n = function() {
                "use strict";

                function t(t) {
                    var a, o;
                    return o = e.mixin({}, s, t), {
                        css: (a = {
                            css: r(),
                            classes: o,
                            html: n(o),
                            selectors: i(o)
                        }).css,
                        html: a.html,
                        classes: a.classes,
                        selectors: a.selectors,
                        mixin: function(t) {
                            e.mixin(t, a)
                        }
                    }
                }

                function n(t) {
                    return {
                        wrapper: '<span class="' + t.wrapper + '"></span>',
                        menu: '<div class="' + t.menu + '"></div>'
                    }
                }

                function i(t) {
                    var n = {};
                    return e.each(t, function(t, e) {
                        n[e] = "." + t
                    }), n
                }

                function r() {
                    var t = {
                        wrapper: {
                            position: "relative",
                            display: "inline-block"
                        },
                        hint: {
                            position: "absolute",
                            top: "0",
                            left: "0",
                            borderColor: "transparent",
                            boxShadow: "none",
                            opacity: "1"
                        },
                        input: {
                            position: "relative",
                            verticalAlign: "top",
                            backgroundColor: "transparent"
                        },
                        inputWithNoHint: {
                            position: "relative",
                            verticalAlign: "top"
                        },
                        menu: {
                            position: "absolute",
                            top: "100%",
                            left: "0",
                            zIndex: "100",
                            display: "none"
                        },
                        ltr: {
                            left: "0",
                            right: "auto"
                        },
                        rtl: {
                            left: "auto",
                            right: " 0"
                        }
                    };
                    return e.isMsie() && e.mixin(t.input, {
                        backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
                    }), t
                }
                var s = {
                    wrapper: "twitter-typeahead",
                    input: "tt-input",
                    hint: "tt-hint",
                    menu: "tt-menu",
                    dataset: "tt-dataset",
                    suggestion: "tt-suggestion",
                    selectable: "tt-selectable",
                    empty: "tt-empty",
                    open: "tt-open",
                    cursor: "tt-cursor",
                    highlight: "tt-highlight"
                };
                return t
            }(),
            i = function() {
                "use strict";

                function n(e) {
                    e && e.el || t.error("EventBus initialized without el"), this.$el = t(e.el)
                }
                var i, r;
                return i = "typeahead:", r = {
                    render: "rendered",
                    cursorchange: "cursorchanged",
                    select: "selected",
                    autocomplete: "autocompleted"
                }, e.mixin(n.prototype, {
                    _trigger: function(e, n) {
                        var r;
                        return r = t.Event(i + e), (n = n || []).unshift(r), this.$el.trigger.apply(this.$el, n), r
                    },
                    before: function(t) {
                        var e;
                        return e = [].slice.call(arguments, 1), this._trigger("before" + t, e).isDefaultPrevented()
                    },
                    trigger: function(t) {
                        var e;
                        this._trigger(t, [].slice.call(arguments, 1)), (e = r[t]) && this._trigger(e, [].slice.call(arguments, 1))
                    }
                }), n
            }(),
            r = function() {
                "use strict";

                function t(t, e, n, i) {
                    var r;
                    if (!n) return this;
                    for (e = e.split(u), n = i ? o(n, i) : n, this._callbacks = this._callbacks || {}; r = e.shift();) this._callbacks[r] = this._callbacks[r] || {
                        sync: [],
                        async: []
                    }, this._callbacks[r][t].push(n);
                    return this
                }

                function e(e, n, i) {
                    return t.call(this, "async", e, n, i)
                }

                function n(e, n, i) {
                    return t.call(this, "sync", e, n, i)
                }

                function i(t) {
                    var e;
                    if (!this._callbacks) return this;
                    for (t = t.split(u); e = t.shift();) delete this._callbacks[e];
                    return this
                }

                function r(t) {
                    var e, n, i, r, a;
                    if (!this._callbacks) return this;
                    for (t = t.split(u), i = [].slice.call(arguments, 1);
                        (e = t.shift()) && (n = this._callbacks[e]);) r = s(n.sync, this, [e].concat(i)), a = s(n.async, this, [e].concat(i)), r() && l(a);
                    return this
                }

                function s(t, e, n) {
                    function i() {
                        for (var i, r = 0, s = t.length; !i && r < s; r += 1) i = !1 === t[r].apply(e, n);
                        return !i
                    }
                    return i
                }

                function a() {
                    return window.setImmediate ? function(t) {
                        setImmediate(function() {
                            t()
                        })
                    } : function(t) {
                        setTimeout(function() {
                            t()
                        }, 0)
                    }
                }

                function o(t, e) {
                    return t.bind ? t.bind(e) : function() {
                        t.apply(e, [].slice.call(arguments, 0))
                    }
                }
                var u = /\s+/,
                    l = a();
                return {
                    onSync: n,
                    onAsync: e,
                    off: i,
                    trigger: r
                }
            }(),
            s = function(t) {
                "use strict";

                function n(t, n, i) {
                    for (var r, s = [], a = 0, o = t.length; a < o; a++) s.push(e.escapeRegExChars(t[a]));
                    return r = i ? "\\b(" + s.join("|") + ")\\b" : "(" + s.join("|") + ")", n ? new RegExp(r) : new RegExp(r, "i")
                }
                var i = {
                    node: null,
                    pattern: null,
                    tagName: "strong",
                    className: null,
                    wordsOnly: !1,
                    caseSensitive: !1
                };
                return function(r) {
                    function s(e) {
                        var n, i, s;
                        return (n = o.exec(e.data)) && (s = t.createElement(r.tagName), r.className && (s.className = r.className), (i = e.splitText(n.index)).splitText(n[0].length), s.appendChild(i.cloneNode(!0)), e.parentNode.replaceChild(s, i)), !!n
                    }

                    function a(t, e) {
                        for (var n, i = 3, r = 0; r < t.childNodes.length; r++)(n = t.childNodes[r]).nodeType === i ? r += e(n) ? 1 : 0 : a(n, e)
                    }
                    var o;
                    (r = e.mixin({}, i, r)).node && r.pattern && (r.pattern = e.isArray(r.pattern) ? r.pattern : [r.pattern], o = n(r.pattern, r.caseSensitive, r.wordsOnly), a(r.node, s))
                }
            }(window.document),
            a = function() {
                "use strict";

                function n(n, r) {
                    (n = n || {}).input || t.error("input is missing"), r.mixin(this), this.$hint = t(n.hint), this.$input = t(n.input), this.query = this.$input.val(), this.queryWhenFocused = this.hasFocus() ? this.query : null, this.$overflowHelper = i(this.$input), this._checkLanguageDirection(), 0 === this.$hint.length && (this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = e.noop)
                }

                function i(e) {
                    return t('<pre aria-hidden="true"></pre>').css({
                        position: "absolute",
                        visibility: "hidden",
                        whiteSpace: "pre",
                        fontFamily: e.css("font-family"),
                        fontSize: e.css("font-size"),
                        fontStyle: e.css("font-style"),
                        fontVariant: e.css("font-variant"),
                        fontWeight: e.css("font-weight"),
                        wordSpacing: e.css("word-spacing"),
                        letterSpacing: e.css("letter-spacing"),
                        textIndent: e.css("text-indent"),
                        textRendering: e.css("text-rendering"),
                        textTransform: e.css("text-transform")
                    }).insertAfter(e)
                }

                function s(t, e) {
                    return n.normalizeQuery(t) === n.normalizeQuery(e)
                }

                function a(t) {
                    return t.altKey || t.ctrlKey || t.metaKey || t.shiftKey
                }
                var o;
                return o = {
                    9: "tab",
                    27: "esc",
                    37: "left",
                    39: "right",
                    13: "enter",
                    38: "up",
                    40: "down"
                }, n.normalizeQuery = function(t) {
                    return e.toStr(t).replace(/^\s*/g, "").replace(/\s{2,}/g, " ")
                }, e.mixin(n.prototype, r, {
                    _onBlur: function() {
                        this.resetInputValue(), this.trigger("blurred")
                    },
                    _onFocus: function() {
                        this.queryWhenFocused = this.query, this.trigger("focused")
                    },
                    _onKeydown: function(t) {
                        var e = o[t.which || t.keyCode];
                        this._managePreventDefault(e, t), e && this._shouldTrigger(e, t) && this.trigger(e + "Keyed", t)
                    },
                    _onInput: function() {
                        this._setQuery(this.getInputValue()), this.clearHintIfInvalid(), this._checkLanguageDirection()
                    },
                    _managePreventDefault: function(t, e) {
                        var n;
                        switch (t) {
                            case "up":
                            case "down":
                                n = !a(e);
                                break;
                            default:
                                n = !1
                        }
                        n && e.preventDefault()
                    },
                    _shouldTrigger: function(t, e) {
                        var n;
                        switch (t) {
                            case "tab":
                                n = !a(e);
                                break;
                            default:
                                n = !0
                        }
                        return n
                    },
                    _checkLanguageDirection: function() {
                        var t = (this.$input.css("direction") || "ltr").toLowerCase();
                        this.dir !== t && (this.dir = t, this.$hint.attr("dir", t), this.trigger("langDirChanged", t))
                    },
                    _setQuery: function(t, e) {
                        var n, i;
                        i = !!(n = s(t, this.query)) && this.query.length !== t.length, this.query = t, e || n ? !e && i && this.trigger("whitespaceChanged", this.query) : this.trigger("queryChanged", this.query)
                    },
                    bind: function() {
                        var t, n, i, r, s = this;
                        return t = e.bind(this._onBlur, this), n = e.bind(this._onFocus, this), i = e.bind(this._onKeydown, this), r = e.bind(this._onInput, this), this.$input.on("blur.tt", t).on("focus.tt", n).on("keydown.tt", i), !e.isMsie() || e.isMsie() > 9 ? this.$input.on("input.tt", r) : this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function(t) {
                            o[t.which || t.keyCode] || e.defer(e.bind(s._onInput, s, t))
                        }), this
                    },
                    focus: function() {
                        this.$input.focus()
                    },
                    blur: function() {
                        this.$input.blur()
                    },
                    getLangDir: function() {
                        return this.dir
                    },
                    getQuery: function() {
                        return this.query || ""
                    },
                    setQuery: function(t, e) {
                        this.setInputValue(t), this._setQuery(t, e)
                    },
                    hasQueryChangedSinceLastFocus: function() {
                        return this.query !== this.queryWhenFocused
                    },
                    getInputValue: function() {
                        return this.$input.val()
                    },
                    setInputValue: function(t) {
                        this.$input.val(t), this.clearHintIfInvalid(), this._checkLanguageDirection()
                    },
                    resetInputValue: function() {
                        this.setInputValue(this.query)
                    },
                    getHint: function() {
                        return this.$hint.val()
                    },
                    setHint: function(t) {
                        this.$hint.val(t)
                    },
                    clearHint: function() {
                        this.setHint("")
                    },
                    clearHintIfInvalid: function() {
                        var t, e, n;
                        n = (t = this.getInputValue()) !== (e = this.getHint()) && 0 === e.indexOf(t), !("" !== t && n && !this.hasOverflow()) && this.clearHint()
                    },
                    hasFocus: function() {
                        return this.$input.is(":focus")
                    },
                    hasOverflow: function() {
                        var t = this.$input.width() - 2;
                        return this.$overflowHelper.text(this.getInputValue()), this.$overflowHelper.width() >= t
                    },
                    isCursorAtEnd: function() {
                        var t, n, i;
                        return t = this.$input.val().length, n = this.$input[0].selectionStart, e.isNumber(n) ? n === t : !document.selection || ((i = document.selection.createRange()).moveStart("character", -t), t === i.text.length)
                    },
                    destroy: function() {
                        this.$hint.off(".tt"), this.$input.off(".tt"), this.$overflowHelper.remove(), this.$hint = this.$input = this.$overflowHelper = t("<div>")
                    }
                }), n
            }(),
            o = function() {
                "use strict";

                function n(n, r) {
                    (n = n || {}).templates = n.templates || {}, n.templates.notFound = n.templates.notFound || n.templates.empty, n.source || t.error("missing source"), n.node || t.error("missing node"), n.name && !o(n.name) && t.error("invalid dataset name: " + n.name), r.mixin(this), this.highlight = !!n.highlight, this.name = n.name || l(), this.limit = n.limit || 5, this.displayFn = i(n.display || n.displayKey), this.templates = a(n.templates, this.displayFn), this.source = n.source.__ttAdapter ? n.source.__ttAdapter() : n.source, this.async = e.isUndefined(n.async) ? this.source.length > 2 : !!n.async, this._resetLastSuggestion(), this.$el = t(n.node).addClass(this.classes.dataset).addClass(this.classes.dataset + "-" + this.name)
                }

                function i(t) {
                    function n(e) {
                        return e[t]
                    }
                    return t = t || e.stringify, e.isFunction(t) ? t : n
                }

                function a(n, i) {
                    function r(e) {
                        return t("<div>").text(i(e))
                    }
                    return {
                        notFound: n.notFound && e.templatify(n.notFound),
                        pending: n.pending && e.templatify(n.pending),
                        header: n.header && e.templatify(n.header),
                        footer: n.footer && e.templatify(n.footer),
                        suggestion: n.suggestion || r
                    }
                }

                function o(t) {
                    return /^[_a-zA-Z0-9-]+$/.test(t)
                }
                var u, l;
                return u = {
                    val: "tt-selectable-display",
                    obj: "tt-selectable-object"
                }, l = e.getIdGenerator(), n.extractData = function(e) {
                    var n = t(e);
                    return n.data(u.obj) ? {
                        val: n.data(u.val) || "",
                        obj: n.data(u.obj) || null
                    } : null
                }, e.mixin(n.prototype, r, {
                    _overwrite: function(t, e) {
                        (e = e || []).length ? this._renderSuggestions(t, e) : this.async && this.templates.pending ? this._renderPending(t) : !this.async && this.templates.notFound ? this._renderNotFound(t) : this._empty(), this.trigger("rendered", this.name, e, !1)
                    },
                    _append: function(t, e) {
                        (e = e || []).length && this.$lastSuggestion.length ? this._appendSuggestions(t, e) : e.length ? this._renderSuggestions(t, e) : !this.$lastSuggestion.length && this.templates.notFound && this._renderNotFound(t), this.trigger("rendered", this.name, e, !0)
                    },
                    _renderSuggestions: function(t, e) {
                        var n;
                        n = this._getSuggestionsFragment(t, e), this.$lastSuggestion = n.children().last(), this.$el.html(n).prepend(this._getHeader(t, e)).append(this._getFooter(t, e))
                    },
                    _appendSuggestions: function(t, e) {
                        var n, i;
                        i = (n = this._getSuggestionsFragment(t, e)).children().last(), this.$lastSuggestion.after(n), this.$lastSuggestion = i
                    },
                    _renderPending: function(t) {
                        var e = this.templates.pending;
                        this._resetLastSuggestion(), e && this.$el.html(e({
                            query: t,
                            dataset: this.name
                        }))
                    },
                    _renderNotFound: function(t) {
                        var e = this.templates.notFound;
                        this._resetLastSuggestion(), e && this.$el.html(e({
                            query: t,
                            dataset: this.name
                        }))
                    },
                    _empty: function() {
                        this.$el.empty(), this._resetLastSuggestion()
                    },
                    _getSuggestionsFragment: function(n, i) {
                        var r, a = this;
                        return r = document.createDocumentFragment(), e.each(i, function(e) {
                            var i, s;
                            s = a._injectQuery(n, e), i = t(a.templates.suggestion(s)).data(u.obj, e).data(u.val, a.displayFn(e)).addClass(a.classes.suggestion + " " + a.classes.selectable), r.appendChild(i[0])
                        }), this.highlight && s({
                            className: this.classes.highlight,
                            node: r,
                            pattern: n
                        }), t(r)
                    },
                    _getFooter: function(t, e) {
                        return this.templates.footer ? this.templates.footer({
                            query: t,
                            suggestions: e,
                            dataset: this.name
                        }) : null
                    },
                    _getHeader: function(t, e) {
                        return this.templates.header ? this.templates.header({
                            query: t,
                            suggestions: e,
                            dataset: this.name
                        }) : null
                    },
                    _resetLastSuggestion: function() {
                        this.$lastSuggestion = t()
                    },
                    _injectQuery: function(t, n) {
                        return e.isObject(n) ? e.mixin({
                            _query: t
                        }, n) : n
                    },
                    update: function(e) {
                        function n(t) {
                            a || (a = !0, t = (t || []).slice(0, r.limit), o = t.length, r._overwrite(e, t), o < r.limit && r.async && r.trigger("asyncRequested", e))
                        }

                        function i(n) {
                            n = n || [], !s && o < r.limit && (r.cancel = t.noop, o += n.length, r._append(e, n.slice(0, r.limit - o)), r.async && r.trigger("asyncReceived", e))
                        }
                        var r = this,
                            s = !1,
                            a = !1,
                            o = 0;
                        this.cancel(), this.cancel = function() {
                            s = !0, r.cancel = t.noop, r.async && r.trigger("asyncCanceled", e)
                        }, this.source(e, n, i), !a && n([])
                    },
                    cancel: t.noop,
                    clear: function() {
                        this._empty(), this.cancel(), this.trigger("cleared")
                    },
                    isEmpty: function() {
                        return this.$el.is(":empty")
                    },
                    destroy: function() {
                        this.$el = t("<div>")
                    }
                }), n
            }(),
            u = function() {
                "use strict";

                function n(n, i) {
                    function r(e) {
                        var n = s.$node.find(e.node).first();
                        return e.node = n.length ? n : t("<div>").appendTo(s.$node), new o(e, i)
                    }
                    var s = this;
                    (n = n || {}).node || t.error("node is required"), i.mixin(this), this.$node = t(n.node), this.query = null, this.datasets = e.map(n.datasets, r)
                }
                return e.mixin(n.prototype, r, {
                    _onSelectableClick: function(e) {
                        this.trigger("selectableClicked", t(e.currentTarget))
                    },
                    _onRendered: function(t, e, n, i) {
                        this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty()), this.trigger("datasetRendered", e, n, i)
                    },
                    _onCleared: function() {
                        this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty()), this.trigger("datasetCleared")
                    },
                    _propagate: function() {
                        this.trigger.apply(this, arguments)
                    },
                    _allDatasetsEmpty: function() {
                        function t(t) {
                            return t.isEmpty()
                        }
                        return e.every(this.datasets, t)
                    },
                    _getSelectables: function() {
                        return this.$node.find(this.selectors.selectable)
                    },
                    _removeCursor: function() {
                        var t = this.getActiveSelectable();
                        t && t.removeClass(this.classes.cursor)
                    },
                    _ensureVisible: function(t) {
                        var e, n, i, r;
                        n = (e = t.position().top) + t.outerHeight(!0), i = this.$node.scrollTop(), r = this.$node.height() + parseInt(this.$node.css("paddingTop"), 10) + parseInt(this.$node.css("paddingBottom"), 10), e < 0 ? this.$node.scrollTop(i + e) : r < n && this.$node.scrollTop(i + (n - r))
                    },
                    bind: function() {
                        var t, n = this;
                        return t = e.bind(this._onSelectableClick, this), this.$node.on("click.tt", this.selectors.selectable, t), e.each(this.datasets, function(t) {
                            t.onSync("asyncRequested", n._propagate, n).onSync("asyncCanceled", n._propagate, n).onSync("asyncReceived", n._propagate, n).onSync("rendered", n._onRendered, n).onSync("cleared", n._onCleared, n)
                        }), this
                    },
                    isOpen: function() {
                        return this.$node.hasClass(this.classes.open)
                    },
                    open: function() {
                        this.$node.addClass(this.classes.open)
                    },
                    close: function() {
                        this.$node.removeClass(this.classes.open), this._removeCursor()
                    },
                    setLanguageDirection: function(t) {
                        this.$node.attr("dir", t)
                    },
                    selectableRelativeToCursor: function(t) {
                        var e, n, i;
                        return n = this.getActiveSelectable(), e = this._getSelectables(), -1 === (i = (i = ((i = (n ? e.index(n) : -1) + t) + 1) % (e.length + 1) - 1) < -1 ? e.length - 1 : i) ? null : e.eq(i)
                    },
                    setCursor: function(t) {
                        this._removeCursor(), (t = t && t.first()) && (t.addClass(this.classes.cursor), this._ensureVisible(t))
                    },
                    getSelectableData: function(t) {
                        return t && t.length ? o.extractData(t) : null
                    },
                    getActiveSelectable: function() {
                        var t = this._getSelectables().filter(this.selectors.cursor).first();
                        return t.length ? t : null
                    },
                    getTopSelectable: function() {
                        var t = this._getSelectables().first();
                        return t.length ? t : null
                    },
                    update: function(t) {
                        function n(e) {
                            e.update(t)
                        }
                        var i = t !== this.query;
                        return i && (this.query = t, e.each(this.datasets, n)), i
                    },
                    empty: function() {
                        function t(t) {
                            t.clear()
                        }
                        e.each(this.datasets, t), this.query = null, this.$node.addClass(this.classes.empty)
                    },
                    destroy: function() {
                        function n(t) {
                            t.destroy()
                        }
                        this.$node.off(".tt"), this.$node = t("<div>"), e.each(this.datasets, n)
                    }
                }), n
            }(),
            l = function() {
                "use strict";

                function t() {
                    u.apply(this, [].slice.call(arguments, 0))
                }
                var n = u.prototype;
                return e.mixin(t.prototype, u.prototype, {
                    open: function() {
                        return !this._allDatasetsEmpty() && this._show(), n.open.apply(this, [].slice.call(arguments, 0))
                    },
                    close: function() {
                        return this._hide(), n.close.apply(this, [].slice.call(arguments, 0))
                    },
                    _onRendered: function() {
                        return this._allDatasetsEmpty() ? this._hide() : this.isOpen() && this._show(), n._onRendered.apply(this, [].slice.call(arguments, 0))
                    },
                    _onCleared: function() {
                        return this._allDatasetsEmpty() ? this._hide() : this.isOpen() && this._show(), n._onCleared.apply(this, [].slice.call(arguments, 0))
                    },
                    setLanguageDirection: function(t) {
                        return this.$node.css("ltr" === t ? this.css.ltr : this.css.rtl), n.setLanguageDirection.apply(this, [].slice.call(arguments, 0))
                    },
                    _hide: function() {
                        this.$node.hide()
                    },
                    _show: function() {
                        this.$node.css("display", "block")
                    }
                }), t
            }(),
            c = function() {
                "use strict";

                function n(n, r) {
                    var s, a, o, u, l, c, h, d, f, m, p;
                    (n = n || {}).input || t.error("missing input"), n.menu || t.error("missing menu"), n.eventBus || t.error("missing event bus"), r.mixin(this), this.eventBus = n.eventBus, this.minLength = e.isNumber(n.minLength) ? n.minLength : 1, this.input = n.input, this.menu = n.menu, this.enabled = !0, this.active = !1, this.input.hasFocus() && this.activate(), this.dir = this.input.getLangDir(), this._hacks(), this.menu.bind().onSync("selectableClicked", this._onSelectableClicked, this).onSync("asyncRequested", this._onAsyncRequested, this).onSync("asyncCanceled", this._onAsyncCanceled, this).onSync("asyncReceived", this._onAsyncReceived, this).onSync("datasetRendered", this._onDatasetRendered, this).onSync("datasetCleared", this._onDatasetCleared, this), s = i(this, "activate", "open", "_onFocused"), a = i(this, "deactivate", "_onBlurred"), o = i(this, "isActive", "isOpen", "_onEnterKeyed"), u = i(this, "isActive", "isOpen", "_onTabKeyed"), l = i(this, "isActive", "_onEscKeyed"), c = i(this, "isActive", "open", "_onUpKeyed"), h = i(this, "isActive", "open", "_onDownKeyed"), d = i(this, "isActive", "isOpen", "_onLeftKeyed"), f = i(this, "isActive", "isOpen", "_onRightKeyed"), m = i(this, "_openIfActive", "_onQueryChanged"), p = i(this, "_openIfActive", "_onWhitespaceChanged"), this.input.bind().onSync("focused", s, this).onSync("blurred", a, this).onSync("enterKeyed", o, this).onSync("tabKeyed", u, this).onSync("escKeyed", l, this).onSync("upKeyed", c, this).onSync("downKeyed", h, this).onSync("leftKeyed", d, this).onSync("rightKeyed", f, this).onSync("queryChanged", m, this).onSync("whitespaceChanged", p, this).onSync("langDirChanged", this._onLangDirChanged, this)
                }

                function i(t) {
                    var n = [].slice.call(arguments, 1);
                    return function() {
                        var i = [].slice.call(arguments);
                        e.each(n, function(e) {
                            return t[e].apply(t, i)
                        })
                    }
                }
                return e.mixin(n.prototype, {
                    _hacks: function() {
                        var n, i;
                        n = this.input.$input || t("<div>"), i = this.menu.$node || t("<div>"), n.on("blur.tt", function(t) {
                            var r, s, a;
                            r = document.activeElement, s = i.is(r), a = i.has(r).length > 0, e.isMsie() && (s || a) && (t.preventDefault(), t.stopImmediatePropagation(), e.defer(function() {
                                n.focus()
                            }))
                        }), i.on("mousedown.tt", function(t) {
                            t.preventDefault()
                        })
                    },
                    _onSelectableClicked: function(t, e) {
                        this.select(e)
                    },
                    _onDatasetCleared: function() {
                        this._updateHint()
                    },
                    _onDatasetRendered: function(t, e, n, i) {
                        this._updateHint(), this.eventBus.trigger("render", n, i, e)
                    },
                    _onAsyncRequested: function(t, e, n) {
                        this.eventBus.trigger("asyncrequest", n, e)
                    },
                    _onAsyncCanceled: function(t, e, n) {
                        this.eventBus.trigger("asynccancel", n, e)
                    },
                    _onAsyncReceived: function(t, e, n) {
                        this.eventBus.trigger("asyncreceive", n, e)
                    },
                    _onFocused: function() {
                        this._minLengthMet() && this.menu.update(this.input.getQuery())
                    },
                    _onBlurred: function() {
                        this.input.hasQueryChangedSinceLastFocus() && this.eventBus.trigger("change", this.input.getQuery())
                    },
                    _onEnterKeyed: function(t, e) {
                        var n;
                        (n = this.menu.getActiveSelectable()) && this.select(n) && e.preventDefault()
                    },
                    _onTabKeyed: function(t, e) {
                        var n;
                        (n = this.menu.getActiveSelectable()) ? this.select(n) && e.preventDefault(): (n = this.menu.getTopSelectable()) && this.autocomplete(n) && e.preventDefault()
                    },
                    _onEscKeyed: function() {
                        this.close()
                    },
                    _onUpKeyed: function() {
                        this.moveCursor(-1)
                    },
                    _onDownKeyed: function() {
                        this.moveCursor(1)
                    },
                    _onLeftKeyed: function() {
                        "rtl" === this.dir && this.input.isCursorAtEnd() && this.autocomplete(this.menu.getTopSelectable())
                    },
                    _onRightKeyed: function() {
                        "ltr" === this.dir && this.input.isCursorAtEnd() && this.autocomplete(this.menu.getTopSelectable())
                    },
                    _onQueryChanged: function(t, e) {
                        this._minLengthMet(e) ? this.menu.update(e) : this.menu.empty()
                    },
                    _onWhitespaceChanged: function() {
                        this._updateHint()
                    },
                    _onLangDirChanged: function(t, e) {
                        this.dir !== e && (this.dir = e, this.menu.setLanguageDirection(e))
                    },
                    _openIfActive: function() {
                        this.isActive() && this.open()
                    },
                    _minLengthMet: function(t) {
                        return (t = e.isString(t) ? t : this.input.getQuery() || "").length >= this.minLength
                    },
                    _updateHint: function() {
                        var t, n, i, r, s, o;
                        t = this.menu.getTopSelectable(), n = this.menu.getSelectableData(t), i = this.input.getInputValue(), !n || e.isBlankString(i) || this.input.hasOverflow() ? this.input.clearHint() : (r = a.normalizeQuery(i), s = e.escapeRegExChars(r), (o = new RegExp("^(?:" + s + ")(.+$)", "i").exec(n.val)) && this.input.setHint(i + o[1]))
                    },
                    isEnabled: function() {
                        return this.enabled
                    },
                    enable: function() {
                        this.enabled = !0
                    },
                    disable: function() {
                        this.enabled = !1
                    },
                    isActive: function() {
                        return this.active
                    },
                    activate: function() {
                        return !!this.isActive() || !(!this.isEnabled() || this.eventBus.before("active")) && (this.active = !0, this.eventBus.trigger("active"), !0)
                    },
                    deactivate: function() {
                        return !this.isActive() || !this.eventBus.before("idle") && (this.active = !1, this.close(), this.eventBus.trigger("idle"), !0)
                    },
                    isOpen: function() {
                        return this.menu.isOpen()
                    },
                    open: function() {
                        return this.isOpen() || this.eventBus.before("open") || (this.menu.open(), this._updateHint(), this.eventBus.trigger("open")), this.isOpen()
                    },
                    close: function() {
                        return this.isOpen() && !this.eventBus.before("close") && (this.menu.close(), this.input.clearHint(), this.input.resetInputValue(), this.eventBus.trigger("close")), !this.isOpen()
                    },
                    setVal: function(t) {
                        this.input.setQuery(e.toStr(t))
                    },
                    getVal: function() {
                        return this.input.getQuery()
                    },
                    select: function(t) {
                        var e = this.menu.getSelectableData(t);
                        return !(!e || this.eventBus.before("select", e.obj)) && (this.input.setQuery(e.val, !0), this.eventBus.trigger("select", e.obj), this.close(), !0)
                    },
                    autocomplete: function(t) {
                        var e, n;
                        return e = this.input.getQuery(), !(!((n = this.menu.getSelectableData(t)) && e !== n.val) || this.eventBus.before("autocomplete", n.obj)) && (this.input.setQuery(n.val), this.eventBus.trigger("autocomplete", n.obj), !0)
                    },
                    moveCursor: function(t) {
                        var e, n, i, r;
                        return e = this.input.getQuery(), n = this.menu.selectableRelativeToCursor(t), r = (i = this.menu.getSelectableData(n)) ? i.obj : null, !(this._minLengthMet() && this.menu.update(e)) && !this.eventBus.before("cursorchange", r) && (this.menu.setCursor(n), i ? this.input.setInputValue(i.val) : (this.input.resetInputValue(), this._updateHint()), this.eventBus.trigger("cursorchange", r), !0)
                    },
                    destroy: function() {
                        this.input.destroy(), this.menu.destroy()
                    }
                }), n
            }();
        ! function() {
            "use strict";

            function r(e, n) {
                e.each(function() {
                    var e, i = t(this);
                    (e = i.data(p.typeahead)) && n(e, i)
                })
            }

            function s(t, e) {
                return t.clone().addClass(e.classes.hint).removeData().css(e.css.hint).css(h(t)).prop("readonly", !0).removeAttr("id name placeholder required").attr({
                    autocomplete: "off",
                    spellcheck: "false",
                    tabindex: -1
                })
            }

            function o(t, e) {
                t.data(p.attrs, {
                    dir: t.attr("dir"),
                    autocomplete: t.attr("autocomplete"),
                    spellcheck: t.attr("spellcheck"),
                    style: t.attr("style")
                }), t.addClass(e.classes.input).attr({
                    autocomplete: "off",
                    spellcheck: !1
                });
                try {
                    !t.attr("dir") && t.attr("dir", "auto")
                } catch (n) {}
                return t
            }

            function h(t) {
                return {
                    backgroundAttachment: t.css("background-attachment"),
                    backgroundClip: t.css("background-clip"),
                    backgroundColor: t.css("background-color"),
                    backgroundImage: t.css("background-image"),
                    backgroundOrigin: t.css("background-origin"),
                    backgroundPosition: t.css("background-position"),
                    backgroundRepeat: t.css("background-repeat"),
                    backgroundSize: t.css("background-size")
                }
            }

            function d(t) {
                var n, i;
                n = t.data(p.www), i = t.parent().filter(n.selectors.wrapper), e.each(t.data(p.attrs), function(n, i) {
                    e.isUndefined(n) ? t.removeAttr(i) : t.attr(i, n)
                }), t.removeData(p.typeahead).removeData(p.www).removeData(p.attr).removeClass(n.classes.input), i.length && (t.detach().insertAfter(i), i.remove())
            }

            function f(n) {
                var i;
                return (i = e.isJQuery(n) || e.isElement(n) ? t(n).first() : []).length ? i : null
            }
            var m, p, g;
            m = t.fn.typeahead, p = {
                www: "tt-www",
                attrs: "tt-attrs",
                typeahead: "tt-typeahead"
            }, g = {
                initialize: function(r, h) {
                    function d() {
                        var n, d, g, v, y, b, _, w, x, C, $;
                        e.each(h, function(t) {
                            t.highlight = !!r.highlight
                        }), n = t(this), d = t(m.html.wrapper), g = f(r.hint), v = f(r.menu), y = !1 !== r.hint && !g, b = !1 !== r.menu && !v, y && (g = s(n, m)), b && (v = t(m.html.menu).css(m.css.menu)), g && g.val(""), n = o(n, m), (y || b) && (d.css(m.css.wrapper), n.css(y ? m.css.input : m.css.inputWithNoHint), n.wrap(d).parent().prepend(y ? g : null).append(b ? v : null)), $ = b ? l : u, _ = new i({
                            el: n
                        }), w = new a({
                            hint: g,
                            input: n
                        }, m), x = new $({
                            node: v,
                            datasets: h
                        }, m), C = new c({
                            input: w,
                            menu: x,
                            eventBus: _,
                            minLength: r.minLength
                        }, m), n.data(p.www, m), n.data(p.typeahead, C)
                    }
                    var m;
                    return h = e.isArray(h) ? h : [].slice.call(arguments, 1), m = n((r = r || {}).classNames), this.each(d)
                },
                isEnabled: function() {
                    var t;
                    return r(this.first(), function(e) {
                        t = e.isEnabled()
                    }), t
                },
                enable: function() {
                    return r(this, function(t) {
                        t.enable()
                    }), this
                },
                disable: function() {
                    return r(this, function(t) {
                        t.disable()
                    }), this
                },
                isActive: function() {
                    var t;
                    return r(this.first(), function(e) {
                        t = e.isActive()
                    }), t
                },
                activate: function() {
                    return r(this, function(t) {
                        t.activate()
                    }), this
                },
                deactivate: function() {
                    return r(this, function(t) {
                        t.deactivate()
                    }), this
                },
                isOpen: function() {
                    var t;
                    return r(this.first(), function(e) {
                        t = e.isOpen()
                    }), t
                },
                open: function() {
                    return r(this, function(t) {
                        t.open()
                    }), this
                },
                close: function() {
                    return r(this, function(t) {
                        t.close()
                    }), this
                },
                select: function(e) {
                    var n = !1,
                        i = t(e);
                    return r(this.first(), function(t) {
                        n = t.select(i)
                    }), n
                },
                autocomplete: function(e) {
                    var n = !1,
                        i = t(e);
                    return r(this.first(), function(t) {
                        n = t.autocomplete(i)
                    }), n
                },
                moveCursor: function(t) {
                    var e = !1;
                    return r(this.first(), function(n) {
                        e = n.moveCursor(t)
                    }), e
                },
                val: function(t) {
                    var e;
                    return arguments.length ? (r(this, function(e) {
                        e.setVal(t)
                    }), this) : (r(this.first(), function(t) {
                        e = t.getVal()
                    }), e)
                },
                destroy: function() {
                    return r(this, function(t, e) {
                        d(e), t.destroy()
                    }), this
                }
            }, t.fn.typeahead = function(t) {
                return g[t] ? g[t].apply(this, [].slice.call(arguments, 1)) : g.initialize.apply(this, arguments)
            }, t.fn.typeahead.noConflict = function() {
                return t.fn.typeahead = m, this
            }
        }()
    });
var stemmer = function() {
    function t() {}

    function e() {
        console.log(Array.prototype.slice.call(arguments).join(" "))
    }
    var n = {
            ational: "ate",
            tional: "tion",
            enci: "ence",
            anci: "ance",
            izer: "ize",
            bli: "ble",
            alli: "al",
            entli: "ent",
            eli: "e",
            ousli: "ous",
            ization: "ize",
            ation: "ate",
            ator: "ate",
            alism: "al",
            iveness: "ive",
            fulness: "ful",
            ousness: "ous",
            aliti: "al",
            iviti: "ive",
            biliti: "ble",
            logi: "log"
        },
        i = {
            icate: "ic",
            ative: "",
            alize: "al",
            iciti: "ic",
            ical: "ic",
            ful: "",
            ness: ""
        };
    return function(r, s) {
        var a, o, u, l, c, h;
        return h = s ? e : t, 3 > r.length ? r : ("y" == (u = r.substr(0, 1)) && (r = u.toUpperCase() + r.substr(1)), o = /^(.+?)([^s])s$/, (l = /^(.+?)(ss|i)es$/).test(r) ? h("1a", l, r = r.replace(l, "$1$2")) : o.test(r) && h("1a", o, r = r.replace(o, "$1$2")), o = /^(.+?)(ed|ing)$/, (l = /^(.+?)eed$/).test(r) ? (o = l.exec(r), (l = /^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*/).test(o[1]) && h("1b", l = /.$/, r = r.replace(l, ""))) : o.test(r) && (a = (o = o.exec(r))[1], (o = /^([^aeiou][^aeiouy]*)?[aeiouy]/).test(a) && (h("1b", o, r = a), c = /([^aeiouylsz])\1$/, a = /^[^aeiou][^aeiouy]*[aeiouy][^aeiouwxy]$/, (o = /(at|bl|iz)$/).test(r) ? h("1b", o, r += "e") : c.test(r) ? (l = /.$/, h("1b", c, r = r.replace(l, ""))) : a.test(r) && h("1b", a, r += "e"))), (l = /^(.*[aeiouy].*)y$/).test(r) && h("1c", l, r = (a = (o = l.exec(r))[1]) + "i"), (l = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/).test(r) && (a = (o = l.exec(r))[1], o = o[2], (l = /^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*/).test(a) && h("2", l, r = a + n[o])), (l = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/).test(r) && (a = (o = l.exec(r))[1], o = o[2], (l = /^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*/).test(a) && h("3", l, r = a + i[o])), o = /^(.+?)(s|t)(ion)$/, (l = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/).test(r) ? (a = (o = l.exec(r))[1], (l = /^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*/).test(a) && h("4", l, r = a)) : o.test(r) && (a = (o = o.exec(r))[1] + o[2], (o = /^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*/).test(a) && h("4", o, r = a)), (l = /^(.+?)e$/).test(r) && (a = (o = l.exec(r))[1], o = /^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$/, c = /^[^aeiou][^aeiouy]*[aeiouy][^aeiouwxy]$/, (l = /^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*/).test(a) || o.test(a) && !c.test(a)) && h("5", l, o, c, r = a), o = /^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*/, (l = /ll$/).test(r) && o.test(r) && h("5", l = /.$/, o, r = r.replace(l, "")), "y" == u && (r = u.toLowerCase() + r.substr(1)), r)
    }
}();
(function() {
    $(window).load(function() {
        var t, e, n, i, r;
        if (window.search_categories) return e = {
                "t shirt": /(\btee\b|\btees\b|\btshirt|\bteeshirt\b|\btee shirt\b)/g,
                clothing: /(clothes|\bcloth\b|clothe)/g,
                gothic: /(\bgoth[ic]*\b)/g,
                mens: /(men s\b|man s\b|\bman\b|\bmans\b)/g,
                womens: /(women s\b|\bwoman\b|\bwomans\b|\bgal\b)/g,
                handbag: /\bhand bag\b/g,
                hoodie: /\bhoodi\b/g,
                jewelry: /(jewellery)/,
                sweater: /(cardigans?|pullover|jumper)/,
                underwear: /(\bunder wear\b|\bboxer shorts\b|\bboxers\b|\bpanties\b)/g,
                pants: /(slacks|trousers)/
            }, r = function() {
                return window.search_categories.replace(/%5/g, "men").replace(/%4/g, "women").replace(/%3/g, '"},{').replace(/%2/g, '","slug":"').replace(/%1/g, '"name":"')
            }, i = function(t) {
                return t.slug ? "<div>" + window.user_query + " in <b>" + t.name + "</b></div>" : "<div><u>" + window.user_query + "</u></div>"
            }, n = function(t) {
                window.sync_results = t
            }, (t = $("#search.typeahead")).on("click", function() {
                return t.typeahead("close").typeahead("val", ""), !1
            }),
            function(r) {
                var s, a;
                return a = function(t, i, r) {
                    var a, o, u, l, c;
                    for (c in window.user_query = t, e) a = e[c], t = t.replace(a, c);
                    for (u = Bloodhound.tokenizers.whitespace(t), o = 0; o < u.length;) u[o].endsWith("y") || (u[o] = stemmer(u[o])), o++;
                    for (; u.length > 0;) {
                        if (s.search(u, n, r), 0 !== window.sync_results.length) return (l = window.sync_results.slice(0, 10)).push({
                            name: window.user_query
                        }), i(l), void(window.sync_results = null);
                        u.shift()
                    }
                    i([])
                }, (s = new Bloodhound({
                    datumTokenizer: Bloodhound.tokenizers.obj.whitespace("name"),
                    queryTokenizer: function(t) {
                        return t
                    },
                    local: r
                })).initialize(), t.typeahead({
                    hint: !1,
                    highlight: !1,
                    minLength: 1
                }, {
                    name: "bloodhound",
                    displayKey: "name",
                    source: a,
                    limit: Infinity,
                    templates: {
                        suggestion: i
                    }
                }).on("typeahead:selected", function(e, n) {
                    var i, r;
                    return i = $("#category_id"), n.slug ? (i = $("#category_id")).length > 0 ? i.val(n.slug) : ((r = document.createElement("input")).id = "category_id", r.type = "hidden", r.name = "category", r.value = n.slug, e.target.form.appendChild(r)) : i.length > 0 && i.remove(), t.blur(), t.typeahead("val", ""), t.val(window.user_query), e.target.form.submit()
                }), t.closest("form").on("submit", function() {
                    return t.val($.trim(t.val()).replace(/[+ ]+/g, "-")), !0
                })
            }(JSON.parse(r()))
    })
}).call(this), $(document).ready(function() {
        $(".listing-card, .product-actions, .__share-parent-icon, .product_details-cart, .rm-product-buttons").on("click", ".fa-heart, .favorite, .__favorites, .fa-heart-o, .icon-heart_empty, .icon-heart", function(t) {
            t.preventDefault(), $(this).attr("data-id") && $.ajax({
                type: "POST",
                url: "/likes",
                data: {
                    product_id: $(this).attr("data-id")
                },
                dataType: "script"
            })
        })
    }), $(document).ready(function() {
        $("#select_sort_by,#select_ships_to,#select_seller_location, #select_ships_from").on("change", function() {
            $(this).data("link") ? window.location.href = window.location.pathname.split("/page")[0] + "?" + $(this).data("link") + "&" + $(this).attr("id").split("select_")[1] + "=" + $(this).val() : window.location.href = window.location.pathname.split("/page")[0] + "?" + $(this).attr("id").split("select_")[1] + "=" + $(this).val()
        }), $("#select_category_filter").on("change", function() {
            window.location.href = $(this).val()
        }), $("#select_currency_code").on("change", function() {
            var t = $("#select_currency_code option:selected");
            $.ajax({
                url: "/locale/set_currency",
                type: "GET",
                data: {
                    currency_code: t.attr("currency_code"),
                    country: t.attr("country")
                },
                success: function() {
                    window.location.reload()
                }
            })
        }), $(".expand-me").on("click", function(t) {
            t.preventDefault(), $(this).closest(".minimized-div").addClass("hide"), $(this).closest(".minimized-div").next(".maximized-div").removeClass("hide")
        }), $(".open_category").on("click", function(t) {
            t.preventDefault(), $(this).parent().next(".nested_categories").removeClass("hide").children().removeClass("txt_bold"), $(this).parent().prev(".category_link").removeClass("hide"), $(this).parent().addClass("hide")
        }), $(".like, .heart").on("click", function(t) {
            t.preventDefault();
            var e = $(this).attr("id").replace("like-", "");
            $.ajax({
                type: "GET",
                url: "/like/" + e + ".js",
                dataType: "script"
            })
        })
    }),
    function() {
        $(function() {
            var t;
            if ((t = $("meta[name=track_uid]").attr("content")) && t.length > 0) return $.each($('a[data-trackpathlink="search"]'), function(e, n) {
                var i;
                (i = $(n).prop("href")).indexOf("?") > -1 ? i += "&" : i += "?", $(n).prop("href", i + "tuid=" + t)
            })
        })
    }.call(this), $(document).ready(function() {
        $(".top_footer #new_customer_lead, .main-width5 #new_customer_lead, .blog_customer_lead, .subscription_pod, .newsletter-block #new_customer_lead, #invite-modal #new_customer_lead").bind("ajax:complete", function(t, e) {
            result = $.parseJSON(e.responseText), result.success ? ("footer_subscription" == result.source ? message = "<p>We\u2019ve sent you an email to confirm your subscription.</p>" : result.phone_lead ? message = "<p>Check your texts</p><p>Reply Y to confirm your subscription and receive your coupon code.</p>" : message = "<p>We have emailed you a coupon code. Please check your inbox to confirm.</p>", $(".top_footer .container, .blog_customer_lead, .flash_notice_div, .subscription_pod, .newsletter-block, .email-signup, .main-width5 #new_customer_lead").html('<div class="alert alert-success">' + message + "</div>"), $("#invite-modal").length && ($("#invite-modal .modal_content").html('<div class="text-modal"><h3>Thank you for signing up!</h3></div><p>' + message + "</p>"), $(".email-signup").removeClass("banner"))) : $(".top_footer .container, .blog_customer_lead, .subscription_pod, .newsletter-block, .form-invite-wrap, .main-width5  #new_customer_lead").prepend('<div class="alert alert-danger">' + result.error + "</div>")
        }), $(".top_footer #new_customer_lead, .subscription_pod #new_customer_lead, .blog_customer_lead #new_customer_lead, #invite-modal #new_customer_lead").validate({
            ignore: [],
            debug: !0,
            rules: {
                "customer_lead[email]": {
                    required: !0,
                    email: !0
                }
            },
            messages: {
                "customer_lead[email]": {
                    required: "Please enter email",
                    email: "Please enter a valid email"
                }
            },
            errorPlacement: function(t, e) {
                t.insertBefore(e)
            }
        })
    }), $(document).ready(function() {
        $(".overlayWrap").on("click", ".closeBtn, .closeLink", function() {
            hideModal()
        }), $(".email-signup").on("click", "a", function(t) {
            t.preventDefault(), $(".overlay").removeClass("hide").fadeIn(200), $("#invite-modal").fadeIn(800)
        })
    }), window.hideModal = function() {
        $(".overlayWrap").fadeOut(800, function() {
            $(".overlay").fadeOut(800, function() {
                $("#randomModal .popWrap").removeClass($("#randomModal .popWrap").attr("class")).addClass("popWrap clearfix")
            }).addClass("hide")
        }).addClass("hide"), $("#modal-holder").hide()
    }, window.onload = function() {
        if ($("#select_preferred_domain").length) {
            setTimeout(function() {
                $.cookie("_rm_preferred_domain") === undefined && showModalDialog() && $("#select_preferred_domain").show()
            }, 2e4), $("#select_preferred_domain").on("click", ".close-modal-rm", function() {
                $.ajax({
                    type: "POST",
                    url: "/locale/domain_preference.js"
                })
            })
        }
        let t = $(".lightbox_content, #invite-modal");
        if (t.length) {
            t.on("click", ".close-modal", function() {
                $(".overlay").fadeOut(400), $.ajax({
                    type: "GET",
                    url: "/customer_leads/hide.js",
                    dataType: "script"
                })
            }), $(".overlay").on("click", function(t) {
                ($(t.target).hasClass("overlay") || $(t.target).hasClass("overlayWrap")) && ($(".overlay").fadeOut(400), $.ajax({
                    type: "GET",
                    url: " /customer_leads/hide.js",
                    dataType: "script"
                }))
            });
            let e = function() {
                $.cookie("hasEmailSubscription") === undefined && showModalDialog() && ($(".overlay").addClass("signUpOverlay").removeClass("hide").fadeIn(800), t.removeClass("hide").fadeIn(800))
            };
            $.cookie("hasEmailSubscription") !== undefined || $(".wrap-modal-window").is(":visible") || setTimeout(e, 8e3)
        }
    },
    function() {
        var t;
        lazySizes.init(), t = function() {
            var t;
            $(".shipprice, .formatprice")[0] && null != (t = $.cookie("_rebelsmarket_currency")) && ($.currency.configure({
                rates: JSON.parse($.cookie("_currency_exchange_rates")),
                symbols: JSON.parse($.cookie("_currency_symbols"))
            }), $(".shipprice, .formatprice").currency(t))
        }, window.attachEvent ? window.attachEvent("onload", t) : window.addEventListener("load", t, !1)
    }.call(this);