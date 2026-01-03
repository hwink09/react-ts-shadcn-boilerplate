import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'

export default [
  { ignores: ['dist', 'node_modules', 'build'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'react': reactPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,

      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // React General
      'react/prop-types': 0,
      'react/display-name': 0,
      'react/react-in-jsx-scope': 0,

      // Clean Code & Formatting
      'no-console': 1,
      'no-trailing-spaces': 1,
      'no-multi-spaces': 1,
      'no-multiple-empty-lines': [1, { max: 1 }],
      'space-before-blocks': ['error', 'always'],
      'object-curly-spacing': [1, 'always'],
      'indent': ['warn', 2, { SwitchCase: 1 }],
      'semi': [1, 'never'],
      // 'quotes': ['warn', 'single', { avoidEscape: true }],
      'comma-dangle': [1, 'always-multiline'],
      'arrow-spacing': 1,

      // TypeScript Specific
      '@typescript-eslint/no-unused-vars': [1, { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 1,
    },
  },
]