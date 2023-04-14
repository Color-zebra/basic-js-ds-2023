const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor () {
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  add(data) {
    if (this.tree === null) {
      this.tree = new Node(data);
      return
    }

    let curr = this.tree;
    while (curr) {
      if (data < curr.data && !curr.left) {
        curr.left = new Node(data);
        return
      }
      if (data < curr.data && curr.left) {
        curr = curr.left;
      }
      if (data > curr.data && !curr.right) {
        curr.right = new Node(data);
        return
      }
      if (data > curr.data && curr.right) {
        curr = curr.right;
      }
    }
  }

  has(data) {
    let curr = this.tree;
    while (curr) {
      if (curr.data === data) return true;
      if (curr.data > data) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
    return false;
  }

  find(data) {
    let curr = this.tree;
    while (curr) {
      if (curr.data === data) return curr;
      if (curr.data > data) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
    return null;
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if (this.tree === null) return null
    let curr = this.tree;
    while (curr.left) {
      curr = curr.left
    }
    return curr.data
  }

  max() {
    if (this.tree === null) return null
    let curr = this.tree;
    while (curr.right) {
      curr = curr.right
    }
    return curr.data
  }
}

module.exports = {
  BinarySearchTree
};