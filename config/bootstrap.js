/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

  var barStorage = [];

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  var bars = [{name: 'birch', city:'Norfolk', state:'VA'}, {name: 'public house', city:'Norfolk', state:'VA'}];
  var beers = [{name:'pliny the elder'}, {name:'stone ipa'}, {name:'murphys'}];

  var associate = function (beer, next) {
    var thisbeer = beer;

    barStorage.forEach(function (thisbar, index) {
      thisbar.beers.add(thisbeer.id);
      thisbar.save(console.log);

      if (index == barStorage.length - 1) {
        return next(thisbeer.name);
      }
    });
  };

  var afterBeer = function (err, newBeers) {
    while (newBeers.length) {
      var thisBeer = newBeers.pop();
      var callback = function (beerid) {
        console.log('done with beer ', beerid);
      }
      associate(thisBeer, callback);
    }
    console.log('everything belongs to everything!! Exiting.');

    return cb();
  };

  var afterBar = function (err, newBars) {
    while (newBars.length) {
      barStorage.push(newBars.pop());
    }
    Beer.create(beers).exec(afterBeer);

  };

  Location.create(bars).exec(afterBar);

};
