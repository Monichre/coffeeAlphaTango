import Ember from 'ember';

export default Ember.Component.extend({
  plaidCompleted: true,
  actions: {
    callApi(users) {
      var self = this;
      $.ajax({
        type: "POST",
        url: "http://localhost:8080/api/v1/test"
      }).then(function(data) {
        console.log(data);
        var coffeeShops = [];
        users.forEach(function(user){
          console.log(user);
          console.log(data[0]);
          if(user.get('accounts').includes(data[0].account)){
            data.forEach(function(transaction) {
              if(transaction._id === 'user.lastCoffeeTransaction'){
                var mostRecentTrans = data.splice(data.indexOf(transaction), date.length - 1);
                mostRecentTrans.forEach(function(transaction){
                  if(transaction.category.includes("Coffee Shop")){
                    coffeeShops.push(transaction);
                  }
                })
              }
            })
          }
        })
        self.sendAction('coffeeShops', coffeeShops);
        console.log(coffeeShops);
        // if(self.plaidCompleted) {
        //   self.set('plaidCompleted', false);
        // } else {
        //   self.set('plaidCompleted', true);
        // }
      });
    }
    // processPlaidToken(token) {
    //   var self = this;
    //   $.ajax({
    //     type: "POST",
    //     url: "http://localhost:8080/api/v1/authenticate",
    //     data: {
    //       public_token: token,
    //     }}).then(function(data) {
    //     console.log(data);
    //     self.set('plaidCompleted', false);
    //   });
    // }
  }
});


// processPlaidToken(token) {
//   $.ajax({
//     type: "POST",
//     url: "http://localhost:8080/api/v1/authenticate",
//     data: {
//       public_token: token,
//     }}).then(function(data) {
//       console.log(data);
//       for( var i=0; i < data.length; i++ ){
//         console.log(data[i].category[2]);
//         if (data.category.includes("Coffee")){
//           $("#transactions").append("<h4>" + data[i].name + "</h4>");
//         }
//       }
//   });
// }
