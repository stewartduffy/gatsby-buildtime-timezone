var _require = require('graphql'),
    GraphQLString = _require.GraphQLString;

var moment = require('moment-timezone');

module.exports = function (_ref, pluginOptions) {
  var type = _ref.type,
      store = _ref.store,
      pathPrefix = _ref.pathPrefix,
      getNode = _ref.getNode,
      cache = _ref.cache,
      reporter = _ref.reporter;

  if (type.name !== 'Site') {
    return {};
  }
  return new Promise(function (resolve, reject) {
    return resolve({
      buildTimeZone: {
        type: GraphQLString,
        resolve: function resolve(node) {
          return moment().tz('Pacific/Auckland').format('ddd, DD MMM YYYY hh:mm A');
        }
      }
    });
  });
};