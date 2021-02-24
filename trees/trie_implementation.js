class Node {
  constructor() {
    this.isWord = false;
    this.next = {};     // letter -> Node
  }
}

class WordsTrie {
  constructor() {
    this.root = new Node();
  }

  addWord(word) {
    let node = this.root;
    for (let ch of word) {
      if (node.next[ch] == null) {
        node.next[ch] = new Node();
      }
      node = node.next[ch];
    }
    node.isWord = true;
  }

  deleteWord(word) {
    if (!this.isWord(word)) {
      return false;
    }
    this._deleteRecursively(word, 0, this.root);
    return true;
  }

  _deleteRecursively(word, char_idx, node) {
    if (node == null) {
      return false; 
    }

    let shouldDelete = true;
    if (char_idx < word.length) {
      shouldDelete = this._deleteRecursively(word, char_idx + 1, node.next[word[char_idx]])
    } 
    if (char_idx == word.length) {
      node.isWord = false;
      // remove node if it has an empty next dicionary
      return Object.keys(node.next).length == 0;
    }

    if (shouldDelete && node.isWord == false && Object.keys(node.next[word[char_idx]].next).length <= 1) {
      delete node.next[word[char_idx]]
      return true;
    } else {
      return false;
    }
  }

  isWord(word) {
    let node = this.root;
    for (let ch of word) {
      if (node.next[ch] == null){
        return false;
      }
      node = node.next[ch];
    }
    return node.isWord;
  }

  getAllWords() {
    const char_array = [];
    const words = [];
    this._addWordsDFS(this.root, char_array, words);
    return words;
  }

  _addWordsDFS(node, char_array, words_array) {
    if (node.isWord) {
      words_array.push(char_array.join(''));
    }
    for (let ch in node.next) {
      char_array.push(ch);
      this._addWordsDFS(node.next[ch], char_array, words_array);
      char_array.pop();
    }
  }
}

let wordsTrie = new WordsTrie()

wordsTrie.addWord('gggg')
wordsTrie.addWord('ab')
wordsTrie.addWord('abcd')
wordsTrie.addWord('house')
wordsTrie.addWord('house2')
console.log(wordsTrie.getAllWords())

wordsTrie.deleteWord('gggg')
wordsTrie.deleteWord('abcd')
wordsTrie.deleteWord('house')

console.log(wordsTrie.getAllWords())

