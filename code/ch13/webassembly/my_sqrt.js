let response = await fetch("my_sqrt.wasm");
let ab = await response.arrayBuffer();
let wasm = await WebAssembly.instantiate(ab, {});
let my_sqrt = wasm.instance.exports.my_sqrt;
console.log(42, my_sqrt(42));
