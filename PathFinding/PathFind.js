import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import PathHeader from "./PathHeader";
import PathNodes from "./PathNodes";
import * as dijkstra from "../PathFinding/PathAlgorithms/Dijkstra";
import * as bfs from "../PathFinding/PathAlgorithms/BFS";
import * as dfs from "../PathFinding/PathAlgorithms/DFS";
import * as astar from "../PathFinding/PathAlgorithms/Astar";
import * as randomMaze from "../PathFinding/Maze/RandomMaze";
import * as bidijkstra from "../PathFinding/PathAlgorithms/BiDijkstra";
export default function PathFind({ navigation }) {
  const [nodes, setNodes] = useState([]);
  const [isMouseDown, setMouseDown] = useState(false);
  const [startrow, setStartrow] = useState(10);
  const [finishrow, setFinishrow] = useState(30);
  const [startcol, setStartcol] = useState(5);
  const [finishcol, setFinishcol] = useState(5);
  const [orientation, setOrientation] = useState("PORTRAIT");
  const [disable, setdisable] = useState(false);
  const [animationSpeed, setanimationSpeed] = useState(250)
  let rows = 40;
  let columns = 11;
  useEffect(() => {
    getNodes();
  }, []);
  function getNodes() {
    let Nodes = [];
    for (let i = 0; i < rows; i++) {
      let row = [];
      for (let j = 0; j < columns; j++) {
        row.push(createNodes(i, j));
      }
      Nodes.push(row);
    }
    setNodes(Nodes);
  }

  function createNodes(row, col) {
    return {
      col,
      row,
      isWall: false,
      isPath: false,
      mazeVisited: false,
      isStart: row === startrow && col === startcol,
      isFinish: row === finishrow && col === finishcol,
      isVisited: false,
      allNodes: false,
      distance: Infinity,
      totalDistance: 0,
      heuristic: 0,
      previousNode: null,
    };
  }
  function handleMouseDown(row, col) {
    // if (isStart !== true && isFinish !== true) {
    console.log("mouse down");
    let newNode = toggleNode(nodes, row, col);
    setNodes(newNode);
    setMouseDown(true);
  }
  function handleMouseEnter(row, col) {
    if (
      !isMouseDown
    ) {
      return;
    }
    if (isMouseDown === true) {
      console.log(row, col);
      let newNode = toggleNode(nodes, row, col);
      setNodes(newNode);
      return;
    }
  }
  function handleMouseUp() {
    console.log("released");
    setMouseDown(false);
  }
  function toggleNode(nodes, row, col) {
    let newNodes = nodes.slice();
    let node = newNodes[row][col];
    let newNode = {
      ...node,
      isWall: !node.isWall,
    };
    nodes[row][col] = newNode;
    return nodes;
  }

  async function Dijkstra() {
    await dijkstra.dijkstra(
      nodes,
      nodes[startrow][startcol],
      nodes[finishrow][finishcol],
      (nodes) => {
        setNodes(nodes);
      },
      animationSpeed,
      setdisable
    );
    let shortestPath = dijkstra.getNodesInShortestPathOrder(
      nodes[finishrow][finishcol]
    );
    // console.log(shortestPath);
    animateShortestPath(shortestPath, nodes);
    
    setdisable(false)
    console.log("dk");
  }
  async function Astar() {
    await astar.astar(
      nodes,
      nodes[startrow][startcol],
      nodes[finishrow][finishcol],
      (nodes) => {
        setNodes(nodes);
      },
      animationSpeed,
      setdisable
    );
    let shortestPath = astar.getNodesInShortestPathOrder(
      nodes[finishrow][finishcol]
    );
    
    animateShortestPath(shortestPath, nodes);
    setdisable(false)
    console.log("star");
  }
  async function Bfs() {
    await bfs.breadthfs(
      nodes,
      nodes[startrow][startcol],
      nodes[finishrow][finishcol],
      (nodes) => {
        setNodes(nodes);
      },
      animationSpeed,
      setdisable
    );
    let shortestPath = astar.getNodesInShortestPathOrder(
      nodes[finishrow][finishcol]
    );
    animateShortestPath(shortestPath, nodes);
    
    setdisable(false)
    console.log("Bfs");
  }

  async function Dfs() {
    await dfs.depthfs(
      nodes,
      nodes[startrow][startcol],
      nodes[finishrow][finishcol],
      (nodes) => {
        setNodes(nodes);
      },
      animationSpeed,
      setdisable
    );
    let shortestPath = astar.getNodesInShortestPathOrder(
      nodes[finishrow][finishcol]
    );
    animateShortestPath(shortestPath, nodes);
    setdisable(false)
    console.log("DFS");
  }

  async function BiDijkstra() {
    await bidijkstra.Bidirectionaldijkstra(
      nodes,
      nodes[startrow][startcol],
      nodes[finishrow][finishcol],
      (nodes) => {
        setNodes(nodes);
      },
      animationSpeed,
      setdisable
    );
    let shortestPath = bidijkstra.getBidirectionalShortestPath(
      nodes[finishrow][finishcol]
    );
    console.log(shortestPath);
    animateShortestPath(shortestPath, nodes);
    setdisable(false)
  }

  function clearGrid() {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        nodes[i][j].isVisited = false;
        removeBackgroundColor(nodes[i][j].row, nodes[i][j].col);
      }
    }
    setNodes([...nodes]);
  }

  function removeBackgroundColor(row, col) {
    if (
      (row === startrow && col === startcol) ||
      (row === finishrow && col === finishcol)
    ) {
      return;
    }
    nodes[row][col].mazeVisited = false;
    nodes[row][col].isWall = false;
    nodes[row][col].isPath = false;
  }

  async function animateShortestPath(shortestPath, nodes) {
    for (let i = 0; i < shortestPath.length; i++) {
      await colorShortestPath(shortestPath[i].row, shortestPath[i].col, nodes);
      setNodes([...nodes]);
    }
  }

  function colorShortestPath(row, col, nodes) {
    nodes[row][col].isPath = true;
    return new Promise((resolve) => setTimeout(resolve, 50));
  }

  async function RandomMaze() {
    await randomMaze.RandomDSF(
      nodes,
      nodes[startrow][startcol],
      nodes[finishrow][finishcol],
      (nodes) => {
        setNodes(nodes);
      }
    );
    nodes[finishrow][finishcol].isWall = false;
    setNodes([...nodes]);
  }
  function onhandleSpeedChange(value) {
    if (value === 2) {
      setanimationSpeed(1)
    }
    if (value === 1) {
      setanimationSpeed(100)
    }
    if (value === 0) {
      setanimationSpeed(250)
    }
    console.log(value)
  }
  return (
    <SafeAreaView
      style={{
        height: "100%",
        width: "100%",
        flex: 1,
        backgroundColor: "rgba(18, 18, 18, 0.94)",
        marginTop: 20,
      }}
    >
      <StatusBar animated={true} backgroundColor="grey" />
      <PathHeader
        onAstar={Astar}
        onDijkstra={Dijkstra}
        onBiDikstra={BiDijkstra}
        onBiDijkstra={BiDijkstra}
        onBfs={Bfs}
        onDfs={Dfs}
        onRandom={RandomMaze}
        onClear={clearGrid}
        navigation={navigation}
        onhandleSpeedChange={(slider)=>onhandleSpeedChange(slider)}
        disable={disable}
      />
      <View style={styles.box}>
        {nodes.map((row, rowidx) => {
          return (
            <View key={rowidx} style={styles.row}>
              {row.map((node, nodeidx) => {
                const {
                  row,
                  col,
                  isWall,
                  isStart,
                  isFinish,
                  isVisited,
                  isPath,
                } = node;
                return (
                  <PathNodes
                    iswall={isWall}
                    row={row}
                    col={col}
                    ispath={isPath}
                    isstart={isStart}
                    isfinish={isFinish}
                    isvisited={isVisited}
                    key={nodeidx}
                    handleMouseDown={(r, c) => handleMouseDown(r, c)}
                    handleMouseEnter={(r, c) => handleMouseEnter(r, c)}
                    handleMouseUp={() => handleMouseUp()}
                  />
                );
              })}
            </View>
          );
        })}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  box: {
    width: "98%",
    display: "flex",
    flexDirection: "row",
    height: "100%",
    alignSelf: "center",
    justifyContent: "center",
    bottom:15,
  },
});
