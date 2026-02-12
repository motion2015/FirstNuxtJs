// elint.config.mjs

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FaltCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FaltCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", 'next/typescript'),
  {
    rules: {
      '@typescript=elslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eelint/no-empty-object-type': 'off',
    },
  },
];

export default eslintConfig;
