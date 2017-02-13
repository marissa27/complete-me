import { assert } from 'chai';
import { expect } from 'chai';
import CompleteMe from '../scripts/Trie.js'
const fs = require('fs');

describe('CompleteMe', () => {

  let completion = new CompleteMe

  const text = "/usr/share/dict/words"
  let dictionary = fs.readFileSystem(text).toString('utf-8').trim().split('\n')

  it('should be a constructor function', () => {
    assert.isFunction(CompleteMe)
  })

  it('should have instance called completion', () => {
    expect(completion).to.be.an.instanceof(CompleteMe);
  })

  it('should have a method of insert()', () => {
    assert.isFunction(completion.insert)
  })

  it('should have a method of count()', () => {
    assert.isFunction(completion.count)
  })

  it('should have a method of suggest()', () => {
    assert.isFunction(completion.suggest)
  })

  it('should take pizza and push into array', () => {
    completion.insert('pizza');
    assert.deepEqual(completion.words, [ 'pizza' ] )
  })

  it('should push suh into words []', () => {
    completion.insert('suh');
    assert.equal(completion.words.length, 2)
  })

  it('should suggest a word', () => {
    assert.deepEqual(completion.suggest('piz'), ['pizza'])
    assert.deepEqual(completion.suggest('suh'), ['suh'])
  })

  it('should return nothing if no word matches', () => {
    assert.deepEqual(completion.suggest('m'), [])
  })

  it('should push dictionary into populate []', () => {
    completion.populate(dictionary);
    assert.equal(completion.populate.length, 235886)
  })

})

// const CompleteMe = require ("./lib/complete_me")
// const text       = "/usr/share/dict/words"
