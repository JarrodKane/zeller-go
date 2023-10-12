# Zeller Coding Challenge

This project was bootstrapped with vite using react-ts template.
The testing is made with Cypress.
Styling is made with Styled Components.

## Available Scripts

```bash
   npm i // install dependencies
   npm run dev // run the app

   # Testing
   npx cypress open

```

### Todo

- [ ] Testing - Cypress
  - [ ] Component testing
  - [ ] E2E testing (Flow)
- [x] Styling - Styled Components
- [x] SPA - React/Vite
  - [x] Reactivity - User selection
- [x] Call API - GraphQL
- [x] Documentation

## Zeller Coding Challenge Approach

I wanted to start with creating a basic app using the vite template.
This gave me the boilerplate, from there I have created some folders to house some files, a few of these right now don't make as much sense for a SPA of this size. But I wanted to show how I would structure a larger app.

The above also goes for files such as the constants inside the Styles folder, for this size app it would be overkill, but I wanted to make sure if it kept growing that there would be a direction on how to maintain the code.

### Basics

To start with I created basic components, this was to get back into the gist of using react. One main thing I have to focus on is to make sure components stay focused on what they're meant for, and not to add too much logic into them.

I would prefer to have specific components that only take very specific props, this way I know what it's meant to do and why.
For example with the SelectRadio, you could make a component that's more generic, but that might lead to over engineering it.

I did not make a pages file since it's a single page app, I was thinking about creating one and breaking the app out into it's home page and the like, for now the App.tsx holds everything as the parent and brings it all in.

### Styling

I was a bit unsure with the styles if I should break them all out into their own files, in the end I only did it for files that were getting a bit longer such as the SelectRadio to have its own styles.ts file.

I also tried to use a constants file that is inside the styles folder, this way we can keep some consistency, I also wanted to use descriptive words for the variables when picking them, this way to me it's easier to understand what they're meant for.

#### Loading, etc

Could do a whole heap more for loading, like with the list coming in. Make a nice loading state, take the JSX that's already getting a little messy and bring that out, so that we can display loading, empty, error, and the list.

### Testing

After the basic components I wanted to get in some tests, and finally the GraphQL API.

I have not used Cypress before but have used other testing libraries. I wanted some basic component testing but nothing overboard, and one e2e test to just show the flow of getting on and selecting options.

### GraphQL

I decided to for this project make a folder called API and have the AWS, GraphQL and Typescript files in there.

I have a useEffect in my App.tsx file that grabs the data and then places it into state.

I was thinking for this one that we should have some secrets hidden away.

---

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
5. Proper test coverage
6. Best practises for performance optimisation
7. Code quality
8. Quality and Responsive UI
9. Documentation describing the approach and setup guidelines.
   RESOURCES PROVIDED
10. Design for the required screen -- zeller-customers-design.png.
11. GraphQL folder with queries.
12. Configuration file to use AWS AppSync GraphQL APIs -- aws-exports.js
