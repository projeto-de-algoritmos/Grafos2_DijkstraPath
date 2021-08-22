import { createContext, useContext, useState } from 'react';

export const AlgorithmContextDefaultValues = {
  setGrid: () => {},
  setStartNode: () => {},
  setEndNode: () => {},
  setMouseDown: () => {},
  setStartNodeMoving: () => {},
  setEndNodeMoving: () => {},
  setisAnimating: () => {},
  setPathFound: () => {},
};

export const AlgorithmContext = createContext(AlgorithmContextDefaultValues);

export const AlgorithmProvider = ({ children }) => {
  const [grid, setGrid] = useState([]);
  const [startNode, setStartNode] = useState({});
  const [endNode, setEndNode] = useState({});
  const [isMouseDown, setMouseDown] = useState(false);
  const [isStartNodeMoving, setStartNodeMoving] = useState(false);
  const [isEndNodeMoving, setEndNodeMoving] = useState(false);
  const [isAnimating, setisAnimating] = useState(false);
  const [pathFound, setPathFound] = useState(false);

  const NUMBER_OF_ROWS = 16;
  const NUMBER_OF_COLS = 30;
  const START_NODE = { row: 8, col: 10 };
  const END_NODE = { row: 8, col: 20 };

  const value = {
    grid,
    startNode,
    endNode,
    isMouseDown,
    isStartNodeMoving,
    isEndNodeMoving,
    isAnimating,
    pathFound,
    NUMBER_OF_ROWS,
    NUMBER_OF_COLS,
    START_NODE,
    END_NODE,
    setGrid,
    setStartNode,
    setEndNode,
    setMouseDown,
    setStartNodeMoving,
    setEndNodeMoving,
    setisAnimating,
    setPathFound,
  };

  return <AlgorithmContext.Provider value={value}>{children}</AlgorithmContext.Provider>;
};

export function useAlgorithmContext() {
  const context = useContext(AlgorithmContext);

  if (!context) {
    throw new Error('useAlgorithmContext must be used within a AlgorithmProvider');
  }

  return context;
}
