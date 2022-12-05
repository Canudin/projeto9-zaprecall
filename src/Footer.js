import { useState } from "react";
import styled from "styled-components";
import AnswerIcon from "./AnswerIcon";

export default function Footer(props) {
  const footerPhrase = `${props.answerNumber.length}/${props.cards.length} CONCLUÍDOS`;
  const images = props.images;
  const gzPhrase = props.gzPhrase;
  const gzTitle = props.gzTitle;
  const displayGz = props.displayGz;
  return (
    <FooterContainer data-test="footer">
      <div data-test="finish-text">
        <Congrats show={displayGz}>{gzTitle}</Congrats>
        <TextCongrats show={displayGz}>{gzPhrase}</TextCongrats>
      </div>
      <p>{footerPhrase}</p>
      <ContainerIcons>
        {props.answerNumber.map((answer) => (
          <AnswerIcon answer={answer} images={images} />
        ))}
      </ContainerIcons>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Recursive";
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
`;

const ContainerIcons = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  margin: 20px;
`;

const Congrats = styled.p`
  display: ${(props) => props.show};
`;

const TextCongrats = styled.p`
  display: ${(props) => props.show};
  justify-self: center;
`;
