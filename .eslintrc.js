module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended'

  ],
  rules: {
    'no-unused-vars': process.env.NODE_ENV !== 'development' ? 'warn' : 'error',
    'quotes': [
      2,
      'single',
      {
        'avoidEscape': true,
        'allowTemplateLiterals': true
      }]
  }
}
