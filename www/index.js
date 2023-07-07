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

  const response = await fetch("./wasm/sumWithLog.wasm");
  const buffer = await response.arrayBuffer();
  const wasm = await WebAssembly.instantiate(buffer, importObject);
  const sum = wasm.instance.exports.sum;
  console.log(sum(10, 20));
};
init();
