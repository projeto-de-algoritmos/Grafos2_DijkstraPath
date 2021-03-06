import { useEffect } from 'react';
import Node from '../Node';
import useMouseActions from '../../hooks/useMouseActions';
import { useAlgorithmContext } from '../../contexts/Context';
import * as S from './styles';

function Grid() {
  const { grid, setGrid, setStartNode, setEndNode, NUMBER_OF_ROWS, NUMBER_OF_COLS, START_NODE, END_NODE } = useAlgorithmContext();

  const mouseActionsList = useMouseActions();

  class Cell {
    constructor(row, col) {
      this.row = row;
      this.col = col;
      this.isStart = row === START_NODE.row && col === START_NODE.col;
      this.isEnd = row === END_NODE.row && col === END_NODE.col;
      this.isVisited = false;
      this.isWall = false;
      this.distance = Infinity;
      this.previousNode = null;
    }
  }

  useEffect(() => {
    const table = Array.from({ length: NUMBER_OF_ROWS }, () => []);
    for (let row = 0; row < NUMBER_OF_ROWS; row++) {
      for (let col = 0; col < NUMBER_OF_COLS; col++) {
        const newNode = new Cell(row, col);
        table[row].push(newNode);
        if (newNode.isStart) setStartNode(newNode);
        if (newNode.isEnd) setEndNode(newNode);
      }
    }
    setGrid?.(table);
  }, []);

  return (
    <S.Grid>
      <tbody>
        {grid?.map((currentRow, rowIdx) => (
          <tr key={rowIdx} id={`row-${rowIdx}`}>
            {currentRow.map((cell, cellIdx) => {
              return <Node key={cellIdx} {...cell} {...mouseActionsList} />;
            })}
          </tr>
        ))}
      </tbody>
    </S.Grid>
  );
}

export default Grid;
