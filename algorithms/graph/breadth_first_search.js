// Breadth First Search 

function bfs(graph,start){
    const visited = new Set();
    const queue = [start];

    while(queue.length > 0){
        const node = queue.shift();
        if(!visited.has(node)){
            visited.add(node);
            queue.push(...graph[node])
        }
    }

    return [...visited];
}

const graph = {
    A:['B','C'],
    B:['A','D','E'],
    C:['A','F','G'],
    D:['B'],
    E:['B','H'],
    F:['C'],
    G:['C'],
    H:['E']
}
const startNode = 'A'
const search = bfs(graph,startNode)
console.log(search)