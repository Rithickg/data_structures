class PriorityQueue {
    constructor() {
      this.heap = [];
    }
  
    enqueue(node, distance) {
      this.heap.push({ node, distance });
      this.bubbleUp();
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return null;
      }
  
      const min = this.heap[0];
      const last = this.heap.pop();
  
      if (this.heap.length > 0) {
        this.heap[0] = last;
        this.bubbleDown();
      }
  
      return min;
    }
  
    isEmpty() {
      return this.heap.length === 0;
    }
  
    bubbleUp() {
      let currentIdx = this.heap.length - 1;
  
      while (currentIdx > 0) {
        const parentIdx = Math.floor((currentIdx - 1) / 2);
        if (this.heap[currentIdx].distance < this.heap[parentIdx].distance) {
          [this.heap[currentIdx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[currentIdx]];
          currentIdx = parentIdx;
        } else {
          break;
        }
      }
    }
  
    bubbleDown() {
      let currentIdx = 0;
  
      while (true) {
        const leftChildIdx = 2 * currentIdx + 1;
        const rightChildIdx = 2 * currentIdx + 2;
        let smallestChildIdx = currentIdx;
  
        if (leftChildIdx < this.heap.length && this.heap[leftChildIdx].distance < this.heap[smallestChildIdx].distance) {
          smallestChildIdx = leftChildIdx;
        }
  
        if (rightChildIdx < this.heap.length && this.heap[rightChildIdx].distance < this.heap[smallestChildIdx].distance) {
          smallestChildIdx = rightChildIdx;
        }
  
        if (smallestChildIdx !== currentIdx) {
          [this.heap[currentIdx], this.heap[smallestChildIdx]] = [this.heap[smallestChildIdx], this.heap[currentIdx]];
          currentIdx = smallestChildIdx;
        } else {
          break;
        }
      }
    }
  }
  
  function dijkstra(graph, start) {
    const distances = {};
    const priorityQueue = new PriorityQueue();
  
    for (const node in graph) {
      distances[node] = Infinity;
    }
  
    distances[start] = 0;
    priorityQueue.enqueue(start, 0);
  
    while (!priorityQueue.isEmpty()) {
      const { node, distance } = priorityQueue.dequeue();
  
      if (distance > distances[node]) {
        continue;
      }
  
      for (const neighbor in graph[node]) {
        const newDistance = distances[node] + graph[node][neighbor];
        if (newDistance < distances[neighbor]) {
          distances[neighbor] = newDistance;
          priorityQueue.enqueue(neighbor, newDistance);
        }
      }
    }
  
    return distances;
  }
  
  // Example usage:
  const graph = {
    A: { B: 10, C: 6 },
    B: { A: 10, D: 5 },
    C: { A: 6, D: 15, E: 6 },
    D: { B: 5, C: 15, F: 8 },
    E: { C: 6, F: 9 },
    F: { D: 8, E: 9 },
  };
  
  const startNode = 'A';
  const result = dijkstra(graph, startNode);
  
  console.log(`Shortest distances from ${startNode}:`, result);
  