import { useState } from "react";
import styled from "styled-components";
import next from "./assets/img/seta_play.png";
import reveal from "./assets/img/seta_virar.png";
import certo from "./assets/img/icone_certo.png";
import erro from "./assets/img/icone_erro.png";
import quase from "./assets/img/icone_quase.png";

export default function Card(props) {
  const { question, answer, index, setAnswerNumber, answerNumber } = props;
  const [cardState, setCardState] = useState(0);
  const images = [
    { icon: erro, textcolor: "#FF3030" },
    { icon: quase, textcolor: "#FF922E" },
    { icon: certo, textcolor: "#2FBE34" },
  ];

  switch (cardState) {
    case 0:
      return (
        <Flashcard>
          <p>Pergunta {index + 1}</p>
          <img
            src={next}
            onClick={() => {
              setCardState(1);
            }}
          />
        </Flashcard>
      );
    case 1:
      return (
        <OpenedQuestion>
          <p>{question}</p>
          <img
            src={reveal}
            onClick={() => {
              setCardState(2);
            }}
          />
        </OpenedQuestion>
      );
    case 2:
      return (
        <OpenedQuestion>
          <p>{answer}</p>
          <div>
            <Botao
              background={images[0].textcolor}
              borderColor={images[0].textcolor}
              onClick={() => {
                setCardState(3);
                return setAnswerNumber([...answerNumber, 0]);
              }}
            >
              <p>Não lembrei</p>
            </Botao>
            <Botao
              background={images[1].textcolor}
              borderColor={images[1].textcolor}
              onClick={() => {
                setCardState(3);
                return setAnswerNumber([...answerNumber, 1]);
              }}
            >
              <p>Quase Lembrei</p>
            </Botao>
            <Botao
              background={images[2].textcolor}
              borderColor={images[2].textcolor}
              onClick={() => {
                setCardState(3);
                return setAnswerNumber([...answerNumber, 2]);
              }}
            >
              <p>Zap!</p>
            </Botao>
          </div>
        </OpenedQuestion>
      );
    case 3:
      return (
        <Flashcard>
          <p>Pergunta {index + 1}</p>
          <img src={images[answerNumber[index]].icon} />
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
  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
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
