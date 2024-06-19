# CliniQ.OS

## Overview
CliniQ.OS is a comprehensive system designed to manage clinical operations effectively. The project is divided into backend and frontend directories, each responsible for different aspects of the application.

## Project Structure
.
├── backend
│   ├── app.js
│   ├── components
│   ├── controllers
│   │   └── DataController.js
│   ├── models
│   │   └── DataModel.js
│   ├── package.json
│   ├── package-lock.json
│   ├── public
│   ├── routes
│   │   └── index.js
│   ├── server.js
│   └── utils
│       └── database.js
├── frontend
│   ├── assets
│   ├── components
│   │   ├── EventHandler.js
│   │   └── UIComponents.js
│   ├── CQ.OS_UI
│   │   ├── assets
│   │   │   ├── animations
│   │   │   │   ├── anim_abdoCT_compressed.gif
│   │   │   │   ├── anim_abdoCT.gif
│   │   │   │   ├── anim_applause.gif
│   │   │   │   ├── anim_boundingBox2.gif
│   │   │   │   ├── anim_brainCT.gif
│   │   │   │   ├── anim_brainScan_compressed.gif
│   │   │   │   ├── anim_cartoonCards.gif
│   │   │   │   ├── anim_confused.gif
│   │   │   │   ├── anim_cookieMonster.gif
│   │   │   │   ├── anim_intro.gif
│   │   │   │   ├── anim_loading.gif
│   │   │   │   ├── anim_singer.gif
│   │   │   │   ├── anim_space.gif
│   │   │   │   ├── sprt_tickbox.png
│   │   │   │   └── sprt_tick.png
│   │   │   ├── ascii.html
│   │   │   ├── audio
│   │   │   │   └── aud_mouseClick.mp3
│   │   │   ├── buttons
│   │   │   │   ├── btn_back.svg
│   │   │   │   ├── btn_exit.svg
│   │   │   │   ├── btn_next.svg
│   │   │   │   ├── btn_pause.svg
│   │   │   │   ├── btn_play.svg
│   │   │   │   └── btn_stop.svg
│   │   │   ├── cliniq.apps
│   │   │   │   ├── 691505f37ca6013c44460d712067b667.jpg
│   │   │   │   ├── derm.jpg
│   │   │   │   ├── dev.jpg
│   │   │   │   ├── endo.jpg
│   │   │   │   ├── ent.jpg
│   │   │   │   ├── gastro.jpg
│   │   │   │   ├── haem.jpg
│   │   │   │   ├── heart.jpg
│   │   │   │   ├── icons2.jpg
│   │   │   │   ├── icons.jpg
│   │   │   │   ├── immun.jpg
│   │   │   │   ├── lungs.jpg
│   │   │   │   ├── msk.jpg
│   │   │   │   ├── neuro.jpg
│   │   │   │   ├── OBGyn.jpg
│   │   │   │   ├── ophth.jpg
│   │   │   │   ├── psych.jpg
│   │   │   │   ├── renal.jpg
│   │   │   │   ├── rheum.jpg
│   │   │   │   └── uro.jpg
│   │   │   ├── CliniQ.OS.ascii_med.txt
│   │   │   ├── CliniQ.OS.ascii.txt
│   │   │   ├── cursors
│   │   │   │   ├── cursor_drag.png
│   │   │   │   ├── cursor_enlarge.png
│   │   │   │   ├── cursor_main.jpg
│   │   │   │   ├── cursor_main.png
│   │   │   │   ├── cursor_pointer.svg
│   │   │   │   ├── cursor_point.png
│   │   │   │   ├── cursor_retroClick.svg
│   │   │   │   ├── cursor_retroHand.svg
│   │   │   │   ├── cursor_text.svg
│   │   │   │   └── cursor_touch.png
│   │   │   ├── docs
│   │   │   │   ├── doc_leaflet11.jpg
│   │   │   │   ├── doc_leaflet12.jpg
│   │   │   │   ├── doc_leaflet13_large.jpeg
│   │   │   │   ├── doc_leaflet14_large.jpeg
│   │   │   │   ├── doc_leaflet18.jpg
│   │   │   │   ├── doc_leaflet1.jpeg
│   │   │   │   ├── doc_leaflet2.jpg
│   │   │   │   ├── doc_leaflet3.jpg
│   │   │   │   ├── doc_leaflet3_large.jpeg
│   │   │   │   ├── doc_leaflet5_large.jpeg
│   │   │   │   ├── doc_leaflet7.jpg
│   │   │   │   └── doc_leaflet9.jpg
│   │   │   ├── elements
│   │   │   │   ├── lmnt_barPicker.svg
│   │   │   │   ├── lmnt_barResizer.svg
│   │   │   │   ├── lmnt_border.svg
│   │   │   │   ├── lmnt_bow.svg
│   │   │   │   ├── lmnt_btnBorderLeft.svg
│   │   │   │   ├── lmnt_btnBorderRight.svg
│   │   │   │   ├── lmnt_buttonMainBorder.svg
│   │   │   │   ├── lmnt_buttonTopBorder.svg
│   │   │   │   ├── lmnt_close.svg
│   │   │   │   ├── lmnt_down.svg
│   │   │   │   ├── lmnt_drpdwnBorderLeft.svg
│   │   │   │   ├── lmnt_drpdwnBorderRight.svg
│   │   │   │   ├── lmnt_drpdwnMainBorder.svg
│   │   │   │   ├── lmnt_drpdwn.svg
│   │   │   │   ├── lmnt_drpdwnTopBorder.svg
│   │   │   │   ├── lmnt_EQBar.svg
│   │   │   │   ├── lmnt_halftoneTxtr.svg
│   │   │   │   ├── lmnt_left.svg
│   │   │   │   ├── lmnt_meshTxtr.svg
│   │   │   │   ├── lmnt_noiseTxtr.png
│   │   │   │   ├── lmnt_pixel.svg
│   │   │   │   ├── lmnt_playDrag.svg
│   │   │   │   ├── lmnt_rectangle1.svg
│   │   │   │   ├── lmnt_rectangle2.svg
│   │   │   │   ├── lmnt_rectangle.svg
│   │   │   │   ├── lmnt_right.svg
│   │   │   │   ├── lmnt_screenVU.svg
│   │   │   │   ├── lmnt_tabSliderBlack.svg
│   │   │   │   ├── lmnt_tabSliderWhite.svg
│   │   │   │   ├── lmnt_tab.svg
│   │   │   │   ├── lmnt_tick.svg
│   │   │   │   ├── lmnt_topBar.svg
│   │   │   │   ├── lmnt_up.svg
│   │   │   │   ├── lmnt_windowBar.svg
│   │   │   │   ├── lmnt_windowFrameSlider.svg
│   │   │   │   └── lmnt_zoom.svg
│   │   │   ├── icons
│   │   │   │   ├── favicon2.png
│   │   │   │   ├── favicon3.png
│   │   │   │   ├── favicon4.png
│   │   │   │   ├── favicon_ric.svg
│   │   │   │   ├── icon_bold.svg
│   │   │   │   ├── icon_cdROM.jpg
│   │   │   │   ├── icon_comp.jpg
│   │   │   │   ├── icon_desktop_green.jpg
│   │   │   │   ├── icon_desktop.jpg
│   │   │   │   ├── icon_downloadBlack.png
│   │   │   │   ├── icon_downloadWhite.png
│   │   │   │   ├── icon_eyeBlack.png
│   │   │   │   ├── icon_eyeWhite.png
│   │   │   │   ├── icon_folder.jpg
│   │   │   │   ├── icon_folderSmall.svg
│   │   │   │   ├── icon_headphonesBlack.png
│   │   │   │   ├── icon_headphonesWhite.png
│   │   │   │   ├── icon_infoBlack.png
│   │   │   │   ├── icon_infoWhite.png
│   │   │   │   ├── icon_internetExplorer.jpg
│   │   │   │   ├── icon_internetExplorer.svg
│   │   │   │   ├── icon_left.svg
│   │   │   │   ├── icon_lighbulb.svg
│   │   │   │   ├── icon_log.svg
│   │   │   │   ├── icon_ltr_M.png
│   │   │   │   ├── icon_mail.jpg
│   │   │   │   ├── icon_mail.svg
│   │   │   │   ├── icon_monitor_bw.svg
│   │   │   │   ├── icon_monitor_col.svg
│   │   │   │   ├── icon_network.svg
│   │   │   │   ├── icon_notepad.jpg
│   │   │   │   ├── icon_notepad.svg
│   │   │   │   ├── icon_partnerHub.png
│   │   │   │   ├── icon_phone.jpg
│   │   │   │   ├── icon_photoshop.svg
│   │   │   │   ├── icon_radio.jpg
│   │   │   │   ├── icon_radio.svg
│   │   │   │   ├── icon_reduce.svg
│   │   │   │   ├── icon_refreshBlack.png
│   │   │   │   ├── icon_refreshWhite.png
│   │   │   │   ├── icon_register.svg
│   │   │   │   ├── icon_scrapbook.svg
│   │   │   │   ├── icon_undoBlack.png
│   │   │   │   ├── icon_undoWhite.png
│   │   │   │   ├── icon_wordDoc_green.jpg
│   │   │   │   ├── icon_wordDoc.jpg
│   │   │   │   ├── icon_world.jpg
│   │   │   │   └── icon_world.svg
│   │   │   ├── logo
│   │   │   │   ├── logo_apteo.png
│   │   │   │   ├── logo_cycle.png
│   │   │   │   ├── logo_KMC.png
│   │   │   │   └── logo_ltr_M.png
│   │   │   └── photo
│   │   │       ├── pht_background.png
│   │   │       ├── pht_barry.jpeg
│   │   │       ├── pht_bikePortrait.jpg
│   │   │       ├── pht_bikeportrait_large.jpeg
│   │   │       ├── pht_canonical_bridge.png
│   │   │       ├── pht_canonical_car.png
│   │   │       ├── pht_canonical_other.png
│   │   │       ├── pht_canonical_road.png
│   │   │       ├── pht_canonical_speed_limit.png
│   │   │       ├── pht_canonical_stop_sign.jpg
│   │   │       ├── pht_canonical_street_name.png
│   │   │       ├── pht_maradona.jpg
│   │   │       ├── pht_oldComp.jpg
│   │   │       ├── pht_pavarotti.jpg
│   │   │       ├── pht_portraitJapan.jpg
│   │   │       ├── pht_portraitJapan_large.jpg
│   │   │       ├── pht_portraitMountain.jpeg
│   │   │       ├── pht_portraitMountain_large.jpeg
│   │   │       ├── pht_truck_large.png
│   │   │       ├── pht_truck.png
│   │   │       ├── pht_vaporwaveBuilding.jpg
│   │   │       ├── pht_vaporwaveBuilding_large.jpeg
│   │   │       └── pht_winampScreen.svg
│   │   ├── css
│   │   │   ├── cliniq_OS.min.css
│   │   │   ├── fonts.css
│   │   │   ├── pipToggle.css
│   │   │   ├── styles.css
│   │   │   └── videocontrols.css
│   │   ├── dev notes.txt
│   │   ├── fonts
│   │   │   ├── ArgentPixelCF-Italic.2b29216b.woff
│   │   │   ├── ArgentPixelCF-Italic.bc910b13.woff2
│   │   │   ├── ArgentPixelCF-Regular.176c6c35.woff2
│   │   │   ├── ArgentPixelCF-Regular.a2402249.woff
│   │   │   ├── Charcoal.ttf
│   │   │   ├── ChicagoFLF.ttf
│   │   │   ├── chikarego2-webfont.4bddfe2b.woff2
│   │   │   ├── chikarego2-webfont.6df24b2b.woff
│   │   │   ├── Corepix.ttf
│   │   │   ├── corruptPixel.ttf
│   │   │   ├── Gelion Black Italic.ttf
│   │   │   ├── Gelion Black.ttf
│   │   │   ├── Gelion Bold Italic.ttf
│   │   │   ├── Gelion Bold.ttf
│   │   │   ├── Gelion Light Italic.ttf
│   │   │   ├── Gelion Light.ttf
│   │   │   ├── Gelion Medium Italic.ttf
│   │   │   ├── Gelion Medium.ttf
│   │   │   ├── Gelion Regular Italic.ttf
│   │   │   ├── Gelion Regular.ttf
│   │   │   ├── Gelion SemiBold Italic.ttf
│   │   │   ├── Gelion SemiBold.ttf
│   │   │   ├── Gelion Thin Italic.ttf
│   │   │   ├── Gelion Thin.ttf
│   │   │   ├── geneva_9.ttf
│   │   │   ├── Inconsolata-Bold.woff2
│   │   │   ├── Inconsolata-Regular.woff2
│   │   │   ├── ka1.ttf
│   │   │   ├── PerfectDOSVGA437.30b3c1a1.woff
│   │   │   ├── PerfectDOSVGA437.bfbcfb6f.woff2
│   │   │   ├── PixelArial11.9aa373a1.woff
│   │   │   ├── PixelArial11.f2feb7e4.woff2
│   │   │   ├── pixel-lcd.ttf
│   │   │   ├── pixelmix_bold.ttf
│   │   │   ├── pixelmix.ttf
│   │   │   ├── Pixolde.3a826705.woff
│   │   │   ├── Pixolde-Bold.f3a0de15.woff
│   │   │   └── YosterIslandRegular-VqMe.ttf
│   │   ├── index23.html
│   │   ├── index.html
│   │   ├── index.html.bak
│   │   ├── js
│   │   │   ├── additional-methods.min.js
│   │   │   ├── cliniq_OS.webflow.js
│   │   │   ├── jquery-3.3.1.min.js
│   │   │   ├── jquery-3.5.1.js
│   │   │   ├── jquery-ui.min.js
│   │   │   ├── jquery.validate.min.js
│   │   │   ├── main.js
│   │   │   ├── randomFonts.js
│   │   │   ├── select.menu.custom.js
│   │   │   └── widget.js
│   │   └── todo
│   │       ├── 0b3c567967fe1371e86f022041fbe70f.jpg
│   │       ├── 1485a9a340c2d6f0fcc94ded79bab468.jpg
│   │       ├── 2e49cc73f92cf2b1b56067be397c0bec.jpg
│   │       ├── 33ba158b7195563afef733ee090b446f.jpg
│   │       ├── 55240ae19c6538e2d64dbcc09694d6a3.jpg
│   │       ├── 55841cc4ddf6006d689c189966c6b6c7.jpg
│   │       ├── 586ec7d5e43b481e508d95985963ae27.jpg
│   │       ├── 6c7031d8fea9f89a8d3e6b7b09709b81.jpg
│   │       ├── 746ea6fac6f027326848ea9813522909.gif
│   │       ├── 957e089b194c7be7a6fe622b7aae2848.jpg
│   │       ├── background2.jpg
│   │       ├── background.jpg
│   │       ├── d189abfda55667a374dd30ae306160a1.gif
│   │       ├── d23044c89553d57d32545b8131064e46.jpg
│   │       ├── d50f84e35af78611e73562aee4e3c097.jpg
│   │       ├── dc067f41dcebd328a2ef9a64f08770aa.jpg
│   │       ├── e599480152a6c00b7be21d807070f2ae.jpg
│   │       ├── elements.jpg
│   │       ├── f555c91e3e2de92c16bf4153f788d50d.jpg
│   │       ├── glitch.jpg
│   │       ├── icons2.jpg
│   │       ├── icons3.jpg
│   │       ├── icons-green.jpg
│   │       ├── icons.jpg
│   │       ├── intro2.gif
│   │       ├── intro3.gif
│   │       ├── list of diseases should be like this_.jpg
│   │       ├── make each disease a tab here.jpg
│   │       ├── make floppy disks for each specality.jpg
│   │       ├── maybe use these as diseases_.jpg
│   │       ├── medwave.jpg
│   │       ├── modular display for the disease info.jpg
│   │       ├── modular.jpg
│   │       ├── mri.gif
│   │       ├── UI-purple.jpg
│   │       └── wallpaper.jpg
│   ├── index.html
│   ├── main.js
│   ├── package.json
│   ├── package-lock.json
│   ├── styles
│   ├── UI_Inspo
│   │   ├── 01c3a9b7166922ee19b5b4cb9610b343.jpg
│   │   ├── 07fcdb97592743cea0d219ba17f6a624.jpg
│   │   ├── 0c36e7199966893.665fb649f289f.gif
│   │   ├── 11b31f97e83a0d6686efd38f16840c4b.jpg
│   │   ├── 1_2-o.jpg
│   │   ├── 1349f1c16e606201d64a640378d6077c.jpg
│   │   ├── 13a769435c855ea10f4f8e68cb3373c2.jpg
│   │   ├── 17705daecd2c1df9b31d96b9d571d739.jpg
│   │   ├── 18cab0199966893.665fdaa77394b.gif
│   │   ├── 1e0348199966893.665fd23dbfd4e.gif
│   │   ├── 1-o6.jpg
│   │   ├── 1-o.jpg
│   │   ├── 1-oy.jpg
│   │   ├── 21b3bc63f31e4421dc97f1f091e67e06.jpg
│   │   ├── 27082-004-1EFDACB3.webp
│   │   ├── 2726a3cc563a79f8b06be4f74e124dd7.jpg
│   │   ├── 2b37bb407f3502a3588d80bac2cd4a0d.jpg
│   │   ├── 2d378b1c7259de9052bad7f451a7721d.jpg
│   │   ├── 2de0b9f9e02e2deeb469a682e870d087.jpg
│   │   ├── 34536a4972c7cbec3bc4313167e93010.jpg
│   │   ├── 358617bf8391087a7dc46e9a2ef56865.jpg
│   │   ├── 3c07dc4d4e20cc795f3b2a340a226795.jpg
│   │   ├── 3d4ae2cdcf5f4a2b13ac06265ded83ec.jpg
│   │   ├── 3df68f8841a24d252f352fd5f8bfb6be.jpg
│   │   ├── 3-o.jpg
│   │   ├── 413d8e200280581.666a1b7539ea6.gif
│   │   ├── 41799e5f764883ae8446bb4b04839dc9.jpg
│   │   ├── 41f88555f7ccffd8b291190fd9aff650.jpg
│   │   ├── 44efe59caee7fd453b8d81e19ad596f4.jpg
│   │   ├── 45cca05ac77d86d1789510c9746b199a.jpg
│   │   ├── 483723e0f94bd43ef7b9716aa0d3ce86.gif
│   │   ├── 4b94a46b7c2a25ff95aae9f2e50808d2.jpg
│   │   ├── 509ed32f2029df791017d87cf4410eb5.jpg
│   │   ├── 515cdd32b65f301fc9a86b50a15ffbb7.jpg
│   │   ├── 5209177eab745bc783a7ccee7d28358b.jpg
│   │   ├── 55be8690b844da9b53269171d3aaea10.gif
│   │   ├── 5c01f374e2cb2aa6757e1c0fb7e0ad4c.jpg
│   │   ├── 5c172af1bb018f6bff078a6261a75006.jpg
│   │   ├── 62bf06b986815095a75871fb8663acef.jpg
│   │   ├── 62d7a588191f28a979f26f71033dedc1.jpg
│   │   ├── 65be5feca95b3951bd3b9ce70a08cea7.jpg
│   │   ├── 6d301f72b775d6ce1583117cc804bb33.jpg
│   │   ├── 6ec905200280581.666ab39fa3d6e.gif
│   │   ├── 6eeec95c4c96d13d8e5e817b36eb0c46.jpg
│   │   ├── 74b0b5200280581.666a249e958ea.gif
│   │   ├── 7795f10fbaac13393fa521d1f6d835cf.jpg
│   │   ├── 791e81875cc93fcfd633d67a7f4616cb.jpg
│   │   ├── 7b48deb83d5563e214e4424d8e3308aa.jpg
│   │   ├── 7f7a31200280581.666aaff20de5e.gif
│   │   ├── 7f80c58d14ea24cfec58078aeeeddd3a.jpg
│   │   ├── 7fb050199966893.665fd6d89fb7e.gif
│   │   ├── 80015a2842b87ff38cbc8043eacad1ca.jpg
│   │   ├── 81f323237c0508629c58a5c556112ba4.jpg
│   │   ├── 8712fe72c0b100c6c2abad8c55e6e715.jpg
│   │   ├── 8b993eccc7b6852900116a23efd4d0b2.jpg
│   │   ├── 957790f45572ca352729052fc43cc453.gif
│   │   ├── 9a1c20b36b8d20d425647b8716aeb614.jpg
│   │   ├── 9da4d47d154b5090c62b6faa6b6cb498.jpg
│   │   ├── 9da67e11c2d13b5cf64b27d9c5e0c7d8.jpg
│   │   ├── a18c3fba9eb6f819b6f6a6634e0e0a2c.jpg
│   │   ├── a3eaf84466f00c44ec7df0d06d6f52e3.jpg
│   │   ├── a69ea4cd263b923361994786747c76cb.jpg
│   │   ├── a995b825e2f75b0067ee3b4c8753b099.jpg
│   │   ├── aa617c88528486727344ebb8d51e7ee6.jpg
│   │   ├── b2348566123332501c1488a7c6dd0b4f.jpg
│   │   ├── b2a1030edaa78465ccc6e5ca81f5f74e.jpg
│   │   ├── b4c1253615c21773fec074b03c422b06.gif
│   │   ├── bc308987806d1f7c8ea34bcbb120878f.jpg
│   │   ├── bc4daf284742d7865aff17c5ddcbea8b.jpg
│   │   ├── bcb044a9ac7fc91b4909463ba0dc33bf.jpg
│   │   ├── be7927927dabbe7e0641c1136a798a37.jpg
│   │   ├── c8cb0cfe766f3af6d9d028af185e8fa8.jpg
│   │   ├── ca62628a778246d30459e720a44714fd.jpg
│   │   ├── ca8eeee45024179fc8cefa296bf62cdf.gif
│   │   ├── ce6ca1af0eafff5fda1a591a6d8511d6.jpg
│   │   ├── cf5f47c4d2d3c4c2b1cee2e9e08d676c.gif
│   │   ├── d1df2b255a46b00f6f53c39b964dd2fd.jpg
│   │   ├── d6f74e6672fe73d589a29c84e9a28fd2.jpg
│   │   ├── d90d7ed248aefeae4148c4cfe616ba84.gif
│   │   ├── d92e76199966893.665fd23dbf772.gif
│   │   ├── de30e4200280581.Y3JvcCw4NTksNjcyLDIyMyww.png
│   │   ├── doctor_watson.png
│   │   ├── e1813b0368a005f1a430f3cd87edb335.jpg
│   │   ├── e373a3c8d707e7b724dc81f0f2d44c00.jpg
│   │   ├── e71805a9a32b21567da43dbf6a5b94f3.jpg
│   │   ├── e89c7f2629f14763ac29f38688d275ae.jpg
│   │   ├── e941f60a347eebeeb52933bd576f5851.jpg
│   │   ├── ea58e121aac6013c71d8872cea3dae9f.jpg
│   │   ├── ebfe99f278e4ffc4b90c67c0b9cd4f44.gif
│   │   ├── ec1e01032b4646afd2a4c1e4e8aa815c.jpg
│   │   ├── edea34200280581.666a260d6e7aa.gif
│   │   ├── f1734dc5627170484c55d24818657d61.jpg
│   │   ├── f1f69d200280581.666aafdc0e235.gif
│   │   ├── f6d290a15e776e6631873f061918bcc5.jpg
│   │   ├── f7a71153522d7a4d28a6b01c31e18629.jpg
│   │   ├── f93921de02045393db9327782a9c45bc.jpg
│   │   ├── fad30efb0fd58d6745283f9da2ca45ed.jpg
│   │   ├── fc428f200280581.66651147a5664.gif
│   │   ├── fd751e767201997b630f18558e031cb6.jpg
│   │   ├── font.jpg
│   │   ├── maxresdefault.jpg
│   │   ├── WORKINGCOPY.html
│   │   └── WORKING COPY.png
│   ├── utils
│   │   ├── dataFetcher.js
│   │   └── dataProcessor.js
│   └── webpack.config.js
├── Lemon
│   ├── assets
│   │   ├── art
│   │   │   ├── art_airborne.png
│   │   │   ├── art_baloondrop.png
│   │   │   ├── art_brickwall.png
│   │   │   ├── art_cool.png
│   │   │   ├── art_faucet.png
│   │   │   ├── art_observant.png
│   │   │   ├── art_planet.png
│   │   │   ├── art_thirsty.png
│   │   │   └── art_wowFace.png
│   │   ├── elements
│   │   │   ├── lmnt_exit.svg
│   │   │   └── lmnt_starfield_txtr.png
│   │   ├── icons
│   │   │   ├── icon_cloud2.png
│   │   │   ├── icon_cloud3.png
│   │   │   ├── icon_cloud.png
│   │   │   ├── icon_fingers.png
│   │   │   ├── icon_glass_large.png
│   │   │   ├── icon_glass_med.png
│   │   │   ├── icon_L-favicon_large.png
│   │   │   └── icon_L-favicon.png
│   │   └── logos
│   │       └── logo_1.svg
│   ├── index.html
│   ├── js
│   │   ├── jquery-3.5.1.min.js
│   │   ├── lemon.webflow.js
│   │   ├── mapbox-gl.js
│   │   ├── placeholders.min.js
│   │   └── shiv.min.js
│   ├── seed1.png
│   ├── seed2.jpg
│   ├── seed3.jpg
│   ├── seed4.jpg
│   ├── seed5-hoggorm-1999.png
│   ├── seed5.jpg
│   └── styles
│       ├── fontAll.css
│       ├── mapbox-gl.css
│       └── normalise.css
├── middleware
│   ├── auth.js
│   ├── logger.js
│   ├── package.json
│   └── package-lock.json
├── package.json
├── package-lock.json
└── README.md

39 directories, 433 files

## Setup

### Prerequisites
- Node.js
- npm (Node Package Manager)

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/rr-h/CliniQ.OS.git
    ```

2. **Backend Setup**:
    - Navigate to the backend directory:
        ```bash
        cd backend
        ```
    - Install dependencies:
        ```bash
        npm install
        ```
    - Create a `.env` file in the `backend` directory with the following variables:
        ```env
        PORT=5000
        DATABASE_URL=<your_database_url>
        ```

3. **Frontend Setup**:
    - Navigate to the frontend directory:
        ```bash
        cd ../frontend
        ```
    - Install dependencies:
        ```bash
        npm install
        ```
    - Update the API endpoint in `utils/dataFetcher.js` if necessary.

4. **Middleware Setup** (if applicable):
    - Navigate to the middleware directory:
        ```bash
        cd ../middleware
        ```
    - Install dependencies:
        ```bash
        npm install
        ```

### Running the Application

1. **Start the backend server**:
    ```bash
    cd backend
    npm start
    ```

2. **Start the frontend server**:
    ```bash
    cd ../frontend
    npm start
    ```

## Project Structure Details

### Backend

- **app.js**: Entry point for the backend application.
- **components/**: Contains reusable components like middleware, services, etc.
- **controllers/**: Handles requests and responses, e.g., `DataController.js`.
- **models/**: Defines data schemas, e.g., `DataModel.js`.
- **routes/**: Defines API endpoints, e.g., `index.js`.
- **utils/**: Contains utility functions, e.g., `database.js`.
- **public/**: Serves static files.

### Frontend

- **CliniQ.OS_UI/**: Contains all UI-related files including assets, styles, and scripts.
- **components/**: Contains reusable UI components, e.g., `EventHandler.js`, `UIComponents.js`.
- **utils/**: Contains utility functions for data fetching and processing, e.g., `dataFetcher.js`, `dataProcessor.js`.
- **index.html**: Main HTML file.
- **main.js**: Entry point for the frontend application.
- **css/**: Contains CSS files for styling the application.
- **js/**: Contains JavaScript files and libraries.

### Middleware

- **auth.js**: Middleware for authentication.
- **logger.js**: Middleware for logging requests.

## Usage

Provide usage instructions and examples here. Include how to interact with the API, the available endpoints, and any relevant details on how to use the frontend application.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Push to your fork.
5. Create a pull request.

## License

Specify the license under which the project is released. For example:

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.