import dijkstra from '../algorithms/dijkstra';
import useClearBoard from './useClearBoard';
import { useAlgorithmContext } from '../contexts/Context';

function useVisualizeDijkstra() {
  const clearBoard = useClearBoard('keep-walls', 'keep-path-found');
  const { grid, startNode, endNode, setisAnimating, setPathFound } = useAlgorithmContext();

  return function () {
    clearBoard();
    setisAnimating(true);

    const { visitedNodes, nodesPath } = dijkstra(grid, startNode, endNode);

    for (let i = 0; i <= visitedNodes.length; i++) {
      // visualize shortest path at the end of the loop
      if (i === visitedNodes.length) {
        setTimeout(() => animateShortestPath(nodesPath), 10 * i);
        if (!nodesPath.length) setTimeout(() => setisAnimating(false), 10 * i);
        continue;
      }

      setTimeout(() => {
        const { row, col } = visitedNodes[i];
        document.getElementById(`node-${row}-${col}`).classList.add('node-visited');
      }, 10 * i);
    }

    function animateShortestPath(nodesPath) {
      for (let i = 0; i <= nodesPath.length; i++) {
        if (i === nodesPath.length) {
          setTimeout(() => {
            setisAnimating(false);
            // allow for instant visualization
            setPathFound(true);
          }, 50 * i);
          continue;
        }

        setTimeout(() => {
          const { row, col } = nodesPath[i];
          document.getElementById(`node-${row}-${col}`).classList.add('node-shortest-path');
        }, 50 * i);
      }
    }
  };
}

export default useVisualizeDijkstra;
