define('client/routes/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    helpMe: false,

    model: function model() {
      console.log("hey");
      return this.store.findAll('coffee');
    },
    actions: {
      helpMethod: function helpMethod(model) {
        console.log(model);
        console.log(model.getEach('id'));
        console.log(model.getEach('name'));
      }
    }
  });
});