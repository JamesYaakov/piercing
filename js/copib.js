var trackEvents = function () {

    fbq('track', 'PageView');

    pintrk('track', 'pagevisit');

};

setTimeout(trackEvents, 30000);

(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
        m = s.getElementsByTagName(o)[0]; a.async = true; a.src = g; m.parentNode.insertBefore(a, m)
    })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

    ga('create', 'UA-30560268-1', 'rebelsmarket.com');

    // to enable display advertise feature
    ga('require', 'displayfeatures');


    ga('send', 'pageview');

    ga('require', 'ecommerce');
