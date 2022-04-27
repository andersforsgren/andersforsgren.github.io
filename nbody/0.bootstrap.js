(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/wasm_nbody.js":
/*!****************************!*\
  !*** ../pkg/wasm_nbody.js ***!
  \****************************/
/*! exports provided: greet, Universe, __wbg_alert_b2f5500f3f9eddb1, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wasm_nbody_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_nbody_bg.wasm */ \"../pkg/wasm_nbody_bg.wasm\");\n/* harmony import */ var _wasm_nbody_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wasm_nbody_bg.js */ \"../pkg/wasm_nbody_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"greet\", function() { return _wasm_nbody_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"greet\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Universe\", function() { return _wasm_nbody_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Universe\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_alert_b2f5500f3f9eddb1\", function() { return _wasm_nbody_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_alert_b2f5500f3f9eddb1\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _wasm_nbody_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n\n\n\n//# sourceURL=webpack:///../pkg/wasm_nbody.js?");

/***/ }),

/***/ "../pkg/wasm_nbody_bg.js":
/*!*******************************!*\
  !*** ../pkg/wasm_nbody_bg.js ***!
  \*******************************/
/*! exports provided: greet, Universe, __wbg_alert_b2f5500f3f9eddb1, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"greet\", function() { return greet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Universe\", function() { return Universe; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_alert_b2f5500f3f9eddb1\", function() { return __wbg_alert_b2f5500f3f9eddb1; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _wasm_nbody_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_nbody_bg.wasm */ \"../pkg/wasm_nbody_bg.wasm\");\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _wasm_nbody_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_wasm_nbody_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nlet cachegetInt32Memory0 = null;\nfunction getInt32Memory0() {\n    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _wasm_nbody_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetInt32Memory0 = new Int32Array(_wasm_nbody_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetInt32Memory0;\n}\n/**\n*/\nfunction greet() {\n    _wasm_nbody_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"greet\"]();\n}\n\n/**\n*/\nclass Universe {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Universe.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _wasm_nbody_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_universe_free\"](ptr);\n    }\n    /**\n    * @returns {Universe}\n    */\n    static new() {\n        const ret = _wasm_nbody_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_new\"]();\n        return Universe.__wrap(ret);\n    }\n    /**\n    * @returns {number}\n    */\n    width() {\n        const ret = _wasm_nbody_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_height\"](this.ptr);\n        return ret;\n    }\n    /**\n    * @returns {number}\n    */\n    height() {\n        const ret = _wasm_nbody_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_height\"](this.ptr);\n        return ret;\n    }\n    /**\n    * @returns {number}\n    */\n    num_particles() {\n        const ret = _wasm_nbody_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_num_particles\"](this.ptr);\n        return ret;\n    }\n    /**\n    * @returns {number}\n    */\n    px() {\n        const ret = _wasm_nbody_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_px\"](this.ptr);\n        return ret;\n    }\n    /**\n    * @returns {number}\n    */\n    py() {\n        const ret = _wasm_nbody_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_py\"](this.ptr);\n        return ret;\n    }\n    /**\n    */\n    tick() {\n        _wasm_nbody_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_tick\"](this.ptr);\n    }\n    /**\n    * @returns {string}\n    */\n    render() {\n        try {\n            const retptr = _wasm_nbody_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](-16);\n            _wasm_nbody_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"universe_render\"](retptr, this.ptr);\n            var r0 = getInt32Memory0()[retptr / 4 + 0];\n            var r1 = getInt32Memory0()[retptr / 4 + 1];\n            return getStringFromWasm0(r0, r1);\n        } finally {\n            _wasm_nbody_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_add_to_stack_pointer\"](16);\n            _wasm_nbody_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](r0, r1);\n        }\n    }\n}\n\nfunction __wbg_alert_b2f5500f3f9eddb1(arg0, arg1) {\n    alert(getStringFromWasm0(arg0, arg1));\n};\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/wasm_nbody_bg.js?");

/***/ }),

/***/ "../pkg/wasm_nbody_bg.wasm":
/*!*********************************!*\
  !*** ../pkg/wasm_nbody_bg.wasm ***!
  \*********************************/
/*! exports provided: memory, __wbg_universe_free, universe_new, universe_height, universe_num_particles, universe_px, universe_py, universe_tick, universe_render, greet, universe_width, __wbindgen_add_to_stack_pointer, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./wasm_nbody_bg.js */ \"../pkg/wasm_nbody_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/wasm_nbody_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var wasm_nbody__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! wasm-nbody */ \"../pkg/wasm_nbody.js\");\n/* harmony import */ var wasm_nbody_wasm_nbody_bg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wasm-nbody/wasm_nbody_bg */ \"../pkg/wasm_nbody_bg.wasm\");\n\r\n\r\n\r\nconst canvas = document.getElementById(\"nbody-canvas\");\r\nconst universe = wasm_nbody__WEBPACK_IMPORTED_MODULE_0__[\"Universe\"].new();\r\nconst width = universe.width();\r\nconst height = universe.height();\r\nconst N = universe.num_particles();\r\nconst pxPtr = universe.px();\r\nconst pyPtr = universe.py();\r\nconst px = new Float32Array(wasm_nbody_wasm_nbody_bg__WEBPACK_IMPORTED_MODULE_1__[\"memory\"].buffer, pxPtr, N);\r\nconst py = new Float32Array(wasm_nbody_wasm_nbody_bg__WEBPACK_IMPORTED_MODULE_1__[\"memory\"].buffer, pyPtr, N);\r\ncanvas.width = width;\r\ncanvas.height = height;\r\nconsole.log(\"Universe init, N is \"+N+\" width is \"+width+\" height is \"+height+\"  px arr is \"+px.length+\" first el is \"+px[0]);\r\nconst ctx = canvas.getContext(\"2d\");\r\nctx.fillStyle = \"#666666\";\r\n\r\nvar drawParticle = function(x, y) {\r\n  ctx.fillRect(x, y, 2, 2);\r\n}\r\n\r\nconst renderLoop = () => {    \r\n    universe.tick();\r\n    ctx.clearRect(0, 0, width, height);\r\n    for (var i=0; i<N; i++) {\r\n      let x = px[i];\r\n      let y = py[i];\r\n      drawParticle( x, y);\r\n    }\r\n    requestAnimationFrame(renderLoop);\r\n};\r\n\r\n\r\nrequestAnimationFrame(renderLoop);\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);