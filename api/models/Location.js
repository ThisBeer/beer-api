/**
* Location.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
    name: {
        type: 'string',
        required: true
    },
    city: {
        type: 'string',
        required: true
    },
    state: {
        type: 'string',
        required: true
    },
    beers: {
        collection: 'Beer',
        via: 'locations'
    },
    events: {
        collection: 'Event',
        via: 'location'
    },
    reviews: {
        collection: 'LocationReview',
        via: 'location'
    },
    image: {
        model: 'Image'
    }
  }
};

