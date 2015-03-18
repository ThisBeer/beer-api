/**
* Beerreview.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    beer: {
        model: 'Beer'
    },
    author: {
        model: 'User'
    },
    image: {
        model: 'Image'
    }
  }
};

