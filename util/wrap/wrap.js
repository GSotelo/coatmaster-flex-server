const wrap = fn => (...args) => fn(...args).catch(args[2]);

module.exports = wrap;

// This what's happening behind the scenes when "wrap" function is defined
// const wrap = fn => {
//   return function (...args) {
//     return fn(...args).catch(args[2]);
//   }
// }

