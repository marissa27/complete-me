import { assert } from 'chai';
import { expect } from 'chai';
import Node from '../scripts/Node.js'

describe('Node', () => {

  it('should be a constructor function', () => {
    assert.isFunction(Node)
  })

  it('should take in data', () => {
    let newNode = new Node('word');

    assert.equal(newNode.data, 'word')
  })

  it('should have instance called newNode', () => {
    let newNode = new Node('w');

    expect(newNode).to.be.an.instanceof(Node);
  })



})
