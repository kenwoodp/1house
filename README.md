This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

It has been modified to include components which we use on a regular basis. Feel free to customise these however you please. If anything is useful thought please commit it to the boilerplate repository so we can use it in future!

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Set Project Name

1. server.js - search "nextjs-boilerplate"  and replace with the url of the project
2. package.json - update the name property


## Application Insights
### Server Side
First create an App Insights instance for the site and grab the Instrumentation Key

* Uncomment the App Insights code in `server.js` 
* Ensure there is an instrumentation key environement variable in the App Service
  * This can be configured in the Release Pipeline too
  * Release Pipeline > Tasks > Azure App Service Deploy task > Application and Configuration Settings > App settings

### Client Side
* In `_app.js` uncomment the app insights code near the top of the file
* Ensure there is an environment variable in the **Build Pipeline** for the project
    * This env variable must be called `NEXT_PUBLIC_APPINSIGHTS_INSTRUMENTATIONKEY`

You can create an `.env.local` file and set a `NEXT_PUBLIC_APPINSIGHTS_INSTRUMENTATIONKEY` value in there too. This will allow you to run `npm run build` without build errors.

Page tracking should work now for Server and Client side.
    
## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Shopify Integration

### Packages Required
Building this list as I install the required dpendencies
- shopify-buy
- framer-motion