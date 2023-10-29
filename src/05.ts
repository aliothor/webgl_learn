import { createProgramFromSources } from './utils'

import vs from './shaders/05.vert'
import fs from './shaders/05.frag'

function main() {
  const canvas = document.querySelector('#c') as HTMLCanvasElement
  const gl = canvas.getContext('webgl2')!

  const program = createProgramFromSources(gl, [vs, fs])

  const positionLocation = gl.getAttribLocation(program, 'a_position')
  const colorLocation = gl.getAttribLocation(program, 'a_color')

  const matrixLocation = gl.getUniformLocation(program, 'u_matrix')

  const vao = gl.createVertexArray()
  gl.bindVertexArray(vao)

  const buffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer)

  setGeometry(gl)

  gl.enableVertexAttribArray(positionLocation)

  const type = gl.FLOAT
  const normalize = false
  const stride = 0
  const offset = 0

  gl.vertexAttribPointer(positionLocation, 2, type, normalize, stride, offset)

  const buffer2 = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer2)

  setColor2(gl)
  gl.enableVertexAttribArray(colorLocation)

  // gl.vertexAttribPointer(colorLocation, 4, type, normalize, stride, offset)
  gl.vertexAttribPointer(colorLocation, 4, gl.UNSIGNED_BYTE, true, stride, offset)

  const translation = [200, 150]

  let angleInRadians = 0

  const scale = [1, 1]

  drawScene()

  function updatePosition(index: number): SlideUpdate {
    return function (event, ui) {
      translation[index] = ui.value
      drawScene()
    }
  }

  const updateAngle: SlideUpdate = (event, ui) => {
    let angleInDegress = 360 - ui.value
    angleInRadians = angleInDegress * (Math.PI / 180)
    drawScene()
  }

  function updateScale(index: number): SlideUpdate {
    return function (event, ui) {
      scale[index] = ui.value
      drawScene()
    }
  }

  webglLessonsUI.setupSlider('#x', {
    value: translation[0],
    slide: updatePosition(0),
    max: gl.canvas.width,
  })

  webglLessonsUI.setupSlider('#y', {
    value: translation[1],
    slide: updatePosition(1),
    max: gl.canvas.height,
  })

  webglLessonsUI.setupSlider('#angle', {
    slide: updateAngle,
    max: 360,
  })

  webglLessonsUI.setupSlider('#scaleX', {
    value: scale[0],
    slide: updateScale(0),
    min: -5,
    max: 5,
    step: 0.01,
    precision: 2,
  })

  webglLessonsUI.setupSlider('#scaleY', {
    value: scale[1],
    slide: updateScale(1),
    min: -5,
    max: 5,
    step: 0.01,
    precision: 2,
  })

  function drawScene() {
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)

    gl.clearColor(0,0,0,0)
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

    let matrix = m3.projection(gl.canvas.width, gl.canvas.height)

    matrix = m3.translate(matrix, translation[0], translation[1])
    matrix = m3.rotate(matrix, angleInRadians)
    matrix = m3.scale(matrix, scale[0], scale[1])

    gl.useProgram(program)
    gl.bindVertexArray(vao)

    gl.uniformMatrix3fv(matrixLocation, false, matrix)

    const first = 0
    const count = 6
    gl.drawArrays(gl.TRIANGLES, first, count)
  }
}

function setGeometry(gl: WebGL2RenderingContext) {
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([
      -150, -100,
      150, -100,
      -150, 100,
      150, -100,
      -150, 100,
      150, 100]),
    gl.STATIC_DRAW
  )
}

function setColor(gl: WebGL2RenderingContext) {
  const r1 = Math.random()
  const g1 = Math.random()
  const b1 = Math.random()
  const r2 = Math.random()
  const g2 = Math.random()
  const b2 = Math.random()

  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([
      r1, b1, g1, 1,
      r1, b1, g1, 1,
      r2, b1, g1, 1,
      r2, b2, g2, 1,
      r2, b2, g2, 1,
      r2, b2, g2, 1]),
    gl.STATIC_DRAW
  )
}

function setColor2(gl: WebGL2RenderingContext) {
  const r1 = Math.random() * 256
  const g1 = Math.random() * 256
  const b1 = Math.random() * 256
  const r2 = Math.random() * 256
  const g2 = Math.random() * 256
  const b2 = Math.random() * 256

  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array(
      [
        r1, b1, g1, 255,
        r1, b1, g1, 255,
        r2, b1, g1, 255,
        r2, b2, g2, 255,
        r2, b2, g2, 255,
        r2, b2, g2, 255
      ]),
    gl.STATIC_DRAW
  )
}

main()
