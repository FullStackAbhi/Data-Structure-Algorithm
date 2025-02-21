class Heap {
  constructor() {
    this.data = [];
  }

  getLeftChildIndex(i) {
    return 2 * i + 1;
  }

  getRightChildIndex(i) {
    return 2 * i + 2;
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  swap(i1, i2) {
    [this.data[i1], this.data[i2]] = [this.data[i2], this.data[i1]];
  }

  insert(key) {
    this.data.push(key);
    this.heapifyUp();
  }

  heapifyUp() {
    let currentIndex = this.data.length - 1;

    while (
      currentIndex > 0 &&
      this.data[currentIndex] > this.data[this.getParentIndex(currentIndex)]
    ) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  delete() {
    if (this.data.length === 0) return null;
    if (this.data.length === 1) return this.data.pop();

    const maxValue = this.data[0];
    this.data[0] = this.data.pop(); // Move last element to root
    this.heapifyDown();
    return maxValue;
  }

  heapifyDown() {
    let currentIndex = 0;

    while (this.getLeftChildIndex(currentIndex) < this.data.length) {
      let biggestIndex = this.getLeftChildIndex(currentIndex);
      let rightIndex = this.getRightChildIndex(currentIndex);

      if (
        rightIndex < this.data.length &&
        this.data[rightIndex] > this.data[biggestIndex]
      ) {
        biggestIndex = rightIndex;
      }

      if (this.data[currentIndex] < this.data[biggestIndex]) {
        this.swap(currentIndex, biggestIndex);
        currentIndex = biggestIndex;
      } else {
        break;
      }
    }
  }
}

// Example Usage
const maxHeap = new Heap();
maxHeap.insert(10);
maxHeap.insert(20);
maxHeap.insert(5);
maxHeap.insert(30);
console.log(maxHeap.data); // [30, 20, 5, 10]

console.log(maxHeap.delete()); // 30
console.log(maxHeap.data); // [20, 10, 5]


// 215. Kth Largest Element in an Array
var findKthLargest = function(nums, k) {
    let minHeap = new MinHeap();
    
    for (let num of nums) {
        minHeap.insert(num);
        if (minHeap.data.length > k) {
            minHeap.remove(); // Keep only K largest elements
        }
    }
    
    return minHeap.data[0]; // Root of min heap is the Kth largest element
};