import Card from "./Card";

export default function Content(props) {
  const cards = props.cards;
  const images = props.images;
  const congrats = props.congrats;
  return (
    <>
      {cards.map((card, index) => (
        <Card
          onChange={congrats()}
          question={card.question}
          answer={card.answer}
          index={index}
          images={images}
          setAnswerNumber={props.setAnswerNumber}
          answerNumber={props.answerNumber}
        />
      ))}
    </>
  );
}
