// randomFonts.js

// List of font families
const fonts = [
   'ArgentPixelCF-Italic', 'ArgentPixelCF-Regular', 'Charcoal',
   'ChicagoFLF', 'chikarego2-webfont', 'Gelion Black Italic',
   'Gelion Black', 'Gelion Bold Italic', 'Gelion Bold',
   'Gelion Light Italic', 'Gelion Light', 'Gelion Medium Italic',
   'Gelion Medium', 'Gelion Regular Italic', 'Gelion',
   'Gelion SemiBold Italic', 'Gelion SemiBold', 'Gelion Thin Italic',
   'Gelion Thin', 'geneva_9', 'Inconsolata-Bold', 'Inconsolata-Regular',
   'Inconsolata', 'PerfectDOSVGA437', 'PixelArial11', 'pixelmix_bold',
   'pixelmix', 'Pixolde-Bold', 'Pixolde', 'Yoster-Island-Regular', 'ka1', ''
];

// Function to apply a random font family to each element
function applyRandomFontsToElements() {
   const elements = document.querySelectorAll('*');
   elements.forEach(element => {
      // Check if the element has the data-permanent-font attribute or the permanent-font class
      if (!element.hasAttribute('data-permanent-font') && !element.classList.contains('permanent-font')) {
         const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
         element.style.fontFamily = randomFont;
      }
   });
}

// Apply random fonts on page load
window.onload = applyRandomFontsToElements;
