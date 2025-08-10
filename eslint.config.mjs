import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import prettierConfig from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginReact from 'eslint-plugin-react';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';
export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        plugins: { js, prettier: pluginPrettier, 'simple-import-sort': simpleImportSort },
        extends: ['js/recommended', prettierConfig],
        languageOptions: { globals: globals.browser },
        rules: {
            'prettier/prettier': 'error',

            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
        },
        settings: {
            react: { version: 'detect' },
        },
    },
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
]);
