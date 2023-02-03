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

  removeByValue(value) {
    let count = 0;
    let currentNode = this.head;
    while (count < this.size()) {
      if (count === 0 && currentNode.data === value) {
        this.head = currentNode.next;
        count++;
        continue;
      }

      count++;
      while (currentNode.next?.data === value) {
        currentNode.next = currentNode.next.next;
        count++;
      }
      currentNode = currentNode.next;
    }
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
  const l2 = new LinkedList(new Node(8));
  l2.add(new Node(1));
  l2.add(new Node(1));
  l2.add(new Node(4));
  l2.add(new Node(12));
  return l2;
};

const createList3 = () => {
  const l3 = new LinkedList(new Node(7));
  l3.add(new Node(12));
  l3.add(new Node(2));
  l3.add(new Node(9));
  return l3;
};

const l1 = createList1();
const l2 = createList2();
const l3 = createList3();

removeByValue = () => {
  l1.removeByValue(3);
  console.log(JSON.stringify(l1));

  l2.removeByValue(1);
  console.log(JSON.stringify(l2));

  l3.removeByValue(7);
  console.log(JSON.stringify(l3));
};

removeByValue();
