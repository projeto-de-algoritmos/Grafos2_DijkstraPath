import Logo from '../../styles/path.svg';
import { useRouter } from 'next/router';
import * as S from './styles';

function Header() {
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
              Visualize Dijkstra
            </S.Button>
          </li>
          <li>
            <S.Button>
              Clear Board
            </S.Button>
          </li>
          <li>
            <S.Button>
              Reset Board
            </S.Button>
          </li>
        </S.Menu>
      </S.NavContainer>
    </S.Nav>
  );
}

export default Header;
