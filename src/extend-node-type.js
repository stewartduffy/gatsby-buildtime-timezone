const { GraphQLString } = require(`graphql`)
const moment = require('moment-timezone')

module.exports = (
  { type, store, pathPrefix, getNode, cache, reporter },
  pluginOptions
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
            .tz('Pacific/Auckland')
            .format('ddd, DD MMM YYYY hh:mm A')
        },
      },
    })
  })
}
