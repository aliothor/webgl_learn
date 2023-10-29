(function() {
var __webpack_modules__ = {
"./src/shaders/01.frag": function (module, exports, __webpack_require__) {
'use strict';
module.exports = "#version 300 es\r\n\r\nprecision highp float;\r\n\r\nout vec4 outColor;\r\n\r\nvoid main(){\r\n    outColor=vec4(1,0,0.5,1);\r\n}";},
"./src/shaders/01.vert": function (module, exports, __webpack_require__) {
'use strict';
module.exports = "#version 300 es\r\n\r\nin vec4 a_position;\r\n\r\nvoid main(){\r\n    gl_Position=a_position;\r\n}";},
"./src/01.ts": function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
'use strict';
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */var _utils__WEBPACK_IMPORTED_MODULE_0_ = __webpack_require__(/* ./utils */\"./src/utils.ts\");\n/* harmony import */var _shaders_01_vert__WEBPACK_IMPORTED_MODULE_1_ = __webpack_require__(/* ./shaders/01.vert */\"./src/shaders/01.vert\");\n/* harmony import */var _shaders_01_frag__WEBPACK_IMPORTED_MODULE_2_ = __webpack_require__(/* ./shaders/01.frag */\"./src/shaders/01.frag\");\n\n\n\nconsole.log(_shaders_01_vert__WEBPACK_IMPORTED_MODULE_1_, _shaders_01_frag__WEBPACK_IMPORTED_MODULE_2_);\nfunction main() {\n    const canvas = document.querySelector('#c');\n    const gl = canvas.getContext('webgl2');\n    const vertexShader = (0, _utils__WEBPACK_IMPORTED_MODULE_0_.createShader)(gl, gl.VERTEX_SHADER, _shaders_01_vert__WEBPACK_IMPORTED_MODULE_1_);\n    const fragmentShader = (0, _utils__WEBPACK_IMPORTED_MODULE_0_.createShader)(gl, gl.FRAGMENT_SHADER, _shaders_01_frag__WEBPACK_IMPORTED_MODULE_2_);\n    const program = (0, _utils__WEBPACK_IMPORTED_MODULE_0_.createProgram)(gl, vertexShader, fragmentShader);\n    const positionAttributeLocation = gl.getAttribLocation(program, 'a_position');\n    const positionBuffer = gl.createBuffer();\n    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);\n    const position = [\n        0,\n        0,\n        0,\n        0.5,\n        0.7,\n        0\n    ];\n    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(position), gl.STATIC_DRAW);\n    const vao = gl.createVertexArray();\n    gl.bindVertexArray(vao);\n    gl.enableVertexAttribArray(positionAttributeLocation);\n    const size = 2;\n    const type = gl.FLOAT;\n    const normalize = false;\n    const stride = 0;\n    const offset = 0;\n    gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset);\n    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);\n    gl.clearColor(0, 1.0, 1.0, 1.0);\n    gl.clear(gl.COLOR_BUFFER_BIT);\n    gl.useProgram(program);\n    gl.bindVertexArray(vao);\n    const primitiveType = gl.TRIANGLES;\n    const first = 0;\n    const count = 3;\n    gl.drawArrays(primitiveType, first, count);\n}\nmain();\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc3JjLzAxLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVByb2dyYW0sIGNyZWF0ZVNoYWRlciB9IGZyb20gJy4vdXRpbHMnXHJcblxyXG5pbXBvcnQgdmVydGV4U2hhZGVyU291cmNlIGZyb20gJy4vc2hhZGVycy8wMS52ZXJ0J1xyXG5pbXBvcnQgZnJhZ21lbnRTaGFkZXJTb3VyY2UgZnJvbSAnLi9zaGFkZXJzLzAxLmZyYWcnXHJcblxyXG5jb25zb2xlLmxvZyh2ZXJ0ZXhTaGFkZXJTb3VyY2UsZnJhZ21lbnRTaGFkZXJTb3VyY2UpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIG1haW4oKSB7XHJcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2MnKSBhcyBIVE1MQ2FudmFzRWxlbWVudFxyXG4gIGNvbnN0IGdsID0gY2FudmFzLmdldENvbnRleHQoJ3dlYmdsMicpIVxyXG5cclxuICBjb25zdCB2ZXJ0ZXhTaGFkZXIgPSBjcmVhdGVTaGFkZXIoZ2wsIGdsLlZFUlRFWF9TSEFERVIsIHZlcnRleFNoYWRlclNvdXJjZSkhXHJcbiAgY29uc3QgZnJhZ21lbnRTaGFkZXIgPSBjcmVhdGVTaGFkZXIoZ2wsIGdsLkZSQUdNRU5UX1NIQURFUiwgZnJhZ21lbnRTaGFkZXJTb3VyY2UpIVxyXG5cclxuICBjb25zdCBwcm9ncmFtID0gY3JlYXRlUHJvZ3JhbShnbCwgdmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcikhXHJcblxyXG4gIGNvbnN0IHBvc2l0aW9uQXR0cmlidXRlTG9jYXRpb24gPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCAnYV9wb3NpdGlvbicpXHJcblxyXG4gIGNvbnN0IHBvc2l0aW9uQnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKClcclxuXHJcbiAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHBvc2l0aW9uQnVmZmVyKVxyXG5cclxuICBjb25zdCBwb3NpdGlvbiA9IFswLCAwLCAwLCAwLjUsIDAuNywgMF1cclxuXHJcbiAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkocG9zaXRpb24pLCBnbC5TVEFUSUNfRFJBVylcclxuXHJcbiAgY29uc3QgdmFvID0gZ2wuY3JlYXRlVmVydGV4QXJyYXkoKVxyXG5cclxuICBnbC5iaW5kVmVydGV4QXJyYXkodmFvKVxyXG5cclxuICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShwb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKVxyXG5cclxuICBjb25zdCBzaXplID0gMlxyXG5cclxuICBjb25zdCB0eXBlID0gZ2wuRkxPQVRcclxuXHJcbiAgY29uc3Qgbm9ybWFsaXplID0gZmFsc2VcclxuXHJcbiAgY29uc3Qgc3RyaWRlID0gMFxyXG5cclxuICBjb25zdCBvZmZzZXQgPSAwXHJcblxyXG4gIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIocG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgc2l6ZSwgdHlwZSwgbm9ybWFsaXplLCBzdHJpZGUsIG9mZnNldClcclxuXHJcbiAgZ2wudmlld3BvcnQoMCwgMCwgZ2wuY2FudmFzLndpZHRoLCBnbC5jYW52YXMuaGVpZ2h0KVxyXG5cclxuICBnbC5jbGVhckNvbG9yKDAsIDEuMCwgMS4wLCAxLjApXHJcblxyXG4gIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQpXHJcblxyXG4gIGdsLnVzZVByb2dyYW0ocHJvZ3JhbSlcclxuXHJcbiAgZ2wuYmluZFZlcnRleEFycmF5KHZhbylcclxuXHJcbiAgY29uc3QgcHJpbWl0aXZlVHlwZSA9IGdsLlRSSUFOR0xFU1xyXG5cclxuICBjb25zdCBmaXJzdCA9IDBcclxuXHJcbiAgY29uc3QgY291bnQgPSAzXHJcblxyXG4gIGdsLmRyYXdBcnJheXMocHJpbWl0aXZlVHlwZSwgZmlyc3QsIGNvdW50KVxyXG59XHJcblxyXG5tYWluKClcclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUEifQ==");},
"./src/utils.ts": function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
'use strict';
eval("__webpack_require__.r(__webpack_exports__);\n__webpack_require__.d(__webpack_exports__, {\n  'createShader': function() { return createShader; },\n  'createProgram': function() { return createProgram; },\n  'createProgramFromSources': function() { return createProgramFromSources; }\n});\n/**\r\n * 创建shader\r\n * @param gl \r\n * @param type \r\n * @param source \r\n * @returns \r\n */  function createShader(gl, type, source) {\n    const shader = gl.createShader(type);\n    gl.shaderSource(shader, source);\n    gl.compileShader(shader);\n    const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);\n    if (success) return shader;\n    console.error(source);\n    console.error(gl.getShaderInfoLog(shader));\n    gl.deleteShader(shader);\n}\n/**\r\n * 创建program\r\n * @param gl \r\n * @param vertexShader \r\n * @param fragmentShader \r\n * @returns \r\n */  function createProgram(gl, vertexShader, fragmentShader) {\n    const program = gl.createProgram();\n    gl.attachShader(program, vertexShader);\n    gl.attachShader(program, fragmentShader);\n    gl.linkProgram(program);\n    const success = gl.getProgramParameter(program, gl.LINK_STATUS);\n    if (success) return program;\n    console.error(gl.getProgramInfoLog(program));\n    gl.deleteProgram(program);\n}\n/**\r\n * 创建shader和program\r\n * @param gl \r\n * @param param1 \r\n * @returns \r\n */  function createProgramFromSources(gl, [vs, fs]) {\n    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vs);\n    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fs);\n    const program = createProgram(gl, vertexShader, fragmentShader);\n    return program;\n}\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc3JjL3V0aWxzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKipcclxuICog5Yib5bu6c2hhZGVyXHJcbiAqIEBwYXJhbSBnbCBcclxuICogQHBhcmFtIHR5cGUgXHJcbiAqIEBwYXJhbSBzb3VyY2UgXHJcbiAqIEByZXR1cm5zIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNoYWRlcihnbDogV2ViR0wyUmVuZGVyaW5nQ29udGV4dCwgdHlwZTogbnVtYmVyLCBzb3VyY2U6IHN0cmluZykge1xyXG4gIGNvbnN0IHNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcih0eXBlKSFcclxuICBnbC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzb3VyY2UpXHJcbiAgZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpXHJcbiAgY29uc3Qgc3VjY2VzcyA9IGdsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKVxyXG5cclxuICBpZiAoc3VjY2Vzcykge1xyXG4gICAgcmV0dXJuIHNoYWRlclxyXG4gIH1cclxuXHJcbiAgY29uc29sZS5lcnJvcihzb3VyY2UpXHJcbiAgY29uc29sZS5lcnJvcihnbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcikpXHJcbiAgZ2wuZGVsZXRlU2hhZGVyKHNoYWRlcilcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIm+W7unByb2dyYW1cclxuICogQHBhcmFtIGdsIFxyXG4gKiBAcGFyYW0gdmVydGV4U2hhZGVyIFxyXG4gKiBAcGFyYW0gZnJhZ21lbnRTaGFkZXIgXHJcbiAqIEByZXR1cm5zIFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2dyYW0oZ2w6IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQsIHZlcnRleFNoYWRlcjogV2ViR0xTaGFkZXIsIGZyYWdtZW50U2hhZGVyOiBXZWJHTFNoYWRlcikge1xyXG4gIGNvbnN0IHByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKCkhXHJcbiAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIHZlcnRleFNoYWRlcilcclxuICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgZnJhZ21lbnRTaGFkZXIpXHJcbiAgZ2wubGlua1Byb2dyYW0ocHJvZ3JhbSlcclxuXHJcbiAgY29uc3Qgc3VjY2VzcyA9IGdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpXHJcbiAgaWYgKHN1Y2Nlc3MpIHtcclxuICAgIHJldHVybiBwcm9ncmFtXHJcbiAgfVxyXG5cclxuICBjb25zb2xlLmVycm9yKGdsLmdldFByb2dyYW1JbmZvTG9nKHByb2dyYW0pKVxyXG4gIGdsLmRlbGV0ZVByb2dyYW0ocHJvZ3JhbSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOWIm+W7unNoYWRlcuWSjHByb2dyYW1cclxuICogQHBhcmFtIGdsIFxyXG4gKiBAcGFyYW0gcGFyYW0xIFxyXG4gKiBAcmV0dXJucyBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9ncmFtRnJvbVNvdXJjZXMoZ2w6IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQsIFt2cywgZnNdOiBbc3RyaW5nLCBzdHJpbmddKSB7XHJcblxyXG4gIGNvbnN0IHZlcnRleFNoYWRlciA9IGNyZWF0ZVNoYWRlcihnbCwgZ2wuVkVSVEVYX1NIQURFUiwgdnMpIVxyXG4gIGNvbnN0IGZyYWdtZW50U2hhZGVyID0gY3JlYXRlU2hhZGVyKGdsLCBnbC5GUkFHTUVOVF9TSEFERVIsIGZzKSFcclxuXHJcbiAgY29uc3QgcHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW0oZ2wsIHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIpIVxyXG4gIHJldHVybiBwcm9ncmFtXHJcbn1cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7Ozs7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSJ9");},

}
// The module cache
 var __webpack_module_cache__ = {};
function __webpack_require__(moduleId) {
// Check if module is in cache
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== undefined) {
      return cachedModule.exports;
      }
      // Create a new module (and put it into the cache)
      var module = (__webpack_module_cache__[moduleId] = {
       exports: {}
      });
      // Execute the module function
      __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
// Return the exports of the module
 return module.exports;

}
// webpack/runtime/has_own_property
(function() {
__webpack_require__.o = function (obj, prop) {
	return Object.prototype.hasOwnProperty.call(obj, prop);
};

})();
// webpack/runtime/define_property_getters
(function() {
__webpack_require__.d = function(exports, definition) {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
})();
// webpack/runtime/make_namespace_object
(function() {
// define __esModule on exports
__webpack_require__.r = function(exports) {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};

})();
var __webpack_exports__ = __webpack_require__("./src/01.ts");
})()
