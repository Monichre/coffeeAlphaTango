import Ember from 'ember';

var OPTIONS = ['clientName', 'product', 'key', 'env', 'webhook', 'longtail', 'selectAccount'];
var DEFAULT_LABEL = 'Link Bank Account';

export default Ember.Component.extend({
  tagName: 'button',
  type: 'button',
  action: 'processPlaidToken',
  attributeBindings: ['type'],

  label: DEFAULT_LABEL,
  institution: null,
  clientName: null,
  product: null,
  key: null,
  env: null,
  webhook: null,

  _link: null,

  _open: Ember.on('click', function () {
    this._link.open(this.get('institution'));
  }),

  _setup: Ember.on('init', function () {
    var options = Ember.merge(this.getProperties(OPTIONS), {
      onSuccess: this._onSuccess.bind(this)
    });

    this._link = Plaid.create(options);
  }),

  _onSuccess: function _onSuccess(token) {
    this.sendAction('action', token);
  }
});