(self['webpackChunkpoolsuite'] = self['webpackChunkpoolsuite'] || []).push([
  [64],
  {
    37495: (e, t, i) => {
      'use strict';
      var n = i(20144),
        o = function () {
          var e = this,
            t = e._self._c;
          return t('div', { attrs: { id: 'app' } }, [t('router-view')], 1);
        },
        a = [],
        s = { name: 'App' },
        d = s,
        r = i(1001),
        l = (0, r.Z)(d, o, a, !1, null, null, null),
        h = l.exports,
        c = i(78345),
        m = i(60990);
      const p = new n['default']({
        data: function () {
          return { events: !1 };
        },
        created() {
          this.events && this.handleEvents();
        },
        methods: {
          handleEvents() {
            m.forEach(this.events, e => {
              window.addEventListener(e, t => {
                this.EventBus.$emit(`DOM-${e}-fire`, t);
              });
            });
          }
        }
      });

      function u(e) {
        return () => i(4328)(`./${e}.vue`);
      }
      Object.defineProperties(n['default'].prototype, {
        EventBus: {
          get: function () {
            return p;
          }
        }
      }),
        n['default'].use(c.ZP);
      const g = new c.ZP({
        mode: 'history',
        scrollBehavior(e, t, i) {
          return i && i.y ? window.scrollTo({ top: i.offsetTop, behavior: 'smooth' }) : window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        routes: [
          { path: '/', name: 'App', component: u('App') },
          { path: '/lockdown', name: 'Lockdown', component: u('App') },
          { path: '/reset', name: 'Reset', component: u('App') },
          { path: '/wallet', name: 'Wallet', component: u('Wallet') },
          { path: '/offline', name: 'Offline', component: u('Offline') },
          { path: '/mac', name: 'Mac', component: u('Mac') },
          { path: '/app', name: 'iOS', component: u('iOS') },
          { path: '/cellular', name: 'Cellular', component: u('iOS') },
          { path: '/privacy', name: 'Privacy', component: u('Privacy') },
          { path: '/recess', name: 'Recess', component: u('Recess') },
          { path: '/terms', name: 'Terms', component: u('Terms') },
          { path: '/lounge', name: 'Lounge', component: u('Lounge') },
          { path: '/cookies', name: 'Cookies', component: u('Cookies') }
        ]
      });
      var y = g,
        f = (i(57658), i(20629)),
        v = i(44866);
      i(87481), i(14673), i(79865);

      function w(e) {
        let t,
          i,
          n,
          o,
          a,
          s,
          d,
          r,
          l,
          h,
          c,
          m,
          p,
          u,
          g,
          y = e || document.documentElement.clientWidth;
        return (
          y >= 1300 &&
            ((m = { x: 760, y: 15 }),
            (p = { x: 760, y: 15 }),
            (u = {
              classType: 'is-launcher no-resize hide-graphic',
              height: 620,
              width: 600,
              x: y / 2 - 300,
              y: 60,
              collapsed: document.documentElement.clientWidth < 800,
              draggable: !(document.documentElement.clientWidth < 800)
            }),
            (t = { x: 408, y: 173, width: 240, height: 440, minWidth: 240, minHeight: 440 }),
            (i = { classType: 'item-nft-connect', x: 157, y: 100, width: 530, height: 265, minWidth: 530, minHeight: 252 }),
            (n = { x: 20, y: 20, width: 360, height: 475, minWidth: 180, minHeight: 170 }),
            (o = { x: 455, y: 68, width: 290, height: 420, minWidth: 290, minHeight: 420 }),
            (a = { x: 20, y: 23, width: 300, height: 440, minWidth: 300, minHeight: 440 }),
            (g = { x: 800, y: 140, width: 340, height: 550, minWidth: 300, minHeight: 440 }),
            (s = { x: 76, y: 187, width: 281, height: 220, minWidth: 281, minHeight: 220 }),
            (d = { x: 600, y: 80, width: 650, height: 500, minWidth: 300, minHeight: 300 }),
            (r = { x: 55, y: 58, width: 300, height: 450, minWidth: 300, minHeight: 450 }),
            (l = { x: 300, y: 100, width: 400, height: 400, minWidth: 280, minHeight: 400 }),
            (h = { x: 300, y: 300, width: 410, height: 410, minWidth: 310, minHeight: 220 }),
            (c = { x: 300, y: 300, minWidth: 310, minHeight: 220, classType: 'item-folder hide-graphic no-resize', width: 720, height: 305 })),
          y < 1300 &&
            y >= 1100 &&
            ((m = { x: 760, y: 15 }),
            (p = { x: 760, y: 15 }),
            (u = {
              classType: 'is-launcher no-resize hide-graphic',
              height: 620,
              width: 600,
              x: y / 2 - 300,
              y: 60,
              collapsed: document.documentElement.clientWidth < 800,
              draggable: !(document.documentElement.clientWidth < 800)
            }),
            (t = { x: 408, y: 173, width: 240, height: 440, minWidth: 240, minHeight: 440 }),
            (i = { classType: 'item-nft-connect', x: 157, y: 100, width: 530, height: 265, minWidth: 530, minHeight: 252 }),
            (n = { x: 20, y: 20, width: 360, height: 475, minWidth: 180, minHeight: 170 }),
            (o = { x: 455, y: 68, width: 290, height: 420, minWidth: 290, minHeight: 420 }),
            (a = { x: 20, y: 23, width: 300, height: 440, minWidth: 300, minHeight: 440 }),
            (s = { x: 76, y: 187, width: 281, height: 220, minWidth: 281, minHeight: 220 }),
            (d = { x: 400, y: 80, width: 550, height: 400, minWidth: 300, minHeight: 300 }),
            (r = { x: 55, y: 58, width: 300, height: 450, minWidth: 300, minHeight: 450 }),
            (l = { x: 300, y: 100, width: 400, height: 400, minWidth: 280, minHeight: 400 }),
            (g = { x: 650, y: 140, width: 340, height: 550, minWidth: 300, minHeight: 440 }),
            (h = { x: 300, y: 300, width: 410, height: 410, minWidth: 310, minHeight: 220 }),
            (c = { x: 300, y: 300, minWidth: 310, minHeight: 220, classType: 'item-folder hide-graphic no-resize', width: 720, height: 305 })),
          y < 1100 &&
            y >= 900 &&
            ((m = { x: 500, y: 15 }),
            (p = { x: 500, y: 15 }),
            (u = {
              classType: 'is-launcher no-resize hide-graphic',
              height: 620,
              width: 600,
              x: y / 2 - 300,
              y: 60,
              collapsed: document.documentElement.clientWidth < 800,
              draggable: !(document.documentElement.clientWidth < 800)
            }),
            (t = { x: 408, y: 173, width: 240, height: 440, minWidth: 240, minHeight: 440 }),
            (i = { classType: 'item-nft-connect', x: 157, y: 100, width: 530, height: 265, minWidth: 530, minHeight: 252 }),
            (n = { x: 20, y: 20, width: 360, height: 475, minWidth: 180, minHeight: 170 }),
            (o = { x: 455, y: 68, width: 290, height: 420, minWidth: 290, minHeight: 420 }),
            (a = { x: 20, y: 23, width: 300, height: 440, minWidth: 300, minHeight: 440 }),
            (g = { x: 520, y: 105, width: 340, height: 550, minWidth: 300, minHeight: 440 }),
            (s = { x: 76, y: 187, width: 281, height: 220, minWidth: 281, minHeight: 220 }),
            (d = { x: 400, y: 80, width: 446, height: 300, minWidth: 300, minHeight: 300 }),
            (r = { x: 55, y: 58, width: 300, height: 450, minWidth: 300, minHeight: 450 }),
            (l = { x: 300, y: 100, width: 400, height: 400, minWidth: 280, minHeight: 400 }),
            (h = { x: 300, y: 300, width: 310, height: 220, minWidth: 310, minHeight: 220 }),
            (c = { x: 20, y: 100, minWidth: 310, minHeight: 220, classType: 'item-folder hide-graphic no-resize', width: 720, height: 305 })),
          y < 900 &&
            y >= 800 &&
            ((m = { x: 400, y: 15 }),
            (p = { x: 400, y: 15 }),
            (u = {
              classType: 'is-launcher no-resize hide-graphic',
              height: 620,
              width: 600,
              x: y / 2 - 300,
              y: 60,
              collapsed: document.documentElement.clientWidth < 800,
              draggable: !(document.documentElement.clientWidth < 800)
            }),
            (t = { x: 408, y: 173, width: 240, height: 440, minWidth: 240, minHeight: 440 }),
            (i = { classType: 'item-nft-connect', x: 157, y: 100, width: 530, height: 265, minWidth: 530, minHeight: 252 }),
            (n = { x: 20, y: 20, width: 360, height: 475, minWidth: 180, minHeight: 170 }),
            (o = { x: 455, y: 68, width: 290, height: 420, minWidth: 290, minHeight: 420 }),
            (a = { x: 20, y: 23, width: 300, height: 440, minWidth: 300, minHeight: 440 }),
            (g = { x: 400, y: 36, width: 340, height: 550, minWidth: 300, minHeight: 440 }),
            (s = { x: 29, y: 186, width: 281, height: 220, minWidth: 281, minHeight: 220 }),
            (d = { x: 357, y: 165, width: 388, height: 300, minWidth: 300, minHeight: 300 }),
            (r = { x: 55, y: 58, width: 300, height: 450, minWidth: 300, minHeight: 450 }),
            (l = { x: 300, y: 100, width: 400, height: 400, minWidth: 280, minHeight: 400 }),
            (h = { x: 300, y: 300, width: 410, height: 410, minWidth: 310, minHeight: 220 }),
            (c = { x: 20, y: 100, minWidth: 310, minHeight: 220, classType: 'item-folder hide-graphic no-resize', width: 720, height: 305 })),
          y < 800 &&
            y >= 700 &&
            ((m = { x: 300, y: 15 }),
            (p = { x: 400, y: 15 }),
            (u = {
              classType: 'is-launcher no-resize hide-graphic launcher-mobile',
              height: 200,
              width: 32,
              x: y - 32,
              y: y / 2 - 120,
              visible: !0,
              collapsed: document.documentElement.clientWidth < 800,
              draggable: !(document.documentElement.clientWidth < 800)
            }),
            (t = { x: 408, y: 173, width: 240, height: 440, minWidth: 240, minHeight: 440 }),
            (i = { classType: 'item-nft-connect nft-connect-mobile', x: 60, y: 100, width: 252, height: 325, minWidth: 252, minHeight: 325 }),
            (n = { x: 20, y: 20, width: 360, height: 475, minWidth: 180, minHeight: 170 }),
            (o = { x: 231, y: 88, width: 290, height: 420, minWidth: 290, minHeight: 420 }),
            (a = { x: 20, y: 23, width: 300, height: 440, minWidth: 300, minHeight: 440 }),
            (g = { x: 320, y: 50, width: 340, height: 550, minWidth: 300, minHeight: 440 }),
            (s = { x: 29, y: 18, width: 281, height: 220, minWidth: 281, minHeight: 220 }),
            (d = { x: 29, y: 268, width: 388, height: 300, minWidth: 300, minHeight: 300 }),
            (r = { x: 55, y: 58, width: 300, height: 450, minWidth: 300, minHeight: 450 }),
            (l = { x: 300, y: 100, width: 400, height: 400, minWidth: 280, minHeight: 400 }),
            (h = { x: 300, y: 300, width: 310, height: 220, minWidth: 310, minHeight: 220 }),
            (c = {
              x: 20,
              y: 50,
              minWidth: 310,
              minHeight: 220,
              classType: 'item-folder hide-graphic no-resize apps-mobile',
              width: 312,
              height: 305
            })),
          y < 700 &&
            ((m = { x: 18, y: 18 }),
            (p = { x: 18, y: 18 }),
            (u = {
              classType: 'is-launcher no-resize hide-graphic launcher-mobile',
              height: 200,
              width: 32,
              x: y - 32,
              y: y / 2 - 120,
              visible: !0,
              collapsed: document.documentElement.clientWidth < 800,
              draggable: !(document.documentElement.clientWidth < 800)
            }),
            (t = { x: 57, y: 45, width: 240, height: 440, minWidth: 240, minHeight: 440 }),
            (i = { classType: 'item-nft-connect nft-connect-mobile', x: 60, y: 100, width: 252, height: 325, minWidth: 252, minHeight: 325 }),
            (n = { x: 20, y: 20, width: 360, height: 475, minWidth: 180, minHeight: 170 }),
            (o = { x: 20, y: 20, width: 290, height: 420, minWidth: 290, minHeight: 420 }),
            (a = { x: 20, y: 22, width: 300, height: 440, minWidth: 300, minHeight: 440 }),
            (g = { x: 20, y: 22, width: 340, height: 550, minWidth: 300, minHeight: 440 }),
            (s = { x: 29, y: 267, width: 281, height: 220, minWidth: 281, minHeight: 220 }),
            (d = { x: 29, y: 18, width: 300, height: 220, minWidth: 200, minHeight: 200 }),
            (r = { x: 55, y: 58, width: 300, height: 450, minWidth: 300, minHeight: 450 }),
            (l = { x: 30, y: 100, width: 360, height: 400, minWidth: 280, minHeight: 400 }),
            (h = { x: 20, y: 400, width: 310, height: 220, minWidth: 310, minHeight: 220 }),
            (c = {
              x: 20,
              y: 50,
              minWidth: 310,
              minHeight: 220,
              classType: 'item-folder hide-graphic no-resize apps-mobile',
              width: 312,
              height: 305
            })),
          {
            connectSizing: t,
            connectnftSizing: i,
            aboutSizing: n,
            settingsSizing: o,
            guestbookSizing: a,
            fmSizing: s,
            tvSizing: d,
            instagramSizing: r,
            shopSizing: l,
            socialSizing: h,
            appsSizing: c,
            mixtapePlayerSizing: m,
            newsletterSizing: p,
            launcherSizing: u,
            newsSizing: g
          }
        );
      }
      n['default'].use(f.ZP);
      var b = i(96486);
      const x = new f.ZP.Store({
        state: {
          loungeText: [],
          firestoreProduction: {
            apiKey: 'AIzaSyBP7Bqn1g9ofbCUcRoJkvF81hfsmGeJKjA',
            authDomain: 'auth.poolside.fm',
            databaseURL: 'https://steady-tracer-232015.firebaseio.com',
            projectId: 'steady-tracer-232015',
            storageBucket: 'steady-tracer-232015.appspot.com',
            messagingSenderId: '188097333372',
            appId: '1:188097333372:web:7728f734b6ebf7db0da1f9',
            measurementId: 'G-768KXRJM5X'
          },
          firestoreDevelopment: {
            apiKey: 'AIzaSyBIqGBWz2Hl36ewZUY6IbyTskgpH38m6WA',
            authDomain: 'auth.poolside.fm',
            databaseURL: 'https://poolside-os-test.firebaseio.com',
            projectId: 'poolside-os-test',
            storageBucket: 'poolside-os-test.appspot.com',
            messagingSenderId: '759950105449',
            appId: '1:759950105449:web:8517045e1b653cd6847bf8'
          },
          limit: !1,
          currentTrack: {},
          currentTrackID: !1,
          showBSOD: !1,
          lastOpened: !1,
          loadedStatus: !1,
          showLoader: !1,
          radioPlaying: !1,
          videoPlaying: !1,
          mixtapePlaying: !1,
          background: [],
          guestbookDetails: {},
          user: !1,
          connectSignInMode: !0,
          favMode: !1,
          soundcloudURLs: {},
          setVolume: 100,
          playlistLookup: {},
          currentMixtape: !1,
          showingVolume: !1,
          soundcloudKey: 'T9EbIJ75SnsJK3iX8lOZaDlGIYgQB32G',
          soundcloudKeys: {},
          modifiedComponents: {},
          componentData: {
            fm: {
              ...w()['fmSizing'],
              slug: 'fm',
              title: 'Poolsuite FM',
              visible: !1,
              active: !1,
              inner: 'radio-player',
              classType: 'no-resize',
              data: { tracks: [] }
            },
            parties: { slug: 'parties', title: 'Pool Parties', visible: !1, active: !1 },
            soundcloud: { slug: 'soundcloud', title: 'soundcloud', visible: !1, active: !1 },
            mixtapePlayer: {
              ...w()['mixtapePlayerSizing'],
              slug: 'mixtapePlayer',
              title: 'Poolsuite Mixtape',
              visible: !1,
              height: 496,
              width: 300,
              minHeight: 496,
              minwidth: 300,
              active: !1,
              inner: 'mixtape-player',
              classType: 'no-resize mixtape'
            },
            submit: {
              slug: 'submit',
              title: 'Submit',
              visible: !1,
              active: !1,
              classType: 'no-resize',
              inner: 'submit-inner',
              width: 279,
              height: 190,
              minWidth: 279,
              minHeight: 190,
              x: 55,
              y: 58
            },
            connect: {
              ...w()['connectSizing'],
              slug: 'connect',
              title: "Let's make it official",
              visible: !1,
              active: !1,
              classType: 'item-note hide-drag',
              inner: 'connect'
            },
            about: {
              ...w()['aboutSizing'],
              slug: 'about',
              title: 'About',
              visible: !1,
              active: !1,
              inner: 'about-page',
              classType: 'item-about',
              width: 360,
              data: { items: [] }
            },
            connectnft: {
              ...w()['connectnftSizing'],
              slug: 'connectnft',
              title: 'Connect NFT',
              visible: !1,
              active: !1,
              inner: 'connect-nft-wrapper',
              data: { items: [] }
            },
            nftperks: { slug: 'nftperks', title: 'Executive Member Perks', visible: !1, active: !1, data: {} },
            newsletter: {
              ...w()['newsletterSizing'],
              slug: 'newsletter',
              title: 'Palm Report',
              visible: !1,
              active: !1,
              inner: 'newsletter-page',
              classType: 'item-newsletter no-resize',
              height: 465,
              width: 314
            },
            ios: {
              slug: 'ios',
              title: 'Poolsuite for iOS',
              visible: !1,
              active: !1,
              classType: 'item-recess no-resize hide-graphic',
              height: 550,
              width: 300
            },
            store: { active: !1 },
            grandleisure: { active: !1 },
            launcher: {
              ...w()['launcherSizing'],
              slug: 'launcher',
              title: 'The Poolsuite',
              visible: !0,
              active: !1,
              inner: 'launcher',
              hideClose: !1,
              collapsable: !0,
              data: {}
            },
            texteditor: {
              ...w()['aboutSizing'],
              slug: 'texteditor',
              title: 'Text Editor',
              visible: !1,
              active: !1,
              inner: 'text-editor',
              classType: '',
              height: 200
            },
            settings: {
              ...w()['settingsSizing'],
              slug: 'settings',
              title: 'Themes',
              visible: !1,
              active: !1,
              inner: 'settings-inner',
              classType: 'no-resize',
              data: { wallpapers: [] }
            },
            guestbook: {
              ...w()['guestbookSizing'],
              slug: 'guestbook',
              title: 'Guestbook',
              visible: !1,
              active: !1,
              inner: 'guestbook-inner',
              classType: 'hide-graphic no-resize'
            },
            news: {
              ...w()['newsSizing'],
              slug: 'news',
              title: 'News',
              visible: !1,
              active: !1,
              inner: 'news-inner',
              classType: 'hide-graphic no-resize',
              data: {}
            },
            tv: {
              ...w()['tvSizing'],
              slug: 'tv',
              title: 'Poolsuite TV',
              visible: !1,
              active: !1,
              inner: 'video-player',
              classType: 'hide-graphic',
              data: { videos: [] }
            },
            instagram: {
              ...w()['instagramSizing'],
              slug: 'instagram',
              title: 'Instagram',
              visible: !1,
              active: !1,
              inner: 'instagram-inner',
              classType: 'hide-graphic no-resize',
              data: { posts: [] }
            },
            shop: {
              ...w()['shopSizing'],
              slug: 'shop',
              title: 'Shop',
              active: !1,
              visible: !1,
              inner: 'shop-inner',
              classType: 'hide-graphic no-resize',
              data: {}
            },
            social: {
              ...w()['socialSizing'],
              slug: 'social',
              title: 'Social',
              visible: !1,
              active: !1,
              classType: 'item-folder',
              inner: 'folder-wrapper',
              data: {
                items: {
                  facebook: { slug: 'facebook', title: 'Facebook', image: 'facebook.png' },
                  twitter: { slug: 'twitter', title: 'Twitter', image: 'twitter.png' },
                  soundcloud: { slug: 'soundcloud', title: 'SoundCloud', image: 'soundcloud.png' }
                }
              }
            },
            apps: { ...w()['appsSizing'], slug: 'apps', title: 'Apps', visible: !1, active: !1, inner: 'apps-wrapper', data: {} },
            mixtapes: {
              ...w()['socialSizing'],
              slug: 'mixtapes',
              title: 'Mixtapes',
              visible: !1,
              active: !1,
              classType: 'item-folder',
              inner: 'folder-wrapper',
              data: { type: 'mixtape', items: [] }
            }
          }
        },
        mutations: {
          soundcloudKeys(e, t) {
            e.soundcloudKeys = t;
          },
          updateBackground(e, t) {
            e.background = t;
          },
          updateComponentSizes(e) {
            b.forEach(w(), (t, i) => {
              void 0 != t.x &&
                setTimeout(() => {
                  n['default'].set(e.componentData[i.slice(0, -6)], 'x', t.x);
                }, 50),
                void 0 != t.y &&
                  setTimeout(() => {
                    n['default'].set(e.componentData[i.slice(0, -6)], 'y', t.y);
                  }, 50),
                void 0 != t.height && n['default'].set(e.componentData[i.slice(0, -6)], 'height', t.height),
                void 0 != t.width && n['default'].set(e.componentData[i.slice(0, -6)], 'width', t.width),
                void 0 != t.draggable && n['default'].set(e.componentData[i.slice(0, -6)], 'collapsed', t.collapsed),
                void 0 != t.collapsed && n['default'].set(e.componentData[i.slice(0, -6)], 'draggable', t.draggable),
                void 0 != t.visible && n['default'].set(e.componentData[i.slice(0, -6)], 'visible', t.visible),
                void 0 != t.minHeight &&
                  ('fm' == e.componentData[i.slice(0, -6)].slug
                    ? e.favMode
                      ? (n['default'].set(e.componentData[i.slice(0, -6)], 'minHeight', 315),
                        n['default'].set(e.componentData[i.slice(0, -6)], 'height', 315))
                      : (n['default'].set(e.componentData[i.slice(0, -6)], 'minHeight', 220),
                        n['default'].set(e.componentData[i.slice(0, -6)], 'height', 220))
                    : n['default'].set(e.componentData[i.slice(0, -6)], 'minHeight', t.minHeight)),
                void 0 != t.minWidth && n['default'].set(e.componentData[i.slice(0, -6)], 'minWidth', t.minWidth),
                void 0 != t.classType && n['default'].set(e.componentData[i.slice(0, -6)], 'classType', t.classType);
            });
          },
          toggleVolume(e, t) {
            e.showingVolume = t;
          },
          setMixtape(e, t) {
            e.currentMixtape = t;
          },
          updateVol(e, t) {
            e.setVolume = t;
          },
          rateLimit(e, t) {
            e.limit = t;
          },
          connectSignInMode(e, t) {
            'signup' == t
              ? ((e.componentData.connect.title = "Let's make it official"),
                (e.componentData.connect.height = 440),
                (e.componentData.connect.minHeight = 440))
              : 'forgotpassword' == t
                ? ((e.componentData.connect.title = 'Forgot password'),
                  (e.componentData.connect.height = 242),
                  (e.componentData.connect.minHeight = 242))
                : ((e.componentData.connect.title = 'Log in to the Pool'),
                  (e.componentData.connect.height = 392),
                  (e.componentData.connect.minHeight = 392));
          },
          updateFavMode(e, t) {
            'faves' == t
              ? ((e.favMode = !0), (e.componentData.fm.height = 315), (e.componentData.fm.minHeight = 315))
              : ((e.favMode = !1), (e.componentData.fm.height = 220), (e.componentData.fm.minHeight = 220));
          },
          toggleBSOD(e, t) {
            e.showBSOD = t;
          },
          toggleLoaded(e, t) {
            e.loadedStatus = t;
          },
          updateLastOpened(e, t) {
            e.lastOpened = t;
          },
          firstClick(e, t) {
            b.forEach(e.componentData, e => {
              n['default'].set(e, 'highlight', !1);
            }),
              b.forEach(e.modifiedComponents, e => {
                n['default'].set(e, 'highlight', !1);
              }),
              x.commit('resetActive'),
              (e.componentData[t].active = !0);
          },
          secondClick(e, t) {
            e.componentData[t].visible
              ? (n['default'].set(e.componentData[t], 'active', !1),
                b.forEach(e.componentData, e => {
                  n['default'].set(e, 'highlight', !1);
                }),
                b.forEach(e.modifiedComponents, e => {
                  n['default'].set(e, 'highlight', !1);
                }),
                n['default'].set(e.componentData[t], 'highlight', !0),
                n['default'].set(e.modifiedComponents[t], 'highlight', !0),
                (e.lastOpened = t))
              : (n['default'].set(e.componentData[t], 'visible', !e.componentData[t].visible),
                e.modifiedComponents[t] || n['default'].set(e.modifiedComponents, t, {}),
                n['default'].set(
                  e.modifiedComponents[t],
                  'visible',
                  e.modifiedComponents[t].visible ? e.modifiedComponents[t].visible : !e.modifiedComponents[t].visible
                ),
                n['default'].set(e.componentData[t], 'active', !1),
                (e.lastOpened = t));
          },
          handleBypass(e, t) {
            (e.componentData[t].visible = !e.componentData[t].visible),
              e.modifiedComponents[t] || n['default'].set(e.modifiedComponents, t, {}),
              n['default'].set(e.modifiedComponents[t], 'visible', e.componentData[t].visible);
          },
          collapseLauncher(e) {
            if (document.documentElement.clientWidth < 800)
              if (323 == e.componentData['launcher'].width) {
                (e.componentData['launcher'].width = 32),
                  setTimeout(() => {
                    e.componentData['launcher'].x = document.documentElement.clientWidth - 32;
                  }, 10),
                  (e.componentData['launcher'].collapsed = !0);
                let t = { title: 'Collapsed the launcher', section: 'Launcher', code: 'launcher_collapse' };
                n['default'].prototype.$logEvent(t.title, t);
              } else {
                (e.componentData['launcher'].width = 323),
                  setTimeout(() => {
                    e.componentData['launcher'].x = document.documentElement.clientWidth - 323;
                  }, 10),
                  (e.componentData['launcher'].collapsed = !1);
                let t = { title: 'Expanded the launcher', section: 'Launcher', code: 'launcher_expand' };
                n['default'].prototype.$logEvent(t.title, t);
              }
            else if (620 == e.componentData['launcher'].height) {
              (e.componentData['launcher'].height = 120), (e.componentData['launcher'].collapsed = !0);
              let t = { title: 'Collapsed the launcher', section: 'Launcher', code: 'launcher_collapse' };
              n['default'].prototype.$logEvent(t.title, t);
            } else {
              (e.componentData['launcher'].height = 620), (e.componentData['launcher'].collapsed = !1);
              let t = { title: 'Expanded the launcher', section: 'Launcher', code: 'launcher_expand' };
              n['default'].prototype.$logEvent(t.title, t);
            }
          },
          handleUpsellConnect(e, t) {
            (e.componentData[t].visible = !0), (e.componentData[t].active = !0), (e.componentData['fm'].active = !1), (e.lastOpened = t);
          },
          closeComponent(e, t) {
            (e.componentData[t].active = !1), (e.componentData[t].visible = !1);
          },
          updateActive(e, t) {
            e.componentData[t.item].active = t.type;
          },
          resetActive(e) {
            b.forEach(e.componentData, e => {
              e.active = !1;
            });
          },
          updateVisible(e, t) {
            let i = !1;
            switch (t.item) {
              case 'fm':
                i = 'player';
                break;
              case 'connectnft':
                i = 'connectnft';
                break;
              case 'nftperks':
                i = 'nftperks';
                break;
              case 'launcher':
                i = 'launcher';
                break;
              case 'tv':
                i = 'TV';
                break;
              case 'shop':
                i = 'store';
                break;
              case 'social':
                i = 'social';
                break;
              case 'apps':
                i = 'apps';
                break;
              case 'guestbook':
                i = 'guestbook';
                break;
              case 'news':
                i = 'news';
                break;
              case 'connect':
                i = 'signup';
                break;
              case 'instagram':
                i = 'instagram';
                break;
              case 'about':
                i = 'about';
                break;
              case 'submit':
                i = 'submit';
                break;
              case 'texteditor':
                i = 'textedtior';
                break;
              case 'settings':
                i = 'themes';
                break;
              case 'newsletter':
                i = 'newsletter';
                break;
              case 'ios':
                i = 'ios';
                break;
              case 'mixtapes':
                i = 'mixtapes_folder';
                break;
              case 'mixtapePlayer':
                i = 'mixtapes';
                break;
            }
            let o = `${i.charAt(0).toUpperCase() + i.substring(1)}`;
            if (t.type || t.ignoreEvent);
            else {
              let e = o,
                t = o,
                a = i;
              'Mixtapes_folder' == o && ((e = 'Mixtapes folder'), (t = 'Mixtapes'), (a = 'mixtapes_folder'));
              let s = { title: `Closed ${e}`, section: `${t}`, code: `${a}_close` };
              n['default'].prototype.$logEvent(s.title, s);
            }
            if (
              ((e.componentData[t.item].visible = t.type),
              e.modifiedComponents[t.item] || n['default'].set(e.modifiedComponents, t.item, {}),
              n['default'].set(e.modifiedComponents[t.item], 'visible', t.type),
              t.secondClick)
            ) {
              n['default'].set(e.componentData[t.item], 'active', !1),
                'launcher' == t.item &&
                  document.documentElement.clientWidth < 800 &&
                  ((e.componentData['launcher'].width = 323),
                  setTimeout(() => {
                    e.componentData['launcher'].x = document.documentElement.clientWidth - 323;
                  }, 10),
                  (e.componentData['launcher'].collapsed = !1));
            }
          },
          addVideos(e, t) {
            e.componentData['tv'].data.videos = b.shuffle(t);
          },
          addLoungeText(e, t) {
            e.loungeText = t;
          },
          addInstagramItems(e, t) {
            e.componentData['instagram'].data.posts = t;
          },
          addTracks(e, t) {
            e.componentData['fm'].data.tracks = t;
          },
          addMixtapes(e, t) {
            let i = b.sortBy(t, e => e.order);
            e.componentData['mixtapes'].data.items = i;
          },
          addTeam(e, t) {
            e.componentData['about'].data.items = t;
          },
          addNews(e, t) {
            n['default'].set(e.componentData['news'].data, 'messages', t);
          },
          addReviews(e, t) {
            n['default'].set(e.componentData['apps'].data, 'reviews', t);
          },
          addReviewCounts(e, t) {
            n['default'].set(e.componentData['apps'].data, 'reviewCounts', t);
          },
          addLauncherImage(e, t) {
            n['default'].set(e.componentData['launcher'].data, 'image', t);
          },
          addWallpapers(e, t) {
            b.forEach(t, t => {
              if ('default' == t.slug) {
                e.background = t;
                const i = document.documentElement;
                i.style.setProperty('--primary', `#${t.primary}`),
                  i.style.setProperty('--secondary', `#${t.secondary}`),
                  i.style.setProperty('--tertiary', `#${t.tertiary}`),
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', `#${t.primary}`),
                  document.body.style.setProperty('background', `#${t.primary}`),
                  t.overrideBootColour && i.style.setProperty('--booterOverride', `#${t.overrideBootColour}`);
              }
            }),
              n['default'].set(e.componentData['settings'].data, 'wallpapers', t);
          },
          toggleRadio(e, t) {
            e.radioPlaying = t;
          },
          toggleMixtape(e, t) {
            e.mixtapePlaying = t;
          },
          toggleVideo(e, t) {
            e.videoPlaying = t;
          },
          updateGuestbook(e, t) {
            e.guestbookDetails = t;
          },
          initComponents(e, t) {
            b.forEach(t, (t, i) => {
              b.forEach(t, (t, o) => {
                e.componentData[i] && n['default'].set(e.componentData[i], o, t);
              });
            }),
              b.forEach(t, (t, i) => {
                e.modifiedComponents[i] || n['default'].set(e.modifiedComponents, i, {}),
                  b.forEach(t, (t, o) => {
                    n['default'].set(e.modifiedComponents[i], o, t);
                  });
              });
          },
          updateSize(e, t) {
            e.modifiedComponents[t.element] || n['default'].set(e.modifiedComponents, t.element, {}),
              n['default'].set(e.modifiedComponents[t.element], 'width', t.width),
              n['default'].set(e.modifiedComponents[t.element], 'height', t.height);
          },
          updatePosition(e, t) {
            e.modifiedComponents[t.element] || n['default'].set(e.modifiedComponents, t.element, {}),
              n['default'].set(e.modifiedComponents[t.element], 'x', t.x),
              n['default'].set(e.modifiedComponents[t.element], 'y', t.y);
          },
          updateUser(e, t) {
            e.user = t;
          },
          toggleLoader(e, t) {
            e.showLoader = t;
          },
          addSoundCloudURLS(e, t) {
            if ('faves' == t.slug) {
              let i = [];
              b.forEach(t.data, e => {
                i.push({
                  artist: e.songArtist,
                  duration_ms: e.songLength,
                  id: e.id,
                  soundcloud_id: e.id,
                  playlist: e.playlist,
                  title: e.songTitle,
                  waveform_url: !!e.waveform_url && e.waveform_url,
                  permalink_url: !!e.permalink_url && e.permalink_url
                });
              }),
                n['default'].set(e.soundcloudURLs, t.slug, i);
            } else
              n['default'].set(e.soundcloudURLs, t.slug, t.data),
                n['default'].set(e.playlistLookup, t.slug, { slug: t.slug, name: t.name, new: t.new, order: t.order });
          }
        },
        getters: {
          primaryNFTType(e, t) {
            return t.user && t['nft/primaryNFTType'];
          },
          userNFTs(e, t) {
            return t.user && t['nft/userNFTs'];
          },
          ethereumProvider(e) {
            return e.nft.ethereumProvider;
          },
          walletConnectionState(e) {
            return e.nft.connectionState;
          },
          soundcloudKeys(e) {
            return e.soundcloudKeys;
          },
          firestoreConfig: e => t => {
            let i = t.charAt(0).toUpperCase() + t.slice(1);
            return e[`firestore${i}`];
          },
          currentMixtape(e) {
            return e.currentMixtape || e.componentData['mixtapes'].data.items[0];
          },
          rateLimit(e) {
            return e.limit;
          },
          playlistNames(e) {
            return e.playlistLookup;
          },
          showingVolume(e) {
            return e.showingVolume;
          },
          clientID(e) {
            return { radio: e.soundcloudKey, mixtape: e.soundcloudKey };
          },
          getVolume(e) {
            return e.setVolume;
          },
          BSODState(e) {
            return e.showBSOD;
          },
          user(e) {
            return e.user;
          },
          guestbookDetails(e) {
            return e.guestbookDetails;
          },
          componentData(e) {
            return e.componentData;
          },
          getNews(e) {
            return e.componentData['news'].data.messages;
          },
          modifiedComponents(e) {
            return e.modifiedComponents;
          },
          loadedStatus(e) {
            return e.loadedStatus;
          },
          lastOpened(e) {
            return e.lastOpened;
          },
          radioPlaying(e) {
            return e.radioPlaying;
          },
          mixtapePlaying(e) {
            return e.mixtapePlaying;
          },
          videoPlaying(e) {
            return e.videoPlaying;
          },
          currentBackground(e) {
            return e.background;
          },
          allWallpapers(e, t) {
            let i = [];
            return (
              t.primaryNFTType
                ? b.forEach(e.componentData['settings'].data.wallpapers, (e, n) => {
                    (e.nftType && e.nftType != t.primaryNFTType) || i.push(e);
                  })
                : b.forEach(e.componentData['settings'].data.wallpapers, (e, t) => {
                    e.nftType || i.push(e);
                  }),
              i
            );
          },
          showLoader(e) {
            return e.showLoader;
          },
          soundcloudURLs(e) {
            return e.soundcloudURLs;
          },
          loungeText(e) {
            return e.loungeText;
          },
          getMixtape: e => t => e.componentData['mixtapes'].data.items.find(e => e.order === +t)
        },
        actions: {
          updateBackground({ getters: e, commit: t }, i) {
            if (i.tertiary) {
              let n = e.componentData['settings'].data.wallpapers;
              b.forEach(n, n => {
                if (i.nftType && !e.primaryNFTType) {
                  if ('default' == n.slug) {
                    t('updateBackground', n);
                    const i = document.documentElement;
                    i.style.setProperty('--primary', `#${n.primary}`),
                      i.style.setProperty('--secondary', `#${n.secondary}`),
                      i.style.setProperty('--tertiary', `#${n.tertiary}`),
                      document.querySelector('meta[name="theme-color"]').setAttribute('content', `#${n.primary}`),
                      document.body.style.setProperty('background', `#${n.primary}`),
                      n.overrideBootColour && i.style.setProperty('--booterOverride', `#${n.overrideBootColour}`);
                    let o = v.Z.firestore();
                    e.user.uid &&
                      o
                        .collection('settings')
                        .doc(e.user.uid)
                        .set({ background: !1 }, { merge: !0 })
                        .then(() => {});
                  }
                } else if (void 0 != i.nftType && i.nftType != e.primaryNFTType) {
                  if (n.slug == e.primaryNFTType) {
                    t('updateBackground', n);
                    const i = document.documentElement;
                    i.style.setProperty('--primary', `#${n.primary}`),
                      i.style.setProperty('--secondary', `#${n.secondary}`),
                      i.style.setProperty('--tertiary', `#${n.tertiary}`),
                      document.querySelector('meta[name="theme-color"]').setAttribute('content', `#${n.primary}`),
                      document.body.style.setProperty('background', `#${n.primary}`),
                      n.overrideBootColour && i.style.setProperty('--booterOverride', `#${n.overrideBootColour}`);
                    let o = v.Z.firestore();
                    e.user.uid &&
                      o
                        .collection('settings')
                        .doc(e.user.uid)
                        .set({ background: n }, { merge: !0 })
                        .then(() => {});
                  }
                } else if (n.title == i.title) {
                  t('updateBackground', n);
                  const e = document.documentElement;
                  e.style.setProperty('--primary', `#${n.primary}`),
                    e.style.setProperty('--secondary', `#${n.secondary}`),
                    e.style.setProperty('--tertiary', `#${n.tertiary}`),
                    document.querySelector('meta[name="theme-color"]').setAttribute('content', `#${n.primary}`),
                    document.body.style.setProperty('background', `#${n.primary}`),
                    n.overrideBootColour && e.style.setProperty('--booterOverride', `#${n.overrideBootColour}`);
                }
              });
            } else {
              let i = e.componentData['settings'].data.wallpapers;
              b.forEach(i, e => {
                if ('default' == e.slug) {
                  t('updateBackground', e);
                  const i = document.documentElement;
                  i.style.setProperty('--primary', `#${e.primary}`),
                    i.style.setProperty('--secondary', `#${e.secondary}`),
                    i.style.setProperty('--tertiary', `#${e.tertiary}`),
                    document.querySelector('meta[name="theme-color"]').setAttribute('content', `#${e.primary}`),
                    document.body.style.setProperty('background', `#${e.primary}`),
                    e.overrideBootColour && i.style.setProperty('--booterOverride', `#${e.overrideBootColour}`);
                }
              });
            }
          }
        }
      });
      var D = x,
        W = i(40764),
        T = i.n(W),
        k = i(91652),
        H = i.n(k),
        S = i(70712),
        C = i.n(S),
        P = i(54252),
        E = i(64429),
        z = {
          install(e, t) {
            !t || t.apiKey;
            const { apiKey: i, userId: n } = t;
            n ? E.Z.getInstance().init(i, n) : E.Z.getInstance().init(i),
              (e.prototype.$logEvent = this.logEvent),
              (e.prototype.$setUserID = this.setUserID);
          },
          logEvent(e, t) {
            t ? E.Z.getInstance().logEvent(e, t) : E.Z.getInstance().logEvent(e);
          },
          setUserID(e, t) {
            E.Z.getInstance().setUserId(e), new E.Z.Identify();
            var i = new E.Z.Identify().set('email', t);
            E.Z.getInstance().identify(i);
          }
        };
      n['default'].component('VueDraggableResizable', T()),
        n['default'].use(H()),
        n['default'].use(C()),
        n['default'].use(P.Z, { space: 'hsst7dmi6ghe', accessToken: '452OGQVYT021J2XrtM7IZHpLfuN58MpB8pTqKXOwXD0' });
      let $ = 'f7a7a035af61c508db393a44a69fe7cd';
      n['default'].use(z, { apiKey: $ }),
        (n['default'].config.productionTip = !1),
        (n['default'].config.performance = !0),
        new n['default']({ render: e => e(h), store: D, router: y }).$mount('#app');
    },
    4328: (e, t, i) => {
      var n = {
        './App.vue': [70454, 224, 289, 126],
        './Cookies.vue': [23338, 51],
        './Lounge.vue': [97268, 269],
        './Mac.vue': [42844, 496],
        './Offline.vue': [61428, 224, 455, 18],
        './Privacy.vue': [24870, 517],
        './Recess.vue': [32901, 455, 289, 511],
        './Terms.vue': [50102, 185],
        './iOS.vue': [28865, 444]
      };

      function o(e) {
        if (!i.o(n, e))
          return Promise.resolve().then(() => {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = 'MODULE_NOT_FOUND'), t);
          });
        var t = n[e],
          o = t[0];
        return Promise.all(t.slice(1).map(i.e)).then(() => i(o));
      }
      (o.keys = () => Object.keys(n)), (o.id = 4328), (e.exports = o);
    },
    24654: () => {}
  }
]);
