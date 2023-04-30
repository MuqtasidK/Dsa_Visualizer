export async function RandomDSF(Nodes, startNode, endNode, setNodes) {
    let start = startNode;
    start.mazeVisited = true;
    let unVisitedNeighbours = [];
    let stack = [];
    unVisitedNeighbours = getUnvisitedNeighbors(Nodes, start);
    let currentNode = start;
    stack.push(currentNode);
    while (stack !== null) {
      await colorNode(currentNode);
      if (unVisitedNeighbours !== null) {
        let next =
        unVisitedNeighbours[
          Math.floor(Math.random() * unVisitedNeighbours.length)
        ];
        stack.push(next)
        addWall(Nodes, currentNode, next);
        currentNode = next;
        setNodes([...Nodes]);
        unVisitedNeighbours = getUnvisitedNeighbors(Nodes, currentNode);
      } else if(stack.length>=1) {
        currentNode = stack.pop();
        unVisitedNeighbours = getUnvisitedNeighbors(Nodes, currentNode);
      }else{
        return
      }
    }
  }
  
  function colorNode(node) {
    node.mazeVisited = true;
    return new Promise((resolve) => setTimeout(resolve));
  }
  
  function getUnvisitedNeighbors(nodes, node) {
    const neighbors = [];
    const { col, row } = node;
    if (row < nodes.length - 2) neighbors.push(nodes[row + 2][col]);
    if (row > 1) neighbors.push(nodes[row - 2][col]);
    if (col < nodes[0].length - 2) neighbors.push(nodes[row][col + 2]);
    if (col > 1) neighbors.push(nodes[row][col - 2]);
    let filteredNeighbours = neighbors.filter(
      (neighbor) => !neighbor.mazeVisited
    );
    if (filteredNeighbours.length >= 1) return filteredNeighbours;
    return null;
  }
  
  function addWall(nodes, node1, node2) {
    let x = node1.row - node2.row;
    let y = node1.col - node2.col;
    if (x === 2) {
      nodes[node1.row - 1][node1.col].isWall = true;
    } else if (x === -2) {
      nodes[node1.row + 1][node1.col].isWall = true;
    }
    if (y === 2) {
      nodes[node1.row][node1.col - 1].isWall = true;
    } else if (y === -2) {
      nodes[node1.row][node1.col + 1].isWall = true;
    }
  }