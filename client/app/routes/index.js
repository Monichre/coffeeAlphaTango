import Ember from 'ember';

export default Ember.Route.extend({
  helpMe:false,

  model(){
    console.log("hey");
    return this.store.findAll('coffee');
  },
  actions: {
    helpMethod(model){
      console.log(model);
      console.log(model.getEach('id'));
      console.log(model.getEach('name'));

    }
  }
});
