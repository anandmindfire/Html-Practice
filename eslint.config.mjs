/* eslint-disable import/no-anonymous-default-export */
import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import hub from '@mindfiredigital/eslint-plugin-hub';

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser
    },
    plugins: {
      hub: hub
    },
    rules: {
      'hub/react-component-name-match-filename': 'error',
    },
  },
];
