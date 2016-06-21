define('client/models/coffee', ['exports', 'ember-data'], function (exports, _emberData) {
  // import attr from 'ember-data/attr';
  // import { belongsTo, hasMany } from 'ember-data/relationships';

  exports['default'] = _emberData['default'].Model.extend({
    name: _emberData['default'].attr('string'),
    address: _emberData['default'].attr('string')
  });
});