# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


This coding challenge is to build a simple react app with Typescript (optional), integrated
with GraphQL APIs. For simplicity, the react app has been restricted to one screen.

Need to build a simple react app in Typescript to show Zeller customers. Customers
should be fetched with the GraphQL APIs provided.
List of customers need to be filtered based on the selection of user type -
Admin/Manager.
● Radio button selection of `Admin` should list admin customers as per the design.
● If the selection is `Manager`, customers with a role `Manager` need to be listed.
Please refer to the design attached for the UI - zeller-customers-design.png.
RECOMMENDATIONS
1. Use ‘Create React App’ for Typescript for the project setup. No need to set the
project up from the scratch
2. Use a familiar UI library such as Styled-Components if required. No need to be
pixel perfect with the design.
3. GraphQL APIs are hosted in AWS. Use the attached aws-exports file for
configurations. Authentication type is API-KEY.
4. Refer attached ‘graphql/queries.ts’ for queries.
1
ZELLER CHECKLIST
1. Proper test coverage
2. Best practises for performance optimisation
3. Code quality
4. Quality and Responsive UI
5. Documentation describing the approach and setup guidelines.
RESOURCES PROVIDED
1. Design for the required screen -- zeller-customers-design.png.
2. GraphQL folder with queries.
3. Configuration file to use AWS AppSync GraphQL APIs -- aws-exports.js