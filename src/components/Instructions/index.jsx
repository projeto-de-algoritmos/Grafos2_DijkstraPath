import * as S from './styles';

function Instructions() {
  return (
    <S.InstructionsContainer>
      <p>
        Desenhe obstaculos clicando e arastando o mouse pelo quadro.
      </p>
      <p>
        Mova os pontos de inicio e fim arastando-os.
      </p>
      <p>Depois de  encontrar um caminho, mova o ponto de inicio para ver o caminho alterar instantaneamente.</p>
    </S.InstructionsContainer>
  );
}

export default Instructions;
