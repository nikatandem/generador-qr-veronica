// // utils.js
// export function getPrefixed(property) {
//     const prefixes = ['moz', 'webkit', 'ms', 'o'];
//     const prop = property.charAt(0).toUpperCase() + property.slice(1);
  
//     for (let i = 0; i < prefixes.length; i++) {
//       const prefixedProp = prefixes[i] + prop;
//       if (typeof window[prefixedProp] !== 'undefined') {
//         return window[prefixedProp];
//       }
//     }
  
//     return null;
//   }
  
//   export function timeoutDefer(callback) {
//     return setTimeout(callback, 16); // Aproximadamente 60 frames por segundo
//   }
  