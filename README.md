# gatsby-buildtime-timezone

Similar to the build in `buildTime` query, but provides the option to set the timezone for the build.

It uses [Moment Timezone](https://momentjs.com/timezone/) for the timezone conversion.

## Install

`npm install --save gatsby-plugin-buildtime-timezone`

## How to use

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: 'gatsby-plugin-buildtime-timezone',
    options: {
      tz: 'Pacific/Auckland',
      format: 'ddd, DD MMM YYYY hh:mm A',
    },
  },
];
```

#### Parameters

* [`tz`](https://momentjs.com/timezone/docs/#/using-timezones/parsing-in-zone/) accepts [Moment Timezone](https://momentjs.com/timezone/) method [`moment.tz()`](https://momentjs.com/timezone/docs/#/using-timezones/parsing-in-zone/) params.

  Most common use would be passing the [timezone name](/timezone-names.json) as a sting like this.

  ```js
  tz: 'Europe/Zagreb'
  ```

  ```js
  tz: 'GMT'
  ```

* [`format`](https://momentjs.com/docs/#/displaying/format/) accepts [Moment.js](https://momentjs.com/) method [`moment().format()`](https://momentjs.com/docs/#/displaying/format/) params.

  ```js
  format: 'dddd, MMMM Do YYYY, h:mm:ss a' // "Sunday, February 14th 2010, 3:25:50 pm"
  ```

  ```js
  format: 'ddd, DD MMM YYYY hh:mm A zz' // "Thu, 19 Apr 2018 08:39 AM Thu, 19 Apr 2018 08:39 AM NZ"
  ```

#### Timezone names

[Here is a list](/timezone-names.json) of all the moment timezone names that `moment.tz.names()` will return as of version `0.5.15`. Any of these can be used to pass the `tz` option.

## How to query

A sample GraphQL query:

```graphql
{
  site {
    buildTimeZone
  }
}
```
