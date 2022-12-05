import { useState } from "react";
import styled from "styled-components";
import next from "./assets/img/seta_play.png";
import reveal from "./assets/img/seta_virar.png";

export default function Card(props) {
  const { question, answer, index, setAnswerNumber, answerNumber } = props;
  const [cardState, setCardState] = useState(0);
  const images = props.images;
  switch (cardState) {
    case 0:
      return (
        <Flashcard data-test="flashcard">
          <CardNaoRespondido data-test="flashcard-text">Pergunta {index + 1}</CardNaoRespondido>
          <img
            data-test="play-btn"
            src={next}
            onClick={() => {
              setCardState(1);
            }}
          />
        </Flashcard>
      );
    case 1:
      return (
        <OpenedQuestion data-test="flashcard">
          <p data-test="flashcard-text">{question}</p>
          <img
            data-test="turn-btn"
            src={reveal}
            onClick={() => {
              setCardState(2);
            }}
          />
        </OpenedQuestion>
      );
    case 2:
      return (
        <OpenedQuestion data-test="flashcard">
          <p data-test="flashcard-text">{answer}</p>
          <div>
            <Botao
              data-test="no-btn"
              background={images[0].textcolor}
              borderColor={images[0].textcolor}
              onClick={() => {
                setCardState(3);
                return setAnswerNumber([...answerNumber, { answer: 0, key: index }]);
              }}
            >
              <p>Não lembrei</p>
            </Botao>
            <Botao
              data-test="partial-btn"
              background={images[1].textcolor}
              borderColor={images[1].textcolor}
              onClick={() => {
                setCardState(3);
                return setAnswerNumber([...answerNumber, { answer: 1, key: index }]);
              }}
            >
              <p>Quase Lembrei</p>
            </Botao>
            <Botao
              data-test="zap-btn"
              background={images[2].textcolor}
              borderColor={images[2].textcolor}
              onClick={() => {
                setCardState(3);
                return setAnswerNumber([...answerNumber, { answer: 2, key: index }]);
              }}
            >
              <p>Zap!</p>
            </Botao>
          </div>
        </OpenedQuestion>
      );
    case 3:
      return (
        <Flashcard data-test="flashcard">
          <CardRespondido
            data-test="flashcard-text"
            cardColor={images[answerNumber.find(item => item.key === index).answer].textcolor}
          >
            Pergunta {index + 1}
          </CardRespondido>
          <img
            data-test={images[answerNumber.find(item => item.key === index).answer].datatest}
            src={images[answerNumber.find(item => item.key === index).answer].icon}
          />
        </Flashcard>
      );

    default:
      break;
  }
}

const Flashcard = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 12px;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  pointer-events: none;
  user-select: none;
  img {
    pointer-events: all;
  }
  img:hover {
    cursor: pointer;
  }
  .erro {
  }
  .quase {
  }
  .certo {
  }
`;

const OpenedQuestion = styled.div`
  width: 300px;
  margin: 12px;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  pointer-events: none;
  user-select: none;
  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
    pointer-events: all;
  }
  img:hover {
    cursor: pointer;
  }
  div {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }

  button:hover {
    cursor: pointer;
  }
`;

const Botao = styled.button`
  width: 90px;
  font-family: "Recursive";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  background: ${(props) => props.background};
  border-radius: 5px;
  border: 1px solid ${(props) => props.borderColor};
  padding: 5px;
  pointer-events: all;
`;

const CardRespondido = styled.p`
  font-family: "Recursive";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-decoration: line-through;
  color: ${(props) => props.cardColor};
`;

const CardNaoRespondido = styled.p`
  font-family: "Recursive";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #333333;
`;
