const { defineConfig } = require('@rspack/cli')

module.exports = function (env, argv) {
  const entryFile = ['01', '02', '03','04','05']

  const entryConfig = {}

  const htmlConfig = [
    {
      template: './template/index.html',
      filename: `index.html`,
      chunks: [],
    },
  ]

  entryFile.forEach((i) => {
    entryConfig[i] = `./src/${i}.ts`
    const item = {
      template: './template/demo.html',
      filename: `${i}.html`,
      chunks: [i],
    }
    htmlConfig.push(item)
  })

  const config = defineConfig({
    entry: entryConfig,
    output: {
      clean: true,
    },
    devServer: {
      port: 9001,
    },

    mode: env.production ? 'production' : 'development',
    devtool: env.production ? false : 'eval-source-map',

    builtins: {
      html: htmlConfig,
    },
    module: {
      rules: [
        {
          test: /\.frag$/,
          type: 'asset/source',
        },
        {
          test: /\.vert$/,
          type: 'asset/source',
        },
      ],
    },
  })

  return config
}
