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

  removeNthFromRight(nth) {
    const size = this.size();
    const positionToRemove = size - nth;

    if (positionToRemove === 0) {
      this.head = this.head.next;
      return;
    }
    let node = this.head;
    let count = 0;
    while (node.next && count < positionToRemove - 1) {
      console.log(count);
      count++;
      node = node.next;
    }
    node.next = node.next.next;
    return;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const removeNth = nth => {
  const createList1 = () => {
    const l1 = new LinkedList(new Node(1));
    l1.add(new Node(2));
    l1.add(new Node(3));
    return l1;
  };
  const l1 = createList1();

  l1.removeNthFromRight(nth);
  console.log(l1);
};

removeNth(1);
removeNth(2);
removeNth(3);
