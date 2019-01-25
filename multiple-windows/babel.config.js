module.exports = (api) => {
  const presetEnv = [
    '@babel/preset-env',
    {
      targets: {
        electron: '4.0'
      }
    }
  ]

  return {
    presets: api.env('development') ? [
      presetEnv,
      '@babel/preset-react',
      'power-assert'
    ] : [
      presetEnv,
      '@babel/preset-react'
    ]
  }
}
