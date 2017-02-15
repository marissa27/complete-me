import { assert } from 'chai';
import { expect } from 'chai';
import Trie from '../scripts/Trie.js'
import Node from '../scripts/Node.js'
const fs = require('fs');

describe('Trie', () => {

  beforeEach
  let trie = new Trie

  const text = "/usr/share/dict/words"
  // let dictionary = fs.readFileSystem(text).toString('utf-8').trim().split('\n')

  it('should be a constructor function', () => {
    assert.isFunction(Trie)
  })

  it('should have instance called trie', () => {
    expect(trie).to.be.an.instanceof(Trie);
  })

  it('should have a method of insert()', () => {
    assert.isFunction(trie.insert)
  })

  it('should have a method of count()', () => {
    assert.isFunction(trie.count)
  })

  it('should have a method of suggest()', () => {
    assert.isFunction(trie.suggest)
  })

  it('should know word end', () => {

    trie.insert('suh')

    assert.equal(trie.root.children.s.children.u.children.h.wordEnd, true)
  })

  it('should have 2 words', () => {
    let pizza = trie.insert('pizza');
    let suh = trie.insert('suh');

    // console.log(JSON.stringify(trie.root, null, 4))

    assert.equal(trie.words, 3);
  })

})

// const CompleteMe = require ("./lib/complete_me")
// const text       = "/usr/share/dict/words"
