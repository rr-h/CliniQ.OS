(self['webpackChunkpoolsuite'] = self['webpackChunkpoolsuite'] || []).push([ [998], { 29293: function(e, t, n) {
                29293: function(e, t, n) {
                    var r;
                    (function(i, o) {
                        'use strict';
                        var s = '0.7.33',
                            a = '',
                            u = '?',
                            c = 'function',
                            l = 'undefined',
                            h = 'object',
                            f = 'string',
                            d = 'major',
                            p = 'model',
                            g = 'name',
                            m = 'type',
                            v = 'vendor',
                            y = 'version',
                            w = 'architecture',
                            b = 'console',
                            _ = 'mobile',
                            I = 'tablet',
                            E = 'smarttv',
                            S = 'wearable',
                            T = 'embedded',
                            A = 350,
                            x = 'Amazon',
                            C = 'Apple',
                            k = 'ASUS',
                            O = 'BlackBerry',
                            N = 'Browser',
                            R = 'Chrome',
                            P = 'Edge',
                            D = 'Firefox',
                            L = 'Google',
                            j = 'Huawei',
                            M = 'LG',
                            F = 'Microsoft',
                            U = 'Motorola',
                            V = 'Opera',
                            B = 'Samsung',
                            $ = 'Sharp',
                            q = 'Sony',
                            z = 'Xiaomi',
                            G = 'Zebra',
                            W = 'Facebook',
                            H = function(e, t) {
                                var n = {};
                                for (var r in e) t[r] && t[r].length % 2 === 0 ? (n[r] = t[r].concat(e[r])) : (n[r] = e[r]);
                                return n;
                            },
                            K = function(e) {
                                for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n];
                                return t;
                            },
                            Q = function(e, t) {
                                return typeof e === f && -1 !== Y(t).indexOf(Y(e));
                            },
                            Y = function(e) {
                                return e.toLowerCase();
                            },
                            X = function(e) {
                                return typeof e === f ? e.replace(/[^\d\.]/g, a).split('.')[0] : o;
                            },
                            J = function(e, t) {
                                if (typeof e === f) return (e = e.replace(/^\s\s*/, a)), typeof t === l ? e : e.substring(0, A);
                            },
                            Z = function(e, t) {
                                var n,
                                    r,
                                    i,
                                    s,
                                    a,
                                    u,
                                    l = 0;
                                while (l < t.length && !a) {
                                    var f = t[l],
                                        d = t[l + 1];
                                    n = r = 0;
                                    while (n < f.length && !a)
                                        if (((a = f[n++].exec(e)), a))
                                            for (i = 0; i < d.length; i++)
                                                (u = a[++r]),
                                                (s = d[i]),
                                                typeof s === h && s.length > 0 ?
                                                2 === s.length ?
                                                typeof s[1] == c ?
                                                (this[s[0]] = s[1].call(this, u)) :
                                                (this[s[0]] = s[1]) :
                                                3 === s.length ?
                                                typeof s[1] !== c || (s[1].exec && s[1].test) ?
                                                (this[s[0]] = u ? u.replace(s[1], s[2]) : o) :
                                                (this[s[0]] = u ? s[1].call(this, u, s[2]) : o) :
                                                4 === s.length && (this[s[0]] = u ? s[3].call(this, u.replace(s[1], s[2])) : o) :
                                                (this[s] = u || o);
                                    l += 2;
                                }
                            },
                            ee = function(e, t) {
                                for (var n in t)
                                    if (typeof t[n] === h && t[n].length > 0) {
                                        for (var r = 0; r < t[n].length; r++)
                                            if (Q(t[n][r], e)) return n === u ? o : n;
                                    } else if (Q(t[n], e)) return n === u ? o : n;
                                return e;
                            },
                            te = { '1.0': '/8', 1.2: '/1', 1.3: '/3', '2.0': '/412', '2.0.2': '/416', '2.0.3': '/417', '2.0.4': '/419', '?': '/' },
                            ne = {
                                ME: '4.90',
                                'NT 3.11': 'NT3.51',
                                'NT 4.0': 'NT4.0',
                                2e3: 'NT 5.0',
                                XP: ['NT 5.1', 'NT 5.2'],
                                Vista: 'NT 6.0',
                                7: 'NT 6.1',
                                8: 'NT 6.2',
                                8.1: 'NT 6.3',
                                10: ['NT 6.4', 'NT 10.0'],
                                RT: 'ARM'
                            },
                            re = {
                                browser: [
                                    [/\b(?:crmo|crios)\/([\w\.]+)/i],
                                    [y, [g, 'Chrome']],
                                    [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                                    [y, [g, 'Edge']],
                                    [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                                    [g, y],
                                    [/opios[\/ ]+([\w\.]+)/i],
                                    [y, [g, V + ' Mini']],
                                    [/\bopr\/([\w\.]+)/i],
                                    [y, [g, V]],
                                    [
                                        /(kindle)\/([\w\.]+)/i,
                                        /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                                        /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
                                        /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
                                        /(?:ms|\()(ie) ([\w\.]+)/i,
                                        /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
                                        /(weibo)__([\d\.]+)/i
                                    ],
                                    [g, y],
                                    [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                                    [y, [g, 'UC' + N]],
                                    [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i],
                                    [y, [g, 'WeChat(Win) Desktop']],
                                    [/micromessenger\/([\w\.]+)/i],
                                    [y, [g, 'WeChat']],
                                    [/konqueror\/([\w\.]+)/i],
                                    [y, [g, 'Konqueror']],
                                    [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                                    [y, [g, 'IE']],
                                    [/yabrowser\/([\w\.]+)/i],
                                    [y, [g, 'Yandex']],
                                    [/(avast|avg)\/([\w\.]+)/i],
                                    [
                                        [g, /(.+)/, '$1 Secure ' + N], y
                                    ],
                                    [/\bfocus\/([\w\.]+)/i],
                                    [y, [g, D + ' Focus']],
                                    [/\bopt\/([\w\.]+)/i],
                                    [y, [g, V + ' Touch']],
                                    [/coc_coc\w+\/([\w\.]+)/i],
                                    [y, [g, 'Coc Coc']],
                                    [/dolfin\/([\w\.]+)/i],
                                    [y, [g, 'Dolphin']],
                                    [/coast\/([\w\.]+)/i],
                                    [y, [g, V + ' Coast']],
                                    [/miuibrowser\/([\w\.]+)/i],
                                    [y, [g, 'MIUI ' + N]],
                                    [/fxios\/([-\w\.]+)/i],
                                    [y, [g, D]],
                                    [/\bqihu|(qi?ho?o?|360)browser/i],
                                    [
                                        [g, '360 ' + N]
                                    ],
                                    [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
                                    [
                                        [g, /(.+)/, '$1 ' + N], y
                                    ],
                                    [/(comodo_dragon)\/([\w\.]+)/i],
                                    [
                                        [g, /_/g, ' '], y
                                    ],
                                    [
                                        /(electron)\/([\w\.]+) safari/i,
                                        /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                                        /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i
                                    ],
                                    [g, y],
                                    [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i],
                                    [g],
                                    [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                                    [
                                        [g, W], y
                                    ],
                                    [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i],
                                    [g, y],
                                    [/\bgsa\/([\w\.]+) .*safari\//i],
                                    [y, [g, 'GSA']],
                                    [/headlesschrome(?:\/([\w\.]+)| )/i],
                                    [y, [g, R + ' Headless']],
                                    [/ wv\).+(chrome)\/([\w\.]+)/i],
                                    [
                                        [g, R + ' WebView'], y
                                    ],
                                    [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                                    [y, [g, 'Android ' + N]],
                                    [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                                    [g, y],
                                    [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                                    [y, [g, 'Mobile Safari']],
                                    [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                                    [y, g],
                                    [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                                    [g, [y, ee, te]],
                                    [/(webkit|khtml)\/([\w\.]+)/i],
                                    [g, y],
                                    [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                                    [
                                        [g, 'Netscape'], y
                                    ],
                                    [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                                    [y, [g, D + ' Reality']],
                                    [
                                        /ekiohf.+(flow)\/([\w\.]+)/i,
                                        /(swiftfox)/i,
                                        /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                                        /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                                        /(firefox)\/([\w\.]+)/i,
                                        /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                                        /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                                        /(links) \(([\w\.]+)/i
                                    ],
                                    [g, y],
                                    [/(cobalt)\/([\w\.]+)/i],
                                    [g, [y, /master.|lts./, '']]
                                ],
                                cpu: [
                                    [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                                    [
                                        [w, 'amd64']
                                    ],
                                    [/(ia32(?=;))/i],
                                    [
                                        [w, Y]
                                    ],
                                    [/((?:i[346]|x)86)[;\)]/i],
                                    [
                                        [w, 'ia32']
                                    ],
                                    [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                                    [
                                        [w, 'arm64']
                                    ],
                                    [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                                    [
                                        [w, 'armhf']
                                    ],
                                    [/windows (ce|mobile); ppc;/i],
                                    [
                                        [w, 'arm']
                                    ],
                                    [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                                    [
                                        [w, /ower/, a, Y]
                                    ],
                                    [/(sun4\w)[;\)]/i],
                                    [
                                        [w, 'sparc']
                                    ],
                                    [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                                    [
                                        [w, Y]
                                    ]
                                ],
                                device: [
                                    [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                                    [p, [v, B],
                                        [m, I]
                                    ],
                                    [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                                    [p, [v, B],
                                        [m, _]
                                    ],
                                    [/((ipod|iphone)\d+,\d+)/i],
                                    [p, [v, C],
                                        [m, _]
                                    ],
                                    [/(ipad\d+,\d+)/i],
                                    [p, [v, C],
                                        [m, I]
                                    ],
                                    [/\((ip(?:hone|od)[\w ]*);/i],
                                    [p, [v, C],
                                        [m, _]
                                    ],
                                    [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                                    [p, [v, C],
                                        [m, I]
                                    ],
                                    [/(macintosh);/i],
                                    [p, [v, C]],
                                    [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                                    [p, [v, j],
                                        [m, I]
                                    ],
                                    [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                                    [p, [v, j],
                                        [m, _]
                                    ],
                                    [
                                        /\b(poco[\w ]+)(?: bui|\))/i,
                                        /\b; (\w+) build\/hm\1/i,
                                        /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                                        /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                                        /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i
                                    ],
                                    [
                                        [p, /_/g, ' '],
                                        [v, z],
                                        [m, _]
                                    ],
                                    [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                                    [
                                        [p, /_/g, ' '],
                                        [v, z],
                                        [m, I]
                                    ],
                                    [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                                    [p, [v, 'OPPO'],
                                        [m, _]
                                    ],
                                    [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                                    [p, [v, 'Vivo'],
                                        [m, _]
                                    ],
                                    [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                                    [p, [v, 'Realme'],
                                        [m, _]
                                    ],
                                    [
                                        /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                                        /\bmot(?:orola)?[- ](\w*)/i,
                                        /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
                                    ],
                                    [p, [v, U],
                                        [m, _]
                                    ],
                                    [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                                    [p, [v, U],
                                        [m, I]
                                    ],
                                    [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                                    [p, [v, M],
                                        [m, I]
                                    ],
                                    [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                                    [p, [v, M],
                                        [m, _]
                                    ],
                                    [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                                    [p, [v, 'Lenovo'],
                                        [m, I]
                                    ],
                                    [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                                    [
                                        [p, /_/g, ' '],
                                        [v, 'Nokia'],
                                        [m, _]
                                    ],
                                    [/(pixel c)\b/i],
                                    [p, [v, L],
                                        [m, I]
                                    ],
                                    [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                                    [p, [v, L],
                                        [m, _]
                                    ],
                                    [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                                    [p, [v, q],
                                        [m, _]
                                    ],
                                    [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                                    [
                                        [p, 'Xperia Tablet'],
                                        [v, q],
                                        [m, I]
                                    ],
                                    [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                                    [p, [v, 'OnePlus'],
                                        [m, _]
                                    ],
                                    [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                                    [p, [v, x],
                                        [m, I]
                                    ],
                                    [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                                    [
                                        [p, /(.+)/g, 'Fire Phone $1'],
                                        [v, x],
                                        [m, _]
                                    ],
                                    [/(playbook);[-\w\),; ]+(rim)/i],
                                    [p, v, [m, I]],
                                    [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                                    [p, [v, O],
                                        [m, _]
                                    ],
                                    [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                                    [p, [v, k],
                                        [m, I]
                                    ],
                                    [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                                    [p, [v, k],
                                        [m, _]
                                    ],
                                    [/(nexus 9)/i],
                                    [p, [v, 'HTC'],
                                        [m, I]
                                    ],
                                    [
                                        /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                                        /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                                        /(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i
                                    ],
                                    [v, [p, /_/g, ' '],
                                        [m, _]
                                    ],
                                    [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                                    [p, [v, 'Acer'],
                                        [m, I]
                                    ],
                                    [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                                    [p, [v, 'Meizu'],
                                        [m, _]
                                    ],
                                    [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                                    [p, [v, $],
                                        [m, _]
                                    ],
                                    [
                                        /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                                        /(hp) ([\w ]+\w)/i,
                                        /(asus)-?(\w+)/i,
                                        /(microsoft); (lumia[\w ]+)/i,
                                        /(lenovo)[-_ ]?([-\w]+)/i,
                                        /(jolla)/i,
                                        /(oppo) ?([\w ]+) bui/i
                                    ],
                                    [v, p, [m, _]],
                                    [
                                        /(archos) (gamepad2?)/i,
                                        /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                                        /(kindle)\/([\w\.]+)/i,
                                        /(nook)[\w ]+build\/(\w+)/i,
                                        /(dell) (strea[kpr\d ]*[\dko])/i,
                                        /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                                        /(trinity)[- ]*(t\d{3}) bui/i,
                                        /(gigaset)[- ]+(q\w{1,9}) bui/i,
                                        /(vodafone) ([\w ]+)(?:\)| bui)/i
                                    ],
                                    [v, p, [m, I]],
                                    [/(surface duo)/i],
                                    [p, [v, F],
                                        [m, I]
                                    ],
                                    [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                                    [p, [v, 'Fairphone'],
                                        [m, _]
                                    ],
                                    [/(u304aa)/i],
                                    [p, [v, 'AT&T'],
                                        [m, _]
                                    ],
                                    [/\bsie-(\w*)/i],
                                    [p, [v, 'Siemens'],
                                        [m, _]
                                    ],
                                    [/\b(rct\w+) b/i],
                                    [p, [v, 'RCA'],
                                        [m, I]
                                    ],
                                    [/\b(venue[\d ]{2,7}) b/i],
                                    [p, [v, 'Dell'],
                                        [m, I]
                                    ],
                                    [/\b(q(?:mv|ta)\w+) b/i],
                                    [p, [v, 'Verizon'],
                                        [m, I]
                                    ],
                                    [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                                    [p, [v, 'Barnes & Noble'],
                                        [m, I]
                                    ],
                                    [/\b(tm\d{3}\w+) b/i],
                                    [p, [v, 'NuVision'],
                                        [m, I]
                                    ],
                                    [/\b(k88) b/i],
                                    [p, [v, 'ZTE'],
                                        [m, I]
                                    ],
                                    [/\b(nx\d{3}j) b/i],
                                    [p, [v, 'ZTE'],
                                        [m, _]
                                    ],
                                    [/\b(gen\d{3}) b.+49h/i],
                                    [p, [v, 'Swiss'],
                                        [m, _]
                                    ],
                                    [/\b(zur\d{3}) b/i],
                                    [p, [v, 'Swiss'],
                                        [m, I]
                                    ],
                                    [/\b((zeki)?tb.*\b) b/i],
                                    [p, [v, 'Zeki'],
                                        [m, I]
                                    ],
                                    [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                                    [
                                        [v, 'Dragon Touch'], p, [m, I]
                                    ],
                                    [/\b(ns-?\w{0,9}) b/i],
                                    [p, [v, 'Insignia'],
                                        [m, I]
                                    ],
                                    [/\b((nxa|next)-?\w{0,9}) b/i],
                                    [p, [v, 'NextBook'],
                                        [m, I]
                                    ],
                                    [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                                    [
                                        [v, 'Voice'], p, [m, _]
                                    ],
                                    [/\b(lvtel\-)?(v1[12]) b/i],
                                    [
                                        [v, 'LvTel'], p, [m, _]
                                    ],
                                    [/\b(ph-1) /i],
                                    [p, [v, 'Essential'],
                                        [m, _]
                                    ],
                                    [/\b(v(100md|700na|7011|917g).*\b) b/i],
                                    [p, [v, 'Envizen'],
                                        [m, I]
                                    ],
                                    [/\b(trio[-\w\. ]+) b/i],
                                    [p, [v, 'MachSpeed'],
                                        [m, I]
                                    ],
                                    [/\btu_(1491) b/i],
                                    [p, [v, 'Rotor'],
                                        [m, I]
                                    ],
                                    [/(shield[\w ]+) b/i],
                                    [p, [v, 'Nvidia'],
                                        [m, I]
                                    ],
                                    [/(sprint) (\w+)/i],
                                    [v, p, [m, _]],
                                    [/(kin\.[onetw]{3})/i],
                                    [
                                        [p, /\./g, ' '],
                                        [v, F],
                                        [m, _]
                                    ],
                                    [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                                    [p, [v, G],
                                        [m, I]
                                    ],
                                    [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                                    [p, [v, G],
                                        [m, _]
                                    ],
                                    [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                                    [v, p, [m, b]],
                                    [/droid.+; (shield) bui/i],
                                    [p, [v, 'Nvidia'],
                                        [m, b]
                                    ],
                                    [/(playstation [345portablevi]+)/i],
                                    [p, [v, q],
                                        [m, b]
                                    ],
                                    [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                                    [p, [v, F],
                                        [m, b]
                                    ],
                                    [/smart-tv.+(samsung)/i],
                                    [v, [m, E]],
                                    [/hbbtv.+maple;(\d+)/i],
                                    [
                                        [p, /^/, 'SmartTV'],
                                        [v, B],
                                        [m, E]
                                    ],
                                    [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                                    [
                                        [v, M],
                                        [m, E]
                                    ],
                                    [/(apple) ?tv/i],
                                    [v, [p, C + ' TV'],
                                        [m, E]
                                    ],
                                    [/crkey/i],
                                    [
                                        [p, R + 'cast'],
                                        [v, L],
                                        [m, E]
                                    ],
                                    [/droid.+aft(\w)( bui|\))/i],
                                    [p, [v, x],
                                        [m, E]
                                    ],
                                    [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                                    [p, [v, $],
                                        [m, E]
                                    ],
                                    [/(bravia[\w ]+)( bui|\))/i],
                                    [p, [v, q],
                                        [m, E]
                                    ],
                                    [/(mitv-\w{5}) bui/i],
                                    [p, [v, z],
                                        [m, E]
                                    ],
                                    [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],
                                    [
                                        [v, J],
                                        [p, J],
                                        [m, E]
                                    ],
                                    [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                                    [
                                        [m, E]
                                    ],
                                    [/((pebble))app/i],
                                    [v, p, [m, S]],
                                    [/droid.+; (glass) \d/i],
                                    [p, [v, L],
                                        [m, S]
                                    ],
                                    [/droid.+; (wt63?0{2,3})\)/i],
                                    [p, [v, G],
                                        [m, S]
                                    ],
                                    [/(quest( 2)?)/i],
                                    [p, [v, W],
                                        [m, S]
                                    ],
                                    [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                                    [v, [m, T]],
                                    [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                                    [p, [m, _]],
                                    [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                                    [p, [m, I]],
                                    [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                                    [
                                        [m, I]
                                    ],
                                    [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                                    [
                                        [m, _]
                                    ],
                                    [/(android[-\w\. ]{0,9});.+buil/i],
                                    [p, [v, 'Generic']]
                                ],
                                engine: [
                                    [/windows.+ edge\/([\w\.]+)/i],
                                    [y, [g, P + 'HTML']],
                                    [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                                    [y, [g, 'Blink']],
                                    [
                                        /(presto)\/([\w\.]+)/i,
                                        /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                                        /ekioh(flow)\/([\w\.]+)/i,
                                        /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                                        /(icab)[\/ ]([23]\.[\d\.]+)/i
                                    ],
                                    [g, y],
                                    [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                                    [y, g]
                                ],
                                os: [
                                    [/microsoft (windows) (vista|xp)/i],
                                    [g, y],
                                    [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],
                                    [g, [y, ee, ne]],
                                    [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                                    [
                                        [g, 'Windows'],
                                        [y, ee, ne]
                                    ],
                                    [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i],
                                    [
                                        [y, /_/g, '.'],
                                        [g, 'iOS']
                                    ],
                                    [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                                    [
                                        [g, 'Mac OS'],
                                        [y, /_/g, '.']
                                    ],
                                    [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                                    [y, g],
                                    [
                                        /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                                        /(blackberry)\w*\/([\w\.]*)/i,
                                        /(tizen|kaios)[\/ ]([\w\.]+)/i,
                                        /\((series40);/i
                                    ],
                                    [g, y],
                                    [/\(bb(10);/i],
                                    [y, [g, O]],
                                    [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                                    [y, [g, 'Symbian']],
                                    [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                                    [y, [g, D + ' OS']],
                                    [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                                    [y, [g, 'webOS']],
                                    [/crkey\/([\d\.]+)/i],
                                    [y, [g, R + 'cast']],
                                    [/(cros) [\w]+ ([\w\.]+\w)/i],
                                    [
                                        [g, 'Chromium OS'], y
                                    ],
                                    [
                                        /(nintendo|playstation) ([wids345portablevuch]+)/i,
                                        /(xbox); +xbox ([^\);]+)/i,
                                        /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                                        /(mint)[\/\(\) ]?(\w*)/i,
                                        /(mageia|vectorlinux)[; ]/i,
                                        /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                                        /(hurd|linux) ?([\w\.]*)/i,
                                        /(gnu) ?([\w\.]*)/i,
                                        /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                                        /(haiku) (\w+)/i
                                    ],
                                    [g, y],
                                    [/(sunos) ?([\w\.\d]*)/i],
                                    [
                                        [g, 'Solaris'], y
                                    ],
                                    [
                                        /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                                        /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                                        /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,
                                        /(unix) ?([\w\.]*)/i
                                    ],
                                    [g, y]
                                ]
                            },
                            ie = function(e, t) {
                                if ((typeof e === h && ((t = e), (e = o)), !(this instanceof ie))) return new ie(e, t).getResult();
                                var n = e || (typeof i !== l && i.navigator && i.navigator.userAgent ? i.navigator.userAgent : a),
                                    r = t ? H(re, t) : re;
                                return (
                                    (this.getBrowser = function() {
                                        var e = {};
                                        return (e[g] = o), (e[y] = o), Z.call(e, n, r.browser), (e.major = X(e.version)), e;
                                    }),
                                    (this.getCPU = function() {
                                        var e = {};
                                        return (e[w] = o), Z.call(e, n, r.cpu), e;
                                    }),
                                    (this.getDevice = function() {
                                        var e = {};
                                        return (e[v] = o), (e[p] = o), (e[m] = o), Z.call(e, n, r.device), e;
                                    }),
                                    (this.getEngine = function() {
                                        var e = {};
                                        return (e[g] = o), (e[y] = o), Z.call(e, n, r.engine), e;
                                    }),
                                    (this.getOS = function() {
                                        var e = {};
                                        return (e[g] = o), (e[y] = o), Z.call(e, n, r.os), e;
                                    }),
                                    (this.getResult = function() {
                                        return {
                                            ua: this.getUA(),
                                            browser: this.getBrowser(),
                                            engine: this.getEngine(),
                                            os: this.getOS(),
                                            device: this.getDevice(),
                                            cpu: this.getCPU()
                                        };
                                    }),
                                    (this.getUA = function() {
                                        return n;
                                    }),
                                    (this.setUA = function(e) {
                                        return (n = typeof e === f && e.length > A ? J(e, A) : e), this;
                                    }),
                                    this.setUA(n),
                                    this
                                );
                            };
                        (ie.VERSION = s),
                        (ie.BROWSER = K([g, y, d])),
                        (ie.CPU = K([w])),
                        (ie.DEVICE = K([p, v, m, b, _, E, I, S, T])),
                        (ie.ENGINE = ie.OS = K([g, y])),
                        typeof t !== l ?
                            ('object' !== l && e.exports && (t = e.exports = ie), (t.UAParser = ie)) :
                            'function' === c && n.amdO ?
                            ((r = function() {
                                    return ie;
                                }.call(t, n, t, e)),
                                r === o || (e.exports = r)) :
                            typeof i !== l && (i.UAParser = ie);
                        var oe = typeof i !== l && (i.jQuery || i.Zepto);
                        if (oe && !oe.ua) {
                            var se = new ie();
                            (oe.ua = se.getResult()),
                            (oe.ua.get = function() {
                                return se.getUA();
                            }),
                            (oe.ua.set = function(e) {
                                se.setUA(e);
                                var t = se.getResult();
                                for (var n in t) oe.ua[n] = t[n];
                            });
} ]); export default function 29293() {}
(self['webpackChunkpoolsuite'] = self['webpackChunkpoolsuite'] || []).push([ [998], { 29293: function(e, t, n) {
                29293: function(e, t, n) {
                    var r;
                    (function(i, o) {
                        'use strict';
                        var s = '0.7.33',
                            a = '',
                            u = '?',
                            c = 'function',
                            l = 'undefined',
                            h = 'object',
                            f = 'string',
                            d = 'major',
                            p = 'model',
                            g = 'name',
                            m = 'type',
                            v = 'vendor',
                            y = 'version',
                            w = 'architecture',
                            b = 'console',
                            _ = 'mobile',
                            I = 'tablet',
                            E = 'smarttv',
                            S = 'wearable',
                            T = 'embedded',
                            A = 350,
                            x = 'Amazon',
                            C = 'Apple',
                            k = 'ASUS',
                            O = 'BlackBerry',
                            N = 'Browser',
                            R = 'Chrome',
                            P = 'Edge',
                            D = 'Firefox',
                            L = 'Google',
                            j = 'Huawei',
                            M = 'LG',
                            F = 'Microsoft',
                            U = 'Motorola',
                            V = 'Opera',
                            B = 'Samsung',
                            $ = 'Sharp',
                            q = 'Sony',
                            z = 'Xiaomi',
                            G = 'Zebra',
                            W = 'Facebook',
                            H = function(e, t) {
                                var n = {};
                                for (var r in e) t[r] && t[r].length % 2 === 0 ? (n[r] = t[r].concat(e[r])) : (n[r] = e[r]);
                                return n;
                            },
                            K = function(e) {
                                for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n];
                                return t;
                            },
                            Q = function(e, t) {
                                return typeof e === f && -1 !== Y(t).indexOf(Y(e));
                            },
                            Y = function(e) {
                                return e.toLowerCase();
                            },
                            X = function(e) {
                                return typeof e === f ? e.replace(/[^\d\.]/g, a).split('.')[0] : o;
                            },
                            J = function(e, t) {
                                if (typeof e === f) return (e = e.replace(/^\s\s*/, a)), typeof t === l ? e : e.substring(0, A);
                            },
                            Z = function(e, t) {
                                var n,
                                    r,
                                    i,
                                    s,
                                    a,
                                    u,
                                    l = 0;
                                while (l < t.length && !a) {
                                    var f = t[l],
                                        d = t[l + 1];
                                    n = r = 0;
                                    while (n < f.length && !a)
                                        if (((a = f[n++].exec(e)), a))
                                            for (i = 0; i < d.length; i++)
                                                (u = a[++r]),
                                                (s = d[i]),
                                                typeof s === h && s.length > 0 ?
                                                2 === s.length ?
                                                typeof s[1] == c ?
                                                (this[s[0]] = s[1].call(this, u)) :
                                                (this[s[0]] = s[1]) :
                                                3 === s.length ?
                                                typeof s[1] !== c || (s[1].exec && s[1].test) ?
                                                (this[s[0]] = u ? u.replace(s[1], s[2]) : o) :
                                                (this[s[0]] = u ? s[1].call(this, u, s[2]) : o) :
                                                4 === s.length && (this[s[0]] = u ? s[3].call(this, u.replace(s[1], s[2])) : o) :
                                                (this[s] = u || o);
                                    l += 2;
                                }
                            },
                            ee = function(e, t) {
                                for (var n in t)
                                    if (typeof t[n] === h && t[n].length > 0) {
                                        for (var r = 0; r < t[n].length; r++)
                                            if (Q(t[n][r], e)) return n === u ? o : n;
                                    } else if (Q(t[n], e)) return n === u ? o : n;
                                return e;
                            },
                            te = { '1.0': '/8', 1.2: '/1', 1.3: '/3', '2.0': '/412', '2.0.2': '/416', '2.0.3': '/417', '2.0.4': '/419', '?': '/' },
                            ne = {
                                ME: '4.90',
                                'NT 3.11': 'NT3.51',
                                'NT 4.0': 'NT4.0',
                                2e3: 'NT 5.0',
                                XP: ['NT 5.1', 'NT 5.2'],
                                Vista: 'NT 6.0',
                                7: 'NT 6.1',
                                8: 'NT 6.2',
                                8.1: 'NT 6.3',
                                10: ['NT 6.4', 'NT 10.0'],
                                RT: 'ARM'
                            },
                            re = {
                                browser: [
                                    [/\b(?:crmo|crios)\/([\w\.]+)/i],
                                    [y, [g, 'Chrome']],
                                    [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                                    [y, [g, 'Edge']],
                                    [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                                    [g, y],
                                    [/opios[\/ ]+([\w\.]+)/i],
                                    [y, [g, V + ' Mini']],
                                    [/\bopr\/([\w\.]+)/i],
                                    [y, [g, V]],
                                    [
                                        /(kindle)\/([\w\.]+)/i,
                                        /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                                        /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
                                        /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
                                        /(?:ms|\()(ie) ([\w\.]+)/i,
                                        /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
                                        /(weibo)__([\d\.]+)/i
                                    ],
                                    [g, y],
                                    [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                                    [y, [g, 'UC' + N]],
                                    [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i],
                                    [y, [g, 'WeChat(Win) Desktop']],
                                    [/micromessenger\/([\w\.]+)/i],
                                    [y, [g, 'WeChat']],
                                    [/konqueror\/([\w\.]+)/i],
                                    [y, [g, 'Konqueror']],
                                    [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                                    [y, [g, 'IE']],
                                    [/yabrowser\/([\w\.]+)/i],
                                    [y, [g, 'Yandex']],
                                    [/(avast|avg)\/([\w\.]+)/i],
                                    [
                                        [g, /(.+)/, '$1 Secure ' + N], y
                                    ],
                                    [/\bfocus\/([\w\.]+)/i],
                                    [y, [g, D + ' Focus']],
                                    [/\bopt\/([\w\.]+)/i],
                                    [y, [g, V + ' Touch']],
                                    [/coc_coc\w+\/([\w\.]+)/i],
                                    [y, [g, 'Coc Coc']],
                                    [/dolfin\/([\w\.]+)/i],
                                    [y, [g, 'Dolphin']],
                                    [/coast\/([\w\.]+)/i],
                                    [y, [g, V + ' Coast']],
                                    [/miuibrowser\/([\w\.]+)/i],
                                    [y, [g, 'MIUI ' + N]],
                                    [/fxios\/([-\w\.]+)/i],
                                    [y, [g, D]],
                                    [/\bqihu|(qi?ho?o?|360)browser/i],
                                    [
                                        [g, '360 ' + N]
                                    ],
                                    [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
                                    [
                                        [g, /(.+)/, '$1 ' + N], y
                                    ],
                                    [/(comodo_dragon)\/([\w\.]+)/i],
                                    [
                                        [g, /_/g, ' '], y
                                    ],
                                    [
                                        /(electron)\/([\w\.]+) safari/i,
                                        /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                                        /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i
                                    ],
                                    [g, y],
                                    [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i],
                                    [g],
                                    [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                                    [
                                        [g, W], y
                                    ],
                                    [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i],
                                    [g, y],
                                    [/\bgsa\/([\w\.]+) .*safari\//i],
                                    [y, [g, 'GSA']],
                                    [/headlesschrome(?:\/([\w\.]+)| )/i],
                                    [y, [g, R + ' Headless']],
                                    [/ wv\).+(chrome)\/([\w\.]+)/i],
                                    [
                                        [g, R + ' WebView'], y
                                    ],
                                    [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                                    [y, [g, 'Android ' + N]],
                                    [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                                    [g, y],
                                    [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                                    [y, [g, 'Mobile Safari']],
                                    [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                                    [y, g],
                                    [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                                    [g, [y, ee, te]],
                                    [/(webkit|khtml)\/([\w\.]+)/i],
                                    [g, y],
                                    [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                                    [
                                        [g, 'Netscape'], y
                                    ],
                                    [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                                    [y, [g, D + ' Reality']],
                                    [
                                        /ekiohf.+(flow)\/([\w\.]+)/i,
                                        /(swiftfox)/i,
                                        /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                                        /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                                        /(firefox)\/([\w\.]+)/i,
                                        /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                                        /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                                        /(links) \(([\w\.]+)/i
                                    ],
                                    [g, y],
                                    [/(cobalt)\/([\w\.]+)/i],
                                    [g, [y, /master.|lts./, '']]
                                ],
                                cpu: [
                                    [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                                    [
                                        [w, 'amd64']
                                    ],
                                    [/(ia32(?=;))/i],
                                    [
                                        [w, Y]
                                    ],
                                    [/((?:i[346]|x)86)[;\)]/i],
                                    [
                                        [w, 'ia32']
                                    ],
                                    [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                                    [
                                        [w, 'arm64']
                                    ],
                                    [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                                    [
                                        [w, 'armhf']
                                    ],
                                    [/windows (ce|mobile); ppc;/i],
                                    [
                                        [w, 'arm']
                                    ],
                                    [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                                    [
                                        [w, /ower/, a, Y]
                                    ],
                                    [/(sun4\w)[;\)]/i],
                                    [
                                        [w, 'sparc']
                                    ],
                                    [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                                    [
                                        [w, Y]
                                    ]
                                ],
                                device: [
                                    [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                                    [p, [v, B],
                                        [m, I]
                                    ],
                                    [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                                    [p, [v, B],
                                        [m, _]
                                    ],
                                    [/((ipod|iphone)\d+,\d+)/i],
                                    [p, [v, C],
                                        [m, _]
                                    ],
                                    [/(ipad\d+,\d+)/i],
                                    [p, [v, C],
                                        [m, I]
                                    ],
                                    [/\((ip(?:hone|od)[\w ]*);/i],
                                    [p, [v, C],
                                        [m, _]
                                    ],
                                    [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                                    [p, [v, C],
                                        [m, I]
                                    ],
                                    [/(macintosh);/i],
                                    [p, [v, C]],
                                    [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                                    [p, [v, j],
                                        [m, I]
                                    ],
                                    [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                                    [p, [v, j],
                                        [m, _]
                                    ],
                                    [
                                        /\b(poco[\w ]+)(?: bui|\))/i,
                                        /\b; (\w+) build\/hm\1/i,
                                        /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                                        /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                                        /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i
                                    ],
                                    [
                                        [p, /_/g, ' '],
                                        [v, z],
                                        [m, _]
                                    ],
                                    [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                                    [
                                        [p, /_/g, ' '],
                                        [v, z],
                                        [m, I]
                                    ],
                                    [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                                    [p, [v, 'OPPO'],
                                        [m, _]
                                    ],
                                    [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                                    [p, [v, 'Vivo'],
                                        [m, _]
                                    ],
                                    [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                                    [p, [v, 'Realme'],
                                        [m, _]
                                    ],
                                    [
                                        /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                                        /\bmot(?:orola)?[- ](\w*)/i,
                                        /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
                                    ],
                                    [p, [v, U],
                                        [m, _]
                                    ],
                                    [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                                    [p, [v, U],
                                        [m, I]
                                    ],
                                    [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                                    [p, [v, M],
                                        [m, I]
                                    ],
                                    [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                                    [p, [v, M],
                                        [m, _]
                                    ],
                                    [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                                    [p, [v, 'Lenovo'],
                                        [m, I]
                                    ],
                                    [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                                    [
                                        [p, /_/g, ' '],
                                        [v, 'Nokia'],
                                        [m, _]
                                    ],
                                    [/(pixel c)\b/i],
                                    [p, [v, L],
                                        [m, I]
                                    ],
                                    [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                                    [p, [v, L],
                                        [m, _]
                                    ],
                                    [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                                    [p, [v, q],
                                        [m, _]
                                    ],
                                    [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                                    [
                                        [p, 'Xperia Tablet'],
                                        [v, q],
                                        [m, I]
                                    ],
                                    [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                                    [p, [v, 'OnePlus'],
                                        [m, _]
                                    ],
                                    [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                                    [p, [v, x],
                                        [m, I]
                                    ],
                                    [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                                    [
                                        [p, /(.+)/g, 'Fire Phone $1'],
                                        [v, x],
                                        [m, _]
                                    ],
                                    [/(playbook);[-\w\),; ]+(rim)/i],
                                    [p, v, [m, I]],
                                    [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                                    [p, [v, O],
                                        [m, _]
                                    ],
                                    [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                                    [p, [v, k],
                                        [m, I]
                                    ],
                                    [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                                    [p, [v, k],
                                        [m, _]
                                    ],
                                    [/(nexus 9)/i],
                                    [p, [v, 'HTC'],
                                        [m, I]
                                    ],
                                    [
                                        /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                                        /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                                        /(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i
                                    ],
                                    [v, [p, /_/g, ' '],
                                        [m, _]
                                    ],
                                    [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                                    [p, [v, 'Acer'],
                                        [m, I]
                                    ],
                                    [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                                    [p, [v, 'Meizu'],
                                        [m, _]
                                    ],
                                    [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                                    [p, [v, $],
                                        [m, _]
                                    ],
                                    [
                                        /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                                        /(hp) ([\w ]+\w)/i,
                                        /(asus)-?(\w+)/i,
                                        /(microsoft); (lumia[\w ]+)/i,
                                        /(lenovo)[-_ ]?([-\w]+)/i,
                                        /(jolla)/i,
                                        /(oppo) ?([\w ]+) bui/i
                                    ],
                                    [v, p, [m, _]],
                                    [
                                        /(archos) (gamepad2?)/i,
                                        /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                                        /(kindle)\/([\w\.]+)/i,
                                        /(nook)[\w ]+build\/(\w+)/i,
                                        /(dell) (strea[kpr\d ]*[\dko])/i,
                                        /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                                        /(trinity)[- ]*(t\d{3}) bui/i,
                                        /(gigaset)[- ]+(q\w{1,9}) bui/i,
                                        /(vodafone) ([\w ]+)(?:\)| bui)/i
                                    ],
                                    [v, p, [m, I]],
                                    [/(surface duo)/i],
                                    [p, [v, F],
                                        [m, I]
                                    ],
                                    [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                                    [p, [v, 'Fairphone'],
                                        [m, _]
                                    ],
                                    [/(u304aa)/i],
                                    [p, [v, 'AT&T'],
                                        [m, _]
                                    ],
                                    [/\bsie-(\w*)/i],
                                    [p, [v, 'Siemens'],
                                        [m, _]
                                    ],
                                    [/\b(rct\w+) b/i],
                                    [p, [v, 'RCA'],
                                        [m, I]
                                    ],
                                    [/\b(venue[\d ]{2,7}) b/i],
                                    [p, [v, 'Dell'],
                                        [m, I]
                                    ],
                                    [/\b(q(?:mv|ta)\w+) b/i],
                                    [p, [v, 'Verizon'],
                                        [m, I]
                                    ],
                                    [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                                    [p, [v, 'Barnes & Noble'],
                                        [m, I]
                                    ],
                                    [/\b(tm\d{3}\w+) b/i],
                                    [p, [v, 'NuVision'],
                                        [m, I]
                                    ],
                                    [/\b(k88) b/i],
                                    [p, [v, 'ZTE'],
                                        [m, I]
                                    ],
                                    [/\b(nx\d{3}j) b/i],
                                    [p, [v, 'ZTE'],
                                        [m, _]
                                    ],
                                    [/\b(gen\d{3}) b.+49h/i],
                                    [p, [v, 'Swiss'],
                                        [m, _]
                                    ],
                                    [/\b(zur\d{3}) b/i],
                                    [p, [v, 'Swiss'],
                                        [m, I]
                                    ],
                                    [/\b((zeki)?tb.*\b) b/i],
                                    [p, [v, 'Zeki'],
                                        [m, I]
                                    ],
                                    [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                                    [
                                        [v, 'Dragon Touch'], p, [m, I]
                                    ],
                                    [/\b(ns-?\w{0,9}) b/i],
                                    [p, [v, 'Insignia'],
                                        [m, I]
                                    ],
                                    [/\b((nxa|next)-?\w{0,9}) b/i],
                                    [p, [v, 'NextBook'],
                                        [m, I]
                                    ],
                                    [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                                    [
                                        [v, 'Voice'], p, [m, _]
                                    ],
                                    [/\b(lvtel\-)?(v1[12]) b/i],
                                    [
                                        [v, 'LvTel'], p, [m, _]
                                    ],
                                    [/\b(ph-1) /i],
                                    [p, [v, 'Essential'],
                                        [m, _]
                                    ],
                                    [/\b(v(100md|700na|7011|917g).*\b) b/i],
                                    [p, [v, 'Envizen'],
                                        [m, I]
                                    ],
                                    [/\b(trio[-\w\. ]+) b/i],
                                    [p, [v, 'MachSpeed'],
                                        [m, I]
                                    ],
                                    [/\btu_(1491) b/i],
                                    [p, [v, 'Rotor'],
                                        [m, I]
                                    ],
                                    [/(shield[\w ]+) b/i],
                                    [p, [v, 'Nvidia'],
                                        [m, I]
                                    ],
                                    [/(sprint) (\w+)/i],
                                    [v, p, [m, _]],
                                    [/(kin\.[onetw]{3})/i],
                                    [
                                        [p, /\./g, ' '],
                                        [v, F],
                                        [m, _]
                                    ],
                                    [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                                    [p, [v, G],
                                        [m, I]
                                    ],
                                    [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                                    [p, [v, G],
                                        [m, _]
                                    ],
                                    [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                                    [v, p, [m, b]],
                                    [/droid.+; (shield) bui/i],
                                    [p, [v, 'Nvidia'],
                                        [m, b]
                                    ],
                                    [/(playstation [345portablevi]+)/i],
                                    [p, [v, q],
                                        [m, b]
                                    ],
                                    [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                                    [p, [v, F],
                                        [m, b]
                                    ],
                                    [/smart-tv.+(samsung)/i],
                                    [v, [m, E]],
                                    [/hbbtv.+maple;(\d+)/i],
                                    [
                                        [p, /^/, 'SmartTV'],
                                        [v, B],
                                        [m, E]
                                    ],
                                    [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                                    [
                                        [v, M],
                                        [m, E]
                                    ],
                                    [/(apple) ?tv/i],
                                    [v, [p, C + ' TV'],
                                        [m, E]
                                    ],
                                    [/crkey/i],
                                    [
                                        [p, R + 'cast'],
                                        [v, L],
                                        [m, E]
                                    ],
                                    [/droid.+aft(\w)( bui|\))/i],
                                    [p, [v, x],
                                        [m, E]
                                    ],
                                    [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                                    [p, [v, $],
                                        [m, E]
                                    ],
                                    [/(bravia[\w ]+)( bui|\))/i],
                                    [p, [v, q],
                                        [m, E]
                                    ],
                                    [/(mitv-\w{5}) bui/i],
                                    [p, [v, z],
                                        [m, E]
                                    ],
                                    [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],
                                    [
                                        [v, J],
                                        [p, J],
                                        [m, E]
                                    ],
                                    [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                                    [
                                        [m, E]
                                    ],
                                    [/((pebble))app/i],
                                    [v, p, [m, S]],
                                    [/droid.+; (glass) \d/i],
                                    [p, [v, L],
                                        [m, S]
                                    ],
                                    [/droid.+; (wt63?0{2,3})\)/i],
                                    [p, [v, G],
                                        [m, S]
                                    ],
                                    [/(quest( 2)?)/i],
                                    [p, [v, W],
                                        [m, S]
                                    ],
                                    [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                                    [v, [m, T]],
                                    [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                                    [p, [m, _]],
                                    [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                                    [p, [m, I]],
                                    [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                                    [
                                        [m, I]
                                    ],
                                    [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                                    [
                                        [m, _]
                                    ],
                                    [/(android[-\w\. ]{0,9});.+buil/i],
                                    [p, [v, 'Generic']]
                                ],
                                engine: [
                                    [/windows.+ edge\/([\w\.]+)/i],
                                    [y, [g, P + 'HTML']],
                                    [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                                    [y, [g, 'Blink']],
                                    [
                                        /(presto)\/([\w\.]+)/i,
                                        /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                                        /ekioh(flow)\/([\w\.]+)/i,
                                        /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                                        /(icab)[\/ ]([23]\.[\d\.]+)/i
                                    ],
                                    [g, y],
                                    [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                                    [y, g]
                                ],
                                os: [
                                    [/microsoft (windows) (vista|xp)/i],
                                    [g, y],
                                    [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],
                                    [g, [y, ee, ne]],
                                    [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                                    [
                                        [g, 'Windows'],
                                        [y, ee, ne]
                                    ],
                                    [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i],
                                    [
                                        [y, /_/g, '.'],
                                        [g, 'iOS']
                                    ],
                                    [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                                    [
                                        [g, 'Mac OS'],
                                        [y, /_/g, '.']
                                    ],
                                    [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                                    [y, g],
                                    [
                                        /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                                        /(blackberry)\w*\/([\w\.]*)/i,
                                        /(tizen|kaios)[\/ ]([\w\.]+)/i,
                                        /\((series40);/i
                                    ],
                                    [g, y],
                                    [/\(bb(10);/i],
                                    [y, [g, O]],
                                    [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                                    [y, [g, 'Symbian']],
                                    [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                                    [y, [g, D + ' OS']],
                                    [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                                    [y, [g, 'webOS']],
                                    [/crkey\/([\d\.]+)/i],
                                    [y, [g, R + 'cast']],
                                    [/(cros) [\w]+ ([\w\.]+\w)/i],
                                    [
                                        [g, 'Chromium OS'], y
                                    ],
                                    [
                                        /(nintendo|playstation) ([wids345portablevuch]+)/i,
                                        /(xbox); +xbox ([^\);]+)/i,
                                        /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                                        /(mint)[\/\(\) ]?(\w*)/i,
                                        /(mageia|vectorlinux)[; ]/i,
                                        /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                                        /(hurd|linux) ?([\w\.]*)/i,
                                        /(gnu) ?([\w\.]*)/i,
                                        /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                                        /(haiku) (\w+)/i
                                    ],
                                    [g, y],
                                    [/(sunos) ?([\w\.\d]*)/i],
                                    [
                                        [g, 'Solaris'], y
                                    ],
                                    [
                                        /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                                        /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                                        /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,
                                        /(unix) ?([\w\.]*)/i
                                    ],
                                    [g, y]
                                ]
                            },
                            ie = function(e, t) {
                                if ((typeof e === h && ((t = e), (e = o)), !(this instanceof ie))) return new ie(e, t).getResult();
                                var n = e || (typeof i !== l && i.navigator && i.navigator.userAgent ? i.navigator.userAgent : a),
                                    r = t ? H(re, t) : re;
                                return (
                                    (this.getBrowser = function() {
                                        var e = {};
                                        return (e[g] = o), (e[y] = o), Z.call(e, n, r.browser), (e.major = X(e.version)), e;
                                    }),
                                    (this.getCPU = function() {
                                        var e = {};
                                        return (e[w] = o), Z.call(e, n, r.cpu), e;
                                    }),
                                    (this.getDevice = function() {
                                        var e = {};
                                        return (e[v] = o), (e[p] = o), (e[m] = o), Z.call(e, n, r.device), e;
                                    }),
                                    (this.getEngine = function() {
                                        var e = {};
                                        return (e[g] = o), (e[y] = o), Z.call(e, n, r.engine), e;
                                    }),
                                    (this.getOS = function() {
                                        var e = {};
                                        return (e[g] = o), (e[y] = o), Z.call(e, n, r.os), e;
                                    }),
                                    (this.getResult = function() {
                                        return {
                                            ua: this.getUA(),
                                            browser: this.getBrowser(),
                                            engine: this.getEngine(),
                                            os: this.getOS(),
                                            device: this.getDevice(),
                                            cpu: this.getCPU()
                                        };
                                    }),
                                    (this.getUA = function() {
                                        return n;
                                    }),
                                    (this.setUA = function(e) {
                                        return (n = typeof e === f && e.length > A ? J(e, A) : e), this;
                                    }),
                                    this.setUA(n),
                                    this
                                );
                            };
                        (ie.VERSION = s),
                        (ie.BROWSER = K([g, y, d])),
                        (ie.CPU = K([w])),
                        (ie.DEVICE = K([p, v, m, b, _, E, I, S, T])),
                        (ie.ENGINE = ie.OS = K([g, y])),
                        typeof t !== l ?
                            ('object' !== l && e.exports && (t = e.exports = ie), (t.UAParser = ie)) :
                            'function' === c && n.amdO ?
                            ((r = function() {
                                    return ie;
                                }.call(t, n, t, e)),
                                r === o || (e.exports = r)) :
                            typeof i !== l && (i.UAParser = ie);
                        var oe = typeof i !== l && (i.jQuery || i.Zepto);
                        if (oe && !oe.ua) {
                            var se = new ie();
                            (oe.ua = se.getResult()),
                            (oe.ua.get = function() {
                                return se.getUA();
                            }),
                            (oe.ua.set = function(e) {
                                se.setUA(e);
                                var t = se.getResult();
                                for (var n in t) oe.ua[n] = t[n];
                            });
                        }
                    })('object' === typeof window ? window : this);
                },
} ]); export default function 29293() {}
