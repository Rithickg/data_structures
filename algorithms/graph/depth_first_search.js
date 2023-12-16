// Depth First Search 

function dfs(graph,start,visited = new Set()){
   
    visited.add(start);

    for(const neighbor of graph[start]){
        if(!visited.has(neighbor)){
            dfs(graph,neighbor,visited);
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
const search = dfs(graph,startNode)
console.log(search)