import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { ignores: ["frontend/**", "e2e-tests/**", "dist/**"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.node } },
]);
