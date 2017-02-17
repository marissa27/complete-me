import { assert } from 'chai';
import { expect } from 'chai';
import Trie from '../scripts/Trie.js';
const fs = require('fs');
require('locus');

describe('Trie', () => {

  it('should be a constructor function', () => {
    assert.isFunction(Trie);
  });

  it('should have instance called trie', () => {
    let completion = new Trie();

    expect(completion).to.be.an.instanceof(Trie);
  });

  it('should have a method of insert()', () => {
    let completion = new Trie();

    assert.isFunction(completion.insert);
  });

  it('should have a method of count()', () => {
    let completion = new Trie();

    assert.isFunction(completion.count);
  });

  it('should have a method of suggest()', () => {
    let completion = new Trie();

    assert.isFunction(completion.suggest);
  });

  it('should know word end', () => {
    let completion = new Trie();

    completion.insert('suh');

    assert.equal(
      completion.root.children.s.children.u.children.h.wordEnd, true);
  });

  it('should have 2 words', () => {
    let completion = new Trie();
    completion.insert('pizza');
    completion.insert('suh');

    // console.log(JSON.stringify(completion.root, null, 4));

    assert.equal(completion.count(), 2);
  });

  it('should have suggestion that returns suggestions', () => {
    let completion = new Trie();

    completion.insert('pizza');

    completion.suggest('piz');

    assert.deepEqual(completion.suggestions, ['pizza']);
  });

  it('should return null if no occurence of suggestion', () => {
    let completion = new Trie();

    let siblingArray = ['marissa', 'kelsi', 'eric'];

    completion.populate(siblingArray);

    completion.suggest('l');

    assert.deepEqual(completion.suggestions, []);
  });

  it('should be able to take in an array', () => {
    let completion = new Trie();

    let siblingArray = ['marissa', 'kelsi', 'eric'];

    completion.populate(siblingArray);

    assert.equal(completion.count(), 3);
  });

  it('should be able to take in the dictionary', () => {
    let completion = new Trie();

    let text = '/usr/share/dict/words';
    let dictionary = fs.readFileSync(text).toString('utf-8').trim().split('\n');

    completion.populate(dictionary);

    assert.equal(completion.count(), 235886);
  });

  it('should populate a dictionary and suggest words', () => {
    let completion = new Trie();
    let text = '/usr/share/dict/words';

    let dictionary = fs.readFileSync(text).toString('utf-8').trim().split('\n');

    completion.populate(dictionary);

    assert.equal(completion.count(), 235886);

    completion.suggest('piz');

   // the z gives me all the possiblities
   // we should probably find the last node our completion in relation to the word given to us (in our case thats z ). //findLastNode

   // you need to go through completion
   // and the word isn't complete
      // i'll take the letter push into something that will hold all my letters
   // 'pizz' + ['a','s']
   // push into some completedWord array
   // until you hit a complete word

    assert.deepEqual(completion.suggestions,
    ['pize', 'pizza', 'pizzeria', 'pizzicato', 'pizzle']
    );
  });

  it('should have a method of select()', () => {
    let completion = new Trie();

    assert.isFunction(completion.selected);
  });

  it('should store chosen suggestion', () => {
    let completion = new Trie();
    let text = '/usr/share/dict/words';

    let dictionary = fs.readFileSync(text).toString('utf-8').trim().split('\n');

    completion.populate(dictionary);

    assert.equal(completion.count(), 235886);

    completion.selected('piz');

    assert.equal(completion.selected(), ['piz', 'pizzeria']);
  });

// completion.select("piz", "pizzeria")
//
// completion.suggest("piz")
// => ["pizzeria", "pize", "pizza", "pizzicato", "pizzle", ...]

});
