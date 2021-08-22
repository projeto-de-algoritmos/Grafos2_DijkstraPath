import { useEffect, useRef } from 'react';
import * as S from './styles'

function Node({
  row,
  col,
  isEnd,
  isStart,
  handleMouseUp,
  handleMouseDown,
  handleMouseEnter,
  handleMouseLeave,
}) {
  const nodeRef = useRef();

  useEffect(() => {
    if (isStart) nodeRef.current.classList.add('node-start');
    if (isEnd) nodeRef.current.classList.add('node-end');
  }, []);

  return (
    <S.Node
      ref={nodeRef}
      id={`node-${row}-${col}`}
      onMouseUp={handleMouseUp}
      onMouseDown={(e) => handleMouseDown(isStart, isEnd, row, col, e)}
      onMouseEnter={() => handleMouseEnter(row, col)}
      onMouseLeave={() => handleMouseLeave(row, col)}
    ></S.Node>
  );
}

export default Node;
