function dijkstra(grid, startNode, endNode) {
  const queue = [];
  const visitedNodes = [];
  startNode.distance = 0;

  for (const row of grid) {
    for (const cell of row) {
      queue.push(cell);
    }
  }

  while (queue.length) {
    queue.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
    const currentNode = queue.shift();
    if (currentNode.isVisited) continue;
    if (currentNode.isWall) continue;
    if (currentNode.distance === Infinity) break;
    currentNode.isVisited = true;
    visitedNodes.push(currentNode);
    if (currentNode === endNode) break;

    const { row, col } = currentNode;
    const neighbors = [];

    // gets the nodes around
    if (row > 0) neighbors.push(grid[row - 1][col]);
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
    if (col > 0) neighbors.push(grid[row][col - 1]);
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);

    for (const neighbor of neighbors) {
      if (neighbor.isVisited) continue;
      if (neighbor.distance > currentNode.distance + 1) {
        neighbor.distance = currentNode.distance + 1;
        neighbor.previousNode = currentNode;
      }
    }
  }

  // trace the path
  if (!endNode.previousNode) return { visitedNodes, nodesPath: [] };

  // backtracks from the finishNode to find the shortest path.
  const path = [];
  let currentCell = endNode;

  while (currentCell !== null) {
    path.push(currentCell);
    currentCell = currentCell.previousNode;
  }
  
  return { visitedNodes, nodesPath: path.reverse() };
}

export default dijkstra;
