(function() {
    'use strict';

    var location = window.location,
        document = window.document,
        currentScript = document.currentScript,
        apiEndpoint = currentScript.getAttribute('data-api') || new URL(currentScript.src).origin + '/api/event';

    function logWarning(event, callbackObject) {
        if (event) {
            console.warn('Ignoring Event: ' + event);
        }
        if (callbackObject && callbackObject.callback) {
            callbackObject.callback();
        }
    }

    function sendEvent(eventName, options) {
        if (/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(location.hostname) || location.protocol === 'file:') {
            return logWarning('localhost', options);
        }
        if ((window._phantom || window.__nightmare || window.navigator.webdriver || window.Cypress) && !window.__plausible) {
            return logWarning(null, options);
        }
        try {
            if (window.localStorage.plausible_ignore === 'true') {
                return logWarning('localStorage flag', options);
            }
        } catch (err) {}

        var payload = {
            n: eventName,
            u: location.href,
            d: currentScript.getAttribute('data-domain'),
            r: document.referrer || null,
            m: options && options.meta ? JSON.stringify(options.meta) : undefined,
            p: options && options.props ? options.props : undefined
        };

        var xhr = new XMLHttpRequest();
        xhr.open('POST', apiEndpoint, true);
        xhr.setRequestHeader('Content-Type', 'text/plain');
        xhr.send(JSON.stringify(payload));
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && options && options.callback) {
                options.callback({ status: xhr.status });
            }
        };
    }

    var initialQueue = (window.plausible && window.plausible.q) || [];
    window.plausible = sendEvent;

    for (var i = 0; i < initialQueue.length; i++) {
        sendEvent.apply(this, initialQueue[i]);
    }

    var currentPathname;

    function trackPageview() {
        if (currentPathname !== location.pathname) {
            currentPathname = location.pathname;
            sendEvent('pageview');
        }
    }

    var history = window.history;
    if (history.pushState) {
        var originalPushState = history.pushState;
        history.pushState = function() {
            originalPushState.apply(this, arguments);
            trackPageview();
        };
        window.addEventListener('popstate', trackPageview);
    }

    if (document.visibilityState === 'prerender') {
        document.addEventListener('visibilitychange', function() {
            if (!currentPathname && document.visibilityState === 'visible') {
                trackPageview();
            }
        });
    } else {
        trackPageview();
    }
})();