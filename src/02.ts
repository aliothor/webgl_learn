import { createProgram, createShader } from './utils'

const vertexShaderSource = `#version 300 es

in vec2 a_position;

uniform vec2 u_resolution;

void main(){
    // 坐标归一化
    vec2 zeroToOne=a_position/u_resolution;

    // convert from 0->1 to 0->2
    vec2 zeroToTwo=zeroToOne*2.0;

    // convert from 0->2 to -1->+1 (clipspace)
    vec2 clipSpace=zeroToTwo-1.0;

     // 翻转矩阵vec2(-1,-1)
    gl_Position=vec4(clipSpace*vec2(-1,-1),0,1);
}
`
const fragmentShaderSource = `#version 300 es

precision highp float;

out vec4 outColor;

void main(){
    outColor=vec4(1,0,0.5,1);
}
`

function main() {
  const canvas = document.querySelector('#c') as HTMLCanvasElement
  const gl = canvas.getContext('webgl2')!

  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource)!
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)!

  const program = createProgram(gl, vertexShader, fragmentShader)!

  const positionAttributeLocation = gl.getAttribLocation(program, 'a_position')

  const resolutionUniformLocation = gl.getUniformLocation(program, 'u_resolution')

  const positionBuffer = gl.createBuffer()

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)

  const position = [10, 20, 80, 20, 10, 30, 10, 30, 80, 20, 80, 30]

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(position), gl.STATIC_DRAW)

  const vao = gl.createVertexArray()

  gl.bindVertexArray(vao)

  gl.enableVertexAttribArray(positionAttributeLocation)

  const size = 2

  const type = gl.FLOAT

  const normalize = false

  const stride = 0

  const offset = 0

  gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset)

  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)

  gl.clearColor(51 / 255, 51 / 255, 77 / 255, 1)
  gl.clear(gl.COLOR_BUFFER_BIT)

  gl.useProgram(program)

  gl.bindVertexArray(vao)

  gl.uniform2f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height)

  const primitiveType = gl.TRIANGLES

  const first = 0

  const count = 6

  gl.drawArrays(primitiveType, first, count)
}

main()
