   // app.js
   function renderMathJax() {
       if (window.MathJax) {
           MathJax.typesetPromise()
               .then(() => {
                   console.log('MathJax typesetting complete.');
               })
               .catch((err) => {
                   console.error('MathJax typesetting failed:', err);
               });
       } else {
           console.error('MathJax is not loaded.');
       }
   }

   window.addEventListener("load", renderMathJax, false);
   