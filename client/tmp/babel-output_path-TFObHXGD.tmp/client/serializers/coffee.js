define('client/serializers/coffee', ['exports', 'client/serializers/application'], function (exports, _clientSerializersApplication) {
  exports['default'] = _clientSerializersApplication['default'].extend({
    primaryKey: '_id'
  });
});