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

  remove(data) {
    if (this.tree === null) return null
    this.tree = this.removeNode(this.tree, data)
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

  searchMin(node) {
    if (node.left !== null) return this.searchMin(node.left);
    return node;

  }

  removeNode(currNode, data) {
    console.log('Чекаем...');
    let isChildrenAbsent = currNode.left === null && currNode.right === null;
    if (currNode.data === data) { //если нашли нужный элемент
      console.log('Нашли');
      if (isChildrenAbsent) return null;
      if (currNode.left === null) return currNode.right;
      if (currNode.right === null) return currNode.left;

      let minFromRight = this.searchMin(currNode.right);
      currNode.data = minFromRight.data; //забираем в текущий узел значение минимума из правой ветки, вместо удаленного
      currNode.right = this.removeNode(currNode.right, minFromRight.data) // избавляемся от трупа минимального узла из правой ветки
      return currNode //возвращаем измененный текущий узел
    }
    //если не нашли, ищем дальше
    console.log('Не то!');
    if (data < currNode.data && currNode.left !== null) {
      console.log('Ищем левее...');
      currNode.left = this.removeNode(currNode.left, data)
    } else if (data > currNode.data && currNode.right !== null) {
      console.log('Ищем правее...');
      currNode.right = this.removeNode(currNode.right, data)
    }
      return currNode;
  }
}

module.exports = {
  BinarySearchTree
};