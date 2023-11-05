import __wbg_init from "./pkg/starrs_wasm.js";


const runWasm = async () => {
  const starrs = await __wbg_init("./pkg/starrs_wasm_bg.wasm");
  console.log("Running wasm method");
  starrs.run();
};
runWasm();