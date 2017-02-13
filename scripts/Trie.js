class CompleteMe {
  constructor() {
    this.words = [];
  }

  insert(word) {
    return this.words.push(word);
  }

  count() {
    return this.words.length;
  }

  suggest(query) {
    return this.words.filter((elem) =>
     elem.toLowerCase().indexOf(query.toLowerCase()) > -1
   )}
}



function filterItems(query) {
    return fruits.filter((el) =>
     el.toLowerCase().indexOf(query.toLowerCase()) > -1
    )
}

export default CompleteMe
