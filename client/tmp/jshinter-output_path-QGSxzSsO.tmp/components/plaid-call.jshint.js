QUnit.module('JSHint | components/plaid-call.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'components/plaid-call.js should pass jshint.\ncomponents/plaid-call.js: line 25, col 19, Missing semicolon.\ncomponents/plaid-call.js: line 27, col 15, Missing semicolon.\ncomponents/plaid-call.js: line 29, col 11, Missing semicolon.\ncomponents/plaid-call.js: line 8, col 7, \'$\' is not defined.\ncomponents/plaid-call.js: line 20, col 78, \'date\' is not defined.\n\n5 errors');
});
