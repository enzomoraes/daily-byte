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
  removeFirst() {
    this.head = this.head.next;
  }

  findMiddleElement() {
    const size = this.size();
    const position = Math.floor(size / 2);

    if (position === 0) {
      return this.head;
    }
    let node = this.head;
    let count = 0;
    while (node.next && count < position) {
      count++;
      node = node.next;
    }
    return node;
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
  const l2 = new LinkedList(new Node(1));
  l2.add(new Node(2));
  l2.add(new Node(3));
  l2.add(new Node(4));
  return l2;
};

const createList3 = () => {
  const l3 = new LinkedList(new Node(1));
  return l3;
};

const l1 = createList1();
const l2 = createList2();
const l3 = createList3();

findMiddleElement = () => {
  console.log(l1.findMiddleElement());

  console.log(l2.findMiddleElement());

  console.log(l3.findMiddleElement());
};

findMiddleElement();
