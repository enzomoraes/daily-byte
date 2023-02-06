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

  returnStartOfCycle() {
    let map = new Map();
    let currentNode = this.head;
    let size = this.size();
    let count = 0;
    let contains = false;
    let where = null;
    while (count < size) {
      if (map.has(currentNode.data)) {
        contains = true;
        where = currentNode.data;
      }
      map.set(currentNode.data, { position: count, node: currentNode });
      count++;
      currentNode = currentNode.next;
    }
    return { contains, pointTo: map.get(where) };
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
  l2.add(new Node(5));
  l2.add(new Node(2));
  return l2;
};

const createList3 = () => {
  const l3 = new LinkedList(new Node(1));
  l3.add(new Node(9));
  l3.add(new Node(3));
  l3.add(new Node(7));
  l3.add(new Node(7));
  return l3;
};

const l1 = createList1();
const l2 = createList2();
const l3 = createList3();

returnStartOfCycle = () => {
  console.log(l1.returnStartOfCycle());

  console.log(l2.returnStartOfCycle());

  console.log(l3.returnStartOfCycle());
};

returnStartOfCycle();
