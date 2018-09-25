# 3-systems-static-upwelling
React static web application for "3 Systems Upwelling" touchscreen interactive in "Giants of Land and Sea"
exhibit.

## Installation

Clone 3-systems-static-upwelling repo locally.

Unpack node modules via Yarn:

```
$ cd 3-systems-static-upwelling
$ yarn
```

## Development and Production Builds

Webpack build init scripts in package.json. Webpack config for 'start' script
automatically rebuilds to '/build' on src edit. Run local webserver on /build
dir for dev work (browser auto-refresh in place). While 'start' script is
running, Webpack will use development variable in .env.development file (see
  above). Stop 'start' script and run 'build' script to build app to /build
  using production variable in .env.production file (prior to deployment).

```
yarn start
yarn build
```

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
