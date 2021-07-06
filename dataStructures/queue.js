class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item) {
    return (this.items[this.tailIndex++] = item);
  }
  dequeue() {
    const deleted = this.items[this.headIndex];
    if (deleted !== undefined) {
      delete this.items[this.headIndex++];
      return deleted;
    }
  }
  peek() {
    return this.items[this.headIndex];
  }
  isEmpty() {
    return this.tailIndex - this.headIndex === 0 ? true : false;
  }
  get length() {
    return this.tailIndex - this.headIndex;
  }
}

const queue = new Queue();
queue.enqueue(100);
queue.enqueue(9);
queue.enqueue(0);
queue.enqueue(-4);
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
console.log(queue);
