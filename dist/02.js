(function() {
var __webpack_modules__ = {
"./src/02.ts": function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
'use strict';
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */var _utils__WEBPACK_IMPORTED_MODULE_0_ = __webpack_require__(/* ./utils */\"./src/utils.ts\");\n\nconst vertexShaderSource = `#version 300 es\r\n\r\nin vec2 a_position;\r\n\r\nuniform vec2 u_resolution;\r\n\r\nvoid main(){\r\n    // 坐标归一化\r\n    vec2 zeroToOne=a_position/u_resolution;\r\n\r\n    // convert from 0->1 to 0->2\r\n    vec2 zeroToTwo=zeroToOne*2.0;\r\n\r\n    // convert from 0->2 to -1->+1 (clipspace)\r\n    vec2 clipSpace=zeroToTwo-1.0;\r\n\r\n     // 翻转矩阵vec2(-1,-1)\r\n    gl_Position=vec4(clipSpace*vec2(-1,-1),0,1);\r\n}\r\n`;\nconst fragmentShaderSource = `#version 300 es\r\n\r\nprecision highp float;\r\n\r\nout vec4 outColor;\r\n\r\nvoid main(){\r\n    outColor=vec4(1,0,0.5,1);\r\n}\r\n`;\nfunction main() {\n    const canvas = document.querySelector('#c');\n    const gl = canvas.getContext('webgl2');\n    const vertexShader = (0, _utils__WEBPACK_IMPORTED_MODULE_0_.createShader)(gl, gl.VERTEX_SHADER, vertexShaderSource);\n    const fragmentShader = (0, _utils__WEBPACK_IMPORTED_MODULE_0_.createShader)(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);\n    const program = (0, _utils__WEBPACK_IMPORTED_MODULE_0_.createProgram)(gl, vertexShader, fragmentShader);\n    const positionAttributeLocation = gl.getAttribLocation(program, 'a_position');\n    const resolutionUniformLocation = gl.getUniformLocation(program, 'u_resolution');\n    const positionBuffer = gl.createBuffer();\n    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);\n    const position = [\n        10,\n        20,\n        80,\n        20,\n        10,\n        30,\n        10,\n        30,\n        80,\n        20,\n        80,\n        30\n    ];\n    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(position), gl.STATIC_DRAW);\n    const vao = gl.createVertexArray();\n    gl.bindVertexArray(vao);\n    gl.enableVertexAttribArray(positionAttributeLocation);\n    const size = 2;\n    const type = gl.FLOAT;\n    const normalize = false;\n    const stride = 0;\n    const offset = 0;\n    gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset);\n    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);\n    gl.clearColor(0, 0, 0, 1.0);\n    gl.clear(gl.COLOR_BUFFER_BIT);\n    gl.useProgram(program);\n    gl.bindVertexArray(vao);\n    gl.uniform2f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height);\n    const primitiveType = gl.TRIANGLES;\n    const first = 0;\n    const count = 6;\n    gl.drawArrays(primitiveType, first, count);\n}\nmain();\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc3JjLzAyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVByb2dyYW0sIGNyZWF0ZVNoYWRlciB9IGZyb20gJy4vdXRpbHMnXHJcblxyXG5jb25zdCB2ZXJ0ZXhTaGFkZXJTb3VyY2UgPSBgI3ZlcnNpb24gMzAwIGVzXHJcblxyXG5pbiB2ZWMyIGFfcG9zaXRpb247XHJcblxyXG51bmlmb3JtIHZlYzIgdV9yZXNvbHV0aW9uO1xyXG5cclxudm9pZCBtYWluKCl7XHJcbiAgICAvLyDlnZDmoIflvZLkuIDljJZcclxuICAgIHZlYzIgemVyb1RvT25lPWFfcG9zaXRpb24vdV9yZXNvbHV0aW9uO1xyXG5cclxuICAgIC8vIGNvbnZlcnQgZnJvbSAwLT4xIHRvIDAtPjJcclxuICAgIHZlYzIgemVyb1RvVHdvPXplcm9Ub09uZSoyLjA7XHJcblxyXG4gICAgLy8gY29udmVydCBmcm9tIDAtPjIgdG8gLTEtPisxIChjbGlwc3BhY2UpXHJcbiAgICB2ZWMyIGNsaXBTcGFjZT16ZXJvVG9Ud28tMS4wO1xyXG5cclxuICAgICAvLyDnv7vovaznn6npmLV2ZWMyKC0xLC0xKVxyXG4gICAgZ2xfUG9zaXRpb249dmVjNChjbGlwU3BhY2UqdmVjMigtMSwtMSksMCwxKTtcclxufVxyXG5gXHJcbmNvbnN0IGZyYWdtZW50U2hhZGVyU291cmNlID0gYCN2ZXJzaW9uIDMwMCBlc1xyXG5cclxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xyXG5cclxub3V0IHZlYzQgb3V0Q29sb3I7XHJcblxyXG52b2lkIG1haW4oKXtcclxuICAgIG91dENvbG9yPXZlYzQoMSwwLDAuNSwxKTtcclxufVxyXG5gXHJcblxyXG5mdW5jdGlvbiBtYWluKCkge1xyXG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjJykgYXMgSFRNTENhbnZhc0VsZW1lbnRcclxuICBjb25zdCBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbDInKSFcclxuXHJcbiAgY29uc3QgdmVydGV4U2hhZGVyID0gY3JlYXRlU2hhZGVyKGdsLCBnbC5WRVJURVhfU0hBREVSLCB2ZXJ0ZXhTaGFkZXJTb3VyY2UpIVxyXG4gIGNvbnN0IGZyYWdtZW50U2hhZGVyID0gY3JlYXRlU2hhZGVyKGdsLCBnbC5GUkFHTUVOVF9TSEFERVIsIGZyYWdtZW50U2hhZGVyU291cmNlKSFcclxuXHJcbiAgY29uc3QgcHJvZ3JhbSA9IGNyZWF0ZVByb2dyYW0oZ2wsIHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIpIVxyXG5cclxuICBjb25zdCBwb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgJ2FfcG9zaXRpb24nKVxyXG5cclxuICBjb25zdCByZXNvbHV0aW9uVW5pZm9ybUxvY2F0aW9uID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sICd1X3Jlc29sdXRpb24nKVxyXG5cclxuICBjb25zdCBwb3NpdGlvbkJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpXHJcblxyXG4gIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBwb3NpdGlvbkJ1ZmZlcilcclxuXHJcbiAgY29uc3QgcG9zaXRpb24gPSBbMTAsIDIwLCA4MCwgMjAsIDEwLCAzMCwgMTAsIDMwLCA4MCwgMjAsIDgwLCAzMF1cclxuXHJcbiAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIG5ldyBGbG9hdDMyQXJyYXkocG9zaXRpb24pLCBnbC5TVEFUSUNfRFJBVylcclxuXHJcbiAgY29uc3QgdmFvID0gZ2wuY3JlYXRlVmVydGV4QXJyYXkoKVxyXG5cclxuICBnbC5iaW5kVmVydGV4QXJyYXkodmFvKVxyXG5cclxuICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShwb3NpdGlvbkF0dHJpYnV0ZUxvY2F0aW9uKVxyXG5cclxuICBjb25zdCBzaXplID0gMlxyXG5cclxuICBjb25zdCB0eXBlID0gZ2wuRkxPQVRcclxuXHJcbiAgY29uc3Qgbm9ybWFsaXplID0gZmFsc2VcclxuXHJcbiAgY29uc3Qgc3RyaWRlID0gMFxyXG5cclxuICBjb25zdCBvZmZzZXQgPSAwXHJcblxyXG4gIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIocG9zaXRpb25BdHRyaWJ1dGVMb2NhdGlvbiwgc2l6ZSwgdHlwZSwgbm9ybWFsaXplLCBzdHJpZGUsIG9mZnNldClcclxuXHJcbiAgZ2wudmlld3BvcnQoMCwgMCwgZ2wuY2FudmFzLndpZHRoLCBnbC5jYW52YXMuaGVpZ2h0KVxyXG5cclxuICBnbC5jbGVhckNvbG9yKDAsIDAsIDAsIDEuMClcclxuICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUKVxyXG5cclxuICBnbC51c2VQcm9ncmFtKHByb2dyYW0pXHJcblxyXG4gIGdsLmJpbmRWZXJ0ZXhBcnJheSh2YW8pXHJcblxyXG4gIGdsLnVuaWZvcm0yZihyZXNvbHV0aW9uVW5pZm9ybUxvY2F0aW9uLCBnbC5jYW52YXMud2lkdGgsIGdsLmNhbnZhcy5oZWlnaHQpXHJcblxyXG4gIGNvbnN0IHByaW1pdGl2ZVR5cGUgPSBnbC5UUklBTkdMRVNcclxuXHJcbiAgY29uc3QgZmlyc3QgPSAwXHJcblxyXG4gIGNvbnN0IGNvdW50ID0gNlxyXG5cclxuICBnbC5kcmF3QXJyYXlzKHByaW1pdGl2ZVR5cGUsIGZpcnN0LCBjb3VudClcclxufVxyXG5cclxubWFpbigpXHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkE7QUFDQTs7Ozs7Ozs7O0FBU0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQSJ9");},
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
var __webpack_exports__ = __webpack_require__("./src/02.ts");
})()
