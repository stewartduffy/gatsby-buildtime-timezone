const { GraphQLString } = require(`graphql`)
const moment = require('moment-timezone')

module.exports = (
  { type, store, pathPrefix, getNode, cache, reporter },
  { tz = 'America/New_York', format = moment.defaultFormat }
) => {
  if (type.name !== 'Site') {
    return {}
  }

  return new Promise((resolve, reject) => {
    return resolve({
      buildTimeZone: {
        type: GraphQLString,
        resolve(node) {
          return moment()
            .tz(tz)
            .format(format)
        },
      },
    })
  })
}
