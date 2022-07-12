const express = require('express')
const helmet = require("helmet")
const next = require('next')

// This will only work if you have an env variable called APPINSIGHTS_INSTRUMENTATIONKEY in the Publish pipeline
// let appInsights = require('applicationinsights');

// appInsights.setup(process.env.APPINSIGHTS_INSTRUMENTATIONKEY)
//   .setSendLiveMetrics(true)
//   .start();

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  server.use(helmet.dnsPrefetchControl());
  server.use(helmet.expectCt());
  server.use(helmet.hidePoweredBy());
  server.use(helmet.hsts({maxAge: 31536000}));
  server.use(helmet.ieNoOpen());
  server.use(helmet.noSniff());
  server.use(helmet.permittedCrossDomainPolicies());
  server.use(helmet.referrerPolicy());
  server.use(helmet.frameguard());
  server.use(helmet.xssFilter());
  server.use(helmet.contentSecurityPolicy({
    // TODO: update all these CSPs
    directives: {
    defaultSrc: ['nextjs-boilerplate.com.au'],
    scriptSrc:['*.azurewebsites.net', '*.nextjs-boilerplate.com.au', 'nextjs-boilerplate.com.au',
              'cdn.jsdelivr.net',
                'blob:',
                "'unsafe-inline'", // Only add if needed
                'www.googletagmanager.com',
                'www.google-analytics.com',
                'www.google.com',
                'www.gstatic.com',
                'static.hotjar.com',
                'script.hotjar.com',
                '*.krxd.net',
                ' *.cloudfront.net',
                'cub947.activehosted.com',
                'connect.facebook.net',
                'cub-common-components.azureedge.net',
                'tag.lexer.io',],
    prefetchSrc:['*.azurewebsites.net', '*.nextjs-boilerplate.com.au', 'nextjs-boilerplate.com.au'],
    styleSrc:['*.azurewebsites.net', 
              "'unsafe-inline'", // Only add if needed
              '*.nextjs-boilerplate.com.au', 
              'nextjs-boilerplate.com.au',],
    fontSrc:['*.azurewebsites.net', 'data:', '*.nextjs-boilerplate.com.au', 'nextjs-boilerplate.com.au',],
    mediaSrc:['*.blob.core.windows.net', '*.nextjs-boilerplate.com.au', 'nextjs-boilerplate.com.au','chasahicdn.azureedge.net'],
    imgSrc:['*.azurewebsites.net','*.nextjs-boilerplate.com.au', 'nextjs-boilerplate.com.au',
            'www.google-analytics.com',
            'www.googletagmanager.com',
            'www.google.com',
            'www.google.com.au',
            'www.facebook.com',
            '*.krxd.net',
            'data:',
            'cdn.shopify.com','img.youtube.com'],
    connectSrc:['*.nextjs-boilerplate.com.au', 
                '*.azurewebsites.net', 
                'www.google-analytics.com', 
                'in.hotjar.com', 
                'vc.hotjar.io', 
                'www.google.com', 
                'www.gstatic.com',
                '*.doubleclick.net', 
                'nextjs-boilerplate.com.au', 
                'dc.services.visualstudio.com', 
                'cubteststore.myshopify.com', 
                'cub-common-api-management.azure-api.net'],
    frameSrc:['vars.hotjar.com', '*.nextjs-boilerplate.com.au', 'www.google.com', '*.krxd.net', 'nextjs-boilerplate.com.au','www.youtube.com']
  },
}
)
)
  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})