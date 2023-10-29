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
eval("__webpack_require__.r(__webpack_exports__);\n__webpack_require__.d(__webpack_exports__, {\n  'createShader': function() { return createShader; },\n  'createProgram': function() { return createProgram; }\n});\n function createShader(gl, type, source) {\n    const shader = gl.createShader(type);\n    gl.shaderSource(shader, source);\n    gl.compileShader(shader);\n    const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);\n    if (success) return shader;\n    console.log(gl.getShaderInfoLog(shader));\n    gl.deleteShader(shader);\n}\n function createProgram(gl, vertexShader, fragmentShader) {\n    const program = gl.createProgram();\n    gl.attachShader(program, vertexShader);\n    gl.attachShader(program, fragmentShader);\n    gl.linkProgram(program);\n    const success = gl.getProgramParameter(program, gl.LINK_STATUS);\n    if (success) return program;\n    console.log(gl.getProgramInfoLog(program));\n    gl.deleteProgram(program);\n}\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc3JjL3V0aWxzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTaGFkZXIoZ2w6IFdlYkdMMlJlbmRlcmluZ0NvbnRleHQsIHR5cGU6IG51bWJlciwgc291cmNlOiBzdHJpbmcpIHtcclxuICBjb25zdCBzaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIodHlwZSkhXHJcbiAgZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgc291cmNlKVxyXG4gIGdsLmNvbXBpbGVTaGFkZXIoc2hhZGVyKVxyXG4gIGNvbnN0IHN1Y2Nlc3MgPSBnbC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUylcclxuXHJcbiAgaWYgKHN1Y2Nlc3MpIHtcclxuICAgIHJldHVybiBzaGFkZXJcclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKGdsLmdldFNoYWRlckluZm9Mb2coc2hhZGVyKSlcclxuICBnbC5kZWxldGVTaGFkZXIoc2hhZGVyKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvZ3JhbShnbDogV2ViR0wyUmVuZGVyaW5nQ29udGV4dCwgdmVydGV4U2hhZGVyOiBXZWJHTFNoYWRlciwgZnJhZ21lbnRTaGFkZXI6IFdlYkdMU2hhZGVyKSB7XHJcbiAgY29uc3QgcHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKSFcclxuICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgdmVydGV4U2hhZGVyKVxyXG4gIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCBmcmFnbWVudFNoYWRlcilcclxuICBnbC5saW5rUHJvZ3JhbShwcm9ncmFtKVxyXG5cclxuICBjb25zdCBzdWNjZXNzID0gZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5MSU5LX1NUQVRVUylcclxuICBpZiAoc3VjY2Vzcykge1xyXG4gICAgcmV0dXJuIHByb2dyYW1cclxuICB9XHJcblxyXG4gIGNvbnNvbGUubG9nKGdsLmdldFByb2dyYW1JbmZvTG9nKHByb2dyYW0pKVxyXG4gIGdsLmRlbGV0ZVByb2dyYW0ocHJvZ3JhbSlcclxufVxyXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQSJ9");},

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
