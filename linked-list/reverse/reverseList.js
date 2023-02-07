class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  add(node) {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    lastNode.next = node;
  }

  reverse() {
    let prev = null;
    let next = null;
    let curr = this.head;

    while (curr !== null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    return prev;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const createList1 = () => {
  const l1 = new LinkedList(new Node(1));
  l1.add(new Node(2));
  l1.add(new Node(3));
  return l1;
};

const createList2 = () => {
  const l2 = new LinkedList(new Node(7));
  l2.add(new Node(15));
  l2.add(new Node(9));
  l2.add(new Node(2));
  return l2;
};

const createList3 = () => {
  const l3 = new LinkedList(new Node(1));
  return l3;
};

const l1 = createList1();
const l2 = createList2();
const l3 = createList3();

const reverse = () => {
  console.log(l1.reverse());
  console.log(l2.reverse());
  console.log(l3.reverse());
};

reverse();
