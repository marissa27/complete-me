import Node from '../scripts/Node.js'

class Trie {
  constructor () {
    this.root = new Node();
    this.words = 0;
  }

  insert (word) {
    let wordArr = word.split('');
    let current = this.root;

    wordArr.forEach((letter,index) => {
      if( current.children[letter] ) {
        current = current.children[letter];
      }
        current.children[letter] = new Node(letter);
        current = current.children[letter];
    })
    this.words++
    current.wordEnd = true;
  }

  count () {
    return this.length;
  }

  countDictionary () {

  }

  suggest (string) {

    // return this.words.filter((elem) =>
    //  elem.toLowerCase().indexOf(query.toLowerCase()) > -1
  //  )
 }

   populate (dictionary) {
     return this.populate.push(dictionary);
   }
}
//
export default Trie
