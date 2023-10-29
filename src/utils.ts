
/**
 * 创建shader
 * @param gl 
 * @param type 
 * @param source 
 * @returns 
 */
export function createShader(gl: WebGL2RenderingContext, type: number, source: string) {
  const shader = gl.createShader(type)!
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS)

  if (success) {
    return shader
  }

  console.error(source)
  console.error(gl.getShaderInfoLog(shader))
  gl.deleteShader(shader)
}

/**
 * 创建program
 * @param gl 
 * @param vertexShader 
 * @param fragmentShader 
 * @returns 
 */
export function createProgram(gl: WebGL2RenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader) {
  const program = gl.createProgram()!
  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)
  gl.linkProgram(program)

  const success = gl.getProgramParameter(program, gl.LINK_STATUS)
  if (success) {
    return program
  }

  console.error(gl.getProgramInfoLog(program))
  gl.deleteProgram(program)
}

/**
 * 创建shader和program
 * @param gl 
 * @param param1 
 * @returns 
 */
export function createProgramFromSources(gl: WebGL2RenderingContext, [vs, fs]: [string, string]) {

  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vs)!
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fs)!

  const program = createProgram(gl, vertexShader, fragmentShader)!
  return program
}
