QUnit.module('JSHint | routes/index.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/index.js should pass jshint.\nroutes/index.js: line 17, col 9, Missing semicolon.\nroutes/index.js: line 9, col 7, \'$\' is not defined.\n\n2 errors');
});