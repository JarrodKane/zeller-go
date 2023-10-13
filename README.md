# Zeller Coding Challenge

This project was bootstrapped with vite using react-ts template.
The testing is made with Cypress.
Styling is made with Styled Components.

## Available Scripts

```bash
   npm i // install dependencies
   npm run dev // run the app

   # Testing - Please make sure the app is running if you are going to run the e2e tests
   npx cypress open

```

### Todo

- [x] Testing - Cypress
  - [x] Component testing
  - [x] E2E testing (Flow)
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

I was a bit unsure with the styles if I should break them all out into their own files, in the end I only did it for files that were getting a bit longer such as the SelectRadio to have its own styles.ts file. I would then import the styles using the prefix S this shows you quickly that the component is using styled components.

I also tried to use a constants file that is inside the styles folder, this way we can keep some consistency, I wanted to use descriptive words for the variables when picking them, this way to me it's easier to understand what they're meant for.

It's been a while since I've used styled-components I was a little unsure about transient props that I had to use in the section element in order to remove a warning.

#### Loading, etc

Could do a whole more work on the loading, like with the list coming in. Make a nice loading state, take the JSX that's already getting a little messy and bring that out, so that we can display loading, empty, error, and the list.

### Testing

Since we are using vite the default port run will be `5173` so when running the tests please run the application with npm run dev, it should show you the port you are running on as 5173 unless another app is using that port. The E2E tests will fail if the app is not running.

I have not used Cypress before but have used other testing libraries. I wanted some basic component testing but nothing overboard, and one e2e test to just show the flow of getting on and selecting options.
It was pretty nice to use and quick to set up for component testing, this spurred me on to make some components more safe.

### GraphQL

I decided to for this project make a folder called API and have the AWS, GraphQL and Typescript files in there.

I have a useEffect in my App.tsx file that grabs the data and then places it into state.

I was thinking for this one that we should have some secrets hidden away.

### Could do with

- More robust testing
- Mock data for testing
- Better loading states
- Better error handling
- Better typescript and typescript handling
- App.tsx file could be broken out into smaller components and functions

---
