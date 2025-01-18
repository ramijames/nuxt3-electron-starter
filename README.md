# Quick Starter for Nuxt 3 + Electron

This will get you up and running quickly if you just want everything set up for you already. 

## Running the app locally

To run this locally for development purposes, you'll need to run two commands. Run these in two separate terminals, from the working directory.

```sh
npm run dev # Run your Nuxt 3 server locally
npm run electron:dev # Build your electron app locally
```

## Building your electron app

To build your electron app and package it for release:

```sh
npm run build  # Build Nuxt
npm run electron:build  # Build the macOS app
```

The .dmg file will be in the dist_electron folder.