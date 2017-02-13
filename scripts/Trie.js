class CompleteMe {
  constructor() {
    this.words = [];
    this.populate = []
  }

  insert(word) {
    return this.words.push(word);
  }

  count() {
    return this.words.length;
  }

  countDictionary() {
    return this.populate.length;
  }

  suggest(query) {
    return this.words.filter((elem) =>
     elem.toLowerCase().indexOf(query.toLowerCase()) > -1
   )}

   populate(dictionary) {
     return this.populate.push(dictionary);
   }
}


export default CompleteMe
