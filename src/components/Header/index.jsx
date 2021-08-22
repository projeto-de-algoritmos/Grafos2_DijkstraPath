import useVisualizeDijkstra from '../../hooks/useVisualizeDijkstra';
import useClearBoard from '../../hooks/useClearBoard';
import { useAlgorithmContext } from '../../contexts/Context';
import Logo from '../../styles/path.svg';
import { useRouter } from 'next/router';
import * as S from './styles';

function Header() {
  const { isAnimating } = useAlgorithmContext();
  const clearBoard = useClearBoard('keep-walls');
  const resetBoard = useClearBoard('reset');
  const visualizeDijkstra = useVisualizeDijkstra();

  const router = useRouter()

  return (
    <S.Nav id="navbar">
      <S.NavContainer>
        <S.Logo>
          <img src={Logo} alt="" /> <h1>Dijkstra Path</h1>
        </S.Logo>
        <S.Menu>
          <li>
            <S.Button
              mainBtn
              disabled={isAnimating}
              onClick={() => {
                visualizeDijkstra();
                router.push(
                  {
                    pathname: '/',
                  },
                  undefined,
                  { shallow: true }
                );
              }}
            >
              Visualizar Dijkstra
            </S.Button>
          </li>
          <li>
            <S.Button disabled={isAnimating} onClick={clearBoard}>
              Limpar Board
            </S.Button>
          </li>
          <li>
            <S.Button disabled={isAnimating} onClick={resetBoard}>
              Resetar Board
            </S.Button>
          </li>
        </S.Menu>
      </S.NavContainer>
    </S.Nav>
  );
}

export default Header;
