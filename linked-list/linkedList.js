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
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const createList1 = () => {
  const l1 = new LinkedList(new Node(4));
  l1.add(new Node(4));
  l1.add(new Node(7));
  return l1;
};

const createList2 = () => {
  const l2 = new LinkedList(new Node(1));
  l2.add(new Node(5));
  l2.add(new Node(6));
  return l2;
};

const l1 = createList1();
const l2 = createList2();

const merge = (l1, l2) => {
  const merged = new LinkedList();

  let times = l1.size() + l2.size();
  let count = 0;
  while (count < times) {
    count++;
    if (!l1.head) {
      merged.add(new Node(l2.head.data));
      l2.removeFirst();
      continue;
    }
    if (!l2.head) {
      merged.add(new Node(l1.head.data));
      l1.removeFirst();
      continue;
    }
    const l1Data = l1.head;
    const l2Data = l2.head;

    if (l1Data.data <= l2Data.data) {
      if (!merged.head) {
        merged.head = new Node(l1Data.data);
        l1.removeFirst();
        continue;
      }
      merged.add(new Node(l1Data.data));
      l1.removeFirst();
    }
    if (l2Data.data < l1Data.data) {
      if (!merged.head) {
        merged.head = new Node(l2Data.data);
        l2.removeFirst();
        continue;
      }
      merged.add(new Node(l2Data.data));
      l2.removeFirst();
    }
  }
  return merged;
};

console.log(JSON.stringify(merge(l1, l2)));
