export async function depthfs(nodes,startnode,endnode,setNodes,speed,setdisable){
  let unvisitedNodes = [];
  let visitedNodes = [];
  setdisable(true)
  unvisitedNodes.push(startnode);
  while(unvisitedNodes.length > 0){
      let currentNode = unvisitedNodes.shift();
      if(currentNode === endnode) return visitedNodes;
      if(currentNode.isWall) continue;
      visitedNodes.push(currentNode)
      currentNode.isVisited = true;
      await colorNeighbour(setNodes,nodes,speed)
      let unvisitedNeighbors = getUnvisitedNeighbors(currentNode,nodes)
      for(let unvisitedNeighbor of unvisitedNeighbors){
          unvisitedNeighbor.previousNode = currentNode;
          unvisitedNodes.unshift(unvisitedNeighbor)
      }
  }
  return visitedNodes;
}

function colorNeighbour(setNodes,nodes,speed){
  setNodes([...nodes])
  return new Promise(resolve => setTimeout(resolve,speed))
}

function getUnvisitedNeighbors(node, nodes) {
  const neighbors = [];
  const {col, row} = node;
  if (col > 0) neighbors.push(nodes[row][col - 1]);
  if (row > 0) neighbors.push(nodes[row - 1][col]);
  if (row < nodes.length - 1) neighbors.push(nodes[row + 1][col]);
  if (col < nodes[0].length - 1) neighbors.push(nodes[row][col + 1]);
  return neighbors.filter(neighbor => !neighbor.isVisited);
}