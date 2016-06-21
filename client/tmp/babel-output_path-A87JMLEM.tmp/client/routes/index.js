define('client/routes/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    helpMe: false,

    model: function model() {

      return this.store.findAll('coffee');
    },
    actions: {
      processPlaidToken: function processPlaidToken(public_token) {
        $.ajax({
          url: 'http://localhost:8080/api/v1/authenticate',
          method: 'POST',
          data: {
            public_token: public_token
          }
        }).then(function (data) {
          console.log(data);
        });
      }
    }
  });
});