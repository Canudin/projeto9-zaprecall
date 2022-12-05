import styled from "styled-components";

export default function Footer(props) {
  const footerPhrase = `${props.answerNumber.length}/${props.cards.length} CONCLUÍDOS`;
  
  return (
    <FooterContainer>
      <p>{footerPhrase}</p>
      {/* <div></div> */}
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
  div {
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
  }
`;
