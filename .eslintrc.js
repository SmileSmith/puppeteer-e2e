module.exports = {
  root: true,
  extends: ['standard', 'plugin:@typescript-eslint/recommended', 'prettier', 'prettier/@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  env: {
    commonjs: true,
    es6: true,
  },
  globals: {
    browser: true,
    page: true,
    test: true,
    expect:true,
    beforeAll: true,
    jest: true,
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    // 强制所有函数都有返回类型
    '@typescript-eslint/explicit-function-return-type': 0,
    // 禁用内置的prototype函数
    'no-prototype-builtins': 0,
    // 强制分号
    semi: [1, 'always'],
  },
};
