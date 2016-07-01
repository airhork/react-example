/*
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * TodoStore
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _todos = {};

var data = [ {id: 11, name: 'Max Zhang'},
      {id: 12, name: 'Narco Dong'},
      {id: 13, name: 'Bombasto'},
      {id: 14, name: 'Celeritas'},
      {id: 15, name: 'Magneta'},
      {id: 16, name: 'RubberMan'},
      {id: 17, name: 'Dynama'},
      {id: 18, name: 'Dr IQ'},
      {id: 19, name: 'Magma'},
      {id: 20, name: 'Tornado'}];

var nextId = 21;

/**
 * Create a TODO item.
 * @param  {string} text The content of the TODO
 */
function create(text) {
  // Hand waving here -- not showing how this interacts with XHR or persistent
  // server-side storage.
  // Using the current timestamp + random number in place of a real id.
  var newId = nextId++;
  data.push({id : newId, name : text});
}

/**
 * Update a TODO item.
 * @param  {string} id
 * @param {object} updates An object literal containing only the data to be
 *     updated.
 */
function update(id, text) {
  data.forEach( hero => {
    if(hero.id == id) {
      hero.name = text;
    }
  });
}



/**
 * Delete a TODO item.
 * @param  {string} id
 */
function destroy(id) {
 data = data.filter(h => h.id !== id);
 console.log(data);
}


var HeroStore = assign({}, EventEmitter.prototype, {


  /**
   * Get the entire collection of TODOs.
   * @return {object}
   */
  getAll: function() {
    return data;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

// Register callback to handle all updates
AppDispatcher.register(function(action) {
  var text;

  switch(action.actionType) {

    case 'CREATE':
      text = action.text.trim();
      if (text !== '') {
        create(text);
        HeroStore.emitChange();
      }
      break;

    case 'UPDATE':
      text = action.text.trim();
      update(action.id, text);
      HeroStore.emitChange();
      break;

    case 'DELETE':
      destroy(action.id);
      HeroStore.emitChange();
      break;

    default:
      // no op
  }
});

module.exports = HeroStore;
