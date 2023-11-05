/* tslint:disable */
/* eslint-disable */
/**
* @returns {Promise<void>}
*/
export function run(): Promise<void>;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly run: () => number;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly wasm_bindgen__convert__closures__invoke1_mut__h1debc4b3cc83f802: (a: number, b: number, c: number) => void;
  readonly wasm_bindgen__convert__closures__invoke0_mut__hcee183553b66ac15: (a: number, b: number) => void;
  readonly wasm_bindgen__convert__closures__invoke2_mut__h2f6faa601ffab7ec: (a: number, b: number, c: number, d: number) => void;
  readonly wasm_bindgen__convert__closures__invoke0_mut__heec6dbee74bd0f1c: (a: number, b: number) => void;
  readonly wasm_bindgen__convert__closures__invoke1_mut__h6d422035efd2510b: (a: number, b: number, c: number) => void;
  readonly wasm_bindgen__convert__closures__invoke1_mut__h11adfb90cb57c057: (a: number, b: number, c: number) => void;
  readonly wasm_bindgen__convert__closures__invoke1_mut__h7c0b06ed6c1a7122: (a: number, b: number, c: number) => void;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly wasm_bindgen__convert__closures__invoke2_mut__h07eee023447b62f3: (a: number, b: number, c: number, d: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
