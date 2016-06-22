define("client/components/plaid-call", ["exports", "ember"], function (exports, _ember) {
  exports["default"] = _ember["default"].Component.extend({
    plaidCompleted: true,
    coffeeShops: null,
    actions: {
      callApi: function callApi(users) {
        var self = this;
        $.ajax({
          type: "POST",
          url: "http://localhost:8080/api/v1/test"
        }).then(function (data) {
          console.log(users);
          console.log("First response from Ajax:" + data);

          var noUser = true;
          var coffeeShops = []; // local variable

          users.forEach(function (user) {

            if (user.get('accounts').includes(data[0].account)) {
              console.log("This would be the put route user: " + user.get('accounts'));
              noUser = false;
              data.forEach(function (transaction) {
                if (transaction._id === user.get('lastCoffeeId')) {
                  var mostRecentTrans = data.splice(data.indexOf(transaction), data.length - 1);
                  mostRecentTrans.forEach(function (transaction) {
                    if (transaction.category.includes("Coffee Shop")) {

                      coffeeShops.push(transaction);
                    }
                  });
                  user.set('coffeeShops', coffeeShops);
                  self.sendAction('updateUser', user);
                }
              });
            }
          });
          self.set('coffeeShops', coffeeShops); //component property
          // **********************************
          //new user code
          if (noUser) {
            var newUser = { accounts: [], coffeeShops: [], lastCoffeeId: "" };
            console.log("New user: " + newUser);
            var newUserCoffee = [];
            data.forEach(function (transaction) {
              if (!newUser.accounts.includes(transaction.account)) {
                newUser.accounts.push(transaction.account);
              }
              if (transaction.category.includes("Coffee Shop")) {
                if (!newUserCoffee.includes(transaction)) {
                  newUserCoffee.push(transaction);
                }
              }
            });
            newUser.lastCoffeeId = newUserCoffee[newUserCoffee.length - 4]._id;
            var newUserShops = newUserCoffee.splice(newUserCoffee.length - 1, -3);
            self.set('coffeeShops', newUserShops);
            self.sendAction('newUser', newUser);
          }

          console.log("Coffee Shops: " + self.coffeeShops);
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
});