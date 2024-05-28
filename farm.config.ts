import { defineConfig, UserConfig } from "@farmfe/core";

export default async () => {
  const config = defineConfig({
    compilation: {
      input: {
        index: "./templates/index.html",
        "01": "./templates/01.html",
        "02": "./templates/02.html",
        "03": "./templates/03.html",
        "04": "./templates/04.html",
        "05": "./templates/05.html",
        "06": "./templates/06.html",
      },
      output: {
        'publicPath': "/webgl_learn/"
      },
      presetEnv: false,
      sourcemap: false
    },
  })
  return config
}