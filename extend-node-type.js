var _require = require('graphql'),
    GraphQLString = _require.GraphQLString;

var moment = require('moment-timezone');

module.exports = function (_ref, _ref2) {
  var type = _ref.type,
      store = _ref.store,
      pathPrefix = _ref.pathPrefix,
      getNode = _ref.getNode,
      cache = _ref.cache,
      reporter = _ref.reporter;
  var _ref2$tz = _ref2.tz,
      tz = _ref2$tz === undefined ? 'America/New_York' : _ref2$tz,
      _ref2$format = _ref2.format,
      format = _ref2$format === undefined ? moment.defaultFormat : _ref2$format;

  if (type.name !== 'Site') {
    return {};
  }

  return new Promise(function (resolve, reject) {
    return resolve({
      buildTimeZone: {
        type: GraphQLString,
        resolve: function resolve(node) {
          return moment().tz(tz).format(format);
        }
      }
    });
  });
};