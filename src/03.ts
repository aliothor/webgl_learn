import { createProgram, createShader } from './utils'

const vertexShaderSource = `#version 300 es

// 顶点着色器的输入,它将从缓冲区接收数据
in vec2 a_position;

// canvas分辨率
uniform vec2 u_resolution;

void main(){
    // 坐标归一化
    vec2 zeroToOne=a_position/u_resolution;

    // convert from 0->1 to 0->2
    vec2 zeroToTwo=zeroToOne*2.0;

    // convert from 0->2 to -1->+1 (clipspace)
    vec2 clipSpace=zeroToTwo-1.0;

     // 翻转矩阵vec2(1,-1)
    gl_Position=vec4(clipSpace*vec2(1,-1),0,1);
}
`
const fragmentShaderSource = `#version 300 es

precision highp float;

uniform vec4 u_color;

// 片段着色器输出
out vec4 outColor;

void main(){
    outColor=u_color;
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

  const colorLocation = gl.getUniformLocation(program, 'u_color')

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
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

  gl.useProgram(program)

  gl.bindVertexArray(vao)

  gl.uniform2f(resolutionUniformLocation, gl.canvas.width, gl.canvas.height)

  for (let i = 0; i < 50; ++i) {
    setRectangle(gl, randomInt(300), randomInt(300), randomInt(300), randomInt(300))

    gl.uniform4f(colorLocation, Math.random(), Math.random(), Math.random(), 1)

    const primitiveType = gl.TRIANGLES

    const first = 0

    const count = 6

    gl.drawArrays(primitiveType, first, count)
  }
}

function randomInt(range: number) {
  return Math.floor(Math.random() * range)
}

function setRectangle(gl: WebGL2RenderingContext, x: number, y: number, width: number, height: number) {
  const x1 = x
  const x2 = x + width
  const y1 = y
  const y2 = y + height

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([x1, y1, x2, y1, x1, y2, x1, y2, x2, y1, x2, y2]), gl.STATIC_DRAW)
}

main()
