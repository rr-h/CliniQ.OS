(() => {
    'use strict';

    const modules = {};
    const cache = {};

    function require(moduleId) {
        if (cache[moduleId]) {
            return cache[moduleId].exports;
        }

        const module = (cache[moduleId] = {
            id: moduleId,
            loaded: false,
            exports: {}
        });

        modules[moduleId].call(module.exports, module, module.exports, require);
        module.loaded = true;
        return module.exports;
    }

    // Insert the stylesheet dynamically
    const linkTag = document.createElement('link');
    linkTag.rel = 'stylesheet';
    linkTag.href = './chunk-common.159427c0.js';
    linkTag.onerror = () => {
        console.error('Loading CSS chunk failed.');
    };
    document.head.appendChild(linkTag);

    require.m = modules;

    // Mocking AMD Object
    require.amdO = {};

    // Handling the queue
    const queue = [];
    require.O = (result, chunkIds, fn, priority) => {
        if (!chunkIds) {
            let notFulfilled = Infinity;
            for (let i = 0; i < queue.length; i++) {
                const [chunkIds, fn, priority] = queue[i];
                let fulfilled = true;
                for (let j = 0; j < chunkIds.length; j++) {
                    if (priority & 1 || notFulfilled >= priority) {
                        chunkIds.splice(j--, 1);
                    } else {
                        fulfilled = false;
                        if (priority < notFulfilled) notFulfilled = priority;
                    }
                }
                if (fulfilled) {
                    queue.splice(i--, 1);
                    const res = fn();
                    if (res !== undefined) result = res;
                }
            }
            return result;
        }
        priority = priority || 0;
        for (let i = queue.length; i > 0 && queue[i - 1][2] > priority; i--) {
            queue[i] = queue[i - 1];
        }
        queue[i] = [chunkIds, fn, priority];
    };

    require.n = module => {
        const getter = module && module.__esModule ? () => module['default'] : () => module;
        require.d(getter, { a: getter });
        return getter;
    };

    require.t = (value, mode) => {
        if (mode & 1) value = require(value);
        if (mode & 8) return value;
        if (typeof value === 'object' && value) {
            if (mode & 4 && value.__esModule) return value;
            if (mode & 16 && typeof value.then === 'function') return value;
        }
        const ns = Object.create(null);
        require.r(ns);
        const def = {};
        const proto = Object.getPrototypeOf ? Object.getPrototypeOf : obj => obj.__proto__;
        for (let current = value; typeof current === 'object' && !~proto.indexOf(current); current = proto(current)) {
            Object.getOwnPropertyNames(current).forEach(key => {
                def[key] = () => value[key];
            });
        }
        def['default'] = () => value;
        require.d(ns, def);
        return ns;
    };

    require.d = (exports, definition) => {
        for (const key in definition) {
            if (require.o(definition, key) && !require.o(exports, key)) {
                Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
            }
        }
    };

    require.f = {};
    require.e = chunkId =>
        Promise.all(
            Object.keys(require.f).reduce((promises, key) => {
                require.f[key](chunkId, promises);
                return promises;
            }, [])
        );

    require.u = chunkId =>
        'js/' +
        ({
            18: 'view-Offline-vue',
            51: 'view-Cookies-vue',
            126: 'view-App-vue',
            185: 'view-Terms-vue',
            269: 'view-Lounge-vue',
            444: 'view-iOS-vue',
            496: 'view-Mac-vue',
            511: 'view-Recess-vue',
            517: 'view-Privacy-vue'
        }[chunkId] || chunkId) +
        '.' + {
            18: 'a616c724',
            51: '6d76aaac',
            126: '914c41f4',
            185: '59f81ce4',
            224: '699d5e50',
            269: '2e7bfc45',
            289: '4809541f',
            343: '55b0783c',
            391: '63b14af5',
            444: 'd93767a8',
            455: '5ec202ca',
            496: '7c73a870',
            511: 'e967f180',
            517: '2ea2bb24'
        }[chunkId] +
        '.js';

    require.miniCssF = chunkId =>
        'css/' +
        ({
            18: 'view-Offline-vue',
            51: 'view-Cookies-vue',
            126: 'view-App-vue',
            185: 'view-Terms-vue',
            269: 'view-Lounge-vue',
            444: 'view-iOS-vue',
            496: 'view-Mac-vue',
            511: 'view-Recess-vue',
            517: 'view-Privacy-vue'
        }[chunkId] || chunkId) +
        '.' + {
            18: 'e88c6ccf',
            51: 'e6b69d17',
            126: '5d6abf4a',
            185: '8db9af1a',
            269: '9b402107',
            444: '00ab0552',
            496: 'cc16e1c0',
            511: '51f07e54',
            517: 'b6c1fca2'
        }[chunkId] +
        '.css';

    require.g = (() => {
        if (typeof globalThis === 'object') return globalThis;
        try {
            return this || new Function('return this')();
        } catch (e) {
            if (typeof window === 'object') return window;
        }
    })();

    require.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);

    require.l = (url, done, key, chunkId) => {
        if (cache[url]) {
            cache[url].push(done);
        } else {
            let script;
            let needAttach;

            if (key !== undefined) {
                for (let i = document.getElementsByTagName('script'), iLen = i.length; iLen--;) {
                    const s = i[iLen];
                    if (s.getAttribute('src') == url || s.getAttribute('data-webpack') == 'poolsuite:' + key) {
                        script = s;
                        break;
                    }
                }
            }

            if (!script) {
                needAttach = true;
                script = document.createElement('script');
                script.charset = 'utf-8';
                script.timeout = 120;
                if (require.nc) script.setAttribute('nonce', require.nc);
                script.setAttribute('data-webpack', 'poolsuite:' + key);
                script.src = url;
            }

            cache[url] = [done];

            const onScriptComplete = (prev, event) => {
                script.onerror = script.onload = null;
                clearTimeout(timeout);
                const doneFns = cache[url];
                delete cache[url];
                script.parentNode && script.parentNode.removeChild(script);
                doneFns && doneFns.forEach(fn => fn(event));
                if (prev) return prev(event);
            };

            const timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
            script.onerror = onScriptComplete.bind(null, script.onerror);
            script.onload = onScriptComplete.bind(null, script.onload);
            needAttach && document.head.appendChild(script);
        }
    };

    require.r = exports => {
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        }
        Object.defineProperty(exports, '__esModule', { value: true });
    };

    require.nmd = module => {
        module.paths = [];
        if (!module.children) module.children = [];
        return module;
    };

    require.p = '/';

    if (typeof document !== 'undefined') {
        const createStylesheetLink = (chunkId, fullhref, chunkFileName, resolve, reject) => {
            const linkTag = document.createElement('link');
            linkTag.rel = 'stylesheet';
            linkTag.type = 'text/css';
            linkTag.onerror = linkTag.onload = event => {
                if (event.type === 'load') {
                    resolve();
                } else {
                    const errorType = event.type === 'load' ? 'missing' : event.type;
                    const realHref = (event && event.target && event.target.href) || fullhref;
                    const err = new Error(`Loading CSS chunk ${chunkId} failed.\n(${realHref})`);
                    err.code = 'CSS_CHUNK_LOAD_FAILED';
                    err.type = errorType;
                    err.request = realHref;
                    linkTag.parentNode && linkTag.parentNode.removeChild(linkTag);
                    reject(err);
                }
            };
            linkTag.href = fullhref;
            const target = chunkFileName ? chunkFileName.nextSibling : document.head;
            document.head.insertBefore(linkTag, target);
            return linkTag;
        };

        const getStylesheet = (chunkId, fullhref) => {
            for (let i = document.getElementsByTagName('link'), iLen = i.length; iLen--;) {
                const link = i[iLen];
                const dataHref = link.getAttribute('data-href') || link.getAttribute('href');
                if (link.rel === 'stylesheet' && (dataHref === chunkId || dataHref === fullhref)) return link;
            }
            for (let i = document.getElementsByTagName('style'), iLen = i.length; iLen--;) {
                const style = i[iLen];
                const dataHref = style.getAttribute('data-href');
                if (dataHref === chunkId || dataHref === fullhref) return style;
            }
        };

        const loadStylesheet = chunkId =>
            new Promise((resolve, reject) => {
                const chunk = require.miniCssF(chunkId);
                const fullhref = require.p + chunk;
                if (getStylesheet(chunk, fullhref)) return resolve();
                createStylesheetLink(chunkId, fullhref, null, resolve, reject);
            });

        const installedCssChunks = { 826: 0 };

        require.f.miniCss = (chunkId, promises) => {
            const installCssChunks = { 18: 1, 51: 1, 126: 1, 185: 1, 269: 1, 444: 1, 496: 1, 511: 1, 517: 1 };
            const chunk = installedCssChunks[chunkId];
            if (chunk) promises.push(chunk);
            else if (chunk !== 0 && installCssChunks[chunkId]) {
                promises.push(
                    (installedCssChunks[chunkId] = loadStylesheet(chunkId).then(
                        () => {
                            installedCssChunks[chunkId] = 0;
                        },
                        e => {
                            delete installedCssChunks[chunkId];
                            throw e;
                        }
                    ))
                );
            }
        };
    }

    const installedChunks = { 826: 0 };

    require.f.j = (chunkId, promises) => {
        let chunk = installedChunks[chunkId];
        if (chunk !== 0) {
            if (chunk) promises.push(chunk[2]);
            else {
                const promise = new Promise((resolve, reject) => {
                    chunk = installedChunks[chunkId] = [resolve, reject];
                });
                promises.push((chunk[2] = promise));
                const url = require.p + require.u(chunkId);
                const error = new Error();
                const loadingEnded = event => {
                    if (require.o(installedChunks, chunkId)) {
                        chunk = installedChunks[chunkId];
                        if (chunk !== 0) installedChunks[chunkId] = undefined;
                        if (chunk) {
                            const errorType = event && (event.type === 'load' ? 'missing' : event.type);
                            const realSrc = event && event.target && event.target.src;
                            error.message = `Loading chunk ${chunkId} failed.\n(${errorType}: ${realSrc})`;
                            error.name = 'ChunkLoadError';
                            error.type = errorType;
                            error.request = realSrc;
                            chunk[1](error);
                        }
                    }
                };
                require.l(url, loadingEnded, 'chunk-' + chunkId, chunkId);
            }
        }
    };

    require.O.j = chunkId => installedChunks[chunkId] === 0;

    const webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
        const [chunkIds, moreModules, runtime] = data;
        let moduleId;
        let chunkId;
        let i = 0;
        for (moduleId in moreModules) {
            if (require.o(moreModules, moduleId)) {
                require.m[moduleId] = moreModules[moduleId];
            }
        }
        if (runtime) var result = runtime(require);
        if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
        for (; i < chunkIds.length; i++) {
            chunkId = chunkIds[i];
            if (require.o(installedChunks, chunkId) && installedChunks[chunkId]) {
                installedChunks[chunkId][0]();
            }
            installedChunks[chunkId] = 0;
        }
        return require.O(result);
    };

    const chunkLoadingGlobal = (self['webpackChunkpoolsuite'] = self['webpackChunkpoolsuite'] || []);
    chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
    chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));

    let startup = require.O(undefined, [998, 64], () => require(37495));
    startup = require.O(startup);
})();