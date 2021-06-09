const tracery = require('tracery-grammar');
const story = require('./HeistStory.json');

const grammar = tracery.createGrammar(story);

grammar.addModifiers(tracery.baseEngModifiers);

console.log(grammar.flatten('#story#'));
