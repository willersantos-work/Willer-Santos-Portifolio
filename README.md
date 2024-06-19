# Willer Santos's portfolio

## Intro

This project is a personal portfolio, which I show my work experience, projects and personal projects.

## Getting Started

First, run the development server in terminal:

```bash
npm i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Structure

### Folder structure

-   **components**: Global/shared components, such as buttons, cards, inputs;
-   **context**: Contexts applied to shared data or function between different pages, there is notification for apply notification part and service to make easy call server services;
-   **content**: Content texts;
-   **interfaces**: Global/shared interfaces in the app;
-   **layout**: Base layout screen;
-   **pages**: Pages in the app, such as main page.
    -   **index**: Main page;
    -   **\_document**: Base HTML for pages;
    -   **\_app**: Encapsuled page to centralize providers and global configs;
-   **styles**: Global styles used in the project;
-   **utils**: Functions that is used a lot in a global context, but is simplier functions then functions in context and more global utilization;

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js.
-   [Chakra UI Documentation](https://v2.chakra-ui.com/getting-started) - learn about Chakra UI.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The steps to see production version is open terminal and run:

```bash
npm i
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result of a production version.

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

[Next.js deployment documentation](https://nextjs.org/docs/deployment) explains about deployment.

## Author

-   Name: Willer Santos
-   Graduated: BA Chemical Engineering
