class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  get size() {
    return this.items.length;
  }
}

const stack = new Stack();
// stack.push(9);
// stack.push(100);
// stack.push(-4);
// stack.push(0);
// console.log(stack.size);
