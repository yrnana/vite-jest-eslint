## vite-jest-eslint

### run

```sh
npx eslint --print-config src/Button.tsx > default.config.json

npx eslint --print-config src/Button.test.tsx > test.config.json
```

### etc

- ts-jest 성능이슈
  - https://github.com/nrwl/nx/issues/1720
- speed up 대안
  - https://miyauchi.dev/posts/speeding-up-jest/

### reference

- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/tree/master/docs/getting-started/linting)
  - [recommended-requiring-type-checking](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/recommended-requiring-type-checking.ts)
- [eslint-plugin-react config](https://github.com/yannickcr/eslint-plugin-react/blob/master/index.js)
- [eslint-plugin-react-hooks config](https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/src/index.js)
- [eslint-plugin-import config](https://github.com/import-js/eslint-plugin-import/tree/master/config)
- [eslint-plugin-jsx-a11y config](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/src/index.js)
- [eslint-plugin-jest config](https://github.com/jest-community/eslint-plugin-jest/blob/main/src/index.ts)
