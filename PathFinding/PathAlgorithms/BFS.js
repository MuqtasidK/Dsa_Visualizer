
export async function breadthfs(nodes,startnode,endnode,setNodes,speed,setdisable){
    let queue = [];
    let visitedNodes = [];
    setdisable(true)
    startnode.distance=0;
    queue.push(startnode)
    while(queue.length > 0){
        let currentNode = queue.shift();
        if(currentNode === endnode){
             return visitedNodes
        }
        if(currentNode.isWall || currentNode.isVisited) continue
        currentNode.isVisited = true;
        await colorNeighbour(setNodes,nodes,speed)
        if(currentNode.distance === Infinity) return visitedNodes
        visitedNodes.push(currentNode);
        updateUnvisitedNeighbors(currentNode,nodes,queue)
    }
}

function colorNeighbour(setNodes,nodes,speed){
  setNodes([...nodes])
  return new Promise(resolve => setTimeout(resolve,speed))
}
function updateUnvisitedNeighbors(node, nodes,queue) {
    const unvisitedNeighbors = getUnvisitedNeighbors(node, nodes);
    for (const neighbor of unvisitedNeighbors) {
      neighbor.distance = node.distance + 1;
      neighbor.previousNode = node;
      queue.push(neighbor)
    }
  }


function getUnvisitedNeighbors(node, nodes) {
    const neighbors = [];
    const {col, row} = node;
    if (row > 0) neighbors.push(nodes[row - 1][col]);
    if (row < nodes.length - 1) neighbors.push(nodes[row + 1][col]);
    if (col > 0) neighbors.push(nodes[row][col - 1]);
    if (col < nodes[0].length - 1) neighbors.push(nodes[row][col + 1]);
    return neighbors.filter(neighbor => !neighbor.isVisited);
  }