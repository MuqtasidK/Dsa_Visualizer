export async function dijkstra(nodes, startNode, endNode, setNodes,speed,setdisable) {
  startNode.distance = 0;
  setdisable(true)
  let unvisitedNodes = getAllNodes(nodes);
  while (!!unvisitedNodes.length) {
    sortNodes(unvisitedNodes);
    const closestNode = unvisitedNodes.shift();
    if (closestNode.isWall) {
      continue;
    }
    if (closestNode.distance === Infinity) {
      return;
    }
    if (closestNode === endNode) {
      return;
    }
    closestNode.isVisited = true;
    await colorNeighbour(setNodes, nodes,speed);
    await updateUnvisitedNeighbors(closestNode, nodes);
  }
  return;
}

function colorNeighbour(setNodes, nodes,speed) {
  setNodes([...nodes]);
  return new Promise((resolve) => setTimeout(resolve, speed));
}

function getAllNodes(nodes) {
  let nodearray = [];
  for (const row of nodes) {
    for (const node of row) {
      nodearray.push(node);
    }
  }
  return nodearray;
}

function sortNodes(unvisitednodes) {
  unvisitednodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

async function updateUnvisitedNeighbors(node, nodes) {
  const unvisitedNeighbors = getUnvisitedNeighbors(node, nodes);
  for (const neighbor of unvisitedNeighbors) {
    neighbor.distance = node.distance + 1;
    neighbor.previousNode = node;
  }
}

function getUnvisitedNeighbors(node, nodes) {
  const neighbors = [];
  const { col, row } = node;
  if (row > 0) neighbors.push(nodes[row - 1][col]);
  if (row < nodes.length - 1) neighbors.push(nodes[row + 1][col]);
  if (col > 0) neighbors.push(nodes[row][col - 1]);
  if (col < nodes[0].length - 1) neighbors.push(nodes[row][col + 1]);
  return neighbors.filter((neighbor) => !neighbor.isVisited);
}

export function getNodesInShortestPathOrder(finishNode) {
  const nodesInShortestPathOrder = [];
  let currentNode = finishNode;
  while (currentNode !== null) {
    nodesInShortestPathOrder.unshift(currentNode);
    currentNode = currentNode.previousNode;
  }
  return nodesInShortestPathOrder;
}
