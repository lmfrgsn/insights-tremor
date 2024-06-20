const config = {
    mode: 'production', // "production" | "development" | "none"
    resolve: {
      extensions: ['*', '.js', '.json']
    },
    module: {
      rules: [
        {
          include: /node_modules/,
          type: 'javascript/auto'
        }
      ]
    }
  }
  
  module.exports = config