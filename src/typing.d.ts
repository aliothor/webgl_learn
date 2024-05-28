declare module '*.frag?raw' {
  const fragSource: string
  export default fragSource
}

declare module '*.vert?raw' {
  const vertSource: string
  export default vertSource
}

declare const m3: {
  projection: (...args: any) => any
  translate: (...args: any) => any
  rotate: (...args: any) => any
  scale: (...args: any) => any
}

type SlideUpdate = (event: any, ui: { value: number }) => void

interface setupSliderOption {
  slide: SlideUpdate
  value?: number
  max?: number
  min?: number
  step?: number
  precision?: number
}

declare const webglLessonsUI: {
  setupSlider: (id: string, option: setupSliderOption) => void
}
