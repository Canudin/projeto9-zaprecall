import { useState } from "react";
import styled from "styled-components";
import next from "./assets/img/seta_play.png"
import reveal from "./assets/img/seta_virar.png"

export default function Card(props) {
  const { question, answer, index } = props;
  const [cardState, setCardState] = useState(0);
  switch (cardState) {
    case 0:
      return (
        <Flashcard>
          <p>Pergunta {index}</p>
          <img src={next} onClick={()=>{setCardState(1); console.log(cardState)}}/>
        </Flashcard>
      );
    case 1:
      return (
        <OpenedQuestion>
          <p>Pergunta {index}</p>
          <img src={reveal} onClick={()=>{setCardState(0); console.log(cardState)}}/>
        </OpenedQuestion>
      );
    case 2:
      return (
        <Flashcard>
          <p>Pergunta {index}</p>
          <ion-icon name="play-outline" />
          {/* <Question></Question> */}
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
  /* pointer-events: none; */
  p {
    font-family: "Recursive";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
  ion-icon {
    font-size: 30px;
  }
  ion-icon:hover {
    cursor: pointer
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
  img {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`;
