App.factory('Factory', function () {
  var _MusicSearch = {};

    var _getName = function() {
        return "David";
    };

    return{
        getName: _getName,
        MusicSearch: MusicSearch
    };

  // var customers = [
  //   { name : 'Steve Jobs', city : 'San Francisco' },
  //   { name : 'Bill Gates', city : 'Medina' },
  //   { name : 'Mark Zuckerberg', city : 'Palo Alto' },
  //   { name : 'Lucy the Samoyed', city : 'Governador Valadares' },
  //   { name : 'William Oliveira', city : 'Governador Valadares' },
  //   { name : 'Juliana Oliveira', city : 'Governador Valadares' }
  // ];
  //
  // factory.getCustomers = function () {
  //   return customers;
  // }

});
