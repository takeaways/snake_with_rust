const init = async () => {
  const response = await fetch("./wasm/sum.wasm");
  const buffer = await response.arrayBuffer();
  const wasm = await WebAssembly.instantiate(buffer);
  const add = wasm.instance.exports.add;
  console.log(add(10, 20));
};
init();
