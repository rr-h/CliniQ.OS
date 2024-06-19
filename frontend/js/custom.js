(function(o, c) {
   var n = c.documentElement,
       t = " w-mod-";
   n.className += t + "js";
   ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch")
})(window, document);

function toggleFullScreen() {
   if (!document.fullscreenElement) {
       document.documentElement.requestFullscreen();
   } else if (document.exitFullscreen) {
       document.exitFullscreen();
   }
}
