import { createProgram, createShader } from './utils'

import vertexShaderSource from './shaders/01.vert?raw'
import fragmentShaderSource from './shaders/01.frag?raw'


function main() {
  const canvas = document.querySelector('#c') as HTMLCanvasElement
  const gl = canvas.getContext('webgl2')!

  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource)!
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)!

  const program = createProgram(gl, vertexShader, fragmentShader)!

  const positionAttributeLocation = gl.getAttribLocation(program, 'a_position')

  const positionBuffer = gl.createBuffer()

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)

  const position = [0, 0, 0, 0.5, 0.7, 0]

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

  gl.clearColor(51 / 255, 51 / 255, 77 / 255, 1.)

  gl.clear(gl.COLOR_BUFFER_BIT)

  gl.useProgram(program)

  gl.bindVertexArray(vao)

  const primitiveType = gl.TRIANGLES

  const first = 0

  const count = 3

  gl.drawArrays(primitiveType, first, count)
}

main()
