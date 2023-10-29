const { defineConfig } = require('@rspack/cli')

module.exports = function (env, argv) {
  const entryFile = [
    {
      filename: '01',
      demoname: 'triangle',
    },
    {
      filename: '02',
      demoname: 'single rectangle',
    },
    {
      filename: '03',
      demoname: 'radom rectangle',
    },
    {
      filename: '04',
      demoname: 'radom triangle color',
    },
    {
      filename: '05',
      demoname: 'radom rectangle color',
    },
  ]

  const entryConfig = {}

  const htmlConfig = [
    {
      template: './template/index.html',
      filename: `index.html`,
      chunks: [],
    },
  ]

  entryFile.forEach((i) => {
    const key = i.filename
    entryConfig[key] = `./src/${key}.ts`
    const item = {
      template: './template/demo.html',
      filename: `${key}.html`,
      chunks: [key],
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
      copy: {
        patterns: [
          {
            from: 'public/resources',
            to: 'resources',
          },
        ],
      },
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
