export async function astar(nodes,startNode,endNode,setNodes,speed,setdisable){
    let openSet = []
    let closedSet = []
    
    setdisable(true)
    startNode.distance = 0;
    startNode.heuristic =0;
    startNode.totalDistance =0;
    openSet.push(startNode)
    while(openSet.length !== 0){
        let currentNode = getClosestNode(openSet)
        if(currentNode.distance === Infinity) return closedSet
        if(currentNode === endNode) return closedSet
        openSet = removeFromArray(currentNode,openSet);
        if (currentNode.isWall) continue
        currentNode.isVisited = true;
        await colorNeighbour(setNodes,nodes,speed)
        openSet =  updateNeighbours(currentNode,nodes,endNode,openSet,closedSet)
        closedSet.push(currentNode)
        // console.log(closedSet)
    }
}

function colorNeighbour(setNodes,nodes,speed){
    setNodes([...nodes])
    return new Promise(resolve => setTimeout(resolve,speed))
}

function getClosestNode(openSet){
    let winner = 0;
    if(openSet.length > 0){
        for(let i=1;i<openSet.length;i++){
            if(openSet[i].totalDistance < openSet[winner].totalDistance) winner = i;
            else if(openSet[i].totalDistance === openSet[winner].totalDistance){
                if(openSet[i].heuristic> openSet[winner].heuristic) winner =i;
            }
        }
    }
    return openSet[winner]
}

function removeFromArray(node,openSet){
    for(let i= openSet.length-1;i>=0;i--){
        if(openSet[i]===node) openSet.splice(i,1)
    }
    // console.log(openSet)
    return openSet
}

function updateNeighbours(node,nodes,endNode,openSet,closedSet){
    let unvisitedNeighbors = getUnvisitedNeighbors(node,nodes)
    for(let i=0;i< unvisitedNeighbors.length;i++){
        let neighbor = unvisitedNeighbors[i]
        if(!closedSet.includes(neighbor)){
            let newDistance = node.distance + 1
            if(openSet.includes(neighbor)){
                if(newDistance < neighbor.distance){
                    neighbor.distance = newDistance
                }
            }
            else{
                neighbor.distance = newDistance
                openSet.push(neighbor)
            }
            neighbor.heuristic = heuristic(neighbor,endNode)
            neighbor.totalDistance = neighbor.distance + neighbor.heuristic
            neighbor.previousNode =  node;
        }
    }
    return openSet
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

function heuristic(a,b){
    let x = Math.abs(a.row - b.row)
    let y = Math.abs(a.col - b.col)
    return x+y;
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