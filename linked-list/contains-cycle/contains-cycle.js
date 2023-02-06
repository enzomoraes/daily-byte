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

  containsCycle() {
    let map = new Map();
    let node = this.head;
    let size = this.size();
    let count = 0;
    let contains = false;
    let where = null;
    while (count < size) {
      if (map.has(node.data)) {
        contains = true;
        where = node.data;
      }
      map.set(node.data, { position: count });
      count++;
      node = node.next;
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
  l1.add(new Node(1));
  return l1;
};

const createList2 = () => {
  const l2 = new LinkedList(new Node(1));
  l2.add(new Node(2));
  l2.add(new Node(3));
  return l2;
};

const createList3 = () => {
  const l3 = new LinkedList(new Node(1));
  l3.add(new Node(1));
  return l3;
};

const l1 = createList1();
const l2 = createList2();
const l3 = createList3();

containsCycle = () => {
  console.log(l1.containsCycle());

  console.log(l2.containsCycle());

  console.log(l3.containsCycle());
};

containsCycle();
