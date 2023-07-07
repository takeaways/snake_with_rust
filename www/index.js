const init = async () => {
  const importObject = {
    console: {
      log: () => {
        console.log("Just Logging Something!");
      },
      error: () => {
        console.error("Just Logging Something!");
      },
    },
  };

  const response = await fetch("./wasm/sumWithMemory.wasm");
  const buffer = await response.arrayBuffer();
  const wasm = await WebAssembly.instantiate(buffer, importObject);
  const sum = wasm.instance.exports.sum;
  const wasmMemory = wasm.instance.exports.mem;

  const uint8Array = new Uint8Array(wasmMemory.buffer, 0, 2);
  const hiText = new TextDecoder().decode(uint8Array);
  console.log(`hiText:${hiText}`);

  console.log(sum(10, 20));
};
init();
