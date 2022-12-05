import styled from "styled-components";
import Footer from "./Footer";
import Logo from "./Logo";
import Content from "./Content";
import { useState } from "react";
import certo from "./assets/img/icone_certo.png";
import erro from "./assets/img/icone_erro.png";
import quase from "./assets/img/icone_quase.png";
export default function App() {
  const cards = [
    { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
    { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
    { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    {
      question: "O ReactDOM nos ajuda __",
      answer: "Interagindo com a DOM para colocar componentes React na mesma",
    },
    {
      question: "Usamos o npm para __",
      answer: "Gerenciar os pacotes necessários e suas dependências",
    },
    { question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
    {
      question: "Usamos estado (state) para __",
      answer:
        "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ];
  const images = [
    { icon: erro, textcolor: "#FF3030", datatest: "no-icon" },
    { icon: quase, textcolor: "#FF922E", datatest: "partial-icon" },
    { icon: certo, textcolor: "#2FBE34", datatest: "zap-icon" },
  ];
  const [answerNumber, setAnswerNumber] = useState([]);
  const [gzTitle, setGzTitle] = useState("🥳 Parabéns!");
  const [gzPhrase, setGzPhrase] = useState("Você não esqueceu de nenhum flashcard!");
  const [displayGz, setDisplayGz] = useState("none");
  const congrats = () => {
    if (answerNumber.length === 8) {
      setDisplayGz("auto");
      if (answerNumber.includes(0)) {
        setGzTitle("😥 Putz...");
        setGzPhrase("Ainda faltam alguns... Mas não desanime!");
        return;
      }
    }
  };

  return (
    <div className="app">
      <Container>
        <Logo />
        <Content
          cards={cards}
          images={images}
          setAnswerNumber={setAnswerNumber}
          answerNumber={answerNumber}
          congrats={congrats}
        />
        <Footer
          cards={cards}
          images={images}
          answerNumber={answerNumber}
          gzTitle={gzTitle}
          gzPhrase={gzPhrase}
          displayGz={displayGz}
        />
      </Container>
    </div>
  );
}

const Container = styled.div`
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px;
  padding: 0px;
  padding-bottom: 200px;
`;
