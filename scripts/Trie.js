import Node from '../scripts/Node.js';

class Trie {
  constructor () {
    this.root = new Node();
    this.length = 0;
    this.suggestions = [];
  }

  insert (word) {
    let wordArr = word.split('');
    let current = this.root;

    wordArr.forEach(letter => {
      if ( current.children[letter] ) {
        current = current.children[letter];
      } else {
        current.children[letter] = new Node(letter);
        current = current.children[letter];
      }
    });

    this.length++;
    current.wordEnd = true;
  }

  count () {
    return this.length;
  }

  suggest (string) {
    let currentNode = this.root;
    let stringArray = string.split('');

    for (var i = 0; i < stringArray.length; i++) {
      if (currentNode.children[stringArray[i]]) {
        currentNode = currentNode.children[stringArray[i]];
      }
      else {
        return [];
      }
    }
    this.words(currentNode, string);
  }

  words (node, string) {
    if (node.wordEnd) {
      this.suggestions.push(string);
    }

    let nodeKeys = Object.keys(node.children);
    nodeKeys.forEach((letter) => {
      let nextNode = node.children[letter];
      this.words(nextNode, (string + letter));
    });
  }

  populate (array) {
    array.forEach(word  => {
      this.insert(word);
    });
  }

  selected (substring) {
    // need array of returned suggested words
    // let suggestedArray = this.suggest(substring);
    // console.log(this.suggestions);
    // console.log(suggestedArray);


    // let user choose a word


    // return suggest string and chosen word


// Your library should support a select method which takes a substring and the selected suggestion.

//You will need to record this selection in your trie and use it to influence future selections to make.
  }
}

export default Trie;
