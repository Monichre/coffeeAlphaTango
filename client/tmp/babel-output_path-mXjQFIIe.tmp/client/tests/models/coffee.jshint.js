define('client/tests/models/coffee.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/coffee.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/coffee.js should pass jshint.');
  });
});