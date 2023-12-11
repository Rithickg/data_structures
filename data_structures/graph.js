// Graphs 

class Graph{
    constructor(){
        this.adjacencyList = new Map();
    }

    addVertex(vertex){
        if(!this.adjacencyList.has(vertex)){
            this.adjacencyList.set(vertex,[]);
        }
    }

    addEdge(vertex1,vertex2){
        this.addVertex(vertex1);
        this.addVertex(vertex2);

        this.adjacencyList.get(vertex1).push(vertex2);
        this.adjacencyList.get(vertex2).push(vertex1);
    }

    removeVertex(vertex){
        if(this.adjacencyList.has(vertex)){
            for(const neighbor of this.adjacencyList.get(vertex)){
                this.adjacencyList.get(neighbor).filter(v => v !== vertex);
            }
            this.adjacencyList.delete(vertex);
        }
    }

    removeEdge(vertex1,vertex2){
        if(this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)){
            this.adjacencyList.set(vertex,this.adjacencyList.get(vertex1).filter(v => v !== vertex2));
        }
    }

    depthFirstSearch(startVertex){
        const visited = new Set();
        const result = [];

        const dfs = (vertex)=>{
            visited.add(vertex);
            result.push(vertex);

            for(const neighbor of this.adjacencyList.get(vertex)){
                if(!visited.has(neighbor)){
                    dfs(neighbor);
                }
            }
        }
        dfs(startVertex);
            
        return result;
    }

    breadthFirstSearch(startVertex){
        const visited = new Set();
        const result = [];
        const queue = [startVertex];

        visited.add(startVertex);

        while(queue.length > 0){
            const currentVertex = queue.shift();
            result.push(currentVertex);

            for(const neighbor of this.adjacencyList.get(currentVertex)){
                if(!visited.has(neighbor)){
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }

        return result;
    }
}


const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
console.log("vertex",graph);

graph.addEdge('A','B');
graph.addEdge('B','C');
graph.addEdge('C','D');
graph.addEdge('D','A');
console.log("With Edges",graph)

console.log('DFS',graph.depthFirstSearch('B'));
console.log('BFS',graph.breadthFirstSearch('D'))
