import { createProgramFromSources } from './utils'

import vs from './shaders/06.vert?raw'
import fs from './shaders/06.frag?raw'

const image = new Image()
image.src = './resources/leaves.jpg'
image.onload = () => {
  render(image)
}

function render(image: HTMLImageElement) {
  const canvas = document.querySelector('#c') as HTMLCanvasElement
  const gl = canvas.getContext('webgl2')!

  const program = createProgramFromSources(gl, [vs, fs])

  const positionAttributeLocation = gl.getAttribLocation(program, 'a_position')
  const texCoordAttributeLocation = gl.getAttribLocation(program, 'a_texCoord')

  const resolutionLocation = gl.getUniformLocation(program, 'u_resolution')
  const imageLocation = gl.getUniformLocation(program, 'u_image')

  const vao = gl.createVertexArray()

  gl.bindVertexArray(vao)

  const positionBuffer = gl.createBuffer()

  gl.enableVertexAttribArray(positionAttributeLocation)

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)

  const size = 2
  const type = gl.FLOAT
  const normalize = false
  const stride = 0
  const offset = 0

  gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset)

  const texCoordBuffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer)
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
    0.0, 0.0,
    1.0, 0.0,
    0.0, 1.0,
    0.0, 1.0,
    1.0, 0.0,
    1.0, 1.0,
  ]), gl.STATIC_DRAW)

  gl.enableVertexAttribArray(texCoordAttributeLocation)

  gl.vertexAttribPointer(texCoordAttributeLocation, size, type, normalize, stride, offset)

  const texture = gl.createTexture()

  gl.activeTexture(gl.TEXTURE0 + 0)

  gl.bindTexture(gl.TEXTURE_2D, texture)

  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)

  const mipLevel = 0
  const internalFormat = gl.RGBA
  const srcFormat = gl.RGBA
  const srcType = gl.UNSIGNED_BYTE

  gl.texImage2D(gl.TEXTURE_2D, mipLevel, internalFormat, srcFormat, srcType, image)

  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)

  gl.clearColor(51 / 255, 51 / 255, 77 / 255, 1)

  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

  gl.useProgram(program)

  gl.bindVertexArray(vao)

  gl.uniform2f(resolutionLocation, gl.canvas.width, gl.canvas.height)

  gl.uniform1i(imageLocation, 0)

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)

  setRectangle(gl, 0, 0, image.width, image.height)

  const primitiveType = gl.TRIANGLES
  const first = 0
  const count = 6

  gl.drawArrays(primitiveType, first, count)

}

function setRectangle(gl: WebGL2RenderingContext, x: number, y: number, width: number, height: number) {

  const x1 = x
  const x2 = x + width
  const y1 = y
  const y2 = y + height

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
    x1, y1,
    x2, y1,
    x1, y2,
    x1, y2,
    x2, y1,
    x2, y2,
  ]), gl.STATIC_DRAW)
}